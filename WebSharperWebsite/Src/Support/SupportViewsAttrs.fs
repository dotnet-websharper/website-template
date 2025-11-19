namespace WebSharperWebsite.Support

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client

open Types
open State

[<JavaScript>]
module ViewsAttrs =

    // Billing toggle buttons

    let BillMonthAttr () : Attr =
        let v =
            intervalVar.View
            |> View.Map (function
                | Interval.Month -> "true"
                | Interval.Year -> "false"
            )
        Attr.Concat [
            Attr.Dynamic "data-active" v
            Attr.Dynamic "aria-pressed" v
        ]

    let BillYearAttr () : Attr =
        let v =
            intervalVar.View
            |> View.Map (function
                | Interval.Month -> "false"
                | Interval.Year -> "true"
            )
        Attr.Concat [
            Attr.Dynamic "data-active" v
            Attr.Dynamic "aria-pressed" v
        ]

    // Checkout links

    let ProCheckoutAttr () : Attr =
        Attr.Dynamic "href" (
            View.Map2 (fun interval seats ->
                let seats = clampSeats seats
                let intervalStr = intervalAsString interval
                $"./checkout.html?plan=pro&interval={intervalStr}&seats={seats}"
            ) intervalVar.View SeatCount
        )

    let FreeCheckoutAttr () : Attr =
        Attr.Dynamic "href" (
            intervalVar.View
            |> View.Map (fun interval ->
                let intervalStr = intervalAsString interval
                $"./checkout.html?plan=freelancer&interval={intervalStr}&seats=1"
            )
        )

    // Handlers

    let OnBillMonth () =
        intervalVar.Value <- Interval.Month

    let OnBillYear () =
        intervalVar.Value <- Interval.Year

    let OnSeatMinus () =
        AdjustSeats -1 SeatCountText

    let OnSeatPlus () =
        AdjustSeats 1 SeatCountText
