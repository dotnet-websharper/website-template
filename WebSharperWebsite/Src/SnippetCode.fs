namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript

type Tailwind() =
    inherit Resources.BaseResource("/tailwind.css")

[<JavaScript; Require(typeof<Tailwind>)>]
module SnippetCode =

    // CSS side-effect imports (theme + plugin + overrides)
    do JS.ImportFile "prismjs/themes/prism-dark.css"
    do JS.ImportFile "prismjs/plugins/line-numbers/prism-line-numbers.css"
    do JS.ImportDynamic "../../../tailwind.css" |> ignore

    // JS: default Prism object + language components + plugin
    let private prism : obj = JS.ImportDefault "prismjs"
    do JS.ImportFile "prismjs/components/prism-clike.js"
    do JS.ImportFile "prismjs/components/prism-javascript.js"
    do JS.ImportFile "prismjs/components/prism-fsharp.js"
    do JS.ImportFile "prismjs/components/prism-csharp.js"
    do JS.ImportFile "prismjs/plugins/line-numbers/prism-line-numbers.js"

    // Call Prism.highlightAll()
    [<Inline "$0.highlightAll()">]
    let private highlightAll (p: obj) = X<unit>

    let Init() = 
        highlightAll prism
