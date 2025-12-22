var wsbundle=(()=>{var dr=Object.defineProperty;var jo=Object.getOwnPropertyDescriptor;var Uo=Object.getOwnPropertyNames;var Oo=Object.prototype.hasOwnProperty;var qo=(e,t)=>{for(var r in t)dr(e,r,{get:t[r],enumerable:!0})},Ho=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Uo(t))!Oo.call(e,o)&&o!==r&&dr(e,o,{get:()=>t[o],enumerable:!(n=jo(t,o))||n.enumerable});return e};var Ko=e=>Ho(dr({},"__esModule",{value:!0}),e);var Sc={};qo(Sc,{Layout:()=>Zo,Runtime:()=>hn,Support:()=>Jo});function ot(e,t){return Object.assign(Object.create(e.prototype),t)}var Yo=Symbol("force");function K(e){var t;function r(){return t||(t=e(o=>t=o)),t}return new Proxy(function(){},{get(o,a){return a==Yo&&r(),r()[a]},set(o,a,i){return r()[a]=i,!0},construct(o,a,i){return Reflect.construct(r(),a,i)}})}function cn(e,t){for(var r=0;r<t.length;r++){var n=t[r];e[n]===void 0&&delete e[n]}return e}function It(e){return e===void 0?null:{$:1,$0:e}}function qt(e,t,r){r?e[t]=r.$0:delete e[t]}function dn(e){return function(...t){return e(t)}}function un(e){return Object.defineProperty(e,"resizable",{enumerable:!1,writable:!1,configurable:!1,value:!0}),e}var pn=globalThis.WebSharperRuntime||{ScriptBasePath:"./",ScriptSkipAssemblyDir:!1};globalThis.WebSharperRuntime=pn;var hn=pn;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".section-link"),t=document.querySelectorAll(".section"),r={root:null,threshold:1,rootMargin:"0px"};function n(a){a.classList.add("active-link")}let o=new IntersectionObserver(function(a){a.forEach(i=>{i.isIntersecting&&e.forEach(l=>{let s=l.getAttribute("data-step"),d=i.target.getAttribute("id");s===d?n(l):l.classList.remove("active-link")})})},r);t.forEach(a=>{o.observe(a)})});document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("track"),t=document.getElementById("mini-inner"),r=document.getElementById("mini-prev"),n=document.getElementById("mini-next");if(!e||!t||!r||!n)return;let o=Array.from(t.children);if(o.length===0)return;let a=o[0].cloneNode(!0),i=o[o.length-1].cloneNode(!0);t.insertBefore(i,o[0]),t.appendChild(a);let l=1,s=!1,d=null,u=!1,b=_=>{t.style.transition=_?"transform 0.7s ease-out":"none",t.style.transform=`translateX(-${l*100}%)`},w=()=>{u||(u=!0,l+=1,b(!0))},f=()=>{u||(u=!0,l-=1,b(!0))};t.addEventListener("transitionend",()=>{let _=t.children.length,C=_-2;l===_-1?(l=1,b(!1)):l===0&&(l=C,b(!1)),requestAnimationFrame(()=>{u=!1})}),n.addEventListener("click",w),r.addEventListener("click",f);let y=()=>{$(),d=setInterval(()=>{s||w()},5e3)},$=()=>{d&&clearInterval(d)};e.addEventListener("mouseenter",()=>{s=!0}),e.addEventListener("mouseleave",()=>{s=!1}),b(!1),y()});function et(e){return"Dispose"in e}function Jo(){return Xo()}function Zo(){ea();let e=mn(),t=bn(),r=fn(),n=vn(),o=mn(),a=bn(),i=fn(),l=vn(),s=va(),d=wa(),u=wn(),b=wn(),w=ga(),f=ha(),y=new St("New_1"),$=(y.h.push(tt(y.k,"togglemenu",()=>y.i,()=>{Qo()})),y),_=($.h.push(tt($.k,"toggletheme",()=>$.i,()=>{ra()})),$),C=(_.h.push(tt(_.k,"onkeydown",()=>_.i,nt=>{sa(nt)})),_),v=(C.h.push(tt(C.k,"onstoppropagation",()=>C.i,nt=>{ca(nt)})),C),c=(v.h.push(tt(v.k,"closeonbackgroundclick",()=>v.i,nt=>{da(nt)})),v),h=(c.h.push(tt(c.k,"accountbtnclick",()=>c.i,nt=>{ua(nt)})),c),k=(h.h.push(tt(h.k,"accountbtnkeydown",()=>h.i,()=>{})),h),m=(k.h.push(tt(k.k,"login",()=>k.i,()=>{ma()})),k),p=(m.h.push(tt(m.k,"logout",()=>m.i,nt=>{pa(nt)})),m),x=(p.h.push(new B("dropdownattr",f)),p),M=(x.h.push(new B("accountbtnaria",w)),x),E=(M.h.push(new B("avatarattr",b)),M),D=(E.h.push(new B("avatarattrhamburger",u)),E),V=(D.h.push(new B("iconattr",d)),D),P=(V.h.push(new B("skeletonattr",s)),V),J=(P.h.push(new At("accountheadertext",la())),P),G=(J.h.push(new B("headerattrd",l)),J),U=(G.h.push(new B("btnmanageattrd",i)),G),Z=(U.h.push(new B("btnloginattrd",a)),U),ut=(Z.h.push(new B("btnlogoutattrd",o)),Z),Mt=(ut.h.push(new B("headerattr",n)),ut),Ve=(Mt.h.push(new B("btnmanageattr",r)),Mt),de=(Ve.h.push(new B("btnloginattr",t)),Ve),Ct=(de.h.push(new B("btnlogoutattr",e)),de),Ot=Ht(Ct.k,Ct.h,[]);return Ct.i=new mt(Ot[1],go(Ot[0])),fa(),st.Empty}function Qo(){let e=gr("navmenu"),t=gr("openIcon"),r=gr("closeIcon"),n=globalThis.document.body;e.classList.toggle("h-screen"),t.classList.toggle("hidden-open-icon"),r.classList.toggle("visible-close-icon"),n.classList.toggle("overflow-hidden")}function Xo(){let e=Ea(),t=Ta(),r=xn("freelancer"),n=xn("pro"),o=new St("New_1"),a=(o.h.push(new Re("onafterrender","",()=>{Xe(za(),null)})),o),i=(a.h.push(new Zt("proplan",n)),a),l=(i.h.push(new Zt("freelancerplan",r)),i),s=(l.h.push(new B("billmonthattr",t)),l),d=(s.h.push(new B("billyearattr",e)),s),u=(d.h.push(tt(d.k,"onbillmonth",()=>d.i,p=>{Va(p)})),d),b=(u.h.push(tt(u.k,"onbillyear",()=>u.i,p=>{Ma(p)})),u),w=(b.h.push(new wt("contactsubjectvar",T.Lens($t(),p=>p.subject,(p,x)=>Ft(x,p.message,p.email,p.name,p.country)))),b),f=(w.h.push(new wt("contactmessagevar",T.Lens($t(),p=>p.message,(p,x)=>Ft(p.subject,x,p.email,p.name,p.country)))),w),y=(f.h.push(new wt("contactemailvar",T.Lens($t(),p=>p.email,(p,x)=>Ft(p.subject,p.message,x,p.name,p.country)))),f),$=(y.h.push(new wt("contactnamevar",T.Lens($t(),p=>p.name,(p,x)=>Ft(p.subject,p.message,p.email,x,p.country)))),y),_=($.h.push(new wt("contactcountryvar",T.Lens($t(),p=>p.country,(p,x)=>Ft(p.subject,p.message,p.email,p.name,x)))),$),C=(_.h.push(new B("contactsendbuttonattr",_a())),_),v=(C.h.push(new At("contactsendbuttontext",Na())),C),c=(v.h.push(tt(v.k,"oncontactsendclick",()=>v.i,p=>{Ia(p)})),v),h=Ht(c.k,c.h,[["contactsubjectvar",0,g("WebSharper support")],["contactmessagevar",0,null],["contactemailvar",0,null],["contactnamevar",0,null],["contactcountryvar",0,g("United States")]]),k=new mt(h[1],Za(h[0]));return(c.i=k,k).Doc}function ta(e){let t=[],r;for(var n in e)t.push(e[n]);return t}function ea(){zn();let e=globalThis.localStorage.getItem("color-theme");e=="dark"||e==null&&na()?br(!0):br(!1)}function ra(){oa(Bn()=="dark"?"light":"dark")}function zn(){let e=Bn(),t=globalThis.document.querySelectorAll(".themed-iframe");for(let r=0,n=aa(t.length)-1;r<=n;r++){let o=t[r],a=o.getAttribute("data-src");if(a!=null){let i=new URL(a,globalThis.location.href);i.searchParams.set("theme",e),o.setAttribute("src",String(i))}}}function na(){return globalThis.matchMedia("(prefers-color-scheme: dark)").matches}function br(e){e?mr().classList.add("dark"):mr().classList.remove("dark")}function oa(e){br(e=="dark"),globalThis.localStorage.setItem("color-theme",e),zn()}function Bn(){return mr().classList.contains("dark")?"dark":"light"}function mr(){return globalThis.document.documentElement}function S(e,t){return Pn(e,t),e[t]}function I(e){return e.dims===2?e.length*e.length:e.length}function Pn(e,t){(t<0||t>=e.length)&&W("Index was outside the bounds of the array.")}function Or(e,t,r){Pn(e,t),e[t]=r}function W(e){throw new Error(e)}function aa(e){let t=ia(e);return t>2147483647?t-4294967296:t}function ia(e){return(e<0?Math.ceil(e):Math.floor(e))>>>0}function Dt(e){return[e.K,e.V]}function gn(e,t){let r=1+t-e;return r<=0?[]:Vl(r,n=>n+e)}var j=class{Equals(t){return this===t}GetHashCode(){return-1}},St=class extends j{i;k;h;s;constructor(t){if(t=="New_1"){let r;super(),this.i=null,this.k=(r=oi(),String(r)),this.h=un([]),qt(this,"s",null)}}};function la(){return yt.AccountHeaderText}function sa(e){e.Event.key=="Escape"&&Nt().Set(!1)}function ca(e){e.Event.stopPropagation()}function da(){Nt().Get()&&Nt().Set(!1)}function ua(){Nt().Set(!Nt().Get())}function pa(){Xe(z(()=>(Nt().Set(!1),R(xa(!0),()=>O(null)))),null)}function ha(){return _t("hidden",N(e=>!e,Nt().View))}function ga(){return at("aria-expanded",N(e=>e?"true":"false",Nt().View))}function wn(){return Q.Concat([at("src",Rn()),_t("hidden",N(e=>!e,Wn())),_t("opacity-0",pe().View)])}function wa(){return Q.Concat([_t("hidden",Wn()),_t("opacity-0",pe().View)])}function va(){return _t("opacity-0 hidden",N(e=>!e,pe().View))}function vn(){return Je(Ze())}function fn(){return Je(Ze())}function bn(){return Je(N(e=>!e,Ze()))}function mn(){return Je(Ze())}function fa(){Xe(z(()=>(pe().Set(!0),R(ya(),()=>R(bi(500),()=>(pe().Set(!1),it()))))),null)}function Nt(){return yt.isOpen}function Rn(){return yt.avatarSrcV}function Wn(){return yt.hasAvatarV}function pe(){return yt.isLoading}function Je(e){return Q.Concat([_t("hidden",N(t=>!t,e)),_t("flex",e)])}function Ze(){return yt.isAuthedV}function kn(){return yt.userV}function ba(){return yt.displayNameV}function tt(e,t,r,n){return new Fe(t,"",o=>a=>{let i=r();return i.SetAnchorRoot(o),n({Vars:i,Anchors:i,Target:o,Event:a})})}function Ht(e,t,r){let n=new rt("New_5"),o=new ct("New_3"),a=L(t);try{for(;a.MoveNext();){let i=a.Current,l=i.Name;o.SAdd(l),n.set_Item(l,i)}}finally{let i=a;typeof i=="object"&&et(i)&&a.Dispose()}return[po(t,Qr(i=>{let l=i[0],s=i[1],d=i[2];if(o.Contains(l))return null;{let u=s===0?Y.GetOrAddHoleFor(e,l,()=>{let b=d==null?null:g(d.$0),w=b==null?"":b.$0,f=T.Create_1(w);return new wt(l,f)}):s===1?Y.GetOrAddHoleFor(e,l,()=>{let b=d==null?null:g(d.$0),w=b==null?0:b.$0,f=T.Create_1(w);return new je(l,f)}):s===2?Y.GetOrAddHoleFor(e,l,()=>{let b=d==null?null:g(d.$0),w=b==null?!1:b.$0,f=T.Create_1(w);return new Ue(l,f)}):s===3?Y.GetOrAddHoleFor(e,l,()=>{let b=d==null?null:g(d.$0),w=b==null?-864e13:b.$0,f=T.Create_1(w);return new Oe(l,f)}):s===4?Y.GetOrAddHoleFor(e,l,()=>new qe(l,T.Create_1([]))):s===5?Y.GetOrAddHoleFor(e,l,()=>new ve(l,T.Create_1(g(globalThis.document.querySelector("[ws-dom="+l+"]"))))):s===6?Y.GetOrAddHoleFor(e,l,()=>{let b=d==null?null:g(d.$0),w=b==null?[]:b.$0,f=T.Create_1(w);return new He(l,f)}):W("Invalid kind for template Var type: "+String(s));return n.set_Item(l,u),g(u)}},r)),{$:0,$0:n}]}function ma(){globalThis.location.href=ka()}function ka(){return Aa(globalThis.location.pathname+globalThis.location.search)}function xa(e){return z(()=>ki(we(z(()=>R(Ti(),()=>O(null))),t=>(console.error("AuthClient.Logout RPC failed",t),it())),z(()=>(Kt().Set(null),e?we(z(()=>(globalThis.location.reload(),it())),()=>it()):it()))))}function ya(){return z(()=>{let e=Kt().Get();return e!=null&&e.$==1?O(g(e.$0)):(kr().Set(!0),Kr(z(()=>we(z(()=>R(Ei(),t=>(Kt().Set(t),O(t)))),t=>(console.error("AuthClient.FetchMe RPC failed",t),Kt().Set(null),O(null)))),()=>{kr().Set(!1)}))})}function Ca(){return _e.UserView}function $a(){return _e.IsAuthedView}function Aa(e){return"https://api.websharper.io/auth/github/start?returnUrl="+encodeURIComponent(e)}function Kt(){return _e.userVar}function kr(){return _e.isFetchingVar}var st=class e extends j{docNode;updates;static get Empty(){return e.Mk(null,ge())}static Mk(t,r){return new e(t,r)}static RunBefore(t,r){let n=globalThis.document.createTextNode("");t.parentNode.insertBefore(n,t),e.RunBetween(n,t,r)}static EmbedView(t){let r=ss();return e.Mk(pl(r),N(()=>{},gi(n=>(cs(r,n.docNode),n.updates),t)))}static RunBetween(t,r,n){rn(r,n.docNode);let o=ds(t,r,n.docNode);ze(Mr()||Ir()?Dn(En(!1,o,n.docNode)):()=>{Vn(!1,o,n.docNode)},n.updates)}static RunInPlace(t,r,n){let o=us(r,n.docNode);ze(Mr()||Ir()?Dn(En(t,o,n.docNode)):()=>{Vn(t,o,n.docNode)},n.updates)}static TextNode(t){return e.Mk(hl(globalThis.document.createTextNode(t)),ge())}static TextView(t){let r=ms();return e.Mk(gl(r),N(n=>{ks(r,n)},t))}ReplaceInDom(t){let r=globalThis.document.createTextNode("");t.parentNode.replaceChild(r,t),e.RunBefore(r,this)}constructor(t,r){super(),this.docNode=t,this.updates=r}};function Sa(e){let t={},r=L(e);try{for(;r.MoveNext();){let n=r.Current;t[n[0]]=n[1]}}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}return t}var mt=class extends j{doc;allVars;anchorRoot;get Doc(){return this.doc}SetAnchorRoot(t){this.anchorRoot=t}Hole(t){return this.allVars.Item(t)}constructor(t,r){super(),this.doc=r,this.allVars=t.$==0?t.$0:W("Should not happen"),this.anchorRoot=null}};function Na(){return Hr.ContactSendButtonText}function _a(){return Hr.ContactSendButtonAttr}function Ta(){let e=N(t=>t.$==1?"false":"true",bt().View);return Q.Concat([at("data-active",e),at("aria-pressed",e)])}function Ea(){let e=N(t=>t.$==1?"true":"false",bt().View);return Q.Concat([at("data-active",e),at("aria-pressed",e)])}function Va(){bt().Set(_i)}function Ma(){bt().Set(Xn)}function Ia(e){e.Event.preventDefault();let t=$t().Get();Un(t)?Xe(z(()=>(De().Set(!0),Kr(z(()=>R(Ra(t),r=>r?(alert("Message sent successfully!"),La(),it()):(alert("Failed to send message. Please try again later."),it()))),()=>{De().Set(!1)}))),null):alert("Please fill in all required fields.")}function La(){$t().Set(Ft("WebSharper support","","","","United States"))}var H=class extends j{ForTextView(){return console.warn("Content hole filled with attribute data",this.Name),null}AddAttribute(t,r){console.warn("Var hole filled with non-Var data",this.Name)}get AsChoiceView(){return console.warn("Attribute value hole filled with non-text data",this.Name),ln("")}ApplyVarHole(t){console.warn("Not a var hole: ",this.Name)}},T=K(e=>class extends j{static{T=e(this)}static Lens(r,n,o){let a=fi(),i=N(n,r.View);return new class extends Ge{constructor(){super()}Get(){return n(r.Get())}Set(l){return r.Update(s=>o(s,l))}SetFinal(l){return this.Set(l)}Update(l){return r.Update(s=>o(s,l(n(s))))}UpdateMaybe(l){return r.UpdateMaybe(s=>{let d=l(n(s));return d==null?null:g(o(s,d.$0))})}get View(){return i}get Id(){return a}}}static Create_1(r){return new $r(!1,{s:ir(r,[])},r)}});function $t(){return Rt.ContactFormVar}function xr(){return Rt.IsLoadingVar}function jn(){return Rt.catalogVar}function bt(){return Rt.intervalVar}function Un(e){return!Jt(e.message)&&!Jt(e.email)&&!Jt(e.name)&&Ga(e.email)}function De(){return Rt.IsSendingVar}function Da(){return Rt.CanSendView}function ur(e){return e.$==1?"year":"month"}function Fa(e){let n=Pt(999,e)===-1?999:e;return Pt(1,n)===1?1:n}function Ga(e){if(e==null)return!1;{let t=Zl(e);return t.indexOf("@")!=-1&&t.indexOf(".")!=-1}}function Ft(e,t,r,n,o){return{subject:e,message:t,email:r,name:n,country:o}}function za(){return z(()=>(xr().Set(!0),Kr(z(()=>R(Ba(),e=>(e==null||Pa(e.$0),it()))),()=>{xr().Set(!1)})))}function Ba(){return z(()=>{let e=Wa();return e==null?R(ja(),t=>{let r;return t!=null&&t.$==1&&I(t.$0)>0&&(r=t.$0,!0)?(Ua(r),O(g(r))):O(null)}):O(g(e.$0))})}function Pa(e){jn().Set(Zn($i(vl(t=>{let r=t.YearPrice;return r!=null&&r.$==1?r.$0.Amount:0},dt(t=>{let r=t[1],n=S(r,0),o=l=>{let s=wl(d=>d.interval==l,r);if(s==null)return null;{let d=s.$0,u=$l(d.unitAmountCents/100,d.currency.toUpperCase());return g(u)}},a=n.description,i=a==null?"":a.$0;return Ni(t[0],n.name,i,n.isPerSeat,n.maxSeats,o("month"),o("year"))},rs(t=>t.code.toLowerCase(),e))))))}function Ra(e){return z(()=>{let t=new FormData;return t.append("subject",e.subject),t.append("message",e.message),t.append("email",e.email),t.append("name",e.name),t.append("country",e.country),we(z(()=>{let r;return R(Pl(globalThis.fetch("https://api.intellifactory.com/api/contact",(r={},r.method="POST",r.body=t,r))),n=>O(n.ok))}),()=>O(!1))})}function Wa(){try{let e=globalThis.sessionStorage.getItem("planprices");return e==null||Jt(e)?null:g(JSON.parse(e))}catch{return null}}function ja(){return z(()=>we(z(()=>R(Vi(),e=>O(g(e)))),()=>O(null)))}function Ua(e){try{let t=JSON.stringify(e);globalThis.sessionStorage.setItem("planprices",t)}catch{}}function xn(e){return st.EmbedView(Qe((t,r)=>{if(t){let n=new St("New_1"),o=Ht(n.k,n.h,[]),a=new mt(o[1],Qa(o[0]));return(n.i=a,a).Doc}else{let n=Sl(o=>o.Id==e,r.Plans);return n==null?st.Empty:Oa(n.$0)}},xr().View,jn().View))}function Oa(e){let t,r=T.Create_1(1),n=N(m=>m.$==1?e.YearPrice:e.MonthPrice,bt().View),o=N(m=>m==null?"N/A":Cn(m.$0.Amount),n),a=N(m=>(e.IsPerSeat?" / seat":"")+" / "+ur(m),bt().View),i=On((m,p,x)=>p==null?"-":Cn(p.$0.Amount*x),bt().View,n,r.View),l=N(m=>"Total ("+ur(m)+"ly)",bt().View),s=e.MaxSeats;if(s==null||s.$0>1){let m=T.Lens(r,String,(J,G)=>{let U,Z=(U=0,[ho(G,{get:()=>U,set:ut=>{U=ut}}),U]);return Z[0]?Z[1]:J}),p=new St("New_1"),x=(p.h.push(new wt("seatcount",m)),p),M=(x.h.push(tt(x.k,"onseatminus",()=>x.i,()=>{r.Get()>1&&r.Set(r.Get()-1)})),x),E=(M.h.push(tt(M.k,"onseatplus",()=>M.i,()=>{r.Set(r.Get()+1)})),M),D=Ht(E.k,E.h,[["seatcount",0,null]]),V=new mt(D[1],ti(D[0]));t=(E.i=V,V).Doc}else{let m=new St("New_1"),p=Ht(m.k,m.h,[]),x=new mt(p[1],ei(p[0]));t=(m.i=x,x).Doc}let d=at("href",Qe((m,p)=>"./checkout?plan="+String(e.Id)+"&interval="+String(ur(m))+"&seats="+String(Fa(p)),bt().View,r.View)),u=new St("New_1"),b=(u.h.push(new xe("name",e.Name)),u),w=(b.h.push(new xe("description",e.Description)),b),f=(w.h.push(new At("priceamount",o)),w),y=(f.h.push(new At("pricelabel",a)),f),$=(y.h.push(new Zt("seatselector",t)),y),_=($.h.push(new At("totallabel",l)),$),C=(_.h.push(new At("totalamount",i)),_),v=(C.h.push(new B("checkoutattr",d)),C),c=Ht(v.k,v.h,[]),h=new mt(c[1],Xa(c[0]));return(v.i=h,h).Doc}function g(e){return{$:1,$0:e}}function A(e,t){if(e===t)return!0;{let o=typeof e;if(o=="object"){if(e==null||t===null||t===void 0||!A(typeof t,"object"))return!1;if("Equals"in e)return e.Equals(t);if("Equals"in t)return!1;if(e instanceof Array&&t instanceof Array)return yn(e,t);if(e instanceof Date&&t instanceof Date)return qa(e,t);{let a=e,i=t,l=[!0],s;for(var r in a)if((d=>(l[0]=!a.hasOwnProperty(d)||i.hasOwnProperty(d)&&A(a[d],i[d]),!l[0]))(r))break;if(l[0]){let d;for(var n in i)if((u=>(l[0]=!i.hasOwnProperty(u)||a.hasOwnProperty(u),!l[0]))(n))break}return l[0]}}else return o=="function"&&("$Func"in e?e.$Func===t.$Func&&e.$Target===t.$Target:"$Invokes"in e&&"$Invokes"in t&&yn(e.$Invokes,t.$Invokes))}}function Pt(e,t){if(e===t)return 0;{let o=typeof e;switch(o=="boolean"||o=="number"||o=="bigint"||o=="string"?1:o=="object"?2:o=="function"?3:o=="symbol"?4:0){case 0:return typeof t>"u"?0:-1;case 1:return e<t?-1:1;case 2:if(e===null)return-1;if(t===null)return 1;if("CompareTo"in e)return e.CompareTo(t);if("CompareTo0"in e)return e.CompareTo0(t);if(e instanceof Array&&t instanceof Array)return Ha(e,t);if(e instanceof Date&&t instanceof Date)return Ka(e,t);{let a=e,i=t,l=[0],s;for(var r in a)if((d=>a.hasOwnProperty(d)?i.hasOwnProperty(d)?(l[0]=Pt(a[d],i[d]),l[0]!==0):(l[0]=1,!0):!1)(r))break;if(l[0]===0){let d;for(var n in i)if((u=>i.hasOwnProperty(u)?!a.hasOwnProperty(u)&&(l[0]=-1,!0):!1)(n))break}return l[0]}break;case 3:return W("Cannot compare function values.");case 4:return W("Cannot compare symbol values.")}}}function he(e){let t=typeof e;return t=="function"?0:t=="boolean"?e?1:0:t=="number"?e:t=="string"?Le(e):t=="object"?e==null?0:e instanceof Array?Ya(e):Ja(e):t=="bigint"?Le(String(e)):t=="symbol"?Le(e.description):0}function yn(e,t){let r,n;if(I(e)===I(t)){for(r=!0,n=0;r&&n<I(e);)A(S(e,n),S(t,n))||(r=!1),n=n+1;return r}else return!1}function qa(e,t){return e.getTime()===t.getTime()}function Ha(e,t){let r,n;if(I(e)<I(t))return-1;if(I(e)>I(t))return 1;for(r=0,n=0;r===0&&n<I(e);)r=Pt(S(e,n),S(t,n)),n=n+1;return r}function Ka(e,t){return Pt(e.getTime(),t.getTime())}function Le(e){let t;if(e===null)return 0;t=5381;for(let r=0,n=e.length-1;r<=n;r++)t=qr(t,e[r].charCodeAt());return t}function Ya(e){let t=-34948909;for(let r=0,n=I(e)-1;r<=n;r++)t=qr(t,he(S(e,r)));return t}function Ja(e){if("GetHashCode"in e)return e.GetHashCode();{let r=qr,n=[0],o;for(var t in e)if((a=>(n[0]=r(r(n[0],Le(a)),he(e[a])),!1))(t))break;return n[0]}}function qr(e,t){return(e<<5)+e+t}var pr;var hr;function Za(e){return e?Se("support",g("content"),()=>pt(`\r
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
    `))}function Qa(e){return e?Se("support",g("skeletoncard"),()=>pt(`<div>\r
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
                </div>`))}function Xa(e){return e?Se("support",g("plancard"),()=>pt(`<div>\r
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
                </div>`))}function ti(e){return e?Se("support",g("seatwidget"),()=>pt(`<div class="custom-number-input h-10 w-24">\r
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
                </div>`))}function ei(e){return e?Se("support",g("staticseatbadge"),()=>pt(`<div>\r
                    <div class="rounded-md border border-gray-300 px-3 h-10 flex items-center text-gray-800 dark:border-white/20 dark:text-white bg-gray-50 dark:bg-white/5">\r
                        solo\r
                    </div>\r
                </div>`),e):ie("support",g("staticseatbadge"),()=>pt(`<div>\r
                    <div class="rounded-md border border-gray-300 px-3 h-10 flex items-center text-gray-800 dark:border-white/20 dark:text-white bg-gray-50 dark:bg-white/5">\r
                        solo\r
                    </div>\r
                </div>`))}function ri(){return pr||(pr=Ts(void 0,"$",[null,[1,[["$0","Value",ft(),0]]]])())}function ni(){return hr||(hr=Ms(void 0,[["code",ft(),0],["name",ft(),0],["description",ft(),1],["isPerSeat",ft(),0],["maxSeats",ft(),1],["interval",ft(),0],["currency",ft(),0],["unitAmountCents",ft(),0]])())}var B=class e extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},At=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(this.fillWith)}get AsChoiceView(){return Ut(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},yt=K(e=>class{static{yt=e(this)}static AccountHeaderText;static displayNameV;static hasAvatarV;static avatarSrcV;static isLoading;static isAuthedV;static userV;static isOpen;static{this.isOpen=T.Create_1(!1),this.userV=Ca(),this.isAuthedV=$a(),this.isLoading=T.Create_1(!0),this.avatarSrcV=N(r=>r!=null&&r.$==1?Jt(r.$0.avatarUrl)?"":r.$0.avatarUrl:"",kn()),this.hasAvatarV=N(r=>r!="",Rn()),this.displayNameV=N(r=>r==null||Jt(r.$0.login)?"Account":r.$0.login,kn()),this.AccountHeaderText=ba()}});function oi(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]","g"),e=>{let t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}var Fe=class e extends H{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.key,this.fillWith)}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}};function gr(e){return globalThis.document.getElementById(e)}function Cn(e){return"\u20AC"+String(e)}var Ge=class extends j{};function _t(e,t){return er(t,r=>n=>n?Bi(r,e):Pi(r,e))}function at(e,t){return er(t,r=>n=>r.setAttribute(e,n))}function ai(e,t){return er(t,r=>n=>n?r.setAttribute(e,""):r.removeAttribute(e))}function ii(e,t){return Q.A3(r=>{r.addEventListener(e,n=>t(r)(n),!1)})}function $n(e){return Q.A4(e)}function li(e){return ee(So(),e)}function si(e){return ee(No(),e)}function ci(e){return ee(_o(),e)}function di(e){return ee(To(),e)}function ui(e){return ee(Eo(),e)}function pi(e){return ee(Vo(),e)}function ee(e,t){let r=e(t);return to(Q.A3(r[0]),hi(r[1],r[2]))}function hi(e,t){return er(t,e)}function N(e,t){return re(()=>ne(e,t()))}function ge(e){let t={s:Et(e)};return()=>t}function Qe(e,t,r){return re(()=>rr(e,t(),r()))}function re(e){let t={c:null,o:e};return()=>{let r=t.c;if(r===null){r=t.o(),t.c=r;let n=r.s;return n!=null&&n.$==0?t.o=null:ao(r,()=>{t.c=null}),r}else return r}}function On(e,t,r,n){return re(()=>Qi(e,t(),r(),n()))}function gi(e,t){return wi(N(e,t))}function ze(e,t){function r(){al(t(),e,()=>{Tt().Fork(r)})}Tt().Fork(r)}function wi(e){return re(()=>il(e()))}function vi(e){return re(()=>ll(Wt(t=>t(),e)))}function Be(e,t){return re(()=>sl(e(),t()))}var Q=class e{static Concat(t){let r=nr(t);return or(Yr(),(n,o)=>to(n,o),r)}static A1(t){return ot(e,{$:1,$0:t})}static A2(t,r){return ot(e,{$:2,$0:t,$1:r})}static HandlerImpl(t,r){return e.A3(n=>{n.addEventListener(t,o=>r(n)(o),!1)})}static Create(t,r){return e.A3(n=>{n.setAttribute(t,r)})}static A4(t){return ot(e,{$:4,$0:t})}static A3(t){return ot(e,{$:3,$0:t})}$;$0;$1},Hr=K(e=>class{static{Hr=e(this)}static ContactSendButtonText;static ContactSendButtonAttr;static{this.ContactSendButtonAttr=ai("disabled",Qe((r,n)=>!r||n,Da(),De().View)),this.ContactSendButtonText=N(r=>r?"Sending...":"Send",De().View)}}),wt=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(this.fillWith.View)}AddAttribute(t,r){t(r)(li(this.fillWith))}get AsChoiceView(){return Ut(N(String,this.fillWith.View))}ApplyVarHole(t){ce(So(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function fi(){return qn(Pe()+1),"uid"+String(Pe())}function qn(e){en.counter=e}function Pe(){return en.counter}function Yt(){return qn(Pe()+1),Pe()}var Rt=K(e=>class{static{Rt=e(this)}static CanSendView;static IsSendingVar;static ContactFormVar;static intervalVar;static catalogVar;static IsLoadingVar;static{this.IsLoadingVar=T.Create_1(!0),this.catalogVar=T.Create_1(Zn(xt.Empty)),this.intervalVar=T.Create_1(Xn),this.ContactFormVar=T.Create_1(Ft("WebSharper support","","","","United States")),this.IsSendingVar=T.Create_1(!1),this.CanSendView=N(Un,$t().View)}}),Zt=class e extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Re=class e extends H{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.key,this.fillWith)}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}};function Xe(e,t){let r=Hn()[0],n=t==null?r:t.$0;n.c||e(Ae(o=>{o.$==1&&Kn(o.$0)},n))}function z(e){return t=>{try{e()(t)}catch(r){t.k(ar(r))}}}function R(e,t){return mi(r=>{e(Ae(n=>{if(n.$==0){let o=n.$0;Tt().Fork(()=>{try{t(o)(r)}catch(a){r.k(ar(a))}})}else Tt().Fork(()=>{r.k(n)})},r.ct))})}function O(e){return t=>{t.k(Te(e))}}function bi(e){return t=>{let r,n;r=void 0,n=void 0,r=setTimeout(()=>{n.Dispose(),Tt().Fork(()=>{t.k(Te(null))})},e),n=Yn(t.ct,()=>{clearTimeout(r),Tt().Fork(()=>{Jn(t)})})}}function it(){return le.Zero}function Kr(e,t){return r=>{e(Ae(n=>{try{t(),r.k(n)}catch(o){r.k(ar(o))}},r.ct))}}function Hn(){return le.defCTS}function Kn(e){console.log("WebSharper: Uncaught asynchronous exception",e)}function mi(e){return t=>{t.ct.c?Jn(t):e(t)}}function ki(e,t){return R(e,()=>t)}function we(e,t){return r=>{e(Ae(n=>{if(n.$==0)r.k(Te(n.$0));else if(n.$==1){let o=n.$0;try{t(o)(r)}catch{r.k(n)}}else r.k(n)},r.ct))}}function Yn(e,t){if(e===xi())return{Dispose(){return null}};{let r=e.r.push(t)-1;return{Dispose(){return Or(e.r,r,()=>{})}}}}function Jn(e){e.k(mo(new Ke("New",e.ct)))}function Tt(){return le.scheduler}function xi(){return le.noneCT}function tr(e){return t=>{let r=[!1],n=o=>{r[0]?W("A continuation provided by Async.FromContinuations was invoked multiple times"):(r[0]=!0,Tt().Fork(o))};e(o=>{n(()=>{t.k(Te(o))})},o=>{n(()=>{t.k(ar(o))})},o=>{n(()=>{t.k(mo(o))})})}}function yi(e,t){let r=Hn()[0],n=t==null?r:t.$0;Tt().Fork(()=>{n.c||e(Ae(o=>{o.$==1&&Kn(o.$0)},n))})}function Ci(){return le.GetCT}function Zn(e){return{Plans:e}}function $i(e){let t=xt.Empty;for(let r=I(e)-1,n=0;r>=n;r--)t=xt.Cons(S(e,r),t);return t}function Ai(e){return e.$==1?e.$0:Qn()}function Si(e){return e.$==1?e.$1:Qn()}function Qn(){return W("The input list was empty.")}function Ni(e,t,r,n,o,a,i){return{Id:e,Name:t,Description:r,IsPerSeat:n,MaxSeats:o,MonthPrice:a,YearPrice:i}}var _i={$:0},Xn={$:1};function Ti(){return new me().Async("IRemotingContract/Logout",[])}function Ei(){return R(new me().Async("IRemotingContract/Me",[]),e=>O(ri()(e)))}function Vi(){return R(new me().Async("IRemotingContract/GetPlanPrices",[]),e=>O(Es(ni)()(e)))}function er(e,t){return Q.A1(new Nr(e,t))}function to(e,t){if(e===null)return t;if(t===null)return e;{let r=Q.A2(e,t);return Mi(r,yr(e)|yr(t)),r}}function Yr(){return F.EmptyAttr}function Mi(e,t){e.flags=t}function yr(e){return e!==null&&e.hasOwnProperty("flags")?e.flags:0}function Jr(e,t){let r=[],n=[];function o(l){for(;;)if(l!==null){if(l!=null&&l.$==1)return r.push(l.$0);if(l!=null&&l.$==2){let s=l.$1,d=l.$0;o(d),l=s}else return l!=null&&l.$==3?l.$0(e):l!=null&&l.$==4?n.push(l.$0):null}else return null}o(t);let a=r.slice(0);return $o(e,yr(t),a,n.length===0?null:g(l=>{Ml(s=>{s(l)},n)}))}function eo(e){return ul(t=>t.NChanged,ge(),Be,e.DynNodes)}function wr(e){return $o(e,0,[],null)}function Ii(e){return(e.DynFlags&2)===2}function Li(e){return Zr(e,(t,r)=>t.NGetExitAnim(r))}function Di(e){return(e.DynFlags&1)===1}function Fi(e){return Zr(e,(t,r)=>t.NGetEnterAnim(r))}function Gi(e){return(e.DynFlags&4)===4}function zi(e){return Zr(e,(t,r)=>t.NGetChangeAnim(r))}function Zr(e,t){return lr(dt(r=>t(r,e.DynElem),e.DynNodes))}function ro(e,t){X(r=>{r.NSync(e)},t.DynNodes)}function Bi(e,t){let r=no(e);r==""?Cr(e,t):oo(t).test(r)||Cr(e,r+" "+t)}function Pi(e,t){let r=oo(t),n=no(e).replace(r,(o,a,i)=>a==""||i==""?"":" ");Cr(e,n)}function pt(e){let t=globalThis.document.createElement("div");if(Ri().test(e)){let i=function(l,s){for(;;){if(s===0)return l;{let d=s;l=l.lastChild,s=d-1}}},r=Oi().exec(e),n=A(r,null)?"":S(r,1).toLowerCase(),o=Wi()[n],a=o||ji();return t.innerHTML=a[1]+e.replace(Ui(),"<$1></$2>")+a[2],(l=>{let s=l;return d=>i(s,d)})(t)(a[0])}else return t.appendChild(globalThis.document.createTextNode(e)),t}function no(e){return e instanceof SVGElement?e.getAttribute("class"):e.className}function Cr(e,t){e instanceof SVGElement?e.setAttribute("class",t):e.className=t}function oo(e){return new RegExp("(\\s+|^)"+e+"(?:\\s+"+e+")*(\\s+|$)","g")}function Ri(){return se.rhtml}function Wi(){return se.wrapMap}function ji(){return se.defaultWrap}function Ui(){return se.rxhtmlTag}function Oi(){return se.rtagName}function qi(e,t,r){let n=e.querySelectorAll(t);for(let o=0,a=n.length-1;o<=a;o++)r(n[o])}function An(e){let t=[];for(let r=0,n=e.childNodes.length-1;r<=n;r++)t.push(e.childNodes[r]);return t}function Hi(e,t){let r=globalThis.document.querySelectorAll(e);for(let n=0,o=r.length-1;n<=o;n++)t(r[n])}function Ki(e,t,r){let n;if(r.parentNode===e){let o=r.nextSibling,a=A(o,null)?null:o;n=t===a}else n=!1;n||e.insertBefore(r,t)}function Yi(e,t){t.parentNode===e&&e.removeChild(t)}function ne(e,t){let r=t.s;if(r!=null&&r.$==0)return{s:Et(e(r.$0))};{let n={s:jt([],[])};return lt(t,o=>{io(n,t,e(o))},n),n}}function rr(e,t,r){let n=t.s,o=r.s;if(n!=null&&n.$==0)return o!=null&&o.$==0?{s:Et(e(n.$0,o.$0))}:Ji(e,n.$0,r);if(o!=null&&o.$==0)return Zi(e,o.$0,t);{let a={s:jt([],[])},i=()=>{let l=a.s;if(!(l!=null&&l.$==0||l!=null&&l.$==2)){let s=Gt(t),d=Gt(r);s!=null&&s.$==1&&d!=null&&d.$==1&&(s.$0[1]&&d.$0[1]?oe(a,e(s.$0[0],d.$0[0])):ae(a,e(s.$0[0],d.$0[0])))}};return lt(t,i,a),lt(r,i,a),a}}function ao(e,t){let r=e.s;r==null?t():r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,r.$1.push(t)):r.$0}function lt(e,t,r){let n=e.s;if(n==null)ke(r);else if(n!=null&&n.$==2){let o=n.$0;We(n.$1,r),t(o)}else if(n!=null&&n.$==3){let o=n.$1;n.$0.push(t),We(o,r)}else t(n.$0)}function io(e,t,r){let n=t.s;n!=null&&n.$==0?oe(e,r):ae(e,r)}function Ji(e,t,r){return ne(n=>e(t,n),r)}function Zi(e,t,r){return ne(n=>e(n,t),r)}function Gt(e){let t=e.s;return t!=null&&t.$==0?g([t.$0,!0]):t!=null&&t.$==2?g([t.$0,!1]):null}function oe(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$0;e.s=Et(t);for(let o=0,a=I(n)-1;o<=a;o++)S(n,o)(t)}}function ae(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$1,o=r.$0;e.s=ir(t,n);for(let a=0,i=I(o)-1;a<=i;a++)S(o,a)(t)}}function Qi(e,t,r,n){let o=t.s,a=r.s,i=n.s;if(o!=null&&o.$==0)return a!=null&&a.$==0?i!=null&&i.$==0?{s:Et(e(o.$0,a.$0,i.$0))}:Xi(e,o.$0,a.$0,n):i!=null&&i.$==0?tl(e,o.$0,i.$0,r):el(e,o.$0,r,n);if(a!=null&&a.$==0)return i!=null&&i.$==0?rl(e,a.$0,i.$0,t):nl(e,a.$0,t,n);if(i!=null&&i.$==0)return ol(e,i.$0,t,r);{let l={s:jt([],[])},s=()=>{let d=l.s;if(!(d!=null&&d.$==0||d!=null&&d.$==2)){let u=Gt(t),b=Gt(r),w=Gt(n);u!=null&&u.$==1&&b!=null&&b.$==1&&w!=null&&w.$==1&&(u.$0[1]&&b.$0[1]&&w.$0[1]?oe(l,e(u.$0[0],b.$0[0],w.$0[0])):ae(l,e(u.$0[0],b.$0[0],w.$0[0])))}};return lt(t,s,l),lt(r,s,l),lt(n,s,l),l}}function We(e,t){if(e.push(t),e.length%20===0){let r=e.slice(0);uc(e);for(let n=0,o=I(r)-1;n<=o;n++){let a=S(r,n);typeof a=="object"?(i=>{i.s&&e.push(i)})(a):(i=>{e.push(i)})(a)}}}function Xi(e,t,r,n){return ne(o=>e(t,r,o),n)}function tl(e,t,r,n){return ne(o=>e(t,o,r),n)}function el(e,t,r,n){return rr((o,a)=>e(t,o,a),r,n)}function rl(e,t,r,n){return ne(o=>e(o,t,r),n)}function nl(e,t,r,n){return rr((o,a)=>e(o,t,a),r,n)}function ol(e,t,r,n){return rr((o,a)=>e(o,a,t),r,n)}function al(e,t,r){let n=e.s;if(n==null)r();else if(n!=null&&n.$==2){let o=n.$0;n.$1.push(r),t(o)}else if(n!=null&&n.$==3){let o=n.$1;n.$0.push(t),o.push(r)}else t(n.$0)}function il(e){let t={s:jt([],[])};return lt(e,r=>{let n=r();lt(n,o=>{let a,i=n.s;if(i!=null&&i.$==0){let l=e.s;a=l!=null&&l.$==0}else a=!1;a?oe(t,o):ae(t,o)},t)},t),t}function ll(e){let t=Qt(e);if(t.length==0)return{s:Et([])};{let r={s:jt([],[])},n=[I(t)-1],o=()=>{if(n[0]===0){let a=dt(i=>{let l=i.s;return l!=null&&l.$==0||l!=null&&l.$==2?l.$0:W("value not found by View.Sequence")},t);uo(i=>{let l=i.s;return l!=null&&l.$==0},t)?oe(r,a):ae(r,a)}else n[0]=n[0]-1};return X(a=>{lt(a,o,r)},t),r}}function sl(e,t){let r=e.s,n=t.s;if(r!=null&&r.$==0)return n!=null&&n.$==0?{s:Et(null)}:t;if(n!=null&&n.$==0)return e;{let o={s:jt([],[])},a=()=>{let i=o.s;if(!(i!=null&&i.$==0||i!=null&&i.$==2)){let l=Gt(e),s=Gt(t);l!=null&&l.$==1&&s!=null&&s.$==1&&(l.$0[1]&&s.$0[1]?oe(o,null):ae(o,null))}};return lt(e,a,o),lt(t,a,o),o}}function cl(e){let t=e.s;if(t==null)return e;if(t!=null&&t.$==2){let r={s:ir(t.$0,[])};return dl(e,r),r}else if(t!=null&&t.$==3){let r={s:jt([],[])};return lt(e,n=>{io(r,e,n)},r),r}else return e}function dl(e,t){let r=e.s;r==null?ke(t):r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,We(r.$1,t)):r.$0}function nr(e){if(e instanceof Array)return e;if(e instanceof xt)return so(e);if(e===null)return[];{let t=[],r=L(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}}function or(e,t,r){let n=I(r);function o(a){return i=>{let l;switch(i<=0?0:i===1&&a>=0&&a<n?1:(l=i,2)){case 0:return e;case 1:return S(r,a);case 2:let s=i/2>>0;return t(o(a)(s),o(a+s)(i-s))}}}return o(0)(n)}function ul(e,t,r,n){let o=I(n);function a(i){return l=>{let s;switch(l<=0?0:l===1&&i>=0&&i<o?1:(s=l,2)){case 0:return t;case 1:return e(S(n,i));case 2:let d=l/2>>0;return r(a(i)(d),a(i+d)(l-d))}}}return a(0)(o)}function pl(e){return{$:2,$0:e}}function lo(e){return{$:6,$0:e}}function hl(e){return{$:5,$0:e}}function gl(e){return{$:4,$0:e}}var rt=class extends j{equals;hash;count;data;set_Item(t,r){this.set(t,r)}set(t,r){let n=this.hash(t),o=this.data[n];if(o==null)this.count=this.count+1,this.data[n]=new Array({K:t,V:r});else{let a=Xr(i=>this.equals.apply(null,[Dt(i)[0],t]),o);a==null?(this.count=this.count+1,o.push({K:t,V:r})):o[a.$0]={K:t,V:r}}}TryGetValue(t,r){let n=this.data[this.hash(t)];if(n==null)return!1;{let o=co(a=>{let i=Dt(a);return this.equals.apply(null,[i[0],t])?g(i[1]):null},n);return o!=null&&o.$==1&&(r.set(o.$0),!0)}}ContainsKey(t){let r=this.data[this.hash(t)];return r==null?!1:Ar(n=>this.equals.apply(null,[Dt(n)[0],t]),r)}GetEnumerator(){return is(ml(ta(this.data)))}Item(t){return this.get(t)}DAdd(t,r){this.add(t,r)}get Values(){return new Br(this)}get(t){let r=this.data[this.hash(t)];return r==null?ys():kl(n=>{let o=Dt(n);return this.equals.apply(null,[o[0],t])?g(o[1]):null},r)}add(t,r){let n=this.hash(t),o=this.data[n];o==null?(this.count=this.count+1,this.data[n]=new Array({K:t,V:r})):(Ar(a=>this.equals.apply(null,[Dt(a)[0],t]),o)&&Cs(),this.count=this.count+1,o.push({K:t,V:r}))}RemoveKey(t){return this.remove(t)}get Keys(){return new Rr(this)}remove(t){let r=this.hash(t),n=this.data[r];if(n==null)return!1;{let o=$e(a=>!this.equals.apply(null,[Dt(a)[0],t]),n);return I(o)<n.length&&(this.count=this.count-1,this.data[r]=o,!0)}}constructor(t,r,n,o){if(t=="New_5"&&(t="New_6",r=[],n=A,o=he),t=="New_6"){let a=r,i=n,l=o;super(),this.equals=i,this.hash=l,this.count=0,this.data=[];let s=L(a);try{for(;s.MoveNext();){let d=s.Current;this.set(d.K,d.V)}}finally{let d=s;typeof d=="object"&&et(d)&&s.Dispose()}}}},$r=class extends Ge{isConst;current;snap;view;id;get View(){return this.view}Get(){return this.current}Update(t){this.Set(t(this.Get()))}Set(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):(ke(this.snap),this.current=t,this.snap={s:ir(t,[])})}UpdateMaybe(t){let r=t(this.Get());r!=null&&r.$==1&&this.Set(r.$0)}SetFinal(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):(ke(this.snap),this.isConst=!0,this.current=t,this.snap={s:Et(t)})}constructor(t,r,n){super(),this.isConst=t,this.current=n,this.snap=r,this.view=()=>this.snap,this.id=Yt()}},xt=class e{static Empty=ot(e,{$:0});static Cons(t,r){return ot(e,{$:1,$0:t,$1:r})}GetEnumerator(){return new ht(this,null,t=>{let r=t.s;if(r.$==0)return!1;{let n=r.$1;return t.c=r.$0,t.s=n,!0}},void 0)}$;$0;$1};function dt(e,t){let r=new Array(t.length);for(let n=0,o=t.length-1;n<=o;n++)r[n]=e(t[n]);return r}function wl(e,t){let r=null,n=0;for(;n<t.length&&r==null;)e(t[n])&&(r=g(t[n])),n=n+1;return r}function vl(e,t){return dt(r=>r[0],fl((r,n)=>[n,[e(n),r]],t).sort((r,n)=>Pt(r[1],n[1])))}function Qr(e,t){let r=[];for(let n=0,o=t.length-1;n<=o;n++){let a=e(t[n]);a==null||r.push(a.$0)}return r}function so(e){let t=[],r=e;for(;r.$!=0;)t.push(Ai(r)),r=Si(r);return t}function fl(e,t){let r=new Array(t.length);for(let n=0,o=t.length-1;n<=o;n++)r[n]=e(n,t[n]);return r}function Xr(e,t){let r=null,n=0;for(;n<t.length&&r==null;)e(t[n])&&(r=g(n)),n=n+1;return r}function co(e,t){let r=null,n=0;for(;n<t.length&&r==null;){let o=e(t[n]);o!=null&&o.$==1&&(r=o),n=n+1}return r}function Ar(e,t){let r=!1,n=0,o=I(t);for(;!r&&n<o;)e(t[n])?r=!0:n=n+1;return r}function bl(e,t){let r=Xr(e,t);return r==null?W("KeyNotFoundException"):r.$0}function X(e,t){for(let r=0,n=t.length-1;r<=n;r++)e(t[r])}function ml(e){return Array.prototype.concat.apply([],Qt(e))}function $e(e,t){let r=[];for(let n=0,o=t.length-1;n<=o;n++)e(t[n])&&r.push(t[n]);return r}function tn(e,t,r){let n=r,o=t.length;for(let a=1,i=o;a<=i;a++)n=e(t[o-a],n);return n}function Qt(e){if(e instanceof Array)return e.slice();if(e instanceof xt)return so(e);{let t=[],r=L(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}}function kl(e,t){let r=co(e,t);return r==null?W("KeyNotFoundException"):r.$0}function xl(e,t){return Qt(zl(e,t))}function uo(e,t){let r=!0,n=0,o=I(t);for(;r&&n<o;)e(t[n])?n=n+1:r=!1;return r}function yl(e,t){let r=new Array(e);for(let n=0,o=e-1;n<=o;n++)r[n]=t;return r}function Cl(e,t){e<0&&W("Negative size given.");let r=new Array(e);for(let n=0,o=e-1;n<=o;n++)r[n]=t(n);return r}function $l(e,t){return{Amount:e,Currency:t}}function Al(e,t){return{c:e,r:t}}function Ae(e,t){return{k:e,ct:t}}function Sl(e,t){let r=L(t);try{let n=null;for(;n==null&&r.MoveNext();){let o=r.Current;e(o)&&(n=g(o))}return n}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}function po(e,t){return{GetEnumerator:()=>{let r=L(e),n=[!0];return new ht(r,null,o=>{if(o.s.MoveNext())return o.c=o.s.Current,!0;{let a=o.s;return A(a,null)||a.Dispose(),o.s=null,n[0]&&(n[0]=!1,o.s=L(t),o.s.MoveNext()?(o.c=o.s.Current,!0):(o.s.Dispose(),o.s=null,!1))}},o=>{let a=o.s;A(a,null)||a.Dispose()})}}}function Sn(e){return{GetEnumerator:()=>L(e())}}function Nl(e,t){return El(Wt(e,t))}function Wt(e,t){return{GetEnumerator:()=>{let r=L(t);return new ht(null,null,n=>r.MoveNext()&&(n.c=e(r.Current),!0),()=>{r.Dispose()})}}}function _l(e){let t=L(e);try{return t.MoveNext()?t.Current:_r()}finally{let r=t;typeof r=="object"&&et(r)&&t.Dispose()}}function Tl(e,t,r){let n=t,o=L(r);try{for(;o.MoveNext();)n=e(n,o.Current);return n}finally{let a=o;typeof a=="object"&&et(a)&&o.Dispose()}}function El(e){return{GetEnumerator:()=>{let t=L(e);function r(n){for(;;){let o=n.s;if(A(o,null))if(t.MoveNext())n.s=L(t.Current),n=n;else return t.Dispose(),!1;else{if(o.MoveNext())return n.c=o.Current,!0;n.Dispose(),n.s=null,n=n}}}return new ht(null,null,r,n=>{let o=n.s;A(o,null)||o.Dispose();let a=t;A(a,null)||a.Dispose()})}}}function Vl(e,t){return Il(e,Ll(t))}function Ml(e,t){let r=L(t);try{for(;r.MoveNext();)e(r.Current)}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}function Il(e,t){return e<0&&as(),{GetEnumerator:()=>{let r=[L(t)];return new ht(0,null,n=>{if(n.s=n.s+1,n.s>e)return!1;{let o=r[0];return A(o,null)?_r():o.MoveNext()?(n.c=o.Current,n.s===e&&(o.Dispose(),r[0]=null),!0):(o.Dispose(),r[0]=null,_r())}},()=>{let n=r[0];A(n,null)||n.Dispose()})}}}function Ll(e){return{GetEnumerator:()=>new ht(0,null,t=>(t.c=e(t.s),t.s=t.s+1,!0),void 0)}}function Dl(e,t){return!Fl(r=>!e(r),t)}function Fl(e,t){let r=L(t);try{let n=!1;for(;!n&&r.MoveNext();)n=e(r.Current);return n}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}function Gl(e){let t=L(e);try{t.MoveNext()||Bl();let r=t.Current;for(;t.MoveNext();){let n=t.Current;Pt(n,r)===1&&(r=n)}return r}finally{let r=t;typeof r=="object"&&et(r)&&t.Dispose()}}function zl(e,t){return{GetEnumerator:()=>{let r=L(t),n=new ct("New_3");return new ht(null,null,o=>{let a,i;if(r.MoveNext()){for(a=r.Current,i=n.SAdd(e(a));!i&&r.MoveNext();)a=r.Current,i=n.SAdd(e(a));return i&&(o.c=a,!0)}else return!1},()=>{r.Dispose()})}}}function Bl(){return W("The input sequence was empty.")}function ho(e,t){return ls(e,-2147483648,2147483647,t)}function Pl(e){return tr((t,r)=>{e.then(t,n=>r(Rl(n)))})}function Rl(e){return e instanceof Error?e:new Lr(e)}var ct=class e extends j{equals;hash;data;count;SAdd(t){return this.add(t)}Contains(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrContains(t,r)}add(t){let r=this.hash(t),n=this.data[r];return n==null?(this.data[r]=[t],this.count=this.count+1,!0):this.arrContains(t,n)?!1:(n.push(t),this.count=this.count+1,!0)}arrContains(t,r){let n=!0,o=0,a=r.length;for(;n&&o<a;)this.equals.apply(null,[r[o],t])?n=!1:o=o+1;return!n}GetEnumerator(){return L(fr(this.data))}ExceptWith(t){let r=L(t);try{for(;r.MoveNext();)this.Remove(r.Current)}finally{let n=r;typeof n=="object"&&et(n)&&r.Dispose()}}get Count(){return this.count}IntersectWith(t){let r=new e("New_4",t,this.equals,this.hash),n=fr(this.data);for(let o=0,a=n.length-1;o<=a;o++){let i=n[o];r.Contains(i)||this.Remove(i)}}Remove(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrRemove(t,r)&&(this.count=this.count-1,!0)}CopyTo(t,r){let n=fr(this.data);for(let o=0,a=n.length-1;o<=a;o++)Or(t,o+r,n[o])}arrRemove(t,r){let n=!0,o=0,a=r.length;for(;n&&o<a;)this.equals.apply(null,[r[o],t])?(r.splice(o,1),n=!1):o=o+1;return!n}constructor(t,r,n,o){t=="New_3"&&(t="New_4",r=[],n=A,o=he);let a;if(t=="New_2"&&(a=r,t="New_4",r=a,n=A,o=he),t=="New_4"){let i=r,l=n,s=o;super(),this.equals=l,this.hash=s,this.data=[],this.count=0;let d=L(i);try{for(;d.MoveNext();)this.add(d.Current)}finally{let u=d;typeof u=="object"&&et(u)&&d.Dispose()}}}},Y=K(e=>class extends j{static{Y=e(this)}static init;id;vars;static initialized;static instances;static GetOrAddHoleFor(r,n,o){let a,i=Y.GetHolesFor(r),l=(a=null,[i.TryGetValue(n,{get:()=>a,set:s=>{a=s}}),a]);if(l[0])return l[1];{let s=o();return i.set_Item(n,s),s}}static GetHolesFor(r){let n,o=(n=null,[Y.initialized.TryGetValue(r,{get:()=>n,set:a=>{n=a}}),n]);if(o[0])return o[1];{let a=new rt("New_5");return Y.initialized.set_Item(r,a),a}}static applyVarHole(r,n){n.ApplyVarHole(r)}InitInstance(r){let n=Y.GetHolesFor(r),o=this.vars;for(let i=0,l=o.length-1;i<=l;i++)(()=>{let s,d=S(o,i),u=d[1],b=d[2],w=d[0];if(n.ContainsKey(w))return null;if(u===0){let f=b==null?null:g(b.$0),y=f==null?"":f.$0,$=T.Create_1(y);s=new wt(w,$)}else if(u===1){let f=b==null?null:g(b.$0),y=f==null?0:f.$0,$=T.Create_1(y);s=new je(w,$)}else if(u===2){let f=b==null?null:g(b.$0),y=f==null?!1:f.$0,$=T.Create_1(y);s=new Ue(w,$)}else if(u===3){let f=b==null?null:g(b.$0),y=f==null?-864e13:f.$0,$=T.Create_1(y);s=new Oe(w,$)}else if(u===4){let f=b==null?null:g(b.$0),y=f==null?[]:f.$0,$=T.Create_1(y);s=new qe(w,$)}else if(u===5){let f=b==null?null:g(b.$0),y=globalThis.document.querySelector("[ws-dom="+w+"]"),$=f==null?y:f.$0,_=g($),C=T.Create_1(_);s=new ve(w,C)}else if(u===6){let f=b==null?null:g(b.$0),y=f==null?[]:f.$0,$=T.Create_1(y);s=new He(w,$)}else s=W("Invalid kind for template Var type: "+String(u));return n.set_Item(w,s)})();let a=new mt({$:0,$0:n},st.Empty);return Y.instances.set_Item(r,a),a}$preinit(r){let n=this.InitInstance(r),o=globalThis.document.querySelectorAll("[ws-var^='"+r+"::']");for(let a=0,i=o.length-1;a<=i;a++){let l=o[a],s=l.getAttribute("ws-var"),d=n.Hole(kt(s,g(r.length+2),null)),u=d.WithName(s);fo().set_Item(u.Name,u),Y.applyVarHole(l,d)}}$init(r){}$postinit(r){go([])}static{Y.initialized=new rt("New_5"),Y.instances=new rt("New_5")}}),je=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(N(String,this.fillWith.View))}AddAttribute(t,r){t(r)(si(this.fillWith))}get AsChoiceView(){return Ut(N(String,this.fillWith.View))}ApplyVarHole(t){ce(No(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Ue=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(N(String,this.fillWith.View))}AddAttribute(t,r){t(r)(ci(this.fillWith))}get AsChoiceView(){return Ut(N(String,this.fillWith.View))}ApplyVarHole(t){ce(_o(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Oe=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(N(t=>new Date(t).toLocaleString(),this.fillWith.View))}AddAttribute(t,r){t(r)(di(this.fillWith))}get AsChoiceView(){return Ut(N(t=>new Date(t).toLocaleString(),this.fillWith.View))}ApplyVarHole(t){ce(To(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},qe=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(N(String,this.fillWith.View))}AddAttribute(t,r){t(r)(ui(this.fillWith))}get AsChoiceView(){return Ut(N(String,this.fillWith.View))}ApplyVarHole(t){ce(Eo(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}},ve=class e extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}ApplyVarHole(t){}constructor(t,r){super(),this.name=t,this.fillWith=r}},He=class e extends H{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return g(N(t=>Xt(",",t),this.fillWith.View))}AddAttribute(t,r){t(r)(pi(this.fillWith))}get AsChoiceView(){return Ut(N(String,this.fillWith.View))}ApplyVarHole(t){ce(Vo(),this.fillWith,t)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function Se(e,t,r,n){return wo(""),ie(e,t,r),Wl(e,t,n)}function ie(e,t,r){Ne(e).ContainsKey(t==null?"":t.$0)||zt(e,t,r(),null)}function go(e){if(Nn()==null){wo(""),zt("",null,globalThis.document.body,null);let t=vo(globalThis.document.body,e),r=globalThis.document.body;(o=>{st.RunInPlace(!0,r,o)})(t);let n=t;return jl(g(n)),n}else return Nn().$0}function wo(e){Ul()||(Ol(!0),ql(globalThis.document.body,"")),fe().set_Item(e,Ne(""))}function Wl(e,t,r){let n,o=(n=null,[Ne(e).TryGetValue(t==null?"":t.$0,{get:()=>n,set:a=>{n=a}}),n]);return o[0]?vo(o[1].cloneNode(!0),r):(console.warn("Local template doesn't exist",t),st.Empty)}function Ne(e){let t,r=(t=null,[fe().TryGetValue(e,{get:()=>t,set:n=>{t=n}}),t]);if(r[0])return r[1];{let n=new rt("New_5");return fe().set_Item(e,n),n}}function zt(e,t,r,n){let o=new ct("New_3");function a(w,f){for(;;)switch(w){case 0:if(f!==null){let c=f.nextSibling;A(f.nodeType,Node.TEXT_NODE)?Ds(f):A(f.nodeType,Node.ELEMENT_NODE)&&l(f),f=c}else return null;break;case 1:let y=kt(f.nodeName,g(3),null).toLowerCase(),$=y.indexOf("."),_=$===-1?[e,y]:[kt(y,null,g($-1)),kt(y,g($+1),null)],C=_[1],v=_[0];if(v!=""&&!fe().ContainsKey(v))return Fn(C);{v==""&&n!=null&&n.$0(C);let c=fe().Item(v);if(c.ContainsKey(C)){let k=c.Item(C).cloneNode(!0),m=new ct("New_3"),p=new rt("New_5"),x=f.attributes;for(let E=0,D=x.length-1;E<=D;E++){let V=x.item(E).name.toLowerCase(),P=x.item(E).nodeValue,J=P==""?V:P.toLowerCase();p.set_Item(V,J),m.SAdd(V)||console.warn("Hole mapped twice",V)}for(let E=0,D=f.childNodes.length-1;E<=D;E++){let V=f.childNodes[E];A(V.nodeType,Node.ELEMENT_NODE)&&(m.SAdd(V.nodeName.toLowerCase())||console.warn("Hole filled twice",C))}let M=f.childNodes.length===1&&A(f.firstChild.nodeType,Node.TEXT_NODE);if(M){let E=Fs(k,f.firstChild.textContent,C),D=(P=>J=>P.SAdd(J))(m);(P=>J=>{J!=null&&P(J.$0)})(P=>{D(P)})(E)}if(Gs(k,m),!M)for(let E=0,D=f.childNodes.length-1;E<=D;E++){let V=f.childNodes[E];A(V.nodeType,Node.ELEMENT_NODE)&&(V.hasAttributes()?zs(k,V):i(k,V))}Bs(k,p),Gn(k,f.parentNode,f),f.parentNode.removeChild(f);return}else return Fn(C)}break}}function i(w,f){let y=f.nodeName.toLowerCase(),$=(C,v)=>{if(y=="title"&&f.hasChildNodes()){let c=pt(f.textContent);for(f.removeChild(f.firstChild);c.hasChildNodes();)f.appendChild(c.firstChild)}return l(f),Gn(f,C,v)};q(w,"[ws-attr-holes]",C=>{let v=vt(C.getAttribute("ws-attr-holes"),[" "],1);for(let c=0,h=v.length-1;c<=h;c++){let k=S(v,c),m=new RegExp("\\${"+y+"}","ig"),p=C.getAttribute(k).replace(m,f.textContent);C.setAttribute(k,p)}});let _=w.querySelector("[ws-hole="+y+"]");if(A(_,null)){let C=w.querySelector("[ws-replace="+y+"]");if(A(C,null)){let v=w.querySelector("slot[name="+y+"]");return w.tagName.toLowerCase()=="template"?($(v.parentNode,v),void v.parentNode.removeChild(v)):null}else{$(C.parentNode,C),C.parentNode.removeChild(C);return}}else{for(;_.hasChildNodes();)_.removeChild(_.lastChild);return _.removeAttribute("ws-hole"),(C=>{let v=C;return c=>$(v,c)})(_)(null)}}function l(w){w.hasAttribute("ws-preserve")||(Sr(w.nodeName.toLowerCase(),"ws-")?d(w):(Ao(w),s(w.firstChild)))}function s(w){return a(0,w)}function d(w){return a(1,w)}function u(w){for(;;){let f=w.querySelector("[ws-template]");if(A(f,null)){let y=w.querySelector("[ws-children-template]");if(A(y,null)){let $=w.querySelectorAll("template[id]");for(let C=1,v=$.length-1;C<=v;C++){let c=$[C];o.Contains(c)||(zt(e,g(c.getAttribute("id")),c,null),o.SAdd(c))}let _=w.querySelectorAll("template[name]");for(let C=1,v=_.length-1;C<=v;C++){let c=_[C];o.Contains(c)||(zt(e,g(c.getAttribute("name")),c,null),o.SAdd(c))}return null}else{let $=y.getAttribute("ws-children-template");y.removeAttribute("ws-children-template"),zt(e,g($),y,null),w=w}}else{let y=f.getAttribute("ws-template");Hl(e,g(y),f)(null),w=w}}}let b=(t==null?"":t.$0).toLowerCase();Ne(e).set_Item(b,r),r.hasChildNodes()&&(u(r),s(r.firstChild))}function Nn(){return Vt.RenderedFullDocTemplate}function vo(e,t){let r,n=Kl(e,po(t,fo().Values)),o=n[1],a=n[0],i=a.Els;return!A(i,null)&&i.length===1&&S(i,0)instanceof Node&&A(S(i,0).nodeType,Node.ELEMENT_NODE)&&(r=S(i,0),!0)?Dr.TreeNode(a,o):st.Mk(lo(a),o)}function jl(e){Vt.RenderedFullDocTemplate=e}function Ul(){return Vt.LocalTemplatesLoaded}function Ol(e){Vt.LocalTemplatesLoaded=e}function ql(e,t){let r=Ne(t),n=new rt("New_5"),o=e.querySelectorAll("[ws-template]");for(let u=0,b=o.length-1;u<=b;u++){let w=o[u],f=w.getAttribute("ws-template").toLowerCase();w.removeAttribute("ws-template"),n.set_Item(f,bo(w))}let a=e.querySelectorAll("[ws-children-template]");for(let u=0,b=a.length-1;u<=b;u++){let w=a[u],f=w.getAttribute("ws-children-template").toLowerCase();w.removeAttribute("ws-children-template"),n.set_Item(f,Yl(w))}let i=e.querySelectorAll("template[id]");for(let u=0,b=i.length-1;u<=b;u++){let w=i[u];n.set_Item(w.getAttribute("id").toLowerCase(),_n(w))}let l=e.querySelectorAll("template[name]");for(let u=0,b=l.length-1;u<=b;u++){let w=l[u];n.set_Item(w.getAttribute("name").toLowerCase(),_n(w))}let s=new ct("New_3");function d(u){if(!r.ContainsKey(u)){let b,w=(b=null,[n.TryGetValue(u,{get:()=>b,set:f=>{b=f}}),b]);w[0]?(s.SAdd(u),n.RemoveKey(u),zt(t,g(u),w[1],g(d))):console.warn(s.Contains(u)?"Encountered loop when instantiating "+u:"Local template does not exist: "+u)}}for(;n.count>0;)d(_l(n.Keys))}function fe(){return Vt.LoadedTemplates}function q(e,t,r){qi(e,t,n=>{n.closest("[ws-preserve]")==null&&r(n)})}function Hl(e,t,r){let n=bo(r);return o=>{zt(e,t,n,o)}}function Kl(e,t){let r,n=[],o=[],a=[],i=[],l=new rt("New_5"),s=L(t);try{for(;s.MoveNext();){let c=s.Current;l.set_Item(c.Name,c)}}finally{let c=s;typeof c=="object"&&et(c)&&s.Dispose()}let d=An(e),u=(c,h)=>{let k=Jr(c,h);o.push(eo(k)),a.push([c,k]);let m=It(k.OnAfterRender);if(m==null)return null;{let p=m.$0;i.push(()=>{p(c)});return}},b=c=>{let h,k=(h=null,[l.TryGetValue(c,{get:()=>h,set:m=>{h=m}}),h]);if(k[0]){let m=k[1];if(m instanceof Zt)return g(m.Value);if(m instanceof xe)return g(st.TextNode(m.Value));{let p=m.ForTextView();return p==null?null:g(st.TextView(p.$0))}}else return null};q(e,"[ws-hole]",c=>{let h=c.getAttribute("ws-hole");for(c.removeAttribute("ws-hole");c.hasChildNodes();)c.removeChild(c.lastChild);let k=b(h);if(k!=null&&k.$==1){let m=k.$0;Tr(c,m.docNode),n.push(Bt.New(wr(c),m.docNode,null,c,Yt(),null)),o.push(m.updates)}}),q(e,"[ws-replace]",c=>{let h=b(c.getAttribute("ws-replace"));if(h!=null&&h.$==1){let k=h.$0,m=c.parentNode,p=globalThis.document.createTextNode("");m.replaceChild(p,c);let x=vs(p,k.docNode);d=An(e);let M=Xr(E=>c===E,d);M==null||Or(d,M.$0,k.docNode),n.push(Bt.New(wr(m),k.docNode,g([x,p]),m,Yt(),null)),o.push(k.updates)}});let w=!1;q(e,"slot",c=>{let h=c.getAttribute("name"),k=h==""||h==null?"default":h.toLowerCase();if(!(w&&k=="default"||!A(e.parentElement,null))){for(;c.hasChildNodes();)c.removeChild(c.lastChild);k=="default"&&(w=!0);let m=b(k);if(m!=null&&m.$==1){let p=m.$0;Tr(c,p.docNode),n.push(Bt.New(wr(c),p.docNode,null,c,Yt(),null)),o.push(p.updates)}}}),q(e,"[ws-attr]",c=>{let h,k=c.getAttribute("ws-attr");c.removeAttribute("ws-attr");let m=(h=null,[l.TryGetValue(k,{get:()=>h,set:p=>{h=p}}),h]);if(m[0]){let p=m[1];p instanceof B?u(c,p.Value):console.warn("Attribute hole filled with non-attribute data",k)}}),q(e,"[ws-on]",c=>{u(c,Q.Concat(Qr(h=>{let k,m=vt(h,[":"],1),p=(k=null,[l.TryGetValue(S(m,1),{get:()=>k,set:x=>{k=x}}),k]);if(p[0]){let x=p[1];return x instanceof Fr?g(ii(S(m,0),x.Value)):x instanceof Fe?g(Q.HandlerImpl(S(m,0),x.Value)):(console.warn("Event hole on"+S(m,0)+" filled with non-event data",S(m,1)),null)}else return null},vt(c.getAttribute("ws-on"),[" "],1)))),c.removeAttribute("ws-on")}),q(e,"[ws-onafterrender]",c=>{let h,k=c.getAttribute("ws-onafterrender"),m=(h=null,[l.TryGetValue(k,{get:()=>h,set:p=>{h=p}}),h]);if(m[0]){let p=m[1];p instanceof Gr||p instanceof Re?(c.removeAttribute("ws-onafterrender"),u(c,$n(p.Value))):console.warn("onafterrender hole filled with non-onafterrender data",k)}}),q(e,"[ws-var]",c=>{let h,k=c.getAttribute("ws-var");c.removeAttribute("ws-var");let m=(h=null,[l.TryGetValue(k,{get:()=>h,set:p=>{h=p}}),h]);m[0]&&m[1].AddAttribute(p=>x=>u(p,x),c)});let f=()=>{Jl("[ws-dom]",c=>{let h,k,m,p=(h=null,[l.TryGetValue(c.getAttribute("ws-dom").toLowerCase(),{get:()=>h,set:x=>{h=x}}),h]);if(p[0]){let x=p[1];if(x instanceof ve){let M=x.Value;c.removeAttribute("ws-dom"),k=c;let E=new MutationObserver((D,V)=>{X(P=>{P.removedNodes.forEach(dn(J=>J[0]===k&&P.addedNodes.length!==1?(M.SetFinal(null),V.disconnect()):null),null)},D)});c.parentElement!==null&&E.observe(c.parentElement,(m={},m.childList=!0,m)),M.Set(g(c)),ze(D=>{if(D!=null&&D.$==1){let V=D.$0;if(k!==V){let P=[V];k.replaceWith.apply(k,P),k=V}}else k.remove(),E.disconnect()},M.View)}}})};q(e,"[ws-attr-holes]",c=>{let h=new RegExp(be(),"g"),k=vt(c.getAttribute("ws-attr-holes"),[" "],1);c.removeAttribute("ws-attr-holes");for(let m=0,p=k.length-1;m<=p;m++)(()=>{let x,M=S(k,m),E=c.getAttribute(M),D=null,V=0,P=[];for(;D=h.exec(E),D!==null;){let U=kt(E,g(V),g(h.lastIndex-S(D,0).length-1));V=h.lastIndex,P.push([U,S(D,1)])}let J=kt(E,g(V),null);h.lastIndex=0;let G=tn((U,Z)=>(ut=>{let Mt=ut[0],Ve=ut[1];return de=>{let Ct,Ot=de[0],nt=de[1],sn=(Ct=null,[l.TryGetValue(Ve,{get:()=>Ct,set:cr=>{Ct=cr}}),Ct]),Me=sn[0]?sn[1].AsChoiceView:ln("");return Me.$==1?[Mt,xt.Cons(Ot==""?Me.$0:N(cr=>cr+Ot,Me.$0),nt)]:[Mt+Me.$0+Ot,nt]}})(U)(Z),P,[J,xt.Empty]);if(G[1].$==1)if(G[1].$1.$==1)if(G[1].$1.$1.$==1)if(G[1].$1.$1.$1.$==0){let U=G[0];x=at(M,On((Z,ut,Mt)=>U+Z+ut+Mt,G[1].$0,G[1].$1.$0,G[1].$1.$1.$0))}else{let U=G[0];x=at(M,N(Z=>U+Xt("",Z),vi(G[1])))}else{let U=G[0];x=at(M,Qe((Z,ut)=>U+Z+ut,G[1].$0,G[1].$1.$0))}else if(G[0]=="")x=at(M,G[1].$0);else{let U=G[0];x=at(M,N(Z=>U+Z,G[1].$0))}else x=Q.Create(M,G[0]);return u(c,x)})()});let y=d,$=i.length==0?g(()=>{f()}):g(c=>{f(),X(h=>{h(c)},i)}),_=!A(d,null)&&d.length===1&&S(d,0)instanceof Node&&S(d,0)instanceof Element&&(r=S(d,0),!0)?g(r):null,C={Els:y,Dirty:!0,Holes:n,Attrs:a,Render:$?$.$0:void 0,El:_?_.$0:void 0};return[cn(C,["Render","El"]),or(ge(),Be,o)]}function fo(){return Vt.GlobalHoles}function bo(e){e.removeAttribute("ws-template");let t=e.getAttribute("ws-replace");if(t!=null){e.removeAttribute("ws-replace");let n=e.parentNode;if(!A(n,null)){let o=globalThis.document.createElement(e.tagName);o.setAttribute("ws-replace",t),n.replaceChild(o,e)}}let r=globalThis.document.createElement("div");return r.appendChild(e),r}function Yl(e){let t=globalThis.document.createElement("div");for(;e.hasChildNodes();)t.appendChild(e.firstChild);return t}function _n(e){let t=globalThis.document.createElement("div"),r=e.content;for(let n=0,o=r.childNodes.length-1;n<=o;n++)t.appendChild(r.childNodes[n].cloneNode(!0));return t}function be(){return Vt.TextHoleRE}function Jl(e,t){Hi(e,r=>{r.closest("[ws-preserve]")==null&&t(r)})}var _e=K(e=>class{static{_e=e(this)}static IsFetchingView;static IsAuthedView;static UserView;static isFetchingVar;static userVar;static API;static{this.API="https://api.websharper.io",$s("https://api.websharper.io"),this.userVar=T.Create_1(null),this.isFetchingVar=T.Create_1(!1),this.UserView=Kt().View,this.IsAuthedView=N(r=>r!=null,Kt().View),this.IsFetchingView=kr().View}});function Jt(e){return e==null||new RegExp("^\\s*$").test(e)}function Zl(e){return e.replace(new RegExp("^\\s+"),"").replace(new RegExp("\\s+$"),"")}function Xt(e,t){return Qt(t).join(e)}function vt(e,t,r){return Xl(e,new RegExp("["+ts(t.join(""))+"]"),r)}function Sr(e,t){return e.substring(0,t.length)==t}function Ql(e,t){return Dl(e,es(t))}function Xl(e,t,r){return r===1?$e(n=>n!=="",Tn(e,t)):Tn(e,t)}function ts(e){return e.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]","g"),"\\$&")}function es(e){return e??""}function Tn(e,t){return e.split(t)}function ar(e){return{$:1,$0:e}}function Te(e){return{$:0,$0:e}}function mo(e){return{$:2,$0:e}}var me=class extends j{AsyncBase(t,r){return z(()=>{let n=Ns(this.Headers),o=Ss(r);return R(Ci(),a=>R(tr((i,l,s)=>{let d=[!0],u=Yn(a,()=>{d[0]&&(d[0]=!1,s(new Ke("New",a)))});return As().Async(this.EndPoint+"/"+t,n,o,b=>{d[0]&&(d[0]=!1,u.Dispose(),i(b))},b=>{d[0]&&(d[0]=!1,u.Dispose(),l(b))})}),i=>O(JSON.parse(i))))})}get EndPoint(){return _s()}get Headers(){return[]}Async(t,r){return this.AsyncBase(t,r)}},Nr=class extends j{push;value;dirty;updates;get NChanged(){return this.updates}NGetExitAnim(t){return vr()}NGetEnterAnim(t){return vr()}NGetChangeAnim(t){return vr()}NSync(t){this.dirty&&(this.push(t)(this.value),this.dirty=!1)}constructor(t,r){super(),this.push=r,this.value=void 0,this.dirty=!1,this.updates=N(n=>{this.value=n,this.dirty=!0},t)}};function ke(e){let t,r=e.s;if(!(r==null||(!(r!=null&&r.$==2||r!=null&&r.$==3)||(t=r.$1,!1)))){e.s=null;for(let n=0,o=I(t)-1;n<=o;n++){let a=S(t,n);typeof a=="object"?(i=>{ke(i)})(a):a()}}}var le=K(e=>class{static{le=e(this)}static GetCT;static Zero;static defCTS;static scheduler;static noneCT;static{this.noneCT=Al(!1,[]),this.scheduler=new Er,this.defCTS=[new Vr],this.Zero=O(),this.GetCT=r=>{r.k(Te(r.ct))}}}),Bt=class e{Attr;Children;Delimiters;El;ElKey;Render;Equals(t){return this.ElKey===t.ElKey}GetHashCode(){return this.ElKey}static New(t,r,n,o,a,i){let l={Attr:t,Children:r,El:o,ElKey:a},s=(qt(l,"Delimiters",n),qt(l,"Render",i),l);return ot(e,s)}};function Et(e){return{$:0,$0:e}}function ir(e,t){return{$:2,$0:e,$1:t}}function jt(e,t){return{$:3,$0:e,$1:t}}var en=K(e=>class{static{en=e(this)}static counter;static{this.counter=0}});function rs(e,t){let r=new rt("New_5"),n=[];for(let o=0,a=I(t)-1;o<=a;o++){let i=t[o],l=e(i);r.ContainsKey(l)?r.Item(l).push(i):(n.push(l),r.DAdd(l,[i]))}return ns(o=>[o,r.Item(o)],n),n}function ns(e,t){for(let r=0,n=t.length-1;r<=n;r++)t[r]=e(t[r])}function os(e,t){let r=!0,n=0,o=I(t);for(;r&&n<o;)A(t[n],e)?r=!1:n=n+1;return!r}function _r(){return W("The input sequence has an insufficient number of elements.")}function as(){return W("The input must be non-negative.")}function L(e){return e instanceof Array?ko(e):A(typeof e,"string")?xo(e):e.GetEnumerator()}function ko(e){return new ht(0,null,t=>{let r=t.s;return r<I(e)&&(t.c=S(e,r),t.s=r+1,!0)},void 0)}function xo(e){return new ht(0,null,t=>{let r=t.s;return r<e.length&&(t.c=e[r],t.s=r+1,!0)},void 0)}function is(e){return e instanceof Array?ko(e):A(typeof e,"string")?xo(e):"GetEnumerator0"in e?e.GetEnumerator0():e.GetEnumerator()}var xe=class e extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}get AsChoiceView(){return ln(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function ls(e,t,r,n){let o=+e,a=o===o-o%1&&o>=t&&o<=r;return a&&n.set(o),a}function ss(){return{Current:null,Dirty:!1}}function cs(e,t){e.Current=t,e.Dirty=!0}function rn(e,t){ye(e.parentNode,t,e)}function ds(e,t,r){return Mo(Io(),ps(e,t,Yr(),r))}function En(e,t,r){return Mr()?z(()=>{let n=Lo(r),o=ws(t,n),a=gs(t,n);return R(Ln(Is(o,hs(t,n))),()=>R(Mn(e,t),()=>R(Ln(a),()=>(t.PreviousNodes=n,O(null)))))}):Mn(e,t)}function Vn(e,t,r){let n=Lo(r);Ce(e,t.Top),t.PreviousNodes=n}function us(e,t){return Mo(Io(),fs(e,Yr(),t))}function ye(e,t,r){for(;;){if(t!=null&&t.$==1)return Ie(e,t.$0.El,r);if(t!=null&&t.$==2){let n=t.$0;n.Dirty=!1,t=n.Current}else{if(t==null)return r;if(t!=null&&t.$==4)return Ie(e,t.$0.Text,r);if(t!=null&&t.$==5)return Ie(e,t.$0,r);if(t!=null&&t.$==6)return tn((n,o)=>(a=>i=>l=>i==null||i.constructor===Object?ye(a,i,l):Ie(a,i,l))(e)(n)(o),t.$0.Els,r);{let n=t.$1;t=t.$0,r=ye(e,n,r)}}}}function ps(e,t,r,n){let o=e.parentNode;rn(t,n);let a=Jr(o,r);return Bt.New(a,n,g([e,t]),o,Yt(),It(a.OnAfterRender))}function Mn(e,t){if(Ir()){let r=n=>{requestAnimationFrame(()=>{Ce(e,t.Top),n()})};return tr((n,o,a)=>r.apply(null,[n,o,a]))}else return Ce(e,t.Top),O(null)}function hs(e,t){return lr(dt(r=>Li(r.Attr),an(Do(t,on(r=>Ii(r.Attr),e.PreviousNodes)))))}function gs(e,t){return lr(dt(r=>Fi(r.Attr),an(Do(e.PreviousNodes,on(r=>Di(r.Attr),t)))))}function ws(e,t){let r=o=>Gi(o.Attr),n=o=>on(r,o);return lr(dt(o=>zi(o.Attr),an(nc(n(e.PreviousNodes),n(t)))))}function Ce(e,t){e||bs(t),yo(t.Children),Co(t)}function Tr(e,t){ye(e,t,null)}function vs(e,t){let r=e.parentNode,n=globalThis.document.createTextNode("");return r.insertBefore(n,e),rn(e,t),n}function fs(e,t,r){Tr(e,r);let n=Jr(e,t);return Bt.New(n,r,null,e,Yt(),It(n.OnAfterRender))}function Ie(e,t,r){return Ki(e,r,t),t}function bs(e){function t(r){function n(o){for(;;)if(o!=null&&o.$==0){let a=o.$1,i=o.$0;if(n(i))return!0;o=a}else if(o!=null&&o.$==2){let a=o.$0;if(a.Dirty)return!0;o=a.Current}else if(o!=null&&o.$==6){let a=o.$0;return a.Dirty||Ar(t,a.Holes)}else return!1}return n(r.Children)}ro(e.El,e.Attr),t(e)&&xs(e)}function yo(e){for(;;){if(e!=null&&e.$==1)return Ce(!1,e.$0);if(e!=null&&e.$==2)e=e.$0.Current;else{if(e==null)return null;if(e!=null&&e.$==5)return null;if(e!=null&&e.$==4){let t=e.$0;return t.Dirty?(t.Text.nodeValue=t.Value,t.Dirty=!1):null}else if(e!=null&&e.$==6){let t=e.$0;return X(r=>{Ce(!1,r)},t.Holes),X(r=>{ro(r[0],r[1])},t.Attrs),Co(t)}else{let t=e.$1,r=e.$0;yo(r),e=t}}}}function Co(e){let t=It(e.Render);t!=null&&t.$==1&&(t.$0(e.El),qt(e,"Render",null))}function ms(){return{Text:globalThis.document.createTextNode(""),Dirty:!1,Value:""}}function ks(e,t){e.Value=t,e.Dirty=!0}function xs(e){let t=e.El;function r(l,s){for(;;){if(l!=null&&l.$==1)return l.$0.El;if(l!=null&&l.$==2){let d=l.$0;if(d.Dirty)return d.Dirty=!1,ye(t,d.Current,s);l=d.Current}else{if(l==null)return s;if(l!=null&&l.$==4)return l.$0.Text;if(l!=null&&l.$==5)return l.$0;if(l!=null&&l.$==6){let d=l.$0;return d.Dirty&&(d.Dirty=!1),tn((u,b)=>u==null||u.constructor===Object?r(u,b):u,d.Els,s)}else{let d=l.$1;l=l.$0,s=r(d,s)}}}}let n=e.El;kc(l=>{Yi(n,l)},mc(xc(e),bc(e.El,It(e.Delimiters))));let o=e.Children,a=It(e.Delimiters),i=a!=null&&a.$==1?a.$0[1]:null;r(o,i)}function ys(){throw new jr("New")}function Cs(){throw new Ur("New_2","An item with the same key has already been added.")}var ht=class extends j{s;c;n;d;e;MoveNext(){let t=this.n(this);return this.e=t?1:2,t}get Current(){return this.e===1?this.c:this.e===0?W("Enumeration has not started. Call MoveNext."):W("Enumeration already finished.")}Dispose(){this.d&&this.d(this)}constructor(t,r,n,o){super(),this.s=t,this.c=r,this.n=n,this.d=o,this.e=0}};function $s(e){sr.EndPoint=e}function As(){return sr.AjaxProvider}function Ss(e){return JSON.stringify(e)}function Ns(e){return Sa(dt(t=>[t[0],t[1]],xl(t=>t[0],e.concat([["content-type","application/json"]]))))}function _s(){return sr.EndPoint}function In(e,t,r,n,o,a,i){let l=new XMLHttpRequest,s=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");l.open("POST",t,e),e==!0&&(l.withCredentials=!0);let d;for(var u in r)l.setRequestHeader(u,r[u]);s&&l.setRequestHeader("x-csrftoken",s);function b(){if(l.status==200)o(l.responseText);else if(i&&l.status==403&&l.responseText=="CSRF")i();else{let w="Response status is not 200: ";a(new Error(w+l.status))}}"onload"in l?l.onload=l.onerror=l.onabort=b:l.onreadystatechange=()=>{l.readyState==4&&b()},l.send(n)}var Er=class extends j{idle;robin;Fork(t){this.robin.push(t),this.idle&&(this.idle=!1,setTimeout(()=>{this.tick()},0))}tick(){let t=Date.now(),r=!0;for(;r;)this.robin.length===0?(this.idle=!0,r=!1):(this.robin.shift()(),Date.now()-t>40&&(setTimeout(()=>{this.tick()},0),r=!1))}constructor(){super(),this.idle=!0,this.robin=[]}},F=K(e=>class{static{F=e(this)}static FloatApplyChecked;static FloatGetChecked;static FloatSetChecked;static FloatApplyUnchecked;static FloatGetUnchecked;static FloatSetUnchecked;static IntApplyChecked;static IntGetChecked;static IntSetChecked;static IntApplyUnchecked;static IntGetUnchecked;static IntSetUnchecked;static FileApplyUnchecked;static FileGetUnchecked;static FileSetUnchecked;static DateTimeApplyUnchecked;static DateTimeGetUnchecked;static DateTimeSetUnchecked;static StringListApply;static StringListGet;static StringListSet;static StringApply;static StringGet;static StringSet;static BoolCheckedApply;static EmptyAttr;static{this.EmptyAttr=null,this.BoolCheckedApply=v=>[c=>{c.addEventListener("change",()=>v.Get()!=c.checked?v.Set(c.checked):null)},c=>h=>h!=null&&h.$==1?void(c.checked=h.$0):null,N(c=>g(c),v.View)],this.StringSet=v=>c=>{v.value=c},this.StringGet=v=>g(v.value);let r=Rs(),n=Ps();this.StringApply=v=>Lt(r,n,v),this.StringListSet=v=>c=>{let h=v.options;for(let k=0,m=h.length-1;k<=m;k++)(()=>{let p=h.item(k);p.selected=os(p.value,c)})()},this.StringListGet=v=>{let c=v.selectedOptions;return g(Qt(Sn(()=>Nl(h=>[c.item(h).value],gn(0,c.length-1)))))};let o=js(),a=Ws();this.StringListApply=v=>Lt(o,a,v),this.DateTimeSetUnchecked=v=>c=>{v.value=new Date(c).toLocaleString()},this.DateTimeGetUnchecked=v=>{let c,h,k=v.value;if(ue(k))return g(-864e13);{c=0;let m=hc(k);return h=[m!=null&&m.$==1&&(c=m.$0,!0),c],h[0]?g(h[1]):null}};let i=Os(),l=Us();this.DateTimeApplyUnchecked=v=>Lt(i,l,v),this.FileSetUnchecked=()=>()=>null,this.FileGetUnchecked=v=>{let c=v.files;return g(Qt(Sn(()=>Wt(h=>c.item(h),gn(0,c.length-1)))))};let s=Ks(),d=Hs();this.FileApplyUnchecked=v=>qs(s,d,v),this.IntSetUnchecked=v=>c=>{v.value=String(c)},this.IntGetUnchecked=v=>{let c=v.value;if(ue(c))return g(0);{let h=+c;return h!==h>>0?null:g(h)}};let u=Js(),b=Ys();this.IntApplyUnchecked=v=>Lt(u,b,v),this.IntSetChecked=v=>c=>{let h=c.Input;return v.value!=h?void(v.value=h):null},this.IntGetChecked=v=>{let c,h,k=v.value;if(ue(k))c=!v.checkValidity||v.checkValidity()?gt.Blank(k):gt.Invalid(k);else{let m=(h=0,[ho(k,{get:()=>h,set:p=>{h=p}}),h]);c=m[0]?gt.Valid(m[1],k):gt.Invalid(k)}return g(c)};let w=Qs(),f=Zs();this.IntApplyChecked=v=>Lt(w,f,v),this.FloatSetUnchecked=v=>c=>{v.value=String(c)},this.FloatGetUnchecked=v=>{let c=v.value;if(ue(c))return g(0);{let h=+c;return isNaN(h)?null:g(h)}};let y=tc(),$=Xs();this.FloatApplyUnchecked=v=>Lt(y,$,v),this.FloatSetChecked=v=>c=>{let h=c.Input;return v.value!=h?void(v.value=h):null},this.FloatGetChecked=v=>{let c,h=v.value;if(ue(h))c=!v.checkValidity||v.checkValidity()?gt.Blank(h):gt.Invalid(h);else{let k=+h;c=isNaN(k)?gt.Invalid(h):gt.Valid(k,h)}return g(c)};let _=rc(),C=ec();this.FloatApplyChecked=v=>Lt(_,C,v)}});function Ts(e,t,r){return()=>n=>{let o;if(typeof n=="object"&&n!=null){let i={};if(typeof t=="string"){let l=n[t];o=bl(s=>!A(s,null)&&s[0]==l,r)}else{let l=[void 0],s;for(var a in t)if((d=>n.hasOwnProperty(d)&&(l[0]=t[d],!0))(a))break;o=l[0]}return i.$=o,X(l=>{let s=l[0],d=l[1],u=l[2],b=l[3];if(s==null){let w=u()(n);d&&delete w[t],i.$0=w;return}else return b===0?void(i[s]=u()(n[d])):b===1?void(i[s]=n.hasOwnProperty(d)?g(u()(n[d])):null):W("Invalid field option kind")},S(r,o)[1]),e===void 0?i:e(i)}else return n}}function ft(){return()=>e=>e}function Es(e){return Vs(e)}function Vs(e){return()=>t=>dt(e(),t)}function Ms(e,t){return()=>r=>{let n={};return X(o=>{let a=o[0],i=o[1],l=o[2];return l===0?r.hasOwnProperty(a)?void(n[a]=i()(r[a])):W("Missing mandatory field: "+a):l===1?void(n[a]=r.hasOwnProperty(a)?g(i()(r[a])):null):l===2?r.hasOwnProperty(a)?void(n[a]=i()(r[a])):null:l===3?r[a]===void 0?void(n[a]=i()(r[a])):null:W("Invalid field option kind")},t),e===void 0?n:e(n)}}var Ke=class extends Error{ct;constructor(t,r,n,o){let a;if(t=="New"&&(a=r,t="New_1",r="The operation was canceled.",n=null,o=a),t=="New_1"){let i=r,l=n,s=o;super(i),this.inner=l,this.ct=s}}},Vr=class extends j{init;c;pending;r;constructor(){super(),this.c=!1,this.pending=null,this.r=[],this.init=1}};function $o(e,t,r,n){let o={DynElem:e,DynFlags:t,DynNodes:r};return qt(o,"OnAfterRender",n),o}function Mr(){return oc()}function Ln(e){return z(()=>R(Ls(()=>{},ac(e)),()=>(ic(e),O(null))))}function Is(e,t){return nn(Bo(e.$0,t.$0))}function Ls(e,t){let r=t.Duration;if(r===0)return it();{let n=o=>{function a(i){return l=>{let s=l-i;return t.Compute(s),e(),s<=r?void requestAnimationFrame(d=>{a(i)(d)}):o()}}requestAnimationFrame(i=>{a(i)(i)})};return tr((o,a,i)=>n.apply(null,[o,a,i]))}}function nn(e){return{$:0,$0:e}}function lr(e){return nn(gc(Wt(sc,e)))}function vr(){return nn(Ro())}function Ir(){return Go.BatchUpdatesEnabled}function Dn(e){let t=[0];function r(){return z(()=>R(e,()=>{let n=t[0];return A(n,1)?(t[0]=0,it()):A(n,2)?(t[0]=1,r()):it()}))}return()=>{let n=t[0];A(n,0)?(t[0]=1,yi(r(),null)):A(n,1)&&(t[0]=2)}}var Lr=class extends Error{reason;constructor(t){super("Promise rejected"),this.reason=t}},se=K(e=>class{static{se=e(this)}static defaultWrap;static wrapMap;static rhtml;static rtagName;static rxhtmlTag;static{this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>","gi"),this.rtagName=new RegExp("<([\\w:]+)"),this.rhtml=new RegExp("<|&#?\\w+;");let r=[1,"<table>","</table>"],n=Object.fromEntries([["option",[1,"<select multiple='multiple'>","</select>"]],["legend",[1,"<fieldset>","</fieldset>"]],["area",[1,"<map>","</map>"]],["param",[1,"<object>","</object>"]],["thead",r],["tbody",r],["tfoot",r],["tr",[2,"<table><tbody>","</tbody></table>"]],["col",[2,"<table><colgroup>","</colgoup></table>"]],["td",[3,"<table><tbody><tr>","</tr></tbody></table>"]]]);this.wrapMap=n,this.defaultWrap=[0,"",""]}});function Ds(e){let t=null,r=0,n=e.textContent,o=new RegExp(be(),"g");for(;t=o.exec(n),t!==null;){e.parentNode.insertBefore(globalThis.document.createTextNode(kt(n,g(r),g(o.lastIndex-S(t,0).length-1))),e),r=o.lastIndex;let a=globalThis.document.createElement("span");a.setAttribute("ws-replace",S(t,1).toLowerCase()),e.parentNode.insertBefore(a,e)}o.lastIndex=0,e.textContent=kt(n,g(r),null)}function Fn(e){console.warn("Instantiating non-loaded template",e)}function Fs(e,t,r){let n=e.querySelector("[ws-replace]");return A(n,null)?(console.warn("Filling non-existent text hole",r),null):(n.parentNode.replaceChild(globalThis.document.createTextNode(t),n),g(n.getAttribute("ws-replace")))}function Gs(e,t){let r=n=>{q(e,"["+n+"]",o=>{t.Contains(o.getAttribute(n))||o.removeAttribute(n)})};r("ws-attr"),r("ws-onafterrender"),r("ws-var"),q(e,"[ws-hole]",n=>{if(!t.Contains(n.getAttribute("ws-hole")))for(n.removeAttribute("ws-hole");n.hasChildNodes();)n.removeChild(n.lastChild)}),q(e,"[ws-replace]",n=>{t.Contains(n.getAttribute("ws-replace"))||n.parentNode.removeChild(n)}),q(e,"[ws-on]",n=>{n.setAttribute("ws-on",Xt(" ",$e(o=>t.Contains(S(vt(o,[":"],1),1)),vt(n.getAttribute("ws-on"),[" "],1))))}),q(e,"[ws-attr-holes]",n=>{let o=vt(n.getAttribute("ws-attr-holes"),[" "],1);for(let a=0,i=o.length-1;a<=i;a++){let l=S(o,a),s=new RegExp(be(),"g"),d=n.getAttribute(l).replace(s,(u,b)=>t.Contains(b)?u:"");n.setAttribute(l,d)}})}function zs(e,t){Ao(t);let r=t.nodeName.toLowerCase(),n=e.querySelector("[ws-attr="+r+"]");if(A(n,null))console.warn("Filling non-existent attr hole",r);else{n.removeAttribute("ws-attr");for(let o=0,a=t.attributes.length-1;o<=a;o++){let i=t.attributes.item(o);i.name=="class"&&n.hasAttribute("class")?n.setAttribute("class",n.getAttribute("class")+" "+i.nodeValue):n.setAttribute(i.name,i.nodeValue)}}}function Bs(e,t){let r=n=>{q(e,"["+n+"]",o=>{let a,i=(a=null,[t.TryGetValue(o.getAttribute(n).toLowerCase(),{get:()=>a,set:l=>{a=l}}),a]);i[0]&&o.setAttribute(n,i[1])})};r("ws-hole"),r("ws-replace"),r("ws-attr"),r("ws-onafterrender"),r("ws-var"),q(e,"[ws-on]",n=>{n.setAttribute("ws-on",Xt(" ",dt(o=>{let a,i=vt(o,[":"],1),l=(a=null,[t.TryGetValue(S(i,1),{get:()=>a,set:s=>{a=s}}),a]);return l[0]?S(i,0)+":"+l[1]:o},vt(n.getAttribute("ws-on"),[" "],1))))}),q(e,"[ws-attr-holes]",n=>{let o=vt(n.getAttribute("ws-attr-holes"),[" "],1);for(let a=0,i=o.length-1;a<=i;a++)(()=>{let l=S(o,a);return n.setAttribute(l,Tl((s,d)=>{let u=Dt(d);return s.replace(new RegExp("\\${"+u[0]+"}","ig"),"${"+u[1]+"}")},n.getAttribute(l),t))})()})}function Gn(e,t,r){for(;;)if(e.hasChildNodes())r=t.insertBefore(e.lastChild,r);else return null}function Ao(e){let t=e.attributes,r=[],n=[],o=[];for(let i=0,l=t.length-1;i<=l;i++){let s=t.item(i);if(Sr(s.nodeName,"ws-on")&&s.nodeName!="ws-onafterrender"&&s.nodeName!="ws-on")r.push(s.nodeName),n.push(kt(s.nodeName,g(5),null)+":"+s.nodeValue.toLowerCase());else if(!Sr(s.nodeName,"ws-")&&new RegExp(be()).test(s.nodeValue)){let d=new RegExp(be(),"g"),u=s.nodeValue.replace(d,(b,w)=>"${"+w.toLowerCase()+"}");s.nodeValue=u,o.push(s.nodeName)}}n.length!=0&&e.setAttribute("ws-on",Xt(" ",n)),o.length!=0&&e.setAttribute("ws-attr-holes",Xt(" ",o));let a=i=>{let l=e.getAttribute(i);l==null||e.setAttribute(i,l.toLowerCase())};a("ws-hole"),a("ws-replace"),a("ws-attr"),a("ws-onafterrender"),a("ws-var"),X(i=>{e.removeAttribute(i)},r)}function kt(e,t,r){if(t==null)if(r!=null&&r.$==1){let n=r.$0;return n<0?"":e.slice(0,n+1)}else return"";else{if(r==null)return e.slice(t.$0);{let n=r.$0,o=t.$0;return n<0?"":e.slice(o,n+1)}}}var Vt=K(e=>class{static{Vt=e(this)}static RenderedFullDocTemplate;static TextHoleRE;static GlobalHoles;static LocalTemplatesLoaded;static LoadedTemplates;static{this.LoadedTemplates=new rt("New_5"),this.LocalTemplatesLoaded=!1,this.GlobalHoles=new rt("New_5"),this.TextHoleRE="\\${([^}]+)}",this.RenderedFullDocTemplate=null}}),Dr=class e extends st{docNode_1;updates_1;elt;rvUpdates;static TreeNode(t,r){let n=zr.Create(r),o=lo(t),a=dt(s=>eo(s[1]),t.Attrs),i=or(ge(),Be,a),l=Be(i,n.v);return new e(o,l,S(t.Els,0),n)}constructor(t,r,n,o){super(t,r),this.docNode_1=t,this.updates_1=r,this.elt=n,this.rvUpdates=o}},sr=K(e=>class{static{sr=e(this)}static AjaxProvider;static EndPoint;static{this.EndPoint=globalThis.location.origin,this.AjaxProvider=new Pr}});function Lt(e,t,r){let n;return n=null,[o=>{let a=()=>{r.UpdateMaybe(i=>{let l;return n=e(o),n!=null&&n.$==1&&!A(n.$0,i)&&(l=[n,n.$0],!0)?l[0]:null})};o.addEventListener("change",a),o.addEventListener("input",a),o.addEventListener("keypress",a)},o=>{let a=t(o);return i=>i==null?null:a(i.$0)},N(o=>{let a;return n!=null&&n.$==1&&A(n.$0,o)&&(a=n.$0,!0)?null:g(o)},r.View)]}function Ps(){return F.StringSet}function Rs(){return F.StringGet}function Ws(){return F.StringListSet}function js(){return F.StringListGet}function Us(){return F.DateTimeSetUnchecked}function Os(){return F.DateTimeGetUnchecked}function qs(e,t,r){let n;return n=null,[o=>{o.addEventListener("change",()=>{r.UpdateMaybe(a=>{let i;return n=e(o),n!=null&&n.$==1&&n.$0!==a&&(i=[n,n.$0],!0)?i[0]:null})})},o=>{let a=t(o);return i=>i==null?null:a(i.$0)},N(o=>{let a;return n!=null&&n.$==1&&A(n.$0,o)&&(a=n.$0,!0)?null:g(o)},r.View)]}function Hs(){return F.FileSetUnchecked}function Ks(){return F.FileGetUnchecked}function Ys(){return F.IntSetUnchecked}function Js(){return F.IntGetUnchecked}function Zs(){return F.IntSetChecked}function Qs(){return F.IntGetChecked}function Xs(){return F.FloatSetUnchecked}function tc(){return F.FloatGetUnchecked}function ec(){return F.FloatSetChecked}function rc(){return F.FloatGetChecked}function So(){return F.StringApply}function No(){return F.FloatApplyUnchecked}function _o(){return F.BoolCheckedApply}function To(){return F.DateTimeApplyUnchecked}function Eo(){return F.FileApplyUnchecked}function Vo(){return F.StringListApply}function ue(e){return Ql(pc,e)}var gt=class e{get Input(){return this.$==1?this.$0:this.$==2?this.$0:this.$1}static Blank(t){return ot(e,{$:2,$0:t})}static Invalid(t){return ot(e,{$:1,$0:t})}static Valid(t,r){return ot(e,{$:0,$0:t,$1:r})}$;$0;$1};function Mo(e,t){return{PreviousNodes:e,Top:t}}function Io(){return Ee(new ct("New_3"))}function Lo(e){let t=[];function r(a,i){for(;;)switch(a){case 0:if(i!=null&&i.$==0){let l=i.$1,s=i.$0;r(0,s),i=l}else if(i!=null&&i.$==1)i=i.$0,a=1;else if(i!=null&&i.$==2)i=i.$0.Current;else if(i!=null&&i.$==6){let l=i.$0.Holes;return(s=>d=>{X(s,d)})(o)(l)}else return null;break;case 1:t.push(i),i=i.Children,a=0;break}}function n(a){return r(0,a)}function o(a){return r(1,a)}return n(e),Ee(new ct("New_2",t))}function Ee(e){return{$:0,$0:e}}function on(e,t){return Ee(wc(e,t.$0))}function Do(e,t){return Ee(vc(e.$0,t.$0))}function an(e){return te(e.$0)}function nc(e,t){return Ee(fc(e.$0,t.$0))}function oc(){return zo.UseAnimations}function ac(e){return lc(Qr(t=>t.$==1?g(t.$0):null,Po(e.$0)))}function ic(e){X(t=>{t.$==0&&t.$0()},Po(e.$0))}function lc(e){let t=nr(e),r=I(t);if(r===0)return cc();if(r===1)return S(t,0);{let n=Gl(Wt(a=>a.Duration,t)),o=dt(a=>dc(n,a),t);return Fo(n,a=>{X(i=>{i.Compute(a)},o)})}}function sc(e){return e.$0}function cc(e){return Fo(0,()=>e)}function Fo(e,t){return{Compute:t,Duration:e}}function dc(e,t){let r=t.Compute,n=t.Duration,o=yc(()=>t.Compute(t.Duration));return{Compute:a=>a>=n?o.f():r(a),Duration:e}}var Go=K(e=>class{static{Go=e(this)}static BatchUpdatesEnabled;static{this.BatchUpdatesEnabled=!0}}),Fr=class e extends H{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Gr=class e extends H{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function ln(e){return{$:0,$0:e}}function Ut(e){return{$:1,$0:e}}var zr=class e{c;s;v;static Create(t){let r;return r=null,r=e.New(t,null,()=>{let n;return n=r.s,n===null&&(n=cl(r.c()),r.s=n,ao(n,()=>{r.s=null})),n}),r}static New(t,r,n){return ot(e,{c:t,s:r,v:n})}},Br=class extends j{d;GetEnumerator(){return L(Wt(t=>t.V,this.d))}constructor(t){super(),this.d=t}},Pr=class extends j{Async(t,r,n,o,a){In(!0,t,r,n,o,a,()=>{In(!0,t,r,n,o,a,void 0)})}};function uc(e){e.splice(0,I(e))}function pc(e){return e.match(new RegExp("\\s"))!==null}function hc(e){let t=Date.parse(e);return isNaN(t)?null:g(t)}var zo=K(e=>class{static{zo=e(this)}static UseAnimations;static CubicInOut;static{this.CubicInOut=Wr.Custom(r=>{let n=r*r;return 3*n-2*(n*r)}),this.UseAnimations=!0}});function Bo(e,t){return e.$==0?t:t.$==0?e:{$:2,$0:e,$1:t}}function Po(e){let t=[];function r(n){for(;;){if(n.$==1)return t.push(n.$0);if(n.$==2){let o=n.$1,a=n.$0;r(a),n=o}else return n.$==3?X(o=>{t.push(o)},n.$0):null}}return r(e),t.slice(0)}function gc(e){let t=nr(e);return or(Ro(),Bo,t)}function Ro(){return Wo.Empty}function fr(e){let t=[],r;for(var n in e)t.push.apply(t,e[n]);return t}var Rr=class extends j{d;GetEnumerator(){return L(Wt(t=>t.K,this.d))}constructor(t){super(),this.d=t}},Wr=class e extends j{transformTime;static Custom(t){return new e(t)}constructor(t){super(),this.transformTime=t}};function wc(e,t){return new ct("New_2",$e(e,te(t)))}function vc(e,t){let r=new ct("New_2",te(t));return r.ExceptWith(te(e)),r}function te(e){let t=yl(e.Count,void 0);return e.CopyTo(t,0),t}function fc(e,t){let r=new ct("New_2",te(e));return r.IntersectWith(te(t)),r}var jr=class extends Error{constructor(t,r){if(t=="New"&&(t="New_1",r="The given key was not present in the dictionary."),t=="New_1"){let n=r;super(n)}}},Ur=class extends Error{constructor(t,r){if(t=="New_2"){let n=r;super(n)}}};function bc(e,t){let r;if(t!=null&&t.$==1){let n=t.$0[1],o=t.$0[0],a=[];for(r=o.nextSibling;r!==n;)a.push(r),r=r.nextSibling;return Ye(a)}else{let n=e.childNodes.length,o=e.childNodes,a=Cl(n,i=>o[i]);return Ye(a)}}function mc(e,t){let r=e.$0;return Ye($e(n=>uo(o=>n!==o,r),t.$0))}function kc(e,t){X(e,t.$0)}function xc(e){let t=[];function r(n){for(;;)if(n!=null&&n.$==2)n=n.$0.Current;else{if(n!=null&&n.$==1)return t.push(n.$0.El);if(n==null)return null;if(n!=null&&n.$==5)return t.push(n.$0);if(n!=null&&n.$==4)return t.push(n.$0.Text);if(n!=null&&n.$==6){let o=n.$0.Els;return(a=>i=>{X(a,i)})(a=>{a==null||a.constructor===Object?r(a):t.push(a)})(o)}else{let o=n.$1,a=n.$0;r(a),n=o}}}return r(e.Children),Ye(nr(t))}function Ye(e){return{$:0,$0:e}}function ce(e,t,r){let n=e(t);n[0](r),ze(n[1](r),n[2])}function yc(e){return Ac(!1,e,Cc)}function Cc(){let e=this.v();return this.c=!0,this.v=e,this.f=$c,e}function $c(){return this.v}var Wo=K(e=>class{static{Wo=e(this)}static Empty;static{this.Empty={$:0}}});function Ac(e,t,r){return{c:e,v:t,f:r}}return Ko(Sc);})();
