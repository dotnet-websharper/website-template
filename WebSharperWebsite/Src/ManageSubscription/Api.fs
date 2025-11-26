namespace WebSharperWebsite.ManageSubscription

open System
open WebSharper
open WebSharper.JavaScript
open WebSharperWebsite
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

    let AssignSeat (subId: string) (_seatNo: int) (username: string) : Async<bool> =
        async {
            if String.IsNullOrWhiteSpace username then
                return false
            else
                let! res = 
                    Remote<IRemotingContract>.AddAssignment {
                        subscriptionId = Guid.Parse subId
                        githubAssignedName = username
                    }
                Utils.alertError res
                return res.IsOk
        }

    let UnassignSeat (subId: string) (seatNo: int) : Async<bool> =
        async {
            let! subs = Remote<IRemotingContract>.GetSubscriptions()
            let maybeSub =
                subs
                |> Array.tryFind (fun s -> string s.subscriptionId = subId)

            match maybeSub with
            | None ->
                return false
            | Some sub ->
                let idx = seatNo - 1
                if idx >= 0 && idx < sub.githubAssignedNames.Length then
                    let username = sub.githubAssignedNames.[idx]

                    let! res = 
                        Remote<IRemotingContract>.RevokeAssignment {
                            subscriptionId = sub.subscriptionId
                            githubAssignedName = username
                        }
                    Utils.alertError res
                    return res.IsOk
                else
                    return false
        }

    let SetAutoRenew (subId: string) (cancelAtPeriodEnd: bool) : Async<bool> =
        async {
            let! res =
                Remote<IRemotingContract>.SetCancellationStatus {
                    subscriptionId = Guid.Parse subId
                    cancelAtPeriodEnd = cancelAtPeriodEnd
                }
            Utils.alertError res
            return res.IsOk
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
                let! dataOpt = Remote<IRemotingContract>.GetBillingData()
                let value =
                    match dataOpt with
                    | None ->
                        {
                            company = None
                            address = {
                                line1 = ""
                                city = ""
                                postal_code = ""
                                country = ""
                            }
                        }
                    | Some data ->
                        {
                            company = 
                                data.companyName |> Option.map (fun cn ->
                                    {
                                        name = cn
                                        vatin = data.taxId |> Option.defaultValue ""
                                    }   
                                )
                            address = {
                                line1 = data.line1
                                city = data.city
                                postal_code = data.postalCode
                                country = data.country
                            }
                        }
                billingCache <- Some value
                return value
        }

    let SaveBilling (data: BillingRecord) : Async<bool> =
        async {
            let! res = 
                Remote<IRemotingContract>.SetBillingData {
                    email = "" // not updated
                    line1 = data.address.line1
                    city = data.address.city     
                    postalCode = data.address.postal_code
                    country = data.address.country 
                    companyName = data.company |> Option.map (fun c -> c.name)
                    taxId = data.company |> Option.map (fun c -> c.vatin)
                }
            Utils.alertError res
            if res.IsOk then
                billingCache <- Some data
            return res.IsOk
        }

    let GetCustomerPortalLink () : Async<option<string>> =
        async {
            let! linkOpt = Remote<IRemotingContract>.GetCustomerPortalLink()
            return linkOpt
        }

    let GetGitHubOrganization () : Async<option<GitHubOrg>> =
        Remote<IRemotingContract>.GetGitHubOrg()

    let SetGitHubOrgName name : Async<bool> =
        async {
            let! res = Remote<IRemotingContract>.SetGitHubOrgName name
            Utils.alertError res
            return res.IsOk
        }
