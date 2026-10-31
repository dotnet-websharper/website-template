open WebSharper_UI
open WebSharper_UI.Html
open WebSharper_UI.Notation

(* `addTodo` runs on the server, but here it is just a typed call. *)
let renderList (ts : todo list) =
  String.concat ", " (List.map (fun t -> t.title) ts)

let view () =
  let todos : todo list Var.t = Var.create [] in
  div []
    [ button
        [ on.click (fun _ _ -> todos := addTodo "Buy milk" :: !todos) ]
        [ text "Add a todo" ];
      ul []
        [ textView (View.map renderList (Var.view todos)) ] ]
