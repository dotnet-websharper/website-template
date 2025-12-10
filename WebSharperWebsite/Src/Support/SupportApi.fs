namespace WebSharperWebsite.Support

open WebSharper
open WebSharper.JavaScript

open WebSharperWebsite
open WebSharperWebApi

open Types
open State

[<JavaScript>]
module Api =

    [<Literal>]
    let private CacheKey = "planprices"

    let private loadCache () : PlanPrice[] option =
        try
            let raw: string = JS.Window.SessionStorage.GetItem(CacheKey)
            if isNull (box raw) || System.String.IsNullOrWhiteSpace raw then
                None
            else
                let parsed : PlanPrice[] = JSON.Parse(raw) |> As
                Some parsed
        with _ ->
            None

    let private saveCache (response: PlanPrice[]) =
        try
            let json = JSON.Stringify(box response)
            JS.Window.SessionStorage.SetItem(CacheKey, json)
        with _ -> ()

    let private buildCatalog (items: PlanPrice[]) =
        
        // Group by code (case-insensitive)
        let grouped = 
            items
            |> Array.groupBy (fun item -> item.code.ToLower())

        // Map to PlanViewModel
        let plans = 
            grouped
            |> Array.map (fun (code, rows) ->
                let first = rows.[0]

                let findPrice (interval: string) =
                    rows
                    |> Array.tryFind (fun planPrice -> planPrice.interval = interval)
                    |> Option.map (fun planPrice -> 
                        { 
                            Amount = float planPrice.unitAmountCents / 100.0
                            Currency = planPrice.currency.ToUpper() 
                        }
                    )
                {
                    Id = code
                    Name = first.name
                    Description = first.description |> Option.defaultValue ""
                    IsPerSeat = first.isPerSeat
                    MaxSeats = first.maxSeats
                    MonthPrice = findPrice "month"
                    YearPrice = findPrice "year"
                }
            )
            |> Array.sortBy (fun planView -> 
                 match planView.YearPrice with Some priceInfo -> priceInfo.Amount | _ -> 0.0
            )
            |> Array.toList

        catalogVar.Value <- { Plans = plans }

    let FetchFromApi () : Async<PlanPrice[] option> =
        async {
            try
                let! resp =
                    Remote<IRemotingContract>.GetPlanPrices()

                return Some resp
            with _ ->
                return None
        }

    let LoadOrFetchPlans () : Async<PlanPrice[] option> =
        async {
            match loadCache () with
            | Some cached ->
                return Some cached
            | None ->
                let! respOpt = FetchFromApi ()
                match respOpt with
                | Some resp when resp.Length > 0 ->
                    saveCache resp
                    return Some resp
                | _ ->
                    return None
        }

    let HydrateCatalog () : Async<unit> =
        async {
            IsLoadingVar.Value <- true
            
            try
                let! respOpt = LoadOrFetchPlans ()
                match respOpt with
                | Some resp -> buildCatalog resp
                | None -> ()
            finally
                IsLoadingVar.Value <- false
        }

    [<Literal>]
    let private ContactEndpoint = "https://api.intellifactory.com/api/contact"

    let SendContact (form: ContactForm) : Async<bool> =
        async {
            let formData = FormData()
            formData.Append("subject", form.subject)
            formData.Append("message", form.message)
            formData.Append("email", form.email)
            formData.Append("name", form.name)
            formData.Append("country", form.country)

            try
                let! resp =
                    JS.Fetch(
                        ContactEndpoint,
                        RequestOptions(
                            Method = "POST",
                            Body = formData
                        )
                    )
                    |> Promise.AsAsync

                return resp.Ok
            with _ ->
                return false
        }
