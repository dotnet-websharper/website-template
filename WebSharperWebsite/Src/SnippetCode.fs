namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom
open WebSharper.Core.Resources

[<JavaScript>]
module SnippetCode =
    open Utils

    // CSS side-effect imports (theme + plugin + overrides)
    do JS.ImportFile "prismjs/themes/prism-dark.css"
    do JS.ImportFile "prismjs/plugins/line-numbers/prism-line-numbers.css"

    // JS: default Prism language components + plugin
    do JS.ImportFile "prismjs/components/prism-clike.js"
    do JS.ImportFile "prismjs/components/prism-javascript.js"
    do JS.ImportFile "prismjs/components/prism-fsharp.js"
    do JS.ImportFile "prismjs/components/prism-csharp.js"
    do JS.ImportFile "prismjs/plugins/line-numbers/prism-line-numbers.js"

    // Call Prism.highlightAll()
    [<Import "prismjs"; Inline "$import.highlightAll()">]
    let private highlightAll() = X<unit>

    let Init() = 
        highlightAll()

    // Safe cast to option for nullable DOM values
    let private asOption<'T when 'T : null> (x: 'T) = 
        if isNull x then 
            None 
        else 
            Some x

    type IndicatorPos = { LeftPx: string; WidthPx: string }

    let private measureIndicatorPos (tab: HTMLElement) (container: HTMLElement) : IndicatorPos =
        let leftPx =
            (tab.GetBoundingClientRect().Left - container.GetBoundingClientRect().Left).ToString() + "px"
        let widthPx = tab.GetBoundingClientRect().Width.ToString() + "px"

        { LeftPx = leftPx; WidthPx = widthPx }

    let private applyIndicatorPos (indicator: HTMLElement) (pos: IndicatorPos) =
        indicator.Style.SetProperty("left", pos.LeftPx)
        indicator.Style.SetProperty("width", pos.WidthPx)

    let private moveIndicator (indicatorEl: Element) (tabEl: Element) =
        let tab = tabEl :?> HTMLElement
        let container = tabEl.ParentElement :?> HTMLElement
        let indicator = indicatorEl :?> HTMLElement
        measureIndicatorPos tab container |> applyIndicatorPos indicator

    let private markSelectedInGroup (clicked: Element) =
        match asOption clicked.ParentElement with
        | None -> ()
        | Some tablist ->
            queryAll (tablist) "[role='tab']"
            |> Seq.iter (fun tab ->
                let isActive = (tab :> Element) = clicked
                tab.SetAttribute("aria-selected", if isActive then "true" else "false")
            )

    let private showOnlyPanel (root: Element) (targetName: string) =
        queryAll root "[role='tabpanel']"
        |> Seq.iter (fun panel ->
            if panel.GetAttribute("data-lang") = targetName then
                panel.ClassList.Remove("hidden")
            else
                panel.ClassList.Add("hidden")
        )

    // Initialize a single snippet root: select first tab, move indicator, show its panel.
    let private initSnippetRoot (root: Element) =
        let tabs = root.QuerySelectorAll("[role='tab']")

        if tabs.Length > 0 then
            let first = tabs.Item 0 :?> Element
            markSelectedInGroup first

            asOption (root.QuerySelector(".tab-indicator")) 
            |> Option.iter (fun indicator -> moveIndicator indicator first)

            asOption (first.GetAttribute("data-target")) 
            |> Option.iter (fun target -> showOnlyPanel root target)

    // Call after render by the template
    let InitTabs () : unit =
        JS.ImportFile "./Js/line-numbers.js"
        let snippets = JS.Document.QuerySelectorAll("[data-name='snippet']")
        for i = 0 to int snippets.Length - 1 do
            initSnippetRoot (snippets.Item i :?> Element)

    // From any event target, find the actual tab button (role='tab').
    let private findClickedTab (ev: Dom.Event) : HTMLElement option =
        match ev.Target with
        | :? Element as el ->
            asOption (el.Closest("[role='tab']"))
            |> Option.map (fun e -> e :?> HTMLElement)
        | _ -> None

    // Given a tab button, perform the full tab change (indicator + selection + panel).
    let private activateTabFromButton (btn: HTMLElement) =
        match asOption (btn.Closest("[data-name='snippet']")) with
        | None -> ()
        | Some root ->
            // Indicator
            asOption (root.QuerySelector(".tab-indicator"))
            |> Option.iter (fun ind -> moveIndicator ind (btn :> Element))

            // Selection
            markSelectedInGroup (btn :> Element)

            // Panels
            asOption (btn.GetAttribute("data-target"))
            |> Option.iter (fun target -> showOnlyPanel root target)

    // ws-onclick handler (Dom.Event form kept for backward compatibility)
    let OnTabClick (ev: Dom.Event) : unit =
        findClickedTab ev 
        |> Option.iter activateTabFromButton
