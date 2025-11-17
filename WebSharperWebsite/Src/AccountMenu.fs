namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Templating.Runtime.Server

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
            | Some user when not (System.String.IsNullOrWhiteSpace user.name)  -> user.name
            | Some _ | None -> "Account")

    let private showAsFlex (showV: View<bool>) =
        Attr.Concat [
            Attr.DynamicClassPred "hidden" (showV |> View.Map not) // hide when false
            Attr.DynamicClassPred "flex" showV // flex when true
        ]

    // Event handlers used by ws-on*
    let AccountBtnClick (_: TemplateEvent<_, _, _>) =
        isOpen.Value <- not isOpen.Value

    let AccountBtnKeyDown (e: TemplateEvent<_, _, _>) =
        let keyboardEvt = e.Event :> KeyboardEvent
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

    // ws-attr holes (reactive classes/attrs)
    let DropdownAttr () = Attr.DynamicClassPred "hidden" (isOpen.View |> View.Map not)
    let AccountBtnAria () = Attr.Dynamic "aria-expanded" (isOpen.View |> View.Map (fun b -> if b then "true" else "false"))
    let AvatarAttr () = Attr.DynamicClassPred "hidden" (hasAvatarV |> View.Map not)
    let IconAttr () = Attr.DynamicClassPred "hidden" hasAvatarV

    let HeaderAttr () = showAsFlex isAuthedV
    let BtnManageAttr () = showAsFlex isAuthedV
    let BtnLogoutAttr () = showAsFlex isAuthedV
    let BtnLoginAttr () = showAsFlex (isAuthedV |> View.Map not)

    // ${...} holes
    let AvatarSrc : View<string> = avatarSrcV
    let AccountHeaderText : View<string> = displayNameV

    let InitGlobal (): unit =
        async {
            // Close when clicking outside the account root
            let root = byId "accountRoot"
            JS.Document.AddEventListener("click", fun (evt: Event) ->
                if isOpen.Value then
                    match evt.Target with
                    | :? Node as n when not (isNull root) && not (root.Contains n) ->
                        isOpen.Value <- false
                    | _ -> ()
            )
            // Close on Escape anywhere
            JS.Document.AddEventListener("keydown", fun (evt: Event) ->
                let keyboardEvt = evt :?> KeyboardEvent
                if keyboardEvt.Key = "Escape" then isOpen.Value <- false
            )

            let! _ = AuthClient.FetchMe()
            ()
        }
        |> Async.StartImmediate
