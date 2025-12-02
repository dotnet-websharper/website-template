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

    let PlanPrice: View<string> =
        CurrentPlan
        |> View.Map (fun planPriceOpt ->
            let defaultAmount =
                match SelectedIntervalVar.Value with
                | Interval.Month -> 250.0
                | Interval.Year  -> 2500.0

            let amount =
                planPriceOpt
                |> Option.map (fun p -> float p.unitAmountCents / 100.0)
                |> Option.defaultValue defaultAmount

            usd amount
        )

    let PlanInterval: View<string> =
        SelectedIntervalVar.View
        |> View.Map (fun interval ->
            match interval with
            | Interval.Month -> "month"
            | Interval.Year  -> "year"
        )

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
            WebSharperWebApi.Shared.getVATRate
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
