namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open Types
open State
open Views
open Api
open WebSharperWebsite.Utils

[<JavaScript>]
module Controller =

    // dynamic imports for auth/error utils 
    [<Inline>]
    let importAuth () = JS.ImportDynamic (toAbsoluteUrl "Js/ws-auth.js")

    [<Inline>]
    let importErr ()  = JS.ImportDynamic (toAbsoluteUrl "Js/error-utils.js")

    [<Inline "$0.safeFetch($1, $2)">]
    let safeFetchInline (errMod: obj) (url: string) (init: obj) : Promise<obj> = X<_>

    [<Inline "$0.redirectToError($1, $2)">]
    let redirectToErrorInline (errMod: obj) (err: obj) (ctx: obj) : unit = X<_>

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
            let! authMod = importAuth()
            let! me = authMod?fetchMe(true) |> As<Promise<obj>>

            if isNull me then
                return raise (System.Exception "unauthorized")
            else
                return me
        }
