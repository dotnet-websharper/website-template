namespace WebSharperWebsite.Checkout

open WebSharper
open WebSharper.JavaScript

open WebSharperWebsite
open WebSharperWebApi

[<JavaScript>]
module Api =

    let startCheckout (payload: CheckoutRequest) : Async<string option> =
        async {
            try
                let! resp = Remote<IRemotingContract>.StripeCheckout(payload)

                match resp with
                | Ok url -> return Some url
                | Error msg ->
                    Utils.alertError msg
                    return None
            with _ ->
                Utils.alertError "Something went wrong. Please contact support or try again later."
                return None
        }
