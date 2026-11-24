namespace WebSharperWebsite

open System
open System.IO
open System.Reflection
open System.Text.Json
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client

/// The /coverage page's data, as written by `tools/api-coverage` to
/// `Assets/coverage/`. Field names are the JSON keys, so the same records are
/// deserialized on the server and read as plain JSON objects on the client.
[<JavaScript>]
module CoverageData =

    type MemberRow = { name: string; signature: string; status: string; via: string }

    type TypeRow =
        { name: string; clrName: string; assembly: string; kind: string; status: string
          covered: int; maybe: int; total: int; members: MemberRow[] }

    type TypeSummary = { name: string; kind: string; status: string; covered: int; total: int }

    type NamespaceSummary =
        { name: string; focus: bool; covered: int; total: int; file: string; types: TypeSummary[] }

    type LibrarySummary =
        { id: string; name: string; covered: int; total: int
          focusCovered: int; focusTotal: int; namespaces: NamespaceSummary[] }

    type Index =
        { websharper: string; dotnet: string; fsharpCore: string; generated: string
          statuses: string; libraries: LibrarySummary[] }

    type NamespaceFile =
        { library: string; ``namespace``: string; websharper: string; types: TypeRow[] }

    let DataRoot = "/Assets/coverage/"

    /// The deep link that opens a namespace in the explorer.
    let NamespaceHash (libId: string) (ns: string) = "#ns=" + libId + ":" + ns

    let Percent (covered: int) (total: int) =
        if total = 0 then 100.0 else 100.0 * float covered / float total

    let BarClass (pct: float) =
        if pct >= 75.0 then "bg-emerald-500"
        elif pct >= 25.0 then "bg-amber-400"
        elif pct > 0.0 then "bg-orange-400"
        else "bg-gray-300 dark:bg-gray-600"

/// The explorer: search, status filter, namespace drill-down. Runs in the browser
/// and fetches the per-namespace member files on demand.
[<JavaScript>]
module CoverageClient =
    open CoverageData

    [<Inline "fetch($url).then(function (r) { return r.json(); }).then($ok)">]
    let private fetchJson (url: string) (ok: obj -> unit) : unit = X<unit>

    [<Inline "$x.toFixed(1)">]
    let private fixed1 (x: float) : string = X<string>

    [<Inline "decodeURIComponent($s)">]
    let private decode (s: string) : string = X<string>

    [<Inline "new URLSearchParams(location.search).get($k) || ''">]
    let private queryParam (k: string) : string = X<string>

    [<Inline "$el.scrollIntoView({ block: 'start' })">]
    let private scrollIntoView (el: Dom.Element) : unit = X<unit>

    [<Inline "history.replaceState(null, '', $h)">]
    let private replaceHash (h: string) : unit = X<unit>

    let private stripGenerics (n: string) =
        let i = n.IndexOf '<'
        if i < 0 then n else n.Substring(0, i)

    let private statusDot (status: string) =
        match status with
        | "covered" -> "bg-emerald-500"
        | "maybe" | "partial" -> "bg-amber-400"
        | _ -> "bg-gray-300 dark:bg-gray-600"

    let private statusLabel (status: string) =
        match status with
        | "covered" -> "Translates"
        | "partial" -> "Partly"
        | "maybe" -> "Maybe"
        | _ -> "Not translated"

    let private chip (cls: string) (label: string) =
        span [ attr.``class`` ("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium " + cls) ] [ text label ]

    let private kindChip (kind: string) =
        chip "bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-300" kind

    let private bar (covered: int) (total: int) =
        let pct = Percent covered total
        div [ attr.``class`` "h-1.5 w-24 shrink-0 overflow-hidden rounded-full bg-gray-200 dark:bg-white/10" ] [
            div [ attr.``class`` ("h-full rounded-full " + BarClass pct); attr.style ("width:" + string (Math.Max(pct, 2.0)) + "%") ] []
        ]

    let private viaText (via: string) =
        if via = "" then "" else
        let i = via.IndexOf ':'
        let kind = if i < 0 then via else via.Substring(0, i)
        match kind with
        | "inline" -> "inline JavaScript"
        | "direct" -> "compiled proxy"
        | "macro" | "macro+fallback" -> "macro"
        | "class macro" -> "type-level macro"
        | "interface" -> "interface"
        | "enum" -> "enum value"
        | "System.Object" -> "via System.Object"
        | "built-in" -> "built-in"
        | "remote" -> "remote call"
        | k -> k

    let private memberList (members: MemberRow[]) =
        if members.Length = 0 then
            p [ attr.``class`` "px-4 py-3 text-sm text-gray-500 dark:text-gray-400" ] [ text "No members match." ]
        else
        ul [ attr.``class`` "divide-y divide-gray-100 dark:divide-white/5" ] [
            for m in members ->
                li [ attr.``class`` "flex items-start gap-3 px-4 py-2" ] [
                    span [
                        attr.``class`` ("mt-1.5 h-2 w-2 shrink-0 rounded-full " + statusDot m.status)
                        attr.title (statusLabel m.status)
                    ] []
                    code [ attr.``class`` "min-w-0 flex-1 break-words font-mono text-[13px] leading-5 text-gray-800 dark:text-gray-200" ] [ text m.signature ]
                    span [ attr.``class`` "hidden shrink-0 text-xs text-gray-500 sm:block dark:text-gray-400" ] [
                        text (if m.status = "missing" then "not translated" else viaText m.via)
                    ]
                ]
        ]

    let Explorer () =
        let index = Var.Create (None: Index option)
        let query = Var.Create (queryParam "q")
        let filter = Var.Create "all"
        let selected = Var.Create ""          // "<libId>:<namespace>"
        let openType = Var.Create ""          // "<libId>:<namespace>#<type index>"
        let tick = Var.Create 0
        let cache = Collections.Generic.Dictionary<string, NamespaceFile>()
        let loading = Collections.Generic.HashSet<string>()

        let ensure (file: string) =
            if file <> "" && not (cache.ContainsKey file) && not (loading.Contains file) then
                loading.Add file |> ignore
                fetchJson (DataRoot + file) (fun o ->
                    cache.[file] <- As<NamespaceFile> o
                    loading.Remove file |> ignore
                    tick.Value <- tick.Value + 1)

        let members (ns: NamespaceSummary) (i: int) =
            if ns.file <> "" && cache.ContainsKey ns.file then Some cache.[ns.file].types.[i] else None

        let readHash () =
            let h = JS.Window.Location.Hash
            if h.StartsWith "#ns=" then
                selected.Value <- decode (h.Substring 4)
                query.Value <- ""
                // after the namespace view has rendered, or the jump lands mid-list
                JS.SetTimeout (fun () ->
                    let el = JS.Document.GetElementById "explorer"
                    if not (isNull el) then scrollIntoView el) 50 |> ignore

        let openNamespace (libId: string) (ns: string) (typeIndex: int) =
            replaceHash (NamespaceHash libId ns)
            selected.Value <- libId + ":" + ns
            query.Value <- ""
            openType.Value <- if typeIndex >= 0 then libId + ":" + ns + "#" + string typeIndex else ""

        let filterMatches (f: string) (status: string) =
            f = "all" || f = status || (f = "partial" && status = "maybe")

        /// One type: a header row (click to expand) and, when open, its members.
        let typeBlock (lib: LibrarySummary) (ns: NamespaceSummary) (i: int) (t: TypeSummary) (isOpen: bool) (memberQ: string) (showNs: bool) =
            let key = lib.id + ":" + ns.name + "#" + string i
            if isOpen then ensure ns.file
            div [ attr.``class`` "overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/60" ] [
                button [
                    attr.``type`` "button"
                    attr.``class`` "flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-white/[0.03]"
                    on.click (fun _ _ ->
                        if showNs then openNamespace lib.id ns.name i
                        else openType.Value <- if openType.Value = key then "" else key)
                ] [
                    span [ attr.``class`` ("h-2.5 w-2.5 shrink-0 rounded-full " + statusDot t.status); attr.title (statusLabel t.status) ] []
                    span [ attr.``class`` "min-w-0 flex-1" ] [
                        span [ attr.``class`` "font-mono text-sm font-semibold text-gray-900 dark:text-white" ] [ text t.name ]
                        (if showNs then
                            span [ attr.``class`` "ml-2 font-mono text-xs text-gray-500 dark:text-gray-400" ] [ text (if ns.name = "" then lib.name else ns.name) ]
                         else Doc.Empty)
                    ]
                    kindChip t.kind
                    span [ attr.``class`` "hidden w-20 text-right font-mono text-xs text-gray-500 sm:block dark:text-gray-400" ] [ text (string t.covered + " / " + string t.total) ]
                    bar t.covered t.total
                ]
                (if not isOpen then Doc.Empty
                 elif ns.file = "" then
                    p [ attr.``class`` "border-t border-gray-100 px-4 py-3 text-sm text-gray-500 dark:border-white/5 dark:text-gray-400" ] [
                        text "No member of this namespace translates to JavaScript."
                    ]
                 else
                    match members ns i with
                    | None ->
                        p [ attr.``class`` "border-t border-gray-100 px-4 py-3 text-sm text-gray-500 dark:border-white/5 dark:text-gray-400" ] [ text "Loading…" ]
                    | Some row ->
                        let ms =
                            row.members
                            |> Array.filter (fun m ->
                                (memberQ = "" || m.name.ToLower().StartsWith memberQ)
                                && (filter.Value = "all" || filter.Value = "partial" || m.status = filter.Value))
                        div [ attr.``class`` "border-t border-gray-100 dark:border-white/5" ] [
                            p [ attr.``class`` "px-4 pt-2 font-mono text-[11px] text-gray-400 dark:text-gray-500" ] [ text (row.clrName + ", " + row.assembly) ]
                            memberList ms
                        ])
            ]

        let allTypes (idx: Index) =
            [ for lib in idx.libraries do
                for ns in lib.namespaces do
                    for i in 0 .. ns.types.Length - 1 do
                        yield lib, ns, i, ns.types.[i] ]

        let searchView (idx: Index) (q: string) (f: string) =
            let ql = q.Trim().ToLower()
            let dot = ql.LastIndexOf '.'
            let types = allTypes idx
            // "List.map", "String.Split": the members of the named type(s)
            let memberHits =
                if dot > 0 && dot < ql.Length - 1 then
                    let tq = ql.Substring(0, dot)
                    let mq = ql.Substring(dot + 1)
                    types
                    |> List.filter (fun (_, ns, _, t) ->
                        let n = (stripGenerics t.name).ToLower()
                        n = tq || n.EndsWith("." + tq) || (ns.name.ToLower() + "." + n) = tq)
                    |> List.sortBy (fun (lib, ns, _, t) -> (if ns.focus then 0 else 1), -t.covered)
                    |> List.truncate 6
                    |> List.map (fun (lib, ns, i, t) -> typeBlock lib ns i t true mq false)
                else []
            let typeHits =
                types
                |> List.filter (fun (_, ns, _, t) ->
                    filterMatches f t.status
                    && ((stripGenerics t.name).ToLower().Contains ql || (ns.name.ToLower() + "." + (stripGenerics t.name).ToLower()) = ql))
                |> List.sortBy (fun (_, ns, _, t) ->
                    let n = (stripGenerics t.name).ToLower()
                    (if n = ql then 0 elif n.StartsWith ql then 1 else 2), (if ns.focus then 0 else 1), t.name)
                |> List.truncate 50
            div [ attr.``class`` "space-y-3" ] [
                (if memberHits.IsEmpty then Doc.Empty
                 else div [ attr.``class`` "space-y-3" ] memberHits)
                (if typeHits.IsEmpty then
                    (if memberHits.IsEmpty then
                        p [ attr.``class`` "text-sm text-gray-500 dark:text-gray-400" ] [ text ("No type matches “" + q.Trim() + "”.") ]
                     else Doc.Empty)
                 else
                    div [ attr.``class`` "space-y-2" ] [
                        p [ attr.``class`` "pt-2 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" ] [ text "Types" ]
                        Doc.Concat [ for lib, ns, i, t in typeHits -> typeBlock lib ns i t false "" true ]
                    ])
            ]

        let namespaceView (idx: Index) (sel: string) (f: string) (opened: string) =
            let i = sel.IndexOf ':'
            let libId, nsName = if i < 0 then "", sel else sel.Substring(0, i), sel.Substring(i + 1)
            match idx.libraries |> Array.tryFind (fun l -> l.id = libId) with
            | None -> Doc.Empty
            | Some lib ->
            match lib.namespaces |> Array.tryFind (fun n -> n.name = nsName) with
            | None -> p [ attr.``class`` "text-sm text-gray-500" ] [ text ("Unknown namespace " + nsName) ]
            | Some ns ->
                div [] [
                    div [ attr.``class`` "flex flex-wrap items-center gap-3" ] [
                        h3 [ attr.``class`` "font-mono text-lg font-semibold text-gray-950 dark:text-white" ] [ text (if ns.name = "" then "(global)" else ns.name) ]
                        span [ attr.``class`` "text-sm text-gray-500 dark:text-gray-400" ] [
                            text (lib.name + " · " + string ns.covered + " of " + string ns.total + " members (" + fixed1 (Percent ns.covered ns.total) + "%)")
                        ]
                        button [
                            attr.``type`` "button"
                            attr.``class`` "ml-auto text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                            on.click (fun _ _ -> replaceHash "#explorer"; selected.Value <- ""; openType.Value <- "")
                        ] [ text "Close" ]
                    ]
                    div [ attr.``class`` "mt-4 space-y-2" ] [
                        for j in 0 .. ns.types.Length - 1 do
                            let t = ns.types.[j]
                            if filterMatches f t.status then
                                yield typeBlock lib ns j t (opened = lib.id + ":" + ns.name + "#" + string j) "" false
                    ]
                ]

        let suggestions =
            [ "String"; "List<T>"; "Dictionary"; "Math"; "DateTime"; "Enumerable"; "List.map"; "Seq"; "Map"; "Async"; "Regex"; "Task" ]

        let defaultView () =
            div [ attr.``class`` "flex flex-wrap gap-2" ] [
                for s in suggestions ->
                    button [
                        attr.``type`` "button"
                        attr.``class`` "rounded-full border border-gray-200 bg-white px-3 py-1.5 font-mono text-xs text-gray-700 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
                        on.click (fun _ _ -> query.Value <- s)
                    ] [ text s ]
            ]

        let filterButton (value: string) (label: string) =
            button [
                attr.``type`` "button"
                Attr.Dynamic "aria-pressed" (filter.View |> View.Map (fun f -> if f = value then "true" else "false"))
                attr.``class`` "rounded-full px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:text-gray-900 aria-pressed:bg-gray-900 aria-pressed:text-white dark:text-gray-300 dark:hover:text-white dark:aria-pressed:bg-white dark:aria-pressed:text-gray-900"
                on.click (fun _ _ -> filter.Value <- value)
            ] [ text label ]

        fetchJson (DataRoot + "index.json") (fun o -> index.Value <- Some (As<Index> o); readHash ())
        JS.Window.AddEventListener("hashchange", (fun (_: Dom.Event) -> readHash ()), false)

        let state =
            View.Map2 (fun (a, b) (c, d, e) -> a, b, c, d, e)
                (View.Map2 (fun a b -> a, b) index.View query.View)
                (View.Map2 (fun (a, b) c -> a, b, c)
                    (View.Map2 (fun a b -> a, b) filter.View selected.View)
                    (View.Map2 (fun a _ -> a) openType.View tick.View))

        div [] [
            div [ attr.``class`` "flex flex-col gap-3 sm:flex-row sm:items-center" ] [
                div [ attr.``class`` "relative flex-1" ] [
                    Doc.Input [
                        attr.``type`` "search"
                        attr.placeholder "Search a type or member, e.g. Dictionary, String.Split, List.map"
                        Attr.Create "aria-label" "Search APIs"
                        Attr.Create "autocomplete" "off"
                        attr.``class`` "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-mono text-sm text-gray-900 shadow-sm shadow-gray-950/5 placeholder:font-sans placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                    ] query
                ]
                div [ attr.``class`` "flex shrink-0 gap-1 rounded-full border border-gray-200 bg-white p-1 dark:border-gray-800 dark:bg-gray-900"; Attr.Create "role" "group"; Attr.Create "aria-label" "Filter by status" ] [
                    filterButton "all" "All"
                    filterButton "covered" "Translates"
                    filterButton "partial" "Partly"
                    filterButton "missing" "Not translated"
                ]
            ]
            div [ attr.``class`` "mt-6" ] [
                state |> Doc.BindView (fun (idx, q, f, sel, opened) ->
                    match idx with
                    | None -> p [ attr.``class`` "text-sm text-gray-500 dark:text-gray-400" ] [ text "Loading the coverage index…" ]
                    | Some idx ->
                        if q.Trim() <> "" then searchView idx q f
                        elif sel <> "" then namespaceView idx sel f opened
                        else defaultView ())
            ]
        ]

/// Server side: the headline numbers and the namespace overview, rendered at build
/// time from the embedded `Assets/coverage/index.json`.
module Coverage =
    open CoverageData

    let private index =
        lazy (
            let asm = Assembly.GetExecutingAssembly()
            let name = asm.GetManifestResourceNames() |> Array.find (fun n -> n.EndsWith "coverage.index.json")
            use s = asm.GetManifestResourceStream name
            use r = new StreamReader(s)
            JsonSerializer.Deserialize<Index>(r.ReadToEnd(), JsonSerializerOptions(PropertyNameCaseInsensitive = true)))

    let private pctText (c: int) (t: int) = (Percent c t).ToString("0.0", Globalization.CultureInfo.InvariantCulture)
    let private num (n: int) = n.ToString("N0", Globalization.CultureInfo.InvariantCulture)

    let private nsRow (lib: LibrarySummary) (ns: NamespaceSummary) =
        let pct = Percent ns.covered ns.total
        a [
            attr.href (NamespaceHash lib.id ns.name)
            attr.``class`` "grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 rounded-lg px-3 py-2 hover:bg-gray-50 sm:grid-cols-[1fr_8rem_6rem] dark:hover:bg-white/[0.03]"
        ] [
            span [ attr.``class`` "min-w-0 truncate font-mono text-sm text-gray-800 dark:text-gray-200" ] [ text (if ns.name = "" then "(global)" else ns.name) ]
            span [ attr.``class`` "text-right font-mono text-xs text-gray-500 sm:order-last dark:text-gray-400" ] [ text (num ns.covered + " / " + num ns.total) ]
            div [ attr.``class`` "col-span-2 h-1.5 overflow-hidden rounded-full bg-gray-200 sm:col-span-1 dark:bg-white/10" ] [
                div [ attr.``class`` ("h-full rounded-full " + BarClass pct); attr.style ("width:" + pctText (max ns.covered (if ns.total > 0 then ns.total / 50 else 0)) ns.total + "%") ] []
            ]
        ]

    let private libraryBlock (lib: LibrarySummary) =
        let focus = lib.namespaces |> Array.filter (fun n -> n.focus && n.total > 0) |> Array.sortBy (fun n -> -n.covered, n.name)
        let rest = lib.namespaces |> Array.filter (fun n -> not n.focus && n.total > 0) |> Array.sortBy (fun n -> -n.covered, n.name)
        div [ attr.``class`` "ws-card mt-6 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-800 dark:bg-gray-900/60" ] [
            div [ attr.``class`` "flex flex-wrap items-baseline gap-x-3 px-3" ] [
                h3 [ attr.``class`` "text-lg font-semibold tracking-tight text-gray-950 dark:text-white" ] [ text lib.name ]
                span [ attr.``class`` "text-sm text-gray-500 dark:text-gray-400" ] [
                    text (if rest.Length = 0 then num lib.covered + " of " + num lib.total + " members"
                          else num lib.focusCovered + " of " + num lib.focusTotal + " members in client-relevant namespaces")
                ]
            ]
            div [ attr.``class`` "mt-3" ] [ for ns in focus -> nsRow lib ns ]
            (if rest.Length = 0 then Doc.Empty
             else
                details [ attr.``class`` "group mt-3" ] [
                    summary [ attr.``class`` "cursor-pointer select-none px-3 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400" ] [
                        text (string rest.Length + " more namespaces (" + num (rest |> Array.sumBy (fun n -> n.covered)) + " of " + num (rest |> Array.sumBy (fun n -> n.total)) + " members), mostly server-side")
                    ]
                    div [ attr.``class`` "mt-1" ] [ for ns in rest -> nsRow lib ns ]
                ])
        ]

    let Overview () =
        Doc.Concat [ for lib in index.Value.libraries -> libraryBlock lib ]

    let Fill (t: Templates.CoverageTemplate.Content) =
        let idx = index.Value
        let fs = idx.libraries |> Array.find (fun l -> l.id = "fsharp-core")
        let net = idx.libraries |> Array.find (fun l -> l.id = "dotnet")
        t.Version(idx.websharper)
         .DotnetVersion(idx.dotnet)
         .FSharpCoreVersion(idx.fsharpCore)
         .Generated(idx.generated)
         .FSharpPct(pctText fs.covered fs.total)
         .FSharpCovered(num fs.covered)
         .FSharpTotal(num fs.total)
         .NetPct(pctText net.focusCovered net.focusTotal)
         .NetCovered(num net.focusCovered)
         .NetTotal(num net.focusTotal)
         .NetFocusCount(string (net.namespaces |> Array.filter (fun n -> n.focus) |> Array.length))
         .TotalCovered(num (idx.libraries |> Array.sumBy (fun l -> l.covered)))
         .Overview(Overview ())
