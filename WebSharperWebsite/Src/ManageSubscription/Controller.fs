namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom
open Types
open State
open Views
open Api
open WebSharperWebsite.Utils

[<JavaScript>]
module Controller =

    // dynamic imports for auth/error utils 
    [<Inline>]
    let private importAuth () = JS.ImportDynamic (toAbsoluteUrl "Js/ws-auth.js")

    [<Inline>]
    let private importErr ()  = JS.ImportDynamic (toAbsoluteUrl "Js/error-utils.js")

    let HandleApplyBulk() =
        let ui = collectUi ()
        let names = State.parseUsernames ui.bulkBox.Value
        if names.Length = 0 then () else
        toggleHidden ui.bulkError true
        setLoading ui true
        try
            try
                Api.BulkAssign State.state.currentSubId names
                State.state.seats <- Api.GetSeats State.state.currentSubId
                renderSummary ui

                ViewsSeats.refreshSeats state.seats

                showToast ui "Bulk assigned"
            with _ ->
                toggleHidden ui.bulkError false
        finally
            setLoading ui false

    let HandleClearBulk() =
        let ui = collectUi ()
        ui.bulkBox.Value <- ""
        toggleHidden ui.bulkError true

    // Verifies session
    let requireAuth () =
        importAuth()
            .Then(fun authMod ->
                let api : string = authMod?API
                importErr()
                    .Then(fun errMod ->
                        let safeFetch : string -> obj -> Promise<obj> = errMod?safeFetch
                        let redirectToError : obj -> obj -> unit = errMod?redirectToError
                        (safeFetch ($"{api}/auth/me") {| credentials = "include" |})
                            .Catch(fun err ->
                                let status = err?status |> As<int>
                                if status = 401 || status = 403 then
                                    let returnUrl = JS.Window.Location.Href
                                    JS.Window.Location.Href <- $"{api}/auth/github/start?returnUrl={JS.EncodeURIComponent(returnUrl)}"
                                else
                                    redirectToError err (box {| endpoint = "/auth/me"; method = "GET"; title = "Could not verify your session" |})
                            ) |> ignore
                    )  |> ignore
            )

    // Handlers

    let private onSeatsBodyClick (ui: UiRefs) (event: Dom.Event) =
        let targetEl =
            match event.Target with
            | :? Element as el -> el
            | _ -> null

        if isNull targetEl then () else
        let btn = targetEl.Closest("button[data-action]")
        if isNull btn then () else

        let seatNo =
            match System.Int32.TryParse (btn.GetAttribute("data-seat")) with
            | true, v -> v
            | _ -> -1

        if seatNo <= 0 then () else
        let input = ui.seatsBody.QuerySelector($"""[data-seat-input="{seatNo}"]""") |> As<HTMLInputElement>
        let username = if isNull input then "" else input.Value.Trim()

        setLoading ui true
        try
            if btn.GetAttribute("data-action") = "assign" then
                if username <> "" then AssignSeat state.currentSubId seatNo username
            else
                UnassignSeat state.currentSubId seatNo

            state.seats <- GetSeats state.currentSubId
            renderSummary ui
            ViewsSeats.refreshSeats state.seats
            showToast ui "Updated"
        finally
            setLoading ui false

    // Wiring

    let wireEvents (ui: UiRefs) =
        // Tabs / hash routing
        for t in ui.tabs do
            t.AddEventListener("click", (fun (_: Event) ->
                let nav = t?dataset?nav |> As<string>
                if not (System.String.IsNullOrEmpty nav) then
                    State.navigate nav
                    showPage ui nav
            ))

        JS.Window.AddEventListener("hashchange", (fun (_: Event) ->
            showPage ui (State.getRouteFromHash ())
        ))

        // Seats table actions
        if not (isNull ui.seatsBody) then
            ui.seatsBody.AddEventListener("click", fun ev -> onSeatsBodyClick ui ev)

        // Subscription selector
        if not (isNull ui.subscriptionSelect) then
            ui.subscriptionSelect.AddEventListener("change", fun (_: Event) ->
                state.currentSubId <- ui.subscriptionSelect?value
                setLoading ui true
                try
                    state.seats <- GetSeats state.currentSubId
                    renderSummary ui
                    ViewsSeats.refreshSeats state.seats
                    state.invoices <- GetInvoices state.currentSubId
                    renderInvoices ui
                finally
                    setLoading ui false
            )

        // Refresh
        if not (isNull ui.refresh) then
            ui.refresh.AddEventListener("click", fun (_: Event) ->
                setLoading ui true
                try
                    state.seats <- GetSeats state.currentSubId
                    renderSummary ui
                    ViewsSeats.refreshSeats state.seats
                    state.invoices <- GetInvoices state.currentSubId
                    renderInvoices ui
                    showToast ui "Refreshed"
                finally
                    setLoading ui false
            )

        // Billing edit/save/cancel (two buttons save the same)
        if not (isNull ui.btnBillingEdit) then
            ui.btnBillingEdit.AddEventListener("click", fun (_: Event) ->
                match state.billing with
                | Some data -> populateBillingForm ui data
                | None -> ()
                setBillingMode ui "edit"
            )

        let saveBillingHandler (_: Event) =
            if isNull ui.billingForm then () else
            let fd = new FormData(ui.billingForm)
            let get name =
                if fd.Has(name) then
                    match fd.Get(name) with
                    | Union1Of2 (_: File)  -> ""
                    | Union2Of2 (s: string) -> s
                else ""
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
                Api.SaveBilling data
                state.billing <- Some data
                renderBillingView data
                setBillingMode ui "view"
                showToast ui "Billing saved"
            finally
                setLoading ui false

        if not (isNull ui.btnBillingSave) then
            ui.btnBillingSave.AddEventListener("click", saveBillingHandler)

        if not (isNull ui.saveBilling) then
            ui.saveBilling.AddEventListener("click", saveBillingHandler)

        if not (isNull ui.btnBillingCancel) then
            ui.btnBillingCancel.AddEventListener("click", fun (_: Event) ->
                match state.billing with
                | Some data -> populateBillingForm ui data
                | None -> ()
                setBillingMode ui "view"
            )
