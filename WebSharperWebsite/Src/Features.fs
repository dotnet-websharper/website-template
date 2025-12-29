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
        | [<EndPoint "spreadsheet">] Spreadsheet 
        | [<EndPoint "maps">] Maps 
        | [<EndPoint "charts">] Charts 
        | [<EndPoint "rtc">] RTC 
        | [<EndPoint "forms">] Forms

    let ActiveTab : Var<Tab> = 
        if IsClient then
            if JS.Document.Location.Hash = "" then
                JS.Document.Location.Hash <- "/charts"

            Router.Infer<Tab>()
            |> Router.InstallHash Tab.Charts
        else
            Var.Create Tab.Charts

    let private tabAttr targetTab =
        ActiveTab.View 
        |> View.Map (fun current -> current = targetTab)
        |> fun isActive -> 
            Attr.Concat [
                Attr.DynamicClassPred "bg-gray-200" isActive
                Attr.DynamicClassPred "dark:bg-white/5" isActive
            ]

    // Tab Content Generators

    let renderSpreadsheet () = Templates.FeaturesTemplate.SpreadsheetExample().Doc()
    let renderMaps () = Templates.FeaturesTemplate.MapsExample().Doc()
    let renderChart () = Templates.FeaturesTemplate.ChartExample().Doc()
    let renderRTC () = Templates.FeaturesTemplate.RTCExample().Doc()
    let renderForms () = Templates.FeaturesTemplate.FormsExample().Doc()

    let getCodeSnippet = function
        | Spreadsheet -> """open WebSharper.SlickGrid

let SetupGrid () =
    let columns = [|
        Column(id = "title", field = "title", Name = "Title", Sortable = true, Width = 100)
        Column(id = "percentComplete", field = "percentComplete", Name = "% Complete", Formatter = Formatters.PercentCompleteBar, Width = 120)
    |]

    let options = GridOption(
        EnableCellNavigation = true,
        EnableColumnReorder = false,
        RowHeight = 35,
        ForceFitColumns = true
    )

    let data = 
        [| for i in 0 .. 100 do
            yield New [
                "id" => i
                "title" => "Task " + string i
                "percentComplete" => Math.Round(Math.Random() * 100.0)
            ]
        |]

    Styles.Grid()
    Styles.AlpineTheme()

    SlickGrid("#myGrid", data, columns, options)
"""
        | Maps -> """open WebSharper.UI.Html
open WebSharper.Leaflet
        
let Main () =
    let coordinates = div [] [] :?> Elt
    div [] [
        div [
            attr.style "height: 600px;"
            on.afterRender (fun div ->
                let map = Leaflet.L.Map(el)
                map.SetView((47.5000, 19.0500), 14)

                map.AddLayer(
                    Leaflet.TileLayer(
                        Leaflet.TileLayer.OpenStreetMap.UrlTemplate,
                        Leaflet.TileLayer.Options(Attribution = Leaflet.TileLayer.OpenStreetMap.Attribution)
                    )
                ) |> ignore

                let m = Leaflet.Marker((47.50712, 19.04567)) 
                        
                m.BindPopup("Hungarian Parliament") |> ignore 
                map.AddLayer(m) |> ignore

                map.On_mousemove(fun map ev ->
                    coordinatesText.Value <- "Position: " + ev.Latlng.ToString()
                ) |> ignore

                map.On_mouseout(fun map ev ->
                    coordinatesText.Value <- "Hover over map..."
                ) |> ignore
            )
        ] []
        coordinates
    ]
    |> Doc.RunById "main"
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
        | Charts -> renderChart()
        | Maps -> renderMaps()
        | Forms -> renderForms()
        | RTC -> renderRTC()
        | Spreadsheet -> renderSpreadsheet()        

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
                .SelectSpreadsheet(fun _ -> ActiveTab.Value <- Spreadsheet)
                .SelectMaps(fun _ -> ActiveTab.Value <- Maps)
                .SelectCharts(fun _ -> ActiveTab.Value <- Charts)
                .SelectRTC(fun _ -> ActiveTab.Value <- RTC)
                .SelectForms(fun _ -> ActiveTab.Value <- Forms)

                .SpreadsheetTabAttr(tabAttr Spreadsheet)
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