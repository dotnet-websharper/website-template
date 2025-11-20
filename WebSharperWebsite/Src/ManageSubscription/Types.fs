namespace WebSharperWebsite.ManageSubscription

open WebSharper

[<JavaScript>]
module Types =
    open WebSharperWebsite.Checkout.Types

    type SubRecord = {
        id: string
        label: string
        plan: string
        totalSeats: int
        renewsAt: string
        status: string
        currency: string
    }

    type SeatRecord = {
        seatNo: int
        mutable username: string
        mutable status: string
        expiry: string
        mutable autoRenew: bool
    }

    type InvoiceRecord = {
        id: string
        date: string
        amount: int
        currency: string
        status: string
        subscription: string option
        billingAddress: BillingAddress option
        company: CompanyInfo option
    }

    type BillingRecord = {
        mutable name: string
        mutable vatin: string
        mutable line1: string
        mutable city: string
        mutable postal_code: string
        mutable country: string
    }

    type State = {
        mutable user: obj
        mutable subs: SubRecord array
        mutable currentSubId: string
        mutable seats: SeatRecord array
        mutable invoices: InvoiceRecord array
        mutable billing: BillingRecord option
    }
