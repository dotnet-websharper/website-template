namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open Types
open State

[<JavaScript>]
module ViewsInvoices =
    let private invoiceRowV (key: string) (invV: View<InvoiceRecord>) : Doc =
        let hrefV =
            invV
            |> View.Map (fun inv ->
                "./invoice.html?id="
                + JS.EncodeURIComponent(inv.id)
                + "&sub="
                + JS.EncodeURIComponent(state.currentSubId))

        tr [] [
            td [ attr.``class`` "px-4 py-3" ] [
                invV |> View.Map (fun i -> i.id) |> Doc.TextView
            ]
            td [ attr.``class`` "px-4 py-3" ] [
                invV |> View.Map (fun i -> i.date) |> Doc.TextView
            ]
            td [ attr.``class`` "px-4 py-3" ] [
                invV |> View.Map (fun i -> State.formatMoney i.amount i.currency) |> Doc.TextView
            ]
            td [ attr.``class`` "px-4 py-3 capitalize" ] [
                invV |> View.Map (fun i -> i.status) |> Doc.TextView
            ]
            td [ attr.``class`` "px-4 py-3 text-right" ] [
                a [
                    attr.``class`` "rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20"
                    Attr.Dynamic "href" hrefV
                    attr.target "_blank"
                    Attr.Create "rel" "noopener"
                ] [ text "View" ]
            ]
        ]

    let private invoicesModel =
        ListModel.Create (fun (i: InvoiceRecord) -> i.id) state.invoices

    let private invoicesDoc =
        invoicesModel.View
        |> Doc.BindSeqCachedViewBy (fun i -> i.id) invoiceRowV

    let mountInvoices (ui: UiRefs) =
        if not (isNull ui.invoiceBody) then
            Doc.Run ui.invoiceBody invoicesDoc

    let refreshInvoices (newInvoices: InvoiceRecord[]) =
        invoicesModel.Set newInvoices

