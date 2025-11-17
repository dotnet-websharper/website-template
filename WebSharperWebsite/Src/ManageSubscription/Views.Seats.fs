namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom

open Types
open State
open Api
open Views

open WebSharperWebsite

[<JavaScript>]
module ViewsSeats =
    let seatsModel =
        ListModel.Create (fun (s: SeatRecord) -> s.seatNo) state.seats

    let refreshSeats (newSeats: SeatRecord[]) =
        seatsModel.Set newSeats

    let private seatBadge (status: string) : Doc =
        let baseClass =
            "inline-flex items-center rounded-full border px-2 py-0.5 text-xs "

        let cls =
            if status = "assigned" then
                baseClass +
                "border-emerald-300 text-emerald-700 dark:border-emerald-700/40 dark:text-emerald-300"
            else
                baseClass +
                "border-gray-300 text-gray-600 dark:border-white/10 dark:text-gray-300"
        span [ attr.``class`` cls ] [ text status ]

    let private refreshAfterChange (ui: UiRefs) =
        state.seats <- GetSeats state.currentSubId
        refreshSeats state.seats
        showToast ui "Updated"

    let private assignSeat (seatNo: int) (username: string) =
        let ui = collectUi ()
        if username <> "" then
            setLoading ui true
            try
                AssignSeat state.currentSubId seatNo username
                refreshAfterChange ui
            finally
                setLoading ui false

    let private unassignSeat (seatNo: int) =
        let ui = collectUi ()
        setLoading ui true
        try
            UnassignSeat state.currentSubId seatNo
            refreshAfterChange ui
        finally
            setLoading ui false

    let private toggleAutoRenew (expiry: string) (currentValue: bool): unit = 
        let ui = collectUi ()
        let newValue = not currentValue
        setLoading ui true
        try 
            SetAutoRenew state.currentSubId expiry newValue
            refreshAfterChange ui
        finally
            setLoading ui false

    let private seatRowDoc (seat: SeatRecord): Doc = 
        let usernameVar = Var.Create seat.username

        Templates.ManageSubscriptionTemplate.SeatRow()
            .SeatLabel($"#{seat.seatNo}")
            .Username(usernameVar)
            .StatusBadge(seatBadge seat.status)
            .Expiry(seat.expiry)
            .AssignSeat(fun t -> 
                let username = t.Vars.Username.Value.Trim()
                assignSeat seat.seatNo username
            )
            .UnassignSeat(fun _ -> unassignSeat seat.seatNo)
            .Doc()

    let private groupHeaderDoc (expiry: string) (autoRenew: bool) : Doc =
        let baseBtn =
            "relative inline-flex h-5 w-9 items-center rounded-full border text-xs transition-colors "
        let btnClasses =
            if autoRenew then
                baseBtn + "bg-emerald-500 border-emerald-500"
            else
                baseBtn + "bg-gray-300 border-gray-400 dark:bg-gray-700 dark:border-gray-600"

        let baseDot =
            "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform "
        let dotClasses =
            if autoRenew then
                baseDot + "translate-x-4"
            else
                baseDot + "translate-x-0"

        Templates.ManageSubscriptionTemplate.SeatGroupRow()
            .Expiry(expiry)
            .ToggleClasses(btnClasses)
            .DotClasses(dotClasses)
            .ToggleAutoRenew(fun _ -> toggleAutoRenew expiry autoRenew)
            .Doc()

    let private seatGroupsDoc : Doc =
        seatsModel.View
        |> View.Map (fun seats ->
            seats
            |> Seq.sortBy (fun s -> s.expiry, s.seatNo)
            |> Seq.groupBy (fun s -> s.expiry)
            |> Seq.collect (fun (expiry, groupSeatsSeq) ->
                let groupSeats = groupSeatsSeq |> Seq.toArray
                if groupSeats.Length = 0 then
                    Seq.empty
                else
                    let autoRenew = groupSeats.[0].autoRenew
                    seq {
                        yield groupHeaderDoc expiry autoRenew
                        yield! groupSeats |> Seq.map seatRowDoc
                    })
            |> Seq.toList
            |> Doc.Concat)
        |> Doc.EmbedView

    let mountSeats (ui: UiRefs) =
        if not (isNull ui.seatsBody) then
            Doc.Run ui.seatsBody seatGroupsDoc
