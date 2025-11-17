namespace WebSharperWebsite

open WebSharper

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
