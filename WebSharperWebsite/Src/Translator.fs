namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript

/// The C# page's "C# in, JavaScript out" switcher. The tabs and panels are
/// server-rendered (CSharp.html templates); this only flips which one shows.
[<JavaScript>]
module Translator =

    let Select (ev: Dom.Event) =
        let tab = (ev.CurrentTarget :?> Dom.Element)
        let key = tab.GetAttribute "data-tr"
        let root = tab.Closest "[data-translator]"
        if not (isNull root) then
            let tabs = root.QuerySelectorAll "[data-tr]"
            for i in 0 .. tabs.Length - 1 do
                let t = tabs.[i] :?> Dom.Element
                t.SetAttribute("aria-selected", (if t.GetAttribute "data-tr" = key then "true" else "false"))
            let panels = root.QuerySelectorAll "[data-tr-panel]"
            for i in 0 .. panels.Length - 1 do
                let p = panels.[i] :?> Dom.Element
                if p.GetAttribute "data-tr-panel" = key then p.RemoveAttribute "hidden"
                else p.SetAttribute("hidden", "")
