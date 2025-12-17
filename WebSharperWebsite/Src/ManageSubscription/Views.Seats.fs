namespace WebSharperWebsite.ManageSubscription

open System
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

    let RefreshSubsAndSeats () =
        async {
            let! subs = Api.GetSubscriptions()

            let sortedSubs =
                subs
                |> Array.sortBy (fun sub ->
                    // Score: 0 = Top (Active), 1 = Bottom (Canceled/Unpaid)                    
                    let score =
                        match sub.status with
                        | "canceled" | "unpaid" -> 1 
                        | _ -> 0 
                  
                    score, sub.currentPeriodEnd
                )

            let subsWithSeats =
                sortedSubs
                |> Array.map (fun sub ->
                    // if existing subscription, try to reuse existing seat records to preserve UI state
                    match SubsVar.Value |> Array.tryFind (fun s -> s.data.subscriptionId = sub.subscriptionId) with 
                    | Some existingSub when sub.githubAssignedNames.Length = existingSub.seats.Length  ->
                        { existingSub with
                            data = sub
                            seats = 
                                (sub.githubAssignedNames, existingSub.seats) 
                                ||> Array.iter2 (fun a seat ->
                                    seat.username.Value <- a |> Option.defaultValue ""
                                    seat.isAssigned.Value <- Option.isSome a
                                )
                                existingSub.seats
                        }
                    | _ ->
                        {
                            data = sub
                            autoRenew = Var.Create (not sub.cancelAtPeriodEnd)
                            isProcessing = Var.Create false
                            seats = 
                                sub.githubAssignedNames
                                |> Array.mapi (fun i a ->
                                    {
                                        seatNo = i + 1
                                        username = Var.Create (a |> Option.defaultValue "")
                                        isAssigned = Var.Create (Option.isSome a)
                                        isProcessing = Var.Create false
                                    }
                                )
                        }
                )

            SubsVar.Value <- subsWithSeats
        }

    // -----------------------------
    // Actions
    // -----------------------------

    let private verifyGitHubUser (username: string) =
        async {
            let! response =  JS.Fetch("https://api.github.com/users/" + username) |> Promise.AsAsync
            return response.Ok
        }

    let private assignSeat (subId: Guid) (seat: SeatRecord) (username: string) =
        if not (System.String.IsNullOrWhiteSpace username) then
            async {
                seat.isProcessing.Value <- true
                try
                    let! exists = verifyGitHubUser username
                    if exists then
                        let! ok = Api.AssignSeat subId seat.seatNo username
                        if ok then
                            seat.isAssigned.Value <- true
                            showToast "Updated"
                    else
                        Utils.alertError $"GitHub user '{username}' not found"
                finally
                    seat.isProcessing.Value <- false
            }
            |> Async.StartImmediate

    let private unassignSeat (subId: Guid) (seat: SeatRecord) (username: string) =
        async {
            seat.isProcessing.Value <- true
            try
                let! ok = Api.UnassignSeat subId seat.seatNo username
                if ok then
                    seat.username.Value <- ""
                    seat.isAssigned.Value <- false
                    showToast "Updated"
            finally
                seat.isProcessing.Value <- false
        }
        |> Async.StartImmediate

    let private toggleAutoRenew (sub: SubRecord) =
        async {
            sub.isProcessing.Value <- true
            try
                let setCancelAtPeriodEnd = sub.autoRenew.Value
                let! ok = Api.SetAutoRenew sub.data.subscriptionId setCancelAtPeriodEnd
            
                if ok then
                    sub.autoRenew.Value <- not setCancelAtPeriodEnd
                    showToast "Updated"
            finally
                sub.isProcessing.Value <- false
        }
        |> Async.StartImmediate

    // -----------------------------
    // Small helpers
    // -----------------------------

    let private seatBadge (isAssigned: bool) : Doc =
        let baseClass =
            "inline-flex items-center rounded-full border px-2 py-0.5 text-xs "
        
        let cls =
            if isAssigned then
                baseClass + "border-emerald-300 text-emerald-700 dark:border-emerald-700/40 dark:text-emerald-300"
            else
                baseClass + "border-gray-300 text-gray-600 dark:border-white/10 dark:text-gray-300"

        span [ attr.``class`` cls ] [ text (if isAssigned then "assigned" else "unassigned") ]

    let private usernameAttr (seat: SeatRecord) (isLocked: bool) : Attr =
        if isLocked then
            Attr.Create "readonly" "" 
        else
            Attr.DynamicPred "readonly" seat.isAssigned.View (View.Const "") 

    let private assignButtonAttr (seat: SeatRecord) (isLocked: bool) (loading: View<bool>) : Attr =
        if isLocked then
            attr.style "display: none"
        else
            Attr.Concat [
                Attr.DynamicClassPred "hidden" seat.isAssigned.View
                Attr.DynamicClassPred "disabled" loading    
            ]

    let private unassignButtonAttr (seat: SeatRecord) (isLocked: bool) (loading: View<bool>) : Attr =
        if isLocked then
            attr.style "display: none"
        else
            Attr.Concat [
                Attr.DynamicClassPred "hidden" (seat.isAssigned.View.Map(not))
                Attr.DynamicProp "disabled" loading
                Attr.DynamicClassPred "opacity-50 cursor-not-allowed" loading
            ]

    let AddSeatsButtonAttr : Attr =
        SubsVar.View
        |> View.Map (fun subs ->
            let isFreelancer = 
                subs |> Array.exists (fun s -> s.data.planName.ToLower().Contains("freelancer"))
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

    let private seatRowDoc (seat: SeatRecord) (subData: Subscription) (isLocked: bool) : Doc =

        let isProcessingView = seat.isProcessing.View

        Templates.ManageSubscriptionTemplate.SeatRow()
            .SeatLabel($"#{seat.seatNo}")
            
            .UsernameWidget(
                Doc.InputType.Text [
                    attr.``class`` "w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm"
                    attr.placeholder "github-username"
                    usernameAttr seat isLocked
                ] seat.username
                |> BindSmoothLoader "w-full h-8" isProcessingView
            )
            
            .StatusBadge(
                seat.isAssigned.View.Doc(seatBadge)
                |> BindSmoothLoader "w-16 h-6" isProcessingView
            )
            
            .Expiry(
                text subData.currentPeriodEnd
                |> BindSmoothLoader "w-24 h-5" isProcessingView
            )

            .AssignButtonAttr(assignButtonAttr seat isLocked isProcessingView)
            .UnassignButtonAttr(unassignButtonAttr seat isLocked isProcessingView)
            
            .AssignSeat(fun _ ->
                let username = seat.username.Value.Trim()
                assignSeat subData.subscriptionId seat username
            )
            .UnassignSeat(fun _ ->
                if not isLocked then
                    let username = seat.username.Value.Trim()
                    unassignSeat subData.subscriptionId seat username
            )
            .Doc()

    let private groupHeaderDoc (sub: SubRecord) : Doc =

        let subData = sub.data

        let baseBtn = "relative inline-flex h-5 w-9 items-center rounded-full border text-xs transition-colors "
        let baseDot = "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform "

        let isHidden = 
            subData.status = "canceled" || subData.status = "unpaid"

        let displayText = 
            V (
                if isHidden then 
                    "Expired"
                elif not sub.autoRenew.V then
                    "Expires" 
                else 
                    "Renews"
            )

        let wrapperAttr = 
            if isHidden then 
                attr.``class`` "hidden"
            else 
                Attr.Empty

        let toggleClassesView = 
            V (
                if sub.isProcessing.V then
                    baseBtn + "bg-gray-200 border-gray-200 dark:bg-gray-700 dark:border-gray-700 animate-pulse pointer-events-none cursor-wait"
                else
                    if sub.autoRenew.V then baseBtn + "bg-emerald-500 border-emerald-500"
                    else baseBtn + "bg-gray-300 border-gray-400 dark:bg-gray-700 dark:border-gray-600"
            )

        let dotClassesView = 
            V (
                if sub.isProcessing.V then
                    baseDot + "translate-x-0 opacity-50"
                elif sub.autoRenew.V then 
                    baseDot + "translate-x-4"
                else 
                    baseDot + "translate-x-0"
            )


        Templates.ManageSubscriptionTemplate.SeatGroupRow()
            .ExpiryAndSeatCount(
                text $"{displayText.V} on {subData.currentPeriodEnd} ({subData.seats} seats)"
                |> BindSmoothLoader "w-58 h-5" sub.isProcessing.View
            )
            .GroupStatusBadge(
                renderGroupStatusBadge subData.status
                |> BindSmoothLoader "w-20 h-5" sub.isProcessing.View
            )
            .AutoRenewWrapper(wrapperAttr)
            .ToggleClasses(toggleClassesView)
            .DotClasses(dotClassesView)
            .ToggleAutoRenew(fun _ -> 
                if not isHidden then
                    toggleAutoRenew sub
            )
            .Doc()

    let private seatGroupsDoc : Doc =

        let getSubKey (sub: SubRecord) = 
            // seats and cancel status we handle separately, we set them to constants so we don't re-render if everything else stays the same
            { sub.data with 
                githubAssignedNames = [||] 
                cancelAtPeriodEnd = false
            }

        SubsVar.View.DocSeqCached(getSubKey, fun (sub: SubRecord) ->

            let subData = sub.data

            let isFreelancer = subData.planName.ToLower().Contains("freelancer")
            let isAccessRevoked = subData.status = "canceled" || subData.status = "unpaid"

            Console.Log("Rendering seats for subscription", sub)

            Doc.Concat [
                groupHeaderDoc sub

                if not isAccessRevoked then
                    sub.seats
                    |> Array.map (fun s -> seatRowDoc s subData isFreelancer)
                    |> Doc.Concat
            ] 

        )

    let SeatsBody : Doc =
        seatGroupsDoc