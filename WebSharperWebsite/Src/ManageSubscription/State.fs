namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom
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

    let getRouteFromHash () =
        let hash = JS.Window.Location.Hash
        let normalizedHash = if hash.StartsWith("#") then hash.Substring(1) else hash
        if normalizedHash = "" then "subs" else normalizedHash

    let navigate (hash: string) =
        let target = "#" + hash
        if JS.Window.Location.Hash <> target then
            JS.Window.Location.Hash <- target

    let parseUsernames (str: string) =
        str.Split([| ' '; '\t'; '\r'; '\n'; ',' |], System.StringSplitOptions.RemoveEmptyEntries)
        |> Array.map (fun x -> x.Trim())
        |> Array.filter (System.String.IsNullOrWhiteSpace >> not)
        |> fun a -> if a.Length > 999 then a.[0..998] else a
