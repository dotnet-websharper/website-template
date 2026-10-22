namespace WebSharperWebsite

open WebSharper
open WebSharper.UI
open WebSharper.UI.Html

/// A tab shown in the code editors. `Code` is raw, unescaped source (escaped
/// at render time via <c>Html.text</c>), so fragments are authored as plain
/// files and never HTML-escaped (see <c>Snippets</c>).
type CodeTab =
    {
        Label: string
        Lang: string
        Code: string
    }

/// Reusable page components. The markup lives in Components.html as inner
/// templates; only data is supplied here (so no DOM is built in F#).
[<Sealed>]
type Component private () =

    static member internal TabIcon(lang: string) : Doc =
        match lang.ToLowerInvariant() with
        | "fsharp" -> Templates.ComponentsTemplate.IconFSharp().Doc()
        | "javascript" | "js" -> Templates.ComponentsTemplate.IconJavaScript().Doc()
        | "html" -> Templates.ComponentsTemplate.IconHtml().Doc()
        | "ocaml" -> Templates.ComponentsTemplate.IconOcaml().Doc()
        | "json" -> Templates.ComponentsTemplate.IconJson().Doc()
        | "csharp" -> Templates.ComponentsTemplate.IconCSharp().Doc()
        | _ -> Doc.Empty

    static member internal TabIndicator() : Doc =
        Templates.ComponentsTemplate.TabIndicator().Doc()

    static member internal Tab(t: CodeTab) : Doc =
        Templates.ComponentsTemplate.CodeTab()
            .Label(t.Label)
            .Icon(Component.TabIcon t.Lang)
            .TabClick(fun e -> SnippetCode.OnTabClick e.Event)
            .Doc()

    static member internal EditorPanel(i, t: CodeTab) : Doc =
        if i = 0 then
            Templates.ComponentsTemplate.CodeFilePanelFirst().Label(t.Label).Lang(t.Lang).Code(t.Code).Doc()
        else
            Templates.ComponentsTemplate.CodeFilePanel().Label(t.Label).Lang(t.Lang).Code(t.Code).Doc()

    static member internal PreviewPanel(i, t: CodeTab) : Doc =
        if i = 0 then
            Templates.ComponentsTemplate.CodePanelFirst().Label(t.Label).Lang(t.Lang).Code(t.Code).Doc()
        else
            Templates.ComponentsTemplate.CodePanel().Label(t.Label).Lang(t.Lang).Code(t.Code).Doc()

    /// A tabbed code editor: one tab per entry in `tabs` (one or more files).
    static member CodeFiles(tabs: CodeTab list) : Doc =
        Templates.ComponentsTemplate.CodeFiles()
            .Tabs(Doc.Concat (Component.TabIndicator () :: List.map Component.Tab tabs))
            .Panels(Doc.Concat (tabs |> List.mapi (fun i t -> Component.EditorPanel(i, t))))
            .Init(fun () ->
                SnippetCode.Init()
                SnippetCode.InitTabs())
            .Doc()

    /// A three-pane code window (worker + two JS files) with a Terminal.
    static member VsCode3(tab1: CodeTab, tab2: CodeTab, tab3: CodeTab, terminalContent: string) : Doc =
        Templates.ComponentsTemplate.VsCode3()
            .Tab1Label(tab1.Label).Tab1Icon(Component.TabIcon tab1.Lang).Tab1Code(tab1.Code)
            .Tab2Label(tab2.Label).Tab2Icon(Component.TabIcon tab2.Lang).Tab2Code(tab2.Code)
            .Tab3Label(tab3.Label).Tab3Icon(Component.TabIcon tab3.Lang).Tab3Code(tab3.Code)
            .TerminalContent(terminalContent)
            .Doc()

    /// The code-window + live-preview widget: `tabs` supply label/language/raw
    /// code, `previewPath` is the URL loaded into the preview iframe.
    static member CodeFilesWithPreviewPanel(previewPath: string, tabs: CodeTab list) : Doc =
        Templates.ComponentsTemplate.CodeFilesWithPreviewPanel()
            .Tabs(Doc.Concat (Component.TabIndicator () :: List.map Component.Tab tabs))
            .Panels(Doc.Concat (tabs |> List.mapi (fun i t -> Component.PreviewPanel(i, t))))
            .Preview(previewPath)
            .OnTabClick(fun e -> SnippetCode.OnTabClick e.Event)
            .Init(fun () ->
                SnippetCode.Init()
                SnippetCode.InitTabs())
            .Doc()

    static member internal VsCodePanel(i, t: CodeTab) : Doc =
        if i = 0 then
            Templates.ComponentsTemplate.VsCodePanelFirst().Label(t.Label).Lang(t.Lang).Code(t.Code).Doc()
        else
            Templates.ComponentsTemplate.VsCodePanel().Label(t.Label).Lang(t.Lang).Code(t.Code).Doc()

    /// A VS Code-looking editor: the code `tabs`, a "Result" tab that shows
    /// `resultUrl` in an iframe, and a Terminal panel below.
    static member VsCode(resultUrl: string, tabs: CodeTab list) : Doc =
        let tabsDoc =
            Doc.Concat (
                (Component.TabIndicator () :: List.map Component.Tab tabs)
                @ [ Templates.ComponentsTemplate.VsCodeResultTab()
                        .TabClick(fun e -> SnippetCode.OnTabClick e.Event)
                        .Doc() ])
        let panelsDoc =
            Doc.Concat (
                (tabs |> List.mapi (fun i t -> Component.VsCodePanel(i, t)))
                @ [ Templates.ComponentsTemplate.VsCodePanelResult().Url(resultUrl).Doc() ])
        Templates.ComponentsTemplate.VsCode()
            .Tabs(tabsDoc)
            .Panels(panelsDoc)
            .Doc()
