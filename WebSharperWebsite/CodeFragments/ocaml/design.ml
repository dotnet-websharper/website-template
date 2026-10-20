open WebSharper_Server
open WebSharper_UI
open WebSharper_UI.Html
open WebSharper_ClientServer

(* A typed endpoint: request paths, query arguments and links
   are all generated from this one definition. *)
type endpoint =
  | Home [@endpoint "GET /"]
  | Article of int * string [@endpoint "GET /blog/@id/@slug"]

(* Templates are ordinary HTML files, compiled into typed OCaml modules. *)
module Greeting = [%template "views/greeting.html"]

let[@website] main =
  Sitelet.infer (fun (_ : endpoint context) ep ->
    match ep with
    | Home ->
        Content.page ~title:"Home" [
          hydrate (fun () ->
            Greeting.create ()
            |> Greeting.title "Hello, OCaml!"
            |> Greeting.body "One language, server and browser."
            |> Greeting.doc)
        ]
    | Article (id, slug) ->
        Content.page ~title:slug [
          h1 [] [text ("Article #" ^ string_of_int id)]
        ])
