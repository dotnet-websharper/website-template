/// JS-translation API coverage for websharper.com/coverage.
///
/// Reads the WebSharper metadata of WebSharper.StdLib + WebSharper.JavaScript (the
/// same reader as WebSharper.DllBrowser), reflects the public surface of the .NET 10
/// reference pack and FSharp.Core, and matches every constructor and method by
/// signature. Writes `index.json` (namespaces + types with counts) and one JSON file
/// per namespace (members) to WebSharperWebsite/Assets/coverage/.
module ApiCoverage

open System
open System.IO
open System.Reflection
open System.Collections.Generic
open System.Text.Json
open System.Text.Json.Serialization
open WebSharper.Core
open WebSharper.Core.AST
open WebSharper.Compiler

let meta key =
    Assembly.GetExecutingAssembly().GetCustomAttributes<AssemblyMetadataAttribute>()
    |> Seq.find (fun a -> a.Key = key)
    |> fun a -> a.Value

// ---------------------------------------------------------------------------
// Signature keys: rendered the same way on both sides.
// ---------------------------------------------------------------------------

let rec wsTy (t: AST.Type) =
    match t with
    | ConcreteType c ->
        let n = c.Entity.Value.FullName
        match c.Generics with
        | [] -> n
        | gs -> n + "<" + (gs |> List.map wsTy |> String.concat ",") + ">"
    | TypeParameter i -> "!" + string i
    | ArrayType (e, r) -> wsTy e + "[" + String.replicate (r - 1) "," + "]"
    | TupleType (ts, s) -> (if s then "struct" else "") + "(" + (ts |> List.map wsTy |> String.concat "*") + ")"
    | FSharpFuncType (a, r) -> "(" + wsTy a + "->" + wsTy r + ")"
    | ByRefType t -> "byref<" + wsTy t + ">"
    | VoidType -> "unit"
    | StaticTypeParameter i -> "^" + string i
    | LocalTypeParameter n -> "?" + n
    | TSType _ -> "ts"

let typeName (def: System.Type) =
    match def.FullName with
    | null -> "fnptr:" + def.Name
    | n -> n

let tupleArgs (args: System.Type list) =
    let rec go (args: System.Type list) =
        if args.Length = 8 then List.append args.[..6] (go (args.[7].GetGenericArguments() |> List.ofArray))
        else args
    go args

/// Mirrors WebSharper.Compiler.Reflector.getType: combined type-parameter
/// ordinals, Tuple/ValueTuple -> tuple, FSharpFunc -> arrow, Unit/Void -> unit.
let rec netTy (t: System.Type) =
    if t.IsByRef then "byref<" + netTy (t.GetElementType()) + ">"
    elif t.IsPointer then typeName t
    elif t.IsArray then netTy (t.GetElementType()) + "[" + String.replicate (t.GetArrayRank() - 1) "," + "]"
    elif t.IsGenericParameter then
        if isNull t.DeclaringMethod then "!" + string t.GenericParameterPosition
        else
            let tgen = match t.DeclaringMethod.DeclaringType with null -> 0 | d -> d.GetGenericArguments().Length
            "!" + string (tgen + t.GenericParameterPosition)
    else
        let def = if t.IsGenericType then t.GetGenericTypeDefinition() else t
        let name = typeName def
        let args = if t.IsGenericType then t.GetGenericArguments() |> List.ofArray else []
        if name = "System.Void" || name = "Microsoft.FSharp.Core.Unit" then "unit"
        elif name = "Microsoft.FSharp.Core.FSharpFunc`2" then "(" + netTy args.[0] + "->" + netTy args.[1] + ")"
        elif name.StartsWith "System.Tuple`" then "(" + (tupleArgs args |> List.map netTy |> String.concat "*") + ")"
        elif name.StartsWith "System.ValueTuple`" then "struct(" + (tupleArgs args |> List.map netTy |> String.concat "*") + ")"
        else
            match args with
            | [] -> name
            | _ -> name + "<" + (args |> List.map netTy |> String.concat ",") + ">"

let methodKey (name: string) (ps: string list) (ret: string) (gen: int) =
    name + "`" + string gen + "(" + String.concat "," ps + "):" + ret

// ---------------------------------------------------------------------------
// Display: what people (and agents) read and search.
// ---------------------------------------------------------------------------

let aliases =
    dict [
        "System.String", "string"; "System.Int32", "int"; "System.Boolean", "bool"
        "System.Double", "double"; "System.Single", "float32"; "System.Int64", "long"
        "System.Int16", "short"; "System.Byte", "byte"; "System.SByte", "sbyte"
        "System.UInt32", "uint"; "System.UInt64", "ulong"; "System.UInt16", "ushort"
        "System.Char", "char"; "System.Object", "object"; "System.Decimal", "decimal"
        "System.IntPtr", "nint"; "System.UIntPtr", "nuint"
    ]

let attrString (m: MemberInfo) (attrName: string) =
    m.CustomAttributes
    |> Seq.tryFind (fun a -> a.AttributeType.Name = attrName)
    |> Option.bind (fun a ->
        a.ConstructorArguments |> Seq.tryHead |> Option.bind (fun x -> match x.Value with :? string as s -> Some s | _ -> None))

let isFSharpModule (t: System.Type) =
    t.CustomAttributes
    |> Seq.exists (fun a ->
        a.AttributeType.Name = "CompilationMappingAttribute"
        && a.ConstructorArguments.Count > 0
        && (match a.ConstructorArguments.[0].Value with :? int as f -> f &&& 31 = 7 | _ -> false))

/// Short, source-like type name: no namespace, generic parameter names,
/// `FSharpList` -> `List`, F# modules without their `Module` suffix.
let rec shortTypeName (t: System.Type) =
    let def = if t.IsGenericType then t.GetGenericTypeDefinition() else t
    let own = def.Name.Split('`').[0]
    let own =
        if (match def.Namespace with null -> false | ns -> ns.StartsWith "Microsoft.FSharp") then
            let own = if own.StartsWith "FSharp" && own.Length > 6 then own.Substring 6 else own
            if own.EndsWith "Module" && isFSharpModule def then own.Substring(0, own.Length - 6) else own
        else own
    match def.DeclaringType with
    | null -> own
    | parent -> shortTypeName parent + "." + own

let rec dispTy (t: System.Type) : string =
    if t.IsByRef then "ref " + dispTy (t.GetElementType())
    elif t.IsPointer then dispTy (t.GetElementType()) + "*"
    elif t.IsArray then dispTy (t.GetElementType()) + "[" + String.replicate (t.GetArrayRank() - 1) "," + "]"
    elif t.IsGenericParameter then t.Name
    else
        let def = if t.IsGenericType then t.GetGenericTypeDefinition() else t
        let name = typeName def
        let args = if t.IsGenericType then t.GetGenericArguments() |> List.ofArray else []
        match aliases.TryGetValue name with
        | true, a -> a
        | _ ->
        if name = "System.Void" || name = "Microsoft.FSharp.Core.Unit" then "void"
        elif name = "Microsoft.FSharp.Core.FSharpFunc`2" then "(" + dispTy args.[0] + " -> " + dispTy args.[1] + ")"
        elif name.StartsWith "System.Tuple`" || name.StartsWith "System.ValueTuple`" then
            "(" + (tupleArgs args |> List.map dispTy |> String.concat ", ") + ")"
        elif name = "System.Nullable`1" then dispTy args.[0] + "?"
        else
            // own generic args only (nested types repeat the parent's)
            let ownArgs =
                let parentCount = match def.DeclaringType with null -> 0 | p -> p.GetGenericArguments().Length
                args |> List.skip (min parentCount args.Length)
            let baseName = shortTypeName t
            match ownArgs with
            | [] -> baseName
            | _ -> baseName + "<" + (ownArgs |> List.map dispTy |> String.concat ", ") + ">"

let typeDisplay (t: System.Type) =
    let ps =
        let parentCount = match t.DeclaringType with null -> 0 | p -> p.GetGenericArguments().Length
        t.GetGenericArguments() |> Array.skip (min parentCount (t.GetGenericArguments().Length))
    shortTypeName t + (if ps.Length = 0 then "" else "<" + (ps |> Array.map (fun p -> p.Name) |> String.concat ", ") + ">")

let operatorNames =
    dict [
        "op_Addition", "+"; "op_Subtraction", "-"; "op_Multiply", "*"; "op_Division", "/"
        "op_Modulus", "%"; "op_Equality", "=="; "op_Inequality", "!="; "op_LessThan", "<"
        "op_GreaterThan", ">"; "op_LessThanOrEqual", "<="; "op_GreaterThanOrEqual", ">="
        "op_UnaryNegation", "unary -"; "op_UnaryPlus", "unary +"; "op_Implicit", "implicit"
        "op_Explicit", "explicit"; "op_BitwiseAnd", "&"; "op_BitwiseOr", "|"; "op_ExclusiveOr", "^"
        "op_LeftShift", "<<"; "op_RightShift", ">>"; "op_Increment", "++"; "op_Decrement", "--"
        "op_OnesComplement", "~"; "op_LogicalNot", "!"
    ]

/// (displayName, displaySignature)
let memberDisplay (m: System.Reflection.MethodBase) =
    let pars (ps: System.Reflection.ParameterInfo[]) =
        ps |> Array.map (fun p -> (match p.Name with null | "" -> "" | n -> n + ": ") + dispTy p.ParameterType) |> String.concat ", "
    let ps = m.GetParameters()
    match m with
    | :? System.Reflection.ConstructorInfo -> "new", "new(" + pars ps + ")"
    | :? System.Reflection.MethodInfo as mi ->
        let ret = dispTy mi.ReturnType
        let gen = if mi.IsGenericMethod then "<" + (mi.GetGenericArguments() |> Array.map (fun a -> a.Name) |> String.concat ", ") + ">" else ""
        let name = defaultArg (attrString mi "CompilationSourceNameAttribute") mi.Name
        let isSpecial = mi.IsSpecialName
        if isSpecial && name.StartsWith "get_" then
            let p = name.Substring 4
            if ps.Length = 0 then p, $"{p}: {ret}  {{ get }}" else p, $"{p}[{pars ps}]: {ret}  {{ get }}"
        elif isSpecial && name.StartsWith "set_" then
            let p = name.Substring 4
            let idx = ps.[.. ps.Length - 2]
            let v = dispTy ps.[ps.Length - 1].ParameterType
            if idx.Length = 0 then p, $"{p}: {v}  {{ set }}" else p, $"{p}[{pars idx}]: {v}  {{ set }}"
        elif isSpecial && (name.StartsWith "add_" || name.StartsWith "remove_") then
            let i = name.IndexOf '_'
            let e = name.Substring(i + 1)
            e, $"event {e}  {{ {name.Substring(0, i)} }}"
        elif isSpecial && operatorNames.ContainsKey name then
            let op = operatorNames.[name]
            name, $"operator {op}({pars ps}): {ret}"
        else
            name, $"{name}{gen}({pars ps}): {ret}"
    | _ -> m.Name, m.Name

// ---------------------------------------------------------------------------
// WebSharper side
// ---------------------------------------------------------------------------

type Entry = { Kind: string; Detail: string }

let classes = Dictionary<string, Dictionary<string, Entry> * string list>()
let interfaces = Dictionary<string, HashSet<string>>()

let compiledKind (c: Metadata.CompiledMember) =
    match c with
    | Metadata.Instance _ | Metadata.Static _ | Metadata.Func _ | Metadata.GlobalFunc _ | Metadata.New _ -> "direct", ""
    | Metadata.Inline _ -> "inline", ""
    | Metadata.Macro (m, _, fb) -> (if fb.IsSome then "macro+fallback" else "macro"), m.Value.FullName
    | Metadata.Remote _ -> "remote", ""

let loadWebSharper (wsLib: string) =
    for f in [ "WebSharper.StdLib.dll"; "WebSharper.JavaScript.dll" ] do
        match FrontEnd.ReadFullFromFile (Path.Combine(wsLib, f)) |> snd with
        | None -> eprintfn "no metadata in %s" f
        | Some m ->
            for KeyValue (td, (_, _, ci)) in m.Classes do
                let tn = td.Value.FullName
                let members, macros =
                    match classes.TryGetValue tn with
                    | true, v -> v
                    | _ -> Dictionary(), []
                let macros =
                    match ci with
                    | Some c -> macros @ (c.Macros |> List.map (fun (t, _) -> t.Value.FullName))
                    | None -> macros
                ci |> Option.iter (fun c ->
                    for KeyValue (meth, info) in c.Methods do
                        let mv = meth.Value
                        let k, d = compiledKind info.CompiledForm
                        members.[methodKey mv.MethodName (mv.Parameters |> List.map wsTy) (wsTy mv.ReturnType) mv.Generics] <- { Kind = k; Detail = d }
                    for KeyValue (ctor, info) in c.Constructors do
                        let k, d = compiledKind info.CompiledForm
                        members.[methodKey ".ctor" (ctor.Value.CtorParameters |> List.map wsTy) "unit" 0] <- { Kind = k; Detail = d })
                classes.[tn] <- (members, macros)
            for KeyValue (td, ii) in m.Interfaces do
                let s = HashSet()
                for KeyValue (meth, _) in ii.Methods do
                    let mv = meth.Value
                    s.Add (methodKey mv.MethodName (mv.Parameters |> List.map wsTy) (wsTy mv.ReturnType) mv.Generics) |> ignore
                interfaces.[td.Value.FullName] <- s

// ---------------------------------------------------------------------------
// Output model (field names are the JSON keys the page reads)
// ---------------------------------------------------------------------------

[<CLIMutable>]
type MemberRow = { name: string; signature: string; status: string; via: string }

[<CLIMutable>]
type TypeRow =
    { name: string; clrName: string; assembly: string; kind: string; status: string
      covered: int; maybe: int; total: int; members: MemberRow[] }

/// Index entry for a type: no members (those live in the namespace file).
[<CLIMutable>]
type TypeSummary = { name: string; kind: string; status: string; covered: int; total: int }

[<CLIMutable>]
type NamespaceSummary =
    { name: string; focus: bool; covered: int; total: int; file: string; types: TypeSummary[] }

[<CLIMutable>]
type LibrarySummary =
    { id: string; name: string; covered: int; total: int
      focusCovered: int; focusTotal: int; namespaces: NamespaceSummary[] }

[<CLIMutable>]
type Index =
    { websharper: string; dotnet: string; fsharpCore: string; generated: string
      statuses: string; libraries: LibrarySummary[] }

[<CLIMutable>]
type NamespaceFile =
    { library: string; ``namespace``: string; websharper: string; types: TypeRow[] }

/// BCL namespaces a browser app is likely to touch; drives the headline numbers
/// (the whole BCL — Reflection.Emit, networking, intrinsics — is mostly out of scope).
let focusNamespaces =
    set [
        "System"; "System.Collections"; "System.Collections.Generic"; "System.Collections.ObjectModel"
        "System.Collections.Immutable"; "System.Diagnostics"; "System.Globalization"; "System.Linq"
        "System.Numerics"; "System.Text"; "System.Text.Json"; "System.Text.RegularExpressions"
        "System.Threading"; "System.Threading.Tasks"
    ]

// ---------------------------------------------------------------------------
// .NET side
// ---------------------------------------------------------------------------

let flags = BindingFlags.Public ||| BindingFlags.Instance ||| BindingFlags.Static ||| BindingFlags.DeclaredOnly

let isCompilerGenerated (m: MemberInfo) =
    m.CustomAttributes |> Seq.exists (fun a -> a.AttributeType.Name = "CompilerGeneratedAttribute")

let isObsoleteError (m: MemberInfo) =
    m.CustomAttributes |> Seq.exists (fun a ->
        a.AttributeType.Name = "ObsoleteAttribute"
        && a.ConstructorArguments |> Seq.exists (fun x -> match x.Value with :? bool as b -> b | _ -> false))

/// Attributes are compile-time only: they never reach JavaScript.
let rec isAttribute (t: System.Type) =
    match t.BaseType with
    | null -> false
    | b -> b.FullName = "System.Attribute" || isAttribute b

let scanType (t: System.Type) =
    let tn = t.FullName
    let wsMembers, macros =
        match classes.TryGetValue tn with
        | true, (m, macros) -> Some m, macros
        | _ -> None, []
    let ifaceMembers = match interfaces.TryGetValue tn with | true, s -> Some s | _ -> None
    let isDelegate = not (isNull t.BaseType) && t.BaseType.FullName = "System.MulticastDelegate"
    let methods : System.Reflection.MethodBase seq =
        Seq.append
            (t.GetConstructors flags |> Seq.cast<System.Reflection.MethodBase>)
            (t.GetMethods flags |> Seq.filter (fun m -> not (isCompilerGenerated m)) |> Seq.cast<System.Reflection.MethodBase>)
        |> Seq.filter (fun m -> not (t.IsInterface && m.IsStatic))
        |> Seq.filter (fun m -> not (isObsoleteError m))
        // F# SRTP witness overloads (`average` taking `get_Zero`/`op_Addition`): compiler-internal
        |> Seq.filter (fun m ->
            not (m.GetParameters() |> Array.exists (fun p ->
                match p.Name with
                | null -> false
                | n -> n.StartsWith "op_" || n.StartsWith "get_" || n = "divideByInt")))
    let rows =
        methods
        |> Seq.map (fun m ->
            let ps = m.GetParameters() |> Array.map (fun p -> netTy p.ParameterType) |> List.ofArray
            let key =
                match m with
                | :? System.Reflection.ConstructorInfo -> methodKey ".ctor" ps "unit" 0
                | :? System.Reflection.MethodInfo as mi ->
                    methodKey mi.Name ps (netTy mi.ReturnType) (if mi.IsGenericMethod then mi.GetGenericArguments().Length else 0)
                | _ -> ""
            let status, via =
                match wsMembers |> Option.bind (fun d -> match d.TryGetValue key with | true, e -> Some e | _ -> None) with
                | Some e -> "covered", (if e.Detail = "" then e.Kind else e.Kind + ":" + e.Detail)
                | None ->
                    let objectOverride =
                        match m with
                        | :? System.Reflection.MethodInfo as mi when mi.IsVirtual && not t.IsInterface && wsMembers.IsSome ->
                            not (mi.Attributes.HasFlag MethodAttributes.NewSlot)
                            && List.contains mi.Name [ "ToString"; "Equals"; "GetHashCode" ]
                            && (match classes.TryGetValue "System.Object" with
                                | true, (om, _) -> om.ContainsKey key
                                | _ -> false)
                        | _ -> false
                    if ifaceMembers |> Option.exists (fun s -> s.Contains key) then "covered", "interface"
                    elif objectOverride then "covered", "System.Object"
                    elif not macros.IsEmpty then "maybe", "class macro:" + String.concat "," macros
                    elif t.IsEnum then "covered", "enum"
                    else "missing", ""
            // Delegates are native: constructing one from a lambda and calling it are compiler built-ins.
            let status, via =
                if status = "missing" && isDelegate && (m.Name = "Invoke" || m.Name = ".ctor") then "covered", "built-in"
                else status, via
            let name, signature = memberDisplay m
            { name = name; signature = signature; status = status; via = via })
        |> Seq.sortBy (fun r -> (if r.name = "new" then 0 else 1), r.name, r.signature)
        |> Array.ofSeq
    let kind =
        if t.IsEnum then "enum"
        elif t.IsInterface then "interface"
        elif t.IsValueType then "struct"
        elif not (isNull t.BaseType) && t.BaseType.FullName = "System.MulticastDelegate" then "delegate"
        elif t.IsAbstract && t.IsSealed then (if isFSharpModule t then "module" else "static class")
        else "class"
    let covered = rows |> Array.filter (fun r -> r.status = "covered") |> Array.length
    let maybe = rows |> Array.filter (fun r -> r.status = "maybe") |> Array.length
    let status =
        if wsMembers.IsNone && ifaceMembers.IsNone && not t.IsEnum && covered = 0 then "missing"
        elif rows.Length = 0 || covered = rows.Length then "covered"
        elif covered = 0 && maybe = 0 then "missing"
        else "partial"
    { name = typeDisplay t; clrName = tn; assembly = t.Assembly.GetName().Name; kind = kind; status = status
      covered = covered; maybe = maybe; total = rows.Length; members = rows }

let slugify (ns: string) = if ns = "" then "_global" else ns

[<EntryPoint>]
let main argv =
    let wsVersion = meta "WsVersion"
    let outDir = Path.GetFullPath(meta "OutDir")
    let netRef = meta "NetRef"
    let fsharpCore = meta "FSharpCore"
    loadWebSharper (meta "WsLib")

    let bclDlls = Directory.GetFiles(netRef, "*.dll") |> Array.sort
    let resolver = PathAssemblyResolver(Array.append bclDlls [| fsharpCore |])
    use mlc = new MetadataLoadContext(resolver, "System.Runtime")
    let exported (path: string) =
        (mlc.LoadFromAssemblyPath path).GetExportedTypes()
        |> Array.filter (fun t -> not (t.Name.StartsWith "<") && not (isObsoleteError t) && not (isAttribute t))

    let libraries =
        [ "dotnet", ".NET 10 base class library", (bclDlls |> Array.collect exported), (fun (ns: string) -> focusNamespaces.Contains ns)
          "fsharp-core", "FSharp.Core", exported fsharpCore, (fun _ -> true) ]

    if Directory.Exists outDir then Directory.Delete(outDir, true)
    Directory.CreateDirectory outDir |> ignore
    let jsonOpts = JsonSerializerOptions(WriteIndented = false)
    jsonOpts.Encoder <- System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping

    let summaries =
        [| for id, title, types, isFocus in libraries do
            let rows =
                types
                |> Array.distinctBy (fun t -> t.FullName)
                |> Array.map (fun t -> t, (match t.Namespace with null -> "" | n -> n), scanType t)
                // Types with no members of their own (F# union-case classes, `Tags`, marker
                // types) are noise, unless they are enums or otherwise translated top-level types.
                |> Array.filter (fun (t, _, r) -> r.total > 0 || r.kind = "enum" || (isNull t.DeclaringType && r.status = "covered"))
                |> Array.map (fun (_, ns, r) -> ns, r)
            let namespaces =
                rows
                |> Array.groupBy fst
                |> Array.sortBy fst
                |> Array.map (fun (ns, ts) ->
                    let ts = ts |> Array.map snd |> Array.sortBy (fun t -> t.name.ToLowerInvariant())
                    let covered = ts |> Array.sumBy (fun t -> t.covered)
                    let total = ts |> Array.sumBy (fun t -> t.total)
                    let focus = isFocus ns
                    // Members are published for every namespace that matters or has any coverage;
                    // the rest are listed in the index only (all members missing).
                    let file =
                        if focus || covered > 0 then
                            let rel = $"{id}/{slugify ns}.json"
                            let path = Path.Combine(outDir, rel)
                            Directory.CreateDirectory(Path.GetDirectoryName path) |> ignore
                            let doc = { library = title; ``namespace`` = ns; websharper = wsVersion; types = ts }
                            File.WriteAllText(path, JsonSerializer.Serialize(doc, jsonOpts))
                            rel
                        else ""
                    { name = ns; focus = focus; covered = covered; total = total; file = file
                      types = ts |> Array.map (fun t -> { name = t.name; kind = t.kind; status = t.status; covered = t.covered; total = t.total }) })
            let fc = namespaces |> Array.filter (fun n -> n.focus)
            { id = id; name = title
              covered = namespaces |> Array.sumBy (fun n -> n.covered)
              total = namespaces |> Array.sumBy (fun n -> n.total)
              focusCovered = fc |> Array.sumBy (fun n -> n.covered)
              focusTotal = fc |> Array.sumBy (fun n -> n.total)
              namespaces = namespaces } |]

    let index =
        { websharper = wsVersion
          dotnet = Path.GetFileName(Path.GetDirectoryName(Path.GetDirectoryName(netRef.TrimEnd('/'))))
          fsharpCore = Path.GetFileName(Path.GetDirectoryName(Path.GetDirectoryName(Path.GetDirectoryName fsharpCore)))
          generated = DateTime.UtcNow.ToString "yyyy-MM-dd"
          statuses = "covered: a translation exists for this exact signature (via inline, direct, macro, interface, enum or System.Object); maybe: no member entry, but the type has a class-level macro; missing: no translation (WS9001 if used from client code)."
          libraries = summaries }
    File.WriteAllText(Path.Combine(outDir, "index.json"), JsonSerializer.Serialize(index, jsonOpts))

    for l in summaries do
        printfn "%-30s %6d/%-6d all   %6d/%-6d focus (%.1f%%)" l.name l.covered l.total l.focusCovered l.focusTotal
            (100.0 * float l.focusCovered / float (max 1 l.focusTotal))
    let files = Directory.GetFiles(outDir, "*.json", SearchOption.AllDirectories)
    printfn "wrote %d files, %.1f MB, to %s" files.Length (float (files |> Array.sumBy (fun f -> FileInfo(f).Length)) / 1048576.0) outDir
    0
