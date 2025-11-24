namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client

open Types
open State
open Api
open Views
open WebSharperWebsite

[<JavaScript>]
module ViewsSeats =

    // Load seats for all subscriptions of the current user
    let private refreshSeatsAsync () =
        async {
            let! newSeats = Api.GetAllSeats ()
            SeatsVar.Value <- newSeats
        }

    let RefreshSeats () =
        refreshSeatsAsync () |> Async.StartImmediate

    // -----------------------------
    // Small helpers
    // -----------------------------

    let private seatBadge (status: string) : Doc =
        let baseClass =
            "inline-flex items-center rounded-full border px-2 py-0.5 text-xs "

        let cls =
            if status = "assigned" then
                baseClass
                + "border-emerald-300 text-emerald-700 "
                + "dark:border-emerald-700/40 dark:text-emerald-300"
            else
                baseClass
                + "border-gray-300 text-gray-600 "
                + "dark:border-white/10 dark:text-gray-300"

        span [ attr.``class`` cls ] [ text status ]

    let private usernameAttr (seat: SeatRecord) : Attr =
        if seat.status = "assigned" then
            Attr.Create "readonly" ""
        else
            Attr.Empty

    // Show Assign only when seat is available, Unassign only when seat is assigned
    let private assignButtonAttr (seat: SeatRecord) : Attr =
        if seat.status = "assigned" then
            attr.style "display: none"
        else
            Attr.Empty

    let private unassignButtonAttr (seat: SeatRecord) : Attr =
        if seat.status = "assigned" then
            Attr.Empty
        else
            attr.style "display: none"

    let private assignSeat (subId: string) (seatNo: int) (username: string) =
        if not (System.String.IsNullOrWhiteSpace username) then
            async {
                setLoading true
                try
                    do! Api.AssignSeat subId seatNo username
                    do! refreshSeatsAsync ()
                    showToast "Updated"
                finally
                    setLoading false
            }
            |> Async.StartImmediate

    let private unassignSeat (subId: string) (seatNo: int) =
        async {
            setLoading true
            try
                do! Api.UnassignSeat subId seatNo
                do! refreshSeatsAsync ()
                showToast "Updated"
            finally
                setLoading false
        }
        |> Async.StartImmediate

    // Optimistic toggle of auto-renew, then sync with backend
    let private toggleAutoRenew (subId: string) (expiry: string) (currentAutoRenew: bool) =
        async {
            setLoading true
            try
                let newAuto = not currentAutoRenew

                let updatedSeats =
                    SeatsVar.Value
                    |> Array.map (fun s ->
                        if s.subscriptionId = subId && s.expiry = expiry then
                            { s with autoRenew = newAuto }
                        else
                            s
                    )

                SeatsVar.Value <- updatedSeats

                let newCancelAtPeriodEnd = currentAutoRenew
                do! Api.SetAutoRenew subId newCancelAtPeriodEnd

                showToast "Updated"
            finally
                setLoading false
        }
        |> Async.StartImmediate

    // -----------------------------
    // Template docs
    // -----------------------------

    let private seatRowDoc (seat: SeatRecord) : Doc =
        let usernameVar = Var.Create seat.username

        Templates.ManageSubscriptionTemplate.SeatRow()
            .SeatLabel($"#{seat.seatNo}")
            .Username(usernameVar)
            .UsernameAttr(usernameAttr seat)
            .StatusBadge(seatBadge seat.status)
            .Expiry(seat.expiry)
            .AssignButtonAttr(assignButtonAttr seat)
            .UnassignButtonAttr(unassignButtonAttr seat)
            .AssignSeat(fun t ->
                let username = t.Vars.Username.Value.Trim()
                assignSeat seat.subscriptionId seat.seatNo username
            )
            .UnassignSeat(fun _ ->
                unassignSeat seat.subscriptionId seat.seatNo
            )
            .Doc()

    let private groupHeaderDoc (subId: string) (expiry: string) (autoRenew: bool) : Doc =
        let baseBtn =
            "relative inline-flex h-5 w-9 items-center rounded-full border "
            + "text-xs transition-colors "

        let btnClasses =
            if autoRenew then
                baseBtn + "bg-emerald-500 border-emerald-500"
            else
                baseBtn
                + "bg-gray-300 border-gray-400 "
                + "dark:bg-gray-700 dark:border-gray-600"

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
            .ToggleAutoRenew(fun _ -> toggleAutoRenew subId expiry autoRenew)
            .Doc()

    let private seatGroupsDoc : Doc =
        SeatsVar.View
        |> View.Map (fun seats ->
            seats
            |> Seq.sortBy (fun s -> s.expiry, s.subscriptionId, s.seatNo)
            |> Seq.groupBy (fun s -> s.subscriptionId)
            |> Seq.collect (fun (subId, groupSeatsSeq) ->
                let groupSeats = groupSeatsSeq |> Seq.toArray
                if groupSeats.Length = 0 then
                    Seq.empty
                else
                    let expiry = groupSeats.[0].expiry
                    let autoRenew = groupSeats.[0].autoRenew
                    seq {
                        yield groupHeaderDoc subId expiry autoRenew
                        yield! groupSeats |> Seq.map seatRowDoc
                    })
            |> Doc.Concat)
        |> Doc.EmbedView

    let SeatsBody : Doc =
        seatGroupsDoc
