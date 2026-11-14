// Extract binding metadata for the websharper.com Bindings page.
//
// Usage:
//   dotnet fsi scripts/extract-bindings.fsx
//
// Output: WebSharperWebsite/bindings.json
//
// The script reads binding metadata from a built-in catalog (display names,
// descriptions and categories change rarely) and refreshes the dynamic parts:
//   * the latest published NuGet version of each WebSharper.* package
//   * the upstream library version each binding targets
//   * the preferred sample link: websharper-samples first, binding test/demo second
//
// Local binding repos under ~/dotnet-websharper are used when present; otherwise
// raw GitHub URLs are fetched, so the script also works in CI.

open System
open System.IO
open System.Net.Http
open System.Net.Http.Headers
open System.Text.Json
open System.Text.Json.Nodes

let scriptDir = __SOURCE_DIRECTORY__
let repoRoot = Path.GetFullPath(Path.Combine(scriptDir, "..", ".."))
let outputPath = Path.Combine(repoRoot, "WebSharperWebsite", "bindings.json")
let localBindingsRoot = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), "dotnet-websharper")

let http = new HttpClient()
http.Timeout <- TimeSpan.FromSeconds(30.0)
http.DefaultRequestHeaders.UserAgent.ParseAdd("websharper-website-extractor/1.0")

let tryGet (url: string) =
    try
        let resp = http.GetAsync(url).GetAwaiter().GetResult()
        if resp.IsSuccessStatusCode then Some (resp.Content.ReadAsStringAsync().GetAwaiter().GetResult())
        else None
    with _ -> None

let tryHead (url: string) =
    try
        let req = new HttpRequestMessage(HttpMethod.Head, url)
        let resp = http.SendAsync(req).GetAwaiter().GetResult()
        resp.IsSuccessStatusCode
    with _ -> false

// ---------------------------------------------------------------------------
// Catalog
// ---------------------------------------------------------------------------

type BindingMeta =
    {
        Name: string
        Package: string
        Library: string
        Repo: string
        Description: string
        Category: string
        SampleName: string option   // repo name in websharper-samples, when known
    }

type BrowserMeta =
    {
        Name: string
        Package: string
        Repo: string
        Description: string
        Category: string
    }

let libraries: BindingMeta list =
    [
        // Charts & visualization
        { Name = "Chart.js"; Package = "WebSharper.ChartJs"; Library = "Chart.js"; Repo = "chartjs"; Category = "Charts & visualization"; SampleName = Some "ChartJS"; Description = "Canvas charts — line, bar, radar, doughnut and more — configured through a typed model." }
        { Name = "D3"; Package = "WebSharper.D3"; Library = "D3"; Repo = "d3"; Category = "Charts & visualization"; SampleName = Some "D3"; Description = "Data-driven documents: selections, scales, shapes, transitions and geo projections." }
        { Name = "Highcharts"; Package = "WebSharper.Highcharts"; Library = "Highcharts"; Repo = "highcharts"; Category = "Charts & visualization"; SampleName = Some "HighCharts"; Description = "Interactive charts, Highstock and Highmaps, generated from the official Highcharts API." }
        { Name = "Highstock"; Package = "WebSharper.Highstock"; Library = "Highcharts"; Repo = "highcharts"; Category = "Charts & visualization"; SampleName = Some "HighCharts"; Description = "Time-series and financial charts with navigator, range selector and data grouping." }
        { Name = "Highmaps"; Package = "WebSharper.Highmaps"; Library = "Highcharts"; Repo = "highcharts"; Category = "Charts & visualization"; SampleName = Some "HighCharts"; Description = "Geographic maps and map series, generated from the official Highcharts API." }
        { Name = "Plotly.js"; Package = "WebSharper.Plotly"; Library = "Plotly.js"; Repo = "plotly"; Category = "Charts & visualization"; SampleName = None; Description = "Interactive scientific and statistical charts with a typed trace and layout model." }

        // Editors & documents
        { Name = "Ace"; Package = "WebSharper.Ace"; Library = "Ace"; Repo = "ace"; Category = "Editors & documents"; SampleName = None; Description = "The embeddable code editor — sessions, documents, ranges, selections, search, markers and themes." }
        { Name = "CodeMirror"; Package = "WebSharper.CodeMirror"; Library = "CodeMirror"; Repo = "codemirror"; Category = "Editors & documents"; SampleName = Some "CodeMirror"; Description = "The modular CodeMirror 6 editor, with typed language extensions and themes." }
        { Name = "highlight.js"; Package = "WebSharper.HighlightJS"; Library = "highlight.js"; Repo = "highlightjs"; Category = "Editors & documents"; SampleName = Some "HighlightJS"; Description = "Client-side syntax highlighting with the core build and typed language registration." }
        { Name = "jsPDF"; Package = "WebSharper.JsPDF"; Library = "jsPDF"; Repo = "jspdf"; Category = "Editors & documents"; SampleName = Some "JsPDF"; Description = "Client-side PDF generation — text, images, tables and page breaks." }
        { Name = "Remarkable"; Package = "WebSharper.Remarkable"; Library = "Remarkable"; Repo = "remarkable"; Category = "Editors & documents"; SampleName = Some "Remarkable"; Description = "Markdown parsing and rendering with configurable options." }
        { Name = "SlickGrid"; Package = "WebSharper.SlickGrid"; Library = "SlickGrid"; Repo = "slickgrid"; Category = "Editors & documents"; SampleName = None; Description = "Fast virtualized data grids with sorting, formatting and editing." }

        // UI components
        { Name = "React"; Package = "WebSharper.React"; Library = "React"; Repo = "react"; Category = "UI components"; SampleName = None; Description = "React components and hooks with typed props and state." }
        { Name = "FluentUI React"; Package = "WebSharper.FluentUI.React.Components"; Library = "Fluent UI React"; Repo = "fluentui-react-components"; Category = "UI components"; SampleName = None; Description = "Fluent UI React components — buttons, dialogs, inputs and layout primitives." }
        { Name = "FluentUI Icons"; Package = "WebSharper.FluentUI.React.Icons"; Library = "Fluent UI React Icons"; Repo = "fluentui-react-icons"; Category = "UI components"; SampleName = None; Description = "The full Fluent UI icon set exposed as typed React components." }
        { Name = "SweetAlert2"; Package = "WebSharper.SweetAlert"; Library = "SweetAlert2"; Repo = "sweetalert"; Category = "UI components"; SampleName = None; Description = "Accessible modal dialogs and alerts with a small, typed API." }
        { Name = "jQuery"; Package = "WebSharper.JQuery"; Library = "jQuery"; Repo = "jquery"; Category = "UI components"; SampleName = None; Description = "jQuery selections, events, Ajax and Deferred, plus sitelet router helpers." }

        // Maps & geo
        { Name = "Leaflet"; Package = "WebSharper.Leaflet"; Library = "Leaflet"; Repo = "leaflet"; Category = "Maps & geo"; SampleName = Some "Leaflet"; Description = "Interactive maps, markers, popups and tile layers from F#." }
        { Name = "TopoJSON"; Package = "WebSharper.TopoJson"; Library = "TopoJSON"; Repo = "TopoJSON"; Category = "Maps & geo"; SampleName = None; Description = "TopoJSON decoding and geometry conversion for D3 maps." }

        // Utilities & dates
        { Name = "Anime.js"; Package = "WebSharper.AnimeJs"; Library = "Anime.js"; Repo = "animejs"; Category = "Utilities & dates"; SampleName = None; Description = "A lightweight animation engine with a declarative API for CSS, SVG and DOM animations." }
        { Name = "date-fns"; Package = "WebSharper.DateFNS"; Library = "date-fns"; Repo = "datefns"; Category = "Utilities & dates"; SampleName = None; Description = "Immutable date manipulation with a large set of small, composable functions." }
        { Name = "Moment.js"; Package = "WebSharper.Moment"; Library = "Moment.js"; Repo = "moment"; Category = "Utilities & dates"; SampleName = None; Description = "Date parsing, formatting, durations and time zones." }
        { Name = "SignalR"; Package = "WebSharper.SignalR"; Library = "SignalR"; Repo = "signalr"; Category = "Utilities & dates"; SampleName = None; Description = "Typed SignalR hubs and clients for real-time server push." }

        // Math & typesetting
        { Name = "math.js"; Package = "WebSharper.MathJS"; Library = "math.js"; Repo = "mathjs"; Category = "Math & typesetting"; SampleName = Some "MathJS"; Description = "Arbitrary-precision numbers, expression parsing, matrices, vectors and units." }
        { Name = "MathJax"; Package = "WebSharper.MathJax"; Library = "MathJax"; Repo = "mathjax"; Category = "Math & typesetting"; SampleName = Some "MathJax"; Description = "TeX and MathML typesetting with the MathJax v3 API." }

        // Mobile & native
        { Name = "Capacitor"; Package = "WebSharper.Capacitor"; Library = "Capacitor"; Repo = "Capacitor"; Category = "Mobile & native"; SampleName = None; Description = "Typed bindings for the official Capacitor plugins — camera, filesystem, browser, haptics and more." }
        { Name = "Capacitor Community"; Package = "WebSharper.Capacitor.Community"; Library = "Capacitor"; Repo = "Capacitor.Community"; Category = "Mobile & native"; SampleName = None; Description = "Community Capacitor plugins, including Bluetooth LE, text-to-speech, native audio and camera preview." }
        { Name = "Capacitor CapGo"; Package = "WebSharper.Capacitor.CapGo"; Library = "Capacitor"; Repo = "Capacitor.CapGo"; Category = "Mobile & native"; SampleName = None; Description = "CapGo plugins for over-the-air updates, purchases, uploads and native device features." }
    ]

let browserApis: BrowserMeta list =
    [
        // Graphics & compute
        { Name = "WebGPU"; Package = "WebSharper.WebGPU"; Repo = "WebGPU"; Category = "Graphics & compute"; Description = "GPU-accelerated graphics and compute from the browser." }
        { Name = "Houdini"; Package = "WebSharper.Houdini"; Repo = "HoudiniAPI"; Category = "Graphics & compute"; Description = "CSS Typed OM, custom properties, and paint, layout and animation worklets." }

        // Devices
        { Name = "WebUSB"; Package = "WebSharper.WebUSB"; Repo = "WebUSB"; Category = "Devices"; Description = "Communicate with USB devices directly from the browser." }
        { Name = "Web Serial"; Package = "WebSharper.WebSerial"; Repo = "WebSerial"; Category = "Devices"; Description = "Read from and write to serial devices." }
        { Name = "WebMIDI"; Package = "WebSharper.WebMIDI"; Repo = "WebMIDI"; Category = "Devices"; Description = "MIDI input, output and device discovery." }
        { Name = "Web Bluetooth"; Package = "WebSharper.WebBluetooth"; Repo = "WebBluetooth"; Category = "Devices"; Description = "Connect to Bluetooth Low Energy devices and GATT services." }
        { Name = "Gamepad"; Package = "WebSharper.Gamepad"; Repo = "GamepadAPI"; Category = "Devices"; Description = "Gamepad discovery, button, axis and rumble state." }
        { Name = "Battery Status"; Package = "WebSharper.BatteryStatus"; Repo = "BatteryStatusAPI"; Category = "Devices"; Description = "Battery charge level and charging state." }
        { Name = "Screen Wake Lock"; Package = "WebSharper.ScreenWakeLock"; Repo = "ScreenWakeLockAPI"; Category = "Devices"; Description = "Keep the screen awake while a task is running." }
        { Name = "Geolocation"; Package = "WebSharper.Geolocation"; Repo = "Geolocation"; Category = "Devices"; Description = "One-shot and continuous device location." }

        // Media & communication
        { Name = "WebRTC"; Package = "WebSharper.WebRTC"; Repo = "webrtc"; Category = "Media & communication"; Description = "Camera and microphone streams, plus peer-to-peer media types." }
        { Name = "Web Speech"; Package = "WebSharper.WebSpeech"; Repo = "webspeech"; Category = "Media & communication"; Description = "Speech synthesis and speech recognition." }
        { Name = "WebCodecs"; Package = "WebSharper.WebCodecs"; Repo = "WebCodecs"; Category = "Media & communication"; Description = "Low-level audio and video encoding and decoding." }
        { Name = "WebVTT"; Package = "WebSharper.WebVTT"; Repo = "WebVTT"; Category = "Media & communication"; Description = "Parse and manipulate WebVTT subtitle and caption tracks." }
        { Name = "Media Session"; Package = "WebSharper.MediaSession"; Repo = "MediaSession"; Category = "Media & communication"; Description = "Expose playback to OS media controls and the media notification." }
        { Name = "Media Capabilities"; Package = "WebSharper.MediaCapabilities"; Repo = "MediaCapabilities"; Category = "Media & communication"; Description = "Query decoding and encoding capabilities and smoothness." }
        { Name = "Picture-in-Picture"; Package = "WebSharper.PictureInPicture"; Repo = "PictureInPictureAPI"; Category = "Media & communication"; Description = "Float a video element into a system Picture-in-Picture window." }
        { Name = "Encrypted Media Extensions"; Package = "WebSharper.EncryptedMediaExtensions"; Repo = "EncryptedMediaExtensionsAPI"; Category = "Media & communication"; Description = "Playback of DRM-protected audio and video." }

        // Storage & state
        { Name = "Web Locks"; Package = "WebSharper.WebLocks"; Repo = "WebLocks"; Category = "Storage & state"; Description = "Coordinate access to resources across tabs and workers." }
        { Name = "IndexedDB"; Package = "WebSharper.IndexedDB"; Repo = "w3c-indexeddb"; Category = "Storage & state"; Description = "Structured client-side storage with typed object stores." }
        { Name = "Cookie Store"; Package = "WebSharper.CookieStore"; Repo = "CookieStore"; Category = "Storage & state"; Description = "Asynchronous cookie read and write, with change events." }
        { Name = "File System"; Package = "WebSharper.FileSystem"; Repo = "FileSystemAPI"; Category = "Storage & state"; Description = "Origin-private and user-selected files and directories." }

        // Input & UI
        { Name = "Touch Events"; Package = "WebSharper.TouchEvents"; Repo = "TouchEvents"; Category = "Input & UI"; Description = "Touch and pointer events for mobile interactions." }
        { Name = "Popover API"; Package = "WebSharper.Popover"; Repo = "PopoverAPI"; Category = "Input & UI"; Description = "Native HTML popovers anchored to elements." }
        { Name = "Clipboard"; Package = "WebSharper.Clipboard"; Repo = "ClipboardAPI"; Category = "Input & UI"; Description = "Asynchronous clipboard read and write of text and arbitrary items." }
        { Name = "Drag and Drop"; Package = "WebSharper.DragDrop"; Repo = "DragDropAPI"; Category = "Input & UI"; Description = "HTML5 drag-and-drop with typed data transfer." }
        { Name = "Intersection Observer"; Package = "WebSharper.IntersectionObserver"; Repo = "IntersectionObserverAPI"; Category = "Input & UI"; Description = "Observe element visibility and viewport intersections." }
        { Name = "Permissions"; Package = "WebSharper.Permissions"; Repo = "Permissions"; Category = "Input & UI"; Description = "Query and request the permission state of browser features." }

        // Performance
        { Name = "Performance API"; Package = "WebSharper.PerformanceAPI"; Repo = "PerformanceAPI"; Category = "Performance"; Description = "Navigation and resource timing, plus custom performance marks." }
        { Name = "Task Scheduling"; Package = "WebSharper.TaskScheduling"; Repo = "TaskSchedulingAPI"; Category = "Performance"; Description = "Prioritized, yielding work with the scheduler API." }
        { Name = "Background Fetch"; Package = "WebSharper.BackgroundFetch"; Repo = "BackgroundFetch"; Category = "Performance"; Description = "Long-running background downloads that outlive the page." }

        // Networking & runtime
        { Name = "Service Worker"; Package = "WebSharper.ServiceWorker"; Repo = "ServiceWorker"; Category = "Networking & runtime"; Description = "Offline-capable background scripts for caching, push and sync." }
        { Name = "Network Information"; Package = "WebSharper.NetworkInformation"; Repo = "NetworkInformationAPI"; Category = "Networking & runtime"; Description = "Connection type, effective bandwidth and downlink." }
        { Name = "Push"; Package = "WebSharper.Push"; Repo = "PushAPI"; Category = "Networking & runtime"; Description = "Web push notifications via a service worker subscription." }
        { Name = "Notifications"; Package = "WebSharper.Notifications"; Repo = "NotificationsAPI"; Category = "Networking & runtime"; Description = "Display system notifications with actions and payloads." }

        // Payments
        { Name = "Payment Request"; Package = "WebSharper.PaymentRequest"; Repo = "PaymentRequest"; Category = "Payments"; Description = "Native payment flows backed by the browser's payment sheet." }

        // Security & identity
        { Name = "Web Crypto"; Package = "WebSharper.WebCrypto"; Repo = "WebCrypto"; Category = "Security & identity"; Description = "Cryptographic primitives: keys, encryption, signing and hashing." }
        { Name = "Credential Management"; Package = "WebSharper.CredentialManagement"; Repo = "CredentialManagement"; Category = "Security & identity"; Description = "Store and retrieve credentials through the browser's credential store." }
        { Name = "Web Authentication"; Package = "WebSharper.WebAuthentication"; Repo = "WebAuthentication"; Category = "Security & identity"; Description = "Passwordless public-key authentication with WebAuthn." }

        // Data & encoding
        { Name = "Compression Streams"; Package = "WebSharper.CompressionStreams"; Repo = "CompressionStreamsAPI"; Category = "Data & encoding"; Description = "Streaming gzip and deflate compression and decompression." }
        { Name = "Encoding"; Package = "WebSharper.Encoding"; Repo = "EncodingAPI"; Category = "Data & encoding"; Description = "TextEncoder and TextDecoder for UTF-8 and legacy encodings." }
    ]

// ---------------------------------------------------------------------------
// Official websites and npm package names (for "latest stable version")
// ---------------------------------------------------------------------------

/// The bound library's official website (docs or product page).
let libraryWebsites =
    dict [
        "ace", "https://ace.c9.io/"
        "animejs", "https://animejs.com/"
        "Capacitor", "https://capacitorjs.com/"
        "Capacitor.Community", "https://github.com/capacitor-community"
        "Capacitor.CapGo", "https://capgo.app/"
        "chartjs", "https://www.chartjs.org/"
        "codemirror", "https://codemirror.net/"
        "d3", "https://d3js.org/"
        "datefns", "https://date-fns.org/"
        "fluentui-react-components", "https://react.fluentui.dev/"
        "fluentui-react-icons", "https://react.fluentui.dev/"
        "highcharts", "https://www.highcharts.com/"
        "highlightjs", "https://highlightjs.org/"
        "jquery", "https://jquery.com/"
        "jspdf", "https://jspdf.com/"
        "leaflet", "https://leafletjs.com/"
        "mathjs", "https://mathjs.org/"
        "mathjax", "https://www.mathjax.org/"
        "moment", "https://momentjs.com/"
        "plotly", "https://plotly.com/javascript/"
        "react", "https://react.dev/"
        "remarkable", "https://remarkablemark.org/"
        "signalr", "https://learn.microsoft.com/aspnet/core/signalr/"
        "slickgrid", "https://github.com/6pac/SlickGrid"
        "sweetalert", "https://sweetalert2.github.io/"
        "TopoJSON", "https://github.com/topojson/topojson"
    ]

/// The npm package whose `latest` dist-tag is the library's current stable version.
let npmLatestPackages =
    dict [
        "ace", "ace-builds"
        "animejs", "animejs"
        "Capacitor", "@capacitor/core"
        "Capacitor.Community", "@capacitor-community/text-to-speech"
        "Capacitor.CapGo", "@capgo/capacitor-updater"
        "chartjs", "chart.js"
        "codemirror", "codemirror"
        "d3", "d3"
        "datefns", "date-fns"
        "fluentui-react-components", "@fluentui/react-components"
        "fluentui-react-icons", "@fluentui/react-icons"
        "highcharts", "highcharts"
        "highlightjs", "highlight.js"
        "jquery", "jquery"
        "jspdf", "jspdf"
        "leaflet", "leaflet"
        "mathjs", "mathjs"
        "mathjax", "mathjax"
        "moment", "moment"
        "plotly", "plotly.js"
        "react", "react"
        "remarkable", "remarkable"
        "signalr", "@microsoft/signalr"
        "slickgrid", "slickgrid"
        "sweetalert", "sweetalert2"
        "TopoJSON", "topojson-client"
    ]

/// Official spec links for the browser APIs (W3C/WICG/WHATWG where they live).
let browserWebsites =
    dict [
        "WebGPU", "https://www.w3.org/TR/webgpu/"
        "HoudiniAPI", "https://drafts.css-houdini.org/"
        "WebUSB", "https://wicg.github.io/webusb/"
        "WebSerial", "https://wicg.github.io/serial/"
        "WebMIDI", "https://www.w3.org/TR/webmidi/"
        "WebBluetooth", "https://webbluetoothcg.github.io/web-bluetooth/"
        "GamepadAPI", "https://www.w3.org/TR/gamepad/"
        "BatteryStatusAPI", "https://www.w3.org/TR/battery-status/"
        "ScreenWakeLockAPI", "https://www.w3.org/TR/screen-wake-lock/"
        "Geolocation", "https://www.w3.org/TR/geolocation/"
        "webrtc", "https://www.w3.org/TR/webrtc/"
        "webspeech", "https://wicg.github.io/speech-api/"
        "WebCodecs", "https://www.w3.org/TR/webcodecs/"
        "WebVTT", "https://www.w3.org/TR/webvtt1/"
        "MediaSession", "https://www.w3.org/TR/mediasession/"
        "MediaCapabilities", "https://www.w3.org/TR/media-capabilities/"
        "PictureInPictureAPI", "https://www.w3.org/TR/picture-in-picture/"
        "EncryptedMediaExtensionsAPI", "https://www.w3.org/TR/encrypted-media/"
        "WebLocks", "https://www.w3.org/TR/web-locks/"
        "w3c-indexeddb", "https://www.w3.org/TR/IndexedDB/"
        "CookieStore", "https://wicg.github.io/cookie-store/"
        "FileSystemAPI", "https://fs.spec.whatwg.org/"
        "TouchEvents", "https://www.w3.org/TR/touch-events/"
        "PopoverAPI", "https://html.spec.whatwg.org/multipage/popover.html"
        "ClipboardAPI", "https://www.w3.org/TR/clipboard-apis/"
        "DragDropAPI", "https://html.spec.whatwg.org/multipage/dnd.html"
        "IntersectionObserverAPI", "https://www.w3.org/TR/intersection-observer/"
        "Permissions", "https://www.w3.org/TR/permissions/"
        "PerformanceAPI", "https://www.w3.org/TR/performance-timeline/"
        "TaskSchedulingAPI", "https://wicg.github.io/scheduling-apis/"
        "BackgroundFetch", "https://wicg.github.io/background-fetch/"
        "ServiceWorker", "https://www.w3.org/TR/service-workers/"
        "NetworkInformationAPI", "https://wicg.github.io/netinfo/"
        "PushAPI", "https://www.w3.org/TR/push-api/"
        "NotificationsAPI", "https://www.w3.org/TR/notifications/"
        "PaymentRequest", "https://www.w3.org/TR/payment-request/"
        "WebCrypto", "https://www.w3.org/TR/WebCryptoAPI/"
        "CredentialManagement", "https://www.w3.org/TR/credential-management-1/"
        "WebAuthentication", "https://www.w3.org/TR/webauthn-3/"
        "CompressionStreamsAPI", "https://compression.spec.whatwg.org/"
        "EncodingAPI", "https://encoding.spec.whatwg.org/"
    ]

/// The latest stable version published on npm (None when unknown).
let npmLatest (pkg: string) =
    let encoded = pkg.Replace("/", "%2F")
    tryGet (sprintf "https://registry.npmjs.org/%s/latest" encoded)
    |> Option.bind (fun body ->
        try
            let doc = JsonDocument.Parse(body)
            Some (doc.RootElement.GetProperty("version").GetString())
        with _ -> None)

/// "up-to-date" when we bind the latest major.minor, "recent" when we are on the
/// latest major but a minor behind, "outdated" when a major behind.
let versionStatus (bound: string) (latest: string option) =
    let parse (s: string) =
        let m = Text.RegularExpressions.Regex.Match(s, "([0-9]+)(?:\\.([0-9]+))?")
        if m.Success then
            Some (int m.Groups.[1].Value, if m.Groups.[2].Success then int m.Groups.[2].Value else 0)
        else None
    if bound.Contains "unpinned" then Some "up-to-date"
    else
        match latest, parse bound with
        | Some latest, Some (bmaj, bmin) ->
            match parse latest with
            | Some (lmaj, lmin) ->
                if bmaj < lmaj then Some "outdated"
                elif bmaj = lmaj && bmin < lmin then Some "recent"
                else Some "up-to-date"
            | None -> None
        | _ -> None

// ---------------------------------------------------------------------------
// Dynamic lookups
// ---------------------------------------------------------------------------

/// Latest **stable** published version on NuGet (empty string when unknown).
/// Prereleases are skipped on purpose: the page then fetches the same stable
/// version live on load, so baking a prerelease here only causes the badge to
/// flicker (it is immediately overwritten with the stable release).
let nugetVersion (package: string) =
    let url = sprintf "https://api.nuget.org/v3-flatcontainer/%s/index.json" (package.ToLowerInvariant())
    match tryGet url with
    | Some body ->
        try
            let doc = JsonDocument.Parse(body)
            let versions = doc.RootElement.GetProperty("versions")
            let stable =
                versions.EnumerateArray()
                |> Seq.map (fun v -> v.GetString())
                |> Seq.filter (fun v -> not (String.IsNullOrEmpty v) && not (v.Contains "-"))
                |> Seq.toList
            if List.isEmpty stable then "" else List.last stable
        with _ -> ""
    | None -> ""

// ---------------------------------------------------------------------------
// dotnet-websharper GitHub Packages feed
// ---------------------------------------------------------------------------

/// The token used to read the dotnet-websharper GitHub Packages feed. It comes from
/// the GH_PACKAGES_TOKEN / GITHUB_TOKEN / GH_TOKEN environment variable, or (for
/// local runs) from the credentials in the user's NuGet config.
let ghFeedToken =
    let fromEnv =
        [ "GH_PACKAGES_TOKEN"; "GITHUB_TOKEN"; "GH_TOKEN" ]
        |> List.tryPick (fun name ->
            match Environment.GetEnvironmentVariable name with
            | null | "" -> None
            | value -> Some value)
    match fromEnv with
    | Some token -> Some token
    | None ->
        try
            let configPath =
                Path.Combine(
                    Environment.GetFolderPath(Environment.SpecialFolder.UserProfile),
                    ".nuget", "NuGet", "NuGet.Config")
            if File.Exists configPath then
                let text = File.ReadAllText configPath
                let m =
                    Text.RegularExpressions.Regex.Match(
                        text,
                        "<dotnet-websharper-GitHub>[\\s\\S]*?ClearTextPassword[^>]*value=\"([^\"]+)\"")
                if m.Success then Some m.Groups.[1].Value else None
            else None
        with _ -> None

/// Latest version in the dotnet-websharper GitHub Packages feed (None when the
/// package is absent or the feed is unavailable).
let ghFeedVersion (package: string) =
    match ghFeedToken with
    | None -> None
    | Some token ->
        try
            let url =
                sprintf "https://nuget.pkg.github.com/dotnet-websharper/download/%s/index.json" (package.ToLowerInvariant())
            let req = new HttpRequestMessage(HttpMethod.Get, url)
            req.Headers.Authorization <- AuthenticationHeaderValue("Bearer", token)
            let resp = http.SendAsync(req).GetAwaiter().GetResult()
            if resp.IsSuccessStatusCode then
                let body = resp.Content.ReadAsStringAsync().GetAwaiter().GetResult()
                let doc = JsonDocument.Parse(body)
                let versions = doc.RootElement.GetProperty("versions")
                // GitHub Packages returns the versions newest-first; take the
                // newest stable one (skip prereleases, same as the main feed).
                versions.EnumerateArray()
                |> Seq.map (fun v -> v.GetString())
                |> Seq.tryFind (fun v -> not (String.IsNullOrEmpty v) && not (v.Contains "-"))
            else None
        with _ -> None

/// Compare two dotted numeric versions (WebSharper's `major.minor.patch.build`),
/// ignoring any prerelease suffix (non-numeric segments count as 0).
let private compareVersions (a: string) (b: string) =
    let parts (s: string) =
        s.Split([| '.'; '-' |])
        |> Array.map (fun p ->
            match Int32.TryParse p with
            | true, n -> n
            | _ -> 0)
    let pa, pb = parts a, parts b
    let len = max pa.Length pb.Length
    let rec go i =
        if i >= len then 0
        else
            let x = if i < pa.Length then pa.[i] else 0
            let y = if i < pb.Length then pb.[i] else 0
            if x <> y then compare x y else go (i + 1)
    go 0

/// Where a package's versions live and which one to show.
type ResolvedVersion =
    {
        /// The version to show (the newest stable one).
        Version: string
        /// True when the shown version comes from the dev feed.
        DevFeed: bool
        /// True when the package was found on nuget.org.
        OnNuGet: bool
        /// True when the package was found on the dev feed.
        OnDevFeed: bool
    }

/// Resolve the version to show and which feeds actually carry the package. The
/// newest **stable** version across nuget.org and the dev feed wins: a package
/// that is only on the dev feed — or whose dev-feed build is ahead of the
/// released one (e.g. a fresh push before the next nuget.org release) — shows
/// the dev-feed version and the "Dev feed" label.
let resolveVersion (package: string) =
    let nuget = nugetVersion package
    let gh = ghFeedVersion package
    let onNuGet = not (String.IsNullOrEmpty nuget)
    let version, devFeed =
        match gh with
        | Some g when not onNuGet || compareVersions g nuget > 0 -> g, true
        | _ -> nuget, false
    { Version = version; DevFeed = devFeed; OnNuGet = onNuGet; OnDevFeed = gh.IsSome }

/// Read a file either from the local binding repo or from raw GitHub.
let readRepoFile (repo: string) (path: string) =
    let local = Path.Combine(localBindingsRoot, repo, path)
    if File.Exists local then Some (File.ReadAllText local)
    else tryGet (sprintf "https://raw.githubusercontent.com/dotnet-websharper/%s/HEAD/%s" repo path)

/// Upstream library version from NpmDependencies or a CDN resource URL.
let private projectFiles =
    dict [
        "ace", "WebSharper.Ace/WebSharper.Ace.fsproj"
        "animejs", "WebSharper.AnimeJs/WebSharper.AnimeJs.fsproj"
        "chartjs", "WebSharper.ChartJs/WebSharper.ChartJs.fsproj"
        "codemirror", "WebSharper.CodeMirror/WebSharper.CodeMirror.fsproj"
        "d3", "WebSharper.D3/WebSharper.D3.fsproj"
        "datefns", "WebSharper.DateFNS/WebSharper.DateFNS.fsproj"
        "highcharts", "WebSharper.Highcharts/WebSharper.Highcharts.fsproj"
        "highlightjs", "WebSharper.Highlightjs/WebSharper.Highlightjs.fsproj"
        "jquery", "WebSharper.JQuery/WebSharper.JQuery.fsproj"
        "jspdf", "WebSharper.JsPDF/WebSharper.JsPDF.fsproj"
        "leaflet", "WebSharper.Leaflet/WebSharper.Leaflet.fsproj"
        "mathjs", "WebSharper.MathJS/WebSharper.MathJS.fsproj"
        "mathjax", "WebSharper.MathJax/WebSharper.MathJax.fsproj"
        "moment", "WebSharper.Moment/WebSharper.Moment.fsproj"
        "plotly", "WebSharper.Plotly/WebSharper.Plotly.fsproj"
        "react", "WebSharper.React.Bindings/WebSharper.React.Bindings.fsproj"
        "remarkable", "WebSharper.Remarkable/WebSharper.Remarkable.fsproj"
        "signalr", "WebSharper.SignalR/WebSharper.SignalR.fsproj"
        "slickgrid", "WebSharper.SlickGrid/WebSharper.SlickGrid.fsproj"
        "sweetalert", "WebSharper.SweetAlert/WebSharper.SweetAlert.fsproj"
        "TopoJSON", "WebSharper.TopoJSON/WebSharper.TopoJSON.fsproj"
        "Capacitor", "WebSharper.Capacitor/WebSharper.Capacitor.fsproj"
        "Capacitor.Community", "WebSharper.Capacitor.Community/WebSharper.Capacitor.Community.fsproj"
        "Capacitor.CapGo", "WebSharper.Capacitor.CapGo/WebSharper.Capacitor.CapGo.fsproj"
        "fluentui-react-components", "WebSharper.React.FluentUI.Components/WebSharper.React.FluentUi.Components.fsproj"
        "fluentui-react-icons", "WebSharper.React.FluentUI.Icons/WebSharper.React.FluentUi.Icons.fsproj"
    ]

/// Files that declare CDN resource URLs when NpmDependencies are absent.
let private resourceFiles =
    dict [
        "d3", "WebSharper.D3/Main.fs"
        "highcharts", "HighchartsGeneratorCommon/Definition.fs"
        "jquery", "WebSharper.JQuery/Main.fs"
        "signalr", "WebSharper.SignalR/Main.fs"
        "mathjax", "WebSharper.MathJax/Main.fs"
    ]

/// The upstream npm package that identifies the library's headline version.
let private mainPackages =
    dict [
        "Capacitor", "@capacitor/core"
        "Capacitor.Community", "@capacitor-community/text-to-speech"
        "Capacitor.CapGo", "@capgo/capacitor-updater"
        "codemirror", "codemirror"
        "fluentui-react-components", "@fluentui/react-components"
        "fluentui-react-icons", "@fluentui/react-icons"
    ]

let libraryVersion (meta: BindingMeta) =
    let npmPackages =
        match projectFiles.TryGetValue meta.Repo with
        | true, path ->
            readRepoFile meta.Repo path
            |> Option.map (fun text ->
                Text.RegularExpressions.Regex.Matches(text, "<NpmPackage\\s+Name=\"([^\"]+)\"\\s+Version=\"([^\"]+)\"")
                |> Seq.map (fun m -> m.Groups.[1].Value, m.Groups.[2].Value)
                |> List.ofSeq)
            |> Option.defaultValue []
        | _ -> []

    let npmRange =
        match mainPackages.TryGetValue meta.Repo with
        | true, mainName ->
            npmPackages
            |> List.tryFind (fun (name, _) -> name.Equals(mainName, StringComparison.OrdinalIgnoreCase))
            |> Option.map snd
        | _ ->
            npmPackages |> List.tryHead |> Option.map snd

    let cdnUrl =
        match resourceFiles.TryGetValue meta.Repo with
        | true, path ->
            readRepoFile meta.Repo path
            |> Option.bind (fun text ->
                let m = Text.RegularExpressions.Regex.Match(text, "Resource\\s+\"[^\"]+\"\\s+\"(https?://[^\"]+)\"")
                if m.Success then Some m.Groups.[1].Value else None)
        | _ -> None

    match npmRange, cdnUrl with
    | Some range, _ ->
        // "gt= 4.4.0 lt 5.0.0" -> "4.4+"
        let m = Text.RegularExpressions.Regex.Match(range, "([0-9]+\\.[0-9]+(?:\\.[0-9]+)?)")
        if m.Success then m.Groups.[1].Value + "+" else range
    | _, Some url ->
        // .../d3/<x.y.z>/d3.min.js, or a jsDelivr npm URL such as
        // .../npm/mathjax@<x.y.z>/tex-mml-chtml.js.
        let seg = Text.RegularExpressions.Regex.Match(url, "/([0-9]+\\.[0-9]+(?:\\.[0-9]+)?)/")
        if seg.Success then
            seg.Groups.[1].Value
        else
            let at = Text.RegularExpressions.Regex.Match(url, "@([0-9]+\\.[0-9]+(?:\\.[0-9]+)?)")
            if at.Success then at.Groups.[1].Value else "latest (unpinned)"
    | None, None -> "latest (unpinned)"

/// Sample link: websharper-samples first, then the binding repo's own demo.
let sampleLink (repo: string) (sampleName: string option) =
    match sampleName with
    | Some name ->
        let url = sprintf "https://websharper-samples.github.io/%s/" name
        if tryHead url then Some (url, "Sample") else None
    | None -> None
    |> Option.orElse (
        let url = sprintf "https://dotnet-websharper.github.io/%s/" repo
        if tryHead url then Some (url, "Test case") else None
    )

// ---------------------------------------------------------------------------
// Build the JSON
// ---------------------------------------------------------------------------

let now = DateTimeOffset.UtcNow.ToString("o")

let libraryNodes =
    libraries
    |> List.map (fun b ->
        let v = resolveVersion b.Package
        let libVersion = libraryVersion b
        let sample = sampleLink b.Repo b.SampleName
        let node = JsonObject()
        node.["name"] <- JsonValue.Create b.Name
        node.["package"] <- JsonValue.Create b.Package
        node.["version"] <- JsonValue.Create v.Version
        if v.DevFeed then node.["devFeed"] <- JsonValue.Create true
        if v.OnNuGet then node.["onNuGet"] <- JsonValue.Create true
        if v.OnDevFeed then node.["onDevFeed"] <- JsonValue.Create true
        node.["library"] <- JsonValue.Create b.Library
        node.["libraryVersion"] <- JsonValue.Create libVersion
        node.["description"] <- JsonValue.Create b.Description
        node.["repo"] <- JsonValue.Create(sprintf "https://github.com/dotnet-websharper/%s" b.Repo)
        node.["category"] <- JsonValue.Create b.Category
        match sample with
        | Some (url, label) ->
            node.["sampleUrl"] <- JsonValue.Create url
            node.["sampleLabel"] <- JsonValue.Create label
        | None -> ()
        match libraryWebsites.TryGetValue b.Repo with
        | true, url -> node.["website"] <- JsonValue.Create url
        | _ -> ()
        match npmLatestPackages.TryGetValue b.Repo with
        | true, pkg ->
            match npmLatest pkg with
            | Some latest ->
                node.["latestVersion"] <- JsonValue.Create latest
                match versionStatus libVersion (Some latest) with
                | Some status -> node.["status"] <- JsonValue.Create status
                | None -> ()
            | None -> ()
        | _ -> ()
        node :> JsonNode)

let browserNodes =
    browserApis
    |> List.map (fun b ->
        let v = resolveVersion b.Package
        let sample = sampleLink b.Repo None
        let node = JsonObject()
        node.["name"] <- JsonValue.Create b.Name
        node.["package"] <- JsonValue.Create b.Package
        node.["version"] <- JsonValue.Create v.Version
        if v.DevFeed then node.["devFeed"] <- JsonValue.Create true
        if v.OnNuGet then node.["onNuGet"] <- JsonValue.Create true
        if v.OnDevFeed then node.["onDevFeed"] <- JsonValue.Create true
        node.["description"] <- JsonValue.Create b.Description
        node.["repo"] <- JsonValue.Create(sprintf "https://github.com/dotnet-websharper/%s" b.Repo)
        node.["category"] <- JsonValue.Create b.Category
        match sample with
        | Some (url, label) ->
            node.["sampleUrl"] <- JsonValue.Create url
            node.["sampleLabel"] <- JsonValue.Create label
        | None -> ()
        match browserWebsites.TryGetValue b.Repo with
        | true, url -> node.["website"] <- JsonValue.Create url
        | _ -> ()
        node :> JsonNode)

let root = JsonObject()
root.["generatedAt"] <- JsonValue.Create now
root.["libraries"] <- JsonArray(libraryNodes |> Array.ofList)
root.["browserApis"] <- JsonArray(browserNodes |> Array.ofList)

let json = root.ToJsonString(new JsonSerializerOptions(WriteIndented = true))
File.WriteAllText(outputPath, json)

printfn "Wrote %s" outputPath
printfn "  libraries: %d" libraries.Length
printfn "  browser APIs: %d" browserApis.Length
