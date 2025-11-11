namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open Types
open State

[<JavaScript>]
module ViewsSeats =
    let private seatBadge (status: string) : Doc =
        let cls =
            if status = "assigned" then
                "inline-flex items-center rounded-full border px-2 py-0.5 text-xs " +
                "border-emerald-300 text-emerald-700 dark:border-emerald-700/40 dark:text-emerald-300"
            else
                "inline-flex items-center rounded-full border px-2 py-0.5 text-xs " +
                "border-gray-300 text-gray-600 dark:border-white/10 dark:text-gray-300"
        span [ attr.``class`` cls ] [ text status ]

    let private seatRowV (key: int) (seatV: View<SeatRecord>): Doc =
        let seatNoV = seatV |> View.Map (fun s -> string key)
        let seatHashV = seatV |> View.Map (fun s -> $"#{key}")

        tr [] [
            // Seat number
            td [ attr.``class`` "px-4 py-3" ] [
                Doc.TextView seatHashV
            ]

            td [ attr.``class`` "px-4 py-3" ] [
                input [
                    attr.``class`` "w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm"
                    Attr.Dynamic "data-seat-input" seatNoV
                    attr.placeholder "github-username"
                    Attr.DynamicProp "value" (seatV |> View.Map (fun s -> s.username))
                ] []
            ]

            // Reactive badge
            td [ attr.``class`` "px-4 py-3" ] [
                seatV |> Doc.BindView (fun s -> seatBadge s.status)
            ]

            td [ attr.``class`` "px-4 py-3 text-right whitespace-nowrap" ] [
                button [
                    attr.``class`` "rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20 mr-2"
                    Attr.Create "data-action" "assign"
                    Attr.Dynamic "data-seat" seatNoV
                ] [ text "Assign" ]
                button [
                    attr.``class`` "rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20"
                    Attr.Create "data-action" "unassign"
                    Attr.Dynamic "data-seat" seatNoV
                ] [ text "Unassign" ]
            ]
        ]

    let seatsModel =
        ListModel.Create (fun (s: SeatRecord) -> s.seatNo) state.seats

    let seatsDoc =
        seatsModel.View
        |> Doc.BindSeqCachedViewBy (fun s -> s.seatNo) seatRowV

    let mountSeats (ui: UiRefs) =
        if not (isNull ui.seatsBody) then
            Doc.Run ui.seatsBody seatsDoc

    let refreshSeats (newSeats: SeatRecord[]) =
        seatsModel.Set newSeats

