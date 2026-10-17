type Person = { name: string; age: int }

type ShowPerson(props) =
    inherit React.Component<Person, unit>(props)

    override this.Render() =
        ul [attr.className "person"] [
            li [] [text ("Name: " + this.Props.name)]
            li [] [text ("Age: " + string this.Props.age)]
        ]
