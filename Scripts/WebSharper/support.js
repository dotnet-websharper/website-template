var wsbundle=(()=>{var dr=Object.defineProperty;var qo=Object.getOwnPropertyDescriptor;var Oo=Object.getOwnPropertyNames;var jo=Object.prototype.hasOwnProperty;var Ho=(e,t)=>{for(var r in t)dr(e,r,{get:t[r],enumerable:!0})},Ko=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Oo(t))!jo.call(e,o)&&o!==r&&dr(e,o,{get:()=>t[o],enumerable:!(n=qo(t,o))||n.enumerable});return e};var Yo=e=>Ko(dr({},"__esModule",{value:!0}),e);var Ec={};Ho(Ec,{Layout:()=>Zo,Runtime:()=>hn,Support:()=>Qo});function et(e,t){return Object.assign(Object.create(e.prototype),t)}var Jo=Symbol("force");function j(e){var t;function r(){return t||(t=e(o=>t=o)),t}return new Proxy(function(){},{get(o,a){return a==Jo&&r(),r()[a]},set(o,a,i){return r()[a]=i,!0},construct(o,a,i){return Reflect.construct(r(),a,i)}})}function cn(e,t){for(var r=0;r<t.length;r++){var n=t[r];e[n]===void 0&&delete e[n]}return e}function It(e){return e===void 0?null:{$:1,$0:e}}function Ht(e,t,r){r?e[t]=r.$0:delete e[t]}function dn(e){return function(...t){return e(t)}}function un(e){return Object.defineProperty(e,"resizable",{enumerable:!1,writable:!1,configurable:!1,value:!0}),e}var pn=globalThis.WebSharperRuntime||{ScriptBasePath:"./",ScriptSkipAssemblyDir:!1};globalThis.WebSharperRuntime=pn;var hn=pn;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".section-link"),t=document.querySelectorAll(".section"),r={root:null,threshold:1,rootMargin:"0px"};function n(a){a.classList.add("active-link")}let o=new IntersectionObserver(function(a){a.forEach(i=>{i.isIntersecting&&e.forEach(l=>{let s=l.getAttribute("data-step"),d=i.target.getAttribute("id");s===d?n(l):l.classList.remove("active-link")})})},r);t.forEach(a=>{o.observe(a)})});document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("track"),t=document.getElementById("mini-inner"),r=document.getElementById("mini-prev"),n=document.getElementById("mini-next");if(!e||!t||!r||!n)return;let o=Array.from(t.children);if(o.length===0)return;let a=o[0].cloneNode(!0),i=o[o.length-1].cloneNode(!0);t.insertBefore(i,o[0]),t.appendChild(a);let l=1,s=!1,d=null,p=!1,b=_=>{t.style.transition=_?"transform 0.7s ease-out":"none",t.style.transform=`translateX(-${l*100}%)`},w=()=>{p||(p=!0,l+=1,b(!0))},f=()=>{p||(p=!0,l-=1,b(!0))};t.addEventListener("transitionend",()=>{let _=t.children.length,k=_-2;l===_-1?(l=1,b(!1)):l===0&&(l=k,b(!1)),requestAnimationFrame(()=>{p=!1})}),n.addEventListener("click",w),r.addEventListener("click",f);let y=()=>{$(),d=setInterval(()=>{s||w()},5e3)},$=()=>{d&&clearInterval(d)};e.addEventListener("mouseenter",()=>{s=!0}),e.addEventListener("mouseleave",()=>{s=!1}),b(!1),y()});function ot(e){return"Dispose"in e}function Zo(){ea();let e=mn(),t=bn(),r=fn(),n=vn(),o=mn(),a=bn(),i=fn(),l=vn(),s=va(),d=wa(),p=wn(),b=wn(),w=ga(),f=ha(),y=new St("New_1"),$=(y.h.push(rt(y.k,"togglemenu",()=>y.i,()=>{Xo()})),y),_=($.h.push(rt($.k,"toggletheme",()=>$.i,()=>{ra()})),$),k=(_.h.push(rt(_.k,"onkeydown",()=>_.i,at=>{sa(at)})),_),v=(k.h.push(rt(k.k,"onstoppropagation",()=>k.i,at=>{ca(at)})),k),c=(v.h.push(rt(v.k,"closeonbackgroundclick",()=>v.i,at=>{da(at)})),v),u=(c.h.push(rt(c.k,"accountbtnclick",()=>c.i,at=>{ua(at)})),c),h=(u.h.push(rt(u.k,"accountbtnkeydown",()=>u.i,()=>{})),u),m=(h.h.push(rt(h.k,"login",()=>h.i,()=>{ma()})),h),x=(m.h.push(rt(m.k,"logout",()=>m.i,at=>{pa(at)})),m),N=(x.h.push(new P("dropdownattr",f)),x),L=(N.h.push(new P("accountbtnaria",w)),N),V=(L.h.push(new P("avatarattr",b)),L),D=(V.h.push(new P("avatarattrhamburger",p)),V),E=(D.h.push(new P("iconattr",d)),D),z=(E.h.push(new P("skeletonattr",s)),E),J=(z.h.push(new At("accountheadertext",la())),z),M=(J.h.push(new P("headerattrd",l)),J),O=(M.h.push(new P("btnmanageattrd",i)),M),tt=(O.h.push(new P("btnloginattrd",a)),O),ft=(tt.h.push(new P("btnlogoutattrd",o)),tt),Mt=(ft.h.push(new P("headerattr",n)),ft),Le=(Mt.h.push(new P("btnmanageattr",r)),Mt),ce=(Le.h.push(new P("btnloginattr",t)),Le),$t=(ce.h.push(new P("btnlogoutattr",e)),ce),jt=Kt($t.k,$t.h,[]);return $t.i=new xt(jt[1],uo(jt[0])),fa(),nt.Empty}function Qo(){return Sa()}function Xo(){let e=ur("navmenu"),t=ur("openIcon"),r=ur("closeIcon"),n=globalThis.document.body;e.classList.toggle("h-screen"),t.classList.toggle("hidden-open-icon"),r.classList.toggle("visible-close-icon"),n.classList.toggle("overflow-hidden")}function ta(e){let t=[],r;for(var n in e)t.push(e[n]);return t}function ea(){Fn();let e=globalThis.localStorage.getItem("color-theme");e=="dark"||e==null&&na()?br(!0):br(!1)}function ra(){oa(Bn()=="dark"?"light":"dark")}function Fn(){let e=Bn(),t=globalThis.document.querySelectorAll(".themed-iframe");for(let r=0,n=aa(t.length)-1;r<=n;r++){let o=t[r],a=o.getAttribute("data-src");if(a!=null){let i=new URL(a,globalThis.location.href);i.searchParams.set("theme",e),o.setAttribute("src",String(i))}}}function na(){return globalThis.matchMedia("(prefers-color-scheme: dark)").matches}function br(e){e?mr().classList.add("dark"):mr().classList.remove("dark")}function oa(e){br(e=="dark"),globalThis.localStorage.setItem("color-theme",e),Fn()}function Bn(){return mr().classList.contains("dark")?"dark":"light"}function mr(){return globalThis.document.documentElement}function S(e,t){return zn(e,t),e[t]}function I(e){return e.dims===2?e.length*e.length:e.length}function zn(e,t){(t<0||t>=e.length)&&W("Index was outside the bounds of the array.")}function Or(e,t,r){zn(e,t),e[t]=r}function aa(e){let t=ia(e);return t>2147483647?t-4294967296:t}function W(e){throw new Error(e)}function ia(e){return(e<0?Math.ceil(e):Math.floor(e))>>>0}function Dt(e){return[e.K,e.V]}function gn(e,t){let r=1+t-e;return r<=0?[]:kl(r,n=>n+e)}var U=class{Equals(t){return this===t}GetHashCode(){return-1}},St=class extends U{i;k;h;s;constructor(t){if(t=="New_1"){let r;super(),this.i=null,this.k=(r=Ma(),String(r)),this.h=un([]),Ht(this,"s",null)}}};function la(){return yt.AccountHeaderText}function sa(e){e.Event.key=="Escape"&&_t().Set(!1)}function ca(e){e.Event.stopPropagation()}function da(){_t().Get()&&_t().Set(!1)}function ua(){_t().Set(!_t().Get())}function pa(){er(B(()=>(_t().Set(!1),R(ka(!0),()=>q(null)))),null)}function ha(){return Nt("hidden",C(e=>!e,_t().View))}function ga(){return it("aria-expanded",C(e=>e?"true":"false",_t().View))}function wn(){return Z.Concat([it("src",Pn()),Nt("hidden",C(e=>!e,Rn())),Nt("opacity-0",ue().View)])}function wa(){return Z.Concat([Nt("hidden",Rn()),Nt("opacity-0",ue().View)])}function va(){return Nt("opacity-0 hidden",C(e=>!e,ue().View))}function vn(){return Xe(tr())}function fn(){return Xe(tr())}function bn(){return Xe(C(e=>!e,tr()))}function mn(){return Xe(tr())}function fa(){er(B(()=>(ue().Set(!0),R(ya(),()=>R(ki(500),()=>(ue().Set(!1),lt()))))),null)}function _t(){return yt.isOpen}function Pn(){return yt.avatarSrcV}function Rn(){return yt.hasAvatarV}function ue(){return yt.isLoading}function Xe(e){return Z.Concat([Nt("hidden",C(t=>!t,e)),Nt("flex",e)])}function tr(){return yt.isAuthedV}function xn(){return yt.userV}function ba(){return yt.displayNameV}function rt(e,t,r,n){return new ze(t,"",o=>a=>{let i=r();return i.SetAnchorRoot(o),n({Vars:i,Anchors:i,Target:o,Event:a})})}function Kt(e,t,r){let n=new Q("New_5"),o=new dt("New_3"),a=G(t);try{for(;a.MoveNext();){let i=a.Current,l=i.Name;o.SAdd(l),n.set_Item(l,i)}}finally{let i=a;typeof i=="object"&&ot(i)&&a.Dispose()}return[io(t,Qr(i=>{let l=i[0],s=i[1],d=i[2];if(o.Contains(l))return null;{let p=s===0?Y.GetOrAddHoleFor(e,l,()=>{let b=d==null?null:g(d.$0),w=b==null?"":b.$0,f=T.Create_1(w);return new wt(l,f)}):s===1?Y.GetOrAddHoleFor(e,l,()=>{let b=d==null?null:g(d.$0),w=b==null?0:b.$0,f=T.Create_1(w);return new je(l,f)}):s===2?Y.GetOrAddHoleFor(e,l,()=>{let b=d==null?null:g(d.$0),w=b==null?!1:b.$0,f=T.Create_1(w);return new He(l,f)}):s===3?Y.GetOrAddHoleFor(e,l,()=>{let b=d==null?null:g(d.$0),w=b==null?-864e13:b.$0,f=T.Create_1(w);return new Ke(l,f)}):s===4?Y.GetOrAddHoleFor(e,l,()=>new Ye(l,T.Create_1([]))):s===5?Y.GetOrAddHoleFor(e,l,()=>new fe(l,T.Create_1(g(globalThis.document.querySelector("[ws-dom="+l+"]"))))):s===6?Y.GetOrAddHoleFor(e,l,()=>{let b=d==null?null:g(d.$0),w=b==null?[]:b.$0,f=T.Create_1(w);return new Je(l,f)}):W("Invalid kind for template Var type: "+String(s));return n.set_Item(l,p),g(p)}},r)),{$:0,$0:n}]}function ma(){globalThis.location.href=xa()}function xa(){return Aa(globalThis.location.pathname+globalThis.location.search)}function ka(e){return B(()=>$i(we(B(()=>R(_i(),()=>q(null))),t=>(console.error("AuthClient.Logout RPC failed",t),lt())),B(()=>(Yt().Set(null),e?we(B(()=>(globalThis.location.reload(),lt())),()=>lt()):lt()))))}function ya(){return B(()=>{let e=Yt().Get();return e!=null&&e.$==1?q(g(e.$0)):(xr().Set(!0),Hr(B(()=>we(B(()=>R(Ni(),t=>(Yt().Set(t),q(t)))),t=>(console.error("AuthClient.FetchMe RPC failed",t),Yt().Set(null),q(null)))),()=>{xr().Set(!1)}))})}function $a(){return Ve.UserView}function Ca(){return Ve.IsAuthedView}function Aa(e){return"https://api.websharper.io/auth/github/start?returnUrl="+encodeURIComponent(e)}function Yt(){return Ve.userVar}function xr(){return Ve.isFetchingVar}var nt=class e extends U{docNode;updates;static get Empty(){return e.Mk(null,he())}static Mk(t,r){return new e(t,r)}static RunBefore(t,r){let n=globalThis.document.createTextNode("");t.parentNode.insertBefore(n,t),e.RunBetween(n,t,r)}static Concat(t){return Se(e.Empty,e.Append,Ae(t))}static RunBetween(t,r,n){rn(r,n.docNode);let o=$s(t,r,n.docNode);Re(Mr()||Ir()?Ln(Vn(!1,o,n.docNode)):()=>{En(!1,o,n.docNode)},n.updates)}static RunInPlace(t,r,n){let o=Cs(r,n.docNode);Re(Mr()||Ir()?Ln(Vn(t,o,n.docNode)):()=>{En(t,o,n.docNode)},n.updates)}static EmbedView(t){let r=As();return e.Mk(ul(r),C(()=>{},Ua(n=>(Ss(r,n.docNode),n.updates),t)))}static Convert(t,r){return e.Flatten(qa(t,r))}static Append(t,r){return e.Mk(pl(t.docNode,r.docNode),ge(t.updates,r.updates))}static Flatten(t){return e.EmbedView(C(r=>e.Concat(r),t))}static TextNode(t){return e.Mk(hl(globalThis.document.createTextNode(t)),he())}static TextView(t){let r=Ls();return e.Mk(gl(r),C(n=>{Ds(r,n)},t))}ReplaceInDom(t){let r=globalThis.document.createTextNode("");t.parentNode.replaceChild(r,t),e.RunBefore(r,this)}constructor(t,r){super(),this.docNode=t,this.updates=r}};function Sa(){let e=Za(),t=Ja(),r=new St("New_1"),n=(r.h.push(new Oe("onafterrender","",()=>{er(li(),null)})),r),o=(n.h.push(new ve("plansgrid",ai())),n),a=(o.h.push(new P("billmonthattr",t)),o),i=(a.h.push(new P("billyearattr",e)),a),l=(i.h.push(rt(i.k,"onbillmonth",()=>i.i,u=>{Qa(u)})),i),s=(l.h.push(rt(l.k,"onbillyear",()=>l.i,u=>{Xa(u)})),l),d=(s.h.push(new wt("contactsubjectvar",T.Lens(Ct(),u=>u.subject,(u,h)=>Gt(h,u.message,u.email,u.name,u.country)))),s),p=(d.h.push(new wt("contactmessagevar",T.Lens(Ct(),u=>u.message,(u,h)=>Gt(u.subject,h,u.email,u.name,u.country)))),d),b=(p.h.push(new wt("contactemailvar",T.Lens(Ct(),u=>u.email,(u,h)=>Gt(u.subject,u.message,h,u.name,u.country)))),p),w=(b.h.push(new wt("contactnamevar",T.Lens(Ct(),u=>u.name,(u,h)=>Gt(u.subject,u.message,u.email,h,u.country)))),b),f=(w.h.push(new wt("contactcountryvar",T.Lens(Ct(),u=>u.country,(u,h)=>Gt(u.subject,u.message,u.email,u.name,h)))),w),y=(f.h.push(new P("contactsendbuttonattr",Ya())),f),$=(y.h.push(new At("contactsendbuttontext",Ka())),y),_=($.h.push(rt($.k,"oncontactsendclick",()=>$.i,u=>{ti(u)})),$),k=Kt(_.k,_.h,[["contactsubjectvar",0,g("WebSharper support")],["contactmessagevar",0,null],["contactemailvar",0,null],["contactnamevar",0,null],["contactcountryvar",0,g("United States")]]),v=new xt(k[1],gi(k[0]));return(_.i=v,v).Doc}var xt=class extends U{doc;allVars;anchorRoot;SetAnchorRoot(t){this.anchorRoot=t}get Doc(){return this.doc}Hole(t){return this.allVars.Item(t)}constructor(t,r){super(),this.doc=r,this.allVars=t.$==0?t.$0:W("Should not happen"),this.anchorRoot=null}},K=class extends U{ForTextView(){return console.warn("Content hole filled with attribute data",this.Name),null}AddAttribute(t,r){console.warn("Var hole filled with non-Var data",this.Name)}get AsChoiceView(){return console.warn("Attribute value hole filled with non-text data",this.Name),ln("")}ApplyVarHole(t){console.warn("Not a var hole: ",this.Name)}},P=class e extends K{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},At=class e extends K{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(this.fillWith)}get AsChoiceView(){return Ot(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},yt=j(e=>class{static{yt=e(this)}static AccountHeaderText;static displayNameV;static hasAvatarV;static avatarSrcV;static isLoading;static isAuthedV;static userV;static isOpen;static{this.isOpen=T.Create_1(!1),this.userV=$a(),this.isAuthedV=Ca(),this.isLoading=T.Create_1(!0),this.avatarSrcV=C(r=>r!=null&&r.$==1?Zt(r.$0.avatarUrl)?"":r.$0.avatarUrl:"",xn()),this.hasAvatarV=C(r=>r!="",Pn()),this.displayNameV=C(r=>r==null||Zt(r.$0.login)?"Account":r.$0.login,xn()),this.AccountHeaderText=ba()}});function A(e,t){if(e===t)return!0;{let o=typeof e;if(o=="object"){if(e==null||t===null||t===void 0||!A(typeof t,"object"))return!1;if("Equals"in e)return e.Equals(t);if("Equals"in t)return!1;if(e instanceof Array&&t instanceof Array)return kn(e,t);if(e instanceof Date&&t instanceof Date)return _a(e,t);{let a=e,i=t,l=[!0],s;for(var r in a)if((d=>(l[0]=!a.hasOwnProperty(d)||i.hasOwnProperty(d)&&A(a[d],i[d]),!l[0]))(r))break;if(l[0]){let d;for(var n in i)if((p=>(l[0]=!i.hasOwnProperty(p)||a.hasOwnProperty(p),!l[0]))(n))break}return l[0]}}else return o=="function"&&("$Func"in e?e.$Func===t.$Func&&e.$Target===t.$Target:"$Invokes"in e&&"$Invokes"in t&&kn(e.$Invokes,t.$Invokes))}}function pe(e){let t=typeof e;return t=="function"?0:t=="boolean"?e?1:0:t=="number"?e:t=="string"?Fe(e):t=="object"?e==null?0:e instanceof Array?Na(e):Ta(e):t=="bigint"?Fe(String(e)):t=="symbol"?Fe(e.description):0}function Pt(e,t){if(e===t)return 0;{let o=typeof e;switch(o=="boolean"||o=="number"||o=="bigint"||o=="string"?1:o=="object"?2:o=="function"?3:o=="symbol"?4:0){case 0:return typeof t>"u"?0:-1;case 1:return e<t?-1:1;case 2:if(e===null)return-1;if(t===null)return 1;if("CompareTo"in e)return e.CompareTo(t);if("CompareTo0"in e)return e.CompareTo0(t);if(e instanceof Array&&t instanceof Array)return Va(e,t);if(e instanceof Date&&t instanceof Date)return Ea(e,t);{let a=e,i=t,l=[0],s;for(var r in a)if((d=>a.hasOwnProperty(d)?i.hasOwnProperty(d)?(l[0]=Pt(a[d],i[d]),l[0]!==0):(l[0]=1,!0):!1)(r))break;if(l[0]===0){let d;for(var n in i)if((p=>i.hasOwnProperty(p)?!a.hasOwnProperty(p)&&(l[0]=-1,!0):!1)(n))break}return l[0]}break;case 3:return W("Cannot compare function values.");case 4:return W("Cannot compare symbol values.")}}}function kn(e,t){let r,n;if(I(e)===I(t)){for(r=!0,n=0;r&&n<I(e);)A(S(e,n),S(t,n))||(r=!1),n=n+1;return r}else return!1}function _a(e,t){return e.getTime()===t.getTime()}function Fe(e){let t;if(e===null)return 0;t=5381;for(let r=0,n=e.length-1;r<=n;r++)t=Be(t,e[r].charCodeAt());return t}function Na(e){let t=-34948909;for(let r=0,n=I(e)-1;r<=n;r++)t=Be(t,pe(S(e,r)));return t}function Ta(e){if("GetHashCode"in e)return e.GetHashCode();{let r=[0],n;for(var t in e)if((o=>(r[0]=Be(Be(r[0],Fe(o)),pe(e[o])),!1))(t))break;return r[0]}}function Va(e,t){let r,n;if(I(e)<I(t))return-1;if(I(e)>I(t))return 1;for(r=0,n=0;r===0&&n<I(e);)r=Pt(S(e,n),S(t,n)),n=n+1;return r}function Ea(e,t){return Pt(e.getTime(),t.getTime())}function Be(e,t){return(e<<5)+e+t}function Ma(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]","g"),e=>{let t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}var ze=class e extends K{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.key,this.fillWith)}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}};function Ia(e){let t={},r=G(e);try{for(;r.MoveNext();){let n=r.Current;t[n[0]]=n[1]}}finally{let n=r;typeof n=="object"&&ot(n)&&r.Dispose()}return t}function ur(e){return globalThis.document.getElementById(e)}function yn(e){return"$"+String(e)}var Pe=class extends U{};function Nt(e,t){return nr(t,r=>n=>n?Fi(r,e):Bi(r,e))}function it(e,t){return nr(t,r=>n=>r.setAttribute(e,n))}function La(e,t){return nr(t,r=>n=>n?r.setAttribute(e,""):r.removeAttribute(e))}function Da(e,t){return Z.A3(r=>{r.addEventListener(e,n=>t(r)(n),!1)})}function $n(e){return Z.A4(e)}function Ga(e){return te(_o(),e)}function Fa(e){return te(No(),e)}function Ba(e){return te(To(),e)}function za(e){return te(Vo(),e)}function Pa(e){return te(Eo(),e)}function Ra(e){return te(Mo(),e)}function te(e,t){let r=e(t);return Yn(Z.A3(r[0]),Wa(r[1],r[2]))}function Wa(e,t){return nr(t,e)}function C(e,t){return ee(()=>re(e,t()))}function he(e){let t={s:Vt(e)};return()=>t}function ee(e){let t={c:null,o:e};return()=>{let r=t.c;if(r===null){r=t.o(),t.c=r;let n=r.s;return n!=null&&n.$==0?t.o=null:to(r,()=>{t.c=null}),r}else return r}}function jr(e,t,r){return ee(()=>or(e,t(),r()))}function Wn(e,t,r,n){return ee(()=>Ji(e,t(),r(),n()))}function Re(e,t){function r(){Zi(t(),e,()=>{Tt().Fork(r)})}Tt().Fork(r)}function Ua(e,t){return ja(C(e,t))}function qa(e,t){return Ha(r=>r,e,t)}function ge(e,t){return ee(()=>ol(e(),t()))}function Oa(e){return ee(()=>al(Ut(t=>t(),e)))}function ja(e){return ee(()=>ll(e()))}function Ha(e,t,r){let n=[new Q("New_5")];return C(o=>{let a=n[0],i=new Q("New_5"),l=dl(s=>{let d=e(s),p=a.ContainsKey(d)?a.Item(d):t(s);return i.set_Item(d,p),p},Rt(o));return n[0]=i,l},r)}var Z=class e{static Concat(t){let r=Ae(t);return Se(Kr(),(n,o)=>Yn(n,o),r)}static A1(t){return et(e,{$:1,$0:t})}static A2(t,r){return et(e,{$:2,$0:t,$1:r})}static HandlerImpl(t,r){return e.A3(n=>{n.addEventListener(t,o=>r(n)(o),!1)})}static Create(t,r){return e.A3(n=>{n.setAttribute(t,r)})}static A4(t){return et(e,{$:4,$0:t})}static A3(t){return et(e,{$:3,$0:t})}$;$0;$1};function Ka(){return Zr.ContactSendButtonText}function Ya(){return Zr.ContactSendButtonAttr}function Ja(){let e=C(t=>t.$==1?"false":"true",mt().View);return Z.Concat([it("data-active",e),it("aria-pressed",e)])}function Za(){let e=C(t=>t.$==1?"true":"false",mt().View);return Z.Concat([it("data-active",e),it("aria-pressed",e)])}function Qa(){mt().Set(vl)}function Xa(){mt().Set(ao)}function ti(e){e.Event.preventDefault();let t=Ct().Get();Un(t)?er(B(()=>(We().Set(!0),Hr(B(()=>R(di(t),r=>r?(alert("Message sent successfully!"),ei(),lt()):(alert("Failed to send message. Please try again later."),lt()))),()=>{We().Set(!1)}))),null):alert("Please fill in all required fields.")}function ei(){Ct().Set(Gt("WebSharper support","","","","United States"))}var T=j(e=>class extends U{static{T=e(this)}static Lens(r,n,o){let a=wl(),i=C(n,r.View);return new class extends Pe{constructor(){super()}Get(){return n(r.Get())}Set(l){return r.Update(s=>o(s,l))}SetFinal(l){return this.Set(l)}Update(l){return r.Update(s=>o(s,l(n(s))))}UpdateMaybe(l){return r.UpdateMaybe(s=>{let d=l(n(s));return d==null?null:g(o(s,d.$0))})}get View(){return i}get Id(){return a}}}static Create_1(r){return new Ar(!1,{s:ir(r,[])},r)}});function Ct(){return Wt.ContactFormVar}function kr(){return Wt.IsLoadingVar}function mt(){return Wt.intervalVar}function Un(e){return!Zt(e.message)&&!Zt(e.email)&&!Zt(e.name)&&ni(e.email)}function We(){return Wt.IsSendingVar}function ri(){return Wt.CanSendView}function qn(){return Wt.catalogVar}function ni(e){if(e==null)return!1;{let t=Kl(e);return t.indexOf("@")!=-1&&t.indexOf(".")!=-1}}function pr(e){return e.$==1?"year":"month"}function oi(e){let n=Pt(999,e)===-1?999:e;return Pt(1,n)===1?1:n}function Gt(e,t,r,n,o){return{subject:e,message:t,email:r,name:n,country:o}}function ai(){return oo.PlansGrid}function ii(e){let t,r=T.Create_1(1),n=C(h=>h.$==1?e.YearPrice:e.MonthPrice,mt().View),o=C(h=>h==null?"N/A":yn(h.$0.Amount),n),a=C(h=>(e.IsPerSeat?" / seat":"")+" / "+pr(h),mt().View),i=Wn((h,m,x)=>m==null?"-":yn(m.$0.Amount*x),mt().View,n,r.View),l=C(h=>"Total ("+pr(h)+"ly)",mt().View);if(e.IsPerSeat){let h=T.Lens(r,String,(z,J)=>{let M,O=(M=0,[yo(J,{get:()=>M,set:tt=>{M=tt}}),M]);return O[0]?O[1]:z}),m=new St("New_1"),x=(m.h.push(new wt("seatcount",h)),m),N=(x.h.push(rt(x.k,"onseatminus",()=>x.i,()=>{r.Get()>1&&r.Set(r.Get()-1)})),x),L=(N.h.push(rt(N.k,"onseatplus",()=>N.i,()=>{r.Set(r.Get()+1)})),N),V=Kt(L.k,L.h,[["seatcount",0,null]]),D=new xt(V[1],bi(V[0]));t=(L.i=D,D).Doc}else{let h=new St("New_1"),m=Kt(h.k,h.h,[]),x=new xt(m[1],mi(m[0]));t=(h.i=x,x).Doc}let s=it("href",jr((h,m)=>"./checkout?plan="+String(e.Id)+"&interval="+String(pr(h))+"&seats="+String(oi(m)),mt().View,r.View)),d=new St("New_1"),p=(d.h.push(new Ce("name",e.Name)),d),b=(p.h.push(new Ce("description",e.Description)),p),w=(b.h.push(new At("priceamount",o)),b),f=(w.h.push(new At("pricelabel",a)),w),y=(f.h.push(new ve("seatselector",t)),f),$=(y.h.push(new At("totallabel",l)),y),_=($.h.push(new At("totalamount",i)),$),k=(_.h.push(new P("checkoutattr",s)),_),v=Kt(k.k,k.h,[]),c=new xt(v[1],fi(v[0]));return(k.i=c,c).Doc}function li(){return B(()=>(kr().Set(!0),Hr(B(()=>R(si(),e=>(e==null||ci(e.$0),lt()))),()=>{kr().Set(!1)})))}function si(){return B(()=>{let e=ui();return e==null?R(pi(),t=>{let r;return t!=null&&t.$==1&&I(t.$0)>0&&(r=t.$0,!0)?(hi(r),q(g(r))):q(null)}):q(g(e.$0))})}function ci(e){qn().Set(fo(bo(El(t=>{let r=t.YearPrice;return r!=null&&r.$==1?r.$0.Amount:0},ut(t=>{let r=t[1],n=S(r,0),o=l=>{let s=Vl(d=>d.interval==l,r);if(s==null)return null;{let d=s.$0,p=ns(d.unitAmountCents/100,d.currency.toUpperCase());return g(p)}},a=n.description,i=a==null?"":a.$0;return os(t[0],n.name,i,n.isPerSeat,n.maxSeats,o("month"),o("year"))},ms(t=>t.code.toLowerCase(),e))))))}function di(e){return B(()=>{let t=new FormData;return t.append("subject",e.subject),t.append("message",e.message),t.append("email",e.email),t.append("name",e.name),t.append("country",e.country),we(B(()=>{let r;return R(as(globalThis.fetch("https://api.intellifactory.com/api/contact",(r={},r.method="POST",r.body=t,r))),n=>q(n.ok))}),()=>q(!1))})}function ui(){try{let e=globalThis.sessionStorage.getItem("planprices");return e==null||Zt(e)?null:g(JSON.parse(e))}catch{return null}}function pi(){return B(()=>we(B(()=>R(Ti(),e=>q(g(e)))),()=>q(null)))}function hi(e){try{let t=JSON.stringify(e);globalThis.sessionStorage.setItem("planprices",t)}catch{}}function g(e){return{$:1,$0:e}}var hr;var gr;function gi(e){return e?Ne("support",g("content"),()=>pt(`\r
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
                <div class="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2" ws-hole="PlansGrid">\r
                </div>\r
\r
                \r
\r
                \r
\r
                \r
\r
                \r
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
    `),e):ae("support",g("content"),()=>pt(`\r
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
                <div class="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2" ws-hole="PlansGrid">\r
                </div>\r
\r
                \r
\r
                \r
\r
                \r
\r
                \r
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
    `))}function wi(){return hr||(hr=ws(void 0,"$",[null,[1,[["$0","Value",bt(),0]]]])())}function vi(e){return e?Ne("support",g("skeletoncard"),()=>pt(`<div>\r
                    <div class="rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200 dark:bg-gray-950 dark:border-gray-800 h-full animate-pulse">\r
                        <div class="flex items-start justify-between gap-4">\r
                            <div>\r
                                <div class="h-4 w-12 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                                <div class="mt-2 h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                                <div class="mt-2 h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                            </div>\r
                            <div class="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>\r
                        </div>\r
\r
                        <div class="mt-6 flex items-center justify-between">\r
                            <div class="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                            <div class="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                        </div>\r
\r
                        <div class="mt-6 w-full h-10 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>\r
\r
                        <div class="mt-4 mx-auto h-3 w-40 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                    </div>\r
                </div>`),e):ae("support",g("skeletoncard"),()=>pt(`<div>\r
                    <div class="rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200 dark:bg-gray-950 dark:border-gray-800 h-full animate-pulse">\r
                        <div class="flex items-start justify-between gap-4">\r
                            <div>\r
                                <div class="h-4 w-12 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                                <div class="mt-2 h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                                <div class="mt-2 h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                            </div>\r
                            <div class="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>\r
                        </div>\r
\r
                        <div class="mt-6 flex items-center justify-between">\r
                            <div class="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                            <div class="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                        </div>\r
\r
                        <div class="mt-6 w-full h-10 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>\r
\r
                        <div class="mt-4 mx-auto h-3 w-40 bg-gray-200 dark:bg-gray-800 rounded"></div>\r
                    </div>\r
                </div>`))}function fi(e){return e?Ne("support",g("plancard"),()=>pt(`<div>\r
                    <div class="rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r
                dark:bg-gray-950 dark:border-gray-800 flex flex-col h-full relative">\r
\r
                        <div class="flex-1">\r
                            <div class="flex items-start justify-between gap-4">\r
                                <div>\r
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Plan</div>\r
                                    <div class="text-2xl font-bold text-gray-950 dark:text-white">\${Name}</div>\r
                                    <div class="mt-1 text-base text-gray-700 dark:text-gray-300">\r
                                        <span ws-hole="PriceAmount"></span>\r
                                        <span class="text-gray-600 dark:text-gray-400" ws-hole="PriceLabel"></span>\r
                                    </div>\r
                                </div>\r
\r
                                <div ws-hole="SeatSelector"></div>\r
                            </div>\r
\r
                            <div class="mt-4 flex items-center justify-between">\r
                                <div class="text-sm text-gray-600 dark:text-gray-400" ws-hole="TotalLabel"></div>\r
                                <div class="text-xl font-semibold text-gray-950 dark:text-white" ws-hole="TotalAmount"></div>\r
                            </div>\r
                        </div>\r
\r
                        <a ws-attr="CheckoutAttr" class="cursor-pointer w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                  flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                  mt-4 hover:opacity-90 transition-opacity">\r
                            <span class="relative text-sm">Continue to checkout</span>\r
                        </a>\r
\r
                        <p class="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center">\${Description}</p>\r
                    </div>\r
                </div>`),e):ae("support",g("plancard"),()=>pt(`<div>\r
                    <div class="rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r
                dark:bg-gray-950 dark:border-gray-800 flex flex-col h-full relative">\r
\r
                        <div class="flex-1">\r
                            <div class="flex items-start justify-between gap-4">\r
                                <div>\r
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Plan</div>\r
                                    <div class="text-2xl font-bold text-gray-950 dark:text-white">\${Name}</div>\r
                                    <div class="mt-1 text-base text-gray-700 dark:text-gray-300">\r
                                        <span ws-hole="PriceAmount"></span>\r
                                        <span class="text-gray-600 dark:text-gray-400" ws-hole="PriceLabel"></span>\r
                                    </div>\r
                                </div>\r
\r
                                <div ws-hole="SeatSelector"></div>\r
                            </div>\r
\r
                            <div class="mt-4 flex items-center justify-between">\r
                                <div class="text-sm text-gray-600 dark:text-gray-400" ws-hole="TotalLabel"></div>\r
                                <div class="text-xl font-semibold text-gray-950 dark:text-white" ws-hole="TotalAmount"></div>\r
                            </div>\r
                        </div>\r
\r
                        <a ws-attr="CheckoutAttr" class="cursor-pointer w-full rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                  flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                  mt-4 hover:opacity-90 transition-opacity">\r
                            <span class="relative text-sm">Continue to checkout</span>\r
                        </a>\r
\r
                        <p class="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center">\${Description}</p>\r
                    </div>\r
                </div>`))}function bi(e){return e?Ne("support",g("seatwidget"),()=>pt(`<div>\r
                    <div class="flex items-center gap-2">\r
                        <button ws-onclick="OnSeatMinus" class="cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10" type="button">-</button>\r
                        <input type="text" ws-var="SeatCount" class="w-20 text-center rounded-xl border border-gray-300 bg-transparent dark:border-white/20 text-gray-900 dark:text-white h-10" readonly="">\r
                        <button ws-onclick="OnSeatPlus" class="cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10" type="button">+</button>\r
                    </div>\r
                </div>`),e):ae("support",g("seatwidget"),()=>pt(`<div>\r
                    <div class="flex items-center gap-2">\r
                        <button ws-onclick="OnSeatMinus" class="cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10" type="button">-</button>\r
                        <input type="text" ws-var="SeatCount" class="w-20 text-center rounded-xl border border-gray-300 bg-transparent dark:border-white/20 text-gray-900 dark:text-white h-10" readonly="">\r
                        <button ws-onclick="OnSeatPlus" class="cursor-pointer h-10 w-10 rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10" type="button">+</button>\r
                    </div>\r
                </div>`))}function mi(e){return e?Ne("support",g("staticseatbadge"),()=>pt(`<div>\r
                    <div class="rounded-xl border border-gray-300 px-3 h-10 flex items-center text-gray-800 dark:border-white/20 dark:text-white bg-gray-50 dark:bg-white/5">\r
                        1 seat\r
                    </div>\r
                </div>`),e):ae("support",g("staticseatbadge"),()=>pt(`<div>\r
                    <div class="rounded-xl border border-gray-300 px-3 h-10 flex items-center text-gray-800 dark:border-white/20 dark:text-white bg-gray-50 dark:bg-white/5">\r
                        1 seat\r
                    </div>\r
                </div>`))}function xi(){return gr||(gr=bs(void 0,[["code",bt(),0],["name",bt(),0],["description",bt(),1],["isPerSeat",bt(),0],["maxSeats",bt(),1],["interval",bt(),0],["currency",bt(),0],["unitAmountCents",bt(),0]])())}function B(e){return t=>{try{e()(t)}catch(r){t.k(ar(r))}}}function R(e,t){return yi(r=>{e(Ee(n=>{if(n.$==0){let o=n.$0;Tt().Fork(()=>{try{t(o)(r)}catch(a){r.k(ar(a))}})}else Tt().Fork(()=>{r.k(n)})},r.ct))})}function q(e){return t=>{t.k(Me(e))}}function er(e,t){let r=On()[0],n=t==null?r:t.$0;n.c||e(Ee(o=>{o.$==1&&jn(o.$0)},n))}function ki(e){return t=>{let r,n;r=void 0,n=void 0,r=setTimeout(()=>{n.Dispose(),Tt().Fork(()=>{t.k(Me(null))})},e),n=Hn(t.ct,()=>{clearTimeout(r),Tt().Fork(()=>{Kn(t)})})}}function lt(){return ie.Zero}function yi(e){return t=>{t.ct.c?Kn(t):e(t)}}function $i(e,t){return R(e,()=>t)}function we(e,t){return r=>{e(Ee(n=>{if(n.$==0)r.k(Me(n.$0));else if(n.$==1){let o=n.$0;try{t(o)(r)}catch{r.k(n)}}else r.k(n)},r.ct))}}function On(){return ie.defCTS}function jn(e){console.log("WebSharper: Uncaught asynchronous exception",e)}function Hr(e,t){return r=>{e(Ee(n=>{try{t(),r.k(n)}catch(o){r.k(ar(o))}},r.ct))}}function Hn(e,t){if(e===Ci())return{Dispose(){return null}};{let r=e.r.push(t)-1;return{Dispose(){return Or(e.r,r,()=>{})}}}}function Kn(e){e.k(vo(new Ze("New",e.ct)))}function Tt(){return ie.scheduler}function Ci(){return ie.noneCT}function rr(e){return t=>{let r=[!1],n=o=>{r[0]?W("A continuation provided by Async.FromContinuations was invoked multiple times"):(r[0]=!0,Tt().Fork(o))};e(o=>{n(()=>{t.k(Me(o))})},o=>{n(()=>{t.k(ar(o))})},o=>{n(()=>{t.k(vo(o))})})}}function Ai(e,t){let r=On()[0],n=t==null?r:t.$0;Tt().Fork(()=>{n.c||e(Ee(o=>{o.$==1&&jn(o.$0)},n))})}function Si(){return ie.GetCT}function _i(){return new xe().Async("IRemotingContract/Logout",[])}function Ni(){return R(new xe().Async("IRemotingContract/Me",[]),e=>q(wi()(e)))}function Ti(){return R(new xe().Async("IRemotingContract/GetPlanPrices",[]),e=>q(vs(xi)()(e)))}function nr(e,t){return Z.A1(new _r(e,t))}function Yn(e,t){if(e===null)return t;if(t===null)return e;{let r=Z.A2(e,t);return Vi(r,yr(e)|yr(t)),r}}function Kr(){return F.EmptyAttr}function Vi(e,t){e.flags=t}function yr(e){return e!==null&&e.hasOwnProperty("flags")?e.flags:0}function Yr(e,t){let r=[],n=[];function o(l){for(;;)if(l!==null){if(l!=null&&l.$==1)return r.push(l.$0);if(l!=null&&l.$==2){let s=l.$1,d=l.$0;o(d),l=s}else return l!=null&&l.$==3?l.$0(e):l!=null&&l.$==4?n.push(l.$0):null}else return null}o(t);let a=r.slice(0);return $o(e,yr(t),a,n.length===0?null:g(l=>{yl(s=>{s(l)},n)}))}function Jn(e){return cl(t=>t.NChanged,he(),ge,e.DynNodes)}function wr(e){return $o(e,0,[],null)}function Ei(e){return(e.DynFlags&2)===2}function Mi(e){return Jr(e,(t,r)=>t.NGetExitAnim(r))}function Ii(e){return(e.DynFlags&1)===1}function Li(e){return Jr(e,(t,r)=>t.NGetEnterAnim(r))}function Di(e){return(e.DynFlags&4)===4}function Gi(e){return Jr(e,(t,r)=>t.NGetChangeAnim(r))}function Jr(e,t){return lr(ut(r=>t(r,e.DynElem),e.DynNodes))}function Zn(e,t){X(r=>{r.NSync(e)},t.DynNodes)}function Fi(e,t){let r=Qn(e);r==""?$r(e,t):Xn(t).test(r)||$r(e,r+" "+t)}function Bi(e,t){let r=Xn(t),n=Qn(e).replace(r,(o,a,i)=>a==""||i==""?"":" ");$r(e,n)}function Qn(e){return e instanceof SVGElement?e.getAttribute("class"):e.className}function $r(e,t){e instanceof SVGElement?e.setAttribute("class",t):e.className=t}function Xn(e){return new RegExp("(\\s+|^)"+e+"(?:\\s+"+e+")*(\\s+|$)","g")}function pt(e){let t=globalThis.document.createElement("div");if(zi().test(e)){let i=function(l,s){for(;;){if(s===0)return l;{let d=s;l=l.lastChild,s=d-1}}},r=Ui().exec(e),n=A(r,null)?"":S(r,1).toLowerCase(),o=Pi()[n],a=o||Ri();return t.innerHTML=a[1]+e.replace(Wi(),"<$1></$2>")+a[2],(l=>{let s=l;return d=>i(s,d)})(t)(a[0])}else return t.appendChild(globalThis.document.createTextNode(e)),t}function zi(){return le.rhtml}function Pi(){return le.wrapMap}function Ri(){return le.defaultWrap}function Wi(){return le.rxhtmlTag}function Ui(){return le.rtagName}function qi(e,t,r){let n=e.querySelectorAll(t);for(let o=0,a=n.length-1;o<=a;o++)r(n[o])}function Cn(e){let t=[];for(let r=0,n=e.childNodes.length-1;r<=n;r++)t.push(e.childNodes[r]);return t}function Oi(e,t){let r=globalThis.document.querySelectorAll(e);for(let n=0,o=r.length-1;n<=o;n++)t(r[n])}function ji(e,t,r){let n;if(r.parentNode===e){let o=r.nextSibling,a=A(o,null)?null:o;n=t===a}else n=!1;n||e.insertBefore(r,t)}function Hi(e,t){t.parentNode===e&&e.removeChild(t)}function re(e,t){let r=t.s;if(r!=null&&r.$==0)return{s:Vt(e(r.$0))};{let n={s:qt([],[])};return st(t,o=>{eo(n,t,e(o))},n),n}}function to(e,t){let r=e.s;r==null?t():r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,r.$1.push(t)):r.$0}function st(e,t,r){let n=e.s;if(n==null)ke(r);else if(n!=null&&n.$==2){let o=n.$0;Ue(n.$1,r),t(o)}else if(n!=null&&n.$==3){let o=n.$1;n.$0.push(t),Ue(o,r)}else t(n.$0)}function eo(e,t,r){let n=t.s;n!=null&&n.$==0?ne(e,r):oe(e,r)}function Ue(e,t){if(e.push(t),e.length%20===0){let r=e.slice(0);vc(e);for(let n=0,o=I(r)-1;n<=o;n++){let a=S(r,n);typeof a=="object"?(i=>{i.s&&e.push(i)})(a):(i=>{e.push(i)})(a)}}}function ne(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$0;e.s=Vt(t);for(let o=0,a=I(n)-1;o<=a;o++)S(n,o)(t)}}function oe(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$1,o=r.$0;e.s=ir(t,n);for(let a=0,i=I(o)-1;a<=i;a++)S(o,a)(t)}}function or(e,t,r){let n=t.s,o=r.s;if(n!=null&&n.$==0)return o!=null&&o.$==0?{s:Vt(e(n.$0,o.$0))}:Ki(e,n.$0,r);if(o!=null&&o.$==0)return Yi(e,o.$0,t);{let a={s:qt([],[])},i=()=>{let l=a.s;if(!(l!=null&&l.$==0||l!=null&&l.$==2)){let s=Ft(t),d=Ft(r);s!=null&&s.$==1&&d!=null&&d.$==1&&(s.$0[1]&&d.$0[1]?ne(a,e(s.$0[0],d.$0[0])):oe(a,e(s.$0[0],d.$0[0])))}};return st(t,i,a),st(r,i,a),a}}function Ki(e,t,r){return re(n=>e(t,n),r)}function Yi(e,t,r){return re(n=>e(n,t),r)}function Ft(e){let t=e.s;return t!=null&&t.$==0?g([t.$0,!0]):t!=null&&t.$==2?g([t.$0,!1]):null}function Ji(e,t,r,n){let o=t.s,a=r.s,i=n.s;if(o!=null&&o.$==0)return a!=null&&a.$==0?i!=null&&i.$==0?{s:Vt(e(o.$0,a.$0,i.$0))}:Qi(e,o.$0,a.$0,n):i!=null&&i.$==0?Xi(e,o.$0,i.$0,r):tl(e,o.$0,r,n);if(a!=null&&a.$==0)return i!=null&&i.$==0?el(e,a.$0,i.$0,t):rl(e,a.$0,t,n);if(i!=null&&i.$==0)return nl(e,i.$0,t,r);{let l={s:qt([],[])},s=()=>{let d=l.s;if(!(d!=null&&d.$==0||d!=null&&d.$==2)){let p=Ft(t),b=Ft(r),w=Ft(n);p!=null&&p.$==1&&b!=null&&b.$==1&&w!=null&&w.$==1&&(p.$0[1]&&b.$0[1]&&w.$0[1]?ne(l,e(p.$0[0],b.$0[0],w.$0[0])):oe(l,e(p.$0[0],b.$0[0],w.$0[0])))}};return st(t,s,l),st(r,s,l),st(n,s,l),l}}function Zi(e,t,r){let n=e.s;if(n==null)r();else if(n!=null&&n.$==2){let o=n.$0;n.$1.push(r),t(o)}else if(n!=null&&n.$==3){let o=n.$1;n.$0.push(t),o.push(r)}else t(n.$0)}function Qi(e,t,r,n){return re(o=>e(t,r,o),n)}function Xi(e,t,r,n){return re(o=>e(t,o,r),n)}function tl(e,t,r,n){return or((o,a)=>e(t,o,a),r,n)}function el(e,t,r,n){return re(o=>e(o,t,r),n)}function rl(e,t,r,n){return or((o,a)=>e(o,t,a),r,n)}function nl(e,t,r,n){return or((o,a)=>e(o,a,t),r,n)}function ol(e,t){let r=e.s,n=t.s;if(r!=null&&r.$==0)return n!=null&&n.$==0?{s:Vt(null)}:t;if(n!=null&&n.$==0)return e;{let o={s:qt([],[])},a=()=>{let i=o.s;if(!(i!=null&&i.$==0||i!=null&&i.$==2)){let l=Ft(e),s=Ft(t);l!=null&&l.$==1&&s!=null&&s.$==1&&(l.$0[1]&&s.$0[1]?ne(o,null):oe(o,null))}};return st(e,a,o),st(t,a,o),o}}function al(e){let t=Rt(e);if(t.length==0)return{s:Vt([])};{let r={s:qt([],[])},n=[I(t)-1],o=()=>{if(n[0]===0){let a=ut(i=>{let l=i.s;return l!=null&&l.$==0||l!=null&&l.$==2?l.$0:W("value not found by View.Sequence")},t);co(i=>{let l=i.s;return l!=null&&l.$==0},t)?ne(r,a):oe(r,a)}else n[0]=n[0]-1};return X(a=>{st(a,o,r)},t),r}}function il(e){let t=e.s;if(t==null)return e;if(t!=null&&t.$==2){let r={s:ir(t.$0,[])};return sl(e,r),r}else if(t!=null&&t.$==3){let r={s:qt([],[])};return st(e,n=>{eo(r,e,n)},r),r}else return e}function ll(e){let t={s:qt([],[])};return st(e,r=>{let n=r();st(n,o=>{let a,i=n.s;if(i!=null&&i.$==0){let l=e.s;a=l!=null&&l.$==0}else a=!1;a?ne(t,o):oe(t,o)},t)},t),t}function sl(e,t){let r=e.s;r==null?ke(t):r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,Ue(r.$1,t)):r.$0}function Ae(e){if(e instanceof Array)return e;if(e instanceof ct)return lo(e);if(e===null)return[];{let t=[],r=G(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&ot(n)&&r.Dispose()}}}function Se(e,t,r){let n=I(r);function o(a){return i=>{let l;switch(i<=0?0:i===1&&a>=0&&a<n?1:(l=i,2)){case 0:return e;case 1:return S(r,a);case 2:let s=i/2>>0;return t(o(a)(s),o(a+s)(i-s))}}}return o(0)(n)}function cl(e,t,r,n){let o=I(n);function a(i){return l=>{let s;switch(l<=0?0:l===1&&i>=0&&i<o?1:(s=l,2)){case 0:return t;case 1:return e(S(n,i));case 2:let d=l/2>>0;return r(a(i)(d),a(i+d)(l-d))}}}return a(0)(o)}function dl(e,t){for(let r=0,n=t.length-1;r<=n;r++)t[r]=e(t[r]);return t}function ro(e){return{$:6,$0:e}}function ul(e){return{$:2,$0:e}}function pl(e,t){return{$:0,$0:e,$1:t}}function hl(e){return{$:5,$0:e}}function gl(e){return{$:4,$0:e}}var Zr=j(e=>class{static{Zr=e(this)}static ContactSendButtonText;static ContactSendButtonAttr;static{this.ContactSendButtonAttr=La("disabled",jr((r,n)=>!r||n,ri(),We().View)),this.ContactSendButtonText=C(r=>r?"Sending...":"Send",We().View)}}),wt=class e extends K{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(this.fillWith.View)}AddAttribute(t,r){t(r)(Ga(this.fillWith))}get AsChoiceView(){return Ot(C(String,this.fillWith.View))}ApplyVarHole(t){se(_o(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function wl(){return no(qe()+1),"uid"+String(qe())}function no(e){en.counter=e}function qe(){return en.counter}function Jt(){return no(qe()+1),qe()}var Wt=j(e=>class{static{Wt=e(this)}static CanSendView;static IsSendingVar;static ContactFormVar;static intervalVar;static catalogVar;static IsLoadingVar;static{this.IsLoadingVar=T.Create_1(!0),this.catalogVar=T.Create_1(fo(ct.Empty)),this.intervalVar=T.Create_1(ao),this.ContactFormVar=T.Create_1(Gt("WebSharper support","","","","United States")),this.IsSendingVar=T.Create_1(!1),this.CanSendView=C(Un,Ct().View)}}),ve=class e extends K{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},oo=j(e=>class{static{oo=e(this)}static PlansGrid;static{let r=nt.Concat(ts(()=>{let a=new St("New_1"),i=Kt(a.k,a.h,[]),l=new xt(i[1],vi(i[0]));return(a.i=l,l).Doc},bo([1,2]))),n=nt.Convert(ii,C(a=>a.Plans,qn().View)),o=nt.EmbedView(C(a=>a?r:n,kr().View));this.PlansGrid=o}}),Oe=class e extends K{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.key,this.fillWith)}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}},vl={$:0},ao={$:1},Q=class extends U{equals;hash;count;data;set_Item(t,r){this.set(t,r)}set(t,r){let n=this.hash(t),o=this.data[n];if(o==null)this.count=this.count+1,this.data[n]=new Array({K:t,V:r});else{let a=Xr(i=>this.equals.apply(null,[Dt(i)[0],t]),o);a==null?(this.count=this.count+1,o.push({K:t,V:r})):o[a.$0]={K:t,V:r}}}TryGetValue(t,r){let n=this.data[this.hash(t)];if(n==null)return!1;{let o=so(a=>{let i=Dt(a);return this.equals.apply(null,[i[0],t])?g(i[1]):null},n);return o!=null&&o.$==1&&(r.set(o.$0),!0)}}ContainsKey(t){let r=this.data[this.hash(t)];return r==null?!1:Cr(n=>this.equals.apply(null,[Dt(n)[0],t]),r)}GetEnumerator(){return cs(Ll(ta(this.data)))}Item(t){return this.get(t)}get Values(){return new zr(this)}DAdd(t,r){this.add(t,r)}RemoveKey(t){return this.remove(t)}get Keys(){return new Rr(this)}get(t){let r=this.data[this.hash(t)];return r==null?ls():Dl(n=>{let o=Dt(n);return this.equals.apply(null,[o[0],t])?g(o[1]):null},r)}add(t,r){let n=this.hash(t),o=this.data[n];o==null?(this.count=this.count+1,this.data[n]=new Array({K:t,V:r})):(Cr(a=>this.equals.apply(null,[Dt(a)[0],t]),o)&&ss(),this.count=this.count+1,o.push({K:t,V:r}))}remove(t){let r=this.hash(t),n=this.data[r];if(n==null)return!1;{let o=_e(a=>!this.equals.apply(null,[Dt(a)[0],t]),n);return I(o)<n.length&&(this.count=this.count-1,this.data[r]=o,!0)}}constructor(t,r,n,o){if(t=="New_5"&&(t="New_6",r=[],n=A,o=pe),t=="New_6"){let a=r,i=n,l=o;super(),this.equals=i,this.hash=l,this.count=0,this.data=[];let s=G(a);try{for(;s.MoveNext();){let d=s.Current;this.set(d.K,d.V)}}finally{let d=s;typeof d=="object"&&ot(d)&&s.Dispose()}}}},dt=class e extends U{equals;hash;data;count;SAdd(t){return this.add(t)}Contains(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrContains(t,r)}add(t){let r=this.hash(t),n=this.data[r];return n==null?(this.data[r]=[t],this.count=this.count+1,!0):this.arrContains(t,n)?!1:(n.push(t),this.count=this.count+1,!0)}arrContains(t,r){let n=!0,o=0,a=r.length;for(;n&&o<a;)this.equals.apply(null,[r[o],t])?n=!1:o=o+1;return!n}GetEnumerator(){return G(fr(this.data))}ExceptWith(t){let r=G(t);try{for(;r.MoveNext();)this.Remove(r.Current)}finally{let n=r;typeof n=="object"&&ot(n)&&r.Dispose()}}get Count(){return this.count}IntersectWith(t){let r=new e("New_4",t,this.equals,this.hash),n=fr(this.data);for(let o=0,a=n.length-1;o<=a;o++){let i=n[o];r.Contains(i)||this.Remove(i)}}Remove(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrRemove(t,r)&&(this.count=this.count-1,!0)}CopyTo(t,r){let n=fr(this.data);for(let o=0,a=n.length-1;o<=a;o++)Or(t,o+r,n[o])}arrRemove(t,r){let n=!0,o=0,a=r.length;for(;n&&o<a;)this.equals.apply(null,[r[o],t])?(r.splice(o,1),n=!1):o=o+1;return!n}constructor(t,r,n,o){t=="New_3"&&(t="New_4",r=[],n=A,o=pe);let a;if(t=="New_2"&&(a=r,t="New_4",r=a,n=A,o=pe),t=="New_4"){let i=r,l=n,s=o;super(),this.equals=l,this.hash=s,this.data=[],this.count=0;let d=G(i);try{for(;d.MoveNext();)this.add(d.Current)}finally{let p=d;typeof p=="object"&&ot(p)&&d.Dispose()}}}};function io(e,t){return{GetEnumerator:()=>{let r=G(e),n=[!0];return new ht(r,null,o=>{if(o.s.MoveNext())return o.c=o.s.Current,!0;{let a=o.s;return A(a,null)||a.Dispose(),o.s=null,n[0]&&(n[0]=!1,o.s=G(t),o.s.MoveNext()?(o.c=o.s.Current,!0):(o.s.Dispose(),o.s=null,!1))}},o=>{let a=o.s;A(a,null)||a.Dispose()})}}}function An(e){return{GetEnumerator:()=>G(e())}}function fl(e,t){return xl(Ut(e,t))}function Ut(e,t){return{GetEnumerator:()=>{let r=G(t);return new ht(null,null,n=>r.MoveNext()&&(n.c=e(r.Current),!0),()=>{r.Dispose()})}}}function bl(e){let t=G(e);try{return t.MoveNext()?t.Current:Vr()}finally{let r=t;typeof r=="object"&&ot(r)&&t.Dispose()}}function ml(e,t,r){let n=t,o=G(r);try{for(;o.MoveNext();)n=e(n,o.Current);return n}finally{let a=o;typeof a=="object"&&ot(a)&&o.Dispose()}}function xl(e){return{GetEnumerator:()=>{let t=G(e);function r(n){for(;;){let o=n.s;if(A(o,null))if(t.MoveNext())n.s=G(t.Current),n=n;else return t.Dispose(),!1;else{if(o.MoveNext())return n.c=o.Current,!0;n.Dispose(),n.s=null,n=n}}}return new ht(null,null,r,n=>{let o=n.s;A(o,null)||o.Dispose();let a=t;A(a,null)||a.Dispose()})}}}function kl(e,t){return $l(e,Cl(t))}function yl(e,t){let r=G(t);try{for(;r.MoveNext();)e(r.Current)}finally{let n=r;typeof n=="object"&&ot(n)&&r.Dispose()}}function $l(e,t){return e<0&&ys(),{GetEnumerator:()=>{let r=[G(t)];return new ht(0,null,n=>{if(n.s=n.s+1,n.s>e)return!1;{let o=r[0];return A(o,null)?Vr():o.MoveNext()?(n.c=o.Current,n.s===e&&(o.Dispose(),r[0]=null),!0):(o.Dispose(),r[0]=null,Vr())}},()=>{let n=r[0];A(n,null)||n.Dispose()})}}}function Cl(e){return{GetEnumerator:()=>new ht(0,null,t=>(t.c=e(t.s),t.s=t.s+1,!0),void 0)}}function Al(e,t){return!Sl(r=>!e(r),t)}function Sl(e,t){let r=G(t);try{let n=!1;for(;!n&&r.MoveNext();)n=e(r.Current);return n}finally{let n=r;typeof n=="object"&&ot(n)&&r.Dispose()}}function _l(e){let t=G(e);try{t.MoveNext()||Tl();let r=t.Current;for(;t.MoveNext();){let n=t.Current;Pt(n,r)===1&&(r=n)}return r}finally{let r=t;typeof r=="object"&&ot(r)&&t.Dispose()}}function Nl(e,t){return{GetEnumerator:()=>{let r=G(t),n=new dt("New_3");return new ht(null,null,o=>{let a,i;if(r.MoveNext()){for(a=r.Current,i=n.SAdd(e(a));!i&&r.MoveNext();)a=r.Current,i=n.SAdd(e(a));return i&&(o.c=a,!0)}else return!1},()=>{r.Dispose()})}}}function Tl(){return W("The input sequence was empty.")}function Qr(e,t){let r=[];for(let n=0,o=t.length-1;n<=o;n++){let a=e(t[n]);a==null||r.push(a.$0)}return r}function lo(e){let t=[],r=e;for(;r.$!=0;)t.push(es(r)),r=rs(r);return t}function ut(e,t){let r=new Array(t.length);for(let n=0,o=t.length-1;n<=o;n++)r[n]=e(t[n]);return r}function Vl(e,t){let r=null,n=0;for(;n<t.length&&r==null;)e(t[n])&&(r=g(t[n])),n=n+1;return r}function El(e,t){return ut(r=>r[0],Ml((r,n)=>[n,[e(n),r]],t).sort((r,n)=>Pt(r[1],n[1])))}function Ml(e,t){let r=new Array(t.length);for(let n=0,o=t.length-1;n<=o;n++)r[n]=e(n,t[n]);return r}function Xr(e,t){let r=null,n=0;for(;n<t.length&&r==null;)e(t[n])&&(r=g(n)),n=n+1;return r}function so(e,t){let r=null,n=0;for(;n<t.length&&r==null;){let o=e(t[n]);o!=null&&o.$==1&&(r=o),n=n+1}return r}function Il(e,t){let r=Xr(e,t);return r==null?W("KeyNotFoundException"):r.$0}function X(e,t){for(let r=0,n=t.length-1;r<=n;r++)e(t[r])}function Cr(e,t){let r=!1,n=0,o=I(t);for(;!r&&n<o;)e(t[n])?r=!0:n=n+1;return r}function Ll(e){return Array.prototype.concat.apply([],Rt(e))}function _e(e,t){let r=[];for(let n=0,o=t.length-1;n<=o;n++)e(t[n])&&r.push(t[n]);return r}function tn(e,t,r){let n=r,o=t.length;for(let a=1,i=o;a<=i;a++)n=e(t[o-a],n);return n}function Rt(e){if(e instanceof Array)return e.slice();if(e instanceof ct)return lo(e);{let t=[],r=G(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&ot(n)&&r.Dispose()}}}function Dl(e,t){let r=so(e,t);return r==null?W("KeyNotFoundException"):r.$0}function Gl(e,t){return Rt(Nl(e,t))}function co(e,t){let r=!0,n=0,o=I(t);for(;r&&n<o;)e(t[n])?n=n+1:r=!1;return r}function Fl(e,t){let r=new Array(e);for(let n=0,o=e-1;n<=o;n++)r[n]=t;return r}function Bl(e,t){e<0&&W("Negative size given.");let r=new Array(e);for(let n=0,o=e-1;n<=o;n++)r[n]=t(n);return r}var Y=j(e=>class extends U{static{Y=e(this)}static init;id;vars;static initialized;static instances;static GetOrAddHoleFor(r,n,o){let a,i=Y.GetHolesFor(r),l=(a=null,[i.TryGetValue(n,{get:()=>a,set:s=>{a=s}}),a]);if(l[0])return l[1];{let s=o();return i.set_Item(n,s),s}}static GetHolesFor(r){let n,o=(n=null,[Y.initialized.TryGetValue(r,{get:()=>n,set:a=>{n=a}}),n]);if(o[0])return o[1];{let a=new Q("New_5");return Y.initialized.set_Item(r,a),a}}static applyVarHole(r,n){n.ApplyVarHole(r)}InitInstance(r){let n=Y.GetHolesFor(r),o=this.vars;for(let i=0,l=o.length-1;i<=l;i++)(()=>{let s,d=S(o,i),p=d[1],b=d[2],w=d[0];if(n.ContainsKey(w))return null;if(p===0){let f=b==null?null:g(b.$0),y=f==null?"":f.$0,$=T.Create_1(y);s=new wt(w,$)}else if(p===1){let f=b==null?null:g(b.$0),y=f==null?0:f.$0,$=T.Create_1(y);s=new je(w,$)}else if(p===2){let f=b==null?null:g(b.$0),y=f==null?!1:f.$0,$=T.Create_1(y);s=new He(w,$)}else if(p===3){let f=b==null?null:g(b.$0),y=f==null?-864e13:f.$0,$=T.Create_1(y);s=new Ke(w,$)}else if(p===4){let f=b==null?null:g(b.$0),y=f==null?[]:f.$0,$=T.Create_1(y);s=new Ye(w,$)}else if(p===5){let f=b==null?null:g(b.$0),y=globalThis.document.querySelector("[ws-dom="+w+"]"),$=f==null?y:f.$0,_=g($),k=T.Create_1(_);s=new fe(w,k)}else if(p===6){let f=b==null?null:g(b.$0),y=f==null?[]:f.$0,$=T.Create_1(y);s=new Je(w,$)}else s=W("Invalid kind for template Var type: "+String(p));return n.set_Item(w,s)})();let a=new xt({$:0,$0:n},nt.Empty);return Y.instances.set_Item(r,a),a}$preinit(r){let n=this.InitInstance(r),o=globalThis.document.querySelectorAll("[ws-var^='"+r+"::']");for(let a=0,i=o.length-1;a<=i;a++){let l=o[a],s=l.getAttribute("ws-var"),d=n.Hole(kt(s,g(r.length+2),null)),p=d.WithName(s);go().set_Item(p.Name,p),Y.applyVarHole(l,d)}}$init(r){}$postinit(r){uo([])}static{Y.initialized=new Q("New_5"),Y.instances=new Q("New_5")}}),je=class e extends K{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(C(String,this.fillWith.View))}AddAttribute(t,r){t(r)(Fa(this.fillWith))}get AsChoiceView(){return Ot(C(String,this.fillWith.View))}ApplyVarHole(t){se(No(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},He=class e extends K{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(C(String,this.fillWith.View))}AddAttribute(t,r){t(r)(Ba(this.fillWith))}get AsChoiceView(){return Ot(C(String,this.fillWith.View))}ApplyVarHole(t){se(To(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Ke=class e extends K{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(C(t=>new Date(t).toLocaleString(),this.fillWith.View))}AddAttribute(t,r){t(r)(za(this.fillWith))}get AsChoiceView(){return Ot(C(t=>new Date(t).toLocaleString(),this.fillWith.View))}ApplyVarHole(t){se(Vo(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Ye=class e extends K{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(C(String,this.fillWith.View))}AddAttribute(t,r){t(r)(Pa(this.fillWith))}get AsChoiceView(){return Ot(C(String,this.fillWith.View))}ApplyVarHole(t){se(Eo(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},fe=class e extends K{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}ApplyVarHole(t){}constructor(t,r){super(),this.name=t,this.fillWith=r}},Je=class e extends K{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(C(t=>Qt(",",t),this.fillWith.View))}AddAttribute(t,r){t(r)(Ra(this.fillWith))}get AsChoiceView(){return Ot(C(String,this.fillWith.View))}ApplyVarHole(t){se(Mo(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function uo(e){if(Sn()==null){po(""),Bt("",null,globalThis.document.body,null);let t=ho(globalThis.document.body,e),r=globalThis.document.body;(o=>{nt.RunInPlace(!0,r,o)})(t);let n=t;return zl(g(n)),n}else return Sn().$0}function Ne(e,t,r,n){return po(""),ae(e,t,r),Pl(e,t,n)}function ae(e,t,r){Te(e).ContainsKey(t==null?"":t.$0)||Bt(e,t,r(),null)}function Sn(){return Et.RenderedFullDocTemplate}function po(e){Rl()||(Wl(!0),Ul(globalThis.document.body,"")),be().set_Item(e,Te(""))}function Bt(e,t,r,n){let o=new dt("New_3");function a(w,f){for(;;)switch(w){case 0:if(f!==null){let c=f.nextSibling;A(f.nodeType,Node.TEXT_NODE)?zs(f):A(f.nodeType,Node.ELEMENT_NODE)&&l(f),f=c}else return null;break;case 1:let y=kt(f.nodeName,g(3),null).toLowerCase(),$=y.indexOf("."),_=$===-1?[e,y]:[kt(y,null,g($-1)),kt(y,g($+1),null)],k=_[1],v=_[0];if(v!=""&&!be().ContainsKey(v))return Dn(k);{v==""&&n!=null&&n.$0(k);let c=be().Item(v);if(c.ContainsKey(k)){let h=c.Item(k).cloneNode(!0),m=new dt("New_3"),x=new Q("New_5"),N=f.attributes;for(let V=0,D=N.length-1;V<=D;V++){let E=N.item(V).name.toLowerCase(),z=N.item(V).nodeValue,J=z==""?E:z.toLowerCase();x.set_Item(E,J),m.SAdd(E)||console.warn("Hole mapped twice",E)}for(let V=0,D=f.childNodes.length-1;V<=D;V++){let E=f.childNodes[V];A(E.nodeType,Node.ELEMENT_NODE)&&(m.SAdd(E.nodeName.toLowerCase())||console.warn("Hole filled twice",k))}let L=f.childNodes.length===1&&A(f.firstChild.nodeType,Node.TEXT_NODE);if(L){let V=Ps(h,f.firstChild.textContent,k),D=(z=>J=>z.SAdd(J))(m);(z=>J=>{J!=null&&z(J.$0)})(z=>{D(z)})(V)}if(Rs(h,m),!L)for(let V=0,D=f.childNodes.length-1;V<=D;V++){let E=f.childNodes[V];A(E.nodeType,Node.ELEMENT_NODE)&&(E.hasAttributes()?Ws(h,E):i(h,E))}Us(h,x),Gn(h,f.parentNode,f),f.parentNode.removeChild(f);return}else return Dn(k)}break}}function i(w,f){let y=f.nodeName.toLowerCase(),$=(k,v)=>{if(y=="title"&&f.hasChildNodes()){let c=pt(f.textContent);for(f.removeChild(f.firstChild);c.hasChildNodes();)f.appendChild(c.firstChild)}return l(f),Gn(f,k,v)};H(w,"[ws-attr-holes]",k=>{let v=vt(k.getAttribute("ws-attr-holes"),[" "],1);for(let c=0,u=v.length-1;c<=u;c++){let h=S(v,c),m=new RegExp("\\${"+y+"}","ig"),x=k.getAttribute(h).replace(m,f.textContent);k.setAttribute(h,x)}});let _=w.querySelector("[ws-hole="+y+"]");if(A(_,null)){let k=w.querySelector("[ws-replace="+y+"]");if(A(k,null)){let v=w.querySelector("slot[name="+y+"]");return w.tagName.toLowerCase()=="template"?($(v.parentNode,v),void v.parentNode.removeChild(v)):null}else{$(k.parentNode,k),k.parentNode.removeChild(k);return}}else{for(;_.hasChildNodes();)_.removeChild(_.lastChild);return _.removeAttribute("ws-hole"),(k=>{let v=k;return c=>$(v,c)})(_)(null)}}function l(w){w.hasAttribute("ws-preserve")||(Sr(w.nodeName.toLowerCase(),"ws-")?d(w):(So(w),s(w.firstChild)))}function s(w){return a(0,w)}function d(w){return a(1,w)}function p(w){for(;;){let f=w.querySelector("[ws-template]");if(A(f,null)){let y=w.querySelector("[ws-children-template]");if(A(y,null)){let $=w.querySelectorAll("template[id]");for(let k=1,v=$.length-1;k<=v;k++){let c=$[k];o.Contains(c)||(Bt(e,g(c.getAttribute("id")),c,null),o.SAdd(c))}let _=w.querySelectorAll("template[name]");for(let k=1,v=_.length-1;k<=v;k++){let c=_[k];o.Contains(c)||(Bt(e,g(c.getAttribute("name")),c,null),o.SAdd(c))}return null}else{let $=y.getAttribute("ws-children-template");y.removeAttribute("ws-children-template"),Bt(e,g($),y,null),w=w}}else{let y=f.getAttribute("ws-template");ql(e,g(y),f)(null),w=w}}}let b=(t==null?"":t.$0).toLowerCase();Te(e).set_Item(b,r),r.hasChildNodes()&&(p(r),s(r.firstChild))}function ho(e,t){let r,n=Ol(e,io(t,go().Values)),o=n[1],a=n[0],i=a.Els;return!A(i,null)&&i.length===1&&S(i,0)instanceof Node&&A(S(i,0).nodeType,Node.ELEMENT_NODE)&&(r=S(i,0),!0)?Lr.TreeNode(a,o):nt.Mk(ro(a),o)}function zl(e){Et.RenderedFullDocTemplate=e}function Pl(e,t,r){let n,o=(n=null,[Te(e).TryGetValue(t==null?"":t.$0,{get:()=>n,set:a=>{n=a}}),n]);return o[0]?ho(o[1].cloneNode(!0),r):(console.warn("Local template doesn't exist",t),nt.Empty)}function Te(e){let t,r=(t=null,[be().TryGetValue(e,{get:()=>t,set:n=>{t=n}}),t]);if(r[0])return r[1];{let n=new Q("New_5");return be().set_Item(e,n),n}}function Rl(){return Et.LocalTemplatesLoaded}function Wl(e){Et.LocalTemplatesLoaded=e}function Ul(e,t){let r=Te(t),n=new Q("New_5"),o=e.querySelectorAll("[ws-template]");for(let p=0,b=o.length-1;p<=b;p++){let w=o[p],f=w.getAttribute("ws-template").toLowerCase();w.removeAttribute("ws-template"),n.set_Item(f,wo(w))}let a=e.querySelectorAll("[ws-children-template]");for(let p=0,b=a.length-1;p<=b;p++){let w=a[p],f=w.getAttribute("ws-children-template").toLowerCase();w.removeAttribute("ws-children-template"),n.set_Item(f,jl(w))}let i=e.querySelectorAll("template[id]");for(let p=0,b=i.length-1;p<=b;p++){let w=i[p];n.set_Item(w.getAttribute("id").toLowerCase(),_n(w))}let l=e.querySelectorAll("template[name]");for(let p=0,b=l.length-1;p<=b;p++){let w=l[p];n.set_Item(w.getAttribute("name").toLowerCase(),_n(w))}let s=new dt("New_3");function d(p){if(!r.ContainsKey(p)){let b,w=(b=null,[n.TryGetValue(p,{get:()=>b,set:f=>{b=f}}),b]);w[0]?(s.SAdd(p),n.RemoveKey(p),Bt(t,g(p),w[1],g(d))):console.warn(s.Contains(p)?"Encountered loop when instantiating "+p:"Local template does not exist: "+p)}}for(;n.count>0;)d(bl(n.Keys))}function be(){return Et.LoadedTemplates}function H(e,t,r){qi(e,t,n=>{n.closest("[ws-preserve]")==null&&r(n)})}function ql(e,t,r){let n=wo(r);return o=>{Bt(e,t,n,o)}}function Ol(e,t){let r,n=[],o=[],a=[],i=[],l=new Q("New_5"),s=G(t);try{for(;s.MoveNext();){let c=s.Current;l.set_Item(c.Name,c)}}finally{let c=s;typeof c=="object"&&ot(c)&&s.Dispose()}let d=Cn(e),p=(c,u)=>{let h=Yr(c,u);o.push(Jn(h)),a.push([c,h]);let m=It(h.OnAfterRender);if(m==null)return null;{let x=m.$0;i.push(()=>{x(c)});return}},b=c=>{let u,h=(u=null,[l.TryGetValue(c,{get:()=>u,set:m=>{u=m}}),u]);if(h[0]){let m=h[1];if(m instanceof ve)return g(m.Value);if(m instanceof Ce)return g(nt.TextNode(m.Value));{let x=m.ForTextView();return x==null?null:g(nt.TextView(x.$0))}}else return null};H(e,"[ws-hole]",c=>{let u=c.getAttribute("ws-hole");for(c.removeAttribute("ws-hole");c.hasChildNodes();)c.removeChild(c.lastChild);let h=b(u);if(h!=null&&h.$==1){let m=h.$0;Er(c,m.docNode),n.push(zt.New(wr(c),m.docNode,null,c,Jt(),null)),o.push(m.updates)}}),H(e,"[ws-replace]",c=>{let u=b(c.getAttribute("ws-replace"));if(u!=null&&u.$==1){let h=u.$0,m=c.parentNode,x=globalThis.document.createTextNode("");m.replaceChild(x,c);let N=Es(x,h.docNode);d=Cn(e);let L=Xr(V=>c===V,d);L==null||Or(d,L.$0,h.docNode),n.push(zt.New(wr(m),h.docNode,g([N,x]),m,Jt(),null)),o.push(h.updates)}});let w=!1;H(e,"slot",c=>{let u=c.getAttribute("name"),h=u==""||u==null?"default":u.toLowerCase();if(!(w&&h=="default"||!A(e.parentElement,null))){for(;c.hasChildNodes();)c.removeChild(c.lastChild);h=="default"&&(w=!0);let m=b(h);if(m!=null&&m.$==1){let x=m.$0;Er(c,x.docNode),n.push(zt.New(wr(c),x.docNode,null,c,Jt(),null)),o.push(x.updates)}}}),H(e,"[ws-attr]",c=>{let u,h=c.getAttribute("ws-attr");c.removeAttribute("ws-attr");let m=(u=null,[l.TryGetValue(h,{get:()=>u,set:x=>{u=x}}),u]);if(m[0]){let x=m[1];x instanceof P?p(c,x.Value):console.warn("Attribute hole filled with non-attribute data",h)}}),H(e,"[ws-on]",c=>{p(c,Z.Concat(Qr(u=>{let h,m=vt(u,[":"],1),x=(h=null,[l.TryGetValue(S(m,1),{get:()=>h,set:N=>{h=N}}),h]);if(x[0]){let N=x[1];return N instanceof Gr?g(Da(S(m,0),N.Value)):N instanceof ze?g(Z.HandlerImpl(S(m,0),N.Value)):(console.warn("Event hole on"+S(m,0)+" filled with non-event data",S(m,1)),null)}else return null},vt(c.getAttribute("ws-on"),[" "],1)))),c.removeAttribute("ws-on")}),H(e,"[ws-onafterrender]",c=>{let u,h=c.getAttribute("ws-onafterrender"),m=(u=null,[l.TryGetValue(h,{get:()=>u,set:x=>{u=x}}),u]);if(m[0]){let x=m[1];x instanceof Fr||x instanceof Oe?(c.removeAttribute("ws-onafterrender"),p(c,$n(x.Value))):console.warn("onafterrender hole filled with non-onafterrender data",h)}}),H(e,"[ws-var]",c=>{let u,h=c.getAttribute("ws-var");c.removeAttribute("ws-var");let m=(u=null,[l.TryGetValue(h,{get:()=>u,set:x=>{u=x}}),u]);m[0]&&m[1].AddAttribute(x=>N=>p(x,N),c)});let f=()=>{Hl("[ws-dom]",c=>{let u,h,m,x=(u=null,[l.TryGetValue(c.getAttribute("ws-dom").toLowerCase(),{get:()=>u,set:N=>{u=N}}),u]);if(x[0]){let N=x[1];if(N instanceof fe){let L=N.Value;c.removeAttribute("ws-dom"),h=c;let V=new MutationObserver((D,E)=>{X(z=>{z.removedNodes.forEach(dn(J=>J[0]===h&&z.addedNodes.length!==1?(L.SetFinal(null),E.disconnect()):null),null)},D)});c.parentElement!==null&&V.observe(c.parentElement,(m={},m.childList=!0,m)),L.Set(g(c)),Re(D=>{if(D!=null&&D.$==1){let E=D.$0;if(h!==E){let z=[E];h.replaceWith.apply(h,z),h=E}}else h.remove(),V.disconnect()},L.View)}}})};H(e,"[ws-attr-holes]",c=>{let u=new RegExp(me(),"g"),h=vt(c.getAttribute("ws-attr-holes"),[" "],1);c.removeAttribute("ws-attr-holes");for(let m=0,x=h.length-1;m<=x;m++)(()=>{let N,L=S(h,m),V=c.getAttribute(L),D=null,E=0,z=[];for(;D=u.exec(V),D!==null;){let O=kt(V,g(E),g(u.lastIndex-S(D,0).length-1));E=u.lastIndex,z.push([O,S(D,1)])}let J=kt(V,g(E),null);u.lastIndex=0;let M=tn((O,tt)=>(ft=>{let Mt=ft[0],Le=ft[1];return ce=>{let $t,jt=ce[0],at=ce[1],sn=($t=null,[l.TryGetValue(Le,{get:()=>$t,set:cr=>{$t=cr}}),$t]),De=sn[0]?sn[1].AsChoiceView:ln("");return De.$==1?[Mt,ct.Cons(jt==""?De.$0:C(cr=>cr+jt,De.$0),at)]:[Mt+De.$0+jt,at]}})(O)(tt),z,[J,ct.Empty]);if(M[1].$==1)if(M[1].$1.$==1)if(M[1].$1.$1.$==1)if(M[1].$1.$1.$1.$==0){let O=M[0];N=it(L,Wn((tt,ft,Mt)=>O+tt+ft+Mt,M[1].$0,M[1].$1.$0,M[1].$1.$1.$0))}else{let O=M[0];N=it(L,C(tt=>O+Qt("",tt),Oa(M[1])))}else{let O=M[0];N=it(L,jr((tt,ft)=>O+tt+ft,M[1].$0,M[1].$1.$0))}else if(M[0]=="")N=it(L,M[1].$0);else{let O=M[0];N=it(L,C(tt=>O+tt,M[1].$0))}else N=Z.Create(L,M[0]);return p(c,N)})()});let y=d,$=i.length==0?g(()=>{f()}):g(c=>{f(),X(u=>{u(c)},i)}),_=!A(d,null)&&d.length===1&&S(d,0)instanceof Node&&S(d,0)instanceof Element&&(r=S(d,0),!0)?g(r):null,k={Els:y,Dirty:!0,Holes:n,Attrs:a,Render:$?$.$0:void 0,El:_?_.$0:void 0};return[cn(k,["Render","El"]),Se(he(),ge,o)]}function go(){return Et.GlobalHoles}function wo(e){e.removeAttribute("ws-template");let t=e.getAttribute("ws-replace");if(t!=null){e.removeAttribute("ws-replace");let n=e.parentNode;if(!A(n,null)){let o=globalThis.document.createElement(e.tagName);o.setAttribute("ws-replace",t),n.replaceChild(o,e)}}let r=globalThis.document.createElement("div");return r.appendChild(e),r}function jl(e){let t=globalThis.document.createElement("div");for(;e.hasChildNodes();)t.appendChild(e.firstChild);return t}function _n(e){let t=globalThis.document.createElement("div"),r=e.content;for(let n=0,o=r.childNodes.length-1;n<=o;n++)t.appendChild(r.childNodes[n].cloneNode(!0));return t}function me(){return Et.TextHoleRE}function Hl(e,t){Oi(e,r=>{r.closest("[ws-preserve]")==null&&t(r)})}var Ar=class extends Pe{isConst;current;snap;view;id;get View(){return this.view}Set(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):(ke(this.snap),this.current=t,this.snap={s:ir(t,[])})}Get(){return this.current}Update(t){this.Set(t(this.Get()))}UpdateMaybe(t){let r=t(this.Get());r!=null&&r.$==1&&this.Set(r.$0)}SetFinal(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):(ke(this.snap),this.isConst=!0,this.current=t,this.snap={s:Vt(t)})}constructor(t,r,n){super(),this.isConst=t,this.current=n,this.snap=r,this.view=()=>this.snap,this.id=Jt()}},Ve=j(e=>class{static{Ve=e(this)}static IsFetchingView;static IsAuthedView;static UserView;static isFetchingVar;static userVar;static API;static{this.API="https://api.websharper.io",ds("https://api.websharper.io"),this.userVar=T.Create_1(null),this.isFetchingVar=T.Create_1(!1),this.UserView=Yt().View,this.IsAuthedView=C(r=>r!=null,Yt().View),this.IsFetchingView=xr().View}});function Zt(e){return e==null||new RegExp("^\\s*$").test(e)}function Kl(e){return e.replace(new RegExp("^\\s+"),"").replace(new RegExp("\\s+$"),"")}function Qt(e,t){return Rt(t).join(e)}function vt(e,t,r){return Jl(e,new RegExp("["+Zl(t.join(""))+"]"),r)}function Sr(e,t){return e.substring(0,t.length)==t}function Yl(e,t){return Al(e,Ql(t))}function Jl(e,t,r){return r===1?_e(n=>n!=="",Nn(e,t)):Nn(e,t)}function Zl(e){return e.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]","g"),"\\$&")}function Ql(e){return e??""}function Nn(e,t){return e.split(t)}function Ee(e,t){return{k:e,ct:t}}function ar(e){return{$:1,$0:e}}function Me(e){return{$:0,$0:e}}function vo(e){return{$:2,$0:e}}var xe=class extends U{AsyncBase(t,r){return B(()=>{let n=hs(this.Headers),o=ps(r);return R(Si(),a=>R(rr((i,l,s)=>{let d=[!0],p=Hn(a,()=>{d[0]&&(d[0]=!1,s(new Ze("New",a)))});return us().Async(this.EndPoint+"/"+t,n,o,b=>{d[0]&&(d[0]=!1,p.Dispose(),i(b))},b=>{d[0]&&(d[0]=!1,p.Dispose(),l(b))})}),i=>q(JSON.parse(i))))})}get EndPoint(){return gs()}get Headers(){return[]}Async(t,r){return this.AsyncBase(t,r)}};function Xl(e,t){return{c:e,r:t}}var _r=class extends U{push;value;dirty;updates;get NChanged(){return this.updates}NGetExitAnim(t){return vr()}NGetEnterAnim(t){return vr()}NGetChangeAnim(t){return vr()}NSync(t){this.dirty&&(this.push(t)(this.value),this.dirty=!1)}constructor(t,r){super(),this.push=r,this.value=void 0,this.dirty=!1,this.updates=C(n=>{this.value=n,this.dirty=!0},t)}};function ke(e){let t,r=e.s;if(!(r==null||(!(r!=null&&r.$==2||r!=null&&r.$==3)||(t=r.$1,!1)))){e.s=null;for(let n=0,o=I(t)-1;n<=o;n++){let a=S(t,n);typeof a=="object"?(i=>{ke(i)})(a):a()}}}var ct=class e{static Empty=et(e,{$:0});static Cons(t,r){return et(e,{$:1,$0:t,$1:r})}GetEnumerator(){return new ht(this,null,t=>{let r=t.s;if(r.$==0)return!1;{let n=r.$1;return t.c=r.$0,t.s=n,!0}},void 0)}$;$0;$1},ie=j(e=>class{static{ie=e(this)}static GetCT;static Zero;static defCTS;static scheduler;static noneCT;static{this.noneCT=Xl(!1,[]),this.scheduler=new Nr,this.defCTS=[new Tr],this.Zero=q(),this.GetCT=r=>{r.k(Me(r.ct))}}}),zt=class e{Attr;Children;Delimiters;El;ElKey;Render;Equals(t){return this.ElKey===t.ElKey}GetHashCode(){return this.ElKey}static New(t,r,n,o,a,i){let l={Attr:t,Children:r,El:o,ElKey:a},s=(Ht(l,"Delimiters",n),Ht(l,"Render",i),l);return et(e,s)}};function Vt(e){return{$:0,$0:e}}function ir(e,t){return{$:2,$0:e,$1:t}}function qt(e,t){return{$:3,$0:e,$1:t}}function fo(e){return{Plans:e}}function bo(e){let t=ct.Empty;for(let r=I(e)-1,n=0;r>=n;r--)t=ct.Cons(S(e,r),t);return t}function ts(e,t){let r,n,o;if(t.$==0)return t;{let a=et(ct,{$:1});for(r=a,n=t,o=!0;o;)if(r.$0=e(n.$0),n=n.$1,n.$==0)o=!1;else{let i=et(ct,{$:1});r=(r.$1=i,i)}return r.$1=ct.Empty,a}}function es(e){return e.$==1?e.$0:mo()}function rs(e){return e.$==1?e.$1:mo()}function mo(){return W("The input list was empty.")}function ns(e,t){return{Amount:e,Currency:t}}function os(e,t,r,n,o,a,i){return{Id:e,Name:t,Description:r,IsPerSeat:n,MaxSeats:o,MonthPrice:a,YearPrice:i}}function as(e){return rr((t,r)=>{e.then(t,n=>r(is(n)))})}function is(e){return e instanceof Error?e:new Dr(e)}function ls(){throw new Ur("New")}function ss(){throw new qr("New_2","An item with the same key has already been added.")}function G(e){return e instanceof Array?xo(e):A(typeof e,"string")?ko(e):e.GetEnumerator()}function xo(e){return new ht(0,null,t=>{let r=t.s;return r<I(e)&&(t.c=S(e,r),t.s=r+1,!0)},void 0)}function ko(e){return new ht(0,null,t=>{let r=t.s;return r<e.length&&(t.c=e[r],t.s=r+1,!0)},void 0)}function cs(e){return e instanceof Array?xo(e):A(typeof e,"string")?ko(e):"GetEnumerator0"in e?e.GetEnumerator0():e.GetEnumerator()}var ht=class extends U{s;c;n;d;e;MoveNext(){let t=this.n(this);return this.e=t?1:2,t}get Current(){return this.e===1?this.c:this.e===0?W("Enumeration has not started. Call MoveNext."):W("Enumeration already finished.")}Dispose(){this.d&&this.d(this)}constructor(t,r,n,o){super(),this.s=t,this.c=r,this.n=n,this.d=o,this.e=0}};function yo(e,t){return lc(e,-2147483648,2147483647,t)}function ds(e){sr.EndPoint=e}function us(){return sr.AjaxProvider}function ps(e){return JSON.stringify(e)}function hs(e){return Ia(ut(t=>[t[0],t[1]],Gl(t=>t[0],e.concat([["content-type","application/json"]]))))}function gs(){return sr.EndPoint}function Tn(e,t,r,n,o,a,i){let l=new XMLHttpRequest,s=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");l.open("POST",t,e),e==!0&&(l.withCredentials=!0);let d;for(var p in r)l.setRequestHeader(p,r[p]);s&&l.setRequestHeader("x-csrftoken",s);function b(){if(l.status==200)o(l.responseText);else if(i&&l.status==403&&l.responseText=="CSRF")i();else{let w="Response status is not 200: ";a(new Error(w+l.status))}}"onload"in l?l.onload=l.onerror=l.onabort=b:l.onreadystatechange=()=>{l.readyState==4&&b()},l.send(n)}var Nr=class extends U{idle;robin;Fork(t){this.robin.push(t),this.idle&&(this.idle=!1,setTimeout(()=>{this.tick()},0))}tick(){let t=Date.now(),r=!0;for(;r;)this.robin.length===0?(this.idle=!0,r=!1):(this.robin.shift()(),Date.now()-t>40&&(setTimeout(()=>{this.tick()},0),r=!1))}constructor(){super(),this.idle=!0,this.robin=[]}},F=j(e=>class{static{F=e(this)}static FloatApplyChecked;static FloatGetChecked;static FloatSetChecked;static FloatApplyUnchecked;static FloatGetUnchecked;static FloatSetUnchecked;static IntApplyChecked;static IntGetChecked;static IntSetChecked;static IntApplyUnchecked;static IntGetUnchecked;static IntSetUnchecked;static FileApplyUnchecked;static FileGetUnchecked;static FileSetUnchecked;static DateTimeApplyUnchecked;static DateTimeGetUnchecked;static DateTimeSetUnchecked;static StringListApply;static StringListGet;static StringListSet;static StringApply;static StringGet;static StringSet;static BoolCheckedApply;static EmptyAttr;static{this.EmptyAttr=null,this.BoolCheckedApply=v=>[c=>{c.addEventListener("change",()=>v.Get()!=c.checked?v.Set(c.checked):null)},c=>u=>u!=null&&u.$==1?void(c.checked=u.$0):null,C(c=>g(c),v.View)],this.StringSet=v=>c=>{v.value=c},this.StringGet=v=>g(v.value);let r=Os(),n=qs();this.StringApply=v=>Lt(r,n,v),this.StringListSet=v=>c=>{let u=v.options;for(let h=0,m=u.length-1;h<=m;h++)(()=>{let x=u.item(h);x.selected=ks(x.value,c)})()},this.StringListGet=v=>{let c=v.selectedOptions;return g(Rt(An(()=>fl(u=>[c.item(u).value],gn(0,c.length-1)))))};let o=Hs(),a=js();this.StringListApply=v=>Lt(o,a,v),this.DateTimeSetUnchecked=v=>c=>{v.value=new Date(c).toLocaleString()},this.DateTimeGetUnchecked=v=>{let c,u,h=v.value;if(de(h))return g(-864e13);{c=0;let m=bc(h);return u=[m!=null&&m.$==1&&(c=m.$0,!0),c],u[0]?g(u[1]):null}};let i=Ys(),l=Ks();this.DateTimeApplyUnchecked=v=>Lt(i,l,v),this.FileSetUnchecked=()=>()=>null,this.FileGetUnchecked=v=>{let c=v.files;return g(Rt(An(()=>Ut(u=>c.item(u),gn(0,c.length-1)))))};let s=Qs(),d=Zs();this.FileApplyUnchecked=v=>Js(s,d,v),this.IntSetUnchecked=v=>c=>{v.value=String(c)},this.IntGetUnchecked=v=>{let c=v.value;if(de(c))return g(0);{let u=+c;return u!==u>>0?null:g(u)}};let p=tc(),b=Xs();this.IntApplyUnchecked=v=>Lt(p,b,v),this.IntSetChecked=v=>c=>{let u=c.Input;return v.value!=u?void(v.value=u):null},this.IntGetChecked=v=>{let c,u,h=v.value;if(de(h))c=!v.checkValidity||v.checkValidity()?gt.Blank(h):gt.Invalid(h);else{let m=(u=0,[yo(h,{get:()=>u,set:x=>{u=x}}),u]);c=m[0]?gt.Valid(m[1],h):gt.Invalid(h)}return g(c)};let w=rc(),f=ec();this.IntApplyChecked=v=>Lt(w,f,v),this.FloatSetUnchecked=v=>c=>{v.value=String(c)},this.FloatGetUnchecked=v=>{let c=v.value;if(de(c))return g(0);{let u=+c;return isNaN(u)?null:g(u)}};let y=oc(),$=nc();this.FloatApplyUnchecked=v=>Lt(y,$,v),this.FloatSetChecked=v=>c=>{let u=c.Input;return v.value!=u?void(v.value=u):null},this.FloatGetChecked=v=>{let c,u=v.value;if(de(u))c=!v.checkValidity||v.checkValidity()?gt.Blank(u):gt.Invalid(u);else{let h=+u;c=isNaN(h)?gt.Invalid(u):gt.Valid(h,u)}return g(c)};let _=ic(),k=ac();this.FloatApplyChecked=v=>Lt(_,k,v)}});function ws(e,t,r){return()=>n=>{let o;if(typeof n=="object"&&n!=null){let i={};if(typeof t=="string"){let l=n[t];o=Il(s=>!A(s,null)&&s[0]==l,r)}else{let l=[void 0],s;for(var a in t)if((d=>n.hasOwnProperty(d)&&(l[0]=t[d],!0))(a))break;o=l[0]}return i.$=o,X(l=>{let s=l[0],d=l[1],p=l[2],b=l[3];if(s==null){let w=p()(n);d&&delete w[t],i.$0=w;return}else return b===0?void(i[s]=p()(n[d])):b===1?void(i[s]=n.hasOwnProperty(d)?g(p()(n[d])):null):W("Invalid field option kind")},S(r,o)[1]),e===void 0?i:e(i)}else return n}}function bt(){return()=>e=>e}function vs(e){return fs(e)}function fs(e){return()=>t=>ut(e(),t)}function bs(e,t){return()=>r=>{let n={};return X(o=>{let a=o[0],i=o[1],l=o[2];return l===0?r.hasOwnProperty(a)?void(n[a]=i()(r[a])):W("Missing mandatory field: "+a):l===1?void(n[a]=r.hasOwnProperty(a)?g(i()(r[a])):null):l===2?r.hasOwnProperty(a)?void(n[a]=i()(r[a])):null:l===3?r[a]===void 0?void(n[a]=i()(r[a])):null:W("Invalid field option kind")},t),e===void 0?n:e(n)}}var Ze=class extends Error{ct;constructor(t,r,n,o){let a;if(t=="New"&&(a=r,t="New_1",r="The operation was canceled.",n=null,o=a),t=="New_1"){let i=r,l=n,s=o;super(i),this.inner=l,this.ct=s}}},Tr=class extends U{init;c;pending;r;constructor(){super(),this.c=!1,this.pending=null,this.r=[],this.init=1}};function $o(e,t,r,n){let o={DynElem:e,DynFlags:t,DynNodes:r};return Ht(o,"OnAfterRender",n),o}var en=j(e=>class{static{en=e(this)}static counter;static{this.counter=0}});function ms(e,t){let r=new Q("New_5"),n=[];for(let o=0,a=I(t)-1;o<=a;o++){let i=t[o],l=e(i);r.ContainsKey(l)?r.Item(l).push(i):(n.push(l),r.DAdd(l,[i]))}return xs(o=>[o,r.Item(o)],n),n}function xs(e,t){for(let r=0,n=t.length-1;r<=n;r++)t[r]=e(t[r])}function ks(e,t){let r=!0,n=0,o=I(t);for(;r&&n<o;)A(t[n],e)?r=!1:n=n+1;return!r}function Vr(){return W("The input sequence has an insufficient number of elements.")}function ys(){return W("The input must be non-negative.")}function rn(e,t){ye(e.parentNode,t,e)}function $s(e,t,r){return Io(Lo(),_s(e,t,Kr(),r))}function Vn(e,t,r){return Mr()?B(()=>{let n=Do(r),o=Vs(t,n),a=Ts(t,n);return R(In(Fs(o,Ns(t,n))),()=>R(Mn(e,t),()=>R(In(a),()=>(t.PreviousNodes=n,q(null)))))}):Mn(e,t)}function En(e,t,r){let n=Do(r);$e(e,t.Top),t.PreviousNodes=n}function Cs(e,t){return Io(Lo(),Ms(e,Kr(),t))}function As(){return{Current:null,Dirty:!1}}function Ss(e,t){e.Current=t,e.Dirty=!0}function ye(e,t,r){for(;;){if(t!=null&&t.$==1)return Ge(e,t.$0.El,r);if(t!=null&&t.$==2){let n=t.$0;n.Dirty=!1,t=n.Current}else{if(t==null)return r;if(t!=null&&t.$==4)return Ge(e,t.$0.Text,r);if(t!=null&&t.$==5)return Ge(e,t.$0,r);if(t!=null&&t.$==6)return tn((n,o)=>(a=>i=>l=>i==null||i.constructor===Object?ye(a,i,l):Ge(a,i,l))(e)(n)(o),t.$0.Els,r);{let n=t.$1;t=t.$0,r=ye(e,n,r)}}}}function _s(e,t,r,n){let o=e.parentNode;rn(t,n);let a=Yr(o,r);return zt.New(a,n,g([e,t]),o,Jt(),It(a.OnAfterRender))}function Mn(e,t){if(Ir()){let r=n=>{requestAnimationFrame(()=>{$e(e,t.Top),n()})};return rr((n,o,a)=>r.apply(null,[n,o,a]))}else return $e(e,t.Top),q(null)}function Ns(e,t){return lr(ut(r=>Mi(r.Attr),an(Go(t,on(r=>Ei(r.Attr),e.PreviousNodes)))))}function Ts(e,t){return lr(ut(r=>Li(r.Attr),an(Go(e.PreviousNodes,on(r=>Ii(r.Attr),t)))))}function Vs(e,t){let r=o=>Di(o.Attr),n=o=>on(r,o);return lr(ut(o=>Gi(o.Attr),an(sc(n(e.PreviousNodes),n(t)))))}function $e(e,t){e||Is(t),Co(t.Children),Ao(t)}function Er(e,t){ye(e,t,null)}function Es(e,t){let r=e.parentNode,n=globalThis.document.createTextNode("");return r.insertBefore(n,e),rn(e,t),n}function Ms(e,t,r){Er(e,r);let n=Yr(e,t);return zt.New(n,r,null,e,Jt(),It(n.OnAfterRender))}function Ge(e,t,r){return ji(e,r,t),t}function Is(e){function t(r){function n(o){for(;;)if(o!=null&&o.$==0){let a=o.$1,i=o.$0;if(n(i))return!0;o=a}else if(o!=null&&o.$==2){let a=o.$0;if(a.Dirty)return!0;o=a.Current}else if(o!=null&&o.$==6){let a=o.$0;return a.Dirty||Cr(t,a.Holes)}else return!1}return n(r.Children)}Zn(e.El,e.Attr),t(e)&&Gs(e)}function Co(e){for(;;){if(e!=null&&e.$==1)return $e(!1,e.$0);if(e!=null&&e.$==2)e=e.$0.Current;else{if(e==null)return null;if(e!=null&&e.$==5)return null;if(e!=null&&e.$==4){let t=e.$0;return t.Dirty?(t.Text.nodeValue=t.Value,t.Dirty=!1):null}else if(e!=null&&e.$==6){let t=e.$0;return X(r=>{$e(!1,r)},t.Holes),X(r=>{Zn(r[0],r[1])},t.Attrs),Ao(t)}else{let t=e.$1,r=e.$0;Co(r),e=t}}}}function Ao(e){let t=It(e.Render);t!=null&&t.$==1&&(t.$0(e.El),Ht(e,"Render",null))}function Ls(){return{Text:globalThis.document.createTextNode(""),Dirty:!1,Value:""}}function Ds(e,t){e.Value=t,e.Dirty=!0}function Gs(e){let t=e.El;function r(l,s){for(;;){if(l!=null&&l.$==1)return l.$0.El;if(l!=null&&l.$==2){let d=l.$0;if(d.Dirty)return d.Dirty=!1,ye(t,d.Current,s);l=d.Current}else{if(l==null)return s;if(l!=null&&l.$==4)return l.$0.Text;if(l!=null&&l.$==5)return l.$0;if(l!=null&&l.$==6){let d=l.$0;return d.Dirty&&(d.Dirty=!1),tn((p,b)=>p==null||p.constructor===Object?r(p,b):p,d.Els,s)}else{let d=l.$1;l=l.$0,s=r(d,s)}}}}let n=e.El;Ac(l=>{Hi(n,l)},Cc(Sc(e),$c(e.El,It(e.Delimiters))));let o=e.Children,a=It(e.Delimiters),i=a!=null&&a.$==1?a.$0[1]:null;r(o,i)}function Mr(){return cc()}function In(e){return B(()=>R(Bs(()=>{},dc(e)),()=>(uc(e),q(null))))}function Fs(e,t){return nn(Po(e.$0,t.$0))}function Bs(e,t){let r=t.Duration;if(r===0)return lt();{let n=o=>{function a(i){return l=>{let s=l-i;return t.Compute(s),e(),s<=r?void requestAnimationFrame(d=>{a(i)(d)}):o()}}requestAnimationFrame(i=>{a(i)(i)})};return rr((o,a,i)=>n.apply(null,[o,a,i]))}}function nn(e){return{$:0,$0:e}}function lr(e){return nn(mc(Ut(hc,e)))}function vr(){return nn(Wo())}function Ir(){return Bo.BatchUpdatesEnabled}function Ln(e){let t=[0];function r(){return B(()=>R(e,()=>{let n=t[0];return A(n,1)?(t[0]=0,lt()):A(n,2)?(t[0]=1,r()):lt()}))}return()=>{let n=t[0];A(n,0)?(t[0]=1,Ai(r(),null)):A(n,1)&&(t[0]=2)}}var Et=j(e=>class{static{Et=e(this)}static RenderedFullDocTemplate;static TextHoleRE;static GlobalHoles;static LocalTemplatesLoaded;static LoadedTemplates;static{this.LoadedTemplates=new Q("New_5"),this.LocalTemplatesLoaded=!1,this.GlobalHoles=new Q("New_5"),this.TextHoleRE="\\${([^}]+)}",this.RenderedFullDocTemplate=null}});function zs(e){let t=null,r=0,n=e.textContent,o=new RegExp(me(),"g");for(;t=o.exec(n),t!==null;){e.parentNode.insertBefore(globalThis.document.createTextNode(kt(n,g(r),g(o.lastIndex-S(t,0).length-1))),e),r=o.lastIndex;let a=globalThis.document.createElement("span");a.setAttribute("ws-replace",S(t,1).toLowerCase()),e.parentNode.insertBefore(a,e)}o.lastIndex=0,e.textContent=kt(n,g(r),null)}function Dn(e){console.warn("Instantiating non-loaded template",e)}function Ps(e,t,r){let n=e.querySelector("[ws-replace]");return A(n,null)?(console.warn("Filling non-existent text hole",r),null):(n.parentNode.replaceChild(globalThis.document.createTextNode(t),n),g(n.getAttribute("ws-replace")))}function Rs(e,t){let r=n=>{H(e,"["+n+"]",o=>{t.Contains(o.getAttribute(n))||o.removeAttribute(n)})};r("ws-attr"),r("ws-onafterrender"),r("ws-var"),H(e,"[ws-hole]",n=>{if(!t.Contains(n.getAttribute("ws-hole")))for(n.removeAttribute("ws-hole");n.hasChildNodes();)n.removeChild(n.lastChild)}),H(e,"[ws-replace]",n=>{t.Contains(n.getAttribute("ws-replace"))||n.parentNode.removeChild(n)}),H(e,"[ws-on]",n=>{n.setAttribute("ws-on",Qt(" ",_e(o=>t.Contains(S(vt(o,[":"],1),1)),vt(n.getAttribute("ws-on"),[" "],1))))}),H(e,"[ws-attr-holes]",n=>{let o=vt(n.getAttribute("ws-attr-holes"),[" "],1);for(let a=0,i=o.length-1;a<=i;a++){let l=S(o,a),s=new RegExp(me(),"g"),d=n.getAttribute(l).replace(s,(p,b)=>t.Contains(b)?p:"");n.setAttribute(l,d)}})}function Ws(e,t){So(t);let r=t.nodeName.toLowerCase(),n=e.querySelector("[ws-attr="+r+"]");if(A(n,null))console.warn("Filling non-existent attr hole",r);else{n.removeAttribute("ws-attr");for(let o=0,a=t.attributes.length-1;o<=a;o++){let i=t.attributes.item(o);i.name=="class"&&n.hasAttribute("class")?n.setAttribute("class",n.getAttribute("class")+" "+i.nodeValue):n.setAttribute(i.name,i.nodeValue)}}}function Us(e,t){let r=n=>{H(e,"["+n+"]",o=>{let a,i=(a=null,[t.TryGetValue(o.getAttribute(n).toLowerCase(),{get:()=>a,set:l=>{a=l}}),a]);i[0]&&o.setAttribute(n,i[1])})};r("ws-hole"),r("ws-replace"),r("ws-attr"),r("ws-onafterrender"),r("ws-var"),H(e,"[ws-on]",n=>{n.setAttribute("ws-on",Qt(" ",ut(o=>{let a,i=vt(o,[":"],1),l=(a=null,[t.TryGetValue(S(i,1),{get:()=>a,set:s=>{a=s}}),a]);return l[0]?S(i,0)+":"+l[1]:o},vt(n.getAttribute("ws-on"),[" "],1))))}),H(e,"[ws-attr-holes]",n=>{let o=vt(n.getAttribute("ws-attr-holes"),[" "],1);for(let a=0,i=o.length-1;a<=i;a++)(()=>{let l=S(o,a);return n.setAttribute(l,ml((s,d)=>{let p=Dt(d);return s.replace(new RegExp("\\${"+p[0]+"}","ig"),"${"+p[1]+"}")},n.getAttribute(l),t))})()})}function Gn(e,t,r){for(;;)if(e.hasChildNodes())r=t.insertBefore(e.lastChild,r);else return null}function So(e){let t=e.attributes,r=[],n=[],o=[];for(let i=0,l=t.length-1;i<=l;i++){let s=t.item(i);if(Sr(s.nodeName,"ws-on")&&s.nodeName!="ws-onafterrender"&&s.nodeName!="ws-on")r.push(s.nodeName),n.push(kt(s.nodeName,g(5),null)+":"+s.nodeValue.toLowerCase());else if(!Sr(s.nodeName,"ws-")&&new RegExp(me()).test(s.nodeValue)){let d=new RegExp(me(),"g"),p=s.nodeValue.replace(d,(b,w)=>"${"+w.toLowerCase()+"}");s.nodeValue=p,o.push(s.nodeName)}}n.length!=0&&e.setAttribute("ws-on",Qt(" ",n)),o.length!=0&&e.setAttribute("ws-attr-holes",Qt(" ",o));let a=i=>{let l=e.getAttribute(i);l==null||e.setAttribute(i,l.toLowerCase())};a("ws-hole"),a("ws-replace"),a("ws-attr"),a("ws-onafterrender"),a("ws-var"),X(i=>{e.removeAttribute(i)},r)}function kt(e,t,r){if(t==null)if(r!=null&&r.$==1){let n=r.$0;return n<0?"":e.slice(0,n+1)}else return"";else{if(r==null)return e.slice(t.$0);{let n=r.$0,o=t.$0;return n<0?"":e.slice(o,n+1)}}}var Lr=class e extends nt{docNode_1;updates_1;elt;rvUpdates;static TreeNode(t,r){let n=Br.Create(r),o=ro(t),a=ut(s=>Jn(s[1]),t.Attrs),i=Se(he(),ge,a),l=ge(i,n.v);return new e(o,l,S(t.Els,0),n)}constructor(t,r,n,o){super(t,r),this.docNode_1=t,this.updates_1=r,this.elt=n,this.rvUpdates=o}},sr=j(e=>class{static{sr=e(this)}static AjaxProvider;static EndPoint;static{this.EndPoint=globalThis.location.origin,this.AjaxProvider=new Pr}});function Lt(e,t,r){let n;return n=null,[o=>{let a=()=>{r.UpdateMaybe(i=>{let l;return n=e(o),n!=null&&n.$==1&&!A(n.$0,i)&&(l=[n,n.$0],!0)?l[0]:null})};o.addEventListener("change",a),o.addEventListener("input",a),o.addEventListener("keypress",a)},o=>{let a=t(o);return i=>i==null?null:a(i.$0)},C(o=>{let a;return n!=null&&n.$==1&&A(n.$0,o)&&(a=n.$0,!0)?null:g(o)},r.View)]}function qs(){return F.StringSet}function Os(){return F.StringGet}function js(){return F.StringListSet}function Hs(){return F.StringListGet}function Ks(){return F.DateTimeSetUnchecked}function Ys(){return F.DateTimeGetUnchecked}function Js(e,t,r){let n;return n=null,[o=>{o.addEventListener("change",()=>{r.UpdateMaybe(a=>{let i;return n=e(o),n!=null&&n.$==1&&n.$0!==a&&(i=[n,n.$0],!0)?i[0]:null})})},o=>{let a=t(o);return i=>i==null?null:a(i.$0)},C(o=>{let a;return n!=null&&n.$==1&&A(n.$0,o)&&(a=n.$0,!0)?null:g(o)},r.View)]}function Zs(){return F.FileSetUnchecked}function Qs(){return F.FileGetUnchecked}function Xs(){return F.IntSetUnchecked}function tc(){return F.IntGetUnchecked}function ec(){return F.IntSetChecked}function rc(){return F.IntGetChecked}function nc(){return F.FloatSetUnchecked}function oc(){return F.FloatGetUnchecked}function ac(){return F.FloatSetChecked}function ic(){return F.FloatGetChecked}function _o(){return F.StringApply}function No(){return F.FloatApplyUnchecked}function To(){return F.BoolCheckedApply}function Vo(){return F.DateTimeApplyUnchecked}function Eo(){return F.FileApplyUnchecked}function Mo(){return F.StringListApply}function de(e){return Yl(fc,e)}var gt=class e{get Input(){return this.$==1?this.$0:this.$==2?this.$0:this.$1}static Blank(t){return et(e,{$:2,$0:t})}static Invalid(t){return et(e,{$:1,$0:t})}static Valid(t,r){return et(e,{$:0,$0:t,$1:r})}$;$0;$1},Ce=class e extends K{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}get AsChoiceView(){return ln(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function lc(e,t,r,n){let o=+e,a=o===o-o%1&&o>=t&&o<=r;return a&&n.set(o),a}var Dr=class extends Error{reason;constructor(t){super("Promise rejected"),this.reason=t}},le=j(e=>class{static{le=e(this)}static defaultWrap;static wrapMap;static rhtml;static rtagName;static rxhtmlTag;static{this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>","gi"),this.rtagName=new RegExp("<([\\w:]+)"),this.rhtml=new RegExp("<|&#?\\w+;");let r=[1,"<table>","</table>"],n=Object.fromEntries([["option",[1,"<select multiple='multiple'>","</select>"]],["legend",[1,"<fieldset>","</fieldset>"]],["area",[1,"<map>","</map>"]],["param",[1,"<object>","</object>"]],["thead",r],["tbody",r],["tfoot",r],["tr",[2,"<table><tbody>","</tbody></table>"]],["col",[2,"<table><colgroup>","</colgoup></table>"]],["td",[3,"<table><tbody><tr>","</tr></tbody></table>"]]]);this.wrapMap=n,this.defaultWrap=[0,"",""]}});function Io(e,t){return{PreviousNodes:e,Top:t}}function Lo(){return Ie(new dt("New_3"))}function Do(e){let t=[];function r(a,i){for(;;)switch(a){case 0:if(i!=null&&i.$==0){let l=i.$1,s=i.$0;r(0,s),i=l}else if(i!=null&&i.$==1)i=i.$0,a=1;else if(i!=null&&i.$==2)i=i.$0.Current;else if(i!=null&&i.$==6){let l=i.$0.Holes;return(s=>d=>{X(s,d)})(o)(l)}else return null;break;case 1:t.push(i),i=i.Children,a=0;break}}function n(a){return r(0,a)}function o(a){return r(1,a)}return n(e),Ie(new dt("New_2",t))}function Ie(e){return{$:0,$0:e}}function on(e,t){return Ie(xc(e,t.$0))}function Go(e,t){return Ie(kc(e.$0,t.$0))}function an(e){return Xt(e.$0)}function sc(e,t){return Ie(yc(e.$0,t.$0))}function cc(){return zo.UseAnimations}function dc(e){return pc(Qr(t=>t.$==1?g(t.$0):null,Ro(e.$0)))}function uc(e){X(t=>{t.$==0&&t.$0()},Ro(e.$0))}function pc(e){let t=Ae(e),r=I(t);if(r===0)return gc();if(r===1)return S(t,0);{let n=_l(Ut(a=>a.Duration,t)),o=ut(a=>wc(n,a),t);return Fo(n,a=>{X(i=>{i.Compute(a)},o)})}}function hc(e){return e.$0}function gc(e){return Fo(0,()=>e)}function Fo(e,t){return{Compute:t,Duration:e}}function wc(e,t){let r=t.Compute,n=t.Duration,o=_c(()=>t.Compute(t.Duration));return{Compute:a=>a>=n?o.f():r(a),Duration:e}}var Bo=j(e=>class{static{Bo=e(this)}static BatchUpdatesEnabled;static{this.BatchUpdatesEnabled=!0}}),Gr=class e extends K{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Fr=class e extends K{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function ln(e){return{$:0,$0:e}}function Ot(e){return{$:1,$0:e}}var Br=class e{c;s;v;static Create(t){let r;return r=null,r=e.New(t,null,()=>{let n;return n=r.s,n===null&&(n=il(r.c()),r.s=n,to(n,()=>{r.s=null})),n}),r}static New(t,r,n){return et(e,{c:t,s:r,v:n})}},zr=class extends U{d;GetEnumerator(){return G(Ut(t=>t.V,this.d))}constructor(t){super(),this.d=t}},Pr=class extends U{Async(t,r,n,o,a){Tn(!0,t,r,n,o,a,()=>{Tn(!0,t,r,n,o,a,void 0)})}};function vc(e){e.splice(0,I(e))}function fc(e){return e.match(new RegExp("\\s"))!==null}function bc(e){let t=Date.parse(e);return isNaN(t)?null:g(t)}var zo=j(e=>class{static{zo=e(this)}static UseAnimations;static CubicInOut;static{this.CubicInOut=Wr.Custom(r=>{let n=r*r;return 3*n-2*(n*r)}),this.UseAnimations=!0}});function Po(e,t){return e.$==0?t:t.$==0?e:{$:2,$0:e,$1:t}}function Ro(e){let t=[];function r(n){for(;;){if(n.$==1)return t.push(n.$0);if(n.$==2){let o=n.$1,a=n.$0;r(a),n=o}else return n.$==3?X(o=>{t.push(o)},n.$0):null}}return r(e),t.slice(0)}function mc(e){let t=Ae(e);return Se(Wo(),Po,t)}function Wo(){return Uo.Empty}function fr(e){let t=[],r;for(var n in e)t.push.apply(t,e[n]);return t}var Rr=class extends U{d;GetEnumerator(){return G(Ut(t=>t.K,this.d))}constructor(t){super(),this.d=t}},Wr=class e extends U{transformTime;static Custom(t){return new e(t)}constructor(t){super(),this.transformTime=t}};function xc(e,t){return new dt("New_2",_e(e,Xt(t)))}function kc(e,t){let r=new dt("New_2",Xt(t));return r.ExceptWith(Xt(e)),r}function Xt(e){let t=Fl(e.Count,void 0);return e.CopyTo(t,0),t}function yc(e,t){let r=new dt("New_2",Xt(e));return r.IntersectWith(Xt(t)),r}var Ur=class extends Error{constructor(t,r){if(t=="New"&&(t="New_1",r="The given key was not present in the dictionary."),t=="New_1"){let n=r;super(n)}}},qr=class extends Error{constructor(t,r){if(t=="New_2"){let n=r;super(n)}}};function $c(e,t){let r;if(t!=null&&t.$==1){let n=t.$0[1],o=t.$0[0],a=[];for(r=o.nextSibling;r!==n;)a.push(r),r=r.nextSibling;return Qe(a)}else{let n=e.childNodes.length,o=e.childNodes,a=Bl(n,i=>o[i]);return Qe(a)}}function Cc(e,t){let r=e.$0;return Qe(_e(n=>co(o=>n!==o,r),t.$0))}function Ac(e,t){X(e,t.$0)}function Sc(e){let t=[];function r(n){for(;;)if(n!=null&&n.$==2)n=n.$0.Current;else{if(n!=null&&n.$==1)return t.push(n.$0.El);if(n==null)return null;if(n!=null&&n.$==5)return t.push(n.$0);if(n!=null&&n.$==4)return t.push(n.$0.Text);if(n!=null&&n.$==6){let o=n.$0.Els;return(a=>i=>{X(a,i)})(a=>{a==null||a.constructor===Object?r(a):t.push(a)})(o)}else{let o=n.$1,a=n.$0;r(a),n=o}}}return r(e.Children),Qe(Ae(t))}function Qe(e){return{$:0,$0:e}}function se(e,t,r){let n=e(t);n[0](r),Re(n[1](r),n[2])}function _c(e){return Vc(!1,e,Nc)}function Nc(){let e=this.v();return this.c=!0,this.v=e,this.f=Tc,e}function Tc(){return this.v}var Uo=j(e=>class{static{Uo=e(this)}static Empty;static{this.Empty={$:0}}});function Vc(e,t,r){return{c:e,v:t,f:r}}return Yo(Ec);})();
