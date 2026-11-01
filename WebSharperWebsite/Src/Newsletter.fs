namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Templating.Runtime.Server

/// The footer's "Subscribe now" form. Posts the email to the WebSharper API's
/// `POST /api/newsletter` and reports the outcome next to the field.
[<JavaScript>]
module Newsletter =

    /// Bound to the email `<input>` through `ws-var="SubscribeEmail"`.
    let EmailVar : Var<string> = Var.Create ""

    /// The status message shown under the subscribe field.
    let StatusVar : Var<string> = Var.Create ""

    let private isSending = Var.Create false

    let private Endpoint = AuthClient.API + "/api/newsletter"

    let OnSubscribe (e: TemplateEvent<_,_,_>) : unit =
        e.Event.PreventDefault()

        if not isSending.Value then
            let email = EmailVar.Value.Trim()

            if System.String.IsNullOrWhiteSpace email then
                StatusVar.Value <- "Please enter your email address."
            else
                isSending.Value <- true
                StatusVar.Value <- "Subscribing…"
                async {
                    try
                        let formData = FormData()
                        formData.Append("email", email)

                        let! resp =
                            JS.Fetch(
                                Endpoint,
                                RequestOptions(
                                    Method = "POST",
                                    Body = formData
                                )
                            )
                            |> Promise.AsAsync

                        if resp.Ok then
                            StatusVar.Value <- "Thanks — you are subscribed!"
                            EmailVar.Value <- ""
                        else
                            StatusVar.Value <- "Subscription failed. Please try again later."
                    with _ ->
                        StatusVar.Value <- "Subscription failed. Please try again later."

                    isSending.Value <- false
                }
                |> Async.StartImmediate
