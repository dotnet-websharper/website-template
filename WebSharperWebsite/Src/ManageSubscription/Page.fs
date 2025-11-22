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
    // Data loading helpers (async)
    // -----------------------------

    let private loadSubscriptionsAsync () =
        async {
            let! subs = Api.ListSubscriptions ()
            SubsVar.Value <- subs
        }

    let private loadSeatsAsync () =
        async {
            let current = CurrentSubIdVar.Value
            if System.String.IsNullOrEmpty current then
                // No subscription, clear local state
                SeatsVar.Value <- [||]
                // seatsModel in ViewsSeats was created from initial SeatsVar (likely empty),
                // so we don't need to touch it here
                return ()
            else
                // Delegate actual fetching + model update to ViewsSeats
                ViewsSeats.RefreshSeats ()
        }

    let private loadInvoicesAsync () =
        async {
            let current = CurrentSubIdVar.Value
            if System.String.IsNullOrEmpty current then
                InvoicesVar.Value <- [||]
                ViewsInvoices.RefreshInvoices [||]
            else
                let! invoices = Api.GetInvoices current
                InvoicesVar.Value <- invoices
                ViewsInvoices.RefreshInvoices invoices
        }

    let private loadBillingAsync () =
        async {
            let! data = Api.GetBilling ()
            BillingVar.Value <- Some data

            ViewsBilling.SetBillingRecord (Some data)
            ViewsBilling.SetBillingMode ViewsBilling.BillingMode.Viewing
        }

    let private chooseCurrentSubscription () =
        let subs = SubsVar.Value
        if subs.Length = 0 then
            CurrentSubIdVar.Value <- ""
        else
            let current = CurrentSubIdVar.Value
            let exists =
                subs
                |> Array.exists (fun s -> s.id = current)

            if System.String.IsNullOrEmpty current || not exists then
                CurrentSubIdVar.Value <- subs.[0].id

    let private loadAllAfterAuth () =
        async {
            Views.setLoading true
            try
                // Load subscriptions and choose current
                do! loadSubscriptionsAsync ()
                chooseCurrentSubscription ()

                // Load seats and invoices for the current subscription
                do! loadSeatsAsync ()
                do! loadInvoicesAsync ()

                // Load billing info
                do! loadBillingAsync ()
            finally
                Views.setLoading false
        }
        |> Async.StartImmediate

    let Init () =
        // Show spinner while we verify auth and load data
        Views.setLoading true

        let afterAuthSuccess () =
            // Kick off the async loading pipeline
            loadAllAfterAuth ()

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
                .BillingNameVar(ViewsBilling.CompanyNameVar)
                .BillingVatinVar(ViewsBilling.CompanyVatinVar)
                .BillingLine1Var(ViewsBilling.BillingRecordVar.V.address.line1)
                .BillingCityVar(ViewsBilling.BillingRecordVar.V.address.city)
                .BillingPostalVar(ViewsBilling.BillingRecordVar.V.address.postal_code)
                .BillingCountryVar(ViewsBilling.BillingRecordVar.V.address.country)

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
