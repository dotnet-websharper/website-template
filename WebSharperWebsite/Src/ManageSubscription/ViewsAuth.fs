namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Html
open WebSharper.JavaScript

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
        div [ attr.``class`` "rounded-xl border p-6 dark:border-gray-800 dark:text-white text-gray-800" ] [
            h3 [ attr.``class`` "text-lg font-semibold mb-2" ] [ text "Please log in" ]
            p  [ attr.``class`` "text-sm text-gray-600 dark:text-gray-400 mb-4" ]
               [ text "You need to be signed in to manage your subscription." ]
            button [
                attr.``class`` "w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300"
                on.click (fun _ _ -> redirectToLogin())
            ] [ 
                span [ attr.``class`` "relative text-sm" ] [ text "Log in with GitHub" ]
            ]
        ]

    let showLoginPrompt (host: Dom.Element) =
        Doc.Run host loginPromptDoc