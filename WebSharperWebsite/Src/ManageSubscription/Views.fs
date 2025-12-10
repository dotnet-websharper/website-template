namespace WebSharperWebsite.ManageSubscription

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.Sitelets

open State

[<JavaScript>]
module Views =

    // -------------------------
    // UI types and state
    // -------------------------

    type Page =
        | [<EndPoint "subscriptions">] Subs
        | [<EndPoint "billing">] Billing

    let ActivePage : Var<Page> = 
        if JS.Document.Location.Hash = "" then
            JS.Document.Location.Hash <- "/subscriptions"

        Router.Infer<Page>()
        |> Router.InstallHash Page.Subs

    let IsLoading : Var<bool> = Var.Create false

    let ToastMessage : Var<string option> = Var.Create None

    let ShowSubsPage () =
        ActivePage.Value <- Page.Subs

    let ShowBillingPage () =
        ActivePage.Value <- Page.Billing

    // -------------------------
    // Toast
    // -------------------------

    let ToastAttr : Attr =
        // Toast is hidden when there is no message
        Attr.DynamicClassPred "hidden" (
            ToastMessage.View
            |> View.Map Option.isNone
        )

    let ToastText : Doc =
        ToastMessage.View
        |> View.Map (function
            | Some msg when not (String.IsNullOrWhiteSpace msg) -> msg
            | _ -> "Saved"
        )
        |> Doc.TextView

    let setLoading on =
        IsLoading.Value <- on

    let showToast msg =
        let msg =
            if String.IsNullOrWhiteSpace msg then "Saved" else msg

        ToastMessage.Value <- Some msg

        JS.SetTimeout 
            (fun () -> ToastMessage.Value <- None)
            1600
        |> ignore

    let OpenCustomerPortal () =
        match CustomerPortalLinkVar.Value with
        | Some url ->
            JS.Window.Open(url, "_blank") |> ignore
        | None ->
            showToast "Customer portal is not available yet."