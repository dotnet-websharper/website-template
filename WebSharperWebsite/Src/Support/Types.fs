namespace WebSharperWebsite.Support

open WebSharper

[<JavaScript>]
module Types =

    type Interval =
        | Month
        | Year

    type PriceInfo = {
        Amount: float
        Currency: string
    }

    type PlanEntry = {
        Name: string option
        Description: string option
        Month: PriceInfo option
        Year: PriceInfo option
    }

    type Catalog = {
        Pro: PlanEntry
        Freelancer: PlanEntry
    }

    type PlanPriceRecord = {
        planId: string
        code: string
        name: string
        description: string option
        isPerSeat: bool
        maxSeats: int option
        interval: string          // "month" | "year"
        currency: string          // e.g. "usd"
        unitAmountCents: int      // per seat if isPerSeat = true, otherwise flat
        stripePriceId: string option
    }

    type PlansApiResponse = {
        items: PlanPriceRecord[]
    }

    type ContactForm = {
        subject: string
        message: string
        email: string
        name: string
        country: string
    }
