namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharperWebsite.Checkout
open WebSharper.UI

[<JavaScript>]
module Types =

    module CT = WebSharperWebsite.Checkout.Types
    type User = WebSharperWebApi.User
    type Subscription = WebSharperWebApi.Subscription
    
    type SeatRecord = {
        seatNo: int
        username: Var<string>
        isAssigned: Var<bool>
        isProcessing: Var<bool>
    }

    type SubRecord = {
        data: Subscription
        autoRenew: Var<bool>
        isProcessing: Var<bool>
        seats: SeatRecord[]
    }

    type InvoiceRecord = {
        id: string
        date: string
        amount: int
        currency: string
        status: string
        subscription: string option
        billingAddress: CT.BillingAddress option
        company: CT.CompanyInfo option
    }

    type BillingRecord = {
        company: CT.CompanyInfo option
        address: CT.BillingAddress
    }
