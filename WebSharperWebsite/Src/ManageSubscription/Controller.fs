namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript

open Types
open State
open ViewsBilling
open Views
open WebSharperWebsite

[<JavaScript>]
module Controller =

    // Refresh seats + invoices for the current subscription
    let HandleRefresh () =
        setLoading true
        try
            // Seats
            state.seats <- Api.GetSeats state.currentSubId
            ViewsSeats.RefreshSeats state.seats

            // Invoices
            state.invoices <- Api.GetInvoices state.currentSubId
            ViewsInvoices.RefreshInvoices state.invoices

            showToast "Refreshed"
        finally
            setLoading false

    // Enter billing edit mode, pre-filling form from state.billing
    let HandleBillingEdit () =
        match state.billing with
        | Some data ->
            // Push current billing into both view + edit Vars
            SetBillingRecord (Some data)
        | None ->
            // No saved billing yet, clear the form
            SetBillingRecord None

        SetBillingMode BillingMode.Editing

    // Save billing using Vars
    let HandleBillingSave () =
        // All billing fields come from the reactive Vars in Views
        let data = CurrentBillingFromForm ()

        setLoading true
        try
            Api.SaveBilling data
            state.billing <- Some data

            // Update view + form from saved data
            SetBillingRecord (Some data)
            SetBillingMode BillingMode.Viewing
            showToast "Billing saved"
        finally
            setLoading false

    // Cancel billing edit and revert form to last saved state
    let HandleBillingCancel () =
        match state.billing with
        | Some data ->
            SetBillingRecord (Some data)
        | None ->
            SetBillingRecord None

        SetBillingMode BillingMode.Viewing

    // Verifies session and returns the user, or throws on unauthorized
    let requireAuth () =
        promise {
            let! me = AuthClient.FetchMe()

            match me with
            | None ->
                return raise (System.Exception "unauthorized")
            | Some user ->
                // keep user in global state, same as before
                state.user <- user
                return user
        }
