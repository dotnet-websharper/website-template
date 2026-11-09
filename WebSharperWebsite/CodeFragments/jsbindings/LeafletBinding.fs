// WebSharper.Leaflet — a small excerpt from the binding definition (WIG).
// Every `Class "L.X"` maps to a JavaScript constructor; members map to methods
// and properties, and their types are checked at compile time.
namespace WebSharper.Leaflet

module Definition =
    open WebSharper
    open WebSharper.InterfaceGenerator

    let TileLayerT = Class "L.TileLayer"
    let MapT = Class "L.Map"
    let MarkerT = Class "L.Marker"
    let LatLngT = Class "L.LatLng"
    let LatLngOrCoords = LatLngT + T<float * float>

    let LatLng =
        LatLngT
        |+> Instance [
            "lat" =? T<float>
            "lng" =? T<float>
        ]

    let TileLayer =
        TileLayerT
        |+> Static [
            Constructor (T<string>?urlTemplate * !?TileLayerOptions)
        ]

    let Marker =
        MarkerT
        |+> Static [
            Constructor (LatLngOrCoords * !?MarkerOptions)
        ]
        |+> Instance [
            "bindPopup" => T<string> ^-> T<unit>
        ]

    let Map =
        MapT
        |+> Static [
            Constructor ((T<Element> + T<string>)?id * !?MapOptions)
        ]
        |+> Instance [
            "setView" => LatLngOrCoords?center * !?T<int>?zoom ^-> T<unit>
            "addLayer" => ILayer ^-> T<unit>
        ]
        |> WithEvents [
            "mousemove", MouseEvent, "Fired while the mouse moves over the map."
        ]
