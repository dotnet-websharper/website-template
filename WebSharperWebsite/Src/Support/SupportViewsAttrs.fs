namespace WebSharperWebsite.Support

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Templating.Runtime.Server

open Types
open State

[<JavaScript>]
module ViewsAttrs =

    // Billing toggle buttons

    let BillMonthAttr () : Attr =
        let v =
            intervalVar.View
            |> View.Map (function
                | Interval.Month -> "true"
                | Interval.Year -> "false"
            )
        Attr.Concat [
            Attr.Dynamic "data-active" v
            Attr.Dynamic "aria-pressed" v
        ]

    let BillYearAttr () : Attr =
        let v =
            intervalVar.View
            |> View.Map (function
                | Interval.Month -> "false"
                | Interval.Year -> "true"
            )
        Attr.Concat [
            Attr.Dynamic "data-active" v
            Attr.Dynamic "aria-pressed" v
        ]

    // Handlers

    let OnBillMonth (_: TemplateEvent<_,_,_>) =
        intervalVar.Value <- Interval.Month

    let OnBillYear (_: TemplateEvent<_,_,_>) =
        intervalVar.Value <- Interval.Year

    // -----------------------------
    // Contact form
    // -----------------------------

    let ContactSendButtonAttr : Attr =     
        Attr.DynamicBool "disabled" (
            View.Map2
                (fun canSend sending -> not canSend || sending)
                CanSendView
                IsSendingVar.View
        )

    let ContactSendButtonText : View<string> =
        IsSendingVar.View
        |> View.Map (fun sending -> if sending then "Sending..." else "Send")

    let private resetForm () =
        ContactFormVar.Value <-
            {
                subject = "WebSharper support"
                message = ""
                email = ""
                name = ""
                country = "United States"
            }

    let OnContactSendClick (e: TemplateEvent<_,_,_>) : unit =
        e.Event.PreventDefault()
        let form = ContactFormVar.Value

        if not (IsFormValid form) then
            JS.Alert("Please fill in all required fields.")
        else
            async {
                IsSendingVar.Value <- true
                try
                    let! ok = Api.SendContact form
                    if ok then
                        JS.Alert("Message sent successfully!")
                        resetForm ()
                    else
                        JS.Alert("Failed to send message. Please try again later.")
                finally
                    IsSendingVar.Value <- false
            }
            |> Async.StartImmediate
