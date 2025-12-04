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

    type ContactForm = {
        subject: string
        message: string
        email: string
        name: string
        country: string
    }
