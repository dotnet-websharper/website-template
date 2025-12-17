namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.Sitelets

[<JavaScript>]
module ClientPages =
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
        JS.ImportFile "../../../tailwind.css"
        JS.ImportFile "./Js/main.js"
        Theme.Init()
        Templates.LayoutTemplate()
            .ToggleMenu(fun _ -> ToggleMenu())
            .ToggleTheme(fun _ -> Theme.Toggle())
            // Account menu bindings
            .OnKeyDown(AccountMenu.CloseOnEscape)
            .OnStopPropagation(AccountMenu.StopPropagation)
            .CloseOnBackgroundClick(AccountMenu.CloseOnBackgroundClick)

            .AccountBtnClick(AccountMenu.AccountBtnClick)
            .AccountBtnKeyDown(fun e -> ())
            .Login(fun _ -> AuthClient.Login())
            .Logout(AccountMenu.Logout)
            .DropdownAttr(AccountMenu.DropdownAttr())
            .AccountBtnAria(AccountMenu.AccountBtnAria())
            .AvatarAttr(AccountMenu.AvatarAttr())
            .AvatarAttrHamburger(AccountMenu.AvatarAttr())
            .IconAttr(AccountMenu.IconAttr())
            .SkeletonAttr(AccountMenu.SkeletonAttr())
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

    let Support () =    
        Support.Page.SupportDoc()

    let Checkout () =
        Checkout.Page.CheckoutDoc()

    let Error () =
        if IsClient then 
            Templates.ErrorTemplate.Content()
                .OnAfterRender(Error.Init)
                .ErrorTitle(Doc.TextView Error.Title)
                .ErrorMessage(Doc.TextView Error.Message)
                .OnRetry(fun _ -> Error.OnRetry())
                .OnBack(fun _ -> Error.OnBack())            
                .Doc()
        else 
            Templates.ErrorTemplate()         
                .Doc()

    open WebSharperWebsite.ManageSubscription
    open Invoice

    let Invoice () =
        if IsClient then
            Templates.InvoiceTemplate.Content()
                .OnAfterRender(Invoice.OnAfterRender)
                .InvId(InvId)
                .InvDate(InvDate)
                .InvStatus(InvStatus)
                .InvAmount(InvAmount)
                .InvSub(InvSub)
                .BillToName(BillToName)
                .BillToAddr(BillToAddr)
                .BillToVat(BillToVat)
                .Doc()
        else 
            Templates.InvoiceTemplate().Doc()    

    let MyAccount () =
        Page.ManageSubscriptionDoc()
            
    open Checkout.Success

    let Success () =
        if IsClient then
            Templates.SuccessTemplate.Content()
                .OnAfterRender(OnAfterRender)
                .MessageText(MessageText)
                .DetailsAttr(DetailsAttr)
                .DetailsDoc(DetailsDoc)
                .Doc()
        else
            Templates.SuccessTemplate.Content()
                .MessageText(Html.text "Confirming your payment…")
                .Doc()

    let Features () =
        Features.FeaturesDoc()

module ServerPages =

    let Home () =
        Content.BundleScope "home" (
            Templates.HomeTemplate.Content()
                .OnAfterRender(fun () ->
                    VideoPlayer.Init("ws-template")

                    Theme.Init()
                    SnippetCode.Init()

                    SnippetCode.InitTabs() 
                )
                .CopyFromClosest(fun e -> Clipboard.CopyFromClosest e)
                .OnTabClick(fun e -> SnippetCode.OnTabClick e.Event)
                .Doc()
        )

    let Download () =
        Content.BundleScope "download" (
            Templates.DownloadTemplate.Content()
                .CopyFromClosest(fun e -> Clipboard.CopyFromClosest e)
                .Doc()
        )

    let Warp () =
        Content.BundleScope "warp" (
            Templates.DslAiTemplate.Content()
                .OnAfterRender(fun () ->
                    SnippetCode.Init()
                    SnippetCode.InitTabs()       
                )
                .Doc()
        )

    let NotFound () =
        Content.BundleScope "404" (
            Templates.NotFoundTemplate.Content()
                .Doc()
        )