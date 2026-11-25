# AGENTS.md

Working notes for `website-template` (websharper.com): a WebSharper UI site whose
pages are HTML templates filled from F#, styled with Tailwind v4 and bundled with
esbuild.

## Build & preview

```sh
dotnet build WebSharperWebsite/WebSharperWebsite.fsproj -c Release --no-incremental
```

- The `ESBuildBundle` target (after `WebSharperCompile`) runs `npm install`,
  `npm run css:build` (Tailwind v4 → `build/tailwind.css`) and
  `node ./esbuild.config.mjs`.
- Package versions: `WebSharper` / `WebSharper.FSharp` `10.1.9.686`,
  `WebSharper.UI` `10.1.7.686`, `WebSharper.SweetAlert` `10.1.0.667`,
  `Markdig` `1.6.0` (server-side markdown for the Blogs page).
- WS 10.1 emits local `JS.ImportFile` resources as
  `.../Content/WebSharper/<Assembly>/<file>` imports, but the `html` project
  output puts them under `build/Scripts/WebSharper/<Assembly>/`. The
  `websharper-content-imports` plugin in `esbuild.config.mjs` resolves the
  former from the latter (and `../../tailwind.css` from `build/`); without it
  the bundle fails on `Styles/prism-override.css`.
- Output lands in `WebSharperWebsite/bin/html/` (`*.html`, `Assets/`,
  `snippets/`, `Scripts/WebSharper/*.{js,css}`).
- **Nested page routes** (e.g. `/blogs/article`) work: `esbuild.config.mjs` copies
  the generated `.html` pages from `build/` **recursively** (the copy filter must
  let directories through, or `cpSync` skips their contents — which is why a
  nested page was silently missing) and rebases the shared chrome's `./` links to
  root-absolute `/` in nested pages (otherwise `./bindings` would resolve under
  `/blogs/`). `snippets/` keep their relative URLs.
- `--no-incremental` matters: **`.html` edits do not reliably trigger a
  WebSharper rebuild** (templates are compiled), so a stale page is usually a
  missed rebuild rather than a caching bug.
- Preview: `dotnet serve --tls --port 5173 --default-extensions:.html,.htm` from
  `bin/html`, then <https://localhost:5173>. The extension list matters — the
  site routes extension-less paths (`/support`, `/examples`), so a plain static
  server (e.g. `python3 -m http.server`) needs `/support.html`.
- `WEBSHARPERTASK : WSB9002 … Retrying with Standalone build` is pre-existing
  noise, not a failure.
- `Scripts/WebSharper/*.css|js` are referenced with a content-hash query
  (`all.css?v=<hash>`), added by `cache-bust.mjs` in the `CacheBustAssets` target
  (after `ExamplesDirectoryIndex`). This is required in production: Cloudflare
  caches those un-versioned URLs for hours, so without it a deploy can serve new
  HTML with a stale stylesheet (new Tailwind classes silently missing). The hash
  changes only when the bundle content changes; keep the step after all bundles
  and HTML are written. A previously-loaded page can still hold an old hash, so
  hard-reload when verifying styling.
- Tailwind is generated from the project's `.html` sources: **a class only
  exists if it appears in a scanned file**. `npm run css:dev` gives a watch loop
  while iterating on styling.

## When to build

Unlike the `docs` repo (whose `AGENTS.md` says to skip builds for non-code
changes), **styling changes here need a build**: `build/tailwind.css` is generated
during `dotnet build`, so a utility class that is never built does not exist in
the served CSS. Copy- or link-only edits can be made and left; anything adding or
removing classes, sections or template holes should be built (and, since the
output is what's inspected, the `bin/html/*.html` + `build/tailwind.css` greps in
"Verification recipes" are the cheapest way to confirm it landed).

## Where things live

| Path | What it is |
| --- | --- |
| `WebSharperWebsite/Src/Main.fs` | `EndPoint` DU (routes), page + bundle wiring, `Templating.Layout` |
| `WebSharperWebsite/Src/Pages.fs` | `ServerPages` (fills server-rendered templates) and `ClientPages` (client-only behaviour, `[<JavaScript>]`) |
| `WebSharperWebsite/Src/Utils.fs` | the `Templates.* = Template<"...html">` declarations |
| `WebSharperWebsite/Layout.html` | the shared chrome: header/menubar, mobile menu, account dropdown, footer |
| `WebSharperWebsite/*.html` | page templates — markup only, F# supplies the data |
| `WebSharperWebsite/Components.html`, `Src/Components.fs`, `Src/SnippetCode.fs` | the reusable code windows and their tabs |
| `WebSharperWebsite/Styles/app.css` | Tailwind entry, `@theme` brand tokens, `.ws-tab` rules |
| `WebSharperWebsite/Js/`, `esbuild.config.mjs` | client scripts and the bundle graph |

## Templating rules

- Only the `ws-children-template="Content"` subtree of a page template is
  rendered (each page calls `Templates.XTemplate.Content()`); the page-level
  chrome copied into those files is **dead markup** — the visible header comes
  from `Layout.html`. Checked: every built page has exactly one
  `aria-label="Global"`. The page template's `<head>` is dead too: the emitted
  `<head>`/`<title>` and the head `<script>` come from `Layout.html`, so **only
  `Layout.html`'s copy of the theme script actually runs** (the identical copies in
  each page template are kept in sync but never emitted).
- The five `noChrome` endpoints (Checkout, Error, Invoice, NotFound, Success)
  hide the Layout header and footer (`HeaderVisibility`/`FooterVisibility` =
  `attr.hidden ""`) and render their own chrome from their page template,
  client-side via `hydrate (ClientPages.X())`.
- Static content (sections, cards, tables) needs **no F# change** — but it must
  contain **no unfilled `ws-*` holes**: holes have to be filled from F# (only the
  Layout uses `keepUnfilled = true`), and an unfilled one is an error. Interactive
  additions need `Src/Pages.fs`, in both branches of the page function (client and
  the server-side skeleton).
- Dark mode is `.dark, .dark *` (`@custom-variant dark` in `app.css`): always
  ship the `dark:` twin of every colour.
- Tailwind v4 quirks: bare `border`/`border-b` resolves to `currentColor` (spell
  out `border-gray-200 dark:border-gray-800`), and `duration-*` alone does not
  animate — pair it with `transition`/`transition-transform`.

## Verification recipes

- **Static check**: grep the built `bin/html/*.html` and `build/tailwind.css` for
  what you added. A class present in markup but missing from the CSS means
  Tailwind never saw it.
- **Client behaviour without a browser**: serve `bin/html` and drive it with
  jsdom — it is not installed here, but it is available at
  `~/oprojects/wsocaml/node_modules/jsdom` (require by absolute path). Polyfill
  `window.matchMedia` in `beforeParse` (`Theme.Init()` calls it and jsdom lacks
  it), and request explicit `.html` paths:

  ```js
  const { JSDOM } = require('/Users/<you>/oprojects/wsocaml/node_modules/jsdom');
  JSDOM.fromURL('http://127.0.0.1:8099/support.html?quote=migration', {
    runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true,
    beforeParse(w) { w.matchMedia ||= () => ({ matches: false, addListener(){}, removeListener(){}, addEventListener(){}, removeEventListener(){}, dispatchEvent(){ return false; } }); },
  }).then(dom => setTimeout(() => {
    console.log(dom.window.document.querySelector('input[name="email-subject"]').value);
    process.exit(0);
  }, 2000));
  ```

- **Diffs**: `git diff` is routed through the `difft` external diff
  (`git config diff.external`), which is unreadable in scripts — use
  `git --no-pager diff --no-ext-diff` for machine-readable patches.
- **Rendered layout without a visible browser (Chrome + CDP)**: for anything the
  eye checks (code-window alignment, hero alignment, theme), launch headless Chrome
  with a debugging port and drive it over the DevTools protocol from Node (global
  `WebSocket` exists in Node ≥22). This is how the line-number/hero alignment was
  verified:

  ```sh
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
    --disable-gpu --no-sandbox --ignore-certificate-errors --hide-scrollbars \
    --remote-debugging-port=9222 --window-size=1440,1000 about:blank
  ```

  Then connect to the `page` target from `http://127.0.0.1:9222/json/list`
  (`page.webSocketDebuggerUrl`) and use:
  - `Emulation.setEmulatedMedia` with `prefers-color-scheme: dark` to force dark.
  - `Network.setCacheDisabled { cacheDisabled: true }` (see the CSS-cache note).
  - `Page.captureScreenshot` with a `clip` and `captureBeyondViewport: true`
    (plus `scale` for a zoomed read) to screenshot a region or element.
  - `Runtime.evaluate` for geometry, e.g. compare each code line's `top` (a `Range`
    per line) against the line-number column to confirm they line up.
- **Playwright cache**: a `?t=<timestamp>` query does **not** reliably bypass the
  browser cache when the page was already loaded. Use a fresh browser context and
  `page.setExtraHTTPHeaders({ 'Cache-Control': 'no-cache, no-store, must-revalidate' })`
  before `goto`, or the served HTML and the hydrated DOM can disagree (a stale
  `bindings.json` version looked like a render bug).
- **Stale `wsfscservice`**: after editing a `.html` template, a "Start tag `<div>` was
  not found" parse error is almost always the template-service cache — `pkill -f
  wsfscservice` and rebuild before touching the markup. Don't run that `pkill` in the
  same shell command as the build: `-f` matches the command line itself and kills the
  shell. And expect the **first** build after killing the service to report `Build
  succeeded` while writing no JS/HTML (`build/*.html` keeps its old timestamp); build
  again. Check the timestamp of `build/<page>.html` before trusting the output.

## Page notes

- **Home → "How it works" diagram**: inline SVG in `Home.html`
  (`viewBox="0 0 900 450"`). Four sources (DSL/F#/C#/OCaml) point at a spanning
  `WebSharper` compiler hub, which points at `Native .NET server`,
  `Your application` and `Native OCaml server`; the DSL node feeds F# with
  `M120 100 V130`. The highlighted node uses
  `class="fill-brand-primary/15 stroke-brand-primary/45 dark:fill-brand-primary/20 dark:stroke-brand-primary/55"` plus `stroke-opacity="1"` (the rest of the diagram
  inherits 0.5).
- **Code windows** (`Components.html`): traffic-light dots are
  `h-3 w-3 rounded-full` with `space-x-2` and
  `style="background-color:#ff5f57|#febc2e|#28c840"`; tab labels are `text-sm`;
  the menubar's GitHub/X/Discord icons roll with `group-hover:rotate-[360deg]`
  (they already carry `transition duration-500`).
- **Support page** (`Support.html`, `Src/Support/*.fs`): `#plans` renders Stripe
  products fetched through `Remote<IRemotingContract>.GetPlanPrices()` into
  `PlanCard` (name, price, seats, description — plan *features* are not in the
  API data, and only the `pro` and `freelancer` slots are wired; the Enterprise
  card is static and contact-sales only). `#services` is the quote-only
  professional-services block (CTAs link to `./support?quote=<slug>#contact`),
  `#contact` posts a `FormData` (subject, message, email, name, country) to the
  WebSharper API's `POST /api/contact` — `AuthClient.API + "/api/contact"` in
  `Src/Support/SupportApi.fs`.
  `ApplyQuoteSubject()` in `Src/Support/Page.fs` reads `?quote=` and presets the
  subject before `HydrateCatalog()` runs. **Note:** the `/support` route now renders
  the For Teams coming-soon page (`ForTeams.html`); the Support machinery above is kept
  in the codebase but no longer wired to the route.
- **Examples → samples sections** (`Examples.html`, below the interactive
  tabs): nine client-only cards (2048, Mvu, D3, MathJS, JsPDF, CodeMirror, Forms,
  WebSpeech, ShoppingCart) plus two full-stack cards (WebSocketChart,
  PeopleAPI + PeopleClient). The markup is static — no F# holes — so adding or
  reordering a card needs only an `Examples.html` change. Card screenshots are
  800×600 JPEGs under `Assets/images/samples/` (4:3, quality 82). Use
  **root-absolute** `/Assets/images/samples/...` paths: the page is hydrated
  from the client template at `/examples/`, where `./Assets` would resolve to
  `/examples/Assets` (`makeExamplesIndex.mjs` only rewrites the static HTML
  copy). WebSocketChart's image comes from its repo screenshot; People's was
  captured against a locally running PeopleAPI (the public PeopleClient Pages
  deployment still serves the old UI and hardcodes `http://localhost:5585`).
  Client screenshots were recaptured with `~/.opencode-tools/shot` (Playwright),
  with light interactions to make them representative (2048 arrow moves, Mvu
  todos, a filled Forms form with pets, a populated ShoppingCart) and `zoom`
  where the UI is taller than the 4:3 crop.
- **Snippet tabs** (`SnippetCode.fs` + `Js/line-numbers.js`): tab `data-target`
  values must match a panel's `data-lang` and be unique per tab set — key them by
  the tab **Label**, not the Prism `Lang`.
- **Bindings page** (`/bindings`, `Bindings.html`, `Src/Bindings.fs`,
  `scripts/extract-bindings.fsx`): the page is **JSON-driven**. `bindings.json`
  (generated by the script, embedded as a resource) is the source of truth;
  `Bindings.fs` reads it and renders the cards. Reordering or changing a
  category is a JSON edit; adding a binding or changing its metadata is a
  catalog edit in the script.
  - **Catalog** in `extract-bindings.fsx`: `libraries` (28) and `browserApis`
    (41), each with `Name`, `Package`, `Repo`, `Description`, `Category` and
    `SampleName` (libraries only); the categories (17 today) drive the section
    headings and the jump-pill nav.
  - **Refresh** with `dotnet fsi scripts/extract-bindings.fsx`; it refreshes
    the NuGet version, the upstream library range, the sample/Test-case link
    and the dev-feed flag. Run it from the `workflow_dispatch` inputs
    (`refresh_bindings=true`, `commit_bindings=true` to commit).
  - **Sample/Test-case links** (`sampleLink repo sampleName`): try
    `websharper-samples.github.io/<SampleName>` first ("Sample"), then the
    binding repo's own Pages (`https://dotnet-websharper.github.io/<Repo>/`,
    "Test case"). Browser cards get a "Test case" link. `WebGPU` has no sample
    project, so its link stays hidden. Enable Pages per repo with
    `gh api -X POST repos/dotnet-websharper/<repo>/pages -f 'source[branch]=gh-pages' -f 'source[path]=/'`.
    Use the **repo name**, not the old name: `PopoverAPI`, not `popover`.
  - **Dev feed**: the `dotnet-websharper` GitHub Packages feed. The script reads
    it with `GH_PACKAGES_TOKEN` / `GITHUB_TOKEN` / `GH_TOKEN` (or the local
    NuGet config's `dotnet-websharper-GitHub` credentials). `resolveVersion`
    picks the **newest stable** version across both feeds — a package that is
    only on the GH feed, *or whose dev-feed build is ahead of the released one*
    (e.g. `Ace`/`date-fns` right after a push), uses the GH-feed version and sets
    `devFeed: true`, which renders the **Dev** badge; otherwise the
    nuget.org version is used. (The `WebSharper.Ace` id is a good reason for the
    "newer wins" rule: nuget.org still serves a legacy `4.7.2.189` for it, far
    behind the GH feed's `10.1.0.706`.) Both feeds skip prereleases (any version
    containing `-`): the GH feed is **newest-first**, so the first stable one
    wins (`10.1.0.700`-style); nuget.org's list is ascending, so its last stable
    wins. Because a dev-feed version can be newer than the released one, the
    card's version pill is only tagged `data-nuget-package` (for the page's live
    NuGet refresh) when it came from nuget.org — `versionAttr` in `Bindings.fs`.
    `resolveVersion` also records `onNuGet`/`onDevFeed` (whether each feed
    actually carries the package), which drive the two icon links on the card.
    Most of the modernized browser-API bindings (`ServiceWorker`, `Clipboard`,
    `CookieStore`, `BatteryStatus`, `Push`, `BackgroundFetch`, `Permissions`, …)
    are published only to the GH feed and not to nuget.org, so their cards do
    show the badge.
  - **Version display (stable only)**: the refresh script never bakes a
    prerelease — `nugetVersion` and `ghFeedVersion` skip any version containing
    `-`. This is deliberate: the page's live refresh (`loadBindingVersions` in
    `Layout.html`, `&prerelease=false`) returns the latest **stable** `version`
    from the Azure Search API even when asked for prereleases, so a baked
    `-preview` value only flickered on load (immediately overwritten with the
    stable release).
  - **Bound version** (`libraryVersion`, shown in the card's `BoundVersion`
    pill, e.g. `4.4.0+`): the upstream library version a binding targets,
    resolved by `libraryVersion` in this priority order:
    1. `<NpmPackage Name="…" Version="…">` entries in the repo's `.fsproj`
       (`projectFiles`): the entry named by `mainPackages` when the repo has a
       headline package, otherwise the **first** entry. The range's first
       `major.minor[.patch]` is rendered with `+` (`>= 4.4.0 <5.0.0` → `4.4.0+`).
    2. Otherwise the first `Resource "…" "https://…"` URL in the file listed in
       `resourceFiles` (`Main.fs`/`Definition.fs`), taking the `/<x.y.z>/` path
       segment (`…/d3/7.9.2/d3.min.js` → `7.9.2`) or, for a jsDelivr npm URL,
       the `@<x.y.z>` package specifier (`…/npm/mathjax@4.1.3/…` → `4.1.3`).
    3. Otherwise `"latest (unpinned)"`, rendered as **N/A**; the Up to
       date/Recent/Outdated badge is hidden because there is nothing to compare.
    A repo can be in `projectFiles` yet fall through to step 2 if its fsproj has
    no `<NpmPackage>` (MathJax is this case: it pins 4.1.3 via its CDN
    resource, not via `NpmPackage`). `readRepoFile` prefers a local
    `~/dotnet-websharper/<repo>/<path>` checkout over
    `raw.githubusercontent.com/dotnet-websharper/<repo>/HEAD/<path>`.
    `versionStatus` compares the bound major.minor against the npm `latest`
    (`npmLatestPackages` → `npmLatest`, `registry.npmjs.org/<pkg>/latest`).
    A card shows three distinct versions: `version` (NuGet package),
    `libraryVersion` (this bound upstream version) and `latestVersion` (npm).
  - **Template holes**: `LibraryCard`/`BrowserCard` are `ws-template` roots with
    `data-binding-card`/`data-binding-name`; the version is `ws-attr="VersionAttr"`,
    the "Dev" version label (next to the version pill) is
    `ws-attr="DevFeedLabelAttr"`, the NuGet and GitHub-Packages icon links are
    `ws-attr="NuGetAttr"`/`ws-attr="DevFeedAttr"` (each `attr.hidden ""` when the
    package is not on that feed), and the sample link is `ws-attr="SampleAttr"`.
    The bottom row is: NuGet icon, GH icon, Website/Spec, Source, Sample/Test case
    (the old single "NuGet"/"Dev feed" text link is gone).
  - **Section nav**: `sectionNav` renders a sticky vertical rail (same
    `.section-link`/`data-step` markup as the Features page); the two top-level
    entries ("JavaScript libraries", "Browser APIs")
    use a larger font than their category subsections. The horizontal category
    pills are `lg:hidden` (mobile only), so desktop navigation is the rail.
    The scroll-spy (`Js/intersection-observer.js`) is **scroll-based**, keyed off
    each link's `data-step` target id (not the `.section` class) and picking the
    last target whose top is above a ~140px line. Do **not** go back to an
    `IntersectionObserver` with `threshold: 1`: the Bindings category sections are
    taller than the viewport, so they never reach 100% visibility, the callback
    only fires for a short neighbour, and the wrong rail entry lights up
    (off-by-one). Keying off the links also covers the two top-level anchors, which
    are plain `<section>`s without the `.section` class.
    The page container (`max-w-6xl … xl:px-0 2xl:max-w-7xl`) and the content
    wrapper (`lg:w-[calc(100%-6rem)] ml-auto lg:pl-12`) mirror Features so the
    dot column lands at the same x as the Features rail (dot right edge = content
    column left; the `lg:pl-12` gives the text its 48px clearance).
  - **Search/filter**: filtering is client-side (category pills + search) and
    hides cards by toggling `hidden` on the `data-binding-card` root. Keep the
    card classes **and** `data-binding-card` on the template root `<div>` — an
    inner `<article>` wrapper stays in the grid when the card is hidden, leaving
    a hole (a hidden article still occupies its grid cell).
  - **GHA**: the workflow passes `secrets.PAT_PACKAGE` as `GH_PACKAGES_TOKEN` so
    the feed refresh can read the GitHub Packages feed.
  - **Explainer band** (`#why-bindings`, static markup in `Bindings.html` between
    the hero and the card sections): a full-bleed `<section>` (its own container
    is the standard `mx-auto max-w-6xl …`, so it spans the viewport with a tinted
    `border-y` background; the hero and the card area are now two separate
    containers around it). The left half lists WIG value props; the right half
    is an **inline SVG** annotated card (not the `LibraryCard` template) with
    arrow callouts — a real, coherent example (jsPDF, incl. the Dev badge).
    Keep the `min-w-[540px]` + `overflow-x-auto` wrapper (small screens scroll
    the diagram horizontally, like the Home "How it works" SVG), and keep the
    two-column grid at `xl`, **not** `lg`: at 1024px the half column (~456px) is
    too narrow and clips the right-hand callouts. Give grid children `min-w-0`
    or the `min-w` SVG forces the grid wider than the viewport (body is
    `overflow-x-hidden`, so it clips instead of scrolling). No `ws-*` holes, so
    no F# change is needed. Below the SVG is a static **"Generating bindings
    with AI"** card whose big button downloads
    `Assets/websharper-binding-skill.md` (served at
    `/Assets/websharper-binding-skill.md`, `download` attribute — the `Assets/`
    copy is verbatim). That file is a **generic** edition of the internal
    `modernize-binding` skill: keep it free of workspace internals
    (`websharper100`, the build stack/`repos.yml`, subagents, local paths, `gh`
    specifics) so it can be shared publicly.
- **API coverage page** (`/coverage`, `Coverage.html`, `Src/Coverage.fs`,
  `tools/api-coverage/`): which .NET / FSharp.Core members translate to
  JavaScript. It is linked from the footer ("API coverage"), not the menubar.
  - **Data** is generated, never hand-edited: `dotnet run -c Release --project
    tools/api-coverage` rewrites `WebSharperWebsite/Assets/coverage/` (`index.json`
    plus `<dotnet|fsharp-core>/<namespace>.json`, ~3.4 MB), then rebuild the site.
    The extractor reads the WebSharper metadata of `WebSharper.StdLib` +
    `WebSharper.JavaScript` with `FrontEnd.ReadFullFromFile` (the DllBrowser
    reader). It reflects the **.NET 10 reference pack** (not `netstandard2.0`: the
    proxies cover .NET 6–10 APIs such as `Enumerable.Chunk`) and FSharp.Core with
    `MetadataLoadContext`, and matches members by an exact signature string.
    `netTy` mirrors core's private `Reflector.getType`. The versions are
    `PackageDownload`s in `ApiCoverage.fsproj` (`WebSharperVersion`, `NetRefVersion`,
    `FSharpCoreRefVersion`). It targets `net11.0` because the WS11 compiler DLLs
    (`websharper.fsharp/<v>/tools/net11.0`) need it, so it is **not** run by the GHA
    (which is on .NET 10); refresh it locally and commit the JSON. It documents the
    WS11 preview even though the site itself builds on WS 10.1.9.
  - **Statuses**: `covered` (`via` = `inline`/`direct`/`macro…`/`interface`/`enum`/
    `System.Object`/`built-in`), `maybe` (no member entry but a class-level
    macro), `missing`. Heuristics in `scanType`: `ToString`/`Equals`/`GetHashCode`
    overrides count via the `System.Object` proxy **only on proxied types**.
    Delegate `.ctor`/`Invoke` are `built-in`. Attributes, obsolete-as-error members
    and F# SRTP witness overloads (parameters named `get_Zero`/`op_Addition`/
    `divideByInt`) are dropped. Member-less nested types (union cases, `Tags`) are
    dropped. Primitive operators and language constructs aren't members, so they
    never show up.
  - **Display** names are source-like: F# `CompilationSourceName` (`map`, not
    `Map`), modules without `Module`, `FSharpList` → `List`, C# keyword aliases,
    and properties/events/operators rendered as such.
  - **Headline numbers**: the BCL percentage is over `focusNamespaces` (14
    client-relevant namespaces). The raw BCL total (46k members, mostly
    server-only) is meaningless, so the rest sit under a collapsed "more
    namespaces" row.
  - **Page**: `Coverage.Fill` renders the hero, stats and namespace overview at
    build time from the embedded `Assets/coverage/index.json` (an
    `EmbeddedResource`, deserialized into the `CoverageData` records, whose field
    names are the JSON keys). `CoverageClient.Explorer` is a client widget
    (`client (...)` in `ServerPages.Coverage`) that fetches `index.json`.
    It searches types, plus `Type.member` queries (`String.Split`, `List.map`), which
    load the named types' namespace files. Namespace files are fetched lazily and
    cached. Deep links are `#ns=<libId>:<namespace>` (the overview rows) and
    `?q=<query>`. In the index and the namespace files, types are in the **same
    order**, so the explorer pairs them by position (display names are not unique:
    F# has a `List` module, a `List` static class and `List<T>`).

- **Conformance page** (`/conformance`, `Conformance.html`, `Src/Conformance.fs`,
  `tools/conformance/export.mjs`): the published matrices of core's C# and F# conformance
  checks (`core/tests/WebSharper.CSharp.Conformance`, `core/tests/WebSharper.FSharp.Conformance`)
  on **one page**: both languages are rendered server-side (the nested `LangView` template,
  once per language, `data-lang-view="<lang>"`, F# `hidden`) and a C# / F# switch at the top
  picks one client-side. Linked from the footer ("C# conformance" → `./conformance`,
  "F# conformance" → `./conformance#fsharp`), the Coverage page and a card on the C# page
  (after the translator's "Also translated" box, holes
  `ConformancePass`/`ConformanceTotal`/`ConformanceKnown`, from `Conformance.Summary "csharp"`).
  - **Hash routing** (`ConformanceClient`): the URL hash is the whole state, so every view is
    shareable: `#csharp` (also the no-hash default), `#fsharp`, and `#<lang>/<area>` for an
    area (`#fsharp/dates`). The switch (`data-lang-tab`, styled with `aria-selected:`) and the
    area pills (`data-open-area`) are **plain links** to those hashes; `hashchange` applies
    them, so back/forward walk through the states. Element ids are language-prefixed
    (`fsharp-area-dates`, `fsharp-open`, `fsharp-known`), and no id equals a hash, so the
    browser never scrolls on its own. A link to the hash already in the URL fires no
    `hashchange`, so the pills also re-apply on click (reopening a collapsed area). The area is
    opened again after `load` (opened earlier, the page's own loading leaves it closed) and
    scrolled to instantly; clicks scroll smoothly.
  - `ConformanceClient.Behaviour` does its wiring when it is **called**, not in
    `on.afterRender`: the page activates it with `ReplaceInDom` on `DOMContentLoaded`, which
    never fires `afterRender`, so a hook there silently never runs (a fragment link still
    seemed to work only because Chrome opens a `<details>` that a link targets).
  - **Data** is generated, never hand-edited: build core's `Net/` project in Release, then
    `node tools/conformance/export.mjs <csharp|fsharp> [path/to/core]` (default `csharp`,
    `../core`) rewrites `WebSharperWebsite/Assets/conformance/<lang>.json` from the case files
    (one case per line, `C("name", () => body),` in C# and `C "name" (fun () -> body)` in F#;
    the first one inside an `#if !JS` fence wins), `baseline.json` (status), `known.json`
    (reasons) and the .NET run (each case's output, with `TZ=UTC` like core's F# check). The
    area list per language is in the script; it fails if a case file isn't mapped to an area
    or a baseline case isn't found. Not run by the GHA; refresh locally after core's
    conformance changes and commit the JSON.
  - A `known.json` reason is "<difference>. <alternative>.": the export splits off the
    **last sentence** as the "Instead:" text, so keep that shape in core.
  - **Per-language view**: headline cards, known-difference cards, a collapsed "Not matching
    .NET yet" list of the `mismatch` and `unsupported` cases (only when there are any), and one
    `<details>` per area. `${Lang}`, `${LangId}`, `${Project}`, `${JsonPath}` and `${TsNote}`
    (the C#-only `.d.ts` check) are its text holes. Both languages make the built page ~1.1 MB
    of HTML. Inside `ServerPages`, `Conformance` is the page function, so reach the module as
    `WebSharperWebsite.Conformance`.

## WebSharper client-code constraints (met in this repo)

- The JavaScript compilation rejects some .NET members:
  `String.ToLowerInvariant` fails with `WS9001: Method name not found in
  JavaScript compilation` — use `ToLower()`.
- A record-of-vars (`Var.V`) only type-checks in template setter position;
  elsewhere update the whole record:
  `ContactFormVar.Value <- { ContactFormVar.Value with subject = s }`.

## Components (code windows)

`Components.html` holds the inner templates; `Src/Components.fs` supplies data only
(no DOM built in F#). The widgets:

- **`VsCode`** — one editor plus a **Preview** tab (iframe) and a Terminal below.
  Tabs come from a `CodeTab list`; the terminal content is a `Doc`
  (`Component.ViteTerminal()` for the F#/Vite demo, `Component.WsocamlTerminal()` for
  OCaml). The terminal text hole is `ws-hole="TerminalContent"`.
- **`VsCode3`** — a three-pane editor plus a Terminal. **Each pane has its own tab
  label directly above it** (icon + name); the three labels must share one style and
  sit at the same height (not clustered in the top bar). Panes are an even
  `md:grid-cols-3 md:divide-x`, with the Terminal as `md:col-span-3`.
- **`CodeFilesWithPreviewPanel` / `CodeFiles`** — tabbed code beside a live preview
  iframe (or plain tabs). The preview panel is `sm:absolute` / `sm:-right-0`, so it
  positions against the nearest positioned ancestor: the `ws-hole` wrapper **must be
  `relative`** (the OCaml page does this) — without it the preview floats to the
  top-right of the whole `relative lg:flex` rail.
- **`CodeFilesWithPreviewTab`** — the `CodeFiles` shell plus an extra **Preview** tab
  (the shared `VsCodeResultTab`/`VsCodePanelResult`), so the app preview lives in a
  tab instead of beside the code. Used by the first two Features sections (in their
  normal text-LHS / widget-RHS half column).

### Line-number alignment (`Js/line-numbers.js`)

- The code `<code>` line-height is forced by `Styles/prism-override.css`
  (`code[class*="language-"] { line-height: 1.21rem !important }`). The separate
  **line-number column must use the same `leading-[1.21rem]`** — any mismatch drifts
  ~1.3 px/line and is obvious by the last line.
- The code panels carry `mt-[-18px]` (compensating the
  `pre[class*=language-].line-numbers` `padding-top`) so the first code line lines up
  with the number "1".
- `updateVisibleLineNumbers()` sizes each pane to the **available height**
  (`wrapper.parentElement.clientHeight`) rather than a fixed line count, so long content
  reaches the Terminal; it re-runs on resize.

### Preview iframes & theme

- Preview iframes use `class="themed-iframe"` + `data-src`; `updateAllIframesTheme`
  appends `?theme=dark|light` (from the head theme script and `Theme.Init()`).
- A snippet shell that reads `?theme` **must also set `color-scheme`**
  (`:root[data-theme='dark'] { color-scheme: dark }`). Otherwise the iframe canvas stays
  white and the dark-theme (white) text is invisible — see
  `snippets/add_two_numbers/wwwroot/index.html`.

## Theme

- Stored under key **`theme`** with values `light` / `dark` / `system` — the same
  convention as the docs site (fumadocs / next-themes), so the two can share the choice
  where origins allow. Implemented in the head script of every page template +
  `Layout.html`, and in `Src/Theme.fs` (`Init` / `Toggle`).
- **Default is dark** when nothing is stored (`getInitialTheme` returns `"dark"`).
- `applyTheme` also sets `color-scheme` on `<html>` and syncs the iframes.
- **Light theme surfaces** live in one block at the end of `Styles/app.css`, scoped
  to `:root:not(.dark)` and left **unlayered** so they beat Tailwind utilities
  without `!important` (dark is untouched). It gives `body` a tinted aurora
  canvas (`#f6f8fc` + fixed radial brand glows) instead of flat white, and styles
  hook classes: `.site-header` (frosted header in `Layout.html`), `.ws-card`
  (elevated card with brand hover — Bindings and Examples cards), `.ws-window` /
  `.ws-window-pane` / `.ws-window-terminal` (code windows in `Components.html`),
  and the `.section-link` rail (readable inactive labels, sky active dot). Add the
  hook class to new cards/windows rather than re-tuning their light utilities.
- The header theme control is a **docs-style segment pill**, mirroring fumadocs'
  `ThemeToggle` in `light-dark` mode: a single `[data-theme-toggle]` button with
  sun + moon chips, the active one highlighted. The pill is `border` + `p-1`,
  each chip is `size-[26px]`; the active state is inferred purely from the
  `.dark` class (light → sun chip, dark → moon chip), so no separate JS is
  needed. Both header instances (mobile + desktop) must stay in sync. Arbitrary
  `hsl(...)` colours do not emit Tailwind utilities here — use the equivalent
  hex values (`#e5e5e5`/`#242424` border, `#e6e6e6`/`#2b2b2b` active chip,
  `#171717`/`#e6e6e6` active icon, `#737373`/`#9b9b9b` inactive icon).

## Menu, footer, chrome

- **Active page underline**: `markActiveNav()` (in the `Layout.html` head script) adds
  `.nav-active` (in `app.css`) to the menu link matching `location.pathname`; it skips
  anchors that contain an `<img>` so the logo is never underlined.
- **Footer**: copyright is `2008-<year>`; the "Latest version" line is a live NuGet
  lookup (`api.nuget.org/v3-flatcontainer/websharper/index.json`) and **only the version
  is the link** (`#ws-latest-version` → nuget.org/packages/WebSharper).
- **Login**: the account dropdown and mobile menu render a non-interactive
  "Coming soon..." (no `ws-onclick`); `AuthClient.Login` / `AccountMenu` stay in the
  codebase. **Nothing login- or purchase-related was deleted** — `Src/AuthClient.fs`,
  `Src/AccountMenu.fs`, `Src/Checkout/*`, `Src/ManageSubscription/*` and the
  `/checkout` + `/account` routes are all still wired, and `AuthClient.Login()` is
  still called from the checkout GitHub-login and the manage-subscription auth view;
  only the header's "Log in" entry point was unwired.

## Placeholder & legal pages

- `ComingSoon.html` (route `/warp`) and `ForTeams.html` (route `/support`) are the
  coming-soon pages, wired in `Main.fs` / `Pages.fs`. Warp's header graphic is the
  **spec → many files** panel; For Teams' is the orbit + mock editor.
- Legal pages `/privacy-policy`, `/terms-of-use`, `/cookie-policy` use `Legal.html` +
  raw-HTML fragments in `CodeFragments/legal/*.html`, injected with `Doc.Verbatim` and
  styled via `.legal-content` in `app.css`. Only websharper.com is mentioned.
- **Blogs** (`/blogs` + `/blogs/<stem>`): generated from the **`blogs` git
  submodule** (`intellifactory/blogs`) — ~300 markdown articles under
  `blogs/user/<author>/`, each named `YYYYMMDD-<slug>.md` with a `---` front
  matter block (`title`, `categories`, `abstract`). `Src/Blog.fs` loads them **at
  build time** from `../blogs/user` (the page generator's cwd is the project
  dir), parses the front matter, renders the body with **Markdig**
  (`UseAdvancedExtensions().UseFigures()`) and rewrites in-content
  `/user/<author>/<stem>.md` links to `/blogs/<stem>`. The tag filter is
  **config-driven** (`includeTags` / `excludeTags` in `WebSharperWebsite/config.yml`,
  defaults `websharper` and `cloudsharper,bolero,webassembly,mvp`; ~203 of 297
  articles). `Blogs.html` lists them grouped by year (title link, date, author,
  tags, `abstract`) with a **sticky year rail** (`.section-link` + `data-step`,
  same scroll-spy as Features/Bindings); article pages reuse `BlogsArticle.html`
  (centered header matching the Bindings page: title + author/date/tags + body,
  styled via `.blog-content` in `app.css`). The action is `BlogArticle of stem`
  with `[<EndPoint "GET /blogs">]` (same endpoint as the listing): the
  **union-case router appends unmatched fields as path segments** and does
  **not** substitute `{field}` holes (those only work for record/class routers),
  so the URL is `/blogs/<stem>` and every article is added to
  `Website.Actions`. Author display names also come from `config.yml`
  (`users: "granicz->Adam Granicz,…"`). Article images come from the submodule's
  `assets/`, copied to `bin/html/Assets/blog/` by `esbuild.config.mjs` and
  referenced as `/Assets/blog/...` (a lowercase `assets/` would collide with
  `Assets/` on case-insensitive filesystems and 404 on GitHub Pages).
  `.blog-content figure img` uses `max-width: 100%` + `height: auto !important`
  (never `width: 100%`): some articles set `height: 100%` inline, which would
  otherwise stretch and skew the image. The GHA checkout uses
  `submodules: recursive`. The menubar entry sits before "For Teams"; the
  footer's "Blogs" link still points at `intellifactory.com/blogs`.

## Examples & Features content

- **Examples** (`Examples.html`, `Src/Examples.fs`): tabs are a `Tab` DU with
  `[<EndPoint "…">]` and an installed hash router (`ActiveTab`). The **Visualization**
  tab was removed; remaining: Charts, Maps, Forms, Spreadsheet. Each tab's live preview
  is an iframe under `snippets/<name>/`.
- **Features** (`Src/Pages.fs` `Features`; content in `CodeFragments/<feature>/`): each
  feature shows source + generated output. Keep the **JS tabs in sync with the F#**
  (modulo simplification) — e.g. `on.change` → `addEventListener("change", …)`; a React
  `Render()` returning `ul/li` → valid JSX `<ul className="person">…`; a router installed
  with `Article 1` starts at that route; and a WebSharper endpoint `GET /article` with an
  `id` field links as `/article?id=…` (a query param, not a path segment).
  - **Reactive values** and **Type-safe JS bindings** (the first two Features sections,
    in the usual text-LHS / widget-RHS half column) use `CodeFilesWithPreviewTab`, so
    their app preview is the fourth tab. Tabs: `Leaflet.fs` (WIG), `Client.fs`,
    `index.html`, **Preview** — and for reactive `Client.fs`, `index.html`,
    `reactive.js`, **Preview**. The snippets (`snippets/maps`, `snippets/reactive`)
    keep their markup in `index.html` and fill it with **`.Bind()`**: holes live
    directly in the page (no `ws-children-template`), and `.Bind()` is a method on the
    **root** template (`IndexTemplate()`), not on a `ws-children-template`. `snippets/reactive` is a copy of the
    `add_two_numbers` scaffold (same `SPAEntryPoint` + esbuild setup); `snippets/maps`
    is shared with the Examples Maps tab, so changing it changes both.

## SPA rule: templates + `.Bind()`, never `Doc.RunById`

Every WebSharper.UI SPA here — the `snippets/*` projects **and** the code shown on
the site (`CodeFragments/*`, the code strings in `Src/Examples.fs`, plus their
generated-JS twins) — uses an HTML template
(`Template<"wwwroot/index.html", ClientLoad.FromDocument>`) with the holes placed
**directly in the page body** and finishes with `IndexTemplate()....Bind()`. No
`Doc.RunById`/`Doc.Run`, and no `ws-children-template` wrapper for the page itself
(nested `ws-template`s such as a list item are fine). Widgets that need an element
use a hole (`ws-hole="Map"`) or `ws-onafterrender` (the chart snippet:
`.DrawChart(fun (el: Dom.Element) -> Plotly.NewPlot(As<HTMLElement> el, ...))`).
Old blog articles are historical and left as written.

- **C# templates** get the same `.Bind()` since WebSharper.UI 10.1.9 (ui#313/#315):
  `snippets/csharp-tasks` puts its holes directly in `wwwroot/index.html` (the
  file starts with `<!-- ClientLoad = FromDocument -->`) and ends with
  `new Template.Index()....Bind()`.

## Snippets & static previews

- A snippet's `wwwroot` is copied **verbatim** into the site: `extra.files` copies
  `WebSharperWebsite/snippets/*` into `build/`, and `esbuild.config.mjs` copies
  `build/snippets/<name>/wwwroot/*` into `bin/html/snippets/<name>/`, served live at
  `./snippets/<name>/…`.
- `.gitignore` ignores `snippets/*/wwwroot/Scripts` (the .NET snippets rebuild those),
  but **the two OCaml previews are committed generated bundles** (this repo has no OCaml
  toolchain in its build): `snippets/todomvc-lm/wwwroot/{app.js,index.html,css/app.css}`
  and `snippets/ocaml-counter/wwwroot/{app.js,index.html}`; each has a README with the
  regeneration commands (build the sample with `wsocaml`, then esbuild-bundle `Main.js`).
- Snippet shells that adapt to `?theme` must set `color-scheme` (see "Preview iframes &
  theme").

## C# page

`/csharp` (`CSharp.html`, `Src/Pages.fs` `CSharp`, menubar entry after Features)
is a **persuasion page**, deliberately *not* shaped like the OCaml page (violet
`#9B4F96` accent). `CSharp.html` is just the `<main ws-children-template="Content">`
(no dead head/chrome). Sections, top to bottom:

The page follows `~/dotnet-websharper/VISION.md`: lead with **fewer seams** (the
compiler writes the glue between tiers), make **"no surprises"** (conformance) a
first-class reason, and claim only what has shipped or is about to.

- **Hero**: left-aligned copy (the subline names the glue WebSharper generates:
  endpoints, DTOs, fetch calls, serialization) + a right-hand "One C# project →
  `dotnet build` → Server / Browser" card whose footer says what is generated.
- **Debugging** (`#debugging`, right after the hero): source maps. A static
  `ws-card` band with copy (browser / server / "one language in both debuggers")
  and a mock DevTools Sources panel paused on line 19 of `ShopClient.cs` (the same
  client as the remoting section; keep the lines and line numbers in step with that
  fragment). The tree shows a client-server app's real layout,
  `Scripts/WebSharper/Source/<Assembly>/Client.cs`. The claim depends on core#1686
  (#1685): before it, a `spa`/bundle project's **own** `.cs`/`.fs` files were missing
  from the map (absolute path / bare name, never copied, 404 in DevTools), and only
  the libraries' sources resolved. Non-prebundled `web` projects (the client-server
  templates' Debug configuration) already worked; `preBundle` (their Release
  configuration) has no source maps. Keep the mock inside `overflow-x-auto` +
  `min-w-[580px]`.
- **Why full-stack C#**: six `ws-card` argument blocks. The AI/agents block is the
  featured one (`lg:col-span-2 lg:row-span-2`, with a fake agent ↔ `dotnet build`
  log); the 2×2 span is what keeps the 3-column grid free of an orphan card. Its
  bullets include the `AGENTS.md` + agent skills shipped in every `dotnet new`
  template. Its lower half ("Your agent can ask the compiler") documents the
  Booster MCP (`dotnet ws mcp --lang csharp`, WS11) and Booster Pro's
  `get_signature`; keep the tool list in step with the `dotnet-ws` and
  `booster-pro` READMEs, and keep the `.mcp.json` args wrapped (a single line is
  cut off in the half column). The other five: type safety (which also carries the
  cross-tier refactoring point), one team, **"What compiles behaves like .NET"**
  (wrap-around, .NET exception types, `decimal` via math.js, no lookalike APIs;
  its link reuses the `${ConformancePass}`/`${ConformanceTotal}` holes), the .NET
  platform, readable JavaScript.
- **No glue code** ("Call the server like a local method"): `CSharpRemoting` is a
  `CodeFiles` with Remoting/Client/Shared/Site tabs (numbered list beside it in the
  same order); its wrapper raises the window height with
  `[&_.snippet-code>div]:h-[34rem]`. It sits right after the reasons because it is
  the proof of the hero's "fewer seams" claim.
- **Translator** (`#translator`, "C# in, idiomatic JavaScript out"): feature tabs
  + a C#/JS pair per feature, from `csharpTranslations` in `Pages.fs` and
  `CodeFragments/csharp/translate/<key>.cs` + `<key>.mjs`. JS fragments **must be
  `.mjs`**: a `.js` under `CodeFragments/` is picked up by the esbuild step and
  fails to parse. The JS is **real WebSharper 11 output** (`11.0.0.763-preview.2`,
  compiled from the C# in a scratch `spa` project and only reformatted), so
  re-generate it the same way if you change a C# side; don't hand-write it. The
  examples follow core PR #1620. C# pattern matching was left out on purpose: its
  output is still noisy (`&&true` chains, `Deconstruct` through get/set objects).
  Tab switching is `Translator.Select` (`Src/Translator.fs`): server-rendered tabs
  and panels, toggled by `aria-selected` (styled with Tailwind's `aria-selected:`
  variant) and `hidden`.
- **TypeScript** (`#typescript`, "Typed for TypeScript, too"): static markup —
  four reasons (adopt one module at a time, write rules once, `javascriptExport`
  to npm, `tsc` as a safety net) beside `Pricing.cs` (a `LineItem` record with a
  computed `Subtotal`, plus `Cart.Total`/`Skus`) → the generated
  `Pricing.LineItem.d.ts` + `Pricing.Cart.d.ts` → `checkout.ts` with the `tsc`
  errors. All of it is **real output** of core `master` after the `.d.ts` fixes
  (core#1653/#1666; the `768-preview.2` package predates them), compiled as a
  `library` with `"javascriptExport": true, "dce": true` in a scratch project
  under `core/tests/` that references the local compiler like the conformance
  `Js/` project, and checked with `tsc --strict --skipLibCheck` (the two errors
  shown are exactly what `tsc` reports). The record excerpt omits the overload-tagged
  constructors (`constructor(i: "New_1", Sku, UnitPrice, Quantity?)`) and the
  `EqualityContract`/`Deconstruct`/`op_*` members; `Equals` is shown as emitted
  (`obj: any`). Regenerate the same way if the C# changes. The "JavaScript you can
  read" card links here. Don't write `${` in this markup: it is a template hole.
- **Reactive UI**: the `CSharpHero` live app (below).
- **Ecosystem**: 42 library + 41 browser-API chips, static and generated from
  `bindings.json` (update the counts and chips when the catalog changes). The
  "`dotnet add package` away" line is only fully true once the dev-feed-only
  bindings are on nuget.org.
- **Coming next: Warp**: a single linked `ws-card` band to `/warp` (data access,
  auth and one-command deploy on the same typed contract).
- **CTA**: new app (templates) vs existing ASP.NET Core app (packages), plus a
  one-line "C# for reach, F# for power" pointer to `/features`.

- `CSharpHero` is a `VsCode` whose Preview is the **`snippets/csharp-tasks`** app —
  a real C# WebSharper SPA (`csharp-tasks.csproj`, `WebSharper.CSharp` +
  `WebSharper.UI.CSharp`, typed template from `wwwroot/index.html`), with
  `Component.CSharpTerminal()`. It is the only `.csproj` snippet, so the GHA
  "Build snippets" loop globs `*/*.csproj` as well as `*/*.fsproj`. Its
  `AssemblyName` is `CSharpTasks` because the C# template generator puts the
  typed templates in `<AssemblyName>.Template`, so the code's namespace must match
  the assembly name for `new Template.Index.Main()` to resolve.
- `CSharpRemoting` shows `CodeFragments/csharp/{Remoting,Shared,Site,ShopClient}.cs`,
  a small product-search app that was compiled **and run** in a scratch
  client-server project (the remote call returned and rendered results). Two
  lessons from that: `decimal` is not remoting-serializable (use `double`), and
  `DocSeqCached` over C# **records** without a key function overflowed the stack —
  pass a key (`DocSeqCached(p => p.Name, p => ...)`). Re-verify the same way if you
  edit them; `Client.cs` is a copy of the snippet's `Client.cs`.
- Menubar spacing: with 10 entries the desktop nav uses
  `lg:gap-x-3 xl:gap-x-4 2xl:gap-x-6`, and between `lg` and `xl` it hides the
  "WebSharper" wordmark and the X/Discord icons (`lg:max-xl:hidden`) so nothing
  touches the theme toggle at 1024px. Re-measure at 1024/1280/1440 when adding an entry.

## OCaml page

`/ocaml` (`Ocaml.html`, `Src/Pages.fs` `Ocaml`) is a coming-soon-styled page:

- Hero: an `Experimental` pill + an amber callout, the same `max-w-4xl` box as Warp /
  For Teams, and GitHub + Discord buttons (no "Get started").
- `OcamlHero` is a `VsCode` whose Preview is the **todomvc-lm** static app
  (`./snippets/todomvc-lm/index.html`), with the wsocaml terminal
  (`Component.WsocamlTerminal()`).
- `OcamlReactive` is a `CodeFilesWithPreviewPanel` showing `counter.ml` with the live
  **ocaml-counter** preview; `OcamlTiers` is a `VsCode3` (shared / server / client), and
  the section copy highlights hydration.
- The code fragments (`CodeFragments/ocaml/*`) are the source of truth for both the
  displayed tabs and the preview builds; keep them valid and beginner-friendly.
