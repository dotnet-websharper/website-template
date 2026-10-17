// Server-side
export function ServerFn(){
  return Bind((new AjaxRemotingProvider()).Async("Server/ServerFn", []), (o) => Return(o));
}

// Client-side
async function CallServer() {
  const r = await fetch("/Server/ServerFn", {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });
  const result = await r.json();   // -> "Hello, world!"
  console.log(result);
}
CallServer();
