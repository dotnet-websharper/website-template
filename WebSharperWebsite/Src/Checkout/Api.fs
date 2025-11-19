namespace WebSharperWebsite.Checkout

open WebSharper
open WebSharper.JavaScript

open WebSharperWebsite
open Types

[<JavaScript>]
module Api =

    let startCheckout (payload: CheckoutPayload) : Async<CheckoutResponse option> =
        async {
            let checkoutError () =
                Error.RedirectToError {
                    Title = Some "Checkout failed"
                    Message = Some "Something went wrong while starting the payment. Please try again."
                    Page = None
                }

            try
                let! resp =
                    JS.Fetch(
                        AuthClient.API + "/checkout/session",
                        RequestOptions(
                            Method = "POST",
                            Credentials = RequestCredentials.Include,
                            Headers = AuthClient.header(),
                            Body = JSON.Stringify(payload)
                        )
                    )
                    |> Promise.AsAsync

                if not resp.Ok then
                    checkoutError ()
                    return None
                else
                    let! data = resp.Json() |> Promise.AsAsync
                    return Some (data |> As<CheckoutResponse>)
            with _ ->
                checkoutError ()
                return None
        }
