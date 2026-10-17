type Article = { id: int; title: string; date: DateTime }

let start = DateTime(2025, 9, 1)

let articles : Article list = [
    { id = 1; title = "Welcome to WebSharper"; date = DateTime(2025, 9, 20) }
    { id = 2; title = "Async workflows 101"; date = DateTime(2025, 8, 15) }
    { id = 3; title = "Query expressions on client"; date = DateTime(2025, 9, 28) }
    { id = 4; title = "Remoting tips"; date = DateTime(2025, 7, 5)  }
]
// Query expressions (LINQ for F#)
let recentIds =
    query {
        for article in articles do
        where (article.date > start)
        sortByDescending article.date
        select article.id
    }
// Async workflows (run non-blocking work on the client)
let loadAndShow =
    async {
        do! Async.Sleep 10
        Console.Log(sprintf "Recent IDs: %A" (recentIds |> Seq.toList))
    }    

Async.Start loadAndShow

// Sequence expressions (lazy generators)
let squares =
    seq {
        for i in 1 .. 5 do
            yield i * i
    }   
    
Console.Log(String.concat ", " (squares |> Seq.map string))
