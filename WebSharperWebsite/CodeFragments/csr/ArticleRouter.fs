let router = Router.Infer<EndPoint>()
let route = router.Install(Article 1)

let view =
    route.View.Map (function
        | Article id ->
            div [] [
                h1 [] [text $"This is article {id}"]
                a [attr.href (router.Link Articles)] [text "Go back to the list of articles"]
            ]
        | Articles ->
            h1 [] [text "List of articles"]
    )

let doc = Doc.BindView id view
Doc.RunById "main" doc
