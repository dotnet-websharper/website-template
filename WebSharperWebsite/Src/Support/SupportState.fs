namespace WebSharperWebsite.Support

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client

open Types

[<JavaScript>]
module State =

    // -----------------------------
    // Basic helpers
    // -----------------------------

    let intervalAsString = function
        | Interval.Month -> "month"
        | Interval.Year -> "year"

    let intervalTotalLabel = function
        | Interval.Month -> "Total (monthly)"
        | Interval.Year -> "Total (yearly)"

    let intervalProPriceLabel = function
        | Interval.Month -> "/ seat / month"
        | Interval.Year -> "/ seat / year"

    let intervalFreePriceLabel = function
        | Interval.Month -> "/ month"
        | Interval.Year -> "/ year"

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
    // Fallback entries
    // -----------------------------

    let fallbackPro : PlanEntry =
        {
            Name = Some "Professional"
            Description = Some "Assign GitHub usernames after purchase"
            Month = Some { Amount = 250.0; Currency = "USD" }
            Year = Some { Amount = 2500.0; Currency = "USD" }
        }

    let fallbackFreelancer : PlanEntry =
        {
            Name = Some "Freelancer"
            Description = Some "Ideal for solo developers"
            Month = Some { Amount = 30.0; Currency = "USD" }
            Year = Some { Amount = 300.0; Currency = "USD" }
        }

    let catalogVar : Var<Catalog> =
        Var.Create { Pro = fallbackPro; Freelancer = fallbackFreelancer }

    let intervalVar : Var<Interval> =
        Var.Create Interval.Year

    // Exposed so it can bind to an input element
    let SeatCountText : Var<string> = Var.Create "1"

    let SeatCount : View<int> =
        SeatCountText.View
        |> View.Map (fun s ->
            let s = (if isNull s then "" else s).Trim()
            if s = "" then 1
            else
                match Int32.TryParse s with
                | true, n -> clampSeats n
                | _ -> 1
        )

    // -----------------------------
    // Effective helpers
    // -----------------------------

    let getEntry (cat: Catalog) (code: string) : PlanEntry =
        match code.ToLower() with
        | "pro" -> cat.Pro
        | "freelancer" -> cat.Freelancer
        | _ -> fallbackPro

    let getPrice (entry: PlanEntry) (interval: Interval) : PriceInfo option =
        match interval with
        | Interval.Month -> entry.Month
        | Interval.Year -> entry.Year

    let fallbackAmount (fallback: PlanEntry) (interval: Interval) =
        match interval with
        | Interval.Month -> fallback.Month.Value.Amount
        | Interval.Year -> fallback.Year.Value.Amount

    let effectiveAmount (fallback: PlanEntry) (entry: PlanEntry) (interval: Interval) =
        getPrice entry interval
        |> Option.map (fun p -> p.Amount)
        |> Option.defaultValue (fallbackAmount fallback interval)

    let effectiveName defaultName (entry: PlanEntry) =
        entry.Name
        |> Option.filter isNotBlank
        |> Option.defaultValue defaultName

    let effectiveDescription defaultDesc (entry: PlanEntry) =
        entry.Description
        |> Option.filter isNotBlank
        |> Option.defaultValue defaultDesc

    let currencyFor (planCode: string) (cat: Catalog) (interval: Interval) : string =
        let entry = getEntry cat planCode

        let anyPrice =
            getPrice entry interval
            |> Option.orElse entry.Month
            |> Option.orElse entry.Year

        anyPrice
        |> Option.map (fun p -> p.Currency.ToUpper())
        |> Option.defaultValue "USD"

    // -----------------------------
    // Seat adjust helper
    // -----------------------------

    let AdjustSeats (delta: int) (value: Var<string>) =
        let current =
            value.Value
            |> fun s -> if isNull s then "" else s.Trim()
            |> fun s ->
                match Int32.TryParse s with
                | true, n -> n
                | _ -> 1

        let next = current + delta |> clampSeats
        value.Value <- string next

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
