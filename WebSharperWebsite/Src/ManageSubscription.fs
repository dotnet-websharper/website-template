namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom

[<JavaScript>]
module ManageSubscription =
    open Utils

    let private toggleHidden (el: Element) (hidden: bool) =
        if isNull el then 
            ()
        else 
            el.ClassList.Toggle("hidden", hidden) |> ignore

    let private showFlex (el: Element) (show: bool) =
        if isNull el then 
            ()
        else 
            el.ClassList.Toggle("hidden", not show) |> ignore
            el.ClassList.Toggle("flex", show) |> ignore

    type SubRecord = { 
        id: string
        label: string
        plan: string
        totalSeats: int
        renewsAt: string
        status: string
        currency: string 
    }

    type SeatRecord = { 
        seatNo: int
        mutable username: string
        mutable status: string 
    }

    type InvoiceRecord = { 
        id: string
        date: string
        amount: int
        currency: string
        status: string 
    }

    type BillingRecord = { 
        mutable name: string
        mutable vatin: string
        mutable line1: string
        mutable city: string
        mutable postal_code: string
        mutable country: string 
    }

    // Mock DB - TODO: replace with real HTTP calls
    let mutable mockSubs = [| 
        { id = "sub_1"; label = "Professional (5 seats) — Jul 12 2025"; plan = "Professional"; totalSeats = 5; renewsAt = "2025-07-12"; status = "active"; currency = "usd" }

        { id = "sub_2"; label = "Professional (10 seats) — Aug 12 2025"; plan = "Professional"; totalSeats = 10; renewsAt = "2025-08-12"; status = "trialing"; currency = "usd" } 
    |]

    let mutable mockInvoices =
        dict [
            "sub_1",
                [| 
                    { id = "inv_2025_0001"; date = "2025-07-12"; amount = 250000; currency = "usd"; status = "paid" }
                    { id = "inv_2025_0002"; date = "2025-08-12"; amount = 250000; currency = "usd"; status = "open" } |]
            "sub_2",
                [| 
                    { id = "inv_2025_0003"; date = "2025-08-12"; amount = 500000; currency = "usd"; status = "paid" } 
                |] 
        ]
        |> System.Collections.Generic.Dictionary

    let mutable mockSeats =
        dict [
            "sub_1",
                [| 
                    { seatNo = 1; username = "alice"; status = "assigned"  }
                    { seatNo = 2; username = "bob-dev"; status = "assigned"  }
                    { seatNo = 3; username = ""; status = "available" }
                    { seatNo = 4; username = ""; status = "available" }
                    { seatNo = 5; username = ""; status = "available" } 
                |]
            "sub_2",
                Array.init 10 (fun i -> { seatNo = i + 1; username = ""; status = "available" }) 
        ]
        |> System.Collections.Generic.Dictionary

    let mutable mockBilling = { 
        name = ""; vatin = ""; line1 = ""; city = ""; 
        postal_code = ""; country = "" 
    }

    type State = { 
        mutable user: obj
        mutable subs: SubRecord array
        mutable currentSubId: string
        mutable seats: SeatRecord array
        mutable invoices: InvoiceRecord array
        mutable billing: BillingRecord option 
    }

    let mutable state = { 
        user = null
        subs = [||]
        currentSubId = ""
        seats = [||]
        invoices = [||]
        billing = None 
    }

    let formatMoney (amount: int) (currency: string) =
        let amountF = float amount / 100.0
        match currency.ToLower() with
        | "usd" -> sprintf "$%.2f" amountF
        | "eur" -> sprintf "€%.2f" amountF
        | "gbp" -> sprintf "£%.2f" amountF
        | _ -> sprintf "%.2f %s" amountF currency

    let getRouteFromHash () =
        let hash = JS.Window.Location.Hash
        if hash.StartsWith("#") then 
            hash.Substring(1) 
        else 
            hash
        |> fun str -> if str = "" then "subs" else str

    let navigate (hash: string) =
        let target = "#" + hash
        if JS.Window.Location.Hash <> target then
            JS.Window.Location.Hash <- target

    // Mock API - TODO: replace with real endpoints
    let apiListSubscriptions () =
        mockSubs

    let apiGetSeats (subId: string) =
        match mockSeats.TryGetValue subId with
        | true, rows -> 
            rows 
            |> Array.map (fun row -> 
                { row with username = row.username; status = row.status }
            )
        | _ -> [||]

    let apiGetInvoices (subId: string) =
        match mockInvoices.TryGetValue subId with
        | true, rows -> rows |> Array.map id
        | _ -> [||]

    let apiAssignSeat (subId: string) (seatNo: int) (username: string) =
        match mockSeats.TryGetValue subId with
        | true, rows ->
            rows
            |> Array.tryFind (fun row -> row.seatNo = seatNo)
            |> Option.iter (fun row ->
                row.username <- username
                row.status <- if username = "" then "available" else "assigned")
        | _ -> ()

    let apiUnassignSeat (subId: string) (seatNo: int) =
        match mockSeats.TryGetValue subId with
        | true, rows ->
            rows
            |> Array.tryFind (fun row -> row.seatNo = seatNo)
            |> Option.iter (fun r ->
                r.username <- ""
                r.status <- "available")
        | _ -> ()

    let apiBulkAssign (subId: string) (usernames: string array) =
        match mockSeats.TryGetValue subId with
        | true, rows ->
            let queue = System.Collections.Generic.Queue(usernames)
            for row in rows do
                if queue.Count > 0 && row.username = "" then
                    let nextUsername = queue.Dequeue()
                    row.username <- nextUsername
                    row.status <- "assigned"
        | _ -> ()

    let apiGetBilling () = 
        mockBilling

    let apiSaveBilling (data: BillingRecord) =
        mockBilling.name <- data.name
        mockBilling.vatin <- data.vatin
        mockBilling.line1 <- data.line1
        mockBilling.city <- data.city
        mockBilling.postal_code <- data.postal_code
        mockBilling.country <- data.country

    // UI cache
    type UiRefs = { 
        content: Element
        tabs: Element array
        pages: Element array
        toast: Element
        spinner: Element
        subscriptionSelect: Element
        planName: Element
        seatsUsed: Element
        seatsTotal: Element
        seatProgress: Element
        seatsBody: Element
        bulkBox: HTMLInputElement
        bulkError: Element
        applyBulk: Element
        clearBulk: Element
        btnAddSubscription: HTMLButtonElement
        refresh: Element
        invoiceBody: Element
        billingView: Element
        billingEdit: Element
        billingForm: HTMLFormElement
        btnBillingEdit: Element
        btnBillingSave: Element
        btnBillingCancel: Element
        saveBilling: Element 
    }

    let ui () : UiRefs = { 
        content = byId "settingsContent"
        tabs = 
            queryAllDoc ".settings-tab" 
            |> As<Element seq>
            |> Array.ofSeq
        pages = 
            queryAllDoc "[data-page]"
            |> As<Element seq>
            |> Array.ofSeq
        toast = byId "toast"
        spinner = byId "spinner"
        subscriptionSelect = byId "subscriptionSelect"
        planName = byId "planName"
        seatsUsed = byId "seatsUsed"
        seatsTotal = byId "seatsTotal"
        seatProgress = byId "seatProgress"
        seatsBody = byId "seatsBody"
        bulkBox = byId "bulkBox" |> As
        bulkError = byId "bulkError"
        applyBulk = byId "applyBulk"
        clearBulk = byId "clearBulk"
        btnAddSubscription = byId "btnAddSubscription" |> As
        refresh = byId "refresh"
        invoiceBody = byId "invoiceBody"
        billingView = byId "billingView"
        billingEdit = byId "billingEdit"
        billingForm = byId "billingForm" |> As
        btnBillingEdit = byId "btnBillingEdit"
        btnBillingSave = byId "btnBillingSave"
        btnBillingCancel = byId "btnBillingCancel"
        saveBilling = byId "saveBilling" 
    }

    let setLoading (ui: UiRefs) (on: bool) =
        toggleHidden ui.spinner (not on)

    let showToast (ui: UiRefs) (msg: string) =
        if not (isNull ui.toast) then
            ui.toast.TextContent <- 
                if System.String.IsNullOrWhiteSpace msg then 
                    "Saved" 
                else 
                    msg

            toggleHidden ui.toast false
            JS.SetTimeout 
                (fun () -> toggleHidden ui.toast true) 
                1600 
            |> ignore

    let showPage (ui: UiRefs) (pageKey: string) =
        for page in ui.pages do
            let active = page?dataset?page = pageKey
            toggleHidden page (not active)

        for tab in ui.tabs do
            let active = tab?dataset?nav = pageKey
            tab.ClassList.Toggle("bg-gray-100", active) |> ignore
            tab.ClassList.Toggle("dark:bg-white/5", active) |> ignore

    let renderSubscriptionSelector (ui: UiRefs) =
        let subscriptionSelectEl = ui.subscriptionSelect

        if not (isNull subscriptionSelectEl) then
            subscriptionSelectEl.InnerHTML <- ""
            for sub in state.subs do
                let optionEl = 
                    JS.Document.CreateElement("option") 
                    |> As<HTMLOptionElement>

                optionEl.Value <- sub.id
                optionEl.TextContent <- sub.label
                subscriptionSelectEl.AppendChild(optionEl) |> ignore

            let currentSubIdExists =
                state.subs 
                |> Array.exists (fun sub -> sub.id = state.currentSubId)

            if not (isNull state.currentSubId) && currentSubIdExists then
                subscriptionSelectEl?value <- state.currentSubId

            elif state.subs.Length > 0 then
                state.currentSubId <- state.subs.[0].id
                subscriptionSelectEl?value <- state.currentSubId

    let renderSummary (ui: UiRefs) =
        let sub = 
            state.subs 
            |> Array.tryFind (fun s -> s.id = state.currentSubId)

        let used = 
            state.seats 
            |> Array.filter (fun x -> x.status = "assigned") 
            |> Array.length

        let total = 
            sub 
            |> Option.map (fun s -> s.totalSeats) 
            |> Option.defaultValue 0

        ui.planName.TextContent <- 
            sub 
            |> Option.map (fun s -> s.plan) 
            |> Option.defaultValue "-"

        ui.seatsUsed.TextContent <- string used
        ui.seatsTotal.TextContent <- string total

        let renewsAtEl = byId "renewsAt"
        let subStatusEl = byId "subStatus"

        renewsAtEl.TextContent <- 
            sub 
            |> Option.map (fun s -> s.renewsAt) 
            |> Option.defaultValue "-"

        subStatusEl.TextContent <-
            sub 
            |> Option.map (fun s -> s.status) 
            |> Option.defaultValue "-"

        let usedPercent = 
            if total = 0 then 
                0 
            else 
                System.Math.Round(float used / float total * 100.0) 
                |> int

        if not (isNull ui.seatProgress) then
            ui.seatProgress?style?width <- (string usedPercent) + "%"

    let renderSeats (ui: UiRefs) =
        if not (isNull ui.seatsBody) then
            ui.seatsBody.InnerHTML <- ""
            for seat in state.seats do
                let tr = JS.Document.CreateElement("tr")
                tr.InnerHTML <-
                    $"""
                    <td class="px-4 py-3">#{seat.seatNo}</td>
                    <td class="px-4 py-3">
                        <input data-seat-input="{seat.seatNo}" value="{if System.String.IsNullOrEmpty seat.username then "" else seat.username}"
                               class="w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm"
                               placeholder="github-username" />
                    </td>
                    <td class="px-4 py-3">
                        <span class="inline-flex items-center rounded-full border px-2 py-0.5 text-xs
                            {if seat.status = "assigned" then "border-emerald-300 text-emerald-700 dark:border-emerald-700/40 dark:text-emerald-300"
                             else "border-gray-300 text-gray-600 dark:border-white/10 dark:text-gray-300"}">
                            {seat.status}
                        </span>
                    </td>
                    <td class="px-4 py-3 text-right whitespace-nowrap">
                        <button data-action="assign" data-seat="{seat.seatNo}"
                                class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20 mr-2">
                            Assign
                        </button>
                        <button data-action="unassign" data-seat="{seat.seatNo}"
                                class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20">
                            Unassign
                        </button>
                    </td>
                    """
                ui.seatsBody.AppendChild(tr) |> ignore

    let renderInvoices (ui: UiRefs) =
        if not (isNull ui.invoiceBody) then
            ui.invoiceBody.InnerHTML <- ""

            let sub = 
                state.subs 
                |> Array.tryFind (fun s -> s.id = state.currentSubId)

            let currency = 
                sub 
                |> Option.map (fun s -> s.currency) 
                |> Option.defaultValue "usd"

            for inv in state.invoices do
                let tr = JS.Document.CreateElement("tr")

                tr.InnerHTML <-
                    $"""
                    <td class="px-4 py-3">{inv.id}</td>
                    <td class="px-4 py-3">{inv.date}</td>
                    <td class="px-4 py-3">{formatMoney inv.amount inv.currency}</td>
                    <td class="px-4 py-3 capitalize">{inv.status}</td>
                    <td class="px-4 py-3 text-right">
                        <a class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20"
                           href="./invoice.html?id={JS.EncodeURIComponent(inv.id)}&sub={JS.EncodeURIComponent(state.currentSubId)}"
                           target="_blank" rel="noopener">
                            View
                        </a>
                    </td>
                    """
                ui.invoiceBody.AppendChild(tr) |> ignore

    // Billing display
    let setBillingMode (ui: UiRefs) (mode: string) =
        let editing = mode = "edit"
        toggleHidden ui.billingView editing
        toggleHidden ui.billingEdit (not editing)
        toggleHidden ui.btnBillingEdit editing
        toggleHidden ui.btnBillingSave (not editing)
        toggleHidden ui.btnBillingCancel (not editing)

    let renderBillingView (data: BillingRecord) =
        let setText id v = 
            let el = byId id 
            if not (isNull el) then 
                el.TextContent <- 
                    if System.String.IsNullOrWhiteSpace v then "—" else v

            match byId id |> Option.ofObj with
            | Some el ->
                el.TextContent <- if System.String.IsNullOrWhiteSpace v then "—" else v
            | None -> ()

        setText "v_name" data.name
        setText "v_vatin" data.vatin
        setText "v_line1" data.line1
        setText "v_city" data.city
        setText "v_postal_code" data.postal_code
        setText "v_country" data.country

    let populateBillingForm (ui: UiRefs) (data: BillingRecord) =
        if not (isNull ui.billingForm) then
            let setField (name: string) (value: string) =
                let el = 
                    ui.billingForm.QuerySelector($"""[name="{name}"]""") 
                    |> As<HTMLInputElement>

                match el |> Option.ofObj with
                | Some el ->
                    el.Value <- value
                | None -> ()

            setField "name" data.name
            setField "vatin" data.vatin
            setField "line1" data.line1
            setField "city" data.city
            setField "postal_code" data.postal_code
            setField "country" data.country


    let loadSubscriptions () =
        state.subs <- apiListSubscriptions ()

    let loadSeats () =
        if System.String.IsNullOrEmpty state.currentSubId then
            state.seats <- [||]
        else
            state.seats <- apiGetSeats state.currentSubId

    let loadInvoices () =
        if System.String.IsNullOrEmpty state.currentSubId then
            state.invoices <- [||]
        else
            state.invoices <- apiGetInvoices state.currentSubId

    let loadBillingForm (ui: UiRefs) =
        let data = apiGetBilling ()
        state.billing <- Some data
        renderBillingView data
        populateBillingForm ui data
        setBillingMode ui "view"


    let parseUsernames (str: string) =
        str.Split([| ' '; '\t'; '\r'; '\n'; ',' |], System.StringSplitOptions.RemoveEmptyEntries)
        |> Array.map (fun x -> x.Trim())
        |> Array.filter (System.String.IsNullOrWhiteSpace >> not)
        |> fun a -> if a.Length > 999 then a.[0..998] else a

    let onSeatsBodyClick (ui: UiRefs) (event: Dom.Event) =
        let targetEl =
            match event.Target with
            | :? Element as el -> el
            | _ -> null

        if isNull targetEl then
            ()
        else
            let btn = targetEl.Closest("button[data-action]")
            if isNull btn then
                ()
            else
                let seatNoStr = btn.GetAttribute("data-seat")
                let action = btn.GetAttribute("data-action")
                let seatNo =
                    match System.Int32.TryParse seatNoStr with
                    | true, v -> v
                    | _ -> -1

                if seatNo <= 0 then
                    ()
                else
                    let input = ui.seatsBody.QuerySelector($"""[data-seat-input="{seatNo}"]""") |> As<HTMLInputElement>
                    let username = if isNull input then "" else input.Value.Trim()

                    setLoading ui true
                    try
                        if action = "assign" then
                            if username <> "" then apiAssignSeat state.currentSubId seatNo username
                        else
                            apiUnassignSeat state.currentSubId seatNo

                        loadSeats ()
                        renderSummary ui
                        renderSeats ui
                        showToast ui "Updated"
                    finally
                        setLoading ui false


    [<Inline>]
    let private importAuth() = JS.ImportDynamic (toAbsoluteUrl "Js/ws-auth.js")
    [<Inline>]
    let private importErr() = JS.ImportDynamic(toAbsoluteUrl "Js/error-utils.js")

    let requireAuth () =
        importAuth()
            .Then(fun authMod ->
                let api = authMod?API
                importErr()
                    .Then(fun errMod ->
                        let safeFetch : string -> obj -> Promise<obj> = errMod?safeFetch
                        let redirectToError : obj -> obj -> unit = errMod?redirectToError

                        let safeFetchWithCreds = 
                            safeFetch 
                                $"{api}/auth/me"
                                {| credentials = "include" |}

                        safeFetchWithCreds
                            .Catch(fun err ->
                                let status = err?status |> As<int>
                                if status = 401 || status = 403 then
                                    let returnUrl = JS.Window.Location.Href
                                    JS.Window.Location.Href <- $"{api}/auth/github/start?returnUrl={JS.EncodeURIComponent(returnUrl)}"
                                else 
                                    redirectToError 
                                        err 
                                        (box {| endpoint = "/auth/me"; method = "GET"; title = "Could not verify your session" |})
                            ) |> ignore
                    ) |> ignore
            )

    let wireEvents (ui: UiRefs) =
        for t in ui.tabs do
            t.AddEventListener("click", (fun (_: Event) ->
                let nav = t?dataset?nav |> As<string>
                if not (System.String.IsNullOrEmpty nav) then
                    navigate nav
                    showPage ui nav
            ))

        JS.Window.AddEventListener("hashchange", (fun (_: Event) ->
            showPage ui (getRouteFromHash ())
        ))

        let seatsBody = ui.seatsBody
        if not (isNull seatsBody) then
            seatsBody.AddEventListener("click", fun ev -> onSeatsBodyClick ui ev)

        if not (isNull ui.subscriptionSelect) then
            ui.subscriptionSelect.AddEventListener("change", fun (_: Event) ->
                state.currentSubId <- ui.subscriptionSelect?value
                setLoading ui true
                try
                    loadSeats ()
                    renderSummary ui
                    renderSeats ui
                    loadInvoices ()
                    renderInvoices ui
                finally
                    setLoading ui false
            )

        if not (isNull ui.applyBulk) then
            ui.applyBulk.AddEventListener("click", fun (_: Event) ->
                let names = parseUsernames ui.bulkBox.Value
                if names.Length = 0 then () else
                toggleHidden ui.bulkError true
                setLoading ui true
                try
                    try
                        apiBulkAssign state.currentSubId names
                        loadSeats ()
                        renderSummary ui
                        renderSeats ui
                        showToast ui "Bulk assigned"
                    with _ ->
                        toggleHidden ui.bulkError false
                finally
                    setLoading ui false
            )

        if not (isNull ui.clearBulk) then
            ui.clearBulk.AddEventListener("click", fun (_: Event) ->
                ui.bulkBox.Value <- ""
                toggleHidden ui.bulkError true
            )

        if not (isNull ui.refresh) then
            ui.refresh.AddEventListener("click", fun (_: Event) ->
                setLoading ui true
                try
                    loadSeats ()
                    renderSummary ui
                    renderSeats ui
                    loadInvoices ()
                    renderInvoices ui
                    showToast ui "Refreshed"
                finally
                    setLoading ui false
            )

        if not (isNull ui.btnAddSubscription) then
            ui.btnAddSubscription.Disabled <- false
            ui.btnAddSubscription.AddEventListener("click", fun (_: Event) ->
                JS.Window.Location.Href <- "./checkout.html"
            )

        if not (isNull ui.btnBillingEdit) then
            ui.btnBillingEdit.AddEventListener("click", fun (_: Event) ->
                match state.billing with
                | Some data -> populateBillingForm ui data
                | None -> ()
                setBillingMode ui "edit"
            )

        if not (isNull ui.btnBillingCancel) then
            ui.btnBillingCancel.AddEventListener("click", fun (_: Event) ->
                match state.billing with
                | Some data -> populateBillingForm ui data
                | None -> ()
                setBillingMode ui "view"
            )

        if not (isNull ui.btnBillingSave) then
            ui.btnBillingSave.AddEventListener("click", fun (_: Event) ->
                if isNull ui.billingForm then () else
                let fd = new FormData(ui.billingForm)
                let get name =
                    if fd.Has(name) then
                        match fd.Get(name) with
                        | Union1Of2 (_: File) -> ""
                        | Union2Of2 (s: string) -> s
                    else
                        ""

                let data = { 
                    name  = get "name"
                    vatin = get "vatin"
                    line1 = get "line1"
                    city = get "city"
                    postal_code = get "postal_code"
                    country = get "country"
                }

                setLoading ui true
                try
                    apiSaveBilling data
                    state.billing <- Some data
                    renderBillingView data
                    setBillingMode ui "view"
                    showToast ui "Billing saved"
                finally
                    setLoading ui false
            )

        if not (isNull ui.saveBilling) then
            ui.saveBilling.AddEventListener("click", fun (_: Event) ->
                if isNull ui.billingForm then () else
                let fd = new FormData(ui.billingForm)
                let get name =
                    if fd.Has(name) then
                        match fd.Get(name) with
                        | Union1Of2 (_: File) -> ""
                        | Union2Of2 (s: string) -> s
                    else
                        ""

                let data = { 
                    name = get "name"
                    vatin = get "vatin"
                    line1 = get "line1"
                    city = get "city"
                    postal_code = get "postal_code"
                    country = get "country" 
                }

                setLoading ui true
                try
                    apiSaveBilling data
                    state.billing <- Some data
                    renderBillingView data
                    setBillingMode ui "view"
                    showToast ui "Billing saved"
                finally
                    setLoading ui false
            )

    let Init () =
        let ui = ui ()
        setLoading ui true
        let afterAuth (_: obj) =
            try
                wireEvents ui
                loadSubscriptions ()
                renderSubscriptionSelector ui

                if not (System.String.IsNullOrEmpty state.currentSubId) then
                    loadSeats ()
                    renderSummary ui
                    renderSeats ui
                    loadInvoices ()
                    renderInvoices ui

                showPage ui (getRouteFromHash ())
                loadBillingForm ui
            finally
                setLoading ui false

        try
            requireAuth().Then(fun user ->
                state.user <- user
                afterAuth user
            ).Catch(fun _ ->
                afterAuth null
            ) |> ignore
        with _ ->
            afterAuth null