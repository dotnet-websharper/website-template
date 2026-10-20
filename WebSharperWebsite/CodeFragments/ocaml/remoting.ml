open WebSharper_Server

(* Tag a server-side function with [@rpc] ... *)
let[@rpc] search (query : string) : string list =
  Db.search query

(* ... and call it from the browser as if it were local. Arguments and
   results are serialized for you - no fetch, no routes, no JSON glue. *)
let results (query : string) =
  View.fromAsync (search query)
