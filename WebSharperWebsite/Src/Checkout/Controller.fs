namespace WebSharperWebsite.Checkout

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client

open WebSharperWebsite
open Types
open State
open Api
open Support.State

[<JavaScript>]
module Controller =

    // -----------------------------
    // Seat adjustment
    // -----------------------------

    let OnSeatMinus () =
        AdjustSeats -1 SeatsText

    let OnSeatPlus () =
        AdjustSeats 1 SeatsText

    // -----------------------------
    // Checkout button
    // -----------------------------

    let private isBlank (s: string) =
        String.IsNullOrWhiteSpace (if isNull s then "" else s)

    let private validateForm () : string option =
        let email = Email.Value
        let street = Street.Value
        let city = City.Value
        let postal = Postal.Value
        let isCompany = IsCompany.Value
        let companyName = CompanyName.Value
        let vatin = Vatin.Value

        if isBlank email then Some "Please enter your email."
        elif isBlank street then Some "Please enter your street address."
        elif isBlank city then Some "Please enter your city."
        elif isBlank postal then Some "Please enter your postal code."
        elif isCompany && isBlank companyName then Some "Please enter the company name."
        elif isCompany && isBlank vatin then Some "Please enter the VAT number."
        else None

    let FormError : Var<string option> = Var.Create None

    let FormErrorDoc : Doc =
        FormError.View
        |> Doc.BindView (function
            | Some msg ->
                div [ attr.``class`` "mt-2 text-sm text-red-500 dark:text-red-400" ] [
                    text msg
                ]
            | None ->
                Doc.Empty
        )

    let OnContinueClick () : unit =
        match validateForm () with
        | Some msg ->
            // show a small error, don’t call Stripe
            FormError.Value <- Some msg
        | None ->
            FormError.Value <- None
            async {
                try
                    ContinueDisabled.Value <- true
                    ContinueText.Value <- "Processing…"

                    let payload = buildPayload()
                    let! responseOpt = startCheckout payload

                    match responseOpt with
                    | Some response when not (String.IsNullOrWhiteSpace response.url) ->
                        JS.Window.Location.Href <- response.url
                        resetContinueButton ()
                    | _ -> 
                        resetContinueButton ()
                with _ ->
                    resetContinueButton ()
            }
            |> Async.StartImmediate

    // -----------------------------
    // Page init
    // -----------------------------

    let OnAfterRender () =
        resetContinueButton ()
        computeBackLink ()
        initFromQuery ()
        ensurePlans () |> Async.StartImmediate
