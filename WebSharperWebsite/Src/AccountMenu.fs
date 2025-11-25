namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript.Dom
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Templating.Runtime.Server
open WebSharperWebApi

[<JavaScript>]
module AccountMenu =
    open Utils

    // Reactive state
    let private isOpen = Var.Create false
    let private userV : View<option<User>> = AuthClient.UserView
    let private isAuthedV = AuthClient.IsAuthedView

    let private avatarSrcV =
        userV
        |> View.Map (function
            | Some user when not (System.String.IsNullOrWhiteSpace user.avatarUrl) -> user.avatarUrl
            | _ -> "")

    let private hasAvatarV = avatarSrcV |> View.Map ((<>) "")

    let private displayNameV =
        userV
        |> View.Map (function
            | Some user when not (System.String.IsNullOrWhiteSpace user.login) -> user.login
            | Some _ | None -> "Account")

    let private showAsFlex (showV: View<bool>) =
        Attr.Concat [
            Attr.DynamicClassPred "hidden" (showV |> View.Map not) // hide when false
            Attr.DynamicClassPred "flex" showV // flex when true
        ]

    // Event handlers used by ws-on*
    let AccountBtnClick (_: TemplateEvent<_, _, _>) =
        isOpen.Value <- not isOpen.Value

    let AccountBtnKeyDown (e: TemplateEvent<_, _, KeyboardEvent>) =
        let keyboardEvt = e.Event
        match keyboardEvt.Key with
        | "Enter" | " " ->
            keyboardEvt.PreventDefault()
            isOpen.Value <- not isOpen.Value
        | "ArrowDown" ->
            keyboardEvt.PreventDefault()
            isOpen.Value <- true
        | "Escape" ->
            isOpen.Value <- false
        | _ -> ()

    let Logout (_: TemplateEvent<_, _, _>) =
        async {
            isOpen.Value <- false
            do! AuthClient.Logout(true)
        } |> Async.StartImmediate

    let CloseOnBackgroundClick (_: TemplateEvent<_, _, _>) =
        if isOpen.Value then
            isOpen.Value <- false

    let StopPropagation (e: TemplateEvent<_, _, _>) =
        e.Event.StopPropagation()

    let CloseOnEscape (e: TemplateEvent<_, _, KeyboardEvent>) =
        let keyboardEvt = e.Event
        if keyboardEvt.Key = "Escape" then
            isOpen.Value <- false

    // ws-attr holes (reactive classes/attrs)
    let DropdownAttr () = Attr.DynamicClassPred "hidden" (isOpen.View |> View.Map not)
    let AccountBtnAria () = Attr.Dynamic "aria-expanded" (isOpen.View |> View.Map (fun b -> if b then "true" else "false"))
    let AvatarAttr () =
        Attr.Concat [
            // add/remove the src attribute depending on whether we have an avatar
            Html.attr.srcDyn avatarSrcV

            // hide the <img> when there is no avatar
            Attr.DynamicClassPred "hidden" (hasAvatarV |> View.Map not)            
        ]

    let IconAttr () = Attr.DynamicClassPred "hidden" hasAvatarV

    let HeaderAttr () = showAsFlex isAuthedV
    let BtnManageAttr () = showAsFlex isAuthedV
    let BtnLogoutAttr () = showAsFlex isAuthedV
    let BtnLoginAttr () = showAsFlex (isAuthedV |> View.Map not)

    let AccountHeaderText : View<string> = displayNameV

    let InitGlobal () : unit =
        async {
            let! _ = AuthClient.FetchMe()
            ()
        }
        |> Async.StartImmediate
