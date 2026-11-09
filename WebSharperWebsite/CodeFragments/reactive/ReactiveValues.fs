namespace reactive

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Templating
open WebSharper.UI.Html

[<JavaScript>]
module Client =
    // The whole UI lives in index.html; the client only fills its holes.
    type IndexTemplate = Template<"wwwroot/index.html", ClientLoad.FromDocument>

    [<SPAEntryPoint>]
    let Main () =
        // One reactive value drives everything: the derived views below
        // recompute on their own whenever `count` changes.
        let count = Var.Create 0
        let square = count.View |> View.Map (fun n -> n * n)
        let parity = count.View |> View.Map (fun n -> if n % 2 = 0 then "even" else "odd")

        IndexTemplate()
            .Count(count)
            .Squared(square |> View.Map string)
            .Parity(parity)
            .Decrement(fun _ -> count.Value <- count.Value - 1)
            .Increment(fun _ -> count.Value <- count.Value + 1)
            .Reset(fun _ -> count.Value <- 0)
            .Bind()
