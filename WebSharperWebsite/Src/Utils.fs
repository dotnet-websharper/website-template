namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom
open WebSharper.UI
open WebSharper.UI.Templating

module Templates =   
    type LayoutTemplate = Template<"Layout.html", ClientLoad.FromDocument, ServerLoad.WhenChanged>
    type HomeTemplate = Template<"Home.html">
    type DownloadTemplate = Template<"Download.html">
    type SupportTemplate = Template<"Support.html">
    type DslAiTemplate = Template<"DslAi.html">
    type CheckoutTemplate = Template<"Checkout.html">
    type ErrorTemplate = Template<"Error.html">
    type InvoiceTemplate = Template<"Invoice.html">
    type ManageSubscriptionTemplate = Template<"ManageSubscription.html">
    type SuccessTemplate = Template<"Success.html">

[<JavaScript>]
module Utils = 

    open WebSharper.SweetAlert

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

    let usd (n: float) : string =
        "$" + n.ToString("N0", System.Globalization.CultureInfo("en-US"))       

    let alertError (res: Result<_, string>) =
        match res with
        | Ok _ -> ()
        | Error msg -> 
            Swal.Fire(
                SweetAlertOptions(
                    Title = "Error!",
                    Text = msg,
                    Icon = SweetAlertIcon.Error
                )
            ) |> ignore

    let alertWarning (msg: string) =
        Swal.Fire(
            SweetAlertOptions(
                Title = "Warning!",
                Text = msg,
                Icon = SweetAlertIcon.Warning
            )
        ) |> ignore