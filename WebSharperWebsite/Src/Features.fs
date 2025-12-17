namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Html
open WebSharper.Sitelets

[<JavaScript>]
module Features =
        
    type Tab = 
        | [<EndPoint "bindings">] Bindings 
        | [<EndPoint "maps">] Maps 
        | [<EndPoint "charts">] Charts 
        | [<EndPoint "rtc">] RTC 
        | [<EndPoint "forms">] Forms

    let ActiveTab : Var<Tab> = 
        if IsClient then
            if JS.Document.Location.Hash = "" then
                JS.Document.Location.Hash <- "/bindings"

            Router.Infer<Tab>()
            |> Router.InstallHash Tab.Bindings
        else
            Var.Create Tab.Bindings

    let private tabAttr targetTab =
        ActiveTab.View 
        |> View.Map (fun current -> current = targetTab)
        |> fun isActive -> 
            Attr.Concat [
                Attr.DynamicClassPred "bg-gray-200" isActive
                Attr.DynamicClassPred "dark:bg-white/5" isActive
            ]

    // Tab Content Generators

    let renderBindings () =
        let name = Var.Create "World"
        Templates.FeaturesTemplate.BindingsExample()
            .Name(name)
            .Doc()

    let renderMaps () = Templates.FeaturesTemplate.MapsExample().Doc()
    let renderCharts () = Templates.FeaturesTemplate.ChartsExample().Doc()
    let renderRTC () = Templates.FeaturesTemplate.RTCExample().Doc()
    let renderForms () = Templates.FeaturesTemplate.FormsExample().Doc()

    let getCodeSnippet = function
        | Bindings -> "let name = Var.Create \"World\"\nTemplates.FeaturesTemplate.BindingsExample()\n  .Name(name)\n  .Doc()"
        | Maps -> "open WebSharper.Leaflet\n\nlet Map () =\n  Leaflet.Map.Create(\"map\", 51.5, -0.09)\n  |> Leaflet.Map.SetZoom 13"
        | Charts -> "open WebSharper.Charting\n\nChart.Bar [ (\"A\", 10); (\"B\", 20) ]\n|> Chart.WithTitle \"Sales\"\n|> Renderers.ChartJs.Render"
        | RTC -> "type Msg = { User: string; Text: string }\n\nlet Chat = \n  let socket = WebSocket.Client \"/chat\"\n  socket.Post { User = \"Me\"; Text = \"Hi\" }"
        | Forms -> "Form.Return (fun u p -> {User=u; Pass=p})\n<*> (Form.Yield \"\" |> Validation.IsNotEmpty \"User\")\n<*> (Form.Yield \"\" |> Validation.IsNotEmpty \"Pass\")\n|> Form.Render"

    let getResultDoc = function
        | Bindings -> renderBindings()
        | Maps -> renderMaps()
        | Charts -> renderCharts()
        | RTC -> renderRTC()
        | Forms -> renderForms()

    let highlight () =
        let prism = JS.ImportDefault "prismjs"
        prism?highlightAll()

    // SCG Data

    let warpSrc = """template Main "index.html"

endpoint Home "/" return Main
"""

    let endPointSrc = """namespace MyApplication

open WebSharper
open WebSharper.Sitelets

type EndPoint =
    | [<EndPoint "/">] Home
"""

    let uiSrc = """namespace MyApplication

open WebSharper
open WebSharper.UI.Templating

[<JavaScript>]
module UI =
    // Type provider generates this from index.html
    type MyTemplate = 
        Template<"index.html", clientLoad=ClientLoad.Inline>

    let Main =
        MyTemplate()
            .Title("Welcome")
            .Body("Hello World")
            .Doc()

    // Additional boiler-plate
    let ExtraHelper () = 
        console.log("Generated")
"""

    let renderStaticCode language src =
        pre [attr.``class`` "line-numbers w-full rounded-xl !overflow-auto custom-scrollbar max-h-100 text-xs m-0"] [
            code [
                attr.``class`` ("language-" + language + " !text-xs")
                on.afterRender (fun _ -> highlight())
            ] [text src]
        ]

    // Main Entry Point
    
    let FeaturesDoc(): Doc = 
        if IsClient then
            Templates.FeaturesTemplate.Content()
                .Init(fun () -> SnippetCode.Init())
                
                // Tabs
                .SelectBindings(fun _ -> ActiveTab.Value <- Bindings)
                .SelectMaps(fun _ -> ActiveTab.Value <- Maps)
                .SelectCharts(fun _ -> ActiveTab.Value <- Charts)
                .SelectRTC(fun _ -> ActiveTab.Value <- RTC)
                .SelectForms(fun _ -> ActiveTab.Value <- Forms)

                .BindingsTabAttr(tabAttr Bindings)
                .MapsTabAttr(tabAttr Maps)
                .ChartsTabAttr(tabAttr Charts)
                .RTCTabAttr(tabAttr RTC)
                .FormsTabAttr(tabAttr Forms)

                .CodeContent(
                    ActiveTab.View 
                    |> View.Map (fun t -> 
                        let src = getCodeSnippet t
                        pre [attr.``class``"line-numbers language-fsharp w-full rounded-xl overflow-auto custom-scrollbar max-h-96 text-xs"] [
                            code [
                                attr.``class`` "language-fsharp !text-xs"
                                on.afterRender (fun _ -> highlight())
                            ] [text src]
                        ]
                    )
                    |> Doc.EmbedView
                )
                .ResultContent(
                    ActiveTab.View 
                    |> View.Map getResultDoc 
                    |> Doc.EmbedView
                )
                
                .WarpFile(renderStaticCode "fsharp" warpSrc)
                .EndPointFile(renderStaticCode "fsharp" endPointSrc)
                .UiFile(renderStaticCode "fsharp" uiSrc)
                
                .Doc()
        else
            Templates.FeaturesTemplate.Content()
                .WarpFile(renderStaticCode "fsharp" warpSrc)
                .EndPointFile(renderStaticCode "fsharp" endPointSrc)
                .UiFile(renderStaticCode "fsharp" uiSrc)
                .Doc()