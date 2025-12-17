namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript

open State
open Api
open Views
open ViewsBilling
open ViewsInvoices
open WebSharperWebsite

[<JavaScript>]
module Controller =

    // Refresh seats + invoices for the current subscription (async)
    let HandleRefresh () =
        async {
            Views.setLoading true
            try
                do! 
                    Async.Parallel [|
                        ViewsSeats.RefreshSubsAndSeats()
                        ViewsInvoices.Refresh()
                    |]
                    |> Async.Ignore

                Views.showToast "Refreshed"
            finally
                Views.setLoading false
        }
        |> Async.StartImmediate

    // Enter billing edit mode, pre-filling form from state.billing
    let HandleBillingEdit () =
        ViewsBilling.SetBillingRecord BillingVar.Value
        ViewsBilling.SetBillingMode BillingMode.Editing

    // Save billing using BillingRecordVar (async)
    let HandleBillingSave () =
        let data = ViewsBilling.CurrentBillingFromForm ()

        async {
            Views.setLoading true
            try
                let! ok = Api.SaveBilling data
                if ok then
                    BillingVar.Value <- Some data

                    ViewsBilling.SetBillingMode BillingMode.Viewing
                    Views.showToast "Billing saved"
            finally
                Views.setLoading false
        }
        |> Async.StartImmediate

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
