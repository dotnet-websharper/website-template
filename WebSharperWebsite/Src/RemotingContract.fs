namespace WebSharperWebsite

open System
open WebSharper

type User =
    {
        login : string
        name : string
        avatarUrl : string
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
    abstract member GetSubscriptions: unit -> Async<Subscription[]>

    [<Remote>]
    abstract member AddAssignment: Assignment -> Async<unit>

    [<Remote>]
    abstract member RevokeAssignment: Assignment -> Async<unit>

    [<Remote>]
    abstract member SetCancellationStatus: CancellationStatus -> Async<unit>

    [<Remote>]
    abstract member GetInvoices: unit -> Async<Invoice[]>
