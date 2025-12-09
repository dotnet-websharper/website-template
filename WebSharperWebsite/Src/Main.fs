namespace WebSharperWebsite

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI
open WebSharper.UI.Server

type EndPoint =
    | [<EndPoint "GET /">] Home
    | [<EndPoint "GET /features">] Features
    | [<EndPoint "GET /support">] Support
    | [<EndPoint "GET /warp">] Warp
    | [<EndPoint "GET /checkout">] Checkout
    | [<EndPoint "GET /error">] Error
    | [<EndPoint "GET /invoice">] Invoice
    | [<EndPoint "GET /account">] MyAccount
    | [<EndPoint "GET /success">] Success

module Templating =
    open WebSharper.UI.Html
    open type WebSharper.UI.ClientServer

    let private noChrome = function
        | EndPoint.Checkout
        | EndPoint.Error
        | EndPoint.Success
        | EndPoint.Invoice -> true
        | _ -> false

    let private hideIf condition =
        if condition then 
            attr.hidden ""
        else 
            Attr.Empty

    let Layout (endpoint: EndPoint) (body: Doc list) =
        Content.BundleScopes [| "home"; "features"; "support"; "warp"; "checkout"; "error"; "invoice"; "account"; "success" |] (
            Templates.LayoutTemplate()
                .Body(
                    client (ClientPages.Layout()) :: body
                )
                .HeaderVisibility(hideIf (noChrome endpoint))
                .FooterVisibility(hideIf (noChrome endpoint))
                .Doc(keepUnfilled = true)
        )

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

    let SupportPage =
        Content.Page(
            Templating.Layout EndPoint.Support [
                hydrate (ClientPages.Support())
            ],
            Bundle = "support"
        )

    let WarpPage =
        Content.Page(
            Templating.Layout EndPoint.Warp [
                ServerPages.Warp()
            ],
            Bundle = "warp"
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

    [<Website>]
    let Main =
        Application.MultiPage (fun ctx action ->
            match action with
            | Home -> HomePage
            | Features -> FeaturesPage
            | Support -> SupportPage
            | Warp -> WarpPage
            | Checkout -> CheckoutPage
            | Error -> ErrorPage
            | Invoice -> InvoicePage
            | MyAccount -> MyAccountPage
            | Success -> SuccessPage
        )

[<Sealed>]
type Website() =
    interface IWebsite<EndPoint> with
        member this.Sitelet = 
            Site.Main
            |> Sitelet.WithSettings [
                "LogBundleChoice", "true" 
            ]
        member this.Actions = [
            Home; Features; Support; Warp;
            Checkout; Error; Invoice; MyAccount; Success
        ]

[<assembly: Website(typeof<Website>)>]
do ()
