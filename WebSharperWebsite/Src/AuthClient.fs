namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI

[<JavaScript>]
module AuthClient = 
    [<Literal>]
    let API = "http://localhost:55482"

    let private api (p: string): string = API + p

    type User = {
        login: string
        name: string
        avatarUrl: string
    }

    let private userVar : Var<option<User>> = Var.Create None
    let private isFetchingVar : Var<bool> = Var.Create false

    let header() = new Headers(new Object<string>([| "Accept", "application/json" |]))

    let private getJson<'T> (url: string) : Async<option<'T>> =
        async {
            try
                let! resp =
                    JS.Fetch(
                        url,
                        RequestOptions(
                            Method = "GET",
                            Credentials = RequestCredentials.Include,
                            Headers = header()
                        )
                    )
                    |> Promise.AsAsync

                if not resp.Ok then
                    return None
                else
                    let! data = resp.Json() |> Promise.AsAsync
                    return Some (data :?> 'T)
            with _ ->
                return None
        }

    let private postJson (url: string) : Async<bool> =
        async {
            try
                let! resp =
                    JS.Fetch(
                        url,
                        RequestOptions(
                            Method = "POST",
                            Credentials = RequestCredentials.Include,
                            Headers = header()
                        )
                    )
                    |> Promise.AsAsync

                return resp.Ok
            with _ ->
                return false
        }

    let FetchMe() : Async<option<User>> =
        async {
            match userVar.Value with
            | Some u -> return Some u
            | _ ->
                isFetchingVar.Value <- true
                try
                    let! userOpt = getJson<User> (api "/auth/me")
                    userVar.Value <- userOpt
                    return userOpt
                finally
                    isFetchingVar.Value <- false
        }

    let GetUser() : option<User> =
        userVar.Value

    let BuildStartUrl () : string =
        let pathAndQuery = JS.Window.Location.Pathname + JS.Window.Location.Search

        api ("/auth/github/start?returnUrl=" + JS.EncodeURIComponent(pathAndQuery))

    let Login () : unit =
        JS.Window.Location.Href <- BuildStartUrl()

    let Logout (reload: bool) : Async<unit> =
        async {
            let! _ok = postJson (api "/auth/logout")

            userVar.Value <- None

            if reload then
                try
                    JS.Window.Location.Reload()
                with _ -> ()
        }

    let OnChange (handler: option<User> -> unit) (fireImmediately: bool) : unit =
        if fireImmediately then
            handler userVar.Value

        View.Sink handler userVar.View
