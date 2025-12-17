namespace chart

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open WebSharper.Plotly

[<JavaScript>]
module Client =

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

        div [attr.style "display: flex; justify-content: center; align-items: center; background-color: #f1f5f9; font-family: sans-serif;"] [
            
            div [
                attr.style "background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); width: 100%; max-width: 800px; height: 500px;"
                attr.id "plotly-chart"
                
                on.afterRender (fun el -> 
                    Plotly.NewPlot("plotly-chart", [| barTrace :> Trace |], layout) 
                    |> ignore
                )
            ] [] 
        ]
        |> Doc.RunById "main"