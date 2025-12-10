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
                .ProPlan(ViewsPricing.PlanWidget "pro")
                .FreelancerPlan(ViewsPricing.PlanWidget "freelancer")
                
                .BillMonthAttr(BillMonthAttr())
                .BillYearAttr(BillYearAttr())
                .OnBillMonth(OnBillMonth)
                .OnBillYear(OnBillYear)

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
            let serverSkeleton() = 
                Templates.SupportTemplate.SkeletonCard().Doc()

            Templates.SupportTemplate.Content()
                .ProPlan(serverSkeleton())
                .FreelancerPlan(serverSkeleton())
                
                .ContactSendButtonText("Send")
                .ContactSendButtonAttr(Attr.Create "disabled" "")
                .Doc()

