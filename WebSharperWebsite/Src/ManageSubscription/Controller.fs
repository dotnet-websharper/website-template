namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open Types
open State
open Views
open Api
open WebSharperWebsite

[<JavaScript>]
module Controller =
    open Utils

    let HandleRefresh() =
        let ui = collectUi ()
        setLoading ui true
        try                   
            state.seats <- GetSeats state.currentSubId                    
            ViewsSeats.refreshSeats state.seats

            state.invoices <- GetInvoices state.currentSubId
            ViewsInvoices.refreshInvoices state.invoices

            showToast ui "Refreshed"
        finally
            setLoading ui false

    let HandleBillingEdit() =
        let ui = collectUi ()
        match state.billing with
        | Some data -> populateBillingForm ui data
        | None -> ()
        setBillingMode ui "edit"

    let HandleBillingSave() =
        let ui = collectUi ()
        if isNull ui.billingForm then () else
        let formData = new FormData(ui.billingForm)
        let get name =
            if formData.Has(name) then
                match formData.Get(name) with
                | Union1Of2 (_: File)  -> ""
                | Union2Of2 (s: string) -> s
            else ""
        let data = {
            name = get "name"
            vatin = get "vatin"
            line1 = get "line1"
            city = get "city"
            postal_code = get "postal_code"
            country = get "country"
        }
        setLoading ui true
        try
            Api.SaveBilling data
            state.billing <- Some data
            renderBillingView data
            setBillingMode ui "view"
            showToast ui "Billing saved"
        finally
            setLoading ui false

    let HandleBillingCancel() =
        let ui = collectUi ()
        match state.billing with
        | Some data -> populateBillingForm ui data
        | None -> ()
        setBillingMode ui "view"

    // Verifies session
    let requireAuth () =
        promise {
            let! me = AuthClient.FetchMe()

            match me with
            | None ->
                return raise (System.Exception "unauthorized")
            | Some user ->
                return user
        }
