namespace WebSharperWebsite.Support

open WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client

open State
open Api
open ViewsAttrs
open ViewsPricing

[<JavaScript>]
module Page = 

    // The professional services CTAs link to `./support?quote=<slug>#contact`.
    // Preset the contact subject from that slug so the request arrives triaged.
    let private ApplyQuoteSubject () =
        let quote = (new URLSearchParams(JS.Window.Location.Search)).Get("quote")

        let subject =
            if System.String.IsNullOrWhiteSpace quote then None
            else
                match quote.ToLower() with
                | "architecture" -> Some "Architecture & design review"
                | "performance" -> Some "Code, performance & bundle audit"
                | "migration" -> Some "Upgrade & migration"
                | "bindings" -> Some "Custom bindings & extensions"
                | "generators" -> Some "Custom generators & Warp/DSL work"
                | "enterprise" -> Some "Enterprise support"
                | "consult" -> Some "Professional services"
                | _ -> None

        match subject with
        | Some s -> ContactFormVar.Value <- { ContactFormVar.Value with subject = s }
        | None -> ()

    let SupportDoc (): Doc =    
        if IsClient then
            Templates.SupportTemplate.Content()
                .OnAfterRender(fun () ->
                    ApplyQuoteSubject()
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

    // The "For Teams" page is currently a coming-soon placeholder that still
    // lets people reach us: it reuses the same contact machinery as support,
    // just with a For-Teams subject by default.
    let OnForTeamsAfterRender () =
        ContactFormVar.Value <- { ContactFormVar.Value with subject = "WebSharper for Teams" }

    let ForTeamsDoc (): Doc =
        if IsClient then
            Templates.ForTeamsTemplate.Content()
                .OnAfterRender(fun () -> OnForTeamsAfterRender())

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
            Templates.ForTeamsTemplate.Content()
                .ContactSendButtonText("Send")
                .ContactSendButtonAttr(Attr.Create "disabled" "")
                .Doc()

