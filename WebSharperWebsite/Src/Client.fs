namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client

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
        Support.Page.SupportDoc()

    let DslAi () =
        Templates.DslAiTemplate()
            .OnAfterRender(fun () ->
                SnippetCode.Init()
                importDynamicIgnore "Js/line-numbers.js"
                SnippetCode.InitTabs()       
            )
            .Doc()

    let Checkout () =
        Checkout.Page.CheckoutDoc()

    let Error () =
        if IsClient then 
            Templates.ErrorTemplate()
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
            Templates.InvoiceTemplate()
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

    let ManageSubscription () =
        Page.ManageSubscriptionDoc()
            
    open Checkout.Success

    let Success () =
        if IsClient then
            Templates.SuccessTemplate()
                .OnAfterRender(OnAfterRender)
                .MessageText(MessageText)
                .DetailsAttr(DetailsAttr)
                .DetailsDoc(DetailsDoc)
                .Doc()
        else
            Templates.SuccessTemplate()
                .MessageText(Html.text "Confirming your payment…")
                .Doc()