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

    type PlanViewModel = {
        Id: string // e.g. "pro"
        Name: string
        Description: string
        IsPerSeat: bool
        MaxSeats: int option
        MonthPrice: PriceInfo option
        YearPrice: PriceInfo option
    }

    type Catalog = {
        Plans: PlanViewModel list
    }

    type ContactForm = {
        subject: string
        message: string
        email: string
        name: string
        country: string
    }
