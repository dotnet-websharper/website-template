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
            // Newsletter (footer) — rendered client-side so its `ws-var` binds.
            .Newsletter(
                Templates.NewsletterTemplate()
                    .SubscribeEmail(Newsletter.EmailVar)
                    .OnSubscribe(Newsletter.OnSubscribe)
                    .SubscribeStatus(Doc.TextView Newsletter.StatusVar.View)
                    .Doc()
            )
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

    let Bindings () =
        Bindings.BindingsDoc()

    let Coverage () =
        Content.BundleScope "coverage" (
            Templates.CoverageTemplate.Content()
            |> Coverage.Fill
            |> fun t -> t.Explorer(client (CoverageClient.Explorer())).Doc()
        )

    let Conformance () =
        Content.BundleScope "conformance" (
            Templates.ConformanceTemplate.Content()
            |> Conformance.Fill
            |> fun t -> t.Behaviour(client (ConformanceClient.Behaviour())).Doc()
        )

    // The blog listing and article pages are generated from the article files in
    // the `blogs` submodule (see Blog.fs).
    let Blogs () =
        Content.BundleScope "blogs" (
            Templates.BlogsTemplate.Content()
                .Posts(Blog.Listing())
                .YearNav(Blog.YearNav())
                .Doc()
        )

    let BlogArticle (stem: string) =
        match Blog.Find stem with
        | None ->
            // Unknown article — fall back to the listing.
            Content.BundleScope "blogs" (
                Templates.BlogsTemplate.Content()
                    .Posts(Blog.Listing())
                    .Doc()
            )
        | Some article ->
            let body = Blog.ArticleBody article
            Content.BundleScope "blogs" (
                Templates.BlogsArticleTemplate.Content()
                    .Title(article.Title)
                    .Meta(Blog.ArticleMeta article)
                    .SectionNav(Blog.ArticleSectionNav body)
                    .Body(Doc.Verbatim body)
                    .Doc()
            )

    let Features () =
        Content.BundleScope "features" (
            Templates.FeaturesTemplate.Content()
                .Feature_reactive(Component.CodeFilesWithPreviewTab("./snippets/reactive/index.html", [
                    { Label = "Client.fs"; Lang = "fsharp"; Code = Snippets.text "reactive/ReactiveValues.fs" }
                    { Label = "index.html"; Lang = "html"; Code = Snippets.text "reactive/index.html" }
                    { Label = "reactive.js"; Lang = "js"; Code = Snippets.text "reactive/reactiveValues.mjs" }
                ]))
                .Feature_jsbindings(Component.CodeFilesWithPreviewTab("./snippets/maps/index.html", [
                    { Label = "Leaflet.fs"; Lang = "fsharp"; Code = Snippets.text "jsbindings/LeafletBinding.fs" }
                    { Label = "Client.fs"; Lang = "fsharp"; Code = Snippets.text "jsbindings/Client.fs" }
                    { Label = "index.html"; Lang = "html"; Code = Snippets.text "jsbindings/index.html" }
                ]))
                .Feature_tsh(Component.CodeFiles([
                    { Label = "Client.fs"; Lang = "fsharp"; Code = Snippets.text "tsh/Client.fs" }
                    { Label = "index"; Lang = "html"; Code = Snippets.text "tsh/index" }
                ]))
                .Feature_rwe(Component.CodeFiles([
                    { Label = "RemoteCall.fs"; Lang = "fsharp"; Code = Snippets.text "rwe/RemoteCall.fs" }
                    { Label = "remoteCall.js"; Lang = "js"; Code = Snippets.text "rwe/remoteCall.mjs" }
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
                .Feature_mvu(Component.CodeFiles([
                    { Label = "NameInput.fs"; Lang = "fsharp"; Code = Snippets.text "mvu/NameInput.fs" }
                    { Label = "nameInput.js"; Lang = "js"; Code = Snippets.text "mvu/nameInput.mjs" }
                ]))
                .Feature_lc(Component.CodeFiles([
                    { Label = "query.fs"; Lang = "fsharp"; Code = Snippets.text "lc/query.fs" }
                    { Label = "query.cs"; Lang = "csharp"; Code = Snippets.text "lc/query.cs" }
                ]))
                .Feature_react(Component.CodeFiles([
                    { Label = "Person.fs"; Lang = "fsharp"; Code = Snippets.text "react/Person.fs" }
                    { Label = "Person.js"; Lang = "js"; Code = Snippets.text "react/Person.mjs" }
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

    /// The C# page's translator: one entry per showcased C# feature, with the
    /// fragment keys under CodeFragments/csharp/translate/ (<key>.cs, <key>.mjs).
    let private csharpTranslations =
        [
            "async", "async / await", "native", "Async methods become JavaScript async functions.",
            "WebSharper 10 compiled a method like this to a hand-written state machine of about 50 lines. WebSharper 11 keeps your loop and your awaits, and wraps the async function in a .NET-compatible Task, so exceptions and continuations behave as in .NET."
            "iterators", "Iterators", "generators", "yield return becomes a generator function.",
            "Sequences are real JavaScript iterables, and disposing an enumerator early still runs your finally blocks, as in .NET."
            "linq", "LINQ", "Enumerable", "Query operators run in the browser.",
            "Where, OrderByDescending, Take and Select map to WebSharper's lazy sequence functions, so the query is evaluated lazily, the way LINQ to Objects evaluates it."
            "structs", "Mutable structs", "value semantics", "Copies behave like .NET value types.",
            "Assigning, passing, returning and boxing a mutable struct makes a copy, so the method above cannot change the caller's p1. Record structs work too."
            "ranges", "Indices & ranges", "^1, 1..^0", "Hat indices and slices on arrays.",
            "^1 reads from the end and a..b slices, on arrays. System.Index and System.Range values can be stored and passed around."
            "optional", "Optional parameters", "defaults", "C# defaults become JavaScript default parameters.",
            "Omitted arguments use the declared defaults, including when the method is called through a delegate."
            "callerinfo", "Caller info", "attributes", "[CallerArgumentExpression] fills in the source text.",
            "The compiler passes the source text of the argument, so a failed check reports exactly what was tested."
        ]

    let CSharp () =
        let tabs =
            csharpTranslations
            |> List.mapi (fun i (key, title, badge, summary, _) ->
                Templates.CSharpTemplate.TranslatorTab()
                    .Key(key).Title(title).Badge(badge).Summary(summary)
                    .Selected(if i = 0 then "true" else "false")
                    .Select(fun e -> Translator.Select e.Event)
                    .Doc())
        let panels =
            csharpTranslations
            |> List.mapi (fun i (key, _, _, _, note) ->
                Templates.CSharpTemplate.TranslatorPanel()
                    .Key(key)
                    .PanelAttr(if i = 0 then Attr.Empty else Html.attr.hidden "")
                    .CSharp(Snippets.text ("csharp/translate/" + key + ".cs"))
                    .Js(Snippets.text ("csharp/translate/" + key + ".mjs"))
                    .Note(note)
                    .Doc())
        Content.BundleScope "csharp" (
            Templates.CSharpTemplate.Content()
                .OnAfterRender(fun () ->
                    SnippetCode.Init()
                    SnippetCode.InitTabs()
                )
                .TranslatorTabs(Doc.Concat tabs)
                .TranslatorPanels(Doc.Concat panels)
                .ConformancePass(string (WebSharperWebsite.Conformance.Summary "csharp").pass)
                .ConformanceTotal(string (WebSharperWebsite.Conformance.Summary "csharp").total)
                .ConformanceKnown(string (WebSharperWebsite.Conformance.Summary "csharp").known)
                .CSharpHero(Component.VsCode("./snippets/csharp-tasks/index.html", [
                    { Label = "Client.cs"; Lang = "csharp"; Code = Snippets.text "csharp/Client.cs" }
                    { Label = "index.html"; Lang = "html"; Code = Snippets.text "csharp/index.html" }
                ], Component.CSharpTerminal()))
                .CSharpRemoting(Component.CodeFiles([
                    { Label = "Remoting.cs"; Lang = "csharp"; Code = Snippets.text "csharp/Remoting.cs" }
                    { Label = "Client.cs"; Lang = "csharp"; Code = Snippets.text "csharp/ShopClient.cs" }
                    { Label = "Shared.cs"; Lang = "csharp"; Code = Snippets.text "csharp/Shared.cs" }
                    { Label = "Site.cs"; Lang = "csharp"; Code = Snippets.text "csharp/Site.cs" }
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