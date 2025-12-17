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
    // Public API (Async)
    // ----------------------

    let GetSubscriptions() : Async<Subscription array> =
        Remote<IRemotingContract>.GetSubscriptions()

    let GetInvoices () : Async<InvoiceRecord array> =
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

    let AssignSeat (subId: Guid) (seatNo: int) (username: string) : Async<bool> =
        async {
            if String.IsNullOrWhiteSpace username then
                return false
            else
                let! res = 
                    Remote<IRemotingContract>.AddAssignment {
                        subscriptionId = subId
                        githubAssignedName = username
                        position = seatNo
                    }

                Utils.handleErrorFromResult res Views.showToast

                return res.IsOk
        }

    let UnassignSeat (subId: Guid) (seatNo: int) (username: string) : Async<bool> =
        async {
            let! res = 
                Remote<IRemotingContract>.RevokeAssignment {
                    subscriptionId = subId
                    githubAssignedName = username
                    position = seatNo
                }
                    
            Utils.handleErrorFromResult res Views.showToast

            return res.IsOk
        }

    let SetAutoRenew (subId: Guid) (cancelAtPeriodEnd: bool) : Async<bool> =
        async {
            let! res =
                Remote<IRemotingContract>.SetCancellationStatus {
                    subscriptionId = subId
                    cancelAtPeriodEnd = cancelAtPeriodEnd
                }
            Utils.alertErrorFromResult res
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
            Utils.alertErrorFromResult res
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
            Utils.alertErrorFromResult res
            return res.IsOk
        }
