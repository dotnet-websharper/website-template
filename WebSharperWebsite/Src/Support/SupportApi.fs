namespace WebSharperWebsite.Support

open WebSharper
open WebSharper.JavaScript

open WebSharperWebsite

open Types
open State

[<JavaScript>]
module Api =

    [<Literal>]
    let private CacheKey = "planprices"

    let private loadCache () : PlansApiResponse option =
        try
            let raw: string = JS.Window.SessionStorage.GetItem(CacheKey)
            if isNull (box raw) || System.String.IsNullOrWhiteSpace raw then
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
            let currency = if System.String.IsNullOrWhiteSpace item.currency then "usd" else item.currency

            let amount = float amountCents / 100.0
            let pi = { Amount = amount; Currency = currency.ToUpper() }

            let nameOpt = item.name |> nonEmptyOpt

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
