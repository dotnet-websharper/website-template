namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open Types
open State

open WebSharperWebsite

[<JavaScript>]
module ViewsInvoices =
    let private invoicesModel =
        ListModel.Create (fun (i: InvoiceRecord) -> i.id) state.invoices

    let private invoiceRowV (key: string) (invoiceV: View<InvoiceRecord>) : Doc =
        let hrefV =
            invoiceV
            |> View.Map (fun inv ->
                "./invoice.html?id="
                + JS.EncodeURIComponent(inv.id)
                + "&sub="
                + JS.EncodeURIComponent(state.currentSubId))

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

    let private invoicesDoc =
        invoicesModel.View
        |> Doc.BindSeqCachedViewBy (fun i -> i.id) invoiceRowV

    let mountInvoices (ui: UiRefs) =
        if not (isNull ui.invoiceBody) then
            Doc.Run ui.invoiceBody invoicesDoc

    let refreshInvoices (newInvoices: InvoiceRecord[]) =
        invoicesModel.Set newInvoices

