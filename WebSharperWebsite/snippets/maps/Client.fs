namespace maps

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open WebSharper.UI.Templating
open WebSharper.Leaflet

[<JavaScript>]
module Client =
    type IndexTemplate = Template<"wwwroot/index.html", ClientLoad.FromDocument>

    [<SPAEntryPoint>]
    let Main () =
        let coordinatesText = Var.Create "Hover over map..."

        IndexTemplate.Main()
            // .Map expects a Doc, so we create a div with an afterRender hook
            .Map(
                div [
                    attr.style "width: 100%; height: 100%;"
                    on.afterRender (fun el ->
                        let map = Leaflet.L.Map(el)
                        map.SetView((47.49883, 19.0582), 14)

                        map.AddLayer(
                            Leaflet.TileLayer(
                                Leaflet.TileLayer.OpenStreetMap.UrlTemplate,
                                Leaflet.TileLayer.Options(Attribution = Leaflet.TileLayer.OpenStreetMap.Attribution)
                            )
                        ) |> ignore

                        let m = Leaflet.Marker((47.4952, 19.07114))
                        m.BindPopup("IntelliFactory") |> ignore
                        map.AddLayer(m) |> ignore

                        map.On_mousemove(fun map ev ->
                            coordinatesText.Value <- "Position: " + ev.Latlng.ToString()
                        ) |> ignore

                        map.On_mouseout(fun map ev ->
                            coordinatesText.Value <- "Hover over map..."
                        ) |> ignore
                    )
                ] []
            )
            .Coordinates(coordinatesText.View)
            .Doc()
        |> Doc.RunById "main"