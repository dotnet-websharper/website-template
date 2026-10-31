(() => {
  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Object.js
  var a = class {
    Equals(b2) {
      return this === b2;
    }
    GetHashCode() {
      return -1;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.LazyExtensionsProxy.LazyRecord`1.js
  function New(a67, b2, c2) {
    return { c: a67, v: b2, f: c2 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Control.LazyExtensions.js
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

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Enumerator.T`2.js
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
      const d2 = this.n(this);
      this.e = d2 ? 1 : 2;
      return d2;
    }
    constructor(d2, e2, f2, g2) {
      super();
      this.s = d2;
      this.c = e2;
      this.n = f2;
      this.d = g2;
      this.e = 0;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.Core.JavaScript/Runtime.js
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
        instance = factory((i2) => instance = i2);
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
    for (var i2 = 0; i2 < fields.length; i2++) {
      var f2 = fields[i2];
      if (obj[f2] === void 0) {
        delete obj[f2];
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
  function CreateFuncWithArgs(f2) {
    return function(...args) {
      return f2(args);
    };
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

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.IDisposable.js
  function isIDisposable(a67) {
    return "Dispose" in a67;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Collections.Generic.Dictionary`2.KeyCollection.js
  var a3 = class extends a {
    d;
    GetEnumerator() {
      return Get(map((g2) => g2.K, this.d));
    }
    get IsReadOnly() {
      return true;
    }
    get Count() {
      return this.d.count;
    }
    Contains(g2) {
      return this.d.ContainsKey(g2);
    }
    CopyTo(g2, h2) {
      ArrayCopyTo(ofSeq(this), g2, h2);
    }
    constructor(g2) {
      super();
      this.d = g2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Collections.Generic.Dictionary`2.ValueCollection.js
  var a4 = class extends a {
    d;
    GetEnumerator() {
      return Get(map((g2) => g2.V, this.d));
    }
    get IsReadOnly() {
      return true;
    }
    get Count() {
      return this.d.count;
    }
    Contains(g2) {
      return this.d.ContainsValue(g2);
    }
    CopyTo(g2, h2) {
      ArrayCopyTo(ofSeq(this), g2, h2);
    }
    constructor(g2) {
      super();
      this.d = g2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.JavaScript.JS.js
  function GetFieldValues(a67) {
    let b2 = [];
    let c2;
    for (var d2 in a67)
      b2.push(a67[d2]);
    return b2;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.ArgumentException.js
  var a5 = class extends Error {
    constructor(b2, c2, d2) {
      if (b2 == "New_1") {
        b2 = "New_2";
        c2 = "Value does not fall within the expected range.";
      }
      let e2;
      let f2;
      if (b2 == "New") {
        e2 = c2;
        f2 = d2;
        b2 = "New_2";
        c2 = f2 + "\nParameter name: " + e2;
      }
      if (b2 == "New_2") {
        const g2 = c2;
        super(g2);
      }
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Collections.Generic.KeyNotFoundException.js
  var a6 = class extends Error {
    constructor(b2, c2) {
      if (b2 == "New") {
        b2 = "New_1";
        c2 = "The given key was not present in the dictionary.";
      }
      if (b2 == "New_1") {
        const d2 = c2;
        super(d2);
      }
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Collections.DictionaryUtil.js
  function getHashCode(c2, d2) {
    return c2.CGetHashCode(d2);
  }
  function equals(c2) {
    return (d2, e2) => c2.CEquals(d2, e2);
  }
  function alreadyAdded() {
    throw new a5("New_2", "An item with the same key has already been added.");
  }
  function notPresent() {
    throw new a6("New");
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js
  function Some(a67) {
    return { $: 1, $0: a67 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Collections.Generic.Dictionary`2.js
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
    RemoveKey(A2) {
      return this.remove(A2);
    }
    GetEnumerator() {
      return Get0(concat(GetFieldValues(this.data)));
    }
    set_Item(A2, B3) {
      this.set(A2, B3);
    }
    Item(A2) {
      return this.get(A2);
    }
    DAdd(A2, B3) {
      this.add(A2, B3);
    }
    remove(A2) {
      const B3 = this.hash(A2);
      const C2 = this.data[B3];
      if (C2 == null)
        return false;
      else {
        const D2 = filter((E2) => !this.equals.apply(null, [KeyValue(E2)[0], A2]), C2);
        return length(D2) < C2.length && (this.count = this.count - 1, this.data[B3] = D2, true);
      }
    }
    add(A2, B3) {
      const C2 = this.hash(A2);
      const D2 = this.data[C2];
      if (D2 == null) {
        this.count = this.count + 1;
        this.data[C2] = new Array({ K: A2, V: B3 });
      } else {
        exists((E2) => this.equals.apply(null, [KeyValue(E2)[0], A2]), D2) ? alreadyAdded() : void 0;
        this.count = this.count + 1;
        D2.push({ K: A2, V: B3 });
      }
    }
    set(A2, B3) {
      const C2 = this.hash(A2);
      const D2 = this.data[C2];
      if (D2 == null) {
        this.count = this.count + 1;
        this.data[C2] = new Array({ K: A2, V: B3 });
      } else {
        const E2 = tryFindIndex((F2) => this.equals.apply(null, [KeyValue(F2)[0], A2]), D2);
        if (E2 == null) {
          this.count = this.count + 1;
          D2.push({ K: A2, V: B3 });
        } else
          D2[E2.$0] = { K: A2, V: B3 };
      }
    }
    get(A2) {
      const B3 = this.data[this.hash(A2)];
      return B3 == null ? notPresent() : pick((C2) => {
        const D2 = KeyValue(C2);
        return this.equals.apply(null, [D2[0], A2]) ? Some(D2[1]) : null;
      }, B3);
    }
    TryGetValue(A2, B3) {
      const C2 = this.data[this.hash(A2)];
      if (C2 == null)
        return false;
      else {
        const D2 = tryPick((E2) => {
          const F2 = KeyValue(E2);
          return this.equals.apply(null, [F2[0], A2]) ? Some(F2[1]) : null;
        }, C2);
        return D2 != null && D2.$ == 1 && (B3.set(D2.$0), true);
      }
    }
    ContainsValue(A2) {
      return exists2((B3) => Equals(KeyValue(B3)[1], A2), this);
    }
    ContainsKey(A2) {
      const B3 = this.data[this.hash(A2)];
      return B3 == null ? false : exists((C2) => this.equals.apply(null, [KeyValue(C2)[0], A2]), B3);
    }
    Clear() {
      this.data = [];
      this.count = 0;
    }
    get IsFixedSize() {
      return false;
    }
    Remove(A2) {
      let B3;
      const C2 = (B3 = void 0, [this.TryGetValue(A2.K, { get: () => B3, set: (D2) => {
        B3 = D2;
      } }), B3]);
      return C2[0] && (Equals(C2[1], A2.V) && this.RemoveKey(A2.K));
    }
    CopyTo(A2, B3) {
      ArrayCopyTo(ofSeq(this), A2, B3);
    }
    Contains(A2) {
      let B3;
      const C2 = (B3 = void 0, [this.TryGetValue(A2.K, { get: () => B3, set: (D2) => {
        B3 = D2;
      } }), B3]);
      return C2[0] && Equals(C2[1], A2.V);
    }
    Add(A2) {
      this.DAdd(A2.K, A2.V);
    }
    get Count() {
      return this.count;
    }
    get IsReadOnly() {
      return false;
    }
    constructor(A2, B3, C2, D2) {
      let E2;
      if (A2 == "New_4") {
        E2 = B3;
        A2 = "New_5";
      }
      let F2;
      let G2;
      if (A2 == "New_2") {
        F2 = B3;
        G2 = C2;
        A2 = "New_3";
        B3 = G2;
      }
      if (A2 == "New_5") {
        A2 = "New_6";
        B3 = [];
        C2 = Equals;
        D2 = Hash;
      }
      let H2;
      if (A2 == "New_3") {
        H2 = B3;
        A2 = "New_6";
        B3 = [];
        C2 = equals(H2);
        D2 = (R2) => getHashCode(H2, R2);
      }
      let I2;
      if (A2 == "New_1") {
        I2 = B3;
        A2 = "New_6";
        B3 = I2;
        C2 = Equals;
        D2 = Hash;
      }
      let J2;
      let K2;
      if (A2 == "New") {
        J2 = B3;
        K2 = C2;
        A2 = "New_6";
        B3 = J2;
        C2 = equals(K2);
        D2 = (R2) => getHashCode(K2, R2);
      }
      if (A2 == "New_6") {
        const L2 = B3;
        const M2 = C2;
        const N2 = D2;
        super();
        this.equals = M2;
        this.hash = N2;
        this.count = 0;
        this.data = [];
        const O2 = Get(L2);
        try {
          while (O2.MoveNext()) {
            const P2 = O2.Current;
            this.set(P2.K, P2.V);
          }
        } finally {
          const Q2 = O2;
          if (typeof Q2 == "object" && isIDisposable(Q2))
            O2.Dispose();
        }
      }
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Collections.HashSetUtil.js
  function concat2(a67) {
    let b2 = [];
    let c2;
    for (var d2 in a67)
      b2.push.apply(b2, a67[d2]);
    return b2;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Collections.Generic.HashSet`1.js
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
    CopyTo(p2, q2) {
      const r2 = concat2(this.data);
      for (let s6 = 0, t2 = r2.length - 1; s6 <= t2; s6++)
        set(p2, s6 + q2, r2[s6]);
    }
    SAdd(p2) {
      return this.add(p2);
    }
    add(p2) {
      const q2 = this.hash(p2);
      const r2 = this.data[q2];
      return r2 == null ? (this.data[q2] = [p2], this.count = this.count + 1, true) : this.arrContains(p2, r2) ? false : (r2.push(p2), this.count = this.count + 1, true);
    }
    arrRemove(p2, q2) {
      let r2, s6;
      r2 = true;
      s6 = 0;
      const t2 = q2.length;
      while (r2 && s6 < t2)
        if (this.equals.apply(null, [q2[s6], p2])) {
          q2.splice(s6, 1);
          r2 = false;
        } else
          s6 = s6 + 1;
      return !r2;
    }
    arrContains(p2, q2) {
      let r2, s6;
      r2 = true;
      s6 = 0;
      const t2 = q2.length;
      while (r2 && s6 < t2)
        if (this.equals.apply(null, [q2[s6], p2]))
          r2 = false;
        else
          s6 = s6 + 1;
      return !r2;
    }
    UnionWith(p2) {
      const q2 = Get(p2);
      try {
        while (q2.MoveNext())
          this.SAdd(q2.Current);
      } finally {
        const r2 = q2;
        if (typeof r2 == "object" && isIDisposable(r2))
          q2.Dispose();
      }
    }
    SymmetricExceptWith(p2) {
      const q2 = Get(p2);
      try {
        while (q2.MoveNext()) {
          const r2 = q2.Current;
          if (this.Contains(r2))
            this.Remove(r2);
          else
            this.SAdd(r2);
        }
      } finally {
        const s6 = q2;
        if (typeof s6 == "object" && isIDisposable(s6))
          q2.Dispose();
      }
    }
    SetEquals(p2) {
      const q2 = new _a("New_4", p2, this.equals, this.hash);
      return this.Count === q2.Count && this.IsSupersetOf(q2);
    }
    RemoveWhere(p2) {
      let q2;
      const r2 = concat2(this.data);
      q2 = 0;
      for (let t2 = 0, u2 = r2.length - 1; t2 <= u2; t2++) {
        const s6 = r2[t2];
        if (p2(s6))
          this.Remove(s6) ? q2 = q2 + 1 : void 0;
      }
      return q2;
    }
    Remove(p2) {
      const q2 = this.data[this.hash(p2)];
      return q2 == null ? false : this.arrRemove(p2, q2) && (this.count = this.count - 1, true);
    }
    Overlaps(p2) {
      return exists2((q2) => this.Contains(q2), p2);
    }
    IsSupersetOf(p2) {
      return forall((q2) => this.Contains(q2), p2);
    }
    IsSubsetOf(p2) {
      const q2 = new _a("New_4", p2, this.equals, this.hash);
      return forall2((r2) => q2.Contains(r2), concat2(this.data));
    }
    IsProperSupersetOf(p2) {
      const q2 = ofSeq(p2);
      return this.count > length(q2) && this.IsSupersetOf(q2);
    }
    IsProperSubsetOf(p2) {
      const q2 = ofSeq(p2);
      return this.count < length(q2) && this.IsSubsetOf(q2);
    }
    IntersectWith(p2) {
      const q2 = new _a("New_4", p2, this.equals, this.hash);
      const r2 = concat2(this.data);
      for (let t2 = 0, u2 = r2.length - 1; t2 <= u2; t2++) {
        const s6 = r2[t2];
        if (!q2.Contains(s6))
          this.Remove(s6);
      }
    }
    ExceptWith(p2) {
      const q2 = Get(p2);
      try {
        while (q2.MoveNext())
          this.Remove(q2.Current);
      } finally {
        const r2 = q2;
        if (typeof r2 == "object" && isIDisposable(r2))
          q2.Dispose();
      }
    }
    CopyTo_1(p2, q2, r2) {
      let s6;
      s6 = 0;
      const t2 = concat2(this.data);
      for (let u2 = 0, v2 = r2 - 1; u2 <= v2; u2++)
        set(p2, u2 + q2, t2[u2]);
    }
    Contains(p2) {
      const q2 = this.data[this.hash(p2)];
      return q2 == null ? false : this.arrContains(p2, q2);
    }
    Clear() {
      this.data = [];
      this.count = 0;
    }
    Add(p2) {
      this.SAdd(p2);
    }
    get IsReadOnly() {
      return false;
    }
    constructor(p2, q2, r2, s6) {
      if (p2 == "New_3") {
        p2 = "New_4";
        q2 = [];
        r2 = Equals;
        s6 = Hash;
      }
      let t2;
      if (p2 == "New_2") {
        t2 = q2;
        p2 = "New_4";
        q2 = t2;
        r2 = Equals;
        s6 = Hash;
      }
      let u2;
      if (p2 == "New_1") {
        u2 = q2;
        p2 = "New_4";
        q2 = [];
        r2 = equals(u2);
        s6 = (C2) => getHashCode(u2, C2);
      }
      let v2;
      let w2;
      if (p2 == "New") {
        v2 = q2;
        w2 = r2;
        p2 = "New_4";
        q2 = v2;
        r2 = equals(w2);
        s6 = (C2) => getHashCode(w2, C2);
      }
      if (p2 == "New_4") {
        const x2 = q2;
        const y2 = r2;
        const z2 = s6;
        super();
        this.equals = y2;
        this.hash = z2;
        this.data = [];
        this.count = 0;
        const A2 = Get(x2);
        try {
          while (A2.MoveNext())
            this.add(A2.Current);
        } finally {
          const B3 = A2;
          if (typeof B3 == "object" && isIDisposable(B3))
            A2.Dispose();
        }
      }
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.CollectionInternals.js
  function nonNegative() {
    return FailWith("The input must be non-negative.");
  }
  function insufficient() {
    return FailWith("The input sequence has an insufficient number of elements.");
  }
  function skip(s6, t2) {
    let u2;
    u2 = t2;
    for (let v2 = 1, w2 = s6; v2 <= w2; v2++)
      if (u2.$ == 0)
        FailWith("Input list too short.");
      else
        u2 = u2.$1;
    return u2;
  }
  function mapiInPlace(s6, t2) {
    for (let u2 = 0, v2 = t2.length - 1; u2 <= v2; u2++)
      t2[u2] = s6(u2, t2[u2]);
    return t2;
  }
  function mapInPlace(s6, t2) {
    for (let u2 = 0, v2 = t2.length - 1; u2 <= v2; u2++)
      t2[u2] = s6(t2[u2]);
  }
  function arrContains(s6, t2) {
    let u2, v2;
    u2 = true;
    v2 = 0;
    const w2 = length(t2);
    while (u2 && v2 < w2)
      if (Equals(t2[v2], s6))
        u2 = false;
      else
        v2 = v2 + 1;
    return !u2;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js
  function tryPick(B3, C2) {
    let D2, E2;
    D2 = null;
    E2 = 0;
    while (E2 < C2.length && D2 == null) {
      const F2 = B3(C2[E2]);
      if (F2 != null && F2.$ == 1)
        D2 = F2;
      E2 = E2 + 1;
    }
    return D2;
  }
  function tryFindIndex(B3, C2) {
    let D2, E2;
    D2 = null;
    E2 = 0;
    while (E2 < C2.length && D2 == null) {
      B3(C2[E2]) ? D2 = Some(E2) : void 0;
      E2 = E2 + 1;
    }
    return D2;
  }
  function tryFind(B3, C2) {
    let D2, E2;
    D2 = null;
    E2 = 0;
    while (E2 < C2.length && D2 == null) {
      B3(C2[E2]) ? D2 = Some(C2[E2]) : void 0;
      E2 = E2 + 1;
    }
    return D2;
  }
  function sortInPlace(B3) {
    mapInPlace((C2) => C2[0], mapiInPlace((C2, D2) => [D2, C2], B3).sort(Compare));
  }
  function pick(B3, C2) {
    const D2 = tryPick(B3, C2);
    return D2 == null ? FailWith("KeyNotFoundException") : D2.$0;
  }
  function ofSeq(B3) {
    if (B3 instanceof Array)
      return B3.slice();
    else if (B3 instanceof a9)
      return ofList(B3);
    else {
      const C2 = [];
      const D2 = Get(B3);
      try {
        while (D2.MoveNext())
          C2.push(D2.Current);
        return C2;
      } finally {
        const E2 = D2;
        if (typeof E2 == "object" && isIDisposable(E2))
          D2.Dispose();
      }
    }
  }
  function ofList(B3) {
    let C2;
    const D2 = [];
    C2 = B3;
    while (!(C2.$ == 0)) {
      D2.push(head(C2));
      C2 = tail(C2);
    }
    return D2;
  }
  function map2(B3, C2) {
    const D2 = new Array(C2.length);
    for (let E2 = 0, F2 = C2.length - 1; E2 <= F2; E2++)
      D2[E2] = B3(C2[E2]);
    return D2;
  }
  function iteri(B3, C2) {
    for (let D2 = 0, E2 = C2.length - 1; D2 <= E2; D2++)
      B3(D2, C2[D2]);
  }
  function iter(B3, C2) {
    for (let D2 = 0, E2 = C2.length - 1; D2 <= E2; D2++)
      B3(C2[D2]);
  }
  function init(B3, C2) {
    if (B3 < 0)
      FailWith("Negative size given.");
    else
      null;
    const D2 = new Array(B3);
    for (let E2 = 0, F2 = B3 - 1; E2 <= F2; E2++)
      D2[E2] = C2(E2);
    return D2;
  }
  function forall2(B3, C2) {
    let D2, E2;
    D2 = true;
    E2 = 0;
    const F2 = length(C2);
    while (D2 && E2 < F2)
      if (B3(C2[E2]))
        E2 = E2 + 1;
      else
        D2 = false;
    return D2;
  }
  function foldBack(B3, C2, D2) {
    let E2;
    E2 = D2;
    const F2 = C2.length;
    for (let G2 = 1, H2 = F2; G2 <= H2; G2++)
      E2 = B3(C2[F2 - G2], E2);
    return E2;
  }
  function find(B3, C2) {
    const D2 = tryFind(B3, C2);
    return D2 == null ? FailWith("KeyNotFoundException") : D2.$0;
  }
  function filter(B3, C2) {
    const D2 = [];
    for (let E2 = 0, F2 = C2.length - 1; E2 <= F2; E2++)
      if (B3(C2[E2]))
        D2.push(C2[E2]);
    return D2;
  }
  function exists(B3, C2) {
    let D2, E2;
    D2 = false;
    E2 = 0;
    const F2 = length(C2);
    while (!D2 && E2 < F2)
      if (B3(C2[E2]))
        D2 = true;
      else
        E2 = E2 + 1;
    return D2;
  }
  function create(B3, C2) {
    const D2 = new Array(B3);
    for (let E2 = 0, F2 = B3 - 1; E2 <= F2; E2++)
      D2[E2] = C2;
    return D2;
  }
  function concat(B3) {
    return Array.prototype.concat.apply([], ofSeq(B3));
  }
  function choose(B3, C2) {
    const D2 = [];
    for (let F2 = 0, G2 = C2.length - 1; F2 <= G2; F2++) {
      const E2 = B3(C2[F2]);
      if (E2 == null) {
      } else
        D2.push(E2.$0);
    }
    return D2;
  }
  function blit(B3, C2, D2, E2, F2) {
    checkRange(B3, C2, F2);
    checkRange(D2, E2, F2);
    for (let G2 = 0, H2 = F2 - 1; G2 <= H2; G2++)
      D2[E2 + G2] = B3[C2 + G2];
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js
  function append(Z2, u00302) {
    let u00312, u00322, u00332;
    if (Z2.$ == 0)
      return u00302;
    else if (u00302.$ == 0)
      return Z2;
    else {
      const u00342 = Create2(a9, { $: 1 });
      u00312 = u00342;
      u00322 = Z2;
      u00332 = true;
      while (u00332) {
        u00312.$0 = u00322.$0;
        u00322 = u00322.$1;
        if (u00322.$ == 0)
          u00332 = false;
        else {
          const u00352 = Create2(a9, { $: 1 });
          u00312 = (u00312.$1 = u00352, u00352);
        }
      }
      u00312.$1 = u00302;
      return u00342;
    }
  }
  function exists3(Z2, u00302) {
    let u00312, u00322;
    u00312 = false;
    u00322 = u00302;
    while (!u00312 && u00322.$ == 1) {
      u00312 = Z2(u00322.$0);
      u00322 = u00322.$1;
    }
    return u00312;
  }
  function filter2(Z2, u00302) {
    let u00312, u00322, u00332, u00342;
    if (u00302.$ == 0)
      return u00302;
    else {
      u00312 = a9.Empty;
      u00322 = u00312;
      u00332 = u00302;
      u00342 = true;
      while (u00342) {
        let u00352, u00362;
        if (Z2(u00332.$0)) {
          if (u00312.$ == 0)
            u00352 = (u00312 = Create2(a9, { $: 1 }), u00322 = u00312);
          else {
            const u00372 = Create2(a9, { $: 1 });
            u00352 = u00322 = (u00322.$1 = u00372, u00372);
          }
          const u00382 = u00332.$0;
          u00362 = (u00322.$ = 1, u00322.$0 = u00382);
        } else
          u00362 = void 0;
        u00332 = u00332.$1;
        if (u00332.$ == 0)
          u00342 = false;
      }
      if (!(u00312.$ == 0))
        u00322.$1 = a9.Empty;
      return u00312;
    }
  }
  function head(Z2) {
    return Z2.$ == 1 ? Z2.$0 : listEmpty();
  }
  function iter2(Z2, u00302) {
    let u00312;
    u00312 = u00302;
    while (u00312.$ == 1) {
      Z2(head(u00312));
      u00312 = tail(u00312);
    }
  }
  function length2(Z2) {
    let u00302, u00312;
    u00302 = Z2;
    u00312 = 0;
    while (u00302.$ == 1) {
      u00302 = tail(u00302);
      u00312 = u00312 + 1;
    }
    return u00312;
  }
  function map3(Z2, u00302) {
    let u00312, u00322, u00332;
    if (u00302.$ == 0)
      return u00302;
    else {
      const u00342 = Create2(a9, { $: 1 });
      u00312 = u00342;
      u00322 = u00302;
      u00332 = true;
      while (u00332) {
        u00312.$0 = Z2(u00322.$0);
        u00322 = u00322.$1;
        if (u00322.$ == 0)
          u00332 = false;
        else {
          const u00352 = Create2(a9, { $: 1 });
          u00312 = (u00312.$1 = u00352, u00352);
        }
      }
      u00312.$1 = a9.Empty;
      return u00342;
    }
  }
  function mapi(Z2, u00302) {
    let u00312, u00322, u00332, u00342;
    if (u00302.$ == 0)
      return u00302;
    else {
      const u00352 = Create2(a9, { $: 1 });
      u00312 = u00352;
      u00322 = u00302;
      u00332 = 0;
      u00342 = true;
      while (u00342) {
        u00312.$0 = Z2(u00332, u00322.$0);
        u00322 = u00322.$1;
        if (u00322.$ == 0)
          u00342 = false;
        else {
          const u00362 = Create2(a9, { $: 1 });
          u00312 = (u00312.$1 = u00362, u00362);
          u00332 = u00332 + 1;
        }
      }
      u00312.$1 = a9.Empty;
      return u00352;
    }
  }
  function ofArray(Z2) {
    let u00302;
    u00302 = a9.Empty;
    for (let u00312 = length(Z2) - 1, u00322 = 0; u00312 >= u00322; u00312--)
      u00302 = a9.Cons(get(Z2, u00312), u00302);
    return u00302;
  }
  function ofSeq2(Z2) {
    if (Z2 instanceof a9)
      return Z2;
    else if (Z2 instanceof Array)
      return ofArray(Z2);
    else {
      const u00302 = Get(Z2);
      try {
        let u00312, u00322;
        u00312 = u00302.MoveNext();
        if (!u00312)
          return a9.Empty;
        else {
          const u00332 = Create2(a9, { $: 1 });
          u00322 = u00332;
          while (u00312) {
            u00322.$0 = u00302.Current;
            if (u00302.MoveNext()) {
              const u00342 = Create2(a9, { $: 1 });
              u00322 = (u00322.$1 = u00342, u00342);
            } else
              u00312 = false;
          }
          u00322.$1 = a9.Empty;
          return u00332;
        }
      } finally {
        const u00352 = u00302;
        if (typeof u00352 == "object" && isIDisposable(u00352))
          u00302.Dispose();
      }
    }
  }
  function tail(Z2) {
    return Z2.$ == 1 ? Z2.$1 : listEmpty();
  }
  function contains(Z2, u00302) {
    let u00312, u00322;
    u00312 = false;
    u00322 = u00302;
    while (!u00312 && u00322.$ == 1) {
      u00312 = Equals(Z2, u00322.$0);
      u00322 = u00322.$1;
    }
    return u00312;
  }
  function listEmpty() {
    return FailWith("The input list was empty.");
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1.js
  var a9 = class _a {
    static Empty = Create2(_a, { $: 0 });
    static Cons(i2, j2) {
      return Create2(_a, { $: 1, $0: i2, $1: j2 });
    }
    GetSlice(i2, j2) {
      try {
        if (i2 != null && i2.$ == 1) {
          if (j2 != null && j2.$ == 1) {
            const k2 = i2.$0;
            const l2 = j2.$0;
            return l2 < 0 ? _a.Empty : ofSeq2(take(l2 - k2 + 1, skip(k2, this)));
          } else
            return skip(i2.$0, this);
        } else if (j2 != null && j2.$ == 1) {
          const m2 = j2.$0;
          return m2 < 0 ? _a.Empty : ofSeq2(take(m2 + 1, this));
        } else
          return this;
      } catch (n2) {
        return _a.Empty;
      }
    }
    get_Item(i2) {
      return nth(i2, this);
    }
    get Length() {
      return length2(this);
    }
    GetEnumerator() {
      return new a2(this, null, (i2) => {
        const j2 = i2.s;
        if (j2.$ == 0)
          return false;
        else {
          const k2 = j2.$1;
          i2.c = j2.$0;
          i2.s = k2;
          return true;
        }
      }, void 0);
    }
    $;
    $0;
    $1;
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js
  function append2(K2, L2) {
    return { GetEnumerator: () => {
      const M2 = Get(K2);
      const N2 = [true];
      return new a2(M2, null, (O2) => {
        if (O2.s.MoveNext()) {
          O2.c = O2.s.Current;
          return true;
        } else {
          const P2 = O2.s;
          if (!Equals(P2, null))
            P2.Dispose();
          else
            null;
          O2.s = null;
          return N2[0] && (N2[0] = false, O2.s = Get(L2), O2.s.MoveNext() ? (O2.c = O2.s.Current, true) : (O2.s.Dispose(), O2.s = null, false));
        }
      }, (O2) => {
        const P2 = O2.s;
        if (!Equals(P2, null))
          P2.Dispose();
      });
    } };
  }
  function collect(K2, L2) {
    return concat3(map(K2, L2));
  }
  function compareWith(K2, L2, M2) {
    const N2 = Get(L2);
    try {
      const O2 = Get(M2);
      try {
        let P2, Q2;
        P2 = 0;
        Q2 = true;
        while (Q2 && P2 === 0)
          if (N2.MoveNext())
            P2 = O2.MoveNext() ? K2(N2.Current, O2.Current) : 1;
          else if (O2.MoveNext())
            P2 = -1;
          else
            Q2 = false;
        return P2;
      } finally {
        const R2 = O2;
        if (typeof R2 == "object" && isIDisposable(R2))
          O2.Dispose();
      }
    } finally {
      const S2 = N2;
      if (typeof S2 == "object" && isIDisposable(S2))
        N2.Dispose();
    }
  }
  function concat3(K2) {
    return { GetEnumerator: () => {
      const L2 = Get(K2);
      function M2(N2) {
        while (true) {
          const O2 = N2.s;
          if (Equals(O2, null)) {
            if (L2.MoveNext()) {
              N2.s = Get(L2.Current);
              N2 = N2;
            } else {
              L2.Dispose();
              return false;
            }
          } else if (O2.MoveNext()) {
            N2.c = O2.Current;
            return true;
          } else {
            N2.Dispose();
            N2.s = null;
            N2 = N2;
          }
        }
      }
      return new a2(null, null, M2, (N2) => {
        const O2 = N2.s;
        if (!Equals(O2, null))
          O2.Dispose();
        const P2 = L2;
        if (!Equals(P2, null))
          P2.Dispose();
      });
    } };
  }
  function delay(K2) {
    return { GetEnumerator: () => Get(K2()) };
  }
  function distinct(K2) {
    return distinctBy((L2) => L2, K2);
  }
  function distinctBy(K2, L2) {
    return { GetEnumerator: () => {
      const M2 = Get(L2);
      const N2 = new a8("New_3");
      return new a2(null, null, (O2) => {
        let P2, Q2;
        if (M2.MoveNext()) {
          P2 = M2.Current;
          Q2 = N2.SAdd(K2(P2));
          while (!Q2 && M2.MoveNext()) {
            P2 = M2.Current;
            Q2 = N2.SAdd(K2(P2));
          }
          return Q2 && (O2.c = P2, true);
        } else
          return false;
      }, () => {
        M2.Dispose();
      });
    } };
  }
  function exists2(K2, L2) {
    const M2 = Get(L2);
    try {
      let N2;
      N2 = false;
      while (!N2 && M2.MoveNext())
        N2 = K2(M2.Current);
      return N2;
    } finally {
      const O2 = M2;
      if (typeof O2 == "object" && isIDisposable(O2))
        M2.Dispose();
    }
  }
  function exists22(K2, L2, M2) {
    const N2 = Get(L2);
    try {
      const O2 = Get(M2);
      try {
        let P2;
        P2 = false;
        while (!P2 && N2.MoveNext() && O2.MoveNext())
          P2 = K2(N2.Current, O2.Current);
        return P2;
      } finally {
        const Q2 = O2;
        if (typeof Q2 == "object" && isIDisposable(Q2))
          O2.Dispose();
      }
    } finally {
      const R2 = N2;
      if (typeof R2 == "object" && isIDisposable(R2))
        N2.Dispose();
    }
  }
  function find2(K2, L2) {
    const M2 = tryFind2(K2, L2);
    return M2 == null ? FailWith("KeyNotFoundException") : M2.$0;
  }
  function findIndex(K2, L2) {
    const M2 = tryFindIndex2(K2, L2);
    return M2 == null ? FailWith("KeyNotFoundException") : M2.$0;
  }
  function fold(K2, L2, M2) {
    let N2;
    N2 = L2;
    const O2 = Get(M2);
    try {
      while (O2.MoveNext())
        N2 = K2(N2, O2.Current);
      return N2;
    } finally {
      const P2 = O2;
      if (typeof P2 == "object" && isIDisposable(P2))
        O2.Dispose();
    }
  }
  function forall(K2, L2) {
    return !exists2((M2) => !K2(M2), L2);
  }
  function forall22(K2, L2, M2) {
    return !exists22((N2, O2) => !K2(N2, O2), L2, M2);
  }
  function head2(K2) {
    const L2 = Get(K2);
    try {
      return L2.MoveNext() ? L2.Current : insufficient();
    } finally {
      const M2 = L2;
      if (typeof M2 == "object" && isIDisposable(M2))
        L2.Dispose();
    }
  }
  function init2(K2, L2) {
    return take(K2, initInfinite(L2));
  }
  function initInfinite(K2) {
    return { GetEnumerator: () => new a2(0, null, (L2) => {
      L2.c = K2(L2.s);
      L2.s = L2.s + 1;
      return true;
    }, void 0) };
  }
  function iter3(K2, L2) {
    const M2 = Get(L2);
    try {
      while (M2.MoveNext())
        K2(M2.Current);
    } finally {
      const N2 = M2;
      if (typeof N2 == "object" && isIDisposable(N2))
        M2.Dispose();
    }
  }
  function map(K2, L2) {
    return { GetEnumerator: () => {
      const M2 = Get(L2);
      return new a2(null, null, (N2) => M2.MoveNext() && (N2.c = K2(M2.Current), true), () => {
        M2.Dispose();
      });
    } };
  }
  function mapi2(K2, L2) {
    return map22(K2, initInfinite((M2) => M2), L2);
  }
  function map22(K2, L2, M2) {
    return { GetEnumerator: () => {
      const N2 = Get(L2);
      const O2 = Get(M2);
      return new a2(null, null, (P2) => N2.MoveNext() && O2.MoveNext() && (P2.c = K2(N2.Current, O2.Current), true), () => {
        N2.Dispose();
        O2.Dispose();
      });
    } };
  }
  function max(K2) {
    const L2 = Get(K2);
    try {
      let M2;
      if (!L2.MoveNext())
        seqEmpty();
      else
        null;
      M2 = L2.Current;
      while (L2.MoveNext()) {
        const N2 = L2.Current;
        if (Compare(N2, M2) === 1)
          M2 = N2;
      }
      return M2;
    } finally {
      const O2 = L2;
      if (typeof O2 == "object" && isIDisposable(O2))
        L2.Dispose();
    }
  }
  function nth(K2, L2) {
    let M2;
    if (K2 < 0)
      FailWith("negative index requested");
    else
      null;
    M2 = -1;
    const N2 = Get(L2);
    try {
      while (M2 < K2) {
        !N2.MoveNext() ? insufficient() : void 0;
        M2 = M2 + 1;
      }
      return N2.Current;
    } finally {
      const O2 = N2;
      if (typeof O2 == "object" && isIDisposable(O2))
        N2.Dispose();
    }
  }
  function take(K2, L2) {
    K2 < 0 ? nonNegative() : void 0;
    return { GetEnumerator: () => {
      const M2 = [Get(L2)];
      return new a2(0, null, (N2) => {
        N2.s = N2.s + 1;
        if (N2.s > K2)
          return false;
        else {
          const O2 = M2[0];
          return Equals(O2, null) ? insufficient() : O2.MoveNext() ? (N2.c = O2.Current, N2.s === K2 ? (O2.Dispose(), M2[0] = null) : void 0, true) : (O2.Dispose(), M2[0] = null, insufficient());
        }
      }, () => {
        const N2 = M2[0];
        if (!Equals(N2, null))
          N2.Dispose();
      });
    } };
  }
  function tryFind2(K2, L2) {
    const M2 = Get(L2);
    try {
      let N2;
      N2 = null;
      while (N2 == null && M2.MoveNext()) {
        const O2 = M2.Current;
        if (K2(O2))
          N2 = Some(O2);
      }
      return N2;
    } finally {
      const P2 = M2;
      if (typeof P2 == "object" && isIDisposable(P2))
        M2.Dispose();
    }
  }
  function tryFindIndex2(K2, L2) {
    const M2 = Get(L2);
    try {
      let N2, O2;
      N2 = true;
      O2 = 0;
      while (N2 && M2.MoveNext())
        if (K2(M2.Current))
          N2 = false;
        else
          O2 = O2 + 1;
      return N2 ? null : Some(O2);
    } finally {
      const P2 = M2;
      if (typeof P2 == "object" && isIDisposable(P2))
        M2.Dispose();
    }
  }
  function tryPick2(K2, L2) {
    const M2 = Get(L2);
    try {
      let N2;
      N2 = null;
      while (Equals(N2, null) && M2.MoveNext())
        N2 = K2(M2.Current);
      return N2;
    } finally {
      const O2 = M2;
      if (typeof O2 == "object" && isIDisposable(O2))
        M2.Dispose();
    }
  }
  function unfold(K2, L2) {
    return { GetEnumerator: () => new a2(L2, null, (M2) => {
      const N2 = K2(M2.s);
      if (N2 == null)
        return false;
      else {
        const O2 = N2.$0[0];
        const P2 = N2.$0[1];
        M2.c = O2;
        M2.s = P2;
        return true;
      }
    }, void 0) };
  }
  function rev(K2) {
    return delay(() => ofSeq(K2).slice().reverse());
  }
  function seqEmpty() {
    return FailWith("The input sequence was empty.");
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js
  function range(f2, g2) {
    const h2 = 1 + g2 - f2;
    return h2 <= 0 ? [] : init2(h2, (i2) => i2 + f2);
  }
  function KeyValue(f2) {
    return [f2.K, f2.V];
  }
  function FailWith(f2) {
    throw new Error(f2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js
  function Hash(d2) {
    const e2 = typeof d2;
    return e2 == "function" ? 0 : e2 == "boolean" ? d2 ? 1 : 0 : e2 == "number" ? d2 : e2 == "string" ? hashString(d2) : e2 == "object" ? d2 == null ? 0 : d2 instanceof Array ? hashArray(d2) : hashObject(d2) : e2 == "bigint" ? hashString(String(d2)) : e2 == "symbol" ? hashString(d2.description) : 0;
  }
  function hashObject(d2) {
    if ("GetHashCode" in d2)
      return d2.GetHashCode();
    else {
      const e2 = hashMix;
      const f2 = [0];
      let g2;
      for (var h2 in d2)
        if (((i2) => {
          f2[0] = e2(e2(f2[0], hashString(i2)), Hash(d2[i2]));
          return false;
        })(h2))
          break;
      return f2[0];
    }
  }
  function hashString(d2) {
    let e2;
    if (d2 === null)
      return 0;
    else {
      e2 = 5381;
      for (let f2 = 0, g2 = d2.length - 1; f2 <= g2; f2++)
        e2 = hashMix(e2, d2[f2].charCodeAt());
      return e2;
    }
  }
  function hashArray(d2) {
    let e2;
    e2 = -34948909;
    for (let f2 = 0, g2 = length(d2) - 1; f2 <= g2; f2++)
      e2 = hashMix(e2, Hash(get(d2, f2)));
    return e2;
  }
  function hashMix(d2, e2) {
    return (d2 << 5) + d2 + e2;
  }
  function Equals(d2, e2) {
    let f2;
    if (d2 === e2)
      return true;
    else {
      const g2 = typeof d2;
      if (g2 == "object") {
        if (d2 === null || d2 === void 0 || e2 === null || e2 === void 0 || !Equals(typeof e2, "object"))
          return false;
        else if ("Equals" in d2)
          return d2.Equals(e2);
        else if ("Equals" in e2)
          return false;
        else if (d2 instanceof Array && e2 instanceof Array)
          return arrayEquals(d2, e2);
        else if (d2 instanceof Date && e2 instanceof Date)
          return dateEquals(d2, e2);
        else {
          const h2 = d2;
          const i2 = e2;
          const j2 = [true];
          let k2;
          for (var m2 in h2)
            if (((n3) => {
              j2[0] = !h2.hasOwnProperty(n3) || i2.hasOwnProperty(n3) && Equals(h2[n3], i2[n3]);
              return !j2[0];
            })(m2))
              break;
          if (j2[0]) {
            let l2;
            for (var n2 in i2)
              if (((o2) => {
                j2[0] = !i2.hasOwnProperty(o2) || h2.hasOwnProperty(o2);
                return !j2[0];
              })(n2))
                break;
            f2 = void 0;
          } else
            f2 = null;
          return j2[0];
        }
      } else
        return g2 == "function" && ("$Func" in d2 ? d2.$Func === e2.$Func && d2.$Target === e2.$Target : "$Invokes" in d2 && "$Invokes" in e2 && arrayEquals(d2.$Invokes, e2.$Invokes));
    }
  }
  function dateEquals(d2, e2) {
    return d2.getTime() === e2.getTime();
  }
  function arrayEquals(d2, e2) {
    let f2, g2;
    if (length(d2) === length(e2)) {
      f2 = true;
      g2 = 0;
      while (f2 && g2 < length(d2)) {
        !Equals(get(d2, g2), get(e2, g2)) ? f2 = false : void 0;
        g2 = g2 + 1;
      }
      return f2;
    } else
      return false;
  }
  function Compare(d2, e2) {
    if (d2 === e2)
      return 0;
    else {
      const f2 = typeof d2;
      switch (f2 == "boolean" ? 1 : f2 == "number" ? 1 : f2 == "bigint" ? 1 : f2 == "string" ? 1 : f2 == "object" ? 2 : f2 == "function" ? 3 : f2 == "symbol" ? 4 : 0) {
        case 0:
          return typeof e2 == "undefined" ? 0 : -1;
        case 1:
          return d2 < e2 ? -1 : 1;
        case 2:
          let g2;
          if (d2 === null)
            return -1;
          else if (e2 === null)
            return 1;
          else if ("CompareTo" in d2)
            return d2.CompareTo(e2);
          else if ("CompareTo0" in d2)
            return d2.CompareTo0(e2);
          else if (d2 instanceof Array && e2 instanceof Array)
            return compareArrays(d2, e2);
          else if (d2 instanceof Date && e2 instanceof Date)
            return compareDates(d2, e2);
          else {
            const h2 = d2;
            const i2 = e2;
            const j2 = [0];
            let k2;
            for (var m2 in h2)
              if (((n3) => !h2.hasOwnProperty(n3) ? false : !i2.hasOwnProperty(n3) ? (j2[0] = 1, true) : (j2[0] = Compare(h2[n3], i2[n3]), j2[0] !== 0))(m2))
                break;
            if (j2[0] === 0) {
              let l2;
              for (var n2 in i2)
                if (((o2) => !i2.hasOwnProperty(o2) ? false : !h2.hasOwnProperty(o2) && (j2[0] = -1, true))(n2))
                  break;
              g2 = void 0;
            } else
              g2 = null;
            return j2[0];
          }
          break;
        case 3:
          return FailWith("Cannot compare function values.");
        case 4:
          return FailWith("Cannot compare symbol values.");
      }
    }
  }
  function compareDates(d2, e2) {
    return Compare(d2.getTime(), e2.getTime());
  }
  function compareArrays(d2, e2) {
    let f2, g2;
    if (length(d2) < length(e2))
      return -1;
    else if (length(d2) > length(e2))
      return 1;
    else {
      f2 = 0;
      g2 = 0;
      while (f2 === 0 && g2 < length(d2)) {
        f2 = Compare(get(d2, g2), get(e2, g2));
        g2 = g2 + 1;
      }
      return f2;
    }
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js
  function length(g2) {
    return g2.dims === 2 ? g2.length * g2.length : g2.length;
  }
  function get(g2, h2) {
    checkBounds(g2, h2);
    return g2[h2];
  }
  function set(g2, h2, i2) {
    checkBounds(g2, h2);
    g2[h2] = i2;
  }
  function checkRange(g2, h2, i2) {
    if (i2 < 0 || h2 < 0 || g2.length < h2 + i2)
      FailWith("Index was outside the bounds of the array.");
  }
  function checkBounds(g2, h2) {
    if (h2 < 0 || h2 >= g2.length)
      FailWith("Index was outside the bounds of the array.");
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Enumerator.js
  function ArrayCopyTo(k2, l2, m2) {
    let n2;
    if (length(k2) + m2 < length(l2))
      throw new a5("New_2", "array");
    else
      n2 = void 0;
    blit(k2, 0, l2, m2, length(k2));
  }
  function Get0(k2) {
    return k2 instanceof Array ? ArrayEnumerator(k2) : Equals(typeof k2, "string") ? StringEnumerator(k2) : "GetEnumerator0" in k2 ? k2.GetEnumerator0() : k2.GetEnumerator();
  }
  function Get(k2) {
    return k2 instanceof Array ? ArrayEnumerator(k2) : Equals(typeof k2, "string") ? StringEnumerator(k2) : k2.GetEnumerator();
  }
  function StringEnumerator(k2) {
    return new a2(0, null, (l2) => {
      const m2 = l2.s;
      return m2 < k2.length && (l2.c = k2[m2], l2.s = m2 + 1, true);
    }, void 0);
  }
  function ArrayEnumerator(k2) {
    return new a2(0, null, (l2) => {
      const m2 = l2.s;
      return m2 < length(k2) && (l2.c = get(k2, m2), l2.s = m2 + 1, true);
    }, void 0);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Concurrency.AsyncBody`1.js
  function New2(a67, b2) {
    return { k: a67, ct: b2 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Concurrency.Result`1.js
  function Cc(a67) {
    return { $: 2, $0: a67 };
  }
  function No(a67) {
    return { $: 1, $0: a67 };
  }
  function Ok(a67) {
    return { $: 0, $0: a67 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.AggregateException.js
  var a14 = class extends Error {
    innerExceptions;
    constructor(c2, d2, e2) {
      let f2;
      if (c2 == "New_3") {
        f2 = d2;
        c2 = "New_4";
        d2 = "One or more errors occurred.";
        e2 = f2;
      }
      let g2;
      if (c2 == "New_2") {
        g2 = d2;
        c2 = "New_4";
        d2 = "One or more errors occurred.";
        e2 = ofSeq(g2);
      }
      let h2;
      let i2;
      if (c2 == "New_1") {
        h2 = d2;
        i2 = e2;
        c2 = "New_4";
        d2 = h2;
        e2 = ofSeq(i2);
      }
      let j2;
      let k2;
      if (c2 == "New") {
        j2 = d2;
        k2 = e2;
        c2 = "New_4";
        d2 = j2;
        e2 = [k2];
      }
      if (c2 == "New_4") {
        const l2 = d2;
        const m2 = e2;
        super(l2);
        this.innerExceptions = m2;
      }
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.OperationCanceledException.js
  var a15 = class extends Error {
    ct;
    constructor(b2, c2, d2, e2) {
      let f2;
      if (b2 == "New") {
        f2 = c2;
        b2 = "New_1";
        c2 = "The operation was canceled.";
        d2 = null;
        e2 = f2;
      }
      if (b2 == "New_1") {
        const g2 = c2;
        const h2 = d2;
        const i2 = e2;
        super(g2);
        this.inner = h2;
        this.ct = i2;
      }
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Concurrency.CT.js
  function New3(a67, b2) {
    return { c: a67, r: b2 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Concurrency.Scheduler.js
  var a20 = class extends a {
    idle;
    robin;
    tick() {
      let c2;
      const d2 = Date.now();
      c2 = true;
      while (c2)
        if (this.robin.length === 0) {
          this.idle = true;
          c2 = false;
        } else {
          this.robin.shift()();
          Date.now() - d2 > 40 ? (setTimeout(() => {
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

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Threading.CancellationTokenSource.js
  var a21 = class _a extends a {
    init;
    c;
    pending;
    r;
    static CreateLinkedTokenSource(i2, j2) {
      return _a.CreateLinkedTokenSource_1([i2, j2]);
    }
    static CreateLinkedTokenSource_1(i2) {
      const j2 = new _a();
      iter((k2) => {
        Register(k2, () => {
          j2.Cancel_1();
        });
      }, i2);
      return j2;
    }
    CancelAfter(i2) {
      if (!this.c) {
        const j2 = this.pending;
        if (j2 == null) {
        } else
          clearTimeout(j2.$0);
        this.pending = Some(setTimeout(() => {
          this.Cancel_1();
        }, i2));
      }
    }
    Cancel(i2) {
      if (!i2)
        this.Cancel_1();
      else if (!this.c) {
        this.c = true;
        iter((j2) => {
          j2();
        }, this.r);
      }
    }
    Cancel_1() {
      if (!this.c) {
        this.c = true;
        const i2 = choose((j2) => {
          try {
            j2();
            return null;
          } catch (k2) {
            return Some(k2);
          }
        }, this.r);
        if (length(i2) > 0)
          throw new a14("New_3", i2);
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

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/$StartupCode_Concurrency.js
  var a22 = Lazy((h2) => class i {
    static {
      a22 = h2(this);
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
      this.GetCT = (j2) => {
        j2.k(Ok(j2.ct));
      };
    }
  });
  var StartupCode_Concurrency_default = a22;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Core.FSharpChoice`2.js
  function Choice1Of2(a67) {
    return { $: 0, $0: a67 };
  }
  function Choice2Of2(a67) {
    return { $: 1, $0: a67 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Concurrency.js
  function Start(u2, v2) {
    const w2 = defCTS()[0];
    const x2 = v2 == null ? w2 : v2.$0;
    scheduler().Fork(() => {
      if (!x2.c)
        u2(New2((y2) => {
          if (y2.$ == 1)
            UncaughtAsyncError(y2.$0);
        }, x2));
    });
  }
  function UncaughtAsyncError(u2) {
    console.log("WebSharper: Uncaught asynchronous exception", u2);
  }
  function StartWithContinuations(u2, v2, w2, x2, y2) {
    const z2 = defCTS()[0];
    const A2 = y2 == null ? z2 : y2.$0;
    if (!A2.c)
      u2(New2((B3) => {
        if (B3.$ == 1)
          w2(B3.$0);
        else if (B3.$ == 2)
          x2(B3.$0);
        else
          v2(B3.$0);
      }, A2));
  }
  function FromContinuations(u2) {
    return (v2) => {
      const w2 = [false];
      const x2 = (y2) => {
        if (w2[0])
          FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
        else {
          w2[0] = true;
          scheduler().Fork(y2);
        }
      };
      u2((y2) => {
        x2(() => {
          v2.k(Ok(y2));
        });
      }, (y2) => {
        x2(() => {
          v2.k(No(y2));
        });
      }, (y2) => {
        x2(() => {
          v2.k(Cc(y2));
        });
      });
    };
  }
  function Delay(u2) {
    return (v2) => {
      try {
        u2(null, v2);
      } catch (w2) {
        v2.k(No(w2));
      }
    };
  }
  function Bind(u2, v2) {
    return checkCancel((w2) => {
      u2(New2((x2) => {
        if (x2.$ == 0) {
          const y2 = x2.$0;
          scheduler().Fork(() => {
            try {
              v2(y2, w2);
            } catch (z2) {
              w2.k(No(z2));
            }
          });
        } else
          scheduler().Fork(() => {
            w2.k(x2);
          });
      }, w2.ct));
    });
  }
  function Zero() {
    return StartupCode_Concurrency_default.Zero;
  }
  function Return(u2) {
    return (v2) => {
      v2.k(Ok(u2));
    };
  }
  function checkCancel(u2) {
    return (v2) => {
      if (v2.ct.c)
        cancel(v2);
      else
        u2(v2);
    };
  }
  function cancel(u2) {
    u2.k(Cc(new a15("New", u2.ct)));
  }
  function defCTS() {
    return StartupCode_Concurrency_default.defCTS;
  }
  function scheduler() {
    return StartupCode_Concurrency_default.scheduler;
  }
  function Register(u2, v2) {
    if (u2 === noneCT())
      return { Dispose() {
        return null;
      } };
    else {
      const w2 = u2.r.push(v2) - 1;
      return { Dispose() {
        return set(u2.r, w2, () => {
        });
      } };
    }
  }
  function noneCT() {
    return StartupCode_Concurrency_default.noneCT;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.SnapState`1.js
  function Waiting(a67, b2) {
    return { $: 3, $0: a67, $1: b2 };
  }
  function Ready(a67, b2) {
    return { $: 2, $0: a67, $1: b2 };
  }
  function Forever(a67) {
    return { $: 0, $0: a67 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Abbrev.Async.js
  function OnError(b2) {
    return console.log("WebSharper UI: Uncaught asynchronous exception", b2);
  }
  function StartTo(b2, c2) {
    StartWithContinuations(b2, c2, (d2) => {
      OnError(d2);
    }, () => {
    }, null);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Snap`1.js
  function Obsolete(c2) {
    let d2;
    const e2 = c2.s;
    if (e2 == null || (e2 != null && e2.$ == 2 ? (d2 = e2.$1, false) : e2 != null && e2.$ == 3 ? (d2 = e2.$1, false) : true))
      ;
    else {
      c2.s = null;
      for (let g2 = 0, h2 = length(d2) - 1; g2 <= h2; g2++) {
        const f2 = get(d2, g2);
        if (typeof f2 == "object")
          ((i2) => {
            Obsolete(i2);
          })(f2);
        else
          f2();
      }
    }
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.QueueProxy.js
  function Clear(e2) {
    e2.splice(0, length(e2));
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Snap.js
  function MapAsync(o2, p2) {
    const q2 = { s: Waiting([], []) };
    When(p2, (r2) => {
      StartTo(o2(r2), (s6) => {
        MarkDone(q2, p2, s6);
      });
    }, q2);
    return q2;
  }
  function Map3(o2, p2, q2, r2) {
    const s6 = p2.s;
    const t2 = q2.s;
    const u2 = r2.s;
    if (s6 != null && s6.$ == 0)
      return t2 != null && t2.$ == 0 ? u2 != null && u2.$ == 0 ? { s: Forever(o2(s6.$0, t2.$0, u2.$0)) } : Map3Opt1(o2, s6.$0, t2.$0, r2) : u2 != null && u2.$ == 0 ? Map3Opt2(o2, s6.$0, u2.$0, q2) : Map3Opt3(o2, s6.$0, q2, r2);
    else if (t2 != null && t2.$ == 0)
      return u2 != null && u2.$ == 0 ? Map3Opt4(o2, t2.$0, u2.$0, p2) : Map3Opt5(o2, t2.$0, p2, r2);
    else if (u2 != null && u2.$ == 0)
      return Map3Opt6(o2, u2.$0, p2, q2);
    else {
      const v2 = { s: Waiting([], []) };
      const w2 = () => {
        const x2 = v2.s;
        if (!(x2 != null && x2.$ == 0 || x2 != null && x2.$ == 2)) {
          const y2 = ValueAndForever(p2);
          const z2 = ValueAndForever(q2);
          const A2 = ValueAndForever(r2);
          if (y2 != null && y2.$ == 1) {
            if (z2 != null && z2.$ == 1) {
              if (A2 != null && A2.$ == 1)
                if (y2.$0[1] && z2.$0[1] && A2.$0[1])
                  MarkForever(v2, o2(y2.$0[0], z2.$0[0], A2.$0[0]));
                else
                  MarkReady(v2, o2(y2.$0[0], z2.$0[0], A2.$0[0]));
            }
          }
        }
      };
      When(p2, w2, v2);
      When(q2, w2, v2);
      When(r2, w2, v2);
      return v2;
    }
  }
  function Map3Opt6(o2, p2, q2, r2) {
    return Map2((s6, t2) => o2(s6, t2, p2), q2, r2);
  }
  function Map3Opt5(o2, p2, q2, r2) {
    return Map2((s6, t2) => o2(s6, p2, t2), q2, r2);
  }
  function Map3Opt4(o2, p2, q2, r2) {
    return Map((s6) => o2(s6, p2, q2), r2);
  }
  function Map3Opt3(o2, p2, q2, r2) {
    return Map2((s6, t2) => o2(p2, s6, t2), q2, r2);
  }
  function Map3Opt2(o2, p2, q2, r2) {
    return Map((s6) => o2(p2, s6, q2), r2);
  }
  function Map3Opt1(o2, p2, q2, r2) {
    return Map((s6) => o2(p2, q2, s6), r2);
  }
  function Map2Unit(o2, p2) {
    const q2 = o2.s;
    const r2 = p2.s;
    if (q2 != null && q2.$ == 0)
      return r2 != null && r2.$ == 0 ? { s: Forever(null) } : p2;
    else if (r2 != null && r2.$ == 0)
      return o2;
    else {
      const s6 = { s: Waiting([], []) };
      const t2 = () => {
        const u2 = s6.s;
        if (!(u2 != null && u2.$ == 0 || u2 != null && u2.$ == 2)) {
          const v2 = ValueAndForever(o2);
          const w2 = ValueAndForever(p2);
          if (v2 != null && v2.$ == 1) {
            if (w2 != null && w2.$ == 1)
              if (v2.$0[1] && w2.$0[1])
                MarkForever(s6, null);
              else
                MarkReady(s6, null);
          }
        }
      };
      When(o2, t2, s6);
      When(p2, t2, s6);
      return s6;
    }
  }
  function Map2(o2, p2, q2) {
    const r2 = p2.s;
    const s6 = q2.s;
    if (r2 != null && r2.$ == 0)
      return s6 != null && s6.$ == 0 ? { s: Forever(o2(r2.$0, s6.$0)) } : Map2Opt1(o2, r2.$0, q2);
    else if (s6 != null && s6.$ == 0)
      return Map2Opt2(o2, s6.$0, p2);
    else {
      const t2 = { s: Waiting([], []) };
      const u2 = () => {
        const v2 = t2.s;
        if (!(v2 != null && v2.$ == 0 || v2 != null && v2.$ == 2)) {
          const w2 = ValueAndForever(p2);
          const x2 = ValueAndForever(q2);
          if (w2 != null && w2.$ == 1) {
            if (x2 != null && x2.$ == 1)
              if (w2.$0[1] && x2.$0[1])
                MarkForever(t2, o2(w2.$0[0], x2.$0[0]));
              else
                MarkReady(t2, o2(w2.$0[0], x2.$0[0]));
          }
        }
      };
      When(p2, u2, t2);
      When(q2, u2, t2);
      return t2;
    }
  }
  function Map2Opt2(o2, p2, q2) {
    return Map((r2) => o2(r2, p2), q2);
  }
  function Map2Opt1(o2, p2, q2) {
    return Map((r2) => o2(p2, r2), q2);
  }
  function Copy(o2) {
    const p2 = o2.s;
    if (p2 == null)
      return o2;
    else if (p2 != null && p2.$ == 2) {
      const q2 = { s: Ready(p2.$0, []) };
      WhenObsolete(o2, q2);
      return q2;
    } else if (p2 != null && p2.$ == 3) {
      const r2 = { s: Waiting([], []) };
      When(o2, (s6) => {
        MarkDone(r2, o2, s6);
      }, r2);
      return r2;
    } else
      return o2;
  }
  function Map(o2, p2) {
    const q2 = p2.s;
    if (q2 != null && q2.$ == 0)
      return { s: Forever(o2(q2.$0)) };
    else {
      const r2 = { s: Waiting([], []) };
      When(p2, (s6) => {
        MarkDone(r2, p2, o2(s6));
      }, r2);
      return r2;
    }
  }
  function Sequence(o2) {
    const p2 = ofSeq(o2);
    if (p2.length == 0)
      return { s: Forever([]) };
    else {
      const q2 = { s: Waiting([], []) };
      const r2 = [length(p2) - 1];
      const s6 = () => {
        if (r2[0] === 0) {
          const t2 = map2((u2) => {
            const v2 = u2.s;
            return v2 != null && v2.$ == 0 ? v2.$0 : v2 != null && v2.$ == 2 ? v2.$0 : FailWith("value not found by View.Sequence");
          }, p2);
          if (forall2((u2) => {
            const v2 = u2.s;
            return v2 != null && v2.$ == 0;
          }, p2))
            MarkForever(q2, t2);
          else
            MarkReady(q2, t2);
        } else
          r2[0] = r2[0] - 1;
      };
      iter((t2) => {
        When(t2, s6, q2);
      }, p2);
      return q2;
    }
  }
  function JoinInner(o2) {
    const p2 = { s: Waiting([], []) };
    When(o2, (q2) => {
      const r2 = q2();
      When(r2, (s6) => {
        let t2;
        const u2 = r2.s;
        if (u2 != null && u2.$ == 0) {
          const v2 = o2.s;
          t2 = v2 != null && v2.$ == 0;
        } else
          t2 = false;
        if (t2)
          MarkForever(p2, s6);
        else
          MarkReady(p2, s6);
      }, p2);
      WhenObsolete(o2, r2);
    }, p2);
    return p2;
  }
  function Join(o2) {
    const p2 = { s: Waiting([], []) };
    When(o2, (q2) => {
      const r2 = q2();
      When(r2, (s6) => {
        let t2;
        const u2 = r2.s;
        if (u2 != null && u2.$ == 0) {
          const v2 = o2.s;
          t2 = v2 != null && v2.$ == 0;
        } else
          t2 = false;
        if (t2)
          MarkForever(p2, s6);
        else
          MarkReady(p2, s6);
      }, p2);
    }, p2);
    return p2;
  }
  function ValueAndForever(o2) {
    const p2 = o2.s;
    return p2 != null && p2.$ == 0 ? Some([p2.$0, true]) : p2 != null && p2.$ == 2 ? Some([p2.$0, false]) : null;
  }
  function WhenObsoleteRun(o2, p2) {
    const q2 = o2.s;
    if (q2 == null)
      p2();
    else
      q2 != null && q2.$ == 2 ? (q2.$0, q2.$1.push(p2)) : q2 != null && q2.$ == 3 ? (q2.$0, q2.$1.push(p2)) : q2.$0;
  }
  function WhenObsolete(o2, p2) {
    const q2 = o2.s;
    if (q2 == null)
      Obsolete(p2);
    else
      q2 != null && q2.$ == 2 ? (q2.$0, EnqueueSafe(q2.$1, p2)) : q2 != null && q2.$ == 3 ? (q2.$0, EnqueueSafe(q2.$1, p2)) : q2.$0;
  }
  function WhenRun(o2, p2, q2) {
    const r2 = o2.s;
    if (r2 == null)
      q2();
    else if (r2 != null && r2.$ == 2) {
      const s6 = r2.$0;
      r2.$1.push(q2);
      p2(s6);
    } else if (r2 != null && r2.$ == 3) {
      const t2 = r2.$1;
      r2.$0.push(p2);
      t2.push(q2);
    } else
      p2(r2.$0);
  }
  function When(o2, p2, q2) {
    const r2 = o2.s;
    if (r2 == null)
      Obsolete(q2);
    else if (r2 != null && r2.$ == 2) {
      const s6 = r2.$0;
      EnqueueSafe(r2.$1, q2);
      p2(s6);
    } else if (r2 != null && r2.$ == 3) {
      const t2 = r2.$1;
      r2.$0.push(p2);
      EnqueueSafe(t2, q2);
    } else
      p2(r2.$0);
  }
  function EnqueueSafe(o2, p2) {
    o2.push(p2);
    if (o2.length % 20 === 0) {
      const q2 = o2.slice(0);
      Clear(o2);
      for (let s6 = 0, t2 = length(q2) - 1; s6 <= t2; s6++) {
        const r2 = get(q2, s6);
        if (typeof r2 == "object")
          ((u2) => {
            if (u2.s)
              o2.push(u2);
          })(r2);
        else
          ((u2) => {
            o2.push(u2);
          })(r2);
      }
    } else
      ;
  }
  function MarkDone(o2, p2, q2) {
    const r2 = p2.s;
    if (r2 != null && r2.$ == 0)
      MarkForever(o2, q2);
    else
      MarkReady(o2, q2);
  }
  function MarkReady(o2, p2) {
    const q2 = o2.s;
    if (q2 != null && q2.$ == 3) {
      const r2 = q2.$1;
      const s6 = q2.$0;
      o2.s = Ready(p2, r2);
      for (let t2 = 0, u2 = length(s6) - 1; t2 <= u2; t2++)
        get(s6, t2)(p2);
    } else
      ;
  }
  function MarkForever(o2, p2) {
    const q2 = o2.s;
    if (q2 != null && q2.$ == 3) {
      const r2 = q2.$0;
      o2.s = Forever(p2);
      for (let s6 = 0, t2 = length(r2) - 1; s6 <= t2; s6++)
        get(r2, s6)(p2);
    } else
      ;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Array.js
  function mapInPlace2(g2, h2) {
    for (let i2 = 0, j2 = h2.length - 1; i2 <= j2; i2++)
      h2[i2] = g2(h2[i2]);
    return h2;
  }
  function ofSeqNonCopying(g2) {
    if (g2 instanceof Array)
      return g2;
    else if (g2 instanceof a9)
      return ofList(g2);
    else if (g2 === null)
      return [];
    else {
      const h2 = [];
      const i2 = Get(g2);
      try {
        while (i2.MoveNext())
          h2.push(i2.Current);
        return h2;
      } finally {
        const j2 = i2;
        if (typeof j2 == "object" && isIDisposable(j2))
          i2.Dispose();
      }
    }
  }
  function MapTreeReduce(g2, h2, i2, j2) {
    const k2 = length(j2);
    function l2(m2) {
      return (n2) => {
        let o2;
        switch (n2 <= 0 ? 0 : n2 === 1 ? m2 >= 0 && m2 < k2 ? 1 : (o2 = n2, 2) : (o2 = n2, 2)) {
          case 0:
            return h2;
          case 1:
            return g2(get(j2, m2));
          case 2:
            const p2 = n2 / 2 >> 0;
            return i2(l2(m2)(p2), l2(m2 + p2)(n2 - p2));
        }
      };
    }
    return l2(0)(k2);
  }
  function TreeReduce(g2, h2, i2) {
    const j2 = length(i2);
    function k2(l2) {
      return (m2) => {
        let n2;
        switch (m2 <= 0 ? 0 : m2 === 1 ? l2 >= 0 && l2 < j2 ? 1 : (n2 = m2, 2) : (n2 = m2, 2)) {
          case 0:
            return g2;
          case 1:
            return get(i2, l2);
          case 2:
            const o2 = m2 / 2 >> 0;
            return h2(k2(l2)(o2), k2(l2 + o2)(m2 - o2));
        }
      };
    }
    return k2(0)(j2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.View.js
  function Sink(E2, F2) {
    function G2() {
      WhenRun(F2(), E2, () => {
        scheduler().Fork(G2);
      });
    }
    scheduler().Fork(G2);
  }
  function Const(E2) {
    const F2 = { s: Forever(E2) };
    return () => F2;
  }
  function Sequence2(E2) {
    return CreateLazy(() => Sequence(map((F2) => F2(), E2)));
  }
  function BindInner(E2, F2) {
    return JoinInner2(Map4(E2, F2));
  }
  function JoinInner2(E2) {
    return CreateLazy(() => JoinInner(E2()));
  }
  function Bind2(E2, F2) {
    return Join2(Map4(E2, F2));
  }
  function Join2(E2) {
    return CreateLazy(() => Join(E2()));
  }
  function MapSeqCachedView(E2, F2) {
    const G2 = () => E2;
    return MapSeqCachedViewBy((H2) => H2, (H2, I2) => G2(H2)(I2), F2);
  }
  function MapSeqCachedViewBy(E2, F2, G2) {
    const H2 = [new a7("New_5")];
    return Map4((I2) => {
      const J2 = H2[0];
      const K2 = new a7("New_5");
      const L2 = mapInPlace2((M2) => {
        let N2;
        const O2 = E2(M2);
        if (J2.ContainsKey(O2)) {
          const P2 = J2.Item(O2);
          N2 = (WebSharper_UI_Var_default.Set(P2.r, M2), P2);
        } else
          N2 = ConvertSeqNode((Q2) => F2(O2, Q2), M2);
        K2.set_Item(O2, N2);
        return N2.e;
      }, ofSeq(I2));
      H2[0] = K2;
      return L2;
    }, G2);
  }
  function ConvertSeqNode(E2, F2) {
    const G2 = WebSharper_UI_Var_default.Create_1(F2);
    const H2 = G2.View;
    return { e: E2(H2), r: G2, w: H2 };
  }
  function MapSeqCached(E2, F2) {
    return MapSeqCachedBy((G2) => G2, E2, F2);
  }
  function MapSeqCachedBy(E2, F2, G2) {
    const H2 = [new a7("New_5")];
    return Map4((I2) => {
      const J2 = H2[0];
      const K2 = new a7("New_5");
      const L2 = mapInPlace2((M2) => {
        const N2 = E2(M2);
        const O2 = J2.ContainsKey(N2) ? J2.Item(N2) : F2(M2);
        K2.set_Item(N2, O2);
        return O2;
      }, ofSeq(I2));
      H2[0] = K2;
      return L2;
    }, G2);
  }
  function Get2(E2, F2) {
    const G2 = [false];
    function H2() {
      WhenRun(F2(), (I2) => {
        if (!G2[0]) {
          G2[0] = true;
          E2(I2);
        }
      }, () => {
        if (!G2[0])
          H2();
      });
    }
    H2();
  }
  function MapAsync2(E2, F2) {
    return CreateLazy(() => MapAsync(E2, F2()));
  }
  function Map32(E2, F2, G2, H2) {
    return CreateLazy(() => Map3(E2, F2(), G2(), H2()));
  }
  function Map2Unit2(E2, F2) {
    return CreateLazy(() => Map2Unit(E2(), F2()));
  }
  function Map22(E2, F2, G2) {
    return CreateLazy(() => Map2(E2, F2(), G2()));
  }
  function Map4(E2, F2) {
    return CreateLazy(() => Map(E2, F2()));
  }
  function CreateLazy(E2) {
    const F2 = { c: null, o: E2 };
    return () => {
      let G2;
      G2 = F2.c;
      if (G2 === null) {
        G2 = F2.o();
        F2.c = G2;
        const H2 = G2.s;
        if (H2 != null && H2.$ == 0)
          F2.o = null;
        else
          WhenObsoleteRun(G2, () => {
            F2.c = null;
          });
        return G2;
      } else
        return G2;
    };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/$StartupCode_Abbrev.js
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

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Abbrev.Fresh.js
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

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Var`1.js
  var a25 = class extends a {
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.List.js
  function maybeReplaceFirst(b2, c2, d2) {
    const e2 = [false];
    return map3((f2) => {
      if (!e2[0] && b2(f2)) {
        const g2 = c2(f2);
        return g2 == null ? f2 : g2.$0;
      } else
        return f2;
    }, d2);
  }
  function replaceFirst(b2, c2, d2) {
    const e2 = [false];
    return map3((f2) => !e2[0] && b2(f2) ? c2(f2) : f2, d2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.ConcreteVar`1.js
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
    UpdateMaybe(g2) {
      const h2 = g2(this.Get());
      if (h2 != null && h2.$ == 1)
        this.Set(h2.$0);
    }
    Update(g2) {
      this.Set(g2(this.Get()));
    }
    SetFinal(g2) {
      if (this.isConst)
        ((h2) => h2("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((h2) => {
          console.log(h2);
        });
      else {
        Obsolete(this.snap);
        this.isConst = true;
        this.current = g2;
        this.snap = { s: Forever(g2) };
      }
    }
    Set(g2) {
      if (this.isConst)
        ((h2) => h2("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((h2) => {
          console.log(h2);
        });
      else {
        Obsolete(this.snap);
        this.current = g2;
        this.snap = { s: Ready(g2, []) };
      }
    }
    Get() {
      return this.current;
    }
    constructor(g2, h2, i2) {
      super();
      this.isConst = g2;
      this.current = i2;
      this.snap = h2;
      this.view = () => this.snap;
      this.id = Int();
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Var.js
  var a27 = Lazy((p2) => class q extends a {
    static {
      a27 = p2(this);
    }
    static MapLens(r2, s6, t2) {
      return MapSeqCachedViewBy(r2, (u2, v2) => {
        const w2 = Id();
        const x2 = (y2) => Equals(r2(y2), u2);
        return s6(new class extends a25 {
          constructor() {
            super();
          }
          Get() {
            return find2(x2, t2.Get());
          }
          Set(y2) {
            const z2 = () => y2;
            return t2.Update((A2) => replaceFirst(x2, z2, A2));
          }
          SetFinal(y2) {
            return this.Set(y2);
          }
          Update(y2) {
            return t2.Update((z2) => replaceFirst(x2, y2, z2));
          }
          UpdateMaybe(y2) {
            return t2.Update((z2) => maybeReplaceFirst(x2, y2, z2));
          }
          get View() {
            return v2;
          }
          get Id() {
            return w2;
          }
        }());
      }, t2.View);
    }
    static Lens(r2, s6, t2) {
      const u2 = Id();
      const v2 = Map4(s6, r2.View);
      return new class extends a25 {
        constructor() {
          super();
        }
        Get() {
          return s6(r2.Get());
        }
        Set(w2) {
          return r2.Update((x2) => t2(x2, w2));
        }
        SetFinal(w2) {
          return this.Set(w2);
        }
        Update(w2) {
          return r2.Update((x2) => t2(x2, w2(s6(x2))));
        }
        UpdateMaybe(w2) {
          return r2.UpdateMaybe((x2) => {
            const y2 = w2(s6(x2));
            return y2 == null ? null : Some(t2(x2, y2.$0));
          });
        }
        get View() {
          return v2;
        }
        get Id() {
          return u2;
        }
      }();
    }
    static Update(r2, s6) {
      a27.Set(r2, s6(r2.Get()));
    }
    static SetFinal(r2, s6) {
      r2.SetFinal(s6);
    }
    static Set(r2, s6) {
      r2.Set(s6);
    }
    static CreateWaiting() {
      return new a26(false, { s: Waiting([], []) }, null);
    }
    static Create() {
      return new a26(false, { s: Ready(null, []) }, null);
    }
    static CreateLogged(r2, s6) {
      if (!globalThis.UINVars)
        globalThis.UINVars = [];
      else
        null;
      const t2 = a27.Create_1(s6);
      globalThis.UINVars.push([r2, t2]);
      return t2;
    }
    static Create_1(r2) {
      return new a26(false, { s: Ready(r2, []) }, r2);
    }
    static {
    }
  });
  var WebSharper_UI_Var_default = a27;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Attr.js
  var a28 = class _a {
    static A1(g2) {
      return Create2(_a, { $: 1, $0: g2 });
    }
    static A2(g2, h2) {
      return Create2(_a, { $: 2, $0: g2, $1: h2 });
    }
    static A3(g2) {
      return Create2(_a, { $: 3, $0: g2 });
    }
    static A4(g2) {
      return Create2(_a, { $: 4, $0: g2 });
    }
    static HandlerImpl(g2, h2) {
      return _a.A3((i2) => {
        i2.addEventListener(g2, (j2) => h2(i2)(j2), false);
      });
    }
    static Concat(g2) {
      const h2 = ofSeqNonCopying(g2);
      return TreeReduce(EmptyAttr(), (i2, j2) => AppendTree(i2, j2), h2);
    }
    static Create(g2, h2) {
      return _a.A3((i2) => {
        i2.setAttribute(g2, h2);
      });
    }
    $;
    $0;
    $1;
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/$StartupCode_AppendList.js
  var a29 = Lazy((c2) => class d {
    static {
      a29 = c2(this);
    }
    static Empty;
    static {
      this.Empty = { $: 0 };
    }
  });
  var StartupCode_AppendList_default = a29;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.AppendList.js
  function ToArray(f2) {
    const g2 = [];
    function h2(i2) {
      while (true) {
        if (i2.$ == 1)
          return g2.push(i2.$0);
        else if (i2.$ == 2) {
          const j2 = i2.$1;
          const k2 = i2.$0;
          h2(k2);
          i2 = j2;
        } else
          return i2.$ == 3 ? iter((l2) => {
            g2.push(l2);
          }, i2.$0) : null;
      }
    }
    h2(f2);
    return g2.slice(0);
  }
  function Concat(f2) {
    const g2 = ofSeqNonCopying(f2);
    return TreeReduce(Empty(), Append, g2);
  }
  function Append(f2, g2) {
    return f2.$ == 0 ? g2 : g2.$ == 0 ? f2 : { $: 2, $0: f2, $1: g2 };
  }
  function Empty() {
    return StartupCode_AppendList_default.Empty;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Easings.js
  function CubicInOut() {
    return StartupCode_Animation_default.CubicInOut;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Easing.js
  var a30 = Lazy((e2) => class f2 extends a {
    static {
      a30 = e2(this);
    }
    transformTime;
    static get CubicInOut() {
      return CubicInOut();
    }
    static Custom(g2) {
      return new f2(g2);
    }
    TransformTime(g2) {
      return this.transformTime(g2);
    }
    constructor(g2) {
      super();
      this.transformTime = g2;
    }
  });
  var WebSharper_UI_Easing_default = a30;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/$StartupCode_Animation.js
  var a31 = Lazy((d2) => class e {
    static {
      a31 = d2(this);
    }
    static UseAnimations;
    static CubicInOut;
    static {
      this.CubicInOut = WebSharper_UI_Easing_default.Custom((f2) => {
        const g2 = f2 * f2;
        return 3 * g2 - 2 * (g2 * f2);
      });
      this.UseAnimations = true;
    }
  });
  var StartupCode_Animation_default = a31;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Anims.js
  function UseAnimations() {
    return StartupCode_Animation_default.UseAnimations;
  }
  function Actions(m2) {
    return ConcatActions(choose((n2) => n2.$ == 1 ? Some(n2.$0) : null, ToArray(m2.$0)));
  }
  function ConcatActions(m2) {
    const n2 = ofSeqNonCopying(m2);
    const o2 = length(n2);
    if (o2 === 0)
      return Const2();
    else if (o2 === 1)
      return get(n2, 0);
    else {
      const p2 = max(map((r2) => r2.Duration, n2));
      const q2 = map2((r2) => Prolong(p2, r2), n2);
      return Def(p2, (r2) => {
        iter((s6) => {
          s6.Compute(r2);
        }, q2);
      });
    }
  }
  function Prolong(m2, n2) {
    const o2 = n2.Compute;
    const p2 = n2.Duration;
    const q2 = Create(() => n2.Compute(n2.Duration));
    return { Compute: (r2) => r2 >= p2 ? q2.f() : o2(r2), Duration: m2 };
  }
  function Const2(m2) {
    return Def(0, () => m2);
  }
  function Def(m2, n2) {
    return { Compute: n2, Duration: m2 };
  }
  function Finalize(m2) {
    iter((n2) => {
      if (n2.$ == 0)
        n2.$0();
    }, ToArray(m2.$0));
  }
  function List(m2) {
    return m2.$0;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Anim.js
  function Anim(r2) {
    return { $: 0, $0: r2 };
  }
  function get_Empty() {
    return Anim(Empty());
  }
  function Run(r2, s6) {
    const t2 = s6.Duration;
    if (t2 === 0)
      return Zero();
    else {
      const u2 = (v2) => {
        function w2(x2) {
          return (y2) => {
            const z2 = y2 - x2;
            s6.Compute(z2);
            r2();
            return z2 <= t2 ? void requestAnimationFrame((A2) => {
              w2(x2)(A2);
            }) : v2();
          };
        }
        requestAnimationFrame((x2) => {
          w2(x2)(x2);
        });
      };
      return FromContinuations((v2, w2, x2) => u2.apply(null, [v2, w2, x2]));
    }
  }
  function Play(r2) {
    const s6 = () => {
      const t2 = Run(() => {
      }, Actions(r2));
      const u2 = () => {
        Finalize(r2);
        return Return(null);
      };
      return Bind(t2, (v2, w2) => u2(v2)(w2));
    };
    return Delay((t2, u2) => s6(t2)(u2));
  }
  function Concat2(r2) {
    return Anim(Concat(map(List, r2)));
  }
  function Append2(r2, s6) {
    return Anim(Append(r2.$0, s6.$0));
  }
  function get_UseAnimations() {
    return UseAnimations();
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.DynamicAttrNode`1.js
  var a32 = class extends a {
    push;
    value;
    dirty;
    updates;
    get NChanged() {
      return this.updates;
    }
    NSync(e2) {
      if (this.dirty) {
        this.push(e2)(this.value);
        this.dirty = false;
      }
    }
    NGetExitAnim(e2) {
      return get_Empty();
    }
    NGetEnterAnim(e2) {
      return get_Empty();
    }
    NGetChangeAnim(e2) {
      return get_Empty();
    }
    constructor(e2, f2) {
      super();
      this.push = f2;
      this.value = void 0;
      this.dirty = false;
      this.updates = Map4((g2) => {
        this.value = g2;
        this.dirty = true;
      }, e2);
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.BindVar.js
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
  function FileApplyValue(e2, f2, g2) {
    let h2;
    h2 = null;
    return [(i2) => {
      i2.addEventListener("change", () => {
        g2.UpdateMaybe((j2) => {
          let k2;
          h2 = e2(i2);
          return h2 != null && h2.$ == 1 && (h2.$0 !== j2 && (k2 = [h2, h2.$0], true)) ? k2[0] : null;
        });
      });
    }, (i2) => {
      const j2 = f2(i2);
      return (k2) => k2 == null ? null : j2(k2.$0);
    }, Map4((i2) => {
      let j2;
      return h2 != null && h2.$ == 1 && (Equals(h2.$0, i2) && (j2 = h2.$0, true)) ? null : Some(i2);
    }, g2.View)];
  }
  function ApplyValue(e2, f2, g2) {
    let h2;
    h2 = null;
    return [(i2) => {
      const j2 = () => {
        g2.UpdateMaybe((k2) => {
          let l2;
          h2 = e2(i2);
          return h2 != null && h2.$ == 1 && (!Equals(h2.$0, k2) && (l2 = [h2, h2.$0], true)) ? l2[0] : null;
        });
      };
      i2.addEventListener("change", j2);
      i2.addEventListener("input", j2);
      i2.addEventListener("keypress", j2);
    }, (i2) => {
      const j2 = f2(i2);
      return (k2) => k2 == null ? null : j2(k2.$0);
    }, Map4((i2) => {
      let j2;
      return h2 != null && h2.$ == 1 && (Equals(h2.$0, i2) && (j2 = h2.$0, true)) ? null : Some(i2);
    }, g2.View)];
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js
  function RegexEscape(r2) {
    return r2.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]", "g"), "\\$&");
  }
  function SplitWith(r2, s6) {
    return r2.split(s6);
  }
  function Join3(r2, s6) {
    return s6.join(r2);
  }
  function Trim(r2) {
    return r2.replace(new RegExp("^\\s+"), "").replace(new RegExp("\\s+$"), "");
  }
  function StartsWith(r2, s6) {
    return r2.substring(0, s6.length) == s6;
  }
  function Substring(r2, s6, t2) {
    return r2.substr(s6, t2);
  }
  function PadLeftWith(r2, s6, t2) {
    return s6 > r2.length ? Array(s6 - r2.length + 1).join(t2) + r2 : r2;
  }
  function IsNullOrEmpty(r2) {
    return r2 == null || r2 == "";
  }
  function concat4(r2, s6) {
    return ofSeq(s6).join(r2);
  }
  function forall3(r2, s6) {
    return forall(r2, protect(s6));
  }
  function protect(r2) {
    return r2 == null ? "" : r2;
  }
  function SplitChars(r2, s6, t2) {
    return Split(r2, new RegExp("[" + RegexEscape(s6.join("")) + "]"), t2);
  }
  function Split(r2, s6, t2) {
    return t2 === 1 ? filter((u2) => u2 !== "", SplitWith(r2, s6)) : SplitWith(r2, s6);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Char.js
  function IsWhiteSpace(b2) {
    return b2.match(new RegExp("\\s")) !== null;
  }
  function Parse(b2) {
    return b2.length === 1 ? b2 : FailWith("String must be exactly one character long.");
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.String.js
  function isBlank(c2) {
    return forall3(IsWhiteSpace, c2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.DateTimeHelpers.js
  function Create3(c2, d2, e2, f2, g2, h2, i2) {
    let j2 = new Date(c2, d2 - 1, e2, f2, g2, h2, i2);
    if (c2 < 99)
      j2.setFullYear(c2);
    return j2.getTime();
  }
  function TryParse(c2) {
    const d2 = Date.parse(c2);
    return isNaN(d2) ? null : Some(d2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.CheckedInput`1.js
  var a34 = class _a {
    static Valid(c2, d2) {
      return Create2(_a, { $: 0, $0: c2, $1: d2 });
    }
    static Invalid(c2) {
      return Create2(_a, { $: 1, $0: c2 });
    }
    static Blank(c2) {
      return Create2(_a, { $: 2, $0: c2 });
    }
    static Make(c2) {
      let d2;
      return _a.Valid(c2, (d2 = c2, String(d2)));
    }
    get Input() {
      return this.$ == 1 ? this.$0 : this.$ == 2 ? this.$0 : this.$1;
    }
    $;
    $0;
    $1;
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.FormatException.js
  var a35 = class extends Error {
    constructor(b2, c2) {
      if (b2 == "New") {
        b2 = "New_1";
        c2 = "One of the identified items was in an invalid format.";
      }
      if (b2 == "New_1") {
        const d2 = c2;
        super(d2);
      }
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.N.js
  function TryParseBool(c2, d2) {
    const e2 = c2.toLowerCase();
    return e2 == "true" ? (d2.set(true), true) : e2 == "false" && (d2.set(false), true);
  }
  function TryParseBigInt(c2, d2, e2, f2) {
    let g2, h2;
    g2 = 0n;
    try {
      h2 = (g2 = BigInt(c2), true);
    } catch (l2) {
      h2 = false;
    }
    const i2 = [h2, g2];
    if (i2[0]) {
      const j2 = i2[1];
      const k2 = j2 === j2 - j2 % 1n && j2 >= d2 && j2 <= e2;
      if (k2)
        f2.set(j2);
      return k2;
    } else
      return false;
  }
  function TryParse2(c2, d2, e2, f2) {
    const g2 = +c2;
    const h2 = g2 === g2 - g2 % 1 && g2 >= d2 && g2 <= e2;
    if (h2)
      f2.set(g2);
    return h2;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Int32.js
  function TryParse3(c2, d2) {
    return TryParse2(c2, -2147483648, 2147483647, d2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/$StartupCode_Attr.Client.js
  var a37 = Lazy((G2) => class H {
    static {
      a37 = G2(this);
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
      this.BoolCheckedApply = (Y2) => [(Z2) => {
        Z2.addEventListener("change", () => Y2.Get() != Z2.checked ? Y2.Set(Z2.checked) : null);
      }, (Z2) => (u00302) => u00302 != null && u00302.$ == 1 ? void (Z2.checked = u00302.$0) : null, Map4((Z2) => Some(Z2), Y2.View)];
      this.StringSet = (Y2) => (Z2) => {
        Y2.value = Z2;
      };
      this.StringGet = (Y2) => Some(Y2.value);
      const I2 = StringGet();
      const J2 = StringSet();
      this.StringApply = (Y2) => ApplyValue(I2, J2, Y2);
      this.StringListSet = (Y2) => (Z2) => {
        const u00302 = Y2.options;
        for (let u00312 = 0, u00322 = u00302.length - 1; u00312 <= u00322; u00312++)
          (() => {
            const u00332 = u00302.item(u00312);
            u00332.selected = arrContains(u00332.value, Z2);
          })();
      };
      this.StringListGet = (Y2) => {
        const Z2 = Y2.selectedOptions;
        return Some(ofSeq(delay(() => collect((u00302) => [Z2.item(u00302).value], range(0, Z2.length - 1)))));
      };
      const K2 = StringListGet();
      const L2 = StringListSet();
      this.StringListApply = (Y2) => ApplyValue(K2, L2, Y2);
      this.DateTimeSetUnchecked = (Y2) => (Z2) => {
        Y2.value = new Date(Z2).toLocaleString();
      };
      this.DateTimeGetUnchecked = (Y2) => {
        let Z2, u00302;
        const u00312 = Y2.value;
        if (isBlank(u00312))
          return Some(-864e13);
        else {
          Z2 = 0;
          const u00322 = TryParse(u00312);
          let u00332 = u00322 != null && u00322.$ == 1 && (Z2 = u00322.$0, true);
          u00302 = [u00332, Z2];
          return u00302[0] ? Some(u00302[1]) : null;
        }
      };
      const M2 = DateTimeGetUnchecked();
      const N2 = DateTimeSetUnchecked();
      this.DateTimeApplyUnchecked = (Y2) => ApplyValue(M2, N2, Y2);
      this.FileSetUnchecked = () => () => null;
      this.FileGetUnchecked = (Y2) => {
        const Z2 = Y2.files;
        return Some(ofSeq(delay(() => map((u00302) => Z2.item(u00302), range(0, Z2.length - 1)))));
      };
      const O2 = FileGetUnchecked();
      const P2 = FileSetUnchecked();
      this.FileApplyUnchecked = (Y2) => FileApplyValue(O2, P2, Y2);
      this.IntSetUnchecked = (Y2) => (Z2) => {
        Y2.value = String(Z2);
      };
      this.IntGetUnchecked = (Y2) => {
        const Z2 = Y2.value;
        if (isBlank(Z2))
          return Some(0);
        else {
          const u00302 = +Z2;
          return u00302 !== u00302 >> 0 ? null : Some(u00302);
        }
      };
      const Q2 = IntGetUnchecked();
      const R2 = IntSetUnchecked();
      this.IntApplyUnchecked = (Y2) => ApplyValue(Q2, R2, Y2);
      this.IntSetChecked = (Y2) => (Z2) => {
        const u00302 = Z2.Input;
        return Y2.value != u00302 ? void (Y2.value = u00302) : null;
      };
      this.IntGetChecked = (Y2) => {
        let Z2, u00302;
        const u00312 = Y2.value;
        if (isBlank(u00312))
          Z2 = (Y2.checkValidity ? Y2.checkValidity() : true) ? a34.Blank(u00312) : a34.Invalid(u00312);
        else {
          const u00322 = (u00302 = 0, [TryParse3(u00312, { get: () => u00302, set: (u00332) => {
            u00302 = u00332;
          } }), u00302]);
          Z2 = u00322[0] ? a34.Valid(u00322[1], u00312) : a34.Invalid(u00312);
        }
        return Some(Z2);
      };
      const S2 = IntGetChecked();
      const T2 = IntSetChecked();
      this.IntApplyChecked = (Y2) => ApplyValue(S2, T2, Y2);
      this.FloatSetUnchecked = (Y2) => (Z2) => {
        Y2.value = String(Z2);
      };
      this.FloatGetUnchecked = (Y2) => {
        const Z2 = Y2.value;
        if (isBlank(Z2))
          return Some(0);
        else {
          const u00302 = +Z2;
          return isNaN(u00302) ? null : Some(u00302);
        }
      };
      const U2 = FloatGetUnchecked();
      const V2 = FloatSetUnchecked();
      this.FloatApplyUnchecked = (Y2) => ApplyValue(U2, V2, Y2);
      this.FloatSetChecked = (Y2) => (Z2) => {
        const u00302 = Z2.Input;
        return Y2.value != u00302 ? void (Y2.value = u00302) : null;
      };
      this.FloatGetChecked = (Y2) => {
        let Z2;
        const u00302 = Y2.value;
        if (isBlank(u00302))
          Z2 = (Y2.checkValidity ? Y2.checkValidity() : true) ? a34.Blank(u00302) : a34.Invalid(u00302);
        else {
          const u00312 = +u00302;
          Z2 = isNaN(u00312) ? a34.Invalid(u00302) : a34.Valid(u00312, u00302);
        }
        return Some(Z2);
      };
      const W2 = FloatGetChecked();
      const X2 = FloatSetChecked();
      this.FloatApplyChecked = (Y2) => ApplyValue(W2, X2, Y2);
    }
  });
  var StartupCode_Attr_Client_default = a37;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.Attrs.Dyn.js
  function New4(b2, c2, d2, e2) {
    const f2 = { DynElem: b2, DynFlags: c2, DynNodes: d2 };
    SetOptional(f2, "OnAfterRender", e2);
    return f2;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.Attrs.js
  function Dynamic(p2, q2) {
    return a28.A1(new a32(p2, q2));
  }
  function EmptyAttr() {
    return StartupCode_Attr_Client_default.EmptyAttr;
  }
  function AppendTree(p2, q2) {
    if (p2 === null)
      return q2;
    else if (q2 === null)
      return p2;
    else {
      const r2 = a28.A2(p2, q2);
      SetFlags(r2, Flags(p2) | Flags(q2));
      return r2;
    }
  }
  function GetChangeAnim(p2) {
    return GetAnim(p2, (q2, r2) => q2.NGetChangeAnim(r2));
  }
  function GetExitAnim(p2) {
    return GetAnim(p2, (q2, r2) => q2.NGetExitAnim(r2));
  }
  function GetEnterAnim(p2) {
    return GetAnim(p2, (q2, r2) => q2.NGetEnterAnim(r2));
  }
  function GetAnim(p2, q2) {
    return Concat2(map2((r2) => q2(r2, p2.DynElem), p2.DynNodes));
  }
  function Updates(p2) {
    return MapTreeReduce((q2) => q2.NChanged, Const(), Map2Unit2, p2.DynNodes);
  }
  function Empty2(p2) {
    return New4(p2, 0, [], null);
  }
  function Insert(p2, q2) {
    const r2 = [];
    const s6 = [];
    function t2(w2) {
      while (true) {
        if (!(w2 === null)) {
          if (w2 != null && w2.$ == 1)
            return r2.push(w2.$0);
          else if (w2 != null && w2.$ == 2) {
            const x2 = w2.$1;
            const y2 = w2.$0;
            t2(y2);
            w2 = x2;
          } else
            return w2 != null && w2.$ == 3 ? w2.$0(p2) : w2 != null && w2.$ == 4 ? s6.push(w2.$0) : null;
        } else
          return null;
      }
    }
    t2(q2);
    const u2 = r2.slice(0);
    let v2 = New4(p2, Flags(q2), u2, s6.length === 0 ? null : Some((w2) => {
      iter3((x2) => {
        x2(w2);
      }, s6);
    }));
    return v2;
  }
  function Sync(p2, q2) {
    iter((r2) => {
      r2.NSync(p2);
    }, q2.DynNodes);
  }
  function SetFlags(p2, q2) {
    p2.flags = q2;
  }
  function Flags(p2) {
    return p2 !== null && p2.hasOwnProperty("flags") ? p2.flags : 0;
  }
  function HasExitAnim(p2) {
    const q2 = 2;
    return (p2.DynFlags & q2) === q2;
  }
  function HasEnterAnim(p2) {
    const q2 = 1;
    return (p2.DynFlags & q2) === q2;
  }
  function HasChangeAnim(p2) {
    const q2 = 4;
    return (p2.DynFlags & q2) === q2;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.DocNode.js
  function TreeDoc(a67) {
    return { $: 6, $0: a67 };
  }
  function TextNodeDoc(a67) {
    return { $: 5, $0: a67 };
  }
  function TextDoc(a67) {
    return { $: 4, $0: a67 };
  }
  function EmbedDoc(a67) {
    return { $: 2, $0: a67 };
  }
  function ElemDoc(a67) {
    return { $: 1, $0: a67 };
  }
  function AppendDoc(a67, b2) {
    return { $: 0, $0: a67, $1: b2 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Abbrev.HashSet.js
  function Filter(d2, e2) {
    return new a8("New_2", filter(d2, ToArray2(e2)));
  }
  function Intersect(d2, e2) {
    const f2 = new a8("New_2", ToArray2(d2));
    f2.IntersectWith(ToArray2(e2));
    return f2;
  }
  function Except(d2, e2) {
    const f2 = new a8("New_2", ToArray2(e2));
    f2.ExceptWith(ToArray2(d2));
    return f2;
  }
  function ToArray2(d2) {
    const e2 = create(d2.Count, void 0);
    d2.CopyTo(e2, 0);
    return e2;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.Docs.NodeSet.js
  function NodeSet(g2) {
    return { $: 0, $0: g2 };
  }
  function ToArray3(g2) {
    return ToArray2(g2.$0);
  }
  function get_Empty2() {
    return NodeSet(new a8("New_3"));
  }
  function Intersect2(g2, h2) {
    return NodeSet(Intersect(g2.$0, h2.$0));
  }
  function Except2(g2, h2) {
    return NodeSet(Except(g2.$0, h2.$0));
  }
  function FindAll(g2) {
    const h2 = [];
    function i2(l2, m2) {
      while (true)
        switch (l2) {
          case 0:
            if (m2 != null && m2.$ == 0) {
              const n2 = m2.$1;
              const o2 = m2.$0;
              i2(0, o2);
              m2 = n2;
            } else if (m2 != null && m2.$ == 1) {
              const p2 = m2.$0;
              m2 = p2;
              l2 = 1;
            } else if (m2 != null && m2.$ == 2) {
              const q2 = m2.$0;
              m2 = q2.Current;
            } else if (m2 != null && m2.$ == 6) {
              const r2 = m2.$0.Holes;
              return (/* @__PURE__ */ ((s6) => (t2) => {
                iter(s6, t2);
              })(k2))(r2);
            } else
              return null;
            break;
          case 1:
            h2.push(m2);
            m2 = m2.Children;
            l2 = 0;
            break;
        }
    }
    function j2(l2) {
      return i2(0, l2);
    }
    function k2(l2) {
      return i2(1, l2);
    }
    j2(g2);
    return NodeSet(new a8("New_2", h2));
  }
  function Filter2(g2, h2) {
    return NodeSet(Filter(g2, h2.$0));
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/$StartupCode_Doc.Proxy.js
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

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.Settings.js
  function BatchUpdatesEnabled() {
    return StartupCode_Doc_Proxy_default.BatchUpdatesEnabled;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.Docs.RunState.js
  function New5(a67, b2) {
    return { PreviousNodes: a67, Top: b2 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.DocElemNode.js
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
    Equals(d2) {
      return this.ElKey === d2.ElKey;
    }
    static New(d2, e2, f2, g2, h2, i2) {
      const j2 = { Attr: d2, Children: e2, El: g2, ElKey: h2 };
      let k2 = (SetOptional(j2, "Delimiters", f2), SetOptional(j2, "Render", i2), j2);
      return Create2(_a, k2);
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.Docs.DomNodes.js
  function DomNodes(g2) {
    return { $: 0, $0: g2 };
  }
  function Iter(g2, h2) {
    iter(g2, h2.$0);
  }
  function Except3(g2, h2) {
    const i2 = g2.$0;
    return DomNodes(filter((j2) => forall2((k2) => !(j2 === k2), i2), h2.$0));
  }
  function DocChildren(g2) {
    const h2 = [];
    function i2(j2) {
      while (true) {
        if (j2 != null && j2.$ == 2) {
          const k2 = j2.$0;
          j2 = k2.Current;
        } else if (j2 != null && j2.$ == 1)
          return h2.push(j2.$0.El);
        else if (j2 == null)
          return null;
        else if (j2 != null && j2.$ == 5)
          return h2.push(j2.$0);
        else if (j2 != null && j2.$ == 4)
          return h2.push(j2.$0.Text);
        else if (j2 != null && j2.$ == 6) {
          const l2 = j2.$0.Els;
          return (/* @__PURE__ */ ((o2) => (p2) => {
            iter(o2, p2);
          })((o2) => {
            if (o2 == null || o2.constructor === Object)
              i2(o2);
            else
              h2.push(o2);
          }))(l2);
        } else {
          const m2 = j2.$1;
          const n2 = j2.$0;
          i2(n2);
          j2 = m2;
        }
      }
    }
    i2(g2.Children);
    return DomNodes(ofSeqNonCopying(h2));
  }
  function Children(g2, h2) {
    let i2;
    if (h2 != null && h2.$ == 1) {
      const j2 = h2.$0[1];
      const k2 = h2.$0[0];
      const l2 = [];
      i2 = k2.nextSibling;
      while (i2 !== j2) {
        l2.push(i2);
        i2 = i2.nextSibling;
      }
      return DomNodes(l2);
    } else {
      let m2 = g2.childNodes.length;
      const n2 = g2.childNodes;
      let o2 = init(m2, (p2) => n2[p2]);
      return DomNodes(o2);
    }
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/$StartupCode_DomUtility.js
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
      const e2 = [1, "<table>", "</table>"];
      let f2 = Object.fromEntries([["option", [1, "<select multiple='multiple'>", "</select>"]], ["legend", [1, "<fieldset>", "</fieldset>"]], ["area", [1, "<map>", "</map>"]], ["param", [1, "<object>", "</object>"]], ["thead", e2], ["tbody", e2], ["tfoot", e2], ["tr", [2, "<table><tbody>", "</tbody></table>"]], ["col", [2, "<table><colgroup>", "</colgoup></table>"]], ["td", [3, "<table><tbody><tr>", "</tr></tbody></table>"]]]);
      this.wrapMap = f2;
      this.defaultWrap = [0, "", ""];
    }
  });
  var StartupCode_DomUtility_default = a41;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.DomUtility.js
  function ParseHTMLIntoFakeRoot(d2) {
    const e2 = globalThis.document.createElement("div");
    if (!rhtml().test(d2)) {
      e2.appendChild(globalThis.document.createTextNode(d2));
      return e2;
    } else {
      let j2 = function(k2, l2) {
        while (true) {
          if (l2 === 0)
            return k2;
          else {
            const m2 = l2;
            k2 = k2.lastChild;
            l2 = m2 - 1;
          }
        }
      };
      const f2 = rtagName().exec(d2);
      const g2 = Equals(f2, null) ? "" : get(f2, 1).toLowerCase();
      const h2 = wrapMap()[g2];
      const i2 = h2 ? h2 : defaultWrap();
      e2.innerHTML = i2[1] + d2.replace(rxhtmlTag(), "<$1></$2>") + i2[2];
      return (/* @__PURE__ */ ((k2) => {
        const l2 = k2;
        return (m2) => j2(l2, m2);
      })(e2))(i2[0]);
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
  function IterSelectorDoc(d2, e2) {
    const f2 = globalThis.document.querySelectorAll(d2);
    for (let g2 = 0, h2 = f2.length - 1; g2 <= h2; g2++)
      e2(f2[g2]);
  }
  function IterSelector(d2, e2, f2) {
    const g2 = d2.querySelectorAll(e2);
    for (let h2 = 0, i2 = g2.length - 1; h2 <= i2; h2++)
      f2(g2[h2]);
  }
  function ChildrenArray(d2) {
    const e2 = [];
    for (let f2 = 0, g2 = d2.childNodes.length - 1; f2 <= g2; f2++)
      e2.push(d2.childNodes[f2]);
    return e2;
  }
  function InsertAt(d2, e2, f2) {
    let g2;
    if (f2.parentNode === d2) {
      const h2 = f2.nextSibling;
      let i2 = Equals(h2, null) ? null : h2;
      g2 = e2 === i2;
    } else
      g2 = false;
    if (!g2)
      d2.insertBefore(f2, e2);
  }
  function RemoveNode(d2, e2) {
    if (e2.parentNode === d2)
      d2.removeChild(e2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.Docs.js
  function UpdateTextNode(O2, P2) {
    O2.Value = P2;
    O2.Dirty = true;
  }
  function CreateTextNode() {
    return { Text: globalThis.document.createTextNode(""), Dirty: false, Value: "" };
  }
  function UpdateEmbedNode(O2, P2) {
    O2.Current = P2;
    O2.Dirty = true;
  }
  function CreateEmbedNode() {
    return { Current: null, Dirty: false };
  }
  function PerformSyncUpdate(O2, P2, Q2) {
    const R2 = FindAll(Q2);
    SyncElemNode(O2, P2.Top);
    P2.PreviousNodes = R2;
  }
  function PerformAnimatedUpdate(O2, P2, Q2) {
    if (get_UseAnimations()) {
      const R2 = () => {
        const S2 = FindAll(Q2);
        const T2 = ComputeChangeAnim(P2, S2);
        const U2 = ComputeEnterAnim(P2, S2);
        const V2 = Play(Append2(T2, ComputeExitAnim(P2, S2)));
        const W2 = () => {
          const X2 = SyncElemNodesNextFrame(O2, P2);
          const Y2 = () => {
            const Z2 = Play(U2);
            const u00302 = () => {
              P2.PreviousNodes = S2;
              return Return(null);
            };
            return Bind(Z2, (u00312, u00322) => u00302(u00312)(u00322));
          };
          return Bind(X2, (Z2, u00302) => Y2(Z2)(u00302));
        };
        return Bind(V2, (X2, Y2) => W2(X2)(Y2));
      };
      return Delay((S2, T2) => R2(S2)(T2));
    } else
      return SyncElemNodesNextFrame(O2, P2);
  }
  function SyncElemNodesNextFrame(O2, P2) {
    if (BatchUpdatesEnabled()) {
      const Q2 = (R2) => {
        requestAnimationFrame(() => {
          SyncElemNode(O2, P2.Top);
          R2();
        });
      };
      return FromContinuations((R2, S2, T2) => Q2.apply(null, [R2, S2, T2]));
    } else {
      SyncElemNode(O2, P2.Top);
      return Return(null);
    }
  }
  function ComputeEnterAnim(O2, P2) {
    return Concat2(map2((Q2) => GetEnterAnim(Q2.Attr), ToArray3(Except2(O2.PreviousNodes, Filter2((Q2) => HasEnterAnim(Q2.Attr), P2)))));
  }
  function ComputeChangeAnim(O2, P2) {
    const Q2 = (S2) => HasChangeAnim(S2.Attr);
    const R2 = (S2) => Filter2(Q2, S2);
    return Concat2(map2((S2) => GetChangeAnim(S2.Attr), ToArray3(Intersect2(R2(O2.PreviousNodes), R2(P2)))));
  }
  function ComputeExitAnim(O2, P2) {
    return Concat2(map2((Q2) => GetExitAnim(Q2.Attr), ToArray3(Except2(P2, Filter2((Q2) => HasExitAnim(Q2.Attr), O2.PreviousNodes)))));
  }
  function CreateDelimitedRunState(O2, P2, Q2) {
    return New5(get_Empty2(), CreateDelimitedElemNode(O2, P2, EmptyAttr(), Q2));
  }
  function CreateRunState(O2, P2) {
    return New5(get_Empty2(), CreateElemNode(O2, EmptyAttr(), P2));
  }
  function CreateDelimitedElemNode(O2, P2, Q2, R2) {
    const S2 = O2.parentNode;
    LinkPrevElement(P2, R2);
    const T2 = Insert(S2, Q2);
    return a40.New(T2, R2, Some([O2, P2]), S2, Int(), GetOptional(T2.OnAfterRender));
  }
  function CreateElemNode(O2, P2, Q2) {
    LinkElement(O2, Q2);
    const R2 = Insert(O2, P2);
    return a40.New(R2, Q2, null, O2, Int(), GetOptional(R2.OnAfterRender));
  }
  function SyncElemNode(O2, P2) {
    !O2 ? SyncElement(P2) : void 0;
    Sync2(P2.Children);
    AfterRender(P2);
  }
  function Sync2(O2) {
    while (true) {
      if (O2 != null && O2.$ == 1)
        return SyncElemNode(false, O2.$0);
      else if (O2 != null && O2.$ == 2) {
        const P2 = O2.$0;
        O2 = P2.Current;
      } else if (O2 == null)
        return null;
      else if (O2 != null && O2.$ == 5)
        return null;
      else if (O2 != null && O2.$ == 4) {
        const Q2 = O2.$0;
        return Q2.Dirty ? (Q2.Text.nodeValue = Q2.Value, Q2.Dirty = false) : null;
      } else if (O2 != null && O2.$ == 6) {
        const R2 = O2.$0;
        iter((U2) => {
          SyncElemNode(false, U2);
        }, R2.Holes);
        iter((U2) => {
          Sync(U2[0], U2[1]);
        }, R2.Attrs);
        return AfterRender(R2);
      } else {
        const S2 = O2.$1;
        const T2 = O2.$0;
        Sync2(T2);
        O2 = S2;
      }
    }
  }
  function AfterRender(O2) {
    const P2 = GetOptional(O2.Render);
    if (P2 != null && P2.$ == 1) {
      P2.$0(O2.El);
      SetOptional(O2, "Render", null);
    }
  }
  function InsertBeforeDelim(O2, P2) {
    const Q2 = O2.parentNode;
    const R2 = globalThis.document.createTextNode("");
    Q2.insertBefore(R2, O2);
    LinkPrevElement(O2, P2);
    return R2;
  }
  function LinkPrevElement(O2, P2) {
    InsertDoc(O2.parentNode, P2, O2);
  }
  function LinkElement(O2, P2) {
    InsertDoc(O2, P2, null);
  }
  function SyncElement(O2) {
    function P2(Q2) {
      function R2(S2) {
        while (true) {
          if (S2 != null && S2.$ == 0) {
            const T2 = S2.$1;
            const U2 = S2.$0;
            if (R2(U2))
              return true;
            else
              S2 = T2;
          } else if (S2 != null && S2.$ == 2) {
            const V2 = S2.$0;
            if (V2.Dirty)
              return true;
            else
              S2 = V2.Current;
          } else if (S2 != null && S2.$ == 6) {
            const W2 = S2.$0;
            return W2.Dirty || exists(P2, W2.Holes);
          } else
            return false;
        }
      }
      return R2(Q2.Children);
    }
    Sync(O2.El, O2.Attr);
    if (P2(O2))
      DoSyncElement(O2);
  }
  function DoSyncElement(O2) {
    const P2 = GetOptional(O2.Delimiters);
    const Q2 = P2 == null ? O2.El : P2.$0[1].parentNode;
    function R2(V2, W2) {
      while (true) {
        if (V2 != null && V2.$ == 1)
          return V2.$0.El;
        else if (V2 != null && V2.$ == 2) {
          const X2 = V2.$0;
          if (X2.Dirty) {
            X2.Dirty = false;
            return InsertDoc(Q2, X2.Current, W2);
          } else
            V2 = X2.Current;
        } else if (V2 == null)
          return W2;
        else if (V2 != null && V2.$ == 4)
          return V2.$0.Text;
        else if (V2 != null && V2.$ == 5)
          return V2.$0;
        else if (V2 != null && V2.$ == 6) {
          const Y2 = V2.$0;
          if (Y2.Dirty)
            Y2.Dirty = false;
          return foldBack((u00312, u00322) => u00312 == null || u00312.constructor === Object ? R2(u00312, u00322) : u00312, Y2.Els, W2);
        } else {
          const Z2 = V2.$1;
          const u00302 = V2.$0;
          V2 = u00302;
          W2 = R2(Z2, W2);
        }
      }
    }
    Iter((V2) => {
      RemoveNode(Q2, V2);
    }, Except3(DocChildren(O2), Children(Q2, GetOptional(O2.Delimiters))));
    let S2 = O2.Children;
    const T2 = GetOptional(O2.Delimiters);
    let U2 = T2 != null && T2.$ == 1 ? T2.$0[1] : null;
    R2(S2, U2);
  }
  function InsertDoc(O2, P2, Q2) {
    while (true) {
      if (P2 != null && P2.$ == 1) {
        const R2 = P2.$0;
        return InsertNode(O2, R2.El, Q2);
      } else if (P2 != null && P2.$ == 2) {
        const S2 = P2.$0;
        S2.Dirty = false;
        P2 = S2.Current;
      } else if (P2 == null)
        return Q2;
      else if (P2 != null && P2.$ == 4) {
        const T2 = P2.$0;
        return InsertNode(O2, T2.Text, Q2);
      } else if (P2 != null && P2.$ == 5) {
        const U2 = P2.$0;
        return InsertNode(O2, U2, Q2);
      } else if (P2 != null && P2.$ == 6)
        return foldBack((X2, Y2) => (/* @__PURE__ */ ((Z2) => (u00302) => (u00312) => u00302 == null || u00302.constructor === Object ? InsertDoc(Z2, u00302, u00312) : InsertNode(Z2, u00302, u00312))(O2))(X2)(Y2), P2.$0.Els, Q2);
      else {
        const V2 = P2.$1;
        const W2 = P2.$0;
        P2 = W2;
        Q2 = InsertDoc(O2, V2, Q2);
      }
    }
  }
  function InsertNode(O2, P2, Q2) {
    InsertAt(O2, Q2, P2);
    return P2;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Updates.js
  var a42 = class _a {
    c;
    s;
    v;
    static Create(f2) {
      let g2;
      g2 = null;
      g2 = _a.New(f2, null, () => {
        let h2;
        h2 = g2.s;
        return h2 === null ? (h2 = Copy(g2.c()), g2.s = h2, WhenObsoleteRun(h2, () => {
          g2.s = null;
        }), h2) : h2;
      });
      return g2;
    }
    set Value(f2) {
      const g2 = this.s;
      if (!(g2 === null))
        Obsolete(g2);
      this.c = f2;
    }
    static New(f2, g2, h2) {
      return Create2(_a, { c: f2, s: g2, v: h2 });
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.EltUpdater.js
  var a43 = Lazy((m2) => {
    Force(WebSharper_UI_Elt_default);
    return class n extends WebSharper_UI_Elt_default {
      static {
        a43 = m2(this);
      }
      treeNode;
      holeUpdates;
      origHoles;
      RemoveAllUpdated() {
        this.treeNode.Holes = this.origHoles;
        this.holeUpdates.Set([]);
      }
      RemoveUpdated(o2) {
        const p2 = o2.docNode;
        if (p2 != null && p2.$ == 1) {
          const q2 = p2.$0.ElKey;
          this.treeNode.Holes = filter((r2) => r2.ElKey !== q2, this.treeNode.Holes);
          this.holeUpdates.Set(filter((r2) => r2[0] !== q2, this.holeUpdates.Get()));
        } else
          FailWith("DocUpdater.RemoveUpdated expects a single element node");
      }
      AddUpdated(o2) {
        const p2 = o2.docNode;
        if (p2 != null && p2.$ == 1) {
          const q2 = p2.$0;
          this.treeNode.Holes = this.treeNode.Holes.concat([q2]);
          const r2 = this.holeUpdates.Get();
          r2.push([q2.ElKey, o2.updates]);
          this.holeUpdates.Set(r2);
        } else
          FailWith("DocUpdater.AddUpdated expects a single element node");
      }
      ClearHoles() {
        this.origHoles = [];
        this.treeNode.Holes = [];
        this.holeUpdates.Set([]);
      }
      AddHole(o2) {
        this.origHoles.push(o2);
        this.treeNode.Holes = this.treeNode.Holes.concat([o2]);
      }
      constructor(o2, p2, q2, r2, s6) {
        let t2 = TreeDoc(o2);
        const u2 = s6.View;
        const v2 = (B3) => B3[1];
        const w2 = (B3) => map2(v2, B3);
        const x2 = Const();
        const y2 = (B3) => TreeReduce(x2, Map2Unit2, B3);
        let z2 = BindInner((B3) => y2(w2(B3)), u2);
        let A2 = Map2Unit2(p2, z2);
        super(t2, A2, q2, r2);
        this.treeNode = o2;
        this.holeUpdates = s6;
        this.origHoles = this.treeNode.Holes;
      }
    };
  });
  var WebSharper_UI_Client_EltUpdater_default = a43;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Elt.js
  var a44 = Lazy((E2) => {
    Force(WebSharper_UI_Doc_default);
    return class F2 extends WebSharper_UI_Doc_default {
      static {
        a44 = E2(this);
      }
      docNode_1;
      updates_1;
      elt;
      rvUpdates;
      SetStyle(G2, H2) {
        this.elt.style[G2] = H2;
      }
      HasClass(G2) {
        return new RegExp("(\\s|^)" + G2 + "(\\s|$)").test(this.elt.className);
      }
      GetProperty(G2) {
        return this.elt[G2];
      }
      SetProperty(G2, H2) {
        this.elt[G2] = H2;
      }
      RemoveAttribute(G2) {
        this.elt.removeAttribute(G2);
      }
      HasAttribute(G2) {
        return this.elt.hasAttribute(G2);
      }
      GetAttribute(G2) {
        return this.elt.getAttribute(G2);
      }
      SetAttribute(G2, H2) {
        this.elt.setAttribute(G2, H2);
      }
      SetText(G2) {
        const H2 = this.docNode_1;
        if (H2 != null && H2.$ == 1)
          H2.$0.Children = null;
        else
          H2 != null && H2.$ == 6 ? (H2.$0.Els = [], this.ClearHoles()) : FailWith("Invalid docNode in Elt");
        this.rvUpdates.Value = Const();
        this.elt.textContent = G2;
      }
      GetText() {
        return this.elt.textContent;
      }
      SetValue(G2) {
        this.elt.value = G2;
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
        const G2 = this.docNode_1;
        if (G2 != null && G2.$ == 1)
          G2.$0.Children = null;
        else
          G2 != null && G2.$ == 6 ? (G2.$0.Els = [], this.ClearHoles()) : FailWith("Invalid docNode in Elt");
        this.rvUpdates.Value = Const();
        while (this.elt.hasChildNodes())
          this.elt.removeChild(this.elt.firstChild);
      }
      Prepend(G2) {
        let H2;
        const I2 = this.docNode_1;
        if (I2 != null && I2.$ == 1) {
          const J2 = I2.$0;
          J2.Children = AppendDoc(G2.docNode, J2.Children);
          const K2 = this.elt.firstChild;
          let L2 = Equals(K2, null) ? null : K2;
          H2 = InsertDoc(this.elt, G2.docNode, L2);
        } else if (I2 != null && I2.$ == 6) {
          I2.$0;
          const M2 = this.elt.insertBefore(globalThis.document.createTextNode(""), this.elt.firstChild);
          const N2 = InsertBeforeDelim(M2, G2.docNode);
          H2 = this.AddHole(a40.New(Empty2(this.elt), G2.docNode, Some([N2, M2]), this.elt, Int(), null));
        } else
          H2 = FailWith("Invalid docNode in Elt");
        this.rvUpdates.Value = Map2Unit2(this.rvUpdates.c, G2.updates);
      }
      Append(G2) {
        let H2;
        const I2 = this.docNode_1;
        if (I2 != null && I2.$ == 1) {
          const J2 = I2.$0;
          H2 = (J2.Children = AppendDoc(J2.Children, G2.docNode), InsertDoc(this.elt, G2.docNode, null));
        } else if (I2 != null && I2.$ == 6) {
          I2.$0;
          const K2 = this.elt.appendChild(globalThis.document.createTextNode(""));
          const L2 = InsertBeforeDelim(K2, G2.docNode);
          H2 = this.AddHole(a40.New(Empty2(this.elt), G2.docNode, Some([L2, K2]), this.elt, Int(), null));
        } else
          H2 = FailWith("Invalid docNode in Elt");
        this.rvUpdates.Value = Map2Unit2(this.rvUpdates.c, G2.updates);
      }
      static TreeNode(G2, H2) {
        const I2 = a42.Create(H2);
        let J2 = TreeDoc(G2);
        const K2 = map2((N2) => Updates(N2[1]), G2.Attrs);
        let L2 = TreeReduce(Const(), Map2Unit2, K2);
        let M2 = Map2Unit2(L2, I2.v);
        return new F2(J2, M2, get(G2.Els, 0), I2);
      }
      static New(G2, H2, I2) {
        const J2 = CreateElemNode(G2, H2, I2.docNode);
        const K2 = a42.Create(I2.updates);
        return new F2(ElemDoc(J2), Map2Unit2(Updates(J2.Attr), K2.v), G2, K2);
      }
      ToUpdater() {
        let G2;
        const H2 = this.docNode_1;
        if (H2 != null && H2.$ == 1) {
          let I2 = [this.elt];
          let J2 = [[this.elt, H2.$0.Attr]];
          const K2 = Some(this.elt);
          let L2 = { Els: I2, Dirty: true, Holes: [], Attrs: J2, Render: null ? null.$0 : void 0, El: K2 ? K2.$0 : void 0 };
          G2 = DeleteEmptyFields(L2, ["Render", "El"]);
        } else
          G2 = H2 != null && H2.$ == 6 ? H2.$0 : FailWith("Invalid docNode in Elt");
        return new WebSharper_UI_Client_EltUpdater_default(G2, this.updates_1, this.elt, this.rvUpdates, WebSharper_UI_Var_default.Create_1([]));
      }
      OnAfterRenderView(G2, H2) {
        const I2 = Id();
        this.Append(WebSharper_UI_Doc_default.BindView((J2) => {
          this.elt[I2] = J2;
          return WebSharper_UI_Doc_default.Empty;
        }, G2));
        return this.OnAfterRenderu0027((J2) => {
          H2(J2, J2[I2]);
        });
      }
      OnAfterRender(G2) {
        return this.OnAfterRenderu0027(G2);
      }
      OnAfterRenderu0027(G2) {
        let H2, I2, J2;
        const K2 = this.docNode_1;
        if (K2 != null && K2.$ == 1) {
          const L2 = K2.$0;
          const M2 = GetOptional(L2.Render);
          if (M2 != null && M2.$ == 1) {
            const N2 = M2.$0;
            H2 = Some((R2) => {
              N2(R2);
              G2(R2);
            });
          } else
            H2 = Some(G2);
          I2 = SetOptional(L2, "Render", H2);
        } else if (K2 != null && K2.$ == 6) {
          const O2 = K2.$0;
          const P2 = GetOptional(O2.Render);
          if (P2 != null && P2.$ == 1) {
            const Q2 = P2.$0;
            J2 = Some((R2) => {
              Q2(R2);
              G2(R2);
            });
          } else
            J2 = Some(G2);
          I2 = SetOptional(O2, "Render", J2);
        } else
          I2 = FailWith("Invalid docNode in Elt");
        return this;
      }
      onView(G2, H2, I2) {
        const J2 = I2(this.elt);
        this.elt.addEventListener(G2, (K2) => Get2(J2(K2), H2), false);
        return this;
      }
      on(G2, H2) {
        this.elt.addEventListener(G2, (I2) => H2(this.elt, I2), false);
        return this;
      }
      ClearHoles() {
        const G2 = this.docNode_1;
        if (G2 != null && G2.$ == 6)
          G2.$0.Holes = [];
      }
      AddHole(G2) {
        const H2 = this.docNode_1;
        if (H2 != null && H2.$ == 6)
          H2.$0.Holes.push(G2);
      }
      constructor(G2, H2, I2, J2) {
        super(G2, H2);
        this.docNode_1 = G2;
        this.updates_1 = H2;
        this.elt = I2;
        this.rvUpdates = J2;
      }
    };
  });
  var WebSharper_UI_Elt_default = a44;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.Attr.js
  function Checked(v2) {
    return ValueWith(BoolCheckedApply(), v2);
  }
  function FloatValue(v2) {
    return ValueWith(FloatApplyChecked(), v2);
  }
  function FloatValueUnchecked(v2) {
    return ValueWith(FloatApplyUnchecked(), v2);
  }
  function IntValue(v2) {
    return ValueWith(IntApplyChecked(), v2);
  }
  function IntValueUnchecked(v2) {
    return ValueWith(IntApplyUnchecked(), v2);
  }
  function FileValue(v2) {
    return ValueWith(FileApplyUnchecked(), v2);
  }
  function DateTimeValue(v2) {
    return ValueWith(DateTimeApplyUnchecked(), v2);
  }
  function Value(v2) {
    return ValueWith(StringApply(), v2);
  }
  function ValueWith(v2, w2) {
    const x2 = v2(w2);
    return AppendTree(a28.A3(x2[0]), DynamicCustom(x2[1], x2[2]));
  }
  function DynamicProp(v2, w2) {
    return Dynamic(w2, (x2) => (y2) => {
      x2[v2] = y2;
    });
  }
  function OnAfterRender(v2) {
    return a28.A4(v2);
  }
  function HandlerView(v2, w2, x2) {
    return a28.A3((y2) => {
      const z2 = x2(y2);
      y2.addEventListener(v2, (A2) => Get2(z2(A2), w2), false);
    });
  }
  function Handler(v2, w2) {
    return a28.A3((x2) => {
      x2.addEventListener(v2, (y2) => w2(x2)(y2), false);
    });
  }
  function DynamicCustom(v2, w2) {
    return Dynamic(w2, v2);
  }
  function Dynamic2(v2, w2) {
    return Dynamic(w2, (x2) => (y2) => x2.setAttribute(v2, y2));
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Abbrev.Mailbox.js
  function StartProcessor(f2) {
    const g2 = [0];
    function h2() {
      const i2 = () => {
        const j2 = () => {
          const k2 = g2[0];
          return Equals(k2, 1) ? (g2[0] = 0, Zero()) : Equals(k2, 2) ? (g2[0] = 1, h2()) : Zero();
        };
        return Bind(f2, (k2, l2) => j2(k2)(l2));
      };
      return Delay((j2, k2) => i2(j2)(k2));
    }
    return () => {
      const i2 = g2[0];
      if (Equals(i2, 0)) {
        g2[0] = 1;
        Start(h2(), null);
      } else
        Equals(i2, 1) ? g2[0] = 2 : void 0;
    };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Doc.js
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
      const bt = a28.Concat(br);
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
          if (bv instanceof a28)
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
      const bt = a28.Concat(br);
      const bu = a45.Concat(bs);
      return WebSharper_UI_Elt_default.New(globalThis.document.createElement(bq), bt, bu);
    }
    static Radio(bq, br, bs) {
      const bt = globalThis.document.createElement("input");
      bt.addEventListener("click", () => bs.Set(br), false);
      const bu = DynamicProp("checked", Map4((bw) => Equals(bw, br), bs.View));
      const bv = a28.Create;
      return WebSharper_UI_Elt_default.New(bt, a28.Concat(append(ofArray([bv("type", "radio"), bv("name", bs.Id), bu]), ofSeq2(bq))), a45.Empty);
    }
    static LinkView(bq, br, bs, bt) {
      const bu = a28.Concat(append2([HandlerView("click", bs, () => () => bt), a28.Create("href", "#")], br));
      return WebSharper_UI_Elt_default.New(globalThis.document.createElement("a"), bu, a45.TextNode(bq));
    }
    static Link(bq, br, bs) {
      const bt = a28.Concat(br);
      const bu = AppendTree(a28.Create("href", "#"), bt);
      return WebSharper_UI_Elt_default.New(a45.Clickable("a", bs), bu, a45.TextNode(bq));
    }
    static ButtonView(bq, br, bs, bt) {
      const bu = a28.Concat(append2([HandlerView("click", bs, () => () => bt)], br));
      return WebSharper_UI_Elt_default.New(globalThis.document.createElement("button"), bu, a45.TextNode(bq));
    }
    static Button(bq, br, bs) {
      const bt = a28.Concat(br);
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
      return a45.InputInternal("input", () => append2(bq, [a28.Create("type", "checkbox"), Checked(br)]));
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
        return a45.Concat(mapi((bv, bw) => a45.Element("option", ofArray([a28.Create("value", String(bv))]), ofArray([a45.TextNode(br(bw))])), bs));
      }, bt);
    }
    static SelectMultipleDyn(bq, br, bs, bt) {
      return a45.SelectMultipleImpl(bq, (bu) => a45.Convert((bv) => a45.Element("option", ofArray([a28.Create("value", String(bv[0]))]), ofArray([a45.TextNode(br(bv[1]))])), Map4((bv) => {
        bu[0] = bv;
        return mapi2((bw, bx) => [bw, bx], bv);
      }, bs)), bt);
    }
    static Select(bq, br, bs, bt) {
      return a45.SelectImpl(bq, br, (bu) => {
        bu[0] = bs;
        return a45.Concat(mapi((bv, bw) => a45.Element("option", ofArray([a28.Create("value", String(bv))]), ofArray([a45.TextNode(br(bw))])), bs));
      }, bt);
    }
    static SelectDyn(bq, br, bs, bt) {
      return a45.SelectImpl(bq, br, (bu) => a45.Convert((bv) => a45.Element("option", ofArray([a28.Create("value", String(bv[0]))]), ofArray([a45.TextNode(br(bv[1]))])), Map4((bv) => {
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
      const bx = AppendTree(bw, a28.Concat(bq));
      const by = AppendTree(OnAfterRender((bA) => {
        bu(bA, bs.Get());
      }), bx);
      let bz = AppendTree(a28.Create("multiple", ""), by);
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
      const by = AppendTree(bx, a28.Concat(bq));
      let bz = AppendTree(OnAfterRender((bA) => {
        bv(bA, bt.Get());
      }), by);
      return WebSharper_UI_Elt_default.New(bw, bz, bs(bu));
    }
    static InputArea(bq, br) {
      return a45.InputInternal("textarea", () => append2(bq, [Value(br)]));
    }
    static RangeInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [IntValueUnchecked(br), a28.Create("type", "range")]));
    }
    static WeekInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a28.Create("type", "week")]));
    }
    static UrlInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a28.Create("type", "url")]));
    }
    static TimeInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a28.Create("type", "time")]));
    }
    static TelInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a28.Create("type", "tel")]));
    }
    static SearchInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a28.Create("type", "search")]));
    }
    static MonthInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a28.Create("type", "month")]));
    }
    static FileInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [FileValue(br), a28.Create("type", "file")]));
    }
    static EmailInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a28.Create("type", "email")]));
    }
    static DateTimeLocalInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [DateTimeValue(br), a28.Create("type", "datetime-local")]));
    }
    static DateInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a28.Create("type", "date")]));
    }
    static ColorInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a28.Create("type", "color")]));
    }
    static FloatInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [FloatValue(br), a28.Create("type", "number")]));
    }
    static FloatInputUnchecked(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [br.Get() === 0 ? a28.Create("value", "0") : EmptyAttr(), FloatValueUnchecked(br), a28.Create("type", "number")]));
    }
    static IntInput(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [IntValue(br), a28.Create("type", "number")]));
    }
    static IntInputUnchecked(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [br.Get() === 0 ? a28.Create("value", "0") : EmptyAttr(), IntValueUnchecked(br), a28.Create("type", "number")]));
    }
    static PasswordBox(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br), a28.Create("type", "password")]));
    }
    static Input(bq, br) {
      return a45.InputInternal("input", () => append2(bq, [Value(br)]));
    }
    static InputInternal(bq, br) {
      const bs = globalThis.document.createElement(bq);
      return WebSharper_UI_Elt_default.New(bs, a28.Concat(br(bs)), a45.Empty);
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

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/$StartupCode_Templates.js
  var a46 = Lazy((d2) => class e {
    static {
      a46 = d2(this);
    }
    static RenderedFullDocTemplate;
    static TextHoleRE;
    static GlobalHoles;
    static LocalTemplatesLoaded;
    static LoadedTemplates;
    static {
      this.LoadedTemplates = new a7("New_5");
      this.LocalTemplatesLoaded = false;
      this.GlobalHoles = new a7("New_5");
      this.TextHoleRE = "\\${([^}]+)}";
      this.RenderedFullDocTemplate = null;
    }
  });
  var StartupCode_Templates_default = a46;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Core.Operators.OperatorIntrinsics.js
  function string(h2, i2, j2) {
    if (i2 == null) {
      if (j2 != null && j2.$ == 1) {
        const k2 = j2.$0;
        return k2 < 0 ? "" : h2.slice(0, k2 + 1);
      } else
        return "";
    } else if (j2 == null)
      return h2.slice(i2.$0);
    else {
      const l2 = j2.$0;
      const m2 = i2.$0;
      return l2 < 0 ? "" : h2.slice(m2, l2 + 1);
    }
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.Templates.Prepare.js
  function failNotLoaded(o2) {
    console.warn("Instantiating non-loaded template", o2);
  }
  function fill(o2, p2, q2) {
    while (true) {
      if (o2.hasChildNodes())
        q2 = p2.insertBefore(o2.lastChild, q2);
      else
        return null;
    }
  }
  function fillTextHole(o2, p2, q2) {
    const r2 = o2.querySelector("[ws-replace]");
    return Equals(r2, null) ? (console.warn("Filling non-existent text hole", q2), null) : (r2.parentNode.replaceChild(globalThis.document.createTextNode(p2), r2), Some(r2.getAttribute("ws-replace")));
  }
  function removeHolesExcept(o2, p2) {
    const q2 = (r2) => {
      foreachNotPreserved(o2, "[" + r2 + "]", (s6) => {
        if (!p2.Contains(s6.getAttribute(r2)))
          s6.removeAttribute(r2);
      });
    };
    q2("ws-attr");
    q2("ws-onafterrender");
    q2("ws-var");
    foreachNotPreserved(o2, "[ws-hole]", (r2) => {
      if (!p2.Contains(r2.getAttribute("ws-hole"))) {
        r2.removeAttribute("ws-hole");
        while (r2.hasChildNodes())
          r2.removeChild(r2.lastChild);
      }
    });
    foreachNotPreserved(o2, "[ws-replace]", (r2) => {
      if (!p2.Contains(r2.getAttribute("ws-replace")))
        r2.parentNode.removeChild(r2);
    });
    foreachNotPreserved(o2, "[ws-on]", (r2) => {
      r2.setAttribute("ws-on", concat4(" ", filter((s6) => p2.Contains(get(SplitChars(s6, [":"], 1), 1)), SplitChars(r2.getAttribute("ws-on"), [" "], 1))));
    });
    foreachNotPreserved(o2, "[ws-attr-holes]", (r2) => {
      const s6 = SplitChars(r2.getAttribute("ws-attr-holes"), [" "], 1);
      for (let y2 = 0, z2 = s6.length - 1; y2 <= z2; y2++) {
        const t2 = get(s6, y2);
        let u2 = new RegExp(TextHoleRE(), "g");
        let v2 = r2.getAttribute(t2);
        let w2 = (A2, B3) => p2.Contains(B3) ? A2 : "";
        let x2 = v2.replace(u2, w2);
        r2.setAttribute(t2, x2);
      }
    });
  }
  function fillInstanceAttrs(o2, p2) {
    convertAttrs(p2);
    const q2 = p2.nodeName.toLowerCase();
    const r2 = o2.querySelector("[ws-attr=" + q2 + "]");
    if (Equals(r2, null))
      console.warn("Filling non-existent attr hole", q2);
    else {
      r2.removeAttribute("ws-attr");
      for (let t2 = 0, u2 = p2.attributes.length - 1; t2 <= u2; t2++) {
        const s6 = p2.attributes.item(t2);
        if (s6.name == "class" && r2.hasAttribute("class"))
          r2.setAttribute("class", r2.getAttribute("class") + " " + s6.nodeValue);
        else
          r2.setAttribute(s6.name, s6.nodeValue);
      }
    }
  }
  function mapHoles(o2, p2) {
    const q2 = (r2) => {
      foreachNotPreserved(o2, "[" + r2 + "]", (s6) => {
        let t2;
        const u2 = (t2 = null, [p2.TryGetValue(s6.getAttribute(r2).toLowerCase(), { get: () => t2, set: (v2) => {
          t2 = v2;
        } }), t2]);
        if (u2[0])
          s6.setAttribute(r2, u2[1]);
      });
    };
    q2("ws-hole");
    q2("ws-replace");
    q2("ws-attr");
    q2("ws-onafterrender");
    q2("ws-var");
    foreachNotPreserved(o2, "[ws-on]", (r2) => {
      r2.setAttribute("ws-on", concat4(" ", map2((s6) => {
        let t2;
        const u2 = SplitChars(s6, [":"], 1);
        const v2 = (t2 = null, [p2.TryGetValue(get(u2, 1), { get: () => t2, set: (w2) => {
          t2 = w2;
        } }), t2]);
        return v2[0] ? get(u2, 0) + ":" + v2[1] : s6;
      }, SplitChars(r2.getAttribute("ws-on"), [" "], 1))));
    });
    foreachNotPreserved(o2, "[ws-attr-holes]", (r2) => {
      const s6 = SplitChars(r2.getAttribute("ws-attr-holes"), [" "], 1);
      for (let t2 = 0, u2 = s6.length - 1; t2 <= u2; t2++)
        (() => {
          const v2 = get(s6, t2);
          return r2.setAttribute(v2, fold((w2, x2) => {
            const y2 = KeyValue(x2);
            return w2.replace(new RegExp("\\${" + y2[0] + "}", "ig"), "${" + y2[1] + "}");
          }, r2.getAttribute(v2), p2));
        })();
    });
  }
  function convertTextNode(o2) {
    let p2, q2;
    p2 = null;
    q2 = 0;
    const r2 = o2.textContent;
    const s6 = new RegExp(TextHoleRE(), "g");
    while (p2 = s6.exec(r2), p2 !== null) {
      o2.parentNode.insertBefore(globalThis.document.createTextNode(string(r2, Some(q2), Some(s6.lastIndex - get(p2, 0).length - 1))), o2);
      q2 = s6.lastIndex;
      const t2 = globalThis.document.createElement("span");
      t2.setAttribute("ws-replace", get(p2, 1).toLowerCase());
      o2.parentNode.insertBefore(t2, o2);
    }
    s6.lastIndex = 0;
    o2.textContent = string(r2, Some(q2), null);
  }
  function convertAttrs(o2) {
    const p2 = o2.attributes;
    const q2 = [];
    const r2 = [];
    const s6 = [];
    for (let z2 = 0, A2 = p2.length - 1; z2 <= A2; z2++) {
      const t2 = p2.item(z2);
      if (StartsWith(t2.nodeName, "ws-on") && t2.nodeName != "ws-onafterrender" && t2.nodeName != "ws-on") {
        q2.push(t2.nodeName);
        r2.push(string(t2.nodeName, Some("ws-on".length), null) + ":" + t2.nodeValue.toLowerCase());
      } else if (!StartsWith(t2.nodeName, "ws-") && new RegExp(TextHoleRE()).test(t2.nodeValue)) {
        let u2 = new RegExp(TextHoleRE(), "g");
        let v2 = t2.nodeValue;
        let w2 = (B3, C2) => "${" + C2.toLowerCase() + "}";
        let x2 = v2.replace(u2, w2);
        t2.nodeValue = x2;
        s6.push(t2.nodeName);
      } else
        ;
    }
    if (!(r2.length == 0))
      o2.setAttribute("ws-on", concat4(" ", r2));
    if (!(s6.length == 0))
      o2.setAttribute("ws-attr-holes", concat4(" ", s6));
    const y2 = (B3) => {
      const C2 = o2.getAttribute(B3);
      if (C2 == null) {
      } else
        o2.setAttribute(B3, C2.toLowerCase());
    };
    y2("ws-hole");
    y2("ws-replace");
    y2("ws-attr");
    y2("ws-onafterrender");
    y2("ws-var");
    iter((B3) => {
      o2.removeAttribute(B3);
    }, q2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHole.js
  var a47 = class extends a {
    static Value(d2) {
      return d2.ValueObj;
    }
    get AsChoiceView() {
      console.warn("Attribute value hole filled with non-text data", this.Name);
      return Choice1Of2("");
    }
    ForTextView() {
      console.warn("Content hole filled with attribute data", this.Name);
      return null;
    }
    ApplyVarHole(d2) {
      console.warn("Not a var hole: ", this.Name);
    }
    AddAttribute(d2, e2) {
      console.warn("Var hole filled with non-Var data", this.Name);
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHoleModule.Elt.js
  var a48 = class _a extends a47 {
    name;
    fillWith;
    get Value() {
      return this.fillWith;
    }
    WithName(c2) {
      return new _a(c2, this.fillWith);
    }
    get ValueObj() {
      return this.Value;
    }
    get Name() {
      return this.name;
    }
    constructor(c2, d2) {
      super();
      this.name = c2;
      this.fillWith = d2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHoleModule.Text.js
  var a49 = class _a extends a47 {
    name;
    fillWith;
    get Value() {
      return this.fillWith;
    }
    get AsChoiceView() {
      return Choice1Of2(this.fillWith);
    }
    WithName(d2) {
      return new _a(d2, this.fillWith);
    }
    get ValueObj() {
      return this.Value;
    }
    get Name() {
      return this.name;
    }
    constructor(d2, e2) {
      super();
      this.name = d2;
      this.fillWith = e2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHoleModule.Attribute.js
  var a50 = class _a extends a47 {
    name;
    fillWith;
    get Value() {
      return this.fillWith;
    }
    WithName(c2) {
      return new _a(c2, this.fillWith);
    }
    get ValueObj() {
      return this.Value;
    }
    get Name() {
      return this.name;
    }
    constructor(c2, d2) {
      super();
      this.name = c2;
      this.fillWith = d2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHoleModule.Event.js
  var a51 = class _a extends a47 {
    name;
    fillWith;
    get Value() {
      return this.fillWith;
    }
    WithName(c2) {
      return new _a(c2, this.fillWith);
    }
    get ValueObj() {
      return this.Value;
    }
    get Name() {
      return this.name;
    }
    constructor(c2, d2) {
      super();
      this.name = c2;
      this.fillWith = d2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHoleModule.EventQ.js
  var a52 = class _a extends a47 {
    name;
    key;
    fillWith;
    get Key() {
      return this.key;
    }
    get Value() {
      return this.fillWith;
    }
    WithName(c2) {
      return new _a(c2, this.key, this.fillWith);
    }
    get ValueObj() {
      return this.Value;
    }
    get Name() {
      return this.name;
    }
    constructor(c2, d2, e2) {
      super();
      this.name = c2;
      this.key = d2;
      this.fillWith = e2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHoleModule.AfterRender.js
  var a53 = class _a extends a47 {
    name;
    fillWith;
    get Value() {
      return this.fillWith;
    }
    WithName(c2) {
      return new _a(c2, this.fillWith);
    }
    get ValueObj() {
      return this.Value;
    }
    get Name() {
      return this.name;
    }
    constructor(c2, d2) {
      super();
      this.name = c2;
      this.fillWith = d2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHoleModule.AfterRenderQ.js
  var a54 = class _a extends a47 {
    name;
    key;
    fillWith;
    get Key() {
      return this.key;
    }
    get Value() {
      return this.fillWith;
    }
    WithName(c2) {
      return new _a(c2, this.key, this.fillWith);
    }
    get ValueObj() {
      return this.Value;
    }
    get Name() {
      return this.name;
    }
    constructor(c2, d2, e2) {
      super();
      this.name = c2;
      this.key = d2;
      this.fillWith = e2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHoleModule.VarDomElement.js
  var a55 = class _a extends a47 {
    name;
    fillWith;
    get Value() {
      return this.fillWith;
    }
    ApplyVarHole(c2) {
    }
    WithName(c2) {
      return new _a(c2, this.fillWith);
    }
    get ValueObj() {
      return this.Value;
    }
    get Name() {
      return this.name;
    }
    constructor(c2, d2) {
      super();
      this.name = c2;
      this.fillWith = d2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Client.Templates.js
  function GetOrLoadTemplate(bd2, be, bf, bg) {
    LoadLocalTemplates("");
    PrepareTemplate(bd2, be, bf);
    return NamedTemplate(bd2, be, bg);
  }
  function NamedTemplate(bd2, be, bf) {
    let bg;
    const bh = (bg = null, [LoadedTemplateFile(bd2).TryGetValue(be == null ? "" : be.$0, { get: () => bg, set: (bi) => {
      bg = bi;
    } }), bg]);
    return bh[0] ? ChildrenTemplate(bh[1].cloneNode(true), bf) : (console.warn("Local template doesn't exist", be), WebSharper_UI_Doc_default.Empty);
  }
  function RunFullDocTemplate(bd2) {
    if (RenderedFullDocTemplate() == null) {
      LoadLocalTemplates("");
      PrepareTemplateStrict("", null, globalThis.document.body, null);
      const be = ChildrenTemplate(globalThis.document.body, bd2);
      const bf = globalThis.document.body;
      ((bh) => {
        WebSharper_UI_Doc_default.RunInPlace(true, bf, bh);
      })(be);
      const bg = be;
      set_RenderedFullDocTemplate(Some(bg));
      return bg;
    } else
      return RenderedFullDocTemplate().$0;
  }
  function RenderedFullDocTemplate() {
    return StartupCode_Templates_default.RenderedFullDocTemplate;
  }
  function set_RenderedFullDocTemplate(bd2) {
    StartupCode_Templates_default.RenderedFullDocTemplate = bd2;
  }
  function LoadLocalTemplates(bd2) {
    !LocalTemplatesLoaded() ? (set_LocalTemplatesLoaded(true), LoadNestedTemplates(globalThis.document.body, "")) : void 0;
    LoadedTemplates().set_Item(bd2, LoadedTemplateFile(""));
  }
  function LoadNestedTemplates(bd2, be) {
    const bf = LoadedTemplateFile(be);
    const bg = new a7("New_5");
    const bh = bd2.querySelectorAll("[ws-template]");
    for (let bt = 0, bu = bh.length - 1; bt <= bu; bt++) {
      const bi = bh[bt];
      const bj = bi.getAttribute("ws-template").toLowerCase();
      bi.removeAttribute("ws-template");
      bg.set_Item(bj, FakeRootSingle(bi));
    }
    const bk = bd2.querySelectorAll("[ws-children-template]");
    for (let bv = 0, bw = bk.length - 1; bv <= bw; bv++) {
      const bl = bk[bv];
      const bm = bl.getAttribute("ws-children-template").toLowerCase();
      bl.removeAttribute("ws-children-template");
      bg.set_Item(bm, FakeRoot(bl));
    }
    const bn = bd2.querySelectorAll("template[id]");
    for (let bx = 0, by = bn.length - 1; bx <= by; bx++) {
      const bo = bn[bx];
      bg.set_Item(bo.getAttribute("id").toLowerCase(), FakeRootFromHTMLTemplate(bo));
    }
    const bp = bd2.querySelectorAll("template[name]");
    for (let bz = 0, bA = bp.length - 1; bz <= bA; bz++) {
      const bq = bp[bz];
      bg.set_Item(bq.getAttribute("name").toLowerCase(), FakeRootFromHTMLTemplate(bq));
    }
    const br = new a8("New_3");
    function bs(bB) {
      if (!bf.ContainsKey(bB)) {
        let bC;
        const bD = (bC = null, [bg.TryGetValue(bB, { get: () => bC, set: (bE) => {
          bC = bE;
        } }), bC]);
        if (bD[0]) {
          br.SAdd(bB);
          bg.RemoveKey(bB);
          PrepareTemplateStrict(be, Some(bB), bD[1], Some(bs));
        } else
          console.warn(br.Contains(bB) ? "Encountered loop when instantiating " + bB : "Local template does not exist: " + bB);
      }
    }
    while (bg.count > 0)
      bs(head2(bg.Keys));
  }
  function PrepareTemplate(bd2, be, bf) {
    if (!LoadedTemplateFile(bd2).ContainsKey(be == null ? "" : be.$0))
      PrepareTemplateStrict(bd2, be, bf(), null);
  }
  function PrepareSingleTemplate(bd2, be, bf) {
    const bg = FakeRootSingle(bf);
    return (bh) => {
      PrepareTemplateStrict(bd2, be, bg, bh);
    };
  }
  function PrepareTemplateStrict(bd2, be, bf, bg) {
    const bh = new a8("New_3");
    function bi(bp, bq) {
      while (true)
        switch (bp) {
          case 0:
            if (bq !== null) {
              const br = bq.nextSibling;
              if (Equals(bq.nodeType, Node.TEXT_NODE))
                convertTextNode(bq);
              else
                Equals(bq.nodeType, Node.ELEMENT_NODE) ? bk(bq) : null;
              bq = br;
            } else
              return null;
            break;
          case 1:
            let bs;
            let bt;
            const bu = string(bq.nodeName, Some(3), null).toLowerCase();
            const bv = bu.indexOf(".");
            const bw = bv === -1 ? [bd2, bu] : [string(bu, null, Some(bv - 1)), string(bu, Some(bv + 1), null)];
            const bx = bw[1];
            const by = bw[0];
            if (by != "" && !LoadedTemplates().ContainsKey(by))
              return failNotLoaded(bx);
            else {
              if (by == "" && bg != null)
                bg.$0(bx);
              else
                null;
              const bz = LoadedTemplates().Item(by);
              if (!bz.ContainsKey(bx))
                return failNotLoaded(bx);
              else {
                const bA = bz.Item(bx);
                const bB = bA.cloneNode(true);
                const bC = new a8("New_3");
                const bD = new a7("New_5");
                const bE = bq.attributes;
                for (let bO = 0, bP = bE.length - 1; bO <= bP; bO++) {
                  const bF = bE.item(bO).name.toLowerCase();
                  const bG = bE.item(bO).nodeValue;
                  let bH = bG == "" ? bF : bG.toLowerCase();
                  bD.set_Item(bF, bH);
                  if (!bC.SAdd(bF))
                    console.warn("Hole mapped twice", bF);
                }
                for (let bQ = 0, bR = bq.childNodes.length - 1; bQ <= bR; bQ++) {
                  const bI = bq.childNodes[bQ];
                  if (Equals(bI.nodeType, Node.ELEMENT_NODE)) {
                    if (!bC.SAdd(bI.nodeName.toLowerCase()))
                      console.warn("Hole filled twice", bx);
                  }
                }
                const bJ = bq.childNodes.length === 1 && Equals(bq.firstChild.nodeType, Node.TEXT_NODE);
                if (bJ) {
                  const bK = fillTextHole(bB, bq.firstChild.textContent, bx);
                  const bL = /* @__PURE__ */ ((bS) => (bT) => bS.SAdd(bT))(bC);
                  let bM = /* @__PURE__ */ ((bS) => (bT) => {
                    if (bT != null)
                      bS(bT.$0);
                  })((bS) => {
                    bL(bS);
                  });
                  bs = bM(bK);
                } else
                  bs = null;
                removeHolesExcept(bB, bC);
                if (!bJ) {
                  for (let bS = 0, bT = bq.childNodes.length - 1; bS <= bT; bS++) {
                    const bN = bq.childNodes[bS];
                    if (Equals(bN.nodeType, Node.ELEMENT_NODE))
                      if (bN.hasAttributes())
                        fillInstanceAttrs(bB, bN);
                      else
                        bj(bB, bN);
                  }
                  bt = void 0;
                } else
                  bt = null;
                mapHoles(bB, bD);
                fill(bB, bq.parentNode, bq);
                bq.parentNode.removeChild(bq);
                return;
              }
            }
            break;
        }
    }
    function bj(bp, bq) {
      const br = bq.nodeName.toLowerCase();
      const bs = (bw, bx) => {
        let by;
        if (br == "title" && bq.hasChildNodes()) {
          const bz = ParseHTMLIntoFakeRoot(bq.textContent);
          bq.removeChild(bq.firstChild);
          while (bz.hasChildNodes())
            bq.appendChild(bz.firstChild);
          by = void 0;
        } else
          by = null;
        bk(bq);
        return fill(bq, bw, bx);
      };
      foreachNotPreserved(bp, "[ws-attr-holes]", (bw) => {
        const bx = SplitChars(bw.getAttribute("ws-attr-holes"), [" "], 1);
        for (let bD = 0, bE = bx.length - 1; bD <= bE; bD++) {
          const by = get(bx, bD);
          let bz = new RegExp("\\${" + br + "}", "ig");
          let bA = bw.getAttribute(by);
          let bB = bq.textContent;
          let bC = bA.replace(bz, bB);
          bw.setAttribute(by, bC);
        }
      });
      const bt = bp.querySelector("[ws-hole=" + br + "]");
      if (Equals(bt, null)) {
        const bu = bp.querySelector("[ws-replace=" + br + "]");
        if (Equals(bu, null)) {
          const bv = bp.querySelector("slot[name=" + br + "]");
          return bp.tagName.toLowerCase() == "template" ? (bs(bv.parentNode, bv), void bv.parentNode.removeChild(bv)) : null;
        } else {
          bs(bu.parentNode, bu);
          bu.parentNode.removeChild(bu);
          return;
        }
      } else {
        while (bt.hasChildNodes())
          bt.removeChild(bt.lastChild);
        bt.removeAttribute("ws-hole");
        return (/* @__PURE__ */ ((bw) => {
          const bx = bw;
          return (by) => bs(bx, by);
        })(bt))(null);
      }
    }
    function bk(bp) {
      if (!bp.hasAttribute("ws-preserve"))
        if (StartsWith(bp.nodeName.toLowerCase(), "ws-"))
          bm(bp);
        else {
          convertAttrs(bp);
          bl(bp.firstChild);
        }
    }
    function bl(bp) {
      return bi(0, bp);
    }
    function bm(bp) {
      return bi(1, bp);
    }
    function bn(bp) {
      while (true) {
        const bq = bp.querySelector("[ws-template]");
        if (Equals(bq, null)) {
          const br = bp.querySelector("[ws-children-template]");
          if (Equals(br, null)) {
            const bs = bp.querySelectorAll("template[id]");
            for (let by = 1, bz = bs.length - 1; by <= bz; by++) {
              const bt = bs[by];
              if (bh.Contains(bt)) {
              } else {
                PrepareTemplateStrict(bd2, Some(bt.getAttribute("id")), bt, null);
                bh.SAdd(bt);
              }
            }
            const bu = bp.querySelectorAll("template[name]");
            for (let bA = 1, bB = bu.length - 1; bA <= bB; bA++) {
              const bv = bu[bA];
              if (bh.Contains(bv)) {
              } else {
                PrepareTemplateStrict(bd2, Some(bv.getAttribute("name")), bv, null);
                bh.SAdd(bv);
              }
            }
            return null;
          } else {
            const bw = br.getAttribute("ws-children-template");
            br.removeAttribute("ws-children-template");
            PrepareTemplateStrict(bd2, Some(bw), br, null);
            bp = bp;
          }
        } else {
          const bx = bq.getAttribute("ws-template");
          PrepareSingleTemplate(bd2, Some(bx), bq)(null);
          bp = bp;
        }
      }
    }
    const bo = (be == null ? "" : be.$0).toLowerCase();
    LoadedTemplateFile(bd2).set_Item(bo, bf);
    if (bf.hasChildNodes()) {
      bn(bf);
      bl(bf.firstChild);
    }
  }
  function FakeRootSingle(bd2) {
    let be;
    bd2.removeAttribute("ws-template");
    const bf = bd2.getAttribute("ws-replace");
    if (bf == null)
      be = null;
    else {
      bd2.removeAttribute("ws-replace");
      const bg = bd2.parentNode;
      if (Equals(bg, null))
        be = null;
      else {
        const bh = globalThis.document.createElement(bd2.tagName);
        be = (bh.setAttribute("ws-replace", bf), void bg.replaceChild(bh, bd2));
      }
    }
    const bi = globalThis.document.createElement("div");
    bi.appendChild(bd2);
    return bi;
  }
  function FakeRootFromHTMLTemplate(bd2) {
    const be = globalThis.document.createElement("div");
    const bf = bd2.content;
    for (let bg = 0, bh = bf.childNodes.length - 1; bg <= bh; bg++)
      be.appendChild(bf.childNodes[bg].cloneNode(true));
    return be;
  }
  function FakeRoot(bd2) {
    const be = globalThis.document.createElement("div");
    while (bd2.hasChildNodes())
      be.appendChild(bd2.firstChild);
    return be;
  }
  function ChildrenTemplate(bd2, be) {
    let bf;
    const bg = InlineTemplate(bd2, append2(be, GlobalHoles().Values));
    const bh = bg[1];
    const bi = bg[0];
    const bj = bi.Els;
    return !Equals(bj, null) && bj.length === 1 && (get(bj, 0) instanceof Node && (Equals(get(bj, 0).nodeType, Node.ELEMENT_NODE) && (bf = get(bj, 0), true))) ? WebSharper_UI_Elt_default.TreeNode(bi, bh) : WebSharper_UI_Doc_default.Mk(TreeDoc(bi), bh);
  }
  function InlineTemplate(bd2, be) {
    let bf, bg, bh, bi;
    const bj = [];
    const bk = [];
    const bl = [];
    const bm = [];
    const bn = new a7("New_5");
    const bo = Get(be);
    try {
      while (bo.MoveNext()) {
        const bp = bo.Current;
        bn.set_Item(bp.Name, bp);
      }
      bf = void 0;
    } finally {
      const bq = bo;
      if (typeof bq == "object" && isIDisposable(bq))
        bo.Dispose();
    }
    bg = ChildrenArray(bd2);
    const br = (bz, bA) => {
      const bB = Insert(bz, bA);
      bk.push(Updates(bB));
      bl.push([bz, bB]);
      const bC = GetOptional(bB.OnAfterRender);
      if (bC == null)
        return null;
      else {
        const bD = bC.$0;
        bm.push(() => {
          bD(bz);
        });
        return;
      }
    };
    const bs = (bz) => {
      let bA;
      const bB = (bA = null, [bn.TryGetValue(bz, { get: () => bA, set: (bE) => {
        bA = bE;
      } }), bA]);
      if (bB[0]) {
        const bC = bB[1];
        if (bC instanceof a48)
          return Some(bC.Value);
        else if (bC instanceof a49)
          return Some(WebSharper_UI_Doc_default.TextNode(bC.Value));
        else {
          const bD = bC.ForTextView();
          return bD == null ? null : Some(WebSharper_UI_Doc_default.TextView(bD.$0));
        }
      } else
        return null;
    };
    foreachNotPreserved(bd2, "[ws-hole]", (bz) => {
      const bA = bz.getAttribute("ws-hole");
      bz.removeAttribute("ws-hole");
      while (bz.hasChildNodes())
        bz.removeChild(bz.lastChild);
      const bB = bs(bA);
      if (bB != null && bB.$ == 1) {
        const bC = bB.$0;
        LinkElement(bz, bC.docNode);
        bj.push(a40.New(Empty2(bz), bC.docNode, null, bz, Int(), null));
        bk.push(bC.updates);
      }
    });
    foreachNotPreserved(bd2, "[ws-replace]", (bz) => {
      let bA;
      const bB = bs(bz.getAttribute("ws-replace"));
      if (bB != null && bB.$ == 1) {
        const bC = bB.$0;
        const bD = bz.parentNode;
        const bE = globalThis.document.createTextNode("");
        bD.replaceChild(bE, bz);
        const bF = InsertBeforeDelim(bE, bC.docNode);
        bg = ChildrenArray(bd2);
        const bG = tryFindIndex((bI) => bz === bI, bg);
        if (bG == null)
          bA = void 0;
        else {
          const bH = bG.$0;
          bA = set(bg, bH, bC.docNode);
        }
        bj.push(a40.New(Empty2(bD), bC.docNode, Some([bF, bE]), bD, Int(), null));
        bk.push(bC.updates);
      }
    });
    bh = false;
    foreachNotPreserved(bd2, "slot", (bz) => {
      const bA = bz.getAttribute("name");
      const bB = bA == "" || bA == null ? "default" : bA.toLowerCase();
      if (bh && bB == "default" || !Equals(bd2.parentElement, null)) {
      } else {
        while (bz.hasChildNodes())
          bz.removeChild(bz.lastChild);
        if (bB == "default")
          bh = true;
        const bC = bs(bB);
        if (bC != null && bC.$ == 1) {
          const bD = bC.$0;
          LinkElement(bz, bD.docNode);
          bj.push(a40.New(Empty2(bz), bD.docNode, null, bz, Int(), null));
          bk.push(bD.updates);
        }
      }
    });
    foreachNotPreserved(bd2, "[ws-attr]", (bz) => {
      let bA;
      const bB = bz.getAttribute("ws-attr");
      bz.removeAttribute("ws-attr");
      const bC = (bA = null, [bn.TryGetValue(bB, { get: () => bA, set: (bE) => {
        bA = bE;
      } }), bA]);
      if (bC[0]) {
        const bD = bC[1];
        if (bD instanceof a50)
          br(bz, bD.Value);
        else
          console.warn("Attribute hole filled with non-attribute data", bB);
      }
    });
    foreachNotPreserved(bd2, "[ws-on]", (bz) => {
      br(bz, a28.Concat(choose((bA) => {
        let bB;
        const bC = SplitChars(bA, [":"], 1);
        const bD = (bB = null, [bn.TryGetValue(get(bC, 1), { get: () => bB, set: (bF) => {
          bB = bF;
        } }), bB]);
        if (bD[0]) {
          const bE = bD[1];
          return bE instanceof a51 ? Some(Handler(get(bC, 0), bE.Value)) : bE instanceof a52 ? Some(a28.HandlerImpl(get(bC, 0), bE.Value)) : (console.warn("Event hole on" + get(bC, 0) + " filled with non-event data", get(bC, 1)), null);
        } else
          return null;
      }, SplitChars(bz.getAttribute("ws-on"), [" "], 1))));
      bz.removeAttribute("ws-on");
    });
    foreachNotPreserved(bd2, "[ws-onafterrender]", (bz) => {
      let bA;
      const bB = bz.getAttribute("ws-onafterrender");
      const bC = (bA = null, [bn.TryGetValue(bB, { get: () => bA, set: (bE) => {
        bA = bE;
      } }), bA]);
      if (bC[0]) {
        const bD = bC[1];
        if (bD instanceof a53) {
          bz.removeAttribute("ws-onafterrender");
          br(bz, OnAfterRender(bD.Value));
        } else if (bD instanceof a54) {
          bz.removeAttribute("ws-onafterrender");
          br(bz, OnAfterRender(bD.Value));
        } else
          console.warn("onafterrender hole filled with non-onafterrender data", bB);
      }
    });
    foreachNotPreserved(bd2, "[ws-var]", (bz) => {
      let bA;
      const bB = bz.getAttribute("ws-var");
      bz.removeAttribute("ws-var");
      const bC = (bA = null, [bn.TryGetValue(bB, { get: () => bA, set: (bD) => {
        bA = bD;
      } }), bA]);
      if (bC[0])
        bC[1].AddAttribute((bD) => (bE) => br(bD, bE), bz);
    });
    const bt = () => {
      foreachNotPreservedwsDOM("[ws-dom]", (bz) => {
        let bA, bB, bC;
        const bD = (bA = null, [bn.TryGetValue(bz.getAttribute("ws-dom").toLowerCase(), { get: () => bA, set: (bH) => {
          bA = bH;
        } }), bA]);
        if (bD[0]) {
          const bE = bD[1];
          if (bE instanceof a55) {
            const bF = bE.Value;
            bz.removeAttribute("ws-dom");
            bB = bz;
            const bG = new MutationObserver((bH, bI) => {
              iter((bJ) => {
                bJ.removedNodes.forEach(CreateFuncWithArgs((bK) => bK[0] === bB && bJ.addedNodes.length !== 1 ? (bF.SetFinal(null), bI.disconnect()) : null), null);
              }, bH);
            });
            if (bz.parentElement !== null)
              bG.observe(bz.parentElement, (bC = {}, bC.childList = true, bC));
            bF.Set(Some(bz));
            Sink((bH) => {
              if (bH != null && bH.$ == 1) {
                const bI = bH.$0;
                if (bB === bI) {
                } else {
                  let bJ = [bI];
                  bB.replaceWith.apply(bB, bJ);
                  bB = bI;
                }
              } else {
                bB.remove();
                bG.disconnect();
              }
            }, bF.View);
          }
        }
      });
    };
    foreachNotPreserved(bd2, "[ws-attr-holes]", (bz) => {
      const bA = new RegExp(TextHoleRE(), "g");
      const bB = SplitChars(bz.getAttribute("ws-attr-holes"), [" "], 1);
      bz.removeAttribute("ws-attr-holes");
      for (let bC = 0, bD = bB.length - 1; bC <= bD; bC++)
        (() => {
          let bE, bF, bG;
          const bH = get(bB, bC);
          const bI = bz.getAttribute(bH);
          bE = null;
          bF = 0;
          const bJ = [];
          while (bE = bA.exec(bI), bE !== null) {
            const bK = string(bI, Some(bF), Some(bA.lastIndex - get(bE, 0).length - 1));
            bF = bA.lastIndex;
            bJ.push([bK, get(bE, 1)]);
          }
          const bL = string(bI, Some(bF), null);
          bA.lastIndex = 0;
          const bM = foldBack((bR, bS) => ((bT) => {
            const bU = bT[0];
            const bV = bT[1];
            return (bW) => {
              let bX;
              const bY = bW[0];
              const bZ = bW[1];
              const b0 = (bX = null, [bn.TryGetValue(bV, { get: () => bX, set: (b2) => {
                bX = b2;
              } }), bX]);
              const b1 = b0[0] ? b0[1].AsChoiceView : Choice1Of2("");
              return b1.$ == 1 ? [bU, a9.Cons(bY == "" ? b1.$0 : Map4((b2) => b2 + bY, b1.$0), bZ)] : [bU + b1.$0 + bY, bZ];
            };
          })(bR)(bS), bJ, [bL, a9.Empty]);
          if (bM[1].$ == 1) {
            if (bM[1].$1.$ == 1) {
              if (bM[1].$1.$1.$ == 1) {
                if (bM[1].$1.$1.$1.$ == 0) {
                  const bN = bM[0];
                  bG = Dynamic2(bH, Map32((bR, bS, bT) => bN + bR + bS + bT, bM[1].$0, bM[1].$1.$0, bM[1].$1.$1.$0));
                } else {
                  const bO = bM[0];
                  bG = Dynamic2(bH, Map4((bR) => bO + concat4("", bR), Sequence2(bM[1])));
                }
              } else {
                const bP = bM[0];
                bG = Dynamic2(bH, Map22((bR, bS) => bP + bR + bS, bM[1].$0, bM[1].$1.$0));
              }
            } else if (bM[0] == "")
              bG = Dynamic2(bH, bM[1].$0);
            else {
              const bQ = bM[0];
              bG = Dynamic2(bH, Map4((bR) => bQ + bR, bM[1].$0));
            }
          } else
            bG = a28.Create(bH, bM[0]);
          return br(bz, bG);
        })();
    });
    const bu = bm.length == 0 ? Some(() => {
      bt();
    }) : Some((bz) => {
      bt();
      iter((bA) => {
        bA(bz);
      }, bm);
    });
    let bv = bg;
    const bw = !Equals(bg, null) && bg.length === 1 && (get(bg, 0) instanceof Node && (get(bg, 0) instanceof Element && (bi = get(bg, 0), true))) ? Some(bi) : null;
    let bx = { Els: bv, Dirty: true, Holes: bj, Attrs: bl, Render: bu ? bu.$0 : void 0, El: bw ? bw.$0 : void 0 };
    let by = DeleteEmptyFields(bx, ["Render", "El"]);
    return [by, TreeReduce(Const(), Map2Unit2, bk)];
  }
  function foreachNotPreservedwsDOM(bd2, be) {
    IterSelectorDoc(bd2, (bf) => {
      if (bf.closest("[ws-preserve]") == null)
        be(bf);
    });
  }
  function foreachNotPreserved(bd2, be, bf) {
    IterSelector(bd2, be, (bg) => {
      if (bg.closest("[ws-preserve]") == null)
        bf(bg);
    });
  }
  function TextHoleRE() {
    return StartupCode_Templates_default.TextHoleRE;
  }
  function GlobalHoles() {
    return StartupCode_Templates_default.GlobalHoles;
  }
  function LocalTemplatesLoaded() {
    return StartupCode_Templates_default.LocalTemplatesLoaded;
  }
  function set_LocalTemplatesLoaded(bd2) {
    StartupCode_Templates_default.LocalTemplatesLoaded = bd2;
  }
  function LoadedTemplateFile(bd2) {
    let be;
    const bf = (be = null, [LoadedTemplates().TryGetValue(bd2, { get: () => be, set: (bh) => {
      be = bh;
    } }), be]);
    if (bf[0])
      return bf[1];
    else {
      const bg = new a7("New_5");
      LoadedTemplates().set_Item(bd2, bg);
      return bg;
    }
  }
  function LoadedTemplates() {
    return StartupCode_Templates_default.LoadedTemplates;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHoleModule.js
  function applyTypedVarHole(b2, c2, d2) {
    const e2 = b2(c2);
    e2[0](d2);
    Sink(e2[1](d2), e2[2]);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHoleModule.VarStr.js
  var a56 = class _a extends a47 {
    name;
    fillWith;
    get Value() {
      return this.fillWith;
    }
    ForTextView() {
      return Some(this.fillWith.View);
    }
    get AsChoiceView() {
      return Choice2Of2(Map4(String, this.fillWith.View));
    }
    AddAttribute(i2, j2) {
      i2(j2)(Value(this.fillWith));
    }
    ApplyVarHole(i2) {
      applyTypedVarHole(StringApply(), this.fillWith, i2);
    }
    WithName(i2) {
      return new _a(i2, this.fillWith);
    }
    get ValueObj() {
      return this.Value;
    }
    get Name() {
      return this.name;
    }
    constructor(i2, j2) {
      super();
      this.name = i2;
      this.fillWith = j2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.TemplateHoleModule.TextView.js
  var a57 = class _a extends a47 {
    name;
    fillWith;
    get Value() {
      return this.fillWith;
    }
    ForTextView() {
      return Some(this.fillWith);
    }
    get AsChoiceView() {
      return Choice2Of2(this.fillWith);
    }
    WithName(e2) {
      return new _a(e2, this.fillWith);
    }
    get ValueObj() {
      return this.Value;
    }
    get Name() {
      return this.name;
    }
    constructor(e2, f2) {
      super();
      this.name = e2;
      this.fillWith = f2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.ListModels.js
  function Contains(c2, d2, e2) {
    const f2 = c2(d2);
    return exists((g2) => Equals(c2(g2), f2), e2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Storage.ArrayStorage`1.js
  var a58 = class extends a {
    init;
    SSet(g2) {
      return ofSeq(g2);
    }
    SSetAt(g2, h2, i2) {
      set(i2, g2, h2);
      return i2;
    }
    SRemoveIf(g2, h2) {
      return filter((i2) => !g2(i2), h2);
    }
    SInit() {
      return this.init;
    }
    SPrependMany(g2, h2) {
      let i2 = ofSeqNonCopying(g2);
      h2.unshift.apply(h2, i2);
      return h2;
    }
    SPrepend(g2, h2) {
      h2.unshift(g2);
      return h2;
    }
    SAppendMany(g2, h2) {
      let i2 = ofSeqNonCopying(g2);
      h2.push.apply(h2, i2);
      return h2;
    }
    SAppend(g2, h2) {
      h2.push(g2);
      return h2;
    }
    constructor(g2) {
      super();
      this.init = g2;
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Storage.js
  function InMemory(c2) {
    return new a58(c2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.ListModel`2.js
  var a60 = Lazy((G2) => class H extends a {
    static {
      a60 = G2(this);
    }
    key;
    u0076ar;
    storage;
    v;
    it;
    Wrap(I2, J2, K2) {
      return Wrap(this, I2, J2, K2);
    }
    MapLens(I2) {
      return MapSeqCachedViewBy(this.key, (J2, K2) => I2(J2, this.LensIntou0027((L2) => L2, (L2, M2) => M2, J2, K2)), this.u0076ar.View);
    }
    Lens(I2) {
      return this.LensInto((J2) => J2, (J2, K2) => K2, I2);
    }
    LensInto(I2, J2, K2) {
      return this.LensIntou0027(I2, J2, K2, Map4(I2, this.FindByKeyAsView(K2)));
    }
    LensIntou0027(I2, J2, K2, L2) {
      const M2 = this;
      const N2 = Id();
      return new class extends a25 {
        constructor() {
          super();
        }
        Get() {
          return I2(M2.FindByKey(K2));
        }
        Set(O2) {
          return M2.UpdateBy((P2) => Some(J2(P2, O2)), K2);
        }
        SetFinal(O2) {
          return this.Set(O2);
        }
        Update(O2) {
          return M2.UpdateBy((P2) => Some(J2(P2, O2(I2(P2)))), K2);
        }
        UpdateMaybe(O2) {
          return M2.UpdateBy((P2) => {
            const Q2 = O2(I2(P2));
            return Q2 == null ? null : Some(J2(P2, Q2.$0));
          }, K2);
        }
        get View() {
          return L2;
        }
        get Id() {
          return N2;
        }
      }();
    }
    get LengthAsView() {
      return Map4((I2) => length(I2), this.u0076ar.View);
    }
    get Length() {
      return length(this.u0076ar.Get());
    }
    Clear() {
      this.u0076ar.Set(this.storage.SSet([]));
      this.ObsoleteAll();
    }
    UpdateBy(I2, J2) {
      const K2 = this.u0076ar.Get();
      const L2 = tryFindIndex((O2) => Equals(this.key(O2), J2), K2);
      if (L2 != null && L2.$ == 1) {
        const M2 = L2.$0;
        const N2 = I2(get(K2, M2));
        if (N2 != null && N2.$ == 1) {
          this.u0076ar.Set(this.storage.SSetAt(M2, N2.$0, K2));
          this.ObsoleteKey(J2);
        }
      } else
        ;
    }
    UpdateAll(I2) {
      this.u0076ar.Update((J2) => {
        iteri((K2, L2) => {
          const M2 = I2(L2);
          return M2 == null ? null : set(J2, K2, M2.$0);
        }, J2);
        return this.storage.SSet(J2);
      });
      this.ObsoleteAll();
    }
    FindByKeyAsView(I2) {
      return Map4((J2) => J2.$0, this.TryFindByKeyAsView(I2));
    }
    TryFindByKeyAsView(I2) {
      return () => {
        let J2;
        const K2 = (J2 = null, [this.it.TryGetValue(I2, { get: () => J2, set: (M2) => {
          J2 = M2;
        } }), J2]);
        if (K2[0])
          return K2[1];
        else {
          const L2 = { s: Ready(this.TryFindByKey(I2), []) };
          this.it.DAdd(I2, L2);
          return L2;
        }
      };
    }
    TryFindByKey(I2) {
      return tryFind((J2) => Equals(this.key(J2), I2), this.u0076ar.Get());
    }
    FindByKey(I2) {
      return find((J2) => Equals(this.key(J2), I2), this.u0076ar.Get());
    }
    TryFindAsView(I2) {
      return Map4((J2) => tryFind(I2, J2), this.u0076ar.View);
    }
    FindAsView(I2) {
      return Map4((J2) => find(I2, J2), this.u0076ar.View);
    }
    TryFind(I2) {
      return tryFind(I2, this.u0076ar.Get());
    }
    Find(I2) {
      return find(I2, this.u0076ar.Get());
    }
    ContainsKeyAsView(I2) {
      const J2 = (K2) => Equals(this.key(K2), I2);
      return Map4((K2) => exists(J2, K2), this.u0076ar.View);
    }
    ContainsKey(I2) {
      return exists((J2) => Equals(this.key(J2), I2), this.u0076ar.Get());
    }
    Set(I2) {
      this.u0076ar.Set(this.storage.SSet(I2));
      this.ObsoleteAll();
    }
    Iter(I2) {
      iter(I2, this.u0076ar.Get());
    }
    RemoveByKey(I2) {
      this.u0076ar.Set(this.storage.SRemoveIf((J2) => Equals(this.key(J2), I2), this.u0076ar.Get()));
      this.ObsoleteKey(I2);
    }
    RemoveBy(I2) {
      const J2 = this.u0076ar.Get();
      for (let L2 = 0, M2 = J2.length - 1; L2 <= M2; L2++) {
        const K2 = get(J2, L2);
        if (I2(K2))
          this.ObsoleteKey(this.key(K2));
      }
      this.u0076ar.Set(this.storage.SRemoveIf(I2, this.u0076ar.Get()));
    }
    Remove(I2) {
      const J2 = this.u0076ar.Get();
      if (Contains(this.key, I2, J2)) {
        const K2 = this.key;
        const L2 = K2(I2);
        this.u0076ar.Set(this.storage.SRemoveIf((M2) => Equals(K2(M2), L2), J2));
        this.ObsoleteKey(L2);
      } else
        ;
    }
    PrependMany(I2) {
      const J2 = MarkResizable([]);
      this.u0076ar.Set(this.storage.SPrependMany(J2, fold((K2, L2) => {
        const M2 = this.key(L2);
        this.ObsoleteKey(M2);
        const N2 = tryFindIndex((O2) => Equals(this.key(O2), M2), K2);
        return N2 == null ? (J2.push(L2), K2) : this.storage.SSetAt(N2.$0, L2, K2);
      }, this.u0076ar.Get(), I2)));
    }
    Prepend(I2) {
      const J2 = this.u0076ar.Get();
      const K2 = this.key(I2);
      const L2 = tryFindIndex((M2) => Equals(this.key(M2), K2), J2);
      if (L2 != null && L2.$ == 1)
        this.u0076ar.Set(this.storage.SSetAt(L2.$0, I2, J2));
      else
        this.u0076ar.Set(this.storage.SPrepend(I2, J2));
      this.ObsoleteKey(K2);
    }
    AppendMany(I2) {
      const J2 = MarkResizable([]);
      this.u0076ar.Set(this.storage.SAppendMany(J2, fold((K2, L2) => {
        const M2 = this.key(L2);
        this.ObsoleteKey(M2);
        const N2 = tryFindIndex((O2) => Equals(this.key(O2), M2), K2);
        return N2 == null ? (J2.push(L2), K2) : this.storage.SSetAt(N2.$0, L2, K2);
      }, this.u0076ar.Get(), I2)));
    }
    Append(I2) {
      const J2 = this.u0076ar.Get();
      const K2 = this.key(I2);
      const L2 = tryFindIndex((M2) => Equals(this.key(M2), K2), J2);
      if (L2 != null && L2.$ == 1)
        this.u0076ar.Set(this.storage.SSetAt(L2.$0, I2, J2));
      else
        this.u0076ar.Set(this.storage.SAppend(I2, J2));
      this.ObsoleteKey(K2);
    }
    ObsoleteAll() {
      iter3((I2) => {
        Obsolete(I2.V);
      }, this.it);
      this.it.Clear();
    }
    ObsoleteKey(I2) {
      let J2;
      const K2 = (J2 = null, [this.it.TryGetValue(I2, { get: () => J2, set: (L2) => {
        J2 = L2;
      } }), J2]);
      if (K2[0]) {
        Obsolete(K2[1]);
        this.it.RemoveKey(I2);
      }
    }
    GetEnumerator0() {
      return Get0(this.u0076ar.Get());
    }
    GetEnumerator() {
      return Get(this.u0076ar.Get());
    }
    constructor(I2, J2, K2, L2) {
      let M2;
      if (I2 == "New_1") {
        M2 = J2;
        I2 = "New_2";
        J2 = M2;
        K2 = [];
      }
      let N2;
      let O2;
      if (I2 == "New_2") {
        N2 = J2;
        O2 = K2;
        const P2 = ofSeq(O2);
        I2 = "New_3";
        J2 = N2;
        K2 = WebSharper_UI_Var_default.Create_1(P2);
        L2 = InMemory(P2);
      }
      let Q2;
      let R2;
      if (I2 == "New") {
        Q2 = J2;
        R2 = K2;
        I2 = "New_3";
        J2 = Q2;
        K2 = WebSharper_UI_Var_default.Create_1(ofSeq(distinctBy(Q2, R2.SInit())));
        L2 = R2;
      }
      if (I2 == "New_3") {
        const S2 = J2;
        const T2 = K2;
        const U2 = L2;
        super();
        this.key = S2;
        this.u0076ar = T2;
        this.storage = U2;
        this.v = Map4((V2) => V2.slice(), this.u0076ar.View);
        this.it = new a7("New_5");
      }
    }
  });
  var WebSharper_UI_ListModel_2_default = a60;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.ListModel.js
  function Wrap(g2, h2, i2, j2) {
    const k2 = [new a7("New_5")];
    const l2 = map2((m2) => {
      const n2 = i2(m2);
      k2[0].set_Item(g2.key(m2), n2);
      return n2;
    }, g2.u0076ar.Get());
    return new WebSharper_UI_ListModel_2_default("New_3", (m2) => g2.key(h2(m2)), WebSharper_UI_Var_default.Lens(g2.u0076ar, (m2) => {
      const n2 = new a7("New_5");
      const o2 = map2((p2) => {
        const q2 = g2.key(p2);
        const r2 = k2[0].ContainsKey(q2) ? j2(k2[0].Item(q2), p2) : i2(p2);
        n2.set_Item(q2, r2);
        return r2;
      }, m2);
      k2[0] = n2;
      return o2;
    }, (m2, n2) => {
      const o2 = new a7("New_5");
      const p2 = map2((q2) => {
        const r2 = h2(q2);
        o2.set_Item(g2.key(r2), q2);
        return r2;
      }, n2);
      k2[0] = o2;
      return p2;
    }), InMemory(l2));
  }
  function Create4(g2, h2) {
    return CreateWithStorage(g2, InMemory(ofSeq(h2)));
  }
  function CreateWithStorage(g2, h2) {
    return new WebSharper_UI_ListModel_2_default("New", g2, h2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/Stdlib__List.js
  function ap(f2, args) {
    return globalThis.OCamlRuntime ? globalThis.OCamlRuntime.caml_apply(f2, args) : f2.apply(null, args);
  }
  function seqElems(x2) {
    const a67 = [];
    if (typeof x2 === "function") {
      let n2 = x2();
      while (n2 !== 0) {
        a67.push(n2["0"]);
        n2 = n2["1"]();
      }
      return a67;
    }
    if (x2 && typeof x2.GetEnumerator === "function") {
      const e2 = x2.GetEnumerator();
      try {
        while (e2.MoveNext())
          a67.push(e2.Current);
      } finally {
        if (typeof e2.Dispose === "function")
          e2.Dispose();
      }
      return a67;
    }
    if (x2 && typeof x2.length === "number") {
      for (let i2 = 0; i2 < x2.length; i2++)
        a67.push(x2[i2]);
      return a67;
    }
    return a67;
  }
  var s = { $tag: 0 };
  s[0] = function() {
    throw new Error("List field 0 not implemented");
  };
  s[1] = function() {
    throw new Error("List field 1 not implemented");
  };
  s[2] = function() {
    throw new Error("List field 2 not implemented");
  };
  s[3] = function() {
    throw new Error("List field 3 not implemented");
  };
  s[4] = function() {
    throw new Error("List field 4 not implemented");
  };
  s[5] = function() {
    throw new Error("List field 5 not implemented");
  };
  s[6] = function() {
    throw new Error("List field 6 not implemented");
  };
  s[7] = function() {
    throw new Error("List field 7 not implemented");
  };
  s[8] = function() {
    throw new Error("List field 8 not implemented");
  };
  s[9] = function() {
    throw new Error("List field 9 not implemented");
  };
  s[10] = function() {
    throw new Error("List field 10 not implemented");
  };
  s[11] = function() {
    throw new Error("List field 11 not implemented");
  };
  s[12] = function() {
    throw new Error("List field 12 not implemented");
  };
  s[13] = function() {
    throw new Error("List field 13 not implemented");
  };
  s[14] = function() {
    throw new Error("List field 14 not implemented");
  };
  s[15] = function() {
    throw new Error("List field 15 not implemented");
  };
  s[16] = function() {
    throw new Error("List field 16 not implemented");
  };
  s[17] = function() {
    throw new Error("List field 17 not implemented");
  };
  s[18] = function() {
    throw new Error("List field 18 not implemented");
  };
  s[19] = function() {
    throw new Error("List field 19 not implemented");
  };
  s[20] = function() {
    throw new Error("List field 20 not implemented");
  };
  s[21] = function() {
    throw new Error("List field 21 not implemented");
  };
  s[22] = function() {
    throw new Error("List field 22 not implemented");
  };
  s[23] = function() {
    throw new Error("List field 23 not implemented");
  };
  s[24] = function() {
    throw new Error("List field 24 not implemented");
  };
  s[25] = function() {
    throw new Error("List field 25 not implemented");
  };
  s[26] = function() {
    throw new Error("List field 26 not implemented");
  };
  s[27] = function() {
    throw new Error("List field 27 not implemented");
  };
  s[28] = function() {
    throw new Error("List field 28 not implemented");
  };
  s[29] = function() {
    throw new Error("List field 29 not implemented");
  };
  s[30] = function() {
    throw new Error("List field 30 not implemented");
  };
  s[31] = function() {
    throw new Error("List field 31 not implemented");
  };
  s[32] = function() {
    throw new Error("List field 32 not implemented");
  };
  s[33] = function() {
    throw new Error("List field 33 not implemented");
  };
  s[34] = function() {
    throw new Error("List field 34 not implemented");
  };
  s[35] = function() {
    throw new Error("List field 35 not implemented");
  };
  s[36] = function() {
    throw new Error("List field 36 not implemented");
  };
  s[37] = function() {
    throw new Error("List field 37 not implemented");
  };
  s[38] = function() {
    throw new Error("List field 38 not implemented");
  };
  s[39] = function() {
    throw new Error("List field 39 not implemented");
  };
  s[40] = function() {
    throw new Error("List field 40 not implemented");
  };
  s[41] = function() {
    throw new Error("List field 41 not implemented");
  };
  s[42] = function() {
    throw new Error("List field 42 not implemented");
  };
  s[43] = function() {
    throw new Error("List field 43 not implemented");
  };
  s[44] = function() {
    throw new Error("List field 44 not implemented");
  };
  s[45] = function() {
    throw new Error("List field 45 not implemented");
  };
  s[46] = function() {
    throw new Error("List field 46 not implemented");
  };
  s[47] = function() {
    throw new Error("List field 47 not implemented");
  };
  s[48] = function() {
    throw new Error("List field 48 not implemented");
  };
  s[49] = function() {
    throw new Error("List field 49 not implemented");
  };
  s[50] = function() {
    throw new Error("List field 50 not implemented");
  };
  s[51] = function() {
    throw new Error("List field 51 not implemented");
  };
  s[52] = function() {
    throw new Error("List field 52 not implemented");
  };
  s[53] = function() {
    throw new Error("List field 53 not implemented");
  };
  s[54] = function() {
    throw new Error("List field 54 not implemented");
  };
  s[55] = function() {
    throw new Error("List field 55 not implemented");
  };
  s[56] = function() {
    throw new Error("List field 56 not implemented");
  };
  s[57] = function() {
    throw new Error("List field 57 not implemented");
  };
  s[58] = function() {
    throw new Error("List field 58 not implemented");
  };
  s[59] = function() {
    throw new Error("List field 59 not implemented");
  };
  s[60] = function() {
    throw new Error("List field 60 not implemented");
  };
  s[61] = function() {
    throw new Error("List field 61 not implemented");
  };
  s[62] = function() {
    throw new Error("List field 62 not implemented");
  };
  s[63] = function() {
    throw new Error("List field 63 not implemented");
  };
  s[64] = function() {
    throw new Error("List field 64 not implemented");
  };
  s[65] = function() {
    throw new Error("List field 65 not implemented");
  };
  s[66] = function() {
    throw new Error("List field 66 not implemented");
  };
  s[67] = function() {
    throw new Error("List field 67 not implemented");
  };
  s[68] = function() {
    throw new Error("List field 68 not implemented");
  };
  s[69] = function() {
    throw new Error("List field 69 not implemented");
  };
  s[70] = function() {
    throw new Error("List field 70 not implemented");
  };
  s[71] = function() {
    throw new Error("List field 71 not implemented");
  };
  s[72] = function() {
    throw new Error("List field 72 not implemented");
  };
  s[73] = function() {
    throw new Error("List field 73 not implemented");
  };
  s[74] = function() {
    throw new Error("List field 74 not implemented");
  };
  s[75] = function() {
    throw new Error("List field 75 not implemented");
  };
  s[0] = (l2) => {
    let n2 = 0;
    while (l2 !== 0) {
      n2++;
      l2 = l2["1"];
    }
    return n2;
  };
  s[3] = (l2) => l2 === 0 ? 1 : 0;
  s[4] = (x2, l2) => ({ $tag: 0, "0": x2, "1": l2 });
  s[5] = (x2) => ({ $tag: 0, "0": x2, "1": 0 });
  s[6] = (l2) => l2["0"];
  s[7] = (l2) => l2["1"];
  s[8] = (l2, n2) => {
    while (n2 > 0) {
      l2 = l2["1"];
      n2--;
    }
    return l2["0"];
  };
  s[9] = (l2, n2) => {
    while (n2 > 0) {
      if (l2 === 0)
        return 0;
      l2 = l2["1"];
      n2--;
    }
    return l2 === 0 ? 0 : { $tag: 0, "0": l2["0"] };
  };
  s[10] = (l2) => {
    let r2 = 0;
    while (l2 !== 0) {
      r2 = { $tag: 0, "0": l2["0"], "1": r2 };
      l2 = l2["1"];
    }
    return r2;
  };
  s[13] = (l1, l2) => {
    while (l1 !== 0) {
      l2 = { $tag: 0, "0": l1["0"], "1": l2 };
      l1 = l1["1"];
    }
    return l2;
  };
  s[14] = (ll) => {
    const s6 = [];
    while (ll !== 0) {
      let l2 = ll["0"];
      while (l2 !== 0) {
        s6.push(l2["0"]);
        l2 = l2["1"];
      }
      ll = ll["1"];
    }
    let r2 = 0;
    for (let i2 = s6.length - 1; i2 >= 0; i2--)
      r2 = { $tag: 0, "0": s6[i2], "1": r2 };
    return r2;
  };
  s[15] = (ll) => {
    const s6 = [];
    while (ll !== 0) {
      let l2 = ll["0"];
      while (l2 !== 0) {
        s6.push(l2["0"]);
        l2 = l2["1"];
      }
      ll = ll["1"];
    }
    let r2 = 0;
    for (let i2 = s6.length - 1; i2 >= 0; i2--)
      r2 = { $tag: 0, "0": s6[i2], "1": r2 };
    return r2;
  };
  s[18] = (f2, l2) => {
    while (l2 !== 0) {
      ap(f2, [l2["0"]]);
      l2 = l2["1"];
    }
    return 0;
  };
  s[19] = (f2, l2) => {
    let i2 = 0;
    while (l2 !== 0) {
      ap(f2, [i2, l2["0"]]);
      i2++;
      l2 = l2["1"];
    }
    return 0;
  };
  s[20] = (f2, l2) => {
    const s6 = [];
    while (l2 !== 0) {
      s6.push(ap(f2, [l2["0"]]));
      l2 = l2["1"];
    }
    let r2 = 0;
    for (let i2 = s6.length - 1; i2 >= 0; i2--)
      r2 = { $tag: 0, "0": s6[i2], "1": r2 };
    return r2;
  };
  s[22] = (f2, l2) => {
    let r2 = 0;
    while (l2 !== 0) {
      r2 = { $tag: 0, "0": ap(f2, [l2["0"]]), "1": r2 };
      l2 = l2["1"];
    }
    return r2;
  };
  s[23] = (f2, l2) => {
    const s6 = [];
    while (l2 !== 0) {
      const o2 = ap(f2, [l2["0"]]);
      if (o2 !== 0)
        s6.push(o2["0"]);
      l2 = l2["1"];
    }
    let r2 = 0;
    for (let i2 = s6.length - 1; i2 >= 0; i2--)
      r2 = { $tag: 0, "0": s6[i2], "1": r2 };
    return r2;
  };
  s[26] = (f2, acc, l2) => {
    while (l2 !== 0) {
      acc = ap(f2, [acc, l2["0"]]);
      l2 = l2["1"];
    }
    return acc;
  };
  s[27] = (f2, l2, acc) => {
    const s6 = [];
    while (l2 !== 0) {
      s6.push(l2["0"]);
      l2 = l2["1"];
    }
    for (let i2 = s6.length - 1; i2 >= 0; i2--)
      acc = ap(f2, [s6[i2], acc]);
    return acc;
  };
  s[33] = (f2, l2) => {
    while (l2 !== 0) {
      if (!ap(f2, [l2["0"]]))
        return 0;
      l2 = l2["1"];
    }
    return 1;
  };
  s[34] = (f2, l2) => {
    while (l2 !== 0) {
      if (ap(f2, [l2["0"]]))
        return 1;
      l2 = l2["1"];
    }
    return 0;
  };
  s[37] = (x2, l2) => {
    while (l2 !== 0) {
      if (x2 === l2["0"])
        return 1;
      l2 = l2["1"];
    }
    return 0;
  };
  s[39] = (f2, l2) => {
    while (l2 !== 0) {
      if (ap(f2, [l2["0"]]))
        return l2["0"];
      l2 = l2["1"];
    }
    throw new Error("Not_found");
  };
  s[40] = (f2, l2) => {
    while (l2 !== 0) {
      if (ap(f2, [l2["0"]]))
        return { $tag: 0, "0": l2["0"] };
      l2 = l2["1"];
    }
    return 0;
  };
  s[44] = (f2, l2) => {
    const s6 = [];
    while (l2 !== 0) {
      if (ap(f2, [l2["0"]]))
        s6.push(l2["0"]);
      l2 = l2["1"];
    }
    let r2 = 0;
    for (let i2 = s6.length - 1; i2 >= 0; i2--)
      r2 = { $tag: 0, "0": s6[i2], "1": r2 };
    return r2;
  };
  s[45] = (f2, l2) => {
    const s6 = [];
    while (l2 !== 0) {
      if (ap(f2, [l2["0"]]))
        s6.push(l2["0"]);
      l2 = l2["1"];
    }
    let r2 = 0;
    for (let i2 = s6.length - 1; i2 >= 0; i2--)
      r2 = { $tag: 0, "0": s6[i2], "1": r2 };
    return r2;
  };
  s[53] = (k2, l2) => {
    while (l2 !== 0) {
      const p2 = l2["0"];
      if (p2["0"] === k2)
        return p2["1"];
      l2 = l2["1"];
    }
    throw new Error("Not_found");
  };
  s[54] = (k2, l2) => {
    while (l2 !== 0) {
      const p2 = l2["0"];
      if (p2["0"] === k2)
        return { $tag: 0, "0": p2["1"] };
      l2 = l2["1"];
    }
    return 0;
  };
  s[57] = (k2, l2) => {
    while (l2 !== 0) {
      if (l2["0"]["0"] === k2)
        return 1;
      l2 = l2["1"];
    }
    return 0;
  };
  s[59] = (k2, l2) => {
    const s6 = [];
    while (l2 !== 0) {
      if (l2["0"]["0"] !== k2)
        s6.push(l2["0"]);
      l2 = l2["1"];
    }
    let r2 = 0;
    for (let i2 = s6.length - 1; i2 >= 0; i2--)
      r2 = { $tag: 0, "0": s6[i2], "1": r2 };
    return r2;
  };
  s[69] = (x2) => {
    const a67 = seqElems(x2);
    let l2 = 0;
    for (let i2 = a67.length - 1; i2 >= 0; i2--)
      l2 = { $tag: 0, "0": a67[i2], "1": l2 };
    return l2;
  };
  s[73] = (f2, l2) => {
    let i2 = 0;
    while (l2 !== 0) {
      ap(f2, [i2, l2["0"]]);
      i2++;
      l2 = l2["1"];
    }
    return 0;
  };
  var Stdlib_List_default = s;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/Stdlib__Array.js
  function ap2(f2, args) {
    return globalThis.OCamlRuntime ? globalThis.OCamlRuntime.caml_apply(f2, args) : f2.apply(null, args);
  }
  var s2 = { $tag: 0 };
  s2[0] = function() {
    throw new Error("Array field 0 not implemented");
  };
  s2[1] = function() {
    throw new Error("Array field 1 not implemented");
  };
  s2[2] = function() {
    throw new Error("Array field 2 not implemented");
  };
  s2[3] = function() {
    throw new Error("Array field 3 not implemented");
  };
  s2[4] = function() {
    throw new Error("Array field 4 not implemented");
  };
  s2[5] = function() {
    throw new Error("Array field 5 not implemented");
  };
  s2[6] = function() {
    throw new Error("Array field 6 not implemented");
  };
  s2[7] = function() {
    throw new Error("Array field 7 not implemented");
  };
  s2[8] = function() {
    throw new Error("Array field 8 not implemented");
  };
  s2[9] = function() {
    throw new Error("Array field 9 not implemented");
  };
  s2[10] = function() {
    throw new Error("Array field 10 not implemented");
  };
  s2[11] = function() {
    throw new Error("Array field 11 not implemented");
  };
  s2[12] = function() {
    throw new Error("Array field 12 not implemented");
  };
  s2[13] = function() {
    throw new Error("Array field 13 not implemented");
  };
  s2[14] = function() {
    throw new Error("Array field 14 not implemented");
  };
  s2[15] = function() {
    throw new Error("Array field 15 not implemented");
  };
  s2[16] = function() {
    throw new Error("Array field 16 not implemented");
  };
  s2[17] = function() {
    throw new Error("Array field 17 not implemented");
  };
  s2[18] = function() {
    throw new Error("Array field 18 not implemented");
  };
  s2[19] = function() {
    throw new Error("Array field 19 not implemented");
  };
  s2[20] = function() {
    throw new Error("Array field 20 not implemented");
  };
  s2[21] = function() {
    throw new Error("Array field 21 not implemented");
  };
  s2[22] = function() {
    throw new Error("Array field 22 not implemented");
  };
  s2[23] = function() {
    throw new Error("Array field 23 not implemented");
  };
  s2[24] = function() {
    throw new Error("Array field 24 not implemented");
  };
  s2[25] = function() {
    throw new Error("Array field 25 not implemented");
  };
  s2[26] = function() {
    throw new Error("Array field 26 not implemented");
  };
  s2[27] = function() {
    throw new Error("Array field 27 not implemented");
  };
  s2[28] = function() {
    throw new Error("Array field 28 not implemented");
  };
  s2[29] = function() {
    throw new Error("Array field 29 not implemented");
  };
  s2[30] = function() {
    throw new Error("Array field 30 not implemented");
  };
  s2[31] = function() {
    throw new Error("Array field 31 not implemented");
  };
  s2[32] = function() {
    throw new Error("Array field 32 not implemented");
  };
  s2[33] = function() {
    throw new Error("Array field 33 not implemented");
  };
  s2[34] = function() {
    throw new Error("Array field 34 not implemented");
  };
  s2[35] = function() {
    throw new Error("Array field 35 not implemented");
  };
  s2[36] = function() {
    throw new Error("Array field 36 not implemented");
  };
  s2[37] = function() {
    throw new Error("Array field 37 not implemented");
  };
  s2[38] = function() {
    throw new Error("Array field 38 not implemented");
  };
  s2[39] = function() {
    throw new Error("Array field 39 not implemented");
  };
  s2[40] = function() {
    throw new Error("Array field 40 not implemented");
  };
  s2[41] = function() {
    throw new Error("Array field 41 not implemented");
  };
  s2[42] = function() {
    throw new Error("Array field 42 not implemented");
  };
  s2[43] = function() {
    throw new Error("Array field 43 not implemented");
  };
  s2[44] = function() {
    throw new Error("Array field 44 not implemented");
  };
  s2[45] = function() {
    throw new Error("Array field 45 not implemented");
  };
  s2[46] = function() {
    throw new Error("Array field 46 not implemented");
  };
  s2[47] = function() {
    throw new Error("Array field 47 not implemented");
  };
  s2[48] = function() {
    throw new Error("Array field 48 not implemented");
  };
  s2[49] = function() {
    throw new Error("Array field 49 not implemented");
  };
  s2[0] = (n2, f2) => {
    const a67 = new Array(n2);
    for (let i2 = 0; i2 < n2; i2++)
      a67[i2] = ap2(f2, [i2]);
    return a67;
  };
  s2[3] = (a67, b2) => a67.concat(b2);
  s2[5] = (a67, ofs, len) => a67.slice(ofs, ofs + len);
  s2[6] = (a67) => a67.slice();
  s2[7] = (a67, ofs, len, v2) => {
    for (let i2 = 0; i2 < len; i2++)
      a67[ofs + i2] = v2;
    return 0;
  };
  s2[8] = (a1, o1, a210, o2, len) => {
    for (let i2 = 0; i2 < len; i2++)
      a210[o2 + i2] = a1[o1 + i2];
    return 0;
  };
  s2[9] = (a67) => {
    let l2 = 0;
    for (let i2 = a67.length - 1; i2 >= 0; i2--)
      l2 = { $tag: 0, "0": a67[i2], "1": l2 };
    return l2;
  };
  s2[10] = (l2) => {
    const a67 = [];
    while (l2 !== 0) {
      a67.push(l2["0"]);
      l2 = l2["1"];
    }
    return a67;
  };
  s2[13] = (f2, a67) => {
    a67.forEach((x2) => ap2(f2, [x2]));
    return 0;
  };
  s2[14] = (f2, a67) => {
    a67.forEach((x2, i2) => ap2(f2, [i2, x2]));
    return 0;
  };
  s2[15] = (f2, a67) => a67.map((x2) => ap2(f2, [x2]));
  s2[17] = (f2, a67) => a67.map((x2, i2) => ap2(f2, [i2, x2]));
  s2[19] = (f2, init3, a67) => {
    let acc = init3;
    for (let i2 = 0; i2 < a67.length; i2++)
      acc = ap2(f2, [acc, a67[i2]]);
    return acc;
  };
  s2[21] = (f2, a67, init3) => {
    let acc = init3;
    for (let i2 = a67.length - 1; i2 >= 0; i2--)
      acc = ap2(f2, [a67[i2], acc]);
    return acc;
  };
  s2[24] = (f2, a67) => a67.every((x2) => ap2(f2, [x2])) ? 1 : 0;
  s2[25] = (f2, a67) => a67.some((x2) => ap2(f2, [x2])) ? 1 : 0;
  s2[28] = (x2, a67) => a67.some((v2) => v2 === x2) ? 1 : 0;
  s2[29] = (x2, a67) => a67.some((v2) => v2 === x2) ? 1 : 0;
  s2[30] = (f2, a67) => {
    const i2 = a67.findIndex((x2) => ap2(f2, [x2]));
    return i2 < 0 ? 0 : { $tag: 0, "0": a67[i2] };
  };
  s2[35] = (a67, b2) => a67.map((x2, i2) => ({ $tag: 0, "0": x2, "1": b2[i2] }));
  s2[36] = (cmp, a67) => {
    a67.sort((x2, y2) => ap2(cmp, [x2, y2]));
    return 0;
  };
  s2[37] = (cmp, a67) => {
    a67.sort((x2, y2) => ap2(cmp, [x2, y2]));
    return 0;
  };
  s2[38] = (cmp, a67) => {
    a67.sort((x2, y2) => ap2(cmp, [x2, y2]));
    return 0;
  };
  s2[47] = 5;
  var Stdlib_Array_default = s2;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.Sitelets/WebSharper.Sitelets.Router`1.js
  function New6(e2, f2) {
    return { Parse: e2, Write: f2 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Collections.BalancedTree.Tree`1.js
  function New7(a67, b2, c2, d2, e2) {
    return { Node: a67, Left: b2, Right: c2, Height: d2, Count: e2 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Collections.BalancedTree.js
  function TryFind(m2, n2) {
    const o2 = Lookup(m2, n2)[0];
    return o2 == null ? null : Some(o2.Node);
  }
  function Contains2(m2, n2) {
    return !(Lookup(m2, n2)[0] == null);
  }
  function Change(m2, n2, o2) {
    const p2 = Lookup(m2, o2);
    const q2 = p2[0];
    const r2 = p2[1];
    if (q2 == null) {
      const s6 = n2(null);
      return s6 == null ? o2 : Rebuild(r2, Branch(s6.$0, null, null));
    } else {
      const t2 = n2(Some(q2.Node));
      if (t2 == null) {
        if (q2.Right == null)
          return Rebuild(r2, q2.Left);
        else if (q2.Left == null)
          return Rebuild(r2, q2.Right);
        else {
          const u2 = ofSeq(append2(Enumerate(false, q2.Left), Enumerate(false, q2.Right)));
          let v2 = Build(u2, 0, u2.length - 1);
          return Rebuild(r2, v2);
        }
      } else
        return Rebuild(r2, Branch(t2.$0, q2.Left, q2.Right));
    }
  }
  function Add(m2, n2) {
    return Put((o2, p2) => p2, m2, n2);
  }
  function Remove(m2, n2) {
    const o2 = Lookup(m2, n2);
    const p2 = o2[0];
    const q2 = o2[1];
    if (p2 == null)
      return n2;
    else if (p2.Right == null)
      return Rebuild(q2, p2.Left);
    else if (p2.Left == null)
      return Rebuild(q2, p2.Right);
    else {
      const r2 = ofSeq(append2(Enumerate(false, p2.Left), Enumerate(false, p2.Right)));
      let s6 = Build(r2, 0, r2.length - 1);
      return Rebuild(q2, s6);
    }
  }
  function Put(m2, n2, o2) {
    const p2 = Lookup(n2, o2);
    const q2 = p2[0];
    return q2 == null ? Rebuild(p2[1], Branch(n2, null, null)) : Rebuild(p2[1], Branch(m2(q2.Node, n2), q2.Left, q2.Right));
  }
  function Rebuild(m2, n2) {
    let o2;
    const p2 = (x2) => x2 == null ? 0 : x2.Height;
    o2 = n2;
    for (let x2 = 0, y2 = length(m2) - 1; x2 <= y2; x2++) {
      const q2 = get(m2, x2);
      if (q2[0]) {
        const r2 = q2[1];
        const s6 = q2[2];
        if (p2(o2) > p2(s6) + 1) {
          if (p2(o2.Left) === p2(o2.Right) + 1) {
            const t2 = o2.Left;
            o2 = Branch(t2.Node, Branch(r2, s6, t2.Left), Branch(o2.Node, t2.Right, o2.Right));
          } else
            o2 = Branch(o2.Node, Branch(r2, s6, o2.Left), o2.Right);
        } else
          o2 = Branch(r2, s6, o2);
      } else {
        const u2 = q2[1];
        const v2 = q2[2];
        if (p2(o2) > p2(v2) + 1) {
          if (p2(o2.Right) === p2(o2.Left) + 1) {
            const w2 = o2.Right;
            o2 = Branch(w2.Node, Branch(o2.Node, o2.Left, w2.Left), Branch(u2, w2.Right, v2));
          } else
            o2 = Branch(o2.Node, o2.Left, Branch(u2, o2.Right, v2));
        } else
          o2 = Branch(u2, o2, v2);
      }
    }
    return o2;
  }
  function Lookup(m2, n2) {
    let o2, p2, q2;
    o2 = [];
    p2 = n2;
    q2 = true;
    while (q2)
      if (p2 == null)
        q2 = false;
      else {
        const r2 = Compare(m2, p2.Node);
        if (r2 === 0)
          q2 = false;
        else
          r2 === 1 ? (o2.unshift([true, p2.Node, p2.Left]), p2 = p2.Right) : (o2.unshift([false, p2.Node, p2.Right]), p2 = p2.Left);
      }
    return [p2, o2];
  }
  function OfSeq(m2) {
    const n2 = ofSeq(distinct(m2));
    sortInPlace(n2);
    return Build(n2, 0, n2.length - 1);
  }
  function Build(m2, n2, o2) {
    if (o2 - n2 + 1 <= 0)
      return null;
    else {
      const p2 = (n2 + o2) / 2 >> 0;
      return Branch(get(m2, p2), Build(m2, n2, p2 - 1), Build(m2, p2 + 1, o2));
    }
  }
  function Enumerate(m2, n2) {
    function o2(p2, q2) {
      let r2;
      while (true) {
        if (p2 == null) {
          if (q2.$ == 1) {
            const s6 = q2.$0[0];
            const t2 = q2.$1;
            return Some([s6, [q2.$0[1], t2]]);
          } else
            return null;
        } else if (m2) {
          r2 = p2;
          p2 = r2.Right;
          q2 = a9.Cons([r2.Node, r2.Left], q2);
        } else {
          r2 = p2;
          p2 = r2.Left;
          q2 = a9.Cons([r2.Node, r2.Right], q2);
        }
      }
    }
    return unfold((p2) => o2(p2[0], p2[1]), [n2, a9.Empty]);
  }
  function Branch(m2, n2, o2) {
    const p2 = n2 == null ? 0 : n2.Height;
    const q2 = o2 == null ? 0 : o2.Height;
    let r2 = Compare(p2, q2) === 1 ? p2 : q2;
    let s6 = 1 + r2;
    return New7(m2, n2, o2, s6, 1 + (n2 == null ? 0 : n2.Count) + (o2 == null ? 0 : o2.Count));
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Collections.Pair`2.js
  var a61 = class _a {
    Key;
    Value;
    Equals(f2) {
      return Equals(this.Key, f2.Key);
    }
    GetHashCode() {
      return Hash(this.Key);
    }
    CompareTo0(f2) {
      return Compare(this.Key, f2.Key);
    }
    static New(f2, g2) {
      return Create2(_a, { Key: f2, Value: g2 });
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Collections.MapUtil.js
  function fromSeq(h2) {
    const i2 = ofSeq(map((j2) => a61.New(j2[0], j2[1]), distinctBy((j2) => j2[0], rev(h2))));
    sortInPlace(i2);
    return Build(i2, 0, i2.length - 1);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2.js
  var a62 = class _a extends a {
    tree;
    GetEnumerator() {
      return Get(map((x2) => ({ K: x2.Key, V: x2.Value }), Enumerate(false, this.tree)));
    }
    get Count() {
      const x2 = this.tree;
      return x2 == null ? 0 : x2.Count;
    }
    Equals(x2) {
      return this.Count === x2.Count && forall22(Equals, this, x2);
    }
    GetHashCode() {
      return Hash(ofSeq(this));
    }
    get Values() {
      return MarkResizable(ofSeq(map((x2) => x2.Value, Enumerate(false, this.Tree))));
    }
    get Keys() {
      return MarkResizable(ofSeq(map((x2) => x2.Key, Enumerate(false, this.Tree))));
    }
    TryFind(x2) {
      const y2 = TryFind(a61.New(x2, void 0), this.tree);
      return y2 == null ? null : Some(y2.$0.Value);
    }
    Remove_1(x2) {
      return new _a("New_1", Remove(a61.New(x2, void 0), this.tree));
    }
    get_Item(x2) {
      const y2 = this.TryFind(x2);
      if (y2 == null)
        throw new a6("New");
      else
        return y2.$0;
    }
    get IsEmpty() {
      return this.tree == null;
    }
    TryGetValue(x2, y2) {
      const z2 = this.TryFind(x2);
      return z2 != null && z2.$ == 1 && (y2.set(z2.$0), true);
    }
    ContainsKey(x2) {
      return Contains2(a61.New(x2, void 0), this.tree);
    }
    Change(x2, y2) {
      return new _a("New_1", Change(a61.New(x2, void 0), (z2) => {
        const A2 = y2(z2 == null ? null : Some(z2.$0.Value));
        return A2 == null ? null : Some(a61.New(x2, A2.$0));
      }, this.tree));
    }
    Add_1(x2, y2) {
      return new _a("New_1", Add(a61.New(x2, y2), this.tree));
    }
    get Tree() {
      return this.tree;
    }
    Remove(x2) {
      return FailWith("Map values cannot be mutated.");
    }
    CopyTo(x2, y2) {
      ArrayCopyTo(ofSeq(this), x2, y2);
    }
    Contains(x2) {
      let y2;
      y2 = void 0;
      return this.TryGetValue(x2.K, { get: () => y2, set: (z2) => {
        y2 = z2;
      } }) && Equals(y2, x2.V);
    }
    Clear() {
      FailWith("Map values cannot be mutated.");
    }
    Add(x2) {
      FailWith("Map values cannot be mutated.");
    }
    get IsReadOnly() {
      return true;
    }
    CompareTo0(x2) {
      return compareWith((y2, z2) => Compare(y2, z2), this, x2);
    }
    constructor(x2, y2) {
      let z2;
      if (x2 == "New") {
        z2 = y2;
        x2 = "New_1";
        y2 = fromSeq(z2);
      }
      if (x2 == "New_1") {
        const A2 = y2;
        super();
        this.tree = A2;
      }
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Collections.MapModule.js
  function ToSeq(s6) {
    return map((t2) => [t2.Key, t2.Value], Enumerate(false, s6.Tree));
  }
  function OfArray(s6) {
    return new a62("New_1", OfSeq(map((t2) => a61.New(t2[0], t2[1]), s6)));
  }
  function FoldBack(s6, t2, u2) {
    return fold((v2, w2) => s6(w2.Key, w2.Value, v2), u2, Enumerate(true, t2.Tree));
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.Sitelets/WebSharper.Sitelets.PathUtil.js
  function WriteLink(h2, i2) {
    const j2 = i2.IsEmpty ? "" : "?" + WriteQuery(i2);
    return "/" + Concat3(h2) + j2;
  }
  function WriteQuery(h2) {
    return concat4("&", map((i2) => i2[0] + "=" + i2[1], ToSeq(h2)));
  }
  function Concat3(h2) {
    let i2;
    const j2 = [];
    i2 = true;
    iter2((k2) => {
      if (!IsNullOrEmpty(k2)) {
        i2 ? i2 = false : j2.push("/");
        j2.push(k2);
      }
    }, h2);
    return Join3("", ofSeq(j2));
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/WebSharper.Utils.js
  function toSafe(m2) {
    return m2 == null ? "" : m2;
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.Sitelets/WebSharper.Sitelets.Route.js
  var a63 = class _a {
    Segments;
    QueryArgs;
    FormData;
    Method;
    Body;
    static FromHash(w2, x2) {
      const y2 = w2.indexOf("#");
      if (y2 === -1)
        return _a.Empty;
      else {
        const z2 = w2.substring(y2 + 1);
        return x2 != null && x2.$0 ? z2 == "" || z2 == "/" ? _a.Empty : StartsWith(z2, "/") ? _a.FromUrl(z2.substring(1), Some(true)) : _a.Segment_2(z2) : _a.FromUrl(w2.substring(y2), Some(false));
      }
    }
    static FromUrl(w2, x2) {
      const y2 = w2.indexOf("?");
      const z2 = y2 === -1 ? [w2, new a62("New", [])] : [Substring(w2, 0, y2), _a.ParseQuery(w2.substring(y2 + 1))];
      const A2 = x2 != null && x2.$0 ? 0 : 1;
      const B3 = _a.Empty;
      return _a.New(ofArray(SplitChars(z2[0], ["/"], A2)), z2[1], B3.FormData, B3.Method, B3.Body);
    }
    static WriteQuery(w2) {
      return WriteQuery(w2);
    }
    static ParseQuery(w2) {
      return OfArray(ofSeq(choose((x2) => {
        const y2 = SplitChars(x2, ["="], 0);
        return !Equals(y2, null) && y2.length === 2 ? Some([get(y2, 0), get(y2, 1)]) : ((/* @__PURE__ */ ((z2) => (A2) => z2("wrong format for query argument: " + toSafe(A2)))((z2) => {
          console.log(z2);
        }))(x2), null);
      }, SplitChars(w2, ["&"], 0))));
    }
    static Combine(w2) {
      let x2, y2, z2, A2;
      const B3 = ofSeq(w2);
      const C2 = length(B3);
      if (C2 === 0)
        return _a.Empty;
      else if (C2 === 1)
        return get(B3, 0);
      else {
        x2 = null;
        y2 = null;
        const D2 = [];
        z2 = new a62("New", []);
        A2 = new a62("New", []);
        iter((E2) => {
          const F2 = E2.Method;
          if (F2 != null && F2.$ == 1)
            x2 = F2;
          const G2 = E2.Body;
          if (G2 == null) {
          } else
            y2 = G2;
          z2 = FoldBack((H2, I2, J2) => J2.Add_1(H2, I2), z2, E2.QueryArgs);
          A2 = FoldBack((H2, I2, J2) => J2.Add_1(H2, I2), A2, E2.FormData);
          iter2((H2) => {
            D2.push(H2);
          }, E2.Segments);
        }, B3);
        return _a.New(ofSeq2(D2), z2, A2, x2, y2);
      }
    }
    static Segment(w2, x2) {
      const y2 = _a.Empty;
      return _a.New(w2, y2.QueryArgs, y2.FormData, x2, y2.Body);
    }
    static Segment_1(w2) {
      const x2 = _a.Empty;
      return _a.New(w2, x2.QueryArgs, x2.FormData, x2.Method, x2.Body);
    }
    static Segment_2(w2) {
      const x2 = _a.Empty;
      return _a.New(ofArray([w2]), x2.QueryArgs, x2.FormData, x2.Method, x2.Body);
    }
    static get Empty() {
      return _a.New(a9.Empty, new a62("New", []), new a62("New", []), null, Some(null));
    }
    ToLink() {
      return WriteLink(this.Segments, this.QueryArgs);
    }
    static New(w2, x2, y2, z2, A2) {
      return Create2(_a, { Segments: w2, QueryArgs: x2, FormData: y2, Method: z2, Body: A2 });
    }
  };

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.Sitelets/WebSharper.Sitelets.List.js
  function startsWith(c2, d2) {
    let e2;
    switch (c2.$ == 1 ? d2.$ == 1 ? (c2.$1, d2.$1, Equals(c2.$0, d2.$0) ? (e2 = [d2.$0, d2.$1, c2.$0, c2.$1], 1) : 2) : 2 : 0) {
      case 0:
        return Some(d2);
      case 1:
        return startsWith(e2[3], e2[1]);
      case 2:
        return null;
    }
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.Sitelets/WebSharper.Sitelets.Router.js
  function FromString(g2) {
    const h2 = SplitChars(g2, ["/"], 1);
    if (h2.length == 0)
      return New8((j2) => [j2], []);
    else {
      const i2 = ofArray(h2);
      return New8((j2) => {
        const k2 = startsWith(i2, j2.Segments);
        return k2 != null && k2.$ == 1 ? [a63.New(k2.$0, j2.QueryArgs, j2.FormData, j2.Method, j2.Body)] : [];
      }, [a63.Segment_1(i2)]);
    }
  }
  function New8(g2, h2) {
    return { Parse: g2, Segment: h2 };
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.Sitelets/WebSharper.Sitelets.StringEncoding.js
  function read(h2) {
    const i2 = MarkResizable([]);
    function j2(k2) {
      while (true) {
        const l2 = readEscapedFromChars(k2);
        if (l2[0] === -2)
          return null;
        else if (l2[0] === -1)
          return Some((/* @__PURE__ */ ((m2) => (n2) => concat4(m2, n2))(""))(i2));
        else {
          i2.push(String.fromCharCode(l2[0]));
          k2 = l2[1];
        }
      }
    }
    return j2(ofSeq2(map((k2) => k2.charCodeAt(), h2)));
  }
  function readEscapedFromChars(h2) {
    let i2, j2;
    i2 = h2;
    const k2 = () => {
      if (i2.$ == 1) {
        const t2 = i2.$1;
        const u2 = i2.$0;
        i2 = t2;
        return u2;
      } else
        return -1;
    };
    const l2 = (t2) => t2 >= "0".charCodeAt() && t2 <= "9".charCodeAt() ? t2 - "0".charCodeAt() : t2 >= "a".charCodeAt() && t2 <= "f".charCodeAt() ? t2 - "a".charCodeAt() + 10 : t2 >= "A".charCodeAt() && t2 <= "F".charCodeAt() ? t2 - "A".charCodeAt() + 10 : -2;
    const m2 = k2();
    if (m2 === "~".charCodeAt()) {
      const n2 = k2();
      if (n2 === "u".charCodeAt()) {
        const o2 = k2();
        const p2 = k2();
        const q2 = k2();
        const r2 = k2();
        j2 = o2 >= 0 && p2 >= 0 && q2 >= 0 && r2 >= 0 ? op_PlusPlus(op_PlusPlus(op_PlusPlus(l2(o2), l2(p2)), l2(q2)), l2(r2)) : -2;
      } else {
        const s6 = k2();
        j2 = n2 >= 0 && s6 >= 0 ? op_PlusPlus(l2(n2), l2(s6)) : -2;
      }
    } else
      j2 = m2;
    return [j2, i2];
  }
  function op_PlusPlus(h2, i2) {
    return (h2 << 4) + i2;
  }
  function write(h2) {
    return concat4("", mapi2((i2, j2) => writeEscapedAsString(i2 + 1 === h2.length, j2), h2));
  }
  function writeEscapedAsString(h2, i2) {
    const j2 = i2.charCodeAt();
    return isUnreserved(h2, i2) ? i2 : j2 < 256 ? "~" + PadLeftWith(j2.toString(16), 2, "0") : "~u" + PadLeftWith(j2.toString(16), 4, "0");
  }
  function isUnreserved(h2, i2) {
    return i2 === "-" || (i2 === "." ? !h2 : i2 === "_" || (i2 >= "A" && i2 <= "Z" || (i2 >= "a" && i2 <= "z" || i2 >= "0" && i2 <= "9")));
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Guid.js
  function TryParse4(e2, f2) {
    try {
      f2.set(Parse3(e2));
      return true;
    } catch (g2) {
      return false;
    }
  }
  function ParseExact(e2, f2) {
    const g2 = (p2) => {
      for (let r2 = 0, s6 = 35; r2 <= s6; r2++) {
        if (r2 === 8 || (r2 === 13 || (r2 === 18 || r2 === 23))) {
          if (p2[r2] !== "-")
            ShapeError();
        } else {
          const q2 = p2[r2];
          if (!("0" <= q2 && q2 <= "9" || "a" <= q2 && q2 <= "f"))
            ShapeError();
        }
      }
      return p2;
    };
    const h2 = f2.toUpperCase();
    if (h2 == "N") {
      const i2 = Trim(e2).toLowerCase();
      if (i2.length !== 32)
        ShapeError();
      else
        null;
      for (let p2 = 0, q2 = 31; p2 <= q2; p2++) {
        const j2 = i2[p2];
        if (!("0" <= j2 && j2 <= "9" || "a" <= j2 && j2 <= "f"))
          ShapeError();
      }
      return Substring(i2, 0, 8) + "-" + Substring(i2, 8, 4) + "-" + Substring(i2, 12, 4) + "-" + Substring(i2, 16, 4) + "-" + i2.substring(20);
    } else if (h2 == "D") {
      const k2 = Trim(e2).toLowerCase();
      if (k2.length !== 36)
        ShapeError();
      return g2(k2);
    } else if (h2 == "B") {
      const l2 = Trim(e2).toLowerCase();
      if (l2.length !== 38 || l2[0] !== "{" || l2[17] !== "}")
        ShapeError();
      return g2(Substring(l2, 1, 36));
    } else if (h2 == "P") {
      const m2 = Trim(e2).toLowerCase();
      if (m2.length !== 38 || m2[0] !== "(" || m2[17] !== ")")
        ShapeError();
      return g2(Substring(m2, 1, 36));
    } else if (h2 == "X") {
      const n2 = Trim(e2).toLowerCase();
      if (n2.length !== 68)
        ShapeError();
      else
        null;
      for (let r2 = 0, s6 = 67; r2 <= s6; r2++) {
        switch (r2) {
          case 26:
          case 0:
            if (n2[r2] !== "{")
              ShapeError();
            break;
          case 62:
          case 57:
          case 52:
          case 47:
          case 42:
          case 37:
          case 32:
          case 27:
          case 19:
          case 12:
          case 1:
            if (n2[r2] !== "0")
              ShapeError();
            break;
          case 63:
          case 58:
          case 53:
          case 48:
          case 43:
          case 38:
          case 33:
          case 28:
          case 20:
          case 13:
          case 2:
            if (n2[r2] !== "x")
              ShapeError();
            break;
          case 61:
          case 56:
          case 51:
          case 46:
          case 41:
          case 36:
          case 31:
          case 25:
          case 18:
          case 11:
            if (n2[r2] !== ",")
              ShapeError();
            break;
          case 67:
          case 66:
            if (n2[r2] !== "{")
              ShapeError();
            break;
          default:
            const o2 = n2[r2];
            if (!("0" <= o2 && o2 <= "9" || "a" <= o2 && o2 <= "f"))
              ShapeError();
            break;
        }
      }
      return Substring(n2, 3, 8) + "-" + Substring(n2, 14, 4) + "-" + Substring(n2, 21, 4) + "-" + Substring(n2, 29, 2) + Substring(n2, 34, 2) + "-" + Substring(n2, 39, 2) + Substring(n2, 44, 2) + Substring(n2, 49, 2) + Substring(n2, 54, 2) + Substring(n2, 59, 2) + Substring(n2, 64, 2);
    } else
      return FormatError();
  }
  function Parse3(e2) {
    try {
      return ParseExact(e2, "D");
    } catch (f2) {
      try {
        return ParseExact(e2, "B");
      } catch (g2) {
        try {
          return ParseExact(e2, "P");
        } catch (h2) {
          try {
            return ParseExact(e2, "N");
          } catch (i2) {
            return ParseExact(e2, "X");
          }
        }
      }
    }
  }
  function ShapeError() {
    throw new a35("New_1", "Guid should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");
  }
  function FormatError() {
    throw new a35("New_1", 'Format String can be only "D", "d", "N", "n", "P", "p", "B", "b", "X" or "x".');
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.SByte.js
  function TryParse5(c2, d2) {
    return TryParse2(c2, -128, 127, d2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Byte.js
  function TryParse6(c2, d2) {
    return TryParse2(c2, 0, 255, d2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Int16.js
  function TryParse7(c2, d2) {
    return TryParse2(c2, -32768, 32767, d2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.UInt16.js
  function TryParse8(c2, d2) {
    return TryParse2(c2, 0, 65535, d2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.UInt32.js
  function TryParse9(c2, d2) {
    return TryParse2(c2, 0, 4294967295, d2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.Int64.js
  function TryParse10(c2, d2) {
    return TryParseBigInt(c2, -9223372036854775808n, 9223372036854775807n, d2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/System.UInt64.js
  function TryParse11(c2, d2) {
    return TryParseBigInt(c2, 0n, 18446744073709551615n, d2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.Sitelets/$StartupCode_Router.js
  var a64 = Lazy((x2) => class y {
    static {
      a64 = x2(this);
    }
    static rDateTime;
    static rWildcard;
    static rBool;
    static rSingle;
    static rUInt64;
    static rInt64;
    static rUInt;
    static rUInt16;
    static rInt16;
    static rByte;
    static rSByte;
    static rDouble;
    static rInt;
    static rGuid;
    static rChar;
    static rString;
    static rRoot;
    static Empty;
    static {
      this.Empty = New6(() => [], () => null);
      this.rRoot = New8((A2) => [A2], []);
      this.rString = New6((A2) => {
        const B3 = A2.Segments;
        if (B3.$ == 0)
          return [[A2, ""]];
        else {
          const C2 = B3.$1;
          const D2 = read(B3.$0);
          return D2 != null && D2.$ == 1 ? [[a63.New(C2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), D2.$0]] : [];
        }
      }, (A2) => Some([a63.Segment_2(A2 == null ? "null" : write(A2))]));
      this.rChar = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          const E2 = read(C2.$0);
          return E2 != null && E2.$ == 1 && (E2.$0.length === 1 && (B3 = E2.$0, true)) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), Parse(B3)]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(A2)]));
      this.rGuid = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          B3 = null;
          return TryParse4(C2.$0, { get: () => B3, set: (E2) => {
            B3 = E2;
          } }) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), B3]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(String(A2))]));
      this.rInt = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          B3 = 0;
          return TryParse3(C2.$0, { get: () => B3, set: (E2) => {
            B3 = E2;
          } }) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), B3]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(String(A2))]));
      this.rDouble = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          B3 = 0;
          const E2 = Number(C2.$0);
          return (isNaN(E2) ? false : (B3 = E2, true)) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), B3]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(String(A2))]));
      this.rSByte = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          B3 = 0;
          return TryParse5(C2.$0, { get: () => B3, set: (E2) => {
            B3 = E2;
          } }) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), B3]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(String(A2))]));
      this.rByte = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          B3 = 0;
          return TryParse6(C2.$0, { get: () => B3, set: (E2) => {
            B3 = E2;
          } }) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), B3]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(String(A2))]));
      this.rInt16 = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          B3 = 0;
          return TryParse7(C2.$0, { get: () => B3, set: (E2) => {
            B3 = E2;
          } }) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), B3]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(String(A2))]));
      this.rUInt16 = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          B3 = 0;
          return TryParse8(C2.$0, { get: () => B3, set: (E2) => {
            B3 = E2;
          } }) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), B3]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(String(A2))]));
      this.rUInt = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          B3 = 0;
          return TryParse9(C2.$0, { get: () => B3, set: (E2) => {
            B3 = E2;
          } }) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), B3]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(String(A2))]));
      this.rInt64 = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          B3 = 0n;
          return TryParse10(C2.$0, { get: () => B3, set: (E2) => {
            B3 = E2;
          } }) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), B3]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(String(A2))]));
      this.rUInt64 = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          B3 = 0n;
          return TryParse11(C2.$0, { get: () => B3, set: (E2) => {
            B3 = E2;
          } }) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), B3]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(String(A2))]));
      this.rSingle = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          B3 = 0;
          const E2 = Number(C2.$0);
          return (isNaN(E2) ? false : (B3 = E2, true)) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), B3]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(String(A2))]));
      this.rBool = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          const E2 = (B3 = null, [TryParseBool(C2.$0, { get: () => B3, set: (F2) => {
            B3 = F2;
          } }), B3]);
          return E2[0] ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), E2[1]]] : [];
        } else
          return [];
      }, (A2) => Some([a63.Segment_2(A2 ? "True" : "False")]));
      this.rWildcard = New6((A2) => [[a63.New(a9.Empty, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), concat4("/", A2.Segments)]], (A2) => Some([a63.Segment_2(A2)]));
      const z2 = (A2) => {
        let B3;
        const C2 = (B3 = 0, [TryParse3(A2, { get: () => B3, set: (D2) => {
          B3 = D2;
        } }), B3]);
        return C2[0] ? Some(C2[1]) : null;
      };
      this.rDateTime = New6((A2) => {
        let B3;
        const C2 = A2.Segments;
        if (C2.$ == 1) {
          const D2 = C2.$1;
          const E2 = C2.$0;
          if (E2.length === 19 && E2[4] === "-" && E2[7] === "-" && E2[10] === "-" && E2[13] === "." && E2[16] === ".") {
            const F2 = z2(string(E2, Some(0), Some(3)));
            const G2 = z2(string(E2, Some(5), Some(6)));
            const H2 = z2(string(E2, Some(8), Some(9)));
            const I2 = z2(string(E2, Some(11), Some(12)));
            const J2 = z2(string(E2, Some(14), Some(15)));
            const K2 = z2(string(E2, Some(17), Some(18)));
            return F2 != null && F2.$ == 1 && (G2 != null && G2.$ == 1 && (H2 != null && H2.$ == 1 && (I2 != null && I2.$ == 1 && (J2 != null && J2.$ == 1 && (K2 != null && K2.$ == 1 && (B3 = [H2.$0, I2.$0, G2.$0, J2.$0, K2.$0, F2.$0], true)))))) ? [[a63.New(D2, A2.QueryArgs, A2.FormData, A2.Method, A2.Body), Create3(B3[5], B3[2], B3[0], B3[1], B3[3], B3[4], 0)]] : [];
          } else
            return [];
        } else
          return [];
      }, (A2) => {
        const B3 = (O2) => {
          const P2 = String(O2);
          return P2.length === 1 ? "0" + P2 : P2;
        };
        const C2 = String(new Date(A2).getFullYear());
        const D2 = C2.length;
        let E2 = (D2 === 1 ? "000" + C2 : D2 === 2 ? "00" + C2 : D2 === 3 ? "0" + C2 : C2) + "-" + B3(new Date(A2).getMonth() + 1);
        let F2 = E2 + "-";
        let G2 = F2 + B3(new Date(A2).getDate());
        let H2 = G2 + "-";
        let I2 = H2 + B3(new Date(A2).getHours());
        let J2 = I2 + ".";
        let K2 = J2 + B3(new Date(A2).getMinutes());
        let L2 = K2 + ".";
        let M2 = L2 + B3(new Date(A2).getSeconds());
        let N2 = [a63.Segment_2(M2)];
        return Some(N2);
      });
    }
  });

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.Sitelets/WebSharper.Sitelets.RouterModule.js
  function Table(H2) {
    return Sum(map((I2) => MapTo(I2[0], FromString(I2[1])), H2));
  }
  function Sum(H2) {
    const I2 = ofSeq(H2);
    return New6((J2) => collect((K2) => K2.Parse(J2), I2), (J2) => tryPick2((K2) => K2.Write(J2), I2));
  }
  function MapTo(H2, I2) {
    return New6((J2) => map((K2) => [K2, H2], I2.Parse(J2)), (J2) => Equals(J2, H2) ? Some(I2.Segment) : null);
  }
  function HashLink(H2, I2) {
    return "#" + Link(H2, I2);
  }
  function Link(H2, I2) {
    const J2 = Write(H2, I2);
    return J2 == null ? "" : J2.$0.ToLink();
  }
  function Write(H2, I2) {
    const J2 = H2.Write(I2);
    return J2 == null ? null : Some(a63.Combine(J2.$0));
  }
  function Parse4(H2, I2) {
    return tryPick2((J2) => J2[0].Segments.$ == 0 ? Some(J2[1]) : null, H2.Parse(I2));
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.StdLib/Microsoft.FSharp.Core.OptionModule.js
  function ofObj(e2) {
    return e2 == null ? null : Some(e2);
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/WebSharper.UI/WebSharper.UI.Router.js
  function InstallHash(m2, n2) {
    const o2 = WebSharper_UI_Var_default.Create_1(void 0);
    InstallHashInto(o2, m2, n2);
    return o2;
  }
  function InstallHashInto(m2, n2, o2) {
    const p2 = (s6) => Parse4(o2, a63.FromHash(s6, Some(true)));
    const q2 = () => getCurrentHash(p2, n2);
    const r2 = (s6) => {
      if (!Equals(m2.Get(), s6))
        m2.Set(s6);
    };
    r2(q2());
    globalThis.addEventListener("popstate", () => r2(q2()), false);
    globalThis.addEventListener("hashchange", () => r2(q2()), false);
    globalThis.document.body.addEventListener("click", (s6) => {
      let t2;
      const u2 = findLinkHref(s6.target);
      if (u2 == null)
        t2 = null;
      else {
        const v2 = u2.$0;
        t2 = StartsWith(v2, "#") ? p2(v2) : null;
      }
      return t2 == null ? null : (r2(t2.$0), s6.preventDefault());
    }, false);
    Sink((s6) => {
      if (!Equals(s6, q2())) {
        const t2 = HashLink(o2, s6);
        globalThis.history.pushState(null, null, t2);
      }
    }, m2.View);
  }
  function getCurrentHash(m2, n2) {
    const o2 = globalThis.location.hash;
    const p2 = m2(o2);
    return p2 == null ? ((/* @__PURE__ */ ((q2) => (r2) => q2("Failed to parse route: " + toSafe(r2)))((q2) => {
      console.log(q2);
    }))(o2), n2) : p2.$0;
  }
  function findLinkHref(m2) {
    while (true) {
      if (m2.tagName == "A")
        return ofObj(m2.getAttribute("href"));
      else if (m2 === globalThis.document.body)
        return null;
      else
        m2 = m2.parentNode;
    }
  }

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/Stdlib__String.js
  function ap3(f2, args) {
    return globalThis.OCamlRuntime ? globalThis.OCamlRuntime.caml_apply(f2, args) : f2.apply(null, args);
  }
  var s3 = { $tag: 0 };
  s3[0] = function() {
    throw new Error("String field 0 not implemented");
  };
  s3[1] = function() {
    throw new Error("String field 1 not implemented");
  };
  s3[2] = function() {
    throw new Error("String field 2 not implemented");
  };
  s3[3] = function() {
    throw new Error("String field 3 not implemented");
  };
  s3[4] = function() {
    throw new Error("String field 4 not implemented");
  };
  s3[5] = function() {
    throw new Error("String field 5 not implemented");
  };
  s3[6] = function() {
    throw new Error("String field 6 not implemented");
  };
  s3[7] = function() {
    throw new Error("String field 7 not implemented");
  };
  s3[8] = function() {
    throw new Error("String field 8 not implemented");
  };
  s3[9] = function() {
    throw new Error("String field 9 not implemented");
  };
  s3[10] = function() {
    throw new Error("String field 10 not implemented");
  };
  s3[11] = function() {
    throw new Error("String field 11 not implemented");
  };
  s3[12] = function() {
    throw new Error("String field 12 not implemented");
  };
  s3[13] = function() {
    throw new Error("String field 13 not implemented");
  };
  s3[14] = function() {
    throw new Error("String field 14 not implemented");
  };
  s3[15] = function() {
    throw new Error("String field 15 not implemented");
  };
  s3[16] = function() {
    throw new Error("String field 16 not implemented");
  };
  s3[17] = function() {
    throw new Error("String field 17 not implemented");
  };
  s3[18] = function() {
    throw new Error("String field 18 not implemented");
  };
  s3[19] = function() {
    throw new Error("String field 19 not implemented");
  };
  s3[20] = function() {
    throw new Error("String field 20 not implemented");
  };
  s3[21] = function() {
    throw new Error("String field 21 not implemented");
  };
  s3[22] = function() {
    throw new Error("String field 22 not implemented");
  };
  s3[23] = function() {
    throw new Error("String field 23 not implemented");
  };
  s3[24] = function() {
    throw new Error("String field 24 not implemented");
  };
  s3[25] = function() {
    throw new Error("String field 25 not implemented");
  };
  s3[26] = function() {
    throw new Error("String field 26 not implemented");
  };
  s3[27] = function() {
    throw new Error("String field 27 not implemented");
  };
  s3[28] = function() {
    throw new Error("String field 28 not implemented");
  };
  s3[29] = function() {
    throw new Error("String field 29 not implemented");
  };
  s3[30] = function() {
    throw new Error("String field 30 not implemented");
  };
  s3[31] = function() {
    throw new Error("String field 31 not implemented");
  };
  s3[32] = function() {
    throw new Error("String field 32 not implemented");
  };
  s3[33] = function() {
    throw new Error("String field 33 not implemented");
  };
  s3[34] = function() {
    throw new Error("String field 34 not implemented");
  };
  s3[35] = function() {
    throw new Error("String field 35 not implemented");
  };
  s3[36] = function() {
    throw new Error("String field 36 not implemented");
  };
  s3[37] = function() {
    throw new Error("String field 37 not implemented");
  };
  s3[38] = function() {
    throw new Error("String field 38 not implemented");
  };
  s3[39] = function() {
    throw new Error("String field 39 not implemented");
  };
  s3[40] = function() {
    throw new Error("String field 40 not implemented");
  };
  s3[41] = function() {
    throw new Error("String field 41 not implemented");
  };
  s3[42] = function() {
    throw new Error("String field 42 not implemented");
  };
  s3[43] = function() {
    throw new Error("String field 43 not implemented");
  };
  s3[44] = function() {
    throw new Error("String field 44 not implemented");
  };
  s3[45] = function() {
    throw new Error("String field 45 not implemented");
  };
  s3[46] = function() {
    throw new Error("String field 46 not implemented");
  };
  s3[47] = function() {
    throw new Error("String field 47 not implemented");
  };
  s3[48] = function() {
    throw new Error("String field 48 not implemented");
  };
  s3[49] = function() {
    throw new Error("String field 49 not implemented");
  };
  s3[50] = function() {
    throw new Error("String field 50 not implemented");
  };
  s3[51] = function() {
    throw new Error("String field 51 not implemented");
  };
  s3[52] = function() {
    throw new Error("String field 52 not implemented");
  };
  s3[53] = function() {
    throw new Error("String field 53 not implemented");
  };
  s3[54] = function() {
    throw new Error("String field 54 not implemented");
  };
  s3[55] = function() {
    throw new Error("String field 55 not implemented");
  };
  s3[56] = function() {
    throw new Error("String field 56 not implemented");
  };
  s3[57] = function() {
    throw new Error("String field 57 not implemented");
  };
  s3[58] = function() {
    throw new Error("String field 58 not implemented");
  };
  s3[59] = function() {
    throw new Error("String field 59 not implemented");
  };
  s3[60] = function() {
    throw new Error("String field 60 not implemented");
  };
  s3[61] = function() {
    throw new Error("String field 61 not implemented");
  };
  s3[62] = function() {
    throw new Error("String field 62 not implemented");
  };
  s3[63] = function() {
    throw new Error("String field 63 not implemented");
  };
  s3[64] = function() {
    throw new Error("String field 64 not implemented");
  };
  s3[65] = function() {
    throw new Error("String field 65 not implemented");
  };
  s3[66] = function() {
    throw new Error("String field 66 not implemented");
  };
  s3[67] = function() {
    throw new Error("String field 67 not implemented");
  };
  s3[68] = function() {
    throw new Error("String field 68 not implemented");
  };
  s3[69] = function() {
    throw new Error("String field 69 not implemented");
  };
  s3[70] = function() {
    throw new Error("String field 70 not implemented");
  };
  s3[71] = function() {
    throw new Error("String field 71 not implemented");
  };
  s3[72] = function() {
    throw new Error("String field 72 not implemented");
  };
  s3[73] = function() {
    throw new Error("String field 73 not implemented");
  };
  s3[74] = function() {
    throw new Error("String field 74 not implemented");
  };
  s3[75] = function() {
    throw new Error("String field 75 not implemented");
  };
  s3[76] = function() {
    throw new Error("String field 76 not implemented");
  };
  s3[77] = function() {
    throw new Error("String field 77 not implemented");
  };
  s3[78] = function() {
    throw new Error("String field 78 not implemented");
  };
  s3[79] = function() {
    throw new Error("String field 79 not implemented");
  };
  s3[0] = (n2, c2) => String.fromCharCode(c2).repeat(n2);
  s3[1] = (n2, f2) => {
    let r2 = "";
    for (let i2 = 0; i2 < n2; i2++)
      r2 += String.fromCharCode(ap3(f2, [i2]));
    return r2;
  };
  s3[3] = (s6) => s6;
  s3[6] = (sep, list) => {
    const a67 = [];
    let l2 = list;
    while (l2 !== 0) {
      a67.push(l2["0"]);
      l2 = l2["1"];
    }
    return a67.join(sep);
  };
  s3[9] = (a67, b2) => a67 < b2 ? -1 : a67 > b2 ? 1 : 0;
  s3[10] = (prefix, s6) => s6.startsWith(prefix) ? 1 : 0;
  s3[11] = (suffix, s6) => s6.endsWith(suffix) ? 1 : 0;
  s3[14] = (s6, c2) => s6.indexOf(String.fromCharCode(c2)) >= 0 ? 1 : 0;
  s3[15] = (s6, ofs, len) => s6.substr(ofs, len);
  s3[16] = (sep, s6) => {
    const parts = s6.split(String.fromCharCode(sep));
    let l2 = 0;
    for (let i2 = parts.length - 1; i2 >= 0; i2--)
      l2 = { $tag: 0, "0": parts[i2], "1": l2 };
    return l2;
  };
  s3[17] = (f2, s6) => {
    let r2 = "";
    for (let i2 = 0; i2 < s6.length; i2++)
      r2 += String.fromCharCode(ap3(f2, [s6.charCodeAt(i2)]));
    return r2;
  };
  s3[18] = (f2, s6) => {
    let r2 = "";
    for (let i2 = 0; i2 < s6.length; i2++)
      r2 += String.fromCharCode(ap3(f2, [i2, s6.charCodeAt(i2)]));
    return r2;
  };
  s3[19] = (f2, acc, s6) => {
    for (let i2 = 0; i2 < s6.length; i2++)
      acc = ap3(f2, [acc, s6.charCodeAt(i2)]);
    return acc;
  };
  s3[20] = (f2, s6, acc) => {
    for (let i2 = s6.length - 1; i2 >= 0; i2--)
      acc = ap3(f2, [s6.charCodeAt(i2), acc]);
    return acc;
  };
  s3[21] = (f2, s6) => {
    for (let i2 = 0; i2 < s6.length; i2++)
      if (!ap3(f2, [s6.charCodeAt(i2)]))
        return 0;
    return 1;
  };
  s3[22] = (f2, s6) => {
    for (let i2 = 0; i2 < s6.length; i2++)
      if (ap3(f2, [s6.charCodeAt(i2)]))
        return 1;
    return 0;
  };
  s3[23] = (s6) => s6.trim();
  s3[25] = (s6) => s6.toUpperCase();
  s3[26] = (s6) => s6.toLowerCase();
  s3[27] = (s6) => s6.length ? s6[0].toUpperCase() + s6.slice(1) : s6;
  s3[28] = (s6) => s6.length ? s6[0].toLowerCase() + s6.slice(1) : s6;
  s3[29] = (f2, s6) => {
    for (let i2 = 0; i2 < s6.length; i2++)
      ap3(f2, [s6.charCodeAt(i2)]);
    return 0;
  };
  s3[30] = (f2, s6) => {
    for (let i2 = 0; i2 < s6.length; i2++)
      ap3(f2, [i2, s6.charCodeAt(i2)]);
    return 0;
  };
  s3[36] = (s6, c2) => {
    const i2 = s6.indexOf(String.fromCharCode(c2));
    return i2 < 0 ? 0 : { $tag: 0, "0": i2 };
  };
  var Stdlib_String_default = s3;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/Stdlib.js
  function out(s6) {
    if (typeof process !== "undefined" && process.stdout)
      process.stdout.write(String(s6));
    else if (typeof console !== "undefined")
      console.log(String(s6));
  }
  var s4 = { $tag: 0 };
  s4[0] = function() {
    throw new Error("Stdlib field 0 not implemented");
  };
  s4[1] = function() {
    throw new Error("Stdlib field 1 not implemented");
  };
  s4[2] = function() {
    throw new Error("Stdlib field 2 not implemented");
  };
  s4[3] = function() {
    throw new Error("Stdlib field 3 not implemented");
  };
  s4[4] = function() {
    throw new Error("Stdlib field 4 not implemented");
  };
  s4[5] = function() {
    throw new Error("Stdlib field 5 not implemented");
  };
  s4[6] = function() {
    throw new Error("Stdlib field 6 not implemented");
  };
  s4[7] = function() {
    throw new Error("Stdlib field 7 not implemented");
  };
  s4[8] = function() {
    throw new Error("Stdlib field 8 not implemented");
  };
  s4[9] = function() {
    throw new Error("Stdlib field 9 not implemented");
  };
  s4[10] = function() {
    throw new Error("Stdlib field 10 not implemented");
  };
  s4[11] = function() {
    throw new Error("Stdlib field 11 not implemented");
  };
  s4[12] = function() {
    throw new Error("Stdlib field 12 not implemented");
  };
  s4[13] = function() {
    throw new Error("Stdlib field 13 not implemented");
  };
  s4[14] = function() {
    throw new Error("Stdlib field 14 not implemented");
  };
  s4[15] = function() {
    throw new Error("Stdlib field 15 not implemented");
  };
  s4[16] = function() {
    throw new Error("Stdlib field 16 not implemented");
  };
  s4[17] = function() {
    throw new Error("Stdlib field 17 not implemented");
  };
  s4[18] = function() {
    throw new Error("Stdlib field 18 not implemented");
  };
  s4[19] = function() {
    throw new Error("Stdlib field 19 not implemented");
  };
  s4[20] = function() {
    throw new Error("Stdlib field 20 not implemented");
  };
  s4[21] = function() {
    throw new Error("Stdlib field 21 not implemented");
  };
  s4[22] = function() {
    throw new Error("Stdlib field 22 not implemented");
  };
  s4[23] = function() {
    throw new Error("Stdlib field 23 not implemented");
  };
  s4[24] = function() {
    throw new Error("Stdlib field 24 not implemented");
  };
  s4[25] = function() {
    throw new Error("Stdlib field 25 not implemented");
  };
  s4[26] = function() {
    throw new Error("Stdlib field 26 not implemented");
  };
  s4[27] = function() {
    throw new Error("Stdlib field 27 not implemented");
  };
  s4[28] = function() {
    throw new Error("Stdlib field 28 not implemented");
  };
  s4[29] = function() {
    throw new Error("Stdlib field 29 not implemented");
  };
  s4[30] = function() {
    throw new Error("Stdlib field 30 not implemented");
  };
  s4[31] = function() {
    throw new Error("Stdlib field 31 not implemented");
  };
  s4[32] = function() {
    throw new Error("Stdlib field 32 not implemented");
  };
  s4[33] = function() {
    throw new Error("Stdlib field 33 not implemented");
  };
  s4[34] = function() {
    throw new Error("Stdlib field 34 not implemented");
  };
  s4[35] = function() {
    throw new Error("Stdlib field 35 not implemented");
  };
  s4[36] = function() {
    throw new Error("Stdlib field 36 not implemented");
  };
  s4[37] = function() {
    throw new Error("Stdlib field 37 not implemented");
  };
  s4[38] = function() {
    throw new Error("Stdlib field 38 not implemented");
  };
  s4[39] = function() {
    throw new Error("Stdlib field 39 not implemented");
  };
  s4[40] = function() {
    throw new Error("Stdlib field 40 not implemented");
  };
  s4[41] = function() {
    throw new Error("Stdlib field 41 not implemented");
  };
  s4[42] = function() {
    throw new Error("Stdlib field 42 not implemented");
  };
  s4[43] = function() {
    throw new Error("Stdlib field 43 not implemented");
  };
  s4[44] = function() {
    throw new Error("Stdlib field 44 not implemented");
  };
  s4[45] = function() {
    throw new Error("Stdlib field 45 not implemented");
  };
  s4[46] = function() {
    throw new Error("Stdlib field 46 not implemented");
  };
  s4[47] = function() {
    throw new Error("Stdlib field 47 not implemented");
  };
  s4[48] = function() {
    throw new Error("Stdlib field 48 not implemented");
  };
  s4[49] = function() {
    throw new Error("Stdlib field 49 not implemented");
  };
  s4[50] = function() {
    throw new Error("Stdlib field 50 not implemented");
  };
  s4[51] = function() {
    throw new Error("Stdlib field 51 not implemented");
  };
  s4[52] = function() {
    throw new Error("Stdlib field 52 not implemented");
  };
  s4[53] = function() {
    throw new Error("Stdlib field 53 not implemented");
  };
  s4[54] = function() {
    throw new Error("Stdlib field 54 not implemented");
  };
  s4[55] = function() {
    throw new Error("Stdlib field 55 not implemented");
  };
  s4[56] = function() {
    throw new Error("Stdlib field 56 not implemented");
  };
  s4[57] = function() {
    throw new Error("Stdlib field 57 not implemented");
  };
  s4[58] = function() {
    throw new Error("Stdlib field 58 not implemented");
  };
  s4[59] = function() {
    throw new Error("Stdlib field 59 not implemented");
  };
  s4[60] = function() {
    throw new Error("Stdlib field 60 not implemented");
  };
  s4[61] = function() {
    throw new Error("Stdlib field 61 not implemented");
  };
  s4[62] = function() {
    throw new Error("Stdlib field 62 not implemented");
  };
  s4[63] = function() {
    throw new Error("Stdlib field 63 not implemented");
  };
  s4[64] = function() {
    throw new Error("Stdlib field 64 not implemented");
  };
  s4[65] = function() {
    throw new Error("Stdlib field 65 not implemented");
  };
  s4[66] = function() {
    throw new Error("Stdlib field 66 not implemented");
  };
  s4[67] = function() {
    throw new Error("Stdlib field 67 not implemented");
  };
  s4[68] = function() {
    throw new Error("Stdlib field 68 not implemented");
  };
  s4[69] = function() {
    throw new Error("Stdlib field 69 not implemented");
  };
  s4[70] = function() {
    throw new Error("Stdlib field 70 not implemented");
  };
  s4[71] = function() {
    throw new Error("Stdlib field 71 not implemented");
  };
  s4[72] = function() {
    throw new Error("Stdlib field 72 not implemented");
  };
  s4[73] = function() {
    throw new Error("Stdlib field 73 not implemented");
  };
  s4[74] = function() {
    throw new Error("Stdlib field 74 not implemented");
  };
  s4[75] = function() {
    throw new Error("Stdlib field 75 not implemented");
  };
  s4[76] = function() {
    throw new Error("Stdlib field 76 not implemented");
  };
  s4[77] = function() {
    throw new Error("Stdlib field 77 not implemented");
  };
  s4[78] = function() {
    throw new Error("Stdlib field 78 not implemented");
  };
  s4[79] = function() {
    throw new Error("Stdlib field 79 not implemented");
  };
  s4[80] = function() {
    throw new Error("Stdlib field 80 not implemented");
  };
  s4[81] = function() {
    throw new Error("Stdlib field 81 not implemented");
  };
  s4[82] = function() {
    throw new Error("Stdlib field 82 not implemented");
  };
  s4[83] = function() {
    throw new Error("Stdlib field 83 not implemented");
  };
  s4[84] = function() {
    throw new Error("Stdlib field 84 not implemented");
  };
  s4[85] = function() {
    throw new Error("Stdlib field 85 not implemented");
  };
  s4[86] = function() {
    throw new Error("Stdlib field 86 not implemented");
  };
  s4[87] = function() {
    throw new Error("Stdlib field 87 not implemented");
  };
  s4[88] = function() {
    throw new Error("Stdlib field 88 not implemented");
  };
  s4[89] = function() {
    throw new Error("Stdlib field 89 not implemented");
  };
  s4[90] = function() {
    throw new Error("Stdlib field 90 not implemented");
  };
  s4[91] = function() {
    throw new Error("Stdlib field 91 not implemented");
  };
  s4[92] = function() {
    throw new Error("Stdlib field 92 not implemented");
  };
  s4[93] = function() {
    throw new Error("Stdlib field 93 not implemented");
  };
  s4[94] = function() {
    throw new Error("Stdlib field 94 not implemented");
  };
  s4[95] = function() {
    throw new Error("Stdlib field 95 not implemented");
  };
  s4[96] = function() {
    throw new Error("Stdlib field 96 not implemented");
  };
  s4[97] = function() {
    throw new Error("Stdlib field 97 not implemented");
  };
  s4[98] = function() {
    throw new Error("Stdlib field 98 not implemented");
  };
  s4[99] = function() {
    throw new Error("Stdlib field 99 not implemented");
  };
  s4[100] = function() {
    throw new Error("Stdlib field 100 not implemented");
  };
  s4[101] = function() {
    throw new Error("Stdlib field 101 not implemented");
  };
  s4[102] = function() {
    throw new Error("Stdlib field 102 not implemented");
  };
  s4[103] = function() {
    throw new Error("Stdlib field 103 not implemented");
  };
  s4[104] = function() {
    throw new Error("Stdlib field 104 not implemented");
  };
  s4[0] = (s6) => {
    throw new Error(String(s6));
  };
  s4[1] = (s6) => {
    throw new Error(String(s6));
  };
  s4[15] = (a67, b2) => a67 < b2 ? a67 : b2;
  s4[16] = (a67, b2) => a67 > b2 ? a67 : b2;
  s4[17] = (a67) => Math.abs(a67);
  s4[18] = 4611686018427388e3;
  s4[19] = -4611686018427388e3;
  s4[20] = (a67) => ~a67;
  s4[27] = (a67, b2) => String(a67) + String(b2);
  s4[28] = (n2) => n2;
  s4[29] = (b2) => b2 ? "true" : "false";
  s4[30] = (s6) => s6 === "true" ? { $tag: 0, "0": 1 } : s6 === "false" ? { $tag: 0, "0": 0 } : 0;
  s4[32] = (n2) => String(n2);
  s4[33] = (s6) => {
    const n2 = parseInt(s6, 10);
    return isNaN(n2) ? 0 : { $tag: 0, "0": n2 };
  };
  s4[34] = (f2) => String(f2);
  s4[35] = (s6) => {
    const n2 = parseFloat(s6);
    return isNaN(n2) ? 0 : { $tag: 0, "0": n2 };
  };
  s4[36] = (a67, b2) => {
    const s6 = [];
    let l2 = a67;
    while (l2 !== 0) {
      s6.push(l2["0"]);
      l2 = l2["1"];
    }
    let r2 = b2;
    for (let i2 = s6.length - 1; i2 >= 0; i2--)
      r2 = { $tag: 0, "0": s6[i2], "1": r2 };
    return r2;
  };
  s4[40] = (c2) => {
    out(String.fromCharCode(c2));
    return 0;
  };
  s4[41] = (x2) => {
    out(String(x2));
    return 0;
  };
  s4[42] = (x2) => {
    out(String(x2));
    return 0;
  };
  s4[43] = (n2) => {
    out(String(n2));
    return 0;
  };
  s4[44] = (f2) => {
    out(String(f2));
    return 0;
  };
  s4[45] = (x2) => {
    out(String(x2) + "\n");
    return 0;
  };
  s4[46] = () => {
    out("\n");
    return 0;
  };
  s4[47] = (c2) => {
    out(String.fromCharCode(c2));
    return 0;
  };
  s4[48] = (x2) => {
    out(String(x2));
    return 0;
  };
  s4[49] = (x2) => {
    out(String(x2));
    return 0;
  };
  s4[50] = (n2) => {
    out(String(n2));
    return 0;
  };
  s4[51] = (f2) => {
    out(String(f2));
    return 0;
  };
  s4[52] = (x2) => {
    out(String(x2) + "\n");
    return 0;
  };
  s4[53] = () => {
    out("\n");
    return 0;
  };
  s4[59] = (fn) => 0;
  s4[60] = (fn) => 0;
  s4[61] = (m2, p2, fn) => 0;
  s4[63] = () => 0;
  s4[65] = (ch, s6) => {
    out(String(s6));
    return 0;
  };
  s4[66] = (ch, b2) => {
    for (var i2 = 0; i2 < b2.length; i2++)
      out(String.fromCharCode(b2[i2]));
    return 0;
  };
  s4[67] = (ch, s6, ofs, len) => {
    out(String(s6).substr(ofs, len));
    return 0;
  };
  s4[68] = (ch, s6, ofs, len) => {
    out(String(s6).substr(ofs, len));
    return 0;
  };
  s4[75] = (ch) => 0;
  s4[76] = (ch) => 0;
  s4[98] = (n2) => {
    throw new Error("exit " + String(n2));
  };
  s4[99] = (f2) => 0;
  s4[100] = (s6) => s6;
  s4[102] = () => 0;
  s4[21] = Infinity;
  s4[22] = -Infinity;
  s4[23] = NaN;
  s4[24] = 17976931348623157e292;
  s4[25] = 5e-324;
  s4[26] = 2220446049250313e-31;
  var Stdlib_default = s4;

  // ../../oprojects/wsocaml/examples/todomvc-lm/out/client/Main.js
  if (!globalThis.OCamlRuntime) {
    (function() {
      "use strict";
      var ooId = 0;
      var namedValues = {};
      function out2(s6) {
        if (typeof process !== "undefined" && process.stdout && process.stdout.write) {
          process.stdout.write(s6);
        } else if (typeof console !== "undefined" && console.log) {
          console.log(s6);
        }
      }
      var KIND_NUM = 0, KIND_STR = 1, KIND_BLOCK = 2, KIND_FUN = 3, KIND_NULL = 4, KIND_OTHER = 5;
      function kind(x2) {
        if (x2 === null || x2 === void 0)
          return KIND_NULL;
        var t2 = typeof x2;
        if (t2 === "number")
          return KIND_NUM;
        if (t2 === "string")
          return KIND_STR;
        if (t2 === "function")
          return KIND_FUN;
        if (Array.isArray(x2))
          return KIND_BLOCK;
        if (t2 === "object" && x2.$tag !== void 0)
          return KIND_BLOCK;
        return KIND_OTHER;
      }
      function blockTag(x2) {
        return Array.isArray(x2) ? 0 : x2.$tag | 0;
      }
      function blockSize(x2) {
        if (Array.isArray(x2))
          return x2.length;
        var n2 = 0;
        for (var k2 in x2)
          if (/^[0-9]+$/.test(k2))
            n2++;
        return n2;
      }
      function blockField(x2, i2) {
        return x2[i2];
      }
      function caml_compare(a67, b2) {
        var ka = kind(a67), kb = kind(b2);
        if (ka !== kb)
          return ka < kb ? -1 : 1;
        switch (ka) {
          case KIND_NUM:
            return a67 < b2 ? -1 : a67 > b2 ? 1 : 0;
          case KIND_STR:
            return a67 < b2 ? -1 : a67 > b2 ? 1 : 0;
          case KIND_BLOCK: {
            var ta = blockTag(a67), tb = blockTag(b2);
            if (ta !== tb)
              return ta < tb ? -1 : 1;
            var na = blockSize(a67), nb = blockSize(b2), n2 = na < nb ? na : nb;
            for (var i2 = 0; i2 < n2; i2++) {
              var r2 = caml_compare(blockField(a67, i2), blockField(b2, i2));
              if (r2 !== 0)
                return r2;
            }
            return na < nb ? -1 : na > nb ? 1 : 0;
          }
          case KIND_FUN:
            throw new globalThis.Error("compare: functional value");
          default:
            return 0;
        }
      }
      function caml_closure(arity, f2) {
        f2.arity = arity;
        return f2;
      }
      function caml_apply_core(f2, args) {
        if (typeof f2 !== "function")
          throw new globalThis.Error("apply: not a function");
        var arity = f2.arity;
        if (arity === void 0)
          return f2.apply(null, args);
        if (args.length === arity)
          return f2.apply(null, args);
        if (args.length < arity) {
          var partial = function() {
            return caml_apply_core(f2, args.concat(Array.prototype.slice.call(arguments)));
          };
          partial.arity = arity - args.length;
          return partial;
        }
        return caml_apply_core(f2.apply(null, args.slice(0, arity)), args.slice(arity));
      }
      function caml_trampoline(res) {
        while (res && res.tramp)
          res = caml_apply_core(res.tramp, res.args);
        return res;
      }
      function caml_apply(f2, args) {
        return caml_trampoline(caml_apply_core(f2, args));
      }
      function caml_to_js(f2) {
        if (typeof f2 !== "function" || f2.arity === void 0)
          return f2;
        var arity = f2.arity;
        function curried() {
          var args = Array.prototype.slice.call(arguments);
          if (args.length >= arity)
            return caml_apply(f2, args);
          if (arity === 1 && args.length === 0)
            return caml_apply(f2, [0]);
          return function() {
            return curried.apply(null, args.concat(Array.prototype.slice.call(arguments)));
          };
        }
        curried.arity = arity;
        return curried;
      }
      function caml_list_to_array(xs) {
        var a67 = [];
        while (typeof xs === "object" && xs !== null) {
          a67.push(xs[0]);
          xs = xs[1];
        }
        return a67;
      }
      function seqNodes(v2) {
        var a67 = [];
        if (v2 !== null && v2 !== void 0) {
          if (typeof v2.GetEnumerator === "function") {
            var e2 = v2.GetEnumerator();
            try {
              while (e2.MoveNext())
                a67.push(e2.Current);
            } finally {
              if (typeof e2.Dispose === "function")
                e2.Dispose();
            }
          } else if (typeof v2.length === "number") {
            for (var i2 = 0; i2 < v2.length; i2++)
              a67.push(v2[i2]);
          }
        }
        return a67;
      }
      function js_to_caml_seq(v2) {
        var a67 = seqNodes(v2);
        var mk = function(i2) {
          return function() {
            return i2 < a67.length ? { $tag: 0, "0": a67[i2], "1": mk(i2 + 1) } : 0;
          };
        };
        return mk(0);
      }
      function caml_seq_to_js(s6) {
        var a67 = [];
        var node = s6();
        while (node !== 0) {
          a67.push(node[0]);
          node = node[1]();
        }
        return a67;
      }
      function caml_to_js_seq(f2, kinds, ret) {
        var g2 = caml_to_js(f2);
        var isSeq = function(k2) {
          return k2 === "seq";
        };
        if (!kinds.some(isSeq) && !isSeq(ret))
          return g2;
        var n2 = kinds.length;
        function wrapped() {
          var args = Array.prototype.slice.call(arguments);
          for (var i2 = 0; i2 < n2 && i2 < args.length; i2++) {
            if (isSeq(kinds[i2]))
              args[i2] = js_to_caml_seq(args[i2]);
          }
          var r2 = g2.apply(null, args);
          return isSeq(ret) ? caml_seq_to_js(r2) : r2;
        }
        wrapped.arity = g2.arity;
        return wrapped;
      }
      function rpcMeta(name, metaJson) {
        var cache = globalThis.OCamlRuntime.__rpcMetaCache || (globalThis.OCamlRuntime.__rpcMetaCache = {});
        var m2 = cache[name];
        if (!m2) {
          m2 = cache[name] = JSON.parse(metaJson);
        }
        return m2;
      }
      function registerTypes(json) {
        var reg = globalThis.OCamlRuntime.__types || (globalThis.OCamlRuntime.__types = {});
        var arr = JSON.parse(json);
        for (var i2 = 0; i2 < arr.length; i2++)
          reg[arr[i2].id] = arr[i2];
      }
      function resolveType(meta, c2) {
        if (c2.id !== void 0) {
          var reg = globalThis.OCamlRuntime.__types || {};
          var d2 = reg[c2.id];
          if (!d2)
            throw new globalThis.Error("unknown rpc type " + c2.id);
          return d2;
        }
        var types = meta.types || [];
        for (var i2 = 0; i2 < types.length; i2++)
          if (types[i2].key === c2.key)
            return types[i2];
        throw new globalThis.Error("unknown rpc type " + c2.key);
      }
      function marshalOut(meta, c2, v2) {
        switch (c2.k) {
          case "int":
          case "float":
          case "string":
            return v2;
          case "bool":
            return !!v2;
          case "char":
            return String.fromCharCode(v2);
          case "unit":
            return null;
          case "list": {
            var a67 = [];
            while (typeof v2 === "object" && v2 !== null) {
              a67.push(marshalOut(meta, c2.e, v2["0"]));
              v2 = v2["1"];
            }
            return a67;
          }
          case "option":
            return v2 === 0 ? null : marshalOut(meta, c2.e, v2["0"]);
          case "array": {
            var r2 = [];
            for (var i2 = 0; i2 < v2.length; i2++)
              r2.push(marshalOut(meta, c2.e, v2[i2]));
            return r2;
          }
          case "tuple": {
            var r2 = [];
            for (var i2 = 0; i2 < c2.e.length; i2++)
              r2.push(marshalOut(meta, c2.e[i2], v2[String(i2)]));
            return r2;
          }
          case "named": {
            var d2 = resolveType(meta, c2);
            if (d2.kind === "record") {
              var o2 = {};
              for (var i2 = 0; i2 < d2.fields.length; i2++)
                o2[d2.fields[i2][0]] = marshalOut(meta, d2.fields[i2][1], v2[String(i2)]);
              return o2;
            }
            var cases = d2.cases;
            if (typeof v2 !== "object" || v2 === null) {
              for (var i2 = 0; i2 < cases.length; i2++)
                if (cases[i2][2].length === 0 && cases[i2][1] === v2)
                  return { $: cases[i2][0] };
              throw new globalThis.Error("bad variant tag " + v2);
            }
            for (var i2 = 0; i2 < cases.length; i2++)
              if (cases[i2][2].length > 0 && cases[i2][1] === v2.$tag) {
                var o2 = { $: cases[i2][0] };
                var args = cases[i2][2];
                for (var j2 = 0; j2 < args.length; j2++)
                  o2["$" + j2] = marshalOut(meta, args[j2], v2[String(j2)]);
                return o2;
              }
            throw new globalThis.Error("bad variant tag " + v2.$tag);
          }
        }
        throw new globalThis.Error("marshalOut: " + c2.k);
      }
      function marshalIn(meta, c2, v2) {
        switch (c2.k) {
          case "int":
          case "float":
          case "string":
            return v2;
          case "bool":
            return v2 ? 1 : 0;
          case "char":
            return v2.charCodeAt(0);
          case "unit":
            return 0;
          case "list": {
            var r2 = 0;
            for (var i2 = v2.length - 1; i2 >= 0; i2--)
              r2 = { $tag: 0, "0": marshalIn(meta, c2.e, v2[i2]), "1": r2 };
            return r2;
          }
          case "option":
            return v2 === null || v2 === void 0 ? 0 : { $tag: 0, "0": marshalIn(meta, c2.e, v2) };
          case "array": {
            var r2 = [];
            for (var i2 = 0; i2 < v2.length; i2++)
              r2.push(marshalIn(meta, c2.e, v2[i2]));
            return r2;
          }
          case "tuple": {
            var o2 = { $tag: 0 };
            for (var i2 = 0; i2 < c2.e.length; i2++)
              o2[String(i2)] = marshalIn(meta, c2.e[i2], v2[i2]);
            return o2;
          }
          case "named": {
            var d2 = resolveType(meta, c2);
            if (d2.kind === "record") {
              var o2 = { $tag: 0 };
              for (var i2 = 0; i2 < d2.fields.length; i2++)
                o2[String(i2)] = marshalIn(meta, d2.fields[i2][1], v2[d2.fields[i2][0]]);
              return o2;
            }
            var cases = d2.cases;
            for (var i2 = 0; i2 < cases.length; i2++)
              if (cases[i2][0] === v2.$) {
                var tag = cases[i2][1];
                var args = cases[i2][2];
                if (args.length === 0)
                  return tag;
                var o2 = { $tag: tag };
                for (var j2 = 0; j2 < args.length; j2++)
                  o2[String(j2)] = marshalIn(meta, args[j2], v2["$" + j2]);
                return o2;
              }
            throw new globalThis.Error("bad variant case " + v2.$);
          }
        }
        throw new globalThis.Error("marshalIn: " + c2.k);
      }
      function jsonMeta(metaJson) {
        var cache = globalThis.OCamlRuntime.__jsonMetaCache || (globalThis.OCamlRuntime.__jsonMetaCache = {});
        var m2 = cache[metaJson];
        if (!m2)
          m2 = cache[metaJson] = JSON.parse(metaJson);
        return m2;
      }
      function jsonEncode(metaJson, v2) {
        var meta = jsonMeta(metaJson);
        return JSON.stringify(marshalOut(meta, meta, v2));
      }
      function jsonDecode(metaJson, s6) {
        var meta = jsonMeta(metaJson);
        return marshalIn(meta, meta, JSON.parse(s6));
      }
      function exported(block, idx, metaJson, isFn, args) {
        var cache = globalThis.OCamlRuntime.__rpcMetaCache || (globalThis.OCamlRuntime.__rpcMetaCache = {});
        var meta = cache[metaJson] || (cache[metaJson] = JSON.parse(metaJson));
        var v2 = block[idx];
        var res;
        if (isFn) {
          var ocamlArgs = [];
          for (var i2 = 0; i2 < args.length; i2++)
            ocamlArgs.push(marshalIn(meta, meta.args[i2], args[i2]));
          res = caml_apply(v2, ocamlArgs);
        } else {
          res = v2;
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
        var n2 = 0;
        for (var i2 = 0; i2 < nodes.length; i2++) {
          var fn = store[nodes[i2].getAttribute("data-ws-key")];
          if (fn) {
            nodes[i2].textContent = "";
            caml_apply(fn, [0]);
            n2++;
          }
        }
        attachEvents();
        return n2;
      }
      function attachEvents(root) {
        var doc = root || globalThis.document;
        if (!doc || !doc.querySelectorAll)
          return 0;
        var store = globalThis.OCamlRuntime.clientCode || {};
        var nodes = doc.querySelectorAll("*");
        var n2 = 0;
        for (var i2 = 0; i2 < nodes.length; i2++) {
          var el = nodes[i2];
          if (el.__wsEventsAttached)
            continue;
          var attrs = el.attributes;
          if (!attrs)
            continue;
          var attached = 0;
          for (var j2 = 0; j2 < attrs.length; j2++) {
            var name = attrs[j2].name;
            if (name.length <= 5 || name.lastIndexOf("ws-on", 0) !== 0)
              continue;
            var fn = store[attrs[j2].value];
            if (!fn)
              continue;
            (function(el2, ev, fn2) {
              el2.addEventListener(ev, function(e2) {
                caml_apply(fn2, [el2, e2]);
              });
            })(el, name.slice(5), fn);
            attached++;
          }
          if (attached > 0) {
            el.__wsEventsAttached = true;
            n2 += attached;
          }
        }
        return n2;
      }
      function registerRpc(name, metaJson, fn) {
        var store = globalThis.OCamlRuntime.__serverRpc || (globalThis.OCamlRuntime.__serverRpc = {});
        store[name] = { fn, meta: rpcMeta(name, metaJson) };
      }
      function rpcCall(name, metaJson, args) {
        var meta = rpcMeta(name, metaJson);
        var extArgs = args.map(function(a67, i2) {
          return marshalOut(meta, meta.args[i2], a67);
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
          var p2 = JSON.parse(payload);
          var entry = (globalThis.OCamlRuntime.__serverRpc || {})[p2.name];
          var meta = entry.meta;
          var ocamlArgs = p2.args.map(function(a67, i2) {
            return marshalIn(meta, meta.args[i2], a67);
          });
          return Promise.resolve(entry.fn.apply(null, ocamlArgs)).then(function(result) {
            return JSON.stringify({ result: marshalOut(meta, meta.result, result) });
          });
        });
      }
      function async_bind(p2, cb) {
        return p2.then(function(v2) {
          return caml_to_js(cb)(v2);
        });
      }
      function async_map(f2, p2) {
        return p2.then(function(v2) {
          return caml_to_js(f2)(v2);
        });
      }
      function async_run(f2, p2) {
        p2.then(function(v2) {
          caml_to_js(f2)(v2);
        });
        return 0;
      }
      function caml_trampoline_return(f2, args) {
        return { tramp: f2, args };
      }
      function caml_hash(x2) {
        var h2 = 0;
        function mix(v2) {
          h2 = Math.imul(h2, 31) + (v2 | 0) | 0;
        }
        function walk(v2) {
          switch (kind(v2)) {
            case KIND_NUM:
              mix(v2);
              break;
            case KIND_STR:
              mix(1);
              for (var i2 = 0; i2 < v2.length; i2++)
                mix(v2.charCodeAt(i2));
              break;
            case KIND_BLOCK: {
              mix(2 + blockTag(v2));
              for (var j2 = 0, n2 = blockSize(v2); j2 < n2; j2++)
                walk(blockField(v2, j2));
              break;
            }
            default:
              mix(7);
          }
        }
        walk(x2);
        return h2 & 1073741823;
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
        caml_obj_tag: function(x2) {
          switch (kind(x2)) {
            case KIND_NUM:
              return 1e3;
            case KIND_STR:
              return 252;
            case KIND_FUN:
              return 247;
            case KIND_BLOCK:
              return blockTag(x2);
            case KIND_NULL:
              return 1e3;
            default:
              return 248;
          }
        },
        caml_compare,
        caml_equal: function(a67, b2) {
          return caml_compare(a67, b2) === 0 ? 1 : 0;
        },
        caml_notequal: function(a67, b2) {
          return caml_compare(a67, b2) === 0 ? 0 : 1;
        },
        caml_lessthan: function(a67, b2) {
          return caml_compare(a67, b2) < 0 ? 1 : 0;
        },
        caml_lessequal: function(a67, b2) {
          return caml_compare(a67, b2) <= 0 ? 1 : 0;
        },
        caml_greaterthan: function(a67, b2) {
          return caml_compare(a67, b2) > 0 ? 1 : 0;
        },
        caml_greaterequal: function(a67, b2) {
          return caml_compare(a67, b2) >= 0 ? 1 : 0;
        },
        caml_hash,
        caml_is_int: function(x2) {
          return typeof x2 === "number" && Number.isInteger(x2) ? 1 : 0;
        },
        caml_is_out: function(i2, a67) {
          return i2 < 0 || i2 >= a67.length ? 1 : 0;
        },
        caml_compare_ints: function(a67, b2) {
          return a67 < b2 ? -1 : a67 > b2 ? 1 : 0;
        },
        caml_compare_floats: function(a67, b2) {
          return a67 < b2 ? -1 : a67 > b2 ? 1 : 0;
        },
        caml_dup_array: function(a67) {
          return a67.slice();
        },
        caml_int64_of_string: function(s6) {
          return BigInt(s6);
        },
        caml_nativeint_of_string: function(s6) {
          return BigInt(s6);
        },
        caml_bint_of_int: function(kind2, x2) {
          return kind2 === "int32" ? x2 | 0 : BigInt(Math.trunc(x2));
        },
        caml_int_of_bint: function(kind2, x2) {
          return kind2 === "int32" ? x2 : Number(x2);
        },
        caml_bint_neg: function(kind2, x2) {
          return kind2 === "int32" ? -x2 | 0 : BigInt.asIntN(64, -x2);
        },
        caml_bint_add: function(kind2, a67, b2) {
          return kind2 === "int32" ? a67 + b2 | 0 : BigInt.asIntN(64, a67 + b2);
        },
        caml_bint_sub: function(kind2, a67, b2) {
          return kind2 === "int32" ? a67 - b2 | 0 : BigInt.asIntN(64, a67 - b2);
        },
        caml_bint_mul: function(kind2, a67, b2) {
          return kind2 === "int32" ? Math.imul(a67, b2) : BigInt.asIntN(64, a67 * b2);
        },
        caml_bint_and: function(kind2, a67, b2) {
          return kind2 === "int32" ? a67 & b2 | 0 : BigInt.asIntN(64, a67 & b2);
        },
        caml_bint_or: function(kind2, a67, b2) {
          return kind2 === "int32" ? a67 | b2 | 0 : BigInt.asIntN(64, a67 | b2);
        },
        caml_bint_xor: function(kind2, a67, b2) {
          return kind2 === "int32" ? a67 ^ b2 | 0 : BigInt.asIntN(64, a67 ^ b2);
        },
        caml_bint_lsl: function(kind2, a67, b2) {
          return kind2 === "int32" ? a67 << b2 | 0 : BigInt.asIntN(64, a67 << BigInt(b2));
        },
        caml_bint_lsr: function(kind2, a67, b2) {
          return kind2 === "int32" ? a67 >>> b2 : BigInt.asIntN(64, BigInt.asUintN(64, a67) >> BigInt(b2));
        },
        caml_bint_asr: function(kind2, a67, b2) {
          return kind2 === "int32" ? a67 >> b2 : BigInt.asIntN(64, a67 >> BigInt(b2));
        },
        caml_bint_div: function(kind2, a67, b2) {
          return kind2 === "int32" ? a67 / b2 | 0 : a67 / b2;
        },
        caml_bint_mod: function(kind2, a67, b2) {
          return kind2 === "int32" ? a67 % b2 : a67 % b2;
        },
        caml_bint_comp: function(kind2, op, a67, b2) {
          var r2;
          switch (op) {
            case "eq":
              return a67 === b2 ? 1 : 0;
            case "ne":
              return a67 !== b2 ? 1 : 0;
            case "lt":
              r2 = a67 < b2;
              break;
            case "gt":
              r2 = a67 > b2;
              break;
            case "le":
              r2 = a67 <= b2;
              break;
            case "ge":
              r2 = a67 >= b2;
              break;
            default:
              r2 = false;
          }
          return r2 ? 1 : 0;
        },
        caml_bint_compare: function(kind2, a67, b2) {
          return a67 < b2 ? -1 : a67 > b2 ? 1 : 0;
        },
        caml_bint_conv: function(src, dst, x2) {
          var v2 = typeof x2 === "bigint" ? x2 : BigInt(Math.trunc(x2));
          return dst === "int32" ? Number(BigInt.asIntN(32, v2)) : BigInt.asIntN(64, v2);
        },
        caml_bint_bswap: function(kind2, x2) {
          if (kind2 === "int32") {
            return (x2 & 255) << 24 | (x2 & 65280) << 8 | x2 >>> 8 & 65280 | x2 >>> 24 & 255 | 0;
          }
          var v2 = BigInt.asUintN(64, x2);
          var r2 = 0n;
          for (var i2 = 0; i2 < 8; i2++)
            r2 = r2 << 8n | v2 >> BigInt(8 * i2) & 0xffn;
          return BigInt.asIntN(64, r2);
        },
        caml_bytes_set16: function(b2, i2, v2) {
          b2[i2] = v2 & 255;
          b2[i2 + 1] = v2 >> 8 & 255;
          return 0;
        },
        caml_bytes_get16: function(b2, i2) {
          return b2[i2] | b2[i2 + 1] << 8;
        },
        caml_bytes_set32: function(b2, i2, v2) {
          b2[i2] = v2 & 255;
          b2[i2 + 1] = v2 >> 8 & 255;
          b2[i2 + 2] = v2 >> 16 & 255;
          b2[i2 + 3] = v2 >> 24 & 255;
          return 0;
        },
        caml_bytes_get32: function(b2, i2) {
          return b2[i2] | b2[i2 + 1] << 8 | b2[i2 + 2] << 16 | b2[i2 + 3] << 24;
        },
        caml_bytes_set64: function(b2, i2, v2) {
          var x2 = BigInt.asUintN(64, v2);
          for (var j2 = 0; j2 < 8; j2++)
            b2[i2 + j2] = Number(x2 >> BigInt(8 * j2) & 0xffn);
          return 0;
        },
        caml_bytes_get64: function(b2, i2) {
          var r2 = 0n;
          for (var j2 = 0; j2 < 8; j2++)
            r2 |= BigInt(b2[i2 + j2]) << BigInt(8 * j2);
          return BigInt.asIntN(64, r2);
        },
        caml_bswap16: function(x2) {
          return (x2 & 255) << 8 | x2 >> 8 & 255;
        },
        caml_lazy_make: function(f2) {
          return { $tag: 246, "0": f2 };
        },
        caml_lazy_make_forward: function(v2) {
          return { $tag: 250, "0": v2 };
        },
        caml_obj_set_tag: function(x2, tag) {
          x2.$tag = tag;
          return 0;
        },
        caml_atomic_load: function(r2) {
          return r2["0"];
        },
        caml_atomic_cas_field: function(r2, i2, old, n2) {
          if (r2[i2] === old) {
            r2[i2] = n2;
            return 1;
          }
          return 0;
        },
        caml_register_named_value: function(name, v2) {
          namedValues[name] = v2;
          return 0;
        },
        caml_named_value: function(name) {
          return namedValues[name] || 0;
        },
        caml_int64_float_of_bits: function(x2) {
          var buf = new ArrayBuffer(8);
          var view = new DataView(buf);
          var v2 = BigInt.asUintN(64, typeof x2 === "bigint" ? x2 : BigInt(x2));
          view.setBigUint64(0, v2, true);
          return view.getFloat64(0, true);
        },
        caml_ml_output: function(chan, s6, ofs, len) {
          out2(String(s6).substr(ofs, len));
          return 0;
        },
        caml_ml_output_bytes: function(chan, b2, ofs, len) {
          var s6 = "";
          for (var i2 = 0; i2 < len; i2++)
            s6 += String.fromCharCode(b2[ofs + i2]);
          out2(s6);
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
        caml_sys_exit: function(n2) {
          throw new globalThis.Error("exit " + String(n2));
        },
        caml_output_value: function(chan, v2, flags) {
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
        caml_lazy_update_to_forcing: function(x2) {
          if (x2.$tag === 246) {
            x2.$tag = 244;
            return 0;
          }
          return 1;
        },
        caml_lazy_reset_to_lazy: function(x2) {
          x2.$tag = 246;
          return 0;
        },
        caml_lazy_update_to_forward: function(x2) {
          x2.$tag = 250;
          return 0;
        },
        caml_lazy_force: function(x2) {
          var t2 = x2 === null || x2 === void 0 ? 1e3 : Array.isArray(x2) ? 0 : typeof x2 === "object" && x2.$tag !== void 0 ? x2.$tag : -1;
          if (t2 === 250)
            return x2["0"];
          if (t2 === 244)
            throw new globalThis.Error("Lazy.Undefined");
          if (t2 !== 246)
            return x2;
          x2.$tag = 244;
          var f2 = x2["0"];
          x2["0"] = 0;
          try {
            var r2 = f2(0);
            x2["0"] = r2;
            x2.$tag = 250;
            return r2;
          } catch (e2) {
            x2["0"] = function() {
              throw e2;
            };
            x2.$tag = 246;
            throw e2;
          }
        },
        caml_create_bytes: function(n2) {
          return new Uint8Array(n2);
        },
        caml_bytes_of_string: function(s6) {
          var a67 = new Uint8Array(s6.length);
          for (var i2 = 0; i2 < s6.length; i2++)
            a67[i2] = s6.charCodeAt(i2);
          return a67;
        },
        caml_bytes_to_string: function(b2) {
          var s6 = "";
          for (var i2 = 0; i2 < b2.length; i2++)
            s6 += String.fromCharCode(b2[i2]);
          return s6;
        },
        caml_string_of_bytes: function(b2) {
          var s6 = "";
          for (var i2 = 0; i2 < b2.length; i2++)
            s6 += String.fromCharCode(b2[i2]);
          return s6;
        },
        caml_string_unsafe_get: function(s6, i2) {
          return s6.charCodeAt(i2);
        },
        caml_string_get: function(s6, i2) {
          return s6.charCodeAt(i2);
        },
        caml_bytes_unsafe_get: function(b2, i2) {
          return b2[i2];
        },
        caml_bytes_get: function(b2, i2) {
          return b2[i2];
        },
        caml_bytes_unsafe_set: function(b2, i2, c2) {
          b2[i2] = c2 & 255;
          return 0;
        },
        caml_bytes_set: function(b2, i2, c2) {
          b2[i2] = c2 & 255;
          return 0;
        },
        caml_ml_string_length: function(s6) {
          return s6.length;
        },
        caml_ml_bytes_length: function(b2) {
          return b2.length;
        },
        caml_string_concat: function(a67, b2) {
          return a67 + b2;
        },
        // `=`/`<>`/comparison on strings are emitted as the `%string_*` primitives
        // (not the generic caml_equal/caml_compare), so they need their own entries.
        caml_string_equal: function(a67, b2) {
          return a67 === b2 ? 1 : 0;
        },
        caml_string_notequal: function(a67, b2) {
          return a67 !== b2 ? 1 : 0;
        },
        caml_string_compare: function(a67, b2) {
          return a67 < b2 ? -1 : a67 > b2 ? 1 : 0;
        },
        caml_string_lessthan: function(a67, b2) {
          return a67 < b2 ? 1 : 0;
        },
        caml_string_lessequal: function(a67, b2) {
          return a67 <= b2 ? 1 : 0;
        },
        caml_string_greaterthan: function(a67, b2) {
          return a67 > b2 ? 1 : 0;
        },
        caml_string_greaterequal: function(a67, b2) {
          return a67 >= b2 ? 1 : 0;
        },
        caml_int_of_string: function(s6) {
          var n2 = parseInt(s6, 10);
          if (isNaN(n2) || !/^\s*[+-]?[0-9]+\s*$/.test(s6))
            throw new globalThis.Error('Failure("int_of_string")');
          return n2;
        },
        caml_float_of_string: function(s6) {
          var n2 = parseFloat(s6);
          if (isNaN(n2))
            throw new globalThis.Error('Failure("float_of_string")');
          return n2;
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
        caml_exp2_float: function(x2) {
          return Math.pow(2, x2);
        },
        caml_fmod_float: function(x2, y2) {
          return x2 % y2;
        },
        caml_ldexp_float: function(x2, n2) {
          return x2 * Math.pow(2, n2);
        },
        caml_frexp_float: function(x2) {
          if (x2 === 0 || !isFinite(x2))
            return { $tag: 0, "0": x2, "1": 0 };
          var e2 = Math.ceil(Math.log2(Math.abs(x2)));
          var frac = x2 / Math.pow(2, e2);
          while (Math.abs(frac) >= 1) {
            frac /= 2;
            e2 += 1;
          }
          while (Math.abs(frac) < 0.5) {
            frac *= 2;
            e2 -= 1;
          }
          return { $tag: 0, "0": frac, "1": e2 };
        },
        caml_modf_float: function(x2) {
          var i2 = Math.trunc(x2);
          return { $tag: 0, "0": x2 - i2, "1": i2 };
        },
        caml_fill_bytes: function(b2, ofs, len, c2) {
          for (var i2 = 0; i2 < len; i2++)
            b2[ofs + i2] = c2;
          return 0;
        },
        caml_blit_bytes: function(s1, i1, s22, i2, len) {
          for (var i3 = 0; i3 < len; i3++)
            s22[i2 + i3] = s1[i1 + i3];
          return 0;
        },
        caml_blit_string: function(s1, i1, s22, i2, len) {
          for (var i3 = 0; i3 < len; i3++)
            s22[i2 + i3] = s1.charCodeAt(i1 + i3);
          return 0;
        },
        caml_div: function(x2, y2) {
          if (y2 === 0)
            throw new globalThis.Error("Division_by_zero");
          return Math.trunc(x2 / y2);
        },
        caml_mod: function(x2, y2) {
          if (y2 === 0)
            throw new globalThis.Error("Division_by_zero");
          return x2 % y2;
        },
        caml_array_make: function(n2, init3) {
          var a67 = new Array(n2);
          for (var i2 = 0; i2 < n2; i2++)
            a67[i2] = init3;
          return a67;
        },
        caml_make_vect: function(n2, init3) {
          var a67 = new Array(n2);
          for (var i2 = 0; i2 < n2; i2++)
            a67[i2] = init3;
          return a67;
        },
        caml_obj_block: function(tag, size) {
          var o2 = { $tag: tag };
          for (var i2 = 0; i2 < size; i2++)
            o2[i2] = 0;
          return o2;
        },
        caml_obj_dup: function(x2) {
          if (Array.isArray(x2))
            return x2.slice();
          var o2 = { $tag: x2.$tag };
          for (var k2 in x2)
            o2[k2] = x2[k2];
          return o2;
        },
        caml_obj_is_block: function(x2) {
          return kind(x2) === KIND_BLOCK ? 1 : 0;
        },
        caml_print_string: function(s6) {
          out2(String(s6));
          return 0;
        },
        caml_print_bytes: function(s6) {
          out2(String(s6));
          return 0;
        },
        caml_print_int: function(n2) {
          out2(String(n2));
          return 0;
        },
        caml_print_float: function(f2) {
          out2(String(f2));
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
        caml_print_endline: function(s6) {
          out2(String(s6) + "\n");
          return 0;
        },
        caml_flush: function() {
          return 0;
        }
      };
    })();
  }
  globalThis.OCamlRuntime.registerTypes('[{"id":"Main.todo","kind":"record","fields":[["id",{"k":"int"}],["title",{"k":"string"}],["completed",{"k":"bool"}]]}]');
  var a66 = {};
  var b = '\n		<section class="todoapp">\n			<header class="header">\n				<h1>todos</h1>\n				<input class="new-todo" placeholder="What needs to be done?" autofocus="" ws-var="newTodo" ws-onkeyup="newTodoKey" ws-onafterrender="newTodoFocus"/>\n			</header>\n			<section class="main ${mainClass}" id="main">\n				<input id="toggle-all" class="toggle-all" type="checkbox" ws-attr="toggleAttr" ws-onclick="toggleAll"/>\n				<label for="toggle-all">Mark all as complete</label>\n				<ul class="todo-list" ws-hole="todos">\n					\n				</ul>\n			</section>\n			<footer class="footer ${footerClass}" id="footer">\n				<span class="todo-count" ws-hole="count"></span>\n				<ul class="filters">\n					<li><a class="${allClass}" href="#/" ws-onclick="filterAll">All</a></li>\n					<li><a class="${activeClass}" href="#/active" ws-onclick="filterActive">Active</a></li>\n					<li><a class="${completedClass}" href="#/completed" ws-onclick="filterCompleted">Completed</a></li>\n				</ul>\n				<button class="clear-completed ${clearClass}" ws-onclick="clearCompleted">Clear completed</button>\n			</footer>\n		</section>\n		<footer class="info">\n			<p>Double-click to edit a todo</p>\n			<p>Written in OCaml with WebSharper.UI</p>\n			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>\n		</footer>\n	';
  var c = globalThis.OCamlRuntime.caml_closure(1, () => ({ $tag: 0, "0": { $tag: 0, "0": WebSharper_UI_Var_default.Create_1("") }, "1": globalThis.OCamlRuntime.caml_closure(2, () => 0), "2": globalThis.OCamlRuntime.caml_closure(1, () => 0), "3": Const(""), "4": EmptyAttr(), "5": globalThis.OCamlRuntime.caml_closure(2, () => 0), "6": WebSharper_UI_Doc_default.Empty, "7": Const(""), "8": WebSharper_UI_Doc_default.Empty, "9": Const(""), "10": globalThis.OCamlRuntime.caml_closure(2, () => 0), "11": Const(""), "12": globalThis.OCamlRuntime.caml_closure(2, () => 0), "13": Const(""), "14": globalThis.OCamlRuntime.caml_closure(2, () => 0), "15": Const(""), "16": globalThis.OCamlRuntime.caml_closure(2, () => 0) }));
  var d = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[1] = bE;
    return bF;
  });
  var e = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[1] = globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bE, [{ $tag: 0, "0": bF[0], "1": 0, "2": bG, "3": bH }]));
    return bF;
  });
  var f = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[2] = bE;
    return bF;
  });
  var g = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[3] = Const(bE);
    return bF;
  });
  var h = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[3] = bE;
    return bF;
  });
  var i = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[4] = bE;
    return bF;
  });
  var j = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[5] = bE;
    return bF;
  });
  var k = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[5] = globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bE, [{ $tag: 0, "0": bF[0], "1": 0, "2": bG, "3": bH }]));
    return bF;
  });
  var l = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[6] = bE;
    return bF;
  });
  var m = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[7] = Const(bE);
    return bF;
  });
  var n = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[7] = bE;
    return bF;
  });
  var o = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[8] = bE;
    return bF;
  });
  var p = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[9] = Const(bE);
    return bF;
  });
  var q = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[9] = bE;
    return bF;
  });
  var r = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[10] = bE;
    return bF;
  });
  var s5 = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[10] = globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bE, [{ $tag: 0, "0": bF[0], "1": 0, "2": bG, "3": bH }]));
    return bF;
  });
  var t = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[11] = Const(bE);
    return bF;
  });
  var u = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[11] = bE;
    return bF;
  });
  var v = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[12] = bE;
    return bF;
  });
  var w = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[12] = globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bE, [{ $tag: 0, "0": bF[0], "1": 0, "2": bG, "3": bH }]));
    return bF;
  });
  var x = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[13] = Const(bE);
    return bF;
  });
  var y = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[13] = bE;
    return bF;
  });
  var z = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[14] = bE;
    return bF;
  });
  var A = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[14] = globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bE, [{ $tag: 0, "0": bF[0], "1": 0, "2": bG, "3": bH }]));
    return bF;
  });
  var B2 = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[15] = Const(bE);
    return bF;
  });
  var C = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[15] = bE;
    return bF;
  });
  var D = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[16] = bE;
    return bF;
  });
  var E = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[16] = globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bE, [{ $tag: 0, "0": bF[0], "1": 0, "2": bG, "3": bH }]));
    return bF;
  });
  var F = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bE ? void 0 : void 0;
    return GetOrLoadTemplate("todomvc", globalThis.OCamlRuntime.caml_apply(globalThis.OCamlRuntime.caml_closure(1, (bG) => bG ? Some(bG[0]) : null), [0]), globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, () => ParseHTMLIntoFakeRoot(b))), globalThis.OCamlRuntime.caml_list_to_array({ $tag: 0, "0": new a56("newtodo", bF[0][0]), "1": { $tag: 0, "0": new a51("newtodokey", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bF[1], [bG, bH])))), "1": { $tag: 0, "0": new a53("newtodofocus", globalThis.OCamlRuntime.caml_to_js(bF[2])), "1": { $tag: 0, "0": new a57("mainclass", bF[3]), "1": { $tag: 0, "0": new a50("toggleattr", bF[4]), "1": { $tag: 0, "0": new a51("toggleall", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bF[5], [bG, bH])))), "1": { $tag: 0, "0": new a48("todos", bF[6]), "1": { $tag: 0, "0": new a57("footerclass", bF[7]), "1": { $tag: 0, "0": new a48("count", bF[8]), "1": { $tag: 0, "0": new a57("allclass", bF[9]), "1": { $tag: 0, "0": new a51("filterall", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bF[10], [bG, bH])))), "1": { $tag: 0, "0": new a57("activeclass", bF[11]), "1": { $tag: 0, "0": new a51("filteractive", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bF[12], [bG, bH])))), "1": { $tag: 0, "0": new a57("completedclass", bF[13]), "1": { $tag: 0, "0": new a51("filtercompleted", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bF[14], [bG, bH])))), "1": { $tag: 0, "0": new a57("clearclass", bF[15]), "1": { $tag: 0, "0": new a51("clearcompleted", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bF[16], [bG, bH])))), "1": 0 } } } } } } } } } } } } } } } } }));
  });
  var G = globalThis.OCamlRuntime.caml_closure(1, (bE) => RunFullDocTemplate(globalThis.OCamlRuntime.caml_list_to_array({ $tag: 0, "0": new a56("newtodo", bE[0][0]), "1": { $tag: 0, "0": new a51("newtodokey", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bF, bG) => globalThis.OCamlRuntime.caml_trampoline_return(bE[1], [bF, bG])))), "1": { $tag: 0, "0": new a53("newtodofocus", globalThis.OCamlRuntime.caml_to_js(bE[2])), "1": { $tag: 0, "0": new a57("mainclass", bE[3]), "1": { $tag: 0, "0": new a50("toggleattr", bE[4]), "1": { $tag: 0, "0": new a51("toggleall", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bF, bG) => globalThis.OCamlRuntime.caml_trampoline_return(bE[5], [bF, bG])))), "1": { $tag: 0, "0": new a48("todos", bE[6]), "1": { $tag: 0, "0": new a57("footerclass", bE[7]), "1": { $tag: 0, "0": new a48("count", bE[8]), "1": { $tag: 0, "0": new a57("allclass", bE[9]), "1": { $tag: 0, "0": new a51("filterall", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bF, bG) => globalThis.OCamlRuntime.caml_trampoline_return(bE[10], [bF, bG])))), "1": { $tag: 0, "0": new a57("activeclass", bE[11]), "1": { $tag: 0, "0": new a51("filteractive", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bF, bG) => globalThis.OCamlRuntime.caml_trampoline_return(bE[12], [bF, bG])))), "1": { $tag: 0, "0": new a57("completedclass", bE[13]), "1": { $tag: 0, "0": new a51("filtercompleted", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bF, bG) => globalThis.OCamlRuntime.caml_trampoline_return(bE[14], [bF, bG])))), "1": { $tag: 0, "0": new a57("clearclass", bE[15]), "1": { $tag: 0, "0": new a51("clearcompleted", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bF, bG) => globalThis.OCamlRuntime.caml_trampoline_return(bE[16], [bF, bG])))), "1": 0 } } } } } } } } } } } } } } } } })));
  var H = '\n						<li class="${itemClass}">\n							<div class="view">\n								<input class="toggle" type="checkbox" ws-attr="toggleAttr" ws-onclick="toggle"/>\n								<label ws-ondblclick="editStart">${title}</label>\n								<button class="destroy" ws-onclick="destroy"></button>\n							</div>\n							<input class="edit" ws-var="editText" ws-onblur="editCommit" ws-onkeydown="editKey" ws-onafterrender="editFocus"/>\n						</li>\n					';
  var I = { $tag: 0, "0": H, "1": 0, "2": globalThis.OCamlRuntime.caml_closure(1, () => ({ $tag: 0, "0": { $tag: 0, "0": WebSharper_UI_Var_default.Create_1("") }, "1": Const(""), "2": EmptyAttr(), "3": globalThis.OCamlRuntime.caml_closure(2, () => 0), "4": globalThis.OCamlRuntime.caml_closure(2, () => 0), "5": Const(""), "6": globalThis.OCamlRuntime.caml_closure(2, () => 0), "7": globalThis.OCamlRuntime.caml_closure(2, () => 0), "8": globalThis.OCamlRuntime.caml_closure(2, () => 0), "9": globalThis.OCamlRuntime.caml_closure(1, () => 0) })), "3": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[1] = Const(bE);
    return bF;
  }), "4": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[1] = bE;
    return bF;
  }), "5": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[2] = bE;
    return bF;
  }), "6": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[3] = bE;
    return bF;
  }), "7": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[3] = globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bE, [{ $tag: 0, "0": bF[0], "1": 0, "2": bG, "3": bH }]));
    return bF;
  }), "8": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[4] = bE;
    return bF;
  }), "9": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[4] = globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bE, [{ $tag: 0, "0": bF[0], "1": 0, "2": bG, "3": bH }]));
    return bF;
  }), "10": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[5] = Const(bE);
    return bF;
  }), "11": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[5] = bE;
    return bF;
  }), "12": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[6] = bE;
    return bF;
  }), "13": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[6] = globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bE, [{ $tag: 0, "0": bF[0], "1": 0, "2": bG, "3": bH }]));
    return bF;
  }), "14": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[7] = bE;
    return bF;
  }), "15": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[7] = globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bE, [{ $tag: 0, "0": bF[0], "1": 0, "2": bG, "3": bH }]));
    return bF;
  }), "16": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[8] = bE;
    return bF;
  }), "17": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[8] = globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => globalThis.OCamlRuntime.caml_trampoline_return(bE, [{ $tag: 0, "0": bF[0], "1": 0, "2": bG, "3": bH }]));
    return bF;
  }), "18": globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    bF[9] = bE;
    return bF;
  }), "19": globalThis.OCamlRuntime.caml_closure(1, (bE) => GetOrLoadTemplate("todomvc-todoitem", globalThis.OCamlRuntime.caml_apply(globalThis.OCamlRuntime.caml_closure(1, (bF) => bF ? Some(bF[0]) : null), [0]), globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, () => ParseHTMLIntoFakeRoot(H))), globalThis.OCamlRuntime.caml_list_to_array({ $tag: 0, "0": new a57("itemclass", bE[1]), "1": { $tag: 0, "0": new a50("toggleattr", bE[2]), "1": { $tag: 0, "0": new a51("toggle", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bF, bG) => globalThis.OCamlRuntime.caml_trampoline_return(bE[3], [bF, bG])))), "1": { $tag: 0, "0": new a51("editstart", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bF, bG) => globalThis.OCamlRuntime.caml_trampoline_return(bE[4], [bF, bG])))), "1": { $tag: 0, "0": new a57("title", bE[5]), "1": { $tag: 0, "0": new a51("destroy", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bF, bG) => globalThis.OCamlRuntime.caml_trampoline_return(bE[6], [bF, bG])))), "1": { $tag: 0, "0": new a56("edittext", bE[0][0]), "1": { $tag: 0, "0": new a51("editcommit", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bF, bG) => globalThis.OCamlRuntime.caml_trampoline_return(bE[7], [bF, bG])))), "1": { $tag: 0, "0": new a51("editkey", globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bF, bG) => globalThis.OCamlRuntime.caml_trampoline_return(bE[8], [bF, bG])))), "1": { $tag: 0, "0": new a53("editfocus", globalThis.OCamlRuntime.caml_to_js(bE[9])), "1": 0 } } } } } } } } } }))) };
  var J = { $tag: 0, "0": b, "1": 0, "2": c, "3": d, "4": e, "5": f, "6": g, "7": h, "8": i, "9": j, "10": k, "11": l, "12": m, "13": n, "14": o, "15": p, "16": q, "17": r, "18": s5, "19": t, "20": u, "21": v, "22": w, "23": x, "24": y, "25": z, "26": A, "27": B2, "28": C, "29": D, "30": E, "31": F, "32": G, "33": I };
  var K = "todos-ocaml";
  var L = globalThis.OCamlRuntime.caml_closure(1, () => globalThis.localStorage);
  var M = globalThis.OCamlRuntime.caml_closure(1, () => {
    let bE;
    try {
      return globalThis.OCamlRuntime.jsonDecode('{"k":"list","e":{"k":"named","id":"Main.todo"}}', globalThis.OCamlRuntime.caml_apply(L, [0]).getItem(K));
    } catch (bF) {
      if (bF.$ocamlExit !== void 0)
        throw bF;
      else
        return 0;
    }
  });
  var N = globalThis.OCamlRuntime.caml_closure(1, (bE) => globalThis.OCamlRuntime.caml_apply(L, [0]).setItem(K, globalThis.OCamlRuntime.jsonEncode('{"k":"list","e":{"k":"named","id":"Main.todo"}}', bE)));
  var O = Create4(globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (bE) => bE[0])), globalThis.OCamlRuntime.caml_list_to_array(globalThis.OCamlRuntime.caml_apply(M, [0])));
  var P = WebSharper_UI_Var_default.Create_1(0);
  var Q = globalThis.OCamlRuntime.caml_closure(1, () => {
    const bE = { $tag: 0, "0": 0 };
    O.Iter(globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (bF) => bE[0] = { $tag: 0, "0": bF, "1": bE[0] })));
    return globalThis.OCamlRuntime.caml_trampoline_return(Stdlib_List_default[10], [bE[0]]);
  });
  var R = globalThis.OCamlRuntime.caml_closure(1, () => globalThis.OCamlRuntime.caml_trampoline_return(N, [globalThis.OCamlRuntime.caml_apply(Q, [0])]));
  var S = Map4(globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (bE) => globalThis.OCamlRuntime.caml_trampoline_return(Stdlib_Array_default[9], [bE]))), O.u0076ar.View);
  var T = InstallHash(0, Table(globalThis.OCamlRuntime.caml_list_to_array({ $tag: 0, "0": { $tag: 0, "0": 0, "1": "" }, "1": { $tag: 0, "0": { $tag: 0, "0": 1, "1": "active" }, "1": { $tag: 0, "0": { $tag: 0, "0": 2, "1": "completed" }, "1": 0 } } })));
  var U = Map32((bE, bF, bG) => globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(3, (bH, bI, bJ) => ({ $tag: 0, "0": bH, "1": bI, "2": bJ })))(bE)(bF)(bG), S, P.View, T.View);
  var V = globalThis.OCamlRuntime.caml_closure(1, (bE) => globalThis.OCamlRuntime.caml_string_equal(bE.key, "Enter") || ((bE.keyCode === 13 ? 1 : 0) || (bE.which === 13 ? 1 : 0)));
  var W = globalThis.OCamlRuntime.caml_closure(1, (bE) => globalThis.OCamlRuntime.caml_string_equal(bE.key, "Escape") || (globalThis.OCamlRuntime.caml_string_equal(bE.key, "Esc") || ((bE.keyCode === 27 ? 1 : 0) || (bE.which === 27 ? 1 : 0))));
  var X = globalThis.OCamlRuntime.caml_closure(1, (bE) => bE.focus());
  var Y = globalThis.OCamlRuntime.caml_closure(1, (bE) => {
    let bF;
    const bG = globalThis.OCamlRuntime.caml_apply(Stdlib_String_default[23], [bE.Get()]);
    if (globalThis.OCamlRuntime.caml_string_notequal(bG, "")) {
      const bH = globalThis.OCamlRuntime.caml_apply(Stdlib_List_default[26], [globalThis.OCamlRuntime.caml_closure(2, (bI, bJ) => globalThis.OCamlRuntime.caml_trampoline_return(Stdlib_default[16], [bI, bJ[0]])), 0, globalThis.OCamlRuntime.caml_apply(Q, [0])]) + 1;
      bE.Set("");
      O.Append({ $tag: 0, "0": bH, "1": bG, "2": 0 });
      return globalThis.OCamlRuntime.caml_trampoline_return(R, [0]);
    } else
      return 0;
  });
  var Z = globalThis.OCamlRuntime.caml_closure(1, (bE) => {
    O.UpdateBy(globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (bF) => Some({ $tag: 0, "0": bF[0], "1": bF[1], "2": bF[2] ? 0 : 1 }))), bE);
    return globalThis.OCamlRuntime.caml_trampoline_return(R, [0]);
  });
  var u0030 = globalThis.OCamlRuntime.caml_closure(1, (bE) => {
    O.RemoveByKey(bE);
    return globalThis.OCamlRuntime.caml_trampoline_return(R, [0]);
  });
  var u0031 = globalThis.OCamlRuntime.caml_closure(1, () => {
    O.RemoveBy(globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (bE) => bE[2])));
    return globalThis.OCamlRuntime.caml_trampoline_return(R, [0]);
  });
  var u0032 = globalThis.OCamlRuntime.caml_closure(1, () => {
    const bE = globalThis.OCamlRuntime.caml_apply(Q, [0]);
    const bF = (bE !== 0 ? 1 : 0) && globalThis.OCamlRuntime.caml_apply(Stdlib_List_default[33], [globalThis.OCamlRuntime.caml_closure(1, (bG) => bG[2]), bE]) ? 0 : 1;
    O.UpdateAll(globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (bG) => Some({ $tag: 0, "0": bG[0], "1": bG[1], "2": bF }))));
    return globalThis.OCamlRuntime.caml_trampoline_return(R, [0]);
  });
  var u0033 = globalThis.OCamlRuntime.caml_closure(1, (bE) => P.Set({ $tag: 0, "0": bE }));
  var u0034 = globalThis.OCamlRuntime.caml_closure(1, () => P.Set(0));
  var u0035 = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    let bG;
    const bH = P.Get();
    try {
      let bI, bJ;
      if (bH) {
        if (bH[0] === bE ? 1 : 0) {
          const bK = globalThis.OCamlRuntime.caml_apply(Stdlib_String_default[23], [bF.Get()]);
          if (globalThis.OCamlRuntime.caml_string_equal(bK, ""))
            O.RemoveByKey(bE);
          else
            O.UpdateBy(globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (bL) => Some({ $tag: 0, "0": bL[0], "1": bK, "2": bL[2] }))), bE);
          globalThis.OCamlRuntime.caml_apply(R, [0]);
          return P.Set(0);
        } else
          throw { $ocamlExit: 222, $ocamlArgs: [] };
      } else
        throw { $ocamlExit: 222, $ocamlArgs: [] };
    } catch (bL) {
      if (bL.$ocamlExit === 222)
        return 0;
      else
        throw bL;
    }
  });
  var u0036 = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    const bG = globalThis.OCamlRuntime.caml_equal(bE, { $tag: 0, "0": bF[0] });
    const bH = globalThis.OCamlRuntime.caml_apply(J[33][2], [0]);
    bH[0][0].Set(bF[1]);
    return globalThis.OCamlRuntime.caml_trampoline_return(J[33][19], [globalThis.OCamlRuntime.caml_apply(J[33][17], [globalThis.OCamlRuntime.caml_closure(1, (bI) => globalThis.OCamlRuntime.caml_apply(V, [bI[3]]) ? globalThis.OCamlRuntime.caml_trampoline_return(u0035, [bF[0], bI[0][0]]) : globalThis.OCamlRuntime.caml_apply(W, [bI[3]]) ? globalThis.OCamlRuntime.caml_trampoline_return(u0034, [0]) : 0), globalThis.OCamlRuntime.caml_apply(J[33][15], [globalThis.OCamlRuntime.caml_closure(1, (bI) => globalThis.OCamlRuntime.caml_trampoline_return(u0035, [bF[0], bI[0][0]])), globalThis.OCamlRuntime.caml_apply(J[33][12], [globalThis.OCamlRuntime.caml_closure(2, () => globalThis.OCamlRuntime.caml_trampoline_return(u0030, [bF[0]])), globalThis.OCamlRuntime.caml_apply(J[33][8], [globalThis.OCamlRuntime.caml_closure(2, () => globalThis.OCamlRuntime.caml_trampoline_return(u0033, [bF[0]])), globalThis.OCamlRuntime.caml_apply(J[33][6], [globalThis.OCamlRuntime.caml_closure(2, () => globalThis.OCamlRuntime.caml_trampoline_return(Z, [bF[0]])), globalThis.OCamlRuntime.caml_apply(J[33][5], [bF[2] ? a28.Create("checked", "checked") : EmptyAttr(), globalThis.OCamlRuntime.caml_apply(J[33][10], [bF[1], globalThis.OCamlRuntime.caml_apply(J[33][3], [globalThis.OCamlRuntime.caml_apply(Stdlib_default[27], [bF[2] ? "completed " : "", bG ? "editing" : ""]), bH])])])])])])])])]);
  });
  var u0037 = Map22((bE, bF) => globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(2, (bG, bH) => ({ $tag: 0, "0": bG, "1": bH })))(bE)(bF), U, MapSeqCachedBy(globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (bE) => ({ $tag: 0, "0": bE[0], "1": bE[1], "2": bE[2] }))), globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (bE) => ({ $tag: 0, "0": bE, "1": globalThis.OCamlRuntime.caml_apply(u0036, [0, bE]) }))), O.v));
  var u0038 = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => {
    const bG = bE[2];
    return bG === 0 ? 1 : bG === 1 ? bF[2] ? 0 : 1 : bG === 2 ? bF[2] : void 0;
  });
  var u0039 = globalThis.OCamlRuntime.caml_closure(1, (bE) => globalThis.OCamlRuntime.caml_trampoline_return(Stdlib_List_default[0], [globalThis.OCamlRuntime.caml_apply(Stdlib_List_default[44], [globalThis.OCamlRuntime.caml_closure(1, (bF) => bF[2] ? 0 : 1), bE[0]])]));
  var $ = globalThis.OCamlRuntime.caml_closure(2, (bE, bF) => (bE === bF[2] ? 1 : 0) ? "selected" : "");
  var ba = globalThis.OCamlRuntime.caml_closure(1, (bE) => bE ? "hidden" : "");
  var bb = globalThis.OCamlRuntime.caml_closure(1, (bE) => Map4(globalThis.OCamlRuntime.caml_to_js(bE), U));
  var bc = { $tag: 0, "0": globalThis.OCamlRuntime.caml_apply(Q, [0]), "1": P.Get(), "2": T.Get() };
  var bd = globalThis.OCamlRuntime.caml_apply(J[32], [globalThis.OCamlRuntime.caml_apply(J[29], [globalThis.OCamlRuntime.caml_closure(2, () => globalThis.OCamlRuntime.caml_trampoline_return(u0031, [0])), globalThis.OCamlRuntime.caml_apply(J[28], [globalThis.OCamlRuntime.caml_apply(bb, [globalThis.OCamlRuntime.caml_closure(1, (bE) => globalThis.OCamlRuntime.caml_trampoline_return(ba, [globalThis.OCamlRuntime.caml_apply(Stdlib_List_default[0], [bE[0]]) === globalThis.OCamlRuntime.caml_apply(u0039, [bE]) ? 1 : 0]))]), globalThis.OCamlRuntime.caml_apply(J[24], [globalThis.OCamlRuntime.caml_apply(bb, [globalThis.OCamlRuntime.caml_apply($, [2])]), globalThis.OCamlRuntime.caml_apply(J[20], [globalThis.OCamlRuntime.caml_apply(bb, [globalThis.OCamlRuntime.caml_apply($, [1])]), globalThis.OCamlRuntime.caml_apply(J[16], [globalThis.OCamlRuntime.caml_apply(bb, [globalThis.OCamlRuntime.caml_apply($, [0])]), globalThis.OCamlRuntime.caml_apply(J[14], [WebSharper_UI_Doc_default.BindView(globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (bE) => {
    const bF = globalThis.OCamlRuntime.caml_apply(u0039, [bE]);
    return WebSharper_UI_Doc_default.Concat(globalThis.OCamlRuntime.caml_list_to_array({ $tag: 0, "0": WebSharper_UI_Doc_default.Element("strong", globalThis.OCamlRuntime.caml_list_to_array(0), globalThis.OCamlRuntime.caml_list_to_array({ $tag: 0, "0": WebSharper_UI_Doc_default.TextNode(globalThis.OCamlRuntime.caml_apply(Stdlib_default[32], [bF])), "1": 0 })), "1": { $tag: 0, "0": WebSharper_UI_Doc_default.TextNode(globalThis.OCamlRuntime.caml_apply(Stdlib_default[27], [" ", globalThis.OCamlRuntime.caml_apply(Stdlib_default[27], [(bF === 1 ? 1 : 0) ? "item" : "items", " left"])])), "1": 0 } }));
  })), U), globalThis.OCamlRuntime.caml_apply(J[11], [WebSharper_UI_Doc_default.BindView(globalThis.OCamlRuntime.caml_to_js(globalThis.OCamlRuntime.caml_closure(1, (bE) => {
    const bF = bE[0];
    return WebSharper_UI_Doc_default.Concat(globalThis.OCamlRuntime.caml_list_to_array(globalThis.OCamlRuntime.caml_apply(Stdlib_List_default[23], [globalThis.OCamlRuntime.caml_closure(1, (bG) => {
      const bH = bG[0];
      return (globalThis.OCamlRuntime.caml_apply(u0038, [bF, bH]) ? 0 : 1) ? 0 : globalThis.OCamlRuntime.caml_equal(bF[1], { $tag: 0, "0": bH[0] }) ? { $tag: 0, "0": globalThis.OCamlRuntime.caml_apply(u0036, [bF[1], bH]) } : { $tag: 0, "0": bG[1] };
    }), globalThis.OCamlRuntime.caml_apply(Stdlib_List_default[69], [bE[1]])])));
  })), u0037), globalThis.OCamlRuntime.caml_apply(J[9], [globalThis.OCamlRuntime.caml_closure(2, () => globalThis.OCamlRuntime.caml_trampoline_return(u0032, [0])), globalThis.OCamlRuntime.caml_apply(J[8], [(bc[0] !== 0 ? 1 : 0) && (globalThis.OCamlRuntime.caml_apply(u0039, [bc]) === 0 ? 1 : 0) ? a28.Create("checked", "checked") : EmptyAttr(), globalThis.OCamlRuntime.caml_apply(J[13], [globalThis.OCamlRuntime.caml_apply(bb, [globalThis.OCamlRuntime.caml_closure(1, (bE) => globalThis.OCamlRuntime.caml_trampoline_return(ba, [bE[0] === 0 ? 1 : 0]))]), globalThis.OCamlRuntime.caml_apply(J[7], [globalThis.OCamlRuntime.caml_apply(bb, [globalThis.OCamlRuntime.caml_closure(1, (bE) => globalThis.OCamlRuntime.caml_trampoline_return(ba, [bE[0] === 0 ? 1 : 0]))]), globalThis.OCamlRuntime.caml_apply(J[5], [X, globalThis.OCamlRuntime.caml_apply(J[4], [globalThis.OCamlRuntime.caml_closure(1, (bE) => globalThis.OCamlRuntime.caml_apply(V, [bE[3]]) ? (globalThis.OCamlRuntime.caml_apply(Y, [bE[0][0]]), bE[0][0].Set("")) : 0), globalThis.OCamlRuntime.caml_apply(J[2], [0])])])])])])])])])])])])])])]);
  a66 = { $tag: 0, "0": J, "1": void 0 };
  var Main_default = a66;
})();
