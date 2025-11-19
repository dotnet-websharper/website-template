namespace WebSharperWebsite

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client

type Interval =
    | Month
    | Year

type PriceInfo = {
    Amount: float
    Currency: string
}

type PlanEntry = {
    Name: string option
    Description: string option
    Month: PriceInfo option
    Year: PriceInfo option
}

type Catalog = {
    Pro: PlanEntry
    Freelancer: PlanEntry
}

type PlanPriceRecord = {
    planId: string
    code: string
    name: string
    description: string option
    isPerSeat: bool
    maxSeats: int option
    interval: string          // "month" | "year"
    currency: string          // e.g. "usd"
    unitAmountCents: int      // per seat if isPerSeat = true, otherwise flat
    stripePriceId: string option
}

type PlansApiResponse = {
    items: PlanPriceRecord[]
}

[<JavaScript>]
module SupportPlans =

    let intervalAsString = function
        | Month -> "month"
        | Year  -> "year"

    let intervalTotalLabel = function
        | Month -> "Total (monthly)"
        | Year  -> "Total (yearly)"

    let intervalProPriceLabel = function
        | Month -> "/ seat / month"
        | Year  -> "/ seat / year"

    let intervalFreePriceLabel = function
        | Month -> "/ month"
        | Year  -> "/ year"

    let usd (n: float) : string =
        "$" + n.ToString("N0", Globalization.CultureInfo("en-US"))

    let clampSeats (v: int) =
        max 1 (min 999 v)

    let private isNotBlank (s: string) =
        not (String.IsNullOrWhiteSpace s)

    let private nonEmptyOpt (s: obj) : string option =
        if isNull s then None
        else
            let s = string s
            if isNotBlank s then Some s else None

    let private fallbackPro : PlanEntry =
        {
            Name = Some "Professional"
            Description = Some "Assign GitHub usernames after purchase"
            Month = Some { Amount = 250.0; Currency = "USD" }
            Year = Some { Amount = 2500.0; Currency = "USD" }
        }

    let private fallbackFreelancer : PlanEntry =
        {
            Name = Some "Freelancer"
            Description = Some "Ideal for solo developers"
            Month = Some { Amount = 30.0; Currency = "USD" }
            Year = Some { Amount = 300.0; Currency = "USD" }
        }

    let private catalogVar : Var<Catalog> =
        Var.Create { Pro = fallbackPro; Freelancer = fallbackFreelancer }

    let private intervalVar : Var<Interval> =
        Var.Create Interval.Year

    // Exposed so it can bind to an input element
    let SeatCountText : Var<string> = Var.Create "1"

    let SeatCount : View<int> =
        SeatCountText.View
        |> View.Map (fun s ->
            let s = (if isNull s then "" else s).Trim()
            if s = "" then 1
            else
                match Int32.TryParse s with
                | true, n -> clampSeats n
                | _ -> 1
        )


    let private getEntry (cat: Catalog) (code: string) : PlanEntry =
        match code.ToLower() with
        | "pro" -> cat.Pro
        | "freelancer" -> cat.Freelancer
        | _ -> fallbackPro

    let private getPrice (entry: PlanEntry) (interval: Interval) : PriceInfo option =
        match interval with
        | Month -> entry.Month
        | Year -> entry.Year

    let private fallbackAmount (fallback: PlanEntry) (interval: Interval) =
        match interval with
        | Month -> fallback.Month.Value.Amount
        | Year -> fallback.Year.Value.Amount

    let private effectiveAmount (fallback: PlanEntry) (entry: PlanEntry) (interval: Interval) =
        getPrice entry interval
        |> Option.map (fun p -> p.Amount)
        |> Option.defaultValue (fallbackAmount fallback interval)

    let private effectiveName defaultName (entry: PlanEntry) =
        entry.Name
        |> Option.filter isNotBlank
        |> Option.defaultValue defaultName

    let private effectiveDescription defaultDesc (entry: PlanEntry) =
        entry.Description
        |> Option.filter isNotBlank
        |> Option.defaultValue defaultDesc

    let private currencyFor (planCode: string) (cat: Catalog) (interval: Interval) : string =
        let entry = getEntry cat planCode

        let anyPrice =
            getPrice entry interval
            |> Option.orElse entry.Month
            |> Option.orElse entry.Year

        anyPrice
        |> Option.map (fun p -> p.Currency.ToUpper())
        |> Option.defaultValue "USD"


    let ProName : View<string> =
        catalogVar.View
        |> View.Map (fun cat ->
            effectiveName "Professional" cat.Pro
        )

    let FreeName : View<string> =
        catalogVar.View
        |> View.Map (fun cat ->
            effectiveName "Freelancer" cat.Freelancer
        )


    let ProPriceAmount : View<string> =
        View.Map2 (fun cat interval ->
            effectiveAmount fallbackPro cat.Pro interval
            |> usd
        ) catalogVar.View intervalVar.View

    let FreePriceAmount : View<string> =
        View.Map2 (fun cat interval ->
            effectiveAmount fallbackFreelancer cat.Freelancer interval
            |> usd
        ) catalogVar.View intervalVar.View

    let ProPriceLabel : View<string> =
        intervalVar.View
        |> View.Map intervalProPriceLabel

    let FreePriceLabel : View<string> =
        intervalVar.View
        |> View.Map intervalFreePriceLabel

    let ProTotalLabel : View<string> =
        intervalVar.View
        |> View.Map intervalTotalLabel

    let FreeTotalLabel : View<string> =
        intervalVar.View
        |> View.Map intervalTotalLabel


    let ProTotalAmount : View<string> =
        View.Map3 (fun cat interval seats ->
            let seats = clampSeats seats
            let perSeat = effectiveAmount fallbackPro cat.Pro interval
            usd (perSeat * float seats)
        ) catalogVar.View intervalVar.View SeatCount

    let FreeTotalAmount : View<string> =
        View.Map2 (fun cat interval ->
            effectiveAmount fallbackFreelancer cat.Freelancer interval
            |> usd
        ) catalogVar.View intervalVar.View


    let ProNote : View<string> =
        View.Map2 (fun cat interval ->
            let entry = cat.Pro
            let cur = currencyFor "pro" cat interval
            let desc = effectiveDescription "Assign GitHub usernames after purchase" entry
            $"{desc}. Prices in {cur}."
        ) catalogVar.View intervalVar.View

    let FreeNote : View<string> =
        View.Map2 (fun cat interval ->
            let entry = cat.Freelancer
            let cur = currencyFor "freelancer" cat interval
            let desc = effectiveDescription "Ideal for solo developers" entry
            $"{desc}. Prices in {cur}."
        ) catalogVar.View intervalVar.View


    let BillMonthAttr () : Attr =
        let v =
            intervalVar.View
            |> View.Map (function
                | Month -> "true"
                | Year  -> "false"
            )
        Attr.Concat [
            Attr.Dynamic "data-active" v
            Attr.Dynamic "aria-pressed" v
        ]

    let BillYearAttr () : Attr =
        let v =
            intervalVar.View
            |> View.Map (function
                | Month -> "false"
                | Year  -> "true"
            )
        Attr.Concat [
            Attr.Dynamic "data-active" v
            Attr.Dynamic "aria-pressed" v
        ]


    let ProCheckoutAttr () : Attr =
        Attr.Dynamic "href" (
            View.Map2 (fun interval seats ->
                let seats = clampSeats seats
                let intervalStr = intervalAsString interval
                $"./checkout.html?plan=pro&interval={intervalStr}&seats={seats}"
            ) intervalVar.View SeatCount
        )

    let FreeCheckoutAttr () : Attr =
        Attr.Dynamic "href" (
            intervalVar.View
            |> View.Map (fun interval ->
                let intervalStr = intervalAsString interval
                $"./checkout.html?plan=freelancer&interval={intervalStr}&seats=1"
            )
        )


    let AdjustSeats (delta: int) (value: Var<string>) =
        let current =
            value.Value
            |> fun s -> if isNull s then "" else s.Trim()
            |> fun s ->
                match Int32.TryParse s with
                | true, n -> n
                | _       -> 1

        let next = current + delta |> clampSeats
        value.Value <- string next

    let OnBillMonth () =
        intervalVar.Value <- Month

    let OnBillYear () =
        intervalVar.Value <- Year

    let OnSeatMinus () =
        AdjustSeats -1 SeatCountText

    let OnSeatPlus () =
        AdjustSeats 1 SeatCountText


    [<Literal>]
    let private CacheKey = "planprices"

    let private loadCache () : PlansApiResponse option =
        try
            let raw: string = JS.Window.SessionStorage.GetItem(CacheKey)
            if isNull (box raw) || String.IsNullOrWhiteSpace raw then
                None
            else
                let parsed : PlansApiResponse = JSON.Parse(raw) |> As
                Some parsed
        with _ ->
            None

    let private saveCache (response: PlansApiResponse) =
        try
            let json = JSON.Stringify(box response)
            JS.Window.SessionStorage.SetItem(CacheKey, json)
        with _ -> ()

    let private updateEntryFromItem (entry: PlanEntry) (intervalStr: string) (pi: PriceInfo) (nameOpt: string option) (descOpt: string option) =
        let entry =
            {
                entry with
                    Name =
                        match nameOpt, entry.Name with
                        | Some n, _ -> Some n
                        | None, e -> e
                    Description =
                        match descOpt, entry.Description with
                        | Some d, _ -> Some d
                        | None, e -> e
            }
        match intervalStr with
        | "month" -> { entry with Month = Some pi }
        | "year"  -> { entry with Year  = Some pi }
        | _       -> entry

    let private buildCatalog (items: PlanPriceRecord[]) =
        let updateFromItem (catalog: Catalog) (item: PlanPriceRecord) =
            let code = (item.code |> string).ToLower()
            let intervalStr = (item.interval |> string).ToLower()

            let amountCents = item.unitAmountCents
            let currency = if String.IsNullOrWhiteSpace item.currency then "usd" else item.currency

            let amount = float amountCents / 100.0
            let pi = { Amount = amount; Currency = currency.ToUpper() }

            let nameOpt =
                item.name
                |> nonEmptyOpt

            let descOpt =
                match item.description with
                | Some d -> nonEmptyOpt d
                | None   -> None

            match code with
            | "pro" ->
                { catalog with Pro = updateEntryFromItem catalog.Pro intervalStr pi nameOpt descOpt }
            | "freelancer" ->
                { catalog with Freelancer = updateEntryFromItem catalog.Freelancer intervalStr pi nameOpt descOpt }
            | _ -> catalog

        catalogVar.Value <- Array.fold updateFromItem catalogVar.Value items

    let fetchFromApi () : Async<PlansApiResponse option> =
        async {
            try
                let! resp =
                    JS.Fetch(
                        AuthClient.API + "/plans/prices",
                        RequestOptions(
                            Method = "GET",
                            Credentials = RequestCredentials.Include,
                            Headers = AuthClient.header()
                        )
                    )
                    |> Promise.AsAsync

                if not resp.Ok then
                    return None
                else
                    let! data = resp.Json() |> Promise.AsAsync
                    let parsed : PlansApiResponse = data |> As
                    return Some parsed
            with _ ->
                return None
        }

    let LoadOrFetchPlans () : Async<PlansApiResponse option> =
        async {
            match loadCache () with
            | Some cached ->
                return Some cached
            | None ->
                let! respOpt = fetchFromApi ()
                match respOpt with
                | Some resp when resp.items.Length > 0 ->
                    saveCache resp
                    return Some resp
                | _ ->
                    return None
        }

    let HydrateCatalog () : Async<unit> =
        async {
            let! respOpt = LoadOrFetchPlans ()
            match respOpt with
            | Some resp -> buildCatalog resp.items
            | None -> ()
        }
