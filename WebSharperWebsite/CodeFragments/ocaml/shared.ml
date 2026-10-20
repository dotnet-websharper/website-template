(* Shared by both tiers: one type, one function, server and browser. *)
type todo = { id : int; title : string; done_ : bool }

(* Mark it [@rpc] and the compiler writes the client proxy for you. *)
let[@rpc] addTodo (title : string) : todo =
  let id = Id.next () in
  Db.save { id; title; done_ = false };
  { id; title; done_ = false }
