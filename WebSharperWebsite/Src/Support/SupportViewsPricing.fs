namespace WebSharperWebsite.Support

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client

open Types
open State

[<JavaScript>]
module ViewsPricing =

    // Names

    let ProName : View<string> =
        catalogVar.View
        |> View.Map (fun cat ->
            effectiveName "Professional" cat.Pro
        )

    let FreeName : View<string> =
        catalogVar.View
        |> View.Map (fun cat ->
            effectiveName "Freelancer" cat.Freelancer
        )

    // Base price per seat / per plan

    let ProPriceAmount : View<string> =
        View.Map2 (fun cat interval ->
            effectiveAmount fallbackPro cat.Pro interval
            |> usd
        ) catalogVar.View intervalVar.View

    let FreePriceAmount : View<string> =
        View.Map2 (fun cat interval ->
            effectiveAmount fallbackFreelancer cat.Freelancer interval
            |> usd
        ) catalogVar.View intervalVar.View

    // Labels

    let ProPriceLabel : View<string> =
        intervalVar.View
        |> View.Map intervalProPriceLabel

    let FreePriceLabel : View<string> =
        intervalVar.View
        |> View.Map intervalFreePriceLabel

    let ProTotalLabel : View<string> =
        intervalVar.View
        |> View.Map intervalTotalLabel

    let FreeTotalLabel : View<string> =
        intervalVar.View
        |> View.Map intervalTotalLabel

    // Totals

    let ProTotalAmount : View<string> =
        View.Map3 (fun cat interval seats ->
            let seats = clampSeats seats
            let perSeat = effectiveAmount fallbackPro cat.Pro interval
            usd (perSeat * float seats)
        ) catalogVar.View intervalVar.View SeatCount

    let FreeTotalAmount : View<string> =
        View.Map2 (fun cat interval ->
            effectiveAmount fallbackFreelancer cat.Freelancer interval
            |> usd
        ) catalogVar.View intervalVar.View

    // Notes

    let ProNote : View<string> =
        View.Map2 (fun cat interval ->
            let entry = cat.Pro
            let cur = currencyFor "pro" cat interval
            let desc = effectiveDescription "Assign GitHub usernames after purchase" entry
            $"{desc}. Prices in {cur}."
        ) catalogVar.View intervalVar.View

    let FreeNote : View<string> =
        View.Map2 (fun cat interval ->
            let entry = cat.Freelancer
            let cur = currencyFor "freelancer" cat interval
            let desc = effectiveDescription "Ideal for solo developers" entry
            $"{desc}. Prices in {cur}."
        ) catalogVar.View intervalVar.View
