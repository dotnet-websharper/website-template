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
        let bodyWithInit =
            Doc.Concat [
                client (Client.Layout())
                Doc.Concat body
            ]

        Content.Page(
            Templates.LayoutTemplate()
                .Body(bodyWithInit)
                .HeaderVisibility(hideIf (noChrome endpoint))
                .FooterVisibility(hideIf (noChrome endpoint))
                .Doc(keepUnfilled = true)
        )


module Site =
    open type WebSharper.UI.ClientServer

    let HomePage =
        Templating.Layout EndPoint.Home [
            hydrate (Client.Home())
        ]

    let FeaturesPage =
        Templating.Layout EndPoint.Features [
            hydrate (Client.Features())
        ]

    let SupportPage =
        Templating.Layout EndPoint.Support [
            hydrate (Client.Support())
        ]

    let WarpPage =
        Templating.Layout EndPoint.Warp [
            hydrate (Client.Warp())
        ]

    let CheckoutPage =
        Templating.Layout EndPoint.Checkout [
            hydrate (Client.Checkout())
        ]

    let ErrorPage =
        Templating.Layout EndPoint.Error [
            hydrate (Client.Error())
        ]

    let InvoicePage =
        Templating.Layout EndPoint.Invoice [
            hydrate (Client.Invoice())
        ]

    let MyAccountPage =
        Templating.Layout EndPoint.MyAccount [
            hydrate (Client.MyAccount())
        ]

    let SuccessPage =
        Templating.Layout EndPoint.Success [
            hydrate (Client.Success())
        ]

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
        member this.Sitelet = Site.Main
        member this.Actions = [
            Home; Features; Support; Warp;
            Checkout; Error; Invoice; MyAccount; Success
        ]

[<assembly: Website(typeof<Website>)>]
do ()
