namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI

[<JavaScript>]
module AuthClient = 
    [<Literal>]
    let API = "https://api.websharper.com"
    //let API = "http://localhost:55482"

    do Remoting.EndPoint <- API

    let private userVar : Var<option<User>> = Var.Create None
    let private isFetchingVar : Var<bool> = Var.Create false

    let UserView : View<option<User>> = userVar.View
    let IsAuthedView : View<bool> = userVar.View |> View.Map Option.isSome
    let IsFetchingView : View<bool> = isFetchingVar.View

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
            | Some user -> 
                return Some user
            | _ ->
                isFetchingVar.Value <- true
                try
                    try
                        let! serverUserOpt = Remote<IRemotingContract>.Me()
                        userVar.Value <- serverUserOpt
                        return serverUserOpt
                    with ex ->
                        Console.Error("AuthClient.FetchMe RPC failed", ex)
                        userVar.Value <- None
                        return None
                finally
                    isFetchingVar.Value <- false
        }

    let GetUser() : option<User> =
        userVar.Value

    let BuildStartUrl () : string =
        let pathAndQuery = JS.Window.Location.Pathname + JS.Window.Location.Search

        API + "/auth/github/start?returnUrl=" + JS.EncodeURIComponent(pathAndQuery)

    let Login () : unit =
        JS.Window.Location.Href <- BuildStartUrl()

    let Logout (reload: bool) : Async<unit> =
        async {
            try
                do! Remote<IRemotingContract>.Logout()
            with ex ->
                Console.Error("AuthClient.Logout RPC failed", ex)

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
