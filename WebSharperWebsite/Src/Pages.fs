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

    let ForTeams () =
        WebSharperWebsite.Support.Page.ForTeamsDoc()

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

    let Examples () =
        Examples.ExamplesDoc()

module ServerPages =
    open type WebSharper.UI.ClientServer

    // The tab/panel instances come from the inner templates in Components.html;
    // nothing here builds DOM - only data is supplied.

    let Home () =
        Content.BundleScope "home" (
            Templates.HomeTemplate.Content()
                .OnAfterRender(fun () ->
                    Theme.Init()
                    SnippetCode.Init()

                    SnippetCode.InitTabs() 
                )
                .CopyFromClosest(fun e -> Clipboard.CopyFromClosest e)
                .VsCodeDemo(Component.VsCode("./snippets/spa/index", [
                    { Label = "Client.fs"; Lang = "fsharp"; Code = Snippets.text "spa/Client.fs" }
                    { Label = "index"; Lang = "html"; Code = Snippets.text "spa/index" }
                ], Component.ViteTerminal()))
                .WorkersDemo(Component.VsCode3(
                    { Label = "Worker.fs"; Lang = "fsharp"; Code = Snippets.text "workers/Worker.fs" },
                    { Label = "index.js"; Lang = "js"; Code = Snippets.text "workers/index.mjs" },
                    { Label = "worker.js"; Lang = "js"; Code = Snippets.text "workers/worker.mjs" },
                    "> Received message from main thread: Hello, worker!\n█"))
                .ReactiveCode(Component.CodeFilesWithPreviewPanel("./snippets/add_two_numbers/index", [
                    { Label = "AddTwoNumbers.fs"; Lang = Snippets.lang "add_two_numbers/AddTwoNumbers.fs"; Code = Snippets.text "add_two_numbers/AddTwoNumbers.fs" }
                    { Label = "addTwoNumbers.js"; Lang = Snippets.lang "add_two_numbers/addTwoNumbers.mjs"; Code = Snippets.text "add_two_numbers/addTwoNumbers.mjs" }
                ]))
                .FormsCode(Component.CodeFilesWithPreviewPanel("./snippets/forms/index", [
                    { Label = "Forms.fs"; Lang = Snippets.lang "powerful_ui/Forms.fs"; Code = Snippets.text "powerful_ui/Forms.fs" }
                    { Label = "forms.js"; Lang = Snippets.lang "powerful_ui/forms.mjs"; Code = Snippets.text "powerful_ui/forms.mjs" }
                ]))
                .Doc()
        )

    let Features () =
        Content.BundleScope "features" (
            Templates.FeaturesTemplate.Content()
                .Feature_mvu(Component.CodeFiles([
                    { Label = "NameInput.fs"; Lang = "fsharp"; Code = Snippets.text "mvu/NameInput.fs" }
                    { Label = "nameInput.js"; Lang = "js"; Code = Snippets.text "mvu/nameInput.mjs" }
                ]))
                .Feature_react(Component.CodeFiles([
                    { Label = "Person.fs"; Lang = "fsharp"; Code = Snippets.text "react/Person.fs" }
                    { Label = "Person.js"; Lang = "js"; Code = Snippets.text "react/Person.mjs" }
                ]))
                .Feature_webapi(Component.CodeFiles([
                    { Label = "ArticleSite.fs"; Lang = "fsharp"; Code = Snippets.text "webapi/ArticleSite.fs" }
                    { Label = "articles"; Lang = "html"; Code = Snippets.text "webapi/articles" }
                    { Label = "articleWithId.json"; Lang = "json"; Code = Snippets.text "webapi/articleWithId.json" }
                ]))
                .Feature_csr(Component.CodeFiles([
                    { Label = "ArticleRouter.fs"; Lang = "fsharp"; Code = Snippets.text "csr/ArticleRouter.fs" }
                    { Label = "articleRouter.js"; Lang = "js"; Code = Snippets.text "csr/articleRouter.mjs" }
                ]))
                .Feature_lc(Component.CodeFiles([
                    { Label = "query.fs"; Lang = "fsharp"; Code = Snippets.text "lc/query.fs" }
                    { Label = "query.cs"; Lang = "csharp"; Code = Snippets.text "lc/query.cs" }
                ]))
                .Feature_tsh(Component.CodeFiles([
                    { Label = "Client.fs"; Lang = "fsharp"; Code = Snippets.text "tsh/Client.fs" }
                    { Label = "index"; Lang = "html"; Code = Snippets.text "tsh/index" }
                ]))
                .Feature_rwe(Component.CodeFiles([
                    { Label = "RemoteCall.fs"; Lang = "fsharp"; Code = Snippets.text "rwe/RemoteCall.fs" }
                    { Label = "remoteCall.js"; Lang = "js"; Code = Snippets.text "rwe/remoteCall.mjs" }
                ]))
                .SCGContent(hydrate (FeaturesSCG.HydrateSCGDoc ()))
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
                .WarpExample(Component.CodeFiles([
                    { Label = "DSL.warp"; Lang = "fsharp"; Code = Snippets.text "dsl/DSL.warp" }
                ]))
                .Doc()
        )

    let Ocaml () =
        Content.BundleScope "ocaml" (
            Templates.OcamlTemplate.Content()
                .OnAfterRender(fun () ->
                    SnippetCode.Init()
                    SnippetCode.InitTabs()
                )
                .OcamlHero(Component.VsCode("./snippets/todomvc-lm/index.html", [
                    { Label = "todomvc.ml"; Lang = "ocaml"; Code = Snippets.text "ocaml/todomvc.ml" }
                    { Label = "todomvc.html"; Lang = "html"; Code = Snippets.text "ocaml/todomvc.html" }
                ], Component.WsocamlTerminal()))
                .OcamlRemoting(Component.CodeFiles([
                    { Label = "remoting.ml"; Lang = "ocaml"; Code = Snippets.text "ocaml/remoting.ml" }
                ]))
                .OcamlTiers(Component.VsCode3(
                    { Label = "shared.ml"; Lang = "ocaml"; Code = Snippets.text "ocaml/shared.ml" },
                    { Label = "server.ml"; Lang = "ocaml"; Code = Snippets.text "ocaml/server.ml" },
                    { Label = "client.ml"; Lang = "ocaml"; Code = Snippets.text "ocaml/client.ml" },
                    "> dotnet build -c Release\nCompiling shared.ml\nCompiling server.ml\nCompiling client.ml\nBuild succeeded. 0 Warning(s), 0 Error(s)"))
                .OcamlReactive(Component.CodeFilesWithPreviewPanel("./snippets/ocaml-counter/index.html", [
                    { Label = "counter.ml"; Lang = "ocaml"; Code = Snippets.text "ocaml/counter.ml" }
                ]))
                .Doc()
        )

    let NotFound () =
        Content.BundleScope "404" (
            Templates.NotFoundTemplate.Content()
                .Doc()
        )

    // Placeholder shown in place of a not-yet-released page. The original
    // Warp and Support content is kept in the source tree and can be wired
    // back by pointing `ServerPages.Warp`/`Support.Page.SupportDoc` at the
    // routes again.
    let ComingSoon (eyebrow: string) (title: string) (description: string) =
        Content.BundleScope "coming-soon" (
            Templates.ComingSoonTemplate.Content()
                .Eyebrow(eyebrow)
                .Title(title)
                .Description(description)
                .Doc()
        )

    // Static legal pages (Privacy Policy, Terms of Use, Cookie Policy). The body
    // is raw HTML stored as an embedded fragment under CodeFragments/legal/.
    let Legal (title: string) (bodyKey: string) =
        Content.BundleScope "legal" (
            Templates.LegalTemplate.Content()
                .Title(title)
                .Body(Doc.Verbatim (Snippets.text bodyKey))
                .Doc()
        )