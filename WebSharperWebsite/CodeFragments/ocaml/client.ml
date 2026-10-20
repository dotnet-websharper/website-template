open WebSharper_UI
open WebSharper_UI.Html
open WebSharper_UI.Notation

(* `addTodo` runs on the server, but here it is just a typed call. *)
let view () =
  let todos = Var.create [] in
  div [] [
    button [on.click (fun _ _ -> todos := addTodo "Buy milk" :: !todos)]
           [text "Add a todo"];
    ul [] [textView (View.map renderList todos.view)]
  ]
