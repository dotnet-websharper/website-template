namespace WebSharperWebsite.ManageSubscription

open WebSharperWebsite
open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client

[<JavaScript>]
module Invoice =

    open WebSharperWebsite.Checkout.Types

    type InvoiceRecord = {
        id: string
        date: string
        amount: int
        currency: string
        status: string
        subscription: string option
        billingAddress: BillingAddress
        company: CompanyInfo option
    }

    let private mockInvoice (id: string) (sub: string option) : InvoiceRecord =
        {
            id = id
            date = "2025-07-12"
            amount = 250000
            currency = "usd"
            status = "paid"
            subscription = sub
            billingAddress = {
                line1 = "Main St 1"
                city = "Budapest"
                postal_code = "1011"
                country = "HU"
            }
            company = Some {
                name = "ACME Inc."
                vatin = "EU123"
            }
        }

    let private loadInvoice (idOpt: string option) (_subOpt: string option) : Async<InvoiceRecord option> =
        async {
            let search = new URLSearchParams(JS.Window.Location.Search)
            let id = search.Get("id")
            let sub = search.Get("sub")
            let id = if isNull id || id = "" then "inv_mock" else id
            let sub = if isNull sub || sub = "" then None else Some sub

            // TODO later: replace with real API call
            return Some (mockInvoice id sub)
        }

    let private invoiceVar : Var<InvoiceRecord option> = Var.Create None

    let private money (cents: int) (ccy: string) =
        let n = float cents / 100.0
        let c = if String.IsNullOrWhiteSpace ccy then "USD" else ccy.ToUpper()
        n.ToString("C", Globalization.CultureInfo.InvariantCulture) + " " + c

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
            | _ -> "-"
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
                let billing = inv.billingAddress

                let address = 
                    [ billing.line1; billing.postal_code; billing.city; billing.country ]
                    |> List.filter (fun s -> not (String.IsNullOrWhiteSpace s))
                    |> String.concat ", "

                if String.IsNullOrWhiteSpace address then 
                    "-" 
                else 
                    address
            | None -> "-"
        )
        |> Doc.TextView

    let OnAfterRender () =
        async {
            let! invOpt = loadInvoice None None
            invoiceVar.Value <- invOpt
        }
        |> Async.StartImmediate
