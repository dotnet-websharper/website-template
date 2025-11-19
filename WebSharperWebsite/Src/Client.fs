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
            .AccountBtnClick(AccountMenu.AccountBtnClick)
            .AccountBtnKeyDown(AccountMenu.AccountBtnKeyDown)
            .Login(fun _ -> AuthClient.Login())
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

    open Support.State
    open Support.Api
    open Support.ViewsAttrs
    open Support.ViewsPricing

    let Support () =    
        if IsClient then
            Templates.SupportTemplate()
                .OnAfterRender(fun () ->
                    HydrateCatalog() |> Async.StartImmediate
                )
                .ProName(Doc.TextView ProName)
                .FreeName(Doc.TextView FreeName)
                .ProPriceAmount(Doc.TextView ProPriceAmount)
                .ProPriceLabel(Doc.TextView ProPriceLabel)
                .FreePriceAmount(Doc.TextView FreePriceAmount)
                .FreePriceLabel(Doc.TextView FreePriceLabel)
                .ProTotalLabel(Doc.TextView ProTotalLabel)
                .ProTotalAmount(Doc.TextView ProTotalAmount)
                .FreeTotalLabel(Doc.TextView FreeTotalLabel)
                .FreeTotalAmount(Doc.TextView FreeTotalAmount)
                .ProNote(Doc.TextView ProNote)
                .FreeNote(Doc.TextView FreeNote)
                .BillMonthAttr(BillMonthAttr())
                .BillYearAttr(BillYearAttr())
                .ProCheckoutAttr(ProCheckoutAttr())
                .FreeCheckoutAttr(FreeCheckoutAttr())
                .SeatCount(SeatCountText)
                .OnBillMonth(fun _ -> OnBillMonth())
                .OnBillYear(fun _ -> OnBillYear())
                .OnSeatMinus(fun _ -> OnSeatMinus())
                .OnSeatPlus(fun _ -> OnSeatPlus())
                .Doc()
        else
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

    open Checkout.State
    open Checkout.ViewsPricing
    open Checkout.Controller
    open Checkout.ViewsAttrs

    let Checkout () =
        if IsClient then
            Templates.CheckoutTemplate()
                .OnAfterRender(fun () -> OnAfterRender())

                .BackLinkAttr(BackLinkAttr)
                .BackLinkLabel(BackLinkLabel)

                .AuthSectionAttr(AuthSectionAttr)
                .PaymentSectionAttr(PaymentSectionAttr)
                .PlanName(Doc.TextView PlanName)
                .PlanPriceLine(PlanPriceLine |> Doc.BindView id)
                .PriceHint(Doc.TextView PriceHint)

                .SeatSelectorAttr(SeatSelectorAttr())
                .SeatsText(SeatsText)
                .OnSeatMinus(fun _ -> OnSeatMinus())
                .OnSeatPlus(fun _ -> OnSeatPlus())

                .Email(Email)
                .Street(Street)
                .City(City)
                .Postal(Postal)

                .Country(Country)
                .IsCompany(IsCompany)
                .CompanyBlockAttr(CompanyBlockAttr())
                .CompanyName(CompanyName)
                .CompanyNameAttr(CompanyNameAttr())
                .Vatin(Vatin)
                .VatinAttr(VatinAttr())

                .Subtotal(Doc.TextView Subtotal)
                .Taxes(Doc.TextView Taxes)
                .Total(Doc.TextView Total)

                .FormErrorDoc(FormErrorDoc)
                .OnGitHubLogin(fun _ -> AuthClient.Login())

                .ContinueButtonAttr(ContinueButtonAttr())
                .ContinueText(Doc.TextView ContinueText.View)

                .OnContinueClick(fun _ -> OnContinueClick())
                .Doc()
        else
            Templates.CheckoutTemplate()
                .IsCompany(false)
                .CompanyBlockAttr(Html.attr.``class`` "hidden")
                .Doc()

    let Error () =
        if IsClient then 
            Templates.ErrorTemplate()
                .OnAfterRender(fun () -> Error.Init())
                .ErrorTitle(Doc.TextView Error.Title)
                .ErrorMessage(Doc.TextView Error.Message)
                .OnRetry(fun _ -> Error.OnRetry())
                .OnBack(fun _ -> Error.OnBack())            
                .Doc()
        else 
            Templates.ErrorTemplate()         
                .Doc()


    let Invoice () =
        Templates.InvoiceTemplate()
            .OnAfterRender(fun () ->
                importDynamicIgnore "Js/invoice.js"
            )
            .Doc()

    open WebSharperWebsite.ManageSubscription

    let ManageSubscription () =
        //WebSharperWebsite.ManageSubscription.Page.Doc()
        Templates.ManageSubscriptionTemplate()
            .OnAfterRender(fun () ->
                WebSharperWebsite.ManageSubscription.Page.Init()
            )
            .GoSubs(fun _ -> Nav.GoTo Nav.Tab.Subs)
            .GoBilling(fun _ -> Nav.GoTo Nav.Tab.Billing)
            .AddSeatsClick(fun _ -> JS.Window.Location.Href <- "./checkout.html?plan=pro&interval=year&seats=1")
            .RefreshClick(fun _ -> Controller.HandleRefresh())
            .BillingEditClick(fun _ -> Controller.HandleBillingEdit())
            .BillingSaveClick(fun e -> Controller.HandleBillingSave())
            .BillingCancelClick(fun _ -> Controller.HandleBillingCancel())
            .Doc()
            
    let Success () =
        Templates.SuccessTemplate()
            .OnAfterRender(fun () ->
                importDynamicIgnore "Js/success-confirm.js"
            )
            .Doc()
