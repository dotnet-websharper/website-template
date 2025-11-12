namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open Types
open State
open WebSharperWebsite.Utils

[<JavaScript>]
module ViewsSubsSummary =
    // Subscription select
    let selectedSubId =
        let initial =
            if System.String.IsNullOrEmpty state.currentSubId then
                state.subs |> Array.tryHead |> Option.map (fun s -> s.id) |> Option.defaultValue ""
            else state.currentSubId
        Var.Create initial

    let subsModel =
        ListModel.Create (fun (s: SubRecord) -> s.id) state.subs

    let private subOptionV (key: string) (subV: View<SubRecord>) : Doc =
        let labelV = subV |> View.Map (fun s -> s.label)
        option [
            attr.value key
            Attr.DynamicBool "selected" (selectedSubId.View |> View.Map ((=) key))
        ] [ Doc.TextView labelV ]

    let private subsOptionsDoc =
        subsModel.View
        |> Doc.BindSeqCachedViewBy (fun s -> s.id) subOptionV

    let mountSubscriptionSelect (ui: UiRefs) =
        if not (isNull ui.subscriptionSelect) then
            Doc.Run ui.subscriptionSelect subsOptionsDoc
            View.Sink (fun id -> ui.subscriptionSelect?value <- id) selectedSubId.View

    let refreshSubscriptions (subs: SubRecord[]) =
        subsModel.Set subs
        if subs |> Array.exists (fun s -> s.id = selectedSubId.Value) |> not then
            selectedSubId.Value <- subs |> Array.tryHead |> Option.map (fun s -> s.id) |> Option.defaultValue ""

    // Subscription summary
    let private subsV : View<SubRecord[]> =
        subsModel.View |> View.Map Seq.toArray

    let private usedV : View<int> =
        ViewsSeats.seatsModel.View
        |> View.Map (fun seats ->
            seats |> Seq.filter (fun x -> x.status = "assigned") |> Seq.length)

    let private currentSubV : View<SubRecord option> =
        View.Map2
            (fun selId subsArr -> subsArr |> Array.tryFind (fun s -> s.id = selId))
            selectedSubId.View
            subsV

    let private totalV : View<int> = 
        currentSubV |> View.Map (function Some s -> s.totalSeats | None -> 0)

    let private planV : View<string> = 
        currentSubV |> View.Map (function Some s -> s.plan | None -> "-")

    let private renewsAtV : View<string> = 
        currentSubV |> View.Map (function Some s -> s.renewsAt | None -> "-")

    let private statusV : View<string> = 
        currentSubV |> View.Map (function Some s -> s.status | None -> "-")

    let private usedPercentV : View<int> =
        View.Map2 (fun used total ->
            if total = 0 then 
                0
            else 
                int (System.Math.Round(float used / float total * 100.0))
        )
            usedV totalV

    let mountSummary (ui: UiRefs) =
        if not (isNull ui.planName) then 
            View.Sink (fun s -> ui.planName.TextContent <- s) planV

        if not (isNull ui.seatsUsed) then
            View.Sink (fun n -> ui.seatsUsed.TextContent <- string n) usedV

        if not (isNull ui.seatsTotal) then
            View.Sink (fun n -> ui.seatsTotal.TextContent <- string n) totalV

        let renewsAtEl = byId "renewsAt"
        let subStatusEl = byId "subStatus"
        if not (isNull renewsAtEl) then 
            View.Sink (fun s -> renewsAtEl.TextContent <- s) renewsAtV

        if not (isNull subStatusEl) then 
            View.Sink (fun s -> subStatusEl.TextContent <- s) statusV

        if not (isNull ui.seatProgress) then
            View.Sink (fun p -> ui.seatProgress?style?width <- string p + "%") usedPercentV

