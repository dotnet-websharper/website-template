namespace WebSharperWebsite.Checkout

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client

open WebSharperWebsite
open Types
open Support.Types
open Support.State
open Support.Api

[<JavaScript>]
module State =

    [<Literal>]
    let SupportPlansUrl = "/support.html#plans"

    [<Literal>]
    let ManageSubscriptionUrl = "/manage-subscription.html"

    // -----------------------------
    // Small helpers
    // -----------------------------

    let toIso2 (value: string) =
        let v = (if isNull value then "" else value).Trim().ToLower()
        let map =
            dict [
                "hungary", "HU"
                "france", "FR"
                "united-kingdom", "GB"
            ]
        match map.TryGetValue v with
        | true, iso -> iso
        | _ ->
            if v.Length >= 2 then
                v.Substring(0, 2).ToUpper()
            else
                v.ToUpper()

    // -----------------------------
    // Vars
    // -----------------------------

    let backLinkHref  = Var.Create SupportPlansUrl
    let backLinkLabel = Var.Create "Plans"

    let plansVar : Var<PlanPriceRecord[]> = Var.Create [||]

    let SelectedPlan : Var<string> = Var.Create "pro"
    let SelectedInterval : Var<Interval> = Var.Create Interval.Year
    let SeatsText : Var<string> = Var.Create "1"

    let Email : Var<string> = Var.Create ""
    let Street : Var<string> = Var.Create ""
    let City : Var<string> = Var.Create ""
    let Postal : Var<string> = Var.Create ""

    let Country : Var<string> = Var.Create "hungary"
    let IsCompany : Var<bool> = Var.Create false
    let CompanyName : Var<string> = Var.Create ""
    let Vatin : Var<string> = Var.Create ""

    let ContinueText : Var<string> = Var.Create "Continue to payment"
    let ContinueDisabled : Var<bool> = Var.Create false

    let resetContinueButton () =
        ContinueDisabled.Value <- false
        ContinueText.Value <- "Continue to payment"

    // -----------------------------
    // Seats and helpers
    // -----------------------------

    let parseSeats (s: string) =
        let s = if isNull s then "" else s.Trim()
        if s = "" then 1
        else
            match Int32.TryParse s with
            | true, n -> clampSeats n
            | _ -> 1

    let getSeatsNow () =
        SeatsText.Value |> parseSeats |> clampSeats

    // -----------------------------
    // Plans loading
    // -----------------------------

    let ensurePlans () : Async<unit> =
        async {
            let! respOpt = LoadOrFetchPlans ()
            match respOpt with
            | Some resp ->
                plansVar.Value <- resp.items
            | None -> ()
        }

    // -----------------------------
    // Query parameters
    // -----------------------------

    let readParams () : SearchParams =
        let queryParameters = new URLSearchParams(JS.Window.Location.Search)

        let plan =
            match queryParameters.Get("plan").ToLower() with
            | "freelancer" -> "freelancer"
            | _ -> "pro"

        let interval =
            match queryParameters.Get("interval").ToLower() with
            | "month" -> Interval.Month
            | _ -> Interval.Year

        let seats =
            match Int32.TryParse(queryParameters.Get("seats")) with
            | true, n -> clampSeats n
            | _ -> 1

        {
            plan = plan
            interval = interval
            seats = seats
        }

    let initFromQuery () =
        let searchParams = readParams ()
        SelectedPlan.Value <- searchParams.plan
        SelectedInterval.Value <- searchParams.interval
        SeatsText.Value <- searchParams.seats |> string

    // -----------------------------
    // Payload
    // -----------------------------

    let buildPayload () : CheckoutPayload =
        let seatsToSend = getSeatsNow ()

        {
            seats = seatsToSend
            email = Email.Value.Trim()
            interval = intervalAsString SelectedInterval.Value
            planCode =
                match SelectedPlan.Value.ToLower() with
                | "freelancer" -> "freelancer"
                | _ -> "pro"
            billingAddress =
                {
                    line1 = Street.Value.Trim()
                    city = City.Value.Trim()
                    postal_code = Postal.Value.Trim()
                    country = Country.Value |> toIso2
                }
            company =
                if IsCompany.Value then
                    Some {
                        name  = CompanyName.Value.Trim()
                        vatin = Vatin.Value.Trim()
                    }
                else None
        }

    // -----------------------------
    // Back link computation
    // -----------------------------

    let computeBackLink () =
        let referrer : string = JS.Document.Referrer

        let mutable dest = SupportPlansUrl
        let mutable label = "Plans"

        if not (String.IsNullOrWhiteSpace referrer) then
            if referrer.EndsWith("/manage-subscription.html") then
                dest <- ManageSubscriptionUrl
                label <- "Manage subscription"
            elif referrer.EndsWith("/support.html") then
                dest <- SupportPlansUrl
                label <- "Plans"

        backLinkHref.Value <- dest
        backLinkLabel.Value <- label
