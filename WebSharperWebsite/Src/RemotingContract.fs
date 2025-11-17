namespace WebSharperWebsite

open WebSharper

[<CLIMutable>]
type User =
    {
        login: string
        name: string
        avatarUrl: string
    }

type IRemotingContract =
    [<Remote>]
    abstract member Me: unit -> Async<User option>

    [<Remote>]
    abstract member Logout: unit -> Async<unit>
