namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom

[<JavaScript>]
module VideoPlayer =

    [<Inline>]
    let private AsciinemaPlayer(): obj = JS.ImportAll("asciinema-player")
    [<Inline "$0.create($1, $2, $3)">]
    let private AsciinemaPlayerCreate (parent: obj) (castUrl: string) (el: Element) (options: obj) = X<unit>
    [<Inline>]
    let private AsciinemaCss(): obj = JS.ImportDynamic("asciinema-player/dist/bundle/asciinema-player.css")
    
    let Init (containerId: string) =
        do AsciinemaCss() |> ignore

        let AsciinemaPlayer = AsciinemaPlayer()

        let el = JS.Window.Document.GetElementById(containerId)
        if isNull el then
            Console.Log("Container not found:", containerId)
        else
            AsciinemaPlayerCreate AsciinemaPlayer "Assets/ws-template.cast" el ({|
                cols = 100
                rows = 20
                theme = "dracula"
                speed = 2.5
                autoPlay = true
                loop = true
                idleTimeLimit = 6 
            |})