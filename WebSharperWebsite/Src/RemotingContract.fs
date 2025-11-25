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
        title: string
        date: string
        amount: int
        currency: string
        status: string
        url: string
    }

type IRemotingContract =
    [<Remote>]
    abstract member Me: unit -> Async<User option>

    [<Remote>]
    abstract member Logout: unit -> Async<unit>

    [<Remote>]
    abstract member GetBillingData: unit -> Async<option<BillingData>>

    [<Remote>]
    abstract member SetBillingData: BillingData -> Async<unit>

    [<Remote>]
    abstract member GetSubscriptions: unit -> Async<Subscription[]>

    [<Remote>]
    abstract member GetCustomerPortalLink: unit -> Async<option<string>>

    [<Remote>]
    abstract member AddAssignment: Assignment -> Async<unit>

    [<Remote>]
    abstract member RevokeAssignment: Assignment -> Async<unit>

    [<Remote>]
    abstract member SetCancellationStatus: CancellationStatus -> Async<unit>

    [<Remote>]
    abstract member GetInvoices: unit -> Async<Invoice[]>
