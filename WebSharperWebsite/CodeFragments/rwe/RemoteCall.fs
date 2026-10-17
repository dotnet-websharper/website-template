// Server-side, remote-callable function
[<Remote>]
let ServerFn () : Async<string> =
    async { return "Hello, world!" }

// Client-side function
[<JavaScript>]
let CallServer () : unit =
    async {
        let! result = ServerFn()
        Console.Log(result)
    }
    |> Async.Start
