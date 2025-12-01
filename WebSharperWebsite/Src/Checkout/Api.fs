namespace WebSharperWebsite.Checkout

open WebSharper
open WebSharper.JavaScript

open WebSharperWebsite
open WebSharperWebApi

[<JavaScript>]
module Api =

    let startCheckout (payload: CheckoutRequest) : Async<string option> =
        async {
            let checkoutError err =
                Error.RedirectToError {
                    Title = Some "Checkout failed"
                    Message = Some (err + ". Please try again.")
                    Page = None
                }

            try
                let! resp = Remote<IRemotingContract>.StripeCheckout(payload)

                match resp with
                | Ok url -> return Some url
                | Error msg ->
                    checkoutError msg
                    return None
            with _ ->
                checkoutError "Failed to connect to the server"
                return None
        }
