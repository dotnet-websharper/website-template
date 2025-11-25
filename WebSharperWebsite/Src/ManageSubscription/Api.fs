namespace WebSharperWebsite.ManageSubscription

open System
open WebSharper
open WebSharper.JavaScript
open WebSharperWebApi
open Types

[<JavaScript>]
module Api =

    // ----------------------
    // Helpers
    // ----------------------

    let private toSubRecord (subscription: Subscription) : SubRecord =
        {
            id = string subscription.subscriptionId
            label = sprintf "%s (%d seats) - %s" subscription.planName subscription.seats subscription.currentPeriodEnd
            plan = subscription.planName
            totalSeats = subscription.seats
            renewsAt = subscription.currentPeriodEnd
            status =
                if subscription.cancelAtPeriodEnd then
                    "canceling"
                else
                    "active"
        }

    let private seatsFromSubscription (subscription: Subscription) : SeatRecord array =
        let assigned = subscription.githubAssignedNames
        let total = max subscription.seats assigned.Length

        [|
            for i = 0 to total - 1 do
                let seatNo = i + 1
                let common =
                    {
                        seatNo = seatNo
                        username = ""
                        status = ""
                        expiry = subscription.currentPeriodEnd
                        autoRenew = not subscription.cancelAtPeriodEnd
                        subscriptionId = string subscription.subscriptionId
                    }

                if i < assigned.Length then
                    let username = assigned.[i]
                    yield { common with username = username; status = "assigned" }
                else
                    yield { common with status = "available" }
        |]

    // ----------------------
    // Public API (Async)
    // ----------------------

    let ListSubscriptions () : Async<SubRecord array> =
        async {
            let! subs = Remote<IRemotingContract>.GetSubscriptions()
            return subs |> Array.map toSubRecord
        }

    let GetAllSeats () : Async<SeatRecord array> =
        async {
            let! subs = Remote<IRemotingContract>.GetSubscriptions()
            return
                subs
                |> Array.collect seatsFromSubscription
        }

    let GetSeats (subId: string) : Async<SeatRecord array> =
        async {
            let! subs = Remote<IRemotingContract>.GetSubscriptions()
            let maybeSub =
                subs
                |> Array.tryFind (fun s -> string s.subscriptionId = subId)

            match maybeSub with
            | None ->
                return [||]
            | Some sub ->
                return seatsFromSubscription sub
        }

    let GetInvoices (_subId: string) : Async<InvoiceRecord array> =
        async {
            let! invs = Remote<IRemotingContract>.GetInvoices()

            return
                invs
                |> Array.map (fun i ->
                    {
                        id = i.title          // using title as display id
                        date = i.date
                        amount = i.amount
                        currency = i.currency
                        status = i.status
                        subscription = None
                        billingAddress = None
                        company = None
                    }
                )
        }

    let AssignSeat (subId: string) (_seatNo: int) (username: string) : Async<unit> =
        async {
            if String.IsNullOrWhiteSpace username then
                return ()
            else
                do! Remote<IRemotingContract>.AddAssignment {
                        subscriptionId = Guid.Parse subId
                        githubAssignedName = username
                    }
        }

    let UnassignSeat (subId: string) (seatNo: int) : Async<unit> =
        async {
            let! subs = Remote<IRemotingContract>.GetSubscriptions()
            let maybeSub =
                subs
                |> Array.tryFind (fun s -> string s.subscriptionId = subId)

            match maybeSub with
            | None ->
                return ()
            | Some sub ->
                let idx = seatNo - 1
                if idx >= 0 && idx < sub.githubAssignedNames.Length then
                    let username = sub.githubAssignedNames.[idx]

                    do! Remote<IRemotingContract>.RevokeAssignment {
                            subscriptionId = sub.subscriptionId
                            githubAssignedName = username
                        }
                else
                    return ()
        }

    let SetAutoRenew (subId: string) (cancelAtPeriodEnd: bool) : Async<unit> =
        async {
            do! Remote<IRemotingContract>.SetCancellationStatus {
                    subscriptionId = Guid.Parse subId
                    cancelAtPeriodEnd = cancelAtPeriodEnd
                }
        }

    // ----------------------
    // Billing 
    // ----------------------

    let mutable private billingCache : BillingRecord option = None

    let GetBilling () : Async<BillingRecord> =
        async {
            match billingCache with
            | Some b -> return b
            | None ->
                let value =
                    {
                        company = None
                        address = {
                            line1 = ""
                            city = ""
                            postal_code = ""
                            country = ""
                        }
                    }
                billingCache <- Some value
                return value
        }

    let SaveBilling (data: BillingRecord) : Async<unit> =
        async {
            billingCache <- Some data
        }

    let GetCustomerPortalLink () : Async<option<string>> =
        async {
            let! linkOpt = Remote<IRemotingContract>.GetCustomerPortalLink()
            return linkOpt
        }
