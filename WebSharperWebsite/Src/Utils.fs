namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript

[<JavaScript>]
module Utils = 
    [<Inline "new URL($path, document.baseURI).toString()">]
    let toAbsoluteUrl (path: string) : string = X<string>

    let importDynamicIgnore (path: string) =
        JS.ImportDynamic (toAbsoluteUrl path) |> ignore

    let byId (id: string) = JS.Document.GetElementById id
