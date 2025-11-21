namespace WebSharperWebsite.ManageSubscription

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client

open Types
open WebSharperWebsite.Checkout

[<JavaScript>]
module ViewsBilling =

    module CT = WebSharperWebsite.Checkout.Types

    type BillingMode =
        | Viewing
        | Editing

    let BillingRecordVar : Var<BillingRecord> =
        Var.Create {
            company = Some { name = ""; vatin = "" }
            address = {
                line1 = ""
                city = ""
                postal_code = ""
                country = ""
            }
        }

    let BillingModeVar : Var<BillingMode> =
        Var.Create BillingMode.Viewing

    // -------------------------
    // Helpers
    // -------------------------

    let private orDash s =
        if String.IsNullOrWhiteSpace s then "—" else s

    let SetBillingMode mode =
        BillingModeVar.Value <- mode

    let SetBillingRecord (billingOpt: BillingRecord option) =
        let value =
            match billingOpt with
            | Some billing -> billing
            | None ->
                {
                    company = Some { name = ""; vatin = "" }
                    address = {
                        line1 = ""
                        city = ""
                        postal_code = ""
                        country = ""
                    }
                }
        BillingRecordVar.Value <- value

    let CurrentBillingFromForm () : BillingRecord =
        BillingRecordVar.Value

    // -------------------------
    // Lenses -> individual Vars
    // -------------------------

    // company.name
    let CompanyNameVar : Var<string> =
        BillingRecordVar.Lens
            (fun billing ->
                match billing.company with
                | Some companyInfo -> companyInfo.name
                | None -> ""
            )
            (fun billing name ->
                let company =
                    match billing.company with
                    | Some companyInfo -> { companyInfo with name = name }
                    | None -> { 
                        name = name
                        vatin = ""
                    }

                { billing with company = Some company }
            )
        

    // company.vatin
    let CompanyVatinVar : Var<string> =
        BillingRecordVar.Lens
            (fun billing ->
                match billing.company with
                | Some company -> company.vatin
                | None -> ""
            )
            (fun billing vatin ->
                let company =
                    match billing.company with
                    | Some c -> { c with vatin = vatin }
                    | None -> { 
                        name = ""
                        vatin = vatin 
                    }

                { billing with company = Some company }
            )
        

    // -------------------------
    // View-mode Docs for ws-hole on v_name, v_vatin, etc.
    // -------------------------

    let BillingNameView : Doc =
        BillingRecordVar.View
        |> View.Map (fun billing ->
            match billing.company with
            | Some companyInfo -> orDash companyInfo.name
            | None -> "—")
        |> Doc.TextView

    let BillingVatinView : Doc =
        BillingRecordVar.View
        |> View.Map (fun billing ->
            match billing.company with
            | Some companyInfo -> orDash companyInfo.vatin
            | None -> "—")
        |> Doc.TextView

    let BillingLine1View : Doc =
        BillingRecordVar.View
        |> View.Map (fun billing -> orDash billing.address.line1)
        |> Doc.TextView

    let BillingCityView : Doc =
        BillingRecordVar.View
        |> View.Map (fun billing -> orDash billing.address.city)
        |> Doc.TextView

    let BillingPostalView : Doc =
        BillingRecordVar.View
        |> View.Map (fun billing -> orDash billing.address.postal_code)
        |> Doc.TextView

    let BillingCountryView : Doc =
        BillingRecordVar.View
        |> View.Map (fun billing -> orDash billing.address.country)
        |> Doc.TextView

    // -------------------------
    // Visibility attrs for view/edit card
    // -------------------------

    let BillingViewAttr : Attr =
        Attr.DynamicClassPred "hidden" (
            BillingModeVar.View
            |> View.Map (function
                | BillingMode.Viewing -> false
                | BillingMode.Editing -> true)
        )

    let BillingEditAttr : Attr =
        Attr.DynamicClassPred "hidden" (
            BillingModeVar.View
            |> View.Map (function
                | BillingMode.Viewing -> true
                | BillingMode.Editing -> false)
        )

    let BtnBillingEditAttr : Attr =
        Attr.DynamicClassPred "hidden" (
            BillingModeVar.View
            |> View.Map (function
                | BillingMode.Viewing -> false
                | BillingMode.Editing -> true)
        )

    let BtnBillingSaveAttr : Attr =
        Attr.DynamicClassPred "hidden" (
            BillingModeVar.View
            |> View.Map (function
                | BillingMode.Viewing -> true
                | BillingMode.Editing -> false)
        )

    let BtnBillingCancelAttr : Attr =
        Attr.DynamicClassPred "hidden" (
            BillingModeVar.View
            |> View.Map (function
                | BillingMode.Viewing -> true
                | BillingMode.Editing -> false)
        )
