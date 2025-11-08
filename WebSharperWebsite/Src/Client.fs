namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
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

    [<Inline "new URL($path, document.baseURI).toString()">]
    let private toAbsoluteUrl (path: string) : string = X<string>

    let importDynamic (path: string) =
        JS.ImportDynamic (toAbsoluteUrl path) |> ignore

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
        Templates.HomeTemplate()
            .OnAfterRender(fun () ->
                VideoPlayer.Init("ws-template")

                Theme.Init()
                SnippetCode.Init()

                importDynamic "Js/line-numbers.js"
                SnippetCode.InitTabs() 
            )
            .CopyFromClosest(fun e -> Clipboard.CopyFromClosest e)
            .OnTabClick(fun e -> SnippetCode.OnTabClick e.Event)
            .Doc()

    let Download () =
        Templates.DownloadTemplate()
            .CopyFromClosest(fun e -> Clipboard.CopyFromClosest e)
            .Doc()

    let Support () =    
        Templates.SupportTemplate()
            .Doc()

    let DslAi () =
        Templates.DslAiTemplate()
            .OnAfterRender(fun () ->
                SnippetCode.Init()
                importDynamic "Js/line-numbers.js"
                SnippetCode.InitTabs()       
            )
            .Doc()

    let Checkout () =
        Templates.CheckoutTemplate()
            .OnAfterRender(fun () ->
                importDynamic "Js/checkout-auth.js"
                importDynamic "Js/checkout.js"
            )
            .Doc()

    let Error () =
        Templates.ErrorTemplate()
            .Doc()

    let Invoice () =
        Templates.InvoiceTemplate()
            .OnAfterRender(fun () ->
                importDynamic "Js/invoice.js"
            )
            .Doc()

    let ManageSubscription () =
        Templates.ManageSubscriptionTemplate()
            .OnAfterRender(fun () ->
                importDynamic "Js/manage-subscription.js"
            )
            .Doc()

    let Success () =
        Templates.SuccessTemplate()
            .OnAfterRender(fun () ->
                importDynamic "Js/success-confirm.js"
            )
            .Doc()
