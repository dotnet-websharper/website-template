namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI

[<JavaScript>]
module Error =
    let private titleVar = Var.Create "Something went wrong"
    let private msgVar = Var.Create "An unexpected error occurred. Please try again."
    let private previousVar = Var.Create "/"
    let private isAuthErrorVar = Var.Create false

    let Title : View<string> = titleVar.View
    let Message : View<string> = msgVar.View

    type RedirectContext =
        {
            Title: string option
            Message: string option
            Page: string option
        }

    let private sameOriginReferer () : string option =
        try
            let referer = JS.Document.Referrer
            if System.String.IsNullOrWhiteSpace referer then
                None
            else
                let origin = JS.Window.Location.Origin
                if referer.StartsWith(origin) then
                    Some (referer.Substring(origin.Length))
                else
                    None
        with _ ->
            None

    let private messageForCode (code: string) : string =
        match code with
        | "invalid_state" ->
            "Sign-in failed, please try again."
        | "token" ->
            "GitHub sign-in failed during token exchange. Please try again."
        | "token_missing" ->
            "GitHub sign-in failed (no token)."
        | "user" ->
            "GitHub sign-in failed when fetching your user info."
        | "user_parse" ->
            "GitHub sign-in failed (user data issue)."
        | "db" ->
            "Sign-in temporarily unavailable. Please try again shortly."
        | "service" ->
            "Sign-in temporarily unavailable (service not configured)."
        | _ ->
            "Unexpected error during sign-in. Please try again."

    let private getPrevious (searchParams: URLSearchParams) : string =
        let previous =
            match searchParams.Get("from"), searchParams.Get("page"), sameOriginReferer() with
            | fromParam, _, _ when not (System.String.IsNullOrWhiteSpace fromParam) -> fromParam
            | _, pageParam, _ when not (System.String.IsNullOrWhiteSpace pageParam) -> pageParam
            | _, _, Some refererPath -> refererPath
            | _ -> "/"
        previous

    let private getMessageTxt (searchParams: URLSearchParams) (codeParam: string) : string = 
        let friendly = searchParams.Get("message")
        let msgText =
            if not (System.String.IsNullOrWhiteSpace friendly) then
                friendly
            else
                match codeParam with
                | code when not (System.String.IsNullOrWhiteSpace code) -> messageForCode code
                | _ -> "An unexpected error occurred. Please try again."
        msgText

    let RedirectToError (ctx: RedirectContext) : unit =

        let title =
            ctx.Title
            |> Option.defaultValue "Request error"

        let message =
            ctx.Message
            |> Option.defaultValue ""
            |> fun m ->
                if m.Length > 300 then m.Substring(0, 300) else m

        let page =
            ctx.Page
            |> Option.defaultValue JS.Window.Location.Href

        let ts = System.DateTime.UtcNow.ToString("o")

        let q = new URLSearchParams(Object<string>([|
            "title", title
            "message", message
            "ts", ts
            "page", page
        |]))

        JS.Window.Location.Href <- "./error.html?" + q.ToString()

    let Init () =
        let searchParams = new URLSearchParams(JS.Window.Location.Search)

        let codeParam = searchParams.Get("code")
        isAuthErrorVar.Value <- not (System.String.IsNullOrWhiteSpace codeParam)

        previousVar.Value <- getPrevious searchParams

        let titleParam = searchParams.Get("title")
        if not (System.String.IsNullOrWhiteSpace titleParam) then
            titleVar.Value <- titleParam

        msgVar.Value <- getMessageTxt searchParams codeParam

    let OnBack () =
        let previous = previousVar.Value
        JS.Window.Location.Href <- previous

    let OnRetry () =
        let prev = previousVar.Value
        if isAuthErrorVar.Value then
            JS.Window.Location.Href <- AuthClient.BuildStartUrlWithReturn prev
        else
            JS.Window.Location.Href <- prev
