[<JavaScript>]
module Client =
    type IndexTemplate = Template<"wwwroot/index", ClientLoad.FromDocument>

    let People =
        ListModel.FromSeq [
            "John"
            "Paul"
        ]

    [<SPAEntryPoint>]
    let Main () =
        let newName = Var.Create ""
        IndexTemplate.Main()
            .ListContainer(
                People.View.DocSeqCached(fun (name: string) -> 
                    IndexTemplate.ListItem().Name(name).Doc()
                )
            )
            .Name(newName)
            .Add(fun _ ->
                People.Add(newName.Value)
                newName.Value <- ""
            )
            .Doc()
        |> Doc.RunById "main"
