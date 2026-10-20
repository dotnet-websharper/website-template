open WebSharper_UI
open WebSharper_UI.Html

(* Values are reactive: the document updates itself as the data changes.
   No re-rendering, no virtual DOM - just values flowing through your UI. *)
let greeting () =
  let name = Var.create "" in
  div [] [
    DocInputType.text [] name;
    p [] [text "Hello, "; textView name.view; text "!"]
  ]
