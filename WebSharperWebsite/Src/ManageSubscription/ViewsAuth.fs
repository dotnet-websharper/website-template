namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.JavaScript

open WebSharperWebsite

[<JavaScript>]
module ViewsAuth =

    let loginPromptDoc : Doc =
        Templates.ManageSubscriptionTemplate.LoginPrompt()
            .LoginClick(fun _ ->
                AuthClient.Login()
            )
            .Doc()

    let showLoginPrompt (host: Dom.Element) =
        Doc.Run host loginPromptDoc