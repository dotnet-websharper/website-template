namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.UI
open Types

[<JavaScript>]
module State =

    type Model = Types.State

    let StateVar : Var<Model> =
        Var.Create {
            user = None
            subs = [||]
            currentSubId = ""
            seats = [||]
            invoices = [||]
            billing = None
        }


    let UserVar : Var<User option> =
        StateVar.Lens
            (fun s -> s.user)
            (fun s v -> { s with user = v })
        

    let SubsVar : Var<SubRecord array> =
        StateVar.Lens
            (fun s -> s.subs)
            (fun s v -> { s with subs = v })
        

    let CurrentSubIdVar : Var<string> =
        StateVar.Lens
            (fun s -> s.currentSubId)
            (fun s v -> { s with currentSubId = v })
        

    let SeatsVar : Var<SeatRecord array> =
        StateVar.Lens
            (fun s -> s.seats)
            (fun s v -> { s with seats = v })
        

    let InvoicesVar : Var<InvoiceRecord array> =
        StateVar.Lens
            (fun s -> s.invoices)
            (fun s v -> { s with invoices = v })
        

    let BillingVar : Var<BillingRecord option> =
        StateVar.Lens
            (fun s -> s.billing)
            (fun s v -> { s with billing = v })
        

    let formatMoney (amount: int) (currency: string) =
        let amountF = float amount / 100.0
        match currency.ToLower() with
        | "usd" -> sprintf "$%.2f" amountF
        | "eur" -> sprintf "€%.2f" amountF
        | "gbp" -> sprintf "£%.2f" amountF
        | _     -> sprintf "%.2f %s" amountF currency

    let parseUsernames (str: string) =
        str.Split([| ' '; '\t'; '\r'; '\n'; ',' |], System.StringSplitOptions.RemoveEmptyEntries)
        |> Array.map (fun x -> x.Trim())
        |> Array.filter (System.String.IsNullOrWhiteSpace >> not)
        |> fun a -> if a.Length > 999 then a.[0..998] else a
