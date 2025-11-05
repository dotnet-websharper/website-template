namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom
open WebSharper.UI
open WebSharper.UI.Templating

[<JavaScript>]
module Clipboard =

    [<Inline "navigator.clipboard.writeText($0)">]
    let clipboardWriteText (v: string) = X<Promise<unit>> 

    let private show (el: Element) = 
        if not (isNull el) then 
            el.ClassList.Remove("hidden")

    let private hide (el: Element) = 
        if not (isNull el) then 
            el.ClassList.Add("hidden")

    let private revertAfter (copyIcon: Element) (otherIcon: Element) (ms: int) =
        JS.SetTimeout(fun () -> 
            show copyIcon
            hide otherIcon
        ) ms |> ignore

    let private copyContentAsync (textToCopy: string) (copyIcon: Element) (okIcon: Element) (errIcon: Element) = async {
        try
            do! Promise.AsAsync <| clipboardWriteText textToCopy
            hide copyIcon
            show okIcon
            revertAfter copyIcon okIcon 1000
        with
        | _ ->
            hide copyIcon
            show errIcon
            revertAfter copyIcon errIcon 1000
    }

    let CopyFromClosest (e: Runtime.Server.TemplateEvent<_, _, _>) =
        let button = e.Target
        let btn =
            match e.Event.Target with
            | :? Element as el -> el
            | _ -> JS.Document.ActiveElement |> As<Element>

        let textElement = JS.Document.QuerySelector(".text-to-copy")
        let textToCopy = textElement.TextContent

        let copyIcon = button.QuerySelector(".copy")
        let successIcon = button.QuerySelector(".success")
        let errorIcon = button.QuerySelector(".failed")

        copyContentAsync textToCopy copyIcon successIcon errorIcon
        |> Async.StartImmediate 

