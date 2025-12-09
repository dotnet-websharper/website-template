export { default as Runtime } from "../WebSharper.Core.JavaScript/Runtime.js"
import { MarkResizable, SetOptional, Lazy, Create as Create_1, GetOptional, CreateFuncWithArgs, DeleteEmptyFields } from "../WebSharper.Core.JavaScript/Runtime.js"
import sweetalert2 from "sweetalert2"
function isIDisposable(x){
  return"Dispose"in x;
}
export function Layout(){
  Init();
  const B=BtnLogoutAttr();
  const B_1=BtnLoginAttr();
  const B_2=BtnManageAttr();
  const H=HeaderAttr();
  const B_3=BtnLogoutAttr();
  const B_4=BtnLoginAttr();
  const B_5=BtnManageAttr();
  const H_1=HeaderAttr();
  const S=SkeletonAttr();
  const I=IconAttr();
  const A=AvatarAttr();
  const A_1=AvatarAttr();
  const A_2=AccountBtnAria();
  const D=DropdownAttr();
  const t=new ProviderBuilder("New_1");
  const t_1=(t.h.push(EventQ2(t.k, "togglemenu", () => t.i, () => {
    ToggleMenu();
  })),t);
  const t_2=(t_1.h.push(EventQ2(t_1.k, "toggletheme", () => t_1.i, () => {
    Toggle();
  })),t_1);
  const t_3=(t_2.h.push(EventQ2(t_2.k, "onkeydown", () => t_2.i, (e) => {
    CloseOnEscape(e);
  })),t_2);
  const t_4=(t_3.h.push(EventQ2(t_3.k, "onstoppropagation", () => t_3.i, (e) => {
    StopPropagation(e);
  })),t_3);
  const t_5=(t_4.h.push(EventQ2(t_4.k, "closeonbackgroundclick", () => t_4.i, (_1) => {
    CloseOnBackgroundClick(_1);
  })),t_4);
  const t_6=(t_5.h.push(EventQ2(t_5.k, "accountbtnclick", () => t_5.i, (_1) => {
    AccountBtnClick(_1);
  })),t_5);
  const t_7=(t_6.h.push(EventQ2(t_6.k, "accountbtnkeydown", () => t_6.i, () => { })),t_6);
  const t_8=(t_7.h.push(EventQ2(t_7.k, "login", () => t_7.i, () => {
    Login();
  })),t_7);
  const this_1=(t_8.h.push(EventQ2(t_8.k, "logout", () => t_8.i, (_1) => {
    Logout(_1);
  })),t_8);
  const this_2=(this_1.h.push(new Attribute("dropdownattr", D)),this_1);
  const this_3=(this_2.h.push(new Attribute("accountbtnaria", A_2)),this_2);
  const this_4=(this_3.h.push(new Attribute("avatarattr", A_1)),this_3);
  const this_5=(this_4.h.push(new Attribute("avatarattrhamburger", A)),this_4);
  const this_6=(this_5.h.push(new Attribute("iconattr", I)),this_5);
  const this_7=(this_6.h.push(new Attribute("skeletonattr", S)),this_6);
  const this_8=(this_7.h.push(new TextView("accountheadertext", AccountHeaderText())),this_7);
  const this_9=(this_8.h.push(new Attribute("headerattrd", H_1)),this_8);
  const this_10=(this_9.h.push(new Attribute("btnmanageattrd", B_5)),this_9);
  const this_11=(this_10.h.push(new Attribute("btnloginattrd", B_4)),this_10);
  const this_12=(this_11.h.push(new Attribute("btnlogoutattrd", B_3)),this_11);
  const this_13=(this_12.h.push(new Attribute("headerattr", H)),this_12);
  const this_14=(this_13.h.push(new Attribute("btnmanageattr", B_2)),this_13);
  const this_15=(this_14.h.push(new Attribute("btnloginattr", B_1)),this_14);
  const builder=(this_15.h.push(new Attribute("btnlogoutattr", B)),this_15);
  const p=CompleteHoles(builder.k, builder.h, []);
  builder.i=new TemplateInstance(p[1], RunFullDocTemplate(p[0]));
  InitGlobal();
  return Doc.Empty;
}
export function Checkout(){
  return CheckoutDoc();
}
function ToggleMenu(){
  const navmenu=byId("navmenu");
  const openIcon=byId("openIcon");
  const closeIcon=byId("closeIcon");
  const bodyEl=globalThis.document.body;
  navmenu.classList.toggle("h-screen");
  openIcon.classList.toggle("hidden-open-icon");
  closeIcon.classList.toggle("visible-close-icon");
  bodyEl.classList.toggle("overflow-hidden");
}
function Init(){
  updateAllIframesTheme();
  const saved=globalThis.localStorage.getItem("color-theme");
  if(saved=="dark"||saved==null&&prefersDark())setDark(true);
  else setDark(false);
}
function Toggle(){
  applyTheme(currentTheme()=="dark"?"light":"dark");
}
function updateAllIframesTheme(){
  const theme=currentTheme();
  const nodes=globalThis.document.querySelectorAll(".themed-iframe");
  for(let i=0, _1=toInt(nodes.length)-1;i<=_1;i++){
    const el=nodes[i];
    const baseSrc=el.getAttribute("data-src");
    if(!(baseSrc==null)){
      const url=new URL(baseSrc, globalThis.location.href);
      url.searchParams.set("theme", theme);
      el.setAttribute("src", String(url));
    }
    else void 0;
  }
}
function prefersDark(){
  return globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
}
function setDark(on){
  on?rootEl().classList.add("dark"):rootEl().classList.remove("dark");
}
function applyTheme(theme){
  setDark(theme=="dark");
  globalThis.localStorage.setItem("color-theme", theme);
  updateAllIframesTheme();
}
function currentTheme(){
  return rootEl().classList.contains("dark")?"dark":"light";
}
function rootEl(){
  return globalThis.document.documentElement;
}
function get(arr, n){
  checkBounds(arr, n);
  return arr[n];
}
function length(arr){
  return arr.dims===2?arr.length*arr.length:arr.length;
}
function checkBounds(arr, n){
  if(n<0||n>=arr.length)FailWith("Index was outside the bounds of the array.");
}
function set(arr, n, x){
  checkBounds(arr, n);
  arr[n]=x;
}
function toInt(x){
  const u=toUInt(x);
  return u>2147483647?u-4294967296:u;
}
function FailWith(msg){
  throw new Error(msg);
}
function toUInt(x){
  return(x<0?Math.ceil(x):Math.floor(x))>>>0;
}
function KeyValue(kvp){
  return[kvp.K, kvp.V];
}
function range(min, max_1){
  const count=1+max_1-min;
  return count<=0?[]:init(count, (x) => x+min);
}
class Object_1 {
  Equals(obj){
    return this===obj;
  }
  GetHashCode(){
    return -1;
  }
}
class ProviderBuilder extends Object_1 {
  i;
  k;
  h;
  s;
  constructor(i){
    if(i=="New_1"){
      let c;
      super();
      this.i=null;
      this.k=(c=NewGuid(),String(c));
      this.h=MarkResizable([]);
      SetOptional(this, "s", null);
    }
  }
}
function AccountHeaderText(){
  return _c.AccountHeaderText;
}
function CloseOnEscape(e){
  if(e.Event.key=="Escape")isOpen().Set(false);
}
function StopPropagation(e){
  e.Event.stopPropagation();
}
function CloseOnBackgroundClick(){
  if(isOpen().Get())isOpen().Set(false);
}
function AccountBtnClick(){
  isOpen().Set(!isOpen().Get());
}
function Logout(){
  StartImmediate(Delay(() => {
    isOpen().Set(false);
    return Bind_1(Logout_1(true), () => Return(null));
  }), null);
}
function DropdownAttr(){
  return DynamicClassPred("hidden", Map((v) =>!v, isOpen().View));
}
function AccountBtnAria(){
  return Dynamic("aria-expanded", Map((b) => b?"true":"false", isOpen().View));
}
function AvatarAttr(){
  return Attr.Concat([Dynamic("src", avatarSrcV()), DynamicClassPred("hidden", Map((v) =>!v, hasAvatarV())), DynamicClassPred("opacity-0", isLoading().View)]);
}
function IconAttr(){
  return Attr.Concat([DynamicClassPred("hidden", hasAvatarV()), DynamicClassPred("opacity-0", isLoading().View)]);
}
function SkeletonAttr(){
  return DynamicClassPred("opacity-0 hidden", Map((v) =>!v, isLoading().View));
}
function HeaderAttr(){
  return showAsFlex(isAuthedV());
}
function BtnManageAttr(){
  return showAsFlex(isAuthedV());
}
function BtnLoginAttr(){
  return showAsFlex(Map((v) =>!v, isAuthedV()));
}
function BtnLogoutAttr(){
  return showAsFlex(isAuthedV());
}
function InitGlobal(){
  StartImmediate(Delay(() => {
    isLoading().Set(true);
    return Bind_1(FetchMe(), () => Bind_1(Sleep(500), () => {
      isLoading().Set(false);
      return Zero();
    }));
  }), null);
}
function isOpen(){
  return _c.isOpen;
}
function avatarSrcV(){
  return _c.avatarSrcV;
}
function hasAvatarV(){
  return _c.hasAvatarV;
}
function isLoading(){
  return _c.isLoading;
}
function showAsFlex(showV){
  return Attr.Concat([DynamicClassPred("hidden", Map((v) =>!v, showV)), DynamicClassPred("flex", showV)]);
}
function isAuthedV(){
  return _c.isAuthedV;
}
function userV(){
  return _c.userV;
}
function displayNameV(){
  return _c.displayNameV;
}
function EventQ2(_1, holeName, ti, f){
  return new EventQ(holeName, "", (el) =>(ev) => {
    const i=ti();
    i.SetAnchorRoot(el);
    return f({
      Vars:i, 
      Anchors:i, 
      Target:el, 
      Event:ev
    });
  });
}
function CompleteHoles(key, filledHoles, vars){
  const allVars=new Dictionary("New_5");
  const filledVars=new HashSet("New_3");
  const e=Get(filledHoles);
  try {
    while(e.MoveNext())
      {
        const h=e.Current;
        const n=h.Name;
        filledVars.SAdd(n);
        allVars.set_Item(n, h);
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return[append(filledHoles, choose((_2) => {
    const name=_2[0];
    const ty=_2[1];
    const d=_2[2];
    if(filledVars.Contains(name))return null;
    else {
      const r=ty===0?_c_8.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?"":o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarStr(name, _4);
      }):ty===1?_c_8.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?0:o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarFloatUnchecked(name, _4);
      }):ty===2?_c_8.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?false:o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarBool(name, _4);
      }):ty===3?_c_8.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?-8640000000000000:o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarDateTime(name, _4);
      }):ty===4?_c_8.GetOrAddHoleFor(key, name, () => new VarFile(name, _c_1.Create_1([]))):ty===5?_c_8.GetOrAddHoleFor(key, name, () => new VarDomElement(name, _c_1.Create_1(Some(globalThis.document.querySelector("[ws-dom="+name+"]"))))):ty===6?_c_8.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?[]:o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarStrList(name, _4);
      }):FailWith("Invalid kind for template Var type: "+String(ty));
      allVars.set_Item(name, r);
      return Some(r);
    }
  }, vars)), {$:0, $0:allVars}];
}
function Login(){
  globalThis.location.href=BuildStartUrl();
}
function BuildStartUrl(){
  return BuildStartUrlWithReturn(globalThis.location.pathname+globalThis.location.search);
}
function Logout_1(reload){
  return Delay(() => Combine(TryWith(Delay(() => Bind_1(Logout_2(), () => Return(null))), (a) => {
    console.error("AuthClient.Logout RPC failed", a);
    return Zero();
  }), Delay(() => {
    userVar().Set(null);
    return reload?TryWith(Delay(() => {
      globalThis.location.reload();
      return Zero();
    }), () => Zero()):Zero();
  })));
}
function FetchMe(){
  return Delay(() => {
    const m=userVar().Get();
    return m!=null&&m.$==1?Return(Some(m.$0)):(isFetchingVar().Set(true),TryFinally(Delay(() => TryWith(Delay(() => Bind_1(Me(), (a) => {
      userVar().Set(a);
      return Return(a);
    })), (a) => {
      console.error("AuthClient.FetchMe RPC failed", a);
      userVar().Set(null);
      return Return(null);
    })), () => {
      isFetchingVar().Set(false);
    }));
  });
}
function IsAuthedView(){
  return _c_4.IsAuthedView;
}
function UserView(){
  return _c_4.UserView;
}
function BuildStartUrlWithReturn(returnUrl){
  return"https://api.websharper.io/auth/github/start?returnUrl="+encodeURIComponent(returnUrl);
}
function userVar(){
  return _c_4.userVar;
}
function isFetchingVar(){
  return _c_4.isFetchingVar;
}
class Doc extends Object_1 {
  docNode;
  updates;
  static get Empty(){
    return Doc.Mk(null, Const());
  }
  static Mk(node, updates){
    return new Doc(node, updates);
  }
  static Concat(xs){
    return TreeReduce(Doc.Empty, Doc.Append, ofSeqNonCopying(xs));
  }
  static TextView(txt){
    const node=CreateTextNode();
    return Doc.Mk(TextDoc(node), Map((t) => {
      UpdateTextNode(node, t);
    }, txt));
  }
  static EmbedView(view){
    const node=CreateEmbedNode();
    return Doc.Mk(EmbedDoc(node), Map(() => { }, Bind((doc) => {
      UpdateEmbedNode(node, doc.docNode);
      return doc.updates;
    }, view)));
  }
  static RunBefore(rdelim, doc){
    const ldelim=globalThis.document.createTextNode("");
    rdelim.parentNode.insertBefore(ldelim, rdelim);
    Doc.RunBetween(ldelim, rdelim, doc);
  }
  static Append(a, b){
    return Doc.Mk(AppendDoc(a.docNode, b.docNode), Map2Unit(a.updates, b.updates));
  }
  static TextNode(v){
    return Doc.Mk(TextNodeDoc(globalThis.document.createTextNode(v)), Const());
  }
  static RunBetween(ldelim, rdelim, doc){
    LinkPrevElement(rdelim, doc.docNode);
    const st=CreateDelimitedRunState(ldelim, rdelim, doc.docNode);
    Sink(get_UseAnimations()||BatchUpdatesEnabled()?StartProcessor(PerformAnimatedUpdate(false, st, doc.docNode)):() => {
      PerformSyncUpdate(false, st, doc.docNode);
    }, doc.updates);
  }
  static RunInPlace(childrenOnly, parent, doc){
    const st=CreateRunState(parent, doc.docNode);
    Sink(get_UseAnimations()||BatchUpdatesEnabled()?StartProcessor(PerformAnimatedUpdate(childrenOnly, st, doc.docNode)):() => {
      PerformSyncUpdate(childrenOnly, st, doc.docNode);
    }, doc.updates);
  }
  static BindView(f, view){
    return Doc.EmbedView(Map(f, view));
  }
  static Element(name, attr_1, children){
    const a=Attr.Concat(attr_1);
    const c=Doc.Concat(children);
    return Elt_1.New(globalThis.document.createElement(name), a, c);
  }
  ReplaceInDom(elt){
    const rdelim=globalThis.document.createTextNode("");
    elt.parentNode.replaceChild(rdelim, elt);
    Doc.RunBefore(rdelim, this);
  }
  constructor(docNode, updates){
    super();
    this.docNode=docNode;
    this.updates=updates;
  }
}
function CheckoutDoc(){
  const x=Doc.TextView(Total());
  const T_1=BindSmoothLoader(Const("w-14 h-6"), "justify-end", x);
  const x_1=Doc.TextView(Taxes());
  const T_2=BindSmoothLoader(Const("w-14 h-6"), "justify-end", x_1);
  const x_2=Doc.TextView(Subtotal());
  const S=BindSmoothLoader(Const("w-14 h-6"), "justify-end", x_2);
  const x_3=Doc.TextView(PriceHint());
  const P=BindSmoothLoader(Const("w-64 h-4"), "", x_3);
  const x_4=Doc.TextView(PlanInterval());
  const P_1=BindSmoothLoader(Const("w-12 h-5"), "", x_4);
  const x_5=Doc.TextView(PlanPrice());
  const P_2=BindSmoothLoader(Const("w-24 h-8"), "", x_5);
  const x_6=Doc.TextView(PlanName());
  const P_3=BindSmoothLoader(Const("w-64 h-6"), "", x_6);
  const x_7=Doc.TextView(BackLinkLabel().View);
  const B=BindSmoothLoader(Map((s) => s.indexOf("Manage")!=-1?"w-40 h-5 !align-middle":"w-12 h-5 !align-middle", BackLinkLabel().View), "", x_7);
  const S_1=SeatSelectorAttr();
  const R=Doc.EmbedView(Map2((_2, _3) => {
    if(_2){
      const b_1=new ProviderBuilder("New_1");
      const p_1=CompleteHoles(b_1.k, b_1.h, []);
      const i_1=new TemplateInstance(p_1[1], rightskeleton(p_1[0]));
      let _4=(b_1.i=i_1,i_1);
      return _4.Doc;
    }
    else if(!_3){
      const t_2=new ProviderBuilder("New_1");
      const b_2=(t_2.h.push(EventQ2(t_2.k, "ongithublogin", () => t_2.i, () => {
        Login();
      })),t_2);
      const p_2=CompleteHoles(b_2.k, b_2.h, []);
      const i_2=new TemplateInstance(p_2[1], authform(p_2[0]));
      let _5=(b_2.i=i_2,i_2);
      return _5.Doc;
    }
    else {
      const C=Doc.TextView(ContinueText().View);
      const C_1=ContinueButtonAttr();
      const V=VatinAttr();
      const C_2=CompanyNameAttr();
      const C_3=CompanyBlockAttr();
      const C_4=CountryOptionsDoc();
      const this_14=new ProviderBuilder("New_1");
      const this_15=(this_14.h.push(new VarStr("email", EmailVar())),this_14);
      const this_16=(this_15.h.push(new VarStr("street", StreetVar())),this_15);
      const this_17=(this_16.h.push(new VarStr("city", CityVar())),this_16);
      const this_18=(this_17.h.push(new VarStr("postal", PostalVar())),this_17);
      const this_19=(this_18.h.push(new VarStr("country", CountryVar())),this_18);
      const this_20=(this_19.h.push(new Elt("countryoptions", Doc.Concat(C_4))),this_19);
      const this_21=(this_20.h.push(new VarBool("iscompany", IsCompanyVar())),this_20);
      const this_22=(this_21.h.push(new Attribute("companyblockattr", C_3)),this_21);
      const this_23=(this_22.h.push(new VarStr("companyname", CompanyNameVar())),this_22);
      const this_24=(this_23.h.push(new Attribute("companynameattr", C_2)),this_23);
      const this_25=(this_24.h.push(new VarStr("vatin", VatinVar())),this_24);
      const this_26=(this_25.h.push(new Attribute("vatinattr", V)),this_25);
      const this_27=(this_26.h.push(new Elt("formerrordoc", FormErrorDoc())),this_26);
      const this_28=(this_27.h.push(new Attribute("continuebuttonattr", C_1)),this_27);
      const t_3=(this_28.h.push(new Elt("continuetext", C)),this_28);
      const b_3=(t_3.h.push(EventQ2(t_3.k, "oncontinueclick", () => t_3.i, () => {
        OnContinueClick();
      })),t_3);
      const p_3=CompleteHoles(b_3.k, b_3.h, [["email", 0, null], ["street", 0, null], ["city", 0, null], ["postal", 0, null], ["country", 0, null], ["iscompany", 2, null], ["companyname", 0, null], ["vatin", 0, null]]);
      const i_3=new TemplateInstance(p_3[1], paymentform(p_3[0]));
      let _6=(b_3.i=i_3,i_3);
      return _6.Doc;
    }
  }, IsLoading().View, IsAuthedView()));
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new AfterRenderQ("onafterrender", "", () => {
    OnAfterRender();
  })),this_1);
  const this_3=(this_2.h.push(new Attribute("backlinkattr", BackLinkAttr())),this_2);
  const this_4=(this_3.h.push(new Elt("rightsidecontent", R)),this_3);
  const this_5=(this_4.h.push(new Attribute("seatselectorattr", S_1)),this_4);
  const t=(this_5.h.push(new VarStr("seatstext", SeatsTextVar())),this_5);
  const t_1=(t.h.push(EventQ2(t.k, "onseatminus", () => t.i, () => {
    OnSeatMinus();
  })),t);
  const this_6=(t_1.h.push(EventQ2(t_1.k, "onseatplus", () => t_1.i, () => {
    OnSeatPlus();
  })),t_1);
  const this_7=(this_6.h.push(new Elt("backlinklabel", B)),this_6);
  const this_8=(this_7.h.push(new Elt("planname", P_3)),this_7);
  const this_9=(this_8.h.push(new Elt("planprice", P_2)),this_8);
  const this_10=(this_9.h.push(new Elt("planinterval", P_1)),this_9);
  const this_11=(this_10.h.push(new Elt("pricehint", P)),this_10);
  const this_12=(this_11.h.push(new Elt("subtotal", S)),this_11);
  const this_13=(this_12.h.push(new Elt("taxes", T_2)),this_12);
  const b=(this_13.h.push(new Elt("total", T_1)),this_13);
  const p=CompleteHoles(b.k, b.h, [["seatstext", 0, Some("1")]]);
  const i=new TemplateInstance(p[1], content_1(p[0]));
  let _1=(b.i=i,i);
  return _1.Doc;
}
function OnAfterRender(){
  resetContinueButton();
  computeBackLink();
  initFromQuery();
  StartImmediate(Delay(() => {
    IsLoading().Set(true);
    return Bind_1(Parallel([initFromApi(), ensurePlans()]), () => {
      IsLoading().Set(false);
      return Zero();
    });
  }), null);
}
function IsLoading(){
  return _c_5.IsLoading;
}
function BindSmoothLoader(widthHeightClass, justifyClass, actualContent){
  const C=ofArray([DynamicClassPred("opacity-0", IsLoading().View), DynamicClassPred("pointer-events-none", IsLoading().View), Class(justifyClass)]);
  const S=DynamicClassPred("opacity-0", Map((b_1) =>!b_1, IsLoading().View));
  const W=Map((w) =>"transition-all duration-300 ease-in-out "+w, widthHeightClass);
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new TextView("wrapperclasses", W)),this_1);
  const this_3=(this_2.h.push(new Attribute("skeletonattr", S)),this_2);
  const this_4=(this_3.h.push(new Attribute("contentattr", Attr.Concat(C))),this_3);
  const b=(this_4.h.push(new Elt("content", actualContent)),this_4);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], smoothtextloader(p[0]));
  let _1=(b.i=i,i);
  return _1.Doc;
}
function GetFieldValues(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push(o[k_1]);
  return r;
}
class TemplateInstance extends Object_1 {
  doc;
  allVars;
  anchorRoot;
  SetAnchorRoot(el){
    this.anchorRoot=el;
  }
  get Doc(){
    return this.doc;
  }
  Hole(name){
    return this.allVars.Item(name);
  }
  constructor(c, doc){
    super();
    this.doc=doc;
    this.allVars=c.$==0?c.$0:FailWith("Should not happen");
    this.anchorRoot=null;
  }
}
class TemplateHole extends Object_1 {
  ForTextView(){
    console.warn("Content hole filled with attribute data", this.Name);
    return null;
  }
  AddAttribute(a, a_1){
    console.warn("Var hole filled with non-Var data", this.Name);
  }
  get AsChoiceView(){
    console.warn("Attribute value hole filled with non-text data", this.Name);
    return Choice1Of2("");
  }
  ApplyVarHole(el){
    console.warn("Not a var hole: ", this.Name);
  }
}
class Attribute extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  get Value(){
    return this.fillWith;
  }
  WithName(n){
    return new Attribute(n, this.fillWith);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class TextView extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new TextView(n, this.fillWith);
  }
  ForTextView(){
    return Some(this.fillWith);
  }
  get AsChoiceView(){
    return Choice2Of2(this.fillWith);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
let _c=Lazy((_i) => class $StartupCode_AccountMenu {
  static {
    _c=_i(this);
  }
  static AccountHeaderText;
  static displayNameV;
  static hasAvatarV;
  static avatarSrcV;
  static isLoading;
  static isAuthedV;
  static userV;
  static isOpen;
  static {
    this.isOpen=_c_1.Create_1(false);
    this.userV=UserView();
    this.isAuthedV=IsAuthedView();
    this.isLoading=_c_1.Create_1(true);
    this.avatarSrcV=Map((a) => a!=null&&a.$==1?!IsNullOrWhiteSpace(a.$0.avatarUrl)?a.$0.avatarUrl:"":"", userV());
    this.hasAvatarV=Map((y) =>""!=y, avatarSrcV());
    this.displayNameV=Map((a) => a==null?"Account":!IsNullOrWhiteSpace(a.$0.login)?a.$0.login:"Account", userV());
    this.AccountHeaderText=displayNameV();
  }
});
function Equals(a, b){
  if(a===b)return true;
  else {
    const m=typeof a;
    if(m=="object"){
      if(a===null||a===void 0||b===null||b===void 0||!Equals(typeof b, "object"))return false;
      else if("Equals"in a)return a.Equals(b);
      else if("Equals"in b)return false;
      else if(a instanceof Array&&b instanceof Array)return arrayEquals(a, b);
      else if(a instanceof Date&&b instanceof Date)return dateEquals(a, b);
      else {
        const a_1=a;
        const b_1=b;
        const eqR=[true];
        let k;
        for(var k_2 in a_1)if(((k_3) => {
          eqR[0]=!a_1.hasOwnProperty(k_3)||b_1.hasOwnProperty(k_3)&&Equals(a_1[k_3], b_1[k_3]);
          return!eqR[0];
        })(k_2))break;
        if(eqR[0]){
          let k_1;
          for(var k_3 in b_1)if(((k_4) => {
            eqR[0]=!b_1.hasOwnProperty(k_4)||a_1.hasOwnProperty(k_4);
            return!eqR[0];
          })(k_3))break;
        }
        return eqR[0];
      }
    }
    else return m=="function"&&("$Func"in a?a.$Func===b.$Func&&a.$Target===b.$Target:"$Invokes"in a&&"$Invokes"in b&&arrayEquals(a.$Invokes, b.$Invokes));
  }
}
function Hash(o){
  const m=typeof o;
  return m=="function"?0:m=="boolean"?o?1:0:m=="number"?o:m=="string"?hashString(o):m=="object"?o==null?0:o instanceof Array?hashArray(o):hashObject(o):m=="bigint"?hashString(String(o)):m=="symbol"?hashString(o.description):0;
}
function arrayEquals(a, b){
  let eq;
  let i;
  if(length(a)===length(b)){
    eq=true;
    i=0;
    while(eq&&i<length(a))
      {
        !Equals(get(a, i), get(b, i))?eq=false:void 0;
        i=i+1;
      }
    return eq;
  }
  else return false;
}
function dateEquals(a, b){
  return a.getTime()===b.getTime();
}
function Compare(a, b){
  if(a===b)return 0;
  else {
    const m=typeof a;
    switch(m=="boolean"?1:m=="number"?1:m=="bigint"?1:m=="string"?1:m=="object"?2:m=="function"?3:m=="symbol"?4:0){
      case 0:
        return typeof b=="undefined"?0:-1;
      case 1:
        return a<b?-1:1;
      case 2:
        if(a===null)return -1;
        else if(b===null)return 1;
        else if("CompareTo"in a)return a.CompareTo(b);
        else if("CompareTo0"in a)return a.CompareTo0(b);
        else if(a instanceof Array&&b instanceof Array)return compareArrays(a, b);
        else if(a instanceof Date&&b instanceof Date)return compareDates(a, b);
        else {
          const a_1=a;
          const b_1=b;
          const cmp=[0];
          let k;
          for(var k_2 in a_1)if(((k_3) =>!a_1.hasOwnProperty(k_3)?false:!b_1.hasOwnProperty(k_3)?(cmp[0]=1,true):(cmp[0]=Compare(a_1[k_3], b_1[k_3]),cmp[0]!==0))(k_2))break;
          if(cmp[0]===0){
            let k_1;
            for(var k_3 in b_1)if(((k_4) =>!b_1.hasOwnProperty(k_4)?false:!a_1.hasOwnProperty(k_4)&&(cmp[0]=-1,true))(k_3))break;
          }
          return cmp[0];
        }
        break;
      case 3:
        return FailWith("Cannot compare function values.");
      case 4:
        return FailWith("Cannot compare symbol values.");
    }
  }
}
function hashString(s){
  let hash;
  if(s===null)return 0;
  else {
    hash=5381;
    for(let i=0, _1=s.length-1;i<=_1;i++)hash=hashMix(hash, s[i].charCodeAt());
    return hash;
  }
}
function hashArray(o){
  let h=-34948909;
  for(let i=0, _1=length(o)-1;i<=_1;i++)h=hashMix(h, Hash(get(o, i)));
  return h;
}
function hashObject(o){
  if("GetHashCode"in o)return o.GetHashCode();
  else {
    const h=[0];
    let k;
    for(var k_1 in o)if(((key) => {
      h[0]=hashMix(hashMix(h[0], hashString(key)), Hash(o[key]));
      return false;
    })(k_1))break;
    return h[0];
  }
}
function compareArrays(a, b){
  let cmp;
  let i;
  if(length(a)<length(b))return -1;
  else if(length(a)>length(b))return 1;
  else {
    cmp=0;
    i=0;
    while(cmp===0&&i<length(a))
      {
        cmp=Compare(get(a, i), get(b, i));
        i=i+1;
      }
    return cmp;
  }
}
function compareDates(a, b){
  return Compare(a.getTime(), b.getTime());
}
function hashMix(x, y){
  return(x<<5)+x+y;
}
function NewGuid(){
  return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]", "g"), (c) => {
    const r=Math.random()*16|0;
    const v=c=="x"?r:r&3|8;
    return v.toString(16);
  });
}
class EventQ extends TemplateHole {
  name;
  key;
  fillWith;
  get Name(){
    return this.name;
  }
  get Value(){
    return this.fillWith;
  }
  WithName(n){
    return new EventQ(n, this.key, this.fillWith);
  }
  constructor(name, key, fillWith){
    super();
    this.name=name;
    this.key=key;
    this.fillWith=fillWith;
  }
}
function NewFromSeq(fields){
  const r={};
  const e=Get(fields);
  try {
    while(e.MoveNext())
      {
        const f=e.Current;
        r[f[0]]=f[1];
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return r;
}
function byId(id){
  return globalThis.document.getElementById(id);
}
function usd(n){
  return"$"+String(n);
}
function alertError(msg){
  sweetalert2.fire(swalDefaults("Error!", msg, "error"));
}
function swalDefaults(title, msg, icon){
  let r;
  r={};
  r.title=title;
  r.text=msg;
  r.icon=icon;
  r.buttonsStyling=false;
  r.customClass={
    popup:"rounded-xl shadow-2xl p-6", 
    title:"text-xl font-bold text-gray-900 dark:text-white mb-1", 
    htmlContainer:"text-sm text-gray-600 dark:text-gray-400", 
    confirmButton:"inline-flex items-center justify-center rounded-lg h-10 px-4 text-sm font-medium text-white dark:text-gray-950 bg-gray-950 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ml-2", 
    icon:"transform scale-75 mt-4"
  };
  return r;
}
class Var extends Object_1 { }
function dict(s){
  const d=new Dictionary("New_5");
  const e=Get(s);
  try {
    while(e.MoveNext())
      {
        const f=e.Current;
        d.DAdd(f[0], f[1]);
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return d;
}
function DynamicClassPred(name, view){
  return Dynamic_1(view, (el) =>(v) => v?AddClass(el, name):RemoveClass(el, name));
}
function Dynamic(name, view){
  return Dynamic_1(view, (el) =>(v) => el.setAttribute(name, v));
}
function DynamicBool(name, boolview){
  return Dynamic_1(boolview, (_1) =>(_2) => _2?_1.setAttribute(name, ""):_1.removeAttribute(name));
}
function Class(name){
  return ClassPred(name, true);
}
function ClassPred(name, isSet){
  return Attr.A3((el) => {
    if(isSet)AddClass(el, name);
    else RemoveClass(el, name);
  });
}
function Handler(name, callback){
  return Attr.A3((el) => {
    el.addEventListener(name, (d) =>(callback(el))(d), false);
  });
}
function OnAfterRender_1(callback){
  return Attr.A4(callback);
}
function Value(var_1){
  return ValueWith(StringApply(), var_1);
}
function Checked(var_1){
  return ValueWith(BoolCheckedApply(), var_1);
}
function FloatValueUnchecked(var_1){
  return ValueWith(FloatApplyUnchecked(), var_1);
}
function DateTimeValue(var_1){
  return ValueWith(DateTimeApplyUnchecked(), var_1);
}
function FileValue(var_1){
  return ValueWith(FileApplyUnchecked(), var_1);
}
function StringListValue(var_1){
  return ValueWith(StringListApply(), var_1);
}
function ValueWith(bind, var_1){
  const p=bind(var_1);
  return AppendTree(Attr.A3(p[0]), DynamicCustom(p[1], p[2]));
}
function DynamicCustom(set_1, view){
  return Dynamic_1(view, set_1);
}
function Map(fn, a){
  return CreateLazy(() => Map_1(fn, a()));
}
function Const(x){
  const o={s:Forever(x)};
  return() => o;
}
function Map2(fn, a, a_1){
  return CreateLazy(() => Map2_1(fn, a(), a_1()));
}
function CreateLazy(observe){
  const lv={c:null, o:observe};
  return() => {
    let c=lv.c;
    if(c===null){
      c=lv.o();
      lv.c=c;
      const _1=c.s;
      if(_1!=null&&_1.$==0)lv.o=null;
      else WhenObsoleteRun(c, () => {
        lv.c=null;
      });
      return c;
    }
    else return c;
  };
}
function Map3(fn, a, a_1, a_2){
  return CreateLazy(() => Map3_1(fn, a(), a_1(), a_2()));
}
function Bind(fn, view){
  return Join(Map(fn, view));
}
function Map2Unit(a, a_1){
  return CreateLazy(() => Map2Unit_1(a(), a_1()));
}
function Join(a){
  return CreateLazy(() => Join_1(a()));
}
function Sink(act, a){
  function loop(){
    WhenRun(a(), act, () => {
      scheduler().Fork(loop);
    });
  }
  scheduler().Fork(loop);
}
function Sequence(views){
  return CreateLazy(() => Sequence_1(map_1((a) => a(), views)));
}
class Attr {
  static Concat(xs){
    const x=ofSeqNonCopying(xs);
    return TreeReduce(EmptyAttr(), (_1, _2) => AppendTree(_1, _2), x);
  }
  static A1(Item){
    return Create_1(Attr, {$:1, $0:Item});
  }
  static A2(Item1, Item2){
    return Create_1(Attr, {
      $:2, 
      $0:Item1, 
      $1:Item2
    });
  }
  static Create(name, value){
    return Attr.A3((el) => {
      el.setAttribute(name, value);
    });
  }
  static A3(init_2){
    return Create_1(Attr, {$:3, $0:init_2});
  }
  static HandlerImpl(event, q){
    return Attr.A3((el) => {
      el.addEventListener(event, (d) =>(q(el))(d), false);
    });
  }
  static A4(onAfterRender){
    return Create_1(Attr, {$:4, $0:onAfterRender});
  }
  $;
  $0;
  $1;
}
function SeatsTextVar(){
  return _c_2.SeatsTextVar;
}
function VatinVar(){
  return _c_2.VatinVar;
}
function CompanyNameVar(){
  return _c_2.CompanyNameVar;
}
function IsCompanyVar(){
  return _c_2.IsCompanyVar;
}
function CountryVar(){
  return _c_2.CountryVar;
}
function PostalVar(){
  return _c_2.PostalVar;
}
function CityVar(){
  return _c_2.CityVar;
}
function StreetVar(){
  return _c_2.StreetVar;
}
function EmailVar(){
  return _c_2.EmailVar;
}
function ContinueText(){
  return _c_2.ContinueText;
}
function BackLinkLabel(){
  return _c_2.BackLinkLabel;
}
function resetContinueButton(){
  ContinueDisabled().Set(false);
  ContinueText().Set("Continue to payment");
}
function computeBackLink(){
  let dest;
  let label;
  const referrer=globalThis.document.referrer;
  dest="/support#plans";
  label="Plans";
  if(!IsNullOrWhiteSpace(referrer))EndsWith(referrer, "/account")?(dest="/account",label="My account"):EndsWith(referrer, "/support")?(dest="/support#plans",label="Plans"):void 0;
  backLinkHref().Set(dest);
  BackLinkLabel().Set(label);
}
function initFromQuery(){
  const searchParams=readParams();
  let _1=CheckoutFormVar();
  const _2=CheckoutFormVar().Get();
  _1.Set(New_2(searchParams.plan, searchParams.interval, String(searchParams.seats), _2.email, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
}
function initFromApi(){
  return Delay(() => Bind_1(Delay(() => TryWith(Delay(() => GetBillingData()), () => Return(null))), (a) => {
    if(a!=null&&a.$==1){
      const data=a.$0;
      let _1=CheckoutFormVar();
      const _2=CheckoutFormVar().Get();
      const o=data.companyName;
      let _3=o==null?"":o.$0;
      const o_1=data.taxId;
      let _4=o_1==null?"":o_1.$0;
      let _5=New_2(_2.plan, _2.interval, _2.seatsText, data.email, data.line1, data.city, data.postalCode, data.country, data.companyName!=null, _3, _4);
      _1.Set(_5);
      return Zero();
    }
    else return Zero();
  }));
}
function ensurePlans(){
  return Delay(() => Bind_1(LoadOrFetchPlans(), (a) => {
    if(a==null)return Zero();
    else {
      const resp=a.$0;
      plansVar().Set(resp);
      return Zero();
    }
  }));
}
function ContinueDisabled(){
  return _c_2.ContinueDisabled;
}
function buildPayload(){
  const form=CheckoutFormVar().Get();
  const seatsToSend=clampSeats(parseSeats(form.seatsText));
  return New_5(form.plan.toLowerCase()=="freelancer"?"freelancer":"pro", intervalAsString(form.interval), form.plan.toLowerCase()=="freelancer"?1:seatsToSend, New_4(Trim(form.email), Trim(form.street), Trim(form.city), Trim(form.postal), form.country, form.isCompany?Some(Trim(form.companyName)):null, form.isCompany?Some(Trim(form.vatin)):null));
}
function SelectedPlanVar(){
  return _c_2.SelectedPlanVar;
}
function CheckoutFormVar(){
  return _c_2.CheckoutFormVar;
}
function backLinkHref(){
  return _c_2.backLinkHref;
}
function readParams(){
  let o;
  const queryParameters=new URLSearchParams(globalThis.location.search);
  const m=queryParameters.get("plan");
  let _1=!(m==null)&&m.toLowerCase()=="freelancer"?"freelancer":"pro";
  const m_1=queryParameters.get("interval");
  let _2=!(m_1==null)&&m_1.toLowerCase()=="month"?Month:Year;
  const m_2=(o=0,[TryParse(queryParameters.get("seats"), {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  let _3=m_2[0]?clampSeats(m_2[1]):1;
  return New_3(_1, _2, _3);
}
function plansVar(){
  return _c_2.plansVar;
}
function parseSeats(s){
  let o;
  const s_1=s==null?"":Trim(s);
  if(s_1=="")return 1;
  else {
    const m=(o=0,[TryParse(s_1, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    return m[0]?clampSeats(m[1]):1;
  }
}
function SelectedIntervalVar(){
  return _c_2.SelectedIntervalVar;
}
function BackLinkAttr(){
  return _c_3.BackLinkAttr;
}
function CompanyBlockAttr(){
  return DynamicClassPred("hidden", Map((v) =>!v, IsCompanyVar().View));
}
function CompanyNameAttr(){
  return Attr.Concat([DynamicBool("required", IsCompanyVar().View), DynamicBool("disabled", Map((v) =>!v, IsCompanyVar().View))]);
}
function VatinAttr(){
  return Attr.Concat([DynamicBool("required", IsCompanyVar().View), DynamicBool("disabled", Map((v) =>!v, IsCompanyVar().View))]);
}
function ContinueButtonAttr(){
  return Attr.Concat([DynamicBool("disabled", ContinueDisabled().View)]);
}
function SeatSelectorAttr(){
  return Dynamic("class", Map((p) => p.toLowerCase()!="freelancer"?"transition-all duration-500 ease-in-out overflow-hidden mt-6 max-h-[300px] opacity-100":"transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0", SelectedPlanVar().View));
}
let Encoder_BillingData;
let Encoder_CheckoutRequest;
let Decoder_FSharpResult_2;
let Decoder_FSharpResult_3;
let Decoder_FSharpOption_1;
let Decoder_FSharpOption_2;
let Decoder_Subscription;
let Decoder_PlanPrice;
let Decoder_GitHubOrgStatus;
let Decoder_GitHubOrg;
let Decoder_FSharpOption_3;
let Decoder_BillingData;
let Decoder_FSharpOption_4;
let Decoder_FSharpResult_4;
function rightskeleton(h){
  return h?GetOrLoadTemplate("checkout", Some("rightskeleton"), () => ParseHTMLIntoFakeRoot("<div class=\"mt-12 md:mt-2 transition-opacity duration-500 ease-out\">\r\n            <div class=\"h-7 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-12\"></div>\r\n            <div class=\"space-y-6\">\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                    <div class=\"grid grid-cols-3 gap-2\">\r\n                        <div class=\"col-span-2 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                        <div class=\"h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                    </div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n                <div class=\"flex items-center gap-2\">\r\n                    <div class=\"size-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                </div>\r\n                <div class=\"mt-12 h-14 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse\"></div>\r\n            </div>\r\n        </div>"), h):PrepareTemplate("checkout", Some("rightskeleton"), () => ParseHTMLIntoFakeRoot("<div class=\"mt-12 md:mt-2 transition-opacity duration-500 ease-out\">\r\n            <div class=\"h-7 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-12\"></div>\r\n            <div class=\"space-y-6\">\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                    <div class=\"grid grid-cols-3 gap-2\">\r\n                        <div class=\"col-span-2 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                        <div class=\"h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                    </div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n                <div class=\"flex items-center gap-2\">\r\n                    <div class=\"size-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                </div>\r\n                <div class=\"mt-12 h-14 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse\"></div>\r\n            </div>\r\n        </div>"));
}
function authform(h){
  return h?GetOrLoadTemplate("checkout", Some("authform"), () => ParseHTMLIntoFakeRoot("<section id=\"authSection\" class=\"mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]\">\r\n            <h2 class=\"text-xl font-semibold text-gray-950 dark:text:white\">Login & Registration</h2>\r\n            <p class=\"mt-3 text-gray-600 dark:text-gray-400\">\r\n                Please sign in with GitHub to continue to checkout. If this is your first time, we will create your WebSharper account from your GitHub profile.\r\n            </p>\r\n\r\n            <button id=\"wsGithubLogin\" ws-onclick=\"OnGitHubLogin\" type=\"button\" class=\"cursor-pointer mt-6 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                <span class=\"relative flex items-center gap-2 text-sm\">\r\n                    <svg aria-hidden=\"true\" viewbox=\"0 0 16 16\" class=\"w-4 h-4 fill-current\"><path d=\"M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.9-3.64-3.95 0-.87.31-1.6.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.06-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.39A8 8 0 0016 8c0-4.42-3.58-8-8-8z\"></path></svg>\r\n                    Continue with GitHub\r\n                </span>\r\n            </button>\r\n\r\n            <p class=\"mt-3 text-xs text-gray-500 dark:text-gray-400\">\r\n                By continuing, you agree to the WebSharper <a href=\"#\" class=\"underline hover:no-underline\">Terms</a> and\r\n                <a href=\"#\" class=\"underline hover:no-underline\">Privacy Policy</a>.\r\n            </p>\r\n            <noscript>\r\n                <p class=\"mt-4 text-red-600 dark:text-red-400 text-sm\">\r\n                    JavaScript is required to sign in and complete checkout. Please enable JavaScript.\r\n                </p>\r\n            </noscript>\r\n        </section>"), h):PrepareTemplate("checkout", Some("authform"), () => ParseHTMLIntoFakeRoot("<section id=\"authSection\" class=\"mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]\">\r\n            <h2 class=\"text-xl font-semibold text-gray-950 dark:text:white\">Login & Registration</h2>\r\n            <p class=\"mt-3 text-gray-600 dark:text-gray-400\">\r\n                Please sign in with GitHub to continue to checkout. If this is your first time, we will create your WebSharper account from your GitHub profile.\r\n            </p>\r\n\r\n            <button id=\"wsGithubLogin\" ws-onclick=\"OnGitHubLogin\" type=\"button\" class=\"cursor-pointer mt-6 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                <span class=\"relative flex items-center gap-2 text-sm\">\r\n                    <svg aria-hidden=\"true\" viewbox=\"0 0 16 16\" class=\"w-4 h-4 fill-current\"><path d=\"M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.9-3.64-3.95 0-.87.31-1.6.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.06-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.39A8 8 0 0016 8c0-4.42-3.58-8-8-8z\"></path></svg>\r\n                    Continue with GitHub\r\n                </span>\r\n            </button>\r\n\r\n            <p class=\"mt-3 text-xs text-gray-500 dark:text-gray-400\">\r\n                By continuing, you agree to the WebSharper <a href=\"#\" class=\"underline hover:no-underline\">Terms</a> and\r\n                <a href=\"#\" class=\"underline hover:no-underline\">Privacy Policy</a>.\r\n            </p>\r\n            <noscript>\r\n                <p class=\"mt-4 text-red-600 dark:text-red-400 text-sm\">\r\n                    JavaScript is required to sign in and complete checkout. Please enable JavaScript.\r\n                </p>\r\n            </noscript>\r\n        </section>"));
}
function paymentform(h){
  return h?GetOrLoadTemplate("checkout", Some("paymentform"), () => ParseHTMLIntoFakeRoot("<form id=\"paymentSection\" action=\"\" class=\"mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]\">\r\n            <h2 class=\"text-xl font-semibold text-gray-950 dark:text-white\">Payment details</h2>\r\n            <div class=\"mt-12 space-y-6\">\r\n                <div class=\"mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2\">\r\n                    <label class=\"block font-medium text-sm\" for=\"email\">Email</label>\r\n                    <input class=\"peer w-full focus:outline rounded-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" type=\"email\" required=\"\" id=\"email\" name=\"email\" ws-var=\"Email\">\r\n                    <span class=\"hidden peer-invalid:hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-red-600 dark:text-red-400 text-sm\">Please enter your email</span>\r\n                </div>\r\n                <div class=\"mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2\">\r\n                    <label class=\"block font-medium text-sm\" for=\"country\">Billing address</label>\r\n\r\n                    <!-- Street -->\r\n                    <input id=\"street\" name=\"street\" placeholder=\"Street address\" required=\"\" ws-var=\"Street\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n\r\n                    <!-- City + Postal -->\r\n                    <div class=\"grid grid-cols-3 gap-2\">\r\n                        <input id=\"city\" name=\"city\" placeholder=\"City\" required=\"\" ws-var=\"City\" class=\"col-span-2 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                        <input id=\"postal\" name=\"postal\" placeholder=\"Postal Code\" required=\"\" ws-var=\"Postal\" class=\"col-span-1 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                    </div>\r\n\r\n                <!-- Country -->\r\n                <div class=\"relative\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"absolute pointer-events-none inset-y-0 my-auto right-3 size-4\">\r\n                        <path fill-rule=\"evenodd\" d=\"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"></path>\r\n                    </svg>\r\n                    <select name=\"country\" id=\"country\" required=\"\" ws-var=\"Country\" class=\"cursor-pointer w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                        <div ws-replace=\"CountryOptions\"></div>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n\r\n                <div class=\"peer\">\r\n                    <label for=\"company\" class=\"flex items-center\">\r\n                        <input class=\"size-0 peer\" type=\"checkbox\" id=\"company\" name=\"company\" ws-var=\"IsCompany\">\r\n                        <div role=\"checkbox\" class=\"shadow shadow-gray-700/5 outline-2 outline-offset-1 outline-blue-600 dark:outline-blue-500 peer-focus:outline size-[1.125rem] group peer relative flex appearance-none items-center justify-center border transition *:-rotate-12 *:scale-50 *:opacity-0 peer-checked:*:-rotate-6 peer-checked:*:scale-100 peer-checked:*:opacity-100 duration-150 before:absolute before:m-auto before:shadow-inner peer-checked:before:border-t peer-checked:before:bg-blue-600 peer-disabled:before:hidden before:border-transparent before:bg-white active:ring-[3px] active:ring-blue-600/10 peer-checked:before:border-gray-800 dark:border-gray-800 dark:bg-transparent dark:before:border dark:peer-checked:before:border-transparent peer-checked:before:shadow-white/10 dark:peer-checked:before:shadow-white/20 dark:peer-checked:before:bg-blue-600 peer-checked:border-none before:border-none border-gray-300 hover:border-gray-400/75 dark:hover:border-gray-700 before:inset-0 p-0 before:shadow-gray-950/5 dark:before:shadow-white/5 dark:before:bg-transparent bg-transparent before:size-full rounded before:rounded-[3px] peer-checked:before:rounded\">\r\n                            <span class=\"transition-all duration-200 relative text-white peer-disabled:text-gray-300 dark:peer-disabled:text-gray-700 pointer-events-none\">\r\n                                <svg class=\"size-4\" viewbox=\"0 0 46 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M6 15.91L10.4241 11.546L19.2713 20.273L34.7547 5L39.1788 9.364L19.2723 29L6 15.91Z\" fill=\"white\"></path>\r\n                                </svg>\r\n                            </span>\r\n                        </div>\r\n                        <span class=\"ml-2.5 leading-none text-gray-700 peer-peer-disabled:text-gray-300 dark:text-gray-300 dark:peer-peer-disabled:text-gray-700 select-none block font-medium text-sm\">I represent a company</span>\r\n                    </label>\r\n                </div>\r\n                <div id=\"companyBlock\" ws-attr=\"CompanyBlockAttr\" class=\"hidden peer-has-[:checked]:block mt-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2.5\">\r\n                    <label class=\"block font-medium text-sm\" for=\"company-name\">Company</label>\r\n                    <div class=\"-space-y-px\">\r\n                        <input placeholder=\"Name\" class=\"hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-t-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" required=\"\" id=\"company-name\" name=\"company-name\" ws-var=\"CompanyName\" ws-attr=\"CompanyNameAttr\">\r\n                        <input placeholder=\"VATIN\" class=\"hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-b-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" id=\"vatin\" name=\"vatin\" ws-var=\"Vatin\" ws-attr=\"VatinAttr\">\r\n                    </div>\r\n                    <span class=\"flex gap-2 leading-normal peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"w-4 h-4 mt-0.5\">\r\n                            <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" clip-rule=\"evenodd\"></path>\r\n                        </svg>\r\n                        <span class=\"block w-[calc(100%-1.25rem)]\">\r\n                            VAT Identification Number. As an EU company (outside Hungary), you can account for the VAT, and supplying us with your VATIN allows us not to charge you for VAT.\r\n                        </span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div ws-replace=\"FormErrorDoc\"></div>\r\n            <button id=\"wsContinue\" type=\"button\" ws-onclick=\"OnContinueClick\" ws-attr=\"ContinueButtonAttr\" class=\"mt-12 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                <span ws-hole=\"ContinueText\" class=\"relative text-sm\">Continue to payment</span>\r\n            </button>\r\n        </form>"), h):PrepareTemplate("checkout", Some("paymentform"), () => ParseHTMLIntoFakeRoot("<form id=\"paymentSection\" action=\"\" class=\"mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]\">\r\n            <h2 class=\"text-xl font-semibold text-gray-950 dark:text-white\">Payment details</h2>\r\n            <div class=\"mt-12 space-y-6\">\r\n                <div class=\"mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2\">\r\n                    <label class=\"block font-medium text-sm\" for=\"email\">Email</label>\r\n                    <input class=\"peer w-full focus:outline rounded-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" type=\"email\" required=\"\" id=\"email\" name=\"email\" ws-var=\"Email\">\r\n                    <span class=\"hidden peer-invalid:hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-red-600 dark:text-red-400 text-sm\">Please enter your email</span>\r\n                </div>\r\n                <div class=\"mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2\">\r\n                    <label class=\"block font-medium text-sm\" for=\"country\">Billing address</label>\r\n\r\n                    <!-- Street -->\r\n                    <input id=\"street\" name=\"street\" placeholder=\"Street address\" required=\"\" ws-var=\"Street\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n\r\n                    <!-- City + Postal -->\r\n                    <div class=\"grid grid-cols-3 gap-2\">\r\n                        <input id=\"city\" name=\"city\" placeholder=\"City\" required=\"\" ws-var=\"City\" class=\"col-span-2 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                        <input id=\"postal\" name=\"postal\" placeholder=\"Postal Code\" required=\"\" ws-var=\"Postal\" class=\"col-span-1 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                    </div>\r\n\r\n                <!-- Country -->\r\n                <div class=\"relative\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"absolute pointer-events-none inset-y-0 my-auto right-3 size-4\">\r\n                        <path fill-rule=\"evenodd\" d=\"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"></path>\r\n                    </svg>\r\n                    <select name=\"country\" id=\"country\" required=\"\" ws-var=\"Country\" class=\"cursor-pointer w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                        <div ws-replace=\"CountryOptions\"></div>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n\r\n                <div class=\"peer\">\r\n                    <label for=\"company\" class=\"flex items-center\">\r\n                        <input class=\"size-0 peer\" type=\"checkbox\" id=\"company\" name=\"company\" ws-var=\"IsCompany\">\r\n                        <div role=\"checkbox\" class=\"shadow shadow-gray-700/5 outline-2 outline-offset-1 outline-blue-600 dark:outline-blue-500 peer-focus:outline size-[1.125rem] group peer relative flex appearance-none items-center justify-center border transition *:-rotate-12 *:scale-50 *:opacity-0 peer-checked:*:-rotate-6 peer-checked:*:scale-100 peer-checked:*:opacity-100 duration-150 before:absolute before:m-auto before:shadow-inner peer-checked:before:border-t peer-checked:before:bg-blue-600 peer-disabled:before:hidden before:border-transparent before:bg-white active:ring-[3px] active:ring-blue-600/10 peer-checked:before:border-gray-800 dark:border-gray-800 dark:bg-transparent dark:before:border dark:peer-checked:before:border-transparent peer-checked:before:shadow-white/10 dark:peer-checked:before:shadow-white/20 dark:peer-checked:before:bg-blue-600 peer-checked:border-none before:border-none border-gray-300 hover:border-gray-400/75 dark:hover:border-gray-700 before:inset-0 p-0 before:shadow-gray-950/5 dark:before:shadow-white/5 dark:before:bg-transparent bg-transparent before:size-full rounded before:rounded-[3px] peer-checked:before:rounded\">\r\n                            <span class=\"transition-all duration-200 relative text-white peer-disabled:text-gray-300 dark:peer-disabled:text-gray-700 pointer-events-none\">\r\n                                <svg class=\"size-4\" viewbox=\"0 0 46 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M6 15.91L10.4241 11.546L19.2713 20.273L34.7547 5L39.1788 9.364L19.2723 29L6 15.91Z\" fill=\"white\"></path>\r\n                                </svg>\r\n                            </span>\r\n                        </div>\r\n                        <span class=\"ml-2.5 leading-none text-gray-700 peer-peer-disabled:text-gray-300 dark:text-gray-300 dark:peer-peer-disabled:text-gray-700 select-none block font-medium text-sm\">I represent a company</span>\r\n                    </label>\r\n                </div>\r\n                <div id=\"companyBlock\" ws-attr=\"CompanyBlockAttr\" class=\"hidden peer-has-[:checked]:block mt-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2.5\">\r\n                    <label class=\"block font-medium text-sm\" for=\"company-name\">Company</label>\r\n                    <div class=\"-space-y-px\">\r\n                        <input placeholder=\"Name\" class=\"hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-t-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" required=\"\" id=\"company-name\" name=\"company-name\" ws-var=\"CompanyName\" ws-attr=\"CompanyNameAttr\">\r\n                        <input placeholder=\"VATIN\" class=\"hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-b-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" id=\"vatin\" name=\"vatin\" ws-var=\"Vatin\" ws-attr=\"VatinAttr\">\r\n                    </div>\r\n                    <span class=\"flex gap-2 leading-normal peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"w-4 h-4 mt-0.5\">\r\n                            <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" clip-rule=\"evenodd\"></path>\r\n                        </svg>\r\n                        <span class=\"block w-[calc(100%-1.25rem)]\">\r\n                            VAT Identification Number. As an EU company (outside Hungary), you can account for the VAT, and supplying us with your VATIN allows us not to charge you for VAT.\r\n                        </span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div ws-replace=\"FormErrorDoc\"></div>\r\n            <button id=\"wsContinue\" type=\"button\" ws-onclick=\"OnContinueClick\" ws-attr=\"ContinueButtonAttr\" class=\"mt-12 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                <span ws-hole=\"ContinueText\" class=\"relative text-sm\">Continue to payment</span>\r\n            </button>\r\n        </form>"));
}
function content_1(h){
  return h?GetOrLoadTemplate("checkout", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        \r\n\r\n        \r\n\r\n        \r\n\r\n        \r\n\r\n        <!-- Main Container -->\r\n        <div ws-onafterrender=\"OnAfterRender\">\r\n            <div class=\"hidden md:block fixed inset-0 w-1/2 -z-50 bg-gray-50 dark:bg-gray-900/50 border-r dark:border-gray-800\"></div>\r\n            <div class=\"max-w-6xl mx-auto px-12 gap-20 md:flex\">\r\n\r\n                <div class=\"md:w-1/2 md:pr-20 pt-16\">\r\n                    <a href=\"./\" class=\"rounded-full\">\r\n                        <span class=\"sr-only\">WebSharper logo</span>\r\n                        <img class=\"h-9 w-9 rounded-full bg-white dark:bg-transparent\" src=\"./Assets/favicon.png\" alt=\"websharper logo\" width=\"164\" height=\"164\">\r\n                    </a>\r\n\r\n                    <nav class=\"mt-8 flex gap-3 items-center\">\r\n                        <a id=\"backLink\" ws-attr=\"BackLinkAttr\" href=\"./support#plans\" ws-hole=\"BackLinkLabel\" class=\"text-gray-600 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400\">\r\n                            Plans\r\n                        </a>\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"text-gray-400 dark:text-gray-600 size-4\">\r\n                            <path fill-rule=\"evenodd\" d=\"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"></path>\r\n                        </svg>\r\n                        <span class=\"text-gray-950 dark:text-white font-medium\">Payment</span>\r\n                    </nav>\r\n\r\n                    <h1 class=\"mt-8 text-lg text-sky-600 dark:text-brand-primary mb-3\">\r\n                        <span ws-hole=\"PlanName\"></span>\r\n                    </h1>\r\n\r\n                    <p class=\"text-3xl font-bold text-gray-950 dark:text-white flex items-baseline gap-1\">\r\n                        <span ws-hole=\"PlanPrice\"></span>\r\n                        <span class=\"text-base text-gray-600 dark:text-gray-400 font-normal\">/ <span ws-hole=\"PlanInterval\"></span></span>\r\n                    </p>\r\n\r\n                    <p class=\"mt-8 text-gray-600 dark:text-gray-400\">Our experienced WebSharper support team is available to help you make the right decisions.</p>\r\n\r\n                    <div id=\"wsSeatSelector\" ws-attr=\"SeatSelectorAttr\" class=\"mt-6\">\r\n                        <label for=\"wsSeats\" class=\"block text-sm font-medium text-gray-700 dark:text-gray-300\">Seats</label>\r\n                        <div class=\"mt-2 flex items-center gap-2\">\r\n                            <button type=\"button\" id=\"wsMinus\" ws-onclick=\"OnSeatMinus\" class=\"cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50\">\r\n                                -\r\n                            </button>\r\n                            <input id=\"wsSeats\" name=\"wsSeats\" ws-var=\"SeatsText\" inputmode=\"numeric\" pattern=\"[0-9]*\" value=\"1\" class=\"h-10 w-20 text-center rounded-lg border shadow border-gray-300 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white\">\r\n                            <button type=\"button\" id=\"wsPlus\" ws-onclick=\"OnSeatPlus\" class=\"cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50\">\r\n                                +\r\n                            </button>\r\n                        </div>\r\n                        <p id=\"wsPriceHint\" class=\"mt-2 text-xs text-gray-500 dark:text-gray-400\">\r\n                            <span ws-hole=\"PriceHint\"></span>\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div class=\"fixed bottom-0 z-10 inset-x-0 px-12 border-t dark:border-gray-800 shadow-lg md:z-0 md:border-none md:shadow-none md:px-0 bg-white dark:bg-gray-900 dark:md:bg-transparent md:bg-transparent md:static mt-12 divide-y dark:divide-gray-800 text-gray-600 dark:text-gray-400\">\r\n                        <div class=\"py-3 flex justify-between\">\r\n                            <p>Subtotal</p>\r\n                            <p aria-live=\"polite\" class=\"font-medium text-gray-950 dark:text-white\">\r\n                                <span ws-hole=\"Subtotal\"></span>\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"py-3 flex justify-between\">\r\n                            <p>Taxes</p>\r\n                            <p class=\"font-medium text-gray-950 dark:text-white\">\r\n                                <span ws-hole=\"Taxes\"></span>\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"py-3 flex justify-between\">\r\n                            <p class=\"text-gray-950 dark:text-white font-medium\">Total</p>\r\n                            <p aria-live=\"polite\" class=\"font-medium text-gray-950 dark:text-white\">\r\n                                <span ws-hole=\"Total\"></span>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"pb-56 md:max-w-md md:w-1/2 md:pt-16 md:pb-16\">\r\n                    <div ws-replace=\"RightSideContent\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    "), h):PrepareTemplate("checkout", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        \r\n\r\n        \r\n\r\n        \r\n\r\n        \r\n\r\n        <!-- Main Container -->\r\n        <div ws-onafterrender=\"OnAfterRender\">\r\n            <div class=\"hidden md:block fixed inset-0 w-1/2 -z-50 bg-gray-50 dark:bg-gray-900/50 border-r dark:border-gray-800\"></div>\r\n            <div class=\"max-w-6xl mx-auto px-12 gap-20 md:flex\">\r\n\r\n                <div class=\"md:w-1/2 md:pr-20 pt-16\">\r\n                    <a href=\"./\" class=\"rounded-full\">\r\n                        <span class=\"sr-only\">WebSharper logo</span>\r\n                        <img class=\"h-9 w-9 rounded-full bg-white dark:bg-transparent\" src=\"./Assets/favicon.png\" alt=\"websharper logo\" width=\"164\" height=\"164\">\r\n                    </a>\r\n\r\n                    <nav class=\"mt-8 flex gap-3 items-center\">\r\n                        <a id=\"backLink\" ws-attr=\"BackLinkAttr\" href=\"./support#plans\" ws-hole=\"BackLinkLabel\" class=\"text-gray-600 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400\">\r\n                            Plans\r\n                        </a>\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"text-gray-400 dark:text-gray-600 size-4\">\r\n                            <path fill-rule=\"evenodd\" d=\"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"></path>\r\n                        </svg>\r\n                        <span class=\"text-gray-950 dark:text-white font-medium\">Payment</span>\r\n                    </nav>\r\n\r\n                    <h1 class=\"mt-8 text-lg text-sky-600 dark:text-brand-primary mb-3\">\r\n                        <span ws-hole=\"PlanName\"></span>\r\n                    </h1>\r\n\r\n                    <p class=\"text-3xl font-bold text-gray-950 dark:text-white flex items-baseline gap-1\">\r\n                        <span ws-hole=\"PlanPrice\"></span>\r\n                        <span class=\"text-base text-gray-600 dark:text-gray-400 font-normal\">/ <span ws-hole=\"PlanInterval\"></span></span>\r\n                    </p>\r\n\r\n                    <p class=\"mt-8 text-gray-600 dark:text-gray-400\">Our experienced WebSharper support team is available to help you make the right decisions.</p>\r\n\r\n                    <div id=\"wsSeatSelector\" ws-attr=\"SeatSelectorAttr\" class=\"mt-6\">\r\n                        <label for=\"wsSeats\" class=\"block text-sm font-medium text-gray-700 dark:text-gray-300\">Seats</label>\r\n                        <div class=\"mt-2 flex items-center gap-2\">\r\n                            <button type=\"button\" id=\"wsMinus\" ws-onclick=\"OnSeatMinus\" class=\"cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50\">\r\n                                -\r\n                            </button>\r\n                            <input id=\"wsSeats\" name=\"wsSeats\" ws-var=\"SeatsText\" inputmode=\"numeric\" pattern=\"[0-9]*\" value=\"1\" class=\"h-10 w-20 text-center rounded-lg border shadow border-gray-300 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white\">\r\n                            <button type=\"button\" id=\"wsPlus\" ws-onclick=\"OnSeatPlus\" class=\"cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50\">\r\n                                +\r\n                            </button>\r\n                        </div>\r\n                        <p id=\"wsPriceHint\" class=\"mt-2 text-xs text-gray-500 dark:text-gray-400\">\r\n                            <span ws-hole=\"PriceHint\"></span>\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div class=\"fixed bottom-0 z-10 inset-x-0 px-12 border-t dark:border-gray-800 shadow-lg md:z-0 md:border-none md:shadow-none md:px-0 bg-white dark:bg-gray-900 dark:md:bg-transparent md:bg-transparent md:static mt-12 divide-y dark:divide-gray-800 text-gray-600 dark:text-gray-400\">\r\n                        <div class=\"py-3 flex justify-between\">\r\n                            <p>Subtotal</p>\r\n                            <p aria-live=\"polite\" class=\"font-medium text-gray-950 dark:text-white\">\r\n                                <span ws-hole=\"Subtotal\"></span>\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"py-3 flex justify-between\">\r\n                            <p>Taxes</p>\r\n                            <p class=\"font-medium text-gray-950 dark:text-white\">\r\n                                <span ws-hole=\"Taxes\"></span>\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"py-3 flex justify-between\">\r\n                            <p class=\"text-gray-950 dark:text-white font-medium\">Total</p>\r\n                            <p aria-live=\"polite\" class=\"font-medium text-gray-950 dark:text-white\">\r\n                                <span ws-hole=\"Total\"></span>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"pb-56 md:max-w-md md:w-1/2 md:pt-16 md:pb-16\">\r\n                    <div ws-replace=\"RightSideContent\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    "));
}
function smoothtextloader(h){
  return h?GetOrLoadTemplate("checkout", Some("smoothtextloader"), () => ParseHTMLIntoFakeRoot("<span class=\"relative inline-block align-bottom ${WrapperClasses}\">\r\n            <span ws-attr=\"SkeletonAttr\" class=\"block w-full h-full transition-opacity duration-500 ease-out\">\r\n                <span class=\"block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full\"></span>\r\n            </span>\r\n            <span ws-attr=\"ContentAttr\" class=\"absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center\">\r\n                <span ws-replace=\"Content\" class=\"w-full\"></span>\r\n            </span>\r\n        </span>"), h):PrepareTemplate("checkout", Some("smoothtextloader"), () => ParseHTMLIntoFakeRoot("<span class=\"relative inline-block align-bottom ${WrapperClasses}\">\r\n            <span ws-attr=\"SkeletonAttr\" class=\"block w-full h-full transition-opacity duration-500 ease-out\">\r\n                <span class=\"block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full\"></span>\r\n            </span>\r\n            <span ws-attr=\"ContentAttr\" class=\"absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center\">\r\n                <span ws-replace=\"Content\" class=\"w-full\"></span>\r\n            </span>\r\n        </span>"));
}
function DecodeJson_FSharpOption_1(){
  return Decoder_FSharpOption_1?Decoder_FSharpOption_1:Decoder_FSharpOption_1=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", Id_1(), 0]]]]))();
}
function DecodeJson_FSharpOption_4(){
  return Decoder_FSharpOption_4?Decoder_FSharpOption_4:Decoder_FSharpOption_4=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", DecodeJson_BillingData, 0]]]]))();
}
function EncodeJson_CheckoutRequest(){
  return Encoder_CheckoutRequest?Encoder_CheckoutRequest:Encoder_CheckoutRequest=(EncodeRecord(void 0, [["planCode", Id_1(), 0], ["interval", Id_1(), 0], ["seats", Id_1(), 0], ["billingData", EncodeJson_BillingData, 0]]))();
}
function DecodeJson_FSharpResult_2(){
  return Decoder_FSharpResult_2?Decoder_FSharpResult_2:Decoder_FSharpResult_2=(DecodeUnion(void 0, "$", [[0, [["$0", "ResultValue", Id_1(), 0]]], [1, [["$0", "ErrorValue", Id_1(), 0]]]]))();
}
function DecodeJson_BillingData(){
  return Decoder_BillingData?Decoder_BillingData:Decoder_BillingData=(DecodeRecord(void 0, [["email", Id_1(), 0], ["line1", Id_1(), 0], ["city", Id_1(), 0], ["postalCode", Id_1(), 0], ["country", Id_1(), 0], ["companyName", Id_1(), 1], ["taxId", Id_1(), 1]]))();
}
function EncodeJson_BillingData(){
  return Encoder_BillingData?Encoder_BillingData:Encoder_BillingData=(EncodeRecord(void 0, [["email", Id_1(), 0], ["line1", Id_1(), 0], ["city", Id_1(), 0], ["postalCode", Id_1(), 0], ["country", Id_1(), 0], ["companyName", Id_1(), 1], ["taxId", Id_1(), 1]]))();
}
function DecodeJson_PlanPrice(){
  return Decoder_PlanPrice?Decoder_PlanPrice:Decoder_PlanPrice=(DecodeRecord(void 0, [["code", Id_1(), 0], ["name", Id_1(), 0], ["description", Id_1(), 1], ["isPerSeat", Id_1(), 0], ["maxSeats", Id_1(), 1], ["interval", Id_1(), 0], ["currency", Id_1(), 0], ["unitAmountCents", Id_1(), 0]]))();
}
function FormErrorDoc(){
  return _c_6.FormErrorDoc;
}
function OnContinueClick(){
  const m=validateForm();
  if(m==null){
    FormError().Set(null);
    StartImmediate(Delay(() => TryWith(Delay(() => {
      ContinueDisabled().Set(true);
      ContinueText().Set("Processing\u2026");
      return Bind_1(startCheckout(buildPayload()), (a) => {
        let _1;
        return a!=null&&a.$==1&&(!IsNullOrWhiteSpace(a.$0)&&(_1=a.$0,true))?(globalThis.location.href=_1,resetContinueButton(),Zero()):(resetContinueButton(),Zero());
      });
    }), () => {
      resetContinueButton();
      return Zero();
    })), null);
  }
  else {
    const msg=m.$0;
    FormError().Set(Some(msg));
  }
}
function OnSeatMinus(){
  AdjustSeats(-1, SeatsTextVar());
}
function OnSeatPlus(){
  AdjustSeats(1, SeatsTextVar());
}
function validateForm(){
  const email=EmailVar().Get();
  const street=StreetVar().Get();
  const city=CityVar().Get();
  const postal=PostalVar().Get();
  const isCompany=IsCompanyVar().Get();
  const companyName=CompanyNameVar().Get();
  const vatin=VatinVar().Get();
  return isBlank(email)?Some("Please enter your email."):isBlank(street)?Some("Please enter your street address."):isBlank(city)?Some("Please enter your city."):isBlank(postal)?Some("Please enter your postal code."):isCompany&&isBlank(companyName)?Some("Please enter the company name."):isCompany&&isBlank(vatin)?Some("Please enter the VAT number."):null;
}
function FormError(){
  return _c_6.FormError;
}
function isBlank(s){
  return IsNullOrWhiteSpace(s==null?"":s);
}
function CountryOptionsDoc(){
  return _c_7.CountryOptionsDoc;
}
function PlanName(){
  return _c_7.PlanName;
}
function PlanPrice(){
  return _c_7.PlanPrice;
}
function PlanInterval(){
  return _c_7.PlanInterval;
}
function PriceHint(){
  return _c_7.PriceHint;
}
function Subtotal(){
  return _c_7.Subtotal;
}
function Taxes(){
  return _c_7.Taxes;
}
function Total(){
  return _c_7.Total;
}
function CurrentPlan(){
  return _c_7.CurrentPlan;
}
function Seats(){
  return _c_7.Seats;
}
function IsPerSeat(){
  return _c_7.IsPerSeat;
}
function SubtotalRaw(){
  return _c_7.SubtotalRaw;
}
function VatPercentage(){
  return _c_7.VatPercentage;
}
function TaxesRaw(){
  return _c_7.TaxesRaw;
}
function TotalRaw(){
  return _c_7.TotalRaw;
}
function Some(Value_1){
  return{$:1, $0:Value_1};
}
class View { }
let _c_1=Lazy((_i) => class Var_1 extends Object_1 {
  static {
    _c_1=_i(this);
  }
  static Create_1(v){
    return new ConcreteVar(false, {s:Ready(v, [])}, v);
  }
  static Lens(var_1, get_1, update){
    const id=Id();
    const view=Map(get_1, var_1.View);
    return new class extends Var {
      constructor(){
        super();
      }
      Get(){
        return get_1(var_1.Get());
      }
      Set(v){
        return var_1.Update((t) => update(t, v));
      }
      SetFinal(v){
        return this.Set(v);
      }
      Update(f){
        return var_1.Update((t) => update(t, f(get_1(t))));
      }
      UpdateMaybe(f){
        return var_1.UpdateMaybe((t) => {
          const x=f(get_1(t));
          return x==null?null:Some(update(t, x.$0));
        });
      }
      get View(){
        return view;
      }
      get Id(){
        return id;
      }
    }();
  }
  static { }
});
function Delay(mk){
  return(c) => {
    try {
      (mk())(c);
    }
    catch(e){
      c.k(No(e));
    }
  };
}
function Bind_1(r, f){
  return checkCancel((c) => {
    r(New((a) => {
      if(a.$==0){
        const x=a.$0;
        scheduler().Fork(() => {
          try {
            (f(x))(c);
          }
          catch(e){
            c.k(No(e));
          }
        });
      }
      else scheduler().Fork(() => {
        c.k(a);
      });
    }, c.ct));
  });
}
function Return(x){
  return(c) => {
    c.k(Ok(x));
  };
}
function StartImmediate(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  if(!ct.c)c(New((a) => {
    if(a.$==1)UncaughtAsyncError(a.$0);
  }, ct));
}
function Sleep(ms){
  return(c) => {
    let pending;
    let creg;
    pending=void 0;
    creg=void 0;
    pending=setTimeout(() => {
      creg.Dispose();
      scheduler().Fork(() => {
        c.k(Ok(null));
      });
    }, ms);
    creg=Register(c.ct, () => {
      clearTimeout(pending);
      scheduler().Fork(() => {
        cancel(c);
      });
    });
  };
}
function Zero(){
  return _c_9.Zero;
}
function checkCancel(r){
  return(c) => {
    if(c.ct.c)cancel(c);
    else r(c);
  };
}
function Combine(a, b){
  return Bind_1(a, () => b);
}
function TryWith(r, f){
  return(c) => {
    r(New((a) => {
      if(a.$==0)c.k(Ok(a.$0));
      else if(a.$==1){
        const e=a.$0;
        try {
          (f(e))(c);
        }
        catch(e_1){
          c.k(a);
        }
      }
      else c.k(a);
    }, c.ct));
  };
}
function defCTS(){
  return _c_9.defCTS;
}
function UncaughtAsyncError(e){
  console.log("WebSharper: Uncaught asynchronous exception", e);
}
function TryFinally(run, f){
  return(c) => {
    run(New((r) => {
      try {
        f();
        c.k(r);
      }
      catch(e){
        c.k(No(e));
      }
    }, c.ct));
  };
}
function Register(ct, callback){
  if(ct===noneCT())return{Dispose(){
    return null;
  }};
  else {
    const i=ct.r.push(callback)-1;
    return{Dispose(){
      return set(ct.r, i, () => { });
    }};
  }
}
function cancel(c){
  c.k(Cc(new OperationCanceledException("New", c.ct)));
}
function Parallel(cs){
  const cs_1=ofSeq(cs);
  return length(cs_1)===0?Return([]):(c) => {
    const n=cs_1.length;
    const o=[n];
    const a=new Array(n);
    for(let i=0, _1=n-1;i<=_1;i++)(((i_1) => scheduler().Fork(() => {
      (get(cs_1, i_1))(New((_2) => {
        let _3;
        const _4=o[0];
        switch(_4===0?0:_4===1?_2.$==0?1:(_3=_2,3):_2.$==0?2:(_3=_2,3)){
          case 0:
            return null;
          case 1:
            set(a, i_1, _2.$0);
            o[0]=0;
            return c.k(Ok(a));
          case 2:
            set(a, i_1, _2.$0);
            {
              o[0]=_4-1;
              return;
            }
            break;
          case 3:
            o[0]=0;
            return c.k(_3);
        }
      }, c.ct));
    }))(i));
  };
}
function scheduler(){
  return _c_9.scheduler;
}
function noneCT(){
  return _c_9.noneCT;
}
function Start(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  scheduler().Fork(() => {
    if(!ct.c)c(New((a) => {
      if(a.$==1)UncaughtAsyncError(a.$0);
    }, ct));
  });
}
function FromContinuations(subscribe){
  return(c) => {
    const continued=[false];
    const once=(cont) => {
      if(continued[0])FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
      else {
        continued[0]=true;
        scheduler().Fork(cont);
      }
    };
    subscribe((a) => {
      once(() => {
        c.k(Ok(a));
      });
    }, (e) => {
      once(() => {
        c.k(No(e));
      });
    }, (e) => {
      once(() => {
        c.k(Cc(e));
      });
    });
  };
}
function GetCT(){
  return _c_9.GetCT;
}
function Logout_2(){
  return(new AjaxRemotingProvider()).Async("IRemotingContract/Logout", []);
}
function Me(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/Me", []), (o) => Return((DecodeJson_FSharpOption_1())(o)));
}
function GetBillingData(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetBillingData", []), (o) => Return((DecodeJson_FSharpOption_4())(o)));
}
function StripeCheckout(_1){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/StripeCheckout", [(EncodeJson_CheckoutRequest())(_1)]), (o) => Return((DecodeJson_FSharpResult_2())(o)));
}
function GetPlanPrices(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetPlanPrices", []), (o) => Return(((DecodeArray(DecodeJson_PlanPrice))())(o)));
}
function Dynamic_1(view, set_1){
  return Attr.A1(new DynamicAttrNode(view, set_1));
}
function AppendTree(a, b){
  if(a===null)return b;
  else if(b===null)return a;
  else {
    const x=Attr.A2(a, b);
    SetFlags(x, Flags(a)|Flags(b));
    return x;
  }
}
function EmptyAttr(){
  return _c_10.EmptyAttr;
}
function SetFlags(a, f){
  a.flags=f;
}
function Flags(a){
  return a!==null&&a.hasOwnProperty("flags")?a.flags:0;
}
function Insert(elem, tree){
  const nodes=[];
  const oar=[];
  function loop(node){
    while(true)
      {
        if(!(node===null)){
          if(node!=null&&node.$==1)return nodes.push(node.$0);
          else if(node!=null&&node.$==2){
            const b=node.$1;
            const a=node.$0;
            loop(a);
            node=b;
          }
          else return node!=null&&node.$==3?node.$0(elem):node!=null&&node.$==4?oar.push(node.$0):null;
        }
        else return null;
      }
  }
  loop(tree);
  const arr=nodes.slice(0);
  let _1=New_6(elem, Flags(tree), arr, oar.length===0?null:Some((el) => {
    iter((f) => {
      f(el);
    }, oar);
  }));
  return _1;
}
function Updates(dyn){
  return MapTreeReduce((x) => x.NChanged, Const(), Map2Unit, dyn.DynNodes);
}
function Empty(e){
  return New_6(e, 0, [], null);
}
function HasExitAnim(attr_1){
  const flag=2;
  return(attr_1.DynFlags&flag)===flag;
}
function GetExitAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetExitAnim(_2));
}
function HasEnterAnim(attr_1){
  const flag=1;
  return(attr_1.DynFlags&flag)===flag;
}
function GetEnterAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetEnterAnim(_2));
}
function HasChangeAnim(attr_1){
  const flag=4;
  return(attr_1.DynFlags&flag)===flag;
}
function GetChangeAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetChangeAnim(_2));
}
function GetAnim(dyn, f){
  return Concat(map_2((n) => f(n, dyn.DynElem), dyn.DynNodes));
}
function Sync(elem, dyn){
  iter_1((d) => {
    d.NSync(elem);
  }, dyn.DynNodes);
}
function AddClass(element, cl){
  const c=getClass(element);
  if(c=="")setClass(element, cl);
  else!clsRE(cl).test(c)?setClass(element, c+" "+cl):void 0;
}
function RemoveClass(element, cl){
  let this_1=clsRE(cl);
  let _1=getClass(element).replace(this_1, (_2, _3, _4) => _3==""||_4==""?"":" ");
  setClass(element, _1);
}
function getClass(element){
  return element instanceof SVGElement?element.getAttribute("class"):element.className;
}
function setClass(element, value){
  if(element instanceof SVGElement)element.setAttribute("class", value);
  else element.className=value;
}
function clsRE(cls){
  return new RegExp("(\\s+|^)"+cls+"(?:\\s+"+cls+")*(\\s+|$)", "g");
}
function ParseHTMLIntoFakeRoot(elem){
  const root=globalThis.document.createElement("div");
  if(!rhtml().test(elem)){
    root.appendChild(globalThis.document.createTextNode(elem));
    return root;
  }
  else {
    const m=rtagName().exec(elem);
    const tag=Equals(m, null)?"":get(m, 1).toLowerCase();
    const w=(wrapMap())[tag];
    const p=w?w:defaultWrap();
    root.innerHTML=p[1]+elem.replace(rxhtmlTag(), "<$1></$2>")+p[2];
    function unwrap(elt, a){
      while(true)
        {
          if(a===0)return elt;
          else {
            const i=a;
            elt=elt.lastChild;
            a=i-1;
          }
        }
    }
    return(((a) => {
      const _1=a;
      return(_2) => unwrap(_1, _2);
    })(root))(p[0]);
  }
}
function rhtml(){
  return _c_14.rhtml;
}
function wrapMap(){
  return _c_14.wrapMap;
}
function defaultWrap(){
  return _c_14.defaultWrap;
}
function rxhtmlTag(){
  return _c_14.rxhtmlTag;
}
function rtagName(){
  return _c_14.rtagName;
}
function IterSelector(el, selector, f){
  const l=el.querySelectorAll(selector);
  for(let i=0, _1=l.length-1;i<=_1;i++)f(l[i]);
}
function ChildrenArray(element){
  const a=[];
  for(let i=0, _1=element.childNodes.length-1;i<=_1;i++)a.push(element.childNodes[i]);
  return a;
}
function IterSelectorDoc(selector, f){
  const l=globalThis.document.querySelectorAll(selector);
  for(let i=0, _1=l.length-1;i<=_1;i++)f(l[i]);
}
function InsertAt(parent, pos, node){
  let _1;
  if(node.parentNode===parent){
    const m=node.nextSibling;
    let _2=Equals(m, null)?null:m;
    _1=pos===_2;
  }
  else _1=false;
  if(!_1)parent.insertBefore(node, pos);
}
function RemoveNode(parent, el){
  if(el.parentNode===parent)parent.removeChild(el);
}
function Map_1(fn, sn){
  const m=sn.s;
  if(m!=null&&m.$==0)return{s:Forever(fn(m.$0))};
  else {
    const res={s:Waiting([], [])};
    When(sn, (a) => {
      MarkDone(res, sn, fn(a));
    }, res);
    return res;
  }
}
function Map2_1(fn, sn1, sn2){
  const _1=sn1.s;
  const _2=sn2.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?{s:Forever(fn(_1.$0, _2.$0))}:Map2Opt1(fn, _1.$0, sn2);
  else if(_2!=null&&_2.$==0)return Map2Opt2(fn, _2.$0, sn1);
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _3=ValueAndForever(sn1);
        const _4=ValueAndForever(sn2);
        if(_3!=null&&_3.$==1)if(_4!=null&&_4.$==1)if(_3.$0[1]&&_4.$0[1])MarkForever(res, fn(_3.$0[0], _4.$0[0]));
        else MarkReady(res, fn(_3.$0[0], _4.$0[0]));
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    return res;
  }
}
function WhenObsoleteRun(snap, obs){
  const m=snap.s;
  if(m==null)obs();
  else m!=null&&m.$==2?(m.$0,m.$1.push(obs)):m!=null&&m.$==3?(m.$0,m.$1.push(obs)):m.$0;
}
function When(snap, avail, obs){
  const m=snap.s;
  if(m==null)Obsolete(obs);
  else if(m!=null&&m.$==2){
    const v=m.$0;
    EnqueueSafe(m.$1, obs);
    avail(v);
  }
  else if(m!=null&&m.$==3){
    const q2=m.$1;
    m.$0.push(avail);
    EnqueueSafe(q2, obs);
  }
  else avail(m.$0);
}
function MarkDone(res, sn, v){
  const _1=sn.s;
  if(_1!=null&&_1.$==0)MarkForever(res, v);
  else MarkReady(res, v);
}
function Map2Opt1(fn, x, sn2){
  return Map_1((y) => fn(x, y), sn2);
}
function Map2Opt2(fn, y, sn1){
  return Map_1((x) => fn(x, y), sn1);
}
function ValueAndForever(snap){
  const m=snap.s;
  return m!=null&&m.$==0?Some([m.$0, true]):m!=null&&m.$==2?Some([m.$0, false]):null;
}
function MarkForever(sn, v){
  const m=sn.s;
  if(m!=null&&m.$==3){
    const q=m.$0;
    sn.s=Forever(v);
    for(let i=0, _1=length(q)-1;i<=_1;i++)(get(q, i))(v);
  }
  else void 0;
}
function MarkReady(sn, v){
  const m=sn.s;
  if(m!=null&&m.$==3){
    const q2=m.$1;
    const q1=m.$0;
    sn.s=Ready(v, q2);
    for(let i=0, _1=length(q1)-1;i<=_1;i++)(get(q1, i))(v);
  }
  else void 0;
}
function EnqueueSafe(q, x){
  q.push(x);
  if(q.length%20===0){
    const qcopy=q.slice(0);
    Clear(q);
    for(let i=0, _1=length(qcopy)-1;i<=_1;i++){
      const o=get(qcopy, i);
      if(typeof o=="object")(((sn) => {
        if(sn.s)q.push(sn);
      })(o));
      else(((f) => {
        q.push(f);
      })(o));
    }
  }
  else void 0;
}
function Map3_1(fn, sn1, sn2, sn3){
  const _1=sn1.s;
  const _2=sn2.s;
  const _3=sn3.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?_3!=null&&_3.$==0?{s:Forever(fn(_1.$0, _2.$0, _3.$0))}:Map3Opt1(fn, _1.$0, _2.$0, sn3):_3!=null&&_3.$==0?Map3Opt2(fn, _1.$0, _3.$0, sn2):Map3Opt3(fn, _1.$0, sn2, sn3);
  else if(_2!=null&&_2.$==0)return _3!=null&&_3.$==0?Map3Opt4(fn, _2.$0, _3.$0, sn1):Map3Opt5(fn, _2.$0, sn1, sn3);
  else if(_3!=null&&_3.$==0)return Map3Opt6(fn, _3.$0, sn1, sn2);
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _4=ValueAndForever(sn1);
        const _5=ValueAndForever(sn2);
        const _6=ValueAndForever(sn3);
        if(_4!=null&&_4.$==1)if(_5!=null&&_5.$==1)if(_6!=null&&_6.$==1)if(_4.$0[1]&&_5.$0[1]&&_6.$0[1])MarkForever(res, fn(_4.$0[0], _5.$0[0], _6.$0[0]));
        else MarkReady(res, fn(_4.$0[0], _5.$0[0], _6.$0[0]));
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    When(sn3, cont, res);
    return res;
  }
}
function Map2Unit_1(sn1, sn2){
  const _1=sn1.s;
  const _2=sn2.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?{s:Forever(null)}:sn2;
  else if(_2!=null&&_2.$==0)return sn1;
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _3=ValueAndForever(sn1);
        const _4=ValueAndForever(sn2);
        if(_3!=null&&_3.$==1)if(_4!=null&&_4.$==1)if(_3.$0[1]&&_4.$0[1])MarkForever(res, null);
        else MarkReady(res, null);
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    return res;
  }
}
function Map3Opt1(fn, x, y, sn3){
  return Map_1((z) => fn(x, y, z), sn3);
}
function Map3Opt2(fn, x, z, sn2){
  return Map_1((y) => fn(x, y, z), sn2);
}
function Map3Opt3(fn, x, sn2, sn3){
  return Map2_1((_1, _2) => fn(x, _1, _2), sn2, sn3);
}
function Map3Opt4(fn, y, z, sn1){
  return Map_1((x) => fn(x, y, z), sn1);
}
function Map3Opt5(fn, y, sn1, sn3){
  return Map2_1((_1, _2) => fn(_1, y, _2), sn1, sn3);
}
function Map3Opt6(fn, z, sn1, sn2){
  return Map2_1((_1, _2) => fn(_1, _2, z), sn1, sn2);
}
function Join_1(snap){
  const res={s:Waiting([], [])};
  When(snap, (x) => {
    const y=x();
    When(y, (v) => {
      let _1;
      const _2=y.s;
      if(_2!=null&&_2.$==0){
        const _3=snap.s;
        _1=_3!=null&&_3.$==0;
      }
      else _1=false;
      if(_1)MarkForever(res, v);
      else MarkReady(res, v);
    }, res);
  }, res);
  return res;
}
function WhenRun(snap, avail, obs){
  const m=snap.s;
  if(m==null)obs();
  else if(m!=null&&m.$==2){
    const v=m.$0;
    m.$1.push(obs);
    avail(v);
  }
  else if(m!=null&&m.$==3){
    const q2=m.$1;
    m.$0.push(avail);
    q2.push(obs);
  }
  else avail(m.$0);
}
function Sequence_1(snaps){
  const snaps_1=ofSeq(snaps);
  if(snaps_1.length==0)return{s:Forever([])};
  else {
    const res={s:Waiting([], [])};
    const w=[length(snaps_1)-1];
    const cont=() => {
      if(w[0]===0){
        const vs=map_2((s) => {
          const m=s.s;
          return m!=null&&m.$==0?m.$0:m!=null&&m.$==2?m.$0:FailWith("value not found by View.Sequence");
        }, snaps_1);
        if(forall_1((s) => {
          const _1=s.s;
          return _1!=null&&_1.$==0;
        }, snaps_1))MarkForever(res, vs);
        else MarkReady(res, vs);
      }
      else w[0]=w[0]-1;
    };
    iter_1((s) => {
      When(s, cont, res);
    }, snaps_1);
    return res;
  }
}
function Copy(sn){
  const m=sn.s;
  if(m==null)return sn;
  else if(m!=null&&m.$==2){
    const res={s:Ready(m.$0, [])};
    WhenObsolete(sn, res);
    return res;
  }
  else if(m!=null&&m.$==3){
    const res_1={s:Waiting([], [])};
    When(sn, (v) => {
      MarkDone(res_1, sn, v);
    }, res_1);
    return res_1;
  }
  else return sn;
}
function WhenObsolete(snap, obs){
  const m=snap.s;
  if(m==null)Obsolete(obs);
  else m!=null&&m.$==2?(m.$0,EnqueueSafe(m.$1, obs)):m!=null&&m.$==3?(m.$0,EnqueueSafe(m.$1, obs)):m.$0;
}
function ofSeqNonCopying(xs){
  if(xs instanceof Array)return xs;
  else if(xs instanceof FSharpList)return ofList(xs);
  else if(xs===null)return[];
  else {
    const q=[];
    const o=Get(xs);
    try {
      while(o.MoveNext())
        q.push(o.Current);
      return q;
    }
    finally {
      const _1=o;
      if(typeof _1=="object"&&isIDisposable(_1))o.Dispose();
    }
  }
}
function TreeReduce(defaultValue, reduction, array){
  const l=length(array);
  function loop(off){
    return(len) => {
      let _1;
      switch(len<=0?0:len===1?off>=0&&off<l?1:(_1=len,2):(_1=len,2)){
        case 0:
          return defaultValue;
        case 1:
          return get(array, off);
        case 2:
          const l2=len/2>>0;
          return reduction((loop(off))(l2), (loop(off+l2))(len-l2));
      }
    };
  }
  return(loop(0))(l);
}
function MapTreeReduce(mapping, defaultValue, reduction, array){
  const l=length(array);
  function loop(off){
    return(len) => {
      let _1;
      switch(len<=0?0:len===1?off>=0&&off<l?1:(_1=len,2):(_1=len,2)){
        case 0:
          return defaultValue;
        case 1:
          return mapping(get(array, off));
        case 2:
          const l2=len/2>>0;
          return reduction((loop(off))(l2), (loop(off+l2))(len-l2));
      }
    };
  }
  return(loop(0))(l);
}
function TextDoc(Item){
  return{$:4, $0:Item};
}
function EmbedDoc(Item){
  return{$:2, $0:Item};
}
function AppendDoc(Item1, Item2){
  return{
    $:0, 
    $0:Item1, 
    $1:Item2
  };
}
function TextNodeDoc(Item){
  return{$:5, $0:Item};
}
function TreeDoc(Item){
  return{$:6, $0:Item};
}
function ElemDoc(Item){
  return{$:1, $0:Item};
}
class Elt extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  get Value(){
    return this.fillWith;
  }
  WithName(n){
    return new Elt(n, this.fillWith);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class VarStr extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new VarStr(n, this.fillWith);
  }
  ForTextView(){
    return Some(this.fillWith.View);
  }
  AddAttribute(addAttr, el){
    (addAttr(el))(Value(this.fillWith));
  }
  get AsChoiceView(){
    return Choice2Of2(Map(String, this.fillWith.View));
  }
  ApplyVarHole(el){
    applyTypedVarHole(StringApply(), this.fillWith, el);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
let _c_2=Lazy((_i) => class $StartupCode_CheckoutState {
  static {
    _c_2=_i(this);
  }
  static ContinueDisabled;
  static ContinueText;
  static VatinVar;
  static CompanyNameVar;
  static IsCompanyVar;
  static CountryVar;
  static PostalVar;
  static CityVar;
  static StreetVar;
  static EmailVar;
  static SeatsTextVar;
  static SelectedIntervalVar;
  static SelectedPlanVar;
  static CheckoutFormVar;
  static plansVar;
  static BackLinkLabel;
  static backLinkHref;
  static MyAccountUrl;
  static {
    this.MyAccountUrl="/account";
    this.backLinkHref=_c_1.Create_1("/support#plans");
    this.BackLinkLabel=_c_1.Create_1("Plans");
    this.plansVar=_c_1.Create_1([]);
    this.CheckoutFormVar=_c_1.Create_1(New_2("pro", Year, "1", "", "", "", "", "HU", false, "", ""));
    this.SelectedPlanVar=_c_1.Lens(CheckoutFormVar(), (f) => f.plan, (_1, _2) => New_2(_2, _1.interval, _1.seatsText, _1.email, _1.street, _1.city, _1.postal, _1.country, _1.isCompany, _1.companyName, _1.vatin));
    this.SelectedIntervalVar=_c_1.Lens(CheckoutFormVar(), (f) => f.interval, (_1, _2) => New_2(_1.plan, _2, _1.seatsText, _1.email, _1.street, _1.city, _1.postal, _1.country, _1.isCompany, _1.companyName, _1.vatin));
    this.SeatsTextVar=_c_1.Lens(CheckoutFormVar(), (f) => f.seatsText, (_1, _2) => New_2(_1.plan, _1.interval, _2, _1.email, _1.street, _1.city, _1.postal, _1.country, _1.isCompany, _1.companyName, _1.vatin));
    this.EmailVar=_c_1.Lens(CheckoutFormVar(), (f) => f.email, (_1, _2) => New_2(_1.plan, _1.interval, _1.seatsText, _2, _1.street, _1.city, _1.postal, _1.country, _1.isCompany, _1.companyName, _1.vatin));
    this.StreetVar=_c_1.Lens(CheckoutFormVar(), (f) => f.street, (_1, _2) => New_2(_1.plan, _1.interval, _1.seatsText, _1.email, _2, _1.city, _1.postal, _1.country, _1.isCompany, _1.companyName, _1.vatin));
    this.CityVar=_c_1.Lens(CheckoutFormVar(), (f) => f.city, (_1, _2) => New_2(_1.plan, _1.interval, _1.seatsText, _1.email, _1.street, _2, _1.postal, _1.country, _1.isCompany, _1.companyName, _1.vatin));
    this.PostalVar=_c_1.Lens(CheckoutFormVar(), (f) => f.postal, (_1, _2) => New_2(_1.plan, _1.interval, _1.seatsText, _1.email, _1.street, _1.city, _2, _1.country, _1.isCompany, _1.companyName, _1.vatin));
    this.CountryVar=_c_1.Lens(CheckoutFormVar(), (f) => f.country, (_1, _2) => New_2(_1.plan, _1.interval, _1.seatsText, _1.email, _1.street, _1.city, _1.postal, _2, _1.isCompany, _1.companyName, _1.vatin));
    this.IsCompanyVar=_c_1.Lens(CheckoutFormVar(), (f) => f.isCompany, (_1, _2) => New_2(_1.plan, _1.interval, _1.seatsText, _1.email, _1.street, _1.city, _1.postal, _1.country, _2, _1.companyName, _1.vatin));
    this.CompanyNameVar=_c_1.Lens(CheckoutFormVar(), (f) => f.companyName, (_1, _2) => New_2(_1.plan, _1.interval, _1.seatsText, _1.email, _1.street, _1.city, _1.postal, _1.country, _1.isCompany, _2, _1.vatin));
    this.VatinVar=_c_1.Lens(CheckoutFormVar(), (f) => f.vatin, (_1, _2) => New_2(_1.plan, _1.interval, _1.seatsText, _1.email, _1.street, _1.city, _1.postal, _1.country, _1.isCompany, _1.companyName, _2));
    this.ContinueText=_c_1.Create_1("Continue to payment");
    this.ContinueDisabled=_c_1.Create_1(false);
  }
});
let _c_3=Lazy((_i) => class Attrs {
  static {
    _c_3=_i(this);
  }
  static BackLinkAttr;
  static PaymentSectionAttr;
  static AuthSectionAttr;
  static ContinueTextView;
  static {
    this.ContinueTextView=ContinueText().View;
    this.AuthSectionAttr=DynamicClassPred("hidden", IsAuthedView());
    this.PaymentSectionAttr=Dynamic("class", Map((isAuthed) => isAuthed?"":"hidden", IsAuthedView()));
    this.BackLinkAttr=Attr.Concat([Dynamic("href", backLinkHref().View), Handler("click", () =>(e) => IsNullOrWhiteSpace(globalThis.document.referrer)&&globalThis.history.length>1?(e.preventDefault(),globalThis.history.back()):null)]);
  }
});
class AfterRenderQ extends TemplateHole {
  name;
  key;
  fillWith;
  get Name(){
    return this.name;
  }
  get Value(){
    return this.fillWith;
  }
  WithName(n){
    return new AfterRenderQ(n, this.key, this.fillWith);
  }
  constructor(name, key, fillWith){
    super();
    this.name=name;
    this.key=key;
    this.fillWith=fillWith;
  }
}
let _c_4=Lazy((_i) => class $StartupCode_AuthClient {
  static {
    _c_4=_i(this);
  }
  static IsFetchingView;
  static IsAuthedView;
  static UserView;
  static isFetchingVar;
  static userVar;
  static API;
  static {
    this.API="https://api.websharper.io";
    set_EndPoint("https://api.websharper.io");
    this.userVar=_c_1.Create_1(null);
    this.isFetchingVar=_c_1.Create_1(false);
    this.UserView=userVar().View;
    this.IsAuthedView=Map((o) => o!=null, userVar().View);
    this.IsFetchingView=isFetchingVar().View;
  }
});
let _c_5=Lazy((_i) => class $StartupCode_Page {
  static {
    _c_5=_i(this);
  }
  static IsLoading;
  static {
    this.IsLoading=_c_1.Create_1(true);
  }
});
let _c_6=Lazy((_i) => class $StartupCode_Controller {
  static {
    _c_6=_i(this);
  }
  static FormErrorDoc;
  static FormError;
  static {
    this.FormError=_c_1.Create_1(null);
    this.FormErrorDoc=Doc.BindView((a) => {
      if(a==null)return Doc.Empty;
      else {
        const msg=a.$0;
        return Doc.Element("div", [Attr.Create("class", "mt-2 text-sm text-red-500 dark:text-red-400")], [Doc.TextNode(msg)]);
      }
    }, FormError().View);
  }
});
class VarBool extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new VarBool(n, this.fillWith);
  }
  ForTextView(){
    return Some(Map(String, this.fillWith.View));
  }
  AddAttribute(addAttr, el){
    (addAttr(el))(Checked(this.fillWith));
  }
  get AsChoiceView(){
    return Choice2Of2(Map(String, this.fillWith.View));
  }
  ApplyVarHole(el){
    applyTypedVarHole(BoolCheckedApply(), this.fillWith, el);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
let _c_7=Lazy((_i) => class Pricing {
  static {
    _c_7=_i(this);
  }
  static CountryOptionsDoc;
  static Total;
  static TotalRaw;
  static Taxes;
  static TaxesRaw;
  static Subtotal;
  static SubtotalRaw;
  static VatPercentage;
  static PriceHint;
  static PlanInterval;
  static PlanPrice;
  static PlanName;
  static IsPerSeat;
  static CurrentPlan;
  static Seats;
  static {
    this.Seats=Map(parseSeats, SeatsTextVar().View);
    this.CurrentPlan=Map3((_1, _2, _3) => {
      const code=_2.toLowerCase();
      const intervalStr=intervalAsString(_3);
      return tryFind((p) => p.code.toLowerCase()==code&&String(p.interval).toLowerCase()==intervalStr, _1);
    }, plansVar().View, SelectedPlanVar().View, SelectedIntervalVar().View);
    this.IsPerSeat=Map((a) => a==null||a.$0.isPerSeat, CurrentPlan());
    this.PlanName=Map((opt) => {
      let _1;
      return opt!=null&&opt.$==1&&(!IsNullOrWhiteSpace(opt.$0.name)&&(_1=opt.$0,true))?_1.name:SelectedPlanVar().Get()=="freelancer"?"Freelancer":"WebSharper Professional";
    }, CurrentPlan());
    this.PlanPrice=Map((planPriceOpt) => {
      const defaultAmount=SelectedIntervalVar().Get().$==1?2500:250;
      const o=planPriceOpt==null?null:Some(planPriceOpt.$0.unitAmountCents/100);
      let _1=o==null?defaultAmount:o.$0;
      return usd(_1);
    }, CurrentPlan());
    this.PlanInterval=Map((interval) => interval.$==1?"year":"month", SelectedIntervalVar().View);
    this.PriceHint=Map2((_1, _2) => {
      let _3;
      const o=_1==null?null:Some(_1.$0.unitAmountCents/100);
      const price=o==null?_2.$==1?2500:250:o.$0;
      const every=_2.$==1?"year":"month";
      return _1!=null&&_1.$==1&&(_1.$0.isPerSeat&&(_3=_1.$0,true))?((((_4) =>(_5) =>(_6) => _4("Price is "+toSafe(_5)+" per seat per "+toSafe(_6)+"."))((x) => x))(usd(price)))(every):((((_4) =>(_5) =>(_6) => _4("Price is "+toSafe(_5)+" per "+toSafe(_6)+"."))((x) => x))(usd(price)))(every);
    }, CurrentPlan(), SelectedIntervalVar().View);
    this.VatPercentage=Map3(getVATPercentage, CountryVar().View, IsCompanyVar().View, VatinVar().View);
    this.SubtotalRaw=Map3((_1, _2, _3) => {
      let _4=_2?clampSeats(_3):1;
      const o=_1==null?null:Some(_1.$0.unitAmountCents);
      let _5=o==null?250000:o.$0;
      let _6=_4*_5;
      return _6/100;
    }, CurrentPlan(), IsPerSeat(), Seats());
    this.Subtotal=Map(usd, SubtotalRaw());
    this.TaxesRaw=Map2((_1, _2) => Math.round(_1*_2/100), SubtotalRaw(), VatPercentage());
    this.Taxes=Map(usd, TaxesRaw());
    this.TotalRaw=Map2((_1, _2) => _1+_2, SubtotalRaw(), TaxesRaw());
    this.Total=Map(usd, TotalRaw());
    this.CountryOptionsDoc=map((_1) => Doc.Element("option", [Attr.Create("value", _1[0])], [Doc.TextNode(_1[1])]), List());
  }
});
function startCheckout(payload){
  return Delay(() => TryWith(Delay(() => Bind_1(StripeCheckout(payload), (a) => a.$==1?(alertError(a.$0),Return(null)):Return(Some(a.$0)))), () => {
    alertError("Something went wrong. Please contact support or try again later.");
    return Return(null);
  }));
}
function AdjustSeats(delta, value){
  const s=value.Get();
  let _1=s==null?"":Trim(s);
  let _2=((s_1) => {
    let o;
    const m=(o=0,[TryParse(s_1, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    return m[0]?m[1]:1;
  })(_1);
  let _3=_2+delta;
  let _4=clampSeats(_3);
  let _5=String(_4);
  value.Set(_5);
}
function intervalAsString(a){
  return a.$==1?"year":"month";
}
function clampSeats(v){
  const a=1;
  const a_1=999;
  const b=Compare(a_1, v)===-1?a_1:v;
  return Compare(a, b)===1?a:b;
}
function ofArray(arr){
  let r=FSharpList.Empty;
  for(let i=length(arr)-1, _1=0;i>=_1;i--)r=FSharpList.Cons(get(arr, i), r);
  return r;
}
function map(f, x){
  let r;
  let l;
  let go;
  if(x.$==0)return x;
  else {
    const res=Create_1(FSharpList, {$:1});
    r=res;
    l=x;
    go=true;
    while(go)
      {
        r.$0=f(l.$0);
        l=l.$1;
        if(l.$==0)go=false;
        else {
          const t=Create_1(FSharpList, {$:1});
          r=(r.$1=t,t);
        }
      }
    r.$1=FSharpList.Empty;
    return res;
  }
}
function head(l){
  return l.$==1?l.$0:listEmpty();
}
function tail(l){
  return l.$==1?l.$1:listEmpty();
}
function listEmpty(){
  return FailWith("The input list was empty.");
}
class Dictionary extends Object_1 {
  equals;
  hash;
  count;
  data;
  set_Item(k, v){
    this.set(k, v);
  }
  set(k, v){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null){
      this.count=this.count+1;
      this.data[h]=new Array({K:k, V:v});
    }
    else {
      const m=tryFindIndex((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      if(m==null){
        this.count=this.count+1;
        d.push({K:k, V:v});
      }
      else d[m.$0]={K:k, V:v};
    }
  }
  TryGetValue(k, res){
    const d=this.data[this.hash(k)];
    if(d==null)return false;
    else {
      const v=tryPick((a) => {
        const a_1=KeyValue(a);
        return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
      }, d);
      return v!=null&&v.$==1&&(res.set(v.$0),true);
    }
  }
  ContainsKey(k){
    const d=this.data[this.hash(k)];
    return d==null?false:exists_1((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d);
  }
  GetEnumerator(){
    return Get0(concat_1(GetFieldValues(this.data)));
  }
  Item(k){
    return this.get(k);
  }
  get Values(){
    return new ValueCollection(this);
  }
  RemoveKey(k){
    return this.remove(k);
  }
  get Keys(){
    return new KeyCollection(this);
  }
  get(k){
    const d=this.data[this.hash(k)];
    return d==null?notPresent():pick((a) => {
      const a_1=KeyValue(a);
      return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
    }, d);
  }
  remove(k){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null)return false;
    else {
      const r=filter((a) =>!this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      return length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true);
    }
  }
  DAdd(k, v){
    this.add(k, v);
  }
  add(k, v){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null){
      this.count=this.count+1;
      this.data[h]=new Array({K:k, V:v});
    }
    else {
      exists_1((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d)?alreadyAdded():void 0;
      this.count=this.count+1;
      d.push({K:k, V:v});
    }
  }
  constructor(i, _1, _2, _3){
    if(i=="New_5"){
      i="New_6";
      _1=[];
      _2=Equals;
      _3=Hash;
    }
    if(i=="New_6"){
      const init_2=_1;
      const equals=_2;
      const hash=_3;
      super();
      this.equals=equals;
      this.hash=hash;
      this.count=0;
      this.data=[];
      const e=Get(init_2);
      try {
        while(e.MoveNext())
          {
            const x=e.Current;
            this.set(x.K, x.V);
          }
      }
      finally {
        const _4=e;
        if(typeof _4=="object"&&isIDisposable(_4))e.Dispose();
      }
    }
  }
}
class HashSet extends Object_1 {
  equals;
  hash;
  data;
  count;
  SAdd(item){
    return this.add(item);
  }
  Contains(item){
    const arr=this.data[this.hash(item)];
    return arr==null?false:this.arrContains(item, arr);
  }
  add(item){
    const h=this.hash(item);
    const arr=this.data[h];
    return arr==null?(this.data[h]=[item],this.count=this.count+1,true):this.arrContains(item, arr)?false:(arr.push(item),this.count=this.count+1,true);
  }
  arrContains(item, arr){
    let c=true;
    let i=0;
    const l=arr.length;
    while(c&&i<l)
      if(this.equals.apply(null, [arr[i], item]))c=false;
      else i=i+1;
    return!c;
  }
  GetEnumerator(){
    return Get(concat_3(this.data));
  }
  ExceptWith(xs){
    const e=Get(xs);
    try {
      while(e.MoveNext())
        this.Remove(e.Current);
    }
    finally {
      const _1=e;
      if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
    }
  }
  get Count(){
    return this.count;
  }
  IntersectWith(xs){
    const other=new HashSet("New_4", xs, this.equals, this.hash);
    const all=concat_3(this.data);
    for(let i=0, _1=all.length-1;i<=_1;i++){
      const item=all[i];
      if(!other.Contains(item))this.Remove(item);
    }
  }
  Remove(item){
    const arr=this.data[this.hash(item)];
    return arr==null?false:this.arrRemove(item, arr)&&(this.count=this.count-1,true);
  }
  CopyTo(arr, index){
    const all=concat_3(this.data);
    for(let i=0, _1=all.length-1;i<=_1;i++)set(arr, i+index, all[i]);
  }
  arrRemove(item, arr){
    let c=true;
    let i=0;
    const l=arr.length;
    while(c&&i<l)
      if(this.equals.apply(null, [arr[i], item])){
        arr.splice(i, 1);
        c=false;
      }
      else i=i+1;
    return!c;
  }
  constructor(i, _1, _2, _3){
    if(i=="New_3"){
      i="New_4";
      _1=[];
      _2=Equals;
      _3=Hash;
    }
    let init_2;
    if(i=="New_2"){
      init_2=_1;
      i="New_4";
      _1=init_2;
      _2=Equals;
      _3=Hash;
    }
    if(i=="New_4"){
      const init_3=_1;
      const equals=_2;
      const hash=_3;
      super();
      this.equals=equals;
      this.hash=hash;
      this.data=[];
      this.count=0;
      const e=Get(init_3);
      try {
        while(e.MoveNext())
          this.add(e.Current);
      }
      finally {
        const _4=e;
        if(typeof _4=="object"&&isIDisposable(_4))e.Dispose();
      }
    }
  }
}
function append(s1, s2){
  return{GetEnumerator:() => {
    const e1=Get(s1);
    const first=[true];
    return new T(e1, null, (x) => {
      if(x.s.MoveNext()){
        x.c=x.s.Current;
        return true;
      }
      else {
        const x_1=x.s;
        if(!Equals(x_1, null))x_1.Dispose();
        x.s=null;
        return first[0]&&(first[0]=false,x.s=Get(s2),x.s.MoveNext()?(x.c=x.s.Current,true):(x.s.Dispose(),x.s=null,false));
      }
    }, (x) => {
      const x_1=x.s;
      if(!Equals(x_1, null))x_1.Dispose();
    });
  }};
}
function delay(f){
  return{GetEnumerator:() => Get(f())};
}
function collect(f, s){
  return concat(map_1(f, s));
}
function map_1(f, s){
  return{GetEnumerator:() => {
    const en=Get(s);
    return new T(null, null, (e) => en.MoveNext()&&(e.c=f(en.Current),true), () => {
      en.Dispose();
    });
  }};
}
function head_1(s){
  const e=Get(s);
  try {
    return e.MoveNext()?e.Current:insufficient();
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
function fold(f, x, s){
  let r=x;
  const e=Get(s);
  try {
    while(e.MoveNext())
      r=f(r, e.Current);
    return r;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
function concat(ss){
  return{GetEnumerator:() => {
    const outerE=Get(ss);
    function next(st){
      while(true)
        {
          const m=st.s;
          if(Equals(m, null)){
            if(outerE.MoveNext()){
              st.s=Get(outerE.Current);
              st=st;
            }
            else {
              outerE.Dispose();
              return false;
            }
          }
          else if(m.MoveNext()){
            st.c=m.Current;
            return true;
          }
          else {
            st.Dispose();
            st.s=null;
            st=st;
          }
        }
    }
    return new T(null, null, next, (st) => {
      const x=st.s;
      if(!Equals(x, null))x.Dispose();
      const x_1=outerE;
      if(!Equals(x_1, null))x_1.Dispose();
    });
  }};
}
function init(n, f){
  return take(n, initInfinite(f));
}
function iter(p, s){
  const e=Get(s);
  try {
    while(e.MoveNext())
      p(e.Current);
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
function take(n, s){
  n<0?nonNegative():void 0;
  return{GetEnumerator:() => {
    const e=[Get(s)];
    return new T(0, null, (o) => {
      o.s=o.s+1;
      if(o.s>n)return false;
      else {
        const en=e[0];
        return Equals(en, null)?insufficient():en.MoveNext()?(o.c=en.Current,o.s===n?(en.Dispose(),e[0]=null):void 0,true):(en.Dispose(),e[0]=null,insufficient());
      }
    }, () => {
      const x=e[0];
      if(!Equals(x, null))x.Dispose();
    });
  }};
}
function initInfinite(f){
  return{GetEnumerator:() => new T(0, null, (e) => {
    e.c=f(e.s);
    e.s=e.s+1;
    return true;
  }, void 0)};
}
function forall(p, s){
  return!exists((x) =>!p(x), s);
}
function exists(p, s){
  const e=Get(s);
  try {
    let r=false;
    while(!r&&e.MoveNext())
      r=p(e.Current);
    return r;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
function max(s){
  const e=Get(s);
  try {
    if(!e.MoveNext())seqEmpty();
    let m=e.Current;
    while(e.MoveNext())
      {
        const x=e.Current;
        if(Compare(x, m)===1)m=x;
      }
    return m;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
function distinctBy(f, s){
  return{GetEnumerator:() => {
    const o=Get(s);
    const seen=new HashSet("New_3");
    return new T(null, null, (e) => {
      let cur;
      let has;
      if(o.MoveNext()){
        cur=o.Current;
        has=seen.SAdd(f(cur));
        while(!has&&o.MoveNext())
          {
            cur=o.Current;
            has=seen.SAdd(f(cur));
          }
        return has&&(e.c=cur,true);
      }
      else return false;
    }, () => {
      o.Dispose();
    });
  }};
}
function seqEmpty(){
  return FailWith("The input sequence was empty.");
}
function choose(f, arr){
  const q=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++){
    const m=f(arr[i]);
    if(m==null){ }
    else q.push(m.$0);
  }
  return q;
}
function ofList(xs){
  const q=[];
  let l=xs;
  while(!(l.$==0))
    {
      q.push(head(l));
      l=tail(l);
    }
  return q;
}
function tryFind(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      f(arr[i])?res=Some(arr[i]):void 0;
      i=i+1;
    }
  return res;
}
function ofSeq(xs){
  if(xs instanceof Array)return xs.slice();
  else if(xs instanceof FSharpList)return ofList(xs);
  else {
    const q=[];
    const o=Get(xs);
    try {
      while(o.MoveNext())
        q.push(o.Current);
      return q;
    }
    finally {
      const _1=o;
      if(typeof _1=="object"&&isIDisposable(_1))o.Dispose();
    }
  }
}
function tryFindIndex(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      f(arr[i])?res=Some(i):void 0;
      i=i+1;
    }
  return res;
}
function tryPick(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      const m=f(arr[i]);
      if(m!=null&&m.$==1)res=m;
      i=i+1;
    }
  return res;
}
function findIndex(f, arr){
  const m=tryFindIndex(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
function iter_1(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)f(arr[i]);
}
function exists_1(f, x){
  let e=false;
  let i=0;
  const l=length(x);
  while(!e&&i<l)
    if(f(x[i]))e=true;
    else i=i+1;
  return e;
}
function concat_1(xs){
  return Array.prototype.concat.apply([], ofSeq(xs));
}
function filter(f, arr){
  const r=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++)if(f(arr[i]))r.push(arr[i]);
  return r;
}
function map_2(f, arr){
  const r=new Array(arr.length);
  for(let i=0, _1=arr.length-1;i<=_1;i++)r[i]=f(arr[i]);
  return r;
}
function foldBack(f, arr, zero){
  let acc=zero;
  const len=arr.length;
  for(let i=1, _1=len;i<=_1;i++)acc=f(arr[len-i], acc);
  return acc;
}
function pick(f, arr){
  const m=tryPick(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
function distinctBy_1(f, a){
  return ofSeq(distinctBy(f, a));
}
function forall_1(f, x){
  let a=true;
  let i=0;
  const l=length(x);
  while(a&&i<l)
    if(f(x[i]))i=i+1;
    else a=false;
  return a;
}
function create(size, value){
  const r=new Array(size);
  for(let i=0, _1=size-1;i<=_1;i++)r[i]=value;
  return r;
}
function init_1(size, f){
  if(size<0)FailWith("Negative size given.");
  else null;
  const r=new Array(size);
  for(let i=0, _1=size-1;i<=_1;i++)r[i]=f(i);
  return r;
}
let _c_8=Lazy((_i) => class TemplateInitializer extends Object_1 {
  static {
    _c_8=_i(this);
  }
  static init;
  id;
  vars;
  static initialized;
  static instances;
  static GetOrAddHoleFor(id, holeName, initHole){
    let o;
    const d=_c_8.GetHolesFor(id);
    const m=(o=null,[d.TryGetValue(holeName, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])return m[1];
    else {
      const h=initHole();
      d.set_Item(holeName, h);
      return h;
    }
  }
  static GetHolesFor(id){
    let o;
    const m=(o=null,[_c_8.initialized.TryGetValue(id, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])return m[1];
    else {
      const d=new Dictionary("New_5");
      _c_8.initialized.set_Item(id, d);
      return d;
    }
  }
  static applyVarHole(el, tpl){
    tpl.ApplyVarHole(el);
  }
  InitInstance(key){
    const d=_c_8.GetHolesFor(key);
    const a=this.vars;
    for(let i_1=0, _1=a.length-1;i_1<=_1;i_1++)((() => {
      let _2;
      const f=get(a, i_1);
      const t=f[1];
      const ov=f[2];
      const n=f[0];
      if(!d.ContainsKey(n)){
        if(t===0){
          const o=ov==null?null:Some(ov.$0);
          let _3=o==null?"":o.$0;
          let _4=_c_1.Create_1(_3);
          _2=new VarStr(n, _4);
        }
        else if(t===1){
          const o_1=ov==null?null:Some(ov.$0);
          let _5=o_1==null?0:o_1.$0;
          let _6=_c_1.Create_1(_5);
          _2=new VarFloatUnchecked(n, _6);
        }
        else if(t===2){
          const o_2=ov==null?null:Some(ov.$0);
          let _7=o_2==null?false:o_2.$0;
          let _8=_c_1.Create_1(_7);
          _2=new VarBool(n, _8);
        }
        else if(t===3){
          const o_3=ov==null?null:Some(ov.$0);
          let _9=o_3==null?-8640000000000000:o_3.$0;
          let _10=_c_1.Create_1(_9);
          _2=new VarDateTime(n, _10);
        }
        else if(t===4){
          const o_4=ov==null?null:Some(ov.$0);
          let _11=o_4==null?[]:o_4.$0;
          let _12=_c_1.Create_1(_11);
          _2=new VarFile(n, _12);
        }
        else if(t===5){
          const x=ov==null?null:Some(ov.$0);
          const v=globalThis.document.querySelector("[ws-dom="+n+"]");
          let _13=x==null?v:x.$0;
          let _14=Some(_13);
          let _15=_c_1.Create_1(_14);
          _2=new VarDomElement(n, _15);
        }
        else if(t===6){
          const o_5=ov==null?null:Some(ov.$0);
          let _16=o_5==null?[]:o_5.$0;
          let _17=_c_1.Create_1(_16);
          _2=new VarStrList(n, _17);
        }
        else _2=FailWith("Invalid kind for template Var type: "+String(t));
        return d.set_Item(n, _2);
      }
      else return null;
    })());
    const i=new TemplateInstance({$:0, $0:d}, Doc.Empty);
    _c_8.instances.set_Item(key, i);
    return i;
  }
  $preinit(key){
    const inst=this.InitInstance(key);
    const q=globalThis.document.querySelectorAll("[ws-var^='"+key+"::']");
    for(let i=0, _1=q.length-1;i<=_1;i++){
      const el=q[i];
      const fullName=el.getAttribute("ws-var");
      const hole=inst.Hole(string(fullName, Some(key.length+2), null));
      const hole_1=hole.WithName(fullName);
      GlobalHoles().set_Item(hole_1.Name, hole_1);
      _c_8.applyVarHole(el, hole);
    }
  }
  $init(a){ }
  $postinit(key){
    RunFullDocTemplate([]);
  }
  static {
    _c_8.initialized=new Dictionary("New_5");
    _c_8.instances=new Dictionary("New_5");
  }
});
class VarFloatUnchecked extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new VarFloatUnchecked(n, this.fillWith);
  }
  ForTextView(){
    return Some(Map(String, this.fillWith.View));
  }
  AddAttribute(addAttr, el){
    (addAttr(el))(FloatValueUnchecked(this.fillWith));
  }
  get AsChoiceView(){
    return Choice2Of2(Map(String, this.fillWith.View));
  }
  ApplyVarHole(el){
    applyTypedVarHole(FloatApplyUnchecked(), this.fillWith, el);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class VarDateTime extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new VarDateTime(n, this.fillWith);
  }
  ForTextView(){
    return Some(Map((v) =>(new Date(v)).toLocaleString(), this.fillWith.View));
  }
  AddAttribute(addAttr, el){
    (addAttr(el))(DateTimeValue(this.fillWith));
  }
  get AsChoiceView(){
    return Choice2Of2(Map((v) =>(new Date(v)).toLocaleString(), this.fillWith.View));
  }
  ApplyVarHole(el){
    applyTypedVarHole(DateTimeApplyUnchecked(), this.fillWith, el);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class VarFile extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new VarFile(n, this.fillWith);
  }
  ForTextView(){
    return Some(Map(String, this.fillWith.View));
  }
  AddAttribute(addAttr, el){
    (addAttr(el))(FileValue(this.fillWith));
  }
  get AsChoiceView(){
    return Choice2Of2(Map(String, this.fillWith.View));
  }
  ApplyVarHole(el){
    applyTypedVarHole(FileApplyUnchecked(), this.fillWith, el);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class VarDomElement extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  get Value(){
    return this.fillWith;
  }
  WithName(n){
    return new VarDomElement(n, this.fillWith);
  }
  ApplyVarHole(el){ }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class VarStrList extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new VarStrList(n, this.fillWith);
  }
  ForTextView(){
    return Some(Map((l) => concat_2(",", l), this.fillWith.View));
  }
  AddAttribute(addAttr, el){
    (addAttr(el))(StringListValue(this.fillWith));
  }
  get AsChoiceView(){
    return Choice2Of2(Map(String, this.fillWith.View));
  }
  ApplyVarHole(el){
    applyTypedVarHole(StringListApply(), this.fillWith, el);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class Exception extends Object_1 { }
function RunFullDocTemplate(fillWith){
  if(RenderedFullDocTemplate()==null){
    LoadLocalTemplates("");
    PrepareTemplateStrict("", null, globalThis.document.body, null);
    const x=ChildrenTemplate(globalThis.document.body, fillWith);
    const p=globalThis.document.body;
    (((d_1) => {
      Doc.RunInPlace(true, p, d_1);
    })(x));
    const d=x;
    set_RenderedFullDocTemplate(Some(d));
    return d;
  }
  else return RenderedFullDocTemplate().$0;
}
function GetOrLoadTemplate(baseName, name, fakeroot, fillWith){
  LoadLocalTemplates("");
  PrepareTemplate(baseName, name, fakeroot);
  return NamedTemplate(baseName, name, fillWith);
}
function PrepareTemplate(baseName, name, fakeroot){
  if(!LoadedTemplateFile(baseName).ContainsKey(name==null?"":name.$0))PrepareTemplateStrict(baseName, name, fakeroot(), null);
}
function RenderedFullDocTemplate(){
  return _c_13.RenderedFullDocTemplate;
}
function LoadLocalTemplates(baseName){
  !LocalTemplatesLoaded()?(set_LocalTemplatesLoaded(true),LoadNestedTemplates(globalThis.document.body, "")):void 0;
  LoadedTemplates().set_Item(baseName, LoadedTemplateFile(""));
}
function PrepareTemplateStrict(baseName, name, fakeroot, prepareLocalTemplate){
  const processedHTML5Templates=new HashSet("New_3");
  function recF(recI, _1){
    while(true)
      switch(recI){
        case 0:
          if(_1!==null){
            const next=_1.nextSibling;
            if(Equals(_1.nodeType, Node.TEXT_NODE))convertTextNode(_1);
            else if(Equals(_1.nodeType, Node.ELEMENT_NODE))convertElement(_1);
            _1=next;
          }
          else return null;
          break;
        case 1:
          const name_2=string(_1.nodeName, Some(3), null).toLowerCase();
          const m=name_2.indexOf(".");
          const p=m===-1?[baseName, name_2]:[string(name_2, null, Some(m-1)), string(name_2, Some(m+1), null)];
          const instName=p[1];
          const instBaseName=p[0];
          if(instBaseName!=""&&!LoadedTemplates().ContainsKey(instBaseName))return failNotLoaded(instName);
          else {
            if(instBaseName==""&&prepareLocalTemplate!=null)prepareLocalTemplate.$0(instName);
            const d=LoadedTemplates().Item(instBaseName);
            if(!d.ContainsKey(instName))return failNotLoaded(instName);
            else {
              const t=d.Item(instName);
              const instance=t.cloneNode(true);
              const usedHoles=new HashSet("New_3");
              const mappings=new Dictionary("New_5");
              const attrs=_1.attributes;
              for(let i=0, _4=attrs.length-1;i<=_4;i++){
                const name_3=attrs.item(i).name.toLowerCase();
                const m_1=attrs.item(i).nodeValue;
                let _2=m_1==""?name_3:m_1.toLowerCase();
                mappings.set_Item(name_3, _2);
                if(!usedHoles.SAdd(name_3))console.warn("Hole mapped twice", name_3);
              }
              for(let i_1=0, _5=_1.childNodes.length-1;i_1<=_5;i_1++){
                const n=_1.childNodes[i_1];
                if(Equals(n.nodeType, Node.ELEMENT_NODE))if(!usedHoles.SAdd(n.nodeName.toLowerCase()))console.warn("Hole filled twice", instName);
              }
              const singleTextFill=_1.childNodes.length===1&&Equals(_1.firstChild.nodeType, Node.TEXT_NODE);
              if(singleTextFill){
                const x=fillTextHole(instance, _1.firstChild.textContent, instName);
                const f=((usedHoles_1) =>(i_2) => usedHoles_1.SAdd(i_2))(usedHoles);
                let _3=((a) =>(o) => {
                  if(o!=null)a(o.$0);
                })((x_1) => {
                  f(x_1);
                });
                _3(x);
              }
              removeHolesExcept(instance, usedHoles);
              if(!singleTextFill){
                for(let i_2=0, _6=_1.childNodes.length-1;i_2<=_6;i_2++){
                  const n_1=_1.childNodes[i_2];
                  if(Equals(n_1.nodeType, Node.ELEMENT_NODE))if(n_1.hasAttributes())fillInstanceAttrs(instance, n_1);
                  else fillDocHole(instance, n_1);
                }
              }
              mapHoles(instance, mappings);
              fill(instance, _1.parentNode, _1);
              _1.parentNode.removeChild(_1);
              return;
            }
          }
          break;
      }
  }
  function fillDocHole(instance, fillWith){
    const name_2=fillWith.nodeName.toLowerCase();
    const fillHole=(p, n) => {
      if(name_2=="title"&&fillWith.hasChildNodes()){
        const parsed=ParseHTMLIntoFakeRoot(fillWith.textContent);
        fillWith.removeChild(fillWith.firstChild);
        while(parsed.hasChildNodes())
          fillWith.appendChild(parsed.firstChild);
      }
      convertElement(fillWith);
      return fill(fillWith, p, n);
    };
    foreachNotPreserved(instance, "[ws-attr-holes]", (e) => {
      const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
      for(let i=0, _2=holeAttrs.length-1;i<=_2;i++){
        const attrName=get(holeAttrs, i);
        let this_1=new RegExp("\\${"+name_2+"}", "ig");
        let _1=e.getAttribute(attrName).replace(this_1, fillWith.textContent);
        e.setAttribute(attrName, _1);
      }
    });
    const m=instance.querySelector("[ws-hole="+name_2+"]");
    if(Equals(m, null)){
      const m_1=instance.querySelector("[ws-replace="+name_2+"]");
      if(Equals(m_1, null)){
        const m_2=instance.querySelector("slot[name="+name_2+"]");
        return instance.tagName.toLowerCase()=="template"?(fillHole(m_2.parentNode, m_2),void m_2.parentNode.removeChild(m_2)):null;
      }
      else {
        fillHole(m_1.parentNode, m_1);
        m_1.parentNode.removeChild(m_1);
        return;
      }
    }
    else {
      while(m.hasChildNodes())
        m.removeChild(m.lastChild);
      m.removeAttribute("ws-hole");
      return(((a) => {
        const _1=a;
        return(_2) => fillHole(_1, _2);
      })(m))(null);
    }
  }
  function convertElement(el){
    if(!el.hasAttribute("ws-preserve"))if(StartsWith(el.nodeName.toLowerCase(), "ws-"))convertInstantiation(el);
    else {
      convertAttrs(el);
      convertNodeAndSiblings(el.firstChild);
    }
  }
  function convertNodeAndSiblings(n){
    return recF(0, n);
  }
  function convertInstantiation(el){
    return recF(1, el);
  }
  function convertNestedTemplates(el){
    while(true)
      {
        const m=el.querySelector("[ws-template]");
        if(Equals(m, null)){
          const m_1=el.querySelector("[ws-children-template]");
          if(Equals(m_1, null)){
            const idTemplates=el.querySelectorAll("template[id]");
            for(let i=1, _1=idTemplates.length-1;i<=_1;i++){
              const n=idTemplates[i];
              if(processedHTML5Templates.Contains(n)){ }
              else {
                PrepareTemplateStrict(baseName, Some(n.getAttribute("id")), n, null);
                processedHTML5Templates.SAdd(n);
              }
            }
            const nameTemplates=el.querySelectorAll("template[name]");
            for(let i_1=1, _2=nameTemplates.length-1;i_1<=_2;i_1++){
              const n_1=nameTemplates[i_1];
              if(processedHTML5Templates.Contains(n_1)){ }
              else {
                PrepareTemplateStrict(baseName, Some(n_1.getAttribute("name")), n_1, null);
                processedHTML5Templates.SAdd(n_1);
              }
            }
            return null;
          }
          else {
            const name_2=m_1.getAttribute("ws-children-template");
            m_1.removeAttribute("ws-children-template");
            PrepareTemplateStrict(baseName, Some(name_2), m_1, null);
            el=el;
          }
        }
        else {
          const name_3=m.getAttribute("ws-template");
          (PrepareSingleTemplate(baseName, Some(name_3), m))(null);
          el=el;
        }
      }
  }
  const name_1=(name==null?"":name.$0).toLowerCase();
  LoadedTemplateFile(baseName).set_Item(name_1, fakeroot);
  if(fakeroot.hasChildNodes()){
    convertNestedTemplates(fakeroot);
    convertNodeAndSiblings(fakeroot.firstChild);
  }
}
function ChildrenTemplate(el, fillWith){
  let _1;
  const p=InlineTemplate(el, append(fillWith, GlobalHoles().Values));
  const updates=p[1];
  const docTreeNode=p[0];
  const m=docTreeNode.Els;
  return!Equals(m, null)&&m.length===1&&(get(m, 0)instanceof Node&&(Equals(get(m, 0).nodeType, Node.ELEMENT_NODE)&&(_1=get(m, 0),true)))?Elt_1.TreeNode(docTreeNode, updates):Doc.Mk(TreeDoc(docTreeNode), updates);
}
function set_RenderedFullDocTemplate(_1){
  _c_13.RenderedFullDocTemplate=_1;
}
function NamedTemplate(baseName, name, fillWith){
  let o;
  const m=(o=null,[LoadedTemplateFile(baseName).TryGetValue(name==null?"":name.$0, {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  return m[0]?ChildrenTemplate(m[1].cloneNode(true), fillWith):(console.warn("Local template doesn't exist", name),Doc.Empty);
}
function LoadedTemplateFile(name){
  let o;
  const m=(o=null,[LoadedTemplates().TryGetValue(name, {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  if(m[0])return m[1];
  else {
    const d=new Dictionary("New_5");
    LoadedTemplates().set_Item(name, d);
    return d;
  }
}
function LocalTemplatesLoaded(){
  return _c_13.LocalTemplatesLoaded;
}
function set_LocalTemplatesLoaded(_1){
  _c_13.LocalTemplatesLoaded=_1;
}
function LoadNestedTemplates(root, baseName){
  const loadedTpls=LoadedTemplateFile(baseName);
  const rawTpls=new Dictionary("New_5");
  const wsTemplates=root.querySelectorAll("[ws-template]");
  for(let i=0, _1=wsTemplates.length-1;i<=_1;i++){
    const node=wsTemplates[i];
    const name=node.getAttribute("ws-template").toLowerCase();
    node.removeAttribute("ws-template");
    rawTpls.set_Item(name, FakeRootSingle(node));
  }
  const wsChildrenTemplates=root.querySelectorAll("[ws-children-template]");
  for(let i_1=0, _2=wsChildrenTemplates.length-1;i_1<=_2;i_1++){
    const node_1=wsChildrenTemplates[i_1];
    const name_1=node_1.getAttribute("ws-children-template").toLowerCase();
    node_1.removeAttribute("ws-children-template");
    rawTpls.set_Item(name_1, FakeRoot(node_1));
  }
  const html5TemplateBasedTemplates=root.querySelectorAll("template[id]");
  for(let i_2=0, _3=html5TemplateBasedTemplates.length-1;i_2<=_3;i_2++){
    const node_2=html5TemplateBasedTemplates[i_2];
    rawTpls.set_Item(node_2.getAttribute("id").toLowerCase(), FakeRootFromHTMLTemplate(node_2));
  }
  const html5TemplateBasedTemplates_1=root.querySelectorAll("template[name]");
  for(let i_3=0, _4=html5TemplateBasedTemplates_1.length-1;i_3<=_4;i_3++){
    const node_3=html5TemplateBasedTemplates_1[i_3];
    rawTpls.set_Item(node_3.getAttribute("name").toLowerCase(), FakeRootFromHTMLTemplate(node_3));
  }
  const instantiated=new HashSet("New_3");
  function prepareTemplate(name_2){
    if(!loadedTpls.ContainsKey(name_2)){
      let o;
      const m=(o=null,[rawTpls.TryGetValue(name_2, {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0]){
        instantiated.SAdd(name_2);
        rawTpls.RemoveKey(name_2);
        PrepareTemplateStrict(baseName, Some(name_2), m[1], Some(prepareTemplate));
      }
      else console.warn(instantiated.Contains(name_2)?"Encountered loop when instantiating "+name_2:"Local template does not exist: "+name_2);
    }
  }
  while(rawTpls.count>0)
    prepareTemplate(head_1(rawTpls.Keys));
}
function LoadedTemplates(){
  return _c_13.LoadedTemplates;
}
function foreachNotPreserved(root, selector, f){
  IterSelector(root, selector, (p) => {
    if(p.closest("[ws-preserve]")==null)f(p);
  });
}
function PrepareSingleTemplate(baseName, name, el){
  const root=FakeRootSingle(el);
  return(p) => {
    PrepareTemplateStrict(baseName, name, root, p);
  };
}
function InlineTemplate(el, fillWith){
  let _1;
  const holes=[];
  const updates=[];
  const attrs=[];
  const afterRender=[];
  const fw=new Dictionary("New_5");
  const e=Get(fillWith);
  try {
    while(e.MoveNext())
      {
        const x=e.Current;
        fw.set_Item(x.Name, x);
      }
  }
  finally {
    const _2=e;
    if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
  }
  let els=ChildrenArray(el);
  const addAttr=(el_1, attr_1) => {
    const attr_2=Insert(el_1, attr_1);
    updates.push(Updates(attr_2));
    attrs.push([el_1, attr_2]);
    const m=GetOptional(attr_2.OnAfterRender);
    if(m==null)return null;
    else {
      const f=m.$0;
      afterRender.push(() => {
        f(el_1);
      });
      return;
    }
  };
  const tryGetAsDoc=(name) => {
    let o;
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0]){
      const th=m[1];
      if(th instanceof Elt)return Some(th.Value);
      else if(th instanceof Text)return Some(Doc.TextNode(th.Value));
      else {
        const o_1=th.ForTextView();
        return o_1==null?null:Some(Doc.TextView(o_1.$0));
      }
    }
    else return null;
  };
  foreachNotPreserved(el, "[ws-hole]", (p) => {
    const name=p.getAttribute("ws-hole");
    p.removeAttribute("ws-hole");
    while(p.hasChildNodes())
      p.removeChild(p.lastChild);
    const m=tryGetAsDoc(name);
    if(m!=null&&m.$==1){
      const doc=m.$0;
      LinkElement(p, doc.docNode);
      holes.push(DocElemNode.New(Empty(p), doc.docNode, null, p, Int(), null));
      updates.push(doc.updates);
    }
  });
  foreachNotPreserved(el, "[ws-replace]", (e_1) => {
    const m=tryGetAsDoc(e_1.getAttribute("ws-replace"));
    if(m!=null&&m.$==1){
      const doc=m.$0;
      const p=e_1.parentNode;
      const after=globalThis.document.createTextNode("");
      p.replaceChild(after, e_1);
      const before=InsertBeforeDelim(after, doc.docNode);
      els=ChildrenArray(el);
      const o=tryFindIndex((y) => e_1===y, els);
      if(o==null){ }
      else set(els, o.$0, doc.docNode);
      holes.push(DocElemNode.New(Empty(p), doc.docNode, Some([before, after]), p, Int(), null));
      updates.push(doc.updates);
    }
  });
  let isDefaultSlotProcessed=false;
  foreachNotPreserved(el, "slot", (p) => {
    const name=p.getAttribute("name");
    const name_1=name==""||name==null?"default":name.toLowerCase();
    if(isDefaultSlotProcessed&&name_1=="default"||!Equals(el.parentElement, null)){ }
    else {
      while(p.hasChildNodes())
        p.removeChild(p.lastChild);
      if(name_1=="default")isDefaultSlotProcessed=true;
      const m=tryGetAsDoc(name_1);
      if(m!=null&&m.$==1){
        const doc=m.$0;
        LinkElement(p, doc.docNode);
        holes.push(DocElemNode.New(Empty(p), doc.docNode, null, p, Int(), null));
        updates.push(doc.updates);
      }
    }
  });
  foreachNotPreserved(el, "[ws-attr]", (e_1) => {
    let o;
    const name=e_1.getAttribute("ws-attr");
    e_1.removeAttribute("ws-attr");
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0]){
      const th=m[1];
      if(th instanceof Attribute)addAttr(e_1, th.Value);
      else console.warn("Attribute hole filled with non-attribute data", name);
    }
  });
  foreachNotPreserved(el, "[ws-on]", (e_1) => {
    addAttr(e_1, Attr.Concat(choose((x_1) => {
      let o;
      const a=SplitChars(x_1, [":"], 1);
      const m=(o=null,[fw.TryGetValue(get(a, 1), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0]){
        const th=m[1];
        return th instanceof Event_1?Some(Handler(get(a, 0), th.Value)):th instanceof EventQ?Some(Attr.HandlerImpl(get(a, 0), th.Value)):(console.warn("Event hole on"+get(a, 0)+" filled with non-event data", get(a, 1)),null);
      }
      else return null;
    }, SplitChars(e_1.getAttribute("ws-on"), [" "], 1))));
    e_1.removeAttribute("ws-on");
  });
  foreachNotPreserved(el, "[ws-onafterrender]", (e_1) => {
    let o;
    const name=e_1.getAttribute("ws-onafterrender");
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0]){
      const th=m[1];
      if(th instanceof AfterRender_1){
        e_1.removeAttribute("ws-onafterrender");
        addAttr(e_1, OnAfterRender_1(th.Value));
      }
      else if(th instanceof AfterRenderQ){
        e_1.removeAttribute("ws-onafterrender");
        addAttr(e_1, OnAfterRender_1(th.Value));
      }
      else console.warn("onafterrender hole filled with non-onafterrender data", name);
    }
  });
  foreachNotPreserved(el, "[ws-var]", (e_1) => {
    let o;
    const name=e_1.getAttribute("ws-var");
    e_1.removeAttribute("ws-var");
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])m[1].AddAttribute((_8) =>(_9) => addAttr(_8, _9), e_1);
  });
  const wsdomHandling=() => {
    foreachNotPreservedwsDOM("[ws-dom]", (e_1) => {
      let o;
      let toWatch;
      let r;
      const m=(o=null,[fw.TryGetValue(e_1.getAttribute("ws-dom").toLowerCase(), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0]){
        const th=m[1];
        if(th instanceof VarDomElement){
          const var_1=th.Value;
          e_1.removeAttribute("ws-dom");
          toWatch=e_1;
          const mo=new MutationObserver((_8, mo_1) => {
            iter_1((mr) => {
              mr.removedNodes.forEach(CreateFuncWithArgs((_9) => _9[0]===toWatch&&mr.addedNodes.length!==1?(var_1.SetFinal(null),mo_1.disconnect()):null), null);
            }, _8);
          });
          if(e_1.parentElement!==null)mo.observe(e_1.parentElement, (r={},r.childList=true,r));
          var_1.Set(Some(e_1));
          Sink((nel) => {
            if(nel!=null&&nel.$==1){
              const nel_1=nel.$0;
              if(toWatch===nel_1){ }
              else {
                let ps=[nel_1];
                toWatch.replaceWith.apply(toWatch, ps);
                toWatch=nel_1;
              }
            }
            else {
              toWatch.remove();
              mo.disconnect();
            }
          }, var_1.View);
        }
      }
    });
  };
  foreachNotPreserved(el, "[ws-attr-holes]", (e_1) => {
    const re=new RegExp(TextHoleRE(), "g");
    const holeAttrs=SplitChars(e_1.getAttribute("ws-attr-holes"), [" "], 1);
    e_1.removeAttribute("ws-attr-holes");
    for(let i=0, _8=holeAttrs.length-1;i<=_8;i++)((() => {
      let _9;
      const attrName=get(holeAttrs, i);
      const s=e_1.getAttribute(attrName);
      let m=null;
      let lastIndex=0;
      const res=[];
      while(m=re.exec(s),m!==null)
        {
          const textBefore=string(s, Some(lastIndex), Some(re.lastIndex-get(m, 0).length-1));
          lastIndex=re.lastIndex;
          res.push([textBefore, get(m, 1)]);
        }
      const finalText=string(s, Some(lastIndex), null);
      re.lastIndex=0;
      const value=foldBack((_10, _11) =>(((t) => {
        const textBefore_1=t[0];
        const holeName=t[1];
        return(t_1) => {
          let o;
          const textAfter=t_1[0];
          const views=t_1[1];
          const m_1=(o=null,[fw.TryGetValue(holeName, {get:() => o, set:(v) => {
            o=v;
          }}), o]);
          const holeContent=m_1[0]?m_1[1].AsChoiceView:Choice1Of2("");
          return holeContent.$==1?[textBefore_1, FSharpList.Cons(textAfter==""?holeContent.$0:Map((s_5) => s_5+textAfter, holeContent.$0), views)]:[textBefore_1+holeContent.$0+textAfter, views];
        };
      })(_10))(_11), res, [finalText, FSharpList.Empty]);
      if(value[1].$==1){
        if(value[1].$1.$==1){
          if(value[1].$1.$1.$==1){
            if(value[1].$1.$1.$1.$==0){
              const s_1=value[0];
              _9=Dynamic(attrName, Map3((_10, _11, _12) => s_1+_10+_11+_12, value[1].$0, value[1].$1.$0, value[1].$1.$1.$0));
            }
            else {
              const s_2=value[0];
              _9=Dynamic(attrName, Map((vs) => s_2+concat_2("", vs), Sequence(value[1])));
            }
          }
          else {
            const s_3=value[0];
            _9=Dynamic(attrName, Map2((_10, _11) => s_3+_10+_11, value[1].$0, value[1].$1.$0));
          }
        }
        else if(value[0]=="")_9=Dynamic(attrName, value[1].$0);
        else {
          const s_4=value[0];
          _9=Dynamic(attrName, Map((v) => s_4+v, value[1].$0));
        }
      }
      else _9=Attr.Create(attrName, value[0]);
      return addAttr(e_1, _9);
    })());
  });
  let _3=els;
  const _4=afterRender.length==0?Some(() => {
    wsdomHandling();
  }):Some((el_1) => {
    wsdomHandling();
    iter_1((f) => {
      f(el_1);
    }, afterRender);
  });
  const _5=!Equals(els, null)&&els.length===1&&(get(els, 0)instanceof Node&&(get(els, 0)instanceof Element&&(_1=get(els, 0),true)))?Some(_1):null;
  let _6={
    Els:_3, 
    Dirty:true, 
    Holes:holes, 
    Attrs:attrs, 
    Render:_4?_4.$0:void 0, 
    El:_5?_5.$0:void 0
  };
  let _7=DeleteEmptyFields(_6, ["Render", "El"]);
  return[_7, TreeReduce(Const(), Map2Unit, updates)];
}
function GlobalHoles(){
  return _c_13.GlobalHoles;
}
function FakeRootSingle(el){
  el.removeAttribute("ws-template");
  const m=el.getAttribute("ws-replace");
  if(m==null){ }
  else {
    el.removeAttribute("ws-replace");
    const m_1=el.parentNode;
    if(Equals(m_1, null)){ }
    else {
      const n=globalThis.document.createElement(el.tagName);
      n.setAttribute("ws-replace", m);
      m_1.replaceChild(n, el);
    }
  }
  const fakeroot=globalThis.document.createElement("div");
  fakeroot.appendChild(el);
  return fakeroot;
}
function FakeRoot(parent){
  const fakeroot=globalThis.document.createElement("div");
  while(parent.hasChildNodes())
    fakeroot.appendChild(parent.firstChild);
  return fakeroot;
}
function FakeRootFromHTMLTemplate(parent){
  const fakeroot=globalThis.document.createElement("div");
  const content=parent.content;
  for(let i=0, _1=content.childNodes.length-1;i<=_1;i++)fakeroot.appendChild(content.childNodes[i].cloneNode(true));
  return fakeroot;
}
function TextHoleRE(){
  return _c_13.TextHoleRE;
}
function foreachNotPreservedwsDOM(selector, f){
  IterSelectorDoc(selector, (p) => {
    if(p.closest("[ws-preserve]")==null)f(p);
  });
}
class ConcreteVar extends Var {
  isConst;
  current;
  snap;
  view;
  id;
  get View(){
    return this.view;
  }
  Set(v){
    if(this.isConst)(((_1) => _1("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((s) => {
      console.log(s);
    }));
    else {
      Obsolete(this.snap);
      this.current=v;
      this.snap={s:Ready(v, [])};
    }
  }
  Get(){
    return this.current;
  }
  Update(f){
    this.Set(f(this.Get()));
  }
  UpdateMaybe(f){
    const m=f(this.Get());
    if(m!=null&&m.$==1)this.Set(m.$0);
  }
  SetFinal(v){
    if(this.isConst)(((_1) => _1("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((s) => {
      console.log(s);
    }));
    else {
      Obsolete(this.snap);
      this.isConst=true;
      this.current=v;
      this.snap={s:Forever(v)};
    }
  }
  constructor(isConst, initSnap, initValue){
    super();
    this.isConst=isConst;
    this.current=initValue;
    this.snap=initSnap;
    this.view=() => this.snap;
    this.id=Int();
  }
}
function IsNullOrWhiteSpace(x){
  return x==null||(new RegExp("^\\s*$")).test(x);
}
function EndsWith(x, s){
  return x.substring(x.length-s.length)==s;
}
function Trim(s){
  return s.replace(new RegExp("^\\s+"), "").replace(new RegExp("\\s+$"), "");
}
function concat_2(separator, strings){
  return ofSeq(strings).join(separator);
}
function SplitChars(s, sep, opts){
  return Split(s, new RegExp("["+RegexEscape(sep.join(""))+"]"), opts);
}
function StartsWith(t, s){
  return t.substring(0, s.length)==s;
}
function forall_2(f, s){
  return forall(f, protect(s));
}
function Split(s, pat, opts){
  return opts===1?filter((x) => x!=="", SplitWith(s, pat)):SplitWith(s, pat);
}
function RegexEscape(s){
  return s.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]", "g"), "\\$&");
}
function protect(s){
  return s==null?"":s;
}
function SplitWith(str, pat){
  return str.split(pat);
}
function New(k, ct){
  return{k:k, ct:ct};
}
function No(Item){
  return{$:1, $0:Item};
}
function Ok(Item){
  return{$:0, $0:Item};
}
function Cc(Item){
  return{$:2, $0:Item};
}
class AjaxRemotingProvider extends Object_1 {
  AsyncBase(m, data){
    return Delay(() => {
      const headers=makeHeaders(this.Headers);
      const payload=makePayload(data);
      return Bind_1(GetCT(), (a) => Bind_1(FromContinuations((ok, err, cc) => {
        const waiting=[true];
        const reg=Register(a, () => {
          if(waiting[0]){
            waiting[0]=false;
            cc(new OperationCanceledException("New", a));
          }
        });
        return AjaxProvider().Async(this.EndPoint+"/"+m, headers, payload, (x) => {
          if(waiting[0]){
            waiting[0]=false;
            reg.Dispose();
            ok(x);
          }
        }, (e) => {
          if(waiting[0]){
            waiting[0]=false;
            reg.Dispose();
            err(e);
          }
        });
      }), (a_1) => Return(JSON.parse(a_1))));
    });
  }
  get EndPoint(){
    return EndPoint();
  }
  get Headers(){
    return[];
  }
  Async(m, data){
    return this.AsyncBase(m, data);
  }
}
function New_1(IsCancellationRequested, Registrations){
  return{c:IsCancellationRequested, r:Registrations};
}
class DynamicAttrNode extends Object_1 {
  push;
  value;
  dirty;
  updates;
  get NChanged(){
    return this.updates;
  }
  NGetExitAnim(parent){
    return get_Empty();
  }
  NGetEnterAnim(parent){
    return get_Empty();
  }
  NGetChangeAnim(parent){
    return get_Empty();
  }
  NSync(parent){
    if(this.dirty){
      (this.push(parent))(this.value);
      this.dirty=false;
    }
  }
  constructor(view, push){
    super();
    this.push=push;
    this.value=void 0;
    this.dirty=false;
    this.updates=Map((x) => {
      this.value=x;
      this.dirty=true;
    }, view);
  }
}
function Obsolete(sn){
  let _1;
  const m=sn.s;
  if(m==null||(m!=null&&m.$==2?(_1=m.$1,false):m!=null&&m.$==3?(_1=m.$1,false):true))void 0;
  else {
    sn.s=null;
    for(let i=0, _2=length(_1)-1;i<=_2;i++){
      const o=get(_1, i);
      if(typeof o=="object")(((sn_1) => {
        Obsolete(sn_1);
      })(o));
      else o();
    }
  }
}
class FSharpList {
  static Empty=Create_1(FSharpList, {$:0});
  static Cons(Head, Tail){
    return Create_1(FSharpList, {
      $:1, 
      $0:Head, 
      $1:Tail
    });
  }
  GetEnumerator(){
    return new T(this, null, (e) => {
      const m=e.s;
      if(m.$==0)return false;
      else {
        const xs=m.$1;
        e.c=m.$0;
        e.s=xs;
        return true;
      }
    }, void 0);
  }
  $;
  $0;
  $1;
}
let _c_9=Lazy((_i) => class $StartupCode_Concurrency {
  static {
    _c_9=_i(this);
  }
  static GetCT;
  static Zero;
  static defCTS;
  static scheduler;
  static noneCT;
  static {
    this.noneCT=New_1(false, []);
    this.scheduler=new Scheduler();
    this.defCTS=[new CancellationTokenSource()];
    this.Zero=Return();
    this.GetCT=(c) => {
      c.k(Ok(c.ct));
    };
  }
});
class DocElemNode {
  Attr;
  Children;
  Delimiters;
  El;
  ElKey;
  Render;
  Equals(o){
    return this.ElKey===o.ElKey;
  }
  GetHashCode(){
    return this.ElKey;
  }
  static New(Attr_1, Children_1, Delimiters, El, ElKey, Render){
    const _1={
      Attr:Attr_1, 
      Children:Children_1, 
      El:El, 
      ElKey:ElKey
    };
    let _2=(SetOptional(_1, "Delimiters", Delimiters),SetOptional(_1, "Render", Render),_1);
    return Create_1(DocElemNode, _2);
  }
}
function Forever(Item){
  return{$:0, $0:Item};
}
function Ready(Item1, Item2){
  return{
    $:2, 
    $0:Item1, 
    $1:Item2
  };
}
function Waiting(Item1, Item2){
  return{
    $:3, 
    $0:Item1, 
    $1:Item2
  };
}
function New_2(plan, interval, seatsText, email, street, city, postal, country, isCompany, companyName, vatin){
  return{
    plan:plan, 
    interval:interval, 
    seatsText:seatsText, 
    email:email, 
    street:street, 
    city:city, 
    postal:postal, 
    country:country, 
    isCompany:isCompany, 
    companyName:companyName, 
    vatin:vatin
  };
}
let Year={$:1};
let Month={$:0};
class ReactiveExtensions extends Object_1 { }
function New_3(plan, interval, seats){
  return{
    plan:plan, 
    interval:interval, 
    seats:seats
  };
}
function New_4(email, line1, city, postalCode, country, companyName, taxId){
  return{
    email:email, 
    line1:line1, 
    city:city, 
    postalCode:postalCode, 
    country:country, 
    companyName:companyName, 
    taxId:taxId
  };
}
function LoadOrFetchPlans(){
  return Delay(() => {
    const m=loadCache();
    return m==null?Bind_1(fetchFromApi(), (a) => {
      let _1;
      return a!=null&&a.$==1&&(length(a.$0)>0&&(_1=a.$0,true))?(saveCache(_1),Return(Some(_1))):Return(null);
    }):Return(Some(m.$0));
  });
}
function loadCache(){
  try {
    const raw=globalThis.sessionStorage.getItem("planprices");
    return raw==null||IsNullOrWhiteSpace(raw)?null:Some(JSON.parse(raw));
  }
  catch(m){
    return null;
  }
}
function fetchFromApi(){
  return Delay(() => TryWith(Delay(() => Bind_1(GetPlanPrices(), (a) => Return(Some(a)))), () => Return(null)));
}
function saveCache(response){
  try {
    const json=JSON.stringify(response);
    globalThis.sessionStorage.setItem("planprices", json);
  }
  catch(m){
    null;
  }
}
function set_EndPoint(_1){
  _c_11.EndPoint=_1;
}
function AjaxProvider(){
  return _c_11.AjaxProvider;
}
function makePayload(data){
  return JSON.stringify(data);
}
function makeHeaders(headers){
  return NewFromSeq(map_2((_1) =>[_1[0], _1[1]], distinctBy_1((t) => t[0], headers.concat([["content-type", "application/json"]]))));
}
function EndPoint(){
  return _c_11.EndPoint;
}
function ajax(async, url, headers, data, ok, err, csrf){
  let xhr=new XMLHttpRequest();
  let csrf_1=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1");
  xhr.open("POST", url, async);
  if(async==true)xhr.withCredentials=true;
  let h;
  for(var h_1 in headers)xhr.setRequestHeader(h_1, headers[h_1]);
  if(csrf_1)xhr.setRequestHeader("x-csrftoken", csrf_1);
  function k(){
    if(xhr.status==200)ok(xhr.responseText);
    else if(csrf&&xhr.status==403&&xhr.responseText=="CSRF")csrf();
    else {
      let msg="Response status is not 200: ";
      err(new Error(msg+xhr.status));
    }
  }
  if("onload"in xhr)xhr.onload=xhr.onerror=xhr.onabort=k;
  else xhr.onreadystatechange=() => {
    if(xhr.readyState==4)k();
  };
  xhr.send(data);
}
class attr extends Object_1 { }
function TryParse(s, r){
  return TryParse_1(s, -2147483648, 2147483647, r);
}
function toSafe(s){
  return s==null?"":s;
}
function getVATPercentage(country, isCompany, vatin){
  const countryIso=getCountryIso(country);
  const hasVatId=!IsNullOrWhiteSpace(vatin);
  const isEU=euVat().ContainsKey(countryIso);
  return isCompany?countryIso=="HU"?27:isEU&&hasVatId?0:isEU&&!hasVatId?euVat().Item(countryIso):0:isEU?euVat().Item(countryIso):0;
}
function getCountryIso(country){
  return country==null?"":Trim(country).toUpperCase();
}
function euVat(){
  return _c_15.euVat;
}
function List(){
  return _c_12.List;
}
function CreateTextNode(){
  return{
    Text:globalThis.document.createTextNode(""), 
    Dirty:false, 
    Value:""
  };
}
function UpdateTextNode(n, t){
  n.Value=t;
  n.Dirty=true;
}
function CreateEmbedNode(){
  return{Current:null, Dirty:false};
}
function UpdateEmbedNode(node, upd){
  node.Current=upd;
  node.Dirty=true;
}
function LinkPrevElement(el, children){
  InsertDoc(el.parentNode, children, el);
}
function CreateDelimitedRunState(ldelim, rdelim, doc){
  return New_7(get_Empty_1(), CreateDelimitedElemNode(ldelim, rdelim, EmptyAttr(), doc));
}
function PerformAnimatedUpdate(childrenOnly, st, doc){
  return get_UseAnimations()?Delay(() => {
    const cur=FindAll(doc);
    const change=ComputeChangeAnim(st, cur);
    const enter=ComputeEnterAnim(st, cur);
    return Bind_1(Play(Append(change, ComputeExitAnim(st, cur))), () => Bind_1(SyncElemNodesNextFrame(childrenOnly, st), () => Bind_1(Play(enter), () => {
      st.PreviousNodes=cur;
      return Return(null);
    })));
  }):SyncElemNodesNextFrame(childrenOnly, st);
}
function PerformSyncUpdate(childrenOnly, st, doc){
  const cur=FindAll(doc);
  SyncElemNode(childrenOnly, st.Top);
  st.PreviousNodes=cur;
}
function CreateRunState(parent, doc){
  return New_7(get_Empty_1(), CreateElemNode(parent, EmptyAttr(), doc));
}
function InsertDoc(parent, doc, pos){
  while(true)
    {
      if(doc!=null&&doc.$==1)return InsertNode(parent, doc.$0.El, pos);
      else if(doc!=null&&doc.$==2){
        const d=doc.$0;
        d.Dirty=false;
        doc=d.Current;
      }
      else if(doc==null)return pos;
      else if(doc!=null&&doc.$==4)return InsertNode(parent, doc.$0.Text, pos);
      else if(doc!=null&&doc.$==5)return InsertNode(parent, doc.$0, pos);
      else if(doc!=null&&doc.$==6)return foldBack((_1, _2) =>((((parent_1) =>(el) =>(pos_1) => el==null||el.constructor===Object?InsertDoc(parent_1, el, pos_1):InsertNode(parent_1, el, pos_1))(parent))(_1))(_2), doc.$0.Els, pos);
      else {
        const b=doc.$1;
        const a=doc.$0;
        doc=a;
        pos=InsertDoc(parent, b, pos);
      }
    }
}
function CreateDelimitedElemNode(ldelim, rdelim, attr_1, children){
  const el=ldelim.parentNode;
  LinkPrevElement(rdelim, children);
  const attr_2=Insert(el, attr_1);
  return DocElemNode.New(attr_2, children, Some([ldelim, rdelim]), el, Int(), GetOptional(attr_2.OnAfterRender));
}
function SyncElemNodesNextFrame(childrenOnly, st){
  if(BatchUpdatesEnabled()){
    const c=(ok) => {
      requestAnimationFrame(() => {
        SyncElemNode(childrenOnly, st.Top);
        ok();
      });
    };
    return FromContinuations((_1, _2, _3) => c.apply(null, [_1, _2, _3]));
  }
  else {
    SyncElemNode(childrenOnly, st.Top);
    return Return(null);
  }
}
function ComputeExitAnim(st, cur){
  return Concat(map_2((n) => GetExitAnim(n.Attr), ToArray(Except(cur, Filter((n) => HasExitAnim(n.Attr), st.PreviousNodes)))));
}
function ComputeEnterAnim(st, cur){
  return Concat(map_2((n) => GetEnterAnim(n.Attr), ToArray(Except(st.PreviousNodes, Filter((n) => HasEnterAnim(n.Attr), cur)))));
}
function ComputeChangeAnim(st, cur){
  const f=(n) => HasChangeAnim(n.Attr);
  const relevant=(a) => Filter(f, a);
  return Concat(map_2((n) => GetChangeAnim(n.Attr), ToArray(Intersect(relevant(st.PreviousNodes), relevant(cur)))));
}
function SyncElemNode(childrenOnly, el){
  !childrenOnly?SyncElement(el):void 0;
  Sync_1(el.Children);
  AfterRender(el);
}
function LinkElement(el, children){
  InsertDoc(el, children, null);
}
function InsertBeforeDelim(afterDelim, doc){
  const p=afterDelim.parentNode;
  const before=globalThis.document.createTextNode("");
  p.insertBefore(before, afterDelim);
  LinkPrevElement(afterDelim, doc);
  return before;
}
function CreateElemNode(el, attr_1, children){
  LinkElement(el, children);
  const attr_2=Insert(el, attr_1);
  return DocElemNode.New(attr_2, children, null, el, Int(), GetOptional(attr_2.OnAfterRender));
}
function InsertNode(parent, node, pos){
  InsertAt(parent, pos, node);
  return node;
}
function SyncElement(el){
  function hasDirtyChildren(el_1){
    function dirty(doc){
      while(true)
        {
          if(doc!=null&&doc.$==0){
            const b=doc.$1;
            const a=doc.$0;
            if(dirty(a))return true;
            else doc=b;
          }
          else if(doc!=null&&doc.$==2){
            const d=doc.$0;
            if(d.Dirty)return true;
            else doc=d.Current;
          }
          else if(doc!=null&&doc.$==6){
            const t=doc.$0;
            return t.Dirty||exists_1(hasDirtyChildren, t.Holes);
          }
          else return false;
        }
    }
    return dirty(el_1.Children);
  }
  Sync(el.El, el.Attr);
  if(hasDirtyChildren(el))DoSyncElement(el);
}
function Sync_1(doc){
  while(true)
    {
      if(doc!=null&&doc.$==1)return SyncElemNode(false, doc.$0);
      else if(doc!=null&&doc.$==2){
        const n=doc.$0;
        doc=n.Current;
      }
      else if(doc==null)return null;
      else if(doc!=null&&doc.$==5)return null;
      else if(doc!=null&&doc.$==4){
        const d=doc.$0;
        return d.Dirty?(d.Text.nodeValue=d.Value,d.Dirty=false):null;
      }
      else if(doc!=null&&doc.$==6){
        const t=doc.$0;
        iter_1((h) => {
          SyncElemNode(false, h);
        }, t.Holes);
        iter_1((t_1) => {
          Sync(t_1[0], t_1[1]);
        }, t.Attrs);
        return AfterRender(t);
      }
      else {
        const b=doc.$1;
        const a=doc.$0;
        Sync_1(a);
        doc=b;
      }
    }
}
function AfterRender(el){
  const m=GetOptional(el.Render);
  if(m!=null&&m.$==1){
    m.$0(el.El);
    SetOptional(el, "Render", null);
  }
}
function DoSyncElement(el){
  const parent=el.El;
  function ins(doc, pos){
    while(true)
      {
        if(doc!=null&&doc.$==1)return doc.$0.El;
        else if(doc!=null&&doc.$==2){
          const d=doc.$0;
          if(d.Dirty){
            d.Dirty=false;
            return InsertDoc(parent, d.Current, pos);
          }
          else doc=d.Current;
        }
        else if(doc==null)return pos;
        else if(doc!=null&&doc.$==4)return doc.$0.Text;
        else if(doc!=null&&doc.$==5)return doc.$0;
        else if(doc!=null&&doc.$==6){
          const t=doc.$0;
          if(t.Dirty)t.Dirty=false;
          return foldBack((_3, _4) => _3==null||_3.constructor===Object?ins(_3, _4):_3, t.Els, pos);
        }
        else {
          const b=doc.$1;
          const a=doc.$0;
          doc=a;
          pos=ins(b, pos);
        }
      }
  }
  const p=el.El;
  Iter((e) => {
    RemoveNode(p, e);
  }, Except_2(DocChildren(el), Children(el.El, GetOptional(el.Delimiters))));
  let _1=el.Children;
  const m=GetOptional(el.Delimiters);
  let _2=m!=null&&m.$==1?m.$0[1]:null;
  ins(_1, _2);
}
function New_5(planCode, interval, seats, billingData){
  return{
    planCode:planCode, 
    interval:interval, 
    seats:seats, 
    billingData:billingData
  };
}
function notPresent(){
  throw new KeyNotFoundException("New");
}
function alreadyAdded(){
  throw new ArgumentException("New_2", "An item with the same key has already been added.");
}
function Get(x){
  return x instanceof Array?ArrayEnumerator(x):Equals(typeof x, "string")?StringEnumerator(x):x.GetEnumerator();
}
function ArrayEnumerator(s){
  return new T(0, null, (e) => {
    const i=e.s;
    return i<length(s)&&(e.c=get(s, i),e.s=i+1,true);
  }, void 0);
}
function StringEnumerator(s){
  return new T(0, null, (e) => {
    const i=e.s;
    return i<s.length&&(e.c=s[i],e.s=i+1,true);
  }, void 0);
}
function Get0(x){
  return x instanceof Array?ArrayEnumerator(x):Equals(typeof x, "string")?StringEnumerator(x):"GetEnumerator0"in x?x.GetEnumerator0():x.GetEnumerator();
}
class T extends Object_1 {
  s;
  c;
  n;
  d;
  e;
  MoveNext(){
    const m=this.n(this);
    this.e=m?1:2;
    return m;
  }
  get Current(){
    return this.e===1?this.c:this.e===0?FailWith("Enumeration has not started. Call MoveNext."):FailWith("Enumeration already finished.");
  }
  Dispose(){
    if(this.d)this.d(this);
  }
  constructor(s, c, n, d){
    super();
    this.s=s;
    this.c=c;
    this.n=n;
    this.d=d;
    this.e=0;
  }
}
function Int(){
  set_counter(counter()+1);
  return counter();
}
function Id(){
  set_counter(counter()+1);
  return"uid"+String(counter());
}
function set_counter(_1){
  _c_17.counter=_1;
}
function counter(){
  return _c_17.counter;
}
class Scheduler extends Object_1 {
  idle;
  robin;
  Fork(action){
    this.robin.push(action);
    this.idle?(this.idle=false,setTimeout(() => {
      this.tick();
    }, 0)):void 0;
  }
  tick(){
    const t=Date.now();
    let loop=true;
    while(loop)
      if(this.robin.length===0){
        this.idle=true;
        loop=false;
      }
      else {
        (this.robin.shift())();
        Date.now()-t>40?(setTimeout(() => {
          this.tick();
        }, 0),loop=false):void 0;
      }
  }
  constructor(){
    super();
    this.idle=true;
    this.robin=[];
  }
}
let _c_10=Lazy((_i) => class Client {
  static {
    _c_10=_i(this);
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
    this.EmptyAttr=null;
    this.BoolCheckedApply=(var_1) =>[(el) => {
      el.addEventListener("change", () => var_1.Get()!=el.checked?var_1.Set(el.checked):null);
    }, (_1) =>(_2) => _2!=null&&_2.$==1?void(_1.checked=_2.$0):null, Map((V) => Some(V), var_1.View)];
    this.StringSet=(el) =>(s_8) => {
      el.value=s_8;
    };
    this.StringGet=(el) => Some(el.value);
    const g=StringGet();
    const s=StringSet();
    this.StringApply=(v) => ApplyValue(g, s, v);
    this.StringListSet=(el) =>(s_8) => {
      const options_=el.options;
      for(let i=0, _1=options_.length-1;i<=_1;i++)((() => {
        const option=options_.item(i);
        option.selected=arrContains(option.value, s_8);
      })());
    };
    this.StringListGet=(el) => {
      const selectedOptions=el.selectedOptions;
      return Some(ofSeq(delay(() => collect((i) =>[selectedOptions.item(i).value], range(0, selectedOptions.length-1)))));
    };
    const g_1=StringListGet();
    const s_1=StringListSet();
    this.StringListApply=(v) => ApplyValue(g_1, s_1, v);
    this.DateTimeSetUnchecked=(el) =>(i) => {
      el.value=(new Date(i)).toLocaleString();
    };
    this.DateTimeGetUnchecked=(el) => {
      let o;
      let m;
      const s_8=el.value;
      if(isBlank_1(s_8))return Some(-8640000000000000);
      else {
        o=0;
        const m_1=TryParse_2(s_8);
        let _1=m_1!=null&&m_1.$==1&&(o=m_1.$0,true);
        m=[_1, o];
        return m[0]?Some(m[1]):null;
      }
    };
    const g_2=DateTimeGetUnchecked();
    const s_2=DateTimeSetUnchecked();
    this.DateTimeApplyUnchecked=(v) => ApplyValue(g_2, s_2, v);
    this.FileSetUnchecked=() =>() => null;
    this.FileGetUnchecked=(el) => {
      const files=el.files;
      return Some(ofSeq(delay(() => map_1((i) => files.item(i), range(0, files.length-1)))));
    };
    const g_3=FileGetUnchecked();
    const s_3=FileSetUnchecked();
    this.FileApplyUnchecked=(v) => FileApplyValue(g_3, s_3, v);
    this.IntSetUnchecked=(el) =>(i) => {
      el.value=String(i);
    };
    this.IntGetUnchecked=(el) => {
      const s_8=el.value;
      if(isBlank_1(s_8))return Some(0);
      else {
        const pd=+s_8;
        return pd!==pd>>0?null:Some(pd);
      }
    };
    const g_4=IntGetUnchecked();
    const s_4=IntSetUnchecked();
    this.IntApplyUnchecked=(v) => ApplyValue(g_4, s_4, v);
    this.IntSetChecked=(el) =>(i) => {
      const i_1=i.Input;
      return el.value!=i_1?void(el.value=i_1):null;
    };
    this.IntGetChecked=(el) => {
      let _1;
      let o;
      const s_8=el.value;
      if(isBlank_1(s_8))_1=(el.checkValidity?el.checkValidity():true)?CheckedInput.Blank(s_8):CheckedInput.Invalid(s_8);
      else {
        const m=(o=0,[TryParse(s_8, {get:() => o, set:(v) => {
          o=v;
        }}), o]);
        _1=m[0]?CheckedInput.Valid(m[1], s_8):CheckedInput.Invalid(s_8);
      }
      return Some(_1);
    };
    const g_5=IntGetChecked();
    const s_5=IntSetChecked();
    this.IntApplyChecked=(v) => ApplyValue(g_5, s_5, v);
    this.FloatSetUnchecked=(el) =>(i) => {
      el.value=String(i);
    };
    this.FloatGetUnchecked=(el) => {
      const s_8=el.value;
      if(isBlank_1(s_8))return Some(0);
      else {
        const pd=+s_8;
        return isNaN(pd)?null:Some(pd);
      }
    };
    const g_6=FloatGetUnchecked();
    const s_6=FloatSetUnchecked();
    this.FloatApplyUnchecked=(v) => ApplyValue(g_6, s_6, v);
    this.FloatSetChecked=(el) =>(i) => {
      const i_1=i.Input;
      return el.value!=i_1?void(el.value=i_1):null;
    };
    this.FloatGetChecked=(el) => {
      let _1;
      const s_8=el.value;
      if(isBlank_1(s_8))_1=(el.checkValidity?el.checkValidity():true)?CheckedInput.Blank(s_8):CheckedInput.Invalid(s_8);
      else {
        const i=+s_8;
        _1=isNaN(i)?CheckedInput.Invalid(s_8):CheckedInput.Valid(i, s_8);
      }
      return Some(_1);
    };
    const g_7=FloatGetChecked();
    const s_7=FloatSetChecked();
    this.FloatApplyChecked=(v) => ApplyValue(g_7, s_7, v);
  }
});
function DecodeUnion(t, discr, cases){
  return() =>(x) => {
    let tag;
    if(typeof x==="object"&&x!=null){
      const o={};
      if(typeof discr==="string"){
        const tagName=x[discr];
        tag=findIndex((case_1) =>!Equals(case_1, null)&&case_1[0]==tagName, cases);
      }
      else {
        const r=[void 0];
        let k;
        for(var k_1 in discr)if(((k_2) => x.hasOwnProperty(k_2)&&(r[0]=discr[k_2],true))(k_1))break;
        tag=r[0];
      }
      o.$=tag;
      iter_1((_1) => {
        const from=_1[0];
        const __to__=_1[1];
        const dec=_1[2];
        const kind=_1[3];
        if(from==null){
          const r_1=(dec())(x);
          if(__to__)delete r_1[discr];
          o.$0=r_1;
          return;
        }
        else return kind===0?void(o[from]=(dec())(x[__to__])):kind===1?void(o[from]=x.hasOwnProperty(__to__)?Some((dec())(x[__to__])):null):FailWith("Invalid field option kind");
      }, (get(cases, tag))[1]);
      return t===void 0?o:t(o);
    }
    else return x;
  };
}
function Id_1(){
  return() =>(x) => x;
}
function EncodeRecord(_1, fields){
  return() =>(x) => {
    const o={};
    iter_1((_2) => {
      const name=_2[0];
      const enc=_2[1];
      const kind=_2[2];
      if(kind===0){
        o[name]=(enc())(x[name]);
        return;
      }
      else if(kind===1){
        const m=x[name];
        return m==null?null:void(o[name]=(enc())(m.$0));
      }
      else return kind===2?x.hasOwnProperty(name)?void(o[name]=(enc())(x[name])):null:kind===3?x[name]===void 0?void(o[name]=(enc())(x[name])):null:FailWith("Invalid field option kind");
    }, fields);
    return o;
  };
}
function DecodeRecord(t, fields){
  return() =>(x) => {
    const o={};
    iter_1((_1) => {
      const name=_1[0];
      const dec=_1[1];
      const kind=_1[2];
      return kind===0?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):FailWith("Missing mandatory field: "+name):kind===1?void(o[name]=x.hasOwnProperty(name)?Some((dec())(x[name])):null):kind===2?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):null:kind===3?x[name]===void 0?void(o[name]=(dec())(x[name])):null:FailWith("Invalid field option kind");
    }, fields);
    return t===void 0?o:t(o);
  };
}
function DecodeArray(decEl){
  return EncodeArray(decEl);
}
function EncodeArray(encEl){
  return() =>(a) => map_2(encEl(), a);
}
class OperationCanceledException extends Error {
  ct;
  constructor(i, _1, _2, _3){
    let ct;
    if(i=="New"){
      ct=_1;
      i="New_1";
      _1="The operation was canceled.";
      _2=null;
      _3=ct;
    }
    if(i=="New_1"){
      const message=_1;
      const inner=_2;
      const ct_1=_3;
      super(message);
      this.inner=inner;
      this.ct=ct_1;
    }
  }
}
class CancellationTokenSource extends Object_1 {
  init;
  c;
  pending;
  r;
  constructor(){
    super();
    this.c=false;
    this.pending=null;
    this.r=[];
    this.init=1;
  }
}
function New_6(DynElem, DynFlags, DynNodes, OnAfterRender_2){
  const _1={
    DynElem:DynElem, 
    DynFlags:DynFlags, 
    DynNodes:DynNodes
  };
  SetOptional(_1, "OnAfterRender", OnAfterRender_2);
  return _1;
}
let _c_11=Lazy((_i) => class $StartupCode_Remoting {
  static {
    _c_11=_i(this);
  }
  static AjaxProvider;
  static EndPoint;
  static {
    this.EndPoint=globalThis.location.origin;
    this.AjaxProvider=new XhrProvider();
  }
});
let _c_12=Lazy((_i) => class $StartupCode_Countries {
  static {
    _c_12=_i(this);
  }
  static List;
  static {
    this.List=ofArray([["AF", "Afghanistan"], ["AL", "Albania"], ["DZ", "Algeria"], ["AD", "Andorra"], ["AO", "Angola"], ["AG", "Antigua and Barbuda"], ["AR", "Argentina"], ["AM", "Armenia"], ["AU", "Australia"], ["AT", "Austria"], ["AZ", "Azerbaijan"], ["BS", "Bahamas"], ["BH", "Bahrain"], ["BD", "Bangladesh"], ["BB", "Barbados"], ["BY", "Belarus"], ["BE", "Belgium"], ["BZ", "Belize"], ["BJ", "Benin"], ["BT", "Bhutan"], ["BO", "Bolivia"], ["BA", "Bosnia and Herzegovina"], ["BW", "Botswana"], ["BR", "Brazil"], ["BN", "Brunei"], ["BG", "Bulgaria"], ["BF", "Burkina Faso"], ["BI", "Burundi"], ["KH", "Cambodia"], ["CM", "Cameroon"], ["CA", "Canada"], ["CV", "Cape Verde"], ["CF", "Central African Republic"], ["TD", "Chad"], ["CL", "Chile"], ["CN", "China"], ["CO", "Colombia"], ["KM", "Comoros"], ["CG", "Congo"], ["CR", "Costa Rica"], ["HR", "Croatia"], ["CU", "Cuba"], ["CY", "Cyprus"], ["CZ", "Czech Republic"], ["DK", "Denmark"], ["DJ", "Djibouti"], ["DM", "Dominica"], ["DO", "Dominican Republic"], ["EC", "Ecuador"], ["EG", "Egypt"], ["SV", "El Salvador"], ["GQ", "Equatorial Guinea"], ["ER", "Eritrea"], ["EE", "Estonia"], ["SZ", "Eswatini"], ["ET", "Ethiopia"], ["FJ", "Fiji"], ["FI", "Finland"], ["FR", "France"], ["GA", "Gabon"], ["GM", "Gambia"], ["GE", "Georgia"], ["DE", "Germany"], ["GH", "Ghana"], ["GR", "Greece"], ["GD", "Grenada"], ["GT", "Guatemala"], ["GN", "Guinea"], ["GW", "Guinea-Bissau"], ["GY", "Guyana"], ["HT", "Haiti"], ["HN", "Honduras"], ["HU", "Hungary"], ["IS", "Iceland"], ["IN", "India"], ["ID", "Indonesia"], ["IR", "Iran"], ["IQ", "Iraq"], ["IE", "Ireland"], ["IL", "Israel"], ["IT", "Italy"], ["JM", "Jamaica"], ["JP", "Japan"], ["JO", "Jordan"], ["KZ", "Kazakhstan"], ["KE", "Kenya"], ["KI", "Kiribati"], ["KW", "Kuwait"], ["KG", "Kyrgyzstan"], ["LA", "Laos"], ["LV", "Latvia"], ["LB", "Lebanon"], ["LS", "Lesotho"], ["LR", "Liberia"], ["LY", "Libya"], ["LI", "Liechtenstein"], ["LT", "Lithuania"], ["LU", "Luxembourg"], ["MG", "Madagascar"], ["MW", "Malawi"], ["MY", "Malaysia"], ["MV", "Maldives"], ["ML", "Mali"], ["MT", "Malta"], ["MH", "Marshall Islands"], ["MR", "Mauritania"], ["MU", "Mauritius"], ["MX", "Mexico"], ["FM", "Micronesia"], ["MD", "Moldova"], ["MC", "Monaco"], ["MN", "Mongolia"], ["ME", "Montenegro"], ["MA", "Morocco"], ["MZ", "Mozambique"], ["MM", "Myanmar"], ["NA", "Namibia"], ["NR", "Nauru"], ["NP", "Nepal"], ["NL", "Netherlands"], ["NZ", "New Zealand"], ["NI", "Nicaragua"], ["NE", "Niger"], ["NG", "Nigeria"], ["KP", "North Korea"], ["MK", "North Macedonia"], ["NO", "Norway"], ["OM", "Oman"], ["PK", "Pakistan"], ["PW", "Palau"], ["PS", "Palestine"], ["PA", "Panama"], ["PG", "Papua New Guinea"], ["PY", "Paraguay"], ["PE", "Peru"], ["PH", "Philippines"], ["PL", "Poland"], ["PT", "Portugal"], ["QA", "Qatar"], ["RO", "Romania"], ["RU", "Russia"], ["RW", "Rwanda"], ["KN", "Saint Kitts and Nevis"], ["LC", "Saint Lucia"], ["VC", "Saint Vincent and the Grenadines"], ["WS", "Samoa"], ["SM", "San Marino"], ["ST", "Sao Tome and Principe"], ["SA", "Saudi Arabia"], ["SN", "Senegal"], ["RS", "Serbia"], ["SC", "Seychelles"], ["SL", "Sierra Leone"], ["SG", "Singapore"], ["SK", "Slovakia"], ["SI", "Slovenia"], ["SB", "Solomon Islands"], ["SO", "Somalia"], ["ZA", "South Africa"], ["KR", "South Korea"], ["SS", "South Sudan"], ["ES", "Spain"], ["LK", "Sri Lanka"], ["SD", "Sudan"], ["SR", "Suriname"], ["SE", "Sweden"], ["CH", "Switzerland"], ["SY", "Syria"], ["TW", "Taiwan"], ["TJ", "Tajikistan"], ["TZ", "Tanzania"], ["TH", "Thailand"], ["TL", "Timor-Leste"], ["TG", "Togo"], ["TO", "Tonga"], ["TT", "Trinidad and Tobago"], ["TN", "Tunisia"], ["TR", "Turkey"], ["TM", "Turkmenistan"], ["TV", "Tuvalu"], ["UG", "Uganda"], ["UA", "Ukraine"], ["AE", "United Arab Emirates"], ["GB", "United Kingdom"], ["US", "United States"], ["UY", "Uruguay"], ["UZ", "Uzbekistan"], ["VU", "Vanuatu"], ["VA", "Vatican City"], ["VE", "Venezuela"], ["VN", "Vietnam"], ["YE", "Yemen"], ["ZM", "Zambia"], ["ZW", "Zimbabwe"]]);
  }
});
function TryParse_1(s, min, max_1, r){
  const x=+s;
  const ok=x===x-x%1&&x>=min&&x<=max_1;
  if(ok)r.set(x);
  return ok;
}
function get_UseAnimations(){
  return UseAnimations();
}
function Play(anim){
  return Delay(() => Bind_1(Run(() => { }, Actions(anim)), () => {
    Finalize(anim);
    return Return(null);
  }));
}
function Append(a, a_1){
  return Anim(Append_1(a.$0, a_1.$0));
}
function Run(k, anim){
  const dur=anim.Duration;
  if(dur===0)return Zero();
  else {
    const c=(ok) => {
      function loop(start){
        return(now) => {
          const t=now-start;
          anim.Compute(t);
          k();
          return t<=dur?void requestAnimationFrame((t_1) => {
            (loop(start))(t_1);
          }):ok();
        };
      }
      requestAnimationFrame((t) => {
        (loop(t))(t);
      });
    };
    return FromContinuations((_1, _2, _3) => c.apply(null, [_1, _2, _3]));
  }
}
function Anim(Item){
  return{$:0, $0:Item};
}
function Concat(xs){
  return Anim(Concat_1(map_1(List_1, xs)));
}
function get_Empty(){
  return Anim(Empty_1());
}
function BatchUpdatesEnabled(){
  return _c_16.BatchUpdatesEnabled;
}
function StartProcessor(procAsync){
  const st=[0];
  function work(){
    return Delay(() => Bind_1(procAsync, () => {
      const m=st[0];
      return Equals(m, 1)?(st[0]=0,Zero()):Equals(m, 2)?(st[0]=1,work()):Zero();
    }));
  }
  return() => {
    const m=st[0];
    if(Equals(m, 0)){
      st[0]=1;
      Start(work(), null);
    }
    else Equals(m, 1)?st[0]=2:void 0;
  };
}
let _c_13=Lazy((_i) => class $StartupCode_Templates {
  static {
    _c_13=_i(this);
  }
  static RenderedFullDocTemplate;
  static TextHoleRE;
  static GlobalHoles;
  static LocalTemplatesLoaded;
  static LoadedTemplates;
  static {
    this.LoadedTemplates=new Dictionary("New_5");
    this.LocalTemplatesLoaded=false;
    this.GlobalHoles=new Dictionary("New_5");
    this.TextHoleRE="\\${([^}]+)}";
    this.RenderedFullDocTemplate=null;
  }
});
function convertTextNode(n){
  let m=null;
  let li=0;
  const s=n.textContent;
  const strRE=new RegExp(TextHoleRE(), "g");
  while(m=strRE.exec(s),m!==null)
    {
      n.parentNode.insertBefore(globalThis.document.createTextNode(string(s, Some(li), Some(strRE.lastIndex-get(m, 0).length-1))), n);
      li=strRE.lastIndex;
      const hole=globalThis.document.createElement("span");
      hole.setAttribute("ws-replace", get(m, 1).toLowerCase());
      n.parentNode.insertBefore(hole, n);
    }
  strRE.lastIndex=0;
  n.textContent=string(s, Some(li), null);
}
function failNotLoaded(name){
  console.warn("Instantiating non-loaded template", name);
}
function fillTextHole(instance, fillWith, templateName){
  const m=instance.querySelector("[ws-replace]");
  return Equals(m, null)?(console.warn("Filling non-existent text hole", templateName),null):(m.parentNode.replaceChild(globalThis.document.createTextNode(fillWith), m),Some(m.getAttribute("ws-replace")));
}
function removeHolesExcept(instance, dontRemove){
  const run=(attrName) => {
    foreachNotPreserved(instance, "["+attrName+"]", (e) => {
      if(!dontRemove.Contains(e.getAttribute(attrName)))e.removeAttribute(attrName);
    });
  };
  run("ws-attr");
  run("ws-onafterrender");
  run("ws-var");
  foreachNotPreserved(instance, "[ws-hole]", (e) => {
    if(!dontRemove.Contains(e.getAttribute("ws-hole"))){
      e.removeAttribute("ws-hole");
      while(e.hasChildNodes())
        e.removeChild(e.lastChild);
    }
  });
  foreachNotPreserved(instance, "[ws-replace]", (e) => {
    if(!dontRemove.Contains(e.getAttribute("ws-replace")))e.parentNode.removeChild(e);
  });
  foreachNotPreserved(instance, "[ws-on]", (e) => {
    e.setAttribute("ws-on", concat_2(" ", filter((x) => dontRemove.Contains(get(SplitChars(x, [":"], 1), 1)), SplitChars(e.getAttribute("ws-on"), [" "], 1))));
  });
  foreachNotPreserved(instance, "[ws-attr-holes]", (e) => {
    const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
    for(let i=0, _2=holeAttrs.length-1;i<=_2;i++){
      const attrName=get(holeAttrs, i);
      let this_1=new RegExp(TextHoleRE(), "g");
      let _1=e.getAttribute(attrName).replace(this_1, (_3, _4) => dontRemove.Contains(_4)?_3:"");
      e.setAttribute(attrName, _1);
    }
  });
}
function fillInstanceAttrs(instance, fillWith){
  convertAttrs(fillWith);
  const name=fillWith.nodeName.toLowerCase();
  const m=instance.querySelector("[ws-attr="+name+"]");
  if(Equals(m, null))console.warn("Filling non-existent attr hole", name);
  else {
    m.removeAttribute("ws-attr");
    for(let i=0, _1=fillWith.attributes.length-1;i<=_1;i++){
      const a=fillWith.attributes.item(i);
      if(a.name=="class"&&m.hasAttribute("class"))m.setAttribute("class", m.getAttribute("class")+" "+a.nodeValue);
      else m.setAttribute(a.name, a.nodeValue);
    }
  }
}
function mapHoles(t, mappings){
  const run=(attrName) => {
    foreachNotPreserved(t, "["+attrName+"]", (e) => {
      let o;
      const m=(o=null,[mappings.TryGetValue(e.getAttribute(attrName).toLowerCase(), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0])e.setAttribute(attrName, m[1]);
    });
  };
  run("ws-hole");
  run("ws-replace");
  run("ws-attr");
  run("ws-onafterrender");
  run("ws-var");
  foreachNotPreserved(t, "[ws-on]", (e) => {
    e.setAttribute("ws-on", concat_2(" ", map_2((x) => {
      let o;
      const a=SplitChars(x, [":"], 1);
      const m=(o=null,[mappings.TryGetValue(get(a, 1), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      return m[0]?get(a, 0)+":"+m[1]:x;
    }, SplitChars(e.getAttribute("ws-on"), [" "], 1))));
  });
  foreachNotPreserved(t, "[ws-attr-holes]", (e) => {
    const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
    for(let i=0, _1=holeAttrs.length-1;i<=_1;i++)((() => {
      const attrName=get(holeAttrs, i);
      return e.setAttribute(attrName, fold((_2, _3) => {
        const a=KeyValue(_3);
        return _2.replace(new RegExp("\\${"+a[0]+"}", "ig"), "${"+a[1]+"}");
      }, e.getAttribute(attrName), mappings));
    })());
  });
}
function fill(fillWith, p, n){
  while(true)
    {
      if(fillWith.hasChildNodes())n=p.insertBefore(fillWith.lastChild, n);
      else return null;
    }
}
function convertAttrs(el){
  const attrs=el.attributes;
  const toRemove=[];
  const events=[];
  const holedAttrs=[];
  for(let i=0, _2=attrs.length-1;i<=_2;i++){
    const a=attrs.item(i);
    if(StartsWith(a.nodeName, "ws-on")&&a.nodeName!="ws-onafterrender"&&a.nodeName!="ws-on"){
      toRemove.push(a.nodeName);
      events.push(string(a.nodeName, Some("ws-on".length), null)+":"+a.nodeValue.toLowerCase());
    }
    else if(!StartsWith(a.nodeName, "ws-")&&(new RegExp(TextHoleRE())).test(a.nodeValue)){
      let this_1=new RegExp(TextHoleRE(), "g");
      let _1=a.nodeValue.replace(this_1, (_3, _4) =>"${"+_4.toLowerCase()+"}");
      a.nodeValue=_1;
      holedAttrs.push(a.nodeName);
    }
    else void 0;
  }
  if(!(events.length==0))el.setAttribute("ws-on", concat_2(" ", events));
  if(!(holedAttrs.length==0))el.setAttribute("ws-attr-holes", concat_2(" ", holedAttrs));
  const lowercaseAttr=(name) => {
    const m=el.getAttribute(name);
    if(m==null){ }
    else el.setAttribute(name, m.toLowerCase());
  };
  lowercaseAttr("ws-hole");
  lowercaseAttr("ws-replace");
  lowercaseAttr("ws-attr");
  lowercaseAttr("ws-onafterrender");
  lowercaseAttr("ws-var");
  iter_1((a_1) => {
    el.removeAttribute(a_1);
  }, toRemove);
}
function string(source, start, finish){
  if(start==null){
    if(finish!=null&&finish.$==1){
      const f=finish.$0;
      return f<0?"":source.slice(0, f+1);
    }
    else return"";
  }
  else if(finish==null)return source.slice(start.$0);
  else {
    const f_1=finish.$0;
    const s=start.$0;
    return f_1<0?"":source.slice(s, f_1+1);
  }
}
class Elt_1 extends Doc {
  docNode_1;
  updates_1;
  elt;
  rvUpdates;
  static TreeNode(tree, updates){
    const rvUpdates=Updates_1.Create(updates);
    let _1=TreeDoc(tree);
    const x=map_2((_4) => Updates(_4[1]), tree.Attrs);
    let _2=TreeReduce(Const(), Map2Unit, x);
    let _3=Map2Unit(_2, rvUpdates.v);
    return new Elt_1(_1, _3, get(tree.Els, 0), rvUpdates);
  }
  static New(el, attr_1, children){
    const node=CreateElemNode(el, attr_1, children.docNode);
    const rvUpdates=Updates_1.Create(children.updates);
    return new Elt_1(ElemDoc(node), Map2Unit(Updates(node.Attr), rvUpdates.v), el, rvUpdates);
  }
  constructor(docNode, updates, elt, rvUpdates){
    super(docNode, updates);
    this.docNode_1=docNode;
    this.updates_1=updates;
    this.elt=elt;
    this.rvUpdates=rvUpdates;
  }
}
function ApplyValue(get_1, set_1, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    const onChange=() => {
      var_1.UpdateMaybe((v) => {
        let _1;
        expectedValue=get_1(el);
        return expectedValue!=null&&expectedValue.$==1&&(!Equals(expectedValue.$0, v)&&(_1=[expectedValue, expectedValue.$0],true))?_1[0]:null;
      });
    };
    el.addEventListener("change", onChange);
    el.addEventListener("input", onChange);
    el.addEventListener("keypress", onChange);
  }, (x) => {
    const _1=set_1(x);
    return(_2) => _2==null?null:_1(_2.$0);
  }, Map((v) => {
    let _1;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_1=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
function StringSet(){
  return _c_10.StringSet;
}
function StringGet(){
  return _c_10.StringGet;
}
function StringListSet(){
  return _c_10.StringListSet;
}
function StringListGet(){
  return _c_10.StringListGet;
}
function DateTimeSetUnchecked(){
  return _c_10.DateTimeSetUnchecked;
}
function DateTimeGetUnchecked(){
  return _c_10.DateTimeGetUnchecked;
}
function FileApplyValue(get_1, set_1, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    el.addEventListener("change", () => {
      var_1.UpdateMaybe((v) => {
        let _1;
        expectedValue=get_1(el);
        return expectedValue!=null&&expectedValue.$==1&&(expectedValue.$0!==v&&(_1=[expectedValue, expectedValue.$0],true))?_1[0]:null;
      });
    });
  }, (x) => {
    const _1=set_1(x);
    return(_2) => _2==null?null:_1(_2.$0);
  }, Map((v) => {
    let _1;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_1=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
function FileSetUnchecked(){
  return _c_10.FileSetUnchecked;
}
function FileGetUnchecked(){
  return _c_10.FileGetUnchecked;
}
function IntSetUnchecked(){
  return _c_10.IntSetUnchecked;
}
function IntGetUnchecked(){
  return _c_10.IntGetUnchecked;
}
function IntSetChecked(){
  return _c_10.IntSetChecked;
}
function IntGetChecked(){
  return _c_10.IntGetChecked;
}
function FloatSetUnchecked(){
  return _c_10.FloatSetUnchecked;
}
function FloatGetUnchecked(){
  return _c_10.FloatGetUnchecked;
}
function FloatSetChecked(){
  return _c_10.FloatSetChecked;
}
function FloatGetChecked(){
  return _c_10.FloatGetChecked;
}
function StringApply(){
  return _c_10.StringApply;
}
function BoolCheckedApply(){
  return _c_10.BoolCheckedApply;
}
function FloatApplyUnchecked(){
  return _c_10.FloatApplyUnchecked;
}
function DateTimeApplyUnchecked(){
  return _c_10.DateTimeApplyUnchecked;
}
function FileApplyUnchecked(){
  return _c_10.FileApplyUnchecked;
}
function StringListApply(){
  return _c_10.StringListApply;
}
function isBlank_1(s){
  return forall_2(IsWhiteSpace, s);
}
class CheckedInput {
  get Input(){
    return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
  static Blank(inputText){
    return Create_1(CheckedInput, {$:2, $0:inputText});
  }
  static Invalid(inputText){
    return Create_1(CheckedInput, {$:1, $0:inputText});
  }
  static Valid(value, inputText){
    return Create_1(CheckedInput, {
      $:0, 
      $0:value, 
      $1:inputText
    });
  }
  $;
  $0;
  $1;
}
class XhrProvider extends Object_1 {
  Async(url, headers, data, ok, err){
    ajax(true, url, headers, data, ok, err, () => {
      ajax(true, url, headers, data, ok, err, void 0);
    });
  }
}
let _c_14=Lazy((_i) => class $StartupCode_DomUtility {
  static {
    _c_14=_i(this);
  }
  static defaultWrap;
  static wrapMap;
  static rhtml;
  static rtagName;
  static rxhtmlTag;
  static {
    this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>", "gi");
    this.rtagName=new RegExp("<([\\w:]+)");
    this.rhtml=new RegExp("<|&#?\\w+;");
    const table=[1, "<table>", "</table>"];
    let _1=Object.fromEntries([["option", [1, "<select multiple='multiple'>", "</select>"]], ["legend", [1, "<fieldset>", "</fieldset>"]], ["area", [1, "<map>", "</map>"]], ["param", [1, "<object>", "</object>"]], ["thead", table], ["tbody", table], ["tfoot", table], ["tr", [2, "<table><tbody>", "</tbody></table>"]], ["col", [2, "<table><colgroup>", "</colgoup></table>"]], ["td", [3, "<table><tbody><tr>", "</tr></tbody></table>"]]]);
    this.wrapMap=_1;
    this.defaultWrap=[0, "", ""];
  }
});
let _c_15=Lazy((_i) => class $StartupCode_RemotingContract {
  static {
    _c_15=_i(this);
  }
  static euVat;
  static {
    this.euVat=dict([["AT", 20], ["BE", 21], ["BG", 20], ["HR", 25], ["CY", 19], ["CZ", 21], ["DK", 25], ["EE", 22], ["FI", 24], ["FR", 20], ["DE", 19], ["GR", 24], ["HU", 27], ["IE", 23], ["IT", 22], ["LV", 21], ["LT", 21], ["LU", 17], ["MT", 18], ["NL", 21], ["PL", 23], ["PT", 23], ["RO", 19], ["SK", 20], ["SI", 22], ["ES", 21], ["SE", 25]]);
  }
});
function New_7(PreviousNodes, Top){
  return{PreviousNodes:PreviousNodes, Top:Top};
}
function get_Empty_1(){
  return NodeSet(new HashSet("New_3"));
}
function FindAll(doc){
  const q=[];
  function recF(recI, _1){
    while(true)
      switch(recI){
        case 0:
          if(_1!=null&&_1.$==0){
            const b=_1.$1;
            const a=_1.$0;
            recF(0, a);
            _1=b;
          }
          else if(_1!=null&&_1.$==1){
            const el=_1.$0;
            _1=el;
            recI=1;
          }
          else if(_1!=null&&_1.$==2){
            const em=_1.$0;
            _1=em.Current;
          }
          else if(_1!=null&&_1.$==6){
            const x=_1.$0.Holes;
            return(((a_1) =>(a_2) => {
              iter_1(a_1, a_2);
            })(loopEN))(x);
          }
          else return null;
          break;
        case 1:
          q.push(_1);
          _1=_1.Children;
          recI=0;
          break;
      }
  }
  function loop(node){
    return recF(0, node);
  }
  function loopEN(el){
    return recF(1, el);
  }
  loop(doc);
  return NodeSet(new HashSet("New_2", q));
}
function NodeSet(Item){
  return{$:0, $0:Item};
}
function Filter(f, a){
  return NodeSet(Filter_1(f, a.$0));
}
function Except(a, a_1){
  return NodeSet(Except_1(a.$0, a_1.$0));
}
function ToArray(a){
  return ToArray_2(a.$0);
}
function Intersect(a, a_1){
  return NodeSet(Intersect_1(a.$0, a_1.$0));
}
function UseAnimations(){
  return _c_18.UseAnimations;
}
function Actions(a){
  return ConcatActions(choose((a_1) => a_1.$==1?Some(a_1.$0):null, ToArray_1(a.$0)));
}
function Finalize(a){
  iter_1((a_1) => {
    if(a_1.$==0)a_1.$0();
  }, ToArray_1(a.$0));
}
function ConcatActions(xs){
  const xs_1=ofSeqNonCopying(xs);
  const m=length(xs_1);
  if(m===0)return Const_1();
  else if(m===1)return get(xs_1, 0);
  else {
    const dur=max(map_1((anim) => anim.Duration, xs_1));
    const xs_2=map_2((x) => Prolong(dur, x), xs_1);
    return Def(dur, (t) => {
      iter_1((anim) => {
        anim.Compute(t);
      }, xs_2);
    });
  }
}
function List_1(a){
  return a.$0;
}
function Const_1(v){
  return Def(0, () => v);
}
function Def(d, f){
  return{Compute:f, Duration:d};
}
function Prolong(nextDuration, anim){
  const comp=anim.Compute;
  const dur=anim.Duration;
  const last=Create(() => anim.Compute(anim.Duration));
  return{Compute:(t) => t>=dur?last.f():comp(t), Duration:nextDuration};
}
let _c_16=Lazy((_i) => class Proxy {
  static {
    _c_16=_i(this);
  }
  static BatchUpdatesEnabled;
  static {
    this.BatchUpdatesEnabled=true;
  }
});
class Text extends TemplateHole {
  name;
  fillWith;
  get Value(){
    return this.fillWith;
  }
  get Name(){
    return this.name;
  }
  WithName(n){
    return new Text(n, this.fillWith);
  }
  get AsChoiceView(){
    return Choice1Of2(this.fillWith);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class Event_1 extends TemplateHole {
  name;
  fillWith;
  get Value(){
    return this.fillWith;
  }
  get Name(){
    return this.name;
  }
  WithName(n){
    return new Event_1(n, this.fillWith);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class AfterRender_1 extends TemplateHole {
  name;
  fillWith;
  get Value(){
    return this.fillWith;
  }
  get Name(){
    return this.name;
  }
  WithName(n){
    return new AfterRender_1(n, this.fillWith);
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
function Choice1Of2(Item){
  return{$:0, $0:Item};
}
function Choice2Of2(Item){
  return{$:1, $0:Item};
}
class Updates_1 {
  c;
  s;
  v;
  static Create(v){
    let var_1;
    var_1=null;
    var_1=Updates_1.New(v, null, () => {
      let c;
      c=var_1.s;
      return c===null?(c=Copy(var_1.c()),var_1.s=c,WhenObsoleteRun(c, () => {
        var_1.s=null;
      }),c):c;
    });
    return var_1;
  }
  static New(Current, Snap, VarView){
    return Create_1(Updates_1, {
      c:Current, 
      s:Snap, 
      v:VarView
    });
  }
}
class ValueCollection extends Object_1 {
  d;
  GetEnumerator(){
    return Get(map_1((kvp) => kvp.V, this.d));
  }
  constructor(d){
    super();
    this.d=d;
  }
}
let _c_17=Lazy((_i) => class $StartupCode_Abbrev {
  static {
    _c_17=_i(this);
  }
  static counter;
  static {
    this.counter=0;
  }
});
function Clear(a){
  a.splice(0, length(a));
}
function arrContains(item, arr){
  let c=true;
  let i=0;
  const l=length(arr);
  while(c&&i<l)
    if(Equals(arr[i], item))c=false;
    else i=i+1;
  return!c;
}
function insufficient(){
  return FailWith("The input sequence has an insufficient number of elements.");
}
function nonNegative(){
  return FailWith("The input must be non-negative.");
}
function IsWhiteSpace(c){
  return c.match(new RegExp("\\s"))!==null;
}
function TryParse_2(s){
  const d=Date.parse(s);
  return isNaN(d)?null:Some(d);
}
let _c_18=Lazy((_i) => class $StartupCode_Animation {
  static {
    _c_18=_i(this);
  }
  static UseAnimations;
  static CubicInOut;
  static {
    this.CubicInOut=Easing.Custom((t) => {
      const t2=t*t;
      return 3*t2-2*(t2*t);
    });
    this.UseAnimations=true;
  }
});
function Append_1(x, y){
  return x.$==0?y:y.$==0?x:{
    $:2, 
    $0:x, 
    $1:y
  };
}
function ToArray_1(xs){
  const out=[];
  function loop(xs_1){
    while(true)
      {
        if(xs_1.$==1)return out.push(xs_1.$0);
        else if(xs_1.$==2){
          const y=xs_1.$1;
          const x=xs_1.$0;
          loop(x);
          xs_1=y;
        }
        else return xs_1.$==3?iter_1((v) => {
          out.push(v);
        }, xs_1.$0):null;
      }
  }
  loop(xs);
  return out.slice(0);
}
function Concat_1(xs){
  const x=ofSeqNonCopying(xs);
  return TreeReduce(Empty_1(), Append_1, x);
}
function Empty_1(){
  return _c_19.Empty;
}
function concat_3(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push.apply(r, o[k_1]);
  return r;
}
class KeyCollection extends Object_1 {
  d;
  GetEnumerator(){
    return Get(map_1((kvp) => kvp.K, this.d));
  }
  constructor(d){
    super();
    this.d=d;
  }
}
class Easing extends Object_1 {
  transformTime;
  static Custom(f){
    return new Easing(f);
  }
  constructor(transformTime){
    super();
    this.transformTime=transformTime;
  }
}
function Filter_1(ok, set_1){
  return new HashSet("New_2", filter(ok, ToArray_2(set_1)));
}
function Except_1(excluded, included){
  const set_1=new HashSet("New_2", ToArray_2(included));
  set_1.ExceptWith(ToArray_2(excluded));
  return set_1;
}
function ToArray_2(set_1){
  const arr=create(set_1.Count, void 0);
  set_1.CopyTo(arr, 0);
  return arr;
}
function Intersect_1(a, b){
  const set_1=new HashSet("New_2", ToArray_2(a));
  set_1.IntersectWith(ToArray_2(b));
  return set_1;
}
class KeyNotFoundException extends Error {
  constructor(i, _1){
    if(i=="New"){
      i="New_1";
      _1="The given key was not present in the dictionary.";
    }
    if(i=="New_1"){
      const message=_1;
      super(message);
    }
  }
}
function Children(elem, delims){
  let n;
  if(delims!=null&&delims.$==1){
    const rdelim=delims.$0[1];
    const ldelim=delims.$0[0];
    const a=[];
    n=ldelim.nextSibling;
    while(n!==rdelim)
      {
        a.push(n);
        n=n.nextSibling;
      }
    return DomNodes(a);
  }
  else {
    let _1=elem.childNodes.length;
    const o=elem.childNodes;
    let _2=init_1(_1, (i) => o[i]);
    return DomNodes(_2);
  }
}
function Except_2(a, a_1){
  const excluded=a.$0;
  return DomNodes(filter((n) => forall_1((k) =>!(n===k), excluded), a_1.$0));
}
function Iter(f, a){
  iter_1(f, a.$0);
}
function DocChildren(node){
  const q=[];
  function loop(doc){
    while(true)
      {
        if(doc!=null&&doc.$==2){
          const d=doc.$0;
          doc=d.Current;
        }
        else if(doc!=null&&doc.$==1)return q.push(doc.$0.El);
        else if(doc==null)return null;
        else if(doc!=null&&doc.$==5)return q.push(doc.$0);
        else if(doc!=null&&doc.$==4)return q.push(doc.$0.Text);
        else if(doc!=null&&doc.$==6){
          const x=doc.$0.Els;
          return(((a_1) =>(a_2) => {
            iter_1(a_1, a_2);
          })((a_1) => {
            if(a_1==null||a_1.constructor===Object)loop(a_1);
            else q.push(a_1);
          }))(x);
        }
        else {
          const b=doc.$1;
          const a=doc.$0;
          loop(a);
          doc=b;
        }
      }
  }
  loop(node.Children);
  return DomNodes(ofSeqNonCopying(q));
}
function DomNodes(Item){
  return{$:0, $0:Item};
}
function applyTypedVarHole(bind, v, el){
  const p=bind(v);
  p[0](el);
  Sink(p[1](el), p[2]);
}
function Create(f){
  return New_8(false, f, forceLazy);
}
function forceLazy(){
  const v=this.v();
  this.c=true;
  this.v=v;
  this.f=cachedLazy;
  return v;
}
function cachedLazy(){
  return this.v;
}
let _c_19=Lazy((_i) => class $StartupCode_AppendList {
  static {
    _c_19=_i(this);
  }
  static Empty;
  static {
    this.Empty={$:0};
  }
});
function New_8(created, evalOrVal, force){
  return{
    c:created, 
    v:evalOrVal, 
    f:force
  };
}
class ArgumentException extends Error {
  constructor(i, _1){
    if(i=="New_2"){
      const message=_1;
      super(message);
    }
  }
}
