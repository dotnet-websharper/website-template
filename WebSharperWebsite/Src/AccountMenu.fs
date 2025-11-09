namespace WebSharperWebsite

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom

[<JavaScript>]
module AccountMenu =
    open Utils
    
    type Controller = { 
        Render : obj -> unit
        SetAuthFunctions : (unit -> unit) * (unit -> unit) -> unit 
    }

    let private AuthModulePath = toAbsoluteUrl "Js/ws-auth.js"

    let private showFlex (el: Element) (show: bool) =
        if not (isNull el) then
            el.ClassList.Toggle("hidden", not show) |> ignore
            el.ClassList.Toggle("flex", show) |> ignore

    let private setText (el: Element) (text: string) =
        if not (isNull el) then el.TextContent <- text

    // Desktop controller
    let private setupDesktop () : Controller option =
        let root = byId "accountRoot"
        let btn = byId "accountBtn"
        let dropdown = byId "accountDropdown"
        let avatar = byId "accountAvatar"
        let icon = byId "accountIcon"
        let header = byId "accountHeader"
        let btnManage = byId "btnManage"
        let btnLogin = byId "btnLogin"
        let btnLogout = byId "btnLogout"

        if isNull root || isNull btn || isNull dropdown then None else

        let mutable isOpen = false
        let setOpen (openState: bool) =
            isOpen <- openState
            dropdown.ClassList.Toggle("hidden", not openState) |> ignore
            btn.SetAttribute("aria-expanded", if openState then "true" else "false")

        let onOutsideClick (e: Dom.Event) =
            match e.Target with
            | :? Node as n when root.Contains n |> not -> setOpen false
            | _ -> ()

        let onEsc (e: Dom.Event) =
            match e?key with
            | "Escape" -> setOpen false
            | _ -> ()

        let onBtnKeyDown (e: Dom.Event) =
            match e?key with
            | "Enter" | " " ->
                e.PreventDefault()
                setOpen (not isOpen)
            | "ArrowDown" ->
                e.PreventDefault()
                setOpen true
            | _ -> ()

        btn.AddEventListener("click", fun (_: Event) -> setOpen (not isOpen))
        btn.AddEventListener("keydown", onBtnKeyDown)
        JS.Document.AddEventListener("click", onOutsideClick)
        JS.Document.AddEventListener("keydown", onEsc)

        // Will be injected after we load ws-auth.js
        let mutable doLogin : unit -> unit = fun () -> ()
        let mutable doLogout : unit -> unit = fun () -> ()

        if not (isNull btnLogin) then
            btnLogin.AddEventListener("click", fun (_: Event) -> doLogin())

        if not (isNull btnLogout) then
            btnLogout.AddEventListener("click", fun (_: Event) ->
                doLogout()
                setOpen false
            )

        let render (user: obj) =
            let authed = not (isNull user)

            if authed then
                let avatarUrl = user?avatarUrl |> As<string>
                if not (isNull avatar) then
                    if not (isNull avatarUrl) && avatarUrl <> "" then
                        avatar?src <- avatarUrl
                        avatar.ClassList.Remove("hidden")
                        icon.ClassList.Add("hidden")
                    else
                        avatar?src <- ""
                        avatar.ClassList.Add("hidden")
                        icon.ClassList.Remove("hidden")

                let displayName =
                    let a = user?login |> As<string>
                    if not (isNull a) && a <> "" then a
                    else
                        let b = user?name |> As<string>
                        if isNull b || b = "" then "Account" else b

                if not (isNull header) then
                    setText header displayName
                    header.ClassList.Remove("hidden")
            else
                if not (isNull avatar) then
                    avatar?src <- ""
                    avatar.ClassList.Add("hidden")
                icon.ClassList.Remove("hidden")
                if not (isNull header) then
                    setText header ""
                    header.ClassList.Add("hidden")

            showFlex btnManage authed
            showFlex btnLogout authed
            showFlex btnLogin (not authed)

        let setAuthFns (loginF, logoutF) =
            doLogin  <- loginF
            doLogout <- logoutF

        Some { Render = render; SetAuthFunctions = setAuthFns }

    // Mobile controller
    let private setupMobile (root: Element) : Controller option =
        if isNull root then None else

        let header = root.QuerySelector("[data-el='header']") |> As<Element>
        let btnManage = root.QuerySelector("[data-el='manage']") |> As<Element>
        let btnLogin = root.QuerySelector("[data-el='login']")  |> As<Element>
        let btnLogout = root.QuerySelector("[data-el='logout']") |> As<Element>

        let mutable doLogin  : unit -> unit = fun () -> ()
        let mutable doLogout : unit -> unit = fun () -> ()

        if not (isNull btnLogin) then
            btnLogin.AddEventListener("click", fun (_: Event) -> doLogin())
        if not (isNull btnLogout) then
            btnLogout.AddEventListener("click", fun (_: Event) -> doLogout())

        let render (user: obj) =
            let authed = not (isNull user)
            if authed then
                let name =
                    let a = user?login |> As<string>
                    if not (isNull a) && a <> "" then a
                    else
                        let b = user?name |> As<string>
                        if isNull b || b = "" then "Account" else b

                setText header name
                showFlex header true
            else
                setText header ""
                showFlex header false

            showFlex btnManage authed
            showFlex btnLogout authed
            showFlex btnLogin (not authed)

        let setAuthFns (loginF, logoutF) =
            doLogin  <- loginF
            doLogout <- logoutF

        Some { Render = render; SetAuthFunctions = setAuthFns }

    // Entry point
    let Init () =
        // Collect controllers (desktop + each mobile block)
        let controllers = ResizeArray<Controller>()

        match setupDesktop () with
        | Some c -> controllers.Add c
        | None -> ()

        let nodes = JS.Document.QuerySelectorAll("[data-account-menu]")
        for i = 0 to int nodes.Length - 1 do
            let root = nodes.Item i |> As<Element>
            // Skip the desktop root if it accidentally carries the data attribute
            if isNull root || root.Id = "accountRoot" then () else
            match setupMobile root with
            | Some c -> controllers.Add c
            | None -> ()

        // Dynamically import ws-auth and wire everything
        JS.ImportDynamic(AuthModulePath)
            .Then(fun m ->
                let onChange : (obj -> unit) -> unit = m?onChange
                let fetchMe : unit -> unit = m?fetchMe
                let loginJs : unit -> unit = m?login
                let logoutJs : unit -> Promise<obj> = m?logout

                let loginF () = loginJs()
                let logoutF () = logoutJs() |> ignore

                // give controllers the auth actions
                for controller in controllers do controller.SetAuthFunctions (loginF, logoutF)

                // react to auth state changes
                onChange (fun user -> for controller in controllers do controller.Render user)

                // ensure we render with fresh state at load
                fetchMe()
                box null)
            |> ignore
