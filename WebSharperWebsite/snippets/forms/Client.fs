namespace forms

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Templating

[<JavaScript>]
module Client =

    type IndexTemplate = Template<"wwwroot/index.html", ClientLoad.FromDocument>

    [<SPAEntryPoint>]
    let Main () =
        let username = Var.Create ""
        let password = Var.Create ""
        let errorMsg = Var.Create ""

        IndexTemplate.LoginForm()
            .Username(username)
            .Password(password)
            .ErrorMsg(errorMsg.View)
            .Login(fun e ->
                e.Event.PreventDefault()
                if username.Value = "" then
                    errorMsg.Value <- "Must enter a username"
                elif password.Value = "" then
                    errorMsg.Value <- "Must enter a password"
                else
                    errorMsg.Value <- ""
                    JS.Alert("Welcome, " + username.Value + "!")
            )
            .Doc()
            |> Doc.RunById "main"