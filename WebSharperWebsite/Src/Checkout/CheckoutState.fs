namespace WebSharperWebsite.Checkout

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI

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

    let CheckoutFormVar : Var<CheckoutForm> =
        Var.Create {
            plan = "pro"
            interval = Interval.Year
            seatsText = "1"
            email = ""
            street = ""
            city = ""
            postal = ""
            country = "hungary"
            isCompany = false
            companyName = ""
            vatin = ""
        }


    let SelectedPlanVar : Var<string> =
        CheckoutFormVar.LensAuto (fun f -> f.plan)

    let SelectedIntervalVar : Var<Interval> =
        CheckoutFormVar.LensAuto (fun f -> f.interval)

    let SeatsTextVar : Var<string> =
        CheckoutFormVar.LensAuto (fun f -> f.seatsText)

    let EmailVar : Var<string> =
        CheckoutFormVar.LensAuto (fun f -> f.email)

    let StreetVar : Var<string> =
        CheckoutFormVar.LensAuto (fun f -> f.street)

    let CityVar : Var<string> =
        CheckoutFormVar.LensAuto (fun f -> f.city)

    let PostalVar : Var<string> =
        CheckoutFormVar.LensAuto (fun f -> f.postal)

    let CountryVar : Var<string> =
        CheckoutFormVar.LensAuto (fun f -> f.country)

    let IsCompanyVar : Var<bool> =
        CheckoutFormVar.LensAuto (fun f -> f.isCompany)

    let CompanyNameVar : Var<string> =
        CheckoutFormVar.LensAuto (fun f -> f.companyName)

    let VatinVar : Var<string> =
        CheckoutFormVar.LensAuto (fun f -> f.vatin)


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
        SeatsTextVar.Value |> parseSeats |> clampSeats

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

        // Update only the relevant fields on the form
        CheckoutFormVar.Value <-
            { CheckoutFormVar.Value with
                plan = searchParams.plan
                interval = searchParams.interval
                seatsText = string searchParams.seats
            }

    // -----------------------------
    // Payload
    // -----------------------------

    let buildPayload () : CheckoutPayload =
        let form = CheckoutFormVar.Value
        let seatsToSend = form.seatsText |> parseSeats |> clampSeats

        {
            seats = seatsToSend
            email = form.email.Trim()
            interval = intervalAsString form.interval
            planCode =
                match form.plan.ToLower() with
                | "freelancer" -> "freelancer"
                | _ -> "pro"
            billingAddress =
                {
                    line1 = form.street.Trim()
                    city = form.city.Trim()
                    postal_code = form.postal.Trim()
                    country = form.country |> toIso2
                }
            company =
                if form.isCompany then
                    Some {
                        name = form.companyName.Trim()
                        vatin = form.vatin.Trim()
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
