let x = Var.Create 1
let y = Var.Create 1

let addNumbers =
    div [] [
        p [] [text "x "; Doc.InputType.IntUnchecked [] x]
        p [] [text "y "; Doc.InputType.IntUnchecked [] y]
        p [] [
            textView (View.Map2 (fun x y -> $"x + y = {x + y}") x.View y.View)
        ]
    ]

addNumbers |> Doc.RunById "main"
