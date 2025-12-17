namespace WebSharperWebsite.ManageSubscription

open System
open WebSharper
open WebSharper.UI
open Types

[<JavaScript>]
module State =

    let UserVar : Var<User option> =
        Var.Create None
        
    let SubsVar : Var<SubRecord[]> =
        Var.Create [||]
        
    let InvoicesVar : Var<InvoiceRecord array> =
        Var.Create [||]

    let BillingVar : Var<BillingRecord option> =
        Var.Create None

    let CustomerPortalLinkVar : Var<option<string>> = Var.Create None        

    let GitHubOrgVar : Var<option<WebSharperWebApi.GitHubOrg>> = Var.Create None

    let formatMoney (amount: int) (currency: string) =
        let amountF = float amount / 100.0
        match currency.ToLower() with
        | "usd" -> sprintf "$%.2f" amountF
        | "eur" -> sprintf "€%.2f" amountF
        | "gbp" -> sprintf "£%.2f" amountF
        | _ -> sprintf "%.2f %s" amountF currency

    let parseUsernames (str: string) =
        str.Split([| ' '; '\t'; '\r'; '\n'; ',' |], System.StringSplitOptions.RemoveEmptyEntries)
        |> Array.map (fun x -> x.Trim())
        |> Array.filter (System.String.IsNullOrWhiteSpace >> not)
        |> fun a -> if a.Length > 999 then a.[0..998] else a
