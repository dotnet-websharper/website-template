// Calling a [<Remote>] function from the client compiles to a typed HTTP call.
async function CallServer() {
    const response = await fetch("/Server/ServerFn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([])
    });
    const result = await response.json();   // "Hello, world!"
    console.log(result);
}

CallServer();
