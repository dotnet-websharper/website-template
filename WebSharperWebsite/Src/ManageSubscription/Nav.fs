namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.Sitelets
open WebSharper.JavaScript

[<JavaScript>]
module Nav =
    type Tab = | Subs | Billing

    let private toHash = function Subs -> "subs" | Billing -> "billing"
    let private ofHash = function | "billing" -> Billing | _ -> Subs

    let router : Router<Tab> = 
        [ 
            Tab.Subs, "subs"
            Tab.Billing, "billing" 
        ] |> Router.Table

    let getRouteFromHash () =
        let hash = JS.Window.Location.Hash
        if System.String.IsNullOrEmpty hash then 
            "subs" 
        else 
            hash

    let current : Var<Tab> =
        Var.Create (ofHash (getRouteFromHash ()))

    do Router.InstallHashInto current Tab.Subs router

    let GoTo (t: Tab) = current.Value <- t

    let Mount (ui: Types.UiRefs) =
        let host = JS.Document.CreateElement("span")
        let show = toHash >> Views.showPage ui

        current.View
        |> Doc.BindView (fun t -> 
            show t
            Doc.Empty
        )
        |> Doc.Run host

        // initial paint
        show current.Value
