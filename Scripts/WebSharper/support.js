var wsbundle=(()=>{var dr=Object.defineProperty;var Wa=Object.getOwnPropertyDescriptor;var ja=Object.getOwnPropertyNames;var Ua=Object.prototype.hasOwnProperty;var Oa=(e,t)=>{for(var r in t)dr(e,r,{get:t[r],enumerable:!0})},qa=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ja(t))!Ua.call(e,a)&&a!==r&&dr(e,a,{get:()=>t[a],enumerable:!(n=Wa(t,a))||n.enumerable});return e};var Ha=e=>qa(dr({},"__esModule",{value:!0}),e);var Sc={};Oa(Sc,{Layout:()=>Ya,Runtime:()=>hn,Support:()=>Ja});function at(e,t){return Object.assign(Object.create(e.prototype),t)}var Ka=Symbol("force");function K(e){var t;function r(){return t||(t=e(a=>t=a)),t}return new Proxy(function(){},{get(a,o){return o==Ka&&r(),r()[o]},set(a,o,i){return r()[o]=i,!0},construct(a,o,i){return Reflect.construct(r(),o,i)}})}function cn(e,t){for(var r=0;r<t.length;r++){var n=t[r];e[n]===void 0&&delete e[n]}return e}function It(e){return e===void 0?null:{$:1,$0:e}}function qt(e,t,r){r?e[t]=r.$0:delete e[t]}function dn(e){return function(...t){return e(t)}}function un(e){return Object.defineProperty(e,"resizable",{enumerable:!1,writable:!1,configurable:!1,value:!0}),e}var pn=globalThis.WebSharperRuntime||{ScriptBasePath:"./",ScriptSkipAssemblyDir:!1};globalThis.WebSharperRuntime=pn;var hn=pn;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".section-link"),t=document.querySelectorAll(".section"),r={root:null,threshold:1,rootMargin:"0px"};function n(o){o.classList.add("active-link")}let a=new IntersectionObserver(function(o){o.forEach(i=>{i.isIntersecting&&e.forEach(l=>{let s=l.getAttribute("data-step"),d=i.target.getAttribute("id");s===d?n(l):l.classList.remove("active-link")})})},r);t.forEach(o=>{a.observe(o)})});document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("track"),t=document.getElementById("mini-inner"),r=document.getElementById("mini-prev"),n=document.getElementById("mini-next");if(!e||!t||!r||!n)return;let a=Array.from(t.children);if(a.length===0)return;let o=a[0].cloneNode(!0),i=a[a.length-1].cloneNode(!0);t.insertBefore(i,a[0]),t.appendChild(o);let l=1,s=!1,d=null,u=!1,m=N=>{t.style.transition=N?"transform 0.7s ease-out":"none",t.style.transform=`translateX(-${l*100}%)`},w=()=>{u||(u=!0,l+=1,m(!0))},f=()=>{u||(u=!0,l-=1,m(!0))};t.addEventListener("transitionend",()=>{let N=t.children.length,C=N-2;l===N-1?(l=1,m(!1)):l===0&&(l=C,m(!1)),requestAnimationFrame(()=>{u=!1})}),n.addEventListener("click",w),r.addEventListener("click",f);let k=()=>{$(),d=setInterval(()=>{s||w()},5e3)},$=()=>{d&&clearInterval(d)};e.addEventListener("mouseenter",()=>{s=!0}),e.addEventListener("mouseleave",()=>{s=!1}),m(!1),k()});function et(e){return"Dispose"in e}function Ya(){Xa();let e=bn(),t=mn(),r=fn(),n=vn(),a=bn(),o=mn(),i=fn(),l=vn(),s=wo(),d=go(),u=wn(),m=wn(),w=ho(),f=po(),k=new St("New_1"),$=(k.h.push(tt(k.k,"togglemenu",()=>k.i,()=>{Za()})),k),N=($.h.push(tt($.k,"toggletheme",()=>$.i,()=>{to()})),$),C=(N.h.push(tt(N.k,"onkeydown",()=>N.i,nt=>{io(nt)})),N),v=(C.h.push(tt(C.k,"onstoppropagation",()=>C.i,nt=>{lo(nt)})),C),c=(v.h.push(tt(v.k,"closeonbackgroundclick",()=>v.i,nt=>{so(nt)})),v),h=(c.h.push(tt(c.k,"accountbtnclick",()=>c.i,nt=>{co(nt)})),c),x=(h.h.push(tt(h.k,"accountbtnkeydown",()=>h.i,()=>{})),h),b=(x.h.push(tt(x.k,"login",()=>x.i,()=>{mo()})),x),p=(b.h.push(tt(b.k,"logout",()=>b.i,nt=>{uo(nt)})),b),y=(p.h.push(new z("dropdownattr",f)),p),M=(y.h.push(new z("accountbtnaria",w)),y),E=(M.h.push(new z("avatarattr",m)),M),D=(E.h.push(new z("avatarattrhamburger",u)),E),V=(D.h.push(new z("iconattr",d)),D),P=(V.h.push(new z("skeletonattr",s)),V),J=(P.h.push(new At("accountheadertext",oo())),P),G=(J.h.push(new z("headerattrd",l)),J),U=(G.h.push(new z("btnmanageattrd",i)),G),Z=(U.h.push(new z("btnloginattrd",o)),U),ut=(Z.h.push(new z("btnlogoutattrd",a)),Z),Mt=(ut.h.push(new z("headerattr",n)),ut),Ve=(Mt.h.push(new z("btnmanageattr",r)),Mt),de=(Ve.h.push(new z("btnloginattr",t)),Ve),Ct=(de.h.push(new z("btnlogoutattr",e)),de),Ot=Ht(Ct.k,Ct.h,[]);return Ct.i=new bt(Ot[1],pa(Ot[0])),vo(),st.Empty}function Ja(){return Ao()}function Za(){let e=ur("navmenu"),t=ur("openIcon"),r=ur("closeIcon"),n=globalThis.document.body;e.classList.toggle("h-screen"),t.classList.toggle("hidden-open-icon"),r.classList.toggle("visible-close-icon"),n.classList.toggle("overflow-hidden")}function Qa(e){let t=[],r;for(var n in e)t.push(e[n]);return t}function Xa(){Bn();let e=globalThis.localStorage.getItem("color-theme");e=="dark"||e==null&&eo()?mr(!0):mr(!1)}function to(){ro(zn()=="dark"?"light":"dark")}function Bn(){let e=zn(),t=globalThis.document.querySelectorAll(".themed-iframe");for(let r=0,n=no(t.length)-1;r<=n;r++){let a=t[r],o=a.getAttribute("data-src");if(o!=null){let i=new URL(o,globalThis.location.href);i.searchParams.set("theme",e),a.setAttribute("src",String(i))}}}function eo(){return globalThis.matchMedia("(prefers-color-scheme: dark)").matches}function mr(e){e?br().classList.add("dark"):br().classList.remove("dark")}function ro(e){mr(e=="dark"),globalThis.localStorage.setItem("color-theme",e),Bn()}function zn(){return br().classList.contains("dark")?"dark":"light"}function br(){return globalThis.document.documentElement}function S(e,t){return Pn(e,t),e[t]}function I(e){return e.dims===2?e.length*e.length:e.length}function Pn(e,t){(t<0||t>=e.length)&&W("Index was outside the bounds of the array.")}function Or(e,t,r){Pn(e,t),e[t]=r}function no(e){let t=ao(e);return t>2147483647?t-4294967296:t}function W(e){throw new Error(e)}function ao(e){return(e<0?Math.ceil(e):Math.floor(e))>>>0}function Dt(e){return[e.K,e.V]}function gn(e,t){let r=1+t-e;return r<=0?[]:xl(r,n=>n+e)}var j=class{Equals(t){return this===t}GetHashCode(){return-1}},St=class extends j{i;k;h;s;constructor(t){if(t=="New_1"){let r;super(),this.i=null,this.k=(r=Vo(),String(r)),this.h=un([]),qt(this,"s",null)}}};function oo(){return kt.AccountHeaderText}function io(e){e.Event.key=="Escape"&&_t().Set(!1)}function lo(e){e.Event.stopPropagation()}function so(){_t().Get()&&_t().Set(!1)}function co(){_t().Set(!_t().Get())}function uo(){Xe(B(()=>(_t().Set(!1),R(xo(!0),()=>O(null)))),null)}function po(){return Nt("hidden",_(e=>!e,_t().View))}function ho(){return ot("aria-expanded",_(e=>e?"true":"false",_t().View))}function wn(){return Q.Concat([ot("src",Rn()),Nt("hidden",_(e=>!e,Wn())),Nt("opacity-0",pe().View)])}function go(){return Q.Concat([Nt("hidden",Wn()),Nt("opacity-0",pe().View)])}function wo(){return Nt("opacity-0 hidden",_(e=>!e,pe().View))}function vn(){return Je(Ze())}function fn(){return Je(Ze())}function mn(){return Je(_(e=>!e,Ze()))}function bn(){return Je(Ze())}function vo(){Xe(B(()=>(pe().Set(!0),R(yo(),()=>R(fi(500),()=>(pe().Set(!1),it()))))),null)}function _t(){return kt.isOpen}function Rn(){return kt.avatarSrcV}function Wn(){return kt.hasAvatarV}function pe(){return kt.isLoading}function Je(e){return Q.Concat([Nt("hidden",_(t=>!t,e)),Nt("flex",e)])}function Ze(){return kt.isAuthedV}function xn(){return kt.userV}function fo(){return kt.displayNameV}function tt(e,t,r,n){return new De(t,"",a=>o=>{let i=r();return i.SetAnchorRoot(a),n({Vars:i,Anchors:i,Target:a,Event:o})})}function Ht(e,t,r){let n=new rt("New_5"),a=new ct("New_3"),o=L(t);try{for(;o.MoveNext();){let i=o.Current,l=i.Name;a.SAdd(l),n.set_Item(l,i)}}finally{let i=o;typeof i=="object"&&et(i)&&o.Dispose()}return[sa(t,Qr(i=>{let l=i[0],s=i[1],d=i[2];if(a.Contains(l))return null;{let u=s===0?Y.GetOrAddHoleFor(e,l,()=>{let m=d==null?null:g(d.$0),w=m==null?"":m.$0,f=T.Create_1(w);return new wt(l,f)}):s===1?Y.GetOrAddHoleFor(e,l,()=>{let m=d==null?null:g(d.$0),w=m==null?0:m.$0,f=T.Create_1(w);return new je(l,f)}):s===2?Y.GetOrAddHoleFor(e,l,()=>{let m=d==null?null:g(d.$0),w=m==null?!1:m.$0,f=T.Create_1(w);return new Ue(l,f)}):s===3?Y.GetOrAddHoleFor(e,l,()=>{let m=d==null?null:g(d.$0),w=m==null?-864e13:m.$0,f=T.Create_1(w);return new Oe(l,f)}):s===4?Y.GetOrAddHoleFor(e,l,()=>new qe(l,T.Create_1([]))):s===5?Y.GetOrAddHoleFor(e,l,()=>new ve(l,T.Create_1(g(globalThis.document.querySelector("[ws-dom="+l+"]"))))):s===6?Y.GetOrAddHoleFor(e,l,()=>{let m=d==null?null:g(d.$0),w=m==null?[]:m.$0,f=T.Create_1(w);return new He(l,f)}):W("Invalid kind for template Var type: "+String(s));return n.set_Item(l,u),g(u)}},r)),{$:0,$0:n}]}function mo(){globalThis.location.href=bo()}function bo(){return $o(globalThis.location.pathname+globalThis.location.search)}function xo(e){return B(()=>bi(we(B(()=>R(Ci(),()=>O(null))),t=>(console.error("AuthClient.Logout RPC failed",t),it())),B(()=>(Kt().Set(null),e?we(B(()=>(globalThis.location.reload(),it())),()=>it()):it()))))}function yo(){return B(()=>{let e=Kt().Get();return e!=null&&e.$==1?O(g(e.$0)):(xr().Set(!0),Hr(B(()=>we(B(()=>R($i(),t=>(Kt().Set(t),O(t)))),t=>(console.error("AuthClient.FetchMe RPC failed",t),Kt().Set(null),O(null)))),()=>{xr().Set(!1)}))})}function ko(){return _e.UserView}function Co(){return _e.IsAuthedView}function $o(e){return"https://api.websharper.io/auth/github/start?returnUrl="+encodeURIComponent(e)}function Kt(){return _e.userVar}function xr(){return _e.isFetchingVar}var st=class e extends j{docNode;updates;static get Empty(){return e.Mk(null,ge())}static Mk(t,r){return new e(t,r)}static RunBefore(t,r){let n=globalThis.document.createTextNode("");t.parentNode.insertBefore(n,t),e.RunBetween(n,t,r)}static EmbedView(t){let r=bs();return e.Mk(il(r),_(()=>{},Wo(n=>(xs(r,n.docNode),n.updates),t)))}static RunBetween(t,r,n){rn(r,n.docNode);let a=ys(t,r,n.docNode);Ge(Mr()||Ir()?Dn(Vn(!1,a,n.docNode)):()=>{Mn(!1,a,n.docNode)},n.updates)}static RunInPlace(t,r,n){let a=ks(r,n.docNode);Ge(Mr()||Ir()?Dn(Vn(t,a,n.docNode)):()=>{Mn(t,a,n.docNode)},n.updates)}static TextNode(t){return e.Mk(ll(globalThis.document.createTextNode(t)),ge())}static TextView(t){let r=Es();return e.Mk(sl(r),_(n=>{Vs(r,n)},t))}ReplaceInDom(t){let r=globalThis.document.createTextNode("");t.parentNode.replaceChild(r,t),e.RunBefore(r,this)}constructor(t,r){super(),this.docNode=t,this.updates=r}};function Ao(){let e=Ko(),t=Ho(),r=$n("freelancer"),n=$n("pro"),a=new St("New_1"),o=(a.h.push(new We("onafterrender","",()=>{Xe(ri(),null)})),a),i=(o.h.push(new Zt("proplan",n)),o),l=(i.h.push(new Zt("freelancerplan",r)),i),s=(l.h.push(new z("billmonthattr",t)),l),d=(s.h.push(new z("billyearattr",e)),s),u=(d.h.push(tt(d.k,"onbillmonth",()=>d.i,p=>{Yo(p)})),d),m=(u.h.push(tt(u.k,"onbillyear",()=>u.i,p=>{Jo(p)})),u),w=(m.h.push(new wt("contactsubjectvar",T.Lens($t(),p=>p.subject,(p,y)=>Ft(y,p.message,p.email,p.name,p.country)))),m),f=(w.h.push(new wt("contactmessagevar",T.Lens($t(),p=>p.message,(p,y)=>Ft(p.subject,y,p.email,p.name,p.country)))),w),k=(f.h.push(new wt("contactemailvar",T.Lens($t(),p=>p.email,(p,y)=>Ft(p.subject,p.message,y,p.name,p.country)))),f),$=(k.h.push(new wt("contactnamevar",T.Lens($t(),p=>p.name,(p,y)=>Ft(p.subject,p.message,p.email,y,p.country)))),k),N=($.h.push(new wt("contactcountryvar",T.Lens($t(),p=>p.country,(p,y)=>Ft(p.subject,p.message,p.email,p.name,y)))),$),C=(N.h.push(new z("contactsendbuttonattr",qo())),N),v=(C.h.push(new At("contactsendbuttontext",Oo())),C),c=(v.h.push(tt(v.k,"oncontactsendclick",()=>v.i,p=>{Zo(p)})),v),h=Ht(c.k,c.h,[["contactsubjectvar",0,g("WebSharper support")],["contactmessagevar",0,null],["contactemailvar",0,null],["contactnamevar",0,null],["contactcountryvar",0,g("United States")]]),x=new bt(h[1],di(h[0]));return(c.i=x,x).Doc}var bt=class extends j{doc;allVars;anchorRoot;SetAnchorRoot(t){this.anchorRoot=t}get Doc(){return this.doc}Hole(t){return this.allVars.Item(t)}constructor(t,r){super(),this.doc=r,this.allVars=t.$==0?t.$0:W("Should not happen"),this.anchorRoot=null}},H=class extends j{ForTextView(){return console.warn("Content hole filled with attribute data",this.Name),null}AddAttribute(t,r){console.warn("Var hole filled with non-Var data",this.Name)}get AsChoiceView(){return console.warn("Attribute value hole filled with non-text data",this.Name),ln("")}ApplyVarHole(t){console.warn("Not a var hole: ",this.Name)}},z=class e extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},At=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(this.fillWith)}get AsChoiceView(){return Ut(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},kt=K(e=>class{static{kt=e(this)}static AccountHeaderText;static displayNameV;static hasAvatarV;static avatarSrcV;static isLoading;static isAuthedV;static userV;static isOpen;static{this.isOpen=T.Create_1(!1),this.userV=ko(),this.isAuthedV=Co(),this.isLoading=T.Create_1(!0),this.avatarSrcV=_(r=>r!=null&&r.$==1?Jt(r.$0.avatarUrl)?"":r.$0.avatarUrl:"",xn()),this.hasAvatarV=_(r=>r!="",Rn()),this.displayNameV=_(r=>r==null||Jt(r.$0.login)?"Account":r.$0.login,xn()),this.AccountHeaderText=fo()}});function A(e,t){if(e===t)return!0;{let a=typeof e;if(a=="object"){if(e==null||t===null||t===void 0||!A(typeof t,"object"))return!1;if("Equals"in e)return e.Equals(t);if("Equals"in t)return!1;if(e instanceof Array&&t instanceof Array)return yn(e,t);if(e instanceof Date&&t instanceof Date)return So(e,t);{let o=e,i=t,l=[!0],s;for(var r in o)if((d=>(l[0]=!o.hasOwnProperty(d)||i.hasOwnProperty(d)&&A(o[d],i[d]),!l[0]))(r))break;if(l[0]){let d;for(var n in i)if((u=>(l[0]=!i.hasOwnProperty(u)||o.hasOwnProperty(u),!l[0]))(n))break}return l[0]}}else return a=="function"&&("$Func"in e?e.$Func===t.$Func&&e.$Target===t.$Target:"$Invokes"in e&&"$Invokes"in t&&yn(e.$Invokes,t.$Invokes))}}function he(e){let t=typeof e;return t=="function"?0:t=="boolean"?e?1:0:t=="number"?e:t=="string"?Le(e):t=="object"?e==null?0:e instanceof Array?_o(e):No(e):t=="bigint"?Le(String(e)):t=="symbol"?Le(e.description):0}function Pt(e,t){if(e===t)return 0;{let a=typeof e;switch(a=="boolean"||a=="number"||a=="bigint"||a=="string"?1:a=="object"?2:a=="function"?3:a=="symbol"?4:0){case 0:return typeof t>"u"?0:-1;case 1:return e<t?-1:1;case 2:if(e===null)return-1;if(t===null)return 1;if("CompareTo"in e)return e.CompareTo(t);if("CompareTo0"in e)return e.CompareTo0(t);if(e instanceof Array&&t instanceof Array)return To(e,t);if(e instanceof Date&&t instanceof Date)return Eo(e,t);{let o=e,i=t,l=[0],s;for(var r in o)if((d=>o.hasOwnProperty(d)?i.hasOwnProperty(d)?(l[0]=Pt(o[d],i[d]),l[0]!==0):(l[0]=1,!0):!1)(r))break;if(l[0]===0){let d;for(var n in i)if((u=>i.hasOwnProperty(u)?!o.hasOwnProperty(u)&&(l[0]=-1,!0):!1)(n))break}return l[0]}break;case 3:return W("Cannot compare function values.");case 4:return W("Cannot compare symbol values.")}}}function yn(e,t){let r,n;if(I(e)===I(t)){for(r=!0,n=0;r&&n<I(e);)A(S(e,n),S(t,n))||(r=!1),n=n+1;return r}else return!1}function So(e,t){return e.getTime()===t.getTime()}function Le(e){let t;if(e===null)return 0;t=5381;for(let r=0,n=e.length-1;r<=n;r++)t=qr(t,e[r].charCodeAt());return t}function _o(e){let t=-34948909;for(let r=0,n=I(e)-1;r<=n;r++)t=qr(t,he(S(e,r)));return t}function No(e){if("GetHashCode"in e)return e.GetHashCode();{let r=qr,n=[0],a;for(var t in e)if((o=>(n[0]=r(r(n[0],Le(o)),he(e[o])),!1))(t))break;return n[0]}}function To(e,t){let r,n;if(I(e)<I(t))return-1;if(I(e)>I(t))return 1;for(r=0,n=0;r===0&&n<I(e);)r=Pt(S(e,n),S(t,n)),n=n+1;return r}function Eo(e,t){return Pt(e.getTime(),t.getTime())}function qr(e,t){return(e<<5)+e+t}function Vo(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]","g"),e=>{let t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}var De=class e extends H{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.key,this.fillWith)}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}};function Mo(e){let t={},r=L(e);try{for(;r.MoveNext();){let n=r.Current;t[n[0]]=n[1]}}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}return t}function ur(e){return globalThis.document.getElementById(e)}function kn(e){return"\u20AC"+String(e)}var Fe=class extends j{};function Nt(e,t){return er(t,r=>n=>n?Ii(r,e):Li(r,e))}function ot(e,t){return er(t,r=>n=>r.setAttribute(e,n))}function Io(e,t){return er(t,r=>n=>n?r.setAttribute(e,""):r.removeAttribute(e))}function Lo(e,t){return Q.A3(r=>{r.addEventListener(e,n=>t(r)(n),!1)})}function Cn(e){return Q.A4(e)}function Do(e){return ee(Aa(),e)}function Fo(e){return ee(Sa(),e)}function Go(e){return ee(_a(),e)}function Bo(e){return ee(Na(),e)}function zo(e){return ee(Ta(),e)}function Po(e){return ee(Ea(),e)}function ee(e,t){let r=e(t);return Jn(Q.A3(r[0]),Ro(r[1],r[2]))}function Ro(e,t){return er(t,e)}function _(e,t){return re(()=>ne(e,t()))}function ge(e){let t={s:Et(e)};return()=>t}function re(e){let t={c:null,o:e};return()=>{let r=t.c;if(r===null){r=t.o(),t.c=r;let n=r.s;return n!=null&&n.$==0?t.o=null:ea(r,()=>{t.c=null}),r}else return r}}function Qe(e,t,r){return re(()=>rr(e,t(),r()))}function jn(e,t,r,n){return re(()=>qi(e,t(),r(),n()))}function Wo(e,t){return jo(_(e,t))}function Ge(e,t){function r(){Xi(t(),e,()=>{Tt().Fork(r)})}Tt().Fork(r)}function jo(e){return re(()=>tl(e()))}function Uo(e){return re(()=>el(Wt(t=>t(),e)))}function Be(e,t){return re(()=>rl(e(),t()))}var Q=class e{static Concat(t){let r=nr(t);return ar(Kr(),(n,a)=>Jn(n,a),r)}static A1(t){return at(e,{$:1,$0:t})}static A2(t,r){return at(e,{$:2,$0:t,$1:r})}static HandlerImpl(t,r){return e.A3(n=>{n.addEventListener(t,a=>r(n)(a),!1)})}static Create(t,r){return e.A3(n=>{n.setAttribute(t,r)})}static A4(t){return at(e,{$:4,$0:t})}static A3(t){return at(e,{$:3,$0:t})}$;$0;$1};function Oo(){return Zr.ContactSendButtonText}function qo(){return Zr.ContactSendButtonAttr}function Ho(){let e=_(t=>t.$==1?"false":"true",mt().View);return Q.Concat([ot("data-active",e),ot("aria-pressed",e)])}function Ko(){let e=_(t=>t.$==1?"true":"false",mt().View);return Q.Concat([ot("data-active",e),ot("aria-pressed",e)])}function Yo(){mt().Set(gl)}function Jo(){mt().Set(la)}function Zo(e){e.Event.preventDefault();let t=$t().Get();On(t)?Xe(B(()=>(ze().Set(!0),Hr(B(()=>R(oi(t),r=>r?(alert("Message sent successfully!"),Qo(),it()):(alert("Failed to send message. Please try again later."),it()))),()=>{ze().Set(!1)}))),null):alert("Please fill in all required fields.")}function Qo(){$t().Set(Ft("WebSharper support","","","","United States"))}var T=K(e=>class extends j{static{T=e(this)}static Lens(r,n,a){let o=cl(),i=_(n,r.View);return new class extends Fe{constructor(){super()}Get(){return n(r.Get())}Set(l){return r.Update(s=>a(s,l))}SetFinal(l){return this.Set(l)}Update(l){return r.Update(s=>a(s,l(n(s))))}UpdateMaybe(l){return r.UpdateMaybe(s=>{let d=l(n(s));return d==null?null:g(a(s,d.$0))})}get View(){return i}get Id(){return o}}}static Create_1(r){return new Ar(!1,{s:ir(r,[])},r)}});function $t(){return Rt.ContactFormVar}function yr(){return Rt.IsLoadingVar}function Un(){return Rt.catalogVar}function mt(){return Rt.intervalVar}function On(e){return!Jt(e.message)&&!Jt(e.email)&&!Jt(e.name)&&ei(e.email)}function ze(){return Rt.IsSendingVar}function Xo(){return Rt.CanSendView}function pr(e){return e.$==1?"year":"month"}function ti(e){let n=Pt(999,e)===-1?999:e;return Pt(1,n)===1?1:n}function ei(e){if(e==null)return!1;{let t=Hl(e);return t.indexOf("@")!=-1&&t.indexOf(".")!=-1}}function Ft(e,t,r,n,a){return{subject:e,message:t,email:r,name:n,country:a}}function ri(){return B(()=>(yr().Set(!0),Hr(B(()=>R(ni(),e=>(e==null||ai(e.$0),it()))),()=>{yr().Set(!1)})))}function ni(){return B(()=>{let e=ii();return e==null?R(li(),t=>{let r;return t!=null&&t.$==1&&I(t.$0)>0&&(r=t.$0,!0)?(si(r),O(g(r))):O(null)}):O(g(e.$0))})}function ai(e){Un().Set(oa(dl(El(t=>{let r=t.YearPrice;return r!=null&&r.$==1?r.$0.Amount:0},dt(t=>{let r=t[1],n=S(r,0),a=l=>{let s=Tl(d=>d.interval==l,r);if(s==null)return null;{let d=s.$0,u=Xl(d.unitAmountCents/100,d.currency.toUpperCase());return g(u)}},o=n.description,i=o==null?"":o.$0;return hl(t[0],n.name,i,n.isPerSeat,n.maxSeats,a("month"),a("year"))},gs(t=>t.code.toLowerCase(),e))))))}function oi(e){return B(()=>{let t=new FormData;return t.append("subject",e.subject),t.append("message",e.message),t.append("email",e.email),t.append("name",e.name),t.append("country",e.country),we(B(()=>{let r;return R(ts(globalThis.fetch("https://api.intellifactory.com/api/contact",(r={},r.method="POST",r.body=t,r))),n=>O(n.ok))}),()=>O(!1))})}function ii(){try{let e=globalThis.sessionStorage.getItem("planprices");return e==null||Jt(e)?null:g(JSON.parse(e))}catch{return null}}function li(){return B(()=>we(B(()=>R(Ai(),e=>O(g(e)))),()=>O(null)))}function si(e){try{let t=JSON.stringify(e);globalThis.sessionStorage.setItem("planprices",t)}catch{}}function $n(e){return st.EmbedView(Qe((t,r)=>{if(t){let n=new St("New_1"),a=Ht(n.k,n.h,[]),o=new bt(a[1],ui(a[0]));return(n.i=o,o).Doc}else{let n=wl(a=>a.Id==e,r.Plans);return n==null?st.Empty:ci(n.$0)}},yr().View,Un().View))}function ci(e){let t,r=T.Create_1(1),n=_(b=>b.$==1?e.YearPrice:e.MonthPrice,mt().View),a=_(b=>b==null?"N/A":kn(b.$0.Amount),n),o=_(b=>(e.IsPerSeat?" / seat":"")+" / "+pr(b),mt().View),i=jn((b,p,y)=>p==null?"-":kn(p.$0.Amount*y),mt().View,n,r.View),l=_(b=>"Total ("+pr(b)+"ly)",mt().View),s=e.MaxSeats;if(s==null||s.$0>1){let b=T.Lens(r,String,(J,G)=>{let U,Z=(U=0,[ma(G,{get:()=>U,set:ut=>{U=ut}}),U]);return Z[0]?Z[1]:J}),p=new St("New_1"),y=(p.h.push(new wt("seatcount",b)),p),M=(y.h.push(tt(y.k,"onseatminus",()=>y.i,()=>{r.Get()>1&&r.Set(r.Get()-1)})),y),E=(M.h.push(tt(M.k,"onseatplus",()=>M.i,()=>{r.Set(r.Get()+1)})),M),D=Ht(E.k,E.h,[["seatcount",0,null]]),V=new bt(D[1],gi(D[0]));t=(E.i=V,V).Doc}else{let b=new St("New_1"),p=Ht(b.k,b.h,[]),y=new bt(p[1],wi(p[0]));t=(b.i=y,y).Doc}let d=ot("href",Qe((b,p)=>"./checkout?plan="+String(e.Id)+"&interval="+String(pr(b))+"&seats="+String(ti(p)),mt().View,r.View)),u=new St("New_1"),m=(u.h.push(new ye("name",e.Name)),u),w=(m.h.push(new ye("description",e.Description)),m),f=(w.h.push(new At("priceamount",a)),w),k=(f.h.push(new At("pricelabel",o)),f),$=(k.h.push(new Zt("seatselector",t)),k),N=($.h.push(new At("totallabel",l)),$),C=(N.h.push(new At("totalamount",i)),N),v=(C.h.push(new z("checkoutattr",d)),C),c=Ht(v.k,v.h,[]),h=new bt(c[1],hi(c[0]));return(v.i=h,h).Doc}function g(e){return{$:1,$0:e}}var hr;var gr;function di(e){return e?Ae("support",g("content"),()=>pt(`\r
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
                <div class="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-3">\r
\r
                    <div class="rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r
                dark:bg-gray-950 dark:border-gray-800 flex flex-col h-full relative">\r
\r
                        <div class="flex-1">\r
                            <div class="flex items-start justify-between gap-4">\r
                                <div>\r
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Plan</div>\r
                                    <div class="text-2xl font-bold text-gray-950 dark:text-white">Community</div>\r
                                    <div class="mt-1 text-base text-gray-700 dark:text-gray-300">\r
                                        <span>Free</span>\r
                                        <span class="text-gray-600 dark:text-gray-400">forever</span>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="mt-4 flex items-center justify-between">\r
                                <div class="text-sm text-gray-600 dark:text-gray-400"></div>\r
                                <div class="text-xl font-semibold text-gray-950 dark:text-white">FREE</div>\r
                            </div>\r
                        </div>\r
\r
                        <a class="w-full rounded-xl h-10 border border-gray-950 dark:border-gray-800\r
                  flex justify-center items-center px-6 dark:text-white text-gray-900 relative\r
                  mt-4 hover:opacity-90 transition-opacity">\r
                            <span class="relative text-sm">Need more?</span>\r
                        </a>\r
\r
                        <p class="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center">Ideal for solo developers</p>\r
                    </div>\r
\r
                    <div ws-replace="ProPlan"></div>\r
\r
                    <div ws-replace="FreelancerPlan"></div>\r
\r
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
    `),e):ie("support",g("content"),()=>pt(`\r
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
                <div class="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-3">\r
\r
                    <div class="rounded-2xl bg-white p-6 shadow-sm shadow-gray-950/5 border border-gray-200\r
                dark:bg-gray-950 dark:border-gray-800 flex flex-col h-full relative">\r
\r
                        <div class="flex-1">\r
                            <div class="flex items-start justify-between gap-4">\r
                                <div>\r
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Plan</div>\r
                                    <div class="text-2xl font-bold text-gray-950 dark:text-white">Community</div>\r
                                    <div class="mt-1 text-base text-gray-700 dark:text-gray-300">\r
                                        <span>Free</span>\r
                                        <span class="text-gray-600 dark:text-gray-400">forever</span>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="mt-4 flex items-center justify-between">\r
                                <div class="text-sm text-gray-600 dark:text-gray-400"></div>\r
                                <div class="text-xl font-semibold text-gray-950 dark:text-white">FREE</div>\r
                            </div>\r
                        </div>\r
\r
                        <a class="w-full rounded-xl h-10 border border-gray-950 dark:border-gray-800\r
                  flex justify-center items-center px-6 dark:text-white text-gray-900 relative\r
                  mt-4 hover:opacity-90 transition-opacity">\r
                            <span class="relative text-sm">Need more?</span>\r
                        </a>\r
\r
                        <p class="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center">Ideal for solo developers</p>\r
                    </div>\r
\r
                    <div ws-replace="ProPlan"></div>\r
\r
                    <div ws-replace="FreelancerPlan"></div>\r
\r
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
    `))}function ui(e){return e?Ae("support",g("skeletoncard"),()=>pt(`<div>\r
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
                </div>`),e):ie("support",g("skeletoncard"),()=>pt(`<div>\r
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
                </div>`))}function pi(){return hr||(hr=ds(void 0,"$",[null,[1,[["$0","Value",ft(),0]]]])())}function hi(e){return e?Ae("support",g("plancard"),()=>pt(`<div>\r
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
                </div>`),e):ie("support",g("plancard"),()=>pt(`<div>\r
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
                </div>`))}function gi(e){return e?Ae("support",g("seatwidget"),()=>pt(`<div class="custom-number-input h-10 w-24">\r
                    <div class="flex flex-row h-10 w-full rounded-lg relative">\r
                        <button ws-onclick="OnSeatMinus" class="dark:bg-gray-900 bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none">\r
                            <span class="m-auto text-2xl font-thin">\u2212</span>\r
                        </button>\r
                        <input type="text" ws-var="SeatCount" class="border border-gray-600 dark:border-white/20 text-gray-950 dark:text-white outline-none focus:outline-none text-center w-full font-semibold text-md md:text-basecursor-default flex items-center outline-none" readonly="">\r
                        <button ws-onclick="OnSeatPlus" class="dark:bg-gray-900 bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer">\r
                            <span class="m-auto text-2xl font-thin">+</span>\r
                        </button>\r
                    </div>\r
                </div>`),e):ie("support",g("seatwidget"),()=>pt(`<div class="custom-number-input h-10 w-24">\r
                    <div class="flex flex-row h-10 w-full rounded-lg relative">\r
                        <button ws-onclick="OnSeatMinus" class="dark:bg-gray-900 bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none">\r
                            <span class="m-auto text-2xl font-thin">\u2212</span>\r
                        </button>\r
                        <input type="text" ws-var="SeatCount" class="border border-gray-600 dark:border-white/20 text-gray-950 dark:text-white outline-none focus:outline-none text-center w-full font-semibold text-md md:text-basecursor-default flex items-center outline-none" readonly="">\r
                        <button ws-onclick="OnSeatPlus" class="dark:bg-gray-900 bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer">\r
                            <span class="m-auto text-2xl font-thin">+</span>\r
                        </button>\r
                    </div>\r
                </div>`))}function wi(e){return e?Ae("support",g("staticseatbadge"),()=>pt(`<div>\r
                    <div class="rounded-md border border-gray-300 px-3 h-10 flex items-center text-gray-800 dark:border-white/20 dark:text-white bg-gray-50 dark:bg-white/5">\r
                        solo\r
                    </div>\r
                </div>`),e):ie("support",g("staticseatbadge"),()=>pt(`<div>\r
                    <div class="rounded-md border border-gray-300 px-3 h-10 flex items-center text-gray-800 dark:border-white/20 dark:text-white bg-gray-50 dark:bg-white/5">\r
                        solo\r
                    </div>\r
                </div>`))}function vi(){return gr||(gr=hs(void 0,[["code",ft(),0],["name",ft(),0],["description",ft(),1],["isPerSeat",ft(),0],["maxSeats",ft(),1],["interval",ft(),0],["currency",ft(),0],["unitAmountCents",ft(),0]])())}function B(e){return t=>{try{e()(t)}catch(r){t.k(or(r))}}}function R(e,t){return mi(r=>{e(Ne(n=>{if(n.$==0){let a=n.$0;Tt().Fork(()=>{try{t(a)(r)}catch(o){r.k(or(o))}})}else Tt().Fork(()=>{r.k(n)})},r.ct))})}function O(e){return t=>{t.k(Te(e))}}function Xe(e,t){let r=qn()[0],n=t==null?r:t.$0;n.c||e(Ne(a=>{a.$==1&&Hn(a.$0)},n))}function fi(e){return t=>{let r,n;r=void 0,n=void 0,r=setTimeout(()=>{n.Dispose(),Tt().Fork(()=>{t.k(Te(null))})},e),n=Kn(t.ct,()=>{clearTimeout(r),Tt().Fork(()=>{Yn(t)})})}}function it(){return le.Zero}function mi(e){return t=>{t.ct.c?Yn(t):e(t)}}function bi(e,t){return R(e,()=>t)}function we(e,t){return r=>{e(Ne(n=>{if(n.$==0)r.k(Te(n.$0));else if(n.$==1){let a=n.$0;try{t(a)(r)}catch{r.k(n)}}else r.k(n)},r.ct))}}function qn(){return le.defCTS}function Hn(e){console.log("WebSharper: Uncaught asynchronous exception",e)}function Hr(e,t){return r=>{e(Ne(n=>{try{t(),r.k(n)}catch(a){r.k(or(a))}},r.ct))}}function Kn(e,t){if(e===xi())return{Dispose(){return null}};{let r=e.r.push(t)-1;return{Dispose(){return Or(e.r,r,()=>{})}}}}function Yn(e){e.k(fa(new Ke("New",e.ct)))}function Tt(){return le.scheduler}function xi(){return le.noneCT}function tr(e){return t=>{let r=[!1],n=a=>{r[0]?W("A continuation provided by Async.FromContinuations was invoked multiple times"):(r[0]=!0,Tt().Fork(a))};e(a=>{n(()=>{t.k(Te(a))})},a=>{n(()=>{t.k(or(a))})},a=>{n(()=>{t.k(fa(a))})})}}function yi(e,t){let r=qn()[0],n=t==null?r:t.$0;Tt().Fork(()=>{n.c||e(Ne(a=>{a.$==1&&Hn(a.$0)},n))})}function ki(){return le.GetCT}function Ci(){return new be().Async("IRemotingContract/Logout",[])}function $i(){return R(new be().Async("IRemotingContract/Me",[]),e=>O(pi()(e)))}function Ai(){return R(new be().Async("IRemotingContract/GetPlanPrices",[]),e=>O(us(vi)()(e)))}function er(e,t){return Q.A1(new _r(e,t))}function Jn(e,t){if(e===null)return t;if(t===null)return e;{let r=Q.A2(e,t);return Si(r,kr(e)|kr(t)),r}}function Kr(){return F.EmptyAttr}function Si(e,t){e.flags=t}function kr(e){return e!==null&&e.hasOwnProperty("flags")?e.flags:0}function Yr(e,t){let r=[],n=[];function a(l){for(;;)if(l!==null){if(l!=null&&l.$==1)return r.push(l.$0);if(l!=null&&l.$==2){let s=l.$1,d=l.$0;a(d),l=s}else return l!=null&&l.$==3?l.$0(e):l!=null&&l.$==4?n.push(l.$0):null}else return null}a(t);let o=r.slice(0);return ya(e,kr(t),o,n.length===0?null:g(l=>{yl(s=>{s(l)},n)}))}function Zn(e){return ol(t=>t.NChanged,ge(),Be,e.DynNodes)}function wr(e){return ya(e,0,[],null)}function _i(e){return(e.DynFlags&2)===2}function Ni(e){return Jr(e,(t,r)=>t.NGetExitAnim(r))}function Ti(e){return(e.DynFlags&1)===1}function Ei(e){return Jr(e,(t,r)=>t.NGetEnterAnim(r))}function Vi(e){return(e.DynFlags&4)===4}function Mi(e){return Jr(e,(t,r)=>t.NGetChangeAnim(r))}function Jr(e,t){return lr(dt(r=>t(r,e.DynElem),e.DynNodes))}function Qn(e,t){X(r=>{r.NSync(e)},t.DynNodes)}function Ii(e,t){let r=Xn(e);r==""?Cr(e,t):ta(t).test(r)||Cr(e,r+" "+t)}function Li(e,t){let r=ta(t),n=Xn(e).replace(r,(a,o,i)=>o==""||i==""?"":" ");Cr(e,n)}function Xn(e){return e instanceof SVGElement?e.getAttribute("class"):e.className}function Cr(e,t){e instanceof SVGElement?e.setAttribute("class",t):e.className=t}function ta(e){return new RegExp("(\\s+|^)"+e+"(?:\\s+"+e+")*(\\s+|$)","g")}function pt(e){let t=globalThis.document.createElement("div");if(Di().test(e)){let i=function(l,s){for(;;){if(s===0)return l;{let d=s;l=l.lastChild,s=d-1}}},r=zi().exec(e),n=A(r,null)?"":S(r,1).toLowerCase(),a=Fi()[n],o=a||Gi();return t.innerHTML=o[1]+e.replace(Bi(),"<$1></$2>")+o[2],(l=>{let s=l;return d=>i(s,d)})(t)(o[0])}else return t.appendChild(globalThis.document.createTextNode(e)),t}function Di(){return se.rhtml}function Fi(){return se.wrapMap}function Gi(){return se.defaultWrap}function Bi(){return se.rxhtmlTag}function zi(){return se.rtagName}function Pi(e,t,r){let n=e.querySelectorAll(t);for(let a=0,o=n.length-1;a<=o;a++)r(n[a])}function An(e){let t=[];for(let r=0,n=e.childNodes.length-1;r<=n;r++)t.push(e.childNodes[r]);return t}function Ri(e,t){let r=globalThis.document.querySelectorAll(e);for(let n=0,a=r.length-1;n<=a;n++)t(r[n])}function Wi(e,t,r){let n;if(r.parentNode===e){let a=r.nextSibling,o=A(a,null)?null:a;n=t===o}else n=!1;n||e.insertBefore(r,t)}function ji(e,t){t.parentNode===e&&e.removeChild(t)}function ne(e,t){let r=t.s;if(r!=null&&r.$==0)return{s:Et(e(r.$0))};{let n={s:jt([],[])};return lt(t,a=>{ra(n,t,e(a))},n),n}}function ea(e,t){let r=e.s;r==null?t():r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,r.$1.push(t)):r.$0}function lt(e,t,r){let n=e.s;if(n==null)xe(r);else if(n!=null&&n.$==2){let a=n.$0;Pe(n.$1,r),t(a)}else if(n!=null&&n.$==3){let a=n.$1;n.$0.push(t),Pe(a,r)}else t(n.$0)}function ra(e,t,r){let n=t.s;n!=null&&n.$==0?ae(e,r):oe(e,r)}function rr(e,t,r){let n=t.s,a=r.s;if(n!=null&&n.$==0)return a!=null&&a.$==0?{s:Et(e(n.$0,a.$0))}:Ui(e,n.$0,r);if(a!=null&&a.$==0)return Oi(e,a.$0,t);{let o={s:jt([],[])},i=()=>{let l=o.s;if(!(l!=null&&l.$==0||l!=null&&l.$==2)){let s=Gt(t),d=Gt(r);s!=null&&s.$==1&&d!=null&&d.$==1&&(s.$0[1]&&d.$0[1]?ae(o,e(s.$0[0],d.$0[0])):oe(o,e(s.$0[0],d.$0[0])))}};return lt(t,i,o),lt(r,i,o),o}}function Pe(e,t){if(e.push(t),e.length%20===0){let r=e.slice(0);uc(e);for(let n=0,a=I(r)-1;n<=a;n++){let o=S(r,n);typeof o=="object"?(i=>{i.s&&e.push(i)})(o):(i=>{e.push(i)})(o)}}}function ae(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$0;e.s=Et(t);for(let a=0,o=I(n)-1;a<=o;a++)S(n,a)(t)}}function oe(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$1,a=r.$0;e.s=ir(t,n);for(let o=0,i=I(a)-1;o<=i;o++)S(a,o)(t)}}function Ui(e,t,r){return ne(n=>e(t,n),r)}function Oi(e,t,r){return ne(n=>e(n,t),r)}function Gt(e){let t=e.s;return t!=null&&t.$==0?g([t.$0,!0]):t!=null&&t.$==2?g([t.$0,!1]):null}function qi(e,t,r,n){let a=t.s,o=r.s,i=n.s;if(a!=null&&a.$==0)return o!=null&&o.$==0?i!=null&&i.$==0?{s:Et(e(a.$0,o.$0,i.$0))}:Hi(e,a.$0,o.$0,n):i!=null&&i.$==0?Ki(e,a.$0,i.$0,r):Yi(e,a.$0,r,n);if(o!=null&&o.$==0)return i!=null&&i.$==0?Ji(e,o.$0,i.$0,t):Zi(e,o.$0,t,n);if(i!=null&&i.$==0)return Qi(e,i.$0,t,r);{let l={s:jt([],[])},s=()=>{let d=l.s;if(!(d!=null&&d.$==0||d!=null&&d.$==2)){let u=Gt(t),m=Gt(r),w=Gt(n);u!=null&&u.$==1&&m!=null&&m.$==1&&w!=null&&w.$==1&&(u.$0[1]&&m.$0[1]&&w.$0[1]?ae(l,e(u.$0[0],m.$0[0],w.$0[0])):oe(l,e(u.$0[0],m.$0[0],w.$0[0])))}};return lt(t,s,l),lt(r,s,l),lt(n,s,l),l}}function Hi(e,t,r,n){return ne(a=>e(t,r,a),n)}function Ki(e,t,r,n){return ne(a=>e(t,a,r),n)}function Yi(e,t,r,n){return rr((a,o)=>e(t,a,o),r,n)}function Ji(e,t,r,n){return ne(a=>e(a,t,r),n)}function Zi(e,t,r,n){return rr((a,o)=>e(a,t,o),r,n)}function Qi(e,t,r,n){return rr((a,o)=>e(a,o,t),r,n)}function Xi(e,t,r){let n=e.s;if(n==null)r();else if(n!=null&&n.$==2){let a=n.$0;n.$1.push(r),t(a)}else if(n!=null&&n.$==3){let a=n.$1;n.$0.push(t),a.push(r)}else t(n.$0)}function tl(e){let t={s:jt([],[])};return lt(e,r=>{let n=r();lt(n,a=>{let o,i=n.s;if(i!=null&&i.$==0){let l=e.s;o=l!=null&&l.$==0}else o=!1;o?ae(t,a):oe(t,a)},t)},t),t}function el(e){let t=Qt(e);if(t.length==0)return{s:Et([])};{let r={s:jt([],[])},n=[I(t)-1],a=()=>{if(n[0]===0){let o=dt(i=>{let l=i.s;return l!=null&&l.$==0||l!=null&&l.$==2?l.$0:W("value not found by View.Sequence")},t);ua(i=>{let l=i.s;return l!=null&&l.$==0},t)?ae(r,o):oe(r,o)}else n[0]=n[0]-1};return X(o=>{lt(o,a,r)},t),r}}function rl(e,t){let r=e.s,n=t.s;if(r!=null&&r.$==0)return n!=null&&n.$==0?{s:Et(null)}:t;if(n!=null&&n.$==0)return e;{let a={s:jt([],[])},o=()=>{let i=a.s;if(!(i!=null&&i.$==0||i!=null&&i.$==2)){let l=Gt(e),s=Gt(t);l!=null&&l.$==1&&s!=null&&s.$==1&&(l.$0[1]&&s.$0[1]?ae(a,null):oe(a,null))}};return lt(e,o,a),lt(t,o,a),a}}function nl(e){let t=e.s;if(t==null)return e;if(t!=null&&t.$==2){let r={s:ir(t.$0,[])};return al(e,r),r}else if(t!=null&&t.$==3){let r={s:jt([],[])};return lt(e,n=>{ra(r,e,n)},r),r}else return e}function al(e,t){let r=e.s;r==null?xe(t):r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,Pe(r.$1,t)):r.$0}function nr(e){if(e instanceof Array)return e;if(e instanceof yt)return ca(e);if(e===null)return[];{let t=[],r=L(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}}function ar(e,t,r){let n=I(r);function a(o){return i=>{let l;switch(i<=0?0:i===1&&o>=0&&o<n?1:(l=i,2)){case 0:return e;case 1:return S(r,o);case 2:let s=i/2>>0;return t(a(o)(s),a(o+s)(i-s))}}}return a(0)(n)}function ol(e,t,r,n){let a=I(n);function o(i){return l=>{let s;switch(l<=0?0:l===1&&i>=0&&i<a?1:(s=l,2)){case 0:return t;case 1:return e(S(n,i));case 2:let d=l/2>>0;return r(o(i)(d),o(i+d)(l-d))}}}return o(0)(a)}function il(e){return{$:2,$0:e}}function na(e){return{$:6,$0:e}}function ll(e){return{$:5,$0:e}}function sl(e){return{$:4,$0:e}}var Zr=K(e=>class{static{Zr=e(this)}static ContactSendButtonText;static ContactSendButtonAttr;static{this.ContactSendButtonAttr=Io("disabled",Qe((r,n)=>!r||n,Xo(),ze().View)),this.ContactSendButtonText=_(r=>r?"Sending...":"Send",ze().View)}}),wt=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(this.fillWith.View)}AddAttribute(t,r){t(r)(Do(this.fillWith))}get AsChoiceView(){return Ut(_(String,this.fillWith.View))}ApplyVarHole(t){ce(Aa(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function cl(){return aa(Re()+1),"uid"+String(Re())}function aa(e){en.counter=e}function Re(){return en.counter}function Yt(){return aa(Re()+1),Re()}var Rt=K(e=>class{static{Rt=e(this)}static CanSendView;static IsSendingVar;static ContactFormVar;static intervalVar;static catalogVar;static IsLoadingVar;static{this.IsLoadingVar=T.Create_1(!0),this.catalogVar=T.Create_1(oa(yt.Empty)),this.intervalVar=T.Create_1(la),this.ContactFormVar=T.Create_1(Ft("WebSharper support","","","","United States")),this.IsSendingVar=T.Create_1(!1),this.CanSendView=_(On,$t().View)}}),Zt=class e extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},We=class e extends H{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.key,this.fillWith)}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}};function oa(e){return{Plans:e}}function dl(e){let t=yt.Empty;for(let r=I(e)-1,n=0;r>=n;r--)t=yt.Cons(S(e,r),t);return t}function ul(e){return e.$==1?e.$0:ia()}function pl(e){return e.$==1?e.$1:ia()}function ia(){return W("The input list was empty.")}function hl(e,t,r,n,a,o,i){return{Id:e,Name:t,Description:r,IsPerSeat:n,MaxSeats:a,MonthPrice:o,YearPrice:i}}var gl={$:0},la={$:1},rt=class extends j{equals;hash;count;data;set_Item(t,r){this.set(t,r)}set(t,r){let n=this.hash(t),a=this.data[n];if(a==null)this.count=this.count+1,this.data[n]=new Array({K:t,V:r});else{let o=Xr(i=>this.equals.apply(null,[Dt(i)[0],t]),a);o==null?(this.count=this.count+1,a.push({K:t,V:r})):a[o.$0]={K:t,V:r}}}TryGetValue(t,r){let n=this.data[this.hash(t)];if(n==null)return!1;{let a=da(o=>{let i=Dt(o);return this.equals.apply(null,[i[0],t])?g(i[1]):null},n);return a!=null&&a.$==1&&(r.set(a.$0),!0)}}ContainsKey(t){let r=this.data[this.hash(t)];return r==null?!1:$r(n=>this.equals.apply(null,[Dt(n)[0],t]),r)}GetEnumerator(){return as(Il(Qa(this.data)))}Item(t){return this.get(t)}get Values(){return new zr(this)}DAdd(t,r){this.add(t,r)}RemoveKey(t){return this.remove(t)}get Keys(){return new Rr(this)}get(t){let r=this.data[this.hash(t)];return r==null?rs():Ll(n=>{let a=Dt(n);return this.equals.apply(null,[a[0],t])?g(a[1]):null},r)}add(t,r){let n=this.hash(t),a=this.data[n];a==null?(this.count=this.count+1,this.data[n]=new Array({K:t,V:r})):($r(o=>this.equals.apply(null,[Dt(o)[0],t]),a)&&ns(),this.count=this.count+1,a.push({K:t,V:r}))}remove(t){let r=this.hash(t),n=this.data[r];if(n==null)return!1;{let a=$e(o=>!this.equals.apply(null,[Dt(o)[0],t]),n);return I(a)<n.length&&(this.count=this.count-1,this.data[r]=a,!0)}}constructor(t,r,n,a){if(t=="New_5"&&(t="New_6",r=[],n=A,a=he),t=="New_6"){let o=r,i=n,l=a;super(),this.equals=i,this.hash=l,this.count=0,this.data=[];let s=L(o);try{for(;s.MoveNext();){let d=s.Current;this.set(d.K,d.V)}}finally{let d=s;typeof d=="object"&&et(d)&&s.Dispose()}}}},ct=class e extends j{equals;hash;data;count;SAdd(t){return this.add(t)}Contains(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrContains(t,r)}add(t){let r=this.hash(t),n=this.data[r];return n==null?(this.data[r]=[t],this.count=this.count+1,!0):this.arrContains(t,n)?!1:(n.push(t),this.count=this.count+1,!0)}arrContains(t,r){let n=!0,a=0,o=r.length;for(;n&&a<o;)this.equals.apply(null,[r[a],t])?n=!1:a=a+1;return!n}GetEnumerator(){return L(fr(this.data))}ExceptWith(t){let r=L(t);try{for(;r.MoveNext();)this.Remove(r.Current)}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}get Count(){return this.count}IntersectWith(t){let r=new e("New_4",t,this.equals,this.hash),n=fr(this.data);for(let a=0,o=n.length-1;a<=o;a++){let i=n[a];r.Contains(i)||this.Remove(i)}}Remove(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrRemove(t,r)&&(this.count=this.count-1,!0)}CopyTo(t,r){let n=fr(this.data);for(let a=0,o=n.length-1;a<=o;a++)Or(t,a+r,n[a])}arrRemove(t,r){let n=!0,a=0,o=r.length;for(;n&&a<o;)this.equals.apply(null,[r[a],t])?(r.splice(a,1),n=!1):a=a+1;return!n}constructor(t,r,n,a){t=="New_3"&&(t="New_4",r=[],n=A,a=he);let o;if(t=="New_2"&&(o=r,t="New_4",r=o,n=A,a=he),t=="New_4"){let i=r,l=n,s=a;super(),this.equals=l,this.hash=s,this.data=[],this.count=0;let d=L(i);try{for(;d.MoveNext();)this.add(d.Current)}finally{let u=d;typeof u=="object"&&et(u)&&d.Dispose()}}}};function sa(e,t){return{GetEnumerator:()=>{let r=L(e),n=[!0];return new ht(r,null,a=>{if(a.s.MoveNext())return a.c=a.s.Current,!0;{let o=a.s;return A(o,null)||o.Dispose(),a.s=null,n[0]&&(n[0]=!1,a.s=L(t),a.s.MoveNext()?(a.c=a.s.Current,!0):(a.s.Dispose(),a.s=null,!1))}},a=>{let o=a.s;A(o,null)||o.Dispose()})}}}function wl(e,t){let r=L(t);try{let n=null;for(;n==null&&r.MoveNext();){let a=r.Current;e(a)&&(n=g(a))}return n}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}function Sn(e){return{GetEnumerator:()=>L(e())}}function vl(e,t){return bl(Wt(e,t))}function Wt(e,t){return{GetEnumerator:()=>{let r=L(t);return new ht(null,null,n=>r.MoveNext()&&(n.c=e(r.Current),!0),()=>{r.Dispose()})}}}function fl(e){let t=L(e);try{return t.MoveNext()?t.Current:Er()}finally{let r=t;typeof r=="object"&&et(r)&&t.Dispose()}}function ml(e,t,r){let n=t,a=L(r);try{for(;a.MoveNext();)n=e(n,a.Current);return n}finally{let o=a;typeof o=="object"&&et(o)&&a.Dispose()}}function bl(e){return{GetEnumerator:()=>{let t=L(e);function r(n){for(;;){let a=n.s;if(A(a,null))if(t.MoveNext())n.s=L(t.Current),n=n;else return t.Dispose(),!1;else{if(a.MoveNext())return n.c=a.Current,!0;n.Dispose(),n.s=null,n=n}}}return new ht(null,null,r,n=>{let a=n.s;A(a,null)||a.Dispose();let o=t;A(o,null)||o.Dispose()})}}}function xl(e,t){return kl(e,Cl(t))}function yl(e,t){let r=L(t);try{for(;r.MoveNext();)e(r.Current)}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}function kl(e,t){return e<0&&fs(),{GetEnumerator:()=>{let r=[L(t)];return new ht(0,null,n=>{if(n.s=n.s+1,n.s>e)return!1;{let a=r[0];return A(a,null)?Er():a.MoveNext()?(n.c=a.Current,n.s===e&&(a.Dispose(),r[0]=null),!0):(a.Dispose(),r[0]=null,Er())}},()=>{let n=r[0];A(n,null)||n.Dispose()})}}}function Cl(e){return{GetEnumerator:()=>new ht(0,null,t=>(t.c=e(t.s),t.s=t.s+1,!0),void 0)}}function $l(e,t){return!Al(r=>!e(r),t)}function Al(e,t){let r=L(t);try{let n=!1;for(;!n&&r.MoveNext();)n=e(r.Current);return n}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}function Sl(e){let t=L(e);try{t.MoveNext()||Nl();let r=t.Current;for(;t.MoveNext();){let n=t.Current;Pt(n,r)===1&&(r=n)}return r}finally{let r=t;typeof r=="object"&&et(r)&&t.Dispose()}}function _l(e,t){return{GetEnumerator:()=>{let r=L(t),n=new ct("New_3");return new ht(null,null,a=>{let o,i;if(r.MoveNext()){for(o=r.Current,i=n.SAdd(e(o));!i&&r.MoveNext();)o=r.Current,i=n.SAdd(e(o));return i&&(a.c=o,!0)}else return!1},()=>{r.Dispose()})}}}function Nl(){return W("The input sequence was empty.")}function Qr(e,t){let r=[];for(let n=0,a=t.length-1;n<=a;n++){let o=e(t[n]);o==null||r.push(o.$0)}return r}function ca(e){let t=[],r=e;for(;r.$!=0;)t.push(ul(r)),r=pl(r);return t}function dt(e,t){let r=new Array(t.length);for(let n=0,a=t.length-1;n<=a;n++)r[n]=e(t[n]);return r}function Tl(e,t){let r=null,n=0;for(;n<t.length&&r==null;)e(t[n])&&(r=g(t[n])),n=n+1;return r}function El(e,t){return dt(r=>r[0],Vl((r,n)=>[n,[e(n),r]],t).sort((r,n)=>Pt(r[1],n[1])))}function Vl(e,t){let r=new Array(t.length);for(let n=0,a=t.length-1;n<=a;n++)r[n]=e(n,t[n]);return r}function Xr(e,t){let r=null,n=0;for(;n<t.length&&r==null;)e(t[n])&&(r=g(n)),n=n+1;return r}function da(e,t){let r=null,n=0;for(;n<t.length&&r==null;){let a=e(t[n]);a!=null&&a.$==1&&(r=a),n=n+1}return r}function Ml(e,t){let r=Xr(e,t);return r==null?W("KeyNotFoundException"):r.$0}function X(e,t){for(let r=0,n=t.length-1;r<=n;r++)e(t[r])}function $r(e,t){let r=!1,n=0,a=I(t);for(;!r&&n<a;)e(t[n])?r=!0:n=n+1;return r}function Il(e){return Array.prototype.concat.apply([],Qt(e))}function $e(e,t){let r=[];for(let n=0,a=t.length-1;n<=a;n++)e(t[n])&&r.push(t[n]);return r}function tn(e,t,r){let n=r,a=t.length;for(let o=1,i=a;o<=i;o++)n=e(t[a-o],n);return n}function Qt(e){if(e instanceof Array)return e.slice();if(e instanceof yt)return ca(e);{let t=[],r=L(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}}function Ll(e,t){let r=da(e,t);return r==null?W("KeyNotFoundException"):r.$0}function Dl(e,t){return Qt(_l(e,t))}function ua(e,t){let r=!0,n=0,a=I(t);for(;r&&n<a;)e(t[n])?n=n+1:r=!1;return r}function Fl(e,t){let r=new Array(e);for(let n=0,a=e-1;n<=a;n++)r[n]=t;return r}function Gl(e,t){e<0&&W("Negative size given.");let r=new Array(e);for(let n=0,a=e-1;n<=a;n++)r[n]=t(n);return r}var Y=K(e=>class extends j{static{Y=e(this)}static init;id;vars;static initialized;static instances;static GetOrAddHoleFor(r,n,a){let o,i=Y.GetHolesFor(r),l=(o=null,[i.TryGetValue(n,{get:()=>o,set:s=>{o=s}}),o]);if(l[0])return l[1];{let s=a();return i.set_Item(n,s),s}}static GetHolesFor(r){let n,a=(n=null,[Y.initialized.TryGetValue(r,{get:()=>n,set:o=>{n=o}}),n]);if(a[0])return a[1];{let o=new rt("New_5");return Y.initialized.set_Item(r,o),o}}static applyVarHole(r,n){n.ApplyVarHole(r)}InitInstance(r){let n=Y.GetHolesFor(r),a=this.vars;for(let i=0,l=a.length-1;i<=l;i++)(()=>{let s,d=S(a,i),u=d[1],m=d[2],w=d[0];if(n.ContainsKey(w))return null;if(u===0){let f=m==null?null:g(m.$0),k=f==null?"":f.$0,$=T.Create_1(k);s=new wt(w,$)}else if(u===1){let f=m==null?null:g(m.$0),k=f==null?0:f.$0,$=T.Create_1(k);s=new je(w,$)}else if(u===2){let f=m==null?null:g(m.$0),k=f==null?!1:f.$0,$=T.Create_1(k);s=new Ue(w,$)}else if(u===3){let f=m==null?null:g(m.$0),k=f==null?-864e13:f.$0,$=T.Create_1(k);s=new Oe(w,$)}else if(u===4){let f=m==null?null:g(m.$0),k=f==null?[]:f.$0,$=T.Create_1(k);s=new qe(w,$)}else if(u===5){let f=m==null?null:g(m.$0),k=globalThis.document.querySelector("[ws-dom="+w+"]"),$=f==null?k:f.$0,N=g($),C=T.Create_1(N);s=new ve(w,C)}else if(u===6){let f=m==null?null:g(m.$0),k=f==null?[]:f.$0,$=T.Create_1(k);s=new He(w,$)}else s=W("Invalid kind for template Var type: "+String(u));return n.set_Item(w,s)})();let o=new bt({$:0,$0:n},st.Empty);return Y.instances.set_Item(r,o),o}$preinit(r){let n=this.InitInstance(r),a=globalThis.document.querySelectorAll("[ws-var^='"+r+"::']");for(let o=0,i=a.length-1;o<=i;o++){let l=a[o],s=l.getAttribute("ws-var"),d=n.Hole(xt(s,g(r.length+2),null)),u=d.WithName(s);wa().set_Item(u.Name,u),Y.applyVarHole(l,d)}}$init(r){}$postinit(r){pa([])}static{Y.initialized=new rt("New_5"),Y.instances=new rt("New_5")}}),je=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(_(String,this.fillWith.View))}AddAttribute(t,r){t(r)(Fo(this.fillWith))}get AsChoiceView(){return Ut(_(String,this.fillWith.View))}ApplyVarHole(t){ce(Sa(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Ue=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(_(String,this.fillWith.View))}AddAttribute(t,r){t(r)(Go(this.fillWith))}get AsChoiceView(){return Ut(_(String,this.fillWith.View))}ApplyVarHole(t){ce(_a(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Oe=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(_(t=>new Date(t).toLocaleString(),this.fillWith.View))}AddAttribute(t,r){t(r)(Bo(this.fillWith))}get AsChoiceView(){return Ut(_(t=>new Date(t).toLocaleString(),this.fillWith.View))}ApplyVarHole(t){ce(Na(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},qe=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(_(String,this.fillWith.View))}AddAttribute(t,r){t(r)(zo(this.fillWith))}get AsChoiceView(){return Ut(_(String,this.fillWith.View))}ApplyVarHole(t){ce(Ta(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},ve=class e extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}ApplyVarHole(t){}constructor(t,r){super(),this.name=t,this.fillWith=r}},He=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(_(t=>Xt(",",t),this.fillWith.View))}AddAttribute(t,r){t(r)(Po(this.fillWith))}get AsChoiceView(){return Ut(_(String,this.fillWith.View))}ApplyVarHole(t){ce(Ea(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function pa(e){if(_n()==null){ha(""),Bt("",null,globalThis.document.body,null);let t=ga(globalThis.document.body,e),r=globalThis.document.body;(a=>{st.RunInPlace(!0,r,a)})(t);let n=t;return Bl(g(n)),n}else return _n().$0}function Ae(e,t,r,n){return ha(""),ie(e,t,r),zl(e,t,n)}function ie(e,t,r){Se(e).ContainsKey(t==null?"":t.$0)||Bt(e,t,r(),null)}function _n(){return Vt.RenderedFullDocTemplate}function ha(e){Pl()||(Rl(!0),Wl(globalThis.document.body,"")),fe().set_Item(e,Se(""))}function Bt(e,t,r,n){let a=new ct("New_3");function o(w,f){for(;;)switch(w){case 0:if(f!==null){let c=f.nextSibling;A(f.nodeType,Node.TEXT_NODE)?Ds(f):A(f.nodeType,Node.ELEMENT_NODE)&&l(f),f=c}else return null;break;case 1:let k=xt(f.nodeName,g(3),null).toLowerCase(),$=k.indexOf("."),N=$===-1?[e,k]:[xt(k,null,g($-1)),xt(k,g($+1),null)],C=N[1],v=N[0];if(v!=""&&!fe().ContainsKey(v))return Fn(C);{v==""&&n!=null&&n.$0(C);let c=fe().Item(v);if(c.ContainsKey(C)){let x=c.Item(C).cloneNode(!0),b=new ct("New_3"),p=new rt("New_5"),y=f.attributes;for(let E=0,D=y.length-1;E<=D;E++){let V=y.item(E).name.toLowerCase(),P=y.item(E).nodeValue,J=P==""?V:P.toLowerCase();p.set_Item(V,J),b.SAdd(V)||console.warn("Hole mapped twice",V)}for(let E=0,D=f.childNodes.length-1;E<=D;E++){let V=f.childNodes[E];A(V.nodeType,Node.ELEMENT_NODE)&&(b.SAdd(V.nodeName.toLowerCase())||console.warn("Hole filled twice",C))}let M=f.childNodes.length===1&&A(f.firstChild.nodeType,Node.TEXT_NODE);if(M){let E=Fs(x,f.firstChild.textContent,C),D=(P=>J=>P.SAdd(J))(b);(P=>J=>{J!=null&&P(J.$0)})(P=>{D(P)})(E)}if(Gs(x,b),!M)for(let E=0,D=f.childNodes.length-1;E<=D;E++){let V=f.childNodes[E];A(V.nodeType,Node.ELEMENT_NODE)&&(V.hasAttributes()?Bs(x,V):i(x,V))}zs(x,p),Gn(x,f.parentNode,f),f.parentNode.removeChild(f);return}else return Fn(C)}break}}function i(w,f){let k=f.nodeName.toLowerCase(),$=(C,v)=>{if(k=="title"&&f.hasChildNodes()){let c=pt(f.textContent);for(f.removeChild(f.firstChild);c.hasChildNodes();)f.appendChild(c.firstChild)}return l(f),Gn(f,C,v)};q(w,"[ws-attr-holes]",C=>{let v=vt(C.getAttribute("ws-attr-holes"),[" "],1);for(let c=0,h=v.length-1;c<=h;c++){let x=S(v,c),b=new RegExp("\\${"+k+"}","ig"),p=C.getAttribute(x).replace(b,f.textContent);C.setAttribute(x,p)}});let N=w.querySelector("[ws-hole="+k+"]");if(A(N,null)){let C=w.querySelector("[ws-replace="+k+"]");if(A(C,null)){let v=w.querySelector("slot[name="+k+"]");return w.tagName.toLowerCase()=="template"?($(v.parentNode,v),void v.parentNode.removeChild(v)):null}else{$(C.parentNode,C),C.parentNode.removeChild(C);return}}else{for(;N.hasChildNodes();)N.removeChild(N.lastChild);return N.removeAttribute("ws-hole"),(C=>{let v=C;return c=>$(v,c)})(N)(null)}}function l(w){w.hasAttribute("ws-preserve")||(Sr(w.nodeName.toLowerCase(),"ws-")?d(w):($a(w),s(w.firstChild)))}function s(w){return o(0,w)}function d(w){return o(1,w)}function u(w){for(;;){let f=w.querySelector("[ws-template]");if(A(f,null)){let k=w.querySelector("[ws-children-template]");if(A(k,null)){let $=w.querySelectorAll("template[id]");for(let C=1,v=$.length-1;C<=v;C++){let c=$[C];a.Contains(c)||(Bt(e,g(c.getAttribute("id")),c,null),a.SAdd(c))}let N=w.querySelectorAll("template[name]");for(let C=1,v=N.length-1;C<=v;C++){let c=N[C];a.Contains(c)||(Bt(e,g(c.getAttribute("name")),c,null),a.SAdd(c))}return null}else{let $=k.getAttribute("ws-children-template");k.removeAttribute("ws-children-template"),Bt(e,g($),k,null),w=w}}else{let k=f.getAttribute("ws-template");jl(e,g(k),f)(null),w=w}}}let m=(t==null?"":t.$0).toLowerCase();Se(e).set_Item(m,r),r.hasChildNodes()&&(u(r),s(r.firstChild))}function ga(e,t){let r,n=Ul(e,sa(t,wa().Values)),a=n[1],o=n[0],i=o.Els;return!A(i,null)&&i.length===1&&S(i,0)instanceof Node&&A(S(i,0).nodeType,Node.ELEMENT_NODE)&&(r=S(i,0),!0)?Lr.TreeNode(o,a):st.Mk(na(o),a)}function Bl(e){Vt.RenderedFullDocTemplate=e}function zl(e,t,r){let n,a=(n=null,[Se(e).TryGetValue(t==null?"":t.$0,{get:()=>n,set:o=>{n=o}}),n]);return a[0]?ga(a[1].cloneNode(!0),r):(console.warn("Local template doesn't exist",t),st.Empty)}function Se(e){let t,r=(t=null,[fe().TryGetValue(e,{get:()=>t,set:n=>{t=n}}),t]);if(r[0])return r[1];{let n=new rt("New_5");return fe().set_Item(e,n),n}}function Pl(){return Vt.LocalTemplatesLoaded}function Rl(e){Vt.LocalTemplatesLoaded=e}function Wl(e,t){let r=Se(t),n=new rt("New_5"),a=e.querySelectorAll("[ws-template]");for(let u=0,m=a.length-1;u<=m;u++){let w=a[u],f=w.getAttribute("ws-template").toLowerCase();w.removeAttribute("ws-template"),n.set_Item(f,va(w))}let o=e.querySelectorAll("[ws-children-template]");for(let u=0,m=o.length-1;u<=m;u++){let w=o[u],f=w.getAttribute("ws-children-template").toLowerCase();w.removeAttribute("ws-children-template"),n.set_Item(f,Ol(w))}let i=e.querySelectorAll("template[id]");for(let u=0,m=i.length-1;u<=m;u++){let w=i[u];n.set_Item(w.getAttribute("id").toLowerCase(),Nn(w))}let l=e.querySelectorAll("template[name]");for(let u=0,m=l.length-1;u<=m;u++){let w=l[u];n.set_Item(w.getAttribute("name").toLowerCase(),Nn(w))}let s=new ct("New_3");function d(u){if(!r.ContainsKey(u)){let m,w=(m=null,[n.TryGetValue(u,{get:()=>m,set:f=>{m=f}}),m]);w[0]?(s.SAdd(u),n.RemoveKey(u),Bt(t,g(u),w[1],g(d))):console.warn(s.Contains(u)?"Encountered loop when instantiating "+u:"Local template does not exist: "+u)}}for(;n.count>0;)d(fl(n.Keys))}function fe(){return Vt.LoadedTemplates}function q(e,t,r){Pi(e,t,n=>{n.closest("[ws-preserve]")==null&&r(n)})}function jl(e,t,r){let n=va(r);return a=>{Bt(e,t,n,a)}}function Ul(e,t){let r,n=[],a=[],o=[],i=[],l=new rt("New_5"),s=L(t);try{for(;s.MoveNext();){let c=s.Current;l.set_Item(c.Name,c)}}finally{let c=s;typeof c=="object"&&et(c)&&s.Dispose()}let d=An(e),u=(c,h)=>{let x=Yr(c,h);a.push(Zn(x)),o.push([c,x]);let b=It(x.OnAfterRender);if(b==null)return null;{let p=b.$0;i.push(()=>{p(c)});return}},m=c=>{let h,x=(h=null,[l.TryGetValue(c,{get:()=>h,set:b=>{h=b}}),h]);if(x[0]){let b=x[1];if(b instanceof Zt)return g(b.Value);if(b instanceof ye)return g(st.TextNode(b.Value));{let p=b.ForTextView();return p==null?null:g(st.TextView(p.$0))}}else return null};q(e,"[ws-hole]",c=>{let h=c.getAttribute("ws-hole");for(c.removeAttribute("ws-hole");c.hasChildNodes();)c.removeChild(c.lastChild);let x=m(h);if(x!=null&&x.$==1){let b=x.$0;Vr(c,b.docNode),n.push(zt.New(wr(c),b.docNode,null,c,Yt(),null)),a.push(b.updates)}}),q(e,"[ws-replace]",c=>{let h=m(c.getAttribute("ws-replace"));if(h!=null&&h.$==1){let x=h.$0,b=c.parentNode,p=globalThis.document.createTextNode("");b.replaceChild(p,c);let y=_s(p,x.docNode);d=An(e);let M=Xr(E=>c===E,d);M==null||Or(d,M.$0,x.docNode),n.push(zt.New(wr(b),x.docNode,g([y,p]),b,Yt(),null)),a.push(x.updates)}});let w=!1;q(e,"slot",c=>{let h=c.getAttribute("name"),x=h==""||h==null?"default":h.toLowerCase();if(!(w&&x=="default"||!A(e.parentElement,null))){for(;c.hasChildNodes();)c.removeChild(c.lastChild);x=="default"&&(w=!0);let b=m(x);if(b!=null&&b.$==1){let p=b.$0;Vr(c,p.docNode),n.push(zt.New(wr(c),p.docNode,null,c,Yt(),null)),a.push(p.updates)}}}),q(e,"[ws-attr]",c=>{let h,x=c.getAttribute("ws-attr");c.removeAttribute("ws-attr");let b=(h=null,[l.TryGetValue(x,{get:()=>h,set:p=>{h=p}}),h]);if(b[0]){let p=b[1];p instanceof z?u(c,p.Value):console.warn("Attribute hole filled with non-attribute data",x)}}),q(e,"[ws-on]",c=>{u(c,Q.Concat(Qr(h=>{let x,b=vt(h,[":"],1),p=(x=null,[l.TryGetValue(S(b,1),{get:()=>x,set:y=>{x=y}}),x]);if(p[0]){let y=p[1];return y instanceof Fr?g(Lo(S(b,0),y.Value)):y instanceof De?g(Q.HandlerImpl(S(b,0),y.Value)):(console.warn("Event hole on"+S(b,0)+" filled with non-event data",S(b,1)),null)}else return null},vt(c.getAttribute("ws-on"),[" "],1)))),c.removeAttribute("ws-on")}),q(e,"[ws-onafterrender]",c=>{let h,x=c.getAttribute("ws-onafterrender"),b=(h=null,[l.TryGetValue(x,{get:()=>h,set:p=>{h=p}}),h]);if(b[0]){let p=b[1];p instanceof Gr||p instanceof We?(c.removeAttribute("ws-onafterrender"),u(c,Cn(p.Value))):console.warn("onafterrender hole filled with non-onafterrender data",x)}}),q(e,"[ws-var]",c=>{let h,x=c.getAttribute("ws-var");c.removeAttribute("ws-var");let b=(h=null,[l.TryGetValue(x,{get:()=>h,set:p=>{h=p}}),h]);b[0]&&b[1].AddAttribute(p=>y=>u(p,y),c)});let f=()=>{ql("[ws-dom]",c=>{let h,x,b,p=(h=null,[l.TryGetValue(c.getAttribute("ws-dom").toLowerCase(),{get:()=>h,set:y=>{h=y}}),h]);if(p[0]){let y=p[1];if(y instanceof ve){let M=y.Value;c.removeAttribute("ws-dom"),x=c;let E=new MutationObserver((D,V)=>{X(P=>{P.removedNodes.forEach(dn(J=>J[0]===x&&P.addedNodes.length!==1?(M.SetFinal(null),V.disconnect()):null),null)},D)});c.parentElement!==null&&E.observe(c.parentElement,(b={},b.childList=!0,b)),M.Set(g(c)),Ge(D=>{if(D!=null&&D.$==1){let V=D.$0;if(x!==V){let P=[V];x.replaceWith.apply(x,P),x=V}}else x.remove(),E.disconnect()},M.View)}}})};q(e,"[ws-attr-holes]",c=>{let h=new RegExp(me(),"g"),x=vt(c.getAttribute("ws-attr-holes"),[" "],1);c.removeAttribute("ws-attr-holes");for(let b=0,p=x.length-1;b<=p;b++)(()=>{let y,M=S(x,b),E=c.getAttribute(M),D=null,V=0,P=[];for(;D=h.exec(E),D!==null;){let U=xt(E,g(V),g(h.lastIndex-S(D,0).length-1));V=h.lastIndex,P.push([U,S(D,1)])}let J=xt(E,g(V),null);h.lastIndex=0;let G=tn((U,Z)=>(ut=>{let Mt=ut[0],Ve=ut[1];return de=>{let Ct,Ot=de[0],nt=de[1],sn=(Ct=null,[l.TryGetValue(Ve,{get:()=>Ct,set:cr=>{Ct=cr}}),Ct]),Me=sn[0]?sn[1].AsChoiceView:ln("");return Me.$==1?[Mt,yt.Cons(Ot==""?Me.$0:_(cr=>cr+Ot,Me.$0),nt)]:[Mt+Me.$0+Ot,nt]}})(U)(Z),P,[J,yt.Empty]);if(G[1].$==1)if(G[1].$1.$==1)if(G[1].$1.$1.$==1)if(G[1].$1.$1.$1.$==0){let U=G[0];y=ot(M,jn((Z,ut,Mt)=>U+Z+ut+Mt,G[1].$0,G[1].$1.$0,G[1].$1.$1.$0))}else{let U=G[0];y=ot(M,_(Z=>U+Xt("",Z),Uo(G[1])))}else{let U=G[0];y=ot(M,Qe((Z,ut)=>U+Z+ut,G[1].$0,G[1].$1.$0))}else if(G[0]=="")y=ot(M,G[1].$0);else{let U=G[0];y=ot(M,_(Z=>U+Z,G[1].$0))}else y=Q.Create(M,G[0]);return u(c,y)})()});let k=d,$=i.length==0?g(()=>{f()}):g(c=>{f(),X(h=>{h(c)},i)}),N=!A(d,null)&&d.length===1&&S(d,0)instanceof Node&&S(d,0)instanceof Element&&(r=S(d,0),!0)?g(r):null,C={Els:k,Dirty:!0,Holes:n,Attrs:o,Render:$?$.$0:void 0,El:N?N.$0:void 0};return[cn(C,["Render","El"]),ar(ge(),Be,a)]}function wa(){return Vt.GlobalHoles}function va(e){e.removeAttribute("ws-template");let t=e.getAttribute("ws-replace");if(t!=null){e.removeAttribute("ws-replace");let n=e.parentNode;if(!A(n,null)){let a=globalThis.document.createElement(e.tagName);a.setAttribute("ws-replace",t),n.replaceChild(a,e)}}let r=globalThis.document.createElement("div");return r.appendChild(e),r}function Ol(e){let t=globalThis.document.createElement("div");for(;e.hasChildNodes();)t.appendChild(e.firstChild);return t}function Nn(e){let t=globalThis.document.createElement("div"),r=e.content;for(let n=0,a=r.childNodes.length-1;n<=a;n++)t.appendChild(r.childNodes[n].cloneNode(!0));return t}function me(){return Vt.TextHoleRE}function ql(e,t){Ri(e,r=>{r.closest("[ws-preserve]")==null&&t(r)})}var Ar=class extends Fe{isConst;current;snap;view;id;get View(){return this.view}Set(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):(xe(this.snap),this.current=t,this.snap={s:ir(t,[])})}Get(){return this.current}Update(t){this.Set(t(this.Get()))}UpdateMaybe(t){let r=t(this.Get());r!=null&&r.$==1&&this.Set(r.$0)}SetFinal(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):(xe(this.snap),this.isConst=!0,this.current=t,this.snap={s:Et(t)})}constructor(t,r,n){super(),this.isConst=t,this.current=n,this.snap=r,this.view=()=>this.snap,this.id=Yt()}},_e=K(e=>class{static{_e=e(this)}static IsFetchingView;static IsAuthedView;static UserView;static isFetchingVar;static userVar;static API;static{this.API="https://api.websharper.io",os("https://api.websharper.io"),this.userVar=T.Create_1(null),this.isFetchingVar=T.Create_1(!1),this.UserView=Kt().View,this.IsAuthedView=_(r=>r!=null,Kt().View),this.IsFetchingView=xr().View}});function Jt(e){return e==null||new RegExp("^\\s*$").test(e)}function Hl(e){return e.replace(new RegExp("^\\s+"),"").replace(new RegExp("\\s+$"),"")}function Xt(e,t){return Qt(t).join(e)}function vt(e,t,r){return Yl(e,new RegExp("["+Jl(t.join(""))+"]"),r)}function Sr(e,t){return e.substring(0,t.length)==t}function Kl(e,t){return $l(e,Zl(t))}function Yl(e,t,r){return r===1?$e(n=>n!=="",Tn(e,t)):Tn(e,t)}function Jl(e){return e.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]","g"),"\\$&")}function Zl(e){return e??""}function Tn(e,t){return e.split(t)}function Ne(e,t){return{k:e,ct:t}}function or(e){return{$:1,$0:e}}function Te(e){return{$:0,$0:e}}function fa(e){return{$:2,$0:e}}var be=class extends j{AsyncBase(t,r){return B(()=>{let n=ss(this.Headers),a=ls(r);return R(ki(),o=>R(tr((i,l,s)=>{let d=[!0],u=Kn(o,()=>{d[0]&&(d[0]=!1,s(new Ke("New",o)))});return is().Async(this.EndPoint+"/"+t,n,a,m=>{d[0]&&(d[0]=!1,u.Dispose(),i(m))},m=>{d[0]&&(d[0]=!1,u.Dispose(),l(m))})}),i=>O(JSON.parse(i))))})}get EndPoint(){return cs()}get Headers(){return[]}Async(t,r){return this.AsyncBase(t,r)}};function Ql(e,t){return{c:e,r:t}}var _r=class extends j{push;value;dirty;updates;get NChanged(){return this.updates}NGetExitAnim(t){return vr()}NGetEnterAnim(t){return vr()}NGetChangeAnim(t){return vr()}NSync(t){this.dirty&&(this.push(t)(this.value),this.dirty=!1)}constructor(t,r){super(),this.push=r,this.value=void 0,this.dirty=!1,this.updates=_(n=>{this.value=n,this.dirty=!0},t)}};function xe(e){let t,r=e.s;if(!(r==null||(!(r!=null&&r.$==2||r!=null&&r.$==3)||(t=r.$1,!1)))){e.s=null;for(let n=0,a=I(t)-1;n<=a;n++){let o=S(t,n);typeof o=="object"?(i=>{xe(i)})(o):o()}}}var yt=class e{static Empty=at(e,{$:0});static Cons(t,r){return at(e,{$:1,$0:t,$1:r})}GetEnumerator(){return new ht(this,null,t=>{let r=t.s;if(r.$==0)return!1;{let n=r.$1;return t.c=r.$0,t.s=n,!0}},void 0)}$;$0;$1},le=K(e=>class{static{le=e(this)}static GetCT;static Zero;static defCTS;static scheduler;static noneCT;static{this.noneCT=Ql(!1,[]),this.scheduler=new Nr,this.defCTS=[new Tr],this.Zero=O(),this.GetCT=r=>{r.k(Te(r.ct))}}}),zt=class e{Attr;Children;Delimiters;El;ElKey;Render;Equals(t){return this.ElKey===t.ElKey}GetHashCode(){return this.ElKey}static New(t,r,n,a,o,i){let l={Attr:t,Children:r,El:a,ElKey:o},s=(qt(l,"Delimiters",n),qt(l,"Render",i),l);return at(e,s)}};function Et(e){return{$:0,$0:e}}function ir(e,t){return{$:2,$0:e,$1:t}}function jt(e,t){return{$:3,$0:e,$1:t}}function Xl(e,t){return{Amount:e,Currency:t}}function ma(e,t){return ms(e,-2147483648,2147483647,t)}function ts(e){return tr((t,r)=>{e.then(t,n=>r(es(n)))})}function es(e){return e instanceof Error?e:new Dr(e)}function rs(){throw new jr("New")}function ns(){throw new Ur("New_2","An item with the same key has already been added.")}function L(e){return e instanceof Array?ba(e):A(typeof e,"string")?xa(e):e.GetEnumerator()}function ba(e){return new ht(0,null,t=>{let r=t.s;return r<I(e)&&(t.c=S(e,r),t.s=r+1,!0)},void 0)}function xa(e){return new ht(0,null,t=>{let r=t.s;return r<e.length&&(t.c=e[r],t.s=r+1,!0)},void 0)}function as(e){return e instanceof Array?ba(e):A(typeof e,"string")?xa(e):"GetEnumerator0"in e?e.GetEnumerator0():e.GetEnumerator()}var ht=class extends j{s;c;n;d;e;MoveNext(){let t=this.n(this);return this.e=t?1:2,t}get Current(){return this.e===1?this.c:this.e===0?W("Enumeration has not started. Call MoveNext."):W("Enumeration already finished.")}Dispose(){this.d&&this.d(this)}constructor(t,r,n,a){super(),this.s=t,this.c=r,this.n=n,this.d=a,this.e=0}};function os(e){sr.EndPoint=e}function is(){return sr.AjaxProvider}function ls(e){return JSON.stringify(e)}function ss(e){return Mo(dt(t=>[t[0],t[1]],Dl(t=>t[0],e.concat([["content-type","application/json"]]))))}function cs(){return sr.EndPoint}function En(e,t,r,n,a,o,i){let l=new XMLHttpRequest,s=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");l.open("POST",t,e),e==!0&&(l.withCredentials=!0);let d;for(var u in r)l.setRequestHeader(u,r[u]);s&&l.setRequestHeader("x-csrftoken",s);function m(){if(l.status==200)a(l.responseText);else if(i&&l.status==403&&l.responseText=="CSRF")i();else{let w="Response status is not 200: ";o(new Error(w+l.status))}}"onload"in l?l.onload=l.onerror=l.onabort=m:l.onreadystatechange=()=>{l.readyState==4&&m()},l.send(n)}var Nr=class extends j{idle;robin;Fork(t){this.robin.push(t),this.idle&&(this.idle=!1,setTimeout(()=>{this.tick()},0))}tick(){let t=Date.now(),r=!0;for(;r;)this.robin.length===0?(this.idle=!0,r=!1):(this.robin.shift()(),Date.now()-t>40&&(setTimeout(()=>{this.tick()},0),r=!1))}constructor(){super(),this.idle=!0,this.robin=[]}},F=K(e=>class{static{F=e(this)}static FloatApplyChecked;static FloatGetChecked;static FloatSetChecked;static FloatApplyUnchecked;static FloatGetUnchecked;static FloatSetUnchecked;static IntApplyChecked;static IntGetChecked;static IntSetChecked;static IntApplyUnchecked;static IntGetUnchecked;static IntSetUnchecked;static FileApplyUnchecked;static FileGetUnchecked;static FileSetUnchecked;static DateTimeApplyUnchecked;static DateTimeGetUnchecked;static DateTimeSetUnchecked;static StringListApply;static StringListGet;static StringListSet;static StringApply;static StringGet;static StringSet;static BoolCheckedApply;static EmptyAttr;static{this.EmptyAttr=null,this.BoolCheckedApply=v=>[c=>{c.addEventListener("change",()=>v.Get()!=c.checked?v.Set(c.checked):null)},c=>h=>h!=null&&h.$==1?void(c.checked=h.$0):null,_(c=>g(c),v.View)],this.StringSet=v=>c=>{v.value=c},this.StringGet=v=>g(v.value);let r=Rs(),n=Ps();this.StringApply=v=>Lt(r,n,v),this.StringListSet=v=>c=>{let h=v.options;for(let x=0,b=h.length-1;x<=b;x++)(()=>{let p=h.item(x);p.selected=vs(p.value,c)})()},this.StringListGet=v=>{let c=v.selectedOptions;return g(Qt(Sn(()=>vl(h=>[c.item(h).value],gn(0,c.length-1)))))};let a=js(),o=Ws();this.StringListApply=v=>Lt(a,o,v),this.DateTimeSetUnchecked=v=>c=>{v.value=new Date(c).toLocaleString()},this.DateTimeGetUnchecked=v=>{let c,h,x=v.value;if(ue(x))return g(-864e13);{c=0;let b=hc(x);return h=[b!=null&&b.$==1&&(c=b.$0,!0),c],h[0]?g(h[1]):null}};let i=Os(),l=Us();this.DateTimeApplyUnchecked=v=>Lt(i,l,v),this.FileSetUnchecked=()=>()=>null,this.FileGetUnchecked=v=>{let c=v.files;return g(Qt(Sn(()=>Wt(h=>c.item(h),gn(0,c.length-1)))))};let s=Ks(),d=Hs();this.FileApplyUnchecked=v=>qs(s,d,v),this.IntSetUnchecked=v=>c=>{v.value=String(c)},this.IntGetUnchecked=v=>{let c=v.value;if(ue(c))return g(0);{let h=+c;return h!==h>>0?null:g(h)}};let u=Js(),m=Ys();this.IntApplyUnchecked=v=>Lt(u,m,v),this.IntSetChecked=v=>c=>{let h=c.Input;return v.value!=h?void(v.value=h):null},this.IntGetChecked=v=>{let c,h,x=v.value;if(ue(x))c=!v.checkValidity||v.checkValidity()?gt.Blank(x):gt.Invalid(x);else{let b=(h=0,[ma(x,{get:()=>h,set:p=>{h=p}}),h]);c=b[0]?gt.Valid(b[1],x):gt.Invalid(x)}return g(c)};let w=Qs(),f=Zs();this.IntApplyChecked=v=>Lt(w,f,v),this.FloatSetUnchecked=v=>c=>{v.value=String(c)},this.FloatGetUnchecked=v=>{let c=v.value;if(ue(c))return g(0);{let h=+c;return isNaN(h)?null:g(h)}};let k=tc(),$=Xs();this.FloatApplyUnchecked=v=>Lt(k,$,v),this.FloatSetChecked=v=>c=>{let h=c.Input;return v.value!=h?void(v.value=h):null},this.FloatGetChecked=v=>{let c,h=v.value;if(ue(h))c=!v.checkValidity||v.checkValidity()?gt.Blank(h):gt.Invalid(h);else{let x=+h;c=isNaN(x)?gt.Invalid(h):gt.Valid(x,h)}return g(c)};let N=rc(),C=ec();this.FloatApplyChecked=v=>Lt(N,C,v)}});function ds(e,t,r){return()=>n=>{let a;if(typeof n=="object"&&n!=null){let i={};if(typeof t=="string"){let l=n[t];a=Ml(s=>!A(s,null)&&s[0]==l,r)}else{let l=[void 0],s;for(var o in t)if((d=>n.hasOwnProperty(d)&&(l[0]=t[d],!0))(o))break;a=l[0]}return i.$=a,X(l=>{let s=l[0],d=l[1],u=l[2],m=l[3];if(s==null){let w=u()(n);d&&delete w[t],i.$0=w;return}else return m===0?void(i[s]=u()(n[d])):m===1?void(i[s]=n.hasOwnProperty(d)?g(u()(n[d])):null):W("Invalid field option kind")},S(r,a)[1]),e===void 0?i:e(i)}else return n}}function ft(){return()=>e=>e}function us(e){return ps(e)}function ps(e){return()=>t=>dt(e(),t)}function hs(e,t){return()=>r=>{let n={};return X(a=>{let o=a[0],i=a[1],l=a[2];return l===0?r.hasOwnProperty(o)?void(n[o]=i()(r[o])):W("Missing mandatory field: "+o):l===1?void(n[o]=r.hasOwnProperty(o)?g(i()(r[o])):null):l===2?r.hasOwnProperty(o)?void(n[o]=i()(r[o])):null:l===3?r[o]===void 0?void(n[o]=i()(r[o])):null:W("Invalid field option kind")},t),e===void 0?n:e(n)}}var Ke=class extends Error{ct;constructor(t,r,n,a){let o;if(t=="New"&&(o=r,t="New_1",r="The operation was canceled.",n=null,a=o),t=="New_1"){let i=r,l=n,s=a;super(i),this.inner=l,this.ct=s}}},Tr=class extends j{init;c;pending;r;constructor(){super(),this.c=!1,this.pending=null,this.r=[],this.init=1}};function ya(e,t,r,n){let a={DynElem:e,DynFlags:t,DynNodes:r};return qt(a,"OnAfterRender",n),a}var en=K(e=>class{static{en=e(this)}static counter;static{this.counter=0}});function gs(e,t){let r=new rt("New_5"),n=[];for(let a=0,o=I(t)-1;a<=o;a++){let i=t[a],l=e(i);r.ContainsKey(l)?r.Item(l).push(i):(n.push(l),r.DAdd(l,[i]))}return ws(a=>[a,r.Item(a)],n),n}function ws(e,t){for(let r=0,n=t.length-1;r<=n;r++)t[r]=e(t[r])}function vs(e,t){let r=!0,n=0,a=I(t);for(;r&&n<a;)A(t[n],e)?r=!1:n=n+1;return!r}function Er(){return W("The input sequence has an insufficient number of elements.")}function fs(){return W("The input must be non-negative.")}var ye=class e extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}get AsChoiceView(){return ln(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function ms(e,t,r,n){let a=+e,o=a===a-a%1&&a>=t&&a<=r;return o&&n.set(a),o}function bs(){return{Current:null,Dirty:!1}}function xs(e,t){e.Current=t,e.Dirty=!0}function rn(e,t){ke(e.parentNode,t,e)}function ys(e,t,r){return Va(Ma(),Cs(e,t,Kr(),r))}function Vn(e,t,r){return Mr()?B(()=>{let n=Ia(r),a=Ss(t,n),o=As(t,n);return R(Ln(Is(a,$s(t,n))),()=>R(In(e,t),()=>R(Ln(o),()=>(t.PreviousNodes=n,O(null)))))}):In(e,t)}function Mn(e,t,r){let n=Ia(r);Ce(e,t.Top),t.PreviousNodes=n}function ks(e,t){return Va(Ma(),Ns(e,Kr(),t))}function ke(e,t,r){for(;;){if(t!=null&&t.$==1)return Ie(e,t.$0.El,r);if(t!=null&&t.$==2){let n=t.$0;n.Dirty=!1,t=n.Current}else{if(t==null)return r;if(t!=null&&t.$==4)return Ie(e,t.$0.Text,r);if(t!=null&&t.$==5)return Ie(e,t.$0,r);if(t!=null&&t.$==6)return tn((n,a)=>(o=>i=>l=>i==null||i.constructor===Object?ke(o,i,l):Ie(o,i,l))(e)(n)(a),t.$0.Els,r);{let n=t.$1;t=t.$0,r=ke(e,n,r)}}}}function Cs(e,t,r,n){let a=e.parentNode;rn(t,n);let o=Yr(a,r);return zt.New(o,n,g([e,t]),a,Yt(),It(o.OnAfterRender))}function In(e,t){if(Ir()){let r=n=>{requestAnimationFrame(()=>{Ce(e,t.Top),n()})};return tr((n,a,o)=>r.apply(null,[n,a,o]))}else return Ce(e,t.Top),O(null)}function $s(e,t){return lr(dt(r=>Ni(r.Attr),on(La(t,an(r=>_i(r.Attr),e.PreviousNodes)))))}function As(e,t){return lr(dt(r=>Ei(r.Attr),on(La(e.PreviousNodes,an(r=>Ti(r.Attr),t)))))}function Ss(e,t){let r=a=>Vi(a.Attr),n=a=>an(r,a);return lr(dt(a=>Mi(a.Attr),on(nc(n(e.PreviousNodes),n(t)))))}function Ce(e,t){e||Ts(t),ka(t.Children),Ca(t)}function Vr(e,t){ke(e,t,null)}function _s(e,t){let r=e.parentNode,n=globalThis.document.createTextNode("");return r.insertBefore(n,e),rn(e,t),n}function Ns(e,t,r){Vr(e,r);let n=Yr(e,t);return zt.New(n,r,null,e,Yt(),It(n.OnAfterRender))}function Ie(e,t,r){return Wi(e,r,t),t}function Ts(e){function t(r){function n(a){for(;;)if(a!=null&&a.$==0){let o=a.$1,i=a.$0;if(n(i))return!0;a=o}else if(a!=null&&a.$==2){let o=a.$0;if(o.Dirty)return!0;a=o.Current}else if(a!=null&&a.$==6){let o=a.$0;return o.Dirty||$r(t,o.Holes)}else return!1}return n(r.Children)}Qn(e.El,e.Attr),t(e)&&Ms(e)}function ka(e){for(;;){if(e!=null&&e.$==1)return Ce(!1,e.$0);if(e!=null&&e.$==2)e=e.$0.Current;else{if(e==null)return null;if(e!=null&&e.$==5)return null;if(e!=null&&e.$==4){let t=e.$0;return t.Dirty?(t.Text.nodeValue=t.Value,t.Dirty=!1):null}else if(e!=null&&e.$==6){let t=e.$0;return X(r=>{Ce(!1,r)},t.Holes),X(r=>{Qn(r[0],r[1])},t.Attrs),Ca(t)}else{let t=e.$1,r=e.$0;ka(r),e=t}}}}function Ca(e){let t=It(e.Render);t!=null&&t.$==1&&(t.$0(e.El),qt(e,"Render",null))}function Es(){return{Text:globalThis.document.createTextNode(""),Dirty:!1,Value:""}}function Vs(e,t){e.Value=t,e.Dirty=!0}function Ms(e){let t=e.El;function r(l,s){for(;;){if(l!=null&&l.$==1)return l.$0.El;if(l!=null&&l.$==2){let d=l.$0;if(d.Dirty)return d.Dirty=!1,ke(t,d.Current,s);l=d.Current}else{if(l==null)return s;if(l!=null&&l.$==4)return l.$0.Text;if(l!=null&&l.$==5)return l.$0;if(l!=null&&l.$==6){let d=l.$0;return d.Dirty&&(d.Dirty=!1),tn((u,m)=>u==null||u.constructor===Object?r(u,m):u,d.Els,s)}else{let d=l.$1;l=l.$0,s=r(d,s)}}}}let n=e.El;xc(l=>{ji(n,l)},bc(yc(e),mc(e.El,It(e.Delimiters))));let a=e.Children,o=It(e.Delimiters),i=o!=null&&o.$==1?o.$0[1]:null;r(a,i)}function Mr(){return ac()}function Ln(e){return B(()=>R(Ls(()=>{},oc(e)),()=>(ic(e),O(null))))}function Is(e,t){return nn(Ba(e.$0,t.$0))}function Ls(e,t){let r=t.Duration;if(r===0)return it();{let n=a=>{function o(i){return l=>{let s=l-i;return t.Compute(s),e(),s<=r?void requestAnimationFrame(d=>{o(i)(d)}):a()}}requestAnimationFrame(i=>{o(i)(i)})};return tr((a,o,i)=>n.apply(null,[a,o,i]))}}function nn(e){return{$:0,$0:e}}function lr(e){return nn(gc(Wt(sc,e)))}function vr(){return nn(Pa())}function Ir(){return Fa.BatchUpdatesEnabled}function Dn(e){let t=[0];function r(){return B(()=>R(e,()=>{let n=t[0];return A(n,1)?(t[0]=0,it()):A(n,2)?(t[0]=1,r()):it()}))}return()=>{let n=t[0];A(n,0)?(t[0]=1,yi(r(),null)):A(n,1)&&(t[0]=2)}}var Vt=K(e=>class{static{Vt=e(this)}static RenderedFullDocTemplate;static TextHoleRE;static GlobalHoles;static LocalTemplatesLoaded;static LoadedTemplates;static{this.LoadedTemplates=new rt("New_5"),this.LocalTemplatesLoaded=!1,this.GlobalHoles=new rt("New_5"),this.TextHoleRE="\\${([^}]+)}",this.RenderedFullDocTemplate=null}});function Ds(e){let t=null,r=0,n=e.textContent,a=new RegExp(me(),"g");for(;t=a.exec(n),t!==null;){e.parentNode.insertBefore(globalThis.document.createTextNode(xt(n,g(r),g(a.lastIndex-S(t,0).length-1))),e),r=a.lastIndex;let o=globalThis.document.createElement("span");o.setAttribute("ws-replace",S(t,1).toLowerCase()),e.parentNode.insertBefore(o,e)}a.lastIndex=0,e.textContent=xt(n,g(r),null)}function Fn(e){console.warn("Instantiating non-loaded template",e)}function Fs(e,t,r){let n=e.querySelector("[ws-replace]");return A(n,null)?(console.warn("Filling non-existent text hole",r),null):(n.parentNode.replaceChild(globalThis.document.createTextNode(t),n),g(n.getAttribute("ws-replace")))}function Gs(e,t){let r=n=>{q(e,"["+n+"]",a=>{t.Contains(a.getAttribute(n))||a.removeAttribute(n)})};r("ws-attr"),r("ws-onafterrender"),r("ws-var"),q(e,"[ws-hole]",n=>{if(!t.Contains(n.getAttribute("ws-hole")))for(n.removeAttribute("ws-hole");n.hasChildNodes();)n.removeChild(n.lastChild)}),q(e,"[ws-replace]",n=>{t.Contains(n.getAttribute("ws-replace"))||n.parentNode.removeChild(n)}),q(e,"[ws-on]",n=>{n.setAttribute("ws-on",Xt(" ",$e(a=>t.Contains(S(vt(a,[":"],1),1)),vt(n.getAttribute("ws-on"),[" "],1))))}),q(e,"[ws-attr-holes]",n=>{let a=vt(n.getAttribute("ws-attr-holes"),[" "],1);for(let o=0,i=a.length-1;o<=i;o++){let l=S(a,o),s=new RegExp(me(),"g"),d=n.getAttribute(l).replace(s,(u,m)=>t.Contains(m)?u:"");n.setAttribute(l,d)}})}function Bs(e,t){$a(t);let r=t.nodeName.toLowerCase(),n=e.querySelector("[ws-attr="+r+"]");if(A(n,null))console.warn("Filling non-existent attr hole",r);else{n.removeAttribute("ws-attr");for(let a=0,o=t.attributes.length-1;a<=o;a++){let i=t.attributes.item(a);i.name=="class"&&n.hasAttribute("class")?n.setAttribute("class",n.getAttribute("class")+" "+i.nodeValue):n.setAttribute(i.name,i.nodeValue)}}}function zs(e,t){let r=n=>{q(e,"["+n+"]",a=>{let o,i=(o=null,[t.TryGetValue(a.getAttribute(n).toLowerCase(),{get:()=>o,set:l=>{o=l}}),o]);i[0]&&a.setAttribute(n,i[1])})};r("ws-hole"),r("ws-replace"),r("ws-attr"),r("ws-onafterrender"),r("ws-var"),q(e,"[ws-on]",n=>{n.setAttribute("ws-on",Xt(" ",dt(a=>{let o,i=vt(a,[":"],1),l=(o=null,[t.TryGetValue(S(i,1),{get:()=>o,set:s=>{o=s}}),o]);return l[0]?S(i,0)+":"+l[1]:a},vt(n.getAttribute("ws-on"),[" "],1))))}),q(e,"[ws-attr-holes]",n=>{let a=vt(n.getAttribute("ws-attr-holes"),[" "],1);for(let o=0,i=a.length-1;o<=i;o++)(()=>{let l=S(a,o);return n.setAttribute(l,ml((s,d)=>{let u=Dt(d);return s.replace(new RegExp("\\${"+u[0]+"}","ig"),"${"+u[1]+"}")},n.getAttribute(l),t))})()})}function Gn(e,t,r){for(;;)if(e.hasChildNodes())r=t.insertBefore(e.lastChild,r);else return null}function $a(e){let t=e.attributes,r=[],n=[],a=[];for(let i=0,l=t.length-1;i<=l;i++){let s=t.item(i);if(Sr(s.nodeName,"ws-on")&&s.nodeName!="ws-onafterrender"&&s.nodeName!="ws-on")r.push(s.nodeName),n.push(xt(s.nodeName,g(5),null)+":"+s.nodeValue.toLowerCase());else if(!Sr(s.nodeName,"ws-")&&new RegExp(me()).test(s.nodeValue)){let d=new RegExp(me(),"g"),u=s.nodeValue.replace(d,(m,w)=>"${"+w.toLowerCase()+"}");s.nodeValue=u,a.push(s.nodeName)}}n.length!=0&&e.setAttribute("ws-on",Xt(" ",n)),a.length!=0&&e.setAttribute("ws-attr-holes",Xt(" ",a));let o=i=>{let l=e.getAttribute(i);l==null||e.setAttribute(i,l.toLowerCase())};o("ws-hole"),o("ws-replace"),o("ws-attr"),o("ws-onafterrender"),o("ws-var"),X(i=>{e.removeAttribute(i)},r)}function xt(e,t,r){if(t==null)if(r!=null&&r.$==1){let n=r.$0;return n<0?"":e.slice(0,n+1)}else return"";else{if(r==null)return e.slice(t.$0);{let n=r.$0,a=t.$0;return n<0?"":e.slice(a,n+1)}}}var Lr=class e extends st{docNode_1;updates_1;elt;rvUpdates;static TreeNode(t,r){let n=Br.Create(r),a=na(t),o=dt(s=>Zn(s[1]),t.Attrs),i=ar(ge(),Be,o),l=Be(i,n.v);return new e(a,l,S(t.Els,0),n)}constructor(t,r,n,a){super(t,r),this.docNode_1=t,this.updates_1=r,this.elt=n,this.rvUpdates=a}},sr=K(e=>class{static{sr=e(this)}static AjaxProvider;static EndPoint;static{this.EndPoint=globalThis.location.origin,this.AjaxProvider=new Pr}});function Lt(e,t,r){let n;return n=null,[a=>{let o=()=>{r.UpdateMaybe(i=>{let l;return n=e(a),n!=null&&n.$==1&&!A(n.$0,i)&&(l=[n,n.$0],!0)?l[0]:null})};a.addEventListener("change",o),a.addEventListener("input",o),a.addEventListener("keypress",o)},a=>{let o=t(a);return i=>i==null?null:o(i.$0)},_(a=>{let o;return n!=null&&n.$==1&&A(n.$0,a)&&(o=n.$0,!0)?null:g(a)},r.View)]}function Ps(){return F.StringSet}function Rs(){return F.StringGet}function Ws(){return F.StringListSet}function js(){return F.StringListGet}function Us(){return F.DateTimeSetUnchecked}function Os(){return F.DateTimeGetUnchecked}function qs(e,t,r){let n;return n=null,[a=>{a.addEventListener("change",()=>{r.UpdateMaybe(o=>{let i;return n=e(a),n!=null&&n.$==1&&n.$0!==o&&(i=[n,n.$0],!0)?i[0]:null})})},a=>{let o=t(a);return i=>i==null?null:o(i.$0)},_(a=>{let o;return n!=null&&n.$==1&&A(n.$0,a)&&(o=n.$0,!0)?null:g(a)},r.View)]}function Hs(){return F.FileSetUnchecked}function Ks(){return F.FileGetUnchecked}function Ys(){return F.IntSetUnchecked}function Js(){return F.IntGetUnchecked}function Zs(){return F.IntSetChecked}function Qs(){return F.IntGetChecked}function Xs(){return F.FloatSetUnchecked}function tc(){return F.FloatGetUnchecked}function ec(){return F.FloatSetChecked}function rc(){return F.FloatGetChecked}function Aa(){return F.StringApply}function Sa(){return F.FloatApplyUnchecked}function _a(){return F.BoolCheckedApply}function Na(){return F.DateTimeApplyUnchecked}function Ta(){return F.FileApplyUnchecked}function Ea(){return F.StringListApply}function ue(e){return Kl(pc,e)}var gt=class e{get Input(){return this.$==1?this.$0:this.$==2?this.$0:this.$1}static Blank(t){return at(e,{$:2,$0:t})}static Invalid(t){return at(e,{$:1,$0:t})}static Valid(t,r){return at(e,{$:0,$0:t,$1:r})}$;$0;$1},Dr=class extends Error{reason;constructor(t){super("Promise rejected"),this.reason=t}},se=K(e=>class{static{se=e(this)}static defaultWrap;static wrapMap;static rhtml;static rtagName;static rxhtmlTag;static{this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>","gi"),this.rtagName=new RegExp("<([\\w:]+)"),this.rhtml=new RegExp("<|&#?\\w+;");let r=[1,"<table>","</table>"],n=Object.fromEntries([["option",[1,"<select multiple='multiple'>","</select>"]],["legend",[1,"<fieldset>","</fieldset>"]],["area",[1,"<map>","</map>"]],["param",[1,"<object>","</object>"]],["thead",r],["tbody",r],["tfoot",r],["tr",[2,"<table><tbody>","</tbody></table>"]],["col",[2,"<table><colgroup>","</colgoup></table>"]],["td",[3,"<table><tbody><tr>","</tr></tbody></table>"]]]);this.wrapMap=n,this.defaultWrap=[0,"",""]}});function Va(e,t){return{PreviousNodes:e,Top:t}}function Ma(){return Ee(new ct("New_3"))}function Ia(e){let t=[];function r(o,i){for(;;)switch(o){case 0:if(i!=null&&i.$==0){let l=i.$1,s=i.$0;r(0,s),i=l}else if(i!=null&&i.$==1)i=i.$0,o=1;else if(i!=null&&i.$==2)i=i.$0.Current;else if(i!=null&&i.$==6){let l=i.$0.Holes;return(s=>d=>{X(s,d)})(a)(l)}else return null;break;case 1:t.push(i),i=i.Children,o=0;break}}function n(o){return r(0,o)}function a(o){return r(1,o)}return n(e),Ee(new ct("New_2",t))}function Ee(e){return{$:0,$0:e}}function an(e,t){return Ee(wc(e,t.$0))}function La(e,t){return Ee(vc(e.$0,t.$0))}function on(e){return te(e.$0)}function nc(e,t){return Ee(fc(e.$0,t.$0))}function ac(){return Ga.UseAnimations}function oc(e){return lc(Qr(t=>t.$==1?g(t.$0):null,za(e.$0)))}function ic(e){X(t=>{t.$==0&&t.$0()},za(e.$0))}function lc(e){let t=nr(e),r=I(t);if(r===0)return cc();if(r===1)return S(t,0);{let n=Sl(Wt(o=>o.Duration,t)),a=dt(o=>dc(n,o),t);return Da(n,o=>{X(i=>{i.Compute(o)},a)})}}function sc(e){return e.$0}function cc(e){return Da(0,()=>e)}function Da(e,t){return{Compute:t,Duration:e}}function dc(e,t){let r=t.Compute,n=t.Duration,a=kc(()=>t.Compute(t.Duration));return{Compute:o=>o>=n?a.f():r(o),Duration:e}}var Fa=K(e=>class{static{Fa=e(this)}static BatchUpdatesEnabled;static{this.BatchUpdatesEnabled=!0}}),Fr=class e extends H{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Gr=class e extends H{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function ln(e){return{$:0,$0:e}}function Ut(e){return{$:1,$0:e}}var Br=class e{c;s;v;static Create(t){let r;return r=null,r=e.New(t,null,()=>{let n;return n=r.s,n===null&&(n=nl(r.c()),r.s=n,ea(n,()=>{r.s=null})),n}),r}static New(t,r,n){return at(e,{c:t,s:r,v:n})}},zr=class extends j{d;GetEnumerator(){return L(Wt(t=>t.V,this.d))}constructor(t){super(),this.d=t}},Pr=class extends j{Async(t,r,n,a,o){En(!0,t,r,n,a,o,()=>{En(!0,t,r,n,a,o,void 0)})}};function uc(e){e.splice(0,I(e))}function pc(e){return e.match(new RegExp("\\s"))!==null}function hc(e){let t=Date.parse(e);return isNaN(t)?null:g(t)}var Ga=K(e=>class{static{Ga=e(this)}static UseAnimations;static CubicInOut;static{this.CubicInOut=Wr.Custom(r=>{let n=r*r;return 3*n-2*(n*r)}),this.UseAnimations=!0}});function Ba(e,t){return e.$==0?t:t.$==0?e:{$:2,$0:e,$1:t}}function za(e){let t=[];function r(n){for(;;){if(n.$==1)return t.push(n.$0);if(n.$==2){let a=n.$1,o=n.$0;r(o),n=a}else return n.$==3?X(a=>{t.push(a)},n.$0):null}}return r(e),t.slice(0)}function gc(e){let t=nr(e);return ar(Pa(),Ba,t)}function Pa(){return Ra.Empty}function fr(e){let t=[],r;for(var n in e)t.push.apply(t,e[n]);return t}var Rr=class extends j{d;GetEnumerator(){return L(Wt(t=>t.K,this.d))}constructor(t){super(),this.d=t}},Wr=class e extends j{transformTime;static Custom(t){return new e(t)}constructor(t){super(),this.transformTime=t}};function wc(e,t){return new ct("New_2",$e(e,te(t)))}function vc(e,t){let r=new ct("New_2",te(t));return r.ExceptWith(te(e)),r}function te(e){let t=Fl(e.Count,void 0);return e.CopyTo(t,0),t}function fc(e,t){let r=new ct("New_2",te(e));return r.IntersectWith(te(t)),r}var jr=class extends Error{constructor(t,r){if(t=="New"&&(t="New_1",r="The given key was not present in the dictionary."),t=="New_1"){let n=r;super(n)}}},Ur=class extends Error{constructor(t,r){if(t=="New_2"){let n=r;super(n)}}};function mc(e,t){let r;if(t!=null&&t.$==1){let n=t.$0[1],a=t.$0[0],o=[];for(r=a.nextSibling;r!==n;)o.push(r),r=r.nextSibling;return Ye(o)}else{let n=e.childNodes.length,a=e.childNodes,o=Gl(n,i=>a[i]);return Ye(o)}}function bc(e,t){let r=e.$0;return Ye($e(n=>ua(a=>n!==a,r),t.$0))}function xc(e,t){X(e,t.$0)}function yc(e){let t=[];function r(n){for(;;)if(n!=null&&n.$==2)n=n.$0.Current;else{if(n!=null&&n.$==1)return t.push(n.$0.El);if(n==null)return null;if(n!=null&&n.$==5)return t.push(n.$0);if(n!=null&&n.$==4)return t.push(n.$0.Text);if(n!=null&&n.$==6){let a=n.$0.Els;return(o=>i=>{X(o,i)})(o=>{o==null||o.constructor===Object?r(o):t.push(o)})(a)}else{let a=n.$1,o=n.$0;r(o),n=a}}}return r(e.Children),Ye(nr(t))}function Ye(e){return{$:0,$0:e}}function ce(e,t,r){let n=e(t);n[0](r),Ge(n[1](r),n[2])}function kc(e){return Ac(!1,e,Cc)}function Cc(){let e=this.v();return this.c=!0,this.v=e,this.f=$c,e}function $c(){return this.v}var Ra=K(e=>class{static{Ra=e(this)}static Empty;static{this.Empty={$:0}}});function Ac(e,t,r){return{c:e,v:t,f:r}}return Ha(Sc);})();
