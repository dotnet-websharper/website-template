open WebSharper_UI
open WebSharper_UI.Html
open WebSharper_UI.Notation

(* The same value, read and written with ordinary syntax. *)
let counter () =
  let clicks = Var.create 0 in
  div [] [
    button [on.click (fun _ _ -> clicks := !clicks + 1)] [text "Click me"];
    p [] [text "Clicked "; textView (View.map string clicks.view); text " times"]
  ]
