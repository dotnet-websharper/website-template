namespace forms

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open WebSharper.UI.Templating
open WebSharper.Forms

[<JavaScript>]
module Client =
    // The templates are loaded from the DOM, so you just can edit index.html
    // and refresh your browser, no need to recompile unless you add or remove holes.
    type IndexTemplate = Template<"wwwroot/index.html", ClientLoad.FromDocument>

    let LoginForm () =
        Form.Return (fun user pass -> user, pass)
        <*> (Form.Yield ""
            |> Validation.IsNotEmpty "Must enter a username")
        <*> (Form.Yield ""
            |> Validation.IsNotEmpty "Must enter a password")
        |> Form.WithSubmit
        |> Form.Run (fun (u, p) ->
            JS.Alert("Welcome, " + u + "!")
        )
        |> Form.Render (fun user pass submit ->
            form [] [
                div [attr.``class`` "input-field"] [label [] [text "Username: "]; 
                    Doc.InputType.Text [attr.required user.V] user]
                div [attr.``class`` "input-field"] [label [] [text "Password:  "]; 
                    Doc.InputType.Password [attr.required pass.V] pass]
                Doc.Button "Log in" [attr.``type`` "submit"] submit.Trigger
                div [] [
                    Doc.ShowErrors submit.View (fun errors ->
                        errors
                        |> Seq.map (fun m -> p [] [text m.Text])
                        |> Doc.Concat)
                ]
            ]
        )

    [<SPAEntryPoint>]
    let Main () =
        LoginForm() |> Doc.RunById "main"
