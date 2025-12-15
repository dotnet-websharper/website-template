namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom
open WebSharper.UI
open WebSharper.UI.Templating

module Templates =    
    type LayoutTemplate = Template<"Layout.html", ClientLoad.FromDocument, ServerLoad.WhenChanged>
    type HomeTemplate = Template<"Home.html">
    type FeaturesTemplate = Template<"Features.html">
    type DownloadTemplate = Template<"Download.html">
    type SupportTemplate = Template<"Support.html">
    type DslAiTemplate = Template<"DslAi.html">
    type CheckoutTemplate = Template<"Checkout.html">
    type ErrorTemplate = Template<"Error.html">
    type InvoiceTemplate = Template<"Invoice.html">
    type ManageSubscriptionTemplate = Template<"ManageSubscription.html">
    type SuccessTemplate = Template<"Success.html">
    type NotFoundTemplate = Template<"404.html">

[<JavaScript>]
module Utils = 

    open WebSharper.SweetAlert

    [<Literal>]
    let SupportPlansUrl = "/support#plans"

    let byId (id: string) = JS.Document.GetElementById id

    let queryAll (root: Element) (selector: string) : seq<HTMLElement> =
        let nodes = root.QuerySelectorAll(selector)
        seq {
            for i = 0 to int nodes.Length - 1 do
                yield nodes.Item i :?> HTMLElement
        }

    let _usd (n: float) : string =
        "$" + n.ToString("N0", System.Globalization.CultureInfo("en-US"))

    let eur (n: float) : string =
        "€" + n.ToString("N0", System.Globalization.CultureInfo("en-US"))

    let private swalDefaults (title: string) (msg: string) (icon: SweetAlertIcon) =

        SweetAlertOptions(
            Title = title,
            Text = msg,
            Icon = icon,
            ShowCloseButton = true,
            ButtonsStyling = false, 
            CustomClass = Union1Of2 (
                New [
                    "popup" => "rounded-xl shadow-2xl"
                    
                    "title" => "text-gray-900 dark:text-white"
                    
                    "htmlContainer" => "text-gray-600 dark:text-gray-400"
                    
                    "confirmButton" => "inline-flex items-center justify-center rounded-lg h-10 px-6 min-w-[6rem] text-sm font-semibold text-white dark:text-gray-950 bg-gray-950 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2transition-colors shadow-sm ml-2"
                    
                    "cancelButton" => "inline-flex items-center justify-center rounded-lg h-10 px-4 min-w-[5rem] text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 focus:outline-none transition-colors shadow-sm"
                    
                    "icon" => "scale-75" 
                ] |> As<SweetAlertCustomClass>
            )
        )

    let handleErrorFromResult (res: Result<_, string>) (func: string -> unit) = 
        match res with
        | Ok _ -> ()
        | Error msg -> 
            func msg

    let alertErrorFromResult (res: Result<_, string>) =
        handleErrorFromResult res (fun msg ->
            Swal.Fire(
                swalDefaults "Error!" msg SweetAlertIcon.Error
            ) |> ignore)

    let alertError (msg: string) =
        Swal.Fire(
            swalDefaults "Error!" msg SweetAlertIcon.Error
        ) |> ignore

    let alertWarning (msg: string) =
        Swal.Fire(
            swalDefaults "Warning!" msg SweetAlertIcon.Warning
        ) |> ignore