var wsbundle=(()=>{var de=Object.defineProperty;var jn=Object.getOwnPropertyDescriptor;var Un=Object.getOwnPropertyNames;var On=Object.prototype.hasOwnProperty;var qn=(r,t)=>{for(var e in t)de(r,e,{get:t[e],enumerable:!0})},Hn=(r,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Un(t))!On.call(r,n)&&n!==e&&de(r,n,{get:()=>t[n],enumerable:!(o=jn(t,n))||o.enumerable});return r};var Kn=r=>Hn(de({},"__esModule",{value:!0}),r);var Sc={};qn(Sc,{Layout:()=>Jn,Runtime:()=>ho,Support:()=>Zn});function nt(r,t){return Object.assign(Object.create(r.prototype),t)}var Yn=Symbol("force");function K(r){var t;function e(){return t||(t=r(n=>t=n)),t}return new Proxy(function(){},{get(n,a){return a==Yn&&e(),e()[a]},set(n,a,i){return e()[a]=i,!0},construct(n,a,i){return Reflect.construct(e(),a,i)}})}function so(r,t){for(var e=0;e<t.length;e++){var o=t[e];r[o]===void 0&&delete r[o]}return r}function It(r){return r===void 0?null:{$:1,$0:r}}function qt(r,t,e){e?r[t]=e.$0:delete r[t]}function co(r){return function(...t){return r(t)}}function uo(r){return Object.defineProperty(r,"resizable",{enumerable:!1,writable:!1,configurable:!1,value:!0}),r}var po=globalThis.WebSharperRuntime||{ScriptBasePath:"./",ScriptSkipAssemblyDir:!1};globalThis.WebSharperRuntime=po;var ho=po;document.addEventListener("DOMContentLoaded",()=>{let r=document.querySelectorAll(".section-link"),t=document.querySelectorAll(".section"),e={root:null,threshold:1,rootMargin:"0px"};function o(a){a.classList.add("active-link")}let n=new IntersectionObserver(function(a){a.forEach(i=>{i.isIntersecting&&r.forEach(l=>{let s=l.getAttribute("data-step"),d=i.target.getAttribute("id");s===d?o(l):l.classList.remove("active-link")})})},e);t.forEach(a=>{n.observe(a)})});document.addEventListener("DOMContentLoaded",()=>{let r=document.getElementById("track"),t=document.getElementById("mini-inner"),e=document.getElementById("mini-prev"),o=document.getElementById("mini-next");if(!r||!t||!e||!o)return;let n=Array.from(t.children);if(n.length===0)return;let a=n[0].cloneNode(!0),i=n[n.length-1].cloneNode(!0);t.insertBefore(i,n[0]),t.appendChild(a);let l=1,s=!1,d=null,u=!1,b=N=>{t.style.transition=N?"transform 0.7s ease-out":"none",t.style.transform=`translateX(-${l*100}%)`},w=()=>{u||(u=!0,l+=1,b(!0))},f=()=>{u||(u=!0,l-=1,b(!0))};t.addEventListener("transitionend",()=>{let N=t.children.length,C=N-2;l===N-1?(l=1,b(!1)):l===0&&(l=C,b(!1)),requestAnimationFrame(()=>{u=!1})}),o.addEventListener("click",w),e.addEventListener("click",f);let y=()=>{$(),d=setInterval(()=>{s||w()},5e3)},$=()=>{d&&clearInterval(d)};r.addEventListener("mouseenter",()=>{s=!0}),r.addEventListener("mouseleave",()=>{s=!1}),b(!1),y()});function rt(r){return"Dispose"in r}function Jn(){ta();let r=mo(),t=bo(),e=fo(),o=vo(),n=mo(),a=bo(),i=fo(),l=vo(),s=wa(),d=ga(),u=wo(),b=wo(),w=ha(),f=pa(),y=new St("New_1"),$=(y.h.push(tt(y.k,"togglemenu",()=>y.i,()=>{Qn()})),y),N=($.h.push(tt($.k,"toggletheme",()=>$.i,()=>{ra()})),$),C=(N.h.push(tt(N.k,"onkeydown",()=>N.i,ot=>{la(ot)})),N),v=(C.h.push(tt(C.k,"onstoppropagation",()=>C.i,ot=>{sa(ot)})),C),c=(v.h.push(tt(v.k,"closeonbackgroundclick",()=>v.i,ot=>{ca(ot)})),v),h=(c.h.push(tt(c.k,"accountbtnclick",()=>c.i,ot=>{da(ot)})),c),x=(h.h.push(tt(h.k,"accountbtnkeydown",()=>h.i,()=>{})),h),m=(x.h.push(tt(x.k,"login",()=>x.i,()=>{ba()})),x),p=(m.h.push(tt(m.k,"logout",()=>m.i,ot=>{ua(ot)})),m),k=(p.h.push(new B("dropdownattr",f)),p),M=(k.h.push(new B("accountbtnaria",w)),k),E=(M.h.push(new B("avatarattr",b)),M),D=(E.h.push(new B("avatarattrhamburger",u)),E),V=(D.h.push(new B("iconattr",d)),D),P=(V.h.push(new B("skeletonattr",s)),V),J=(P.h.push(new At("accountheadertext",ia())),P),G=(J.h.push(new B("headerattrd",l)),J),U=(G.h.push(new B("btnmanageattrd",i)),G),Z=(U.h.push(new B("btnloginattrd",a)),U),ut=(Z.h.push(new B("btnlogoutattrd",n)),Z),Mt=(ut.h.push(new B("headerattr",o)),ut),Vr=(Mt.h.push(new B("btnmanageattr",e)),Mt),dr=(Vr.h.push(new B("btnloginattr",t)),Vr),Ct=(dr.h.push(new B("btnlogoutattr",r)),dr),Ot=Ht(Ct.k,Ct.h,[]);return Ct.i=new mt(Ot[1],hn(Ot[0])),va(),st.Empty}function Zn(){return Aa()}function Qn(){let r=ue("navmenu"),t=ue("openIcon"),e=ue("closeIcon"),o=globalThis.document.body;r.classList.toggle("h-screen"),t.classList.toggle("hidden-open-icon"),e.classList.toggle("visible-close-icon"),o.classList.toggle("overflow-hidden")}function Xn(r){let t=[],e;for(var o in r)t.push(r[o]);return t}function ta(){zo();let r=globalThis.localStorage.getItem("color-theme");r=="dark"||r==null&&ea()?be(!0):be(!1)}function ra(){oa(Bo()=="dark"?"light":"dark")}function zo(){let r=Bo(),t=globalThis.document.querySelectorAll(".themed-iframe");for(let e=0,o=na(t.length)-1;e<=o;e++){let n=t[e],a=n.getAttribute("data-src");if(a!=null){let i=new URL(a,globalThis.location.href);i.searchParams.set("theme",r),n.setAttribute("src",String(i))}}}function ea(){return globalThis.matchMedia("(prefers-color-scheme: dark)").matches}function be(r){r?me().classList.add("dark"):me().classList.remove("dark")}function oa(r){be(r=="dark"),globalThis.localStorage.setItem("color-theme",r),zo()}function Bo(){return me().classList.contains("dark")?"dark":"light"}function me(){return globalThis.document.documentElement}function S(r,t){return Po(r,t),r[t]}function I(r){return r.dims===2?r.length*r.length:r.length}function Po(r,t){(t<0||t>=r.length)&&W("Index was outside the bounds of the array.")}function Oe(r,t,e){Po(r,t),r[t]=e}function na(r){let t=aa(r);return t>2147483647?t-4294967296:t}function W(r){throw new Error(r)}function aa(r){return(r<0?Math.ceil(r):Math.floor(r))>>>0}function Dt(r){return[r.K,r.V]}function go(r,t){let e=1+t-r;return e<=0?[]:xl(e,o=>o+r)}var j=class{Equals(t){return this===t}GetHashCode(){return-1}},St=class extends j{i;k;h;s;constructor(t){if(t=="New_1"){let e;super(),this.i=null,this.k=(e=Va(),String(e)),this.h=uo([]),qt(this,"s",null)}}};function ia(){return yt.AccountHeaderText}function la(r){r.Event.key=="Escape"&&_t().Set(!1)}function sa(r){r.Event.stopPropagation()}function ca(){_t().Get()&&_t().Set(!1)}function da(){_t().Set(!_t().Get())}function ua(){Xr(z(()=>(_t().Set(!1),R(xa(!0),()=>O(null)))),null)}function pa(){return Nt("hidden",_(r=>!r,_t().View))}function ha(){return at("aria-expanded",_(r=>r?"true":"false",_t().View))}function wo(){return Q.Concat([at("src",Ro()),Nt("hidden",_(r=>!r,Wo())),Nt("opacity-0",pr().View)])}function ga(){return Q.Concat([Nt("hidden",Wo()),Nt("opacity-0",pr().View)])}function wa(){return Nt("opacity-0 hidden",_(r=>!r,pr().View))}function vo(){return Jr(Zr())}function fo(){return Jr(Zr())}function bo(){return Jr(_(r=>!r,Zr()))}function mo(){return Jr(Zr())}function va(){Xr(z(()=>(pr().Set(!0),R(ka(),()=>R(fi(500),()=>(pr().Set(!1),it()))))),null)}function _t(){return yt.isOpen}function Ro(){return yt.avatarSrcV}function Wo(){return yt.hasAvatarV}function pr(){return yt.isLoading}function Jr(r){return Q.Concat([Nt("hidden",_(t=>!t,r)),Nt("flex",r)])}function Zr(){return yt.isAuthedV}function xo(){return yt.userV}function fa(){return yt.displayNameV}function tt(r,t,e,o){return new Dr(t,"",n=>a=>{let i=e();return i.SetAnchorRoot(n),o({Vars:i,Anchors:i,Target:n,Event:a})})}function Ht(r,t,e){let o=new et("New_5"),n=new ct("New_3"),a=L(t);try{for(;a.MoveNext();){let i=a.Current,l=i.Name;n.SAdd(l),o.set_Item(l,i)}}finally{let i=a;typeof i=="object"&&rt(i)&&a.Dispose()}return[cn(t,Qe(i=>{let l=i[0],s=i[1],d=i[2];if(n.Contains(l))return null;{let u=s===0?Y.GetOrAddHoleFor(r,l,()=>{let b=d==null?null:g(d.$0),w=b==null?"":b.$0,f=T.Create_1(w);return new wt(l,f)}):s===1?Y.GetOrAddHoleFor(r,l,()=>{let b=d==null?null:g(d.$0),w=b==null?0:b.$0,f=T.Create_1(w);return new jr(l,f)}):s===2?Y.GetOrAddHoleFor(r,l,()=>{let b=d==null?null:g(d.$0),w=b==null?!1:b.$0,f=T.Create_1(w);return new Ur(l,f)}):s===3?Y.GetOrAddHoleFor(r,l,()=>{let b=d==null?null:g(d.$0),w=b==null?-864e13:b.$0,f=T.Create_1(w);return new Or(l,f)}):s===4?Y.GetOrAddHoleFor(r,l,()=>new qr(l,T.Create_1([]))):s===5?Y.GetOrAddHoleFor(r,l,()=>new vr(l,T.Create_1(g(globalThis.document.querySelector("[ws-dom="+l+"]"))))):s===6?Y.GetOrAddHoleFor(r,l,()=>{let b=d==null?null:g(d.$0),w=b==null?[]:b.$0,f=T.Create_1(w);return new Hr(l,f)}):W("Invalid kind for template Var type: "+String(s));return o.set_Item(l,u),g(u)}},e)),{$:0,$0:o}]}function ba(){globalThis.location.href=ma()}function ma(){return $a(globalThis.location.pathname+globalThis.location.search)}function xa(r){return z(()=>mi(wr(z(()=>R(Ci(),()=>O(null))),t=>(console.error("AuthClient.Logout RPC failed",t),it())),z(()=>(Kt().Set(null),r?wr(z(()=>(globalThis.location.reload(),it())),()=>it()):it()))))}function ka(){return z(()=>{let r=Kt().Get();return r!=null&&r.$==1?O(g(r.$0)):(xe().Set(!0),He(z(()=>wr(z(()=>R($i(),t=>(Kt().Set(t),O(t)))),t=>(console.error("AuthClient.FetchMe RPC failed",t),Kt().Set(null),O(null)))),()=>{xe().Set(!1)}))})}function ya(){return _r.UserView}function Ca(){return _r.IsAuthedView}function $a(r){return"https://api.websharper.io/auth/github/start?returnUrl="+encodeURIComponent(r)}function Kt(){return _r.userVar}function xe(){return _r.isFetchingVar}var st=class r extends j{docNode;updates;static get Empty(){return r.Mk(null,gr())}static Mk(t,e){return new r(t,e)}static RunBefore(t,e){let o=globalThis.document.createTextNode("");t.parentNode.insertBefore(o,t),r.RunBetween(o,t,e)}static EmbedView(t){let e=ms();return r.Mk(il(e),_(()=>{},Wa(o=>(xs(e,o.docNode),o.updates),t)))}static RunBetween(t,e,o){eo(e,o.docNode);let n=ks(t,e,o.docNode);Gr(Me()||Ie()?Do(Vo(!1,n,o.docNode)):()=>{Mo(!1,n,o.docNode)},o.updates)}static RunInPlace(t,e,o){let n=ys(e,o.docNode);Gr(Me()||Ie()?Do(Vo(t,n,o.docNode)):()=>{Mo(t,n,o.docNode)},o.updates)}static TextNode(t){return r.Mk(ll(globalThis.document.createTextNode(t)),gr())}static TextView(t){let e=Es();return r.Mk(sl(e),_(o=>{Vs(e,o)},t))}ReplaceInDom(t){let e=globalThis.document.createTextNode("");t.parentNode.replaceChild(e,t),r.RunBefore(e,this)}constructor(t,e){super(),this.docNode=t,this.updates=e}};function Aa(){let r=Ka(),t=Ha(),e=$o("freelancer"),o=$o("pro"),n=new St("New_1"),a=(n.h.push(new Wr("onafterrender","",()=>{Xr(ei(),null)})),n),i=(a.h.push(new Zt("proplan",o)),a),l=(i.h.push(new Zt("freelancerplan",e)),i),s=(l.h.push(new B("billmonthattr",t)),l),d=(s.h.push(new B("billyearattr",r)),s),u=(d.h.push(tt(d.k,"onbillmonth",()=>d.i,p=>{Ya(p)})),d),b=(u.h.push(tt(u.k,"onbillyear",()=>u.i,p=>{Ja(p)})),u),w=(b.h.push(new wt("contactsubjectvar",T.Lens($t(),p=>p.subject,(p,k)=>Ft(k,p.message,p.email,p.name,p.country)))),b),f=(w.h.push(new wt("contactmessagevar",T.Lens($t(),p=>p.message,(p,k)=>Ft(p.subject,k,p.email,p.name,p.country)))),w),y=(f.h.push(new wt("contactemailvar",T.Lens($t(),p=>p.email,(p,k)=>Ft(p.subject,p.message,k,p.name,p.country)))),f),$=(y.h.push(new wt("contactnamevar",T.Lens($t(),p=>p.name,(p,k)=>Ft(p.subject,p.message,p.email,k,p.country)))),y),N=($.h.push(new wt("contactcountryvar",T.Lens($t(),p=>p.country,(p,k)=>Ft(p.subject,p.message,p.email,p.name,k)))),$),C=(N.h.push(new B("contactsendbuttonattr",qa())),N),v=(C.h.push(new At("contactsendbuttontext",Oa())),C),c=(v.h.push(tt(v.k,"oncontactsendclick",()=>v.i,p=>{Za(p)})),v),h=Ht(c.k,c.h,[["contactsubjectvar",0,g("WebSharper support")],["contactmessagevar",0,null],["contactemailvar",0,null],["contactnamevar",0,null],["contactcountryvar",0,g("United States")]]),x=new mt(h[1],di(h[0]));return(c.i=x,x).Doc}var mt=class extends j{doc;allVars;anchorRoot;SetAnchorRoot(t){this.anchorRoot=t}get Doc(){return this.doc}Hole(t){return this.allVars.Item(t)}constructor(t,e){super(),this.doc=e,this.allVars=t.$==0?t.$0:W("Should not happen"),this.anchorRoot=null}},H=class extends j{ForTextView(){return console.warn("Content hole filled with attribute data",this.Name),null}AddAttribute(t,e){console.warn("Var hole filled with non-Var data",this.Name)}get AsChoiceView(){return console.warn("Attribute value hole filled with non-text data",this.Name),io("")}ApplyVarHole(t){console.warn("Not a var hole: ",this.Name)}},B=class r extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new r(t,this.fillWith)}constructor(t,e){super(),this.name=t,this.fillWith=e}},At=class r extends H{name;fillWith;get Name(){return this.name}WithName(t){return new r(t,this.fillWith)}ForTextView(){return g(this.fillWith)}get AsChoiceView(){return Ut(this.fillWith)}constructor(t,e){super(),this.name=t,this.fillWith=e}},yt=K(r=>class{static{yt=r(this)}static AccountHeaderText;static displayNameV;static hasAvatarV;static avatarSrcV;static isLoading;static isAuthedV;static userV;static isOpen;static{this.isOpen=T.Create_1(!1),this.userV=ya(),this.isAuthedV=Ca(),this.isLoading=T.Create_1(!0),this.avatarSrcV=_(e=>e!=null&&e.$==1?Jt(e.$0.avatarUrl)?"":e.$0.avatarUrl:"",xo()),this.hasAvatarV=_(e=>e!="",Ro()),this.displayNameV=_(e=>e==null||Jt(e.$0.login)?"Account":e.$0.login,xo()),this.AccountHeaderText=fa()}});function A(r,t){if(r===t)return!0;{let n=typeof r;if(n=="object"){if(r==null||t===null||t===void 0||!A(typeof t,"object"))return!1;if("Equals"in r)return r.Equals(t);if("Equals"in t)return!1;if(r instanceof Array&&t instanceof Array)return ko(r,t);if(r instanceof Date&&t instanceof Date)return Sa(r,t);{let a=r,i=t,l=[!0],s;for(var e in a)if((d=>(l[0]=!a.hasOwnProperty(d)||i.hasOwnProperty(d)&&A(a[d],i[d]),!l[0]))(e))break;if(l[0]){let d;for(var o in i)if((u=>(l[0]=!i.hasOwnProperty(u)||a.hasOwnProperty(u),!l[0]))(o))break}return l[0]}}else return n=="function"&&("$Func"in r?r.$Func===t.$Func&&r.$Target===t.$Target:"$Invokes"in r&&"$Invokes"in t&&ko(r.$Invokes,t.$Invokes))}}function hr(r){let t=typeof r;return t=="function"?0:t=="boolean"?r?1:0:t=="number"?r:t=="string"?Lr(r):t=="object"?r==null?0:r instanceof Array?_a(r):Na(r):t=="bigint"?Lr(String(r)):t=="symbol"?Lr(r.description):0}function Pt(r,t){if(r===t)return 0;{let n=typeof r;switch(n=="boolean"||n=="number"||n=="bigint"||n=="string"?1:n=="object"?2:n=="function"?3:n=="symbol"?4:0){case 0:return typeof t>"u"?0:-1;case 1:return r<t?-1:1;case 2:if(r===null)return-1;if(t===null)return 1;if("CompareTo"in r)return r.CompareTo(t);if("CompareTo0"in r)return r.CompareTo0(t);if(r instanceof Array&&t instanceof Array)return Ta(r,t);if(r instanceof Date&&t instanceof Date)return Ea(r,t);{let a=r,i=t,l=[0],s;for(var e in a)if((d=>a.hasOwnProperty(d)?i.hasOwnProperty(d)?(l[0]=Pt(a[d],i[d]),l[0]!==0):(l[0]=1,!0):!1)(e))break;if(l[0]===0){let d;for(var o in i)if((u=>i.hasOwnProperty(u)?!a.hasOwnProperty(u)&&(l[0]=-1,!0):!1)(o))break}return l[0]}break;case 3:return W("Cannot compare function values.");case 4:return W("Cannot compare symbol values.")}}}function ko(r,t){let e,o;if(I(r)===I(t)){for(e=!0,o=0;e&&o<I(r);)A(S(r,o),S(t,o))||(e=!1),o=o+1;return e}else return!1}function Sa(r,t){return r.getTime()===t.getTime()}function Lr(r){let t;if(r===null)return 0;t=5381;for(let e=0,o=r.length-1;e<=o;e++)t=qe(t,r[e].charCodeAt());return t}function _a(r){let t=-34948909;for(let e=0,o=I(r)-1;e<=o;e++)t=qe(t,hr(S(r,e)));return t}function Na(r){if("GetHashCode"in r)return r.GetHashCode();{let e=qe,o=[0],n;for(var t in r)if((a=>(o[0]=e(e(o[0],Lr(a)),hr(r[a])),!1))(t))break;return o[0]}}function Ta(r,t){let e,o;if(I(r)<I(t))return-1;if(I(r)>I(t))return 1;for(e=0,o=0;e===0&&o<I(r);)e=Pt(S(r,o),S(t,o)),o=o+1;return e}function Ea(r,t){return Pt(r.getTime(),t.getTime())}function qe(r,t){return(r<<5)+r+t}function Va(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]","g"),r=>{let t=Math.random()*16|0;return(r=="x"?t:t&3|8).toString(16)})}var Dr=class r extends H{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new r(t,this.key,this.fillWith)}constructor(t,e,o){super(),this.name=t,this.key=e,this.fillWith=o}};function Ma(r){let t={},e=L(r);try{for(;e.MoveNext();){let o=e.Current;t[o[0]]=o[1]}}finally{let o=e;typeof o=="object"&&rt(o)&&e.Dispose()}return t}function ue(r){return globalThis.document.getElementById(r)}function yo(r){return"\u20AC"+String(r)}var Fr=class extends j{};function Nt(r,t){return re(t,e=>o=>o?Ii(e,r):Li(e,r))}function at(r,t){return re(t,e=>o=>e.setAttribute(r,o))}function Ia(r,t){return re(t,e=>o=>o?e.setAttribute(r,""):e.removeAttribute(r))}function La(r,t){return Q.A3(e=>{e.addEventListener(r,o=>t(e)(o),!1)})}function Co(r){return Q.A4(r)}function Da(r){return rr(Sn(),r)}function Fa(r){return rr(_n(),r)}function Ga(r){return rr(Nn(),r)}function za(r){return rr(Tn(),r)}function Ba(r){return rr(En(),r)}function Pa(r){return rr(Vn(),r)}function rr(r,t){let e=r(t);return Jo(Q.A3(e[0]),Ra(e[1],e[2]))}function Ra(r,t){return re(t,r)}function _(r,t){return er(()=>or(r,t()))}function gr(r){let t={s:Et(r)};return()=>t}function er(r){let t={c:null,o:r};return()=>{let e=t.c;if(e===null){e=t.o(),t.c=e;let o=e.s;return o!=null&&o.$==0?t.o=null:rn(e,()=>{t.c=null}),e}else return e}}function Qr(r,t,e){return er(()=>ee(r,t(),e()))}function jo(r,t,e,o){return er(()=>qi(r,t(),e(),o()))}function Wa(r,t){return ja(_(r,t))}function Gr(r,t){function e(){Xi(t(),r,()=>{Tt().Fork(e)})}Tt().Fork(e)}function ja(r){return er(()=>tl(r()))}function Ua(r){return er(()=>rl(Wt(t=>t(),r)))}function zr(r,t){return er(()=>el(r(),t()))}var Q=class r{static Concat(t){let e=oe(t);return ne(Ke(),(o,n)=>Jo(o,n),e)}static A1(t){return nt(r,{$:1,$0:t})}static A2(t,e){return nt(r,{$:2,$0:t,$1:e})}static HandlerImpl(t,e){return r.A3(o=>{o.addEventListener(t,n=>e(o)(n),!1)})}static Create(t,e){return r.A3(o=>{o.setAttribute(t,e)})}static A4(t){return nt(r,{$:4,$0:t})}static A3(t){return nt(r,{$:3,$0:t})}$;$0;$1};function Oa(){return Ze.ContactSendButtonText}function qa(){return Ze.ContactSendButtonAttr}function Ha(){let r=_(t=>t.$==1?"false":"true",bt().View);return Q.Concat([at("data-active",r),at("aria-pressed",r)])}function Ka(){let r=_(t=>t.$==1?"true":"false",bt().View);return Q.Concat([at("data-active",r),at("aria-pressed",r)])}function Ya(){bt().Set(gl)}function Ja(){bt().Set(sn)}function Za(r){r.Event.preventDefault();let t=$t().Get();Oo(t)?Xr(z(()=>(Br().Set(!0),He(z(()=>R(ai(t),e=>e?(alert("Message sent successfully!"),Qa(),it()):(alert("Failed to send message. Please try again later."),it()))),()=>{Br().Set(!1)}))),null):alert("Please fill in all required fields.")}function Qa(){$t().Set(Ft("WebSharper support","","","","United States"))}var T=K(r=>class extends j{static{T=r(this)}static Lens(e,o,n){let a=cl(),i=_(o,e.View);return new class extends Fr{constructor(){super()}Get(){return o(e.Get())}Set(l){return e.Update(s=>n(s,l))}SetFinal(l){return this.Set(l)}Update(l){return e.Update(s=>n(s,l(o(s))))}UpdateMaybe(l){return e.UpdateMaybe(s=>{let d=l(o(s));return d==null?null:g(n(s,d.$0))})}get View(){return i}get Id(){return a}}}static Create_1(e){return new Ae(!1,{s:ie(e,[])},e)}});function $t(){return Rt.ContactFormVar}function ke(){return Rt.IsLoadingVar}function Uo(){return Rt.catalogVar}function bt(){return Rt.intervalVar}function Oo(r){return!Jt(r.message)&&!Jt(r.email)&&!Jt(r.name)&&ri(r.email)}function Br(){return Rt.IsSendingVar}function Xa(){return Rt.CanSendView}function pe(r){return r.$==1?"year":"month"}function ti(r){let o=Pt(999,r)===-1?999:r;return Pt(1,o)===1?1:o}function ri(r){if(r==null)return!1;{let t=Hl(r);return t.indexOf("@")!=-1&&t.indexOf(".")!=-1}}function Ft(r,t,e,o,n){return{subject:r,message:t,email:e,name:o,country:n}}function ei(){return z(()=>(ke().Set(!0),He(z(()=>R(oi(),r=>(r==null||ni(r.$0),it()))),()=>{ke().Set(!1)})))}function oi(){return z(()=>{let r=ii();return r==null?R(li(),t=>{let e;return t!=null&&t.$==1&&I(t.$0)>0&&(e=t.$0,!0)?(si(e),O(g(e))):O(null)}):O(g(r.$0))})}function ni(r){Uo().Set(an(dl(El(t=>{let e=t.YearPrice;return e!=null&&e.$==1?e.$0.Amount:0},dt(t=>{let e=t[1],o=S(e,0),n=l=>{let s=Tl(d=>d.interval==l,e);if(s==null)return null;{let d=s.$0,u=Xl(d.unitAmountCents/100,d.currency.toUpperCase());return g(u)}},a=o.description,i=a==null?"":a.$0;return hl(t[0],o.name,i,o.isPerSeat,o.maxSeats,n("month"),n("year"))},gs(t=>t.code.toLowerCase(),r))))))}function ai(r){return z(()=>{let t=new FormData;return t.append("subject",r.subject),t.append("message",r.message),t.append("email",r.email),t.append("name",r.name),t.append("country",r.country),wr(z(()=>{let e;return R(ts(globalThis.fetch("https://api.intellifactory.com/api/contact",(e={},e.method="POST",e.body=t,e))),o=>O(o.ok))}),()=>O(!1))})}function ii(){try{let r=globalThis.sessionStorage.getItem("planprices");return r==null||Jt(r)?null:g(JSON.parse(r))}catch{return null}}function li(){return z(()=>wr(z(()=>R(Ai(),r=>O(g(r)))),()=>O(null)))}function si(r){try{let t=JSON.stringify(r);globalThis.sessionStorage.setItem("planprices",t)}catch{}}function $o(r){return st.EmbedView(Qr((t,e)=>{if(t){let o=new St("New_1"),n=Ht(o.k,o.h,[]),a=new mt(n[1],ui(n[0]));return(o.i=a,a).Doc}else{let o=wl(n=>n.Id==r,e.Plans);return o==null?st.Empty:ci(o.$0)}},ke().View,Uo().View))}function ci(r){let t,e=T.Create_1(1),o=_(m=>m.$==1?r.YearPrice:r.MonthPrice,bt().View),n=_(m=>m==null?"N/A":yo(m.$0.Amount),o),a=_(m=>(r.IsPerSeat?" / seat":"")+" / "+pe(m),bt().View),i=jo((m,p,k)=>p==null?"-":yo(p.$0.Amount*k),bt().View,o,e.View),l=_(m=>"Total ("+pe(m)+"ly)",bt().View),s=r.MaxSeats;if(s==null||s.$0>1){let m=T.Lens(e,String,(J,G)=>{let U,Z=(U=0,[mn(G,{get:()=>U,set:ut=>{U=ut}}),U]);return Z[0]?Z[1]:J}),p=new St("New_1"),k=(p.h.push(new wt("seatcount",m)),p),M=(k.h.push(tt(k.k,"onseatminus",()=>k.i,()=>{e.Get()>1&&e.Set(e.Get()-1)})),k),E=(M.h.push(tt(M.k,"onseatplus",()=>M.i,()=>{e.Set(e.Get()+1)})),M),D=Ht(E.k,E.h,[["seatcount",0,null]]),V=new mt(D[1],gi(D[0]));t=(E.i=V,V).Doc}else{let m=new St("New_1"),p=Ht(m.k,m.h,[]),k=new mt(p[1],wi(p[0]));t=(m.i=k,k).Doc}let d=at("href",Qr((m,p)=>"./checkout?plan="+String(r.Id)+"&interval="+String(pe(m))+"&seats="+String(ti(p)),bt().View,e.View)),u=new St("New_1"),b=(u.h.push(new kr("name",r.Name)),u),w=(b.h.push(new kr("description",r.Description)),b),f=(w.h.push(new At("priceamount",n)),w),y=(f.h.push(new At("pricelabel",a)),f),$=(y.h.push(new Zt("seatselector",t)),y),N=($.h.push(new At("totallabel",l)),$),C=(N.h.push(new At("totalamount",i)),N),v=(C.h.push(new B("checkoutattr",d)),C),c=Ht(v.k,v.h,[]),h=new mt(c[1],hi(c[0]));return(v.i=h,h).Doc}function g(r){return{$:1,$0:r}}var he;var ge;function di(r){return r?Ar("support",g("content"),()=>pt(`\r
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
    `),r):ir("support",g("content"),()=>pt(`\r
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
    `))}function ui(r){return r?Ar("support",g("skeletoncard"),()=>pt(`<div>\r
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
                </div>`),r):ir("support",g("skeletoncard"),()=>pt(`<div>\r
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
                </div>`))}function pi(){return he||(he=ds(void 0,"$",[null,[1,[["$0","Value",ft(),0]]]])())}function hi(r){return r?Ar("support",g("plancard"),()=>pt(`<div>\r
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
                </div>`),r):ir("support",g("plancard"),()=>pt(`<div>\r
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
                </div>`))}function gi(r){return r?Ar("support",g("seatwidget"),()=>pt(`<div class="custom-number-input h-10 w-24">\r
                    <div class="flex flex-row h-10 w-full rounded-lg relative">\r
                        <button ws-onclick="OnSeatMinus" class="dark:bg-gray-900 bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none">\r
                            <span class="m-auto text-2xl font-thin">\u2212</span>\r
                        </button>\r
                        <input type="text" ws-var="SeatCount" class="border border-gray-600 dark:border-white/20 text-gray-950 dark:text-white outline-none focus:outline-none text-center w-full font-semibold text-md md:text-basecursor-default flex items-center outline-none" readonly="">\r
                        <button ws-onclick="OnSeatPlus" class="dark:bg-gray-900 bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer">\r
                            <span class="m-auto text-2xl font-thin">+</span>\r
                        </button>\r
                    </div>\r
                </div>`),r):ir("support",g("seatwidget"),()=>pt(`<div class="custom-number-input h-10 w-24">\r
                    <div class="flex flex-row h-10 w-full rounded-lg relative">\r
                        <button ws-onclick="OnSeatMinus" class="dark:bg-gray-900 bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none">\r
                            <span class="m-auto text-2xl font-thin">\u2212</span>\r
                        </button>\r
                        <input type="text" ws-var="SeatCount" class="border border-gray-600 dark:border-white/20 text-gray-950 dark:text-white outline-none focus:outline-none text-center w-full font-semibold text-md md:text-basecursor-default flex items-center outline-none" readonly="">\r
                        <button ws-onclick="OnSeatPlus" class="dark:bg-gray-900 bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer">\r
                            <span class="m-auto text-2xl font-thin">+</span>\r
                        </button>\r
                    </div>\r
                </div>`))}function wi(r){return r?Ar("support",g("staticseatbadge"),()=>pt(`<div>\r
                    <div class="rounded-md border border-gray-300 px-3 h-10 flex items-center text-gray-800 dark:border-white/20 dark:text-white bg-gray-50 dark:bg-white/5">\r
                        solo\r
                    </div>\r
                </div>`),r):ir("support",g("staticseatbadge"),()=>pt(`<div>\r
                    <div class="rounded-md border border-gray-300 px-3 h-10 flex items-center text-gray-800 dark:border-white/20 dark:text-white bg-gray-50 dark:bg-white/5">\r
                        solo\r
                    </div>\r
                </div>`))}function vi(){return ge||(ge=hs(void 0,[["code",ft(),0],["name",ft(),0],["description",ft(),1],["isPerSeat",ft(),0],["maxSeats",ft(),1],["interval",ft(),0],["currency",ft(),0],["unitAmountCents",ft(),0]])())}function z(r){return t=>{try{r()(t)}catch(e){t.k(ae(e))}}}function R(r,t){return bi(e=>{r(Nr(o=>{if(o.$==0){let n=o.$0;Tt().Fork(()=>{try{t(n)(e)}catch(a){e.k(ae(a))}})}else Tt().Fork(()=>{e.k(o)})},e.ct))})}function O(r){return t=>{t.k(Tr(r))}}function Xr(r,t){let e=qo()[0],o=t==null?e:t.$0;o.c||r(Nr(n=>{n.$==1&&Ho(n.$0)},o))}function fi(r){return t=>{let e,o;e=void 0,o=void 0,e=setTimeout(()=>{o.Dispose(),Tt().Fork(()=>{t.k(Tr(null))})},r),o=Ko(t.ct,()=>{clearTimeout(e),Tt().Fork(()=>{Yo(t)})})}}function it(){return lr.Zero}function bi(r){return t=>{t.ct.c?Yo(t):r(t)}}function mi(r,t){return R(r,()=>t)}function wr(r,t){return e=>{r(Nr(o=>{if(o.$==0)e.k(Tr(o.$0));else if(o.$==1){let n=o.$0;try{t(n)(e)}catch{e.k(o)}}else e.k(o)},e.ct))}}function qo(){return lr.defCTS}function Ho(r){console.log("WebSharper: Uncaught asynchronous exception",r)}function He(r,t){return e=>{r(Nr(o=>{try{t(),e.k(o)}catch(n){e.k(ae(n))}},e.ct))}}function Ko(r,t){if(r===xi())return{Dispose(){return null}};{let e=r.r.push(t)-1;return{Dispose(){return Oe(r.r,e,()=>{})}}}}function Yo(r){r.k(bn(new Kr("New",r.ct)))}function Tt(){return lr.scheduler}function xi(){return lr.noneCT}function te(r){return t=>{let e=[!1],o=n=>{e[0]?W("A continuation provided by Async.FromContinuations was invoked multiple times"):(e[0]=!0,Tt().Fork(n))};r(n=>{o(()=>{t.k(Tr(n))})},n=>{o(()=>{t.k(ae(n))})},n=>{o(()=>{t.k(bn(n))})})}}function ki(r,t){let e=qo()[0],o=t==null?e:t.$0;Tt().Fork(()=>{o.c||r(Nr(n=>{n.$==1&&Ho(n.$0)},o))})}function yi(){return lr.GetCT}function Ci(){return new mr().Async("IRemotingContract/Logout",[])}function $i(){return R(new mr().Async("IRemotingContract/Me",[]),r=>O(pi()(r)))}function Ai(){return R(new mr().Async("IRemotingContract/GetPlanPrices",[]),r=>O(us(vi)()(r)))}function re(r,t){return Q.A1(new _e(r,t))}function Jo(r,t){if(r===null)return t;if(t===null)return r;{let e=Q.A2(r,t);return Si(e,ye(r)|ye(t)),e}}function Ke(){return F.EmptyAttr}function Si(r,t){r.flags=t}function ye(r){return r!==null&&r.hasOwnProperty("flags")?r.flags:0}function Ye(r,t){let e=[],o=[];function n(l){for(;;)if(l!==null){if(l!=null&&l.$==1)return e.push(l.$0);if(l!=null&&l.$==2){let s=l.$1,d=l.$0;n(d),l=s}else return l!=null&&l.$==3?l.$0(r):l!=null&&l.$==4?o.push(l.$0):null}else return null}n(t);let a=e.slice(0);return yn(r,ye(t),a,o.length===0?null:g(l=>{kl(s=>{s(l)},o)}))}function Zo(r){return al(t=>t.NChanged,gr(),zr,r.DynNodes)}function we(r){return yn(r,0,[],null)}function _i(r){return(r.DynFlags&2)===2}function Ni(r){return Je(r,(t,e)=>t.NGetExitAnim(e))}function Ti(r){return(r.DynFlags&1)===1}function Ei(r){return Je(r,(t,e)=>t.NGetEnterAnim(e))}function Vi(r){return(r.DynFlags&4)===4}function Mi(r){return Je(r,(t,e)=>t.NGetChangeAnim(e))}function Je(r,t){return le(dt(e=>t(e,r.DynElem),r.DynNodes))}function Qo(r,t){X(e=>{e.NSync(r)},t.DynNodes)}function Ii(r,t){let e=Xo(r);e==""?Ce(r,t):tn(t).test(e)||Ce(r,e+" "+t)}function Li(r,t){let e=tn(t),o=Xo(r).replace(e,(n,a,i)=>a==""||i==""?"":" ");Ce(r,o)}function Xo(r){return r instanceof SVGElement?r.getAttribute("class"):r.className}function Ce(r,t){r instanceof SVGElement?r.setAttribute("class",t):r.className=t}function tn(r){return new RegExp("(\\s+|^)"+r+"(?:\\s+"+r+")*(\\s+|$)","g")}function pt(r){let t=globalThis.document.createElement("div");if(Di().test(r)){let i=function(l,s){for(;;){if(s===0)return l;{let d=s;l=l.lastChild,s=d-1}}},e=Bi().exec(r),o=A(e,null)?"":S(e,1).toLowerCase(),n=Fi()[o],a=n||Gi();return t.innerHTML=a[1]+r.replace(zi(),"<$1></$2>")+a[2],(l=>{let s=l;return d=>i(s,d)})(t)(a[0])}else return t.appendChild(globalThis.document.createTextNode(r)),t}function Di(){return sr.rhtml}function Fi(){return sr.wrapMap}function Gi(){return sr.defaultWrap}function zi(){return sr.rxhtmlTag}function Bi(){return sr.rtagName}function Pi(r,t,e){let o=r.querySelectorAll(t);for(let n=0,a=o.length-1;n<=a;n++)e(o[n])}function Ao(r){let t=[];for(let e=0,o=r.childNodes.length-1;e<=o;e++)t.push(r.childNodes[e]);return t}function Ri(r,t){let e=globalThis.document.querySelectorAll(r);for(let o=0,n=e.length-1;o<=n;o++)t(e[o])}function Wi(r,t,e){let o;if(e.parentNode===r){let n=e.nextSibling,a=A(n,null)?null:n;o=t===a}else o=!1;o||r.insertBefore(e,t)}function ji(r,t){t.parentNode===r&&r.removeChild(t)}function or(r,t){let e=t.s;if(e!=null&&e.$==0)return{s:Et(r(e.$0))};{let o={s:jt([],[])};return lt(t,n=>{en(o,t,r(n))},o),o}}function rn(r,t){let e=r.s;e==null?t():e!=null&&e.$==2||e!=null&&e.$==3?(e.$0,e.$1.push(t)):e.$0}function lt(r,t,e){let o=r.s;if(o==null)xr(e);else if(o!=null&&o.$==2){let n=o.$0;Pr(o.$1,e),t(n)}else if(o!=null&&o.$==3){let n=o.$1;o.$0.push(t),Pr(n,e)}else t(o.$0)}function en(r,t,e){let o=t.s;o!=null&&o.$==0?nr(r,e):ar(r,e)}function ee(r,t,e){let o=t.s,n=e.s;if(o!=null&&o.$==0)return n!=null&&n.$==0?{s:Et(r(o.$0,n.$0))}:Ui(r,o.$0,e);if(n!=null&&n.$==0)return Oi(r,n.$0,t);{let a={s:jt([],[])},i=()=>{let l=a.s;if(!(l!=null&&l.$==0||l!=null&&l.$==2)){let s=Gt(t),d=Gt(e);s!=null&&s.$==1&&d!=null&&d.$==1&&(s.$0[1]&&d.$0[1]?nr(a,r(s.$0[0],d.$0[0])):ar(a,r(s.$0[0],d.$0[0])))}};return lt(t,i,a),lt(e,i,a),a}}function Pr(r,t){if(r.push(t),r.length%20===0){let e=r.slice(0);uc(r);for(let o=0,n=I(e)-1;o<=n;o++){let a=S(e,o);typeof a=="object"?(i=>{i.s&&r.push(i)})(a):(i=>{r.push(i)})(a)}}}function nr(r,t){let e=r.s;if(e!=null&&e.$==3){let o=e.$0;r.s=Et(t);for(let n=0,a=I(o)-1;n<=a;n++)S(o,n)(t)}}function ar(r,t){let e=r.s;if(e!=null&&e.$==3){let o=e.$1,n=e.$0;r.s=ie(t,o);for(let a=0,i=I(n)-1;a<=i;a++)S(n,a)(t)}}function Ui(r,t,e){return or(o=>r(t,o),e)}function Oi(r,t,e){return or(o=>r(o,t),e)}function Gt(r){let t=r.s;return t!=null&&t.$==0?g([t.$0,!0]):t!=null&&t.$==2?g([t.$0,!1]):null}function qi(r,t,e,o){let n=t.s,a=e.s,i=o.s;if(n!=null&&n.$==0)return a!=null&&a.$==0?i!=null&&i.$==0?{s:Et(r(n.$0,a.$0,i.$0))}:Hi(r,n.$0,a.$0,o):i!=null&&i.$==0?Ki(r,n.$0,i.$0,e):Yi(r,n.$0,e,o);if(a!=null&&a.$==0)return i!=null&&i.$==0?Ji(r,a.$0,i.$0,t):Zi(r,a.$0,t,o);if(i!=null&&i.$==0)return Qi(r,i.$0,t,e);{let l={s:jt([],[])},s=()=>{let d=l.s;if(!(d!=null&&d.$==0||d!=null&&d.$==2)){let u=Gt(t),b=Gt(e),w=Gt(o);u!=null&&u.$==1&&b!=null&&b.$==1&&w!=null&&w.$==1&&(u.$0[1]&&b.$0[1]&&w.$0[1]?nr(l,r(u.$0[0],b.$0[0],w.$0[0])):ar(l,r(u.$0[0],b.$0[0],w.$0[0])))}};return lt(t,s,l),lt(e,s,l),lt(o,s,l),l}}function Hi(r,t,e,o){return or(n=>r(t,e,n),o)}function Ki(r,t,e,o){return or(n=>r(t,n,e),o)}function Yi(r,t,e,o){return ee((n,a)=>r(t,n,a),e,o)}function Ji(r,t,e,o){return or(n=>r(n,t,e),o)}function Zi(r,t,e,o){return ee((n,a)=>r(n,t,a),e,o)}function Qi(r,t,e,o){return ee((n,a)=>r(n,a,t),e,o)}function Xi(r,t,e){let o=r.s;if(o==null)e();else if(o!=null&&o.$==2){let n=o.$0;o.$1.push(e),t(n)}else if(o!=null&&o.$==3){let n=o.$1;o.$0.push(t),n.push(e)}else t(o.$0)}function tl(r){let t={s:jt([],[])};return lt(r,e=>{let o=e();lt(o,n=>{let a,i=o.s;if(i!=null&&i.$==0){let l=r.s;a=l!=null&&l.$==0}else a=!1;a?nr(t,n):ar(t,n)},t)},t),t}function rl(r){let t=Qt(r);if(t.length==0)return{s:Et([])};{let e={s:jt([],[])},o=[I(t)-1],n=()=>{if(o[0]===0){let a=dt(i=>{let l=i.s;return l!=null&&l.$==0||l!=null&&l.$==2?l.$0:W("value not found by View.Sequence")},t);pn(i=>{let l=i.s;return l!=null&&l.$==0},t)?nr(e,a):ar(e,a)}else o[0]=o[0]-1};return X(a=>{lt(a,n,e)},t),e}}function el(r,t){let e=r.s,o=t.s;if(e!=null&&e.$==0)return o!=null&&o.$==0?{s:Et(null)}:t;if(o!=null&&o.$==0)return r;{let n={s:jt([],[])},a=()=>{let i=n.s;if(!(i!=null&&i.$==0||i!=null&&i.$==2)){let l=Gt(r),s=Gt(t);l!=null&&l.$==1&&s!=null&&s.$==1&&(l.$0[1]&&s.$0[1]?nr(n,null):ar(n,null))}};return lt(r,a,n),lt(t,a,n),n}}function ol(r){let t=r.s;if(t==null)return r;if(t!=null&&t.$==2){let e={s:ie(t.$0,[])};return nl(r,e),e}else if(t!=null&&t.$==3){let e={s:jt([],[])};return lt(r,o=>{en(e,r,o)},e),e}else return r}function nl(r,t){let e=r.s;e==null?xr(t):e!=null&&e.$==2||e!=null&&e.$==3?(e.$0,Pr(e.$1,t)):e.$0}function oe(r){if(r instanceof Array)return r;if(r instanceof kt)return dn(r);if(r===null)return[];{let t=[],e=L(r);try{for(;e.MoveNext();)t.push(e.Current);return t}finally{let o=e;typeof o=="object"&&rt(o)&&e.Dispose()}}}function ne(r,t,e){let o=I(e);function n(a){return i=>{let l;switch(i<=0?0:i===1&&a>=0&&a<o?1:(l=i,2)){case 0:return r;case 1:return S(e,a);case 2:let s=i/2>>0;return t(n(a)(s),n(a+s)(i-s))}}}return n(0)(o)}function al(r,t,e,o){let n=I(o);function a(i){return l=>{let s;switch(l<=0?0:l===1&&i>=0&&i<n?1:(s=l,2)){case 0:return t;case 1:return r(S(o,i));case 2:let d=l/2>>0;return e(a(i)(d),a(i+d)(l-d))}}}return a(0)(n)}function il(r){return{$:2,$0:r}}function on(r){return{$:6,$0:r}}function ll(r){return{$:5,$0:r}}function sl(r){return{$:4,$0:r}}var Ze=K(r=>class{static{Ze=r(this)}static ContactSendButtonText;static ContactSendButtonAttr;static{this.ContactSendButtonAttr=Ia("disabled",Qr((e,o)=>!e||o,Xa(),Br().View)),this.ContactSendButtonText=_(e=>e?"Sending...":"Send",Br().View)}}),wt=class r extends H{name;fillWith;get Name(){return this.name}WithName(t){return new r(t,this.fillWith)}ForTextView(){return g(this.fillWith.View)}AddAttribute(t,e){t(e)(Da(this.fillWith))}get AsChoiceView(){return Ut(_(String,this.fillWith.View))}ApplyVarHole(t){cr(Sn(),this.fillWith,t)}constructor(t,e){super(),this.name=t,this.fillWith=e}};function cl(){return nn(Rr()+1),"uid"+String(Rr())}function nn(r){ro.counter=r}function Rr(){return ro.counter}function Yt(){return nn(Rr()+1),Rr()}var Rt=K(r=>class{static{Rt=r(this)}static CanSendView;static IsSendingVar;static ContactFormVar;static intervalVar;static catalogVar;static IsLoadingVar;static{this.IsLoadingVar=T.Create_1(!0),this.catalogVar=T.Create_1(an(kt.Empty)),this.intervalVar=T.Create_1(sn),this.ContactFormVar=T.Create_1(Ft("WebSharper support","","","","United States")),this.IsSendingVar=T.Create_1(!1),this.CanSendView=_(Oo,$t().View)}}),Zt=class r extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new r(t,this.fillWith)}constructor(t,e){super(),this.name=t,this.fillWith=e}},Wr=class r extends H{name;key;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new r(t,this.key,this.fillWith)}constructor(t,e,o){super(),this.name=t,this.key=e,this.fillWith=o}};function an(r){return{Plans:r}}function dl(r){let t=kt.Empty;for(let e=I(r)-1,o=0;e>=o;e--)t=kt.Cons(S(r,e),t);return t}function ul(r){return r.$==1?r.$0:ln()}function pl(r){return r.$==1?r.$1:ln()}function ln(){return W("The input list was empty.")}function hl(r,t,e,o,n,a,i){return{Id:r,Name:t,Description:e,IsPerSeat:o,MaxSeats:n,MonthPrice:a,YearPrice:i}}var gl={$:0},sn={$:1},et=class extends j{equals;hash;count;data;set_Item(t,e){this.set(t,e)}set(t,e){let o=this.hash(t),n=this.data[o];if(n==null)this.count=this.count+1,this.data[o]=new Array({K:t,V:e});else{let a=Xe(i=>this.equals.apply(null,[Dt(i)[0],t]),n);a==null?(this.count=this.count+1,n.push({K:t,V:e})):n[a.$0]={K:t,V:e}}}TryGetValue(t,e){let o=this.data[this.hash(t)];if(o==null)return!1;{let n=un(a=>{let i=Dt(a);return this.equals.apply(null,[i[0],t])?g(i[1]):null},o);return n!=null&&n.$==1&&(e.set(n.$0),!0)}}ContainsKey(t){let e=this.data[this.hash(t)];return e==null?!1:$e(o=>this.equals.apply(null,[Dt(o)[0],t]),e)}GetEnumerator(){return ns(Il(Xn(this.data)))}Item(t){return this.get(t)}get Values(){return new Be(this)}DAdd(t,e){this.add(t,e)}RemoveKey(t){return this.remove(t)}get Keys(){return new Re(this)}get(t){let e=this.data[this.hash(t)];return e==null?es():Ll(o=>{let n=Dt(o);return this.equals.apply(null,[n[0],t])?g(n[1]):null},e)}add(t,e){let o=this.hash(t),n=this.data[o];n==null?(this.count=this.count+1,this.data[o]=new Array({K:t,V:e})):($e(a=>this.equals.apply(null,[Dt(a)[0],t]),n)&&os(),this.count=this.count+1,n.push({K:t,V:e}))}remove(t){let e=this.hash(t),o=this.data[e];if(o==null)return!1;{let n=$r(a=>!this.equals.apply(null,[Dt(a)[0],t]),o);return I(n)<o.length&&(this.count=this.count-1,this.data[e]=n,!0)}}constructor(t,e,o,n){if(t=="New_5"&&(t="New_6",e=[],o=A,n=hr),t=="New_6"){let a=e,i=o,l=n;super(),this.equals=i,this.hash=l,this.count=0,this.data=[];let s=L(a);try{for(;s.MoveNext();){let d=s.Current;this.set(d.K,d.V)}}finally{let d=s;typeof d=="object"&&rt(d)&&s.Dispose()}}}},ct=class r extends j{equals;hash;data;count;SAdd(t){return this.add(t)}Contains(t){let e=this.data[this.hash(t)];return e==null?!1:this.arrContains(t,e)}add(t){let e=this.hash(t),o=this.data[e];return o==null?(this.data[e]=[t],this.count=this.count+1,!0):this.arrContains(t,o)?!1:(o.push(t),this.count=this.count+1,!0)}arrContains(t,e){let o=!0,n=0,a=e.length;for(;o&&n<a;)this.equals.apply(null,[e[n],t])?o=!1:n=n+1;return!o}GetEnumerator(){return L(fe(this.data))}ExceptWith(t){let e=L(t);try{for(;e.MoveNext();)this.Remove(e.Current)}finally{let o=e;typeof o=="object"&&rt(o)&&e.Dispose()}}get Count(){return this.count}IntersectWith(t){let e=new r("New_4",t,this.equals,this.hash),o=fe(this.data);for(let n=0,a=o.length-1;n<=a;n++){let i=o[n];e.Contains(i)||this.Remove(i)}}Remove(t){let e=this.data[this.hash(t)];return e==null?!1:this.arrRemove(t,e)&&(this.count=this.count-1,!0)}CopyTo(t,e){let o=fe(this.data);for(let n=0,a=o.length-1;n<=a;n++)Oe(t,n+e,o[n])}arrRemove(t,e){let o=!0,n=0,a=e.length;for(;o&&n<a;)this.equals.apply(null,[e[n],t])?(e.splice(n,1),o=!1):n=n+1;return!o}constructor(t,e,o,n){t=="New_3"&&(t="New_4",e=[],o=A,n=hr);let a;if(t=="New_2"&&(a=e,t="New_4",e=a,o=A,n=hr),t=="New_4"){let i=e,l=o,s=n;super(),this.equals=l,this.hash=s,this.data=[],this.count=0;let d=L(i);try{for(;d.MoveNext();)this.add(d.Current)}finally{let u=d;typeof u=="object"&&rt(u)&&d.Dispose()}}}};function cn(r,t){return{GetEnumerator:()=>{let e=L(r),o=[!0];return new ht(e,null,n=>{if(n.s.MoveNext())return n.c=n.s.Current,!0;{let a=n.s;return A(a,null)||a.Dispose(),n.s=null,o[0]&&(o[0]=!1,n.s=L(t),n.s.MoveNext()?(n.c=n.s.Current,!0):(n.s.Dispose(),n.s=null,!1))}},n=>{let a=n.s;A(a,null)||a.Dispose()})}}}function wl(r,t){let e=L(t);try{let o=null;for(;o==null&&e.MoveNext();){let n=e.Current;r(n)&&(o=g(n))}return o}finally{let o=e;typeof o=="object"&&rt(o)&&e.Dispose()}}function So(r){return{GetEnumerator:()=>L(r())}}function vl(r,t){return ml(Wt(r,t))}function Wt(r,t){return{GetEnumerator:()=>{let e=L(t);return new ht(null,null,o=>e.MoveNext()&&(o.c=r(e.Current),!0),()=>{e.Dispose()})}}}function fl(r){let t=L(r);try{return t.MoveNext()?t.Current:Ee()}finally{let e=t;typeof e=="object"&&rt(e)&&t.Dispose()}}function bl(r,t,e){let o=t,n=L(e);try{for(;n.MoveNext();)o=r(o,n.Current);return o}finally{let a=n;typeof a=="object"&&rt(a)&&n.Dispose()}}function ml(r){return{GetEnumerator:()=>{let t=L(r);function e(o){for(;;){let n=o.s;if(A(n,null))if(t.MoveNext())o.s=L(t.Current),o=o;else return t.Dispose(),!1;else{if(n.MoveNext())return o.c=n.Current,!0;o.Dispose(),o.s=null,o=o}}}return new ht(null,null,e,o=>{let n=o.s;A(n,null)||n.Dispose();let a=t;A(a,null)||a.Dispose()})}}}function xl(r,t){return yl(r,Cl(t))}function kl(r,t){let e=L(t);try{for(;e.MoveNext();)r(e.Current)}finally{let o=e;typeof o=="object"&&rt(o)&&e.Dispose()}}function yl(r,t){return r<0&&fs(),{GetEnumerator:()=>{let e=[L(t)];return new ht(0,null,o=>{if(o.s=o.s+1,o.s>r)return!1;{let n=e[0];return A(n,null)?Ee():n.MoveNext()?(o.c=n.Current,o.s===r&&(n.Dispose(),e[0]=null),!0):(n.Dispose(),e[0]=null,Ee())}},()=>{let o=e[0];A(o,null)||o.Dispose()})}}}function Cl(r){return{GetEnumerator:()=>new ht(0,null,t=>(t.c=r(t.s),t.s=t.s+1,!0),void 0)}}function $l(r,t){return!Al(e=>!r(e),t)}function Al(r,t){let e=L(t);try{let o=!1;for(;!o&&e.MoveNext();)o=r(e.Current);return o}finally{let o=e;typeof o=="object"&&rt(o)&&e.Dispose()}}function Sl(r){let t=L(r);try{t.MoveNext()||Nl();let e=t.Current;for(;t.MoveNext();){let o=t.Current;Pt(o,e)===1&&(e=o)}return e}finally{let e=t;typeof e=="object"&&rt(e)&&t.Dispose()}}function _l(r,t){return{GetEnumerator:()=>{let e=L(t),o=new ct("New_3");return new ht(null,null,n=>{let a,i;if(e.MoveNext()){for(a=e.Current,i=o.SAdd(r(a));!i&&e.MoveNext();)a=e.Current,i=o.SAdd(r(a));return i&&(n.c=a,!0)}else return!1},()=>{e.Dispose()})}}}function Nl(){return W("The input sequence was empty.")}function Qe(r,t){let e=[];for(let o=0,n=t.length-1;o<=n;o++){let a=r(t[o]);a==null||e.push(a.$0)}return e}function dn(r){let t=[],e=r;for(;e.$!=0;)t.push(ul(e)),e=pl(e);return t}function dt(r,t){let e=new Array(t.length);for(let o=0,n=t.length-1;o<=n;o++)e[o]=r(t[o]);return e}function Tl(r,t){let e=null,o=0;for(;o<t.length&&e==null;)r(t[o])&&(e=g(t[o])),o=o+1;return e}function El(r,t){return dt(e=>e[0],Vl((e,o)=>[o,[r(o),e]],t).sort((e,o)=>Pt(e[1],o[1])))}function Vl(r,t){let e=new Array(t.length);for(let o=0,n=t.length-1;o<=n;o++)e[o]=r(o,t[o]);return e}function Xe(r,t){let e=null,o=0;for(;o<t.length&&e==null;)r(t[o])&&(e=g(o)),o=o+1;return e}function un(r,t){let e=null,o=0;for(;o<t.length&&e==null;){let n=r(t[o]);n!=null&&n.$==1&&(e=n),o=o+1}return e}function Ml(r,t){let e=Xe(r,t);return e==null?W("KeyNotFoundException"):e.$0}function X(r,t){for(let e=0,o=t.length-1;e<=o;e++)r(t[e])}function $e(r,t){let e=!1,o=0,n=I(t);for(;!e&&o<n;)r(t[o])?e=!0:o=o+1;return e}function Il(r){return Array.prototype.concat.apply([],Qt(r))}function $r(r,t){let e=[];for(let o=0,n=t.length-1;o<=n;o++)r(t[o])&&e.push(t[o]);return e}function to(r,t,e){let o=e,n=t.length;for(let a=1,i=n;a<=i;a++)o=r(t[n-a],o);return o}function Qt(r){if(r instanceof Array)return r.slice();if(r instanceof kt)return dn(r);{let t=[],e=L(r);try{for(;e.MoveNext();)t.push(e.Current);return t}finally{let o=e;typeof o=="object"&&rt(o)&&e.Dispose()}}}function Ll(r,t){let e=un(r,t);return e==null?W("KeyNotFoundException"):e.$0}function Dl(r,t){return Qt(_l(r,t))}function pn(r,t){let e=!0,o=0,n=I(t);for(;e&&o<n;)r(t[o])?o=o+1:e=!1;return e}function Fl(r,t){let e=new Array(r);for(let o=0,n=r-1;o<=n;o++)e[o]=t;return e}function Gl(r,t){r<0&&W("Negative size given.");let e=new Array(r);for(let o=0,n=r-1;o<=n;o++)e[o]=t(o);return e}var Y=K(r=>class extends j{static{Y=r(this)}static init;id;vars;static initialized;static instances;static GetOrAddHoleFor(e,o,n){let a,i=Y.GetHolesFor(e),l=(a=null,[i.TryGetValue(o,{get:()=>a,set:s=>{a=s}}),a]);if(l[0])return l[1];{let s=n();return i.set_Item(o,s),s}}static GetHolesFor(e){let o,n=(o=null,[Y.initialized.TryGetValue(e,{get:()=>o,set:a=>{o=a}}),o]);if(n[0])return n[1];{let a=new et("New_5");return Y.initialized.set_Item(e,a),a}}static applyVarHole(e,o){o.ApplyVarHole(e)}InitInstance(e){let o=Y.GetHolesFor(e),n=this.vars;for(let i=0,l=n.length-1;i<=l;i++)(()=>{let s,d=S(n,i),u=d[1],b=d[2],w=d[0];if(o.ContainsKey(w))return null;if(u===0){let f=b==null?null:g(b.$0),y=f==null?"":f.$0,$=T.Create_1(y);s=new wt(w,$)}else if(u===1){let f=b==null?null:g(b.$0),y=f==null?0:f.$0,$=T.Create_1(y);s=new jr(w,$)}else if(u===2){let f=b==null?null:g(b.$0),y=f==null?!1:f.$0,$=T.Create_1(y);s=new Ur(w,$)}else if(u===3){let f=b==null?null:g(b.$0),y=f==null?-864e13:f.$0,$=T.Create_1(y);s=new Or(w,$)}else if(u===4){let f=b==null?null:g(b.$0),y=f==null?[]:f.$0,$=T.Create_1(y);s=new qr(w,$)}else if(u===5){let f=b==null?null:g(b.$0),y=globalThis.document.querySelector("[ws-dom="+w+"]"),$=f==null?y:f.$0,N=g($),C=T.Create_1(N);s=new vr(w,C)}else if(u===6){let f=b==null?null:g(b.$0),y=f==null?[]:f.$0,$=T.Create_1(y);s=new Hr(w,$)}else s=W("Invalid kind for template Var type: "+String(u));return o.set_Item(w,s)})();let a=new mt({$:0,$0:o},st.Empty);return Y.instances.set_Item(e,a),a}$preinit(e){let o=this.InitInstance(e),n=globalThis.document.querySelectorAll("[ws-var^='"+e+"::']");for(let a=0,i=n.length-1;a<=i;a++){let l=n[a],s=l.getAttribute("ws-var"),d=o.Hole(xt(s,g(e.length+2),null)),u=d.WithName(s);vn().set_Item(u.Name,u),Y.applyVarHole(l,d)}}$init(e){}$postinit(e){hn([])}static{Y.initialized=new et("New_5"),Y.instances=new et("New_5")}}),jr=class r extends H{name;fillWith;get Name(){return this.name}WithName(t){return new r(t,this.fillWith)}ForTextView(){return g(_(String,this.fillWith.View))}AddAttribute(t,e){t(e)(Fa(this.fillWith))}get AsChoiceView(){return Ut(_(String,this.fillWith.View))}ApplyVarHole(t){cr(_n(),this.fillWith,t)}constructor(t,e){super(),this.name=t,this.fillWith=e}},Ur=class r extends H{name;fillWith;get Name(){return this.name}WithName(t){return new r(t,this.fillWith)}ForTextView(){return g(_(String,this.fillWith.View))}AddAttribute(t,e){t(e)(Ga(this.fillWith))}get AsChoiceView(){return Ut(_(String,this.fillWith.View))}ApplyVarHole(t){cr(Nn(),this.fillWith,t)}constructor(t,e){super(),this.name=t,this.fillWith=e}},Or=class r extends H{name;fillWith;get Name(){return this.name}WithName(t){return new r(t,this.fillWith)}ForTextView(){return g(_(t=>new Date(t).toLocaleString(),this.fillWith.View))}AddAttribute(t,e){t(e)(za(this.fillWith))}get AsChoiceView(){return Ut(_(t=>new Date(t).toLocaleString(),this.fillWith.View))}ApplyVarHole(t){cr(Tn(),this.fillWith,t)}constructor(t,e){super(),this.name=t,this.fillWith=e}},qr=class r extends H{name;fillWith;get Name(){return this.name}WithName(t){return new r(t,this.fillWith)}ForTextView(){return g(_(String,this.fillWith.View))}AddAttribute(t,e){t(e)(Ba(this.fillWith))}get AsChoiceView(){return Ut(_(String,this.fillWith.View))}ApplyVarHole(t){cr(En(),this.fillWith,t)}constructor(t,e){super(),this.name=t,this.fillWith=e}},vr=class r extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new r(t,this.fillWith)}ApplyVarHole(t){}constructor(t,e){super(),this.name=t,this.fillWith=e}},Hr=class r extends H{name;fillWith;get Name(){return this.name}WithName(t){return new r(t,this.fillWith)}ForTextView(){return g(_(t=>Xt(",",t),this.fillWith.View))}AddAttribute(t,e){t(e)(Pa(this.fillWith))}get AsChoiceView(){return Ut(_(String,this.fillWith.View))}ApplyVarHole(t){cr(Vn(),this.fillWith,t)}constructor(t,e){super(),this.name=t,this.fillWith=e}};function hn(r){if(_o()==null){gn(""),zt("",null,globalThis.document.body,null);let t=wn(globalThis.document.body,r),e=globalThis.document.body;(n=>{st.RunInPlace(!0,e,n)})(t);let o=t;return zl(g(o)),o}else return _o().$0}function Ar(r,t,e,o){return gn(""),ir(r,t,e),Bl(r,t,o)}function ir(r,t,e){Sr(r).ContainsKey(t==null?"":t.$0)||zt(r,t,e(),null)}function _o(){return Vt.RenderedFullDocTemplate}function gn(r){Pl()||(Rl(!0),Wl(globalThis.document.body,"")),fr().set_Item(r,Sr(""))}function zt(r,t,e,o){let n=new ct("New_3");function a(w,f){for(;;)switch(w){case 0:if(f!==null){let c=f.nextSibling;A(f.nodeType,Node.TEXT_NODE)?Ds(f):A(f.nodeType,Node.ELEMENT_NODE)&&l(f),f=c}else return null;break;case 1:let y=xt(f.nodeName,g(3),null).toLowerCase(),$=y.indexOf("."),N=$===-1?[r,y]:[xt(y,null,g($-1)),xt(y,g($+1),null)],C=N[1],v=N[0];if(v!=""&&!fr().ContainsKey(v))return Fo(C);{v==""&&o!=null&&o.$0(C);let c=fr().Item(v);if(c.ContainsKey(C)){let x=c.Item(C).cloneNode(!0),m=new ct("New_3"),p=new et("New_5"),k=f.attributes;for(let E=0,D=k.length-1;E<=D;E++){let V=k.item(E).name.toLowerCase(),P=k.item(E).nodeValue,J=P==""?V:P.toLowerCase();p.set_Item(V,J),m.SAdd(V)||console.warn("Hole mapped twice",V)}for(let E=0,D=f.childNodes.length-1;E<=D;E++){let V=f.childNodes[E];A(V.nodeType,Node.ELEMENT_NODE)&&(m.SAdd(V.nodeName.toLowerCase())||console.warn("Hole filled twice",C))}let M=f.childNodes.length===1&&A(f.firstChild.nodeType,Node.TEXT_NODE);if(M){let E=Fs(x,f.firstChild.textContent,C),D=(P=>J=>P.SAdd(J))(m);(P=>J=>{J!=null&&P(J.$0)})(P=>{D(P)})(E)}if(Gs(x,m),!M)for(let E=0,D=f.childNodes.length-1;E<=D;E++){let V=f.childNodes[E];A(V.nodeType,Node.ELEMENT_NODE)&&(V.hasAttributes()?zs(x,V):i(x,V))}Bs(x,p),Go(x,f.parentNode,f),f.parentNode.removeChild(f);return}else return Fo(C)}break}}function i(w,f){let y=f.nodeName.toLowerCase(),$=(C,v)=>{if(y=="title"&&f.hasChildNodes()){let c=pt(f.textContent);for(f.removeChild(f.firstChild);c.hasChildNodes();)f.appendChild(c.firstChild)}return l(f),Go(f,C,v)};q(w,"[ws-attr-holes]",C=>{let v=vt(C.getAttribute("ws-attr-holes"),[" "],1);for(let c=0,h=v.length-1;c<=h;c++){let x=S(v,c),m=new RegExp("\\${"+y+"}","ig"),p=C.getAttribute(x).replace(m,f.textContent);C.setAttribute(x,p)}});let N=w.querySelector("[ws-hole="+y+"]");if(A(N,null)){let C=w.querySelector("[ws-replace="+y+"]");if(A(C,null)){let v=w.querySelector("slot[name="+y+"]");return w.tagName.toLowerCase()=="template"?($(v.parentNode,v),void v.parentNode.removeChild(v)):null}else{$(C.parentNode,C),C.parentNode.removeChild(C);return}}else{for(;N.hasChildNodes();)N.removeChild(N.lastChild);return N.removeAttribute("ws-hole"),(C=>{let v=C;return c=>$(v,c)})(N)(null)}}function l(w){w.hasAttribute("ws-preserve")||(Se(w.nodeName.toLowerCase(),"ws-")?d(w):(An(w),s(w.firstChild)))}function s(w){return a(0,w)}function d(w){return a(1,w)}function u(w){for(;;){let f=w.querySelector("[ws-template]");if(A(f,null)){let y=w.querySelector("[ws-children-template]");if(A(y,null)){let $=w.querySelectorAll("template[id]");for(let C=1,v=$.length-1;C<=v;C++){let c=$[C];n.Contains(c)||(zt(r,g(c.getAttribute("id")),c,null),n.SAdd(c))}let N=w.querySelectorAll("template[name]");for(let C=1,v=N.length-1;C<=v;C++){let c=N[C];n.Contains(c)||(zt(r,g(c.getAttribute("name")),c,null),n.SAdd(c))}return null}else{let $=y.getAttribute("ws-children-template");y.removeAttribute("ws-children-template"),zt(r,g($),y,null),w=w}}else{let y=f.getAttribute("ws-template");jl(r,g(y),f)(null),w=w}}}let b=(t==null?"":t.$0).toLowerCase();Sr(r).set_Item(b,e),e.hasChildNodes()&&(u(e),s(e.firstChild))}function wn(r,t){let e,o=Ul(r,cn(t,vn().Values)),n=o[1],a=o[0],i=a.Els;return!A(i,null)&&i.length===1&&S(i,0)instanceof Node&&A(S(i,0).nodeType,Node.ELEMENT_NODE)&&(e=S(i,0),!0)?Le.TreeNode(a,n):st.Mk(on(a),n)}function zl(r){Vt.RenderedFullDocTemplate=r}function Bl(r,t,e){let o,n=(o=null,[Sr(r).TryGetValue(t==null?"":t.$0,{get:()=>o,set:a=>{o=a}}),o]);return n[0]?wn(n[1].cloneNode(!0),e):(console.warn("Local template doesn't exist",t),st.Empty)}function Sr(r){let t,e=(t=null,[fr().TryGetValue(r,{get:()=>t,set:o=>{t=o}}),t]);if(e[0])return e[1];{let o=new et("New_5");return fr().set_Item(r,o),o}}function Pl(){return Vt.LocalTemplatesLoaded}function Rl(r){Vt.LocalTemplatesLoaded=r}function Wl(r,t){let e=Sr(t),o=new et("New_5"),n=r.querySelectorAll("[ws-template]");for(let u=0,b=n.length-1;u<=b;u++){let w=n[u],f=w.getAttribute("ws-template").toLowerCase();w.removeAttribute("ws-template"),o.set_Item(f,fn(w))}let a=r.querySelectorAll("[ws-children-template]");for(let u=0,b=a.length-1;u<=b;u++){let w=a[u],f=w.getAttribute("ws-children-template").toLowerCase();w.removeAttribute("ws-children-template"),o.set_Item(f,Ol(w))}let i=r.querySelectorAll("template[id]");for(let u=0,b=i.length-1;u<=b;u++){let w=i[u];o.set_Item(w.getAttribute("id").toLowerCase(),No(w))}let l=r.querySelectorAll("template[name]");for(let u=0,b=l.length-1;u<=b;u++){let w=l[u];o.set_Item(w.getAttribute("name").toLowerCase(),No(w))}let s=new ct("New_3");function d(u){if(!e.ContainsKey(u)){let b,w=(b=null,[o.TryGetValue(u,{get:()=>b,set:f=>{b=f}}),b]);w[0]?(s.SAdd(u),o.RemoveKey(u),zt(t,g(u),w[1],g(d))):console.warn(s.Contains(u)?"Encountered loop when instantiating "+u:"Local template does not exist: "+u)}}for(;o.count>0;)d(fl(o.Keys))}function fr(){return Vt.LoadedTemplates}function q(r,t,e){Pi(r,t,o=>{o.closest("[ws-preserve]")==null&&e(o)})}function jl(r,t,e){let o=fn(e);return n=>{zt(r,t,o,n)}}function Ul(r,t){let e,o=[],n=[],a=[],i=[],l=new et("New_5"),s=L(t);try{for(;s.MoveNext();){let c=s.Current;l.set_Item(c.Name,c)}}finally{let c=s;typeof c=="object"&&rt(c)&&s.Dispose()}let d=Ao(r),u=(c,h)=>{let x=Ye(c,h);n.push(Zo(x)),a.push([c,x]);let m=It(x.OnAfterRender);if(m==null)return null;{let p=m.$0;i.push(()=>{p(c)});return}},b=c=>{let h,x=(h=null,[l.TryGetValue(c,{get:()=>h,set:m=>{h=m}}),h]);if(x[0]){let m=x[1];if(m instanceof Zt)return g(m.Value);if(m instanceof kr)return g(st.TextNode(m.Value));{let p=m.ForTextView();return p==null?null:g(st.TextView(p.$0))}}else return null};q(r,"[ws-hole]",c=>{let h=c.getAttribute("ws-hole");for(c.removeAttribute("ws-hole");c.hasChildNodes();)c.removeChild(c.lastChild);let x=b(h);if(x!=null&&x.$==1){let m=x.$0;Ve(c,m.docNode),o.push(Bt.New(we(c),m.docNode,null,c,Yt(),null)),n.push(m.updates)}}),q(r,"[ws-replace]",c=>{let h=b(c.getAttribute("ws-replace"));if(h!=null&&h.$==1){let x=h.$0,m=c.parentNode,p=globalThis.document.createTextNode("");m.replaceChild(p,c);let k=_s(p,x.docNode);d=Ao(r);let M=Xe(E=>c===E,d);M==null||Oe(d,M.$0,x.docNode),o.push(Bt.New(we(m),x.docNode,g([k,p]),m,Yt(),null)),n.push(x.updates)}});let w=!1;q(r,"slot",c=>{let h=c.getAttribute("name"),x=h==""||h==null?"default":h.toLowerCase();if(!(w&&x=="default"||!A(r.parentElement,null))){for(;c.hasChildNodes();)c.removeChild(c.lastChild);x=="default"&&(w=!0);let m=b(x);if(m!=null&&m.$==1){let p=m.$0;Ve(c,p.docNode),o.push(Bt.New(we(c),p.docNode,null,c,Yt(),null)),n.push(p.updates)}}}),q(r,"[ws-attr]",c=>{let h,x=c.getAttribute("ws-attr");c.removeAttribute("ws-attr");let m=(h=null,[l.TryGetValue(x,{get:()=>h,set:p=>{h=p}}),h]);if(m[0]){let p=m[1];p instanceof B?u(c,p.Value):console.warn("Attribute hole filled with non-attribute data",x)}}),q(r,"[ws-on]",c=>{u(c,Q.Concat(Qe(h=>{let x,m=vt(h,[":"],1),p=(x=null,[l.TryGetValue(S(m,1),{get:()=>x,set:k=>{x=k}}),x]);if(p[0]){let k=p[1];return k instanceof Fe?g(La(S(m,0),k.Value)):k instanceof Dr?g(Q.HandlerImpl(S(m,0),k.Value)):(console.warn("Event hole on"+S(m,0)+" filled with non-event data",S(m,1)),null)}else return null},vt(c.getAttribute("ws-on"),[" "],1)))),c.removeAttribute("ws-on")}),q(r,"[ws-onafterrender]",c=>{let h,x=c.getAttribute("ws-onafterrender"),m=(h=null,[l.TryGetValue(x,{get:()=>h,set:p=>{h=p}}),h]);if(m[0]){let p=m[1];p instanceof Ge||p instanceof Wr?(c.removeAttribute("ws-onafterrender"),u(c,Co(p.Value))):console.warn("onafterrender hole filled with non-onafterrender data",x)}}),q(r,"[ws-var]",c=>{let h,x=c.getAttribute("ws-var");c.removeAttribute("ws-var");let m=(h=null,[l.TryGetValue(x,{get:()=>h,set:p=>{h=p}}),h]);m[0]&&m[1].AddAttribute(p=>k=>u(p,k),c)});let f=()=>{ql("[ws-dom]",c=>{let h,x,m,p=(h=null,[l.TryGetValue(c.getAttribute("ws-dom").toLowerCase(),{get:()=>h,set:k=>{h=k}}),h]);if(p[0]){let k=p[1];if(k instanceof vr){let M=k.Value;c.removeAttribute("ws-dom"),x=c;let E=new MutationObserver((D,V)=>{X(P=>{P.removedNodes.forEach(co(J=>J[0]===x&&P.addedNodes.length!==1?(M.SetFinal(null),V.disconnect()):null),null)},D)});c.parentElement!==null&&E.observe(c.parentElement,(m={},m.childList=!0,m)),M.Set(g(c)),Gr(D=>{if(D!=null&&D.$==1){let V=D.$0;if(x!==V){let P=[V];x.replaceWith.apply(x,P),x=V}}else x.remove(),E.disconnect()},M.View)}}})};q(r,"[ws-attr-holes]",c=>{let h=new RegExp(br(),"g"),x=vt(c.getAttribute("ws-attr-holes"),[" "],1);c.removeAttribute("ws-attr-holes");for(let m=0,p=x.length-1;m<=p;m++)(()=>{let k,M=S(x,m),E=c.getAttribute(M),D=null,V=0,P=[];for(;D=h.exec(E),D!==null;){let U=xt(E,g(V),g(h.lastIndex-S(D,0).length-1));V=h.lastIndex,P.push([U,S(D,1)])}let J=xt(E,g(V),null);h.lastIndex=0;let G=to((U,Z)=>(ut=>{let Mt=ut[0],Vr=ut[1];return dr=>{let Ct,Ot=dr[0],ot=dr[1],lo=(Ct=null,[l.TryGetValue(Vr,{get:()=>Ct,set:ce=>{Ct=ce}}),Ct]),Mr=lo[0]?lo[1].AsChoiceView:io("");return Mr.$==1?[Mt,kt.Cons(Ot==""?Mr.$0:_(ce=>ce+Ot,Mr.$0),ot)]:[Mt+Mr.$0+Ot,ot]}})(U)(Z),P,[J,kt.Empty]);if(G[1].$==1)if(G[1].$1.$==1)if(G[1].$1.$1.$==1)if(G[1].$1.$1.$1.$==0){let U=G[0];k=at(M,jo((Z,ut,Mt)=>U+Z+ut+Mt,G[1].$0,G[1].$1.$0,G[1].$1.$1.$0))}else{let U=G[0];k=at(M,_(Z=>U+Xt("",Z),Ua(G[1])))}else{let U=G[0];k=at(M,Qr((Z,ut)=>U+Z+ut,G[1].$0,G[1].$1.$0))}else if(G[0]=="")k=at(M,G[1].$0);else{let U=G[0];k=at(M,_(Z=>U+Z,G[1].$0))}else k=Q.Create(M,G[0]);return u(c,k)})()});let y=d,$=i.length==0?g(()=>{f()}):g(c=>{f(),X(h=>{h(c)},i)}),N=!A(d,null)&&d.length===1&&S(d,0)instanceof Node&&S(d,0)instanceof Element&&(e=S(d,0),!0)?g(e):null,C={Els:y,Dirty:!0,Holes:o,Attrs:a,Render:$?$.$0:void 0,El:N?N.$0:void 0};return[so(C,["Render","El"]),ne(gr(),zr,n)]}function vn(){return Vt.GlobalHoles}function fn(r){r.removeAttribute("ws-template");let t=r.getAttribute("ws-replace");if(t!=null){r.removeAttribute("ws-replace");let o=r.parentNode;if(!A(o,null)){let n=globalThis.document.createElement(r.tagName);n.setAttribute("ws-replace",t),o.replaceChild(n,r)}}let e=globalThis.document.createElement("div");return e.appendChild(r),e}function Ol(r){let t=globalThis.document.createElement("div");for(;r.hasChildNodes();)t.appendChild(r.firstChild);return t}function No(r){let t=globalThis.document.createElement("div"),e=r.content;for(let o=0,n=e.childNodes.length-1;o<=n;o++)t.appendChild(e.childNodes[o].cloneNode(!0));return t}function br(){return Vt.TextHoleRE}function ql(r,t){Ri(r,e=>{e.closest("[ws-preserve]")==null&&t(e)})}var Ae=class extends Fr{isConst;current;snap;view;id;get View(){return this.view}Set(t){this.isConst?(e=>e("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(e=>{console.log(e)}):(xr(this.snap),this.current=t,this.snap={s:ie(t,[])})}Get(){return this.current}Update(t){this.Set(t(this.Get()))}UpdateMaybe(t){let e=t(this.Get());e!=null&&e.$==1&&this.Set(e.$0)}SetFinal(t){this.isConst?(e=>e("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(e=>{console.log(e)}):(xr(this.snap),this.isConst=!0,this.current=t,this.snap={s:Et(t)})}constructor(t,e,o){super(),this.isConst=t,this.current=o,this.snap=e,this.view=()=>this.snap,this.id=Yt()}},_r=K(r=>class{static{_r=r(this)}static IsFetchingView;static IsAuthedView;static UserView;static isFetchingVar;static userVar;static API;static{this.API="https://api.websharper.io",as("https://api.websharper.io"),this.userVar=T.Create_1(null),this.isFetchingVar=T.Create_1(!1),this.UserView=Kt().View,this.IsAuthedView=_(e=>e!=null,Kt().View),this.IsFetchingView=xe().View}});function Jt(r){return r==null||new RegExp("^\\s*$").test(r)}function Hl(r){return r.replace(new RegExp("^\\s+"),"").replace(new RegExp("\\s+$"),"")}function Xt(r,t){return Qt(t).join(r)}function vt(r,t,e){return Yl(r,new RegExp("["+Jl(t.join(""))+"]"),e)}function Se(r,t){return r.substring(0,t.length)==t}function Kl(r,t){return $l(r,Zl(t))}function Yl(r,t,e){return e===1?$r(o=>o!=="",To(r,t)):To(r,t)}function Jl(r){return r.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]","g"),"\\$&")}function Zl(r){return r??""}function To(r,t){return r.split(t)}function Nr(r,t){return{k:r,ct:t}}function ae(r){return{$:1,$0:r}}function Tr(r){return{$:0,$0:r}}function bn(r){return{$:2,$0:r}}var mr=class extends j{AsyncBase(t,e){return z(()=>{let o=ss(this.Headers),n=ls(e);return R(yi(),a=>R(te((i,l,s)=>{let d=[!0],u=Ko(a,()=>{d[0]&&(d[0]=!1,s(new Kr("New",a)))});return is().Async(this.EndPoint+"/"+t,o,n,b=>{d[0]&&(d[0]=!1,u.Dispose(),i(b))},b=>{d[0]&&(d[0]=!1,u.Dispose(),l(b))})}),i=>O(JSON.parse(i))))})}get EndPoint(){return cs()}get Headers(){return[]}Async(t,e){return this.AsyncBase(t,e)}};function Ql(r,t){return{c:r,r:t}}var _e=class extends j{push;value;dirty;updates;get NChanged(){return this.updates}NGetExitAnim(t){return ve()}NGetEnterAnim(t){return ve()}NGetChangeAnim(t){return ve()}NSync(t){this.dirty&&(this.push(t)(this.value),this.dirty=!1)}constructor(t,e){super(),this.push=e,this.value=void 0,this.dirty=!1,this.updates=_(o=>{this.value=o,this.dirty=!0},t)}};function xr(r){let t,e=r.s;if(!(e==null||(!(e!=null&&e.$==2||e!=null&&e.$==3)||(t=e.$1,!1)))){r.s=null;for(let o=0,n=I(t)-1;o<=n;o++){let a=S(t,o);typeof a=="object"?(i=>{xr(i)})(a):a()}}}var kt=class r{static Empty=nt(r,{$:0});static Cons(t,e){return nt(r,{$:1,$0:t,$1:e})}GetEnumerator(){return new ht(this,null,t=>{let e=t.s;if(e.$==0)return!1;{let o=e.$1;return t.c=e.$0,t.s=o,!0}},void 0)}$;$0;$1},lr=K(r=>class{static{lr=r(this)}static GetCT;static Zero;static defCTS;static scheduler;static noneCT;static{this.noneCT=Ql(!1,[]),this.scheduler=new Ne,this.defCTS=[new Te],this.Zero=O(),this.GetCT=e=>{e.k(Tr(e.ct))}}}),Bt=class r{Attr;Children;Delimiters;El;ElKey;Render;Equals(t){return this.ElKey===t.ElKey}GetHashCode(){return this.ElKey}static New(t,e,o,n,a,i){let l={Attr:t,Children:e,El:n,ElKey:a},s=(qt(l,"Delimiters",o),qt(l,"Render",i),l);return nt(r,s)}};function Et(r){return{$:0,$0:r}}function ie(r,t){return{$:2,$0:r,$1:t}}function jt(r,t){return{$:3,$0:r,$1:t}}function Xl(r,t){return{Amount:r,Currency:t}}function mn(r,t){return bs(r,-2147483648,2147483647,t)}function ts(r){return te((t,e)=>{r.then(t,o=>e(rs(o)))})}function rs(r){return r instanceof Error?r:new De(r)}function es(){throw new je("New")}function os(){throw new Ue("New_2","An item with the same key has already been added.")}function L(r){return r instanceof Array?xn(r):A(typeof r,"string")?kn(r):r.GetEnumerator()}function xn(r){return new ht(0,null,t=>{let e=t.s;return e<I(r)&&(t.c=S(r,e),t.s=e+1,!0)},void 0)}function kn(r){return new ht(0,null,t=>{let e=t.s;return e<r.length&&(t.c=r[e],t.s=e+1,!0)},void 0)}function ns(r){return r instanceof Array?xn(r):A(typeof r,"string")?kn(r):"GetEnumerator0"in r?r.GetEnumerator0():r.GetEnumerator()}var ht=class extends j{s;c;n;d;e;MoveNext(){let t=this.n(this);return this.e=t?1:2,t}get Current(){return this.e===1?this.c:this.e===0?W("Enumeration has not started. Call MoveNext."):W("Enumeration already finished.")}Dispose(){this.d&&this.d(this)}constructor(t,e,o,n){super(),this.s=t,this.c=e,this.n=o,this.d=n,this.e=0}};function as(r){se.EndPoint=r}function is(){return se.AjaxProvider}function ls(r){return JSON.stringify(r)}function ss(r){return Ma(dt(t=>[t[0],t[1]],Dl(t=>t[0],r.concat([["content-type","application/json"]]))))}function cs(){return se.EndPoint}function Eo(r,t,e,o,n,a,i){let l=new XMLHttpRequest,s=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");l.open("POST",t,r),r==!0&&(l.withCredentials=!0);let d;for(var u in e)l.setRequestHeader(u,e[u]);s&&l.setRequestHeader("x-csrftoken",s);function b(){if(l.status==200)n(l.responseText);else if(i&&l.status==403&&l.responseText=="CSRF")i();else{let w="Response status is not 200: ";a(new Error(w+l.status))}}"onload"in l?l.onload=l.onerror=l.onabort=b:l.onreadystatechange=()=>{l.readyState==4&&b()},l.send(o)}var Ne=class extends j{idle;robin;Fork(t){this.robin.push(t),this.idle&&(this.idle=!1,setTimeout(()=>{this.tick()},0))}tick(){let t=Date.now(),e=!0;for(;e;)this.robin.length===0?(this.idle=!0,e=!1):(this.robin.shift()(),Date.now()-t>40&&(setTimeout(()=>{this.tick()},0),e=!1))}constructor(){super(),this.idle=!0,this.robin=[]}},F=K(r=>class{static{F=r(this)}static FloatApplyChecked;static FloatGetChecked;static FloatSetChecked;static FloatApplyUnchecked;static FloatGetUnchecked;static FloatSetUnchecked;static IntApplyChecked;static IntGetChecked;static IntSetChecked;static IntApplyUnchecked;static IntGetUnchecked;static IntSetUnchecked;static FileApplyUnchecked;static FileGetUnchecked;static FileSetUnchecked;static DateTimeApplyUnchecked;static DateTimeGetUnchecked;static DateTimeSetUnchecked;static StringListApply;static StringListGet;static StringListSet;static StringApply;static StringGet;static StringSet;static BoolCheckedApply;static EmptyAttr;static{this.EmptyAttr=null,this.BoolCheckedApply=v=>[c=>{c.addEventListener("change",()=>v.Get()!=c.checked?v.Set(c.checked):null)},c=>h=>h!=null&&h.$==1?void(c.checked=h.$0):null,_(c=>g(c),v.View)],this.StringSet=v=>c=>{v.value=c},this.StringGet=v=>g(v.value);let e=Rs(),o=Ps();this.StringApply=v=>Lt(e,o,v),this.StringListSet=v=>c=>{let h=v.options;for(let x=0,m=h.length-1;x<=m;x++)(()=>{let p=h.item(x);p.selected=vs(p.value,c)})()},this.StringListGet=v=>{let c=v.selectedOptions;return g(Qt(So(()=>vl(h=>[c.item(h).value],go(0,c.length-1)))))};let n=js(),a=Ws();this.StringListApply=v=>Lt(n,a,v),this.DateTimeSetUnchecked=v=>c=>{v.value=new Date(c).toLocaleString()},this.DateTimeGetUnchecked=v=>{let c,h,x=v.value;if(ur(x))return g(-864e13);{c=0;let m=hc(x);return h=[m!=null&&m.$==1&&(c=m.$0,!0),c],h[0]?g(h[1]):null}};let i=Os(),l=Us();this.DateTimeApplyUnchecked=v=>Lt(i,l,v),this.FileSetUnchecked=()=>()=>null,this.FileGetUnchecked=v=>{let c=v.files;return g(Qt(So(()=>Wt(h=>c.item(h),go(0,c.length-1)))))};let s=Ks(),d=Hs();this.FileApplyUnchecked=v=>qs(s,d,v),this.IntSetUnchecked=v=>c=>{v.value=String(c)},this.IntGetUnchecked=v=>{let c=v.value;if(ur(c))return g(0);{let h=+c;return h!==h>>0?null:g(h)}};let u=Js(),b=Ys();this.IntApplyUnchecked=v=>Lt(u,b,v),this.IntSetChecked=v=>c=>{let h=c.Input;return v.value!=h?void(v.value=h):null},this.IntGetChecked=v=>{let c,h,x=v.value;if(ur(x))c=!v.checkValidity||v.checkValidity()?gt.Blank(x):gt.Invalid(x);else{let m=(h=0,[mn(x,{get:()=>h,set:p=>{h=p}}),h]);c=m[0]?gt.Valid(m[1],x):gt.Invalid(x)}return g(c)};let w=Qs(),f=Zs();this.IntApplyChecked=v=>Lt(w,f,v),this.FloatSetUnchecked=v=>c=>{v.value=String(c)},this.FloatGetUnchecked=v=>{let c=v.value;if(ur(c))return g(0);{let h=+c;return isNaN(h)?null:g(h)}};let y=tc(),$=Xs();this.FloatApplyUnchecked=v=>Lt(y,$,v),this.FloatSetChecked=v=>c=>{let h=c.Input;return v.value!=h?void(v.value=h):null},this.FloatGetChecked=v=>{let c,h=v.value;if(ur(h))c=!v.checkValidity||v.checkValidity()?gt.Blank(h):gt.Invalid(h);else{let x=+h;c=isNaN(x)?gt.Invalid(h):gt.Valid(x,h)}return g(c)};let N=ec(),C=rc();this.FloatApplyChecked=v=>Lt(N,C,v)}});function ds(r,t,e){return()=>o=>{let n;if(typeof o=="object"&&o!=null){let i={};if(typeof t=="string"){let l=o[t];n=Ml(s=>!A(s,null)&&s[0]==l,e)}else{let l=[void 0],s;for(var a in t)if((d=>o.hasOwnProperty(d)&&(l[0]=t[d],!0))(a))break;n=l[0]}return i.$=n,X(l=>{let s=l[0],d=l[1],u=l[2],b=l[3];if(s==null){let w=u()(o);d&&delete w[t],i.$0=w;return}else return b===0?void(i[s]=u()(o[d])):b===1?void(i[s]=o.hasOwnProperty(d)?g(u()(o[d])):null):W("Invalid field option kind")},S(e,n)[1]),r===void 0?i:r(i)}else return o}}function ft(){return()=>r=>r}function us(r){return ps(r)}function ps(r){return()=>t=>dt(r(),t)}function hs(r,t){return()=>e=>{let o={};return X(n=>{let a=n[0],i=n[1],l=n[2];return l===0?e.hasOwnProperty(a)?void(o[a]=i()(e[a])):W("Missing mandatory field: "+a):l===1?void(o[a]=e.hasOwnProperty(a)?g(i()(e[a])):null):l===2?e.hasOwnProperty(a)?void(o[a]=i()(e[a])):null:l===3?e[a]===void 0?void(o[a]=i()(e[a])):null:W("Invalid field option kind")},t),r===void 0?o:r(o)}}var Kr=class extends Error{ct;constructor(t,e,o,n){let a;if(t=="New"&&(a=e,t="New_1",e="The operation was canceled.",o=null,n=a),t=="New_1"){let i=e,l=o,s=n;super(i),this.inner=l,this.ct=s}}},Te=class extends j{init;c;pending;r;constructor(){super(),this.c=!1,this.pending=null,this.r=[],this.init=1}};function yn(r,t,e,o){let n={DynElem:r,DynFlags:t,DynNodes:e};return qt(n,"OnAfterRender",o),n}var ro=K(r=>class{static{ro=r(this)}static counter;static{this.counter=0}});function gs(r,t){let e=new et("New_5"),o=[];for(let n=0,a=I(t)-1;n<=a;n++){let i=t[n],l=r(i);e.ContainsKey(l)?e.Item(l).push(i):(o.push(l),e.DAdd(l,[i]))}return ws(n=>[n,e.Item(n)],o),o}function ws(r,t){for(let e=0,o=t.length-1;e<=o;e++)t[e]=r(t[e])}function vs(r,t){let e=!0,o=0,n=I(t);for(;e&&o<n;)A(t[o],r)?e=!1:o=o+1;return!e}function Ee(){return W("The input sequence has an insufficient number of elements.")}function fs(){return W("The input must be non-negative.")}var kr=class r extends H{name;fillWith;get Name(){return this.name}get Value(){return this.fillWith}WithName(t){return new r(t,this.fillWith)}get AsChoiceView(){return io(this.fillWith)}constructor(t,e){super(),this.name=t,this.fillWith=e}};function bs(r,t,e,o){let n=+r,a=n===n-n%1&&n>=t&&n<=e;return a&&o.set(n),a}function ms(){return{Current:null,Dirty:!1}}function xs(r,t){r.Current=t,r.Dirty=!0}function eo(r,t){yr(r.parentNode,t,r)}function ks(r,t,e){return Mn(In(),Cs(r,t,Ke(),e))}function Vo(r,t,e){return Me()?z(()=>{let o=Ln(e),n=Ss(t,o),a=As(t,o);return R(Lo(Is(n,$s(t,o))),()=>R(Io(r,t),()=>R(Lo(a),()=>(t.PreviousNodes=o,O(null)))))}):Io(r,t)}function Mo(r,t,e){let o=Ln(e);Cr(r,t.Top),t.PreviousNodes=o}function ys(r,t){return Mn(In(),Ns(r,Ke(),t))}function yr(r,t,e){for(;;){if(t!=null&&t.$==1)return Ir(r,t.$0.El,e);if(t!=null&&t.$==2){let o=t.$0;o.Dirty=!1,t=o.Current}else{if(t==null)return e;if(t!=null&&t.$==4)return Ir(r,t.$0.Text,e);if(t!=null&&t.$==5)return Ir(r,t.$0,e);if(t!=null&&t.$==6)return to((o,n)=>(a=>i=>l=>i==null||i.constructor===Object?yr(a,i,l):Ir(a,i,l))(r)(o)(n),t.$0.Els,e);{let o=t.$1;t=t.$0,e=yr(r,o,e)}}}}function Cs(r,t,e,o){let n=r.parentNode;eo(t,o);let a=Ye(n,e);return Bt.New(a,o,g([r,t]),n,Yt(),It(a.OnAfterRender))}function Io(r,t){if(Ie()){let e=o=>{requestAnimationFrame(()=>{Cr(r,t.Top),o()})};return te((o,n,a)=>e.apply(null,[o,n,a]))}else return Cr(r,t.Top),O(null)}function $s(r,t){return le(dt(e=>Ni(e.Attr),ao(Dn(t,no(e=>_i(e.Attr),r.PreviousNodes)))))}function As(r,t){return le(dt(e=>Ei(e.Attr),ao(Dn(r.PreviousNodes,no(e=>Ti(e.Attr),t)))))}function Ss(r,t){let e=n=>Vi(n.Attr),o=n=>no(e,n);return le(dt(n=>Mi(n.Attr),ao(oc(o(r.PreviousNodes),o(t)))))}function Cr(r,t){r||Ts(t),Cn(t.Children),$n(t)}function Ve(r,t){yr(r,t,null)}function _s(r,t){let e=r.parentNode,o=globalThis.document.createTextNode("");return e.insertBefore(o,r),eo(r,t),o}function Ns(r,t,e){Ve(r,e);let o=Ye(r,t);return Bt.New(o,e,null,r,Yt(),It(o.OnAfterRender))}function Ir(r,t,e){return Wi(r,e,t),t}function Ts(r){function t(e){function o(n){for(;;)if(n!=null&&n.$==0){let a=n.$1,i=n.$0;if(o(i))return!0;n=a}else if(n!=null&&n.$==2){let a=n.$0;if(a.Dirty)return!0;n=a.Current}else if(n!=null&&n.$==6){let a=n.$0;return a.Dirty||$e(t,a.Holes)}else return!1}return o(e.Children)}Qo(r.El,r.Attr),t(r)&&Ms(r)}function Cn(r){for(;;){if(r!=null&&r.$==1)return Cr(!1,r.$0);if(r!=null&&r.$==2)r=r.$0.Current;else{if(r==null)return null;if(r!=null&&r.$==5)return null;if(r!=null&&r.$==4){let t=r.$0;return t.Dirty?(t.Text.nodeValue=t.Value,t.Dirty=!1):null}else if(r!=null&&r.$==6){let t=r.$0;return X(e=>{Cr(!1,e)},t.Holes),X(e=>{Qo(e[0],e[1])},t.Attrs),$n(t)}else{let t=r.$1,e=r.$0;Cn(e),r=t}}}}function $n(r){let t=It(r.Render);t!=null&&t.$==1&&(t.$0(r.El),qt(r,"Render",null))}function Es(){return{Text:globalThis.document.createTextNode(""),Dirty:!1,Value:""}}function Vs(r,t){r.Value=t,r.Dirty=!0}function Ms(r){let t=r.El;function e(l,s){for(;;){if(l!=null&&l.$==1)return l.$0.El;if(l!=null&&l.$==2){let d=l.$0;if(d.Dirty)return d.Dirty=!1,yr(t,d.Current,s);l=d.Current}else{if(l==null)return s;if(l!=null&&l.$==4)return l.$0.Text;if(l!=null&&l.$==5)return l.$0;if(l!=null&&l.$==6){let d=l.$0;return d.Dirty&&(d.Dirty=!1),to((u,b)=>u==null||u.constructor===Object?e(u,b):u,d.Els,s)}else{let d=l.$1;l=l.$0,s=e(d,s)}}}}let o=r.El;xc(l=>{ji(o,l)},mc(kc(r),bc(r.El,It(r.Delimiters))));let n=r.Children,a=It(r.Delimiters),i=a!=null&&a.$==1?a.$0[1]:null;e(n,i)}function Me(){return nc()}function Lo(r){return z(()=>R(Ls(()=>{},ac(r)),()=>(ic(r),O(null))))}function Is(r,t){return oo(Bn(r.$0,t.$0))}function Ls(r,t){let e=t.Duration;if(e===0)return it();{let o=n=>{function a(i){return l=>{let s=l-i;return t.Compute(s),r(),s<=e?void requestAnimationFrame(d=>{a(i)(d)}):n()}}requestAnimationFrame(i=>{a(i)(i)})};return te((n,a,i)=>o.apply(null,[n,a,i]))}}function oo(r){return{$:0,$0:r}}function le(r){return oo(gc(Wt(sc,r)))}function ve(){return oo(Rn())}function Ie(){return Gn.BatchUpdatesEnabled}function Do(r){let t=[0];function e(){return z(()=>R(r,()=>{let o=t[0];return A(o,1)?(t[0]=0,it()):A(o,2)?(t[0]=1,e()):it()}))}return()=>{let o=t[0];A(o,0)?(t[0]=1,ki(e(),null)):A(o,1)&&(t[0]=2)}}var Vt=K(r=>class{static{Vt=r(this)}static RenderedFullDocTemplate;static TextHoleRE;static GlobalHoles;static LocalTemplatesLoaded;static LoadedTemplates;static{this.LoadedTemplates=new et("New_5"),this.LocalTemplatesLoaded=!1,this.GlobalHoles=new et("New_5"),this.TextHoleRE="\\${([^}]+)}",this.RenderedFullDocTemplate=null}});function Ds(r){let t=null,e=0,o=r.textContent,n=new RegExp(br(),"g");for(;t=n.exec(o),t!==null;){r.parentNode.insertBefore(globalThis.document.createTextNode(xt(o,g(e),g(n.lastIndex-S(t,0).length-1))),r),e=n.lastIndex;let a=globalThis.document.createElement("span");a.setAttribute("ws-replace",S(t,1).toLowerCase()),r.parentNode.insertBefore(a,r)}n.lastIndex=0,r.textContent=xt(o,g(e),null)}function Fo(r){console.warn("Instantiating non-loaded template",r)}function Fs(r,t,e){let o=r.querySelector("[ws-replace]");return A(o,null)?(console.warn("Filling non-existent text hole",e),null):(o.parentNode.replaceChild(globalThis.document.createTextNode(t),o),g(o.getAttribute("ws-replace")))}function Gs(r,t){let e=o=>{q(r,"["+o+"]",n=>{t.Contains(n.getAttribute(o))||n.removeAttribute(o)})};e("ws-attr"),e("ws-onafterrender"),e("ws-var"),q(r,"[ws-hole]",o=>{if(!t.Contains(o.getAttribute("ws-hole")))for(o.removeAttribute("ws-hole");o.hasChildNodes();)o.removeChild(o.lastChild)}),q(r,"[ws-replace]",o=>{t.Contains(o.getAttribute("ws-replace"))||o.parentNode.removeChild(o)}),q(r,"[ws-on]",o=>{o.setAttribute("ws-on",Xt(" ",$r(n=>t.Contains(S(vt(n,[":"],1),1)),vt(o.getAttribute("ws-on"),[" "],1))))}),q(r,"[ws-attr-holes]",o=>{let n=vt(o.getAttribute("ws-attr-holes"),[" "],1);for(let a=0,i=n.length-1;a<=i;a++){let l=S(n,a),s=new RegExp(br(),"g"),d=o.getAttribute(l).replace(s,(u,b)=>t.Contains(b)?u:"");o.setAttribute(l,d)}})}function zs(r,t){An(t);let e=t.nodeName.toLowerCase(),o=r.querySelector("[ws-attr="+e+"]");if(A(o,null))console.warn("Filling non-existent attr hole",e);else{o.removeAttribute("ws-attr");for(let n=0,a=t.attributes.length-1;n<=a;n++){let i=t.attributes.item(n);i.name=="class"&&o.hasAttribute("class")?o.setAttribute("class",o.getAttribute("class")+" "+i.nodeValue):o.setAttribute(i.name,i.nodeValue)}}}function Bs(r,t){let e=o=>{q(r,"["+o+"]",n=>{let a,i=(a=null,[t.TryGetValue(n.getAttribute(o).toLowerCase(),{get:()=>a,set:l=>{a=l}}),a]);i[0]&&n.setAttribute(o,i[1])})};e("ws-hole"),e("ws-replace"),e("ws-attr"),e("ws-onafterrender"),e("ws-var"),q(r,"[ws-on]",o=>{o.setAttribute("ws-on",Xt(" ",dt(n=>{let a,i=vt(n,[":"],1),l=(a=null,[t.TryGetValue(S(i,1),{get:()=>a,set:s=>{a=s}}),a]);return l[0]?S(i,0)+":"+l[1]:n},vt(o.getAttribute("ws-on"),[" "],1))))}),q(r,"[ws-attr-holes]",o=>{let n=vt(o.getAttribute("ws-attr-holes"),[" "],1);for(let a=0,i=n.length-1;a<=i;a++)(()=>{let l=S(n,a);return o.setAttribute(l,bl((s,d)=>{let u=Dt(d);return s.replace(new RegExp("\\${"+u[0]+"}","ig"),"${"+u[1]+"}")},o.getAttribute(l),t))})()})}function Go(r,t,e){for(;;)if(r.hasChildNodes())e=t.insertBefore(r.lastChild,e);else return null}function An(r){let t=r.attributes,e=[],o=[],n=[];for(let i=0,l=t.length-1;i<=l;i++){let s=t.item(i);if(Se(s.nodeName,"ws-on")&&s.nodeName!="ws-onafterrender"&&s.nodeName!="ws-on")e.push(s.nodeName),o.push(xt(s.nodeName,g(5),null)+":"+s.nodeValue.toLowerCase());else if(!Se(s.nodeName,"ws-")&&new RegExp(br()).test(s.nodeValue)){let d=new RegExp(br(),"g"),u=s.nodeValue.replace(d,(b,w)=>"${"+w.toLowerCase()+"}");s.nodeValue=u,n.push(s.nodeName)}}o.length!=0&&r.setAttribute("ws-on",Xt(" ",o)),n.length!=0&&r.setAttribute("ws-attr-holes",Xt(" ",n));let a=i=>{let l=r.getAttribute(i);l==null||r.setAttribute(i,l.toLowerCase())};a("ws-hole"),a("ws-replace"),a("ws-attr"),a("ws-onafterrender"),a("ws-var"),X(i=>{r.removeAttribute(i)},e)}function xt(r,t,e){if(t==null)if(e!=null&&e.$==1){let o=e.$0;return o<0?"":r.slice(0,o+1)}else return"";else{if(e==null)return r.slice(t.$0);{let o=e.$0,n=t.$0;return o<0?"":r.slice(n,o+1)}}}var Le=class r extends st{docNode_1;updates_1;elt;rvUpdates;static TreeNode(t,e){let o=ze.Create(e),n=on(t),a=dt(s=>Zo(s[1]),t.Attrs),i=ne(gr(),zr,a),l=zr(i,o.v);return new r(n,l,S(t.Els,0),o)}constructor(t,e,o,n){super(t,e),this.docNode_1=t,this.updates_1=e,this.elt=o,this.rvUpdates=n}},se=K(r=>class{static{se=r(this)}static AjaxProvider;static EndPoint;static{this.EndPoint=globalThis.location.origin,this.AjaxProvider=new Pe}});function Lt(r,t,e){let o;return o=null,[n=>{let a=()=>{e.UpdateMaybe(i=>{let l;return o=r(n),o!=null&&o.$==1&&!A(o.$0,i)&&(l=[o,o.$0],!0)?l[0]:null})};n.addEventListener("change",a),n.addEventListener("input",a),n.addEventListener("keypress",a)},n=>{let a=t(n);return i=>i==null?null:a(i.$0)},_(n=>{let a;return o!=null&&o.$==1&&A(o.$0,n)&&(a=o.$0,!0)?null:g(n)},e.View)]}function Ps(){return F.StringSet}function Rs(){return F.StringGet}function Ws(){return F.StringListSet}function js(){return F.StringListGet}function Us(){return F.DateTimeSetUnchecked}function Os(){return F.DateTimeGetUnchecked}function qs(r,t,e){let o;return o=null,[n=>{n.addEventListener("change",()=>{e.UpdateMaybe(a=>{let i;return o=r(n),o!=null&&o.$==1&&o.$0!==a&&(i=[o,o.$0],!0)?i[0]:null})})},n=>{let a=t(n);return i=>i==null?null:a(i.$0)},_(n=>{let a;return o!=null&&o.$==1&&A(o.$0,n)&&(a=o.$0,!0)?null:g(n)},e.View)]}function Hs(){return F.FileSetUnchecked}function Ks(){return F.FileGetUnchecked}function Ys(){return F.IntSetUnchecked}function Js(){return F.IntGetUnchecked}function Zs(){return F.IntSetChecked}function Qs(){return F.IntGetChecked}function Xs(){return F.FloatSetUnchecked}function tc(){return F.FloatGetUnchecked}function rc(){return F.FloatSetChecked}function ec(){return F.FloatGetChecked}function Sn(){return F.StringApply}function _n(){return F.FloatApplyUnchecked}function Nn(){return F.BoolCheckedApply}function Tn(){return F.DateTimeApplyUnchecked}function En(){return F.FileApplyUnchecked}function Vn(){return F.StringListApply}function ur(r){return Kl(pc,r)}var gt=class r{get Input(){return this.$==1?this.$0:this.$==2?this.$0:this.$1}static Blank(t){return nt(r,{$:2,$0:t})}static Invalid(t){return nt(r,{$:1,$0:t})}static Valid(t,e){return nt(r,{$:0,$0:t,$1:e})}$;$0;$1},De=class extends Error{reason;constructor(t){super("Promise rejected"),this.reason=t}},sr=K(r=>class{static{sr=r(this)}static defaultWrap;static wrapMap;static rhtml;static rtagName;static rxhtmlTag;static{this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>","gi"),this.rtagName=new RegExp("<([\\w:]+)"),this.rhtml=new RegExp("<|&#?\\w+;");let e=[1,"<table>","</table>"],o=Object.fromEntries([["option",[1,"<select multiple='multiple'>","</select>"]],["legend",[1,"<fieldset>","</fieldset>"]],["area",[1,"<map>","</map>"]],["param",[1,"<object>","</object>"]],["thead",e],["tbody",e],["tfoot",e],["tr",[2,"<table><tbody>","</tbody></table>"]],["col",[2,"<table><colgroup>","</colgoup></table>"]],["td",[3,"<table><tbody><tr>","</tr></tbody></table>"]]]);this.wrapMap=o,this.defaultWrap=[0,"",""]}});function Mn(r,t){return{PreviousNodes:r,Top:t}}function In(){return Er(new ct("New_3"))}function Ln(r){let t=[];function e(a,i){for(;;)switch(a){case 0:if(i!=null&&i.$==0){let l=i.$1,s=i.$0;e(0,s),i=l}else if(i!=null&&i.$==1)i=i.$0,a=1;else if(i!=null&&i.$==2)i=i.$0.Current;else if(i!=null&&i.$==6){let l=i.$0.Holes;return(s=>d=>{X(s,d)})(n)(l)}else return null;break;case 1:t.push(i),i=i.Children,a=0;break}}function o(a){return e(0,a)}function n(a){return e(1,a)}return o(r),Er(new ct("New_2",t))}function Er(r){return{$:0,$0:r}}function no(r,t){return Er(wc(r,t.$0))}function Dn(r,t){return Er(vc(r.$0,t.$0))}function ao(r){return tr(r.$0)}function oc(r,t){return Er(fc(r.$0,t.$0))}function nc(){return zn.UseAnimations}function ac(r){return lc(Qe(t=>t.$==1?g(t.$0):null,Pn(r.$0)))}function ic(r){X(t=>{t.$==0&&t.$0()},Pn(r.$0))}function lc(r){let t=oe(r),e=I(t);if(e===0)return cc();if(e===1)return S(t,0);{let o=Sl(Wt(a=>a.Duration,t)),n=dt(a=>dc(o,a),t);return Fn(o,a=>{X(i=>{i.Compute(a)},n)})}}function sc(r){return r.$0}function cc(r){return Fn(0,()=>r)}function Fn(r,t){return{Compute:t,Duration:r}}function dc(r,t){let e=t.Compute,o=t.Duration,n=yc(()=>t.Compute(t.Duration));return{Compute:a=>a>=o?n.f():e(a),Duration:r}}var Gn=K(r=>class{static{Gn=r(this)}static BatchUpdatesEnabled;static{this.BatchUpdatesEnabled=!0}}),Fe=class r extends H{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new r(t,this.fillWith)}constructor(t,e){super(),this.name=t,this.fillWith=e}},Ge=class r extends H{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new r(t,this.fillWith)}constructor(t,e){super(),this.name=t,this.fillWith=e}};function io(r){return{$:0,$0:r}}function Ut(r){return{$:1,$0:r}}var ze=class r{c;s;v;static Create(t){let e;return e=null,e=r.New(t,null,()=>{let o;return o=e.s,o===null&&(o=ol(e.c()),e.s=o,rn(o,()=>{e.s=null})),o}),e}static New(t,e,o){return nt(r,{c:t,s:e,v:o})}},Be=class extends j{d;GetEnumerator(){return L(Wt(t=>t.V,this.d))}constructor(t){super(),this.d=t}},Pe=class extends j{Async(t,e,o,n,a){Eo(!0,t,e,o,n,a,()=>{Eo(!0,t,e,o,n,a,void 0)})}};function uc(r){r.splice(0,I(r))}function pc(r){return r.match(new RegExp("\\s"))!==null}function hc(r){let t=Date.parse(r);return isNaN(t)?null:g(t)}var zn=K(r=>class{static{zn=r(this)}static UseAnimations;static CubicInOut;static{this.CubicInOut=We.Custom(e=>{let o=e*e;return 3*o-2*(o*e)}),this.UseAnimations=!0}});function Bn(r,t){return r.$==0?t:t.$==0?r:{$:2,$0:r,$1:t}}function Pn(r){let t=[];function e(o){for(;;){if(o.$==1)return t.push(o.$0);if(o.$==2){let n=o.$1,a=o.$0;e(a),o=n}else return o.$==3?X(n=>{t.push(n)},o.$0):null}}return e(r),t.slice(0)}function gc(r){let t=oe(r);return ne(Rn(),Bn,t)}function Rn(){return Wn.Empty}function fe(r){let t=[],e;for(var o in r)t.push.apply(t,r[o]);return t}var Re=class extends j{d;GetEnumerator(){return L(Wt(t=>t.K,this.d))}constructor(t){super(),this.d=t}},We=class r extends j{transformTime;static Custom(t){return new r(t)}constructor(t){super(),this.transformTime=t}};function wc(r,t){return new ct("New_2",$r(r,tr(t)))}function vc(r,t){let e=new ct("New_2",tr(t));return e.ExceptWith(tr(r)),e}function tr(r){let t=Fl(r.Count,void 0);return r.CopyTo(t,0),t}function fc(r,t){let e=new ct("New_2",tr(r));return e.IntersectWith(tr(t)),e}var je=class extends Error{constructor(t,e){if(t=="New"&&(t="New_1",e="The given key was not present in the dictionary."),t=="New_1"){let o=e;super(o)}}},Ue=class extends Error{constructor(t,e){if(t=="New_2"){let o=e;super(o)}}};function bc(r,t){let e;if(t!=null&&t.$==1){let o=t.$0[1],n=t.$0[0],a=[];for(e=n.nextSibling;e!==o;)a.push(e),e=e.nextSibling;return Yr(a)}else{let o=r.childNodes.length,n=r.childNodes,a=Gl(o,i=>n[i]);return Yr(a)}}function mc(r,t){let e=r.$0;return Yr($r(o=>pn(n=>o!==n,e),t.$0))}function xc(r,t){X(r,t.$0)}function kc(r){let t=[];function e(o){for(;;)if(o!=null&&o.$==2)o=o.$0.Current;else{if(o!=null&&o.$==1)return t.push(o.$0.El);if(o==null)return null;if(o!=null&&o.$==5)return t.push(o.$0);if(o!=null&&o.$==4)return t.push(o.$0.Text);if(o!=null&&o.$==6){let n=o.$0.Els;return(a=>i=>{X(a,i)})(a=>{a==null||a.constructor===Object?e(a):t.push(a)})(n)}else{let n=o.$1,a=o.$0;e(a),o=n}}}return e(r.Children),Yr(oe(t))}function Yr(r){return{$:0,$0:r}}function cr(r,t,e){let o=r(t);o[0](e),Gr(o[1](e),o[2])}function yc(r){return Ac(!1,r,Cc)}function Cc(){let r=this.v();return this.c=!0,this.v=r,this.f=$c,r}function $c(){return this.v}var Wn=K(r=>class{static{Wn=r(this)}static Empty;static{this.Empty={$:0}}});function Ac(r,t,e){return{c:r,v:t,f:e}}return Kn(Sc);})();
