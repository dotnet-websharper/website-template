let worker = new Worker(fun self ->
  // This code runs in the worker:
  self.OnMessage <- fun e ->
      Console.Log(
        "Received message from main thread: " 
        + string e.Data
      )
)

// This code runs in the main thread:
worker.PostMessage("Hello, worker!")
