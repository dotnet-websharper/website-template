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
        let coords = Var.Create "Hover over the map..."

        IndexTemplate()
            .Map(
                div [
                    attr.style "width:100%;height:100%"
                    on.afterRender (fun el ->
                        let map = Leaflet.L.Map(el)
                        map.SetView((47.5000, 19.0500), 14)
                        map.AddLayer(
                            Leaflet.TileLayer(
                                Leaflet.TileLayer.OpenStreetMap.UrlTemplate,
                                Leaflet.TileLayer.Options(
                                    Attribution = Leaflet.TileLayer.OpenStreetMap.Attribution))
                        ) |> ignore
                        let marker = Leaflet.Marker((47.5071, 19.0457))
                        marker.BindPopup("Hungarian Parliament") |> ignore
                        map.AddLayer(marker) |> ignore
                        map.On_mousemove(fun _ ev ->
                            coords.Value <- "Position: " + ev.Latlng.ToString())
                        |> ignore)
                ] [])
            .Coordinates(coords.View)
            .Bind()
