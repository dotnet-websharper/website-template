namespace WebSharperWebsite.ManageSubscription

open WebSharperWebsite
open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client

open Types
open Api

[<JavaScript>]
module Invoice =

    let private invoiceVar : Var<InvoiceRecord option> = Var.Create None

    // -------------------------
    // Helpers
    // -------------------------

    let private money (cents: int) (ccy: string) =
        let n = float cents / 100.0
        let c =
            if String.IsNullOrWhiteSpace ccy then "USD"
            else ccy.ToUpper()
        n.ToString("C", Globalization.CultureInfo.InvariantCulture) + " " + c

    let private getInvoiceIdFromQuery () : string option =
        let search = new URLSearchParams(JS.Window.Location.Search)
        let id = search.Get("id")
        if isNull id || id = "" then None else Some id

    // Look up one invoice by id across all subscriptions via async API
    let private loadInvoiceFromApi () : Async<InvoiceRecord option> =
        async {
            match getInvoiceIdFromQuery () with
            | None ->
                return None
            | Some id ->
                // load subs first
                let! subs = ListSubscriptions()

                // recursively walk subs, calling GetInvoices async
                let rec loop i =
                    async {
                        if i >= subs.Length then
                            return None
                        else
                            let subId = subs.[i].id
                            let! invoices = GetInvoices subId

                            match invoices |> Array.tryFind (fun inv -> inv.id = id) with
                            | Some inv ->
                                // enrich with subscription id if missing
                                let inv' =
                                    match inv.subscription with
                                    | Some _ -> inv
                                    | None   -> { inv with subscription = Some subId }
                                return Some inv'
                            | None ->
                                return! loop (i + 1)
                    }

                return! loop 0
        }

    let InvId : Doc =
        invoiceVar.View
        |> View.Map (function
            | Some inv -> inv.id
            | None     -> "-"
        )
        |> Doc.TextView

    let InvDate : Doc =
        invoiceVar.View
        |> View.Map (function
            | Some inv -> inv.date
            | None     -> "-"
        )
        |> Doc.TextView

    let InvStatus : Doc =
        invoiceVar.View
        |> View.Map (function
            | Some inv -> inv.status
            | None     -> "-"
        )
        |> Doc.TextView

    let InvAmount : Doc =
        invoiceVar.View
        |> View.Map (function
            | Some inv -> money inv.amount inv.currency
            | None     -> "-"
        )
        |> Doc.TextView

    let InvSub : Doc =
        invoiceVar.View
        |> View.Map (function
            | Some inv ->
                inv.subscription
                |> Option.filter (fun s -> not (String.IsNullOrWhiteSpace s))
                |> Option.defaultValue "-"
            | None -> "-"
        )
        |> Doc.TextView

    let BillToName : Doc =
        invoiceVar.View
        |> View.Map (function
            | Some inv ->
                match inv.company with
                | Some c when not (String.IsNullOrWhiteSpace c.name) -> c.name
                | _ -> "-"
            | None -> "-"
        )
        |> Doc.TextView

    let BillToVat : Doc =
        invoiceVar.View
        |> View.Map (function
            | Some inv ->
                match inv.company with
                | Some c when not (String.IsNullOrWhiteSpace c.vatin) ->
                    "VAT: " + c.vatin
                | _ -> ""
            | None -> ""
        )
        |> Doc.TextView

    let BillToAddr : Doc =
        invoiceVar.View
        |> View.Map (function
            | Some inv ->
                match inv.billingAddress with
                | Some billing ->
                    [ billing.line1
                      billing.postal_code
                      billing.city
                      billing.country ]
                    |> List.filter (fun s -> not (String.IsNullOrWhiteSpace s))
                    |> String.concat ", "
                | None -> "-"
            | None -> "-"
        )
        |> Doc.TextView

    // -------------------------
    // Page init
    // -------------------------

    let OnAfterRender () =
        async {
            let! invOpt = loadInvoiceFromApi ()
            invoiceVar.Value <- invOpt
        }
        |> Async.StartImmediate
