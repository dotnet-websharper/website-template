namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.JavaScript

open WebSharperWebsite

[<JavaScript>]
module ViewsAuth =     
    let private redirectToLogin () =
        Controller
            .importAuth()
            .Then(fun authMod ->
                let api : string = authMod?API
                let ret = JS.Window.Location.Href
                JS.Window.Location.Href <- $"{api}/auth/github/start?returnUrl={JS.EncodeURIComponent(ret)}"
            )
            |> ignore

    let loginPromptDoc : Doc =
        Templates.ManageSubscriptionTemplate.LoginPrompt()
            .LoginClick(fun _ ->
                redirectToLogin ()
            )
            .Doc()

    let showLoginPrompt (host: Dom.Element) =
        Doc.Run host loginPromptDoc