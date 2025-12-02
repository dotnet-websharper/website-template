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

    let isAuthedV : View<bool> =
        AuthClient.UserView
        |> View.Map Option.isSome

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
        let classValue = 
            SelectedPlanVar.View
            |> View.Map (fun p ->
                let isPro = p.ToLower() <> "freelancer"
                let baseClasses = "transition-all duration-500 ease-in-out overflow-hidden"
                        
                if isPro then
                    baseClasses + " mt-6 max-h-[300px] opacity-100"
                else
                    baseClasses + " max-h-0 opacity-0"
            )
        
        classValue
        |> Attr.Dynamic "class"

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
