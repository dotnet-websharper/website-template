namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI

open WebSharperWebsite

open Types
open State
open Views
open Controller
open Api

[<JavaScript>]
module Page =

    // -----------------------------
    // Data loading helpers
    // -----------------------------

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

    let private loadBilling () =
        let data = Api.GetBilling ()
        state.billing <- Some data
        // push data into reactive Vars so template shows them
        ViewsBilling.SetBillingRecord (Some data)
        ViewsBilling.SetBillingMode ViewsBilling.BillingMode.Viewing

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

    let Init () =
        // Show spinner while we verify auth and load data
        Views.setLoading true

        let afterAuthSuccess () =
            try
                // Load subscriptions and choose current
                loadSubscriptions ()
                chooseCurrentSubscription ()

                // If we have a current subscription, load seats + invoices
                if not (System.String.IsNullOrEmpty state.currentSubId) then
                    loadSeats ()
                    ViewsSeats.RefreshSeats state.seats

                    loadInvoices ()
                    ViewsInvoices.RefreshInvoices state.invoices

                // Billing info
                loadBilling ()
            finally
                Views.setLoading false

        let afterAuthFail () =
            Views.setLoading false    

        Controller.requireAuth()
            .Then(fun _ -> afterAuthSuccess())
            .Catch(fun _ -> afterAuthFail())
            |> ignore

    let ManageSubscriptionDoc () : Doc =
        if IsClient then
            Templates.ManageSubscriptionTemplate()
                .OnAfterRender(Init)
                
                // nav tabs
                .GoSubs(fun _ -> Views.ShowSubsPage())
                .GoBilling(fun _ -> Views.ShowBillingPage())
                .SubsTabAttr(Views.SubsTabAttr)
                .BillingTabAttr(Views.BillingTabAttr)

                // page switching (My subscriptions / Billing information)
                .SubsPageAttr(Views.SubsPageAttr)
                .BillingPageAttr(Views.BillingPageAttr)

                // login vs content
                .LoginPromptAttr(ViewsAuth.LoginPromptAttr)
                .ContentAttr(ViewsAuth.ContentAttr)
                .LoginClick(fun _ -> ViewsAuth.LoginClick())

                // seats + invoices bodies
                .SeatsBody(ViewsSeats.SeatsBody)
                .InvoiceBody(ViewsInvoices.InvoicesBody)

                // spinner + toast
                .SpinnerAttr(Views.SpinnerAttr)
                .ToastAttr(Views.ToastAttr)
                .ToastText(Views.ToastText)

                // billing view / edit visibility
                .BillingViewAttr(ViewsBilling.BillingViewAttr)
                .BillingEditAttr(ViewsBilling.BillingEditAttr)
                .BtnBillingEditAttr(ViewsBilling.BtnBillingEditAttr)
                .BtnBillingSaveAttr(ViewsBilling.BtnBillingSaveAttr)
                .BtnBillingCancelAttr(ViewsBilling.BtnBillingCancelAttr)

                // billing "view mode" fields (ws-hole on v_name, v_vatin, etc.)
                .BillingNameView(ViewsBilling.BillingNameView)
                .BillingVatinView(ViewsBilling.BillingVatinView)
                .BillingLine1View(ViewsBilling.BillingLine1View)
                .BillingCityView(ViewsBilling.BillingCityView)
                .BillingPostalView(ViewsBilling.BillingPostalView)
                .BillingCountryView(ViewsBilling.BillingCountryView)

                // billing form vars (ws-var on inputs in the edit form)
                .BillingNameVar(ViewsBilling.BillingNameVar)
                .BillingVatinVar(ViewsBilling.BillingVatinVar)
                .BillingLine1Var(ViewsBilling.BillingLine1Var)
                .BillingCityVar(ViewsBilling.BillingCityVar)
                .BillingPostalVar(ViewsBilling.BillingPostalVar)
                .BillingCountryVar(ViewsBilling.BillingCountryVar)

                // actions
                .AddSeatsClick(fun _ ->
                    JS.Window.Location.Href <- "./checkout.html?plan=pro&interval=year&seats=1"
                )
                .RefreshClick(fun _ -> Controller.HandleRefresh())
                .BillingEditClick(fun _ -> Controller.HandleBillingEdit())
                .BillingSaveClick(fun _ -> Controller.HandleBillingSave())
                .BillingCancelClick(fun _ -> Controller.HandleBillingCancel())
                .Doc()
        else
            Templates.ManageSubscriptionTemplate().Doc()
