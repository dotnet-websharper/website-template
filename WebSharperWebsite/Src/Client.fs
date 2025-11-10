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
    open Utils

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
            // Account menu bindings
            .AccountBtnClick(AccountMenu.AccountBtnClick)
            .AccountBtnKeyDown(AccountMenu.AccountBtnKeyDown)
            .Login(AccountMenu.Login)
            .Logout(AccountMenu.Logout)
            .DropdownAttr(AccountMenu.DropdownAttr())
            .AccountBtnAria(AccountMenu.AccountBtnAria())
            .AvatarAttr(AccountMenu.AvatarAttr())
            .AvatarSrc(AccountMenu.AvatarSrc)
            .IconAttr(AccountMenu.IconAttr())           
            .AccountHeaderText(AccountMenu.AccountHeaderText)
            // Dropdown attributes
            .HeaderAttrD(AccountMenu.HeaderAttr())
            .BtnManageAttrD(AccountMenu.BtnManageAttr())
            .BtnLoginAttrD(AccountMenu.BtnLoginAttr())
            .BtnLogoutAttrD(AccountMenu.BtnLogoutAttr())
            // Non-dropdown attributes
            .HeaderAttr(AccountMenu.HeaderAttr())
            .BtnManageAttr(AccountMenu.BtnManageAttr())
            .BtnLoginAttr(AccountMenu.BtnLoginAttr())
            .BtnLogoutAttr(AccountMenu.BtnLogoutAttr())
            .Bind()
        AccountMenu.InitGlobal()
        Doc.Empty

    let Home () =
        Templates.HomeTemplate()
            .OnAfterRender(fun () ->
                VideoPlayer.Init("ws-template")

                Theme.Init()
                SnippetCode.Init()

                importDynamicIgnore "Js/line-numbers.js"
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
                importDynamicIgnore "Js/line-numbers.js"
                SnippetCode.InitTabs()       
            )
            .Doc()

    let Checkout () =
        Templates.CheckoutTemplate()
            .OnAfterRender(fun () ->
                importDynamicIgnore "Js/checkout-auth.js"
                importDynamicIgnore "Js/checkout.js"
            )
            .Doc()

    let Error () =
        Templates.ErrorTemplate()
            .OnAfterRender(fun () ->
                importDynamicIgnore "Js/error.js"
            )
            .Doc()

    let Invoice () =
        Templates.InvoiceTemplate()
            .OnAfterRender(fun () ->
                importDynamicIgnore "Js/invoice.js"
            )
            .Doc()

    let ManageSubscription () =
        Templates.ManageSubscriptionTemplate()
            .OnAfterRender(fun () ->
                ManageSubscription.Init()
            )
            .Doc()

    let Success () =
        Templates.SuccessTemplate()
            .OnAfterRender(fun () ->
                importDynamicIgnore "Js/success-confirm.js"
            )
            .Doc()
