namespace WebSharperWebApi

open System
open WebSharper

type User =
    {
        login : string
        avatarUrl : string
    }

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

type Subscription =
    {
        subscriptionId : Guid
        planName : string
        currentPeriodEnd : string
        cancelAtPeriodEnd : bool
        seats : int
        githubAssignedNames : string[]
    }

type Assignment =
    {
        subscriptionId : Guid
        githubAssignedName : string
    }

type CancellationStatus =
    {
        subscriptionId : Guid
        cancelAtPeriodEnd : bool
    }

type Invoice = 
    {
        title : string
        date : string
        amount : int
        currency : string
        status : string
        url : string
    }

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

type GitHubOrg =
    {
        name : string option
        status : GitHubOrgStatus
    }

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
