namespace slickgrid

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Templating
open WebSharper.SlickGrid

[<JavaScript>]
module Client =
    type IndexTemplate = Template<"wwwroot/index.html", ClientLoad.FromDocument>

    let SetupGrid () =
        let columns = [|
            Column(id = "title", field = "title", Name = "Title", Sortable = true, Width = 100)
            Column(id = "percentComplete", field = "percentComplete", Name = "% Complete", Formatter = Formatters.PercentCompleteBar, Width = 120)
        |]

        let options = GridOption(
            EnableCellNavigation = true,
            EnableColumnReorder = false,
            RowHeight = 35,
            ForceFitColumns = true
        )

        let data = 
            [| for i in 0 .. 100 do
                yield New [
                    "id" => i
                    "title" => "Task " + string i
                    "percentComplete" => Math.Round(Math.Random() * 100.0)
                ]
            |]

        Styles.Grid()
        Styles.AlpineTheme()

        SlickGrid("#myGrid", data, columns, options)

    [<SPAEntryPoint>]
    let Main () =
        SetupGrid()
