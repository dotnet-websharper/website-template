namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Notation
open WebSharper.UI.Templating

module Templates =   
    type LayoutTemplate = Templating.Template<"Layout.html", ClientLoad.FromDocument, ServerLoad.WhenChanged>
    type HomeTemplate = Templating.Template<"Home.html">
    type DownloadTemplate = Templating.Template<"Download.html">
    type SupportTemplate = Templating.Template<"Support.html">
    type DslAiTemplate = Templating.Template<"DslAi.html">
    type CheckoutTemplate = Templating.Template<"Checkout.html">
    type ErrorTemplate = Templating.Template<"Error.html">
    type InvoiceTemplate = Templating.Template<"Invoice.html">
    type ManageSubscriptionTemplate = Templating.Template<"ManageSubscription.html">
    type SuccessTemplate = Templating.Template<"Success.html">

[<JavaScript>]
module Client =

    let byId (id: string) = JS.Document.GetElementById id

    let ToggleMenu() =
        let navmenu = byId "navmenu"
        let openIcon = byId "openIcon"
        let closeIcon = byId "closeIcon"
        let bodyEl = JS.Document.Body

        navmenu.ClassList.Toggle("h-screen") |> ignore
        openIcon.ClassList.Toggle("hidden-open-icon") |> ignore
        closeIcon.ClassList.Toggle("visible-close-icon") |> ignore
        bodyEl.ClassList.Toggle("overflow-hidden") |> ignore

    let Layout () =
        Theme.Init()
        Templates.LayoutTemplate()
            .ToggleMenu(fun _ -> ToggleMenu())
            .ToggleTheme(fun _ -> Theme.Toggle())
            .Bind()
        Doc.Empty

    let Home () =
        
        if IsClient then
            Templates.HomeTemplate()
                .CopyFromClosest(fun e -> Clipboard.CopyFromClosest e)
                .InitCast(fun () ->
                    VideoPlayer.Init("ws-template")
                )
                .InitSnippetCode(fun () ->
                    SnippetCode.Init()
                )
                .Doc()
        else
            Templates.HomeTemplate()
                .Doc()

    let Download () =
        Templates.DownloadTemplate()
            .Doc()

    let Support () =    
        Templates.SupportTemplate()
            .Doc()

    let DslAi () =
        Templates.DslAiTemplate()
            .Doc()

    let Checkout () =
        Templates.CheckoutTemplate()
            .Doc()

    let Error () =
        Templates.ErrorTemplate()
            .Doc()

    let Invoice () =
        Templates.InvoiceTemplate()
            .Doc()

    let ManageSubscription () =
        Templates.ManageSubscriptionTemplate()
            .Doc()

    let Success () =
        Templates.SuccessTemplate()
            .Doc()