namespace WebSharperWebsite.ManageSubscription

open WebSharper
open Types

[<JavaScript>]
module State =

    let mutable state : State = {
        user = null
        subs = [||]
        currentSubId = ""
        seats = [||]
        invoices = [||]
        billing = None
    }

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
