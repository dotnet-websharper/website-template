namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom

[<JavaScript>]
module Theme = 
    
    // Shared with docs.websharper.com (fumadocs / next-themes): the same storage
    // key and the same values ("light" | "dark" | "system").
    [<Literal>] 
    let ThemeKey = "theme"

    let private prefersDark () : bool = JS.Window.MatchMedia("(prefers-color-scheme: dark)").Matches

    let private rootEl () = JS.Document.DocumentElement

    let private resolve (theme: string) =
        if theme = "system" then (if prefersDark () then "dark" else "light") else theme

    let private setDark (on: bool) =
        let root = rootEl()
        if on then 
            root.ClassList.Add("dark") 
        else 
            root.ClassList.Remove("dark")

    let private apply (theme: string) =
        let resolved = resolve theme
        setDark (resolved = "dark")
        let root = As<HTMLElement> (rootEl())
        root.Style.SetProperty("color-scheme", resolved)

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
                let url = new URL(baseSrc, JS.Window.Location.Href)
                url.SearchParams.Set("theme", theme)
                el.SetAttribute("src", url.ToString())

    let private applyTheme (theme: string) =
        apply theme
        JS.Window.LocalStorage.SetItem(ThemeKey, theme)
        updateAllIframesTheme ()

    let Init () =
        updateAllIframesTheme ()

        let saved = JS.Window.LocalStorage.GetItem(ThemeKey)
        let theme =
            if saved = "dark" || saved = "light" || saved = "system" then saved
            else "dark"
        apply theme

    let Toggle () : unit =
        let next = 
            if currentTheme () = "dark" then 
                "light" 
            else 
                "dark"

        applyTheme next
