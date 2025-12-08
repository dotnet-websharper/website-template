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
                        showToast $"GitHub user '{username}' not found"
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

    let private toggleAutoRenew (subId: string) (expiry: string) (currentAutoRenew: bool) (loading: Var<bool>) =
        async {
            loading.Value <- true
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

    let private groupHeaderDoc (subId: string) (expiry: string) (autoRenew: bool) : Doc =
        let isProcessing = Var.Create false

        let baseBtn = "relative inline-flex h-5 w-9 items-center rounded-full border text-xs transition-colors "
        let btnClasses =
            if autoRenew then baseBtn + "bg-emerald-500 border-emerald-500"
            else baseBtn + "bg-gray-300 border-gray-400 dark:bg-gray-700 dark:border-gray-600"

        let baseDot = "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform "
        let dotClasses =
            if autoRenew then baseDot + "translate-x-4"
            else baseDot + "translate-x-0"

        Templates.ManageSubscriptionTemplate.SeatGroupRow()
            .Expiry(
                text expiry 
                |> BindSmoothLoader "w-24 h-5" isProcessing.View
            )
            .ToggleClasses(btnClasses)
            .DotClasses(dotClasses)
            .ToggleAutoRenew(fun _ -> 
                toggleAutoRenew subId expiry autoRenew isProcessing
            )
            .Doc()

    let private seatGroupsDoc : Doc =
        View.Map2 (fun seats (subs: SubRecord array) ->
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

                    let expiry = groupSeats.[0].expiry
                    let autoRenew = groupSeats.[0].autoRenew
                    
                    seq {
                        yield groupHeaderDoc subId expiry autoRenew
                        yield! groupSeats |> Seq.map (fun s -> seatRowDoc s isFreelancer)
                    })
            |> Doc.Concat)
            SeatsVar.View SubsVar.View
        |> Doc.EmbedView

    let SeatsBody : Doc =
        seatGroupsDoc