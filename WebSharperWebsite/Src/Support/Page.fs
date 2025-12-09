namespace WebSharperWebsite.Support

open WebSharperWebsite

open WebSharper
open WebSharper.UI
open WebSharper.UI.Client

open State
open Api
open ViewsAttrs
open ViewsPricing

[<JavaScript>]
module Page = 

    let SupportDoc (): Doc =    
        if IsClient then
            Templates.SupportTemplate.Content()
                .OnAfterRender(fun () ->
                    HydrateCatalog() |> Async.StartImmediate
                )
                .ProName(Doc.TextView ProName)
                .FreeName(Doc.TextView FreeName)
                .ProPriceAmount(Doc.TextView ProPriceAmount)
                .ProPriceLabel(Doc.TextView ProPriceLabel)
                .FreePriceAmount(Doc.TextView FreePriceAmount)
                .FreePriceLabel(Doc.TextView FreePriceLabel)
                .ProTotalLabel(Doc.TextView ProTotalLabel)
                .ProTotalAmount(Doc.TextView ProTotalAmount)
                .FreeTotalLabel(Doc.TextView FreeTotalLabel)
                .FreeTotalAmount(Doc.TextView FreeTotalAmount)
                .ProNote(Doc.TextView ProNote)
                .FreeNote(Doc.TextView FreeNote)
                .BillMonthAttr(BillMonthAttr())
                .BillYearAttr(BillYearAttr())
                .ProCheckoutAttr(ProCheckoutAttr())
                .FreeCheckoutAttr(FreeCheckoutAttr())
                .SeatCount(SeatCountText)
                .OnBillMonth(OnBillMonth)
                .OnBillYear(OnBillYear)
                .OnSeatMinus(OnSeatMinus)
                .OnSeatPlus(OnSeatPlus)

                // Contact form
                .ContactSubjectVar(ContactFormVar.V.subject)
                .ContactMessageVar(ContactFormVar.V.message)
                .ContactEmailVar(ContactFormVar.V.email)
                .ContactNameVar(ContactFormVar.V.name)
                .ContactCountryVar(ContactFormVar.V.country)

                .ContactSendButtonAttr(ContactSendButtonAttr)
                .ContactSendButtonText(ContactSendButtonText)
                .OnContactSendClick(OnContactSendClick)
                .Doc()
        else
            Templates.SupportTemplate.Content()
                .ContactSendButtonText("Send")
                .ContactSendButtonAttr(Attr.Create "disabled" "")
                .Doc()

