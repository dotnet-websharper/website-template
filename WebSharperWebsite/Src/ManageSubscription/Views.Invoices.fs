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

    let private invoicesModel =
        ListModel.Create (fun (i: InvoiceRecord) -> i.id) InvoicesVar.Value

    let RefreshInvoices (newInvoices: InvoiceRecord[]) =
        invoicesModel.Set newInvoices

    let private invoiceRowV (key: string) (invoiceV: View<InvoiceRecord>) : Doc =
        let hrefV =
            invoiceV
            |> View.Map (fun inv ->
                "./invoice?id="
                + JS.EncodeURIComponent inv.id
                + "&sub="
                + JS.EncodeURIComponent CurrentSubIdVar.Value
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
        invoicesModel.View
        |> Doc.BindSeqCachedViewBy (fun i -> i.id) invoiceRowV

    let InvoicesBody : Doc =
        invoicesDoc
