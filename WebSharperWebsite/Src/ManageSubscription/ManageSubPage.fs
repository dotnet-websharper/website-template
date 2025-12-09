namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client

open WebSharperWebsite

open Types
open State

[<JavaScript>]
module Page =

    let private isLoading = Var.Create true

    // -----------------------------
    // Data loading helpers (async)
    // -----------------------------

    let private loadGitHubOrg () =
        async {
            let! orgOpt = Api.GetGitHubOrganization ()
            GitHubOrgVar.Value <- orgOpt
        }

    let private loadCustomerPortalAsync () =
        async {
            let! linkOpt = Api.GetCustomerPortalLink ()
            CustomerPortalLinkVar.Value <- linkOpt
        }

    let private loadSubscriptionsAsync () =
        async {
            let! subs = Api.ListSubscriptions ()
            SubsVar.Value <- subs
            ViewsSeats.RefreshSeats ()
        }

    let private loadSeatsAsync () =
        async {
            let current = CurrentSubIdVar.Value
            if System.String.IsNullOrEmpty current then
                SeatsVar.Value <- [||]
                return ()
            else
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
            try
                do! loadSubscriptionsAsync ()
                chooseCurrentSubscription ()
            
                if SubsVar.Value.Length > 0 then
                    do! 
                    Async.Parallel [|
                        loadSeatsAsync ()
                        loadInvoicesAsync ()
                        loadBillingAsync ()
                        loadCustomerPortalAsync ()
                        loadGitHubOrg ()
                    |] |> Async.Ignore

            finally
                isLoading.Value <- false
        }
        |> Async.StartImmediate

    let private renderContent loading loggedIn (subs: SubRecord array) = 
        
        // Loading State
        if loading then 
            Templates.ManageSubscriptionTemplate.Skeleton().Doc()
        
        // Not Logged In
        elif not loggedIn then
            Templates.ManageSubscriptionTemplate.LoginPrompt()
                .LoginClick(fun _ -> ViewsAuth.LoginClick())
                .Doc()
        
        // Logged In, but NO Subscriptions
        elif subs.Length = 0 then
            Templates.ManageSubscriptionTemplate.NoSubscriptionWidget()
                .OnSubscribeClick(fun _ -> 
                    JS.Window.Location.Href <- Utils.SupportPlansUrl
                )
                .Doc()
        
        // Logged In AND Has Subscriptions
        else
            Templates.ManageSubscriptionTemplate.AuthenticatedContent()
                 // Navigation & Page Switching
                .GoSubs(fun _ -> Views.ShowSubsPage())
                .GoBilling(fun _ -> Views.ShowBillingPage())
                .SubsTabAttr(Views.SubsTabAttr)
                .BillingTabAttr(Views.BillingTabAttr)
                .SubsPageAttr(Views.SubsPageAttr)
                .BillingPageAttr(Views.BillingPageAttr)

                // Sub-Components
                .GitHubOrg(ViewsGitHub.GitHubBody)
                .OpenCustomerPortal(fun _ -> Views.OpenCustomerPortal())
                .SeatsBody(ViewsSeats.SeatsBody)
                .InvoiceBody(ViewsInvoices.InvoicesBody)

                // Billing Actions
                .BillingViewAttr(ViewsBilling.BillingViewAttr)
                .BillingEditAttr(ViewsBilling.BillingEditAttr)
                .BtnBillingEditAttr(ViewsBilling.BtnBillingEditAttr)
                .BtnBillingSaveAttr(ViewsBilling.BtnBillingSaveAttr)
                .BtnBillingCancelAttr(ViewsBilling.BtnBillingCancelAttr)

                .BillingEditClick(fun _ -> Controller.HandleBillingEdit())
                .BillingSaveClick(fun _ -> Controller.HandleBillingSave())
                .BillingCancelClick(fun _ -> Controller.HandleBillingCancel())

                // Billing Fields (View Mode)
                .BillingNameView(ViewsBilling.BillingNameView)
                .BillingVatinView(ViewsBilling.BillingVatinView)
                .BillingLine1View(ViewsBilling.BillingLine1View)
                .BillingCityView(ViewsBilling.BillingCityView)
                .BillingPostalView(ViewsBilling.BillingPostalView)
                .BillingCountryView(ViewsBilling.BillingCountryView)

                // Billing Fields (Edit Mode Vars)
                .BillingNameVar(ViewsBilling.CompanyNameVar)
                .BillingVatinVar(ViewsBilling.CompanyVatinVar)
                .BillingLine1Var(ViewsBilling.BillingRecordVar.V.address.line1)
                .BillingCityVar(ViewsBilling.BillingRecordVar.V.address.city)
                .BillingPostalVar(ViewsBilling.BillingRecordVar.V.address.postal_code)
                .BillingCountryVar(ViewsBilling.BillingRecordVar.V.address.country)

                // Seats Actions
                .AddSeatsButtonAttr(ViewsSeats.AddSeatsButtonAttr)
                .AddSeatsClick(fun _ ->
                    JS.Window.Location.Href <- "./checkout?plan=pro&interval=year&seats=1"
                )
                .RefreshClick(fun _ -> Controller.HandleRefresh())
                .Doc()

    let Init () =

        let afterAuthSuccess () =
            loadAllAfterAuth ()

        let afterAuthFail () =
            isLoading.Value <- false    

        Controller.requireAuth()
            .Then(fun _ -> afterAuthSuccess())
            .Catch(fun _ -> afterAuthFail())
            |> ignore

    let ManageSubscriptionDoc () : Doc =
        let skeletonDoc = Templates.ManageSubscriptionTemplate.Skeleton().Doc()

        if IsClient then

            Templates.ManageSubscriptionTemplate()
                .OnAfterRender(Init)
                
                .MainContent(
                    Templates.ManageSubscriptionTemplate.ContentWrapper()
                        .Skeleton(skeletonDoc)
                        .SkeletonAttr(
                            // Toggle the hidden class based on isLoading
                            Attr.DynamicClassPred "hidden" (isLoading.View |> View.Map not)
                        )
                        .Content(
                            View.Map3 renderContent 
                                isLoading.View 
                                AuthClient.IsAuthedView 
                                State.SubsVar.View 
                            |> Doc.EmbedView
                        )
                        .Doc()
                )

                // toast (global)
                .ToastAttr(Views.ToastAttr)
                .ToastText(Views.ToastText)
                .Doc()
        else
            Templates.ManageSubscriptionTemplate()
                .MainContent(
                    Templates.ManageSubscriptionTemplate.ContentWrapper()
                        .Skeleton(skeletonDoc)
                        .SkeletonAttr(Attr.Empty)
                        .Content(Doc.Empty)
                        .Doc()
                )
                .SpinnerAttr(attr.``class`` "hidden")
                .ToastAttr(attr.``class`` "hidden")
                .Doc()