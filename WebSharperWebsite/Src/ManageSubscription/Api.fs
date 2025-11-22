namespace WebSharperWebsite.ManageSubscription

open System
open WebSharper
open WebSharper.JavaScript
open WebSharperWebsite

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

    let private seatsFromSubscription (s: Subscription) : SeatRecord array =
        let assigned = s.githubAssignedNames
        let total = max s.seats assigned.Length

        [|
            for i = 0 to total - 1 do
                let seatNo = i + 1
                if i < assigned.Length then
                    let username = assigned.[i]
                    yield {
                        seatNo = seatNo
                        username = username
                        status = "assigned"
                        // No per-seat expiry in DB, reuse subscription period end
                        expiry = s.currentPeriodEnd
                        // If subscription is set to cancel at period end,
                        // then "auto renew" is effectively off
                        autoRenew = not s.cancelAtPeriodEnd
                    }
                else
                    yield {
                        seatNo = seatNo
                        username = ""
                        status = "available"
                        expiry = s.currentPeriodEnd
                        autoRenew = not s.cancelAtPeriodEnd
                    }
        |]

    // ----------------------
    // Public API (Async)
    // ----------------------

    let ListSubscriptions () : Async<SubRecord array> =
        async {
            let! subs = Remote<IRemotingContract>.GetSubscriptions()
            return subs |> Array.map toSubRecord
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

    let SetAutoRenew (subId: string) (_expiry: string) (autoRenew: bool) : Async<unit> =
        async {
            do! Remote<IRemotingContract>.SetCancellationStatus {
                    subscriptionId = Guid.Parse subId
                    cancelAtPeriodEnd = not autoRenew
                }
        }

    // ----------------------
    // Billing (still local)
    // ----------------------
    // DB schema you pasted has Invoices, Orders, etc.
    // but nothing yet for billing address/company editor on the manage page,
    // so we keep this in-memory for now.

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
