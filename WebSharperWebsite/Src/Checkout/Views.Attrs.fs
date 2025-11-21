namespace WebSharperWebsite.Checkout

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client

open WebSharperWebsite
open State
open ViewsPricing 

[<JavaScript>]
module ViewsAttrs =

    // -----------------------------
    // Auth-based visibility
    // -----------------------------

    let private isAuthedV : View<bool> =
        AuthClient.UserView
        |> View.Map Option.isSome

    let BackLinkLabel : Doc =
        Doc.TextView backLinkLabel.View

    let ContinueTextView : View<string> =
        ContinueText.View

    let AuthSectionAttr : Attr =
        Attr.DynamicClassPred "hidden" isAuthedV

    let PaymentSectionAttr : Attr =
        Attr.Dynamic "class" (
            isAuthedV
            |> View.Map (fun isAuthed ->
                if isAuthed then "" else "hidden"
            )
        )

    let BackLinkAttr : Attr =
        Attr.Concat [
            Attr.Dynamic "href" backLinkHref.View
            on.click (fun _ e ->
                let referrer : string = JS.Document.Referrer

                if String.IsNullOrWhiteSpace referrer && JS.Window.History.Length > 1 then
                    e.PreventDefault()
                    JS.Window.History.Back()
            )
        ]

    // -----------------------------
    // UI attributes
    // -----------------------------

    let SeatSelectorAttr () : Attr =
        Attr.DynamicClassPred "hidden" (
            IsPerSeat
            |> View.Map (fun perSeat -> not perSeat)
        )

    let CompanyNameAttr () : Attr =
        Attr.Concat [
            Attr.DynamicBool "required" IsCompanyVar.View
            Attr.DynamicBool "disabled" (IsCompanyVar.View |> View.Map not)
        ]

    let VatinAttr () : Attr =
        Attr.Concat [
            Attr.DynamicBool "required" IsCompanyVar.View
            Attr.DynamicBool "disabled" (IsCompanyVar.View |> View.Map not)
        ]

    let CompanyBlockAttr () : Attr =
        Attr.DynamicClassPred "hidden" (
            IsCompanyVar.View
            |> View.Map not
        )

    let ContinueButtonAttr () : Attr =
        Attr.Concat [
            Attr.DynamicBool "disabled" ContinueDisabled.View
        ]
