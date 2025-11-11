namespace WebSharperWebsite

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI
open WebSharper.UI.Server

type EndPoint =
    | [<EndPoint "GET /">] Home
    | [<EndPoint "GET /download">] Download
    | [<EndPoint "GET /support">] Support
    | [<EndPoint "GET /dsl-ai">] DslAi
    | [<EndPoint "GET /checkout">] Checkout
    | [<EndPoint "GET /error">] Error
    | [<EndPoint "GET /invoice">] Invoice
    | [<EndPoint "GET /manage-subscription">] ManageSubscription
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

    let DownloadPage =
        Templating.Layout EndPoint.Download [
            hydrate (Client.Download())
        ]

    let SupportPage =
        Templating.Layout EndPoint.Support [
            hydrate (Client.Support())
        ]

    let DslAiPage =
        Templating.Layout EndPoint.DslAi [
            hydrate (Client.DslAi())
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

    let ManageSubscriptionPage =
        Templating.Layout EndPoint.ManageSubscription [
            hydrate (Client.ManageSubscription())
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
            | Download -> DownloadPage
            | Support -> SupportPage
            | DslAi -> DslAiPage
            | Checkout -> CheckoutPage
            | Error -> ErrorPage
            | Invoice -> InvoicePage
            | ManageSubscription -> ManageSubscriptionPage
            | Success -> SuccessPage
        )

[<Sealed>]
type Website() =
    interface IWebsite<EndPoint> with
        member this.Sitelet = Site.Main
        member this.Actions = [
            Home; Download; Support; DslAi;
            Checkout; Error; Invoice; ManageSubscription; Success
        ]

[<assembly: Website(typeof<Website>)>]
do ()
