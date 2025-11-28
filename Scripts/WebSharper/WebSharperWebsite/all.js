export { default as Runtime } from "../WebSharper.Core.JavaScript/Runtime.js"
import { MarkResizable, SetOptional, Lazy, Create as Create_2, GetOptional, CreateFuncWithArgs, DeleteEmptyFields } from "../WebSharper.Core.JavaScript/Runtime.js"
import * as _1 from "asciinema-player"
import sweetalert2 from "sweetalert2"
import "prismjs/themes/prism-dark.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import prismjs from "prismjs"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-fsharp"
import "prismjs/components/prism-csharp"
import "prismjs/plugins/line-numbers/prism-line-numbers"
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
  const I=IconAttr();
  const A=AvatarAttr();
  const A_1=AccountBtnAria();
  const D=DropdownAttr();
  const t_9=new ProviderBuilder("New_1");
  const t_10=(t_9.h.push(EventQ2(t_9.k, "togglemenu", () => t_9.i, () => {
    ToggleMenu();
  })),t_9);
  const t_11=(t_10.h.push(EventQ2(t_10.k, "toggletheme", () => t_10.i, () => {
    Toggle();
  })),t_10);
  const t_12=(t_11.h.push(EventQ2(t_11.k, "onkeydown", () => t_11.i, (e) => {
    CloseOnEscape(e);
  })),t_11);
  const t_13=(t_12.h.push(EventQ2(t_12.k, "onstoppropagation", () => t_12.i, (e) => {
    StopPropagation(e);
  })),t_12);
  const t_14=(t_13.h.push(EventQ2(t_13.k, "closeonbackgroundclick", () => t_13.i, (_2) => {
    CloseOnBackgroundClick(_2);
  })),t_13);
  const t_15=(t_14.h.push(EventQ2(t_14.k, "accountbtnclick", () => t_14.i, (_2) => {
    AccountBtnClick(_2);
  })),t_14);
  const t_16=(t_15.h.push(EventQ2(t_15.k, "accountbtnkeydown", () => t_15.i, () => { })),t_15);
  const t_17=(t_16.h.push(EventQ2(t_16.k, "login", () => t_16.i, () => {
    Login();
  })),t_16);
  const this_1=(t_17.h.push(EventQ2(t_17.k, "logout", () => t_17.i, (_2) => {
    Logout(_2);
  })),t_17);
  const this_2=(this_1.h.push(new Attribute("dropdownattr", D)),this_1);
  const this_3=(this_2.h.push(new Attribute("accountbtnaria", A_1)),this_2);
  const this_4=(this_3.h.push(new Attribute("avatarattr", A)),this_3);
  const this_5=(this_4.h.push(new Attribute("iconattr", I)),this_4);
  const this_6=(this_5.h.push(new TextView("accountheadertext", AccountHeaderText())),this_5);
  const this_7=(this_6.h.push(new Attribute("headerattrd", H_1)),this_6);
  const this_8=(this_7.h.push(new Attribute("btnmanageattrd", B_5)),this_7);
  const this_9=(this_8.h.push(new Attribute("btnloginattrd", B_4)),this_8);
  const this_10=(this_9.h.push(new Attribute("btnlogoutattrd", B_3)),this_9);
  const this_11=(this_10.h.push(new Attribute("headerattr", H)),this_10);
  const this_12=(this_11.h.push(new Attribute("btnmanageattr", B_2)),this_11);
  const this_13=(this_12.h.push(new Attribute("btnloginattr", B_1)),this_12);
  const builder=(this_13.h.push(new Attribute("btnlogoutattr", B)),this_13);
  const p=CompleteHoles(builder.k, builder.h, []);
  builder.i=new TemplateInstance(p[1], RunFullDocTemplate(p[0]));
  InitGlobal();
  return Doc.Empty;
}
export function Home(){
  const this_1=new ProviderBuilder("New_1");
  const t_9=(this_1.h.push(new AfterRenderQ("onafterrender", "", () => {
    Init_1("ws-template");
    Init();
    Init_2();
    importDynamicIgnore("Js/line-numbers.js");
    InitTabs();
  })),this_1);
  const t_10=(t_9.h.push(EventQ2(t_9.k, "copyfromclosest", () => t_9.i, (e) => {
    CopyFromClosest(e);
  })),t_9);
  const b=(t_10.h.push(EventQ2(t_10.k, "ontabclick", () => t_10.i, (e) => {
    OnTabClick(e.Event);
  })),t_10);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], t_8(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
export function Download(){
  const t_9=new ProviderBuilder("New_1");
  const b=(t_9.h.push(EventQ2(t_9.k, "copyfromclosest", () => t_9.i, (e) => {
    CopyFromClosest(e);
  })),t_9);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], t_7(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
export function Support(){
  return SupportDoc();
}
export function DslAi(){
  const this_1=new ProviderBuilder("New_1");
  const b=(this_1.h.push(new AfterRenderQ("onafterrender", "", () => {
    Init_2();
    importDynamicIgnore("Js/line-numbers.js");
    InitTabs();
  })),this_1);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], t_6(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
export function Checkout(){
  return CheckoutDoc();
}
export function Error_1(){
  const E=Doc.TextView(Message());
  const E_1=Doc.TextView(Title());
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new AfterRenderQ("onafterrender", "", () => {
    Init_3();
  })),this_1);
  const this_3=(this_2.h.push(new Elt("errortitle", E_1)),this_2);
  const t_9=(this_3.h.push(new Elt("errormessage", E)),this_3);
  const t_10=(t_9.h.push(EventQ2(t_9.k, "onretry", () => t_9.i, () => {
    OnRetry();
  })),t_9);
  const b=(t_10.h.push(EventQ2(t_10.k, "onback", () => t_10.i, () => {
    OnBack();
  })),t_10);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], t_5(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
export function Invoice(){
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new AfterRenderQ("onafterrender", "", () => {
    OnAfterRender_1();
  })),this_1);
  const this_3=(this_2.h.push(new Elt("invid", InvId())),this_2);
  const this_4=(this_3.h.push(new Elt("invdate", InvDate())),this_3);
  const this_5=(this_4.h.push(new Elt("invstatus", InvStatus())),this_4);
  const this_6=(this_5.h.push(new Elt("invamount", InvAmount())),this_5);
  const this_7=(this_6.h.push(new Elt("invsub", InvSub())),this_6);
  const this_8=(this_7.h.push(new Elt("billtoname", BillToName())),this_7);
  const this_9=(this_8.h.push(new Elt("billtoaddr", BillToAddr())),this_8);
  const b=(this_9.h.push(new Elt("billtovat", BillToVat())),this_9);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], t_4(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
export function ManageSubscription(){
  return ManageSubscriptionDoc();
}
export function Success(){
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new AfterRenderQ("onafterrender", "", () => {
    OnAfterRender_2();
  })),this_1);
  const this_3=(this_2.h.push(new Elt("messagetext", MessageText())),this_2);
  const this_4=(this_3.h.push(new Attribute("detailsattr", DetailsAttr())),this_3);
  const b=(this_4.h.push(new Elt("detailsdoc", DetailsDoc())),this_4);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], t_3(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
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
    const _2=e;
    if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
  }
  return d;
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
  for(let i=0, _2=toInt(nodes.length)-1;i<=_2;i++){
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
function range(min, max_1){
  const count=1+max_1-min;
  return count<=0?[]:init(count, (x) => x+min);
}
function KeyValue(kvp){
  return[kvp.K, kvp.V];
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
  return Attr.Concat([Dynamic("src", avatarSrcV()), DynamicClassPred("hidden", Map((v) =>!v, hasAvatarV()))]);
}
function IconAttr(){
  return DynamicClassPred("hidden", hasAvatarV());
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
  StartImmediate(Delay(() => Bind_1(FetchMe(), () => Zero())), null);
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
function EventQ2(_2, holeName, ti, f){
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
    const _2=e;
    if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
  }
  return[append(filledHoles, choose((_3) => {
    const name=_3[0];
    const ty=_3[1];
    const d=_3[2];
    if(filledVars.Contains(name))return null;
    else {
      const r=ty===0?_c_6.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _4=o==null?"":o.$0;
        let _5=_c_1.Create_1(_4);
        return new VarStr(name, _5);
      }):ty===1?_c_6.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _4=o==null?0:o.$0;
        let _5=_c_1.Create_1(_4);
        return new VarFloatUnchecked(name, _5);
      }):ty===2?_c_6.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _4=o==null?false:o.$0;
        let _5=_c_1.Create_1(_4);
        return new VarBool(name, _5);
      }):ty===3?_c_6.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _4=o==null?-8640000000000000:o.$0;
        let _5=_c_1.Create_1(_4);
        return new VarDateTime(name, _5);
      }):ty===4?_c_6.GetOrAddHoleFor(key, name, () => new VarFile(name, _c_1.Create_1([]))):ty===5?_c_6.GetOrAddHoleFor(key, name, () => new VarDomElement(name, _c_1.Create_1(Some(globalThis.document.querySelector("[ws-dom="+name+"]"))))):ty===6?_c_6.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _4=o==null?[]:o.$0;
        let _5=_c_1.Create_1(_4);
        return new VarStrList(name, _5);
      }):FailWith("Invalid value type");
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
function BuildStartUrlWithReturn(returnUrl){
  return"https://localhost:8234/auth/github/start?returnUrl="+encodeURIComponent(returnUrl);
}
function UserView(){
  return _c_20.UserView;
}
function IsAuthedView(){
  return _c_20.IsAuthedView;
}
function userVar(){
  return _c_20.userVar;
}
function isFetchingVar(){
  return _c_20.isFetchingVar;
}
function header(){
  return new Headers(Object.fromEntries([["Accept", "application/json"]]));
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
    return Doc.Mk(TextDoc(node), Map((t_9) => {
      UpdateTextNode(node, t_9);
    }, txt));
  }
  static BindView(f, view){
    return Doc.EmbedView(Map(f, view));
  }
  static Concat(xs){
    return TreeReduce(Doc.Empty, Doc.Append, ofSeqNonCopying(xs));
  }
  static RunBefore(rdelim, doc){
    const ldelim=globalThis.document.createTextNode("");
    rdelim.parentNode.insertBefore(ldelim, rdelim);
    Doc.RunBetween(ldelim, rdelim, doc);
  }
  static EmbedView(view){
    const node=CreateEmbedNode();
    return Doc.Mk(EmbedDoc(node), Map(() => { }, Bind((doc) => {
      UpdateEmbedNode(node, doc.docNode);
      return doc.updates;
    }, view)));
  }
  static Append(a, b){
    return Doc.Mk(AppendDoc(a.docNode, b.docNode), Map2Unit(a.updates, b.updates));
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
  static ConvertSeqBy(key, render, view){
    const a=render;
    let _2=MapSeqCachedViewBy(key, (_3, _4) =>(a(_3))(_4), view);
    return Doc.Flatten(_2);
  }
  static Element(name, attr_1, children){
    const a=Attr.Concat(attr_1);
    const c=Doc.Concat(children);
    return Elt_1.New(globalThis.document.createElement(name), a, c);
  }
  static Flatten(view){
    return Doc.EmbedView(Map((x) => Doc.Concat(x), view));
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
class TemplateInstance extends Object_1 {
  doc;
  allVars;
  anchorRoot;
  get Doc(){
    return this.doc;
  }
  SetAnchorRoot(el){
    this.anchorRoot=el;
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
function Init_1(containerId){
  import("asciinema-player/dist/bundle/asciinema-player.css");
  const el=globalThis.document.getElementById(containerId);
  if(el==null)console.log("Container not found:", containerId);
  else _1.create("Assets/ws-template.cast", el, {
    autoPlay:true, 
    cols:100, 
    idleTimeLimit:6, 
    loop:true, 
    rows:20, 
    speed:2.5, 
    theme:"dracula"
  });
}
function Init_2(){
  prism().highlightAll();
}
function InitTabs(){
  const snippets=globalThis.document.querySelectorAll("[data-name='snippet']");
  for(let i=0, _2=toInt(snippets.length)-1;i<=_2;i++)initSnippetRoot(snippets[i]);
}
function OnTabClick(ev){
  const o=findClickedTab(ev);
  if(o==null){ }
  else activateTabFromButton(o.$0);
}
function prism(){
  return _c_5.prism;
}
function initSnippetRoot(root){
  const tabs=root.querySelectorAll("[role='tab']");
  if(tabs.length>0){
    const first=tabs[0];
    markSelectedInGroup(first);
    const o=asOption(root.querySelector(".tab-indicator"));
    if(o==null){ }
    else moveIndicator(o.$0, first);
    const o_1=asOption(first.getAttribute("data-target"));
    if(o_1==null){ }
    else showOnlyPanel(root, o_1.$0);
  }
  else void 0;
}
function findClickedTab(ev){
  const m=ev.target;
  if(m instanceof Element){
    const o=asOption(m.closest("[role='tab']"));
    return o==null?null:Some(o.$0);
  }
  else return null;
}
function activateTabFromButton(btn){
  const m=asOption(btn.closest("[data-name='snippet']"));
  if(m!=null&&m.$==1){
    const root=m.$0;
    const o=asOption(root.querySelector(".tab-indicator"));
    if(o==null){ }
    else moveIndicator(o.$0, btn);
    markSelectedInGroup(btn);
    const o_1=asOption(btn.getAttribute("data-target"));
    if(o_1==null){ }
    else showOnlyPanel(root, o_1.$0);
  }
  else void 0;
}
function markSelectedInGroup(clicked){
  const m=asOption(clicked.parentElement);
  if(m!=null&&m.$==1)iter((tab) => {
    tab.setAttribute("aria-selected", Equals(tab, clicked)?"true":"false");
  }, queryAll(m.$0, "[role='tab']"));
}
function asOption(x){
  return x==null?null:Some(x);
}
function moveIndicator(indicatorEl, tabEl){
  applyIndicatorPos(indicatorEl, measureIndicatorPos(tabEl, tabEl.parentElement));
}
function showOnlyPanel(root, targetName){
  iter((panel) => {
    if(panel.getAttribute("data-lang")==targetName)panel.classList.remove("hidden");
    else panel.classList.add("hidden");
  }, queryAll(root, "[role='tabpanel']"));
}
function measureIndicatorPos(tab, container){
  let c;
  let c_1;
  return New_17((c=tab.getBoundingClientRect().left-container.getBoundingClientRect().left,String(c))+"px", (c_1=tab.getBoundingClientRect().width,String(c_1))+"px");
}
function applyIndicatorPos(indicator, pos){
  indicator.style.left=pos.LeftPx;
  indicator.style.width=pos.WidthPx;
}
function importDynamicIgnore(path){
  import((new URL(path, document.baseURI)).toString());
}
function byId(id){
  return globalThis.document.getElementById(id);
}
function queryAll(root, selector){
  const nodes=root.querySelectorAll(selector);
  return delay(() => map((i) => nodes[i], range(0, toInt(nodes.length)-1)));
}
function usd(n){
  return"$"+String(n);
}
function alertError(res){
  if(res.$==1){
    let r;
    const msg=res.$0;
    sweetalert2.fire((r={},r.title="Error!",r.text=msg,r.icon="error",r));
  }
}
function alertWarning(msg){
  let r;
  sweetalert2.fire((r={},r.title="Warning!",r.text=msg,r.icon="warning",r));
}
function CopyFromClosest(e){
  const button=e.Target;
  StartImmediate(copyContentAsync(Trim(button.closest("div").querySelector(".text-to-copy").textContent), button.querySelector(".copy"), button.querySelector(".success"), button.querySelector(".failed")), null);
}
function copyContentAsync(textToCopy, copyIcon, okIcon, errIcon){
  return Delay(() => TryWith(Delay(() => Bind_1(AsAsync(navigator.clipboard.writeText(textToCopy)), () => {
    hide(copyIcon);
    show(okIcon);
    revertAfter(copyIcon, okIcon, 1000);
    return Zero();
  })), () => {
    hide(copyIcon);
    show(errIcon);
    revertAfter(copyIcon, errIcon, 1000);
    return Zero();
  }));
}
function hide(el){
  if(!(el==null))el.classList.add("hidden");
}
function show(el){
  if(!(el==null))el.classList.remove("hidden");
}
function revertAfter(copyIcon, otherIcon, ms){
  setTimeout(() => {
    show(copyIcon);
    hide(otherIcon);
  }, ms);
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
function Hash(o){
  const m=typeof o;
  return m=="function"?0:m=="boolean"?o?1:0:m=="number"?o:m=="string"?hashString(o):m=="object"?o==null?0:o instanceof Array?hashArray(o):hashObject(o):m=="bigint"?hashString(String(o)):m=="symbol"?hashString(o.description):0;
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
    for(let i=0, _2=s.length-1;i<=_2;i++)hash=hashMix(hash, s[i].charCodeAt());
    return hash;
  }
}
function hashArray(o){
  let h=-34948909;
  for(let i=0, _2=length(o)-1;i<=_2;i++)h=hashMix(h, Hash(get(o, i)));
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
let Decoder_FSharpResult_2;
let Encoder_BillingData;
let Decoder_FSharpOption_1;
let Decoder_GitHubOrgStatus;
let Decoder_GitHubOrg;
let Decoder_FSharpOption_2;
let Decoder_FSharpOption_3;
let Decoder_BillingData;
let Decoder_FSharpOption_4;
function t_8(h){
  return h?GetOrLoadTemplate("home", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"space-y-40\" ws-onafterrender=\"OnAfterRender\">\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 pt-36 sm:pt-40 lg:px-8 lg:pb-12 lg:pt-48 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"relative z-10 text-center w-full\">\r\n                    <div id=\"track\" class=\"relative\">\r\n                        <!-- Arrows -->\r\n                        <button id=\"mini-prev\" class=\"absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 dark:text-white cursor-pointer\">&#10094;</button>\r\n                        <button id=\"mini-next\" class=\"absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 dark:text-white cursor-pointer\">&#10095;</button>\r\n\r\n                        <div class=\"relative overflow-hidden\">\r\n                            <div id=\"mini-inner\" class=\"flex w-full transition-transform duration-700 ease-out will-change-transform\">\r\n                                <!-- Slide 1 -->\r\n                                <div class=\"min-w-full w-full snap-start shrink-0 px-2\">\r\n                                    <!-- Headline -->\r\n                                    <h1 class=\"max-w-2xl mx-auto text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl\">Full-stack, functional reactive web programming for .NET</h1>\r\n\r\n                                    <!-- Tagline -->\r\n                                    <p class=\"mt-6 max-w-lg mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300\">Develop microservices, client-server web applications, reactive SPAs, and more in C# or F#.</p>\r\n\r\n                                    <!-- CTA buttons -->\r\n                                    <div class=\"mt-10 flex flex-wrap items-center justify-center gap-6 lg:flex-nowrap\">\r\n                                        <a href=\"https://docs.websharper.com/core/getting-started\" class=\"w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                                            <span class=\"relative text-sm\">Get started</span>\r\n                                        </a>\r\n                                        <div class=\"text-primary flex h-10 items-center gap-2 rounded-xl border border-gray-300 backdrop-blur-xl pl-4 text-base font-medium leading-7 dark:border-gray-800 dark:bg-transparent\">\r\n                                            <span class=\"text-xs text-gray-500\">$</span>\r\n                                            <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new install WebSharper.<span class=\"bg-gradient-to-r from-gray-500 to-transparent bg-clip-text text-transparent dark:from-white/70\">Templates</span></span>\r\n                                            <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                                <span class=\"sr-only\">Copy</span>\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                                </svg>\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                                </svg>\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                                </svg>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Slide 2 -->\r\n                                <div class=\"min-w-full w-full snap-start shrink-0 p-0\">\r\n                                    <!-- was p-2 -->\r\n                                    <div class=\"mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-0 items-start\">\r\n                                        <div class=\"md:col-span-1 m-0 p-0\">\r\n                                            <img src=\"/Assets/images/slay.png\" alt=\"DSL + AI\" class=\"block w-full h-56 md:h-64 object-contain object-left-top m-0 p-0 rounded-none shadow-none select-none\">\r\n                                        </div>\r\n\r\n                                        <div class=\"md:col-span-2 text-center md:text-left self-start\">\r\n                                            <h1 class=\"max-w-2xl text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl\">\r\n                                                DSL &amp; AI Integration\r\n                                            </h1>\r\n                                            <p class=\"mt-4 text-lg text-gray-700 dark:text-gray-300\">\r\n                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.\r\n                                            </p>\r\n\r\n                                            <a href=\"./dsl-ai.html\" class=\"mt-6 w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                                            flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                                            before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                                            before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r\n                                                            hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                                                <span class=\"relative text-sm\">Learn more</span>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- GIF -->\r\n                    <div class=\"mt-12 flex justify-center\">\r\n                        <div id=\"ws-template\" class=\"w-full max-w-3xl h-auto\"></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Sample code -->\r\n                <div id=\"code-snippet\" class=\"scroll-my-16 relative z-10 mt-20 xl:w-4/5 mx-auto\">\r\n                    <div class=\"rounded-3xl p-px from-gray-200 to-gray-950/5 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900\">\r\n                        <div data-name=\"snippet\" class=\"rounded-[23px] border border-gray-200/10 bg-white shadow-xl shadow-gray-950/5 pb-3 pr-3 text-sm backdrop-blur-3xl dark:border-transparent dark:bg-gray-950 md:ml-0\">\r\n                            <div class=\"flex items-center gap-4 px-6 pt-2 pb-1\">\r\n                                <div class=\"flex space-x-1.5\">\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                </div>\r\n\r\n                                <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                    <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                            <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                            <defs id=\"defs2\"></defs>\r\n                                            <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                            </g>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">Client.fs</span>\r\n                                    </button>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"html\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"w-4 h-4 text-gray-800 dark:text-white\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewbox=\"0 0 24 24\">\r\n                                            <path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14\"></path>\r\n                                        </svg>\r\n\r\n                                        <span class=\"text-xs\">index.html</span>\r\n                                    </button>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"code-result\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"w-4 h-4 text-gray-800 dark:text-white\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewbox=\"0 0 24 24\">\r\n                                            <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z\"></path>\r\n                                            <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\"></path>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">Result</span>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"relative flex\">\r\n                                <div class=\"absolute ml-1 flex h-full w-14 flex-none flex-col items-center justify-between py-3 text-gray-500 dark:text-white/60\">\r\n                                    <svg width=\"24\" height=\"216\" fill=\"none\">\r\n                                        <path d=\"M3 69l6-6m-2-5a7 7 0 1014 0 7 7 0 00-14 0z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                        <path d=\"M8 7H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-3m3.707-10.293l-3.414-3.414A1 1 0 0015.586 3H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7.414a1 1 0 00-.293-.707zM7 103a2 2 0 100-4 2 2 0 000 4zm0 0v10m10-6a2 2 0 100-4 2 2 0 000 4zm0 0a3 3 0 01-3 3h-4a3 3 0 00-3 3m0 0a2 2 0 100 4 2 2 0 000-4z\" stroke=\"currentColor\" stroke-width=\"1.5\"></path>\r\n                                        <path d=\"M11.5 160.031a.75.75 0 00-1-1.118l1 1.118zm-8-1.118a.75.75 0 00-1 1.118l1-1.118zm6.972 6.149a.75.75 0 10.993-1.124l-.993 1.124zm-7.937-1.124a.75.75 0 10.993 1.124l-.993-1.124zm7.022-.368l-.64-.393.64.393zm-5.114 0l.64-.393-.64.393zM3 161.25a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zM8 147l.372-.651A.75.75 0 007.25 147H8zm14 8l.372.651a.75.75 0 000-1.302L22 155zm-14.75 0a.75.75 0 001.5 0h-1.5zm5.378 4.492a.75.75 0 10.744 1.302l-.744-1.302zM7 157.75A2.25 2.25 0 019.25 160h1.5A3.75 3.75 0 007 156.25v1.5zm0-1.5A3.75 3.75 0 003.25 160h1.5A2.25 2.25 0 017 157.75v-1.5zm2.624 3.298A5.225 5.225 0 017 160.25v1.5a6.73 6.73 0 003.376-.903l-.752-1.299zM9.25 160v.197h1.5V160h-1.5zm0 .197V162h1.5v-1.803h-1.5zM7 160.25a5.225 5.225 0 01-2.624-.702l-.752 1.299A6.73 6.73 0 007 161.75v-1.5zM4.75 162v-1.803h-1.5V162h1.5zm0-1.803V160h-1.5v.197h1.5zm5.75-1.284a5.209 5.209 0 01-.876.635l.752 1.299c.403-.234.78-.507 1.124-.816l-1-1.118zm-6.124.635a5.21 5.21 0 01-.876-.635l-1 1.118c.344.309.721.582 1.124.816l.752-1.299zm4.86 4.701c.451.212.867.487 1.236.813l.993-1.124a6.77 6.77 0 00-1.588-1.046l-.64 1.357zM9.25 162c0 .433-.122.835-.332 1.177l1.277.787A3.737 3.737 0 0010.75 162h-1.5zm-.332 1.177A2.247 2.247 0 017 164.25v1.5a3.748 3.748 0 003.195-1.786l-1.277-.787zm-5.39 1.885a5.25 5.25 0 011.235-.813l-.64-1.357a6.77 6.77 0 00-1.588 1.046l.993 1.124zM7 164.25c-.81 0-1.52-.427-1.918-1.073l-1.277.787A3.748 3.748 0 007 165.75v-1.5zm-1.918-1.073A2.235 2.235 0 014.75 162h-1.5c0 .719.203 1.392.555 1.964l1.277-.787zM4 161.25H3v1.5h1v-1.5zm7 0h-1v1.5h1v-1.5zm-3.372-13.599l14 8 .744-1.302-14-8-.744 1.302zM8.75 155v-8h-1.5v8h1.5zm12.878-.651l-9 5.143.744 1.302 9-5.143-.744-1.302z\" fill=\"currentColor\"></path>\r\n                                        <path d=\"M3 205h8m-8 0v7a1 1 0 001 1h7m-8-8v-7a1 1 0 011-1h6a1 1 0 011 1v7m0 0v8m0-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7m4-11h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z\" stroke=\"currentColor\" stroke-width=\"1.5\"></path>\r\n                                    </svg>\r\n                                    <svg width=\"24\" height=\"72\" fill=\"none\">\r\n                                        <path d=\"M10.325 52.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                        <path d=\"M15 60a3 3 0 11-6 0 3 3 0 016 0zM5.121 17.804A13.936 13.936 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                    </svg>\r\n                                </div>\r\n                                <div class=\"ml-auto w-[calc(100%-4rem)] mt-1\">\r\n                                    <div class=\"flex overflow-hidden py-3 pl-3 font-mono text-xs dark:shadow-2xl shadow-gray-950/5 border rounded-tr-2xl border-gray-300/50 dark:border-gray-800 border-b-0\">\r\n                                        <!-- My custom line numbers -->\r\n                                        <div>\r\n                                            <pre aria-hidden=\"true\" class=\"line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40\"></pre>\r\n                                        </div>\r\n                                        <div class=\"relative w-full snippet-code\">\r\n                                            <div class=\"absolute inset-0 overflow-auto custom-scrollbar\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                <!-- PrismaJs line numbers -->\r\n                                                <pre class=\"line-numbers language-fsharp custom-scrollbar !overflow-auto\"><code class=\"mt-[-17px] text-sm block leading-[1.13rem] language-fsharp text-white\">[&lt;JavaScript&gt;]\r\nmodule Client =\r\n    type IndexTemplate = Template&lt;\"wwwroot/index.html\", ClientLoad.FromDocument&gt;\r\n\r\n    let People =\r\n        ListModel.FromSeq [\r\n            \"John\"\r\n            \"Paul\"\r\n        ]\r\n\r\n    [&lt;SPAEntryPoint&gt;]\r\n    let Main () =\r\n        let newName = Var.Create \"\"\r\n        IndexTemplate.Main()\r\n            .ListContainer(\r\n                People.View.DocSeqCached(fun (name: string) -> \r\n                    IndexTemplate.ListItem().Name(name).Doc()\r\n                )\r\n            )\r\n            .Name(newName)\r\n            .Add(fun _ ->\r\n                People.Add(newName.Value)\r\n                newName.Value &lt;- \"\"\r\n            )\r\n            .Doc()\r\n        |> Doc.RunById \"main\"</code></pre>\r\n                                            </div>\r\n                                            <div class=\"absolute inset-0 hidden overflow-hidden custom-scrollbar\" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"html\">\r\n                                                <pre class=\"line-numbers -mb-20 !overflow-auto language-html custom-scrollbar\"><code class=\"mt-[-17px] text-sm block leading-[1.13rem] language-html text-white\">&lt;!DOCTYPE html&gt;\r\n&lt;html lang=\"en\"&gt;\r\n&lt;head&gt;\r\n    &lt;title&gt;spa_websharper&lt;/title&gt;\r\n    &lt;meta charset=\"utf-8\" /&gt;\r\n    &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /&gt;\r\n    &lt;link rel=\"stylesheet\" type=\"text/css\" href=\"Scripts/spa-websharper.css\" /&gt;\r\n    &lt;style&gt;\r\n        /* Don't show the not-yet-loaded templates */\r\n        [ws-template], [ws-children-template] { display: none; }\r\n    &lt;/style&gt;\r\n    &lt;script type=\"text/javascript\" src=\"Scripts/spa-websharper.head.js\"&gt;&lt;/script&gt;\r\n&lt;/head&gt;\r\n&lt;body&gt;\r\n    &lt;h1&gt;My list of unique people&lt;/h1&gt;\r\n    &lt;div id=\"main\" ws-children-template=\"Main\"&gt;\r\n        &lt;ul ws-hole=\"ListContainer\"&gt;\r\n            &lt;li ws-template=\"ListItem\"&gt;${Name}&lt;/li&gt;\r\n        &lt;/ul&gt;\r\n        &lt;div&gt;\r\n            &lt;input ws-var=\"Name\" placeholder=\"Name\" /&gt;\r\n            &lt;button ws-onclick=\"Add\"&gt;Add&lt;/button&gt;\r\n            &lt;div&gt;You are about to add: ${Name}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;script type=\"module\" src=\"Scripts/spa-websharper.min.js\"&gt;&lt;/script&gt;\r\n&lt;/body&gt;\r\n&lt;/html&gt;</code></pre>\r\n                                            </div>\r\n                                            <div class=\"absolute inset-0 hidden overflow-hidden\" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"code-result\">\r\n                                                <iframe src=\"/snippets/spa/index.html\" class=\"w-full h-full pr-2 mr-4 rounded-md bg-white\" frameborder=\"0\"></iframe>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"lg:col-span-3 bg-white/90 dark:bg-gray-900 shadow-2xl shadow-gray-950/5 dark:shadow-gray-950/15 border border-gray-300/50 dark:border-gray-800 p-3 lg:rounded-br-3xl\">\r\n                                        <span class=\"border-b border-brand-secondary pb-1 text-xs font-medium tracking-wide text-gray-500 dark:text-white\">Terminal</span>\r\n                                        <div class=\"mt-3 w-max font-mono text-xs text-gray-400 dark:text-white/60\">\r\n                                            <div class=\"text-green-500 font-bold\">\r\n                                                VITE <span class=\"text-green-500 font-normal\">v6.3.5</span>\r\n                                                <span class=\"text-gray-400 font-normal\"> ready in </span>\r\n                                                <span class=\"dark:text-white text-gray-300\">663</span>\r\n                                                <span class=\"text-gray-300\"> ms</span>\r\n                                            </div>\r\n                                            <div class=\"text-green-500 mt-2\">\r\n                                                \u279c <span class=\"dark:text-white text-gray-300\">Local:</span>\r\n                                                <a href=\"#code-snippet\" class=\"text-sky-400 underline ml-2\">http://localhost:24347/</a>\r\n                                            </div>\r\n                                            <div class=\"text-green-400 mt-1\">\r\n                                                \u279c <span class=\"text-gray-400\">Network:</span>\r\n                                                <span class=\"text-gray-400\"> use </span><span class=\"dark:text-white text-gray-300 font-bold\">--host</span>\r\n                                                <span class=\"text-gray-400\"> to expose</span>\r\n                                            </div>\r\n                                            <div class=\"text-green-400 mt-1\">\r\n                                                \u279c <span class=\"text-gray-400\">press </span><span class=\"dark:text-white text-gray-300 font-bold\">h</span>\r\n                                                <span class=\"text-gray-400\"> + </span><span class=\"dark:text-white text-gray-300 font-bold\">enter</span>\r\n                                                <span class=\"text-gray-400\"> to show help</span>\r\n                                            </div>\r\n                                            <span class=\"dark:text-white text-gray-300\">\u2588</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Shaded background color -->\r\n                <div class=\"dark:hidden absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]\"></div>\r\n                <div class=\"hidden dark:block absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.900/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.900/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]\"></div>\r\n                <div class=\"absolute h-96 inset-x-[10%] -bottom-[20%] my-auto hidden dark:block\">\r\n                    <div aria-hidden=\"true\" class=\"grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl\">\r\n                        <!--background colors here -->\r\n                        <div class=\"h-72 bg-gradient-to-br from-pink-400 to-purple-400 blur-3xl dark:from-blue-800\"></div>\r\n                        <div class=\"h-96 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-sky-950\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"overflow-hidden mt-16 lg:mt-0\">\r\n                <div class=\"relative space-y-12\">\r\n                    <p class=\"text-center text-gray-950 dark:text-white\">Trusted by fast-growing companies around the world</p>\r\n                    <div class=\"max-w-4xl mx-auto\">\r\n                        <div class=\"flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/mcgraw.png\" alt=\"\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/ford.png\" alt=\"\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/microsoft.png\" alt=\"\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/elte.png\" alt=\"\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/unmc.png\" alt=\"\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/duf.png\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"mx-auto text-center sm:w-2/3 lg:w-1/2\">\r\n                    <h2 class=\"text-3xl font-bold text-gray-800 dark:text-white\">Functional, reactive applications with WebSharper.UI</h2>\r\n                    <p class=\"mt-6 text-gray-500 dark:text-gray-200\">Bind composite data models to your reactive user interfaces. The flow of reactive values through the code yet concise, readability.</p>\r\n                    <div class=\"mt-6 flex justify-center\">\r\n                        <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                            <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\">Learn more</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"relative mt-16\">\r\n                    <div class=\"relative z-10 border dark:border-gray-800 rounded-xl dark:bg-transparent dark:p-px\">\r\n                        <div data-name=\"snippet\" class=\"rounded-[23px] text-sm backdrop-blur-3xl\">\r\n                            <div class=\"flex items-center gap-4 rounded-t-xl px-4 py-2 dark:bg-gray-950\">\r\n                                <div class=\"flex space-x-1.5\">\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                </div>\r\n\r\n                                <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                    <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                            <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                            <defs id=\"defs2\"></defs>\r\n                                            <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                            </g>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">AddTwoNumbers.fs</span>\r\n                                    </button>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"js\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                            <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">addTwoNumbers.js</span>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"relative rounded-b-xl bg-gray-200/10 text-xs dark:mt-px dark:bg-gray-950\">\r\n                                <div class=\"flex p-4 pl-2 overflow-hidden\">\r\n                                    <div class=\"sm:pr-4\">\r\n                                        <pre aria-hidden=\"true\" class=\"line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40\"></pre>\r\n                                    </div>\r\n                                    <div class=\"relative w-full snippet-code\">\r\n                                        <div class=\"relative transition-all duration-1000 custom-scrollbar max-w-full overflow-y-hidden pr-0 sm:pr-[52%] lg:pr-[46.8%]\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                            <pre class=\"line-numbers language-fsharp inline-block min-w-max\"><code class=\"mt-[-17px] block md:leading-[1.13rem] language-fsharp text-white\">let x = Var.Create 1\r\nlet y = Var.Create 1\r\n\r\nlet addNumbers =\r\n    div [] [\r\n        p [] [text \"x \"; Doc.InputType.IntUnchecked [] x]\r\n        p [] [text \"y \"; Doc.InputType.IntUnchecked [] y]\r\n        p [] [\r\n            textView (View.Map2 (fun x y -> $\"x + y = {x + y}\") x.View y.View)\r\n        ]\r\n    ]\r\n\r\naddNumbers |> Doc.RunById \"main\"</code></pre>\r\n                                        </div>\r\n                                        <div class=\"absolute inset-0 hidden transition-all duration-1000 custom-scrollbar\" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                            <pre class=\"-mb-20 line-numbers language-js\"><code class=\"block mt-[-17px] leading-[1.13rem] language-js text-white\">let x = 1;\r\nlet y = 1;\r\n\r\nconst inputX = document.createElement(\"input\");\r\ninputX.type = \"number\";\r\ninputX.value = x;\r\n\r\nconst inputY = document.createElement(\"input\");\r\ninputY.type = \"number\";\r\ninputY.value = y;\r\n\r\nconst pX = document.createElement(\"p\");\r\npX.textContent = \"x: \";\r\npX.appendChild(inputX);\r\n\r\nconst pY = document.createElement(\"p\");\r\npY.textContent = \"y: \";\r\npY.appendChild(inputY);\r\n\r\nconst result = document.createElement(\"p\");\r\nfunction updateSum() {\r\n    const xVal = parseFloat(inputX.value) || 0;\r\n    const yVal = parseFloat(inputY.value) || 0;\r\n    result.textContent = \"x + y = \" + (xVal + yVal);\r\n}\r\nupdateSum();\r\n\r\ninputX.addEventListener(\"input\", updateSum);\r\ninputY.addEventListener(\"input\", updateSum);\r\n\r\nconst main = document.getElementById(\"main\");\r\nmain.appendChild(pX);\r\nmain.appendChild(pY);\r\nmain.appendChild(result);</code></pre>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"relative z-10 -mt-12 scale-105 rounded-xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/30 dark:border-white/5 dark:bg-gray-900 dark:shadow-black/40 sm:absolute sm:-inset-y-9 sm:-right-0 sm:mt-0 sm:w-1/2 sm:scale-100 lg:w-[46.8%]\">\r\n                        <div class=\"h-full w-full rounded-xl\">\r\n                            <div class=\"relative flex items-center gap-4 rounded-t-xl bg-white py-1 pl-4 pr-1 dark:bg-gray-900/20\">\r\n                                <div class=\"absolute inset-y-0 my-auto flex h-max space-x-1.5\">\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                </div>\r\n\r\n                                <div class=\"mx-auto flex w-2/3 cursor-text items-center gap-1.5 rounded-lg bg-gray-100 p-1.5 px-2 dark:bg-black/30\">\r\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-4 w-4 text-gray-300 dark:text-gray-300/40\">\r\n                                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\"></path>\r\n                                    </svg>\r\n\r\n                                    <span class=\"text-xs text-gray-500 dark:text-gray-200\">Search </span>\r\n                                </div>\r\n                            </div>\r\n                            <iframe class=\"themed-iframe w-full h-full bg-transparent\" frameborder=\"0\" data-src=\"/snippets/add_two_numbers/index.html\" src=\"/snippets/add_two_numbers/index.html\"></iframe>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"relative lg:flex\">\r\n                    <div class=\"sticky top-[33%] mb-16 mt-24 hidden h-max justify-end lg:flex lg:w-[10rem] xl:w-[6rem]\">\r\n                        <div class=\"sticky top-32 ml-auto flex flex-col items-end space-y-4\">\r\n                            <a href=\"#mvu\" data-step=\"mvu\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Model-View-Update</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#react\" data-step=\"react\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">React Components</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#webapi\" data-step=\"webapi\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Web APIs</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#csr\" data-step=\"csr\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Client-side routing</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#lc\" data-step=\"lc\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Language constructs</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#tsh\" data-step=\"tsh\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Type-safe HTML</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#rwe\" data-step=\"rwe\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Remoting with ease</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <!-- <a href=\"#puia\" data-step=\"puia\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                            <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Powerful UI abstractions</span>\r\n                            <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                        </a> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"lg:w-[calc(100%-6rem)] ml-auto\">\r\n                        <div id=\"mvu\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Model-View-Update architecture with WebSharper.Mvu</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">Structure client-side applications with clear separation of concerns between logic and display. Based on WebSharper.UI, Mvu brings Elm-like architecture to WebSharper.</p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" ws-onclick=\"OnTabClick\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">NameInput.fs</span>\r\n                                                </button>\r\n                                                <button role=\"tab\" aria-selected=\"false\" data-target=\"js\" ws-onclick=\"OnTabClick\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                        <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                        <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">nameInput.js</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">type Model = { name: string }\r\nlet InitModel = { name = \"\" }\r\n\r\ntype Message =\r\n    | SetName of string\r\n\r\nlet Update message model =\r\n    match message with\r\n    | SetName n -> { model with name = n }\r\n\r\nlet View dispatch (view: View<model>) =\r\n    div [] [\r\n        input [\r\n            attr.value view.V.name\r\n            on.change (fun el _ ->\r\n                dispatch (SetName el?value))\r\n        ] []\r\n    ]\r\n\r\nlet Main = App.CreateSimple InitModel Update View |> App.Run</model></code></pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max h-max\" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-js\">let model = { name: \"\" };\r\n\r\nfunction update(message) {\r\n    if (message.type === \"SetName\") {\r\n    model.name = message.value;\r\n    render(); \r\n    }\r\n}\r\n\r\nfunction render() {\r\n    const main = document.getElementById(\"main\");\r\n    main.innerHTML = \"\"; \r\n\r\n    const input = document.createElement(\"input\");\r\n    input.value = model.name;\r\n    input.addEventListener(\"input\", (e) => {\r\n    update({ type: \"SetName\", value: e.target.value });\r\n    });\r\n\r\n    main.appendChild(input);\r\n}\r\n\r\nrender();</code></pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"react\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Build React components</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">You can also use widespread libraries such as React to build applications. The syntax is as convenient as JSX, with the added benefit of strong typing.</p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">Person.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"js\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                        <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                        <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">Person.js</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">type Person = { name: string; age: int }\r\n\r\ntype ShowPerson(props) =\r\n    inherit React.Component<person, unit=\"\">(props)\r\n\r\n    override this.Render() =\r\n        ul [attr.className \"person\"] [\r\n            li [] [text (\"Name: \" + this.Props.name)]\r\n            li [] [text (\"Age: \" + string this.Props.age)]\r\n        ]                                                                \r\n                                                            </person,></code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-js\">import React from \"react\";\r\n\r\nfunction ShowPerson(props) {\r\n    return (\r\n        Name: {props.name}\r\n        Age: {props.age}\r\n    );\r\n}\r\n\r\n// Example usage:\r\n// &lt;ShowPerson name=\"Alice\" age={30} /&gt;\r\n                                                            </code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"webapi\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Web APIs and server-side JSON and HTML</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">\r\n                                    Declare your URLs as a C# or F# endpoint type, and WebSharper handles the dispatch. Create safe internal links from endpoint values.\r\n\r\n                                    <br><br>You can share the same rendering code and templates between the server and the client.\r\n\r\n                                    <br><br>Automatically parse JSON requests and generate JSON responses based on your types.\r\n                                </p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">ArticleSite.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"html\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 48 48\">\r\n                                                        <path fill=\"#E65100\" d=\"M41,5H7l3,34l14,4l14-4L41,5L41,5z\"></path>\r\n                                                        <path fill=\"#FF6D00\" d=\"M24 8L24 39.9 35.2 36.7 37.7 8z\"></path>\r\n                                                        <path fill=\"#FFF\" d=\"M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z\"></path>\r\n                                                        <path fill=\"#EEE\" d=\"M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">articles.html</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"json\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-4 w-4\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 32 32\"><path d=\"M4.014,14.976a2.51,2.51,0,0,0,1.567-.518A2.377,2.377,0,0,0,6.386,13.1,15.261,15.261,0,0,0,6.6,10.156q.012-2.085.075-2.747a5.236,5.236,0,0,1,.418-1.686,3.025,3.025,0,0,1,.755-1.018A3.046,3.046,0,0,1,9,4.125,6.762,6.762,0,0,1,10.544,4h.7V5.96h-.387a2.338,2.338,0,0,0-1.723.468A3.4,3.4,0,0,0,8.709,8.52a36.054,36.054,0,0,1-.137,4.133,4.734,4.734,0,0,1-.768,2.06A4.567,4.567,0,0,1,6.1,16a3.809,3.809,0,0,1,1.992,1.754,8.861,8.861,0,0,1,.618,3.865q0,2.435.05,2.9A1.755,1.755,0,0,0,9.264,25.7a2.639,2.639,0,0,0,1.592.337h.387V28h-.7a5.655,5.655,0,0,1-1.773-.2,2.97,2.97,0,0,1-1.324-.93,3.353,3.353,0,0,1-.681-1.63A24.175,24.175,0,0,1,6.6,22.006,16.469,16.469,0,0,0,6.386,18.9a2.408,2.408,0,0,0-.805-1.361,2.489,2.489,0,0,0-1.567-.524Z\" style=\"fill:#f5de19\"></path><path d=\"M27.986,17.011a2.489,2.489,0,0,0-1.567.524,2.408,2.408,0,0,0-.805,1.361,16.469,16.469,0,0,0-.212,3.109,24.175,24.175,0,0,1-.169,3.234,3.353,3.353,0,0,1-.681,1.63,2.97,2.97,0,0,1-1.324.93,5.655,5.655,0,0,1-1.773.2h-.7V26.04h.387a2.639,2.639,0,0,0,1.592-.337,1.755,1.755,0,0,0,.506-1.186q.05-.462.05-2.9a8.861,8.861,0,0,1,.618-3.865A3.809,3.809,0,0,1,25.9,16a4.567,4.567,0,0,1-1.7-1.286,4.734,4.734,0,0,1-.768-2.06,36.054,36.054,0,0,1-.137-4.133,3.4,3.4,0,0,0-.425-2.092,2.338,2.338,0,0,0-1.723-.468h-.387V4h.7A6.762,6.762,0,0,1,23,4.125a3.046,3.046,0,0,1,1.149.581,3.025,3.025,0,0,1,.755,1.018,5.236,5.236,0,0,1,.418,1.686q.062.662.075,2.747a15.261,15.261,0,0,0,.212,2.947,2.377,2.377,0,0,0,.805,1.355,2.51,2.51,0,0,0,1.567.518Z\" style=\"fill:#f5de19\"></path></svg>\r\n                                                    <span class=\"text-xs\">articleWithId.json</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">// Define the application's endpoints\r\ntype EndPoint =\r\n    | [&lt;EndPoint \"GET /articles\"&gt;]\r\n        ArticleList\r\n    | [&lt;EndPoint \"GET /article\"&gt;]\r\n        Article of id: int\r\n\r\n// Define the content served by these endpoints\r\nlet Website =\r\n    Application.MultiPage (fun (ctx: Context&lt;_&gt;) endpoint -&gt;\r\n        match endpoint with\r\n        | ArticleList -&gt;\r\n            Content.Page(\r\n                div [] [\r\n                    h1 [] [text \"Welcome!\"]\r\n                    a [attr.href (ctx.Link (Article 42))] [\r\n                        text \"Go to article 42\"\r\n                    ]\r\n                ]\r\n            )\r\n        | Article id -&gt;\r\n            Content.Json { id = id\r\n                            title = \"Hello!\"\r\n                            date = System.DateTime.Now }\r\n    )</code></pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"html\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-html\">&lt;!-- /articles endpoint --&gt;\r\n&lt;div&gt;\r\n  &lt;h1&gt;Welcome!&lt;/h1&gt;\r\n  &lt;a href=&quot;/article/42&quot;&gt;Go to article 42&lt;/a&gt;\r\n&lt;/div&gt;\r\n</code></pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-3\" data-lang=\"json\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-html\">{\r\n  \"date\": \"2025-10-01T13:50:44.3596542+02:00\",\r\n  \"id\": 42,\r\n  \"title\": \"Hello!\"\r\n}\r\n</code></pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"csr\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Client-side routing</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">Write SPAs with the same routing API on the client side as you would use on the server side.</p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">ArticleRouter.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"js\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                        <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                        <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">articleRouter.js</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">let router = Router.Infer&lt;EndPoint&gt;()\r\nlet route = router.Install(Article 1)\r\n\r\nlet view =\r\n    route.View.Map (function\r\n        | Article id -&gt;\r\n            div [] [\r\n                h1 [] [text $\"This is article {id}\"]\r\n                a [attr.href (router.Link Articles)] [text \"Go back to the list of articles\"]\r\n            ]\r\n        | Articles -&gt;\r\n            h1 [] [text \"List of articles\"]\r\n    )\r\n\r\nlet doc = Doc.BindView id view\r\nDoc.RunById \"main\" doc</code></pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-js\">// Simulated router and state\r\nconst router = {\r\n    currentRoute: { type: \"Articles\" },\r\n    link: (route) => {\r\n    if (route.type === \"Articles\") return \"/articles\";\r\n    if (route.type === \"Article\") return `/article/${route.id}`;\r\n    }\r\n};\r\n\r\n// Render function\r\nfunction render(route) {\r\n    const main = document.getElementById(\"main\");\r\n    main.innerHTML = \"\"; \r\n\r\n    if (route.type === \"Article\") {\r\n    const divEl = document.createElement(\"div\");\r\n\r\n    const h1El = document.createElement(\"h1\");\r\n    h1El.textContent = `This is article ${route.id}`;\r\n\r\n    const link = document.createElement(\"a\");\r\n    link.href = router.link({ type: \"Articles\" });\r\n    link.textContent = \"Go back to the list of articles\";\r\n\r\n    divEl.appendChild(h1El);\r\n    divEl.appendChild(link);\r\n    main.appendChild(divEl);\r\n    } else {\r\n    const h1El = document.createElement(\"h1\");\r\n    h1El.textContent = \"List of articles\";\r\n    main.appendChild(h1El);\r\n    }\r\n}\r\n\r\n// Initial render\r\nrender(router.currentRoute);</code></pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"lc\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Use powerful language constructs on the client side</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">\r\n                                    F#: Query expressions, async workflows, sequence expressions...\r\n\r\n\r\n                                    <br><br>C#: LINQ queries, asynchronous Tasks, generators...\r\n                                </p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">query.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"csharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-4 w-4\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 128 128\"><path fill=\"#9B4F96\" d=\"M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z\"></path><path fill=\"#68217A\" d=\"M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z\"></path><path fill=\"#fff\" d=\"M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z\"></path></svg>\r\n                                                    <span class=\"text-xs\">query.cs</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"overflow-hidden p-4 pt-0\"><code class=\"w-max overflow-hidden language-fsharp\">type Article = { id: int; title: string; date: DateTime }\r\n\r\nlet start = DateTime(2025, 9, 1)\r\n\r\nlet articles : Article list = [\r\n    { id = 1; title = \"Welcome to WebSharper\"; date = DateTime(2025, 9, 20) }\r\n    { id = 2; title = \"Async workflows 101\"; date = DateTime(2025, 8, 15) }\r\n    { id = 3; title = \"Query expressions on client\"; date = DateTime(2025, 9, 28) }\r\n    { id = 4; title = \"Remoting tips\"; date = DateTime(2025, 7, 5)  }\r\n]\r\n// Query expressions (LINQ for F#)\r\nlet recentIds =\r\n    query {\r\n        for article in articles do\r\n        where (article.date > start)\r\n        sortByDescending article.date\r\n        select article.id\r\n    }\r\n// Async workflows (run non-blocking work on the client)\r\nlet loadAndShow =\r\n    async {\r\n        do! Async.Sleep 10\r\n        Console.Log(sprintf \"Recent IDs: %A\" (recentIds |> Seq.toList))\r\n    }    \r\n\r\nAsync.Start loadAndShow\r\n\r\n// Sequence expressions (lazy generators)\r\nlet squares =\r\n    seq {\r\n        for i in 1 .. 5 do\r\n            yield i * i\r\n    }   \r\n    \r\nConsole.Log(String.concat \", \" (squares |> Seq.map string))</code></pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"csharp\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-csharp\">public record Article(int Id, string Title, DateTime Date);\r\n// Async/await with Task (supported on client)\r\npublic static async Task LoadAndShowAsync(IEnumerable&lt;int&gt; recentIds)\r\n{\r\n    await Task.Delay(10);\r\n    JS.Console.Log($&quot;Recent IDs: {string.Join(&quot;, &quot;, recentIds.Select(i =&gt; i.ToString()))}&quot;);\r\n}\r\n// Iterator (yield)\r\npublic static IEnumerable&lt;int&gt; Squares()\r\n{\r\n    for (var i = 1; i &lt;= 5; i++)\r\n        yield return i * i;\r\n}\r\npublic static void Main()\r\n{\r\n    var start = new DateTime(2025, 9, 1);\r\n\r\n    var articles = new List&lt;Article&gt;\r\n        {\r\n            new(1, &quot;Welcome to WebSharper&quot;, new DateTime(2025, 9, 20)),\r\n            new(2, &quot;Async workflows 101&quot;, new DateTime(2025, 8, 15)),\r\n            new(3, &quot;Query expressions on client&quot;, new DateTime(2025, 9, 28)),\r\n            new(4, &quot;Remoting tips&quot;, new DateTime(2025, 7, 5)),\r\n        };\r\n\r\n    // LINQ query\r\n    var recentIds =\r\n        from article in articles\r\n        where article.Date &gt; start\r\n        orderby article.Date descending\r\n        select article.Id;\r\n\r\n    LoadAndShowAsync(recentIds);\r\n\r\n    JS.Console.Log(string.Join(&quot;, &quot;, Squares().Select(i =&gt; i.ToString())));\r\n}</code></pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tsh\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Type-safe HTML templating</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">\r\n                                    Use HTML templates to keep your logic and UI clearly separate and facilitate the collaboration between programmers and designers.\r\n                                </p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">Client.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"html\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"w-4 h-4 text-gray-800 dark:text-white\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewbox=\"0 0 24 24\">\r\n                                                        <path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">index.html</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">IndexTemplate.Main()\r\n    .Name(newName)\r\n    .Add(fun _ -&gt;\r\n        People.Add(newName.Value)\r\n        newName.Value &lt;- \"\"\r\n    )\r\n    .Remove(fun _ -&gt; \r\n        People.Remove newName.Value                                                            \r\n    ) \r\n    .Doc()\r\n                                                            </code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"html\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-html\">&lt;h1&gt;My list of unique people&lt;/h1&gt;\r\n&lt;div ws-children-template=\"Main\"&gt;\r\n    &lt;input ws-var=\"Name\" /&gt;\r\n    &lt;button ws-onclick=\"Add\"&gt;Add&lt;/button&gt;\r\n    &lt;button ws-onclick=\"Remove\"&gt;Remove&lt;/button&gt;\r\n&lt;/div&gt;\r\n                                                            </code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"rwe\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Remoting with ease</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">\r\n                                    Seamlessly call server-side asynchronous functions from the client side.\r\n\r\n                                    <br><br>AJAX call, JSON serialization... Everything is handled automatically.\r\n                                </p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">RemoteCall.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"js\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                        <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                        <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">remoteCall.js</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">// Server-side, remote-callable function\r\n[&lt;Remote&gt;]\r\nlet ServerFn () : Async&lt;string&gt; =\r\n    async { return \"Hello, world!\" }\r\n\r\n// Client-side function\r\n[&lt;JavaScript&gt;]\r\nlet CallServer () : unit =\r\n    async {\r\n        let! result = ServerFn()\r\n        Console.Log(result)\r\n    }\r\n    |> Async.Start\r\n                                                            </code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-js\">// Server-side\r\nexport function ServerFn(){\r\n  return Bind((new AjaxRemotingProvider()).Async(\"Server/ServerFn\", []), (o) => Return(o));\r\n}\r\n\r\n// Client-side\r\nasync function CallServer() {\r\n  const r = await fetch(\"/Server/ServerFn\", {\r\n    method: \"POST\",\r\n    headers: { \"Content-Type\": \"application/json\" }\r\n  });\r\n  const result = await r.json();   // -> \"Hello, world!\"\r\n  console.log(result);\r\n}\r\nCallServer();\r\n                                                            </code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"mt-8 md:w-2/3 lg:w-1/2\">\r\n                    <h2 class=\"text-3xl font-bold text-gray-700 dark:text-white\">Powerful UI abstractions</h2>\r\n                    <p class=\"mt-6 text-gray-500 dark:text-gray-200\">Declare full interactive forms in just a few lines of code with WebSharper Forms.</p>\r\n                    <div class=\"mt-6\">\r\n                        <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                            <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\">Learn more</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"relative mt-16\">\r\n                    <div class=\"relative z-10 border dark:border-gray-800 rounded-xl dark:bg-transparent dark:p-px\">\r\n                        <div data-name=\"snippet\" class=\"rounded-[23px] text-sm backdrop-blur-3xl\">\r\n                            <div class=\"flex items-center gap-4 rounded-t-xl px-4 py-2 dark:bg-gray-950\">\r\n                                <div class=\"flex space-x-1.5\">\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                </div>\r\n\r\n                                <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                    <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                            <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                            <defs id=\"defs2\"></defs>\r\n                                            <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                            </g>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">Forms.fs</span>\r\n                                    </button>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"js\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                            <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">forms.js</span>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"relative rounded-b-xl bg-gray-200/10 text-xs dark:mt-px dark:bg-gray-950\">\r\n                                <div class=\"flex p-4 pl-2\">\r\n                                    <div class=\"sm:pr-4\">\r\n                                        <div aria-hidden=\"true\" class=\"line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40\"></div>\r\n                                    </div>\r\n                                    <div class=\"relative w-full snippet-code\">\r\n                                        <div class=\"relative transition-all duration-1000 custom-scrollbar max-w-full overflow-y-hidden pr-0 sm:pr-[52%] lg:pr-[46.8%]\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                            <pre class=\"-mb-20 !overflow-auto line-numbers language-fsharp inline-block min-w-max\"><code class=\"mt-[-14px] block md:leading-[1.13rem] language-fsharp text-white\">let LoginForm () =\r\n    Form.Return (fun user pass -> user, pass)\r\n    &lt;*&gt; (Form.Yield \"\"\r\n        |&gt; Validation.IsNotEmpty \"Must enter a username\")\r\n    &lt;*&gt; (Form.Yield \"\"\r\n        |&gt; Validation.IsNotEmpty \"Must enter a password\")\r\n    |&gt; Form.WithSubmit\r\n    |&gt; Form.Run (fun (u, p) -&gt;\r\n        JS.Alert(\"Welcome, \" + u + \"!\")\r\n    )\r\n    |&gt; Form.Render (fun user pass submit -&gt;\r\n        form [] [\r\n            div [] [label [] [text \"Username: \"]; Doc.InputType.Text [] user]\r\n            div [] [label [] [text \"Password: \"]; Doc.InputType.Password [] pass]\r\n            Doc.Button \"Log in\" [] submit.Trigger\r\n            div [] [\r\n                Doc.ShowErrors submit.View (fun errors -&gt;\r\n                    errors\r\n                    |&gt; Seq.map (fun m -&gt; p [] [text m.Text])\r\n                    |&gt; Doc.Concat)\r\n            ]\r\n        ]\r\n    )\r\n    \r\nLoginForm() |&gt; Doc.RunById \"main\"</code></pre>\r\n                                        </div>\r\n                                        <div class=\"absolute inset-0 hidden transition-all duration-1000 custom-scrollbar\" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                            <pre class=\"-mb-20 !overflow-auto line-numbers language-js\"><code class=\"block leading-[1.13rem] mt-[-14px] language-js text-white\">function createLoginForm() {\r\n    const main = document.getElementById(\"main\");\r\n\r\n    const form = document.createElement(\"form\");\r\n\r\n    // Username field\r\n    const usernameDiv = document.createElement(\"div\");\r\n    const usernameLabel = document.createElement(\"label\");\r\n    usernameLabel.textContent = \"Username: \";\r\n    const usernameInput = document.createElement(\"input\");\r\n    usernameInput.type = \"text\";\r\n    usernameInput.required = true;\r\n    usernameDiv.appendChild(usernameLabel);\r\n    usernameDiv.appendChild(usernameInput);\r\n\r\n    // Password field\r\n    const passwordDiv = document.createElement(\"div\");\r\n    const passwordLabel = document.createElement(\"label\");\r\n    passwordLabel.textContent = \"Password: \";\r\n    const passwordInput = document.createElement(\"input\");\r\n    passwordInput.type = \"password\";\r\n    passwordInput.required = true;\r\n    passwordDiv.appendChild(passwordLabel);\r\n    passwordDiv.appendChild(passwordInput);\r\n\r\n    // Submit button\r\n    const button = document.createElement(\"button\");\r\n    button.type = \"submit\";\r\n    button.textContent = \"Log in\";\r\n\r\n    // Error messages\r\n    const errorDiv = document.createElement(\"div\");\r\n\r\n    // Form submit handler\r\n    form.addEventListener(\"submit\", function (e) {\r\n        e.preventDefault(); // Prevent actual submission\r\n        errorDiv.innerHTML = \"\"; // Clear errors\r\n\r\n        const username = usernameInput.value.trim();\r\n        const password = passwordInput.value.trim();\r\n\r\n        const errors = [];\r\n\r\n        if (!username) errors.push(\"Must enter a username\");\r\n        if (!password) errors.push(\"Must enter a password\");\r\n\r\n        if (errors.length > 0) {\r\n            errors.forEach(msg => {\r\n                const p = document.createElement(\"p\");\r\n                p.className = \"error\";\r\n                p.textContent = msg;\r\n                errorDiv.appendChild(p);\r\n            });\r\n        } else {\r\n            alert(\"Welcome, \" + username + \"!\");\r\n        }\r\n    });\r\n\r\n    // Assemble form\r\n    form.appendChild(usernameDiv);\r\n    form.appendChild(passwordDiv);\r\n    form.appendChild(button);\r\n    form.appendChild(errorDiv);\r\n\r\n    main.appendChild(form);\r\n}\r\n\r\ncreateLoginForm();</code></pre>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"relative z-10 -mt-12 scale-105 rounded-xl border border-gray-200 bg-white shadow-lg shadow-gray-200/30 dark:border-white/5 dark:bg-gray-900 dark:shadow-black/40 sm:absolute sm:-inset-y-9 sm:-right-0 sm:mt-0 sm:w-1/2 sm:scale-100 lg:w-[46.8%]\">\r\n                        <div class=\"h-full w-full rounded-xl\">\r\n                            <div class=\"relative flex items-center gap-4 rounded-t-xl bg-white py-1 pl-4 pr-1 dark:bg-gray-900/20\">\r\n                                <div class=\"absolute inset-y-0 my-auto flex h-max space-x-1.5\">\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                </div>\r\n\r\n                                <div class=\"mx-auto flex w-2/3 cursor-text items-center gap-1.5 rounded-lg bg-gray-100 p-1.5 px-2 dark:bg-black/30\">\r\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-4 w-4 text-gray-300 dark:text-gray-300/40\">\r\n                                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\"></path>\r\n                                    </svg>\r\n\r\n                                    <span class=\"text-xs text-gray-500 dark:text-gray-200\">Search </span>\r\n                                </div>\r\n                            </div>\r\n                            <iframe class=\"themed-iframe w-full h-full bg-transparent\" frameborder=\"0\" data-src=\"/snippets/forms/index.html\" src=\"/snippets/forms/index.html\"></iframe>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 lg:pt-12 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"md:w-2/3 lg:w-1/2\">\r\n                    <h2 class=\"text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-3xl\">Web Workers without hassle</h2>\r\n                    <p class=\"mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300\">\r\n                        Write client-side parallel code directly in your code.\r\n\r\n                        <br><br>The compiler automatically creates the separate trimmed JavaScript file for the web worker.\r\n                    </p>\r\n                    <div class=\"mt-6\">\r\n                        <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                            <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\">Learn more</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"relative z-10 mt-16 rounded-3xl border border-gray-300/10 bg-gray-200/10 dark:border-0 dark:bg-white/10 dark:p-px\">\r\n                    <div class=\"rounded-3xl bg-white shadow-xl pr-3 pb-2 text-sm backdrop-blur-3xl dark:bg-gray-950 md:ml-0 md:pr-0\">\r\n                        <div class=\"flex items-center gap-4 px-6 py-2\">\r\n                            <div class=\"flex space-x-1.5\">\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                            </div>\r\n\r\n                            <div class=\"flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                    <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                    <defs id=\"defs2\"></defs>\r\n                                    <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                        <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                        <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                        <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                    </g>\r\n                                </svg>\r\n                                <span class=\"text-xs text-gray-500 dark:text-white/70\">Worker.fs</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"relative sm:flex\">\r\n                            <div class=\"absolute ml-1 flex h-full w-14 flex-none flex-col items-center justify-between py-3 text-gray-500 dark:text-white/60\">\r\n                                <svg width=\"24\" height=\"216\" fill=\"none\">\r\n                                    <path d=\"M3 69l6-6m-2-5a7 7 0 1014 0 7 7 0 00-14 0z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                    <path d=\"M8 7H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-3m3.707-10.293l-3.414-3.414A1 1 0 0015.586 3H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7.414a1 1 0 00-.293-.707zM7 103a2 2 0 100-4 2 2 0 000 4zm0 0v10m10-6a2 2 0 100-4 2 2 0 000 4zm0 0a3 3 0 01-3 3h-4a3 3 0 00-3 3m0 0a2 2 0 100 4 2 2 0 000-4z\" stroke=\"currentColor\" stroke-width=\"1.5\"></path>\r\n                                    <path d=\"M11.5 160.031a.75.75 0 00-1-1.118l1 1.118zm-8-1.118a.75.75 0 00-1 1.118l1-1.118zm6.972 6.149a.75.75 0 10.993-1.124l-.993 1.124zm-7.937-1.124a.75.75 0 10.993 1.124l-.993-1.124zm7.022-.368l-.64-.393.64.393zm-5.114 0l.64-.393-.64.393zM3 161.25a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zM8 147l.372-.651A.75.75 0 007.25 147H8zm14 8l.372.651a.75.75 0 000-1.302L22 155zm-14.75 0a.75.75 0 001.5 0h-1.5zm5.378 4.492a.75.75 0 10.744 1.302l-.744-1.302zM7 157.75A2.25 2.25 0 019.25 160h1.5A3.75 3.75 0 007 156.25v1.5zm0-1.5A3.75 3.75 0 003.25 160h1.5A2.25 2.25 0 017 157.75v-1.5zm2.624 3.298A5.225 5.225 0 017 160.25v1.5a6.73 6.73 0 003.376-.903l-.752-1.299zM9.25 160v.197h1.5V160h-1.5zm0 .197V162h1.5v-1.803h-1.5zM7 160.25a5.225 5.225 0 01-2.624-.702l-.752 1.299A6.73 6.73 0 007 161.75v-1.5zM4.75 162v-1.803h-1.5V162h1.5zm0-1.803V160h-1.5v.197h1.5zm5.75-1.284a5.209 5.209 0 01-.876.635l.752 1.299c.403-.234.78-.507 1.124-.816l-1-1.118zm-6.124.635a5.21 5.21 0 01-.876-.635l-1 1.118c.344.309.721.582 1.124.816l.752-1.299zm4.86 4.701c.451.212.867.487 1.236.813l.993-1.124a6.77 6.77 0 00-1.588-1.046l-.64 1.357zM9.25 162c0 .433-.122.835-.332 1.177l1.277.787A3.737 3.737 0 0010.75 162h-1.5zm-.332 1.177A2.247 2.247 0 017 164.25v1.5a3.748 3.748 0 003.195-1.786l-1.277-.787zm-5.39 1.885a5.25 5.25 0 011.235-.813l-.64-1.357a6.77 6.77 0 00-1.588 1.046l.993 1.124zM7 164.25c-.81 0-1.52-.427-1.918-1.073l-1.277.787A3.748 3.748 0 007 165.75v-1.5zm-1.918-1.073A2.235 2.235 0 014.75 162h-1.5c0 .719.203 1.392.555 1.964l1.277-.787zM4 161.25H3v1.5h1v-1.5zm7 0h-1v1.5h1v-1.5zm-3.372-13.599l14 8 .744-1.302-14-8-.744 1.302zM8.75 155v-8h-1.5v8h1.5zm12.878-.651l-9 5.143.744 1.302 9-5.143-.744-1.302z\" fill=\"currentColor\"></path>\r\n                                    <path d=\"M3 205h8m-8 0v7a1 1 0 001 1h7m-8-8v-7a1 1 0 011-1h6a1 1 0 011 1v7m0 0v8m0-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7m4-11h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z\" stroke=\"currentColor\" stroke-width=\"1.5\"></path>\r\n                                </svg>\r\n                                <svg width=\"24\" height=\"72\" fill=\"none\">\r\n                                    <path d=\"M10.325 52.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                    <path d=\"M15 60a3 3 0 11-6 0 3 3 0 016 0zM5.121 17.804A13.936 13.936 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                </svg>\r\n                            </div>\r\n                            <div class=\"ml-auto w-[calc(100%-4rem)] md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:divide-x lg:divide-gray-300/50 dark:lg:divide-white/10\">\r\n\r\n                                <!-- Worker.fs snippet -->\r\n                                <div class=\" w-auto md:row-span-2 border md:border-r-0 md:border-b-0 border-gray-300/50 dark:border-white/10 dark:border-r-0\">\r\n                                    <div class=\"flex w-full overflow-auto py-3 pl-3 font-mono text-xs snippet-code\">\r\n                                        <div>\r\n                                            <div aria-hidden=\"true\" class=\"line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40\"></div>\r\n                                        </div>\r\n                                        <pre class=\"code-block w-full -mb-16 text-wrap whitespace-pre-wrap break-words line-numbers language-fsharp !overflow-x-auto custom-scrollbar\"><code class=\"mt-[-14px] block language-fsharp text-wrap text-white whitespace-pre-wrap break-words\">let worker = new Worker(fun self -&gt;\r\n  // This code runs in the worker:\r\n  self.OnMessage &lt;- fun e -&gt;\r\n      Console.Log(\r\n        \"Received message from main thread: \" \r\n        + string e.Data\r\n      )\r\n)\r\n\r\n// This code runs in the main thread:\r\nworker.PostMessage(\"Hello, worker!\")</code></pre>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- index.js snippet -->\r\n                                <div class=\"mb-1 overflow-hidden border-gray-300/50 dark:border-white/10 md:row-span-1 md:-mb-1 md:-mt-8 md:border-l\">\r\n                                    <div class=\"flex items-center gap-2 border-gray-300/50 p-1 px-2 dark:border-white/10 md:border-b\">\r\n                                        <div class=\"flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 text-gray-500 duration-300 hover:text-gray-600 dark:text-white/70 dark:hover:text-white\">\r\n                                            <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                            </svg>\r\n                                            <span class=\"text-xs\">index.js</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"flex overflow-hidden rounded-2xl bg-white py-3 pl-3 font-mono text-xs dark:bg-black/40 md:rounded-none md:border-none md:bg-transparent dark:md:bg-transparent snippet-code\">\r\n                                        <div>\r\n                                            <div aria-hidden=\"true\" class=\"line-numbers hidden w-2 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40 sm:block\"></div>\r\n                                        </div>\r\n                                        <pre class=\"code-block -mb-9 !overflow-x-auto language-js line-numbers custom-scrollbar\"><code class=\"mt-[-16px] block language-js text-white\">var worker = new Worker(\"worker.js\");\r\nworker.postMessage(\"Hello, worker!\");\r\n                                            </code>\r\n                                        </pre>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- worker.js snippet -->\r\n                                <div class=\"mt-4 mb-1 overflow-hidden border-gray-300/50 dark:border-white/10 md:row-span-1 md:-mb-1 md:-mt-8 md:border-t md:border-l lg:border-t-0\">\r\n                                    <div class=\"flex items-center gap-2 p-1 px-2 md:border-b md:border-gray-300/50 md:bg-white/5 dark:md:border-white/10 lg:bg-transparent\">\r\n                                        <div class=\"flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 text-gray-500 duration-300 hover:text-gray-600 dark:text-white/70 dark:hover:text-white\">\r\n                                            <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                            </svg>\r\n                                            <span class=\"text-xs\">worker.js</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"flex overflow-hidden rounded-2xl bg-white py-3 pl-3 font-mono text-xs dark:bg-black/40 md:rounded-none md:border-none md:bg-transparent dark:md:bg-transparent snippet-code\">\r\n                                        <div>\r\n                                            <div aria-hidden=\"true\" class=\"line-numbers hidden w-2 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40 sm:block\"></div>\r\n                                        </div>\r\n                                        <pre class=\"code-block -mb-8 !overflow-x-auto md:-mb-16 language-js line-numbers custom-scrollbar\"><code class=\"mt-[-14px] block language-js text-white\">self.onmessage = function (e) {\r\n    console.log(\r\n       \"Received message from main thread: \"\r\n           + e.data.toString());\r\n}\r\n                                            </code>\r\n                                        </pre>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Terminal -->\r\n                                <div class=\"lg:col-span-3 bg-white dark:bg-gray-900 shadow-2xl shadow-gray-950/5 dark:shadow-gray-950/15 border border-gray-300/50 dark:border-gray-800 p-3 lg:rounded-br-3xl\">\r\n                                    <span class=\"border-b border-brand-secondary pb-1 text-xs font-medium tracking-wide text-gray-500 dark:text-white\">\r\n                                        <span>Terminal</span>\r\n                                    </span>\r\n                                    <div class=\"mt-3 hidden w-max font-mono text-xs text-gray-400 dark:text-white/60 md:block\">\r\n                                        <div class=\"text-gray-400 dark:text-gray-400\">\r\n                                            > Received message from main thread: Hello, worker!\r\n                                        </div>\r\n                                        <span class=\"dark:text-white text-gray-300\">\u2588</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"bg-gray-200/5 py-20 dark:bg-gray-900/25\">\r\n            <div>\r\n                <h2 class=\"text-center text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-4xl lg:text-5xl\">Get Started</h2>\r\n                <p class=\"mt-4 text-center text-lg text-gray-700 dark:text-gray-300\">Instant access to the power of WebSharper</p>\r\n                <div class=\"mt-10 flex flex-wrap items-center justify-center gap-6 lg:flex-nowrap\">\r\n                    <a href=\"https://docs.websharper.com/\" class=\"w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                        <span class=\"relative text-sm\">Get started</span>\r\n                    </a>\r\n                    <div class=\"text-primary flex h-10 items-center gap-2 rounded-xl border border-gray-300 backdrop-blur-xl pl-4 text-base font-medium leading-7 dark:border-gray-800 dark:bg-transparent\">\r\n                        <span class=\"text-xs text-gray-500\">$</span>\r\n                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new install WebSharper.<span class=\"bg-gradient-to-r from-gray-500 to-transparent bg-clip-text text-transparent dark:from-white/70\">Templates</span></span>\r\n                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                            <span class=\"sr-only\">Copy</span>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</body>\r\n</html>"), h):PrepareTemplate("home", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"space-y-40\" ws-onafterrender=\"OnAfterRender\">\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 pt-36 sm:pt-40 lg:px-8 lg:pb-12 lg:pt-48 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"relative z-10 text-center w-full\">\r\n                    <div id=\"track\" class=\"relative\">\r\n                        <!-- Arrows -->\r\n                        <button id=\"mini-prev\" class=\"absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 dark:text-white cursor-pointer\">&#10094;</button>\r\n                        <button id=\"mini-next\" class=\"absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 dark:text-white cursor-pointer\">&#10095;</button>\r\n\r\n                        <div class=\"relative overflow-hidden\">\r\n                            <div id=\"mini-inner\" class=\"flex w-full transition-transform duration-700 ease-out will-change-transform\">\r\n                                <!-- Slide 1 -->\r\n                                <div class=\"min-w-full w-full snap-start shrink-0 px-2\">\r\n                                    <!-- Headline -->\r\n                                    <h1 class=\"max-w-2xl mx-auto text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl\">Full-stack, functional reactive web programming for .NET</h1>\r\n\r\n                                    <!-- Tagline -->\r\n                                    <p class=\"mt-6 max-w-lg mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300\">Develop microservices, client-server web applications, reactive SPAs, and more in C# or F#.</p>\r\n\r\n                                    <!-- CTA buttons -->\r\n                                    <div class=\"mt-10 flex flex-wrap items-center justify-center gap-6 lg:flex-nowrap\">\r\n                                        <a href=\"https://docs.websharper.com/core/getting-started\" class=\"w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                                            <span class=\"relative text-sm\">Get started</span>\r\n                                        </a>\r\n                                        <div class=\"text-primary flex h-10 items-center gap-2 rounded-xl border border-gray-300 backdrop-blur-xl pl-4 text-base font-medium leading-7 dark:border-gray-800 dark:bg-transparent\">\r\n                                            <span class=\"text-xs text-gray-500\">$</span>\r\n                                            <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new install WebSharper.<span class=\"bg-gradient-to-r from-gray-500 to-transparent bg-clip-text text-transparent dark:from-white/70\">Templates</span></span>\r\n                                            <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                                <span class=\"sr-only\">Copy</span>\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                                </svg>\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                                </svg>\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                                </svg>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Slide 2 -->\r\n                                <div class=\"min-w-full w-full snap-start shrink-0 p-0\">\r\n                                    <!-- was p-2 -->\r\n                                    <div class=\"mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-0 items-start\">\r\n                                        <div class=\"md:col-span-1 m-0 p-0\">\r\n                                            <img src=\"/Assets/images/slay.png\" alt=\"DSL + AI\" class=\"block w-full h-56 md:h-64 object-contain object-left-top m-0 p-0 rounded-none shadow-none select-none\">\r\n                                        </div>\r\n\r\n                                        <div class=\"md:col-span-2 text-center md:text-left self-start\">\r\n                                            <h1 class=\"max-w-2xl text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl\">\r\n                                                DSL &amp; AI Integration\r\n                                            </h1>\r\n                                            <p class=\"mt-4 text-lg text-gray-700 dark:text-gray-300\">\r\n                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.\r\n                                            </p>\r\n\r\n                                            <a href=\"./dsl-ai.html\" class=\"mt-6 w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                                            flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                                            before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                                            before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r\n                                                            hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                                                <span class=\"relative text-sm\">Learn more</span>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- GIF -->\r\n                    <div class=\"mt-12 flex justify-center\">\r\n                        <div id=\"ws-template\" class=\"w-full max-w-3xl h-auto\"></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Sample code -->\r\n                <div id=\"code-snippet\" class=\"scroll-my-16 relative z-10 mt-20 xl:w-4/5 mx-auto\">\r\n                    <div class=\"rounded-3xl p-px from-gray-200 to-gray-950/5 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900\">\r\n                        <div data-name=\"snippet\" class=\"rounded-[23px] border border-gray-200/10 bg-white shadow-xl shadow-gray-950/5 pb-3 pr-3 text-sm backdrop-blur-3xl dark:border-transparent dark:bg-gray-950 md:ml-0\">\r\n                            <div class=\"flex items-center gap-4 px-6 pt-2 pb-1\">\r\n                                <div class=\"flex space-x-1.5\">\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                </div>\r\n\r\n                                <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                    <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                            <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                            <defs id=\"defs2\"></defs>\r\n                                            <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                            </g>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">Client.fs</span>\r\n                                    </button>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"html\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"w-4 h-4 text-gray-800 dark:text-white\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewbox=\"0 0 24 24\">\r\n                                            <path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14\"></path>\r\n                                        </svg>\r\n\r\n                                        <span class=\"text-xs\">index.html</span>\r\n                                    </button>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"code-result\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"w-4 h-4 text-gray-800 dark:text-white\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewbox=\"0 0 24 24\">\r\n                                            <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z\"></path>\r\n                                            <path stroke=\"currentColor\" stroke-width=\"2\" d=\"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\"></path>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">Result</span>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"relative flex\">\r\n                                <div class=\"absolute ml-1 flex h-full w-14 flex-none flex-col items-center justify-between py-3 text-gray-500 dark:text-white/60\">\r\n                                    <svg width=\"24\" height=\"216\" fill=\"none\">\r\n                                        <path d=\"M3 69l6-6m-2-5a7 7 0 1014 0 7 7 0 00-14 0z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                        <path d=\"M8 7H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-3m3.707-10.293l-3.414-3.414A1 1 0 0015.586 3H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7.414a1 1 0 00-.293-.707zM7 103a2 2 0 100-4 2 2 0 000 4zm0 0v10m10-6a2 2 0 100-4 2 2 0 000 4zm0 0a3 3 0 01-3 3h-4a3 3 0 00-3 3m0 0a2 2 0 100 4 2 2 0 000-4z\" stroke=\"currentColor\" stroke-width=\"1.5\"></path>\r\n                                        <path d=\"M11.5 160.031a.75.75 0 00-1-1.118l1 1.118zm-8-1.118a.75.75 0 00-1 1.118l1-1.118zm6.972 6.149a.75.75 0 10.993-1.124l-.993 1.124zm-7.937-1.124a.75.75 0 10.993 1.124l-.993-1.124zm7.022-.368l-.64-.393.64.393zm-5.114 0l.64-.393-.64.393zM3 161.25a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zM8 147l.372-.651A.75.75 0 007.25 147H8zm14 8l.372.651a.75.75 0 000-1.302L22 155zm-14.75 0a.75.75 0 001.5 0h-1.5zm5.378 4.492a.75.75 0 10.744 1.302l-.744-1.302zM7 157.75A2.25 2.25 0 019.25 160h1.5A3.75 3.75 0 007 156.25v1.5zm0-1.5A3.75 3.75 0 003.25 160h1.5A2.25 2.25 0 017 157.75v-1.5zm2.624 3.298A5.225 5.225 0 017 160.25v1.5a6.73 6.73 0 003.376-.903l-.752-1.299zM9.25 160v.197h1.5V160h-1.5zm0 .197V162h1.5v-1.803h-1.5zM7 160.25a5.225 5.225 0 01-2.624-.702l-.752 1.299A6.73 6.73 0 007 161.75v-1.5zM4.75 162v-1.803h-1.5V162h1.5zm0-1.803V160h-1.5v.197h1.5zm5.75-1.284a5.209 5.209 0 01-.876.635l.752 1.299c.403-.234.78-.507 1.124-.816l-1-1.118zm-6.124.635a5.21 5.21 0 01-.876-.635l-1 1.118c.344.309.721.582 1.124.816l.752-1.299zm4.86 4.701c.451.212.867.487 1.236.813l.993-1.124a6.77 6.77 0 00-1.588-1.046l-.64 1.357zM9.25 162c0 .433-.122.835-.332 1.177l1.277.787A3.737 3.737 0 0010.75 162h-1.5zm-.332 1.177A2.247 2.247 0 017 164.25v1.5a3.748 3.748 0 003.195-1.786l-1.277-.787zm-5.39 1.885a5.25 5.25 0 011.235-.813l-.64-1.357a6.77 6.77 0 00-1.588 1.046l.993 1.124zM7 164.25c-.81 0-1.52-.427-1.918-1.073l-1.277.787A3.748 3.748 0 007 165.75v-1.5zm-1.918-1.073A2.235 2.235 0 014.75 162h-1.5c0 .719.203 1.392.555 1.964l1.277-.787zM4 161.25H3v1.5h1v-1.5zm7 0h-1v1.5h1v-1.5zm-3.372-13.599l14 8 .744-1.302-14-8-.744 1.302zM8.75 155v-8h-1.5v8h1.5zm12.878-.651l-9 5.143.744 1.302 9-5.143-.744-1.302z\" fill=\"currentColor\"></path>\r\n                                        <path d=\"M3 205h8m-8 0v7a1 1 0 001 1h7m-8-8v-7a1 1 0 011-1h6a1 1 0 011 1v7m0 0v8m0-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7m4-11h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z\" stroke=\"currentColor\" stroke-width=\"1.5\"></path>\r\n                                    </svg>\r\n                                    <svg width=\"24\" height=\"72\" fill=\"none\">\r\n                                        <path d=\"M10.325 52.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                        <path d=\"M15 60a3 3 0 11-6 0 3 3 0 016 0zM5.121 17.804A13.936 13.936 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                    </svg>\r\n                                </div>\r\n                                <div class=\"ml-auto w-[calc(100%-4rem)] mt-1\">\r\n                                    <div class=\"flex overflow-hidden py-3 pl-3 font-mono text-xs dark:shadow-2xl shadow-gray-950/5 border rounded-tr-2xl border-gray-300/50 dark:border-gray-800 border-b-0\">\r\n                                        <!-- My custom line numbers -->\r\n                                        <div>\r\n                                            <pre aria-hidden=\"true\" class=\"line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40\"></pre>\r\n                                        </div>\r\n                                        <div class=\"relative w-full snippet-code\">\r\n                                            <div class=\"absolute inset-0 overflow-auto custom-scrollbar\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                <!-- PrismaJs line numbers -->\r\n                                                <pre class=\"line-numbers language-fsharp custom-scrollbar !overflow-auto\"><code class=\"mt-[-17px] text-sm block leading-[1.13rem] language-fsharp text-white\">[&lt;JavaScript&gt;]\r\nmodule Client =\r\n    type IndexTemplate = Template&lt;\"wwwroot/index.html\", ClientLoad.FromDocument&gt;\r\n\r\n    let People =\r\n        ListModel.FromSeq [\r\n            \"John\"\r\n            \"Paul\"\r\n        ]\r\n\r\n    [&lt;SPAEntryPoint&gt;]\r\n    let Main () =\r\n        let newName = Var.Create \"\"\r\n        IndexTemplate.Main()\r\n            .ListContainer(\r\n                People.View.DocSeqCached(fun (name: string) -> \r\n                    IndexTemplate.ListItem().Name(name).Doc()\r\n                )\r\n            )\r\n            .Name(newName)\r\n            .Add(fun _ ->\r\n                People.Add(newName.Value)\r\n                newName.Value &lt;- \"\"\r\n            )\r\n            .Doc()\r\n        |> Doc.RunById \"main\"</code></pre>\r\n                                            </div>\r\n                                            <div class=\"absolute inset-0 hidden overflow-hidden custom-scrollbar\" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"html\">\r\n                                                <pre class=\"line-numbers -mb-20 !overflow-auto language-html custom-scrollbar\"><code class=\"mt-[-17px] text-sm block leading-[1.13rem] language-html text-white\">&lt;!DOCTYPE html&gt;\r\n&lt;html lang=\"en\"&gt;\r\n&lt;head&gt;\r\n    &lt;title&gt;spa_websharper&lt;/title&gt;\r\n    &lt;meta charset=\"utf-8\" /&gt;\r\n    &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /&gt;\r\n    &lt;link rel=\"stylesheet\" type=\"text/css\" href=\"Scripts/spa-websharper.css\" /&gt;\r\n    &lt;style&gt;\r\n        /* Don't show the not-yet-loaded templates */\r\n        [ws-template], [ws-children-template] { display: none; }\r\n    &lt;/style&gt;\r\n    &lt;script type=\"text/javascript\" src=\"Scripts/spa-websharper.head.js\"&gt;&lt;/script&gt;\r\n&lt;/head&gt;\r\n&lt;body&gt;\r\n    &lt;h1&gt;My list of unique people&lt;/h1&gt;\r\n    &lt;div id=\"main\" ws-children-template=\"Main\"&gt;\r\n        &lt;ul ws-hole=\"ListContainer\"&gt;\r\n            &lt;li ws-template=\"ListItem\"&gt;${Name}&lt;/li&gt;\r\n        &lt;/ul&gt;\r\n        &lt;div&gt;\r\n            &lt;input ws-var=\"Name\" placeholder=\"Name\" /&gt;\r\n            &lt;button ws-onclick=\"Add\"&gt;Add&lt;/button&gt;\r\n            &lt;div&gt;You are about to add: ${Name}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;script type=\"module\" src=\"Scripts/spa-websharper.min.js\"&gt;&lt;/script&gt;\r\n&lt;/body&gt;\r\n&lt;/html&gt;</code></pre>\r\n                                            </div>\r\n                                            <div class=\"absolute inset-0 hidden overflow-hidden\" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"code-result\">\r\n                                                <iframe src=\"/snippets/spa/index.html\" class=\"w-full h-full pr-2 mr-4 rounded-md bg-white\" frameborder=\"0\"></iframe>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"lg:col-span-3 bg-white/90 dark:bg-gray-900 shadow-2xl shadow-gray-950/5 dark:shadow-gray-950/15 border border-gray-300/50 dark:border-gray-800 p-3 lg:rounded-br-3xl\">\r\n                                        <span class=\"border-b border-brand-secondary pb-1 text-xs font-medium tracking-wide text-gray-500 dark:text-white\">Terminal</span>\r\n                                        <div class=\"mt-3 w-max font-mono text-xs text-gray-400 dark:text-white/60\">\r\n                                            <div class=\"text-green-500 font-bold\">\r\n                                                VITE <span class=\"text-green-500 font-normal\">v6.3.5</span>\r\n                                                <span class=\"text-gray-400 font-normal\"> ready in </span>\r\n                                                <span class=\"dark:text-white text-gray-300\">663</span>\r\n                                                <span class=\"text-gray-300\"> ms</span>\r\n                                            </div>\r\n                                            <div class=\"text-green-500 mt-2\">\r\n                                                \u279c <span class=\"dark:text-white text-gray-300\">Local:</span>\r\n                                                <a href=\"#code-snippet\" class=\"text-sky-400 underline ml-2\">http://localhost:24347/</a>\r\n                                            </div>\r\n                                            <div class=\"text-green-400 mt-1\">\r\n                                                \u279c <span class=\"text-gray-400\">Network:</span>\r\n                                                <span class=\"text-gray-400\"> use </span><span class=\"dark:text-white text-gray-300 font-bold\">--host</span>\r\n                                                <span class=\"text-gray-400\"> to expose</span>\r\n                                            </div>\r\n                                            <div class=\"text-green-400 mt-1\">\r\n                                                \u279c <span class=\"text-gray-400\">press </span><span class=\"dark:text-white text-gray-300 font-bold\">h</span>\r\n                                                <span class=\"text-gray-400\"> + </span><span class=\"dark:text-white text-gray-300 font-bold\">enter</span>\r\n                                                <span class=\"text-gray-400\"> to show help</span>\r\n                                            </div>\r\n                                            <span class=\"dark:text-white text-gray-300\">\u2588</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Shaded background color -->\r\n                <div class=\"dark:hidden absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]\"></div>\r\n                <div class=\"hidden dark:block absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.900/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.900/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]\"></div>\r\n                <div class=\"absolute h-96 inset-x-[10%] -bottom-[20%] my-auto hidden dark:block\">\r\n                    <div aria-hidden=\"true\" class=\"grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl\">\r\n                        <!--background colors here -->\r\n                        <div class=\"h-72 bg-gradient-to-br from-pink-400 to-purple-400 blur-3xl dark:from-blue-800\"></div>\r\n                        <div class=\"h-96 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-sky-950\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"overflow-hidden mt-16 lg:mt-0\">\r\n                <div class=\"relative space-y-12\">\r\n                    <p class=\"text-center text-gray-950 dark:text-white\">Trusted by fast-growing companies around the world</p>\r\n                    <div class=\"max-w-4xl mx-auto\">\r\n                        <div class=\"flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/mcgraw.png\" alt=\"\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/ford.png\" alt=\"\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/microsoft.png\" alt=\"\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/elte.png\" alt=\"\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/unmc.png\" alt=\"\">\r\n                            <img class=\"h-7 w-fit dark:invert dark:brightness-50\" src=\"https://websharper.com/assets/companies/duf.png\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"mx-auto text-center sm:w-2/3 lg:w-1/2\">\r\n                    <h2 class=\"text-3xl font-bold text-gray-800 dark:text-white\">Functional, reactive applications with WebSharper.UI</h2>\r\n                    <p class=\"mt-6 text-gray-500 dark:text-gray-200\">Bind composite data models to your reactive user interfaces. The flow of reactive values through the code yet concise, readability.</p>\r\n                    <div class=\"mt-6 flex justify-center\">\r\n                        <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                            <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\">Learn more</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"relative mt-16\">\r\n                    <div class=\"relative z-10 border dark:border-gray-800 rounded-xl dark:bg-transparent dark:p-px\">\r\n                        <div data-name=\"snippet\" class=\"rounded-[23px] text-sm backdrop-blur-3xl\">\r\n                            <div class=\"flex items-center gap-4 rounded-t-xl px-4 py-2 dark:bg-gray-950\">\r\n                                <div class=\"flex space-x-1.5\">\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                </div>\r\n\r\n                                <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                    <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                            <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                            <defs id=\"defs2\"></defs>\r\n                                            <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                            </g>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">AddTwoNumbers.fs</span>\r\n                                    </button>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"js\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                            <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">addTwoNumbers.js</span>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"relative rounded-b-xl bg-gray-200/10 text-xs dark:mt-px dark:bg-gray-950\">\r\n                                <div class=\"flex p-4 pl-2 overflow-hidden\">\r\n                                    <div class=\"sm:pr-4\">\r\n                                        <pre aria-hidden=\"true\" class=\"line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40\"></pre>\r\n                                    </div>\r\n                                    <div class=\"relative w-full snippet-code\">\r\n                                        <div class=\"relative transition-all duration-1000 custom-scrollbar max-w-full overflow-y-hidden pr-0 sm:pr-[52%] lg:pr-[46.8%]\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                            <pre class=\"line-numbers language-fsharp inline-block min-w-max\"><code class=\"mt-[-17px] block md:leading-[1.13rem] language-fsharp text-white\">let x = Var.Create 1\r\nlet y = Var.Create 1\r\n\r\nlet addNumbers =\r\n    div [] [\r\n        p [] [text \"x \"; Doc.InputType.IntUnchecked [] x]\r\n        p [] [text \"y \"; Doc.InputType.IntUnchecked [] y]\r\n        p [] [\r\n            textView (View.Map2 (fun x y -> $\"x + y = {x + y}\") x.View y.View)\r\n        ]\r\n    ]\r\n\r\naddNumbers |> Doc.RunById \"main\"</code></pre>\r\n                                        </div>\r\n                                        <div class=\"absolute inset-0 hidden transition-all duration-1000 custom-scrollbar\" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                            <pre class=\"-mb-20 line-numbers language-js\"><code class=\"block mt-[-17px] leading-[1.13rem] language-js text-white\">let x = 1;\r\nlet y = 1;\r\n\r\nconst inputX = document.createElement(\"input\");\r\ninputX.type = \"number\";\r\ninputX.value = x;\r\n\r\nconst inputY = document.createElement(\"input\");\r\ninputY.type = \"number\";\r\ninputY.value = y;\r\n\r\nconst pX = document.createElement(\"p\");\r\npX.textContent = \"x: \";\r\npX.appendChild(inputX);\r\n\r\nconst pY = document.createElement(\"p\");\r\npY.textContent = \"y: \";\r\npY.appendChild(inputY);\r\n\r\nconst result = document.createElement(\"p\");\r\nfunction updateSum() {\r\n    const xVal = parseFloat(inputX.value) || 0;\r\n    const yVal = parseFloat(inputY.value) || 0;\r\n    result.textContent = \"x + y = \" + (xVal + yVal);\r\n}\r\nupdateSum();\r\n\r\ninputX.addEventListener(\"input\", updateSum);\r\ninputY.addEventListener(\"input\", updateSum);\r\n\r\nconst main = document.getElementById(\"main\");\r\nmain.appendChild(pX);\r\nmain.appendChild(pY);\r\nmain.appendChild(result);</code></pre>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"relative z-10 -mt-12 scale-105 rounded-xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/30 dark:border-white/5 dark:bg-gray-900 dark:shadow-black/40 sm:absolute sm:-inset-y-9 sm:-right-0 sm:mt-0 sm:w-1/2 sm:scale-100 lg:w-[46.8%]\">\r\n                        <div class=\"h-full w-full rounded-xl\">\r\n                            <div class=\"relative flex items-center gap-4 rounded-t-xl bg-white py-1 pl-4 pr-1 dark:bg-gray-900/20\">\r\n                                <div class=\"absolute inset-y-0 my-auto flex h-max space-x-1.5\">\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                </div>\r\n\r\n                                <div class=\"mx-auto flex w-2/3 cursor-text items-center gap-1.5 rounded-lg bg-gray-100 p-1.5 px-2 dark:bg-black/30\">\r\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-4 w-4 text-gray-300 dark:text-gray-300/40\">\r\n                                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\"></path>\r\n                                    </svg>\r\n\r\n                                    <span class=\"text-xs text-gray-500 dark:text-gray-200\">Search </span>\r\n                                </div>\r\n                            </div>\r\n                            <iframe class=\"themed-iframe w-full h-full bg-transparent\" frameborder=\"0\" data-src=\"/snippets/add_two_numbers/index.html\" src=\"/snippets/add_two_numbers/index.html\"></iframe>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"relative lg:flex\">\r\n                    <div class=\"sticky top-[33%] mb-16 mt-24 hidden h-max justify-end lg:flex lg:w-[10rem] xl:w-[6rem]\">\r\n                        <div class=\"sticky top-32 ml-auto flex flex-col items-end space-y-4\">\r\n                            <a href=\"#mvu\" data-step=\"mvu\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Model-View-Update</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#react\" data-step=\"react\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">React Components</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#webapi\" data-step=\"webapi\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Web APIs</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#csr\" data-step=\"csr\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Client-side routing</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#lc\" data-step=\"lc\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Language constructs</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#tsh\" data-step=\"tsh\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Type-safe HTML</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <a href=\"#rwe\" data-step=\"rwe\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                                <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Remoting with ease</span>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                            </a>\r\n                            <!-- <a href=\"#puia\" data-step=\"puia\" class=\"section-link group flex w-max items-center justify-end gap-3\">\r\n                            <span class=\"block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white\">Powerful UI abstractions</span>\r\n                            <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30\"></div>\r\n                        </a> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"lg:w-[calc(100%-6rem)] ml-auto\">\r\n                        <div id=\"mvu\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Model-View-Update architecture with WebSharper.Mvu</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">Structure client-side applications with clear separation of concerns between logic and display. Based on WebSharper.UI, Mvu brings Elm-like architecture to WebSharper.</p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" ws-onclick=\"OnTabClick\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">NameInput.fs</span>\r\n                                                </button>\r\n                                                <button role=\"tab\" aria-selected=\"false\" data-target=\"js\" ws-onclick=\"OnTabClick\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                        <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                        <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">nameInput.js</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">type Model = { name: string }\r\nlet InitModel = { name = \"\" }\r\n\r\ntype Message =\r\n    | SetName of string\r\n\r\nlet Update message model =\r\n    match message with\r\n    | SetName n -> { model with name = n }\r\n\r\nlet View dispatch (view: View<model>) =\r\n    div [] [\r\n        input [\r\n            attr.value view.V.name\r\n            on.change (fun el _ ->\r\n                dispatch (SetName el?value))\r\n        ] []\r\n    ]\r\n\r\nlet Main = App.CreateSimple InitModel Update View |> App.Run</model></code></pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max h-max\" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-js\">let model = { name: \"\" };\r\n\r\nfunction update(message) {\r\n    if (message.type === \"SetName\") {\r\n    model.name = message.value;\r\n    render(); \r\n    }\r\n}\r\n\r\nfunction render() {\r\n    const main = document.getElementById(\"main\");\r\n    main.innerHTML = \"\"; \r\n\r\n    const input = document.createElement(\"input\");\r\n    input.value = model.name;\r\n    input.addEventListener(\"input\", (e) => {\r\n    update({ type: \"SetName\", value: e.target.value });\r\n    });\r\n\r\n    main.appendChild(input);\r\n}\r\n\r\nrender();</code></pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"react\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Build React components</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">You can also use widespread libraries such as React to build applications. The syntax is as convenient as JSX, with the added benefit of strong typing.</p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">Person.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"js\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                        <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                        <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">Person.js</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">type Person = { name: string; age: int }\r\n\r\ntype ShowPerson(props) =\r\n    inherit React.Component<person, unit=\"\">(props)\r\n\r\n    override this.Render() =\r\n        ul [attr.className \"person\"] [\r\n            li [] [text (\"Name: \" + this.Props.name)]\r\n            li [] [text (\"Age: \" + string this.Props.age)]\r\n        ]                                                                \r\n                                                            </person,></code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-js\">import React from \"react\";\r\n\r\nfunction ShowPerson(props) {\r\n    return (\r\n        Name: {props.name}\r\n        Age: {props.age}\r\n    );\r\n}\r\n\r\n// Example usage:\r\n// &lt;ShowPerson name=\"Alice\" age={30} /&gt;\r\n                                                            </code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"webapi\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Web APIs and server-side JSON and HTML</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">\r\n                                    Declare your URLs as a C# or F# endpoint type, and WebSharper handles the dispatch. Create safe internal links from endpoint values.\r\n\r\n                                    <br><br>You can share the same rendering code and templates between the server and the client.\r\n\r\n                                    <br><br>Automatically parse JSON requests and generate JSON responses based on your types.\r\n                                </p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">ArticleSite.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"html\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 48 48\">\r\n                                                        <path fill=\"#E65100\" d=\"M41,5H7l3,34l14,4l14-4L41,5L41,5z\"></path>\r\n                                                        <path fill=\"#FF6D00\" d=\"M24 8L24 39.9 35.2 36.7 37.7 8z\"></path>\r\n                                                        <path fill=\"#FFF\" d=\"M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z\"></path>\r\n                                                        <path fill=\"#EEE\" d=\"M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">articles.html</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"json\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-4 w-4\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 32 32\"><path d=\"M4.014,14.976a2.51,2.51,0,0,0,1.567-.518A2.377,2.377,0,0,0,6.386,13.1,15.261,15.261,0,0,0,6.6,10.156q.012-2.085.075-2.747a5.236,5.236,0,0,1,.418-1.686,3.025,3.025,0,0,1,.755-1.018A3.046,3.046,0,0,1,9,4.125,6.762,6.762,0,0,1,10.544,4h.7V5.96h-.387a2.338,2.338,0,0,0-1.723.468A3.4,3.4,0,0,0,8.709,8.52a36.054,36.054,0,0,1-.137,4.133,4.734,4.734,0,0,1-.768,2.06A4.567,4.567,0,0,1,6.1,16a3.809,3.809,0,0,1,1.992,1.754,8.861,8.861,0,0,1,.618,3.865q0,2.435.05,2.9A1.755,1.755,0,0,0,9.264,25.7a2.639,2.639,0,0,0,1.592.337h.387V28h-.7a5.655,5.655,0,0,1-1.773-.2,2.97,2.97,0,0,1-1.324-.93,3.353,3.353,0,0,1-.681-1.63A24.175,24.175,0,0,1,6.6,22.006,16.469,16.469,0,0,0,6.386,18.9a2.408,2.408,0,0,0-.805-1.361,2.489,2.489,0,0,0-1.567-.524Z\" style=\"fill:#f5de19\"></path><path d=\"M27.986,17.011a2.489,2.489,0,0,0-1.567.524,2.408,2.408,0,0,0-.805,1.361,16.469,16.469,0,0,0-.212,3.109,24.175,24.175,0,0,1-.169,3.234,3.353,3.353,0,0,1-.681,1.63,2.97,2.97,0,0,1-1.324.93,5.655,5.655,0,0,1-1.773.2h-.7V26.04h.387a2.639,2.639,0,0,0,1.592-.337,1.755,1.755,0,0,0,.506-1.186q.05-.462.05-2.9a8.861,8.861,0,0,1,.618-3.865A3.809,3.809,0,0,1,25.9,16a4.567,4.567,0,0,1-1.7-1.286,4.734,4.734,0,0,1-.768-2.06,36.054,36.054,0,0,1-.137-4.133,3.4,3.4,0,0,0-.425-2.092,2.338,2.338,0,0,0-1.723-.468h-.387V4h.7A6.762,6.762,0,0,1,23,4.125a3.046,3.046,0,0,1,1.149.581,3.025,3.025,0,0,1,.755,1.018,5.236,5.236,0,0,1,.418,1.686q.062.662.075,2.747a15.261,15.261,0,0,0,.212,2.947,2.377,2.377,0,0,0,.805,1.355,2.51,2.51,0,0,0,1.567.518Z\" style=\"fill:#f5de19\"></path></svg>\r\n                                                    <span class=\"text-xs\">articleWithId.json</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">// Define the application's endpoints\r\ntype EndPoint =\r\n    | [&lt;EndPoint \"GET /articles\"&gt;]\r\n        ArticleList\r\n    | [&lt;EndPoint \"GET /article\"&gt;]\r\n        Article of id: int\r\n\r\n// Define the content served by these endpoints\r\nlet Website =\r\n    Application.MultiPage (fun (ctx: Context&lt;_&gt;) endpoint -&gt;\r\n        match endpoint with\r\n        | ArticleList -&gt;\r\n            Content.Page(\r\n                div [] [\r\n                    h1 [] [text \"Welcome!\"]\r\n                    a [attr.href (ctx.Link (Article 42))] [\r\n                        text \"Go to article 42\"\r\n                    ]\r\n                ]\r\n            )\r\n        | Article id -&gt;\r\n            Content.Json { id = id\r\n                            title = \"Hello!\"\r\n                            date = System.DateTime.Now }\r\n    )</code></pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"html\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-html\">&lt;!-- /articles endpoint --&gt;\r\n&lt;div&gt;\r\n  &lt;h1&gt;Welcome!&lt;/h1&gt;\r\n  &lt;a href=&quot;/article/42&quot;&gt;Go to article 42&lt;/a&gt;\r\n&lt;/div&gt;\r\n</code></pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-3\" data-lang=\"json\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-html\">{\r\n  \"date\": \"2025-10-01T13:50:44.3596542+02:00\",\r\n  \"id\": 42,\r\n  \"title\": \"Hello!\"\r\n}\r\n</code></pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"csr\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Client-side routing</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">Write SPAs with the same routing API on the client side as you would use on the server side.</p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">ArticleRouter.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"js\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                        <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                        <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">articleRouter.js</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">let router = Router.Infer&lt;EndPoint&gt;()\r\nlet route = router.Install(Article 1)\r\n\r\nlet view =\r\n    route.View.Map (function\r\n        | Article id -&gt;\r\n            div [] [\r\n                h1 [] [text $\"This is article {id}\"]\r\n                a [attr.href (router.Link Articles)] [text \"Go back to the list of articles\"]\r\n            ]\r\n        | Articles -&gt;\r\n            h1 [] [text \"List of articles\"]\r\n    )\r\n\r\nlet doc = Doc.BindView id view\r\nDoc.RunById \"main\" doc</code></pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-js\">// Simulated router and state\r\nconst router = {\r\n    currentRoute: { type: \"Articles\" },\r\n    link: (route) => {\r\n    if (route.type === \"Articles\") return \"/articles\";\r\n    if (route.type === \"Article\") return `/article/${route.id}`;\r\n    }\r\n};\r\n\r\n// Render function\r\nfunction render(route) {\r\n    const main = document.getElementById(\"main\");\r\n    main.innerHTML = \"\"; \r\n\r\n    if (route.type === \"Article\") {\r\n    const divEl = document.createElement(\"div\");\r\n\r\n    const h1El = document.createElement(\"h1\");\r\n    h1El.textContent = `This is article ${route.id}`;\r\n\r\n    const link = document.createElement(\"a\");\r\n    link.href = router.link({ type: \"Articles\" });\r\n    link.textContent = \"Go back to the list of articles\";\r\n\r\n    divEl.appendChild(h1El);\r\n    divEl.appendChild(link);\r\n    main.appendChild(divEl);\r\n    } else {\r\n    const h1El = document.createElement(\"h1\");\r\n    h1El.textContent = \"List of articles\";\r\n    main.appendChild(h1El);\r\n    }\r\n}\r\n\r\n// Initial render\r\nrender(router.currentRoute);</code></pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"lc\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Use powerful language constructs on the client side</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">\r\n                                    F#: Query expressions, async workflows, sequence expressions...\r\n\r\n\r\n                                    <br><br>C#: LINQ queries, asynchronous Tasks, generators...\r\n                                </p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">query.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"csharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-4 w-4\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 128 128\"><path fill=\"#9B4F96\" d=\"M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z\"></path><path fill=\"#68217A\" d=\"M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z\"></path><path fill=\"#fff\" d=\"M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z\"></path></svg>\r\n                                                    <span class=\"text-xs\">query.cs</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"overflow-hidden p-4 pt-0\"><code class=\"w-max overflow-hidden language-fsharp\">type Article = { id: int; title: string; date: DateTime }\r\n\r\nlet start = DateTime(2025, 9, 1)\r\n\r\nlet articles : Article list = [\r\n    { id = 1; title = \"Welcome to WebSharper\"; date = DateTime(2025, 9, 20) }\r\n    { id = 2; title = \"Async workflows 101\"; date = DateTime(2025, 8, 15) }\r\n    { id = 3; title = \"Query expressions on client\"; date = DateTime(2025, 9, 28) }\r\n    { id = 4; title = \"Remoting tips\"; date = DateTime(2025, 7, 5)  }\r\n]\r\n// Query expressions (LINQ for F#)\r\nlet recentIds =\r\n    query {\r\n        for article in articles do\r\n        where (article.date > start)\r\n        sortByDescending article.date\r\n        select article.id\r\n    }\r\n// Async workflows (run non-blocking work on the client)\r\nlet loadAndShow =\r\n    async {\r\n        do! Async.Sleep 10\r\n        Console.Log(sprintf \"Recent IDs: %A\" (recentIds |> Seq.toList))\r\n    }    \r\n\r\nAsync.Start loadAndShow\r\n\r\n// Sequence expressions (lazy generators)\r\nlet squares =\r\n    seq {\r\n        for i in 1 .. 5 do\r\n            yield i * i\r\n    }   \r\n    \r\nConsole.Log(String.concat \", \" (squares |> Seq.map string))</code></pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"csharp\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-csharp\">public record Article(int Id, string Title, DateTime Date);\r\n// Async/await with Task (supported on client)\r\npublic static async Task LoadAndShowAsync(IEnumerable&lt;int&gt; recentIds)\r\n{\r\n    await Task.Delay(10);\r\n    JS.Console.Log($&quot;Recent IDs: {string.Join(&quot;, &quot;, recentIds.Select(i =&gt; i.ToString()))}&quot;);\r\n}\r\n// Iterator (yield)\r\npublic static IEnumerable&lt;int&gt; Squares()\r\n{\r\n    for (var i = 1; i &lt;= 5; i++)\r\n        yield return i * i;\r\n}\r\npublic static void Main()\r\n{\r\n    var start = new DateTime(2025, 9, 1);\r\n\r\n    var articles = new List&lt;Article&gt;\r\n        {\r\n            new(1, &quot;Welcome to WebSharper&quot;, new DateTime(2025, 9, 20)),\r\n            new(2, &quot;Async workflows 101&quot;, new DateTime(2025, 8, 15)),\r\n            new(3, &quot;Query expressions on client&quot;, new DateTime(2025, 9, 28)),\r\n            new(4, &quot;Remoting tips&quot;, new DateTime(2025, 7, 5)),\r\n        };\r\n\r\n    // LINQ query\r\n    var recentIds =\r\n        from article in articles\r\n        where article.Date &gt; start\r\n        orderby article.Date descending\r\n        select article.Id;\r\n\r\n    LoadAndShowAsync(recentIds);\r\n\r\n    JS.Console.Log(string.Join(&quot;, &quot;, Squares().Select(i =&gt; i.ToString())));\r\n}</code></pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tsh\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Type-safe HTML templating</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">\r\n                                    Use HTML templates to keep your logic and UI clearly separate and facilitate the collaboration between programmers and designers.\r\n                                </p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">Client.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"html\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"w-4 h-4 text-gray-800 dark:text-white\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewbox=\"0 0 24 24\">\r\n                                                        <path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">index.html</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">IndexTemplate.Main()\r\n    .Name(newName)\r\n    .Add(fun _ -&gt;\r\n        People.Add(newName.Value)\r\n        newName.Value &lt;- \"\"\r\n    )\r\n    .Remove(fun _ -&gt; \r\n        People.Remove newName.Value                                                            \r\n    ) \r\n    .Doc()\r\n                                                            </code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"html\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-html\">&lt;h1&gt;My list of unique people&lt;/h1&gt;\r\n&lt;div ws-children-template=\"Main\"&gt;\r\n    &lt;input ws-var=\"Name\" /&gt;\r\n    &lt;button ws-onclick=\"Add\"&gt;Add&lt;/button&gt;\r\n    &lt;button ws-onclick=\"Remove\"&gt;Remove&lt;/button&gt;\r\n&lt;/div&gt;\r\n                                                            </code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"rwe\" class=\"section py-16 md:flex\">\r\n                            <div class=\"w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12\">\r\n                                <h3 class=\"text-2xl font-bold text-gray-700 dark:text-white\">Remoting with ease</h3>\r\n                                <p class=\"mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12\">\r\n                                    Seamlessly call server-side asynchronous functions from the client side.\r\n\r\n                                    <br><br>AJAX call, JSON serialization... Everything is handled automatically.\r\n                                </p>\r\n                                <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                                    <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\"> Learn more </span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"mt-8 ml-auto w-full md:mt-0 md:w-1/2\">\r\n                                <div data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                                            <div class=\"flex space-x-1.5\">\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                            </div>\r\n\r\n                                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                                        <defs id=\"defs2\"></defs>\r\n                                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                        </g>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">RemoteCall.fs</span>\r\n                                                </button>\r\n                                                <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"js\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                                    <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                        <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                        <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                                    </svg>\r\n                                                    <span class=\"text-xs\">remoteCall.js</span>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">// Server-side, remote-callable function\r\n[&lt;Remote&gt;]\r\nlet ServerFn () : Async&lt;string&gt; =\r\n    async { return \"Hello, world!\" }\r\n\r\n// Client-side function\r\n[&lt;JavaScript&gt;]\r\nlet CallServer () : unit =\r\n    async {\r\n        let! result = ServerFn()\r\n        Console.Log(result)\r\n    }\r\n    |> Async.Start\r\n                                                            </code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                                <div class=\"absolute inset-0 hidden w-max \" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                                    <pre class=\"w-max p-4 pt-0\"><code class=\"w-max language-js\">// Server-side\r\nexport function ServerFn(){\r\n  return Bind((new AjaxRemotingProvider()).Async(\"Server/ServerFn\", []), (o) => Return(o));\r\n}\r\n\r\n// Client-side\r\nasync function CallServer() {\r\n  const r = await fetch(\"/Server/ServerFn\", {\r\n    method: \"POST\",\r\n    headers: { \"Content-Type\": \"application/json\" }\r\n  });\r\n  const result = await r.json();   // -> \"Hello, world!\"\r\n  console.log(result);\r\n}\r\nCallServer();\r\n                                                            </code>\r\n                                                        </pre>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"mt-8 md:w-2/3 lg:w-1/2\">\r\n                    <h2 class=\"text-3xl font-bold text-gray-700 dark:text-white\">Powerful UI abstractions</h2>\r\n                    <p class=\"mt-6 text-gray-500 dark:text-gray-200\">Declare full interactive forms in just a few lines of code with WebSharper Forms.</p>\r\n                    <div class=\"mt-6\">\r\n                        <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                            <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\">Learn more</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"relative mt-16\">\r\n                    <div class=\"relative z-10 border dark:border-gray-800 rounded-xl dark:bg-transparent dark:p-px\">\r\n                        <div data-name=\"snippet\" class=\"rounded-[23px] text-sm backdrop-blur-3xl\">\r\n                            <div class=\"flex items-center gap-4 rounded-t-xl px-4 py-2 dark:bg-gray-950\">\r\n                                <div class=\"flex space-x-1.5\">\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                </div>\r\n\r\n                                <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                    <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                            <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                            <defs id=\"defs2\"></defs>\r\n                                            <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                                <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                                <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                            </g>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">Forms.fs</span>\r\n                                    </button>\r\n                                    <button ws-onclick=\"OnTabClick\" role=\"tab\" aria-selected=\"false\" data-target=\"js\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                        <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                            <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                        </svg>\r\n                                        <span class=\"text-xs\">forms.js</span>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"relative rounded-b-xl bg-gray-200/10 text-xs dark:mt-px dark:bg-gray-950\">\r\n                                <div class=\"flex p-4 pl-2\">\r\n                                    <div class=\"sm:pr-4\">\r\n                                        <div aria-hidden=\"true\" class=\"line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40\"></div>\r\n                                    </div>\r\n                                    <div class=\"relative w-full snippet-code\">\r\n                                        <div class=\"relative transition-all duration-1000 custom-scrollbar max-w-full overflow-y-hidden pr-0 sm:pr-[52%] lg:pr-[46.8%]\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                            <pre class=\"-mb-20 !overflow-auto line-numbers language-fsharp inline-block min-w-max\"><code class=\"mt-[-14px] block md:leading-[1.13rem] language-fsharp text-white\">let LoginForm () =\r\n    Form.Return (fun user pass -> user, pass)\r\n    &lt;*&gt; (Form.Yield \"\"\r\n        |&gt; Validation.IsNotEmpty \"Must enter a username\")\r\n    &lt;*&gt; (Form.Yield \"\"\r\n        |&gt; Validation.IsNotEmpty \"Must enter a password\")\r\n    |&gt; Form.WithSubmit\r\n    |&gt; Form.Run (fun (u, p) -&gt;\r\n        JS.Alert(\"Welcome, \" + u + \"!\")\r\n    )\r\n    |&gt; Form.Render (fun user pass submit -&gt;\r\n        form [] [\r\n            div [] [label [] [text \"Username: \"]; Doc.InputType.Text [] user]\r\n            div [] [label [] [text \"Password: \"]; Doc.InputType.Password [] pass]\r\n            Doc.Button \"Log in\" [] submit.Trigger\r\n            div [] [\r\n                Doc.ShowErrors submit.View (fun errors -&gt;\r\n                    errors\r\n                    |&gt; Seq.map (fun m -&gt; p [] [text m.Text])\r\n                    |&gt; Doc.Concat)\r\n            ]\r\n        ]\r\n    )\r\n    \r\nLoginForm() |&gt; Doc.RunById \"main\"</code></pre>\r\n                                        </div>\r\n                                        <div class=\"absolute inset-0 hidden transition-all duration-1000 custom-scrollbar\" role=\"tabpanel\" aria-labelledby=\"tab-2\" data-lang=\"js\">\r\n                                            <pre class=\"-mb-20 !overflow-auto line-numbers language-js\"><code class=\"block leading-[1.13rem] mt-[-14px] language-js text-white\">function createLoginForm() {\r\n    const main = document.getElementById(\"main\");\r\n\r\n    const form = document.createElement(\"form\");\r\n\r\n    // Username field\r\n    const usernameDiv = document.createElement(\"div\");\r\n    const usernameLabel = document.createElement(\"label\");\r\n    usernameLabel.textContent = \"Username: \";\r\n    const usernameInput = document.createElement(\"input\");\r\n    usernameInput.type = \"text\";\r\n    usernameInput.required = true;\r\n    usernameDiv.appendChild(usernameLabel);\r\n    usernameDiv.appendChild(usernameInput);\r\n\r\n    // Password field\r\n    const passwordDiv = document.createElement(\"div\");\r\n    const passwordLabel = document.createElement(\"label\");\r\n    passwordLabel.textContent = \"Password: \";\r\n    const passwordInput = document.createElement(\"input\");\r\n    passwordInput.type = \"password\";\r\n    passwordInput.required = true;\r\n    passwordDiv.appendChild(passwordLabel);\r\n    passwordDiv.appendChild(passwordInput);\r\n\r\n    // Submit button\r\n    const button = document.createElement(\"button\");\r\n    button.type = \"submit\";\r\n    button.textContent = \"Log in\";\r\n\r\n    // Error messages\r\n    const errorDiv = document.createElement(\"div\");\r\n\r\n    // Form submit handler\r\n    form.addEventListener(\"submit\", function (e) {\r\n        e.preventDefault(); // Prevent actual submission\r\n        errorDiv.innerHTML = \"\"; // Clear errors\r\n\r\n        const username = usernameInput.value.trim();\r\n        const password = passwordInput.value.trim();\r\n\r\n        const errors = [];\r\n\r\n        if (!username) errors.push(\"Must enter a username\");\r\n        if (!password) errors.push(\"Must enter a password\");\r\n\r\n        if (errors.length > 0) {\r\n            errors.forEach(msg => {\r\n                const p = document.createElement(\"p\");\r\n                p.className = \"error\";\r\n                p.textContent = msg;\r\n                errorDiv.appendChild(p);\r\n            });\r\n        } else {\r\n            alert(\"Welcome, \" + username + \"!\");\r\n        }\r\n    });\r\n\r\n    // Assemble form\r\n    form.appendChild(usernameDiv);\r\n    form.appendChild(passwordDiv);\r\n    form.appendChild(button);\r\n    form.appendChild(errorDiv);\r\n\r\n    main.appendChild(form);\r\n}\r\n\r\ncreateLoginForm();</code></pre>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"relative z-10 -mt-12 scale-105 rounded-xl border border-gray-200 bg-white shadow-lg shadow-gray-200/30 dark:border-white/5 dark:bg-gray-900 dark:shadow-black/40 sm:absolute sm:-inset-y-9 sm:-right-0 sm:mt-0 sm:w-1/2 sm:scale-100 lg:w-[46.8%]\">\r\n                        <div class=\"h-full w-full rounded-xl\">\r\n                            <div class=\"relative flex items-center gap-4 rounded-t-xl bg-white py-1 pl-4 pr-1 dark:bg-gray-900/20\">\r\n                                <div class=\"absolute inset-y-0 my-auto flex h-max space-x-1.5\">\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                    <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                </div>\r\n\r\n                                <div class=\"mx-auto flex w-2/3 cursor-text items-center gap-1.5 rounded-lg bg-gray-100 p-1.5 px-2 dark:bg-black/30\">\r\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-4 w-4 text-gray-300 dark:text-gray-300/40\">\r\n                                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\"></path>\r\n                                    </svg>\r\n\r\n                                    <span class=\"text-xs text-gray-500 dark:text-gray-200\">Search </span>\r\n                                </div>\r\n                            </div>\r\n                            <iframe class=\"themed-iframe w-full h-full bg-transparent\" frameborder=\"0\" data-src=\"/snippets/forms/index.html\" src=\"/snippets/forms/index.html\"></iframe>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 lg:pt-12 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"md:w-2/3 lg:w-1/2\">\r\n                    <h2 class=\"text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-3xl\">Web Workers without hassle</h2>\r\n                    <p class=\"mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300\">\r\n                        Write client-side parallel code directly in your code.\r\n\r\n                        <br><br>The compiler automatically creates the separate trimmed JavaScript file for the web worker.\r\n                    </p>\r\n                    <div class=\"mt-6\">\r\n                        <a href=\"https://docs.websharper.com/\" class=\"disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20\">\r\n                            <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\">Learn more</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"relative z-10 mt-16 rounded-3xl border border-gray-300/10 bg-gray-200/10 dark:border-0 dark:bg-white/10 dark:p-px\">\r\n                    <div class=\"rounded-3xl bg-white shadow-xl pr-3 pb-2 text-sm backdrop-blur-3xl dark:bg-gray-950 md:ml-0 md:pr-0\">\r\n                        <div class=\"flex items-center gap-4 px-6 py-2\">\r\n                            <div class=\"flex space-x-1.5\">\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                            </div>\r\n\r\n                            <div class=\"flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                    <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                    <defs id=\"defs2\"></defs>\r\n                                    <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                        <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                        <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                        <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                    </g>\r\n                                </svg>\r\n                                <span class=\"text-xs text-gray-500 dark:text-white/70\">Worker.fs</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"relative sm:flex\">\r\n                            <div class=\"absolute ml-1 flex h-full w-14 flex-none flex-col items-center justify-between py-3 text-gray-500 dark:text-white/60\">\r\n                                <svg width=\"24\" height=\"216\" fill=\"none\">\r\n                                    <path d=\"M3 69l6-6m-2-5a7 7 0 1014 0 7 7 0 00-14 0z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                    <path d=\"M8 7H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-3m3.707-10.293l-3.414-3.414A1 1 0 0015.586 3H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7.414a1 1 0 00-.293-.707zM7 103a2 2 0 100-4 2 2 0 000 4zm0 0v10m10-6a2 2 0 100-4 2 2 0 000 4zm0 0a3 3 0 01-3 3h-4a3 3 0 00-3 3m0 0a2 2 0 100 4 2 2 0 000-4z\" stroke=\"currentColor\" stroke-width=\"1.5\"></path>\r\n                                    <path d=\"M11.5 160.031a.75.75 0 00-1-1.118l1 1.118zm-8-1.118a.75.75 0 00-1 1.118l1-1.118zm6.972 6.149a.75.75 0 10.993-1.124l-.993 1.124zm-7.937-1.124a.75.75 0 10.993 1.124l-.993-1.124zm7.022-.368l-.64-.393.64.393zm-5.114 0l.64-.393-.64.393zM3 161.25a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zM8 147l.372-.651A.75.75 0 007.25 147H8zm14 8l.372.651a.75.75 0 000-1.302L22 155zm-14.75 0a.75.75 0 001.5 0h-1.5zm5.378 4.492a.75.75 0 10.744 1.302l-.744-1.302zM7 157.75A2.25 2.25 0 019.25 160h1.5A3.75 3.75 0 007 156.25v1.5zm0-1.5A3.75 3.75 0 003.25 160h1.5A2.25 2.25 0 017 157.75v-1.5zm2.624 3.298A5.225 5.225 0 017 160.25v1.5a6.73 6.73 0 003.376-.903l-.752-1.299zM9.25 160v.197h1.5V160h-1.5zm0 .197V162h1.5v-1.803h-1.5zM7 160.25a5.225 5.225 0 01-2.624-.702l-.752 1.299A6.73 6.73 0 007 161.75v-1.5zM4.75 162v-1.803h-1.5V162h1.5zm0-1.803V160h-1.5v.197h1.5zm5.75-1.284a5.209 5.209 0 01-.876.635l.752 1.299c.403-.234.78-.507 1.124-.816l-1-1.118zm-6.124.635a5.21 5.21 0 01-.876-.635l-1 1.118c.344.309.721.582 1.124.816l.752-1.299zm4.86 4.701c.451.212.867.487 1.236.813l.993-1.124a6.77 6.77 0 00-1.588-1.046l-.64 1.357zM9.25 162c0 .433-.122.835-.332 1.177l1.277.787A3.737 3.737 0 0010.75 162h-1.5zm-.332 1.177A2.247 2.247 0 017 164.25v1.5a3.748 3.748 0 003.195-1.786l-1.277-.787zm-5.39 1.885a5.25 5.25 0 011.235-.813l-.64-1.357a6.77 6.77 0 00-1.588 1.046l.993 1.124zM7 164.25c-.81 0-1.52-.427-1.918-1.073l-1.277.787A3.748 3.748 0 007 165.75v-1.5zm-1.918-1.073A2.235 2.235 0 014.75 162h-1.5c0 .719.203 1.392.555 1.964l1.277-.787zM4 161.25H3v1.5h1v-1.5zm7 0h-1v1.5h1v-1.5zm-3.372-13.599l14 8 .744-1.302-14-8-.744 1.302zM8.75 155v-8h-1.5v8h1.5zm12.878-.651l-9 5.143.744 1.302 9-5.143-.744-1.302z\" fill=\"currentColor\"></path>\r\n                                    <path d=\"M3 205h8m-8 0v7a1 1 0 001 1h7m-8-8v-7a1 1 0 011-1h6a1 1 0 011 1v7m0 0v8m0-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7m4-11h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z\" stroke=\"currentColor\" stroke-width=\"1.5\"></path>\r\n                                </svg>\r\n                                <svg width=\"24\" height=\"72\" fill=\"none\">\r\n                                    <path d=\"M10.325 52.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                    <path d=\"M15 60a3 3 0 11-6 0 3 3 0 016 0zM5.121 17.804A13.936 13.936 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                                </svg>\r\n                            </div>\r\n                            <div class=\"ml-auto w-[calc(100%-4rem)] md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:divide-x lg:divide-gray-300/50 dark:lg:divide-white/10\">\r\n\r\n                                <!-- Worker.fs snippet -->\r\n                                <div class=\" w-auto md:row-span-2 border md:border-r-0 md:border-b-0 border-gray-300/50 dark:border-white/10 dark:border-r-0\">\r\n                                    <div class=\"flex w-full overflow-auto py-3 pl-3 font-mono text-xs snippet-code\">\r\n                                        <div>\r\n                                            <div aria-hidden=\"true\" class=\"line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40\"></div>\r\n                                        </div>\r\n                                        <pre class=\"code-block w-full -mb-16 text-wrap whitespace-pre-wrap break-words line-numbers language-fsharp !overflow-x-auto custom-scrollbar\"><code class=\"mt-[-14px] block language-fsharp text-wrap text-white whitespace-pre-wrap break-words\">let worker = new Worker(fun self -&gt;\r\n  // This code runs in the worker:\r\n  self.OnMessage &lt;- fun e -&gt;\r\n      Console.Log(\r\n        \"Received message from main thread: \" \r\n        + string e.Data\r\n      )\r\n)\r\n\r\n// This code runs in the main thread:\r\nworker.PostMessage(\"Hello, worker!\")</code></pre>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- index.js snippet -->\r\n                                <div class=\"mb-1 overflow-hidden border-gray-300/50 dark:border-white/10 md:row-span-1 md:-mb-1 md:-mt-8 md:border-l\">\r\n                                    <div class=\"flex items-center gap-2 border-gray-300/50 p-1 px-2 dark:border-white/10 md:border-b\">\r\n                                        <div class=\"flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 text-gray-500 duration-300 hover:text-gray-600 dark:text-white/70 dark:hover:text-white\">\r\n                                            <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                            </svg>\r\n                                            <span class=\"text-xs\">index.js</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"flex overflow-hidden rounded-2xl bg-white py-3 pl-3 font-mono text-xs dark:bg-black/40 md:rounded-none md:border-none md:bg-transparent dark:md:bg-transparent snippet-code\">\r\n                                        <div>\r\n                                            <div aria-hidden=\"true\" class=\"line-numbers hidden w-2 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40 sm:block\"></div>\r\n                                        </div>\r\n                                        <pre class=\"code-block -mb-9 !overflow-x-auto language-js line-numbers custom-scrollbar\"><code class=\"mt-[-16px] block language-js text-white\">var worker = new Worker(\"worker.js\");\r\nworker.postMessage(\"Hello, worker!\");\r\n                                            </code>\r\n                                        </pre>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- worker.js snippet -->\r\n                                <div class=\"mt-4 mb-1 overflow-hidden border-gray-300/50 dark:border-white/10 md:row-span-1 md:-mb-1 md:-mt-8 md:border-t md:border-l lg:border-t-0\">\r\n                                    <div class=\"flex items-center gap-2 p-1 px-2 md:border-b md:border-gray-300/50 md:bg-white/5 dark:md:border-white/10 lg:bg-transparent\">\r\n                                        <div class=\"flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 text-gray-500 duration-300 hover:text-gray-600 dark:text-white/70 dark:hover:text-white\">\r\n                                            <svg class=\"h-3 w-3\" viewbox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                <path d=\"M0 0H28V28H0V0Z\" fill=\"#F5DE19\"></path>\r\n                                                <path d=\"M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z\" fill=\"black\"></path>\r\n                                            </svg>\r\n                                            <span class=\"text-xs\">worker.js</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"flex overflow-hidden rounded-2xl bg-white py-3 pl-3 font-mono text-xs dark:bg-black/40 md:rounded-none md:border-none md:bg-transparent dark:md:bg-transparent snippet-code\">\r\n                                        <div>\r\n                                            <div aria-hidden=\"true\" class=\"line-numbers hidden w-2 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40 sm:block\"></div>\r\n                                        </div>\r\n                                        <pre class=\"code-block -mb-8 !overflow-x-auto md:-mb-16 language-js line-numbers custom-scrollbar\"><code class=\"mt-[-14px] block language-js text-white\">self.onmessage = function (e) {\r\n    console.log(\r\n       \"Received message from main thread: \"\r\n           + e.data.toString());\r\n}\r\n                                            </code>\r\n                                        </pre>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Terminal -->\r\n                                <div class=\"lg:col-span-3 bg-white dark:bg-gray-900 shadow-2xl shadow-gray-950/5 dark:shadow-gray-950/15 border border-gray-300/50 dark:border-gray-800 p-3 lg:rounded-br-3xl\">\r\n                                    <span class=\"border-b border-brand-secondary pb-1 text-xs font-medium tracking-wide text-gray-500 dark:text-white\">\r\n                                        <span>Terminal</span>\r\n                                    </span>\r\n                                    <div class=\"mt-3 hidden w-max font-mono text-xs text-gray-400 dark:text-white/60 md:block\">\r\n                                        <div class=\"text-gray-400 dark:text-gray-400\">\r\n                                            > Received message from main thread: Hello, worker!\r\n                                        </div>\r\n                                        <span class=\"dark:text-white text-gray-300\">\u2588</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"bg-gray-200/5 py-20 dark:bg-gray-900/25\">\r\n            <div>\r\n                <h2 class=\"text-center text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-4xl lg:text-5xl\">Get Started</h2>\r\n                <p class=\"mt-4 text-center text-lg text-gray-700 dark:text-gray-300\">Instant access to the power of WebSharper</p>\r\n                <div class=\"mt-10 flex flex-wrap items-center justify-center gap-6 lg:flex-nowrap\">\r\n                    <a href=\"https://docs.websharper.com/\" class=\"w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                        <span class=\"relative text-sm\">Get started</span>\r\n                    </a>\r\n                    <div class=\"text-primary flex h-10 items-center gap-2 rounded-xl border border-gray-300 backdrop-blur-xl pl-4 text-base font-medium leading-7 dark:border-gray-800 dark:bg-transparent\">\r\n                        <span class=\"text-xs text-gray-500\">$</span>\r\n                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new install WebSharper.<span class=\"bg-gradient-to-r from-gray-500 to-transparent bg-clip-text text-transparent dark:from-white/70\">Templates</span></span>\r\n                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                            <span class=\"sr-only\">Copy</span>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</body>\r\n</html>"));
}
function t_7(h){
  return h?GetOrLoadTemplate("download", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"space-y-40\">\r\n        <!-- header and hero section -->\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 pt-36 sm:pt-40 lg:px-8 lg:pb-8 lg:pt-48 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"relative z-10 text-center w-full\">\r\n                    <h1 class=\"max-w-2xl mx-auto text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl\">Downloads</h1>\r\n                    <p class=\"mt-6 max-w-lg mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300\">Create your WebSharper project quickly.</p>\r\n                </div>\r\n                <div class=\"dark:hidden absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]\"></div>\r\n                <div class=\"hidden dark:block absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.900/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.900/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]\"></div>\r\n                <div class=\"absolute h-96 inset-x-[10%] -bottom-[20%] my-auto hidden dark:block -z-20\">\r\n                    <div aria-hidden=\"true\" class=\"grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl\">\r\n                        <!--background colors here -->\r\n                        <div class=\"h-72 bg-gradient-to-br from-pink-400 to-purple-400 blur-3xl dark:from-blue-800\"></div>\r\n                        <div class=\"h-96 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-sky-950\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"lg:mt-0\">\r\n\r\n                <div class=\"mt-10 px-6 max-w-2xl mx-auto content space-y-12 text-base leading-relaxed\">\r\n                    <hr class=\"mt-10 border-t border-gray-300 dark:border-gray-700 w-full mx-auto\">\r\n                    <h2 class=\"text-3xl font-semibold header\">Getting Started with WebSharper</h2>\r\n                    <ul class=\"space-y-2 content-list\">\r\n                        <li>\r\n                            The simplest way is to use the\r\n                            <a href=\"#with-dotnet\" class=\"text-sky-400 underline\">\r\n                                dotnet CLI.\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            If you are using Windows, you can also install the\r\n                            <a href=\"#with-vs\" class=\"text-sky-400 underline\">\r\n                                Visual Studio extension.\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            The above options provide project templates to get you started quickly. You can also use WebSharper by simply adding it to an existing project with NuGet and\r\n                            <a href=\"https://developers.websharper.com/docs/v4.x/fs/project-variables\" class=\"text-sky-400 underline\" target=\"_blank\">\r\n                                a wsconfig.json configuration file.\r\n                            </a>\r\n                            <div class=\"pl-4 mt-4 flex items-center justify-center gap-2 flex-col\">\r\n                                <div class=\"cli\">\r\n                                    <span class=\"text-xs text-gray-500\">$</span>\r\n                                    <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet add package WebSharper.FSharp</span>\r\n                                    <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                        <span class=\"sr-only\">Copy</span>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                        </svg>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                        </svg>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"self-center\">or</div>\r\n                                <div class=\"cli\">\r\n                                    <span class=\"text-xs text-gray-500\">$</span>\r\n                                    <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet add package WebSharper.CSharp</span>\r\n                                    <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                        <span class=\"sr-only\">Copy</span>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                        </svg>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                        </svg>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                    <h4 class=\"text-lg\">\r\n                        WebSharper also has many bindings for popular JavaScript libraries.\r\n                        <a href=\"https://www.nuget.org/packages?q=title%3Awebsharper\" class=\"text-sky-400 underline\" target=\"_blank\">\r\n                            Download them from NuGet.\r\n                        </a>\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- using dotnet CLI section -->\r\n        <section id=\"with-dotnet\" class=\"scroll-my-16\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl content\">\r\n                <div>\r\n                    <h2 class=\"header\">\r\n                        Using WebSharper with the dotnet CLI\r\n                    </h2>\r\n                    <p class=\"mt-6\">\r\n                        The WebSharper dotnet templates can be used to create ASP.NET Core-based projects.\r\n                    </p>\r\n                </div>\r\n                <div class=\"mt-10\">\r\n                    <h3 class=\"sub-header\">\r\n                        Install the WebSharper project templates\r\n                    </h3>\r\n                    <p class=\"mt-4\">\r\n                        To install the WebSharper project templates, use the following command:\r\n                    </p>\r\n                    <!-- command -->\r\n                    <div class=\"cli\">\r\n                        <span class=\"text-xs text-gray-500\">$</span>\r\n                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new install WebSharper.Templates</span>\r\n                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                            <span class=\"sr-only\">Copy</span>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                    <p class=\"mt-6\">\r\n                        To update the templates to the latest version, you can use:\r\n                    </p>\r\n                    <!-- command -->\r\n                    <div class=\"cli\">\r\n                        <span class=\"text-xs text-gray-500\">$</span>\r\n                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new install &quot;WebSharper.Templates::*&quot;</span>\r\n                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                            <span class=\"sr-only\">Copy</span>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"mt-10\">\r\n                    <h3 class=\"sub-header\">Create a new WebSharper project</h3>\r\n                    <p class=\"mt-4\">You can create multiple types of project, both in C# and F#.</p>\r\n                    <ul class=\"content-list w-[80%]\">\r\n                        <li class=\"mt-6\">\r\n                            <p>The <strong>Web</strong> template creates an ASP.NET Core-hosted WebSharper application with both server-side and client-side code. Create it with:</p>\r\n                            <div class=\"template-command-container\">\r\n                                <div class=\"cli-wrapper\">\r\n                                    <!-- command -->\r\n                                    <div class=\"cli\">\r\n                                        <span class=\"text-xs text-gray-500\">$</span>\r\n                                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new websharper-web -lang f# -n ClientServer</span>\r\n                                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                            <span class=\"sr-only\">Copy</span>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                            </svg>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"mt-6\">\r\n                            <p>The <strong>SPA</strong> template creates an ASP.NET Core-hosted Single-Page Application. Create it with:</p>\r\n                            <div class=\"template-command-container\">\r\n                                <div class=\"cli-wrapper\">\r\n\r\n                                    <!-- command -->\r\n                                    <div class=\"cli\">\r\n                                        <span class=\"text-xs text-gray-500\">$</span>\r\n                                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new websharper-spa -lang f# -n SPA</span>\r\n                                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                            <span class=\"sr-only\">Copy</span>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                            </svg>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"mt-6\">\r\n                            <p>The <strong>Library</strong> template creates a simple class library compiled with WebSharper. Create it with:</p>\r\n                            <div class=\"template-command-container\">\r\n                                <div class=\"cli-wrapper\">\r\n\r\n                                    <!-- command -->\r\n                                    <div class=\"cli\">\r\n                                        <span class=\"text-xs text-gray-500\">$</span>\r\n                                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new websharper-lib -lang f# -n Library</span>\r\n                                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                            <span class=\"sr-only\">Copy</span>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                            </svg>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"mt-6\">\r\n                            <p>The <strong>HTML</strong> template creates a statically-generated website. Create it with:</p>\r\n                            <div class=\"template-command-container\">\r\n                                <div class=\"cli-wrapper\">\r\n\r\n                                    <!-- command -->\r\n                                    <div class=\"cli\">\r\n                                        <span class=\"text-xs text-gray-500\">$</span>\r\n                                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new websharper-html -lang f# -n Offline</span>\r\n                                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                            <span class=\"sr-only\">Copy</span>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                            </svg>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- what's next? -->\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl content mb-5\">\r\n                <h2 class=\"header\">Where to go next?</h2>\r\n                <div>\r\n                    <p class=\"mt-4\">Learn how to use WebSharper:</p>\r\n                    <ul class=\"content-list space-y-2\">\r\n                        <li class=\"mt-4\">\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://docs.websharper.com/core/Sitelets\">Discover sitelets:</a>\r\n                            serving content, defining an HTTP APIs, using JSON, etc.\r\n                        </li>\r\n                        <li class=\"\">\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://docs.websharper.com/ui\">Learn about building reactive web UIs:</a>\r\n                            using HTML templates, adding dynamic behavior, handling client-side state, etc.\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://docs.websharper.com/core/GettingStarted\">\r\n                                Read the basics:\r\n                            </a>\r\n                            setting up projects, using project templates, and understanding compilation.\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://try.websharper.com/\">\r\n                                Play with online examples:\r\n                            </a>\r\n                            edit and run WebSharper snippets, and use them to bootstrap your projects\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://www.nuget.org/packages?q=websharper\">\r\n                                Browse available NuGet packages.\r\n                            </a>\r\n                            find WebSharper libraries and add them to your projects.\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://docs.websharper.com/core/WSConfig\">\r\n                                Learn about configuration:\r\n                            </a>\r\n                            understand <code>wsconfig.json</code> and other project settings.\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://docs.websharper.com/core/deploying\">\r\n                                Deploy your application:\r\n                            </a>\r\n                            tips for publishing to servers, cloud, or static hosting.\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div>\r\n                    <p class=\"mt-4\">Engage with the community:</p>\r\n                    <ul class=\"content-list space-y-2\">\r\n                        <li class=\"mt-4\">\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://forums.websharper.com/topics/all\">Ask your questions on the forums.</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://github.com/dotnet-websharper/core/issues\">\r\n                                Report bugs or suggest features on GitHub.\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://github.com/dotnet-websharper\">\r\n                                Browse the source code on GitHub.\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://twitter.com/websharper\">\r\n                                Follow WebSharper news on Twitter.\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <h3 class=\"my-16 header\">Happy Coding!</h3>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</body>\r\n</html>"), h):PrepareTemplate("download", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"space-y-40\">\r\n        <!-- header and hero section -->\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 pt-36 sm:pt-40 lg:px-8 lg:pb-8 lg:pt-48 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"relative z-10 text-center w-full\">\r\n                    <h1 class=\"max-w-2xl mx-auto text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl\">Downloads</h1>\r\n                    <p class=\"mt-6 max-w-lg mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300\">Create your WebSharper project quickly.</p>\r\n                </div>\r\n                <div class=\"dark:hidden absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]\"></div>\r\n                <div class=\"hidden dark:block absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.900/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.900/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]\"></div>\r\n                <div class=\"absolute h-96 inset-x-[10%] -bottom-[20%] my-auto hidden dark:block -z-20\">\r\n                    <div aria-hidden=\"true\" class=\"grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl\">\r\n                        <!--background colors here -->\r\n                        <div class=\"h-72 bg-gradient-to-br from-pink-400 to-purple-400 blur-3xl dark:from-blue-800\"></div>\r\n                        <div class=\"h-96 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-sky-950\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"lg:mt-0\">\r\n\r\n                <div class=\"mt-10 px-6 max-w-2xl mx-auto content space-y-12 text-base leading-relaxed\">\r\n                    <hr class=\"mt-10 border-t border-gray-300 dark:border-gray-700 w-full mx-auto\">\r\n                    <h2 class=\"text-3xl font-semibold header\">Getting Started with WebSharper</h2>\r\n                    <ul class=\"space-y-2 content-list\">\r\n                        <li>\r\n                            The simplest way is to use the\r\n                            <a href=\"#with-dotnet\" class=\"text-sky-400 underline\">\r\n                                dotnet CLI.\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            If you are using Windows, you can also install the\r\n                            <a href=\"#with-vs\" class=\"text-sky-400 underline\">\r\n                                Visual Studio extension.\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            The above options provide project templates to get you started quickly. You can also use WebSharper by simply adding it to an existing project with NuGet and\r\n                            <a href=\"https://developers.websharper.com/docs/v4.x/fs/project-variables\" class=\"text-sky-400 underline\" target=\"_blank\">\r\n                                a wsconfig.json configuration file.\r\n                            </a>\r\n                            <div class=\"pl-4 mt-4 flex items-center justify-center gap-2 flex-col\">\r\n                                <div class=\"cli\">\r\n                                    <span class=\"text-xs text-gray-500\">$</span>\r\n                                    <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet add package WebSharper.FSharp</span>\r\n                                    <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                        <span class=\"sr-only\">Copy</span>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                        </svg>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                        </svg>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"self-center\">or</div>\r\n                                <div class=\"cli\">\r\n                                    <span class=\"text-xs text-gray-500\">$</span>\r\n                                    <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet add package WebSharper.CSharp</span>\r\n                                    <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                        <span class=\"sr-only\">Copy</span>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                        </svg>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                        </svg>\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                    <h4 class=\"text-lg\">\r\n                        WebSharper also has many bindings for popular JavaScript libraries.\r\n                        <a href=\"https://www.nuget.org/packages?q=title%3Awebsharper\" class=\"text-sky-400 underline\" target=\"_blank\">\r\n                            Download them from NuGet.\r\n                        </a>\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- using dotnet CLI section -->\r\n        <section id=\"with-dotnet\" class=\"scroll-my-16\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl content\">\r\n                <div>\r\n                    <h2 class=\"header\">\r\n                        Using WebSharper with the dotnet CLI\r\n                    </h2>\r\n                    <p class=\"mt-6\">\r\n                        The WebSharper dotnet templates can be used to create ASP.NET Core-based projects.\r\n                    </p>\r\n                </div>\r\n                <div class=\"mt-10\">\r\n                    <h3 class=\"sub-header\">\r\n                        Install the WebSharper project templates\r\n                    </h3>\r\n                    <p class=\"mt-4\">\r\n                        To install the WebSharper project templates, use the following command:\r\n                    </p>\r\n                    <!-- command -->\r\n                    <div class=\"cli\">\r\n                        <span class=\"text-xs text-gray-500\">$</span>\r\n                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new install WebSharper.Templates</span>\r\n                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                            <span class=\"sr-only\">Copy</span>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                    <p class=\"mt-6\">\r\n                        To update the templates to the latest version, you can use:\r\n                    </p>\r\n                    <!-- command -->\r\n                    <div class=\"cli\">\r\n                        <span class=\"text-xs text-gray-500\">$</span>\r\n                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new install &quot;WebSharper.Templates::*&quot;</span>\r\n                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                            <span class=\"sr-only\">Copy</span>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                            </svg>\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"mt-10\">\r\n                    <h3 class=\"sub-header\">Create a new WebSharper project</h3>\r\n                    <p class=\"mt-4\">You can create multiple types of project, both in C# and F#.</p>\r\n                    <ul class=\"content-list w-[80%]\">\r\n                        <li class=\"mt-6\">\r\n                            <p>The <strong>Web</strong> template creates an ASP.NET Core-hosted WebSharper application with both server-side and client-side code. Create it with:</p>\r\n                            <div class=\"template-command-container\">\r\n                                <div class=\"cli-wrapper\">\r\n                                    <!-- command -->\r\n                                    <div class=\"cli\">\r\n                                        <span class=\"text-xs text-gray-500\">$</span>\r\n                                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new websharper-web -lang f# -n ClientServer</span>\r\n                                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                            <span class=\"sr-only\">Copy</span>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                            </svg>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"mt-6\">\r\n                            <p>The <strong>SPA</strong> template creates an ASP.NET Core-hosted Single-Page Application. Create it with:</p>\r\n                            <div class=\"template-command-container\">\r\n                                <div class=\"cli-wrapper\">\r\n\r\n                                    <!-- command -->\r\n                                    <div class=\"cli\">\r\n                                        <span class=\"text-xs text-gray-500\">$</span>\r\n                                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new websharper-spa -lang f# -n SPA</span>\r\n                                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                            <span class=\"sr-only\">Copy</span>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                            </svg>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"mt-6\">\r\n                            <p>The <strong>Library</strong> template creates a simple class library compiled with WebSharper. Create it with:</p>\r\n                            <div class=\"template-command-container\">\r\n                                <div class=\"cli-wrapper\">\r\n\r\n                                    <!-- command -->\r\n                                    <div class=\"cli\">\r\n                                        <span class=\"text-xs text-gray-500\">$</span>\r\n                                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new websharper-lib -lang f# -n Library</span>\r\n                                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                            <span class=\"sr-only\">Copy</span>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                            </svg>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"mt-6\">\r\n                            <p>The <strong>HTML</strong> template creates a statically-generated website. Create it with:</p>\r\n                            <div class=\"template-command-container\">\r\n                                <div class=\"cli-wrapper\">\r\n\r\n                                    <!-- command -->\r\n                                    <div class=\"cli\">\r\n                                        <span class=\"text-xs text-gray-500\">$</span>\r\n                                        <span class=\"text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70\">dotnet new websharper-html -lang f# -n Offline</span>\r\n                                        <button ws-onclick=\"CopyFromClosest\" class=\"copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer\">\r\n                                            <span class=\"sr-only\">Copy</span>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"></path>\r\n                                            </svg>\r\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white\">\r\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\"></path>\r\n                                            </svg>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- what's next? -->\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl content mb-5\">\r\n                <h2 class=\"header\">Where to go next?</h2>\r\n                <div>\r\n                    <p class=\"mt-4\">Learn how to use WebSharper:</p>\r\n                    <ul class=\"content-list space-y-2\">\r\n                        <li class=\"mt-4\">\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://docs.websharper.com/core/Sitelets\">Discover sitelets:</a>\r\n                            serving content, defining an HTTP APIs, using JSON, etc.\r\n                        </li>\r\n                        <li class=\"\">\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://docs.websharper.com/ui\">Learn about building reactive web UIs:</a>\r\n                            using HTML templates, adding dynamic behavior, handling client-side state, etc.\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://docs.websharper.com/core/GettingStarted\">\r\n                                Read the basics:\r\n                            </a>\r\n                            setting up projects, using project templates, and understanding compilation.\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://try.websharper.com/\">\r\n                                Play with online examples:\r\n                            </a>\r\n                            edit and run WebSharper snippets, and use them to bootstrap your projects\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://www.nuget.org/packages?q=websharper\">\r\n                                Browse available NuGet packages.\r\n                            </a>\r\n                            find WebSharper libraries and add them to your projects.\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://docs.websharper.com/core/WSConfig\">\r\n                                Learn about configuration:\r\n                            </a>\r\n                            understand <code>wsconfig.json</code> and other project settings.\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://docs.websharper.com/core/deploying\">\r\n                                Deploy your application:\r\n                            </a>\r\n                            tips for publishing to servers, cloud, or static hosting.\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div>\r\n                    <p class=\"mt-4\">Engage with the community:</p>\r\n                    <ul class=\"content-list space-y-2\">\r\n                        <li class=\"mt-4\">\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://forums.websharper.com/topics/all\">Ask your questions on the forums.</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://github.com/dotnet-websharper/core/issues\">\r\n                                Report bugs or suggest features on GitHub.\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://github.com/dotnet-websharper\">\r\n                                Browse the source code on GitHub.\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"text-blue-400 hover:underline transition duration-300\" href=\"https://twitter.com/websharper\">\r\n                                Follow WebSharper news on Twitter.\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <h3 class=\"my-16 header\">Happy Coding!</h3>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</body>\r\n</html>"));
}
function t_6(h){
  return h?GetOrLoadTemplate("dslai", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"mx-auto max-w-5xl px-4 pb-16 md:pb-20\" ws-onafterrender=\"OnAfterRender\">\r\n        <!-- Hero -->\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 pt-36 sm:pt-40 lg:px-8 lg:pb-12 lg:pt-48 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"relative z-10 text-center w-full\">\r\n                    <h1 class=\"max-w-2xl mx-auto text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl\">DSLs + AI Integration</h1>\r\n                    <p class=\"mt-6 max-w-lg mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Section: DSL -->\r\n        <section class=\"mt-20\">\r\n            <h2 class=\"text-2xl font-semibold text-gray-900 dark:text-white\">What is a DSL?</h2>\r\n            <p class=\"mt-2 mb-10 text-gray-700 dark:text-gray-300\">\r\n                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n            </p>\r\n\r\n            <div class=\"mt-8 mx-auto w-full md:mt-0 md:w-1/2\">\r\n                <div ws-onafterrender=\"InitTabs\" data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                            <div class=\"flex space-x-1.5\">\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                            </div>\r\n\r\n                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                <button role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                        <defs id=\"defs2\"></defs>\r\n                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                        </g>\r\n                                    </svg>\r\n                                    <span class=\"text-xs\">DSL.warp</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">type Item {\r\n    text ItemNumber;\r\n    text Name;\r\n    number Quantity format \"[0-9]+\" with \"Must specify a number\"\r\n};\r\n\r\ntype Address {\r\n    text Street1;\r\n    text Street2 optional;\r\n    text City;\r\n    text State = \"CA\";\r\n    text Zip\r\n};</code></pre>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Section: Warp Plugin (spec-first) -->\r\n        <section id=\"warp-plugin\" class=\"mt-20\">\r\n            <!-- Header row -->\r\n            <div class=\"flex flex-wrap items-center justify-between gap-3\">\r\n                <div>\r\n                    <h2 class=\"text-2xl font-semibold text-gray-900 dark:text-white\">\r\n                        Warp plugin\r\n                    </h2>\r\n                    <p class=\"mt-2 max-w-2xl text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </div>\r\n\r\n                <!-- Availability pills -->\r\n                <div class=\"flex items-center gap-2\">\r\n                    <span class=\"inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-300/30 dark:bg-emerald-400/10 dark:text-emerald-200\">\r\n                        Visual Studio \u2014 available\r\n                    </span>\r\n                    <span class=\"inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/20 dark:text-gray-300\">\r\n                        VS Code \u2014 planned\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Features -->\r\n            <ul class=\"mt-8 grid gap-6 md:grid-cols-2\">\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 1</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 2</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 3</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 4</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 5</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 6</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n            </ul>\r\n\r\n            <!-- Screenshots -->\r\n            <div class=\"mt-10 grid grid-cols-1 gap-4 md:grid-cols-2\">\r\n                <figure class=\"md:col-span-2 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/warp-shot-1.png\" alt=\"Spec editor with live DSL sync\" class=\"w-full h-auto body-text\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400\">\r\n                        Spec editor with live DSL sync\r\n                    </figcaption>\r\n                </figure>\r\n\r\n                <figure class=\"rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/warp-shot-2.png\" alt=\"Spec types \u2192 typed F# models\" class=\"w-full h-auto body-text\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400\">\r\n                        Spec types \u2192 typed F# models\r\n                    </figcaption>\r\n                </figure>\r\n\r\n                <figure class=\"rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/warp-shot-3.png\" alt=\"Spec endpoint \u2192 typed route\" class=\"w-full h-auto body-text\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400\">\r\n                        Spec endpoint \u2192 typed route\r\n                    </figcaption>\r\n                </figure>\r\n            </div>\r\n\r\n            <!-- Compact CTA row -->\r\n            <!-- <div class=\"mt-8 flex flex-wrap items-center gap-3\">\r\n                <a href=\"./contact/\" class=\"inline-flex items-center rounded-xl border border-gray-300 px-6 h-10 text-gray-800 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/10\">\r\n                Request a demo\r\n                </a>\r\n                <a href=\"./dsl-ai.html#ai-integration\" class=\"inline-flex items-center rounded-xl border border-gray-300 px-4 h-10 text-sm text-gray-800 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/10\">\r\n                See AI assist plugin\r\n                </a>\r\n            </div> -->\r\n        </section>\r\n\r\n\r\n        <!-- Section: AI Integration (WS plugin) -->\r\n        <section id=\"ai-integration\" class=\"mt-24\">\r\n            <!-- Headline + CTAs -->\r\n            <div class=\"flex flex-wrap items-center justify-between gap-4\">\r\n                <div>\r\n                    <h2 class=\"text-3xl font-bold text-gray-900 dark:text-white\">\r\n                        AI code review for WebSharper (VS Code)\r\n                    </h2>\r\n                    <p class=\"mt-2 max-w-2xl text-gray-700 dark:text-gray-300\">\r\n                        Review, explain, and fix code without leaving the editor. Private by default, with optional WebSharper-docs context.\r\n                    </p>\r\n                    <!-- Trust badges -->\r\n                    <div class=\"mt-3 flex flex-wrap gap-2\">\r\n                        <span class=\"inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 dark:bg-white/10 bg-gray-900\">\r\n                            Offline \u2022 Local Ollama\r\n                        </span>\r\n                        <span class=\"inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 dark:border-white/20 dark:text-gray-300\">\r\n                            Privacy-first \u2022 No cloud calls\r\n                        </span>\r\n                        <span class=\"inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 dark:border-white/20 dark:text-gray-300\">\r\n                            WebSharper-docs aware (RAG)\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"flex gap-2\">\r\n                    <!-- Primary CTA -->\r\n                    <a href=\"https://marketplace.visualstudio.com/items?itemName=souvanxay.ws-code-review\" class=\"w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r\n                                hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                        <span class=\"relative text-sm\">Get the extension</span>\r\n                    </a>\r\n                    <!-- Secondary CTA -->\r\n                    <a href=\"https://github.com/Got17/ai-code-review-vscode\" class=\"disabled:before:bg-gray-300 group relative before:absolute before:inset-0 before:rounded-xl before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20 w-fit rounded-xl h-10 flex justify-center items-center px-6\">\r\n                        <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\">View on GitHub</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Hero video -->\r\n            <div class=\"mt-8 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                <video class=\"w-full h-auto\" autoplay=\"\" loop=\"\" muted=\"\" playsinline=\"\" preload=\"metadata\" controls=\"\">\r\n                    <source src=\"/Assets/videos/ws-plugin-demo.mp4\" type=\"video/mp4\">\r\n                    Your browser does not support the video tag.\r\n                </video>\r\n            </div>\r\n\r\n            <!-- Value props (benefits) -->\r\n            <ul class=\"mt-10 grid gap-6 md:grid-cols-3\">\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Stay in flow</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Get in-editor suggestions as a streamed diff. Accept or reject in one click.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Private by design</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Runs locally with Ollama. No cloud calls. Works great offline.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">WebSharper-aware when needed</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Toggle RAG to enrich reviews with bundled <em>WebSharper</em> context.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Shadow Git snapshots</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Keep a private audit trail of accepted edits. Browse and roll back anytime.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Model switcher & preferences</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Pick your local coder model and steer tone, naming, and idioms via AI Preferences.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Works with huge files</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Large-file safety falls back to selection-only, so you never lose control.\r\n                    </p>\r\n                </li>\r\n            </ul>\r\n\r\n            <!-- Small, punchy gallery -->\r\n            <div class=\"mt-10 grid gap-4 md:grid-cols-3\">\r\n                <figure class=\"rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/right-click.png\" alt=\"Right-click: WS Code Review \u2192 Show Suggestion\" class=\"w-full h-auto\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center\">Show Suggestion from context menu</figcaption>\r\n                </figure>\r\n                <figure class=\"rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/show-suggestion-cmd.png\" alt=\"Command Palette: Show Suggestion\" class=\"w-full h-auto\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center\">Run from Command Palette</figcaption>\r\n                </figure>\r\n                <figure class=\"rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/result.png\" alt=\"Diff preview with Accept/Reject\" class=\"w-full h-auto\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center\">Streamed diff \u2022 Accept / Reject</figcaption>\r\n                </figure>\r\n            </div>\r\n\r\n            <!-- Developer details tucked away -->\r\n            <details class=\"mt-8 rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                <summary class=\"cursor-pointer select-none text-sm font-semibold text-gray-900 dark:text-white\">\r\n                    Setup & commands (for developers)\r\n                </summary>\r\n                <div class=\"mt-4 space-y-6 text-gray-700 dark:text-gray-300\">\r\n                    <div>\r\n                        <h4 class=\"font-semibold text-gray-900 dark:text-white\">Quick start</h4>\r\n                        <ol class=\"mt-2 list-decimal pl-5 space-y-2\">\r\n                            <li>Install from Marketplace or run <code>code --install-extension souvanxay.ws-code-review</code>.</li>\r\n                            <li>Install <strong>Ollama</strong>, pull a coder model (<code>ollama pull qwen2.5-coder:7b-instruct</code>), then <code>ollama serve</code>.</li>\r\n                            <li>Open an <code>.fs</code> file. Run <em>WS Code Review: Show Suggestion</em> via shortcut, context menu, or Command Palette.</li>\r\n                            <li>\r\n                                Accept/Reject the suggestion. Enable Shadow Git to snapshot accepts:\r\n                                <code>\"wsCodeReview.git.enable\": true</code>.\r\n                            </li>\r\n                            <li>\r\n                                For WebSharper-docs-aware reviews, toggle the RAG pill or enable\r\n                                <code>\"wsCodeReview.rag.enable\": true</code>, then Refresh.\r\n                            </li>\r\n                        </ol>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 class=\"font-semibold text-gray-900 dark:text-white\">Commands</h4>\r\n                        <ul class=\"mt-2 list-disc pl-5 space-y-1\">\r\n                            <li>WS Code Review: Show Suggestion</li>\r\n                            <li>WS Code Review: Change Ollama Model</li>\r\n                            <li>WS Code Review: Set / Show / Clear AI Preferences</li>\r\n                            <li>WS Code Review: Show / Clear Shadow Git History</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </details>\r\n\r\n            <!-- Soft doc CTA -->\r\n            <a href=\"https://docs.websharper.com/core/ws-ai-plugin\" class=\"mt-8 w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                            flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                            before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                            before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r\n                            hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                <span class=\"relative text-sm\">Read the guide</span>\r\n            </a>\r\n        </section>\r\n    </div>\r\n</body>\r\n</html>"), h):PrepareTemplate("dslai", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"mx-auto max-w-5xl px-4 pb-16 md:pb-20\" ws-onafterrender=\"OnAfterRender\">\r\n        <!-- Hero -->\r\n        <section>\r\n            <div class=\"mx-auto max-w-6xl px-6 pt-36 sm:pt-40 lg:px-8 lg:pb-12 lg:pt-48 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"relative z-10 text-center w-full\">\r\n                    <h1 class=\"max-w-2xl mx-auto text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl\">DSLs + AI Integration</h1>\r\n                    <p class=\"mt-6 max-w-lg mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Section: DSL -->\r\n        <section class=\"mt-20\">\r\n            <h2 class=\"text-2xl font-semibold text-gray-900 dark:text-white\">What is a DSL?</h2>\r\n            <p class=\"mt-2 mb-10 text-gray-700 dark:text-gray-300\">\r\n                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n            </p>\r\n\r\n            <div class=\"mt-8 mx-auto w-full md:mt-0 md:w-1/2\">\r\n                <div ws-onafterrender=\"InitTabs\" data-name=\"snippet\" class=\"relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl\">\r\n                    <div class=\"rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl\">\r\n                        <div class=\"flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800\">\r\n                            <div class=\"flex space-x-1.5\">\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                                <div aria-hidden=\"true\" class=\"h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700\"></div>\r\n                            </div>\r\n\r\n                            <div role=\"tablist\" aria-label=\"tabs\" class=\"relative flex text-gray-500 dark:text-white/70\">\r\n                                <div aria-hidden=\"true\" class=\"tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50\"></div>\r\n                                <button role=\"tab\" aria-selected=\"true\" data-target=\"fsharp\" class=\"relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white\">\r\n                                    <svg class=\"h-3.5 w-3.5\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" width=\"236\" height=\"224\" viewbox=\"0 0 62.441665 59.266668\" version=\"1.1\" id=\"svg5\" inkscape:version=\"1.1 (c68e22c387, 2021-05-23)\" sodipodi:docname=\"F Sharp logo.svg\">\r\n                                        <sodipodi:namedview id=\"namedview7\" pagecolor=\"#ffffff\" bordercolor=\"#999999\" borderopacity=\"1\" inkscape:pageshadow=\"0\" inkscape:pageopacity=\"0\" inkscape:pagecheckerboard=\"0\" inkscape:document-units=\"px\" showgrid=\"false\" units=\"px\" width=\"236px\" inkscape:zoom=\"2\" inkscape:cx=\"142.75\" inkscape:cy=\"75.75\" inkscape:window-width=\"1920\" inkscape:window-height=\"1057\" inkscape:window-x=\"-8\" inkscape:window-y=\"-8\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"layer1\"></sodipodi:namedview>\r\n                                        <defs id=\"defs2\"></defs>\r\n                                        <g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\">\r\n                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z\" id=\"path4912\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                            <path style=\"fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z\" id=\"path9393\" sodipodi:nodetypes=\"cccc\"></path>\r\n                                            <path style=\"fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1\" d=\"M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z\" id=\"path13640\" sodipodi:nodetypes=\"ccccccc\"></path>\r\n                                        </g>\r\n                                    </svg>\r\n                                    <span class=\"text-xs\">DSL.warp</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl\">\r\n                            <div class=\"custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs\">\r\n                                <div class=\"absolute inset-0 h-max w-max\" role=\"tabpanel\" aria-labelledby=\"tab-1\" data-lang=\"fsharp\">\r\n                                    <pre class=\"p-4 pt-0\"><code class=\"w-max language-fsharp\">type Item {\r\n    text ItemNumber;\r\n    text Name;\r\n    number Quantity format \"[0-9]+\" with \"Must specify a number\"\r\n};\r\n\r\ntype Address {\r\n    text Street1;\r\n    text Street2 optional;\r\n    text City;\r\n    text State = \"CA\";\r\n    text Zip\r\n};</code></pre>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Section: Warp Plugin (spec-first) -->\r\n        <section id=\"warp-plugin\" class=\"mt-20\">\r\n            <!-- Header row -->\r\n            <div class=\"flex flex-wrap items-center justify-between gap-3\">\r\n                <div>\r\n                    <h2 class=\"text-2xl font-semibold text-gray-900 dark:text-white\">\r\n                        Warp plugin\r\n                    </h2>\r\n                    <p class=\"mt-2 max-w-2xl text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </div>\r\n\r\n                <!-- Availability pills -->\r\n                <div class=\"flex items-center gap-2\">\r\n                    <span class=\"inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-300/30 dark:bg-emerald-400/10 dark:text-emerald-200\">\r\n                        Visual Studio \u2014 available\r\n                    </span>\r\n                    <span class=\"inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/20 dark:text-gray-300\">\r\n                        VS Code \u2014 planned\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Features -->\r\n            <ul class=\"mt-8 grid gap-6 md:grid-cols-2\">\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 1</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 2</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 3</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 4</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 5</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Feature 6</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r\n                    </p>\r\n                </li>\r\n            </ul>\r\n\r\n            <!-- Screenshots -->\r\n            <div class=\"mt-10 grid grid-cols-1 gap-4 md:grid-cols-2\">\r\n                <figure class=\"md:col-span-2 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/warp-shot-1.png\" alt=\"Spec editor with live DSL sync\" class=\"w-full h-auto body-text\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400\">\r\n                        Spec editor with live DSL sync\r\n                    </figcaption>\r\n                </figure>\r\n\r\n                <figure class=\"rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/warp-shot-2.png\" alt=\"Spec types \u2192 typed F# models\" class=\"w-full h-auto body-text\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400\">\r\n                        Spec types \u2192 typed F# models\r\n                    </figcaption>\r\n                </figure>\r\n\r\n                <figure class=\"rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/warp-shot-3.png\" alt=\"Spec endpoint \u2192 typed route\" class=\"w-full h-auto body-text\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400\">\r\n                        Spec endpoint \u2192 typed route\r\n                    </figcaption>\r\n                </figure>\r\n            </div>\r\n\r\n            <!-- Compact CTA row -->\r\n            <!-- <div class=\"mt-8 flex flex-wrap items-center gap-3\">\r\n                <a href=\"./contact/\" class=\"inline-flex items-center rounded-xl border border-gray-300 px-6 h-10 text-gray-800 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/10\">\r\n                Request a demo\r\n                </a>\r\n                <a href=\"./dsl-ai.html#ai-integration\" class=\"inline-flex items-center rounded-xl border border-gray-300 px-4 h-10 text-sm text-gray-800 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/10\">\r\n                See AI assist plugin\r\n                </a>\r\n            </div> -->\r\n        </section>\r\n\r\n\r\n        <!-- Section: AI Integration (WS plugin) -->\r\n        <section id=\"ai-integration\" class=\"mt-24\">\r\n            <!-- Headline + CTAs -->\r\n            <div class=\"flex flex-wrap items-center justify-between gap-4\">\r\n                <div>\r\n                    <h2 class=\"text-3xl font-bold text-gray-900 dark:text-white\">\r\n                        AI code review for WebSharper (VS Code)\r\n                    </h2>\r\n                    <p class=\"mt-2 max-w-2xl text-gray-700 dark:text-gray-300\">\r\n                        Review, explain, and fix code without leaving the editor. Private by default, with optional WebSharper-docs context.\r\n                    </p>\r\n                    <!-- Trust badges -->\r\n                    <div class=\"mt-3 flex flex-wrap gap-2\">\r\n                        <span class=\"inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 dark:bg-white/10 bg-gray-900\">\r\n                            Offline \u2022 Local Ollama\r\n                        </span>\r\n                        <span class=\"inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 dark:border-white/20 dark:text-gray-300\">\r\n                            Privacy-first \u2022 No cloud calls\r\n                        </span>\r\n                        <span class=\"inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 dark:border-white/20 dark:text-gray-300\">\r\n                            WebSharper-docs aware (RAG)\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"flex gap-2\">\r\n                    <!-- Primary CTA -->\r\n                    <a href=\"https://marketplace.visualstudio.com/items?itemName=souvanxay.ws-code-review\" class=\"w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r\n                                hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                        <span class=\"relative text-sm\">Get the extension</span>\r\n                    </a>\r\n                    <!-- Secondary CTA -->\r\n                    <a href=\"https://github.com/Got17/ai-code-review-vscode\" class=\"disabled:before:bg-gray-300 group relative before:absolute before:inset-0 before:rounded-xl before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20 w-fit rounded-xl h-10 flex justify-center items-center px-6\">\r\n                        <span class=\"relative w-max text-sm font-medium text-gray-600 dark:text-white\">View on GitHub</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Hero video -->\r\n            <div class=\"mt-8 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                <video class=\"w-full h-auto\" autoplay=\"\" loop=\"\" muted=\"\" playsinline=\"\" preload=\"metadata\" controls=\"\">\r\n                    <source src=\"/Assets/videos/ws-plugin-demo.mp4\" type=\"video/mp4\">\r\n                    Your browser does not support the video tag.\r\n                </video>\r\n            </div>\r\n\r\n            <!-- Value props (benefits) -->\r\n            <ul class=\"mt-10 grid gap-6 md:grid-cols-3\">\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Stay in flow</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Get in-editor suggestions as a streamed diff. Accept or reject in one click.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Private by design</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Runs locally with Ollama. No cloud calls. Works great offline.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">WebSharper-aware when needed</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Toggle RAG to enrich reviews with bundled <em>WebSharper</em> context.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Shadow Git snapshots</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Keep a private audit trail of accepted edits. Browse and roll back anytime.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Model switcher & preferences</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Pick your local coder model and steer tone, naming, and idioms via AI Preferences.\r\n                    </p>\r\n                </li>\r\n                <li class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <h3 class=\"font-semibold text-gray-900 dark:text-white\">Works with huge files</h3>\r\n                    <p class=\"mt-2 text-gray-700 dark:text-gray-300\">\r\n                        Large-file safety falls back to selection-only, so you never lose control.\r\n                    </p>\r\n                </li>\r\n            </ul>\r\n\r\n            <!-- Small, punchy gallery -->\r\n            <div class=\"mt-10 grid gap-4 md:grid-cols-3\">\r\n                <figure class=\"rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/right-click.png\" alt=\"Right-click: WS Code Review \u2192 Show Suggestion\" class=\"w-full h-auto\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center\">Show Suggestion from context menu</figcaption>\r\n                </figure>\r\n                <figure class=\"rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/show-suggestion-cmd.png\" alt=\"Command Palette: Show Suggestion\" class=\"w-full h-auto\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center\">Run from Command Palette</figcaption>\r\n                </figure>\r\n                <figure class=\"rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\">\r\n                    <img src=\"./Assets/images/result.png\" alt=\"Diff preview with Accept/Reject\" class=\"w-full h-auto\">\r\n                    <figcaption class=\"px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center\">Streamed diff \u2022 Accept / Reject</figcaption>\r\n                </figure>\r\n            </div>\r\n\r\n            <!-- Developer details tucked away -->\r\n            <details class=\"mt-8 rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                <summary class=\"cursor-pointer select-none text-sm font-semibold text-gray-900 dark:text-white\">\r\n                    Setup & commands (for developers)\r\n                </summary>\r\n                <div class=\"mt-4 space-y-6 text-gray-700 dark:text-gray-300\">\r\n                    <div>\r\n                        <h4 class=\"font-semibold text-gray-900 dark:text-white\">Quick start</h4>\r\n                        <ol class=\"mt-2 list-decimal pl-5 space-y-2\">\r\n                            <li>Install from Marketplace or run <code>code --install-extension souvanxay.ws-code-review</code>.</li>\r\n                            <li>Install <strong>Ollama</strong>, pull a coder model (<code>ollama pull qwen2.5-coder:7b-instruct</code>), then <code>ollama serve</code>.</li>\r\n                            <li>Open an <code>.fs</code> file. Run <em>WS Code Review: Show Suggestion</em> via shortcut, context menu, or Command Palette.</li>\r\n                            <li>\r\n                                Accept/Reject the suggestion. Enable Shadow Git to snapshot accepts:\r\n                                <code>\"wsCodeReview.git.enable\": true</code>.\r\n                            </li>\r\n                            <li>\r\n                                For WebSharper-docs-aware reviews, toggle the RAG pill or enable\r\n                                <code>\"wsCodeReview.rag.enable\": true</code>, then Refresh.\r\n                            </li>\r\n                        </ol>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 class=\"font-semibold text-gray-900 dark:text-white\">Commands</h4>\r\n                        <ul class=\"mt-2 list-disc pl-5 space-y-1\">\r\n                            <li>WS Code Review: Show Suggestion</li>\r\n                            <li>WS Code Review: Change Ollama Model</li>\r\n                            <li>WS Code Review: Set / Show / Clear AI Preferences</li>\r\n                            <li>WS Code Review: Show / Clear Shadow Git History</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </details>\r\n\r\n            <!-- Soft doc CTA -->\r\n            <a href=\"https://docs.websharper.com/core/ws-ai-plugin\" class=\"mt-8 w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                            flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                            before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                            before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r\n                            hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                <span class=\"relative text-sm\">Read the guide</span>\r\n            </a>\r\n        </section>\r\n    </div>\r\n</body>\r\n</html>"));
}
function t_5(h){
  return h?GetOrLoadTemplate("error", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"min-h-screen grid place-items-center px-6 py-16\" ws-onafterrender=\"OnAfterRender\"> \r\n        <section class=\"w-full max-w-3xl\">\r\n            <div class=\"rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 md:p-12 shadow-sm shadow-gray-950/5\">\r\n                <div class=\"flex items-start gap-5\">\r\n                    <div class=\"h-14 w-14 rounded-full grid place-items-center bg-red-50 text-red-600 dark:bg-red-900/20\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" viewbox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\r\n                            <path d=\"M12 9v4m0 4h.01M10.29 3.86a2 2 0 0 1 3.42 0l8.49 14.73A2 2 0 0 1 20.49 22H3.51a2 2 0 0 1-1.71-3.41L10.29 3.86z\"></path>\r\n                        </svg>\r\n                    </div>\r\n                    <div class=\"min-w-0\">\r\n                        <h1 id=\"title\" class=\"text-gray-800 dark:text-white text-3xl font-bold tracking-tight\" ws-hole=\"ErrorTitle\">\r\n                            Something went wrong\r\n                        </h1>\r\n                        <p id=\"msg\" class=\"mt-2 text-base text-gray-600 dark:text-gray-400\" ws-hole=\"ErrorMessage\">\r\n                            An unexpected error occurred. Please try again.\r\n                        </p>\r\n                        <p id=\"details\" class=\"hidden mt-2 text-xs text-gray-500 dark:text-gray-500\"></p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"mt-8 flex flex-wrap gap-3\">\r\n                    <button id=\"retry\" class=\"h-11 px-5 rounded-xl bg-gray-950 text-white dark:bg-white dark:text-gray-950 border border-gray-950 dark:border-gray-800\" ws-onclick=\"OnRetry\">\r\n                        Try again\r\n                    </button>\r\n                    <a id=\"back\" class=\"h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white cursor-pointer\" ws-onclick=\"OnBack\">\r\n                        Go back\r\n                    </a>\r\n                    <a href=\"./\" class=\"h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white\">\r\n                        Home\r\n                    </a>\r\n                </div>\r\n\r\n                <p class=\"mt-6 text-sm text-gray-600 dark:text-gray-400\">\r\n                    If this keeps happening, please try again later. No changes were made to your account.\r\n                </p>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</body>\r\n</html>"), h):PrepareTemplate("error", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"min-h-screen grid place-items-center px-6 py-16\" ws-onafterrender=\"OnAfterRender\"> \r\n        <section class=\"w-full max-w-3xl\">\r\n            <div class=\"rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 md:p-12 shadow-sm shadow-gray-950/5\">\r\n                <div class=\"flex items-start gap-5\">\r\n                    <div class=\"h-14 w-14 rounded-full grid place-items-center bg-red-50 text-red-600 dark:bg-red-900/20\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" viewbox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\r\n                            <path d=\"M12 9v4m0 4h.01M10.29 3.86a2 2 0 0 1 3.42 0l8.49 14.73A2 2 0 0 1 20.49 22H3.51a2 2 0 0 1-1.71-3.41L10.29 3.86z\"></path>\r\n                        </svg>\r\n                    </div>\r\n                    <div class=\"min-w-0\">\r\n                        <h1 id=\"title\" class=\"text-gray-800 dark:text-white text-3xl font-bold tracking-tight\" ws-hole=\"ErrorTitle\">\r\n                            Something went wrong\r\n                        </h1>\r\n                        <p id=\"msg\" class=\"mt-2 text-base text-gray-600 dark:text-gray-400\" ws-hole=\"ErrorMessage\">\r\n                            An unexpected error occurred. Please try again.\r\n                        </p>\r\n                        <p id=\"details\" class=\"hidden mt-2 text-xs text-gray-500 dark:text-gray-500\"></p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"mt-8 flex flex-wrap gap-3\">\r\n                    <button id=\"retry\" class=\"h-11 px-5 rounded-xl bg-gray-950 text-white dark:bg-white dark:text-gray-950 border border-gray-950 dark:border-gray-800\" ws-onclick=\"OnRetry\">\r\n                        Try again\r\n                    </button>\r\n                    <a id=\"back\" class=\"h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white cursor-pointer\" ws-onclick=\"OnBack\">\r\n                        Go back\r\n                    </a>\r\n                    <a href=\"./\" class=\"h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white\">\r\n                        Home\r\n                    </a>\r\n                </div>\r\n\r\n                <p class=\"mt-6 text-sm text-gray-600 dark:text-gray-400\">\r\n                    If this keeps happening, please try again later. No changes were made to your account.\r\n                </p>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</body>\r\n</html>"));
}
function t_4(h){
  return h?GetOrLoadTemplate("invoice", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"mx-auto max-w-3xl p-6 text-gray-600 dark:text-white\" ws-onafterrender=\"OnAfterRender\">\r\n        <div class=\"mb-6 flex items-center justify-between\">\r\n            <h1 class=\"text-xl font-bold\">\r\n                Invoice <span ws-hole=\"InvId\">-</span>\r\n            </h1>\r\n            <a href=\"./manage-subscription.html#subs\" class=\"rounded-md border px-3 py-2 text-sm border-gray-300 dark:border-white/20\">Back</a>\r\n        </div>\r\n\r\n        <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800 space-y-3\">\r\n            <div class=\"grid grid-cols-2 gap-4\">\r\n                <div>\r\n                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Date</div>\r\n                    <div ws-hole=\"InvDate\" class=\"font-medium\">-</div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Status</div>\r\n                    <div ws-hole=\"InvStatus\" class=\"font-medium capitalize\">-</div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Amount</div>\r\n                    <div ws-hole=\"InvAmount\" class=\"font-medium\">-</div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Subscription</div>\r\n                    <div ws-hole=\"InvSub\" class=\"font-medium\">-</div>\r\n                </div>\r\n            </div>\r\n            <hr class=\"border-gray-200 dark:border-white/10\">\r\n            <div class=\"text-sm\">\r\n                <div class=\"text-gray-600 dark:text-gray-400\">Bill to</div>\r\n                <div ws-hole=\"BillToName\">-</div>\r\n                <div ws-hole=\"BillToAddr\" class=\"text-gray-600 dark:text-gray-400\">-</div>\r\n                <div ws-hole=\"BillToVat\" class=\"text-gray-600 dark:text-gray-400\">-</div>\r\n            </div>\r\n            <!-- Add line items if you expose them -->\r\n            <div id=\"lineItems\" class=\"mt-4\"></div>\r\n        </section>\r\n    </div>\r\n</body>\r\n</html>"), h):PrepareTemplate("invoice", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"mx-auto max-w-3xl p-6 text-gray-600 dark:text-white\" ws-onafterrender=\"OnAfterRender\">\r\n        <div class=\"mb-6 flex items-center justify-between\">\r\n            <h1 class=\"text-xl font-bold\">\r\n                Invoice <span ws-hole=\"InvId\">-</span>\r\n            </h1>\r\n            <a href=\"./manage-subscription.html#subs\" class=\"rounded-md border px-3 py-2 text-sm border-gray-300 dark:border-white/20\">Back</a>\r\n        </div>\r\n\r\n        <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800 space-y-3\">\r\n            <div class=\"grid grid-cols-2 gap-4\">\r\n                <div>\r\n                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Date</div>\r\n                    <div ws-hole=\"InvDate\" class=\"font-medium\">-</div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Status</div>\r\n                    <div ws-hole=\"InvStatus\" class=\"font-medium capitalize\">-</div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Amount</div>\r\n                    <div ws-hole=\"InvAmount\" class=\"font-medium\">-</div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Subscription</div>\r\n                    <div ws-hole=\"InvSub\" class=\"font-medium\">-</div>\r\n                </div>\r\n            </div>\r\n            <hr class=\"border-gray-200 dark:border-white/10\">\r\n            <div class=\"text-sm\">\r\n                <div class=\"text-gray-600 dark:text-gray-400\">Bill to</div>\r\n                <div ws-hole=\"BillToName\">-</div>\r\n                <div ws-hole=\"BillToAddr\" class=\"text-gray-600 dark:text-gray-400\">-</div>\r\n                <div ws-hole=\"BillToVat\" class=\"text-gray-600 dark:text-gray-400\">-</div>\r\n            </div>\r\n            <!-- Add line items if you expose them -->\r\n            <div id=\"lineItems\" class=\"mt-4\"></div>\r\n        </section>\r\n    </div>\r\n</body>\r\n</html>"));
}
function t_3(h){
  return h?GetOrLoadTemplate("success", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"max-w-xl mx-auto px-6 py-16 text-center\" ws-onafterrender=\"OnAfterRender\">\r\n        <h1 class=\"text-3xl font-bold text-gray-950 dark:text-white\">Thanks! \ud83c\udf89</h1>\r\n\r\n        <p id=\"wsMsg\" ws-hole=\"MessageText\" class=\"mt-3 text-gray-600 dark:text-gray-400\">\r\n            Confirming your payment\u2026\r\n        </p>\r\n\r\n        <div id=\"wsDetails\" class=\"mt-6 text-md text-gray-700 dark:text-gray-300 space-y-4\" ws-attr=\"DetailsAttr\" ws-hole=\"DetailsDoc\">\r\n        </div>\r\n\r\n        <a href=\"./manage-subscription.html\" class=\"mt-8 inline-flex items-center justify-center rounded-xl h-10 px-4 bg-gray-950 text-white dark:bg-white dark:text-gray-950\">\r\n            Manage subscription\r\n        </a>\r\n    </div>\r\n</body>\r\n</html>"), h):PrepareTemplate("success", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"max-w-xl mx-auto px-6 py-16 text-center\" ws-onafterrender=\"OnAfterRender\">\r\n        <h1 class=\"text-3xl font-bold text-gray-950 dark:text-white\">Thanks! \ud83c\udf89</h1>\r\n\r\n        <p id=\"wsMsg\" ws-hole=\"MessageText\" class=\"mt-3 text-gray-600 dark:text-gray-400\">\r\n            Confirming your payment\u2026\r\n        </p>\r\n\r\n        <div id=\"wsDetails\" class=\"mt-6 text-md text-gray-700 dark:text-gray-300 space-y-4\" ws-attr=\"DetailsAttr\" ws-hole=\"DetailsDoc\">\r\n        </div>\r\n\r\n        <a href=\"./manage-subscription.html\" class=\"mt-8 inline-flex items-center justify-center rounded-xl h-10 px-4 bg-gray-950 text-white dark:bg-white dark:text-gray-950\">\r\n            Manage subscription\r\n        </a>\r\n    </div>\r\n</body>\r\n</html>"));
}
function t(h){
  return h?GetOrLoadTemplate("support", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"space-y-20\" ws-onafterrender=\"OnAfterRender\">\r\n        <!-- Hero / Banner -->\r\n        <section class=\"pt-28 sm:pt-32\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"grid items-center gap-8 md:grid-cols-12\">\r\n                    <div class=\"md:col-span-7 text-center md:text-left\">\r\n                        <h1 class=\"font-bold tracking-tight text-gray-950 dark:text-white text-4xl sm:text-5xl\">\r\n                            WebSharper Expert Support\r\n                        </h1>\r\n                        <p class=\"mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 max-w-2xl md:mx-0 mx-auto\">\r\n                            Our experienced WebSharper support team is available to help you make the right decisions for your development project, and can save you hundreds of hours when important and difficult questions arise.\r\n                        </p>\r\n\r\n                        <!-- Chips -->\r\n                        <div class=\"mt-4 flex flex-wrap justify-center md:justify-start gap-2\">\r\n                            <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                Email & web support\r\n                            </span>\r\n                            <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                First response: 4h-2d\r\n                            </span>\r\n                            <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                Mentoring & training available\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Visual -->\r\n                    <div class=\"md:col-span-5\">\r\n                        <figure class=\"rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-900\">\r\n                            <img src=\"./Assets/images/slay.png\" alt=\"WebSharper support: experts reviewing code and architecture\" class=\"w-full h-auto\">\r\n                        </figure>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"scroll-my-16\">\r\n            <div class=\"mx-2 md:mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"rounded-3xl overflow-hidden border dark:border-gray-800\">\r\n                    <div class=\"py-12 lg:py-16 lg:px-16 border-b dark:border-gray-800\">\r\n                        <h2 class=\"font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                            Quick, practical help from the people who build WebSharper\r\n                        </h2>\r\n                        <p class=\"mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                            Get senior guidance on architecture, performance, reactive UI, and integrations plus hands-on fixes when you need them.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div class=\"lg:px-16\">\r\n                        <!-- Visual / proof -->\r\n                        <div class=\"lg:col-span-5 lg:-mr-10 py-12 md:py-16\">\r\n                            <div class=\"relative\">\r\n                                <div class=\"absolute translate-y-1/2 mx-auto blur-3xl inset-0 rounded-t-full bg-brand-primary/20 dark:bg-brand-primary/20\"></div>\r\n                                <figure class=\"relative rounded-2xl overflow-hidden border bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-sm w-1/2 mx-auto\">\r\n\r\n                                    <img src=\"./Assets/images/slay.png\" alt=\"Support walkthrough: issue context, guidance, and fix\" class=\"w-full h-auto\">\r\n                                </figure>\r\n                                <!-- short 15\ufffd20s looped video instead of static image -->\r\n                                <!--\r\n                                <video class=\"relative mt-4 w-full rounded-2xl border border-gray-200 dark:border-gray-800\" autoplay muted loop playsinline poster=\"./Assets/images/support-video-poster.png\">\r\n                                    <source src=\"./videos/support-teaser.mp4\" type=\"video/mp4\">\r\n                                </video>\r\n                                -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Support value props -->\r\n        <section class=\"mt-12\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <ul class=\"grid gap-4 md:grid-cols-3\">\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7 9l5 3.5L17 9\"></path><path d=\"M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z\"></path></g></svg>\r\n                            <span>Email and web support</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Email us your support queries, architectural or best practice questions, or post them to our dedicated support site.\r\n                        </p>\r\n                    </li>\r\n\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0\"></path><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z\" clip-rule=\"evenodd\"></path></svg>\r\n                            <span>Fast response time</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Receive the first response to your queries from within 4 hours up to 2 days, depending on your selected support plan..\r\n                        </p>\r\n                    </li>\r\n\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96m0 0v288\"></path></svg>\r\n                            <span>Mentoring and training</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Pick a Start-up or Enterprise plan and jumpstart your team's productivity with our online WebSharper training and mentoring.\r\n                        </p>\r\n                    </li>\r\n\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M7 3a2 2 0 0 1 4 0h1.5A1.5 1.5 0 0 1 14 4.5V7h-1a1 1 0 0 0 0 2h1v2.5a1.5 1.5 0 0 1-1.5 1.5H11a2 2 0 0 1-4 0H5.5A1.5 1.5 0 0 1 4 11.5V10a2 2 0 0 1 0-4V4.5A1.5 1.5 0 0 1 5.5 3zm2-1a1 1 0 0 0-1 1v1H5.5a.5.5 0 0 0-.5.5V7H4a1 1 0 0 0 0 2h1v2.5a.5.5 0 0 0 .5.5H8v1a1 1 0 0 0 2 0v-1h2.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 0-4V4.5a.5.5 0 0 0-.5-.5H10V3a1 1 0 0 0-1-1\"></path></svg>\r\n                            <span>Extensions support</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Working heavily with WebSharper extensions? Get the help you need with any issues you encounter in these extensions.\r\n                        </p>\r\n                    </li>\r\n\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9\"></path></svg>\r\n                            <span>Architectural review</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Next to support questions, we can also help you decide on the best architecture for your project, or give best practice guidelines for your team.\r\n                        </p>\r\n                    </li>\r\n\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M19 15v-3.062A3.938 3.938 0 0 0 15.063 8H8.936A3.938 3.938 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z\"></path><path d=\"M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1\"></path><path stroke-linecap=\"round\" d=\"M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15\"></path></g></svg>\r\n                            <span>Priority bugfixes</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Your support ticket jumps to the front of our priority queue and becomes the first to fix. Get the most timely help when you need it most.\r\n                        </p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"scroll-my-16\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <h2 class=\"text-center font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                    Choose your plan\r\n                </h2>\r\n                <p class=\"text-center mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                    Monthly or yearly billing, per-seat for teams or a freelancer option.\r\n                </p>\r\n\r\n                <!-- Billing period toggle -->\r\n                <div class=\"mx-auto mt-6 flex w-full max-w-xs items-center justify-center rounded-xl border border-gray-200 bg-white p-1\r\n                                dark:bg-gray-950 dark:border-gray-800\">\r\n                    <button ws-onclick=\"OnBillMonth\" ws-attr=\"BillMonthAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 text flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"false\" aria-pressed=\"false\">\r\n                        Per month\r\n                    </button>\r\n                    <button ws-onclick=\"OnBillYear\" ws-attr=\"BillYearAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"true\" aria-pressed=\"true\">\r\n                        Per year\r\n                    </button>\r\n                </div>\r\n\r\n                <!-- Plans grid -->\r\n                <div class=\"mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2\">\r\n                    <!-- Professional (per seat) -->\r\n                    <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\" data-price-month=\"250\" data-price-year=\"2500\">\r\n                        <div class=\"flex items-start justify-between gap-4\">\r\n                            <div>\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                <div ws-hole=\"ProName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                    Professional\r\n                                </div>\r\n                                <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                    <span ws-hole=\"ProPriceAmount\">$2,500</span>\r\n                                    <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"ProPriceLabel\">\r\n                                        / seat / year\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Seat selector -->\r\n                            <div class=\"flex items-center gap-2\">\r\n                                <button ws-onclick=\"OnSeatMinus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Decrease seats\" type=\"button\">\r\n                                    -\r\n                                </button>\r\n                                <input type=\"text\" ws-var=\"SeatCount\" inputmode=\"numeric\" pattern=\"[0-9]*\" min=\"1\" step=\"1\" value=\"1\" class=\"w-20 text-center rounded-xl border border-gray-300 bg-transparent dark:border-white/20 text-gray-900 dark:text-white h-10\" aria-label=\"Seat count\">\r\n                                <button ws-onclick=\"OnSeatPlus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Increase seats\" type=\"button\">\r\n                                    +\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Total -->\r\n                        <div class=\"mt-4 flex items-center justify-between\">\r\n                            <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"ProTotalLabel\">\r\n                                Total (yearly)\r\n                            </div>\r\n                            <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"ProTotalAmount\">\r\n                                $2,500\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- CTA -->\r\n                        <a ws-attr=\"ProCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                            <span class=\"relative text-sm\">Continue to checkout</span>\r\n                        </a>\r\n\r\n                        <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"ProNote\">\r\n                            Assign GitHub usernames after purchase. Prices in USD.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <!-- Freelancer (1 seat) -->\r\n                    <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\">\r\n                        <div class=\"flex items-start justify-between gap-4\">\r\n                            <div>\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                <div ws-hole=\"FreeName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                    Freelancer\r\n                                </div>\r\n                                <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                    <span ws-hole=\"FreePriceAmount\">$300</span>\r\n                                    <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"FreePriceLabel\">\r\n                                        / year\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"rounded-xl border border-gray-300 px-3 h-10 flex items-center\r\n                                            text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                1 seat\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Total -->\r\n                        <div class=\"mt-4 flex items-center justify-between\">\r\n                            <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"FreeTotalLabel\">\r\n                                Total (yearly)\r\n                            </div>\r\n                            <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"FreeTotalAmount\">\r\n                                $300\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- CTA -->\r\n                        <a ws-attr=\"FreeCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                            <span class=\"relative text-sm\">Continue to checkout</span>\r\n                        </a>\r\n\r\n                        <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"FreeNote\">\r\n                            Ideal for solo developers. Prices in USD.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- contact us -->\r\n        <section class=\"scroll-my-0 py-7 dark:bg-gray-900 border-t-2 border-b-2 dark:border-none\">\r\n            <div class=\"mx-auto max-w-xl p-8 rounded content mb-10\">\r\n                <h2 class=\"header text-center mb-8\">Contact us</h2>\r\n\r\n                <form method=\"post\">\r\n\r\n                    <!-- Subject -->\r\n                    <div class=\"mb-6\">\r\n                        <label for=\"emailSubject\" class=\"block font-semibold mb-2\">Subject</label>\r\n                        <input type=\"text\" name=\"email-subject\" ws-var=\"ContactSubjectVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\" value=\"WebSharper support\">\r\n                    </div>\r\n\r\n                    <!-- Message -->\r\n                    <div class=\"mb-6\">\r\n                        <label for=\"emailMessage\" class=\"block font-semibold mb-2\">Message</label>\r\n                        <textarea name=\"email-message\" rows=\"5\" ws-var=\"ContactMessageVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\"></textarea>\r\n                    </div>\r\n\r\n                    <!-- Row with Email, Name, Country -->\r\n                    <div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6\">\r\n                        <!-- Email -->\r\n                        <div>\r\n                            <label for=\"emailAddress\" class=\"block font-semibold mb-2\">Your email address</label>\r\n                            <input type=\"email\" name=\"email-address\" ws-var=\"ContactEmailVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                        </div>\r\n\r\n                        <!-- Name -->\r\n                        <div>\r\n                            <label for=\"emailName\" class=\"block font-semibold mb-2\">Your name</label>\r\n                            <input type=\"text\" ws-var=\"ContactNameVar\" name=\"name\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                        </div>\r\n\r\n                        <!-- Country -->\r\n                        <div>\r\n                            <label for=\"emailCountry\" class=\"block font-semibold mb-2\">Your country</label>\r\n                            <select name=\"email-country\" ws-var=\"ContactCountryVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                                <option value=\"Afghanistan\">Afghanistan</option>\r\n                                <option value=\"Albania\">Albania</option>\r\n                                <option value=\"Algeria\">Algeria</option>\r\n                                <option value=\"Andorra\">Andorra</option>\r\n                                <option value=\"Angola\">Angola</option>\r\n                                <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\r\n                                <option value=\"Argentina\">Argentina</option>\r\n                                <option value=\"Armenia\">Armenia</option>\r\n                                <option value=\"Australia\">Australia</option>\r\n                                <option value=\"Austria\">Austria</option>\r\n                                <option value=\"Azerbaijan\">Azerbaijan</option>\r\n                                <option value=\"Bahamas\">Bahamas</option>\r\n                                <option value=\"Bahrain\">Bahrain</option>\r\n                                <option value=\"Bangladesh\">Bangladesh</option>\r\n                                <option value=\"Barbados\">Barbados</option>\r\n                                <option value=\"Belarus\">Belarus</option>\r\n                                <option value=\"Belgium\">Belgium</option>\r\n                                <option value=\"Belize\">Belize</option>\r\n                                <option value=\"Benin\">Benin</option>\r\n                                <option value=\"Bhutan\">Bhutan</option>\r\n                                <option value=\"Bolivia\">Bolivia</option>\r\n                                <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\r\n                                <option value=\"Botswana\">Botswana</option>\r\n                                <option value=\"Brazil\">Brazil</option>\r\n                                <option value=\"Brunei\">Brunei</option>\r\n                                <option value=\"Bulgaria\">Bulgaria</option>\r\n                                <option value=\"Burkina Faso\">Burkina Faso</option>\r\n                                <option value=\"Burundi\">Burundi</option>\r\n                                <option value=\"Cabo Verde\">Cabo Verde</option>\r\n                                <option value=\"Cambodia\">Cambodia</option>\r\n                                <option value=\"Cameroon\">Cameroon</option>\r\n                                <option value=\"Canada\">Canada</option>\r\n                                <option value=\"Central African Republic\">Central African Republic</option>\r\n                                <option value=\"Chad\">Chad</option>\r\n                                <option value=\"Chile\">Chile</option>\r\n                                <option value=\"China\">China</option>\r\n                                <option value=\"Colombia\">Colombia</option>\r\n                                <option value=\"Comoros\">Comoros</option>\r\n                                <option value=\"Congo (Congo-Brazzaville)\">Congo (Congo-Brazzaville)</option>\r\n                                <option value=\"Costa Rica\">Costa Rica</option>\r\n                                <option value=\"Croatia\">Croatia</option>\r\n                                <option value=\"Cuba\">Cuba</option>\r\n                                <option value=\"Cyprus\">Cyprus</option>\r\n                                <option value=\"Czech Republic\">Czech Republic</option>\r\n                                <option value=\"Democratic Republic of the Congo\">Democratic Republic of the Congo</option>\r\n                                <option value=\"Denmark\">Denmark</option>\r\n                                <option value=\"Djibouti\">Djibouti</option>\r\n                                <option value=\"Dominica\">Dominica</option>\r\n                                <option value=\"Dominican Republic\">Dominican Republic</option>\r\n                                <option value=\"Ecuador\">Ecuador</option>\r\n                                <option value=\"Egypt\">Egypt</option>\r\n                                <option value=\"El Salvador\">El Salvador</option>\r\n                                <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n                                <option value=\"Eritrea\">Eritrea</option>\r\n                                <option value=\"Estonia\">Estonia</option>\r\n                                <option value=\"Eswatini\">Eswatini</option>\r\n                                <option value=\"Ethiopia\">Ethiopia</option>\r\n                                <option value=\"Fiji\">Fiji</option>\r\n                                <option value=\"Finland\">Finland</option>\r\n                                <option value=\"France\">France</option>\r\n                                <option value=\"Gabon\">Gabon</option>\r\n                                <option value=\"Gambia\">Gambia</option>\r\n                                <option value=\"Georgia\">Georgia</option>\r\n                                <option value=\"Germany\">Germany</option>\r\n                                <option value=\"Ghana\">Ghana</option>\r\n                                <option value=\"Greece\">Greece</option>\r\n                                <option value=\"Grenada\">Grenada</option>\r\n                                <option value=\"Guatemala\">Guatemala</option>\r\n                                <option value=\"Guinea\">Guinea</option>\r\n                                <option value=\"Guinea-Bissau\">Guinea-Bissau</option>\r\n                                <option value=\"Guyana\">Guyana</option>\r\n                                <option value=\"Haiti\">Haiti</option>\r\n                                <option value=\"Honduras\">Honduras</option>\r\n                                <option value=\"Hungary\">Hungary</option>\r\n                                <option value=\"Iceland\">Iceland</option>\r\n                                <option value=\"India\">India</option>\r\n                                <option value=\"Indonesia\">Indonesia</option>\r\n                                <option value=\"Iran\">Iran</option>\r\n                                <option value=\"Iraq\">Iraq</option>\r\n                                <option value=\"Ireland\">Ireland</option>\r\n                                <option value=\"Israel\">Israel</option>\r\n                                <option value=\"Italy\">Italy</option>\r\n                                <option value=\"Jamaica\">Jamaica</option>\r\n                                <option value=\"Japan\">Japan</option>\r\n                                <option value=\"Jordan\">Jordan</option>\r\n                                <option value=\"Kazakhstan\">Kazakhstan</option>\r\n                                <option value=\"Kenya\">Kenya</option>\r\n                                <option value=\"Kiribati\">Kiribati</option>\r\n                                <option value=\"Kuwait\">Kuwait</option>\r\n                                <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n                                <option value=\"Laos\">Laos</option>\r\n                                <option value=\"Latvia\">Latvia</option>\r\n                                <option value=\"Lebanon\">Lebanon</option>\r\n                                <option value=\"Lesotho\">Lesotho</option>\r\n                                <option value=\"Liberia\">Liberia</option>\r\n                                <option value=\"Libya\">Libya</option>\r\n                                <option value=\"Liechtenstein\">Liechtenstein</option>\r\n                                <option value=\"Lithuania\">Lithuania</option>\r\n                                <option value=\"Luxembourg\">Luxembourg</option>\r\n                                <option value=\"Madagascar\">Madagascar</option>\r\n                                <option value=\"Malawi\">Malawi</option>\r\n                                <option value=\"Malaysia\">Malaysia</option>\r\n                                <option value=\"Maldives\">Maldives</option>\r\n                                <option value=\"Mali\">Mali</option>\r\n                                <option value=\"Malta\">Malta</option>\r\n                                <option value=\"Marshall Islands\">Marshall Islands</option>\r\n                                <option value=\"Mauritania\">Mauritania</option>\r\n                                <option value=\"Mauritius\">Mauritius</option>\r\n                                <option value=\"Mexico\">Mexico</option>\r\n                                <option value=\"Micronesia\">Micronesia</option>\r\n                                <option value=\"Moldova\">Moldova</option>\r\n                                <option value=\"Monaco\">Monaco</option>\r\n                                <option value=\"Mongolia\">Mongolia</option>\r\n                                <option value=\"Montenegro\">Montenegro</option>\r\n                                <option value=\"Morocco\">Morocco</option>\r\n                                <option value=\"Mozambique\">Mozambique</option>\r\n                                <option value=\"Myanmar (Burma)\">Myanmar (Burma)</option>\r\n                                <option value=\"Namibia\">Namibia</option>\r\n                                <option value=\"Nauru\">Nauru</option>\r\n                                <option value=\"Nepal\">Nepal</option>\r\n                                <option value=\"Netherlands\">Netherlands</option>\r\n                                <option value=\"New Zealand\">New Zealand</option>\r\n                                <option value=\"Nicaragua\">Nicaragua</option>\r\n                                <option value=\"Niger\">Niger</option>\r\n                                <option value=\"Nigeria\">Nigeria</option>\r\n                                <option value=\"North Korea\">North Korea</option>\r\n                                <option value=\"North Macedonia\">North Macedonia</option>\r\n                                <option value=\"Norway\">Norway</option>\r\n                                <option value=\"Oman\">Oman</option>\r\n                                <option value=\"Pakistan\">Pakistan</option>\r\n                                <option value=\"Palau\">Palau</option>\r\n                                <option value=\"Palestine\">Palestine</option>\r\n                                <option value=\"Panama\">Panama</option>\r\n                                <option value=\"Papua New Guinea\">Papua New Guinea</option>\r\n                                <option value=\"Paraguay\">Paraguay</option>\r\n                                <option value=\"Peru\">Peru</option>\r\n                                <option value=\"Philippines\">Philippines</option>\r\n                                <option value=\"Poland\">Poland</option>\r\n                                <option value=\"Portugal\">Portugal</option>\r\n                                <option value=\"Qatar\">Qatar</option>\r\n                                <option value=\"Romania\">Romania</option>\r\n                                <option value=\"Russia\">Russia</option>\r\n                                <option value=\"Rwanda\">Rwanda</option>\r\n                                <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\r\n                                <option value=\"Saint Lucia\">Saint Lucia</option>\r\n                                <option value=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</option>\r\n                                <option value=\"Samoa\">Samoa</option>\r\n                                <option value=\"San Marino\">San Marino</option>\r\n                                <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\r\n                                <option value=\"Saudi Arabia\">Saudi Arabia</option>\r\n                                <option value=\"Senegal\">Senegal</option>\r\n                                <option value=\"Serbia\">Serbia</option>\r\n                                <option value=\"Seychelles\">Seychelles</option>\r\n                                <option value=\"Sierra Leone\">Sierra Leone</option>\r\n                                <option value=\"Singapore\">Singapore</option>\r\n                                <option value=\"Slovakia\">Slovakia</option>\r\n                                <option value=\"Slovenia\">Slovenia</option>\r\n                                <option value=\"Solomon Islands\">Solomon Islands</option>\r\n                                <option value=\"Somalia\">Somalia</option>\r\n                                <option value=\"South Africa\">South Africa</option>\r\n                                <option value=\"South Korea\">South Korea</option>\r\n                                <option value=\"South Sudan\">South Sudan</option>\r\n                                <option value=\"Spain\">Spain</option>\r\n                                <option value=\"Sri Lanka\">Sri Lanka</option>\r\n                                <option value=\"Sudan\">Sudan</option>\r\n                                <option value=\"Suriname\">Suriname</option>\r\n                                <option value=\"Sweden\">Sweden</option>\r\n                                <option value=\"Switzerland\">Switzerland</option>\r\n                                <option value=\"Syria\">Syria</option>\r\n                                <option value=\"Taiwan\">Taiwan</option>\r\n                                <option value=\"Tajikistan\">Tajikistan</option>\r\n                                <option value=\"Tanzania\">Tanzania</option>\r\n                                <option value=\"Thailand\">Thailand</option>\r\n                                <option value=\"Timor-Leste\">Timor-Leste</option>\r\n                                <option value=\"Togo\">Togo</option>\r\n                                <option value=\"Tonga\">Tonga</option>\r\n                                <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\r\n                                <option value=\"Tunisia\">Tunisia</option>\r\n                                <option value=\"Turkey\">Turkey</option>\r\n                                <option value=\"Turkmenistan\">Turkmenistan</option>\r\n                                <option value=\"Tuvalu\">Tuvalu</option>\r\n                                <option value=\"Uganda\">Uganda</option>\r\n                                <option value=\"Ukraine\">Ukraine</option>\r\n                                <option value=\"United Arab Emirates\">United Arab Emirates</option>\r\n                                <option value=\"United Kingdom\">United Kingdom</option>\r\n                                <option value=\"United States\" selected=\"\">United States</option>\r\n                                <option value=\"Uruguay\">Uruguay</option>\r\n                                <option value=\"Uzbekistan\">Uzbekistan</option>\r\n                                <option value=\"Vanuatu\">Vanuatu</option>\r\n                                <option value=\"Vatican City\">Vatican City</option>\r\n                                <option value=\"Venezuela\">Venezuela</option>\r\n                                <option value=\"Vietnam\">Vietnam</option>\r\n                                <option value=\"Yemen\">Yemen</option>\r\n                                <option value=\"Zambia\">Zambia</option>\r\n                                <option value=\"Zimbabwe\">Zimbabwe</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Send Button -->\r\n                    <div class=\"text-left\">\r\n                        <button ws-attr=\"ContactSendButtonAttr\" type=\"button\" ws-onclick=\"OnContactSendClick\" class=\"bg-blue-500 text-white font-semibold px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-blue-400\">\r\n                            ${ContactSendButtonText}\r\n                        </button>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n        </section>\r\n\r\n    </div>\r\n</body>\r\n</html>"), h):PrepareTemplate("support", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"space-y-20\" ws-onafterrender=\"OnAfterRender\">\r\n        <!-- Hero / Banner -->\r\n        <section class=\"pt-28 sm:pt-32\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"grid items-center gap-8 md:grid-cols-12\">\r\n                    <div class=\"md:col-span-7 text-center md:text-left\">\r\n                        <h1 class=\"font-bold tracking-tight text-gray-950 dark:text-white text-4xl sm:text-5xl\">\r\n                            WebSharper Expert Support\r\n                        </h1>\r\n                        <p class=\"mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 max-w-2xl md:mx-0 mx-auto\">\r\n                            Our experienced WebSharper support team is available to help you make the right decisions for your development project, and can save you hundreds of hours when important and difficult questions arise.\r\n                        </p>\r\n\r\n                        <!-- Chips -->\r\n                        <div class=\"mt-4 flex flex-wrap justify-center md:justify-start gap-2\">\r\n                            <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                Email & web support\r\n                            </span>\r\n                            <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                First response: 4h-2d\r\n                            </span>\r\n                            <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                Mentoring & training available\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Visual -->\r\n                    <div class=\"md:col-span-5\">\r\n                        <figure class=\"rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-900\">\r\n                            <img src=\"./Assets/images/slay.png\" alt=\"WebSharper support: experts reviewing code and architecture\" class=\"w-full h-auto\">\r\n                        </figure>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"scroll-my-16\">\r\n            <div class=\"mx-2 md:mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <div class=\"rounded-3xl overflow-hidden border dark:border-gray-800\">\r\n                    <div class=\"py-12 lg:py-16 lg:px-16 border-b dark:border-gray-800\">\r\n                        <h2 class=\"font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                            Quick, practical help from the people who build WebSharper\r\n                        </h2>\r\n                        <p class=\"mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                            Get senior guidance on architecture, performance, reactive UI, and integrations plus hands-on fixes when you need them.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div class=\"lg:px-16\">\r\n                        <!-- Visual / proof -->\r\n                        <div class=\"lg:col-span-5 lg:-mr-10 py-12 md:py-16\">\r\n                            <div class=\"relative\">\r\n                                <div class=\"absolute translate-y-1/2 mx-auto blur-3xl inset-0 rounded-t-full bg-brand-primary/20 dark:bg-brand-primary/20\"></div>\r\n                                <figure class=\"relative rounded-2xl overflow-hidden border bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-sm w-1/2 mx-auto\">\r\n\r\n                                    <img src=\"./Assets/images/slay.png\" alt=\"Support walkthrough: issue context, guidance, and fix\" class=\"w-full h-auto\">\r\n                                </figure>\r\n                                <!-- short 15\ufffd20s looped video instead of static image -->\r\n                                <!--\r\n                                <video class=\"relative mt-4 w-full rounded-2xl border border-gray-200 dark:border-gray-800\" autoplay muted loop playsinline poster=\"./Assets/images/support-video-poster.png\">\r\n                                    <source src=\"./videos/support-teaser.mp4\" type=\"video/mp4\">\r\n                                </video>\r\n                                -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Support value props -->\r\n        <section class=\"mt-12\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <ul class=\"grid gap-4 md:grid-cols-3\">\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7 9l5 3.5L17 9\"></path><path d=\"M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z\"></path></g></svg>\r\n                            <span>Email and web support</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Email us your support queries, architectural or best practice questions, or post them to our dedicated support site.\r\n                        </p>\r\n                    </li>\r\n\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0\"></path><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z\" clip-rule=\"evenodd\"></path></svg>\r\n                            <span>Fast response time</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Receive the first response to your queries from within 4 hours up to 2 days, depending on your selected support plan..\r\n                        </p>\r\n                    </li>\r\n\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96m0 0v288\"></path></svg>\r\n                            <span>Mentoring and training</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Pick a Start-up or Enterprise plan and jumpstart your team's productivity with our online WebSharper training and mentoring.\r\n                        </p>\r\n                    </li>\r\n\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M7 3a2 2 0 0 1 4 0h1.5A1.5 1.5 0 0 1 14 4.5V7h-1a1 1 0 0 0 0 2h1v2.5a1.5 1.5 0 0 1-1.5 1.5H11a2 2 0 0 1-4 0H5.5A1.5 1.5 0 0 1 4 11.5V10a2 2 0 0 1 0-4V4.5A1.5 1.5 0 0 1 5.5 3zm2-1a1 1 0 0 0-1 1v1H5.5a.5.5 0 0 0-.5.5V7H4a1 1 0 0 0 0 2h1v2.5a.5.5 0 0 0 .5.5H8v1a1 1 0 0 0 2 0v-1h2.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 0-4V4.5a.5.5 0 0 0-.5-.5H10V3a1 1 0 0 0-1-1\"></path></svg>\r\n                            <span>Extensions support</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Working heavily with WebSharper extensions? Get the help you need with any issues you encounter in these extensions.\r\n                        </p>\r\n                    </li>\r\n\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9\"></path></svg>\r\n                            <span>Architectural review</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Next to support questions, we can also help you decide on the best architecture for your project, or give best practice guidelines for your team.\r\n                        </p>\r\n                    </li>\r\n\r\n                    <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                        <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                            <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M19 15v-3.062A3.938 3.938 0 0 0 15.063 8H8.936A3.938 3.938 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z\"></path><path d=\"M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1\"></path><path stroke-linecap=\"round\" d=\"M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15\"></path></g></svg>\r\n                            <span>Priority bugfixes</span>\r\n                        </h3>\r\n                        <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                            Your support ticket jumps to the front of our priority queue and becomes the first to fix. Get the most timely help when you need it most.\r\n                        </p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"scroll-my-16\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <h2 class=\"text-center font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                    Choose your plan\r\n                </h2>\r\n                <p class=\"text-center mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                    Monthly or yearly billing, per-seat for teams or a freelancer option.\r\n                </p>\r\n\r\n                <!-- Billing period toggle -->\r\n                <div class=\"mx-auto mt-6 flex w-full max-w-xs items-center justify-center rounded-xl border border-gray-200 bg-white p-1\r\n                                dark:bg-gray-950 dark:border-gray-800\">\r\n                    <button ws-onclick=\"OnBillMonth\" ws-attr=\"BillMonthAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 text flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"false\" aria-pressed=\"false\">\r\n                        Per month\r\n                    </button>\r\n                    <button ws-onclick=\"OnBillYear\" ws-attr=\"BillYearAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"true\" aria-pressed=\"true\">\r\n                        Per year\r\n                    </button>\r\n                </div>\r\n\r\n                <!-- Plans grid -->\r\n                <div class=\"mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2\">\r\n                    <!-- Professional (per seat) -->\r\n                    <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\" data-price-month=\"250\" data-price-year=\"2500\">\r\n                        <div class=\"flex items-start justify-between gap-4\">\r\n                            <div>\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                <div ws-hole=\"ProName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                    Professional\r\n                                </div>\r\n                                <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                    <span ws-hole=\"ProPriceAmount\">$2,500</span>\r\n                                    <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"ProPriceLabel\">\r\n                                        / seat / year\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Seat selector -->\r\n                            <div class=\"flex items-center gap-2\">\r\n                                <button ws-onclick=\"OnSeatMinus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Decrease seats\" type=\"button\">\r\n                                    -\r\n                                </button>\r\n                                <input type=\"text\" ws-var=\"SeatCount\" inputmode=\"numeric\" pattern=\"[0-9]*\" min=\"1\" step=\"1\" value=\"1\" class=\"w-20 text-center rounded-xl border border-gray-300 bg-transparent dark:border-white/20 text-gray-900 dark:text-white h-10\" aria-label=\"Seat count\">\r\n                                <button ws-onclick=\"OnSeatPlus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Increase seats\" type=\"button\">\r\n                                    +\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Total -->\r\n                        <div class=\"mt-4 flex items-center justify-between\">\r\n                            <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"ProTotalLabel\">\r\n                                Total (yearly)\r\n                            </div>\r\n                            <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"ProTotalAmount\">\r\n                                $2,500\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- CTA -->\r\n                        <a ws-attr=\"ProCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                            <span class=\"relative text-sm\">Continue to checkout</span>\r\n                        </a>\r\n\r\n                        <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"ProNote\">\r\n                            Assign GitHub usernames after purchase. Prices in USD.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <!-- Freelancer (1 seat) -->\r\n                    <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\">\r\n                        <div class=\"flex items-start justify-between gap-4\">\r\n                            <div>\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                <div ws-hole=\"FreeName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                    Freelancer\r\n                                </div>\r\n                                <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                    <span ws-hole=\"FreePriceAmount\">$300</span>\r\n                                    <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"FreePriceLabel\">\r\n                                        / year\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"rounded-xl border border-gray-300 px-3 h-10 flex items-center\r\n                                            text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                1 seat\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Total -->\r\n                        <div class=\"mt-4 flex items-center justify-between\">\r\n                            <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"FreeTotalLabel\">\r\n                                Total (yearly)\r\n                            </div>\r\n                            <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"FreeTotalAmount\">\r\n                                $300\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- CTA -->\r\n                        <a ws-attr=\"FreeCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                            <span class=\"relative text-sm\">Continue to checkout</span>\r\n                        </a>\r\n\r\n                        <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"FreeNote\">\r\n                            Ideal for solo developers. Prices in USD.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- contact us -->\r\n        <section class=\"scroll-my-0 py-7 dark:bg-gray-900 border-t-2 border-b-2 dark:border-none\">\r\n            <div class=\"mx-auto max-w-xl p-8 rounded content mb-10\">\r\n                <h2 class=\"header text-center mb-8\">Contact us</h2>\r\n\r\n                <form method=\"post\">\r\n\r\n                    <!-- Subject -->\r\n                    <div class=\"mb-6\">\r\n                        <label for=\"emailSubject\" class=\"block font-semibold mb-2\">Subject</label>\r\n                        <input type=\"text\" name=\"email-subject\" ws-var=\"ContactSubjectVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\" value=\"WebSharper support\">\r\n                    </div>\r\n\r\n                    <!-- Message -->\r\n                    <div class=\"mb-6\">\r\n                        <label for=\"emailMessage\" class=\"block font-semibold mb-2\">Message</label>\r\n                        <textarea name=\"email-message\" rows=\"5\" ws-var=\"ContactMessageVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\"></textarea>\r\n                    </div>\r\n\r\n                    <!-- Row with Email, Name, Country -->\r\n                    <div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6\">\r\n                        <!-- Email -->\r\n                        <div>\r\n                            <label for=\"emailAddress\" class=\"block font-semibold mb-2\">Your email address</label>\r\n                            <input type=\"email\" name=\"email-address\" ws-var=\"ContactEmailVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                        </div>\r\n\r\n                        <!-- Name -->\r\n                        <div>\r\n                            <label for=\"emailName\" class=\"block font-semibold mb-2\">Your name</label>\r\n                            <input type=\"text\" ws-var=\"ContactNameVar\" name=\"name\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                        </div>\r\n\r\n                        <!-- Country -->\r\n                        <div>\r\n                            <label for=\"emailCountry\" class=\"block font-semibold mb-2\">Your country</label>\r\n                            <select name=\"email-country\" ws-var=\"ContactCountryVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                                <option value=\"Afghanistan\">Afghanistan</option>\r\n                                <option value=\"Albania\">Albania</option>\r\n                                <option value=\"Algeria\">Algeria</option>\r\n                                <option value=\"Andorra\">Andorra</option>\r\n                                <option value=\"Angola\">Angola</option>\r\n                                <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\r\n                                <option value=\"Argentina\">Argentina</option>\r\n                                <option value=\"Armenia\">Armenia</option>\r\n                                <option value=\"Australia\">Australia</option>\r\n                                <option value=\"Austria\">Austria</option>\r\n                                <option value=\"Azerbaijan\">Azerbaijan</option>\r\n                                <option value=\"Bahamas\">Bahamas</option>\r\n                                <option value=\"Bahrain\">Bahrain</option>\r\n                                <option value=\"Bangladesh\">Bangladesh</option>\r\n                                <option value=\"Barbados\">Barbados</option>\r\n                                <option value=\"Belarus\">Belarus</option>\r\n                                <option value=\"Belgium\">Belgium</option>\r\n                                <option value=\"Belize\">Belize</option>\r\n                                <option value=\"Benin\">Benin</option>\r\n                                <option value=\"Bhutan\">Bhutan</option>\r\n                                <option value=\"Bolivia\">Bolivia</option>\r\n                                <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\r\n                                <option value=\"Botswana\">Botswana</option>\r\n                                <option value=\"Brazil\">Brazil</option>\r\n                                <option value=\"Brunei\">Brunei</option>\r\n                                <option value=\"Bulgaria\">Bulgaria</option>\r\n                                <option value=\"Burkina Faso\">Burkina Faso</option>\r\n                                <option value=\"Burundi\">Burundi</option>\r\n                                <option value=\"Cabo Verde\">Cabo Verde</option>\r\n                                <option value=\"Cambodia\">Cambodia</option>\r\n                                <option value=\"Cameroon\">Cameroon</option>\r\n                                <option value=\"Canada\">Canada</option>\r\n                                <option value=\"Central African Republic\">Central African Republic</option>\r\n                                <option value=\"Chad\">Chad</option>\r\n                                <option value=\"Chile\">Chile</option>\r\n                                <option value=\"China\">China</option>\r\n                                <option value=\"Colombia\">Colombia</option>\r\n                                <option value=\"Comoros\">Comoros</option>\r\n                                <option value=\"Congo (Congo-Brazzaville)\">Congo (Congo-Brazzaville)</option>\r\n                                <option value=\"Costa Rica\">Costa Rica</option>\r\n                                <option value=\"Croatia\">Croatia</option>\r\n                                <option value=\"Cuba\">Cuba</option>\r\n                                <option value=\"Cyprus\">Cyprus</option>\r\n                                <option value=\"Czech Republic\">Czech Republic</option>\r\n                                <option value=\"Democratic Republic of the Congo\">Democratic Republic of the Congo</option>\r\n                                <option value=\"Denmark\">Denmark</option>\r\n                                <option value=\"Djibouti\">Djibouti</option>\r\n                                <option value=\"Dominica\">Dominica</option>\r\n                                <option value=\"Dominican Republic\">Dominican Republic</option>\r\n                                <option value=\"Ecuador\">Ecuador</option>\r\n                                <option value=\"Egypt\">Egypt</option>\r\n                                <option value=\"El Salvador\">El Salvador</option>\r\n                                <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n                                <option value=\"Eritrea\">Eritrea</option>\r\n                                <option value=\"Estonia\">Estonia</option>\r\n                                <option value=\"Eswatini\">Eswatini</option>\r\n                                <option value=\"Ethiopia\">Ethiopia</option>\r\n                                <option value=\"Fiji\">Fiji</option>\r\n                                <option value=\"Finland\">Finland</option>\r\n                                <option value=\"France\">France</option>\r\n                                <option value=\"Gabon\">Gabon</option>\r\n                                <option value=\"Gambia\">Gambia</option>\r\n                                <option value=\"Georgia\">Georgia</option>\r\n                                <option value=\"Germany\">Germany</option>\r\n                                <option value=\"Ghana\">Ghana</option>\r\n                                <option value=\"Greece\">Greece</option>\r\n                                <option value=\"Grenada\">Grenada</option>\r\n                                <option value=\"Guatemala\">Guatemala</option>\r\n                                <option value=\"Guinea\">Guinea</option>\r\n                                <option value=\"Guinea-Bissau\">Guinea-Bissau</option>\r\n                                <option value=\"Guyana\">Guyana</option>\r\n                                <option value=\"Haiti\">Haiti</option>\r\n                                <option value=\"Honduras\">Honduras</option>\r\n                                <option value=\"Hungary\">Hungary</option>\r\n                                <option value=\"Iceland\">Iceland</option>\r\n                                <option value=\"India\">India</option>\r\n                                <option value=\"Indonesia\">Indonesia</option>\r\n                                <option value=\"Iran\">Iran</option>\r\n                                <option value=\"Iraq\">Iraq</option>\r\n                                <option value=\"Ireland\">Ireland</option>\r\n                                <option value=\"Israel\">Israel</option>\r\n                                <option value=\"Italy\">Italy</option>\r\n                                <option value=\"Jamaica\">Jamaica</option>\r\n                                <option value=\"Japan\">Japan</option>\r\n                                <option value=\"Jordan\">Jordan</option>\r\n                                <option value=\"Kazakhstan\">Kazakhstan</option>\r\n                                <option value=\"Kenya\">Kenya</option>\r\n                                <option value=\"Kiribati\">Kiribati</option>\r\n                                <option value=\"Kuwait\">Kuwait</option>\r\n                                <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n                                <option value=\"Laos\">Laos</option>\r\n                                <option value=\"Latvia\">Latvia</option>\r\n                                <option value=\"Lebanon\">Lebanon</option>\r\n                                <option value=\"Lesotho\">Lesotho</option>\r\n                                <option value=\"Liberia\">Liberia</option>\r\n                                <option value=\"Libya\">Libya</option>\r\n                                <option value=\"Liechtenstein\">Liechtenstein</option>\r\n                                <option value=\"Lithuania\">Lithuania</option>\r\n                                <option value=\"Luxembourg\">Luxembourg</option>\r\n                                <option value=\"Madagascar\">Madagascar</option>\r\n                                <option value=\"Malawi\">Malawi</option>\r\n                                <option value=\"Malaysia\">Malaysia</option>\r\n                                <option value=\"Maldives\">Maldives</option>\r\n                                <option value=\"Mali\">Mali</option>\r\n                                <option value=\"Malta\">Malta</option>\r\n                                <option value=\"Marshall Islands\">Marshall Islands</option>\r\n                                <option value=\"Mauritania\">Mauritania</option>\r\n                                <option value=\"Mauritius\">Mauritius</option>\r\n                                <option value=\"Mexico\">Mexico</option>\r\n                                <option value=\"Micronesia\">Micronesia</option>\r\n                                <option value=\"Moldova\">Moldova</option>\r\n                                <option value=\"Monaco\">Monaco</option>\r\n                                <option value=\"Mongolia\">Mongolia</option>\r\n                                <option value=\"Montenegro\">Montenegro</option>\r\n                                <option value=\"Morocco\">Morocco</option>\r\n                                <option value=\"Mozambique\">Mozambique</option>\r\n                                <option value=\"Myanmar (Burma)\">Myanmar (Burma)</option>\r\n                                <option value=\"Namibia\">Namibia</option>\r\n                                <option value=\"Nauru\">Nauru</option>\r\n                                <option value=\"Nepal\">Nepal</option>\r\n                                <option value=\"Netherlands\">Netherlands</option>\r\n                                <option value=\"New Zealand\">New Zealand</option>\r\n                                <option value=\"Nicaragua\">Nicaragua</option>\r\n                                <option value=\"Niger\">Niger</option>\r\n                                <option value=\"Nigeria\">Nigeria</option>\r\n                                <option value=\"North Korea\">North Korea</option>\r\n                                <option value=\"North Macedonia\">North Macedonia</option>\r\n                                <option value=\"Norway\">Norway</option>\r\n                                <option value=\"Oman\">Oman</option>\r\n                                <option value=\"Pakistan\">Pakistan</option>\r\n                                <option value=\"Palau\">Palau</option>\r\n                                <option value=\"Palestine\">Palestine</option>\r\n                                <option value=\"Panama\">Panama</option>\r\n                                <option value=\"Papua New Guinea\">Papua New Guinea</option>\r\n                                <option value=\"Paraguay\">Paraguay</option>\r\n                                <option value=\"Peru\">Peru</option>\r\n                                <option value=\"Philippines\">Philippines</option>\r\n                                <option value=\"Poland\">Poland</option>\r\n                                <option value=\"Portugal\">Portugal</option>\r\n                                <option value=\"Qatar\">Qatar</option>\r\n                                <option value=\"Romania\">Romania</option>\r\n                                <option value=\"Russia\">Russia</option>\r\n                                <option value=\"Rwanda\">Rwanda</option>\r\n                                <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\r\n                                <option value=\"Saint Lucia\">Saint Lucia</option>\r\n                                <option value=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</option>\r\n                                <option value=\"Samoa\">Samoa</option>\r\n                                <option value=\"San Marino\">San Marino</option>\r\n                                <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\r\n                                <option value=\"Saudi Arabia\">Saudi Arabia</option>\r\n                                <option value=\"Senegal\">Senegal</option>\r\n                                <option value=\"Serbia\">Serbia</option>\r\n                                <option value=\"Seychelles\">Seychelles</option>\r\n                                <option value=\"Sierra Leone\">Sierra Leone</option>\r\n                                <option value=\"Singapore\">Singapore</option>\r\n                                <option value=\"Slovakia\">Slovakia</option>\r\n                                <option value=\"Slovenia\">Slovenia</option>\r\n                                <option value=\"Solomon Islands\">Solomon Islands</option>\r\n                                <option value=\"Somalia\">Somalia</option>\r\n                                <option value=\"South Africa\">South Africa</option>\r\n                                <option value=\"South Korea\">South Korea</option>\r\n                                <option value=\"South Sudan\">South Sudan</option>\r\n                                <option value=\"Spain\">Spain</option>\r\n                                <option value=\"Sri Lanka\">Sri Lanka</option>\r\n                                <option value=\"Sudan\">Sudan</option>\r\n                                <option value=\"Suriname\">Suriname</option>\r\n                                <option value=\"Sweden\">Sweden</option>\r\n                                <option value=\"Switzerland\">Switzerland</option>\r\n                                <option value=\"Syria\">Syria</option>\r\n                                <option value=\"Taiwan\">Taiwan</option>\r\n                                <option value=\"Tajikistan\">Tajikistan</option>\r\n                                <option value=\"Tanzania\">Tanzania</option>\r\n                                <option value=\"Thailand\">Thailand</option>\r\n                                <option value=\"Timor-Leste\">Timor-Leste</option>\r\n                                <option value=\"Togo\">Togo</option>\r\n                                <option value=\"Tonga\">Tonga</option>\r\n                                <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\r\n                                <option value=\"Tunisia\">Tunisia</option>\r\n                                <option value=\"Turkey\">Turkey</option>\r\n                                <option value=\"Turkmenistan\">Turkmenistan</option>\r\n                                <option value=\"Tuvalu\">Tuvalu</option>\r\n                                <option value=\"Uganda\">Uganda</option>\r\n                                <option value=\"Ukraine\">Ukraine</option>\r\n                                <option value=\"United Arab Emirates\">United Arab Emirates</option>\r\n                                <option value=\"United Kingdom\">United Kingdom</option>\r\n                                <option value=\"United States\" selected=\"\">United States</option>\r\n                                <option value=\"Uruguay\">Uruguay</option>\r\n                                <option value=\"Uzbekistan\">Uzbekistan</option>\r\n                                <option value=\"Vanuatu\">Vanuatu</option>\r\n                                <option value=\"Vatican City\">Vatican City</option>\r\n                                <option value=\"Venezuela\">Venezuela</option>\r\n                                <option value=\"Vietnam\">Vietnam</option>\r\n                                <option value=\"Yemen\">Yemen</option>\r\n                                <option value=\"Zambia\">Zambia</option>\r\n                                <option value=\"Zimbabwe\">Zimbabwe</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Send Button -->\r\n                    <div class=\"text-left\">\r\n                        <button ws-attr=\"ContactSendButtonAttr\" type=\"button\" ws-onclick=\"OnContactSendClick\" class=\"bg-blue-500 text-white font-semibold px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-blue-400\">\r\n                            ${ContactSendButtonText}\r\n                        </button>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n        </section>\r\n\r\n    </div>\r\n</body>\r\n</html>"));
}
function t_1(h){
  return h?GetOrLoadTemplate("checkout", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div ws-onafterrender=\"OnAfterRender\">\r\n        <div class=\"hidden md:block fixed inset-0 w-1/2 -z-50 bg-gray-50 dark:bg-gray-900/50 border-r dark:border-gray-800\"></div>\r\n        <div class=\"max-w-6xl mx-auto px-12 gap-20 md:flex\">\r\n            <div class=\"md:w-1/2 md:pr-20 pt-16\">\r\n                <a href=\"/\" class=\"rounded-full\">\r\n                    <span class=\"sr-only\">WebSharper logo</span>\r\n                    <img class=\"h-9 w-9 rounded-full bg-white dark:bg-transparent\" src=\"/Assets/favicon.png\" alt=\"websharper logo\" width=\"164\" height=\"164\">\r\n                </a>\r\n\r\n                <nav class=\"mt-8 flex gap-3 items-center\">\r\n                    <a id=\"backLink\" ws-attr=\"BackLinkAttr\" href=\"./support.html#plans\" ws-hole=\"BackLinkLabel\" class=\"text-gray-600 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400\">\r\n                        Plans\r\n                    </a>\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"text-gray-400 dark:text-gray-600 size-4\">\r\n                        <path fill-rule=\"evenodd\" d=\"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"></path>\r\n                    </svg>\r\n                    <span class=\"text-gray-950 dark:text-white font-medium\">Payment</span>\r\n                </nav>\r\n\r\n                <!-- Dynamic plan header -->\r\n                <h1 ws-hole=\"PlanName\" class=\"mt-8 text-lg text-sky-600 dark:text-brand-primary mb-3\">\r\n                    WebSharper Professional\r\n                </h1>\r\n                <p ws-hole=\"PlanPriceLine\" class=\"text-3xl font-bold text-gray-950 dark:text-white\">\r\n                    $2,500 <span class=\"text-base text-gray-600 dark:text-gray-400 font-normal\">/ Year</span>\r\n                </p>\r\n\r\n                <p class=\"mt-8 text-gray-600 dark:text-gray-400\">Our experienced WebSharper support team is available to help you make the right decisions.</p>\r\n\r\n                <!-- Seat selector (hidden for Freelancer) -->\r\n                <div id=\"wsSeatSelector\" ws-attr=\"SeatSelectorAttr\" class=\"mt-6\">\r\n                    <label for=\"wsSeats\" class=\"block text-sm font-medium text-gray-700 dark:text-gray-300\">Seats</label>\r\n                    <div class=\"mt-2 flex items-center gap-2\">\r\n                        <button type=\"button\" id=\"wsMinus\" ws-onclick=\"OnSeatMinus\" class=\"cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50\">\r\n                            -\r\n                        </button>\r\n                        <input id=\"wsSeats\" name=\"wsSeats\" ws-var=\"SeatsText\" inputmode=\"numeric\" pattern=\"[0-9]*\" value=\"1\" class=\"h-10 w-20 text-center rounded-lg border shadow border-gray-300 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white\">\r\n                        <button type=\"button\" id=\"wsPlus\" ws-onclick=\"OnSeatPlus\" class=\"cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50\">\r\n                            +\r\n                        </button>\r\n                    </div>\r\n                    <p id=\"wsPriceHint\" ws-hole=\"PriceHint\" class=\"mt-2 text-xs text-gray-500 dark:text-gray-400\">\r\n                        Price is $2,500 per seat per year.\r\n                    </p>\r\n                </div>\r\n\r\n                <div class=\"fixed bottom-0 z-10 inset-x-0 px-12 border-t dark:border-gray-800 shadow-lg md:z-0 md:border-none md:shadow-none md:px-0 bg-white dark:bg-gray-900 dark:md:bg-transparent md:bg-transparent md:static mt-12 divide-y dark:divide-gray-800 text-gray-600 dark:text-gray-400\">\r\n                    <div class=\"py-3 flex justify-between\">\r\n                        <p>Subtotal</p>\r\n                        <p id=\"wsSubtotal\" ws-hole=\"Subtotal\" aria-live=\"polite\" class=\"font-medium text-gray-950 dark:text-white\">\r\n                            $2,500\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"py-3 flex justify-between\">\r\n                        <p>Taxes</p>\r\n                        <p id=\"wsTaxes\" ws-hole=\"Taxes\" class=\"font-medium text-gray-950 dark:text-white\">\r\n                            $0\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"py-3 flex justify-between\">\r\n                        <p class=\"text-gray-950 dark:text-white font-medium\">Total</p>\r\n                        <p id=\"wsTotal\" ws-hole=\"Total\" aria-live=\"polite\" class=\"font-medium text-gray-950 dark:text-white\">\r\n                            $2,500\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"pb-56 md:max-w-md md:w-1/2 md:pt-16 md:pb-16\">\r\n                <!-- Login & Registration (default visible; hide after auth) -->\r\n                <section id=\"authSection\" class=\"mt-12 md:mt-2\" ws-attr=\"AuthSectionAttr\">\r\n                    <h2 class=\"text-xl font-semibold text-gray-950 dark:text:white\">Login & Registration</h2>\r\n                    <p class=\"mt-3 text-gray-600 dark:text-gray-400\">\r\n                        Please sign in with GitHub to continue to checkout. If this is your first time, we w ill create your WebSharper account from your GitHub profile.\r\n                    </p>\r\n\r\n                    <button id=\"wsGithubLogin\" ws-onclick=\"OnGitHubLogin\" type=\"button\" class=\"cursor-pointer mt-6 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                        <span class=\"relative flex items-center gap-2 text-sm\">\r\n                            <!-- GitHub mark -->\r\n                            <svg aria-hidden=\"true\" viewbox=\"0 0 16 16\" class=\"w-4 h-4 fill-current\"><path d=\"M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.9-3.64-3.95 0-.87.31-1.6.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.06-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.39A8 8 0 0016 8c0-4.42-3.58-8-8-8z\"></path></svg>\r\n                            Continue with GitHub\r\n                        </span>\r\n                    </button>\r\n\r\n                    <p class=\"mt-3 text-xs text-gray-500 dark:text-gray-400\">\r\n                        By continuing, you agree to the WebSharper <a href=\"#\" class=\"underline hover:no-underline\">Terms</a> and\r\n                        <a href=\"#\" class=\"underline hover:no-underline\">Privacy Policy</a>.\r\n                    </p>\r\n                    <noscript>\r\n                        <p class=\"mt-4 text-red-600 dark:text-red-400 text-sm\">\r\n                            JavaScript is required to sign in and complete checkout. Please enable JavaScript.\r\n                        </p>\r\n                    </noscript>\r\n                </section>\r\n\r\n                <form id=\"paymentSection\" action=\"\" ws-attr=\"PaymentSectionAttr\">\r\n                    <h2 class=\"mt-12 md:mt-2 text-xl font-semibold text-gray-950 dark:text-white\">Payment details</h2>\r\n                    <div class=\"mt-12 space-y-6\">\r\n                        <div class=\"mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2\">\r\n                            <label class=\"block font-medium text-sm\" for=\"email\">Email</label>\r\n                            <input class=\"peer w-full focus:outline rounded-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" type=\"email\" required=\"\" id=\"email\" name=\"email\" ws-var=\"Email\">\r\n                            <span class=\"hidden peer-invalid:hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-red-600 dark:text-red-400 text-sm\">Please enter your email</span>\r\n                        </div>\r\n                        <div class=\"mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2\">\r\n                            <label class=\"block font-medium text-sm\" for=\"country\">Billing address</label>\r\n\r\n                            <!-- Street -->\r\n                            <input id=\"street\" name=\"street\" placeholder=\"Street address\" required=\"\" ws-var=\"Street\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n\r\n                            <!-- City + Postal -->\r\n                            <div class=\"grid grid-cols-3 gap-2\">\r\n                                <input id=\"city\" name=\"city\" placeholder=\"City\" required=\"\" ws-var=\"City\" class=\"col-span-2 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                                <input id=\"postal\" name=\"postal\" placeholder=\"Postal Code\" required=\"\" ws-var=\"Postal\" class=\"col-span-1 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n\r\n                            <!-- Country -->\r\n                            <div class=\"relative\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"absolute pointer-events-none inset-y-0 my-auto right-3 size-4\">\r\n                                    <path fill-rule=\"evenodd\" d=\"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"></path>\r\n                                </svg>\r\n                                <select name=\"country\" id=\"country\" required=\"\" ws-var=\"Country\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                                    <option value=\"hungary\">Hungary</option>\r\n                                    <option value=\"france\">France</option>\r\n                                    <option value=\"united-kingdom\">United Kingdom</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"peer\">\r\n                            <label for=\"company\" class=\"flex items-center\">\r\n                                <input class=\"size-0 peer\" type=\"checkbox\" id=\"company\" name=\"company\" ws-var=\"IsCompany\">\r\n                                <div role=\"checkbox\" class=\"shadow shadow-gray-700/5 outline-2 outline-offset-1 outline-blue-600 dark:outline-blue-500 peer-focus:outline size-[1.125rem] group peer relative flex appearance-none items-center justify-center border transition *:-rotate-12 *:scale-50 *:opacity-0 peer-checked:*:-rotate-6 peer-checked:*:scale-100 peer-checked:*:opacity-100 duration-150 before:absolute before:m-auto before:shadow-inner peer-checked:before:border-t peer-checked:before:bg-blue-600 peer-disabled:before:hidden before:border-transparent before:bg-white active:ring-[3px] active:ring-blue-600/10 peer-checked:before:border-gray-800 dark:border-gray-800 dark:bg-transparent dark:before:border dark:peer-checked:before:border-transparent peer-checked:before:shadow-white/10 dark:peer-checked:before:shadow-white/20 dark:peer-checked:before:bg-blue-600 peer-checked:border-none before:border-none border-gray-300 hover:border-gray-400/75 dark:hover:border-gray-700 before:inset-0 p-0 before:shadow-gray-950/5 dark:before:shadow-white/5 dark:before:bg-transparent bg-transparent before:size-full rounded before:rounded-[3px] peer-checked:before:rounded\">\r\n                                    <span class=\"transition-all duration-200 relative text-white peer-disabled:text-gray-300 dark:peer-disabled:text-gray-700 pointer-events-none\">\r\n                                        <svg class=\"size-4\" viewbox=\"0 0 46 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M6 15.91L10.4241 11.546L19.2713 20.273L34.7547 5L39.1788 9.364L19.2723 29L6 15.91Z\" fill=\"white\"></path>\r\n                                        </svg>\r\n                                    </span>\r\n                                </div>\r\n                                <span class=\"ml-2.5 leading-none text-gray-700 peer-peer-disabled:text-gray-300 dark:text-gray-300 dark:peer-peer-disabled:text-gray-700 select-none block font-medium text-sm\">I represent a company</span>\r\n                            </label>\r\n                        </div>\r\n                        <div id=\"companyBlock\" ws-attr=\"CompanyBlockAttr\" class=\"hidden peer-has-[:checked]:block mt-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2.5\">\r\n                            <label class=\"block font-medium text-sm\" for=\"company-name\">Company</label>\r\n                            <div class=\"-space-y-px\">\r\n                                <input placeholder=\"Name\" class=\"hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-t-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" required=\"\" id=\"company-name\" name=\"company-name\" ws-var=\"CompanyName\" ws-attr=\"CompanyNameAttr\">\r\n                                <input placeholder=\"VATIN\" class=\"hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-b-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" id=\"vatin\" name=\"vatin\" ws-var=\"Vatin\" ws-attr=\"VatinAttr\">\r\n                            </div>\r\n                            <span class=\"flex gap-2 leading-normal peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"w-4 h-4 mt-0.5\">\r\n                                    <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" clip-rule=\"evenodd\"></path>\r\n                                </svg>\r\n                                <span class=\"block w-[calc(100%-1.25rem)]\">\r\n                                    VAT Identification Number. As an EU company (outside Hungary), you can account for the VAT, and supplying us with your VATIN allows us not to charge you for VAT.\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div ws-replace=\"FormErrorDoc\"></div>\r\n                    <button id=\"wsContinue\" type=\"button\" ws-onclick=\"OnContinueClick\" ws-attr=\"ContinueButtonAttr\" class=\"mt-12 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                        <span ws-hole=\"ContinueText\" class=\"relative text-sm\">Continue to payment</span>\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>\r\n</html>"), h):PrepareTemplate("checkout", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div ws-onafterrender=\"OnAfterRender\">\r\n        <div class=\"hidden md:block fixed inset-0 w-1/2 -z-50 bg-gray-50 dark:bg-gray-900/50 border-r dark:border-gray-800\"></div>\r\n        <div class=\"max-w-6xl mx-auto px-12 gap-20 md:flex\">\r\n            <div class=\"md:w-1/2 md:pr-20 pt-16\">\r\n                <a href=\"/\" class=\"rounded-full\">\r\n                    <span class=\"sr-only\">WebSharper logo</span>\r\n                    <img class=\"h-9 w-9 rounded-full bg-white dark:bg-transparent\" src=\"/Assets/favicon.png\" alt=\"websharper logo\" width=\"164\" height=\"164\">\r\n                </a>\r\n\r\n                <nav class=\"mt-8 flex gap-3 items-center\">\r\n                    <a id=\"backLink\" ws-attr=\"BackLinkAttr\" href=\"./support.html#plans\" ws-hole=\"BackLinkLabel\" class=\"text-gray-600 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400\">\r\n                        Plans\r\n                    </a>\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"text-gray-400 dark:text-gray-600 size-4\">\r\n                        <path fill-rule=\"evenodd\" d=\"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"></path>\r\n                    </svg>\r\n                    <span class=\"text-gray-950 dark:text-white font-medium\">Payment</span>\r\n                </nav>\r\n\r\n                <!-- Dynamic plan header -->\r\n                <h1 ws-hole=\"PlanName\" class=\"mt-8 text-lg text-sky-600 dark:text-brand-primary mb-3\">\r\n                    WebSharper Professional\r\n                </h1>\r\n                <p ws-hole=\"PlanPriceLine\" class=\"text-3xl font-bold text-gray-950 dark:text-white\">\r\n                    $2,500 <span class=\"text-base text-gray-600 dark:text-gray-400 font-normal\">/ Year</span>\r\n                </p>\r\n\r\n                <p class=\"mt-8 text-gray-600 dark:text-gray-400\">Our experienced WebSharper support team is available to help you make the right decisions.</p>\r\n\r\n                <!-- Seat selector (hidden for Freelancer) -->\r\n                <div id=\"wsSeatSelector\" ws-attr=\"SeatSelectorAttr\" class=\"mt-6\">\r\n                    <label for=\"wsSeats\" class=\"block text-sm font-medium text-gray-700 dark:text-gray-300\">Seats</label>\r\n                    <div class=\"mt-2 flex items-center gap-2\">\r\n                        <button type=\"button\" id=\"wsMinus\" ws-onclick=\"OnSeatMinus\" class=\"cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50\">\r\n                            -\r\n                        </button>\r\n                        <input id=\"wsSeats\" name=\"wsSeats\" ws-var=\"SeatsText\" inputmode=\"numeric\" pattern=\"[0-9]*\" value=\"1\" class=\"h-10 w-20 text-center rounded-lg border shadow border-gray-300 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white\">\r\n                        <button type=\"button\" id=\"wsPlus\" ws-onclick=\"OnSeatPlus\" class=\"cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50\">\r\n                            +\r\n                        </button>\r\n                    </div>\r\n                    <p id=\"wsPriceHint\" ws-hole=\"PriceHint\" class=\"mt-2 text-xs text-gray-500 dark:text-gray-400\">\r\n                        Price is $2,500 per seat per year.\r\n                    </p>\r\n                </div>\r\n\r\n                <div class=\"fixed bottom-0 z-10 inset-x-0 px-12 border-t dark:border-gray-800 shadow-lg md:z-0 md:border-none md:shadow-none md:px-0 bg-white dark:bg-gray-900 dark:md:bg-transparent md:bg-transparent md:static mt-12 divide-y dark:divide-gray-800 text-gray-600 dark:text-gray-400\">\r\n                    <div class=\"py-3 flex justify-between\">\r\n                        <p>Subtotal</p>\r\n                        <p id=\"wsSubtotal\" ws-hole=\"Subtotal\" aria-live=\"polite\" class=\"font-medium text-gray-950 dark:text-white\">\r\n                            $2,500\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"py-3 flex justify-between\">\r\n                        <p>Taxes</p>\r\n                        <p id=\"wsTaxes\" ws-hole=\"Taxes\" class=\"font-medium text-gray-950 dark:text-white\">\r\n                            $0\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"py-3 flex justify-between\">\r\n                        <p class=\"text-gray-950 dark:text-white font-medium\">Total</p>\r\n                        <p id=\"wsTotal\" ws-hole=\"Total\" aria-live=\"polite\" class=\"font-medium text-gray-950 dark:text-white\">\r\n                            $2,500\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"pb-56 md:max-w-md md:w-1/2 md:pt-16 md:pb-16\">\r\n                <!-- Login & Registration (default visible; hide after auth) -->\r\n                <section id=\"authSection\" class=\"mt-12 md:mt-2\" ws-attr=\"AuthSectionAttr\">\r\n                    <h2 class=\"text-xl font-semibold text-gray-950 dark:text:white\">Login & Registration</h2>\r\n                    <p class=\"mt-3 text-gray-600 dark:text-gray-400\">\r\n                        Please sign in with GitHub to continue to checkout. If this is your first time, we w ill create your WebSharper account from your GitHub profile.\r\n                    </p>\r\n\r\n                    <button id=\"wsGithubLogin\" ws-onclick=\"OnGitHubLogin\" type=\"button\" class=\"cursor-pointer mt-6 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                        <span class=\"relative flex items-center gap-2 text-sm\">\r\n                            <!-- GitHub mark -->\r\n                            <svg aria-hidden=\"true\" viewbox=\"0 0 16 16\" class=\"w-4 h-4 fill-current\"><path d=\"M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.9-3.64-3.95 0-.87.31-1.6.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.06-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.39A8 8 0 0016 8c0-4.42-3.58-8-8-8z\"></path></svg>\r\n                            Continue with GitHub\r\n                        </span>\r\n                    </button>\r\n\r\n                    <p class=\"mt-3 text-xs text-gray-500 dark:text-gray-400\">\r\n                        By continuing, you agree to the WebSharper <a href=\"#\" class=\"underline hover:no-underline\">Terms</a> and\r\n                        <a href=\"#\" class=\"underline hover:no-underline\">Privacy Policy</a>.\r\n                    </p>\r\n                    <noscript>\r\n                        <p class=\"mt-4 text-red-600 dark:text-red-400 text-sm\">\r\n                            JavaScript is required to sign in and complete checkout. Please enable JavaScript.\r\n                        </p>\r\n                    </noscript>\r\n                </section>\r\n\r\n                <form id=\"paymentSection\" action=\"\" ws-attr=\"PaymentSectionAttr\">\r\n                    <h2 class=\"mt-12 md:mt-2 text-xl font-semibold text-gray-950 dark:text-white\">Payment details</h2>\r\n                    <div class=\"mt-12 space-y-6\">\r\n                        <div class=\"mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2\">\r\n                            <label class=\"block font-medium text-sm\" for=\"email\">Email</label>\r\n                            <input class=\"peer w-full focus:outline rounded-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" type=\"email\" required=\"\" id=\"email\" name=\"email\" ws-var=\"Email\">\r\n                            <span class=\"hidden peer-invalid:hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-red-600 dark:text-red-400 text-sm\">Please enter your email</span>\r\n                        </div>\r\n                        <div class=\"mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2\">\r\n                            <label class=\"block font-medium text-sm\" for=\"country\">Billing address</label>\r\n\r\n                            <!-- Street -->\r\n                            <input id=\"street\" name=\"street\" placeholder=\"Street address\" required=\"\" ws-var=\"Street\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n\r\n                            <!-- City + Postal -->\r\n                            <div class=\"grid grid-cols-3 gap-2\">\r\n                                <input id=\"city\" name=\"city\" placeholder=\"City\" required=\"\" ws-var=\"City\" class=\"col-span-2 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                                <input id=\"postal\" name=\"postal\" placeholder=\"Postal Code\" required=\"\" ws-var=\"Postal\" class=\"col-span-1 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n\r\n                            <!-- Country -->\r\n                            <div class=\"relative\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"absolute pointer-events-none inset-y-0 my-auto right-3 size-4\">\r\n                                    <path fill-rule=\"evenodd\" d=\"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"></path>\r\n                                </svg>\r\n                                <select name=\"country\" id=\"country\" required=\"\" ws-var=\"Country\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                                    <option value=\"hungary\">Hungary</option>\r\n                                    <option value=\"france\">France</option>\r\n                                    <option value=\"united-kingdom\">United Kingdom</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"peer\">\r\n                            <label for=\"company\" class=\"flex items-center\">\r\n                                <input class=\"size-0 peer\" type=\"checkbox\" id=\"company\" name=\"company\" ws-var=\"IsCompany\">\r\n                                <div role=\"checkbox\" class=\"shadow shadow-gray-700/5 outline-2 outline-offset-1 outline-blue-600 dark:outline-blue-500 peer-focus:outline size-[1.125rem] group peer relative flex appearance-none items-center justify-center border transition *:-rotate-12 *:scale-50 *:opacity-0 peer-checked:*:-rotate-6 peer-checked:*:scale-100 peer-checked:*:opacity-100 duration-150 before:absolute before:m-auto before:shadow-inner peer-checked:before:border-t peer-checked:before:bg-blue-600 peer-disabled:before:hidden before:border-transparent before:bg-white active:ring-[3px] active:ring-blue-600/10 peer-checked:before:border-gray-800 dark:border-gray-800 dark:bg-transparent dark:before:border dark:peer-checked:before:border-transparent peer-checked:before:shadow-white/10 dark:peer-checked:before:shadow-white/20 dark:peer-checked:before:bg-blue-600 peer-checked:border-none before:border-none border-gray-300 hover:border-gray-400/75 dark:hover:border-gray-700 before:inset-0 p-0 before:shadow-gray-950/5 dark:before:shadow-white/5 dark:before:bg-transparent bg-transparent before:size-full rounded before:rounded-[3px] peer-checked:before:rounded\">\r\n                                    <span class=\"transition-all duration-200 relative text-white peer-disabled:text-gray-300 dark:peer-disabled:text-gray-700 pointer-events-none\">\r\n                                        <svg class=\"size-4\" viewbox=\"0 0 46 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M6 15.91L10.4241 11.546L19.2713 20.273L34.7547 5L39.1788 9.364L19.2723 29L6 15.91Z\" fill=\"white\"></path>\r\n                                        </svg>\r\n                                    </span>\r\n                                </div>\r\n                                <span class=\"ml-2.5 leading-none text-gray-700 peer-peer-disabled:text-gray-300 dark:text-gray-300 dark:peer-peer-disabled:text-gray-700 select-none block font-medium text-sm\">I represent a company</span>\r\n                            </label>\r\n                        </div>\r\n                        <div id=\"companyBlock\" ws-attr=\"CompanyBlockAttr\" class=\"hidden peer-has-[:checked]:block mt-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2.5\">\r\n                            <label class=\"block font-medium text-sm\" for=\"company-name\">Company</label>\r\n                            <div class=\"-space-y-px\">\r\n                                <input placeholder=\"Name\" class=\"hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-t-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" required=\"\" id=\"company-name\" name=\"company-name\" ws-var=\"CompanyName\" ws-attr=\"CompanyNameAttr\">\r\n                                <input placeholder=\"VATIN\" class=\"hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-b-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" id=\"vatin\" name=\"vatin\" ws-var=\"Vatin\" ws-attr=\"VatinAttr\">\r\n                            </div>\r\n                            <span class=\"flex gap-2 leading-normal peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"w-4 h-4 mt-0.5\">\r\n                                    <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" clip-rule=\"evenodd\"></path>\r\n                                </svg>\r\n                                <span class=\"block w-[calc(100%-1.25rem)]\">\r\n                                    VAT Identification Number. As an EU company (outside Hungary), you can account for the VAT, and supplying us with your VATIN allows us not to charge you for VAT.\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div ws-replace=\"FormErrorDoc\"></div>\r\n                    <button id=\"wsContinue\" type=\"button\" ws-onclick=\"OnContinueClick\" ws-attr=\"ContinueButtonAttr\" class=\"mt-12 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                        <span ws-hole=\"ContinueText\" class=\"relative text-sm\">Continue to payment</span>\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>\r\n</html>"));
}
function t_2(h){
  return h?GetOrLoadTemplate("managesubscription", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"mx-auto max-w-6xl px-10 pt-28 pb-20\" ws-onafterrender=\"OnAfterRender\">\r\n        <div class=\"grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]\">\r\n            <!-- Left: settings nav -->\r\n            <aside class=\"lg:sticky lg:top-24 h-max\">\r\n                <nav aria-label=\"Settings\" class=\"rounded-xl border border-gray-200 p-3 dark:border-gray-800\">\r\n                    <ul class=\"space-y-1 text-sm\">\r\n                        <li>\r\n                            <button data-nav=\"subs\" class=\"settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5\" ws-onclick=\"GoSubs\" ws-attr=\"SubsTabAttr\">\r\n                                My subscriptions\r\n                            </button>\r\n                        </li>\r\n                        <li>\r\n                            <button data-nav=\"billing\" class=\"settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5\" ws-onclick=\"GoBilling\" ws-attr=\"BillingTabAttr\">\r\n                                Billing information\r\n                            </button>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n            </aside>\r\n\r\n            <!-- Login prompt block -->\r\n            <div ws-attr=\"LoginPromptAttr\" class=\"rounded-xl border p-6 dark:border-gray-800 dark:text-white text-gray-800\">\r\n                <h3 class=\"text-lg font-semibold mb-2\">\r\n                    Please log in\r\n                </h3>\r\n\r\n                <p class=\"text-sm text-gray-600 dark:text-gray-400 mb-4\">\r\n                    You need to be signed in to manage your subscription.\r\n                </p>\r\n\r\n                <button ws-onclick=\"LoginClick\" class=\"w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                    <span class=\"relative text-sm\">\r\n                        Log in with GitHub\r\n                    </span>\r\n                </button>\r\n            </div>\r\n\r\n            <!-- Right: dynamic content -->\r\n            <section ws-attr=\"ContentAttr\">\r\n                <!-- Section: My subscriptions -->\r\n                <div data-page=\"subs\" ws-attr=\"SubsPageAttr\" class=\"space-y-6 hidden\">\r\n\r\n                    <div ws-replace=\"GitHubOrg\"></div>\r\n\r\n                    \r\n\r\n                    \r\n\r\n                    \r\n\r\n                    <div class=\"flex flex-wrap items-center justify-between gap-3\">\r\n                        <div>\r\n                            <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">Seats &amp; Access</h1>\r\n                            <p class=\"text-sm text-gray-600 dark:text-gray-400\">Manage GitHub access for your WebSharper subscription.</p>\r\n                        </div>\r\n\r\n                        <button ws-onclick=\"OpenCustomerPortal\" ws-attr=\"CustomerPortalAttr\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm\r\ntext-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900\r\nhover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                            Manage billing in Stripe\r\n                        </button>\r\n                    </div>\r\n\r\n                    <!-- Seats table (dynamic) -->\r\n                    <section class=\"rounded-xl border border-gray-200 overflow-hidden dark:border-gray-800\">\r\n                        <div class=\"flex flex-wrap items-start justify-between gap-4 px-4 py-4\">\r\n                            <div>\r\n                                <h2 class=\"font-semibold text-gray-900 dark:text-white\">Add seats</h2>\r\n                                <p class=\"mt-1 text-sm text-gray-600 dark:text-gray-400\">\r\n                                    You can add more Professional seats in this section. Each new seat is valid for one year.\r\n                                </p>\r\n                            </div>\r\n                            <div>\r\n                                <button ws-onclick=\"AddSeatsClick\" class=\"w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                                    <span class=\"relative text-sm\">Add seats</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mt-4 overflow-x-auto\">\r\n                            <table class=\"w-full text-sm\">\r\n                                <thead class=\"bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300\">\r\n                                    <tr>\r\n                                        <th class=\"px-4 py-3 text-left\">Seat</th>\r\n                                        <th class=\"px-4 py-3 text-center\">GitHub username</th>\r\n                                        <th class=\"px-4 py-3 text-center\">Status</th>\r\n                                        <th class=\"px-4 py-3 text-center\">Expiry</th>\r\n                                        <th class=\"px-4 py-3 text-right\">Actions</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody ws-hole=\"SeatsBody\" class=\"divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                                    <!-- Group header row -->\r\n                                    \r\n\r\n                                    <!-- Seat row -->\r\n                                    \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </section>\r\n\r\n                    <!-- Invoices -->\r\n                    <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                        <div class=\"flex items-center justify-between\">\r\n                            <h2 class=\"font-semibold text-gray-900 dark:text-white\">Invoices</h2>\r\n                            <button ws-onclick=\"RefreshClick\" class=\"rounded-xl h-10 px-4 border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                Refresh\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"mt-4 overflow-x-auto\">\r\n                            <table class=\"w-full text-sm\">\r\n                                <thead class=\"bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300\">\r\n                                    <tr>\r\n                                        <th class=\"px-4 py-3 text-left\">Invoice</th>\r\n                                        <th class=\"px-4 py-3 text-left\">Date</th>\r\n                                        <th class=\"px-4 py-3 text-left\">Amount</th>\r\n                                        <th class=\"px-4 py-3 text-left\">Status</th>\r\n                                        <th class=\"px-4 py-3 text-right\">Actions</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody ws-hole=\"InvoiceBody\" class=\"divide-y dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                                    \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </section>\r\n\r\n                    <!-- Danger zone -->\r\n                    <section class=\"rounded-xl border border-red-200 p-5 dark:border-red-900/60\">\r\n                        <h2 class=\"font-semibold text-red-700 dark:text-red-400\">Danger zone</h2>\r\n                        <p class=\"mt-1 text-sm text-red-600 dark:text-red-300\">\r\n                            Unassign removes GitHub access for that seat. You can reassign anytime.\r\n                        </p>\r\n                    </section>\r\n                </div>\r\n\r\n                <!-- Section: Billing information -->\r\n                <div data-page=\"billing\" ws-attr=\"BillingPageAttr\" class=\"space-y-6 hidden\">\r\n                    <!-- Single header row (kept) -->\r\n                    <div class=\"flex flex-wrap items-center justify-between gap-3\">\r\n                        <div>\r\n                            <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">Billing information</h1>\r\n                            <p class=\"text-sm text-gray-600 dark:text-gray-400\">\r\n                                Update invoice recipient details, VAT number, and address used for future invoices.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <!-- Move edit controls up here -->\r\n                        <div class=\"flex gap-2\">\r\n                            <button ws-onclick=\"BillingEditClick\" ws-attr=\"BtnBillingEditAttr\" class=\"rounded-xl h-9 px-3 border border-gray-300 text-sm text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                Edit\r\n                            </button>\r\n                            <button ws-onclick=\"BillingCancelClick\" ws-attr=\"BtnBillingCancelAttr\" class=\"hidden rounded-xl h-9 px-3 border border-gray-300 text-sm text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                Cancel\r\n                            </button>\r\n                            <button ws-onclick=\"BillingSaveClick\" ws-attr=\"BtnBillingSaveAttr\" class=\"hidden rounded-xl h-9 px-3 bg-gray-950 text-white dark:bg-white dark:text-gray-950 border border-gray-950 dark:border-gray-800\">\r\n                                Save\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Card with only the content (no inner heading) -->\r\n                    <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                        <!-- View mode (default) -->\r\n                        <div ws-attr=\"BillingViewAttr\" class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm\">\r\n                            <div>\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">Company / Full name</div>\r\n                                <div ws-hole=\"BillingNameView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                            <div>\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">VAT / Tax ID</div>\r\n                                <div ws-hole=\"BillingVatinView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                            <div class=\"sm:col-span-2\">\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">Address line 1</div>\r\n                                <div ws-hole=\"BillingLine1View\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                            <div>\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">City</div>\r\n                                <div ws-hole=\"BillingCityView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                            <div>\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">Postal code</div>\r\n                                <div ws-hole=\"BillingPostalView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                            <div>\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">Country</div>\r\n                                <div ws-hole=\"BillingCountryView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Edit mode -->\r\n                        <div ws-attr=\"BillingEditAttr\" class=\"hidden mt-4\">\r\n                            <form class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\r\n                                <div>\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">Company / Full name</label>\r\n                                    <input ws-var=\"BillingNameVar\" name=\"name\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                                <div>\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">VAT / Tax ID</label>\r\n                                    <input ws-var=\"BillingVatinVar\" name=\"vatin\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                                <div class=\"sm:col-span-2\">\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">Address line 1</label>\r\n                                    <input ws-var=\"BillingLine1Var\" name=\"line1\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                                <div>\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">City</label>\r\n                                    <input ws-var=\"BillingCityVar\" name=\"city\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                                <div>\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">Postal code</label>\r\n                                    <input ws-var=\"BillingPostalVar\" name=\"postal_code\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                                <div>\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">Country</label>\r\n                                    <input ws-var=\"BillingCountryVar\" name=\"country\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n\r\n            </section>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Toast -->\r\n    <div ws-attr=\"ToastAttr\" ws-hole=\"ToastText\" class=\"fixed bottom-4 right-4 hidden rounded-lg px-4 py-2 text-sm bg-gray-900 text-white shadow-lg\" aria-live=\"polite\" role=\"status\">\r\n        Saved\r\n    </div>\r\n\r\n    <!-- Simple full-page spinner -->\r\n    <div ws-attr=\"SpinnerAttr\" class=\"hidden fixed inset-0 z-50 bg-white/50 dark:bg-black/40 backdrop-blur-sm\">\r\n        <div class=\"absolute inset-0 m-auto h-12 w-12 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 dark:border-gray-700 dark:border-t-white\"></div>\r\n    </div>\r\n</body>\r\n</html>"), h):PrepareTemplate("managesubscription", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n    <div class=\"mx-auto max-w-6xl px-10 pt-28 pb-20\" ws-onafterrender=\"OnAfterRender\">\r\n        <div class=\"grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]\">\r\n            <!-- Left: settings nav -->\r\n            <aside class=\"lg:sticky lg:top-24 h-max\">\r\n                <nav aria-label=\"Settings\" class=\"rounded-xl border border-gray-200 p-3 dark:border-gray-800\">\r\n                    <ul class=\"space-y-1 text-sm\">\r\n                        <li>\r\n                            <button data-nav=\"subs\" class=\"settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5\" ws-onclick=\"GoSubs\" ws-attr=\"SubsTabAttr\">\r\n                                My subscriptions\r\n                            </button>\r\n                        </li>\r\n                        <li>\r\n                            <button data-nav=\"billing\" class=\"settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5\" ws-onclick=\"GoBilling\" ws-attr=\"BillingTabAttr\">\r\n                                Billing information\r\n                            </button>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n            </aside>\r\n\r\n            <!-- Login prompt block -->\r\n            <div ws-attr=\"LoginPromptAttr\" class=\"rounded-xl border p-6 dark:border-gray-800 dark:text-white text-gray-800\">\r\n                <h3 class=\"text-lg font-semibold mb-2\">\r\n                    Please log in\r\n                </h3>\r\n\r\n                <p class=\"text-sm text-gray-600 dark:text-gray-400 mb-4\">\r\n                    You need to be signed in to manage your subscription.\r\n                </p>\r\n\r\n                <button ws-onclick=\"LoginClick\" class=\"w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                    <span class=\"relative text-sm\">\r\n                        Log in with GitHub\r\n                    </span>\r\n                </button>\r\n            </div>\r\n\r\n            <!-- Right: dynamic content -->\r\n            <section ws-attr=\"ContentAttr\">\r\n                <!-- Section: My subscriptions -->\r\n                <div data-page=\"subs\" ws-attr=\"SubsPageAttr\" class=\"space-y-6 hidden\">\r\n\r\n                    <div ws-replace=\"GitHubOrg\"></div>\r\n\r\n                    \r\n\r\n                    \r\n\r\n                    \r\n\r\n                    <div class=\"flex flex-wrap items-center justify-between gap-3\">\r\n                        <div>\r\n                            <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">Seats &amp; Access</h1>\r\n                            <p class=\"text-sm text-gray-600 dark:text-gray-400\">Manage GitHub access for your WebSharper subscription.</p>\r\n                        </div>\r\n\r\n                        <button ws-onclick=\"OpenCustomerPortal\" ws-attr=\"CustomerPortalAttr\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm\r\ntext-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900\r\nhover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                            Manage billing in Stripe\r\n                        </button>\r\n                    </div>\r\n\r\n                    <!-- Seats table (dynamic) -->\r\n                    <section class=\"rounded-xl border border-gray-200 overflow-hidden dark:border-gray-800\">\r\n                        <div class=\"flex flex-wrap items-start justify-between gap-4 px-4 py-4\">\r\n                            <div>\r\n                                <h2 class=\"font-semibold text-gray-900 dark:text-white\">Add seats</h2>\r\n                                <p class=\"mt-1 text-sm text-gray-600 dark:text-gray-400\">\r\n                                    You can add more Professional seats in this section. Each new seat is valid for one year.\r\n                                </p>\r\n                            </div>\r\n                            <div>\r\n                                <button ws-onclick=\"AddSeatsClick\" class=\"w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                                    <span class=\"relative text-sm\">Add seats</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mt-4 overflow-x-auto\">\r\n                            <table class=\"w-full text-sm\">\r\n                                <thead class=\"bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300\">\r\n                                    <tr>\r\n                                        <th class=\"px-4 py-3 text-left\">Seat</th>\r\n                                        <th class=\"px-4 py-3 text-center\">GitHub username</th>\r\n                                        <th class=\"px-4 py-3 text-center\">Status</th>\r\n                                        <th class=\"px-4 py-3 text-center\">Expiry</th>\r\n                                        <th class=\"px-4 py-3 text-right\">Actions</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody ws-hole=\"SeatsBody\" class=\"divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                                    <!-- Group header row -->\r\n                                    \r\n\r\n                                    <!-- Seat row -->\r\n                                    \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </section>\r\n\r\n                    <!-- Invoices -->\r\n                    <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                        <div class=\"flex items-center justify-between\">\r\n                            <h2 class=\"font-semibold text-gray-900 dark:text-white\">Invoices</h2>\r\n                            <button ws-onclick=\"RefreshClick\" class=\"rounded-xl h-10 px-4 border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                Refresh\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"mt-4 overflow-x-auto\">\r\n                            <table class=\"w-full text-sm\">\r\n                                <thead class=\"bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300\">\r\n                                    <tr>\r\n                                        <th class=\"px-4 py-3 text-left\">Invoice</th>\r\n                                        <th class=\"px-4 py-3 text-left\">Date</th>\r\n                                        <th class=\"px-4 py-3 text-left\">Amount</th>\r\n                                        <th class=\"px-4 py-3 text-left\">Status</th>\r\n                                        <th class=\"px-4 py-3 text-right\">Actions</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody ws-hole=\"InvoiceBody\" class=\"divide-y dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                                    \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </section>\r\n\r\n                    <!-- Danger zone -->\r\n                    <section class=\"rounded-xl border border-red-200 p-5 dark:border-red-900/60\">\r\n                        <h2 class=\"font-semibold text-red-700 dark:text-red-400\">Danger zone</h2>\r\n                        <p class=\"mt-1 text-sm text-red-600 dark:text-red-300\">\r\n                            Unassign removes GitHub access for that seat. You can reassign anytime.\r\n                        </p>\r\n                    </section>\r\n                </div>\r\n\r\n                <!-- Section: Billing information -->\r\n                <div data-page=\"billing\" ws-attr=\"BillingPageAttr\" class=\"space-y-6 hidden\">\r\n                    <!-- Single header row (kept) -->\r\n                    <div class=\"flex flex-wrap items-center justify-between gap-3\">\r\n                        <div>\r\n                            <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">Billing information</h1>\r\n                            <p class=\"text-sm text-gray-600 dark:text-gray-400\">\r\n                                Update invoice recipient details, VAT number, and address used for future invoices.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <!-- Move edit controls up here -->\r\n                        <div class=\"flex gap-2\">\r\n                            <button ws-onclick=\"BillingEditClick\" ws-attr=\"BtnBillingEditAttr\" class=\"rounded-xl h-9 px-3 border border-gray-300 text-sm text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                Edit\r\n                            </button>\r\n                            <button ws-onclick=\"BillingCancelClick\" ws-attr=\"BtnBillingCancelAttr\" class=\"hidden rounded-xl h-9 px-3 border border-gray-300 text-sm text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                Cancel\r\n                            </button>\r\n                            <button ws-onclick=\"BillingSaveClick\" ws-attr=\"BtnBillingSaveAttr\" class=\"hidden rounded-xl h-9 px-3 bg-gray-950 text-white dark:bg-white dark:text-gray-950 border border-gray-950 dark:border-gray-800\">\r\n                                Save\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Card with only the content (no inner heading) -->\r\n                    <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                        <!-- View mode (default) -->\r\n                        <div ws-attr=\"BillingViewAttr\" class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm\">\r\n                            <div>\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">Company / Full name</div>\r\n                                <div ws-hole=\"BillingNameView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                            <div>\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">VAT / Tax ID</div>\r\n                                <div ws-hole=\"BillingVatinView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                            <div class=\"sm:col-span-2\">\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">Address line 1</div>\r\n                                <div ws-hole=\"BillingLine1View\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                            <div>\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">City</div>\r\n                                <div ws-hole=\"BillingCityView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                            <div>\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">Postal code</div>\r\n                                <div ws-hole=\"BillingPostalView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                            <div>\r\n                                <div class=\"text-gray-600 dark:text-gray-400\">Country</div>\r\n                                <div ws-hole=\"BillingCountryView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Edit mode -->\r\n                        <div ws-attr=\"BillingEditAttr\" class=\"hidden mt-4\">\r\n                            <form class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\r\n                                <div>\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">Company / Full name</label>\r\n                                    <input ws-var=\"BillingNameVar\" name=\"name\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                                <div>\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">VAT / Tax ID</label>\r\n                                    <input ws-var=\"BillingVatinVar\" name=\"vatin\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                                <div class=\"sm:col-span-2\">\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">Address line 1</label>\r\n                                    <input ws-var=\"BillingLine1Var\" name=\"line1\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                                <div>\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">City</label>\r\n                                    <input ws-var=\"BillingCityVar\" name=\"city\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                                <div>\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">Postal code</label>\r\n                                    <input ws-var=\"BillingPostalVar\" name=\"postal_code\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                                <div>\r\n                                    <label class=\"block text-sm text-gray-600 dark:text-gray-300\">Country</label>\r\n                                    <input ws-var=\"BillingCountryVar\" name=\"country\" class=\"mt-1 w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white\">\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n\r\n            </section>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Toast -->\r\n    <div ws-attr=\"ToastAttr\" ws-hole=\"ToastText\" class=\"fixed bottom-4 right-4 hidden rounded-lg px-4 py-2 text-sm bg-gray-900 text-white shadow-lg\" aria-live=\"polite\" role=\"status\">\r\n        Saved\r\n    </div>\r\n\r\n    <!-- Simple full-page spinner -->\r\n    <div ws-attr=\"SpinnerAttr\" class=\"hidden fixed inset-0 z-50 bg-white/50 dark:bg-black/40 backdrop-blur-sm\">\r\n        <div class=\"absolute inset-0 m-auto h-12 w-12 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 dark:border-gray-700 dark:border-t-white\"></div>\r\n    </div>\r\n</body>\r\n</html>"));
}
function DecodeJson_FSharpOption_1(){
  return Decoder_FSharpOption_1?Decoder_FSharpOption_1:Decoder_FSharpOption_1=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", Id_1(), 0]]]]))();
}
function githubactive(h){
  return h?GetOrLoadTemplate("managesubscription", Some("githubactive"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                        <div>\r\n                            <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1>\r\n                        </div>\r\n\r\n                        <button ws-onclick=\"GoToGitHubOrg\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm\r\n    text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900\r\n    hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                            Go to GitHub organization\r\n                        </button>\r\n                    </div>"), h):PrepareTemplate("managesubscription", Some("githubactive"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                        <div>\r\n                            <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1>\r\n                        </div>\r\n\r\n                        <button ws-onclick=\"GoToGitHubOrg\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm\r\n    text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900\r\n    hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                            Go to GitHub organization\r\n                        </button>\r\n                    </div>"));
}
function githubpending(h){
  return h?GetOrLoadTemplate("managesubscription", Some("githubpending"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                        <div>\r\n                            <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1>\r\n                        </div>\r\n\r\n                        <div class=\"text-sm\">Pending: ${GitHubOrgName}</div>\r\n                    </div>"), h):PrepareTemplate("managesubscription", Some("githubpending"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                        <div>\r\n                            <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1>\r\n                        </div>\r\n\r\n                        <div class=\"text-sm\">Pending: ${GitHubOrgName}</div>\r\n                    </div>"));
}
function githubpendinginput(h){
  return h?GetOrLoadTemplate("managesubscription", Some("githubpendinginput"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                        <div>\r\n                            <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1>\r\n                            <p class=\"text-sm text-gray-600 dark:text-gray-400\">No GitHub support organization is created for you yet. Please choose a name below.</p>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <span class=\"text-sm\">IntelliFactory-</span>\r\n                            <input ws-var=\"GitHubOrgName\" class=\"w-64 rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm\" placeholder=\"github-orgname-suffix\">\r\n                        </div>\r\n\r\n                        <div>\r\n                            <span class=\"mt-1 text-sm text-red-600 dark:text-red-300 mr-2\">\r\n                                You can't change the name after you submit.\r\n                            </span>\r\n                            <button ws-onclick=\"SetGitHubOrgName\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm\r\n    text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900\r\n    hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                                Set GitHub organization name\r\n                            </button>\r\n                        </div>\r\n                    </div>"), h):PrepareTemplate("managesubscription", Some("githubpendinginput"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                        <div>\r\n                            <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1>\r\n                            <p class=\"text-sm text-gray-600 dark:text-gray-400\">No GitHub support organization is created for you yet. Please choose a name below.</p>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <span class=\"text-sm\">IntelliFactory-</span>\r\n                            <input ws-var=\"GitHubOrgName\" class=\"w-64 rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm\" placeholder=\"github-orgname-suffix\">\r\n                        </div>\r\n\r\n                        <div>\r\n                            <span class=\"mt-1 text-sm text-red-600 dark:text-red-300 mr-2\">\r\n                                You can't change the name after you submit.\r\n                            </span>\r\n                            <button ws-onclick=\"SetGitHubOrgName\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm\r\n    text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900\r\n    hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                                Set GitHub organization name\r\n                            </button>\r\n                        </div>\r\n                    </div>"));
}
function DecodeJson_FSharpOption_4(){
  return Decoder_FSharpOption_4?Decoder_FSharpOption_4:Decoder_FSharpOption_4=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", DecodeJson_BillingData, 0]]]]))();
}
function invoicerow(h){
  return h?GetOrLoadTemplate("managesubscription", Some("invoicerow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                        <td class=\"px-4 py-3\">\r\n                                            ${InvoiceId}\r\n                                        </td>\r\n                                        <td class=\"px-4 py-3\">\r\n                                            ${Date}\r\n                                        </td>\r\n                                        <td class=\"px-4 py-3\">\r\n                                            ${Amount}\r\n                                        </td>\r\n                                        <td class=\"px-4 py-3 capitalize\">\r\n                                            ${Status}\r\n                                        </td>\r\n                                        <td class=\"px-4 py-3 text-right\">\r\n                                            <a class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20\" href=\"${Href}\" target=\"_blank\" rel=\"noopener\">\r\n                                                View\r\n                                            </a>\r\n                                        </td>\r\n                                    </tr>"), h):PrepareTemplate("managesubscription", Some("invoicerow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                        <td class=\"px-4 py-3\">\r\n                                            ${InvoiceId}\r\n                                        </td>\r\n                                        <td class=\"px-4 py-3\">\r\n                                            ${Date}\r\n                                        </td>\r\n                                        <td class=\"px-4 py-3\">\r\n                                            ${Amount}\r\n                                        </td>\r\n                                        <td class=\"px-4 py-3 capitalize\">\r\n                                            ${Status}\r\n                                        </td>\r\n                                        <td class=\"px-4 py-3 text-right\">\r\n                                            <a class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20\" href=\"${Href}\" target=\"_blank\" rel=\"noopener\">\r\n                                                View\r\n                                            </a>\r\n                                        </td>\r\n                                    </tr>"));
}
function seatgrouprow(h){
  return h?GetOrLoadTemplate("managesubscription", Some("seatgrouprow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                        <td colspan=\"5\" class=\"px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-100\">\r\n                                            <div class=\"flex items-center justify-between gap-4\">\r\n                                                <div class=\"text-xs sm:text-sm\">\r\n                                                    Expires on ${Expiry}\r\n                                                </div>\r\n                                                <div class=\"flex items-center gap-2\">\r\n                                                    <span class=\"text-xs text-gray-600 dark:text-gray-300\">\r\n                                                        Renew automatically\r\n                                                    </span>\r\n\r\n                                                    <button ws-onclick=\"ToggleAutoRenew\" class=\"${ToggleClasses}\">\r\n                                                        <span class=\"${DotClasses}\"></span>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>"), h):PrepareTemplate("managesubscription", Some("seatgrouprow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                        <td colspan=\"5\" class=\"px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-100\">\r\n                                            <div class=\"flex items-center justify-between gap-4\">\r\n                                                <div class=\"text-xs sm:text-sm\">\r\n                                                    Expires on ${Expiry}\r\n                                                </div>\r\n                                                <div class=\"flex items-center gap-2\">\r\n                                                    <span class=\"text-xs text-gray-600 dark:text-gray-300\">\r\n                                                        Renew automatically\r\n                                                    </span>\r\n\r\n                                                    <button ws-onclick=\"ToggleAutoRenew\" class=\"${ToggleClasses}\">\r\n                                                        <span class=\"${DotClasses}\"></span>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>"));
}
function seatrow(h){
  return h?GetOrLoadTemplate("managesubscription", Some("seatrow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                        <td class=\"px-4 py-3\">\r\n                                            ${SeatLabel}\r\n                                        </td>\r\n\r\n                                        <td class=\"px-4 py-3\">\r\n                                            <input ws-var=\"Username\" ws-attr=\"UsernameAttr\" class=\"w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm\" placeholder=\"github-username\">\r\n                                        </td>\r\n\r\n                                        <td class=\"px-4 py-3 text-center\">\r\n                                            <span ws-hole=\"StatusBadge\"></span>\r\n                                        </td>\r\n\r\n                                        <td class=\"px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-center\">\r\n                                            ${Expiry}\r\n                                        </td>\r\n\r\n                                        <td class=\"px-4 py-3 text-right whitespace-nowrap\">\r\n                                            <button class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20 mr-2\" ws-onclick=\"AssignSeat\" ws-attr=\"AssignButtonAttr\">\r\n                                                Assign\r\n                                            </button>\r\n                                            <button class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20\" ws-onclick=\"UnassignSeat\" ws-attr=\"UnassignButtonAttr\">\r\n                                                Unassign\r\n                                            </button>\r\n                                        </td>\r\n                                    </tr>"), h):PrepareTemplate("managesubscription", Some("seatrow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                        <td class=\"px-4 py-3\">\r\n                                            ${SeatLabel}\r\n                                        </td>\r\n\r\n                                        <td class=\"px-4 py-3\">\r\n                                            <input ws-var=\"Username\" ws-attr=\"UsernameAttr\" class=\"w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm\" placeholder=\"github-username\">\r\n                                        </td>\r\n\r\n                                        <td class=\"px-4 py-3 text-center\">\r\n                                            <span ws-hole=\"StatusBadge\"></span>\r\n                                        </td>\r\n\r\n                                        <td class=\"px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-center\">\r\n                                            ${Expiry}\r\n                                        </td>\r\n\r\n                                        <td class=\"px-4 py-3 text-right whitespace-nowrap\">\r\n                                            <button class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20 mr-2\" ws-onclick=\"AssignSeat\" ws-attr=\"AssignButtonAttr\">\r\n                                                Assign\r\n                                            </button>\r\n                                            <button class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20\" ws-onclick=\"UnassignSeat\" ws-attr=\"UnassignButtonAttr\">\r\n                                                Unassign\r\n                                            </button>\r\n                                        </td>\r\n                                    </tr>"));
}
function EncodeJson_BillingData(){
  return Encoder_BillingData?Encoder_BillingData:Encoder_BillingData=(EncodeRecord(void 0, [["email", Id_1(), 0], ["line1", Id_1(), 0], ["city", Id_1(), 0], ["postalCode", Id_1(), 0], ["country", Id_1(), 0], ["companyName", Id_1(), 1], ["taxId", Id_1(), 1]]))();
}
function DecodeJson_FSharpResult_2(){
  return Decoder_FSharpResult_2?Decoder_FSharpResult_2:Decoder_FSharpResult_2=(DecodeUnion(void 0, "$", [[0, [["$0", "ResultValue", Id_1(), 0]]], [1, [["$0", "ErrorValue", Id_1(), 0]]]]))();
}
function DecodeJson_BillingData(){
  return Decoder_BillingData?Decoder_BillingData:Decoder_BillingData=(DecodeRecord(void 0, [["email", Id_1(), 0], ["line1", Id_1(), 0], ["city", Id_1(), 0], ["postalCode", Id_1(), 0], ["country", Id_1(), 0], ["companyName", Id_1(), 1], ["taxId", Id_1(), 1]]))();
}
function DecodeJson_FSharpOption_3(){
  return Decoder_FSharpOption_3?Decoder_FSharpOption_3:Decoder_FSharpOption_3=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", Id_1(), 0]]]]))();
}
function DecodeJson_FSharpOption_2(){
  return Decoder_FSharpOption_2?Decoder_FSharpOption_2:Decoder_FSharpOption_2=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", DecodeJson_GitHubOrg, 0]]]]))();
}
function DecodeJson_GitHubOrg(){
  return Decoder_GitHubOrg?Decoder_GitHubOrg:Decoder_GitHubOrg=(DecodeRecord(void 0, [["name", Id_1(), 1], ["status", DecodeJson_GitHubOrgStatus, 0]]))();
}
function DecodeJson_GitHubOrgStatus(){
  return Decoder_GitHubOrgStatus?Decoder_GitHubOrgStatus:Decoder_GitHubOrgStatus=(DecodeUnion(void 0, "$", [null, null]))();
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
  const t_9=(this_18.h.push(new VarStr("seatcount", SeatCountText())),this_18);
  const t_10=(t_9.h.push(EventQ2(t_9.k, "onbillmonth", () => t_9.i, (_3) => {
    OnBillMonth(_3);
  })),t_9);
  const t_11=(t_10.h.push(EventQ2(t_10.k, "onbillyear", () => t_10.i, (_3) => {
    OnBillYear(_3);
  })),t_10);
  const t_12=(t_11.h.push(EventQ2(t_11.k, "onseatminus", () => t_11.i, (e) => {
    OnSeatMinus(e);
  })),t_11);
  const this_19=(t_12.h.push(EventQ2(t_12.k, "onseatplus", () => t_12.i, (_3) => {
    OnSeatPlus(_3);
  })),t_12);
  const this_20=(this_19.h.push(new VarStr("contactsubjectvar", _c_1.Lens(ContactFormVar(), (_3) => _3.subject, (_3, _4) => New(_4, _3.message, _3.email, _3.name, _3.country)))),this_19);
  const this_21=(this_20.h.push(new VarStr("contactmessagevar", _c_1.Lens(ContactFormVar(), (_3) => _3.message, (_3, _4) => New(_3.subject, _4, _3.email, _3.name, _3.country)))),this_20);
  const this_22=(this_21.h.push(new VarStr("contactemailvar", _c_1.Lens(ContactFormVar(), (_3) => _3.email, (_3, _4) => New(_3.subject, _3.message, _4, _3.name, _3.country)))),this_21);
  const this_23=(this_22.h.push(new VarStr("contactnamevar", _c_1.Lens(ContactFormVar(), (_3) => _3.name, (_3, _4) => New(_3.subject, _3.message, _3.email, _4, _3.country)))),this_22);
  const this_24=(this_23.h.push(new VarStr("contactcountryvar", _c_1.Lens(ContactFormVar(), (_3) => _3.country, (_3, _4) => New(_3.subject, _3.message, _3.email, _3.name, _4)))),this_23);
  const this_25=(this_24.h.push(new Attribute("contactsendbuttonattr", ContactSendButtonAttr())),this_24);
  const t_13=(this_25.h.push(new TextView("contactsendbuttontext", ContactSendButtonText())),this_25);
  const b=(t_13.h.push(EventQ2(t_13.k, "oncontactsendclick", () => t_13.i, (e) => {
    OnContactSendClick(e);
  })),t_13);
  const p=CompleteHoles(b.k, b.h, [["seatcount", 0, Some("1")], ["contactsubjectvar", 0, Some("WebSharper support")], ["contactmessagevar", 0, null], ["contactemailvar", 0, null], ["contactnamevar", 0, null], ["contactcountryvar", 0, Some("United States")]]);
  const i=new TemplateInstance(p[1], t(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
function CheckoutDoc(){
  const C=Doc.TextView(ContinueText().View);
  const C_1=ContinueButtonAttr();
  const T_1=Doc.TextView(Total());
  const T_2=Doc.TextView(Taxes());
  const S=Doc.TextView(Subtotal());
  const V=VatinAttr();
  const C_2=CompanyNameAttr();
  const C_3=CompanyBlockAttr();
  const S_1=SeatSelectorAttr();
  const P=Doc.TextView(PriceHint());
  const P_1=Doc.BindView((x) => x, PlanPriceLine());
  const P_2=Doc.TextView(PlanName());
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new AfterRenderQ("onafterrender", "", () => {
    OnAfterRender();
  })),this_1);
  const this_3=(this_2.h.push(new Attribute("backlinkattr", BackLinkAttr())),this_2);
  const this_4=(this_3.h.push(new Elt("backlinklabel", BackLinkLabel())),this_3);
  const this_5=(this_4.h.push(new Attribute("authsectionattr", AuthSectionAttr())),this_4);
  const this_6=(this_5.h.push(new Attribute("paymentsectionattr", PaymentSectionAttr())),this_5);
  const this_7=(this_6.h.push(new Elt("planname", P_2)),this_6);
  const this_8=(this_7.h.push(new Elt("planpriceline", P_1)),this_7);
  const this_9=(this_8.h.push(new Elt("pricehint", P)),this_8);
  const this_10=(this_9.h.push(new Attribute("seatselectorattr", S_1)),this_9);
  const t_9=(this_10.h.push(new VarStr("seatstext", SeatsTextVar())),this_10);
  const t_10=(t_9.h.push(EventQ2(t_9.k, "onseatminus", () => t_9.i, () => {
    OnSeatMinus_1();
  })),t_9);
  const this_11=(t_10.h.push(EventQ2(t_10.k, "onseatplus", () => t_10.i, () => {
    OnSeatPlus_1();
  })),t_10);
  const this_12=(this_11.h.push(new VarStr("email", EmailVar())),this_11);
  const this_13=(this_12.h.push(new VarStr("street", StreetVar())),this_12);
  const this_14=(this_13.h.push(new VarStr("city", CityVar())),this_13);
  const this_15=(this_14.h.push(new VarStr("postal", PostalVar())),this_14);
  const this_16=(this_15.h.push(new VarStr("country", CountryVar())),this_15);
  const this_17=(this_16.h.push(new VarBool("iscompany", IsCompanyVar())),this_16);
  const this_18=(this_17.h.push(new Attribute("companyblockattr", C_3)),this_17);
  const this_19=(this_18.h.push(new VarStr("companyname", CompanyNameVar())),this_18);
  const this_20=(this_19.h.push(new Attribute("companynameattr", C_2)),this_19);
  const this_21=(this_20.h.push(new VarStr("vatin", VatinVar())),this_20);
  const this_22=(this_21.h.push(new Attribute("vatinattr", V)),this_21);
  const this_23=(this_22.h.push(new Elt("subtotal", S)),this_22);
  const this_24=(this_23.h.push(new Elt("taxes", T_2)),this_23);
  const this_25=(this_24.h.push(new Elt("total", T_1)),this_24);
  const t_11=(this_25.h.push(new Elt("formerrordoc", FormErrorDoc())),this_25);
  const this_26=(t_11.h.push(EventQ2(t_11.k, "ongithublogin", () => t_11.i, () => {
    Login();
  })),t_11);
  const this_27=(this_26.h.push(new Attribute("continuebuttonattr", C_1)),this_26);
  const t_12=(this_27.h.push(new Elt("continuetext", C)),this_27);
  const b=(t_12.h.push(EventQ2(t_12.k, "oncontinueclick", () => t_12.i, () => {
    OnContinueClick();
  })),t_12);
  const p=CompleteHoles(b.k, b.h, [["seatstext", 0, Some("1")], ["email", 0, null], ["street", 0, null], ["city", 0, null], ["postal", 0, null], ["country", 0, null], ["iscompany", 2, null], ["companyname", 0, null], ["vatin", 0, null]]);
  const i=new TemplateInstance(p[1], t_1(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
function OnAfterRender(){
  resetContinueButton();
  computeBackLink();
  initFromQuery();
  StartImmediate(initFromApi(), null);
  StartImmediate(ensurePlans(), null);
}
function Init_3(){
  const searchParams=new URLSearchParams(globalThis.location.search);
  const codeParam=searchParams.get("code");
  isAuthErrorVar().Set(!IsNullOrWhiteSpace(codeParam));
  previousVar().Set(getPrevious(searchParams));
  const titleParam=searchParams.get("title");
  if(!IsNullOrWhiteSpace(titleParam))titleVar().Set(titleParam);
  msgVar().Set(getMessageTxt(searchParams, codeParam));
}
function Title(){
  return _c_2.Title;
}
function Message(){
  return _c_2.Message;
}
function OnRetry(){
  const prev=previousVar().Get();
  if(isAuthErrorVar().Get())globalThis.location.href=BuildStartUrlWithReturn(prev);
  else globalThis.location.href=prev;
}
function OnBack(){
  const previous=previousVar().Get();
  globalThis.location.href=previous;
}
function isAuthErrorVar(){
  return _c_2.isAuthErrorVar;
}
function getPrevious(searchParams){
  const _2=searchParams.get("from");
  const _3=searchParams.get("page");
  const _4=sameOriginReferer();
  return!IsNullOrWhiteSpace(_2)?_2:!IsNullOrWhiteSpace(_3)?_3:_4!=null&&_4.$==1?_4.$0:"/";
}
function previousVar(){
  return _c_2.previousVar;
}
function titleVar(){
  return _c_2.titleVar;
}
function getMessageTxt(searchParams, codeParam){
  const friendly=searchParams.get("message");
  return!IsNullOrWhiteSpace(friendly)?friendly:!IsNullOrWhiteSpace(codeParam)?messageForCode(codeParam):"An unexpected error occurred. Please try again.";
}
function msgVar(){
  return _c_2.msgVar;
}
function sameOriginReferer(){
  try {
    const referer=globalThis.document.referrer;
    if(IsNullOrWhiteSpace(referer))return null;
    else {
      const origin=globalThis.location.origin;
      return StartsWith(referer, origin)?Some(referer.substring(origin.length)):null;
    }
  }
  catch(m){
    return null;
  }
}
function messageForCode(code){
  return code=="invalid_state"?"Sign-in failed, please try again.":code=="token"?"GitHub sign-in failed during token exchange. Please try again.":code=="token_missing"?"GitHub sign-in failed (no token).":code=="user"?"GitHub sign-in failed when fetching your user info.":code=="user_parse"?"GitHub sign-in failed (user data issue).":code=="db"?"Sign-in temporarily unavailable. Please try again shortly.":code=="service"?"Sign-in temporarily unavailable (service not configured).":"Unexpected error during sign-in. Please try again.";
}
function RedirectToError(ctx){
  const o=ctx.Title;
  const title=o==null?"Request error":o.$0;
  const o_1=ctx.Message;
  const m=o_1==null?"":o_1.$0;
  const message=m.length>300?Substring(m, 0, 300):m;
  const v=globalThis.location.href;
  const o_2=ctx.Page;
  const page=o_2==null?v:o_2.$0;
  const q=new URLSearchParams(Object.fromEntries([["title", title], ["message", message], ["ts", DateFormatter(Date.now(), "o")], ["page", page]]));
  globalThis.location.href="./error.html?"+String(q);
}
function BillToVat(){
  return _c_3.BillToVat;
}
function BillToAddr(){
  return _c_3.BillToAddr;
}
function BillToName(){
  return _c_3.BillToName;
}
function InvSub(){
  return _c_3.InvSub;
}
function InvAmount(){
  return _c_3.InvAmount;
}
function InvStatus(){
  return _c_3.InvStatus;
}
function InvDate(){
  return _c_3.InvDate;
}
function InvId(){
  return _c_3.InvId;
}
function OnAfterRender_1(){
  StartImmediate(Delay(() => Bind_1(loadInvoiceFromApi(), (a) => {
    invoiceVar().Set(a);
    return Zero();
  })), null);
}
function loadInvoiceFromApi(){
  return Delay(() => {
    const m=getInvoiceIdFromQuery();
    if(m!=null&&m.$==1){
      const id=m.$0;
      return Bind_1(ListSubscriptions(), (a) => {
        function loop(i){
          return Delay(() => {
            if(i>=length(a))return Return(null);
            else {
              const subId=get(a, i).id;
              return Bind_1(GetInvoices_1(subId), (a_1) => {
                const m_1=tryFind((inv_1) => inv_1.id==id, a_1);
                if(m_1==null)return loop(i+1);
                else {
                  const inv=m_1.$0;
                  return Return(Some(inv.subscription==null?New_3(inv.id, inv.date, inv.amount, inv.currency, inv.status, Some(subId), inv.billingAddress, inv.company):inv));
                }
              });
            }
          });
        }
        return loop(0);
      });
    }
    else return Return(null);
  });
}
function invoiceVar(){
  return _c_3.invoiceVar;
}
function money(cents, ccy){
  return String(cents/100)+" "+(IsNullOrWhiteSpace(ccy)?"USD":ccy.toUpperCase());
}
function getInvoiceIdFromQuery(){
  const id=(new URLSearchParams(globalThis.location.search)).get("id");
  return id==null||id==""?null:Some(id);
}
function ManageSubscriptionDoc(){
  const this_1=new ProviderBuilder("New_1");
  const t_9=(this_1.h.push(new AfterRenderQ("onafterrender", "", () => {
    Init_4();
  })),this_1);
  const t_10=(t_9.h.push(EventQ2(t_9.k, "gosubs", () => t_9.i, () => {
    ShowSubsPage();
  })),t_9);
  const this_2=(t_10.h.push(EventQ2(t_10.k, "gobilling", () => t_10.i, () => {
    ShowBillingPage();
  })),t_10);
  const this_3=(this_2.h.push(new Attribute("substabattr", SubsTabAttr())),this_2);
  const this_4=(this_3.h.push(new Attribute("billingtabattr", BillingTabAttr())),this_3);
  const this_5=(this_4.h.push(new Elt("githuborg", GitHubBody())),this_4);
  const t_11=(this_5.h.push(new Attribute("customerportalattr", CustomerPortalAttr())),this_5);
  const this_6=(t_11.h.push(EventQ2(t_11.k, "opencustomerportal", () => t_11.i, () => {
    OpenCustomerPortal();
  })),t_11);
  const this_7=(this_6.h.push(new Attribute("subspageattr", SubsPageAttr())),this_6);
  const this_8=(this_7.h.push(new Attribute("billingpageattr", BillingPageAttr())),this_7);
  const this_9=(this_8.h.push(new Attribute("loginpromptattr", LoginPromptAttr())),this_8);
  const t_12=(this_9.h.push(new Attribute("contentattr", ContentAttr())),this_9);
  const this_10=(t_12.h.push(EventQ2(t_12.k, "loginclick", () => t_12.i, () => {
    LoginClick();
  })),t_12);
  const this_11=(this_10.h.push(new Elt("seatsbody", SeatsBody())),this_10);
  const this_12=(this_11.h.push(new Elt("invoicebody", InvoicesBody())),this_11);
  const this_13=(this_12.h.push(new Attribute("spinnerattr", SpinnerAttr())),this_12);
  const this_14=(this_13.h.push(new Attribute("toastattr", ToastAttr())),this_13);
  const this_15=(this_14.h.push(new Elt("toasttext", ToastText())),this_14);
  const this_16=(this_15.h.push(new Attribute("billingviewattr", BillingViewAttr())),this_15);
  const this_17=(this_16.h.push(new Attribute("billingeditattr", BillingEditAttr())),this_16);
  const this_18=(this_17.h.push(new Attribute("btnbillingeditattr", BtnBillingEditAttr())),this_17);
  const this_19=(this_18.h.push(new Attribute("btnbillingsaveattr", BtnBillingSaveAttr())),this_18);
  const this_20=(this_19.h.push(new Attribute("btnbillingcancelattr", BtnBillingCancelAttr())),this_19);
  const this_21=(this_20.h.push(new Elt("billingnameview", BillingNameView())),this_20);
  const this_22=(this_21.h.push(new Elt("billingvatinview", BillingVatinView())),this_21);
  const this_23=(this_22.h.push(new Elt("billingline1view", BillingLine1View())),this_22);
  const this_24=(this_23.h.push(new Elt("billingcityview", BillingCityView())),this_23);
  const this_25=(this_24.h.push(new Elt("billingpostalview", BillingPostalView())),this_24);
  const this_26=(this_25.h.push(new Elt("billingcountryview", BillingCountryView())),this_25);
  const this_27=(this_26.h.push(new VarStr("billingnamevar", CompanyNameVar_1())),this_26);
  const this_28=(this_27.h.push(new VarStr("billingvatinvar", CompanyVatinVar())),this_27);
  const this_29=(this_28.h.push(new VarStr("billingline1var", _c_1.Lens(BillingRecordVar(), (_3) => _3.address.line1, (_3, _4) => New_2(_3.company, New_1(_4, _3.address.city, _3.address.postal_code, _3.address.country))))),this_28);
  const this_30=(this_29.h.push(new VarStr("billingcityvar", _c_1.Lens(BillingRecordVar(), (_3) => _3.address.city, (_3, _4) => New_2(_3.company, New_1(_3.address.line1, _4, _3.address.postal_code, _3.address.country))))),this_29);
  const this_31=(this_30.h.push(new VarStr("billingpostalvar", _c_1.Lens(BillingRecordVar(), (_3) => _3.address.postal_code, (_3, _4) => New_2(_3.company, New_1(_3.address.line1, _3.address.city, _4, _3.address.country))))),this_30);
  const t_13=(this_31.h.push(new VarStr("billingcountryvar", _c_1.Lens(BillingRecordVar(), (_3) => _3.address.country, (_3, _4) => New_2(_3.company, New_1(_3.address.line1, _3.address.city, _3.address.postal_code, _4))))),this_31);
  const t_14=(t_13.h.push(EventQ2(t_13.k, "addseatsclick", () => t_13.i, () => {
    globalThis.location.href="./checkout.html?plan=pro&interval=year&seats=1";
  })),t_13);
  const t_15=(t_14.h.push(EventQ2(t_14.k, "refreshclick", () => t_14.i, () => {
    HandleRefresh();
  })),t_14);
  const t_16=(t_15.h.push(EventQ2(t_15.k, "billingeditclick", () => t_15.i, () => {
    HandleBillingEdit();
  })),t_15);
  const t_17=(t_16.h.push(EventQ2(t_16.k, "billingsaveclick", () => t_16.i, () => {
    HandleBillingSave();
  })),t_16);
  const b=(t_17.h.push(EventQ2(t_17.k, "billingcancelclick", () => t_17.i, () => {
    HandleBillingCancel();
  })),t_17);
  const p=CompleteHoles(b.k, b.h, [["billingnamevar", 0, null], ["billingvatinvar", 0, null], ["billingline1var", 0, null], ["billingcityvar", 0, null], ["billingpostalvar", 0, null], ["billingcountryvar", 0, null]]);
  const i=new TemplateInstance(p[1], t_2(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
function Init_4(){
  setLoading(true);
  (requireAuth().then(() => loadAllAfterAuth()))["catch"](() => setLoading(false));
}
function loadAllAfterAuth(){
  StartImmediate(Delay(() => {
    setLoading(true);
    return TryFinally(Delay(() => Bind_1(Parallel([Delay(() => Bind_1(loadSubscriptionsAsync(), () => {
      chooseCurrentSubscription();
      return Zero();
    })), loadSeatsAsync(), loadInvoicesAsync(), loadBillingAsync(), loadCustomerPortalAsync(), loadGitHubOrg()]), () => Return(null))), () => {
      setLoading(false);
    });
  }), null);
}
function loadSubscriptionsAsync(){
  return Delay(() => {
    RefreshSeats();
    return Zero();
  });
}
function chooseCurrentSubscription(){
  const subs=SubsVar().Get();
  if(length(subs)===0)CurrentSubIdVar().Set("");
  else {
    const current=CurrentSubIdVar().Get();
    if(IsNullOrEmpty(current)||!exists_1((s) => s.id==current, subs))CurrentSubIdVar().Set(get(subs, 0).id);
  }
}
function loadSeatsAsync(){
  return Delay(() => IsNullOrEmpty(CurrentSubIdVar().Get())?(SeatsVar().Set([]),Return(null)):(RefreshSeats(),Zero()));
}
function loadInvoicesAsync(){
  return Delay(() => {
    const current=CurrentSubIdVar().Get();
    return IsNullOrEmpty(current)?(InvoicesVar().Set([]),RefreshInvoices([]),Zero()):Bind_1(GetInvoices_1(current), (a) => {
      InvoicesVar().Set(a);
      RefreshInvoices(a);
      return Zero();
    });
  });
}
function loadBillingAsync(){
  return Delay(() => Bind_1(GetBilling(), (a) => {
    BillingVar().Set(Some(a));
    SetBillingRecord(Some(a));
    SetBillingMode(Viewing);
    return Zero();
  }));
}
function loadCustomerPortalAsync(){
  return Delay(() => Bind_1(GetCustomerPortalLink_1(), (a) => {
    CustomerPortalLinkVar().Set(a);
    return Zero();
  }));
}
function loadGitHubOrg(){
  return Delay(() => Bind_1(GetGitHubOrganization(), (a) => {
    GitHubOrgVar().Set(a);
    return Zero();
  }));
}
function DetailsDoc(){
  return _c_4.DetailsDoc;
}
function DetailsAttr(){
  return _c_4.DetailsAttr;
}
function MessageText(){
  return _c_4.MessageText;
}
function OnAfterRender_2(){
  StartImmediate(Delay(() => {
    const sessionId=(new URLSearchParams(globalThis.location.search)).get("session_id");
    return sessionId==null||sessionId==""?(setErrorMessage("Missing session id."),Zero()):(messageVar().Set("Confirming your payment\u2026"),Bind_1(fetchConfirmation(sessionId), (a) => {
      if(a==null)return Zero();
      else {
        const c=a.$0;
        confirmationVar().Set(Some(c));
        messageVar().Set(c.paid?"Your payment has been received.":"Payment recorded; awaiting confirmation.");
        return Zero();
      }
    }));
  }), null);
}
function setErrorMessage(msg){
  messageVar().Set(msg);
  confirmationVar().Set(null);
}
function messageVar(){
  return _c_4.messageVar;
}
function fetchConfirmation(sessionId){
  return Delay(() => {
    const url="https://localhost:8234/checkout/confirm?session_id="+encodeURIComponent(sessionId);
    return TryWith(Delay(() => {
      let r;
      return Bind_1(AsAsync(globalThis.fetch(url, (r={},r.method="GET",r.credentials="include",r.headers=header(),r))), (a) =>!a.ok?Return(null):Bind_1(AsAsync(a.json()), (a_1) => Return(Some(a_1))));
    }), () => {
      RedirectToError(New_6(Some("Payment confirmation failed"), null, null));
      return Return(null);
    });
  });
}
function confirmationVar(){
  return _c_4.confirmationVar;
}
function row(label, value){
  const v=IsNullOrWhiteSpace(value)?"-":value;
  return Doc.Element("div", [], [Doc.TextNode(label+": "), Doc.Element("b", [], [Doc.TextNode(v)])]);
}
function formatAmount(cents){
  return usd(cents/100);
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
    const _2=e;
    if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
  }
  return r;
}
function GetFieldValues(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push(o[k_1]);
  return r;
}
class TemplateHole extends Object_1 {
  static Value(th){
    return th.ValueObj;
  }
  ApplyVarHole(el){
    console.warn("Not a var hole: ", this.Name);
  }
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
}
class Attribute extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new Attribute(n, this.fillWith);
  }
  get Value(){
    return this.fillWith;
  }
  get ValueObj(){
    return this.Value;
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
  get ValueObj(){
    return this.Value;
  }
  get Value(){
    return this.fillWith;
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
  static isAuthedV;
  static userV;
  static isOpen;
  static {
    this.isOpen=_c_1.Create_1(false);
    this.userV=UserView();
    this.isAuthedV=IsAuthedView();
    this.avatarSrcV=Map((a) => a!=null&&a.$==1?!IsNullOrWhiteSpace(a.$0.avatarUrl)?a.$0.avatarUrl:"":"", userV());
    this.hasAvatarV=Map((y) =>""!=y, avatarSrcV());
    this.displayNameV=Map((a) => a==null?"Account":!IsNullOrWhiteSpace(a.$0.login)?a.$0.login:"Account", userV());
    this.AccountHeaderText=displayNameV();
  }
});
function NewGuid(){
  return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]", "g"), (c) => {
    const r=Math.random()*16|0;
    const v=c=="x"?r:r&3|8;
    return v.toString(16);
  });
}
function Parse(input){
  try {
    return ParseExact(input, "D");
  }
  catch(m){
    try {
      return ParseExact(input, "B");
    }
    catch(m_1){
      try {
        return ParseExact(input, "P");
      }
      catch(m_2){
        try {
          return ParseExact(input, "N");
        }
        catch(m_3){
          return ParseExact(input, "X");
        }
      }
    }
  }
}
function ParseExact(input, format){
  const parseD=(s_5) => {
    for(let i=0, _2=35;i<=_2;i++){
      if(i===8||(i===13||(i===18||i===23))){
        if(s_5[i]!=="-")ShapeError();
      }
      else {
        const c_2=s_5[i];
        if(!("0"<=c_2&&c_2<="9"||"a"<=c_2&&c_2<="f"))ShapeError();
      }
    }
    return s_5;
  };
  const m=format.toUpperCase();
  if(m=="N"){
    const s=Trim(input).toLowerCase();
    if(s.length!==32)ShapeError();
    for(let i=0, _2=31;i<=_2;i++){
      const c=s[i];
      if(!("0"<=c&&c<="9"||"a"<=c&&c<="f"))ShapeError();
    }
    return Substring(s, 0, 8)+"-"+Substring(s, 8, 4)+"-"+Substring(s, 12, 4)+"-"+Substring(s, 16, 4)+"-"+s.substring(20);
  }
  else if(m=="D"){
    const s_1=Trim(input).toLowerCase();
    if(s_1.length!==36)ShapeError();
    return parseD(s_1);
  }
  else if(m=="B"){
    const s_2=Trim(input).toLowerCase();
    if(s_2.length!==38||s_2[0]!=="{"||s_2[17]!=="}")ShapeError();
    return parseD(Substring(s_2, 1, 36));
  }
  else if(m=="P"){
    const s_3=Trim(input).toLowerCase();
    if(s_3.length!==38||s_3[0]!=="("||s_3[17]!==")")ShapeError();
    return parseD(Substring(s_3, 1, 36));
  }
  else if(m=="X"){
    const s_4=Trim(input).toLowerCase();
    if(s_4.length!==68)ShapeError();
    for(let i_1=0, _3=67;i_1<=_3;i_1++){
      switch(i_1){
        case 26:
        case 0:
          if(s_4[i_1]!=="{")ShapeError();
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
          if(s_4[i_1]!=="0")ShapeError();
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
          if(s_4[i_1]!=="x")ShapeError();
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
          if(s_4[i_1]!==",")ShapeError();
          break;
        case 67:
        case 66:
          if(s_4[i_1]!=="{")ShapeError();
          break;
        default:
          const c_1=s_4[i_1];
          if(!("0"<=c_1&&c_1<="9"||"a"<=c_1&&c_1<="f"))ShapeError();
          break;
      }
    }
    return Substring(s_4, 3, 8)+"-"+Substring(s_4, 14, 4)+"-"+Substring(s_4, 21, 4)+"-"+Substring(s_4, 29, 2)+Substring(s_4, 34, 2)+"-"+Substring(s_4, 39, 2)+Substring(s_4, 44, 2)+Substring(s_4, 49, 2)+Substring(s_4, 54, 2)+Substring(s_4, 59, 2)+Substring(s_4, 64, 2);
  }
  else return FormatError();
}
function ShapeError(){
  throw new FormatException("New_1", "Guid should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");
}
function FormatError(){
  throw new FormatException("New_1", "Format String can be only \"D\", \"d\", \"N\", \"n\", \"P\", \"p\", \"B\", \"b\", \"X\" or \"x\".");
}
class EventQ extends TemplateHole {
  name;
  key;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new EventQ(n, this.key, this.fillWith);
  }
  get Value(){
    return this.fillWith;
  }
  get ValueObj(){
    return this.Value;
  }
  constructor(name, key, fillWith){
    super();
    this.name=name;
    this.key=key;
    this.fillWith=fillWith;
  }
}
class Var extends Object_1 { }
function DynamicClassPred(name, view){
  return Dynamic_1(view, (el) =>(v) => v?AddClass(el, name):RemoveClass(el, name));
}
function Dynamic(name, view){
  return Dynamic_1(view, (el) =>(v) => el.setAttribute(name, v));
}
function DynamicBool(name, boolview){
  return Dynamic_1(boolview, (_2) =>(_3) => _3?_2.setAttribute(name, ""):_2.removeAttribute(name));
}
function Handler(name, callback){
  return Attr.A3((el) => {
    el.addEventListener(name, (d) =>(callback(el))(d), false);
  });
}
function OnAfterRender_3(callback){
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
      const _2=c.s;
      if(_2!=null&&_2.$==0)lv.o=null;
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
function Bind(fn, view){
  return Join(Map(fn, view));
}
function Map2Unit(a, a_1){
  return CreateLazy(() => Map2Unit_1(a(), a_1()));
}
function Sink(act, a){
  function loop(){
    WhenRun(a(), act, () => {
      scheduler().Fork(loop);
    });
  }
  scheduler().Fork(loop);
}
function Join(a){
  return CreateLazy(() => Join_1(a()));
}
function MapSeqCachedViewBy(key, conv, view){
  const state=[new Dictionary("New_5")];
  return Map((xs) => {
    const prevState=state[0];
    const newState=new Dictionary("New_5");
    const result=mapInPlace((x) => {
      let node;
      const k=key(x);
      if(prevState.ContainsKey(k)){
        const n=prevState.Item(k);
        node=(_c_1.Set(n.r, x),n);
      }
      else node=ConvertSeqNode((v) => conv(k, v), x);
      newState.set_Item(k, node);
      return node.e;
    }, ofSeq(xs));
    state[0]=newState;
    return result;
  }, view);
}
function Sequence(views){
  return CreateLazy(() => Sequence_1(map((a) => a(), views)));
}
function ConvertSeqNode(conv, value){
  const var_1=_c_1.Create_1(value);
  const view=var_1.View;
  return{
    e:conv(view), 
    r:var_1, 
    w:view
  };
}
class Attr {
  static Concat(xs){
    const x=ofSeqNonCopying(xs);
    return TreeReduce(EmptyAttr(), (_2, _3) => AppendTree(_2, _3), x);
  }
  static A1(Item){
    return Create_2(Attr, {$:1, $0:Item});
  }
  static A2(Item1, Item2){
    return Create_2(Attr, {
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
  static HandlerImpl(event, q){
    return Attr.A3((el) => {
      el.addEventListener(event, (d) =>(q(el))(d), false);
    });
  }
  static A3(init_2){
    return Create_2(Attr, {$:3, $0:init_2});
  }
  static A4(onAfterRender){
    return Create_2(Attr, {$:4, $0:onAfterRender});
  }
  $;
  $0;
  $1;
}
class AfterRenderQ extends TemplateHole {
  name;
  key;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new AfterRenderQ(n, this.key, this.fillWith);
  }
  get Value(){
    return this.fillWith;
  }
  get ValueObj(){
    return this.Value;
  }
  constructor(name, key, fillWith){
    super();
    this.name=name;
    this.key=key;
    this.fillWith=fillWith;
  }
}
function filter(f, o){
  let _2;
  return o!=null&&o.$==1&&(f(o.$0)&&(_2=o.$0,true))?o:null;
}
function Some(Value_1){
  return{$:1, $0:Value_1};
}
function ContactSendButtonText(){
  return _c_7.ContactSendButtonText;
}
function ContactSendButtonAttr(){
  return _c_7.ContactSendButtonAttr;
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
  return Dynamic("href", Map2((_2, _3) =>"./checkout.html?plan=pro&interval="+String(intervalAsString(_2))+"&seats="+String(clampSeats(_3)), intervalVar().View, SeatCount()));
}
function FreeCheckoutAttr(){
  return Dynamic("href", Map((interval) =>"./checkout.html?plan=freelancer&interval="+intervalAsString(interval)+"&seats=1", intervalVar().View));
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
    return TryFinally(Delay(() => Bind_1(SendContact(form), (a) => a?(alert("Message sent successfully!"),resetForm(),Zero()):(alert("Failed to send message. Please try again later."),Zero()))), () => {
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
        return var_1.Update((t_9) => update(t_9, v));
      }
      SetFinal(v){
        return this.Set(v);
      }
      Update(f){
        return var_1.Update((t_9) => update(t_9, f(get_1(t_9))));
      }
      UpdateMaybe(f){
        return var_1.UpdateMaybe((t_9) => {
          const x=f(get_1(t_9));
          return x==null?null:Some(update(t_9, x.$0));
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
  static Set(var_1, value){
    var_1.Set(value);
  }
  static { }
});
function ContactFormVar(){
  return _c_8.ContactFormVar;
}
function SeatCountText(){
  return _c_8.SeatCountText;
}
function intervalVar(){
  return _c_8.intervalVar;
}
function SeatCount(){
  return _c_8.SeatCount;
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
  let _2=s==null?"":Trim(s);
  let _3=((s_1) => {
    let o;
    const m=(o=0,[TryParse(s_1, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    return m[0]?m[1]:1;
  })(_2);
  let _4=_3+delta;
  let _5=clampSeats(_4);
  let _6=String(_5);
  value.Set(_6);
}
function IsFormValid(form){
  return!IsNullOrWhiteSpace(form.message)&&!IsNullOrWhiteSpace(form.email)&&!IsNullOrWhiteSpace(form.name)&&isValidEmail(form.email);
}
function IsSendingVar(){
  return _c_8.IsSendingVar;
}
function CanSendView(){
  return _c_8.CanSendView;
}
function fallbackPro(){
  return _c_8.fallbackPro;
}
function fallbackFreelancer(){
  return _c_8.fallbackFreelancer;
}
function catalogVar(){
  return _c_8.catalogVar;
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
  return Delay(() => Bind_1(LoadOrFetchPlans(), (a) => a==null?Zero():(buildCatalog(a.$0.items),Zero())));
}
function LoadOrFetchPlans(){
  return Delay(() => {
    const m=loadCache();
    return m==null?Bind_1(fetchFromApi(), (a) => {
      let _2;
      return a!=null&&a.$==1&&(length(a.$0.items)>0&&(_2=a.$0,true))?(saveCache(_2),Return(Some(_2))):Return(null);
    }):Return(Some(m.$0));
  });
}
function buildCatalog(items){
  catalogVar().Set(fold_1((_2, _3) => {
    const code=String(_3.code).toLowerCase();
    const intervalStr=String(_3.interval).toLowerCase();
    const pi=New_11(_3.unitAmountCents/100, (IsNullOrWhiteSpace(_3.currency)?"usd":_3.currency).toUpperCase());
    const nameOpt=nonEmptyOpt(_3.name);
    const m=_3.description;
    const descOpt=m==null?null:nonEmptyOpt(m.$0);
    return code=="pro"?New_10(updateEntryFromItem(_2.Pro, intervalStr, pi, nameOpt, descOpt), _2.Freelancer):code=="freelancer"?New_10(_2.Pro, updateEntryFromItem(_2.Freelancer, intervalStr, pi, nameOpt, descOpt)):_2;
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
      return Bind_1(AsAsync(globalThis.fetch("https://api.intellifactory.com/api/contact", (r={},r.method="POST",r.body=formData,r))), (a) => Return(a.ok));
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
  return Delay(() => TryWith(Delay(() => {
    let r;
    return Bind_1(AsAsync(globalThis.fetch("https://localhost:8234/plans/prices", (r={},r.method="GET",r.credentials="include",r.headers=header(),r))), (a) =>!a.ok?Return(null):Bind_1(AsAsync(a.json()), (a_1) => Return(Some(a_1))));
  }), () => Return(null)));
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
  const entry_1=New_9(nameOpt==null?entry.Name:Some(nameOpt.$0), descOpt==null?entry.Description:Some(descOpt.$0), entry.Month, entry.Year);
  return intervalStr=="month"?New_9(entry_1.Name, entry_1.Description, Some(pi), entry_1.Year):intervalStr=="year"?New_9(entry_1.Name, entry_1.Description, entry_1.Month, Some(pi)):entry_1;
}
function ProName(){
  return _c_9.ProName;
}
function FreeName(){
  return _c_9.FreeName;
}
function ProPriceAmount(){
  return _c_9.ProPriceAmount;
}
function ProPriceLabel(){
  return _c_9.ProPriceLabel;
}
function FreePriceAmount(){
  return _c_9.FreePriceAmount;
}
function FreePriceLabel(){
  return _c_9.FreePriceLabel;
}
function ProTotalLabel(){
  return _c_9.ProTotalLabel;
}
function ProTotalAmount(){
  return _c_9.ProTotalAmount;
}
function FreeTotalLabel(){
  return _c_9.FreeTotalLabel;
}
function FreeTotalAmount(){
  return _c_9.FreeTotalAmount;
}
function ProNote(){
  return _c_9.ProNote;
}
function FreeNote(){
  return _c_9.FreeNote;
}
function FormErrorDoc(){
  return _c_10.FormErrorDoc;
}
function OnSeatMinus_1(){
  AdjustSeats(-1, SeatsTextVar());
}
function OnSeatPlus_1(){
  AdjustSeats(1, SeatsTextVar());
}
function OnContinueClick(){
  const m=validateForm();
  if(m==null){
    FormError().Set(null);
    StartImmediate(Delay(() => TryWith(Delay(() => {
      ContinueDisabled().Set(true);
      ContinueText().Set("Processing\u2026");
      return Bind_1(startCheckout(buildPayload()), (a) => {
        let _2;
        return a!=null&&a.$==1&&(!IsNullOrWhiteSpace(a.$0.url)&&(_2=a.$0,true))?(globalThis.location.href=_2.url,resetContinueButton(),Zero()):(resetContinueButton(),Zero());
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
  return _c_10.FormError;
}
function isBlank(s){
  return IsNullOrWhiteSpace(s==null?"":s);
}
function VatinVar(){
  return _c_11.VatinVar;
}
function CompanyNameVar(){
  return _c_11.CompanyNameVar;
}
function IsCompanyVar(){
  return _c_11.IsCompanyVar;
}
function CountryVar(){
  return _c_11.CountryVar;
}
function PostalVar(){
  return _c_11.PostalVar;
}
function CityVar(){
  return _c_11.CityVar;
}
function StreetVar(){
  return _c_11.StreetVar;
}
function EmailVar(){
  return _c_11.EmailVar;
}
function SeatsTextVar(){
  return _c_11.SeatsTextVar;
}
function ContinueText(){
  return _c_11.ContinueText;
}
function resetContinueButton(){
  ContinueDisabled().Set(false);
  ContinueText().Set("Continue to payment");
}
function computeBackLink(){
  let dest;
  let label;
  const referrer=globalThis.document.referrer;
  dest="/support.html#plans";
  label="Plans";
  if(!IsNullOrWhiteSpace(referrer))EndsWith(referrer, "/manage-subscription.html")?(dest="/manage-subscription.html",label="Manage subscription"):EndsWith(referrer, "/support.html")?(dest="/support.html#plans",label="Plans"):void 0;
  backLinkHref().Set(dest);
  backLinkLabel().Set(label);
}
function initFromQuery(){
  const searchParams=readParams();
  let _2=CheckoutFormVar();
  const _3=CheckoutFormVar().Get();
  _2.Set(New_12(searchParams.plan, searchParams.interval, String(searchParams.seats), _3.email, _3.street, _3.city, _3.postal, _3.country, _3.isCompany, _3.companyName, _3.vatin));
}
function initFromApi(){
  return Delay(() => Bind_1(GetBillingData(), (a) => {
    if(a!=null&&a.$==1){
      const data=a.$0;
      let _2=CheckoutFormVar();
      const _3=CheckoutFormVar().Get();
      const o=data.companyName;
      let _4=o==null?"":o.$0;
      const o_1=data.taxId;
      let _5=o_1==null?"":o_1.$0;
      let _6=New_12(_3.plan, _3.interval, _3.seatsText, data.email, data.line1, data.city, data.postalCode, data.country, data.companyName!=null, _4, _5);
      _2.Set(_6);
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
      plansVar().Set(resp.items);
      return Zero();
    }
  }));
}
function ContinueDisabled(){
  return _c_11.ContinueDisabled;
}
function buildPayload(){
  const form=CheckoutFormVar().Get();
  return New_14(clampSeats(parseSeats(form.seatsText)), Trim(form.email), intervalAsString(form.interval), form.plan.toLowerCase()=="freelancer"?"freelancer":"pro", New_1(Trim(form.street), Trim(form.city), Trim(form.postal), toIso2(form.country)), form.isCompany?Some(New_4(Trim(form.companyName), Trim(form.vatin))):null);
}
function CheckoutFormVar(){
  return _c_11.CheckoutFormVar;
}
function backLinkLabel(){
  return _c_11.backLinkLabel;
}
function backLinkHref(){
  return _c_11.backLinkHref;
}
function readParams(){
  let o;
  const queryParameters=new URLSearchParams(globalThis.location.search);
  let _2=queryParameters.get("plan").toLowerCase()=="freelancer"?"freelancer":"pro";
  let _3=queryParameters.get("interval").toLowerCase()=="month"?Month:Year;
  const m=(o=0,[TryParse(queryParameters.get("seats"), {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  let _4=m[0]?clampSeats(m[1]):1;
  return New_13(_2, _3, _4);
}
function plansVar(){
  return _c_11.plansVar;
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
  return _c_11.SelectedIntervalVar;
}
function SelectedPlanVar(){
  return _c_11.SelectedPlanVar;
}
function toIso2(value){
  let o;
  const v=Trim(value==null?"":value).toLowerCase();
  const m=(o=null,[dict([["hungary", "HU"], ["france", "FR"], ["united-kingdom", "GB"]]).TryGetValue(v, {get:() => o, set:(v_1) => {
    o=v_1;
  }}), o]);
  return m[0]?m[1]:v.length>=2?Substring(v, 0, 2).toUpperCase():v.toUpperCase();
}
function PaymentSectionAttr(){
  return _c_12.PaymentSectionAttr;
}
function AuthSectionAttr(){
  return _c_12.AuthSectionAttr;
}
function BackLinkLabel(){
  return _c_12.BackLinkLabel;
}
function BackLinkAttr(){
  return _c_12.BackLinkAttr;
}
function SeatSelectorAttr(){
  return DynamicClassPred("hidden", Map((perSeat) =>!perSeat, IsPerSeat()));
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
function isAuthedV_1(){
  return _c_12.isAuthedV;
}
function PlanName(){
  return _c_13.PlanName;
}
function PlanPriceLine(){
  return _c_13.PlanPriceLine;
}
function PriceHint(){
  return _c_13.PriceHint;
}
function Subtotal(){
  return _c_13.Subtotal;
}
function Taxes(){
  return _c_13.Taxes;
}
function Total(){
  return _c_13.Total;
}
function IsPerSeat(){
  return _c_13.IsPerSeat;
}
function CurrentPlan(){
  return _c_13.CurrentPlan;
}
function Seats(){
  return _c_13.Seats;
}
function SubtotalRaw(){
  return _c_13.SubtotalRaw;
}
function VatRate(){
  return _c_13.VatRate;
}
function TaxesRaw(){
  return _c_13.TaxesRaw;
}
function TotalRaw(){
  return _c_13.TotalRaw;
}
class Elt extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new Elt(n, this.fillWith);
  }
  get Value(){
    return this.fillWith;
  }
  get ValueObj(){
    return this.Value;
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
let _c_2=Lazy((_i) => class $StartupCode_Error {
  static {
    _c_2=_i(this);
  }
  static Message;
  static Title;
  static isAuthErrorVar;
  static previousVar;
  static msgVar;
  static titleVar;
  static {
    this.titleVar=_c_1.Create_1("Something went wrong");
    this.msgVar=_c_1.Create_1("An unexpected error occurred. Please try again.");
    this.previousVar=_c_1.Create_1("/");
    this.isAuthErrorVar=_c_1.Create_1(false);
    this.Title=titleVar().View;
    this.Message=msgVar().View;
  }
});
let _c_3=Lazy((_i) => class $StartupCode_Invoices {
  static {
    _c_3=_i(this);
  }
  static BillToAddr;
  static BillToVat;
  static BillToName;
  static InvSub;
  static InvAmount;
  static InvStatus;
  static InvDate;
  static InvId;
  static invoiceVar;
  static {
    this.invoiceVar=_c_1.Create_1(null);
    this.InvId=Doc.TextView(Map((a) => a==null?"-":a.$0.id, invoiceVar().View));
    this.InvDate=Doc.TextView(Map((a) => a==null?"-":a.$0.date, invoiceVar().View));
    this.InvStatus=Doc.TextView(Map((a) => a==null?"-":a.$0.status, invoiceVar().View));
    this.InvAmount=Doc.TextView(Map((a) => {
      if(a==null)return"-";
      else {
        const inv=a.$0;
        return money(inv.amount, inv.currency);
      }
    }, invoiceVar().View));
    this.InvSub=Doc.TextView(Map((a) => {
      if(a==null)return"-";
      else {
        const o=filter((s) =>!IsNullOrWhiteSpace(s), a.$0.subscription);
        return o==null?"-":o.$0;
      }
    }, invoiceVar().View));
    this.BillToName=Doc.TextView(Map((a) => {
      if(a==null)return"-";
      else {
        const m=a.$0.company;
        return m!=null&&m.$==1?!IsNullOrWhiteSpace(m.$0.name)?m.$0.name:"-":"-";
      }
    }, invoiceVar().View));
    this.BillToVat=Doc.TextView(Map((a) => {
      if(a==null)return"";
      else {
        const m=a.$0.company;
        return m!=null&&m.$==1?!IsNullOrWhiteSpace(m.$0.vatin)?"VAT: "+m.$0.vatin:"":"";
      }
    }, invoiceVar().View));
    this.BillToAddr=Doc.TextView(Map((a) => {
      if(a==null)return"-";
      else {
        const m=a.$0.billingAddress;
        if(m==null)return"-";
        else {
          const billing=m.$0;
          return concat(", ", filter_2((s) =>!IsNullOrWhiteSpace(s), ofArray([billing.line1, billing.postal_code, billing.city, billing.country])));
        }
      }
    }, invoiceVar().View));
  }
});
function BillingRecordVar(){
  return _c_14.BillingRecordVar;
}
function CompanyVatinVar(){
  return _c_14.CompanyVatinVar;
}
function CompanyNameVar_1(){
  return _c_14.CompanyNameVar;
}
function BillingCountryView(){
  return _c_14.BillingCountryView;
}
function BillingPostalView(){
  return _c_14.BillingPostalView;
}
function BillingCityView(){
  return _c_14.BillingCityView;
}
function BillingLine1View(){
  return _c_14.BillingLine1View;
}
function BillingVatinView(){
  return _c_14.BillingVatinView;
}
function BillingNameView(){
  return _c_14.BillingNameView;
}
function BtnBillingCancelAttr(){
  return _c_14.BtnBillingCancelAttr;
}
function BtnBillingSaveAttr(){
  return _c_14.BtnBillingSaveAttr;
}
function BtnBillingEditAttr(){
  return _c_14.BtnBillingEditAttr;
}
function BillingEditAttr(){
  return _c_14.BillingEditAttr;
}
function BillingViewAttr(){
  return _c_14.BillingViewAttr;
}
function SetBillingRecord(billingOpt){
  const value=billingOpt==null?New_2(Some(New_4("", "")), New_1("", "", "", "")):billingOpt.$0;
  BillingRecordVar().Set(value);
}
function SetBillingMode(mode){
  BillingModeVar().Set(mode);
}
function CurrentBillingFromForm(){
  return BillingRecordVar().Get();
}
function orDash(s){
  return IsNullOrWhiteSpace(s)?"\u2014":s;
}
function BillingModeVar(){
  return _c_14.BillingModeVar;
}
function New_1(line1, city, postal_code, country){
  return{
    line1:line1, 
    city:city, 
    postal_code:postal_code, 
    country:country
  };
}
function New_2(company, address){
  return{company:company, address:address};
}
function ToastText(){
  return _c_15.ToastText;
}
function ToastAttr(){
  return _c_15.ToastAttr;
}
function SpinnerAttr(){
  return _c_15.SpinnerAttr;
}
function BillingPageAttr(){
  return _c_15.BillingPageAttr;
}
function SubsPageAttr(){
  return _c_15.SubsPageAttr;
}
function CustomerPortalAttr(){
  return _c_15.CustomerPortalAttr;
}
function BillingTabAttr(){
  return _c_15.BillingTabAttr;
}
function SubsTabAttr(){
  return _c_15.SubsTabAttr;
}
function ShowSubsPage(){
  ActivePage().Set(Subs);
}
function ShowBillingPage(){
  ActivePage().Set(Billing);
}
function OpenCustomerPortal(){
  const m=CustomerPortalLinkVar().Get();
  if(m==null)showToast("Customer portal is not available yet.");
  else globalThis.open(m.$0, "_blank");
}
function setLoading(on){
  IsLoading().Set(on);
}
function ActivePage(){
  return _c_15.ActivePage;
}
function showToast(msg){
  const msg_1=IsNullOrWhiteSpace(msg)?"Saved":msg;
  ToastMessage().Set(Some(msg_1));
  setTimeout(() => {
    ToastMessage().Set(null);
  }, 1600);
}
function IsLoading(){
  return _c_15.IsLoading;
}
function ToastMessage(){
  return _c_15.ToastMessage;
}
function InvoicesBody(){
  return _c_16.InvoicesBody;
}
function RefreshInvoices(newInvoices){
  invoicesModel().Set(newInvoices);
}
function invoicesModel(){
  return _c_16.invoicesModel;
}
function invoiceRowV(_2, invoiceV){
  const hrefV=Map((inv) =>"./invoice.html?id="+encodeURIComponent(inv.id)+"&sub="+encodeURIComponent(CurrentSubIdVar().Get()), invoiceV);
  const S=Map((i_1) => i_1.status, invoiceV);
  const A=Map((i_1) => formatMoney(i_1.amount, i_1.currency), invoiceV);
  const D=Map((i_1) => i_1.date, invoiceV);
  const I=Map((i_1) => i_1.id, invoiceV);
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new TextView("invoiceid", I)),this_1);
  const this_3=(this_2.h.push(new TextView("date", D)),this_2);
  const this_4=(this_3.h.push(new TextView("amount", A)),this_3);
  const this_5=(this_4.h.push(new TextView("status", S)),this_4);
  const b=(this_5.h.push(new TextView("href", hrefV)),this_5);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], invoicerow(p[0]));
  let _3=(b.i=i,i);
  return _3.Doc;
}
function invoicesDoc(){
  return _c_16.invoicesDoc;
}
function SeatsBody(){
  return _c_17.SeatsBody;
}
function RefreshSeats(){
  StartImmediate(refreshSeatsAsync(), null);
}
function groupHeaderDoc(subId, expiry, autoRenew){
  const baseBtn="relative inline-flex h-5 w-9 items-center rounded-full border text-xs transition-colors ";
  const baseDot="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ";
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new Text("expiry", expiry)),this_1);
  const this_3=(this_2.h.push(new Text("toggleclasses", autoRenew?baseBtn+"bg-emerald-500 border-emerald-500":baseBtn+"bg-gray-300 border-gray-400 "+"dark:bg-gray-700 dark:border-gray-600")),this_2);
  const t_9=(this_3.h.push(new Text("dotclasses", autoRenew?baseDot+"translate-x-4":baseDot+"translate-x-0")),this_3);
  const b=(t_9.h.push(EventQ2(t_9.k, "toggleautorenew", () => t_9.i, () => {
    toggleAutoRenew(subId, expiry, autoRenew);
  })),t_9);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], seatgrouprow(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
function seatRowDoc(seat){
  const usernameVar=_c_1.Create_1(seat.username);
  const U=unassignButtonAttr(seat);
  const A=assignButtonAttr(seat);
  const S=seatBadge(seat.status);
  const U_1=usernameAttr(seat);
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new Text("seatlabel", "#"+String(seat.seatNo))),this_1);
  const this_3=(this_2.h.push(new VarStr("username", usernameVar)),this_2);
  const this_4=(this_3.h.push(new Attribute("usernameattr", U_1)),this_3);
  const this_5=(this_4.h.push(new Elt("statusbadge", S)),this_4);
  const this_6=(this_5.h.push(new Text("expiry", seat.expiry)),this_5);
  const this_7=(this_6.h.push(new Attribute("assignbuttonattr", A)),this_6);
  const t_9=(this_7.h.push(new Attribute("unassignbuttonattr", U)),this_7);
  const t_10=(t_9.h.push(EventQ2(t_9.k, "assignseat", () => t_9.i, (t_11) => {
    assignSeat(seat.subscriptionId, seat.seatNo, Trim(TemplateHole.Value(t_11.Vars.Hole("username")).Get()).toLowerCase());
  })),t_9);
  const b=(t_10.h.push(EventQ2(t_10.k, "unassignseat", () => t_10.i, () => {
    unassignSeat(seat.subscriptionId, seat.seatNo);
  })),t_10);
  const p=CompleteHoles(b.k, b.h, [["username", 0, null]]);
  const i=new TemplateInstance(p[1], seatrow(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
function seatGroupsDoc(){
  return _c_17.seatGroupsDoc;
}
function refreshSeatsAsync(){
  return Delay(() => Bind_1(GetAllSeats(), (a) => {
    SeatsVar().Set(a);
    return Zero();
  }));
}
function toggleAutoRenew(subId, expiry, currentAutoRenew){
  StartImmediate(Delay(() => {
    setLoading(true);
    return TryFinally(Delay(() => {
      const newAuto=!currentAutoRenew;
      SeatsVar().Set(map_1((s) => s.subscriptionId==subId&&s.expiry==expiry?New_15(s.seatNo, s.username, s.status, s.expiry, newAuto, s.subscriptionId):s, SeatsVar().Get()));
      return Bind_1(SetAutoRenew(subId, currentAutoRenew), (a) => a?(showToast("Updated"),Zero()):Zero());
    }), () => {
      setLoading(false);
    });
  }), null);
}
function usernameAttr(seat){
  return seat.status=="assigned"?Attr.Create("readonly", ""):EmptyAttr();
}
function seatBadge(status){
  return Doc.Element("span", [Attr.Create("class", status=="assigned"?"inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-emerald-300 text-emerald-700 "+"dark:border-emerald-700/40 dark:text-emerald-300":"inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-gray-300 text-gray-600 "+"dark:border-white/10 dark:text-gray-300")], [Doc.TextNode(status)]);
}
function assignButtonAttr(seat){
  return seat.status=="assigned"?Attr.Create("style", "display: none"):EmptyAttr();
}
function unassignButtonAttr(seat){
  return seat.status=="assigned"?EmptyAttr():Attr.Create("style", "display: none");
}
function assignSeat(subId, seatNo, username){
  if(!IsNullOrWhiteSpace(username))StartImmediate(Delay(() => {
    setLoading(true);
    return TryFinally(Delay(() => Bind_1(verifyGitHubUser(username), (a) => a?Bind_1(AssignSeat(subId, seatNo, username), (a_1) => a_1?Bind_1(refreshSeatsAsync(), () => {
      showToast("Updated");
      return Zero();
    }):Zero()):(alertWarning("GitHub user '"+username+"' not found"),Zero()))), () => {
      setLoading(false);
    });
  }), null);
}
function unassignSeat(subId, seatNo){
  StartImmediate(Delay(() => {
    setLoading(true);
    return TryFinally(Delay(() => Bind_1(UnassignSeat(subId, seatNo), (a) => a?Bind_1(refreshSeatsAsync(), () => {
      showToast("Updated");
      return Zero();
    }):Zero())), () => {
      setLoading(false);
    });
  }), null);
}
function verifyGitHubUser(username){
  return Delay(() => Bind_1(AsAsync(globalThis.fetch("https://api.github.com/users/"+username)), (a) => a.ok?Return(true):Return(false)));
}
function ContentAttr(){
  return _c_18.ContentAttr;
}
function LoginPromptAttr(){
  return _c_18.LoginPromptAttr;
}
function LoginClick(){
  Login();
}
function isAuthedV_2(){
  return _c_18.isAuthedV;
}
function GitHubBody(){
  return _c_19.GitHubBody;
}
function GitHubOrgName(){
  return _c_19.GitHubOrgName;
}
function OrgPrefix(){
  return _c_19.OrgPrefix;
}
function HandleRefresh(){
  StartImmediate(Delay(() => {
    setLoading(true);
    return TryFinally(Delay(() => {
      const currentSubId=CurrentSubIdVar().Get();
      return!IsNullOrEmpty(currentSubId)?(RefreshSeats(),Bind_1(GetInvoices_1(currentSubId), (a) => {
        InvoicesVar().Set(a);
        RefreshInvoices(a);
        showToast("Refreshed");
        return Zero();
      })):Zero();
    }), () => {
      setLoading(false);
    });
  }), null);
}
function HandleBillingEdit(){
  SetBillingRecord(BillingVar().Get());
  SetBillingMode(Editing);
}
function HandleBillingSave(){
  const data=CurrentBillingFromForm();
  StartImmediate(Delay(() => {
    setLoading(true);
    return TryFinally(Delay(() => Bind_1(SaveBilling(data), (a) => a?(BillingVar().Set(Some(data)),SetBillingMode(Viewing),showToast("Billing saved"),Zero()):Zero())), () => {
      setLoading(false);
    });
  }), null);
}
function HandleBillingCancel(){
  SetBillingRecord(BillingVar().Get());
  SetBillingMode(Viewing);
}
function requireAuth(){
  return new Promise((_2) => {
    _2(OfAsync(FetchMe()).then((d) => {
      if(d!=null&&d.$==1){
        const user=d.$0;
        UserVar().Set(Some(user));
        return Promise.resolve(user);
      }
      else throw new Error("unauthorized");
    }));
  });
}
let _c_4=Lazy((_i) => class $StartupCode_Success {
  static {
    _c_4=_i(this);
  }
  static DetailsDoc;
  static DetailsAttr;
  static MessageText;
  static messageVar;
  static confirmationVar;
  static ConfirmPath;
  static {
    this.ConfirmPath="/checkout/confirm";
    this.confirmationVar=_c_1.Create_1(null);
    this.messageVar=_c_1.Create_1("Confirming your payment\u2026");
    this.MessageText=Doc.TextView(messageVar().View);
    this.DetailsAttr=DynamicClassPred("hidden", Map((o) => o==null, confirmationVar().View));
    this.DetailsDoc=Doc.BindView((a) => {
      if(a==null)return Doc.Empty;
      else {
        const c=a.$0;
        return Doc.Concat([row("Seats", String(c.seats)), row("Email", c.email), row("Amount", formatAmount(c.amountTotal, c.currency)), row("Status", c.status), row("Subscription", c.subscriptionId)]);
      }
    }, confirmationVar().View);
  }
});
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
function Bind_1(r, f){
  return checkCancel((c) => {
    r(New_7((a) => {
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
  if(!ct.c)c(New_7((a) => {
    if(a.$==1)UncaughtAsyncError(a.$0);
  }, ct));
}
function Zero(){
  return _c_21.Zero;
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
    r(New_7((a) => {
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
  return _c_21.defCTS;
}
function UncaughtAsyncError(e){
  console.log("WebSharper: Uncaught asynchronous exception", e);
}
function TryFinally(run, f){
  return(c) => {
    run(New_7((r) => {
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
function cancel(c){
  c.k(Cc(new OperationCanceledException("New", c.ct)));
}
function scheduler(){
  return _c_21.scheduler;
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
function Parallel(cs){
  const cs_1=ofSeq(cs);
  return length(cs_1)===0?Return([]):(c) => {
    const n=cs_1.length;
    const o=[n];
    const a=new Array(n);
    for(let i=0, _2=n-1;i<=_2;i++)(((i_1) => scheduler().Fork(() => {
      (get(cs_1, i_1))(New_7((_3) => {
        let _4;
        const _5=o[0];
        switch(_5===0?0:_5===1?_3.$==0?1:(_4=_3,3):_3.$==0?2:(_4=_3,3)){
          case 0:
            return null;
          case 1:
            set(a, i_1, _3.$0);
            o[0]=0;
            return c.k(Ok(a));
          case 2:
            set(a, i_1, _3.$0);
            {
              o[0]=_5-1;
              return;
            }
            break;
          case 3:
            o[0]=0;
            return c.k(_4);
        }
      }, c.ct));
    }))(i));
  };
}
function StartWithContinuations(c, s, f, cc, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  if(!ct.c)c(New_7((a) => {
    if(a.$==1)f(a.$0);
    else if(a.$==2)cc(a.$0);
    else s(a.$0);
  }, ct));
}
function Start(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  scheduler().Fork(() => {
    if(!ct.c)c(New_7((a) => {
      if(a.$==1)UncaughtAsyncError(a.$0);
    }, ct));
  });
}
function GetCT(){
  return _c_21.GetCT;
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
function noneCT(){
  return _c_21.noneCT;
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
function GetSubscriptions(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetSubscriptions", []), (o) => Return(o));
}
function GetInvoices(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetInvoices", []), (o) => Return(o));
}
function SetBillingData(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/SetBillingData", [(EncodeJson_BillingData())(_2)]), (o) => Return((DecodeJson_FSharpResult_2())(o)));
}
function SetGitHubOrgName(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/SetGitHubOrgName", [_2]), (o) => Return((DecodeJson_FSharpResult_2())(o)));
}
function GetCustomerPortalLink(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetCustomerPortalLink", []), (o) => Return((DecodeJson_FSharpOption_3())(o)));
}
function GetGitHubOrg(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetGitHubOrg", []), (o) => Return((DecodeJson_FSharpOption_2())(o)));
}
function SetCancellationStatus(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/SetCancellationStatus", [_2]), (o) => Return((DecodeJson_FSharpResult_2())(o)));
}
function AddAssignment(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/AddAssignment", [_2]), (o) => Return((DecodeJson_FSharpResult_2())(o)));
}
function RevokeAssignment(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/RevokeAssignment", [_2]), (o) => Return((DecodeJson_FSharpResult_2())(o)));
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
  return _c_23.EmptyAttr;
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
  let _2=New_16(elem, Flags(tree), arr, oar.length===0?null:Some((el) => {
    iter((f) => {
      f(el);
    }, oar);
  }));
  return _2;
}
function Updates(dyn){
  return MapTreeReduce((x) => x.NChanged, Const(), Map2Unit, dyn.DynNodes);
}
function Empty(e){
  return New_16(e, 0, [], null);
}
function HasExitAnim(attr_1){
  const flag=2;
  return(attr_1.DynFlags&flag)===flag;
}
function GetExitAnim(dyn){
  return GetAnim(dyn, (_2, _3) => _2.NGetExitAnim(_3));
}
function HasEnterAnim(attr_1){
  const flag=1;
  return(attr_1.DynFlags&flag)===flag;
}
function GetEnterAnim(dyn){
  return GetAnim(dyn, (_2, _3) => _2.NGetEnterAnim(_3));
}
function HasChangeAnim(attr_1){
  const flag=4;
  return(attr_1.DynFlags&flag)===flag;
}
function GetChangeAnim(dyn){
  return GetAnim(dyn, (_2, _3) => _2.NGetChangeAnim(_3));
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
  let _2=getClass(element).replace(this_1, (_3, _4, _5) => _4==""||_5==""?"":" ");
  setClass(element, _2);
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
      const _2=a;
      return(_3) => unwrap(_2, _3);
    })(root))(p[0]);
  }
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
function rhtml(){
  return _c_24.rhtml;
}
function wrapMap(){
  return _c_24.wrapMap;
}
function defaultWrap(){
  return _c_24.defaultWrap;
}
function rxhtmlTag(){
  return _c_24.rxhtmlTag;
}
function rtagName(){
  return _c_24.rtagName;
}
function IterSelector(el, selector, f){
  const l=el.querySelectorAll(selector);
  for(let i=0, _2=l.length-1;i<=_2;i++)f(l[i]);
}
function ChildrenArray(element){
  const a=[];
  for(let i=0, _2=element.childNodes.length-1;i<=_2;i++)a.push(element.childNodes[i]);
  return a;
}
function IterSelectorDoc(selector, f){
  const l=globalThis.document.querySelectorAll(selector);
  for(let i=0, _2=l.length-1;i<=_2;i++)f(l[i]);
}
function InsertAt(parent, pos, node){
  let _2;
  if(node.parentNode===parent){
    const m=node.nextSibling;
    let _3=Equals(m, null)?null:m;
    _2=pos===_3;
  }
  else _2=false;
  if(!_2)parent.insertBefore(node, pos);
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
  const _2=sn.s;
  if(_2!=null&&_2.$==0)MarkForever(res, v);
  else MarkReady(res, v);
}
function Map2_1(fn, sn1, sn2){
  const _2=sn1.s;
  const _3=sn2.s;
  if(_2!=null&&_2.$==0)return _3!=null&&_3.$==0?{s:Forever(fn(_2.$0, _3.$0))}:Map2Opt1(fn, _2.$0, sn2);
  else if(_3!=null&&_3.$==0)return Map2Opt2(fn, _3.$0, sn1);
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _4=ValueAndForever(sn1);
        const _5=ValueAndForever(sn2);
        if(_4!=null&&_4.$==1)if(_5!=null&&_5.$==1)if(_4.$0[1]&&_5.$0[1])MarkForever(res, fn(_4.$0[0], _5.$0[0]));
        else MarkReady(res, fn(_4.$0[0], _5.$0[0]));
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
    for(let i=0, _2=length(qcopy)-1;i<=_2;i++){
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
    for(let i=0, _2=length(q)-1;i<=_2;i++)(get(q, i))(v);
  }
  else void 0;
}
function MarkReady(sn, v){
  const m=sn.s;
  if(m!=null&&m.$==3){
    const q2=m.$1;
    const q1=m.$0;
    sn.s=Ready(v, q2);
    for(let i=0, _2=length(q1)-1;i<=_2;i++)(get(q1, i))(v);
  }
  else void 0;
}
function Map3_1(fn, sn1, sn2, sn3){
  const _2=sn1.s;
  const _3=sn2.s;
  const _4=sn3.s;
  if(_2!=null&&_2.$==0)return _3!=null&&_3.$==0?_4!=null&&_4.$==0?{s:Forever(fn(_2.$0, _3.$0, _4.$0))}:Map3Opt1(fn, _2.$0, _3.$0, sn3):_4!=null&&_4.$==0?Map3Opt2(fn, _2.$0, _4.$0, sn2):Map3Opt3(fn, _2.$0, sn2, sn3);
  else if(_3!=null&&_3.$==0)return _4!=null&&_4.$==0?Map3Opt4(fn, _3.$0, _4.$0, sn1):Map3Opt5(fn, _3.$0, sn1, sn3);
  else if(_4!=null&&_4.$==0)return Map3Opt6(fn, _4.$0, sn1, sn2);
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _5=ValueAndForever(sn1);
        const _6=ValueAndForever(sn2);
        const _7=ValueAndForever(sn3);
        if(_5!=null&&_5.$==1)if(_6!=null&&_6.$==1)if(_7!=null&&_7.$==1)if(_5.$0[1]&&_6.$0[1]&&_7.$0[1])MarkForever(res, fn(_5.$0[0], _6.$0[0], _7.$0[0]));
        else MarkReady(res, fn(_5.$0[0], _6.$0[0], _7.$0[0]));
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
  return Map2_1((_2, _3) => fn(x, _2, _3), sn2, sn3);
}
function Map3Opt4(fn, y, z, sn1){
  return Map_1((x) => fn(x, y, z), sn1);
}
function Map3Opt5(fn, y, sn1, sn3){
  return Map2_1((_2, _3) => fn(_2, y, _3), sn1, sn3);
}
function Map3Opt6(fn, z, sn1, sn2){
  return Map2_1((_2, _3) => fn(_2, _3, z), sn1, sn2);
}
function Map2Unit_1(sn1, sn2){
  const _2=sn1.s;
  const _3=sn2.s;
  if(_2!=null&&_2.$==0)return _3!=null&&_3.$==0?{s:Forever(null)}:sn2;
  else if(_3!=null&&_3.$==0)return sn1;
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _4=ValueAndForever(sn1);
        const _5=ValueAndForever(sn2);
        if(_4!=null&&_4.$==1)if(_5!=null&&_5.$==1)if(_4.$0[1]&&_5.$0[1])MarkForever(res, null);
        else MarkReady(res, null);
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    return res;
  }
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
function Join_1(snap){
  const res={s:Waiting([], [])};
  When(snap, (x) => {
    const y=x();
    When(y, (v) => {
      let _2;
      const _3=y.s;
      if(_3!=null&&_3.$==0){
        const _4=snap.s;
        _2=_4!=null&&_4.$==0;
      }
      else _2=false;
      if(_2)MarkForever(res, v);
      else MarkReady(res, v);
    }, res);
  }, res);
  return res;
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
        if(forall_2((s) => {
          const _2=s.s;
          return _2!=null&&_2.$==0;
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
      const _2=o;
      if(typeof _2=="object"&&isIDisposable(_2))o.Dispose();
    }
  }
}
function TreeReduce(defaultValue, reduction, array){
  const l=length(array);
  function loop(off){
    return(len) => {
      let _2;
      switch(len<=0?0:len===1?off>=0&&off<l?1:(_2=len,2):(_2=len,2)){
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
function mapInPlace(f, arr){
  for(let i=0, _2=arr.length-1;i<=_2;i++)arr[i]=f(arr[i]);
  return arr;
}
function MapTreeReduce(mapping, defaultValue, reduction, array){
  const l=length(array);
  function loop(off){
    return(len) => {
      let _2;
      switch(len<=0?0:len===1?off>=0&&off<l?1:(_2=len,2):(_2=len,2)){
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
function TreeDoc(Item){
  return{$:6, $0:Item};
}
function TextNodeDoc(Item){
  return{$:5, $0:Item};
}
function ElemDoc(Item){
  return{$:1, $0:Item};
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
    return Get0(concat_2(GetFieldValues(this.data)));
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
  DAdd(k, v){
    this.add(k, v);
  }
  Clear(){
    this.data=[];
    this.count=0;
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
  constructor(i, _2, _3, _4){
    if(i=="New_5"){
      i="New_6";
      _2=[];
      _3=Equals;
      _4=Hash;
    }
    if(i=="New_6"){
      const init_2=_2;
      const equals=_3;
      const hash=_4;
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
        const _5=e;
        if(typeof _5=="object"&&isIDisposable(_5))e.Dispose();
      }
    }
  }
}
let _c_5=Lazy((_i) => class $StartupCode_SnippetCode {
  static {
    _c_5=_i(this);
  }
  static prism;
  static {
    void 0;
    void 0;
    import("../../../tailwind.css");
    this.prism=prismjs;
    void 0;
    void 0;
    void 0;
    void 0;
    void 0;
  }
});
function AsAsync(p){
  return FromContinuations((ok, ko) => {
    p.then(ok, (err) => ko(unwrapExn(err)));
  });
}
function unwrapExn(x){
  return x instanceof Error?x:new NonStandardPromiseRejectionException(x);
}
function OfAsync(a){
  return new Promise((_2, reject) => {
    StartWithContinuations(a, _2, (a_1) => {
      reject(a_1);
    }, (a_1) => {
      reject(a_1);
    }, null);
  });
}
function Trim(s){
  return s.replace(new RegExp("^\\s+"), "").replace(new RegExp("\\s+$"), "");
}
function IsNullOrWhiteSpace(x){
  return x==null||(new RegExp("^\\s*$")).test(x);
}
function concat(separator, strings){
  return ofSeq(strings).join(separator);
}
function IsNullOrEmpty(x){
  return x==null||x=="";
}
function EndsWith(x, s){
  return x.substring(x.length-s.length)==s;
}
function StartsWith(t_9, s){
  return t_9.substring(0, s.length)==s;
}
function Substring(s, ix, ct){
  return s.substr(ix, ct);
}
function SplitChars(s, sep, opts){
  return Split(s, new RegExp("["+RegexEscape(sep.join(""))+"]"), opts);
}
function forall(f, s){
  return forall_1(f, protect(s));
}
function Split(s, pat, opts){
  return opts===1?filter_1((x) => x!=="", SplitWith(s, pat)):SplitWith(s, pat);
}
function RegexEscape(s){
  return s.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]", "g"), "\\$&");
}
function replicate(count, s){
  return create(count, s).join("");
}
function protect(s){
  return s==null?"":s;
}
function SplitWith(str, pat){
  return str.split(pat);
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
      const _2=e;
      if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
    }
  }
  get Count(){
    return this.count;
  }
  IntersectWith(xs){
    const other=new HashSet("New_4", xs, this.equals, this.hash);
    const all=concat_3(this.data);
    for(let i=0, _2=all.length-1;i<=_2;i++){
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
    for(let i=0, _2=all.length-1;i<=_2;i++)set(arr, i+index, all[i]);
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
  constructor(i, _2, _3, _4){
    if(i=="New_3"){
      i="New_4";
      _2=[];
      _3=Equals;
      _4=Hash;
    }
    let init_2;
    if(i=="New_2"){
      init_2=_2;
      i="New_4";
      _2=init_2;
      _3=Equals;
      _4=Hash;
    }
    if(i=="New_4"){
      const init_3=_2;
      const equals=_3;
      const hash=_4;
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
        const _5=e;
        if(typeof _5=="object"&&isIDisposable(_5))e.Dispose();
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
function iter(p, s){
  const e=Get(s);
  try {
    while(e.MoveNext())
      p(e.Current);
  }
  finally {
    const _2=e;
    if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
  }
}
function sortBy(f, s){
  return delay(() => {
    const array=ofSeq(s);
    sortInPlaceBy(f, array);
    return array;
  });
}
function groupBy(f, s){
  return delay(() => groupBy_1(f, ofSeq(s)));
}
function collect(f, s){
  return concat_1(map(f, s));
}
function delay(f){
  return{GetEnumerator:() => Get(f())};
}
function map(f, s){
  return{GetEnumerator:() => {
    const en=Get(s);
    return new T(null, null, (e) => en.MoveNext()&&(e.c=f(en.Current),true), () => {
      en.Dispose();
    });
  }};
}
function concat_1(ss){
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
function head(s){
  const e=Get(s);
  try {
    return e.MoveNext()?e.Current:insufficient();
  }
  finally {
    const _2=e;
    if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
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
    const _2=e;
    if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
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
function forall_1(p, s){
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
    const _2=e;
    if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
  }
}
function nth(index, s){
  if(index<0)FailWith("negative index requested");
  let pos=-1;
  const e=Get(s);
  try {
    while(pos<index)
      {
        !e.MoveNext()?insufficient():void 0;
        pos=pos+1;
      }
    return e.Current;
  }
  finally {
    const _2=e;
    if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
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
    const _2=e;
    if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
  }
}
function seqEmpty(){
  return FailWith("The input sequence was empty.");
}
function choose(f, arr){
  const q=[];
  for(let i=0, _2=arr.length-1;i<=_2;i++){
    const m=f(arr[i]);
    if(m==null){ }
    else q.push(m.$0);
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
  for(let i=0, _2=arr.length-1;i<=_2;i++)acc=f(acc, arr[i]);
  return acc;
}
function map_1(f, arr){
  const r=new Array(arr.length);
  for(let i=0, _2=arr.length-1;i<=_2;i++)r[i]=f(arr[i]);
  return r;
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
function exists_1(f, x){
  let e=false;
  let i=0;
  const l=length(x);
  while(!e&&i<l)
    if(f(x[i]))e=true;
    else i=i+1;
  return e;
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
      const _2=o;
      if(typeof _2=="object"&&isIDisposable(_2))o.Dispose();
    }
  }
}
function sortInPlaceBy(f, arr){
  mapInPlace_1((t_9) => t_9[0], mapiInPlace((_2, _3) =>[_3, [f(_3), _2]], arr).sort((_2, _3) => Compare(_2[1], _3[1])));
}
function concat_2(xs){
  return Array.prototype.concat.apply([], ofSeq(xs));
}
function findIndex(f, arr){
  const m=tryFindIndex(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
function iter_1(f, arr){
  for(let i=0, _2=arr.length-1;i<=_2;i++)f(arr[i]);
}
function filter_1(f, arr){
  const r=[];
  for(let i=0, _2=arr.length-1;i<=_2;i++)if(f(arr[i]))r.push(arr[i]);
  return r;
}
function collect_1(f, x){
  return Array.prototype.concat.apply([], map_1(f, x));
}
function foldBack(f, arr, zero){
  let acc=zero;
  const len=arr.length;
  for(let i=1, _2=len;i<=_2;i++)acc=f(arr[len-i], acc);
  return acc;
}
function pick(f, arr){
  const m=tryPick(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
function create(size, value){
  const r=new Array(size);
  for(let i=0, _2=size-1;i<=_2;i++)r[i]=value;
  return r;
}
function distinctBy_1(f, a){
  return ofSeq(distinctBy(f, a));
}
function forall_2(f, x){
  let a=true;
  let i=0;
  const l=length(x);
  while(a&&i<l)
    if(f(x[i]))i=i+1;
    else a=false;
  return a;
}
function init_1(size, f){
  if(size<0)FailWith("Negative size given.");
  else null;
  const r=new Array(size);
  for(let i=0, _2=size-1;i<=_2;i++)r[i]=f(i);
  return r;
}
let _c_6=Lazy((_i) => class TemplateInitializer extends Object_1 {
  static {
    _c_6=_i(this);
  }
  static init;
  id;
  vars;
  static initialized;
  static instances;
  static GetOrAddHoleFor(id, holeName, initHole){
    let o;
    const d=_c_6.GetHolesFor(id);
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
    const m=(o=null,[_c_6.initialized.TryGetValue(id, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])return m[1];
    else {
      const d=new Dictionary("New_5");
      _c_6.initialized.set_Item(id, d);
      return d;
    }
  }
  static applyVarHole(el, tpl){
    tpl.ApplyVarHole(el);
  }
  InitInstance(key){
    const d=_c_6.GetHolesFor(key);
    const a=this.vars;
    for(let i_1=0, _2=a.length-1;i_1<=_2;i_1++)((() => {
      let _3;
      const f=get(a, i_1);
      const t_9=f[1];
      const ov=f[2];
      const n=f[0];
      if(!d.ContainsKey(n)){
        if(t_9===0){
          const o=ov==null?null:Some(ov.$0);
          let _4=o==null?"":o.$0;
          let _5=_c_1.Create_1(_4);
          _3=new VarStr(n, _5);
        }
        else if(t_9===1){
          const o_1=ov==null?null:Some(ov.$0);
          let _6=o_1==null?0:o_1.$0;
          let _7=_c_1.Create_1(_6);
          _3=new VarFloatUnchecked(n, _7);
        }
        else if(t_9===2){
          const o_2=ov==null?null:Some(ov.$0);
          let _8=o_2==null?false:o_2.$0;
          let _9=_c_1.Create_1(_8);
          _3=new VarBool(n, _9);
        }
        else if(t_9===3){
          const o_3=ov==null?null:Some(ov.$0);
          let _10=o_3==null?-8640000000000000:o_3.$0;
          let _11=_c_1.Create_1(_10);
          _3=new VarDateTime(n, _11);
        }
        else if(t_9===4){
          const o_4=ov==null?null:Some(ov.$0);
          let _12=o_4==null?[]:o_4.$0;
          let _13=_c_1.Create_1(_12);
          _3=new VarFile(n, _13);
        }
        else if(t_9===5){
          const x=ov==null?null:Some(ov.$0);
          const v=globalThis.document.querySelector("[ws-dom="+n+"]");
          let _14=x==null?v:x.$0;
          let _15=Some(_14);
          let _16=_c_1.Create_1(_15);
          _3=new VarDomElement(n, _16);
        }
        else if(t_9===6){
          const o_5=ov==null?null:Some(ov.$0);
          let _17=o_5==null?[]:o_5.$0;
          let _18=_c_1.Create_1(_17);
          _3=new VarStrList(n, _18);
        }
        else _3=FailWith("Invalid value type");
        return d.set_Item(n, _3);
      }
      else return null;
    })());
    const i=new TemplateInstance({$:0, $0:d}, Doc.Empty);
    _c_6.instances.set_Item(key, i);
    return i;
  }
  $preinit(key){
    const inst=this.InitInstance(key);
    const q=globalThis.document.querySelectorAll("[ws-var^='"+key+"::']");
    for(let i=0, _2=q.length-1;i<=_2;i++){
      const el=q[i];
      const fullName=el.getAttribute("ws-var");
      const hole=inst.Hole(string(fullName, Some(key.length+2), null));
      const hole_1=hole.WithName(fullName);
      GlobalHoles().set_Item(hole_1.Name, hole_1);
      _c_6.applyVarHole(el, hole);
    }
  }
  $init(a){ }
  $postinit(key){
    RunFullDocTemplate([]);
  }
  static {
    _c_6.initialized=new Dictionary("New_5");
    _c_6.instances=new Dictionary("New_5");
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
  get ValueObj(){
    return this.Value;
  }
  ApplyVarHole(el){
    applyTypedVarHole(StringApply(), this.fillWith, el);
  }
  get Value(){
    return this.fillWith;
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
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class VarFloatUnchecked extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new VarFloatUnchecked(n, this.fillWith);
  }
  get ValueObj(){
    return this.Value;
  }
  ApplyVarHole(el){
    applyTypedVarHole(FloatApplyUnchecked(), this.fillWith, el);
  }
  get Value(){
    return this.fillWith;
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
  get ValueObj(){
    return this.Value;
  }
  ApplyVarHole(el){
    applyTypedVarHole(BoolCheckedApply(), this.fillWith, el);
  }
  get Value(){
    return this.fillWith;
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
  get ValueObj(){
    return this.Value;
  }
  ApplyVarHole(el){
    applyTypedVarHole(DateTimeApplyUnchecked(), this.fillWith, el);
  }
  get Value(){
    return this.fillWith;
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
  get ValueObj(){
    return this.Value;
  }
  ApplyVarHole(el){
    applyTypedVarHole(FileApplyUnchecked(), this.fillWith, el);
  }
  get Value(){
    return this.fillWith;
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
  WithName(n){
    return new VarDomElement(n, this.fillWith);
  }
  get Value(){
    return this.fillWith;
  }
  get ValueObj(){
    return this.Value;
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
  get ValueObj(){
    return this.Value;
  }
  ApplyVarHole(el){
    applyTypedVarHole(StringListApply(), this.fillWith, el);
  }
  get Value(){
    return this.fillWith;
  }
  ForTextView(){
    return Some(Map((l) => concat(",", l), this.fillWith.View));
  }
  AddAttribute(addAttr, el){
    (addAttr(el))(StringListValue(this.fillWith));
  }
  get AsChoiceView(){
    return Choice2Of2(Map(String, this.fillWith.View));
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class Exception extends Object_1 { }
function GetOrLoadTemplate(baseName, name, fakeroot, fillWith){
  LoadLocalTemplates("");
  PrepareTemplate(baseName, name, fakeroot);
  return NamedTemplate(baseName, name, fillWith);
}
function PrepareTemplate(baseName, name, fakeroot){
  if(!LoadedTemplateFile(baseName).ContainsKey(name==null?"":name.$0))PrepareTemplateStrict(baseName, name, fakeroot(), null);
}
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
function LoadLocalTemplates(baseName){
  !LocalTemplatesLoaded()?(set_LocalTemplatesLoaded(true),LoadNestedTemplates(globalThis.document.body, "")):void 0;
  LoadedTemplates().set_Item(baseName, LoadedTemplateFile(""));
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
function PrepareTemplateStrict(baseName, name, fakeroot, prepareLocalTemplate){
  const processedHTML5Templates=new HashSet("New_3");
  function recF(recI, _2){
    while(true)
      switch(recI){
        case 0:
          if(_2!==null){
            const next=_2.nextSibling;
            if(Equals(_2.nodeType, Node.TEXT_NODE))convertTextNode(_2);
            else if(Equals(_2.nodeType, Node.ELEMENT_NODE))convertElement(_2);
            _2=next;
          }
          else return null;
          break;
        case 1:
          const name_2=string(_2.nodeName, Some(3), null).toLowerCase();
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
              const t_9=d.Item(instName);
              const instance=t_9.cloneNode(true);
              const usedHoles=new HashSet("New_3");
              const mappings=new Dictionary("New_5");
              const attrs=_2.attributes;
              for(let i=0, _5=attrs.length-1;i<=_5;i++){
                const name_3=attrs.item(i).name.toLowerCase();
                const m_1=attrs.item(i).nodeValue;
                let _3=m_1==""?name_3:m_1.toLowerCase();
                mappings.set_Item(name_3, _3);
                if(!usedHoles.SAdd(name_3))console.warn("Hole mapped twice", name_3);
              }
              for(let i_1=0, _6=_2.childNodes.length-1;i_1<=_6;i_1++){
                const n=_2.childNodes[i_1];
                if(Equals(n.nodeType, Node.ELEMENT_NODE))if(!usedHoles.SAdd(n.nodeName.toLowerCase()))console.warn("Hole filled twice", instName);
              }
              const singleTextFill=_2.childNodes.length===1&&Equals(_2.firstChild.nodeType, Node.TEXT_NODE);
              if(singleTextFill){
                const x=fillTextHole(instance, _2.firstChild.textContent, instName);
                const f=((usedHoles_1) =>(i_2) => usedHoles_1.SAdd(i_2))(usedHoles);
                let _4=((a) =>(o) => {
                  if(o!=null)a(o.$0);
                })((x_1) => {
                  f(x_1);
                });
                _4(x);
              }
              removeHolesExcept(instance, usedHoles);
              if(!singleTextFill){
                for(let i_2=0, _7=_2.childNodes.length-1;i_2<=_7;i_2++){
                  const n_1=_2.childNodes[i_2];
                  if(Equals(n_1.nodeType, Node.ELEMENT_NODE))if(n_1.hasAttributes())fillInstanceAttrs(instance, n_1);
                  else fillDocHole(instance, n_1);
                }
              }
              mapHoles(instance, mappings);
              fill(instance, _2.parentNode, _2);
              _2.parentNode.removeChild(_2);
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
      for(let i=0, _3=holeAttrs.length-1;i<=_3;i++){
        const attrName=get(holeAttrs, i);
        let this_1=new RegExp("\\${"+name_2+"}", "ig");
        let _2=e.getAttribute(attrName).replace(this_1, fillWith.textContent);
        e.setAttribute(attrName, _2);
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
        const _2=a;
        return(_3) => fillHole(_2, _3);
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
            for(let i=1, _2=idTemplates.length-1;i<=_2;i++){
              const n=idTemplates[i];
              if(processedHTML5Templates.Contains(n)){ }
              else {
                PrepareTemplateStrict(baseName, Some(n.getAttribute("id")), n, null);
                processedHTML5Templates.SAdd(n);
              }
            }
            const nameTemplates=el.querySelectorAll("template[name]");
            for(let i_1=1, _3=nameTemplates.length-1;i_1<=_3;i_1++){
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
function RenderedFullDocTemplate(){
  return _c_27.RenderedFullDocTemplate;
}
function ChildrenTemplate(el, fillWith){
  let _2;
  const p=InlineTemplate(el, append(fillWith, GlobalHoles().Values));
  const updates=p[1];
  const docTreeNode=p[0];
  const m=docTreeNode.Els;
  return!Equals(m, null)&&m.length===1&&(get(m, 0)instanceof Node&&(Equals(get(m, 0).nodeType, Node.ELEMENT_NODE)&&(_2=get(m, 0),true)))?Elt_1.TreeNode(docTreeNode, updates):Doc.Mk(TreeDoc(docTreeNode), updates);
}
function set_RenderedFullDocTemplate(_2){
  _c_27.RenderedFullDocTemplate=_2;
}
function LocalTemplatesLoaded(){
  return _c_27.LocalTemplatesLoaded;
}
function set_LocalTemplatesLoaded(_2){
  _c_27.LocalTemplatesLoaded=_2;
}
function LoadNestedTemplates(root, baseName){
  const loadedTpls=LoadedTemplateFile(baseName);
  const rawTpls=new Dictionary("New_5");
  const wsTemplates=root.querySelectorAll("[ws-template]");
  for(let i=0, _2=wsTemplates.length-1;i<=_2;i++){
    const node=wsTemplates[i];
    const name=node.getAttribute("ws-template").toLowerCase();
    node.removeAttribute("ws-template");
    rawTpls.set_Item(name, FakeRootSingle(node));
  }
  const wsChildrenTemplates=root.querySelectorAll("[ws-children-template]");
  for(let i_1=0, _3=wsChildrenTemplates.length-1;i_1<=_3;i_1++){
    const node_1=wsChildrenTemplates[i_1];
    const name_1=node_1.getAttribute("ws-children-template").toLowerCase();
    node_1.removeAttribute("ws-children-template");
    rawTpls.set_Item(name_1, FakeRoot(node_1));
  }
  const html5TemplateBasedTemplates=root.querySelectorAll("template[id]");
  for(let i_2=0, _4=html5TemplateBasedTemplates.length-1;i_2<=_4;i_2++){
    const node_2=html5TemplateBasedTemplates[i_2];
    rawTpls.set_Item(node_2.getAttribute("id").toLowerCase(), FakeRootFromHTMLTemplate(node_2));
  }
  const html5TemplateBasedTemplates_1=root.querySelectorAll("template[name]");
  for(let i_3=0, _5=html5TemplateBasedTemplates_1.length-1;i_3<=_5;i_3++){
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
  return _c_27.LoadedTemplates;
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
  let _2;
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
    const _3=e;
    if(typeof _3=="object"&&isIDisposable(_3))e.Dispose();
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
        addAttr(e_1, OnAfterRender_3(th.Value));
      }
      else if(th instanceof AfterRenderQ){
        e_1.removeAttribute("ws-onafterrender");
        addAttr(e_1, OnAfterRender_3(th.Value));
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
    if(m[0])m[1].AddAttribute((_9) =>(_10) => addAttr(_9, _10), e_1);
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
          const mo=new MutationObserver((_9, mo_1) => {
            iter_1((mr) => {
              mr.removedNodes.forEach(CreateFuncWithArgs((_10) => _10[0]===toWatch&&mr.addedNodes.length!==1?(var_1.SetFinal(null),mo_1.disconnect()):null), null);
            }, _9);
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
    for(let i=0, _9=holeAttrs.length-1;i<=_9;i++)((() => {
      let _10;
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
      const value=foldBack((_11, _12) =>(((t_9) => {
        const textBefore_1=t_9[0];
        const holeName=t_9[1];
        return(t_10) => {
          let o;
          const textAfter=t_10[0];
          const views=t_10[1];
          const m_1=(o=null,[fw.TryGetValue(holeName, {get:() => o, set:(v) => {
            o=v;
          }}), o]);
          const holeContent=m_1[0]?m_1[1].AsChoiceView:Choice1Of2("");
          return holeContent.$==1?[textBefore_1, FSharpList.Cons(textAfter==""?holeContent.$0:Map((s_5) => s_5+textAfter, holeContent.$0), views)]:[textBefore_1+holeContent.$0+textAfter, views];
        };
      })(_11))(_12), res, [finalText, FSharpList.Empty]);
      if(value[1].$==1){
        if(value[1].$1.$==1){
          if(value[1].$1.$1.$==1){
            if(value[1].$1.$1.$1.$==0){
              const s_1=value[0];
              _10=Dynamic(attrName, Map3((_11, _12, _13) => s_1+_11+_12+_13, value[1].$0, value[1].$1.$0, value[1].$1.$1.$0));
            }
            else {
              const s_2=value[0];
              _10=Dynamic(attrName, Map((vs) => s_2+concat("", vs), Sequence(value[1])));
            }
          }
          else {
            const s_3=value[0];
            _10=Dynamic(attrName, Map2((_11, _12) => s_3+_11+_12, value[1].$0, value[1].$1.$0));
          }
        }
        else if(value[0]=="")_10=Dynamic(attrName, value[1].$0);
        else {
          const s_4=value[0];
          _10=Dynamic(attrName, Map((v) => s_4+v, value[1].$0));
        }
      }
      else _10=Attr.Create(attrName, value[0]);
      return addAttr(e_1, _10);
    })());
  });
  let _4=els;
  const _5=afterRender.length==0?Some(() => {
    wsdomHandling();
  }):Some((el_1) => {
    wsdomHandling();
    iter_1((f) => {
      f(el_1);
    }, afterRender);
  });
  const _6=!Equals(els, null)&&els.length===1&&(get(els, 0)instanceof Node&&(get(els, 0)instanceof Element&&(_2=get(els, 0),true)))?Some(_2):null;
  let _7={
    Els:_4, 
    Dirty:true, 
    Holes:holes, 
    Attrs:attrs, 
    Render:_5?_5.$0:void 0, 
    El:_6?_6.$0:void 0
  };
  let _8=DeleteEmptyFields(_7, ["Render", "El"]);
  return[_8, TreeReduce(Const(), Map2Unit, updates)];
}
function GlobalHoles(){
  return _c_27.GlobalHoles;
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
  for(let i=0, _2=content.childNodes.length-1;i<=_2;i++)fakeroot.appendChild(content.childNodes[i].cloneNode(true));
  return fakeroot;
}
function TextHoleRE(){
  return _c_27.TextHoleRE;
}
function foreachNotPreservedwsDOM(selector, f){
  IterSelectorDoc(selector, (p) => {
    if(p.closest("[ws-preserve]")==null)f(p);
  });
}
let _c_7=Lazy((_i) => class $StartupCode_SupportViewsAttrs {
  static {
    _c_7=_i(this);
  }
  static ContactSendButtonText;
  static ContactSendButtonAttr;
  static {
    this.ContactSendButtonAttr=DynamicBool("disabled", Map2((_2, _3) =>!_2||_3, CanSendView(), IsSendingVar().View));
    this.ContactSendButtonText=Map((sending) => sending?"Sending...":"Send", IsSendingVar().View);
  }
});
function Id(){
  set_counter(counter()+1);
  return"uid"+String(counter());
}
function set_counter(_2){
  _c_25.counter=_2;
}
function counter(){
  return _c_25.counter;
}
function Int(){
  set_counter(counter()+1);
  return counter();
}
let _c_8=Lazy((_i) => class $StartupCode_SupportState {
  static {
    _c_8=_i(this);
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
    this.fallbackPro=New_9(Some("Professional"), Some("Assign GitHub usernames after purchase"), Some(New_11(250, "USD")), Some(New_11(2500, "USD")));
    this.fallbackFreelancer=New_9(Some("Freelancer"), Some("Ideal for solo developers"), Some(New_11(30, "USD")), Some(New_11(300, "USD")));
    this.catalogVar=_c_1.Create_1(New_10(fallbackPro(), fallbackFreelancer()));
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
let _c_9=Lazy((_i) => class $StartupCode_SupportViewsPricing {
  static {
    _c_9=_i(this);
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
    this.ProPriceAmount=Map2((_2, _3) => usd(effectiveAmount(fallbackPro(), _2.Pro, _3)), catalogVar().View, intervalVar().View);
    this.FreePriceAmount=Map2((_2, _3) => usd(effectiveAmount(fallbackFreelancer(), _2.Freelancer, _3)), catalogVar().View, intervalVar().View);
    this.ProPriceLabel=Map(intervalProPriceLabel, intervalVar().View);
    this.FreePriceLabel=Map(intervalFreePriceLabel, intervalVar().View);
    this.ProTotalLabel=Map(intervalTotalLabel, intervalVar().View);
    this.FreeTotalLabel=Map(intervalTotalLabel, intervalVar().View);
    this.ProTotalAmount=Map3((_2, _3, _4) => {
      const seats=clampSeats(_4);
      return usd(effectiveAmount(fallbackPro(), _2.Pro, _3)*seats);
    }, catalogVar().View, intervalVar().View, SeatCount());
    this.FreeTotalAmount=Map2((_2, _3) => usd(effectiveAmount(fallbackFreelancer(), _2.Freelancer, _3)), catalogVar().View, intervalVar().View);
    this.ProNote=Map2((_2, _3) => {
      const cur=currencyFor("pro", _2, _3);
      return effectiveDescription("Assign GitHub usernames after purchase", _2.Pro)+". Prices in "+cur+".";
    }, catalogVar().View, intervalVar().View);
    this.FreeNote=Map2((_2, _3) => {
      const cur=currencyFor("freelancer", _2, _3);
      return effectiveDescription("Ideal for solo developers", _2.Freelancer)+". Prices in "+cur+".";
    }, catalogVar().View, intervalVar().View);
  }
});
let Month={$:0};
let Year={$:1};
let _c_10=Lazy((_i) => class $StartupCode_Controller {
  static {
    _c_10=_i(this);
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
let _c_11=Lazy((_i) => class $StartupCode_CheckoutState {
  static {
    _c_11=_i(this);
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
  static backLinkLabel;
  static backLinkHref;
  static ManageSubscriptionUrl;
  static SupportPlansUrl;
  static {
    this.SupportPlansUrl="/support.html#plans";
    this.ManageSubscriptionUrl="/manage-subscription.html";
    this.backLinkHref=_c_1.Create_1("/support.html#plans");
    this.backLinkLabel=_c_1.Create_1("Plans");
    this.plansVar=_c_1.Create_1([]);
    this.CheckoutFormVar=_c_1.Create_1(New_12("pro", Year, "1", "", "", "", "", "hungary", false, "", ""));
    this.SelectedPlanVar=_c_1.Lens(CheckoutFormVar(), (f) => f.plan, (_2, _3) => New_12(_3, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.SelectedIntervalVar=_c_1.Lens(CheckoutFormVar(), (f) => f.interval, (_2, _3) => New_12(_2.plan, _3, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.SeatsTextVar=_c_1.Lens(CheckoutFormVar(), (f) => f.seatsText, (_2, _3) => New_12(_2.plan, _2.interval, _3, _2.email, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.EmailVar=_c_1.Lens(CheckoutFormVar(), (f) => f.email, (_2, _3) => New_12(_2.plan, _2.interval, _2.seatsText, _3, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.StreetVar=_c_1.Lens(CheckoutFormVar(), (f) => f.street, (_2, _3) => New_12(_2.plan, _2.interval, _2.seatsText, _2.email, _3, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.CityVar=_c_1.Lens(CheckoutFormVar(), (f) => f.city, (_2, _3) => New_12(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _3, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.PostalVar=_c_1.Lens(CheckoutFormVar(), (f) => f.postal, (_2, _3) => New_12(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _3, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.CountryVar=_c_1.Lens(CheckoutFormVar(), (f) => f.country, (_2, _3) => New_12(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _3, _2.isCompany, _2.companyName, _2.vatin));
    this.IsCompanyVar=_c_1.Lens(CheckoutFormVar(), (f) => f.isCompany, (_2, _3) => New_12(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _2.country, _3, _2.companyName, _2.vatin));
    this.CompanyNameVar=_c_1.Lens(CheckoutFormVar(), (f) => f.companyName, (_2, _3) => New_12(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _3, _2.vatin));
    this.VatinVar=_c_1.Lens(CheckoutFormVar(), (f) => f.vatin, (_2, _3) => New_12(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _3));
    this.ContinueText=_c_1.Create_1("Continue to payment");
    this.ContinueDisabled=_c_1.Create_1(false);
  }
});
let _c_12=Lazy((_i) => class Attrs {
  static {
    _c_12=_i(this);
  }
  static BackLinkAttr;
  static PaymentSectionAttr;
  static AuthSectionAttr;
  static ContinueTextView;
  static BackLinkLabel;
  static isAuthedV;
  static {
    this.isAuthedV=Map((o) => o!=null, UserView());
    this.BackLinkLabel=Doc.TextView(backLinkLabel().View);
    this.ContinueTextView=ContinueText().View;
    this.AuthSectionAttr=DynamicClassPred("hidden", isAuthedV_1());
    this.PaymentSectionAttr=Dynamic("class", Map((isAuthed) => isAuthed?"":"hidden", isAuthedV_1()));
    this.BackLinkAttr=Attr.Concat([Dynamic("href", backLinkHref().View), Handler("click", () =>(e) => IsNullOrWhiteSpace(globalThis.document.referrer)&&globalThis.history.length>1?(e.preventDefault(),globalThis.history.back()):null)]);
  }
});
let _c_13=Lazy((_i) => class Pricing {
  static {
    _c_13=_i(this);
  }
  static Total;
  static TotalRaw;
  static Taxes;
  static TaxesRaw;
  static Subtotal;
  static SubtotalRaw;
  static VatRate;
  static PriceHint;
  static PlanPriceLine;
  static PlanName;
  static IsPerSeat;
  static CurrentPlan;
  static Seats;
  static {
    this.Seats=Map(parseSeats, SeatsTextVar().View);
    this.CurrentPlan=Map3((_2, _3, _4) => {
      const code=_3.toLowerCase();
      const intervalStr=intervalAsString(_4);
      return tryFind((p) => p.code.toLowerCase()==code&&String(p.interval).toLowerCase()==intervalStr, _2);
    }, plansVar().View, SelectedPlanVar().View, SelectedIntervalVar().View);
    this.IsPerSeat=Map((a) => a==null||a.$0.isPerSeat, CurrentPlan());
    this.PlanName=Map((opt) => {
      let _2;
      return opt!=null&&opt.$==1&&(!IsNullOrWhiteSpace(opt.$0.name)&&(_2=opt.$0,true))?_2.name:SelectedPlanVar().Get()=="freelancer"?"Freelancer":"WebSharper Professional";
    }, CurrentPlan());
    this.PlanPriceLine=Map2((_2, _3) => {
      const o=_2==null?null:Some(_2.$0.unitAmountCents/100);
      let _4=o==null?_3.$==1?2500:250:o.$0;
      let _5=usd(_4);
      let _6=_5+" ";
      let _7=Doc.TextNode(_6);
      let _8=[_7, Doc.Element("span", [Attr.Create("class", "text-base text-gray-600 dark:text-gray-400 font-normal")], [Doc.TextNode("/ "+(_3.$==1?"Year":"Month"))])];
      return Doc.Element("div", [], _8);
    }, CurrentPlan(), SelectedIntervalVar().View);
    this.PriceHint=Map2((_2, _3) => {
      let _4;
      const o=_2==null?null:Some(_2.$0.unitAmountCents/100);
      const price=o==null?_3.$==1?2500:250:o.$0;
      const every=_3.$==1?"year":"month";
      return _2!=null&&_2.$==1&&(_2.$0.isPerSeat&&(_4=_2.$0,true))?((((_5) =>(_6) =>(_7) => _5("Price is "+toSafe(_6)+" per seat per "+toSafe(_7)+"."))((x) => x))(usd(price)))(every):((((_5) =>(_6) =>(_7) => _5("Price is "+toSafe(_6)+" per "+toSafe(_7)+"."))((x) => x))(usd(price)))(every);
    }, CurrentPlan(), SelectedIntervalVar().View);
    this.VatRate=Map3((_2, _3, _4) => {
      const countryIso=toIso2(_2);
      const euVat=dict([["AT", 0.2], ["BE", 0.21], ["BG", 0.2], ["HR", 0.25], ["CY", 0.19], ["CZ", 0.21], ["DK", 0.25], ["EE", 0.22], ["FI", 0.24], ["FR", 0.2], ["DE", 0.19], ["GR", 0.24], ["HU", 0.27], ["IE", 0.23], ["IT", 0.22], ["LV", 0.21], ["LT", 0.21], ["LU", 0.17], ["MT", 0.18], ["NL", 0.21], ["PL", 0.23], ["PT", 0.23], ["RO", 0.19], ["SK", 0.2], ["SI", 0.22], ["ES", 0.21], ["SE", 0.25]]);
      const hasVatId=!IsNullOrWhiteSpace(_4);
      const isEU=euVat.ContainsKey(countryIso);
      return _3?countryIso=="HU"?0.27:isEU&&hasVatId?0:isEU&&!hasVatId?euVat.Item(countryIso):0:isEU?euVat.Item(countryIso):0;
    }, CountryVar().View, IsCompanyVar().View, VatinVar().View);
    this.SubtotalRaw=Map3((_2, _3, _4) => {
      let _5=_3?clampSeats(_4):1;
      const o=_2==null?null:Some(_2.$0.unitAmountCents);
      let _6=o==null?250000:o.$0;
      let _7=_5*_6;
      return _7/100;
    }, CurrentPlan(), IsPerSeat(), Seats());
    this.Subtotal=Map(usd, SubtotalRaw());
    this.TaxesRaw=Map2((_2, _3) => Math.round(_2*_3), SubtotalRaw(), VatRate());
    this.Taxes=Map(usd, TaxesRaw());
    this.TotalRaw=Map2((_2, _3) => _2+_3, SubtotalRaw(), TaxesRaw());
    this.Total=Map(usd, TotalRaw());
  }
});
function startCheckout(payload){
  return Delay(() => {
    const checkoutError=() => {
      RedirectToError(New_6(Some("Checkout failed"), Some("Something went wrong while starting the payment. Please try again."), null));
    };
    return TryWith(Delay(() => {
      let r;
      return Bind_1(AsAsync(globalThis.fetch("https://localhost:8234/checkout/session", (r={},r.method="POST",r.credentials="include",r.headers=header(),r.body=JSON.stringify(payload),r))), (a) =>!a.ok?(checkoutError(),Return(null)):Bind_1(AsAsync(a.json()), (a_1) => Return(Some(a_1))));
    }), () => {
      checkoutError();
      return Return(null);
    });
  });
}
function CreateTextNode(){
  return{
    Text:globalThis.document.createTextNode(""), 
    Dirty:false, 
    Value:""
  };
}
function UpdateTextNode(n, t_9){
  n.Value=t_9;
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
  return New_19(get_Empty_1(), CreateDelimitedElemNode(ldelim, rdelim, EmptyAttr(), doc));
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
  return New_19(get_Empty_1(), CreateElemNode(parent, EmptyAttr(), doc));
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
      else if(doc!=null&&doc.$==6)return foldBack((_2, _3) =>((((parent_1) =>(el) =>(pos_1) => el==null||el.constructor===Object?InsertDoc(parent_1, el, pos_1):InsertNode(parent_1, el, pos_1))(parent))(_2))(_3), doc.$0.Els, pos);
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
    return FromContinuations((_2, _3, _4) => c.apply(null, [_2, _3, _4]));
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
            const t_9=doc.$0;
            return t_9.Dirty||exists_1(hasDirtyChildren, t_9.Holes);
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
        const t_9=doc.$0;
        iter_1((h) => {
          SyncElemNode(false, h);
        }, t_9.Holes);
        iter_1((t_10) => {
          Sync(t_10[0], t_10[1]);
        }, t_9.Attrs);
        return AfterRender(t_9);
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
          const t_9=doc.$0;
          if(t_9.Dirty)t_9.Dirty=false;
          return foldBack((_4, _5) => _4==null||_4.constructor===Object?ins(_4, _5):_4, t_9.Els, pos);
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
  let _2=el.Children;
  const m=GetOptional(el.Delimiters);
  let _3=m!=null&&m.$==1?m.$0[1]:null;
  ins(_2, _3);
}
function New_3(id, date, amount, currency, status, subscription, billingAddress, company){
  return{
    id:id, 
    date:date, 
    amount:amount, 
    currency:currency, 
    status:status, 
    subscription:subscription, 
    billingAddress:billingAddress, 
    company:company
  };
}
function New_4(name, vatin){
  return{name:name, vatin:vatin};
}
function ofArray(arr){
  let r=FSharpList.Empty;
  for(let i=length(arr)-1, _2=0;i>=_2;i--)r=FSharpList.Cons(get(arr, i), r);
  return r;
}
function filter_2(p, x){
  let res;
  let r;
  let l;
  let go;
  if(x.$==0)return x;
  else {
    res=FSharpList.Empty;
    r=res;
    l=x;
    go=true;
    while(go)
      {
        if(p(l.$0)){
          if(res.$==0){
            res=Create_2(FSharpList, {$:1});
            r=res;
          }
          else {
            const t_9=Create_2(FSharpList, {$:1});
            r=(r.$1=t_9,t_9);
          }
          const v=l.$0;
          r.$=1;
          r.$0=v;
        }
        l=l.$1;
        if(l.$==0)go=false;
      }
    if(!(res.$==0))r.$1=FSharpList.Empty;
    return res;
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
function ListSubscriptions(){
  return Delay(() => Bind_1(GetSubscriptions(), (a) => Return(map_1(toSubRecord, a))));
}
function GetInvoices_1(){
  return Delay(() => Bind_1(GetInvoices(), (a) => Return(map_1((i) => New_3(i.title, i.date, i.amount, i.currency, i.status, null, null, null), a))));
}
function SaveBilling(data){
  return Delay(() => {
    const o=data.company;
    let _2=o==null?null:Some(o.$0.name);
    const o_1=data.company;
    let _3=o_1==null?null:Some(o_1.$0.vatin);
    let _4={
      email:"", 
      line1:data.address.line1, 
      city:data.address.city, 
      postalCode:data.address.postal_code, 
      country:data.address.country, 
      companyName:_2, 
      taxId:_3
    };
    let _5=SetBillingData(_4);
    return Bind_1(_5, (a) => {
      alertError(a);
      return Combine(a.$==0?(set_billingCache(Some(data)),Zero()):Zero(), Delay(() => Return(a.$==0)));
    });
  });
}
function toSubRecord(subscription){
  return New_5(String(subscription.subscriptionId), (((((_2) =>(_3) =>(_4) =>(_5) => _2(toSafe(_3)+" ("+String(_4)+" seats) - "+toSafe(_5)))((x) => x))(subscription.planName))(subscription.seats))(subscription.currentPeriodEnd), subscription.planName, subscription.seats, subscription.currentPeriodEnd, subscription.cancelAtPeriodEnd?"canceling":"active");
}
function SetGitHubOrgName_1(name){
  return Delay(() => Bind_1(SetGitHubOrgName(name), (a) => {
    alertError(a);
    return Return(a.$==0);
  }));
}
function set_billingCache(_2){
  _c_26.billingCache=_2;
}
function GetBilling(){
  return Delay(() => billingCache()==null?Bind_1(GetBillingData(), (a) => {
    let _2;
    let value;
    if(a!=null&&a.$==1){
      const data=a.$0;
      const o=data.companyName;
      if(o==null)_2=null;
      else {
        let _3=o.$0;
        const o_1=data.taxId;
        let _4=o_1==null?"":o_1.$0;
        let _5=New_4(_3, _4);
        _2=Some(_5);
      }
      value=New_2(_2, New_1(data.line1, data.city, data.postalCode, data.country));
    }
    else value=New_2(null, New_1("", "", "", ""));
    set_billingCache(Some(value));
    return Return(value);
  }):Return(billingCache().$0));
}
function GetCustomerPortalLink_1(){
  return Delay(() => Bind_1(GetCustomerPortalLink(), (a) => Return(a)));
}
function GetGitHubOrganization(){
  return GetGitHubOrg();
}
function GetAllSeats(){
  return Delay(() => Bind_1(GetSubscriptions(), (a) => Return(collect_1(seatsFromSubscription, a))));
}
function SetAutoRenew(subId, cancelAtPeriodEnd){
  return Delay(() => Bind_1(SetCancellationStatus({subscriptionId:Parse(subId), cancelAtPeriodEnd:cancelAtPeriodEnd}), (a) => {
    alertError(a);
    return Return(a.$==0);
  }));
}
function AssignSeat(subId, _2, username){
  return Delay(() => IsNullOrWhiteSpace(username)?Return(false):Bind_1(AddAssignment({subscriptionId:Parse(subId), githubAssignedName:username}), (a) => {
    alertError(a);
    return Return(a.$==0);
  }));
}
function UnassignSeat(subId, seatNo){
  return Delay(() => Bind_1(GetSubscriptions(), (a) => {
    const maybeSub=tryFind((s) => String(s.subscriptionId)==subId, a);
    if(maybeSub!=null&&maybeSub.$==1){
      const sub=maybeSub.$0;
      const idx=seatNo-1;
      return idx>=0&&idx<length(sub.githubAssignedNames)?Bind_1(RevokeAssignment({subscriptionId:sub.subscriptionId, githubAssignedName:get(sub.githubAssignedNames, idx)}), (a_1) => {
        alertError(a_1);
        return Return(a_1.$==0);
      }):Return(false);
    }
    else return Return(false);
  }));
}
function billingCache(){
  return _c_26.billingCache;
}
function seatsFromSubscription(subscription){
  const assigned=subscription.githubAssignedNames;
  const a=subscription.seats;
  const b=length(assigned);
  const total=Compare(a, b)===1?a:b;
  return ofSeq(delay(() => collect((i) => {
    const common=New_15(i+1, "", "", subscription.currentPeriodEnd, !subscription.cancelAtPeriodEnd, String(subscription.subscriptionId));
    return i<length(assigned)?[New_15(common.seatNo, get(assigned, i), "assigned", common.expiry, common.autoRenew, common.subscriptionId)]:[New_15(common.seatNo, common.username, "available", common.expiry, common.autoRenew, common.subscriptionId)];
  }, range(0, total-1))));
}
function New_5(id, label, plan, totalSeats, renewsAt, status){
  return{
    id:id, 
    label:label, 
    plan:plan, 
    totalSeats:totalSeats, 
    renewsAt:renewsAt, 
    status:status
  };
}
let _c_14=Lazy((_i) => class Billing_1 {
  static {
    _c_14=_i(this);
  }
  static BtnBillingCancelAttr;
  static BtnBillingSaveAttr;
  static BtnBillingEditAttr;
  static BillingEditAttr;
  static BillingViewAttr;
  static BillingCountryView;
  static BillingPostalView;
  static BillingCityView;
  static BillingLine1View;
  static BillingVatinView;
  static BillingNameView;
  static CompanyVatinVar;
  static CompanyNameVar;
  static BillingModeVar;
  static BillingRecordVar;
  static {
    this.BillingRecordVar=_c_1.Create_1(New_2(Some(New_4("", "")), New_1("", "", "", "")));
    this.BillingModeVar=_c_1.Create_1(Viewing);
    this.CompanyNameVar=_c_1.Lens(BillingRecordVar(), (billing) => {
      const m=billing.company;
      return m==null?"":m.$0.name;
    }, (_2, _3) => {
      const m=_2.company;
      let _4=m==null?New_4(_3, ""):New_4(_3, m.$0.vatin);
      let _5=Some(_4);
      return New_2(_5, _2.address);
    });
    this.CompanyVatinVar=_c_1.Lens(BillingRecordVar(), (billing) => {
      const m=billing.company;
      return m==null?"":m.$0.vatin;
    }, (_2, _3) => {
      const m=_2.company;
      let _4=m==null?New_4("", _3):New_4(m.$0.name, _3);
      let _5=Some(_4);
      return New_2(_5, _2.address);
    });
    this.BillingNameView=Doc.TextView(Map((billing) => {
      const m=billing.company;
      return m==null?"\u2014":orDash(m.$0.name);
    }, BillingRecordVar().View));
    this.BillingVatinView=Doc.TextView(Map((billing) => {
      const m=billing.company;
      return m==null?"\u2014":orDash(m.$0.vatin);
    }, BillingRecordVar().View));
    this.BillingLine1View=Doc.TextView(Map((billing) => orDash(billing.address.line1), BillingRecordVar().View));
    this.BillingCityView=Doc.TextView(Map((billing) => orDash(billing.address.city), BillingRecordVar().View));
    this.BillingPostalView=Doc.TextView(Map((billing) => orDash(billing.address.postal_code), BillingRecordVar().View));
    this.BillingCountryView=Doc.TextView(Map((billing) => orDash(billing.address.country), BillingRecordVar().View));
    this.BillingViewAttr=DynamicClassPred("hidden", Map((a) => a.$==1, BillingModeVar().View));
    this.BillingEditAttr=DynamicClassPred("hidden", Map((a) => a.$!=1, BillingModeVar().View));
    this.BtnBillingEditAttr=DynamicClassPred("hidden", Map2((_2, _3) => _2.$==0?_3.address.line1=="":true, BillingModeVar().View, BillingRecordVar().View));
    this.BtnBillingSaveAttr=DynamicClassPred("hidden", Map((a) => a.$!=1, BillingModeVar().View));
    this.BtnBillingCancelAttr=DynamicClassPred("hidden", Map((a) => a.$!=1, BillingModeVar().View));
  }
});
let _c_15=Lazy((_i) => class $StartupCode_Views {
  static {
    _c_15=_i(this);
  }
  static CustomerPortalAttr;
  static ToastText;
  static ToastAttr;
  static SpinnerAttr;
  static BillingTabAttr;
  static SubsTabAttr;
  static BillingPageAttr;
  static SubsPageAttr;
  static ToastMessage;
  static IsLoading;
  static ActivePage;
  static {
    this.ActivePage=_c_1.Create_1(Subs);
    this.IsLoading=_c_1.Create_1(false);
    this.ToastMessage=_c_1.Create_1(null);
    this.SubsPageAttr=DynamicClassPred("hidden", Map((page) => page.$!==0, ActivePage().View));
    this.BillingPageAttr=DynamicClassPred("hidden", Map((page) => page.$!==1, ActivePage().View));
    const isActive=Map((page) => page.$===0, ActivePage().View);
    let _2=Attr.Concat([DynamicClassPred("bg-gray-100", isActive), DynamicClassPred("dark:bg-white/5", isActive)]);
    this.SubsTabAttr=_2;
    const isActive_1=Map((page) => page.$===1, ActivePage().View);
    let _3=Attr.Concat([DynamicClassPred("bg-gray-100", isActive_1), DynamicClassPred("dark:bg-white/5", isActive_1)]);
    this.BillingTabAttr=_3;
    this.SpinnerAttr=DynamicClassPred("hidden", Map((isLoading) =>!isLoading, IsLoading().View));
    this.ToastAttr=DynamicClassPred("hidden", Map((o) => o==null, ToastMessage().View));
    this.ToastText=Doc.TextView(Map((a) => a!=null&&a.$==1?!IsNullOrWhiteSpace(a.$0)?a.$0:"Saved":"Saved", ToastMessage().View));
    this.CustomerPortalAttr=Dynamic("style", Map((a) => a!=null&&a.$==1?"":"display: none", CustomerPortalLinkVar().View));
  }
});
let _c_16=Lazy((_i) => class Invoices {
  static {
    _c_16=_i(this);
  }
  static InvoicesBody;
  static invoicesDoc;
  static invoicesModel;
  static {
    this.invoicesModel=Create((i) => i.id, InvoicesVar().Get());
    this.invoicesDoc=Doc.ConvertSeqBy((i) => i.id, (k) =>(i) => invoiceRowV(k, i), invoicesModel().v);
    this.InvoicesBody=invoicesDoc();
  }
});
let _c_17=Lazy((_i) => class Seats_1 {
  static {
    _c_17=_i(this);
  }
  static SeatsBody;
  static seatGroupsDoc;
  static {
    this.seatGroupsDoc=Doc.EmbedView(Map((seats) => Doc.Concat(collect((_2) => {
      const subId=_2[0];
      const groupSeats=ofSeq(_2[1]);
      if(length(groupSeats)===0)return[];
      else {
        const expiry=get(groupSeats, 0).expiry;
        const autoRenew=get(groupSeats, 0).autoRenew;
        return delay(() => append([groupHeaderDoc(subId, expiry, autoRenew)], delay(() => map(seatRowDoc, groupSeats))));
      }
    }, groupBy((s) => s.subscriptionId, sortBy((s) =>[s.expiry, s.subscriptionId, s.seatNo], seats)))), SeatsVar().View));
    this.SeatsBody=seatGroupsDoc();
  }
});
let _c_18=Lazy((_i) => class $StartupCode_ViewsAuth {
  static {
    _c_18=_i(this);
  }
  static ContentAttr;
  static LoginPromptAttr;
  static isAuthedV;
  static {
    this.isAuthedV=Map((o) => o!=null, UserView());
    this.LoginPromptAttr=DynamicClassPred("hidden", isAuthedV_2());
    this.ContentAttr=DynamicClassPred("hidden", Map((v) =>!v, isAuthedV_2()));
  }
});
let _c_19=Lazy((_i) => class GitHub {
  static {
    _c_19=_i(this);
  }
  static GitHubBody;
  static OrgPrefix;
  static GitHubOrgName;
  static {
    this.GitHubOrgName=_c_1.Create_1("");
    this.OrgPrefix="IntelliFactory-";
    this.GitHubBody=Doc.BindView((orgOpt) => {
      if(orgOpt!=null&&orgOpt.$==1){
        const org=orgOpt.$0;
        const _2=org.name;
        if(org.status=="active"){
          if(_2!=null&&_2.$==1){
            const name=_2.$0;
            const t_9=new ProviderBuilder("New_1");
            const b=(t_9.h.push(EventQ2(t_9.k, "gotogithuborg", () => t_9.i, () => {
              globalThis.open("https://github.com/"+name, "_blank");
            })),t_9);
            const p=CompleteHoles(b.k, b.h, []);
            const i=new TemplateInstance(p[1], githubactive(p[0]));
            let _3=(b.i=i,i);
            return _3.Doc;
          }
          else return Doc.Empty;
        }
        else if(_2!=null&&_2.$==1){
          const name_1=_2.$0;
          const this_1=new ProviderBuilder("New_1");
          const b_1=(this_1.h.push(new Text("githuborgname", name_1)),this_1);
          const p_1=CompleteHoles(b_1.k, b_1.h, []);
          const i_1=new TemplateInstance(p_1[1], githubpending(p_1[0]));
          let _4=(b_1.i=i_1,i_1);
          return _4.Doc;
        }
        else {
          const this_2=new ProviderBuilder("New_1");
          const t_10=(this_2.h.push(new VarStr("githuborgname", GitHubOrgName())),this_2);
          const b_2=(t_10.h.push(EventQ2(t_10.k, "setgithuborgname", () => t_10.i, () => {
            StartImmediate(Delay(() => {
              setLoading(true);
              return TryFinally(Delay(() => {
                const fullOrgName=OrgPrefix()+GitHubOrgName().Get();
                return Bind_1(SetGitHubOrgName_1(fullOrgName), (a) => a?(GitHubOrgVar().Set(Some({name:Some(fullOrgName), status:"pending"})),Zero()):Zero());
              }), () => {
                setLoading(false);
              });
            }), null);
          })),t_10);
          const p_2=CompleteHoles(b_2.k, b_2.h, [["githuborgname", 0, null]]);
          const i_2=new TemplateInstance(p_2[1], githubpendinginput(p_2[0]));
          let _5=(b_2.i=i_2,i_2);
          return _5.Doc;
        }
      }
      else return Doc.Empty;
    }, GitHubOrgVar().View);
  }
});
let Subs={$:0};
let Billing={$:1};
function CustomerPortalLinkVar(){
  return _c_22.CustomerPortalLinkVar;
}
function CurrentSubIdVar(){
  return _c_22.CurrentSubIdVar;
}
function InvoicesVar(){
  return _c_22.InvoicesVar;
}
function BillingVar(){
  return _c_22.BillingVar;
}
function SeatsVar(){
  return _c_22.SeatsVar;
}
function GitHubOrgVar(){
  return _c_22.GitHubOrgVar;
}
function UserVar(){
  return _c_22.UserVar;
}
function formatMoney(amount, currency){
  const amountF=amount/100;
  const m=currency.toLowerCase();
  return m=="usd"?(((_2) =>(_3) => _2("$"+_3.toFixed(2)))((x) => x))(amountF):m=="eur"?(((_2) =>(_3) => _2("\u20ac"+_3.toFixed(2)))((x) => x))(amountF):m=="gbp"?(((_2) =>(_3) => _2("£"+_3.toFixed(2)))((x) => x))(amountF):((((_2) =>(_3) =>(_4) => _2(_3.toFixed(2)+" "+toSafe(_4)))((x) => x))(amountF))(currency);
}
function SubsVar(){
  return _c_22.SubsVar;
}
function StateVar(){
  return _c_22.StateVar;
}
let Editing={$:1};
let Viewing={$:0};
function New_6(Title_1, Message_1, Page){
  return{
    Title:Title_1, 
    Message:Message_1, 
    Page:Page
  };
}
function TryParse(s, r){
  return TryParse_1(s, -2147483648, 2147483647, r);
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
    if(this.isConst)(((_2) => _2("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((s) => {
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
    if(this.isConst)(((_2) => _2("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((s) => {
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
let _c_20=Lazy((_i) => class $StartupCode_AuthClient {
  static {
    _c_20=_i(this);
  }
  static IsFetchingView;
  static IsAuthedView;
  static UserView;
  static isFetchingVar;
  static userVar;
  static API;
  static {
    this.API="https://localhost:8234";
    set_EndPoint("https://localhost:8234");
    this.userVar=_c_1.Create_1(null);
    this.isFetchingVar=_c_1.Create_1(false);
    this.UserView=userVar().View;
    this.IsAuthedView=Map((o) => o!=null, userVar().View);
    this.IsFetchingView=isFetchingVar().View;
  }
});
function New_7(k, ct){
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
function New_8(IsCancellationRequested, Registrations){
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
  let _2;
  const m=sn.s;
  if(m==null||(m!=null&&m.$==2?(_2=m.$1,false):m!=null&&m.$==3?(_2=m.$1,false):true))void 0;
  else {
    sn.s=null;
    for(let i=0, _3=length(_2)-1;i<=_3;i++){
      const o=get(_2, i);
      if(typeof o=="object")(((sn_1) => {
        Obsolete(sn_1);
      })(o));
      else o();
    }
  }
}
class FSharpList {
  static Empty=Create_2(FSharpList, {$:0});
  static Cons(Head, Tail){
    return Create_2(FSharpList, {
      $:1, 
      $0:Head, 
      $1:Tail
    });
  }
  get_Item(x){
    return nth(x, this);
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
let _c_21=Lazy((_i) => class $StartupCode_Concurrency {
  static {
    _c_21=_i(this);
  }
  static GetCT;
  static Zero;
  static defCTS;
  static scheduler;
  static noneCT;
  static {
    this.noneCT=New_8(false, []);
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
    const _2={
      Attr:Attr_1, 
      Children:Children_1, 
      El:El, 
      ElKey:ElKey
    };
    let _3=(SetOptional(_2, "Delimiters", Delimiters),SetOptional(_2, "Render", Render),_2);
    return Create_2(DocElemNode, _3);
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
function New_9(Name, Description, Month_1, Year_1){
  return{
    Name:Name, 
    Description:Description, 
    Month:Month_1, 
    Year:Year_1
  };
}
function New_10(Pro, Freelancer){
  return{Pro:Pro, Freelancer:Freelancer};
}
function New_11(Amount, Currency){
  return{Amount:Amount, Currency:Currency};
}
class attr extends Object_1 { }
function New_12(plan, interval, seatsText, email, street, city, postal, country, isCompany, companyName, vatin){
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
class ReactiveExtensions extends Object_1 { }
function New_13(plan, interval, seats){
  return{
    plan:plan, 
    interval:interval, 
    seats:seats
  };
}
function toSafe(s){
  return s==null?"":s;
}
function New_14(seats, email, interval, planCode, billingAddress, company){
  return{
    seats:seats, 
    email:email, 
    interval:interval, 
    planCode:planCode, 
    billingAddress:billingAddress, 
    company:company
  };
}
class ListModel extends Object_1 {
  key;
  u0076ar;
  storage;
  v;
  it;
  Set(lst){
    this.u0076ar.Set(this.storage.SSet(lst));
    this.ObsoleteAll();
  }
  ObsoleteAll(){
    iter((ksn) => {
      Obsolete(ksn.V);
    }, this.it);
    this.it.Clear();
  }
  GetEnumerator(){
    return Get(this.u0076ar.Get());
  }
  GetEnumerator0(){
    return Get0(this.u0076ar.Get());
  }
  constructor(i, _2, _3, _4){
    let key;
    let storage;
    if(i=="New"){
      key=_2;
      storage=_3;
      i="New_3";
      _2=key;
      _3=_c_1.Create_1(ofSeq(distinctBy(key, storage.SInit())));
      _4=storage;
    }
    if(i=="New_3"){
      const key_1=_2;
      const var_1=_3;
      const storage_1=_4;
      super();
      this.key=key_1;
      this.u0076ar=var_1;
      this.storage=storage_1;
      this.v=Map((x) => x.slice(), this.u0076ar.View);
      this.it=new Dictionary("New_5");
    }
  }
}
function Create(key, init_2){
  return CreateWithStorage(key, InMemory(ofSeq(init_2)));
}
function CreateWithStorage(key, storage){
  return new ListModel("New", key, storage);
}
function New_15(seatNo, username, status, expiry, autoRenew, subscriptionId){
  return{
    seatNo:seatNo, 
    username:username, 
    status:status, 
    expiry:expiry, 
    autoRenew:autoRenew, 
    subscriptionId:subscriptionId
  };
}
let _c_22=Lazy((_i) => class $StartupCode_State {
  static {
    _c_22=_i(this);
  }
  static GitHubOrgVar;
  static CustomerPortalLinkVar;
  static BillingVar;
  static InvoicesVar;
  static SeatsVar;
  static CurrentSubIdVar;
  static SubsVar;
  static UserVar;
  static StateVar;
  static {
    this.StateVar=_c_1.Create_1(New_18(null, [], "", [], [], null));
    this.UserVar=_c_1.Lens(StateVar(), (s) => s.user, (_2, _3) => New_18(_3, _2.subs, _2.currentSubId, _2.seats, _2.invoices, _2.billing));
    this.SubsVar=_c_1.Lens(StateVar(), (s) => s.subs, (_2, _3) => New_18(_2.user, _3, _2.currentSubId, _2.seats, _2.invoices, _2.billing));
    this.CurrentSubIdVar=_c_1.Lens(StateVar(), (s) => s.currentSubId, (_2, _3) => New_18(_2.user, _2.subs, _3, _2.seats, _2.invoices, _2.billing));
    this.SeatsVar=_c_1.Lens(StateVar(), (s) => s.seats, (_2, _3) => New_18(_2.user, _2.subs, _2.currentSubId, _3, _2.invoices, _2.billing));
    this.InvoicesVar=_c_1.Lens(StateVar(), (s) => s.invoices, (_2, _3) => New_18(_2.user, _2.subs, _2.currentSubId, _2.seats, _3, _2.billing));
    this.BillingVar=_c_1.Lens(StateVar(), (s) => s.billing, (_2, _3) => New_18(_2.user, _2.subs, _2.currentSubId, _2.seats, _2.invoices, _3));
    this.CustomerPortalLinkVar=_c_1.Create_1(null);
    this.GitHubOrgVar=_c_1.Create_1(null);
  }
});
function set_EndPoint(_2){
  _c_28.EndPoint=_2;
}
function AjaxProvider(){
  return _c_28.AjaxProvider;
}
function makePayload(data){
  return JSON.stringify(data);
}
function makeHeaders(headers){
  return NewFromSeq(map_1((_2) =>[_2[0], _2[1]], distinctBy_1((t_9) => t_9[0], headers.concat([["content-type", "application/json"]]))));
}
function EndPoint(){
  return _c_28.EndPoint;
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
    const t_9=Date.now();
    let loop=true;
    while(loop)
      if(this.robin.length===0){
        this.idle=true;
        loop=false;
      }
      else {
        (this.robin.shift())();
        Date.now()-t_9>40?(setTimeout(() => {
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
let _c_23=Lazy((_i) => class Client {
  static {
    _c_23=_i(this);
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
    }, (_2) =>(_3) => _3!=null&&_3.$==1?void(_2.checked=_3.$0):null, Map((V) => Some(V), var_1.View)];
    this.StringSet=(el) =>(s_8) => {
      el.value=s_8;
    };
    this.StringGet=(el) => Some(el.value);
    const g=StringGet();
    const s=StringSet();
    this.StringApply=(v) => ApplyValue(g, s, v);
    this.StringListSet=(el) =>(s_8) => {
      const options_=el.options;
      for(let i=0, _2=options_.length-1;i<=_2;i++)((() => {
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
        let _2=m_1!=null&&m_1.$==1&&(o=m_1.$0,true);
        m=[_2, o];
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
      let _2;
      let o;
      const s_8=el.value;
      if(isBlank_1(s_8))_2=(el.checkValidity?el.checkValidity():true)?CheckedInput.Blank(s_8):CheckedInput.Invalid(s_8);
      else {
        const m=(o=0,[TryParse(s_8, {get:() => o, set:(v) => {
          o=v;
        }}), o]);
        _2=m[0]?CheckedInput.Valid(m[1], s_8):CheckedInput.Invalid(s_8);
      }
      return Some(_2);
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
      let _2;
      const s_8=el.value;
      if(isBlank_1(s_8))_2=(el.checkValidity?el.checkValidity():true)?CheckedInput.Blank(s_8):CheckedInput.Invalid(s_8);
      else {
        const i=+s_8;
        _2=isNaN(i)?CheckedInput.Invalid(s_8):CheckedInput.Valid(i, s_8);
      }
      return Some(_2);
    };
    const g_7=FloatGetChecked();
    const s_7=FloatSetChecked();
    this.FloatApplyChecked=(v) => ApplyValue(g_7, s_7, v);
  }
});
function DecodeUnion(t_9, discr, cases){
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
      iter_1((_2) => {
        const from=_2[0];
        const __to__=_2[1];
        const dec=_2[2];
        const kind=_2[3];
        if(from==null){
          const r_1=(dec())(x);
          if(__to__)delete r_1[discr];
          o.$0=r_1;
          return;
        }
        else return kind===0?void(o[from]=(dec())(x[__to__])):kind===1?void(o[from]=x.hasOwnProperty(__to__)?Some((dec())(x[__to__])):null):FailWith("Invalid field option kind");
      }, (get(cases, tag))[1]);
      return t_9===void 0?o:t_9(o);
    }
    else return x;
  };
}
function Id_1(){
  return() =>(x) => x;
}
function EncodeRecord(_2, fields){
  return() =>(x) => {
    const o={};
    iter_1((_3) => {
      const name=_3[0];
      const enc=_3[1];
      const kind=_3[2];
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
function DecodeRecord(t_9, fields){
  return() =>(x) => {
    const o={};
    iter_1((_2) => {
      const name=_2[0];
      const dec=_2[1];
      const kind=_2[2];
      return kind===0?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):FailWith("Missing mandatory field: "+name):kind===1?void(o[name]=x.hasOwnProperty(name)?Some((dec())(x[name])):null):kind===2?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):null:kind===3?x[name]===void 0?void(o[name]=(dec())(x[name])):null:FailWith("Invalid field option kind");
    }, fields);
    return t_9===void 0?o:t_9(o);
  };
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
function New_16(DynElem, DynFlags, DynNodes, OnAfterRender_4){
  const _2={
    DynElem:DynElem, 
    DynFlags:DynFlags, 
    DynNodes:DynNodes
  };
  SetOptional(_2, "OnAfterRender", OnAfterRender_4);
  return _2;
}
function New_17(LeftPx, WidthPx){
  return{LeftPx:LeftPx, WidthPx:WidthPx};
}
class NonStandardPromiseRejectionException extends Error {
  reason;
  constructor(reason){
    super("Promise rejected");
    this.reason=reason;
  }
}
let _c_24=Lazy((_i) => class $StartupCode_DomUtility {
  static {
    _c_24=_i(this);
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
    let _2=Object.fromEntries([["option", [1, "<select multiple='multiple'>", "</select>"]], ["legend", [1, "<fieldset>", "</fieldset>"]], ["area", [1, "<map>", "</map>"]], ["param", [1, "<object>", "</object>"]], ["thead", table], ["tbody", table], ["tfoot", table], ["tr", [2, "<table><tbody>", "</tbody></table>"]], ["col", [2, "<table><colgroup>", "</colgoup></table>"]], ["td", [3, "<table><tbody><tr>", "</tr></tbody></table>"]]]);
    this.wrapMap=_2;
    this.defaultWrap=[0, "", ""];
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
    e.setAttribute("ws-on", concat(" ", filter_1((x) => dontRemove.Contains(get(SplitChars(x, [":"], 1), 1)), SplitChars(e.getAttribute("ws-on"), [" "], 1))));
  });
  foreachNotPreserved(instance, "[ws-attr-holes]", (e) => {
    const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
    for(let i=0, _3=holeAttrs.length-1;i<=_3;i++){
      const attrName=get(holeAttrs, i);
      let this_1=new RegExp(TextHoleRE(), "g");
      let _2=e.getAttribute(attrName).replace(this_1, (_4, _5) => dontRemove.Contains(_5)?_4:"");
      e.setAttribute(attrName, _2);
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
    for(let i=0, _2=fillWith.attributes.length-1;i<=_2;i++){
      const a=fillWith.attributes.item(i);
      if(a.name=="class"&&m.hasAttribute("class"))m.setAttribute("class", m.getAttribute("class")+" "+a.nodeValue);
      else m.setAttribute(a.name, a.nodeValue);
    }
  }
}
function mapHoles(t_9, mappings){
  const run=(attrName) => {
    foreachNotPreserved(t_9, "["+attrName+"]", (e) => {
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
  foreachNotPreserved(t_9, "[ws-on]", (e) => {
    e.setAttribute("ws-on", concat(" ", map_1((x) => {
      let o;
      const a=SplitChars(x, [":"], 1);
      const m=(o=null,[mappings.TryGetValue(get(a, 1), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      return m[0]?get(a, 0)+":"+m[1]:x;
    }, SplitChars(e.getAttribute("ws-on"), [" "], 1))));
  });
  foreachNotPreserved(t_9, "[ws-attr-holes]", (e) => {
    const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
    for(let i=0, _2=holeAttrs.length-1;i<=_2;i++)((() => {
      const attrName=get(holeAttrs, i);
      return e.setAttribute(attrName, fold((_3, _4) => {
        const a=KeyValue(_4);
        return _3.replace(new RegExp("\\${"+a[0]+"}", "ig"), "${"+a[1]+"}");
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
  for(let i=0, _3=attrs.length-1;i<=_3;i++){
    const a=attrs.item(i);
    if(StartsWith(a.nodeName, "ws-on")&&a.nodeName!="ws-onafterrender"&&a.nodeName!="ws-on"){
      toRemove.push(a.nodeName);
      events.push(string(a.nodeName, Some("ws-on".length), null)+":"+a.nodeValue.toLowerCase());
    }
    else if(!StartsWith(a.nodeName, "ws-")&&(new RegExp(TextHoleRE())).test(a.nodeValue)){
      let this_1=new RegExp(TextHoleRE(), "g");
      let _2=a.nodeValue.replace(this_1, (_4, _5) =>"${"+_5.toLowerCase()+"}");
      a.nodeValue=_2;
      holedAttrs.push(a.nodeName);
    }
    else void 0;
  }
  if(!(events.length==0))el.setAttribute("ws-on", concat(" ", events));
  if(!(holedAttrs.length==0))el.setAttribute("ws-attr-holes", concat(" ", holedAttrs));
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
let _c_25=Lazy((_i) => class $StartupCode_Abbrev {
  static {
    _c_25=_i(this);
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
function InMemory(init_2){
  return new ArrayStorage(init_2);
}
function groupBy_1(f, a){
  const d=new Dictionary("New_5");
  const keys=[];
  for(let i=0, _2=length(a)-1;i<=_2;i++){
    const c=a[i];
    const k=f(c);
    if(d.ContainsKey(k))d.Item(k).push(c);
    else {
      keys.push(k);
      d.DAdd(k, [c]);
    }
  }
  mapInPlace_1((k_1) =>[k_1, d.Item(k_1)], keys);
  return keys;
}
function mapiInPlace(f, arr){
  for(let i=0, _2=arr.length-1;i<=_2;i++)arr[i]=f(i, arr[i]);
  return arr;
}
function mapInPlace_1(f, arr){
  for(let i=0, _2=arr.length-1;i<=_2;i++)arr[i]=f(arr[i]);
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
class Text extends TemplateHole {
  name;
  fillWith;
  get Name(){
    return this.name;
  }
  WithName(n){
    return new Text(n, this.fillWith);
  }
  get Value(){
    return this.fillWith;
  }
  get ValueObj(){
    return this.Value;
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
function New_18(user, subs, currentSubId, seats, invoices, billing){
  return{
    user:user, 
    subs:subs, 
    currentSubId:currentSubId, 
    seats:seats, 
    invoices:invoices, 
    billing:billing
  };
}
let _c_26=Lazy((_i) => class $StartupCode_Api {
  static {
    _c_26=_i(this);
  }
  static billingCache;
  static {
    this.billingCache=null;
  }
});
function DateFormatter(date, format){
  const d=new Date(date);
  switch(format){
    case"D":
      return String(longDays().get_Item(d.getDay()))+", "+padLeft(2, String(d.getDate()))+" "+String(longMonths().get_Item(d.getMonth()))+" "+String(d.getFullYear());
    case"d":
      return padLeft(2, String(d.getMonth()+1))+"/"+padLeft(2, String(d.getDate()))+"/"+String(d.getFullYear());
    case"T":
      return padLeft(2, String(d.getHours()))+":"+padLeft(2, String(d.getMinutes()))+":"+padLeft(2, String(d.getSeconds()));
    case"t":
      return padLeft(2, String(d.getHours()))+":"+padLeft(2, String(d.getMinutes()));
    case"o":
    case"O":
      return String(d.getFullYear())+"-"+padLeft(2, String(d.getMonth()+1))+"-"+padLeft(2, String(d.getDate()))+"T"+padLeft(2, String(d.getHours()))+":"+padLeft(2, String(d.getMinutes()))+":"+padLeft(2, String(d.getSeconds()))+"."+padLeft(3, String(d.getMilliseconds()))+dateOffsetString(d);
    default:
      return dateToStringWithCustomFormat(d, format);
  }
}
function longDays(){
  return _c_30.longDays;
}
function padLeft(minLength, x){
  return x.length<minLength?replicate(minLength-x.length, "0")+x:x;
}
function longMonths(){
  return _c_30.longMonths;
}
function dateOffsetString(d){
  const offset=d.getTimezoneOffset()*-60000;
  const offset_1=Math.abs(offset);
  return(offset<0?"-":"+")+padLeft(2, String(toInt(offset_1/3600000)))+":"+padLeft(2, String(toInt(offset_1%3600000/60000)));
}
function dateToStringWithCustomFormat(d, format){
  let cursorPos=0;
  let tokenLength=0;
  let result="";
  const appendToResult=(s) => {
    result=result+s;
  };
  while(cursorPos<format.length)
    ((() => {
      const token=format[cursorPos];
      switch(token){
        case"d":
          tokenLength=parseRepeatToken(format, cursorPos, "d");
          cursorPos=cursorPos+tokenLength;
          switch(tokenLength){
            case 1:
              return appendToResult(String(d.getDate()));
            case 2:
              return appendToResult(padLeft(2, String(d.getDate())));
            case 3:
              return appendToResult(String(shortDays().get_Item(d.getDay())));
            default:
            case 4:
              return appendToResult(String(longDays().get_Item(d.getDay())));
          }
          break;
        case"f":
          tokenLength=parseRepeatToken(format, cursorPos, "f");
          cursorPos=cursorPos+tokenLength;
          switch(tokenLength){
            case 3:
            case 2:
            case 1:
              const precision=toInt(10**(3-tokenLength));
              return appendToResult(padLeft(tokenLength, String(d.getMilliseconds()/precision>>0)));
            case 7:
            case 6:
            case 5:
            case 4:
              return appendToResult(padRight(tokenLength, String(d.getMilliseconds())));
            default:
              return FailWith("Input string was not in a correct format.");
          }
          break;
        case"F":
          tokenLength=parseRepeatToken(format, cursorPos, "F");
          cursorPos=cursorPos+tokenLength;
          switch(tokenLength){
            case 3:
            case 2:
            case 1:
              const precision_1=toInt(10**(3-tokenLength));
              const value=d.getMilliseconds()/precision_1>>0;
              return value!==0?appendToResult(padLeft(tokenLength, String(value))):null;
            case 7:
            case 6:
            case 5:
            case 4:
              const value_1=d.getMilliseconds();
              return value_1!==0?appendToResult(padLeft(3, String(value_1))):null;
            default:
              return FailWith("Input string was not in a correct format.");
          }
          break;
        case"g":
          tokenLength=parseRepeatToken(format, cursorPos, "g");
          cursorPos=cursorPos+tokenLength;
          return appendToResult("A.D.");
        case"h":
          tokenLength=parseRepeatToken(format, cursorPos, "h");
          cursorPos=cursorPos+tokenLength;
          const hours=d.getHours()%12;
          return appendToResult(tokenLength===1||tokenLength===2&&false?hours===0?"12":String(hours):hours===0?"12":padLeft(2, String(hours)));
        case"H":
          tokenLength=parseRepeatToken(format, cursorPos, "H");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(tokenLength===1||tokenLength===2&&false?String(d.getHours()):padLeft(2, String(d.getHours())));
        case"K":
          tokenLength=parseRepeatToken(format, cursorPos, "K");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(replicate(tokenLength, dateOffsetString(d)));
        case"m":
          tokenLength=parseRepeatToken(format, cursorPos, "m");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(tokenLength===1||tokenLength===2&&false?String(d.getMinutes()):padLeft(2, String(d.getMinutes())));
        case"M":
          let _2;
          tokenLength=parseRepeatToken(format, cursorPos, "M");
          cursorPos=cursorPos+tokenLength;
          switch(tokenLength){
            case 1:
              _2=String(d.getMonth()+1);
              break;
            case 2:
              _2=padLeft(2, String(d.getMonth()+1));
              break;
            case 3:
              _2=String(shortMonths().get_Item(d.getMonth()));
              break;
            default:
            case 4:
              _2=String(longMonths().get_Item(d.getMonth()));
              break;
          }
          return appendToResult(_2);
        case"s":
          tokenLength=parseRepeatToken(format, cursorPos, "s");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(tokenLength===1||tokenLength===2&&false?String(d.getSeconds()):padLeft(2, String(d.getSeconds())));
        case"t":
          tokenLength=parseRepeatToken(format, cursorPos, "t");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(tokenLength===1||tokenLength===2&&false?d.getHours()<12?"A":"P":d.getHours()<12?"AM":"PM");
        case"y":
          tokenLength=parseRepeatToken(format, cursorPos, "y");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(tokenLength===1?String(d.getFullYear()%100):tokenLength===2?padLeft(2, String(d.getFullYear()%100)):padLeft(tokenLength, String(d.getFullYear())));
        case"z":
          tokenLength=parseRepeatToken(format, cursorPos, "z");
          cursorPos=cursorPos+tokenLength;
          const utcOffsetText=dateOffsetString(d);
          const sign=Substring(utcOffsetText, 0, 1);
          const hours_1=Substring(utcOffsetText, 1, 2);
          const minutes=Substring(utcOffsetText, 4, 2);
          return appendToResult(tokenLength===1?sign+(StartsWith(hours_1, "0")?hours_1.substring(1):hours_1):tokenLength===2?sign+hours_1:sign+hours_1+":"+minutes);
        case":":
          cursorPos=cursorPos+1;
          return appendToResult(":");
        case"/":
          cursorPos=cursorPos+1;
          return appendToResult("/");
        case"'":
        case"\"":
          const p=parseQuotedString(format, cursorPos);
          cursorPos=cursorPos+p[1];
          return appendToResult(p[0]);
        case"%":
          const nextChar=parseNextChar(format, cursorPos);
          return nextChar!=null&&nextChar.$0!=="%"?(cursorPos=cursorPos+2,appendToResult(dateToStringWithCustomFormat(d, nextChar.$0))):FailWith("Invalid format string");
        case"\\":
          const m=parseNextChar(format, cursorPos);
          if(m==null)return FailWith("Invalid format string");
          else {
            const nextChar2=m.$0;
            cursorPos=cursorPos+2;
            return appendToResult(nextChar2);
          }
          break;
        default:
          appendToResult(token);
          {
            cursorPos=cursorPos+1;
            return;
          }
          break;
      }
    })());
  return result;
}
function parseRepeatToken(format, pos, patternChar){
  let tokenLength=0;
  let internalPos=pos;
  while(internalPos<format.length&&format[internalPos]===patternChar)
    {
      internalPos=internalPos+1;
      tokenLength=tokenLength+1;
    }
  return tokenLength;
}
function shortDays(){
  return _c_30.shortDays;
}
function padRight(minLength, x){
  return x.length<minLength?x+replicate(minLength-x.length, "0"):x;
}
function shortMonths(){
  return _c_30.shortMonths;
}
function parseQuotedString(format, pos){
  const quoteChar=format[pos];
  let result="";
  let foundQuote=false;
  let pos_1=pos;
  let earlyBreak=false;
  while(pos_1<format.length&&!earlyBreak)
    {
      pos_1=pos_1+1;
      const currentChar=format[pos_1];
      if(currentChar===quoteChar){
        foundQuote=true;
        earlyBreak=true;
      }
      else currentChar==="\\"?pos_1<format.length?(pos_1=pos_1+1,result=result+format[pos_1]):FailWith("Invalid string format"):result=result+currentChar;
    }
  if(!foundQuote)FailWith("Invalid string format could not find matching quote for "+String(quoteChar));
  return[result, pos_1-pos+1];
}
function parseNextChar(format, pos){
  return pos>=format.length-1?null:Some(format[pos+1]);
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
          const t_9=now-start;
          anim.Compute(t_9);
          k();
          return t_9<=dur?void requestAnimationFrame((t_10) => {
            (loop(start))(t_10);
          }):ok();
        };
      }
      requestAnimationFrame((t_9) => {
        (loop(t_9))(t_9);
      });
    };
    return FromContinuations((_2, _3, _4) => c.apply(null, [_2, _3, _4]));
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
  return _c_29.BatchUpdatesEnabled;
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
let _c_27=Lazy((_i) => class $StartupCode_Templates {
  static {
    _c_27=_i(this);
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
class Elt_1 extends Doc {
  docNode_1;
  updates_1;
  elt;
  rvUpdates;
  static TreeNode(tree, updates){
    const rvUpdates=Updates_1.Create(updates);
    let _2=TreeDoc(tree);
    const x=map_1((_5) => Updates(_5[1]), tree.Attrs);
    let _3=TreeReduce(Const(), Map2Unit, x);
    let _4=Map2Unit(_3, rvUpdates.v);
    return new Elt_1(_2, _4, get(tree.Els, 0), rvUpdates);
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
let _c_28=Lazy((_i) => class $StartupCode_Remoting {
  static {
    _c_28=_i(this);
  }
  static AjaxProvider;
  static EndPoint;
  static {
    this.EndPoint=globalThis.location.origin;
    this.AjaxProvider=new XhrProvider();
  }
});
class OperationCanceledException extends Error {
  ct;
  constructor(i, _2, _3, _4){
    let ct;
    if(i=="New"){
      ct=_2;
      i="New_1";
      _2="The operation was canceled.";
      _3=null;
      _4=ct;
    }
    if(i=="New_1"){
      const message=_2;
      const inner=_3;
      const ct_1=_4;
      super(message);
      this.inner=inner;
      this.ct=ct_1;
    }
  }
}
function ApplyValue(get_1, set_1, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    const onChange=() => {
      var_1.UpdateMaybe((v) => {
        let _2;
        expectedValue=get_1(el);
        return expectedValue!=null&&expectedValue.$==1&&(!Equals(expectedValue.$0, v)&&(_2=[expectedValue, expectedValue.$0],true))?_2[0]:null;
      });
    };
    el.addEventListener("change", onChange);
    el.addEventListener("input", onChange);
    el.addEventListener("keypress", onChange);
  }, (x) => {
    const _2=set_1(x);
    return(_3) => _3==null?null:_2(_3.$0);
  }, Map((v) => {
    let _2;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_2=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
function StringSet(){
  return _c_23.StringSet;
}
function StringGet(){
  return _c_23.StringGet;
}
function StringListSet(){
  return _c_23.StringListSet;
}
function StringListGet(){
  return _c_23.StringListGet;
}
function DateTimeSetUnchecked(){
  return _c_23.DateTimeSetUnchecked;
}
function DateTimeGetUnchecked(){
  return _c_23.DateTimeGetUnchecked;
}
function FileApplyValue(get_1, set_1, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    el.addEventListener("change", () => {
      var_1.UpdateMaybe((v) => {
        let _2;
        expectedValue=get_1(el);
        return expectedValue!=null&&expectedValue.$==1&&(expectedValue.$0!==v&&(_2=[expectedValue, expectedValue.$0],true))?_2[0]:null;
      });
    });
  }, (x) => {
    const _2=set_1(x);
    return(_3) => _3==null?null:_2(_3.$0);
  }, Map((v) => {
    let _2;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_2=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
function FileSetUnchecked(){
  return _c_23.FileSetUnchecked;
}
function FileGetUnchecked(){
  return _c_23.FileGetUnchecked;
}
function IntSetUnchecked(){
  return _c_23.IntSetUnchecked;
}
function IntGetUnchecked(){
  return _c_23.IntGetUnchecked;
}
function IntSetChecked(){
  return _c_23.IntSetChecked;
}
function IntGetChecked(){
  return _c_23.IntGetChecked;
}
function FloatSetUnchecked(){
  return _c_23.FloatSetUnchecked;
}
function FloatGetUnchecked(){
  return _c_23.FloatGetUnchecked;
}
function FloatSetChecked(){
  return _c_23.FloatSetChecked;
}
function FloatGetChecked(){
  return _c_23.FloatGetChecked;
}
function StringApply(){
  return _c_23.StringApply;
}
function FloatApplyUnchecked(){
  return _c_23.FloatApplyUnchecked;
}
function BoolCheckedApply(){
  return _c_23.BoolCheckedApply;
}
function DateTimeApplyUnchecked(){
  return _c_23.DateTimeApplyUnchecked;
}
function FileApplyUnchecked(){
  return _c_23.FileApplyUnchecked;
}
function StringListApply(){
  return _c_23.StringListApply;
}
function isBlank_1(s){
  return forall(IsWhiteSpace, s);
}
class CheckedInput {
  get Input(){
    return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
  static Blank(inputText){
    return Create_2(CheckedInput, {$:2, $0:inputText});
  }
  static Invalid(inputText){
    return Create_2(CheckedInput, {$:1, $0:inputText});
  }
  static Valid(value, inputText){
    return Create_2(CheckedInput, {
      $:0, 
      $0:value, 
      $1:inputText
    });
  }
  $;
  $0;
  $1;
}
class ArrayStorage extends Object_1 {
  init;
  SSet(coll){
    return ofSeq(coll);
  }
  SInit(){
    return this.init;
  }
  constructor(init_2){
    super();
    this.init=init_2;
  }
}
function New_19(PreviousNodes, Top){
  return{PreviousNodes:PreviousNodes, Top:Top};
}
function get_Empty_1(){
  return NodeSet(new HashSet("New_3"));
}
function FindAll(doc){
  const q=[];
  function recF(recI, _2){
    while(true)
      switch(recI){
        case 0:
          if(_2!=null&&_2.$==0){
            const b=_2.$1;
            const a=_2.$0;
            recF(0, a);
            _2=b;
          }
          else if(_2!=null&&_2.$==1){
            const el=_2.$0;
            _2=el;
            recI=1;
          }
          else if(_2!=null&&_2.$==2){
            const em=_2.$0;
            _2=em.Current;
          }
          else if(_2!=null&&_2.$==6){
            const x=_2.$0.Holes;
            return(((a_1) =>(a_2) => {
              iter_1(a_1, a_2);
            })(loopEN))(x);
          }
          else return null;
          break;
        case 1:
          q.push(_2);
          _2=_2.Children;
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
  return _c_31.UseAnimations;
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
    return Def(dur, (t_9) => {
      iter_1((anim) => {
        anim.Compute(t_9);
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
  const last=Create_1(() => anim.Compute(anim.Duration));
  return{Compute:(t_9) => t_9>=dur?last.f():comp(t_9), Duration:nextDuration};
}
let _c_29=Lazy((_i) => class Proxy {
  static {
    _c_29=_i(this);
  }
  static BatchUpdatesEnabled;
  static {
    this.BatchUpdatesEnabled=true;
  }
});
function concat_3(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push.apply(r, o[k_1]);
  return r;
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
  get ValueObj(){
    return this.Value;
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
  get ValueObj(){
    return this.Value;
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
    return Create_2(Updates_1, {
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
function IsWhiteSpace(c){
  return c.match(new RegExp("\\s"))!==null;
}
function TryParse_2(s){
  const d=Date.parse(s);
  return isNaN(d)?null:Some(d);
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
let _c_30=Lazy((_i) => class Pervasives {
  static {
    _c_30=_i(this);
  }
  static longMonths;
  static shortMonths;
  static longDays;
  static shortDays;
  static {
    this.shortDays=ofArray(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
    this.longDays=ofArray(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
    this.shortMonths=ofArray(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
    this.longMonths=ofArray(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
  }
});
let _c_31=Lazy((_i) => class $StartupCode_Animation {
  static {
    _c_31=_i(this);
  }
  static UseAnimations;
  static CubicInOut;
  static {
    this.CubicInOut=Easing.Custom((t_9) => {
      const t2=t_9*t_9;
      return 3*t2-2*(t2*t_9);
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
  return _c_32.Empty;
}
class KeyNotFoundException extends Error {
  constructor(i, _2){
    if(i=="New"){
      i="New_1";
      _2="The given key was not present in the dictionary.";
    }
    if(i=="New_1"){
      const message=_2;
      super(message);
    }
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
function applyTypedVarHole(bind, v, el){
  const p=bind(v);
  p[0](el);
  Sink(p[1](el), p[2]);
}
class ArgumentException extends Error {
  constructor(i, _2){
    if(i=="New_2"){
      const message=_2;
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
    let _2=elem.childNodes.length;
    const o=elem.childNodes;
    let _3=init_1(_2, (i) => o[i]);
    return DomNodes(_3);
  }
}
function Except_2(a, a_1){
  const excluded=a.$0;
  return DomNodes(filter_1((n) => forall_2((k) =>!(n===k), excluded), a_1.$0));
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
class FormatException extends Error {
  constructor(i, _2){
    if(i=="New_1"){
      const message=_2;
      super(message);
    }
  }
}
function Create_1(f){
  return New_20(false, f, forceLazy);
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
let _c_32=Lazy((_i) => class $StartupCode_AppendList {
  static {
    _c_32=_i(this);
  }
  static Empty;
  static {
    this.Empty={$:0};
  }
});
function New_20(created, evalOrVal, force){
  return{
    c:created, 
    v:evalOrVal, 
    f:force
  };
}
