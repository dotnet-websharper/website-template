namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Notation
open WebSharper.UI.Templating

[<JavaScript>]
module Templates =   
    //type MainTemplate = Templating.Template<"Main.html">
    type HomeTemplate = Templating.Template<"Home.html">
    type AbouTemplate = Templating.Template<"Download.html">
    type LayoutTemplate = Templating.Template<"Layout.html", ClientLoad.FromDocument, ServerLoad.PerRequest>

[<JavaScript>]
module Client =
    let DoSomething (input: string) =
        System.String(Array.rev(input.ToCharArray()))

    let Layout () =
        Theme.Init()
        Templates.LayoutTemplate()
            .ToggleTheme(fun _ -> Theme.Toggle())
            .Bind()
        Doc.Empty

    let Main () =
        let rvReversed = Var.Create ""
        Templates.HomeTemplate.MainForm()
            .OnSend(fun e ->
                let res = DoSomething e.Vars.TextToReverse.Value
                rvReversed := res
            )
            .Reversed(rvReversed.View)
            .Doc()

    let About () =
        Templates.AbouTemplate.AboutTemplates()
            .ClickMe(fun _ -> JS.Alert("You clicked me!"))
            .Doc()