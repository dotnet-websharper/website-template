open WebSharper_Server
open WebSharper_ClientServer

let[@website] main =
  Sitelet.infer (fun (_ : endpoint context) ep ->
    match ep with
    | Home ->
        Content.page
          ~title:"Todos"
          [ hydrate (fun () -> Client.view ()) ]
    | _ ->
        Content.page
          ~title:"Not found"
          [ h1 [] [ text "404" ] ])
