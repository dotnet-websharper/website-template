var wsbundle=(()=>{var xn=Object.defineProperty;var di=Object.getOwnPropertyDescriptor;var hi=Object.getOwnPropertyNames;var fi=Object.prototype.hasOwnProperty;var mi=(e,t)=>{for(var n in t)xn(e,n,{get:t[n],enumerable:!0})},gi=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of hi(t))!fi.call(e,o)&&o!==n&&xn(e,o,{get:()=>t[o],enumerable:!(r=di(t,o))||r.enumerable});return e};var vi=e=>gi(xn({},"__esModule",{value:!0}),e);var Ku={};mi(Ku,{Layout:()=>bi,Runtime:()=>Sr,Support:()=>yi});function pt(e,t){return Object.assign(Object.create(e.prototype),t)}var wi=Symbol("force");function K(e){var t;function n(){return t||(t=e(o=>t=o)),t}return new Proxy(function(){},{get(o,i){return i==wi&&n(),n()[i]},set(o,i,a){return n()[i]=a,!0},construct(o,i,a){return Reflect.construct(n(),i,a)}})}function $r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e[r]===void 0&&delete e[r]}return e}function Rt(e){return e===void 0?null:{$:1,$0:e}}function Yt(e,t,n){n?e[t]=n.$0:delete e[t]}function Cr(e){return function(...t){return e(t)}}function kr(e){return Object.defineProperty(e,"resizable",{enumerable:!1,writable:!1,configurable:!1,value:!0}),e}var Ar=globalThis.WebSharperRuntime||{ScriptBasePath:"./",ScriptSkipAssemblyDir:!1};globalThis.WebSharperRuntime=Ar;var Sr=Ar;function lt(e){return"Dispose"in e}function bi(){$i();let e=Fr(),t=Er(),n=Vr(),r=_r(),o=Fr(),i=Er(),a=Vr(),s=_r(),l=Ii(),c=Di(),h=Nr(),w=Nr(),f=Li(),g=Mi(),C=new Re("New_1"),T=(C.h.push(at(C.k,"togglemenu",()=>C.i,()=>{xi()})),C),F=(T.h.push(at(T.k,"toggletheme",()=>T.i,()=>{Ci()})),T),$=(F.h.push(at(F.k,"onkeydown",()=>F.i,et=>{_i(et)})),F),m=($.h.push(at($.k,"onstoppropagation",()=>$.i,et=>{Vi(et)})),$),u=(m.h.push(at(m.k,"closeonbackgroundclick",()=>m.i,et=>{Ei(et)})),m),d=(u.h.push(at(u.k,"accountbtnclick",()=>u.i,et=>{Fi(et)})),u),v=(d.h.push(at(d.k,"accountbtnkeydown",()=>d.i,()=>{})),d),b=(v.h.push(at(v.k,"login",()=>v.i,()=>{Ri()})),v),y=(b.h.push(at(b.k,"logout",()=>b.i,et=>{Pi(et)})),b),N=(y.h.push(new R("dropdownattr",g)),y),G=(N.h.push(new R("accountbtnaria",f)),N),_=(G.h.push(new R("avatarattr",w)),G),P=(_.h.push(new R("avatarattrhamburger",h)),_),V=(P.h.push(new R("iconattr",c)),P),B=(V.h.push(new R("skeletonattr",l)),V),J=(B.h.push(new We("accountheadertext",Ni())),B),M=(J.h.push(new R("headerattrd",s)),J),z=(M.h.push(new R("btnmanageattrd",a)),M),tt=(z.h.push(new R("btnloginattrd",i)),z),it=(tt.h.push(new R("btnlogoutattrd",o)),tt),ct=(it.h.push(new R("headerattr",r)),it),At=(ct.h.push(new R("btnmanageattr",n)),ct),vt=(At.h.push(new R("btnloginattr",t)),At),mt=(vt.h.push(new R("btnlogoutattr",e)),vt),St=ao(mt.k,mt.h,[]);return mt.i=new me(St[1],Lo(St[0])),Gi(),W.Empty}function yi(){return zi()}function xi(){let e=$n("navmenu"),t=$n("openIcon"),n=$n("closeIcon"),r=globalThis.document.body;e.classList.toggle("h-screen"),t.classList.toggle("hidden-open-icon"),n.classList.toggle("visible-close-icon"),r.classList.toggle("overflow-hidden")}function $i(){eo();let e=globalThis.localStorage.getItem("color-theme");e=="dark"||e==null&&ki()?Nn(!0):Nn(!1)}function Ci(){Ai(no()=="dark"?"light":"dark")}function eo(){let e=no(),t=globalThis.document.querySelectorAll(".themed-iframe");for(let n=0,r=Si(t.length)-1;n<=r;n++){let o=t[n],i=o.getAttribute("data-src");if(i!=null){let a=new URL(i,globalThis.location.href);a.searchParams.set("theme",e),o.setAttribute("src",String(a))}}}function ki(){return globalThis.matchMedia("(prefers-color-scheme: dark)").matches}function Nn(e){e?_n().classList.add("dark"):_n().classList.remove("dark")}function Ai(e){Nn(e=="dark"),globalThis.localStorage.setItem("color-theme",e),eo()}function no(){return _n().classList.contains("dark")?"dark":"light"}function _n(){return globalThis.document.documentElement}function S(e,t){return ro(e,t),e[t]}function L(e){return e.dims===2?e.length*e.length:e.length}function ro(e,t){(t<0||t>=e.length)&&H("Index was outside the bounds of the array.")}function nr(e,t,n){ro(e,t),e[t]=n}function Si(e){let t=Ti(e);return t>2147483647?t-4294967296:t}function H(e){throw new Error(e)}function Ti(e){return(e<0?Math.ceil(e):Math.floor(e))>>>0}function Zt(e){return[e.K,e.V]}function Tr(e,t){let n=1+t-e;return n<=0?[]:Ks(n,r=>r+e)}var q=class{Equals(t){return this===t}GetHashCode(){return-1}},Re=class extends q{i;k;h;s;constructor(t){if(t=="New_1"){let n;super(),this.i=null,this.k=(n=ta(),String(n)),this.h=kr([]),Yt(this,"s",null)}}};function Ni(){return Vt.AccountHeaderText}function _i(e){e.Event.key=="Escape"&&Mt().Set(!1)}function Vi(e){e.Event.stopPropagation()}function Ei(){Mt().Get()&&Mt().Set(!1)}function Fi(){Mt().Set(!Mt().Get())}function Pi(){cn(U(()=>(Mt().Set(!1),O(Ui(!0),()=>j(null)))),null)}function Mi(){return Lt("hidden",A(e=>!e,Mt().View))}function Li(){return st("aria-expanded",A(e=>e?"true":"false",Mt().View))}function Nr(){return rt.Concat([st("src",oo()),Lt("hidden",A(e=>!e,io())),Lt("opacity-0",fe().View)])}function Di(){return rt.Concat([Lt("hidden",io()),Lt("opacity-0",fe().View)])}function Ii(){return Lt("opacity-0 hidden",A(e=>!e,fe().View))}function _r(){return an(sn())}function Vr(){return an(sn())}function Er(){return an(A(e=>!e,sn()))}function Fr(){return an(sn())}function Gi(){cn(U(()=>(fe().Set(!0),O(Oi(),()=>O(Qa(500),()=>(fe().Set(!1),dt()))))),null)}function Mt(){return Vt.isOpen}function oo(){return Vt.avatarSrcV}function io(){return Vt.hasAvatarV}function fe(){return Vt.isLoading}function an(e){return rt.Concat([Lt("hidden",A(t=>!t,e)),Lt("flex",e)])}function sn(){return Vt.isAuthedV}function Pr(){return Vt.userV}function Bi(){return Vt.displayNameV}function at(e,t,n,r){return new Oe(t,"",o=>i=>{let a=n();return a.SetAnchorRoot(o),r({Vars:a,Anchors:a,Target:o,Event:i})})}function ao(e,t,n){let r=new ht("New_5"),o=new ft("New_3"),i=D(t);try{for(;i.MoveNext();){let a=i.Current,s=a.Name;o.SAdd(s),r.set_Item(s,a)}}finally{let a=i;typeof a=="object"&&lt(a)&&i.Dispose()}return[Vo(t,lr(a=>{let s=a[0],l=a[1],c=a[2];if(o.Contains(s))return null;{let h=l===0?X.GetOrAddHoleFor(e,s,()=>{let w=c==null?null:p(c.$0),f=w==null?"":w.$0,g=E.Create_1(f);return new yt(s,g)}):l===1?X.GetOrAddHoleFor(e,s,()=>{let w=c==null?null:p(c.$0),f=w==null?0:w.$0,g=E.Create_1(f);return new Qe(s,g)}):l===2?X.GetOrAddHoleFor(e,s,()=>{let w=c==null?null:p(c.$0),f=w==null?!1:w.$0,g=E.Create_1(f);return new Xe(s,g)}):l===3?X.GetOrAddHoleFor(e,s,()=>{let w=c==null?null:p(c.$0),f=w==null?-864e13:w.$0,g=E.Create_1(f);return new tn(s,g)}):l===4?X.GetOrAddHoleFor(e,s,()=>new en(s,E.Create_1([]))):l===5?X.GetOrAddHoleFor(e,s,()=>new be(s,E.Create_1(p(globalThis.document.querySelector("[ws-dom="+s+"]"))))):l===6?X.GetOrAddHoleFor(e,s,()=>{let w=c==null?null:p(c.$0),f=w==null?[]:w.$0,g=E.Create_1(f);return new nn(s,g)}):H("Invalid kind for template Var type: "+String(l));return r.set_Item(s,h),p(h)}},n)),{$:0,$0:r}]}function Ri(){globalThis.location.href=Wi()}function Wi(){return ji(globalThis.location.pathname+globalThis.location.search)}function Ui(e){return U(()=>ts(we(U(()=>O(os(),()=>j(null))),t=>(console.error("AuthClient.Logout RPC failed",t),dt())),U(()=>(Jt().Set(null),e?we(U(()=>(globalThis.location.reload(),dt())),()=>dt()):dt()))))}function Oi(){return U(()=>{let e=Jt().Get();return e!=null&&e.$==1?j(p(e.$0)):(Vn().Set(!0),go(U(()=>we(U(()=>O(is(),t=>(Jt().Set(t),j(t)))),t=>(console.error("AuthClient.FetchMe RPC failed",t),Jt().Set(null),j(null)))),()=>{Vn().Set(!1)}))})}function Hi(){return Ee.UserView}function qi(){return Ee.IsAuthedView}function ji(e){return"https://api.websharper.io/auth/github/start?returnUrl="+encodeURIComponent(e)}function Jt(){return Ee.userVar}function Vn(){return Ee.isFetchingVar}var W=class e extends q{docNode;updates;static get Empty(){return e.Mk(null,ve())}static Mk(t,n){return new e(t,n)}static TextView(t){let n=Al();return e.Mk(Rs(n),A(r=>{Sl(n,r)},t))}static RunBefore(t,n){let r=globalThis.document.createTextNode("");t.parentNode.insertBefore(r,t),e.RunBetween(r,t,n)}static RunBetween(t,n,r){hr(n,r.docNode);let o=Tl(t,n,r.docNode);qe(Un()||On()?Qr(zr(!1,o,r.docNode)):()=>{Kr(!1,o,r.docNode)},r.updates)}static RunInPlace(t,n,r){let o=Nl(n,r.docNode);qe(Un()||On()?Qr(zr(t,o,r.docNode)):()=>{Kr(t,o,r.docNode)},r.updates)}static TextNode(t){return e.Mk(Ws(globalThis.document.createTextNode(t)),ve())}ReplaceInDom(t){let n=globalThis.document.createTextNode("");t.parentNode.replaceChild(n,t),e.RunBefore(n,this)}constructor(t,n){super(),this.docNode=t,this.updates=n}};function zi(){let e=va(),t=ga(),n=ma(),r=fa(),o=W.TextView(Ka()),i=W.TextView(za()),a=W.TextView(ja()),s=W.TextView(qa()),l=W.TextView(Ha()),c=W.TextView(Oa()),h=W.TextView(Ua()),w=W.TextView(Wa()),f=W.TextView(Ra()),g=W.TextView(Ba()),C=W.TextView(Ga()),T=W.TextView(Ia()),F=new Re("New_1"),$=(F.h.push(new Je("onafterrender","",()=>{cn(Va(),null)})),F),m=($.h.push(new nt("proname",T)),$),u=(m.h.push(new nt("freename",C)),m),d=(u.h.push(new nt("propriceamount",g)),u),v=(d.h.push(new nt("propricelabel",f)),d),b=(v.h.push(new nt("freepriceamount",w)),v),y=(b.h.push(new nt("freepricelabel",h)),b),N=(y.h.push(new nt("prototallabel",c)),y),G=(N.h.push(new nt("prototalamount",l)),N),_=(G.h.push(new nt("freetotallabel",s)),G),P=(_.h.push(new nt("freetotalamount",a)),_),V=(P.h.push(new nt("pronote",i)),P),B=(V.h.push(new nt("freenote",o)),V),J=(B.h.push(new R("billmonthattr",r)),B),M=(J.h.push(new R("billyearattr",n)),J),z=(M.h.push(new R("procheckoutattr",t)),M),tt=(z.h.push(new R("freecheckoutattr",e)),z),it=(tt.h.push(new yt("seatcount",ln())),tt),ct=(it.h.push(at(it.k,"onbillmonth",()=>it.i,x=>{wa(x)})),it),At=(ct.h.push(at(ct.k,"onbillyear",()=>ct.i,x=>{ba(x)})),ct),vt=(At.h.push(at(At.k,"onseatminus",()=>At.i,x=>{ya(x)})),At),mt=(vt.h.push(at(vt.k,"onseatplus",()=>vt.i,x=>{xa(x)})),vt),St=(mt.h.push(new yt("contactsubjectvar",E.Lens(Ft(),x=>x.subject,(x,Tt)=>Ut(Tt,x.message,x.email,x.name,x.country)))),mt),et=(St.h.push(new yt("contactmessagevar",E.Lens(Ft(),x=>x.message,(x,Tt)=>Ut(x.subject,Tt,x.email,x.name,x.country)))),St),ce=(et.h.push(new yt("contactemailvar",E.Lens(Ft(),x=>x.email,(x,Tt)=>Ut(x.subject,x.message,Tt,x.name,x.country)))),et),Bt=(ce.h.push(new yt("contactnamevar",E.Lens(Ft(),x=>x.name,(x,Tt)=>Ut(x.subject,x.message,x.email,Tt,x.country)))),ce),Kt=(Bt.h.push(new yt("contactcountryvar",E.Lens(Ft(),x=>x.country,(x,Tt)=>Ut(x.subject,x.message,x.email,x.name,Tt)))),Bt),br=(Kt.h.push(new R("contactsendbuttonattr",ha())),Kt),Le=(br.h.push(new We("contactsendbuttontext",da())),br),yn=(Le.h.push(at(Le.k,"oncontactsendclick",()=>Le.i,x=>{$a(x)})),Le),yr=ao(yn.k,yn.h,[["seatcount",0,p("1")],["contactsubjectvar",0,p("WebSharper support")],["contactmessagevar",0,null],["contactemailvar",0,null],["contactnamevar",0,null],["contactcountryvar",0,p("United States")]]),xr=new me(yr[1],Ya(yr[0]));return(yn.i=xr,xr).Doc}function Ki(e){let t=[],n;for(var r in e)t.push(e[r]);return t}var me=class extends q{doc;allVars;anchorRoot;SetAnchorRoot(t){this.anchorRoot=t}get Doc(){return this.doc}Hole(t){return this.allVars.Item(t)}constructor(t,n){super(),this.doc=n,this.allVars=t.$==0?t.$0:H("Should not happen"),this.anchorRoot=null}},Z=class extends q{ForTextView(){return console.warn("Content hole filled with attribute data",this.Name),null}AddAttribute(t,n){console.warn("Var hole filled with non-Var data",this.Name)}get AsChoiceView(){return console.warn("Attribute value hole filled with non-text data",this.Name),wr("")}ApplyVarHole(t){console.warn("Not a var hole: ",this.Name)}},R=class e extends Z{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}constructor(t,n){super(),this.name=t,this.fillWith=n}},We=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return p(this.fillWith)}get AsChoiceView(){return zt(this.fillWith)}constructor(t,n){super(),this.name=t,this.fillWith=n}},Vt=K(e=>class{static{Vt=e(this)}static AccountHeaderText;static displayNameV;static hasAvatarV;static avatarSrcV;static isLoading;static isAuthedV;static userV;static isOpen;static{this.isOpen=E.Create_1(!1),this.userV=Hi(),this.isAuthedV=qi(),this.isLoading=E.Create_1(!0),this.avatarSrcV=A(n=>n!=null&&n.$==1?Pt(n.$0.avatarUrl)?"":n.$0.avatarUrl:"",Pr()),this.hasAvatarV=A(n=>n!="",oo()),this.displayNameV=A(n=>n==null||Pt(n.$0.login)?"Account":n.$0.login,Pr()),this.AccountHeaderText=Bi()}});function Xt(e,t){if(e===t)return 0;{let o=typeof e;switch(o=="boolean"||o=="number"||o=="bigint"||o=="string"?1:o=="object"?2:o=="function"?3:o=="symbol"?4:0){case 0:return typeof t>"u"?0:-1;case 1:return e<t?-1:1;case 2:if(e===null)return-1;if(t===null)return 1;if("CompareTo"in e)return e.CompareTo(t);if("CompareTo0"in e)return e.CompareTo0(t);if(e instanceof Array&&t instanceof Array)return Yi(e,t);if(e instanceof Date&&t instanceof Date)return Zi(e,t);{let i=e,a=t,s=[0],l;for(var n in i)if((c=>i.hasOwnProperty(c)?a.hasOwnProperty(c)?(s[0]=Xt(i[c],a[c]),s[0]!==0):(s[0]=1,!0):!1)(n))break;if(s[0]===0){let c;for(var r in a)if((h=>a.hasOwnProperty(h)?!i.hasOwnProperty(h)&&(s[0]=-1,!0):!1)(r))break}return s[0]}break;case 3:return H("Cannot compare function values.");case 4:return H("Cannot compare symbol values.")}}}function k(e,t){if(e===t)return!0;{let o=typeof e;if(o=="object"){if(e==null||t===null||t===void 0||!k(typeof t,"object"))return!1;if("Equals"in e)return e.Equals(t);if("Equals"in t)return!1;if(e instanceof Array&&t instanceof Array)return Mr(e,t);if(e instanceof Date&&t instanceof Date)return Ji(e,t);{let i=e,a=t,s=[!0],l;for(var n in i)if((c=>(s[0]=!i.hasOwnProperty(c)||a.hasOwnProperty(c)&&k(i[c],a[c]),!s[0]))(n))break;if(s[0]){let c;for(var r in a)if((h=>(s[0]=!a.hasOwnProperty(h)||i.hasOwnProperty(h),!s[0]))(r))break}return s[0]}}else return o=="function"&&("$Func"in e?e.$Func===t.$Func&&e.$Target===t.$Target:"$Invokes"in e&&"$Invokes"in t&&Mr(e.$Invokes,t.$Invokes))}}function ge(e){let t=typeof e;return t=="function"?0:t=="boolean"?e?1:0:t=="number"?e:t=="string"?Be(e):t=="object"?e==null?0:e instanceof Array?Qi(e):Xi(e):t=="bigint"?Be(String(e)):t=="symbol"?Be(e.description):0}function Yi(e,t){let n,r;if(L(e)<L(t))return-1;if(L(e)>L(t))return 1;for(n=0,r=0;n===0&&r<L(e);)n=Xt(S(e,r),S(t,r)),r=r+1;return n}function Zi(e,t){return Xt(e.getTime(),t.getTime())}function Mr(e,t){let n,r;if(L(e)===L(t)){for(n=!0,r=0;n&&r<L(e);)k(S(e,r),S(t,r))||(n=!1),r=r+1;return n}else return!1}function Ji(e,t){return e.getTime()===t.getTime()}function Be(e){let t;if(e===null)return 0;t=5381;for(let n=0,r=e.length-1;n<=r;n++)t=Ue(t,e[n].charCodeAt());return t}function Qi(e){let t=-34948909;for(let n=0,r=L(e)-1;n<=r;n++)t=Ue(t,ge(S(e,n)));return t}function Xi(e){if("GetHashCode"in e)return e.GetHashCode();{let n=[0],r;for(var t in e)if((o=>(n[0]=Ue(Ue(n[0],Be(o)),ge(e[o])),!1))(t))break;return n[0]}}function Ue(e,t){return(e<<5)+e+t}function ta(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]","g"),e=>{let t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}var Oe=class e extends Z{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.key,this.fillWith)}constructor(t,n,r){super(),this.name=t,this.key=n,this.fillWith=r}};function ea(e){let t={},n=D(e);try{for(;n.MoveNext();){let r=n.Current;t[r[0]]=r[1]}}finally{let r=n;typeof r=="object"&&lt(r)&&n.Dispose()}return t}function $n(e){return globalThis.document.getElementById(e)}function De(e){return"$"+String(e)}var He=class extends q{};function Lt(e,t){return dn(t,n=>r=>r?fs(n,e):ms(n,e))}function st(e,t){return dn(t,n=>r=>n.setAttribute(e,r))}function na(e,t){return dn(t,n=>r=>r?n.setAttribute(e,""):n.removeAttribute(e))}function ra(e,t){return rt.A3(n=>{n.addEventListener(e,r=>t(n)(r),!1)})}function Lr(e){return rt.A4(e)}function oa(e){return oe(Yo(),e)}function ia(e){return oe(Zo(),e)}function aa(e){return oe(Jo(),e)}function sa(e){return oe(Qo(),e)}function la(e){return oe(Xo(),e)}function ua(e){return oe(ti(),e)}function oe(e,t){let n=e(t);return bo(rt.A3(n[0]),ca(n[1],n[2]))}function ca(e,t){return dn(t,e)}function A(e,t){return Se(()=>ie(e,t()))}function ve(e){let t={s:It(e)};return()=>t}function Se(e){let t={c:null,o:e};return()=>{let n=t.c;if(n===null){n=t.o(),t.c=n;let r=n.s;return r!=null&&r.$==0?t.o=null:ko(n,()=>{t.c=null}),n}else return n}}function Et(e,t,n){return Se(()=>hn(e,t(),n()))}function so(e,t,n,r){return Se(()=>As(e,t(),n(),r()))}function qe(e,t){function n(){Ms(t(),e,()=>{Dt().Fork(n)})}Dt().Fork(n)}function pa(e){return Se(()=>Ls(jt(t=>t(),e)))}function je(e,t){return Se(()=>Ds(e(),t()))}var rt=class e{static Concat(t){let n=fn(t);return mn(or(),(r,o)=>bo(r,o),n)}static A1(t){return pt(e,{$:1,$0:t})}static A2(t,n){return pt(e,{$:2,$0:t,$1:n})}static HandlerImpl(t,n){return e.A3(r=>{r.addEventListener(t,o=>n(r)(o),!1)})}static Create(t,n){return e.A3(r=>{r.setAttribute(t,n)})}static A4(t){return pt(e,{$:4,$0:t})}static A3(t){return pt(e,{$:3,$0:t})}$;$0;$1};function da(){return sr.ContactSendButtonText}function ha(){return sr.ContactSendButtonAttr}function fa(){let e=A(t=>t.$==1?"false":"true",Q().View);return rt.Concat([st("data-active",e),st("aria-pressed",e)])}function ma(){let e=A(t=>t.$==1?"true":"false",Q().View);return rt.Concat([st("data-active",e),st("aria-pressed",e)])}function ga(){return st("href",Et((e,t)=>"./checkout?plan=pro&interval="+String(uo(e))+"&seats="+String(un(t)),Q().View,lo()))}function va(){return st("href",A(e=>"./checkout?plan=freelancer&interval="+uo(e)+"&seats=1",Q().View))}function wa(){Q().Set(Os)}function ba(){Q().Set(_o)}function ya(){co(-1,ln())}function xa(){co(1,ln())}function $a(e){e.Event.preventDefault();let t=Ft().Get();po(t)?cn(U(()=>(ze().Set(!0),go(U(()=>O(Pa(t),n=>n?(alert("Message sent successfully!"),Ca(),dt()):(alert("Failed to send message. Please try again later."),dt()))),()=>{ze().Set(!1)}))),null):alert("Please fill in all required fields.")}function Ca(){Ft().Set(Ut("WebSharper support","","","","United States"))}var E=K(e=>class extends q{static{E=e(this)}static Lens(n,r,o){let i=Us(),a=A(r,n.View);return new class extends He{constructor(){super()}Get(){return r(n.Get())}Set(s){return n.Update(l=>o(l,s))}SetFinal(s){return this.Set(s)}Update(s){return n.Update(l=>o(l,s(r(l))))}UpdateMaybe(s){return n.UpdateMaybe(l=>{let c=s(r(l));return c==null?null:p(o(l,c.$0))})}get View(){return a}get Id(){return i}}}static Create_1(n){return new Ln(!1,{s:vn(n,[])},n)}});function Ft(){return Ct.ContactFormVar}function ln(){return Ct.SeatCountText}function Q(){return Ct.intervalVar}function lo(){return Ct.SeatCount}function uo(e){return e.$==1?"year":"month"}function un(e){let r=Xt(999,e)===-1?999:e;return Xt(1,r)===1?1:r}function co(e,t){let n=t.Get(),r=n==null?"":pr(n),i=(l=>{let c,h=(c=0,[dr(l,{get:()=>c,set:w=>{c=w}}),c]);return h[0]?h[1]:1})(r)+e,a=un(i),s=String(a);t.Set(s)}function po(e){return!Pt(e.message)&&!Pt(e.email)&&!Pt(e.name)&&Ta(e.email)}function ze(){return Ct.IsSendingVar}function ka(){return Ct.CanSendView}function Ke(){return Ct.fallbackPro}function En(){return Ct.fallbackFreelancer}function wt(){return Ct.catalogVar}function Dr(e){if(e==null)return null;{let t=String(e);return rr(t)?p(t):null}}function Ir(e,t){let n=To(rr,t.Name);return n==null?e:n.$0}function Ie(e,t,n){let r=ho(t,n),o=r==null?null:p(r.$0.Amount),i=Na(e,n);return o==null?i:o.$0}function Aa(e){return e.$==1?"/ seat / year":"/ seat / month"}function Sa(e){return e.$==1?"/ year":"/ month"}function Gr(e){return e.$==1?"Total (yearly)":"Total (monthly)"}function Br(e,t){let n=To(rr,t.Description);return n==null?e:n.$0}function Rr(e,t,n){let r=_a(t,e),o=ho(r,n),i=o==null?r.Month:(o.$0,o),a=i==null?r.Year:(i.$0,i),s=a==null?null:p(a.$0.Currency.toUpperCase());return s==null?"USD":s.$0}function Ta(e){if(e==null)return!1;{let t=pr(e);return t.indexOf("@")!=-1&&t.indexOf(".")!=-1}}function rr(e){return!Pt(e)}function ho(e,t){return t.$==1?e.Year:e.Month}function Na(e,t){return t.$==1?e.Year.$0.Amount:e.Month.$0.Amount}function _a(e,t){let n=t.toLowerCase();return n=="pro"?e.Pro:n=="freelancer"?e.Freelancer:Ke()}function Ut(e,t,n,r,o){return{subject:e,message:t,email:n,name:r,country:o}}function Va(){return U(()=>O(Ea(),e=>(e==null||Fa(e.$0),dt())))}function Ea(){return U(()=>{let e=Ma();return e==null?O(La(),t=>{let n;return t!=null&&t.$==1&&L(t.$0)>0&&(n=t.$0,!0)?(Da(n),j(p(n))):j(null)}):j(p(e.$0))})}function Fa(e){wt().Set(rl((t,n)=>{let r=String(n.code).toLowerCase(),o=String(n.interval).toLowerCase(),i=de(n.unitAmountCents/100,(Pt(n.currency)?"usd":n.currency).toUpperCase()),a=Dr(n.name),s=n.description,l=s==null?null:Dr(s.$0);return r=="pro"?Gn(Wr(t.Pro,o,i,a,l),t.Freelancer):r=="freelancer"?Gn(t.Pro,Wr(t.Freelancer,o,i,a,l)):t},wt().Get(),e))}function Pa(e){return U(()=>{let t=new FormData;return t.append("subject",e.subject),t.append("message",e.message),t.append("email",e.email),t.append("name",e.name),t.append("country",e.country),we(U(()=>{let n;return O(Il(globalThis.fetch("https://api.intellifactory.com/api/contact",(n={},n.method="POST",n.body=t,n))),r=>j(r.ok))}),()=>j(!1))})}function Ma(){try{let e=globalThis.sessionStorage.getItem("planprices");return e==null||Pt(e)?null:p(JSON.parse(e))}catch{return null}}function La(){return U(()=>we(U(()=>O(as(),e=>j(p(e)))),()=>j(null)))}function Da(e){try{let t=JSON.stringify(e);globalThis.sessionStorage.setItem("planprices",t)}catch{}}function Wr(e,t,n,r,o){let i=he(r==null?e.Name:p(r.$0),o==null?e.Description:p(o.$0),e.Month,e.Year);return t=="month"?he(i.Name,i.Description,p(n),i.Year):t=="year"?he(i.Name,i.Description,i.Month,p(n)):i}function Ia(){return ut.ProName}function Ga(){return ut.FreeName}function Ba(){return ut.ProPriceAmount}function Ra(){return ut.ProPriceLabel}function Wa(){return ut.FreePriceAmount}function Ua(){return ut.FreePriceLabel}function Oa(){return ut.ProTotalLabel}function Ha(){return ut.ProTotalAmount}function qa(){return ut.FreeTotalLabel}function ja(){return ut.FreeTotalAmount}function za(){return ut.ProNote}function Ka(){return ut.FreeNote}function p(e){return{$:1,$0:e}}var Cn;var kn;function Ya(e){return e?cl("support",p("content"),()=>Mn(`\r
        <div class="space-y-20" ws-onafterrender="OnAfterRender">\r
            <!-- Hero / Banner -->\r
            <section class="pt-28 sm:pt-32">\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <div class="grid items-center gap-8 md:grid-cols-12">\r
                        <div class="md:col-span-7 text-center md:text-left">\r
                            <h1 class="font-bold tracking-tight text-gray-950 dark:text-white text-4xl sm:text-5xl">\r
                                WebSharper Expert Support\r
                            </h1>\r
                            <p class="mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 max-w-2xl md:mx-0 mx-auto">\r
                                Our experienced WebSharper support team is available to help you make the right decisions for your development project, and can save you hundreds of hours when important and difficult questions arise.\r
                            </p>\r
\r
                            <!-- Chips -->\r
                            <div class="mt-4 flex flex-wrap justify-center md:justify-start gap-2">\r
                                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200">\r
                                    Email & web support\r
                                </span>\r
                                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200">\r
                                    First response: 4h-2d\r
                                </span>\r
                                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200">\r
                                    Mentoring & training available\r
                                </span>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Visual -->\r
                        <div class="md:col-span-5">\r
                            <figure class="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-900">\r
                                <img src="./Assets/images/slay.png" alt="WebSharper support: experts reviewing code and architecture" class="w-full h-auto">\r
                            </figure>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section class="scroll-my-16">\r
                <div class="mx-2 md:mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <div class="rounded-3xl overflow-hidden border dark:border-gray-800">\r
                        <div class="py-12 lg:py-16 lg:px-16 border-b dark:border-gray-800">\r
                            <h2 class="font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white">\r
                                Quick, practical help from the people who build WebSharper\r
                            </h2>\r
                            <p class="mt-3 text-lg text-gray-700 dark:text-gray-300">\r
                                Get senior guidance on architecture, performance, reactive UI, and integrations plus hands-on fixes when you need them.\r
                            </p>\r
                        </div>\r
\r
                        <div class="lg:px-16">\r
                            <!-- Visual / proof -->\r
                            <div class="lg:col-span-5 lg:-mr-10 py-12 md:py-16">\r
                                <div class="relative">\r
                                    <div class="absolute translate-y-1/2 mx-auto blur-3xl inset-0 rounded-t-full bg-brand-primary/20 dark:bg-brand-primary/20"></div>\r
                                    <figure class="relative rounded-2xl overflow-hidden border bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-sm w-1/2 mx-auto">\r
\r
                                        <img src="./Assets/images/slay.png" alt="Support walkthrough: issue context, guidance, and fix" class="w-full h-auto">\r
                                    </figure>\r
                                    <!-- short 15\uFFFD20s looped video instead of static image -->\r
                                    <!--\r
                                    <video class="relative mt-4 w-full rounded-2xl border border-gray-200 dark:border-gray-800" autoplay muted loop playsinline poster="./Assets/images/support-video-poster.png">\r
                                        <source src="./videos/support-teaser.mp4" type="video/mp4">\r
                                    </video>\r
                                    -->\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <!-- Support value props -->\r
            <section class="mt-12">\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <ul class="grid gap-4 md:grid-cols-3">\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m7 9l5 3.5L17 9"></path><path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></path></g></svg>\r
                                <span>Email and web support</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Email us your support queries, architectural or best practice questions, or post them to our dedicated support site.\r
                            </p>\r
                        </li>\r
\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path fill="currentColor" d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></path><path fill="currentColor" fill-rule="evenodd" d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z" clip-rule="evenodd"></path></svg>\r
                                <span>Fast response time</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Receive the first response to your queries from within 4 hours up to 2 days, depending on your selected support plan..\r
                            </p>\r
                        </li>\r
\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96m0 0v288"></path></svg>\r
                                <span>Mentoring and training</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Pick a Start-up or Enterprise plan and jumpstart your team's productivity with our online WebSharper training and mentoring.\r
                            </p>\r
                        </li>\r
\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16"><path fill="currentColor" d="M7 3a2 2 0 0 1 4 0h1.5A1.5 1.5 0 0 1 14 4.5V7h-1a1 1 0 0 0 0 2h1v2.5a1.5 1.5 0 0 1-1.5 1.5H11a2 2 0 0 1-4 0H5.5A1.5 1.5 0 0 1 4 11.5V10a2 2 0 0 1 0-4V4.5A1.5 1.5 0 0 1 5.5 3zm2-1a1 1 0 0 0-1 1v1H5.5a.5.5 0 0 0-.5.5V7H4a1 1 0 0 0 0 2h1v2.5a.5.5 0 0 0 .5.5H8v1a1 1 0 0 0 2 0v-1h2.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 0-4V4.5a.5.5 0 0 0-.5-.5H10V3a1 1 0 0 0-1-1"></path></svg>\r
                                <span>Extensions support</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Working heavily with WebSharper extensions? Get the help you need with any issues you encounter in these extensions.\r
                            </p>\r
                        </li>\r
\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path fill="currentColor" d="m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9"></path></svg>\r
                                <span>Architectural review</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Next to support questions, we can also help you decide on the best architecture for your project, or give best practice guidelines for your team.\r
                            </p>\r
                        </li>\r
\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 15v-3.062A3.938 3.938 0 0 0 15.063 8H8.936A3.938 3.938 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z"></path><path d="M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1"></path><path stroke-linecap="round" d="M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15"></path></g></svg>\r
                                <span>Priority bugfixes</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Your support ticket jumps to the front of our priority queue and becomes the first to fix. Get the most timely help when you need it most.\r
                            </p>\r
                        </li>\r
                    </ul>\r
                </div>\r
            </section>\r
\r
        <section id="plans" class="scroll-mt-20 scroll-smooth">\r
            <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                <h2 class="text-center font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white">\r
                    Choose your plan\r
                </h2>\r
                <p class="text-center mt-3 text-lg text-gray-700 dark:text-gray-300">\r
                    Monthly or yearly billing, per-seat for teams or a freelancer option.\r
                </p>\r
\r
                    <!-- Billing period toggle -->\r
                    <div class="mx-auto mt-6 flex w-full max-w-xs items-center justify-center rounded-xl border border-gray-200 bg-white p-1\r
                                dark:bg-gray-950 dark:border-gray-800">\r
                        <button ws-onclick="OnBillMonth" ws-attr="BillMonthAttr" type="button" class="cursor-pointer dark:text-white text-gray-700 text flex-1 rounded-lg py-2 text-sm font-medium transition\r
                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r
                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900" data-active="false" aria-pressed="false">\r
                            Per month\r
                        </button>\r
                        <button ws-onclick="OnBillYear" ws-attr="BillYearAttr" type="button" class="cursor-pointer dark:text-white text-gray-700 flex-1 rounded-lg py-2 text-sm font-medium transition\r
                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r
                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900" data-active="true" aria-pressed="true">\r
                            Per year\r
                        </button>\r
                    </div>\r
\r
                    <!-- Plans grid -->\r
                    <div class="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2">\r
                        <!-- Professional (per seat) -->\r
                        <div class="rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r
                                    dark:bg-gray-950 dark:border-gray-800" data-price-month="250" data-price-year="2500">\r
                            <div class="flex items-start justify-between gap-4">\r
                                <div>\r
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Plan</div>\r
                                    <div ws-hole="ProName" class="text-2xl font-bold text-gray-950 dark:text-white">\r
                                        Professional\r
                                    </div>\r
                                    <div class="mt-1 text-base text-gray-700 dark:text-gray-300">\r
                                        <span ws-hole="ProPriceAmount">$2,500</span>\r
                                        <span class="text-gray-600 dark:text-gray-400" ws-hole="ProPriceLabel">\r
                                            / seat / year\r
                                        </span>\r
                                    </div>\r
                                </div>\r
\r
                                <!-- Seat selector -->\r
                                <div class="flex items-center gap-2">\r
                                    <button ws-onclick="OnSeatMinus" class="cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r
                                                dark:border-white/20 dark:text-white" aria-label="Decrease seats" type="button">\r
                                        -\r
                                    </button>\r
                                    <input type="text" ws-var="SeatCount" inputmode="numeric" pattern="[0-9]*" min="1" step="1" value="1" class="w-20 text-center rounded-xl border border-gray-300 bg-transparent dark:border-white/20 text-gray-900 dark:text-white h-10" aria-label="Seat count">\r
                                    <button ws-onclick="OnSeatPlus" class="cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r
                                                dark:border-white/20 dark:text-white" aria-label="Increase seats" type="button">\r
                                        +\r
                                    </button>\r
                                </div>\r
                            </div>\r
\r
                            <!-- Total -->\r
                            <div class="mt-4 flex items-center justify-between">\r
                                <div class="text-sm text-gray-600 dark:text-gray-400" ws-hole="ProTotalLabel">\r
                                    Total (yearly)\r
                                </div>\r
                                <div class="text-xl font-semibold text-gray-950 dark:text-white" ws-hole="ProTotalAmount">\r
                                    $2,500\r
                                </div>\r
                            </div>\r
\r
                            <!-- CTA -->\r
                            <a ws-attr="ProCheckoutAttr" class="w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r
                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r
                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4">\r
                                <span class="relative text-sm">Continue to checkout</span>\r
                            </a>\r
\r
                            <p class="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center" ws-hole="ProNote">\r
                                Assign GitHub usernames after purchase. Prices in USD.\r
                            </p>\r
                        </div>\r
\r
                        <!-- Freelancer (1 seat) -->\r
                        <div class="rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r
                                    dark:bg-gray-950 dark:border-gray-800">\r
                            <div class="flex items-start justify-between gap-4">\r
                                <div>\r
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Plan</div>\r
                                    <div ws-hole="FreeName" class="text-2xl font-bold text-gray-950 dark:text-white">\r
                                        Freelancer\r
                                    </div>\r
                                    <div class="mt-1 text-base text-gray-700 dark:text-gray-300">\r
                                        <span ws-hole="FreePriceAmount">$300</span>\r
                                        <span class="text-gray-600 dark:text-gray-400" ws-hole="FreePriceLabel">\r
                                            / year\r
                                        </span>\r
                                    </div>\r
                                </div>\r
                                <div class="rounded-xl border border-gray-300 px-3 h-10 flex items-center\r
                                            text-gray-800 dark:border-white/20 dark:text-white">\r
                                    1 seat\r
                                </div>\r
                            </div>\r
\r
                            <!-- Total -->\r
                            <div class="mt-4 flex items-center justify-between">\r
                                <div class="text-sm text-gray-600 dark:text-gray-400" ws-hole="FreeTotalLabel">\r
                                    Total (yearly)\r
                                </div>\r
                                <div class="text-xl font-semibold text-gray-950 dark:text-white" ws-hole="FreeTotalAmount">\r
                                    $300\r
                                </div>\r
                            </div>\r
\r
                            <!-- CTA -->\r
                            <a ws-attr="FreeCheckoutAttr" class="w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r
                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r
                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4">\r
                                <span class="relative text-sm">Continue to checkout</span>\r
                            </a>\r
\r
                            <p class="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center" ws-hole="FreeNote">\r
                                Ideal for solo developers. Prices in USD.\r
                            </p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <!-- contact us -->\r
            <section class="scroll-my-0 py-7 dark:bg-gray-900 border-t-2 border-b-2 dark:border-none">\r
                <div class="mx-auto max-w-xl p-8 rounded content mb-10">\r
                    <h2 class="header text-center mb-8">Contact us</h2>\r
\r
                    <form method="post">\r
\r
                        <!-- Subject -->\r
                        <div class="mb-6">\r
                            <label for="emailSubject" class="block font-semibold mb-2">Subject</label>\r
                            <input type="text" name="email-subject" ws-var="ContactSubjectVar" class="w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400" value="WebSharper support">\r
                        </div>\r
\r
                        <!-- Message -->\r
                        <div class="mb-6">\r
                            <label for="emailMessage" class="block font-semibold mb-2">Message</label>\r
                            <textarea name="email-message" rows="5" ws-var="ContactMessageVar" class="w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"></textarea>\r
                        </div>\r
\r
                        <!-- Row with Email, Name, Country -->\r
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">\r
                            <!-- Email -->\r
                            <div>\r
                                <label for="emailAddress" class="block font-semibold mb-2">Your email address</label>\r
                                <input type="email" name="email-address" ws-var="ContactEmailVar" class="w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400">\r
                            </div>\r
\r
                            <!-- Name -->\r
                            <div>\r
                                <label for="emailName" class="block font-semibold mb-2">Your name</label>\r
                                <input type="text" ws-var="ContactNameVar" name="name" class="w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400">\r
                            </div>\r
\r
                            <!-- Country -->\r
                            <div>\r
                                <label for="emailCountry" class="block font-semibold mb-2">Your country</label>\r
                                <select name="email-country" ws-var="ContactCountryVar" class="w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400">\r
                                    <option value="Afghanistan">Afghanistan</option>\r
                                    <option value="Albania">Albania</option>\r
                                    <option value="Algeria">Algeria</option>\r
                                    <option value="Andorra">Andorra</option>\r
                                    <option value="Angola">Angola</option>\r
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>\r
                                    <option value="Argentina">Argentina</option>\r
                                    <option value="Armenia">Armenia</option>\r
                                    <option value="Australia">Australia</option>\r
                                    <option value="Austria">Austria</option>\r
                                    <option value="Azerbaijan">Azerbaijan</option>\r
                                    <option value="Bahamas">Bahamas</option>\r
                                    <option value="Bahrain">Bahrain</option>\r
                                    <option value="Bangladesh">Bangladesh</option>\r
                                    <option value="Barbados">Barbados</option>\r
                                    <option value="Belarus">Belarus</option>\r
                                    <option value="Belgium">Belgium</option>\r
                                    <option value="Belize">Belize</option>\r
                                    <option value="Benin">Benin</option>\r
                                    <option value="Bhutan">Bhutan</option>\r
                                    <option value="Bolivia">Bolivia</option>\r
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>\r
                                    <option value="Botswana">Botswana</option>\r
                                    <option value="Brazil">Brazil</option>\r
                                    <option value="Brunei">Brunei</option>\r
                                    <option value="Bulgaria">Bulgaria</option>\r
                                    <option value="Burkina Faso">Burkina Faso</option>\r
                                    <option value="Burundi">Burundi</option>\r
                                    <option value="Cabo Verde">Cabo Verde</option>\r
                                    <option value="Cambodia">Cambodia</option>\r
                                    <option value="Cameroon">Cameroon</option>\r
                                    <option value="Canada">Canada</option>\r
                                    <option value="Central African Republic">Central African Republic</option>\r
                                    <option value="Chad">Chad</option>\r
                                    <option value="Chile">Chile</option>\r
                                    <option value="China">China</option>\r
                                    <option value="Colombia">Colombia</option>\r
                                    <option value="Comoros">Comoros</option>\r
                                    <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>\r
                                    <option value="Costa Rica">Costa Rica</option>\r
                                    <option value="Croatia">Croatia</option>\r
                                    <option value="Cuba">Cuba</option>\r
                                    <option value="Cyprus">Cyprus</option>\r
                                    <option value="Czech Republic">Czech Republic</option>\r
                                    <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>\r
                                    <option value="Denmark">Denmark</option>\r
                                    <option value="Djibouti">Djibouti</option>\r
                                    <option value="Dominica">Dominica</option>\r
                                    <option value="Dominican Republic">Dominican Republic</option>\r
                                    <option value="Ecuador">Ecuador</option>\r
                                    <option value="Egypt">Egypt</option>\r
                                    <option value="El Salvador">El Salvador</option>\r
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>\r
                                    <option value="Eritrea">Eritrea</option>\r
                                    <option value="Estonia">Estonia</option>\r
                                    <option value="Eswatini">Eswatini</option>\r
                                    <option value="Ethiopia">Ethiopia</option>\r
                                    <option value="Fiji">Fiji</option>\r
                                    <option value="Finland">Finland</option>\r
                                    <option value="France">France</option>\r
                                    <option value="Gabon">Gabon</option>\r
                                    <option value="Gambia">Gambia</option>\r
                                    <option value="Georgia">Georgia</option>\r
                                    <option value="Germany">Germany</option>\r
                                    <option value="Ghana">Ghana</option>\r
                                    <option value="Greece">Greece</option>\r
                                    <option value="Grenada">Grenada</option>\r
                                    <option value="Guatemala">Guatemala</option>\r
                                    <option value="Guinea">Guinea</option>\r
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>\r
                                    <option value="Guyana">Guyana</option>\r
                                    <option value="Haiti">Haiti</option>\r
                                    <option value="Honduras">Honduras</option>\r
                                    <option value="Hungary">Hungary</option>\r
                                    <option value="Iceland">Iceland</option>\r
                                    <option value="India">India</option>\r
                                    <option value="Indonesia">Indonesia</option>\r
                                    <option value="Iran">Iran</option>\r
                                    <option value="Iraq">Iraq</option>\r
                                    <option value="Ireland">Ireland</option>\r
                                    <option value="Israel">Israel</option>\r
                                    <option value="Italy">Italy</option>\r
                                    <option value="Jamaica">Jamaica</option>\r
                                    <option value="Japan">Japan</option>\r
                                    <option value="Jordan">Jordan</option>\r
                                    <option value="Kazakhstan">Kazakhstan</option>\r
                                    <option value="Kenya">Kenya</option>\r
                                    <option value="Kiribati">Kiribati</option>\r
                                    <option value="Kuwait">Kuwait</option>\r
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>\r
                                    <option value="Laos">Laos</option>\r
                                    <option value="Latvia">Latvia</option>\r
                                    <option value="Lebanon">Lebanon</option>\r
                                    <option value="Lesotho">Lesotho</option>\r
                                    <option value="Liberia">Liberia</option>\r
                                    <option value="Libya">Libya</option>\r
                                    <option value="Liechtenstein">Liechtenstein</option>\r
                                    <option value="Lithuania">Lithuania</option>\r
                                    <option value="Luxembourg">Luxembourg</option>\r
                                    <option value="Madagascar">Madagascar</option>\r
                                    <option value="Malawi">Malawi</option>\r
                                    <option value="Malaysia">Malaysia</option>\r
                                    <option value="Maldives">Maldives</option>\r
                                    <option value="Mali">Mali</option>\r
                                    <option value="Malta">Malta</option>\r
                                    <option value="Marshall Islands">Marshall Islands</option>\r
                                    <option value="Mauritania">Mauritania</option>\r
                                    <option value="Mauritius">Mauritius</option>\r
                                    <option value="Mexico">Mexico</option>\r
                                    <option value="Micronesia">Micronesia</option>\r
                                    <option value="Moldova">Moldova</option>\r
                                    <option value="Monaco">Monaco</option>\r
                                    <option value="Mongolia">Mongolia</option>\r
                                    <option value="Montenegro">Montenegro</option>\r
                                    <option value="Morocco">Morocco</option>\r
                                    <option value="Mozambique">Mozambique</option>\r
                                    <option value="Myanmar (Burma)">Myanmar (Burma)</option>\r
                                    <option value="Namibia">Namibia</option>\r
                                    <option value="Nauru">Nauru</option>\r
                                    <option value="Nepal">Nepal</option>\r
                                    <option value="Netherlands">Netherlands</option>\r
                                    <option value="New Zealand">New Zealand</option>\r
                                    <option value="Nicaragua">Nicaragua</option>\r
                                    <option value="Niger">Niger</option>\r
                                    <option value="Nigeria">Nigeria</option>\r
                                    <option value="North Korea">North Korea</option>\r
                                    <option value="North Macedonia">North Macedonia</option>\r
                                    <option value="Norway">Norway</option>\r
                                    <option value="Oman">Oman</option>\r
                                    <option value="Pakistan">Pakistan</option>\r
                                    <option value="Palau">Palau</option>\r
                                    <option value="Palestine">Palestine</option>\r
                                    <option value="Panama">Panama</option>\r
                                    <option value="Papua New Guinea">Papua New Guinea</option>\r
                                    <option value="Paraguay">Paraguay</option>\r
                                    <option value="Peru">Peru</option>\r
                                    <option value="Philippines">Philippines</option>\r
                                    <option value="Poland">Poland</option>\r
                                    <option value="Portugal">Portugal</option>\r
                                    <option value="Qatar">Qatar</option>\r
                                    <option value="Romania">Romania</option>\r
                                    <option value="Russia">Russia</option>\r
                                    <option value="Rwanda">Rwanda</option>\r
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>\r
                                    <option value="Saint Lucia">Saint Lucia</option>\r
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>\r
                                    <option value="Samoa">Samoa</option>\r
                                    <option value="San Marino">San Marino</option>\r
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>\r
                                    <option value="Saudi Arabia">Saudi Arabia</option>\r
                                    <option value="Senegal">Senegal</option>\r
                                    <option value="Serbia">Serbia</option>\r
                                    <option value="Seychelles">Seychelles</option>\r
                                    <option value="Sierra Leone">Sierra Leone</option>\r
                                    <option value="Singapore">Singapore</option>\r
                                    <option value="Slovakia">Slovakia</option>\r
                                    <option value="Slovenia">Slovenia</option>\r
                                    <option value="Solomon Islands">Solomon Islands</option>\r
                                    <option value="Somalia">Somalia</option>\r
                                    <option value="South Africa">South Africa</option>\r
                                    <option value="South Korea">South Korea</option>\r
                                    <option value="South Sudan">South Sudan</option>\r
                                    <option value="Spain">Spain</option>\r
                                    <option value="Sri Lanka">Sri Lanka</option>\r
                                    <option value="Sudan">Sudan</option>\r
                                    <option value="Suriname">Suriname</option>\r
                                    <option value="Sweden">Sweden</option>\r
                                    <option value="Switzerland">Switzerland</option>\r
                                    <option value="Syria">Syria</option>\r
                                    <option value="Taiwan">Taiwan</option>\r
                                    <option value="Tajikistan">Tajikistan</option>\r
                                    <option value="Tanzania">Tanzania</option>\r
                                    <option value="Thailand">Thailand</option>\r
                                    <option value="Timor-Leste">Timor-Leste</option>\r
                                    <option value="Togo">Togo</option>\r
                                    <option value="Tonga">Tonga</option>\r
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>\r
                                    <option value="Tunisia">Tunisia</option>\r
                                    <option value="Turkey">Turkey</option>\r
                                    <option value="Turkmenistan">Turkmenistan</option>\r
                                    <option value="Tuvalu">Tuvalu</option>\r
                                    <option value="Uganda">Uganda</option>\r
                                    <option value="Ukraine">Ukraine</option>\r
                                    <option value="United Arab Emirates">United Arab Emirates</option>\r
                                    <option value="United Kingdom">United Kingdom</option>\r
                                    <option value="United States" selected="">United States</option>\r
                                    <option value="Uruguay">Uruguay</option>\r
                                    <option value="Uzbekistan">Uzbekistan</option>\r
                                    <option value="Vanuatu">Vanuatu</option>\r
                                    <option value="Vatican City">Vatican City</option>\r
                                    <option value="Venezuela">Venezuela</option>\r
                                    <option value="Vietnam">Vietnam</option>\r
                                    <option value="Yemen">Yemen</option>\r
                                    <option value="Zambia">Zambia</option>\r
                                    <option value="Zimbabwe">Zimbabwe</option>\r
                                </select>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Send Button -->\r
                        <div class="text-left">\r
                            <button ws-attr="ContactSendButtonAttr" type="button" ws-onclick="OnContactSendClick" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-blue-400">\r
                                \${ContactSendButtonText}\r
                            </button>\r
                        </div>\r
\r
                    </form>\r
                </div>\r
            </section>\r
\r
        </div>\r
    `),e):Do("support",p("content"),()=>Mn(`\r
        <div class="space-y-20" ws-onafterrender="OnAfterRender">\r
            <!-- Hero / Banner -->\r
            <section class="pt-28 sm:pt-32">\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <div class="grid items-center gap-8 md:grid-cols-12">\r
                        <div class="md:col-span-7 text-center md:text-left">\r
                            <h1 class="font-bold tracking-tight text-gray-950 dark:text-white text-4xl sm:text-5xl">\r
                                WebSharper Expert Support\r
                            </h1>\r
                            <p class="mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 max-w-2xl md:mx-0 mx-auto">\r
                                Our experienced WebSharper support team is available to help you make the right decisions for your development project, and can save you hundreds of hours when important and difficult questions arise.\r
                            </p>\r
\r
                            <!-- Chips -->\r
                            <div class="mt-4 flex flex-wrap justify-center md:justify-start gap-2">\r
                                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200">\r
                                    Email & web support\r
                                </span>\r
                                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200">\r
                                    First response: 4h-2d\r
                                </span>\r
                                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs sm:text-sm text-gray-800 dark:bg-white/10 dark:text-gray-200">\r
                                    Mentoring & training available\r
                                </span>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Visual -->\r
                        <div class="md:col-span-5">\r
                            <figure class="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-900">\r
                                <img src="./Assets/images/slay.png" alt="WebSharper support: experts reviewing code and architecture" class="w-full h-auto">\r
                            </figure>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section class="scroll-my-16">\r
                <div class="mx-2 md:mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <div class="rounded-3xl overflow-hidden border dark:border-gray-800">\r
                        <div class="py-12 lg:py-16 lg:px-16 border-b dark:border-gray-800">\r
                            <h2 class="font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white">\r
                                Quick, practical help from the people who build WebSharper\r
                            </h2>\r
                            <p class="mt-3 text-lg text-gray-700 dark:text-gray-300">\r
                                Get senior guidance on architecture, performance, reactive UI, and integrations plus hands-on fixes when you need them.\r
                            </p>\r
                        </div>\r
\r
                        <div class="lg:px-16">\r
                            <!-- Visual / proof -->\r
                            <div class="lg:col-span-5 lg:-mr-10 py-12 md:py-16">\r
                                <div class="relative">\r
                                    <div class="absolute translate-y-1/2 mx-auto blur-3xl inset-0 rounded-t-full bg-brand-primary/20 dark:bg-brand-primary/20"></div>\r
                                    <figure class="relative rounded-2xl overflow-hidden border bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-sm w-1/2 mx-auto">\r
\r
                                        <img src="./Assets/images/slay.png" alt="Support walkthrough: issue context, guidance, and fix" class="w-full h-auto">\r
                                    </figure>\r
                                    <!-- short 15\uFFFD20s looped video instead of static image -->\r
                                    <!--\r
                                    <video class="relative mt-4 w-full rounded-2xl border border-gray-200 dark:border-gray-800" autoplay muted loop playsinline poster="./Assets/images/support-video-poster.png">\r
                                        <source src="./videos/support-teaser.mp4" type="video/mp4">\r
                                    </video>\r
                                    -->\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <!-- Support value props -->\r
            <section class="mt-12">\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <ul class="grid gap-4 md:grid-cols-3">\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m7 9l5 3.5L17 9"></path><path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></path></g></svg>\r
                                <span>Email and web support</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Email us your support queries, architectural or best practice questions, or post them to our dedicated support site.\r
                            </p>\r
                        </li>\r
\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path fill="currentColor" d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></path><path fill="currentColor" fill-rule="evenodd" d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z" clip-rule="evenodd"></path></svg>\r
                                <span>Fast response time</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Receive the first response to your queries from within 4 hours up to 2 days, depending on your selected support plan..\r
                            </p>\r
                        </li>\r
\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96m0 0v288"></path></svg>\r
                                <span>Mentoring and training</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Pick a Start-up or Enterprise plan and jumpstart your team's productivity with our online WebSharper training and mentoring.\r
                            </p>\r
                        </li>\r
\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16"><path fill="currentColor" d="M7 3a2 2 0 0 1 4 0h1.5A1.5 1.5 0 0 1 14 4.5V7h-1a1 1 0 0 0 0 2h1v2.5a1.5 1.5 0 0 1-1.5 1.5H11a2 2 0 0 1-4 0H5.5A1.5 1.5 0 0 1 4 11.5V10a2 2 0 0 1 0-4V4.5A1.5 1.5 0 0 1 5.5 3zm2-1a1 1 0 0 0-1 1v1H5.5a.5.5 0 0 0-.5.5V7H4a1 1 0 0 0 0 2h1v2.5a.5.5 0 0 0 .5.5H8v1a1 1 0 0 0 2 0v-1h2.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 0-4V4.5a.5.5 0 0 0-.5-.5H10V3a1 1 0 0 0-1-1"></path></svg>\r
                                <span>Extensions support</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Working heavily with WebSharper extensions? Get the help you need with any issues you encounter in these extensions.\r
                            </p>\r
                        </li>\r
\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path fill="currentColor" d="m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9"></path></svg>\r
                                <span>Architectural review</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Next to support questions, we can also help you decide on the best architecture for your project, or give best practice guidelines for your team.\r
                            </p>\r
                        </li>\r
\r
                        <li class="rounded-xl p-5 bg-gray-50 shadow-sm dark:bg-white/5">\r
                            <h3 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">\r
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 15v-3.062A3.938 3.938 0 0 0 15.063 8H8.936A3.938 3.938 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z"></path><path d="M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1"></path><path stroke-linecap="round" d="M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15"></path></g></svg>\r
                                <span>Priority bugfixes</span>\r
                            </h3>\r
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">\r
                                Your support ticket jumps to the front of our priority queue and becomes the first to fix. Get the most timely help when you need it most.\r
                            </p>\r
                        </li>\r
                    </ul>\r
                </div>\r
            </section>\r
\r
        <section id="plans" class="scroll-mt-20 scroll-smooth">\r
            <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                <h2 class="text-center font-semibold text-3xl md:text-4xl text-gray-950 dark:text-white">\r
                    Choose your plan\r
                </h2>\r
                <p class="text-center mt-3 text-lg text-gray-700 dark:text-gray-300">\r
                    Monthly or yearly billing, per-seat for teams or a freelancer option.\r
                </p>\r
\r
                    <!-- Billing period toggle -->\r
                    <div class="mx-auto mt-6 flex w-full max-w-xs items-center justify-center rounded-xl border border-gray-200 bg-white p-1\r
                                dark:bg-gray-950 dark:border-gray-800">\r
                        <button ws-onclick="OnBillMonth" ws-attr="BillMonthAttr" type="button" class="cursor-pointer dark:text-white text-gray-700 text flex-1 rounded-lg py-2 text-sm font-medium transition\r
                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r
                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900" data-active="false" aria-pressed="false">\r
                            Per month\r
                        </button>\r
                        <button ws-onclick="OnBillYear" ws-attr="BillYearAttr" type="button" class="cursor-pointer dark:text-white text-gray-700 flex-1 rounded-lg py-2 text-sm font-medium transition\r
                                    data-[active=true]:bg-gray-900 data-[active=true]:text-white\r
                                    dark:data-[active=true]:bg-white dark:data-[active=true]:text-gray-900" data-active="true" aria-pressed="true">\r
                            Per year\r
                        </button>\r
                    </div>\r
\r
                    <!-- Plans grid -->\r
                    <div class="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2">\r
                        <!-- Professional (per seat) -->\r
                        <div class="rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r
                                    dark:bg-gray-950 dark:border-gray-800" data-price-month="250" data-price-year="2500">\r
                            <div class="flex items-start justify-between gap-4">\r
                                <div>\r
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Plan</div>\r
                                    <div ws-hole="ProName" class="text-2xl font-bold text-gray-950 dark:text-white">\r
                                        Professional\r
                                    </div>\r
                                    <div class="mt-1 text-base text-gray-700 dark:text-gray-300">\r
                                        <span ws-hole="ProPriceAmount">$2,500</span>\r
                                        <span class="text-gray-600 dark:text-gray-400" ws-hole="ProPriceLabel">\r
                                            / seat / year\r
                                        </span>\r
                                    </div>\r
                                </div>\r
\r
                                <!-- Seat selector -->\r
                                <div class="flex items-center gap-2">\r
                                    <button ws-onclick="OnSeatMinus" class="cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r
                                                dark:border-white/20 dark:text-white" aria-label="Decrease seats" type="button">\r
                                        -\r
                                    </button>\r
                                    <input type="text" ws-var="SeatCount" inputmode="numeric" pattern="[0-9]*" min="1" step="1" value="1" class="w-20 text-center rounded-xl border border-gray-300 bg-transparent dark:border-white/20 text-gray-900 dark:text-white h-10" aria-label="Seat count">\r
                                    <button ws-onclick="OnSeatPlus" class="cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800\r
                                                dark:border-white/20 dark:text-white" aria-label="Increase seats" type="button">\r
                                        +\r
                                    </button>\r
                                </div>\r
                            </div>\r
\r
                            <!-- Total -->\r
                            <div class="mt-4 flex items-center justify-between">\r
                                <div class="text-sm text-gray-600 dark:text-gray-400" ws-hole="ProTotalLabel">\r
                                    Total (yearly)\r
                                </div>\r
                                <div class="text-xl font-semibold text-gray-950 dark:text-white" ws-hole="ProTotalAmount">\r
                                    $2,500\r
                                </div>\r
                            </div>\r
\r
                            <!-- CTA -->\r
                            <a ws-attr="ProCheckoutAttr" class="w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r
                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r
                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4">\r
                                <span class="relative text-sm">Continue to checkout</span>\r
                            </a>\r
\r
                            <p class="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center" ws-hole="ProNote">\r
                                Assign GitHub usernames after purchase. Prices in USD.\r
                            </p>\r
                        </div>\r
\r
                        <!-- Freelancer (1 seat) -->\r
                        <div class="rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r
                                    dark:bg-gray-950 dark:border-gray-800">\r
                            <div class="flex items-start justify-between gap-4">\r
                                <div>\r
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Plan</div>\r
                                    <div ws-hole="FreeName" class="text-2xl font-bold text-gray-950 dark:text-white">\r
                                        Freelancer\r
                                    </div>\r
                                    <div class="mt-1 text-base text-gray-700 dark:text-gray-300">\r
                                        <span ws-hole="FreePriceAmount">$300</span>\r
                                        <span class="text-gray-600 dark:text-gray-400" ws-hole="FreePriceLabel">\r
                                            / year\r
                                        </span>\r
                                    </div>\r
                                </div>\r
                                <div class="rounded-xl border border-gray-300 px-3 h-10 flex items-center\r
                                            text-gray-800 dark:border-white/20 dark:text-white">\r
                                    1 seat\r
                                </div>\r
                            </div>\r
\r
                            <!-- Total -->\r
                            <div class="mt-4 flex items-center justify-between">\r
                                <div class="text-sm text-gray-600 dark:text-gray-400" ws-hole="FreeTotalLabel">\r
                                    Total (yearly)\r
                                </div>\r
                                <div class="text-xl font-semibold text-gray-950 dark:text-white" ws-hole="FreeTotalAmount">\r
                                    $300\r
                                </div>\r
                            </div>\r
\r
                            <!-- CTA -->\r
                            <a ws-attr="FreeCheckoutAttr" class="w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                                    flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                                    before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r
                                    before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200\r
                                    dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 mt-4">\r
                                <span class="relative text-sm">Continue to checkout</span>\r
                            </a>\r
\r
                            <p class="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center" ws-hole="FreeNote">\r
                                Ideal for solo developers. Prices in USD.\r
                            </p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <!-- contact us -->\r
            <section class="scroll-my-0 py-7 dark:bg-gray-900 border-t-2 border-b-2 dark:border-none">\r
                <div class="mx-auto max-w-xl p-8 rounded content mb-10">\r
                    <h2 class="header text-center mb-8">Contact us</h2>\r
\r
                    <form method="post">\r
\r
                        <!-- Subject -->\r
                        <div class="mb-6">\r
                            <label for="emailSubject" class="block font-semibold mb-2">Subject</label>\r
                            <input type="text" name="email-subject" ws-var="ContactSubjectVar" class="w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400" value="WebSharper support">\r
                        </div>\r
\r
                        <!-- Message -->\r
                        <div class="mb-6">\r
                            <label for="emailMessage" class="block font-semibold mb-2">Message</label>\r
                            <textarea name="email-message" rows="5" ws-var="ContactMessageVar" class="w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"></textarea>\r
                        </div>\r
\r
                        <!-- Row with Email, Name, Country -->\r
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">\r
                            <!-- Email -->\r
                            <div>\r
                                <label for="emailAddress" class="block font-semibold mb-2">Your email address</label>\r
                                <input type="email" name="email-address" ws-var="ContactEmailVar" class="w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400">\r
                            </div>\r
\r
                            <!-- Name -->\r
                            <div>\r
                                <label for="emailName" class="block font-semibold mb-2">Your name</label>\r
                                <input type="text" ws-var="ContactNameVar" name="name" class="w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400">\r
                            </div>\r
\r
                            <!-- Country -->\r
                            <div>\r
                                <label for="emailCountry" class="block font-semibold mb-2">Your country</label>\r
                                <select name="email-country" ws-var="ContactCountryVar" class="w-full border border-gray-800 dark:border-gray-200 bg-transparent rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400">\r
                                    <option value="Afghanistan">Afghanistan</option>\r
                                    <option value="Albania">Albania</option>\r
                                    <option value="Algeria">Algeria</option>\r
                                    <option value="Andorra">Andorra</option>\r
                                    <option value="Angola">Angola</option>\r
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>\r
                                    <option value="Argentina">Argentina</option>\r
                                    <option value="Armenia">Armenia</option>\r
                                    <option value="Australia">Australia</option>\r
                                    <option value="Austria">Austria</option>\r
                                    <option value="Azerbaijan">Azerbaijan</option>\r
                                    <option value="Bahamas">Bahamas</option>\r
                                    <option value="Bahrain">Bahrain</option>\r
                                    <option value="Bangladesh">Bangladesh</option>\r
                                    <option value="Barbados">Barbados</option>\r
                                    <option value="Belarus">Belarus</option>\r
                                    <option value="Belgium">Belgium</option>\r
                                    <option value="Belize">Belize</option>\r
                                    <option value="Benin">Benin</option>\r
                                    <option value="Bhutan">Bhutan</option>\r
                                    <option value="Bolivia">Bolivia</option>\r
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>\r
                                    <option value="Botswana">Botswana</option>\r
                                    <option value="Brazil">Brazil</option>\r
                                    <option value="Brunei">Brunei</option>\r
                                    <option value="Bulgaria">Bulgaria</option>\r
                                    <option value="Burkina Faso">Burkina Faso</option>\r
                                    <option value="Burundi">Burundi</option>\r
                                    <option value="Cabo Verde">Cabo Verde</option>\r
                                    <option value="Cambodia">Cambodia</option>\r
                                    <option value="Cameroon">Cameroon</option>\r
                                    <option value="Canada">Canada</option>\r
                                    <option value="Central African Republic">Central African Republic</option>\r
                                    <option value="Chad">Chad</option>\r
                                    <option value="Chile">Chile</option>\r
                                    <option value="China">China</option>\r
                                    <option value="Colombia">Colombia</option>\r
                                    <option value="Comoros">Comoros</option>\r
                                    <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>\r
                                    <option value="Costa Rica">Costa Rica</option>\r
                                    <option value="Croatia">Croatia</option>\r
                                    <option value="Cuba">Cuba</option>\r
                                    <option value="Cyprus">Cyprus</option>\r
                                    <option value="Czech Republic">Czech Republic</option>\r
                                    <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>\r
                                    <option value="Denmark">Denmark</option>\r
                                    <option value="Djibouti">Djibouti</option>\r
                                    <option value="Dominica">Dominica</option>\r
                                    <option value="Dominican Republic">Dominican Republic</option>\r
                                    <option value="Ecuador">Ecuador</option>\r
                                    <option value="Egypt">Egypt</option>\r
                                    <option value="El Salvador">El Salvador</option>\r
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>\r
                                    <option value="Eritrea">Eritrea</option>\r
                                    <option value="Estonia">Estonia</option>\r
                                    <option value="Eswatini">Eswatini</option>\r
                                    <option value="Ethiopia">Ethiopia</option>\r
                                    <option value="Fiji">Fiji</option>\r
                                    <option value="Finland">Finland</option>\r
                                    <option value="France">France</option>\r
                                    <option value="Gabon">Gabon</option>\r
                                    <option value="Gambia">Gambia</option>\r
                                    <option value="Georgia">Georgia</option>\r
                                    <option value="Germany">Germany</option>\r
                                    <option value="Ghana">Ghana</option>\r
                                    <option value="Greece">Greece</option>\r
                                    <option value="Grenada">Grenada</option>\r
                                    <option value="Guatemala">Guatemala</option>\r
                                    <option value="Guinea">Guinea</option>\r
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>\r
                                    <option value="Guyana">Guyana</option>\r
                                    <option value="Haiti">Haiti</option>\r
                                    <option value="Honduras">Honduras</option>\r
                                    <option value="Hungary">Hungary</option>\r
                                    <option value="Iceland">Iceland</option>\r
                                    <option value="India">India</option>\r
                                    <option value="Indonesia">Indonesia</option>\r
                                    <option value="Iran">Iran</option>\r
                                    <option value="Iraq">Iraq</option>\r
                                    <option value="Ireland">Ireland</option>\r
                                    <option value="Israel">Israel</option>\r
                                    <option value="Italy">Italy</option>\r
                                    <option value="Jamaica">Jamaica</option>\r
                                    <option value="Japan">Japan</option>\r
                                    <option value="Jordan">Jordan</option>\r
                                    <option value="Kazakhstan">Kazakhstan</option>\r
                                    <option value="Kenya">Kenya</option>\r
                                    <option value="Kiribati">Kiribati</option>\r
                                    <option value="Kuwait">Kuwait</option>\r
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>\r
                                    <option value="Laos">Laos</option>\r
                                    <option value="Latvia">Latvia</option>\r
                                    <option value="Lebanon">Lebanon</option>\r
                                    <option value="Lesotho">Lesotho</option>\r
                                    <option value="Liberia">Liberia</option>\r
                                    <option value="Libya">Libya</option>\r
                                    <option value="Liechtenstein">Liechtenstein</option>\r
                                    <option value="Lithuania">Lithuania</option>\r
                                    <option value="Luxembourg">Luxembourg</option>\r
                                    <option value="Madagascar">Madagascar</option>\r
                                    <option value="Malawi">Malawi</option>\r
                                    <option value="Malaysia">Malaysia</option>\r
                                    <option value="Maldives">Maldives</option>\r
                                    <option value="Mali">Mali</option>\r
                                    <option value="Malta">Malta</option>\r
                                    <option value="Marshall Islands">Marshall Islands</option>\r
                                    <option value="Mauritania">Mauritania</option>\r
                                    <option value="Mauritius">Mauritius</option>\r
                                    <option value="Mexico">Mexico</option>\r
                                    <option value="Micronesia">Micronesia</option>\r
                                    <option value="Moldova">Moldova</option>\r
                                    <option value="Monaco">Monaco</option>\r
                                    <option value="Mongolia">Mongolia</option>\r
                                    <option value="Montenegro">Montenegro</option>\r
                                    <option value="Morocco">Morocco</option>\r
                                    <option value="Mozambique">Mozambique</option>\r
                                    <option value="Myanmar (Burma)">Myanmar (Burma)</option>\r
                                    <option value="Namibia">Namibia</option>\r
                                    <option value="Nauru">Nauru</option>\r
                                    <option value="Nepal">Nepal</option>\r
                                    <option value="Netherlands">Netherlands</option>\r
                                    <option value="New Zealand">New Zealand</option>\r
                                    <option value="Nicaragua">Nicaragua</option>\r
                                    <option value="Niger">Niger</option>\r
                                    <option value="Nigeria">Nigeria</option>\r
                                    <option value="North Korea">North Korea</option>\r
                                    <option value="North Macedonia">North Macedonia</option>\r
                                    <option value="Norway">Norway</option>\r
                                    <option value="Oman">Oman</option>\r
                                    <option value="Pakistan">Pakistan</option>\r
                                    <option value="Palau">Palau</option>\r
                                    <option value="Palestine">Palestine</option>\r
                                    <option value="Panama">Panama</option>\r
                                    <option value="Papua New Guinea">Papua New Guinea</option>\r
                                    <option value="Paraguay">Paraguay</option>\r
                                    <option value="Peru">Peru</option>\r
                                    <option value="Philippines">Philippines</option>\r
                                    <option value="Poland">Poland</option>\r
                                    <option value="Portugal">Portugal</option>\r
                                    <option value="Qatar">Qatar</option>\r
                                    <option value="Romania">Romania</option>\r
                                    <option value="Russia">Russia</option>\r
                                    <option value="Rwanda">Rwanda</option>\r
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>\r
                                    <option value="Saint Lucia">Saint Lucia</option>\r
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>\r
                                    <option value="Samoa">Samoa</option>\r
                                    <option value="San Marino">San Marino</option>\r
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>\r
                                    <option value="Saudi Arabia">Saudi Arabia</option>\r
                                    <option value="Senegal">Senegal</option>\r
                                    <option value="Serbia">Serbia</option>\r
                                    <option value="Seychelles">Seychelles</option>\r
                                    <option value="Sierra Leone">Sierra Leone</option>\r
                                    <option value="Singapore">Singapore</option>\r
                                    <option value="Slovakia">Slovakia</option>\r
                                    <option value="Slovenia">Slovenia</option>\r
                                    <option value="Solomon Islands">Solomon Islands</option>\r
                                    <option value="Somalia">Somalia</option>\r
                                    <option value="South Africa">South Africa</option>\r
                                    <option value="South Korea">South Korea</option>\r
                                    <option value="South Sudan">South Sudan</option>\r
                                    <option value="Spain">Spain</option>\r
                                    <option value="Sri Lanka">Sri Lanka</option>\r
                                    <option value="Sudan">Sudan</option>\r
                                    <option value="Suriname">Suriname</option>\r
                                    <option value="Sweden">Sweden</option>\r
                                    <option value="Switzerland">Switzerland</option>\r
                                    <option value="Syria">Syria</option>\r
                                    <option value="Taiwan">Taiwan</option>\r
                                    <option value="Tajikistan">Tajikistan</option>\r
                                    <option value="Tanzania">Tanzania</option>\r
                                    <option value="Thailand">Thailand</option>\r
                                    <option value="Timor-Leste">Timor-Leste</option>\r
                                    <option value="Togo">Togo</option>\r
                                    <option value="Tonga">Tonga</option>\r
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>\r
                                    <option value="Tunisia">Tunisia</option>\r
                                    <option value="Turkey">Turkey</option>\r
                                    <option value="Turkmenistan">Turkmenistan</option>\r
                                    <option value="Tuvalu">Tuvalu</option>\r
                                    <option value="Uganda">Uganda</option>\r
                                    <option value="Ukraine">Ukraine</option>\r
                                    <option value="United Arab Emirates">United Arab Emirates</option>\r
                                    <option value="United Kingdom">United Kingdom</option>\r
                                    <option value="United States" selected="">United States</option>\r
                                    <option value="Uruguay">Uruguay</option>\r
                                    <option value="Uzbekistan">Uzbekistan</option>\r
                                    <option value="Vanuatu">Vanuatu</option>\r
                                    <option value="Vatican City">Vatican City</option>\r
                                    <option value="Venezuela">Venezuela</option>\r
                                    <option value="Vietnam">Vietnam</option>\r
                                    <option value="Yemen">Yemen</option>\r
                                    <option value="Zambia">Zambia</option>\r
                                    <option value="Zimbabwe">Zimbabwe</option>\r
                                </select>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Send Button -->\r
                        <div class="text-left">\r
                            <button ws-attr="ContactSendButtonAttr" type="button" ws-onclick="OnContactSendClick" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-blue-400">\r
                                \${ContactSendButtonText}\r
                            </button>\r
                        </div>\r
\r
                    </form>\r
                </div>\r
            </section>\r
\r
        </div>\r
    `))}function Za(){return Cn||(Cn=Kl(void 0,"$",[null,[1,[["$0","Value",Nt(),0]]]])())}function Ja(){return kn||(kn=Jl(void 0,[["code",Nt(),0],["name",Nt(),0],["description",Nt(),1],["isPerSeat",Nt(),0],["maxSeats",Nt(),1],["interval",Nt(),0],["currency",Nt(),0],["unitAmountCents",Nt(),0]])())}function U(e){return t=>{try{e()(t)}catch(n){t.k(gn(n))}}}function O(e,t){return Xa(n=>{e(Fe(r=>{if(r.$==0){let o=r.$0;Dt().Fork(()=>{try{t(o)(n)}catch(i){n.k(gn(i))}})}else Dt().Fork(()=>{n.k(r)})},n.ct))})}function j(e){return t=>{t.k(Pe(e))}}function cn(e,t){let n=fo()[0],r=t==null?n:t.$0;r.c||e(Fe(o=>{o.$==1&&mo(o.$0)},r))}function Qa(e){return t=>{let n,r;n=void 0,r=void 0,n=setTimeout(()=>{r.Dispose(),Dt().Fork(()=>{t.k(Pe(null))})},e),r=vo(t.ct,()=>{clearTimeout(n),Dt().Fork(()=>{wo(t)})})}}function dt(){return ae.Zero}function Xa(e){return t=>{t.ct.c?wo(t):e(t)}}function ts(e,t){return O(e,()=>t)}function we(e,t){return n=>{e(Fe(r=>{if(r.$==0)n.k(Pe(r.$0));else if(r.$==1){let o=r.$0;try{t(o)(n)}catch{n.k(r)}}else n.k(r)},n.ct))}}function fo(){return ae.defCTS}function mo(e){console.log("WebSharper: Uncaught asynchronous exception",e)}function go(e,t){return n=>{e(Fe(r=>{try{t(),n.k(r)}catch(o){n.k(gn(o))}},n.ct))}}function vo(e,t){if(e===es())return{Dispose(){return null}};{let n=e.r.push(t)-1;return{Dispose(){return nr(e.r,n,()=>{})}}}}function wo(e){e.k(Wo(new rn("New",e.ct)))}function Dt(){return ae.scheduler}function es(){return ae.noneCT}function pn(e){return t=>{let n=[!1],r=o=>{n[0]?H("A continuation provided by Async.FromContinuations was invoked multiple times"):(n[0]=!0,Dt().Fork(o))};e(o=>{r(()=>{t.k(Pe(o))})},o=>{r(()=>{t.k(gn(o))})},o=>{r(()=>{t.k(Wo(o))})})}}function ns(e,t){let n=fo()[0],r=t==null?n:t.$0;Dt().Fork(()=>{r.c||e(Fe(o=>{o.$==1&&mo(o.$0)},r))})}function rs(){return ae.GetCT}function os(){return new $e().Async("IRemotingContract/Logout",[])}function is(){return O(new $e().Async("IRemotingContract/Me",[]),e=>j(Za()(e)))}function as(){return O(new $e().Async("IRemotingContract/GetPlanPrices",[]),e=>j(Yl(Ja)()(e)))}function dn(e,t){return rt.A1(new In(e,t))}function bo(e,t){if(e===null)return t;if(t===null)return e;{let n=rt.A2(e,t);return ss(n,Fn(e)|Fn(t)),n}}function or(){return I.EmptyAttr}function ss(e,t){e.flags=t}function Fn(e){return e!==null&&e.hasOwnProperty("flags")?e.flags:0}function ir(e,t){let n=[],r=[];function o(s){for(;;)if(s!==null){if(s!=null&&s.$==1)return n.push(s.$0);if(s!=null&&s.$==2){let l=s.$1,c=s.$0;o(c),s=l}else return s!=null&&s.$==3?s.$0(e):s!=null&&s.$==4?r.push(s.$0):null}else return null}o(t);let i=n.slice(0);return zo(e,Fn(t),i,r.length===0?null:p(s=>{Ys(l=>{l(s)},r)}))}function yo(e){return Bs(t=>t.NChanged,ve(),je,e.DynNodes)}function An(e){return zo(e,0,[],null)}function ls(e){return(e.DynFlags&2)===2}function us(e){return ar(e,(t,n)=>t.NGetExitAnim(n))}function cs(e){return(e.DynFlags&1)===1}function ps(e){return ar(e,(t,n)=>t.NGetEnterAnim(n))}function ds(e){return(e.DynFlags&4)===4}function hs(e){return ar(e,(t,n)=>t.NGetChangeAnim(n))}function ar(e,t){return wn(kt(n=>t(n,e.DynElem),e.DynNodes))}function xo(e,t){ot(n=>{n.NSync(e)},t.DynNodes)}function fs(e,t){let n=$o(e);n==""?Pn(e,t):Co(t).test(n)||Pn(e,n+" "+t)}function ms(e,t){let n=Co(t),r=$o(e).replace(n,(o,i,a)=>i==""||a==""?"":" ");Pn(e,r)}function $o(e){return e instanceof SVGElement?e.getAttribute("class"):e.className}function Pn(e,t){e instanceof SVGElement?e.setAttribute("class",t):e.className=t}function Co(e){return new RegExp("(\\s+|^)"+e+"(?:\\s+"+e+")*(\\s+|$)","g")}function Mn(e){let t=globalThis.document.createElement("div");if(gs().test(e)){let a=function(s,l){for(;;){if(l===0)return s;{let c=l;s=s.lastChild,l=c-1}}},n=ys().exec(e),r=k(n,null)?"":S(n,1).toLowerCase(),o=vs()[r],i=o||ws();return t.innerHTML=i[1]+e.replace(bs(),"<$1></$2>")+i[2],(s=>{let l=s;return c=>a(l,c)})(t)(i[0])}else return t.appendChild(globalThis.document.createTextNode(e)),t}function gs(){return le.rhtml}function vs(){return le.wrapMap}function ws(){return le.defaultWrap}function bs(){return le.rxhtmlTag}function ys(){return le.rtagName}function xs(e,t,n){let r=e.querySelectorAll(t);for(let o=0,i=r.length-1;o<=i;o++)n(r[o])}function Ur(e){let t=[];for(let n=0,r=e.childNodes.length-1;n<=r;n++)t.push(e.childNodes[n]);return t}function $s(e,t){let n=globalThis.document.querySelectorAll(e);for(let r=0,o=n.length-1;r<=o;r++)t(n[r])}function Cs(e,t,n){let r;if(n.parentNode===e){let o=n.nextSibling,i=k(o,null)?null:o;r=t===i}else r=!1;r||e.insertBefore(n,t)}function ks(e,t){t.parentNode===e&&e.removeChild(t)}function ie(e,t){let n=t.s;if(n!=null&&n.$==0)return{s:It(e(n.$0))};{let r={s:se([],[])};return xt(t,o=>{Ao(r,t,e(o))},r),r}}function ko(e,t){let n=e.s;n==null?t():n!=null&&n.$==2||n!=null&&n.$==3?(n.$0,n.$1.push(t)):n.$0}function xt(e,t,n){let r=e.s;if(r==null)Ce(n);else if(r!=null&&r.$==2){let o=r.$0;Ye(r.$1,n),t(o)}else if(r!=null&&r.$==3){let o=r.$1;r.$0.push(t),Ye(o,n)}else t(r.$0)}function Ao(e,t,n){let r=t.s;r!=null&&r.$==0?Te(e,n):Ne(e,n)}function hn(e,t,n){let r=t.s,o=n.s;if(r!=null&&r.$==0)return o!=null&&o.$==0?{s:It(e(r.$0,o.$0))}:Ss(e,r.$0,n);if(o!=null&&o.$==0)return Ts(e,o.$0,t);{let i={s:se([],[])},a=()=>{let s=i.s;if(!(s!=null&&s.$==0||s!=null&&s.$==2)){let l=Ot(t),c=Ot(n);l!=null&&l.$==1&&c!=null&&c.$==1&&(l.$0[1]&&c.$0[1]?Te(i,e(l.$0[0],c.$0[0])):Ne(i,e(l.$0[0],c.$0[0])))}};return xt(t,a,i),xt(n,a,i),i}}function Ye(e,t){if(e.push(t),e.length%20===0){let n=e.slice(0);Eu(e);for(let r=0,o=L(n)-1;r<=o;r++){let i=S(n,r);typeof i=="object"?(a=>{a.s&&e.push(a)})(i):(a=>{e.push(a)})(i)}}}function Te(e,t){let n=e.s;if(n!=null&&n.$==3){let r=n.$0;e.s=It(t);for(let o=0,i=L(r)-1;o<=i;o++)S(r,o)(t)}}function Ne(e,t){let n=e.s;if(n!=null&&n.$==3){let r=n.$1,o=n.$0;e.s=vn(t,r);for(let i=0,a=L(o)-1;i<=a;i++)S(o,i)(t)}}function As(e,t,n,r){let o=t.s,i=n.s,a=r.s;if(o!=null&&o.$==0)return i!=null&&i.$==0?a!=null&&a.$==0?{s:It(e(o.$0,i.$0,a.$0))}:Ns(e,o.$0,i.$0,r):a!=null&&a.$==0?_s(e,o.$0,a.$0,n):Vs(e,o.$0,n,r);if(i!=null&&i.$==0)return a!=null&&a.$==0?Es(e,i.$0,a.$0,t):Fs(e,i.$0,t,r);if(a!=null&&a.$==0)return Ps(e,a.$0,t,n);{let s={s:se([],[])},l=()=>{let c=s.s;if(!(c!=null&&c.$==0||c!=null&&c.$==2)){let h=Ot(t),w=Ot(n),f=Ot(r);h!=null&&h.$==1&&w!=null&&w.$==1&&f!=null&&f.$==1&&(h.$0[1]&&w.$0[1]&&f.$0[1]?Te(s,e(h.$0[0],w.$0[0],f.$0[0])):Ne(s,e(h.$0[0],w.$0[0],f.$0[0])))}};return xt(t,l,s),xt(n,l,s),xt(r,l,s),s}}function Ss(e,t,n){return ie(r=>e(t,r),n)}function Ts(e,t,n){return ie(r=>e(r,t),n)}function Ot(e){let t=e.s;return t!=null&&t.$==0?p([t.$0,!0]):t!=null&&t.$==2?p([t.$0,!1]):null}function Ns(e,t,n,r){return ie(o=>e(t,n,o),r)}function _s(e,t,n,r){return ie(o=>e(t,o,n),r)}function Vs(e,t,n,r){return hn((o,i)=>e(t,o,i),n,r)}function Es(e,t,n,r){return ie(o=>e(o,t,n),r)}function Fs(e,t,n,r){return hn((o,i)=>e(o,t,i),n,r)}function Ps(e,t,n,r){return hn((o,i)=>e(o,i,t),n,r)}function Ms(e,t,n){let r=e.s;if(r==null)n();else if(r!=null&&r.$==2){let o=r.$0;r.$1.push(n),t(o)}else if(r!=null&&r.$==3){let o=r.$1;r.$0.push(t),o.push(n)}else t(r.$0)}function Ls(e){let t=te(e);if(t.length==0)return{s:It([])};{let n={s:se([],[])},r=[L(t)-1],o=()=>{if(r[0]===0){let i=kt(a=>{let s=a.s;return s!=null&&s.$==0||s!=null&&s.$==2?s.$0:H("value not found by View.Sequence")},t);Mo(a=>{let s=a.s;return s!=null&&s.$==0},t)?Te(n,i):Ne(n,i)}else r[0]=r[0]-1};return ot(i=>{xt(i,o,n)},t),n}}function Ds(e,t){let n=e.s,r=t.s;if(n!=null&&n.$==0)return r!=null&&r.$==0?{s:It(null)}:t;if(r!=null&&r.$==0)return e;{let o={s:se([],[])},i=()=>{let a=o.s;if(!(a!=null&&a.$==0||a!=null&&a.$==2)){let s=Ot(e),l=Ot(t);s!=null&&s.$==1&&l!=null&&l.$==1&&(s.$0[1]&&l.$0[1]?Te(o,null):Ne(o,null))}};return xt(e,i,o),xt(t,i,o),o}}function Is(e){let t=e.s;if(t==null)return e;if(t!=null&&t.$==2){let n={s:vn(t.$0,[])};return Gs(e,n),n}else if(t!=null&&t.$==3){let n={s:se([],[])};return xt(e,r=>{Ao(n,e,r)},n),n}else return e}function Gs(e,t){let n=e.s;n==null?Ce(t):n!=null&&n.$==2||n!=null&&n.$==3?(n.$0,Ye(n.$1,t)):n.$0}function fn(e){if(e instanceof Array)return e;if(e instanceof ne)return Eo(e);if(e===null)return[];{let t=[],n=D(e);try{for(;n.MoveNext();)t.push(n.Current);return t}finally{let r=n;typeof r=="object"&&lt(r)&&n.Dispose()}}}function mn(e,t,n){let r=L(n);function o(i){return a=>{let s;switch(a<=0?0:a===1&&i>=0&&i<r?1:(s=a,2)){case 0:return e;case 1:return S(n,i);case 2:let l=a/2>>0;return t(o(i)(l),o(i+l)(a-l))}}}return o(0)(r)}function Bs(e,t,n,r){let o=L(r);function i(a){return s=>{let l;switch(s<=0?0:s===1&&a>=0&&a<o?1:(l=s,2)){case 0:return t;case 1:return e(S(r,a));case 2:let c=s/2>>0;return n(i(a)(c),i(a+c)(s-c))}}}return i(0)(o)}function Rs(e){return{$:4,$0:e}}function So(e){return{$:6,$0:e}}function Ws(e){return{$:5,$0:e}}var sr=K(e=>class{static{sr=e(this)}static ContactSendButtonText;static ContactSendButtonAttr;static{this.ContactSendButtonAttr=na("disabled",Et((n,r)=>!n||r,ka(),ze().View)),this.ContactSendButtonText=A(n=>n?"Sending...":"Send",ze().View)}}),yt=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return p(this.fillWith.View)}AddAttribute(t,n){t(n)(oa(this.fillWith))}get AsChoiceView(){return zt(A(String,this.fillWith.View))}ApplyVarHole(t){ue(Yo(),this.fillWith,t)}constructor(t,n){super(),this.name=t,this.fillWith=n}};function To(e,t){let n;return t!=null&&t.$==1&&e(t.$0)&&(n=t.$0,!0)?t:null}function Us(){return No(Ze()+1),"uid"+String(Ze())}function No(e){fr.counter=e}function Ze(){return fr.counter}function Qt(){return No(Ze()+1),Ze()}var Ct=K(e=>class{static{Ct=e(this)}static CanSendView;static IsSendingVar;static ContactFormVar;static SeatCount;static SeatCountText;static intervalVar;static catalogVar;static fallbackFreelancer;static fallbackPro;static{this.fallbackPro=he(p("Professional"),p("Assign GitHub usernames after purchase"),p(de(250,"USD")),p(de(2500,"USD"))),this.fallbackFreelancer=he(p("Freelancer"),p("Ideal for solo developers"),p(de(30,"USD")),p(de(300,"USD"))),this.catalogVar=E.Create_1(Gn(Ke(),En())),this.intervalVar=E.Create_1(_o),this.SeatCountText=E.Create_1("1"),this.SeatCount=A(n=>{let r,o=pr(n??"");if(o=="")return 1;{let i=(r=0,[dr(o,{get:()=>r,set:a=>{r=a}}),r]);return i[0]?un(i[1]):1}},ln().View),this.ContactFormVar=E.Create_1(Ut("WebSharper support","","","","United States")),this.IsSendingVar=E.Create_1(!1),this.CanSendView=A(po,Ft().View)}}),nt=class e extends Z{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}constructor(t,n){super(),this.name=t,this.fillWith=n}},Je=class e extends Z{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.key,this.fillWith)}constructor(t,n,r){super(),this.name=t,this.key=n,this.fillWith=r}},ut=K(e=>class{static{ut=e(this)}static FreeNote;static ProNote;static FreeTotalAmount;static ProTotalAmount;static FreeTotalLabel;static ProTotalLabel;static FreePriceLabel;static ProPriceLabel;static FreePriceAmount;static ProPriceAmount;static FreeName;static ProName;static{this.ProName=A(n=>Ir("Professional",n.Pro),wt().View),this.FreeName=A(n=>Ir("Freelancer",n.Freelancer),wt().View),this.ProPriceAmount=Et((n,r)=>De(Ie(Ke(),n.Pro,r)),wt().View,Q().View),this.FreePriceAmount=Et((n,r)=>De(Ie(En(),n.Freelancer,r)),wt().View,Q().View),this.ProPriceLabel=A(Aa,Q().View),this.FreePriceLabel=A(Sa,Q().View),this.ProTotalLabel=A(Gr,Q().View),this.FreeTotalLabel=A(Gr,Q().View),this.ProTotalAmount=so((n,r,o)=>{let i=un(o);return De(Ie(Ke(),n.Pro,r)*i)},wt().View,Q().View,lo()),this.FreeTotalAmount=Et((n,r)=>De(Ie(En(),n.Freelancer,r)),wt().View,Q().View),this.ProNote=Et((n,r)=>{let o=Rr("pro",n,r);return Br("Assign GitHub usernames after purchase",n.Pro)+". Prices in "+o+"."},wt().View,Q().View),this.FreeNote=Et((n,r)=>{let o=Rr("freelancer",n,r);return Br("Ideal for solo developers",n.Freelancer)+". Prices in "+o+"."},wt().View,Q().View)}}),Os={$:0},_o={$:1},ht=class extends q{equals;hash;count;data;set_Item(t,n){this.set(t,n)}set(t,n){let r=this.hash(t),o=this.data[r];if(o==null)this.count=this.count+1,this.data[r]=new Array({K:t,V:n});else{let i=ur(a=>this.equals.apply(null,[Zt(a)[0],t]),o);i==null?(this.count=this.count+1,o.push({K:t,V:n})):o[i.$0]={K:t,V:n}}}TryGetValue(t,n){let r=this.data[this.hash(t)];if(r==null)return!1;{let o=Fo(i=>{let a=Zt(i);return this.equals.apply(null,[a[0],t])?p(a[1]):null},r);return o!=null&&o.$==1&&(n.set(o.$0),!0)}}ContainsKey(t){let n=this.data[this.hash(t)];return n==null?!1:Po(r=>this.equals.apply(null,[Zt(r)[0],t]),n)}GetEnumerator(){return Rl(il(Ki(this.data)))}Item(t){return this.get(t)}get Values(){return new Zn(this)}RemoveKey(t){return this.remove(t)}get Keys(){return new Xn(this)}get(t){let n=this.data[this.hash(t)];return n==null?Bl():al(r=>{let o=Zt(r);return this.equals.apply(null,[o[0],t])?p(o[1]):null},n)}remove(t){let n=this.hash(t),r=this.data[n];if(r==null)return!1;{let o=_e(i=>!this.equals.apply(null,[Zt(i)[0],t]),r);return L(o)<r.length&&(this.count=this.count-1,this.data[n]=o,!0)}}constructor(t,n,r,o){if(t=="New_5"&&(t="New_6",n=[],r=k,o=ge),t=="New_6"){let i=n,a=r,s=o;super(),this.equals=a,this.hash=s,this.count=0,this.data=[];let l=D(i);try{for(;l.MoveNext();){let c=l.Current;this.set(c.K,c.V)}}finally{let c=l;typeof c=="object"&&lt(c)&&l.Dispose()}}}},ft=class e extends q{equals;hash;data;count;SAdd(t){return this.add(t)}Contains(t){let n=this.data[this.hash(t)];return n==null?!1:this.arrContains(t,n)}add(t){let n=this.hash(t),r=this.data[n];return r==null?(this.data[n]=[t],this.count=this.count+1,!0):this.arrContains(t,r)?!1:(r.push(t),this.count=this.count+1,!0)}arrContains(t,n){let r=!0,o=0,i=n.length;for(;r&&o<i;)this.equals.apply(null,[n[o],t])?r=!1:o=o+1;return!r}GetEnumerator(){return D(Tn(this.data))}ExceptWith(t){let n=D(t);try{for(;n.MoveNext();)this.Remove(n.Current)}finally{let r=n;typeof r=="object"&&lt(r)&&n.Dispose()}}get Count(){return this.count}IntersectWith(t){let n=new e("New_4",t,this.equals,this.hash),r=Tn(this.data);for(let o=0,i=r.length-1;o<=i;o++){let a=r[o];n.Contains(a)||this.Remove(a)}}Remove(t){let n=this.data[this.hash(t)];return n==null?!1:this.arrRemove(t,n)&&(this.count=this.count-1,!0)}CopyTo(t,n){let r=Tn(this.data);for(let o=0,i=r.length-1;o<=i;o++)nr(t,o+n,r[o])}arrRemove(t,n){let r=!0,o=0,i=n.length;for(;r&&o<i;)this.equals.apply(null,[n[o],t])?(n.splice(o,1),r=!1):o=o+1;return!r}constructor(t,n,r,o){t=="New_3"&&(t="New_4",n=[],r=k,o=ge);let i;if(t=="New_2"&&(i=n,t="New_4",n=i,r=k,o=ge),t=="New_4"){let a=n,s=r,l=o;super(),this.equals=s,this.hash=l,this.data=[],this.count=0;let c=D(a);try{for(;c.MoveNext();)this.add(c.Current)}finally{let h=c;typeof h=="object"&&lt(h)&&c.Dispose()}}}};function Vo(e,t){return{GetEnumerator:()=>{let n=D(e),r=[!0];return new gt(n,null,o=>{if(o.s.MoveNext())return o.c=o.s.Current,!0;{let i=o.s;return k(i,null)||i.Dispose(),o.s=null,r[0]&&(r[0]=!1,o.s=D(t),o.s.MoveNext()?(o.c=o.s.Current,!0):(o.s.Dispose(),o.s=null,!1))}},o=>{let i=o.s;k(i,null)||i.Dispose()})}}}function Or(e){return{GetEnumerator:()=>D(e())}}function Hs(e,t){return zs(jt(e,t))}function jt(e,t){return{GetEnumerator:()=>{let n=D(t);return new gt(null,null,r=>n.MoveNext()&&(r.c=e(n.Current),!0),()=>{n.Dispose()})}}}function qs(e){let t=D(e);try{return t.MoveNext()?t.Current:Qn()}finally{let n=t;typeof n=="object"&&lt(n)&&t.Dispose()}}function js(e,t,n){let r=t,o=D(n);try{for(;o.MoveNext();)r=e(r,o.Current);return r}finally{let i=o;typeof i=="object"&&lt(i)&&o.Dispose()}}function zs(e){return{GetEnumerator:()=>{let t=D(e);function n(r){for(;;){let o=r.s;if(k(o,null))if(t.MoveNext())r.s=D(t.Current),r=r;else return t.Dispose(),!1;else{if(o.MoveNext())return r.c=o.Current,!0;r.Dispose(),r.s=null,r=r}}}return new gt(null,null,n,r=>{let o=r.s;k(o,null)||o.Dispose();let i=t;k(i,null)||i.Dispose()})}}}function Ks(e,t){return Zs(e,Js(t))}function Ys(e,t){let n=D(t);try{for(;n.MoveNext();)e(n.Current)}finally{let r=n;typeof r=="object"&&lt(r)&&n.Dispose()}}function Zs(e,t){return e<0&&Pu(),{GetEnumerator:()=>{let n=[D(t)];return new gt(0,null,r=>{if(r.s=r.s+1,r.s>e)return!1;{let o=n[0];return k(o,null)?Qn():o.MoveNext()?(r.c=o.Current,r.s===e&&(o.Dispose(),n[0]=null),!0):(o.Dispose(),n[0]=null,Qn())}},()=>{let r=n[0];k(r,null)||r.Dispose()})}}}function Js(e){return{GetEnumerator:()=>new gt(0,null,t=>(t.c=e(t.s),t.s=t.s+1,!0),void 0)}}function Qs(e,t){return!Xs(n=>!e(n),t)}function Xs(e,t){let n=D(t);try{let r=!1;for(;!r&&n.MoveNext();)r=e(n.Current);return r}finally{let r=n;typeof r=="object"&&lt(r)&&n.Dispose()}}function tl(e){let t=D(e);try{t.MoveNext()||nl();let n=t.Current;for(;t.MoveNext();){let r=t.Current;Xt(r,n)===1&&(n=r)}return n}finally{let n=t;typeof n=="object"&&lt(n)&&t.Dispose()}}function el(e,t){return{GetEnumerator:()=>{let n=D(t),r=new ft("New_3");return new gt(null,null,o=>{let i,a;if(n.MoveNext()){for(i=n.Current,a=r.SAdd(e(i));!a&&n.MoveNext();)i=n.Current,a=r.SAdd(e(i));return a&&(o.c=i,!0)}else return!1},()=>{n.Dispose()})}}}function nl(){return H("The input sequence was empty.")}function lr(e,t){let n=[];for(let r=0,o=t.length-1;r<=o;r++){let i=e(t[r]);i==null||n.push(i.$0)}return n}function Eo(e){let t=[],n=e;for(;n.$!=0;)t.push(jl(n)),n=zl(n);return t}function rl(e,t,n){let r=t;for(let o=0,i=n.length-1;o<=i;o++)r=e(r,n[o]);return r}function ur(e,t){let n=null,r=0;for(;r<t.length&&n==null;)e(t[r])&&(n=p(r)),r=r+1;return n}function Fo(e,t){let n=null,r=0;for(;r<t.length&&n==null;){let o=e(t[r]);o!=null&&o.$==1&&(n=o),r=r+1}return n}function ol(e,t){let n=ur(e,t);return n==null?H("KeyNotFoundException"):n.$0}function ot(e,t){for(let n=0,r=t.length-1;n<=r;n++)e(t[n])}function Po(e,t){let n=!1,r=0,o=L(t);for(;!n&&r<o;)e(t[r])?n=!0:r=r+1;return n}function il(e){return Array.prototype.concat.apply([],te(e))}function _e(e,t){let n=[];for(let r=0,o=t.length-1;r<=o;r++)e(t[r])&&n.push(t[r]);return n}function kt(e,t){let n=new Array(t.length);for(let r=0,o=t.length-1;r<=o;r++)n[r]=e(t[r]);return n}function cr(e,t,n){let r=n,o=t.length;for(let i=1,a=o;i<=a;i++)r=e(t[o-i],r);return r}function te(e){if(e instanceof Array)return e.slice();if(e instanceof ne)return Eo(e);{let t=[],n=D(e);try{for(;n.MoveNext();)t.push(n.Current);return t}finally{let r=n;typeof r=="object"&&lt(r)&&n.Dispose()}}}function al(e,t){let n=Fo(e,t);return n==null?H("KeyNotFoundException"):n.$0}function sl(e,t){return te(el(e,t))}function Mo(e,t){let n=!0,r=0,o=L(t);for(;n&&r<o;)e(t[r])?r=r+1:n=!1;return n}function ll(e,t){let n=new Array(e);for(let r=0,o=e-1;r<=o;r++)n[r]=t;return n}function ul(e,t){e<0&&H("Negative size given.");let n=new Array(e);for(let r=0,o=e-1;r<=o;r++)n[r]=t(r);return n}var X=K(e=>class extends q{static{X=e(this)}static init;id;vars;static initialized;static instances;static GetOrAddHoleFor(n,r,o){let i,a=X.GetHolesFor(n),s=(i=null,[a.TryGetValue(r,{get:()=>i,set:l=>{i=l}}),i]);if(s[0])return s[1];{let l=o();return a.set_Item(r,l),l}}static GetHolesFor(n){let r,o=(r=null,[X.initialized.TryGetValue(n,{get:()=>r,set:i=>{r=i}}),r]);if(o[0])return o[1];{let i=new ht("New_5");return X.initialized.set_Item(n,i),i}}static applyVarHole(n,r){r.ApplyVarHole(n)}InitInstance(n){let r=X.GetHolesFor(n),o=this.vars;for(let a=0,s=o.length-1;a<=s;a++)(()=>{let l,c=S(o,a),h=c[1],w=c[2],f=c[0];if(r.ContainsKey(f))return null;if(h===0){let g=w==null?null:p(w.$0),C=g==null?"":g.$0,T=E.Create_1(C);l=new yt(f,T)}else if(h===1){let g=w==null?null:p(w.$0),C=g==null?0:g.$0,T=E.Create_1(C);l=new Qe(f,T)}else if(h===2){let g=w==null?null:p(w.$0),C=g==null?!1:g.$0,T=E.Create_1(C);l=new Xe(f,T)}else if(h===3){let g=w==null?null:p(w.$0),C=g==null?-864e13:g.$0,T=E.Create_1(C);l=new tn(f,T)}else if(h===4){let g=w==null?null:p(w.$0),C=g==null?[]:g.$0,T=E.Create_1(C);l=new en(f,T)}else if(h===5){let g=w==null?null:p(w.$0),C=globalThis.document.querySelector("[ws-dom="+f+"]"),T=g==null?C:g.$0,F=p(T),$=E.Create_1(F);l=new be(f,$)}else if(h===6){let g=w==null?null:p(w.$0),C=g==null?[]:g.$0,T=E.Create_1(C);l=new nn(f,T)}else l=H("Invalid kind for template Var type: "+String(h));return r.set_Item(f,l)})();let i=new me({$:0,$0:r},W.Empty);return X.instances.set_Item(n,i),i}$preinit(n){let r=this.InitInstance(n),o=globalThis.document.querySelectorAll("[ws-var^='"+n+"::']");for(let i=0,a=o.length-1;i<=a;i++){let s=o[i],l=s.getAttribute("ws-var"),c=r.Hole(_t(l,p(n.length+2),null)),h=c.WithName(l);Bo().set_Item(h.Name,h),X.applyVarHole(s,c)}}$init(n){}$postinit(n){Lo([])}static{X.initialized=new ht("New_5"),X.instances=new ht("New_5")}}),Qe=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return p(A(String,this.fillWith.View))}AddAttribute(t,n){t(n)(ia(this.fillWith))}get AsChoiceView(){return zt(A(String,this.fillWith.View))}ApplyVarHole(t){ue(Zo(),this.fillWith,t)}constructor(t,n){super(),this.name=t,this.fillWith=n}},Xe=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return p(A(String,this.fillWith.View))}AddAttribute(t,n){t(n)(aa(this.fillWith))}get AsChoiceView(){return zt(A(String,this.fillWith.View))}ApplyVarHole(t){ue(Jo(),this.fillWith,t)}constructor(t,n){super(),this.name=t,this.fillWith=n}},tn=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return p(A(t=>new Date(t).toLocaleString(),this.fillWith.View))}AddAttribute(t,n){t(n)(sa(this.fillWith))}get AsChoiceView(){return zt(A(t=>new Date(t).toLocaleString(),this.fillWith.View))}ApplyVarHole(t){ue(Qo(),this.fillWith,t)}constructor(t,n){super(),this.name=t,this.fillWith=n}},en=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return p(A(String,this.fillWith.View))}AddAttribute(t,n){t(n)(la(this.fillWith))}get AsChoiceView(){return zt(A(String,this.fillWith.View))}ApplyVarHole(t){ue(Xo(),this.fillWith,t)}constructor(t,n){super(),this.name=t,this.fillWith=n}},be=class e extends Z{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}ApplyVarHole(t){}constructor(t,n){super(),this.name=t,this.fillWith=n}},nn=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return p(A(t=>ee(",",t),this.fillWith.View))}AddAttribute(t,n){t(n)(ua(this.fillWith))}get AsChoiceView(){return zt(A(String,this.fillWith.View))}ApplyVarHole(t){ue(ti(),this.fillWith,t)}constructor(t,n){super(),this.name=t,this.fillWith=n}};function Lo(e){if(Hr()==null){Io(""),Ht("",null,globalThis.document.body,null);let t=Go(globalThis.document.body,e),n=globalThis.document.body;(o=>{W.RunInPlace(!0,n,o)})(t);let r=t;return pl(p(r)),r}else return Hr().$0}function cl(e,t,n,r){return Io(""),Do(e,t,n),dl(e,t,r)}function Do(e,t,n){Ve(e).ContainsKey(t==null?"":t.$0)||Ht(e,t,n(),null)}function Hr(){return Gt.RenderedFullDocTemplate}function Io(e){hl()||(fl(!0),ml(globalThis.document.body,"")),ye().set_Item(e,Ve(""))}function Ht(e,t,n,r){let o=new ft("New_3");function i(f,g){for(;;)switch(f){case 0:if(g!==null){let u=g.nextSibling;k(g.nodeType,Node.TEXT_NODE)?eu(g):k(g.nodeType,Node.ELEMENT_NODE)&&s(g),g=u}else return null;break;case 1:let C=_t(g.nodeName,p(3),null).toLowerCase(),T=C.indexOf("."),F=T===-1?[e,C]:[_t(C,null,p(T-1)),_t(C,p(T+1),null)],$=F[1],m=F[0];if(m!=""&&!ye().ContainsKey(m))return Xr($);{m==""&&r!=null&&r.$0($);let u=ye().Item(m);if(u.ContainsKey($)){let v=u.Item($).cloneNode(!0),b=new ft("New_3"),y=new ht("New_5"),N=g.attributes;for(let _=0,P=N.length-1;_<=P;_++){let V=N.item(_).name.toLowerCase(),B=N.item(_).nodeValue,J=B==""?V:B.toLowerCase();y.set_Item(V,J),b.SAdd(V)||console.warn("Hole mapped twice",V)}for(let _=0,P=g.childNodes.length-1;_<=P;_++){let V=g.childNodes[_];k(V.nodeType,Node.ELEMENT_NODE)&&(b.SAdd(V.nodeName.toLowerCase())||console.warn("Hole filled twice",$))}let G=g.childNodes.length===1&&k(g.firstChild.nodeType,Node.TEXT_NODE);if(G){let _=nu(v,g.firstChild.textContent,$),P=(B=>J=>B.SAdd(J))(b);(B=>J=>{J!=null&&B(J.$0)})(B=>{P(B)})(_)}if(ru(v,b),!G)for(let _=0,P=g.childNodes.length-1;_<=P;_++){let V=g.childNodes[_];k(V.nodeType,Node.ELEMENT_NODE)&&(V.hasAttributes()?ou(v,V):a(v,V))}iu(v,y),to(v,g.parentNode,g),g.parentNode.removeChild(g);return}else return Xr($)}break}}function a(f,g){let C=g.nodeName.toLowerCase(),T=($,m)=>{if(C=="title"&&g.hasChildNodes()){let u=Mn(g.textContent);for(g.removeChild(g.firstChild);u.hasChildNodes();)g.appendChild(u.firstChild)}return s(g),to(g,$,m)};Y(f,"[ws-attr-holes]",$=>{let m=$t($.getAttribute("ws-attr-holes"),[" "],1);for(let u=0,d=m.length-1;u<=d;u++){let v=S(m,u),b=new RegExp("\\${"+C+"}","ig"),y=$.getAttribute(v).replace(b,g.textContent);$.setAttribute(v,y)}});let F=f.querySelector("[ws-hole="+C+"]");if(k(F,null)){let $=f.querySelector("[ws-replace="+C+"]");if(k($,null)){let m=f.querySelector("slot[name="+C+"]");return f.tagName.toLowerCase()=="template"?(T(m.parentNode,m),void m.parentNode.removeChild(m)):null}else{T($.parentNode,$),$.parentNode.removeChild($);return}}else{for(;F.hasChildNodes();)F.removeChild(F.lastChild);return F.removeAttribute("ws-hole"),($=>{let m=$;return u=>T(m,u)})(F)(null)}}function s(f){f.hasAttribute("ws-preserve")||(Dn(f.nodeName.toLowerCase(),"ws-")?c(f):(Ko(f),l(f.firstChild)))}function l(f){return i(0,f)}function c(f){return i(1,f)}function h(f){for(;;){let g=f.querySelector("[ws-template]");if(k(g,null)){let C=f.querySelector("[ws-children-template]");if(k(C,null)){let T=f.querySelectorAll("template[id]");for(let $=1,m=T.length-1;$<=m;$++){let u=T[$];o.Contains(u)||(Ht(e,p(u.getAttribute("id")),u,null),o.SAdd(u))}let F=f.querySelectorAll("template[name]");for(let $=1,m=F.length-1;$<=m;$++){let u=F[$];o.Contains(u)||(Ht(e,p(u.getAttribute("name")),u,null),o.SAdd(u))}return null}else{let T=C.getAttribute("ws-children-template");C.removeAttribute("ws-children-template"),Ht(e,p(T),C,null),f=f}}else{let C=g.getAttribute("ws-template");gl(e,p(C),g)(null),f=f}}}let w=(t==null?"":t.$0).toLowerCase();Ve(e).set_Item(w,n),n.hasChildNodes()&&(h(n),l(n.firstChild))}function Go(e,t){let n,r=vl(e,Vo(t,Bo().Values)),o=r[1],i=r[0],a=i.Els;return!k(a,null)&&a.length===1&&S(a,0)instanceof Node&&k(S(a,0).nodeType,Node.ELEMENT_NODE)&&(n=S(a,0),!0)?Hn.TreeNode(i,o):W.Mk(So(i),o)}function pl(e){Gt.RenderedFullDocTemplate=e}function dl(e,t,n){let r,o=(r=null,[Ve(e).TryGetValue(t==null?"":t.$0,{get:()=>r,set:i=>{r=i}}),r]);return o[0]?Go(o[1].cloneNode(!0),n):(console.warn("Local template doesn't exist",t),W.Empty)}function Ve(e){let t,n=(t=null,[ye().TryGetValue(e,{get:()=>t,set:r=>{t=r}}),t]);if(n[0])return n[1];{let r=new ht("New_5");return ye().set_Item(e,r),r}}function hl(){return Gt.LocalTemplatesLoaded}function fl(e){Gt.LocalTemplatesLoaded=e}function ml(e,t){let n=Ve(t),r=new ht("New_5"),o=e.querySelectorAll("[ws-template]");for(let h=0,w=o.length-1;h<=w;h++){let f=o[h],g=f.getAttribute("ws-template").toLowerCase();f.removeAttribute("ws-template"),r.set_Item(g,Ro(f))}let i=e.querySelectorAll("[ws-children-template]");for(let h=0,w=i.length-1;h<=w;h++){let f=i[h],g=f.getAttribute("ws-children-template").toLowerCase();f.removeAttribute("ws-children-template"),r.set_Item(g,wl(f))}let a=e.querySelectorAll("template[id]");for(let h=0,w=a.length-1;h<=w;h++){let f=a[h];r.set_Item(f.getAttribute("id").toLowerCase(),qr(f))}let s=e.querySelectorAll("template[name]");for(let h=0,w=s.length-1;h<=w;h++){let f=s[h];r.set_Item(f.getAttribute("name").toLowerCase(),qr(f))}let l=new ft("New_3");function c(h){if(!n.ContainsKey(h)){let w,f=(w=null,[r.TryGetValue(h,{get:()=>w,set:g=>{w=g}}),w]);f[0]?(l.SAdd(h),r.RemoveKey(h),Ht(t,p(h),f[1],p(c))):console.warn(l.Contains(h)?"Encountered loop when instantiating "+h:"Local template does not exist: "+h)}}for(;r.count>0;)c(qs(r.Keys))}function ye(){return Gt.LoadedTemplates}function Y(e,t,n){xs(e,t,r=>{r.closest("[ws-preserve]")==null&&n(r)})}function gl(e,t,n){let r=Ro(n);return o=>{Ht(e,t,r,o)}}function vl(e,t){let n,r=[],o=[],i=[],a=[],s=new ht("New_5"),l=D(t);try{for(;l.MoveNext();){let u=l.Current;s.set_Item(u.Name,u)}}finally{let u=l;typeof u=="object"&&lt(u)&&l.Dispose()}let c=Ur(e),h=(u,d)=>{let v=ir(u,d);o.push(yo(v)),i.push([u,v]);let b=Rt(v.OnAfterRender);if(b==null)return null;{let y=b.$0;a.push(()=>{y(u)});return}},w=u=>{let d,v=(d=null,[s.TryGetValue(u,{get:()=>d,set:b=>{d=b}}),d]);if(v[0]){let b=v[1];if(b instanceof nt)return p(b.Value);if(b instanceof jn)return p(W.TextNode(b.Value));{let y=b.ForTextView();return y==null?null:p(W.TextView(y.$0))}}else return null};Y(e,"[ws-hole]",u=>{let d=u.getAttribute("ws-hole");for(u.removeAttribute("ws-hole");u.hasChildNodes();)u.removeChild(u.lastChild);let v=w(d);if(v!=null&&v.$==1){let b=v.$0;Bn(u,b.docNode),r.push(qt.New(An(u),b.docNode,null,u,Qt(),null)),o.push(b.updates)}}),Y(e,"[ws-replace]",u=>{let d=w(u.getAttribute("ws-replace"));if(d!=null&&d.$==1){let v=d.$0,b=u.parentNode,y=globalThis.document.createTextNode("");b.replaceChild(y,u);let N=Pl(y,v.docNode);c=Ur(e);let G=ur(_=>u===_,c);G==null||nr(c,G.$0,v.docNode),r.push(qt.New(An(b),v.docNode,p([N,y]),b,Qt(),null)),o.push(v.updates)}});let f=!1;Y(e,"slot",u=>{let d=u.getAttribute("name"),v=d==""||d==null?"default":d.toLowerCase();if(!(f&&v=="default"||!k(e.parentElement,null))){for(;u.hasChildNodes();)u.removeChild(u.lastChild);v=="default"&&(f=!0);let b=w(v);if(b!=null&&b.$==1){let y=b.$0;Bn(u,y.docNode),r.push(qt.New(An(u),y.docNode,null,u,Qt(),null)),o.push(y.updates)}}}),Y(e,"[ws-attr]",u=>{let d,v=u.getAttribute("ws-attr");u.removeAttribute("ws-attr");let b=(d=null,[s.TryGetValue(v,{get:()=>d,set:y=>{d=y}}),d]);if(b[0]){let y=b[1];y instanceof R?h(u,y.Value):console.warn("Attribute hole filled with non-attribute data",v)}}),Y(e,"[ws-on]",u=>{h(u,rt.Concat(lr(d=>{let v,b=$t(d,[":"],1),y=(v=null,[s.TryGetValue(S(b,1),{get:()=>v,set:N=>{v=N}}),v]);if(y[0]){let N=y[1];return N instanceof zn?p(ra(S(b,0),N.Value)):N instanceof Oe?p(rt.HandlerImpl(S(b,0),N.Value)):(console.warn("Event hole on"+S(b,0)+" filled with non-event data",S(b,1)),null)}else return null},$t(u.getAttribute("ws-on"),[" "],1)))),u.removeAttribute("ws-on")}),Y(e,"[ws-onafterrender]",u=>{let d,v=u.getAttribute("ws-onafterrender"),b=(d=null,[s.TryGetValue(v,{get:()=>d,set:y=>{d=y}}),d]);if(b[0]){let y=b[1];y instanceof Kn||y instanceof Je?(u.removeAttribute("ws-onafterrender"),h(u,Lr(y.Value))):console.warn("onafterrender hole filled with non-onafterrender data",v)}}),Y(e,"[ws-var]",u=>{let d,v=u.getAttribute("ws-var");u.removeAttribute("ws-var");let b=(d=null,[s.TryGetValue(v,{get:()=>d,set:y=>{d=y}}),d]);b[0]&&b[1].AddAttribute(y=>N=>h(y,N),u)});let g=()=>{bl("[ws-dom]",u=>{let d,v,b,y=(d=null,[s.TryGetValue(u.getAttribute("ws-dom").toLowerCase(),{get:()=>d,set:N=>{d=N}}),d]);if(y[0]){let N=y[1];if(N instanceof be){let G=N.Value;u.removeAttribute("ws-dom"),v=u;let _=new MutationObserver((P,V)=>{ot(B=>{B.removedNodes.forEach(Cr(J=>J[0]===v&&B.addedNodes.length!==1?(G.SetFinal(null),V.disconnect()):null),null)},P)});u.parentElement!==null&&_.observe(u.parentElement,(b={},b.childList=!0,b)),G.Set(p(u)),qe(P=>{if(P!=null&&P.$==1){let V=P.$0;if(v!==V){let B=[V];v.replaceWith.apply(v,B),v=V}}else v.remove(),_.disconnect()},G.View)}}})};Y(e,"[ws-attr-holes]",u=>{let d=new RegExp(xe(),"g"),v=$t(u.getAttribute("ws-attr-holes"),[" "],1);u.removeAttribute("ws-attr-holes");for(let b=0,y=v.length-1;b<=y;b++)(()=>{let N,G=S(v,b),_=u.getAttribute(G),P=null,V=0,B=[];for(;P=d.exec(_),P!==null;){let z=_t(_,p(V),p(d.lastIndex-S(P,0).length-1));V=d.lastIndex,B.push([z,S(P,1)])}let J=_t(_,p(V),null);d.lastIndex=0;let M=cr((z,tt)=>(it=>{let ct=it[0],At=it[1];return vt=>{let mt,St=vt[0],et=vt[1],ce=(mt=null,[s.TryGetValue(At,{get:()=>mt,set:Kt=>{mt=Kt}}),mt]),Bt=ce[0]?ce[1].AsChoiceView:wr("");return Bt.$==1?[ct,ne.Cons(St==""?Bt.$0:A(Kt=>Kt+St,Bt.$0),et)]:[ct+Bt.$0+St,et]}})(z)(tt),B,[J,ne.Empty]);if(M[1].$==1)if(M[1].$1.$==1)if(M[1].$1.$1.$==1)if(M[1].$1.$1.$1.$==0){let z=M[0];N=st(G,so((tt,it,ct)=>z+tt+it+ct,M[1].$0,M[1].$1.$0,M[1].$1.$1.$0))}else{let z=M[0];N=st(G,A(tt=>z+ee("",tt),pa(M[1])))}else{let z=M[0];N=st(G,Et((tt,it)=>z+tt+it,M[1].$0,M[1].$1.$0))}else if(M[0]=="")N=st(G,M[1].$0);else{let z=M[0];N=st(G,A(tt=>z+tt,M[1].$0))}else N=rt.Create(G,M[0]);return h(u,N)})()});let C=c,T=a.length==0?p(()=>{g()}):p(u=>{g(),ot(d=>{d(u)},a)}),F=!k(c,null)&&c.length===1&&S(c,0)instanceof Node&&S(c,0)instanceof Element&&(n=S(c,0),!0)?p(n):null,$={Els:C,Dirty:!0,Holes:r,Attrs:i,Render:T?T.$0:void 0,El:F?F.$0:void 0};return[$r($,["Render","El"]),mn(ve(),je,o)]}function Bo(){return Gt.GlobalHoles}function Ro(e){e.removeAttribute("ws-template");let t=e.getAttribute("ws-replace");if(t!=null){e.removeAttribute("ws-replace");let r=e.parentNode;if(!k(r,null)){let o=globalThis.document.createElement(e.tagName);o.setAttribute("ws-replace",t),r.replaceChild(o,e)}}let n=globalThis.document.createElement("div");return n.appendChild(e),n}function wl(e){let t=globalThis.document.createElement("div");for(;e.hasChildNodes();)t.appendChild(e.firstChild);return t}function qr(e){let t=globalThis.document.createElement("div"),n=e.content;for(let r=0,o=n.childNodes.length-1;r<=o;r++)t.appendChild(n.childNodes[r].cloneNode(!0));return t}function xe(){return Gt.TextHoleRE}function bl(e,t){$s(e,n=>{n.closest("[ws-preserve]")==null&&t(n)})}var Ln=class extends He{isConst;current;snap;view;id;get View(){return this.view}Set(t){this.isConst?(n=>n("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(n=>{console.log(n)}):(Ce(this.snap),this.current=t,this.snap={s:vn(t,[])})}Get(){return this.current}Update(t){this.Set(t(this.Get()))}UpdateMaybe(t){let n=t(this.Get());n!=null&&n.$==1&&this.Set(n.$0)}SetFinal(t){this.isConst?(n=>n("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(n=>{console.log(n)}):(Ce(this.snap),this.isConst=!0,this.current=t,this.snap={s:It(t)})}constructor(t,n,r){super(),this.isConst=t,this.current=r,this.snap=n,this.view=()=>this.snap,this.id=Qt()}},Ee=K(e=>class{static{Ee=e(this)}static IsFetchingView;static IsAuthedView;static UserView;static isFetchingVar;static userVar;static API;static{this.API="https://api.websharper.io",Wl("https://api.websharper.io"),this.userVar=E.Create_1(null),this.isFetchingVar=E.Create_1(!1),this.UserView=Jt().View,this.IsAuthedView=A(n=>n!=null,Jt().View),this.IsFetchingView=Vn().View}});function Pt(e){return e==null||new RegExp("^\\s*$").test(e)}function pr(e){return e.replace(new RegExp("^\\s+"),"").replace(new RegExp("\\s+$"),"")}function ee(e,t){return te(t).join(e)}function $t(e,t,n){return xl(e,new RegExp("["+$l(t.join(""))+"]"),n)}function Dn(e,t){return e.substring(0,t.length)==t}function yl(e,t){return Qs(e,Cl(t))}function xl(e,t,n){return n===1?_e(r=>r!=="",jr(e,t)):jr(e,t)}function $l(e){return e.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]","g"),"\\$&")}function Cl(e){return e??""}function jr(e,t){return e.split(t)}function Fe(e,t){return{k:e,ct:t}}function gn(e){return{$:1,$0:e}}function Pe(e){return{$:0,$0:e}}function Wo(e){return{$:2,$0:e}}var $e=class extends q{AsyncBase(t,n){return U(()=>{let r=Hl(this.Headers),o=Ol(n);return O(rs(),i=>O(pn((a,s,l)=>{let c=[!0],h=vo(i,()=>{c[0]&&(c[0]=!1,l(new rn("New",i)))});return Ul().Async(this.EndPoint+"/"+t,r,o,w=>{c[0]&&(c[0]=!1,h.Dispose(),a(w))},w=>{c[0]&&(c[0]=!1,h.Dispose(),s(w))})}),a=>j(JSON.parse(a))))})}get EndPoint(){return ql()}get Headers(){return[]}Async(t,n){return this.AsyncBase(t,n)}};function kl(e,t){return{c:e,r:t}}var In=class extends q{push;value;dirty;updates;get NChanged(){return this.updates}NGetExitAnim(t){return Sn()}NGetEnterAnim(t){return Sn()}NGetChangeAnim(t){return Sn()}NSync(t){this.dirty&&(this.push(t)(this.value),this.dirty=!1)}constructor(t,n){super(),this.push=n,this.value=void 0,this.dirty=!1,this.updates=A(r=>{this.value=r,this.dirty=!0},t)}};function Ce(e){let t,n=e.s;if(!(n==null||(!(n!=null&&n.$==2||n!=null&&n.$==3)||(t=n.$1,!1)))){e.s=null;for(let r=0,o=L(t)-1;r<=o;r++){let i=S(t,r);typeof i=="object"?(a=>{Ce(a)})(i):i()}}}var ne=class e{static Cons(t,n){return pt(e,{$:1,$0:t,$1:n})}static Empty=pt(e,{$:0});GetEnumerator(){return new gt(this,null,t=>{let n=t.s;if(n.$==0)return!1;{let r=n.$1;return t.c=n.$0,t.s=r,!0}},void 0)}$;$0;$1},ae=K(e=>class{static{ae=e(this)}static GetCT;static Zero;static defCTS;static scheduler;static noneCT;static{this.noneCT=kl(!1,[]),this.scheduler=new Rn,this.defCTS=[new Wn],this.Zero=j(),this.GetCT=n=>{n.k(Pe(n.ct))}}}),qt=class e{Attr;Children;Delimiters;El;ElKey;Render;Equals(t){return this.ElKey===t.ElKey}GetHashCode(){return this.ElKey}static New(t,n,r,o,i,a){let s={Attr:t,Children:n,El:o,ElKey:i},l=(Yt(s,"Delimiters",r),Yt(s,"Render",a),s);return pt(e,l)}};function It(e){return{$:0,$0:e}}function vn(e,t){return{$:2,$0:e,$1:t}}function se(e,t){return{$:3,$0:e,$1:t}}function he(e,t,n,r){return{Name:e,Description:t,Month:n,Year:r}}function Gn(e,t){return{Pro:e,Freelancer:t}}function dr(e,t){return Ql(e,-2147483648,2147483647,t)}function de(e,t){return{Amount:e,Currency:t}}function Al(){return{Text:globalThis.document.createTextNode(""),Dirty:!1,Value:""}}function Sl(e,t){e.Value=t,e.Dirty=!0}function hr(e,t){ke(e.parentNode,t,e)}function Tl(e,t,n){return ei(ni(),_l(e,t,or(),n))}function zr(e,t,n){return Un()?U(()=>{let r=ri(n),o=Fl(t,r),i=El(t,r);return O(Jr(Xl(o,Vl(t,r))),()=>O(Yr(e,t),()=>O(Jr(i),()=>(t.PreviousNodes=r,j(null)))))}):Yr(e,t)}function Kr(e,t,n){let r=ri(n);Ae(e,t.Top),t.PreviousNodes=r}function Nl(e,t){return ei(ni(),Ml(e,or(),t))}function ke(e,t,n){for(;;){if(t!=null&&t.$==1)return Ge(e,t.$0.El,n);if(t!=null&&t.$==2){let r=t.$0;r.Dirty=!1,t=r.Current}else{if(t==null)return n;if(t!=null&&t.$==4)return Ge(e,t.$0.Text,n);if(t!=null&&t.$==5)return Ge(e,t.$0,n);if(t!=null&&t.$==6)return cr((r,o)=>(i=>a=>s=>a==null||a.constructor===Object?ke(i,a,s):Ge(i,a,s))(e)(r)(o),t.$0.Els,n);{let r=t.$1;t=t.$0,n=ke(e,r,n)}}}}function _l(e,t,n,r){let o=e.parentNode;hr(t,r);let i=ir(o,n);return qt.New(i,r,p([e,t]),o,Qt(),Rt(i.OnAfterRender))}function Yr(e,t){if(On()){let n=r=>{requestAnimationFrame(()=>{Ae(e,t.Top),r()})};return pn((r,o,i)=>n.apply(null,[r,o,i]))}else return Ae(e,t.Top),j(null)}function Vl(e,t){return wn(kt(n=>us(n.Attr),vr(oi(t,gr(n=>ls(n.Attr),e.PreviousNodes)))))}function El(e,t){return wn(kt(n=>ps(n.Attr),vr(oi(e.PreviousNodes,gr(n=>cs(n.Attr),t)))))}function Fl(e,t){let n=o=>ds(o.Attr),r=o=>gr(n,o);return wn(kt(o=>hs(o.Attr),vr(Cu(r(e.PreviousNodes),r(t)))))}function Ae(e,t){e||Ll(t),Uo(t.Children),Oo(t)}function Bn(e,t){ke(e,t,null)}function Pl(e,t){let n=e.parentNode,r=globalThis.document.createTextNode("");return n.insertBefore(r,e),hr(e,t),r}function Ml(e,t,n){Bn(e,n);let r=ir(e,t);return qt.New(r,n,null,e,Qt(),Rt(r.OnAfterRender))}function Ge(e,t,n){return Cs(e,n,t),t}function Ll(e){function t(n){function r(o){for(;;)if(o!=null&&o.$==0){let i=o.$1,a=o.$0;if(r(a))return!0;o=i}else if(o!=null&&o.$==2){let i=o.$0;if(i.Dirty)return!0;o=i.Current}else if(o!=null&&o.$==6){let i=o.$0;return i.Dirty||Po(t,i.Holes)}else return!1}return r(n.Children)}xo(e.El,e.Attr),t(e)&&Dl(e)}function Uo(e){for(;;){if(e!=null&&e.$==1)return Ae(!1,e.$0);if(e!=null&&e.$==2)e=e.$0.Current;else{if(e==null)return null;if(e!=null&&e.$==5)return null;if(e!=null&&e.$==4){let t=e.$0;return t.Dirty?(t.Text.nodeValue=t.Value,t.Dirty=!1):null}else if(e!=null&&e.$==6){let t=e.$0;return ot(n=>{Ae(!1,n)},t.Holes),ot(n=>{xo(n[0],n[1])},t.Attrs),Oo(t)}else{let t=e.$1,n=e.$0;Uo(n),e=t}}}}function Oo(e){let t=Rt(e.Render);t!=null&&t.$==1&&(t.$0(e.El),Yt(e,"Render",null))}function Dl(e){let t=e.El;function n(s,l){for(;;){if(s!=null&&s.$==1)return s.$0.El;if(s!=null&&s.$==2){let c=s.$0;if(c.Dirty)return c.Dirty=!1,ke(t,c.Current,l);s=c.Current}else{if(s==null)return l;if(s!=null&&s.$==4)return s.$0.Text;if(s!=null&&s.$==5)return s.$0;if(s!=null&&s.$==6){let c=s.$0;return c.Dirty&&(c.Dirty=!1),cr((h,w)=>h==null||h.constructor===Object?n(h,w):h,c.Els,l)}else{let c=s.$1;s=s.$0,l=n(c,l)}}}}let r=e.El;Uu(s=>{ks(r,s)},Wu(Ou(e),Ru(e.El,Rt(e.Delimiters))));let o=e.Children,i=Rt(e.Delimiters),a=i!=null&&i.$==1?i.$0[1]:null;n(o,a)}function Il(e){return pn((t,n)=>{e.then(t,r=>n(Gl(r)))})}function Gl(e){return e instanceof Error?e:new qn(e)}function Bl(){throw new er("New")}function D(e){return e instanceof Array?Ho(e):k(typeof e,"string")?qo(e):e.GetEnumerator()}function Ho(e){return new gt(0,null,t=>{let n=t.s;return n<L(e)&&(t.c=S(e,n),t.s=n+1,!0)},void 0)}function qo(e){return new gt(0,null,t=>{let n=t.s;return n<e.length&&(t.c=e[n],t.s=n+1,!0)},void 0)}function Rl(e){return e instanceof Array?Ho(e):k(typeof e,"string")?qo(e):"GetEnumerator0"in e?e.GetEnumerator0():e.GetEnumerator()}var gt=class extends q{s;c;n;d;e;MoveNext(){let t=this.n(this);return this.e=t?1:2,t}get Current(){return this.e===1?this.c:this.e===0?H("Enumeration has not started. Call MoveNext."):H("Enumeration already finished.")}Dispose(){this.d&&this.d(this)}constructor(t,n,r,o){super(),this.s=t,this.c=n,this.n=r,this.d=o,this.e=0}};function Wl(e){bn.EndPoint=e}function Ul(){return bn.AjaxProvider}function Ol(e){return JSON.stringify(e)}function Hl(e){return ea(kt(t=>[t[0],t[1]],sl(t=>t[0],e.concat([["content-type","application/json"]]))))}function ql(){return bn.EndPoint}function Zr(e,t,n,r,o,i,a){let s=new XMLHttpRequest,l=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");s.open("POST",t,e),e==!0&&(s.withCredentials=!0);let c;for(var h in n)s.setRequestHeader(h,n[h]);l&&s.setRequestHeader("x-csrftoken",l);function w(){if(s.status==200)o(s.responseText);else if(a&&s.status==403&&s.responseText=="CSRF")a();else{let f="Response status is not 200: ";i(new Error(f+s.status))}}"onload"in s?s.onload=s.onerror=s.onabort=w:s.onreadystatechange=()=>{s.readyState==4&&w()},s.send(r)}var Rn=class extends q{idle;robin;Fork(t){this.robin.push(t),this.idle&&(this.idle=!1,setTimeout(()=>{this.tick()},0))}tick(){let t=Date.now(),n=!0;for(;n;)this.robin.length===0?(this.idle=!0,n=!1):(this.robin.shift()(),Date.now()-t>40&&(setTimeout(()=>{this.tick()},0),n=!1))}constructor(){super(),this.idle=!0,this.robin=[]}};function jl(e){return e.$==1?e.$0:jo()}function zl(e){return e.$==1?e.$1:jo()}function jo(){return H("The input list was empty.")}var I=K(e=>class{static{I=e(this)}static FloatApplyChecked;static FloatGetChecked;static FloatSetChecked;static FloatApplyUnchecked;static FloatGetUnchecked;static FloatSetUnchecked;static IntApplyChecked;static IntGetChecked;static IntSetChecked;static IntApplyUnchecked;static IntGetUnchecked;static IntSetUnchecked;static FileApplyUnchecked;static FileGetUnchecked;static FileSetUnchecked;static DateTimeApplyUnchecked;static DateTimeGetUnchecked;static DateTimeSetUnchecked;static StringListApply;static StringListGet;static StringListSet;static StringApply;static StringGet;static StringSet;static BoolCheckedApply;static EmptyAttr;static{this.EmptyAttr=null,this.BoolCheckedApply=m=>[u=>{u.addEventListener("change",()=>m.Get()!=u.checked?m.Set(u.checked):null)},u=>d=>d!=null&&d.$==1?void(u.checked=d.$0):null,A(u=>p(u),m.View)],this.StringSet=m=>u=>{m.value=u},this.StringGet=m=>p(m.value);let n=su(),r=au();this.StringApply=m=>Wt(n,r,m),this.StringListSet=m=>u=>{let d=m.options;for(let v=0,b=d.length-1;v<=b;v++)(()=>{let y=d.item(v);y.selected=Fu(y.value,u)})()},this.StringListGet=m=>{let u=m.selectedOptions;return p(te(Or(()=>Hs(d=>[u.item(d).value],Tr(0,u.length-1)))))};let o=uu(),i=lu();this.StringListApply=m=>Wt(o,i,m),this.DateTimeSetUnchecked=m=>u=>{m.value=new Date(u).toLocaleString()},this.DateTimeGetUnchecked=m=>{let u,d,v=m.value;if(pe(v))return p(-864e13);{u=0;let b=Lu(v);return d=[b!=null&&b.$==1&&(u=b.$0,!0),u],d[0]?p(d[1]):null}};let a=pu(),s=cu();this.DateTimeApplyUnchecked=m=>Wt(a,s,m),this.FileSetUnchecked=()=>()=>null,this.FileGetUnchecked=m=>{let u=m.files;return p(te(Or(()=>jt(d=>u.item(d),Tr(0,u.length-1)))))};let l=fu(),c=hu();this.FileApplyUnchecked=m=>du(l,c,m),this.IntSetUnchecked=m=>u=>{m.value=String(u)},this.IntGetUnchecked=m=>{let u=m.value;if(pe(u))return p(0);{let d=+u;return d!==d>>0?null:p(d)}};let h=gu(),w=mu();this.IntApplyUnchecked=m=>Wt(h,w,m),this.IntSetChecked=m=>u=>{let d=u.Input;return m.value!=d?void(m.value=d):null},this.IntGetChecked=m=>{let u,d,v=m.value;if(pe(v))u=!m.checkValidity||m.checkValidity()?bt.Blank(v):bt.Invalid(v);else{let b=(d=0,[dr(v,{get:()=>d,set:y=>{d=y}}),d]);u=b[0]?bt.Valid(b[1],v):bt.Invalid(v)}return p(u)};let f=wu(),g=vu();this.IntApplyChecked=m=>Wt(f,g,m),this.FloatSetUnchecked=m=>u=>{m.value=String(u)},this.FloatGetUnchecked=m=>{let u=m.value;if(pe(u))return p(0);{let d=+u;return isNaN(d)?null:p(d)}};let C=yu(),T=bu();this.FloatApplyUnchecked=m=>Wt(C,T,m),this.FloatSetChecked=m=>u=>{let d=u.Input;return m.value!=d?void(m.value=d):null},this.FloatGetChecked=m=>{let u,d=m.value;if(pe(d))u=!m.checkValidity||m.checkValidity()?bt.Blank(d):bt.Invalid(d);else{let v=+d;u=isNaN(v)?bt.Invalid(d):bt.Valid(v,d)}return p(u)};let F=$u(),$=xu();this.FloatApplyChecked=m=>Wt(F,$,m)}});function Kl(e,t,n){return()=>r=>{let o;if(typeof r=="object"&&r!=null){let a={};if(typeof t=="string"){let s=r[t];o=ol(l=>!k(l,null)&&l[0]==s,n)}else{let s=[void 0],l;for(var i in t)if((c=>r.hasOwnProperty(c)&&(s[0]=t[c],!0))(i))break;o=s[0]}return a.$=o,ot(s=>{let l=s[0],c=s[1],h=s[2],w=s[3];if(l==null){let f=h()(r);c&&delete f[t],a.$0=f;return}else return w===0?void(a[l]=h()(r[c])):w===1?void(a[l]=r.hasOwnProperty(c)?p(h()(r[c])):null):H("Invalid field option kind")},S(n,o)[1]),e===void 0?a:e(a)}else return r}}function Nt(){return()=>e=>e}function Yl(e){return Zl(e)}function Zl(e){return()=>t=>kt(e(),t)}function Jl(e,t){return()=>n=>{let r={};return ot(o=>{let i=o[0],a=o[1],s=o[2];return s===0?n.hasOwnProperty(i)?void(r[i]=a()(n[i])):H("Missing mandatory field: "+i):s===1?void(r[i]=n.hasOwnProperty(i)?p(a()(n[i])):null):s===2?n.hasOwnProperty(i)?void(r[i]=a()(n[i])):null:s===3?n[i]===void 0?void(r[i]=a()(n[i])):null:H("Invalid field option kind")},t),e===void 0?r:e(r)}}var rn=class extends Error{ct;constructor(t,n,r,o){let i;if(t=="New"&&(i=n,t="New_1",n="The operation was canceled.",r=null,o=i),t=="New_1"){let a=n,s=r,l=o;super(a),this.inner=s,this.ct=l}}},Wn=class extends q{init;c;pending;r;constructor(){super(),this.c=!1,this.pending=null,this.r=[],this.init=1}};function zo(e,t,n,r){let o={DynElem:e,DynFlags:t,DynNodes:n};return Yt(o,"OnAfterRender",r),o}var fr=K(e=>class{static{fr=e(this)}static counter;static{this.counter=0}});function Ql(e,t,n,r){let o=+e,i=o===o-o%1&&o>=t&&o<=n;return i&&r.set(o),i}function Un(){return ku()}function Jr(e){return U(()=>O(tu(()=>{},Au(e)),()=>(Su(e),j(null))))}function Xl(e,t){return mr(li(e.$0,t.$0))}function tu(e,t){let n=t.Duration;if(n===0)return dt();{let r=o=>{function i(a){return s=>{let l=s-a;return t.Compute(l),e(),l<=n?void requestAnimationFrame(c=>{i(a)(c)}):o()}}requestAnimationFrame(a=>{i(a)(a)})};return pn((o,i,a)=>r.apply(null,[o,i,a]))}}function mr(e){return{$:0,$0:e}}function wn(e){return mr(Du(jt(Nu,e)))}function Sn(){return mr(ci())}function On(){return ai.BatchUpdatesEnabled}function Qr(e){let t=[0];function n(){return U(()=>O(e,()=>{let r=t[0];return k(r,1)?(t[0]=0,dt()):k(r,2)?(t[0]=1,n()):dt()}))}return()=>{let r=t[0];k(r,0)?(t[0]=1,ns(n(),null)):k(r,1)&&(t[0]=2)}}var Gt=K(e=>class{static{Gt=e(this)}static RenderedFullDocTemplate;static TextHoleRE;static GlobalHoles;static LocalTemplatesLoaded;static LoadedTemplates;static{this.LoadedTemplates=new ht("New_5"),this.LocalTemplatesLoaded=!1,this.GlobalHoles=new ht("New_5"),this.TextHoleRE="\\${([^}]+)}",this.RenderedFullDocTemplate=null}});function eu(e){let t=null,n=0,r=e.textContent,o=new RegExp(xe(),"g");for(;t=o.exec(r),t!==null;){e.parentNode.insertBefore(globalThis.document.createTextNode(_t(r,p(n),p(o.lastIndex-S(t,0).length-1))),e),n=o.lastIndex;let i=globalThis.document.createElement("span");i.setAttribute("ws-replace",S(t,1).toLowerCase()),e.parentNode.insertBefore(i,e)}o.lastIndex=0,e.textContent=_t(r,p(n),null)}function Xr(e){console.warn("Instantiating non-loaded template",e)}function nu(e,t,n){let r=e.querySelector("[ws-replace]");return k(r,null)?(console.warn("Filling non-existent text hole",n),null):(r.parentNode.replaceChild(globalThis.document.createTextNode(t),r),p(r.getAttribute("ws-replace")))}function ru(e,t){let n=r=>{Y(e,"["+r+"]",o=>{t.Contains(o.getAttribute(r))||o.removeAttribute(r)})};n("ws-attr"),n("ws-onafterrender"),n("ws-var"),Y(e,"[ws-hole]",r=>{if(!t.Contains(r.getAttribute("ws-hole")))for(r.removeAttribute("ws-hole");r.hasChildNodes();)r.removeChild(r.lastChild)}),Y(e,"[ws-replace]",r=>{t.Contains(r.getAttribute("ws-replace"))||r.parentNode.removeChild(r)}),Y(e,"[ws-on]",r=>{r.setAttribute("ws-on",ee(" ",_e(o=>t.Contains(S($t(o,[":"],1),1)),$t(r.getAttribute("ws-on"),[" "],1))))}),Y(e,"[ws-attr-holes]",r=>{let o=$t(r.getAttribute("ws-attr-holes"),[" "],1);for(let i=0,a=o.length-1;i<=a;i++){let s=S(o,i),l=new RegExp(xe(),"g"),c=r.getAttribute(s).replace(l,(h,w)=>t.Contains(w)?h:"");r.setAttribute(s,c)}})}function ou(e,t){Ko(t);let n=t.nodeName.toLowerCase(),r=e.querySelector("[ws-attr="+n+"]");if(k(r,null))console.warn("Filling non-existent attr hole",n);else{r.removeAttribute("ws-attr");for(let o=0,i=t.attributes.length-1;o<=i;o++){let a=t.attributes.item(o);a.name=="class"&&r.hasAttribute("class")?r.setAttribute("class",r.getAttribute("class")+" "+a.nodeValue):r.setAttribute(a.name,a.nodeValue)}}}function iu(e,t){let n=r=>{Y(e,"["+r+"]",o=>{let i,a=(i=null,[t.TryGetValue(o.getAttribute(r).toLowerCase(),{get:()=>i,set:s=>{i=s}}),i]);a[0]&&o.setAttribute(r,a[1])})};n("ws-hole"),n("ws-replace"),n("ws-attr"),n("ws-onafterrender"),n("ws-var"),Y(e,"[ws-on]",r=>{r.setAttribute("ws-on",ee(" ",kt(o=>{let i,a=$t(o,[":"],1),s=(i=null,[t.TryGetValue(S(a,1),{get:()=>i,set:l=>{i=l}}),i]);return s[0]?S(a,0)+":"+s[1]:o},$t(r.getAttribute("ws-on"),[" "],1))))}),Y(e,"[ws-attr-holes]",r=>{let o=$t(r.getAttribute("ws-attr-holes"),[" "],1);for(let i=0,a=o.length-1;i<=a;i++)(()=>{let s=S(o,i);return r.setAttribute(s,js((l,c)=>{let h=Zt(c);return l.replace(new RegExp("\\${"+h[0]+"}","ig"),"${"+h[1]+"}")},r.getAttribute(s),t))})()})}function to(e,t,n){for(;;)if(e.hasChildNodes())n=t.insertBefore(e.lastChild,n);else return null}function Ko(e){let t=e.attributes,n=[],r=[],o=[];for(let a=0,s=t.length-1;a<=s;a++){let l=t.item(a);if(Dn(l.nodeName,"ws-on")&&l.nodeName!="ws-onafterrender"&&l.nodeName!="ws-on")n.push(l.nodeName),r.push(_t(l.nodeName,p(5),null)+":"+l.nodeValue.toLowerCase());else if(!Dn(l.nodeName,"ws-")&&new RegExp(xe()).test(l.nodeValue)){let c=new RegExp(xe(),"g"),h=l.nodeValue.replace(c,(w,f)=>"${"+f.toLowerCase()+"}");l.nodeValue=h,o.push(l.nodeName)}}r.length!=0&&e.setAttribute("ws-on",ee(" ",r)),o.length!=0&&e.setAttribute("ws-attr-holes",ee(" ",o));let i=a=>{let s=e.getAttribute(a);s==null||e.setAttribute(a,s.toLowerCase())};i("ws-hole"),i("ws-replace"),i("ws-attr"),i("ws-onafterrender"),i("ws-var"),ot(a=>{e.removeAttribute(a)},n)}function _t(e,t,n){if(t==null)if(n!=null&&n.$==1){let r=n.$0;return r<0?"":e.slice(0,r+1)}else return"";else{if(n==null)return e.slice(t.$0);{let r=n.$0,o=t.$0;return r<0?"":e.slice(o,r+1)}}}var Hn=class e extends W{docNode_1;updates_1;elt;rvUpdates;static TreeNode(t,n){let r=Yn.Create(n),o=So(t),i=kt(l=>yo(l[1]),t.Attrs),a=mn(ve(),je,i),s=je(a,r.v);return new e(o,s,S(t.Els,0),r)}constructor(t,n,r,o){super(t,n),this.docNode_1=t,this.updates_1=n,this.elt=r,this.rvUpdates=o}},bn=K(e=>class{static{bn=e(this)}static AjaxProvider;static EndPoint;static{this.EndPoint=globalThis.location.origin,this.AjaxProvider=new Jn}});function Wt(e,t,n){let r;return r=null,[o=>{let i=()=>{n.UpdateMaybe(a=>{let s;return r=e(o),r!=null&&r.$==1&&!k(r.$0,a)&&(s=[r,r.$0],!0)?s[0]:null})};o.addEventListener("change",i),o.addEventListener("input",i),o.addEventListener("keypress",i)},o=>{let i=t(o);return a=>a==null?null:i(a.$0)},A(o=>{let i;return r!=null&&r.$==1&&k(r.$0,o)&&(i=r.$0,!0)?null:p(o)},n.View)]}function au(){return I.StringSet}function su(){return I.StringGet}function lu(){return I.StringListSet}function uu(){return I.StringListGet}function cu(){return I.DateTimeSetUnchecked}function pu(){return I.DateTimeGetUnchecked}function du(e,t,n){let r;return r=null,[o=>{o.addEventListener("change",()=>{n.UpdateMaybe(i=>{let a;return r=e(o),r!=null&&r.$==1&&r.$0!==i&&(a=[r,r.$0],!0)?a[0]:null})})},o=>{let i=t(o);return a=>a==null?null:i(a.$0)},A(o=>{let i;return r!=null&&r.$==1&&k(r.$0,o)&&(i=r.$0,!0)?null:p(o)},n.View)]}function hu(){return I.FileSetUnchecked}function fu(){return I.FileGetUnchecked}function mu(){return I.IntSetUnchecked}function gu(){return I.IntGetUnchecked}function vu(){return I.IntSetChecked}function wu(){return I.IntGetChecked}function bu(){return I.FloatSetUnchecked}function yu(){return I.FloatGetUnchecked}function xu(){return I.FloatSetChecked}function $u(){return I.FloatGetChecked}function Yo(){return I.StringApply}function Zo(){return I.FloatApplyUnchecked}function Jo(){return I.BoolCheckedApply}function Qo(){return I.DateTimeApplyUnchecked}function Xo(){return I.FileApplyUnchecked}function ti(){return I.StringListApply}function pe(e){return yl(Mu,e)}var bt=class e{get Input(){return this.$==1?this.$0:this.$==2?this.$0:this.$1}static Blank(t){return pt(e,{$:2,$0:t})}static Invalid(t){return pt(e,{$:1,$0:t})}static Valid(t,n){return pt(e,{$:0,$0:t,$1:n})}$;$0;$1},qn=class extends Error{reason;constructor(t){super("Promise rejected"),this.reason=t}},le=K(e=>class{static{le=e(this)}static defaultWrap;static wrapMap;static rhtml;static rtagName;static rxhtmlTag;static{this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>","gi"),this.rtagName=new RegExp("<([\\w:]+)"),this.rhtml=new RegExp("<|&#?\\w+;");let n=[1,"<table>","</table>"],r=Object.fromEntries([["option",[1,"<select multiple='multiple'>","</select>"]],["legend",[1,"<fieldset>","</fieldset>"]],["area",[1,"<map>","</map>"]],["param",[1,"<object>","</object>"]],["thead",n],["tbody",n],["tfoot",n],["tr",[2,"<table><tbody>","</tbody></table>"]],["col",[2,"<table><colgroup>","</colgoup></table>"]],["td",[3,"<table><tbody><tr>","</tr></tbody></table>"]]]);this.wrapMap=r,this.defaultWrap=[0,"",""]}});function ei(e,t){return{PreviousNodes:e,Top:t}}function ni(){return Me(new ft("New_3"))}function ri(e){let t=[];function n(i,a){for(;;)switch(i){case 0:if(a!=null&&a.$==0){let s=a.$1,l=a.$0;n(0,l),a=s}else if(a!=null&&a.$==1)a=a.$0,i=1;else if(a!=null&&a.$==2)a=a.$0.Current;else if(a!=null&&a.$==6){let s=a.$0.Holes;return(l=>c=>{ot(l,c)})(o)(s)}else return null;break;case 1:t.push(a),a=a.Children,i=0;break}}function r(i){return n(0,i)}function o(i){return n(1,i)}return r(e),Me(new ft("New_2",t))}function Me(e){return{$:0,$0:e}}function gr(e,t){return Me(Iu(e,t.$0))}function oi(e,t){return Me(Gu(e.$0,t.$0))}function vr(e){return re(e.$0)}function Cu(e,t){return Me(Bu(e.$0,t.$0))}function ku(){return si.UseAnimations}function Au(e){return Tu(lr(t=>t.$==1?p(t.$0):null,ui(e.$0)))}function Su(e){ot(t=>{t.$==0&&t.$0()},ui(e.$0))}function Tu(e){let t=fn(e),n=L(t);if(n===0)return _u();if(n===1)return S(t,0);{let r=tl(jt(i=>i.Duration,t)),o=kt(i=>Vu(r,i),t);return ii(r,i=>{ot(a=>{a.Compute(i)},o)})}}function Nu(e){return e.$0}function _u(e){return ii(0,()=>e)}function ii(e,t){return{Compute:t,Duration:e}}function Vu(e,t){let n=t.Compute,r=t.Duration,o=Hu(()=>t.Compute(t.Duration));return{Compute:i=>i>=r?o.f():n(i),Duration:e}}var ai=K(e=>class{static{ai=e(this)}static BatchUpdatesEnabled;static{this.BatchUpdatesEnabled=!0}}),jn=class e extends Z{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}get AsChoiceView(){return wr(this.fillWith)}constructor(t,n){super(),this.name=t,this.fillWith=n}},zn=class e extends Z{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,n){super(),this.name=t,this.fillWith=n}},Kn=class e extends Z{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,n){super(),this.name=t,this.fillWith=n}};function wr(e){return{$:0,$0:e}}function zt(e){return{$:1,$0:e}}var Yn=class e{c;s;v;static Create(t){let n;return n=null,n=e.New(t,null,()=>{let r;return r=n.s,r===null&&(r=Is(n.c()),n.s=r,ko(r,()=>{n.s=null})),r}),n}static New(t,n,r){return pt(e,{c:t,s:n,v:r})}},Zn=class extends q{d;GetEnumerator(){return D(jt(t=>t.V,this.d))}constructor(t){super(),this.d=t}},Jn=class extends q{Async(t,n,r,o,i){Zr(!0,t,n,r,o,i,()=>{Zr(!0,t,n,r,o,i,void 0)})}};function Eu(e){e.splice(0,L(e))}function Fu(e,t){let n=!0,r=0,o=L(t);for(;n&&r<o;)k(t[r],e)?n=!1:r=r+1;return!n}function Qn(){return H("The input sequence has an insufficient number of elements.")}function Pu(){return H("The input must be non-negative.")}function Mu(e){return e.match(new RegExp("\\s"))!==null}function Lu(e){let t=Date.parse(e);return isNaN(t)?null:p(t)}var si=K(e=>class{static{si=e(this)}static UseAnimations;static CubicInOut;static{this.CubicInOut=tr.Custom(n=>{let r=n*n;return 3*r-2*(r*n)}),this.UseAnimations=!0}});function li(e,t){return e.$==0?t:t.$==0?e:{$:2,$0:e,$1:t}}function ui(e){let t=[];function n(r){for(;;){if(r.$==1)return t.push(r.$0);if(r.$==2){let o=r.$1,i=r.$0;n(i),r=o}else return r.$==3?ot(o=>{t.push(o)},r.$0):null}}return n(e),t.slice(0)}function Du(e){let t=fn(e);return mn(ci(),li,t)}function ci(){return pi.Empty}function Tn(e){let t=[],n;for(var r in e)t.push.apply(t,e[r]);return t}var Xn=class extends q{d;GetEnumerator(){return D(jt(t=>t.K,this.d))}constructor(t){super(),this.d=t}},tr=class e extends q{transformTime;static Custom(t){return new e(t)}constructor(t){super(),this.transformTime=t}};function Iu(e,t){return new ft("New_2",_e(e,re(t)))}function Gu(e,t){let n=new ft("New_2",re(t));return n.ExceptWith(re(e)),n}function re(e){let t=ll(e.Count,void 0);return e.CopyTo(t,0),t}function Bu(e,t){let n=new ft("New_2",re(e));return n.IntersectWith(re(t)),n}var er=class extends Error{constructor(t,n){if(t=="New"&&(t="New_1",n="The given key was not present in the dictionary."),t=="New_1"){let r=n;super(r)}}};function Ru(e,t){let n;if(t!=null&&t.$==1){let r=t.$0[1],o=t.$0[0],i=[];for(n=o.nextSibling;n!==r;)i.push(n),n=n.nextSibling;return on(i)}else{let r=e.childNodes.length,o=e.childNodes,i=ul(r,a=>o[a]);return on(i)}}function Wu(e,t){let n=e.$0;return on(_e(r=>Mo(o=>r!==o,n),t.$0))}function Uu(e,t){ot(e,t.$0)}function Ou(e){let t=[];function n(r){for(;;)if(r!=null&&r.$==2)r=r.$0.Current;else{if(r!=null&&r.$==1)return t.push(r.$0.El);if(r==null)return null;if(r!=null&&r.$==5)return t.push(r.$0);if(r!=null&&r.$==4)return t.push(r.$0.Text);if(r!=null&&r.$==6){let o=r.$0.Els;return(i=>a=>{ot(i,a)})(i=>{i==null||i.constructor===Object?n(i):t.push(i)})(o)}else{let o=r.$1,i=r.$0;n(i),r=o}}}return n(e.Children),on(fn(t))}function on(e){return{$:0,$0:e}}function ue(e,t,n){let r=e(t);r[0](n),qe(r[1](n),r[2])}function Hu(e){return zu(!1,e,qu)}function qu(){let e=this.v();return this.c=!0,this.v=e,this.f=ju,e}function ju(){return this.v}var pi=K(e=>class{static{pi=e(this)}static Empty;static{this.Empty={$:0}}});function zu(e,t,n){return{c:e,v:t,f:n}}return vi(Ku);})();
