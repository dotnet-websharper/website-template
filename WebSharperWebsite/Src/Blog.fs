namespace WebSharperWebsite

open System
open System.Globalization
open System.IO
open System.Text.RegularExpressions
open WebSharper
open WebSharper.UI
open WebSharper.UI.Html
open Markdig

/// Loads the IntelliFactory blog articles from the `blogs` submodule and renders
/// them. Article pages live at `/blogs/<stem>`, where the file name encodes the
/// date and the URL slug (`YYYYMMDD-slug.md`).
module Blog =

    type Article =
        {
            Author: string
            Date: DateTime
            Stem: string
            Title: string
            Categories: string list
            Abstract: string
            Body: string
        }

    let private pipeline =
        MarkdownPipelineBuilder()
            .UseAdvancedExtensions()
            .UseFigures()
            .Build()

    // The build-time page generator runs with the project directory as its
    // working directory; keep a couple of fallbacks for other setups.
    let private candidateDirs =
        [
            "../blogs/user"
            "./blogs/user"
            "./WebSharperWebsite/../blogs/user"
        ]

    let private articlesDir () =
        match candidateDirs |> List.tryFind Directory.Exists with
        | Some dir -> dir
        | None ->
            failwithf "The `blogs` submodule was not found (looked in %A). Run `git submodule update --init`." candidateDirs

    /// Splits a simple `---`-delimited front matter block from the body. Values
    /// are double-quoted and may contain escaped quotes.
    let private frontMatter (raw: string) =
        let text = raw.TrimStart('\uFEFF').Replace("\r\n", "\n").Replace('\r', '\n')
        let empty = {| Title = ""; Abstract = ""; Categories = ""; Body = text |}
        if not (text.StartsWith "---\n") then
            empty
        else
            let rest = text.Substring(4)
            let close = rest.IndexOf("\n---", StringComparison.Ordinal)
            if close < 0 then
                empty
            else
                let front = rest.Substring(0, close)
                let body = rest.Substring(close + 4).TrimStart('\n')
                let get key =
                    front.Split('\n')
                    |> Array.tryPick (fun line ->
                        let line = line.Trim()
                        if line.StartsWith(key + ":") then
                            Some(line.Substring(key.Length + 1).Trim().Trim('"').Replace("\\\"", "\""))
                        else
                            None)
                    |> Option.defaultValue ""
                {| Title = get "title"; Abstract = get "abstract"; Categories = get "categories"; Body = body |}

    let private hasTag (tag: string) (categories: string list) =
        categories |> List.exists (fun c -> c.Equals(tag, StringComparison.OrdinalIgnoreCase))

    // ------------------------------------------------------------------
    // config.yml (next to the project): author names and the tag filter.
    // ------------------------------------------------------------------

    let private configText =
        lazy
            (let candidates =
                [
                    "./config.yml"; "./config.yaml"
                    "../config.yml"; "../config.yaml"
                    "./WebSharperWebsite/config.yml"; "./WebSharperWebsite/config.yaml"
                ]
             candidates
             |> List.tryPick (fun p -> if File.Exists p then Some(File.ReadAllText p) else None)
             |> Option.defaultValue "")

    let private configValue (key: string) =
        configText.Value.Replace("\r\n", "\n").Split('\n')
        |> Array.tryPick (fun line ->
            if line.StartsWith(key + ":") then
                Some(line.Substring(key.Length + 1).Trim().Trim('"'))
            else
                None)
        |> Option.defaultValue ""

    let private splitList (raw: string) =
        raw.Split(',') |> Array.map (fun x -> x.Trim()) |> Array.filter ((<>) "") |> List.ofArray

    let private users =
        lazy
            (let raw = configValue "users"
             if raw = "" then
                 Map.empty
             else
                 raw.Split(',')
                 |> Array.choose (fun kv ->
                     match kv.Split("->") with
                     | [| k; v |] -> Some(k.Trim(), v.Trim())
                     | _ -> None)
                 |> Map.ofArray)

    let private includeTags =
        lazy
            (let raw = configValue "includeTags"
             if raw = "" then [ "websharper" ] else splitList raw)

    let private excludeTags =
        lazy
            (let raw = configValue "excludeTags"
             if raw = "" then [ "cloudsharper"; "bolero"; "webassembly"; "mvp" ] else splitList raw)

    /// Only articles carrying an include tag and none of the exclude tags.
    let private isPublished (categories: string list) =
        let has tag = hasTag tag categories
        (includeTags.Value |> List.exists has)
        && not (excludeTags.Value |> List.exists has)

    let private loadArticles () =
        [ for authorDir in Directory.GetDirectories(articlesDir ()) do
            let author = Path.GetFileName authorDir
            for file in Directory.GetFiles(authorDir, "*.md") do
                let stem = Path.GetFileNameWithoutExtension file
                if stem.Length >= 9 && stem.[8] = '-' then
                    match DateTime.TryParseExact(stem.Substring(0, 8), "yyyyMMdd", CultureInfo.InvariantCulture, DateTimeStyles.None) with
                    | true, date ->
                        let fm = frontMatter (File.ReadAllText file)
                        let slug = stem.Substring(9)
                        yield
                            {
                                Author = author
                                Date = date
                                Stem = stem
                                Title = (if fm.Title = "" then slug.Replace('-', ' ') else fm.Title)
                                Categories =
                                    if fm.Categories = "" then
                                        []
                                    else
                                        fm.Categories.Split(',')
                                        |> Array.map (fun c -> c.Trim())
                                        |> Array.filter ((<>) "")
                                        |> List.ofArray
                                Abstract = fm.Abstract
                                Body = fm.Body
                            }
                    | _ -> () ]
        |> List.filter (fun a -> isPublished a.Categories)
        |> List.sortByDescending (fun a -> a.Date)

    let private articles = lazy (loadArticles ())

    let private displayName (author: string) =
        users.Value |> Map.tryFind author |> Option.defaultValue author

    /// Every published article, newest first.
    let Articles () = articles.Value

    let Find (stem: string) =
        articles.Value |> List.tryFind (fun a -> a.Stem = stem)

    let private articleUrl (a: Article) = "/blogs/" + a.Stem

    /// Renders an article body. Links to sibling articles are stored as
    /// repository paths (`/user/<author>/<stem>.md`); rewrite them to the
    /// generated `/blogs/<stem>` pages. Asset references (`/assets/…` or
    /// `../../assets/…`) point at the copied `Assets/blog/` folder.
    let ArticleBody (a: Article) =
        let body =
            a.Body
            |> fun s -> Regex.Replace(s, @"\(/user/[^/]+/([^)\s""]+)\.md", "(/blogs/$1)")
            |> fun s -> Regex.Replace(s, @"(?<=[""(])(?:\.\./)*/?assets/", "/Assets/blog/")
        Markdown.ToHtml(body, pipeline)

    let private tag (name: string) =
        span
            [ attr.``class`` "rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300" ]
            [ text name ]

    let private articleRow (article: Article) =
        li
            [ attr.``class`` "py-6" ]
            [
                yield
                    div
                        [ attr.``class`` "flex flex-wrap items-baseline gap-x-3 gap-y-1" ]
                        [
                            a
                                [
                                    attr.href (articleUrl article)
                                    attr.``class`` "text-xl font-semibold text-gray-950 transition duration-300 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                                ]
                                [ text article.Title ]
                            span
                                [ attr.``class`` "text-sm text-gray-500 dark:text-gray-400" ]
                                [ text (article.Date.ToString("d MMM yyyy", CultureInfo.InvariantCulture)) ]
                            span
                                [ attr.``class`` "text-sm text-gray-400 dark:text-gray-500" ]
                                [ text ("by " + displayName article.Author) ]
                        ]
                if article.Abstract <> "" then
                    yield
                        p
                            [ attr.``class`` "mt-2 line-clamp-2 text-base leading-7 text-gray-600 dark:text-gray-400" ]
                            [ text article.Abstract ]
                if not article.Categories.IsEmpty then
                    yield
                        div
                            [ attr.``class`` "mt-3 flex flex-wrap gap-2" ]
                            [ article.Categories |> List.map tag |> Doc.Concat ]
            ]

    let private years () =
        articles.Value
        |> List.map (fun a -> a.Date.Year)
        |> List.distinct
        |> List.sortDescending

    /// The summary: articles grouped by year, newest first.
    let Listing () =
        articles.Value
        |> List.groupBy (fun a -> a.Date.Year)
        |> List.sortByDescending fst
        |> List.map (fun (year, items) ->
            section
                [
                    attr.``class`` "mt-14 scroll-mt-28 first:mt-0"
                    attr.id ("year-" + string year)
                ]
                [
                    h2
                        [ attr.``class`` "text-3xl font-bold tracking-tight text-gray-950 dark:text-white" ]
                        [ text (string year) ]
                    ul
                        [ attr.``class`` "mt-4 divide-y divide-gray-200 dark:divide-gray-800" ]
                        [ items |> List.map articleRow |> Doc.Concat ]
                ])
        |> Doc.Concat

    /// The sticky year rail (same `.section-link` markup as Features/Bindings).
    let YearNav () =
        div
            [ attr.``class`` "flex flex-col items-end gap-4" ]
            [
                years ()
                |> List.map (fun year ->
                    let id = "year-" + string year
                    a
                        [
                            attr.href ("#" + id)
                            attr.``class`` "section-link group flex w-max items-center justify-end gap-3"
                            Attr.Create "data-step" id
                        ]
                        [
                            span
                                [ attr.``class`` "block translate-x-1 text-base text-gray-700 opacity-30 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100 dark:text-gray-200" ]
                                [ text (string year) ]
                            div
                                [
                                    attr.``class`` "h-2.5 w-2.5 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"
                                    Attr.Create "aria-hidden" "true"
                                ]
                                []
                        ])
                |> Doc.Concat
            ]

    /// Author/date/tags line shown under an article title.
    let ArticleMeta (a: Article) =
        div
            [ attr.``class`` "flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-base text-gray-500 dark:text-gray-400" ]
            [
                span [] [ text ("by " + displayName a.Author) ]
                span [ attr.``class`` "text-gray-300 dark:text-gray-600"; Attr.Create "aria-hidden" "true" ] [ text "·" ]
                time
                    [ attr.``class`` "text-gray-500 dark:text-gray-400"; Attr.Create "datetime" (a.Date.ToString "yyyy-MM-dd") ]
                    [ text (a.Date.ToString("d MMMM yyyy", CultureInfo.InvariantCulture)) ]
                if not a.Categories.IsEmpty then
                    span [ attr.``class`` "text-gray-300 dark:text-gray-600"; Attr.Create "aria-hidden" "true" ] [ text "·" ]
                    a.Categories |> List.map tag |> Doc.Concat
            ]
