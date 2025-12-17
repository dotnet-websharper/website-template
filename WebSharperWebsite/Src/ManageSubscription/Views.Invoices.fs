namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client

open Types
open State

open WebSharperWebsite

[<JavaScript>]
module ViewsInvoices =

    let Refresh() =
        async {
            let! invoices = Api.GetInvoices()

            let sortedInvoices =
                invoices
                |> Array.sortBy (fun i -> i.date)

            InvoicesVar.Value <- sortedInvoices
        }

    let private invoiceRowV (key: string) (invoiceV: View<InvoiceRecord>) : Doc =
        let hrefV =
            invoiceV
            |> View.Map (fun inv ->
                "./invoice?id="
                + JS.EncodeURIComponent inv.id
            )

        Templates.ManageSubscriptionTemplate.InvoiceRow()
            .InvoiceId(invoiceV |> View.Map (fun i -> i.id))
            .Date(invoiceV |> View.Map (fun i -> i.date))
            .Amount(
                invoiceV
                |> View.Map (fun i -> State.formatMoney i.amount i.currency)
            )
            .Status(invoiceV |> View.Map (fun i -> i.status))
            .Href(hrefV)
            .Doc()

    let private invoicesDoc : Doc =
        let getInvoiceKey (i: InvoiceRecord) = i.id

        InvoicesVar.View.DocSeqCached(getInvoiceKey, invoiceRowV) 

    let InvoicesBody : Doc =
        invoicesDoc