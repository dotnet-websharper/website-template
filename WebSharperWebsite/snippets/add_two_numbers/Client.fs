namespace add_two_numbers

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Templating
open WebSharper.UI.Html

[<JavaScript>]
module Client =
    // The templates are loaded from the DOM, so you just can edit index.html
    // and refresh your browser, no need to recompile unless you add or remove holes.
    type IndexTemplate = Template<"wwwroot/index.html", ClientLoad.FromDocument>

    [<SPAEntryPoint>]
    let Main () =
        let x = Var.Create 1
        let y = Var.Create 1

        IndexTemplate()
            .X(x)
            .Y(y)
            .Sum(View.Map2 (fun x y -> string (x + y)) x.View y.View)
            .Bind()