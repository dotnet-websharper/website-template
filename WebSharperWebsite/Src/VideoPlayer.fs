namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom

[<JavaScript>]
module VideoPlayer =

    [<Import ("create", "asciinema-player"); Inline "$import($castUrl, $el, $options)">]
    let private AsciinemaPlayerCreate (castUrl: string) (el: Element) (options: obj) = X<unit>
    
    let Init (containerId: string) =
        JS.ImportFile "asciinema-player/dist/bundle/asciinema-player.css"

        let el = JS.Window.Document.GetElementById(containerId)
        if isNull el then
            Console.Log("Container not found:", containerId)
        else
            AsciinemaPlayerCreate "Assets/ws-template.cast" el ({|
                cols = 100
                rows = 20
                theme = "dracula"
                speed = 2.5
                autoPlay = true
                loop = true
                idleTimeLimit = 6 
            |})