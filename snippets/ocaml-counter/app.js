(() => {
  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.Object.js
  var a = class {
    Equals(b2) {
      return this === b2;
    }
    GetHashCode() {
      return -1;
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.LazyExtensionsProxy.LazyRecord`1.js
  function New(a47, b2, c2) {
    return { c: a47, v: b2, f: c2 };
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/Microsoft.FSharp.Control.LazyExtensions.js
  function Create(b2) {
    return New(false, b2, forceLazy);
  }
  function forceLazy() {
    const b2 = this.v();
    this.c = true;
    this.v = b2;
    this.f = cachedLazy;
    return b2;
  }
  function cachedLazy() {
    return this.v;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.Enumerator.T`2.js
  var a2 = class extends a {
    s;
    c;
    n;
    d;
    e;
    Dispose() {
      if (this.d)
        this.d(this);
    }
    get Current() {
      return this.e === 1 ? this.c : this.e === 0 ? FailWith("Enumeration has not started. Call MoveNext.") : FailWith("Enumeration already finished.");
    }
    get Current0() {
      return this.Current;
    }
    MoveNext() {
      const d = this.n(this);
      this.e = d ? 1 : 2;
      return d;
    }
    constructor(d, e, f, g) {
      super();
      this.s = d;
      this.c = e;
      this.n = f;
      this.d = g;
      this.e = 0;
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.Core.JavaScript/Runtime.js
  function Create2(ctor, copyFrom) {
    return Object.assign(Object.create(ctor.prototype), copyFrom);
  }
  var forceSymbol = Symbol("force");
  function Force(obj) {
    obj[forceSymbol];
  }
  function Lazy(factory) {
    var instance;
    function getInstance() {
      if (!instance) {
        instance = factory((i) => instance = i);
      }
      return instance;
    }
    let res = new Proxy(function() {
    }, {
      get(_, key) {
        if (key == forceSymbol) {
          getInstance();
        }
        return getInstance()[key];
      },
      set(_, key, value) {
        getInstance()[key] = value;
        return true;
      },
      construct(_, args, newTarget) {
        return Reflect.construct(getInstance(), args, newTarget);
      }
    });
    return res;
  }
  function DeleteEmptyFields(obj, fields) {
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      if (obj[f] === void 0) {
        delete obj[f];
      }
    }
    return obj;
  }
  function GetOptional(value) {
    return value === void 0 ? null : { $: 1, $0: value };
  }
  function SetOptional(obj, field, value) {
    if (value) {
      obj[field] = value.$0;
    } else {
      delete obj[field];
    }
  }
  function MarkResizable(arr) {
    Object.defineProperty(arr, "resizable", { enumerable: false, writable: false, configurable: false, value: true });
    return arr;
  }
  var Runtime = globalThis.WebSharperRuntime || {
    ScriptBasePath: "./",
    ScriptSkipAssemblyDir: false
  };
  globalThis.WebSharperRuntime = Runtime;

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.IDisposable.js
  function isIDisposable(a47) {
    return "Dispose" in a47;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.Collections.Generic.Dictionary`2.KeyCollection.js
  var a3 = class extends a {
    d;
    GetEnumerator() {
      return Get(map((g) => g.K, this.d));
    }
    get IsReadOnly() {
      return true;
    }
    get Count() {
      return this.d.count;
    }
    Contains(g) {
      return this.d.ContainsKey(g);
    }
    CopyTo(g, h) {
      ArrayCopyTo(ofSeq(this), g, h);
    }
    constructor(g) {
      super();
      this.d = g;
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.Collections.Generic.Dictionary`2.ValueCollection.js
  var a4 = class extends a {
    d;
    GetEnumerator() {
      return Get(map((g) => g.V, this.d));
    }
    get IsReadOnly() {
      return true;
    }
    get Count() {
      return this.d.count;
    }
    Contains(g) {
      return this.d.ContainsValue(g);
    }
    CopyTo(g, h) {
      ArrayCopyTo(ofSeq(this), g, h);
    }
    constructor(g) {
      super();
      this.d = g;
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.JavaScript.JS.js
  function GetFieldValues(a47) {
    let b2 = [];
    let c2;
    for (var d in a47)
      b2.push(a47[d]);
    return b2;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.ArgumentException.js
  var a5 = class extends Error {
    constructor(b2, c2, d) {
      if (b2 == "New_1") {
        b2 = "New_2";
        c2 = "Value does not fall within the expected range.";
      }
      let e;
      let f;
      if (b2 == "New") {
        e = c2;
        f = d;
        b2 = "New_2";
        c2 = f + "\nParameter name: " + e;
      }
      if (b2 == "New_2") {
        const g = c2;
        super(g);
      }
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.Collections.Generic.KeyNotFoundException.js
  var a6 = class extends Error {
    constructor(b2, c2) {
      if (b2 == "New") {
        b2 = "New_1";
        c2 = "The given key was not present in the dictionary.";
      }
      if (b2 == "New_1") {
        const d = c2;
        super(d);
      }
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.Collections.DictionaryUtil.js
  function getHashCode(c2, d) {
    return c2.CGetHashCode(d);
  }
  function equals(c2) {
    return (d, e) => c2.CEquals(d, e);
  }
  function alreadyAdded() {
    throw new a5("New_2", "An item with the same key has already been added.");
  }
  function notPresent() {
    throw new a6("New");
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js
  function Some(a47) {
    return { $: 1, $0: a47 };
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.Collections.Generic.Dictionary`2.js
  var a7 = class extends a {
    equals;
    hash;
    count;
    data;
    get Keys() {
      return new a3(this);
    }
    get Values() {
      return new a4(this);
    }
    RemoveKey(A) {
      return this.remove(A);
    }
    GetEnumerator() {
      return Get0(concat(GetFieldValues(this.data)));
    }
    set_Item(A, B2) {
      this.set(A, B2);
    }
    Item(A) {
      return this.get(A);
    }
    DAdd(A, B2) {
      this.add(A, B2);
    }
    remove(A) {
      const B2 = this.hash(A);
      const C = this.data[B2];
      if (C == null)
        return false;
      else {
        const D = filter((E) => !this.equals.apply(null, [KeyValue(E)[0], A]), C);
        return length(D) < C.length && (this.count = this.count - 1, this.data[B2] = D, true);
      }
    }
    add(A, B2) {
      const C = this.hash(A);
      const D = this.data[C];
      if (D == null) {
        this.count = this.count + 1;
        this.data[C] = new Array({ K: A, V: B2 });
      } else {
        exists((E) => this.equals.apply(null, [KeyValue(E)[0], A]), D) ? alreadyAdded() : void 0;
        this.count = this.count + 1;
        D.push({ K: A, V: B2 });
      }
    }
    set(A, B2) {
      const C = this.hash(A);
      const D = this.data[C];
      if (D == null) {
        this.count = this.count + 1;
        this.data[C] = new Array({ K: A, V: B2 });
      } else {
        const E = tryFindIndex((F) => this.equals.apply(null, [KeyValue(F)[0], A]), D);
        if (E == null) {
          this.count = this.count + 1;
          D.push({ K: A, V: B2 });
        } else
          D[E.$0] = { K: A, V: B2 };
      }
    }
    get(A) {
      const B2 = this.data[this.hash(A)];
      return B2 == null ? notPresent() : pick((C) => {
        const D = KeyValue(C);
        return this.equals.apply(null, [D[0], A]) ? Some(D[1]) : null;
      }, B2);
    }
    TryGetValue(A, B2) {
      const C = this.data[this.hash(A)];
      if (C == null)
        return false;
      else {
        const D = tryPick((E) => {
          const F = KeyValue(E);
          return this.equals.apply(null, [F[0], A]) ? Some(F[1]) : null;
        }, C);
        return D != null && D.$ == 1 && (B2.set(D.$0), true);
      }
    }
    ContainsValue(A) {
      return exists2((B2) => Equals(KeyValue(B2)[1], A), this);
    }
    ContainsKey(A) {
      const B2 = this.data[this.hash(A)];
      return B2 == null ? false : exists((C) => this.equals.apply(null, [KeyValue(C)[0], A]), B2);
    }
    Clear() {
      this.data = [];
      this.count = 0;
    }
    get IsFixedSize() {
      return false;
    }
    Remove(A) {
      let B2;
      const C = (B2 = void 0, [this.TryGetValue(A.K, { get: () => B2, set: (D) => {
        B2 = D;
      } }), B2]);
      return C[0] && (Equals(C[1], A.V) && this.RemoveKey(A.K));
    }
    CopyTo(A, B2) {
      ArrayCopyTo(ofSeq(this), A, B2);
    }
    Contains(A) {
      let B2;
      const C = (B2 = void 0, [this.TryGetValue(A.K, { get: () => B2, set: (D) => {
        B2 = D;
      } }), B2]);
      return C[0] && Equals(C[1], A.V);
    }
    Add(A) {
      this.DAdd(A.K, A.V);
    }
    get Count() {
      return this.count;
    }
    get IsReadOnly() {
      return false;
    }
    constructor(A, B2, C, D) {
      let E;
      if (A == "New_4") {
        E = B2;
        A = "New_5";
      }
      let F;
      let G;
      if (A == "New_2") {
        F = B2;
        G = C;
        A = "New_3";
        B2 = G;
      }
      if (A == "New_5") {
        A = "New_6";
        B2 = [];
        C = Equals;
        D = Hash;
      }
      let H;
      if (A == "New_3") {
        H = B2;
        A = "New_6";
        B2 = [];
        C = equals(H);
        D = (R) => getHashCode(H, R);
      }
      let I;
      if (A == "New_1") {
        I = B2;
        A = "New_6";
        B2 = I;
        C = Equals;
        D = Hash;
      }
      let J;
      let K;
      if (A == "New") {
        J = B2;
        K = C;
        A = "New_6";
        B2 = J;
        C = equals(K);
        D = (R) => getHashCode(K, R);
      }
      if (A == "New_6") {
        const L = B2;
        const M = C;
        const N = D;
        super();
        this.equals = M;
        this.hash = N;
        this.count = 0;
        this.data = [];
        const O = Get(L);
        try {
          while (O.MoveNext()) {
            const P = O.Current;
            this.set(P.K, P.V);
          }
        } finally {
          const Q = O;
          if (typeof Q == "object" && isIDisposable(Q))
            O.Dispose();
        }
      }
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.Collections.HashSetUtil.js
  function concat2(a47) {
    let b2 = [];
    let c2;
    for (var d in a47)
      b2.push.apply(b2, a47[d]);
    return b2;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.Collections.Generic.HashSet`1.js
  var a8 = class _a extends a {
    equals;
    hash;
    data;
    count;
    GetEnumerator() {
      return Get(concat2(this.data));
    }
    get Count() {
      return this.count;
    }
    CopyTo(p, q) {
      const r = concat2(this.data);
      for (let s2 = 0, t = r.length - 1; s2 <= t; s2++)
        set(p, s2 + q, r[s2]);
    }
    SAdd(p) {
      return this.add(p);
    }
    add(p) {
      const q = this.hash(p);
      const r = this.data[q];
      return r == null ? (this.data[q] = [p], this.count = this.count + 1, true) : this.arrContains(p, r) ? false : (r.push(p), this.count = this.count + 1, true);
    }
    arrRemove(p, q) {
      let r, s2;
      r = true;
      s2 = 0;
      const t = q.length;
      while (r && s2 < t)
        if (this.equals.apply(null, [q[s2], p])) {
          q.splice(s2, 1);
          r = false;
        } else
          s2 = s2 + 1;
      return !r;
    }
    arrContains(p, q) {
      let r, s2;
      r = true;
      s2 = 0;
      const t = q.length;
      while (r && s2 < t)
        if (this.equals.apply(null, [q[s2], p]))
          r = false;
        else
          s2 = s2 + 1;
      return !r;
    }
    UnionWith(p) {
      const q = Get(p);
      try {
        while (q.MoveNext())
          this.SAdd(q.Current);
      } finally {
        const r = q;
        if (typeof r == "object" && isIDisposable(r))
          q.Dispose();
      }
    }
    SymmetricExceptWith(p) {
      const q = Get(p);
      try {
        while (q.MoveNext()) {
          const r = q.Current;
          if (this.Contains(r))
            this.Remove(r);
          else
            this.SAdd(r);
        }
      } finally {
        const s2 = q;
        if (typeof s2 == "object" && isIDisposable(s2))
          q.Dispose();
      }
    }
    SetEquals(p) {
      const q = new _a("New_4", p, this.equals, this.hash);
      return this.Count === q.Count && this.IsSupersetOf(q);
    }
    RemoveWhere(p) {
      let q;
      const r = concat2(this.data);
      q = 0;
      for (let t = 0, u = r.length - 1; t <= u; t++) {
        const s2 = r[t];
        if (p(s2))
          this.Remove(s2) ? q = q + 1 : void 0;
      }
      return q;
    }
    Remove(p) {
      const q = this.data[this.hash(p)];
      return q == null ? false : this.arrRemove(p, q) && (this.count = this.count - 1, true);
    }
    Overlaps(p) {
      return exists2((q) => this.Contains(q), p);
    }
    IsSupersetOf(p) {
      return forall((q) => this.Contains(q), p);
    }
    IsSubsetOf(p) {
      const q = new _a("New_4", p, this.equals, this.hash);
      return forall2((r) => q.Contains(r), concat2(this.data));
    }
    IsProperSupersetOf(p) {
      const q = ofSeq(p);
      return this.count > length(q) && this.IsSupersetOf(q);
    }
    IsProperSubsetOf(p) {
      const q = ofSeq(p);
      return this.count < length(q) && this.IsSubsetOf(q);
    }
    IntersectWith(p) {
      const q = new _a("New_4", p, this.equals, this.hash);
      const r = concat2(this.data);
      for (let t = 0, u = r.length - 1; t <= u; t++) {
        const s2 = r[t];
        if (!q.Contains(s2))
          this.Remove(s2);
      }
    }
    ExceptWith(p) {
      const q = Get(p);
      try {
        while (q.MoveNext())
          this.Remove(q.Current);
      } finally {
        const r = q;
        if (typeof r == "object" && isIDisposable(r))
          q.Dispose();
      }
    }
    CopyTo_1(p, q, r) {
      let s2;
      s2 = 0;
      const t = concat2(this.data);
      for (let u = 0, v = r - 1; u <= v; u++)
        set(p, u + q, t[u]);
    }
    Contains(p) {
      const q = this.data[this.hash(p)];
      return q == null ? false : this.arrContains(p, q);
    }
    Clear() {
      this.data = [];
      this.count = 0;
    }
    Add(p) {
      this.SAdd(p);
    }
    get IsReadOnly() {
      return false;
    }
    constructor(p, q, r, s2) {
      if (p == "New_3") {
        p = "New_4";
        q = [];
        r = Equals;
        s2 = Hash;
      }
      let t;
      if (p == "New_2") {
        t = q;
        p = "New_4";
        q = t;
        r = Equals;
        s2 = Hash;
      }
      let u;
      if (p == "New_1") {
        u = q;
        p = "New_4";
        q = [];
        r = equals(u);
        s2 = (C) => getHashCode(u, C);
      }
      let v;
      let w;
      if (p == "New") {
        v = q;
        w = r;
        p = "New_4";
        q = v;
        r = equals(w);
        s2 = (C) => getHashCode(w, C);
      }
      if (p == "New_4") {
        const x = q;
        const y = r;
        const z = s2;
        super();
        this.equals = y;
        this.hash = z;
        this.data = [];
        this.count = 0;
        const A = Get(x);
        try {
          while (A.MoveNext())
            this.add(A.Current);
        } finally {
          const B2 = A;
          if (typeof B2 == "object" && isIDisposable(B2))
            A.Dispose();
        }
      }
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.CollectionInternals.js
  function nonNegative() {
    return FailWith("The input must be non-negative.");
  }
  function insufficient() {
    return FailWith("The input sequence has an insufficient number of elements.");
  }
  function skip(s2, t) {
    let u;
    u = t;
    for (let v = 1, w = s2; v <= w; v++)
      if (u.$ == 0)
        FailWith("Input list too short.");
      else
        u = u.$1;
    return u;
  }
  function arrContains(s2, t) {
    let u, v;
    u = true;
    v = 0;
    const w = length(t);
    while (u && v < w)
      if (Equals(t[v], s2))
        u = false;
      else
        v = v + 1;
    return !u;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js
  function tryPick(B2, C) {
    let D, E;
    D = null;
    E = 0;
    while (E < C.length && D == null) {
      const F = B2(C[E]);
      if (F != null && F.$ == 1)
        D = F;
      E = E + 1;
    }
    return D;
  }
  function tryFindIndex(B2, C) {
    let D, E;
    D = null;
    E = 0;
    while (E < C.length && D == null) {
      B2(C[E]) ? D = Some(E) : void 0;
      E = E + 1;
    }
    return D;
  }
  function pick(B2, C) {
    const D = tryPick(B2, C);
    return D == null ? FailWith("KeyNotFoundException") : D.$0;
  }
  function ofSeq(B2) {
    if (B2 instanceof Array)
      return B2.slice();
    else if (B2 instanceof a9)
      return ofList(B2);
    else {
      const C = [];
      const D = Get(B2);
      try {
        while (D.MoveNext())
          C.push(D.Current);
        return C;
      } finally {
        const E = D;
        if (typeof E == "object" && isIDisposable(E))
          D.Dispose();
      }
    }
  }
  function ofList(B2) {
    let C;
    const D = [];
    C = B2;
    while (!(C.$ == 0)) {
      D.push(head(C));
      C = tail(C);
    }
    return D;
  }
  function map2(B2, C) {
    const D = new Array(C.length);
    for (let E = 0, F = C.length - 1; E <= F; E++)
      D[E] = B2(C[E]);
    return D;
  }
  function iter(B2, C) {
    for (let D = 0, E = C.length - 1; D <= E; D++)
      B2(C[D]);
  }
  function init(B2, C) {
    if (B2 < 0)
      FailWith("Negative size given.");
    else
      null;
    const D = new Array(B2);
    for (let E = 0, F = B2 - 1; E <= F; E++)
      D[E] = C(E);
    return D;
  }
  function forall2(B2, C) {
    let D, E;
    D = true;
    E = 0;
    const F = length(C);
    while (D && E < F)
      if (B2(C[E]))
        E = E + 1;
      else
        D = false;
    return D;
  }
  function foldBack(B2, C, D) {
    let E;
    E = D;
    const F = C.length;
    for (let G = 1, H = F; G <= H; G++)
      E = B2(C[F - G], E);
    return E;
  }
  function filter(B2, C) {
    const D = [];
    for (let E = 0, F = C.length - 1; E <= F; E++)
      if (B2(C[E]))
        D.push(C[E]);
    return D;
  }
  function exists(B2, C) {
    let D, E;
    D = false;
    E = 0;
    const F = length(C);
    while (!D && E < F)
      if (B2(C[E]))
        D = true;
      else
        E = E + 1;
    return D;
  }
  function create(B2, C) {
    const D = new Array(B2);
    for (let E = 0, F = B2 - 1; E <= F; E++)
      D[E] = C;
    return D;
  }
  function concat(B2) {
    return Array.prototype.concat.apply([], ofSeq(B2));
  }
  function choose(B2, C) {
    const D = [];
    for (let F = 0, G = C.length - 1; F <= G; F++) {
      const E = B2(C[F]);
      if (E == null) {
      } else
        D.push(E.$0);
    }
    return D;
  }
  function blit(B2, C, D, E, F) {
    checkRange(B2, C, F);
    checkRange(D, E, F);
    for (let G = 0, H = F - 1; G <= H; G++)
      D[E + G] = B2[C + G];
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js
  function append(Z, u0030) {
    let u0031, u0032, u0033;
    if (Z.$ == 0)
      return u0030;
    else if (u0030.$ == 0)
      return Z;
    else {
      const u0034 = Create2(a9, { $: 1 });
      u0031 = u0034;
      u0032 = Z;
      u0033 = true;
      while (u0033) {
        u0031.$0 = u0032.$0;
        u0032 = u0032.$1;
        if (u0032.$ == 0)
          u0033 = false;
        else {
          const u0035 = Create2(a9, { $: 1 });
          u0031 = (u0031.$1 = u0035, u0035);
        }
      }
      u0031.$1 = u0030;
      return u0034;
    }
  }
  function exists3(Z, u0030) {
    let u0031, u0032;
    u0031 = false;
    u0032 = u0030;
    while (!u0031 && u0032.$ == 1) {
      u0031 = Z(u0032.$0);
      u0032 = u0032.$1;
    }
    return u0031;
  }
  function filter2(Z, u0030) {
    let u0031, u0032, u0033, u0034;
    if (u0030.$ == 0)
      return u0030;
    else {
      u0031 = a9.Empty;
      u0032 = u0031;
      u0033 = u0030;
      u0034 = true;
      while (u0034) {
        let u0035, u0036;
        if (Z(u0033.$0)) {
          if (u0031.$ == 0)
            u0035 = (u0031 = Create2(a9, { $: 1 }), u0032 = u0031);
          else {
            const u0037 = Create2(a9, { $: 1 });
            u0035 = u0032 = (u0032.$1 = u0037, u0037);
          }
          const u0038 = u0033.$0;
          u0036 = (u0032.$ = 1, u0032.$0 = u0038);
        } else
          u0036 = void 0;
        u0033 = u0033.$1;
        if (u0033.$ == 0)
          u0034 = false;
      }
      if (!(u0031.$ == 0))
        u0032.$1 = a9.Empty;
      return u0031;
    }
  }
  function head(Z) {
    return Z.$ == 1 ? Z.$0 : listEmpty();
  }
  function length2(Z) {
    let u0030, u0031;
    u0030 = Z;
    u0031 = 0;
    while (u0030.$ == 1) {
      u0030 = tail(u0030);
      u0031 = u0031 + 1;
    }
    return u0031;
  }
  function map3(Z, u0030) {
    let u0031, u0032, u0033;
    if (u0030.$ == 0)
      return u0030;
    else {
      const u0034 = Create2(a9, { $: 1 });
      u0031 = u0034;
      u0032 = u0030;
      u0033 = true;
      while (u0033) {
        u0031.$0 = Z(u0032.$0);
        u0032 = u0032.$1;
        if (u0032.$ == 0)
          u0033 = false;
        else {
          const u0035 = Create2(a9, { $: 1 });
          u0031 = (u0031.$1 = u0035, u0035);
        }
      }
      u0031.$1 = a9.Empty;
      return u0034;
    }
  }
  function mapi(Z, u0030) {
    let u0031, u0032, u0033, u0034;
    if (u0030.$ == 0)
      return u0030;
    else {
      const u0035 = Create2(a9, { $: 1 });
      u0031 = u0035;
      u0032 = u0030;
      u0033 = 0;
      u0034 = true;
      while (u0034) {
        u0031.$0 = Z(u0033, u0032.$0);
        u0032 = u0032.$1;
        if (u0032.$ == 0)
          u0034 = false;
        else {
          const u0036 = Create2(a9, { $: 1 });
          u0031 = (u0031.$1 = u0036, u0036);
          u0033 = u0033 + 1;
        }
      }
      u0031.$1 = a9.Empty;
      return u0035;
    }
  }
  function ofArray(Z) {
    let u0030;
    u0030 = a9.Empty;
    for (let u0031 = length(Z) - 1, u0032 = 0; u0031 >= u0032; u0031--)
      u0030 = a9.Cons(get(Z, u0031), u0030);
    return u0030;
  }
  function ofSeq2(Z) {
    if (Z instanceof a9)
      return Z;
    else if (Z instanceof Array)
      return ofArray(Z);
    else {
      const u0030 = Get(Z);
      try {
        let u0031, u0032;
        u0031 = u0030.MoveNext();
        if (!u0031)
          return a9.Empty;
        else {
          const u0033 = Create2(a9, { $: 1 });
          u0032 = u0033;
          while (u0031) {
            u0032.$0 = u0030.Current;
            if (u0030.MoveNext()) {
              const u0034 = Create2(a9, { $: 1 });
              u0032 = (u0032.$1 = u0034, u0034);
            } else
              u0031 = false;
          }
          u0032.$1 = a9.Empty;
          return u0033;
        }
      } finally {
        const u0035 = u0030;
        if (typeof u0035 == "object" && isIDisposable(u0035))
          u0030.Dispose();
      }
    }
  }
  function tail(Z) {
    return Z.$ == 1 ? Z.$1 : listEmpty();
  }
  function contains(Z, u0030) {
    let u0031, u0032;
    u0031 = false;
    u0032 = u0030;
    while (!u0031 && u0032.$ == 1) {
      u0031 = Equals(Z, u0032.$0);
      u0032 = u0032.$1;
    }
    return u0031;
  }
  function listEmpty() {
    return FailWith("The input list was empty.");
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1.js
  var a9 = class _a {
    static Empty = Create2(_a, { $: 0 });
    static Cons(i, j) {
      return Create2(_a, { $: 1, $0: i, $1: j });
    }
    GetSlice(i, j) {
      try {
        if (i != null && i.$ == 1) {
          if (j != null && j.$ == 1) {
            const k = i.$0;
            const l = j.$0;
            return l < 0 ? _a.Empty : ofSeq2(take(l - k + 1, skip(k, this)));
          } else
            return skip(i.$0, this);
        } else if (j != null && j.$ == 1) {
          const m = j.$0;
          return m < 0 ? _a.Empty : ofSeq2(take(m + 1, this));
        } else
          return this;
      } catch (n) {
        return _a.Empty;
      }
    }
    get_Item(i) {
      return nth(i, this);
    }
    get Length() {
      return length2(this);
    }
    GetEnumerator() {
      return new a2(this, null, (i) => {
        const j = i.s;
        if (j.$ == 0)
          return false;
        else {
          const k = j.$1;
          i.c = j.$0;
          i.s = k;
          return true;
        }
      }, void 0);
    }
    $;
    $0;
    $1;
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js
  function append2(K, L) {
    return { GetEnumerator: () => {
      const M = Get(K);
      const N = [true];
      return new a2(M, null, (O) => {
        if (O.s.MoveNext()) {
          O.c = O.s.Current;
          return true;
        } else {
          const P = O.s;
          if (!Equals(P, null))
            P.Dispose();
          else
            null;
          O.s = null;
          return N[0] && (N[0] = false, O.s = Get(L), O.s.MoveNext() ? (O.c = O.s.Current, true) : (O.s.Dispose(), O.s = null, false));
        }
      }, (O) => {
        const P = O.s;
        if (!Equals(P, null))
          P.Dispose();
      });
    } };
  }
  function collect(K, L) {
    return concat3(map(K, L));
  }
  function concat3(K) {
    return { GetEnumerator: () => {
      const L = Get(K);
      function M(N) {
        while (true) {
          const O = N.s;
          if (Equals(O, null)) {
            if (L.MoveNext()) {
              N.s = Get(L.Current);
              N = N;
            } else {
              L.Dispose();
              return false;
            }
          } else if (O.MoveNext()) {
            N.c = O.Current;
            return true;
          } else {
            N.Dispose();
            N.s = null;
            N = N;
          }
        }
      }
      return new a2(null, null, M, (N) => {
        const O = N.s;
        if (!Equals(O, null))
          O.Dispose();
        const P = L;
        if (!Equals(P, null))
          P.Dispose();
      });
    } };
  }
  function delay(K) {
    return { GetEnumerator: () => Get(K()) };
  }
  function exists2(K, L) {
    const M = Get(L);
    try {
      let N;
      N = false;
      while (!N && M.MoveNext())
        N = K(M.Current);
      return N;
    } finally {
      const O = M;
      if (typeof O == "object" && isIDisposable(O))
        M.Dispose();
    }
  }
  function find(K, L) {
    const M = tryFind(K, L);
    return M == null ? FailWith("KeyNotFoundException") : M.$0;
  }
  function findIndex(K, L) {
    const M = tryFindIndex2(K, L);
    return M == null ? FailWith("KeyNotFoundException") : M.$0;
  }
  function forall(K, L) {
    return !exists2((M) => !K(M), L);
  }
  function init2(K, L) {
    return take(K, initInfinite(L));
  }
  function initInfinite(K) {
    return { GetEnumerator: () => new a2(0, null, (L) => {
      L.c = K(L.s);
      L.s = L.s + 1;
      return true;
    }, void 0) };
  }
  function iter2(K, L) {
    const M = Get(L);
    try {
      while (M.MoveNext())
        K(M.Current);
    } finally {
      const N = M;
      if (typeof N == "object" && isIDisposable(N))
        M.Dispose();
    }
  }
  function map(K, L) {
    return { GetEnumerator: () => {
      const M = Get(L);
      return new a2(null, null, (N) => M.MoveNext() && (N.c = K(M.Current), true), () => {
        M.Dispose();
      });
    } };
  }
  function mapi2(K, L) {
    return map22(K, initInfinite((M) => M), L);
  }
  function map22(K, L, M) {
    return { GetEnumerator: () => {
      const N = Get(L);
      const O = Get(M);
      return new a2(null, null, (P) => N.MoveNext() && O.MoveNext() && (P.c = K(N.Current, O.Current), true), () => {
        N.Dispose();
        O.Dispose();
      });
    } };
  }
  function max(K) {
    const L = Get(K);
    try {
      let M;
      if (!L.MoveNext())
        seqEmpty();
      else
        null;
      M = L.Current;
      while (L.MoveNext()) {
        const N = L.Current;
        if (Compare(N, M) === 1)
          M = N;
      }
      return M;
    } finally {
      const O = L;
      if (typeof O == "object" && isIDisposable(O))
        L.Dispose();
    }
  }
  function nth(K, L) {
    let M;
    if (K < 0)
      FailWith("negative index requested");
    else
      null;
    M = -1;
    const N = Get(L);
    try {
      while (M < K) {
        !N.MoveNext() ? insufficient() : void 0;
        M = M + 1;
      }
      return N.Current;
    } finally {
      const O = N;
      if (typeof O == "object" && isIDisposable(O))
        N.Dispose();
    }
  }
  function take(K, L) {
    K < 0 ? nonNegative() : void 0;
    return { GetEnumerator: () => {
      const M = [Get(L)];
      return new a2(0, null, (N) => {
        N.s = N.s + 1;
        if (N.s > K)
          return false;
        else {
          const O = M[0];
          return Equals(O, null) ? insufficient() : O.MoveNext() ? (N.c = O.Current, N.s === K ? (O.Dispose(), M[0] = null) : void 0, true) : (O.Dispose(), M[0] = null, insufficient());
        }
      }, () => {
        const N = M[0];
        if (!Equals(N, null))
          N.Dispose();
      });
    } };
  }
  function tryFind(K, L) {
    const M = Get(L);
    try {
      let N;
      N = null;
      while (N == null && M.MoveNext()) {
        const O = M.Current;
        if (K(O))
          N = Some(O);
      }
      return N;
    } finally {
      const P = M;
      if (typeof P == "object" && isIDisposable(P))
        M.Dispose();
    }
  }
  function tryFindIndex2(K, L) {
    const M = Get(L);
    try {
      let N, O;
      N = true;
      O = 0;
      while (N && M.MoveNext())
        if (K(M.Current))
          N = false;
        else
          O = O + 1;
      return N ? null : Some(O);
    } finally {
      const P = M;
      if (typeof P == "object" && isIDisposable(P))
        M.Dispose();
    }
  }
  function seqEmpty() {
    return FailWith("The input sequence was empty.");
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js
  function range(f, g) {
    const h = 1 + g - f;
    return h <= 0 ? [] : init2(h, (i) => i + f);
  }
  function KeyValue(f) {
    return [f.K, f.V];
  }
  function FailWith(f) {
    throw new Error(f);
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js
  function Hash(d) {
    const e = typeof d;
    return e == "function" ? 0 : e == "boolean" ? d ? 1 : 0 : e == "number" ? d : e == "string" ? hashString(d) : e == "object" ? d == null ? 0 : d instanceof Array ? hashArray(d) : hashObject(d) : e == "bigint" ? hashString(String(d)) : e == "symbol" ? hashString(d.description) : 0;
  }
  function hashObject(d) {
    if ("GetHashCode" in d)
      return d.GetHashCode();
    else {
      const e = hashMix;
      const f = [0];
      let g;
      for (var h in d)
        if (((i) => {
          f[0] = e(e(f[0], hashString(i)), Hash(d[i]));
          return false;
        })(h))
          break;
      return f[0];
    }
  }
  function hashString(d) {
    let e;
    if (d === null)
      return 0;
    else {
      e = 5381;
      for (let f = 0, g = d.length - 1; f <= g; f++)
        e = hashMix(e, d[f].charCodeAt());
      return e;
    }
  }
  function hashArray(d) {
    let e;
    e = -34948909;
    for (let f = 0, g = length(d) - 1; f <= g; f++)
      e = hashMix(e, Hash(get(d, f)));
    return e;
  }
  function hashMix(d, e) {
    return (d << 5) + d + e;
  }
  function Equals(d, e) {
    let f;
    if (d === e)
      return true;
    else {
      const g = typeof d;
      if (g == "object") {
        if (d === null || d === void 0 || e === null || e === void 0 || !Equals(typeof e, "object"))
          return false;
        else if ("Equals" in d)
          return d.Equals(e);
        else if ("Equals" in e)
          return false;
        else if (d instanceof Array && e instanceof Array)
          return arrayEquals(d, e);
        else if (d instanceof Date && e instanceof Date)
          return dateEquals(d, e);
        else {
          const h = d;
          const i = e;
          const j = [true];
          let k;
          for (var m in h)
            if (((n2) => {
              j[0] = !h.hasOwnProperty(n2) || i.hasOwnProperty(n2) && Equals(h[n2], i[n2]);
              return !j[0];
            })(m))
              break;
          if (j[0]) {
            let l;
            for (var n in i)
              if (((o) => {
                j[0] = !i.hasOwnProperty(o) || h.hasOwnProperty(o);
                return !j[0];
              })(n))
                break;
            f = void 0;
          } else
            f = null;
          return j[0];
        }
      } else
        return g == "function" && ("$Func" in d ? d.$Func === e.$Func && d.$Target === e.$Target : "$Invokes" in d && "$Invokes" in e && arrayEquals(d.$Invokes, e.$Invokes));
    }
  }
  function dateEquals(d, e) {
    return d.getTime() === e.getTime();
  }
  function arrayEquals(d, e) {
    let f, g;
    if (length(d) === length(e)) {
      f = true;
      g = 0;
      while (f && g < length(d)) {
        !Equals(get(d, g), get(e, g)) ? f = false : void 0;
        g = g + 1;
      }
      return f;
    } else
      return false;
  }
  function Compare(d, e) {
    if (d === e)
      return 0;
    else {
      const f = typeof d;
      switch (f == "boolean" ? 1 : f == "number" ? 1 : f == "bigint" ? 1 : f == "string" ? 1 : f == "object" ? 2 : f == "function" ? 3 : f == "symbol" ? 4 : 0) {
        case 0:
          return typeof e == "undefined" ? 0 : -1;
        case 1:
          return d < e ? -1 : 1;
        case 2:
          let g;
          if (d === null)
            return -1;
          else if (e === null)
            return 1;
          else if ("CompareTo" in d)
            return d.CompareTo(e);
          else if ("CompareTo0" in d)
            return d.CompareTo0(e);
          else if (d instanceof Array && e instanceof Array)
            return compareArrays(d, e);
          else if (d instanceof Date && e instanceof Date)
            return compareDates(d, e);
          else {
            const h = d;
            const i = e;
            const j = [0];
            let k;
            for (var m in h)
              if (((n2) => !h.hasOwnProperty(n2) ? false : !i.hasOwnProperty(n2) ? (j[0] = 1, true) : (j[0] = Compare(h[n2], i[n2]), j[0] !== 0))(m))
                break;
            if (j[0] === 0) {
              let l;
              for (var n in i)
                if (((o) => !i.hasOwnProperty(o) ? false : !h.hasOwnProperty(o) && (j[0] = -1, true))(n))
                  break;
              g = void 0;
            } else
              g = null;
            return j[0];
          }
          break;
        case 3:
          return FailWith("Cannot compare function values.");
        case 4:
          return FailWith("Cannot compare symbol values.");
      }
    }
  }
  function compareDates(d, e) {
    return Compare(d.getTime(), e.getTime());
  }
  function compareArrays(d, e) {
    let f, g;
    if (length(d) < length(e))
      return -1;
    else if (length(d) > length(e))
      return 1;
    else {
      f = 0;
      g = 0;
      while (f === 0 && g < length(d)) {
        f = Compare(get(d, g), get(e, g));
        g = g + 1;
      }
      return f;
    }
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js
  function length(g) {
    return g.dims === 2 ? g.length * g.length : g.length;
  }
  function get(g, h) {
    checkBounds(g, h);
    return g[h];
  }
  function set(g, h, i) {
    checkBounds(g, h);
    g[h] = i;
  }
  function checkRange(g, h, i) {
    if (i < 0 || h < 0 || g.length < h + i)
      FailWith("Index was outside the bounds of the array.");
  }
  function checkBounds(g, h) {
    if (h < 0 || h >= g.length)
      FailWith("Index was outside the bounds of the array.");
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.Enumerator.js
  function ArrayCopyTo(k, l, m) {
    let n;
    if (length(k) + m < length(l))
      throw new a5("New_2", "array");
    else
      n = void 0;
    blit(k, 0, l, m, length(k));
  }
  function Get0(k) {
    return k instanceof Array ? ArrayEnumerator(k) : Equals(typeof k, "string") ? StringEnumerator(k) : "GetEnumerator0" in k ? k.GetEnumerator0() : k.GetEnumerator();
  }
  function Get(k) {
    return k instanceof Array ? ArrayEnumerator(k) : Equals(typeof k, "string") ? StringEnumerator(k) : k.GetEnumerator();
  }
  function StringEnumerator(k) {
    return new a2(0, null, (l) => {
      const m = l.s;
      return m < k.length && (l.c = k[m], l.s = m + 1, true);
    }, void 0);
  }
  function ArrayEnumerator(k) {
    return new a2(0, null, (l) => {
      const m = l.s;
      return m < length(k) && (l.c = get(k, m), l.s = m + 1, true);
    }, void 0);
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.Concurrency.AsyncBody`1.js
  function New2(a47, b2) {
    return { k: a47, ct: b2 };
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.Concurrency.Result`1.js
  function Cc(a47) {
    return { $: 2, $0: a47 };
  }
  function No(a47) {
    return { $: 1, $0: a47 };
  }
  function Ok(a47) {
    return { $: 0, $0: a47 };
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.AggregateException.js
  var a14 = class extends Error {
    innerExceptions;
    constructor(c2, d, e) {
      let f;
      if (c2 == "New_3") {
        f = d;
        c2 = "New_4";
        d = "One or more errors occurred.";
        e = f;
      }
      let g;
      if (c2 == "New_2") {
        g = d;
        c2 = "New_4";
        d = "One or more errors occurred.";
        e = ofSeq(g);
      }
      let h;
      let i;
      if (c2 == "New_1") {
        h = d;
        i = e;
        c2 = "New_4";
        d = h;
        e = ofSeq(i);
      }
      let j;
      let k;
      if (c2 == "New") {
        j = d;
        k = e;
        c2 = "New_4";
        d = j;
        e = [k];
      }
      if (c2 == "New_4") {
        const l = d;
        const m = e;
        super(l);
        this.innerExceptions = m;
      }
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.OperationCanceledException.js
  var a15 = class extends Error {
    ct;
    constructor(b2, c2, d, e) {
      let f;
      if (b2 == "New") {
        f = c2;
        b2 = "New_1";
        c2 = "The operation was canceled.";
        d = null;
        e = f;
      }
      if (b2 == "New_1") {
        const g = c2;
        const h = d;
        const i = e;
        super(g);
        this.inner = h;
        this.ct = i;
      }
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.Concurrency.CT.js
  function New3(a47, b2) {
    return { c: a47, r: b2 };
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.Concurrency.Scheduler.js
  var a20 = class extends a {
    idle;
    robin;
    tick() {
      let c2;
      const d = Date.now();
      c2 = true;
      while (c2)
        if (this.robin.length === 0) {
          this.idle = true;
          c2 = false;
        } else {
          this.robin.shift()();
          Date.now() - d > 40 ? (setTimeout(() => {
            this.tick();
          }, 0), c2 = false) : void 0;
        }
    }
    Fork(c2) {
      this.robin.push(c2);
      this.idle ? (this.idle = false, setTimeout(() => {
        this.tick();
      }, 0)) : void 0;
    }
    constructor() {
      super();
      this.idle = true;
      this.robin = [];
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.Threading.CancellationTokenSource.js
  var a21 = class _a extends a {
    init;
    c;
    pending;
    r;
    static CreateLinkedTokenSource(i, j) {
      return _a.CreateLinkedTokenSource_1([i, j]);
    }
    static CreateLinkedTokenSource_1(i) {
      const j = new _a();
      iter((k) => {
        Register(k, () => {
          j.Cancel_1();
        });
      }, i);
      return j;
    }
    CancelAfter(i) {
      if (!this.c) {
        const j = this.pending;
        if (j == null) {
        } else
          clearTimeout(j.$0);
        this.pending = Some(setTimeout(() => {
          this.Cancel_1();
        }, i));
      }
    }
    Cancel(i) {
      if (!i)
        this.Cancel_1();
      else if (!this.c) {
        this.c = true;
        iter((j) => {
          j();
        }, this.r);
      }
    }
    Cancel_1() {
      if (!this.c) {
        this.c = true;
        const i = choose((j) => {
          try {
            j();
            return null;
          } catch (k) {
            return Some(k);
          }
        }, this.r);
        if (length(i) > 0)
          throw new a14("New_3", i);
        else
          ;
      }
    }
    constructor() {
      super();
      this.c = false;
      this.pending = null;
      this.r = [];
      this.init = 1;
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/$StartupCode_Concurrency.js
  var a22 = Lazy((h) => class i {
    static {
      a22 = h(this);
    }
    static GetCT;
    static Zero;
    static defCTS;
    static scheduler;
    static noneCT;
    static {
      this.noneCT = New3(false, []);
      this.scheduler = new a20();
      this.defCTS = [new a21()];
      this.Zero = Return();
      this.GetCT = (j) => {
        j.k(Ok(j.ct));
      };
    }
  });
  var StartupCode_Concurrency_default = a22;

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.Concurrency.js
  function Start(u, v) {
    const w = defCTS()[0];
    const x = v == null ? w : v.$0;
    scheduler().Fork(() => {
      if (!x.c)
        u(New2((y) => {
          if (y.$ == 1)
            UncaughtAsyncError(y.$0);
        }, x));
    });
  }
  function UncaughtAsyncError(u) {
    console.log("WebSharper: Uncaught asynchronous exception", u);
  }
  function StartWithContinuations(u, v, w, x, y) {
    const z = defCTS()[0];
    const A = y == null ? z : y.$0;
    if (!A.c)
      u(New2((B2) => {
        if (B2.$ == 1)
          w(B2.$0);
        else if (B2.$ == 2)
          x(B2.$0);
        else
          v(B2.$0);
      }, A));
  }
  function FromContinuations(u) {
    return (v) => {
      const w = [false];
      const x = (y) => {
        if (w[0])
          FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
        else {
          w[0] = true;
          scheduler().Fork(y);
        }
      };
      u((y) => {
        x(() => {
          v.k(Ok(y));
        });
      }, (y) => {
        x(() => {
          v.k(No(y));
        });
      }, (y) => {
        x(() => {
          v.k(Cc(y));
        });
      });
    };
  }
  function Delay(u) {
    return (v) => {
      try {
        u(null, v);
      } catch (w) {
        v.k(No(w));
      }
    };
  }
  function Bind(u, v) {
    return checkCancel((w) => {
      u(New2((x) => {
        if (x.$ == 0) {
          const y = x.$0;
          scheduler().Fork(() => {
            try {
              v(y, w);
            } catch (z) {
              w.k(No(z));
            }
          });
        } else
          scheduler().Fork(() => {
            w.k(x);
          });
      }, w.ct));
    });
  }
  function Zero() {
    return StartupCode_Concurrency_default.Zero;
  }
  function Return(u) {
    return (v) => {
      v.k(Ok(u));
    };
  }
  function checkCancel(u) {
    return (v) => {
      if (v.ct.c)
        cancel(v);
      else
        u(v);
    };
  }
  function cancel(u) {
    u.k(Cc(new a15("New", u.ct)));
  }
  function defCTS() {
    return StartupCode_Concurrency_default.defCTS;
  }
  function scheduler() {
    return StartupCode_Concurrency_default.scheduler;
  }
  function Register(u, v) {
    if (u === noneCT())
      return { Dispose() {
        return null;
      } };
    else {
      const w = u.r.push(v) - 1;
      return { Dispose() {
        return set(u.r, w, () => {
        });
      } };
    }
  }
  function noneCT() {
    return StartupCode_Concurrency_default.noneCT;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.SnapState`1.js
  function Waiting(a47, b2) {
    return { $: 3, $0: a47, $1: b2 };
  }
  function Ready(a47, b2) {
    return { $: 2, $0: a47, $1: b2 };
  }
  function Forever(a47) {
    return { $: 0, $0: a47 };
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Abbrev.Async.js
  function OnError(b2) {
    return console.log("WebSharper UI: Uncaught asynchronous exception", b2);
  }
  function StartTo(b2, c2) {
    StartWithContinuations(b2, c2, (d) => {
      OnError(d);
    }, () => {
    }, null);
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Snap`1.js
  function Obsolete(c2) {
    let d;
    const e = c2.s;
    if (e == null || (e != null && e.$ == 2 ? (d = e.$1, false) : e != null && e.$ == 3 ? (d = e.$1, false) : true))
      ;
    else {
      c2.s = null;
      for (let g = 0, h = length(d) - 1; g <= h; g++) {
        const f = get(d, g);
        if (typeof f == "object")
          ((i) => {
            Obsolete(i);
          })(f);
        else
          f();
      }
    }
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.QueueProxy.js
  function Clear(e) {
    e.splice(0, length(e));
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Snap.js
  function MapAsync(o, p) {
    const q = { s: Waiting([], []) };
    When(p, (r) => {
      StartTo(o(r), (s2) => {
        MarkDone(q, p, s2);
      });
    }, q);
    return q;
  }
  function Map2Unit(o, p) {
    const q = o.s;
    const r = p.s;
    if (q != null && q.$ == 0)
      return r != null && r.$ == 0 ? { s: Forever(null) } : p;
    else if (r != null && r.$ == 0)
      return o;
    else {
      const s2 = { s: Waiting([], []) };
      const t = () => {
        const u = s2.s;
        if (!(u != null && u.$ == 0 || u != null && u.$ == 2)) {
          const v = ValueAndForever(o);
          const w = ValueAndForever(p);
          if (v != null && v.$ == 1) {
            if (w != null && w.$ == 1)
              if (v.$0[1] && w.$0[1])
                MarkForever(s2, null);
              else
                MarkReady(s2, null);
          }
        }
      };
      When(o, t, s2);
      When(p, t, s2);
      return s2;
    }
  }
  function Copy(o) {
    const p = o.s;
    if (p == null)
      return o;
    else if (p != null && p.$ == 2) {
      const q = { s: Ready(p.$0, []) };
      WhenObsolete(o, q);
      return q;
    } else if (p != null && p.$ == 3) {
      const r = { s: Waiting([], []) };
      When(o, (s2) => {
        MarkDone(r, o, s2);
      }, r);
      return r;
    } else
      return o;
  }
  function Map(o, p) {
    const q = p.s;
    if (q != null && q.$ == 0)
      return { s: Forever(o(q.$0)) };
    else {
      const r = { s: Waiting([], []) };
      When(p, (s2) => {
        MarkDone(r, p, o(s2));
      }, r);
      return r;
    }
  }
  function JoinInner(o) {
    const p = { s: Waiting([], []) };
    When(o, (q) => {
      const r = q();
      When(r, (s2) => {
        let t;
        const u = r.s;
        if (u != null && u.$ == 0) {
          const v = o.s;
          t = v != null && v.$ == 0;
        } else
          t = false;
        if (t)
          MarkForever(p, s2);
        else
          MarkReady(p, s2);
      }, p);
      WhenObsolete(o, r);
    }, p);
    return p;
  }
  function Join(o) {
    const p = { s: Waiting([], []) };
    When(o, (q) => {
      const r = q();
      When(r, (s2) => {
        let t;
        const u = r.s;
        if (u != null && u.$ == 0) {
          const v = o.s;
          t = v != null && v.$ == 0;
        } else
          t = false;
        if (t)
          MarkForever(p, s2);
        else
          MarkReady(p, s2);
      }, p);
    }, p);
    return p;
  }
  function ValueAndForever(o) {
    const p = o.s;
    return p != null && p.$ == 0 ? Some([p.$0, true]) : p != null && p.$ == 2 ? Some([p.$0, false]) : null;
  }
  function WhenObsoleteRun(o, p) {
    const q = o.s;
    if (q == null)
      p();
    else
      q != null && q.$ == 2 ? (q.$0, q.$1.push(p)) : q != null && q.$ == 3 ? (q.$0, q.$1.push(p)) : q.$0;
  }
  function WhenObsolete(o, p) {
    const q = o.s;
    if (q == null)
      Obsolete(p);
    else
      q != null && q.$ == 2 ? (q.$0, EnqueueSafe(q.$1, p)) : q != null && q.$ == 3 ? (q.$0, EnqueueSafe(q.$1, p)) : q.$0;
  }
  function WhenRun(o, p, q) {
    const r = o.s;
    if (r == null)
      q();
    else if (r != null && r.$ == 2) {
      const s2 = r.$0;
      r.$1.push(q);
      p(s2);
    } else if (r != null && r.$ == 3) {
      const t = r.$1;
      r.$0.push(p);
      t.push(q);
    } else
      p(r.$0);
  }
  function When(o, p, q) {
    const r = o.s;
    if (r == null)
      Obsolete(q);
    else if (r != null && r.$ == 2) {
      const s2 = r.$0;
      EnqueueSafe(r.$1, q);
      p(s2);
    } else if (r != null && r.$ == 3) {
      const t = r.$1;
      r.$0.push(p);
      EnqueueSafe(t, q);
    } else
      p(r.$0);
  }
  function EnqueueSafe(o, p) {
    o.push(p);
    if (o.length % 20 === 0) {
      const q = o.slice(0);
      Clear(o);
      for (let s2 = 0, t = length(q) - 1; s2 <= t; s2++) {
        const r = get(q, s2);
        if (typeof r == "object")
          ((u) => {
            if (u.s)
              o.push(u);
          })(r);
        else
          ((u) => {
            o.push(u);
          })(r);
      }
    } else
      ;
  }
  function MarkDone(o, p, q) {
    const r = p.s;
    if (r != null && r.$ == 0)
      MarkForever(o, q);
    else
      MarkReady(o, q);
  }
  function MarkReady(o, p) {
    const q = o.s;
    if (q != null && q.$ == 3) {
      const r = q.$1;
      const s2 = q.$0;
      o.s = Ready(p, r);
      for (let t = 0, u = length(s2) - 1; t <= u; t++)
        get(s2, t)(p);
    } else
      ;
  }
  function MarkForever(o, p) {
    const q = o.s;
    if (q != null && q.$ == 3) {
      const r = q.$0;
      o.s = Forever(p);
      for (let s2 = 0, t = length(r) - 1; s2 <= t; s2++)
        get(r, s2)(p);
    } else
      ;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Array.js
  function mapInPlace2(g, h) {
    for (let i = 0, j = h.length - 1; i <= j; i++)
      h[i] = g(h[i]);
    return h;
  }
  function ofSeqNonCopying(g) {
    if (g instanceof Array)
      return g;
    else if (g instanceof a9)
      return ofList(g);
    else if (g === null)
      return [];
    else {
      const h = [];
      const i = Get(g);
      try {
        while (i.MoveNext())
          h.push(i.Current);
        return h;
      } finally {
        const j = i;
        if (typeof j == "object" && isIDisposable(j))
          i.Dispose();
      }
    }
  }
  function MapTreeReduce(g, h, i, j) {
    const k = length(j);
    function l(m) {
      return (n) => {
        let o;
        switch (n <= 0 ? 0 : n === 1 ? m >= 0 && m < k ? 1 : (o = n, 2) : (o = n, 2)) {
          case 0:
            return h;
          case 1:
            return g(get(j, m));
          case 2:
            const p = n / 2 >> 0;
            return i(l(m)(p), l(m + p)(n - p));
        }
      };
    }
    return l(0)(k);
  }
  function TreeReduce(g, h, i) {
    const j = length(i);
    function k(l) {
      return (m) => {
        let n;
        switch (m <= 0 ? 0 : m === 1 ? l >= 0 && l < j ? 1 : (n = m, 2) : (n = m, 2)) {
          case 0:
            return g;
          case 1:
            return get(i, l);
          case 2:
            const o = m / 2 >> 0;
            return h(k(l)(o), k(l + o)(m - o));
        }
      };
    }
    return k(0)(j);
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.View.js
  function Sink(E, F) {
    function G() {
      WhenRun(F(), E, () => {
        scheduler().Fork(G);
      });
    }
    scheduler().Fork(G);
  }
  function Const(E) {
    const F = { s: Forever(E) };
    return () => F;
  }
  function BindInner(E, F) {
    return JoinInner2(Map4(E, F));
  }
  function JoinInner2(E) {
    return CreateLazy(() => JoinInner(E()));
  }
  function Bind2(E, F) {
    return Join2(Map4(E, F));
  }
  function Join2(E) {
    return CreateLazy(() => Join(E()));
  }
  function MapSeqCachedView(E, F) {
    const G = () => E;
    return MapSeqCachedViewBy((H) => H, (H, I) => G(H)(I), F);
  }
  function MapSeqCachedViewBy(E, F, G) {
    const H = [new a7("New_5")];
    return Map4((I) => {
      const J = H[0];
      const K = new a7("New_5");
      const L = mapInPlace2((M) => {
        let N;
        const O = E(M);
        if (J.ContainsKey(O)) {
          const P = J.Item(O);
          N = (WebSharper_UI_Var_default.Set(P.r, M), P);
        } else
          N = ConvertSeqNode((Q) => F(O, Q), M);
        K.set_Item(O, N);
        return N.e;
      }, ofSeq(I));
      H[0] = K;
      return L;
    }, G);
  }
  function ConvertSeqNode(E, F) {
    const G = WebSharper_UI_Var_default.Create_1(F);
    const H = G.View;
    return { e: E(H), r: G, w: H };
  }
  function MapSeqCached(E, F) {
    return MapSeqCachedBy((G) => G, E, F);
  }
  function MapSeqCachedBy(E, F, G) {
    const H = [new a7("New_5")];
    return Map4((I) => {
      const J = H[0];
      const K = new a7("New_5");
      const L = mapInPlace2((M) => {
        const N = E(M);
        const O = J.ContainsKey(N) ? J.Item(N) : F(M);
        K.set_Item(N, O);
        return O;
      }, ofSeq(I));
      H[0] = K;
      return L;
    }, G);
  }
  function Get2(E, F) {
    const G = [false];
    function H() {
      WhenRun(F(), (I) => {
        if (!G[0]) {
          G[0] = true;
          E(I);
        }
      }, () => {
        if (!G[0])
          H();
      });
    }
    H();
  }
  function MapAsync2(E, F) {
    return CreateLazy(() => MapAsync(E, F()));
  }
  function Map2Unit2(E, F) {
    return CreateLazy(() => Map2Unit(E(), F()));
  }
  function Map4(E, F) {
    return CreateLazy(() => Map(E, F()));
  }
  function CreateLazy(E) {
    const F = { c: null, o: E };
    return () => {
      let G;
      G = F.c;
      if (G === null) {
        G = F.o();
        F.c = G;
        const H = G.s;
        if (H != null && H.$ == 0)
          F.o = null;
        else
          WhenObsoleteRun(G, () => {
            F.c = null;
          });
        return G;
      } else
        return G;
    };
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/$StartupCode_Abbrev.js
  var a24 = Lazy((c2) => class d {
    static {
      a24 = c2(this);
    }
    static counter;
    static {
      this.counter = 0;
    }
  });
  var StartupCode_Abbrev_default = a24;

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Abbrev.Fresh.js
  function Id() {
    set_counter(counter() + 1);
    return "uid" + String(counter());
  }
  function Int() {
    set_counter(counter() + 1);
    return counter();
  }
  function counter() {
    return StartupCode_Abbrev_default.counter;
  }
  function set_counter(b2) {
    StartupCode_Abbrev_default.counter = b2;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Var`1.js
  var a25 = class extends a {
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.List.js
  function maybeReplaceFirst(b2, c2, d) {
    const e = [false];
    return map3((f) => {
      if (!e[0] && b2(f)) {
        const g = c2(f);
        return g == null ? f : g.$0;
      } else
        return f;
    }, d);
  }
  function replaceFirst(b2, c2, d) {
    const e = [false];
    return map3((f) => !e[0] && b2(f) ? c2(f) : f, d);
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.ConcreteVar`1.js
  var a26 = class extends a25 {
    isConst;
    current;
    snap;
    view;
    id;
    get Id() {
      return "uinref" + String(this.id);
    }
    get View() {
      return this.view;
    }
    UpdateMaybe(g) {
      const h = g(this.Get());
      if (h != null && h.$ == 1)
        this.Set(h.$0);
    }
    Update(g) {
      this.Set(g(this.Get()));
    }
    SetFinal(g) {
      if (this.isConst)
        ((h) => h("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((h) => {
          console.log(h);
        });
      else {
        Obsolete(this.snap);
        this.isConst = true;
        this.current = g;
        this.snap = { s: Forever(g) };
      }
    }
    Set(g) {
      if (this.isConst)
        ((h) => h("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((h) => {
          console.log(h);
        });
      else {
        Obsolete(this.snap);
        this.current = g;
        this.snap = { s: Ready(g, []) };
      }
    }
    Get() {
      return this.current;
    }
    constructor(g, h, i) {
      super();
      this.isConst = g;
      this.current = i;
      this.snap = h;
      this.view = () => this.snap;
      this.id = Int();
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Var.js
  var a27 = Lazy((p) => class q extends a {
    static {
      a27 = p(this);
    }
    static MapLens(r, s2, t) {
      return MapSeqCachedViewBy(r, (u, v) => {
        const w = Id();
        const x = (y) => Equals(r(y), u);
        return s2(new class extends a25 {
          constructor() {
            super();
          }
          Get() {
            return find(x, t.Get());
          }
          Set(y) {
            const z = () => y;
            return t.Update((A) => replaceFirst(x, z, A));
          }
          SetFinal(y) {
            return this.Set(y);
          }
          Update(y) {
            return t.Update((z) => replaceFirst(x, y, z));
          }
          UpdateMaybe(y) {
            return t.Update((z) => maybeReplaceFirst(x, y, z));
          }
          get View() {
            return v;
          }
          get Id() {
            return w;
          }
        }());
      }, t.View);
    }
    static Lens(r, s2, t) {
      const u = Id();
      const v = Map4(s2, r.View);
      return new class extends a25 {
        constructor() {
          super();
        }
        Get() {
          return s2(r.Get());
        }
        Set(w) {
          return r.Update((x) => t(x, w));
        }
        SetFinal(w) {
          return this.Set(w);
        }
        Update(w) {
          return r.Update((x) => t(x, w(s2(x))));
        }
        UpdateMaybe(w) {
          return r.UpdateMaybe((x) => {
            const y = w(s2(x));
            return y == null ? null : Some(t(x, y.$0));
          });
        }
        get View() {
          return v;
        }
        get Id() {
          return u;
        }
      }();
    }
    static Update(r, s2) {
      a27.Set(r, s2(r.Get()));
    }
    static SetFinal(r, s2) {
      r.SetFinal(s2);
    }
    static Set(r, s2) {
      r.Set(s2);
    }
    static CreateWaiting() {
      return new a26(false, { s: Waiting([], []) }, null);
    }
    static Create() {
      return new a26(false, { s: Ready(null, []) }, null);
    }
    static CreateLogged(r, s2) {
      if (!globalThis.UINVars)
        globalThis.UINVars = [];
      else
        null;
      const t = a27.Create_1(s2);
      globalThis.UINVars.push([r, t]);
      return t;
    }
    static Create_1(r) {
      return new a26(false, { s: Ready(r, []) }, r);
    }
    static {
    }
  });
  var WebSharper_UI_Var_default = a27;

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/$StartupCode_AppendList.js
  var a28 = Lazy((c2) => class d {
    static {
      a28 = c2(this);
    }
    static Empty;
    static {
      this.Empty = { $: 0 };
    }
  });
  var StartupCode_AppendList_default = a28;

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.AppendList.js
  function ToArray(f) {
    const g = [];
    function h(i) {
      while (true) {
        if (i.$ == 1)
          return g.push(i.$0);
        else if (i.$ == 2) {
          const j = i.$1;
          const k = i.$0;
          h(k);
          i = j;
        } else
          return i.$ == 3 ? iter((l) => {
            g.push(l);
          }, i.$0) : null;
      }
    }
    h(f);
    return g.slice(0);
  }
  function Concat(f) {
    const g = ofSeqNonCopying(f);
    return TreeReduce(Empty(), Append, g);
  }
  function Append(f, g) {
    return f.$ == 0 ? g : g.$ == 0 ? f : { $: 2, $0: f, $1: g };
  }
  function Empty() {
    return StartupCode_AppendList_default.Empty;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Easings.js
  function CubicInOut() {
    return StartupCode_Animation_default.CubicInOut;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Easing.js
  var a29 = Lazy((e) => class f extends a {
    static {
      a29 = e(this);
    }
    transformTime;
    static get CubicInOut() {
      return CubicInOut();
    }
    static Custom(g) {
      return new f(g);
    }
    TransformTime(g) {
      return this.transformTime(g);
    }
    constructor(g) {
      super();
      this.transformTime = g;
    }
  });
  var WebSharper_UI_Easing_default = a29;

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/$StartupCode_Animation.js
  var a30 = Lazy((d) => class e {
    static {
      a30 = d(this);
    }
    static UseAnimations;
    static CubicInOut;
    static {
      this.CubicInOut = WebSharper_UI_Easing_default.Custom((f) => {
        const g = f * f;
        return 3 * g - 2 * (g * f);
      });
      this.UseAnimations = true;
    }
  });
  var StartupCode_Animation_default = a30;

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Anims.js
  function UseAnimations() {
    return StartupCode_Animation_default.UseAnimations;
  }
  function Actions(m) {
    return ConcatActions(choose((n) => n.$ == 1 ? Some(n.$0) : null, ToArray(m.$0)));
  }
  function ConcatActions(m) {
    const n = ofSeqNonCopying(m);
    const o = length(n);
    if (o === 0)
      return Const2();
    else if (o === 1)
      return get(n, 0);
    else {
      const p = max(map((r) => r.Duration, n));
      const q = map2((r) => Prolong(p, r), n);
      return Def(p, (r) => {
        iter((s2) => {
          s2.Compute(r);
        }, q);
      });
    }
  }
  function Prolong(m, n) {
    const o = n.Compute;
    const p = n.Duration;
    const q = Create(() => n.Compute(n.Duration));
    return { Compute: (r) => r >= p ? q.f() : o(r), Duration: m };
  }
  function Const2(m) {
    return Def(0, () => m);
  }
  function Def(m, n) {
    return { Compute: n, Duration: m };
  }
  function Finalize(m) {
    iter((n) => {
      if (n.$ == 0)
        n.$0();
    }, ToArray(m.$0));
  }
  function List(m) {
    return m.$0;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Anim.js
  function Anim(r) {
    return { $: 0, $0: r };
  }
  function get_Empty() {
    return Anim(Empty());
  }
  function Run(r, s2) {
    const t = s2.Duration;
    if (t === 0)
      return Zero();
    else {
      const u = (v) => {
        function w(x) {
          return (y) => {
            const z = y - x;
            s2.Compute(z);
            r();
            return z <= t ? void requestAnimationFrame((A) => {
              w(x)(A);
            }) : v();
          };
        }
        requestAnimationFrame((x) => {
          w(x)(x);
        });
      };
      return FromContinuations((v, w, x) => u.apply(null, [v, w, x]));
    }
  }
  function Play(r) {
    const s2 = () => {
      const t = Run(() => {
      }, Actions(r));
      const u = () => {
        Finalize(r);
        return Return(null);
      };
      return Bind(t, (v, w) => u(v)(w));
    };
    return Delay((t, u) => s2(t)(u));
  }
  function Concat2(r) {
    return Anim(Concat(map(List, r)));
  }
  function Append2(r, s2) {
    return Anim(Append(r.$0, s2.$0));
  }
  function get_UseAnimations() {
    return UseAnimations();
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.DynamicAttrNode`1.js
  var a31 = class extends a {
    push;
    value;
    dirty;
    updates;
    get NChanged() {
      return this.updates;
    }
    NSync(e) {
      if (this.dirty) {
        this.push(e)(this.value);
        this.dirty = false;
      }
    }
    NGetExitAnim(e) {
      return get_Empty();
    }
    NGetEnterAnim(e) {
      return get_Empty();
    }
    NGetChangeAnim(e) {
      return get_Empty();
    }
    constructor(e, f) {
      super();
      this.push = f;
      this.value = void 0;
      this.dirty = false;
      this.updates = Map4((g) => {
        this.value = g;
        this.dirty = true;
      }, e);
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.BindVar.js
  function FloatApplyChecked() {
    return StartupCode_Attr_Client_default.FloatApplyChecked;
  }
  function FloatGetChecked() {
    return StartupCode_Attr_Client_default.FloatGetChecked;
  }
  function FloatSetChecked() {
    return StartupCode_Attr_Client_default.FloatSetChecked;
  }
  function FloatApplyUnchecked() {
    return StartupCode_Attr_Client_default.FloatApplyUnchecked;
  }
  function FloatGetUnchecked() {
    return StartupCode_Attr_Client_default.FloatGetUnchecked;
  }
  function FloatSetUnchecked() {
    return StartupCode_Attr_Client_default.FloatSetUnchecked;
  }
  function IntApplyChecked() {
    return StartupCode_Attr_Client_default.IntApplyChecked;
  }
  function IntGetChecked() {
    return StartupCode_Attr_Client_default.IntGetChecked;
  }
  function IntSetChecked() {
    return StartupCode_Attr_Client_default.IntSetChecked;
  }
  function IntApplyUnchecked() {
    return StartupCode_Attr_Client_default.IntApplyUnchecked;
  }
  function IntGetUnchecked() {
    return StartupCode_Attr_Client_default.IntGetUnchecked;
  }
  function IntSetUnchecked() {
    return StartupCode_Attr_Client_default.IntSetUnchecked;
  }
  function FileApplyUnchecked() {
    return StartupCode_Attr_Client_default.FileApplyUnchecked;
  }
  function FileGetUnchecked() {
    return StartupCode_Attr_Client_default.FileGetUnchecked;
  }
  function FileSetUnchecked() {
    return StartupCode_Attr_Client_default.FileSetUnchecked;
  }
  function DateTimeApplyUnchecked() {
    return StartupCode_Attr_Client_default.DateTimeApplyUnchecked;
  }
  function DateTimeGetUnchecked() {
    return StartupCode_Attr_Client_default.DateTimeGetUnchecked;
  }
  function DateTimeSetUnchecked() {
    return StartupCode_Attr_Client_default.DateTimeSetUnchecked;
  }
  function StringListGet() {
    return StartupCode_Attr_Client_default.StringListGet;
  }
  function StringListSet() {
    return StartupCode_Attr_Client_default.StringListSet;
  }
  function StringApply() {
    return StartupCode_Attr_Client_default.StringApply;
  }
  function StringGet() {
    return StartupCode_Attr_Client_default.StringGet;
  }
  function StringSet() {
    return StartupCode_Attr_Client_default.StringSet;
  }
  function BoolCheckedApply() {
    return StartupCode_Attr_Client_default.BoolCheckedApply;
  }
  function FileApplyValue(e, f, g) {
    let h;
    h = null;
    return [(i) => {
      i.addEventListener("change", () => {
        g.UpdateMaybe((j) => {
          let k;
          h = e(i);
          return h != null && h.$ == 1 && (h.$0 !== j && (k = [h, h.$0], true)) ? k[0] : null;
        });
      });
    }, (i) => {
      const j = f(i);
      return (k) => k == null ? null : j(k.$0);
    }, Map4((i) => {
      let j;
      return h != null && h.$ == 1 && (Equals(h.$0, i) && (j = h.$0, true)) ? null : Some(i);
    }, g.View)];
  }
  function ApplyValue(e, f, g) {
    let h;
    h = null;
    return [(i) => {
      const j = () => {
        g.UpdateMaybe((k) => {
          let l;
          h = e(i);
          return h != null && h.$ == 1 && (!Equals(h.$0, k) && (l = [h, h.$0], true)) ? l[0] : null;
        });
      };
      i.addEventListener("change", j);
      i.addEventListener("input", j);
      i.addEventListener("keypress", j);
    }, (i) => {
      const j = f(i);
      return (k) => k == null ? null : j(k.$0);
    }, Map4((i) => {
      let j;
      return h != null && h.$ == 1 && (Equals(h.$0, i) && (j = h.$0, true)) ? null : Some(i);
    }, g.View)];
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js
  function forall3(r, s2) {
    return forall(r, protect(s2));
  }
  function protect(r) {
    return r == null ? "" : r;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.Char.js
  function IsWhiteSpace(b2) {
    return b2.match(new RegExp("\\s")) !== null;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.String.js
  function isBlank(c2) {
    return forall3(IsWhiteSpace, c2);
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.DateTimeHelpers.js
  function TryParse(c2) {
    const d = Date.parse(c2);
    return isNaN(d) ? null : Some(d);
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.CheckedInput`1.js
  var a33 = class _a {
    static Valid(c2, d) {
      return Create2(_a, { $: 0, $0: c2, $1: d });
    }
    static Invalid(c2) {
      return Create2(_a, { $: 1, $0: c2 });
    }
    static Blank(c2) {
      return Create2(_a, { $: 2, $0: c2 });
    }
    static Make(c2) {
      let d;
      return _a.Valid(c2, (d = c2, String(d)));
    }
    get Input() {
      return this.$ == 1 ? this.$0 : this.$ == 2 ? this.$0 : this.$1;
    }
    $;
    $0;
    $1;
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/WebSharper.N.js
  function TryParse2(c2, d, e, f) {
    const g = +c2;
    const h = g === g - g % 1 && g >= d && g <= e;
    if (h)
      f.set(g);
    return h;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.StdLib/System.Int32.js
  function TryParse3(c2, d) {
    return TryParse2(c2, -2147483648, 2147483647, d);
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/$StartupCode_Attr.Client.js
  var a36 = Lazy((G) => class H {
    static {
      a36 = G(this);
    }
    static FloatApplyChecked;
    static FloatGetChecked;
    static FloatSetChecked;
    static FloatApplyUnchecked;
    static FloatGetUnchecked;
    static FloatSetUnchecked;
    static IntApplyChecked;
    static IntGetChecked;
    static IntSetChecked;
    static IntApplyUnchecked;
    static IntGetUnchecked;
    static IntSetUnchecked;
    static FileApplyUnchecked;
    static FileGetUnchecked;
    static FileSetUnchecked;
    static DateTimeApplyUnchecked;
    static DateTimeGetUnchecked;
    static DateTimeSetUnchecked;
    static StringListApply;
    static StringListGet;
    static StringListSet;
    static StringApply;
    static StringGet;
    static StringSet;
    static BoolCheckedApply;
    static EmptyAttr;
    static {
      this.EmptyAttr = null;
      this.BoolCheckedApply = (Y) => [(Z) => {
        Z.addEventListener("change", () => Y.Get() != Z.checked ? Y.Set(Z.checked) : null);
      }, (Z) => (u0030) => u0030 != null && u0030.$ == 1 ? void (Z.checked = u0030.$0) : null, Map4((Z) => Some(Z), Y.View)];
      this.StringSet = (Y) => (Z) => {
        Y.value = Z;
      };
      this.StringGet = (Y) => Some(Y.value);
      const I = StringGet();
      const J = StringSet();
      this.StringApply = (Y) => ApplyValue(I, J, Y);
      this.StringListSet = (Y) => (Z) => {
        const u0030 = Y.options;
        for (let u0031 = 0, u0032 = u0030.length - 1; u0031 <= u0032; u0031++)
          (() => {
            const u0033 = u0030.item(u0031);
            u0033.selected = arrContains(u0033.value, Z);
          })();
      };
      this.StringListGet = (Y) => {
        const Z = Y.selectedOptions;
        return Some(ofSeq(delay(() => collect((u0030) => [Z.item(u0030).value], range(0, Z.length - 1)))));
      };
      const K = StringListGet();
      const L = StringListSet();
      this.StringListApply = (Y) => ApplyValue(K, L, Y);
      this.DateTimeSetUnchecked = (Y) => (Z) => {
        Y.value = new Date(Z).toLocaleString();
      };
      this.DateTimeGetUnchecked = (Y) => {
        let Z, u0030;
        const u0031 = Y.value;
        if (isBlank(u0031))
          return Some(-864e13);
        else {
          Z = 0;
          const u0032 = TryParse(u0031);
          let u0033 = u0032 != null && u0032.$ == 1 && (Z = u0032.$0, true);
          u0030 = [u0033, Z];
          return u0030[0] ? Some(u0030[1]) : null;
        }
      };
      const M = DateTimeGetUnchecked();
      const N = DateTimeSetUnchecked();
      this.DateTimeApplyUnchecked = (Y) => ApplyValue(M, N, Y);
      this.FileSetUnchecked = () => () => null;
      this.FileGetUnchecked = (Y) => {
        const Z = Y.files;
        return Some(ofSeq(delay(() => map((u0030) => Z.item(u0030), range(0, Z.length - 1)))));
      };
      const O = FileGetUnchecked();
      const P = FileSetUnchecked();
      this.FileApplyUnchecked = (Y) => FileApplyValue(O, P, Y);
      this.IntSetUnchecked = (Y) => (Z) => {
        Y.value = String(Z);
      };
      this.IntGetUnchecked = (Y) => {
        const Z = Y.value;
        if (isBlank(Z))
          return Some(0);
        else {
          const u0030 = +Z;
          return u0030 !== u0030 >> 0 ? null : Some(u0030);
        }
      };
      const Q = IntGetUnchecked();
      const R = IntSetUnchecked();
      this.IntApplyUnchecked = (Y) => ApplyValue(Q, R, Y);
      this.IntSetChecked = (Y) => (Z) => {
        const u0030 = Z.Input;
        return Y.value != u0030 ? void (Y.value = u0030) : null;
      };
      this.IntGetChecked = (Y) => {
        let Z, u0030;
        const u0031 = Y.value;
        if (isBlank(u0031))
          Z = (Y.checkValidity ? Y.checkValidity() : true) ? a33.Blank(u0031) : a33.Invalid(u0031);
        else {
          const u0032 = (u0030 = 0, [TryParse3(u0031, { get: () => u0030, set: (u0033) => {
            u0030 = u0033;
          } }), u0030]);
          Z = u0032[0] ? a33.Valid(u0032[1], u0031) : a33.Invalid(u0031);
        }
        return Some(Z);
      };
      const S = IntGetChecked();
      const T = IntSetChecked();
      this.IntApplyChecked = (Y) => ApplyValue(S, T, Y);
      this.FloatSetUnchecked = (Y) => (Z) => {
        Y.value = String(Z);
      };
      this.FloatGetUnchecked = (Y) => {
        const Z = Y.value;
        if (isBlank(Z))
          return Some(0);
        else {
          const u0030 = +Z;
          return isNaN(u0030) ? null : Some(u0030);
        }
      };
      const U = FloatGetUnchecked();
      const V = FloatSetUnchecked();
      this.FloatApplyUnchecked = (Y) => ApplyValue(U, V, Y);
      this.FloatSetChecked = (Y) => (Z) => {
        const u0030 = Z.Input;
        return Y.value != u0030 ? void (Y.value = u0030) : null;
      };
      this.FloatGetChecked = (Y) => {
        let Z;
        const u0030 = Y.value;
        if (isBlank(u0030))
          Z = (Y.checkValidity ? Y.checkValidity() : true) ? a33.Blank(u0030) : a33.Invalid(u0030);
        else {
          const u0031 = +u0030;
          Z = isNaN(u0031) ? a33.Invalid(u0030) : a33.Valid(u0031, u0030);
        }
        return Some(Z);
      };
      const W = FloatGetChecked();
      const X = FloatSetChecked();
      this.FloatApplyChecked = (Y) => ApplyValue(W, X, Y);
    }
  });
  var StartupCode_Attr_Client_default = a36;

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.Attrs.Dyn.js
  function New4(b2, c2, d, e) {
    const f = { DynElem: b2, DynFlags: c2, DynNodes: d };
    SetOptional(f, "OnAfterRender", e);
    return f;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.Attrs.js
  function Dynamic(p, q) {
    return a37.A1(new a31(p, q));
  }
  function EmptyAttr() {
    return StartupCode_Attr_Client_default.EmptyAttr;
  }
  function AppendTree(p, q) {
    if (p === null)
      return q;
    else if (q === null)
      return p;
    else {
      const r = a37.A2(p, q);
      SetFlags(r, Flags(p) | Flags(q));
      return r;
    }
  }
  function GetChangeAnim(p) {
    return GetAnim(p, (q, r) => q.NGetChangeAnim(r));
  }
  function GetExitAnim(p) {
    return GetAnim(p, (q, r) => q.NGetExitAnim(r));
  }
  function GetEnterAnim(p) {
    return GetAnim(p, (q, r) => q.NGetEnterAnim(r));
  }
  function GetAnim(p, q) {
    return Concat2(map2((r) => q(r, p.DynElem), p.DynNodes));
  }
  function Updates(p) {
    return MapTreeReduce((q) => q.NChanged, Const(), Map2Unit2, p.DynNodes);
  }
  function Empty2(p) {
    return New4(p, 0, [], null);
  }
  function Insert(p, q) {
    const r = [];
    const s2 = [];
    function t(w) {
      while (true) {
        if (!(w === null)) {
          if (w != null && w.$ == 1)
            return r.push(w.$0);
          else if (w != null && w.$ == 2) {
            const x = w.$1;
            const y = w.$0;
            t(y);
            w = x;
          } else
            return w != null && w.$ == 3 ? w.$0(p) : w != null && w.$ == 4 ? s2.push(w.$0) : null;
        } else
          return null;
      }
    }
    t(q);
    const u = r.slice(0);
    let v = New4(p, Flags(q), u, s2.length === 0 ? null : Some((w) => {
      iter2((x) => {
        x(w);
      }, s2);
    }));
    return v;
  }
  function Sync(p, q) {
    iter((r) => {
      r.NSync(p);
    }, q.DynNodes);
  }
  function SetFlags(p, q) {
    p.flags = q;
  }
  function Flags(p) {
    return p !== null && p.hasOwnProperty("flags") ? p.flags : 0;
  }
  function HasExitAnim(p) {
    const q = 2;
    return (p.DynFlags & q) === q;
  }
  function HasEnterAnim(p) {
    const q = 1;
    return (p.DynFlags & q) === q;
  }
  function HasChangeAnim(p) {
    const q = 4;
    return (p.DynFlags & q) === q;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Attr.js
  var a37 = class _a {
    static A1(g) {
      return Create2(_a, { $: 1, $0: g });
    }
    static A2(g, h) {
      return Create2(_a, { $: 2, $0: g, $1: h });
    }
    static A3(g) {
      return Create2(_a, { $: 3, $0: g });
    }
    static A4(g) {
      return Create2(_a, { $: 4, $0: g });
    }
    static HandlerImpl(g, h) {
      return _a.A3((i) => {
        i.addEventListener(g, (j) => h(i)(j), false);
      });
    }
    static Concat(g) {
      const h = ofSeqNonCopying(g);
      return TreeReduce(EmptyAttr(), (i, j) => AppendTree(i, j), h);
    }
    static Create(g, h) {
      return _a.A3((i) => {
        i.setAttribute(g, h);
      });
    }
    $;
    $0;
    $1;
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.DocNode.js
  function TreeDoc(a47) {
    return { $: 6, $0: a47 };
  }
  function TextNodeDoc(a47) {
    return { $: 5, $0: a47 };
  }
  function TextDoc(a47) {
    return { $: 4, $0: a47 };
  }
  function EmbedDoc(a47) {
    return { $: 2, $0: a47 };
  }
  function ElemDoc(a47) {
    return { $: 1, $0: a47 };
  }
  function AppendDoc(a47, b2) {
    return { $: 0, $0: a47, $1: b2 };
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Abbrev.HashSet.js
  function Filter(d, e) {
    return new a8("New_2", filter(d, ToArray2(e)));
  }
  function Intersect(d, e) {
    const f = new a8("New_2", ToArray2(d));
    f.IntersectWith(ToArray2(e));
    return f;
  }
  function Except(d, e) {
    const f = new a8("New_2", ToArray2(e));
    f.ExceptWith(ToArray2(d));
    return f;
  }
  function ToArray2(d) {
    const e = create(d.Count, void 0);
    d.CopyTo(e, 0);
    return e;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.Docs.NodeSet.js
  function NodeSet(g) {
    return { $: 0, $0: g };
  }
  function ToArray3(g) {
    return ToArray2(g.$0);
  }
  function get_Empty2() {
    return NodeSet(new a8("New_3"));
  }
  function Intersect2(g, h) {
    return NodeSet(Intersect(g.$0, h.$0));
  }
  function Except2(g, h) {
    return NodeSet(Except(g.$0, h.$0));
  }
  function FindAll(g) {
    const h = [];
    function i(l, m) {
      while (true)
        switch (l) {
          case 0:
            if (m != null && m.$ == 0) {
              const n = m.$1;
              const o = m.$0;
              i(0, o);
              m = n;
            } else if (m != null && m.$ == 1) {
              const p = m.$0;
              m = p;
              l = 1;
            } else if (m != null && m.$ == 2) {
              const q = m.$0;
              m = q.Current;
            } else if (m != null && m.$ == 6) {
              const r = m.$0.Holes;
              return (/* @__PURE__ */ ((s2) => (t) => {
                iter(s2, t);
              })(k))(r);
            } else
              return null;
            break;
          case 1:
            h.push(m);
            m = m.Children;
            l = 0;
            break;
        }
    }
    function j(l) {
      return i(0, l);
    }
    function k(l) {
      return i(1, l);
    }
    j(g);
    return NodeSet(new a8("New_2", h));
  }
  function Filter2(g, h) {
    return NodeSet(Filter(g, h.$0));
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/$StartupCode_Doc.Proxy.js
  var a39 = Lazy((c2) => class d {
    static {
      a39 = c2(this);
    }
    static BatchUpdatesEnabled;
    static {
      this.BatchUpdatesEnabled = true;
    }
  });
  var StartupCode_Doc_Proxy_default = a39;

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.Settings.js
  function BatchUpdatesEnabled() {
    return StartupCode_Doc_Proxy_default.BatchUpdatesEnabled;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.Docs.RunState.js
  function New5(a47, b2) {
    return { PreviousNodes: a47, Top: b2 };
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.DocElemNode.js
  var a40 = class _a {
    Attr;
    Children;
    Delimiters;
    El;
    ElKey;
    Render;
    GetHashCode() {
      return this.ElKey;
    }
    Equals(d) {
      return this.ElKey === d.ElKey;
    }
    static New(d, e, f, g, h, i) {
      const j = { Attr: d, Children: e, El: g, ElKey: h };
      let k = (SetOptional(j, "Delimiters", f), SetOptional(j, "Render", i), j);
      return Create2(_a, k);
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.Docs.DomNodes.js
  function DomNodes(g) {
    return { $: 0, $0: g };
  }
  function Iter(g, h) {
    iter(g, h.$0);
  }
  function Except3(g, h) {
    const i = g.$0;
    return DomNodes(filter((j) => forall2((k) => !(j === k), i), h.$0));
  }
  function DocChildren(g) {
    const h = [];
    function i(j) {
      while (true) {
        if (j != null && j.$ == 2) {
          const k = j.$0;
          j = k.Current;
        } else if (j != null && j.$ == 1)
          return h.push(j.$0.El);
        else if (j == null)
          return null;
        else if (j != null && j.$ == 5)
          return h.push(j.$0);
        else if (j != null && j.$ == 4)
          return h.push(j.$0.Text);
        else if (j != null && j.$ == 6) {
          const l = j.$0.Els;
          return (/* @__PURE__ */ ((o) => (p) => {
            iter(o, p);
          })((o) => {
            if (o == null || o.constructor === Object)
              i(o);
            else
              h.push(o);
          }))(l);
        } else {
          const m = j.$1;
          const n = j.$0;
          i(n);
          j = m;
        }
      }
    }
    i(g.Children);
    return DomNodes(ofSeqNonCopying(h));
  }
  function Children(g, h) {
    let i;
    if (h != null && h.$ == 1) {
      const j = h.$0[1];
      const k = h.$0[0];
      const l = [];
      i = k.nextSibling;
      while (i !== j) {
        l.push(i);
        i = i.nextSibling;
      }
      return DomNodes(l);
    } else {
      let m = g.childNodes.length;
      const n = g.childNodes;
      let o = init(m, (p) => n[p]);
      return DomNodes(o);
    }
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/$StartupCode_DomUtility.js
  var a41 = Lazy((c2) => class d {
    static {
      a41 = c2(this);
    }
    static defaultWrap;
    static wrapMap;
    static rhtml;
    static rtagName;
    static rxhtmlTag;
    static {
      this.rxhtmlTag = new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>", "gi");
      this.rtagName = new RegExp("<([\\w:]+)");
      this.rhtml = new RegExp("<|&#?\\w+;");
      const e = [1, "<table>", "</table>"];
      let f = Object.fromEntries([["option", [1, "<select multiple='multiple'>", "</select>"]], ["legend", [1, "<fieldset>", "</fieldset>"]], ["area", [1, "<map>", "</map>"]], ["param", [1, "<object>", "</object>"]], ["thead", e], ["tbody", e], ["tfoot", e], ["tr", [2, "<table><tbody>", "</tbody></table>"]], ["col", [2, "<table><colgroup>", "</colgoup></table>"]], ["td", [3, "<table><tbody><tr>", "</tr></tbody></table>"]]]);
      this.wrapMap = f;
      this.defaultWrap = [0, "", ""];
    }
  });
  var StartupCode_DomUtility_default = a41;

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.DomUtility.js
  function ParseHTMLIntoFakeRoot(d) {
    const e = globalThis.document.createElement("div");
    if (!rhtml().test(d)) {
      e.appendChild(globalThis.document.createTextNode(d));
      return e;
    } else {
      let j = function(k, l) {
        while (true) {
          if (l === 0)
            return k;
          else {
            const m = l;
            k = k.lastChild;
            l = m - 1;
          }
        }
      };
      const f = rtagName().exec(d);
      const g = Equals(f, null) ? "" : get(f, 1).toLowerCase();
      const h = wrapMap()[g];
      const i = h ? h : defaultWrap();
      e.innerHTML = i[1] + d.replace(rxhtmlTag(), "<$1></$2>") + i[2];
      return (/* @__PURE__ */ ((k) => {
        const l = k;
        return (m) => j(l, m);
      })(e))(i[0]);
    }
  }
  function defaultWrap() {
    return StartupCode_DomUtility_default.defaultWrap;
  }
  function wrapMap() {
    return StartupCode_DomUtility_default.wrapMap;
  }
  function rhtml() {
    return StartupCode_DomUtility_default.rhtml;
  }
  function rtagName() {
    return StartupCode_DomUtility_default.rtagName;
  }
  function rxhtmlTag() {
    return StartupCode_DomUtility_default.rxhtmlTag;
  }
  function ChildrenArray(d) {
    const e = [];
    for (let f = 0, g = d.childNodes.length - 1; f <= g; f++)
      e.push(d.childNodes[f]);
    return e;
  }
  function InsertAt(d, e, f) {
    let g;
    if (f.parentNode === d) {
      const h = f.nextSibling;
      let i = Equals(h, null) ? null : h;
      g = e === i;
    } else
      g = false;
    if (!g)
      d.insertBefore(f, e);
  }
  function RemoveNode(d, e) {
    if (e.parentNode === d)
      d.removeChild(e);
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.Docs.js
  function UpdateTextNode(O, P) {
    O.Value = P;
    O.Dirty = true;
  }
  function CreateTextNode() {
    return { Text: globalThis.document.createTextNode(""), Dirty: false, Value: "" };
  }
  function UpdateEmbedNode(O, P) {
    O.Current = P;
    O.Dirty = true;
  }
  function CreateEmbedNode() {
    return { Current: null, Dirty: false };
  }
  function PerformSyncUpdate(O, P, Q) {
    const R = FindAll(Q);
    SyncElemNode(O, P.Top);
    P.PreviousNodes = R;
  }
  function PerformAnimatedUpdate(O, P, Q) {
    if (get_UseAnimations()) {
      const R = () => {
        const S = FindAll(Q);
        const T = ComputeChangeAnim(P, S);
        const U = ComputeEnterAnim(P, S);
        const V = Play(Append2(T, ComputeExitAnim(P, S)));
        const W = () => {
          const X = SyncElemNodesNextFrame(O, P);
          const Y = () => {
            const Z = Play(U);
            const u0030 = () => {
              P.PreviousNodes = S;
              return Return(null);
            };
            return Bind(Z, (u0031, u0032) => u0030(u0031)(u0032));
          };
          return Bind(X, (Z, u0030) => Y(Z)(u0030));
        };
        return Bind(V, (X, Y) => W(X)(Y));
      };
      return Delay((S, T) => R(S)(T));
    } else
      return SyncElemNodesNextFrame(O, P);
  }
  function SyncElemNodesNextFrame(O, P) {
    if (BatchUpdatesEnabled()) {
      const Q = (R) => {
        requestAnimationFrame(() => {
          SyncElemNode(O, P.Top);
          R();
        });
      };
      return FromContinuations((R, S, T) => Q.apply(null, [R, S, T]));
    } else {
      SyncElemNode(O, P.Top);
      return Return(null);
    }
  }
  function ComputeEnterAnim(O, P) {
    return Concat2(map2((Q) => GetEnterAnim(Q.Attr), ToArray3(Except2(O.PreviousNodes, Filter2((Q) => HasEnterAnim(Q.Attr), P)))));
  }
  function ComputeChangeAnim(O, P) {
    const Q = (S) => HasChangeAnim(S.Attr);
    const R = (S) => Filter2(Q, S);
    return Concat2(map2((S) => GetChangeAnim(S.Attr), ToArray3(Intersect2(R(O.PreviousNodes), R(P)))));
  }
  function ComputeExitAnim(O, P) {
    return Concat2(map2((Q) => GetExitAnim(Q.Attr), ToArray3(Except2(P, Filter2((Q) => HasExitAnim(Q.Attr), O.PreviousNodes)))));
  }
  function CreateDelimitedRunState(O, P, Q) {
    return New5(get_Empty2(), CreateDelimitedElemNode(O, P, EmptyAttr(), Q));
  }
  function CreateRunState(O, P) {
    return New5(get_Empty2(), CreateElemNode(O, EmptyAttr(), P));
  }
  function CreateDelimitedElemNode(O, P, Q, R) {
    const S = O.parentNode;
    LinkPrevElement(P, R);
    const T = Insert(S, Q);
    return a40.New(T, R, Some([O, P]), S, Int(), GetOptional(T.OnAfterRender));
  }
  function CreateElemNode(O, P, Q) {
    LinkElement(O, Q);
    const R = Insert(O, P);
    return a40.New(R, Q, null, O, Int(), GetOptional(R.OnAfterRender));
  }
  function SyncElemNode(O, P) {
    !O ? SyncElement(P) : void 0;
    Sync2(P.Children);
    AfterRender(P);
  }
  function Sync2(O) {
    while (true) {
      if (O != null && O.$ == 1)
        return SyncElemNode(false, O.$0);
      else if (O != null && O.$ == 2) {
        const P = O.$0;
        O = P.Current;
      } else if (O == null)
        return null;
      else if (O != null && O.$ == 5)
        return null;
      else if (O != null && O.$ == 4) {
        const Q = O.$0;
        return Q.Dirty ? (Q.Text.nodeValue = Q.Value, Q.Dirty = false) : null;
      } else if (O != null && O.$ == 6) {
        const R = O.$0;
        iter((U) => {
          SyncElemNode(false, U);
        }, R.Holes);
        iter((U) => {
          Sync(U[0], U[1]);
        }, R.Attrs);
        return AfterRender(R);
      } else {
        const S = O.$1;
        const T = O.$0;
        Sync2(T);
        O = S;
      }
    }
  }
  function AfterRender(O) {
    const P = GetOptional(O.Render);
    if (P != null && P.$ == 1) {
      P.$0(O.El);
      SetOptional(O, "Render", null);
    }
  }
  function InsertBeforeDelim(O, P) {
    const Q = O.parentNode;
    const R = globalThis.document.createTextNode("");
    Q.insertBefore(R, O);
    LinkPrevElement(O, P);
    return R;
  }
  function LinkPrevElement(O, P) {
    InsertDoc(O.parentNode, P, O);
  }
  function LinkElement(O, P) {
    InsertDoc(O, P, null);
  }
  function SyncElement(O) {
    function P(Q) {
      function R(S) {
        while (true) {
          if (S != null && S.$ == 0) {
            const T = S.$1;
            const U = S.$0;
            if (R(U))
              return true;
            else
              S = T;
          } else if (S != null && S.$ == 2) {
            const V = S.$0;
            if (V.Dirty)
              return true;
            else
              S = V.Current;
          } else if (S != null && S.$ == 6) {
            const W = S.$0;
            return W.Dirty || exists(P, W.Holes);
          } else
            return false;
        }
      }
      return R(Q.Children);
    }
    Sync(O.El, O.Attr);
    if (P(O))
      DoSyncElement(O);
  }
  function DoSyncElement(O) {
    const P = GetOptional(O.Delimiters);
    const Q = P == null ? O.El : P.$0[1].parentNode;
    function R(V, W) {
      while (true) {
        if (V != null && V.$ == 1)
          return V.$0.El;
        else if (V != null && V.$ == 2) {
          const X = V.$0;
          if (X.Dirty) {
            X.Dirty = false;
            return InsertDoc(Q, X.Current, W);
          } else
            V = X.Current;
        } else if (V == null)
          return W;
        else if (V != null && V.$ == 4)
          return V.$0.Text;
        else if (V != null && V.$ == 5)
          return V.$0;
        else if (V != null && V.$ == 6) {
          const Y = V.$0;
          if (Y.Dirty)
            Y.Dirty = false;
          return foldBack((u0031, u0032) => u0031 == null || u0031.constructor === Object ? R(u0031, u0032) : u0031, Y.Els, W);
        } else {
          const Z = V.$1;
          const u0030 = V.$0;
          V = u0030;
          W = R(Z, W);
        }
      }
    }
    Iter((V) => {
      RemoveNode(Q, V);
    }, Except3(DocChildren(O), Children(Q, GetOptional(O.Delimiters))));
    let S = O.Children;
    const T = GetOptional(O.Delimiters);
    let U = T != null && T.$ == 1 ? T.$0[1] : null;
    R(S, U);
  }
  function InsertDoc(O, P, Q) {
    while (true) {
      if (P != null && P.$ == 1) {
        const R = P.$0;
        return InsertNode(O, R.El, Q);
      } else if (P != null && P.$ == 2) {
        const S = P.$0;
        S.Dirty = false;
        P = S.Current;
      } else if (P == null)
        return Q;
      else if (P != null && P.$ == 4) {
        const T = P.$0;
        return InsertNode(O, T.Text, Q);
      } else if (P != null && P.$ == 5) {
        const U = P.$0;
        return InsertNode(O, U, Q);
      } else if (P != null && P.$ == 6)
        return foldBack((X, Y) => (/* @__PURE__ */ ((Z) => (u0030) => (u0031) => u0030 == null || u0030.constructor === Object ? InsertDoc(Z, u0030, u0031) : InsertNode(Z, u0030, u0031))(O))(X)(Y), P.$0.Els, Q);
      else {
        const V = P.$1;
        const W = P.$0;
        P = W;
        Q = InsertDoc(O, V, Q);
      }
    }
  }
  function InsertNode(O, P, Q) {
    InsertAt(O, Q, P);
    return P;
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Updates.js
  var a42 = class _a {
    c;
    s;
    v;
    static Create(f) {
      let g;
      g = null;
      g = _a.New(f, null, () => {
        let h;
        h = g.s;
        return h === null ? (h = Copy(g.c()), g.s = h, WhenObsoleteRun(h, () => {
          g.s = null;
        }), h) : h;
      });
      return g;
    }
    set Value(f) {
      const g = this.s;
      if (!(g === null))
        Obsolete(g);
      this.c = f;
    }
    static New(f, g, h) {
      return Create2(_a, { c: f, s: g, v: h });
    }
  };

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.EltUpdater.js
  var a43 = Lazy((m) => {
    Force(WebSharper_UI_Elt_default);
    return class n extends WebSharper_UI_Elt_default {
      static {
        a43 = m(this);
      }
      treeNode;
      holeUpdates;
      origHoles;
      RemoveAllUpdated() {
        this.treeNode.Holes = this.origHoles;
        this.holeUpdates.Set([]);
      }
      RemoveUpdated(o) {
        const p = o.docNode;
        if (p != null && p.$ == 1) {
          const q = p.$0.ElKey;
          this.treeNode.Holes = filter((r) => r.ElKey !== q, this.treeNode.Holes);
          this.holeUpdates.Set(filter((r) => r[0] !== q, this.holeUpdates.Get()));
        } else
          FailWith("DocUpdater.RemoveUpdated expects a single element node");
      }
      AddUpdated(o) {
        const p = o.docNode;
        if (p != null && p.$ == 1) {
          const q = p.$0;
          this.treeNode.Holes = this.treeNode.Holes.concat([q]);
          const r = this.holeUpdates.Get();
          r.push([q.ElKey, o.updates]);
          this.holeUpdates.Set(r);
        } else
          FailWith("DocUpdater.AddUpdated expects a single element node");
      }
      ClearHoles() {
        this.origHoles = [];
        this.treeNode.Holes = [];
        this.holeUpdates.Set([]);
      }
      AddHole(o) {
        this.origHoles.push(o);
        this.treeNode.Holes = this.treeNode.Holes.concat([o]);
      }
      constructor(o, p, q, r, s2) {
        let t = TreeDoc(o);
        const u = s2.View;
        const v = (B2) => B2[1];
        const w = (B2) => map2(v, B2);
        const x = Const();
        const y = (B2) => TreeReduce(x, Map2Unit2, B2);
        let z = BindInner((B2) => y(w(B2)), u);
        let A = Map2Unit2(p, z);
        super(t, A, q, r);
        this.treeNode = o;
        this.holeUpdates = s2;
        this.origHoles = this.treeNode.Holes;
      }
    };
  });
  var WebSharper_UI_Client_EltUpdater_default = a43;

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Elt.js
  var a44 = Lazy((E) => {
    Force(WebSharper_UI_Doc_default);
    return class F extends WebSharper_UI_Doc_default {
      static {
        a44 = E(this);
      }
      docNode_1;
      updates_1;
      elt;
      rvUpdates;
      SetStyle(G, H) {
        this.elt.style[G] = H;
      }
      HasClass(G) {
        return new RegExp("(\\s|^)" + G + "(\\s|$)").test(this.elt.className);
      }
      GetProperty(G) {
        return this.elt[G];
      }
      SetProperty(G, H) {
        this.elt[G] = H;
      }
      RemoveAttribute(G) {
        this.elt.removeAttribute(G);
      }
      HasAttribute(G) {
        return this.elt.hasAttribute(G);
      }
      GetAttribute(G) {
        return this.elt.getAttribute(G);
      }
      SetAttribute(G, H) {
        this.elt.setAttribute(G, H);
      }
      SetText(G) {
        const H = this.docNode_1;
        if (H != null && H.$ == 1)
          H.$0.Children = null;
        else
          H != null && H.$ == 6 ? (H.$0.Els = [], this.ClearHoles()) : FailWith("Invalid docNode in Elt");
        this.rvUpdates.Value = Const();
        this.elt.textContent = G;
      }
      GetText() {
        return this.elt.textContent;
      }
      SetValue(G) {
        this.elt.value = G;
      }
      GetValue() {
        return this.elt.value;
      }
      Id() {
        return this.elt.id;
      }
      Html() {
        return this.elt.outerHTML;
      }
      Clear() {
        const G = this.docNode_1;
        if (G != null && G.$ == 1)
          G.$0.Children = null;
        else
          G != null && G.$ == 6 ? (G.$0.Els = [], this.ClearHoles()) : FailWith("Invalid docNode in Elt");
        this.rvUpdates.Value = Const();
        while (this.elt.hasChildNodes())
          this.elt.removeChild(this.elt.firstChild);
      }
      Prepend(G) {
        let H;
        const I = this.docNode_1;
        if (I != null && I.$ == 1) {
          const J = I.$0;
          J.Children = AppendDoc(G.docNode, J.Children);
          const K = this.elt.firstChild;
          let L = Equals(K, null) ? null : K;
          H = InsertDoc(this.elt, G.docNode, L);
        } else if (I != null && I.$ == 6) {
          I.$0;
          const M = this.elt.insertBefore(globalThis.document.createTextNode(""), this.elt.firstChild);
          const N = InsertBeforeDelim(M, G.docNode);
          H = this.AddHole(a40.New(Empty2(this.elt), G.docNode, Some([N, M]), this.elt, Int(), null));
        } else
          H = FailWith("Invalid docNode in Elt");
        this.rvUpdates.Value = Map2Unit2(this.rvUpdates.c, G.updates);
      }
      Append(G) {
        let H;
        const I = this.docNode_1;
        if (I != null && I.$ == 1) {
          const J = I.$0;
          H = (J.Children = AppendDoc(J.Children, G.docNode), InsertDoc(this.elt, G.docNode, null));
        } else if (I != null && I.$ == 6) {
          I.$0;
          const K = this.elt.appendChild(globalThis.document.createTextNode(""));
          const L = InsertBeforeDelim(K, G.docNode);
          H = this.AddHole(a40.New(Empty2(this.elt), G.docNode, Some([L, K]), this.elt, Int(), null));
        } else
          H = FailWith("Invalid docNode in Elt");
        this.rvUpdates.Value = Map2Unit2(this.rvUpdates.c, G.updates);
      }
      static TreeNode(G, H) {
        const I = a42.Create(H);
        let J = TreeDoc(G);
        const K = map2((N) => Updates(N[1]), G.Attrs);
        let L = TreeReduce(Const(), Map2Unit2, K);
        let M = Map2Unit2(L, I.v);
        return new F(J, M, get(G.Els, 0), I);
      }
      static New(G, H, I) {
        const J = CreateElemNode(G, H, I.docNode);
        const K = a42.Create(I.updates);
        return new F(ElemDoc(J), Map2Unit2(Updates(J.Attr), K.v), G, K);
      }
      ToUpdater() {
        let G;
        const H = this.docNode_1;
        if (H != null && H.$ == 1) {
          let I = [this.elt];
          let J = [[this.elt, H.$0.Attr]];
          const K = Some(this.elt);
          let L = { Els: I, Dirty: true, Holes: [], Attrs: J, Render: null ? null.$0 : void 0, El: K ? K.$0 : void 0 };
          G = DeleteEmptyFields(L, ["Render", "El"]);
        } else
          G = H != null && H.$ == 6 ? H.$0 : FailWith("Invalid docNode in Elt");
        return new WebSharper_UI_Client_EltUpdater_default(G, this.updates_1, this.elt, this.rvUpdates, WebSharper_UI_Var_default.Create_1([]));
      }
      OnAfterRenderView(G, H) {
        const I = Id();
        this.Append(WebSharper_UI_Doc_default.BindView((J) => {
          this.elt[I] = J;
          return WebSharper_UI_Doc_default.Empty;
        }, G));
        return this.OnAfterRenderu0027((J) => {
          H(J, J[I]);
        });
      }
      OnAfterRender(G) {
        return this.OnAfterRenderu0027(G);
      }
      OnAfterRenderu0027(G) {
        let H, I, J;
        const K = this.docNode_1;
        if (K != null && K.$ == 1) {
          const L = K.$0;
          const M = GetOptional(L.Render);
          if (M != null && M.$ == 1) {
            const N = M.$0;
            H = Some((R) => {
              N(R);
              G(R);
            });
          } else
            H = Some(G);
          I = SetOptional(L, "Render", H);
        } else if (K != null && K.$ == 6) {
          const O = K.$0;
          const P = GetOptional(O.Render);
          if (P != null && P.$ == 1) {
            const Q = P.$0;
            J = Some((R) => {
              Q(R);
              G(R);
            });
          } else
            J = Some(G);
          I = SetOptional(O, "Render", J);
        } else
          I = FailWith("Invalid docNode in Elt");
        return this;
      }
      onView(G, H, I) {
        const J = I(this.elt);
        this.elt.addEventListener(G, (K) => Get2(J(K), H), false);
        return this;
      }
      on(G, H) {
        this.elt.addEventListener(G, (I) => H(this.elt, I), false);
        return this;
      }
      ClearHoles() {
        const G = this.docNode_1;
        if (G != null && G.$ == 6)
          G.$0.Holes = [];
      }
      AddHole(G) {
        const H = this.docNode_1;
        if (H != null && H.$ == 6)
          H.$0.Holes.push(G);
      }
      constructor(G, H, I, J) {
        super(G, H);
        this.docNode_1 = G;
        this.updates_1 = H;
        this.elt = I;
        this.rvUpdates = J;
      }
    };
  });
  var WebSharper_UI_Elt_default = a44;

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Client.Attr.js
  function Checked(v) {
    return ValueWith(BoolCheckedApply(), v);
  }
  function FloatValue(v) {
    return ValueWith(FloatApplyChecked(), v);
  }
  function FloatValueUnchecked(v) {
    return ValueWith(FloatApplyUnchecked(), v);
  }
  function IntValue(v) {
    return ValueWith(IntApplyChecked(), v);
  }
  function IntValueUnchecked(v) {
    return ValueWith(IntApplyUnchecked(), v);
  }
  function FileValue(v) {
    return ValueWith(FileApplyUnchecked(), v);
  }
  function DateTimeValue(v) {
    return ValueWith(DateTimeApplyUnchecked(), v);
  }
  function Value(v) {
    return ValueWith(StringApply(), v);
  }
  function ValueWith(v, w) {
    const x = v(w);
    return AppendTree(a37.A3(x[0]), DynamicCustom(x[1], x[2]));
  }
  function DynamicProp(v, w) {
    return Dynamic(w, (x) => (y) => {
      x[v] = y;
    });
  }
  function OnAfterRender(v) {
    return a37.A4(v);
  }
  function HandlerView(v, w, x) {
    return a37.A3((y) => {
      const z = x(y);
      y.addEventListener(v, (A) => Get2(z(A), w), false);
    });
  }
  function Handler(v, w) {
    return a37.A3((x) => {
      x.addEventListener(v, (y) => w(x)(y), false);
    });
  }
  function DynamicCustom(v, w) {
    return Dynamic(w, v);
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Abbrev.Mailbox.js
  function StartProcessor(f) {
    const g = [0];
    function h() {
      const i = () => {
        const j = () => {
          const k = g[0];
          return Equals(k, 1) ? (g[0] = 0, Zero()) : Equals(k, 2) ? (g[0] = 1, h()) : Zero();
        };
        return Bind(f, (k, l) => j(k)(l));
      };
      return Delay((j, k) => i(j)(k));
    }
    return () => {
      const i = g[0];
      if (Equals(i, 0)) {
        g[0] = 1;
        Start(h(), null);
      } else
        Equals(i, 1) ? g[0] = 2 : void 0;
    };
  }

  // ../../../../private/tmp/counter-only/out/WebSharper.UI/WebSharper.UI.Doc.js
  var a45 = Lazy((bo) => class bp extends a {
    static {
      a45 = bo(this);
    }
    docNode;
    updates;
    static SvgElementMixed(bq, br) {
      const bs = a45.MixedNodes(br);
      return a45.SvgElement(bq, bs[0], bs[1]);
    }
    static SvgElement(bq, br, bs) {
      const bt = a37.Concat(br);
      const bu = a45.Concat(bs);
      return WebSharper_UI_Elt_default.New(globalThis.document.createElementNS("http://www.w3.org/2000/svg", bq), bt, bu);
    }
    static ElementMixed(bq, br) {
      const bs = a45.MixedNodes(br);
      return a45.Element(bq, bs[0], bs[1]);
    }
    static ConcatMixed(bq) {
      return a45.Concat(map(a45.ToMixedDoc, bq));
    }
    static MixedNodes(bq) {
      let br;
      const bs = MarkResizable([]);
      const bt = MarkResizable([]);
      const bu = Get(bq);
      try {
        while (bu.MoveNext()) {
          const bv = bu.Current;
          if (bv instanceof a37)
            bs.push(bv);
          else
            bt.push(a45.ToMixedDoc(bv));
        }
        br = void 0;
      } finally {
        const bw = bu;
        if (typeof bw == "object" && isIDisposable(bw))
          bu.Dispose();
      }
      return [bs, bt];
    }
    static ToMixedDoc(bq) {
      return bq instanceof bp ? bq : typeof bq == "string" ? a45.TextNode(bq) : bq instanceof Element ? a45.StaticProxy(bq) : typeof bq == "function" ? a45.EmbedView(Map4(a45.ToMixedDoc, bq)) : bq instanceof a25 ? a45.EmbedView(Map4(a45.ToMixedDoc, bq.View)) : Equals(bq, null) ? a45.Empty : a45.TextNode(String(bq));
    }
    static Element(bq, br, bs) {
      const bt = a37.Concat(br);
      const bu = a45.Concat(bs);
      return WebSharper_UI_Elt_default.New(globalThis.document.createElement(bq), bt, bu);
    }
    static Radio(bq, br, bs) {
      const bt = globalThis.document.createElement("input");
      bt.addEventListener("click", () => bs.Set(br), false);
      const bu = DynamicProp("checked", Map4((bw) => Equals(bw, br), bs.View));
      const bv = a37.Create;
      return WebSharper_UI_Elt_default.New(bt, a37.Concat(append(ofArray([bv("type", "radio"), bv("name", bs.Id), bu]), ofSeq2(bq))), a45.Empty);
    }
    static LinkView(bq, br, bs, bt) {
      const bu = a37.Concat(append2([HandlerView("click", bs, () => () => bt), a37.Create("href", "#")], br));
      return WebSharper_UI_Elt_default.New(globalThis.document.createElement("a"), bu, a45.TextNode(bq));
    }
    static Link(bq, br, bs) {
      const bt = a37.Concat(br);
      const bu = AppendTree(a37.Create("href", "#"), bt);
      return WebSharper_UI_Elt_default.New(a45.Clickable("a", bs), bu, a45.TextNode(bq));
    }
    static ButtonView(bq, br, bs, bt) {
      const bu = a37.Concat(append2([HandlerView("click", bs, () => () => bt)], br));
      return WebSharper_UI_Elt_default.New(globalThis.document.createElement("button"), bu, a45.TextNode(bq));
    }
    static Button(bq, br, bs) {
      const bt = a37.Concat(br);
      return WebSharper_UI_Elt_default.New(a45.Clickable("button", bs), bt, a45.TextNode(bq));
    }
    static Clickable(bq, br) {
      const bs = globalThis.document.createElement(bq);
      bs.addEventListener("click", (bt) => {
        bt.preventDefault();
        return br();
      }, false);
      return bs;
    }
    static CheckBoxGroup(bq, br, bs) {
      const bt = (bv) => Equals(br, bv);
      let bu = WebSharper_UI_Var_default.Lens(bs, (bv) => exists3(bt, bv), (bv, bw) => bw ? exists3((bx) => Equals(br, bx), bv) ? bv : a9.Cons(br, bv) : filter2((bx) => !Equals(br, bx), bv));
      return a45.CheckBox(bq, bu);
    }
    static CheckBox(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [a37.Create("type", "checkbox"), Checked(br)]));
    }
    static SelectDynOptional(bq, br, bs, bt, bu) {
      return a45.SelectDyn(bq, (bv) => bv != null && bv.$ == 1 ? bs(bv.$0) : br, Map4((bv) => a9.Cons(null, map3((bw) => Some(bw), bv)), bt), bu);
    }
    static SelectOptional(bq, br, bs, bt, bu) {
      return a45.Select(bq, (bv) => bv != null && bv.$ == 1 ? bs(bv.$0) : br, a9.Cons(null, map3((bv) => Some(bv), bt)), bu);
    }
    static SelectMultiple(bq, br, bs, bt) {
      return a45.SelectMultipleImpl(bq, (bu) => {
        bu[0] = bs;
        return a45.Concat(mapi((bv, bw) => a45.Element("option", ofArray([a37.Create("value", String(bv))]), ofArray([a45.TextNode(br(bw))])), bs));
      }, bt);
    }
    static SelectMultipleDyn(bq, br, bs, bt) {
      return a45.SelectMultipleImpl(bq, (bu) => a45.Convert((bv) => a45.Element("option", ofArray([a37.Create("value", String(bv[0]))]), ofArray([a45.TextNode(br(bv[1]))])), Map4((bv) => {
        bu[0] = bv;
        return mapi2((bw, bx) => [bw, bx], bv);
      }, bs)), bt);
    }
    static Select(bq, br, bs, bt) {
      return a45.SelectImpl(bq, br, (bu) => {
        bu[0] = bs;
        return a45.Concat(mapi((bv, bw) => a45.Element("option", ofArray([a37.Create("value", String(bv))]), ofArray([a45.TextNode(br(bw))])), bs));
      }, bt);
    }
    static SelectDyn(bq, br, bs, bt) {
      return a45.SelectImpl(bq, br, (bu) => a45.Convert((bv) => a45.Element("option", ofArray([a37.Create("value", String(bv[0]))]), ofArray([a45.TextNode(br(bv[1]))])), Map4((bv) => {
        bu[0] = bv;
        return mapi2((bw, bx) => [bw, bx], bv);
      }, bs)), bt);
    }
    static SelectMultipleImpl(bq, br, bs) {
      const bt = [a9.Empty];
      const bu = (bA, bB) => {
        const bC = bA.options;
        for (let bD = 0, bE = bC.length - 1; bD <= bE; bD++)
          (() => {
            const bF = bC.item(bD);
            bF.selected = contains(bt[0].get_Item(bF.index), bB);
          })();
      };
      const bv = globalThis.document.createElement("select");
      const bw = DynamicCustom((bA) => (bB) => bu(bA, bB), bs.View);
      bv.addEventListener("change", () => bs.UpdateMaybe((bA) => {
        const bB = bv.selectedOptions;
        const bC = ofSeq2(delay(() => collect((bD) => {
          const bE = bB.item(bD);
          return [bt[0].get_Item(bE.index)];
        }, range(0, bB.length - 1))));
        return Equals(bA, bC) ? null : Some(bC);
      }), false);
      const bx = AppendTree(bw, a37.Concat(bq));
      const by = AppendTree(OnAfterRender((bA) => {
        bu(bA, bs.Get());
      }), bx);
      let bz = AppendTree(a37.Create("multiple", ""), by);
      return WebSharper_UI_Elt_default.New(bv, bz, br(bt));
    }
    static SelectImpl(bq, br, bs, bt) {
      const bu = [a9.Empty];
      const bv = (bA, bB) => {
        bA.selectedIndex = findIndex((bC) => Equals(bB, bC), bu[0]);
      };
      const bw = globalThis.document.createElement("select");
      const bx = DynamicCustom((bA) => (bB) => bv(bA, bB), bt.View);
      bw.addEventListener("change", () => bt.UpdateMaybe((bA) => {
        const bB = bw.selectedIndex;
        const bC = bu[0].get_Item(bB);
        return Equals(bA, bC) ? null : Some(bC);
      }), false);
      const by = AppendTree(bx, a37.Concat(bq));
      let bz = AppendTree(OnAfterRender((bA) => {
        bv(bA, bt.Get());
      }), by);
      return WebSharper_UI_Elt_default.New(bw, bz, bs(bu));
    }
    static InputArea(bq, br) {
      return a45.InputInternal("textarea", () => append2(bq, [Value(br)]));
    }
    static RangeInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [IntValueUnchecked(br), a37.Create("type", "range")]));
    }
    static WeekInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a37.Create("type", "week")]));
    }
    static UrlInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a37.Create("type", "url")]));
    }
    static TimeInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a37.Create("type", "time")]));
    }
    static TelInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a37.Create("type", "tel")]));
    }
    static SearchInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a37.Create("type", "search")]));
    }
    static MonthInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a37.Create("type", "month")]));
    }
    static FileInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [FileValue(br), a37.Create("type", "file")]));
    }
    static EmailInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a37.Create("type", "email")]));
    }
    static DateTimeLocalInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [DateTimeValue(br), a37.Create("type", "datetime-local")]));
    }
    static DateInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a37.Create("type", "date")]));
    }
    static ColorInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a37.Create("type", "color")]));
    }
    static FloatInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [FloatValue(br), a37.Create("type", "number")]));
    }
    static FloatInputUnchecked(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [br.Get() === 0 ? a37.Create("value", "0") : EmptyAttr(), FloatValueUnchecked(br), a37.Create("type", "number")]));
    }
    static IntInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [IntValue(br), a37.Create("type", "number")]));
    }
    static IntInputUnchecked(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [br.Get() === 0 ? a37.Create("value", "0") : EmptyAttr(), IntValueUnchecked(br), a37.Create("type", "number")]));
    }
    static PasswordBox(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a37.Create("type", "password")]));
    }
    static Input(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br)]));
    }
    static InputInternal(bq, br) {
      const bs = globalThis.document.createElement(bq);
      return WebSharper_UI_Elt_default.New(bs, a37.Concat(br(bs)), a45.Empty);
    }
    static ConvertSeqVarBy(bq, br, bs) {
      return a45.Flatten(WebSharper_UI_Var_default.MapLens(bq, br, bs));
    }
    static ConvertSeqBy(bq, br, bs) {
      const bt = br;
      let bu = MapSeqCachedViewBy(bq, (bv, bw) => bt(bv)(bw), bs);
      return a45.Flatten(bu);
    }
    static ConvertSeq(bq, br) {
      return a45.Flatten(MapSeqCachedView(bq, br));
    }
    static ConvertBy(bq, br, bs) {
      return a45.Flatten(MapSeqCachedBy(bq, br, bs));
    }
    static Convert(bq, br) {
      return a45.Flatten(MapSeqCached(bq, br));
    }
    static Flatten(bq) {
      return a45.EmbedView(Map4((br) => a45.Concat(br), bq));
    }
    static TextView(bq) {
      const br = CreateTextNode();
      return a45.Mk(TextDoc(br), Map4((bs) => {
        UpdateTextNode(br, bs);
      }, bq));
    }
    static RunReplaceById(bq, br) {
      const bs = globalThis.document.getElementById(bq);
      if (Equals(bs, null))
        FailWith("invalid id: " + bq);
      else
        br.ReplaceInDom(bs);
    }
    static RunById(bq, br) {
      const bs = globalThis.document.getElementById(bq);
      if (Equals(bs, null))
        FailWith("invalid id: " + bq);
      else
        a45.Run(bs, br);
    }
    static Run(bq, br) {
      LinkElement(bq, br.docNode);
      a45.RunInPlace(false, bq, br);
    }
    static RunInPlace(bq, br, bs) {
      const bt = CreateRunState(br, bs.docNode);
      Sink(get_UseAnimations() || BatchUpdatesEnabled() ? StartProcessor(PerformAnimatedUpdate(bq, bt, bs.docNode)) : () => {
        PerformSyncUpdate(bq, bt, bs.docNode);
      }, bs.updates);
    }
    static RunPrependById(bq, br) {
      const bs = globalThis.document.getElementById(bq);
      if (Equals(bs, null))
        FailWith("invalid id: " + bq);
      else
        a45.RunPrepend(bs, br);
    }
    static RunPrepend(bq, br) {
      const bs = globalThis.document.createTextNode("");
      bq.insertBefore(bs, bq.firstChild);
      a45.RunBefore(bs, br);
    }
    static RunAppendById(bq, br) {
      const bs = globalThis.document.getElementById(bq);
      if (Equals(bs, null))
        FailWith("invalid id: " + bq);
      else
        a45.RunAppend(bs, br);
    }
    static RunAppend(bq, br) {
      const bs = globalThis.document.createTextNode("");
      bq.appendChild(bs);
      a45.RunBefore(bs, br);
    }
    static RunAfterById(bq, br) {
      const bs = globalThis.document.getElementById(bq);
      if (Equals(bs, null))
        FailWith("invalid id: " + bq);
      else
        a45.RunAfter(bs, br);
    }
    static RunAfter(bq, br) {
      const bs = globalThis.document.createTextNode("");
      bq.parentNode.insertBefore(bs, bq.nextSibling);
      a45.RunBetween(bq, bs, br);
    }
    static RunBeforeById(bq, br) {
      const bs = globalThis.document.getElementById(bq);
      if (Equals(bs, null))
        FailWith("invalid id: " + bq);
      else
        a45.RunBefore(bs, br);
    }
    static RunBefore(bq, br) {
      const bs = globalThis.document.createTextNode("");
      bq.parentNode.insertBefore(bs, bq);
      a45.RunBetween(bs, bq, br);
    }
    static RunBetween(bq, br, bs) {
      LinkPrevElement(br, bs.docNode);
      const bt = CreateDelimitedRunState(bq, br, bs.docNode);
      Sink(get_UseAnimations() || BatchUpdatesEnabled() ? StartProcessor(PerformAnimatedUpdate(false, bt, bs.docNode)) : () => {
        PerformSyncUpdate(false, bt, bs.docNode);
      }, bs.updates);
    }
    static Async(bq) {
      return a45.EmbedView(MapAsync2((br) => br, Const(bq)));
    }
    static BindView(bq, br) {
      return a45.EmbedView(Map4(bq, br));
    }
    static EmbedView(bq) {
      const br = CreateEmbedNode();
      return a45.Mk(EmbedDoc(br), Map4(() => {
      }, Bind2((bs) => {
        UpdateEmbedNode(br, bs.docNode);
        return bs.updates;
      }, bq)));
    }
    static Verbatim(bq) {
      return a45.Mk(MapTreeReduce((br) => Equals(br.nodeType, Node.TEXT_NODE) ? TextNodeDoc(br) : ElemDoc(CreateElemNode(br, EmptyAttr(), null)), null, (br, bs) => AppendDoc(br, bs), ChildrenArray(ParseHTMLIntoFakeRoot(bq))), Const());
    }
    static StaticProxy(bq) {
      return WebSharper_UI_Elt_default.New(bq, EmptyAttr(), a45.Empty);
    }
    static TextNode(bq) {
      return a45.Mk(TextNodeDoc(globalThis.document.createTextNode(bq)), Const());
    }
    static get Empty() {
      return a45.Mk(null, Const());
    }
    static Concat(bq) {
      return TreeReduce(a45.Empty, a45.Append, ofSeqNonCopying(bq));
    }
    static Append(bq, br) {
      return a45.Mk(AppendDoc(bq.docNode, br.docNode), Map2Unit2(bq.updates, br.updates));
    }
    static Mk(bq, br) {
      return new bp(bq, br);
    }
    ReplaceInDom(bq) {
      const br = globalThis.document.createTextNode("");
      bq.parentNode.replaceChild(br, bq);
      a45.RunBefore(br, this);
    }
    constructor(bq, br) {
      super();
      this.docNode = bq;
      this.updates = br;
    }
  });
  var WebSharper_UI_Doc_default = a45;

  // ../../../../private/tmp/counter-only/out/Stdlib__Printf.js
  function out(s2) {
    if (typeof process !== "undefined" && process.stdout)
      process.stdout.write(String(s2));
    else if (typeof console !== "undefined")
      console.log(String(s2));
  }
  function ap(f, args) {
    return globalThis.OCamlRuntime ? globalThis.OCamlRuntime.caml_apply(f, args) : f.apply(null, args);
  }
  function feed(cont, rest) {
    while (rest.length && typeof cont === "function")
      cont = cont(rest.shift());
    return cont;
  }
  function pstr(a47) {
    return a47 === null || a47 === void 0 ? "" : String(a47);
  }
  function pquote(s2) {
    var r = '"';
    for (var i = 0; i < s2.length; i++) {
      var c2 = s2.charCodeAt(i);
      if (c2 === 34)
        r += '\\"';
      else if (c2 === 92)
        r += "\\\\";
      else if (c2 === 10)
        r += "\\n";
      else if (c2 === 9)
        r += "\\t";
      else if (c2 < 32 || c2 > 126)
        r += "\\" + (c2 < 10 ? "00" : c2 < 100 ? "0" : "") + c2;
      else
        r += s2[i];
    }
    return r + '"';
  }
  function ppad(s2, padding) {
    if (typeof padding !== "object")
      return s2;
    if (padding.$tag === 0) {
      var padty = padding["0"], n = padding["1"];
      if (s2.length >= n)
        return s2;
      var fill = padty === 2 ? "0" : " ";
      var p = fill.repeat(n - s2.length);
      return padty === 0 ? s2 + p : p + s2;
    }
    return s2;
  }
  function pprec(prec) {
    return typeof prec === "object" && prec.$tag === 0 ? prec["0"] : -1;
  }
  function pint(a47, conv, padding, prec) {
    var n = a47 | 0, neg = n < 0, u = neg ? -n : n, base = 10, upper = false;
    if (conv === 6 || conv === 7)
      base = 16;
    else if (conv === 8 || conv === 9) {
      base = 16;
      upper = true;
    } else if (conv === 10 || conv === 11)
      base = 8;
    var s2 = u.toString(base);
    if (upper)
      s2 = s2.toUpperCase();
    var md = pprec(prec);
    if (md > 0) {
      while (s2.length < md)
        s2 = "0" + s2;
    }
    var sign = neg ? "-" : conv === 1 || conv === 4 || conv === 14 ? "+" : conv === 2 || conv === 5 ? " " : "";
    var prefix = conv === 7 ? "0x" : conv === 9 ? "0X" : conv === 11 ? "0o" : "";
    return ppad(sign + prefix + s2, padding);
  }
  function pbig(a47, conv, padding, prec) {
    var v = typeof a47 === "bigint" ? a47 : BigInt(Math.trunc(a47));
    var neg = v < 0n, u = neg ? -v : v, base = 10n;
    if (conv === 6 || conv === 7 || conv === 8 || conv === 9)
      base = 16n;
    else if (conv === 10 || conv === 11)
      base = 8n;
    var s2 = u.toString(Number(base));
    if (conv === 8 || conv === 9)
      s2 = s2.toUpperCase();
    return ppad((neg ? "-" : "") + s2, padding);
  }
  function pfloat(a47, conv, padding, prec) {
    var flag = typeof conv === "object" ? conv["0"] : 0;
    var kind = typeof conv === "object" ? conv["1"] : 0;
    var p = pprec(prec);
    if (p < 0)
      p = 6;
    var s2;
    if (kind === 1 || kind === 2)
      s2 = a47.toExponential(p);
    else if (kind === 3 || kind === 4) {
      s2 = a47.toPrecision(p + 1);
      if (s2.indexOf("e") < 0 && s2.indexOf(".") >= 0)
        s2 = s2.replace(/0+$/, "").replace(/\.$/, "");
    } else
      s2 = a47.toFixed(p);
    if (kind === 2 || kind === 4)
      s2 = s2.toUpperCase();
    if (flag === 1 && a47 >= 0)
      s2 = "+" + s2;
    else if (flag === 2 && a47 >= 0)
      s2 = " " + s2;
    return ppad(s2, padding);
  }
  function plit(l) {
    if (typeof l !== "object") {
      if (l === 3 || l === 4)
        return "\n";
      if (l === 5)
        return "@";
      if (l === 6)
        return "%";
      return "";
    }
    if (l.$tag === 0)
      return l["0"];
    if (l.$tag === 2)
      return String.fromCharCode(l["0"]);
    return "";
  }
  function pwalk(fmt, emit, done) {
    if (typeof fmt !== "object")
      return done();
    var tag = fmt.$tag;
    switch (tag) {
      case 11:
        emit(fmt["0"]);
        return pwalk(fmt["1"], emit, done);
      case 12:
        emit(String.fromCharCode(fmt["0"]));
        return pwalk(fmt["1"], emit, done);
      case 0:
        return function(a47) {
          emit(String.fromCharCode(a47));
          return pwalk(fmt["0"], emit, done);
        };
      case 1:
        return function(a47) {
          emit(String.fromCharCode(a47));
          return pwalk(fmt["0"], emit, done);
        };
      case 2:
        return function(a47) {
          emit(ppad(pstr(a47), fmt["0"]));
          return pwalk(fmt["1"], emit, done);
        };
      case 3:
        return function(a47) {
          emit(ppad(pquote(pstr(a47)), fmt["0"]));
          return pwalk(fmt["1"], emit, done);
        };
      case 4:
      case 5:
        return function(a47) {
          emit(pint(a47, fmt["0"], fmt["1"], fmt["2"]));
          return pwalk(fmt["3"], emit, done);
        };
      case 6:
      case 7:
        return function(a47) {
          emit(pbig(a47, fmt["0"], fmt["1"], fmt["2"]));
          return pwalk(fmt["3"], emit, done);
        };
      case 8:
        return function(a47) {
          emit(pfloat(a47, fmt["0"], fmt["1"], fmt["2"]));
          return pwalk(fmt["3"], emit, done);
        };
      case 9:
        return function(a47) {
          emit(a47 ? "true" : "false");
          return pwalk(fmt["1"], emit, done);
        };
      case 10:
        return pwalk(fmt["0"], emit, done);
      case 17:
        emit(plit(fmt["0"]));
        return pwalk(fmt["1"], emit, done);
      case 18:
        return pwalk(fmt["1"], emit, done);
      case 15:
        return function(f) {
          return function(x) {
            ap(f, [0, x]);
            return pwalk(fmt["0"], emit, done);
          };
        };
      case 16:
        return function(f) {
          ap(f, [0]);
          return pwalk(fmt["0"], emit, done);
        };
      default:
        throw new Error("Printf: unsupported directive tag " + tag);
    }
  }
  var s = { $tag: 0 };
  s[0] = function() {
    throw new Error("Printf field 0 not implemented");
  };
  s[1] = function() {
    throw new Error("Printf field 1 not implemented");
  };
  s[2] = function() {
    throw new Error("Printf field 2 not implemented");
  };
  s[3] = function() {
    throw new Error("Printf field 3 not implemented");
  };
  s[4] = function() {
    throw new Error("Printf field 4 not implemented");
  };
  s[5] = function() {
    throw new Error("Printf field 5 not implemented");
  };
  s[6] = function() {
    throw new Error("Printf field 6 not implemented");
  };
  s[7] = function() {
    throw new Error("Printf field 7 not implemented");
  };
  s[8] = function() {
    throw new Error("Printf field 8 not implemented");
  };
  s[9] = function() {
    throw new Error("Printf field 9 not implemented");
  };
  s[10] = function() {
    throw new Error("Printf field 10 not implemented");
  };
  s[11] = function() {
    throw new Error("Printf field 11 not implemented");
  };
  s[12] = function() {
    throw new Error("Printf field 12 not implemented");
  };
  s[0] = function(ch, fmt) {
    var emit = function(s2) {
      out(s2);
      return 0;
    };
    return feed(pwalk(fmt["0"], emit, function() {
      return 0;
    }), Array.prototype.slice.call(arguments, 2));
  };
  s[1] = function(fmt) {
    var emit = function(s2) {
      out(s2);
      return 0;
    };
    return feed(pwalk(fmt["0"], emit, function() {
      return 0;
    }), Array.prototype.slice.call(arguments, 1));
  };
  s[2] = function(fmt) {
    var emit = function(s2) {
      out(s2);
      return 0;
    };
    return feed(pwalk(fmt["0"], emit, function() {
      return 0;
    }), Array.prototype.slice.call(arguments, 1));
  };
  s[3] = function(fmt) {
    var buf = "";
    var emit = function(s2) {
      buf += s2;
      return 0;
    };
    return feed(pwalk(fmt["0"], emit, function() {
      return buf;
    }), Array.prototype.slice.call(arguments, 1));
  };
  s[4] = function(buf, fmt) {
    var emit = function(s2) {
      for (var i = 0; i < s2.length; i++)
        buf.push(s2.charCodeAt(i));
      return 0;
    };
    return feed(pwalk(fmt["0"], emit, function() {
      return 0;
    }), Array.prototype.slice.call(arguments, 2));
  };
  s[5] = function(fmt) {
    feed(pwalk(fmt["0"], function() {
      return 0;
    }, function() {
      return 0;
    }), Array.prototype.slice.call(arguments, 1));
    return 0;
  };
  s[7] = function(k, ch, fmt) {
    var emit = function(s2) {
      out(s2);
      return 0;
    };
    feed(pwalk(fmt["0"], emit, function() {
      return 0;
    }), Array.prototype.slice.call(arguments, 3));
    return ap(k, [ch]);
  };
  s[8] = function(k, fmt) {
    feed(pwalk(fmt["0"], function() {
      return 0;
    }, function() {
      return 0;
    }), Array.prototype.slice.call(arguments, 2));
    return ap(k, [0]);
  };
  s[9] = function(k, fmt) {
    var buf = "";
    var emit = function(s2) {
      buf += s2;
      return 0;
    };
    feed(pwalk(fmt["0"], emit, function() {
      return 0;
    }), Array.prototype.slice.call(arguments, 2));
    return ap(k, [buf]);
  };
  s[10] = function(k, buf, fmt) {
    var emit = function(s2) {
      for (var i = 0; i < s2.length; i++)
        buf.push(s2.charCodeAt(i));
      return 0;
    };
    feed(pwalk(fmt["0"], emit, function() {
      return 0;
    }), Array.prototype.slice.call(arguments, 3));
    return ap(k, [buf]);
  };
  s[11] = function(k, fmt) {
    feed(pwalk(fmt["0"], function() {
      return 0;
    }, function() {
      return 0;
    }), Array.prototype.slice.call(arguments, 2));
    return ap(k, [0]);
  };
  s[12] = function(k, fmt) {
    var buf = "";
    var emit = function(s2) {
      buf += s2;
      return 0;
    };
    feed(pwalk(fmt["0"], emit, function() {
      return 0;
    }), Array.prototype.slice.call(arguments, 2));
    return ap(k, [buf]);
  };
  var Stdlib_Printf_default = s;

  // ../../../../private/tmp/counter-only/out/Main.js
  if (!globalThis.OCamlRuntime) {
    (function() {
      "use strict";
      var ooId = 0;
      var namedValues = {};
      function out2(s2) {
        if (typeof process !== "undefined" && process.stdout && process.stdout.write) {
          process.stdout.write(s2);
        } else if (typeof console !== "undefined" && console.log) {
          console.log(s2);
        }
      }
      var KIND_NUM = 0, KIND_STR = 1, KIND_BLOCK = 2, KIND_FUN = 3, KIND_NULL = 4, KIND_OTHER = 5;
      function kind(x) {
        if (x === null || x === void 0)
          return KIND_NULL;
        var t = typeof x;
        if (t === "number")
          return KIND_NUM;
        if (t === "string")
          return KIND_STR;
        if (t === "function")
          return KIND_FUN;
        if (Array.isArray(x))
          return KIND_BLOCK;
        if (t === "object" && x.$tag !== void 0)
          return KIND_BLOCK;
        return KIND_OTHER;
      }
      function blockTag(x) {
        return Array.isArray(x) ? 0 : x.$tag | 0;
      }
      function blockSize(x) {
        if (Array.isArray(x))
          return x.length;
        var n = 0;
        for (var k in x)
          if (/^[0-9]+$/.test(k))
            n++;
        return n;
      }
      function blockField(x, i) {
        return x[i];
      }
      function caml_compare(a47, b2) {
        var ka = kind(a47), kb = kind(b2);
        if (ka !== kb)
          return ka < kb ? -1 : 1;
        switch (ka) {
          case KIND_NUM:
            return a47 < b2 ? -1 : a47 > b2 ? 1 : 0;
          case KIND_STR:
            return a47 < b2 ? -1 : a47 > b2 ? 1 : 0;
          case KIND_BLOCK: {
            var ta = blockTag(a47), tb = blockTag(b2);
            if (ta !== tb)
              return ta < tb ? -1 : 1;
            var na = blockSize(a47), nb = blockSize(b2), n = na < nb ? na : nb;
            for (var i = 0; i < n; i++) {
              var r = caml_compare(blockField(a47, i), blockField(b2, i));
              if (r !== 0)
                return r;
            }
            return na < nb ? -1 : na > nb ? 1 : 0;
          }
          case KIND_FUN:
            throw new globalThis.Error("compare: functional value");
          default:
            return 0;
        }
      }
      function caml_closure(arity, f) {
        f.arity = arity;
        return f;
      }
      function caml_apply_core(f, args) {
        if (typeof f !== "function")
          throw new globalThis.Error("apply: not a function");
        var arity = f.arity;
        if (arity === void 0)
          return f.apply(null, args);
        if (args.length === arity)
          return f.apply(null, args);
        if (args.length < arity) {
          var partial = function() {
            return caml_apply_core(f, args.concat(Array.prototype.slice.call(arguments)));
          };
          partial.arity = arity - args.length;
          return partial;
        }
        return caml_apply_core(f.apply(null, args.slice(0, arity)), args.slice(arity));
      }
      function caml_trampoline(res) {
        while (res && res.tramp)
          res = caml_apply_core(res.tramp, res.args);
        return res;
      }
      function caml_apply(f, args) {
        return caml_trampoline(caml_apply_core(f, args));
      }
      function caml_to_js(f) {
        if (typeof f !== "function" || f.arity === void 0)
          return f;
        var arity = f.arity;
        function curried() {
          var args = Array.prototype.slice.call(arguments);
          if (args.length >= arity)
            return caml_apply(f, args);
          if (arity === 1 && args.length === 0)
            return caml_apply(f, [0]);
          return function() {
            return curried.apply(null, args.concat(Array.prototype.slice.call(arguments)));
          };
        }
        curried.arity = arity;
        return curried;
      }
      function caml_list_to_array(xs) {
        var a47 = [];
        while (typeof xs === "object" && xs !== null) {
          a47.push(xs[0]);
          xs = xs[1];
        }
        return a47;
      }
      function seqNodes(v) {
        var a47 = [];
        if (v !== null && v !== void 0) {
          if (typeof v.GetEnumerator === "function") {
            var e = v.GetEnumerator();
            try {
              while (e.MoveNext())
                a47.push(e.Current);
            } finally {
              if (typeof e.Dispose === "function")
                e.Dispose();
            }
          } else if (typeof v.length === "number") {
            for (var i = 0; i < v.length; i++)
              a47.push(v[i]);
          }
        }
        return a47;
      }
      function js_to_caml_seq(v) {
        var a47 = seqNodes(v);
        var mk = function(i) {
          return function() {
            return i < a47.length ? { $tag: 0, "0": a47[i], "1": mk(i + 1) } : 0;
          };
        };
        return mk(0);
      }
      function caml_seq_to_js(s2) {
        var a47 = [];
        var node = s2();
        while (node !== 0) {
          a47.push(node[0]);
          node = node[1]();
        }
        return a47;
      }
      function caml_to_js_seq(f, kinds, ret) {
        var g = caml_to_js(f);
        var isSeq = function(k) {
          return k === "seq";
        };
        if (!kinds.some(isSeq) && !isSeq(ret))
          return g;
        var n = kinds.length;
        function wrapped() {
          var args = Array.prototype.slice.call(arguments);
          for (var i = 0; i < n && i < args.length; i++) {
            if (isSeq(kinds[i]))
              args[i] = js_to_caml_seq(args[i]);
          }
          var r = g.apply(null, args);
          return isSeq(ret) ? caml_seq_to_js(r) : r;
        }
        wrapped.arity = g.arity;
        return wrapped;
      }
      function rpcMeta(name, metaJson) {
        var cache = globalThis.OCamlRuntime.__rpcMetaCache || (globalThis.OCamlRuntime.__rpcMetaCache = {});
        var m = cache[name];
        if (!m) {
          m = cache[name] = JSON.parse(metaJson);
        }
        return m;
      }
      function registerTypes(json) {
        var reg = globalThis.OCamlRuntime.__types || (globalThis.OCamlRuntime.__types = {});
        var arr = JSON.parse(json);
        for (var i = 0; i < arr.length; i++)
          reg[arr[i].id] = arr[i];
      }
      function resolveType(meta, c2) {
        if (c2.id !== void 0) {
          var reg = globalThis.OCamlRuntime.__types || {};
          var d = reg[c2.id];
          if (!d)
            throw new globalThis.Error("unknown rpc type " + c2.id);
          return d;
        }
        var types = meta.types || [];
        for (var i = 0; i < types.length; i++)
          if (types[i].key === c2.key)
            return types[i];
        throw new globalThis.Error("unknown rpc type " + c2.key);
      }
      function marshalOut(meta, c2, v) {
        switch (c2.k) {
          case "int":
          case "float":
          case "string":
            return v;
          case "bool":
            return !!v;
          case "char":
            return String.fromCharCode(v);
          case "unit":
            return null;
          case "list": {
            var a47 = [];
            while (typeof v === "object" && v !== null) {
              a47.push(marshalOut(meta, c2.e, v["0"]));
              v = v["1"];
            }
            return a47;
          }
          case "option":
            return v === 0 ? null : marshalOut(meta, c2.e, v["0"]);
          case "array": {
            var r = [];
            for (var i = 0; i < v.length; i++)
              r.push(marshalOut(meta, c2.e, v[i]));
            return r;
          }
          case "tuple": {
            var r = [];
            for (var i = 0; i < c2.e.length; i++)
              r.push(marshalOut(meta, c2.e[i], v[String(i)]));
            return r;
          }
          case "named": {
            var d = resolveType(meta, c2);
            if (d.kind === "record") {
              var o = {};
              for (var i = 0; i < d.fields.length; i++)
                o[d.fields[i][0]] = marshalOut(meta, d.fields[i][1], v[String(i)]);
              return o;
            }
            var cases = d.cases;
            if (typeof v !== "object" || v === null) {
              for (var i = 0; i < cases.length; i++)
                if (cases[i][2].length === 0 && cases[i][1] === v)
                  return { $: cases[i][0] };
              throw new globalThis.Error("bad variant tag " + v);
            }
            for (var i = 0; i < cases.length; i++)
              if (cases[i][2].length > 0 && cases[i][1] === v.$tag) {
                var o = { $: cases[i][0] };
                var args = cases[i][2];
                for (var j = 0; j < args.length; j++)
                  o["$" + j] = marshalOut(meta, args[j], v[String(j)]);
                return o;
              }
            throw new globalThis.Error("bad variant tag " + v.$tag);
          }
        }
        throw new globalThis.Error("marshalOut: " + c2.k);
      }
      function marshalIn(meta, c2, v) {
        switch (c2.k) {
          case "int":
          case "float":
          case "string":
            return v;
          case "bool":
            return v ? 1 : 0;
          case "char":
            return v.charCodeAt(0);
          case "unit":
            return 0;
          case "list": {
            var r = 0;
            for (var i = v.length - 1; i >= 0; i--)
              r = { $tag: 0, "0": marshalIn(meta, c2.e, v[i]), "1": r };
            return r;
          }
          case "option":
            return v === null || v === void 0 ? 0 : { $tag: 0, "0": marshalIn(meta, c2.e, v) };
          case "array": {
            var r = [];
            for (var i = 0; i < v.length; i++)
              r.push(marshalIn(meta, c2.e, v[i]));
            return r;
          }
          case "tuple": {
            var o = { $tag: 0 };
            for (var i = 0; i < c2.e.length; i++)
              o[String(i)] = marshalIn(meta, c2.e[i], v[i]);
            return o;
          }
          case "named": {
            var d = resolveType(meta, c2);
            if (d.kind === "record") {
              var o = { $tag: 0 };
              for (var i = 0; i < d.fields.length; i++)
                o[String(i)] = marshalIn(meta, d.fields[i][1], v[d.fields[i][0]]);
              return o;
            }
            var cases = d.cases;
            for (var i = 0; i < cases.length; i++)
              if (cases[i][0] === v.$) {
                var tag = cases[i][1];
                var args = cases[i][2];
                if (args.length === 0)
                  return tag;
                var o = { $tag: tag };
                for (var j = 0; j < args.length; j++)
                  o[String(j)] = marshalIn(meta, args[j], v["$" + j]);
                return o;
              }
            throw new globalThis.Error("bad variant case " + v.$);
          }
        }
        throw new globalThis.Error("marshalIn: " + c2.k);
      }
      function jsonMeta(metaJson) {
        var cache = globalThis.OCamlRuntime.__jsonMetaCache || (globalThis.OCamlRuntime.__jsonMetaCache = {});
        var m = cache[metaJson];
        if (!m)
          m = cache[metaJson] = JSON.parse(metaJson);
        return m;
      }
      function jsonEncode(metaJson, v) {
        var meta = jsonMeta(metaJson);
        return JSON.stringify(marshalOut(meta, meta, v));
      }
      function jsonDecode(metaJson, s2) {
        var meta = jsonMeta(metaJson);
        return marshalIn(meta, meta, JSON.parse(s2));
      }
      function exported(block, idx, metaJson, isFn, args) {
        var cache = globalThis.OCamlRuntime.__rpcMetaCache || (globalThis.OCamlRuntime.__rpcMetaCache = {});
        var meta = cache[metaJson] || (cache[metaJson] = JSON.parse(metaJson));
        var v = block[idx];
        var res;
        if (isFn) {
          var ocamlArgs = [];
          for (var i = 0; i < args.length; i++)
            ocamlArgs.push(marshalIn(meta, meta.args[i], args[i]));
          res = caml_apply(v, ocamlArgs);
        } else {
          res = v;
        }
        return marshalOut(meta, meta.result, res);
      }
      function registerClient(key, fn) {
        var store = globalThis.OCamlRuntime.clientCode || (globalThis.OCamlRuntime.clientCode = {});
        store[key] = fn;
      }
      function hydrate() {
        var doc = globalThis.document;
        if (!doc)
          return 0;
        var store = globalThis.OCamlRuntime.clientCode || {};
        var nodes = doc.querySelectorAll("[data-ws-key]");
        var n = 0;
        for (var i = 0; i < nodes.length; i++) {
          var fn = store[nodes[i].getAttribute("data-ws-key")];
          if (fn) {
            nodes[i].textContent = "";
            caml_apply(fn, [0]);
            n++;
          }
        }
        attachEvents();
        return n;
      }
      function attachEvents(root) {
        var doc = root || globalThis.document;
        if (!doc || !doc.querySelectorAll)
          return 0;
        var store = globalThis.OCamlRuntime.clientCode || {};
        var nodes = doc.querySelectorAll("*");
        var n = 0;
        for (var i = 0; i < nodes.length; i++) {
          var el = nodes[i];
          if (el.__wsEventsAttached)
            continue;
          var attrs = el.attributes;
          if (!attrs)
            continue;
          var attached = 0;
          for (var j = 0; j < attrs.length; j++) {
            var name = attrs[j].name;
            if (name.length <= 5 || name.lastIndexOf("ws-on", 0) !== 0)
              continue;
            var fn = store[attrs[j].value];
            if (!fn)
              continue;
            (function(el2, ev, fn2) {
              el2.addEventListener(ev, function(e) {
                caml_apply(fn2, [el2, e]);
              });
            })(el, name.slice(5), fn);
            attached++;
          }
          if (attached > 0) {
            el.__wsEventsAttached = true;
            n += attached;
          }
        }
        return n;
      }
      function registerRpc(name, metaJson, fn) {
        var store = globalThis.OCamlRuntime.__serverRpc || (globalThis.OCamlRuntime.__serverRpc = {});
        store[name] = { fn, meta: rpcMeta(name, metaJson) };
      }
      function rpcCall(name, metaJson, args) {
        var meta = rpcMeta(name, metaJson);
        var extArgs = args.map(function(a47, i) {
          return marshalOut(meta, meta.args[i], a47);
        });
        var payload = JSON.stringify({ name, args: extArgs });
        return globalThis.OCamlRuntime.rpcTransport(payload).then(function(response) {
          return marshalIn(meta, meta.result, JSON.parse(response).result);
        });
      }
      function rpcTransport(payload) {
        var endpoint = globalThis.OCamlRuntime.rpcEndpoint;
        if (endpoint) {
          return fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload
          }).then(function(response) {
            return response.text();
          });
        }
        return Promise.resolve().then(function() {
          var p = JSON.parse(payload);
          var entry = (globalThis.OCamlRuntime.__serverRpc || {})[p.name];
          var meta = entry.meta;
          var ocamlArgs = p.args.map(function(a47, i) {
            return marshalIn(meta, meta.args[i], a47);
          });
          return Promise.resolve(entry.fn.apply(null, ocamlArgs)).then(function(result) {
            return JSON.stringify({ result: marshalOut(meta, meta.result, result) });
          });
        });
      }
      function async_bind(p, cb) {
        return p.then(function(v) {
          return caml_to_js(cb)(v);
        });
      }
      function async_map(f, p) {
        return p.then(function(v) {
          return caml_to_js(f)(v);
        });
      }
      function async_run(f, p) {
        p.then(function(v) {
          caml_to_js(f)(v);
        });
        return 0;
      }
      function caml_trampoline_return(f, args) {
        return { tramp: f, args };
      }
      function caml_hash(x) {
        var h = 0;
        function mix(v) {
          h = Math.imul(h, 31) + (v | 0) | 0;
        }
        function walk(v) {
          switch (kind(v)) {
            case KIND_NUM:
              mix(v);
              break;
            case KIND_STR:
              mix(1);
              for (var i = 0; i < v.length; i++)
                mix(v.charCodeAt(i));
              break;
            case KIND_BLOCK: {
              mix(2 + blockTag(v));
              for (var j = 0, n = blockSize(v); j < n; j++)
                walk(blockField(v, j));
              break;
            }
            default:
              mix(7);
          }
        }
        walk(x);
        return h & 1073741823;
      }
      globalThis.OCamlRuntime = {
        caml_fresh_oo_id: function() {
          return ++ooId;
        },
        caml_closure,
        caml_to_js,
        caml_list_to_array,
        js_to_caml_seq,
        caml_seq_to_js,
        caml_to_js_seq,
        registerTypes,
        jsonEncode,
        jsonDecode,
        registerRpc,
        rpcCall,
        rpcTransport,
        async_bind,
        async_map,
        async_run,
        exported,
        registerClient,
        hydrate,
        attachEvents,
        caml_apply,
        caml_trampoline,
        caml_trampoline_return,
        caml_obj_tag: function(x) {
          switch (kind(x)) {
            case KIND_NUM:
              return 1e3;
            case KIND_STR:
              return 252;
            case KIND_FUN:
              return 247;
            case KIND_BLOCK:
              return blockTag(x);
            case KIND_NULL:
              return 1e3;
            default:
              return 248;
          }
        },
        caml_compare,
        caml_equal: function(a47, b2) {
          return caml_compare(a47, b2) === 0 ? 1 : 0;
        },
        caml_notequal: function(a47, b2) {
          return caml_compare(a47, b2) === 0 ? 0 : 1;
        },
        caml_lessthan: function(a47, b2) {
          return caml_compare(a47, b2) < 0 ? 1 : 0;
        },
        caml_lessequal: function(a47, b2) {
          return caml_compare(a47, b2) <= 0 ? 1 : 0;
        },
        caml_greaterthan: function(a47, b2) {
          return caml_compare(a47, b2) > 0 ? 1 : 0;
        },
        caml_greaterequal: function(a47, b2) {
          return caml_compare(a47, b2) >= 0 ? 1 : 0;
        },
        caml_hash,
        caml_is_int: function(x) {
          return typeof x === "number" && Number.isInteger(x) ? 1 : 0;
        },
        caml_is_out: function(i, a47) {
          return i < 0 || i >= a47.length ? 1 : 0;
        },
        caml_compare_ints: function(a47, b2) {
          return a47 < b2 ? -1 : a47 > b2 ? 1 : 0;
        },
        caml_compare_floats: function(a47, b2) {
          return a47 < b2 ? -1 : a47 > b2 ? 1 : 0;
        },
        caml_dup_array: function(a47) {
          return a47.slice();
        },
        caml_int64_of_string: function(s2) {
          return BigInt(s2);
        },
        caml_nativeint_of_string: function(s2) {
          return BigInt(s2);
        },
        caml_bint_of_int: function(kind2, x) {
          return kind2 === "int32" ? x | 0 : BigInt(Math.trunc(x));
        },
        caml_int_of_bint: function(kind2, x) {
          return kind2 === "int32" ? x : Number(x);
        },
        caml_bint_neg: function(kind2, x) {
          return kind2 === "int32" ? -x | 0 : BigInt.asIntN(64, -x);
        },
        caml_bint_add: function(kind2, a47, b2) {
          return kind2 === "int32" ? a47 + b2 | 0 : BigInt.asIntN(64, a47 + b2);
        },
        caml_bint_sub: function(kind2, a47, b2) {
          return kind2 === "int32" ? a47 - b2 | 0 : BigInt.asIntN(64, a47 - b2);
        },
        caml_bint_mul: function(kind2, a47, b2) {
          return kind2 === "int32" ? Math.imul(a47, b2) : BigInt.asIntN(64, a47 * b2);
        },
        caml_bint_and: function(kind2, a47, b2) {
          return kind2 === "int32" ? a47 & b2 | 0 : BigInt.asIntN(64, a47 & b2);
        },
        caml_bint_or: function(kind2, a47, b2) {
          return kind2 === "int32" ? a47 | b2 | 0 : BigInt.asIntN(64, a47 | b2);
        },
        caml_bint_xor: function(kind2, a47, b2) {
          return kind2 === "int32" ? a47 ^ b2 | 0 : BigInt.asIntN(64, a47 ^ b2);
        },
        caml_bint_lsl: function(kind2, a47, b2) {
          return kind2 === "int32" ? a47 << b2 | 0 : BigInt.asIntN(64, a47 << BigInt(b2));
        },
        caml_bint_lsr: function(kind2, a47, b2) {
          return kind2 === "int32" ? a47 >>> b2 : BigInt.asIntN(64, BigInt.asUintN(64, a47) >> BigInt(b2));
        },
        caml_bint_asr: function(kind2, a47, b2) {
          return kind2 === "int32" ? a47 >> b2 : BigInt.asIntN(64, a47 >> BigInt(b2));
        },
        caml_bint_div: function(kind2, a47, b2) {
          return kind2 === "int32" ? a47 / b2 | 0 : a47 / b2;
        },
        caml_bint_mod: function(kind2, a47, b2) {
          return kind2 === "int32" ? a47 % b2 : a47 % b2;
        },
        caml_bint_comp: function(kind2, op, a47, b2) {
          var r;
          switch (op) {
            case "eq":
              return a47 === b2 ? 1 : 0;
            case "ne":
              return a47 !== b2 ? 1 : 0;
            case "lt":
              r = a47 < b2;
              break;
            case "gt":
              r = a47 > b2;
              break;
            case "le":
              r = a47 <= b2;
              break;
            case "ge":
              r = a47 >= b2;
              break;
            default:
              r = false;
          }
          return r ? 1 : 0;
        },
        caml_bint_compare: function(kind2, a47, b2) {
          return a47 < b2 ? -1 : a47 > b2 ? 1 : 0;
        },
        caml_bint_conv: function(src, dst, x) {
          var v = typeof x === "bigint" ? x : BigInt(Math.trunc(x));
          return dst === "int32" ? Number(BigInt.asIntN(32, v)) : BigInt.asIntN(64, v);
        },
        caml_bint_bswap: function(kind2, x) {
          if (kind2 === "int32") {
            return (x & 255) << 24 | (x & 65280) << 8 | x >>> 8 & 65280 | x >>> 24 & 255 | 0;
          }
          var v = BigInt.asUintN(64, x);
          var r = 0n;
          for (var i = 0; i < 8; i++)
            r = r << 8n | v >> BigInt(8 * i) & 0xffn;
          return BigInt.asIntN(64, r);
        },
        caml_bytes_set16: function(b2, i, v) {
          b2[i] = v & 255;
          b2[i + 1] = v >> 8 & 255;
          return 0;
        },
        caml_bytes_get16: function(b2, i) {
          return b2[i] | b2[i + 1] << 8;
        },
        caml_bytes_set32: function(b2, i, v) {
          b2[i] = v & 255;
          b2[i + 1] = v >> 8 & 255;
          b2[i + 2] = v >> 16 & 255;
          b2[i + 3] = v >> 24 & 255;
          return 0;
        },
        caml_bytes_get32: function(b2, i) {
          return b2[i] | b2[i + 1] << 8 | b2[i + 2] << 16 | b2[i + 3] << 24;
        },
        caml_bytes_set64: function(b2, i, v) {
          var x = BigInt.asUintN(64, v);
          for (var j = 0; j < 8; j++)
            b2[i + j] = Number(x >> BigInt(8 * j) & 0xffn);
          return 0;
        },
        caml_bytes_get64: function(b2, i) {
          var r = 0n;
          for (var j = 0; j < 8; j++)
            r |= BigInt(b2[i + j]) << BigInt(8 * j);
          return BigInt.asIntN(64, r);
        },
        caml_bswap16: function(x) {
          return (x & 255) << 8 | x >> 8 & 255;
        },
        caml_lazy_make: function(f) {
          return { $tag: 246, "0": f };
        },
        caml_lazy_make_forward: function(v) {
          return { $tag: 250, "0": v };
        },
        caml_obj_set_tag: function(x, tag) {
          x.$tag = tag;
          return 0;
        },
        caml_atomic_load: function(r) {
          return r["0"];
        },
        caml_atomic_cas_field: function(r, i, old, n) {
          if (r[i] === old) {
            r[i] = n;
            return 1;
          }
          return 0;
        },
        caml_register_named_value: function(name, v) {
          namedValues[name] = v;
          return 0;
        },
        caml_named_value: function(name) {
          return namedValues[name] || 0;
        },
        caml_int64_float_of_bits: function(x) {
          var buf = new ArrayBuffer(8);
          var view = new DataView(buf);
          var v = BigInt.asUintN(64, typeof x === "bigint" ? x : BigInt(x));
          view.setBigUint64(0, v, true);
          return view.getFloat64(0, true);
        },
        caml_ml_output: function(chan, s2, ofs, len) {
          out2(String(s2).substr(ofs, len));
          return 0;
        },
        caml_ml_output_bytes: function(chan, b2, ofs, len) {
          var s2 = "";
          for (var i = 0; i < len; i++)
            s2 += String.fromCharCode(b2[ofs + i]);
          out2(s2);
          return 0;
        },
        caml_ml_output_char: function(chan, c2) {
          out2(String.fromCharCode(c2));
          return 0;
        },
        caml_ml_flush: function(chan) {
          return 0;
        },
        caml_ml_close_channel: function(chan) {
          return 0;
        },
        caml_ml_input: function(chan, b2, ofs, len) {
          return 0;
        },
        caml_ml_input_char: function(chan) {
          return -1;
        },
        caml_ml_input_scan_line: function(chan) {
          return 0;
        },
        caml_sys_exit: function(n) {
          throw new globalThis.Error("exit " + String(n));
        },
        caml_output_value: function(chan, v, flags) {
          throw new globalThis.Error("Marshal.output_value is not implemented");
        },
        caml_ml_open_descriptor_in: function(fd) {
          return 0;
        },
        caml_ml_open_descriptor_out: function(fd) {
          return 0;
        },
        caml_ml_set_binary_mode: function(chan, b2) {
          return 0;
        },
        caml_ml_set_channel_name: function(chan, name) {
          return 0;
        },
        caml_ml_out_channels_list: function(unit_) {
          return 0;
        },
        caml_ml_seek_out: function(chan, pos) {
          return 0;
        },
        caml_lazy_update_to_forcing: function(x) {
          if (x.$tag === 246) {
            x.$tag = 244;
            return 0;
          }
          return 1;
        },
        caml_lazy_reset_to_lazy: function(x) {
          x.$tag = 246;
          return 0;
        },
        caml_lazy_update_to_forward: function(x) {
          x.$tag = 250;
          return 0;
        },
        caml_lazy_force: function(x) {
          var t = x === null || x === void 0 ? 1e3 : Array.isArray(x) ? 0 : typeof x === "object" && x.$tag !== void 0 ? x.$tag : -1;
          if (t === 250)
            return x["0"];
          if (t === 244)
            throw new globalThis.Error("Lazy.Undefined");
          if (t !== 246)
            return x;
          x.$tag = 244;
          var f = x["0"];
          x["0"] = 0;
          try {
            var r = f(0);
            x["0"] = r;
            x.$tag = 250;
            return r;
          } catch (e) {
            x["0"] = function() {
              throw e;
            };
            x.$tag = 246;
            throw e;
          }
        },
        caml_create_bytes: function(n) {
          return new Uint8Array(n);
        },
        caml_bytes_of_string: function(s2) {
          var a47 = new Uint8Array(s2.length);
          for (var i = 0; i < s2.length; i++)
            a47[i] = s2.charCodeAt(i);
          return a47;
        },
        caml_bytes_to_string: function(b2) {
          var s2 = "";
          for (var i = 0; i < b2.length; i++)
            s2 += String.fromCharCode(b2[i]);
          return s2;
        },
        caml_string_of_bytes: function(b2) {
          var s2 = "";
          for (var i = 0; i < b2.length; i++)
            s2 += String.fromCharCode(b2[i]);
          return s2;
        },
        caml_string_unsafe_get: function(s2, i) {
          return s2.charCodeAt(i);
        },
        caml_string_get: function(s2, i) {
          return s2.charCodeAt(i);
        },
        caml_bytes_unsafe_get: function(b2, i) {
          return b2[i];
        },
        caml_bytes_get: function(b2, i) {
          return b2[i];
        },
        caml_bytes_unsafe_set: function(b2, i, c2) {
          b2[i] = c2 & 255;
          return 0;
        },
        caml_bytes_set: function(b2, i, c2) {
          b2[i] = c2 & 255;
          return 0;
        },
        caml_ml_string_length: function(s2) {
          return s2.length;
        },
        caml_ml_bytes_length: function(b2) {
          return b2.length;
        },
        caml_string_concat: function(a47, b2) {
          return a47 + b2;
        },
        // `=`/`<>`/comparison on strings are emitted as the `%string_*` primitives
        // (not the generic caml_equal/caml_compare), so they need their own entries.
        caml_string_equal: function(a47, b2) {
          return a47 === b2 ? 1 : 0;
        },
        caml_string_notequal: function(a47, b2) {
          return a47 !== b2 ? 1 : 0;
        },
        caml_string_compare: function(a47, b2) {
          return a47 < b2 ? -1 : a47 > b2 ? 1 : 0;
        },
        caml_string_lessthan: function(a47, b2) {
          return a47 < b2 ? 1 : 0;
        },
        caml_string_lessequal: function(a47, b2) {
          return a47 <= b2 ? 1 : 0;
        },
        caml_string_greaterthan: function(a47, b2) {
          return a47 > b2 ? 1 : 0;
        },
        caml_string_greaterequal: function(a47, b2) {
          return a47 >= b2 ? 1 : 0;
        },
        caml_int_of_string: function(s2) {
          var n = parseInt(s2, 10);
          if (isNaN(n) || !/^\s*[+-]?[0-9]+\s*$/.test(s2))
            throw new globalThis.Error('Failure("int_of_string")');
          return n;
        },
        caml_float_of_string: function(s2) {
          var n = parseFloat(s2);
          if (isNaN(n))
            throw new globalThis.Error('Failure("float_of_string")');
          return n;
        },
        caml_sqrt_float: Math.sqrt,
        caml_exp_float: Math.exp,
        caml_log_float: Math.log,
        caml_log10_float: Math.log10,
        caml_log2_float: Math.log2,
        caml_expm1_float: Math.expm1,
        caml_log1p_float: Math.log1p,
        caml_cos_float: Math.cos,
        caml_sin_float: Math.sin,
        caml_tan_float: Math.tan,
        caml_acos_float: Math.acos,
        caml_asin_float: Math.asin,
        caml_atan_float: Math.atan,
        caml_atan2_float: Math.atan2,
        caml_cosh_float: Math.cosh,
        caml_sinh_float: Math.sinh,
        caml_tanh_float: Math.tanh,
        caml_acosh_float: Math.acosh,
        caml_asinh_float: Math.asinh,
        caml_atanh_float: Math.atanh,
        caml_power_float: Math.pow,
        caml_hypot_float: Math.hypot,
        caml_ceil_float: Math.ceil,
        caml_floor_float: Math.floor,
        caml_cbrt_float: Math.cbrt,
        caml_abs_float: Math.abs,
        caml_round_float: Math.round,
        caml_trunc_float: Math.trunc,
        caml_exp2_float: function(x) {
          return Math.pow(2, x);
        },
        caml_fmod_float: function(x, y) {
          return x % y;
        },
        caml_ldexp_float: function(x, n) {
          return x * Math.pow(2, n);
        },
        caml_frexp_float: function(x) {
          if (x === 0 || !isFinite(x))
            return { $tag: 0, "0": x, "1": 0 };
          var e = Math.ceil(Math.log2(Math.abs(x)));
          var frac = x / Math.pow(2, e);
          while (Math.abs(frac) >= 1) {
            frac /= 2;
            e += 1;
          }
          while (Math.abs(frac) < 0.5) {
            frac *= 2;
            e -= 1;
          }
          return { $tag: 0, "0": frac, "1": e };
        },
        caml_modf_float: function(x) {
          var i = Math.trunc(x);
          return { $tag: 0, "0": x - i, "1": i };
        },
        caml_fill_bytes: function(b2, ofs, len, c2) {
          for (var i = 0; i < len; i++)
            b2[ofs + i] = c2;
          return 0;
        },
        caml_blit_bytes: function(s1, i1, s2, i2, len) {
          for (var i = 0; i < len; i++)
            s2[i2 + i] = s1[i1 + i];
          return 0;
        },
        caml_blit_string: function(s1, i1, s2, i2, len) {
          for (var i = 0; i < len; i++)
            s2[i2 + i] = s1.charCodeAt(i1 + i);
          return 0;
        },
        caml_div: function(x, y) {
          if (y === 0)
            throw new globalThis.Error("Division_by_zero");
          return Math.trunc(x / y);
        },
        caml_mod: function(x, y) {
          if (y === 0)
            throw new globalThis.Error("Division_by_zero");
          return x % y;
        },
        caml_array_make: function(n, init3) {
          var a47 = new Array(n);
          for (var i = 0; i < n; i++)
            a47[i] = init3;
          return a47;
        },
        caml_make_vect: function(n, init3) {
          var a47 = new Array(n);
          for (var i = 0; i < n; i++)
            a47[i] = init3;
          return a47;
        },
        caml_obj_block: function(tag, size) {
          var o = { $tag: tag };
          for (var i = 0; i < size; i++)
            o[i] = 0;
          return o;
        },
        caml_obj_dup: function(x) {
          if (Array.isArray(x))
            return x.slice();
          var o = { $tag: x.$tag };
          for (var k in x)
            o[k] = x[k];
          return o;
        },
        caml_obj_is_block: function(x) {
          return kind(x) === KIND_BLOCK ? 1 : 0;
        },
        caml_print_string: function(s2) {
          out2(String(s2));
          return 0;
        },
        caml_print_bytes: function(s2) {
          out2(String(s2));
          return 0;
        },
        caml_print_int: function(n) {
          out2(String(n));
          return 0;
        },
        caml_print_float: function(f) {
          out2(String(f));
          return 0;
        },
        caml_print_char: function(c2) {
          out2(String.fromCharCode(c2));
          return 0;
        },
        caml_print_newline: function() {
          out2("\n");
          return 0;
        },
        caml_print_endline: function(s2) {
          out2(String(s2) + "\n");
          return 0;
        },
        caml_flush: function() {
          return 0;
        }
      };
    })();
  }
  var a46 = {};
  var b = WebSharper_UI_Var_default.Create_1(0);
  var c = WebSharper_UI_Doc_default.RunById("root", WebSharper_UI_Doc_default.Element("div", globalThis.OCamlRuntime.caml_list_to_array(0), globalThis.OCamlRuntime.caml_list_to_array({ $tag: 0, "0": WebSharper_UI_Doc_default.Element("button", globalThis.OCamlRuntime.caml_list_to_array({ $tag: 0, "0": Handler("click", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, () => b.Set(b.Get() + 1)))), "1": 0 }), globalThis.OCamlRuntime.caml_list_to_array({ $tag: 0, "0": WebSharper_UI_Doc_default.TextNode("Click me"), "1": 0 })), "1": { $tag: 0, "0": WebSharper_UI_Doc_default.Element("p", globalThis.OCamlRuntime.caml_list_to_array(0), globalThis.OCamlRuntime.caml_list_to_array({ $tag: 0, "0": WebSharper_UI_Doc_default.TextNode("Clicked "), "1": { $tag: 0, "0": WebSharper_UI_Doc_default.TextView(Map4(globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (i) => globalThis.OCamlRuntime.caml_trampoline_return(Stdlib_Printf_default[3], [{ $tag: 0, "0": { $tag: 4, "0": 0, "1": 0, "2": 0, "3": 0 }, "1": "%d" }, i]))), b.View)), "1": { $tag: 0, "0": WebSharper_UI_Doc_default.TextNode(" times"), "1": 0 } } })), "1": 0 } })));
  a46 = { $tag: 0 };
  var Main_default = a46;
})();
