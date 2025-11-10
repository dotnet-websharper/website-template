namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom

[<JavaScript>]
module Types =

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
    }

    type InvoiceRecord = {
        id: string
        date: string
        amount: int
        currency: string
        status: string
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

    type UiRefs = {
        content: Element
        tabs: Element array
        pages: Element array
        toast: Element
        spinner: Element
        subscriptionSelect: Element
        planName: Element
        seatsUsed: Element
        seatsTotal: Element
        seatProgress: Element
        seatsBody: Element
        bulkBox: HTMLInputElement
        bulkError: Element
        applyBulk: Element
        clearBulk: Element
        btnAddSubscription: HTMLButtonElement
        refresh: Element
        invoiceBody: Element
        billingView: Element
        billingEdit: Element
        billingForm: HTMLFormElement
        btnBillingEdit: Element
        btnBillingSave: Element
        btnBillingCancel: Element
        saveBilling: Element
    }
