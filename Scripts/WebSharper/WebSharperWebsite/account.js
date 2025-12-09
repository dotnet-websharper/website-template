export { default as Runtime } from "../WebSharper.Core.JavaScript/Runtime.js"
import { MarkResizable, SetOptional, Lazy, Create as Create_2, GetOptional, CreateFuncWithArgs, DeleteEmptyFields } from "../WebSharper.Core.JavaScript/Runtime.js"
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
  const t_6=(t_5.h.push(EventQ2(t_5.k, "closeonbackgroundclick", () => t_5.i, (_1) => {
    CloseOnBackgroundClick(_1);
  })),t_5);
  const t_7=(t_6.h.push(EventQ2(t_6.k, "accountbtnclick", () => t_6.i, (_1) => {
    AccountBtnClick(_1);
  })),t_6);
  const t_8=(t_7.h.push(EventQ2(t_7.k, "accountbtnkeydown", () => t_7.i, () => { })),t_7);
  const t_9=(t_8.h.push(EventQ2(t_8.k, "login", () => t_8.i, () => {
    Login();
  })),t_8);
  const this_1=(t_9.h.push(EventQ2(t_9.k, "logout", () => t_9.i, (_1) => {
    Logout(_1);
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
export function MyAccount(){
  return ManageSubscriptionDoc();
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
      const r=ty===0?_c_6.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?"":o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarStr(name, _4);
      }):ty===1?_c_6.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?0:o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarFloatUnchecked(name, _4);
      }):ty===2?_c_6.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?false:o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarBool(name, _4);
      }):ty===3?_c_6.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?-8640000000000000:o.$0;
        let _4=_c_1.Create_1(_3);
        return new VarDateTime(name, _4);
      }):ty===4?_c_6.GetOrAddHoleFor(key, name, () => new VarFile(name, _c_1.Create_1([]))):ty===5?_c_6.GetOrAddHoleFor(key, name, () => new VarDomElement(name, _c_1.Create_1(Some(globalThis.document.querySelector("[ws-dom="+name+"]"))))):ty===6?_c_6.GetOrAddHoleFor(key, name, () => {
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
  return _c_5.IsAuthedView;
}
function UserView(){
  return _c_5.UserView;
}
function BuildStartUrlWithReturn(returnUrl){
  return"https://api.websharper.io/auth/github/start?returnUrl="+encodeURIComponent(returnUrl);
}
function userVar(){
  return _c_5.userVar;
}
function isFetchingVar(){
  return _c_5.isFetchingVar;
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
  static TextView(txt){
    const node=CreateTextNode();
    return Doc.Mk(TextDoc(node), Map((t_1) => {
      UpdateTextNode(node, t_1);
    }, txt));
  }
  static Concat(xs){
    return TreeReduce(Doc.Empty, Doc.Append, ofSeqNonCopying(xs));
  }
  static TextNode(v){
    return Doc.Mk(TextNodeDoc(globalThis.document.createTextNode(v)), Const());
  }
  static Append(a, b){
    return Doc.Mk(AppendDoc(a.docNode, b.docNode), Map2Unit(a.updates, b.updates));
  }
  static ConvertSeqBy(key, render, view){
    const a=render;
    let _1=MapSeqCachedViewBy(key, (_2, _3) =>(a(_2))(_3), view);
    return Doc.Flatten(_1);
  }
  static Input(attr_1, var_1){
    return Doc.InputInternal("input", () => append(attr_1, [Value(var_1)]));
  }
  static Element(name, attr_1, children){
    const a=Attr.Concat(attr_1);
    const c=Doc.Concat(children);
    return Elt_1.New(globalThis.document.createElement(name), a, c);
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
function ManageSubscriptionDoc(){
  const b=new ProviderBuilder("New_1");
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], skeleton(p[0]));
  let _1=(b.i=i,i);
  const skeletonDoc=_1.Doc;
  const C=Doc.EmbedView(Map3(renderContent, isLoading_1().View, IsAuthedView(), SubsVar().View));
  const S=DynamicClassPred("hidden", Map((v) =>!v, isLoading_1().View));
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new Elt("skeleton", skeletonDoc)),this_1);
  const this_3=(this_2.h.push(new Attribute("skeletonattr", S)),this_2);
  const b_1=(this_3.h.push(new Elt("content", C)),this_3);
  const p_1=CompleteHoles(b_1.k, b_1.h, []);
  const i_1=new TemplateInstance(p_1[1], contentwrapper(p_1[0]));
  let _2=(b_1.i=i_1,i_1);
  const M=_2.Doc;
  const this_4=new ProviderBuilder("New_1");
  const this_5=(this_4.h.push(new AfterRenderQ("onafterrender", "", () => {
    Init_1();
  })),this_4);
  const this_6=(this_5.h.push(new Elt("maincontent", M)),this_5);
  const this_7=(this_6.h.push(new Attribute("toastattr", ToastAttr())),this_6);
  const b_2=(this_7.h.push(new Elt("toasttext", ToastText())),this_7);
  const p_2=CompleteHoles(b_2.k, b_2.h, []);
  const i_2=new TemplateInstance(p_2[1], t(p_2[0]));
  let _3=(b_2.i=i_2,i_2);
  return _3.Doc;
}
function Init_1(){
  (requireAuth().then(() => loadAllAfterAuth()))["catch"](() => isLoading_1().Set(false));
}
function isLoading_1(){
  return _c_3.isLoading;
}
function renderContent(loading, loggedIn, subs){
  if(loading){
    const b=new ProviderBuilder("New_1");
    const p=CompleteHoles(b.k, b.h, []);
    const i=new TemplateInstance(p[1], skeleton(p[0]));
    let _1=(b.i=i,i);
    return _1.Doc;
  }
  else if(!loggedIn){
    const t_1=new ProviderBuilder("New_1");
    const b_1=(t_1.h.push(EventQ2(t_1.k, "loginclick", () => t_1.i, () => {
      LoginClick();
    })),t_1);
    const p_1=CompleteHoles(b_1.k, b_1.h, []);
    const i_1=new TemplateInstance(p_1[1], loginprompt(p_1[0]));
    let _2=(b_1.i=i_1,i_1);
    return _2.Doc;
  }
  else if(length(subs)===0){
    const t_2=new ProviderBuilder("New_1");
    const b_2=(t_2.h.push(EventQ2(t_2.k, "onsubscribeclick", () => t_2.i, () => {
      globalThis.location.href="/support#plans";
    })),t_2);
    const p_2=CompleteHoles(b_2.k, b_2.h, []);
    const i_2=new TemplateInstance(p_2[1], nosubscriptionwidget(p_2[0]));
    let _3=(b_2.i=i_2,i_2);
    return _3.Doc;
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
    const this_20=(this_19.h.push(new VarStr("billingnamevar", CompanyNameVar())),this_19);
    const this_21=(this_20.h.push(new VarStr("billingvatinvar", CompanyVatinVar())),this_20);
    const this_22=(this_21.h.push(new VarStr("billingline1var", _c_1.Lens(BillingRecordVar(), (_5) => _5.address.line1, (_5, _6) => New_1(_5.company, New(_6, _5.address.city, _5.address.postal_code, _5.address.country))))),this_21);
    const this_23=(this_22.h.push(new VarStr("billingcityvar", _c_1.Lens(BillingRecordVar(), (_5) => _5.address.city, (_5, _6) => New_1(_5.company, New(_5.address.line1, _6, _5.address.postal_code, _5.address.country))))),this_22);
    const this_24=(this_23.h.push(new VarStr("billingpostalvar", _c_1.Lens(BillingRecordVar(), (_5) => _5.address.postal_code, (_5, _6) => New_1(_5.company, New(_5.address.line1, _5.address.city, _6, _5.address.country))))),this_23);
    const this_25=(this_24.h.push(new VarStr("billingcountryvar", _c_1.Lens(BillingRecordVar(), (_5) => _5.address.country, (_5, _6) => New_1(_5.company, New(_5.address.line1, _5.address.city, _5.address.postal_code, _6))))),this_24);
    const t_9=(this_25.h.push(new Attribute("addseatsbuttonattr", AddSeatsButtonAttr())),this_25);
    const t_10=(t_9.h.push(EventQ2(t_9.k, "addseatsclick", () => t_9.i, () => {
      globalThis.location.href="./checkout?plan=pro&interval=year&seats=1";
    })),t_9);
    const b_3=(t_10.h.push(EventQ2(t_10.k, "refreshclick", () => t_10.i, () => {
      HandleRefresh();
    })),t_10);
    const p_3=CompleteHoles(b_3.k, b_3.h, [["billingnamevar", 0, null], ["billingvatinvar", 0, null], ["billingline1var", 0, null], ["billingcityvar", 0, null], ["billingpostalvar", 0, null], ["billingcountryvar", 0, Some("")]]);
    const i_3=new TemplateInstance(p_3[1], authenticatedcontent(p_3[0]));
    let _4=(b_3.i=i_3,i_3);
    return _4.Doc;
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
    for(let i=0, _1=35;i<=_1;i++){
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
    for(let i=0, _1=31;i<=_1;i++){
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
    for(let i_1=0, _2=67;i_1<=_2;i_1++){
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
function alertErrorFromResult(res){
  handleErrorFromResult(res, (msg) => {
    sweetalert2.fire(swalDefaults("Error!", msg, "error"));
  });
}
function handleErrorFromResult(res, func){
  if(res.$==1)func(res.$0);
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
function DynamicClassPred(name, view){
  return Dynamic_1(view, (el) =>(v) => v?AddClass(el, name):RemoveClass(el, name));
}
function Dynamic(name, view){
  return Dynamic_1(view, (el) =>(v) => el.setAttribute(name, v));
}
function Handler(name, callback){
  return Attr.A3((el) => {
    el.addEventListener(name, (d) =>(callback(el))(d), false);
  });
}
function OnAfterRender(callback){
  return Attr.A4(callback);
}
function Class(name){
  return ClassPred(name, true);
}
function DynamicProp(name, view){
  return Dynamic_1(view, (el) =>(v) => {
    el[name]=v;
  });
}
function ClassPred(name, isSet){
  return Attr.A3((el) => {
    if(isSet)AddClass(el, name);
    else RemoveClass(el, name);
  });
}
function Value(var_1){
  return ValueWith(StringApply(), var_1);
}
function ValueWith(bind, var_1){
  const p=bind(var_1);
  return AppendTree(Attr.A3(p[0]), DynamicCustom(p[1], p[2]));
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
function Bind(fn, view){
  return Join(Map(fn, view));
}
function Map2(fn, a, a_1){
  return CreateLazy(() => Map2_1(fn, a(), a_1()));
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
  return CreateLazy(() => Sequence_1(map((a) => a(), views)));
}
function Map2Unit(a, a_1){
  return CreateLazy(() => Map2Unit_1(a(), a_1()));
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
    return TreeReduce(EmptyAttr(), (_1, _2) => AppendTree(_1, _2), x);
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
  static A4(onAfterRender){
    return Create_2(Attr, {$:4, $0:onAfterRender});
  }
  static A3(init_2){
    return Create_2(Attr, {$:3, $0:init_2});
  }
  $;
  $0;
  $1;
}
function ToastText(){
  return _c_2.ToastText;
}
function ToastAttr(){
  return _c_2.ToastAttr;
}
function BillingPageAttr(){
  return _c_2.BillingPageAttr;
}
function SubsPageAttr(){
  return _c_2.SubsPageAttr;
}
function BillingTabAttr(){
  return _c_2.BillingTabAttr;
}
function SubsTabAttr(){
  return _c_2.SubsTabAttr;
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
  return _c_2.ActivePage;
}
function ToastMessage(){
  return _c_2.ToastMessage;
}
function showToast(msg){
  const msg_1=IsNullOrWhiteSpace(msg)?"Saved":msg;
  ToastMessage().Set(Some(msg_1));
  setTimeout(() => {
    ToastMessage().Set(null);
  }, 1600);
}
function setLoading(on){
  IsLoading().Set(on);
}
function IsLoading(){
  return _c_2.IsLoading;
}
function SubsVar(){
  return _c_4.SubsVar;
}
function UserVar(){
  return _c_4.UserVar;
}
function StateVar(){
  return _c_4.StateVar;
}
function CustomerPortalLinkVar(){
  return _c_4.CustomerPortalLinkVar;
}
function BillingVar(){
  return _c_4.BillingVar;
}
function CurrentSubIdVar(){
  return _c_4.CurrentSubIdVar;
}
function InvoicesVar(){
  return _c_4.InvoicesVar;
}
function SeatsVar(){
  return _c_4.SeatsVar;
}
function GitHubOrgVar(){
  return _c_4.GitHubOrgVar;
}
function formatMoney(amount, currency){
  const amountF=amount/100;
  const m=currency.toLowerCase();
  return m=="usd"?(((_1) =>(_2) => _1("$"+_2.toFixed(2)))((x) => x))(amountF):m=="eur"?(((_1) =>(_2) => _1("\u20ac"+_2.toFixed(2)))((x) => x))(amountF):m=="gbp"?(((_1) =>(_2) => _1("£"+_2.toFixed(2)))((x) => x))(amountF):((((_1) =>(_2) =>(_3) => _1(_2.toFixed(2)+" "+toSafe(_3)))((x) => x))(amountF))(currency);
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
function contentwrapper(h){
  return h?GetOrLoadTemplate("managesubscription", Some("contentwrapper"), () => ParseHTMLIntoFakeRoot("<div>\r\n        <div ws-attr=\"SkeletonAttr\">\r\n            <div ws-replace=\"Skeleton\"></div>\r\n        </div>\r\n        <div ws-replace=\"Content\"></div>\r\n    </div>"), h):PrepareTemplate("managesubscription", Some("contentwrapper"), () => ParseHTMLIntoFakeRoot("<div>\r\n        <div ws-attr=\"SkeletonAttr\">\r\n            <div ws-replace=\"Skeleton\"></div>\r\n        </div>\r\n        <div ws-replace=\"Content\"></div>\r\n    </div>"));
}
function t(h){
  return h?GetOrLoadTemplate("managesubscription", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    <div class=\"mx-auto max-w-6xl px-10 pt-28 pb-20\" ws-onafterrender=\"OnAfterRender\">\r\n        <div ws-replace=\"MainContent\"></div>\r\n    </div>\r\n\r\n    <div ws-attr=\"ToastAttr\" ws-hole=\"ToastText\" class=\"fixed bottom-4 right-4 hidden rounded-lg px-4 py-2 text-sm bg-gray-900 text-white shadow-lg\" aria-live=\"polite\" role=\"status\">Saved</div>\r\n\r\n    <div ws-attr=\"SpinnerAttr\" class=\"hidden fixed inset-0 z-50 bg-white/50 dark:bg-black/40 backdrop-blur-sm\">\r\n        <div class=\"absolute inset-0 m-auto h-12 w-12 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 dark:border-gray-700 dark:border-t-white\"></div>\r\n    </div>\r\n</body>\r\n</html>"), h):PrepareTemplate("managesubscription", null, () => ParseHTMLIntoFakeRoot("<html lang=\"en\">\r\n<head>\r\n</head>\r\n<body>\r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n\r\n    <div class=\"mx-auto max-w-6xl px-10 pt-28 pb-20\" ws-onafterrender=\"OnAfterRender\">\r\n        <div ws-replace=\"MainContent\"></div>\r\n    </div>\r\n\r\n    <div ws-attr=\"ToastAttr\" ws-hole=\"ToastText\" class=\"fixed bottom-4 right-4 hidden rounded-lg px-4 py-2 text-sm bg-gray-900 text-white shadow-lg\" aria-live=\"polite\" role=\"status\">Saved</div>\r\n\r\n    <div ws-attr=\"SpinnerAttr\" class=\"hidden fixed inset-0 z-50 bg-white/50 dark:bg-black/40 backdrop-blur-sm\">\r\n        <div class=\"absolute inset-0 m-auto h-12 w-12 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 dark:border-gray-700 dark:border-t-white\"></div>\r\n    </div>\r\n</body>\r\n</html>"));
}
function skeleton(h){
  return h?GetOrLoadTemplate("managesubscription", Some("skeleton"), () => ParseHTMLIntoFakeRoot("<div class=\"grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] transition-opacity duration-500 ease-out\">\r\n        <aside class=\"lg:sticky lg:top-24 h-max\">\r\n            <div class=\"rounded-xl border border-gray-200 p-3 dark:border-gray-800 space-y-1\">\r\n                <div class=\"h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n                <div class=\"h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n            </div>\r\n        </aside>\r\n\r\n        <div class=\"space-y-6\">\r\n\r\n            <div class=\"space-y-3\">\r\n                <div class=\"h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                <div class=\"h-4 w-full max-w-lg bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n\r\n                <div class=\"flex items-center gap-2 mt-2\">\r\n                    <div class=\"h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-9 w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mt-1\"></div>\r\n            </div>\r\n\r\n            <div class=\"flex flex-wrap items-center justify-between gap-3 pt-4\">\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-4 w-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                </div>\r\n                <div class=\"h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden\">\r\n                <div class=\"flex flex-wrap items-start justify-between gap-4 px-4 py-4\">\r\n                    <div class=\"space-y-2\">\r\n                        <div class=\"h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                        <div class=\"h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    </div>\r\n                    <div class=\"h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"bg-gray-50 dark:bg-gray-900/50 h-10 w-full border-t border-b border-gray-200 dark:border-gray-800 animate-pulse\"></div>\r\n\r\n                <div class=\"divide-y divide-gray-200 dark:divide-gray-800\">\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-gray-200 dark:border-gray-800 p-5\">\r\n                <div class=\"flex items-center justify-between mb-4\">\r\n                    <div class=\"h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-10 w-full bg-gray-5 dark:bg-gray-900/50 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-red-100 p-5 dark:border-red-900/30\">\r\n                <div class=\"h-6 w-32 bg-red-100 dark:bg-red-900/50 rounded animate-pulse mb-2\"></div>\r\n                <div class=\"h-4 w-96 bg-red-100 dark:bg-red-900/50 rounded animate-pulse\"></div>\r\n            </div>\r\n        </div>\r\n    </div>"), h):PrepareTemplate("managesubscription", Some("skeleton"), () => ParseHTMLIntoFakeRoot("<div class=\"grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] transition-opacity duration-500 ease-out\">\r\n        <aside class=\"lg:sticky lg:top-24 h-max\">\r\n            <div class=\"rounded-xl border border-gray-200 p-3 dark:border-gray-800 space-y-1\">\r\n                <div class=\"h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n                <div class=\"h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n            </div>\r\n        </aside>\r\n\r\n        <div class=\"space-y-6\">\r\n\r\n            <div class=\"space-y-3\">\r\n                <div class=\"h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                <div class=\"h-4 w-full max-w-lg bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n\r\n                <div class=\"flex items-center gap-2 mt-2\">\r\n                    <div class=\"h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-9 w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mt-1\"></div>\r\n            </div>\r\n\r\n            <div class=\"flex flex-wrap items-center justify-between gap-3 pt-4\">\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-4 w-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                </div>\r\n                <div class=\"h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden\">\r\n                <div class=\"flex flex-wrap items-start justify-between gap-4 px-4 py-4\">\r\n                    <div class=\"space-y-2\">\r\n                        <div class=\"h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                        <div class=\"h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    </div>\r\n                    <div class=\"h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"bg-gray-50 dark:bg-gray-900/50 h-10 w-full border-t border-b border-gray-200 dark:border-gray-800 animate-pulse\"></div>\r\n\r\n                <div class=\"divide-y divide-gray-200 dark:divide-gray-800\">\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                    <div class=\"h-14 bg-white dark:bg-gray-950 w-full animate-pulse\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-gray-200 dark:border-gray-800 p-5\">\r\n                <div class=\"flex items-center justify-between mb-4\">\r\n                    <div class=\"h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse\"></div>\r\n                </div>\r\n\r\n                <div class=\"space-y-2\">\r\n                    <div class=\"h-10 w-full bg-gray-5 dark:bg-gray-900/50 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                    <div class=\"h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"rounded-xl border border-red-100 p-5 dark:border-red-900/30\">\r\n                <div class=\"h-6 w-32 bg-red-100 dark:bg-red-900/50 rounded animate-pulse mb-2\"></div>\r\n                <div class=\"h-4 w-96 bg-red-100 dark:bg-red-900/50 rounded animate-pulse\"></div>\r\n            </div>\r\n        </div>\r\n    </div>"));
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
function githubactive(h){
  return h?GetOrLoadTemplate("managesubscription", Some("githubactive"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div><h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1></div>\r\n                    <button ws-onclick=\"GoToGitHubOrg\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                        Go to GitHub organization\r\n                    </button>\r\n                </div>"), h):PrepareTemplate("managesubscription", Some("githubactive"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div><h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1></div>\r\n                    <button ws-onclick=\"GoToGitHubOrg\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                        Go to GitHub organization\r\n                    </button>\r\n                </div>"));
}
function githubpending(h){
  return h?GetOrLoadTemplate("managesubscription", Some("githubpending"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div><h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1></div>\r\n                    <div class=\"text-sm\">Pending: ${GitHubOrgName}</div>\r\n                </div>"), h):PrepareTemplate("managesubscription", Some("githubpending"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div><h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1></div>\r\n                    <div class=\"text-sm\">Pending: ${GitHubOrgName}</div>\r\n                </div>"));
}
function githubpendinginput(h){
  return h?GetOrLoadTemplate("managesubscription", Some("githubpendinginput"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div>\r\n                        <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1>\r\n                        <p class=\"text-sm text-gray-600 dark:text-gray-400\">No GitHub support organization is created for you yet. Please choose a name below.</p>\r\n                    </div>\r\n                    <div>\r\n                        <span class=\"text-sm\">IntelliFactory-</span>\r\n                        <input ws-var=\"GitHubOrgName\" class=\"w-64 hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" placeholder=\"github-orgname-suffix\">\r\n                    </div>\r\n                    <div>\r\n                        <span class=\"mt-1 text-sm text-red-600 dark:text-red-300 mr-2\">You can't change the name after you submit.</span>\r\n                        <button ws-onclick=\"SetGitHubOrgName\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                            Set GitHub organization name\r\n                        </button>\r\n                    </div>\r\n                </div>"), h):PrepareTemplate("managesubscription", Some("githubpendinginput"), () => ParseHTMLIntoFakeRoot("<div class=\"space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100\">\r\n                    <div>\r\n                        <h1 class=\"text-2xl font-bold text-gray-900 dark:text-white\">GitHub organization</h1>\r\n                        <p class=\"text-sm text-gray-600 dark:text-gray-400\">No GitHub support organization is created for you yet. Please choose a name below.</p>\r\n                    </div>\r\n                    <div>\r\n                        <span class=\"text-sm\">IntelliFactory-</span>\r\n                        <input ws-var=\"GitHubOrgName\" class=\"w-64 hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5\" placeholder=\"github-orgname-suffix\">\r\n                    </div>\r\n                    <div>\r\n                        <span class=\"mt-1 text-sm text-red-600 dark:text-red-300 mr-2\">You can't change the name after you submit.</span>\r\n                        <button ws-onclick=\"SetGitHubOrgName\" class=\"rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800\">\r\n                            Set GitHub organization name\r\n                        </button>\r\n                    </div>\r\n                </div>"));
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
function EncodeJson_BillingData(){
  return Encoder_BillingData?Encoder_BillingData:Encoder_BillingData=(EncodeRecord(void 0, [["email", Id_1(), 0], ["line1", Id_1(), 0], ["city", Id_1(), 0], ["postalCode", Id_1(), 0], ["country", Id_1(), 0], ["companyName", Id_1(), 1], ["taxId", Id_1(), 1]]))();
}
function DecodeJson_FSharpResult_3(){
  return Decoder_FSharpResult_3?Decoder_FSharpResult_3:Decoder_FSharpResult_3=(DecodeUnion(void 0, "$", [[0, [["$0", "ResultValue", Id_1(), 0]]], [1, [["$0", "ErrorValue", Id_1(), 0]]]]))();
}
function DecodeJson_Subscription(){
  return Decoder_Subscription?Decoder_Subscription:Decoder_Subscription=(DecodeRecord(void 0, [["subscriptionId", Id_1(), 0], ["planName", Id_1(), 0], ["currentPeriodEnd", Id_1(), 0], ["cancelAtPeriodEnd", Id_1(), 0], ["seats", Id_1(), 0], ["githubAssignedNames", DecodeArray(DecodeJson_FSharpOption_2), 0]]))();
}
function DecodeJson_FSharpOption_4(){
  return Decoder_FSharpOption_4?Decoder_FSharpOption_4:Decoder_FSharpOption_4=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", DecodeJson_BillingData, 0]]]]))();
}
function DecodeJson_FSharpOption_2(){
  return Decoder_FSharpOption_2?Decoder_FSharpOption_2:Decoder_FSharpOption_2=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", Id_1(), 0]]]]))();
}
function DecodeJson_FSharpOption_3(){
  return Decoder_FSharpOption_3?Decoder_FSharpOption_3:Decoder_FSharpOption_3=(DecodeUnion(void 0, "$", [null, [1, [["$0", "Value", DecodeJson_GitHubOrg, 0]]]]))();
}
function smoothtextloader_1(h){
  return h?GetOrLoadTemplate("managesubscription", Some("smoothtextloader"), () => ParseHTMLIntoFakeRoot("<span class=\"relative inline-block align-bottom ${WrapperClasses}\">\r\n        <span ws-attr=\"SkeletonAttr\" class=\"block w-full h-full transition-opacity duration-500 ease-out\">\r\n            <span class=\"block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full\"></span>\r\n        </span>\r\n        <span ws-attr=\"ContentAttr\" class=\"absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center\">\r\n            <span ws-replace=\"Content\" class=\"w-full\"></span>\r\n        </span>\r\n    </span>"), h):PrepareTemplate("managesubscription", Some("smoothtextloader"), () => ParseHTMLIntoFakeRoot("<span class=\"relative inline-block align-bottom ${WrapperClasses}\">\r\n        <span ws-attr=\"SkeletonAttr\" class=\"block w-full h-full transition-opacity duration-500 ease-out\">\r\n            <span class=\"block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full\"></span>\r\n        </span>\r\n        <span ws-attr=\"ContentAttr\" class=\"absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center\">\r\n            <span ws-replace=\"Content\" class=\"w-full\"></span>\r\n        </span>\r\n    </span>"));
}
function DecodeJson_BillingData(){
  return Decoder_BillingData?Decoder_BillingData:Decoder_BillingData=(DecodeRecord(void 0, [["email", Id_1(), 0], ["line1", Id_1(), 0], ["city", Id_1(), 0], ["postalCode", Id_1(), 0], ["country", Id_1(), 0], ["companyName", Id_1(), 1], ["taxId", Id_1(), 1]]))();
}
function DecodeJson_GitHubOrg(){
  return Decoder_GitHubOrg?Decoder_GitHubOrg:Decoder_GitHubOrg=(DecodeRecord(void 0, [["name", Id_1(), 1], ["status", DecodeJson_GitHubOrgStatus, 0]]))();
}
function DecodeJson_GitHubOrgStatus(){
  return Decoder_GitHubOrgStatus?Decoder_GitHubOrgStatus:Decoder_GitHubOrgStatus=(DecodeUnion((o) => Create_2(GitHubOrgStatus, o), "$", [null, null]))();
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
  static Set(var_1, value){
    var_1.Set(value);
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
    r(New_2((a) => {
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
  if(!ct.c)c(New_2((a) => {
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
  return Bind_1(a, () => b);
}
function TryWith(r, f){
  return(c) => {
    r(New_2((a) => {
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
    run(New_2((r) => {
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
function Parallel(cs){
  const cs_1=ofSeq(cs);
  return length(cs_1)===0?Return([]):(c) => {
    const n=cs_1.length;
    const o=[n];
    const a=new Array(n);
    for(let i=0, _1=n-1;i<=_1;i++)(((i_1) => scheduler().Fork(() => {
      (get(cs_1, i_1))(New_2((_2) => {
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
function StartWithContinuations(c, s, f, cc, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  if(!ct.c)c(New_2((a) => {
    if(a.$==1)f(a.$0);
    else if(a.$==2)cc(a.$0);
    else s(a.$0);
  }, ct));
}
function Start(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  scheduler().Fork(() => {
    if(!ct.c)c(New_2((a) => {
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
  return _c_7.GetCT;
}
function Logout_2(){
  return(new AjaxRemotingProvider()).Async("IRemotingContract/Logout", []);
}
function Me(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/Me", []), (o) => Return((DecodeJson_FSharpOption_1())(o)));
}
function SetBillingData(_1){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/SetBillingData", [(EncodeJson_BillingData())(_1)]), (o) => Return((DecodeJson_FSharpResult_3())(o)));
}
function GetInvoices(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetInvoices", []), (o) => Return(o));
}
function GetSubscriptions(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetSubscriptions", []), (o) => Return(((DecodeArray(DecodeJson_Subscription))())(o)));
}
function GetBillingData(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetBillingData", []), (o) => Return((DecodeJson_FSharpOption_4())(o)));
}
function GetCustomerPortalLink(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetCustomerPortalLink", []), (o) => Return((DecodeJson_FSharpOption_2())(o)));
}
function GetGitHubOrg(){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/GetGitHubOrg", []), (o) => Return((DecodeJson_FSharpOption_3())(o)));
}
function SetGitHubOrgName(_1){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/SetGitHubOrgName", [_1]), (o) => Return((DecodeJson_FSharpResult_3())(o)));
}
function SetCancellationStatus(_1){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/SetCancellationStatus", [_1]), (o) => Return((DecodeJson_FSharpResult_3())(o)));
}
function AddAssignment(_1){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/AddAssignment", [_1]), (o) => Return((DecodeJson_FSharpResult_3())(o)));
}
function RevokeAssignment(_1){
  return Bind_1((new AjaxRemotingProvider()).Async("IRemotingContract/RevokeAssignment", [_1]), (o) => Return((DecodeJson_FSharpResult_3())(o)));
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
  return _c_12.EmptyAttr;
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
  let _1=New_10(elem, Flags(tree), arr, oar.length===0?null:Some((el) => {
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
  return New_10(e, 0, [], null);
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
  return _c_18.rhtml;
}
function wrapMap(){
  return _c_18.wrapMap;
}
function defaultWrap(){
  return _c_18.defaultWrap;
}
function rxhtmlTag(){
  return _c_18.rxhtmlTag;
}
function rtagName(){
  return _c_18.rtagName;
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
function Map2Opt1(fn, x, sn2){
  return Map_1((y) => fn(x, y), sn2);
}
function Map2Opt2(fn, y, sn1){
  return Map_1((x) => fn(x, y), sn1);
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
function mapInPlace(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)arr[i]=f(arr[i]);
  return arr;
}
function EmbedDoc(Item){
  return{$:2, $0:Item};
}
function TreeDoc(Item){
  return{$:6, $0:Item};
}
function TextDoc(Item){
  return{$:4, $0:Item};
}
function TextNodeDoc(Item){
  return{$:5, $0:Item};
}
function AppendDoc(Item1, Item2){
  return{
    $:0, 
    $0:Item1, 
    $1:Item2
  };
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
let _c_2=Lazy((_i) => class $StartupCode_Views {
  static {
    _c_2=_i(this);
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
    this.ActivePage=_c_1.Create_1(Subs);
    this.IsLoading=_c_1.Create_1(false);
    this.ToastMessage=_c_1.Create_1(null);
    this.SubsPageAttr=Dynamic("class", Map((page) => page.$===0?"space-y-6":"space-y-6 hidden", ActivePage().View));
    this.BillingPageAttr=Dynamic("class", Map((page) => page.$===1?"space-y-6":"space-y-6 hidden", ActivePage().View));
    const isActive=Map((page) => page.$===0, ActivePage().View);
    let _1=Attr.Concat([DynamicClassPred("bg-gray-100", isActive), DynamicClassPred("dark:bg-white/5", isActive)]);
    this.SubsTabAttr=_1;
    const isActive_1=Map((page) => page.$===1, ActivePage().View);
    let _2=Attr.Concat([DynamicClassPred("bg-gray-100", isActive_1), DynamicClassPred("dark:bg-white/5", isActive_1)]);
    this.BillingTabAttr=_2;
    this.ToastAttr=DynamicClassPred("hidden", Map((o) => o==null, ToastMessage().View));
    this.ToastText=Doc.TextView(Map((a) => a!=null&&a.$==1?!IsNullOrWhiteSpace(a.$0)?a.$0:"Saved":"Saved", ToastMessage().View));
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
function requireAuth(){
  return new Promise((_1) => {
    _1(OfAsync(FetchMe()).then((d) => {
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
let _c_3=Lazy((_i) => class $StartupCode_ManageSubPage {
  static {
    _c_3=_i(this);
  }
  static isLoading;
  static {
    this.isLoading=_c_1.Create_1(true);
  }
});
let _c_4=Lazy((_i) => class $StartupCode_State {
  static {
    _c_4=_i(this);
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
    this.StateVar=_c_1.Create_1(New_4(null, [], "", [], [], null));
    this.UserVar=_c_1.Lens(StateVar(), (s) => s.user, (_1, _2) => New_4(_2, _1.subs, _1.currentSubId, _1.seats, _1.invoices, _1.billing));
    this.SubsVar=_c_1.Lens(StateVar(), (s) => s.subs, (_1, _2) => New_4(_1.user, _2, _1.currentSubId, _1.seats, _1.invoices, _1.billing));
    this.CurrentSubIdVar=_c_1.Lens(StateVar(), (s) => s.currentSubId, (_1, _2) => New_4(_1.user, _1.subs, _2, _1.seats, _1.invoices, _1.billing));
    this.SeatsVar=_c_1.Lens(StateVar(), (s) => s.seats, (_1, _2) => New_4(_1.user, _1.subs, _1.currentSubId, _2, _1.invoices, _1.billing));
    this.InvoicesVar=_c_1.Lens(StateVar(), (s) => s.invoices, (_1, _2) => New_4(_1.user, _1.subs, _1.currentSubId, _1.seats, _2, _1.billing));
    this.BillingVar=_c_1.Lens(StateVar(), (s) => s.billing, (_1, _2) => New_4(_1.user, _1.subs, _1.currentSubId, _1.seats, _1.invoices, _2));
    this.CustomerPortalLinkVar=_c_1.Create_1(null);
    this.GitHubOrgVar=_c_1.Create_1(null);
  }
});
let _c_5=Lazy((_i) => class $StartupCode_AuthClient {
  static {
    _c_5=_i(this);
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
function LoginClick(){
  Login();
}
function AddSeatsButtonAttr(){
  return _c_8.AddSeatsButtonAttr;
}
function SeatsBody(){
  return _c_8.SeatsBody;
}
function RefreshSeats(){
  StartImmediate(refreshSeatsAsync(), null);
}
function groupHeaderDoc(subId, expiry, autoRenew){
  const isProcessing=_c_1.Create_1(false);
  const baseBtn="relative inline-flex h-5 w-9 items-center rounded-full border text-xs transition-colors ";
  const baseDot="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ";
  const x=Doc.TextNode(expiry);
  const E=BindSmoothLoader("w-24 h-5", isProcessing.View, x);
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new Elt("expiry", E)),this_1);
  const this_3=(this_2.h.push(new Text("toggleclasses", autoRenew?baseBtn+"bg-emerald-500 border-emerald-500":baseBtn+"bg-gray-300 border-gray-400 dark:bg-gray-700 dark:border-gray-600")),this_2);
  const t_1=(this_3.h.push(new Text("dotclasses", autoRenew?baseDot+"translate-x-4":baseDot+"translate-x-0")),this_3);
  const b=(t_1.h.push(EventQ2(t_1.k, "toggleautorenew", () => t_1.i, () => {
    toggleAutoRenew(subId, expiry, autoRenew, isProcessing);
  })),t_1);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], seatgrouprow(p[0]));
  let _1=(b.i=i,i);
  return _1.Doc;
}
function seatRowDoc(seat, isLocked){
  const isProcessing=_c_1.Create_1(false);
  const usernameVar=_c_1.Create_1(seat.username);
  const U=unassignButtonAttr(seat, isLocked, isProcessing.View);
  const A=assignButtonAttr(seat, isLocked, isProcessing.View);
  const x=Doc.TextNode(seat.expiry);
  const E=BindSmoothLoader("w-24 h-5", isProcessing.View, x);
  const x_1=seatBadge(seat.status);
  const S=BindSmoothLoader("w-16 h-6", isProcessing.View, x_1);
  const x_2=Doc.Input([Attr.Create("class", "w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm"), Attr.Create("placeholder", "github-username"), usernameAttr(seat, isLocked)], usernameVar);
  const U_1=BindSmoothLoader("w-full h-8", isProcessing.View, x_2);
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
  let _1=(b.i=i,i);
  return _1.Doc;
}
function seatGroupsDoc(){
  return _c_8.seatGroupsDoc;
}
function refreshSeatsAsync(){
  return Delay(() => Bind_1(GetAllSeats(), (a) => {
    SeatsVar().Set(a);
    return Zero();
  }));
}
function BindSmoothLoader(widthClass, isLoading_2, content){
  const C=ofArray([DynamicClassPred("opacity-0", isLoading_2), DynamicClassPred("pointer-events-none", isLoading_2)]);
  const S=ofArray([DynamicClassPred("opacity-0", Map((v) =>!v, isLoading_2)), Class("relative z-10 pointer-events-none")]);
  const this_1=new ProviderBuilder("New_1");
  const this_2=(this_1.h.push(new Text("wrapperclasses", widthClass)),this_1);
  const this_3=(this_2.h.push(new Attribute("skeletonattr", Attr.Concat(S))),this_2);
  const this_4=(this_3.h.push(new Attribute("contentattr", Attr.Concat(C))),this_3);
  const b=(this_4.h.push(new Elt("content", content)),this_4);
  const p=CompleteHoles(b.k, b.h, []);
  const i=new TemplateInstance(p[1], smoothtextloader_1(p[0]));
  let _1=(b.i=i,i);
  return _1.Doc;
}
function toggleAutoRenew(subId, expiry, currentAutoRenew, loading){
  StartImmediate(Delay(() => {
    loading.Set(true);
    return TryFinally(Delay(() => {
      const newAuto=!currentAutoRenew;
      SeatsVar().Set(map_1((s) => s.subscriptionId==subId&&s.expiry==expiry?New_6(s.seatNo, s.username, s.status, s.expiry, newAuto, s.subscriptionId):s, SeatsVar().Get()));
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
  return _c_9.BillingRecordVar;
}
function CompanyVatinVar(){
  return _c_9.CompanyVatinVar;
}
function CompanyNameVar(){
  return _c_9.CompanyNameVar;
}
function BillingCountryView(){
  return _c_9.BillingCountryView;
}
function BillingPostalView(){
  return _c_9.BillingPostalView;
}
function BillingCityView(){
  return _c_9.BillingCityView;
}
function BillingLine1View(){
  return _c_9.BillingLine1View;
}
function BillingVatinView(){
  return _c_9.BillingVatinView;
}
function BillingNameView(){
  return _c_9.BillingNameView;
}
function BtnBillingCancelAttr(){
  return _c_9.BtnBillingCancelAttr;
}
function BtnBillingSaveAttr(){
  return _c_9.BtnBillingSaveAttr;
}
function BtnBillingEditAttr(){
  return _c_9.BtnBillingEditAttr;
}
function BillingEditAttr(){
  return _c_9.BillingEditAttr;
}
function BillingViewAttr(){
  return _c_9.BillingViewAttr;
}
function SetBillingRecord(billingOpt){
  const value=billingOpt==null?New_1(Some(New_9("", "")), New("", "", "", "")):billingOpt.$0;
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
  return _c_9.CountriesList;
}
function BillingModeVar(){
  return _c_9.BillingModeVar;
}
function New(line1, city, postal_code, country){
  return{
    line1:line1, 
    city:city, 
    postal_code:postal_code, 
    country:country
  };
}
function New_1(company, address){
  return{company:company, address:address};
}
function InvoicesBody(){
  return _c_10.InvoicesBody;
}
function RefreshInvoices(newInvoices){
  invoicesModel().Set(newInvoices);
}
function invoicesModel(){
  return _c_10.invoicesModel;
}
function invoiceRowV(_1, invoiceV){
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
  let _2=(b.i=i,i);
  return _2.Doc;
}
function invoicesDoc(){
  return _c_10.invoicesDoc;
}
function GitHubBody(){
  return _c_11.GitHubBody;
}
function GitHubOrgName(){
  return _c_11.GitHubOrgName;
}
function OrgPrefix(){
  return _c_11.OrgPrefix;
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
      const v=tryPick_1((a) => {
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
      const r=filter((a) =>!this.equals.apply(null, [(KeyValue(a))[0], k]), d);
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
  return concat(map(f, s));
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
function tryPick(f, s){
  const e=Get(s);
  try {
    let r=null;
    while(Equals(r, null)&&e.MoveNext())
      r=f(e.Current);
    return r;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
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
function exists_1(f, x){
  let e=false;
  let i=0;
  const l=length(x);
  while(!e&&i<l)
    if(f(x[i]))e=true;
    else i=i+1;
  return e;
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
function map_1(f, arr){
  const r=new Array(arr.length);
  for(let i=0, _1=arr.length-1;i<=_1;i++)r[i]=f(arr[i]);
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
function findIndex(f, arr){
  const m=tryFindIndex(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
function iter_1(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)f(arr[i]);
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
function sortInPlaceBy(f, arr){
  mapInPlace_1((t_1) => t_1[0], mapiInPlace((_1, _2) =>[_2, [f(_2), _1]], arr).sort((_1, _2) => Compare(_1[1], _2[1])));
}
function concat_1(xs){
  return Array.prototype.concat.apply([], ofSeq(xs));
}
function filter(f, arr){
  const r=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++)if(f(arr[i]))r.push(arr[i]);
  return r;
}
function foldBack(f, arr, zero){
  let acc=zero;
  const len=arr.length;
  for(let i=1, _1=len;i<=_1;i++)acc=f(arr[len-i], acc);
  return acc;
}
function collect_1(f, x){
  return Array.prototype.concat.apply([], map_1(f, x));
}
function pick(f, arr){
  const m=tryPick_1(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
function mapi(f, arr){
  const y=new Array(arr.length);
  for(let i=0, _1=arr.length-1;i<=_1;i++)y[i]=f(i, arr[i]);
  return y;
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
    for(let i_1=0, _1=a.length-1;i_1<=_1;i_1++)((() => {
      let _2;
      const f=get(a, i_1);
      const t_1=f[1];
      const ov=f[2];
      const n=f[0];
      if(!d.ContainsKey(n)){
        if(t_1===0){
          const o=ov==null?null:Some(ov.$0);
          let _3=o==null?"":o.$0;
          let _4=_c_1.Create_1(_3);
          _2=new VarStr(n, _4);
        }
        else if(t_1===1){
          const o_1=ov==null?null:Some(ov.$0);
          let _5=o_1==null?0:o_1.$0;
          let _6=_c_1.Create_1(_5);
          _2=new VarFloatUnchecked(n, _6);
        }
        else if(t_1===2){
          const o_2=ov==null?null:Some(ov.$0);
          let _7=o_2==null?false:o_2.$0;
          let _8=_c_1.Create_1(_7);
          _2=new VarBool(n, _8);
        }
        else if(t_1===3){
          const o_3=ov==null?null:Some(ov.$0);
          let _9=o_3==null?-8640000000000000:o_3.$0;
          let _10=_c_1.Create_1(_9);
          _2=new VarDateTime(n, _10);
        }
        else if(t_1===4){
          const o_4=ov==null?null:Some(ov.$0);
          let _11=o_4==null?[]:o_4.$0;
          let _12=_c_1.Create_1(_11);
          _2=new VarFile(n, _12);
        }
        else if(t_1===5){
          const x=ov==null?null:Some(ov.$0);
          const v=globalThis.document.querySelector("[ws-dom="+n+"]");
          let _13=x==null?v:x.$0;
          let _14=Some(_13);
          let _15=_c_1.Create_1(_14);
          _2=new VarDomElement(n, _15);
        }
        else if(t_1===6){
          const o_5=ov==null?null:Some(ov.$0);
          let _16=o_5==null?[]:o_5.$0;
          let _17=_c_1.Create_1(_16);
          _2=new VarStrList(n, _17);
        }
        else _2=FailWith("Invalid kind for template Var type: "+String(t_1));
        return d.set_Item(n, _2);
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
    for(let i=0, _1=q.length-1;i<=_1;i++){
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
  return _c_14.RenderedFullDocTemplate;
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
              const t_1=d.Item(instName);
              const instance=t_1.cloneNode(true);
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
  _c_14.RenderedFullDocTemplate=_1;
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
  return _c_14.LocalTemplatesLoaded;
}
function set_LocalTemplatesLoaded(_1){
  _c_14.LocalTemplatesLoaded=_1;
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
  return _c_14.LoadedTemplates;
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
      const value=foldBack((_10, _11) =>(((t_1) => {
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
  return _c_14.GlobalHoles;
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
  return _c_14.TextHoleRE;
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
function IsNullOrEmpty(x){
  return x==null||x=="";
}
function concat_2(separator, strings){
  return ofSeq(strings).join(separator);
}
function SplitChars(s, sep, opts){
  return Split(s, new RegExp("["+RegexEscape(sep.join(""))+"]"), opts);
}
function StartsWith(t_1, s){
  return t_1.substring(0, s.length)==s;
}
function forall_2(f, s){
  return forall(f, protect(s));
}
function Trim(s){
  return s.replace(new RegExp("^\\s+"), "").replace(new RegExp("\\s+$"), "");
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
function Substring(s, ix, ct){
  return s.substr(ix, ct);
}
function New_2(k, ct){
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
function New_3(IsCancellationRequested, Registrations){
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
    this.noneCT=New_3(false, []);
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
    return Create_2(DocElemNode, _2);
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
let Subs={$:0};
let Billing={$:1};
function New_4(user, subs, currentSubId, seats, invoices, billing){
  return{
    user:user, 
    subs:subs, 
    currentSubId:currentSubId, 
    seats:seats, 
    invoices:invoices, 
    billing:billing
  };
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
function New_6(seatNo, username, status, expiry, autoRenew, subscriptionId){
  return{
    seatNo:seatNo, 
    username:username, 
    status:status, 
    expiry:expiry, 
    autoRenew:autoRenew, 
    subscriptionId:subscriptionId
  };
}
function New_7(id, date, amount, currency, status, subscription, billingAddress, company){
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
function New_8(name, status){
  return{name:name, status:status};
}
class ReactiveExtensions extends Object_1 { }
function set_EndPoint(_1){
  _c_13.EndPoint=_1;
}
function AjaxProvider(){
  return _c_13.AjaxProvider;
}
function makePayload(data){
  return JSON.stringify(data);
}
function makeHeaders(headers){
  return NewFromSeq(map_1((_1) =>[_1[0], _1[1]], distinctBy_1((t_1) => t_1[0], headers.concat([["content-type", "application/json"]]))));
}
function EndPoint(){
  return _c_13.EndPoint;
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
let _c_8=Lazy((_i) => class Seats {
  static {
    _c_8=_i(this);
  }
  static SeatsBody;
  static seatGroupsDoc;
  static AddSeatsButtonAttr;
  static {
    this.AddSeatsButtonAttr=Dynamic("style", Map((subs) => exists_1((s) => s.plan.toLowerCase().indexOf("freelancer")!=-1, subs)?"display: none":"", SubsVar().View));
    this.seatGroupsDoc=Doc.EmbedView(Map2((_1, _2) => Doc.Concat(collect((_3) => {
      const subId=_3[0];
      const groupSeats=ofSeq(_3[1]);
      if(length(groupSeats)===0)return[];
      else {
        const subOption=tryFind((s) => s.id==subId.toLowerCase(), _2);
        const isFreelancer=subOption==null?false:subOption.$0.plan.toLowerCase().indexOf("freelancer")!=-1;
        const expiry=get(groupSeats, 0).expiry;
        const autoRenew=get(groupSeats, 0).autoRenew;
        return delay(() => append([groupHeaderDoc(subId, expiry, autoRenew)], delay(() => map((s) => seatRowDoc(s, isFreelancer), groupSeats))));
      }
    }, groupBy((s) => s.subscriptionId, sortBy((s) =>[s.expiry, s.subscriptionId, s.seatNo], _1)))), SeatsVar().View, SubsVar().View));
    this.SeatsBody=seatGroupsDoc();
  }
});
function Id(){
  set_counter(counter()+1);
  return"uid"+String(counter());
}
function Int(){
  set_counter(counter()+1);
  return counter();
}
function set_counter(_1){
  _c_15.counter=_1;
}
function counter(){
  return _c_15.counter;
}
let _c_9=Lazy((_i) => class Billing_1 {
  static {
    _c_9=_i(this);
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
    this.BillingRecordVar=_c_1.Create_1(New_1(Some(New_9("", "")), New("", "", "", "")));
    this.BillingModeVar=_c_1.Create_1(Viewing);
    this.CompanyNameVar=_c_1.Lens(BillingRecordVar(), (billing) => {
      const m=billing.company;
      return m==null?"":m.$0.name;
    }, (_1, _2) => {
      const m=_1.company;
      let _3=m==null?New_9(_2, ""):New_9(_2, m.$0.vatin);
      let _4=Some(_3);
      return New_1(_4, _1.address);
    });
    this.CompanyVatinVar=_c_1.Lens(BillingRecordVar(), (billing) => {
      const m=billing.company;
      return m==null?"":m.$0.vatin;
    }, (_1, _2) => {
      const m=_1.company;
      let _3=m==null?New_9("", _2):New_9(m.$0.name, _2);
      let _4=Some(_3);
      return New_1(_4, _1.address);
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
      const nameOpt=tryPick((_1) => _1[0]==code?Some(_1[1]):null, CountriesList());
      return nameOpt==null?orDash(code):nameOpt.$0;
    }, BillingRecordVar().View));
    this.BillingCountryOptions=map_2((_1) => Doc.Element("option", [Attr.Create("value", _1[0])], [Doc.TextNode(_1[1])]), CountriesList());
    this.BillingViewAttr=DynamicClassPred("hidden", Map((a) => a.$==1, BillingModeVar().View));
    this.BillingEditAttr=DynamicClassPred("hidden", Map((a) => a.$!=1, BillingModeVar().View));
    this.BtnBillingEditAttr=DynamicClassPred("hidden", Map((mode) => mode.$!=0, BillingModeVar().View));
    this.BtnBillingSaveAttr=DynamicClassPred("hidden", Map((a) => a.$!=1, BillingModeVar().View));
    this.BtnBillingCancelAttr=DynamicClassPred("hidden", Map((a) => a.$!=1, BillingModeVar().View));
  }
});
function New_9(name, vatin){
  return{name:name, vatin:vatin};
}
let _c_10=Lazy((_i) => class Invoices {
  static {
    _c_10=_i(this);
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
let _c_11=Lazy((_i) => class GitHub {
  static {
    _c_11=_i(this);
  }
  static GitHubBody;
  static OrgPrefix;
  static GitHubOrgName;
  static {
    this.GitHubOrgName=_c_1.Create_1("");
    this.OrgPrefix="IntelliFactory-";
    this.GitHubBody=Doc.EmbedView(Map2((_1, _2) => {
      if(exists_1((s) => s.plan.toLowerCase().indexOf("freelancer")!=-1, _2))return Doc.Empty;
      else if(_1!=null&&_1.$==1){
        const org=_1.$0;
        const _3=org.name;
        if(org.status=="active"){
          if(_3!=null&&_3.$==1){
            const name=_3.$0;
            const t_1=new ProviderBuilder("New_1");
            const b=(t_1.h.push(EventQ2(t_1.k, "gotogithuborg", () => t_1.i, () => {
              globalThis.open("https://github.com/"+name, "_blank");
            })),t_1);
            const p=CompleteHoles(b.k, b.h, []);
            const i=new TemplateInstance(p[1], githubactive(p[0]));
            let _4=(b.i=i,i);
            return _4.Doc;
          }
          else return Doc.Empty;
        }
        else if(_3!=null&&_3.$==1){
          const name_1=_3.$0;
          const this_1=new ProviderBuilder("New_1");
          const b_1=(this_1.h.push(new Text("githuborgname", name_1)),this_1);
          const p_1=CompleteHoles(b_1.k, b_1.h, []);
          const i_1=new TemplateInstance(p_1[1], githubpending(p_1[0]));
          let _5=(b_1.i=i_1,i_1);
          return _5.Doc;
        }
        else {
          const this_2=new ProviderBuilder("New_1");
          const t_2=(this_2.h.push(new VarStr("githuborgname", GitHubOrgName())),this_2);
          const b_2=(t_2.h.push(EventQ2(t_2.k, "setgithuborgname", () => t_2.i, () => {
            StartImmediate(Delay(() => {
              setLoading(true);
              return TryFinally(Delay(() => {
                const fullOrgName=OrgPrefix()+GitHubOrgName().Get();
                return Bind_1(SetGitHubOrgName_1(fullOrgName), (a) => a?(GitHubOrgVar().Set(Some(New_8(Some(fullOrgName), "pending"))),Zero()):Zero());
              }), () => {
                setLoading(false);
              });
            }), null);
          })),t_2);
          const p_2=CompleteHoles(b_2.k, b_2.h, [["githuborgname", 0, null]]);
          const i_2=new TemplateInstance(p_2[1], githubpendinginput(p_2[0]));
          let _6=(b_2.i=i_2,i_2);
          return _6.Doc;
        }
      }
      else return Doc.Empty;
    }, GitHubOrgVar().View, SubsVar().View));
  }
});
let Editing={$:1};
let Viewing={$:0};
function SaveBilling(data){
  return Delay(() => {
    const o=data.company;
    let _1=o==null?null:Some(o.$0.name);
    const o_1=data.company;
    let _2=o_1==null?null:Some(o_1.$0.vatin);
    let _3=New_11("", data.address.line1, data.address.city, data.address.postal_code, data.address.country, _1, _2);
    let _4=SetBillingData(_3);
    return Bind_1(_4, (a) => {
      alertErrorFromResult(a);
      return Combine(a.$==0?(set_billingCache(Some(data)),Zero()):Zero(), Delay(() => Return(a.$==0)));
    });
  });
}
function GetInvoices_1(){
  return Delay(() => Bind_1(GetInvoices(), (a) => Return(map_1((i) => New_7(i.title, i.date, i.amount, i.currency, i.status, null, null, null), a))));
}
function ListSubscriptions(){
  return Delay(() => Bind_1(GetSubscriptions(), (a) => Return(map_1(toSubRecord, a))));
}
function GetBilling(){
  return Delay(() => billingCache()==null?Bind_1(GetBillingData(), (a) => {
    let _1;
    let value;
    if(a!=null&&a.$==1){
      const data=a.$0;
      const o=data.companyName;
      if(o==null)_1=null;
      else {
        let _2=o.$0;
        const o_1=data.taxId;
        let _3=o_1==null?"":o_1.$0;
        let _4=New_9(_2, _3);
        _1=Some(_4);
      }
      value=New_1(_1, New(data.line1, data.city, data.postalCode, data.country));
    }
    else value=New_1(null, New("", "", "", ""));
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
function set_billingCache(_1){
  _c_17.billingCache=_1;
}
function toSubRecord(subscription){
  return New_5(String(subscription.subscriptionId), (((((_1) =>(_2) =>(_3) =>(_4) => _1(toSafe(_2)+" ("+String(_3)+" seats) - "+toSafe(_4)))((x) => x))(subscription.planName))(subscription.seats))(subscription.currentPeriodEnd), subscription.planName, subscription.seats, subscription.currentPeriodEnd, subscription.cancelAtPeriodEnd?"canceling":"active");
}
function billingCache(){
  return _c_17.billingCache;
}
function GetAllSeats(){
  return Delay(() => Bind_1(GetSubscriptions(), (a) => Return(collect_1(seatsFromSubscription, a))));
}
function SetAutoRenew(subId, cancelAtPeriodEnd){
  return Delay(() => Bind_1(SetCancellationStatus(New_13(Parse(subId), cancelAtPeriodEnd)), (a) => {
    alertErrorFromResult(a);
    return Return(a.$==0);
  }));
}
function AssignSeat(subId, seatNo, username){
  return Delay(() => IsNullOrWhiteSpace(username)?Return(false):Bind_1(AddAssignment(New_14(Parse(subId), username, seatNo)), (a) => {
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
        let _1=o==null?"":o.$0;
        let _2=New_14(sub.subscriptionId, _1, seatNo);
        let _3=RevokeAssignment(_2);
        return Bind_1(_3, (a_1) => {
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
  return mapi((_1, _2) => New_6(_1+1, _2==null?"":_2.$0, _2!=null?"assigned":"available", subscription.currentPeriodEnd, !subscription.cancelAtPeriodEnd, String(subscription.subscriptionId)), subscription.githubAssignedNames);
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
  return New_12(get_Empty_1(), CreateDelimitedElemNode(ldelim, rdelim, EmptyAttr(), doc));
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
  return New_12(get_Empty_1(), CreateElemNode(parent, EmptyAttr(), doc));
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
          return foldBack((_3, _4) => _3==null||_3.constructor===Object?ins(_3, _4):_3, t_1.Els, pos);
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
function TryParse(s, r){
  return TryParse_2(s, -2147483648, 2147483647, r);
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
function map_2(f, x){
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
function head_1(l){
  return l.$==1?l.$0:listEmpty();
}
function tail(l){
  return l.$==1?l.$1:listEmpty();
}
function listEmpty(){
  return FailWith("The input list was empty.");
}
function ofArray(arr){
  let r=FSharpList.Empty;
  for(let i=length(arr)-1, _1=0;i>=_1;i--)r=FSharpList.Cons(get(arr, i), r);
  return r;
}
let _c_12=Lazy((_i) => class Client {
  static {
    _c_12=_i(this);
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
        const m_1=TryParse_1(s_8);
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
function EncodeArray(encEl){
  return() =>(a) => map_1(encEl(), a);
}
function DecodeRecord(t_1, fields){
  return() =>(x) => {
    const o={};
    iter_1((_1) => {
      const name=_1[0];
      const dec=_1[1];
      const kind=_1[2];
      return kind===0?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):FailWith("Missing mandatory field: "+name):kind===1?void(o[name]=x.hasOwnProperty(name)?Some((dec())(x[name])):null):kind===2?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):null:kind===3?x[name]===void 0?void(o[name]=(dec())(x[name])):null:FailWith("Invalid field option kind");
    }, fields);
    return t_1===void 0?o:t_1(o);
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
function New_10(DynElem, DynFlags, DynNodes, OnAfterRender_1){
  const _1={
    DynElem:DynElem, 
    DynFlags:DynFlags, 
    DynNodes:DynNodes
  };
  SetOptional(_1, "OnAfterRender", OnAfterRender_1);
  return _1;
}
function OfAsync(a){
  return new Promise((_1, reject) => {
    StartWithContinuations(a, _1, (a_1) => {
      reject(a_1);
    }, (a_1) => {
      reject(a_1);
    }, null);
  });
}
function AsAsync(p){
  return FromContinuations((ok, ko) => {
    p.then(ok, (err) => ko(unwrapExn(err)));
  });
}
function unwrapExn(x){
  return x instanceof Error?x:new NonStandardPromiseRejectionException(x);
}
class GitHubOrgStatus {
  toString(){
    return this=="active"?"active":"pending";
  }
  $;
}
let _c_13=Lazy((_i) => class $StartupCode_Remoting {
  static {
    _c_13=_i(this);
  }
  static AjaxProvider;
  static EndPoint;
  static {
    this.EndPoint=globalThis.location.origin;
    this.AjaxProvider=new XhrProvider();
  }
});
function List(){
  return _c_16.List;
}
class attr extends Object_1 { }
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
  constructor(i, _1, _2, _3){
    let key;
    let storage;
    if(i=="New"){
      key=_1;
      storage=_2;
      i="New_3";
      _1=key;
      _2=_c_1.Create_1(ofSeq(distinctBy(key, storage.SInit())));
      _3=storage;
    }
    if(i=="New_3"){
      const key_1=_1;
      const var_1=_2;
      const storage_1=_3;
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
function New_11(email, line1, city, postalCode, country, companyName, taxId){
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
    return FromContinuations((_1, _2, _3) => c.apply(null, [_1, _2, _3]));
  }
}
function Anim(Item){
  return{$:0, $0:Item};
}
function Concat(xs){
  return Anim(Concat_1(map(List_1, xs)));
}
function get_Empty(){
  return Anim(Empty_1());
}
function BatchUpdatesEnabled(){
  return _c_19.BatchUpdatesEnabled;
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
let _c_14=Lazy((_i) => class $StartupCode_Templates {
  static {
    _c_14=_i(this);
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
    e.setAttribute("ws-on", concat_2(" ", map_1((x) => {
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
  return _c_12.StringSet;
}
function StringGet(){
  return _c_12.StringGet;
}
function StringListSet(){
  return _c_12.StringListSet;
}
function StringListGet(){
  return _c_12.StringListGet;
}
function DateTimeSetUnchecked(){
  return _c_12.DateTimeSetUnchecked;
}
function DateTimeGetUnchecked(){
  return _c_12.DateTimeGetUnchecked;
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
  return _c_12.FileSetUnchecked;
}
function FileGetUnchecked(){
  return _c_12.FileGetUnchecked;
}
function IntSetUnchecked(){
  return _c_12.IntSetUnchecked;
}
function IntGetUnchecked(){
  return _c_12.IntGetUnchecked;
}
function IntSetChecked(){
  return _c_12.IntSetChecked;
}
function IntGetChecked(){
  return _c_12.IntGetChecked;
}
function FloatSetUnchecked(){
  return _c_12.FloatSetUnchecked;
}
function FloatGetUnchecked(){
  return _c_12.FloatGetUnchecked;
}
function FloatSetChecked(){
  return _c_12.FloatSetChecked;
}
function FloatGetChecked(){
  return _c_12.FloatGetChecked;
}
function StringApply(){
  return _c_12.StringApply;
}
function FloatApplyUnchecked(){
  return _c_12.FloatApplyUnchecked;
}
function BoolCheckedApply(){
  return _c_12.BoolCheckedApply;
}
function DateTimeApplyUnchecked(){
  return _c_12.DateTimeApplyUnchecked;
}
function FileApplyUnchecked(){
  return _c_12.FileApplyUnchecked;
}
function StringListApply(){
  return _c_12.StringListApply;
}
function isBlank(s){
  return forall_2(IsWhiteSpace, s);
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
function groupBy_1(f, a){
  const d=new Dictionary("New_5");
  const keys=[];
  for(let i=0, _1=length(a)-1;i<=_1;i++){
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
function mapiInPlace(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)arr[i]=f(i, arr[i]);
  return arr;
}
function mapInPlace_1(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)arr[i]=f(arr[i]);
}
function insufficient(){
  return FailWith("The input sequence has an insufficient number of elements.");
}
function nonNegative(){
  return FailWith("The input must be non-negative.");
}
let _c_15=Lazy((_i) => class $StartupCode_Abbrev {
  static {
    _c_15=_i(this);
  }
  static counter;
  static {
    this.counter=0;
  }
});
let _c_16=Lazy((_i) => class $StartupCode_Countries {
  static {
    _c_16=_i(this);
  }
  static List;
  static {
    this.List=ofArray([["AF", "Afghanistan"], ["AL", "Albania"], ["DZ", "Algeria"], ["AD", "Andorra"], ["AO", "Angola"], ["AG", "Antigua and Barbuda"], ["AR", "Argentina"], ["AM", "Armenia"], ["AU", "Australia"], ["AT", "Austria"], ["AZ", "Azerbaijan"], ["BS", "Bahamas"], ["BH", "Bahrain"], ["BD", "Bangladesh"], ["BB", "Barbados"], ["BY", "Belarus"], ["BE", "Belgium"], ["BZ", "Belize"], ["BJ", "Benin"], ["BT", "Bhutan"], ["BO", "Bolivia"], ["BA", "Bosnia and Herzegovina"], ["BW", "Botswana"], ["BR", "Brazil"], ["BN", "Brunei"], ["BG", "Bulgaria"], ["BF", "Burkina Faso"], ["BI", "Burundi"], ["KH", "Cambodia"], ["CM", "Cameroon"], ["CA", "Canada"], ["CV", "Cape Verde"], ["CF", "Central African Republic"], ["TD", "Chad"], ["CL", "Chile"], ["CN", "China"], ["CO", "Colombia"], ["KM", "Comoros"], ["CG", "Congo"], ["CR", "Costa Rica"], ["HR", "Croatia"], ["CU", "Cuba"], ["CY", "Cyprus"], ["CZ", "Czech Republic"], ["DK", "Denmark"], ["DJ", "Djibouti"], ["DM", "Dominica"], ["DO", "Dominican Republic"], ["EC", "Ecuador"], ["EG", "Egypt"], ["SV", "El Salvador"], ["GQ", "Equatorial Guinea"], ["ER", "Eritrea"], ["EE", "Estonia"], ["SZ", "Eswatini"], ["ET", "Ethiopia"], ["FJ", "Fiji"], ["FI", "Finland"], ["FR", "France"], ["GA", "Gabon"], ["GM", "Gambia"], ["GE", "Georgia"], ["DE", "Germany"], ["GH", "Ghana"], ["GR", "Greece"], ["GD", "Grenada"], ["GT", "Guatemala"], ["GN", "Guinea"], ["GW", "Guinea-Bissau"], ["GY", "Guyana"], ["HT", "Haiti"], ["HN", "Honduras"], ["HU", "Hungary"], ["IS", "Iceland"], ["IN", "India"], ["ID", "Indonesia"], ["IR", "Iran"], ["IQ", "Iraq"], ["IE", "Ireland"], ["IL", "Israel"], ["IT", "Italy"], ["JM", "Jamaica"], ["JP", "Japan"], ["JO", "Jordan"], ["KZ", "Kazakhstan"], ["KE", "Kenya"], ["KI", "Kiribati"], ["KW", "Kuwait"], ["KG", "Kyrgyzstan"], ["LA", "Laos"], ["LV", "Latvia"], ["LB", "Lebanon"], ["LS", "Lesotho"], ["LR", "Liberia"], ["LY", "Libya"], ["LI", "Liechtenstein"], ["LT", "Lithuania"], ["LU", "Luxembourg"], ["MG", "Madagascar"], ["MW", "Malawi"], ["MY", "Malaysia"], ["MV", "Maldives"], ["ML", "Mali"], ["MT", "Malta"], ["MH", "Marshall Islands"], ["MR", "Mauritania"], ["MU", "Mauritius"], ["MX", "Mexico"], ["FM", "Micronesia"], ["MD", "Moldova"], ["MC", "Monaco"], ["MN", "Mongolia"], ["ME", "Montenegro"], ["MA", "Morocco"], ["MZ", "Mozambique"], ["MM", "Myanmar"], ["NA", "Namibia"], ["NR", "Nauru"], ["NP", "Nepal"], ["NL", "Netherlands"], ["NZ", "New Zealand"], ["NI", "Nicaragua"], ["NE", "Niger"], ["NG", "Nigeria"], ["KP", "North Korea"], ["MK", "North Macedonia"], ["NO", "Norway"], ["OM", "Oman"], ["PK", "Pakistan"], ["PW", "Palau"], ["PS", "Palestine"], ["PA", "Panama"], ["PG", "Papua New Guinea"], ["PY", "Paraguay"], ["PE", "Peru"], ["PH", "Philippines"], ["PL", "Poland"], ["PT", "Portugal"], ["QA", "Qatar"], ["RO", "Romania"], ["RU", "Russia"], ["RW", "Rwanda"], ["KN", "Saint Kitts and Nevis"], ["LC", "Saint Lucia"], ["VC", "Saint Vincent and the Grenadines"], ["WS", "Samoa"], ["SM", "San Marino"], ["ST", "Sao Tome and Principe"], ["SA", "Saudi Arabia"], ["SN", "Senegal"], ["RS", "Serbia"], ["SC", "Seychelles"], ["SL", "Sierra Leone"], ["SG", "Singapore"], ["SK", "Slovakia"], ["SI", "Slovenia"], ["SB", "Solomon Islands"], ["SO", "Somalia"], ["ZA", "South Africa"], ["KR", "South Korea"], ["SS", "South Sudan"], ["ES", "Spain"], ["LK", "Sri Lanka"], ["SD", "Sudan"], ["SR", "Suriname"], ["SE", "Sweden"], ["CH", "Switzerland"], ["SY", "Syria"], ["TW", "Taiwan"], ["TJ", "Tajikistan"], ["TZ", "Tanzania"], ["TH", "Thailand"], ["TL", "Timor-Leste"], ["TG", "Togo"], ["TO", "Tonga"], ["TT", "Trinidad and Tobago"], ["TN", "Tunisia"], ["TR", "Turkey"], ["TM", "Turkmenistan"], ["TV", "Tuvalu"], ["UG", "Uganda"], ["UA", "Ukraine"], ["AE", "United Arab Emirates"], ["GB", "United Kingdom"], ["US", "United States"], ["UY", "Uruguay"], ["UZ", "Uzbekistan"], ["VU", "Vanuatu"], ["VA", "Vatican City"], ["VE", "Venezuela"], ["VN", "Vietnam"], ["YE", "Yemen"], ["ZM", "Zambia"], ["ZW", "Zimbabwe"]]);
  }
});
function InMemory(init_2){
  return new ArrayStorage(init_2);
}
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
let _c_17=Lazy((_i) => class $StartupCode_Api {
  static {
    _c_17=_i(this);
  }
  static billingCache;
  static {
    this.billingCache=null;
  }
});
let _c_18=Lazy((_i) => class $StartupCode_DomUtility {
  static {
    _c_18=_i(this);
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
function New_12(PreviousNodes, Top){
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
  return _c_20.UseAnimations;
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
let _c_19=Lazy((_i) => class Proxy {
  static {
    _c_19=_i(this);
  }
  static BatchUpdatesEnabled;
  static {
    this.BatchUpdatesEnabled=true;
  }
});
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
function Clear(a){
  a.splice(0, length(a));
}
function IsWhiteSpace(c){
  return c.match(new RegExp("\\s"))!==null;
}
function TryParse_1(s){
  const d=Date.parse(s);
  return isNaN(d)?null:Some(d);
}
function TryParse_2(s, min, max_1, r){
  const x=+s;
  const ok=x===x-x%1&&x>=min&&x<=max_1;
  if(ok)r.set(x);
  return ok;
}
function toSafe(s){
  return s==null?"":s;
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
let _c_20=Lazy((_i) => class $StartupCode_Animation {
  static {
    _c_20=_i(this);
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
  return _c_21.Empty;
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
function New_13(subscriptionId, cancelAtPeriodEnd){
  return{subscriptionId:subscriptionId, cancelAtPeriodEnd:cancelAtPeriodEnd};
}
function New_14(subscriptionId, githubAssignedName, position){
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
class ArgumentException extends Error {
  constructor(i, _1){
    if(i=="New_2"){
      const message=_1;
      super(message);
    }
  }
}
class NonStandardPromiseRejectionException extends Error {
  reason;
  constructor(reason){
    super("Promise rejected");
    this.reason=reason;
  }
}
function Create_1(f){
  return New_15(false, f, forceLazy);
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
let _c_21=Lazy((_i) => class $StartupCode_AppendList {
  static {
    _c_21=_i(this);
  }
  static Empty;
  static {
    this.Empty={$:0};
  }
});
class FormatException extends Error {
  constructor(i, _1){
    if(i=="New_1"){
      const message=_1;
      super(message);
    }
  }
}
function New_15(created, evalOrVal, force){
  return{
    c:created, 
    v:evalOrVal, 
    f:force
  };
}
