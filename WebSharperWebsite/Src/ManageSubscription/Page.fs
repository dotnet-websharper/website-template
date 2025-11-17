namespace WebSharperWebsite.ManageSubscription

open WebSharper
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

    let private chooseCurrentSubscription () =
        if state.subs.Length = 0 then
            state.currentSubId <- ""
        else
            // keep existing currentSubId if still valid, otherwise first one
            let exists =
                state.subs
                |> Array.exists (fun s -> s.id = state.currentSubId)

            if System.String.IsNullOrEmpty state.currentSubId || not exists then
                state.currentSubId <- state.subs.[0].id

    // Entry point
    let Init () =
        let ui = collectUi ()
        toggleHidden ui.content true
        setLoading ui true

        let afterAuthSuccess () =
            try
                ViewsSeats.mountSeats ui
                ViewsInvoices.mountInvoices ui

                loadSubscriptions()
                chooseCurrentSubscription()

                if not (System.String.IsNullOrEmpty state.currentSubId) then
                    loadSeats ()                    
                    ViewsSeats.refreshSeats state.seats

                    loadInvoices ()
                    ViewsInvoices.refreshInvoices state.invoices

                Nav.Mount ui
                loadBillingForm ui
            finally
                toggleHidden ui.content false
                setLoading ui false

        let afterAuthFail () =
            setLoading ui false
            ViewsAuth.showLoginPrompt ui.content
            toggleHidden ui.content false

        requireAuth()
            .Then(fun _ -> afterAuthSuccess())
            .Catch(fun _ -> afterAuthFail())
            |> ignore
