namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom
open Types
open State
open WebSharperWebsite.Utils

[<JavaScript>]
module Views =

    // DOM helpers

    let toggleHidden (el: Element) (hidden: bool) =
        if not (isNull el) then
            el.ClassList.Toggle("hidden", hidden) |> ignore

    let collectUi () : UiRefs =
        {
            content = byId "settingsContent"
            tabs = queryAllDoc ".settings-tab" |> As<Element seq> |> Array.ofSeq
            pages = queryAllDoc "[data-page]"    |> As<Element seq> |> Array.ofSeq
            toast = byId "toast"
            spinner = byId "spinner"
            subscriptionSelect = byId "subscriptionSelect"
            planName = byId "planName"
            seatsUsed = byId "seatsUsed"
            seatsTotal = byId "seatsTotal"
            seatProgress = byId "seatProgress"
            seatsBody = byId "seatsBody"
            bulkBox = byId "bulkBox" |> As
            bulkError = byId "bulkError"
            refresh = byId "refresh"
            invoiceBody = byId "invoiceBody"
            billingView = byId "billingView"
            billingEdit = byId "billingEdit"
            billingForm = byId "billingForm" |> As
            btnBillingEdit = byId "btnBillingEdit"
            btnBillingSave = byId "btnBillingSave"
            btnBillingCancel = byId "btnBillingCancel"
            saveBilling = byId "saveBilling"
        }

    let setLoading (ui: UiRefs) (on: bool) =
        toggleHidden ui.spinner (not on)

    let showToast (ui: UiRefs) (msg: string) =
        if not (isNull ui.toast) then
            ui.toast.TextContent <- if System.String.IsNullOrWhiteSpace msg then "Saved" else msg
            toggleHidden ui.toast false
            JS.SetTimeout (fun () -> toggleHidden ui.toast true) 1600 |> ignore

    // Navigation

    let showPage (ui: UiRefs) (pageKey: string) =
        for page in ui.pages do
            let active = page?dataset?page = pageKey
            toggleHidden page (not active)

        for tab in ui.tabs do
            let active = tab?dataset?nav = pageKey
            tab.ClassList.Toggle("bg-gray-100", active)       |> ignore
            tab.ClassList.Toggle("dark:bg-white/5", active)   |> ignore

    // Renderers

    let renderSubscriptionSelector (ui: UiRefs) =
        let sel = ui.subscriptionSelect
        if isNull sel then () else
        sel.InnerHTML <- ""
        for sub in state.subs do
            let o = JS.Document.CreateElement("option") |> As<HTMLOptionElement>
            o.Value <- sub.id
            o.TextContent <- sub.label
            sel.AppendChild(o) |> ignore

        let exists = state.subs |> Array.exists (fun s -> s.id = state.currentSubId)
        if not (System.String.IsNullOrEmpty state.currentSubId) && exists then
            sel?value <- state.currentSubId
        elif state.subs.Length > 0 then
            state.currentSubId <- state.subs.[0].id
            sel?value <- state.currentSubId

    let renderSummary (ui: UiRefs) =
        let subOpt = state.subs |> Array.tryFind (fun s -> s.id = state.currentSubId)

        let used =
            state.seats |> Array.filter (fun x -> x.status = "assigned") |> Array.length

        let total = subOpt |> Option.map (fun s -> s.totalSeats) |> Option.defaultValue 0

        ui.planName.TextContent <- subOpt |> Option.map (fun s -> s.plan) |> Option.defaultValue "-"
        ui.seatsUsed.TextContent <- string used
        ui.seatsTotal.TextContent <- string total

        let renewsAtEl = byId "renewsAt"
        let subStatusEl = byId "subStatus"

        renewsAtEl.TextContent <- subOpt |> Option.map (fun s -> s.renewsAt) |> Option.defaultValue "-"
        subStatusEl.TextContent <- subOpt |> Option.map (fun s -> s.status)  |> Option.defaultValue "-"

        let usedPercent =
            if total = 0 then 0
            else int (System.Math.Round(float used / float total * 100.0))

        if not (isNull ui.seatProgress) then
            ui.seatProgress?style?width <- string usedPercent + "%"

    let renderInvoices (ui: UiRefs) =
        if isNull ui.invoiceBody then () else
        ui.invoiceBody.InnerHTML <- ""
        for inv in state.invoices do
            let tr = JS.Document.CreateElement("tr")
            tr.InnerHTML <-
                $"""
                <td class="px-4 py-3">{inv.id}</td>
                <td class="px-4 py-3">{inv.date}</td>
                <td class="px-4 py-3">{State.formatMoney inv.amount inv.currency}</td>
                <td class="px-4 py-3 capitalize">{inv.status}</td>
                <td class="px-4 py-3 text-right">
                    <a class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20"
                       href="./invoice.html?id={JS.EncodeURIComponent(inv.id)}&sub={JS.EncodeURIComponent(state.currentSubId)}"
                       target="_blank" rel="noopener">
                        View
                    </a>
                </td>
                """
            ui.invoiceBody.AppendChild(tr) |> ignore

    // Billing display

    let setBillingMode (ui: UiRefs) (mode: string) =
        let editing = (mode = "edit")
        toggleHidden ui.billingView editing
        toggleHidden ui.billingEdit (not editing)
        toggleHidden ui.btnBillingEdit editing
        toggleHidden ui.btnBillingSave (not editing)
        toggleHidden ui.btnBillingCancel (not editing)

    let renderBillingView (data: BillingRecord) =
        let setText id v =
            let el = byId id
            if not (isNull el) then
                el.TextContent <- if System.String.IsNullOrWhiteSpace v then "—" else v
        setText "v_name" data.name
        setText "v_vatin" data.vatin
        setText "v_line1" data.line1
        setText "v_city" data.city
        setText "v_postal_code" data.postal_code
        setText "v_country" data.country

    let populateBillingForm (ui: UiRefs) (data: BillingRecord) =
        if isNull ui.billingForm then () else
        let setField (name: string) (value: string) =
            let el = ui.billingForm.QuerySelector($"""[name="{name}"]""") |> As<HTMLInputElement>
            if not (isNull el) then el.Value <- value
        setField "name" data.name
        setField "vatin" data.vatin
        setField "line1" data.line1
        setField "city" data.city
        setField "postal_code" data.postal_code
        setField "country" data.country
