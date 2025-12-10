var wsbundle=(()=>{var xr=Object.defineProperty;var pa=Object.getOwnPropertyDescriptor;var ha=Object.getOwnPropertyNames;var ga=Object.prototype.hasOwnProperty;var wa=(e,t)=>{for(var r in t)xr(e,r,{get:t[r],enumerable:!0})},va=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of ha(t))!ga.call(e,o)&&o!==r&&xr(e,o,{get:()=>t[o],enumerable:!(n=pa(t,o))||n.enumerable});return e};var fa=e=>va(xr({},"__esModule",{value:!0}),e);var Kc={};wa(Kc,{Layout:()=>ma,Runtime:()=>Sn,Support:()=>xa});function ut(e,t){return Object.assign(Object.create(e.prototype),t)}var ba=Symbol("force");function K(e){var t;function r(){return t||(t=e(o=>t=o)),t}return new Proxy(function(){},{get(o,a){return a==ba&&r(),r()[a]},set(o,a,i){return r()[a]=i,!0},construct(o,a,i){return Reflect.construct(r(),a,i)}})}function yn(e,t){for(var r=0;r<t.length;r++){var n=t[r];e[n]===void 0&&delete e[n]}return e}function zt(e){return e===void 0?null:{$:1,$0:e}}function Yt(e,t,r){r?e[t]=r.$0:delete e[t]}function $n(e){return function(...t){return e(t)}}function Cn(e){return Object.defineProperty(e,"resizable",{enumerable:!1,writable:!1,configurable:!1,value:!0}),e}var An=globalThis.WebSharperRuntime||{ScriptBasePath:"./",ScriptSkipAssemblyDir:!1};globalThis.WebSharperRuntime=An;var Sn=An;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".section-link"),t=document.querySelectorAll(".section"),r={root:null,threshold:1,rootMargin:"0px"};function n(a){a.classList.add("active-link")}let o=new IntersectionObserver(function(a){a.forEach(i=>{i.isIntersecting&&e.forEach(l=>{let s=l.getAttribute("data-step"),d=i.target.getAttribute("id");s===d?n(l):l.classList.remove("active-link")})})},r);t.forEach(a=>{o.observe(a)})});document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("track"),t=document.getElementById("mini-inner"),r=document.getElementById("mini-prev"),n=document.getElementById("mini-next");if(!e||!t||!r||!n)return;let o=Array.from(t.children);if(o.length===0)return;let a=o[0].cloneNode(!0),i=o[o.length-1].cloneNode(!0);t.insertBefore(i,o[0]),t.appendChild(a);let l=1,s=!1,d=null,p=!1,v=_=>{t.style.transition=_?"transform 0.7s ease-out":"none",t.style.transform=`translateX(-${l*100}%)`},g=()=>{p||(p=!0,l+=1,v(!0))},f=()=>{p||(p=!0,l-=1,v(!0))};t.addEventListener("transitionend",()=>{let _=t.children.length,k=_-2;l===_-1?(l=1,v(!1)):l===0&&(l=k,v(!1)),requestAnimationFrame(()=>{p=!1})}),n.addEventListener("click",g),r.addEventListener("click",f);let y=()=>{S(),d=setInterval(()=>{s||g()},5e3)},S=()=>{d&&clearInterval(d)};e.addEventListener("mouseenter",()=>{s=!0}),e.addEventListener("mouseleave",()=>{s=!1}),v(!1),y()});function st(e){return"Dispose"in e}function ma(){$a();let e=Fn(),t=En(),r=Vn(),n=_n(),o=Fn(),a=En(),i=Vn(),l=_n(),s=Ga(),d=Da(),p=Tn(),v=Tn(),g=Ia(),f=La(),y=new ze("New_1"),S=(y.h.push(it(y.k,"togglemenu",()=>y.i,()=>{ka()})),y),_=(S.h.push(it(S.k,"toggletheme",()=>S.i,()=>{Ca()})),S),k=(_.h.push(it(_.k,"onkeydown",()=>_.i,et=>{Va(et)})),_),w=(k.h.push(it(k.k,"onstoppropagation",()=>k.i,et=>{Ea(et)})),k),c=(w.h.push(it(w.k,"closeonbackgroundclick",()=>w.i,et=>{Fa(et)})),w),h=(c.h.push(it(c.k,"accountbtnclick",()=>c.i,et=>{Pa(et)})),c),b=(h.h.push(it(h.k,"accountbtnkeydown",()=>h.i,()=>{})),h),m=(b.h.push(it(b.k,"login",()=>b.i,()=>{Ra()})),b),x=(m.h.push(it(m.k,"logout",()=>m.i,et=>{Ma(et)})),m),T=(x.h.push(new z("dropdownattr",f)),x),G=(T.h.push(new z("accountbtnaria",g)),T),V=(G.h.push(new z("avatarattr",v)),G),P=(V.h.push(new z("avatarattrhamburger",p)),V),E=(P.h.push(new z("iconattr",d)),P),B=(E.h.push(new z("skeletonattr",s)),E),J=(B.h.push(new Re("accountheadertext",_a())),B),M=(J.h.push(new z("headerattrd",l)),J),H=(M.h.push(new z("btnmanageattrd",i)),M),tt=(H.h.push(new z("btnloginattrd",a)),H),at=(tt.h.push(new z("btnlogoutattrd",o)),tt),dt=(at.h.push(new z("headerattr",n)),at),At=(dt.h.push(new z("btnmanageattr",r)),dt),ft=(At.h.push(new z("btnloginattr",t)),At),wt=(ft.h.push(new z("btnlogoutattr",e)),ft),St=io(wt.k,wt.h,[]);return wt.i=new we(St[1],Lo(St[0])),Ba(),R.Empty}function xa(){return Ka()}function ka(){let e=kr("navmenu"),t=kr("openIcon"),r=kr("closeIcon"),n=globalThis.document.body;e.classList.toggle("h-screen"),t.classList.toggle("hidden-open-icon"),r.classList.toggle("visible-close-icon"),n.classList.toggle("overflow-hidden")}function ya(e){let t=[],r;for(var n in e)t.push(e[n]);return t}function $a(){eo();let e=globalThis.localStorage.getItem("color-theme");e=="dark"||e==null&&Aa()?Nr(!0):Nr(!1)}function Ca(){Sa(ro()=="dark"?"light":"dark")}function eo(){let e=ro(),t=globalThis.document.querySelectorAll(".themed-iframe");for(let r=0,n=Na(t.length)-1;r<=n;r++){let o=t[r],a=o.getAttribute("data-src");if(a!=null){let i=new URL(a,globalThis.location.href);i.searchParams.set("theme",e),o.setAttribute("src",String(i))}}}function Aa(){return globalThis.matchMedia("(prefers-color-scheme: dark)").matches}function Nr(e){e?Tr().classList.add("dark"):Tr().classList.remove("dark")}function Sa(e){Nr(e=="dark"),globalThis.localStorage.setItem("color-theme",e),eo()}function ro(){return Tr().classList.contains("dark")?"dark":"light"}function Tr(){return globalThis.document.documentElement}function N(e,t){return no(e,t),e[t]}function L(e){return e.dims===2?e.length*e.length:e.length}function no(e,t){(t<0||t>=e.length)&&O("Index was outside the bounds of the array.")}function en(e,t,r){no(e,t),e[t]=r}function Na(e){let t=Ta(e);return t>2147483647?t-4294967296:t}function O(e){throw new Error(e)}function Ta(e){return(e<0?Math.ceil(e):Math.floor(e))>>>0}function Zt(e){return[e.K,e.V]}function Nn(e,t){let r=1+t-e;return r<=0?[]:Kl(r,n=>n+e)}var j=class{Equals(t){return this===t}GetHashCode(){return-1}},ze=class extends j{i;k;h;s;constructor(t){if(t=="New_1"){let r;super(),this.i=null,this.k=(r=ti(),String(r)),this.h=Cn([]),Yt(this,"s",null)}}};function _a(){return Vt.AccountHeaderText}function Va(e){e.Event.key=="Escape"&&Mt().Set(!1)}function Ea(e){e.Event.stopPropagation()}function Fa(){Mt().Get()&&Mt().Set(!1)}function Pa(){Mt().Set(!Mt().Get())}function Ma(){cr(U(()=>(Mt().Set(!1),W(Wa(!0),()=>q(null)))),null)}function La(){return Lt("hidden",A(e=>!e,Mt().View))}function Ia(){return lt("aria-expanded",A(e=>e?"true":"false",Mt().View))}function Tn(){return nt.Concat([lt("src",oo()),Lt("hidden",A(e=>!e,ao())),Lt("opacity-0",ge().View)])}function Da(){return nt.Concat([Lt("hidden",ao()),Lt("opacity-0",ge().View)])}function Ga(){return Lt("opacity-0 hidden",A(e=>!e,ge().View))}function _n(){return ar(ir())}function Vn(){return ar(ir())}function En(){return ar(A(e=>!e,ir()))}function Fn(){return ar(ir())}function Ba(){cr(U(()=>(ge().Set(!0),W(Oa(),()=>W(Qi(500),()=>(ge().Set(!1),pt()))))),null)}function Mt(){return Vt.isOpen}function oo(){return Vt.avatarSrcV}function ao(){return Vt.hasAvatarV}function ge(){return Vt.isLoading}function ar(e){return nt.Concat([Lt("hidden",A(t=>!t,e)),Lt("flex",e)])}function ir(){return Vt.isAuthedV}function Pn(){return Vt.userV}function za(){return Vt.displayNameV}function it(e,t,r,n){return new We(t,"",o=>a=>{let i=r();return i.SetAnchorRoot(o),n({Vars:i,Anchors:i,Target:o,Event:a})})}function io(e,t,r){let n=new ht("New_5"),o=new gt("New_3"),a=I(t);try{for(;a.MoveNext();){let i=a.Current,l=i.Name;o.SAdd(l),n.set_Item(l,i)}}finally{let i=a;typeof i=="object"&&st(i)&&a.Dispose()}return[Vo(t,sn(i=>{let l=i[0],s=i[1],d=i[2];if(o.Contains(l))return null;{let p=s===0?X.GetOrAddHoleFor(e,l,()=>{let v=d==null?null:u(d.$0),g=v==null?"":v.$0,f=F.Create_1(g);return new xt(l,f)}):s===1?X.GetOrAddHoleFor(e,l,()=>{let v=d==null?null:u(d.$0),g=v==null?0:v.$0,f=F.Create_1(g);return new Qe(l,f)}):s===2?X.GetOrAddHoleFor(e,l,()=>{let v=d==null?null:u(d.$0),g=v==null?!1:v.$0,f=F.Create_1(g);return new Xe(l,f)}):s===3?X.GetOrAddHoleFor(e,l,()=>{let v=d==null?null:u(d.$0),g=v==null?-864e13:v.$0,f=F.Create_1(g);return new tr(l,f)}):s===4?X.GetOrAddHoleFor(e,l,()=>new er(l,F.Create_1([]))):s===5?X.GetOrAddHoleFor(e,l,()=>new me(l,F.Create_1(u(globalThis.document.querySelector("[ws-dom="+l+"]"))))):s===6?X.GetOrAddHoleFor(e,l,()=>{let v=d==null?null:u(d.$0),g=v==null?[]:v.$0,f=F.Create_1(g);return new rr(l,f)}):O("Invalid kind for template Var type: "+String(s));return n.set_Item(l,p),u(p)}},r)),{$:0,$0:n}]}function Ra(){globalThis.location.href=Ua()}function Ua(){return Ha(globalThis.location.pathname+globalThis.location.search)}function Wa(e){return U(()=>tl(be(U(()=>W(ol(),()=>q(null))),t=>(console.error("AuthClient.Logout RPC failed",t),pt())),U(()=>(Jt().Set(null),e?be(U(()=>(globalThis.location.reload(),pt())),()=>pt()):pt()))))}function Oa(){return U(()=>{let e=Jt().Get();return e!=null&&e.$==1?q(u(e.$0)):(_r().Set(!0),vo(U(()=>be(U(()=>W(al(),t=>(Jt().Set(t),q(t)))),t=>(console.error("AuthClient.FetchMe RPC failed",t),Jt().Set(null),q(null)))),()=>{_r().Set(!1)}))})}function ja(){return Ee.UserView}function qa(){return Ee.IsAuthedView}function Ha(e){return"https://api.websharper.io/auth/github/start?returnUrl="+encodeURIComponent(e)}function Jt(){return Ee.userVar}function _r(){return Ee.isFetchingVar}var R=class e extends j{docNode;updates;static get Empty(){return e.Mk(null,fe())}static Mk(t,r){return new e(t,r)}static TextView(t){let r=As();return e.Mk(zl(r),A(n=>{Ss(r,n)},t))}static RunBefore(t,r){let n=globalThis.document.createTextNode("");t.parentNode.insertBefore(n,t),e.RunBetween(n,t,r)}static RunBetween(t,r,n){hn(r,n.docNode);let o=Ns(t,r,n.docNode);je(Rr()||Ur()?Qn(Hn(!1,o,n.docNode)):()=>{Kn(!1,o,n.docNode)},n.updates)}static RunInPlace(t,r,n){let o=Ts(r,n.docNode);je(Rr()||Ur()?Qn(Hn(t,o,n.docNode)):()=>{Kn(t,o,n.docNode)},n.updates)}static TextNode(t){return e.Mk(Rl(globalThis.document.createTextNode(t)),fe())}ReplaceInDom(t){let r=globalThis.document.createTextNode("");t.parentNode.replaceChild(r,t),e.RunBefore(r,this)}constructor(t,r){super(),this.docNode=t,this.updates=r}};function Ka(){let e=fi(),t=vi(),r=wi(),n=gi(),o=R.TextView(Ki()),a=R.TextView(Hi()),i=R.TextView(qi()),l=R.TextView(ji()),s=R.TextView(Oi()),d=R.TextView(Wi()),p=R.TextView(Ui()),v=R.TextView(Ri()),g=R.TextView(zi()),f=R.TextView(Bi()),y=R.TextView(Gi()),S=R.TextView(Di()),_=new ze("New_1"),k=(_.h.push(new Je("onafterrender","",()=>{cr(Vi(),null)})),_),w=(k.h.push(new rt("proname",S)),k),c=(w.h.push(new rt("freename",y)),w),h=(c.h.push(new rt("propriceamount",f)),c),b=(h.h.push(new rt("propricelabel",g)),h),m=(b.h.push(new rt("freepriceamount",v)),b),x=(m.h.push(new rt("freepricelabel",p)),m),T=(x.h.push(new rt("prototallabel",d)),x),G=(T.h.push(new rt("prototalamount",s)),T),V=(G.h.push(new rt("freetotallabel",l)),G),P=(V.h.push(new rt("freetotalamount",i)),V),E=(P.h.push(new rt("pronote",a)),P),B=(E.h.push(new rt("freenote",o)),E),J=(B.h.push(new z("billmonthattr",n)),B),M=(J.h.push(new z("billyearattr",r)),J),H=(M.h.push(new z("procheckoutattr",t)),M),tt=(H.h.push(new z("freecheckoutattr",e)),H),at=(tt.h.push(new xt("seatcount",lr())),tt),dt=(at.h.push(it(at.k,"onbillmonth",()=>at.i,$=>{bi($)})),at),At=(dt.h.push(it(dt.k,"onbillyear",()=>dt.i,$=>{mi($)})),dt),ft=(At.h.push(it(At.k,"onseatminus",()=>At.i,$=>{xi($)})),At),wt=(ft.h.push(it(ft.k,"onseatplus",()=>ft.i,$=>{ki($)})),ft),St=(wt.h.push(new xt("contactsubjectvar",F.Lens(Ft(),$=>$.subject,($,Nt)=>Ut(Nt,$.message,$.email,$.name,$.country)))),wt),et=(St.h.push(new xt("contactmessagevar",F.Lens(Ft(),$=>$.message,($,Nt)=>Ut($.subject,Nt,$.email,$.name,$.country)))),St),de=(et.h.push(new xt("contactemailvar",F.Lens(Ft(),$=>$.email,($,Nt)=>Ut($.subject,$.message,Nt,$.name,$.country)))),et),Bt=(de.h.push(new xt("contactnamevar",F.Lens(Ft(),$=>$.name,($,Nt)=>Ut($.subject,$.message,$.email,Nt,$.country)))),de),Kt=(Bt.h.push(new xt("contactcountryvar",F.Lens(Ft(),$=>$.country,($,Nt)=>Ut($.subject,$.message,$.email,$.name,Nt)))),Bt),mn=(Kt.h.push(new z("contactsendbuttonattr",hi())),Kt),Le=(mn.h.push(new Re("contactsendbuttontext",pi())),mn),mr=(Le.h.push(it(Le.k,"oncontactsendclick",()=>Le.i,$=>{yi($)})),Le),xn=io(mr.k,mr.h,[["seatcount",0,u("1")],["contactsubjectvar",0,u("WebSharper support")],["contactmessagevar",0,null],["contactemailvar",0,null],["contactnamevar",0,null],["contactcountryvar",0,u("United States")]]),kn=new we(xn[1],Yi(xn[0]));return(mr.i=kn,kn).Doc}var we=class extends j{doc;allVars;anchorRoot;SetAnchorRoot(t){this.anchorRoot=t}get Doc(){return this.doc}Hole(t){return this.allVars.Item(t)}constructor(t,r){super(),this.doc=r,this.allVars=t.$==0?t.$0:O("Should not happen"),this.anchorRoot=null}},Z=class extends j{ForTextView(){return console.warn("Content hole filled with attribute data",this.Name),null}AddAttribute(t,r){console.warn("Var hole filled with non-Var data",this.Name)}get AsChoiceView(){return console.warn("Attribute value hole filled with non-text data",this.Name),bn("")}ApplyVarHole(t){console.warn("Not a var hole: ",this.Name)}},z=class e extends Z{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Re=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return u(this.fillWith)}get AsChoiceView(){return Ht(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Vt=K(e=>class{static{Vt=e(this)}static AccountHeaderText;static displayNameV;static hasAvatarV;static avatarSrcV;static isLoading;static isAuthedV;static userV;static isOpen;static{this.isOpen=F.Create_1(!1),this.userV=ja(),this.isAuthedV=qa(),this.isLoading=F.Create_1(!0),this.avatarSrcV=A(r=>r!=null&&r.$==1?Pt(r.$0.avatarUrl)?"":r.$0.avatarUrl:"",Pn()),this.hasAvatarV=A(r=>r!="",oo()),this.displayNameV=A(r=>r==null||Pt(r.$0.login)?"Account":r.$0.login,Pn()),this.AccountHeaderText=za()}});function Xt(e,t){if(e===t)return 0;{let o=typeof e;switch(o=="boolean"||o=="number"||o=="bigint"||o=="string"?1:o=="object"?2:o=="function"?3:o=="symbol"?4:0){case 0:return typeof t>"u"?0:-1;case 1:return e<t?-1:1;case 2:if(e===null)return-1;if(t===null)return 1;if("CompareTo"in e)return e.CompareTo(t);if("CompareTo0"in e)return e.CompareTo0(t);if(e instanceof Array&&t instanceof Array)return Ya(e,t);if(e instanceof Date&&t instanceof Date)return Za(e,t);{let a=e,i=t,l=[0],s;for(var r in a)if((d=>a.hasOwnProperty(d)?i.hasOwnProperty(d)?(l[0]=Xt(a[d],i[d]),l[0]!==0):(l[0]=1,!0):!1)(r))break;if(l[0]===0){let d;for(var n in i)if((p=>i.hasOwnProperty(p)?!a.hasOwnProperty(p)&&(l[0]=-1,!0):!1)(n))break}return l[0]}break;case 3:return O("Cannot compare function values.");case 4:return O("Cannot compare symbol values.")}}}function C(e,t){if(e===t)return!0;{let o=typeof e;if(o=="object"){if(e==null||t===null||t===void 0||!C(typeof t,"object"))return!1;if("Equals"in e)return e.Equals(t);if("Equals"in t)return!1;if(e instanceof Array&&t instanceof Array)return Mn(e,t);if(e instanceof Date&&t instanceof Date)return Ja(e,t);{let a=e,i=t,l=[!0],s;for(var r in a)if((d=>(l[0]=!a.hasOwnProperty(d)||i.hasOwnProperty(d)&&C(a[d],i[d]),!l[0]))(r))break;if(l[0]){let d;for(var n in i)if((p=>(l[0]=!i.hasOwnProperty(p)||a.hasOwnProperty(p),!l[0]))(n))break}return l[0]}}else return o=="function"&&("$Func"in e?e.$Func===t.$Func&&e.$Target===t.$Target:"$Invokes"in e&&"$Invokes"in t&&Mn(e.$Invokes,t.$Invokes))}}function ve(e){let t=typeof e;return t=="function"?0:t=="boolean"?e?1:0:t=="number"?e:t=="string"?Be(e):t=="object"?e==null?0:e instanceof Array?Qa(e):Xa(e):t=="bigint"?Be(String(e)):t=="symbol"?Be(e.description):0}function Ya(e,t){let r,n;if(L(e)<L(t))return-1;if(L(e)>L(t))return 1;for(r=0,n=0;r===0&&n<L(e);)r=Xt(N(e,n),N(t,n)),n=n+1;return r}function Za(e,t){return Xt(e.getTime(),t.getTime())}function Mn(e,t){let r,n;if(L(e)===L(t)){for(r=!0,n=0;r&&n<L(e);)C(N(e,n),N(t,n))||(r=!1),n=n+1;return r}else return!1}function Ja(e,t){return e.getTime()===t.getTime()}function Be(e){let t;if(e===null)return 0;t=5381;for(let r=0,n=e.length-1;r<=n;r++)t=Ue(t,e[r].charCodeAt());return t}function Qa(e){let t=-34948909;for(let r=0,n=L(e)-1;r<=n;r++)t=Ue(t,ve(N(e,r)));return t}function Xa(e){if("GetHashCode"in e)return e.GetHashCode();{let r=[0],n;for(var t in e)if((o=>(r[0]=Ue(Ue(r[0],Be(o)),ve(e[o])),!1))(t))break;return r[0]}}function Ue(e,t){return(e<<5)+e+t}function ti(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]","g"),e=>{let t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}var We=class e extends Z{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.key,this.fillWith)}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}};function ei(e){let t={},r=I(e);try{for(;r.MoveNext();){let n=r.Current;t[n[0]]=n[1]}}finally{let n=r;typeof n=="object"&&st(n)&&r.Dispose()}return t}function kr(e){return globalThis.document.getElementById(e)}function Ie(e){return"$"+String(e)}var Oe=class extends j{};function Lt(e,t){return ur(t,r=>n=>n?gl(r,e):wl(r,e))}function lt(e,t){return ur(t,r=>n=>r.setAttribute(e,n))}function ri(e,t){return ur(t,r=>n=>n?r.setAttribute(e,""):r.removeAttribute(e))}function ni(e,t){return nt.A3(r=>{r.addEventListener(e,n=>t(r)(n),!1)})}function Ln(e){return nt.A4(e)}function oi(e){return oe(Yo(),e)}function ai(e){return oe(Zo(),e)}function ii(e){return oe(Jo(),e)}function li(e){return oe(Qo(),e)}function si(e){return oe(Xo(),e)}function ci(e){return oe(ta(),e)}function oe(e,t){let r=e(t);return mo(nt.A3(r[0]),di(r[1],r[2]))}function di(e,t){return ur(t,e)}function A(e,t){return Se(()=>ae(e,t()))}function fe(e){let t={s:Dt(e)};return()=>t}function Se(e){let t={c:null,o:e};return()=>{let r=t.c;if(r===null){r=t.o(),t.c=r;let n=r.s;return n!=null&&n.$==0?t.o=null:Co(r,()=>{t.c=null}),r}else return r}}function Et(e,t,r){return Se(()=>pr(e,t(),r()))}function lo(e,t,r,n){return Se(()=>Al(e,t(),r(),n()))}function je(e,t){function r(){Ml(t(),e,()=>{It().Fork(r)})}It().Fork(r)}function ui(e){return Se(()=>Ll(qt(t=>t(),e)))}function qe(e,t){return Se(()=>Il(e(),t()))}var nt=class e{static Concat(t){let r=hr(t);return gr(nn(),(n,o)=>mo(n,o),r)}static A1(t){return ut(e,{$:1,$0:t})}static A2(t,r){return ut(e,{$:2,$0:t,$1:r})}static HandlerImpl(t,r){return e.A3(n=>{n.addEventListener(t,o=>r(n)(o),!1)})}static Create(t,r){return e.A3(n=>{n.setAttribute(t,r)})}static A4(t){return ut(e,{$:4,$0:t})}static A3(t){return ut(e,{$:3,$0:t})}$;$0;$1};function pi(){return ln.ContactSendButtonText}function hi(){return ln.ContactSendButtonAttr}function gi(){let e=A(t=>t.$==1?"false":"true",Q().View);return nt.Concat([lt("data-active",e),lt("aria-pressed",e)])}function wi(){let e=A(t=>t.$==1?"true":"false",Q().View);return nt.Concat([lt("data-active",e),lt("aria-pressed",e)])}function vi(){return lt("href",Et((e,t)=>"./checkout?plan=pro&interval="+String(co(e))+"&seats="+String(sr(t)),Q().View,so()))}function fi(){return lt("href",A(e=>"./checkout?plan=freelancer&interval="+co(e)+"&seats=1",Q().View))}function bi(){Q().Set(Wl)}function mi(){Q().Set(_o)}function xi(){uo(-1,lr())}function ki(){uo(1,lr())}function yi(e){e.Event.preventDefault();let t=Ft().Get();po(t)?cr(U(()=>(He().Set(!0),vo(U(()=>W(Pi(t),r=>r?(alert("Message sent successfully!"),$i(),pt()):(alert("Failed to send message. Please try again later."),pt()))),()=>{He().Set(!1)}))),null):alert("Please fill in all required fields.")}function $i(){Ft().Set(Ut("WebSharper support","","","","United States"))}var F=K(e=>class extends j{static{F=e(this)}static Lens(r,n,o){let a=Ul(),i=A(n,r.View);return new class extends Oe{constructor(){super()}Get(){return n(r.Get())}Set(l){return r.Update(s=>o(s,l))}SetFinal(l){return this.Set(l)}Update(l){return r.Update(s=>o(s,l(n(s))))}UpdateMaybe(l){return r.UpdateMaybe(s=>{let d=l(n(s));return d==null?null:u(o(s,d.$0))})}get View(){return i}get Id(){return a}}}static Create_1(r){return new Mr(!1,{s:vr(r,[])},r)}});function Ft(){return $t.ContactFormVar}function lr(){return $t.SeatCountText}function Q(){return $t.intervalVar}function so(){return $t.SeatCount}function co(e){return e.$==1?"year":"month"}function sr(e){let n=Xt(999,e)===-1?999:e;return Xt(1,n)===1?1:n}function uo(e,t){let r=t.Get(),n=r==null?"":un(r),a=(s=>{let d,p=(d=0,[pn(s,{get:()=>d,set:v=>{d=v}}),d]);return p[0]?p[1]:1})(n)+e,i=sr(a),l=String(i);t.Set(l)}function po(e){return!Pt(e.message)&&!Pt(e.email)&&!Pt(e.name)&&Ni(e.email)}function He(){return $t.IsSendingVar}function Ci(){return $t.CanSendView}function Ke(){return $t.fallbackPro}function Vr(){return $t.fallbackFreelancer}function bt(){return $t.catalogVar}function In(e){if(e==null)return null;{let t=String(e);return rn(t)?u(t):null}}function Dn(e,t){let r=No(rn,t.Name);return r==null?e:r.$0}function De(e,t,r){let n=ho(t,r),o=n==null?null:u(n.$0.Amount),a=Ti(e,r);return o==null?a:o.$0}function Ai(e){return e.$==1?"/ seat / year":"/ seat / month"}function Si(e){return e.$==1?"/ year":"/ month"}function Gn(e){return e.$==1?"Total (yearly)":"Total (monthly)"}function Bn(e,t){let r=No(rn,t.Description);return r==null?e:r.$0}function zn(e,t,r){let n=_i(t,e),o=ho(n,r),a=o==null?n.Month:(o.$0,o),i=a==null?n.Year:(a.$0,a),l=i==null?null:u(i.$0.Currency.toUpperCase());return l==null?"USD":l.$0}function Ni(e){if(e==null)return!1;{let t=un(e);return t.indexOf("@")!=-1&&t.indexOf(".")!=-1}}function rn(e){return!Pt(e)}function ho(e,t){return t.$==1?e.Year:e.Month}function Ti(e,t){return t.$==1?e.Year.$0.Amount:e.Month.$0.Amount}function _i(e,t){let r=t.toLowerCase();return r=="pro"?e.Pro:r=="freelancer"?e.Freelancer:Ke()}function Ut(e,t,r,n,o){return{subject:e,message:t,email:r,name:n,country:o}}function Vi(){return U(()=>W(Ei(),e=>(e==null||Fi(e.$0),pt())))}function Ei(){return U(()=>{let e=Mi();return e==null?W(Li(),t=>{let r;return t!=null&&t.$==1&&L(t.$0)>0&&(r=t.$0,!0)?(Ii(r),q(u(r))):q(null)}):q(u(e.$0))})}function Fi(e){bt().Set(ns((t,r)=>{let n=String(r.code).toLowerCase(),o=String(r.interval).toLowerCase(),a=pe(r.unitAmountCents/100,(Pt(r.currency)?"usd":r.currency).toUpperCase()),i=In(r.name),l=r.description,s=l==null?null:In(l.$0);return n=="pro"?Dr(Rn(t.Pro,o,a,i,s),t.Freelancer):n=="freelancer"?Dr(t.Pro,Rn(t.Freelancer,o,a,i,s)):t},bt().Get(),e))}function Pi(e){return U(()=>{let t=new FormData;return t.append("subject",e.subject),t.append("message",e.message),t.append("email",e.email),t.append("name",e.name),t.append("country",e.country),be(U(()=>{let r;return W(Ds(globalThis.fetch("https://api.intellifactory.com/api/contact",(r={},r.method="POST",r.body=t,r))),n=>q(n.ok))}),()=>q(!1))})}function Mi(){try{let e=globalThis.sessionStorage.getItem("planprices");return e==null||Pt(e)?null:u(JSON.parse(e))}catch{return null}}function Li(){return U(()=>be(U(()=>W(il(),e=>q(u(e)))),()=>q(null)))}function Ii(e){try{let t=JSON.stringify(e);globalThis.sessionStorage.setItem("planprices",t)}catch{}}function Rn(e,t,r,n,o){let a=he(n==null?e.Name:u(n.$0),o==null?e.Description:u(o.$0),e.Month,e.Year);return t=="month"?he(a.Name,a.Description,u(r),a.Year):t=="year"?he(a.Name,a.Description,a.Month,u(r)):a}function Di(){return ct.ProName}function Gi(){return ct.FreeName}function Bi(){return ct.ProPriceAmount}function zi(){return ct.ProPriceLabel}function Ri(){return ct.FreePriceAmount}function Ui(){return ct.FreePriceLabel}function Wi(){return ct.ProTotalLabel}function Oi(){return ct.ProTotalAmount}function ji(){return ct.FreeTotalLabel}function qi(){return ct.FreeTotalAmount}function Hi(){return ct.ProNote}function Ki(){return ct.FreeNote}function u(e){return{$:1,$0:e}}var yr;var $r;function Yi(e){return e?ds("support",u("content"),()=>Pr(`\r
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
    `),e):Io("support",u("content"),()=>Pr(`\r
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
    `))}function Zi(){return yr||(yr=Ks(void 0,"$",[null,[1,[["$0","Value",Tt(),0]]]])())}function Ji(){return $r||($r=Js(void 0,[["code",Tt(),0],["name",Tt(),0],["description",Tt(),1],["isPerSeat",Tt(),0],["maxSeats",Tt(),1],["interval",Tt(),0],["currency",Tt(),0],["unitAmountCents",Tt(),0]])())}function U(e){return t=>{try{e()(t)}catch(r){t.k(wr(r))}}}function W(e,t){return Xi(r=>{e(Fe(n=>{if(n.$==0){let o=n.$0;It().Fork(()=>{try{t(o)(r)}catch(a){r.k(wr(a))}})}else It().Fork(()=>{r.k(n)})},r.ct))})}function q(e){return t=>{t.k(Pe(e))}}function cr(e,t){let r=go()[0],n=t==null?r:t.$0;n.c||e(Fe(o=>{o.$==1&&wo(o.$0)},n))}function Qi(e){return t=>{let r,n;r=void 0,n=void 0,r=setTimeout(()=>{n.Dispose(),It().Fork(()=>{t.k(Pe(null))})},e),n=fo(t.ct,()=>{clearTimeout(r),It().Fork(()=>{bo(t)})})}}function pt(){return ie.Zero}function Xi(e){return t=>{t.ct.c?bo(t):e(t)}}function tl(e,t){return W(e,()=>t)}function be(e,t){return r=>{e(Fe(n=>{if(n.$==0)r.k(Pe(n.$0));else if(n.$==1){let o=n.$0;try{t(o)(r)}catch{r.k(n)}}else r.k(n)},r.ct))}}function go(){return ie.defCTS}function wo(e){console.log("WebSharper: Uncaught asynchronous exception",e)}function vo(e,t){return r=>{e(Fe(n=>{try{t(),r.k(n)}catch(o){r.k(wr(o))}},r.ct))}}function fo(e,t){if(e===el())return{Dispose(){return null}};{let r=e.r.push(t)-1;return{Dispose(){return en(e.r,r,()=>{})}}}}function bo(e){e.k(Ro(new nr("New",e.ct)))}function It(){return ie.scheduler}function el(){return ie.noneCT}function dr(e){return t=>{let r=[!1],n=o=>{r[0]?O("A continuation provided by Async.FromContinuations was invoked multiple times"):(r[0]=!0,It().Fork(o))};e(o=>{n(()=>{t.k(Pe(o))})},o=>{n(()=>{t.k(wr(o))})},o=>{n(()=>{t.k(Ro(o))})})}}function rl(e,t){let r=go()[0],n=t==null?r:t.$0;It().Fork(()=>{n.c||e(Fe(o=>{o.$==1&&wo(o.$0)},n))})}function nl(){return ie.GetCT}function ol(){return new ye().Async("IRemotingContract/Logout",[])}function al(){return W(new ye().Async("IRemotingContract/Me",[]),e=>q(Zi()(e)))}function il(){return W(new ye().Async("IRemotingContract/GetPlanPrices",[]),e=>q(Ys(Ji)()(e)))}function ur(e,t){return nt.A1(new Ir(e,t))}function mo(e,t){if(e===null)return t;if(t===null)return e;{let r=nt.A2(e,t);return ll(r,Er(e)|Er(t)),r}}function nn(){return D.EmptyAttr}function ll(e,t){e.flags=t}function Er(e){return e!==null&&e.hasOwnProperty("flags")?e.flags:0}function on(e,t){let r=[],n=[];function o(l){for(;;)if(l!==null){if(l!=null&&l.$==1)return r.push(l.$0);if(l!=null&&l.$==2){let s=l.$1,d=l.$0;o(d),l=s}else return l!=null&&l.$==3?l.$0(e):l!=null&&l.$==4?n.push(l.$0):null}else return null}o(t);let a=r.slice(0);return Ho(e,Er(t),a,n.length===0?null:u(l=>{Yl(s=>{s(l)},n)}))}function xo(e){return Bl(t=>t.NChanged,fe(),qe,e.DynNodes)}function Cr(e){return Ho(e,0,[],null)}function sl(e){return(e.DynFlags&2)===2}function cl(e){return an(e,(t,r)=>t.NGetExitAnim(r))}function dl(e){return(e.DynFlags&1)===1}function ul(e){return an(e,(t,r)=>t.NGetEnterAnim(r))}function pl(e){return(e.DynFlags&4)===4}function hl(e){return an(e,(t,r)=>t.NGetChangeAnim(r))}function an(e,t){return fr(Ct(r=>t(r,e.DynElem),e.DynNodes))}function ko(e,t){ot(r=>{r.NSync(e)},t.DynNodes)}function gl(e,t){let r=yo(e);r==""?Fr(e,t):$o(t).test(r)||Fr(e,r+" "+t)}function wl(e,t){let r=$o(t),n=yo(e).replace(r,(o,a,i)=>a==""||i==""?"":" ");Fr(e,n)}function yo(e){return e instanceof SVGElement?e.getAttribute("class"):e.className}function Fr(e,t){e instanceof SVGElement?e.setAttribute("class",t):e.className=t}function $o(e){return new RegExp("(\\s+|^)"+e+"(?:\\s+"+e+")*(\\s+|$)","g")}function Pr(e){let t=globalThis.document.createElement("div");if(vl().test(e)){let i=function(l,s){for(;;){if(s===0)return l;{let d=s;l=l.lastChild,s=d-1}}},r=xl().exec(e),n=C(r,null)?"":N(r,1).toLowerCase(),o=fl()[n],a=o||bl();return t.innerHTML=a[1]+e.replace(ml(),"<$1></$2>")+a[2],(l=>{let s=l;return d=>i(s,d)})(t)(a[0])}else return t.appendChild(globalThis.document.createTextNode(e)),t}function vl(){return se.rhtml}function fl(){return se.wrapMap}function bl(){return se.defaultWrap}function ml(){return se.rxhtmlTag}function xl(){return se.rtagName}function kl(e,t,r){let n=e.querySelectorAll(t);for(let o=0,a=n.length-1;o<=a;o++)r(n[o])}function Un(e){let t=[];for(let r=0,n=e.childNodes.length-1;r<=n;r++)t.push(e.childNodes[r]);return t}function yl(e,t){let r=globalThis.document.querySelectorAll(e);for(let n=0,o=r.length-1;n<=o;n++)t(r[n])}function $l(e,t,r){let n;if(r.parentNode===e){let o=r.nextSibling,a=C(o,null)?null:o;n=t===a}else n=!1;n||e.insertBefore(r,t)}function Cl(e,t){t.parentNode===e&&e.removeChild(t)}function ae(e,t){let r=t.s;if(r!=null&&r.$==0)return{s:Dt(e(r.$0))};{let n={s:le([],[])};return kt(t,o=>{Ao(n,t,e(o))},n),n}}function Co(e,t){let r=e.s;r==null?t():r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,r.$1.push(t)):r.$0}function kt(e,t,r){let n=e.s;if(n==null)$e(r);else if(n!=null&&n.$==2){let o=n.$0;Ye(n.$1,r),t(o)}else if(n!=null&&n.$==3){let o=n.$1;n.$0.push(t),Ye(o,r)}else t(n.$0)}function Ao(e,t,r){let n=t.s;n!=null&&n.$==0?Ne(e,r):Te(e,r)}function pr(e,t,r){let n=t.s,o=r.s;if(n!=null&&n.$==0)return o!=null&&o.$==0?{s:Dt(e(n.$0,o.$0))}:Sl(e,n.$0,r);if(o!=null&&o.$==0)return Nl(e,o.$0,t);{let a={s:le([],[])},i=()=>{let l=a.s;if(!(l!=null&&l.$==0||l!=null&&l.$==2)){let s=Wt(t),d=Wt(r);s!=null&&s.$==1&&d!=null&&d.$==1&&(s.$0[1]&&d.$0[1]?Ne(a,e(s.$0[0],d.$0[0])):Te(a,e(s.$0[0],d.$0[0])))}};return kt(t,i,a),kt(r,i,a),a}}function Ye(e,t){if(e.push(t),e.length%20===0){let r=e.slice(0);Ec(e);for(let n=0,o=L(r)-1;n<=o;n++){let a=N(r,n);typeof a=="object"?(i=>{i.s&&e.push(i)})(a):(i=>{e.push(i)})(a)}}}function Ne(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$0;e.s=Dt(t);for(let o=0,a=L(n)-1;o<=a;o++)N(n,o)(t)}}function Te(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$1,o=r.$0;e.s=vr(t,n);for(let a=0,i=L(o)-1;a<=i;a++)N(o,a)(t)}}function Al(e,t,r,n){let o=t.s,a=r.s,i=n.s;if(o!=null&&o.$==0)return a!=null&&a.$==0?i!=null&&i.$==0?{s:Dt(e(o.$0,a.$0,i.$0))}:Tl(e,o.$0,a.$0,n):i!=null&&i.$==0?_l(e,o.$0,i.$0,r):Vl(e,o.$0,r,n);if(a!=null&&a.$==0)return i!=null&&i.$==0?El(e,a.$0,i.$0,t):Fl(e,a.$0,t,n);if(i!=null&&i.$==0)return Pl(e,i.$0,t,r);{let l={s:le([],[])},s=()=>{let d=l.s;if(!(d!=null&&d.$==0||d!=null&&d.$==2)){let p=Wt(t),v=Wt(r),g=Wt(n);p!=null&&p.$==1&&v!=null&&v.$==1&&g!=null&&g.$==1&&(p.$0[1]&&v.$0[1]&&g.$0[1]?Ne(l,e(p.$0[0],v.$0[0],g.$0[0])):Te(l,e(p.$0[0],v.$0[0],g.$0[0])))}};return kt(t,s,l),kt(r,s,l),kt(n,s,l),l}}function Sl(e,t,r){return ae(n=>e(t,n),r)}function Nl(e,t,r){return ae(n=>e(n,t),r)}function Wt(e){let t=e.s;return t!=null&&t.$==0?u([t.$0,!0]):t!=null&&t.$==2?u([t.$0,!1]):null}function Tl(e,t,r,n){return ae(o=>e(t,r,o),n)}function _l(e,t,r,n){return ae(o=>e(t,o,r),n)}function Vl(e,t,r,n){return pr((o,a)=>e(t,o,a),r,n)}function El(e,t,r,n){return ae(o=>e(o,t,r),n)}function Fl(e,t,r,n){return pr((o,a)=>e(o,t,a),r,n)}function Pl(e,t,r,n){return pr((o,a)=>e(o,a,t),r,n)}function Ml(e,t,r){let n=e.s;if(n==null)r();else if(n!=null&&n.$==2){let o=n.$0;n.$1.push(r),t(o)}else if(n!=null&&n.$==3){let o=n.$1;n.$0.push(t),o.push(r)}else t(n.$0)}function Ll(e){let t=te(e);if(t.length==0)return{s:Dt([])};{let r={s:le([],[])},n=[L(t)-1],o=()=>{if(n[0]===0){let a=Ct(i=>{let l=i.s;return l!=null&&l.$==0||l!=null&&l.$==2?l.$0:O("value not found by View.Sequence")},t);Mo(i=>{let l=i.s;return l!=null&&l.$==0},t)?Ne(r,a):Te(r,a)}else n[0]=n[0]-1};return ot(a=>{kt(a,o,r)},t),r}}function Il(e,t){let r=e.s,n=t.s;if(r!=null&&r.$==0)return n!=null&&n.$==0?{s:Dt(null)}:t;if(n!=null&&n.$==0)return e;{let o={s:le([],[])},a=()=>{let i=o.s;if(!(i!=null&&i.$==0||i!=null&&i.$==2)){let l=Wt(e),s=Wt(t);l!=null&&l.$==1&&s!=null&&s.$==1&&(l.$0[1]&&s.$0[1]?Ne(o,null):Te(o,null))}};return kt(e,a,o),kt(t,a,o),o}}function Dl(e){let t=e.s;if(t==null)return e;if(t!=null&&t.$==2){let r={s:vr(t.$0,[])};return Gl(e,r),r}else if(t!=null&&t.$==3){let r={s:le([],[])};return kt(e,n=>{Ao(r,e,n)},r),r}else return e}function Gl(e,t){let r=e.s;r==null?$e(t):r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,Ye(r.$1,t)):r.$0}function hr(e){if(e instanceof Array)return e;if(e instanceof re)return Eo(e);if(e===null)return[];{let t=[],r=I(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&st(n)&&r.Dispose()}}}function gr(e,t,r){let n=L(r);function o(a){return i=>{let l;switch(i<=0?0:i===1&&a>=0&&a<n?1:(l=i,2)){case 0:return e;case 1:return N(r,a);case 2:let s=i/2>>0;return t(o(a)(s),o(a+s)(i-s))}}}return o(0)(n)}function Bl(e,t,r,n){let o=L(n);function a(i){return l=>{let s;switch(l<=0?0:l===1&&i>=0&&i<o?1:(s=l,2)){case 0:return t;case 1:return e(N(n,i));case 2:let d=l/2>>0;return r(a(i)(d),a(i+d)(l-d))}}}return a(0)(o)}function zl(e){return{$:4,$0:e}}function So(e){return{$:6,$0:e}}function Rl(e){return{$:5,$0:e}}var ln=K(e=>class{static{ln=e(this)}static ContactSendButtonText;static ContactSendButtonAttr;static{this.ContactSendButtonAttr=ri("disabled",Et((r,n)=>!r||n,Ci(),He().View)),this.ContactSendButtonText=A(r=>r?"Sending...":"Send",He().View)}}),xt=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return u(this.fillWith.View)}AddAttribute(t,r){t(r)(oi(this.fillWith))}get AsChoiceView(){return Ht(A(String,this.fillWith.View))}ApplyVarHole(t){ce(Yo(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function No(e,t){let r;return t!=null&&t.$==1&&e(t.$0)&&(r=t.$0,!0)?t:null}function Ul(){return To(Ze()+1),"uid"+String(Ze())}function To(e){gn.counter=e}function Ze(){return gn.counter}function Qt(){return To(Ze()+1),Ze()}var $t=K(e=>class{static{$t=e(this)}static CanSendView;static IsSendingVar;static ContactFormVar;static SeatCount;static SeatCountText;static intervalVar;static catalogVar;static fallbackFreelancer;static fallbackPro;static{this.fallbackPro=he(u("Professional"),u("Assign GitHub usernames after purchase"),u(pe(250,"USD")),u(pe(2500,"USD"))),this.fallbackFreelancer=he(u("Freelancer"),u("Ideal for solo developers"),u(pe(30,"USD")),u(pe(300,"USD"))),this.catalogVar=F.Create_1(Dr(Ke(),Vr())),this.intervalVar=F.Create_1(_o),this.SeatCountText=F.Create_1("1"),this.SeatCount=A(r=>{let n,o=un(r??"");if(o=="")return 1;{let a=(n=0,[pn(o,{get:()=>n,set:i=>{n=i}}),n]);return a[0]?sr(a[1]):1}},lr().View),this.ContactFormVar=F.Create_1(Ut("WebSharper support","","","","United States")),this.IsSendingVar=F.Create_1(!1),this.CanSendView=A(po,Ft().View)}}),rt=class e extends Z{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Je=class e extends Z{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.key,this.fillWith)}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}},ct=K(e=>class{static{ct=e(this)}static FreeNote;static ProNote;static FreeTotalAmount;static ProTotalAmount;static FreeTotalLabel;static ProTotalLabel;static FreePriceLabel;static ProPriceLabel;static FreePriceAmount;static ProPriceAmount;static FreeName;static ProName;static{this.ProName=A(r=>Dn("Professional",r.Pro),bt().View),this.FreeName=A(r=>Dn("Freelancer",r.Freelancer),bt().View),this.ProPriceAmount=Et((r,n)=>Ie(De(Ke(),r.Pro,n)),bt().View,Q().View),this.FreePriceAmount=Et((r,n)=>Ie(De(Vr(),r.Freelancer,n)),bt().View,Q().View),this.ProPriceLabel=A(Ai,Q().View),this.FreePriceLabel=A(Si,Q().View),this.ProTotalLabel=A(Gn,Q().View),this.FreeTotalLabel=A(Gn,Q().View),this.ProTotalAmount=lo((r,n,o)=>{let a=sr(o);return Ie(De(Ke(),r.Pro,n)*a)},bt().View,Q().View,so()),this.FreeTotalAmount=Et((r,n)=>Ie(De(Vr(),r.Freelancer,n)),bt().View,Q().View),this.ProNote=Et((r,n)=>{let o=zn("pro",r,n);return Bn("Assign GitHub usernames after purchase",r.Pro)+". Prices in "+o+"."},bt().View,Q().View),this.FreeNote=Et((r,n)=>{let o=zn("freelancer",r,n);return Bn("Ideal for solo developers",r.Freelancer)+". Prices in "+o+"."},bt().View,Q().View)}}),Wl={$:0},_o={$:1},ht=class extends j{equals;hash;count;data;set_Item(t,r){this.set(t,r)}set(t,r){let n=this.hash(t),o=this.data[n];if(o==null)this.count=this.count+1,this.data[n]=new Array({K:t,V:r});else{let a=cn(i=>this.equals.apply(null,[Zt(i)[0],t]),o);a==null?(this.count=this.count+1,o.push({K:t,V:r})):o[a.$0]={K:t,V:r}}}TryGetValue(t,r){let n=this.data[this.hash(t)];if(n==null)return!1;{let o=Fo(a=>{let i=Zt(a);return this.equals.apply(null,[i[0],t])?u(i[1]):null},n);return o!=null&&o.$==1&&(r.set(o.$0),!0)}}ContainsKey(t){let r=this.data[this.hash(t)];return r==null?!1:Po(n=>this.equals.apply(null,[Zt(n)[0],t]),r)}GetEnumerator(){return zs(as(ya(this.data)))}Item(t){return this.get(t)}get Values(){return new Yr(this)}RemoveKey(t){return this.remove(t)}get Keys(){return new Qr(this)}get(t){let r=this.data[this.hash(t)];return r==null?Bs():is(n=>{let o=Zt(n);return this.equals.apply(null,[o[0],t])?u(o[1]):null},r)}remove(t){let r=this.hash(t),n=this.data[r];if(n==null)return!1;{let o=_e(a=>!this.equals.apply(null,[Zt(a)[0],t]),n);return L(o)<n.length&&(this.count=this.count-1,this.data[r]=o,!0)}}constructor(t,r,n,o){if(t=="New_5"&&(t="New_6",r=[],n=C,o=ve),t=="New_6"){let a=r,i=n,l=o;super(),this.equals=i,this.hash=l,this.count=0,this.data=[];let s=I(a);try{for(;s.MoveNext();){let d=s.Current;this.set(d.K,d.V)}}finally{let d=s;typeof d=="object"&&st(d)&&s.Dispose()}}}},gt=class e extends j{equals;hash;data;count;SAdd(t){return this.add(t)}Contains(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrContains(t,r)}add(t){let r=this.hash(t),n=this.data[r];return n==null?(this.data[r]=[t],this.count=this.count+1,!0):this.arrContains(t,n)?!1:(n.push(t),this.count=this.count+1,!0)}arrContains(t,r){let n=!0,o=0,a=r.length;for(;n&&o<a;)this.equals.apply(null,[r[o],t])?n=!1:o=o+1;return!n}GetEnumerator(){return I(Sr(this.data))}ExceptWith(t){let r=I(t);try{for(;r.MoveNext();)this.Remove(r.Current)}finally{let n=r;typeof n=="object"&&st(n)&&r.Dispose()}}get Count(){return this.count}IntersectWith(t){let r=new e("New_4",t,this.equals,this.hash),n=Sr(this.data);for(let o=0,a=n.length-1;o<=a;o++){let i=n[o];r.Contains(i)||this.Remove(i)}}Remove(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrRemove(t,r)&&(this.count=this.count-1,!0)}CopyTo(t,r){let n=Sr(this.data);for(let o=0,a=n.length-1;o<=a;o++)en(t,o+r,n[o])}arrRemove(t,r){let n=!0,o=0,a=r.length;for(;n&&o<a;)this.equals.apply(null,[r[o],t])?(r.splice(o,1),n=!1):o=o+1;return!n}constructor(t,r,n,o){t=="New_3"&&(t="New_4",r=[],n=C,o=ve);let a;if(t=="New_2"&&(a=r,t="New_4",r=a,n=C,o=ve),t=="New_4"){let i=r,l=n,s=o;super(),this.equals=l,this.hash=s,this.data=[],this.count=0;let d=I(i);try{for(;d.MoveNext();)this.add(d.Current)}finally{let p=d;typeof p=="object"&&st(p)&&d.Dispose()}}}};function Vo(e,t){return{GetEnumerator:()=>{let r=I(e),n=[!0];return new vt(r,null,o=>{if(o.s.MoveNext())return o.c=o.s.Current,!0;{let a=o.s;return C(a,null)||a.Dispose(),o.s=null,n[0]&&(n[0]=!1,o.s=I(t),o.s.MoveNext()?(o.c=o.s.Current,!0):(o.s.Dispose(),o.s=null,!1))}},o=>{let a=o.s;C(a,null)||a.Dispose()})}}}function Wn(e){return{GetEnumerator:()=>I(e())}}function Ol(e,t){return Hl(qt(e,t))}function qt(e,t){return{GetEnumerator:()=>{let r=I(t);return new vt(null,null,n=>r.MoveNext()&&(n.c=e(r.Current),!0),()=>{r.Dispose()})}}}function jl(e){let t=I(e);try{return t.MoveNext()?t.Current:Jr()}finally{let r=t;typeof r=="object"&&st(r)&&t.Dispose()}}function ql(e,t,r){let n=t,o=I(r);try{for(;o.MoveNext();)n=e(n,o.Current);return n}finally{let a=o;typeof a=="object"&&st(a)&&o.Dispose()}}function Hl(e){return{GetEnumerator:()=>{let t=I(e);function r(n){for(;;){let o=n.s;if(C(o,null))if(t.MoveNext())n.s=I(t.Current),n=n;else return t.Dispose(),!1;else{if(o.MoveNext())return n.c=o.Current,!0;n.Dispose(),n.s=null,n=n}}}return new vt(null,null,r,n=>{let o=n.s;C(o,null)||o.Dispose();let a=t;C(a,null)||a.Dispose()})}}}function Kl(e,t){return Zl(e,Jl(t))}function Yl(e,t){let r=I(t);try{for(;r.MoveNext();)e(r.Current)}finally{let n=r;typeof n=="object"&&st(n)&&r.Dispose()}}function Zl(e,t){return e<0&&Pc(),{GetEnumerator:()=>{let r=[I(t)];return new vt(0,null,n=>{if(n.s=n.s+1,n.s>e)return!1;{let o=r[0];return C(o,null)?Jr():o.MoveNext()?(n.c=o.Current,n.s===e&&(o.Dispose(),r[0]=null),!0):(o.Dispose(),r[0]=null,Jr())}},()=>{let n=r[0];C(n,null)||n.Dispose()})}}}function Jl(e){return{GetEnumerator:()=>new vt(0,null,t=>(t.c=e(t.s),t.s=t.s+1,!0),void 0)}}function Ql(e,t){return!Xl(r=>!e(r),t)}function Xl(e,t){let r=I(t);try{let n=!1;for(;!n&&r.MoveNext();)n=e(r.Current);return n}finally{let n=r;typeof n=="object"&&st(n)&&r.Dispose()}}function ts(e){let t=I(e);try{t.MoveNext()||rs();let r=t.Current;for(;t.MoveNext();){let n=t.Current;Xt(n,r)===1&&(r=n)}return r}finally{let r=t;typeof r=="object"&&st(r)&&t.Dispose()}}function es(e,t){return{GetEnumerator:()=>{let r=I(t),n=new gt("New_3");return new vt(null,null,o=>{let a,i;if(r.MoveNext()){for(a=r.Current,i=n.SAdd(e(a));!i&&r.MoveNext();)a=r.Current,i=n.SAdd(e(a));return i&&(o.c=a,!0)}else return!1},()=>{r.Dispose()})}}}function rs(){return O("The input sequence was empty.")}function sn(e,t){let r=[];for(let n=0,o=t.length-1;n<=o;n++){let a=e(t[n]);a==null||r.push(a.$0)}return r}function Eo(e){let t=[],r=e;for(;r.$!=0;)t.push(qs(r)),r=Hs(r);return t}function ns(e,t,r){let n=t;for(let o=0,a=r.length-1;o<=a;o++)n=e(n,r[o]);return n}function cn(e,t){let r=null,n=0;for(;n<t.length&&r==null;)e(t[n])&&(r=u(n)),n=n+1;return r}function Fo(e,t){let r=null,n=0;for(;n<t.length&&r==null;){let o=e(t[n]);o!=null&&o.$==1&&(r=o),n=n+1}return r}function os(e,t){let r=cn(e,t);return r==null?O("KeyNotFoundException"):r.$0}function ot(e,t){for(let r=0,n=t.length-1;r<=n;r++)e(t[r])}function Po(e,t){let r=!1,n=0,o=L(t);for(;!r&&n<o;)e(t[n])?r=!0:n=n+1;return r}function as(e){return Array.prototype.concat.apply([],te(e))}function _e(e,t){let r=[];for(let n=0,o=t.length-1;n<=o;n++)e(t[n])&&r.push(t[n]);return r}function Ct(e,t){let r=new Array(t.length);for(let n=0,o=t.length-1;n<=o;n++)r[n]=e(t[n]);return r}function dn(e,t,r){let n=r,o=t.length;for(let a=1,i=o;a<=i;a++)n=e(t[o-a],n);return n}function te(e){if(e instanceof Array)return e.slice();if(e instanceof re)return Eo(e);{let t=[],r=I(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&st(n)&&r.Dispose()}}}function is(e,t){let r=Fo(e,t);return r==null?O("KeyNotFoundException"):r.$0}function ls(e,t){return te(es(e,t))}function Mo(e,t){let r=!0,n=0,o=L(t);for(;r&&n<o;)e(t[n])?n=n+1:r=!1;return r}function ss(e,t){let r=new Array(e);for(let n=0,o=e-1;n<=o;n++)r[n]=t;return r}function cs(e,t){e<0&&O("Negative size given.");let r=new Array(e);for(let n=0,o=e-1;n<=o;n++)r[n]=t(n);return r}var X=K(e=>class extends j{static{X=e(this)}static init;id;vars;static initialized;static instances;static GetOrAddHoleFor(r,n,o){let a,i=X.GetHolesFor(r),l=(a=null,[i.TryGetValue(n,{get:()=>a,set:s=>{a=s}}),a]);if(l[0])return l[1];{let s=o();return i.set_Item(n,s),s}}static GetHolesFor(r){let n,o=(n=null,[X.initialized.TryGetValue(r,{get:()=>n,set:a=>{n=a}}),n]);if(o[0])return o[1];{let a=new ht("New_5");return X.initialized.set_Item(r,a),a}}static applyVarHole(r,n){n.ApplyVarHole(r)}InitInstance(r){let n=X.GetHolesFor(r),o=this.vars;for(let i=0,l=o.length-1;i<=l;i++)(()=>{let s,d=N(o,i),p=d[1],v=d[2],g=d[0];if(n.ContainsKey(g))return null;if(p===0){let f=v==null?null:u(v.$0),y=f==null?"":f.$0,S=F.Create_1(y);s=new xt(g,S)}else if(p===1){let f=v==null?null:u(v.$0),y=f==null?0:f.$0,S=F.Create_1(y);s=new Qe(g,S)}else if(p===2){let f=v==null?null:u(v.$0),y=f==null?!1:f.$0,S=F.Create_1(y);s=new Xe(g,S)}else if(p===3){let f=v==null?null:u(v.$0),y=f==null?-864e13:f.$0,S=F.Create_1(y);s=new tr(g,S)}else if(p===4){let f=v==null?null:u(v.$0),y=f==null?[]:f.$0,S=F.Create_1(y);s=new er(g,S)}else if(p===5){let f=v==null?null:u(v.$0),y=globalThis.document.querySelector("[ws-dom="+g+"]"),S=f==null?y:f.$0,_=u(S),k=F.Create_1(_);s=new me(g,k)}else if(p===6){let f=v==null?null:u(v.$0),y=f==null?[]:f.$0,S=F.Create_1(y);s=new rr(g,S)}else s=O("Invalid kind for template Var type: "+String(p));return n.set_Item(g,s)})();let a=new we({$:0,$0:n},R.Empty);return X.instances.set_Item(r,a),a}$preinit(r){let n=this.InitInstance(r),o=globalThis.document.querySelectorAll("[ws-var^='"+r+"::']");for(let a=0,i=o.length-1;a<=i;a++){let l=o[a],s=l.getAttribute("ws-var"),d=n.Hole(_t(s,u(r.length+2),null)),p=d.WithName(s);Bo().set_Item(p.Name,p),X.applyVarHole(l,d)}}$init(r){}$postinit(r){Lo([])}static{X.initialized=new ht("New_5"),X.instances=new ht("New_5")}}),Qe=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return u(A(String,this.fillWith.View))}AddAttribute(t,r){t(r)(ai(this.fillWith))}get AsChoiceView(){return Ht(A(String,this.fillWith.View))}ApplyVarHole(t){ce(Zo(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Xe=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return u(A(String,this.fillWith.View))}AddAttribute(t,r){t(r)(ii(this.fillWith))}get AsChoiceView(){return Ht(A(String,this.fillWith.View))}ApplyVarHole(t){ce(Jo(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},tr=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return u(A(t=>new Date(t).toLocaleString(),this.fillWith.View))}AddAttribute(t,r){t(r)(li(this.fillWith))}get AsChoiceView(){return Ht(A(t=>new Date(t).toLocaleString(),this.fillWith.View))}ApplyVarHole(t){ce(Qo(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},er=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return u(A(String,this.fillWith.View))}AddAttribute(t,r){t(r)(si(this.fillWith))}get AsChoiceView(){return Ht(A(String,this.fillWith.View))}ApplyVarHole(t){ce(Xo(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},me=class e extends Z{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}ApplyVarHole(t){}constructor(t,r){super(),this.name=t,this.fillWith=r}},rr=class e extends Z{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return u(A(t=>ee(",",t),this.fillWith.View))}AddAttribute(t,r){t(r)(ci(this.fillWith))}get AsChoiceView(){return Ht(A(String,this.fillWith.View))}ApplyVarHole(t){ce(ta(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function Lo(e){if(On()==null){Do(""),Ot("",null,globalThis.document.body,null);let t=Go(globalThis.document.body,e),r=globalThis.document.body;(o=>{R.RunInPlace(!0,r,o)})(t);let n=t;return us(u(n)),n}else return On().$0}function ds(e,t,r,n){return Do(""),Io(e,t,r),ps(e,t,n)}function Io(e,t,r){Ve(e).ContainsKey(t==null?"":t.$0)||Ot(e,t,r(),null)}function On(){return Gt.RenderedFullDocTemplate}function Do(e){hs()||(gs(!0),ws(globalThis.document.body,"")),xe().set_Item(e,Ve(""))}function Ot(e,t,r,n){let o=new gt("New_3");function a(g,f){for(;;)switch(g){case 0:if(f!==null){let c=f.nextSibling;C(f.nodeType,Node.TEXT_NODE)?ec(f):C(f.nodeType,Node.ELEMENT_NODE)&&l(f),f=c}else return null;break;case 1:let y=_t(f.nodeName,u(3),null).toLowerCase(),S=y.indexOf("."),_=S===-1?[e,y]:[_t(y,null,u(S-1)),_t(y,u(S+1),null)],k=_[1],w=_[0];if(w!=""&&!xe().ContainsKey(w))return Xn(k);{w==""&&n!=null&&n.$0(k);let c=xe().Item(w);if(c.ContainsKey(k)){let b=c.Item(k).cloneNode(!0),m=new gt("New_3"),x=new ht("New_5"),T=f.attributes;for(let V=0,P=T.length-1;V<=P;V++){let E=T.item(V).name.toLowerCase(),B=T.item(V).nodeValue,J=B==""?E:B.toLowerCase();x.set_Item(E,J),m.SAdd(E)||console.warn("Hole mapped twice",E)}for(let V=0,P=f.childNodes.length-1;V<=P;V++){let E=f.childNodes[V];C(E.nodeType,Node.ELEMENT_NODE)&&(m.SAdd(E.nodeName.toLowerCase())||console.warn("Hole filled twice",k))}let G=f.childNodes.length===1&&C(f.firstChild.nodeType,Node.TEXT_NODE);if(G){let V=rc(b,f.firstChild.textContent,k),P=(B=>J=>B.SAdd(J))(m);(B=>J=>{J!=null&&B(J.$0)})(B=>{P(B)})(V)}if(nc(b,m),!G)for(let V=0,P=f.childNodes.length-1;V<=P;V++){let E=f.childNodes[V];C(E.nodeType,Node.ELEMENT_NODE)&&(E.hasAttributes()?oc(b,E):i(b,E))}ac(b,x),to(b,f.parentNode,f),f.parentNode.removeChild(f);return}else return Xn(k)}break}}function i(g,f){let y=f.nodeName.toLowerCase(),S=(k,w)=>{if(y=="title"&&f.hasChildNodes()){let c=Pr(f.textContent);for(f.removeChild(f.firstChild);c.hasChildNodes();)f.appendChild(c.firstChild)}return l(f),to(f,k,w)};Y(g,"[ws-attr-holes]",k=>{let w=yt(k.getAttribute("ws-attr-holes"),[" "],1);for(let c=0,h=w.length-1;c<=h;c++){let b=N(w,c),m=new RegExp("\\${"+y+"}","ig"),x=k.getAttribute(b).replace(m,f.textContent);k.setAttribute(b,x)}});let _=g.querySelector("[ws-hole="+y+"]");if(C(_,null)){let k=g.querySelector("[ws-replace="+y+"]");if(C(k,null)){let w=g.querySelector("slot[name="+y+"]");return g.tagName.toLowerCase()=="template"?(S(w.parentNode,w),void w.parentNode.removeChild(w)):null}else{S(k.parentNode,k),k.parentNode.removeChild(k);return}}else{for(;_.hasChildNodes();)_.removeChild(_.lastChild);return _.removeAttribute("ws-hole"),(k=>{let w=k;return c=>S(w,c)})(_)(null)}}function l(g){g.hasAttribute("ws-preserve")||(Lr(g.nodeName.toLowerCase(),"ws-")?d(g):(Ko(g),s(g.firstChild)))}function s(g){return a(0,g)}function d(g){return a(1,g)}function p(g){for(;;){let f=g.querySelector("[ws-template]");if(C(f,null)){let y=g.querySelector("[ws-children-template]");if(C(y,null)){let S=g.querySelectorAll("template[id]");for(let k=1,w=S.length-1;k<=w;k++){let c=S[k];o.Contains(c)||(Ot(e,u(c.getAttribute("id")),c,null),o.SAdd(c))}let _=g.querySelectorAll("template[name]");for(let k=1,w=_.length-1;k<=w;k++){let c=_[k];o.Contains(c)||(Ot(e,u(c.getAttribute("name")),c,null),o.SAdd(c))}return null}else{let S=y.getAttribute("ws-children-template");y.removeAttribute("ws-children-template"),Ot(e,u(S),y,null),g=g}}else{let y=f.getAttribute("ws-template");vs(e,u(y),f)(null),g=g}}}let v=(t==null?"":t.$0).toLowerCase();Ve(e).set_Item(v,r),r.hasChildNodes()&&(p(r),s(r.firstChild))}function Go(e,t){let r,n=fs(e,Vo(t,Bo().Values)),o=n[1],a=n[0],i=a.Els;return!C(i,null)&&i.length===1&&N(i,0)instanceof Node&&C(N(i,0).nodeType,Node.ELEMENT_NODE)&&(r=N(i,0),!0)?Wr.TreeNode(a,o):R.Mk(So(a),o)}function us(e){Gt.RenderedFullDocTemplate=e}function ps(e,t,r){let n,o=(n=null,[Ve(e).TryGetValue(t==null?"":t.$0,{get:()=>n,set:a=>{n=a}}),n]);return o[0]?Go(o[1].cloneNode(!0),r):(console.warn("Local template doesn't exist",t),R.Empty)}function Ve(e){let t,r=(t=null,[xe().TryGetValue(e,{get:()=>t,set:n=>{t=n}}),t]);if(r[0])return r[1];{let n=new ht("New_5");return xe().set_Item(e,n),n}}function hs(){return Gt.LocalTemplatesLoaded}function gs(e){Gt.LocalTemplatesLoaded=e}function ws(e,t){let r=Ve(t),n=new ht("New_5"),o=e.querySelectorAll("[ws-template]");for(let p=0,v=o.length-1;p<=v;p++){let g=o[p],f=g.getAttribute("ws-template").toLowerCase();g.removeAttribute("ws-template"),n.set_Item(f,zo(g))}let a=e.querySelectorAll("[ws-children-template]");for(let p=0,v=a.length-1;p<=v;p++){let g=a[p],f=g.getAttribute("ws-children-template").toLowerCase();g.removeAttribute("ws-children-template"),n.set_Item(f,bs(g))}let i=e.querySelectorAll("template[id]");for(let p=0,v=i.length-1;p<=v;p++){let g=i[p];n.set_Item(g.getAttribute("id").toLowerCase(),jn(g))}let l=e.querySelectorAll("template[name]");for(let p=0,v=l.length-1;p<=v;p++){let g=l[p];n.set_Item(g.getAttribute("name").toLowerCase(),jn(g))}let s=new gt("New_3");function d(p){if(!r.ContainsKey(p)){let v,g=(v=null,[n.TryGetValue(p,{get:()=>v,set:f=>{v=f}}),v]);g[0]?(s.SAdd(p),n.RemoveKey(p),Ot(t,u(p),g[1],u(d))):console.warn(s.Contains(p)?"Encountered loop when instantiating "+p:"Local template does not exist: "+p)}}for(;n.count>0;)d(jl(n.Keys))}function xe(){return Gt.LoadedTemplates}function Y(e,t,r){kl(e,t,n=>{n.closest("[ws-preserve]")==null&&r(n)})}function vs(e,t,r){let n=zo(r);return o=>{Ot(e,t,n,o)}}function fs(e,t){let r,n=[],o=[],a=[],i=[],l=new ht("New_5"),s=I(t);try{for(;s.MoveNext();){let c=s.Current;l.set_Item(c.Name,c)}}finally{let c=s;typeof c=="object"&&st(c)&&s.Dispose()}let d=Un(e),p=(c,h)=>{let b=on(c,h);o.push(xo(b)),a.push([c,b]);let m=zt(b.OnAfterRender);if(m==null)return null;{let x=m.$0;i.push(()=>{x(c)});return}},v=c=>{let h,b=(h=null,[l.TryGetValue(c,{get:()=>h,set:m=>{h=m}}),h]);if(b[0]){let m=b[1];if(m instanceof rt)return u(m.Value);if(m instanceof jr)return u(R.TextNode(m.Value));{let x=m.ForTextView();return x==null?null:u(R.TextView(x.$0))}}else return null};Y(e,"[ws-hole]",c=>{let h=c.getAttribute("ws-hole");for(c.removeAttribute("ws-hole");c.hasChildNodes();)c.removeChild(c.lastChild);let b=v(h);if(b!=null&&b.$==1){let m=b.$0;Gr(c,m.docNode),n.push(jt.New(Cr(c),m.docNode,null,c,Qt(),null)),o.push(m.updates)}}),Y(e,"[ws-replace]",c=>{let h=v(c.getAttribute("ws-replace"));if(h!=null&&h.$==1){let b=h.$0,m=c.parentNode,x=globalThis.document.createTextNode("");m.replaceChild(x,c);let T=Ps(x,b.docNode);d=Un(e);let G=cn(V=>c===V,d);G==null||en(d,G.$0,b.docNode),n.push(jt.New(Cr(m),b.docNode,u([T,x]),m,Qt(),null)),o.push(b.updates)}});let g=!1;Y(e,"slot",c=>{let h=c.getAttribute("name"),b=h==""||h==null?"default":h.toLowerCase();if(!(g&&b=="default"||!C(e.parentElement,null))){for(;c.hasChildNodes();)c.removeChild(c.lastChild);b=="default"&&(g=!0);let m=v(b);if(m!=null&&m.$==1){let x=m.$0;Gr(c,x.docNode),n.push(jt.New(Cr(c),x.docNode,null,c,Qt(),null)),o.push(x.updates)}}}),Y(e,"[ws-attr]",c=>{let h,b=c.getAttribute("ws-attr");c.removeAttribute("ws-attr");let m=(h=null,[l.TryGetValue(b,{get:()=>h,set:x=>{h=x}}),h]);if(m[0]){let x=m[1];x instanceof z?p(c,x.Value):console.warn("Attribute hole filled with non-attribute data",b)}}),Y(e,"[ws-on]",c=>{p(c,nt.Concat(sn(h=>{let b,m=yt(h,[":"],1),x=(b=null,[l.TryGetValue(N(m,1),{get:()=>b,set:T=>{b=T}}),b]);if(x[0]){let T=x[1];return T instanceof qr?u(ni(N(m,0),T.Value)):T instanceof We?u(nt.HandlerImpl(N(m,0),T.Value)):(console.warn("Event hole on"+N(m,0)+" filled with non-event data",N(m,1)),null)}else return null},yt(c.getAttribute("ws-on"),[" "],1)))),c.removeAttribute("ws-on")}),Y(e,"[ws-onafterrender]",c=>{let h,b=c.getAttribute("ws-onafterrender"),m=(h=null,[l.TryGetValue(b,{get:()=>h,set:x=>{h=x}}),h]);if(m[0]){let x=m[1];x instanceof Hr||x instanceof Je?(c.removeAttribute("ws-onafterrender"),p(c,Ln(x.Value))):console.warn("onafterrender hole filled with non-onafterrender data",b)}}),Y(e,"[ws-var]",c=>{let h,b=c.getAttribute("ws-var");c.removeAttribute("ws-var");let m=(h=null,[l.TryGetValue(b,{get:()=>h,set:x=>{h=x}}),h]);m[0]&&m[1].AddAttribute(x=>T=>p(x,T),c)});let f=()=>{ms("[ws-dom]",c=>{let h,b,m,x=(h=null,[l.TryGetValue(c.getAttribute("ws-dom").toLowerCase(),{get:()=>h,set:T=>{h=T}}),h]);if(x[0]){let T=x[1];if(T instanceof me){let G=T.Value;c.removeAttribute("ws-dom"),b=c;let V=new MutationObserver((P,E)=>{ot(B=>{B.removedNodes.forEach($n(J=>J[0]===b&&B.addedNodes.length!==1?(G.SetFinal(null),E.disconnect()):null),null)},P)});c.parentElement!==null&&V.observe(c.parentElement,(m={},m.childList=!0,m)),G.Set(u(c)),je(P=>{if(P!=null&&P.$==1){let E=P.$0;if(b!==E){let B=[E];b.replaceWith.apply(b,B),b=E}}else b.remove(),V.disconnect()},G.View)}}})};Y(e,"[ws-attr-holes]",c=>{let h=new RegExp(ke(),"g"),b=yt(c.getAttribute("ws-attr-holes"),[" "],1);c.removeAttribute("ws-attr-holes");for(let m=0,x=b.length-1;m<=x;m++)(()=>{let T,G=N(b,m),V=c.getAttribute(G),P=null,E=0,B=[];for(;P=h.exec(V),P!==null;){let H=_t(V,u(E),u(h.lastIndex-N(P,0).length-1));E=h.lastIndex,B.push([H,N(P,1)])}let J=_t(V,u(E),null);h.lastIndex=0;let M=dn((H,tt)=>(at=>{let dt=at[0],At=at[1];return ft=>{let wt,St=ft[0],et=ft[1],de=(wt=null,[l.TryGetValue(At,{get:()=>wt,set:Kt=>{wt=Kt}}),wt]),Bt=de[0]?de[1].AsChoiceView:bn("");return Bt.$==1?[dt,re.Cons(St==""?Bt.$0:A(Kt=>Kt+St,Bt.$0),et)]:[dt+Bt.$0+St,et]}})(H)(tt),B,[J,re.Empty]);if(M[1].$==1)if(M[1].$1.$==1)if(M[1].$1.$1.$==1)if(M[1].$1.$1.$1.$==0){let H=M[0];T=lt(G,lo((tt,at,dt)=>H+tt+at+dt,M[1].$0,M[1].$1.$0,M[1].$1.$1.$0))}else{let H=M[0];T=lt(G,A(tt=>H+ee("",tt),ui(M[1])))}else{let H=M[0];T=lt(G,Et((tt,at)=>H+tt+at,M[1].$0,M[1].$1.$0))}else if(M[0]=="")T=lt(G,M[1].$0);else{let H=M[0];T=lt(G,A(tt=>H+tt,M[1].$0))}else T=nt.Create(G,M[0]);return p(c,T)})()});let y=d,S=i.length==0?u(()=>{f()}):u(c=>{f(),ot(h=>{h(c)},i)}),_=!C(d,null)&&d.length===1&&N(d,0)instanceof Node&&N(d,0)instanceof Element&&(r=N(d,0),!0)?u(r):null,k={Els:y,Dirty:!0,Holes:n,Attrs:a,Render:S?S.$0:void 0,El:_?_.$0:void 0};return[yn(k,["Render","El"]),gr(fe(),qe,o)]}function Bo(){return Gt.GlobalHoles}function zo(e){e.removeAttribute("ws-template");let t=e.getAttribute("ws-replace");if(t!=null){e.removeAttribute("ws-replace");let n=e.parentNode;if(!C(n,null)){let o=globalThis.document.createElement(e.tagName);o.setAttribute("ws-replace",t),n.replaceChild(o,e)}}let r=globalThis.document.createElement("div");return r.appendChild(e),r}function bs(e){let t=globalThis.document.createElement("div");for(;e.hasChildNodes();)t.appendChild(e.firstChild);return t}function jn(e){let t=globalThis.document.createElement("div"),r=e.content;for(let n=0,o=r.childNodes.length-1;n<=o;n++)t.appendChild(r.childNodes[n].cloneNode(!0));return t}function ke(){return Gt.TextHoleRE}function ms(e,t){yl(e,r=>{r.closest("[ws-preserve]")==null&&t(r)})}var Mr=class extends Oe{isConst;current;snap;view;id;get View(){return this.view}Set(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):($e(this.snap),this.current=t,this.snap={s:vr(t,[])})}Get(){return this.current}Update(t){this.Set(t(this.Get()))}UpdateMaybe(t){let r=t(this.Get());r!=null&&r.$==1&&this.Set(r.$0)}SetFinal(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):($e(this.snap),this.isConst=!0,this.current=t,this.snap={s:Dt(t)})}constructor(t,r,n){super(),this.isConst=t,this.current=n,this.snap=r,this.view=()=>this.snap,this.id=Qt()}},Ee=K(e=>class{static{Ee=e(this)}static IsFetchingView;static IsAuthedView;static UserView;static isFetchingVar;static userVar;static API;static{this.API="https://api.websharper.io",Rs("https://api.websharper.io"),this.userVar=F.Create_1(null),this.isFetchingVar=F.Create_1(!1),this.UserView=Jt().View,this.IsAuthedView=A(r=>r!=null,Jt().View),this.IsFetchingView=_r().View}});function Pt(e){return e==null||new RegExp("^\\s*$").test(e)}function un(e){return e.replace(new RegExp("^\\s+"),"").replace(new RegExp("\\s+$"),"")}function ee(e,t){return te(t).join(e)}function yt(e,t,r){return ks(e,new RegExp("["+ys(t.join(""))+"]"),r)}function Lr(e,t){return e.substring(0,t.length)==t}function xs(e,t){return Ql(e,$s(t))}function ks(e,t,r){return r===1?_e(n=>n!=="",qn(e,t)):qn(e,t)}function ys(e){return e.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]","g"),"\\$&")}function $s(e){return e??""}function qn(e,t){return e.split(t)}function Fe(e,t){return{k:e,ct:t}}function wr(e){return{$:1,$0:e}}function Pe(e){return{$:0,$0:e}}function Ro(e){return{$:2,$0:e}}var ye=class extends j{AsyncBase(t,r){return U(()=>{let n=Os(this.Headers),o=Ws(r);return W(nl(),a=>W(dr((i,l,s)=>{let d=[!0],p=fo(a,()=>{d[0]&&(d[0]=!1,s(new nr("New",a)))});return Us().Async(this.EndPoint+"/"+t,n,o,v=>{d[0]&&(d[0]=!1,p.Dispose(),i(v))},v=>{d[0]&&(d[0]=!1,p.Dispose(),l(v))})}),i=>q(JSON.parse(i))))})}get EndPoint(){return js()}get Headers(){return[]}Async(t,r){return this.AsyncBase(t,r)}};function Cs(e,t){return{c:e,r:t}}var Ir=class extends j{push;value;dirty;updates;get NChanged(){return this.updates}NGetExitAnim(t){return Ar()}NGetEnterAnim(t){return Ar()}NGetChangeAnim(t){return Ar()}NSync(t){this.dirty&&(this.push(t)(this.value),this.dirty=!1)}constructor(t,r){super(),this.push=r,this.value=void 0,this.dirty=!1,this.updates=A(n=>{this.value=n,this.dirty=!0},t)}};function $e(e){let t,r=e.s;if(!(r==null||(!(r!=null&&r.$==2||r!=null&&r.$==3)||(t=r.$1,!1)))){e.s=null;for(let n=0,o=L(t)-1;n<=o;n++){let a=N(t,n);typeof a=="object"?(i=>{$e(i)})(a):a()}}}var re=class e{static Cons(t,r){return ut(e,{$:1,$0:t,$1:r})}static Empty=ut(e,{$:0});GetEnumerator(){return new vt(this,null,t=>{let r=t.s;if(r.$==0)return!1;{let n=r.$1;return t.c=r.$0,t.s=n,!0}},void 0)}$;$0;$1},ie=K(e=>class{static{ie=e(this)}static GetCT;static Zero;static defCTS;static scheduler;static noneCT;static{this.noneCT=Cs(!1,[]),this.scheduler=new Br,this.defCTS=[new zr],this.Zero=q(),this.GetCT=r=>{r.k(Pe(r.ct))}}}),jt=class e{Attr;Children;Delimiters;El;ElKey;Render;Equals(t){return this.ElKey===t.ElKey}GetHashCode(){return this.ElKey}static New(t,r,n,o,a,i){let l={Attr:t,Children:r,El:o,ElKey:a},s=(Yt(l,"Delimiters",n),Yt(l,"Render",i),l);return ut(e,s)}};function Dt(e){return{$:0,$0:e}}function vr(e,t){return{$:2,$0:e,$1:t}}function le(e,t){return{$:3,$0:e,$1:t}}function he(e,t,r,n){return{Name:e,Description:t,Month:r,Year:n}}function Dr(e,t){return{Pro:e,Freelancer:t}}function pn(e,t){return Qs(e,-2147483648,2147483647,t)}function pe(e,t){return{Amount:e,Currency:t}}function As(){return{Text:globalThis.document.createTextNode(""),Dirty:!1,Value:""}}function Ss(e,t){e.Value=t,e.Dirty=!0}function hn(e,t){Ce(e.parentNode,t,e)}function Ns(e,t,r){return ea(ra(),_s(e,t,nn(),r))}function Hn(e,t,r){return Rr()?U(()=>{let n=na(r),o=Fs(t,n),a=Es(t,n);return W(Jn(Xs(o,Vs(t,n))),()=>W(Yn(e,t),()=>W(Jn(a),()=>(t.PreviousNodes=n,q(null)))))}):Yn(e,t)}function Kn(e,t,r){let n=na(r);Ae(e,t.Top),t.PreviousNodes=n}function Ts(e,t){return ea(ra(),Ms(e,nn(),t))}function Ce(e,t,r){for(;;){if(t!=null&&t.$==1)return Ge(e,t.$0.El,r);if(t!=null&&t.$==2){let n=t.$0;n.Dirty=!1,t=n.Current}else{if(t==null)return r;if(t!=null&&t.$==4)return Ge(e,t.$0.Text,r);if(t!=null&&t.$==5)return Ge(e,t.$0,r);if(t!=null&&t.$==6)return dn((n,o)=>(a=>i=>l=>i==null||i.constructor===Object?Ce(a,i,l):Ge(a,i,l))(e)(n)(o),t.$0.Els,r);{let n=t.$1;t=t.$0,r=Ce(e,n,r)}}}}function _s(e,t,r,n){let o=e.parentNode;hn(t,n);let a=on(o,r);return jt.New(a,n,u([e,t]),o,Qt(),zt(a.OnAfterRender))}function Yn(e,t){if(Ur()){let r=n=>{requestAnimationFrame(()=>{Ae(e,t.Top),n()})};return dr((n,o,a)=>r.apply(null,[n,o,a]))}else return Ae(e,t.Top),q(null)}function Vs(e,t){return fr(Ct(r=>cl(r.Attr),fn(oa(t,vn(r=>sl(r.Attr),e.PreviousNodes)))))}function Es(e,t){return fr(Ct(r=>ul(r.Attr),fn(oa(e.PreviousNodes,vn(r=>dl(r.Attr),t)))))}function Fs(e,t){let r=o=>pl(o.Attr),n=o=>vn(r,o);return fr(Ct(o=>hl(o.Attr),fn($c(n(e.PreviousNodes),n(t)))))}function Ae(e,t){e||Ls(t),Uo(t.Children),Wo(t)}function Gr(e,t){Ce(e,t,null)}function Ps(e,t){let r=e.parentNode,n=globalThis.document.createTextNode("");return r.insertBefore(n,e),hn(e,t),n}function Ms(e,t,r){Gr(e,r);let n=on(e,t);return jt.New(n,r,null,e,Qt(),zt(n.OnAfterRender))}function Ge(e,t,r){return $l(e,r,t),t}function Ls(e){function t(r){function n(o){for(;;)if(o!=null&&o.$==0){let a=o.$1,i=o.$0;if(n(i))return!0;o=a}else if(o!=null&&o.$==2){let a=o.$0;if(a.Dirty)return!0;o=a.Current}else if(o!=null&&o.$==6){let a=o.$0;return a.Dirty||Po(t,a.Holes)}else return!1}return n(r.Children)}ko(e.El,e.Attr),t(e)&&Is(e)}function Uo(e){for(;;){if(e!=null&&e.$==1)return Ae(!1,e.$0);if(e!=null&&e.$==2)e=e.$0.Current;else{if(e==null)return null;if(e!=null&&e.$==5)return null;if(e!=null&&e.$==4){let t=e.$0;return t.Dirty?(t.Text.nodeValue=t.Value,t.Dirty=!1):null}else if(e!=null&&e.$==6){let t=e.$0;return ot(r=>{Ae(!1,r)},t.Holes),ot(r=>{ko(r[0],r[1])},t.Attrs),Wo(t)}else{let t=e.$1,r=e.$0;Uo(r),e=t}}}}function Wo(e){let t=zt(e.Render);t!=null&&t.$==1&&(t.$0(e.El),Yt(e,"Render",null))}function Is(e){let t=e.El;function r(l,s){for(;;){if(l!=null&&l.$==1)return l.$0.El;if(l!=null&&l.$==2){let d=l.$0;if(d.Dirty)return d.Dirty=!1,Ce(t,d.Current,s);l=d.Current}else{if(l==null)return s;if(l!=null&&l.$==4)return l.$0.Text;if(l!=null&&l.$==5)return l.$0;if(l!=null&&l.$==6){let d=l.$0;return d.Dirty&&(d.Dirty=!1),dn((p,v)=>p==null||p.constructor===Object?r(p,v):p,d.Els,s)}else{let d=l.$1;l=l.$0,s=r(d,s)}}}}let n=e.El;Uc(l=>{Cl(n,l)},Rc(Wc(e),zc(e.El,zt(e.Delimiters))));let o=e.Children,a=zt(e.Delimiters),i=a!=null&&a.$==1?a.$0[1]:null;r(o,i)}function Ds(e){return dr((t,r)=>{e.then(t,n=>r(Gs(n)))})}function Gs(e){return e instanceof Error?e:new Or(e)}function Bs(){throw new tn("New")}function I(e){return e instanceof Array?Oo(e):C(typeof e,"string")?jo(e):e.GetEnumerator()}function Oo(e){return new vt(0,null,t=>{let r=t.s;return r<L(e)&&(t.c=N(e,r),t.s=r+1,!0)},void 0)}function jo(e){return new vt(0,null,t=>{let r=t.s;return r<e.length&&(t.c=e[r],t.s=r+1,!0)},void 0)}function zs(e){return e instanceof Array?Oo(e):C(typeof e,"string")?jo(e):"GetEnumerator0"in e?e.GetEnumerator0():e.GetEnumerator()}var vt=class extends j{s;c;n;d;e;MoveNext(){let t=this.n(this);return this.e=t?1:2,t}get Current(){return this.e===1?this.c:this.e===0?O("Enumeration has not started. Call MoveNext."):O("Enumeration already finished.")}Dispose(){this.d&&this.d(this)}constructor(t,r,n,o){super(),this.s=t,this.c=r,this.n=n,this.d=o,this.e=0}};function Rs(e){br.EndPoint=e}function Us(){return br.AjaxProvider}function Ws(e){return JSON.stringify(e)}function Os(e){return ei(Ct(t=>[t[0],t[1]],ls(t=>t[0],e.concat([["content-type","application/json"]]))))}function js(){return br.EndPoint}function Zn(e,t,r,n,o,a,i){let l=new XMLHttpRequest,s=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");l.open("POST",t,e),e==!0&&(l.withCredentials=!0);let d;for(var p in r)l.setRequestHeader(p,r[p]);s&&l.setRequestHeader("x-csrftoken",s);function v(){if(l.status==200)o(l.responseText);else if(i&&l.status==403&&l.responseText=="CSRF")i();else{let g="Response status is not 200: ";a(new Error(g+l.status))}}"onload"in l?l.onload=l.onerror=l.onabort=v:l.onreadystatechange=()=>{l.readyState==4&&v()},l.send(n)}var Br=class extends j{idle;robin;Fork(t){this.robin.push(t),this.idle&&(this.idle=!1,setTimeout(()=>{this.tick()},0))}tick(){let t=Date.now(),r=!0;for(;r;)this.robin.length===0?(this.idle=!0,r=!1):(this.robin.shift()(),Date.now()-t>40&&(setTimeout(()=>{this.tick()},0),r=!1))}constructor(){super(),this.idle=!0,this.robin=[]}};function qs(e){return e.$==1?e.$0:qo()}function Hs(e){return e.$==1?e.$1:qo()}function qo(){return O("The input list was empty.")}var D=K(e=>class{static{D=e(this)}static FloatApplyChecked;static FloatGetChecked;static FloatSetChecked;static FloatApplyUnchecked;static FloatGetUnchecked;static FloatSetUnchecked;static IntApplyChecked;static IntGetChecked;static IntSetChecked;static IntApplyUnchecked;static IntGetUnchecked;static IntSetUnchecked;static FileApplyUnchecked;static FileGetUnchecked;static FileSetUnchecked;static DateTimeApplyUnchecked;static DateTimeGetUnchecked;static DateTimeSetUnchecked;static StringListApply;static StringListGet;static StringListSet;static StringApply;static StringGet;static StringSet;static BoolCheckedApply;static EmptyAttr;static{this.EmptyAttr=null,this.BoolCheckedApply=w=>[c=>{c.addEventListener("change",()=>w.Get()!=c.checked?w.Set(c.checked):null)},c=>h=>h!=null&&h.$==1?void(c.checked=h.$0):null,A(c=>u(c),w.View)],this.StringSet=w=>c=>{w.value=c},this.StringGet=w=>u(w.value);let r=lc(),n=ic();this.StringApply=w=>Rt(r,n,w),this.StringListSet=w=>c=>{let h=w.options;for(let b=0,m=h.length-1;b<=m;b++)(()=>{let x=h.item(b);x.selected=Fc(x.value,c)})()},this.StringListGet=w=>{let c=w.selectedOptions;return u(te(Wn(()=>Ol(h=>[c.item(h).value],Nn(0,c.length-1)))))};let o=cc(),a=sc();this.StringListApply=w=>Rt(o,a,w),this.DateTimeSetUnchecked=w=>c=>{w.value=new Date(c).toLocaleString()},this.DateTimeGetUnchecked=w=>{let c,h,b=w.value;if(ue(b))return u(-864e13);{c=0;let m=Lc(b);return h=[m!=null&&m.$==1&&(c=m.$0,!0),c],h[0]?u(h[1]):null}};let i=uc(),l=dc();this.DateTimeApplyUnchecked=w=>Rt(i,l,w),this.FileSetUnchecked=()=>()=>null,this.FileGetUnchecked=w=>{let c=w.files;return u(te(Wn(()=>qt(h=>c.item(h),Nn(0,c.length-1)))))};let s=gc(),d=hc();this.FileApplyUnchecked=w=>pc(s,d,w),this.IntSetUnchecked=w=>c=>{w.value=String(c)},this.IntGetUnchecked=w=>{let c=w.value;if(ue(c))return u(0);{let h=+c;return h!==h>>0?null:u(h)}};let p=vc(),v=wc();this.IntApplyUnchecked=w=>Rt(p,v,w),this.IntSetChecked=w=>c=>{let h=c.Input;return w.value!=h?void(w.value=h):null},this.IntGetChecked=w=>{let c,h,b=w.value;if(ue(b))c=!w.checkValidity||w.checkValidity()?mt.Blank(b):mt.Invalid(b);else{let m=(h=0,[pn(b,{get:()=>h,set:x=>{h=x}}),h]);c=m[0]?mt.Valid(m[1],b):mt.Invalid(b)}return u(c)};let g=bc(),f=fc();this.IntApplyChecked=w=>Rt(g,f,w),this.FloatSetUnchecked=w=>c=>{w.value=String(c)},this.FloatGetUnchecked=w=>{let c=w.value;if(ue(c))return u(0);{let h=+c;return isNaN(h)?null:u(h)}};let y=xc(),S=mc();this.FloatApplyUnchecked=w=>Rt(y,S,w),this.FloatSetChecked=w=>c=>{let h=c.Input;return w.value!=h?void(w.value=h):null},this.FloatGetChecked=w=>{let c,h=w.value;if(ue(h))c=!w.checkValidity||w.checkValidity()?mt.Blank(h):mt.Invalid(h);else{let b=+h;c=isNaN(b)?mt.Invalid(h):mt.Valid(b,h)}return u(c)};let _=yc(),k=kc();this.FloatApplyChecked=w=>Rt(_,k,w)}});function Ks(e,t,r){return()=>n=>{let o;if(typeof n=="object"&&n!=null){let i={};if(typeof t=="string"){let l=n[t];o=os(s=>!C(s,null)&&s[0]==l,r)}else{let l=[void 0],s;for(var a in t)if((d=>n.hasOwnProperty(d)&&(l[0]=t[d],!0))(a))break;o=l[0]}return i.$=o,ot(l=>{let s=l[0],d=l[1],p=l[2],v=l[3];if(s==null){let g=p()(n);d&&delete g[t],i.$0=g;return}else return v===0?void(i[s]=p()(n[d])):v===1?void(i[s]=n.hasOwnProperty(d)?u(p()(n[d])):null):O("Invalid field option kind")},N(r,o)[1]),e===void 0?i:e(i)}else return n}}function Tt(){return()=>e=>e}function Ys(e){return Zs(e)}function Zs(e){return()=>t=>Ct(e(),t)}function Js(e,t){return()=>r=>{let n={};return ot(o=>{let a=o[0],i=o[1],l=o[2];return l===0?r.hasOwnProperty(a)?void(n[a]=i()(r[a])):O("Missing mandatory field: "+a):l===1?void(n[a]=r.hasOwnProperty(a)?u(i()(r[a])):null):l===2?r.hasOwnProperty(a)?void(n[a]=i()(r[a])):null:l===3?r[a]===void 0?void(n[a]=i()(r[a])):null:O("Invalid field option kind")},t),e===void 0?n:e(n)}}var nr=class extends Error{ct;constructor(t,r,n,o){let a;if(t=="New"&&(a=r,t="New_1",r="The operation was canceled.",n=null,o=a),t=="New_1"){let i=r,l=n,s=o;super(i),this.inner=l,this.ct=s}}},zr=class extends j{init;c;pending;r;constructor(){super(),this.c=!1,this.pending=null,this.r=[],this.init=1}};function Ho(e,t,r,n){let o={DynElem:e,DynFlags:t,DynNodes:r};return Yt(o,"OnAfterRender",n),o}var gn=K(e=>class{static{gn=e(this)}static counter;static{this.counter=0}});function Qs(e,t,r,n){let o=+e,a=o===o-o%1&&o>=t&&o<=r;return a&&n.set(o),a}function Rr(){return Cc()}function Jn(e){return U(()=>W(tc(()=>{},Ac(e)),()=>(Sc(e),q(null))))}function Xs(e,t){return wn(sa(e.$0,t.$0))}function tc(e,t){let r=t.Duration;if(r===0)return pt();{let n=o=>{function a(i){return l=>{let s=l-i;return t.Compute(s),e(),s<=r?void requestAnimationFrame(d=>{a(i)(d)}):o()}}requestAnimationFrame(i=>{a(i)(i)})};return dr((o,a,i)=>n.apply(null,[o,a,i]))}}function wn(e){return{$:0,$0:e}}function fr(e){return wn(Ic(qt(Tc,e)))}function Ar(){return wn(da())}function Ur(){return ia.BatchUpdatesEnabled}function Qn(e){let t=[0];function r(){return U(()=>W(e,()=>{let n=t[0];return C(n,1)?(t[0]=0,pt()):C(n,2)?(t[0]=1,r()):pt()}))}return()=>{let n=t[0];C(n,0)?(t[0]=1,rl(r(),null)):C(n,1)&&(t[0]=2)}}var Gt=K(e=>class{static{Gt=e(this)}static RenderedFullDocTemplate;static TextHoleRE;static GlobalHoles;static LocalTemplatesLoaded;static LoadedTemplates;static{this.LoadedTemplates=new ht("New_5"),this.LocalTemplatesLoaded=!1,this.GlobalHoles=new ht("New_5"),this.TextHoleRE="\\${([^}]+)}",this.RenderedFullDocTemplate=null}});function ec(e){let t=null,r=0,n=e.textContent,o=new RegExp(ke(),"g");for(;t=o.exec(n),t!==null;){e.parentNode.insertBefore(globalThis.document.createTextNode(_t(n,u(r),u(o.lastIndex-N(t,0).length-1))),e),r=o.lastIndex;let a=globalThis.document.createElement("span");a.setAttribute("ws-replace",N(t,1).toLowerCase()),e.parentNode.insertBefore(a,e)}o.lastIndex=0,e.textContent=_t(n,u(r),null)}function Xn(e){console.warn("Instantiating non-loaded template",e)}function rc(e,t,r){let n=e.querySelector("[ws-replace]");return C(n,null)?(console.warn("Filling non-existent text hole",r),null):(n.parentNode.replaceChild(globalThis.document.createTextNode(t),n),u(n.getAttribute("ws-replace")))}function nc(e,t){let r=n=>{Y(e,"["+n+"]",o=>{t.Contains(o.getAttribute(n))||o.removeAttribute(n)})};r("ws-attr"),r("ws-onafterrender"),r("ws-var"),Y(e,"[ws-hole]",n=>{if(!t.Contains(n.getAttribute("ws-hole")))for(n.removeAttribute("ws-hole");n.hasChildNodes();)n.removeChild(n.lastChild)}),Y(e,"[ws-replace]",n=>{t.Contains(n.getAttribute("ws-replace"))||n.parentNode.removeChild(n)}),Y(e,"[ws-on]",n=>{n.setAttribute("ws-on",ee(" ",_e(o=>t.Contains(N(yt(o,[":"],1),1)),yt(n.getAttribute("ws-on"),[" "],1))))}),Y(e,"[ws-attr-holes]",n=>{let o=yt(n.getAttribute("ws-attr-holes"),[" "],1);for(let a=0,i=o.length-1;a<=i;a++){let l=N(o,a),s=new RegExp(ke(),"g"),d=n.getAttribute(l).replace(s,(p,v)=>t.Contains(v)?p:"");n.setAttribute(l,d)}})}function oc(e,t){Ko(t);let r=t.nodeName.toLowerCase(),n=e.querySelector("[ws-attr="+r+"]");if(C(n,null))console.warn("Filling non-existent attr hole",r);else{n.removeAttribute("ws-attr");for(let o=0,a=t.attributes.length-1;o<=a;o++){let i=t.attributes.item(o);i.name=="class"&&n.hasAttribute("class")?n.setAttribute("class",n.getAttribute("class")+" "+i.nodeValue):n.setAttribute(i.name,i.nodeValue)}}}function ac(e,t){let r=n=>{Y(e,"["+n+"]",o=>{let a,i=(a=null,[t.TryGetValue(o.getAttribute(n).toLowerCase(),{get:()=>a,set:l=>{a=l}}),a]);i[0]&&o.setAttribute(n,i[1])})};r("ws-hole"),r("ws-replace"),r("ws-attr"),r("ws-onafterrender"),r("ws-var"),Y(e,"[ws-on]",n=>{n.setAttribute("ws-on",ee(" ",Ct(o=>{let a,i=yt(o,[":"],1),l=(a=null,[t.TryGetValue(N(i,1),{get:()=>a,set:s=>{a=s}}),a]);return l[0]?N(i,0)+":"+l[1]:o},yt(n.getAttribute("ws-on"),[" "],1))))}),Y(e,"[ws-attr-holes]",n=>{let o=yt(n.getAttribute("ws-attr-holes"),[" "],1);for(let a=0,i=o.length-1;a<=i;a++)(()=>{let l=N(o,a);return n.setAttribute(l,ql((s,d)=>{let p=Zt(d);return s.replace(new RegExp("\\${"+p[0]+"}","ig"),"${"+p[1]+"}")},n.getAttribute(l),t))})()})}function to(e,t,r){for(;;)if(e.hasChildNodes())r=t.insertBefore(e.lastChild,r);else return null}function Ko(e){let t=e.attributes,r=[],n=[],o=[];for(let i=0,l=t.length-1;i<=l;i++){let s=t.item(i);if(Lr(s.nodeName,"ws-on")&&s.nodeName!="ws-onafterrender"&&s.nodeName!="ws-on")r.push(s.nodeName),n.push(_t(s.nodeName,u(5),null)+":"+s.nodeValue.toLowerCase());else if(!Lr(s.nodeName,"ws-")&&new RegExp(ke()).test(s.nodeValue)){let d=new RegExp(ke(),"g"),p=s.nodeValue.replace(d,(v,g)=>"${"+g.toLowerCase()+"}");s.nodeValue=p,o.push(s.nodeName)}}n.length!=0&&e.setAttribute("ws-on",ee(" ",n)),o.length!=0&&e.setAttribute("ws-attr-holes",ee(" ",o));let a=i=>{let l=e.getAttribute(i);l==null||e.setAttribute(i,l.toLowerCase())};a("ws-hole"),a("ws-replace"),a("ws-attr"),a("ws-onafterrender"),a("ws-var"),ot(i=>{e.removeAttribute(i)},r)}function _t(e,t,r){if(t==null)if(r!=null&&r.$==1){let n=r.$0;return n<0?"":e.slice(0,n+1)}else return"";else{if(r==null)return e.slice(t.$0);{let n=r.$0,o=t.$0;return n<0?"":e.slice(o,n+1)}}}var Wr=class e extends R{docNode_1;updates_1;elt;rvUpdates;static TreeNode(t,r){let n=Kr.Create(r),o=So(t),a=Ct(s=>xo(s[1]),t.Attrs),i=gr(fe(),qe,a),l=qe(i,n.v);return new e(o,l,N(t.Els,0),n)}constructor(t,r,n,o){super(t,r),this.docNode_1=t,this.updates_1=r,this.elt=n,this.rvUpdates=o}},br=K(e=>class{static{br=e(this)}static AjaxProvider;static EndPoint;static{this.EndPoint=globalThis.location.origin,this.AjaxProvider=new Zr}});function Rt(e,t,r){let n;return n=null,[o=>{let a=()=>{r.UpdateMaybe(i=>{let l;return n=e(o),n!=null&&n.$==1&&!C(n.$0,i)&&(l=[n,n.$0],!0)?l[0]:null})};o.addEventListener("change",a),o.addEventListener("input",a),o.addEventListener("keypress",a)},o=>{let a=t(o);return i=>i==null?null:a(i.$0)},A(o=>{let a;return n!=null&&n.$==1&&C(n.$0,o)&&(a=n.$0,!0)?null:u(o)},r.View)]}function ic(){return D.StringSet}function lc(){return D.StringGet}function sc(){return D.StringListSet}function cc(){return D.StringListGet}function dc(){return D.DateTimeSetUnchecked}function uc(){return D.DateTimeGetUnchecked}function pc(e,t,r){let n;return n=null,[o=>{o.addEventListener("change",()=>{r.UpdateMaybe(a=>{let i;return n=e(o),n!=null&&n.$==1&&n.$0!==a&&(i=[n,n.$0],!0)?i[0]:null})})},o=>{let a=t(o);return i=>i==null?null:a(i.$0)},A(o=>{let a;return n!=null&&n.$==1&&C(n.$0,o)&&(a=n.$0,!0)?null:u(o)},r.View)]}function hc(){return D.FileSetUnchecked}function gc(){return D.FileGetUnchecked}function wc(){return D.IntSetUnchecked}function vc(){return D.IntGetUnchecked}function fc(){return D.IntSetChecked}function bc(){return D.IntGetChecked}function mc(){return D.FloatSetUnchecked}function xc(){return D.FloatGetUnchecked}function kc(){return D.FloatSetChecked}function yc(){return D.FloatGetChecked}function Yo(){return D.StringApply}function Zo(){return D.FloatApplyUnchecked}function Jo(){return D.BoolCheckedApply}function Qo(){return D.DateTimeApplyUnchecked}function Xo(){return D.FileApplyUnchecked}function ta(){return D.StringListApply}function ue(e){return xs(Mc,e)}var mt=class e{get Input(){return this.$==1?this.$0:this.$==2?this.$0:this.$1}static Blank(t){return ut(e,{$:2,$0:t})}static Invalid(t){return ut(e,{$:1,$0:t})}static Valid(t,r){return ut(e,{$:0,$0:t,$1:r})}$;$0;$1},Or=class extends Error{reason;constructor(t){super("Promise rejected"),this.reason=t}},se=K(e=>class{static{se=e(this)}static defaultWrap;static wrapMap;static rhtml;static rtagName;static rxhtmlTag;static{this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>","gi"),this.rtagName=new RegExp("<([\\w:]+)"),this.rhtml=new RegExp("<|&#?\\w+;");let r=[1,"<table>","</table>"],n=Object.fromEntries([["option",[1,"<select multiple='multiple'>","</select>"]],["legend",[1,"<fieldset>","</fieldset>"]],["area",[1,"<map>","</map>"]],["param",[1,"<object>","</object>"]],["thead",r],["tbody",r],["tfoot",r],["tr",[2,"<table><tbody>","</tbody></table>"]],["col",[2,"<table><colgroup>","</colgoup></table>"]],["td",[3,"<table><tbody><tr>","</tr></tbody></table>"]]]);this.wrapMap=n,this.defaultWrap=[0,"",""]}});function ea(e,t){return{PreviousNodes:e,Top:t}}function ra(){return Me(new gt("New_3"))}function na(e){let t=[];function r(a,i){for(;;)switch(a){case 0:if(i!=null&&i.$==0){let l=i.$1,s=i.$0;r(0,s),i=l}else if(i!=null&&i.$==1)i=i.$0,a=1;else if(i!=null&&i.$==2)i=i.$0.Current;else if(i!=null&&i.$==6){let l=i.$0.Holes;return(s=>d=>{ot(s,d)})(o)(l)}else return null;break;case 1:t.push(i),i=i.Children,a=0;break}}function n(a){return r(0,a)}function o(a){return r(1,a)}return n(e),Me(new gt("New_2",t))}function Me(e){return{$:0,$0:e}}function vn(e,t){return Me(Dc(e,t.$0))}function oa(e,t){return Me(Gc(e.$0,t.$0))}function fn(e){return ne(e.$0)}function $c(e,t){return Me(Bc(e.$0,t.$0))}function Cc(){return la.UseAnimations}function Ac(e){return Nc(sn(t=>t.$==1?u(t.$0):null,ca(e.$0)))}function Sc(e){ot(t=>{t.$==0&&t.$0()},ca(e.$0))}function Nc(e){let t=hr(e),r=L(t);if(r===0)return _c();if(r===1)return N(t,0);{let n=ts(qt(a=>a.Duration,t)),o=Ct(a=>Vc(n,a),t);return aa(n,a=>{ot(i=>{i.Compute(a)},o)})}}function Tc(e){return e.$0}function _c(e){return aa(0,()=>e)}function aa(e,t){return{Compute:t,Duration:e}}function Vc(e,t){let r=t.Compute,n=t.Duration,o=Oc(()=>t.Compute(t.Duration));return{Compute:a=>a>=n?o.f():r(a),Duration:e}}var ia=K(e=>class{static{ia=e(this)}static BatchUpdatesEnabled;static{this.BatchUpdatesEnabled=!0}}),jr=class e extends Z{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}get AsChoiceView(){return bn(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},qr=class e extends Z{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Hr=class e extends Z{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function bn(e){return{$:0,$0:e}}function Ht(e){return{$:1,$0:e}}var Kr=class e{c;s;v;static Create(t){let r;return r=null,r=e.New(t,null,()=>{let n;return n=r.s,n===null&&(n=Dl(r.c()),r.s=n,Co(n,()=>{r.s=null})),n}),r}static New(t,r,n){return ut(e,{c:t,s:r,v:n})}},Yr=class extends j{d;GetEnumerator(){return I(qt(t=>t.V,this.d))}constructor(t){super(),this.d=t}},Zr=class extends j{Async(t,r,n,o,a){Zn(!0,t,r,n,o,a,()=>{Zn(!0,t,r,n,o,a,void 0)})}};function Ec(e){e.splice(0,L(e))}function Fc(e,t){let r=!0,n=0,o=L(t);for(;r&&n<o;)C(t[n],e)?r=!1:n=n+1;return!r}function Jr(){return O("The input sequence has an insufficient number of elements.")}function Pc(){return O("The input must be non-negative.")}function Mc(e){return e.match(new RegExp("\\s"))!==null}function Lc(e){let t=Date.parse(e);return isNaN(t)?null:u(t)}var la=K(e=>class{static{la=e(this)}static UseAnimations;static CubicInOut;static{this.CubicInOut=Xr.Custom(r=>{let n=r*r;return 3*n-2*(n*r)}),this.UseAnimations=!0}});function sa(e,t){return e.$==0?t:t.$==0?e:{$:2,$0:e,$1:t}}function ca(e){let t=[];function r(n){for(;;){if(n.$==1)return t.push(n.$0);if(n.$==2){let o=n.$1,a=n.$0;r(a),n=o}else return n.$==3?ot(o=>{t.push(o)},n.$0):null}}return r(e),t.slice(0)}function Ic(e){let t=hr(e);return gr(da(),sa,t)}function da(){return ua.Empty}function Sr(e){let t=[],r;for(var n in e)t.push.apply(t,e[n]);return t}var Qr=class extends j{d;GetEnumerator(){return I(qt(t=>t.K,this.d))}constructor(t){super(),this.d=t}},Xr=class e extends j{transformTime;static Custom(t){return new e(t)}constructor(t){super(),this.transformTime=t}};function Dc(e,t){return new gt("New_2",_e(e,ne(t)))}function Gc(e,t){let r=new gt("New_2",ne(t));return r.ExceptWith(ne(e)),r}function ne(e){let t=ss(e.Count,void 0);return e.CopyTo(t,0),t}function Bc(e,t){let r=new gt("New_2",ne(e));return r.IntersectWith(ne(t)),r}var tn=class extends Error{constructor(t,r){if(t=="New"&&(t="New_1",r="The given key was not present in the dictionary."),t=="New_1"){let n=r;super(n)}}};function zc(e,t){let r;if(t!=null&&t.$==1){let n=t.$0[1],o=t.$0[0],a=[];for(r=o.nextSibling;r!==n;)a.push(r),r=r.nextSibling;return or(a)}else{let n=e.childNodes.length,o=e.childNodes,a=cs(n,i=>o[i]);return or(a)}}function Rc(e,t){let r=e.$0;return or(_e(n=>Mo(o=>n!==o,r),t.$0))}function Uc(e,t){ot(e,t.$0)}function Wc(e){let t=[];function r(n){for(;;)if(n!=null&&n.$==2)n=n.$0.Current;else{if(n!=null&&n.$==1)return t.push(n.$0.El);if(n==null)return null;if(n!=null&&n.$==5)return t.push(n.$0);if(n!=null&&n.$==4)return t.push(n.$0.Text);if(n!=null&&n.$==6){let o=n.$0.Els;return(a=>i=>{ot(a,i)})(a=>{a==null||a.constructor===Object?r(a):t.push(a)})(o)}else{let o=n.$1,a=n.$0;r(a),n=o}}}return r(e.Children),or(hr(t))}function or(e){return{$:0,$0:e}}function ce(e,t,r){let n=e(t);n[0](r),je(n[1](r),n[2])}function Oc(e){return Hc(!1,e,jc)}function jc(){let e=this.v();return this.c=!0,this.v=e,this.f=qc,e}function qc(){return this.v}var ua=K(e=>class{static{ua=e(this)}static Empty;static{this.Empty={$:0}}});function Hc(e,t,r){return{c:e,v:t,f:r}}return fa(Kc);})();
