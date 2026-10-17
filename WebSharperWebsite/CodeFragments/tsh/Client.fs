IndexTemplate.Main()
    .Name(newName)
    .Add(fun _ ->
        People.Add(newName.Value)
        newName.Value <- ""
    )
    .Remove(fun _ -> 
        People.Remove newName.Value                                                            
    ) 
    .Doc()
