namespace WebSharperWebsite

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI
open WebSharper.UI.Server

type EndPoint =
    | [<EndPoint "GET /">] Home
    | [<EndPoint "GET /features">] Features
    | [<EndPoint "GET /examples">] Examples
    | [<EndPoint "GET /bindings">] Bindings
    | [<EndPoint "GET /support">] Support
    | [<EndPoint "GET /warp">] Warp
    | [<EndPoint "GET /ocaml">] Ocaml
    | [<EndPoint "GET /checkout">] Checkout
    | [<EndPoint "GET /error">] Error
    | [<EndPoint "GET /invoice">] Invoice
    | [<EndPoint "GET /account">] MyAccount
    | [<EndPoint "GET /success">] Success
    | [<EndPoint "GET /404">] NotFound
    | [<EndPoint "GET /privacy-policy">] PrivacyPolicy
    | [<EndPoint "GET /terms-of-use">] TermsOfUse
    | [<EndPoint "GET /cookie-policy">] CookiePolicy

module Templating =
    open WebSharper.UI.Html
    open type WebSharper.UI.ClientServer

    let private noChrome = function
        | EndPoint.Checkout
        | EndPoint.Error
        | EndPoint.Success
        | EndPoint.Invoice
        | EndPoint.NotFound -> true
        | _ -> false

    let private hideIf condition =
        if condition then 
            attr.hidden ""
        else 
            Attr.Empty

    let Layout (endpoint: EndPoint) (body: Doc list) =
        Templates.LayoutTemplate()
            .Body(
                client (ClientPages.Layout()) :: body
            )
            .HeaderVisibility(hideIf (noChrome endpoint))
            .FooterVisibility(hideIf (noChrome endpoint))
            .Doc(keepUnfilled = true)

module Site =
    open type WebSharper.UI.ClientServer

    let HomePage =
        Content.Page(
            Templating.Layout EndPoint.Home [
                ServerPages.Home()
            ],
            Bundle = "home"
        )

    let FeaturesPage =
        Content.Page(
            Templating.Layout EndPoint.Features [
                ServerPages.Features()
            ],
            Bundle = "features"
        )

    let ExamplesPage =
        Content.Page(
            Templating.Layout EndPoint.Examples [
                hydrate (ClientPages.Examples())
            ],
            Bundle = "examples"
        )

    let BindingsPage =
        Content.Page(
            Templating.Layout EndPoint.Bindings [
                ServerPages.Bindings()
            ],
            Bundle = "bindings"
        )

    let SupportPage =
        Content.Page(
            Templating.Layout EndPoint.Support [
                hydrate (ClientPages.ForTeams())
            ],
            Bundle = "for-teams"
        )

    let WarpPage =
        Content.Page(
            Templating.Layout EndPoint.Warp [
                ServerPages.ComingSoon
                    "Warp"
                    "Warp is coming soon"
                    "Spec-first DSLs and AI-assisted code generation for WebSharper. We are putting the finishing touches on this page."
            ],
            Bundle = "coming-soon"
        )

    let OcamlPage =
        Content.Page(
            Templating.Layout EndPoint.Ocaml [
                ServerPages.Ocaml()
            ],
            Bundle = "ocaml"
        )

    let CheckoutPage =
        Content.Page(
            Templating.Layout EndPoint.Checkout [
                hydrate (ClientPages.Checkout())
            ],
            Bundle = "checkout"
        )

    let ErrorPage =
        Content.Page(
            Templating.Layout EndPoint.Error [
                hydrate (ClientPages.Error())
            ],
            Bundle = "error"
        )

    let InvoicePage =
        Content.Page(
            Templating.Layout EndPoint.Invoice [
                hydrate (ClientPages.Invoice())
            ],
            Bundle = "invoice"
        )

    let MyAccountPage =
        Content.Page(
            Templating.Layout EndPoint.MyAccount [
                hydrate (ClientPages.MyAccount())
            ],
            Bundle = "account"
        )

    let SuccessPage =
        Content.Page(
            Templating.Layout EndPoint.Success [
                hydrate (ClientPages.Success())
            ],
            Bundle = "success"
        )

    let NotFoundPage =
        Content.Page(
            Templating.Layout EndPoint.NotFound [
                ServerPages.NotFound()
            ],
            Bundle = "404"
        )

    let PrivacyPolicyPage =
        Content.Page(
            Templating.Layout EndPoint.PrivacyPolicy [
                ServerPages.Legal "Privacy Policy" "legal/privacy.html"
            ],
            Bundle = "legal"
        )

    let TermsOfUsePage =
        Content.Page(
            Templating.Layout EndPoint.TermsOfUse [
                ServerPages.Legal "Terms of Use" "legal/terms.html"
            ],
            Bundle = "legal"
        )

    let CookiePolicyPage =
        Content.Page(
            Templating.Layout EndPoint.CookiePolicy [
                ServerPages.Legal "Cookie Policy" "legal/cookie.html"
            ],
            Bundle = "legal"
        )

    [<Website>]
    let Main =
        Application.MultiPage (fun ctx action ->
            match action with
            | Home -> HomePage
            | Features -> FeaturesPage
            | Examples -> ExamplesPage
            | Bindings -> BindingsPage
            | Support -> SupportPage
            | Warp -> WarpPage
            | Ocaml -> OcamlPage
            | Checkout -> CheckoutPage
            | Error -> ErrorPage
            | Invoice -> InvoicePage
            | MyAccount -> MyAccountPage
            | Success -> SuccessPage
            | NotFound -> NotFoundPage
            | PrivacyPolicy -> PrivacyPolicyPage
            | TermsOfUse -> TermsOfUsePage
            | CookiePolicy -> CookiePolicyPage
        )

[<Sealed>]
type Website() =
    interface IWebsite<EndPoint> with
        member this.Sitelet = 
            Site.Main
            |> Sitelet.WithSettings (Seq.singleton ("LogBundleChoice", "true"))
        member this.Actions = [
            Home; Features; Examples; Bindings; Support; Warp; Ocaml; Checkout 
            Error; Invoice; MyAccount; Success; NotFound
            PrivacyPolicy; TermsOfUse; CookiePolicy
        ]

[<assembly: Website(typeof<Website>)>]
do ()
