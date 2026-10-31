open WebSharper_UI
open WebSharper_UI.Html
open WebSharper_UI.Notation

(* A `Var` holds a value you can change. A `View` reads it reactively: the
   document updates whenever the underlying value changes. *)
let () =
  let clicks : int Var.t = Var.create 0 in
  let view =
    div []
      [ button [ On.click (fun _ _ -> clicks := !clicks + 1) ]
          [ Doc.text "Click me" ];
        p [] [
          Doc.text "Clicked ";
          Doc.textView (View.map (fun n -> Printf.sprintf "%d" n) (Var.view clicks));
          Doc.text " times"
        ] ]
  in
  Doc.runById "root" view
