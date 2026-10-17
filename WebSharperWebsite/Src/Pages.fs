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

    type CodeTab =
        { Label: string
          Lang: string
          Code: string }

    let private tabIcon (lang: string) : Doc =
        match lang.ToLowerInvariant() with
        | "fsharp" -> Templates.HomeTemplate.IconFSharp().Doc()
        | "javascript" | "js" -> Templates.HomeTemplate.IconJavaScript().Doc()
        | "html" -> Templates.HomeTemplate.IconHtml().Doc()
        | "json" -> Templates.HomeTemplate.IconJson().Doc()
        | "csharp" -> Templates.HomeTemplate.IconCSharp().Doc()
        | _ -> Doc.Empty

    // The tab/panel instances are created from the inner templates in
    // Home.html; nothing here builds DOM - only data is supplied.

    let private codeTab (t: CodeTab) : Doc =
        Templates.HomeTemplate.CodeTab()
            .Label(t.Label)
            .Lang(t.Lang)
            .Icon(tabIcon t.Lang)
            .TabClick(fun e -> SnippetCode.OnTabClick e.Event)
            .Doc()

    // Panels for the code-window + live-preview widget (Prism line numbers).
    let private codePanel (i: int) (t: CodeTab) : Doc =
        if i = 0 then
            Templates.HomeTemplate.CodePanelFirst().Lang(t.Lang).Code(t.Code).Doc()
        else
            Templates.HomeTemplate.CodePanel().Lang(t.Lang).Code(t.Code).Doc()

    /// The code-window + live-preview widget: `tabs` supply label/language/raw
    /// code, `previewPath` is the URL loaded into the preview iframe.
    let private codeFilesWithPreviewPanel (previewPath: string) (tabs: CodeTab list) : Doc =
        let indicator = Templates.HomeTemplate.TabIndicator().Doc()
        Templates.HomeTemplate.CodeFilesWithPreviewPanel()
            .Tabs(Doc.Concat (indicator :: List.map codeTab tabs))
            .Panels(Doc.Concat (tabs |> List.mapi codePanel))
            .Preview(previewPath)
            .OnTabClick(fun e -> SnippetCode.OnTabClick e.Event)
            .Init(fun () ->
                SnippetCode.Init()
                SnippetCode.InitTabs())
            .Doc()

    // Panels for the plain tabbed editor.
    let private codeFilePanel (i: int) (t: CodeTab) : Doc =
        if i = 0 then
            Templates.HomeTemplate.CodeFilePanelFirst().Lang(t.Lang).Code(t.Code).Doc()
        else
            Templates.HomeTemplate.CodeFilePanel().Lang(t.Lang).Code(t.Code).Doc()

    /// A tabbed code editor (one or more files): each tab is one entry in
    /// `tabs`. Behavior comes from the page-level SnippetCode initializers.
    let private codeFiles (tabs: CodeTab list) : Doc =
        let indicator = Templates.HomeTemplate.TabIndicator().Doc()
        Templates.HomeTemplate.CodeFiles()
            .Tabs(Doc.Concat (indicator :: List.map codeTab tabs))
            .Panels(Doc.Concat (tabs |> List.mapi codeFilePanel))
            .Doc()

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
                .ReactiveCode(
                    codeFilesWithPreviewPanel "./snippets/add_two_numbers/index" [
                        { Label = "AddTwoNumbers.fs"; Lang = Snippets.lang "add_two_numbers/AddTwoNumbers.fs"; Code = Snippets.text "add_two_numbers/AddTwoNumbers.fs" }
                        { Label = "addTwoNumbers.js"; Lang = Snippets.lang "add_two_numbers/addTwoNumbers.mjs"; Code = Snippets.text "add_two_numbers/addTwoNumbers.mjs" }
                    ])
                .FormsCode(
                    codeFilesWithPreviewPanel "./snippets/forms/index" [
                        { Label = "Forms.fs"; Lang = Snippets.lang "powerful_ui/Forms.fs"; Code = Snippets.text "powerful_ui/Forms.fs" }
                        { Label = "forms.js"; Lang = Snippets.lang "powerful_ui/forms.mjs"; Code = Snippets.text "powerful_ui/forms.mjs" }
                    ])
                .Feature_mvu(codeFiles [
                    { Label = "NameInput.fs"; Lang = "fsharp"; Code = Snippets.text "mvu/NameInput.fs" }
                    { Label = "nameInput.js"; Lang = "js"; Code = Snippets.text "mvu/nameInput.mjs" }
                ])
                .Feature_react(codeFiles [
                    { Label = "Person.fs"; Lang = "fsharp"; Code = Snippets.text "react/Person.fs" }
                    { Label = "Person.js"; Lang = "js"; Code = Snippets.text "react/Person.mjs" }
                ])
                .Feature_webapi(codeFiles [
                    { Label = "ArticleSite.fs"; Lang = "fsharp"; Code = Snippets.text "webapi/ArticleSite.fs" }
                    { Label = "articles"; Lang = "html"; Code = Snippets.text "webapi/articles" }
                    { Label = "articleWithId.json"; Lang = "json"; Code = Snippets.text "webapi/articleWithId.json" }
                ])
                .Feature_csr(codeFiles [
                    { Label = "ArticleRouter.fs"; Lang = "fsharp"; Code = Snippets.text "csr/ArticleRouter.fs" }
                    { Label = "articleRouter.js"; Lang = "js"; Code = Snippets.text "csr/articleRouter.mjs" }
                ])
                .Feature_lc(codeFiles [
                    { Label = "query.fs"; Lang = "fsharp"; Code = Snippets.text "lc/query.fs" }
                    { Label = "query.cs"; Lang = "csharp"; Code = Snippets.text "lc/query.cs" }
                ])
                .Feature_tsh(codeFiles [
                    { Label = "Client.fs"; Lang = "fsharp"; Code = Snippets.text "tsh/Client.fs" }
                    { Label = "index"; Lang = "html"; Code = Snippets.text "tsh/index" }
                ])
                .Feature_rwe(codeFiles [
                    { Label = "RemoteCall.fs"; Lang = "fsharp"; Code = Snippets.text "rwe/RemoteCall.fs" }
                    { Label = "remoteCall.js"; Lang = "js"; Code = Snippets.text "rwe/remoteCall.mjs" }
                ])
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