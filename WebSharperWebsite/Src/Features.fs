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

    let renderBindings () = Templates.FeaturesTemplate.BindingsExample().Doc()
    let renderMaps () = Templates.FeaturesTemplate.MapsExample().Doc()
    let renderChart () = Templates.FeaturesTemplate.ChartExample().Doc()
    let renderRTC () = Templates.FeaturesTemplate.RTCExample().Doc()
    let renderForms () = Templates.FeaturesTemplate.FormsExample().Doc()

    let getCodeSnippet = function
        | Bindings -> """let name = Var.Create "World"
Templates.FeaturesTemplate.BindingsExample()
    .Name(name)  
    .Doc()
"""
        | Maps -> """open WebSharper.UI.Html
open WebSharper.Leaflet
        
let Main () =
    let coordinates = div [] [] :?> Elt
    div [] [
        div [
            attr.style "height: 600px;"
            on.afterRender (fun div ->
                let map = Leaflet.L.Map(div)
                map.SetView((47.49883, 19.0582), 14)
                map.AddLayer(
                    Leaflet.TileLayer(
                        Leaflet.TileLayer.OpenStreetMap.UrlTemplate,
                        Leaflet.TileLayer.Options(
                            Attribution = Leaflet.TileLayer.OpenStreetMap.Attribution)))
                map.AddLayer(
                    let m = Leaflet.Marker((47.4952, 19.07114))
                    m.BindPopup("IntelliFactory")
                    m)
                map.On_mousemove(fun map ev ->
                    coordinates.Text <- "Position: " + ev.Latlng.ToString())
                map.On_mouseout(fun map ev ->
                    coordinates.Text <- "")
            )
        ] []
        coordinates
    ]
    |> Doc.RunById "main"
"""
        | Charts -> """open WebSharper.UI.Html
open WebSharper.Plotly

let RenderChart id =
    // ... Chart Configuration ...
    let layout = Layout()
    layout.Title <- LayoutTitle(Text = "Annual Revenue")

    div [
        attr.id id
        attr.style "height: 500px; width: 100%;" 
        on.afterRender (fun _ -> 
            Plotly.NewPlot(id, [| barTrace :> Trace |], layout) |> ignore
        )
    ] []
"""
        | RTC -> """type Msg = { User: string; Text: string }

let Chat = 
    let socket = WebSocket.Client "/chat"
    socket.Post { User = "Me"; Text = "Hi" }
"""
        | Forms -> """Form.Return (fun u p -> {User=u; Pass=p})
<*> (Form.Yield "" |> Validation.IsNotEmpty "User")
<*> (Form.Yield "" |> Validation.IsNotEmpty "Pass")
|> Form.Render
"""

    let getResultDoc = function
        | Bindings -> renderBindings()
        | Maps -> renderMaps()
        | Charts -> renderChart()
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

    let renderFSharpCode src =
        pre [attr.``class`` "line-numbers language-fsharp w-full rounded-xl !overflow-auto custom-scrollbar max-h-96 text-xs m-0"] [
            code [
                attr.``class`` ("language-fsharp pt-[1px]")
                on.afterRender (fun _ -> SnippetCode.Init())
            ] [text src]
        ]

    // Main Entry Point
    
    let FeaturesDoc(): Doc = 
        if IsClient then
            Templates.FeaturesTemplate.Content()                
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
                    ActiveTab.View.Doc(fun activeTab ->
                        let src = getCodeSnippet activeTab
                        renderFSharpCode src
                    )
                )
                .ResultContent(
                    ActiveTab.View.Doc(fun activeTab ->
                        activeTab 
                        |> getResultDoc
                    )
                )
                
                .WarpFile(renderFSharpCode warpSrc)
                .EndPointFile(renderFSharpCode endPointSrc)
                .UiFile(renderFSharpCode uiSrc)
                
                .Doc()
        else
            Templates.FeaturesTemplate.Content()
                .WarpFile(renderFSharpCode warpSrc)
                .EndPointFile(renderFSharpCode endPointSrc)
                .UiFile(renderFSharpCode uiSrc)
                .Doc()