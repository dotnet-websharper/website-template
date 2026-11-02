namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Html
open WebSharper.Sitelets

[<JavaScript>]
module Examples =
        
    type Tab = 
        | [<EndPoint "spreadsheet">] Spreadsheet 
        | [<EndPoint "maps">] Maps 
        | [<EndPoint "charts">] Charts 
        | [<EndPoint "forms">] Forms

    let ActiveTab : Var<Tab> = 
        if IsClient then
            let loc = JS.Document.Location

            // The page is published at /examples/ (examples/index.html) so the hash
            // reads as /examples/#/charts; send older /examples links there too.
            if not (loc.Pathname.EndsWith "/") then
                JS.Window.Location.Replace(loc.Pathname + "/" + loc.Hash)

            if loc.Hash = "" then
                JS.Document.Location.Hash <- "/charts"

            Router.Infer<Tab>()
            |> Router.InstallHash Tab.Charts
        else
            Var.Create Tab.Charts

    let private tabAttr targetTab =
        ActiveTab.View 
        |> View.Map (fun current -> current = targetTab)
        |> Attr.DynamicClassPred "active-link"

    // Tab Content Generators

    let renderSpreadsheet () = Templates.ExamplesTemplate.SpreadsheetExample().Doc()
    let renderMaps () = Templates.ExamplesTemplate.MapsExample().Doc()
    let renderChart () = Templates.ExamplesTemplate.ChartExample().Doc()
    let renderForms () = Templates.ExamplesTemplate.FormsExample().Doc()

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
        | Forms -> """let Render id = 
    let username = Var.Create ""
    let password = Var.Create ""

    IndexTemplate.LoginForm()
        .Username(username)
        .Password(password)
        .Login(fun e ->
            e.Event.PreventDefault()
            JS.Alert("Welcome, " + username.Value + "!")                
        )
        .Doc()
        |> Doc.RunById id
"""

    let getResultDoc = function
        | Charts -> renderChart()
        | Maps -> renderMaps()
        | Forms -> renderForms()
        | Spreadsheet -> renderSpreadsheet()        

    // Main Entry Point

    let ExamplesDoc(): Doc =
        let template = Templates.ExamplesTemplate.Content()

        let renderCode src =
            Utils.renderCode src (fun _ -> SnippetCode.Init())

        if IsClient then
            template
                .SelectSpreadsheet(fun _ -> ActiveTab.Value <- Spreadsheet)
                .SelectMaps(fun _ -> ActiveTab.Value <- Maps)
                .SelectCharts(fun _ -> ActiveTab.Value <- Charts)
                .SelectForms(fun _ -> ActiveTab.Value <- Forms)
                .SpreadsheetTabAttr(tabAttr Spreadsheet)
                .MapsTabAttr(tabAttr Maps)
                .ChartsTabAttr(tabAttr Charts)
                .FormsTabAttr(tabAttr Forms)
                .CodeContent(
                    ActiveTab.View.Doc(fun activeTab ->
                        getCodeSnippet activeTab |> renderCode
                    )
                )
                .ResultContent(
                    ActiveTab.View.Doc(fun activeTab ->
                        activeTab |> getResultDoc
                    )
                )
                .Doc()
        else
            template.Doc()
        