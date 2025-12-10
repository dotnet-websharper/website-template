namespace WebSharperWebsite.Support

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client

open Types

[<JavaScript>]
module State =

    let IsLoadingVar : Var<bool> = Var.Create true

    let catalogVar : Var<Catalog> =
        Var.Create { Plans = [] }

    let intervalVar : Var<Interval> =
        Var.Create Interval.Year

    let intervalAsString = function
        | Interval.Month -> "month"
        | Interval.Year -> "year"

    let clampSeats (v: int) =
        max 1 (min 999 v)

    let private isNotBlank (s: string) =
        not (String.IsNullOrWhiteSpace s)

    let nonEmptyOpt (s: obj) : string option =
        if isNull s then None
        else
            let s = string s
            if isNotBlank s then Some s else None

    // -----------------------------
    // Contact form
    // -----------------------------

    let ContactFormVar : Var<ContactForm> =
        Var.Create {
            subject = "WebSharper support"
            message = ""
            email = ""
            name = ""
            country = "United States"
        }

    let IsSendingVar : Var<bool> = Var.Create false

    let private isValidEmail (email: string) =
        if isNull email then false
        else
            let e = email.Trim()
            e.Contains("@") && e.Contains(".")

    let IsFormValid (form: ContactForm) : bool =
        let hasMessage = not (String.IsNullOrWhiteSpace form.message)
        let hasEmail = not (String.IsNullOrWhiteSpace form.email)
        let hasName = not (String.IsNullOrWhiteSpace form.name)
        hasMessage && hasEmail && hasName && isValidEmail form.email

    let CanSendView : View<bool> =
        ContactFormVar.View
        |> View.Map IsFormValid
