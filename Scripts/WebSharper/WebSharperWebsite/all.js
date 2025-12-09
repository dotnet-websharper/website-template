export { default as Runtime } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Lazy, MarkResizable, SetOptional, Create as Create_2, GetOptional, CreateFuncWithArgs, DeleteEmptyFields } from "../WebSharper.Core.JavaScript/Runtime.js"
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
export function Home$121$31(){
  return() => {
    Init("ws-template");
    Init_1();
    Init_2();
    InitTabs();
  };
}
export function Home$129$33(){
  return(e) => {
    CopyFromClosest(e);
  };
}
export function Home$130$28(){
  return(e) => {
    OnTabClick(e.Event);
  };
}
export function Features$137$31(){
  return() => {
    Init("ws-template");
    Init_1();
    Init_2();
    InitTabs();
  };
}
export function Features$145$33(){
  return(e) => {
    CopyFromClosest(e);
  };
}
export function Features$146$28(){
  return(e) => {
    OnTabClick(e.Event);
  };
}
export function Download$153$33(){
  return(e) => {
    CopyFromClosest(e);
  };
}
export function Warp$160$31(){
  return() => {
    Init_2();
    InitTabs();
  };
}
export function Layout(){
  Init_1();
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
  const t_1=new ProviderBuilder("New_1");
  const t_2=(t_1.h.push(EventQ2(t_1.k, "togglemenu", () => t_1.i, () => {
    ToggleMenu();
  })),t_1);
  const t_3=(t_2.h.push(EventQ2(t_2.k, "toggletheme", () => t_2.i, () => {
    Toggle();
  })),t_2);
  const t_4=(t_3.h.push(EventQ2(t_3.k, "onkeydown", () => t_3.i, (e) => {
    CloseOnEscape(e);
  })),t_3);
  const t_5=(t_4.h.push(EventQ2(t_4.k, "onstoppropagation", () => t_4.i, (e) => {
    StopPropagation(e);
  })),t_4);
  const t_6=(t_5.h.push(EventQ2(t_5.k, "closeonbackgroundclick", () => t_5.i, (_2) => {
    CloseOnBackgroundClick(_2);
  })),t_5);
  const t_7=(t_6.h.push(EventQ2(t_6.k, "accountbtnclick", () => t_6.i, (_2) => {
    AccountBtnClick(_2);
  })),t_6);
  const t_8=(t_7.h.push(EventQ2(t_7.k, "accountbtnkeydown", () => t_7.i, () => { })),t_7);
  const t_9=(t_8.h.push(EventQ2(t_8.k, "login", () => t_8.i, () => {
    Login();
  })),t_8);
  const this_1=(t_9.h.push(EventQ2(t_9.k, "logout", () => t_9.i, (_2) => {
    Logout(_2);
  })),t_9);
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
  const t_1=(this_3.h.push(new Elt("errormessage", E)),this_3);
  const t_2=(t_1.h.push(EventQ2(t_1.k, "onretry", () => t_1.i, () => {
    OnRetry();
  })),t_1);
  const b=(t_2.h.push(EventQ2(t_2.k, "onback", () => t_2.i, () => {
    OnBack();
  })),t_2);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], content_4(p[0]));
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
  const i=new TemplateInstance(p[1], content_3(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
export function MyAccount(){
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
  const i=new TemplateInstance(p[1], content_2(p[0]));
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
class Object_1 {
  Equals(obj){
    return this===obj;
  }
  GetHashCode(){
    return -1;
  }
}
let _c=Lazy((_i) => class TemplateInitializer extends Object_1 {
  static {
    _c=_i(this);
  }
  static init;
  id;
  vars;
  static initialized;
  static instances;
  static Create(vars){
    return new TemplateInitializer("", vars);
  }
  static GetInstance(key){
    return _c.instances.Item(key);
  }
  static applyVarHole(el, tpl){
    tpl.ApplyVarHole(el);
  }
  InitInstance(key){
    const d=_c.GetHolesFor(key);
    const a=this.vars;
    for(let i_1=0, _2=a.length-1;i_1<=_2;i_1++)((() => {
      let _3;
      const f=get(a, i_1);
      const t_1=f[1];
      const ov=f[2];
      const n=f[0];
      if(!d.ContainsKey(n)){
        if(t_1===0){
          const o=ov==null?null:Some(ov.$0);
          let _4=o==null?"":o.$0;
          let _5=_c_2.Create_1(_4);
          _3=new VarStr(n, _5);
        }
        else if(t_1===1){
          const o_1=ov==null?null:Some(ov.$0);
          let _6=o_1==null?0:o_1.$0;
          let _7=_c_2.Create_1(_6);
          _3=new VarFloatUnchecked(n, _7);
        }
        else if(t_1===2){
          const o_2=ov==null?null:Some(ov.$0);
          let _8=o_2==null?false:o_2.$0;
          let _9=_c_2.Create_1(_8);
          _3=new VarBool(n, _9);
        }
        else if(t_1===3){
          const o_3=ov==null?null:Some(ov.$0);
          let _10=o_3==null?-8640000000000000:o_3.$0;
          let _11=_c_2.Create_1(_10);
          _3=new VarDateTime(n, _11);
        }
        else if(t_1===4){
          const o_4=ov==null?null:Some(ov.$0);
          let _12=o_4==null?[]:o_4.$0;
          let _13=_c_2.Create_1(_12);
          _3=new VarFile(n, _13);
        }
        else if(t_1===5){
          const x=ov==null?null:Some(ov.$0);
          const v=globalThis.document.querySelector("[ws-dom="+n+"]");
          let _14=x==null?v:x.$0;
          let _15=Some(_14);
          let _16=_c_2.Create_1(_15);
          _3=new VarDomElement(n, _16);
        }
        else if(t_1===6){
          const o_5=ov==null?null:Some(ov.$0);
          let _17=o_5==null?[]:o_5.$0;
          let _18=_c_2.Create_1(_17);
          _3=new VarStrList(n, _18);
        }
        else _3=FailWith("Invalid kind for template Var type: "+String(t_1));
        return d.set_Item(n, _3);
      }
      else return null;
    })());
    const i=new TemplateInstance({$:0, $0:d}, Doc.Empty);
    _c.instances.set_Item(key, i);
    return i;
  }
  static GetOrAddHoleFor(id, holeName, initHole){
    let o;
    const d=_c.GetHolesFor(id);
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
    const m=(o=null,[_c.initialized.TryGetValue(id, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])return m[1];
    else {
      const d=new Dictionary("New_5");
      _c.initialized.set_Item(id, d);
      return d;
    }
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
      _c.applyVarHole(el, hole);
    }
  }
  $init(a){ }
  $postinit(key){
    RunFullDocTemplate([]);
  }
  constructor(id, vars){
    super();
    this.id=id;
    this.vars=vars;
  }
  static {
    _c.initialized=new Dictionary("New_5");
    _c.instances=new Dictionary("New_5");
  }
});
export{_c}
export function EventQ2Client(key, el, f){
  return(ev) => {
    const i=_c.GetInstance(key);
    i.SetAnchorRoot(el);
    f({
      Vars:i, 
      Anchors:i, 
      Target:el, 
      Event:ev
    });
  };
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
function Init(containerId){
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
function Init_1(){
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
  return _c_6.prism;
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
  return New_18((c=tab.getBoundingClientRect().left-container.getBoundingClientRect().left,String(c))+"px", (c_1=tab.getBoundingClientRect().width,String(c_1))+"px");
}
function applyIndicatorPos(indicator, pos){
  indicator.style.left=pos.LeftPx;
  indicator.style.width=pos.WidthPx;
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
  return _c_1.AccountHeaderText;
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
  return _c_1.isOpen;
}
function avatarSrcV(){
  return _c_1.avatarSrcV;
}
function hasAvatarV(){
  return _c_1.hasAvatarV;
}
function isLoading(){
  return _c_1.isLoading;
}
function showAsFlex(showV){
  return Attr.Concat([DynamicClassPred("hidden", Map((v) =>!v, showV)), DynamicClassPred("flex", showV)]);
}
function isAuthedV(){
  return _c_1.isAuthedV;
}
function userV(){
  return _c_1.userV;
}
function displayNameV(){
  return _c_1.displayNameV;
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
      const r=ty===0?_c.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _4=o==null?"":o.$0;
        let _5=_c_2.Create_1(_4);
        return new VarStr(name, _5);
      }):ty===1?_c.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _4=o==null?0:o.$0;
        let _5=_c_2.Create_1(_4);
        return new VarFloatUnchecked(name, _5);
      }):ty===2?_c.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _4=o==null?false:o.$0;
        let _5=_c_2.Create_1(_4);
        return new VarBool(name, _5);
      }):ty===3?_c.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _4=o==null?-8640000000000000:o.$0;
        let _5=_c_2.Create_1(_4);
        return new VarDateTime(name, _5);
      }):ty===4?_c.GetOrAddHoleFor(key, name, () => new VarFile(name, _c_2.Create_1([]))):ty===5?_c.GetOrAddHoleFor(key, name, () => new VarDomElement(name, _c_2.Create_1(Some(globalThis.document.querySelector("[ws-dom="+name+"]"))))):ty===6?_c.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _4=o==null?[]:o.$0;
        let _5=_c_2.Create_1(_4);
        return new VarStrList(name, _5);
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
  return _c_12.IsAuthedView;
}
function BuildStartUrlWithReturn(returnUrl){
  return"https://api.websharper.io/auth/github/start?returnUrl="+encodeURIComponent(returnUrl);
}
function UserView(){
  return _c_12.UserView;
}
function userVar(){
  return _c_12.userVar;
}
function isFetchingVar(){
  return _c_12.isFetchingVar;
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
    return Doc.Mk(TextDoc(node), Map((t_1) => {
      UpdateTextNode(node, t_1);
    }, txt));
  }
  static Concat(xs){
    return TreeReduce(Doc.Empty, Doc.Append, ofSeqNonCopying(xs));
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
  static BindView(f, view){
    return Doc.EmbedView(Map(f, view));
  }
  static RunInPlace(childrenOnly, parent, doc){
    const st=CreateRunState(parent, doc.docNode);
    Sink(get_UseAnimations()||BatchUpdatesEnabled()?StartProcessor(PerformAnimatedUpdate(childrenOnly, st, doc.docNode)):() => {
      PerformSyncUpdate(childrenOnly, st, doc.docNode);
    }, doc.updates);
  }
  static RunBetween(ldelim, rdelim, doc){
    LinkPrevElement(rdelim, doc.docNode);
    const st=CreateDelimitedRunState(ldelim, rdelim, doc.docNode);
    Sink(get_UseAnimations()||BatchUpdatesEnabled()?StartProcessor(PerformAnimatedUpdate(false, st, doc.docNode)):() => {
      PerformSyncUpdate(false, st, doc.docNode);
    }, doc.updates);
  }
  static Element(name, attr_1, children){
    const a=Attr.Concat(attr_1);
    const c=Doc.Concat(children);
    return Elt_1.New(globalThis.document.createElement(name), a, c);
  }
  static ConvertSeqBy(key, render, view){
    const a=render;
    let _2=MapSeqCachedViewBy(key, (_3, _4) =>(a(_3))(_4), view);
    return Doc.Flatten(_2);
  }
  static Input(attr_1, var_1){
    return Doc.InputInternal("input", () => append(attr_1, [Value(var_1)]));
  }
  static Flatten(view){
    return Doc.EmbedView(Map((x) => Doc.Concat(x), view));
  }
  static InputInternal(elemTy, attr_1){
    const el=globalThis.document.createElement(elemTy);
    return Elt_1.New(el, Attr.Concat(attr_1(el)), Doc.Empty);
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
  const t_1=(this_18.h.push(new VarStr("seatcount", SeatCountText())),this_18);
  const t_2=(t_1.h.push(EventQ2(t_1.k, "onbillmonth", () => t_1.i, (_3) => {
    OnBillMonth(_3);
  })),t_1);
  const t_3=(t_2.h.push(EventQ2(t_2.k, "onbillyear", () => t_2.i, (_3) => {
    OnBillYear(_3);
  })),t_2);
  const t_4=(t_3.h.push(EventQ2(t_3.k, "onseatminus", () => t_3.i, (e) => {
    OnSeatMinus(e);
  })),t_3);
  const this_19=(t_4.h.push(EventQ2(t_4.k, "onseatplus", () => t_4.i, (_3) => {
    OnSeatPlus(_3);
  })),t_4);
  const this_20=(this_19.h.push(new VarStr("contactsubjectvar", _c_2.Lens(ContactFormVar(), (_3) => _3.subject, (_3, _4) => New(_4, _3.message, _3.email, _3.name, _3.country)))),this_19);
  const this_21=(this_20.h.push(new VarStr("contactmessagevar", _c_2.Lens(ContactFormVar(), (_3) => _3.message, (_3, _4) => New(_3.subject, _4, _3.email, _3.name, _3.country)))),this_20);
  const this_22=(this_21.h.push(new VarStr("contactemailvar", _c_2.Lens(ContactFormVar(), (_3) => _3.email, (_3, _4) => New(_3.subject, _3.message, _4, _3.name, _3.country)))),this_21);
  const this_23=(this_22.h.push(new VarStr("contactnamevar", _c_2.Lens(ContactFormVar(), (_3) => _3.name, (_3, _4) => New(_3.subject, _3.message, _3.email, _4, _3.country)))),this_22);
  const this_24=(this_23.h.push(new VarStr("contactcountryvar", _c_2.Lens(ContactFormVar(), (_3) => _3.country, (_3, _4) => New(_3.subject, _3.message, _3.email, _3.name, _4)))),this_23);
  const this_25=(this_24.h.push(new Attribute("contactsendbuttonattr", ContactSendButtonAttr())),this_24);
  const t_5=(this_25.h.push(new TextView("contactsendbuttontext", ContactSendButtonText())),this_25);
  const b=(t_5.h.push(EventQ2(t_5.k, "oncontactsendclick", () => t_5.i, (e) => {
    OnContactSendClick(e);
  })),t_5);
  const p=CompleteHoles(b.k, b.h, [["seatcount", 0, Some("1")], ["contactsubjectvar", 0, Some("WebSharper support")], ["contactmessagevar", 0, null], ["contactemailvar", 0, null], ["contactnamevar", 0, null], ["contactcountryvar", 0, Some("United States")]]);
  const i=new TemplateInstance(p[1], content(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
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
  const R=Doc.EmbedView(Map2((_3, _4) => {
    if(_3){
      const b_1=new ProviderBuilder("New_1");
      const p_1=CompleteHoles(b_1.k, b_1.h, []);
      const i_1=new TemplateInstance(p_1[1], rightskeleton(p_1[0]));
      let _5=(b_1.i=i_1,i_1);
      return _5.Doc;
    }
    else if(!_4){
      const t_3=new ProviderBuilder("New_1");
      const b_2=(t_3.h.push(EventQ2(t_3.k, "ongithublogin", () => t_3.i, () => {
        Login();
      })),t_3);
      const p_2=CompleteHoles(b_2.k, b_2.h, []);
      const i_2=new TemplateInstance(p_2[1], authform(p_2[0]));
      let _6=(b_2.i=i_2,i_2);
      return _6.Doc;
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
      const t_4=(this_28.h.push(new Elt("continuetext", C)),this_28);
      const b_3=(t_4.h.push(EventQ2(t_4.k, "oncontinueclick", () => t_4.i, () => {
        OnContinueClick();
      })),t_4);
      const p_3=CompleteHoles(b_3.k, b_3.h, [["email", 0, null], ["street", 0, null], ["city", 0, null], ["postal", 0, null], ["country", 0, null], ["iscompany", 2, null], ["companyname", 0, null], ["vatin", 0, null]]);
      const i_3=new TemplateInstance(p_3[1], paymentform(p_3[0]));
      let _7=(b_3.i=i_3,i_3);
      return _7.Doc;
    }
  }, IsLoading().View, IsAuthedView()));
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new AfterRenderQ("onafterrender", "", () => {
    OnAfterRender();
  })),this_1);
  const this_3=(this_2.h.push(new Attribute("backlinkattr", BackLinkAttr())),this_2);
  const this_4=(this_3.h.push(new Elt("rightsidecontent", R)),this_3);
  const this_5=(this_4.h.push(new Attribute("seatselectorattr", S_1)),this_4);
  const t_1=(this_5.h.push(new VarStr("seatstext", SeatsTextVar())),this_5);
  const t_2=(t_1.h.push(EventQ2(t_1.k, "onseatminus", () => t_1.i, () => {
    OnSeatMinus_1();
  })),t_1);
  const this_6=(t_2.h.push(EventQ2(t_2.k, "onseatplus", () => t_2.i, () => {
    OnSeatPlus_1();
  })),t_2);
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
  let _2=(b.i=i,i);
  return _2.Doc;
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
  return _c_13.IsLoading;
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
  let _2=(b.i=i,i);
  return _2.Doc;
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
  return _c_3.Title;
}
function Message(){
  return _c_3.Message;
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
  return _c_3.isAuthErrorVar;
}
function getPrevious(searchParams){
  const _2=searchParams.get("from");
  const _3=searchParams.get("page");
  const _4=sameOriginReferer();
  return!IsNullOrWhiteSpace(_2)?_2:!IsNullOrWhiteSpace(_3)?_3:_4!=null&&_4.$==1?_4.$0:"/";
}
function previousVar(){
  return _c_3.previousVar;
}
function titleVar(){
  return _c_3.titleVar;
}
function getMessageTxt(searchParams, codeParam){
  const friendly=searchParams.get("message");
  return!IsNullOrWhiteSpace(friendly)?friendly:!IsNullOrWhiteSpace(codeParam)?messageForCode(codeParam):"An unexpected error occurred. Please try again.";
}
function msgVar(){
  return _c_3.msgVar;
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
function content_4(h){
  return h?GetOrLoadTemplate("error", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        <div class=\"min-h-screen grid place-items-center px-6 py-16\" ws-onafterrender=\"OnAfterRender\">\r\n            <section class=\"w-full max-w-3xl\">\r\n                <div class=\"rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 md:p-12 shadow-sm shadow-gray-950/5\">\r\n                    <div class=\"flex items-start gap-5\">\r\n                        <div class=\"h-14 w-14 rounded-full grid place-items-center bg-red-50 text-red-600 dark:bg-red-900/20\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" viewbox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\r\n                                <path d=\"M12 9v4m0 4h.01M10.29 3.86a2 2 0 0 1 3.42 0l8.49 14.73A2 2 0 0 1 20.49 22H3.51a2 2 0 0 1-1.71-3.41L10.29 3.86z\"></path>\r\n                            </svg>\r\n                        </div>\r\n                        <div class=\"min-w-0\">\r\n                            <h1 id=\"title\" class=\"text-gray-800 dark:text-white text-3xl font-bold tracking-tight\" ws-hole=\"ErrorTitle\">\r\n                                Something went wrong\r\n                            </h1>\r\n                            <p id=\"msg\" class=\"mt-2 text-base text-gray-600 dark:text-gray-400\" ws-hole=\"ErrorMessage\">\r\n                                An unexpected error occurred. Please try again.\r\n                            </p>\r\n                            <p id=\"details\" class=\"hidden mt-2 text-xs text-gray-500 dark:text-gray-500\"></p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"mt-8 flex flex-wrap gap-3\">\r\n                        <button id=\"retry\" class=\"h-11 px-5 rounded-xl bg-gray-950 text-white dark:bg-white dark:text-gray-950 border border-gray-950 dark:border-gray-800\" ws-onclick=\"OnRetry\">\r\n                            Try again\r\n                        </button>\r\n                        <a id=\"back\" class=\"h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white cursor-pointer\" ws-onclick=\"OnBack\">\r\n                            Go back\r\n                        </a>\r\n                        <a href=\"./\" class=\"h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white\">\r\n                            Home\r\n                        </a>\r\n                    </div>\r\n\r\n                    <p class=\"mt-6 text-sm text-gray-600 dark:text-gray-400\">\r\n                        If this keeps happening, please try again later. No changes were made to your account.\r\n                    </p>\r\n                </div>\r\n            </section>\r\n        </div>\r\n    "), h):PrepareTemplate("error", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        <div class=\"min-h-screen grid place-items-center px-6 py-16\" ws-onafterrender=\"OnAfterRender\">\r\n            <section class=\"w-full max-w-3xl\">\r\n                <div class=\"rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 md:p-12 shadow-sm shadow-gray-950/5\">\r\n                    <div class=\"flex items-start gap-5\">\r\n                        <div class=\"h-14 w-14 rounded-full grid place-items-center bg-red-50 text-red-600 dark:bg-red-900/20\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" viewbox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\r\n                                <path d=\"M12 9v4m0 4h.01M10.29 3.86a2 2 0 0 1 3.42 0l8.49 14.73A2 2 0 0 1 20.49 22H3.51a2 2 0 0 1-1.71-3.41L10.29 3.86z\"></path>\r\n                            </svg>\r\n                        </div>\r\n                        <div class=\"min-w-0\">\r\n                            <h1 id=\"title\" class=\"text-gray-800 dark:text-white text-3xl font-bold tracking-tight\" ws-hole=\"ErrorTitle\">\r\n                                Something went wrong\r\n                            </h1>\r\n                            <p id=\"msg\" class=\"mt-2 text-base text-gray-600 dark:text-gray-400\" ws-hole=\"ErrorMessage\">\r\n                                An unexpected error occurred. Please try again.\r\n                            </p>\r\n                            <p id=\"details\" class=\"hidden mt-2 text-xs text-gray-500 dark:text-gray-500\"></p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"mt-8 flex flex-wrap gap-3\">\r\n                        <button id=\"retry\" class=\"h-11 px-5 rounded-xl bg-gray-950 text-white dark:bg-white dark:text-gray-950 border border-gray-950 dark:border-gray-800\" ws-onclick=\"OnRetry\">\r\n                            Try again\r\n                        </button>\r\n                        <a id=\"back\" class=\"h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white cursor-pointer\" ws-onclick=\"OnBack\">\r\n                            Go back\r\n                        </a>\r\n                        <a href=\"./\" class=\"h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white\">\r\n                            Home\r\n                        </a>\r\n                    </div>\r\n\r\n                    <p class=\"mt-6 text-sm text-gray-600 dark:text-gray-400\">\r\n                        If this keeps happening, please try again later. No changes were made to your account.\r\n                    </p>\r\n                </div>\r\n            </section>\r\n        </div>\r\n    "));
}
function content_3(h){
  return h?GetOrLoadTemplate("invoice", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        <div class=\"mx-auto max-w-3xl p-6 text-gray-600 dark:text-white\" ws-onafterrender=\"OnAfterRender\">\r\n            <div class=\"mb-6 flex items-center justify-between\">\r\n                <h1 class=\"text-xl font-bold\">\r\n                    Invoice <span ws-hole=\"InvId\">-</span>\r\n                </h1>\r\n                <a href=\"./account#subs\" class=\"rounded-md border px-3 py-2 text-sm border-gray-300 dark:border-white/20\">Back</a>\r\n            </div>\r\n\r\n            <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800 space-y-3\">\r\n                <div class=\"grid grid-cols-2 gap-4\">\r\n                    <div>\r\n                        <div class=\"text-sm text-gray-600 dark:text-gray-400\">Date</div>\r\n                        <div ws-hole=\"InvDate\" class=\"font-medium\">-</div>\r\n                    </div>\r\n                    <div>\r\n                        <div class=\"text-sm text-gray-600 dark:text-gray-400\">Status</div>\r\n                        <div ws-hole=\"InvStatus\" class=\"font-medium capitalize\">-</div>\r\n                    </div>\r\n                    <div>\r\n                        <div class=\"text-sm text-gray-600 dark:text-gray-400\">Amount</div>\r\n                        <div ws-hole=\"InvAmount\" class=\"font-medium\">-</div>\r\n                    </div>\r\n                    <div>\r\n                        <div class=\"text-sm text-gray-600 dark:text-gray-400\">Subscription</div>\r\n                        <div ws-hole=\"InvSub\" class=\"font-medium\">-</div>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"border-gray-200 dark:border-white/10\">\r\n                <div class=\"text-sm\">\r\n                    <div class=\"text-gray-600 dark:text-gray-400\">Bill to</div>\r\n                    <div ws-hole=\"BillToName\">-</div>\r\n                    <div ws-hole=\"BillToAddr\" class=\"text-gray-600 dark:text-gray-400\">-</div>\r\n                    <div ws-hole=\"BillToVat\" class=\"text-gray-600 dark:text-gray-400\">-</div>\r\n                </div>\r\n                <!-- Add line items if you expose them -->\r\n                <div id=\"lineItems\" class=\"mt-4\"></div>\r\n            </section>\r\n        </div>\r\n    "), h):PrepareTemplate("invoice", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        <div class=\"mx-auto max-w-3xl p-6 text-gray-600 dark:text-white\" ws-onafterrender=\"OnAfterRender\">\r\n            <div class=\"mb-6 flex items-center justify-between\">\r\n                <h1 class=\"text-xl font-bold\">\r\n                    Invoice <span ws-hole=\"InvId\">-</span>\r\n                </h1>\r\n                <a href=\"./account#subs\" class=\"rounded-md border px-3 py-2 text-sm border-gray-300 dark:border-white/20\">Back</a>\r\n            </div>\r\n\r\n            <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800 space-y-3\">\r\n                <div class=\"grid grid-cols-2 gap-4\">\r\n                    <div>\r\n                        <div class=\"text-sm text-gray-600 dark:text-gray-400\">Date</div>\r\n                        <div ws-hole=\"InvDate\" class=\"font-medium\">-</div>\r\n                    </div>\r\n                    <div>\r\n                        <div class=\"text-sm text-gray-600 dark:text-gray-400\">Status</div>\r\n                        <div ws-hole=\"InvStatus\" class=\"font-medium capitalize\">-</div>\r\n                    </div>\r\n                    <div>\r\n                        <div class=\"text-sm text-gray-600 dark:text-gray-400\">Amount</div>\r\n                        <div ws-hole=\"InvAmount\" class=\"font-medium\">-</div>\r\n                    </div>\r\n                    <div>\r\n                        <div class=\"text-sm text-gray-600 dark:text-gray-400\">Subscription</div>\r\n                        <div ws-hole=\"InvSub\" class=\"font-medium\">-</div>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"border-gray-200 dark:border-white/10\">\r\n                <div class=\"text-sm\">\r\n                    <div class=\"text-gray-600 dark:text-gray-400\">Bill to</div>\r\n                    <div ws-hole=\"BillToName\">-</div>\r\n                    <div ws-hole=\"BillToAddr\" class=\"text-gray-600 dark:text-gray-400\">-</div>\r\n                    <div ws-hole=\"BillToVat\" class=\"text-gray-600 dark:text-gray-400\">-</div>\r\n                </div>\r\n                <!-- Add line items if you expose them -->\r\n                <div id=\"lineItems\" class=\"mt-4\"></div>\r\n            </section>\r\n        </div>\r\n    "));
}
function content_2(h){
  return h?GetOrLoadTemplate("success", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        <div class=\"max-w-xl mx-auto px-6 py-16 text-center\" ws-onafterrender=\"OnAfterRender\">\r\n            <h1 class=\"text-3xl font-bold text-gray-950 dark:text-white\">Thanks! \ud83c\udf89</h1>\r\n\r\n            <p id=\"wsMsg\" ws-hole=\"MessageText\" class=\"mt-3 text-gray-600 dark:text-gray-400\">\r\n                Confirming your payment\u2026\r\n            </p>\r\n\r\n            <div id=\"wsDetails\" class=\"mt-6 text-md text-gray-700 dark:text-gray-300 space-y-4\" ws-attr=\"DetailsAttr\" ws-hole=\"DetailsDoc\">\r\n            </div>\r\n\r\n            <a href=\"./account\" class=\"mt-8 inline-flex items-center justify-center rounded-xl h-10 px-4 bg-gray-950 text-white dark:bg-white dark:text-gray-950\">\r\n                My account\r\n            </a>\r\n        </div>\r\n    "), h):PrepareTemplate("success", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        <div class=\"max-w-xl mx-auto px-6 py-16 text-center\" ws-onafterrender=\"OnAfterRender\">\r\n            <h1 class=\"text-3xl font-bold text-gray-950 dark:text-white\">Thanks! \ud83c\udf89</h1>\r\n\r\n            <p id=\"wsMsg\" ws-hole=\"MessageText\" class=\"mt-3 text-gray-600 dark:text-gray-400\">\r\n                Confirming your payment\u2026\r\n            </p>\r\n\r\n            <div id=\"wsDetails\" class=\"mt-6 text-md text-gray-700 dark:text-gray-300 space-y-4\" ws-attr=\"DetailsAttr\" ws-hole=\"DetailsDoc\">\r\n            </div>\r\n\r\n            <a href=\"./account\" class=\"mt-8 inline-flex items-center justify-center rounded-xl h-10 px-4 bg-gray-950 text-white dark:bg-white dark:text-gray-950\">\r\n                My account\r\n            </a>\r\n        </div>\r\n    "));
}
function content(h){
  return h?GetOrLoadTemplate("support", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        <div class=\"space-y-20\" ws-onafterrender=\"OnAfterRender\">\r\n            <!-- Hero / Banner -->\r\n            <section class=\"pt-28 sm:pt-32\">\r\n                <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <div class=\"grid items-center gap-8 md:grid-cols-12\">\r\n                        <div class=\"md:col-span-7 text-center md:text-left\">\r\n                            <h1 class=\"font-bold tracking-tight text-gray-950 dark:text-white text-4xl sm:text-5xl\">\r\n                                WebSharper Expert Support\r\n                            </h1>\r\n                            <p class=\"mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 max-w-2xl md:mx-0 mx-auto\">\r\n                                Our experienced WebSharper support team is available to help you make the right decisions for your development project, and can save you hundreds of hours when important and difficult questions arise.\r\n                            </p>\r\n\r\n                            <!-- Chips -->\r\n                            <div class=\"mt-4 flex flex-wrap justify-center md:justify-start gap-2\">\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    Email & web support\r\n                                </span>\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    First response: 4h-2d\r\n                                </span>\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    Mentoring & training available\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Visual -->\r\n                        <div class=\"md:col-span-5\">\r\n                            <figure class=\"rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-900\">\r\n                                <img src=\"./Assets/images/slay.png\" alt=\"WebSharper support: experts reviewing code and architecture\" class=\"w-full h-auto\">\r\n                            </figure>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <section class=\"scroll-my-16\">\r\n                <div class=\"mx-2 md:mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <div class=\"rounded-3xl overflow-hidden border dark:border-gray-800\">\r\n                        <div class=\"py-12 lg:py-16 lg:px-16 border-b dark:border-gray-800\">\r\n                            <h2 class=\"font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                                Quick, practical help from the people who build WebSharper\r\n                            </h2>\r\n                            <p class=\"mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                                Get senior guidance on architecture, performance, reactive UI, and integrations plus hands-on fixes when you need them.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div class=\"lg:px-16\">\r\n                            <!-- Visual / proof -->\r\n                            <div class=\"lg:col-span-5 lg:-mr-10 py-12 md:py-16\">\r\n                                <div class=\"relative\">\r\n                                    <div class=\"absolute translate-y-1/2 mx-auto blur-3xl inset-0 rounded-t-full bg-brand-primary/20 dark:bg-brand-primary/20\"></div>\r\n                                    <figure class=\"relative rounded-2xl overflow-hidden border bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-sm w-1/2 mx-auto\">\r\n\r\n                                        <img src=\"./Assets/images/slay.png\" alt=\"Support walkthrough: issue context, guidance, and fix\" class=\"w-full h-auto\">\r\n                                    </figure>\r\n                                    <!-- short 15\ufffd20s looped video instead of static image -->\r\n                                    <!--\r\n                                    <video class=\"relative mt-4 w-full rounded-2xl border border-gray-200 dark:border-gray-800\" autoplay muted loop playsinline poster=\"./Assets/images/support-video-poster.png\">\r\n                                        <source src=\"./videos/support-teaser.mp4\" type=\"video/mp4\">\r\n                                    </video>\r\n                                    -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <!-- Support value props -->\r\n            <section class=\"mt-12\">\r\n                <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <ul class=\"grid gap-4 md:grid-cols-3\">\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7 9l5 3.5L17 9\"></path><path d=\"M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z\"></path></g></svg>\r\n                                <span>Email and web support</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Email us your support queries, architectural or best practice questions, or post them to our dedicated support site.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0\"></path><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z\" clip-rule=\"evenodd\"></path></svg>\r\n                                <span>Fast response time</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Receive the first response to your queries from within 4 hours up to 2 days, depending on your selected support plan..\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96m0 0v288\"></path></svg>\r\n                                <span>Mentoring and training</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Pick a Start-up or Enterprise plan and jumpstart your team's productivity with our online WebSharper training and mentoring.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M7 3a2 2 0 0 1 4 0h1.5A1.5 1.5 0 0 1 14 4.5V7h-1a1 1 0 0 0 0 2h1v2.5a1.5 1.5 0 0 1-1.5 1.5H11a2 2 0 0 1-4 0H5.5A1.5 1.5 0 0 1 4 11.5V10a2 2 0 0 1 0-4V4.5A1.5 1.5 0 0 1 5.5 3zm2-1a1 1 0 0 0-1 1v1H5.5a.5.5 0 0 0-.5.5V7H4a1 1 0 0 0 0 2h1v2.5a.5.5 0 0 0 .5.5H8v1a1 1 0 0 0 2 0v-1h2.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 0-4V4.5a.5.5 0 0 0-.5-.5H10V3a1 1 0 0 0-1-1\"></path></svg>\r\n                                <span>Extensions support</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Working heavily with WebSharper extensions? Get the help you need with any issues you encounter in these extensions.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9\"></path></svg>\r\n                                <span>Architectural review</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Next to support questions, we can also help you decide on the best architecture for your project, or give best practice guidelines for your team.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M19 15v-3.062A3.938 3.938 0 0 0 15.063 8H8.936A3.938 3.938 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z\"></path><path d=\"M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1\"></path><path stroke-linecap=\"round\" d=\"M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15\"></path></g></svg>\r\n                                <span>Priority bugfixes</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Your support ticket jumps to the front of our priority queue and becomes the first to fix. Get the most timely help when you need it most.\r\n                            </p>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </section>\r\n\r\n        <section id=\"plans\" class=\"scroll-mt-20 scroll-smooth\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <h2 class=\"text-center font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                    Choose your plan\r\n                </h2>\r\n                <p class=\"text-center mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                    Monthly or yearly billing, per-seat for teams or a freelancer option.\r\n                </p>\r\n\r\n                    <!-- Billing period toggle -->\r\n                    <div class=\"mx-auto mt-6 flex w-full max-w-xs items-center justify-center rounded-xl border border-gray-200 bg-white p-1\r\n                                dark:bg-gray-950 dark:border-gray-800\">\r\n                        <button ws-onclick=\"OnBillMonth\" ws-attr=\"BillMonthAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 text flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"false\" aria-pressed=\"false\">\r\n                            Per month\r\n                        </button>\r\n                        <button ws-onclick=\"OnBillYear\" ws-attr=\"BillYearAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"true\" aria-pressed=\"true\">\r\n                            Per year\r\n                        </button>\r\n                    </div>\r\n\r\n                    <!-- Plans grid -->\r\n                    <div class=\"mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2\">\r\n                        <!-- Professional (per seat) -->\r\n                        <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\" data-price-month=\"250\" data-price-year=\"2500\">\r\n                            <div class=\"flex items-start justify-between gap-4\">\r\n                                <div>\r\n                                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                    <div ws-hole=\"ProName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                        Professional\r\n                                    </div>\r\n                                    <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                        <span ws-hole=\"ProPriceAmount\">$2,500</span>\r\n                                        <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"ProPriceLabel\">\r\n                                            / seat / year\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Seat selector -->\r\n                                <div class=\"flex items-center gap-2\">\r\n                                    <button ws-onclick=\"OnSeatMinus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Decrease seats\" type=\"button\">\r\n                                        -\r\n                                    </button>\r\n                                    <input type=\"text\" ws-var=\"SeatCount\" inputmode=\"numeric\" pattern=\"[0-9]*\" min=\"1\" step=\"1\" value=\"1\" class=\"w-20 text-center rounded-xl border border-gray-300 bg-transparent dark:border-white/20 text-gray-900 dark:text-white h-10\" aria-label=\"Seat count\">\r\n                                    <button ws-onclick=\"OnSeatPlus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Increase seats\" type=\"button\">\r\n                                        +\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Total -->\r\n                            <div class=\"mt-4 flex items-center justify-between\">\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"ProTotalLabel\">\r\n                                    Total (yearly)\r\n                                </div>\r\n                                <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"ProTotalAmount\">\r\n                                    $2,500\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- CTA -->\r\n                            <a ws-attr=\"ProCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                                <span class=\"relative text-sm\">Continue to checkout</span>\r\n                            </a>\r\n\r\n                            <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"ProNote\">\r\n                                Assign GitHub usernames after purchase. Prices in USD.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <!-- Freelancer (1 seat) -->\r\n                        <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\">\r\n                            <div class=\"flex items-start justify-between gap-4\">\r\n                                <div>\r\n                                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                    <div ws-hole=\"FreeName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                        Freelancer\r\n                                    </div>\r\n                                    <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                        <span ws-hole=\"FreePriceAmount\">$300</span>\r\n                                        <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"FreePriceLabel\">\r\n                                            / year\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"rounded-xl border border-gray-300 px-3 h-10 flex items-center\r\n                                            text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                    1 seat\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Total -->\r\n                            <div class=\"mt-4 flex items-center justify-between\">\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"FreeTotalLabel\">\r\n                                    Total (yearly)\r\n                                </div>\r\n                                <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"FreeTotalAmount\">\r\n                                    $300\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- CTA -->\r\n                            <a ws-attr=\"FreeCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                                <span class=\"relative text-sm\">Continue to checkout</span>\r\n                            </a>\r\n\r\n                            <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"FreeNote\">\r\n                                Ideal for solo developers. Prices in USD.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <!-- contact us -->\r\n            <section class=\"scroll-my-0 py-7 dark:bg-gray-900 border-t-2 border-b-2 dark:border-none\">\r\n                <div class=\"mx-auto max-w-xl p-8 rounded content mb-10\">\r\n                    <h2 class=\"header text-center mb-8\">Contact us</h2>\r\n\r\n                    <form method=\"post\">\r\n\r\n                        <!-- Subject -->\r\n                        <div class=\"mb-6\">\r\n                            <label for=\"emailSubject\" class=\"block font-semibold mb-2\">Subject</label>\r\n                            <input type=\"text\" name=\"email-subject\" ws-var=\"ContactSubjectVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\" value=\"WebSharper support\">\r\n                        </div>\r\n\r\n                        <!-- Message -->\r\n                        <div class=\"mb-6\">\r\n                            <label for=\"emailMessage\" class=\"block font-semibold mb-2\">Message</label>\r\n                            <textarea name=\"email-message\" rows=\"5\" ws-var=\"ContactMessageVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\"></textarea>\r\n                        </div>\r\n\r\n                        <!-- Row with Email, Name, Country -->\r\n                        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6\">\r\n                            <!-- Email -->\r\n                            <div>\r\n                                <label for=\"emailAddress\" class=\"block font-semibold mb-2\">Your email address</label>\r\n                                <input type=\"email\" name=\"email-address\" ws-var=\"ContactEmailVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                            </div>\r\n\r\n                            <!-- Name -->\r\n                            <div>\r\n                                <label for=\"emailName\" class=\"block font-semibold mb-2\">Your name</label>\r\n                                <input type=\"text\" ws-var=\"ContactNameVar\" name=\"name\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                            </div>\r\n\r\n                            <!-- Country -->\r\n                            <div>\r\n                                <label for=\"emailCountry\" class=\"block font-semibold mb-2\">Your country</label>\r\n                                <select name=\"email-country\" ws-var=\"ContactCountryVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                                    <option value=\"Afghanistan\">Afghanistan</option>\r\n                                    <option value=\"Albania\">Albania</option>\r\n                                    <option value=\"Algeria\">Algeria</option>\r\n                                    <option value=\"Andorra\">Andorra</option>\r\n                                    <option value=\"Angola\">Angola</option>\r\n                                    <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\r\n                                    <option value=\"Argentina\">Argentina</option>\r\n                                    <option value=\"Armenia\">Armenia</option>\r\n                                    <option value=\"Australia\">Australia</option>\r\n                                    <option value=\"Austria\">Austria</option>\r\n                                    <option value=\"Azerbaijan\">Azerbaijan</option>\r\n                                    <option value=\"Bahamas\">Bahamas</option>\r\n                                    <option value=\"Bahrain\">Bahrain</option>\r\n                                    <option value=\"Bangladesh\">Bangladesh</option>\r\n                                    <option value=\"Barbados\">Barbados</option>\r\n                                    <option value=\"Belarus\">Belarus</option>\r\n                                    <option value=\"Belgium\">Belgium</option>\r\n                                    <option value=\"Belize\">Belize</option>\r\n                                    <option value=\"Benin\">Benin</option>\r\n                                    <option value=\"Bhutan\">Bhutan</option>\r\n                                    <option value=\"Bolivia\">Bolivia</option>\r\n                                    <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\r\n                                    <option value=\"Botswana\">Botswana</option>\r\n                                    <option value=\"Brazil\">Brazil</option>\r\n                                    <option value=\"Brunei\">Brunei</option>\r\n                                    <option value=\"Bulgaria\">Bulgaria</option>\r\n                                    <option value=\"Burkina Faso\">Burkina Faso</option>\r\n                                    <option value=\"Burundi\">Burundi</option>\r\n                                    <option value=\"Cabo Verde\">Cabo Verde</option>\r\n                                    <option value=\"Cambodia\">Cambodia</option>\r\n                                    <option value=\"Cameroon\">Cameroon</option>\r\n                                    <option value=\"Canada\">Canada</option>\r\n                                    <option value=\"Central African Republic\">Central African Republic</option>\r\n                                    <option value=\"Chad\">Chad</option>\r\n                                    <option value=\"Chile\">Chile</option>\r\n                                    <option value=\"China\">China</option>\r\n                                    <option value=\"Colombia\">Colombia</option>\r\n                                    <option value=\"Comoros\">Comoros</option>\r\n                                    <option value=\"Congo (Congo-Brazzaville)\">Congo (Congo-Brazzaville)</option>\r\n                                    <option value=\"Costa Rica\">Costa Rica</option>\r\n                                    <option value=\"Croatia\">Croatia</option>\r\n                                    <option value=\"Cuba\">Cuba</option>\r\n                                    <option value=\"Cyprus\">Cyprus</option>\r\n                                    <option value=\"Czech Republic\">Czech Republic</option>\r\n                                    <option value=\"Democratic Republic of the Congo\">Democratic Republic of the Congo</option>\r\n                                    <option value=\"Denmark\">Denmark</option>\r\n                                    <option value=\"Djibouti\">Djibouti</option>\r\n                                    <option value=\"Dominica\">Dominica</option>\r\n                                    <option value=\"Dominican Republic\">Dominican Republic</option>\r\n                                    <option value=\"Ecuador\">Ecuador</option>\r\n                                    <option value=\"Egypt\">Egypt</option>\r\n                                    <option value=\"El Salvador\">El Salvador</option>\r\n                                    <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n                                    <option value=\"Eritrea\">Eritrea</option>\r\n                                    <option value=\"Estonia\">Estonia</option>\r\n                                    <option value=\"Eswatini\">Eswatini</option>\r\n                                    <option value=\"Ethiopia\">Ethiopia</option>\r\n                                    <option value=\"Fiji\">Fiji</option>\r\n                                    <option value=\"Finland\">Finland</option>\r\n                                    <option value=\"France\">France</option>\r\n                                    <option value=\"Gabon\">Gabon</option>\r\n                                    <option value=\"Gambia\">Gambia</option>\r\n                                    <option value=\"Georgia\">Georgia</option>\r\n                                    <option value=\"Germany\">Germany</option>\r\n                                    <option value=\"Ghana\">Ghana</option>\r\n                                    <option value=\"Greece\">Greece</option>\r\n                                    <option value=\"Grenada\">Grenada</option>\r\n                                    <option value=\"Guatemala\">Guatemala</option>\r\n                                    <option value=\"Guinea\">Guinea</option>\r\n                                    <option value=\"Guinea-Bissau\">Guinea-Bissau</option>\r\n                                    <option value=\"Guyana\">Guyana</option>\r\n                                    <option value=\"Haiti\">Haiti</option>\r\n                                    <option value=\"Honduras\">Honduras</option>\r\n                                    <option value=\"Hungary\">Hungary</option>\r\n                                    <option value=\"Iceland\">Iceland</option>\r\n                                    <option value=\"India\">India</option>\r\n                                    <option value=\"Indonesia\">Indonesia</option>\r\n                                    <option value=\"Iran\">Iran</option>\r\n                                    <option value=\"Iraq\">Iraq</option>\r\n                                    <option value=\"Ireland\">Ireland</option>\r\n                                    <option value=\"Israel\">Israel</option>\r\n                                    <option value=\"Italy\">Italy</option>\r\n                                    <option value=\"Jamaica\">Jamaica</option>\r\n                                    <option value=\"Japan\">Japan</option>\r\n                                    <option value=\"Jordan\">Jordan</option>\r\n                                    <option value=\"Kazakhstan\">Kazakhstan</option>\r\n                                    <option value=\"Kenya\">Kenya</option>\r\n                                    <option value=\"Kiribati\">Kiribati</option>\r\n                                    <option value=\"Kuwait\">Kuwait</option>\r\n                                    <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n                                    <option value=\"Laos\">Laos</option>\r\n                                    <option value=\"Latvia\">Latvia</option>\r\n                                    <option value=\"Lebanon\">Lebanon</option>\r\n                                    <option value=\"Lesotho\">Lesotho</option>\r\n                                    <option value=\"Liberia\">Liberia</option>\r\n                                    <option value=\"Libya\">Libya</option>\r\n                                    <option value=\"Liechtenstein\">Liechtenstein</option>\r\n                                    <option value=\"Lithuania\">Lithuania</option>\r\n                                    <option value=\"Luxembourg\">Luxembourg</option>\r\n                                    <option value=\"Madagascar\">Madagascar</option>\r\n                                    <option value=\"Malawi\">Malawi</option>\r\n                                    <option value=\"Malaysia\">Malaysia</option>\r\n                                    <option value=\"Maldives\">Maldives</option>\r\n                                    <option value=\"Mali\">Mali</option>\r\n                                    <option value=\"Malta\">Malta</option>\r\n                                    <option value=\"Marshall Islands\">Marshall Islands</option>\r\n                                    <option value=\"Mauritania\">Mauritania</option>\r\n                                    <option value=\"Mauritius\">Mauritius</option>\r\n                                    <option value=\"Mexico\">Mexico</option>\r\n                                    <option value=\"Micronesia\">Micronesia</option>\r\n                                    <option value=\"Moldova\">Moldova</option>\r\n                                    <option value=\"Monaco\">Monaco</option>\r\n                                    <option value=\"Mongolia\">Mongolia</option>\r\n                                    <option value=\"Montenegro\">Montenegro</option>\r\n                                    <option value=\"Morocco\">Morocco</option>\r\n                                    <option value=\"Mozambique\">Mozambique</option>\r\n                                    <option value=\"Myanmar (Burma)\">Myanmar (Burma)</option>\r\n                                    <option value=\"Namibia\">Namibia</option>\r\n                                    <option value=\"Nauru\">Nauru</option>\r\n                                    <option value=\"Nepal\">Nepal</option>\r\n                                    <option value=\"Netherlands\">Netherlands</option>\r\n                                    <option value=\"New Zealand\">New Zealand</option>\r\n                                    <option value=\"Nicaragua\">Nicaragua</option>\r\n                                    <option value=\"Niger\">Niger</option>\r\n                                    <option value=\"Nigeria\">Nigeria</option>\r\n                                    <option value=\"North Korea\">North Korea</option>\r\n                                    <option value=\"North Macedonia\">North Macedonia</option>\r\n                                    <option value=\"Norway\">Norway</option>\r\n                                    <option value=\"Oman\">Oman</option>\r\n                                    <option value=\"Pakistan\">Pakistan</option>\r\n                                    <option value=\"Palau\">Palau</option>\r\n                                    <option value=\"Palestine\">Palestine</option>\r\n                                    <option value=\"Panama\">Panama</option>\r\n                                    <option value=\"Papua New Guinea\">Papua New Guinea</option>\r\n                                    <option value=\"Paraguay\">Paraguay</option>\r\n                                    <option value=\"Peru\">Peru</option>\r\n                                    <option value=\"Philippines\">Philippines</option>\r\n                                    <option value=\"Poland\">Poland</option>\r\n                                    <option value=\"Portugal\">Portugal</option>\r\n                                    <option value=\"Qatar\">Qatar</option>\r\n                                    <option value=\"Romania\">Romania</option>\r\n                                    <option value=\"Russia\">Russia</option>\r\n                                    <option value=\"Rwanda\">Rwanda</option>\r\n                                    <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\r\n                                    <option value=\"Saint Lucia\">Saint Lucia</option>\r\n                                    <option value=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</option>\r\n                                    <option value=\"Samoa\">Samoa</option>\r\n                                    <option value=\"San Marino\">San Marino</option>\r\n                                    <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\r\n                                    <option value=\"Saudi Arabia\">Saudi Arabia</option>\r\n                                    <option value=\"Senegal\">Senegal</option>\r\n                                    <option value=\"Serbia\">Serbia</option>\r\n                                    <option value=\"Seychelles\">Seychelles</option>\r\n                                    <option value=\"Sierra Leone\">Sierra Leone</option>\r\n                                    <option value=\"Singapore\">Singapore</option>\r\n                                    <option value=\"Slovakia\">Slovakia</option>\r\n                                    <option value=\"Slovenia\">Slovenia</option>\r\n                                    <option value=\"Solomon Islands\">Solomon Islands</option>\r\n                                    <option value=\"Somalia\">Somalia</option>\r\n                                    <option value=\"South Africa\">South Africa</option>\r\n                                    <option value=\"South Korea\">South Korea</option>\r\n                                    <option value=\"South Sudan\">South Sudan</option>\r\n                                    <option value=\"Spain\">Spain</option>\r\n                                    <option value=\"Sri Lanka\">Sri Lanka</option>\r\n                                    <option value=\"Sudan\">Sudan</option>\r\n                                    <option value=\"Suriname\">Suriname</option>\r\n                                    <option value=\"Sweden\">Sweden</option>\r\n                                    <option value=\"Switzerland\">Switzerland</option>\r\n                                    <option value=\"Syria\">Syria</option>\r\n                                    <option value=\"Taiwan\">Taiwan</option>\r\n                                    <option value=\"Tajikistan\">Tajikistan</option>\r\n                                    <option value=\"Tanzania\">Tanzania</option>\r\n                                    <option value=\"Thailand\">Thailand</option>\r\n                                    <option value=\"Timor-Leste\">Timor-Leste</option>\r\n                                    <option value=\"Togo\">Togo</option>\r\n                                    <option value=\"Tonga\">Tonga</option>\r\n                                    <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\r\n                                    <option value=\"Tunisia\">Tunisia</option>\r\n                                    <option value=\"Turkey\">Turkey</option>\r\n                                    <option value=\"Turkmenistan\">Turkmenistan</option>\r\n                                    <option value=\"Tuvalu\">Tuvalu</option>\r\n                                    <option value=\"Uganda\">Uganda</option>\r\n                                    <option value=\"Ukraine\">Ukraine</option>\r\n                                    <option value=\"United Arab Emirates\">United Arab Emirates</option>\r\n                                    <option value=\"United Kingdom\">United Kingdom</option>\r\n                                    <option value=\"United States\" selected=\"\">United States</option>\r\n                                    <option value=\"Uruguay\">Uruguay</option>\r\n                                    <option value=\"Uzbekistan\">Uzbekistan</option>\r\n                                    <option value=\"Vanuatu\">Vanuatu</option>\r\n                                    <option value=\"Vatican City\">Vatican City</option>\r\n                                    <option value=\"Venezuela\">Venezuela</option>\r\n                                    <option value=\"Vietnam\">Vietnam</option>\r\n                                    <option value=\"Yemen\">Yemen</option>\r\n                                    <option value=\"Zambia\">Zambia</option>\r\n                                    <option value=\"Zimbabwe\">Zimbabwe</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Send Button -->\r\n                        <div class=\"text-left\">\r\n                            <button ws-attr=\"ContactSendButtonAttr\" type=\"button\" ws-onclick=\"OnContactSendClick\" class=\"bg-blue-500 text-white font-semibold px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-blue-400\">\r\n                                ${ContactSendButtonText}\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </section>\r\n\r\n        </div>\r\n    "), h):PrepareTemplate("support", Some("content"), () => ParseHTMLIntoFakeRoot("\r\n        <div class=\"space-y-20\" ws-onafterrender=\"OnAfterRender\">\r\n            <!-- Hero / Banner -->\r\n            <section class=\"pt-28 sm:pt-32\">\r\n                <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <div class=\"grid items-center gap-8 md:grid-cols-12\">\r\n                        <div class=\"md:col-span-7 text-center md:text-left\">\r\n                            <h1 class=\"font-bold tracking-tight text-gray-950 dark:text-white text-4xl sm:text-5xl\">\r\n                                WebSharper Expert Support\r\n                            </h1>\r\n                            <p class=\"mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 max-w-2xl md:mx-0 mx-auto\">\r\n                                Our experienced WebSharper support team is available to help you make the right decisions for your development project, and can save you hundreds of hours when important and difficult questions arise.\r\n                            </p>\r\n\r\n                            <!-- Chips -->\r\n                            <div class=\"mt-4 flex flex-wrap justify-center md:justify-start gap-2\">\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    Email & web support\r\n                                </span>\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    First response: 4h-2d\r\n                                </span>\r\n                                <span class=\"rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200\">\r\n                                    Mentoring & training available\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Visual -->\r\n                        <div class=\"md:col-span-5\">\r\n                            <figure class=\"rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-900\">\r\n                                <img src=\"./Assets/images/slay.png\" alt=\"WebSharper support: experts reviewing code and architecture\" class=\"w-full h-auto\">\r\n                            </figure>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <section class=\"scroll-my-16\">\r\n                <div class=\"mx-2 md:mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <div class=\"rounded-3xl overflow-hidden border dark:border-gray-800\">\r\n                        <div class=\"py-12 lg:py-16 lg:px-16 border-b dark:border-gray-800\">\r\n                            <h2 class=\"font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                                Quick, practical help from the people who build WebSharper\r\n                            </h2>\r\n                            <p class=\"mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                                Get senior guidance on architecture, performance, reactive UI, and integrations plus hands-on fixes when you need them.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div class=\"lg:px-16\">\r\n                            <!-- Visual / proof -->\r\n                            <div class=\"lg:col-span-5 lg:-mr-10 py-12 md:py-16\">\r\n                                <div class=\"relative\">\r\n                                    <div class=\"absolute translate-y-1/2 mx-auto blur-3xl inset-0 rounded-t-full bg-brand-primary/20 dark:bg-brand-primary/20\"></div>\r\n                                    <figure class=\"relative rounded-2xl overflow-hidden border bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-sm w-1/2 mx-auto\">\r\n\r\n                                        <img src=\"./Assets/images/slay.png\" alt=\"Support walkthrough: issue context, guidance, and fix\" class=\"w-full h-auto\">\r\n                                    </figure>\r\n                                    <!-- short 15\ufffd20s looped video instead of static image -->\r\n                                    <!--\r\n                                    <video class=\"relative mt-4 w-full rounded-2xl border border-gray-200 dark:border-gray-800\" autoplay muted loop playsinline poster=\"./Assets/images/support-video-poster.png\">\r\n                                        <source src=\"./videos/support-teaser.mp4\" type=\"video/mp4\">\r\n                                    </video>\r\n                                    -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <!-- Support value props -->\r\n            <section class=\"mt-12\">\r\n                <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                    <ul class=\"grid gap-4 md:grid-cols-3\">\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7 9l5 3.5L17 9\"></path><path d=\"M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z\"></path></g></svg>\r\n                                <span>Email and web support</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Email us your support queries, architectural or best practice questions, or post them to our dedicated support site.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0\"></path><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z\" clip-rule=\"evenodd\"></path></svg>\r\n                                <span>Fast response time</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Receive the first response to your queries from within 4 hours up to 2 days, depending on your selected support plan..\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96m0 0v288\"></path></svg>\r\n                                <span>Mentoring and training</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Pick a Start-up or Enterprise plan and jumpstart your team's productivity with our online WebSharper training and mentoring.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M7 3a2 2 0 0 1 4 0h1.5A1.5 1.5 0 0 1 14 4.5V7h-1a1 1 0 0 0 0 2h1v2.5a1.5 1.5 0 0 1-1.5 1.5H11a2 2 0 0 1-4 0H5.5A1.5 1.5 0 0 1 4 11.5V10a2 2 0 0 1 0-4V4.5A1.5 1.5 0 0 1 5.5 3zm2-1a1 1 0 0 0-1 1v1H5.5a.5.5 0 0 0-.5.5V7H4a1 1 0 0 0 0 2h1v2.5a.5.5 0 0 0 .5.5H8v1a1 1 0 0 0 2 0v-1h2.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 0-4V4.5a.5.5 0 0 0-.5-.5H10V3a1 1 0 0 0-1-1\"></path></svg>\r\n                                <span>Extensions support</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Working heavily with WebSharper extensions? Get the help you need with any issues you encounter in these extensions.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9\"></path></svg>\r\n                                <span>Architectural review</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Next to support questions, we can also help you decide on the best architecture for your project, or give best practice guidelines for your team.\r\n                            </p>\r\n                        </li>\r\n\r\n                        <li class=\"rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5\">\r\n                            <h3 class=\"font-semibold text-gray-900 dark:text-white flex items-center gap-2\">\r\n                                <svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M19 15v-3.062A3.938 3.938 0 0 0 15.063 8H8.936A3.938 3.938 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z\"></path><path d=\"M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1\"></path><path stroke-linecap=\"round\" d=\"M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15\"></path></g></svg>\r\n                                <span>Priority bugfixes</span>\r\n                            </h3>\r\n                            <p class=\"mt-2 text-sm text-gray-700 dark:text-gray-300\">\r\n                                Your support ticket jumps to the front of our priority queue and becomes the first to fix. Get the most timely help when you need it most.\r\n                            </p>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </section>\r\n\r\n        <section id=\"plans\" class=\"scroll-mt-20 scroll-smooth\">\r\n            <div class=\"mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl\">\r\n                <h2 class=\"text-center font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white\">\r\n                    Choose your plan\r\n                </h2>\r\n                <p class=\"text-center mt-3 text-lg text-gray-700 dark:text-gray-300\">\r\n                    Monthly or yearly billing, per-seat for teams or a freelancer option.\r\n                </p>\r\n\r\n                    <!-- Billing period toggle -->\r\n                    <div class=\"mx-auto mt-6 flex w-full max-w-xs items-center justify-center rounded-xl border border-gray-200 bg-white p-1\r\n                                dark:bg-gray-950 dark:border-gray-800\">\r\n                        <button ws-onclick=\"OnBillMonth\" ws-attr=\"BillMonthAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 text flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"false\" aria-pressed=\"false\">\r\n                            Per month\r\n                        </button>\r\n                        <button ws-onclick=\"OnBillYear\" ws-attr=\"BillYearAttr\" type=\"button\" class=\"cursor-pointer dark:text-white text-gray-700 flex-1 rounded-lg py-2 text-sm font-medium transition\r\n                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r\n                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900\" data-active=\"true\" aria-pressed=\"true\">\r\n                            Per year\r\n                        </button>\r\n                    </div>\r\n\r\n                    <!-- Plans grid -->\r\n                    <div class=\"mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2\">\r\n                        <!-- Professional (per seat) -->\r\n                        <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\" data-price-month=\"250\" data-price-year=\"2500\">\r\n                            <div class=\"flex items-start justify-between gap-4\">\r\n                                <div>\r\n                                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                    <div ws-hole=\"ProName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                        Professional\r\n                                    </div>\r\n                                    <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                        <span ws-hole=\"ProPriceAmount\">$2,500</span>\r\n                                        <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"ProPriceLabel\">\r\n                                            / seat / year\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Seat selector -->\r\n                                <div class=\"flex items-center gap-2\">\r\n                                    <button ws-onclick=\"OnSeatMinus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Decrease seats\" type=\"button\">\r\n                                        -\r\n                                    </button>\r\n                                    <input type=\"text\" ws-var=\"SeatCount\" inputmode=\"numeric\" pattern=\"[0-9]*\" min=\"1\" step=\"1\" value=\"1\" class=\"w-20 text-center rounded-xl border border-gray-300 bg-transparent dark:border-white/20 text-gray-900 dark:text-white h-10\" aria-label=\"Seat count\">\r\n                                    <button ws-onclick=\"OnSeatPlus\" class=\"cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r\n                                                dark:border-white/20 dark:text-white\" aria-label=\"Increase seats\" type=\"button\">\r\n                                        +\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Total -->\r\n                            <div class=\"mt-4 flex items-center justify-between\">\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"ProTotalLabel\">\r\n                                    Total (yearly)\r\n                                </div>\r\n                                <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"ProTotalAmount\">\r\n                                    $2,500\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- CTA -->\r\n                            <a ws-attr=\"ProCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                                <span class=\"relative text-sm\">Continue to checkout</span>\r\n                            </a>\r\n\r\n                            <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"ProNote\">\r\n                                Assign GitHub usernames after purchase. Prices in USD.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <!-- Freelancer (1 seat) -->\r\n                        <div class=\"rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r\n                                    dark:bg-gray-950 dark:border-gray-800\">\r\n                            <div class=\"flex items-start justify-between gap-4\">\r\n                                <div>\r\n                                    <div class=\"text-sm text-gray-600 dark:text-gray-400\">Plan</div>\r\n                                    <div ws-hole=\"FreeName\" class=\"text-2xl font-bold text-gray-950 dark:text-white\">\r\n                                        Freelancer\r\n                                    </div>\r\n                                    <div class=\"mt-1 text-base text-gray-700 dark:text-gray-300\">\r\n                                        <span ws-hole=\"FreePriceAmount\">$300</span>\r\n                                        <span class=\"text-gray-600 dark:text-gray-400\" ws-hole=\"FreePriceLabel\">\r\n                                            / year\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"rounded-xl border border-gray-300 px-3 h-10 flex items-center\r\n                                            text-gray-800 dark:border-white/20 dark:text-white\">\r\n                                    1 seat\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Total -->\r\n                            <div class=\"mt-4 flex items-center justify-between\">\r\n                                <div class=\"text-sm text-gray-600 dark:text-gray-400\" ws-hole=\"FreeTotalLabel\">\r\n                                    Total (yearly)\r\n                                </div>\r\n                                <div class=\"text-xl font-semibold text-gray-950 dark:text-white\" ws-hole=\"FreeTotalAmount\">\r\n                                    $300\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- CTA -->\r\n                            <a ws-attr=\"FreeCheckoutAttr\" class=\"w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r\n                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r\n                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r\n                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r\n                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4\">\r\n                                <span class=\"relative text-sm\">Continue to checkout</span>\r\n                            </a>\r\n\r\n                            <p class=\"mt-3 text-xs text-gray-600 dark:text-gray-400 text-center\" ws-hole=\"FreeNote\">\r\n                                Ideal for solo developers. Prices in USD.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <!-- contact us -->\r\n            <section class=\"scroll-my-0 py-7 dark:bg-gray-900 border-t-2 border-b-2 dark:border-none\">\r\n                <div class=\"mx-auto max-w-xl p-8 rounded content mb-10\">\r\n                    <h2 class=\"header text-center mb-8\">Contact us</h2>\r\n\r\n                    <form method=\"post\">\r\n\r\n                        <!-- Subject -->\r\n                        <div class=\"mb-6\">\r\n                            <label for=\"emailSubject\" class=\"block font-semibold mb-2\">Subject</label>\r\n                            <input type=\"text\" name=\"email-subject\" ws-var=\"ContactSubjectVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\" value=\"WebSharper support\">\r\n                        </div>\r\n\r\n                        <!-- Message -->\r\n                        <div class=\"mb-6\">\r\n                            <label for=\"emailMessage\" class=\"block font-semibold mb-2\">Message</label>\r\n                            <textarea name=\"email-message\" rows=\"5\" ws-var=\"ContactMessageVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\"></textarea>\r\n                        </div>\r\n\r\n                        <!-- Row with Email, Name, Country -->\r\n                        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6\">\r\n                            <!-- Email -->\r\n                            <div>\r\n                                <label for=\"emailAddress\" class=\"block font-semibold mb-2\">Your email address</label>\r\n                                <input type=\"email\" name=\"email-address\" ws-var=\"ContactEmailVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                            </div>\r\n\r\n                            <!-- Name -->\r\n                            <div>\r\n                                <label for=\"emailName\" class=\"block font-semibold mb-2\">Your name</label>\r\n                                <input type=\"text\" ws-var=\"ContactNameVar\" name=\"name\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                            </div>\r\n\r\n                            <!-- Country -->\r\n                            <div>\r\n                                <label for=\"emailCountry\" class=\"block font-semibold mb-2\">Your country</label>\r\n                                <select name=\"email-country\" ws-var=\"ContactCountryVar\" class=\"w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400\">\r\n                                    <option value=\"Afghanistan\">Afghanistan</option>\r\n                                    <option value=\"Albania\">Albania</option>\r\n                                    <option value=\"Algeria\">Algeria</option>\r\n                                    <option value=\"Andorra\">Andorra</option>\r\n                                    <option value=\"Angola\">Angola</option>\r\n                                    <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\r\n                                    <option value=\"Argentina\">Argentina</option>\r\n                                    <option value=\"Armenia\">Armenia</option>\r\n                                    <option value=\"Australia\">Australia</option>\r\n                                    <option value=\"Austria\">Austria</option>\r\n                                    <option value=\"Azerbaijan\">Azerbaijan</option>\r\n                                    <option value=\"Bahamas\">Bahamas</option>\r\n                                    <option value=\"Bahrain\">Bahrain</option>\r\n                                    <option value=\"Bangladesh\">Bangladesh</option>\r\n                                    <option value=\"Barbados\">Barbados</option>\r\n                                    <option value=\"Belarus\">Belarus</option>\r\n                                    <option value=\"Belgium\">Belgium</option>\r\n                                    <option value=\"Belize\">Belize</option>\r\n                                    <option value=\"Benin\">Benin</option>\r\n                                    <option value=\"Bhutan\">Bhutan</option>\r\n                                    <option value=\"Bolivia\">Bolivia</option>\r\n                                    <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\r\n                                    <option value=\"Botswana\">Botswana</option>\r\n                                    <option value=\"Brazil\">Brazil</option>\r\n                                    <option value=\"Brunei\">Brunei</option>\r\n                                    <option value=\"Bulgaria\">Bulgaria</option>\r\n                                    <option value=\"Burkina Faso\">Burkina Faso</option>\r\n                                    <option value=\"Burundi\">Burundi</option>\r\n                                    <option value=\"Cabo Verde\">Cabo Verde</option>\r\n                                    <option value=\"Cambodia\">Cambodia</option>\r\n                                    <option value=\"Cameroon\">Cameroon</option>\r\n                                    <option value=\"Canada\">Canada</option>\r\n                                    <option value=\"Central African Republic\">Central African Republic</option>\r\n                                    <option value=\"Chad\">Chad</option>\r\n                                    <option value=\"Chile\">Chile</option>\r\n                                    <option value=\"China\">China</option>\r\n                                    <option value=\"Colombia\">Colombia</option>\r\n                                    <option value=\"Comoros\">Comoros</option>\r\n                                    <option value=\"Congo (Congo-Brazzaville)\">Congo (Congo-Brazzaville)</option>\r\n                                    <option value=\"Costa Rica\">Costa Rica</option>\r\n                                    <option value=\"Croatia\">Croatia</option>\r\n                                    <option value=\"Cuba\">Cuba</option>\r\n                                    <option value=\"Cyprus\">Cyprus</option>\r\n                                    <option value=\"Czech Republic\">Czech Republic</option>\r\n                                    <option value=\"Democratic Republic of the Congo\">Democratic Republic of the Congo</option>\r\n                                    <option value=\"Denmark\">Denmark</option>\r\n                                    <option value=\"Djibouti\">Djibouti</option>\r\n                                    <option value=\"Dominica\">Dominica</option>\r\n                                    <option value=\"Dominican Republic\">Dominican Republic</option>\r\n                                    <option value=\"Ecuador\">Ecuador</option>\r\n                                    <option value=\"Egypt\">Egypt</option>\r\n                                    <option value=\"El Salvador\">El Salvador</option>\r\n                                    <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n                                    <option value=\"Eritrea\">Eritrea</option>\r\n                                    <option value=\"Estonia\">Estonia</option>\r\n                                    <option value=\"Eswatini\">Eswatini</option>\r\n                                    <option value=\"Ethiopia\">Ethiopia</option>\r\n                                    <option value=\"Fiji\">Fiji</option>\r\n                                    <option value=\"Finland\">Finland</option>\r\n                                    <option value=\"France\">France</option>\r\n                                    <option value=\"Gabon\">Gabon</option>\r\n                                    <option value=\"Gambia\">Gambia</option>\r\n                                    <option value=\"Georgia\">Georgia</option>\r\n                                    <option value=\"Germany\">Germany</option>\r\n                                    <option value=\"Ghana\">Ghana</option>\r\n                                    <option value=\"Greece\">Greece</option>\r\n                                    <option value=\"Grenada\">Grenada</option>\r\n                                    <option value=\"Guatemala\">Guatemala</option>\r\n                                    <option value=\"Guinea\">Guinea</option>\r\n                                    <option value=\"Guinea-Bissau\">Guinea-Bissau</option>\r\n                                    <option value=\"Guyana\">Guyana</option>\r\n                                    <option value=\"Haiti\">Haiti</option>\r\n                                    <option value=\"Honduras\">Honduras</option>\r\n                                    <option value=\"Hungary\">Hungary</option>\r\n                                    <option value=\"Iceland\">Iceland</option>\r\n                                    <option value=\"India\">India</option>\r\n                                    <option value=\"Indonesia\">Indonesia</option>\r\n                                    <option value=\"Iran\">Iran</option>\r\n                                    <option value=\"Iraq\">Iraq</option>\r\n                                    <option value=\"Ireland\">Ireland</option>\r\n                                    <option value=\"Israel\">Israel</option>\r\n                                    <option value=\"Italy\">Italy</option>\r\n                                    <option value=\"Jamaica\">Jamaica</option>\r\n                                    <option value=\"Japan\">Japan</option>\r\n                                    <option value=\"Jordan\">Jordan</option>\r\n                                    <option value=\"Kazakhstan\">Kazakhstan</option>\r\n                                    <option value=\"Kenya\">Kenya</option>\r\n                                    <option value=\"Kiribati\">Kiribati</option>\r\n                                    <option value=\"Kuwait\">Kuwait</option>\r\n                                    <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n                                    <option value=\"Laos\">Laos</option>\r\n                                    <option value=\"Latvia\">Latvia</option>\r\n                                    <option value=\"Lebanon\">Lebanon</option>\r\n                                    <option value=\"Lesotho\">Lesotho</option>\r\n                                    <option value=\"Liberia\">Liberia</option>\r\n                                    <option value=\"Libya\">Libya</option>\r\n                                    <option value=\"Liechtenstein\">Liechtenstein</option>\r\n                                    <option value=\"Lithuania\">Lithuania</option>\r\n                                    <option value=\"Luxembourg\">Luxembourg</option>\r\n                                    <option value=\"Madagascar\">Madagascar</option>\r\n                                    <option value=\"Malawi\">Malawi</option>\r\n                                    <option value=\"Malaysia\">Malaysia</option>\r\n                                    <option value=\"Maldives\">Maldives</option>\r\n                                    <option value=\"Mali\">Mali</option>\r\n                                    <option value=\"Malta\">Malta</option>\r\n                                    <option value=\"Marshall Islands\">Marshall Islands</option>\r\n                                    <option value=\"Mauritania\">Mauritania</option>\r\n                                    <option value=\"Mauritius\">Mauritius</option>\r\n                                    <option value=\"Mexico\">Mexico</option>\r\n                                    <option value=\"Micronesia\">Micronesia</option>\r\n                                    <option value=\"Moldova\">Moldova</option>\r\n                                    <option value=\"Monaco\">Monaco</option>\r\n                                    <option value=\"Mongolia\">Mongolia</option>\r\n                                    <option value=\"Montenegro\">Montenegro</option>\r\n                                    <option value=\"Morocco\">Morocco</option>\r\n                                    <option value=\"Mozambique\">Mozambique</option>\r\n                                    <option value=\"Myanmar (Burma)\">Myanmar (Burma)</option>\r\n                                    <option value=\"Namibia\">Namibia</option>\r\n                                    <option value=\"Nauru\">Nauru</option>\r\n                                    <option value=\"Nepal\">Nepal</option>\r\n                                    <option value=\"Netherlands\">Netherlands</option>\r\n                                    <option value=\"New Zealand\">New Zealand</option>\r\n                                    <option value=\"Nicaragua\">Nicaragua</option>\r\n                                    <option value=\"Niger\">Niger</option>\r\n                                    <option value=\"Nigeria\">Nigeria</option>\r\n                                    <option value=\"North Korea\">North Korea</option>\r\n                                    <option value=\"North Macedonia\">North Macedonia</option>\r\n                                    <option value=\"Norway\">Norway</option>\r\n                                    <option value=\"Oman\">Oman</option>\r\n                                    <option value=\"Pakistan\">Pakistan</option>\r\n                                    <option value=\"Palau\">Palau</option>\r\n                                    <option value=\"Palestine\">Palestine</option>\r\n                                    <option value=\"Panama\">Panama</option>\r\n                                    <option value=\"Papua New Guinea\">Papua New Guinea</option>\r\n                                    <option value=\"Paraguay\">Paraguay</option>\r\n                                    <option value=\"Peru\">Peru</option>\r\n                                    <option value=\"Philippines\">Philippines</option>\r\n                                    <option value=\"Poland\">Poland</option>\r\n                                    <option value=\"Portugal\">Portugal</option>\r\n                                    <option value=\"Qatar\">Qatar</option>\r\n                                    <option value=\"Romania\">Romania</option>\r\n                                    <option value=\"Russia\">Russia</option>\r\n                                    <option value=\"Rwanda\">Rwanda</option>\r\n                                    <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\r\n                                    <option value=\"Saint Lucia\">Saint Lucia</option>\r\n                                    <option value=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</option>\r\n                                    <option value=\"Samoa\">Samoa</option>\r\n                                    <option value=\"San Marino\">San Marino</option>\r\n                                    <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\r\n                                    <option value=\"Saudi Arabia\">Saudi Arabia</option>\r\n                                    <option value=\"Senegal\">Senegal</option>\r\n                                    <option value=\"Serbia\">Serbia</option>\r\n                                    <option value=\"Seychelles\">Seychelles</option>\r\n                                    <option value=\"Sierra Leone\">Sierra Leone</option>\r\n                                    <option value=\"Singapore\">Singapore</option>\r\n                                    <option value=\"Slovakia\">Slovakia</option>\r\n                                    <option value=\"Slovenia\">Slovenia</option>\r\n                                    <option value=\"Solomon Islands\">Solomon Islands</option>\r\n                                    <option value=\"Somalia\">Somalia</option>\r\n                                    <option value=\"South Africa\">South Africa</option>\r\n                                    <option value=\"South Korea\">South Korea</option>\r\n                                    <option value=\"South Sudan\">South Sudan</option>\r\n                                    <option value=\"Spain\">Spain</option>\r\n                                    <option value=\"Sri Lanka\">Sri Lanka</option>\r\n                                    <option value=\"Sudan\">Sudan</option>\r\n                                    <option value=\"Suriname\">Suriname</option>\r\n                                    <option value=\"Sweden\">Sweden</option>\r\n                                    <option value=\"Switzerland\">Switzerland</option>\r\n                                    <option value=\"Syria\">Syria</option>\r\n                                    <option value=\"Taiwan\">Taiwan</option>\r\n                                    <option value=\"Tajikistan\">Tajikistan</option>\r\n                                    <option value=\"Tanzania\">Tanzania</option>\r\n                                    <option value=\"Thailand\">Thailand</option>\r\n                                    <option value=\"Timor-Leste\">Timor-Leste</option>\r\n                                    <option value=\"Togo\">Togo</option>\r\n                                    <option value=\"Tonga\">Tonga</option>\r\n                                    <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\r\n                                    <option value=\"Tunisia\">Tunisia</option>\r\n                                    <option value=\"Turkey\">Turkey</option>\r\n                                    <option value=\"Turkmenistan\">Turkmenistan</option>\r\n                                    <option value=\"Tuvalu\">Tuvalu</option>\r\n                                    <option value=\"Uganda\">Uganda</option>\r\n                                    <option value=\"Ukraine\">Ukraine</option>\r\n                                    <option value=\"United Arab Emirates\">United Arab Emirates</option>\r\n                                    <option value=\"United Kingdom\">United Kingdom</option>\r\n                                    <option value=\"United States\" selected=\"\">United States</option>\r\n                                    <option value=\"Uruguay\">Uruguay</option>\r\n                                    <option value=\"Uzbekistan\">Uzbekistan</option>\r\n                                    <option value=\"Vanuatu\">Vanuatu</option>\r\n                                    <option value=\"Vatican City\">Vatican City</option>\r\n                                    <option value=\"Venezuela\">Venezuela</option>\r\n                                    <option value=\"Vietnam\">Vietnam</option>\r\n                                    <option value=\"Yemen\">Yemen</option>\r\n                                    <option value=\"Zambia\">Zambia</option>\r\n                                    <option value=\"Zimbabwe\">Zimbabwe</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Send Button -->\r\n                        <div class=\"text-left\">\r\n                            <button ws-attr=\"ContactSendButtonAttr\" type=\"button\" ws-onclick=\"OnContactSendClick\" class=\"bg-blue-500 text-white font-semibold px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-blue-400\">\r\n                                ${ContactSendButtonText}\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </section>\r\n\r\n        </div>\r\n    "));
}
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
function contentwrapper(h){
  return h?GetOrLoadTemplate("managesubscription", Some("contentwrapper"), () => ParseHTMLIntoFakeRoot("<div>\r\n        <div ws-attr=\"SkeletonAttr\">\r\n            <div ws-replace=\"Skeleton\"></div>\r\n        </div>\r\n        <div ws-replace=\"Content\"></div>\r\n    </div>"), h):PrepareTemplate("managesubscription", Some("contentwrapper"), () => ParseHTMLIntoFakeRoot("<div>\r\n        <div ws-attr=\"SkeletonAttr\">\r\n            <div ws-replace=\"Skeleton\"></div>\r\n        </div>\r\n        <div ws-replace=\"Content\"></div>\r\n    </div>"));
}
function t(h){
  return h?GetOrLoadTemplate("managesubscription", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    <div class=\"mx-auto max-w-6xl px-10 pt-28 pb-20\" ws-onafterrender=\"OnAfterRender\">\r\n        <div ws-replace=\"MainContent\"></div>\r\n    </div>\r\n\r\n    <div ws-attr=\"ToastAttr\" ws-hole=\"ToastText\" class=\"fixed bottom-4 right-4 hidden rounded-lg px-4 py-2 text-sm bg-gray-900 text-white shadow-lg\" aria-live=\"polite\" role=\"status\">Saved</div>\r\n\r\n    <div ws-attr=\"SpinnerAttr\" class=\"hidden fixed inset-0 z-50 bg-white/50 dark:bg-black/40 backdrop-blur-sm\">\r\n        <div class=\"absolute inset-0 m-auto h-12 w-12 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 dark:border-gray-700 dark:border-t-white\"></div>\r\n    </div>\r\n</body>\r\n</html>"), h):PrepareTemplate("managesubscription", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    <div class=\"mx-auto max-w-6xl px-10 pt-28 pb-20\" ws-onafterrender=\"OnAfterRender\">\r\n        <div ws-replace=\"MainContent\"></div>\r\n    </div>\r\n\r\n    <div ws-attr=\"ToastAttr\" ws-hole=\"ToastText\" class=\"fixed bottom-4 right-4 hidden rounded-lg px-4 py-2 text-sm bg-gray-900 text-white shadow-lg\" aria-live=\"polite\" role=\"status\">Saved</div>\r\n\r\n    <div ws-attr=\"SpinnerAttr\" class=\"hidden fixed inset-0 z-50 bg-white/50 dark:bg-black/40 backdrop-blur-sm\">\r\n        <div class=\"absolute inset-0 m-auto h-12 w-12 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 dark:border-gray-700 dark:border-t-white\"></div>\r\n    </div>\r\n</body>\r\n</html>"));
}
function skeleton(h){
  return h?GetOrLoadTemplate("managesubscription", Some("skeleton"), () => ParseHTMLIntoFakeRoot("<div class=\"grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] transition-opacity duration-500 ease-out\">\r\n        <aside class=\"lg:sticky lg:top-24 h-max\">\r\n            <div class=\"rounded-xl border border-gray-200 p-3 dark:border-gray-800 space-y-1\">\r\n                <div class=\"h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n                <div class=\"h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n            </div>\r\n        </aside>\r\n\r\n        <div class=\"space-y-6\">\r\n\r\n            <div class=\"space-y-3\">\r\n                <div class=\"h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                <div class=\"h-4 w-full max-w-lg bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n\r\n                <div class=\"flex items-center gap-2 mt-2\">\r\n                    <div class=\"h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-9 w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mt-1\"></div>\r\n            </div>\r\n\r\n            <div class=\"flex flex-wrap items-center justify-between gap-3 pt-4\">\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-4 w-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                </div>\r\n                <div class=\"h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden\">\r\n                <div class=\"flex flex-wrap items-start justify-between gap-4 px-4 py-4\">\r\n                    <div class=\"space-y-2\">\r\n                        <div class=\"h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                        <div class=\"h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    </div>\r\n                    <div class=\"h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"bg-gray-50 dark:bg-gray-900/50 h-10 w-full border-t border-b border-gray-200 dark:border-gray-800 animate-pulse\"></div>\r\n\r\n                <div class=\"divide-y divide-gray-200 dark:divide-gray-800\">\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-gray-200 dark:border-gray-800 p-5\">\r\n                <div class=\"flex items-center justify-between mb-4\">\r\n                    <div class=\"h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-10 w-full bg-gray-5 dark:bg-gray-900/50 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-red-100 p-5 dark:border-red-900/30\">\r\n                <div class=\"h-6 w-32 bg-red-100 dark:bg-red-900/50 rounded animate-pulse mb-2\"></div>\r\n                <div class=\"h-4 w-96 bg-red-100 dark:bg-red-900/50 rounded animate-pulse\"></div>\r\n            </div>\r\n        </div>\r\n    </div>"), h):PrepareTemplate("managesubscription", Some("skeleton"), () => ParseHTMLIntoFakeRoot("<div class=\"grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] transition-opacity duration-500 ease-out\">\r\n        <aside class=\"lg:sticky lg:top-24 h-max\">\r\n            <div class=\"rounded-xl border border-gray-200 p-3 dark:border-gray-800 space-y-1\">\r\n                <div class=\"h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n                <div class=\"h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n            </div>\r\n        </aside>\r\n\r\n        <div class=\"space-y-6\">\r\n\r\n            <div class=\"space-y-3\">\r\n                <div class=\"h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                <div class=\"h-4 w-full max-w-lg bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n\r\n                <div class=\"flex items-center gap-2 mt-2\">\r\n                    <div class=\"h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-9 w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mt-1\"></div>\r\n            </div>\r\n\r\n            <div class=\"flex flex-wrap items-center justify-between gap-3 pt-4\">\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-4 w-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                </div>\r\n                <div class=\"h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden\">\r\n                <div class=\"flex flex-wrap items-start justify-between gap-4 px-4 py-4\">\r\n                    <div class=\"space-y-2\">\r\n                        <div class=\"h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                        <div class=\"h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    </div>\r\n                    <div class=\"h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"bg-gray-50 dark:bg-gray-900/50 h-10 w-full border-t border-b border-gray-200 dark:border-gray-800 animate-pulse\"></div>\r\n\r\n                <div class=\"divide-y divide-gray-200 dark:divide-gray-800\">\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-gray-200 dark:border-gray-800 p-5\">\r\n                <div class=\"flex items-center justify-between mb-4\">\r\n                    <div class=\"h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-10 w-full bg-gray-5 dark:bg-gray-900/50 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-red-100 p-5 dark:border-red-900/30\">\r\n                <div class=\"h-6 w-32 bg-red-100 dark:bg-red-900/50 rounded animate-pulse mb-2\"></div>\r\n                <div class=\"h-4 w-96 bg-red-100 dark:bg-red-900/50 rounded animate-pulse\"></div>\r\n            </div>\r\n        </div>\r\n    </div>"));
}
function smoothtextloader(h){
  return h?GetOrLoadTemplate("checkout", Some("smoothtextloader"), () => ParseHTMLIntoFakeRoot("<span class=\"relative inline-block align-bottom ${WrapperClasses}\">\r\n            <span ws-attr=\"SkeletonAttr\" class=\"block w-full h-full transition-opacity duration-500 ease-out\">\r\n                <span class=\"block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full\"></span>\r\n            </span>\r\n            <span ws-attr=\"ContentAttr\" class=\"absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center\">\r\n                <span ws-replace=\"Content\" class=\"w-full\"></span>\r\n            </span>\r\n        </span>"), h):PrepareTemplate("checkout", Some("smoothtextloader"), () => ParseHTMLIntoFakeRoot("<span class=\"relative inline-block align-bottom ${WrapperClasses}\">\r\n            <span ws-attr=\"SkeletonAttr\" class=\"block w-full h-full transition-opacity duration-500 ease-out\">\r\n                <span class=\"block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full\"></span>\r\n            </span>\r\n            <span ws-attr=\"ContentAttr\" class=\"absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center\">\r\n                <span ws-replace=\"Content\" class=\"w-full\"></span>\r\n            </span>\r\n        </span>"));
}
function loginprompt(h){
  return h?GetOrLoadTemplate("managesubscription", Some("loginprompt"), () => ParseHTMLIntoFakeRoot("<div class=\"rounded-xl border p-6 dark:border-gray-800 dark:text-white text-gray-800 max-w-lg mx-auto mt-12 animate-[fadeIn_0.5s_ease-out]\">\r\n        <h3 class=\"text-lg font-semibold mb-2\">\r\n            Please log in\r\n        </h3>\r\n\r\n        <p class=\"text-sm text-gray-600 dark:text-gray-400 mb-4\">\r\n            You need to be signed in to manage your subscription.\r\n        </p>\r\n\r\n        <button ws-onclick=\"LoginClick\" class=\"w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n            <span class=\"relative text-sm\">\r\n                Log in with GitHub\r\n            </span>\r\n        </button>\r\n    </div>"), h):PrepareTemplate("managesubscription", Some("loginprompt"), () => ParseHTMLIntoFakeRoot("<div class=\"rounded-xl border p-6 dark:border-gray-800 dark:text-white text-gray-800 max-w-lg mx-auto mt-12 animate-[fadeIn_0.5s_ease-out]\">\r\n        <h3 class=\"text-lg font-semibold mb-2\">\r\n            Please log in\r\n        </h3>\r\n\r\n        <p class=\"text-sm text-gray-600 dark:text-gray-400 mb-4\">\r\n            You need to be signed in to manage your subscription.\r\n        </p>\r\n\r\n        <button ws-onclick=\"LoginClick\" class=\"w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n            <span class=\"relative text-sm\">\r\n                Log in with GitHub\r\n            </span>\r\n        </button>\r\n    </div>"));
}
function nosubscriptionwidget(h){
  return h?GetOrLoadTemplate("managesubscription", Some("nosubscriptionwidget"), () => ParseHTMLIntoFakeRoot("<div class=\"rounded-xl border p-10 dark:border-gray-800 dark:text-white text-gray-800 max-w-lg mx-auto mt-12 text-center animate-[fadeIn_0.5s_ease-out]\">\r\n        <div class=\"mb-4 flex justify-center text-gray-400 dark:text-gray-500\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-12\">\r\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z\"></path>\r\n            </svg>\r\n        </div>\r\n\r\n        <h2 class=\"text-2xl font-bold mb-3 text-gray-900 dark:text-white\">You have no active subscriptions</h2>\r\n\r\n        <p class=\"mb-8 text-gray-600 dark:text-gray-400 leading-relaxed\">\r\n            Start a subscription to unlock premium features, manage seats, and access your invoices directly from this dashboard.\r\n        </p>\r\n\r\n        <button ws-onclick=\"OnSubscribeClick\" class=\"mx-auto w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 transition-all\">\r\n            <span class=\"relative text-sm font-medium\">\r\n                View Plans & Subscribe\r\n            </span>\r\n        </button>\r\n    </div>"), h):PrepareTemplate("managesubscription", Some("nosubscriptionwidget"), () => ParseHTMLIntoFakeRoot("<div class=\"rounded-xl border p-10 dark:border-gray-800 dark:text-white text-gray-800 max-w-lg mx-auto mt-12 text-center animate-[fadeIn_0.5s_ease-out]\">\r\n        <div class=\"mb-4 flex justify-center text-gray-400 dark:text-gray-500\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewbox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-12\">\r\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z\"></path>\r\n            </svg>\r\n        </div>\r\n\r\n        <h2 class=\"text-2xl font-bold mb-3 text-gray-900 dark:text-white\">You have no active subscriptions</h2>\r\n\r\n        <p class=\"mb-8 text-gray-600 dark:text-gray-400 leading-relaxed\">\r\n            Start a subscription to unlock premium features, manage seats, and access your invoices directly from this dashboard.\r\n        </p>\r\n\r\n        <button ws-onclick=\"OnSubscribeClick\" class=\"mx-auto w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 transition-all\">\r\n            <span class=\"relative text-sm font-medium\">\r\n                View Plans & Subscribe\r\n            </span>\r\n        </button>\r\n    </div>"));
}
function authenticatedcontent(h){
  return h?GetOrLoadTemplate("managesubscription", Some("authenticatedcontent"), () => ParseHTMLIntoFakeRoot("<div class=\"grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] animate-[fadeIn_0.5s_ease-out]\">\r\n        <aside class=\"lg:sticky lg:top-24 h-max\">\r\n            <nav aria-label=\"Settings\" class=\"rounded-xl border border-gray-200 p-3 dark:border-gray-800\">\r\n                <ul class=\"space-y-1 text-sm\">\r\n                    <li>\r\n                        <button data-nav=\"subs\" class=\"settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5\" ws-onclick=\"GoSubs\" ws-attr=\"SubsTabAttr\">\r\n                            My subscriptions\r\n                        </button>\r\n                    </li>\r\n                    <li>\r\n                        <button data-nav=\"billing\" class=\"settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5\" ws-onclick=\"GoBilling\" ws-attr=\"BillingTabAttr\">\r\n                            Billing information\r\n                        </button>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n        </aside>\r\n\r\n        <section>\r\n            <div data-page=\"subs\" ws-attr=\"SubsPageAttr\" class=\"space-y-6 hidden\">\r\n\r\n                <div ws-replace=\"GitHubOrg\"></div>\r\n\r\n                \r\n\r\n                \r\n\r\n                \r\n\r\n                <div class=\"flex flex-wrap items-center justify-between gap-3\">\r\n                    <div>\r\n                        <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">Seats &amp; Access</h1>\r\n                        <p class=\"text-sm text-gray-600 dark:text-gray-400\">Manage GitHub access for your WebSharper subscription.</p>\r\n                    </div>\r\n                    <button ws-onclick=\"OpenCustomerPortal\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                        Manage billing in Stripe\r\n                    </button>\r\n                </div>\r\n\r\n                <section class=\"rounded-xl border border-gray-200 overflow-hidden dark:border-gray-800\">\r\n                    <div class=\"flex flex-wrap items-start justify-between gap-4 px-4 py-4\">\r\n                        <div>\r\n                            <h2 class=\"font-semibold text-gray-900 dark:text-white\">Add seats</h2>\r\n                            <p class=\"mt-1 text-sm text-gray-600 dark:text-gray-400\">You can add more Professional seats in this section. Each new seat is valid for one year.</p>\r\n                        </div>\r\n                        <div>\r\n                            <button ws-onclick=\"AddSeatsClick\" ws-attr=\"AddSeatsButtonAttr\" class=\"w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                                <span class=\"relative text-sm\">Add seats</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mt-4 overflow-x-auto\">\r\n                        <table class=\"w-full text-sm\">\r\n                            <thead class=\"bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300\">\r\n                                <tr>\r\n                                    <th class=\"px-4 py-3 text-left\">Seat</th>\r\n                                    <th class=\"px-4 py-3 text-center\">GitHub username</th>\r\n                                    <th class=\"px-4 py-3 text-center\">Status</th>\r\n                                    <th class=\"px-4 py-3 text-center\">Expiry</th>\r\n                                    <th class=\"px-4 py-3 text-right\">Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody ws-hole=\"SeatsBody\" class=\"divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n\r\n                                \r\n\r\n                                \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </section>\r\n\r\n                <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <div class=\"flex items-center justify-between\">\r\n                        <h2 class=\"font-semibold text-gray-900 dark:text-white\">Invoices</h2>\r\n                        <button ws-onclick=\"RefreshClick\" class=\"rounded-xl h-10 px-4 border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white\">Refresh</button>\r\n                    </div>\r\n                    <div class=\"mt-4 overflow-x-auto\">\r\n                        <table class=\"w-full text-sm\">\r\n                            <thead class=\"bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300\">\r\n                                <tr>\r\n                                    <th class=\"px-4 py-3 text-left\">Invoice</th>\r\n                                    <th class=\"px-4 py-3 text-left\">Date</th>\r\n                                    <th class=\"px-4 py-3 text-left\">Amount</th>\r\n                                    <th class=\"px-4 py-3 text-left\">Status</th>\r\n                                    <th class=\"px-4 py-3 text-right\">Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody ws-hole=\"InvoiceBody\" class=\"divide-y dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                                \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </section>\r\n\r\n                <section class=\"rounded-xl border border-red-200 p-5 dark:border-red-900/60\">\r\n                    <h2 class=\"font-semibold text-red-700 dark:text-red-400\">Danger zone</h2>\r\n                    <p class=\"mt-1 text-sm text-red-600 dark:text-red-300\">Unassign removes GitHub access for that seat. You can reassign anytime.</p>\r\n                </section>\r\n            </div>\r\n\r\n            <div data-page=\"billing\" ws-attr=\"BillingPageAttr\" class=\"space-y-6 hidden\">\r\n                <div class=\"flex flex-wrap items-center justify-between gap-3\">\r\n                    <div>\r\n                        <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">Billing information</h1>\r\n                        <p class=\"text-sm text-gray-600 dark:text-gray-400\">Update invoice recipient details, VAT number, and address used for future invoices.</p>\r\n                    </div>\r\n                    <div class=\"flex gap-2\">\r\n                        <button ws-onclick=\"BillingEditClick\" ws-attr=\"BtnBillingEditAttr\" class=\"rounded-lg h-10 px-4 border border-gray-300 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">Edit</button>\r\n                        <button ws-onclick=\"BillingCancelClick\" ws-attr=\"BtnBillingCancelAttr\" class=\"hidden rounded-lg h-10 px-4 border border-gray-300 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">Cancel</button>\r\n                        <button ws-onclick=\"BillingSaveClick\" ws-attr=\"BtnBillingSaveAttr\" class=\"hidden rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                            <span class=\"relative text-sm\">Save</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <div ws-attr=\"BillingViewAttr\" class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm\">\r\n                        <div>\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">Company / Full name</div>\r\n                            <div ws-hole=\"BillingNameView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">VAT / Tax ID</div>\r\n                            <div ws-hole=\"BillingVatinView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                        <div class=\"sm:col-span-2\">\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">Address line 1</div>\r\n                            <div ws-hole=\"BillingLine1View\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">City</div>\r\n                            <div ws-hole=\"BillingCityView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">Postal code</div>\r\n                            <div ws-hole=\"BillingPostalView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">Country</div>\r\n                            <div ws-hole=\"BillingCountryView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div ws-attr=\"BillingEditAttr\" class=\"hidden mt-4\">\r\n                        <form class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\r\n                            <div>\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">Company / Full name</label>\r\n                                <input ws-var=\"BillingNameVar\" name=\"name\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n                            <div>\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">VAT / Tax ID</label>\r\n                                <input ws-var=\"BillingVatinVar\" name=\"vatin\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n                            <div class=\"sm:col-span-2\">\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">Address line 1</label>\r\n                                <input ws-var=\"BillingLine1Var\" name=\"line1\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n                            <div>\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">City</label>\r\n                                <input ws-var=\"BillingCityVar\" name=\"city\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n                            <div>\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">Postal code</label>\r\n                                <input ws-var=\"BillingPostalVar\" name=\"postal_code\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n                            <div>\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">Country</label>\r\n                                <div class=\"relative\">\r\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"absolute pointer-events-none inset-y-0 my-auto right-3 size-4 text-gray-500 dark:text-gray-400\">\r\n                                        <path fill-rule=\"evenodd\" d=\"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"></path>\r\n                                    </svg>\r\n                                    <select ws-var=\"BillingCountryVar\" name=\"country\" class=\"cursor-pointer w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                                        <option value=\"\" disabled=\"\" selected=\"\">Select your country</option>\r\n                                        <div ws-replace=\"CountryOptions\"></div>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        </section>\r\n    </div>"), h):PrepareTemplate("managesubscription", Some("authenticatedcontent"), () => ParseHTMLIntoFakeRoot("<div class=\"grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] animate-[fadeIn_0.5s_ease-out]\">\r\n        <aside class=\"lg:sticky lg:top-24 h-max\">\r\n            <nav aria-label=\"Settings\" class=\"rounded-xl border border-gray-200 p-3 dark:border-gray-800\">\r\n                <ul class=\"space-y-1 text-sm\">\r\n                    <li>\r\n                        <button data-nav=\"subs\" class=\"settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5\" ws-onclick=\"GoSubs\" ws-attr=\"SubsTabAttr\">\r\n                            My subscriptions\r\n                        </button>\r\n                    </li>\r\n                    <li>\r\n                        <button data-nav=\"billing\" class=\"settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5\" ws-onclick=\"GoBilling\" ws-attr=\"BillingTabAttr\">\r\n                            Billing information\r\n                        </button>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n        </aside>\r\n\r\n        <section>\r\n            <div data-page=\"subs\" ws-attr=\"SubsPageAttr\" class=\"space-y-6 hidden\">\r\n\r\n                <div ws-replace=\"GitHubOrg\"></div>\r\n\r\n                \r\n\r\n                \r\n\r\n                \r\n\r\n                <div class=\"flex flex-wrap items-center justify-between gap-3\">\r\n                    <div>\r\n                        <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">Seats &amp; Access</h1>\r\n                        <p class=\"text-sm text-gray-600 dark:text-gray-400\">Manage GitHub access for your WebSharper subscription.</p>\r\n                    </div>\r\n                    <button ws-onclick=\"OpenCustomerPortal\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                        Manage billing in Stripe\r\n                    </button>\r\n                </div>\r\n\r\n                <section class=\"rounded-xl border border-gray-200 overflow-hidden dark:border-gray-800\">\r\n                    <div class=\"flex flex-wrap items-start justify-between gap-4 px-4 py-4\">\r\n                        <div>\r\n                            <h2 class=\"font-semibold text-gray-900 dark:text-white\">Add seats</h2>\r\n                            <p class=\"mt-1 text-sm text-gray-600 dark:text-gray-400\">You can add more Professional seats in this section. Each new seat is valid for one year.</p>\r\n                        </div>\r\n                        <div>\r\n                            <button ws-onclick=\"AddSeatsClick\" ws-attr=\"AddSeatsButtonAttr\" class=\"w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                                <span class=\"relative text-sm\">Add seats</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mt-4 overflow-x-auto\">\r\n                        <table class=\"w-full text-sm\">\r\n                            <thead class=\"bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300\">\r\n                                <tr>\r\n                                    <th class=\"px-4 py-3 text-left\">Seat</th>\r\n                                    <th class=\"px-4 py-3 text-center\">GitHub username</th>\r\n                                    <th class=\"px-4 py-3 text-center\">Status</th>\r\n                                    <th class=\"px-4 py-3 text-center\">Expiry</th>\r\n                                    <th class=\"px-4 py-3 text-right\">Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody ws-hole=\"SeatsBody\" class=\"divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n\r\n                                \r\n\r\n                                \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </section>\r\n\r\n                <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <div class=\"flex items-center justify-between\">\r\n                        <h2 class=\"font-semibold text-gray-900 dark:text-white\">Invoices</h2>\r\n                        <button ws-onclick=\"RefreshClick\" class=\"rounded-xl h-10 px-4 border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white\">Refresh</button>\r\n                    </div>\r\n                    <div class=\"mt-4 overflow-x-auto\">\r\n                        <table class=\"w-full text-sm\">\r\n                            <thead class=\"bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300\">\r\n                                <tr>\r\n                                    <th class=\"px-4 py-3 text-left\">Invoice</th>\r\n                                    <th class=\"px-4 py-3 text-left\">Date</th>\r\n                                    <th class=\"px-4 py-3 text-left\">Amount</th>\r\n                                    <th class=\"px-4 py-3 text-left\">Status</th>\r\n                                    <th class=\"px-4 py-3 text-right\">Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody ws-hole=\"InvoiceBody\" class=\"divide-y dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                                \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </section>\r\n\r\n                <section class=\"rounded-xl border border-red-200 p-5 dark:border-red-900/60\">\r\n                    <h2 class=\"font-semibold text-red-700 dark:text-red-400\">Danger zone</h2>\r\n                    <p class=\"mt-1 text-sm text-red-600 dark:text-red-300\">Unassign removes GitHub access for that seat. You can reassign anytime.</p>\r\n                </section>\r\n            </div>\r\n\r\n            <div data-page=\"billing\" ws-attr=\"BillingPageAttr\" class=\"space-y-6 hidden\">\r\n                <div class=\"flex flex-wrap items-center justify-between gap-3\">\r\n                    <div>\r\n                        <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">Billing information</h1>\r\n                        <p class=\"text-sm text-gray-600 dark:text-gray-400\">Update invoice recipient details, VAT number, and address used for future invoices.</p>\r\n                    </div>\r\n                    <div class=\"flex gap-2\">\r\n                        <button ws-onclick=\"BillingEditClick\" ws-attr=\"BtnBillingEditAttr\" class=\"rounded-lg h-10 px-4 border border-gray-300 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">Edit</button>\r\n                        <button ws-onclick=\"BillingCancelClick\" ws-attr=\"BtnBillingCancelAttr\" class=\"hidden rounded-lg h-10 px-4 border border-gray-300 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">Cancel</button>\r\n                        <button ws-onclick=\"BillingSaveClick\" ws-attr=\"BtnBillingSaveAttr\" class=\"hidden rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300\">\r\n                            <span class=\"relative text-sm\">Save</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <section class=\"rounded-xl border border-gray-200 p-5 dark:border-gray-800\">\r\n                    <div ws-attr=\"BillingViewAttr\" class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm\">\r\n                        <div>\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">Company / Full name</div>\r\n                            <div ws-hole=\"BillingNameView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">VAT / Tax ID</div>\r\n                            <div ws-hole=\"BillingVatinView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                        <div class=\"sm:col-span-2\">\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">Address line 1</div>\r\n                            <div ws-hole=\"BillingLine1View\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">City</div>\r\n                            <div ws-hole=\"BillingCityView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">Postal code</div>\r\n                            <div ws-hole=\"BillingPostalView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"text-gray-600 dark:text-gray-400\">Country</div>\r\n                            <div ws-hole=\"BillingCountryView\" class=\"font-medium text-gray-900 dark:text-white\">\ufffd</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div ws-attr=\"BillingEditAttr\" class=\"hidden mt-4\">\r\n                        <form class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\r\n                            <div>\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">Company / Full name</label>\r\n                                <input ws-var=\"BillingNameVar\" name=\"name\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n                            <div>\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">VAT / Tax ID</label>\r\n                                <input ws-var=\"BillingVatinVar\" name=\"vatin\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n                            <div class=\"sm:col-span-2\">\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">Address line 1</label>\r\n                                <input ws-var=\"BillingLine1Var\" name=\"line1\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n                            <div>\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">City</label>\r\n                                <input ws-var=\"BillingCityVar\" name=\"city\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n                            <div>\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">Postal code</label>\r\n                                <input ws-var=\"BillingPostalVar\" name=\"postal_code\" class=\"w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                            </div>\r\n                            <div>\r\n                                <label class=\"block text-sm text-gray-600 dark:text-gray-300 mb-1\">Country</label>\r\n                                <div class=\"relative\">\r\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 16 16\" fill=\"currentColor\" class=\"absolute pointer-events-none inset-y-0 my-auto right-3 size-4 text-gray-500 dark:text-gray-400\">\r\n                                        <path fill-rule=\"evenodd\" d=\"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"></path>\r\n                                    </svg>\r\n                                    <select ws-var=\"BillingCountryVar\" name=\"country\" class=\"cursor-pointer w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\">\r\n                                        <option value=\"\" disabled=\"\" selected=\"\">Select your country</option>\r\n                                        <div ws-replace=\"CountryOptions\"></div>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        </section>\r\n    </div>"));
}
function DecodeJson_FSharpOption_1(){
  return Decoder_FSharpOption_1?Decoder_FSharpOption_1:Decoder_FSharpOption_1=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", Id_1(), 0]]]]))();
}
function DecodeJson_FSharpResult_4(){
  return Decoder_FSharpResult_4?Decoder_FSharpResult_4:Decoder_FSharpResult_4=(DecodeUnion(void 0, "$", [[0, [["$0", "ResultValue", Id_1(), 0]]], [1, [["$0", "ErrorValue", Id_1(), 0]]]]))();
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
function DecodeJson_Subscription(){
  return Decoder_Subscription?Decoder_Subscription:Decoder_Subscription=(DecodeRecord(void 0, [["subscriptionId", Id_1(), 0], ["planName", Id_1(), 0], ["currentPeriodEnd", Id_1(), 0], ["cancelAtPeriodEnd", Id_1(), 0], ["seats", Id_1(), 0], ["githubAssignedNames", DecodeArray(DecodeJson_FSharpOption_2), 0]]))();
}
function githubactive(h){
  return h?GetOrLoadTemplate("managesubscription", Some("githubactive"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div><h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1></div>\r\n                    <button ws-onclick=\"GoToGitHubOrg\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                        Go to GitHub organization\r\n                    </button>\r\n                </div>"), h):PrepareTemplate("managesubscription", Some("githubactive"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div><h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1></div>\r\n                    <button ws-onclick=\"GoToGitHubOrg\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                        Go to GitHub organization\r\n                    </button>\r\n                </div>"));
}
function githubpending(h){
  return h?GetOrLoadTemplate("managesubscription", Some("githubpending"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div><h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1></div>\r\n                    <div class=\"text-sm\">Pending: ${GitHubOrgName}</div>\r\n                </div>"), h):PrepareTemplate("managesubscription", Some("githubpending"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div><h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1></div>\r\n                    <div class=\"text-sm\">Pending: ${GitHubOrgName}</div>\r\n                </div>"));
}
function githubpendinginput(h){
  return h?GetOrLoadTemplate("managesubscription", Some("githubpendinginput"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div>\r\n                        <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1>\r\n                        <p class=\"text-sm text-gray-600 dark:text-gray-400\">No GitHub support organization is created for you yet. Please choose a name below.</p>\r\n                    </div>\r\n                    <div>\r\n                        <span class=\"text-sm\">IntelliFactory-</span>\r\n                        <input ws-var=\"GitHubOrgName\" class=\"w-64 hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" placeholder=\"github-orgname-suffix\">\r\n                    </div>\r\n                    <div>\r\n                        <span class=\"mt-1 text-sm text-red-600 dark:text-red-300 mr-2\">You can't change the name after you submit.</span>\r\n                        <button ws-onclick=\"SetGitHubOrgName\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                            Set GitHub organization name\r\n                        </button>\r\n                    </div>\r\n                </div>"), h):PrepareTemplate("managesubscription", Some("githubpendinginput"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div>\r\n                        <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1>\r\n                        <p class=\"text-sm text-gray-600 dark:text-gray-400\">No GitHub support organization is created for you yet. Please choose a name below.</p>\r\n                    </div>\r\n                    <div>\r\n                        <span class=\"text-sm\">IntelliFactory-</span>\r\n                        <input ws-var=\"GitHubOrgName\" class=\"w-64 hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" placeholder=\"github-orgname-suffix\">\r\n                    </div>\r\n                    <div>\r\n                        <span class=\"mt-1 text-sm text-red-600 dark:text-red-300 mr-2\">You can't change the name after you submit.</span>\r\n                        <button ws-onclick=\"SetGitHubOrgName\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                            Set GitHub organization name\r\n                        </button>\r\n                    </div>\r\n                </div>"));
}
function DecodeJson_PlanPrice(){
  return Decoder_PlanPrice?Decoder_PlanPrice:Decoder_PlanPrice=(DecodeRecord(void 0, [["code", Id_1(), 0], ["name", Id_1(), 0], ["description", Id_1(), 1], ["isPerSeat", Id_1(), 0], ["maxSeats", Id_1(), 1], ["interval", Id_1(), 0], ["currency", Id_1(), 0], ["unitAmountCents", Id_1(), 0]]))();
}
function DecodeJson_BillingData(){
  return Decoder_BillingData?Decoder_BillingData:Decoder_BillingData=(DecodeRecord(void 0, [["email", Id_1(), 0], ["line1", Id_1(), 0], ["city", Id_1(), 0], ["postalCode", Id_1(), 0], ["country", Id_1(), 0], ["companyName", Id_1(), 1], ["taxId", Id_1(), 1]]))();
}
function EncodeJson_BillingData(){
  return Encoder_BillingData?Encoder_BillingData:Encoder_BillingData=(EncodeRecord(void 0, [["email", Id_1(), 0], ["line1", Id_1(), 0], ["city", Id_1(), 0], ["postalCode", Id_1(), 0], ["country", Id_1(), 0], ["companyName", Id_1(), 1], ["taxId", Id_1(), 1]]))();
}
function DecodeJson_FSharpOption_2(){
  return Decoder_FSharpOption_2?Decoder_FSharpOption_2:Decoder_FSharpOption_2=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", Id_1(), 0]]]]))();
}
function seatgrouprow(h){
  return h?GetOrLoadTemplate("managesubscription", Some("seatgrouprow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                    <td colspan=\"5\" class=\"px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-100\">\r\n                                        <div class=\"flex items-center justify-between gap-4\">\r\n                                            <div class=\"text-xs sm:text-sm\">Expires on <span ws-replace=\"Expiry\"></span></div>\r\n                                            <div class=\"flex items-center gap-2\">\r\n                                                <span class=\"text-xs text-gray-600 dark:text-gray-300\">Renew automatically</span>\r\n                                                <button ws-onclick=\"ToggleAutoRenew\" class=\"${ToggleClasses}\"><span class=\"${DotClasses}\"></span></button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>"), h):PrepareTemplate("managesubscription", Some("seatgrouprow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                    <td colspan=\"5\" class=\"px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-100\">\r\n                                        <div class=\"flex items-center justify-between gap-4\">\r\n                                            <div class=\"text-xs sm:text-sm\">Expires on <span ws-replace=\"Expiry\"></span></div>\r\n                                            <div class=\"flex items-center gap-2\">\r\n                                                <span class=\"text-xs text-gray-600 dark:text-gray-300\">Renew automatically</span>\r\n                                                <button ws-onclick=\"ToggleAutoRenew\" class=\"${ToggleClasses}\"><span class=\"${DotClasses}\"></span></button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>"));
}
function seatrow(h){
  return h?GetOrLoadTemplate("managesubscription", Some("seatrow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                    <td class=\"px-4 py-3\" ws-hole=\"SeatLabel\"></td>\r\n\r\n                                    <td class=\"px-4 py-3\">\r\n                                        <div ws-replace=\"UsernameWidget\"></div>\r\n                                    </td>\r\n\r\n                                    <td class=\"px-4 py-3 text-center\"><span ws-hole=\"StatusBadge\"></span></td>\r\n\r\n                                    <td class=\"px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-center\" ws-hole=\"Expiry\"></td>\r\n\r\n                                    <td class=\"px-4 py-3 text-right whitespace-nowrap\">\r\n                                        <button class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20 mr-2\" ws-onclick=\"AssignSeat\" ws-attr=\"AssignButtonAttr\">Assign</button>\r\n                                        <button class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20\" ws-onclick=\"UnassignSeat\" ws-attr=\"UnassignButtonAttr\">Unassign</button>\r\n                                    </td>\r\n                                </tr>"), h):PrepareTemplate("managesubscription", Some("seatrow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                    <td class=\"px-4 py-3\" ws-hole=\"SeatLabel\"></td>\r\n\r\n                                    <td class=\"px-4 py-3\">\r\n                                        <div ws-replace=\"UsernameWidget\"></div>\r\n                                    </td>\r\n\r\n                                    <td class=\"px-4 py-3 text-center\"><span ws-hole=\"StatusBadge\"></span></td>\r\n\r\n                                    <td class=\"px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-center\" ws-hole=\"Expiry\"></td>\r\n\r\n                                    <td class=\"px-4 py-3 text-right whitespace-nowrap\">\r\n                                        <button class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20 mr-2\" ws-onclick=\"AssignSeat\" ws-attr=\"AssignButtonAttr\">Assign</button>\r\n                                        <button class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20\" ws-onclick=\"UnassignSeat\" ws-attr=\"UnassignButtonAttr\">Unassign</button>\r\n                                    </td>\r\n                                </tr>"));
}
function invoicerow(h){
  return h?GetOrLoadTemplate("managesubscription", Some("invoicerow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                    <td class=\"px-4 py-3\">${InvoiceId}</td>\r\n                                    <td class=\"px-4 py-3\">${Date}</td>\r\n                                    <td class=\"px-4 py-3\">${Amount}</td>\r\n                                    <td class=\"px-4 py-3 capitalize\">${Status}</td>\r\n                                    <td class=\"px-4 py-3 text-right\">\r\n                                        <a class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20\" href=\"${Href}\" target=\"_blank\" rel=\"noopener\">View</a>\r\n                                    </td>\r\n                                </tr>"), h):PrepareTemplate("managesubscription", Some("invoicerow"), () => ParseHTMLIntoFakeRoot("<tr>\r\n                                    <td class=\"px-4 py-3\">${InvoiceId}</td>\r\n                                    <td class=\"px-4 py-3\">${Date}</td>\r\n                                    <td class=\"px-4 py-3\">${Amount}</td>\r\n                                    <td class=\"px-4 py-3 capitalize\">${Status}</td>\r\n                                    <td class=\"px-4 py-3 text-right\">\r\n                                        <a class=\"rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20\" href=\"${Href}\" target=\"_blank\" rel=\"noopener\">View</a>\r\n                                    </td>\r\n                                </tr>"));
}
function DecodeJson_FSharpResult_3(){
  return Decoder_FSharpResult_3?Decoder_FSharpResult_3:Decoder_FSharpResult_3=(DecodeUnion(void 0, "$", [[0, [["$0", "ResultValue", Id_1(), 0]]], [1, [["$0", "ErrorValue", Id_1(), 0]]]]))();
}
function DecodeJson_FSharpOption_3(){
  return Decoder_FSharpOption_3?Decoder_FSharpOption_3:Decoder_FSharpOption_3=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", DecodeJson_GitHubOrg, 0]]]]))();
}
function smoothtextloader_1(h){
  return h?GetOrLoadTemplate("managesubscription", Some("smoothtextloader"), () => ParseHTMLIntoFakeRoot("<span class=\"relative inline-block align-bottom ${WrapperClasses}\">\r\n        <span ws-attr=\"SkeletonAttr\" class=\"block w-full h-full transition-opacity duration-500 ease-out\">\r\n            <span class=\"block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full\"></span>\r\n        </span>\r\n        <span ws-attr=\"ContentAttr\" class=\"absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center\">\r\n            <span ws-replace=\"Content\" class=\"w-full\"></span>\r\n        </span>\r\n    </span>"), h):PrepareTemplate("managesubscription", Some("smoothtextloader"), () => ParseHTMLIntoFakeRoot("<span class=\"relative inline-block align-bottom ${WrapperClasses}\">\r\n        <span ws-attr=\"SkeletonAttr\" class=\"block w-full h-full transition-opacity duration-500 ease-out\">\r\n            <span class=\"block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full\"></span>\r\n        </span>\r\n        <span ws-attr=\"ContentAttr\" class=\"absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center\">\r\n            <span ws-replace=\"Content\" class=\"w-full\"></span>\r\n        </span>\r\n    </span>"));
}
function DecodeJson_GitHubOrg(){
  return Decoder_GitHubOrg?Decoder_GitHubOrg:Decoder_GitHubOrg=(DecodeRecord(void 0, [["name", Id_1(), 1], ["status", DecodeJson_GitHubOrgStatus, 0]]))();
}
function DecodeJson_GitHubOrgStatus(){
  return Decoder_GitHubOrgStatus?Decoder_GitHubOrgStatus:Decoder_GitHubOrgStatus=(DecodeUnion((o) => Create_2(GitHubOrgStatus, o), "$", [null, null]))();
}
function BillToVat(){
  return _c_4.BillToVat;
}
function BillToAddr(){
  return _c_4.BillToAddr;
}
function BillToName(){
  return _c_4.BillToName;
}
function InvSub(){
  return _c_4.InvSub;
}
function InvAmount(){
  return _c_4.InvAmount;
}
function InvStatus(){
  return _c_4.InvStatus;
}
function InvDate(){
  return _c_4.InvDate;
}
function InvId(){
  return _c_4.InvId;
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
                  return Return(Some(inv.subscription==null?New_1(inv.id, inv.date, inv.amount, inv.currency, inv.status, Some(subId), inv.billingAddress, inv.company):inv));
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
  return _c_4.invoiceVar;
}
function money(cents, ccy){
  return String(cents/100)+" "+(IsNullOrWhiteSpace(ccy)?"USD":ccy.toUpperCase());
}
function getInvoiceIdFromQuery(){
  const id=(new URLSearchParams(globalThis.location.search)).get("id");
  return id==null||id==""?null:Some(id);
}
function ManageSubscriptionDoc(){
  const b=new ProviderBuilder("New_1");
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], skeleton(p[0]));
  let _2=(b.i=i,i);
  const skeletonDoc=_2.Doc;
  const C=Doc.EmbedView(Map3(renderContent, isLoading_1().View, IsAuthedView(), SubsVar().View));
  const S=DynamicClassPred("hidden", Map((v) =>!v, isLoading_1().View));
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new Elt("skeleton", skeletonDoc)),this_1);
  const this_3=(this_2.h.push(new Attribute("skeletonattr", S)),this_2);
  const b_1=(this_3.h.push(new Elt("content", C)),this_3);
  const p_1=CompleteHoles(b_1.k, b_1.h, []);
  const i_1=new TemplateInstance(p_1[1], contentwrapper(p_1[0]));
  let _3=(b_1.i=i_1,i_1);
  const M=_3.Doc;
  const this_4=new ProviderBuilder("New_1");
  const this_5=(this_4.h.push(new AfterRenderQ("onafterrender", "", () => {
    Init_4();
  })),this_4);
  const this_6=(this_5.h.push(new Elt("maincontent", M)),this_5);
  const this_7=(this_6.h.push(new Attribute("toastattr", ToastAttr())),this_6);
  const b_2=(this_7.h.push(new Elt("toasttext", ToastText())),this_7);
  const p_2=CompleteHoles(b_2.k, b_2.h, []);
  const i_2=new TemplateInstance(p_2[1], t(p_2[0]));
  let _4=(b_2.i=i_2,i_2);
  return _4.Doc;
}
function Init_4(){
  (requireAuth().then(() => loadAllAfterAuth()))["catch"](() => isLoading_1().Set(false));
}
function isLoading_1(){
  return _c_17.isLoading;
}
function renderContent(loading, loggedIn, subs){
  if(loading){
    const b=new ProviderBuilder("New_1");
    const p=CompleteHoles(b.k, b.h, []);
    const i=new TemplateInstance(p[1], skeleton(p[0]));
    let _2=(b.i=i,i);
    return _2.Doc;
  }
  else if(!loggedIn){
    const t_1=new ProviderBuilder("New_1");
    const b_1=(t_1.h.push(EventQ2(t_1.k, "loginclick", () => t_1.i, () => {
      LoginClick();
    })),t_1);
    const p_1=CompleteHoles(b_1.k, b_1.h, []);
    const i_1=new TemplateInstance(p_1[1], loginprompt(p_1[0]));
    let _3=(b_1.i=i_1,i_1);
    return _3.Doc;
  }
  else if(length(subs)===0){
    const t_2=new ProviderBuilder("New_1");
    const b_2=(t_2.h.push(EventQ2(t_2.k, "onsubscribeclick", () => t_2.i, () => {
      globalThis.location.href="/support#plans";
    })),t_2);
    const p_2=CompleteHoles(b_2.k, b_2.h, []);
    const i_2=new TemplateInstance(p_2[1], nosubscriptionwidget(p_2[0]));
    let _4=(b_2.i=i_2,i_2);
    return _4.Doc;
  }
  else {
    const t_3=new ProviderBuilder("New_1");
    const t_4=(t_3.h.push(EventQ2(t_3.k, "gosubs", () => t_3.i, () => {
      ShowSubsPage();
    })),t_3);
    const this_1=(t_4.h.push(EventQ2(t_4.k, "gobilling", () => t_4.i, () => {
      ShowBillingPage();
    })),t_4);
    const this_2=(this_1.h.push(new Attribute("substabattr", SubsTabAttr())),this_1);
    const this_3=(this_2.h.push(new Attribute("billingtabattr", BillingTabAttr())),this_2);
    const this_4=(this_3.h.push(new Attribute("subspageattr", SubsPageAttr())),this_3);
    const this_5=(this_4.h.push(new Attribute("billingpageattr", BillingPageAttr())),this_4);
    const t_5=(this_5.h.push(new Elt("githuborg", GitHubBody())),this_5);
    const this_6=(t_5.h.push(EventQ2(t_5.k, "opencustomerportal", () => t_5.i, () => {
      OpenCustomerPortal();
    })),t_5);
    const this_7=(this_6.h.push(new Elt("seatsbody", SeatsBody())),this_6);
    const this_8=(this_7.h.push(new Elt("invoicebody", InvoicesBody())),this_7);
    const this_9=(this_8.h.push(new Attribute("billingviewattr", BillingViewAttr())),this_8);
    const this_10=(this_9.h.push(new Attribute("billingeditattr", BillingEditAttr())),this_9);
    const this_11=(this_10.h.push(new Attribute("btnbillingeditattr", BtnBillingEditAttr())),this_10);
    const this_12=(this_11.h.push(new Attribute("btnbillingsaveattr", BtnBillingSaveAttr())),this_11);
    const t_6=(this_12.h.push(new Attribute("btnbillingcancelattr", BtnBillingCancelAttr())),this_12);
    const t_7=(t_6.h.push(EventQ2(t_6.k, "billingeditclick", () => t_6.i, () => {
      HandleBillingEdit();
    })),t_6);
    const t_8=(t_7.h.push(EventQ2(t_7.k, "billingsaveclick", () => t_7.i, () => {
      HandleBillingSave();
    })),t_7);
    const this_13=(t_8.h.push(EventQ2(t_8.k, "billingcancelclick", () => t_8.i, () => {
      HandleBillingCancel();
    })),t_8);
    const this_14=(this_13.h.push(new Elt("billingnameview", BillingNameView())),this_13);
    const this_15=(this_14.h.push(new Elt("billingvatinview", BillingVatinView())),this_14);
    const this_16=(this_15.h.push(new Elt("billingline1view", BillingLine1View())),this_15);
    const this_17=(this_16.h.push(new Elt("billingcityview", BillingCityView())),this_16);
    const this_18=(this_17.h.push(new Elt("billingpostalview", BillingPostalView())),this_17);
    const this_19=(this_18.h.push(new Elt("billingcountryview", BillingCountryView())),this_18);
    const this_20=(this_19.h.push(new VarStr("billingnamevar", CompanyNameVar_1())),this_19);
    const this_21=(this_20.h.push(new VarStr("billingvatinvar", CompanyVatinVar())),this_20);
    const this_22=(this_21.h.push(new VarStr("billingline1var", _c_2.Lens(BillingRecordVar(), (_6) => _6.address.line1, (_6, _7) => New_5(_6.company, New_3(_7, _6.address.city, _6.address.postal_code, _6.address.country))))),this_21);
    const this_23=(this_22.h.push(new VarStr("billingcityvar", _c_2.Lens(BillingRecordVar(), (_6) => _6.address.city, (_6, _7) => New_5(_6.company, New_3(_6.address.line1, _7, _6.address.postal_code, _6.address.country))))),this_22);
    const this_24=(this_23.h.push(new VarStr("billingpostalvar", _c_2.Lens(BillingRecordVar(), (_6) => _6.address.postal_code, (_6, _7) => New_5(_6.company, New_3(_6.address.line1, _6.address.city, _7, _6.address.country))))),this_23);
    const this_25=(this_24.h.push(new VarStr("billingcountryvar", _c_2.Lens(BillingRecordVar(), (_6) => _6.address.country, (_6, _7) => New_5(_6.company, New_3(_6.address.line1, _6.address.city, _6.address.postal_code, _7))))),this_24);
    const t_9=(this_25.h.push(new Attribute("addseatsbuttonattr", AddSeatsButtonAttr())),this_25);
    const t_10=(t_9.h.push(EventQ2(t_9.k, "addseatsclick", () => t_9.i, () => {
      globalThis.location.href="./checkout?plan=pro&interval=year&seats=1";
    })),t_9);
    const b_3=(t_10.h.push(EventQ2(t_10.k, "refreshclick", () => t_10.i, () => {
      HandleRefresh();
    })),t_10);
    const p_3=CompleteHoles(b_3.k, b_3.h, [["billingnamevar", 0, null], ["billingvatinvar", 0, null], ["billingline1var", 0, null], ["billingcityvar", 0, null], ["billingpostalvar", 0, null], ["billingcountryvar", 0, Some("")]]);
    const i_3=new TemplateInstance(p_3[1], authenticatedcontent(p_3[0]));
    let _5=(b_3.i=i_3,i_3);
    return _5.Doc;
  }
}
function loadAllAfterAuth(){
  StartImmediate(Delay(() => TryFinally(Delay(() => Bind_1(loadSubscriptionsAsync(), () => {
    chooseCurrentSubscription();
    return length(SubsVar().Get())>0?Bind_1(Parallel([loadSeatsAsync(), loadInvoicesAsync(), loadBillingAsync(), loadCustomerPortalAsync(), loadGitHubOrg()]), () => Return(null)):Zero();
  })), () => {
    isLoading_1().Set(false);
  })), null);
}
function loadSubscriptionsAsync(){
  return Delay(() => Bind_1(ListSubscriptions(), (a) => {
    SubsVar().Set(a);
    RefreshSeats();
    return Zero();
  }));
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
  return _c_5.DetailsDoc;
}
function DetailsAttr(){
  return _c_5.DetailsAttr;
}
function MessageText(){
  return _c_5.MessageText;
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
  return _c_5.messageVar;
}
function fetchConfirmation(sessionId){
  return Delay(() => TryWith(Delay(() => Bind_1(ConfirmStripeOrder(sessionId), (a) => a.$==0?Return(Some(a.$0)):Return(null))), () => Return(null)));
}
function confirmationVar(){
  return _c_5.confirmationVar;
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
function filter(f, o){
  let _2;
  return o!=null&&o.$==1&&(f(o.$0)&&(_2=o.$0,true))?o:null;
}
class TemplateHole extends Object_1 {
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
  WithName(n){
    return new Attribute(n, this.fillWith);
  }
  get Name(){
    return this.name;
  }
  get Value(){
    return this.fillWith;
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
  WithName(n){
    return new TextView(n, this.fillWith);
  }
  get Name(){
    return this.name;
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
let _c_1=Lazy((_i) => class $StartupCode_AccountMenu {
  static {
    _c_1=_i(this);
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
    this.isOpen=_c_2.Create_1(false);
    this.userV=UserView();
    this.isAuthedV=IsAuthedView();
    this.isLoading=_c_2.Create_1(true);
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
  WithName(n){
    return new EventQ(n, this.key, this.fillWith);
  }
  get Name(){
    return this.name;
  }
  get Value(){
    return this.fillWith;
  }
  constructor(name, key, fillWith){
    super();
    this.name=name;
    this.key=key;
    this.fillWith=fillWith;
  }
}
function byId(id){
  return globalThis.document.getElementById(id);
}
function queryAll(root, selector){
  const nodes=root.querySelectorAll(selector);
  return delay(() => map_1((i) => nodes[i], range(0, toInt(nodes.length)-1)));
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
function alertErrorFromResult(res){
  handleErrorFromResult(res, (msg) => {
    sweetalert2.fire(swalDefaults("Error!", msg, "error"));
  });
}
function handleErrorFromResult(res, func){
  if(res.$==1)func(res.$0);
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
function OnAfterRender_3(callback){
  return Attr.A4(callback);
}
function DynamicProp(name, view){
  return Dynamic_1(view, (el) =>(v) => {
    el[name]=v;
  });
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
function Map3(fn, a, a_1, a_2){
  return CreateLazy(() => Map3_1(fn, a(), a_1(), a_2()));
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
        node=(_c_2.Set(n.r, x),n);
      }
      else node=ConvertSeqNode((v) => conv(k, v), x);
      newState.set_Item(k, node);
      return node.e;
    }, ofSeq(xs));
    state[0]=newState;
    return result;
  }, view);
}
function ConvertSeqNode(conv, value){
  const var_1=_c_2.Create_1(value);
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
  static A3(init_2){
    return Create_2(Attr, {$:3, $0:init_2});
  }
  static HandlerImpl(event, q){
    return Attr.A3((el) => {
      el.addEventListener(event, (d) =>(q(el))(d), false);
    });
  }
  static A4(onAfterRender){
    return Create_2(Attr, {$:4, $0:onAfterRender});
  }
  $;
  $0;
  $1;
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
  return Dynamic("href", Map2((_2, _3) =>"./checkout?plan=pro&interval="+String(intervalAsString(_2))+"&seats="+String(clampSeats(_3)), intervalVar().View, SeatCount()));
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
    return TryFinally(Delay(() => Bind_1(SendContact(form), (a) => a?(alert("Message sent successfully!"),resetForm(),Zero()):(alert("Failed to send message. Please try again later."),Zero()))), () => {
      IsSendingVar().Set(false);
    });
  }), null);
}
function resetForm(){
  ContactFormVar().Set(New("WebSharper support", "", "", "", "United States"));
}
let _c_2=Lazy((_i) => class Var_1 extends Object_1 {
  static {
    _c_2=_i(this);
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
        return var_1.Update((t_1) => update(t_1, v));
      }
      SetFinal(v){
        return this.Set(v);
      }
      Update(f){
        return var_1.Update((t_1) => update(t_1, f(get_1(t_1))));
      }
      UpdateMaybe(f){
        return var_1.UpdateMaybe((t_1) => {
          const x=f(get_1(t_1));
          return x==null?null:Some(update(t_1, x.$0));
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
  return Delay(() => Bind_1(LoadOrFetchPlans(), (a) => a==null?Zero():(buildCatalog(a.$0),Zero())));
}
function LoadOrFetchPlans(){
  return Delay(() => {
    const m=loadCache();
    return m==null?Bind_1(fetchFromApi(), (a) => {
      let _2;
      return a!=null&&a.$==1&&(length(a.$0)>0&&(_2=a.$0,true))?(saveCache(_2),Return(Some(_2))):Return(null);
    }):Return(Some(m.$0));
  });
}
function buildCatalog(items){
  catalogVar().Set(fold_1((_2, _3) => {
    const code=String(_3.code).toLowerCase();
    const intervalStr=String(_3.interval).toLowerCase();
    const pi=New_10(_3.unitAmountCents/100, (IsNullOrWhiteSpace(_3.currency)?"usd":_3.currency).toUpperCase());
    const nameOpt=nonEmptyOpt(_3.name);
    const m=_3.description;
    const descOpt=m==null?null:nonEmptyOpt(m.$0);
    return code=="pro"?New_9(updateEntryFromItem(_2.Pro, intervalStr, pi, nameOpt, descOpt), _2.Freelancer):code=="freelancer"?New_9(_2.Pro, updateEntryFromItem(_2.Freelancer, intervalStr, pi, nameOpt, descOpt)):_2;
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
function updateEntryFromItem(entry, intervalStr, pi, nameOpt, descOpt){
  const entry_1=New_8(nameOpt==null?entry.Name:Some(nameOpt.$0), descOpt==null?entry.Description:Some(descOpt.$0), entry.Month, entry.Year);
  return intervalStr=="month"?New_8(entry_1.Name, entry_1.Description, Some(pi), entry_1.Year):intervalStr=="year"?New_8(entry_1.Name, entry_1.Description, entry_1.Month, Some(pi)):entry_1;
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
function Some(Value_1){
  return{$:1, $0:Value_1};
}
function SeatsTextVar(){
  return _c_10.SeatsTextVar;
}
function VatinVar(){
  return _c_10.VatinVar;
}
function CompanyNameVar(){
  return _c_10.CompanyNameVar;
}
function IsCompanyVar(){
  return _c_10.IsCompanyVar;
}
function CountryVar(){
  return _c_10.CountryVar;
}
function PostalVar(){
  return _c_10.PostalVar;
}
function CityVar(){
  return _c_10.CityVar;
}
function StreetVar(){
  return _c_10.StreetVar;
}
function EmailVar(){
  return _c_10.EmailVar;
}
function ContinueText(){
  return _c_10.ContinueText;
}
function BackLinkLabel(){
  return _c_10.BackLinkLabel;
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
  let _2=CheckoutFormVar();
  const _3=CheckoutFormVar().Get();
  _2.Set(New_11(searchParams.plan, searchParams.interval, String(searchParams.seats), _3.email, _3.street, _3.city, _3.postal, _3.country, _3.isCompany, _3.companyName, _3.vatin));
}
function initFromApi(){
  return Delay(() => Bind_1(Delay(() => TryWith(Delay(() => GetBillingData()), () => Return(null))), (a) => {
    if(a!=null&&a.$==1){
      const data=a.$0;
      let _2=CheckoutFormVar();
      const _3=CheckoutFormVar().Get();
      const o=data.companyName;
      let _4=o==null?"":o.$0;
      const o_1=data.taxId;
      let _5=o_1==null?"":o_1.$0;
      let _6=New_11(_3.plan, _3.interval, _3.seatsText, data.email, data.line1, data.city, data.postalCode, data.country, data.companyName!=null, _4, _5);
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
      plansVar().Set(resp);
      return Zero();
    }
  }));
}
function ContinueDisabled(){
  return _c_10.ContinueDisabled;
}
function buildPayload(){
  const form=CheckoutFormVar().Get();
  const seatsToSend=clampSeats(parseSeats(form.seatsText));
  return New_14(form.plan.toLowerCase()=="freelancer"?"freelancer":"pro", intervalAsString(form.interval), form.plan.toLowerCase()=="freelancer"?1:seatsToSend, New_13(Trim(form.email), Trim(form.street), Trim(form.city), Trim(form.postal), form.country, form.isCompany?Some(Trim(form.companyName)):null, form.isCompany?Some(Trim(form.vatin)):null));
}
function SelectedPlanVar(){
  return _c_10.SelectedPlanVar;
}
function CheckoutFormVar(){
  return _c_10.CheckoutFormVar;
}
function backLinkHref(){
  return _c_10.backLinkHref;
}
function readParams(){
  let o;
  const queryParameters=new URLSearchParams(globalThis.location.search);
  const m=queryParameters.get("plan");
  let _2=!(m==null)&&m.toLowerCase()=="freelancer"?"freelancer":"pro";
  const m_1=queryParameters.get("interval");
  let _3=!(m_1==null)&&m_1.toLowerCase()=="month"?Month:Year;
  const m_2=(o=0,[TryParse(queryParameters.get("seats"), {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  let _4=m_2[0]?clampSeats(m_2[1]):1;
  return New_12(_2, _3, _4);
}
function plansVar(){
  return _c_10.plansVar;
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
  return _c_10.SelectedIntervalVar;
}
function BackLinkAttr(){
  return _c_11.BackLinkAttr;
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
function FormErrorDoc(){
  return _c_14.FormErrorDoc;
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
        return a!=null&&a.$==1&&(!IsNullOrWhiteSpace(a.$0)&&(_2=a.$0,true))?(globalThis.location.href=_2,resetContinueButton(),Zero()):(resetContinueButton(),Zero());
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
function OnSeatMinus_1(){
  AdjustSeats(-1, SeatsTextVar());
}
function OnSeatPlus_1(){
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
  return _c_14.FormError;
}
function isBlank(s){
  return IsNullOrWhiteSpace(s==null?"":s);
}
function CountryOptionsDoc(){
  return _c_15.CountryOptionsDoc;
}
function PlanName(){
  return _c_15.PlanName;
}
function PlanPrice(){
  return _c_15.PlanPrice;
}
function PlanInterval(){
  return _c_15.PlanInterval;
}
function PriceHint(){
  return _c_15.PriceHint;
}
function Subtotal(){
  return _c_15.Subtotal;
}
function Taxes(){
  return _c_15.Taxes;
}
function Total(){
  return _c_15.Total;
}
function CurrentPlan(){
  return _c_15.CurrentPlan;
}
function Seats(){
  return _c_15.Seats;
}
function IsPerSeat(){
  return _c_15.IsPerSeat;
}
function SubtotalRaw(){
  return _c_15.SubtotalRaw;
}
function VatPercentage(){
  return _c_15.VatPercentage;
}
function TaxesRaw(){
  return _c_15.TaxesRaw;
}
function TotalRaw(){
  return _c_15.TotalRaw;
}
class Elt extends TemplateHole {
  name;
  fillWith;
  WithName(n){
    return new Elt(n, this.fillWith);
  }
  get Name(){
    return this.name;
  }
  get Value(){
    return this.fillWith;
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
  WithName(n){
    return new AfterRenderQ(n, this.key, this.fillWith);
  }
  get Name(){
    return this.name;
  }
  get Value(){
    return this.fillWith;
  }
  constructor(name, key, fillWith){
    super();
    this.name=name;
    this.key=key;
    this.fillWith=fillWith;
  }
}
let _c_3=Lazy((_i) => class $StartupCode_Error {
  static {
    _c_3=_i(this);
  }
  static Message;
  static Title;
  static isAuthErrorVar;
  static previousVar;
  static msgVar;
  static titleVar;
  static {
    this.titleVar=_c_2.Create_1("Something went wrong");
    this.msgVar=_c_2.Create_1("An unexpected error occurred. Please try again.");
    this.previousVar=_c_2.Create_1("/");
    this.isAuthErrorVar=_c_2.Create_1(false);
    this.Title=titleVar().View;
    this.Message=msgVar().View;
  }
});
let _c_4=Lazy((_i) => class $StartupCode_Invoices {
  static {
    _c_4=_i(this);
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
    this.invoiceVar=_c_2.Create_1(null);
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
          return concat(", ", filter_1((s) =>!IsNullOrWhiteSpace(s), ofArray([billing.line1, billing.postal_code, billing.city, billing.country])));
        }
      }
    }, invoiceVar().View));
  }
});
function ToastText(){
  return _c_16.ToastText;
}
function ToastAttr(){
  return _c_16.ToastAttr;
}
function BillingPageAttr(){
  return _c_16.BillingPageAttr;
}
function SubsPageAttr(){
  return _c_16.SubsPageAttr;
}
function BillingTabAttr(){
  return _c_16.BillingTabAttr;
}
function SubsTabAttr(){
  return _c_16.SubsTabAttr;
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
function ActivePage(){
  return _c_16.ActivePage;
}
function ToastMessage(){
  return _c_16.ToastMessage;
}
function showToast(msg){
  const msg_1=IsNullOrWhiteSpace(msg)?"Saved":msg;
  ToastMessage().Set(Some(msg_1));
  setTimeout(() => {
    ToastMessage().Set(null);
  }, 1600);
}
function setLoading(on){
  IsLoading_1().Set(on);
}
function IsLoading_1(){
  return _c_16.IsLoading;
}
function SubsVar(){
  return _c_18.SubsVar;
}
function UserVar(){
  return _c_18.UserVar;
}
function StateVar(){
  return _c_18.StateVar;
}
function CustomerPortalLinkVar(){
  return _c_18.CustomerPortalLinkVar;
}
function BillingVar(){
  return _c_18.BillingVar;
}
function CurrentSubIdVar(){
  return _c_18.CurrentSubIdVar;
}
function InvoicesVar(){
  return _c_18.InvoicesVar;
}
function SeatsVar(){
  return _c_18.SeatsVar;
}
function GitHubOrgVar(){
  return _c_18.GitHubOrgVar;
}
function formatMoney(amount, currency){
  const amountF=amount/100;
  const m=currency.toLowerCase();
  return m=="usd"?(((_2) =>(_3) => _2("$"+_3.toFixed(2)))((x) => x))(amountF):m=="eur"?(((_2) =>(_3) => _2("\u20ac"+_3.toFixed(2)))((x) => x))(amountF):m=="gbp"?(((_2) =>(_3) => _2("£"+_3.toFixed(2)))((x) => x))(amountF):((((_2) =>(_3) =>(_4) => _2(_3.toFixed(2)+" "+toSafe(_4)))((x) => x))(amountF))(currency);
}
let _c_5=Lazy((_i) => class $StartupCode_Success {
  static {
    _c_5=_i(this);
  }
  static DetailsDoc;
  static DetailsAttr;
  static MessageText;
  static messageVar;
  static confirmationVar;
  static {
    this.confirmationVar=_c_2.Create_1(null);
    this.messageVar=_c_2.Create_1("Confirming your payment\u2026");
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
function TryParse(s, r){
  return TryParse_1(s, -2147483648, 2147483647, r);
}
class Dictionary extends Object_1 {
  equals;
  hash;
  count;
  data;
  Item(k){
    return this.get(k);
  }
  set_Item(k, v){
    this.set(k, v);
  }
  get(k){
    const d=this.data[this.hash(k)];
    return d==null?notPresent():pick((a) => {
      const a_1=KeyValue(a);
      return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
    }, d);
  }
  ContainsKey(k){
    const d=this.data[this.hash(k)];
    return d==null?false:exists_1((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d);
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
      const v=tryPick_1((a) => {
        const a_1=KeyValue(a);
        return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
      }, d);
      return v!=null&&v.$==1&&(res.set(v.$0),true);
    }
  }
  GetEnumerator(){
    return Get0(concat_2(GetFieldValues(this.data)));
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
  remove(k){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null)return false;
    else {
      const r=filter_2((a) =>!this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      return length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true);
    }
  }
  DAdd(k, v){
    this.add(k, v);
  }
  Clear(){
    this.data=[];
    this.count=0;
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
let _c_6=Lazy((_i) => class $StartupCode_SnippetCode {
  static {
    _c_6=_i(this);
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
function StartImmediate(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  if(!ct.c)c(New_7((a) => {
    if(a.$==1)UncaughtAsyncError(a.$0);
  }, ct));
}
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
  return _c_19.Zero;
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
  return _c_19.defCTS;
}
function UncaughtAsyncError(e){
  console.log("WebSharper: Uncaught asynchronous exception", e);
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
function scheduler(){
  return _c_19.scheduler;
}
function noneCT(){
  return _c_19.noneCT;
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
  return _c_19.GetCT;
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
function EndsWith(x, s){
  return x.substring(x.length-s.length)==s;
}
function StartsWith(t_1, s){
  return t_1.substring(0, s.length)==s;
}
function IsNullOrEmpty(x){
  return x==null||x=="";
}
function SplitChars(s, sep, opts){
  return Split(s, new RegExp("["+RegexEscape(sep.join(""))+"]"), opts);
}
function forall(f, s){
  return forall_1(f, protect(s));
}
function Split(s, pat, opts){
  return opts===1?filter_2((x) => x!=="", SplitWith(s, pat)):SplitWith(s, pat);
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
function Substring(s, ix, ct){
  return s.substr(ix, ct);
}
class View { }
function Logout_2(){
  return(new AjaxRemotingProvider()).Async("IRemotingContract/Logout", []);
}
function Me(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/Me", []), (o) => Return((DecodeJson_FSharpOption_1())(o)));
}
function ConfirmStripeOrder(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/ConfirmStripeOrder", [_2]), (o) => Return((DecodeJson_FSharpResult_4())(o)));
}
function GetBillingData(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetBillingData", []), (o) => Return((DecodeJson_FSharpOption_4())(o)));
}
function StripeCheckout(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/StripeCheckout", [(EncodeJson_CheckoutRequest())(_2)]), (o) => Return((DecodeJson_FSharpResult_2())(o)));
}
function GetSubscriptions(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetSubscriptions", []), (o) => Return(((DecodeArray(DecodeJson_Subscription))())(o)));
}
function GetInvoices(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetInvoices", []), (o) => Return(o));
}
function GetPlanPrices(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetPlanPrices", []), (o) => Return(((DecodeArray(DecodeJson_PlanPrice))())(o)));
}
function SetBillingData(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/SetBillingData", [(EncodeJson_BillingData())(_2)]), (o) => Return((DecodeJson_FSharpResult_3())(o)));
}
function GetCustomerPortalLink(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetCustomerPortalLink", []), (o) => Return((DecodeJson_FSharpOption_2())(o)));
}
function GetGitHubOrg(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetGitHubOrg", []), (o) => Return((DecodeJson_FSharpOption_3())(o)));
}
function SetGitHubOrgName(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/SetGitHubOrgName", [_2]), (o) => Return((DecodeJson_FSharpResult_3())(o)));
}
function SetCancellationStatus(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/SetCancellationStatus", [_2]), (o) => Return((DecodeJson_FSharpResult_3())(o)));
}
function AddAssignment(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/AddAssignment", [_2]), (o) => Return((DecodeJson_FSharpResult_3())(o)));
}
function RevokeAssignment(_2){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/RevokeAssignment", [_2]), (o) => Return((DecodeJson_FSharpResult_3())(o)));
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
  return _c_25.EmptyAttr;
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
  let _2=New_19(elem, Flags(tree), arr, oar.length===0?null:Some((el) => {
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
  return New_19(e, 0, [], null);
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
  return _c_29.rhtml;
}
function wrapMap(){
  return _c_29.wrapMap;
}
function defaultWrap(){
  return _c_29.defaultWrap;
}
function rxhtmlTag(){
  return _c_29.rxhtmlTag;
}
function rtagName(){
  return _c_29.rtagName;
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
function mapInPlace(f, arr){
  for(let i=0, _2=arr.length-1;i<=_2;i++)arr[i]=f(arr[i]);
  return arr;
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
class VarStr extends TemplateHole {
  name;
  fillWith;
  WithName(n){
    return new VarStr(n, this.fillWith);
  }
  get Name(){
    return this.name;
  }
  ApplyVarHole(el){
    applyTypedVarHole(StringApply(), this.fillWith, el);
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
function Id(){
  set_counter(counter()+1);
  return"uid"+String(counter());
}
function set_counter(_2){
  _c_26.counter=_2;
}
function counter(){
  return _c_26.counter;
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
    this.fallbackPro=New_8(Some("Professional"), Some("Assign GitHub usernames after purchase"), Some(New_10(250, "USD")), Some(New_10(2500, "USD")));
    this.fallbackFreelancer=New_8(Some("Freelancer"), Some("Ideal for solo developers"), Some(New_10(30, "USD")), Some(New_10(300, "USD")));
    this.catalogVar=_c_2.Create_1(New_9(fallbackPro(), fallbackFreelancer()));
    this.intervalVar=_c_2.Create_1(Year);
    this.SeatCountText=_c_2.Create_1("1");
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
    this.ContactFormVar=_c_2.Create_1(New("WebSharper support", "", "", "", "United States"));
    this.IsSendingVar=_c_2.Create_1(false);
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
let _c_10=Lazy((_i) => class $StartupCode_CheckoutState {
  static {
    _c_10=_i(this);
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
    this.backLinkHref=_c_2.Create_1("/support#plans");
    this.BackLinkLabel=_c_2.Create_1("Plans");
    this.plansVar=_c_2.Create_1([]);
    this.CheckoutFormVar=_c_2.Create_1(New_11("pro", Year, "1", "", "", "", "", "HU", false, "", ""));
    this.SelectedPlanVar=_c_2.Lens(CheckoutFormVar(), (f) => f.plan, (_2, _3) => New_11(_3, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.SelectedIntervalVar=_c_2.Lens(CheckoutFormVar(), (f) => f.interval, (_2, _3) => New_11(_2.plan, _3, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.SeatsTextVar=_c_2.Lens(CheckoutFormVar(), (f) => f.seatsText, (_2, _3) => New_11(_2.plan, _2.interval, _3, _2.email, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.EmailVar=_c_2.Lens(CheckoutFormVar(), (f) => f.email, (_2, _3) => New_11(_2.plan, _2.interval, _2.seatsText, _3, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.StreetVar=_c_2.Lens(CheckoutFormVar(), (f) => f.street, (_2, _3) => New_11(_2.plan, _2.interval, _2.seatsText, _2.email, _3, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.CityVar=_c_2.Lens(CheckoutFormVar(), (f) => f.city, (_2, _3) => New_11(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _3, _2.postal, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.PostalVar=_c_2.Lens(CheckoutFormVar(), (f) => f.postal, (_2, _3) => New_11(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _3, _2.country, _2.isCompany, _2.companyName, _2.vatin));
    this.CountryVar=_c_2.Lens(CheckoutFormVar(), (f) => f.country, (_2, _3) => New_11(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _3, _2.isCompany, _2.companyName, _2.vatin));
    this.IsCompanyVar=_c_2.Lens(CheckoutFormVar(), (f) => f.isCompany, (_2, _3) => New_11(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _2.country, _3, _2.companyName, _2.vatin));
    this.CompanyNameVar=_c_2.Lens(CheckoutFormVar(), (f) => f.companyName, (_2, _3) => New_11(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _3, _2.vatin));
    this.VatinVar=_c_2.Lens(CheckoutFormVar(), (f) => f.vatin, (_2, _3) => New_11(_2.plan, _2.interval, _2.seatsText, _2.email, _2.street, _2.city, _2.postal, _2.country, _2.isCompany, _2.companyName, _3));
    this.ContinueText=_c_2.Create_1("Continue to payment");
    this.ContinueDisabled=_c_2.Create_1(false);
  }
});
let _c_11=Lazy((_i) => class Attrs {
  static {
    _c_11=_i(this);
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
let _c_12=Lazy((_i) => class $StartupCode_AuthClient {
  static {
    _c_12=_i(this);
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
    this.userVar=_c_2.Create_1(null);
    this.isFetchingVar=_c_2.Create_1(false);
    this.UserView=userVar().View;
    this.IsAuthedView=Map((o) => o!=null, userVar().View);
    this.IsFetchingView=isFetchingVar().View;
  }
});
let _c_13=Lazy((_i) => class $StartupCode_Page {
  static {
    _c_13=_i(this);
  }
  static IsLoading;
  static {
    this.IsLoading=_c_2.Create_1(true);
  }
});
let _c_14=Lazy((_i) => class $StartupCode_Controller {
  static {
    _c_14=_i(this);
  }
  static FormErrorDoc;
  static FormError;
  static {
    this.FormError=_c_2.Create_1(null);
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
  WithName(n){
    return new VarBool(n, this.fillWith);
  }
  get Name(){
    return this.name;
  }
  ApplyVarHole(el){
    applyTypedVarHole(BoolCheckedApply(), this.fillWith, el);
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
let _c_15=Lazy((_i) => class Pricing {
  static {
    _c_15=_i(this);
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
    this.PlanPrice=Map((planPriceOpt) => {
      const defaultAmount=SelectedIntervalVar().Get().$==1?2500:250;
      const o=planPriceOpt==null?null:Some(planPriceOpt.$0.unitAmountCents/100);
      let _2=o==null?defaultAmount:o.$0;
      return usd(_2);
    }, CurrentPlan());
    this.PlanInterval=Map((interval) => interval.$==1?"year":"month", SelectedIntervalVar().View);
    this.PriceHint=Map2((_2, _3) => {
      let _4;
      const o=_2==null?null:Some(_2.$0.unitAmountCents/100);
      const price=o==null?_3.$==1?2500:250:o.$0;
      const every=_3.$==1?"year":"month";
      return _2!=null&&_2.$==1&&(_2.$0.isPerSeat&&(_4=_2.$0,true))?((((_5) =>(_6) =>(_7) => _5("Price is "+toSafe(_6)+" per seat per "+toSafe(_7)+"."))((x) => x))(usd(price)))(every):((((_5) =>(_6) =>(_7) => _5("Price is "+toSafe(_6)+" per "+toSafe(_7)+"."))((x) => x))(usd(price)))(every);
    }, CurrentPlan(), SelectedIntervalVar().View);
    this.VatPercentage=Map3(getVATPercentage, CountryVar().View, IsCompanyVar().View, VatinVar().View);
    this.SubtotalRaw=Map3((_2, _3, _4) => {
      let _5=_3?clampSeats(_4):1;
      const o=_2==null?null:Some(_2.$0.unitAmountCents);
      let _6=o==null?250000:o.$0;
      let _7=_5*_6;
      return _7/100;
    }, CurrentPlan(), IsPerSeat(), Seats());
    this.Subtotal=Map(usd, SubtotalRaw());
    this.TaxesRaw=Map2((_2, _3) => Math.round(_2*_3/100), SubtotalRaw(), VatPercentage());
    this.Taxes=Map(usd, TaxesRaw());
    this.TotalRaw=Map2((_2, _3) => _2+_3, SubtotalRaw(), TaxesRaw());
    this.Total=Map(usd, TotalRaw());
    this.CountryOptionsDoc=map((_2) => Doc.Element("option", [Attr.Create("value", _2[0])], [Doc.TextNode(_2[1])]), List());
  }
});
function startCheckout(payload){
  return Delay(() => TryWith(Delay(() => Bind_1(StripeCheckout(payload), (a) => a.$==1?(alertError(a.$0),Return(null)):Return(Some(a.$0)))), () => {
    alertError("Something went wrong. Please contact support or try again later.");
    return Return(null);
  }));
}
function ofArray(arr){
  let r=FSharpList.Empty;
  for(let i=length(arr)-1, _2=0;i>=_2;i--)r=FSharpList.Cons(get(arr, i), r);
  return r;
}
function filter_1(p, x){
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
            const t_1=Create_2(FSharpList, {$:1});
            r=(r.$1=t_1,t_1);
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
function map(f, x){
  let r;
  let l;
  let go;
  if(x.$==0)return x;
  else {
    const res=Create_2(FSharpList, {$:1});
    r=res;
    l=x;
    go=true;
    while(go)
      {
        r.$0=f(l.$0);
        l=l.$1;
        if(l.$==0)go=false;
        else {
          const t_1=Create_2(FSharpList, {$:1});
          r=(r.$1=t_1,t_1);
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
function CreateTextNode(){
  return{
    Text:globalThis.document.createTextNode(""), 
    Dirty:false, 
    Value:""
  };
}
function UpdateTextNode(n, t_1){
  n.Value=t_1;
  n.Dirty=true;
}
function CreateEmbedNode(){
  return{Current:null, Dirty:false};
}
function UpdateEmbedNode(node, upd){
  node.Current=upd;
  node.Dirty=true;
}
function CreateRunState(parent, doc){
  return New_20(get_Empty_1(), CreateElemNode(parent, EmptyAttr(), doc));
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
function LinkPrevElement(el, children){
  InsertDoc(el.parentNode, children, el);
}
function CreateDelimitedRunState(ldelim, rdelim, doc){
  return New_20(get_Empty_1(), CreateDelimitedElemNode(ldelim, rdelim, EmptyAttr(), doc));
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
            const t_1=doc.$0;
            return t_1.Dirty||exists_1(hasDirtyChildren, t_1.Holes);
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
        const t_1=doc.$0;
        iter_1((h) => {
          SyncElemNode(false, h);
        }, t_1.Holes);
        iter_1((t_2) => {
          Sync(t_2[0], t_2[1]);
        }, t_1.Attrs);
        return AfterRender(t_1);
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
function InsertNode(parent, node, pos){
  InsertAt(parent, pos, node);
  return node;
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
          const t_1=doc.$0;
          if(t_1.Dirty)t_1.Dirty=false;
          return foldBack((_4, _5) => _4==null||_4.constructor===Object?ins(_4, _5):_4, t_1.Els, pos);
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
function delay(f){
  return{GetEnumerator:() => Get(f())};
}
function map_1(f, s){
  return{GetEnumerator:() => {
    const en=Get(s);
    return new T(null, null, (e) => en.MoveNext()&&(e.c=f(en.Current),true), () => {
      en.Dispose();
    });
  }};
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
  return concat_1(map_1(f, s));
}
function init(n, f){
  return take(n, initInfinite(f));
}
function head_1(s){
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
function tryPick(f, s){
  const e=Get(s);
  try {
    let r=null;
    while(Equals(r, null)&&e.MoveNext())
      r=f(e.Current);
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
function forall_1(p, s){
  return!exists((x) =>!p(x), s);
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
      q.push(head(l));
      l=tail(l);
    }
  return q;
}
function fold_1(f, zero, arr){
  let acc=zero;
  for(let i=0, _2=arr.length-1;i<=_2;i++)acc=f(acc, arr[i]);
  return acc;
}
function map_2(f, arr){
  const r=new Array(arr.length);
  for(let i=0, _2=arr.length-1;i<=_2;i++)r[i]=f(arr[i]);
  return r;
}
function pick(f, arr){
  const m=tryPick_1(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
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
function tryPick_1(f, arr){
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
function filter_2(f, arr){
  const r=[];
  for(let i=0, _2=arr.length-1;i<=_2;i++)if(f(arr[i]))r.push(arr[i]);
  return r;
}
function sortInPlaceBy(f, arr){
  mapInPlace_1((t_1) => t_1[0], mapiInPlace((_2, _3) =>[_3, [f(_3), _2]], arr).sort((_2, _3) => Compare(_2[1], _3[1])));
}
function foldBack(f, arr, zero){
  let acc=zero;
  const len=arr.length;
  for(let i=1, _2=len;i<=_2;i++)acc=f(arr[len-i], acc);
  return acc;
}
function collect_1(f, x){
  return Array.prototype.concat.apply([], map_2(f, x));
}
function mapi(f, arr){
  const y=new Array(arr.length);
  for(let i=0, _2=arr.length-1;i<=_2;i++)y[i]=f(i, arr[i]);
  return y;
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
function distinctBy_1(f, a){
  return ofSeq(distinctBy(f, a));
}
function create(size, value){
  const r=new Array(size);
  for(let i=0, _2=size-1;i<=_2;i++)r[i]=value;
  return r;
}
function init_1(size, f){
  if(size<0)FailWith("Negative size given.");
  else null;
  const r=new Array(size);
  for(let i=0, _2=size-1;i<=_2;i++)r[i]=f(i);
  return r;
}
class VarFloatUnchecked extends TemplateHole {
  name;
  fillWith;
  WithName(n){
    return new VarFloatUnchecked(n, this.fillWith);
  }
  get Name(){
    return this.name;
  }
  ApplyVarHole(el){
    applyTypedVarHole(FloatApplyUnchecked(), this.fillWith, el);
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
class VarDateTime extends TemplateHole {
  name;
  fillWith;
  WithName(n){
    return new VarDateTime(n, this.fillWith);
  }
  get Name(){
    return this.name;
  }
  ApplyVarHole(el){
    applyTypedVarHole(DateTimeApplyUnchecked(), this.fillWith, el);
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
  WithName(n){
    return new VarFile(n, this.fillWith);
  }
  get Name(){
    return this.name;
  }
  ApplyVarHole(el){
    applyTypedVarHole(FileApplyUnchecked(), this.fillWith, el);
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
  WithName(n){
    return new VarDomElement(n, this.fillWith);
  }
  get Name(){
    return this.name;
  }
  ApplyVarHole(el){ }
  get Value(){
    return this.fillWith;
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
class VarStrList extends TemplateHole {
  name;
  fillWith;
  WithName(n){
    return new VarStrList(n, this.fillWith);
  }
  get Name(){
    return this.name;
  }
  ApplyVarHole(el){
    applyTypedVarHole(StringListApply(), this.fillWith, el);
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
function GlobalHoles(){
  return _c_24.GlobalHoles;
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
              const t_1=d.Item(instName);
              const instance=t_1.cloneNode(true);
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
  return _c_24.RenderedFullDocTemplate;
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
  _c_24.RenderedFullDocTemplate=_2;
}
function LocalTemplatesLoaded(){
  return _c_24.LocalTemplatesLoaded;
}
function set_LocalTemplatesLoaded(_2){
  _c_24.LocalTemplatesLoaded=_2;
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
    prepareTemplate(head_1(rawTpls.Keys));
}
function LoadedTemplates(){
  return _c_24.LoadedTemplates;
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
      const value=foldBack((_11, _12) =>(((t_1) => {
        const textBefore_1=t_1[0];
        const holeName=t_1[1];
        return(t_2) => {
          let o;
          const textAfter=t_2[0];
          const views=t_2[1];
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
  const content_5=parent.content;
  for(let i=0, _2=content_5.childNodes.length-1;i<=_2;i++)fakeroot.appendChild(content_5.childNodes[i].cloneNode(true));
  return fakeroot;
}
function TextHoleRE(){
  return _c_24.TextHoleRE;
}
function foreachNotPreservedwsDOM(selector, f){
  IterSelectorDoc(selector, (p) => {
    if(p.closest("[ws-preserve]")==null)f(p);
  });
}
function New_1(id, date, amount, currency, status, subscription, billingAddress, company){
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
function New_2(name, vatin){
  return{name:name, vatin:vatin};
}
function New_3(line1, city, postal_code, country){
  return{
    line1:line1, 
    city:city, 
    postal_code:postal_code, 
    country:country
  };
}
function ListSubscriptions(){
  return Delay(() => Bind_1(GetSubscriptions(), (a) => Return(map_2(toSubRecord, a))));
}
function GetInvoices_1(){
  return Delay(() => Bind_1(GetInvoices(), (a) => Return(map_2((i) => New_1(i.title, i.date, i.amount, i.currency, i.status, null, null, null), a))));
}
function toSubRecord(subscription){
  return New_4(String(subscription.subscriptionId), (((((_2) =>(_3) =>(_4) =>(_5) => _2(toSafe(_3)+" ("+String(_4)+" seats) - "+toSafe(_5)))((x) => x))(subscription.planName))(subscription.seats))(subscription.currentPeriodEnd), subscription.planName, subscription.seats, subscription.currentPeriodEnd, subscription.cancelAtPeriodEnd?"canceling":"active");
}
function SaveBilling(data){
  return Delay(() => {
    const o=data.company;
    let _2=o==null?null:Some(o.$0.name);
    const o_1=data.company;
    let _3=o_1==null?null:Some(o_1.$0.vatin);
    let _4=New_13("", data.address.line1, data.address.city, data.address.postal_code, data.address.country, _2, _3);
    let _5=SetBillingData(_4);
    return Bind_1(_5, (a) => {
      alertErrorFromResult(a);
      return Combine(a.$==0?(set_billingCache(Some(data)),Zero()):Zero(), Delay(() => Return(a.$==0)));
    });
  });
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
        let _5=New_2(_3, _4);
        _2=Some(_5);
      }
      value=New_5(_2, New_3(data.line1, data.city, data.postalCode, data.country));
    }
    else value=New_5(null, New_3("", "", "", ""));
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
function SetGitHubOrgName_1(name){
  return Delay(() => Bind_1(SetGitHubOrgName(name), (a) => {
    alertErrorFromResult(a);
    return Return(a.$==0);
  }));
}
function set_billingCache(_2){
  _c_31.billingCache=_2;
}
function billingCache(){
  return _c_31.billingCache;
}
function GetAllSeats(){
  return Delay(() => Bind_1(GetSubscriptions(), (a) => Return(collect_1(seatsFromSubscription, a))));
}
function SetAutoRenew(subId, cancelAtPeriodEnd){
  return Delay(() => Bind_1(SetCancellationStatus(New_21(Parse(subId), cancelAtPeriodEnd)), (a) => {
    alertErrorFromResult(a);
    return Return(a.$==0);
  }));
}
function AssignSeat(subId, seatNo, username){
  return Delay(() => IsNullOrWhiteSpace(username)?Return(false):Bind_1(AddAssignment(New_22(Parse(subId), username, seatNo)), (a) => {
    handleErrorFromResult(a, (m) => {
      showToast(m);
    });
    return Return(a.$==0);
  }));
}
function UnassignSeat(subId, seatNo){
  return Delay(() => Bind_1(GetSubscriptions(), (a) => {
    const maybeSub=tryFind((s) => String(s.subscriptionId)==subId, a);
    if(maybeSub!=null&&maybeSub.$==1){
      const sub=maybeSub.$0;
      const idx=seatNo-1;
      if(idx>=0&&idx<length(sub.githubAssignedNames)){
        const o=get(sub.githubAssignedNames, idx);
        let _2=o==null?"":o.$0;
        let _3=New_22(sub.subscriptionId, _2, seatNo);
        let _4=RevokeAssignment(_3);
        return Bind_1(_4, (a_1) => {
          handleErrorFromResult(a_1, (m) => {
            showToast(m);
          });
          return Return(a_1.$==0);
        });
      }
      else return Return(false);
    }
    else return Return(false);
  }));
}
function seatsFromSubscription(subscription){
  return mapi((_2, _3) => New_16(_2+1, _3==null?"":_3.$0, _3!=null?"assigned":"available", subscription.currentPeriodEnd, !subscription.cancelAtPeriodEnd, String(subscription.subscriptionId)), subscription.githubAssignedNames);
}
function New_4(id, label, plan, totalSeats, renewsAt, status){
  return{
    id:id, 
    label:label, 
    plan:plan, 
    totalSeats:totalSeats, 
    renewsAt:renewsAt, 
    status:status
  };
}
let _c_16=Lazy((_i) => class $StartupCode_Views {
  static {
    _c_16=_i(this);
  }
  static ToastText;
  static ToastAttr;
  static BillingTabAttr;
  static SubsTabAttr;
  static BillingPageAttr;
  static SubsPageAttr;
  static ToastMessage;
  static IsLoading;
  static ActivePage;
  static {
    this.ActivePage=_c_2.Create_1(Subs);
    this.IsLoading=_c_2.Create_1(false);
    this.ToastMessage=_c_2.Create_1(null);
    this.SubsPageAttr=Dynamic("class", Map((page) => page.$===0?"space-y-6":"space-y-6 hidden", ActivePage().View));
    this.BillingPageAttr=Dynamic("class", Map((page) => page.$===1?"space-y-6":"space-y-6 hidden", ActivePage().View));
    const isActive=Map((page) => page.$===0, ActivePage().View);
    let _2=Attr.Concat([DynamicClassPred("bg-gray-100", isActive), DynamicClassPred("dark:bg-white/5", isActive)]);
    this.SubsTabAttr=_2;
    const isActive_1=Map((page) => page.$===1, ActivePage().View);
    let _3=Attr.Concat([DynamicClassPred("bg-gray-100", isActive_1), DynamicClassPred("dark:bg-white/5", isActive_1)]);
    this.BillingTabAttr=_3;
    this.ToastAttr=DynamicClassPred("hidden", Map((o) => o==null, ToastMessage().View));
    this.ToastText=Doc.TextView(Map((a) => a!=null&&a.$==1?!IsNullOrWhiteSpace(a.$0)?a.$0:"Saved":"Saved", ToastMessage().View));
  }
});
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
let _c_17=Lazy((_i) => class $StartupCode_ManageSubPage {
  static {
    _c_17=_i(this);
  }
  static isLoading;
  static {
    this.isLoading=_c_2.Create_1(true);
  }
});
let _c_18=Lazy((_i) => class $StartupCode_State {
  static {
    _c_18=_i(this);
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
    this.StateVar=_c_2.Create_1(New_15(null, [], "", [], [], null));
    this.UserVar=_c_2.Lens(StateVar(), (s) => s.user, (_2, _3) => New_15(_3, _2.subs, _2.currentSubId, _2.seats, _2.invoices, _2.billing));
    this.SubsVar=_c_2.Lens(StateVar(), (s) => s.subs, (_2, _3) => New_15(_2.user, _3, _2.currentSubId, _2.seats, _2.invoices, _2.billing));
    this.CurrentSubIdVar=_c_2.Lens(StateVar(), (s) => s.currentSubId, (_2, _3) => New_15(_2.user, _2.subs, _3, _2.seats, _2.invoices, _2.billing));
    this.SeatsVar=_c_2.Lens(StateVar(), (s) => s.seats, (_2, _3) => New_15(_2.user, _2.subs, _2.currentSubId, _3, _2.invoices, _2.billing));
    this.InvoicesVar=_c_2.Lens(StateVar(), (s) => s.invoices, (_2, _3) => New_15(_2.user, _2.subs, _2.currentSubId, _2.seats, _3, _2.billing));
    this.BillingVar=_c_2.Lens(StateVar(), (s) => s.billing, (_2, _3) => New_15(_2.user, _2.subs, _2.currentSubId, _2.seats, _2.invoices, _3));
    this.CustomerPortalLinkVar=_c_2.Create_1(null);
    this.GitHubOrgVar=_c_2.Create_1(null);
  }
});
function LoginClick(){
  Login();
}
function AddSeatsButtonAttr(){
  return _c_20.AddSeatsButtonAttr;
}
function SeatsBody(){
  return _c_20.SeatsBody;
}
function RefreshSeats(){
  StartImmediate(refreshSeatsAsync(), null);
}
function groupHeaderDoc(subId, expiry, autoRenew){
  const isProcessing=_c_2.Create_1(false);
  const baseBtn="relative inline-flex h-5 w-9 items-center rounded-full border text-xs transition-colors ";
  const baseDot="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ";
  const x=Doc.TextNode(expiry);
  const E=BindSmoothLoader_1("w-24 h-5", isProcessing.View, x);
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new Elt("expiry", E)),this_1);
  const this_3=(this_2.h.push(new Text("toggleclasses", autoRenew?baseBtn+"bg-emerald-500 border-emerald-500":baseBtn+"bg-gray-300 border-gray-400 dark:bg-gray-700 dark:border-gray-600")),this_2);
  const t_1=(this_3.h.push(new Text("dotclasses", autoRenew?baseDot+"translate-x-4":baseDot+"translate-x-0")),this_3);
  const b=(t_1.h.push(EventQ2(t_1.k, "toggleautorenew", () => t_1.i, () => {
    toggleAutoRenew(subId, expiry, autoRenew, isProcessing);
  })),t_1);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], seatgrouprow(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
function seatRowDoc(seat, isLocked){
  const isProcessing=_c_2.Create_1(false);
  const usernameVar=_c_2.Create_1(seat.username);
  const U=unassignButtonAttr(seat, isLocked, isProcessing.View);
  const A=assignButtonAttr(seat, isLocked, isProcessing.View);
  const x=Doc.TextNode(seat.expiry);
  const E=BindSmoothLoader_1("w-24 h-5", isProcessing.View, x);
  const x_1=seatBadge(seat.status);
  const S=BindSmoothLoader_1("w-16 h-6", isProcessing.View, x_1);
  const x_2=Doc.Input([Attr.Create("class", "w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm"), Attr.Create("placeholder", "github-username"), usernameAttr(seat, isLocked)], usernameVar);
  const U_1=BindSmoothLoader_1("w-full h-8", isProcessing.View, x_2);
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new Text("seatlabel", "#"+String(seat.seatNo))),this_1);
  const this_3=(this_2.h.push(new Elt("usernamewidget", U_1)),this_2);
  const this_4=(this_3.h.push(new Elt("statusbadge", S)),this_3);
  const this_5=(this_4.h.push(new Elt("expiry", E)),this_4);
  const this_6=(this_5.h.push(new Attribute("assignbuttonattr", A)),this_5);
  const t_1=(this_6.h.push(new Attribute("unassignbuttonattr", U)),this_6);
  const t_2=(t_1.h.push(EventQ2(t_1.k, "assignseat", () => t_1.i, () => {
    if(!isLocked)assignSeat(seat.subscriptionId, seat.seatNo, Trim(usernameVar.Get()).toLowerCase(), isProcessing);
  })),t_1);
  const b=(t_2.h.push(EventQ2(t_2.k, "unassignseat", () => t_2.i, () => {
    unassignSeat(seat.subscriptionId, seat.seatNo, isProcessing);
  })),t_2);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], seatrow(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
function seatGroupsDoc(){
  return _c_20.seatGroupsDoc;
}
function refreshSeatsAsync(){
  return Delay(() => Bind_1(GetAllSeats(), (a) => {
    SeatsVar().Set(a);
    return Zero();
  }));
}
function BindSmoothLoader_1(widthClass, isLoading_2, content_5){
  const C=ofArray([DynamicClassPred("opacity-0", isLoading_2), DynamicClassPred("pointer-events-none", isLoading_2)]);
  const S=ofArray([DynamicClassPred("opacity-0", Map((v) =>!v, isLoading_2)), Class("relative z-10 pointer-events-none")]);
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new Text("wrapperclasses", widthClass)),this_1);
  const this_3=(this_2.h.push(new Attribute("skeletonattr", Attr.Concat(S))),this_2);
  const this_4=(this_3.h.push(new Attribute("contentattr", Attr.Concat(C))),this_3);
  const b=(this_4.h.push(new Elt("content", content_5)),this_4);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], smoothtextloader_1(p[0]));
  let _2=(b.i=i,i);
  return _2.Doc;
}
function toggleAutoRenew(subId, expiry, currentAutoRenew, loading){
  StartImmediate(Delay(() => {
    loading.Set(true);
    return TryFinally(Delay(() => {
      const newAuto=!currentAutoRenew;
      SeatsVar().Set(map_2((s) => s.subscriptionId==subId&&s.expiry==expiry?New_16(s.seatNo, s.username, s.status, s.expiry, newAuto, s.subscriptionId):s, SeatsVar().Get()));
      return Bind_1(SetAutoRenew(subId, currentAutoRenew), (a) => a?(showToast("Updated"),Zero()):Zero());
    }), () => {
      loading.Set(false);
    });
  }), null);
}
function usernameAttr(seat, isLocked){
  return isLocked||SeatStatus.FromString(seat.status).$===0?Attr.Create("readonly", ""):EmptyAttr();
}
function seatBadge(statusStr){
  const baseClass="inline-flex items-center rounded-full border px-2 py-0.5 text-xs ";
  const status=SeatStatus.FromString(statusStr);
  return Doc.Element("span", [Attr.Create("class", status.$==1?baseClass+"border-gray-300 text-gray-600 dark:border-white/10 dark:text-gray-300":baseClass+"border-emerald-300 text-emerald-700 dark:border-emerald-700/40 dark:text-emerald-300")], [Doc.TextNode(status.AsString)]);
}
function assignButtonAttr(seat, isLocked, loading){
  return isLocked||SeatStatus.FromString(seat.status).$===0?Attr.Create("style", "display: none"):DynamicClassPred("disabled", loading);
}
function unassignButtonAttr(seat, isLocked, loading){
  return SeatStatus.FromString(seat.status).$!==0||isLocked?Attr.Create("style", "display: none"):Attr.Concat([DynamicProp("disabled", loading), DynamicClassPred("opacity-50 cursor-not-allowed", loading)]);
}
function assignSeat(subId, seatNo, username, loading){
  if(!IsNullOrWhiteSpace(username))StartImmediate(Delay(() => {
    loading.Set(true);
    return TryFinally(Delay(() => Bind_1(verifyGitHubUser(username), (a) => a?Bind_1(AssignSeat(subId, seatNo, username), (a_1) => a_1?Bind_1(refreshSeatsAsync(), () => {
      showToast("Updated");
      return Zero();
    }):Zero()):(showToast("GitHub user '"+username+"' not found"),Zero()))), () => {
      loading.Set(false);
    });
  }), null);
}
function unassignSeat(subId, seatNo, loading){
  StartImmediate(Delay(() => {
    loading.Set(true);
    return TryFinally(Delay(() => Bind_1(UnassignSeat(subId, seatNo), (a) => a?Bind_1(refreshSeatsAsync(), () => {
      showToast("Updated");
      return Zero();
    }):Zero())), () => {
      loading.Set(false);
    });
  }), null);
}
function verifyGitHubUser(username){
  return Delay(() => Bind_1(AsAsync(globalThis.fetch("https://api.github.com/users/"+username)), (a) => Return(a.ok)));
}
function BillingRecordVar(){
  return _c_21.BillingRecordVar;
}
function CompanyVatinVar(){
  return _c_21.CompanyVatinVar;
}
function CompanyNameVar_1(){
  return _c_21.CompanyNameVar;
}
function BillingCountryView(){
  return _c_21.BillingCountryView;
}
function BillingPostalView(){
  return _c_21.BillingPostalView;
}
function BillingCityView(){
  return _c_21.BillingCityView;
}
function BillingLine1View(){
  return _c_21.BillingLine1View;
}
function BillingVatinView(){
  return _c_21.BillingVatinView;
}
function BillingNameView(){
  return _c_21.BillingNameView;
}
function BtnBillingCancelAttr(){
  return _c_21.BtnBillingCancelAttr;
}
function BtnBillingSaveAttr(){
  return _c_21.BtnBillingSaveAttr;
}
function BtnBillingEditAttr(){
  return _c_21.BtnBillingEditAttr;
}
function BillingEditAttr(){
  return _c_21.BillingEditAttr;
}
function BillingViewAttr(){
  return _c_21.BillingViewAttr;
}
function SetBillingRecord(billingOpt){
  const value=billingOpt==null?New_5(Some(New_2("", "")), New_3("", "", "", "")):billingOpt.$0;
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
function CountriesList(){
  return _c_21.CountriesList;
}
function BillingModeVar(){
  return _c_21.BillingModeVar;
}
function New_5(company, address){
  return{company:company, address:address};
}
function InvoicesBody(){
  return _c_22.InvoicesBody;
}
function RefreshInvoices(newInvoices){
  invoicesModel().Set(newInvoices);
}
function invoicesModel(){
  return _c_22.invoicesModel;
}
function invoiceRowV(_2, invoiceV){
  const hrefV=Map((inv) =>"./invoice?id="+encodeURIComponent(inv.id)+"&sub="+encodeURIComponent(CurrentSubIdVar().Get()), invoiceV);
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
  return _c_22.invoicesDoc;
}
function GitHubBody(){
  return _c_23.GitHubBody;
}
function GitHubOrgName(){
  return _c_23.GitHubOrgName;
}
function OrgPrefix(){
  return _c_23.OrgPrefix;
}
function notPresent(){
  throw new KeyNotFoundException("New");
}
function alreadyAdded(){
  throw new ArgumentException("New_2", "An item with the same key has already been added.");
}
function New_6(IsCancellationRequested, Registrations){
  return{c:IsCancellationRequested, r:Registrations};
}
function New_7(k, ct){
  return{k:k, ct:ct};
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
let _c_19=Lazy((_i) => class $StartupCode_Concurrency {
  static {
    _c_19=_i(this);
  }
  static GetCT;
  static Zero;
  static defCTS;
  static scheduler;
  static noneCT;
  static {
    this.noneCT=New_6(false, []);
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
function New_8(Name, Description, Month_1, Year_1){
  return{
    Name:Name, 
    Description:Description, 
    Month:Month_1, 
    Year:Year_1
  };
}
function New_9(Pro, Freelancer){
  return{Pro:Pro, Freelancer:Freelancer};
}
function New_10(Amount, Currency){
  return{Amount:Amount, Currency:Currency};
}
function New_11(plan, interval, seatsText, email, street, city, postal, country, isCompany, companyName, vatin){
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
function New_12(plan, interval, seats){
  return{
    plan:plan, 
    interval:interval, 
    seats:seats
  };
}
function New_13(email, line1, city, postalCode, country, companyName, taxId){
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
function set_EndPoint(_2){
  _c_27.EndPoint=_2;
}
function AjaxProvider(){
  return _c_27.AjaxProvider;
}
function makePayload(data){
  return JSON.stringify(data);
}
function makeHeaders(headers){
  return NewFromSeq(map_2((_2) =>[_2[0], _2[1]], distinctBy_1((t_1) => t_1[0], headers.concat([["content-type", "application/json"]]))));
}
function EndPoint(){
  return _c_27.EndPoint;
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
  return _c_30.euVat;
}
function List(){
  return _c_28.List;
}
function New_14(planCode, interval, seats, billingData){
  return{
    planCode:planCode, 
    interval:interval, 
    seats:seats, 
    billingData:billingData
  };
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
let Subs={$:0};
let Billing={$:1};
function New_15(user, subs, currentSubId, seats, invoices, billing){
  return{
    user:user, 
    subs:subs, 
    currentSubId:currentSubId, 
    seats:seats, 
    invoices:invoices, 
    billing:billing
  };
}
function New_16(seatNo, username, status, expiry, autoRenew, subscriptionId){
  return{
    seatNo:seatNo, 
    username:username, 
    status:status, 
    expiry:expiry, 
    autoRenew:autoRenew, 
    subscriptionId:subscriptionId
  };
}
function New_17(name, status){
  return{name:name, status:status};
}
let _c_20=Lazy((_i) => class Seats_1 {
  static {
    _c_20=_i(this);
  }
  static SeatsBody;
  static seatGroupsDoc;
  static AddSeatsButtonAttr;
  static {
    this.AddSeatsButtonAttr=Dynamic("style", Map((subs) => exists_1((s) => s.plan.toLowerCase().indexOf("freelancer")!=-1, subs)?"display: none":"", SubsVar().View));
    this.seatGroupsDoc=Doc.EmbedView(Map2((_2, _3) => Doc.Concat(collect((_4) => {
      const subId=_4[0];
      const groupSeats=ofSeq(_4[1]);
      if(length(groupSeats)===0)return[];
      else {
        const subOption=tryFind((s) => s.id==subId.toLowerCase(), _3);
        const isFreelancer=subOption==null?false:subOption.$0.plan.toLowerCase().indexOf("freelancer")!=-1;
        const expiry=get(groupSeats, 0).expiry;
        const autoRenew=get(groupSeats, 0).autoRenew;
        return delay(() => append([groupHeaderDoc(subId, expiry, autoRenew)], delay(() => map_1((s) => seatRowDoc(s, isFreelancer), groupSeats))));
      }
    }, groupBy((s) => s.subscriptionId, sortBy((s) =>[s.expiry, s.subscriptionId, s.seatNo], _2)))), SeatsVar().View, SubsVar().View));
    this.SeatsBody=seatGroupsDoc();
  }
});
let _c_21=Lazy((_i) => class Billing_1 {
  static {
    _c_21=_i(this);
  }
  static BtnBillingCancelAttr;
  static BtnBillingSaveAttr;
  static BtnBillingEditAttr;
  static BillingEditAttr;
  static BillingViewAttr;
  static BillingCountryOptions;
  static BillingCountryView;
  static CountriesList;
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
    this.BillingRecordVar=_c_2.Create_1(New_5(Some(New_2("", "")), New_3("", "", "", "")));
    this.BillingModeVar=_c_2.Create_1(Viewing);
    this.CompanyNameVar=_c_2.Lens(BillingRecordVar(), (billing) => {
      const m=billing.company;
      return m==null?"":m.$0.name;
    }, (_2, _3) => {
      const m=_2.company;
      let _4=m==null?New_2(_3, ""):New_2(_3, m.$0.vatin);
      let _5=Some(_4);
      return New_5(_5, _2.address);
    });
    this.CompanyVatinVar=_c_2.Lens(BillingRecordVar(), (billing) => {
      const m=billing.company;
      return m==null?"":m.$0.vatin;
    }, (_2, _3) => {
      const m=_2.company;
      let _4=m==null?New_2("", _3):New_2(m.$0.name, _3);
      let _5=Some(_4);
      return New_5(_5, _2.address);
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
    this.CountriesList=List();
    this.BillingCountryView=Doc.TextView(Map((billing) => {
      const code=billing.address.country;
      const nameOpt=tryPick((_2) => _2[0]==code?Some(_2[1]):null, CountriesList());
      return nameOpt==null?orDash(code):nameOpt.$0;
    }, BillingRecordVar().View));
    this.BillingCountryOptions=map((_2) => Doc.Element("option", [Attr.Create("value", _2[0])], [Doc.TextNode(_2[1])]), CountriesList());
    this.BillingViewAttr=DynamicClassPred("hidden", Map((a) => a.$==1, BillingModeVar().View));
    this.BillingEditAttr=DynamicClassPred("hidden", Map((a) => a.$!=1, BillingModeVar().View));
    this.BtnBillingEditAttr=DynamicClassPred("hidden", Map((mode) => mode.$!=0, BillingModeVar().View));
    this.BtnBillingSaveAttr=DynamicClassPred("hidden", Map((a) => a.$!=1, BillingModeVar().View));
    this.BtnBillingCancelAttr=DynamicClassPred("hidden", Map((a) => a.$!=1, BillingModeVar().View));
  }
});
let _c_22=Lazy((_i) => class Invoices {
  static {
    _c_22=_i(this);
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
let _c_23=Lazy((_i) => class GitHub {
  static {
    _c_23=_i(this);
  }
  static GitHubBody;
  static OrgPrefix;
  static GitHubOrgName;
  static {
    this.GitHubOrgName=_c_2.Create_1("");
    this.OrgPrefix="IntelliFactory-";
    this.GitHubBody=Doc.EmbedView(Map2((_2, _3) => {
      if(exists_1((s) => s.plan.toLowerCase().indexOf("freelancer")!=-1, _3))return Doc.Empty;
      else if(_2!=null&&_2.$==1){
        const org=_2.$0;
        const _4=org.name;
        if(org.status=="active"){
          if(_4!=null&&_4.$==1){
            const name=_4.$0;
            const t_1=new ProviderBuilder("New_1");
            const b=(t_1.h.push(EventQ2(t_1.k, "gotogithuborg", () => t_1.i, () => {
              globalThis.open("https://github.com/"+name, "_blank");
            })),t_1);
            const p=CompleteHoles(b.k, b.h, []);
            const i=new TemplateInstance(p[1], githubactive(p[0]));
            let _5=(b.i=i,i);
            return _5.Doc;
          }
          else return Doc.Empty;
        }
        else if(_4!=null&&_4.$==1){
          const name_1=_4.$0;
          const this_1=new ProviderBuilder("New_1");
          const b_1=(this_1.h.push(new Text("githuborgname", name_1)),this_1);
          const p_1=CompleteHoles(b_1.k, b_1.h, []);
          const i_1=new TemplateInstance(p_1[1], githubpending(p_1[0]));
          let _6=(b_1.i=i_1,i_1);
          return _6.Doc;
        }
        else {
          const this_2=new ProviderBuilder("New_1");
          const t_2=(this_2.h.push(new VarStr("githuborgname", GitHubOrgName())),this_2);
          const b_2=(t_2.h.push(EventQ2(t_2.k, "setgithuborgname", () => t_2.i, () => {
            StartImmediate(Delay(() => {
              setLoading(true);
              return TryFinally(Delay(() => {
                const fullOrgName=OrgPrefix()+GitHubOrgName().Get();
                return Bind_1(SetGitHubOrgName_1(fullOrgName), (a) => a?(GitHubOrgVar().Set(Some(New_17(Some(fullOrgName), "pending"))),Zero()):Zero());
              }), () => {
                setLoading(false);
              });
            }), null);
          })),t_2);
          const p_2=CompleteHoles(b_2.k, b_2.h, [["githuborgname", 0, null]]);
          const i_2=new TemplateInstance(p_2[1], githubpendinginput(p_2[0]));
          let _7=(b_2.i=i_2,i_2);
          return _7.Doc;
        }
      }
      else return Doc.Empty;
    }, GitHubOrgVar().View, SubsVar().View));
  }
});
let Editing={$:1};
let Viewing={$:0};
let _c_24=Lazy((_i) => class $StartupCode_Templates {
  static {
    _c_24=_i(this);
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
function New_18(LeftPx, WidthPx){
  return{LeftPx:LeftPx, WidthPx:WidthPx};
}
class NonStandardPromiseRejectionException extends Error {
  reason;
  constructor(reason){
    super("Promise rejected");
    this.reason=reason;
  }
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
    const t_1=Date.now();
    let loop=true;
    while(loop)
      if(this.robin.length===0){
        this.idle=true;
        loop=false;
      }
      else {
        (this.robin.shift())();
        Date.now()-t_1>40?(setTimeout(() => {
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
let _c_25=Lazy((_i) => class Client {
  static {
    _c_25=_i(this);
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
function DecodeUnion(t_1, discr, cases){
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
      return t_1===void 0?o:t_1(o);
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
function EncodeArray(encEl){
  return() =>(a) => map_2(encEl(), a);
}
function DecodeRecord(t_1, fields){
  return() =>(x) => {
    const o={};
    iter_1((_2) => {
      const name=_2[0];
      const dec=_2[1];
      const kind=_2[2];
      return kind===0?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):FailWith("Missing mandatory field: "+name):kind===1?void(o[name]=x.hasOwnProperty(name)?Some((dec())(x[name])):null):kind===2?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):null:kind===3?x[name]===void 0?void(o[name]=(dec())(x[name])):null:FailWith("Invalid field option kind");
    }, fields);
    return t_1===void 0?o:t_1(o);
  };
}
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
function New_19(DynElem, DynFlags, DynNodes, OnAfterRender_4){
  const _2={
    DynElem:DynElem, 
    DynFlags:DynFlags, 
    DynNodes:DynNodes
  };
  SetOptional(_2, "OnAfterRender", OnAfterRender_4);
  return _2;
}
let _c_26=Lazy((_i) => class $StartupCode_Abbrev {
  static {
    _c_26=_i(this);
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
let _c_27=Lazy((_i) => class $StartupCode_Remoting {
  static {
    _c_27=_i(this);
  }
  static AjaxProvider;
  static EndPoint;
  static {
    this.EndPoint=globalThis.location.origin;
    this.AjaxProvider=new XhrProvider();
  }
});
let _c_28=Lazy((_i) => class $StartupCode_Countries {
  static {
    _c_28=_i(this);
  }
  static List;
  static {
    this.List=ofArray([["AF", "Afghanistan"], ["AL", "Albania"], ["DZ", "Algeria"], ["AD", "Andorra"], ["AO", "Angola"], ["AG", "Antigua and Barbuda"], ["AR", "Argentina"], ["AM", "Armenia"], ["AU", "Australia"], ["AT", "Austria"], ["AZ", "Azerbaijan"], ["BS", "Bahamas"], ["BH", "Bahrain"], ["BD", "Bangladesh"], ["BB", "Barbados"], ["BY", "Belarus"], ["BE", "Belgium"], ["BZ", "Belize"], ["BJ", "Benin"], ["BT", "Bhutan"], ["BO", "Bolivia"], ["BA", "Bosnia and Herzegovina"], ["BW", "Botswana"], ["BR", "Brazil"], ["BN", "Brunei"], ["BG", "Bulgaria"], ["BF", "Burkina Faso"], ["BI", "Burundi"], ["KH", "Cambodia"], ["CM", "Cameroon"], ["CA", "Canada"], ["CV", "Cape Verde"], ["CF", "Central African Republic"], ["TD", "Chad"], ["CL", "Chile"], ["CN", "China"], ["CO", "Colombia"], ["KM", "Comoros"], ["CG", "Congo"], ["CR", "Costa Rica"], ["HR", "Croatia"], ["CU", "Cuba"], ["CY", "Cyprus"], ["CZ", "Czech Republic"], ["DK", "Denmark"], ["DJ", "Djibouti"], ["DM", "Dominica"], ["DO", "Dominican Republic"], ["EC", "Ecuador"], ["EG", "Egypt"], ["SV", "El Salvador"], ["GQ", "Equatorial Guinea"], ["ER", "Eritrea"], ["EE", "Estonia"], ["SZ", "Eswatini"], ["ET", "Ethiopia"], ["FJ", "Fiji"], ["FI", "Finland"], ["FR", "France"], ["GA", "Gabon"], ["GM", "Gambia"], ["GE", "Georgia"], ["DE", "Germany"], ["GH", "Ghana"], ["GR", "Greece"], ["GD", "Grenada"], ["GT", "Guatemala"], ["GN", "Guinea"], ["GW", "Guinea-Bissau"], ["GY", "Guyana"], ["HT", "Haiti"], ["HN", "Honduras"], ["HU", "Hungary"], ["IS", "Iceland"], ["IN", "India"], ["ID", "Indonesia"], ["IR", "Iran"], ["IQ", "Iraq"], ["IE", "Ireland"], ["IL", "Israel"], ["IT", "Italy"], ["JM", "Jamaica"], ["JP", "Japan"], ["JO", "Jordan"], ["KZ", "Kazakhstan"], ["KE", "Kenya"], ["KI", "Kiribati"], ["KW", "Kuwait"], ["KG", "Kyrgyzstan"], ["LA", "Laos"], ["LV", "Latvia"], ["LB", "Lebanon"], ["LS", "Lesotho"], ["LR", "Liberia"], ["LY", "Libya"], ["LI", "Liechtenstein"], ["LT", "Lithuania"], ["LU", "Luxembourg"], ["MG", "Madagascar"], ["MW", "Malawi"], ["MY", "Malaysia"], ["MV", "Maldives"], ["ML", "Mali"], ["MT", "Malta"], ["MH", "Marshall Islands"], ["MR", "Mauritania"], ["MU", "Mauritius"], ["MX", "Mexico"], ["FM", "Micronesia"], ["MD", "Moldova"], ["MC", "Monaco"], ["MN", "Mongolia"], ["ME", "Montenegro"], ["MA", "Morocco"], ["MZ", "Mozambique"], ["MM", "Myanmar"], ["NA", "Namibia"], ["NR", "Nauru"], ["NP", "Nepal"], ["NL", "Netherlands"], ["NZ", "New Zealand"], ["NI", "Nicaragua"], ["NE", "Niger"], ["NG", "Nigeria"], ["KP", "North Korea"], ["MK", "North Macedonia"], ["NO", "Norway"], ["OM", "Oman"], ["PK", "Pakistan"], ["PW", "Palau"], ["PS", "Palestine"], ["PA", "Panama"], ["PG", "Papua New Guinea"], ["PY", "Paraguay"], ["PE", "Peru"], ["PH", "Philippines"], ["PL", "Poland"], ["PT", "Portugal"], ["QA", "Qatar"], ["RO", "Romania"], ["RU", "Russia"], ["RW", "Rwanda"], ["KN", "Saint Kitts and Nevis"], ["LC", "Saint Lucia"], ["VC", "Saint Vincent and the Grenadines"], ["WS", "Samoa"], ["SM", "San Marino"], ["ST", "Sao Tome and Principe"], ["SA", "Saudi Arabia"], ["SN", "Senegal"], ["RS", "Serbia"], ["SC", "Seychelles"], ["SL", "Sierra Leone"], ["SG", "Singapore"], ["SK", "Slovakia"], ["SI", "Slovenia"], ["SB", "Solomon Islands"], ["SO", "Somalia"], ["ZA", "South Africa"], ["KR", "South Korea"], ["SS", "South Sudan"], ["ES", "Spain"], ["LK", "Sri Lanka"], ["SD", "Sudan"], ["SR", "Suriname"], ["SE", "Sweden"], ["CH", "Switzerland"], ["SY", "Syria"], ["TW", "Taiwan"], ["TJ", "Tajikistan"], ["TZ", "Tanzania"], ["TH", "Thailand"], ["TL", "Timor-Leste"], ["TG", "Togo"], ["TO", "Tonga"], ["TT", "Trinidad and Tobago"], ["TN", "Tunisia"], ["TR", "Turkey"], ["TM", "Turkmenistan"], ["TV", "Tuvalu"], ["UG", "Uganda"], ["UA", "Ukraine"], ["AE", "United Arab Emirates"], ["GB", "United Kingdom"], ["US", "United States"], ["UY", "Uruguay"], ["UZ", "Uzbekistan"], ["VU", "Vanuatu"], ["VA", "Vatican City"], ["VE", "Venezuela"], ["VN", "Vietnam"], ["YE", "Yemen"], ["ZM", "Zambia"], ["ZW", "Zimbabwe"]]);
  }
});
let _c_29=Lazy((_i) => class $StartupCode_DomUtility {
  static {
    _c_29=_i(this);
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
    e.setAttribute("ws-on", concat(" ", filter_2((x) => dontRemove.Contains(get(SplitChars(x, [":"], 1), 1)), SplitChars(e.getAttribute("ws-on"), [" "], 1))));
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
function mapHoles(t_1, mappings){
  const run=(attrName) => {
    foreachNotPreserved(t_1, "["+attrName+"]", (e) => {
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
  foreachNotPreserved(t_1, "[ws-on]", (e) => {
    e.setAttribute("ws-on", concat(" ", map_2((x) => {
      let o;
      const a=SplitChars(x, [":"], 1);
      const m=(o=null,[mappings.TryGetValue(get(a, 1), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      return m[0]?get(a, 0)+":"+m[1]:x;
    }, SplitChars(e.getAttribute("ws-on"), [" "], 1))));
  });
  foreachNotPreserved(t_1, "[ws-attr-holes]", (e) => {
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
class GitHubOrgStatus {
  toString(){
    return this=="active"?"active":"pending";
  }
  $;
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
      _3=_c_2.Create_1(ofSeq(distinctBy(key, storage.SInit())));
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
class Elt_1 extends Doc {
  docNode_1;
  updates_1;
  elt;
  rvUpdates;
  static TreeNode(tree, updates){
    const rvUpdates=Updates_1.Create(updates);
    let _2=TreeDoc(tree);
    const x=map_2((_5) => Updates(_5[1]), tree.Attrs);
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
          const t_1=now-start;
          anim.Compute(t_1);
          k();
          return t_1<=dur?void requestAnimationFrame((t_2) => {
            (loop(start))(t_2);
          }):ok();
        };
      }
      requestAnimationFrame((t_1) => {
        (loop(t_1))(t_1);
      });
    };
    return FromContinuations((_2, _3, _4) => c.apply(null, [_2, _3, _4]));
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
  return _c_32.BatchUpdatesEnabled;
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
function applyTypedVarHole(bind, v, el){
  const p=bind(v);
  p[0](el);
  Sink(p[1](el), p[2]);
}
function StringApply(){
  return _c_25.StringApply;
}
function BoolCheckedApply(){
  return _c_25.BoolCheckedApply;
}
function FloatApplyUnchecked(){
  return _c_25.FloatApplyUnchecked;
}
function DateTimeApplyUnchecked(){
  return _c_25.DateTimeApplyUnchecked;
}
function FileApplyUnchecked(){
  return _c_25.FileApplyUnchecked;
}
function StringListApply(){
  return _c_25.StringListApply;
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
  return _c_25.StringSet;
}
function StringGet(){
  return _c_25.StringGet;
}
function StringListSet(){
  return _c_25.StringListSet;
}
function StringListGet(){
  return _c_25.StringListGet;
}
function DateTimeSetUnchecked(){
  return _c_25.DateTimeSetUnchecked;
}
function DateTimeGetUnchecked(){
  return _c_25.DateTimeGetUnchecked;
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
  return _c_25.FileSetUnchecked;
}
function FileGetUnchecked(){
  return _c_25.FileGetUnchecked;
}
function IntSetUnchecked(){
  return _c_25.IntSetUnchecked;
}
function IntGetUnchecked(){
  return _c_25.IntGetUnchecked;
}
function IntSetChecked(){
  return _c_25.IntSetChecked;
}
function IntGetChecked(){
  return _c_25.IntGetChecked;
}
function FloatSetUnchecked(){
  return _c_25.FloatSetUnchecked;
}
function FloatGetUnchecked(){
  return _c_25.FloatGetUnchecked;
}
function FloatSetChecked(){
  return _c_25.FloatSetChecked;
}
function FloatGetChecked(){
  return _c_25.FloatGetChecked;
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
class XhrProvider extends Object_1 {
  Async(url, headers, data, ok, err){
    ajax(true, url, headers, data, ok, err, () => {
      ajax(true, url, headers, data, ok, err, void 0);
    });
  }
}
let _c_30=Lazy((_i) => class $StartupCode_RemotingContract {
  static {
    _c_30=_i(this);
  }
  static euVat;
  static {
    this.euVat=dict([["AT", 20], ["BE", 21], ["BG", 20], ["HR", 25], ["CY", 19], ["CZ", 21], ["DK", 25], ["EE", 22], ["FI", 24], ["FR", 20], ["DE", 19], ["GR", 24], ["HU", 27], ["IE", 23], ["IT", 22], ["LV", 21], ["LT", 21], ["LU", 17], ["MT", 18], ["NL", 21], ["PL", 23], ["PT", 23], ["RO", 19], ["SK", 20], ["SI", 22], ["ES", 21], ["SE", 25]]);
  }
});
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
function mapiInPlace(f, arr){
  for(let i=0, _2=arr.length-1;i<=_2;i++)arr[i]=f(i, arr[i]);
  return arr;
}
function mapInPlace_1(f, arr){
  for(let i=0, _2=arr.length-1;i<=_2;i++)arr[i]=f(arr[i]);
}
function nonNegative(){
  return FailWith("The input must be non-negative.");
}
function InMemory(init_2){
  return new ArrayStorage(init_2);
}
class Text extends TemplateHole {
  name;
  fillWith;
  get Value(){
    return this.fillWith;
  }
  WithName(n){
    return new Text(n, this.fillWith);
  }
  get Name(){
    return this.name;
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
let _c_31=Lazy((_i) => class $StartupCode_Api {
  static {
    _c_31=_i(this);
  }
  static billingCache;
  static {
    this.billingCache=null;
  }
});
class Event_1 extends TemplateHole {
  name;
  fillWith;
  get Value(){
    return this.fillWith;
  }
  WithName(n){
    return new Event_1(n, this.fillWith);
  }
  get Name(){
    return this.name;
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
  WithName(n){
    return new AfterRender_1(n, this.fillWith);
  }
  get Name(){
    return this.name;
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
    return Get(map_1((kvp) => kvp.V, this.d));
  }
  constructor(d){
    super();
    this.d=d;
  }
}
function New_20(PreviousNodes, Top){
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
  return _c_33.UseAnimations;
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
    return Def(dur, (t_1) => {
      iter_1((anim) => {
        anim.Compute(t_1);
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
  const last=Create_1(() => anim.Compute(anim.Duration));
  return{Compute:(t_1) => t_1>=dur?last.f():comp(t_1), Duration:nextDuration};
}
let _c_32=Lazy((_i) => class Proxy {
  static {
    _c_32=_i(this);
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
    return Get(map_1((kvp) => kvp.K, this.d));
  }
  constructor(d){
    super();
    this.d=d;
  }
}
class SeatStatus {
  static FromString(s){
    return s.toLowerCase()=="assigned"?SeatStatus.Assigned:SeatStatus.Unassigned;
  }
  get AsString(){
    return this.$==1?"unassigned":"assigned";
  }
  static Assigned=Create_2(SeatStatus, {$:0});
  static Unassigned=Create_2(SeatStatus, {$:1});
  $;
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
let _c_33=Lazy((_i) => class $StartupCode_Animation {
  static {
    _c_33=_i(this);
  }
  static UseAnimations;
  static CubicInOut;
  static {
    this.CubicInOut=Easing.Custom((t_1) => {
      const t2=t_1*t_1;
      return 3*t2-2*(t2*t_1);
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
  return _c_34.Empty;
}
function New_21(subscriptionId, cancelAtPeriodEnd){
  return{subscriptionId:subscriptionId, cancelAtPeriodEnd:cancelAtPeriodEnd};
}
function New_22(subscriptionId, githubAssignedName, position){
  return{
    subscriptionId:subscriptionId, 
    githubAssignedName:githubAssignedName, 
    position:position
  };
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
  return new HashSet("New_2", filter_2(ok, ToArray_2(set_1)));
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
  return DomNodes(filter_2((n) => forall_2((k) =>!(n===k), excluded), a_1.$0));
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
class ArgumentException extends Error {
  constructor(i, _2){
    if(i=="New_2"){
      const message=_2;
      super(message);
    }
  }
}
function Create_1(f){
  return New_23(false, f, forceLazy);
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
let _c_34=Lazy((_i) => class $StartupCode_AppendList {
  static {
    _c_34=_i(this);
  }
  static Empty;
  static {
    this.Empty={$:0};
  }
});
class FormatException extends Error {
  constructor(i, _2){
    if(i=="New_1"){
      const message=_2;
      super(message);
    }
  }
}
function New_23(created, evalOrVal, force){
  return{
    c:created, 
    v:evalOrVal, 
    f:force
  };
}
