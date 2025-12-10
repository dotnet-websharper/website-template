namespace WebSharperWebsite.Support

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

[<JavaScript>]
module ViewsPricing =

    let RenderPlanWidget (plan: PlanViewModel) =

        let seatCountVar = Var.Create 1

        let effectivePrice =
            intervalVar.View
            |> View.Map (fun interval ->
                match interval with 
                | Year -> plan.YearPrice
                | _ -> plan.MonthPrice
            )
        
        let priceDisplay = 
            effectivePrice
            |> View.Map (fun priceOpt ->
                match priceOpt with
                | Some price -> usd price.Amount
                | None -> "N/A"
            )

        let priceLabel = 
            intervalVar.View
            |> View.Map (fun interval ->
                let seatLabel =
                    if plan.IsPerSeat then
                        " / seat"
                    else
                        ""

                $"{seatLabel} / {intervalAsString interval}"
            )

        let totalAmountDisplay = 
            View.Map3 (fun interval priceInfoOpt seats ->
                match priceInfoOpt with
                | Some priceInfo -> 
                    let total = priceInfo.Amount * float seats
                    usd total
                | None -> "-"
            ) intervalVar.View effectivePrice seatCountVar.View

        let totalLabelDisplay =
            intervalVar.View 
            |> View.Map (fun interval -> $"Total ({intervalAsString interval}ly)")
        
        let seatSelectorDoc = 
            if plan.IsPerSeat then

                let seatCountUiVar = 
                    seatCountVar.Lens 
                        string 
                        (fun currentInt newStr -> 
                            match System.Int32.TryParse(newStr) with 
                            | true, v -> v 
                            | false, _ -> currentInt
                        )

                Templates.SupportTemplate.SeatWidget()
                    .SeatCount(seatCountUiVar)
                    .OnSeatMinus(fun _ -> 
                        if seatCountVar.Value > 1 then seatCountVar.Value <- seatCountVar.Value - 1
                    )
                    .OnSeatPlus(fun _ -> 
                        seatCountVar.Value <- seatCountVar.Value + 1
                    )
                    .Doc()
            else
                Templates.SupportTemplate.StaticSeatBadge().Doc()

        let toCheckout =
            Attr.Dynamic "href" (
                View.Map2 (fun interval seats ->
                    let seats = clampSeats seats
                    let intervalStr = intervalAsString interval
                    $"./checkout?plan={plan.Id}&interval={intervalStr}&seats={seats}"
                ) intervalVar.View seatCountVar.View
            )

        Templates.SupportTemplate.PlanCard()
            .Name(plan.Name)
            .Description(plan.Description)
            .PriceAmount(priceDisplay)
            .PriceLabel(priceLabel)
            .SeatSelector(seatSelectorDoc)
            .TotalLabel(totalLabelDisplay)
            .TotalAmount(totalAmountDisplay)
            .CheckoutAttr(toCheckout)
            .Doc()

    let PlansGrid =
        let skeletons = 
            [1; 2]
            |> List.map (fun _ -> Templates.SupportTemplate.SkeletonCard().Doc())
            |> Doc.Concat

        let realPlans =
            catalogVar.View
            |> View.Map (fun catalog -> catalog.Plans)
            |> Doc.BindSeqCached RenderPlanWidget

        IsLoadingVar.View
        |> View.Map (fun isLoading ->
            if isLoading then skeletons else realPlans
        )
        |> Doc.EmbedView
