namespace WebSharperWebsite.ManageSubscription

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open Types

[<JavaScript>]
module ViewsBilling =

    // -------------------------
    // Types + state
    // -------------------------

    type BillingMode =
        | Viewing
        | Editing

    let BillingModeVar : Var<BillingMode> = Var.Create BillingMode.Viewing

    let BillingRecordVar : Var<BillingRecord option> = Var.Create None

    // Form Vars (bound with ws-var)
    let BillingNameVar : Var<string> = Var.Create ""
    let BillingVatinVar : Var<string> = Var.Create ""
    let BillingLine1Var : Var<string> = Var.Create ""
    let BillingCityVar : Var<string> = Var.Create ""
    let BillingPostalVar : Var<string> = Var.Create ""
    let BillingCountryVar : Var<string> = Var.Create ""

    let private orDash s =
        if String.IsNullOrWhiteSpace s then "—" else s

    // -------------------------
    // Billing view / edit mode attrs
    // -------------------------

    let BillingViewAttr : Attr =
        // View card is hidden when editing
        Attr.DynamicClassPred "hidden" (
            BillingModeVar.View
            |> View.Map (function
                | BillingMode.Viewing -> false
                | BillingMode.Editing -> true
            )
        )

    let BillingEditAttr : Attr =
        // Edit form is hidden when viewing
        Attr.DynamicClassPred "hidden" (
            BillingModeVar.View
            |> View.Map (function
                | BillingMode.Viewing -> true
                | BillingMode.Editing -> false
            )
        )

    let BtnBillingEditAttr : Attr =
        // "Edit" button visible only in view mode
        Attr.DynamicClassPred "hidden" (
            BillingModeVar.View
            |> View.Map (function
                | BillingMode.Viewing -> false
                | BillingMode.Editing -> true
            )
        )

    let BtnBillingSaveAttr : Attr =
        // "Save" button visible only in edit mode
        Attr.DynamicClassPred "hidden" (
            BillingModeVar.View
            |> View.Map (function
                | BillingMode.Viewing -> true
                | BillingMode.Editing -> false
            )
        )

    let BtnBillingCancelAttr : Attr =
        // "Cancel" button visible only in edit mode
        Attr.DynamicClassPred "hidden" (
            BillingModeVar.View
            |> View.Map (function
                | BillingMode.Viewing -> true
                | BillingMode.Editing -> false
            )
        )

    let SetBillingMode mode =
        BillingModeVar.Value <- mode

    // -------------------------
    // "View mode" Docs (ws-hole on v_name, v_vatin, etc.)
    // -------------------------

    let BillingNameView : Doc =
        BillingRecordVar.View
        |> View.Map (function
            | Some b -> orDash b.name
            | None -> "—"
        )
        |> Doc.TextView

    let BillingVatinView : Doc =
        BillingRecordVar.View
        |> View.Map (function
            | Some b -> orDash b.vatin
            | None -> "—"
        )
        |> Doc.TextView

    let BillingLine1View : Doc =
        BillingRecordVar.View
        |> View.Map (function
            | Some b -> orDash b.line1
            | None -> "—"
        )
        |> Doc.TextView

    let BillingCityView : Doc =
        BillingRecordVar.View
        |> View.Map (function
            | Some b -> orDash b.city
            | None -> "—"
        )
        |> Doc.TextView

    let BillingPostalView : Doc =
        BillingRecordVar.View
        |> View.Map (function
            | Some b -> orDash b.postal_code
            | None -> "—"
        )
        |> Doc.TextView

    let BillingCountryView : Doc =
        BillingRecordVar.View
        |> View.Map (function
            | Some b -> orDash b.country
            | None -> "—"
        )
        |> Doc.TextView

    // -------------------------
    // Sync helpers (used from Controller / Page)
    // -------------------------

    /// Set both the "view mode" record and the edit form Vars
    let SetBillingRecord (bOpt: BillingRecord option) =
        BillingRecordVar.Value <- bOpt

        match bOpt with
        | Some data ->
            BillingNameVar.Value <- data.name
            BillingVatinVar.Value <- data.vatin
            BillingLine1Var.Value <- data.line1
            BillingCityVar.Value <- data.city
            BillingPostalVar.Value <- data.postal_code
            BillingCountryVar.Value <- data.country
        | None ->
            BillingNameVar.Value <- ""
            BillingVatinVar.Value <- ""
            BillingLine1Var.Value <- ""
            BillingCityVar.Value <- ""
            BillingPostalVar.Value <- ""
            BillingCountryVar.Value <- ""

    /// Read the current form fields into a BillingRecord
    let CurrentBillingFromForm () : BillingRecord =
        {
            name = BillingNameVar.Value.Trim()
            vatin = BillingVatinVar.Value.Trim()
            line1 = BillingLine1Var.Value.Trim()
            city = BillingCityVar.Value.Trim()
            postal_code = BillingPostalVar.Value.Trim()
            country = BillingCountryVar.Value.Trim()
        }
