namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.UI
open WebSharper.UI.Client

open WebSharperWebsite

[<JavaScript>]
module ViewsAuth =

    let private isAuthedV : View<bool> =
        AuthClient.UserView
        |> View.Map Option.isSome

    let LoginPromptAttr : Attr =
        Attr.DynamicClassPred "hidden" isAuthedV

    let ContentAttr : Attr =
        Attr.DynamicClassPred "hidden" (
            isAuthedV
            |> View.Map not
        )

    let LoginClick (_: unit) =
        AuthClient.Login()
