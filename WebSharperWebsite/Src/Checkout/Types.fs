namespace WebSharperWebsite.Checkout

open WebSharper
open WebSharperWebsite

[<JavaScript>]
module Types =

    open Support.Types

    type SearchParams = {
        plan: string
        interval: Interval
        seats: int
    }

    type BillingAddress = {
        line1: string
        city: string
        postal_code: string
        country: string
    }

    type CompanyInfo = {
        name: string
        vatin: string
    }

    type CheckoutPayload = {
        seats: int
        email: string
        interval: string
        planCode: string
        billingAddress: BillingAddress
        company: CompanyInfo option
    }

    type CheckoutResponse = {
        url: string
    }
