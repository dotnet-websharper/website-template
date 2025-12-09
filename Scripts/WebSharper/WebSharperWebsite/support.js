export { default as Runtime } from "../WebSharper.Core.JavaScript/Runtime.js"
import { MarkResizable, SetOptional, Lazy, Create as Create_1, GetOptional, CreateFuncWithArgs, DeleteEmptyFields } from "../WebSharper.Core.JavaScript/Runtime.js"
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
export function Support(){
  return SupportDoc();
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
    return Bind(Logout_1(true), () => Return(null));
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
    return Bind(FetchMe(), () => Bind(Sleep(500), () => {
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
      const r=ty===0?_c_5.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?"":o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarStr(name, _4);
      }):ty===1?_c_5.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?0:o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarFloatUnchecked(name, _4);
      }):ty===2?_c_5.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?false:o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarBool(name, _4);
      }):ty===3?_c_5.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?-8640000000000000:o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarDateTime(name, _4);
      }):ty===4?_c_5.GetOrAddHoleFor(key, name, () => new VarFile(name, _c_1.Create_1([]))):ty===5?_c_5.GetOrAddHoleFor(key, name, () => new VarDomElement(name, _c_1.Create_1(Some(globalThis.document.querySelector("[ws-dom="+name+"]"))))):ty===6?_c_5.GetOrAddHoleFor(key, name, () => {
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
  return Delay(() => Combine(TryWith(Delay(() => Bind(Logout_2(), () => Return(null))), (a) => {
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
    return m!=null&&m.$==1?Return(Some(m.$0)):(isFetchingVar().Set(true),TryFinally(Delay(() => TryWith(Delay(() => Bind(Me(), (a) => {
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
function UserView(){
  return _c_6.UserView;
}
function IsAuthedView(){
  return _c_6.IsAuthedView;
}
function BuildStartUrlWithReturn(returnUrl){
  return"https://api.websharper.io/auth/github/start?returnUrl="+encodeURIComponent(returnUrl);
}
function userVar(){
  return _c_6.userVar;
}
function isFetchingVar(){
  return _c_6.isFetchingVar;
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
  static TextView(txt){
    const node=CreateTextNode();
    return Doc.Mk(TextDoc(node), Map((t) => {
      UpdateTextNode(node, t);
    }, txt));
  }
  static RunBefore(rdelim, doc){
    const ldelim=globalThis.document.createTextNode("");
    rdelim.parentNode.insertBefore(ldelim, rdelim);
    Doc.RunBetween(ldelim, rdelim, doc);
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
  static TextNode(v){
    return Doc.Mk(TextNodeDoc(globalThis.document.createTextNode(v)), Const());
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
function SupportDoc(){
  const F=FreeCheckoutAttr();
  const P=ProCheckoutAttr();
  const B=BillYearAttr();
  const B_1=BillMonthAttr();
  const F_1=Doc.TextView(FreeNote());
  const P_1=Doc.TextView(ProNote());
  const F_2=Doc.TextView(FreeTotalAmount());
  const F_3=Doc.TextView(FreeTotalLabel());
  const P_2=Doc.TextView(ProTotalAmount());
  const P_3=Doc.TextView(ProTotalLabel());
  const F_4=Doc.TextView(FreePriceLabel());
  const F_5=Doc.TextView(FreePriceAmount());
  const P_4=Doc.TextView(ProPriceLabel());
  const P_5=Doc.TextView(ProPriceAmount());
  const F_6=Doc.TextView(FreeName());
  const P_6=Doc.TextView(ProName());
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new AfterRenderQ("onafterrender", "", () => {
    StartImmediate(HydrateCatalog(), null);
  })),this_1);
  const this_3=(this_2.h.push(new Elt("proname", P_6)),this_2);
  const this_4=(this_3.h.push(new Elt("freename", F_6)),this_3);
  const this_5=(this_4.h.push(new Elt("propriceamount", P_5)),this_4);
  const this_6=(this_5.h.push(new Elt("propricelabel", P_4)),this_5);
  const this_7=(this_6.h.push(new Elt("freepriceamount", F_5)),this_6);
  const this_8=(this_7.h.push(new Elt("freepricelabel", F_4)),this_7);
  const this_9=(this_8.h.push(new Elt("prototallabel", P_3)),this_8);
  const this_10=(this_9.h.push(new Elt("prototalamount", P_2)),this_9);
  const this_11=(this_10.h.push(new Elt("freetotallabel", F_3)),this_10);
  const this_12=(this_11.h.push(new Elt("freetotalamount", F_2)),this_11);
  const this_13=(this_12.h.push(new Elt("pronote", P_1)),this_12);
  const this_14=(this_13.h.push(new Elt("freenote", F_1)),this_13);
  const this_15=(this_14.h.push(new Attribute("billmonthattr", B_1)),this_14);
  const this_16=(this_15.h.push(new Attribute("billyearattr", B)),this_15);
  const this_17=(this_16.h.push(new Attribute("procheckoutattr", P)),this_16);
  const this_18=(this_17.h.push(new Attribute("freecheckoutattr", F)),this_17);
  const t=(this_18.h.push(new VarStr("seatcount", SeatCountText())),this_18);
  const t_1=(t.h.push(EventQ2(t.k, "onbillmonth", () => t.i, (_2) => {
    OnBillMonth(_2);
  })),t);
  const t_2=(t_1.h.push(EventQ2(t_1.k, "onbillyear", () => t_1.i, (_2) => {
    OnBillYear(_2);
  })),t_1);
  const t_3=(t_2.h.push(EventQ2(t_2.k, "onseatminus", () => t_2.i, (e) => {
    OnSeatMinus(e);
  })),t_2);
  const this_19=(t_3.h.push(EventQ2(t_3.k, "onseatplus", () => t_3.i, (_2) => {
    OnSeatPlus(_2);
  })),t_3);
  const this_20=(this_19.h.push(new VarStr("contactsubjectvar", _c_1.Lens(ContactFormVar(), (_2) => _2.subject, (_2, _3) => New(_3, _2.message, _2.email, _2.name, _2.country)))),this_19);
  const this_21=(this_20.h.push(new VarStr("contactmessagevar", _c_1.Lens(ContactFormVar(), (_2) => _2.message, (_2, _3) => New(_2.subject, _3, _2.email, _2.name, _2.country)))),this_20);
  const this_22=(this_21.h.push(new VarStr("contactemailvar", _c_1.Lens(ContactFormVar(), (_2) => _2.email, (_2, _3) => New(_2.subject, _2.message, _3, _2.name, _2.country)))),this_21);
  const this_23=(this_22.h.push(new VarStr("contactnamevar", _c_1.Lens(ContactFormVar(), (_2) => _2.name, (_2, _3) => New(_2.subject, _2.message, _2.email, _3, _2.country)))),this_22);
  const this_24=(this_23.h.push(new VarStr("contactcountryvar", _c_1.Lens(ContactFormVar(), (_2) => _2.country, (_2, _3) => New(_2.subject, _2.message, _2.email, _2.name, _3)))),this_23);
  const this_25=(this_24.h.push(new Attribute("contactsendbuttonattr", ContactSendButtonAttr())),this_24);
  const t_4=(this_25.h.push(new TextView("contactsendbuttontext", ContactSendButtonText())),this_25);
  const b=(t_4.h.push(EventQ2(t_4.k, "oncontactsendclick", () => t_4.i, (e) => {
    OnContactSendClick(e);
  })),t_4);
  const p=CompleteHoles(b.k, b.h, [["seatcount", 0, Some("1")], ["contactsubjectvar", 0, Some("WebSharper support")], ["contactmessagevar", 0, null], ["contactemailvar", 0, null], ["contactnamevar", 0, null], ["contactcountryvar", 0, Some("United States")]]);
  const i=new TemplateInstance(p[1], content(p[0]));
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
class Var extends Object_1 { }
function DynamicClassPred(name, view){
  return Dynamic_1(view, (el) =>(v) => v?AddClass(el, name):RemoveClass(el, name));
}
function Dynamic(name, view){
  return Dynamic_1(view, (el) =>(v) => el.setAttribute(name, v));
}
function DynamicBool(name, boolview){
  return Dynamic_1(boolview, (_1) =>(_2) => _2?_1.setAttribute(name, ""):_1.removeAttribute(name));
}
function Handler(name, callback){
  return Attr.A3((el) => {
    el.addEventListener(name, (d) =>(callback(el))(d), false);
  });
}
function OnAfterRender(callback){
  return Attr.A4(callback);
}
function Value(var_1){
  return ValueWith(StringApply(), var_1);
}
function FloatValueUnchecked(var_1){
  return ValueWith(FloatApplyUnchecked(), var_1);
}
function Checked(var_1){
  return ValueWith(BoolCheckedApply(), var_1);
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
function Map2(fn, a, a_1){
  return CreateLazy(() => Map2_1(fn, a(), a_1()));
}
function Map3(fn, a, a_1, a_2){
  return CreateLazy(() => Map3_1(fn, a(), a_1(), a_2()));
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
  return CreateLazy(() => Sequence_1(map((a) => a(), views)));
}
function Map2Unit(a, a_1){
  return CreateLazy(() => Map2Unit_1(a(), a_1()));
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
  static HandlerImpl(event, q){
    return Attr.A3((el) => {
      el.addEventListener(event, (d) =>(q(el))(d), false);
    });
  }
  static Create(name, value){
    return Attr.A3((el) => {
      el.setAttribute(name, value);
    });
  }
  static A4(onAfterRender){
    return Create_1(Attr, {$:4, $0:onAfterRender});
  }
  static A3(init_2){
    return Create_1(Attr, {$:3, $0:init_2});
  }
  $;
  $0;
  $1;
}
function ContactSendButtonText(){
  return _c_2.ContactSendButtonText;
}
function ContactSendButtonAttr(){
  return _c_2.ContactSendButtonAttr;
}
function BillMonthAttr(){
  const v=Map((a) => a.$==1?"false":"true", intervalVar().View);
  return Attr.Concat([Dynamic("data-active", v), Dynamic("aria-pressed", v)]);
}
function BillYearAttr(){
  const v=Map((a) => a.$==1?"true":"false", intervalVar().View);
  return Attr.Concat([Dynamic("data-active", v), Dynamic("aria-pressed", v)]);
}
function ProCheckoutAttr(){
  return Dynamic("href", Map2((_1, _2) =>"./checkout?plan=pro&interval="+String(intervalAsString(_1))+"&seats="+String(clampSeats(_2)), intervalVar().View, SeatCount()));
}
function FreeCheckoutAttr(){
  return Dynamic("href", Map((interval) =>"./checkout?plan=freelancer&interval="+intervalAsString(interval)+"&seats=1", intervalVar().View));
}
function OnBillMonth(){
  intervalVar().Set(Month);
}
function OnBillYear(){
  intervalVar().Set(Year);
}
function OnSeatMinus(){
  AdjustSeats(-1, SeatCountText());
}
function OnSeatPlus(){
  AdjustSeats(1, SeatCountText());
}
function OnContactSendClick(e){
  e.Event.preventDefault();
  const form=ContactFormVar().Get();
  if(!IsFormValid(form))alert("Please fill in all required fields.");
  else StartImmediate(Delay(() => {
    IsSendingVar().Set(true);
    return TryFinally(Delay(() => Bind(SendContact(form), (a) => a?(alert("Message sent successfully!"),resetForm(),Zero()):(alert("Failed to send message. Please try again later."),Zero()))), () => {
      IsSendingVar().Set(false);
    });
  }), null);
}
function resetForm(){
  ContactFormVar().Set(New("WebSharper support", "", "", "", "United States"));
}
let _c_1=Lazy((_i) => class Var_1 extends Object_1 {
  static {
    _c_1=_i(this);
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
  static Create_1(v){
    return new ConcreteVar(false, {s:Ready(v, [])}, v);
  }
  static { }
});
function ContactFormVar(){
  return _c_3.ContactFormVar;
}
function SeatCountText(){
  return _c_3.SeatCountText;
}
function intervalVar(){
  return _c_3.intervalVar;
}
function SeatCount(){
  return _c_3.SeatCount;
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
function IsFormValid(form){
  return!IsNullOrWhiteSpace(form.message)&&!IsNullOrWhiteSpace(form.email)&&!IsNullOrWhiteSpace(form.name)&&isValidEmail(form.email);
}
function IsSendingVar(){
  return _c_3.IsSendingVar;
}
function CanSendView(){
  return _c_3.CanSendView;
}
function fallbackPro(){
  return _c_3.fallbackPro;
}
function fallbackFreelancer(){
  return _c_3.fallbackFreelancer;
}
function catalogVar(){
  return _c_3.catalogVar;
}
function nonEmptyOpt(s){
  if(s==null)return null;
  else {
    const s_1=String(s);
    return isNotBlank(s_1)?Some(s_1):null;
  }
}
function effectiveName(defaultName, entry){
  const o=filter(isNotBlank, entry.Name);
  return o==null?defaultName:o.$0;
}
function effectiveAmount(fallback, entry, interval){
  const o=getPrice(entry, interval);
  const x=o==null?null:Some(o.$0.Amount);
  const v=fallbackAmount(fallback, interval);
  return x==null?v:x.$0;
}
function intervalProPriceLabel(a){
  return a.$==1?"/ seat / year":"/ seat / month";
}
function intervalFreePriceLabel(a){
  return a.$==1?"/ year":"/ month";
}
function intervalTotalLabel(a){
  return a.$==1?"Total (yearly)":"Total (monthly)";
}
function effectiveDescription(defaultDesc, entry){
  const o=filter(isNotBlank, entry.Description);
  return o==null?defaultDesc:o.$0;
}
function currencyFor(planCode, cat, interval){
  const entry=getEntry(cat, planCode);
  const o=getPrice(entry, interval);
  const o_1=o==null?entry.Month:(o.$0,o);
  const o_2=o_1==null?entry.Year:(o_1.$0,o_1);
  const o_3=o_2==null?null:Some(o_2.$0.Currency.toUpperCase());
  return o_3==null?"USD":o_3.$0;
}
function isValidEmail(email){
  if(email==null)return false;
  else {
    const e=Trim(email);
    return e.indexOf("@")!=-1&&e.indexOf(".")!=-1;
  }
}
function isNotBlank(s){
  return!IsNullOrWhiteSpace(s);
}
function getPrice(entry, interval){
  return interval.$==1?entry.Year:entry.Month;
}
function fallbackAmount(fallback, interval){
  return interval.$==1?fallback.Year.$0.Amount:fallback.Month.$0.Amount;
}
function getEntry(cat, code){
  const m=code.toLowerCase();
  return m=="pro"?cat.Pro:m=="freelancer"?cat.Freelancer:fallbackPro();
}
function New(subject, message, email, name, country){
  return{
    subject:subject, 
    message:message, 
    email:email, 
    name:name, 
    country:country
  };
}
function HydrateCatalog(){
  return Delay(() => Bind(LoadOrFetchPlans(), (a) => a==null?Zero():(buildCatalog(a.$0),Zero())));
}
function LoadOrFetchPlans(){
  return Delay(() => {
    const m=loadCache();
    return m==null?Bind(fetchFromApi(), (a) => {
      let _1;
      return a!=null&&a.$==1&&(length(a.$0)>0&&(_1=a.$0,true))?(saveCache(_1),Return(Some(_1))):Return(null);
    }):Return(Some(m.$0));
  });
}
function buildCatalog(items){
  catalogVar().Set(fold_1((_1, _2) => {
    const code=String(_2.code).toLowerCase();
    const intervalStr=String(_2.interval).toLowerCase();
    const pi=New_5(_2.unitAmountCents/100, (IsNullOrWhiteSpace(_2.currency)?"usd":_2.currency).toUpperCase());
    const nameOpt=nonEmptyOpt(_2.name);
    const m=_2.description;
    const descOpt=m==null?null:nonEmptyOpt(m.$0);
    return code=="pro"?New_4(updateEntryFromItem(_1.Pro, intervalStr, pi, nameOpt, descOpt), _1.Freelancer):code=="freelancer"?New_4(_1.Pro, updateEntryFromItem(_1.Freelancer, intervalStr, pi, nameOpt, descOpt)):_1;
  }, catalogVar().Get(), items));
}
function SendContact(form){
  return Delay(() => {
    const formData=new FormData();
    formData.append("subject", form.subject);
    formData.append("message", form.message);
    formData.append("email", form.email);
    formData.append("name", form.name);
    formData.append("country", form.country);
    return TryWith(Delay(() => {
      let r;
      return Bind(AsAsync(globalThis.fetch("https://api.intellifactory.com/api/contact", (r={},r.method="POST",r.body=formData,r))), (a) => Return(a.ok));
    }), () => Return(false));
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
  return Delay(() => TryWith(Delay(() => Bind(GetPlanPrices(), (a) => Return(Some(a)))), () => Return(null)));
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
function updateEntryFromItem(entry, intervalStr, pi, nameOpt, descOpt){
  const entry_1=New_3(nameOpt==null?entry.Name:Some(nameOpt.$0), descOpt==null?entry.Description:Some(descOpt.$0), entry.Month, entry.Year);
  return intervalStr=="month"?New_3(entry_1.Name, entry_1.Description, Some(pi), entry_1.Year):intervalStr=="year"?New_3(entry_1.Name, entry_1.Description, entry_1.Month, Some(pi)):entry_1;
}
function ProName(){
  return _c_4.ProName;
}
function FreeName(){
  return _c_4.FreeName;
}
function ProPriceAmount(){
  return _c_4.ProPriceAmount;
}
function ProPriceLabel(){
  return _c_4.ProPriceLabel;
}
function FreePriceAmount(){
  return _c_4.FreePriceAmount;
}
function FreePriceLabel(){
  return _c_4.FreePriceLabel;
}
function ProTotalLabel(){
  return _c_4.ProTotalLabel;
}
function ProTotalAmount(){
  return _c_4.ProTotalAmount;
}
function FreeTotalLabel(){
  return _c_4.FreeTotalLabel;
}
function FreeTotalAmount(){
  return _c_4.FreeTotalAmount;
}
function ProNote(){
  return _c_4.ProNote;
}
function FreeNote(){
  return _c_4.FreeNote;
}
function Some(Value_1){
  return{$:1, $0:Value_1};
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
function content(h){
  return h?GetOrLoadTemplate("support", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        <div class=\"space-y-20\" ws-onafterrender=\"OnAfterRender\">\r\n            <!-- Hero / Banner -->\r\n            <section class=\"pt-28 sm:pt-32\">\r\n                <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <div class=\"grid items-center gap-8 md:grid-cols-12\">\r\n                        <div class=\"md:col-span-7 text-center md:text-left\">\r\n                            <h1 class=\"font-bold tracking-tight text-gray-950 dark:text-white text-4xl sm:text-5xl\">\r\n                                WebSharper Expert Support\r\n                            </h1>\r\n                            <p class=\"mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 max-w-2xl md:mx-0 mx-auto\">\r\n                                Our experienced WebSharper support team is available to help you make the right decisions for your development project, and can save you hundreds of hours when important and difficult questions arise.\r\n                            </p>\r\n\r\n                            <!-- Chips -->\r\n                            <div class=\"mt-4 flex flex-wrap justify-center md:justify-start gap-2\">\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    Email & web support\r\n                                </span>\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    First response: 4h-2d\r\n                                </span>\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    Mentoring & training available\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Visual -->\r\n                        <div class=\"md:col-span-5\">\r\n                            <figure class=\"rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-900\">\r\n                                <img src=\"./Assets/images/slay.png\" alt=\"WebSharper support: experts reviewing code and architecture\" class=\"w-full h-auto\">\r\n                            </figure>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <section class=\"scroll-my-16\">\r\n                <div class=\"mx-2 md:mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <div class=\"rounded-3xl overflow-hidden border dark:border-gray-800\">\r\n                        <div class=\"py-12 lg:py-16 lg:px-16 border-b dark:border-gray-800\">\r\n                            <h2 class=\"font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                                Quick, practical help from the people who build WebSharper\r\n                            </h2>\r\n                            <p class=\"mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                                Get senior guidance on architecture, performance, reactive UI, and integrations plus hands-on fixes when you need them.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div class=\"lg:px-16\">\r\n                            <!-- Visual / proof -->\r\n                            <div class=\"lg:col-span-5 lg:-mr-10 py-12 md:py-16\">\r\n                                <div class=\"relative\">\r\n                                    <div class=\"absolute translate-y-1/2 mx-auto blur-3xl inset-0 rounded-t-full bg-brand-primary/20 dark:bg-brand-primary/20\"></div>\r\n                                    <figure class=\"relative rounded-2xl overflow-hidden border bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-sm w-1/2 mx-auto\">\r\n\r\n                                        <img src=\"./Assets/images/slay.png\" alt=\"Support walkthrough: issue context, guidance, and fix\" class=\"w-full h-auto\">\r\n                                    </figure>\r\n                                    <!-- short 15\ufffd20s looped video instead of static image -->\r\n                                    <!--\r\n                                    <video class=\"relative mt-4 w-full rounded-2xl border border-gray-200 dark:border-gray-800\" autoplay muted loop playsinline poster=\"./Assets/images/support-video-poster.png\">\r\n                                        <source src=\"./videos/support-teaser.mp4\" type=\"video/mp4\">\r\n                                    </video>\r\n                                    -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <!-- Support value props -->\r\n            <section class=\"mt-12\">\r\n                <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <ul class=\"grid gap-4 md:grid-cols-3\">\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7 9l5 3.5L17 9\"></path><path d=\"M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z\"></path></g></svg>\r\n                                <span>Email and web support</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Email us your support queries, architectural or best practice questions, or post them to our dedicated support site.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0\"></path><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z\" clip-rule=\"evenodd\"></path></svg>\r\n                                <span>Fast response time</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Receive the first response to your queries from within 4 hours up to 2 days, depending on your selected support plan..\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96m0 0v288\"></path></svg>\r\n                                <span>Mentoring and training</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Pick a Start-up or Enterprise plan and jumpstart your team's productivity with our online WebSharper training and mentoring.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M7 3a2 2 0 0 1 4 0h1.5A1.5 1.5 0 0 1 14 4.5V7h-1a1 1 0 0 0 0 2h1v2.5a1.5 1.5 0 0 1-1.5 1.5H11a2 2 0 0 1-4 0H5.5A1.5 1.5 0 0 1 4 11.5V10a2 2 0 0 1 0-4V4.5A1.5 1.5 0 0 1 5.5 3zm2-1a1 1 0 0 0-1 1v1H5.5a.5.5 0 0 0-.5.5V7H4a1 1 0 0 0 0 2h1v2.5a.5.5 0 0 0 .5.5H8v1a1 1 0 0 0 2 0v-1h2.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 0-4V4.5a.5.5 0 0 0-.5-.5H10V3a1 1 0 0 0-1-1\"></path></svg>\r\n                                <span>Extensions support</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Working heavily with WebSharper extensions? Get the help you need with any issues you encounter in these extensions.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9\"></path></svg>\r\n                                <span>Architectural review</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Next to support questions, we can also help you decide on the best architecture for your project, or give best practice guidelines for your team.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M19 15v-3.062A3.938 3.938 0 0 0 15.063 8H8.936A3.938 3.938 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z\"></path><path d=\"M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1\"></path><path stroke-linecap=\"round\" d=\"M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15\"></path></g></svg>\r\n                                <span>Priority bugfixes</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Your support ticket jumps to the front of our priority queue and becomes the first to fix. Get the most timely help when you need it most.\r\n                            </p>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </section>\r\n\r\n        <section id=\"plans\" class=\"scroll-mt-20 scroll-smooth\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <h2 class=\"text-center font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                    Choose your plan\r\n                </h2>\r\n                <p class=\"text-center mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                    Monthly or yearly billing, per-seat for teams or a freelancer option.\r\n                </p>\r\n\r\n                    <!-- Billing period toggle -->\r\n                    <div class=\"mx-auto mt-6 flex w-full max-w-xs items-center justify-center rounded-xl border border-gray-200 bg-white p-1\r\n                                dark:bg-gray-950 dark:border-gray-800\">\r\n                        <button ws-onclick=\"OnBillMonth\" ws-attr=\"BillMonthAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 text flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"false\" aria-pressed=\"false\">\r\n                            Per month\r\n                        </button>\r\n                        <button ws-onclick=\"OnBillYear\" ws-attr=\"BillYearAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"true\" aria-pressed=\"true\">\r\n                            Per year\r\n                        </button>\r\n                    </div>\r\n\r\n                    <!-- Plans grid -->\r\n                    <div class=\"mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2\">\r\n                        <!-- Professional (per seat) -->\r\n                        <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\" data-price-month=\"250\" data-price-year=\"2500\">\r\n                            <div class=\"flex items-start justify-between gap-4\">\r\n                                <div>\r\n                                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                    <div ws-hole=\"ProName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                        Professional\r\n                                    </div>\r\n                                    <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                        <span ws-hole=\"ProPriceAmount\">$2,500</span>\r\n                                        <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"ProPriceLabel\">\r\n                                            / seat / year\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Seat selector -->\r\n                                <div class=\"flex items-center gap-2\">\r\n                                    <button ws-onclick=\"OnSeatMinus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Decrease seats\" type=\"button\">\r\n                                        -\r\n                                    </button>\r\n                                    <input type=\"text\" ws-var=\"SeatCount\" inputmode=\"numeric\" pattern=\"[0-9]*\" min=\"1\" step=\"1\" value=\"1\" class=\"w-20 text-center rounded-xl border border-gray-300 bg-transparent dark:border-white/20 text-gray-900 dark:text-white h-10\" aria-label=\"Seat count\">\r\n                                    <button ws-onclick=\"OnSeatPlus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Increase seats\" type=\"button\">\r\n                                        +\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Total -->\r\n                            <div class=\"mt-4 flex items-center justify-between\">\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"ProTotalLabel\">\r\n                                    Total (yearly)\r\n                                </div>\r\n                                <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"ProTotalAmount\">\r\n                                    $2,500\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- CTA -->\r\n                            <a ws-attr=\"ProCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                                <span class=\"relative text-sm\">Continue to checkout</span>\r\n                            </a>\r\n\r\n                            <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"ProNote\">\r\n                                Assign GitHub usernames after purchase. Prices in USD.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <!-- Freelancer (1 seat) -->\r\n                        <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\">\r\n                            <div class=\"flex items-start justify-between gap-4\">\r\n                                <div>\r\n                                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                    <div ws-hole=\"FreeName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                        Freelancer\r\n                                    </div>\r\n                                    <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                        <span ws-hole=\"FreePriceAmount\">$300</span>\r\n                                        <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"FreePriceLabel\">\r\n                                            / year\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"rounded-xl border border-gray-300 px-3 h-10 flex items-center\r\n                                            text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                    1 seat\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Total -->\r\n                            <div class=\"mt-4 flex items-center justify-between\">\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"FreeTotalLabel\">\r\n                                    Total (yearly)\r\n                                </div>\r\n                                <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"FreeTotalAmount\">\r\n                                    $300\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- CTA -->\r\n                            <a ws-attr=\"FreeCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                                <span class=\"relative text-sm\">Continue to checkout</span>\r\n                            </a>\r\n\r\n                            <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"FreeNote\">\r\n                                Ideal for solo developers. Prices in USD.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <!-- contact us -->\r\n            <section class=\"scroll-my-0 py-7 dark:bg-gray-900 border-t-2 border-b-2 dark:border-none\">\r\n                <div class=\"mx-auto max-w-xl p-8 rounded content mb-10\">\r\n                    <h2 class=\"header text-center mb-8\">Contact us</h2>\r\n\r\n                    <form method=\"post\">\r\n\r\n                        <!-- Subject -->\r\n                        <div class=\"mb-6\">\r\n                            <label for=\"emailSubject\" class=\"block font-semibold mb-2\">Subject</label>\r\n                            <input type=\"text\" name=\"email-subject\" ws-var=\"ContactSubjectVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\" value=\"WebSharper support\">\r\n                        </div>\r\n\r\n                        <!-- Message -->\r\n                        <div class=\"mb-6\">\r\n                            <label for=\"emailMessage\" class=\"block font-semibold mb-2\">Message</label>\r\n                            <textarea name=\"email-message\" rows=\"5\" ws-var=\"ContactMessageVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\"></textarea>\r\n                        </div>\r\n\r\n                        <!-- Row with Email, Name, Country -->\r\n                        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6\">\r\n                            <!-- Email -->\r\n                            <div>\r\n                                <label for=\"emailAddress\" class=\"block font-semibold mb-2\">Your email address</label>\r\n                                <input type=\"email\" name=\"email-address\" ws-var=\"ContactEmailVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                            </div>\r\n\r\n                            <!-- Name -->\r\n                            <div>\r\n                                <label for=\"emailName\" class=\"block font-semibold mb-2\">Your name</label>\r\n                                <input type=\"text\" ws-var=\"ContactNameVar\" name=\"name\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                            </div>\r\n\r\n                            <!-- Country -->\r\n                            <div>\r\n                                <label for=\"emailCountry\" class=\"block font-semibold mb-2\">Your country</label>\r\n                                <select name=\"email-country\" ws-var=\"ContactCountryVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                                    <option value=\"Afghanistan\">Afghanistan</option>\r\n                                    <option value=\"Albania\">Albania</option>\r\n                                    <option value=\"Algeria\">Algeria</option>\r\n                                    <option value=\"Andorra\">Andorra</option>\r\n                                    <option value=\"Angola\">Angola</option>\r\n                                    <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\r\n                                    <option value=\"Argentina\">Argentina</option>\r\n                                    <option value=\"Armenia\">Armenia</option>\r\n                                    <option value=\"Australia\">Australia</option>\r\n                                    <option value=\"Austria\">Austria</option>\r\n                                    <option value=\"Azerbaijan\">Azerbaijan</option>\r\n                                    <option value=\"Bahamas\">Bahamas</option>\r\n                                    <option value=\"Bahrain\">Bahrain</option>\r\n                                    <option value=\"Bangladesh\">Bangladesh</option>\r\n                                    <option value=\"Barbados\">Barbados</option>\r\n                                    <option value=\"Belarus\">Belarus</option>\r\n                                    <option value=\"Belgium\">Belgium</option>\r\n                                    <option value=\"Belize\">Belize</option>\r\n                                    <option value=\"Benin\">Benin</option>\r\n                                    <option value=\"Bhutan\">Bhutan</option>\r\n                                    <option value=\"Bolivia\">Bolivia</option>\r\n                                    <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\r\n                                    <option value=\"Botswana\">Botswana</option>\r\n                                    <option value=\"Brazil\">Brazil</option>\r\n                                    <option value=\"Brunei\">Brunei</option>\r\n                                    <option value=\"Bulgaria\">Bulgaria</option>\r\n                                    <option value=\"Burkina Faso\">Burkina Faso</option>\r\n                                    <option value=\"Burundi\">Burundi</option>\r\n                                    <option value=\"Cabo Verde\">Cabo Verde</option>\r\n                                    <option value=\"Cambodia\">Cambodia</option>\r\n                                    <option value=\"Cameroon\">Cameroon</option>\r\n                                    <option value=\"Canada\">Canada</option>\r\n                                    <option value=\"Central African Republic\">Central African Republic</option>\r\n                                    <option value=\"Chad\">Chad</option>\r\n                                    <option value=\"Chile\">Chile</option>\r\n                                    <option value=\"China\">China</option>\r\n                                    <option value=\"Colombia\">Colombia</option>\r\n                                    <option value=\"Comoros\">Comoros</option>\r\n                                    <option value=\"Congo (Congo-Brazzaville)\">Congo (Congo-Brazzaville)</option>\r\n                                    <option value=\"Costa Rica\">Costa Rica</option>\r\n                                    <option value=\"Croatia\">Croatia</option>\r\n                                    <option value=\"Cuba\">Cuba</option>\r\n                                    <option value=\"Cyprus\">Cyprus</option>\r\n                                    <option value=\"Czech Republic\">Czech Republic</option>\r\n                                    <option value=\"Democratic Republic of the Congo\">Democratic Republic of the Congo</option>\r\n                                    <option value=\"Denmark\">Denmark</option>\r\n                                    <option value=\"Djibouti\">Djibouti</option>\r\n                                    <option value=\"Dominica\">Dominica</option>\r\n                                    <option value=\"Dominican Republic\">Dominican Republic</option>\r\n                                    <option value=\"Ecuador\">Ecuador</option>\r\n                                    <option value=\"Egypt\">Egypt</option>\r\n                                    <option value=\"El Salvador\">El Salvador</option>\r\n                                    <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n                                    <option value=\"Eritrea\">Eritrea</option>\r\n                                    <option value=\"Estonia\">Estonia</option>\r\n                                    <option value=\"Eswatini\">Eswatini</option>\r\n                                    <option value=\"Ethiopia\">Ethiopia</option>\r\n                                    <option value=\"Fiji\">Fiji</option>\r\n                                    <option value=\"Finland\">Finland</option>\r\n                                    <option value=\"France\">France</option>\r\n                                    <option value=\"Gabon\">Gabon</option>\r\n                                    <option value=\"Gambia\">Gambia</option>\r\n                                    <option value=\"Georgia\">Georgia</option>\r\n                                    <option value=\"Germany\">Germany</option>\r\n                                    <option value=\"Ghana\">Ghana</option>\r\n                                    <option value=\"Greece\">Greece</option>\r\n                                    <option value=\"Grenada\">Grenada</option>\r\n                                    <option value=\"Guatemala\">Guatemala</option>\r\n                                    <option value=\"Guinea\">Guinea</option>\r\n                                    <option value=\"Guinea-Bissau\">Guinea-Bissau</option>\r\n                                    <option value=\"Guyana\">Guyana</option>\r\n                                    <option value=\"Haiti\">Haiti</option>\r\n                                    <option value=\"Honduras\">Honduras</option>\r\n                                    <option value=\"Hungary\">Hungary</option>\r\n                                    <option value=\"Iceland\">Iceland</option>\r\n                                    <option value=\"India\">India</option>\r\n                                    <option value=\"Indonesia\">Indonesia</option>\r\n                                    <option value=\"Iran\">Iran</option>\r\n                                    <option value=\"Iraq\">Iraq</option>\r\n                                    <option value=\"Ireland\">Ireland</option>\r\n                                    <option value=\"Israel\">Israel</option>\r\n                                    <option value=\"Italy\">Italy</option>\r\n                                    <option value=\"Jamaica\">Jamaica</option>\r\n                                    <option value=\"Japan\">Japan</option>\r\n                                    <option value=\"Jordan\">Jordan</option>\r\n                                    <option value=\"Kazakhstan\">Kazakhstan</option>\r\n                                    <option value=\"Kenya\">Kenya</option>\r\n                                    <option value=\"Kiribati\">Kiribati</option>\r\n                                    <option value=\"Kuwait\">Kuwait</option>\r\n                                    <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n                                    <option value=\"Laos\">Laos</option>\r\n                                    <option value=\"Latvia\">Latvia</option>\r\n                                    <option value=\"Lebanon\">Lebanon</option>\r\n                                    <option value=\"Lesotho\">Lesotho</option>\r\n                                    <option value=\"Liberia\">Liberia</option>\r\n                                    <option value=\"Libya\">Libya</option>\r\n                                    <option value=\"Liechtenstein\">Liechtenstein</option>\r\n                                    <option value=\"Lithuania\">Lithuania</option>\r\n                                    <option value=\"Luxembourg\">Luxembourg</option>\r\n                                    <option value=\"Madagascar\">Madagascar</option>\r\n                                    <option value=\"Malawi\">Malawi</option>\r\n                                    <option value=\"Malaysia\">Malaysia</option>\r\n                                    <option value=\"Maldives\">Maldives</option>\r\n                                    <option value=\"Mali\">Mali</option>\r\n                                    <option value=\"Malta\">Malta</option>\r\n                                    <option value=\"Marshall Islands\">Marshall Islands</option>\r\n                                    <option value=\"Mauritania\">Mauritania</option>\r\n                                    <option value=\"Mauritius\">Mauritius</option>\r\n                                    <option value=\"Mexico\">Mexico</option>\r\n                                    <option value=\"Micronesia\">Micronesia</option>\r\n                                    <option value=\"Moldova\">Moldova</option>\r\n                                    <option value=\"Monaco\">Monaco</option>\r\n                                    <option value=\"Mongolia\">Mongolia</option>\r\n                                    <option value=\"Montenegro\">Montenegro</option>\r\n                                    <option value=\"Morocco\">Morocco</option>\r\n                                    <option value=\"Mozambique\">Mozambique</option>\r\n                                    <option value=\"Myanmar (Burma)\">Myanmar (Burma)</option>\r\n                                    <option value=\"Namibia\">Namibia</option>\r\n                                    <option value=\"Nauru\">Nauru</option>\r\n                                    <option value=\"Nepal\">Nepal</option>\r\n                                    <option value=\"Netherlands\">Netherlands</option>\r\n                                    <option value=\"New Zealand\">New Zealand</option>\r\n                                    <option value=\"Nicaragua\">Nicaragua</option>\r\n                                    <option value=\"Niger\">Niger</option>\r\n                                    <option value=\"Nigeria\">Nigeria</option>\r\n                                    <option value=\"North Korea\">North Korea</option>\r\n                                    <option value=\"North Macedonia\">North Macedonia</option>\r\n                                    <option value=\"Norway\">Norway</option>\r\n                                    <option value=\"Oman\">Oman</option>\r\n                                    <option value=\"Pakistan\">Pakistan</option>\r\n                                    <option value=\"Palau\">Palau</option>\r\n                                    <option value=\"Palestine\">Palestine</option>\r\n                                    <option value=\"Panama\">Panama</option>\r\n                                    <option value=\"Papua New Guinea\">Papua New Guinea</option>\r\n                                    <option value=\"Paraguay\">Paraguay</option>\r\n                                    <option value=\"Peru\">Peru</option>\r\n                                    <option value=\"Philippines\">Philippines</option>\r\n                                    <option value=\"Poland\">Poland</option>\r\n                                    <option value=\"Portugal\">Portugal</option>\r\n                                    <option value=\"Qatar\">Qatar</option>\r\n                                    <option value=\"Romania\">Romania</option>\r\n                                    <option value=\"Russia\">Russia</option>\r\n                                    <option value=\"Rwanda\">Rwanda</option>\r\n                                    <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\r\n                                    <option value=\"Saint Lucia\">Saint Lucia</option>\r\n                                    <option value=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</option>\r\n                                    <option value=\"Samoa\">Samoa</option>\r\n                                    <option value=\"San Marino\">San Marino</option>\r\n                                    <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\r\n                                    <option value=\"Saudi Arabia\">Saudi Arabia</option>\r\n                                    <option value=\"Senegal\">Senegal</option>\r\n                                    <option value=\"Serbia\">Serbia</option>\r\n                                    <option value=\"Seychelles\">Seychelles</option>\r\n                                    <option value=\"Sierra Leone\">Sierra Leone</option>\r\n                                    <option value=\"Singapore\">Singapore</option>\r\n                                    <option value=\"Slovakia\">Slovakia</option>\r\n                                    <option value=\"Slovenia\">Slovenia</option>\r\n                                    <option value=\"Solomon Islands\">Solomon Islands</option>\r\n                                    <option value=\"Somalia\">Somalia</option>\r\n                                    <option value=\"South Africa\">South Africa</option>\r\n                                    <option value=\"South Korea\">South Korea</option>\r\n                                    <option value=\"South Sudan\">South Sudan</option>\r\n                                    <option value=\"Spain\">Spain</option>\r\n                                    <option value=\"Sri Lanka\">Sri Lanka</option>\r\n                                    <option value=\"Sudan\">Sudan</option>\r\n                                    <option value=\"Suriname\">Suriname</option>\r\n                                    <option value=\"Sweden\">Sweden</option>\r\n                                    <option value=\"Switzerland\">Switzerland</option>\r\n                                    <option value=\"Syria\">Syria</option>\r\n                                    <option value=\"Taiwan\">Taiwan</option>\r\n                                    <option value=\"Tajikistan\">Tajikistan</option>\r\n                                    <option value=\"Tanzania\">Tanzania</option>\r\n                                    <option value=\"Thailand\">Thailand</option>\r\n                                    <option value=\"Timor-Leste\">Timor-Leste</option>\r\n                                    <option value=\"Togo\">Togo</option>\r\n                                    <option value=\"Tonga\">Tonga</option>\r\n                                    <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\r\n                                    <option value=\"Tunisia\">Tunisia</option>\r\n                                    <option value=\"Turkey\">Turkey</option>\r\n                                    <option value=\"Turkmenistan\">Turkmenistan</option>\r\n                                    <option value=\"Tuvalu\">Tuvalu</option>\r\n                                    <option value=\"Uganda\">Uganda</option>\r\n                                    <option value=\"Ukraine\">Ukraine</option>\r\n                                    <option value=\"United Arab Emirates\">United Arab Emirates</option>\r\n                                    <option value=\"United Kingdom\">United Kingdom</option>\r\n                                    <option value=\"United States\" selected=\"\">United States</option>\r\n                                    <option value=\"Uruguay\">Uruguay</option>\r\n                                    <option value=\"Uzbekistan\">Uzbekistan</option>\r\n                                    <option value=\"Vanuatu\">Vanuatu</option>\r\n                                    <option value=\"Vatican City\">Vatican City</option>\r\n                                    <option value=\"Venezuela\">Venezuela</option>\r\n                                    <option value=\"Vietnam\">Vietnam</option>\r\n                                    <option value=\"Yemen\">Yemen</option>\r\n                                    <option value=\"Zambia\">Zambia</option>\r\n                                    <option value=\"Zimbabwe\">Zimbabwe</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Send Button -->\r\n                        <div class=\"text-left\">\r\n                            <button ws-attr=\"ContactSendButtonAttr\" type=\"button\" ws-onclick=\"OnContactSendClick\" class=\"bg-blue-500 text-white font-semibold px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-blue-400\">\r\n                                ${ContactSendButtonText}\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </section>\r\n\r\n        </div>\r\n    "), h):PrepareTemplate("support", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        <div class=\"space-y-20\" ws-onafterrender=\"OnAfterRender\">\r\n            <!-- Hero / Banner -->\r\n            <section class=\"pt-28 sm:pt-32\">\r\n                <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <div class=\"grid items-center gap-8 md:grid-cols-12\">\r\n                        <div class=\"md:col-span-7 text-center md:text-left\">\r\n                            <h1 class=\"font-bold tracking-tight text-gray-950 dark:text-white text-4xl sm:text-5xl\">\r\n                                WebSharper Expert Support\r\n                            </h1>\r\n                            <p class=\"mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 max-w-2xl md:mx-0 mx-auto\">\r\n                                Our experienced WebSharper support team is available to help you make the right decisions for your development project, and can save you hundreds of hours when important and difficult questions arise.\r\n                            </p>\r\n\r\n                            <!-- Chips -->\r\n                            <div class=\"mt-4 flex flex-wrap justify-center md:justify-start gap-2\">\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    Email & web support\r\n                                </span>\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    First response: 4h-2d\r\n                                </span>\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    Mentoring & training available\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Visual -->\r\n                        <div class=\"md:col-span-5\">\r\n                            <figure class=\"rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-900\">\r\n                                <img src=\"./Assets/images/slay.png\" alt=\"WebSharper support: experts reviewing code and architecture\" class=\"w-full h-auto\">\r\n                            </figure>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <section class=\"scroll-my-16\">\r\n                <div class=\"mx-2 md:mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <div class=\"rounded-3xl overflow-hidden border dark:border-gray-800\">\r\n                        <div class=\"py-12 lg:py-16 lg:px-16 border-b dark:border-gray-800\">\r\n                            <h2 class=\"font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                                Quick, practical help from the people who build WebSharper\r\n                            </h2>\r\n                            <p class=\"mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                                Get senior guidance on architecture, performance, reactive UI, and integrations plus hands-on fixes when you need them.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div class=\"lg:px-16\">\r\n                            <!-- Visual / proof -->\r\n                            <div class=\"lg:col-span-5 lg:-mr-10 py-12 md:py-16\">\r\n                                <div class=\"relative\">\r\n                                    <div class=\"absolute translate-y-1/2 mx-auto blur-3xl inset-0 rounded-t-full bg-brand-primary/20 dark:bg-brand-primary/20\"></div>\r\n                                    <figure class=\"relative rounded-2xl overflow-hidden border bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-sm w-1/2 mx-auto\">\r\n\r\n                                        <img src=\"./Assets/images/slay.png\" alt=\"Support walkthrough: issue context, guidance, and fix\" class=\"w-full h-auto\">\r\n                                    </figure>\r\n                                    <!-- short 15\ufffd20s looped video instead of static image -->\r\n                                    <!--\r\n                                    <video class=\"relative mt-4 w-full rounded-2xl border border-gray-200 dark:border-gray-800\" autoplay muted loop playsinline poster=\"./Assets/images/support-video-poster.png\">\r\n                                        <source src=\"./videos/support-teaser.mp4\" type=\"video/mp4\">\r\n                                    </video>\r\n                                    -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <!-- Support value props -->\r\n            <section class=\"mt-12\">\r\n                <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <ul class=\"grid gap-4 md:grid-cols-3\">\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7 9l5 3.5L17 9\"></path><path d=\"M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z\"></path></g></svg>\r\n                                <span>Email and web support</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Email us your support queries, architectural or best practice questions, or post them to our dedicated support site.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0\"></path><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z\" clip-rule=\"evenodd\"></path></svg>\r\n                                <span>Fast response time</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Receive the first response to your queries from within 4 hours up to 2 days, depending on your selected support plan..\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96m0 0v288\"></path></svg>\r\n                                <span>Mentoring and training</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Pick a Start-up or Enterprise plan and jumpstart your team's productivity with our online WebSharper training and mentoring.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M7 3a2 2 0 0 1 4 0h1.5A1.5 1.5 0 0 1 14 4.5V7h-1a1 1 0 0 0 0 2h1v2.5a1.5 1.5 0 0 1-1.5 1.5H11a2 2 0 0 1-4 0H5.5A1.5 1.5 0 0 1 4 11.5V10a2 2 0 0 1 0-4V4.5A1.5 1.5 0 0 1 5.5 3zm2-1a1 1 0 0 0-1 1v1H5.5a.5.5 0 0 0-.5.5V7H4a1 1 0 0 0 0 2h1v2.5a.5.5 0 0 0 .5.5H8v1a1 1 0 0 0 2 0v-1h2.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 0-4V4.5a.5.5 0 0 0-.5-.5H10V3a1 1 0 0 0-1-1\"></path></svg>\r\n                                <span>Extensions support</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Working heavily with WebSharper extensions? Get the help you need with any issues you encounter in these extensions.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9\"></path></svg>\r\n                                <span>Architectural review</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Next to support questions, we can also help you decide on the best architecture for your project, or give best practice guidelines for your team.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M19 15v-3.062A3.938 3.938 0 0 0 15.063 8H8.936A3.938 3.938 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z\"></path><path d=\"M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1\"></path><path stroke-linecap=\"round\" d=\"M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15\"></path></g></svg>\r\n                                <span>Priority bugfixes</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Your support ticket jumps to the front of our priority queue and becomes the first to fix. Get the most timely help when you need it most.\r\n                            </p>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </section>\r\n\r\n        <section id=\"plans\" class=\"scroll-mt-20 scroll-smooth\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <h2 class=\"text-center font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                    Choose your plan\r\n                </h2>\r\n                <p class=\"text-center mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                    Monthly or yearly billing, per-seat for teams or a freelancer option.\r\n                </p>\r\n\r\n                    <!-- Billing period toggle -->\r\n                    <div class=\"mx-auto mt-6 flex w-full max-w-xs items-center justify-center rounded-xl border border-gray-200 bg-white p-1\r\n                                dark:bg-gray-950 dark:border-gray-800\">\r\n                        <button ws-onclick=\"OnBillMonth\" ws-attr=\"BillMonthAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 text flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"false\" aria-pressed=\"false\">\r\n                            Per month\r\n                        </button>\r\n                        <button ws-onclick=\"OnBillYear\" ws-attr=\"BillYearAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"true\" aria-pressed=\"true\">\r\n                            Per year\r\n                        </button>\r\n                    </div>\r\n\r\n                    <!-- Plans grid -->\r\n                    <div class=\"mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2\">\r\n                        <!-- Professional (per seat) -->\r\n                        <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\" data-price-month=\"250\" data-price-year=\"2500\">\r\n                            <div class=\"flex items-start justify-between gap-4\">\r\n                                <div>\r\n                                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                    <div ws-hole=\"ProName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                        Professional\r\n                                    </div>\r\n                                    <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                        <span ws-hole=\"ProPriceAmount\">$2,500</span>\r\n                                        <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"ProPriceLabel\">\r\n                                            / seat / year\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Seat selector -->\r\n                                <div class=\"flex items-center gap-2\">\r\n                                    <button ws-onclick=\"OnSeatMinus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Decrease seats\" type=\"button\">\r\n                                        -\r\n                                    </button>\r\n                                    <input type=\"text\" ws-var=\"SeatCount\" inputmode=\"numeric\" pattern=\"[0-9]*\" min=\"1\" step=\"1\" value=\"1\" class=\"w-20 text-center rounded-xl border border-gray-300 bg-transparent dark:border-white/20 text-gray-900 dark:text-white h-10\" aria-label=\"Seat count\">\r\n                                    <button ws-onclick=\"OnSeatPlus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Increase seats\" type=\"button\">\r\n                                        +\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Total -->\r\n                            <div class=\"mt-4 flex items-center justify-between\">\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"ProTotalLabel\">\r\n                                    Total (yearly)\r\n                                </div>\r\n                                <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"ProTotalAmount\">\r\n                                    $2,500\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- CTA -->\r\n                            <a ws-attr=\"ProCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                                <span class=\"relative text-sm\">Continue to checkout</span>\r\n                            </a>\r\n\r\n                            <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"ProNote\">\r\n                                Assign GitHub usernames after purchase. Prices in USD.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <!-- Freelancer (1 seat) -->\r\n                        <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\">\r\n                            <div class=\"flex items-start justify-between gap-4\">\r\n                                <div>\r\n                                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                    <div ws-hole=\"FreeName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                        Freelancer\r\n                                    </div>\r\n                                    <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                        <span ws-hole=\"FreePriceAmount\">$300</span>\r\n                                        <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"FreePriceLabel\">\r\n                                            / year\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"rounded-xl border border-gray-300 px-3 h-10 flex items-center\r\n                                            text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                    1 seat\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Total -->\r\n                            <div class=\"mt-4 flex items-center justify-between\">\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"FreeTotalLabel\">\r\n                                    Total (yearly)\r\n                                </div>\r\n                                <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"FreeTotalAmount\">\r\n                                    $300\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- CTA -->\r\n                            <a ws-attr=\"FreeCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                                <span class=\"relative text-sm\">Continue to checkout</span>\r\n                            </a>\r\n\r\n                            <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"FreeNote\">\r\n                                Ideal for solo developers. Prices in USD.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <!-- contact us -->\r\n            <section class=\"scroll-my-0 py-7 dark:bg-gray-900 border-t-2 border-b-2 dark:border-none\">\r\n                <div class=\"mx-auto max-w-xl p-8 rounded content mb-10\">\r\n                    <h2 class=\"header text-center mb-8\">Contact us</h2>\r\n\r\n                    <form method=\"post\">\r\n\r\n                        <!-- Subject -->\r\n                        <div class=\"mb-6\">\r\n                            <label for=\"emailSubject\" class=\"block font-semibold mb-2\">Subject</label>\r\n                            <input type=\"text\" name=\"email-subject\" ws-var=\"ContactSubjectVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\" value=\"WebSharper support\">\r\n                        </div>\r\n\r\n                        <!-- Message -->\r\n                        <div class=\"mb-6\">\r\n                            <label for=\"emailMessage\" class=\"block font-semibold mb-2\">Message</label>\r\n                            <textarea name=\"email-message\" rows=\"5\" ws-var=\"ContactMessageVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\"></textarea>\r\n                        </div>\r\n\r\n                        <!-- Row with Email, Name, Country -->\r\n                        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6\">\r\n                            <!-- Email -->\r\n                            <div>\r\n                                <label for=\"emailAddress\" class=\"block font-semibold mb-2\">Your email address</label>\r\n                                <input type=\"email\" name=\"email-address\" ws-var=\"ContactEmailVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                            </div>\r\n\r\n                            <!-- Name -->\r\n                            <div>\r\n                                <label for=\"emailName\" class=\"block font-semibold mb-2\">Your name</label>\r\n                                <input type=\"text\" ws-var=\"ContactNameVar\" name=\"name\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                            </div>\r\n\r\n                            <!-- Country -->\r\n                            <div>\r\n                                <label for=\"emailCountry\" class=\"block font-semibold mb-2\">Your country</label>\r\n                                <select name=\"email-country\" ws-var=\"ContactCountryVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                                    <option value=\"Afghanistan\">Afghanistan</option>\r\n                                    <option value=\"Albania\">Albania</option>\r\n                                    <option value=\"Algeria\">Algeria</option>\r\n                                    <option value=\"Andorra\">Andorra</option>\r\n                                    <option value=\"Angola\">Angola</option>\r\n                                    <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\r\n                                    <option value=\"Argentina\">Argentina</option>\r\n                                    <option value=\"Armenia\">Armenia</option>\r\n                                    <option value=\"Australia\">Australia</option>\r\n                                    <option value=\"Austria\">Austria</option>\r\n                                    <option value=\"Azerbaijan\">Azerbaijan</option>\r\n                                    <option value=\"Bahamas\">Bahamas</option>\r\n                                    <option value=\"Bahrain\">Bahrain</option>\r\n                                    <option value=\"Bangladesh\">Bangladesh</option>\r\n                                    <option value=\"Barbados\">Barbados</option>\r\n                                    <option value=\"Belarus\">Belarus</option>\r\n                                    <option value=\"Belgium\">Belgium</option>\r\n                                    <option value=\"Belize\">Belize</option>\r\n                                    <option value=\"Benin\">Benin</option>\r\n                                    <option value=\"Bhutan\">Bhutan</option>\r\n                                    <option value=\"Bolivia\">Bolivia</option>\r\n                                    <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\r\n                                    <option value=\"Botswana\">Botswana</option>\r\n                                    <option value=\"Brazil\">Brazil</option>\r\n                                    <option value=\"Brunei\">Brunei</option>\r\n                                    <option value=\"Bulgaria\">Bulgaria</option>\r\n                                    <option value=\"Burkina Faso\">Burkina Faso</option>\r\n                                    <option value=\"Burundi\">Burundi</option>\r\n                                    <option value=\"Cabo Verde\">Cabo Verde</option>\r\n                                    <option value=\"Cambodia\">Cambodia</option>\r\n                                    <option value=\"Cameroon\">Cameroon</option>\r\n                                    <option value=\"Canada\">Canada</option>\r\n                                    <option value=\"Central African Republic\">Central African Republic</option>\r\n                                    <option value=\"Chad\">Chad</option>\r\n                                    <option value=\"Chile\">Chile</option>\r\n                                    <option value=\"China\">China</option>\r\n                                    <option value=\"Colombia\">Colombia</option>\r\n                                    <option value=\"Comoros\">Comoros</option>\r\n                                    <option value=\"Congo (Congo-Brazzaville)\">Congo (Congo-Brazzaville)</option>\r\n                                    <option value=\"Costa Rica\">Costa Rica</option>\r\n                                    <option value=\"Croatia\">Croatia</option>\r\n                                    <option value=\"Cuba\">Cuba</option>\r\n                                    <option value=\"Cyprus\">Cyprus</option>\r\n                                    <option value=\"Czech Republic\">Czech Republic</option>\r\n                                    <option value=\"Democratic Republic of the Congo\">Democratic Republic of the Congo</option>\r\n                                    <option value=\"Denmark\">Denmark</option>\r\n                                    <option value=\"Djibouti\">Djibouti</option>\r\n                                    <option value=\"Dominica\">Dominica</option>\r\n                                    <option value=\"Dominican Republic\">Dominican Republic</option>\r\n                                    <option value=\"Ecuador\">Ecuador</option>\r\n                                    <option value=\"Egypt\">Egypt</option>\r\n                                    <option value=\"El Salvador\">El Salvador</option>\r\n                                    <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n                                    <option value=\"Eritrea\">Eritrea</option>\r\n                                    <option value=\"Estonia\">Estonia</option>\r\n                                    <option value=\"Eswatini\">Eswatini</option>\r\n                                    <option value=\"Ethiopia\">Ethiopia</option>\r\n                                    <option value=\"Fiji\">Fiji</option>\r\n                                    <option value=\"Finland\">Finland</option>\r\n                                    <option value=\"France\">France</option>\r\n                                    <option value=\"Gabon\">Gabon</option>\r\n                                    <option value=\"Gambia\">Gambia</option>\r\n                                    <option value=\"Georgia\">Georgia</option>\r\n                                    <option value=\"Germany\">Germany</option>\r\n                                    <option value=\"Ghana\">Ghana</option>\r\n                                    <option value=\"Greece\">Greece</option>\r\n                                    <option value=\"Grenada\">Grenada</option>\r\n                                    <option value=\"Guatemala\">Guatemala</option>\r\n                                    <option value=\"Guinea\">Guinea</option>\r\n                                    <option value=\"Guinea-Bissau\">Guinea-Bissau</option>\r\n                                    <option value=\"Guyana\">Guyana</option>\r\n                                    <option value=\"Haiti\">Haiti</option>\r\n                                    <option value=\"Honduras\">Honduras</option>\r\n                                    <option value=\"Hungary\">Hungary</option>\r\n                                    <option value=\"Iceland\">Iceland</option>\r\n                                    <option value=\"India\">India</option>\r\n                                    <option value=\"Indonesia\">Indonesia</option>\r\n                                    <option value=\"Iran\">Iran</option>\r\n                                    <option value=\"Iraq\">Iraq</option>\r\n                                    <option value=\"Ireland\">Ireland</option>\r\n                                    <option value=\"Israel\">Israel</option>\r\n                                    <option value=\"Italy\">Italy</option>\r\n                                    <option value=\"Jamaica\">Jamaica</option>\r\n                                    <option value=\"Japan\">Japan</option>\r\n                                    <option value=\"Jordan\">Jordan</option>\r\n                                    <option value=\"Kazakhstan\">Kazakhstan</option>\r\n                                    <option value=\"Kenya\">Kenya</option>\r\n                                    <option value=\"Kiribati\">Kiribati</option>\r\n                                    <option value=\"Kuwait\">Kuwait</option>\r\n                                    <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n                                    <option value=\"Laos\">Laos</option>\r\n                                    <option value=\"Latvia\">Latvia</option>\r\n                                    <option value=\"Lebanon\">Lebanon</option>\r\n                                    <option value=\"Lesotho\">Lesotho</option>\r\n                                    <option value=\"Liberia\">Liberia</option>\r\n                                    <option value=\"Libya\">Libya</option>\r\n                                    <option value=\"Liechtenstein\">Liechtenstein</option>\r\n                                    <option value=\"Lithuania\">Lithuania</option>\r\n                                    <option value=\"Luxembourg\">Luxembourg</option>\r\n                                    <option value=\"Madagascar\">Madagascar</option>\r\n                                    <option value=\"Malawi\">Malawi</option>\r\n                                    <option value=\"Malaysia\">Malaysia</option>\r\n                                    <option value=\"Maldives\">Maldives</option>\r\n                                    <option value=\"Mali\">Mali</option>\r\n                                    <option value=\"Malta\">Malta</option>\r\n                                    <option value=\"Marshall Islands\">Marshall Islands</option>\r\n                                    <option value=\"Mauritania\">Mauritania</option>\r\n                                    <option value=\"Mauritius\">Mauritius</option>\r\n                                    <option value=\"Mexico\">Mexico</option>\r\n                                    <option value=\"Micronesia\">Micronesia</option>\r\n                                    <option value=\"Moldova\">Moldova</option>\r\n                                    <option value=\"Monaco\">Monaco</option>\r\n                                    <option value=\"Mongolia\">Mongolia</option>\r\n                                    <option value=\"Montenegro\">Montenegro</option>\r\n                                    <option value=\"Morocco\">Morocco</option>\r\n                                    <option value=\"Mozambique\">Mozambique</option>\r\n                                    <option value=\"Myanmar (Burma)\">Myanmar (Burma)</option>\r\n                                    <option value=\"Namibia\">Namibia</option>\r\n                                    <option value=\"Nauru\">Nauru</option>\r\n                                    <option value=\"Nepal\">Nepal</option>\r\n                                    <option value=\"Netherlands\">Netherlands</option>\r\n                                    <option value=\"New Zealand\">New Zealand</option>\r\n                                    <option value=\"Nicaragua\">Nicaragua</option>\r\n                                    <option value=\"Niger\">Niger</option>\r\n                                    <option value=\"Nigeria\">Nigeria</option>\r\n                                    <option value=\"North Korea\">North Korea</option>\r\n                                    <option value=\"North Macedonia\">North Macedonia</option>\r\n                                    <option value=\"Norway\">Norway</option>\r\n                                    <option value=\"Oman\">Oman</option>\r\n                                    <option value=\"Pakistan\">Pakistan</option>\r\n                                    <option value=\"Palau\">Palau</option>\r\n                                    <option value=\"Palestine\">Palestine</option>\r\n                                    <option value=\"Panama\">Panama</option>\r\n                                    <option value=\"Papua New Guinea\">Papua New Guinea</option>\r\n                                    <option value=\"Paraguay\">Paraguay</option>\r\n                                    <option value=\"Peru\">Peru</option>\r\n                                    <option value=\"Philippines\">Philippines</option>\r\n                                    <option value=\"Poland\">Poland</option>\r\n                                    <option value=\"Portugal\">Portugal</option>\r\n                                    <option value=\"Qatar\">Qatar</option>\r\n                                    <option value=\"Romania\">Romania</option>\r\n                                    <option value=\"Russia\">Russia</option>\r\n                                    <option value=\"Rwanda\">Rwanda</option>\r\n                                    <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\r\n                                    <option value=\"Saint Lucia\">Saint Lucia</option>\r\n                                    <option value=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</option>\r\n                                    <option value=\"Samoa\">Samoa</option>\r\n                                    <option value=\"San Marino\">San Marino</option>\r\n                                    <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\r\n                                    <option value=\"Saudi Arabia\">Saudi Arabia</option>\r\n                                    <option value=\"Senegal\">Senegal</option>\r\n                                    <option value=\"Serbia\">Serbia</option>\r\n                                    <option value=\"Seychelles\">Seychelles</option>\r\n                                    <option value=\"Sierra Leone\">Sierra Leone</option>\r\n                                    <option value=\"Singapore\">Singapore</option>\r\n                                    <option value=\"Slovakia\">Slovakia</option>\r\n                                    <option value=\"Slovenia\">Slovenia</option>\r\n                                    <option value=\"Solomon Islands\">Solomon Islands</option>\r\n                                    <option value=\"Somalia\">Somalia</option>\r\n                                    <option value=\"South Africa\">South Africa</option>\r\n                                    <option value=\"South Korea\">South Korea</option>\r\n                                    <option value=\"South Sudan\">South Sudan</option>\r\n                                    <option value=\"Spain\">Spain</option>\r\n                                    <option value=\"Sri Lanka\">Sri Lanka</option>\r\n                                    <option value=\"Sudan\">Sudan</option>\r\n                                    <option value=\"Suriname\">Suriname</option>\r\n                                    <option value=\"Sweden\">Sweden</option>\r\n                                    <option value=\"Switzerland\">Switzerland</option>\r\n                                    <option value=\"Syria\">Syria</option>\r\n                                    <option value=\"Taiwan\">Taiwan</option>\r\n                                    <option value=\"Tajikistan\">Tajikistan</option>\r\n                                    <option value=\"Tanzania\">Tanzania</option>\r\n                                    <option value=\"Thailand\">Thailand</option>\r\n                                    <option value=\"Timor-Leste\">Timor-Leste</option>\r\n                                    <option value=\"Togo\">Togo</option>\r\n                                    <option value=\"Tonga\">Tonga</option>\r\n                                    <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\r\n                                    <option value=\"Tunisia\">Tunisia</option>\r\n                                    <option value=\"Turkey\">Turkey</option>\r\n                                    <option value=\"Turkmenistan\">Turkmenistan</option>\r\n                                    <option value=\"Tuvalu\">Tuvalu</option>\r\n                                    <option value=\"Uganda\">Uganda</option>\r\n                                    <option value=\"Ukraine\">Ukraine</option>\r\n                                    <option value=\"United Arab Emirates\">United Arab Emirates</option>\r\n                                    <option value=\"United Kingdom\">United Kingdom</option>\r\n                                    <option value=\"United States\" selected=\"\">United States</option>\r\n                                    <option value=\"Uruguay\">Uruguay</option>\r\n                                    <option value=\"Uzbekistan\">Uzbekistan</option>\r\n                                    <option value=\"Vanuatu\">Vanuatu</option>\r\n                                    <option value=\"Vatican City\">Vatican City</option>\r\n                                    <option value=\"Venezuela\">Venezuela</option>\r\n                                    <option value=\"Vietnam\">Vietnam</option>\r\n                                    <option value=\"Yemen\">Yemen</option>\r\n                                    <option value=\"Zambia\">Zambia</option>\r\n                                    <option value=\"Zimbabwe\">Zimbabwe</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Send Button -->\r\n                        <div class=\"text-left\">\r\n                            <button ws-attr=\"ContactSendButtonAttr\" type=\"button\" ws-onclick=\"OnContactSendClick\" class=\"bg-blue-500 text-white font-semibold px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-blue-400\">\r\n                                ${ContactSendButtonText}\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </section>\r\n\r\n        </div>\r\n    "));
}
function DecodeJson_FSharpOption_1(){
  return Decoder_FSharpOption_1?Decoder_FSharpOption_1:Decoder_FSharpOption_1=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", Id_1(), 0]]]]))();
}
function DecodeJson_PlanPrice(){
  return Decoder_PlanPrice?Decoder_PlanPrice:Decoder_PlanPrice=(DecodeRecord(void 0, [["code", Id_1(), 0], ["name", Id_1(), 0], ["description", Id_1(), 1], ["isPerSeat", Id_1(), 0], ["maxSeats", Id_1(), 1], ["interval", Id_1(), 0], ["currency", Id_1(), 0], ["unitAmountCents", Id_1(), 0]]))();
}
class View { }
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
function Bind(r, f){
  return checkCancel((c) => {
    r(New_1((a) => {
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
  if(!ct.c)c(New_1((a) => {
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
  return _c_7.Zero;
}
function checkCancel(r){
  return(c) => {
    if(c.ct.c)cancel(c);
    else r(c);
  };
}
function Combine(a, b){
  return Bind(a, () => b);
}
function TryWith(r, f){
  return(c) => {
    r(New_1((a) => {
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
  return _c_7.defCTS;
}
function UncaughtAsyncError(e){
  console.log("WebSharper: Uncaught asynchronous exception", e);
}
function TryFinally(run, f){
  return(c) => {
    run(New_1((r) => {
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
function scheduler(){
  return _c_7.scheduler;
}
function noneCT(){
  return _c_7.noneCT;
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
function Start(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  scheduler().Fork(() => {
    if(!ct.c)c(New_1((a) => {
      if(a.$==1)UncaughtAsyncError(a.$0);
    }, ct));
  });
}
function GetCT(){
  return _c_7.GetCT;
}
function Logout_2(){
  return(new AjaxRemotingProvider()).Async("IRemotingContract/Logout", []);
}
function Me(){
  return Bind((new AjaxRemotingProvider()).Async("IRemotingContract/Me", []), (o) => Return((DecodeJson_FSharpOption_1())(o)));
}
function GetPlanPrices(){
  return Bind((new AjaxRemotingProvider()).Async("IRemotingContract/GetPlanPrices", []), (o) => Return(((DecodeArray(DecodeJson_PlanPrice))())(o)));
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
  return _c_8.EmptyAttr;
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
function HasExitAnim(attr){
  const flag=2;
  return(attr.DynFlags&flag)===flag;
}
function GetExitAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetExitAnim(_2));
}
function HasEnterAnim(attr){
  const flag=1;
  return(attr.DynFlags&flag)===flag;
}
function GetEnterAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetEnterAnim(_2));
}
function HasChangeAnim(attr){
  const flag=4;
  return(attr.DynFlags&flag)===flag;
}
function GetChangeAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetChangeAnim(_2));
}
function GetAnim(dyn, f){
  return Concat(map_1((n) => f(n, dyn.DynElem), dyn.DynNodes));
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
  return _c_12.rhtml;
}
function wrapMap(){
  return _c_12.wrapMap;
}
function defaultWrap(){
  return _c_12.defaultWrap;
}
function rxhtmlTag(){
  return _c_12.rxhtmlTag;
}
function rtagName(){
  return _c_12.rtagName;
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
        const vs=map_1((s) => {
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
function TreeDoc(Item){
  return{$:6, $0:Item};
}
function TextNodeDoc(Item){
  return{$:5, $0:Item};
}
let _c_2=Lazy((_i) => class $StartupCode_SupportViewsAttrs {
  static {
    _c_2=_i(this);
  }
  static ContactSendButtonText;
  static ContactSendButtonAttr;
  static {
    this.ContactSendButtonAttr=DynamicBool("disabled", Map2((_1, _2) =>!_1||_2, CanSendView(), IsSendingVar().View));
    this.ContactSendButtonText=Map((sending) => sending?"Sending...":"Send", IsSendingVar().View);
  }
});
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
function filter(f, o){
  let _1;
  return o!=null&&o.$==1&&(f(o.$0)&&(_1=o.$0,true))?o:null;
}
function Id(){
  set_counter(counter()+1);
  return"uid"+String(counter());
}
function set_counter(_1){
  _c_9.counter=_1;
}
function counter(){
  return _c_9.counter;
}
function Int(){
  set_counter(counter()+1);
  return counter();
}
let _c_3=Lazy((_i) => class $StartupCode_SupportState {
  static {
    _c_3=_i(this);
  }
  static CanSendView;
  static IsSendingVar;
  static ContactFormVar;
  static SeatCount;
  static SeatCountText;
  static intervalVar;
  static catalogVar;
  static fallbackFreelancer;
  static fallbackPro;
  static {
    this.fallbackPro=New_3(Some("Professional"), Some("Assign GitHub usernames after purchase"), Some(New_5(250, "USD")), Some(New_5(2500, "USD")));
    this.fallbackFreelancer=New_3(Some("Freelancer"), Some("Ideal for solo developers"), Some(New_5(30, "USD")), Some(New_5(300, "USD")));
    this.catalogVar=_c_1.Create_1(New_4(fallbackPro(), fallbackFreelancer()));
    this.intervalVar=_c_1.Create_1(Year);
    this.SeatCountText=_c_1.Create_1("1");
    this.SeatCount=Map((s) => {
      let o;
      const s_1=Trim(s==null?"":s);
      if(s_1=="")return 1;
      else {
        const m=(o=0,[TryParse(s_1, {get:() => o, set:(v) => {
          o=v;
        }}), o]);
        return m[0]?clampSeats(m[1]):1;
      }
    }, SeatCountText().View);
    this.ContactFormVar=_c_1.Create_1(New("WebSharper support", "", "", "", "United States"));
    this.IsSendingVar=_c_1.Create_1(false);
    this.CanSendView=Map(IsFormValid, ContactFormVar().View);
  }
});
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
let _c_4=Lazy((_i) => class $StartupCode_SupportViewsPricing {
  static {
    _c_4=_i(this);
  }
  static FreeNote;
  static ProNote;
  static FreeTotalAmount;
  static ProTotalAmount;
  static FreeTotalLabel;
  static ProTotalLabel;
  static FreePriceLabel;
  static ProPriceLabel;
  static FreePriceAmount;
  static ProPriceAmount;
  static FreeName;
  static ProName;
  static {
    this.ProName=Map((cat) => effectiveName("Professional", cat.Pro), catalogVar().View);
    this.FreeName=Map((cat) => effectiveName("Freelancer", cat.Freelancer), catalogVar().View);
    this.ProPriceAmount=Map2((_1, _2) => usd(effectiveAmount(fallbackPro(), _1.Pro, _2)), catalogVar().View, intervalVar().View);
    this.FreePriceAmount=Map2((_1, _2) => usd(effectiveAmount(fallbackFreelancer(), _1.Freelancer, _2)), catalogVar().View, intervalVar().View);
    this.ProPriceLabel=Map(intervalProPriceLabel, intervalVar().View);
    this.FreePriceLabel=Map(intervalFreePriceLabel, intervalVar().View);
    this.ProTotalLabel=Map(intervalTotalLabel, intervalVar().View);
    this.FreeTotalLabel=Map(intervalTotalLabel, intervalVar().View);
    this.ProTotalAmount=Map3((_1, _2, _3) => {
      const seats=clampSeats(_3);
      return usd(effectiveAmount(fallbackPro(), _1.Pro, _2)*seats);
    }, catalogVar().View, intervalVar().View, SeatCount());
    this.FreeTotalAmount=Map2((_1, _2) => usd(effectiveAmount(fallbackFreelancer(), _1.Freelancer, _2)), catalogVar().View, intervalVar().View);
    this.ProNote=Map2((_1, _2) => {
      const cur=currencyFor("pro", _1, _2);
      return effectiveDescription("Assign GitHub usernames after purchase", _1.Pro)+". Prices in "+cur+".";
    }, catalogVar().View, intervalVar().View);
    this.FreeNote=Map2((_1, _2) => {
      const cur=currencyFor("freelancer", _1, _2);
      return effectiveDescription("Ideal for solo developers", _1.Freelancer)+". Prices in "+cur+".";
    }, catalogVar().View, intervalVar().View);
  }
});
let Month={$:0};
let Year={$:1};
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
      const r=filter_1((a) =>!this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      return length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true);
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
  return concat(map(f, s));
}
function map(f, s){
  return{GetEnumerator:() => {
    const en=Get(s);
    return new T(null, null, (e) => en.MoveNext()&&(e.c=f(en.Current),true), () => {
      en.Dispose();
    });
  }};
}
function head(s){
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
      q.push(head_1(l));
      l=tail(l);
    }
  return q;
}
function fold_1(f, zero, arr){
  let acc=zero;
  for(let i=0, _1=arr.length-1;i<=_1;i++)acc=f(acc, arr[i]);
  return acc;
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
function filter_1(f, arr){
  const r=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++)if(f(arr[i]))r.push(arr[i]);
  return r;
}
function map_1(f, arr){
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
let _c_5=Lazy((_i) => class TemplateInitializer extends Object_1 {
  static {
    _c_5=_i(this);
  }
  static init;
  id;
  vars;
  static initialized;
  static instances;
  static GetOrAddHoleFor(id, holeName, initHole){
    let o;
    const d=_c_5.GetHolesFor(id);
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
    const m=(o=null,[_c_5.initialized.TryGetValue(id, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])return m[1];
    else {
      const d=new Dictionary("New_5");
      _c_5.initialized.set_Item(id, d);
      return d;
    }
  }
  static applyVarHole(el, tpl){
    tpl.ApplyVarHole(el);
  }
  InitInstance(key){
    const d=_c_5.GetHolesFor(key);
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
    _c_5.instances.set_Item(key, i);
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
      _c_5.applyVarHole(el, hole);
    }
  }
  $init(a){ }
  $postinit(key){
    RunFullDocTemplate([]);
  }
  static {
    _c_5.initialized=new Dictionary("New_5");
    _c_5.instances=new Dictionary("New_5");
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
  return _c_10.RenderedFullDocTemplate;
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
  _c_10.RenderedFullDocTemplate=_1;
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
  return _c_10.LocalTemplatesLoaded;
}
function set_LocalTemplatesLoaded(_1){
  _c_10.LocalTemplatesLoaded=_1;
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
    prepareTemplate(head(rawTpls.Keys));
}
function LoadedTemplates(){
  return _c_10.LoadedTemplates;
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
  const addAttr=(el_1, attr) => {
    const attr_1=Insert(el_1, attr);
    updates.push(Updates(attr_1));
    attrs.push([el_1, attr_1]);
    const m=GetOptional(attr_1.OnAfterRender);
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
        addAttr(e_1, OnAfterRender(th.Value));
      }
      else if(th instanceof AfterRenderQ){
        e_1.removeAttribute("ws-onafterrender");
        addAttr(e_1, OnAfterRender(th.Value));
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
  return _c_10.GlobalHoles;
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
  const content_1=parent.content;
  for(let i=0, _1=content_1.childNodes.length-1;i<=_1;i++)fakeroot.appendChild(content_1.childNodes[i].cloneNode(true));
  return fakeroot;
}
function TextHoleRE(){
  return _c_10.TextHoleRE;
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
let _c_6=Lazy((_i) => class $StartupCode_AuthClient {
  static {
    _c_6=_i(this);
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
function IsNullOrWhiteSpace(x){
  return x==null||(new RegExp("^\\s*$")).test(x);
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
  return opts===1?filter_1((x) => x!=="", SplitWith(s, pat)):SplitWith(s, pat);
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
function New_1(k, ct){
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
      return Bind(GetCT(), (a) => Bind(FromContinuations((ok, err, cc) => {
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
function New_2(IsCancellationRequested, Registrations){
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
  static Cons(Head, Tail){
    return Create_1(FSharpList, {
      $:1, 
      $0:Head, 
      $1:Tail
    });
  }
  static Empty=Create_1(FSharpList, {$:0});
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
let _c_7=Lazy((_i) => class $StartupCode_Concurrency {
  static {
    _c_7=_i(this);
  }
  static GetCT;
  static Zero;
  static defCTS;
  static scheduler;
  static noneCT;
  static {
    this.noneCT=New_2(false, []);
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
function New_3(Name, Description, Month_1, Year_1){
  return{
    Name:Name, 
    Description:Description, 
    Month:Month_1, 
    Year:Year_1
  };
}
function New_4(Pro, Freelancer){
  return{Pro:Pro, Freelancer:Freelancer};
}
function TryParse(s, r){
  return TryParse_1(s, -2147483648, 2147483647, r);
}
function New_5(Amount, Currency){
  return{Amount:Amount, Currency:Currency};
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
    return Bind(Play(Append(change, ComputeExitAnim(st, cur))), () => Bind(SyncElemNodesNextFrame(childrenOnly, st), () => Bind(Play(enter), () => {
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
function CreateDelimitedElemNode(ldelim, rdelim, attr, children){
  const el=ldelim.parentNode;
  LinkPrevElement(rdelim, children);
  const attr_1=Insert(el, attr);
  return DocElemNode.New(attr_1, children, Some([ldelim, rdelim]), el, Int(), GetOptional(attr_1.OnAfterRender));
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
  return Concat(map_1((n) => GetExitAnim(n.Attr), ToArray(Except(cur, Filter((n) => HasExitAnim(n.Attr), st.PreviousNodes)))));
}
function ComputeEnterAnim(st, cur){
  return Concat(map_1((n) => GetEnterAnim(n.Attr), ToArray(Except(st.PreviousNodes, Filter((n) => HasEnterAnim(n.Attr), cur)))));
}
function ComputeChangeAnim(st, cur){
  const f=(n) => HasChangeAnim(n.Attr);
  const relevant=(a) => Filter(f, a);
  return Concat(map_1((n) => GetChangeAnim(n.Attr), ToArray(Intersect(relevant(st.PreviousNodes), relevant(cur)))));
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
function CreateElemNode(el, attr, children){
  LinkElement(el, children);
  const attr_1=Insert(el, attr);
  return DocElemNode.New(attr_1, children, null, el, Int(), GetOptional(attr_1.OnAfterRender));
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
function AsAsync(p){
  return FromContinuations((ok, ko) => {
    p.then(ok, (err) => ko(unwrapExn(err)));
  });
}
function unwrapExn(x){
  return x instanceof Error?x:new NonStandardPromiseRejectionException(x);
}
function notPresent(){
  throw new KeyNotFoundException("New");
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
  return NewFromSeq(map_1((_1) =>[_1[0], _1[1]], distinctBy_1((t) => t[0], headers.concat([["content-type", "application/json"]]))));
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
function head_1(l){
  return l.$==1?l.$0:listEmpty();
}
function tail(l){
  return l.$==1?l.$1:listEmpty();
}
function listEmpty(){
  return FailWith("The input list was empty.");
}
let _c_8=Lazy((_i) => class Client {
  static {
    _c_8=_i(this);
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
      if(isBlank(s_8))return Some(-8640000000000000);
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
      return Some(ofSeq(delay(() => map((i) => files.item(i), range(0, files.length-1)))));
    };
    const g_3=FileGetUnchecked();
    const s_3=FileSetUnchecked();
    this.FileApplyUnchecked=(v) => FileApplyValue(g_3, s_3, v);
    this.IntSetUnchecked=(el) =>(i) => {
      el.value=String(i);
    };
    this.IntGetUnchecked=(el) => {
      const s_8=el.value;
      if(isBlank(s_8))return Some(0);
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
      if(isBlank(s_8))_1=(el.checkValidity?el.checkValidity():true)?CheckedInput.Blank(s_8):CheckedInput.Invalid(s_8);
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
      if(isBlank(s_8))return Some(0);
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
      if(isBlank(s_8))_1=(el.checkValidity?el.checkValidity():true)?CheckedInput.Blank(s_8):CheckedInput.Invalid(s_8);
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
function DecodeArray(decEl){
  return EncodeArray(decEl);
}
function EncodeArray(encEl){
  return() =>(a) => map_1(encEl(), a);
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
function New_6(DynElem, DynFlags, DynNodes, OnAfterRender_1){
  const _1={
    DynElem:DynElem, 
    DynFlags:DynFlags, 
    DynNodes:DynNodes
  };
  SetOptional(_1, "OnAfterRender", OnAfterRender_1);
  return _1;
}
let _c_9=Lazy((_i) => class $StartupCode_Abbrev {
  static {
    _c_9=_i(this);
  }
  static counter;
  static {
    this.counter=0;
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
  return Delay(() => Bind(Run(() => { }, Actions(anim)), () => {
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
  return Anim(Concat_1(map(List, xs)));
}
function get_Empty(){
  return Anim(Empty_1());
}
function BatchUpdatesEnabled(){
  return _c_13.BatchUpdatesEnabled;
}
function StartProcessor(procAsync){
  const st=[0];
  function work(){
    return Delay(() => Bind(procAsync, () => {
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
let _c_10=Lazy((_i) => class $StartupCode_Templates {
  static {
    _c_10=_i(this);
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
    e.setAttribute("ws-on", concat_2(" ", filter_1((x) => dontRemove.Contains(get(SplitChars(x, [":"], 1), 1)), SplitChars(e.getAttribute("ws-on"), [" "], 1))));
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
    e.setAttribute("ws-on", concat_2(" ", map_1((x) => {
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
    const x=map_1((_4) => Updates(_4[1]), tree.Attrs);
    let _2=TreeReduce(Const(), Map2Unit, x);
    let _3=Map2Unit(_2, rvUpdates.v);
    return new Elt_1(_1, _3, get(tree.Els, 0), rvUpdates);
  }
  constructor(docNode, updates, elt, rvUpdates){
    super(docNode, updates);
    this.docNode_1=docNode;
    this.updates_1=updates;
    this.elt=elt;
    this.rvUpdates=rvUpdates;
  }
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
  return _c_8.StringSet;
}
function StringGet(){
  return _c_8.StringGet;
}
function StringListSet(){
  return _c_8.StringListSet;
}
function StringListGet(){
  return _c_8.StringListGet;
}
function DateTimeSetUnchecked(){
  return _c_8.DateTimeSetUnchecked;
}
function DateTimeGetUnchecked(){
  return _c_8.DateTimeGetUnchecked;
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
  return _c_8.FileSetUnchecked;
}
function FileGetUnchecked(){
  return _c_8.FileGetUnchecked;
}
function IntSetUnchecked(){
  return _c_8.IntSetUnchecked;
}
function IntGetUnchecked(){
  return _c_8.IntGetUnchecked;
}
function IntSetChecked(){
  return _c_8.IntSetChecked;
}
function IntGetChecked(){
  return _c_8.IntGetChecked;
}
function FloatSetUnchecked(){
  return _c_8.FloatSetUnchecked;
}
function FloatGetUnchecked(){
  return _c_8.FloatGetUnchecked;
}
function FloatSetChecked(){
  return _c_8.FloatSetChecked;
}
function FloatGetChecked(){
  return _c_8.FloatGetChecked;
}
function StringApply(){
  return _c_8.StringApply;
}
function FloatApplyUnchecked(){
  return _c_8.FloatApplyUnchecked;
}
function BoolCheckedApply(){
  return _c_8.BoolCheckedApply;
}
function DateTimeApplyUnchecked(){
  return _c_8.DateTimeApplyUnchecked;
}
function FileApplyUnchecked(){
  return _c_8.FileApplyUnchecked;
}
function StringListApply(){
  return _c_8.StringListApply;
}
function isBlank(s){
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
class NonStandardPromiseRejectionException extends Error {
  reason;
  constructor(reason){
    super("Promise rejected");
    this.reason=reason;
  }
}
let _c_12=Lazy((_i) => class $StartupCode_DomUtility {
  static {
    _c_12=_i(this);
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
  return _c_14.UseAnimations;
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
    const dur=max(map((anim) => anim.Duration, xs_1));
    const xs_2=map_1((x) => Prolong(dur, x), xs_1);
    return Def(dur, (t) => {
      iter_1((anim) => {
        anim.Compute(t);
      }, xs_2);
    });
  }
}
function List(a){
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
let _c_13=Lazy((_i) => class Proxy {
  static {
    _c_13=_i(this);
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
    return Get(map((kvp) => kvp.V, this.d));
  }
  constructor(d){
    super();
    this.d=d;
  }
}
class XhrProvider extends Object_1 {
  Async(url, headers, data, ok, err){
    ajax(true, url, headers, data, ok, err, () => {
      ajax(true, url, headers, data, ok, err, void 0);
    });
  }
}
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
let _c_14=Lazy((_i) => class $StartupCode_Animation {
  static {
    _c_14=_i(this);
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
  return _c_15.Empty;
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
    return Get(map((kvp) => kvp.K, this.d));
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
  return new HashSet("New_2", filter_1(ok, ToArray_2(set_1)));
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
  return DomNodes(filter_1((n) => forall_1((k) =>!(n===k), excluded), a_1.$0));
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
let _c_15=Lazy((_i) => class $StartupCode_AppendList {
  static {
    _c_15=_i(this);
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
