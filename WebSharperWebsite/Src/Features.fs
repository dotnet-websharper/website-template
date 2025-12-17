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
        | Maps -> """open WebSharper.Leaflet
        
let Map () =
    Leaflet.Map.Create("map", 51.5, -0.09)
    |> Leaflet.Map.SetZoom 13
"""
        | Charts -> """open WebSharper.UI.Html
open WebSharper.Plotly

let RenderChart id =
    let barTrace = BarOptions()
    barTrace.X <- [| "Q1"; "Q2"; "Q3"; "Q4" |]
    barTrace.Y <- [| 45000; 52000; 28000; 64000 |]
    barTrace.Name <- "Revenue"
    barTrace.Marker <- BarMarker(
        Color = "rgba(79, 70, 229, 1)" 
    )

    let layout = Layout()
    layout.Title <- LayoutTitle(Text = "Annual Revenue", Font = Font(Size = 24, Family = "Segoe UI, sans-serif"))
    layout.Showlegend <- false
    layout.Autosize <- true
    layout.Margin <- LayoutMargin(L = 50, R = 50, B = 50, T = 80)
    layout.Paper_bgcolor <- "rgba(0,0,0,0)" 
    layout.Plot_bgcolor <- "rgba(0,0,0,0)"
    layout.Yaxis <- LayoutYAxis(Gridcolor = "#e2e8f0", Zeroline = false)
    layout.Xaxis <- LayoutXAxis(Gridcolor = "rgba(0,0,0,0)")

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

    let renderStaticCode language src =
        pre [attr.``class`` "line-numbers w-full rounded-xl !overflow-auto custom-scrollbar max-h-96 text-xs m-0"] [
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
                        renderStaticCode "fsharp" src
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