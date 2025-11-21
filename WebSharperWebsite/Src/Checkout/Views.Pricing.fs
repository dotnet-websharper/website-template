namespace WebSharperWebsite.Checkout

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client

open WebSharperWebsite
open Utils
open Types
open State
open Support.Types
open Support.State
open Support.ViewsPricing
open Support.ViewsAttrs

[<JavaScript>]
module ViewsPricing =

    // -----------------------------
    // Plan selection and base info
    // -----------------------------

    let Seats : View<int> =
        SeatsTextVar.View
        |> View.Map parseSeats

    let CurrentPlan : View<PlanPriceRecord option> =
        View.Map3
            (fun (items: PlanPriceRecord[]) (plan: string) interval ->
                let code = plan.ToLower()
                let intervalStr = intervalAsString interval

                items
                |> Array.tryFind (fun p ->
                    p.code.ToLower() = code
                    && (p.interval |> string).ToLower() = intervalStr
                )
            )
            plansVar.View
            SelectedPlanVar.View
            SelectedIntervalVar.View

    let IsPerSeat : View<bool> =
        CurrentPlan
        |> View.Map (function
            | Some p -> p.isPerSeat
            | None -> true
        )

    let PlanName : View<string> =
        CurrentPlan
        |> View.Map (fun opt ->
            match opt with
            | Some p when not (String.IsNullOrWhiteSpace p.name) ->
                p.name
            | _ ->
                match SelectedPlanVar.Value with
                | "freelancer" -> "Freelancer"
                | _ -> "WebSharper Professional"
        )

    let PlanPriceLine : View<Doc> =
        View.Map2
            (fun opt interval ->
                let defaultAmount =
                    match interval with
                    | Interval.Month -> 250.0
                    | Interval.Year  -> 2500.0

                let amount =
                    opt
                    |> Option.map (fun p -> float p.unitAmountCents / 100.0)
                    |> Option.defaultValue defaultAmount

                let period =
                    match interval with
                    | Interval.Month -> "Month"
                    | Interval.Year  -> "Year"

                div [] [
                    text (usd amount + " ")
                    span [ attr.``class`` "text-base text-gray-600 dark:text-gray-400 font-normal" ] [
                        text ("/ " + period)
                    ]
                ]
            )
            CurrentPlan
            SelectedIntervalVar.View

    let PriceHint : View<string> =
        View.Map2
            (fun opt interval ->
                let price =
                    opt
                    |> Option.map (fun p -> float p.unitAmountCents / 100.0)
                    |> Option.defaultValue (
                        match interval with
                        | Interval.Month -> 250.0
                        | Interval.Year  -> 2500.0
                    )

                let every =
                    match interval with
                    | Interval.Month -> "month"
                    | Interval.Year  -> "year"

                match opt with
                | Some p when p.isPerSeat ->
                    sprintf "Price is %s per seat per %s." (usd price) every
                | _ ->
                    sprintf "Price is %s per %s." (usd price) every
            )
            CurrentPlan
            SelectedIntervalVar.View

    // -----------------------------
    // VAT and totals
    // -----------------------------

    let VatRate : View<float> =
        View.Map3
            (fun country isCompany vatin ->
                let countryIso = toIso2 country

                let euVat =
                    dict [
                        "AT", 0.20; "BE", 0.21; "BG", 0.20; "HR", 0.25; "CY", 0.19
                        "CZ", 0.21; "DK", 0.25; "EE", 0.22; "FI", 0.24; "FR", 0.20
                        "DE", 0.19; "GR", 0.24; "HU", 0.27; "IE", 0.23; "IT", 0.22
                        "LV", 0.21; "LT", 0.21; "LU", 0.17; "MT", 0.18; "NL", 0.21
                        "PL", 0.23; "PT", 0.23; "RO", 0.19; "SK", 0.20; "SI", 0.22
                        "ES", 0.21; "SE", 0.25
                    ]

                let hasVatId =
                    not (String.IsNullOrWhiteSpace vatin)

                let isEU =
                    euVat.ContainsKey countryIso

                if isCompany then
                    if countryIso = "HU" then 0.27
                    elif isEU && hasVatId then 0.0
                    elif isEU && not hasVatId then euVat.[countryIso]
                    else 0.0
                else
                    if isEU then euVat.[countryIso]
                    else 0.0
            )
            CountryVar.View
            IsCompanyVar.View
            VatinVar.View

    let SubtotalRaw : View<float> =
        View.Map3
            (fun opt isPerSeat seats ->
                let qty = if isPerSeat then clampSeats seats else 1
                let unit =
                    opt
                    |> Option.map (fun p -> p.unitAmountCents)
                    |> Option.defaultValue 250000
                float (qty * unit) / 100.0
            )
            CurrentPlan
            IsPerSeat
            Seats

    let Subtotal : View<string> =
        SubtotalRaw
        |> View.Map usd

    let TaxesRaw : View<float> =
        View.Map2
            (fun subtotal vatRate ->
                Math.Round(subtotal * vatRate)
            )
            SubtotalRaw
            VatRate

    let Taxes : View<string> =
        TaxesRaw
        |> View.Map usd

    let TotalRaw : View<float> =
        View.Map2
            (fun subtotal tax -> subtotal + tax)
            SubtotalRaw
            TaxesRaw

    let Total : View<string> =
        TotalRaw
        |> View.Map usd
