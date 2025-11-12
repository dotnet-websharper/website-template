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

    let HandleRefresh() =
        let ui = collectUi ()
        setLoading ui true
        try                   
            state.seats <- GetSeats state.currentSubId                    
            ViewsSeats.refreshSeats state.seats

            state.invoices <- GetInvoices state.currentSubId
            ViewsInvoices.refreshInvoices state.invoices

            showToast ui "Refreshed"
        finally
            setLoading ui false

    let HandleBillingEdit() =
        let ui = collectUi ()
        match state.billing with
        | Some data -> populateBillingForm ui data
        | None -> ()
        setBillingMode ui "edit"

    let HandleBillingSave() =
        let ui = collectUi ()
        if isNull ui.billingForm then () else
        let formData = new FormData(ui.billingForm)
        let get name =
            if formData.Has(name) then
                match formData.Get(name) with
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

    let HandleBillingCancel() =
        let ui = collectUi ()
        match state.billing with
        | Some data -> populateBillingForm ui data
        | None -> ()
        setBillingMode ui "view"

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

        // Subscription selector
        if not (isNull ui.subscriptionSelect) then
            ui.subscriptionSelect.AddEventListener("change", fun (_: Event) ->
                let id = ui.subscriptionSelect?value |> As<string>
                state.currentSubId <- id
                ViewsSubsSummary.selectedSubId.Value <- id

                setLoading ui true
                try
                    state.seats <- GetSeats state.currentSubId                    
                    ViewsSeats.refreshSeats state.seats

                    state.invoices <- GetInvoices state.currentSubId
                    ViewsInvoices.refreshInvoices state.invoices
                finally
                    setLoading ui false
            )
