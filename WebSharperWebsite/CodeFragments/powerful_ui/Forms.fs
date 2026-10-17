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
            div [] [label [] [text "Username: "]; Doc.InputType.Text [] user]
            div [] [label [] [text "Password: "]; Doc.InputType.Password [] pass]
            Doc.Button "Log in" [] submit.Trigger
            div [] [
                Doc.ShowErrors submit.View (fun errors ->
                    errors
                    |> Seq.map (fun m -> p [] [text m.Text])
                    |> Doc.Concat)
            ]
        ]
    )
    
LoginForm() |> Doc.RunById "main"
