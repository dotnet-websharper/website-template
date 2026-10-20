self.onmessage = function (e) {
    console.log(
       "Received message from main thread: "
           + e.data.toString());
}
