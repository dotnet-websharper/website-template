namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
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

    let private usernameAttr (seat: SeatRecord) (isLocked: bool) : Attr =
        if isLocked || seat.status = "assigned" then
            Attr.Create "readonly" ""
        else
            Attr.Empty

    let private assignButtonAttr (seat: SeatRecord) (isLocked: bool) : Attr =
        if isLocked || seat.status = "assigned" then
            attr.style "display: none"
        else
            Attr.Empty

    let private unassignButtonAttr (seat: SeatRecord) (isLocked: bool) : Attr =
        if isLocked || seat.status = "assigned" then
            Attr.Empty
        else
            attr.style "display: none"

    let AddSeatsButtonAttr : Attr =
        SubsVar.View
        |> View.Map (fun subs ->
            let isFreelancer = 
                subs |> Array.exists (fun s -> s.plan.ToLower().Contains("freelancer"))
            
            if isFreelancer then
                "display: none"
            else
                ""
        )
        |> Attr.Dynamic "style"

    let private verifyGitHubUser (username: string) =
        async {
            let! response =  JS.Fetch("https://api.github.com/users/" + username) |> Promise.AsAsync
            return response.Ok
        }

    let private assignSeat (subId: string) (seatNo: int) (username: string) =
        if not (System.String.IsNullOrWhiteSpace username) then
            async {
                setLoading true
                try
                    let! exists = verifyGitHubUser username
                    if exists then
                        let! ok = Api.AssignSeat subId seatNo username
                        if ok then
                            do! refreshSeatsAsync ()
                            showToast "Updated"
                    else
                        Utils.alertWarning $"GitHub user '{username}' not found"
                finally
                    setLoading false
            }
            |> Async.StartImmediate

    let private unassignSeat (subId: string) (seatNo: int) =
        async {
            setLoading true
            try
                let! ok = Api.UnassignSeat subId seatNo
                if ok then
                    do! refreshSeatsAsync ()
                    showToast "Updated"
            finally
                setLoading false
        }
        |> Async.StartImmediate

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
                let! ok = Api.SetAutoRenew subId currentAutoRenew
                if ok then showToast "Updated"
            finally
                setLoading false
        }
        |> Async.StartImmediate

    // -----------------------------
    // Template docs
    // -----------------------------

    let private setGhUsernameForFreelancer (seat: SeatRecord) (isLocked: bool) (forcedUsername: string option) =
        if isLocked && seat.status <> "assigned" && Option.isSome forcedUsername then
            let userToAssign = forcedUsername.Value
            
            do assignSeat seat.subscriptionId seat.seatNo (userToAssign.ToLower())
            seat.status <- "assigned"

    let private seatRowDoc (seat: SeatRecord) (isLocked: bool) (forcedUsername: string option) : Doc =
        let effectiveUsername = 
            if isLocked && Option.isSome forcedUsername then 
                forcedUsername.Value 
            else 
                seat.username
            
        let usernameVar = Var.Create effectiveUsername

        setGhUsernameForFreelancer seat isLocked forcedUsername

        Templates.ManageSubscriptionTemplate.SeatRow()
            .SeatLabel($"#{seat.seatNo}")
            .Username(usernameVar)
            .UsernameAttr(usernameAttr seat isLocked)
            .StatusBadge(seatBadge seat.status)
            .Expiry(seat.expiry)
            .AssignButtonAttr(assignButtonAttr seat isLocked)
            .UnassignButtonAttr(unassignButtonAttr seat isLocked)
            .AssignSeat(fun t ->
                if not isLocked then
                    let username = t.Vars.Username.Value.Trim()
                    assignSeat seat.subscriptionId seat.seatNo (username.ToLower())
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
        View.Map3 (fun seats (subs: SubRecord array) (userOpt: User option) ->
            seats
            |> Seq.sortBy (fun s -> s.expiry, s.subscriptionId, s.seatNo)
            |> Seq.groupBy (fun s -> s.subscriptionId)
            |> Seq.collect (fun (subId, groupSeatsSeq) ->
                let groupSeats = groupSeatsSeq |> Seq.toArray
                if groupSeats.Length = 0 then
                    Seq.empty
                else
                    let subOption = subs |> Array.tryFind (fun s -> s.id = subId.ToLower())
                    
                    let isFreelancer = 
                        match subOption with
                        | Some s -> s.plan.ToLower().Contains("freelancer")
                        | None -> false

                    let forcedUsername = 
                        if isFreelancer then
                            userOpt |> Option.map (fun u -> u.login.ToLower())
                        else
                            None

                    let expiry = groupSeats.[0].expiry
                    let autoRenew = groupSeats.[0].autoRenew
                    
                    seq {
                        yield groupHeaderDoc subId expiry autoRenew
                        yield! groupSeats |> Seq.map (fun s -> seatRowDoc s isFreelancer forcedUsername)
                    })
            |> Doc.Concat)
            SeatsVar.View SubsVar.View State.UserVar.View
        |> Doc.EmbedView

    let SeatsBody : Doc =
        seatGroupsDoc