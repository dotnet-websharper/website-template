namespace chart

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Templating
open WebSharper.Plotly

[<JavaScript>]
module Client =
    type IndexTemplate = Template<"wwwroot/index.html", ClientLoad.FromDocument>

    [<SPAEntryPoint>]
    let Main () =
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

        IndexTemplate()
            .DrawChart(fun (el: Dom.Element) ->
                Plotly.NewPlot(As<HTMLElement> el, [| barTrace :> Trace |], layout) |> ignore
            )
            .Bind()
