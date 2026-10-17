namespace WebSharperWebsite

open System.IO
open System.Reflection

/// Loads the code fragments shown in <c>Components.CodeWindow</c> from files
/// embedded as resources (see the <c>CodeFragments/</c> folder). The content is
/// raw - it is never parsed as HTML - so it needs no escaping; the code window
/// renders it through <c>Html.text</c>, which escapes at output time and lets
/// Prism read back the original <c>textContent</c>.
module Snippets =

    let private asm = Assembly.GetExecutingAssembly()

    /// Raw contents of an embedded snippet file, addressed by its
    /// project-relative key (e.g. "add_two_numbers/AddTwoNumbers.fs").
    let text (key: string) : string =
        let resourceName = "WebSharperWebsite.CodeFragments." + key.Replace('/', '.')
        match asm.GetManifestResourceStream resourceName with
        | null ->
            let available = asm.GetManifestResourceNames()
            failwithf "Snippet '%s' not found (expected resource '%s'). Available: %A"
                key resourceName available
        | s ->
            use s = s
            use r = new StreamReader(s)
            r.ReadToEnd()

    /// Prism language id inferred from a snippet file's extension.
    let lang (key: string) : string =
        match Path.GetExtension(key).ToLowerInvariant() with
        | ".fs" | ".fsx" -> "fsharp"
        | ".cs" -> "csharp"
        | ".js" | ".mjs" -> "javascript"
        | ".html" | ".htm" -> "html"
        | ".json" -> "json"
        | ".css" -> "css"
        | ext -> ext.TrimStart('.')
