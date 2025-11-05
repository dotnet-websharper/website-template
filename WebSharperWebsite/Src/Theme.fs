namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom

[<JavaScript>]
module Theme = 
    
    [<Literal>] 
    let ThemeKey = "color-theme"

    let private prefersDark () : bool = JS.Window.MatchMedia("(prefers-color-scheme: dark)").Matches

    let private rootEl () = JS.Document.DocumentElement

    let private setDark (on: bool) =
        let root = rootEl()
        if on then 
            root.ClassList.Add("dark") 
        else 
            root.ClassList.Remove("dark")

    let private currentTheme () =
        if rootEl().ClassList.Contains("dark") then 
            "dark" 
        else 
            "light"

    let private updateAllIframesTheme () =
        let theme = currentTheme ()
        let nodes = JS.Document.QuerySelectorAll(".themed-iframe")

        for i = 0 to int nodes.Length - 1 do
            let el = As<Element> nodes.[i]
            let baseSrc = el.GetAttribute("data-src")
            if not (isNull baseSrc) then
                el.SetAttribute("src", baseSrc + "?theme=" + theme)

    let private applyTheme (theme: string) =
        setDark (theme = "dark")
        JS.Window.LocalStorage.SetItem(ThemeKey, theme)
        updateAllIframesTheme ()

    let Init () =
        let saved = JS.Window.LocalStorage.GetItem(ThemeKey)
        if saved = "dark" || (isNull saved && prefersDark()) then 
            setDark true 
        else 
            setDark false

        updateAllIframesTheme ()

    let Toggle () : unit =
        let next = 
            if currentTheme () = "dark" then 
                "light" 
            else 
                "dark"

        applyTheme next
