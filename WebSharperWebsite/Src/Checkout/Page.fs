namespace WebSharperWebsite.Checkout

open WebSharperWebsite
open WebSharper
open WebSharper.JavaScript 
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client

[<JavaScript>]
module Page = 
    open State
    open ViewsAttrs
    open ViewsPricing
    open Controller

    let IsLoading = Var.Create true
    let BindSmoothLoader (widthHeightClass: View<string>) (justifyClass: string) (actualContent: Doc) =
        Templates.CheckoutTemplate.SmoothTextLoader()
            .WrapperClasses(
                widthHeightClass 
                |> View.Map (fun w -> "transition-all duration-300 ease-in-out " + w)
            )
            .SkeletonAttr(
                let isSet = 
                    IsLoading.View
                    |> View.Map (fun b -> not b)

                Attr.DynamicClassPred "opacity-0" isSet
            )          
            .ContentAttr(
                [
                    Attr.DynamicClassPred "opacity-0" IsLoading.View
                    Attr.DynamicClassPred "pointer-events-none" IsLoading.View
                    Attr.Class justifyClass
                ]
            )
            .Content(actualContent)
            .Doc()

    let SSRSkeleton (widthHeightClass: string) (justifyClass: string) =        
        Templates.CheckoutTemplate.SmoothTextLoader()
            .WrapperClasses("transition-all duration-300 ease-in-out " + widthHeightClass)
            .SkeletonAttr(Attr.Empty) 
            .ContentAttr([attr.``class`` justifyClass])
            .Content(Doc.Empty)
            .Doc()

    let OnAfterRender () =
        resetContinueButton ()
        computeBackLink ()
        initFromQuery ()

        async {
            IsLoading.Value <- true
            
            let! _ = Async.Parallel [| 
                initFromApi()
                ensurePlans () 
            |]
            
            IsLoading.Value <- false
        }
        |> Async.StartImmediate

    let CheckoutDoc () : Doc =
        if IsClient then
            Templates.CheckoutTemplate()
                .OnAfterRender(OnAfterRender)

                .BackLinkAttr(BackLinkAttr)
                
                .RightSideContent(
                    View.Map2 (fun loading loggedIn ->
                        if loading then
                            Templates.CheckoutTemplate.RightSkeleton().Doc()
                        elif not loggedIn then
                            Templates.CheckoutTemplate.AuthForm()
                                .OnGitHubLogin(fun _ -> AuthClient.Login())
                                .Doc()
                        else
                            Templates.CheckoutTemplate.PaymentForm()
                                .Email(EmailVar)
                                .Street(StreetVar)
                                .City(CityVar)
                                .Postal(PostalVar)
                                .Country(CountryVar)
                                .IsCompany(IsCompanyVar)
                                .CompanyBlockAttr(CompanyBlockAttr())
                                .CompanyName(CompanyNameVar)
                                .CompanyNameAttr(CompanyNameAttr())
                                .Vatin(VatinVar)
                                .VatinAttr(VatinAttr())
                                .FormErrorDoc(FormErrorDoc)
                                .ContinueButtonAttr(ContinueButtonAttr())
                                .ContinueText(Doc.TextView ContinueText.View)
                                .OnContinueClick(fun _ -> OnContinueClick())
                                .Doc()
                    ) IsLoading.View isAuthedV
                    |> Doc.EmbedView
                )

                // Animating the Seat Selector visibility
                .SeatSelectorAttr(SeatSelectorAttr())
                
                .SeatsText(SeatsTextVar)
                .OnSeatMinus(fun _ -> OnSeatMinus())
                .OnSeatPlus(fun _ -> OnSeatPlus())
                
                .BackLinkLabel(
                    Doc.TextView BackLinkLabel.View
                    |> BindSmoothLoader (
                        BackLinkLabel.View 
                        |> View.Map (fun s -> 
                            if s.Contains "Manage" then "w-40 h-5 !align-middle" else "w-12 h-5 !align-middle"
                        )
                    ) ""
                )
                .PlanName(
                    Doc.TextView PlanName
                    |> BindSmoothLoader (View.Const "w-64 h-6") ""
                )
                .PlanPrice(
                    Doc.TextView PlanPrice
                    |> BindSmoothLoader (View.Const "w-24 h-8") ""
                )
                .PlanInterval(
                    Doc.TextView PlanInterval
                    |> BindSmoothLoader (View.Const "w-12 h-5") ""
                )
                .PriceHint(
                    Doc.TextView PriceHint
                    |> BindSmoothLoader (View.Const "w-64 h-4") ""
                )
                .Subtotal(
                    Doc.TextView Subtotal
                    |> BindSmoothLoader (View.Const "w-14 h-6") "justify-end"
                )
                .Taxes(
                    Doc.TextView Taxes
                    |> BindSmoothLoader (View.Const "w-14 h-6") "justify-end"
                )
                .Total(
                    Doc.TextView Total
                    |> BindSmoothLoader (View.Const "w-14 h-6") "justify-end"
                )
                .Doc()
        else
            Templates.CheckoutTemplate()
                .RightSideContent(
                    Templates.CheckoutTemplate.RightSkeleton().Doc()
                )
                .BackLinkLabel(SSRSkeleton "w-12 h-5 !align-middle" "") 
                .PlanName(SSRSkeleton "w-64 h-6" "")
                .PriceHint(SSRSkeleton "w-64 h-4" "")
                .PlanPrice(SSRSkeleton "w-24 h-8" "")
                .PlanInterval(SSRSkeleton "w-12 h-5" "")
                .Subtotal(SSRSkeleton "w-14 h-6" "justify-end")
                .Taxes(SSRSkeleton "w-14 h-6" "justify-end")
                .Total(SSRSkeleton "w-14 h-6" "justify-end")
                
                .Doc()