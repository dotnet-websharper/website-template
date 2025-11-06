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

    // Compute a menubar where the menu item for the given endpoint is active
    let MenuBar (ctx: Context<EndPoint>) endpoint : Doc list =
        let ( => ) txt act =
             li [if endpoint = act then yield attr.``class`` "active"] [
                a [attr.href (ctx.Link act)] [text txt]
             ]
        [
            "Home" => EndPoint.Home
            "About" => EndPoint.Download
        ]

    //let Main ctx action (title: string) (body: Doc list) =
    //    Content.Page(
    //        Templates.MainTemplate()
    //            .Title(title)
    //            .MenuBar(MenuBar ctx action)
    //            .Body(body)
    //            .Doc()
    //    )

    let Layout ctx (body: Doc list) =
        let bodyWithInit =
            Doc.Concat [
                client (Client.Layout())
                Doc.Concat body
            ]

        Content.Page(
            Templates.LayoutTemplate()
                .Body(bodyWithInit)
                .Doc(keepUnfilled = true)
        )


module Site =
    open WebSharper.UI.Html

    open type WebSharper.UI.ClientServer

    let HomePage ctx =
        Templating.Layout ctx [
            client (Client.Home())
        ]

    let AboutPage ctx =
        Templating.Layout ctx [
            client (Client.Download())
        ]

    let SupportPage ctx =
        Templating.Layout ctx [
            client (Client.Support())
        ]

    let DslAiPage ctx =
        Templating.Layout ctx [
            client (Client.DslAi())
        ]

    let CheckoutPage ctx =
        Templating.Layout ctx [
            client (Client.Checkout())
        ]

    let ErrorPage ctx =
        Templating.Layout ctx [
            client (Client.Error())
        ]

    let InvoicePage ctx =
        Templating.Layout ctx [
            client (Client.Invoice())
        ]

    let ManageSubscriptionPage ctx =
        Templating.Layout ctx [
            client (Client.ManageSubscription())
        ]

    let SuccessPage ctx =
        Templating.Layout ctx [
            client (Client.Success())
        ]

    [<Website>]
    let Main =
        Application.MultiPage (fun ctx action ->
            match action with
            | Home -> HomePage ctx
            | Download -> AboutPage ctx
            | Support -> SupportPage ctx
            | DslAi -> DslAiPage ctx
            | Checkout -> CheckoutPage ctx
            | Error -> ErrorPage ctx
            | Invoice -> InvoicePage ctx
            | ManageSubscription -> ManageSubscriptionPage ctx
            | Success -> SuccessPage ctx
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
