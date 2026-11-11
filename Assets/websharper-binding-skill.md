---
name: create-websharper-binding
description: Use when creating or updating a WebSharper binding (WIG) for a JavaScript library or browser API — designing the typed surface, scaffolding the binding, Extensions and sample projects, and verifying the generated JavaScript in a browser.
---

# Create a WebSharper binding

You are helping a developer wrap a JavaScript library (or a browser API) in a
strongly typed WebSharper binding, using the **WebSharper Interface Generator
(WIG)**. This skill is the repeatable workflow: design the surface, write the
definition, build a sample that exercises it, and verify the generated
JavaScript.

> This is the generic edition of the skill. It is meant to be copied verbatim
> into your coding agent's skills folder and adapted to the library at hand.

## What a binding is

A WebSharper binding is a small .NET project that describes a JavaScript API as
typed metadata. From a single F# `Definition` (the WIG DSL) WebSharper derives
the F# and C# types, members and inline glue, so callers get compile-time
checking instead of stringly-typed interop.

A typical binding repo contains:

| Project | Purpose |
|---|---|
| `WebSharper.<Name>` | The WIG definition (`Main.fs`). `<WebSharperProject>binding</WebSharperProject>`, targets `netstandard2.0`. |
| `WebSharper.<Name>.Extensions` | Optional hand-written `[<Inline>]` helpers for anything WIG cannot express. Targets `netstandard2.0`. |
| `WebSharper.<Name>.Sample` | A WebSharper.UI app that exercises the whole API and doubles as the test case. Targets the current .NET. |

Plus a `README.md` (with a live demo and screenshot), a `LICENSE.md` (Apache
2.0), and a CI workflow that builds the sample and deploys it to GitHub Pages.

## Ground rules

- The binding and Extensions projects stay on **`netstandard2.0`**.
- **Reuse core types.** `WebSharper.JavaScript` already models most browser and
  JS types (`Promise<'T>`, `Blob`, `ArrayBuffer`, `Dom.*`, `RequestOptions`,
  …). Reference them as `T<WebSharper.JavaScript.Foo>` — never redeclare a
  class with the same JS name in the same namespace.
- **Type visibility:** IG-generated types do not exist as .NET types while the
  *same* assembly compiles, so code that needs them (extra members, overloads,
  helpers) must live in a **separate Extensions assembly** that references the
  binding.
- **Prefer module `[<Inline>]` functions over F# type extensions** when adding
  cross-assembly helpers; type extensions are fragile.
- **npm-based bindings.** Import the library from its npm package
  (`Import`/`ImportDefault`), never from a CDN `<script>`. Pin the package in
  the binding `.fsproj`:

  ```xml
  <ItemGroup>
    <NpmDependencies>
      <NpmPackage Name="example-lib" Version="&gt;= 4.5.0 &lt; 5.0.0" ResolutionStrategy="Max" />
    </NpmDependencies>
  </ItemGroup>
  ```

  Use an **inclusive lower bound** and the **next major as an exclusive upper
  bound** (`4.5.0 <= x < 5.0.0`). Do not use the older `gt= X lt Y` form — it
  excludes the reference version itself.
- Preserve line endings (WIG files are often CRLF) and prefer surgical edits over
  whole-file rewrites.

## Workflow

### 1. Survey the upstream API

Read the library's own typings or documentation and note:

- Its **version** and the npm package name (this drives `NpmDependencies`).
- Whether it is an **ES module**, and what it exports (default export, named
  exports, or a global).
- The **classes, factories, options objects, events and enums** you need.
- Anything that cannot be expressed in WIG — that becomes Extensions work.

### 2. Design the typed surface

Decide what the ergonomic F#/C# view looks like before writing WIG:

- Prefer **classes** for constructors and instance members, **`Pattern.Config`**
  for options objects, and **`Pattern.EnumStrings`** for string enums.
- Use `!?` for optional arguments, `!|` for arrays, `+` for unions, `^->` for
  functions and `T<Promise<'T>>` for async results.
- Keep the surface close to the upstream names, but make required fields
  required and give superseded overloads `Obsolete`.

### 3. Write the WIG definition

A minimal, realistic `Main.fs`:

```fsharp
namespace WebSharper.Example

open WebSharper
open WebSharper.JavaScript
open WebSharper.InterfaceGenerator

module Definition =

    module Enum =
        let Mode =
            Pattern.EnumStrings "Mode" [ "fast"; "thorough" ]

    // Options objects: Required / Optional fields.
    let GreetOptions =
        Pattern.Config "GreetOptions" {
            Required = []
            Optional = [
                ("punctuation", T<string>)
                ("repeat", T<int>)
                ("mode", Enum.Mode.Type)
            ]
        }

    let Greeter =
        Class "Greeter"
        |+> Static [
            Constructor (T<string>?name * !?GreetOptions?options)
        ]
        |+> Instance [
            "name" =? T<string>
            "greet" => T<string>?message * !?GreetOptions?options ^-> T<string>
            "greetAsync" => T<string>?message ^-> T<Promise<string>>
            "onGreet" => (!?T<Dom.Event> ^-> T<unit>) ^-> T<unit>
        ]

    let Assembly =
        Assembly [
            Namespace "WebSharper.Example" [
                Greeter
                GreetOptions
                Enum.Mode
            ]
        ]

[<Sealed>]
type Extension() =
    interface IExtension with
        member ext.Assembly = Definition.Assembly

[<assembly: Extension(typeof<Extension>)>]
do ()
```

Key WIG shapes:

- `Class "Name" |+> Static [ ... ] |+> Instance [ ... ]`
- Property: `"name" =? T<string>`
- Method: `"greet" => T<string>?message ^-> T<string>`
- Constructor: `Constructor (T<string>?name * !?Options?options)`
- Inheritance: `Class "Foo" |=> Inherits T<Dom.EventTarget>`
- Optional argument: `!?Type?name`; array: `!|Type`; union: `A + B`
- DOM types come from `WebSharper.JavaScript.Dom`.

**Importing from npm** (library bindings):

```fsharp
// import Example from "example-lib"
let Example = Class "Example" |> ImportDefault "example-lib"

// import { animate } from "example-lib"
let Animate = Class "animate" |> Import "animate" "example-lib"
```

Never put `Import` on a `ToString`-style/special member — implement those as
plain members in the Extensions assembly instead.

### 4. Add an Extensions assembly when needed

Create `WebSharper.<Name>.Extensions` (`netstandard2.0`) referencing the
binding, and put anything the WIG surface cannot express there:

```fsharp
namespace WebSharper.Example.Extensions

open WebSharper
open WebSharper.JavaScript

[<JavaScript>]
module Extensions =
    [<Inline "$this.rawHandle()">]
    let rawHandle (x: Example.Greeter) : obj = X<obj>
```

Rules of thumb:

- Module `[<Inline>]` functions are the reliable pattern.
- Do not redeclare core/JS types.
- Keep the extensions small and documented.

### 5. Write a sample that exercises everything

Use WebSharper.UI:

- `Template<"wwwroot/index.html", ClientLoad.FromDocument>`, `Var`s, and
  `ws-var` / `ws-hole` / `ws-replace` holes with `.Bind` / `.V` callbacks.
- Exercise the **whole** API surface, not a single call.
- **Degrade gracefully** when the API is unavailable (secure context, missing
  feature, unsupported browser) instead of crashing silently.
- Finish the template with **`.Bind()`**; do **not** use `Doc.RunById` in a
  binding sample.
- Ship a **light theme by default** with a light/dark switcher, persist the
  choice in `localStorage`, and apply a stored theme in an inline `<head>`
  script before first paint to avoid a flash.
- Capture `docs/sample.png` in the default (light) theme.

### 6. Build and verify

1. Build the sample in **Release** and confirm `Build succeeded` with no new
   warnings.
2. Inspect the generated JavaScript (e.g. `build/*.js` / `dist/`) for the
   expected low-level calls (`new Greeter(...)`, `import`ed symbols, DOM APIs).
3. Render it in a **real browser** and take a screenshot — a headless browser
   driven by Playwright works well:

   ```js
   const browser = await chromium.launch();
   const page = await browser.newPage();
   await page.goto('http://localhost:8080/');
   await page.screenshot({ path: 'sample.png' });
   await browser.close();
   ```

4. Serve static output with a real static server (for example
   `dotnet serve -d dist -p 8080`), not a bare `python3 -m http.server`.

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| `FS0193` type mismatch across assemblies | Two assemblies define the same namespace + type | Reuse the core type; stop redeclaring it |
| `FS0039` extension member not found | Extension not visible across assemblies | Move it to an Extensions assembly, or use a module `[<Inline>]` function |
| Generated JS contains `value.$import()` | `Import` on `ToString`/special members | Implement the member in the Extensions assembly |
| `WS9001: DefaultOf requires a resolved type argument` | `Unchecked.defaultof<'T>` in generic/`[<JavaScript>]` code | Use `As<'T> null` |
| `ws-var` template error on `<p>` | `ws-var` is only for inputs/textareas/selects | Use a text hole with `.Hole(view)` |
| Stale template parse errors | Compiler template cache | Restart the compiler service / clean rebuild |
| Optional results are `null`, not `undefined` | The binding types them as `Optional<'T>` | Check both `isUndefined` and `isNull` |

## Definition of done

- [ ] Binding + Extensions on `netstandard2.0`; sample on the current .NET.
- [ ] Binding is npm-based, with `<NpmDependencies>` pinned as
      `>= <ref> < <next-major>`.
- [ ] WIG surface matches the upstream API; required fields required; superseded
      members `Obsolete`; no new warnings.
- [ ] Sample uses `Template`/`Var`/holes, ends with `.Bind()`, exercises the whole
      API, and degrades gracefully.
- [ ] Sample is light-themed by default with a working, persisted switcher.
- [ ] Release build succeeds; generated JS inspected; real-browser screenshot
      captured.
- [ ] `README.md` documents install, usage, the live sample and the test case;
      `LICENSE.md` is present.
- [ ] CI builds the sample and deploys it to GitHub Pages.

## Further reading

- WebSharper Interface Generator:
  <https://docs.websharper.com/core/interface-generator>
- [WebSharper](https://websharper.com) · [Bindings catalog](https://websharper.com/bindings)
