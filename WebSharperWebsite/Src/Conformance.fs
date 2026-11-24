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

/// The client side of /conformance: the URL hash selects the language and, optionally, an area to open:
/// `#csharp` (the default), `#fsharp`, `#fsharp/dates`. The language switch and the area pills are plain
/// links to such hashes, so every state is a shareable URL and back/forward walk through them.
[<JavaScript>]
module ConformanceClient =

    let private langs = [| "csharp"; "fsharp" |]

    /// (language, area id) from a hash such as "#fsharp/dates"
    let private parse (hash: string) =
        let parts = (if hash.StartsWith "#" then hash.Substring 1 else hash).Split([| '/' |])
        if Array.contains parts.[0] langs then
            parts.[0], (if parts.Length > 1 && parts.[1] <> "" then Some parts.[1] else None)
        else "csharp", None

    let private all (selector: string) =
        let nodes = JS.Document.QuerySelectorAll selector
        [| for i in 0 .. nodes.Length - 1 -> As<Dom.Element> (nodes.Item i) |]

    [<Inline "$el.scrollIntoView({ block: 'start', behavior: $instant ? 'instant' : 'smooth' })">]
    let private scrollTo (el: Dom.Element) (instant: bool) = ()

    [<Inline "$el.open = true">]
    let private openDetails (el: Dom.Element) = ()

    [<Inline "document.readyState === 'complete'">]
    let private loaded () = X<bool>

    /// Shows the language the hash names and opens (and scrolls to) the area it names.
    let private apply (instant: bool) =
        let lang, area = parse JS.Window.Location.Hash
        for v in all "[data-lang-view]" do
            if v.GetAttribute "data-lang-view" = lang then v.RemoveAttribute "hidden" else v.SetAttribute("hidden", "")
        for b in all "[data-lang-tab]" do
            b.SetAttribute("aria-selected", (if b.GetAttribute "data-lang-tab" = lang then "true" else "false"))
        match area with
        | Some a ->
            let el = JS.Document.GetElementById(lang + "-area-" + a)
            if not (isNull el) && el.TagName = "DETAILS" then
                openDetails el
                scrollTo el instant
        | None -> ()

    /// Wires the page when the page activates the control (on DOMContentLoaded, with the server-rendered markup
    /// in place). `on.afterRender` would never fire here: the page activates the control with ReplaceInDom.
    let Behaviour () =
        // the language is applied at once; the area is opened again after `load`, as the page's own loading
        // leaves a <details> opened earlier closed
        apply true
        let fromLoad = fun () -> apply true
        if loaded () then JS.SetTimeout fromLoad 0 |> ignore
        else JS.Window.AddEventListener("load", (fun (_: Dom.Event) -> fromLoad ()), false)
        JS.Window.AddEventListener("hashchange", (fun (_: Dom.Event) -> apply false), false)
        // a link to the hash already in the URL fires no hashchange: reopen the area anyway
        for a in all "[data-open-area]" do
            a.AddEventListener("click", (fun (_: Dom.Event) ->
                if JS.Window.Location.Hash = a.GetAttribute "href" then apply false), false)
        div [ attr.``class`` "hidden" ] []

/// The /conformance page: core's C# and F# conformance checks, one view per language (the
/// client switches between them, see ConformanceClient), rendered at build time from `Assets/conformance/<csharp|fsharp>.json` (written by
/// `tools/conformance/export.mjs <lang>`). Field names are the JSON keys.
module Conformance =
    open WebSharper.UI.Html

    type Case = { name: string; code: string; status: string; net: string; js: string }

    type Area = { id: string; name: string; total: int; pass: int; cases: Case[] }

    type Known =
        { name: string; area: string; code: string; net: string; js: string
          difference: string; alternative: string }

    type Data =
        { lang: string; source: string; commit: string; commitDate: string; generated: string
          total: int; pass: int; known: int; mismatch: int; unsupported: int
          knownDifferences: Known[]; areas: Area[] }

    let private cache = Collections.Concurrent.ConcurrentDictionary<string, Data>()

    /// `lang` is "csharp" or "fsharp".
    let Summary (lang: string) =
        cache.GetOrAdd(lang, fun lang ->
            let asm = Assembly.GetExecutingAssembly()
            let name = asm.GetManifestResourceNames() |> Array.find (fun n -> n.EndsWith("conformance." + lang + ".json"))
            use s = asm.GetManifestResourceStream name
            use r = new StreamReader(s)
            JsonSerializer.Deserialize<Data>(r.ReadToEnd(), JsonSerializerOptions(PropertyNameCaseInsensitive = true)))

    let private langName lang = if lang = "fsharp" then "F#" else "C#"
    let private langs = [ "csharp"; "fsharp" ]

    let private compileError = "WS-COMPILE-ERROR"

    /// `code` spans in the reason texts.
    let private richText (s: string) =
        s.Split('`')
        |> Array.mapi (fun i part ->
            if i % 2 = 1 then code [ attr.``class`` "rounded bg-gray-100 px-1 py-0.5 font-mono text-[0.85em] text-gray-800 dark:bg-white/10 dark:text-gray-200" ] [ text part ]
            else text part)
        |> Doc.Concat

    let private codeLine (cls: string) (s: string) =
        code [ attr.``class`` ("block min-w-0 whitespace-pre-wrap break-words font-mono text-[13px] leading-5 " + cls) ] [ text s ]

    let private output (label: string) (value: string) =
        div [ attr.``class`` "flex min-w-0 items-baseline gap-2" ] [
            span [ attr.``class`` "w-9 shrink-0 text-[11px] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500" ] [ text label ]
            (if value = compileError then
                span [ attr.``class`` "text-sm text-gray-500 italic dark:text-gray-400" ] [ text "compile error: not supported" ]
             else codeLine "text-gray-800 dark:text-gray-200" (if value = "" then "\"\"" else value))
        ]

    let private knownCard (k: Known) =
        div [ attr.``class`` "ws-card min-w-0 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900/60" ] [
            div [ attr.``class`` "flex flex-wrap items-center gap-2" ] [
                code [ attr.``class`` "font-mono text-sm font-semibold text-gray-950 dark:text-white" ] [ text k.name ]
                span [ attr.``class`` "rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300" ] [ text k.area ]
            ]
            p [ attr.``class`` "mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300" ] [ richText k.difference ]
            (if k.alternative = "" then Doc.Empty
             else
                p [ attr.``class`` "mt-3 flex gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm leading-6 text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200" ] [
                    span [ attr.``class`` "shrink-0 font-semibold" ] [ text "Instead:" ]
                    span [] [ richText k.alternative ]
                ])
            details [ attr.``class`` "mt-3" ] [
                summary [ attr.``class`` "cursor-pointer select-none text-xs font-medium text-indigo-600 dark:text-indigo-400" ] [ text "The case" ]
                div [ attr.``class`` "mt-2 space-y-1.5 rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-white/5 dark:bg-black/20" ] [
                    codeLine "text-gray-700 dark:text-gray-300" k.code
                    output ".NET" k.net
                    output "JS" k.js
                ]
            ]
        ]

    let private knownDifferences (d: Data) =
        Doc.Concat [ for k in d.knownDifferences -> knownCard k ]

    let private statusDot (status: string) =
        match status with
        | "pass" -> "bg-emerald-500", "Same result as .NET"
        | "known" -> "bg-amber-400", "Known difference"
        | "mismatch" -> "bg-rose-500", "Different result"
        | _ -> "bg-gray-300 dark:bg-gray-600", "Not supported"

    let private caseRow (area: string option) (c: Case) =
        let dot, label = statusDot c.status
        li [ attr.``class`` "grid gap-x-4 gap-y-1.5 px-4 py-3 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_minmax(0,14rem)]" ] [
            div [ attr.``class`` "min-w-0" ] [
                div [ attr.``class`` "flex min-w-0 items-start gap-2.5" ] [
                    span [ attr.``class`` ("mt-1.5 h-2 w-2 shrink-0 rounded-full " + dot); attr.title label ] []
                    span [ attr.``class`` "sr-only" ] [ text (label + ": ") ]
                    code [ attr.``class`` "min-w-0 break-words font-mono text-[13px] font-medium leading-5 text-gray-950 dark:text-white" ] [ text c.name ]
                ]
                (match area with
                 | Some a -> span [ attr.``class`` "mt-1 ml-4.5 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300" ] [ text a ]
                 | None -> Doc.Empty)
            ]
            codeLine "pl-4.5 text-gray-600 md:pl-0 dark:text-gray-400" c.code
            div [ attr.``class`` "min-w-0 space-y-1 pl-4.5 md:pl-0" ] [
                if c.status = "pass" then
                    codeLine "text-gray-800 dark:text-gray-200" (if c.net = "" then "\"\"" else c.net)
                else
                    output ".NET" c.net
                    output "JS" c.js
            ]
        ]

    let private areaBlock (lang: string) (a: Area) =
        let pct = 100.0 * float a.pass / float (max 1 a.total)
        details [ attr.id (lang + "-area-" + a.id); attr.``class`` "ws-card group scroll-mt-28 rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/60" ] [
            summary [ attr.``class`` "flex cursor-pointer select-none list-none items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden" ] [
                span [ attr.``class`` "flex-1 text-base font-semibold text-gray-950 dark:text-white" ] [ text a.name ]
                span [ attr.``class`` "font-mono text-xs text-gray-500 dark:text-gray-400" ] [ text (string a.pass + " / " + string a.total + " same as .NET") ]
                div [ attr.``class`` "hidden h-1.5 w-24 overflow-hidden rounded-full bg-gray-200 sm:block dark:bg-white/10" ] [
                    div [ attr.``class`` "h-full rounded-full bg-emerald-500"; attr.style ("width:" + pct.ToString("0.0", Globalization.CultureInfo.InvariantCulture) + "%") ] []
                ]
                span [ attr.``class`` "text-gray-400 transition-transform group-open:rotate-90 dark:text-gray-500"; Attr.Create "aria-hidden" "true" ] [ text "›" ]
            ]
            ul [ attr.``class`` "divide-y divide-gray-100 border-t border-gray-100 dark:divide-white/5 dark:border-white/5" ] [
                for c in a.cases -> caseRow None c
            ]
        ]

    let private areas (d: Data) =
        Doc.Concat [ for a in d.areas -> areaBlock d.lang a ]

    /// Cases that differ without an accepted reason or don't compile: shown in their own section when there are any.
    let private openIssues (d: Data) =
        let cases = [ for a in d.areas do for c in a.cases do if c.status = "mismatch" || c.status = "unsupported" then a.name, c ]
        if List.isEmpty cases then Doc.Empty else
        section [ attr.id (d.lang + "-open"); attr.``class`` "mx-auto mt-20 max-w-6xl scroll-mt-28 px-6 lg:px-8 xl:px-0 2xl:max-w-7xl" ] [
            div [ attr.``class`` "max-w-3xl" ] [
                h2 [ attr.``class`` "text-2xl font-bold tracking-tight text-gray-950 dark:text-white" ] [ text "Not matching .NET yet" ]
                p [ attr.``class`` "mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400" ] [
                    text ("These cases are not accepted differences: " + string d.mismatch + " give a different result in JavaScript and "
                          + string d.unsupported + " are rejected by the compiler. They are gaps to fix in WebSharper, and the check turns them green as they are fixed.")
                ]
            ]
            details [ attr.``class`` "ws-card group mt-6 rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/60" ] [
                summary [ attr.``class`` "flex cursor-pointer select-none list-none items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden" ] [
                    span [ attr.``class`` "flex flex-1 flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium text-gray-700 dark:text-gray-300" ] [
                        span [ attr.``class`` "flex items-center gap-2" ] [
                            span [ attr.``class`` "h-2 w-2 rounded-full bg-rose-500" ] []
                            text (string d.mismatch + " different results")
                        ]
                        span [ attr.``class`` "flex items-center gap-2" ] [
                            span [ attr.``class`` "h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600" ] []
                            text (string d.unsupported + " rejected at compile time")
                        ]
                    ]
                    span [ attr.``class`` "text-gray-400 transition-transform group-open:rotate-90 dark:text-gray-500"; Attr.Create "aria-hidden" "true" ] [ text "›" ]
                ]
                ul [ attr.``class`` "divide-y divide-gray-100 border-t border-gray-100 dark:divide-white/5 dark:border-white/5" ] [
                    for (area, c) in cases -> caseRow (Some area) c
                ]
            ]
        ]

    /// The C# / F# switch at the top of the page: links to `#csharp` / `#fsharp`, styled by `aria-selected`,
    /// which the client keeps in step with the hash (C# is selected without one).
    let private langSwitch () =
        div [ attr.``class`` "inline-flex rounded-full border border-gray-200 bg-white p-1 text-sm font-medium dark:border-gray-800 dark:bg-gray-900"; Attr.Create "role" "tablist"; Attr.Create "aria-label" "Language" ] [
            for l in langs ->
                Html.a [
                    attr.href ("#" + l)
                    Attr.Create "role" "tab"
                    Attr.Create "data-lang-tab" l
                    Attr.Create "aria-selected" (if l = "csharp" then "true" else "false")
                    attr.``class`` "rounded-full px-4 py-1.5 text-gray-600 transition hover:text-gray-950 aria-selected:bg-gray-900 aria-selected:text-white dark:text-gray-400 dark:hover:text-white dark:aria-selected:bg-white dark:aria-selected:text-gray-900"
                ] [ text (langName l) ]
        ]

    let private areaNav (d: Data) =
        Doc.Concat [
            for a in d.areas ->
                Html.a [
                    attr.href ("#" + d.lang + "/" + a.id)
                    Attr.Create "data-open-area" a.id
                    attr.``class`` "rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-indigo-400"
                ] [ text (a.name + " · " + string a.total) ]
        ]

    let private passPercent (d: Data) =
        (100.0 * float d.pass / float (max 1 d.total)).ToString("0.0", Globalization.CultureInfo.InvariantCulture)

    /// One language's view: hidden unless it is C#, the language shown without a hash.
    let private langView (lang: string) =
        let d = Summary lang
        Templates.ConformanceTemplate.LangView()
            .LangId(lang)
            .ViewAttr(if lang = "csharp" then Attr.Empty else attr.hidden "")
            .Lang(langName lang)
            .Project(d.source.Substring(d.source.LastIndexOf ' ' + 1))
            .JsonPath("/Assets/conformance/" + lang + ".json")
            .TsNote(if lang = "csharp" then " The TypeScript declarations WebSharper generates for the cases are type-checked too." else "")
            .OpenIssues(openIssues d)
            .Commit(d.commit)
            .CommitDate(d.commitDate)
            .Total(string d.total)
            .Pass(string d.pass)
            .PassPct(passPercent d)
            .Known(string d.known)
            .Mismatch(string d.mismatch)
            .Unsupported(string d.unsupported)
            .AreaCount(string d.areas.Length)
            .KnownDifferences(knownDifferences d)
            .AreaNav(areaNav d)
            .Areas(areas d)
            .Doc()

    let Fill (t: Templates.ConformanceTemplate.Content) =
        t.LangSwitch(langSwitch ())
         .Langs(Doc.Concat [ for l in langs -> langView l ])
