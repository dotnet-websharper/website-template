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
        githubAssignedNames : string option[]
    }

[<JavaScript; Prototype false>]
type Assignment =
    {
        subscriptionId : Guid
        githubAssignedName : string
        position : int
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

[<JavaScript; Prototype false>]
type PlanPrice = 
    {
        code: string
        name: string
        description: string option
        isPerSeat: bool
        maxSeats: int option
        interval: string          // "month" | "year"
        currency: string          // e.g. "usd"
        unitAmountCents: int      // per seat if isPerSeat = true, otherwise flat
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

    [<Remote>]
    abstract member GetPlanPrices : unit -> Async<PlanPrice[]>

[<JavaScript>]
module Shared =
    let euVat =
        dict [
            "AT", 20; "BE", 21; "BG", 20; "HR", 25; "CY", 19
            "CZ", 21; "DK", 25; "EE", 22; "FI", 24; "FR", 20
            "DE", 19; "GR", 24; "HU", 27; "IE", 23; "IT", 22
            "LV", 21; "LT", 21; "LU", 17; "MT", 18; "NL", 21
            "PL", 23; "PT", 23; "RO", 19; "SK", 20; "SI", 22
            "ES", 21; "SE", 25
        ]

    let getVATPercentage (country: string) (isCompany: bool) (vatin: string) =

        let countryIso = 
            if isNull country then "" 
            else country.Trim().ToUpper()

        let hasVatId =
            not (String.IsNullOrWhiteSpace vatin)

        let isEU =
            euVat.ContainsKey countryIso

        if isCompany then
            if countryIso = "HU" then 27
            elif isEU && hasVatId then 0
            elif isEU && not hasVatId then euVat[countryIso]
            else 0
        else
            if isEU then euVat[countryIso]
            else 0
