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

    let BindSmoothLoader (widthHeightClass: string) (justifyClass: string) (actualContent: Doc) =
        Templates.CheckoutTemplate.SmoothTextLoader()
            .WrapperClasses(widthHeightClass)
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
            .WrapperClasses(widthHeightClass)
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
                initFromApi ()
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
                .AuthSectionAttr(AuthSectionAttr)
                .PaymentSectionAttr(PaymentSectionAttr)
                .SeatSelectorAttr(SeatSelectorAttr())
                .SeatsText(SeatsTextVar)
                .OnSeatMinus(fun _ -> OnSeatMinus())
                .OnSeatPlus(fun _ -> OnSeatPlus())
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
                .OnGitHubLogin(fun _ -> AuthClient.Login())
                .ContinueButtonAttr(ContinueButtonAttr())
                .ContinueText(Doc.TextView ContinueText.View)
                .OnContinueClick(fun _ -> OnContinueClick())

                .BackLinkLabel(
                    Doc.TextView BackLinkLabel.View
                    |> BindSmoothLoader "w-10 h-5" ""
                )
                .PlanName(
                    Doc.TextView PlanName
                    |> BindSmoothLoader "w-64 h-6" ""
                )
                .PlanPrice(
                    Doc.TextView PlanPrice
                    |> BindSmoothLoader "w-24 h-8" ""
                )
                .PlanInterval(
                    Doc.TextView PlanInterval
                    |> BindSmoothLoader "w-12 h-5" ""
                )
                .PriceHint(
                    Doc.TextView PriceHint
                    |> BindSmoothLoader "w-64 h-4" ""
                )
                .Subtotal(
                    Doc.TextView Subtotal
                    |> BindSmoothLoader "w-14 h-6" "justify-end"
                )
                .Taxes(
                    Doc.TextView Taxes
                    |> BindSmoothLoader "w-14 h-6" "justify-end"
                )
                .Total(
                    Doc.TextView Total
                    |> BindSmoothLoader "w-14 h-6" "justify-end"
                )
                .Doc()
        else
            Templates.CheckoutTemplate()
                .BackLinkLabel(SSRSkeleton "w-10 h-5" "")
                .PlanName(SSRSkeleton "w-64 h-6" "")
                .PriceHint(SSRSkeleton "w-64 h-4" "")
                .PlanPrice(SSRSkeleton "w-24 h-8" "")
                .PlanInterval(SSRSkeleton "w-12 h-5" "")
                .Subtotal(SSRSkeleton "w-14 h-6" "justify-end")
                .Taxes(SSRSkeleton "w-14 h-6" "justify-end")
                .Total(SSRSkeleton "w-14 h-6" "justify-end")
                                
                .IsCompany(false)
                .CompanyBlockAttr(Html.attr.``class`` "hidden")
                .Doc()