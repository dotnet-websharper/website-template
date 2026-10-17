type Model = { name: string }
let InitModel = { name = "" }

type Message =
    | SetName of string

let Update message model =
    match message with
    | SetName n -> { model with name = n }

let View dispatch (view: View<Model>) =
    div [] [
        input [
            attr.value view.V.name
            on.change (fun el _ ->
                dispatch (SetName el?value))
        ] []
    ]

let Main = App.CreateSimple InitModel Update View |> App.Run
