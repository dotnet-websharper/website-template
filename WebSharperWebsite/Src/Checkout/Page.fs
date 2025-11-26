namespace WebSharperWebsite.Checkout

open WebSharperWebsite

open WebSharper
open WebSharper.UI
open WebSharper.UI.Client

[<JavaScript>]
module Page = 
    open State
    open ViewsAttrs
    open ViewsPricing
    open Controller

    let OnAfterRender () =
        resetContinueButton ()
        computeBackLink ()
        initFromQuery ()
        initFromApi () |> Async.StartImmediate
        ensurePlans () |> Async.StartImmediate

    let CheckoutDoc () : Doc =
        if IsClient then
            Templates.CheckoutTemplate()
                .OnAfterRender(OnAfterRender)

                .BackLinkAttr(BackLinkAttr)
                .BackLinkLabel(BackLinkLabel)

                .AuthSectionAttr(AuthSectionAttr)
                .PaymentSectionAttr(PaymentSectionAttr)
                .PlanName(Doc.TextView PlanName)
                .PlanPriceLine(PlanPriceLine |> Doc.BindView id)
                .PriceHint(Doc.TextView PriceHint)

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

                .Subtotal(Doc.TextView Subtotal)
                .Taxes(Doc.TextView Taxes)
                .Total(Doc.TextView Total)

                .FormErrorDoc(FormErrorDoc)
                .OnGitHubLogin(fun _ -> AuthClient.Login())

                .ContinueButtonAttr(ContinueButtonAttr())
                .ContinueText(Doc.TextView ContinueText.View)

                .OnContinueClick(fun _ -> OnContinueClick())
                .Doc()
        else
            Templates.CheckoutTemplate()
                .IsCompany(false)
                .CompanyBlockAttr(Html.attr.``class`` "hidden")
                .Doc()

