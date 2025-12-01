namespace WebSharperWebApi

open System
open WebSharper

[<JavaScript; Prototype false>]
type User =
    {
        login : string
        avatarUrl : string
    }

[<JavaScript; Prototype false>]
type BillingData =
    {
        email : string
        line1 : string      
        city : string       
        postalCode : string 
        country : string    
        companyName : string option
        taxId : string option      
    }

[<JavaScript; Prototype false>]
type Subscription =
    {
        subscriptionId : Guid
        planName : string
        currentPeriodEnd : string
        cancelAtPeriodEnd : bool
        seats : int
        githubAssignedNames : string[]
    }

[<JavaScript; Prototype false>]
type Assignment =
    {
        subscriptionId : Guid
        githubAssignedName : string
    }

[<JavaScript; Prototype false>]
type CancellationStatus =
    {
        subscriptionId : Guid
        cancelAtPeriodEnd : bool
    }

[<JavaScript; Prototype false>]
type Invoice = 
    {
        title : string
        date : string
        amount : int
        currency : string
        status : string
        url : string
    }

[<JavaScript; Prototype false>]
type GitHubOrgStatus =
    | [<Constant "pending">] GitHubOrgPending
    | [<Constant "active">] GitHubOrgActive

    static member Parse s =
        match s with
        | "pending" -> GitHubOrgPending
        | "active" -> GitHubOrgActive
        | _ -> failwith "unrecognized GitHubOrgStatus"

    override this.ToString() = 
        match this with
        | GitHubOrgPending -> "pending"
        | GitHubOrgActive -> "active"

[<JavaScript; Prototype false>]
type GitHubOrg =
    {
        name : string option
        status : GitHubOrgStatus
    }

[<JavaScript; Prototype false>]
type CheckoutRequest = 
    { 
        planCode: string // "pro" | "freelancer"
        interval: string // "month" | "year"
        seats: int
        billingData: BillingData
    }

type ActionResult = Result<unit, string>

type IRemotingContract =
    [<Remote>]
    abstract member Me: unit -> Async<User option>

    [<Remote>]
    abstract member Logout: unit -> Async<unit>

    [<Remote>]
    abstract member GetBillingData: unit -> Async<option<BillingData>>

    [<Remote>]
    abstract member SetBillingData: BillingData -> Async<ActionResult>

    [<Remote>]
    abstract member GetSubscriptions: unit -> Async<Subscription[]>

    [<Remote>]
    abstract member GetCustomerPortalLink: unit -> Async<option<string>>

    [<Remote>]
    abstract member AddAssignment: Assignment -> Async<ActionResult>

    [<Remote>]
    abstract member RevokeAssignment: Assignment -> Async<ActionResult>

    [<Remote>]
    abstract member SetCancellationStatus: CancellationStatus -> Async<ActionResult>

    [<Remote>]
    abstract member GetInvoices: unit -> Async<Invoice[]>

    [<Remote>]
    abstract member GetGitHubOrg: unit -> Async<option<GitHubOrg>>

    [<Remote>]
    abstract member SetGitHubOrgName: string -> Async<ActionResult>

    [<Remote>]
    abstract member StripeCheckout : CheckoutRequest -> Async<Result<string, string>>

[<JavaScript>]
module Shared =
    let euVat =
        dict [
            "AT", 0.20; "BE", 0.21; "BG", 0.20; "HR", 0.25; "CY", 0.19
            "CZ", 0.21; "DK", 0.25; "EE", 0.22; "FI", 0.24; "FR", 0.20
            "DE", 0.19; "GR", 0.24; "HU", 0.27; "IE", 0.23; "IT", 0.22
            "LV", 0.21; "LT", 0.21; "LU", 0.17; "MT", 0.18; "NL", 0.21
            "PL", 0.23; "PT", 0.23; "RO", 0.19; "SK", 0.20; "SI", 0.22
            "ES", 0.21; "SE", 0.25
        ]

    let getVATRate (country: string) (isCompany: bool) (vatin: string) =

        let countryIso = 
            if isNull country then "" 
            else country.Trim().ToUpper()

        let hasVatId =
            not (String.IsNullOrWhiteSpace vatin)

        let isEU =
            euVat.ContainsKey countryIso

        if isCompany then
            if countryIso = "HU" then 0.27
            elif isEU && hasVatId then 0.0
            elif isEU && not hasVatId then euVat[countryIso]
            else 0.0
        else
            if isEU then euVat[countryIso]
            else 0.0
