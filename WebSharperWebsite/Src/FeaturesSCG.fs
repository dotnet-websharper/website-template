namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Html

[<JavaScript>]
module FeaturesSCG =

    type GenTab = 
        | EndPoint 
        | UI 
        | Client 
        | Shared 
        | Server

    let ActiveGenTab = Var.Create GenTab.EndPoint

    // Generate tab attributes based on active tab
    let private genTabAttr targetTab =
        ActiveGenTab.View
        |> View.Map (fun current -> current = targetTab)
        |> fun isActive -> 
            Attr.Concat [
                Attr.DynamicClassPred "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white ring-1 ring-black/5" isActive
                Attr.DynamicClassPred "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" (isActive |> View.Map not)
            ]

    // Source code snippets for each tab
    let warpSrc = """template Main "index.html"

endpoint Home "/" return Main
"""

    let endPointSrc = """namespace MyApplication

open WebSharper.Sitelets

type EndPoint =
    | [<EndPoint "/">] Home
"""

    let uiSrc = """namespace MyApplication

open WebSharper.UI.Templating

[<JavaScript>]
module UI =
    type MyTemplate = Template<"index.html">
    let Main = MyTemplate().Doc()
"""

    let clientSrc = """module Client =
    let Start() = Console.Log("App Started")
"""
    let sharedSrc = """type SharedData = { ID: int; Name: string }"""
    let serverSrc = """module Server =
    let DoWork() = async { return 42 }
"""

    // Map Tabs to Source Code
    let getGenCodeSnippet = function
        | EndPoint -> endPointSrc
        | UI -> uiSrc
        | Client -> clientSrc
        | Shared -> sharedSrc
        | Server -> serverSrc

    // Main Hydration Function
    let HydrateSCG () =
        let template = Templates.FeaturesTemplate.SCGTemplate()

        let renderCode src =
            Utils.renderCode src (fun _ -> SnippetCode.Init())
        
        if IsClient then
            template
                .WarpFile(renderCode warpSrc)
                .EndPointFile(renderCode endPointSrc)
                .UiFile(renderCode uiSrc)

                .WarpFileTabbed(renderCode warpSrc)

                .SelectGenEndPoint(fun _ -> ActiveGenTab.Value <- EndPoint)
                .SelectGenUI(fun _ -> ActiveGenTab.Value <- UI)
                .SelectGenClient(fun _ -> ActiveGenTab.Value <- Client)
                .SelectGenShared(fun _ -> ActiveGenTab.Value <- Shared)
                .SelectGenServer(fun _ -> ActiveGenTab.Value <- Server)

                .GenEndPointAttr(genTabAttr EndPoint)
                .GenUIAttr(genTabAttr UI)
                .GenClientAttr(genTabAttr Client)
                .GenSharedAttr(genTabAttr Shared)
                .GenServerAttr(genTabAttr Server)

                .GeneratedContent(
                    ActiveGenTab.View.Doc(fun tab ->
                        getGenCodeSnippet tab
                        |> renderCode
                    )
                )
        else
            template
                .WarpFile(renderCode warpSrc)
                .EndPointFile(renderCode endPointSrc)
                .UiFile(renderCode uiSrc)
                .WarpFileTabbed(renderCode warpSrc)
                .GeneratedContent(renderCode endPointSrc)