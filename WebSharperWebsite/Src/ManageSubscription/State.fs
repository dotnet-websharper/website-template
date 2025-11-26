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
        StateVar.LensAuto (fun s -> s.user)
        

    let SubsVar : Var<SubRecord array> =
        StateVar.LensAuto (fun s -> s.subs)
        

    let CurrentSubIdVar : Var<string> =
        StateVar.LensAuto (fun s -> s.currentSubId)
        

    let SeatsVar : Var<SeatRecord array> =
        StateVar.LensAuto (fun s -> s.seats)
        

    let InvoicesVar : Var<InvoiceRecord array> =
        StateVar.LensAuto (fun s -> s.invoices)
        

    let BillingVar : Var<BillingRecord option> =
        StateVar.LensAuto (fun s -> s.billing)

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
