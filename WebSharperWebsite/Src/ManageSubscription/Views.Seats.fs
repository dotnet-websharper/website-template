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

    type SeatStatus =
        | Assigned
        | Unassigned

        member this.AsString =
            match this with
            | Assigned -> "assigned"
            | Unassigned -> "unassigned"

        static member FromString (s: string) =
            match s.ToLower() with
            | "assigned" -> Assigned
            | _ -> Unassigned

    let BindSmoothLoader (widthClass: string) (isLoading: View<bool>) (content: Doc) =
        Templates.ManageSubscriptionTemplate.SmoothTextLoader()
            .WrapperClasses(widthClass) 
            .SkeletonAttr(
                [
                    Attr.DynamicClassPred "opacity-0" (isLoading |> View.Map not)
                    Attr.Class "relative z-10 pointer-events-none"
                ]
            )
            .ContentAttr(
                [
                    Attr.DynamicClassPred "opacity-0" isLoading
                    Attr.DynamicClassPred "pointer-events-none" isLoading
                ]
            )
            .Content(content)
            .Doc()

    let private refreshSeatsAsync () =
        async {
            let! newSeats = Api.GetAllSeats ()
            SeatsVar.Value <- newSeats
        }

    let RefreshSeats () =
        refreshSeatsAsync () |> Async.StartImmediate

    // -----------------------------
    // Actions
    // -----------------------------

    let private verifyGitHubUser (username: string) =
        async {
            let! response =  JS.Fetch("https://api.github.com/users/" + username) |> Promise.AsAsync
            return response.Ok
        }

    let private assignSeat (subId: string) (seatNo: int) (username: string) (loading: Var<bool>) =
        if not (System.String.IsNullOrWhiteSpace username) then
            async {
                loading.Value <- true
                try
                    let! exists = verifyGitHubUser username
                    if exists then
                        let! ok = Api.AssignSeat subId seatNo username
                        if ok then
                            do! refreshSeatsAsync ()
                            showToast "Updated"
                    else
                        Utils.alertError $"GitHub user '{username}' not found"
                finally
                    loading.Value <- false
            }
            |> Async.StartImmediate

    let private unassignSeat (subId: string) (seatNo: int) (loading: Var<bool>) =
        async {
            loading.Value <- true
            try
                let! ok = Api.UnassignSeat subId seatNo
                if ok then
                    do! refreshSeatsAsync ()
                    showToast "Updated"
            finally
                loading.Value <- false
        }
        |> Async.StartImmediate

    let private updateSeatsState (subId: string) (expiry: string) (newAutoRenew: bool) =
        let updatedSeats =
            SeatsVar.Value
            |> Array.map (fun s ->
                if s.subscriptionId = subId && s.expiry = expiry then
                    { s with autoRenew = newAutoRenew }
                else
                    s
            )
        SeatsVar.Value <- updatedSeats

    let private updateSubsState (subId: string) (newCancelAtPeriodEnd: bool) =
        let updatedSubs =
            SubsVar.Value
            |> Array.map (fun s ->
                if s.id = subId then
                    { s with status = s.status }
                else
                    s
            )
        SubsVar.Value <- updatedSubs

    let private toggleAutoRenew (subId: string) (expiry: string) (currentAutoRenew: bool) (loading: Var<bool>) =
        async {
            loading.Value <- true
            try
                let setCancelAtPeriodEnd = currentAutoRenew 
                let! ok = Api.SetAutoRenew subId setCancelAtPeriodEnd
            
                if ok then
                    let newAutoRenew = not currentAutoRenew
                    let newCancelAtPeriodEnd = not newAutoRenew

                    updateSeatsState subId expiry newAutoRenew
                    updateSubsState subId newCancelAtPeriodEnd

                    showToast "Updated"
            finally
                loading.Value <- false
        }
        |> Async.StartImmediate

    // -----------------------------
    // Small helpers
    // -----------------------------

    let private seatBadge (statusStr: string) : Doc =
        let baseClass =
            "inline-flex items-center rounded-full border px-2 py-0.5 text-xs "

        let status = SeatStatus.FromString statusStr
        
        let cls =
            match status with
            | Assigned -> 
                baseClass + "border-emerald-300 text-emerald-700 dark:border-emerald-700/40 dark:text-emerald-300"
            | Unassigned -> 
                baseClass + "border-gray-300 text-gray-600 dark:border-white/10 dark:text-gray-300"

        span [ attr.``class`` cls ] [ text status.AsString ]

    let private usernameAttr (seat: SeatRecord) (isLocked: bool) : Attr =
        let status = SeatStatus.FromString seat.status
        if isLocked || status = Assigned then 
            Attr.Create "readonly" "" 
        else 
            Attr.Empty

    let private assignButtonAttr (seat: SeatRecord) (isLocked: bool) (loading: View<bool>) : Attr =
        let status = SeatStatus.FromString seat.status
        if isLocked || status = Assigned then
            attr.style "display: none"
        else
            Attr.DynamicClassPred "disabled" loading

    let private unassignButtonAttr (seat: SeatRecord) (isLocked: bool) (loading: View<bool>) : Attr =
        let status = SeatStatus.FromString seat.status
        if status <> Assigned || isLocked then
            attr.style "display: none"
        else
            Attr.Concat [
                Attr.DynamicProp "disabled" loading
                Attr.DynamicClassPred "opacity-50 cursor-not-allowed" loading
            ]

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

    // -----------------------------
    // Template docs
    // -----------------------------

    let private renderGroupStatusBadge (status: string) : Doc =
        let statusLower = status.ToLower()
        let baseStyle = "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border"

        let colorStyle =
            match statusLower with
            | "active" -> 
                "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-900/50"
            | "past_due" -> 
                "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900/50"
            | "unpaid" -> 
                "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900/50"
            | "canceled" -> 
                "bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
            | _ -> 
                "bg-blue-50 text-blue-600 border-blue-100"

        span [ attr.``class`` (baseStyle + " " + colorStyle) ] [
            text (status.Replace("_", " "))
        ]

    let private seatRowDoc (seat: SeatRecord) (isLocked: bool) : Doc =
        let isProcessing = Var.Create false
                
        let usernameVar = Var.Create seat.username

        Templates.ManageSubscriptionTemplate.SeatRow()
            .SeatLabel($"#{seat.seatNo}")
            
            .UsernameWidget(
                Doc.InputType.Text [
                    attr.``class`` "w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm"
                    attr.placeholder "github-username"
                    usernameAttr seat isLocked
                ] usernameVar
                |> BindSmoothLoader "w-full h-8" isProcessing.View
            )
            
            .StatusBadge(
                seatBadge seat.status
                |> BindSmoothLoader "w-16 h-6" isProcessing.View
            )
            
            .Expiry(
                text seat.expiry
                |> BindSmoothLoader "w-24 h-5" isProcessing.View
            )

            .AssignButtonAttr(assignButtonAttr seat isLocked isProcessing.View)
            .UnassignButtonAttr(unassignButtonAttr seat isLocked isProcessing.View)
            
            .AssignSeat(fun _ ->
                if not isLocked then
                    let username = usernameVar.Value.Trim()
                    assignSeat seat.subscriptionId seat.seatNo (username.ToLower()) isProcessing
            )
            .UnassignSeat(fun _ ->
                unassignSeat seat.subscriptionId seat.seatNo isProcessing
            )
            .Doc()

    let private groupHeaderDoc (subId: string) (expiry: string) (autoRenew: bool) (status: string) (seatCount: int) : Doc =
        let isProcessing = Var.Create false

        let baseBtn = "relative inline-flex h-5 w-9 items-center rounded-full border text-xs transition-colors "
        let baseDot = "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform "

        let isHidden = 
            status = "canceled" || status = "unpaid"

        let displayText = 
            if isHidden then 
                "Expired"
            elif not autoRenew then
                "Expires" 
            else 
                "Renews"

        let expiryAndSeats = $"{displayText} on {expiry} ({seatCount} seats)"

        let wrapperAttr = 
            if isHidden then 
                attr.``class`` "hidden"
            else 
                Attr.Empty

        let toggleClassesView = 
            isProcessing.View
            |> View.Map (fun loading ->
                if loading then
                    baseBtn + "bg-gray-200 border-gray-200 dark:bg-gray-700 dark:border-gray-700 animate-pulse pointer-events-none cursor-wait"
                else
                    if autoRenew then baseBtn + "bg-emerald-500 border-emerald-500"
                    else baseBtn + "bg-gray-300 border-gray-400 dark:bg-gray-700 dark:border-gray-600"
            )

        let dotClassesView = 
            isProcessing.View
            |> View.Map (fun loading ->
                if loading then
                    baseDot + "translate-x-0 opacity-50"
                elif autoRenew then 
                    baseDot + "translate-x-4"
                else 
                    baseDot + "translate-x-0"
            )

        Templates.ManageSubscriptionTemplate.SeatGroupRow()
            .ExpiryAndSeatCount(
                text expiryAndSeats
                |> BindSmoothLoader "w-58 h-5" isProcessing.View
            )
            .GroupStatusBadge(
                renderGroupStatusBadge status
                |> BindSmoothLoader "w-20 h-5" isProcessing.View
            )
            .AutoRenewWrapper(wrapperAttr)
            .ToggleClasses(toggleClassesView)
            .DotClasses(dotClassesView)
            .ToggleAutoRenew(fun _ -> 
                if not isHidden then
                    toggleAutoRenew subId expiry autoRenew isProcessing
            )
            .Doc()

    let private seatGroupsDoc : Doc =
        let sortedSubIdsView =
            SubsVar.View
            |> View.Map (fun subs ->
                subs
                |> Array.sortWith (fun a b ->
                    // Score: 0 = Top (Active), 1 = Bottom (Canceled/Unpaid)
                    let getScore status = 
                        match status with
                        | "canceled" | "unpaid" -> 1 
                        | _ -> 0 
                    
                    let scoreA = getScore a.status
                    let scoreB = getScore b.status
                    
                    if scoreA <> scoreB then 
                        scoreA.CompareTo(scoreB) // Active first
                    else
                        b.renewsAt.CompareTo(a.renewsAt)
                )
                |> Array.map (fun s -> s.id) // Extract ID
                |> Array.toSeq
            )

        Doc.BindSeqCachedBy (fun id -> id) (fun subId ->
            let mySubView = 
                SubsVar.View
                |> View.Map (fun subs -> 
                    subs 
                    |> Array.tryFind (fun s -> s.id = subId)
                    |> Option.defaultValue { 
                        id = subId; label = ""; plan = ""; totalSeats = 0; 
                        renewsAt = ""; status = "active" 
                    }
                )

            let mySeatsView =
                SeatsVar.View
                |> View.Map (fun allSeats ->
                    allSeats
                    |> Array.filter (fun s -> s.subscriptionId = subId)
                    |> Array.sortBy (fun s -> s.seatNo)
                )

            View.Map2 (fun (sub: SubRecord) (seats: SeatRecord array) ->
                
                let isFreelancer = sub.plan.ToLower().Contains("freelancer")
                let isAccessRevoked = sub.status = "canceled" || sub.status = "unpaid"

                let expiry = 
                    if seats.Length > 0 then seats.[0].expiry 
                    else sub.renewsAt
                
                let autoRenew = 
                    if seats.Length > 0 then seats.[0].autoRenew 
                    else false

                Doc.Concat [
                    groupHeaderDoc sub.id expiry autoRenew sub.status sub.totalSeats
                    
                    if not isAccessRevoked then
                        seats
                        |> Array.map (fun s -> seatRowDoc s isFreelancer)
                        |> Doc.Concat
                ]
            ) mySubView mySeatsView
            |> Doc.EmbedView

        ) sortedSubIdsView

    let SeatsBody : Doc =
        seatGroupsDoc