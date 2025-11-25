namespace WebSharperWebsite.Checkout

open WebSharperWebsite

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client

[<JavaScript>]
module Success =

    [<Literal>]
    let private ConfirmPath = "/checkout/confirm"

    // Response from GET /checkout/confirm?session_id=...
    type ConfirmationResponse = {
        seats: int
        email: string
        amountTotal: int
        currency: string
        status: string
        subscriptionId: string
        paid: bool
    }

    // -------------------------
    // State
    // -------------------------

    let private confirmationVar : Var<ConfirmationResponse option> =
        Var.Create None

    let private messageVar : Var<string> =
        Var.Create "Confirming your payment…"

    // -------------------------
    // Helpers
    // -------------------------

    let private formatAmount (cents: int) (currency: string) =
        let amount = float cents / 100.0
        Utils.usd amount

    let private row (label: string) (value: string) : Doc =
        let v =
            if String.IsNullOrWhiteSpace value then "-" else value
        div [] [
            text (label + ": ")
            b [] [ text v ]
        ]

    let private setErrorMessage (msg: string) =
        messageVar.Value <- msg
        confirmationVar.Value <- None

    // -------------------------
    // Public bindings for template
    // -------------------------

    let MessageText : Doc =
        messageVar.View
        |> Doc.TextView


    let DetailsAttr : Attr =
        // hide details while we have no confirmation
        Attr.DynamicClassPred "hidden" (
            confirmationVar.View
            |> View.Map Option.isNone
        )

    let DetailsDoc : Doc =
        confirmationVar.View
        |> Doc.BindView (function
            | Some c ->
                Doc.Concat [
                    row "Seats" (string c.seats)
                    row "Email" c.email
                    row "Amount" (formatAmount c.amountTotal c.currency)
                    row "Status" c.status
                    row "Subscription" c.subscriptionId
                ]
            | None ->
                Doc.Empty
        )

    // -------------------------
    // API call
    // -------------------------

    let private fetchConfirmation (sessionId: string) : Async<ConfirmationResponse option> =
        async {
            let url =
                AuthClient.API
                + ConfirmPath
                + "?session_id="
                + JS.EncodeURIComponent sessionId

            let redirectError () =
                Error.RedirectToError {
                    Title = Some "Payment confirmation failed"
                    Message = None
                    Page = None
                }

            try
                let! resp =
                    JS.Fetch(
                        url,
                        RequestOptions(
                            Method = "GET",
                            Credentials = RequestCredentials.Include,
                            Headers = AuthClient.header()
                        )
                    )
                    |> Promise.AsAsync

                if not resp.Ok then
                    return None
                else
                    let! data = resp.Json() |> Promise.AsAsync
                    let conf = data |> As<ConfirmationResponse>
                    return Some conf
            with _ ->
                redirectError()
                return None
        }

    // -------------------------
    // OnAfterRender
    // -------------------------

    let OnAfterRender () =
        async {
            let qs = new URLSearchParams(JS.Window.Location.Search)
            let sessionId = qs.Get("session_id")

            if isNull sessionId || sessionId = "" then
                setErrorMessage "Missing session id."
            else
                messageVar.Value <- "Confirming your payment…"

                let! confOpt = fetchConfirmation sessionId

                match confOpt with
                | Some c ->
                    confirmationVar.Value <- Some c
                    messageVar.Value <-
                        if c.paid then
                            "Your payment has been received."
                        else
                            "Payment recorded; awaiting confirmation."
                | None ->
                    ()
        }
        |> Async.StartImmediate
