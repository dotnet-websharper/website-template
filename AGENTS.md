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
  `WebSharper.UI` `10.1.7.686`, `WebSharper.SweetAlert` `10.1.0.667`.
- WS 10.1 emits local `JS.ImportFile` resources as
  `.../Content/WebSharper/<Assembly>/<file>` imports, but the `html` project
  output puts them under `build/Scripts/WebSharper/<Assembly>/`. The
  `websharper-content-imports` plugin in `esbuild.config.mjs` resolves the
  former from the latter (and `../../tailwind.css` from `build/`); without it
  the bundle fails on `Styles/prism-override.css`.
- Output lands in `WebSharperWebsite/bin/html/` (`*.html`, `Assets/`,
  `snippets/`, `Scripts/WebSharper/*.{js,css}`).
- `--no-incremental` matters: **`.html` edits do not reliably trigger a
  WebSharper rebuild** (templates are compiled), so a stale page is usually a
  missed rebuild rather than a caching bug.
- Preview: `dotnet serve --tls --port 5173 --default-extensions:.html,.htm` from
  `bin/html`, then <https://localhost:5173>. The extension list matters — the
  site routes extension-less paths (`/support`, `/examples`), so a plain static
  server (e.g. `python3 -m http.server`) needs `/support.html`.
- `WEBSHARPERTASK : WSB9002 … Retrying with Standalone build` is pre-existing
  noise, not a failure.
- The dev server serves `Scripts/WebSharper/all.css`/`*.js` **without any
  cache-busting**, so a previously-loaded page can keep a stale stylesheet and mask
  CSS changes — hard-reload (or disable cache) when verifying styling.
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
  animate — pair it with `transition`/`transition-transform`. (The theme toggle's
  `transistion` typo silently disabled its hover rotation until it was fixed.)

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
  wsfscservice` and rebuild before touching the markup.

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
  - **Catalog** in `extract-bindings.fsx`: `libraries` (27) and `browserApis`
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
    prefers the **nuget.org** version when present (so a package in both feeds
    uses the NuGet version); otherwise it uses the GH-feed version and sets
    `devFeed: true`, which renders the **Dev feed** badge. The GH feed's
    `versions` array is **newest-first** (`versions.[0]`); nuget.org's is
    ascending (`versions.[last]`). Most of the modernized browser-API bindings
    (`ServiceWorker`, `Clipboard`, `CookieStore`, `BatteryStatus`, `Push`,
    `BackgroundFetch`, `Permissions`, …) are published only to the GH feed and
    not to nuget.org, so their cards do show the badge; a few newer catalog
    entries (`WebBluetooth`, `WebCodecs`, `WebVTT`, `WebCrypto`,
    `WebAuthentication`) have no published package yet and get an empty version
    (the version badge is then hidden).
  - **Version display**: `nugetVersion` returns the **last** entry in the
    nuget.org `versions` array, which is the newest version and may be a preview
    (`11.0.0.695-preview.1`). Filter previews in `nugetVersion` if the page
    should show only stable releases.
  - **Template holes**: `LibraryCard`/`BrowserCard` are `ws-template` roots with
    `data-binding-card`/`data-binding-name`; the version is `ws-attr="VersionAttr"`,
    the "Dev feed" badge is `ws-attr="DevFeedAttr"`, and the sample link is
    `ws-attr="SampleAttr"`. `DevFeedAttr` is `attr.hidden ""` when false.
  - **Section nav**: `sectionNav` renders a sticky vertical rail (same
    `.section-link`/`data-step` + IntersectionObserver scroll-spy as the Features
    page); the two top-level entries ("JavaScript libraries", "Browser APIs")
    use a larger font than their category subsections. The horizontal category
    pills are `lg:hidden` (mobile only), so desktop navigation is the rail.
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
  iframe (or plain tabs).

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
