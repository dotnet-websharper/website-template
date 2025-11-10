namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open Types
open State
open Views
open Controller
open Api

[<JavaScript>]
module Page =

    let private loadSubscriptions () =
        state.subs <- Api.ListSubscriptions ()

    let private loadSeats () =
        if System.String.IsNullOrEmpty state.currentSubId then
            state.seats <- [||]
        else
            state.seats <- Api.GetSeats state.currentSubId

    let private loadInvoices () =
        if System.String.IsNullOrEmpty state.currentSubId then
            state.invoices <- [||]
        else
            state.invoices <- Api.GetInvoices state.currentSubId

    let private loadBillingForm (ui: UiRefs) =
        let data = Api.GetBilling ()
        state.billing <- Some data
        renderBillingView data
        populateBillingForm ui data
        setBillingMode ui "view"

    // Entry point
    let Init () =
        let ui = collectUi ()
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

                showPage ui (State.getRouteFromHash ())
                loadBillingForm ui
            finally
                setLoading ui false

        try
            requireAuth()
                .Then(fun user ->
                    state.user <- user
                    afterAuth user
                )
                .Catch(fun _ -> afterAuth null)
                |> ignore
        with _ ->
            afterAuth null
