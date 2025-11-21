namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript

open State
open ViewsBilling
open WebSharperWebsite

[<JavaScript>]
module Controller =
    open Utils

    // Refresh seats + invoices for the current subscription
    let HandleRefresh () =
        Views.setLoading true
        try
            let currentSubId = CurrentSubIdVar.Value
            if not (System.String.IsNullOrEmpty currentSubId) then
                let seats = Api.GetSeats currentSubId
                SeatsVar.Value <- seats
                ViewsSeats.RefreshSeats seats

                let invoices = Api.GetInvoices currentSubId
                InvoicesVar.Value <- invoices
                ViewsInvoices.RefreshInvoices invoices

                Views.showToast "Refreshed"
        finally
            Views.setLoading false

    // Enter billing edit mode, pre-filling form from state.billing
    let HandleBillingEdit () =
        ViewsBilling.SetBillingRecord BillingVar.Value
        ViewsBilling.SetBillingMode BillingMode.Editing

    // Save billing using BillingRecordVar
    let HandleBillingSave () =
        let data = ViewsBilling.CurrentBillingFromForm ()

        Views.setLoading true
        try
            Api.SaveBilling data
            BillingVar.Value <- Some data

            ViewsBilling.SetBillingMode BillingMode.Viewing
            Views.showToast "Billing saved"
        finally
            Views.setLoading false

    // Cancel billing edit and revert form to last saved state
    let HandleBillingCancel () =
        ViewsBilling.SetBillingRecord BillingVar.Value
        ViewsBilling.SetBillingMode BillingMode.Viewing

    // Verifies session and stores user in StateVar
    let requireAuth () =
        promise {
            let! me = AuthClient.FetchMe()

            match me with
            | None ->
                return raise (System.Exception "unauthorized")
            | Some user ->
                UserVar.Value <- Some user
                return user
        }
