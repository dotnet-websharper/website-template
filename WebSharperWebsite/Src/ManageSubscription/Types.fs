namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharperWebsite.Checkout

[<JavaScript>]
module Types =

    module CT = WebSharperWebsite.Checkout.Types
    type User = WebSharperWebApi.User

    type SubRecord = {
        id: string
        label: string
        plan: string
        totalSeats: int
        renewsAt: string
        status: string
    }

    type SeatRecord = {
        seatNo: int
        username: string
        status: string
        expiry: string
        autoRenew: bool
        subscriptionId: string
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

    type State = {
        user: User option
        subs: SubRecord array
        currentSubId: string
        seats: SeatRecord array
        invoices: InvoiceRecord array
        billing: BillingRecord option
    }
