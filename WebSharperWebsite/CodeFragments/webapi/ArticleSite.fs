// Define the application's endpoints
type EndPoint =
    | [<EndPoint "GET /articles">]
        ArticleList
    | [<EndPoint "GET /article">]
        Article of id: int

// Define the content served by these endpoints
let Website =
    Application.MultiPage (fun (ctx: Context<_>) endpoint ->
        match endpoint with
        | ArticleList ->
            Content.Page(
                div [] [
                    h1 [] [text "Welcome!"]
                    a [attr.href (ctx.Link (Article 42))] [
                        text "Go to article 42"
                    ]
                ]
            )
        | Article id ->
            Content.Json { id = id
                            title = "Hello!"
                            date = System.DateTime.Now }
    )
