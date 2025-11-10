namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom

[<JavaScript>]
module Utils = 
    [<Inline "new URL($path, document.baseURI).toString()">]
    let toAbsoluteUrl (path: string) : string = X<string>

    let importDynamicIgnore (path: string) =
        JS.ImportDynamic (toAbsoluteUrl path) |> ignore

    let byId (id: string) = JS.Document.GetElementById id

    let queryAll (root: Element) (selector: string) : seq<HTMLElement> =
        let nodes = root.QuerySelectorAll(selector)
        seq {
            for i = 0 to int nodes.Length - 1 do
                yield nodes.Item i :?> HTMLElement
        }

    let queryAllDoc (selector: string) : seq<HTMLElement> =
        let nodes = JS.Document.QuerySelectorAll(selector)
        seq {
            for i = 0 to int nodes.Length - 1 do
                yield nodes.Item i :?> HTMLElement
        }
