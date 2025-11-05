namespace WebSharperWebsite

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI
open WebSharper.UI.Server

type EndPoint =
    | [<EndPoint "GET /">] Home
    | [<EndPoint "GET /download">] Download

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

    //let HomePage ctx =
    //    Templating.Main ctx EndPoint.Home "Home" [
    //        h1 [] [text "Say Hi to JavaScript!"]
    //        div [] [client (Client.Main())]
    //    ]

    //let AboutPage ctx =
    //    Templating.Main ctx EndPoint.About "About" [
    //        h1 [] [text "About"]
    //        p [] [text "This is a template WebSharper generated html application."]
    //    ]

    let HomePage ctx =
        Templating.Layout ctx [
            div [] [client (Client.Home())]
        ]

    let AboutPage ctx =
        Templating.Layout ctx [
            div [] [client (Client.About())]
        ]

    [<Website>]
    let Main =
        Application.MultiPage (fun ctx action ->
            match action with
            | Home -> HomePage ctx
            | Download -> AboutPage ctx
        )

[<Sealed>]
type Website() =
    interface IWebsite<EndPoint> with
        member this.Sitelet = Site.Main
        member this.Actions = [Home; Download]

[<assembly: Website(typeof<Website>)>]
do ()
