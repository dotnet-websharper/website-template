namespace WebSharperWebsite.ManageSubscription

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open Types
open State

[<JavaScript>]
module Views =

    // -------------------------
    // UI types and state
    // -------------------------

    type Page =
        | Subs
        | Billing

    let ActivePage : Var<Page> = Var.Create Page.Subs

    let IsLoading : Var<bool> = Var.Create false

    let ToastMessage : Var<string option> = Var.Create None

    // -------------------------
    // Navigation attributes
    // -------------------------

    let SubsPageAttr : Attr =
        Attr.DynamicClassPred "hidden" (
            ActivePage.View
            |> View.Map (fun page -> page <> Page.Subs)
        )

    let BillingPageAttr : Attr =
        Attr.DynamicClassPred "hidden" (
            ActivePage.View
            |> View.Map (fun page -> page <> Page.Billing)
        )

    let SubsTabAttr : Attr =
        let isActive =
            ActivePage.View
            |> View.Map (fun page -> page = Page.Subs)

        Attr.Concat [
            Attr.DynamicClassPred "bg-gray-100" isActive
            Attr.DynamicClassPred "dark:bg-white/5" isActive
        ]

    let BillingTabAttr : Attr =
        let isActive =
            ActivePage.View
            |> View.Map (fun page -> page = Page.Billing)

        Attr.Concat [
            Attr.DynamicClassPred "bg-gray-100" isActive
            Attr.DynamicClassPred "dark:bg-white/5" isActive
        ]

    let ShowSubsPage () =
        ActivePage.Value <- Page.Subs

    let ShowBillingPage () =
        ActivePage.Value <- Page.Billing

    // -------------------------
    // Spinner + Toast
    // -------------------------

    let SpinnerAttr : Attr =
        // Spinner is hidden when NOT loading
        Attr.DynamicClassPred "hidden" (
            IsLoading.View
            |> View.Map (fun isLoading -> not isLoading)
        )

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
