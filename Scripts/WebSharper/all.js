var wsbundle=(()=>{var Yp=Object.create;var ro=Object.defineProperty;var Wp=Object.getOwnPropertyDescriptor;var Zp=Object.getOwnPropertyNames;var Xp=Object.getPrototypeOf,eh=Object.prototype.hasOwnProperty;var no=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),th=(e,t)=>{for(var r in t)ro(e,r,{get:t[r],enumerable:!0})},Jd=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Zp(t))!eh.call(e,a)&&a!==r&&ro(e,a,{get:()=>t[a],enumerable:!(n=Wp(t,a))||n.enumerable});return e};var ao=(e,t,r)=>(r=e!=null?Yp(Xp(e)):{},Jd(t||!e||!e.__esModule?ro(r,"default",{value:e,enumerable:!0}):r,e)),rh=e=>Jd(ro({},"__esModule",{value:!0}),e);var zc=no((or,hs)=>{(function(e,t){typeof or=="object"&&typeof hs<"u"?hs.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.Sweetalert2=t())})(or,function(){"use strict";function e(i,l,A){if(typeof i=="function"?i===l:i.has(l))return arguments.length<3?l:A;throw new TypeError("Private element is not present on this object")}function t(i,l){if(l.has(i))throw new TypeError("Cannot initialize the same private elements twice on an object")}function r(i,l){return i.get(e(i,l))}function n(i,l,A){t(i,l),l.set(i,A)}function a(i,l,A){return i.set(e(i,l),A),A}let o=100,s={},d=()=>{s.previousActiveElement instanceof HTMLElement?(s.previousActiveElement.focus(),s.previousActiveElement=null):document.body&&document.body.focus()},c=i=>new Promise(l=>{if(!i)return l();let A=window.scrollX,b=window.scrollY;s.restoreFocusTimeout=setTimeout(()=>{d(),l()},o),window.scrollTo(A,b)}),u="swal2-",g=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"].reduce((i,l)=>(i[l]=u+l,i),{}),x=["success","warning","info","question","error"].reduce((i,l)=>(i[l]=u+l,i),{}),k="SweetAlert2:",m=i=>i.charAt(0).toUpperCase()+i.slice(1),f=i=>{console.warn(`${k} ${typeof i=="object"?i.join(" "):i}`)},v=i=>{console.error(`${k} ${i}`)},y=[],h=i=>{y.includes(i)||(y.push(i),f(i))},V=(i,l=null)=>{h(`"${i}" is deprecated and will be removed in the next major release.${l?` Use "${l}" instead.`:""}`)},I=i=>typeof i=="function"?i():i,B=i=>i&&typeof i.toPromise=="function",Q=i=>B(i)?i.toPromise():Promise.resolve(i),L=i=>i&&Promise.resolve(i)===i,F=()=>document.body.querySelector(`.${g.container}`),G=i=>{let l=F();return l?l.querySelector(i):null},N=i=>G(`.${i}`),S=()=>N(g.popup),U=()=>N(g.icon),de=()=>N(g["icon-content"]),O=()=>N(g.title),te=()=>N(g["html-container"]),j=()=>N(g.image),ee=()=>N(g["progress-steps"]),T=()=>N(g["validation-message"]),$=()=>G(`.${g.actions} .${g.confirm}`),re=()=>G(`.${g.actions} .${g.cancel}`),ue=()=>G(`.${g.actions} .${g.deny}`),he=()=>N(g["input-label"]),ae=()=>G(`.${g.loader}`),xe=()=>N(g.actions),Ie=()=>N(g.footer),Be=()=>N(g["timer-progress-bar"]),nt=()=>N(g.close),lt=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,$e=()=>{let i=S();if(!i)return[];let l=i.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),A=Array.from(l).sort((P,ve)=>{let Le=parseInt(P.getAttribute("tabindex")||"0"),Xe=parseInt(ve.getAttribute("tabindex")||"0");return Le>Xe?1:Le<Xe?-1:0}),b=i.querySelectorAll(lt),E=Array.from(b).filter(P=>P.getAttribute("tabindex")!=="-1");return[...new Set(A.concat(E))].filter(P=>q(P))},dt=()=>ke(document.body,g.shown)&&!ke(document.body,g["toast-shown"])&&!ke(document.body,g["no-backdrop"]),ct=()=>{let i=S();return i?ke(i,g.toast):!1},Lt=()=>{let i=S();return i?i.hasAttribute("data-loading"):!1},H=(i,l)=>{if(i.textContent="",l){let b=new DOMParser().parseFromString(l,"text/html"),E=b.querySelector("head");E&&Array.from(E.childNodes).forEach(ve=>{i.appendChild(ve)});let P=b.querySelector("body");P&&Array.from(P.childNodes).forEach(ve=>{ve instanceof HTMLVideoElement||ve instanceof HTMLAudioElement?i.appendChild(ve.cloneNode(!0)):i.appendChild(ve)})}},ke=(i,l)=>{if(!l)return!1;let A=l.split(/\s+/);for(let b=0;b<A.length;b++)if(!i.classList.contains(A[b]))return!1;return!0},Tt=(i,l)=>{Array.from(i.classList).forEach(A=>{!Object.values(g).includes(A)&&!Object.values(x).includes(A)&&!Object.values(l.showClass||{}).includes(A)&&i.classList.remove(A)})},He=(i,l,A)=>{if(Tt(i,l),!l.customClass)return;let b=l.customClass[A];if(b){if(typeof b!="string"&&!b.forEach){f(`Invalid type of customClass.${A}! Expected string or iterable object, got "${typeof b}"`);return}Ae(i,b)}},qt=(i,l)=>{if(!l)return null;switch(l){case"select":case"textarea":case"file":return i.querySelector(`.${g.popup} > .${g[l]}`);case"checkbox":return i.querySelector(`.${g.popup} > .${g.checkbox} input`);case"radio":return i.querySelector(`.${g.popup} > .${g.radio} input:checked`)||i.querySelector(`.${g.popup} > .${g.radio} input:first-child`);case"range":return i.querySelector(`.${g.popup} > .${g.range} input`);default:return i.querySelector(`.${g.popup} > .${g.input}`)}},Gt=i=>{if(i.focus(),i.type!=="file"){let l=i.value;i.value="",i.value=l}},Rt=(i,l,A)=>{!i||!l||(typeof l=="string"&&(l=l.split(/\s+/).filter(Boolean)),l.forEach(b=>{Array.isArray(i)?i.forEach(E=>{A?E.classList.add(b):E.classList.remove(b)}):A?i.classList.add(b):i.classList.remove(b)}))},Ae=(i,l)=>{Rt(i,l,!0)},ze=(i,l)=>{Rt(i,l,!1)},_e=(i,l)=>{let A=Array.from(i.children);for(let b=0;b<A.length;b++){let E=A[b];if(E instanceof HTMLElement&&ke(E,l))return E}},st=(i,l,A)=>{A===`${parseInt(`${A}`)}`&&(A=parseInt(A)),A||parseInt(`${A}`)===0?i.style.setProperty(l,typeof A=="number"?`${A}px`:A):i.style.removeProperty(l)},Ee=(i,l="flex")=>{i&&(i.style.display=l)},Fe=i=>{i&&(i.style.display="none")},Jt=(i,l="block")=>{i&&new MutationObserver(()=>{ft(i,i.innerHTML,l)}).observe(i,{childList:!0,subtree:!0})},we=(i,l,A,b)=>{let E=i.querySelector(l);E&&E.style.setProperty(A,b)},ft=(i,l,A="flex")=>{l?Ee(i,A):Fe(i)},q=i=>!!(i&&(i.offsetWidth||i.offsetHeight||i.getClientRects().length)),Y=()=>!q($())&&!q(ue())&&!q(re()),X=i=>i.scrollHeight>i.clientHeight,ye=(i,l)=>{let A=i;for(;A&&A!==l;){if(X(A))return!0;A=A.parentElement}return!1},Me=i=>{let l=window.getComputedStyle(i),A=parseFloat(l.getPropertyValue("animation-duration")||"0"),b=parseFloat(l.getPropertyValue("transition-duration")||"0");return A>0||b>0},Xt=(i,l=!1)=>{let A=Be();A&&q(A)&&(l&&(A.style.transition="none",A.style.width="100%"),setTimeout(()=>{A.style.transition=`width ${i/1e3}s linear`,A.style.width="0%"},10))},M=()=>{let i=Be();if(!i)return;let l=parseInt(window.getComputedStyle(i).width);i.style.removeProperty("transition"),i.style.width="100%";let A=parseInt(window.getComputedStyle(i).width),b=l/A*100;i.style.width=`${b}%`},oe=()=>typeof window>"u"||typeof document>"u",Qe=`
 <div aria-labelledby="${g.title}" aria-describedby="${g["html-container"]}" class="${g.popup}" tabindex="-1">
   <button type="button" class="${g.close}"></button>
   <ul class="${g["progress-steps"]}"></ul>
   <div class="${g.icon}"></div>
   <img class="${g.image}" />
   <h2 class="${g.title}" id="${g.title}"></h2>
   <div class="${g["html-container"]}" id="${g["html-container"]}"></div>
   <input class="${g.input}" id="${g.input}" />
   <input type="file" class="${g.file}" />
   <div class="${g.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${g.select}" id="${g.select}"></select>
   <div class="${g.radio}"></div>
   <label class="${g.checkbox}">
     <input type="checkbox" id="${g.checkbox}" />
     <span class="${g.label}"></span>
   </label>
   <textarea class="${g.textarea}" id="${g.textarea}"></textarea>
   <div class="${g["validation-message"]}" id="${g["validation-message"]}"></div>
   <div class="${g.actions}">
     <div class="${g.loader}"></div>
     <button type="button" class="${g.confirm}"></button>
     <button type="button" class="${g.deny}"></button>
     <button type="button" class="${g.cancel}"></button>
   </div>
   <div class="${g.footer}"></div>
   <div class="${g["timer-progress-bar-container"]}">
     <div class="${g["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),je=()=>{let i=F();return i?(i.remove(),ze([document.documentElement,document.body],[g["no-backdrop"],g["toast-shown"],g["has-column"]]),!0):!1},Ne=()=>{s.currentInstance.resetValidationMessage()},bt=()=>{let i=S(),l=_e(i,g.input),A=_e(i,g.file),b=i.querySelector(`.${g.range} input`),E=i.querySelector(`.${g.range} output`),P=_e(i,g.select),ve=i.querySelector(`.${g.checkbox} input`),Le=_e(i,g.textarea);l.oninput=Ne,A.onchange=Ne,P.onchange=Ne,ve.onchange=Ne,Le.oninput=Ne,b.oninput=()=>{Ne(),E.value=b.value},b.onchange=()=>{Ne(),E.value=b.value}},bn=i=>typeof i=="string"?document.querySelector(i):i,na=i=>{let l=S();l.setAttribute("role",i.toast?"alert":"dialog"),l.setAttribute("aria-live",i.toast?"polite":"assertive"),i.toast||l.setAttribute("aria-modal","true")},M0=i=>{window.getComputedStyle(i).direction==="rtl"&&Ae(F(),g.rtl)},N0=i=>{let l=je();if(oe()){v("SweetAlert2 requires document to initialize");return}let A=document.createElement("div");A.className=g.container,l&&Ae(A,g["no-transition"]),H(A,Qe),A.dataset.swal2Theme=i.theme;let b=bn(i.target);b.appendChild(A),i.topLayer&&(A.setAttribute("popover",""),A.showPopover()),na(i),M0(b),bt()},Fi=(i,l)=>{i instanceof HTMLElement?l.appendChild(i):typeof i=="object"?L0(i,l):i&&H(l,i)},L0=(i,l)=>{i.jquery?T0(l,i):H(l,i.toString())},T0=(i,l)=>{if(i.textContent="",0 in l)for(let A=0;A in l;A++)i.appendChild(l[A].cloneNode(!0));else i.appendChild(l.cloneNode(!0))},q0=(i,l)=>{let A=xe(),b=ae();!A||!b||(!l.showConfirmButton&&!l.showDenyButton&&!l.showCancelButton?Fe(A):Ee(A),He(A,l,"actions"),G0(A,b,l),H(b,l.loaderHtml||""),He(b,l,"loader"))};function G0(i,l,A){let b=$(),E=ue(),P=re();!b||!E||!P||(Ni(b,"confirm",A),Ni(E,"deny",A),Ni(P,"cancel",A),R0(b,E,P,A),A.reverseButtons&&(A.toast?(i.insertBefore(P,b),i.insertBefore(E,b)):(i.insertBefore(P,l),i.insertBefore(E,l),i.insertBefore(b,l))))}function R0(i,l,A,b){if(!b.buttonsStyling){ze([i,l,A],g.styled);return}Ae([i,l,A],g.styled),b.confirmButtonColor&&i.style.setProperty("--swal2-confirm-button-background-color",b.confirmButtonColor),b.denyButtonColor&&l.style.setProperty("--swal2-deny-button-background-color",b.denyButtonColor),b.cancelButtonColor&&A.style.setProperty("--swal2-cancel-button-background-color",b.cancelButtonColor),Mi(i),Mi(l),Mi(A)}function Mi(i){let l=window.getComputedStyle(i);if(l.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;let A=l.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");i.style.setProperty("--swal2-action-button-focus-box-shadow",l.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${A}`))}function Ni(i,l,A){let b=m(l);ft(i,A[`show${b}Button`],"inline-block"),H(i,A[`${l}ButtonText`]||""),i.setAttribute("aria-label",A[`${l}ButtonAriaLabel`]||""),i.className=g[l],He(i,A,`${l}Button`)}let $0=(i,l)=>{let A=nt();A&&(H(A,l.closeButtonHtml||""),He(A,l,"closeButton"),ft(A,l.showCloseButton),A.setAttribute("aria-label",l.closeButtonAriaLabel||""))},_0=(i,l)=>{let A=F();A&&(U0(A,l.backdrop),P0(A,l.position),H0(A,l.grow),He(A,l,"container"))};function U0(i,l){typeof l=="string"?i.style.background=l:l||Ae([document.documentElement,document.body],g["no-backdrop"])}function P0(i,l){l&&(l in g?Ae(i,g[l]):(f('The "position" parameter is not valid, defaulting to "center"'),Ae(i,g.center)))}function H0(i,l){l&&Ae(i,g[`grow-${l}`])}var Ue={innerParams:new WeakMap,domCache:new WeakMap};let z0=["input","file","range","select","radio","checkbox","textarea"],J0=(i,l)=>{let A=S();if(!A)return;let b=Ue.innerParams.get(i),E=!b||l.input!==b.input;z0.forEach(P=>{let ve=_e(A,g[P]);ve&&(K0(P,l.inputAttributes),ve.className=g[P],E&&Fe(ve))}),l.input&&(E&&O0(l),Y0(l))},O0=i=>{if(!i.input)return;if(!at[i.input]){v(`Unexpected type of input! Expected ${Object.keys(at).join(" | ")}, got "${i.input}"`);return}let l=ed(i.input);if(!l)return;let A=at[i.input](l,i);Ee(l),i.inputAutoFocus&&setTimeout(()=>{Gt(A)})},j0=i=>{for(let l=0;l<i.attributes.length;l++){let A=i.attributes[l].name;["id","type","value","style"].includes(A)||i.removeAttribute(A)}},K0=(i,l)=>{let A=S();if(!A)return;let b=qt(A,i);if(b){j0(b);for(let E in l)b.setAttribute(E,l[E])}},Y0=i=>{if(!i.input)return;let l=ed(i.input);l&&He(l,i,"input")},Li=(i,l)=>{!i.placeholder&&l.inputPlaceholder&&(i.placeholder=l.inputPlaceholder)},aa=(i,l,A)=>{if(A.inputLabel){let b=document.createElement("label"),E=g["input-label"];b.setAttribute("for",i.id),b.className=E,typeof A.customClass=="object"&&Ae(b,A.customClass.inputLabel),b.innerText=A.inputLabel,l.insertAdjacentElement("beforebegin",b)}},ed=i=>{let l=S();if(l)return _e(l,g[i]||g.input)},Ja=(i,l)=>{["string","number"].includes(typeof l)?i.value=`${l}`:L(l)||f(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof l}"`)},at={};at.text=at.email=at.password=at.number=at.tel=at.url=at.search=at.date=at["datetime-local"]=at.time=at.week=at.month=(i,l)=>(Ja(i,l.inputValue),aa(i,i,l),Li(i,l),i.type=l.input,i),at.file=(i,l)=>(aa(i,i,l),Li(i,l),i),at.range=(i,l)=>{let A=i.querySelector("input"),b=i.querySelector("output");return Ja(A,l.inputValue),A.type=l.input,Ja(b,l.inputValue),aa(A,i,l),i},at.select=(i,l)=>{if(i.textContent="",l.inputPlaceholder){let A=document.createElement("option");H(A,l.inputPlaceholder),A.value="",A.disabled=!0,A.selected=!0,i.appendChild(A)}return aa(i,i,l),i},at.radio=i=>(i.textContent="",i),at.checkbox=(i,l)=>{let A=qt(S(),"checkbox");A.value="1",A.checked=!!l.inputValue;let b=i.querySelector("span");return H(b,l.inputPlaceholder||l.inputLabel),A},at.textarea=(i,l)=>{Ja(i,l.inputValue),Li(i,l),aa(i,i,l);let A=b=>parseInt(window.getComputedStyle(b).marginLeft)+parseInt(window.getComputedStyle(b).marginRight);return setTimeout(()=>{if("MutationObserver"in window){let b=parseInt(window.getComputedStyle(S()).width),E=()=>{if(!document.body.contains(i))return;let P=i.offsetWidth+A(i);P>b?S().style.width=`${P}px`:st(S(),"width",l.width)};new MutationObserver(E).observe(i,{attributes:!0,attributeFilter:["style"]})}}),i};let W0=(i,l)=>{let A=te();A&&(Jt(A),He(A,l,"htmlContainer"),l.html?(Fi(l.html,A),Ee(A,"block")):l.text?(A.textContent=l.text,Ee(A,"block")):Fe(A),J0(i,l))},Z0=(i,l)=>{let A=Ie();A&&(Jt(A),ft(A,!!l.footer,"block"),l.footer&&Fi(l.footer,A),He(A,l,"footer"))},X0=(i,l)=>{let A=Ue.innerParams.get(i),b=U();if(!b)return;if(A&&l.icon===A.icon){nd(b,l),td(b,l);return}if(!l.icon&&!l.iconHtml){Fe(b);return}if(l.icon&&Object.keys(x).indexOf(l.icon)===-1){v(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${l.icon}"`),Fe(b);return}Ee(b),nd(b,l),td(b,l),Ae(b,l.showClass&&l.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",rd)},td=(i,l)=>{for(let[A,b]of Object.entries(x))l.icon!==A&&ze(i,b);Ae(i,l.icon&&x[l.icon]),ru(i,l),rd(),He(i,l,"icon")},rd=()=>{let i=S();if(!i)return;let l=window.getComputedStyle(i).getPropertyValue("background-color"),A=i.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let b=0;b<A.length;b++)A[b].style.backgroundColor=l},eu=i=>`
  ${i.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${i.animation?'<div class="swal2-success-fix"></div>':""}
  ${i.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,tu=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,nd=(i,l)=>{if(!l.icon&&!l.iconHtml)return;let A=i.innerHTML,b="";l.iconHtml?b=ad(l.iconHtml):l.icon==="success"?(b=eu(l),A=A.replace(/ style=".*?"/g,"")):l.icon==="error"?b=tu:l.icon&&(b=ad({question:"?",warning:"!",info:"i"}[l.icon])),A.trim()!==b.trim()&&H(i,b)},ru=(i,l)=>{if(l.iconColor){i.style.color=l.iconColor,i.style.borderColor=l.iconColor;for(let A of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])we(i,A,"background-color",l.iconColor);we(i,".swal2-success-ring","border-color",l.iconColor)}},ad=i=>`<div class="${g["icon-content"]}">${i}</div>`,nu=(i,l)=>{let A=j();if(A){if(!l.imageUrl){Fe(A);return}Ee(A,""),A.setAttribute("src",l.imageUrl),A.setAttribute("alt",l.imageAlt||""),st(A,"width",l.imageWidth),st(A,"height",l.imageHeight),A.className=g.image,He(A,l,"image")}},Ti=!1,od=0,id=0,sd=0,ld=0,au=i=>{i.addEventListener("mousedown",Oa),document.body.addEventListener("mousemove",ja),i.addEventListener("mouseup",Ka),i.addEventListener("touchstart",Oa),document.body.addEventListener("touchmove",ja),i.addEventListener("touchend",Ka)},ou=i=>{i.removeEventListener("mousedown",Oa),document.body.removeEventListener("mousemove",ja),i.removeEventListener("mouseup",Ka),i.removeEventListener("touchstart",Oa),document.body.removeEventListener("touchmove",ja),i.removeEventListener("touchend",Ka)},Oa=i=>{let l=S();if(i.target===l||U().contains(i.target)){Ti=!0;let A=dd(i);od=A.clientX,id=A.clientY,sd=parseInt(l.style.insetInlineStart)||0,ld=parseInt(l.style.insetBlockStart)||0,Ae(l,"swal2-dragging")}},ja=i=>{let l=S();if(Ti){let{clientX:A,clientY:b}=dd(i);l.style.insetInlineStart=`${sd+(A-od)}px`,l.style.insetBlockStart=`${ld+(b-id)}px`}},Ka=()=>{let i=S();Ti=!1,ze(i,"swal2-dragging")},dd=i=>{let l=0,A=0;return i.type.startsWith("mouse")?(l=i.clientX,A=i.clientY):i.type.startsWith("touch")&&(l=i.touches[0].clientX,A=i.touches[0].clientY),{clientX:l,clientY:A}},iu=(i,l)=>{let A=F(),b=S();if(!(!A||!b)){if(l.toast){st(A,"width",l.width),b.style.width="100%";let E=ae();E&&b.insertBefore(E,U())}else st(b,"width",l.width);st(b,"padding",l.padding),l.color&&(b.style.color=l.color),l.background&&(b.style.background=l.background),Fe(T()),su(b,l),l.draggable&&!l.toast?(Ae(b,g.draggable),au(b)):(ze(b,g.draggable),ou(b))}},su=(i,l)=>{let A=l.showClass||{};i.className=`${g.popup} ${q(i)?A.popup:""}`,l.toast?(Ae([document.documentElement,document.body],g["toast-shown"]),Ae(i,g.toast)):Ae(i,g.modal),He(i,l,"popup"),typeof l.customClass=="string"&&Ae(i,l.customClass),l.icon&&Ae(i,g[`icon-${l.icon}`])},lu=(i,l)=>{let A=ee();if(!A)return;let{progressSteps:b,currentProgressStep:E}=l;if(!b||b.length===0||E===void 0){Fe(A);return}Ee(A),A.textContent="",E>=b.length&&f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),b.forEach((P,ve)=>{let Le=du(P);if(A.appendChild(Le),ve===E&&Ae(Le,g["active-progress-step"]),ve!==b.length-1){let Xe=cu(l);A.appendChild(Xe)}})},du=i=>{let l=document.createElement("li");return Ae(l,g["progress-step"]),H(l,i),l},cu=i=>{let l=document.createElement("li");return Ae(l,g["progress-step-line"]),i.progressStepsDistance&&st(l,"width",i.progressStepsDistance),l},Au=(i,l)=>{let A=O();A&&(Jt(A),ft(A,!!(l.title||l.titleText),"block"),l.title&&Fi(l.title,A),l.titleText&&(A.innerText=l.titleText),He(A,l,"title"))},cd=(i,l)=>{iu(i,l),_0(i,l),lu(i,l),X0(i,l),nu(i,l),Au(i,l),$0(i,l),W0(i,l),q0(i,l),Z0(i,l);let A=S();typeof l.didRender=="function"&&A&&l.didRender(A),s.eventEmitter.emit("didRender",A)},gu=()=>q(S()),Ad=()=>{var i;return(i=$())===null||i===void 0?void 0:i.click()},uu=()=>{var i;return(i=ue())===null||i===void 0?void 0:i.click()},pu=()=>{var i;return(i=re())===null||i===void 0?void 0:i.click()},mn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),gd=i=>{i.keydownTarget&&i.keydownHandlerAdded&&(i.keydownTarget.removeEventListener("keydown",i.keydownHandler,{capture:i.keydownListenerCapture}),i.keydownHandlerAdded=!1)},hu=(i,l,A)=>{gd(i),l.toast||(i.keydownHandler=b=>bu(l,b,A),i.keydownTarget=l.keydownListenerCapture?window:S(),i.keydownListenerCapture=l.keydownListenerCapture,i.keydownTarget.addEventListener("keydown",i.keydownHandler,{capture:i.keydownListenerCapture}),i.keydownHandlerAdded=!0)},qi=(i,l)=>{var A;let b=$e();if(b.length){i=i+l,i===-2&&(i=b.length-1),i===b.length?i=0:i===-1&&(i=b.length-1),b[i].focus();return}(A=S())===null||A===void 0||A.focus()},ud=["ArrowRight","ArrowDown"],fu=["ArrowLeft","ArrowUp"],bu=(i,l,A)=>{i&&(l.isComposing||l.keyCode===229||(i.stopKeydownPropagation&&l.stopPropagation(),l.key==="Enter"?mu(l,i):l.key==="Tab"?wu(l):[...ud,...fu].includes(l.key)?vu(l.key):l.key==="Escape"&&yu(l,i,A)))},mu=(i,l)=>{if(!I(l.allowEnterKey))return;let A=qt(S(),l.input);if(i.target&&A&&i.target instanceof HTMLElement&&i.target.outerHTML===A.outerHTML){if(["textarea","file"].includes(l.input))return;Ad(),i.preventDefault()}},wu=i=>{let l=i.target,A=$e(),b=-1;for(let E=0;E<A.length;E++)if(l===A[E]){b=E;break}i.shiftKey?qi(b,-1):qi(b,1),i.stopPropagation(),i.preventDefault()},vu=i=>{let l=xe(),A=$(),b=ue(),E=re();if(!l||!A||!b||!E)return;let P=[A,b,E];if(document.activeElement instanceof HTMLElement&&!P.includes(document.activeElement))return;let ve=ud.includes(i)?"nextElementSibling":"previousElementSibling",Le=document.activeElement;if(Le){for(let Xe=0;Xe<l.children.length;Xe++){if(Le=Le[ve],!Le)return;if(Le instanceof HTMLButtonElement&&q(Le))break}Le instanceof HTMLButtonElement&&Le.focus()}},yu=(i,l,A)=>{i.preventDefault(),I(l.allowEscapeKey)&&A(mn.esc)};var wn={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};let xu=()=>{let i=F();Array.from(document.body.children).forEach(A=>{A.contains(i)||(A.hasAttribute("aria-hidden")&&A.setAttribute("data-previous-aria-hidden",A.getAttribute("aria-hidden")||""),A.setAttribute("aria-hidden","true"))})},pd=()=>{Array.from(document.body.children).forEach(l=>{l.hasAttribute("data-previous-aria-hidden")?(l.setAttribute("aria-hidden",l.getAttribute("data-previous-aria-hidden")||""),l.removeAttribute("data-previous-aria-hidden")):l.removeAttribute("aria-hidden")})},hd=typeof window<"u"&&!!window.GestureEvent,ku=()=>{if(hd&&!ke(document.body,g.iosfix)){let i=document.body.scrollTop;document.body.style.top=`${i*-1}px`,Ae(document.body,g.iosfix),Vu()}},Vu=()=>{let i=F();if(!i)return;let l;i.ontouchstart=A=>{l=Cu(A)},i.ontouchmove=A=>{l&&(A.preventDefault(),A.stopPropagation())}},Cu=i=>{let l=i.target,A=F(),b=te();return!A||!b||Iu(i)||Bu(i)?!1:l===A||!X(A)&&l instanceof HTMLElement&&!ye(l,b)&&l.tagName!=="INPUT"&&l.tagName!=="TEXTAREA"&&!(X(b)&&b.contains(l))},Iu=i=>i.touches&&i.touches.length&&i.touches[0].touchType==="stylus",Bu=i=>i.touches&&i.touches.length>1,Eu=()=>{if(ke(document.body,g.iosfix)){let i=parseInt(document.body.style.top,10);ze(document.body,g.iosfix),document.body.style.top="",document.body.scrollTop=i*-1}},Qu=()=>{let i=document.createElement("div");i.className=g["scrollbar-measure"],document.body.appendChild(i);let l=i.getBoundingClientRect().width-i.clientWidth;return document.body.removeChild(i),l},vn=null,Su=i=>{vn===null&&(document.body.scrollHeight>window.innerHeight||i==="scroll")&&(vn=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${vn+Qu()}px`)},Du=()=>{vn!==null&&(document.body.style.paddingRight=`${vn}px`,vn=null)};function fd(i,l,A,b){ct()?md(i,b):(c(A).then(()=>md(i,b)),gd(s)),hd?(l.setAttribute("style","display:none !important"),l.removeAttribute("class"),l.innerHTML=""):l.remove(),dt()&&(Du(),Eu(),pd()),Fu()}function Fu(){ze([document.documentElement,document.body],[g.shown,g["height-auto"],g["no-backdrop"],g["toast-shown"]])}function Mr(i){i=Nu(i);let l=wn.swalPromiseResolve.get(this),A=Mu(this);this.isAwaitingPromise?i.isDismissed||(oa(this),l(i)):A&&l(i)}let Mu=i=>{let l=S();if(!l)return!1;let A=Ue.innerParams.get(i);if(!A||ke(l,A.hideClass.popup))return!1;ze(l,A.showClass.popup),Ae(l,A.hideClass.popup);let b=F();return ze(b,A.showClass.backdrop),Ae(b,A.hideClass.backdrop),Lu(i,l,A),!0};function bd(i){let l=wn.swalPromiseReject.get(this);oa(this),l&&l(i)}let oa=i=>{i.isAwaitingPromise&&(delete i.isAwaitingPromise,Ue.innerParams.get(i)||i._destroy())},Nu=i=>typeof i>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},i),Lu=(i,l,A)=>{var b;let E=F(),P=Me(l);typeof A.willClose=="function"&&A.willClose(l),(b=s.eventEmitter)===null||b===void 0||b.emit("willClose",l),P?Tu(i,l,E,A.returnFocus,A.didClose):fd(i,E,A.returnFocus,A.didClose)},Tu=(i,l,A,b,E)=>{s.swalCloseEventFinishedCallback=fd.bind(null,i,A,b,E);let P=function(ve){if(ve.target===l){var Le;(Le=s.swalCloseEventFinishedCallback)===null||Le===void 0||Le.call(s),delete s.swalCloseEventFinishedCallback,l.removeEventListener("animationend",P),l.removeEventListener("transitionend",P)}};l.addEventListener("animationend",P),l.addEventListener("transitionend",P)},md=(i,l)=>{setTimeout(()=>{var A;typeof l=="function"&&l.bind(i.params)(),(A=s.eventEmitter)===null||A===void 0||A.emit("didClose"),i._destroy&&i._destroy()})},yn=i=>{let l=S();if(l||new to,l=S(),!l)return;let A=ae();ct()?Fe(U()):qu(l,i),Ee(A),l.setAttribute("data-loading","true"),l.setAttribute("aria-busy","true"),l.focus()},qu=(i,l)=>{let A=xe(),b=ae();!A||!b||(!l&&q($())&&(l=$()),Ee(A),l&&(Fe(l),b.setAttribute("data-button-to-replace",l.className),A.insertBefore(b,l)),Ae([i,A],g.loading))},Gu=(i,l)=>{l.input==="select"||l.input==="radio"?Pu(i,l):["text","email","number","tel","textarea"].some(A=>A===l.input)&&(B(l.inputValue)||L(l.inputValue))&&(yn($()),Hu(i,l))},Ru=(i,l)=>{let A=i.getInput();if(!A)return null;switch(l.input){case"checkbox":return $u(A);case"radio":return _u(A);case"file":return Uu(A);default:return l.inputAutoTrim?A.value.trim():A.value}},$u=i=>i.checked?1:0,_u=i=>i.checked?i.value:null,Uu=i=>i.files&&i.files.length?i.getAttribute("multiple")!==null?i.files:i.files[0]:null,Pu=(i,l)=>{let A=S();if(!A)return;let b=E=>{l.input==="select"?zu(A,Ya(E),l):l.input==="radio"&&Ju(A,Ya(E),l)};B(l.inputOptions)||L(l.inputOptions)?(yn($()),Q(l.inputOptions).then(E=>{i.hideLoading(),b(E)})):typeof l.inputOptions=="object"?b(l.inputOptions):v(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof l.inputOptions}`)},Hu=(i,l)=>{let A=i.getInput();A&&(Fe(A),Q(l.inputValue).then(b=>{A.value=l.input==="number"?`${parseFloat(b)||0}`:`${b}`,Ee(A),A.focus(),i.hideLoading()}).catch(b=>{v(`Error in inputValue promise: ${b}`),A.value="",Ee(A),A.focus(),i.hideLoading()}))};function zu(i,l,A){let b=_e(i,g.select);if(!b)return;let E=(P,ve,Le)=>{let Xe=document.createElement("option");Xe.value=Le,H(Xe,ve),Xe.selected=wd(Le,A.inputValue),P.appendChild(Xe)};l.forEach(P=>{let ve=P[0],Le=P[1];if(Array.isArray(Le)){let Xe=document.createElement("optgroup");Xe.label=ve,Xe.disabled=!1,b.appendChild(Xe),Le.forEach(kn=>E(Xe,kn[1],kn[0]))}else E(b,Le,ve)}),b.focus()}function Ju(i,l,A){let b=_e(i,g.radio);if(!b)return;l.forEach(P=>{let ve=P[0],Le=P[1],Xe=document.createElement("input"),kn=document.createElement("label");Xe.type="radio",Xe.name=g.radio,Xe.value=ve,wd(ve,A.inputValue)&&(Xe.checked=!0);let Ui=document.createElement("span");H(Ui,Le),Ui.className=g.label,kn.appendChild(Xe),kn.appendChild(Ui),b.appendChild(kn)});let E=b.querySelectorAll("input");E.length&&E[0].focus()}let Ya=i=>{let l=[];return i instanceof Map?i.forEach((A,b)=>{let E=A;typeof E=="object"&&(E=Ya(E)),l.push([b,E])}):Object.keys(i).forEach(A=>{let b=i[A];typeof b=="object"&&(b=Ya(b)),l.push([A,b])}),l},wd=(i,l)=>!!l&&l.toString()===i.toString(),Ou=i=>{let l=Ue.innerParams.get(i);i.disableButtons(),l.input?vd(i,"confirm"):Ri(i,!0)},ju=i=>{let l=Ue.innerParams.get(i);i.disableButtons(),l.returnInputValueOnDeny?vd(i,"deny"):Gi(i,!1)},Ku=(i,l)=>{i.disableButtons(),l(mn.cancel)},vd=(i,l)=>{let A=Ue.innerParams.get(i);if(!A.input){v(`The "input" parameter is needed to be set when using returnInputValueOn${m(l)}`);return}let b=i.getInput(),E=Ru(i,A);A.inputValidator?Yu(i,E,l):b&&!b.checkValidity()?(i.enableButtons(),i.showValidationMessage(A.validationMessage||b.validationMessage)):l==="deny"?Gi(i,E):Ri(i,E)},Yu=(i,l,A)=>{let b=Ue.innerParams.get(i);i.disableInput(),Promise.resolve().then(()=>Q(b.inputValidator(l,b.validationMessage))).then(P=>{i.enableButtons(),i.enableInput(),P?i.showValidationMessage(P):A==="deny"?Gi(i,l):Ri(i,l)})},Gi=(i,l)=>{let A=Ue.innerParams.get(i||void 0);A.showLoaderOnDeny&&yn(ue()),A.preDeny?(i.isAwaitingPromise=!0,Promise.resolve().then(()=>Q(A.preDeny(l,A.validationMessage))).then(E=>{E===!1?(i.hideLoading(),oa(i)):i.close({isDenied:!0,value:typeof E>"u"?l:E})}).catch(E=>xd(i||void 0,E))):i.close({isDenied:!0,value:l})},yd=(i,l)=>{i.close({isConfirmed:!0,value:l})},xd=(i,l)=>{i.rejectPromise(l)},Ri=(i,l)=>{let A=Ue.innerParams.get(i||void 0);A.showLoaderOnConfirm&&yn(),A.preConfirm?(i.resetValidationMessage(),i.isAwaitingPromise=!0,Promise.resolve().then(()=>Q(A.preConfirm(l,A.validationMessage))).then(E=>{q(T())||E===!1?(i.hideLoading(),oa(i)):yd(i,typeof E>"u"?l:E)}).catch(E=>xd(i||void 0,E))):yd(i,l)};function Wa(){let i=Ue.innerParams.get(this);if(!i)return;let l=Ue.domCache.get(this);Fe(l.loader),ct()?i.icon&&Ee(U()):Wu(l),ze([l.popup,l.actions],g.loading),l.popup.removeAttribute("aria-busy"),l.popup.removeAttribute("data-loading"),l.confirmButton.disabled=!1,l.denyButton.disabled=!1,l.cancelButton.disabled=!1}let Wu=i=>{let l=i.popup.getElementsByClassName(i.loader.getAttribute("data-button-to-replace"));l.length?Ee(l[0],"inline-block"):Y()&&Fe(i.actions)};function kd(){let i=Ue.innerParams.get(this),l=Ue.domCache.get(this);return l?qt(l.popup,i.input):null}function Vd(i,l,A){let b=Ue.domCache.get(i);l.forEach(E=>{b[E].disabled=A})}function Cd(i,l){let A=S();if(!(!A||!i))if(i.type==="radio"){let b=A.querySelectorAll(`[name="${g.radio}"]`);for(let E=0;E<b.length;E++)b[E].disabled=l}else i.disabled=l}function Id(){Vd(this,["confirmButton","denyButton","cancelButton"],!1)}function Bd(){Vd(this,["confirmButton","denyButton","cancelButton"],!0)}function Ed(){Cd(this.getInput(),!1)}function Qd(){Cd(this.getInput(),!0)}function Sd(i){let l=Ue.domCache.get(this),A=Ue.innerParams.get(this);H(l.validationMessage,i),l.validationMessage.className=g["validation-message"],A.customClass&&A.customClass.validationMessage&&Ae(l.validationMessage,A.customClass.validationMessage),Ee(l.validationMessage);let b=this.getInput();b&&(b.setAttribute("aria-invalid","true"),b.setAttribute("aria-describedby",g["validation-message"]),Gt(b),Ae(b,g.inputerror))}function Dd(){let i=Ue.domCache.get(this);i.validationMessage&&Fe(i.validationMessage);let l=this.getInput();l&&(l.removeAttribute("aria-invalid"),l.removeAttribute("aria-describedby"),ze(l,g.inputerror))}let xn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},Zu=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],Xu={allowEnterKey:void 0},ep=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Fd=i=>Object.prototype.hasOwnProperty.call(xn,i),Md=i=>Zu.indexOf(i)!==-1,Nd=i=>Xu[i],tp=i=>{Fd(i)||f(`Unknown parameter "${i}"`)},rp=i=>{ep.includes(i)&&f(`The parameter "${i}" is incompatible with toasts`)},np=i=>{let l=Nd(i);l&&V(i,l)},Ld=i=>{i.backdrop===!1&&i.allowOutsideClick&&f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),i.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(i.theme)&&f(`Invalid theme "${i.theme}"`);for(let l in i)tp(l),i.toast&&rp(l),np(l)};function Td(i){let l=F(),A=S(),b=Ue.innerParams.get(this);if(!A||ke(A,b.hideClass.popup)){f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}let E=ap(i),P=Object.assign({},b,E);Ld(P),l.dataset.swal2Theme=P.theme,cd(this,P),Ue.innerParams.set(this,P),Object.defineProperties(this,{params:{value:Object.assign({},this.params,i),writable:!1,enumerable:!0}})}let ap=i=>{let l={};return Object.keys(i).forEach(A=>{Md(A)?l[A]=i[A]:f(`Invalid parameter to update: ${A}`)}),l};function qd(){let i=Ue.domCache.get(this),l=Ue.innerParams.get(this);if(!l){Gd(this);return}i.popup&&s.swalCloseEventFinishedCallback&&(s.swalCloseEventFinishedCallback(),delete s.swalCloseEventFinishedCallback),typeof l.didDestroy=="function"&&l.didDestroy(),s.eventEmitter.emit("didDestroy"),op(this)}let op=i=>{Gd(i),delete i.params,delete s.keydownHandler,delete s.keydownTarget,delete s.currentInstance},Gd=i=>{i.isAwaitingPromise?($i(Ue,i),i.isAwaitingPromise=!0):($i(wn,i),$i(Ue,i),delete i.isAwaitingPromise,delete i.disableButtons,delete i.enableButtons,delete i.getInput,delete i.disableInput,delete i.enableInput,delete i.hideLoading,delete i.disableLoading,delete i.showValidationMessage,delete i.resetValidationMessage,delete i.close,delete i.closePopup,delete i.closeModal,delete i.closeToast,delete i.rejectPromise,delete i.update,delete i._destroy)},$i=(i,l)=>{for(let A in i)i[A].delete(l)};var ip=Object.freeze({__proto__:null,_destroy:qd,close:Mr,closeModal:Mr,closePopup:Mr,closeToast:Mr,disableButtons:Bd,disableInput:Qd,disableLoading:Wa,enableButtons:Id,enableInput:Ed,getInput:kd,handleAwaitingPromise:oa,hideLoading:Wa,rejectPromise:bd,resetValidationMessage:Dd,showValidationMessage:Sd,update:Td});let sp=(i,l,A)=>{i.toast?lp(i,l,A):(cp(l),Ap(l),gp(i,l,A))},lp=(i,l,A)=>{l.popup.onclick=()=>{i&&(dp(i)||i.timer||i.input)||A(mn.close)}},dp=i=>!!(i.showConfirmButton||i.showDenyButton||i.showCancelButton||i.showCloseButton),Za=!1,cp=i=>{i.popup.onmousedown=()=>{i.container.onmouseup=function(l){i.container.onmouseup=()=>{},l.target===i.container&&(Za=!0)}}},Ap=i=>{i.container.onmousedown=l=>{l.target===i.container&&l.preventDefault(),i.popup.onmouseup=function(A){i.popup.onmouseup=()=>{},(A.target===i.popup||A.target instanceof HTMLElement&&i.popup.contains(A.target))&&(Za=!0)}}},gp=(i,l,A)=>{l.container.onclick=b=>{if(Za){Za=!1;return}b.target===l.container&&I(i.allowOutsideClick)&&A(mn.backdrop)}},up=i=>typeof i=="object"&&i.jquery,Rd=i=>i instanceof Element||up(i),pp=i=>{let l={};return typeof i[0]=="object"&&!Rd(i[0])?Object.assign(l,i[0]):["title","html","icon"].forEach((A,b)=>{let E=i[b];typeof E=="string"||Rd(E)?l[A]=E:E!==void 0&&v(`Unexpected type of ${A}! Expected "string" or "Element", got ${typeof E}`)}),l};function hp(...i){return new this(...i)}function fp(i){class l extends this{_main(b,E){return super._main(b,Object.assign({},i,E))}}return l}let bp=()=>s.timeout&&s.timeout.getTimerLeft(),$d=()=>{if(s.timeout)return M(),s.timeout.stop()},_d=()=>{if(s.timeout){let i=s.timeout.start();return Xt(i),i}},mp=()=>{let i=s.timeout;return i&&(i.running?$d():_d())},wp=i=>{if(s.timeout){let l=s.timeout.increase(i);return Xt(l,!0),l}},vp=()=>!!(s.timeout&&s.timeout.isRunning()),Ud=!1,_i={};function yp(i="data-swal-template"){_i[i]=this,Ud||(document.body.addEventListener("click",xp),Ud=!0)}let xp=i=>{for(let l=i.target;l&&l!==document;l=l.parentNode)for(let A in _i){let b=l.getAttribute(A);if(b){_i[A].fire({template:b});return}}};class kp{constructor(){this.events={}}_getHandlersByEventName(l){return typeof this.events[l]>"u"&&(this.events[l]=[]),this.events[l]}on(l,A){let b=this._getHandlersByEventName(l);b.includes(A)||b.push(A)}once(l,A){let b=(...E)=>{this.removeListener(l,b),A.apply(this,E)};this.on(l,b)}emit(l,...A){this._getHandlersByEventName(l).forEach(b=>{try{b.apply(this,A)}catch(E){console.error(E)}})}removeListener(l,A){let b=this._getHandlersByEventName(l),E=b.indexOf(A);E>-1&&b.splice(E,1)}removeAllListeners(l){this.events[l]!==void 0&&(this.events[l].length=0)}reset(){this.events={}}}s.eventEmitter=new kp;var Vp=Object.freeze({__proto__:null,argsToParams:pp,bindClickHandler:yp,clickCancel:pu,clickConfirm:Ad,clickDeny:uu,enableLoading:yn,fire:hp,getActions:xe,getCancelButton:re,getCloseButton:nt,getConfirmButton:$,getContainer:F,getDenyButton:ue,getFocusableElements:$e,getFooter:Ie,getHtmlContainer:te,getIcon:U,getIconContent:de,getImage:j,getInputLabel:he,getLoader:ae,getPopup:S,getProgressSteps:ee,getTimerLeft:bp,getTimerProgressBar:Be,getTitle:O,getValidationMessage:T,increaseTimer:wp,isDeprecatedParameter:Nd,isLoading:Lt,isTimerRunning:vp,isUpdatableParameter:Md,isValidParameter:Fd,isVisible:gu,mixin:fp,off:(i,l)=>{if(!i){s.eventEmitter.reset();return}l?s.eventEmitter.removeListener(i,l):s.eventEmitter.removeAllListeners(i)},on:(i,l)=>{s.eventEmitter.on(i,l)},once:(i,l)=>{s.eventEmitter.once(i,l)},resumeTimer:_d,showLoading:yn,stopTimer:$d,toggleTimer:mp});class Cp{constructor(l,A){this.callback=l,this.remaining=A,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(l){let A=this.running;return A&&this.stop(),this.remaining+=l,A&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}let Pd=["swal-title","swal-html","swal-footer"],Ip=i=>{let l=typeof i.template=="string"?document.querySelector(i.template):i.template;if(!l)return{};let A=l.content;return Np(A),Object.assign(Bp(A),Ep(A),Qp(A),Sp(A),Dp(A),Fp(A),Mp(A,Pd))},Bp=i=>{let l={};return Array.from(i.querySelectorAll("swal-param")).forEach(b=>{Jr(b,["name","value"]);let E=b.getAttribute("name"),P=b.getAttribute("value");!E||!P||(typeof xn[E]=="boolean"?l[E]=P!=="false":typeof xn[E]=="object"?l[E]=JSON.parse(P):l[E]=P)}),l},Ep=i=>{let l={};return Array.from(i.querySelectorAll("swal-function-param")).forEach(b=>{let E=b.getAttribute("name"),P=b.getAttribute("value");!E||!P||(l[E]=new Function(`return ${P}`)())}),l},Qp=i=>{let l={};return Array.from(i.querySelectorAll("swal-button")).forEach(b=>{Jr(b,["type","color","aria-label"]);let E=b.getAttribute("type");!E||!["confirm","cancel","deny"].includes(E)||(l[`${E}ButtonText`]=b.innerHTML,l[`show${m(E)}Button`]=!0,b.hasAttribute("color")&&(l[`${E}ButtonColor`]=b.getAttribute("color")),b.hasAttribute("aria-label")&&(l[`${E}ButtonAriaLabel`]=b.getAttribute("aria-label")))}),l},Sp=i=>{let l={},A=i.querySelector("swal-image");return A&&(Jr(A,["src","width","height","alt"]),A.hasAttribute("src")&&(l.imageUrl=A.getAttribute("src")||void 0),A.hasAttribute("width")&&(l.imageWidth=A.getAttribute("width")||void 0),A.hasAttribute("height")&&(l.imageHeight=A.getAttribute("height")||void 0),A.hasAttribute("alt")&&(l.imageAlt=A.getAttribute("alt")||void 0)),l},Dp=i=>{let l={},A=i.querySelector("swal-icon");return A&&(Jr(A,["type","color"]),A.hasAttribute("type")&&(l.icon=A.getAttribute("type")),A.hasAttribute("color")&&(l.iconColor=A.getAttribute("color")),l.iconHtml=A.innerHTML),l},Fp=i=>{let l={},A=i.querySelector("swal-input");A&&(Jr(A,["type","label","placeholder","value"]),l.input=A.getAttribute("type")||"text",A.hasAttribute("label")&&(l.inputLabel=A.getAttribute("label")),A.hasAttribute("placeholder")&&(l.inputPlaceholder=A.getAttribute("placeholder")),A.hasAttribute("value")&&(l.inputValue=A.getAttribute("value")));let b=Array.from(i.querySelectorAll("swal-input-option"));return b.length&&(l.inputOptions={},b.forEach(E=>{Jr(E,["value"]);let P=E.getAttribute("value");if(!P)return;let ve=E.innerHTML;l.inputOptions[P]=ve})),l},Mp=(i,l)=>{let A={};for(let b in l){let E=l[b],P=i.querySelector(E);P&&(Jr(P,[]),A[E.replace(/^swal-/,"")]=P.innerHTML.trim())}return A},Np=i=>{let l=Pd.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(i.children).forEach(A=>{let b=A.tagName.toLowerCase();l.includes(b)||f(`Unrecognized element <${b}>`)})},Jr=(i,l)=>{Array.from(i.attributes).forEach(A=>{l.indexOf(A.name)===-1&&f([`Unrecognized attribute "${A.name}" on <${i.tagName.toLowerCase()}>.`,`${l.length?`Allowed attributes are: ${l.join(", ")}`:"To set the value, use HTML within the element."}`])})},Hd=10,Lp=i=>{let l=F(),A=S();typeof i.willOpen=="function"&&i.willOpen(A),s.eventEmitter.emit("willOpen",A);let E=window.getComputedStyle(document.body).overflowY;Gp(l,A,i),setTimeout(()=>{Tp(l,A)},Hd),dt()&&(qp(l,i.scrollbarPadding,E),xu()),!ct()&&!s.previousActiveElement&&(s.previousActiveElement=document.activeElement),typeof i.didOpen=="function"&&setTimeout(()=>i.didOpen(A)),s.eventEmitter.emit("didOpen",A)},Xa=i=>{let l=S();if(i.target!==l)return;let A=F();l.removeEventListener("animationend",Xa),l.removeEventListener("transitionend",Xa),A.style.overflowY="auto",ze(A,g["no-transition"])},Tp=(i,l)=>{Me(l)?(i.style.overflowY="hidden",l.addEventListener("animationend",Xa),l.addEventListener("transitionend",Xa)):i.style.overflowY="auto"},qp=(i,l,A)=>{ku(),l&&A!=="hidden"&&Su(A),setTimeout(()=>{i.scrollTop=0})},Gp=(i,l,A)=>{Ae(i,A.showClass.backdrop),A.animation?(l.style.setProperty("opacity","0","important"),Ee(l,"grid"),setTimeout(()=>{Ae(l,A.showClass.popup),l.style.removeProperty("opacity")},Hd)):Ee(l,"grid"),Ae([document.documentElement,document.body],g.shown),A.heightAuto&&A.backdrop&&!A.toast&&Ae([document.documentElement,document.body],g["height-auto"])};var zd={email:(i,l)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(i)?Promise.resolve():Promise.resolve(l||"Invalid email address"),url:(i,l)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(i)?Promise.resolve():Promise.resolve(l||"Invalid URL")};function Rp(i){i.inputValidator||(i.input==="email"&&(i.inputValidator=zd.email),i.input==="url"&&(i.inputValidator=zd.url))}function $p(i){(!i.target||typeof i.target=="string"&&!document.querySelector(i.target)||typeof i.target!="string"&&!i.target.appendChild)&&(f('Target parameter is not valid, defaulting to "body"'),i.target="body")}function _p(i){Rp(i),i.showLoaderOnConfirm&&!i.preConfirm&&f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),$p(i),typeof i.title=="string"&&(i.title=i.title.split(`
`).join("<br />")),N0(i)}let nr;var eo=new WeakMap;class ot{constructor(...l){if(n(this,eo,void 0),typeof window>"u")return;nr=this;let A=Object.freeze(this.constructor.argsToParams(l));this.params=A,this.isAwaitingPromise=!1,a(eo,this,this._main(nr.params))}_main(l,A={}){if(Ld(Object.assign({},A,l)),s.currentInstance){let P=wn.swalPromiseResolve.get(s.currentInstance),{isAwaitingPromise:ve}=s.currentInstance;s.currentInstance._destroy(),ve||P({isDismissed:!0}),dt()&&pd()}s.currentInstance=nr;let b=Pp(l,A);_p(b),Object.freeze(b),s.timeout&&(s.timeout.stop(),delete s.timeout),clearTimeout(s.restoreFocusTimeout);let E=Hp(nr);return cd(nr,b),Ue.innerParams.set(nr,b),Up(nr,E,b)}then(l){return r(eo,this).then(l)}finally(l){return r(eo,this).finally(l)}}let Up=(i,l,A)=>new Promise((b,E)=>{let P=ve=>{i.close({isDismissed:!0,dismiss:ve,isConfirmed:!1,isDenied:!1})};wn.swalPromiseResolve.set(i,b),wn.swalPromiseReject.set(i,E),l.confirmButton.onclick=()=>{Ou(i)},l.denyButton.onclick=()=>{ju(i)},l.cancelButton.onclick=()=>{Ku(i,P)},l.closeButton.onclick=()=>{P(mn.close)},sp(A,l,P),hu(s,A,P),Gu(i,A),Lp(A),zp(s,A,P),Jp(l,A),setTimeout(()=>{l.container.scrollTop=0})}),Pp=(i,l)=>{let A=Ip(i),b=Object.assign({},xn,l,A,i);return b.showClass=Object.assign({},xn.showClass,b.showClass),b.hideClass=Object.assign({},xn.hideClass,b.hideClass),b.animation===!1&&(b.showClass={backdrop:"swal2-noanimation"},b.hideClass={}),b},Hp=i=>{let l={popup:S(),container:F(),actions:xe(),confirmButton:$(),denyButton:ue(),cancelButton:re(),loader:ae(),closeButton:nt(),validationMessage:T(),progressSteps:ee()};return Ue.domCache.set(i,l),l},zp=(i,l,A)=>{let b=Be();Fe(b),l.timer&&(i.timeout=new Cp(()=>{A("timer"),delete i.timeout},l.timer),l.timerProgressBar&&(Ee(b),He(b,l,"timerProgressBar"),setTimeout(()=>{i.timeout&&i.timeout.running&&Xt(l.timer)})))},Jp=(i,l)=>{if(!l.toast){if(!I(l.allowEnterKey)){V("allowEnterKey"),Kp();return}Op(i)||jp(i,l)||qi(-1,1)}},Op=i=>{let l=Array.from(i.popup.querySelectorAll("[autofocus]"));for(let A of l)if(A instanceof HTMLElement&&q(A))return A.focus(),!0;return!1},jp=(i,l)=>l.focusDeny&&q(i.denyButton)?(i.denyButton.focus(),!0):l.focusCancel&&q(i.cancelButton)?(i.cancelButton.focus(),!0):l.focusConfirm&&q(i.confirmButton)?(i.confirmButton.focus(),!0):!1,Kp=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};ot.prototype.disableButtons=Bd,ot.prototype.enableButtons=Id,ot.prototype.getInput=kd,ot.prototype.disableInput=Qd,ot.prototype.enableInput=Ed,ot.prototype.hideLoading=Wa,ot.prototype.disableLoading=Wa,ot.prototype.showValidationMessage=Sd,ot.prototype.resetValidationMessage=Dd,ot.prototype.close=Mr,ot.prototype.closePopup=Mr,ot.prototype.closeModal=Mr,ot.prototype.closeToast=Mr,ot.prototype.rejectPromise=bd,ot.prototype.update=Td,ot.prototype._destroy=qd,Object.assign(ot,Vp),Object.keys(ip).forEach(i=>{ot[i]=function(...l){return nr&&nr[i]?nr[i](...l):null}}),ot.DismissReason=mn,ot.version="11.26.3";let to=ot;return to.default=to,to});typeof or<"u"&&or.Sweetalert2&&(or.swal=or.sweetAlert=or.Swal=or.SweetAlert=or.Sweetalert2);typeof document<"u"&&function(e,t){var r=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(r),r.styleSheet)r.styleSheet.disabled||(r.styleSheet.cssText=t);else try{r.innerHTML=t}catch{r.innerText=t}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}')});var Jc=no((y3,Do)=>{var Gb=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var K=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,n={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function m(f){return f instanceof o?new o(f.type,m(f.content),f.alias):Array.isArray(f)?f.map(m):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++r}),m.__id},clone:function m(f,v){v=v||{};var y,h;switch(a.util.type(f)){case"Object":if(h=a.util.objId(f),v[h])return v[h];y={},v[h]=y;for(var V in f)f.hasOwnProperty(V)&&(y[V]=m(f[V],v));return y;case"Array":return h=a.util.objId(f),v[h]?v[h]:(y=[],v[h]=y,f.forEach(function(I,B){y[B]=m(I,v)}),y);default:return f}},getLanguage:function(m){for(;m;){var f=t.exec(m.className);if(f)return f[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,f){m.className=m.className.replace(RegExp(t,"gi"),""),m.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT"&&1<2)return document.currentScript;try{throw new Error}catch(y){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(y.stack)||[])[1];if(m){var f=document.getElementsByTagName("script");for(var v in f)if(f[v].src==m)return f[v]}return null}},isActive:function(m,f,v){for(var y="no-"+f;m;){var h=m.classList;if(h.contains(f))return!0;if(h.contains(y))return!1;m=m.parentElement}return!!v}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(m,f){var v=a.util.clone(a.languages[m]);for(var y in f)v[y]=f[y];return v},insertBefore:function(m,f,v,y){y=y||a.languages;var h=y[m],V={};for(var I in h)if(h.hasOwnProperty(I)){if(I==f)for(var B in v)v.hasOwnProperty(B)&&(V[B]=v[B]);v.hasOwnProperty(I)||(V[I]=h[I])}var Q=y[m];return y[m]=V,a.languages.DFS(a.languages,function(L,F){F===Q&&L!=m&&(this[L]=V)}),V},DFS:function m(f,v,y,h){h=h||{};var V=a.util.objId;for(var I in f)if(f.hasOwnProperty(I)){v.call(f,I,f[I],y||I);var B=f[I],Q=a.util.type(B);Q==="Object"&&!h[V(B)]?(h[V(B)]=!0,m(B,v,null,h)):Q==="Array"&&!h[V(B)]&&(h[V(B)]=!0,m(B,v,I,h))}}},plugins:{},highlightAll:function(m,f){a.highlightAllUnder(document,m,f)},highlightAllUnder:function(m,f,v){var y={callback:v,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),a.hooks.run("before-all-elements-highlight",y);for(var h=0,V;V=y.elements[h++];)a.highlightElement(V,f===!0,y.callback)},highlightElement:function(m,f,v){var y=a.util.getLanguage(m),h=a.languages[y];a.util.setLanguage(m,y);var V=m.parentElement;V&&V.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(V,y);var I=m.textContent,B={element:m,language:y,grammar:h,code:I};function Q(F){B.highlightedCode=F,a.hooks.run("before-insert",B),B.element.innerHTML=B.highlightedCode,a.hooks.run("after-highlight",B),a.hooks.run("complete",B),v&&v.call(B.element)}if(a.hooks.run("before-sanity-check",B),V=B.element.parentElement,V&&V.nodeName.toLowerCase()==="pre"&&!V.hasAttribute("tabindex")&&V.setAttribute("tabindex","0"),!B.code){a.hooks.run("complete",B),v&&v.call(B.element);return}if(a.hooks.run("before-highlight",B),!B.grammar){Q(a.util.encode(B.code));return}if(f&&e.Worker){var L=new Worker(a.filename);L.onmessage=function(F){Q(F.data)},L.postMessage(JSON.stringify({language:B.language,code:B.code,immediateClose:!0}))}else Q(a.highlight(B.code,B.grammar,B.language))},highlight:function(m,f,v){var y={code:m,grammar:f,language:v};if(a.hooks.run("before-tokenize",y),!y.grammar)throw new Error('The language "'+y.language+'" has no grammar.');return y.tokens=a.tokenize(y.code,y.grammar),a.hooks.run("after-tokenize",y),o.stringify(a.util.encode(y.tokens),y.language)},tokenize:function(m,f){var v=f.rest;if(v){for(var y in v)f[y]=v[y];delete f.rest}var h=new c;return u(h,h.head,m),d(m,h,f,h.head,0),g(h)},hooks:{all:{},add:function(m,f){var v=a.hooks.all;v[m]=v[m]||[],v[m].push(f)},run:function(m,f){var v=a.hooks.all[m];if(!(!v||!v.length))for(var y=0,h;h=v[y++];)h(f)}},Token:o};e.Prism=a;function o(m,f,v,y){this.type=m,this.content=f,this.alias=v,this.length=(y||"").length|0}o.stringify=function m(f,v){if(typeof f=="string")return f;if(Array.isArray(f)){var y="";return f.forEach(function(Q){y+=m(Q,v)}),y}var h={type:f.type,content:m(f.content,v),tag:"span",classes:["token",f.type],attributes:{},language:v},V=f.alias;V&&(Array.isArray(V)?Array.prototype.push.apply(h.classes,V):h.classes.push(V)),a.hooks.run("wrap",h);var I="";for(var B in h.attributes)I+=" "+B+'="'+(h.attributes[B]||"").replace(/"/g,"&quot;")+'"';return"<"+h.tag+' class="'+h.classes.join(" ")+'"'+I+">"+h.content+"</"+h.tag+">"};function s(m,f,v,y){m.lastIndex=f;var h=m.exec(v);if(h&&y&&h[1]){var V=h[1].length;h.index+=V,h[0]=h[0].slice(V)}return h}function d(m,f,v,y,h,V){for(var I in v)if(!(!v.hasOwnProperty(I)||!v[I])){var B=v[I];B=Array.isArray(B)?B:[B];for(var Q=0;Q<B.length;++Q){if(V&&V.cause==I+","+Q)return;var L=B[Q],F=L.inside,G=!!L.lookbehind,N=!!L.greedy,S=L.alias;if(N&&!L.pattern.global){var U=L.pattern.toString().match(/[imsuy]*$/)[0];L.pattern=RegExp(L.pattern.source,U+"g")}for(var de=L.pattern||L,O=y.next,te=h;O!==f.tail&&!(V&&te>=V.reach);te+=O.value.length,O=O.next){var j=O.value;if(f.length>m.length)return;if(!(j instanceof o)){var ee=1,T;if(N){if(T=s(de,te,m,G),!T||T.index>=m.length)break;var he=T.index,$=T.index+T[0].length,re=te;for(re+=O.value.length;he>=re;)O=O.next,re+=O.value.length;if(re-=O.value.length,te=re,O.value instanceof o)continue;for(var ue=O;ue!==f.tail&&(re<$||typeof ue.value=="string");ue=ue.next)ee++,re+=ue.value.length;ee--,j=m.slice(te,re),T.index-=te}else if(T=s(de,0,j,G),!T)continue;var he=T.index,ae=T[0],xe=j.slice(0,he),Ie=j.slice(he+ae.length),Be=te+j.length;V&&Be>V.reach&&(V.reach=Be);var nt=O.prev;xe&&(nt=u(f,nt,xe),te+=xe.length),p(f,nt,ee);var lt=new o(I,F?a.tokenize(ae,F):ae,S,ae);if(O=u(f,nt,lt),Ie&&u(f,O,Ie),ee>1){var $e={cause:I+","+Q,reach:Be};d(m,f,v,O.prev,te,$e),V&&$e.reach>V.reach&&(V.reach=$e.reach)}}}}}}function c(){var m={value:null,prev:null,next:null},f={value:null,prev:m,next:null};m.next=f,this.head=m,this.tail=f,this.length=0}function u(m,f,v){var y=f.next,h={value:v,prev:f,next:y};return f.next=h,y.prev=h,m.length++,h}function p(m,f,v){for(var y=f.next,h=0;h<v&&y!==m.tail;h++)y=y.next;f.next=y,y.prev=f,m.length-=h}function g(m){for(var f=[],v=m.head.next;v!==m.tail;)f.push(v.value),v=v.next;return f}if(!e.document)return e.addEventListener&&(a.disableWorkerMessageHandler||e.addEventListener("message",function(m){var f=JSON.parse(m.data),v=f.language,y=f.code,h=f.immediateClose;e.postMessage(a.highlight(y,a.languages[v],v)),h&&e.close()},!1)),a;var w=a.util.currentScript();w&&(a.filename=w.src,w.hasAttribute("data-manual")&&(a.manual=!0));function x(){a.manual||a.highlightAll()}if(!a.manual){var k=document.readyState;k==="loading"||k==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",x):window.requestAnimationFrame?window.requestAnimationFrame(x):window.setTimeout(x,16)}return a}(Gb);typeof Do<"u"&&Do.exports&&(Do.exports=K);typeof global<"u"&&(global.Prism=K);K.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};K.languages.markup.tag.inside["attr-value"].inside.entity=K.languages.markup.entity;K.languages.markup.doctype.inside["internal-subset"].inside=K.languages.markup;K.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(K.languages.markup.tag,"addInlined",{value:function(t,r){var n={};n["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:K.languages[r]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+r]={pattern:/[\s\S]+/,inside:K.languages[r]};var o={};o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:a},K.languages.insertBefore("markup","cdata",o)}});Object.defineProperty(K.languages.markup.tag,"addAttribute",{value:function(e,t){K.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:K.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});K.languages.html=K.languages.markup;K.languages.mathml=K.languages.markup;K.languages.svg=K.languages.markup;K.languages.xml=K.languages.extend("markup",{});K.languages.ssml=K.languages.xml;K.languages.atom=K.languages.xml;K.languages.rss=K.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(K);K.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};K.languages.javascript=K.languages.extend("clike",{"class-name":[K.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});K.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;K.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:K.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:K.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:K.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:K.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:K.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});K.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:K.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});K.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});K.languages.markup&&(K.languages.markup.tag.addInlined("script","javascript"),K.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));K.languages.js=K.languages.javascript;(function(){if(typeof K>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",t=function(w,x){return"\u2716 Error "+w+" while fetching file: "+x},r="\u2716 Error: File does not exist or is empty",n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",o="loading",s="loaded",d="failed",c="pre[data-src]:not(["+a+'="'+s+'"]):not(['+a+'="'+o+'"])';function u(w,x,k){var m=new XMLHttpRequest;m.open("GET",w,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?x(m.responseText):m.status>=400?k(t(m.status,m.statusText)):k(r))},m.send(null)}function p(w){var x=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(x){var k=Number(x[1]),m=x[2],f=x[3];return m?f?[k,Number(f)]:[k,void 0]:[k,k]}}K.hooks.add("before-highlightall",function(w){w.selector+=", "+c}),K.hooks.add("before-sanity-check",function(w){var x=w.element;if(x.matches(c)){w.code="",x.setAttribute(a,o);var k=x.appendChild(document.createElement("CODE"));k.textContent=e;var m=x.getAttribute("data-src"),f=w.language;if(f==="none"){var v=(/\.(\w+)$/.exec(m)||[,"none"])[1];f=n[v]||v}K.util.setLanguage(k,f),K.util.setLanguage(x,f);var y=K.plugins.autoloader;y&&y.loadLanguages(f),u(m,function(h){x.setAttribute(a,s);var V=p(x.getAttribute("data-range"));if(V){var I=h.split(/\r\n?|\n/g),B=V[0],Q=V[1]==null?I.length:V[1];B<0&&(B+=I.length),B=Math.max(0,Math.min(B-1,I.length)),Q<0&&(Q+=I.length),Q=Math.max(0,Math.min(Q,I.length)),h=I.slice(B,Q).join(`
`),x.hasAttribute("data-start")||x.setAttribute("data-start",String(B+1))}k.textContent=h,K.highlightElement(k)},function(h){x.setAttribute(a,d),k.textContent=h})}}),K.plugins.fileHighlight={highlight:function(x){for(var k=(x||document).querySelectorAll(c),m=0,f;f=k[m++];)K.highlightElement(f)}};var g=!1;K.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),K.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var Oc=no((x3,Rb)=>{Rb.exports={}});var jc=no((k3,$b)=>{$b.exports={}});var r3={};th(r3,{Checkout:()=>Jb,Error_1:()=>Ob,Features:()=>Pb,Home:()=>Ub,Invoice:()=>jb,Layout:()=>_b,MyAccount:()=>Kb,Runtime:()=>Wd,Success:()=>Yb,Support:()=>Hb,Warp:()=>zb});function At(e,t){return Object.assign(Object.create(e.prototype),t)}var nh=Symbol("force");function me(e){var t;function r(){return t||(t=e(a=>t=a)),t}return new Proxy(function(){},{get(a,o){return o==nh&&r(),r()[o]},set(a,o,s){return r()[o]=s,!0},construct(a,o,s){return Reflect.construct(r(),o,s)}})}function Od(e,t){for(var r=0;r<t.length;r++){var n=t[r];e[n]===void 0&&delete e[n]}return e}function Or(e){return e===void 0?null:{$:1,$0:e}}function Vn(e,t,r){r?e[t]=r.$0:delete e[t]}function jd(e){return function(...t){return e(t)}}function Kd(e){return Object.defineProperty(e,"resizable",{enumerable:!1,writable:!1,configurable:!1,value:!0}),e}var Yd=globalThis.WebSharperRuntime||{ScriptBasePath:"./",ScriptSkipAssemblyDir:!1};globalThis.WebSharperRuntime=Yd;var Wd=Yd;function Pi(e){return typeof e=="number"?e:typeof e=="string"?e.split(":").reverse().map(parseFloat).reduce((t,r,n)=>t+r*Math.pow(60,n)):void 0}function Zd(e,t){let r;return function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];clearTimeout(r),r=setTimeout(()=>e.apply(this,a),t)}}function Xd(e,t){let r=!0;return function(){if(r){r=!1;for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];e.apply(this,a),setTimeout(()=>r=!0,t)}}}var oo=class{log(){}debug(){}info(){}warn(){}error(){}},ia=class{constructor(t,r){this.logger=t,this.prefix=r}log(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];this.logger.log(`${this.prefix}${t}`,...n)}debug(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];this.logger.debug(`${this.prefix}${t}`,...n)}info(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];this.logger.info(`${this.prefix}${t}`,...n)}warn(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];this.logger.warn(`${this.prefix}${t}`,...n)}error(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];this.logger.error(`${this.prefix}${t}`,...n)}};var Ke,mr=new Array(128).fill(void 0);mr.push(void 0,null,!0,!1);function br(e){return mr[e]}function ji(e){let t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){let a=e.description;return a==null?"Symbol":`Symbol(${a})`}if(t=="function"){let a=e.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(e)){let a=e.length,o="[";a>0&&(o+=ji(e[0]));for(let s=1;s<a;s++)o+=", "+ji(e[s]);return o+="]",o}let r=/\[object ([^\]]+)\]/.exec(toString.call(e)),n;if(r.length>1)n=r[1];else return toString.call(e);if(n=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:n}var co=0,la=null;function so(){return(la===null||la.byteLength===0)&&(la=new Uint8Array(Ke.memory.buffer)),la}var lo=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},ah=typeof lo.encodeInto=="function"?function(e,t){return lo.encodeInto(e,t)}:function(e,t){let r=lo.encode(e);return t.set(r),{read:e.length,written:r.length}};function cc(e,t,r){if(r===void 0){let d=lo.encode(e),c=t(d.length,1)>>>0;return so().subarray(c,c+d.length).set(d),co=d.length,c}let n=e.length,a=t(n,1)>>>0,o=so(),s=0;for(;s<n;s++){let d=e.charCodeAt(s);if(d>127)break;o[a+s]=d}if(s!==n){s!==0&&(e=e.slice(s)),a=r(a,n,n=s+e.length*3,1)>>>0;let d=so().subarray(a+s,a+n),c=ah(e,d);s+=c.written,a=r(a,n,s,1)>>>0}return co=s,a}var da=null;function Ao(){return(da===null||da.byteLength===0)&&(da=new Int32Array(Ke.memory.buffer)),da}var Aa=mr.length;function oh(e){e<132||(mr[e]=Aa,Aa=e)}function Nr(e){let t=br(e);return oh(e),t}function fr(e){Aa===mr.length&&mr.push(mr.length+1);let t=Aa;return Aa=mr[t],mr[t]=e,t}var Ac=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Ac.decode();function Hi(e,t){return e=e>>>0,Ac.decode(so().subarray(e,e+t))}function ih(e,t,r){let n=Ke.create(e,t,r);return go.__wrap(n)}var ca=null;function sh(){return(ca===null||ca.byteLength===0)&&(ca=new Uint32Array(Ke.memory.buffer)),ca}function lh(e,t){return e=e>>>0,sh().subarray(e/4,e/4+t)}var ec=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>Ke.__wbg_vt_free(e>>>0)),go=class e{static __wrap(t){t=t>>>0;let r=Object.create(e.prototype);return r.__wbg_ptr=t,ec.register(r,r.__wbg_ptr,r),r}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,ec.unregister(this),t}free(){let t=this.__destroy_into_raw();Ke.__wbg_vt_free(t)}feed(t){let r=cc(t,Ke.__wbindgen_export_0,Ke.__wbindgen_export_1),n=co,a=Ke.vt_feed(this.__wbg_ptr,r,n);return Nr(a)}resize(t,r){let n=Ke.vt_resize(this.__wbg_ptr,t,r);return Nr(n)}getSize(){try{let a=Ke.__wbindgen_add_to_stack_pointer(-16);Ke.vt_getSize(a,this.__wbg_ptr);var t=Ao()[a/4+0],r=Ao()[a/4+1],n=lh(t,r).slice();return Ke.__wbindgen_export_2(t,r*4,4),n}finally{Ke.__wbindgen_add_to_stack_pointer(16)}}getLine(t){let r=Ke.vt_getLine(this.__wbg_ptr,t);return Nr(r)}getCursor(){let t=Ke.vt_getCursor(this.__wbg_ptr);return Nr(t)}};async function dh(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(n){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}let r=await e.arrayBuffer();return await WebAssembly.instantiate(r,t)}else{let r=await WebAssembly.instantiate(e,t);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}}function gc(){let e={};return e.wbg={},e.wbg.__wbindgen_is_string=function(t){return typeof br(t)=="string"},e.wbg.__wbg_new_b525de17f44a8943=function(){let t=new Array;return fr(t)},e.wbg.__wbg_set_17224bc548dd1d7b=function(t,r,n){br(t)[r>>>0]=Nr(n)},e.wbg.__wbindgen_debug_string=function(t,r){let n=ji(br(r)),a=cc(n,Ke.__wbindgen_export_0,Ke.__wbindgen_export_1),o=co;Ao()[t/4+1]=o,Ao()[t/4+0]=a},e.wbg.__wbindgen_object_drop_ref=function(t){Nr(t)},e.wbg.__wbindgen_number_new=function(t){return fr(t)},e.wbg.__wbindgen_bigint_from_u64=function(t){let r=BigInt.asUintN(64,t);return fr(r)},e.wbg.__wbindgen_error_new=function(t,r){let n=new Error(Hi(t,r));return fr(n)},e.wbg.__wbg_new_f9876326328f45ed=function(){let t=new Object;return fr(t)},e.wbg.__wbg_set_f975102236d3c502=function(t,r,n){br(t)[Nr(r)]=Nr(n)},e.wbg.__wbg_new_f841cc6f2098f4b5=function(){return fr(new Map)},e.wbg.__wbg_set_388c4c6422704173=function(t,r,n){let a=br(t).set(br(r),br(n));return fr(a)},e.wbg.__wbindgen_string_new=function(t,r){let n=Hi(t,r);return fr(n)},e.wbg.__wbindgen_object_clone_ref=function(t){let r=br(t);return fr(r)},e.wbg.__wbindgen_throw=function(t,r){throw new Error(Hi(t,r))},e}function uc(e,t){return Ke=e.exports,uo.__wbindgen_wasm_module=t,da=null,ca=null,la=null,Ke}function ch(e){if(Ke!==void 0)return Ke;let t=gc();e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e));let r=new WebAssembly.Instance(e,t);return uc(r,e)}async function uo(e){if(Ke!==void 0)return Ke;let t=gc();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));let{instance:r,module:n}=await dh(await e,t);return uc(r,n)}var Ah=Object.freeze({__proto__:null,Vt:go,create:ih,default:uo,initSync:ch}),gh=[62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];function io(e){return gh[e-43]}function uh(e){let t=e.endsWith("==")?2:e.endsWith("=")?1:0,r=e.length,n=new Uint8Array(3*(r/4)),a;for(let o=0,s=0;o<r;o+=4,s+=3)a=io(e.charCodeAt(o))<<18|io(e.charCodeAt(o+1))<<12|io(e.charCodeAt(o+2))<<6|io(e.charCodeAt(o+3)),n[s]=a>>16,n[s+1]=a>>8&255,n[s+2]=a&255;return n.subarray(0,n.length-t)}var tc=uh("AGFzbQEAAAABjAEVYAJ/fwBgA39/fwBgAn9/AX9gA39/fwF/YAF/AGAEf39/fwBgAX8Bf2AFf39/f38AYAV/f39/fwF/YAZ/f39/f38AYAABf2AEf39/fwF/YAZ/f39/f38Bf2ABfAF/YAF+AX9gA39/fgF/YAR/f39+AGAFf399f38AYAV/f35/fwBgBX9/fH9/AGAAAALOAw8Dd2JnFF9fd2JpbmRnZW5faXNfc3RyaW5nAAYDd2JnGl9fd2JnX25ld19iNTI1ZGUxN2Y0NGE4OTQzAAoDd2JnGl9fd2JnX3NldF8xNzIyNGJjNTQ4ZGQxZDdiAAEDd2JnF19fd2JpbmRnZW5fZGVidWdfc3RyaW5nAAADd2JnGl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmAAQDd2JnFV9fd2JpbmRnZW5fbnVtYmVyX25ldwANA3diZxpfX3diaW5kZ2VuX2JpZ2ludF9mcm9tX3U2NAAOA3diZxRfX3diaW5kZ2VuX2Vycm9yX25ldwACA3diZxpfX3diZ19uZXdfZjk4NzYzMjYzMjhmNDVlZAAKA3diZxpfX3diZ19zZXRfZjk3NTEwMjIzNmQzYzUwMgABA3diZxpfX3diZ19uZXdfZjg0MWNjNmYyMDk4ZjRiNQAKA3diZxpfX3diZ19zZXRfMzg4YzRjNjQyMjcwNDE3MwADA3diZxVfX3diaW5kZ2VuX3N0cmluZ19uZXcAAgN3YmcbX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmAAYDd2JnEF9fd2JpbmRnZW5fdGhyb3cAAAPMAcoBAwACAQMABAEIAQMDCAMBBQgHAwkCBwAJAQICAAMBCQcBAQUBBAEBAAYFBQIFAAACAgMHBQEAAQkFAwUCAQQBBwACDwIFBAAGAQEBAAYMBgEABQAACgEEBgEEAQAHAAMEEAcCAAEACQMHBAEEAAEAAAAABQIACAICAAECBAsHAQcLAAAAAAABBAAEAAEAAAAACwELDAcREggTBgcFAgMABAUEBAQDBAECAAICAQEEBAQBAgIAAAAAAgQBAQEGABQCAgAEAAAEAgYCBgQFAXABLi4FAwEAEQYJAX8BQYCAwAALB8oBDAZtZW1vcnkCAA1fX3diZ192dF9mcmVlAFQGY3JlYXRlACsHdnRfZmVlZAAPCXZ0X3Jlc2l6ZQBACnZ0X2dldFNpemUAPQp2dF9nZXRMaW5lABEMdnRfZ2V0Q3Vyc29yADcTX193YmluZGdlbl9leHBvcnRfMACCARNfX3diaW5kZ2VuX2V4cG9ydF8xAI8BH19fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIAywETX193YmluZGdlbl9leHBvcnRfMgC7AQlTAQBBAQstwQHWAdgBU9UBSdcBSsABxgEpuQGiAaYBRqMBpgGsAaoBowGjAaQBpwGlAdMB0AHRATquAXYozgG2AdIBxAG4Ab8B1AF+ngFSaRxxzwEMAREKnOQCygG0NQERfyMAQaABayIFJAAgBUEwaiAAEIMBIAEgAmohDyAFKAIwIgNB3ABqIQ0gA0HQAGohDiADQTBqIRAgA0EkaiERIANBDGohEiADQbIBaiEIIANBxAFqIQogBSgCNCETIAEhCwNAAkACQAJAAkACQAJAIAMCfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgCyAPRg0AAn8gCywAACIAQQBOBEAgAEH/AXEhACALQQFqDAELIAstAAFBP3EhBiAAQR9xIQQgAEFfTQRAIARBBnQgBnIhACALQQJqDAELIAstAAJBP3EgBkEGdHIhBiAAQXBJBEAgBiAEQQx0ciEAIAtBA2oMAQsgBEESdEGAgPAAcSALLQADQT9xIAZBBnRyciIAQYCAxABGDQEgC0EEagshC0HBACAAIABBnwFLGyEEAkACQAJAIAMtAMwFIgcOBQAEBAQBBAsgBEEga0HgAEkNAQwDCyAEQTBrQQxPDQIMIAsgBSAANgJAIAVBIToAPAwCCyAFQfAAaiILIANB4ABqKAIAIANB5ABqKAIAECcgBUEQaiADECogBSAFKQMQNwJ8IAVBCGogBSgCdCAFKAJ4EGcgBSgCDCEAIAUoAghBAXFFBEAgCxB4IAIEQCABQQEgAhBDCyATQQA2AgAgBUGgAWokACAADwsgBSAANgJMQaiAwABBKyAFQcwAakGYgMAAQdCCwAAQTgALAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIARB/wFxIgZBG0cEQCAGQdsARg0BIAcODQMEBQYHDggODg4CDgkOCyADQQE6AMwFIAoQMwxUCyAHDg0BIwMEBQ0GDQ0NAA0HDQsgBEEga0HfAEkNUgwLCwJAIARBGEkNACAEQRlGDQAgBEH8AXFBHEcNCwsgBUE8aiAAEFUMMgsgBEHwAXFBIEYNBiAEQTBrQSBJDQggBEHRAGtBB0kNCAJAIAZB2QBrDgUJCQAJHwALIARB4ABrQR9PDQkMCAsgBEEwa0HPAE8NCCADQQA6AMwFIAVBPGogCiAAEDQMMAsgBEEvSwRAIARBO0cgBEE6T3FFBEAgA0EEOgDMBQxPCyAEQUBqQT9JDQQLIARB/AFxQTxHDQcgAyAANgLEASADQQQ6AMwFDE4LIARBQGpBP0kNBCAEQfwBcUE8Rw0GDEsLIARBQGpBP08NBQxJCyAEQSBrQeAASQ1LAkAgBkEYaw4DBwYHAAsgBkGZAWtBAkkNBiAGQdAARg1LIAZBB0YNSAwFCyADQQA6AMwFIAVBPGogCiAAEBIMKwsgAyAANgLEASADQQI6AMwFDEkLIANBADoAzAUgBUE8aiAKIAAQEgwpCyADQQA6AMwFIAVBPGogCiAAEDQMKAsCQCAGQRhrDgMCAQIACyAGQZkBa0ECSQ0BIAZB0ABHDQAgB0EBaw4KFQMICQokCwwNDkYLIARB8AFxIglBgAFGDQAgBEGRAWtBBksNAQsgA0EAOgDMBSAFQTxqIAAQVQwlCyAJQSBHDQEgB0EERw0BDD8LIARB8AFxIQkMAQsgB0EBaw4KAQADBAUOBgcICQ4LIAlBIEcNAQw7CyAEQRhPDQoMCwsCQCAEQRhJDQAgBEEZRg0AIARB/AFxQRxHDQwLIAVBPGogABBVDB8LAkACQCAEQRhJDQAgBEEZRg0AIARB/AFxQRxHDQELIAVBPGogABBVDB8LIARB8AFxQSBGDTkMCgsCQCAEQRhJDQAgBEEZRg0AIARB/AFxQRxHDQoLIAVBPGogABBVDB0LIARBQGpBP08EQCAEQfABcSIJQSBGDTcgCUEwRg06DAkLIANBADoAzAUgBUE8aiAKIAAQEgwcCyAEQfwBcUE8Rg0DIARB8AFxQSBGDS8gBEFAakE/Tw0HDAQLIARBL00NBiAEQTpJDTggBEE7Rg04IARBQGpBPk0NAwwGCyAEQUBqQT9JDQIMBQsgBEEYSQ03IARBGUYNNyAEQfwBcUEcRg03DAQLIAMgADYCxAEgA0EIOgDMBQw2CyADQQo6AMwFDDULIAZB2ABrIglBB01BAEEBIAl0QcEBcRsNBSAGQRlGDQAgBEH8AXFBHEcNAQsgBUE8aiAAEFUMFAsgBkGQAWsOEAEFBQUFBQUFAwUFAi8AAwMECyADQQw6AMwFDDELIANBBzoAzAUgChAzDDALIANBAzoAzAUgChAzDC8LIANBDToAzAUMLgsCQCAGQTprDgIEAgALIAZBGUYNAgsgB0EDaw4HCSwDCgULBywLIAdBA2sOBwgrKwkFCgcrCyAHQQNrDgcHKgIIKgkGKgsgB0EDaw4HBikpBwkIBSkLIARBGEkNACAEQfwBcUEcRw0oCyAFQTxqIAAQVQwICyAEQTBrQQpPDSYLIANBCDoAzAUMJAsgBEHwAXFBIEYNHwsgBEHwAXFBMEcNIwwDCyAEQTpHDSIMIAsCQCAEQRhJDQAgBEEZRg0AIARB/AFxQRxHDSILIAVBPGogABBVDAILIARB8AFxQSBGDRUgBEE6Rg0AIARB/AFxQTxHDSALIANBCzoAzAUMHwsgBS0APCIAQTJGDR8CQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIABBAWsOMQIDBAUGBwgJCgsMDQ4PJRAmERITFBUWFxgZGhscHR4fACEiIyQlJicoKSorLC0wMTIBCyAFKAJAIQAMHwsgA0F+QX8gAygCaCADKAKcAUYbEJIBDD0LIAUvAT4hACAFIAMoAmg2AkwgBUEAOgB8IAUgA0HUAGooAgAiBDYCcCAFIAQgAygCWEECdGo2AnRBASAAIABBAU0bIQAgBSAFQcwAajYCeANAIABBAWsiAARAIAVB8ABqEF0NAQw2CwsgBUHwAGoQXSIARQ00IAAoAgAMNQsgA0EBIAUvAT4iACAAQQFNG0EBayIAIAMoApwBIgRBAWsgACAESRs2AmgMOwsgA0EBIAUvAT4iACAAQQFNGxA8DDoLIANBASAFLwE+IgAgAEEBTRsQaiADQQA2AmgMOQsgA0EBIAUvAT4iACAAQQFNGxBsIANBADYCaAw4CyADQQA2AmgMNwsCQCAFLQA9QQFrDgImABMLIANBADYCWAw2CyADQQEgBS8BPiIAIABBAU0bIgBBf3NBACAAayADKAJoIAMoApwBRhsQkgEMNQsgA0EBIAUvAT4iACAAQQFNGxBqDDQLIANBASAFLwE+IgAgAEEBTRsQkgEMMwsgA0EBIAUvAUAiACAAQQFNG0EBayIAIAMoApwBIgRBAWsgACAESRs2AmggA0EBIAUvAT4iACAAQQFNG0EBaxBfDDILIANBASAFLwE+IgAgAEEBTRsQbAwxCyADKAJoIgAgAygCnAEiBE8EQCADIARBAWsiADYCaAtBASAFLwE+IgQgBEEBTRsiBCADKAIYIABrIgYgBCAGSRshBCADIAMoAmxBrI3AABBtIgYoAgQgBigCCCAAQaSZwAAQnwEoAgRFBEAgBigCBCAGKAIIIABBAWtBtJnAABCfASIHQqCAgIAQNwIAIAcgCCkBADcBCCAHQRBqIAhBCGovAQA7AQALIAVBIGogBigCBCAGKAIIIABBxJnAABCMASAFKAIgIAUoAiQgBBCVASAGKAIEIAYoAgggAEHUmcAAEJ8BIgAoAgRFBEAgAEKggICAEDcCACAAIAgpAQA3AQggAEEQaiAIQQhqLwEAOwEACyAFQRhqIAYoAgQgBigCCCIAIAAgBGtB5JnAABCMASAFKAIYIQAgBSgCHCAFQfgAaiAIQQhqLwEAOwEAIAUgCCkBADcDcEEUbCEEA0AgBARAIABCoICAgBA3AgAgACAFKQNwNwIIIABBEGogBUH4AGovAQA7AQAgBEEUayEEIABBFGohAAwBCwsgBkEAOgAMIANB4ABqKAIAIANB5ABqKAIAIAMoAmwQoAEMMAsgAygCnAEhBiADKAKgASEHQQAhBANAIAQgB0YNMEEAIQADQCAAIAZGBEAgA0HgAGooAgAgA0HkAGooAgAgBBCgASAEQQFqIQQMAgUgBUEAOwB4IAVBAjoAdCAFQQI6AHAgAyAAIARBxQAgBUHwAGoQFxogAEEBaiEADAELAAsACwALIAUoAkghBCAFKAJEIQAgBSAFKAJANgJ4IAUgADYCcCAFIARBAXQiBCAAaiIGNgJ8A0AgBARAAkACQAJAAkACQAJAAkACQAJAAkAgAC8BACIHQQFrDgcBMTExMQIDAAsgB0GXCGsOAwQFBgMLIANBADoAwQEMBwsgA0IANwJoIANBADoAvgEMBgsgA0EAOgC/AQwFCyADQQA6AHAMBAsgAxB6DAILIAMQlgEMAgsgAxB6IAMQlgELIAMQFQsgAEECaiEAIARBAmshBAwBCwsgBSAGNgJ0IAVB8ABqEL4BDC4LIAUoAkghBCAFKAJEIQAgBSAFKAJANgJ4IAUgADYCcCAFIARBAXQiBCAAaiIHNgJ8A0AgBARAAkACQAJAAkACQAJAAkACQAJAIAAvAQAiBkEBaw4HAS8vLy8CAwALIAZBlwhrDgMGBAUDCyADQQE6AMEBDAYLIANBAToAvgEgA0EANgJoIAMgAygCqAE2AmwMBQsgA0EBOgC/AQwECyADQQE6AHAMAwsgAxBuDAILIAMQbgsjAEEwayIGJAAgAy0AvAFFBEAgA0EBOgC8ASADQfQAaiADQYgBahB/IAMgA0EkahCAASAGQQxqIgkgAygCnAEgAygCoAEiDEEBQQAgA0GyAWoQIiADQQxqELEBIAMgCUEkEBkiCSgCYCAJKAJkQQAgDBBgCyAGQTBqJAAgAxAVCyAAQQJqIQAgBEECayEEDAELCyAFIAc2AnQgBUHwAGoQvgEMLQsCQEEBIAUvAT4iACAAQQFNG0EBayIAIAUvAUAiBCADKAKgASIGIAQbQQFrIgRJIAQgBklxRQRAIAMoAqgBIQAMAQsgAyAENgKsASADIAA2AqgBCyADQQA2AmggAyAAQQAgAy0AvgEbNgJsDCwLIANBAToAcCADQQA7AL0BIANBADsBugEgA0ECOgC2ASADQQI6ALIBIANBADsBsAEgA0IANwKkASADQYCAgAg2AoQBIANBAjoAgAEgA0ECOgB8IANCADcCdCADIAMoAqABQQFrNgKsAQwrCyADKAKgASADKAKsASIAQQFqIAAgAygCbCIASRshBCADIAAgBEEBIAUvAT4iBiAGQQFNGyAIECAgA0HgAGooAgAgA0HkAGooAgAgACAEEGAMKgsgAyADKAJoIAMoAmwiAEEAQQEgBS8BPiIEIARBAU0bIAgQJiADQeAAaigCACADQeQAaigCACAAEKABDCkLAkACQAJAIAUtAD1BAWsOAwECKwALIAMgAygCaCADKAJsIgBBASAFIAgQJiADQeAAaigCACADQeQAaigCACAAIAMoAqABEGAMKgsgAyADKAJoIAMoAmwiAEECIAUgCBAmIANB4ABqKAIAIANB5ABqKAIAQQAgAEEBahBgDCkLIANBACADKAIcIAgQMSADQeAAaigCACADQeQAaigCAEEAIAMoAqABEGAMKAsgAyADKAJoIAMoAmwiACAFLQA9QQRyIAUgCBAmIANB4ABqKAIAIANB5ABqKAIAIAAQoAEMJwsgAyAFLQA9OgCxAQwmCyADIAUtAD06ALABDCULIANBARA8DCQLIwBBEGsiBiQAAkACQAJAIAMoAmgiCUUNACAJIAMoApwBTw0AIAZBCGogAygCVCIAIAMoAlgiBCAJEEcgBigCCEEBRw0AIAYoAgwiByAESw0BIANB0ABqIgwoAgAgBEYEfyAMQbiiwAAQdCADKAJUBSAACyAHQQJ0aiEAIAQgB0sEQCAAQQRqIAAgBCAHa0ECdBAWCyAAIAk2AgAgAyAEQQFqNgJYCyAGQRBqJAAMAQsgByAEQbiiwAAQWQALDCMLIAMoAmgiACADKAKcASIGRgRAIAMgAEEBayIANgJoCyADIAAgAygCbCIEQQEgBS8BPiIHIAdBAU0bIgcgBiAAayIGIAYgB0sbIgYgCBAkIAAgACAGaiIGIAAgBksbIQYDQCAAIAZHBEAgAyAAIARBICAIEBcaIABBAWohAAwBCwsgA0HgAGooAgAgA0HkAGooAgAgBBCgAQwiCyADKAKgASADKAKsASIAQQFqIAAgAygCbCIASRshBCADIAAgBEEBIAUvAT4iBiAGQQFNGyAIEEEgA0HgAGooAgAgA0HkAGooAgAgACAEEGAMIQsgAxBoIAMtAMABQQFHDSAgA0EANgJoDCALIAMQaCADQQA2AmgMHwsgAyAAECUMHgsgAygCaCIGRQ0dIAUvAT4hACADKAJsIQQgBUEoaiADEHsgBSgCLCIHIARNDRJBASAAIABBAU0bIQAgBSgCKCAEQQR0aiIEQQRqKAIAIARBCGooAgAgBkEBa0G0pcAAEJ8BKAIAIQQDQCAARQ0eIAMgBBAlIABBAWshAAwACwALIAMoAmwiACADKAKoAUYNEiAARQ0cIAMgAEEBaxBfDBwLIAVBzABqIgAgAygCnAEiBiADKAKgASIEIAMoAkggAygCTEEAECIgBUHwAGoiByAGIARBAUEAQQAQIiASELEBIAMgAEEkEBkhACAQELEBIBEgB0EkEBkaIABBADoAvAEgBUGUAWoiByAGEEQgACgCUCAAQdQAaigCAEEEQQQQrwEgDkEIaiAHQQhqIgYoAgA2AgAgDiAFKQKUATcCACAAQQA7AboBIABBAjoAtgEgAEECOgCyASAAQQE6AHAgAEIANwJoIABBADsBsAEgAEGAgAQ2AL0BIAAgBEEBazYCrAEgAEIANwKkASAAQYCAgAg2ApgBIABBAjoAlAEgAEECOgCQASAAQQA2AowBIABCgICACDcChAEgAEECOgCAASAAQQI6AHwgAEIANwJ0IAcgBBBiIAAoAlwgAEHgAGooAgBBAUEBEK8BIA1BCGogBigCADYCACANIAUpApQBNwIADBsLIAUoAkghBCAFKAJEIQAgBSAFKAJANgJ4IAUgADYCcCAFIARBAXQiBCAAaiIGNgJ8A0AgBARAAkAgAC8BAEEURwRAIANBADoAvQEMAQsgA0EAOgDAAQsgAEECaiEAIARBAmshBAwBCwsgBSAGNgJ0IAVB8ABqEL4BDBoLIAMQlgEMGQsgAxBuDBgLIANBASAFLwE+IgAgAEEBTRsQkwEMFwsgBSgCSEEFbCEEIAMtALsBIQYgBSgCQCAFKAJEIgwhAANAAkAgBEUNACAAKAABIQcCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAALQAAQQFrDhIBAgMEBQYHCAkKCwwNDg8QERMAC0EAIQYgA0EAOwG6ASADQQI6ALYBIANBAjoAsgEMEQsgA0EBOgC6AQwQCyADQQI6ALoBDA8LIAMgBkEBciIGOgC7AQwOCyADIAZBAnIiBjoAuwEMDQsgAyAGQQhyIgY6ALsBDAwLIAMgBkEQciIGOgC7AQwLCyADIAZBBHIiBjoAuwEMCgsgA0EAOgC6AQwJCyADIAZB/gFxIgY6ALsBDAgLIAMgBkH9AXEiBjoAuwEMBwsgAyAGQfcBcSIGOgC7AQwGCyADIAZB7wFxIgY6ALsBDAULIAMgBkH7AXEiBjoAuwEMBAsgCCAHNgEADAMLIAhBAjoAAAwCCyADIAc2AbYBDAELIANBAjoAtgELIABBBWohACAEQQVrIQQMAQsLIAxBAUEFEK8BDBYLIANBADYCpAEMFQsgBSgCSCEEIAUoAkQhACAFIAUoAkA2AnggBSAANgJwIAUgBEEBdCIEIABqIgY2AnwDQCAEBEACQCAALwEAQRRHBEAgA0EBOgC9AQwBCyADQQE6AMABCyAAQQJqIQAgBEECayEEDAELCyAFIAY2AnQgBUHwAGoQvgEMFAsgA0EBNgKkAQwTCyADQQEgBS8BPiIAIABBAU0bEJQBDBILIAUtAD0NAQsjAEEQayIAJAAgAEEIaiADKAJUIgcgAygCWCIEIAMoAmgQRwJAAkAgACgCCEUEQCAAKAIMIgYgBE8NASAHIAZBAnRqIgcgB0EEaiAEIAZBf3NqQQJ0EBYgAyAEQQFrNgJYCyAAQRBqJAAMAQsjAEEwayIAJAAgACAENgIEIAAgBjYCACAAQQM2AgwgAEHwhsAANgIIIABCAjcCFCAAIABBBGqtQoCAgICwAYQ3AyggACAArUKAgICAsAGENwMgIAAgAEEgajYCECAAQQhqQciiwAAQlwEACwwQCyADQQA2AlgMDwsgA0EBIAUvAT4iACAAQQFNG0EBaxBfDA4LIANBASAFLwE+IgAgAEEBTRsQagwNCyADLQDCAUEBRw0MIAMgBS8BPiIAIAMoApwBIAAbIAUvAUAiACADKAKgASAAGxAsDAwLIAMgADYCxAEgA0EJOgDMBQwKCyAEIAdBtKXAABBYAAsgA0EBEJMBDAkLAAtBAAsiACADKAKcASIEQQFrIAAgBEkbNgJoDAYLIAogADYCAAwECyADIAA2AsQBIANBBToAzAUMAwsgA0EAOgDMBQwCCyADQQY6AMwFDAELIAooAoQEIQQCQAJAAkACQAJAIABBOmsOAgEAAgsgCkEfIARBAWoiACAAQSBGGzYChAQMAwsgBEEgSQ0BIARBIEHgm8AAEFgACyAEQSBPBEAgBEEgQfCbwAAQWAALIAogBEEEdGpBBGoiBigCACIEQQZJBEAgBiAEQQF0akEEaiIEIAQvAQBBCmwgAEEwa0H/AXFqOwEADAILIARBBkGwocAAEFgACyAKIARBBHRqQQRqIgQoAgBBAWohACAEQQUgACAAQQVPGzYCAAsLIAVBMjoAPAwACwAL3xQBBn8jAEHAAmsiAiQAIAEoAgQhAwNAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAwRAIAJBuAJqIAEoAgAQciACKAK4AiEDIAIoArwCQQFrDgYBBQQFAgMFCyAAQRI6AAAMCwsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAy8BACIDDh4AAQIDBAUOBg4HDg4ODg4ODg4ODg4ICAkKCw4MDg0OCyACQagBakEBIAEoAgAgASgCBEHQnMAAEI4BIAEgAikDqAE3AgAgAEEAOgAADBgLIAJBsAFqQQEgASgCACABKAIEQeCcwAAQjgEgASACKQOwATcCACAAQQE6AAAMFwsgAkG4AWpBASABKAIAIAEoAgRB8JzAABCOASABIAIpA7gBNwIAIABBAjoAAAwWCyACQcABakEBIAEoAgAgASgCBEGAncAAEI4BIAEgAikDwAE3AgAgAEEDOgAADBULIAJByAFqQQEgASgCACABKAIEQZCdwAAQjgEgASACKQPIATcCACAAQQQ6AAAMFAsgAkHQAWpBASABKAIAIAEoAgRBoJ3AABCOASABIAIpA9ABNwIAIABBBToAAAwTCyACQdgBakEBIAEoAgAgASgCBEGwncAAEI4BIAEgAikD2AE3AgAgAEEGOgAADBILIAJB4AFqQQEgASgCACABKAIEQcCdwAAQjgEgASACKQPgATcCACAAQQc6AAAMEQsgAkHoAWpBASABKAIAIAEoAgRB0J3AABCOASABIAIpA+gBNwIAIABBCDoAAAwQCyACQfABakEBIAEoAgAgASgCBEHgncAAEI4BIAEgAikD8AE3AgAgAEEJOgAADA8LIAJB+AFqQQEgASgCACABKAIEQfCdwAAQjgEgASACKQP4ATcCACAAQQo6AAAMDgsgAkGAAmpBASABKAIAIAEoAgRBgJ7AABCOASABIAIpA4ACNwIAIABBCzoAAAwNCyACQYgCakEBIAEoAgAgASgCBEGQnsAAEI4BIAEgAikDiAI3AgAgAEEMOgAADAwLIAJBkAJqQQEgASgCACABKAIEQaCewAAQjgEgASACKQOQAjcCACAAQQ06AAAMCwsCQAJAIANBHmtB//8DcUEITwRAIANBJmsOAgEIAgsgAkEIakEBIAEoAgAgASgCBEHAoMAAEI4BIAEgAikDCDcCACAAIANBHms6AAIgAEEOOwAADAwLAkAgASgCBCIDQQJPBEAgAkGYAWogASgCAEEQahByIAIoApgBIgMNASABKAIEIQMLIAJB6ABqQQEgASgCACADQbCewAAQjgEgAigCbCEDIAIoAmghBAwNCwJAAkACQCACKAKc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IAEvARg7AQQgACABLwEIOwECDC4LIABBAzoAACAAIAEvAQg7AQIMLQsgAS8BCA4EFxgZGhYLIAEvAQgOAxscHRoLIABBHjoAACAAIAEvAQg7AQIMKgsgAEEVOgAAIAAgAS8BCDsBAgwpCyAAQQ06AAAgACABLwEIOwECDCgLIABBLToAACAAIAEvAQg7AQIMJwsgAEEoOgAAIAAgAS8BCDsBAgwmCyABLwEIDgYZGBoYGBsYCyAAQRY6AAAgACABLwEIOwECDCQLIABBAToAACAAIAEvAQg7AQIMIwsgAEECOgAAIAAgAS8BCDsBAgwiCyAAQQo6AAAgACABLwEIOwECDCELIABBIjoAACAAIAEvAQg7AQIMIAsgAEEvOgAAIAAgAS8BCDsBAgwfCyAAQTA6AAAgACABLwEIOwECDB4LIABBCzoAACAAIAEvARg7AQQgACABLwEIOwECDB0LIAEvAQgOBBQTExUTCyADIAQgASgChARBgJzAABCBASADQUBrIgEgAygCACICIAIgAygCBEEEdGoQLyADQTtqIAFBCGooAgA2AAAgAyADKQJANwAzIABBKzoAACAAIAMpADA3AAEgAEEIaiADQTdqKQAANwAADBsLIANBCGogBCABKAKEBEGQnMAAEIEBIANBQGsiASADKAIIIgIgAiADKAIMQQR0ahAvIANBO2ogAUEIaigCADYAACADIAMpAkA3ADMgAEElOgAAIAAgAykAMDcAASAAQQhqIANBN2opAAA3AAAMGgsgA0EYaiAEIAEoAoQEQaCcwAAQgQEgAyADKQMYNwJMIANB1gBqIANBzABqEBACfyADLQBWQRJGBEBBACEBQQAhBEEBDAELIANBEGpBBEEBQQVBlInAABBrIANB2gBqLQAAIQEgAygCECECIAMoAhQiBCADKABWNgAAIARBBGogAToAACADQQE2AjggAyAENgI0IAMgAjYCMCADIAMpAkw3AkBBBSECQQEhAQNAIANB2wBqIANBQGsQECADLQBbQRJGRQRAIAMoAjAgAUYEQCADQTBqIAFBAUEBQQUQdyADKAI0IQQLIAIgBGoiBSADKABbNgAAIAVBBGogA0HfAGotAAA6AAAgAyABQQFqIgE2AjggAkEFaiECDAELCyADKAIwIQQgAygCNAshAiAAIAE2AgwgACACNgIIIAAgBDYC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IAdBAWsiBw0ACwtBB0kNAANAIAMgBC0AADoAACADQQFqIARBAWotAAA6AAAgA0ECaiAEQQJqLQAAOgAAIANBA2ogBEEDai0AADoAACADQQRqIARBBGotAAA6AAAgA0EFaiAEQQVqLQAAOgAAIANBBmogBEEGai0AADoAACADQQdqIARBB2otAAA6AAAgBEEIaiEEIAUgA0EIaiIDRw0ACwsgAiAGayIHQXxxIgggBWohAwJAIAEgBmoiBEEDcUUEQCADIAVNDQEgBCEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgA0kNAAsMAQsgAyAFTQ0AIARBA3QiAkEYcSEGIARBfHEiCUEEaiEBQQAgAmtBGHEhCiAJKAIAIQIDQCACIAZ2IQkgBSAJIAEoAgAiAiAKdHI2AgAgAUEEaiEBIAVBBGoiBSADSQ0ACwsgB0EDcSECIAQgCGohAQsCQCACIANqIgYgA00NACACQQFrIAJBB3EiBARAA0AgAyABLQAAOgAAIAFBAWohASADQQFqIQMgBEEBayIEDQALC0EHSQ0AA0AgAyABLQAAOgAAIANBAWogAUEBai0AADoAACADQQJqIAFBAmotAAA6AAAgA0EDaiABQQNqLQAAOgAAIANBBGogAUEEai0AADoAACADQQVqIAFBBWotAAA6AAAgA0EGaiABQQZqLQAAOgAAIANBB2ogAUEHai0AADoAACABQQhqIQEgBiADQQhqIgNHDQALCyAAC+oEAQp/IwBBMGsiAyQAIAMgATYCLCADIAA2AiggA0EDOgAkIANCIDcCHCADQQA2AhQgA0EANgIMAn8CQAJAAkAgAigCECIKRQRAIAIoAgwiAEUNASACKAIIIgEgAEEDdGohBCAAQQFrQf////8BcUEBaiEHIAIoAgAhAANAIABBBGooAgAiBQRAIAMoAiggACgCACAFIAMoAiwoAgwRAwANBAsgASgCACADQQxqIAFBBGooAgARAgANAyAAQQhqIQAgBCABQQhqIgFHDQALDAELIAIoAhQiAEUNACAAQQV0IQsgAEEBa0H///8/cUEBaiEHIAIoAgghBSACKAIAIQADQCAAQQRqKAIAIgEEQCADKAIoIAAoAgAgASADKAIsKAIMEQMADQMLIAMgCCAKaiIBQRBqKAIANgIcIAMgAUEcai0AADoAJCADIAFB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QRBqIARBCGovAAA7AAALIAIgA0sNASABIANJDQIgA0EUbCIGIAJBFGwiAmshBSAAIAJqIQIgBEEIaiEHA0AgBQRAIAJCoICAgBA3AgAgAiAEKQAANwAIIAJBEGogBy8AADsAACAFQRRrIQUgAkEUaiECDAELCyABIANNDQAgACAGaiIAKAIEDQAgAEKggICAEDcCACAAIAQpAAA3AAggAEEQaiAEQQhqLwAAOwAACw8LIAIgA0G8lcAAEMoBAAsgAyABQbyVwAAQyAEAC4sCAQN/IwBBMGsiAyQAIAMgAjYCGCADIAE2AhQCQCADQRRqEGYiAUH//wNxQQNGBEAgAEEANgIIIABCgICAgCA3AgAMAQsgA0EIakEEQQJBAkGUicAAEGsgAygCCCECIAMoAgwiBCABOwEAIANBATYCJCADIAQ2AiAgAyACNgIcIAMgAykCFDcCKEECIQFBASECA0AgA0EoahBmIgVB//8DcUEDRkUEQCADKAIcIAJGBEAgA0EcaiACQQFBAkECEHcgAygCICEECyABIARqIAU7AQAgAyACQQFqIgI2AiQgAUECaiEBDAELCyAAIAMpAhw3AgAgAEEIaiADQSRqKAIANgIACyADQTBqJAALhQIBA38jAEEwayIDJAAgAyACNgIYIAMgATYCFAJAIANBFGoQW0H//wNxIgFFBEAgAEEANgIIIABCgICAgCA3AgAMAQsgA0EIakEEQQJBAkGUicAAEGsgAygCCCECIAMoAgwiBCABOwEAIANBATYCJCADIAQ2AiAgAyACNgIcIAMgAykCFDcCKEECIQFBASECA0AgA0EoahBbQf//A3EiBQRAIAMoAhwgAkYEQCADQRxqIAJBAUECQQIQdyADKAIgIQQLIAEgBGogBTsBACADIAJBAWoiAjYCJCABQQJqIQEMAQsLIAAgAykCHDcCACAAQQhqIANBJGooAgA2AgALIANBMGokAAuDAgECfyMAQTBrIgQkACAEQRBqIAAoAhggAxAyIARBCGogABB9IAQgASACIAQoAgggBCgCDEHcj8AAEHUCQCAEKAIEIgBFBEAgBCgCECAEKAIUQQRBFBCvAQwBCyAAQQR0IgFBEGshAyABIAQoAgAiAGoiAkEQayEBA0AgAwRAIARBIGoiBSAEQRBqEGEgACgCACAAQQRqKAIAQQRBFBCvASAA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ACIBBEAgAiABEQQACyAAKAIEIgEEQCACIAAoAgggARBDCwtCAQF/IwBBEGsiAyQAIANBCGogASACELUBIAMoAgwhASAAKAIIIAAoAgwQwgEgACABNgIMIABBATYCCCADQRBqJAALQgAgAC0AvAFBAUYEQCAAQQA6ALwBIABB9ABqIABBiAFqEH8gACAAQSRqEIABIAAoAmAgACgCZEEAIAAoAqABEGALC0EBA38gASgCFCICIAEoAhwiA2shBCACIANJBEAgBCACQbyPwAAQyQEACyAAIAM2AgQgACABKAIQIARBBHRqNgIAC0IBAX8jAEEgayIDJAAgA0EANgIQIANBATYCBCADQgQ3AgggAyABNgIcIAMgADYCGCADIANBGGo2AgAgAyACEJcBAAtBAQN/IAEoAhQiAiABKAIcIgNrIQQgAiADSQRAIAQgAkHMj8AAEMkBAAsgACADNgIEIAAgASgCECAEQQR0ajYCAAtEAQF/IAEoAgAiAiABKAIERgRAIABBgICAgHg2AgAPCyABIAJBEGo2AgAgACACKQIANwIAIABBCGogAkEIaikCADcCAAs7AQN/A0AgAkEURkUEQCAAIAJqIgMoAgAhBCADIAEgAmoiAygCADYCACADIAQ2AgAgAkEEaiECDAELCws7AQN/A0AgAkEkRkUEQCAAIAJqIgMoAgAhBCADIAEgAmoiAygCADYCACADIAQ2AgAgAkEEaiECDAELCws7AQF/AkAgAkF/RwRAIAJBAWohBCACQSBJDQEgBEEgIAMQyAEACyADEIoBAAsgACAENgIEIAAgATYCAAs4AAJAIAFpQQFHDQBBgICAgHggAWsgAEkNACAABEBBqfLAAC0AABogASAAED8iAUUNAQsgAQ8LAAs7AQF/IwBBEGsiAiQAIAEQvAEgAkEIaiABEJkBIAIoAgwhASAAIAIoAgg2AgAgACABNgIEIAJBEGokAAs4AAJAIAJBgIDEAEYNACAAIAIgASgCEBECAEUNAEEBDwsgA0UEQEEADwsgACADIAQgASgCDBEDAAstAQF/IAEgACgCAE8EfyAAKAIEIQIgAC0ACEUEQCABIAJNDwsgASACSQVBAAsLRAEBf0EBIQICQCABQQFLDQBByIHAACAAEIUBDQBB1IHAACAAEIUBDQBB4IHAACAAEIUBDQBB7IHAACAAEIUBIQILIAILNQEBfyABELwBIAEoAgAiAkF/RgRAEM0BAAsgASACQQFqNgIAIAAgATYCBCAAIAFBBGo2AgALNAEBfyAAKAIIIgMgACgCAEYEQCAAIAIQdAsgACADQQFqNgIIIAAoAgQgA0ECdGogATYCAAsuAQF/IwBBEGsiAiQAIAJBCGogASAAEJoBIAIoAggiAARAIAJBEGokACAADwsACzcBAX8jAEEgayIBJAAgAUEANgIYIAFBATYCDCABQYipwAA2AgggAUIENwIQIAFBCGogABCXAQALKgEBfyACIAMQPyIEBEAgBCAAIAEgAyABIANJGxAZGiAAIAIgARBDCyAECysAIAIgA0kEQCADIAIgBBDJAQALIAAgAiADazYCBCAAIAEgA0EUbGo2AgALLwEBfyAAIAIQnQEgACgCBCAAKAIIIgNBFGxqIAEgAkEUbBAZGiAAIAIgA2o2AggLKwAgASADSwRAIAEgAyAEEMkBAAsgACADIAFrNgIEIAAgAiABQQR0ajYCAAswAAJAAkAgA2lBAUcNAEGAgICAeCADayABSQ0AIAAgASADIAIQiwEiAA0BCwALIAALLgADQCABBEAgACgCACAAQQRqKAIAQQRBFBCvASABQQFrIQEgAEEQaiEADAELCwsyAQF/IAAoAgghAiABIAAoAgBBAmotAAAQqwEhASAAKAIEIAIgARACIAAgAkEBajYCCAsqACAAIAAoAmggAWoiASAAKAKcASIAQQFrIAAgAUsbQQAgAUEAThs2AmgLMwECfyAAIAAoAqgBIgIgACgCrAFBAWoiAyABIABBsgFqEEEgACgCYCAAKAJkIAIgAxBgCzMBAn8gACAAKAKoASICIAAoAqwBQQFqIgMgASAAQbIBahAgIAAoAmAgACgCZCACIAMQYAsqACABIAJJBEBBpInAAEEjQZSKwAAQfAALIAIgACACQRRsaiABIAJrEB0LNQAgACAAKQJ0NwJoIAAgACkBfDcBsgEgACAALwGGATsBvgEgAEG6AWogAEGEAWovAQA7AQAL7AECAn8BfiMAQRBrIgIkACACQQE7AQwgAiABNgIIIAIgADYCBCMAQRBrIgEkACACQQRqIgApAgAhBCABIAA2AgwgASAENwIEIwBBEGsiACQAIAFBBGoiASgCACICKAIMIQMCQAJAAkACQCACKAIEDgIAAQILIAMNAUEBIQJBACEDDAILIAMNACACKAIAIgIoAgQhAyACKAIAIQIMAQsgAEGAgICAeDYCACAAIAE2AgwgASgCCCIBLQAJGiAAQRkgAS0ACBBXAAsgACADNgIEIAAgAjYCACABKAIIIgEtAAkaIABBGiABLQAIEFcACysBAn8CQCAAKAIEIAAoAggiARA+IgJFDQAgASACSQ0AIAAgASACazYCCAsLKAAgASgCAEUEQCABQX82AgAgACABNgIEIAAgAUEEajYCAA8LEM0BAAsmACACBEBBqfLAAC0AABogASACED8hAQsgACACNgIEIAAgATYCAAsjAQF/IAEgACgCACAAKAIIIgJrSwRAIAAgAiABQQFBARB3CwsjAQF/IAEgACgCACAAKAIIIgJrSwRAIAAgAiABQQRBEBB3CwsjAQF/IAEgACgCACAAKAIIIgJrSwRAIAAgAiABQQRBFBB3CwslACAAQQE2AgQgACABKAIEIAEoAgBrQQR2IgE2AgggACABNgIACxsAIAEgAk0EQCACIAEgAxBYAAsgACACQRRsagsgACABIAJNBEAgAiABQeCjwAAQWAALIAAgAmpBAToAAAsbACABIAJNBEAgAiABIAMQWAALIAAgAkEEdGoLAwAACwMAAAsDAAALAwAACwMAAAsDAAALGgBBqfLAAC0AABpBBCAAED8iAARAIAAPCwALHQAgBCAAQQJqLQAAEKsBIQAgASACIAMQIyAAEAkLIQAgAEUEQEGYq8AAQTIQzAEACyAAIAIgAyABKAIQEQEACxYAIAFBAXFFBEAgALgQBQ8LIACtEAYLHwAgAEUEQEGYq8AAQTIQzAEACyAAIAIgASgCEBECAAsbAQF/IAEQACECIAAgATYCBCAAIAJBAUc2AgALGQEBfyAAKAIAIgEEQCAAKAIEQQEgARBDCwsSACAABEAgASACIAAgA2wQQwsLIQEBfyAAKAIQIgEgACgCFBCQASAAKAIMIAFBBEEQEK8BCyEBAX8gACgCBCIBIAAoAggQkAEgACgCACABQQRBEBCvAQsWACAAQQFxRQRAQYCAwABBFRDMAQALCxMAIAFFBEBBAEEAIAIQWAALIAALFgAgAEEQahBlIAAoAgAgACgCBBC3AQsUACAAIAEgAhAMNgIEIABBADYCAAsZACABKAIcQd+DwABBBSABKAIgKAIMEQMACxkAIABBgICAgHhHBEAgACABQQRBFBCvAQsLFAAgAQRAQYCAgIB4IAEQtwELIAELGQAgASgCHEHEpcAAQQ4gASgCICgCDBEDAAsPACACBEAgACABIAIQQwsLDwAgAQRAIAAgAiABEEMLCxMAIAAEQA8LQajowABBGxDMAQALDwAgAEGEAU8EQCAAEAQLCxMAIAAoAgggACgCAEECQQIQrwELFQAgAiACELgBGiAAQYCAgIB4NgIACxQAIAAoAgAgASAAKAIEKAIMEQIACxAAIAEgACgCBCAAKAIIEBMLDAAgAARAIAEQvQELCzwAIABFBEAjAEEgayIAJAAgAEEANgIYIABBATYCDCAAQZCEwAA2AgggAEIENwIQIABBCGogARCXAQALAAsUACAAQQA2AgggAEKAgICAEDcCAAsSACAAIAFBjI3AABBtQQE6AAwLEAAgASAAKAIAIAAoAgQQEwsOAEHspcAAQSsgABB8AAtrAQF/IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0ECNgIMIANB5KnAADYCCCADQgI3AhQgAyADQQRqrUKAgICAsAGENwMoIAMgA61CgICAgLABhDcDICADIANBIGo2AhAgA0EIaiACEJcBAAtrAQF/IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0ECNgIMIANBxKnAADYCCCADQgI3AhQgAyADQQRqrUKAgICAsAGENwMoIAMgA61CgICAgLABhDcDICADIANBIGo2AhAgA0EIaiACEJcBAAtrAQF/IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0ECNgIMIANBmKrAADYCCCADQgI3AhQgAyADQQRqrUKAgICAsAGENwMoIAMgA61CgICAgLABhDcDICADIANBIGo2AhAgA0EIaiACEJcBAAsLACAAIwBqJAAjAAsJACAAIAEQDgALDgBBw+jAAEHPABDMAQALDQAgAEHkg8AAIAEQGgsNACAAQfCmwAAgARAaCwwAIAAgASkCADcDAAsKACAAKAIAEL0BCw0AIABBgICAgHg2AgALCQAgAEEANgIACwYAIAAQZQsFAEGABAsEAEEBCwQAIAELBABBAAsLi2gRAEGAgMAAC98EYHVud3JhcF90aHJvd2AgZmFpbGVkAAAAGwAAAAQAAAAEAAAAHAAAAGNhbGxlZCBgUmVzdWx0Ojp1bndyYXAoKWAgb24gYW4gYEVycmAgdmFsdWVNYXAga2V5IGlzIG5vdCBhIHN0cmluZyBhbmQgY2Fubm90IGJlIGFuIG9iamVjdCBrZXkAADQKEABYAAAAfQEAADMAAAA0ChAAWAAAAIIBAAAcAAAANAoQAFgAAAB/AQAAHAAAADQKEABYAAAAeQEAABwAAAAAJQAAfyUAAAAAAAAAKAAA/ygAAAAAAACAJQAAnyUAAAAAAACw4AAAs+AAAAAAAABmZ3NyYy9saWIucnNiZ2ZhaW50Ym9sZGl0YWxpY3VuZGVybGluZXN0cmlrZXRocm91Z2hibGlua2ludmVyc2UjNwEQAAEAAAABAAAAAAAAAAEAAAAAAAAA+gAQAAoAAAAlAAAANgAAAPoAEAAKAAAAKgAAADYAAAD6ABAACgAAAEwAAAAxAAAA+gAQAAoAAABDAAAAIAAAAPoAEAAKAAAARgAAACIAAAD6ABAACgAAAEEAAAAWAAAA+gAQAAoAAABTAAAALwAAAHRleHRwZW5vZmZzZXRjZWxsQ291bnRjaGFyV2lkdGhFcnJvch0AAAAMAAAABAAAAB4AAAAfAAAAIAAAAGNhcGFjaXR5IG92ZXJmbG93AAAA/AEQABEAAABsaWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJzGAIQABwAAAAoAgAAEQAAAGxpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwBB6ITAAAuVHwEAAAAhAAAAYSBmb3JtYXR0aW5nIHRyYWl0IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHdoZW4gdGhlIHVuZGVybHlpbmcgc3RyZWFtIGRpZCBub3RsaWJyYXJ5L2FsbG9jL3NyYy9mbXQucnMAAMYCEAAYAAAAigIAAA4AAABEAhAAGwAAAI0FAAAbAAAAKSBzaG91bGQgYmUgPCBsZW4gKGlzIGluc2VydGlvbiBpbmRleCAoaXMgKSBzaG91bGQgYmUgPD0gbGVuIChpcyAAAAAWAxAAFAAAACoDEAAXAAAAFDQQAAEAAAByZW1vdmFsIGluZGV4IChpcyAAAFwDEAASAAAAAAMQABYAAAAUNBAAAQAAAGBhdGAgc3BsaXQgaW5kZXggKGlzIAAAAIgDEAAVAAAAKgMQABcAAAAUNBAAAQAAAC9ob21lL3J1bm5lci8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL3VuaWNvZGUtd2lkdGgtMC4xLjE0L3NyYy90YWJsZXMucnO4AxAAZAAAAJEAAAAVAAAAuAMQAGQAAACXAAAAGQAAAC9ydXN0Yy80ZDkxZGU0ZTQ4MTk4ZGEyZTMzNDEzZWZkY2Q5Y2QyY2MwYzQ2Njg4L2xpYnJhcnkvY29yZS9zcmMvaXRlci90cmFpdHMvaXRlcmF0b3IucnM8BBAAWAAAALMHAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogbWlkIDw9IHNlbGYubGVuKCkvcnVzdGMvNGQ5MWRlNGU0ODE5OGRhMmUzMzQxM2VmZGNkOWNkMmNjMGM0NjY4OC9saWJyYXJ5L2NvcmUvc3JjL3NsaWNlL21vZC5yc8cEEABNAAAAoA0AAAkAAABhc3NlcnRpb24gZmFpbGVkOiBrIDw9IHNlbGYubGVuKCkAAADHBBAATQAAAM0NAAAJAAAAL3J1c3RjLzRkOTFkZTRlNDgxOThkYTJlMzM0MTNlZmRjZDljZDJjYzBjNDY2ODgvbGlicmFyeS9hbGxvYy9zcmMvc2xpY2UucnMAAFgFEABKAAAAoQAAABkAAAAvcnVzdGMvNGQ5MWRlNGU0ODE5OGRhMmUzMzQxM2VmZGNkOWNkMmNjMGM0NjY4OC9saWJyYXJ5L2FsbG9jL3NyYy92ZWMvbW9kLnJztAUQAEwAAAA/CgAAJAAAAC9ob21lL3J1bm5lci8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL2F2dC0wLjE2LjAvc3JjL2J1ZmZlci5ycwAAEAYQAFoAAAAtAAAAGQAAABAGEABaAAAAWgAAAA0AAAAQBhAAWgAAAF4AAAANAAAAEAYQAFoAAABjAAAADQAAABAGEABaAAAAaAAAAB0AAAAQBhAAWgAAAHUAAAAlAAAAEAYQAFoAAAB/AAAAJQAAABAGEABaAAAAhwAAABUAAAAQBhAAWgAAAJEAAAAlAAAAEAYQAFoAAACYAAAAFQAAABAGEABaAAAAnQAAACUAAAAQBhAAWgAAAKgAAAARAAAAEAYQAFoAAACzAAAA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cnR5X2xpbmVzLnJzaBEQAGgAAAAIAAAAFAAAAGgREABoAAAADAAAAA8AAABoERAAaAAAABAAAAAPAEGIpMAAC9MHAQAAACIAAAAjAAAAJAAAACUAAAAmAAAAFAAAAAQAAAAnAAAAKAAAACkAAAAqAAAAL2hvbWUvcnVubmVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvYXZ0LTAuMTYuMC9zcmMvdGVybWluYWwucnM4EhAAXAAAAHUCAAAVAAAAOBIQAFwAAACxAgAADgAAADgSEABcAAAABQQAACMAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6INISEAASAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZWluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAAFxMQACAAAAA3ExAAEgAAADogAAABAAAAAAAAAFwTEAACAAAAAAAAAAwAAAAEAAAAKwAAACwAAAAtAAAAICAgICwKKCgKMHgwMDAxMDIwMzA0MDUwNjA3MDgwOTEwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OWF0dGVtcHRlZCB0byBpbmRleCBzbGljZSB1cCB0byBtYXhpbXVtIHVzaXplAFsUEAAsAAAAcmFuZ2Ugc3RhcnQgaW5kZXggIG91dCBvZiByYW5nZSBmb3Igc2xpY2Ugb2YgbGVuZ3RoIJAUEAASAAAAohQQACIAAAByYW5nZSBlbmQgaW5kZXgg1BQQABAAAACiFBAAIgAAAHNsaWNlIGluZGV4IHN0YXJ0cyBhdCAgYnV0IGVuZHMgYXQgAPQUEAAWAAAAChUQAA0AAABIYXNoIHRhYmxlIGNhcGFjaXR5IG92ZXJmbG93KBUQABwAAAAvcnVzdC9kZXBzL2hhc2hicm93bi0wLjE1LjIvc3JjL3Jhdy9tb2QucnMAAEwVEAAqAAAAIwAAACgAAACSNBAAawAAABkBAAASAAAAY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWQAAAAAAAD//////////9AVEABB6KvAAAvhAS9ob21lL3J1bm5lci8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL3NlcmRlLXdhc20tYmluZGdlbi0wLjYuNS9zcmMvbGliLnJzAAAA6BUQAGUAAAA1AAAADgAAAC9ydXN0Yy80ZDkxZGU0ZTQ4MTk4ZGEyZTMzNDEzZWZkY2Q5Y2QyY2MwYzQ2Njg4L2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwBgFhAASwAAAI0FAAAbAAAAwDMQAEwAAAAoAgAAEQBBga7AAAuHAQECAwMEBQYHCAkKCwwNDgMDAwMDAwMPAwMDAwMDAw8JCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRAJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQBBgbDAAAufCwECAgICAwICBAIFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdAgIeAgICAgICAh8gISIjAiQlJicoKQIqAgICAissAgICAi0uAgICLzAxMjMCAgICAgI0AgI1NjcCODk6Ozw9Pj85OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTlAOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OUECAkJDAgJERUZHSEkCSjk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OUsCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI5OTk5TAICAgICTU5PUAICAlECUlMCAgICAgICAgICAgICVFUCAlYCVwICWFlaW1xdXl9gYQJiYwJkZWZnAmgCaWprbAICbW5vcAJxcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnR1AgICAgICAnZ3OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTl4OTk5OTk5OTk5eXoCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAns5OXw5OX0CAgICAgICAgICAgICAgICAgICfgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn8CAgKAgYICAgICAgICAgICAgICAgKDhAICAgICAgICAgKFhnUCAocCAgKIAgICAgICAomKAgICAgICAgICAgICAouMAo2OAo+QkZKTlJWWApcCApiZmpsCAgICAgICAgICOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5nB0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAnQICAgKenwIEAgUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0CAh4CAgICAgICHyAhIiMCJCUmJygpAioCAgICoKGio6Slpi6nqKmqq6ytMwICAgICAq4CAjU2NwI4OTo7PD0+rzk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OUwCAgICArBOT7GFhnUCAocCAgKIAgICAgICAomKAgICAgICAgICAgICAouMsrOOAo+QkZKTlJWWApcCApiZmpsCAgICAgICAgICVVV1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAEG8u8AACylVVVVVFQBQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAQBB77vAAAvEARBBEFVVVVVVV1VVVVVVVVVVVVFVVQAAQFT13VVVVVVVVVVVFQAAAAAAVVVVVfxdVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUFABQAFARQVVVVVVVVVRVRVVVVVVVVVQAAAAAAAEBVVVVVVVVVVVXVV1VVVVVVVVVVVVVVBQAAVFVVVVVVVVVVVVVVVVUVAABVVVFVVVVVVQUQAAABAVBVVVVVVVVVVVVVAVVVVVVV/////39VVVVQVQAAVVVVVVVVVVVVVQUAQcC9wAALmARAVVVVVVVVVVVVVVVVVUVUAQBUUQEAVVUFVVVVVVVVVVFVVVVVVVVVVVVVVVVVVUQBVFVRVRVVVQVVVVVVVVVFQVVVVVVVVVVVVVVVVVVVVEEVFFBRVVVVVVVVVVBRVVVBVVVVVVVVVVVVVVVVVVVUARBUUVVVVVUFVVVVVVUFAFFVVVVVVVVVVVVVVVVVVQQBVFVRVQFVVQVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVRVRVVVFVFVVVVVVVVVVVVVVUVFVVVVVVVVVVVVVVVVUEVAUEUFVBVVUFVVVVVVVVVVFVVVVVVVVVVVVVVVVVVRREBQRQVUFVVQVVVVVVVVVVUFVVVVVVVVVVVVVVVVUVRAFUVUFVFVVVBVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVFFQVEVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVEAQFVVFQBAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUQAAVFVVAEBVVVVVVVVVVVVVVVVVVVVVVVVQVVVVVVVVEVFVVVVVVVVVVVVVVVVVAQAAQAAEVQEAAAEAAAAAAAAAAFRVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUBBABBQVVVVVVVVVAFVFVVVQFUVVVFQVVRVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqgBBgMLAAAuQA1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAVVVVVVVVVVVVVVVVQVUVVVVVVVVBVVVVVVVVVUFVVVVVVVVVQVVVVV///33//3XX3fW1ddVEABQVUUBAABVV1FVVVVVVVVVVVVVFQBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUFVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAVVFVFVQFVVVVVVVVVVVVVVVVVVVVVVVVVVVVXFRRVVVVVVVVVVVVVVVVVVUUAQEQBAFQVAAAUVVVVVVVVVVVVVVVVAAAAAAAAAEBVVVVVVVVVVVVVVVUAVVVVVVVVVVVVVVVVAABQBVVVVVVVVVVVVRUAAFVVVVBVVVVVVVVVBVAQUFVVVVVVVVVVVVVVVVVFUBFQVVVVVVVVVVVVVVVVVVUAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAAAAAEAFRRVVRQVVVVVVVVVVVVVVVVVVVVVVUAQaDFwAALkwhVVRUAVVVVVVVVBUBVVVVVVVVVVVVVVVUAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAAAAAAAAAABUVVVVVVVVVVVV9VVVVWlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf1X11VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV9VVVVVVVfVVVVVVVVVVVVVVVV////VVVVVVVVVVVVVdVVVVVV1VVVVV1V9VVVVVV9VV9VdVVXVVVVVXVV9V11XVVd9VVVVVVVVVVXVVVVVVVVVVV31d9VVVVVVVVVVVVVVVVVVVX9VVVVVVVVV1VV1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVXVV1VVVVVVVVVVVVVVVVddVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVQVVVVVVVVVVVVVVVVVVVV/f///////////////19V1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAAAAAAAAAAKqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVVVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpaVVVVVVVVqqqqqqqqqqqqqqqqqqoKAKqqqmqpqqqqqqqqqqqqqqqqqqqqqqqqqqpqgaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpVqaqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqKqqqqqqqqqqqmqqqqqqqqqqqqqqqqqqqqqqqqqqqqpVVZWqqqqqqqqqqqqqqmqqqqqqqqqqqqqqVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVVVVVVVVVVVVVVVVVVVVVaqqqlaqqqqqqqqqqqqqqqqqalVVVVVVVVVVVVVVVVVfVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFUAAAFBVVVVVVVVVBVVVVVVVVVVVVVVVVVVVVVVVVVVVUFVVVUVFFVVVVVVVVUFVVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQVVVVVVVVAAAAAFBVRRVVVVVVVVVVVVUFAFBVVVVVVRUAAFBVVVWqqqqqqqqqVkBVVVVVVVVVVVVVVRUFUFBVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVQFAQUFVVRVVVVRVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVUEFFQFUVVVVVVVVVVVVVVQVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVFFVVVVVqqqqqqqqqqqqVVVVAAAAAABAFQBBv83AAAvhDFVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQAAAPCqqlpVAAAAAKqqqqqqqqqqaqqqqqpqqlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRWpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpWVVVVVVVVVVVVVVVVVVUFVFVVVVVVVVVVVVVVVVVVVapqVVUAAFRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBUBVAUFVAFVVVVVVVVVVVVVAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQVVVVVVVVdVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVRVVVVVVVVVVVVVVVVVVVVVVVVVAVVVVVVVVVVVVVVVVVVVVVVVBQAAVFVVVVVVVVVVVVVVBVBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVQAAAEBVVVVVVVVVVVVVFFRVFVBVVVVVVVVVVVVVVRVAQVVFVVVVVVVVVVVVVVVVVVVVQFVVVVVVVVVVFQABAFRVVVVVVVVVVVVVVVVVVRVVVVVQVVVVVVVVVVVVVVVVBQBABVUBFFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVAEVUVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVFQBAVVVVVVVQVVVVVVVVVVVVVVVVVRVEVFVVVVUVVVVVBQBUAFRVVVVVVVVVVVVVVVVVVVVVAAAFRFVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVFABEEQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRUFUFUQVFVVVVVVVVBVVVVVVVVVVVVVVVVVVVVVVVVVVRUAQBFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVRABBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAQUQAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFQAAQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFUVBBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUABVVUVVVVVVVVVQEAQFVVVVVVVVVVVRUABEBVFVVVAUABVVVVVVVVVVVVVQAAAABAUFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAQAAQVVVVVVVVVVVVVVVVVVVVVVVVVVUFAAAAAAAFAARBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAUBFEAAAVVVVVVVVVVVVVVVVVVVVVVVVUBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVVFVVQFVVVVVVVVVVVVVVVQVAVURVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBUAAABQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAVFVVVVVVVVVVVVVVVVVVAEBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVRVAVVVVVVVVVVVVVVVVVVVVVVVVVapUVVVaVVVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqpaVVVVVVVVVVVVVaqqVlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaqpqmmqqqqqqqqqqmpVVVVlVVVVVVVVVWpZVVVVqlVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpVVVVVVVVVVUEAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAQavawAALdVAAAAAAAEBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVURUAUAAAAAQAEAVVVVVVVVVQVQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBVRVVVVVVVVVVVVVVVVVVQBBrdvAAAsCQBUAQbvbwAALxQZUVVFVVVVUVVVVVRUAAQAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVAEAAAAAAFAAQBEBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVQBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQBAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAEBVVVVVVVVVVVVVVVVVVVdVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV1VVVVVVVVVVVVVVVVVVVVXX9/39VVVVVVVVVVVVVVVVVVVVVVVX1////////blVVVaqquqqqqqrq+r+/VaqqVlVfVVVVqlpVVVVVVVX//////////1dVVf3/3///////////////////////9///////VVVV/////////////3/V/1VVVf////9XV///////////////////////f/f/////////////////////////////////////////////////////////////1////////////////////19VVdV/////////VVVVVXVVVVVVVVV9VVVVV1VVVVVVVVVVVVVVVVVVVVVVVVVV1f///////////////////////////1VVVVVVVVVVVVVVVf//////////////////////X1VXf/1V/1VV1VdV//9XVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV////VVdVVVVVVVX//////////////3///9//////////////////////////////////////////////////////////////VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf///1f//1dV///////////////f/19V9f///1X//1dV//9XVaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpaVVVVVVVVVVVZllVhqqVZqlVVVVVVlVVVVVVVVVWVVVUAQY7iwAALAQMAQZziwAAL4QdVVVVVVZVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRUAlmpaWmqqBUCmWZVlVVVVVVVVVVUAAAAAVVZVValWVVVVVVVVVVVVVlVVVVVVVVVVAAAAAAAAAABUVVVVlVlZVVVlVVVpVVVVVVVVVVVVVVWVVpVqqqqqVaqqWlVVVVlVqqqqVVVVVWVVVVpVVVVVpWVWVVVVlVVVVVVVVaaWmpZZWWWplqqqZlWqVVpZVVpWZVVVVWqqpaVaVVVVpapaVVVZWVVVWVVVVVVVlVVVVVVVVVVVVVVVVVVVVVVVVVVVZVX1VVVVaVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVaqqqqqqqqqqqlVVVaqqqqqlWlVVmqpaVaWlVVpapZalWlVVVaVaVZVVVVV9VWlZpVVfVWZVVVVVVVVVVWZV////VVVVmppqmlVVVdVVVVVV1VVVpV1V9VVVVVW9Va+quqqrqqqaVbqq+q66rlVd9VVVVVVVVVVXVVVVVVlVVVV31d9VVVVVVVVVpaqqVVVVVVVV1VdVVVVVVVVVVVVVVVVXrVpVVVVVVVVVVVWqqqqqqqqqaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqgAAAMCqqlpVAAAAAKqqqqqqqqqqaqqqqqpqqlVVVVVVVVVVVVVVVQVUVVVVVVVVVVVVVVVVVVVVqmpVVQAAVFmqqmpVqqqqqqqqqlqqqqqqqqqqqqqqqqqqqlpVqqqqqqqqqrr+/7+qqqqqVlVVVVVVVVVVVVVVVVX1////////L3J1c3RjLzRkOTFkZTRlNDgxOThkYTJlMzM0MTNlZmRjZDljZDJjYzBjNDY2ODgvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc0pzVmFsdWUoKQAAAAw0EAAIAAAAFDQQAAEAAABudWxsIHBvaW50ZXIgcGFzc2VkIHRvIHJ1c3RyZWN1cnNpdmUgdXNlIG9mIGFuIG9iamVjdCBkZXRlY3RlZCB3aGljaCB3b3VsZCBsZWFkIHRvIHVuc2FmZSBhbGlhc2luZyBpbiBydXN0L2hvbWUvcnVubmVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvd2FzbS1iaW5kZ2VuLTAuMi45Mi9zcmMvY29udmVydC9zbGljZXMucnMARwlwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQIGd2FscnVzBjAuMjAuMwx3YXNtLWJpbmRnZW4SMC4yLjkyICgyYTRhNDkzNjIp"),ph=async(e={})=>{let{initializeHook:t}=e;return t!=null?await t(uo,tc):await uo(tc),Ah},ga=class{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;this.speed=t,this.startTime=performance.now()}getTime(){return this.speed*(performance.now()-this.startTime)/1e3}setTime(t){this.startTime=performance.now()-t/this.speed*1e3}},jr=class{constructor(){}getTime(t){}setTime(t){}},wr=class e{constructor(t,r){this.input=typeof t.next=="function"?t:t[Symbol.iterator](),this.xfs=r??[]}map(t){return this.transform(hh(t))}flatMap(t){return this.transform(fh(t))}filter(t){return this.transform(bh(t))}take(t){return this.transform(mh(t))}drop(t){return this.transform(wh(t))}transform(t){return new e(this.input,this.xfs.concat([t]))}multiplex(t,r){return new e(new Ki(this[Symbol.iterator](),t[Symbol.iterator](),r))}toArray(){return Array.from(this)}[Symbol.iterator](){let t=0,r=[],n=!1,a=vh(this.xfs,o=>r.push(o));return{next:()=>{for(t===r.length&&(r=[],t=0);r.length===0;){let o=this.input.next();if(o.done)break;a.step(o.value)}return r.length===0&&!n&&(a.flush(),n=!0),r.length>0?{done:!1,value:r[t++]}:{done:!0}}}}};function hh(e){return t=>r=>{t(e(r))}}function fh(e){return t=>r=>{e(r).forEach(t)}}function bh(e){return t=>r=>{e(r)&&t(r)}}function mh(e){let t=0;return r=>n=>{t<e&&r(n),t+=1}}function wh(e){let t=0;return r=>n=>{t+=1,t>e&&r(n)}}function vh(e,t){return e.reverse().reduce((r,n)=>{let a=rc(n(r.step));return{step:a.step,flush:()=>{a.flush(),r.flush()}}},rc(t))}function rc(e){return typeof e=="function"?{step:e,flush:()=>{}}:e}var Ki=class{constructor(t,r,n){this.left=t,this.right=r,this.comparator=n}[Symbol.iterator](){let t,r;return{next:()=>{if(t===void 0&&this.left!==void 0){let n=this.left.next();n.done?this.left=void 0:t=n.value}if(r===void 0&&this.right!==void 0){let n=this.right.next();n.done?this.right=void 0:r=n.value}if(t===void 0&&r===void 0)return{done:!0};if(t===void 0){let n=r;return r=void 0,{done:!1,value:n}}else if(r===void 0){let n=t;return t=void 0,{done:!1,value:n}}else if(this.comparator(t,r)){let n=t;return t=void 0,{done:!1,value:n}}else{let n=r;return r=void 0,{done:!1,value:n}}}}}};async function pc(e){if(e instanceof Response){let t=await e.text(),r=yh(t);if(r!==void 0){let{header:n,events:a}=r;if(n.version===2)return ac(n,a);if(n.version===3)return oc(n,a);throw`asciicast v${n.version} format not supported`}else{let n=JSON.parse(t);if(n.version===1)return nc(n)}}else{if(typeof e=="object"&&e.version===1)return nc(e);if(Array.isArray(e)){let t=e[0];if(t.version===2){let r=e.slice(1,e.length);return ac(t,r)}else if(t.version===3){let r=e.slice(1,e.length);return oc(t,r)}else throw`asciicast v${t.version} format not supported`}}throw"invalid data"}function yh(e){let t=e.split(`
`),r;try{r=JSON.parse(t[0])}catch{return}let n=new wr(t).drop(1).filter(a=>a[0]==="[").map(JSON.parse);return{header:r,events:n}}function nc(e){let t=0,r=new wr(e.stdout).map(n=>(t+=n[0],[t,"o",n[1]]));return{cols:e.width,rows:e.height,events:r}}function ac(e,t){return{cols:e.width,rows:e.height,theme:hc(e.theme),events:t,idleTimeLimit:e.idle_time_limit}}function oc(e,t){t instanceof wr||(t=new wr(t));let r=0;return t=t.map(n=>(r+=n[0],[r,n[1],n[2]])),{cols:e.term.cols,rows:e.term.rows,theme:hc(e.term?.theme),events:t,idleTimeLimit:e.idle_time_limit}}function hc(e){if(e===void 0)return;let t=/^#[0-9A-Fa-f]{6}$/,r=/^(#[0-9A-Fa-f]{6}:){7,}#[0-9A-Fa-f]{6}$/,n=e?.fg,a=e?.bg,o=e?.palette;if(t.test(n)&&t.test(a)&&r.test(o))return{foreground:n,background:a,palette:o.split(":")}}function xh(e){let t=JSON.stringify({version:2,width:e.cols,height:e.rows}),r=e.events.map(JSON.stringify).join(`
`);return`${t}
${r}
`}function kh(e,t,r){let{feed:n,resize:a,onInput:o,onMarker:s,setState:d,logger:c}=t,{speed:u,idleTimeLimit:p,startAt:g,loop:w,posterTime:x,markers:k,pauseOnMarkers:m,cols:f,rows:v,audioUrl:y}=r,h,V,I,B,Q,L,F,G=0,N=0,S,U,de=0,O=!1,te,j=!1,ee=()=>performance.now()*u,T,$,re=!1;async function ue(){let q=setTimeout(()=>{d("loading")},3e3);try{let Y=he(e,c,{idleTimeLimit:p,startAt:g,markers_:k}),X=await ae(y);return Y=await Y,{...Y,hasAudio:X}}finally{clearTimeout(q)}}async function he(q,Y,X){let{parser:ye,minFrameTime:Me,inputOffset:Xt,dumpFilename:M,encoding:oe="utf-8"}=q,Qe=await xe(q),je=Ch(await ye(Qe,{encoding:oe}),Y,{...X,minFrameTime:Me,inputOffset:Xt});if({cols:h,rows:V,events:I,duration:Q,effectiveStartAt:L}=je,f=f??h,v=v??V,I.length===0)throw"recording is missing events";M!==void 0&&Eh(je,M);let Ne=x!==void 0?Ae(x):void 0;return B=I.filter(bt=>bt[1]==="m").map(bt=>[bt[0],bt[2].label]),{cols:h,rows:V,duration:Q,theme:je.theme,poster:Ne,markers:B}}async function ae(q){return q?($=await Qh(q),re=$.duration!==NaN&&$.duration!==1/0&&$.seekable.length>0&&$.seekable.end($.seekable.length-1)===$.duration,re?($.addEventListener("playing",Jt),$.addEventListener("waiting",Fe)):c.warn(`audio is not seekable - you must enable range request support on the server providing ${$.src} for audio seeking to work`),!0):!1}async function xe(q){let{url:Y,data:X,fetchOpts:ye={}}=q;if(typeof Y=="string")return await Ie(Y,ye);if(Array.isArray(Y))return await Promise.all(Y.map(Me=>Ie(Me,ye)));if(X!==void 0){typeof X=="function"&&(X=X()),X instanceof Promise||(X=Promise.resolve(X));let Me=await X;return typeof Me=="string"||Me instanceof ArrayBuffer?new Response(Me):Me}else throw"failed fetching recording file: url/data missing in src"}async function Ie(q,Y){let X=await fetch(q,Y);if(!X.ok)throw`failed fetching recording from ${q}: ${X.status} ${X.statusText}`;return X}function Be(){let q=I[G];q?F=nt(lt,q[0]):ct()}function nt(q,Y){let X=(Y*1e3-(ee()-S))/u;return X<0&&(X=0),setTimeout(q,X)}function lt(){let q=I[G],Y;do{if(N=q[0],G++,dt(q))return;q=I[G],Y=ee()-S}while(q&&Y>q[0]*1e3);Be()}function $e(){clearTimeout(F),F=null}function dt(q){let[Y,X,ye]=q;if(X==="o")n(ye);else if(X==="i")o(ye);else if(X==="r"){let[Me,Xt]=ye.split("x");a(Me,Xt)}else if(X==="m"&&(s(ye),m))return H(),U=Y*1e3,d("idle",{reason:"paused"}),!0;return!1}function ct(){$e(),de++,w===!0||typeof w=="number"&&de<w?(G=0,S=ee(),n("\x1Bc"),_e(),Be(),$&&($.currentTime=0)):(U=Q*1e3,d("ended"),$&&$.pause())}async function Lt(){if(F)throw"already playing";if(I[G]===void 0)throw"already ended";return L!==null&&Tt(L),await ke(),!0}function H(){return j=!1,$&&$.pause(),F&&($e(),U=ee()-S),!0}async function ke(){$&&!T&&st(),S=ee()-U,U=null,Be(),$&&await $.play()}async function Tt(q){if(O)return!1;let Y=!!F;H(),$&&$.pause();let X=(U??0)/1e3;if(typeof q=="string")q==="<<"?q=X-5:q===">>"?q=X+5:q==="<<<"?q=X-.1*Q:q===">>>"?q=X+.1*Q:q[q.length-1]==="%"&&(q=parseFloat(q.substring(0,q.length-1))/100*Q);else if(typeof q=="object"){if(q.marker==="prev")q=He(X)??0,Y&&X-q<1&&(q=He(q)??0);else if(q.marker==="next")q=qt(X)??Q;else if(typeof q.marker=="number"){let Xt=B[q.marker];if(Xt===void 0)throw`invalid marker index: ${q.marker}`;q=Xt[0]}}let ye=Math.min(Math.max(q,0),Q);if(ye*1e3===U)return!1;ye<N&&(n("\x1Bc"),_e(),G=0,N=0);let Me=I[G];for(;Me&&Me[0]<=ye;)(Me[1]==="o"||Me[1]==="r")&&dt(Me),N=Me[0],Me=I[++G];return U=ye*1e3,L=null,$&&re&&($.currentTime=ye/u),Y?await ke():I[G]===void 0&&ct(),!0}function He(q){if(B.length==0)return;let Y=0,X=B[Y],ye;for(;X&&X[0]<q;)ye=X[0],X=B[++Y];return ye}function qt(q){if(B.length==0)return;let Y=B.length-1,X=B[Y],ye;for(;X&&X[0]>q;)ye=X[0],X=B[--Y];return ye}function Gt(q){q===void 0&&(q=1);let Y,X;if(q>0){let ye=G;Y=I[ye];for(let Me=0;Me<q;Me++){for(;Y!==void 0&&Y[1]!=="o";)Y=I[++ye];Y!==void 0&&Y[1]==="o"&&(X=ye)}}else{let ye=Math.max(G-2,0);Y=I[ye];for(let Me=q;Me<0;Me++){for(;Y!==void 0&&Y[1]!=="o";)Y=I[--ye];Y!==void 0&&Y[1]==="o"&&(X=ye)}X!==void 0&&(n("\x1Bc"),_e(),G=0)}if(X!==void 0){for(;G<=X;)Y=I[G++],(Y[1]==="o"||Y[1]==="r")&&dt(Y);N=Y[0],U=N*1e3,L=null,$&&re&&($.currentTime=N/u),I[X+1]===void 0&&ct()}}async function Rt(){if(F)throw"still playing";if(I[G]!==void 0)throw"not ended";return Tt(0),await ke(),!0}function Ae(q){return I.filter(Y=>Y[0]<q&&Y[1]==="o").map(Y=>Y[2])}function ze(){return F?(ee()-S)/1e3:(U??0)/1e3}function _e(){a(f,v)}function st(){T=new AudioContext({latencyHint:"interactive"}),T.createMediaElementSource($).connect(T.destination),ee=Ee}function Ee(){if(!T)throw"audio context not started - can't tell time!";let{contextTime:q,performanceTime:Y}=T.getOutputTimestamp();return Y===0?q*1e3:q*1e3+(performance.now()-Y)}function Fe(){if(c.debug("audio buffering"),O=!0,j=!!F,te=setTimeout(()=>d("loading"),1e3),!F)return!0;c.debug("pausing session playback"),$e(),U=ee()-S}function Jt(){c.debug("audio resumed"),clearTimeout(te),d("playing"),O&&(O=!1,j&&(c.debug("resuming session playback"),S=ee()-U,U=null,Be()))}function we(){if($)return $.muted=!0,!0}function ft(){if($)return $.muted=!1,!0}return{init:ue,play:Lt,pause:H,seek:Tt,step:Gt,restart:Rt,stop:H,mute:we,unmute:ft,getCurrentTime:ze}}function Vh(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.016666666666666666,r;return n=>{let a=0,o=0;return{step:s=>{if(a++,r===void 0){r=s;return}s[1]==="o"&&r[1]==="o"&&s[0]-r[0]<t?r[2]+=s[2]:(n(r),r=s,o++)},flush:()=>{r!==void 0&&(n(r),o++),e.debug(`batched ${a} frames to ${o} frames`)}}}}function Ch(e,t,r){let{startAt:n=0,idleTimeLimit:a,minFrameTime:o,inputOffset:s,markers_:d}=r,{events:c}=e;c instanceof wr||(c=new wr(c)),a=a??e.idleTimeLimit??1/0;let u={offset:0};c=c.transform(Vh(t,o)).map(Bh(a,n,u)).map(ic()),d!==void 0&&(d=new wr(d).map(Ih),c=c.filter(w=>w[1]!=="m").multiplex(d,(w,x)=>w[0]<x[0]).map(ic())),c=c.toArray(),s!==void 0&&(c=c.map(w=>w[1]==="i"?[w[0]+s,w[1],w[2]]:w),c.sort((w,x)=>w[0]-x[0]));let p=c[c.length-1][0],g=n-u.offset;return{...e,events:c,duration:p,effectiveStartAt:g}}function Ih(e){return typeof e=="number"?[e,"m",""]:[e[0],"m",e[1]]}function Bh(e,t,r){let n=0,a=0;return function(o){let d=o[0]-n-e;return n=o[0],d>0&&(a+=d,o[0]<t&&(r.offset+=d)),[o[0]-a,o[1],o[2]]}}function ic(){let e=0;return function(t){return t[1]==="m"?[t[0],t[1],{index:e++,time:t[0],label:t[2]}]:t}}function Eh(e,t){let r=document.createElement("a"),n=e.events.map(o=>o[1]==="m"?[o[0],o[1],o[2].label]:o),a=xh({...e,events:n});r.href=URL.createObjectURL(new Blob([a],{type:"text/plain"})),r.download=t,r.click()}async function Qh(e){let t=new Audio;t.preload="metadata",t.loop=!1,t.crossOrigin="anonymous";let r,n=new Promise(o=>{r=o});function a(){r(),t.removeEventListener("canplay",a)}return t.addEventListener("canplay",a),t.src=e,t.load(),await n,t}function Sh(e,t,r){let{hourColor:n=3,minuteColor:a=4,separatorColor:o=9}=e,{feed:s}=t,{cols:d=5,rows:c=1}=r,u=Math.floor(c/2),p=Math.floor(d/2)-2,g=`\x1B[?25l\x1B[1m\x1B[${u}B`,w,x=()=>{let m=new Date,f=m.getHours(),v=m.getMinutes(),y=[];y.push("\r");for(let h=0;h<p;h++)y.push(" ");return y.push(`\x1B[3${n}m`),f<10&&y.push("0"),y.push(`${f}`),y.push(`\x1B[3${o};5m:\x1B[25m`),y.push(`\x1B[3${a}m`),v<10&&y.push("0"),y.push(`${v}`),y},k=()=>{x().forEach(s)};return{init:()=>{let f=[g].concat(x());return{cols:d,rows:c,duration:1440,poster:f}},play:()=>(s(g),k(),w=setInterval(k,1e3),!0),stop:()=>{clearInterval(w)},getCurrentTime:()=>{let m=new Date;return m.getHours()*60+m.getMinutes()}}}function Dh(e,t,r){let{feed:n}=t,{speed:a}=r,o=32,s=126-o,d,c=()=>{let p=Math.pow(5,Math.random()*4);d=setTimeout(u,p/a)},u=()=>{c();let p=String.fromCharCode(o+Math.floor(Math.random()*s));n(p)};return()=>(c(),()=>clearInterval(d))}function Fh(e,t){let{url:r,iterations:n=10}=e,{feed:a,setState:o}=t,s,d=0;return{async init(){let c=await pc(await fetch(r)),{cols:u,rows:p,events:g}=c;s=Array.from(g).filter(x=>{let[k,m,f]=x;return m==="o"}).map(x=>{let[k,m,f]=x;return[k,f]});let w=s[s.length-1][0];for(let[x,k]of s)d+=new Blob([k]).size;return{cols:u,rows:p,duration:w}},play(){let c=performance.now();for(let x=0;x<n;x++){for(let[k,m]of s)a(m);a("\x1Bc")}let p=(performance.now()-c)/1e3,g=d*n/p,w=d/(1024*1024)*n/p;return console.info("benchmark: result",{byteCount:d,iterations:n,duration:p,throughput:g,throughputMbs:w}),setTimeout(()=>{o("stopped",{reason:"ended"})},0),!0}}}var Yi=class{constructor(){this.items=[],this.onPush=void 0}push(t){this.items.push(t),this.onPush!==void 0&&(this.onPush(this.popAll()),this.onPush=void 0)}popAll(){if(this.items.length>0){let t=this.items;return this.items=[],t}else{let t=this;return new Promise(r=>{t.onPush=r})}}};function fc(e,t,r,n,a,o,s,d,c){let u=Nh(t,r,n,a);if(e===0)return c.debug("using no buffer"),Mh(u);{e=e??{};let p;return typeof e=="number"?(c.debug(`using fixed time buffer (${e} ms)`),p=g=>e):typeof e=="function"?(c.debug("using custom dynamic buffer"),p=e({logger:c})):(c.debug("using adaptive buffer",e),p=qh({logger:c},e)),Lh(p,u,o,c,s??0,d)}}function Mh(e){return{pushEvent(t){e(t[1],t[2])},pushText(t){e("o",t)},stop(){}}}function Nh(e,t,r,n){return function(a,o){a==="o"?e(o):a==="i"?r(o):a==="r"?t(o.cols,o.rows):a==="m"&&n(o)}}function Lh(e,t,r,n,a){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:.016666666666666666,s=performance.now()-a*1e3,d=e(0),c=new Yi;o*=1e3;let u=-o,p=!1;function g(){return performance.now()-s}return setTimeout(async()=>{for(;!p;){let w=await c.popAll();if(p)return;for(let x of w){let k=x[0]*1e3+d;if(k-u<o){t(x[1],x[2]);continue}let m=k-g();if(m>0&&(await Th(m),p))return;r(x[0]),t(x[1],x[2]),u=k}}},0),{pushEvent(w){let x=g()-w[0]*1e3;x<0&&(n.debug(`correcting epoch by ${x} ms`),s+=x,x=0),d=e(x),c.push(w)},pushText(w){c.push([g()/1e3,"o",w])},stop(){p=!0,c.push(void 0)}}}function Th(e){return new Promise(t=>{setTimeout(t,e)})}function qh(){let{logger:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{minBufferTime:t=50,bufferLevelStep:r=100,maxBufferLevel:n=50,transitionDuration:a=500,peakHalfLifeUp:o=100,peakHalfLifeDown:s=1e4,floorHalfLifeUp:d=5e3,floorHalfLifeDown:c=100,idealHalfLifeUp:u=1e3,idealHalfLifeDown:p=5e3,safetyMultiplier:g=1.2,minImprovementDuration:w=3e3}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};function x(Q){return Q===0?t:r*Q}let k=1,m=x(k),f=performance.now(),v=null,y=null,h=null,V=null,I=null,B=null;return function(Q){let L=performance.now(),F=Math.max(0,L-f);if(f=L,v===null)v=Q;else if(Q>v){let U=1-Math.pow(2,-F/o);v+=U*(Q-v)}else{let U=1-Math.pow(2,-F/s);v+=U*(Q-v)}if(v=Math.max(v,0),y===null)y=Q;else if(Q>y){let U=1-Math.pow(2,-F/d);y+=U*(Q-y)}else{let U=1-Math.pow(2,-F/c);y+=U*(Q-y)}y=Math.max(y,0);let G=v-y,N=g*(v+G);if(h===null)h=N;else if(N>h){let U=1-Math.pow(2,-F/u);h+=+U*(N-h)}else{let U=1-Math.pow(2,-F/p);h+=+U*(N-h)}let S;return h<=t?S=0:S=Gh(Math.ceil(h/r),1,n),Q>m&&e.debug("buffer underrun",{latency:Q,bufferTime:m}),S>k?(Q>m?k=Math.min(S,k+3):k+=1,I=x(k),B=(I-m)/a,V=null,e.debug("raising buffer",{latency:Q,bufferTime:m,targetBufferTime:I})):S<k?(V==null&&(V=L),L-V>=w&&(k-=1,I=x(k),B=(I-m)/a,V=L,e.debug("lowering buffer",{latency:Q,bufferTime:m,targetBufferTime:I}))):V=null,I!==null&&(m+=B*F,(B>=0&&m>I||B<0&&m<I)&&(m=I,I=null)),m}}function Gh(e,t,r){return Math.min(r,Math.max(t,e))}var sa=1e6;function Rh(e){let t=new TextDecoder,r=new TextDecoder,n=s,a,o=0;function s(k){if(new TextDecoder().decode(k)==="ALiS")n=d;else throw"not an ALiS v1 live stream"}function d(k){let m=new po(new DataView(k)),f=m.getUint8();if(f!==1)throw`expected reset (0x01) frame, got ${f}`;return c(m,k)}function c(k,m){k.decodeVarUint();let f=k.decodeVarUint();a=f,f=f/sa,o=0;let v=k.decodeVarUint(),y=k.decodeVarUint(),h=k.getUint8(),V;if(h===8)V=sc(new Uint8Array(m,k.offset,30)),k.forward(30);else if(h===16)V=sc(new Uint8Array(m,k.offset,54)),k.forward(54);else if(h!==0)throw`alis: invalid theme format (${h})`;let I=k.decodeVarUint(),B;return I>0&&(B=t.decode(new Uint8Array(m,k.offset,I))),n=u,{time:f,term:{size:{cols:v,rows:y},theme:V,init:B}}}function u(k){let m=new po(new DataView(k)),f=m.getUint8();if(f===1)return c(m,k);if(f===111)return p(m,k);if(f===105)return g(m,k);if(f===114)return w(m);if(f===109)return x(m,k);if(f===4)return n=d,!1;e.debug(`alis: unknown frame type: ${f}`)}function p(k,m){k.decodeVarUint();let f=k.decodeVarUint();a+=f;let v=k.decodeVarUint(),y=t.decode(new Uint8Array(m,k.offset,v));return[a/sa,"o",y]}function g(k,m){k.decodeVarUint();let f=k.decodeVarUint();a+=f;let v=k.decodeVarUint(),y=r.decode(new Uint8Array(m,k.offset,v));return[a/sa,"i",y]}function w(k){k.decodeVarUint();let m=k.decodeVarUint();a+=m;let f=k.decodeVarUint(),v=k.decodeVarUint();return[a/sa,"r",{cols:f,rows:v}]}function x(k,m){k.decodeVarUint();let f=k.decodeVarUint();a+=f;let v=k.decodeVarUint(),y=new TextDecoder,h=o++,V=a/sa,I=y.decode(new Uint8Array(m,k.offset,v));return[V,"m",{index:h,time:V,label:I}]}return function(k){return n(k)}}function sc(e){let t=e.length/3,r=zi(e[0],e[1],e[2]),n=zi(e[3],e[4],e[5]),a=[];for(let o=2;o<t;o++)a.push(zi(e[o*3],e[o*3+1],e[o*3+2]));return{foreground:r,background:n,palette:a}}function zi(e,t,r){return`#${Ji(e)}${Ji(t)}${Ji(r)}`}function Ji(e){return e.toString(16).padStart(2,"0")}var po=class{constructor(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this.inner=t,this.offset=r}forward(t){this.offset+=t}getUint8(){let t=this.inner.getUint8(this.offset);return this.offset+=1,t}decodeVarUint(){let t=BigInt(0),r=BigInt(0),n=this.getUint8();for(;n>127;)n&=127,t+=BigInt(n)<<r,r+=BigInt(7),n=this.getUint8();return t=t+(BigInt(n)<<r),Number(t)}};function $h(){let e=t;function t(n){let a=JSON.parse(n);if(a.version!==2)throw"not an asciicast v2 stream";return e=r,{time:0,term:{size:{cols:a.width,rows:a.height}}}}function r(n){let a=JSON.parse(n);if(a[1]==="r"){let[o,s]=a[2].split("x");return[a[0],"r",{cols:parseInt(o,10),rows:parseInt(s,10)}]}else return a}return function(n){return e(n)}}function _h(){let e=r,t=0;function r(a){let o=JSON.parse(a);if(o.version!==3)throw"not an asciicast v3 stream";e=n;let s={size:{cols:o.term.cols,rows:o.term.rows}};return o.term.theme&&(s.theme={foreground:o.term.theme.fg,background:o.term.theme.bg,palette:o.term.theme.palette.split(":")}),{time:0,term:s}}function n(a){let o=JSON.parse(a),[s,d,c]=o;if(t+=s,d==="r"){let[u,p]=c.split("x");return[t,"r",{cols:parseInt(u,10),rows:parseInt(p,10)}]}else return[t,d,c]}return function(a){return e(a)}}function Uh(){let e=new TextDecoder,t=r;function r(a){let o=e.decode(a,{stream:!0}),[s,d]=Ph(o)??Hh(o)??[80,24];return t=n,{time:0,term:{size:{cols:s,rows:d},init:o}}}function n(a){return e.decode(a,{stream:!0})}return function(a){return t(a)}}function Ph(e){let t=e.match(/\x1b\[8;(\d+);(\d+)t/);if(t!==null)return[parseInt(t[2],10),parseInt(t[1],10)]}function Hh(e){let t=e.match(/\[.*COLUMNS="(\d{1,3})" LINES="(\d{1,3})".*\]/);if(t!==null)return[parseInt(t[1],10),parseInt(t[2],10)]}var zh=500,Jh=1e4;function Oh(e){let t=Math.min(zh*Math.pow(2,e),Jh);return Math.random()*t}function jh(e,t,r){let{url:n,bufferTime:a,reconnectDelay:o=Oh,minFrameTime:s}=e,{feed:d,reset:c,resize:u,onInput:p,onMarker:g,setState:w,logger:x}=t,{audioUrl:k}=r;x=new ia(x,"websocket: ");let m,f,v=new jr,y=0,h,V=!1,I=!1,B,Q;function L(){m=new WebSocket(n,["v1.alis","v2.asciicast","v3.asciicast","raw"]),m.binaryType="arraybuffer",m.onopen=()=>{let j=m.protocol||"raw";x.info("opened"),x.info(`activating ${j} protocol handler`),j==="v1.alis"?m.onmessage=F(Rh(x)):j==="v2.asciicast"?m.onmessage=F($h()):j==="v3.asciicast"?m.onmessage=F(_h()):j==="raw"&&(m.onmessage=F(Uh())),h=setTimeout(()=>{y=0},1e3)},m.onclose=j=>{if(clearTimeout(B),S(),V||j.code===1e3||j.code===1005)x.info("closed"),w("ended",{message:"Stream ended"});else if(j.code===1002)x.debug(`close reason: ${j.reason}`),w("ended",{message:"Err: Player not compatible with the server"});else{clearTimeout(h);let ee=o(y++);x.info(`unclean close, reconnecting in ${ee}...`),w("loading"),setTimeout(L,ee)}},I=!1}function F(j){return B=setTimeout(N,5e3),function(ee){try{let T=j(ee.data);if(f){if(Array.isArray(T))f.pushEvent(T);else if(typeof T=="string")f.pushText(T);else if(typeof T=="object"&&!Array.isArray(T))G(T);else if(T===!1)N();else if(T!==void 0)throw`unexpected value from protocol handler: ${T}`}else if(typeof T=="object"&&!Array.isArray(T))G(T),clearTimeout(B);else if(T===void 0)clearTimeout(B),B=setTimeout(N,1e3);else throw clearTimeout(B),`unexpected value from protocol handler: ${T}`}catch(T){throw m.close(),T}}}function G(j){let{time:ee,term:T}=j,{size:$,init:re,theme:ue}=T,{cols:he,rows:ae}=$;x.info(`stream reset (${he}x${ae} @${ee})`),w("playing"),S(),f=fc(a,d,u,p,g,xe=>v.setTime(xe),ee,s,x),c(he,ae,re,ue),v=new ga,I=!0,typeof ee=="number"&&v.setTime(ee)}function N(){S(),I?(x.info("stream ended"),w("offline",{message:"Stream ended"})):(x.info("stream offline"),w("offline",{message:"Stream offline"})),v=new jr}function S(){f&&f.stop(),f=null}function U(){k&&(Q=new Audio,Q.preload="auto",Q.crossOrigin="anonymous",Q.src=k,Q.play())}function de(){Q&&Q.pause()}function O(){if(Q)return Q.muted=!0,!0}function te(){if(Q)return Q.muted=!1,!0}return{init:()=>({hasAudio:!!k}),play:()=>{L(),U()},stop:()=>{V=!0,S(),m!==void 0&&m.close(),de()},mute:O,unmute:te,getCurrentTime:()=>v.getTime()}}function Kh(e,t){let{url:r,bufferTime:n,minFrameTime:a}=e,{feed:o,reset:s,resize:d,onInput:c,onMarker:u,setState:p,logger:g}=t;g=new ia(g,"eventsource: ");let w,x,k=new jr;function m(f){x!==void 0&&x.stop(),x=fc(n,o,d,c,u,v=>k.setTime(v),f,a,g)}return{play:()=>{w=new EventSource(r),w.addEventListener("open",()=>{g.info("opened"),m()}),w.addEventListener("error",f=>{g.info("errored"),g.debug({e:f}),p("loading")}),w.addEventListener("message",f=>{let v=JSON.parse(f.data);if(Array.isArray(v))x.pushEvent(v);else if(v.cols!==void 0||v.width!==void 0){let y=v.cols??v.width,h=v.rows??v.height;g.debug(`vt reset (${y}x${h})`),p("playing"),m(v.time),s(y,h,v.init??void 0),k=new ga,typeof v.time=="number"&&k.setTime(v.time)}else v.state==="offline"&&(g.info("stream offline"),p("offline",{message:"Stream offline"}),k=new jr)}),w.addEventListener("done",()=>{g.info("closed"),w.close(),p("ended",{message:"Stream ended"})})},stop:()=>{x!==void 0&&x.stop(),w!==void 0&&w.close()},getCurrentTime:()=>k.getTime()}}async function Yh(e,t){let{encoding:r}=t,n=new TextDecoder(r),a,o,s=(await e[0].text()).split(`
`).filter(f=>f.length>0).map(f=>f.split(" "));s[0].length<3&&(s=s.map(f=>["O",f[0],f[1]]));let d=await e[1].arrayBuffer(),c=new Uint8Array(d),u=c.findIndex(f=>f==10)+1,g=n.decode(c.subarray(0,u)).match(/COLUMNS="(\d+)" LINES="(\d+)"/);g!==null&&(a=parseInt(g[1],10),o=parseInt(g[2],10));let w={array:c,cursor:u},x=w;if(e[2]!==void 0){let f=await e[2].arrayBuffer();x={array:new Uint8Array(f),cursor:u}}let k=[],m=0;for(let f of s)if(m+=parseFloat(f[1]),f[0]==="O"){let v=parseInt(f[2],10),y=w.array.subarray(w.cursor,w.cursor+v),h=n.decode(y);k.push([m,"o",h]),w.cursor+=v}else if(f[0]==="I"){let v=parseInt(f[2],10),y=x.array.subarray(x.cursor,x.cursor+v),h=n.decode(y);k.push([m,"i",h]),x.cursor+=v}else if(f[0]==="S"&&f[2]==="SIGWINCH"){let v=parseInt(f[4].slice(5),10),y=parseInt(f[3].slice(5),10);k.push([m,"r",`${v}x${y}`])}else f[0]==="H"&&f[2]==="COLUMNS"?a=parseInt(f[3],10):f[0]==="H"&&f[2]==="LINES"&&(o=parseInt(f[3],10));return a=a??80,o=o??24,{cols:a,rows:o,events:k}}async function Wh(e,t){let{encoding:r}=t,n=new TextDecoder(r),a=await e.arrayBuffer(),o=new Uint8Array(a),s=Oi(o),d=s.time,u=n.decode(s.data).match(/\x1b\[8;(\d+);(\d+)t/),p=[],g=80,w=24;u!==null&&(g=parseInt(u[2],10),w=parseInt(u[1],10));let x=0,k=Oi(o);for(;k!==void 0;){let m=k.time-d,f=n.decode(k.data);p.push([m,"o",f]),x+=k.len,k=Oi(o.subarray(x))}return{cols:g,rows:w,events:p}}function Oi(e){if(e.length<13)return;let t=Zh(e.subarray(0,8)),r=Wi(e.subarray(8,12)),n=e.subarray(12,12+r);return{time:t,data:n,len:r+12}}function Wi(e){return e[0]+e[1]*256+e[2]*256*256+e[3]*256*256*256}function Zh(e){let t=Wi(e.subarray(0,4)),r=Wi(e.subarray(4,8));return t+r/1e6}var Xh=ph(),vr=class{constructor(t){this.core=t,this.driver=t.driver}onEnter(t){}init(){}play(){}pause(){}togglePlay(){}mute(){this.driver&&this.driver.mute()&&this.core._dispatchEvent("muted",!0)}unmute(){this.driver&&this.driver.unmute()&&this.core._dispatchEvent("muted",!1)}seek(t){return!1}step(t){}stop(){this.driver.stop()}},Zi=class extends vr{async init(){try{return await this.core._initializeDriver(),this.core._setState("idle")}catch(t){throw this.core._setState("errored"),t}}async play(){this.core._dispatchEvent("play"),await(await this.init()).doPlay()}async togglePlay(){await this.play()}async seek(t){return await(await this.init()).seek(t)}async step(t){await(await this.init()).step(t)}stop(){}},Xi=class extends vr{onEnter(t){let{reason:r,message:n}=t;this.core._dispatchEvent("idle",{message:n}),r==="paused"&&this.core._dispatchEvent("pause")}async play(){this.core._dispatchEvent("play"),await this.doPlay()}async doPlay(){let t=await this.driver.play();t===!0?this.core._setState("playing"):typeof t=="function"&&(this.core._setState("playing"),this.driver.stop=t)}async togglePlay(){await this.play()}seek(t){return this.driver.seek(t)}step(t){this.driver.step(t)}},es=class extends vr{onEnter(){this.core._dispatchEvent("playing")}pause(){this.driver.pause()===!0&&this.core._setState("idle",{reason:"paused"})}togglePlay(){this.pause()}seek(t){return this.driver.seek(t)}},ts=class extends vr{onEnter(){this.core._dispatchEvent("loading")}},rs=class extends vr{onEnter(t){let{message:r}=t;this.core._dispatchEvent("offline",{message:r})}},ns=class extends vr{onEnter(t){let{message:r}=t;this.core._dispatchEvent("ended",{message:r})}async play(){this.core._dispatchEvent("play"),await this.driver.restart()&&this.core._setState("playing")}async togglePlay(){await this.play()}async seek(t){return await this.driver.seek(t)===!0?(this.core._setState("idle"),!0):!1}},as=class extends vr{onEnter(){this.core._dispatchEvent("errored")}},ho=class{constructor(t,r){this.logger=r.logger,this.state=new Zi(this),this.stateName="uninitialized",this.driver=ef(t),this.changedLines=new Set,this.cursor=void 0,this.duration=void 0,this.cols=r.cols,this.rows=r.rows,this.speed=r.speed,this.loop=r.loop,this.autoPlay=r.autoPlay,this.idleTimeLimit=r.idleTimeLimit,this.preload=r.preload,this.startAt=Pi(r.startAt),this.poster=this._parsePoster(r.poster),this.markers=this._normalizeMarkers(r.markers),this.pauseOnMarkers=r.pauseOnMarkers,this.audioUrl=r.audioUrl,this.commandQueue=Promise.resolve(),this.eventHandlers=new Map([["ended",[]],["errored",[]],["idle",[]],["input",[]],["loading",[]],["marker",[]],["metadata",[]],["muted",[]],["offline",[]],["pause",[]],["play",[]],["playing",[]],["ready",[]],["reset",[]],["resize",[]],["seeked",[]],["terminalUpdate",[]]])}async init(){this.wasm=await Xh;let t=this._feed.bind(this),r=p=>{this._dispatchEvent("input",{data:p})},n=p=>{let{index:g,time:w,label:x}=p;this._dispatchEvent("marker",{index:g,time:w,label:x})},a=this._resetVt.bind(this),o=this._resizeVt.bind(this),s=this._setState.bind(this),d=this.poster.type==="npt"?this.poster.value:void 0;this.driver=this.driver({feed:t,onInput:r,onMarker:n,reset:a,resize:o,setState:s,logger:this.logger},{cols:this.cols,rows:this.rows,speed:this.speed,idleTimeLimit:this.idleTimeLimit,startAt:this.startAt,loop:this.loop,posterTime:d,markers:this.markers,pauseOnMarkers:this.pauseOnMarkers,audioUrl:this.audioUrl}),typeof this.driver=="function"&&(this.driver={play:this.driver}),(this.preload||d!==void 0)&&this._withState(p=>p.init());let c=this.poster.type==="text"?this._renderPoster(this.poster.value):null,u={isPausable:!!this.driver.pause,isSeekable:!!this.driver.seek,poster:c};if(this.driver.init===void 0&&(this.driver.init=()=>({})),this.driver.pause===void 0&&(this.driver.pause=()=>{}),this.driver.seek===void 0&&(this.driver.seek=p=>!1),this.driver.step===void 0&&(this.driver.step=p=>{}),this.driver.stop===void 0&&(this.driver.stop=()=>{}),this.driver.restart===void 0&&(this.driver.restart=()=>{}),this.driver.mute===void 0&&(this.driver.mute=()=>{}),this.driver.unmute===void 0&&(this.driver.unmute=()=>{}),this.driver.getCurrentTime===void 0){let p=this.driver.play,g=new jr;this.driver.play=()=>(g=new ga(this.speed),p()),this.driver.getCurrentTime=()=>g.getTime()}this._dispatchEvent("ready",u),this.autoPlay&&this.play()}play(){return this._withState(t=>t.play())}pause(){return this._withState(t=>t.pause())}togglePlay(){return this._withState(t=>t.togglePlay())}seek(t){return this._withState(async r=>{await r.seek(t)&&this._dispatchEvent("seeked")})}step(t){return this._withState(r=>r.step(t))}stop(){return this._withState(t=>t.stop())}mute(){return this._withState(t=>t.mute())}unmute(){return this._withState(t=>t.unmute())}getChanges(){let t={};if(this.changedLines.size>0){let r=new Map,n=this.vt.rows;for(let a of this.changedLines)a<n&&r.set(a,{id:a,segments:this.vt.getLine(a)});this.changedLines.clear(),t.lines=r}return this.cursor===void 0&&this.vt&&(this.cursor=this.vt.getCursor()??!1,t.cursor=this.cursor),t}getCurrentTime(){return this.driver.getCurrentTime()}getRemainingTime(){if(typeof this.duration=="number")return this.duration-Math.min(this.getCurrentTime(),this.duration)}getProgress(){if(typeof this.duration=="number")return Math.min(this.getCurrentTime(),this.duration)/this.duration}getDuration(){return this.duration}addEventListener(t,r){this.eventHandlers.get(t).push(r)}_dispatchEvent(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};for(let n of this.eventHandlers.get(t))n(r)}_withState(t){return this._enqueueCommand(()=>t(this.state))}_enqueueCommand(t){return this.commandQueue=this.commandQueue.then(t),this.commandQueue}_setState(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.stateName===t)return this.state;if(this.stateName=t,t==="playing")this.state=new es(this);else if(t==="idle")this.state=new Xi(this);else if(t==="loading")this.state=new ts(this);else if(t==="ended")this.state=new ns(this);else if(t==="offline")this.state=new rs(this);else if(t==="errored")this.state=new as(this);else throw`invalid state: ${t}`;return this.state.onEnter(r),this.state}_feed(t){this._doFeed(t),this._dispatchEvent("terminalUpdate")}_doFeed(t){this.vt.feed(t).forEach(n=>this.changedLines.add(n)),this.cursor=void 0}async _initializeDriver(){let t=await this.driver.init();this.cols=this.cols??t.cols??80,this.rows=this.rows??t.rows??24,this.duration=this.duration??t.duration,this.markers=this._normalizeMarkers(t.markers)??this.markers??[],this.cols===0&&(this.cols=80),this.rows===0&&(this.rows=24),this._initializeVt(this.cols,this.rows);let r=t.poster!==void 0?this._renderPoster(t.poster):null;this._dispatchEvent("metadata",{cols:this.cols,rows:this.rows,duration:this.duration,markers:this.markers,theme:t.theme,hasAudio:t.hasAudio,poster:r})}_resetVt(t,r){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:void 0;this.logger.debug(`core: vt reset (${t}x${r})`),this.cols=t,this.rows=r,this.cursor=void 0,this._initializeVt(t,r),n!==void 0&&n!==""&&this._doFeed(n),this._dispatchEvent("reset",{cols:t,rows:r,theme:a})}_resizeVt(t,r){if(t===this.vt.cols&&r===this.vt.rows)return;this.vt.resize(t,r).forEach(a=>this.changedLines.add(a)),this.cursor=void 0,this.vt.cols=t,this.vt.rows=r,this.logger.debug(`core: vt resize (${t}x${r})`),this._dispatchEvent("resize",{cols:t,rows:r})}_initializeVt(t,r){this.vt=this.wasm.create(t,r,!0,100),this.vt.cols=t,this.vt.rows=r,this.changedLines.clear();for(let n=0;n<r;n++)this.changedLines.add(n)}_parsePoster(t){return typeof t!="string"?{}:t.substring(0,16)=="data:text/plain,"?{type:"text",value:[t.substring(16)]}:t.substring(0,4)=="npt:"?{type:"npt",value:Pi(t.substring(4))}:{}}_renderPoster(t){let r=this.cols??80,n=this.rows??24;this.logger.debug(`core: poster init (${r}x${n})`);let a=this.wasm.create(r,n,!1,0);t.forEach(d=>a.feed(d));let o=a.getCursor()??!1,s=[];for(let d=0;d<n;d++)s.push({id:d,segments:a.getLine(d)});return{cursor:o,lines:s}}_normalizeMarkers(t){if(Array.isArray(t))return t.map(r=>typeof r=="number"?[r,""]:r)}},lc=new Map([["benchmark",Fh],["clock",Sh],["eventsource",Kh],["random",Dh],["recording",kh],["websocket",jh]]),dc=new Map([["asciicast",pc],["typescript",Yh],["ttyrec",Wh]]);function ef(e){if(typeof e=="function")return e;if(typeof e=="string"&&(e.substring(0,5)=="ws://"||e.substring(0,6)=="wss://"?e={driver:"websocket",url:e}:e.substring(0,6)=="clock:"?e={driver:"clock"}:e.substring(0,7)=="random:"?e={driver:"random"}:e.substring(0,10)=="benchmark:"?e={driver:"benchmark",url:e.substring(10)}:e={driver:"recording",url:e}),e.driver===void 0&&(e.driver="recording"),e.driver=="recording"&&(e.parser===void 0&&(e.parser="asciicast"),typeof e.parser=="string"))if(dc.has(e.parser))e.parser=dc.get(e.parser);else throw`unknown parser: ${e.parser}`;if(lc.has(e.driver)){let t=lc.get(e.driver);return(r,n)=>t(e,r,n)}else throw`unsupported driver: ${JSON.stringify(e)}`}var tf=!1,rf=(e,t)=>e===t,ar=Symbol("solid-proxy"),nf=typeof Proxy=="function",mo=Symbol("solid-track"),wo={equals:rf},Vc=Ec,Cr=1,vo=2,Cc={owned:null,cleanups:null,context:null,owner:null},tt=null,os=null,af=null,Ye=null,Ct=null,kr=null,Bo=0;function Bn(e,t){let r=Ye,n=tt,a=e.length===0,o=t===void 0?n:t,s=a?Cc:{owned:null,cleanups:null,context:o?o.context:null,owner:o},d=a?e:()=>e(()=>Dt(()=>pa(s)));tt=s,Ye=null;try{return Wr(d,!0)}finally{Ye=r,tt=n}}function Vt(e,t){t=t?Object.assign({},wo,t):wo;let r={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=a=>(typeof a=="function"&&(a=a(r.value)),Bc(r,a));return[Ic.bind(r),n]}function of(e,t,r){let n=Qo(e,t,!0,Cr);Sn(n)}function er(e,t,r){let n=Qo(e,t,!1,Cr);Sn(n)}function sf(e,t,r){Vc=hf;let n=Qo(e,t,!1,Cr);n.user=!0,kr?kr.push(n):Sn(n)}function qe(e,t,r){r=r?Object.assign({},wo,r):wo;let n=Qo(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=r.equals||void 0,Sn(n),Ic.bind(n)}function Ot(e){return Wr(e,!1)}function Dt(e){if(Ye===null)return e();let t=Ye;Ye=null;try{return e()}finally{Ye=t}}function lf(e){sf(()=>Dt(e))}function Eo(e){return tt===null||(tt.cleanups===null?tt.cleanups=[e]:tt.cleanups.push(e)),e}function ss(){return Ye}function df(e){let t=Ye,r=tt;return Promise.resolve().then(()=>{Ye=t,tt=r;let n;return Wr(e,!1),Ye=tt=null,n?n.done:void 0})}var[cf,g3]=Vt(!1);function Af(){return[cf,df]}function gf(e){let t=qe(e),r=qe(()=>ls(t()));return r.toArray=()=>{let n=r();return Array.isArray(n)?n:n!=null?[n]:[]},r}function Ic(){if(this.sources&&this.state)if(this.state===Cr)Sn(this);else{let e=Ct;Ct=null,Wr(()=>xo(this),!1),Ct=e}if(Ye){let e=this.observers?this.observers.length:0;Ye.sources?(Ye.sources.push(this),Ye.sourceSlots.push(e)):(Ye.sources=[this],Ye.sourceSlots=[e]),this.observers?(this.observers.push(Ye),this.observerSlots.push(Ye.sources.length-1)):(this.observers=[Ye],this.observerSlots=[Ye.sources.length-1])}return this.value}function Bc(e,t,r){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&Wr(()=>{for(let a=0;a<e.observers.length;a+=1){let o=e.observers[a],s=os&&os.running;s&&os.disposed.has(o),(s?!o.tState:!o.state)&&(o.pure?Ct.push(o):kr.push(o),o.observers&&Qc(o)),s||(o.state=Cr)}if(Ct.length>1e6)throw Ct=[],new Error},!1)),t}function Sn(e){if(!e.fn)return;pa(e);let t=Bo;uf(e,e.value,t)}function uf(e,t,r){let n,a=tt,o=Ye;Ye=tt=e;try{n=e.fn(t)}catch(s){return e.pure&&(e.state=Cr,e.owned&&e.owned.forEach(pa),e.owned=null),e.updatedAt=r+1,Sc(s)}finally{Ye=o,tt=a}(!e.updatedAt||e.updatedAt<=r)&&(e.updatedAt!=null&&"observers"in e?Bc(e,n):e.value=n,e.updatedAt=r)}function Qo(e,t,r,n=Cr,a){let o={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:tt,context:tt?tt.context:null,pure:r};return tt===null||tt!==Cc&&(tt.owned?tt.owned.push(o):tt.owned=[o]),o}function yo(e){if(e.state===0)return;if(e.state===vo)return xo(e);if(e.suspense&&Dt(e.suspense.inFallback))return e.suspense.effects.push(e);let t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Bo);)e.state&&t.push(e);for(let r=t.length-1;r>=0;r--)if(e=t[r],e.state===Cr)Sn(e);else if(e.state===vo){let n=Ct;Ct=null,Wr(()=>xo(e,t[0]),!1),Ct=n}}function Wr(e,t){if(Ct)return e();let r=!1;t||(Ct=[]),kr?r=!0:kr=[],Bo++;try{let n=e();return pf(r),n}catch(n){r||(kr=null),Ct=null,Sc(n)}}function pf(e){if(Ct&&(Ec(Ct),Ct=null),e)return;let t=kr;kr=null,t.length&&Wr(()=>Vc(t),!1)}function Ec(e){for(let t=0;t<e.length;t++)yo(e[t])}function hf(e){let t,r=0;for(t=0;t<e.length;t++){let n=e[t];n.user?e[r++]=n:yo(n)}for(t=0;t<r;t++)yo(e[t])}function xo(e,t){e.state=0;for(let r=0;r<e.sources.length;r+=1){let n=e.sources[r];if(n.sources){let a=n.state;a===Cr?n!==t&&(!n.updatedAt||n.updatedAt<Bo)&&yo(n):a===vo&&xo(n,t)}}}function Qc(e){for(let t=0;t<e.observers.length;t+=1){let r=e.observers[t];r.state||(r.state=vo,r.pure?Ct.push(r):kr.push(r),r.observers&&Qc(r))}}function pa(e){let t;if(e.sources)for(;e.sources.length;){let r=e.sources.pop(),n=e.sourceSlots.pop(),a=r.observers;if(a&&a.length){let o=a.pop(),s=r.observerSlots.pop();n<a.length&&(o.sourceSlots[s]=n,a[n]=o,r.observerSlots[n]=s)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)pa(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)pa(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ff(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Sc(e,t=tt){throw ff(e)}function ls(e){if(typeof e=="function"&&!e.length)return ls(e());if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++){let n=ls(e[r]);Array.isArray(n)?t.push.apply(t,n):t.push(n)}return t}return e}var ds=Symbol("fallback");function ko(e){for(let t=0;t<e.length;t++)e[t]()}function bf(e,t,r={}){let n=[],a=[],o=[],s=0,d=t.length>1?[]:null;return Eo(()=>ko(o)),()=>{let c=e()||[],u=c.length,p,g;return c[mo],Dt(()=>{let x,k,m,f,v,y,h,V,I;if(u===0)s!==0&&(ko(o),o=[],n=[],a=[],s=0,d&&(d=[])),r.fallback&&(n=[ds],a[0]=Bn(B=>(o[0]=B,r.fallback())),s=1);else if(s===0){for(a=new Array(u),g=0;g<u;g++)n[g]=c[g],a[g]=Bn(w);s=u}else{for(m=new Array(u),f=new Array(u),d&&(v=new Array(u)),y=0,h=Math.min(s,u);y<h&&n[y]===c[y];y++);for(h=s-1,V=u-1;h>=y&&V>=y&&n[h]===c[V];h--,V--)m[V]=a[h],f[V]=o[h],d&&(v[V]=d[h]);for(x=new Map,k=new Array(V+1),g=V;g>=y;g--)I=c[g],p=x.get(I),k[g]=p===void 0?-1:p,x.set(I,g);for(p=y;p<=h;p++)I=n[p],g=x.get(I),g!==void 0&&g!==-1?(m[g]=a[p],f[g]=o[p],d&&(v[g]=d[p]),g=k[g],x.set(I,g)):o[p]();for(g=y;g<u;g++)g in m?(a[g]=m[g],o[g]=f[g],d&&(d[g]=v[g],d[g](g))):a[g]=Bn(w);a=a.slice(0,s=u),n=c.slice(0)}return a});function w(x){if(o[g]=x,d){let[k,m]=Vt(g);return d[g]=m,t(c[g],k)}return t(c[g])}}}function mf(e,t,r={}){let n=[],a=[],o=[],s=[],d=0,c;return Eo(()=>ko(o)),()=>{let u=e()||[],p=u.length;return u[mo],Dt(()=>{if(p===0)return d!==0&&(ko(o),o=[],n=[],a=[],d=0,s=[]),r.fallback&&(n=[ds],a[0]=Bn(w=>(o[0]=w,r.fallback())),d=1),a;for(n[0]===ds&&(o[0](),o=[],n=[],a=[],d=0),c=0;c<p;c++)c<n.length&&n[c]!==u[c]?s[c](()=>u[c]):c>=n.length&&(a[c]=Bn(g));for(;c<n.length;c++)o[c]();return d=s.length=o.length=p,n=u.slice(0),a=a.slice(0,d)});function g(w){o[c]=w;let[x,k]=Vt(u[c]);return s[c]=k,t(x,c)}}}function ge(e,t){return Dt(()=>e(t||{}))}function fo(){return!0}var wf={get(e,t,r){return t===ar?r:e.get(t)},has(e,t){return t===ar?!0:e.has(t)},set:fo,deleteProperty:fo,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:fo,deleteProperty:fo}},ownKeys(e){return e.keys()}};function is(e){return(e=typeof e=="function"?e():e)?e:{}}function vf(){for(let e=0,t=this.length;e<t;++e){let r=this[e]();if(r!==void 0)return r}}function yf(...e){let t=!1;for(let s=0;s<e.length;s++){let d=e[s];t=t||!!d&&ar in d,e[s]=typeof d=="function"?(t=!0,qe(d)):d}if(nf&&t)return new Proxy({get(s){for(let d=e.length-1;d>=0;d--){let c=is(e[d])[s];if(c!==void 0)return c}},has(s){for(let d=e.length-1;d>=0;d--)if(s in is(e[d]))return!0;return!1},keys(){let s=[];for(let d=0;d<e.length;d++)s.push(...Object.keys(is(e[d])));return[...new Set(s)]}},wf);let r={},n=Object.create(null);for(let s=e.length-1;s>=0;s--){let d=e[s];if(!d)continue;let c=Object.getOwnPropertyNames(d);for(let u=c.length-1;u>=0;u--){let p=c[u];if(p==="__proto__"||p==="constructor")continue;let g=Object.getOwnPropertyDescriptor(d,p);if(!n[p])n[p]=g.get?{enumerable:!0,configurable:!0,get:vf.bind(r[p]=[g.get.bind(d)])}:g.value!==void 0?g:void 0;else{let w=r[p];w&&(g.get?w.push(g.get.bind(d)):g.value!==void 0&&w.push(()=>g.value))}}}let a={},o=Object.keys(n);for(let s=o.length-1;s>=0;s--){let d=o[s],c=n[d];c&&c.get?Object.defineProperty(a,d,c):a[d]=c?c.value:void 0}return a}var Dc=e=>`Stale read from <${e}>.`;function Fc(e){let t="fallback"in e&&{fallback:()=>e.fallback};return qe(bf(()=>e.each,e.children,t||void 0))}function xf(e){let t="fallback"in e&&{fallback:()=>e.fallback};return qe(mf(()=>e.each,e.children,t||void 0))}function Vr(e){let t=e.keyed,r=qe(()=>e.when,void 0,void 0),n=t?r:qe(r,void 0,{equals:(a,o)=>!a==!o});return qe(()=>{let a=n();if(a){let o=e.children;return typeof o=="function"&&o.length>0?Dt(()=>o(t?a:()=>{if(!Dt(n))throw Dc("Show");return r()})):o}return e.fallback},void 0,void 0)}function cs(e){let t=gf(()=>e.children),r=qe(()=>{let n=t(),a=Array.isArray(n)?n:[n],o=()=>{};for(let s=0;s<a.length;s++){let d=s,c=a[s],u=o,p=qe(()=>u()?void 0:c.when,void 0,void 0),g=c.keyed?p:qe(p,void 0,{equals:(w,x)=>!w==!x});o=()=>u()||(g()?[d,p,c]:void 0)}return o});return qe(()=>{let n=r()();if(!n)return e.fallback;let[a,o,s]=n,d=s.children;return typeof d=="function"&&d.length>0?Dt(()=>d(s.keyed?o():()=>{if(Dt(r)()?.[0]!==a)throw Dc("Match");return o()})):d},void 0,void 0)}function Yr(e){return e}var kf=e=>qe(()=>e());function Vf(e,t,r){let n=r.length,a=t.length,o=n,s=0,d=0,c=t[a-1].nextSibling,u=null;for(;s<a||d<o;){if(t[s]===r[d]){s++,d++;continue}for(;t[a-1]===r[o-1];)a--,o--;if(a===s){let p=o<n?d?r[d-1].nextSibling:r[o-d]:c;for(;d<o;)e.insertBefore(r[d++],p)}else if(o===d)for(;s<a;)(!u||!u.has(t[s]))&&t[s].remove(),s++;else if(t[s]===r[o-1]&&r[d]===t[a-1]){let p=t[--a].nextSibling;e.insertBefore(r[d++],t[s++].nextSibling),e.insertBefore(r[--o],p),t[a]=r[o]}else{if(!u){u=new Map;let g=d;for(;g<o;)u.set(r[g],g++)}let p=u.get(t[s]);if(p!=null)if(d<p&&p<o){let g=s,w=1,x;for(;++g<a&&g<o&&!((x=u.get(t[g]))==null||x!==p+w);)w++;if(w>p-d){let k=t[s];for(;d<p;)e.insertBefore(r[d++],k)}else e.replaceChild(r[d++],t[s++])}else s++;else t[s++].remove()}}}var bc="_$DX_DELEGATE";function Mc(e,t,r,n={}){let a;return Bn(o=>{a=o,t===document?e():Je(t,e(),t.firstChild?null:void 0,r)},n.owner),()=>{a(),t.textContent=""}}function Se(e,t,r,n){let a,o=()=>{let d=document.createElement("template");return d.innerHTML=e,d.content.firstChild},s=t?()=>Dt(()=>document.importNode(a||(a=o()),!0)):()=>(a||(a=o())).cloneNode(!0);return s.cloneNode=s,s}function So(e,t=window.document){let r=t[bc]||(t[bc]=new Set);for(let n=0,a=e.length;n<a;n++){let o=e[n];r.has(o)||(r.add(o),t.addEventListener(o,If))}}function Cf(e,t,r){e.removeAttribute(t)}function Nc(e,t){t==null?e.removeAttribute("class"):e.className=t}function Kr(e,t,r,n){Array.isArray(r)?(e[`$$${t}`]=r[0],e[`$$${t}Data`]=r[1]):e[`$$${t}`]=r}function Dn(e,t,r){if(!t)return r?Cf(e,"style"):t;let n=e.style;if(typeof t=="string")return n.cssText=t;typeof r=="string"&&(n.cssText=r=void 0),r||(r={}),t||(t={});let a,o;for(o in r)t[o]==null&&n.removeProperty(o),delete r[o];for(o in t)a=t[o],a!==r[o]&&(n.setProperty(o,a),r[o]=a);return r}function Vo(e,t,r){return Dt(()=>e(t,r))}function Je(e,t,r,n){if(r!==void 0&&!n&&(n=[]),typeof t!="function")return Co(e,t,n,r);er(a=>Co(e,t(),a,r),n)}function If(e){let t=e.target,r=`$$${e.type}`,n=e.target,a=e.currentTarget,o=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),s=()=>{let c=t[r];if(c&&!t.disabled){let u=t[`${r}Data`];if(u!==void 0?c.call(t,u,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},d=()=>{for(;s()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){let c=e.composedPath();o(c[0]);for(let u=0;u<c.length-2&&(t=c[u],!!s());u++){if(t._$host){t=t._$host,d();break}if(t.parentNode===a)break}}else d();o(n)}function Co(e,t,r,n,a){for(;typeof r=="function";)r=r();if(t===r)return r;let o=typeof t,s=n!==void 0;if(e=s&&r[0]&&r[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===r))return r;if(s){let d=r[0];d&&d.nodeType===3?d.data!==t&&(d.data=t):d=document.createTextNode(t),r=Cn(e,r,n,d)}else r!==""&&typeof r=="string"?r=e.firstChild.data=t:r=e.textContent=t}else if(t==null||o==="boolean")r=Cn(e,r,n);else{if(o==="function")return er(()=>{let d=t();for(;typeof d=="function";)d=d();r=Co(e,d,r,n)}),()=>r;if(Array.isArray(t)){let d=[],c=r&&Array.isArray(r);if(As(d,t,r,a))return er(()=>r=Co(e,d,r,n,!0)),()=>r;if(d.length===0){if(r=Cn(e,r,n),s)return r}else c?r.length===0?mc(e,d,n):Vf(e,r,d):(r&&Cn(e),mc(e,d));r=d}else if(t.nodeType){if(Array.isArray(r)){if(s)return r=Cn(e,r,n,t);Cn(e,r,null,t)}else r==null||r===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);r=t}}return r}function As(e,t,r,n){let a=!1;for(let o=0,s=t.length;o<s;o++){let d=t[o],c=r&&r[e.length],u;if(!(d==null||d===!0||d===!1))if((u=typeof d)=="object"&&d.nodeType)e.push(d);else if(Array.isArray(d))a=As(e,d,c)||a;else if(u==="function")if(n){for(;typeof d=="function";)d=d();a=As(e,Array.isArray(d)?d:[d],Array.isArray(c)?c:[c])||a}else e.push(d),a=!0;else{let p=String(d);c&&c.nodeType===3&&c.data===p?e.push(c):e.push(document.createTextNode(p))}}return a}function mc(e,t,r=null){for(let n=0,a=t.length;n<a;n++)e.insertBefore(t[n],r)}function Cn(e,t,r,n){if(r===void 0)return e.textContent="";let a=n||document.createTextNode("");if(t.length){let o=!1;for(let s=t.length-1;s>=0;s--){let d=t[s];if(a!==d){let c=d.parentNode===e;!o&&!s?c?e.replaceChild(a,d):e.insertBefore(a,r):c&&d.remove()}else o=!0}}else e.insertBefore(a,r);return[a]}var gs=Symbol("store-raw"),En=Symbol("store-node"),xr=Symbol("store-has"),Lc=Symbol("store-self");function Tc(e){let t=e[ar];if(!t&&(Object.defineProperty(e,ar,{value:t=new Proxy(e,Qf)}),!Array.isArray(e))){let r=Object.keys(e),n=Object.getOwnPropertyDescriptors(e);for(let a=0,o=r.length;a<o;a++){let s=r[a];n[s].get&&Object.defineProperty(e,s,{enumerable:n[s].enumerable,get:n[s].get.bind(t)})}}return t}function Lr(e){let t;return e!=null&&typeof e=="object"&&(e[ar]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Qn(e,t=new Set){let r,n,a,o;if(r=e!=null&&e[gs])return r;if(!Lr(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let s=0,d=e.length;s<d;s++)a=e[s],(n=Qn(a,t))!==a&&(e[s]=n)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);let s=Object.keys(e),d=Object.getOwnPropertyDescriptors(e);for(let c=0,u=s.length;c<u;c++)o=s[c],!d[o].get&&(a=e[o],(n=Qn(a,t))!==a&&(e[o]=n))}return e}function Io(e,t){let r=e[t];return r||Object.defineProperty(e,t,{value:r=Object.create(null)}),r}function ha(e,t,r){if(e[t])return e[t];let[n,a]=Vt(r,{equals:!1,internal:!0});return n.$=a,e[t]=n}function Bf(e,t){let r=Reflect.getOwnPropertyDescriptor(e,t);return!r||r.get||!r.configurable||t===ar||t===En||(delete r.value,delete r.writable,r.get=()=>e[ar][t]),r}function qc(e){ss()&&ha(Io(e,En),Lc)()}function Ef(e){return qc(e),Reflect.ownKeys(e)}var Qf={get(e,t,r){if(t===gs)return e;if(t===ar)return r;if(t===mo)return qc(e),r;let n=Io(e,En),a=n[t],o=a?a():e[t];if(t===En||t===xr||t==="__proto__")return o;if(!a){let s=Object.getOwnPropertyDescriptor(e,t);ss()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(s&&s.get)&&(o=ha(n,t,o)())}return Lr(o)?Tc(o):o},has(e,t){return t===gs||t===ar||t===mo||t===En||t===xr||t==="__proto__"?!0:(ss()&&ha(Io(e,xr),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Ef,getOwnPropertyDescriptor:Bf};function jt(e,t,r,n=!1){if(!n&&e[t]===r)return;let a=e[t],o=e.length;r===void 0?(delete e[t],e[xr]&&e[xr][t]&&a!==void 0&&e[xr][t].$()):(e[t]=r,e[xr]&&e[xr][t]&&a===void 0&&e[xr][t].$());let s=Io(e,En),d;if((d=ha(s,t,a))&&d.$(()=>r),Array.isArray(e)&&e.length!==o){for(let c=e.length;c<o;c++)(d=s[c])&&d.$();(d=ha(s,"length",o))&&d.$(e.length)}(d=s[Lc])&&d.$()}function Gc(e,t){let r=Object.keys(t);for(let n=0;n<r.length;n+=1){let a=r[n];jt(e,a,t[a])}}function Sf(e,t){if(typeof t=="function"&&(t=t(e)),t=Qn(t),Array.isArray(t)){if(e===t)return;let r=0,n=t.length;for(;r<n;r++){let a=t[r];e[r]!==a&&jt(e,r,a)}jt(e,"length",n)}else Gc(e,t)}function ua(e,t,r=[]){let n,a=e;if(t.length>1){n=t.shift();let s=typeof n,d=Array.isArray(e);if(Array.isArray(n)){for(let c=0;c<n.length;c++)ua(e,[n[c]].concat(t),r);return}else if(d&&s==="function"){for(let c=0;c<e.length;c++)n(e[c],c)&&ua(e,[c].concat(t),r);return}else if(d&&s==="object"){let{from:c=0,to:u=e.length-1,by:p=1}=n;for(let g=c;g<=u;g+=p)ua(e,[g].concat(t),r);return}else if(t.length>1){ua(e[n],t,[n].concat(r));return}a=e[n],r=[n].concat(r)}let o=t[0];typeof o=="function"&&(o=o(a,r),o===a)||n===void 0&&o==null||(o=Qn(o),n===void 0||Lr(a)&&Lr(o)&&!Array.isArray(o)?Gc(a,o):jt(e,n,o))}function wc(...[e,t]){let r=Qn(e||{}),n=Array.isArray(r),a=Tc(r);function o(...s){Ot(()=>{n&&s.length===1?Sf(r,s[0]):ua(r,s)})}return[a,o]}var us=Symbol("store-root");function In(e,t,r,n,a){let o=t[r];if(e===o)return;let s=Array.isArray(e);if(r!==us&&(!Lr(e)||!Lr(o)||s!==Array.isArray(o)||a&&e[a]!==o[a])){jt(t,r,e);return}if(s){if(e.length&&o.length&&(!n||a&&e[0]&&e[0][a]!=null)){let u,p,g,w,x,k,m,f;for(g=0,w=Math.min(o.length,e.length);g<w&&(o[g]===e[g]||a&&o[g]&&e[g]&&o[g][a]===e[g][a]);g++)In(e[g],o,g,n,a);let v=new Array(e.length),y=new Map;for(w=o.length-1,x=e.length-1;w>=g&&x>=g&&(o[w]===e[x]||a&&o[w]&&e[x]&&o[w][a]===e[x][a]);w--,x--)v[x]=o[w];if(g>x||g>w){for(p=g;p<=x;p++)jt(o,p,e[p]);for(;p<e.length;p++)jt(o,p,v[p]),In(e[p],o,p,n,a);o.length>e.length&&jt(o,"length",e.length);return}for(m=new Array(x+1),p=x;p>=g;p--)k=e[p],f=a&&k?k[a]:k,u=y.get(f),m[p]=u===void 0?-1:u,y.set(f,p);for(u=g;u<=w;u++)k=o[u],f=a&&k?k[a]:k,p=y.get(f),p!==void 0&&p!==-1&&(v[p]=o[u],p=m[p],y.set(f,p));for(p=g;p<e.length;p++)p in v?(jt(o,p,v[p]),In(e[p],o,p,n,a)):jt(o,p,e[p])}else for(let u=0,p=e.length;u<p;u++)In(e[u],o,u,n,a);o.length>e.length&&jt(o,"length",e.length);return}let d=Object.keys(e);for(let u=0,p=d.length;u<p;u++)In(e[d[u]],o,d[u],n,a);let c=Object.keys(o);for(let u=0,p=c.length;u<p;u++)e[c[u]]===void 0&&jt(o,c[u],void 0)}function vc(e,t={}){let{merge:r,key:n="id"}=t,a=Qn(e);return o=>{if(!Lr(o)||!Lr(a))return a;let s=In(a,{[us]:o},us,r,n);return s===void 0?o:s}}var Df=()=>{},yc=(e,t)=>t();function Ff(e,t){let r=Dt(e),n=r?[r]:[],{onEnter:a=yc,onExit:o=yc}=t,[s,d]=Vt(t.appear?[]:n),[c]=Af(),u,p=!1;function g(k,m){if(!k)return m&&m();p=!0,o(k,()=>{Ot(()=>{p=!1,d(f=>f.filter(v=>v!==k)),m&&m()})})}function w(k){let m=u;if(!m)return k&&k();u=void 0,d(f=>[m,...f]),a(m,k??Df)}let x=t.mode==="out-in"?k=>p||g(k,w):t.mode==="in-out"?k=>w(()=>g(k)):k=>{g(k),w()};return of(k=>{let m=e();return Dt(c)?(c(),k):(m!==k&&(u=m,Ot(()=>Dt(()=>x(k)))),m)},t.appear?void 0:r),s}var xc=e=>e instanceof Element;function ps(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return ps(e(),t);if(Array.isArray(e))for(let r of e){let n=ps(r,t);if(n)return n}return null}function Mf(e,t=xc,r=xc){let n=qe(e);return qe(()=>ps(n(),t))}function Nf(e){return qe(()=>{let t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function Rc(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function Lf(e,t,r,n){let{onBeforeEnter:a,onEnter:o,onAfterEnter:s}=t;a?.(r),r.classList.add(...e.enter),r.classList.add(...e.enterActive),queueMicrotask(()=>{if(!r.parentNode)return n?.();o?.(r,()=>d())}),Rc(()=>{r.classList.remove(...e.enter),r.classList.add(...e.enterTo),(!o||o.length<2)&&(r.addEventListener("transitionend",d),r.addEventListener("animationend",d))});function d(c){(!c||c.target===r)&&(n?.(),r.removeEventListener("transitionend",d),r.removeEventListener("animationend",d),r.classList.remove(...e.enterActive),r.classList.remove(...e.enterTo),s?.(r))}}function Tf(e,t,r,n){let{onBeforeExit:a,onExit:o,onAfterExit:s}=t;if(!r.parentNode)return n?.();a?.(r),r.classList.add(...e.exit),r.classList.add(...e.exitActive),o?.(r,()=>d()),Rc(()=>{r.classList.remove(...e.exit),r.classList.add(...e.exitTo),(!o||o.length<2)&&(r.addEventListener("transitionend",d),r.addEventListener("animationend",d))});function d(c){(!c||c.target===r)&&(n?.(),r.removeEventListener("transitionend",d),r.removeEventListener("animationend",d),r.classList.remove(...e.exitActive),r.classList.remove(...e.exitTo),s?.(r))}}var qf={inout:"in-out",outin:"out-in"},Gf=e=>{let t=Nf(e);return Ff(Mf(()=>e.children),{mode:qf[e.mode],appear:e.appear,onEnter(r,n){Lf(t(),e,r,n)},onExit(r,n){Tf(t(),e,r,n)}})},Rf=Se("<span></span>",2),$f=e=>{let t=qe(()=>{if(e.text.length==1){let o=e.text.codePointAt(0);if(o>=9600&&o<=9631||o==57520||o==57522)return o}}),r=qe(()=>t()?" ":e.text),n=qe(()=>Uf(e.pen,e.offset,e.cellCount)),a=qe(()=>_f(e.pen,t(),e.extraClass));return(()=>{let o=Rf.cloneNode(!0);return Je(o,r),er(s=>{let d=a(),c=n();return d!==s._v$&&Nc(o,s._v$=d),s._v$2=Dn(o,c,s._v$2),s},{_v$:void 0,_v$2:void 0}),o})()};function _f(e,t,r){let n=kc(e.get("fg"),e.get("bold"),"fg-"),a=kc(e.get("bg"),!1,"bg-"),o=r??"";return t!==void 0&&(o+=` cp-${t.toString(16)}`),n&&(o+=" "+n),a&&(o+=" "+a),e.has("bold")&&(o+=" ap-bright"),e.has("faint")&&(o+=" ap-faint"),e.has("italic")&&(o+=" ap-italic"),e.has("underline")&&(o+=" ap-underline"),e.has("blink")&&(o+=" ap-blink"),e.get("inverse")&&(o+=" ap-inverse"),o}function kc(e,t,r){if(typeof e=="number")return t&&e<8&&(e+=8),`${r}${e}`}function Uf(e,t,r){let n=e.get("fg"),a=e.get("bg"),o={"--offset":t,width:`${r+.01}ch`};return typeof n=="string"&&(o["--fg"]=n),typeof a=="string"&&(o["--bg"]=a),o}var Pf=Se('<span class="ap-line" role="paragraph"></span>',2),Hf=e=>{let t=()=>{if(typeof e.cursor=="number"){let r=[],n=0,a=0;for(;a<e.segments.length&&n+e.segments[a].cellCount-1<e.cursor;){let o=e.segments[a];r.push(o),n+=o.cellCount,a++}if(a<e.segments.length){let o=e.segments[a],s=o.charWidth,d=e.cursor-n,c=Math.floor(d/s);d=c*s;let u=Array.from(o.text);for(c>0&&r.push({...o,text:u.slice(0,c).join("")}),r.push({...o,text:u[c],offset:n+d,cellCount:s,extraClass:"ap-cursor"}),c<u.length-1&&r.push({...o,text:u.slice(c+1).join(""),offset:n+d+1,cellCount:o.cellCount-s}),a++;a<e.segments.length;){let p=e.segments[a];r.push(p),a++}}return r}else return e.segments};return(()=>{let r=Pf.cloneNode(!0);return Je(r,ge(xf,{get each(){return t()},children:n=>ge($f,yf(n))})),r})()},zf=Se('<pre class="ap-terminal" aria-live="off" tabindex="0"></pre>',2),$c=e=>{let t=()=>e.lineHeight??1.3333333333,r=qe(()=>({width:`${e.cols}ch`,height:`${t()*e.rows}em`,"font-size":`${(e.scale||1)*100}%`,"font-family":e.fontFamily,"--term-line-height":`${t()}em`,"--term-cols":e.cols})),n=qe(()=>e.cursor?.[0]),a=qe(()=>e.cursor?.[1]);return(()=>{let o=zf.cloneNode(!0),s=e.ref;return typeof s=="function"?Vo(s,o):e.ref=o,Je(o,ge(Fc,{get each(){return e.lines},children:(d,c)=>ge(Hf,{get segments(){return d.segments},get cursor(){return kf(()=>c()===a())()?n():null}})})),er(d=>{let c=!!(e.blink||e.cursorHold),u=!!e.blink,p=r();return c!==d._v$&&o.classList.toggle("ap-cursor-on",d._v$=c),u!==d._v$2&&o.classList.toggle("ap-blink",d._v$2=u),d._v$3=Dn(o,p,d._v$3),d},{_v$:void 0,_v$2:void 0,_v$3:void 0}),o})()},Jf=Se('<svg version="1.1" viewBox="0 0 12 12" class="ap-icon ap-icon-fullscreen-off"><path d="M7,5 L7,0 L9,2 L11,0 L12,1 L10,3 L12,5 Z"></path><path d="M5,7 L0,7 L2,9 L0,11 L1,12 L3,10 L5,12 Z"></path></svg>',6),Of=e=>Jf.cloneNode(!0),jf=Se('<svg version="1.1" viewBox="6 8 14 16" class="ap-icon"><path d="M0.938 8.313h22.125c0.5 0 0.938 0.438 0.938 0.938v13.5c0 0.5-0.438 0.938-0.938 0.938h-22.125c-0.5 0-0.938-0.438-0.938-0.938v-13.5c0-0.5 0.438-0.938 0.938-0.938zM1.594 22.063h20.813v-12.156h-20.813v12.156zM3.844 11.188h1.906v1.938h-1.906v-1.938zM7.469 11.188h1.906v1.938h-1.906v-1.938zM11.031 11.188h1.938v1.938h-1.938v-1.938zM14.656 11.188h1.875v1.938h-1.875v-1.938zM18.25 11.188h1.906v1.938h-1.906v-1.938zM5.656 15.031h1.938v1.938h-1.938v-1.938zM9.281 16.969v-1.938h1.906v1.938h-1.906zM12.875 16.969v-1.938h1.906v1.938h-1.906zM18.406 16.969h-1.938v-1.938h1.938v1.938zM16.531 20.781h-9.063v-1.906h9.063v1.906z"></path></svg>',4),Kf=e=>jf.cloneNode(!0),Yf=Se('<svg version="1.1" viewBox="0 0 12 12" class="ap-icon" aria-label="Pause" role="button"><path d="M1,0 L4,0 L4,12 L1,12 Z"></path><path d="M8,0 L11,0 L11,12 L8,12 Z"></path></svg>',6),Wf=e=>Yf.cloneNode(!0),Zf=Se('<svg version="1.1" viewBox="0 0 12 12" class="ap-icon" aria-label="Play" role="button"><path d="M1,0 L11,6 L1,12 Z"></path></svg>',4),Xf=e=>Zf.cloneNode(!0),eb=Se('<svg version="1.1" viewBox="0 0 12 12" class="ap-icon ap-icon-fullscreen-on"><path d="M12,0 L7,0 L9,2 L7,4 L8,5 L10,3 L12,5 Z"></path><path d="M0,12 L0,7 L2,9 L4,7 L5,8 L3,10 L5,12 Z"></path></svg>',6),tb=e=>eb.cloneNode(!0),rb=Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.5 3.75a.75.75 0 0 0-1.264-.546L5.203 7H2.667a.75.75 0 0 0-.7.48A6.985 6.985 0 0 0 1.5 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 0 0 1.264-.546V3.75ZM16.45 5.05a.75.75 0 0 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.899Z"></path><path d="M14.329 7.172a.75.75 0 0 0-1.061 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 0 0 1.06 1.06 4 4 0 0 0 0-5.656Z"></path></svg>',6),nb=e=>rb.cloneNode(!0),ab=Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M10.047 3.062a.75.75 0 0 1 .453.688v12.5a.75.75 0 0 1-1.264.546L5.203 13H2.667a.75.75 0 0 1-.7-.48A6.985 6.985 0 0 1 1.5 10c0-.887.165-1.737.468-2.52a.75.75 0 0 1 .7-.48h2.535l4.033-3.796a.75.75 0 0 1 .811-.142ZM13.78 7.22a.75.75 0 1 0-1.06 1.06L14.44 10l-1.72 1.72a.75.75 0 0 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L16.56 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L15.5 8.94l-1.72-1.72Z"></path></svg>',4),ob=e=>ab.cloneNode(!0),ib=Se('<span class="ap-button ap-playback-button" tabindex="0"></span>',2),sb=Se('<span class="ap-bar"><span class="ap-gutter ap-gutter-empty"></span><span class="ap-gutter ap-gutter-full"></span></span>',6),lb=Se('<span class="ap-tooltip">Unmute (m)</span>',2),db=Se('<span class="ap-tooltip">Mute (m)</span>',2),cb=Se('<span class="ap-button ap-speaker-button ap-tooltip-container" aria-label="Mute / unmute" role="button" tabindex="0"></span>',2),Ab=Se('<div class="ap-control-bar"><span class="ap-timer" aria-readonly="true" role="textbox" tabindex="0"><span class="ap-time-elapsed"></span><span class="ap-time-remaining"></span></span><span class="ap-progressbar"></span><span class="ap-button ap-kbd-button ap-tooltip-container" aria-label="Show keyboard shortcuts" role="button" tabindex="0"><span class="ap-tooltip">Keyboard shortcuts (?)</span></span><span class="ap-button ap-fullscreen-button ap-tooltip-container" aria-label="Toggle fullscreen mode" role="button" tabindex="0"><span class="ap-tooltip">Fullscreen (f)</span></span></div>',18),gb=Se('<span class="ap-marker-container ap-tooltip-container"><span class="ap-marker"></span><span class="ap-tooltip"></span></span>',6);function bo(e){let t=Math.floor(e),r=Math.floor(t/86400);t%=86400;let n=Math.floor(t/3600);t%=3600;let a=Math.floor(t/60);return t%=60,r>0?`${yr(r)}:${yr(n)}:${yr(a)}:${yr(t)}`:n>0?`${yr(n)}:${yr(a)}:${yr(t)}`:`${yr(a)}:${yr(t)}`}function yr(e){return e<10?`0${e}`:e.toString()}var ub=e=>{let t=v=>y=>{y.preventDefault(),v(y)},r=()=>typeof e.currentTime=="number"?bo(e.currentTime):"--:--",n=()=>typeof e.remainingTime=="number"?"-"+bo(e.remainingTime):r(),a=qe(()=>typeof e.duration=="number"?e.markers.filter(v=>v[0]<e.duration):[]),o=v=>`${v[0]/e.duration*100}%`,s=v=>v[1]===""?bo(v[0]):`${bo(v[0])} - ${v[1]}`,d=v=>typeof e.currentTime=="number"?v[0]<=e.currentTime:!1,c=()=>({transform:`scaleX(${e.progress||0}`}),u=v=>{let y=v.currentTarget.offsetWidth,h=v.currentTarget.getBoundingClientRect(),V=v.clientX-h.left;return`${Math.max(0,V/y)*100}%`},[p,g]=Vt(!1),w=Xd(e.onSeekClick,50),x=v=>{v._marker||v.altKey||v.shiftKey||v.metaKey||v.ctrlKey||v.button!==0||(g(!0),e.onSeekClick(u(v)))},k=v=>t(()=>{e.onSeekClick({marker:v})}),m=v=>{v.altKey||v.shiftKey||v.metaKey||v.ctrlKey||p()&&w(u(v))},f=()=>{g(!1)};return document.addEventListener("mouseup",f),Eo(()=>{document.removeEventListener("mouseup",f)}),(()=>{let v=Ab.cloneNode(!0),y=v.firstChild,h=y.firstChild,V=h.nextSibling,I=y.nextSibling,B=I.nextSibling,Q=B.firstChild,L=B.nextSibling,F=L.firstChild,G=e.ref;return typeof G=="function"?Vo(G,v):e.ref=v,Je(v,ge(Vr,{get when(){return e.isPausable},get children(){let N=ib.cloneNode(!0);return Kr(N,"click",t(e.onPlayClick)),Je(N,ge(cs,{get children(){return[ge(Yr,{get when(){return e.isPlaying},get children(){return ge(Wf,{})}}),ge(Yr,{when:!0,get children(){return ge(Xf,{})}})]}})),N}}),y),Je(h,r),Je(V,n),Je(I,ge(Vr,{get when(){return typeof e.progress=="number"||e.isSeekable},get children(){let N=sb.cloneNode(!0),S=N.firstChild,U=S.nextSibling;return N.$$mousemove=m,N.$$mousedown=x,Je(N,ge(Fc,{get each(){return a()},children:(de,O)=>(()=>{let te=gb.cloneNode(!0),j=te.firstChild,ee=j.nextSibling;return te.$$mousedown=T=>{T._marker=!0},Kr(te,"click",k(O())),Je(ee,()=>s(de)),er(T=>{let $=o(de),re=!!d(de);return $!==T._v$&&te.style.setProperty("left",T._v$=$),re!==T._v$2&&j.classList.toggle("ap-marker-past",T._v$2=re),T},{_v$:void 0,_v$2:void 0}),te})()}),null),er(de=>Dn(U,c(),de)),N}})),Je(v,ge(Vr,{get when(){return e.isMuted!==void 0},get children(){let N=cb.cloneNode(!0);return Kr(N,"click",t(e.onMuteClick)),Je(N,ge(cs,{get children(){return[ge(Yr,{get when(){return e.isMuted===!0},get children(){return[ge(ob,{}),lb.cloneNode(!0)]}}),ge(Yr,{get when(){return e.isMuted===!1},get children(){return[ge(nb,{}),db.cloneNode(!0)]}})]}})),N}}),B),Kr(B,"click",t(e.onHelpClick)),Je(B,ge(Kf,{}),Q),Kr(L,"click",t(e.onFullscreenClick)),Je(L,ge(tb,{}),F),Je(L,ge(Of,{}),F),er(()=>v.classList.toggle("ap-seekable",!!e.isSeekable)),v})()};So(["click","mousedown","mousemove"]);var pb=Se('<div class="ap-overlay ap-overlay-error"><span>\u{1F4A5}</span></div>',4),hb=e=>pb.cloneNode(!0),fb=Se('<div class="ap-overlay ap-overlay-loading"><span class="ap-loader"></span></div>',4),bb=e=>fb.cloneNode(!0),mb=Se('<div class="ap-overlay ap-overlay-info"><span></span></div>',4),wb=e=>{let t=()=>({"font-family":e.fontFamily});return(()=>{let r=mb.cloneNode(!0),n=r.firstChild;return Je(n,()=>e.message),er(a=>{let o=!!e.wasPlaying,s=t();return o!==a._v$&&r.classList.toggle("ap-was-playing",a._v$=o),a._v$2=Dn(n,s,a._v$2),a},{_v$:void 0,_v$2:void 0}),r})()},vb=Se('<div class="ap-overlay ap-overlay-start"><div class="ap-play-button"><div><span><svg version="1.1" viewBox="0 0 1000.0 1000.0" class="ap-icon"><defs><mask id="small-triangle-mask"><rect width="100%" height="100%" fill="white"></rect><polygon points="700.0 500.0, 400.00000000000006 326.7949192431122, 399.9999999999999 673.2050807568877" fill="black"></polygon></mask></defs><polygon points="1000.0 500.0, 250.0000000000001 66.98729810778059, 249.99999999999977 933.0127018922192" mask="url(#small-triangle-mask)" fill="white" class="ap-play-btn-fill"></polygon><polyline points="673.2050807568878 400.0, 326.7949192431123 600.0" stroke="white" stroke-width="90" class="ap-play-btn-stroke"></polyline></svg></span></div></div></div>',22),yb=e=>{let t=r=>n=>{n.preventDefault(),r(n)};return(()=>{let r=vb.cloneNode(!0);return Kr(r,"click",t(e.onClick)),r})()};So(["click"]);var xb=Se("<li><kbd>space</kbd> - pause / resume</li>",4),kb=Se("<li><kbd>\u2190</kbd> / <kbd>\u2192</kbd> - rewind / fast-forward by 5 seconds</li>",6),Vb=Se("<li><kbd>Shift</kbd> + <kbd>\u2190</kbd> / <kbd>\u2192</kbd> - rewind / fast-forward by 10%</li>",8),Cb=Se("<li><kbd>[</kbd> / <kbd>]</kbd> - jump to the previous / next marker</li>",6),Ib=Se("<li><kbd>0</kbd>, <kbd>1</kbd>, <kbd>2</kbd> ... <kbd>9</kbd> - jump to 0%, 10%, 20% ... 90%</li>",10),Bb=Se("<li><kbd>,</kbd> / <kbd>.</kbd> - step back / forward, a frame at a time (when paused)</li>",6),Eb=Se("<li><kbd>m</kbd> - mute / unmute audio</li>",4),Qb=Se('<div class="ap-overlay ap-overlay-help"><div><div><p>Keyboard shortcuts</p><ul><li><kbd>f</kbd> - toggle fullscreen mode</li><li><kbd>?</kbd> - show this help popup</li></ul></div></div></div>',18),Sb=e=>{let t=()=>({"font-family":e.fontFamily}),r=n=>a=>{a.preventDefault(),n(a)};return(()=>{let n=Qb.cloneNode(!0),a=n.firstChild,o=a.firstChild,s=o.firstChild,d=s.nextSibling,c=d.firstChild,u=c.nextSibling;return Kr(n,"click",r(e.onClose)),a.$$click=p=>{p.stopPropagation()},Je(d,ge(Vr,{get when(){return e.isPausable},get children(){return xb.cloneNode(!0)}}),c),Je(d,ge(Vr,{get when(){return e.isSeekable},get children(){return[kb.cloneNode(!0),Vb.cloneNode(!0),Cb.cloneNode(!0),Ib.cloneNode(!0),Bb.cloneNode(!0)]}}),c),Je(d,ge(Vr,{get when(){return e.hasAudio},get children(){return Eb.cloneNode(!0)}}),u),er(p=>Dn(n,t(),p)),n})()};So(["click"]);var Db=Se('<div class="ap-wrapper" tabindex="-1"><div></div></div>',4),Fb=32,Mb=e=>{let t=e.logger,r=e.core,n=e.autoPlay,[a,o]=wc({lines:[],cursor:void 0,charW:e.charW,charH:e.charH,bordersW:e.bordersW,bordersH:e.bordersH,containerW:0,containerH:0,isPausable:!0,isSeekable:!0,isFullscreen:!1,currentTime:null,remainingTime:null,progress:null,blink:!0,cursorHold:!1}),[s,d]=Vt(!1),[c,u]=Vt(void 0),[p,g]=Vt(!1),[w,x]=Vt(n?null:"start"),[k,m]=Vt(null),[f,v]=Vt({cols:e.cols,rows:e.rows},{equals:(M,oe)=>M.cols===oe.cols&&M.rows===oe.rows}),[y,h]=Vt(void 0),[V,I]=wc([]),[B,Q]=Vt(!1),[L,F]=Vt(!1),[G,N]=Vt(void 0),S=qe(()=>f().cols||80),U=qe(()=>f().rows||24),de=()=>e.controls===!1?0:Fb,O=()=>e.controls===!0||e.controls==="auto"&&B(),te,j,ee,T,$,re,ue,he,ae;function xe(){Lt(),st(),Ae()}function Ie(){Ee(),ze(),_e()}function Be(M){Ot(()=>{M.rows<f().rows&&o("lines",a.lines.slice(0,M.rows)),v(M)})}function nt(M){M!==null&&!n&&o({lines:M.lines,cursor:M.cursor})}let lt,$e=new Promise(M=>{lt=M});r.addEventListener("ready",M=>{let{isPausable:oe,isSeekable:Qe,poster:je}=M;o({isPausable:oe,isSeekable:Qe}),nt(je),lt()}),r.addEventListener("metadata",M=>{let{cols:oe,rows:Qe,duration:je,theme:Ne,poster:bt,markers:bn,hasAudio:na}=M;Ot(()=>{Be({cols:oe,rows:Qe}),h(je),N(Ne),I(bn),nt(bt),u(na?!1:void 0)})}),r.addEventListener("play",()=>{x(null)}),r.addEventListener("playing",()=>{Ot(()=>{d(!0),g(!0),x(null),xe()})}),r.addEventListener("idle",()=>{Ot(()=>{d(!1),Ie()})}),r.addEventListener("loading",()=>{Ot(()=>{d(!1),Ie(),x("loader")})}),r.addEventListener("offline",M=>{let{message:oe}=M;Ot(()=>{d(!1),Ie(),oe!==void 0&&(m(oe),x("info"))})}),r.addEventListener("muted",M=>{u(M)});let dt=0;r.addEventListener("ended",M=>{let{message:oe}=M;Ot(()=>{d(!1),Ie(),oe!==void 0&&(m(oe),x("info"))}),t.debug(`view: render count: ${dt}`)}),r.addEventListener("errored",()=>{x("error")}),r.addEventListener("resize",Be),r.addEventListener("reset",M=>{let{cols:oe,rows:Qe,theme:je}=M;Ot(()=>{Be({cols:oe,rows:Qe}),N(je),Lt()})}),r.addEventListener("seeked",()=>{_e()}),r.addEventListener("terminalUpdate",()=>{te===void 0&&(te=requestAnimationFrame(Lt))});let ct=()=>{ae=new ResizeObserver(Zd(M=>{o({containerW:$.offsetWidth,containerH:$.offsetHeight}),$.dispatchEvent(new CustomEvent("resize",{detail:{el:re}}))},10)),ae.observe($)};lf(async()=>{t.info("view: mounted"),t.debug("view: font measurements",{charW:a.charW,charH:a.charH}),ct(),o({containerW:$.offsetWidth,containerH:$.offsetHeight})}),Eo(()=>{r.stop(),Ee(),ze(),ae.disconnect()});let Lt=async()=>{let M=await r.getChanges();Ot(()=>{M.lines!==void 0&&M.lines.forEach((oe,Qe)=>{o("lines",Qe,vc(oe))}),M.cursor!==void 0&&o("cursor",vc(M.cursor)),o("cursorHold",!0)}),te=void 0,dt+=1},H=qe(()=>{let M=a.charW*S()+a.bordersW,oe=a.charH*U()+a.bordersH,Qe=e.fit??"width";if(Qe==="both"||a.isFullscreen){let je=a.containerW/(a.containerH-de()),Ne=M/oe;je>Ne?Qe="height":Qe="width"}if(Qe===!1||Qe==="none")return{};if(Qe==="width"){let je=a.containerW/M;return{scale:je,width:a.containerW,height:oe*je+de()}}else if(Qe==="height"){let je=(a.containerH-de())/oe;return{scale:je,width:M*je,height:a.containerH}}else throw`unsupported fit mode: ${Qe}`}),ke=()=>{o("isFullscreen",document.fullscreenElement??document.webkitFullscreenElement)},Tt=()=>{a.isFullscreen?(document.exitFullscreen??document.webkitExitFullscreen??(()=>{})).apply(document):($.requestFullscreen??$.webkitRequestFullscreen??(()=>{})).apply($)},He=()=>{L()?F(!1):(r.pause(),F(!0))},qt=M=>{if(!(M.altKey||M.metaKey||M.ctrlKey)){if(M.key==" ")r.togglePlay();else if(M.key==",")r.step(-1).then(_e);else if(M.key==".")r.step().then(_e);else if(M.key=="f")Tt();else if(M.key=="m")Y();else if(M.key=="[")r.seek({marker:"prev"});else if(M.key=="]")r.seek({marker:"next"});else if(M.key.charCodeAt(0)>=48&&M.key.charCodeAt(0)<=57){let oe=(M.key.charCodeAt(0)-48)/10;r.seek(`${oe*100}%`)}else if(M.key=="?")He();else if(M.key=="ArrowLeft")M.shiftKey?r.seek("<<<"):r.seek("<<");else if(M.key=="ArrowRight")M.shiftKey?r.seek(">>>"):r.seek(">>");else if(M.key=="Escape")F(!1);else return;M.stopPropagation(),M.preventDefault()}},Gt=()=>{a.isFullscreen&&Fe(!0)},Rt=()=>{a.isFullscreen||Fe(!1)},Ae=()=>{ee=setInterval(_e,100)},ze=()=>{clearInterval(ee)},_e=async()=>{let M=await r.getCurrentTime(),oe=await r.getRemainingTime(),Qe=await r.getProgress();o({currentTime:M,remainingTime:oe,progress:Qe})},st=()=>{T=setInterval(()=>{o(M=>{let oe={blink:!M.blink};return oe.blink&&(oe.cursorHold=!1),oe})},600)},Ee=()=>{clearInterval(T),o("blink",!0)},Fe=M=>{clearTimeout(j),M&&(j=setTimeout(()=>Fe(!1),2e3)),Q(M)},Jt=qe(()=>{let M=e.theme||"auto/asciinema";return M.slice(0,5)==="auto/"?{name:M.slice(5),colors:G()}:{name:M}}),we=()=>{let M={};(e.fit===!1||e.fit==="none")&&e.terminalFontSize!==void 0&&(e.terminalFontSize==="small"?M["font-size"]="12px":e.terminalFontSize==="medium"?M["font-size"]="18px":e.terminalFontSize==="big"?M["font-size"]="24px":M["font-size"]=e.terminalFontSize);let oe=H();oe.width!==void 0&&(M.width=`${oe.width}px`,M.height=`${oe.height}px`);let Qe=Jt().colors;return Qe&&(M["--term-color-foreground"]=Qe.foreground,M["--term-color-background"]=Qe.background,Qe.palette.forEach((je,Ne)=>{M[`--term-color-${Ne}`]=je})),M},ft=()=>{$e.then(()=>r.play())},q=()=>{$e.then(()=>r.togglePlay())},Y=()=>{$e.then(()=>{c()===!0?r.unmute():r.mute()})},X=M=>{$e.then(()=>r.seek(M))},ye=()=>`ap-player asciinema-player-theme-${Jt().name}`,Me=()=>H()?.scale;return(()=>{let M=Db.cloneNode(!0),oe=M.firstChild,Qe=$;typeof Qe=="function"?Vo(Qe,M):$=M,M.addEventListener("webkitfullscreenchange",ke),M.addEventListener("fullscreenchange",ke),M.$$mousemove=Gt,M.$$keydown=qt;let je=re;return typeof je=="function"?Vo(je,oe):re=oe,oe.$$mousemove=()=>Fe(!0),oe.addEventListener("mouseleave",Rt),Je(oe,ge($c,{get cols(){return S()},get rows(){return U()},get scale(){return Me()},get blink(){return a.blink},get lines(){return a.lines},get cursor(){return a.cursor},get cursorHold(){return a.cursorHold},get fontFamily(){return e.terminalFontFamily},get lineHeight(){return e.terminalLineHeight},ref(Ne){let bt=ue;typeof bt=="function"?bt(Ne):ue=Ne}}),null),Je(oe,ge(Vr,{get when(){return e.controls!==!1},get children(){return ge(ub,{get duration(){return y()},get currentTime(){return a.currentTime},get remainingTime(){return a.remainingTime},get progress(){return a.progress},markers:V,get isPlaying(){return s()||w()=="loader"},get isPausable(){return a.isPausable},get isSeekable(){return a.isSeekable},get isMuted(){return c()},onPlayClick:q,onFullscreenClick:Tt,onHelpClick:He,onSeekClick:X,onMuteClick:Y,ref(Ne){let bt=he;typeof bt=="function"?bt(Ne):he=Ne}})}}),null),Je(oe,ge(cs,{get children(){return[ge(Yr,{get when(){return w()=="start"},get children(){return ge(yb,{onClick:ft})}}),ge(Yr,{get when(){return w()=="loader"},get children(){return ge(bb,{})}}),ge(Yr,{get when(){return w()=="error"},get children(){return ge(hb,{})}})]}}),null),Je(oe,ge(Gf,{name:"slide",get children(){return ge(Vr,{get when(){return w()=="info"},get children(){return ge(wb,{get message(){return k()},get fontFamily(){return e.terminalFontFamily},get wasPlaying(){return p()}})}})}}),null),Je(oe,ge(Vr,{get when(){return L()},get children(){return ge(Sb,{get fontFamily(){return e.terminalFontFamily},onClose:()=>F(!1),get isPausable(){return a.isPausable},get isSeekable(){return a.isSeekable},get hasAudio(){return c()!==void 0}})}}),null),er(Ne=>{let bt=!!O(),bn=ye(),na=we();return bt!==Ne._v$&&M.classList.toggle("ap-hud",Ne._v$=bt),bn!==Ne._v$2&&Nc(oe,Ne._v$2=bn),Ne._v$3=Dn(oe,na,Ne._v$3),Ne},{_v$:void 0,_v$2:void 0,_v$3:void 0}),M})()};So(["keydown","mousemove"]);function _c(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=Nb(r.terminalFontFamily,r.terminalLineHeight),a={core:e,logger:r.logger,cols:r.cols,rows:r.rows,fit:r.fit,controls:r.controls,autoPlay:r.autoPlay,terminalFontSize:r.terminalFontSize,terminalFontFamily:r.terminalFontFamily,terminalLineHeight:r.terminalLineHeight,theme:r.theme,...n},o,s=Mc(()=>(o=ge(Mb,a),o),t);return{el:o,dispose:s}}function Nb(e,t){let a=document.createElement("div");a.style.height="0px",a.style.overflow="hidden",a.style.fontSize="15px",document.body.appendChild(a);let o,s=Mc(()=>(o=ge($c,{cols:80,rows:24,lineHeight:t,fontFamily:e,lines:[]}),o),a),d={charW:o.clientWidth/80,charH:o.clientHeight/24,bordersW:o.offsetWidth-o.clientWidth,bordersH:o.offsetHeight-o.clientHeight};return s(),document.body.removeChild(a),d}var Lb=["autoPlay","autoplay","cols","idleTimeLimit","loop","markers","pauseOnMarkers","poster","preload","rows","speed","startAt","audioUrl"],Tb=["autoPlay","autoplay","cols","controls","fit","rows","terminalFontFamily","terminalFontSize","terminalLineHeight","theme"];function Uc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=Object.fromEntries(Object.entries(e).filter(n=>{let[a]=n;return Lb.includes(a)}));return r.autoPlay??=r.autoplay,r.speed??=1,{...r,...t}}function Pc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=Object.fromEntries(Object.entries(e).filter(n=>{let[a]=n;return Tb.includes(a)}));return r.autoPlay??=r.autoplay,r.controls??="auto",{...r,...t}}function Hc(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.logger??new oo,a=new ho(e,Uc(r,{logger:n})),{el:o,dispose:s}=_c(a,t,Pc(r,{logger:n})),d=a.init(),c={el:o,dispose:s,getCurrentTime:()=>d.then(a.getCurrentTime.bind(a)),getDuration:()=>d.then(a.getDuration.bind(a)),play:()=>d.then(a.play.bind(a)),pause:()=>d.then(a.pause.bind(a)),seek:u=>d.then(()=>a.seek(u))};return c.addEventListener=(u,p)=>a.addEventListener(u,p.bind(c)),c}var ml=ao(zc());var QA=ao(Jc());Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.fsharp=Prism.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?/,greedy:!0},"class-name":{pattern:/(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,lookbehind:!0,inside:{operator:/->|\*/,punctuation:/\./}},keyword:/\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|asr|assert|atomic|base|begin|break|checked|class|component|const|constraint|constructor|continue|default|delegate|do|done|downcast|downto|eager|elif|else|end|event|exception|extern|external|false|finally|fixed|for|fun|function|functor|global|if|in|include|inherit|inline|interface|internal|land|lazy|lor|lsl|lsr|lxor|match|member|method|mixin|mod|module|mutable|namespace|new|not|null|object|of|open|or|override|parallel|private|process|protected|public|pure|rec|sealed|select|sig|static|struct|tailcall|then|to|trait|true|try|type|upcast|val|virtual|void|volatile|when|while|with)\b/,number:[/\b0x[\da-fA-F]+(?:LF|lf|un)?\b/,/\b0b[01]+(?:uy|y)?\b/,/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,/\b\d+(?:[IlLsy]|UL|u[lsy]?)?\b/],operator:/([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/});Prism.languages.insertBefore("fsharp","keyword",{preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(^#)\b(?:else|endif|if|light|line|nowarn)\b/,lookbehind:!0,alias:"keyword"}}}});Prism.languages.insertBefore("fsharp","punctuation",{"computation-expression":{pattern:/\b[_a-z]\w*(?=\s*\{)/i,alias:"keyword"}});Prism.languages.insertBefore("fsharp","string",{annotation:{pattern:/\[<.+?>\]/,greedy:!0,inside:{punctuation:/^\[<|>\]$/,"class-name":{pattern:/^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,lookbehind:!0},"annotation-content":{pattern:/[\s\S]+/,inside:Prism.languages.fsharp}}},char:{pattern:/'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,greedy:!0}});(function(e){function t(T,$){return T.replace(/<<(\d+)>>/g,function(re,ue){return"(?:"+$[+ue]+")"})}function r(T,$,re){return RegExp(t(T,$),re||"")}function n(T,$){for(var re=0;re<$;re++)T=T.replace(/<<self>>/g,function(){return"(?:"+T+")"});return T.replace(/<<self>>/g,"[^\\s\\S]")}var a={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function o(T){return"\\b(?:"+T.trim().replace(/ /g,"|")+")\\b"}var s=o(a.typeDeclaration),d=RegExp(o(a.type+" "+a.typeDeclaration+" "+a.contextual+" "+a.other)),c=o(a.typeDeclaration+" "+a.contextual+" "+a.other),u=o(a.type+" "+a.typeDeclaration+" "+a.other),p=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),g=n(/\((?:[^()]|<<self>>)*\)/.source,2),w=/@?\b[A-Za-z_]\w*\b/.source,x=t(/<<0>>(?:\s*<<1>>)?/.source,[w,p]),k=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[c,x]),m=/\[\s*(?:,\s*)*\]/.source,f=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[k,m]),v=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[p,g,m]),y=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[v]),h=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[y,k,m]),V={keyword:d,punctuation:/[<>()?,.:[\]]/},I=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,B=/"(?:\\.|[^\\"\r\n])*"/.source,Q=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[Q]),lookbehind:!0,greedy:!0},{pattern:r(/(^|[^@$\\])<<0>>/.source,[B]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[k]),lookbehind:!0,inside:V},{pattern:r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[w,h]),lookbehind:!0,inside:V},{pattern:r(/(\busing\s+)<<0>>(?=\s*=)/.source,[w]),lookbehind:!0},{pattern:r(/(\b<<0>>\s+)<<1>>/.source,[s,x]),lookbehind:!0,inside:V},{pattern:r(/(\bcatch\s*\(\s*)<<0>>/.source,[k]),lookbehind:!0,inside:V},{pattern:r(/(\bwhere\s+)<<0>>/.source,[w]),lookbehind:!0},{pattern:r(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[f]),lookbehind:!0,inside:V},{pattern:r(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[h,u,w]),inside:V}],keyword:d,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:r(/([(,]\s*)<<0>>(?=\s*:)/.source,[w]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:r(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[w]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:r(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[g]),lookbehind:!0,alias:"class-name",inside:V},"return-type":{pattern:r(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[h,k]),inside:V,alias:"class-name"},"constructor-invocation":{pattern:r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[h]),lookbehind:!0,inside:V,alias:"class-name"},"generic-method":{pattern:r(/<<0>>\s*<<1>>(?=\s*\()/.source,[w,p]),inside:{function:r(/^<<0>>/.source,[w]),generic:{pattern:RegExp(p),alias:"class-name",inside:V}}},"type-list":{pattern:r(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[s,x,w,h,d.source,g,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:r(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[x,g]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:d,"class-name":{pattern:RegExp(h),greedy:!0,inside:V},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var L=B+"|"+I,F=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[L]),G=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[F]),2),N=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,S=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[k,G]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:r(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[N,S]),lookbehind:!0,greedy:!0,inside:{target:{pattern:r(/^<<0>>(?=\s*:)/.source,[N]),alias:"keyword"},"attribute-arguments":{pattern:r(/\(<<0>>*\)/.source,[G]),inside:e.languages.csharp},"class-name":{pattern:RegExp(k),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var U=/:[^}\r\n]+/.source,de=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[F]),2),O=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[de,U]),te=n(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[L]),2),j=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[te,U]);function ee(T,$){return{interpolation:{pattern:r(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[T]),lookbehind:!0,inside:{"format-string":{pattern:r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[$,U]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:r(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[O]),lookbehind:!0,greedy:!0,inside:ee(O,de)},{pattern:r(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[j]),lookbehind:!0,greedy:!0,inside:ee(j,te)}],char:{pattern:RegExp(I),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",t=/\n(?!$)/g,r=Prism.plugins.lineNumbers={getLine:function(s,d){if(!(s.tagName!=="PRE"||!s.classList.contains(e))){var c=s.querySelector(".line-numbers-rows");if(c){var u=parseInt(s.getAttribute("data-start"),10)||1,p=u+(c.children.length-1);d<u&&(d=u),d>p&&(d=p);var g=d-u;return c.children[g]}}},resize:function(s){n([s])},assumeViewportIndependence:!0};function n(s){if(s=s.filter(function(c){var u=a(c),p=u["white-space"];return p==="pre-wrap"||p==="pre-line"}),s.length!=0){var d=s.map(function(c){var u=c.querySelector("code"),p=c.querySelector(".line-numbers-rows");if(!(!u||!p)){var g=c.querySelector(".line-numbers-sizer"),w=u.textContent.split(t);g||(g=document.createElement("span"),g.className="line-numbers-sizer",u.appendChild(g)),g.innerHTML="0",g.style.display="block";var x=g.getBoundingClientRect().height;return g.innerHTML="",{element:c,lines:w,lineHeights:[],oneLinerHeight:x,sizer:g}}}).filter(Boolean);d.forEach(function(c){var u=c.sizer,p=c.lines,g=c.lineHeights,w=c.oneLinerHeight;g[p.length-1]=void 0,p.forEach(function(x,k){if(x&&x.length>1){var m=u.appendChild(document.createElement("span"));m.style.display="block",m.textContent=x}else g[k]=w})}),d.forEach(function(c){for(var u=c.sizer,p=c.lineHeights,g=0,w=0;w<p.length;w++)p[w]===void 0&&(p[w]=u.children[g++].getBoundingClientRect().height)}),d.forEach(function(c){var u=c.sizer,p=c.element.querySelector(".line-numbers-rows");u.style.display="none",u.innerHTML="",c.lineHeights.forEach(function(g,w){p.children[w].style.height=g+"px"})})}}function a(s){return s?window.getComputedStyle?getComputedStyle(s):s.currentStyle||null:null}var o=void 0;window.addEventListener("resize",function(){r.assumeViewportIndependence&&o===window.innerWidth||(o=window.innerWidth,n(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(s){if(s.code){var d=s.element,c=d.parentNode;if(!(!c||!/pre/i.test(c.nodeName))&&!d.querySelector(".line-numbers-rows")&&Prism.util.isActive(d,e)){d.classList.remove(e),c.classList.add(e);var u=s.code.match(t),p=u?u.length+1:1,g,w=new Array(p+1).join("<span></span>");g=document.createElement("span"),g.setAttribute("aria-hidden","true"),g.className="line-numbers-rows",g.innerHTML=w,c.hasAttribute("data-start")&&(c.style.counterReset="linenumber "+(parseInt(c.getAttribute("data-start"),10)-1)),s.element.appendChild(g),n([c]),Prism.hooks.run("line-numbers",s)}}}),Prism.hooks.add("line-numbers",function(s){s.plugins=s.plugins||{},s.plugins.lineNumbers=!0})})();function Nt(e){return"Dispose"in e}function _b(){wl();let e=Xc(),t=Zc(),r=Wc(),n=Yc(),a=Xc(),o=Zc(),s=Wc(),d=Yc(),c=gm(),u=Am(),p=Kc(),g=Kc(),w=cm(),x=dm(),k=new Ge("New_1"),m=(k.h.push(fe(k.k,"togglemenu",()=>k.i,()=>{Wb()})),k),f=(m.h.push(fe(m.k,"toggletheme",()=>m.i,()=>{Xb()})),m),v=(f.h.push(fe(f.k,"onkeydown",()=>f.i,ae=>{am(ae)})),f),y=(v.h.push(fe(v.k,"onstoppropagation",()=>v.i,ae=>{om(ae)})),v),h=(y.h.push(fe(y.k,"closeonbackgroundclick",()=>y.i,ae=>{im(ae)})),y),V=(h.h.push(fe(h.k,"accountbtnclick",()=>h.i,ae=>{sm(ae)})),h),I=(V.h.push(fe(V.k,"accountbtnkeydown",()=>V.i,()=>{})),V),B=(I.h.push(fe(I.k,"login",()=>I.i,()=>{yl()})),I),Q=(B.h.push(fe(B.k,"logout",()=>B.i,ae=>{lm(ae)})),B),L=(Q.h.push(new ie("dropdownattr",x)),Q),F=(L.h.push(new ie("accountbtnaria",w)),L),G=(F.h.push(new ie("avatarattr",g)),F),N=(G.h.push(new ie("avatarattrhamburger",p)),G),S=(N.h.push(new ie("iconattr",u)),N),U=(S.h.push(new ie("skeletonattr",c)),S),de=(U.h.push(new lr("accountheadertext",nm())),U),O=(de.h.push(new ie("headerattrd",d)),de),te=(O.h.push(new ie("btnmanageattrd",s)),O),j=(te.h.push(new ie("btnloginattrd",o)),te),ee=(j.h.push(new ie("btnlogoutattrd",a)),j),T=(ee.h.push(new ie("headerattr",n)),ee),$=(T.h.push(new ie("btnmanageattr",r)),T),re=($.h.push(new ie("btnloginattr",t)),$),ue=(re.h.push(new ie("btnlogoutattr",e)),re),he=Pe(ue.k,ue.h,[]);return ue.i=new Te(he[1],Tg(he[0])),um(),_.Empty}function Ub(){let e=new Ge("New_1"),t=(e.h.push(new Wt("onafterrender","",()=>{qA("ws-template"),wl(),xl(),Vl("Js/line-numbers.js"),kl()})),e),r=(t.h.push(fe(t.k,"copyfromclosest",()=>t.i,d=>{HA(d)})),t),n=(r.h.push(fe(r.k,"ontabclick",()=>r.i,d=>{GA(d.Event)})),r),a=Pe(n.k,n.h,[]),o=new Te(a[1],zA(a[0]));return(n.i=o,o).Doc}function Pb(){let e=new Ge("New_1"),t=(e.h.push(new Wt("onafterrender","",()=>{qA("ws-template"),wl(),xl(),Vl("Js/line-numbers.js"),kl()})),e),r=(t.h.push(fe(t.k,"copyfromclosest",()=>t.i,d=>{HA(d)})),t),n=(r.h.push(fe(r.k,"ontabclick",()=>r.i,d=>{GA(d.Event)})),r),a=Pe(n.k,n.h,[]),o=new Te(a[1],zA(a[0]));return(n.i=o,o).Doc}function Hb(){return lw()}function zb(){let e=new Ge("New_1"),t=(e.h.push(new Wt("onafterrender","",()=>{xl(),Vl("Js/line-numbers.js"),kl()})),e),r=Pe(t.k,t.h,[]),n=new Te(r[1],Sm(r[0]));return(t.i=n,n).Doc}function Jb(){return dw()}function Ob(){let e=_.TextView(uw()),t=_.TextView(gw()),r=new Ge("New_1"),n=(r.h.push(new Wt("onafterrender","",()=>{Aw()})),r),a=(n.h.push(new W("errortitle",t)),n),o=(a.h.push(new W("errormessage",e)),a),s=(o.h.push(fe(o.k,"onretry",()=>o.i,()=>{pw()})),o),d=(s.h.push(fe(s.k,"onback",()=>s.i,()=>{hw()})),s),c=Pe(d.k,d.h,[]),u=new Te(c[1],Dm(c[0]));return(d.i=u,u).Doc}function jb(){let e=new Ge("New_1"),t=(e.h.push(new Wt("onafterrender","",()=>{Ew()})),e),r=(t.h.push(new W("invid",Bw())),t),n=(r.h.push(new W("invdate",Iw())),r),a=(n.h.push(new W("invstatus",Cw())),n),o=(a.h.push(new W("invamount",Vw())),a),s=(o.h.push(new W("invsub",kw())),o),d=(s.h.push(new W("billtoname",xw())),s),c=(d.h.push(new W("billtoaddr",yw())),d),u=(c.h.push(new W("billtovat",vw())),c),p=Pe(u.k,u.h,[]),g=new Te(p[1],Fm(p[0]));return(u.i=g,g).Doc}function Kb(){return Fw()}function Yb(){let e=new Ge("New_1"),t=(e.h.push(new Wt("onafterrender","",()=>{zw()})),e),r=(t.h.push(new W("messagetext",Hw())),t),n=(r.h.push(new ie("detailsattr",Pw())),r),a=(n.h.push(new W("detailsdoc",Uw())),n),o=Pe(a.k,a.h,[]),s=new Te(o[1],Mm(o[0]));return(a.i=s,s).Doc}function Wb(){let e=fs("navmenu"),t=fs("openIcon"),r=fs("closeIcon"),n=globalThis.document.body;e.classList.toggle("h-screen"),t.classList.toggle("hidden-open-icon"),r.classList.toggle("visible-close-icon"),n.classList.toggle("overflow-hidden")}function Zb(e){let t=new vt("New_5"),r=Re(e);try{for(;r.MoveNext();){let n=r.Current;t.DAdd(n[0],n[1])}}finally{let n=r;typeof n=="object"&&Nt(n)&&r.Dispose()}return t}function wl(){SA();let e=globalThis.localStorage.getItem("color-theme");e=="dark"||e==null&&em()?Ts(!0):Ts(!1)}function Xb(){tm(DA()=="dark"?"light":"dark")}function SA(){let e=DA(),t=globalThis.document.querySelectorAll(".themed-iframe");for(let r=0,n=vl(t.length)-1;r<=n;r++){let a=t[r],o=a.getAttribute("data-src");if(o!=null){let s=new URL(o,globalThis.location.href);s.searchParams.set("theme",e),a.setAttribute("src",String(s))}}}function em(){return globalThis.matchMedia("(prefers-color-scheme: dark)").matches}function Ts(e){e?qs().classList.add("dark"):qs().classList.remove("dark")}function tm(e){Ts(e=="dark"),globalThis.localStorage.setItem("color-theme",e),SA()}function DA(){return qs().classList.contains("dark")?"dark":"light"}function qs(){return globalThis.document.documentElement}function le(e,t){return FA(e,t),e[t]}function Ce(e){return e.dims===2?e.length*e.length:e.length}function FA(e,t){(t<0||t>=e.length)&&it("Index was outside the bounds of the array.")}function ka(e,t,r){FA(e,t),e[t]=r}function vl(e){let t=rm(e);return t>2147483647?t-4294967296:t}function it(e){throw new Error(e)}function rm(e){return(e<0?Math.ceil(e):Math.floor(e))>>>0}function Gs(e,t){let r=1+t-e;return r<=0?[]:Dy(r,n=>n+e)}function en(e){return[e.K,e.V]}var rt=class{Equals(t){return this===t}GetHashCode(){return-1}},Ge=class extends rt{i;k;h;s;constructor(t){if(t=="New_1"){let r;super(),this.i=null,this.k=(r=Ww(),String(r)),this.h=Kd([]),Vn(this,"s",null)}}};function nm(){return Sr.AccountHeaderText}function am(e){e.Event.key=="Escape"&&Rr().Set(!1)}function om(e){e.Event.stopPropagation()}function im(){Rr().Get()&&Rr().Set(!1)}function sm(){Rr().Set(!Rr().Get())}function lm(){kt(z(()=>(Rr().Set(!1),J(fm(!0),()=>Z(null)))),null)}function dm(){return De("hidden",D(e=>!e,Rr().View))}function cm(){return gt("aria-expanded",D(e=>e?"true":"false",Rr().View))}function Kc(){return be.Concat([gt("src",MA()),De("hidden",D(e=>!e,NA())),De("opacity-0",Va().View)])}function Am(){return be.Concat([De("hidden",NA()),De("opacity-0",Va().View)])}function gm(){return De("opacity-0 hidden",D(e=>!e,Va().View))}function Yc(){return ii(si())}function Wc(){return ii(si())}function Zc(){return ii(D(e=>!e,si()))}function Xc(){return ii(si())}function um(){kt(z(()=>(Va().Set(!0),J(LA(),()=>J(mv(500),()=>(Va().Set(!1),ne()))))),null)}function Rr(){return Sr.isOpen}function MA(){return Sr.avatarSrcV}function NA(){return Sr.hasAvatarV}function Va(){return Sr.isLoading}function ii(e){return be.Concat([De("hidden",D(t=>!t,e)),De("flex",e)])}function si(){return Sr.isAuthedV}function eA(){return Sr.userV}function pm(){return Sr.displayNameV}function fe(e,t,r,n){return new Uo(t,"",a=>o=>{let s=r();return s.SetAnchorRoot(a),n({Vars:s,Anchors:s,Target:a,Event:o})})}function Pe(e,t,r){let n=new vt("New_5"),a=new Zt("New_3"),o=Re(t);try{for(;o.MoveNext();){let s=o.Current,d=s.Name;a.SAdd(d),n.set_Item(d,s)}}finally{let s=o;typeof s=="object"&&Nt(s)&&o.Dispose()}return[mi(t,$l(s=>{let d=s[0],c=s[1],u=s[2];if(a.Contains(d))return null;{let p=c===0?Et.GetOrAddHoleFor(e,d,()=>{let g=u==null?null:C(u.$0),w=g==null?"":g.$0,x=R.Create_1(w);return new Oe(d,x)}):c===1?Et.GetOrAddHoleFor(e,d,()=>{let g=u==null?null:C(u.$0),w=g==null?0:g.$0,x=R.Create_1(w);return new Yo(d,x)}):c===2?Et.GetOrAddHoleFor(e,d,()=>{let g=u==null?null:C(u.$0),w=g==null?!1:g.$0,x=R.Create_1(w);return new Ba(d,x)}):c===3?Et.GetOrAddHoleFor(e,d,()=>{let g=u==null?null:C(u.$0),w=g==null?-864e13:g.$0,x=R.Create_1(w);return new Wo(d,x)}):c===4?Et.GetOrAddHoleFor(e,d,()=>new Zo(d,R.Create_1([]))):c===5?Et.GetOrAddHoleFor(e,d,()=>new Ea(d,R.Create_1(C(globalThis.document.querySelector("[ws-dom="+d+"]"))))):c===6?Et.GetOrAddHoleFor(e,d,()=>{let g=u==null?null:C(u.$0),w=g==null?[]:g.$0,x=R.Create_1(w);return new Xo(d,x)}):it("Invalid value type");return n.set_Item(d,p),C(p)}},r)),{$:0,$0:n}]}function yl(){globalThis.location.href=hm()}function hm(){return TA(globalThis.location.pathname+globalThis.location.search)}function fm(e){return z(()=>hg(Ar(z(()=>J(Vv(),()=>Z(null))),t=>(console.error("AuthClient.Logout RPC failed",t),ne())),z(()=>(qn().Set(null),e?Ar(z(()=>(globalThis.location.reload(),ne())),()=>ne()):ne()))))}function LA(){return z(()=>{let e=qn().Get();return e!=null&&e.$==1?Z(C(e.$0)):(Rs().Set(!0),Dr(z(()=>Ar(z(()=>J(Cv(),t=>(qn().Set(t),Z(t)))),t=>(console.error("AuthClient.FetchMe RPC failed",t),qn().Set(null),Z(null)))),()=>{Rs().Set(!1)}))})}function Ca(){return Pa.IsAuthedView}function TA(e){return"https://api.websharper.io/auth/github/start?returnUrl="+encodeURIComponent(e)}function bm(){return Pa.UserView}function qn(){return Pa.userVar}function Rs(){return Pa.isFetchingVar}var _=class e extends rt{docNode;updates;static get Empty(){return e.Mk(null,Kt())}static Mk(t,r){return new e(t,r)}static TextView(t){let r=cx();return e.Mk(fy(r),D(n=>{Ax(r,n)},t))}static Concat(t){return $a(e.Empty,e.Append,Ra(t))}static EmbedView(t){let r=gx();return e.Mk(by(r),D(()=>{},s1(n=>(ux(r,n.docNode),n.updates),t)))}static RunBefore(t,r){let n=globalThis.document.createTextNode("");t.parentNode.insertBefore(n,t),e.RunBetween(n,t,r)}static Append(t,r){return e.Mk(my(t.docNode,r.docNode),Rn(t.updates,r.updates))}static TextNode(t){return e.Mk(wy(globalThis.document.createTextNode(t)),Kt())}static BindView(t,r){return e.EmbedView(D(t,r))}static RunBetween(t,r,n){zl(r,n.docNode);let a=px(t,r,n.docNode);Ho(sl()||ll()?EA(vA(!1,a,n.docNode)):()=>{yA(!1,a,n.docNode)},n.updates)}static RunInPlace(t,r,n){let a=hx(r,n.docNode);Ho(sl()||ll()?EA(vA(t,a,n.docNode)):()=>{yA(t,a,n.docNode)},n.updates)}static ConvertSeqBy(t,r,n){let a=r,o=d1(t,(s,d)=>a(s)(d),n);return e.Flatten(o)}static Element(t,r,n){let a=be.Concat(r),o=e.Concat(n);return Ta.New(globalThis.document.createElement(t),a,o)}static Input(t,r){return e.InputInternal("input",()=>mi(t,[eg(r)]))}static Flatten(t){return e.EmbedView(D(r=>e.Concat(r),t))}static InputInternal(t,r){let n=globalThis.document.createElement(t);return Ta.New(n,be.Concat(r(n)),e.Empty)}ReplaceInDom(t){let r=globalThis.document.createTextNode("");t.parentNode.replaceChild(r,t),e.RunBefore(r,this)}constructor(t,r){super(),this.docNode=t,this.updates=r}},Te=class extends rt{doc;allVars;anchorRoot;get Doc(){return this.doc}SetAnchorRoot(t){this.anchorRoot=t}Hole(t){return this.allVars.Item(t)}constructor(t,r){super(),this.doc=r,this.allVars=t.$==0?t.$0:it("Should not happen"),this.anchorRoot=null}};function qA(e){Promise.resolve().then(()=>ao(Oc()));let t=globalThis.document.getElementById(e);t==null?console.log("Container not found:",e):Hc("Assets/ws-template.cast",t,{autoPlay:!0,cols:100,idleTimeLimit:6,loop:!0,rows:20,speed:2.5,theme:"dracula"})}function xl(){mm().highlightAll()}function kl(){let e=globalThis.document.querySelectorAll("[data-name='snippet']");for(let t=0,r=vl(e.length)-1;t<=r;t++)wm(e[t])}function GA(e){let t=vm(e);t==null||ym(t.$0)}function mm(){return Sg.prism}function wm(e){let t=e.querySelectorAll("[role='tab']");if(t.length>0){let r=t[0];RA(r);let n=an(e.querySelector(".tab-indicator"));n==null||$A(n.$0,r);let a=an(r.getAttribute("data-target"));a==null||_A(e,a.$0)}}function vm(e){let t=e.target;if(t instanceof Element){let r=an(t.closest("[role='tab']"));return r==null?null:C(r.$0)}else return null}function ym(e){let t=an(e.closest("[data-name='snippet']"));if(t!=null&&t.$==1){let r=t.$0,n=an(r.querySelector(".tab-indicator"));n==null||$A(n.$0,e),RA(e);let a=an(e.getAttribute("data-target"));a==null||_A(r,a.$0)}}function RA(e){let t=an(e.parentElement);t!=null&&t.$==1&&wi(r=>{r.setAttribute("aria-selected",ce(r,e)?"true":"false")},UA(t.$0,"[role='tab']"))}function an(e){return e==null?null:C(e)}function $A(e,t){km(e,xm(t,t.parentElement))}function _A(e,t){wi(r=>{r.getAttribute("data-lang")==t?r.classList.remove("hidden"):r.classList.add("hidden")},UA(e,"[role='tabpanel']"))}function xm(e,t){let r,n;return tk((r=e.getBoundingClientRect().left-t.getBoundingClientRect().left,String(r)+"px"),(n=e.getBoundingClientRect().width,String(n)+"px"))}function km(e,t){e.style.left=t.LeftPx,e.style.width=t.WidthPx}function Vl(e){import(new URL(e,document.baseURI).toString())}function fs(e){return globalThis.document.getElementById(e)}function UA(e,t){let r=e.querySelectorAll(t);return gn(()=>Fr(n=>r[n],Gs(0,vl(r.length)-1)))}function tr(e){return"$"+String(e)}function tA(e){ml.default.fire(PA("Error!",e,"error"))}function Cl(e){Il(e,t=>{ml.default.fire(PA("Error!",t,"error"))})}function PA(e,t,r){let n;return n={},n.title=e,n.text=t,n.icon=r,n.buttonsStyling=!1,n.customClass={popup:"rounded-xl shadow-2xl p-6",title:"text-xl font-bold text-gray-900 dark:text-white mb-1",htmlContainer:"text-sm text-gray-600 dark:text-gray-400",confirmButton:"inline-flex items-center justify-center rounded-lg h-10 px-4 text-sm font-medium text-white dark:text-gray-950 bg-gray-950 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ml-2",icon:"transform scale-75 mt-4"},n}function Il(e,t){e.$==1&&t(e.$0)}function HA(e){let t=e.Target;kt(Vm(ut(t.closest("div").querySelector(".text-to-copy").textContent),t.querySelector(".copy"),t.querySelector(".success"),t.querySelector(".failed")),null)}function Vm(e,t,r,n){return z(()=>Ar(z(()=>J(Rl(navigator.clipboard.writeText(e)),()=>($s(t),_s(r),rA(t,r,1e3),ne()))),()=>($s(t),_s(n),rA(t,n,1e3),ne())))}function $s(e){e?.classList.add("hidden")}function _s(e){e?.classList.remove("hidden")}function rA(e,t,r){setTimeout(()=>{_s(e),$s(t)},r)}function ce(e,t){if(e===t)return!0;{let a=typeof e;if(a=="object"){if(e==null||t===null||t===void 0||!ce(typeof t,"object"))return!1;if("Equals"in e)return e.Equals(t);if("Equals"in t)return!1;if(e instanceof Array&&t instanceof Array)return nA(e,t);if(e instanceof Date&&t instanceof Date)return Cm(e,t);{let o=e,s=t,d=[!0],c;for(var r in o)if((u=>(d[0]=!o.hasOwnProperty(u)||s.hasOwnProperty(u)&&ce(o[u],s[u]),!d[0]))(r))break;if(d[0]){let u;for(var n in s)if((p=>(d[0]=!s.hasOwnProperty(p)||o.hasOwnProperty(p),!d[0]))(n))break}return d[0]}}else return a=="function"&&("$Func"in e?e.$Func===t.$Func&&e.$Target===t.$Target:"$Invokes"in e&&"$Invokes"in t&&nA(e.$Invokes,t.$Invokes))}}function nA(e,t){let r,n;if(Ce(e)===Ce(t)){for(r=!0,n=0;r&&n<Ce(e);)ce(le(e,n),le(t,n))||(r=!1),n=n+1;return r}else return!1}function Cm(e,t){return e.getTime()===t.getTime()}function Ia(e){let t=typeof e;return t=="function"?0:t=="boolean"?e?1:0:t=="number"?e:t=="string"?Lo(e):t=="object"?e==null?0:e instanceof Array?Im(e):Bm(e):t=="bigint"?Lo(String(e)):t=="symbol"?Lo(e.description):0}function cn(e,t){if(e===t)return 0;{let a=typeof e;switch(a=="boolean"||a=="number"||a=="bigint"||a=="string"?1:a=="object"?2:a=="function"?3:a=="symbol"?4:0){case 0:return typeof t>"u"?0:-1;case 1:return e<t?-1:1;case 2:if(e===null)return-1;if(t===null)return 1;if("CompareTo"in e)return e.CompareTo(t);if("CompareTo0"in e)return e.CompareTo0(t);if(e instanceof Array&&t instanceof Array)return Em(e,t);if(e instanceof Date&&t instanceof Date)return Qm(e,t);{let o=e,s=t,d=[0],c;for(var r in o)if((u=>o.hasOwnProperty(u)?s.hasOwnProperty(u)?(d[0]=cn(o[u],s[u]),d[0]!==0):(d[0]=1,!0):!1)(r))break;if(d[0]===0){let u;for(var n in s)if((p=>s.hasOwnProperty(p)?!o.hasOwnProperty(p)&&(d[0]=-1,!0):!1)(n))break}return d[0]}break;case 3:return it("Cannot compare function values.");case 4:return it("Cannot compare symbol values.")}}}function Lo(e){let t;if(e===null)return 0;t=5381;for(let r=0,n=e.length-1;r<=n;r++)t=Go(t,e[r].charCodeAt());return t}function Im(e){let t=-34948909;for(let r=0,n=Ce(e)-1;r<=n;r++)t=Go(t,Ia(le(e,r)));return t}function Bm(e){if("GetHashCode"in e)return e.GetHashCode();{let r=[0],n;for(var t in e)if((a=>(r[0]=Go(Go(r[0],Lo(a)),Ia(e[a])),!1))(t))break;return r[0]}}function Em(e,t){let r,n;if(Ce(e)<Ce(t))return-1;if(Ce(e)>Ce(t))return 1;for(r=0,n=0;r===0&&n<Ce(e);)r=cn(le(e,n),le(t,n)),n=n+1;return r}function Qm(e,t){return cn(e.getTime(),t.getTime())}function Go(e,t){return(e<<5)+e+t}var bs,ms,ws,vs,ys,xs,ks,Vs,Cs,Is,Bs,Es,Qs,Ss;function zA(e){return e?et("features",C("content"),()=>se(`\r
        <div class="space-y-40" ws-onafterrender="OnAfterRender">\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 pt-36 sm:pt-40 lg:px-8 lg:pb-12 lg:pt-48 xl:px-0 2xl:max-w-7xl">\r
                    <div class="relative z-10 text-center w-full">\r
                        <div id="track" class="relative">\r
                            <!-- Arrows -->\r
                            <button id="mini-prev" class="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 dark:text-white cursor-pointer">&#10094;</button>\r
                            <button id="mini-next" class="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 dark:text-white cursor-pointer">&#10095;</button>\r
\r
                            <div class="relative overflow-hidden">\r
                                <div id="mini-inner" class="flex w-full transition-transform duration-700 ease-out will-change-transform">\r
                                    <!-- Slide 1 -->\r
                                    <div class="min-w-full w-full snap-start shrink-0 px-2">\r
                                        <!-- Headline -->\r
                                        <h1 class="max-w-2xl mx-auto text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl">Full-stack, functional reactive web programming for .NET</h1>\r
\r
                                        <!-- Tagline -->\r
                                        <p class="mt-6 max-w-lg mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300">Develop microservices, client-server web applications, reactive SPAs, and more in C# or F#.</p>\r
\r
                                        <!-- CTA buttons -->\r
                                        <div class="mt-10 flex flex-wrap items-center justify-center gap-6 lg:flex-nowrap">\r
                                            <a href="https://docs.websharper.com/core/getting-started" class="w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                                                <span class="relative text-sm">Get started</span>\r
                                            </a>\r
                                            <div class="text-primary flex h-10 items-center gap-2 rounded-xl border border-gray-300 backdrop-blur-xl pl-4 text-base font-medium leading-7 dark:border-gray-800 dark:bg-transparent">\r
                                                <span class="text-xs text-gray-500">$</span>\r
                                                <span class="text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70">dotnet new install WebSharper.<span class="bg-gradient-to-r from-gray-500 to-transparent bg-clip-text text-transparent dark:from-white/70">Templates</span></span>\r
                                                <button ws-onclick="CopyFromClosest" class="copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer">\r
                                                    <span class="sr-only">Copy</span>\r
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"></path>\r
                                                    </svg>\r
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>\r
                                                    </svg>\r
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path>\r
                                                    </svg>\r
                                                </button>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- Slide 2 -->\r
                                    <div class="min-w-full w-full snap-start shrink-0 p-0">\r
                                        <!-- was p-2 -->\r
                                        <div class="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-0 items-start">\r
                                            <div class="md:col-span-1 m-0 p-0">\r
                                                <img src="./Assets/images/slay.png" alt="DSL + AI" class="block w-full h-56 md:h-64 object-contain object-left-top m-0 p-0 rounded-none shadow-none select-none">\r
                                            </div>\r
\r
                                            <div class="md:col-span-2 text-center md:text-left self-start">\r
                                                <h1 class="max-w-2xl text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl">\r
                                                    DSL &amp; AI Integration\r
                                                </h1>\r
                                                <p class="mt-4 text-lg text-gray-700 dark:text-gray-300">\r
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.\r
                                                </p>\r
\r
                                                <a href="./dsl-ai" class="mt-6 w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                                                            flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                                                            before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r
                                                            before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r
                                                            hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                                                    <span class="relative text-sm">Learn more</span>\r
                                                </a>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <!-- GIF -->\r
                        <div class="mt-12 flex justify-center">\r
                            <div id="ws-template" class="w-full max-w-3xl h-auto"></div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Sample code -->\r
                    <div id="code-snippet" class="scroll-my-16 relative z-10 mt-20 xl:w-4/5 mx-auto">\r
                        <div class="rounded-3xl p-px from-gray-200 to-gray-950/5 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">\r
                            <div data-name="snippet" class="rounded-[23px] border border-gray-200/10 bg-white shadow-xl shadow-gray-950/5 pb-3 pr-3 text-sm backdrop-blur-3xl dark:border-transparent dark:bg-gray-950 md:ml-0">\r
                                <div class="flex items-center gap-4 px-6 pt-2 pb-1">\r
                                    <div class="flex space-x-1.5">\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    </div>\r
\r
                                    <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                        <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                <defs id="defs2"></defs>\r
                                                <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                    <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                </g>\r
                                            </svg>\r
                                            <span class="text-xs">Client.fs</span>\r
                                        </button>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="html" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24">\r
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"></path>\r
                                            </svg>\r
\r
                                            <span class="text-xs">index</span>\r
                                        </button>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="code-result" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24">\r
                                                <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path>\r
                                                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>\r
                                            </svg>\r
                                            <span class="text-xs">Result</span>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <div class="relative flex">\r
                                    <div class="absolute ml-1 flex h-full w-14 flex-none flex-col items-center justify-between py-3 text-gray-500 dark:text-white/60">\r
                                        <svg width="24" height="216" fill="none">\r
                                            <path d="M3 69l6-6m-2-5a7 7 0 1014 0 7 7 0 00-14 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                            <path d="M8 7H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-3m3.707-10.293l-3.414-3.414A1 1 0 0015.586 3H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7.414a1 1 0 00-.293-.707zM7 103a2 2 0 100-4 2 2 0 000 4zm0 0v10m10-6a2 2 0 100-4 2 2 0 000 4zm0 0a3 3 0 01-3 3h-4a3 3 0 00-3 3m0 0a2 2 0 100 4 2 2 0 000-4z" stroke="currentColor" stroke-width="1.5"></path>\r
                                            <path d="M11.5 160.031a.75.75 0 00-1-1.118l1 1.118zm-8-1.118a.75.75 0 00-1 1.118l1-1.118zm6.972 6.149a.75.75 0 10.993-1.124l-.993 1.124zm-7.937-1.124a.75.75 0 10.993 1.124l-.993-1.124zm7.022-.368l-.64-.393.64.393zm-5.114 0l.64-.393-.64.393zM3 161.25a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zM8 147l.372-.651A.75.75 0 007.25 147H8zm14 8l.372.651a.75.75 0 000-1.302L22 155zm-14.75 0a.75.75 0 001.5 0h-1.5zm5.378 4.492a.75.75 0 10.744 1.302l-.744-1.302zM7 157.75A2.25 2.25 0 019.25 160h1.5A3.75 3.75 0 007 156.25v1.5zm0-1.5A3.75 3.75 0 003.25 160h1.5A2.25 2.25 0 017 157.75v-1.5zm2.624 3.298A5.225 5.225 0 017 160.25v1.5a6.73 6.73 0 003.376-.903l-.752-1.299zM9.25 160v.197h1.5V160h-1.5zm0 .197V162h1.5v-1.803h-1.5zM7 160.25a5.225 5.225 0 01-2.624-.702l-.752 1.299A6.73 6.73 0 007 161.75v-1.5zM4.75 162v-1.803h-1.5V162h1.5zm0-1.803V160h-1.5v.197h1.5zm5.75-1.284a5.209 5.209 0 01-.876.635l.752 1.299c.403-.234.78-.507 1.124-.816l-1-1.118zm-6.124.635a5.21 5.21 0 01-.876-.635l-1 1.118c.344.309.721.582 1.124.816l.752-1.299zm4.86 4.701c.451.212.867.487 1.236.813l.993-1.124a6.77 6.77 0 00-1.588-1.046l-.64 1.357zM9.25 162c0 .433-.122.835-.332 1.177l1.277.787A3.737 3.737 0 0010.75 162h-1.5zm-.332 1.177A2.247 2.247 0 017 164.25v1.5a3.748 3.748 0 003.195-1.786l-1.277-.787zm-5.39 1.885a5.25 5.25 0 011.235-.813l-.64-1.357a6.77 6.77 0 00-1.588 1.046l.993 1.124zM7 164.25c-.81 0-1.52-.427-1.918-1.073l-1.277.787A3.748 3.748 0 007 165.75v-1.5zm-1.918-1.073A2.235 2.235 0 014.75 162h-1.5c0 .719.203 1.392.555 1.964l1.277-.787zM4 161.25H3v1.5h1v-1.5zm7 0h-1v1.5h1v-1.5zm-3.372-13.599l14 8 .744-1.302-14-8-.744 1.302zM8.75 155v-8h-1.5v8h1.5zm12.878-.651l-9 5.143.744 1.302 9-5.143-.744-1.302z" fill="currentColor"></path>\r
                                            <path d="M3 205h8m-8 0v7a1 1 0 001 1h7m-8-8v-7a1 1 0 011-1h6a1 1 0 011 1v7m0 0v8m0-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7m4-11h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z" stroke="currentColor" stroke-width="1.5"></path>\r
                                        </svg>\r
                                        <svg width="24" height="72" fill="none">\r
                                            <path d="M10.325 52.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                            <path d="M15 60a3 3 0 11-6 0 3 3 0 016 0zM5.121 17.804A13.936 13.936 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                        </svg>\r
                                    </div>\r
                                    <div class="ml-auto w-[calc(100%-4rem)] mt-1">\r
                                        <div class="flex overflow-hidden py-3 pl-3 font-mono text-xs dark:shadow-2xl shadow-gray-950/5 border rounded-tr-2xl border-gray-300/50 dark:border-gray-800 border-b-0">\r
                                            <!-- My custom line numbers -->\r
                                            <div>\r
                                                <pre aria-hidden="true" class="line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40"></pre>\r
                                            </div>\r
                                            <div class="relative w-full snippet-code">\r
                                                <div class="absolute inset-0 overflow-auto custom-scrollbar" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                    <!-- PrismaJs line numbers -->\r
                                                    <pre class="line-numbers language-fsharp custom-scrollbar !overflow-auto"><code class="mt-[-17px] text-sm block leading-[1.13rem] language-fsharp text-white">[&lt;JavaScript&gt;]\r
module Client =\r
    type IndexTemplate = Template&lt;"wwwroot/index", ClientLoad.FromDocument&gt;\r
\r
    let People =\r
        ListModel.FromSeq [\r
            "John"\r
            "Paul"\r
        ]\r
\r
    [&lt;SPAEntryPoint&gt;]\r
    let Main () =\r
        let newName = Var.Create ""\r
        IndexTemplate.Main()\r
            .ListContainer(\r
                People.View.DocSeqCached(fun (name: string) -> \r
                    IndexTemplate.ListItem().Name(name).Doc()\r
                )\r
            )\r
            .Name(newName)\r
            .Add(fun _ ->\r
                People.Add(newName.Value)\r
                newName.Value &lt;- ""\r
            )\r
            .Doc()\r
        |> Doc.RunById "main"</code></pre>\r
                                                </div>\r
                                                <div class="absolute inset-0 hidden overflow-hidden custom-scrollbar" role="tabpanel" aria-labelledby="tab-2" data-lang="html">\r
                                                    <pre class="line-numbers -mb-20 !overflow-auto language-html custom-scrollbar"><code class="mt-[-17px] text-sm block leading-[1.13rem] language-html text-white">&lt;!DOCTYPE html&gt;\r
&lt;html lang="en"&gt;\r
&lt;head&gt;\r
    &lt;title&gt;spa_websharper&lt;/title&gt;\r
    &lt;meta charset="utf-8" /&gt;\r
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;\r
    &lt;link rel="stylesheet" type="text/css" href="Scripts/spa-websharper.css" /&gt;\r
    &lt;style&gt;\r
        /* Don't show the not-yet-loaded templates */\r
        [ws-template], [ws-children-template] { display: none; }\r
    &lt;/style&gt;\r
    &lt;script type="text/javascript" src="Scripts/spa-websharper.head.js"&gt;&lt;/script&gt;\r
&lt;/head&gt;\r
&lt;body&gt;\r
    &lt;h1&gt;My list of unique people&lt;/h1&gt;\r
    &lt;div id="main" ws-children-template="Main"&gt;\r
        &lt;ul ws-hole="ListContainer"&gt;\r
            &lt;li ws-template="ListItem"&gt;\${Name}&lt;/li&gt;\r
        &lt;/ul&gt;\r
        &lt;div&gt;\r
            &lt;input ws-var="Name" placeholder="Name" /&gt;\r
            &lt;button ws-onclick="Add"&gt;Add&lt;/button&gt;\r
            &lt;div&gt;You are about to add: \${Name}&lt;/div&gt;\r
        &lt;/div&gt;\r
    &lt;/div&gt;\r
    &lt;script type="module" src="Scripts/spa-websharper.min.js"&gt;&lt;/script&gt;\r
&lt;/body&gt;\r
&lt;/html&gt;</code></pre>\r
                                                </div>\r
                                                <div class="absolute inset-0 hidden overflow-hidden" role="tabpanel" aria-labelledby="tab-2" data-lang="code-result">\r
                                                    <iframe src="./snippets/spa/index" class="w-full h-full pr-2 mr-4 rounded-md bg-white" frameborder="0"></iframe>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="lg:col-span-3 bg-white/90 dark:bg-gray-900 shadow-2xl shadow-gray-950/5 dark:shadow-gray-950/15 border border-gray-300/50 dark:border-gray-800 p-3 lg:rounded-br-3xl">\r
                                            <span class="border-b border-brand-secondary pb-1 text-xs font-medium tracking-wide text-gray-500 dark:text-white">Terminal</span>\r
                                            <div class="mt-3 w-max font-mono text-xs text-gray-400 dark:text-white/60">\r
                                                <div class="text-green-500 font-bold">\r
                                                    VITE <span class="text-green-500 font-normal">v6.3.5</span>\r
                                                    <span class="text-gray-400 font-normal"> ready in </span>\r
                                                    <span class="dark:text-white text-gray-300">663</span>\r
                                                    <span class="text-gray-300"> ms</span>\r
                                                </div>\r
                                                <div class="text-green-500 mt-2">\r
                                                    \u279C <span class="dark:text-white text-gray-300">Local:</span>\r
                                                    <a href="#code-snippet" class="text-sky-400 underline ml-2">http://localhost:24347/</a>\r
                                                </div>\r
                                                <div class="text-green-400 mt-1">\r
                                                    \u279C <span class="text-gray-400">Network:</span>\r
                                                    <span class="text-gray-400"> use </span><span class="dark:text-white text-gray-300 font-bold">--host</span>\r
                                                    <span class="text-gray-400"> to expose</span>\r
                                                </div>\r
                                                <div class="text-green-400 mt-1">\r
                                                    \u279C <span class="text-gray-400">press </span><span class="dark:text-white text-gray-300 font-bold">h</span>\r
                                                    <span class="text-gray-400"> + </span><span class="dark:text-white text-gray-300 font-bold">enter</span>\r
                                                    <span class="text-gray-400"> to show help</span>\r
                                                </div>\r
                                                <span class="dark:text-white text-gray-300">\u2588</span>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Shaded background color -->\r
                    <div class="dark:hidden absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]"></div>\r
                    <div class="hidden dark:block absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.900/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.900/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]"></div>\r
                    <div class="absolute h-96 inset-x-[10%] -bottom-[20%] my-auto hidden dark:block">\r
                        <div aria-hidden="true" class="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl">\r
                            <!--background colors here -->\r
                            <div class="h-72 bg-gradient-to-br from-pink-400 to-purple-400 blur-3xl dark:from-blue-800"></div>\r
                            <div class="h-96 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-sky-950"></div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="overflow-hidden mt-16 lg:mt-0">\r
                    <div class="relative space-y-12">\r
                        <p class="text-center text-gray-950 dark:text-white">Trusted by fast-growing companies around the world</p>\r
                        <div class="max-w-4xl mx-auto">\r
                            <div class="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/mcgraw.png" alt="">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/ford.png" alt="">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/microsoft.png" alt="">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/elte.png" alt="">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/unmc.png" alt="">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/duf.png" alt="">\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <div class="mx-auto text-center sm:w-2/3 lg:w-1/2">\r
                        <h2 class="text-3xl font-bold text-gray-800 dark:text-white">Functional, reactive applications with WebSharper.UI</h2>\r
                        <p class="mt-6 text-gray-500 dark:text-gray-200">Bind composite data models to your reactive user interfaces. The flow of reactive values through the code yet concise, readability.</p>\r
                        <div class="mt-6 flex justify-center">\r
                            <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white">Learn more</span>\r
                            </a>\r
                        </div>\r
                    </div>\r
                    <div class="relative mt-16">\r
                        <div class="relative z-10 border dark:border-gray-800 rounded-xl dark:bg-transparent dark:p-px">\r
                            <div data-name="snippet" class="rounded-[23px] text-sm backdrop-blur-3xl">\r
                                <div class="flex items-center gap-4 rounded-t-xl px-4 py-2 dark:bg-gray-950">\r
                                    <div class="flex space-x-1.5">\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    </div>\r
\r
                                    <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                        <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                <defs id="defs2"></defs>\r
                                                <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                    <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                </g>\r
                                            </svg>\r
                                            <span class="text-xs">AddTwoNumbers.fs</span>\r
                                        </button>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="js" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                            </svg>\r
                                            <span class="text-xs">addTwoNumbers.js</span>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <div class="relative rounded-b-xl bg-gray-200/10 text-xs dark:mt-px dark:bg-gray-950">\r
                                    <div class="flex p-4 pl-2 overflow-hidden">\r
                                        <div class="sm:pr-4">\r
                                            <pre aria-hidden="true" class="line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40"></pre>\r
                                        </div>\r
                                        <div class="relative w-full snippet-code">\r
                                            <div class="relative transition-all duration-1000 custom-scrollbar max-w-full overflow-y-hidden pr-0 sm:pr-[52%] lg:pr-[46.8%]" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                <pre class="line-numbers language-fsharp inline-block min-w-max"><code class="mt-[-17px] block md:leading-[1.13rem] language-fsharp text-white">let x = Var.Create 1\r
let y = Var.Create 1\r
\r
let addNumbers =\r
    div [] [\r
        p [] [text "x "; Doc.InputType.IntUnchecked [] x]\r
        p [] [text "y "; Doc.InputType.IntUnchecked [] y]\r
        p [] [\r
            textView (View.Map2 (fun x y -> $"x + y = {x + y}") x.View y.View)\r
        ]\r
    ]\r
\r
addNumbers |> Doc.RunById "main"</code></pre>\r
                                            </div>\r
                                            <div class="absolute inset-0 hidden transition-all duration-1000 custom-scrollbar" role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                <pre class="-mb-20 line-numbers language-js"><code class="block mt-[-17px] leading-[1.13rem] language-js text-white">let x = 1;\r
let y = 1;\r
\r
const inputX = document.createElement("input");\r
inputX.type = "number";\r
inputX.value = x;\r
\r
const inputY = document.createElement("input");\r
inputY.type = "number";\r
inputY.value = y;\r
\r
const pX = document.createElement("p");\r
pX.textContent = "x: ";\r
pX.appendChild(inputX);\r
\r
const pY = document.createElement("p");\r
pY.textContent = "y: ";\r
pY.appendChild(inputY);\r
\r
const result = document.createElement("p");\r
function updateSum() {\r
    const xVal = parseFloat(inputX.value) || 0;\r
    const yVal = parseFloat(inputY.value) || 0;\r
    result.textContent = "x + y = " + (xVal + yVal);\r
}\r
updateSum();\r
\r
inputX.addEventListener("input", updateSum);\r
inputY.addEventListener("input", updateSum);\r
\r
const main = document.getElementById("main");\r
main.appendChild(pX);\r
main.appendChild(pY);\r
main.appendChild(result);</code></pre>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="relative z-10 -mt-12 scale-105 rounded-xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/30 dark:border-white/5 dark:bg-gray-900 dark:shadow-black/40 sm:absolute sm:-inset-y-9 sm:-right-0 sm:mt-0 sm:w-1/2 sm:scale-100 lg:w-[46.8%]">\r
                            <div class="h-full w-full rounded-xl">\r
                                <div class="relative flex items-center gap-4 rounded-t-xl bg-white py-1 pl-4 pr-1 dark:bg-gray-900/20">\r
                                    <div class="absolute inset-y-0 my-auto flex h-max space-x-1.5">\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    </div>\r
\r
                                    <div class="mx-auto flex w-2/3 cursor-text items-center gap-1.5 rounded-lg bg-gray-100 p-1.5 px-2 dark:bg-black/30">\r
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-300 dark:text-gray-300/40">\r
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>\r
                                        </svg>\r
\r
                                        <span class="text-xs text-gray-500 dark:text-gray-200">Search </span>\r
                                    </div>\r
                                </div>\r
                                <iframe class="themed-iframe w-full h-full bg-transparent" frameborder="0" data-src="./snippets/add_two_numbers/index" src="./snippets/add_two_numbers/index"></iframe>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <div class="relative lg:flex">\r
                        <div class="sticky top-[33%] mb-16 mt-24 hidden h-max justify-end lg:flex lg:w-[10rem] xl:w-[6rem]">\r
                            <div class="sticky top-32 ml-auto flex flex-col items-end space-y-4">\r
                                <a href="#mvu" data-step="mvu" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Model-View-Update</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#react" data-step="react" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">React Components</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#webapi" data-step="webapi" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Web APIs</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#csr" data-step="csr" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Client-side routing</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#lc" data-step="lc" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Language constructs</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#tsh" data-step="tsh" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Type-safe HTML</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#rwe" data-step="rwe" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Remoting with ease</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <!-- <a href="#puia" data-step="puia" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Powerful UI abstractions</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a> -->\r
                            </div>\r
                        </div>\r
                        <div class="lg:w-[calc(100%-6rem)] ml-auto">\r
                            <div id="mvu" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Model-View-Update architecture with WebSharper.Mvu</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">Structure client-side applications with clear separation of concerns between logic and display. Based on WebSharper.UI, Mvu brings Elm-like architecture to WebSharper.</p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button role="tab" aria-selected="true" data-target="fsharp" ws-onclick="OnTabClick" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">NameInput.fs</span>\r
                                                    </button>\r
                                                    <button role="tab" aria-selected="false" data-target="js" ws-onclick="OnTabClick" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                            <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                            <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">nameInput.js</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">type Model = { name: string }\r
let InitModel = { name = "" }\r
\r
type Message =\r
    | SetName of string\r
\r
let Update message model =\r
    match message with\r
    | SetName n -> { model with name = n }\r
\r
let View dispatch (view: View<model>) =\r
    div [] [\r
        input [\r
            attr.value view.V.name\r
            on.change (fun el _ ->\r
                dispatch (SetName el?value))\r
        ] []\r
    ]\r
\r
let Main = App.CreateSimple InitModel Update View |> App.Run</model></code></pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max h-max" role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-js">let model = { name: "" };\r
\r
function update(message) {\r
    if (message.type === "SetName") {\r
    model.name = message.value;\r
    render(); \r
    }\r
}\r
\r
function render() {\r
    const main = document.getElementById("main");\r
    main.innerHTML = ""; \r
\r
    const input = document.createElement("input");\r
    input.value = model.name;\r
    input.addEventListener("input", (e) => {\r
    update({ type: "SetName", value: e.target.value });\r
    });\r
\r
    main.appendChild(input);\r
}\r
\r
render();</code></pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="react" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Build React components</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">You can also use widespread libraries such as React to build applications. The syntax is as convenient as JSX, with the added benefit of strong typing.</p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">Person.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="js" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                            <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                            <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">Person.js</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">type Person = { name: string; age: int }\r
\r
type ShowPerson(props) =\r
    inherit React.Component<person, unit="">(props)\r
\r
    override this.Render() =\r
        ul [attr.className "person"] [\r
            li [] [text ("Name: " + this.Props.name)]\r
            li [] [text ("Age: " + string this.Props.age)]\r
        ]                                                                \r
                                                            </person,></code>\r
                                                        </pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-js">import React from "react";\r
\r
function ShowPerson(props) {\r
    return (\r
        Name: {props.name}\r
        Age: {props.age}\r
    );\r
}\r
\r
// Example usage:\r
// &lt;ShowPerson name="Alice" age={30} /&gt;\r
                                                            </code>\r
                                                        </pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="webapi" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Web APIs and server-side JSON and HTML</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">\r
                                        Declare your URLs as a C# or F# endpoint type, and WebSharper handles the dispatch. Create safe internal links from endpoint values.\r
\r
                                        <br><br>You can share the same rendering code and templates between the server and the client.\r
\r
                                        <br><br>Automatically parse JSON requests and generate JSON responses based on your types.\r
                                    </p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">ArticleSite.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="html" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 48 48">\r
                                                            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>\r
                                                            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>\r
                                                            <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>\r
                                                            <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">articles</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="json" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 32 32"><path d="M4.014,14.976a2.51,2.51,0,0,0,1.567-.518A2.377,2.377,0,0,0,6.386,13.1,15.261,15.261,0,0,0,6.6,10.156q.012-2.085.075-2.747a5.236,5.236,0,0,1,.418-1.686,3.025,3.025,0,0,1,.755-1.018A3.046,3.046,0,0,1,9,4.125,6.762,6.762,0,0,1,10.544,4h.7V5.96h-.387a2.338,2.338,0,0,0-1.723.468A3.4,3.4,0,0,0,8.709,8.52a36.054,36.054,0,0,1-.137,4.133,4.734,4.734,0,0,1-.768,2.06A4.567,4.567,0,0,1,6.1,16a3.809,3.809,0,0,1,1.992,1.754,8.861,8.861,0,0,1,.618,3.865q0,2.435.05,2.9A1.755,1.755,0,0,0,9.264,25.7a2.639,2.639,0,0,0,1.592.337h.387V28h-.7a5.655,5.655,0,0,1-1.773-.2,2.97,2.97,0,0,1-1.324-.93,3.353,3.353,0,0,1-.681-1.63A24.175,24.175,0,0,1,6.6,22.006,16.469,16.469,0,0,0,6.386,18.9a2.408,2.408,0,0,0-.805-1.361,2.489,2.489,0,0,0-1.567-.524Z" style="fill:#f5de19"></path><path d="M27.986,17.011a2.489,2.489,0,0,0-1.567.524,2.408,2.408,0,0,0-.805,1.361,16.469,16.469,0,0,0-.212,3.109,24.175,24.175,0,0,1-.169,3.234,3.353,3.353,0,0,1-.681,1.63,2.97,2.97,0,0,1-1.324.93,5.655,5.655,0,0,1-1.773.2h-.7V26.04h.387a2.639,2.639,0,0,0,1.592-.337,1.755,1.755,0,0,0,.506-1.186q.05-.462.05-2.9a8.861,8.861,0,0,1,.618-3.865A3.809,3.809,0,0,1,25.9,16a4.567,4.567,0,0,1-1.7-1.286,4.734,4.734,0,0,1-.768-2.06,36.054,36.054,0,0,1-.137-4.133,3.4,3.4,0,0,0-.425-2.092,2.338,2.338,0,0,0-1.723-.468h-.387V4h.7A6.762,6.762,0,0,1,23,4.125a3.046,3.046,0,0,1,1.149.581,3.025,3.025,0,0,1,.755,1.018,5.236,5.236,0,0,1,.418,1.686q.062.662.075,2.747a15.261,15.261,0,0,0,.212,2.947,2.377,2.377,0,0,0,.805,1.355,2.51,2.51,0,0,0,1.567.518Z" style="fill:#f5de19"></path></svg>\r
                                                        <span class="text-xs">articleWithId.json</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">// Define the application's endpoints\r
type EndPoint =\r
    | [&lt;EndPoint "GET /articles"&gt;]\r
        ArticleList\r
    | [&lt;EndPoint "GET /article"&gt;]\r
        Article of id: int\r
\r
// Define the content served by these endpoints\r
let Website =\r
    Application.MultiPage (fun (ctx: Context&lt;_&gt;) endpoint -&gt;\r
        match endpoint with\r
        | ArticleList -&gt;\r
            Content.Page(\r
                div [] [\r
                    h1 [] [text "Welcome!"]\r
                    a [attr.href (ctx.Link (Article 42))] [\r
                        text "Go to article 42"\r
                    ]\r
                ]\r
            )\r
        | Article id -&gt;\r
            Content.Json { id = id\r
                            title = "Hello!"\r
                            date = System.DateTime.Now }\r
    )</code></pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="html">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-html">&lt;!-- /articles endpoint --&gt;\r
&lt;div&gt;\r
  &lt;h1&gt;Welcome!&lt;/h1&gt;\r
  &lt;a href=&quot;/article/42&quot;&gt;Go to article 42&lt;/a&gt;\r
&lt;/div&gt;\r
</code></pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-3" data-lang="json">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-html">{\r
  "date": "2025-10-01T13:50:44.3596542+02:00",\r
  "id": 42,\r
  "title": "Hello!"\r
}\r
</code></pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="csr" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Client-side routing</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">Write SPAs with the same routing API on the client side as you would use on the server side.</p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">ArticleRouter.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="js" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                            <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                            <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">articleRouter.js</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">let router = Router.Infer&lt;EndPoint&gt;()\r
let route = router.Install(Article 1)\r
\r
let view =\r
    route.View.Map (function\r
        | Article id -&gt;\r
            div [] [\r
                h1 [] [text $"This is article {id}"]\r
                a [attr.href (router.Link Articles)] [text "Go back to the list of articles"]\r
            ]\r
        | Articles -&gt;\r
            h1 [] [text "List of articles"]\r
    )\r
\r
let doc = Doc.BindView id view\r
Doc.RunById "main" doc</code></pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-js">// Simulated router and state\r
const router = {\r
    currentRoute: { type: "Articles" },\r
    link: (route) => {\r
    if (route.type === "Articles") return "/articles";\r
    if (route.type === "Article") return \`/article/\${route.id}\`;\r
    }\r
};\r
\r
// Render function\r
function render(route) {\r
    const main = document.getElementById("main");\r
    main.innerHTML = ""; \r
\r
    if (route.type === "Article") {\r
    const divEl = document.createElement("div");\r
\r
    const h1El = document.createElement("h1");\r
    h1El.textContent = \`This is article \${route.id}\`;\r
\r
    const link = document.createElement("a");\r
    link.href = router.link({ type: "Articles" });\r
    link.textContent = "Go back to the list of articles";\r
\r
    divEl.appendChild(h1El);\r
    divEl.appendChild(link);\r
    main.appendChild(divEl);\r
    } else {\r
    const h1El = document.createElement("h1");\r
    h1El.textContent = "List of articles";\r
    main.appendChild(h1El);\r
    }\r
}\r
\r
// Initial render\r
render(router.currentRoute);</code></pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="lc" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Use powerful language constructs on the client side</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">\r
                                        F#: Query expressions, async workflows, sequence expressions...\r
\r
\r
                                        <br><br>C#: LINQ queries, asynchronous Tasks, generators...\r
                                    </p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">query.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="csharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 128 128"><path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"></path></svg>\r
                                                        <span class="text-xs">query.cs</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="overflow-hidden p-4 pt-0"><code class="w-max overflow-hidden language-fsharp">type Article = { id: int; title: string; date: DateTime }\r
\r
let start = DateTime(2025, 9, 1)\r
\r
let articles : Article list = [\r
    { id = 1; title = "Welcome to WebSharper"; date = DateTime(2025, 9, 20) }\r
    { id = 2; title = "Async workflows 101"; date = DateTime(2025, 8, 15) }\r
    { id = 3; title = "Query expressions on client"; date = DateTime(2025, 9, 28) }\r
    { id = 4; title = "Remoting tips"; date = DateTime(2025, 7, 5)  }\r
]\r
// Query expressions (LINQ for F#)\r
let recentIds =\r
    query {\r
        for article in articles do\r
        where (article.date > start)\r
        sortByDescending article.date\r
        select article.id\r
    }\r
// Async workflows (run non-blocking work on the client)\r
let loadAndShow =\r
    async {\r
        do! Async.Sleep 10\r
        Console.Log(sprintf "Recent IDs: %A" (recentIds |> Seq.toList))\r
    }    \r
\r
Async.Start loadAndShow\r
\r
// Sequence expressions (lazy generators)\r
let squares =\r
    seq {\r
        for i in 1 .. 5 do\r
            yield i * i\r
    }   \r
    \r
Console.Log(String.concat ", " (squares |> Seq.map string))</code></pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="csharp">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-csharp">public record Article(int Id, string Title, DateTime Date);\r
// Async/await with Task (supported on client)\r
public static async Task LoadAndShowAsync(IEnumerable&lt;int&gt; recentIds)\r
{\r
    await Task.Delay(10);\r
    JS.Console.Log($&quot;Recent IDs: {string.Join(&quot;, &quot;, recentIds.Select(i =&gt; i.ToString()))}&quot;);\r
}\r
// Iterator (yield)\r
public static IEnumerable&lt;int&gt; Squares()\r
{\r
    for (var i = 1; i &lt;= 5; i++)\r
        yield return i * i;\r
}\r
public static void Main()\r
{\r
    var start = new DateTime(2025, 9, 1);\r
\r
    var articles = new List&lt;Article&gt;\r
        {\r
            new(1, &quot;Welcome to WebSharper&quot;, new DateTime(2025, 9, 20)),\r
            new(2, &quot;Async workflows 101&quot;, new DateTime(2025, 8, 15)),\r
            new(3, &quot;Query expressions on client&quot;, new DateTime(2025, 9, 28)),\r
            new(4, &quot;Remoting tips&quot;, new DateTime(2025, 7, 5)),\r
        };\r
\r
    // LINQ query\r
    var recentIds =\r
        from article in articles\r
        where article.Date &gt; start\r
        orderby article.Date descending\r
        select article.Id;\r
\r
    LoadAndShowAsync(recentIds);\r
\r
    JS.Console.Log(string.Join(&quot;, &quot;, Squares().Select(i =&gt; i.ToString())));\r
}</code></pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="tsh" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Type-safe HTML templating</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">\r
                                        Use HTML templates to keep your logic and UI clearly separate and facilitate the collaboration between programmers and designers.\r
                                    </p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">Client.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="html" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24">\r
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">index</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">IndexTemplate.Main()\r
    .Name(newName)\r
    .Add(fun _ -&gt;\r
        People.Add(newName.Value)\r
        newName.Value &lt;- ""\r
    )\r
    .Remove(fun _ -&gt; \r
        People.Remove newName.Value                                                            \r
    ) \r
    .Doc()\r
                                                            </code>\r
                                                        </pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="html">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-html">&lt;h1&gt;My list of unique people&lt;/h1&gt;\r
&lt;div ws-children-template="Main"&gt;\r
    &lt;input ws-var="Name" /&gt;\r
    &lt;button ws-onclick="Add"&gt;Add&lt;/button&gt;\r
    &lt;button ws-onclick="Remove"&gt;Remove&lt;/button&gt;\r
&lt;/div&gt;\r
                                                            </code>\r
                                                        </pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="rwe" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Remoting with ease</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">\r
                                        Seamlessly call server-side asynchronous functions from the client side.\r
\r
                                        <br><br>AJAX call, JSON serialization... Everything is handled automatically.\r
                                    </p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">RemoteCall.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="js" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                            <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                            <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">remoteCall.js</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">// Server-side, remote-callable function\r
[&lt;Remote&gt;]\r
let ServerFn () : Async&lt;string&gt; =\r
    async { return "Hello, world!" }\r
\r
// Client-side function\r
[&lt;JavaScript&gt;]\r
let CallServer () : unit =\r
    async {\r
        let! result = ServerFn()\r
        Console.Log(result)\r
    }\r
    |> Async.Start\r
                                                            </code>\r
                                                        </pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-js">// Server-side\r
export function ServerFn(){\r
  return Bind((new AjaxRemotingProvider()).Async("Server/ServerFn", []), (o) => Return(o));\r
}\r
\r
// Client-side\r
async function CallServer() {\r
  const r = await fetch("/Server/ServerFn", {\r
    method: "POST",\r
    headers: { "Content-Type": "application/json" }\r
  });\r
  const result = await r.json();   // -> "Hello, world!"\r
  console.log(result);\r
}\r
CallServer();\r
                                                            </code>\r
                                                        </pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <div class="mt-8 md:w-2/3 lg:w-1/2">\r
                        <h2 class="text-3xl font-bold text-gray-700 dark:text-white">Powerful UI abstractions</h2>\r
                        <p class="mt-6 text-gray-500 dark:text-gray-200">Declare full interactive forms in just a few lines of code with WebSharper Forms.</p>\r
                        <div class="mt-6">\r
                            <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white">Learn more</span>\r
                            </a>\r
                        </div>\r
                    </div>\r
                    <div class="relative mt-16">\r
                        <div class="relative z-10 border dark:border-gray-800 rounded-xl dark:bg-transparent dark:p-px">\r
                            <div data-name="snippet" class="rounded-[23px] text-sm backdrop-blur-3xl">\r
                                <div class="flex items-center gap-4 rounded-t-xl px-4 py-2 dark:bg-gray-950">\r
                                    <div class="flex space-x-1.5">\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    </div>\r
\r
                                    <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                        <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                <defs id="defs2"></defs>\r
                                                <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                    <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                </g>\r
                                            </svg>\r
                                            <span class="text-xs">Forms.fs</span>\r
                                        </button>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="js" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                            </svg>\r
                                            <span class="text-xs">forms.js</span>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <div class="relative rounded-b-xl bg-gray-200/10 text-xs dark:mt-px dark:bg-gray-950">\r
                                    <div class="flex p-4 pl-2">\r
                                        <div class="sm:pr-4">\r
                                            <div aria-hidden="true" class="line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40"></div>\r
                                        </div>\r
                                        <div class="relative w-full snippet-code">\r
                                            <div class="relative transition-all duration-1000 custom-scrollbar max-w-full overflow-y-hidden pr-0 sm:pr-[52%] lg:pr-[46.8%]" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                <pre class="-mb-20 !overflow-auto line-numbers language-fsharp inline-block min-w-max"><code class="mt-[-14px] block md:leading-[1.13rem] language-fsharp text-white">let LoginForm () =\r
    Form.Return (fun user pass -> user, pass)\r
    &lt;*&gt; (Form.Yield ""\r
        |&gt; Validation.IsNotEmpty "Must enter a username")\r
    &lt;*&gt; (Form.Yield ""\r
        |&gt; Validation.IsNotEmpty "Must enter a password")\r
    |&gt; Form.WithSubmit\r
    |&gt; Form.Run (fun (u, p) -&gt;\r
        JS.Alert("Welcome, " + u + "!")\r
    )\r
    |&gt; Form.Render (fun user pass submit -&gt;\r
        form [] [\r
            div [] [label [] [text "Username: "]; Doc.InputType.Text [] user]\r
            div [] [label [] [text "Password: "]; Doc.InputType.Password [] pass]\r
            Doc.Button "Log in" [] submit.Trigger\r
            div [] [\r
                Doc.ShowErrors submit.View (fun errors -&gt;\r
                    errors\r
                    |&gt; Seq.map (fun m -&gt; p [] [text m.Text])\r
                    |&gt; Doc.Concat)\r
            ]\r
        ]\r
    )\r
    \r
LoginForm() |&gt; Doc.RunById "main"</code></pre>\r
                                            </div>\r
                                            <div class="absolute inset-0 hidden transition-all duration-1000 custom-scrollbar" role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                <pre class="-mb-20 !overflow-auto line-numbers language-js"><code class="block leading-[1.13rem] mt-[-14px] language-js text-white">function createLoginForm() {\r
    const main = document.getElementById("main");\r
\r
    const form = document.createElement("form");\r
\r
    // Username field\r
    const usernameDiv = document.createElement("div");\r
    const usernameLabel = document.createElement("label");\r
    usernameLabel.textContent = "Username: ";\r
    const usernameInput = document.createElement("input");\r
    usernameInput.type = "text";\r
    usernameInput.required = true;\r
    usernameDiv.appendChild(usernameLabel);\r
    usernameDiv.appendChild(usernameInput);\r
\r
    // Password field\r
    const passwordDiv = document.createElement("div");\r
    const passwordLabel = document.createElement("label");\r
    passwordLabel.textContent = "Password: ";\r
    const passwordInput = document.createElement("input");\r
    passwordInput.type = "password";\r
    passwordInput.required = true;\r
    passwordDiv.appendChild(passwordLabel);\r
    passwordDiv.appendChild(passwordInput);\r
\r
    // Submit button\r
    const button = document.createElement("button");\r
    button.type = "submit";\r
    button.textContent = "Log in";\r
\r
    // Error messages\r
    const errorDiv = document.createElement("div");\r
\r
    // Form submit handler\r
    form.addEventListener("submit", function (e) {\r
        e.preventDefault(); // Prevent actual submission\r
        errorDiv.innerHTML = ""; // Clear errors\r
\r
        const username = usernameInput.value.trim();\r
        const password = passwordInput.value.trim();\r
\r
        const errors = [];\r
\r
        if (!username) errors.push("Must enter a username");\r
        if (!password) errors.push("Must enter a password");\r
\r
        if (errors.length > 0) {\r
            errors.forEach(msg => {\r
                const p = document.createElement("p");\r
                p.className = "error";\r
                p.textContent = msg;\r
                errorDiv.appendChild(p);\r
            });\r
        } else {\r
            alert("Welcome, " + username + "!");\r
        }\r
    });\r
\r
    // Assemble form\r
    form.appendChild(usernameDiv);\r
    form.appendChild(passwordDiv);\r
    form.appendChild(button);\r
    form.appendChild(errorDiv);\r
\r
    main.appendChild(form);\r
}\r
\r
createLoginForm();</code></pre>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="relative z-10 -mt-12 scale-105 rounded-xl border border-gray-200 bg-white shadow-lg shadow-gray-200/30 dark:border-white/5 dark:bg-gray-900 dark:shadow-black/40 sm:absolute sm:-inset-y-9 sm:-right-0 sm:mt-0 sm:w-1/2 sm:scale-100 lg:w-[46.8%]">\r
                            <div class="h-full w-full rounded-xl">\r
                                <div class="relative flex items-center gap-4 rounded-t-xl bg-white py-1 pl-4 pr-1 dark:bg-gray-900/20">\r
                                    <div class="absolute inset-y-0 my-auto flex h-max space-x-1.5">\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    </div>\r
\r
                                    <div class="mx-auto flex w-2/3 cursor-text items-center gap-1.5 rounded-lg bg-gray-100 p-1.5 px-2 dark:bg-black/30">\r
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-300 dark:text-gray-300/40">\r
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>\r
                                        </svg>\r
\r
                                        <span class="text-xs text-gray-500 dark:text-gray-200">Search </span>\r
                                    </div>\r
                                </div>\r
                                <iframe class="themed-iframe w-full h-full bg-transparent" frameborder="0" data-src="./snippets/forms/index" src="./snippets/forms/index"></iframe>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 lg:pt-12 xl:px-0 2xl:max-w-7xl">\r
                    <div class="md:w-2/3 lg:w-1/2">\r
                        <h2 class="text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-3xl">Web Workers without hassle</h2>\r
                        <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">\r
                            Write client-side parallel code directly in your code.\r
\r
                            <br><br>The compiler automatically creates the separate trimmed JavaScript file for the web worker.\r
                        </p>\r
                        <div class="mt-6">\r
                            <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white">Learn more</span>\r
                            </a>\r
                        </div>\r
                    </div>\r
                    <div class="relative z-10 mt-16 rounded-3xl border border-gray-300/10 bg-gray-200/10 dark:border-0 dark:bg-white/10 dark:p-px">\r
                        <div class="rounded-3xl bg-white shadow-xl pr-3 pb-2 text-sm backdrop-blur-3xl dark:bg-gray-950 md:ml-0 md:pr-0">\r
                            <div class="flex items-center gap-4 px-6 py-2">\r
                                <div class="flex space-x-1.5">\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                </div>\r
\r
                                <div class="flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                    <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                        <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                        <defs id="defs2"></defs>\r
                                        <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                            <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                            <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                            <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                        </g>\r
                                    </svg>\r
                                    <span class="text-xs text-gray-500 dark:text-white/70">Worker.fs</span>\r
                                </div>\r
                            </div>\r
\r
                            <div class="relative sm:flex">\r
                                <div class="absolute ml-1 flex h-full w-14 flex-none flex-col items-center justify-between py-3 text-gray-500 dark:text-white/60">\r
                                    <svg width="24" height="216" fill="none">\r
                                        <path d="M3 69l6-6m-2-5a7 7 0 1014 0 7 7 0 00-14 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                        <path d="M8 7H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-3m3.707-10.293l-3.414-3.414A1 1 0 0015.586 3H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7.414a1 1 0 00-.293-.707zM7 103a2 2 0 100-4 2 2 0 000 4zm0 0v10m10-6a2 2 0 100-4 2 2 0 000 4zm0 0a3 3 0 01-3 3h-4a3 3 0 00-3 3m0 0a2 2 0 100 4 2 2 0 000-4z" stroke="currentColor" stroke-width="1.5"></path>\r
                                        <path d="M11.5 160.031a.75.75 0 00-1-1.118l1 1.118zm-8-1.118a.75.75 0 00-1 1.118l1-1.118zm6.972 6.149a.75.75 0 10.993-1.124l-.993 1.124zm-7.937-1.124a.75.75 0 10.993 1.124l-.993-1.124zm7.022-.368l-.64-.393.64.393zm-5.114 0l.64-.393-.64.393zM3 161.25a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zM8 147l.372-.651A.75.75 0 007.25 147H8zm14 8l.372.651a.75.75 0 000-1.302L22 155zm-14.75 0a.75.75 0 001.5 0h-1.5zm5.378 4.492a.75.75 0 10.744 1.302l-.744-1.302zM7 157.75A2.25 2.25 0 019.25 160h1.5A3.75 3.75 0 007 156.25v1.5zm0-1.5A3.75 3.75 0 003.25 160h1.5A2.25 2.25 0 017 157.75v-1.5zm2.624 3.298A5.225 5.225 0 017 160.25v1.5a6.73 6.73 0 003.376-.903l-.752-1.299zM9.25 160v.197h1.5V160h-1.5zm0 .197V162h1.5v-1.803h-1.5zM7 160.25a5.225 5.225 0 01-2.624-.702l-.752 1.299A6.73 6.73 0 007 161.75v-1.5zM4.75 162v-1.803h-1.5V162h1.5zm0-1.803V160h-1.5v.197h1.5zm5.75-1.284a5.209 5.209 0 01-.876.635l.752 1.299c.403-.234.78-.507 1.124-.816l-1-1.118zm-6.124.635a5.21 5.21 0 01-.876-.635l-1 1.118c.344.309.721.582 1.124.816l.752-1.299zm4.86 4.701c.451.212.867.487 1.236.813l.993-1.124a6.77 6.77 0 00-1.588-1.046l-.64 1.357zM9.25 162c0 .433-.122.835-.332 1.177l1.277.787A3.737 3.737 0 0010.75 162h-1.5zm-.332 1.177A2.247 2.247 0 017 164.25v1.5a3.748 3.748 0 003.195-1.786l-1.277-.787zm-5.39 1.885a5.25 5.25 0 011.235-.813l-.64-1.357a6.77 6.77 0 00-1.588 1.046l.993 1.124zM7 164.25c-.81 0-1.52-.427-1.918-1.073l-1.277.787A3.748 3.748 0 007 165.75v-1.5zm-1.918-1.073A2.235 2.235 0 014.75 162h-1.5c0 .719.203 1.392.555 1.964l1.277-.787zM4 161.25H3v1.5h1v-1.5zm7 0h-1v1.5h1v-1.5zm-3.372-13.599l14 8 .744-1.302-14-8-.744 1.302zM8.75 155v-8h-1.5v8h1.5zm12.878-.651l-9 5.143.744 1.302 9-5.143-.744-1.302z" fill="currentColor"></path>\r
                                        <path d="M3 205h8m-8 0v7a1 1 0 001 1h7m-8-8v-7a1 1 0 011-1h6a1 1 0 011 1v7m0 0v8m0-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7m4-11h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z" stroke="currentColor" stroke-width="1.5"></path>\r
                                    </svg>\r
                                    <svg width="24" height="72" fill="none">\r
                                        <path d="M10.325 52.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                        <path d="M15 60a3 3 0 11-6 0 3 3 0 016 0zM5.121 17.804A13.936 13.936 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                    </svg>\r
                                </div>\r
                                <div class="ml-auto w-[calc(100%-4rem)] md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:divide-x lg:divide-gray-300/50 dark:lg:divide-white/10">\r
\r
                                    <!-- Worker.fs snippet -->\r
                                    <div class=" w-auto md:row-span-2 border md:border-r-0 md:border-b-0 border-gray-300/50 dark:border-white/10 dark:border-r-0">\r
                                        <div class="flex w-full overflow-auto py-3 pl-3 font-mono text-xs snippet-code">\r
                                            <div>\r
                                                <div aria-hidden="true" class="line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40"></div>\r
                                            </div>\r
                                            <pre class="code-block w-full -mb-16 text-wrap whitespace-pre-wrap break-words line-numbers language-fsharp !overflow-x-auto custom-scrollbar"><code class="mt-[-14px] block language-fsharp text-wrap text-white whitespace-pre-wrap break-words">let worker = new Worker(fun self -&gt;\r
  // This code runs in the worker:\r
  self.OnMessage &lt;- fun e -&gt;\r
      Console.Log(\r
        "Received message from main thread: " \r
        + string e.Data\r
      )\r
)\r
\r
// This code runs in the main thread:\r
worker.PostMessage("Hello, worker!")</code></pre>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- index.js snippet -->\r
                                    <div class="mb-1 overflow-hidden border-gray-300/50 dark:border-white/10 md:row-span-1 md:-mb-1 md:-mt-8 md:border-l">\r
                                        <div class="flex items-center gap-2 border-gray-300/50 p-1 px-2 dark:border-white/10 md:border-b">\r
                                            <div class="flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 text-gray-500 duration-300 hover:text-gray-600 dark:text-white/70 dark:hover:text-white">\r
                                                <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                    <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                    <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                </svg>\r
                                                <span class="text-xs">index.js</span>\r
                                            </div>\r
                                        </div>\r
                                        <div class="flex overflow-hidden rounded-2xl bg-white py-3 pl-3 font-mono text-xs dark:bg-black/40 md:rounded-none md:border-none md:bg-transparent dark:md:bg-transparent snippet-code">\r
                                            <div>\r
                                                <div aria-hidden="true" class="line-numbers hidden w-2 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40 sm:block"></div>\r
                                            </div>\r
                                            <pre class="code-block -mb-9 !overflow-x-auto language-js line-numbers custom-scrollbar"><code class="mt-[-16px] block language-js text-white">var worker = new Worker("worker.js");\r
worker.postMessage("Hello, worker!");\r
                                            </code>\r
                                        </pre>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- worker.js snippet -->\r
                                    <div class="mt-4 mb-1 overflow-hidden border-gray-300/50 dark:border-white/10 md:row-span-1 md:-mb-1 md:-mt-8 md:border-t md:border-l lg:border-t-0">\r
                                        <div class="flex items-center gap-2 p-1 px-2 md:border-b md:border-gray-300/50 md:bg-white/5 dark:md:border-white/10 lg:bg-transparent">\r
                                            <div class="flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 text-gray-500 duration-300 hover:text-gray-600 dark:text-white/70 dark:hover:text-white">\r
                                                <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                    <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                    <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                </svg>\r
                                                <span class="text-xs">worker.js</span>\r
                                            </div>\r
                                        </div>\r
                                        <div class="flex overflow-hidden rounded-2xl bg-white py-3 pl-3 font-mono text-xs dark:bg-black/40 md:rounded-none md:border-none md:bg-transparent dark:md:bg-transparent snippet-code">\r
                                            <div>\r
                                                <div aria-hidden="true" class="line-numbers hidden w-2 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40 sm:block"></div>\r
                                            </div>\r
                                            <pre class="code-block -mb-8 !overflow-x-auto md:-mb-16 language-js line-numbers custom-scrollbar"><code class="mt-[-14px] block language-js text-white">self.onmessage = function (e) {\r
    console.log(\r
       "Received message from main thread: "\r
           + e.data.toString());\r
}\r
                                            </code>\r
                                        </pre>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- Terminal -->\r
                                    <div class="lg:col-span-3 bg-white dark:bg-gray-900 shadow-2xl shadow-gray-950/5 dark:shadow-gray-950/15 border border-gray-300/50 dark:border-gray-800 p-3 lg:rounded-br-3xl">\r
                                        <span class="border-b border-brand-secondary pb-1 text-xs font-medium tracking-wide text-gray-500 dark:text-white">\r
                                            <span>Terminal</span>\r
                                        </span>\r
                                        <div class="mt-3 hidden w-max font-mono text-xs text-gray-400 dark:text-white/60 md:block">\r
                                            <div class="text-gray-400 dark:text-gray-400">\r
                                                > Received message from main thread: Hello, worker!\r
                                            </div>\r
                                            <span class="dark:text-white text-gray-300">\u2588</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section class="bg-gray-200/5 py-20 dark:bg-gray-900/25">\r
                <div>\r
                    <h2 class="text-center text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-4xl lg:text-5xl">Get Started</h2>\r
                    <p class="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">Instant access to the power of WebSharper</p>\r
                    <div class="mt-10 flex flex-wrap items-center justify-center gap-6 lg:flex-nowrap">\r
                        <a href="https://docs.websharper.com/" class="w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                            <span class="relative text-sm">Get started</span>\r
                        </a>\r
                        <div class="text-primary flex h-10 items-center gap-2 rounded-xl border border-gray-300 backdrop-blur-xl pl-4 text-base font-medium leading-7 dark:border-gray-800 dark:bg-transparent">\r
                            <span class="text-xs text-gray-500">$</span>\r
                            <span class="text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70">dotnet new install WebSharper.<span class="bg-gradient-to-r from-gray-500 to-transparent bg-clip-text text-transparent dark:from-white/70">Templates</span></span>\r
                            <button ws-onclick="CopyFromClosest" class="copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer">\r
                                <span class="sr-only">Copy</span>\r
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"></path>\r
                                </svg>\r
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>\r
                                </svg>\r
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path>\r
                                </svg>\r
                            </button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
    `),e):We("features",C("content"),()=>se(`\r
        <div class="space-y-40" ws-onafterrender="OnAfterRender">\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 pt-36 sm:pt-40 lg:px-8 lg:pb-12 lg:pt-48 xl:px-0 2xl:max-w-7xl">\r
                    <div class="relative z-10 text-center w-full">\r
                        <div id="track" class="relative">\r
                            <!-- Arrows -->\r
                            <button id="mini-prev" class="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 dark:text-white cursor-pointer">&#10094;</button>\r
                            <button id="mini-next" class="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 dark:text-white cursor-pointer">&#10095;</button>\r
\r
                            <div class="relative overflow-hidden">\r
                                <div id="mini-inner" class="flex w-full transition-transform duration-700 ease-out will-change-transform">\r
                                    <!-- Slide 1 -->\r
                                    <div class="min-w-full w-full snap-start shrink-0 px-2">\r
                                        <!-- Headline -->\r
                                        <h1 class="max-w-2xl mx-auto text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl">Full-stack, functional reactive web programming for .NET</h1>\r
\r
                                        <!-- Tagline -->\r
                                        <p class="mt-6 max-w-lg mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300">Develop microservices, client-server web applications, reactive SPAs, and more in C# or F#.</p>\r
\r
                                        <!-- CTA buttons -->\r
                                        <div class="mt-10 flex flex-wrap items-center justify-center gap-6 lg:flex-nowrap">\r
                                            <a href="https://docs.websharper.com/core/getting-started" class="w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                                                <span class="relative text-sm">Get started</span>\r
                                            </a>\r
                                            <div class="text-primary flex h-10 items-center gap-2 rounded-xl border border-gray-300 backdrop-blur-xl pl-4 text-base font-medium leading-7 dark:border-gray-800 dark:bg-transparent">\r
                                                <span class="text-xs text-gray-500">$</span>\r
                                                <span class="text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70">dotnet new install WebSharper.<span class="bg-gradient-to-r from-gray-500 to-transparent bg-clip-text text-transparent dark:from-white/70">Templates</span></span>\r
                                                <button ws-onclick="CopyFromClosest" class="copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer">\r
                                                    <span class="sr-only">Copy</span>\r
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"></path>\r
                                                    </svg>\r
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>\r
                                                    </svg>\r
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path>\r
                                                    </svg>\r
                                                </button>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- Slide 2 -->\r
                                    <div class="min-w-full w-full snap-start shrink-0 p-0">\r
                                        <!-- was p-2 -->\r
                                        <div class="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-0 items-start">\r
                                            <div class="md:col-span-1 m-0 p-0">\r
                                                <img src="./Assets/images/slay.png" alt="DSL + AI" class="block w-full h-56 md:h-64 object-contain object-left-top m-0 p-0 rounded-none shadow-none select-none">\r
                                            </div>\r
\r
                                            <div class="md:col-span-2 text-center md:text-left self-start">\r
                                                <h1 class="max-w-2xl text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl">\r
                                                    DSL &amp; AI Integration\r
                                                </h1>\r
                                                <p class="mt-4 text-lg text-gray-700 dark:text-gray-300">\r
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.\r
                                                </p>\r
\r
                                                <a href="./dsl-ai" class="mt-6 w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                                                            flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                                                            before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r
                                                            before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r
                                                            hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                                                    <span class="relative text-sm">Learn more</span>\r
                                                </a>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <!-- GIF -->\r
                        <div class="mt-12 flex justify-center">\r
                            <div id="ws-template" class="w-full max-w-3xl h-auto"></div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Sample code -->\r
                    <div id="code-snippet" class="scroll-my-16 relative z-10 mt-20 xl:w-4/5 mx-auto">\r
                        <div class="rounded-3xl p-px from-gray-200 to-gray-950/5 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">\r
                            <div data-name="snippet" class="rounded-[23px] border border-gray-200/10 bg-white shadow-xl shadow-gray-950/5 pb-3 pr-3 text-sm backdrop-blur-3xl dark:border-transparent dark:bg-gray-950 md:ml-0">\r
                                <div class="flex items-center gap-4 px-6 pt-2 pb-1">\r
                                    <div class="flex space-x-1.5">\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    </div>\r
\r
                                    <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                        <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                <defs id="defs2"></defs>\r
                                                <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                    <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                </g>\r
                                            </svg>\r
                                            <span class="text-xs">Client.fs</span>\r
                                        </button>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="html" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24">\r
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"></path>\r
                                            </svg>\r
\r
                                            <span class="text-xs">index</span>\r
                                        </button>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="code-result" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24">\r
                                                <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path>\r
                                                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>\r
                                            </svg>\r
                                            <span class="text-xs">Result</span>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <div class="relative flex">\r
                                    <div class="absolute ml-1 flex h-full w-14 flex-none flex-col items-center justify-between py-3 text-gray-500 dark:text-white/60">\r
                                        <svg width="24" height="216" fill="none">\r
                                            <path d="M3 69l6-6m-2-5a7 7 0 1014 0 7 7 0 00-14 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                            <path d="M8 7H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-3m3.707-10.293l-3.414-3.414A1 1 0 0015.586 3H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7.414a1 1 0 00-.293-.707zM7 103a2 2 0 100-4 2 2 0 000 4zm0 0v10m10-6a2 2 0 100-4 2 2 0 000 4zm0 0a3 3 0 01-3 3h-4a3 3 0 00-3 3m0 0a2 2 0 100 4 2 2 0 000-4z" stroke="currentColor" stroke-width="1.5"></path>\r
                                            <path d="M11.5 160.031a.75.75 0 00-1-1.118l1 1.118zm-8-1.118a.75.75 0 00-1 1.118l1-1.118zm6.972 6.149a.75.75 0 10.993-1.124l-.993 1.124zm-7.937-1.124a.75.75 0 10.993 1.124l-.993-1.124zm7.022-.368l-.64-.393.64.393zm-5.114 0l.64-.393-.64.393zM3 161.25a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zM8 147l.372-.651A.75.75 0 007.25 147H8zm14 8l.372.651a.75.75 0 000-1.302L22 155zm-14.75 0a.75.75 0 001.5 0h-1.5zm5.378 4.492a.75.75 0 10.744 1.302l-.744-1.302zM7 157.75A2.25 2.25 0 019.25 160h1.5A3.75 3.75 0 007 156.25v1.5zm0-1.5A3.75 3.75 0 003.25 160h1.5A2.25 2.25 0 017 157.75v-1.5zm2.624 3.298A5.225 5.225 0 017 160.25v1.5a6.73 6.73 0 003.376-.903l-.752-1.299zM9.25 160v.197h1.5V160h-1.5zm0 .197V162h1.5v-1.803h-1.5zM7 160.25a5.225 5.225 0 01-2.624-.702l-.752 1.299A6.73 6.73 0 007 161.75v-1.5zM4.75 162v-1.803h-1.5V162h1.5zm0-1.803V160h-1.5v.197h1.5zm5.75-1.284a5.209 5.209 0 01-.876.635l.752 1.299c.403-.234.78-.507 1.124-.816l-1-1.118zm-6.124.635a5.21 5.21 0 01-.876-.635l-1 1.118c.344.309.721.582 1.124.816l.752-1.299zm4.86 4.701c.451.212.867.487 1.236.813l.993-1.124a6.77 6.77 0 00-1.588-1.046l-.64 1.357zM9.25 162c0 .433-.122.835-.332 1.177l1.277.787A3.737 3.737 0 0010.75 162h-1.5zm-.332 1.177A2.247 2.247 0 017 164.25v1.5a3.748 3.748 0 003.195-1.786l-1.277-.787zm-5.39 1.885a5.25 5.25 0 011.235-.813l-.64-1.357a6.77 6.77 0 00-1.588 1.046l.993 1.124zM7 164.25c-.81 0-1.52-.427-1.918-1.073l-1.277.787A3.748 3.748 0 007 165.75v-1.5zm-1.918-1.073A2.235 2.235 0 014.75 162h-1.5c0 .719.203 1.392.555 1.964l1.277-.787zM4 161.25H3v1.5h1v-1.5zm7 0h-1v1.5h1v-1.5zm-3.372-13.599l14 8 .744-1.302-14-8-.744 1.302zM8.75 155v-8h-1.5v8h1.5zm12.878-.651l-9 5.143.744 1.302 9-5.143-.744-1.302z" fill="currentColor"></path>\r
                                            <path d="M3 205h8m-8 0v7a1 1 0 001 1h7m-8-8v-7a1 1 0 011-1h6a1 1 0 011 1v7m0 0v8m0-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7m4-11h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z" stroke="currentColor" stroke-width="1.5"></path>\r
                                        </svg>\r
                                        <svg width="24" height="72" fill="none">\r
                                            <path d="M10.325 52.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                            <path d="M15 60a3 3 0 11-6 0 3 3 0 016 0zM5.121 17.804A13.936 13.936 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                        </svg>\r
                                    </div>\r
                                    <div class="ml-auto w-[calc(100%-4rem)] mt-1">\r
                                        <div class="flex overflow-hidden py-3 pl-3 font-mono text-xs dark:shadow-2xl shadow-gray-950/5 border rounded-tr-2xl border-gray-300/50 dark:border-gray-800 border-b-0">\r
                                            <!-- My custom line numbers -->\r
                                            <div>\r
                                                <pre aria-hidden="true" class="line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40"></pre>\r
                                            </div>\r
                                            <div class="relative w-full snippet-code">\r
                                                <div class="absolute inset-0 overflow-auto custom-scrollbar" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                    <!-- PrismaJs line numbers -->\r
                                                    <pre class="line-numbers language-fsharp custom-scrollbar !overflow-auto"><code class="mt-[-17px] text-sm block leading-[1.13rem] language-fsharp text-white">[&lt;JavaScript&gt;]\r
module Client =\r
    type IndexTemplate = Template&lt;"wwwroot/index", ClientLoad.FromDocument&gt;\r
\r
    let People =\r
        ListModel.FromSeq [\r
            "John"\r
            "Paul"\r
        ]\r
\r
    [&lt;SPAEntryPoint&gt;]\r
    let Main () =\r
        let newName = Var.Create ""\r
        IndexTemplate.Main()\r
            .ListContainer(\r
                People.View.DocSeqCached(fun (name: string) -> \r
                    IndexTemplate.ListItem().Name(name).Doc()\r
                )\r
            )\r
            .Name(newName)\r
            .Add(fun _ ->\r
                People.Add(newName.Value)\r
                newName.Value &lt;- ""\r
            )\r
            .Doc()\r
        |> Doc.RunById "main"</code></pre>\r
                                                </div>\r
                                                <div class="absolute inset-0 hidden overflow-hidden custom-scrollbar" role="tabpanel" aria-labelledby="tab-2" data-lang="html">\r
                                                    <pre class="line-numbers -mb-20 !overflow-auto language-html custom-scrollbar"><code class="mt-[-17px] text-sm block leading-[1.13rem] language-html text-white">&lt;!DOCTYPE html&gt;\r
&lt;html lang="en"&gt;\r
&lt;head&gt;\r
    &lt;title&gt;spa_websharper&lt;/title&gt;\r
    &lt;meta charset="utf-8" /&gt;\r
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;\r
    &lt;link rel="stylesheet" type="text/css" href="Scripts/spa-websharper.css" /&gt;\r
    &lt;style&gt;\r
        /* Don't show the not-yet-loaded templates */\r
        [ws-template], [ws-children-template] { display: none; }\r
    &lt;/style&gt;\r
    &lt;script type="text/javascript" src="Scripts/spa-websharper.head.js"&gt;&lt;/script&gt;\r
&lt;/head&gt;\r
&lt;body&gt;\r
    &lt;h1&gt;My list of unique people&lt;/h1&gt;\r
    &lt;div id="main" ws-children-template="Main"&gt;\r
        &lt;ul ws-hole="ListContainer"&gt;\r
            &lt;li ws-template="ListItem"&gt;\${Name}&lt;/li&gt;\r
        &lt;/ul&gt;\r
        &lt;div&gt;\r
            &lt;input ws-var="Name" placeholder="Name" /&gt;\r
            &lt;button ws-onclick="Add"&gt;Add&lt;/button&gt;\r
            &lt;div&gt;You are about to add: \${Name}&lt;/div&gt;\r
        &lt;/div&gt;\r
    &lt;/div&gt;\r
    &lt;script type="module" src="Scripts/spa-websharper.min.js"&gt;&lt;/script&gt;\r
&lt;/body&gt;\r
&lt;/html&gt;</code></pre>\r
                                                </div>\r
                                                <div class="absolute inset-0 hidden overflow-hidden" role="tabpanel" aria-labelledby="tab-2" data-lang="code-result">\r
                                                    <iframe src="./snippets/spa/index" class="w-full h-full pr-2 mr-4 rounded-md bg-white" frameborder="0"></iframe>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="lg:col-span-3 bg-white/90 dark:bg-gray-900 shadow-2xl shadow-gray-950/5 dark:shadow-gray-950/15 border border-gray-300/50 dark:border-gray-800 p-3 lg:rounded-br-3xl">\r
                                            <span class="border-b border-brand-secondary pb-1 text-xs font-medium tracking-wide text-gray-500 dark:text-white">Terminal</span>\r
                                            <div class="mt-3 w-max font-mono text-xs text-gray-400 dark:text-white/60">\r
                                                <div class="text-green-500 font-bold">\r
                                                    VITE <span class="text-green-500 font-normal">v6.3.5</span>\r
                                                    <span class="text-gray-400 font-normal"> ready in </span>\r
                                                    <span class="dark:text-white text-gray-300">663</span>\r
                                                    <span class="text-gray-300"> ms</span>\r
                                                </div>\r
                                                <div class="text-green-500 mt-2">\r
                                                    \u279C <span class="dark:text-white text-gray-300">Local:</span>\r
                                                    <a href="#code-snippet" class="text-sky-400 underline ml-2">http://localhost:24347/</a>\r
                                                </div>\r
                                                <div class="text-green-400 mt-1">\r
                                                    \u279C <span class="text-gray-400">Network:</span>\r
                                                    <span class="text-gray-400"> use </span><span class="dark:text-white text-gray-300 font-bold">--host</span>\r
                                                    <span class="text-gray-400"> to expose</span>\r
                                                </div>\r
                                                <div class="text-green-400 mt-1">\r
                                                    \u279C <span class="text-gray-400">press </span><span class="dark:text-white text-gray-300 font-bold">h</span>\r
                                                    <span class="text-gray-400"> + </span><span class="dark:text-white text-gray-300 font-bold">enter</span>\r
                                                    <span class="text-gray-400"> to show help</span>\r
                                                </div>\r
                                                <span class="dark:text-white text-gray-300">\u2588</span>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Shaded background color -->\r
                    <div class="dark:hidden absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]"></div>\r
                    <div class="hidden dark:block absolute -bottom-1/4 left-1/2 -z-20 h-[500px] w-screen -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.900/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.900/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]"></div>\r
                    <div class="absolute h-96 inset-x-[10%] -bottom-[20%] my-auto hidden dark:block">\r
                        <div aria-hidden="true" class="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl">\r
                            <!--background colors here -->\r
                            <div class="h-72 bg-gradient-to-br from-pink-400 to-purple-400 blur-3xl dark:from-blue-800"></div>\r
                            <div class="h-96 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-sky-950"></div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="overflow-hidden mt-16 lg:mt-0">\r
                    <div class="relative space-y-12">\r
                        <p class="text-center text-gray-950 dark:text-white">Trusted by fast-growing companies around the world</p>\r
                        <div class="max-w-4xl mx-auto">\r
                            <div class="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/mcgraw.png" alt="">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/ford.png" alt="">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/microsoft.png" alt="">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/elte.png" alt="">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/unmc.png" alt="">\r
                                <img class="h-7 w-fit dark:invert dark:brightness-50" src="https://websharper.com/assets/companies/duf.png" alt="">\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <div class="mx-auto text-center sm:w-2/3 lg:w-1/2">\r
                        <h2 class="text-3xl font-bold text-gray-800 dark:text-white">Functional, reactive applications with WebSharper.UI</h2>\r
                        <p class="mt-6 text-gray-500 dark:text-gray-200">Bind composite data models to your reactive user interfaces. The flow of reactive values through the code yet concise, readability.</p>\r
                        <div class="mt-6 flex justify-center">\r
                            <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white">Learn more</span>\r
                            </a>\r
                        </div>\r
                    </div>\r
                    <div class="relative mt-16">\r
                        <div class="relative z-10 border dark:border-gray-800 rounded-xl dark:bg-transparent dark:p-px">\r
                            <div data-name="snippet" class="rounded-[23px] text-sm backdrop-blur-3xl">\r
                                <div class="flex items-center gap-4 rounded-t-xl px-4 py-2 dark:bg-gray-950">\r
                                    <div class="flex space-x-1.5">\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    </div>\r
\r
                                    <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                        <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                <defs id="defs2"></defs>\r
                                                <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                    <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                </g>\r
                                            </svg>\r
                                            <span class="text-xs">AddTwoNumbers.fs</span>\r
                                        </button>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="js" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                            </svg>\r
                                            <span class="text-xs">addTwoNumbers.js</span>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <div class="relative rounded-b-xl bg-gray-200/10 text-xs dark:mt-px dark:bg-gray-950">\r
                                    <div class="flex p-4 pl-2 overflow-hidden">\r
                                        <div class="sm:pr-4">\r
                                            <pre aria-hidden="true" class="line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40"></pre>\r
                                        </div>\r
                                        <div class="relative w-full snippet-code">\r
                                            <div class="relative transition-all duration-1000 custom-scrollbar max-w-full overflow-y-hidden pr-0 sm:pr-[52%] lg:pr-[46.8%]" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                <pre class="line-numbers language-fsharp inline-block min-w-max"><code class="mt-[-17px] block md:leading-[1.13rem] language-fsharp text-white">let x = Var.Create 1\r
let y = Var.Create 1\r
\r
let addNumbers =\r
    div [] [\r
        p [] [text "x "; Doc.InputType.IntUnchecked [] x]\r
        p [] [text "y "; Doc.InputType.IntUnchecked [] y]\r
        p [] [\r
            textView (View.Map2 (fun x y -> $"x + y = {x + y}") x.View y.View)\r
        ]\r
    ]\r
\r
addNumbers |> Doc.RunById "main"</code></pre>\r
                                            </div>\r
                                            <div class="absolute inset-0 hidden transition-all duration-1000 custom-scrollbar" role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                <pre class="-mb-20 line-numbers language-js"><code class="block mt-[-17px] leading-[1.13rem] language-js text-white">let x = 1;\r
let y = 1;\r
\r
const inputX = document.createElement("input");\r
inputX.type = "number";\r
inputX.value = x;\r
\r
const inputY = document.createElement("input");\r
inputY.type = "number";\r
inputY.value = y;\r
\r
const pX = document.createElement("p");\r
pX.textContent = "x: ";\r
pX.appendChild(inputX);\r
\r
const pY = document.createElement("p");\r
pY.textContent = "y: ";\r
pY.appendChild(inputY);\r
\r
const result = document.createElement("p");\r
function updateSum() {\r
    const xVal = parseFloat(inputX.value) || 0;\r
    const yVal = parseFloat(inputY.value) || 0;\r
    result.textContent = "x + y = " + (xVal + yVal);\r
}\r
updateSum();\r
\r
inputX.addEventListener("input", updateSum);\r
inputY.addEventListener("input", updateSum);\r
\r
const main = document.getElementById("main");\r
main.appendChild(pX);\r
main.appendChild(pY);\r
main.appendChild(result);</code></pre>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="relative z-10 -mt-12 scale-105 rounded-xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/30 dark:border-white/5 dark:bg-gray-900 dark:shadow-black/40 sm:absolute sm:-inset-y-9 sm:-right-0 sm:mt-0 sm:w-1/2 sm:scale-100 lg:w-[46.8%]">\r
                            <div class="h-full w-full rounded-xl">\r
                                <div class="relative flex items-center gap-4 rounded-t-xl bg-white py-1 pl-4 pr-1 dark:bg-gray-900/20">\r
                                    <div class="absolute inset-y-0 my-auto flex h-max space-x-1.5">\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    </div>\r
\r
                                    <div class="mx-auto flex w-2/3 cursor-text items-center gap-1.5 rounded-lg bg-gray-100 p-1.5 px-2 dark:bg-black/30">\r
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-300 dark:text-gray-300/40">\r
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>\r
                                        </svg>\r
\r
                                        <span class="text-xs text-gray-500 dark:text-gray-200">Search </span>\r
                                    </div>\r
                                </div>\r
                                <iframe class="themed-iframe w-full h-full bg-transparent" frameborder="0" data-src="./snippets/add_two_numbers/index" src="./snippets/add_two_numbers/index"></iframe>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <div class="relative lg:flex">\r
                        <div class="sticky top-[33%] mb-16 mt-24 hidden h-max justify-end lg:flex lg:w-[10rem] xl:w-[6rem]">\r
                            <div class="sticky top-32 ml-auto flex flex-col items-end space-y-4">\r
                                <a href="#mvu" data-step="mvu" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Model-View-Update</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#react" data-step="react" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">React Components</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#webapi" data-step="webapi" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Web APIs</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#csr" data-step="csr" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Client-side routing</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#lc" data-step="lc" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Language constructs</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#tsh" data-step="tsh" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Type-safe HTML</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <a href="#rwe" data-step="rwe" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Remoting with ease</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a>\r
                                <!-- <a href="#puia" data-step="puia" class="section-link group flex w-max items-center justify-end gap-3">\r
                                    <span class="block translate-x-1 text-sm text-gray-900 opacity-30 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white">Powerful UI abstractions</span>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-200/30 transition duration-500 group-hover:bg-brand-secondary dark:bg-white/30"></div>\r
                                </a> -->\r
                            </div>\r
                        </div>\r
                        <div class="lg:w-[calc(100%-6rem)] ml-auto">\r
                            <div id="mvu" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Model-View-Update architecture with WebSharper.Mvu</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">Structure client-side applications with clear separation of concerns between logic and display. Based on WebSharper.UI, Mvu brings Elm-like architecture to WebSharper.</p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button role="tab" aria-selected="true" data-target="fsharp" ws-onclick="OnTabClick" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">NameInput.fs</span>\r
                                                    </button>\r
                                                    <button role="tab" aria-selected="false" data-target="js" ws-onclick="OnTabClick" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                            <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                            <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">nameInput.js</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">type Model = { name: string }\r
let InitModel = { name = "" }\r
\r
type Message =\r
    | SetName of string\r
\r
let Update message model =\r
    match message with\r
    | SetName n -> { model with name = n }\r
\r
let View dispatch (view: View<model>) =\r
    div [] [\r
        input [\r
            attr.value view.V.name\r
            on.change (fun el _ ->\r
                dispatch (SetName el?value))\r
        ] []\r
    ]\r
\r
let Main = App.CreateSimple InitModel Update View |> App.Run</model></code></pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max h-max" role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-js">let model = { name: "" };\r
\r
function update(message) {\r
    if (message.type === "SetName") {\r
    model.name = message.value;\r
    render(); \r
    }\r
}\r
\r
function render() {\r
    const main = document.getElementById("main");\r
    main.innerHTML = ""; \r
\r
    const input = document.createElement("input");\r
    input.value = model.name;\r
    input.addEventListener("input", (e) => {\r
    update({ type: "SetName", value: e.target.value });\r
    });\r
\r
    main.appendChild(input);\r
}\r
\r
render();</code></pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="react" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Build React components</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">You can also use widespread libraries such as React to build applications. The syntax is as convenient as JSX, with the added benefit of strong typing.</p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">Person.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="js" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                            <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                            <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">Person.js</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">type Person = { name: string; age: int }\r
\r
type ShowPerson(props) =\r
    inherit React.Component<person, unit="">(props)\r
\r
    override this.Render() =\r
        ul [attr.className "person"] [\r
            li [] [text ("Name: " + this.Props.name)]\r
            li [] [text ("Age: " + string this.Props.age)]\r
        ]                                                                \r
                                                            </person,></code>\r
                                                        </pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-js">import React from "react";\r
\r
function ShowPerson(props) {\r
    return (\r
        Name: {props.name}\r
        Age: {props.age}\r
    );\r
}\r
\r
// Example usage:\r
// &lt;ShowPerson name="Alice" age={30} /&gt;\r
                                                            </code>\r
                                                        </pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="webapi" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Web APIs and server-side JSON and HTML</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">\r
                                        Declare your URLs as a C# or F# endpoint type, and WebSharper handles the dispatch. Create safe internal links from endpoint values.\r
\r
                                        <br><br>You can share the same rendering code and templates between the server and the client.\r
\r
                                        <br><br>Automatically parse JSON requests and generate JSON responses based on your types.\r
                                    </p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">ArticleSite.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="html" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 48 48">\r
                                                            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>\r
                                                            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>\r
                                                            <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>\r
                                                            <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">articles</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="json" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 32 32"><path d="M4.014,14.976a2.51,2.51,0,0,0,1.567-.518A2.377,2.377,0,0,0,6.386,13.1,15.261,15.261,0,0,0,6.6,10.156q.012-2.085.075-2.747a5.236,5.236,0,0,1,.418-1.686,3.025,3.025,0,0,1,.755-1.018A3.046,3.046,0,0,1,9,4.125,6.762,6.762,0,0,1,10.544,4h.7V5.96h-.387a2.338,2.338,0,0,0-1.723.468A3.4,3.4,0,0,0,8.709,8.52a36.054,36.054,0,0,1-.137,4.133,4.734,4.734,0,0,1-.768,2.06A4.567,4.567,0,0,1,6.1,16a3.809,3.809,0,0,1,1.992,1.754,8.861,8.861,0,0,1,.618,3.865q0,2.435.05,2.9A1.755,1.755,0,0,0,9.264,25.7a2.639,2.639,0,0,0,1.592.337h.387V28h-.7a5.655,5.655,0,0,1-1.773-.2,2.97,2.97,0,0,1-1.324-.93,3.353,3.353,0,0,1-.681-1.63A24.175,24.175,0,0,1,6.6,22.006,16.469,16.469,0,0,0,6.386,18.9a2.408,2.408,0,0,0-.805-1.361,2.489,2.489,0,0,0-1.567-.524Z" style="fill:#f5de19"></path><path d="M27.986,17.011a2.489,2.489,0,0,0-1.567.524,2.408,2.408,0,0,0-.805,1.361,16.469,16.469,0,0,0-.212,3.109,24.175,24.175,0,0,1-.169,3.234,3.353,3.353,0,0,1-.681,1.63,2.97,2.97,0,0,1-1.324.93,5.655,5.655,0,0,1-1.773.2h-.7V26.04h.387a2.639,2.639,0,0,0,1.592-.337,1.755,1.755,0,0,0,.506-1.186q.05-.462.05-2.9a8.861,8.861,0,0,1,.618-3.865A3.809,3.809,0,0,1,25.9,16a4.567,4.567,0,0,1-1.7-1.286,4.734,4.734,0,0,1-.768-2.06,36.054,36.054,0,0,1-.137-4.133,3.4,3.4,0,0,0-.425-2.092,2.338,2.338,0,0,0-1.723-.468h-.387V4h.7A6.762,6.762,0,0,1,23,4.125a3.046,3.046,0,0,1,1.149.581,3.025,3.025,0,0,1,.755,1.018,5.236,5.236,0,0,1,.418,1.686q.062.662.075,2.747a15.261,15.261,0,0,0,.212,2.947,2.377,2.377,0,0,0,.805,1.355,2.51,2.51,0,0,0,1.567.518Z" style="fill:#f5de19"></path></svg>\r
                                                        <span class="text-xs">articleWithId.json</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">// Define the application's endpoints\r
type EndPoint =\r
    | [&lt;EndPoint "GET /articles"&gt;]\r
        ArticleList\r
    | [&lt;EndPoint "GET /article"&gt;]\r
        Article of id: int\r
\r
// Define the content served by these endpoints\r
let Website =\r
    Application.MultiPage (fun (ctx: Context&lt;_&gt;) endpoint -&gt;\r
        match endpoint with\r
        | ArticleList -&gt;\r
            Content.Page(\r
                div [] [\r
                    h1 [] [text "Welcome!"]\r
                    a [attr.href (ctx.Link (Article 42))] [\r
                        text "Go to article 42"\r
                    ]\r
                ]\r
            )\r
        | Article id -&gt;\r
            Content.Json { id = id\r
                            title = "Hello!"\r
                            date = System.DateTime.Now }\r
    )</code></pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="html">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-html">&lt;!-- /articles endpoint --&gt;\r
&lt;div&gt;\r
  &lt;h1&gt;Welcome!&lt;/h1&gt;\r
  &lt;a href=&quot;/article/42&quot;&gt;Go to article 42&lt;/a&gt;\r
&lt;/div&gt;\r
</code></pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-3" data-lang="json">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-html">{\r
  "date": "2025-10-01T13:50:44.3596542+02:00",\r
  "id": 42,\r
  "title": "Hello!"\r
}\r
</code></pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="csr" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Client-side routing</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">Write SPAs with the same routing API on the client side as you would use on the server side.</p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">ArticleRouter.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="js" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                            <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                            <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">articleRouter.js</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">let router = Router.Infer&lt;EndPoint&gt;()\r
let route = router.Install(Article 1)\r
\r
let view =\r
    route.View.Map (function\r
        | Article id -&gt;\r
            div [] [\r
                h1 [] [text $"This is article {id}"]\r
                a [attr.href (router.Link Articles)] [text "Go back to the list of articles"]\r
            ]\r
        | Articles -&gt;\r
            h1 [] [text "List of articles"]\r
    )\r
\r
let doc = Doc.BindView id view\r
Doc.RunById "main" doc</code></pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-js">// Simulated router and state\r
const router = {\r
    currentRoute: { type: "Articles" },\r
    link: (route) => {\r
    if (route.type === "Articles") return "/articles";\r
    if (route.type === "Article") return \`/article/\${route.id}\`;\r
    }\r
};\r
\r
// Render function\r
function render(route) {\r
    const main = document.getElementById("main");\r
    main.innerHTML = ""; \r
\r
    if (route.type === "Article") {\r
    const divEl = document.createElement("div");\r
\r
    const h1El = document.createElement("h1");\r
    h1El.textContent = \`This is article \${route.id}\`;\r
\r
    const link = document.createElement("a");\r
    link.href = router.link({ type: "Articles" });\r
    link.textContent = "Go back to the list of articles";\r
\r
    divEl.appendChild(h1El);\r
    divEl.appendChild(link);\r
    main.appendChild(divEl);\r
    } else {\r
    const h1El = document.createElement("h1");\r
    h1El.textContent = "List of articles";\r
    main.appendChild(h1El);\r
    }\r
}\r
\r
// Initial render\r
render(router.currentRoute);</code></pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="lc" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Use powerful language constructs on the client side</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">\r
                                        F#: Query expressions, async workflows, sequence expressions...\r
\r
\r
                                        <br><br>C#: LINQ queries, asynchronous Tasks, generators...\r
                                    </p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">query.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="csharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 128 128"><path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"></path></svg>\r
                                                        <span class="text-xs">query.cs</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="overflow-hidden p-4 pt-0"><code class="w-max overflow-hidden language-fsharp">type Article = { id: int; title: string; date: DateTime }\r
\r
let start = DateTime(2025, 9, 1)\r
\r
let articles : Article list = [\r
    { id = 1; title = "Welcome to WebSharper"; date = DateTime(2025, 9, 20) }\r
    { id = 2; title = "Async workflows 101"; date = DateTime(2025, 8, 15) }\r
    { id = 3; title = "Query expressions on client"; date = DateTime(2025, 9, 28) }\r
    { id = 4; title = "Remoting tips"; date = DateTime(2025, 7, 5)  }\r
]\r
// Query expressions (LINQ for F#)\r
let recentIds =\r
    query {\r
        for article in articles do\r
        where (article.date > start)\r
        sortByDescending article.date\r
        select article.id\r
    }\r
// Async workflows (run non-blocking work on the client)\r
let loadAndShow =\r
    async {\r
        do! Async.Sleep 10\r
        Console.Log(sprintf "Recent IDs: %A" (recentIds |> Seq.toList))\r
    }    \r
\r
Async.Start loadAndShow\r
\r
// Sequence expressions (lazy generators)\r
let squares =\r
    seq {\r
        for i in 1 .. 5 do\r
            yield i * i\r
    }   \r
    \r
Console.Log(String.concat ", " (squares |> Seq.map string))</code></pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="csharp">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-csharp">public record Article(int Id, string Title, DateTime Date);\r
// Async/await with Task (supported on client)\r
public static async Task LoadAndShowAsync(IEnumerable&lt;int&gt; recentIds)\r
{\r
    await Task.Delay(10);\r
    JS.Console.Log($&quot;Recent IDs: {string.Join(&quot;, &quot;, recentIds.Select(i =&gt; i.ToString()))}&quot;);\r
}\r
// Iterator (yield)\r
public static IEnumerable&lt;int&gt; Squares()\r
{\r
    for (var i = 1; i &lt;= 5; i++)\r
        yield return i * i;\r
}\r
public static void Main()\r
{\r
    var start = new DateTime(2025, 9, 1);\r
\r
    var articles = new List&lt;Article&gt;\r
        {\r
            new(1, &quot;Welcome to WebSharper&quot;, new DateTime(2025, 9, 20)),\r
            new(2, &quot;Async workflows 101&quot;, new DateTime(2025, 8, 15)),\r
            new(3, &quot;Query expressions on client&quot;, new DateTime(2025, 9, 28)),\r
            new(4, &quot;Remoting tips&quot;, new DateTime(2025, 7, 5)),\r
        };\r
\r
    // LINQ query\r
    var recentIds =\r
        from article in articles\r
        where article.Date &gt; start\r
        orderby article.Date descending\r
        select article.Id;\r
\r
    LoadAndShowAsync(recentIds);\r
\r
    JS.Console.Log(string.Join(&quot;, &quot;, Squares().Select(i =&gt; i.ToString())));\r
}</code></pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="tsh" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Type-safe HTML templating</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">\r
                                        Use HTML templates to keep your logic and UI clearly separate and facilitate the collaboration between programmers and designers.\r
                                    </p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">Client.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="html" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24">\r
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">index</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">IndexTemplate.Main()\r
    .Name(newName)\r
    .Add(fun _ -&gt;\r
        People.Add(newName.Value)\r
        newName.Value &lt;- ""\r
    )\r
    .Remove(fun _ -&gt; \r
        People.Remove newName.Value                                                            \r
    ) \r
    .Doc()\r
                                                            </code>\r
                                                        </pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="html">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-html">&lt;h1&gt;My list of unique people&lt;/h1&gt;\r
&lt;div ws-children-template="Main"&gt;\r
    &lt;input ws-var="Name" /&gt;\r
    &lt;button ws-onclick="Add"&gt;Add&lt;/button&gt;\r
    &lt;button ws-onclick="Remove"&gt;Remove&lt;/button&gt;\r
&lt;/div&gt;\r
                                                            </code>\r
                                                        </pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div id="rwe" class="section py-16 md:flex">\r
                                <div class="w-full md:w-1/2 md:pr-6 lg:mt-8 lg:px-12">\r
                                    <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Remoting with ease</h3>\r
                                    <p class="mb-8 mt-6 text-gray-500 dark:text-gray-200 lg:mb-12">\r
                                        Seamlessly call server-side asynchronous functions from the client side.\r
\r
                                        <br><br>AJAX call, JSON serialization... Everything is handled automatically.\r
                                    </p>\r
                                    <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                        <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white"> Learn more </span>\r
                                    </a>\r
                                </div>\r
                                <div class="mt-8 ml-auto w-full md:mt-0 md:w-1/2">\r
                                    <div data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                                <div class="flex space-x-1.5">\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                                </div>\r
\r
                                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                            <defs id="defs2"></defs>\r
                                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                            </g>\r
                                                        </svg>\r
                                                        <span class="text-xs">RemoteCall.fs</span>\r
                                                    </button>\r
                                                    <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="js" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                                        <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                            <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                            <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                        </svg>\r
                                                        <span class="text-xs">remoteCall.js</span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">// Server-side, remote-callable function\r
[&lt;Remote&gt;]\r
let ServerFn () : Async&lt;string&gt; =\r
    async { return "Hello, world!" }\r
\r
// Client-side function\r
[&lt;JavaScript&gt;]\r
let CallServer () : unit =\r
    async {\r
        let! result = ServerFn()\r
        Console.Log(result)\r
    }\r
    |> Async.Start\r
                                                            </code>\r
                                                        </pre>\r
                                                    </div>\r
                                                    <div class="absolute inset-0 hidden w-max " role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                        <pre class="w-max p-4 pt-0"><code class="w-max language-js">// Server-side\r
export function ServerFn(){\r
  return Bind((new AjaxRemotingProvider()).Async("Server/ServerFn", []), (o) => Return(o));\r
}\r
\r
// Client-side\r
async function CallServer() {\r
  const r = await fetch("/Server/ServerFn", {\r
    method: "POST",\r
    headers: { "Content-Type": "application/json" }\r
  });\r
  const result = await r.json();   // -> "Hello, world!"\r
  console.log(result);\r
}\r
CallServer();\r
                                                            </code>\r
                                                        </pre>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 xl:px-0 2xl:max-w-7xl">\r
                    <div class="mt-8 md:w-2/3 lg:w-1/2">\r
                        <h2 class="text-3xl font-bold text-gray-700 dark:text-white">Powerful UI abstractions</h2>\r
                        <p class="mt-6 text-gray-500 dark:text-gray-200">Declare full interactive forms in just a few lines of code with WebSharper Forms.</p>\r
                        <div class="mt-6">\r
                            <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white">Learn more</span>\r
                            </a>\r
                        </div>\r
                    </div>\r
                    <div class="relative mt-16">\r
                        <div class="relative z-10 border dark:border-gray-800 rounded-xl dark:bg-transparent dark:p-px">\r
                            <div data-name="snippet" class="rounded-[23px] text-sm backdrop-blur-3xl">\r
                                <div class="flex items-center gap-4 rounded-t-xl px-4 py-2 dark:bg-gray-950">\r
                                    <div class="flex space-x-1.5">\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    </div>\r
\r
                                    <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                        <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                                <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                                <defs id="defs2"></defs>\r
                                                <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                    <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                    <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                                </g>\r
                                            </svg>\r
                                            <span class="text-xs">Forms.fs</span>\r
                                        </button>\r
                                        <button ws-onclick="OnTabClick" role="tab" aria-selected="false" data-target="js" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                            <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                            </svg>\r
                                            <span class="text-xs">forms.js</span>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <div class="relative rounded-b-xl bg-gray-200/10 text-xs dark:mt-px dark:bg-gray-950">\r
                                    <div class="flex p-4 pl-2">\r
                                        <div class="sm:pr-4">\r
                                            <div aria-hidden="true" class="line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40"></div>\r
                                        </div>\r
                                        <div class="relative w-full snippet-code">\r
                                            <div class="relative transition-all duration-1000 custom-scrollbar max-w-full overflow-y-hidden pr-0 sm:pr-[52%] lg:pr-[46.8%]" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                                <pre class="-mb-20 !overflow-auto line-numbers language-fsharp inline-block min-w-max"><code class="mt-[-14px] block md:leading-[1.13rem] language-fsharp text-white">let LoginForm () =\r
    Form.Return (fun user pass -> user, pass)\r
    &lt;*&gt; (Form.Yield ""\r
        |&gt; Validation.IsNotEmpty "Must enter a username")\r
    &lt;*&gt; (Form.Yield ""\r
        |&gt; Validation.IsNotEmpty "Must enter a password")\r
    |&gt; Form.WithSubmit\r
    |&gt; Form.Run (fun (u, p) -&gt;\r
        JS.Alert("Welcome, " + u + "!")\r
    )\r
    |&gt; Form.Render (fun user pass submit -&gt;\r
        form [] [\r
            div [] [label [] [text "Username: "]; Doc.InputType.Text [] user]\r
            div [] [label [] [text "Password: "]; Doc.InputType.Password [] pass]\r
            Doc.Button "Log in" [] submit.Trigger\r
            div [] [\r
                Doc.ShowErrors submit.View (fun errors -&gt;\r
                    errors\r
                    |&gt; Seq.map (fun m -&gt; p [] [text m.Text])\r
                    |&gt; Doc.Concat)\r
            ]\r
        ]\r
    )\r
    \r
LoginForm() |&gt; Doc.RunById "main"</code></pre>\r
                                            </div>\r
                                            <div class="absolute inset-0 hidden transition-all duration-1000 custom-scrollbar" role="tabpanel" aria-labelledby="tab-2" data-lang="js">\r
                                                <pre class="-mb-20 !overflow-auto line-numbers language-js"><code class="block leading-[1.13rem] mt-[-14px] language-js text-white">function createLoginForm() {\r
    const main = document.getElementById("main");\r
\r
    const form = document.createElement("form");\r
\r
    // Username field\r
    const usernameDiv = document.createElement("div");\r
    const usernameLabel = document.createElement("label");\r
    usernameLabel.textContent = "Username: ";\r
    const usernameInput = document.createElement("input");\r
    usernameInput.type = "text";\r
    usernameInput.required = true;\r
    usernameDiv.appendChild(usernameLabel);\r
    usernameDiv.appendChild(usernameInput);\r
\r
    // Password field\r
    const passwordDiv = document.createElement("div");\r
    const passwordLabel = document.createElement("label");\r
    passwordLabel.textContent = "Password: ";\r
    const passwordInput = document.createElement("input");\r
    passwordInput.type = "password";\r
    passwordInput.required = true;\r
    passwordDiv.appendChild(passwordLabel);\r
    passwordDiv.appendChild(passwordInput);\r
\r
    // Submit button\r
    const button = document.createElement("button");\r
    button.type = "submit";\r
    button.textContent = "Log in";\r
\r
    // Error messages\r
    const errorDiv = document.createElement("div");\r
\r
    // Form submit handler\r
    form.addEventListener("submit", function (e) {\r
        e.preventDefault(); // Prevent actual submission\r
        errorDiv.innerHTML = ""; // Clear errors\r
\r
        const username = usernameInput.value.trim();\r
        const password = passwordInput.value.trim();\r
\r
        const errors = [];\r
\r
        if (!username) errors.push("Must enter a username");\r
        if (!password) errors.push("Must enter a password");\r
\r
        if (errors.length > 0) {\r
            errors.forEach(msg => {\r
                const p = document.createElement("p");\r
                p.className = "error";\r
                p.textContent = msg;\r
                errorDiv.appendChild(p);\r
            });\r
        } else {\r
            alert("Welcome, " + username + "!");\r
        }\r
    });\r
\r
    // Assemble form\r
    form.appendChild(usernameDiv);\r
    form.appendChild(passwordDiv);\r
    form.appendChild(button);\r
    form.appendChild(errorDiv);\r
\r
    main.appendChild(form);\r
}\r
\r
createLoginForm();</code></pre>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="relative z-10 -mt-12 scale-105 rounded-xl border border-gray-200 bg-white shadow-lg shadow-gray-200/30 dark:border-white/5 dark:bg-gray-900 dark:shadow-black/40 sm:absolute sm:-inset-y-9 sm:-right-0 sm:mt-0 sm:w-1/2 sm:scale-100 lg:w-[46.8%]">\r
                            <div class="h-full w-full rounded-xl">\r
                                <div class="relative flex items-center gap-4 rounded-t-xl bg-white py-1 pl-4 pr-1 dark:bg-gray-900/20">\r
                                    <div class="absolute inset-y-0 my-auto flex h-max space-x-1.5">\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                        <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    </div>\r
\r
                                    <div class="mx-auto flex w-2/3 cursor-text items-center gap-1.5 rounded-lg bg-gray-100 p-1.5 px-2 dark:bg-black/30">\r
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-300 dark:text-gray-300/40">\r
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>\r
                                        </svg>\r
\r
                                        <span class="text-xs text-gray-500 dark:text-gray-200">Search </span>\r
                                    </div>\r
                                </div>\r
                                <iframe class="themed-iframe w-full h-full bg-transparent" frameborder="0" data-src="./snippets/forms/index" src="./snippets/forms/index"></iframe>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 lg:px-8 lg:pt-12 xl:px-0 2xl:max-w-7xl">\r
                    <div class="md:w-2/3 lg:w-1/2">\r
                        <h2 class="text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-3xl">Web Workers without hassle</h2>\r
                        <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">\r
                            Write client-side parallel code directly in your code.\r
\r
                            <br><br>The compiler automatically creates the separate trimmed JavaScript file for the web worker.\r
                        </p>\r
                        <div class="mt-6">\r
                            <a href="https://docs.websharper.com/" class="disabled:before:bg-gray-300 group relative flex h-9 w-max items-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20">\r
                                <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white">Learn more</span>\r
                            </a>\r
                        </div>\r
                    </div>\r
                    <div class="relative z-10 mt-16 rounded-3xl border border-gray-300/10 bg-gray-200/10 dark:border-0 dark:bg-white/10 dark:p-px">\r
                        <div class="rounded-3xl bg-white shadow-xl pr-3 pb-2 text-sm backdrop-blur-3xl dark:bg-gray-950 md:ml-0 md:pr-0">\r
                            <div class="flex items-center gap-4 px-6 py-2">\r
                                <div class="flex space-x-1.5">\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                </div>\r
\r
                                <div class="flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                    <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                        <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                        <defs id="defs2"></defs>\r
                                        <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                            <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                            <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                            <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                        </g>\r
                                    </svg>\r
                                    <span class="text-xs text-gray-500 dark:text-white/70">Worker.fs</span>\r
                                </div>\r
                            </div>\r
\r
                            <div class="relative sm:flex">\r
                                <div class="absolute ml-1 flex h-full w-14 flex-none flex-col items-center justify-between py-3 text-gray-500 dark:text-white/60">\r
                                    <svg width="24" height="216" fill="none">\r
                                        <path d="M3 69l6-6m-2-5a7 7 0 1014 0 7 7 0 00-14 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                        <path d="M8 7H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-3m3.707-10.293l-3.414-3.414A1 1 0 0015.586 3H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7.414a1 1 0 00-.293-.707zM7 103a2 2 0 100-4 2 2 0 000 4zm0 0v10m10-6a2 2 0 100-4 2 2 0 000 4zm0 0a3 3 0 01-3 3h-4a3 3 0 00-3 3m0 0a2 2 0 100 4 2 2 0 000-4z" stroke="currentColor" stroke-width="1.5"></path>\r
                                        <path d="M11.5 160.031a.75.75 0 00-1-1.118l1 1.118zm-8-1.118a.75.75 0 00-1 1.118l1-1.118zm6.972 6.149a.75.75 0 10.993-1.124l-.993 1.124zm-7.937-1.124a.75.75 0 10.993 1.124l-.993-1.124zm7.022-.368l-.64-.393.64.393zm-5.114 0l.64-.393-.64.393zM3 161.25a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zM8 147l.372-.651A.75.75 0 007.25 147H8zm14 8l.372.651a.75.75 0 000-1.302L22 155zm-14.75 0a.75.75 0 001.5 0h-1.5zm5.378 4.492a.75.75 0 10.744 1.302l-.744-1.302zM7 157.75A2.25 2.25 0 019.25 160h1.5A3.75 3.75 0 007 156.25v1.5zm0-1.5A3.75 3.75 0 003.25 160h1.5A2.25 2.25 0 017 157.75v-1.5zm2.624 3.298A5.225 5.225 0 017 160.25v1.5a6.73 6.73 0 003.376-.903l-.752-1.299zM9.25 160v.197h1.5V160h-1.5zm0 .197V162h1.5v-1.803h-1.5zM7 160.25a5.225 5.225 0 01-2.624-.702l-.752 1.299A6.73 6.73 0 007 161.75v-1.5zM4.75 162v-1.803h-1.5V162h1.5zm0-1.803V160h-1.5v.197h1.5zm5.75-1.284a5.209 5.209 0 01-.876.635l.752 1.299c.403-.234.78-.507 1.124-.816l-1-1.118zm-6.124.635a5.21 5.21 0 01-.876-.635l-1 1.118c.344.309.721.582 1.124.816l.752-1.299zm4.86 4.701c.451.212.867.487 1.236.813l.993-1.124a6.77 6.77 0 00-1.588-1.046l-.64 1.357zM9.25 162c0 .433-.122.835-.332 1.177l1.277.787A3.737 3.737 0 0010.75 162h-1.5zm-.332 1.177A2.247 2.247 0 017 164.25v1.5a3.748 3.748 0 003.195-1.786l-1.277-.787zm-5.39 1.885a5.25 5.25 0 011.235-.813l-.64-1.357a6.77 6.77 0 00-1.588 1.046l.993 1.124zM7 164.25c-.81 0-1.52-.427-1.918-1.073l-1.277.787A3.748 3.748 0 007 165.75v-1.5zm-1.918-1.073A2.235 2.235 0 014.75 162h-1.5c0 .719.203 1.392.555 1.964l1.277-.787zM4 161.25H3v1.5h1v-1.5zm7 0h-1v1.5h1v-1.5zm-3.372-13.599l14 8 .744-1.302-14-8-.744 1.302zM8.75 155v-8h-1.5v8h1.5zm12.878-.651l-9 5.143.744 1.302 9-5.143-.744-1.302z" fill="currentColor"></path>\r
                                        <path d="M3 205h8m-8 0v7a1 1 0 001 1h7m-8-8v-7a1 1 0 011-1h6a1 1 0 011 1v7m0 0v8m0-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7m4-11h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z" stroke="currentColor" stroke-width="1.5"></path>\r
                                    </svg>\r
                                    <svg width="24" height="72" fill="none">\r
                                        <path d="M10.325 52.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                        <path d="M15 60a3 3 0 11-6 0 3 3 0 016 0zM5.121 17.804A13.936 13.936 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\r
                                    </svg>\r
                                </div>\r
                                <div class="ml-auto w-[calc(100%-4rem)] md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:divide-x lg:divide-gray-300/50 dark:lg:divide-white/10">\r
\r
                                    <!-- Worker.fs snippet -->\r
                                    <div class=" w-auto md:row-span-2 border md:border-r-0 md:border-b-0 border-gray-300/50 dark:border-white/10 dark:border-r-0">\r
                                        <div class="flex w-full overflow-auto py-3 pl-3 font-mono text-xs snippet-code">\r
                                            <div>\r
                                                <div aria-hidden="true" class="line-numbers w-0 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40"></div>\r
                                            </div>\r
                                            <pre class="code-block w-full -mb-16 text-wrap whitespace-pre-wrap break-words line-numbers language-fsharp !overflow-x-auto custom-scrollbar"><code class="mt-[-14px] block language-fsharp text-wrap text-white whitespace-pre-wrap break-words">let worker = new Worker(fun self -&gt;\r
  // This code runs in the worker:\r
  self.OnMessage &lt;- fun e -&gt;\r
      Console.Log(\r
        "Received message from main thread: " \r
        + string e.Data\r
      )\r
)\r
\r
// This code runs in the main thread:\r
worker.PostMessage("Hello, worker!")</code></pre>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- index.js snippet -->\r
                                    <div class="mb-1 overflow-hidden border-gray-300/50 dark:border-white/10 md:row-span-1 md:-mb-1 md:-mt-8 md:border-l">\r
                                        <div class="flex items-center gap-2 border-gray-300/50 p-1 px-2 dark:border-white/10 md:border-b">\r
                                            <div class="flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 text-gray-500 duration-300 hover:text-gray-600 dark:text-white/70 dark:hover:text-white">\r
                                                <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                    <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                    <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                </svg>\r
                                                <span class="text-xs">index.js</span>\r
                                            </div>\r
                                        </div>\r
                                        <div class="flex overflow-hidden rounded-2xl bg-white py-3 pl-3 font-mono text-xs dark:bg-black/40 md:rounded-none md:border-none md:bg-transparent dark:md:bg-transparent snippet-code">\r
                                            <div>\r
                                                <div aria-hidden="true" class="line-numbers hidden w-2 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40 sm:block"></div>\r
                                            </div>\r
                                            <pre class="code-block -mb-9 !overflow-x-auto language-js line-numbers custom-scrollbar"><code class="mt-[-16px] block language-js text-white">var worker = new Worker("worker.js");\r
worker.postMessage("Hello, worker!");\r
                                            </code>\r
                                        </pre>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- worker.js snippet -->\r
                                    <div class="mt-4 mb-1 overflow-hidden border-gray-300/50 dark:border-white/10 md:row-span-1 md:-mb-1 md:-mt-8 md:border-t md:border-l lg:border-t-0">\r
                                        <div class="flex items-center gap-2 p-1 px-2 md:border-b md:border-gray-300/50 md:bg-white/5 dark:md:border-white/10 lg:bg-transparent">\r
                                            <div class="flex cursor-pointer items-center gap-1.5 rounded-md p-1 px-1.5 text-gray-500 duration-300 hover:text-gray-600 dark:text-white/70 dark:hover:text-white">\r
                                                <svg class="h-3 w-3" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                                    <path d="M0 0H28V28H0V0Z" fill="#F5DE19"></path>\r
                                                    <path d="M18.809 21.875C19.0476 22.3596 19.4182 22.7669 19.8782 23.05C20.3383 23.3331 20.8689 23.4804 21.409 23.475C22.499 23.475 23.196 22.93 23.196 22.175C23.196 21.275 22.48 20.953 21.28 20.428L20.622 20.146C18.722 19.337 17.462 18.324 17.462 16.182C17.462 14.209 18.962 12.706 21.315 12.706C22.0767 12.651 22.8378 12.8215 23.5032 13.1962C24.1687 13.5709 24.7091 14.1332 25.057 14.813L23 16.128C22.866 15.7909 22.6327 15.5026 22.3311 15.3011C22.0295 15.0997 21.6737 14.9946 21.311 15C21.1528 14.9842 20.993 15.0015 20.8418 15.0508C20.6906 15.1001 20.5513 15.1804 20.4329 15.2865C20.3145 15.3927 20.2194 15.5223 20.1538 15.6672C20.0883 15.8121 20.0536 15.969 20.052 16.128C20.052 16.917 20.541 17.237 21.67 17.728L22.328 18.01C24.564 18.969 25.828 19.946 25.828 22.143C25.828 24.512 23.967 25.81 21.468 25.81C20.4943 25.8721 19.5235 25.651 18.6726 25.1735C17.8218 24.696 17.1273 23.9825 16.673 23.119L18.809 21.875ZM9.51401 22.103C9.92701 22.836 10.303 23.456 11.207 23.456C12.071 23.456 12.617 23.118 12.617 21.803V12.856H15.248V21.838C15.248 24.562 13.648 25.802 11.319 25.802C10.4958 25.847 9.67816 25.6419 8.97369 25.2135C8.26923 24.7851 7.71086 24.1537 7.37201 23.402L9.51401 22.103Z" fill="black"></path>\r
                                                </svg>\r
                                                <span class="text-xs">worker.js</span>\r
                                            </div>\r
                                        </div>\r
                                        <div class="flex overflow-hidden rounded-2xl bg-white py-3 pl-3 font-mono text-xs dark:bg-black/40 md:rounded-none md:border-none md:bg-transparent dark:md:bg-transparent snippet-code">\r
                                            <div>\r
                                                <div aria-hidden="true" class="line-numbers hidden w-2 flex-none select-none text-right leading-[1.13rem] text-gray-300 dark:text-white/40 sm:block"></div>\r
                                            </div>\r
                                            <pre class="code-block -mb-8 !overflow-x-auto md:-mb-16 language-js line-numbers custom-scrollbar"><code class="mt-[-14px] block language-js text-white">self.onmessage = function (e) {\r
    console.log(\r
       "Received message from main thread: "\r
           + e.data.toString());\r
}\r
                                            </code>\r
                                        </pre>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- Terminal -->\r
                                    <div class="lg:col-span-3 bg-white dark:bg-gray-900 shadow-2xl shadow-gray-950/5 dark:shadow-gray-950/15 border border-gray-300/50 dark:border-gray-800 p-3 lg:rounded-br-3xl">\r
                                        <span class="border-b border-brand-secondary pb-1 text-xs font-medium tracking-wide text-gray-500 dark:text-white">\r
                                            <span>Terminal</span>\r
                                        </span>\r
                                        <div class="mt-3 hidden w-max font-mono text-xs text-gray-400 dark:text-white/60 md:block">\r
                                            <div class="text-gray-400 dark:text-gray-400">\r
                                                > Received message from main thread: Hello, worker!\r
                                            </div>\r
                                            <span class="dark:text-white text-gray-300">\u2588</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section class="bg-gray-200/5 py-20 dark:bg-gray-900/25">\r
                <div>\r
                    <h2 class="text-center text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-4xl lg:text-5xl">Get Started</h2>\r
                    <p class="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">Instant access to the power of WebSharper</p>\r
                    <div class="mt-10 flex flex-wrap items-center justify-center gap-6 lg:flex-nowrap">\r
                        <a href="https://docs.websharper.com/" class="w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                            <span class="relative text-sm">Get started</span>\r
                        </a>\r
                        <div class="text-primary flex h-10 items-center gap-2 rounded-xl border border-gray-300 backdrop-blur-xl pl-4 text-base font-medium leading-7 dark:border-gray-800 dark:bg-transparent">\r
                            <span class="text-xs text-gray-500">$</span>\r
                            <span class="text-to-copy block w-max font-mono text-xs text-gray-800 dark:text-white/70">dotnet new install WebSharper.<span class="bg-gradient-to-r from-gray-500 to-transparent bg-clip-text text-transparent dark:from-white/70">Templates</span></span>\r
                            <button ws-onclick="CopyFromClosest" class="copy-btn group h-9 w-9 text-gray-950 dark:text-gray-200 cursor-pointer">\r
                                <span class="sr-only">Copy</span>\r
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="copy m-auto h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"></path>\r
                                </svg>\r
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="success m-auto hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>\r
                                </svg>\r
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="failed hidden h-4 w-4 transition duration-100 group-hover:rotate-12 group-hover:text-gray-500 dark:group-hover:text-white">\r
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path>\r
                                </svg>\r
                            </button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
    `))}function Sm(e){return e?et("dslai",C("content"),()=>se(`\r
        <div class="mx-auto max-w-5xl px-4 pb-16 md:pb-20" ws-onafterrender="OnAfterRender">\r
            <!-- Hero -->\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 pt-36 sm:pt-40 lg:px-8 lg:pb-12 lg:pt-48 xl:px-0 2xl:max-w-7xl">\r
                    <div class="relative z-10 text-center w-full">\r
                        <h1 class="max-w-2xl mx-auto text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl">DSLs + AI Integration</h1>\r
                        <p class="mt-6 max-w-lg mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <!-- Section: DSL -->\r
            <section class="mt-20">\r
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">What is a DSL?</h2>\r
                <p class="mt-2 mb-10 text-gray-700 dark:text-gray-300">\r
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                </p>\r
\r
                <div class="mt-8 mx-auto w-full md:mt-0 md:w-1/2">\r
                    <div ws-onafterrender="InitTabs" data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                <div class="flex space-x-1.5">\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                </div>\r
\r
                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                    <button role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                            <defs id="defs2"></defs>\r
                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                            </g>\r
                                        </svg>\r
                                        <span class="text-xs">DSL.warp</span>\r
                                    </button>\r
                                </div>\r
                            </div>\r
                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">type Item {\r
    text ItemNumber;\r
    text Name;\r
    number Quantity format "[0-9]+" with "Must specify a number"\r
};\r
\r
type Address {\r
    text Street1;\r
    text Street2 optional;\r
    text City;\r
    text State = "CA";\r
    text Zip\r
};</code></pre>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <!-- Section: Warp Plugin (spec-first) -->\r
            <section id="warp-plugin" class="mt-20">\r
                <!-- Header row -->\r
                <div class="flex flex-wrap items-center justify-between gap-3">\r
                    <div>\r
                        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">\r
                            Warp plugin\r
                        </h2>\r
                        <p class="mt-2 max-w-2xl text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </div>\r
\r
                    <!-- Availability pills -->\r
                    <div class="flex items-center gap-2">\r
                        <span class="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-300/30 dark:bg-emerald-400/10 dark:text-emerald-200">\r
                            Visual Studio \u2014 available\r
                        </span>\r
                        <span class="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/20 dark:text-gray-300">\r
                            VS Code \u2014 planned\r
                        </span>\r
                    </div>\r
                </div>\r
\r
                <!-- Features -->\r
                <ul class="mt-8 grid gap-6 md:grid-cols-2">\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 1</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 2</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 3</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 4</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 5</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 6</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                </ul>\r
\r
                <!-- Screenshots -->\r
                <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">\r
                    <figure class="md:col-span-2 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/warp-shot-1.png" alt="Spec editor with live DSL sync" class="w-full h-auto body-text">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">\r
                            Spec editor with live DSL sync\r
                        </figcaption>\r
                    </figure>\r
\r
                    <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/warp-shot-2.png" alt="Spec types \u2192 typed F# models" class="w-full h-auto body-text">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">\r
                            Spec types \u2192 typed F# models\r
                        </figcaption>\r
                    </figure>\r
\r
                    <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/warp-shot-3.png" alt="Spec endpoint \u2192 typed route" class="w-full h-auto body-text">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">\r
                            Spec endpoint \u2192 typed route\r
                        </figcaption>\r
                    </figure>\r
                </div>\r
\r
                <!-- Compact CTA row -->\r
                <!-- <div class="mt-8 flex flex-wrap items-center gap-3">\r
                    <a href="./contact/" class="inline-flex items-center rounded-xl border border-gray-300 px-6 h-10 text-gray-800 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/10">\r
                    Request a demo\r
                    </a>\r
                    <a href="./dsl-ai#ai-integration" class="inline-flex items-center rounded-xl border border-gray-300 px-4 h-10 text-sm text-gray-800 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/10">\r
                    See AI assist plugin\r
                    </a>\r
                </div> -->\r
            </section>\r
\r
\r
            <!-- Section: AI Integration (WS plugin) -->\r
            <section id="ai-integration" class="mt-24">\r
                <!-- Headline + CTAs -->\r
                <div class="flex flex-wrap items-center justify-between gap-4">\r
                    <div>\r
                        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">\r
                            AI code review for WebSharper (VS Code)\r
                        </h2>\r
                        <p class="mt-2 max-w-2xl text-gray-700 dark:text-gray-300">\r
                            Review, explain, and fix code without leaving the editor. Private by default, with optional WebSharper-docs context.\r
                        </p>\r
                        <!-- Trust badges -->\r
                        <div class="mt-3 flex flex-wrap gap-2">\r
                            <span class="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 dark:bg-white/10 bg-gray-900">\r
                                Offline \u2022 Local Ollama\r
                            </span>\r
                            <span class="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 dark:border-white/20 dark:text-gray-300">\r
                                Privacy-first \u2022 No cloud calls\r
                            </span>\r
                            <span class="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 dark:border-white/20 dark:text-gray-300">\r
                                WebSharper-docs aware (RAG)\r
                            </span>\r
                        </div>\r
                    </div>\r
\r
                    <div class="flex gap-2">\r
                        <!-- Primary CTA -->\r
                        <a href="https://marketplace.visualstudio.com/items?itemName=souvanxay.ws-code-review" class="w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                                flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                                before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r
                                before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r
                                hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                            <span class="relative text-sm">Get the extension</span>\r
                        </a>\r
                        <!-- Secondary CTA -->\r
                        <a href="https://github.com/Got17/ai-code-review-vscode" class="disabled:before:bg-gray-300 group relative before:absolute before:inset-0 before:rounded-xl before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20 w-fit rounded-xl h-10 flex justify-center items-center px-6">\r
                            <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white">View on GitHub</span>\r
                        </a>\r
                    </div>\r
                </div>\r
\r
                <!-- Hero video -->\r
                <div class="mt-8 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                    <video class="w-full h-auto" autoplay="" loop="" muted="" playsinline="" preload="metadata" controls="">\r
                        <source src="./Assets/videos/ws-plugin-demo.mp4" type="video/mp4">\r
                        Your browser does not support the video tag.\r
                    </video>\r
                </div>\r
\r
                <!-- Value props (benefits) -->\r
                <ul class="mt-10 grid gap-6 md:grid-cols-3">\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Stay in flow</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Get in-editor suggestions as a streamed diff. Accept or reject in one click.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Private by design</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Runs locally with Ollama. No cloud calls. Works great offline.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">WebSharper-aware when needed</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Toggle RAG to enrich reviews with bundled <em>WebSharper</em> context.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Shadow Git snapshots</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Keep a private audit trail of accepted edits. Browse and roll back anytime.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Model switcher & preferences</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Pick your local coder model and steer tone, naming, and idioms via AI Preferences.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Works with huge files</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Large-file safety falls back to selection-only, so you never lose control.\r
                        </p>\r
                    </li>\r
                </ul>\r
\r
                <!-- Small, punchy gallery -->\r
                <div class="mt-10 grid gap-4 md:grid-cols-3">\r
                    <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/right-click.png" alt="Right-click: WS Code Review \u2192 Show Suggestion" class="w-full h-auto">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center">Show Suggestion from context menu</figcaption>\r
                    </figure>\r
                    <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/show-suggestion-cmd.png" alt="Command Palette: Show Suggestion" class="w-full h-auto">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center">Run from Command Palette</figcaption>\r
                    </figure>\r
                    <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/result.png" alt="Diff preview with Accept/Reject" class="w-full h-auto">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center">Streamed diff \u2022 Accept / Reject</figcaption>\r
                    </figure>\r
                </div>\r
\r
                <!-- Developer details tucked away -->\r
                <details class="mt-8 rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                    <summary class="cursor-pointer select-none text-sm font-semibold text-gray-900 dark:text-white">\r
                        Setup & commands (for developers)\r
                    </summary>\r
                    <div class="mt-4 space-y-6 text-gray-700 dark:text-gray-300">\r
                        <div>\r
                            <h4 class="font-semibold text-gray-900 dark:text-white">Quick start</h4>\r
                            <ol class="mt-2 list-decimal pl-5 space-y-2">\r
                                <li>Install from Marketplace or run <code>code --install-extension souvanxay.ws-code-review</code>.</li>\r
                                <li>Install <strong>Ollama</strong>, pull a coder model (<code>ollama pull qwen2.5-coder:7b-instruct</code>), then <code>ollama serve</code>.</li>\r
                                <li>Open an <code>.fs</code> file. Run <em>WS Code Review: Show Suggestion</em> via shortcut, context menu, or Command Palette.</li>\r
                                <li>\r
                                    Accept/Reject the suggestion. Enable Shadow Git to snapshot accepts:\r
                                    <code>"wsCodeReview.git.enable": true</code>.\r
                                </li>\r
                                <li>\r
                                    For WebSharper-docs-aware reviews, toggle the RAG pill or enable\r
                                    <code>"wsCodeReview.rag.enable": true</code>, then Refresh.\r
                                </li>\r
                            </ol>\r
                        </div>\r
\r
                        <div>\r
                            <h4 class="font-semibold text-gray-900 dark:text-white">Commands</h4>\r
                            <ul class="mt-2 list-disc pl-5 space-y-1">\r
                                <li>WS Code Review: Show Suggestion</li>\r
                                <li>WS Code Review: Change Ollama Model</li>\r
                                <li>WS Code Review: Set / Show / Clear AI Preferences</li>\r
                                <li>WS Code Review: Show / Clear Shadow Git History</li>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                </details>\r
\r
                <!-- Soft doc CTA -->\r
                <a href="https://docs.websharper.com/core/ws-ai-plugin" class="mt-8 w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                            flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                            before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r
                            before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r
                            hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                    <span class="relative text-sm">Read the guide</span>\r
                </a>\r
            </section>\r
        </div>\r
    `),e):We("dslai",C("content"),()=>se(`\r
        <div class="mx-auto max-w-5xl px-4 pb-16 md:pb-20" ws-onafterrender="OnAfterRender">\r
            <!-- Hero -->\r
            <section>\r
                <div class="mx-auto max-w-6xl px-6 pt-36 sm:pt-40 lg:px-8 lg:pb-12 lg:pt-48 xl:px-0 2xl:max-w-7xl">\r
                    <div class="relative z-10 text-center w-full">\r
                        <h1 class="max-w-2xl mx-auto text-gray-950 dark:text-white text-4xl font-bold sm:text-5xl">DSLs + AI Integration</h1>\r
                        <p class="mt-6 max-w-lg mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <!-- Section: DSL -->\r
            <section class="mt-20">\r
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">What is a DSL?</h2>\r
                <p class="mt-2 mb-10 text-gray-700 dark:text-gray-300">\r
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                </p>\r
\r
                <div class="mt-8 mx-auto w-full md:mt-0 md:w-1/2">\r
                    <div ws-onafterrender="InitTabs" data-name="snippet" class="relative z-10 border border-gray-200/75 bg-white dark:border-gray-800 dark:bg-gray-900 rounded-2xl p-px md:rounded-xl">\r
                        <div class="rounded-2xl text-sm backdrop-blur-3xl md:ml-0 md:rounded-xl">\r
                            <div class="flex items-center gap-4 rounded-t-2xl px-4 py-1 md:rounded-t-xl border-b dark:border-gray-800">\r
                                <div class="flex space-x-1.5">\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                    <div aria-hidden="true" class="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>\r
                                </div>\r
\r
                                <div role="tablist" aria-label="tabs" class="relative flex text-gray-500 dark:text-white/70">\r
                                    <div aria-hidden="true" class="tab-indicator absolute inset-0 w-0 rounded-md transition-[width,left] duration-500 border bg-gray-100 dark:bg-gray-800 dark:border-gray-700/50"></div>\r
                                    <button role="tab" aria-selected="true" data-target="fsharp" class="relative flex cursor-pointer items-center gap-1.5 px-1.5 py-1 duration-300 hover:text-gray-600 dark:hover:text-white">\r
                                        <svg class="h-3.5 w-3.5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="236" height="224" viewbox="0 0 62.441665 59.266668" version="1.1" id="svg5" inkscape:version="1.1 (c68e22c387, 2021-05-23)" sodipodi:docname="F Sharp logo.svg">\r
                                            <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#999999" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="false" units="px" width="236px" inkscape:zoom="2" inkscape:cx="142.75" inkscape:cy="75.75" inkscape:window-width="1920" inkscape:window-height="1057" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview>\r
                                            <defs id="defs2"></defs>\r
                                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">\r
                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,59.266667 0,29.633333 29.633333,0 V 14.816667 L 14.816667,29.633333 29.633333,44.45 Z" id="path4912" sodipodi:nodetypes="ccccccc"></path>\r
                                                <path style="fill: #378bba; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 29.633333,40.216667 19.05,29.633333 29.633333,19.05 Z" id="path9393" sodipodi:nodetypes="cccc"></path>\r
                                                <path style="fill: #30b9db; fill-opacity: 1; stroke: none; stroke-width: 0.264583px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1" d="M 31.75,0 V 14.816667 L 46.566667,29.633333 31.75,44.45 V 59.266667 L 62.441667,29.633333 Z" id="path13640" sodipodi:nodetypes="ccccccc"></path>\r
                                            </g>\r
                                        </svg>\r
                                        <span class="text-xs">DSL.warp</span>\r
                                    </button>\r
                                </div>\r
                            </div>\r
                            <div class="snippet-code relative rounded-b-2xl dark:mt-px  md:rounded-b-xl">\r
                                <div class="custom-scrollbar relative h-80 w-full overflow-auto !p-0 text-xs">\r
                                    <div class="absolute inset-0 h-max w-max" role="tabpanel" aria-labelledby="tab-1" data-lang="fsharp">\r
                                        <pre class="p-4 pt-0"><code class="w-max language-fsharp">type Item {\r
    text ItemNumber;\r
    text Name;\r
    number Quantity format "[0-9]+" with "Must specify a number"\r
};\r
\r
type Address {\r
    text Street1;\r
    text Street2 optional;\r
    text City;\r
    text State = "CA";\r
    text Zip\r
};</code></pre>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <!-- Section: Warp Plugin (spec-first) -->\r
            <section id="warp-plugin" class="mt-20">\r
                <!-- Header row -->\r
                <div class="flex flex-wrap items-center justify-between gap-3">\r
                    <div>\r
                        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">\r
                            Warp plugin\r
                        </h2>\r
                        <p class="mt-2 max-w-2xl text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </div>\r
\r
                    <!-- Availability pills -->\r
                    <div class="flex items-center gap-2">\r
                        <span class="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-300/30 dark:bg-emerald-400/10 dark:text-emerald-200">\r
                            Visual Studio \u2014 available\r
                        </span>\r
                        <span class="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/20 dark:text-gray-300">\r
                            VS Code \u2014 planned\r
                        </span>\r
                    </div>\r
                </div>\r
\r
                <!-- Features -->\r
                <ul class="mt-8 grid gap-6 md:grid-cols-2">\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 1</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 2</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 3</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 4</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 5</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Feature 6</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.\r
                        </p>\r
                    </li>\r
                </ul>\r
\r
                <!-- Screenshots -->\r
                <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">\r
                    <figure class="md:col-span-2 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/warp-shot-1.png" alt="Spec editor with live DSL sync" class="w-full h-auto body-text">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">\r
                            Spec editor with live DSL sync\r
                        </figcaption>\r
                    </figure>\r
\r
                    <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/warp-shot-2.png" alt="Spec types \u2192 typed F# models" class="w-full h-auto body-text">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">\r
                            Spec types \u2192 typed F# models\r
                        </figcaption>\r
                    </figure>\r
\r
                    <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/warp-shot-3.png" alt="Spec endpoint \u2192 typed route" class="w-full h-auto body-text">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">\r
                            Spec endpoint \u2192 typed route\r
                        </figcaption>\r
                    </figure>\r
                </div>\r
\r
                <!-- Compact CTA row -->\r
                <!-- <div class="mt-8 flex flex-wrap items-center gap-3">\r
                    <a href="./contact/" class="inline-flex items-center rounded-xl border border-gray-300 px-6 h-10 text-gray-800 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/10">\r
                    Request a demo\r
                    </a>\r
                    <a href="./dsl-ai#ai-integration" class="inline-flex items-center rounded-xl border border-gray-300 px-4 h-10 text-sm text-gray-800 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/10">\r
                    See AI assist plugin\r
                    </a>\r
                </div> -->\r
            </section>\r
\r
\r
            <!-- Section: AI Integration (WS plugin) -->\r
            <section id="ai-integration" class="mt-24">\r
                <!-- Headline + CTAs -->\r
                <div class="flex flex-wrap items-center justify-between gap-4">\r
                    <div>\r
                        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">\r
                            AI code review for WebSharper (VS Code)\r
                        </h2>\r
                        <p class="mt-2 max-w-2xl text-gray-700 dark:text-gray-300">\r
                            Review, explain, and fix code without leaving the editor. Private by default, with optional WebSharper-docs context.\r
                        </p>\r
                        <!-- Trust badges -->\r
                        <div class="mt-3 flex flex-wrap gap-2">\r
                            <span class="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 dark:bg-white/10 bg-gray-900">\r
                                Offline \u2022 Local Ollama\r
                            </span>\r
                            <span class="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 dark:border-white/20 dark:text-gray-300">\r
                                Privacy-first \u2022 No cloud calls\r
                            </span>\r
                            <span class="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 dark:border-white/20 dark:text-gray-300">\r
                                WebSharper-docs aware (RAG)\r
                            </span>\r
                        </div>\r
                    </div>\r
\r
                    <div class="flex gap-2">\r
                        <!-- Primary CTA -->\r
                        <a href="https://marketplace.visualstudio.com/items?itemName=souvanxay.ws-code-review" class="w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                                flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                                before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r
                                before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r
                                hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                            <span class="relative text-sm">Get the extension</span>\r
                        </a>\r
                        <!-- Secondary CTA -->\r
                        <a href="https://github.com/Got17/ai-code-review-vscode" class="disabled:before:bg-gray-300 group relative before:absolute before:inset-0 before:rounded-xl before:bg-brand-primary/20 before:transition before:duration-300 hover:before:bg-brand-primary/30 active:duration-75 active:before:scale-95 disabled:before:scale-100 dark:before:bg-white/10 dark:hover:before:bg-white/20 w-fit rounded-xl h-10 flex justify-center items-center px-6">\r
                            <span class="relative w-max text-sm font-medium text-gray-600 dark:text-white">View on GitHub</span>\r
                        </a>\r
                    </div>\r
                </div>\r
\r
                <!-- Hero video -->\r
                <div class="mt-8 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                    <video class="w-full h-auto" autoplay="" loop="" muted="" playsinline="" preload="metadata" controls="">\r
                        <source src="./Assets/videos/ws-plugin-demo.mp4" type="video/mp4">\r
                        Your browser does not support the video tag.\r
                    </video>\r
                </div>\r
\r
                <!-- Value props (benefits) -->\r
                <ul class="mt-10 grid gap-6 md:grid-cols-3">\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Stay in flow</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Get in-editor suggestions as a streamed diff. Accept or reject in one click.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Private by design</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Runs locally with Ollama. No cloud calls. Works great offline.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">WebSharper-aware when needed</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Toggle RAG to enrich reviews with bundled <em>WebSharper</em> context.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Shadow Git snapshots</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Keep a private audit trail of accepted edits. Browse and roll back anytime.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Model switcher & preferences</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Pick your local coder model and steer tone, naming, and idioms via AI Preferences.\r
                        </p>\r
                    </li>\r
                    <li class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                        <h3 class="font-semibold text-gray-900 dark:text-white">Works with huge files</h3>\r
                        <p class="mt-2 text-gray-700 dark:text-gray-300">\r
                            Large-file safety falls back to selection-only, so you never lose control.\r
                        </p>\r
                    </li>\r
                </ul>\r
\r
                <!-- Small, punchy gallery -->\r
                <div class="mt-10 grid gap-4 md:grid-cols-3">\r
                    <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/right-click.png" alt="Right-click: WS Code Review \u2192 Show Suggestion" class="w-full h-auto">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center">Show Suggestion from context menu</figcaption>\r
                    </figure>\r
                    <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/show-suggestion-cmd.png" alt="Command Palette: Show Suggestion" class="w-full h-auto">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center">Run from Command Palette</figcaption>\r
                    </figure>\r
                    <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">\r
                        <img src="./Assets/images/result.png" alt="Diff preview with Accept/Reject" class="w-full h-auto">\r
                        <figcaption class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center">Streamed diff \u2022 Accept / Reject</figcaption>\r
                    </figure>\r
                </div>\r
\r
                <!-- Developer details tucked away -->\r
                <details class="mt-8 rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                    <summary class="cursor-pointer select-none text-sm font-semibold text-gray-900 dark:text-white">\r
                        Setup & commands (for developers)\r
                    </summary>\r
                    <div class="mt-4 space-y-6 text-gray-700 dark:text-gray-300">\r
                        <div>\r
                            <h4 class="font-semibold text-gray-900 dark:text-white">Quick start</h4>\r
                            <ol class="mt-2 list-decimal pl-5 space-y-2">\r
                                <li>Install from Marketplace or run <code>code --install-extension souvanxay.ws-code-review</code>.</li>\r
                                <li>Install <strong>Ollama</strong>, pull a coder model (<code>ollama pull qwen2.5-coder:7b-instruct</code>), then <code>ollama serve</code>.</li>\r
                                <li>Open an <code>.fs</code> file. Run <em>WS Code Review: Show Suggestion</em> via shortcut, context menu, or Command Palette.</li>\r
                                <li>\r
                                    Accept/Reject the suggestion. Enable Shadow Git to snapshot accepts:\r
                                    <code>"wsCodeReview.git.enable": true</code>.\r
                                </li>\r
                                <li>\r
                                    For WebSharper-docs-aware reviews, toggle the RAG pill or enable\r
                                    <code>"wsCodeReview.rag.enable": true</code>, then Refresh.\r
                                </li>\r
                            </ol>\r
                        </div>\r
\r
                        <div>\r
                            <h4 class="font-semibold text-gray-900 dark:text-white">Commands</h4>\r
                            <ul class="mt-2 list-disc pl-5 space-y-1">\r
                                <li>WS Code Review: Show Suggestion</li>\r
                                <li>WS Code Review: Change Ollama Model</li>\r
                                <li>WS Code Review: Set / Show / Clear AI Preferences</li>\r
                                <li>WS Code Review: Show / Clear Shadow Git History</li>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                </details>\r
\r
                <!-- Soft doc CTA -->\r
                <a href="https://docs.websharper.com/core/ws-ai-plugin" class="mt-8 w-fit rounded-xl h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800\r
                            flex justify-center items-center px-6 text-white dark:text-gray-950 relative\r
                            before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500\r
                            before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950\r
                            hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                    <span class="relative text-sm">Read the guide</span>\r
                </a>\r
            </section>\r
        </div>\r
    `))}function Dm(e){return e?et("error",C("content"),()=>se(`\r
        <div class="min-h-screen grid place-items-center px-6 py-16" ws-onafterrender="OnAfterRender">\r
            <section class="w-full max-w-3xl">\r
                <div class="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 md:p-12 shadow-sm shadow-gray-950/5">\r
                    <div class="flex items-start gap-5">\r
                        <div class="h-14 w-14 rounded-full grid place-items-center bg-red-50 text-red-600 dark:bg-red-900/20">\r
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewbox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                                <path d="M12 9v4m0 4h.01M10.29 3.86a2 2 0 0 1 3.42 0l8.49 14.73A2 2 0 0 1 20.49 22H3.51a2 2 0 0 1-1.71-3.41L10.29 3.86z"></path>\r
                            </svg>\r
                        </div>\r
                        <div class="min-w-0">\r
                            <h1 id="title" class="text-gray-800 dark:text-white text-3xl font-bold tracking-tight" ws-hole="ErrorTitle">\r
                                Something went wrong\r
                            </h1>\r
                            <p id="msg" class="mt-2 text-base text-gray-600 dark:text-gray-400" ws-hole="ErrorMessage">\r
                                An unexpected error occurred. Please try again.\r
                            </p>\r
                            <p id="details" class="hidden mt-2 text-xs text-gray-500 dark:text-gray-500"></p>\r
                        </div>\r
                    </div>\r
\r
                    <div class="mt-8 flex flex-wrap gap-3">\r
                        <button id="retry" class="h-11 px-5 rounded-xl bg-gray-950 text-white dark:bg-white dark:text-gray-950 border border-gray-950 dark:border-gray-800" ws-onclick="OnRetry">\r
                            Try again\r
                        </button>\r
                        <a id="back" class="h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white cursor-pointer" ws-onclick="OnBack">\r
                            Go back\r
                        </a>\r
                        <a href="./" class="h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white">\r
                            Home\r
                        </a>\r
                    </div>\r
\r
                    <p class="mt-6 text-sm text-gray-600 dark:text-gray-400">\r
                        If this keeps happening, please try again later. No changes were made to your account.\r
                    </p>\r
                </div>\r
            </section>\r
        </div>\r
    `),e):We("error",C("content"),()=>se(`\r
        <div class="min-h-screen grid place-items-center px-6 py-16" ws-onafterrender="OnAfterRender">\r
            <section class="w-full max-w-3xl">\r
                <div class="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 md:p-12 shadow-sm shadow-gray-950/5">\r
                    <div class="flex items-start gap-5">\r
                        <div class="h-14 w-14 rounded-full grid place-items-center bg-red-50 text-red-600 dark:bg-red-900/20">\r
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewbox="0 0 24 24" fill="currentColor" aria-hidden="true">\r
                                <path d="M12 9v4m0 4h.01M10.29 3.86a2 2 0 0 1 3.42 0l8.49 14.73A2 2 0 0 1 20.49 22H3.51a2 2 0 0 1-1.71-3.41L10.29 3.86z"></path>\r
                            </svg>\r
                        </div>\r
                        <div class="min-w-0">\r
                            <h1 id="title" class="text-gray-800 dark:text-white text-3xl font-bold tracking-tight" ws-hole="ErrorTitle">\r
                                Something went wrong\r
                            </h1>\r
                            <p id="msg" class="mt-2 text-base text-gray-600 dark:text-gray-400" ws-hole="ErrorMessage">\r
                                An unexpected error occurred. Please try again.\r
                            </p>\r
                            <p id="details" class="hidden mt-2 text-xs text-gray-500 dark:text-gray-500"></p>\r
                        </div>\r
                    </div>\r
\r
                    <div class="mt-8 flex flex-wrap gap-3">\r
                        <button id="retry" class="h-11 px-5 rounded-xl bg-gray-950 text-white dark:bg-white dark:text-gray-950 border border-gray-950 dark:border-gray-800" ws-onclick="OnRetry">\r
                            Try again\r
                        </button>\r
                        <a id="back" class="h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white cursor-pointer" ws-onclick="OnBack">\r
                            Go back\r
                        </a>\r
                        <a href="./" class="h-11 px-5 grid place-items-center rounded-xl border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white">\r
                            Home\r
                        </a>\r
                    </div>\r
\r
                    <p class="mt-6 text-sm text-gray-600 dark:text-gray-400">\r
                        If this keeps happening, please try again later. No changes were made to your account.\r
                    </p>\r
                </div>\r
            </section>\r
        </div>\r
    `))}function Fm(e){return e?et("invoice",C("content"),()=>se(`\r
        <div class="mx-auto max-w-3xl p-6 text-gray-600 dark:text-white" ws-onafterrender="OnAfterRender">\r
            <div class="mb-6 flex items-center justify-between">\r
                <h1 class="text-xl font-bold">\r
                    Invoice <span ws-hole="InvId">-</span>\r
                </h1>\r
                <a href="./account#subs" class="rounded-md border px-3 py-2 text-sm border-gray-300 dark:border-white/20">Back</a>\r
            </div>\r
\r
            <section class="rounded-xl border border-gray-200 p-5 dark:border-gray-800 space-y-3">\r
                <div class="grid grid-cols-2 gap-4">\r
                    <div>\r
                        <div class="text-sm text-gray-600 dark:text-gray-400">Date</div>\r
                        <div ws-hole="InvDate" class="font-medium">-</div>\r
                    </div>\r
                    <div>\r
                        <div class="text-sm text-gray-600 dark:text-gray-400">Status</div>\r
                        <div ws-hole="InvStatus" class="font-medium capitalize">-</div>\r
                    </div>\r
                    <div>\r
                        <div class="text-sm text-gray-600 dark:text-gray-400">Amount</div>\r
                        <div ws-hole="InvAmount" class="font-medium">-</div>\r
                    </div>\r
                    <div>\r
                        <div class="text-sm text-gray-600 dark:text-gray-400">Subscription</div>\r
                        <div ws-hole="InvSub" class="font-medium">-</div>\r
                    </div>\r
                </div>\r
                <hr class="border-gray-200 dark:border-white/10">\r
                <div class="text-sm">\r
                    <div class="text-gray-600 dark:text-gray-400">Bill to</div>\r
                    <div ws-hole="BillToName">-</div>\r
                    <div ws-hole="BillToAddr" class="text-gray-600 dark:text-gray-400">-</div>\r
                    <div ws-hole="BillToVat" class="text-gray-600 dark:text-gray-400">-</div>\r
                </div>\r
                <!-- Add line items if you expose them -->\r
                <div id="lineItems" class="mt-4"></div>\r
            </section>\r
        </div>\r
    `),e):We("invoice",C("content"),()=>se(`\r
        <div class="mx-auto max-w-3xl p-6 text-gray-600 dark:text-white" ws-onafterrender="OnAfterRender">\r
            <div class="mb-6 flex items-center justify-between">\r
                <h1 class="text-xl font-bold">\r
                    Invoice <span ws-hole="InvId">-</span>\r
                </h1>\r
                <a href="./account#subs" class="rounded-md border px-3 py-2 text-sm border-gray-300 dark:border-white/20">Back</a>\r
            </div>\r
\r
            <section class="rounded-xl border border-gray-200 p-5 dark:border-gray-800 space-y-3">\r
                <div class="grid grid-cols-2 gap-4">\r
                    <div>\r
                        <div class="text-sm text-gray-600 dark:text-gray-400">Date</div>\r
                        <div ws-hole="InvDate" class="font-medium">-</div>\r
                    </div>\r
                    <div>\r
                        <div class="text-sm text-gray-600 dark:text-gray-400">Status</div>\r
                        <div ws-hole="InvStatus" class="font-medium capitalize">-</div>\r
                    </div>\r
                    <div>\r
                        <div class="text-sm text-gray-600 dark:text-gray-400">Amount</div>\r
                        <div ws-hole="InvAmount" class="font-medium">-</div>\r
                    </div>\r
                    <div>\r
                        <div class="text-sm text-gray-600 dark:text-gray-400">Subscription</div>\r
                        <div ws-hole="InvSub" class="font-medium">-</div>\r
                    </div>\r
                </div>\r
                <hr class="border-gray-200 dark:border-white/10">\r
                <div class="text-sm">\r
                    <div class="text-gray-600 dark:text-gray-400">Bill to</div>\r
                    <div ws-hole="BillToName">-</div>\r
                    <div ws-hole="BillToAddr" class="text-gray-600 dark:text-gray-400">-</div>\r
                    <div ws-hole="BillToVat" class="text-gray-600 dark:text-gray-400">-</div>\r
                </div>\r
                <!-- Add line items if you expose them -->\r
                <div id="lineItems" class="mt-4"></div>\r
            </section>\r
        </div>\r
    `))}function Mm(e){return e?et("success",C("content"),()=>se(`\r
        <div class="max-w-xl mx-auto px-6 py-16 text-center" ws-onafterrender="OnAfterRender">\r
            <h1 class="text-3xl font-bold text-gray-950 dark:text-white">Thanks! \u{1F389}</h1>\r
\r
            <p id="wsMsg" ws-hole="MessageText" class="mt-3 text-gray-600 dark:text-gray-400">\r
                Confirming your payment\u2026\r
            </p>\r
\r
            <div id="wsDetails" class="mt-6 text-md text-gray-700 dark:text-gray-300 space-y-4" ws-attr="DetailsAttr" ws-hole="DetailsDoc">\r
            </div>\r
\r
            <a href="./account" class="mt-8 inline-flex items-center justify-center rounded-xl h-10 px-4 bg-gray-950 text-white dark:bg-white dark:text-gray-950">\r
                My account\r
            </a>\r
        </div>\r
    `),e):We("success",C("content"),()=>se(`\r
        <div class="max-w-xl mx-auto px-6 py-16 text-center" ws-onafterrender="OnAfterRender">\r
            <h1 class="text-3xl font-bold text-gray-950 dark:text-white">Thanks! \u{1F389}</h1>\r
\r
            <p id="wsMsg" ws-hole="MessageText" class="mt-3 text-gray-600 dark:text-gray-400">\r
                Confirming your payment\u2026\r
            </p>\r
\r
            <div id="wsDetails" class="mt-6 text-md text-gray-700 dark:text-gray-300 space-y-4" ws-attr="DetailsAttr" ws-hole="DetailsDoc">\r
            </div>\r
\r
            <a href="./account" class="mt-8 inline-flex items-center justify-center rounded-xl h-10 px-4 bg-gray-950 text-white dark:bg-white dark:text-gray-950">\r
                My account\r
            </a>\r
        </div>\r
    `))}function Nm(e){return e?et("support",C("content"),()=>se(`\r
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
            <section class="scroll-my-16">\r
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
    `),e):We("support",C("content"),()=>se(`\r
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
            <section class="scroll-my-16">\r
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
    `))}function Lm(e){return e?et("checkout",C("rightskeleton"),()=>se(`<div class="mt-12 md:mt-2 transition-opacity duration-500 ease-out">\r
            <div class="h-7 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-12"></div>\r
            <div class="space-y-6">\r
                <div class="space-y-2">\r
                    <div class="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                </div>\r
                <div class="space-y-2">\r
                    <div class="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                    <div class="grid grid-cols-3 gap-2">\r
                        <div class="col-span-2 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                        <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                    </div>\r
                    <div class="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                </div>\r
                <div class="flex items-center gap-2">\r
                    <div class="size-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                </div>\r
                <div class="mt-12 h-14 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>\r
            </div>\r
        </div>`),e):We("checkout",C("rightskeleton"),()=>se(`<div class="mt-12 md:mt-2 transition-opacity duration-500 ease-out">\r
            <div class="h-7 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-12"></div>\r
            <div class="space-y-6">\r
                <div class="space-y-2">\r
                    <div class="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                </div>\r
                <div class="space-y-2">\r
                    <div class="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                    <div class="grid grid-cols-3 gap-2">\r
                        <div class="col-span-2 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                        <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                    </div>\r
                    <div class="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                </div>\r
                <div class="flex items-center gap-2">\r
                    <div class="size-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                </div>\r
                <div class="mt-12 h-14 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>\r
            </div>\r
        </div>`))}function Tm(e){return e?et("checkout",C("authform"),()=>se(`<section id="authSection" class="mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]">\r
            <h2 class="text-xl font-semibold text-gray-950 dark:text:white">Login & Registration</h2>\r
            <p class="mt-3 text-gray-600 dark:text-gray-400">\r
                Please sign in with GitHub to continue to checkout. If this is your first time, we will create your WebSharper account from your GitHub profile.\r
            </p>\r
\r
            <button id="wsGithubLogin" ws-onclick="OnGitHubLogin" type="button" class="cursor-pointer mt-6 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                <span class="relative flex items-center gap-2 text-sm">\r
                    <svg aria-hidden="true" viewbox="0 0 16 16" class="w-4 h-4 fill-current"><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.9-3.64-3.95 0-.87.31-1.6.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.06-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.39A8 8 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>\r
                    Continue with GitHub\r
                </span>\r
            </button>\r
\r
            <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">\r
                By continuing, you agree to the WebSharper <a href="#" class="underline hover:no-underline">Terms</a> and\r
                <a href="#" class="underline hover:no-underline">Privacy Policy</a>.\r
            </p>\r
            <noscript>\r
                <p class="mt-4 text-red-600 dark:text-red-400 text-sm">\r
                    JavaScript is required to sign in and complete checkout. Please enable JavaScript.\r
                </p>\r
            </noscript>\r
        </section>`),e):We("checkout",C("authform"),()=>se(`<section id="authSection" class="mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]">\r
            <h2 class="text-xl font-semibold text-gray-950 dark:text:white">Login & Registration</h2>\r
            <p class="mt-3 text-gray-600 dark:text-gray-400">\r
                Please sign in with GitHub to continue to checkout. If this is your first time, we will create your WebSharper account from your GitHub profile.\r
            </p>\r
\r
            <button id="wsGithubLogin" ws-onclick="OnGitHubLogin" type="button" class="cursor-pointer mt-6 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                <span class="relative flex items-center gap-2 text-sm">\r
                    <svg aria-hidden="true" viewbox="0 0 16 16" class="w-4 h-4 fill-current"><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.9-3.64-3.95 0-.87.31-1.6.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.06-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.39A8 8 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>\r
                    Continue with GitHub\r
                </span>\r
            </button>\r
\r
            <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">\r
                By continuing, you agree to the WebSharper <a href="#" class="underline hover:no-underline">Terms</a> and\r
                <a href="#" class="underline hover:no-underline">Privacy Policy</a>.\r
            </p>\r
            <noscript>\r
                <p class="mt-4 text-red-600 dark:text-red-400 text-sm">\r
                    JavaScript is required to sign in and complete checkout. Please enable JavaScript.\r
                </p>\r
            </noscript>\r
        </section>`))}function qm(e){return e?et("checkout",C("paymentform"),()=>se(`<form id="paymentSection" action="" class="mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]">\r
            <h2 class="text-xl font-semibold text-gray-950 dark:text-white">Payment details</h2>\r
            <div class="mt-12 space-y-6">\r
                <div class="mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2">\r
                    <label class="block font-medium text-sm" for="email">Email</label>\r
                    <input class="peer w-full focus:outline rounded-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5" type="email" required="" id="email" name="email" ws-var="Email">\r
                    <span class="hidden peer-invalid:hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-red-600 dark:text-red-400 text-sm">Please enter your email</span>\r
                </div>\r
                <div class="mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2">\r
                    <label class="block font-medium text-sm" for="country">Billing address</label>\r
\r
                    <!-- Street -->\r
                    <input id="street" name="street" placeholder="Street address" required="" ws-var="Street" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
\r
                    <!-- City + Postal -->\r
                    <div class="grid grid-cols-3 gap-2">\r
                        <input id="city" name="city" placeholder="City" required="" ws-var="City" class="col-span-2 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                        <input id="postal" name="postal" placeholder="Postal Code" required="" ws-var="Postal" class="col-span-1 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                    </div>\r
\r
                    <!-- Country -->\r
                    <div class="relative">\r
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="currentColor" class="absolute pointer-events-none inset-y-0 my-auto right-3 size-4">\r
                            <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>\r
                        </svg>\r
                        <select name="country" id="country" required="" ws-var="Country" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            <div ws-replace="CountryOptions"></div>\r
                        </select>\r
                    </div>\r
                </div>\r
\r
\r
                <div class="peer">\r
                    <label for="company" class="flex items-center">\r
                        <input class="size-0 peer" type="checkbox" id="company" name="company" ws-var="IsCompany">\r
                        <div role="checkbox" class="shadow shadow-gray-700/5 outline-2 outline-offset-1 outline-blue-600 dark:outline-blue-500 peer-focus:outline size-[1.125rem] group peer relative flex appearance-none items-center justify-center border transition *:-rotate-12 *:scale-50 *:opacity-0 peer-checked:*:-rotate-6 peer-checked:*:scale-100 peer-checked:*:opacity-100 duration-150 before:absolute before:m-auto before:shadow-inner peer-checked:before:border-t peer-checked:before:bg-blue-600 peer-disabled:before:hidden before:border-transparent before:bg-white active:ring-[3px] active:ring-blue-600/10 peer-checked:before:border-gray-800 dark:border-gray-800 dark:bg-transparent dark:before:border dark:peer-checked:before:border-transparent peer-checked:before:shadow-white/10 dark:peer-checked:before:shadow-white/20 dark:peer-checked:before:bg-blue-600 peer-checked:border-none before:border-none border-gray-300 hover:border-gray-400/75 dark:hover:border-gray-700 before:inset-0 p-0 before:shadow-gray-950/5 dark:before:shadow-white/5 dark:before:bg-transparent bg-transparent before:size-full rounded before:rounded-[3px] peer-checked:before:rounded">\r
                            <span class="transition-all duration-200 relative text-white peer-disabled:text-gray-300 dark:peer-disabled:text-gray-700 pointer-events-none">\r
                                <svg class="size-4" viewbox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                    <path d="M6 15.91L10.4241 11.546L19.2713 20.273L34.7547 5L39.1788 9.364L19.2723 29L6 15.91Z" fill="white"></path>\r
                                </svg>\r
                            </span>\r
                        </div>\r
                        <span class="ml-2.5 leading-none text-gray-700 peer-peer-disabled:text-gray-300 dark:text-gray-300 dark:peer-peer-disabled:text-gray-700 select-none block font-medium text-sm">I represent a company</span>\r
                    </label>\r
                </div>\r
                <div id="companyBlock" ws-attr="CompanyBlockAttr" class="hidden peer-has-[:checked]:block mt-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2.5">\r
                    <label class="block font-medium text-sm" for="company-name">Company</label>\r
                    <div class="-space-y-px">\r
                        <input placeholder="Name" class="hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-t-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5" required="" id="company-name" name="company-name" ws-var="CompanyName" ws-attr="CompanyNameAttr">\r
                        <input placeholder="VATIN" class="hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-b-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5" id="vatin" name="vatin" ws-var="Vatin" ws-attr="VatinAttr">\r
                    </div>\r
                    <span class="flex gap-2 leading-normal peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm">\r
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="currentColor" class="w-4 h-4 mt-0.5">\r
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"></path>\r
                        </svg>\r
                        <span class="block w-[calc(100%-1.25rem)]">\r
                            VAT Identification Number. As an EU company (outside Hungary), you can account for the VAT, and supplying us with your VATIN allows us not to charge you for VAT.\r
                        </span>\r
                    </span>\r
                </div>\r
            </div>\r
            <div ws-replace="FormErrorDoc"></div>\r
            <button id="wsContinue" type="button" ws-onclick="OnContinueClick" ws-attr="ContinueButtonAttr" class="mt-12 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                <span ws-hole="ContinueText" class="relative text-sm">Continue to payment</span>\r
            </button>\r
        </form>`),e):We("checkout",C("paymentform"),()=>se(`<form id="paymentSection" action="" class="mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]">\r
            <h2 class="text-xl font-semibold text-gray-950 dark:text-white">Payment details</h2>\r
            <div class="mt-12 space-y-6">\r
                <div class="mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2">\r
                    <label class="block font-medium text-sm" for="email">Email</label>\r
                    <input class="peer w-full focus:outline rounded-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5" type="email" required="" id="email" name="email" ws-var="Email">\r
                    <span class="hidden peer-invalid:hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-red-600 dark:text-red-400 text-sm">Please enter your email</span>\r
                </div>\r
                <div class="mb-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2">\r
                    <label class="block font-medium text-sm" for="country">Billing address</label>\r
\r
                    <!-- Street -->\r
                    <input id="street" name="street" placeholder="Street address" required="" ws-var="Street" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
\r
                    <!-- City + Postal -->\r
                    <div class="grid grid-cols-3 gap-2">\r
                        <input id="city" name="city" placeholder="City" required="" ws-var="City" class="col-span-2 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                        <input id="postal" name="postal" placeholder="Postal Code" required="" ws-var="Postal" class="col-span-1 hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                    </div>\r
\r
                    <!-- Country -->\r
                    <div class="relative">\r
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="currentColor" class="absolute pointer-events-none inset-y-0 my-auto right-3 size-4">\r
                            <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>\r
                        </svg>\r
                        <select name="country" id="country" required="" ws-var="Country" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            <div ws-replace="CountryOptions"></div>\r
                        </select>\r
                    </div>\r
                </div>\r
\r
\r
                <div class="peer">\r
                    <label for="company" class="flex items-center">\r
                        <input class="size-0 peer" type="checkbox" id="company" name="company" ws-var="IsCompany">\r
                        <div role="checkbox" class="shadow shadow-gray-700/5 outline-2 outline-offset-1 outline-blue-600 dark:outline-blue-500 peer-focus:outline size-[1.125rem] group peer relative flex appearance-none items-center justify-center border transition *:-rotate-12 *:scale-50 *:opacity-0 peer-checked:*:-rotate-6 peer-checked:*:scale-100 peer-checked:*:opacity-100 duration-150 before:absolute before:m-auto before:shadow-inner peer-checked:before:border-t peer-checked:before:bg-blue-600 peer-disabled:before:hidden before:border-transparent before:bg-white active:ring-[3px] active:ring-blue-600/10 peer-checked:before:border-gray-800 dark:border-gray-800 dark:bg-transparent dark:before:border dark:peer-checked:before:border-transparent peer-checked:before:shadow-white/10 dark:peer-checked:before:shadow-white/20 dark:peer-checked:before:bg-blue-600 peer-checked:border-none before:border-none border-gray-300 hover:border-gray-400/75 dark:hover:border-gray-700 before:inset-0 p-0 before:shadow-gray-950/5 dark:before:shadow-white/5 dark:before:bg-transparent bg-transparent before:size-full rounded before:rounded-[3px] peer-checked:before:rounded">\r
                            <span class="transition-all duration-200 relative text-white peer-disabled:text-gray-300 dark:peer-disabled:text-gray-700 pointer-events-none">\r
                                <svg class="size-4" viewbox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                    <path d="M6 15.91L10.4241 11.546L19.2713 20.273L34.7547 5L39.1788 9.364L19.2723 29L6 15.91Z" fill="white"></path>\r
                                </svg>\r
                            </span>\r
                        </div>\r
                        <span class="ml-2.5 leading-none text-gray-700 peer-peer-disabled:text-gray-300 dark:text-gray-300 dark:peer-peer-disabled:text-gray-700 select-none block font-medium text-sm">I represent a company</span>\r
                    </label>\r
                </div>\r
                <div id="companyBlock" ws-attr="CompanyBlockAttr" class="hidden peer-has-[:checked]:block mt-2 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400 space-y-2.5">\r
                    <label class="block font-medium text-sm" for="company-name">Company</label>\r
                    <div class="-space-y-px">\r
                        <input placeholder="Name" class="hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-t-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5" required="" id="company-name" name="company-name" ws-var="CompanyName" ws-attr="CompanyNameAttr">\r
                        <input placeholder="VATIN" class="hover:z-[1] focus:z-[1] relative w-full focus:outline rounded-b-lg appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5" id="vatin" name="vatin" ws-var="Vatin" ws-attr="VatinAttr">\r
                    </div>\r
                    <span class="flex gap-2 leading-normal peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm">\r
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="currentColor" class="w-4 h-4 mt-0.5">\r
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"></path>\r
                        </svg>\r
                        <span class="block w-[calc(100%-1.25rem)]">\r
                            VAT Identification Number. As an EU company (outside Hungary), you can account for the VAT, and supplying us with your VATIN allows us not to charge you for VAT.\r
                        </span>\r
                    </span>\r
                </div>\r
            </div>\r
            <div ws-replace="FormErrorDoc"></div>\r
            <button id="wsContinue" type="button" ws-onclick="OnContinueClick" ws-attr="ContinueButtonAttr" class="mt-12 w-full rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                <span ws-hole="ContinueText" class="relative text-sm">Continue to payment</span>\r
            </button>\r
        </form>`))}function Gm(e){return e?et("checkout",C("content"),()=>se(`\r
        \r
\r
        \r
\r
        \r
\r
        \r
\r
        <!-- Main Container -->\r
        <div ws-onafterrender="OnAfterRender">\r
            <div class="hidden md:block fixed inset-0 w-1/2 -z-50 bg-gray-50 dark:bg-gray-900/50 border-r dark:border-gray-800"></div>\r
            <div class="max-w-6xl mx-auto px-12 gap-20 md:flex">\r
\r
                <div class="md:w-1/2 md:pr-20 pt-16">\r
                    <a href="./" class="rounded-full">\r
                        <span class="sr-only">WebSharper logo</span>\r
                        <img class="h-9 w-9 rounded-full bg-white dark:bg-transparent" src="./Assets/favicon.png" alt="websharper logo" width="164" height="164">\r
                    </a>\r
\r
                    <nav class="mt-8 flex gap-3 items-center">\r
                        <a id="backLink" ws-attr="BackLinkAttr" href="./support#plans" ws-hole="BackLinkLabel" class="text-gray-600 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400">\r
                            Plans\r
                        </a>\r
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="currentColor" class="text-gray-400 dark:text-gray-600 size-4">\r
                            <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>\r
                        </svg>\r
                        <span class="text-gray-950 dark:text-white font-medium">Payment</span>\r
                    </nav>\r
\r
                    <h1 class="mt-8 text-lg text-sky-600 dark:text-brand-primary mb-3">\r
                        <span ws-hole="PlanName"></span>\r
                    </h1>\r
\r
                    <p class="text-3xl font-bold text-gray-950 dark:text-white flex items-baseline gap-1">\r
                        <span ws-hole="PlanPrice"></span>\r
                        <span class="text-base text-gray-600 dark:text-gray-400 font-normal">/ <span ws-hole="PlanInterval"></span></span>\r
                    </p>\r
\r
                    <p class="mt-8 text-gray-600 dark:text-gray-400">Our experienced WebSharper support team is available to help you make the right decisions.</p>\r
\r
                    <div id="wsSeatSelector" ws-attr="SeatSelectorAttr" class="mt-6">\r
                        <label for="wsSeats" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Seats</label>\r
                        <div class="mt-2 flex items-center gap-2">\r
                            <button type="button" id="wsMinus" ws-onclick="OnSeatMinus" class="cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50">\r
                                -\r
                            </button>\r
                            <input id="wsSeats" name="wsSeats" ws-var="SeatsText" inputmode="numeric" pattern="[0-9]*" value="1" class="h-10 w-20 text-center rounded-lg border shadow border-gray-300 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white">\r
                            <button type="button" id="wsPlus" ws-onclick="OnSeatPlus" class="cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50">\r
                                +\r
                            </button>\r
                        </div>\r
                        <p id="wsPriceHint" class="mt-2 text-xs text-gray-500 dark:text-gray-400">\r
                            <span ws-hole="PriceHint"></span>\r
                        </p>\r
                    </div>\r
\r
                    <div class="fixed bottom-0 z-10 inset-x-0 px-12 border-t dark:border-gray-800 shadow-lg md:z-0 md:border-none md:shadow-none md:px-0 bg-white dark:bg-gray-900 dark:md:bg-transparent md:bg-transparent md:static mt-12 divide-y dark:divide-gray-800 text-gray-600 dark:text-gray-400">\r
                        <div class="py-3 flex justify-between">\r
                            <p>Subtotal</p>\r
                            <p aria-live="polite" class="font-medium text-gray-950 dark:text-white">\r
                                <span ws-hole="Subtotal"></span>\r
                            </p>\r
                        </div>\r
                        <div class="py-3 flex justify-between">\r
                            <p>Taxes</p>\r
                            <p class="font-medium text-gray-950 dark:text-white">\r
                                <span ws-hole="Taxes"></span>\r
                            </p>\r
                        </div>\r
                        <div class="py-3 flex justify-between">\r
                            <p class="text-gray-950 dark:text-white font-medium">Total</p>\r
                            <p aria-live="polite" class="font-medium text-gray-950 dark:text-white">\r
                                <span ws-hole="Total"></span>\r
                            </p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="pb-56 md:max-w-md md:w-1/2 md:pt-16 md:pb-16">\r
                    <div ws-replace="RightSideContent"></div>\r
                </div>\r
            </div>\r
        </div>\r
    `),e):We("checkout",C("content"),()=>se(`\r
        \r
\r
        \r
\r
        \r
\r
        \r
\r
        <!-- Main Container -->\r
        <div ws-onafterrender="OnAfterRender">\r
            <div class="hidden md:block fixed inset-0 w-1/2 -z-50 bg-gray-50 dark:bg-gray-900/50 border-r dark:border-gray-800"></div>\r
            <div class="max-w-6xl mx-auto px-12 gap-20 md:flex">\r
\r
                <div class="md:w-1/2 md:pr-20 pt-16">\r
                    <a href="./" class="rounded-full">\r
                        <span class="sr-only">WebSharper logo</span>\r
                        <img class="h-9 w-9 rounded-full bg-white dark:bg-transparent" src="./Assets/favicon.png" alt="websharper logo" width="164" height="164">\r
                    </a>\r
\r
                    <nav class="mt-8 flex gap-3 items-center">\r
                        <a id="backLink" ws-attr="BackLinkAttr" href="./support#plans" ws-hole="BackLinkLabel" class="text-gray-600 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400">\r
                            Plans\r
                        </a>\r
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="currentColor" class="text-gray-400 dark:text-gray-600 size-4">\r
                            <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>\r
                        </svg>\r
                        <span class="text-gray-950 dark:text-white font-medium">Payment</span>\r
                    </nav>\r
\r
                    <h1 class="mt-8 text-lg text-sky-600 dark:text-brand-primary mb-3">\r
                        <span ws-hole="PlanName"></span>\r
                    </h1>\r
\r
                    <p class="text-3xl font-bold text-gray-950 dark:text-white flex items-baseline gap-1">\r
                        <span ws-hole="PlanPrice"></span>\r
                        <span class="text-base text-gray-600 dark:text-gray-400 font-normal">/ <span ws-hole="PlanInterval"></span></span>\r
                    </p>\r
\r
                    <p class="mt-8 text-gray-600 dark:text-gray-400">Our experienced WebSharper support team is available to help you make the right decisions.</p>\r
\r
                    <div id="wsSeatSelector" ws-attr="SeatSelectorAttr" class="mt-6">\r
                        <label for="wsSeats" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Seats</label>\r
                        <div class="mt-2 flex items-center gap-2">\r
                            <button type="button" id="wsMinus" ws-onclick="OnSeatMinus" class="cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50">\r
                                -\r
                            </button>\r
                            <input id="wsSeats" name="wsSeats" ws-var="SeatsText" inputmode="numeric" pattern="[0-9]*" value="1" class="h-10 w-20 text-center rounded-lg border shadow border-gray-300 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white">\r
                            <button type="button" id="wsPlus" ws-onclick="OnSeatPlus" class="cursor-pointer h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50">\r
                                +\r
                            </button>\r
                        </div>\r
                        <p id="wsPriceHint" class="mt-2 text-xs text-gray-500 dark:text-gray-400">\r
                            <span ws-hole="PriceHint"></span>\r
                        </p>\r
                    </div>\r
\r
                    <div class="fixed bottom-0 z-10 inset-x-0 px-12 border-t dark:border-gray-800 shadow-lg md:z-0 md:border-none md:shadow-none md:px-0 bg-white dark:bg-gray-900 dark:md:bg-transparent md:bg-transparent md:static mt-12 divide-y dark:divide-gray-800 text-gray-600 dark:text-gray-400">\r
                        <div class="py-3 flex justify-between">\r
                            <p>Subtotal</p>\r
                            <p aria-live="polite" class="font-medium text-gray-950 dark:text-white">\r
                                <span ws-hole="Subtotal"></span>\r
                            </p>\r
                        </div>\r
                        <div class="py-3 flex justify-between">\r
                            <p>Taxes</p>\r
                            <p class="font-medium text-gray-950 dark:text-white">\r
                                <span ws-hole="Taxes"></span>\r
                            </p>\r
                        </div>\r
                        <div class="py-3 flex justify-between">\r
                            <p class="text-gray-950 dark:text-white font-medium">Total</p>\r
                            <p aria-live="polite" class="font-medium text-gray-950 dark:text-white">\r
                                <span ws-hole="Total"></span>\r
                            </p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="pb-56 md:max-w-md md:w-1/2 md:pt-16 md:pb-16">\r
                    <div ws-replace="RightSideContent"></div>\r
                </div>\r
            </div>\r
        </div>\r
    `))}function aA(e){return e?et("managesubscription",C("skeleton"),()=>se(`<div class="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] transition-opacity duration-500 ease-out">\r
        <aside class="lg:sticky lg:top-24 h-max">\r
            <div class="rounded-xl border border-gray-200 p-3 dark:border-gray-800 space-y-1">\r
                <div class="h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>\r
                <div class="h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>\r
            </div>\r
        </aside>\r
\r
        <div class="space-y-6">\r
\r
            <div class="space-y-3">\r
                <div class="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                <div class="h-4 w-full max-w-lg bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
\r
                <div class="flex items-center gap-2 mt-2">\r
                    <div class="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-9 w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>\r
                </div>\r
\r
                <div class="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mt-1"></div>\r
            </div>\r
\r
            <div class="flex flex-wrap items-center justify-between gap-3 pt-4">\r
                <div class="space-y-2">\r
                    <div class="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-4 w-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                </div>\r
                <div class="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
            </div>\r
\r
            <div class="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">\r
                <div class="flex flex-wrap items-start justify-between gap-4 px-4 py-4">\r
                    <div class="space-y-2">\r
                        <div class="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                        <div class="h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    </div>\r
                    <div class="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                </div>\r
\r
                <div class="bg-gray-50 dark:bg-gray-900/50 h-10 w-full border-t border-b border-gray-200 dark:border-gray-800 animate-pulse"></div>\r
\r
                <div class="divide-y divide-gray-200 dark:divide-gray-800">\r
                    <div class="h-14 bg-white dark:bg-gray-950 w-full animate-pulse"></div>\r
                    <div class="h-14 bg-white dark:bg-gray-950 w-full animate-pulse"></div>\r
                    <div class="h-14 bg-white dark:bg-gray-950 w-full animate-pulse"></div>\r
                </div>\r
            </div>\r
\r
            <div class="rounded-xl border border-gray-200 dark:border-gray-800 p-5">\r
                <div class="flex items-center justify-between mb-4">\r
                    <div class="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                </div>\r
\r
                <div class="space-y-2">\r
                    <div class="h-10 w-full bg-gray-5 dark:bg-gray-900/50 rounded animate-pulse"></div>\r
                    <div class="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                </div>\r
            </div>\r
\r
            <div class="rounded-xl border border-red-100 p-5 dark:border-red-900/30">\r
                <div class="h-6 w-32 bg-red-100 dark:bg-red-900/50 rounded animate-pulse mb-2"></div>\r
                <div class="h-4 w-96 bg-red-100 dark:bg-red-900/50 rounded animate-pulse"></div>\r
            </div>\r
        </div>\r
    </div>`),e):We("managesubscription",C("skeleton"),()=>se(`<div class="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] transition-opacity duration-500 ease-out">\r
        <aside class="lg:sticky lg:top-24 h-max">\r
            <div class="rounded-xl border border-gray-200 p-3 dark:border-gray-800 space-y-1">\r
                <div class="h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>\r
                <div class="h-9 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>\r
            </div>\r
        </aside>\r
\r
        <div class="space-y-6">\r
\r
            <div class="space-y-3">\r
                <div class="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                <div class="h-4 w-full max-w-lg bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
\r
                <div class="flex items-center gap-2 mt-2">\r
                    <div class="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-9 w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>\r
                </div>\r
\r
                <div class="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mt-1"></div>\r
            </div>\r
\r
            <div class="flex flex-wrap items-center justify-between gap-3 pt-4">\r
                <div class="space-y-2">\r
                    <div class="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-4 w-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                </div>\r
                <div class="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
            </div>\r
\r
            <div class="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">\r
                <div class="flex flex-wrap items-start justify-between gap-4 px-4 py-4">\r
                    <div class="space-y-2">\r
                        <div class="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                        <div class="h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    </div>\r
                    <div class="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                </div>\r
\r
                <div class="bg-gray-50 dark:bg-gray-900/50 h-10 w-full border-t border-b border-gray-200 dark:border-gray-800 animate-pulse"></div>\r
\r
                <div class="divide-y divide-gray-200 dark:divide-gray-800">\r
                    <div class="h-14 bg-white dark:bg-gray-950 w-full animate-pulse"></div>\r
                    <div class="h-14 bg-white dark:bg-gray-950 w-full animate-pulse"></div>\r
                    <div class="h-14 bg-white dark:bg-gray-950 w-full animate-pulse"></div>\r
                </div>\r
            </div>\r
\r
            <div class="rounded-xl border border-gray-200 dark:border-gray-800 p-5">\r
                <div class="flex items-center justify-between mb-4">\r
                    <div class="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>\r
                </div>\r
\r
                <div class="space-y-2">\r
                    <div class="h-10 w-full bg-gray-5 dark:bg-gray-900/50 rounded animate-pulse"></div>\r
                    <div class="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                    <div class="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>\r
                </div>\r
            </div>\r
\r
            <div class="rounded-xl border border-red-100 p-5 dark:border-red-900/30">\r
                <div class="h-6 w-32 bg-red-100 dark:bg-red-900/50 rounded animate-pulse mb-2"></div>\r
                <div class="h-4 w-96 bg-red-100 dark:bg-red-900/50 rounded animate-pulse"></div>\r
            </div>\r
        </div>\r
    </div>`))}function Rm(e){return e?et("managesubscription",C("loginprompt"),()=>se(`<div class="rounded-xl border p-6 dark:border-gray-800 dark:text-white text-gray-800 max-w-lg mx-auto mt-12 animate-[fadeIn_0.5s_ease-out]">\r
        <h3 class="text-lg font-semibold mb-2">\r
            Please log in\r
        </h3>\r
\r
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">\r
            You need to be signed in to manage your subscription.\r
        </p>\r
\r
        <button ws-onclick="LoginClick" class="w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
            <span class="relative text-sm">\r
                Log in with GitHub\r
            </span>\r
        </button>\r
    </div>`),e):We("managesubscription",C("loginprompt"),()=>se(`<div class="rounded-xl border p-6 dark:border-gray-800 dark:text-white text-gray-800 max-w-lg mx-auto mt-12 animate-[fadeIn_0.5s_ease-out]">\r
        <h3 class="text-lg font-semibold mb-2">\r
            Please log in\r
        </h3>\r
\r
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">\r
            You need to be signed in to manage your subscription.\r
        </p>\r
\r
        <button ws-onclick="LoginClick" class="w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
            <span class="relative text-sm">\r
                Log in with GitHub\r
            </span>\r
        </button>\r
    </div>`))}function $m(e){return e?et("managesubscription",C("authenticatedcontent"),()=>se(`<div class="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] animate-[fadeIn_0.5s_ease-out]">\r
        <aside class="lg:sticky lg:top-24 h-max">\r
            <nav aria-label="Settings" class="rounded-xl border border-gray-200 p-3 dark:border-gray-800">\r
                <ul class="space-y-1 text-sm">\r
                    <li>\r
                        <button data-nav="subs" class="settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5" ws-onclick="GoSubs" ws-attr="SubsTabAttr">\r
                            My subscriptions\r
                        </button>\r
                    </li>\r
                    <li>\r
                        <button data-nav="billing" class="settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5" ws-onclick="GoBilling" ws-attr="BillingTabAttr">\r
                            Billing information\r
                        </button>\r
                    </li>\r
                </ul>\r
            </nav>\r
        </aside>\r
\r
        <section>\r
            <div data-page="subs" ws-attr="SubsPageAttr" class="space-y-6 hidden">\r
\r
                <div ws-replace="GitHubOrg"></div>\r
\r
                \r
\r
                \r
\r
                \r
\r
                <div class="flex flex-wrap items-center justify-between gap-3">\r
                    <div>\r
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Seats &amp; Access</h1>\r
                        <p class="text-sm text-gray-600 dark:text-gray-400">Manage GitHub access for your WebSharper subscription.</p>\r
                    </div>\r
                    <button ws-onclick="OpenCustomerPortal" class="rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">\r
                        Manage billing in Stripe\r
                    </button>\r
                </div>\r
\r
                <section class="rounded-xl border border-gray-200 overflow-hidden dark:border-gray-800">\r
                    <div class="flex flex-wrap items-start justify-between gap-4 px-4 py-4">\r
                        <div>\r
                            <h2 class="font-semibold text-gray-900 dark:text-white">Add seats</h2>\r
                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">You can add more Professional seats in this section. Each new seat is valid for one year.</p>\r
                        </div>\r
                        <div>\r
                            <button ws-onclick="AddSeatsClick" ws-attr="AddSeatsButtonAttr" class="w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                                <span class="relative text-sm">Add seats</span>\r
                            </button>\r
                        </div>\r
                    </div>\r
                    <div class="mt-4 overflow-x-auto">\r
                        <table class="w-full text-sm">\r
                            <thead class="bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300">\r
                                <tr>\r
                                    <th class="px-4 py-3 text-left">Seat</th>\r
                                    <th class="px-4 py-3 text-center">GitHub username</th>\r
                                    <th class="px-4 py-3 text-center">Status</th>\r
                                    <th class="px-4 py-3 text-center">Expiry</th>\r
                                    <th class="px-4 py-3 text-right">Actions</th>\r
                                </tr>\r
                            </thead>\r
                            <tbody ws-hole="SeatsBody" class="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">\r
\r
                                \r
\r
                                \r
                            </tbody>\r
                        </table>\r
                    </div>\r
                </section>\r
\r
                <section class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                    <div class="flex items-center justify-between">\r
                        <h2 class="font-semibold text-gray-900 dark:text-white">Invoices</h2>\r
                        <button ws-onclick="RefreshClick" class="rounded-xl h-10 px-4 border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white">Refresh</button>\r
                    </div>\r
                    <div class="mt-4 overflow-x-auto">\r
                        <table class="w-full text-sm">\r
                            <thead class="bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300">\r
                                <tr>\r
                                    <th class="px-4 py-3 text-left">Invoice</th>\r
                                    <th class="px-4 py-3 text-left">Date</th>\r
                                    <th class="px-4 py-3 text-left">Amount</th>\r
                                    <th class="px-4 py-3 text-left">Status</th>\r
                                    <th class="px-4 py-3 text-right">Actions</th>\r
                                </tr>\r
                            </thead>\r
                            <tbody ws-hole="InvoiceBody" class="divide-y dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">\r
                                \r
                            </tbody>\r
                        </table>\r
                    </div>\r
                </section>\r
\r
                <section class="rounded-xl border border-red-200 p-5 dark:border-red-900/60">\r
                    <h2 class="font-semibold text-red-700 dark:text-red-400">Danger zone</h2>\r
                    <p class="mt-1 text-sm text-red-600 dark:text-red-300">Unassign removes GitHub access for that seat. You can reassign anytime.</p>\r
                </section>\r
            </div>\r
\r
            <div data-page="billing" ws-attr="BillingPageAttr" class="space-y-6 hidden">\r
                <div class="flex flex-wrap items-center justify-between gap-3">\r
                    <div>\r
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Billing information</h1>\r
                        <p class="text-sm text-gray-600 dark:text-gray-400">Update invoice recipient details, VAT number, and address used for future invoices.</p>\r
                    </div>\r
                    <div class="flex gap-2">\r
                        <button ws-onclick="BillingEditClick" ws-attr="BtnBillingEditAttr" class="rounded-lg h-10 px-4 border border-gray-300 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">Edit</button>\r
                        <button ws-onclick="BillingCancelClick" ws-attr="BtnBillingCancelAttr" class="hidden rounded-lg h-10 px-4 border border-gray-300 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">Cancel</button>\r
                        <button ws-onclick="BillingSaveClick" ws-attr="BtnBillingSaveAttr" class="hidden rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                            <span class="relative text-sm">Save</span>\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <section class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                    <div ws-attr="BillingViewAttr" class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">\r
                        <div>\r
                            <div class="text-gray-600 dark:text-gray-400">Company / Full name</div>\r
                            <div ws-hole="BillingNameView" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                        <div>\r
                            <div class="text-gray-600 dark:text-gray-400">VAT / Tax ID</div>\r
                            <div ws-hole="BillingVatinView" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                        <div class="sm:col-span-2">\r
                            <div class="text-gray-600 dark:text-gray-400">Address line 1</div>\r
                            <div ws-hole="BillingLine1View" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                        <div>\r
                            <div class="text-gray-600 dark:text-gray-400">City</div>\r
                            <div ws-hole="BillingCityView" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                        <div>\r
                            <div class="text-gray-600 dark:text-gray-400">Postal code</div>\r
                            <div ws-hole="BillingPostalView" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                        <div>\r
                            <div class="text-gray-600 dark:text-gray-400">Country</div>\r
                            <div ws-hole="BillingCountryView" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                    </div>\r
\r
                    <div ws-attr="BillingEditAttr" class="hidden mt-4">\r
                        <form class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
                            <div>\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Company / Full name</label>\r
                                <input ws-var="BillingNameVar" name="name" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            </div>\r
                            <div>\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">VAT / Tax ID</label>\r
                                <input ws-var="BillingVatinVar" name="vatin" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            </div>\r
                            <div class="sm:col-span-2">\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Address line 1</label>\r
                                <input ws-var="BillingLine1Var" name="line1" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            </div>\r
                            <div>\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">City</label>\r
                                <input ws-var="BillingCityVar" name="city" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            </div>\r
                            <div>\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Postal code</label>\r
                                <input ws-var="BillingPostalVar" name="postal_code" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            </div>\r
                            <div>\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Country</label>\r
                                <div class="relative">\r
                                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="currentColor" class="absolute pointer-events-none inset-y-0 my-auto right-3 size-4 text-gray-500 dark:text-gray-400">\r
                                        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>\r
                                    </svg>\r
                                    <select ws-var="BillingCountryVar" name="country" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                                        <option value="" disabled="" selected="">Select your country</option>\r
                                        <div ws-replace="CountryOptions"></div>\r
                                    </select>\r
                                </div>\r
                            </div>\r
                        </form>\r
                    </div>\r
                </section>\r
            </div>\r
        </section>\r
    </div>`),e):We("managesubscription",C("authenticatedcontent"),()=>se(`<div class="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] animate-[fadeIn_0.5s_ease-out]">\r
        <aside class="lg:sticky lg:top-24 h-max">\r
            <nav aria-label="Settings" class="rounded-xl border border-gray-200 p-3 dark:border-gray-800">\r
                <ul class="space-y-1 text-sm">\r
                    <li>\r
                        <button data-nav="subs" class="settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5" ws-onclick="GoSubs" ws-attr="SubsTabAttr">\r
                            My subscriptions\r
                        </button>\r
                    </li>\r
                    <li>\r
                        <button data-nav="billing" class="settings-tab w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5" ws-onclick="GoBilling" ws-attr="BillingTabAttr">\r
                            Billing information\r
                        </button>\r
                    </li>\r
                </ul>\r
            </nav>\r
        </aside>\r
\r
        <section>\r
            <div data-page="subs" ws-attr="SubsPageAttr" class="space-y-6 hidden">\r
\r
                <div ws-replace="GitHubOrg"></div>\r
\r
                \r
\r
                \r
\r
                \r
\r
                <div class="flex flex-wrap items-center justify-between gap-3">\r
                    <div>\r
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Seats &amp; Access</h1>\r
                        <p class="text-sm text-gray-600 dark:text-gray-400">Manage GitHub access for your WebSharper subscription.</p>\r
                    </div>\r
                    <button ws-onclick="OpenCustomerPortal" class="rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">\r
                        Manage billing in Stripe\r
                    </button>\r
                </div>\r
\r
                <section class="rounded-xl border border-gray-200 overflow-hidden dark:border-gray-800">\r
                    <div class="flex flex-wrap items-start justify-between gap-4 px-4 py-4">\r
                        <div>\r
                            <h2 class="font-semibold text-gray-900 dark:text-white">Add seats</h2>\r
                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">You can add more Professional seats in this section. Each new seat is valid for one year.</p>\r
                        </div>\r
                        <div>\r
                            <button ws-onclick="AddSeatsClick" ws-attr="AddSeatsButtonAttr" class="w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                                <span class="relative text-sm">Add seats</span>\r
                            </button>\r
                        </div>\r
                    </div>\r
                    <div class="mt-4 overflow-x-auto">\r
                        <table class="w-full text-sm">\r
                            <thead class="bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300">\r
                                <tr>\r
                                    <th class="px-4 py-3 text-left">Seat</th>\r
                                    <th class="px-4 py-3 text-center">GitHub username</th>\r
                                    <th class="px-4 py-3 text-center">Status</th>\r
                                    <th class="px-4 py-3 text-center">Expiry</th>\r
                                    <th class="px-4 py-3 text-right">Actions</th>\r
                                </tr>\r
                            </thead>\r
                            <tbody ws-hole="SeatsBody" class="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">\r
\r
                                \r
\r
                                \r
                            </tbody>\r
                        </table>\r
                    </div>\r
                </section>\r
\r
                <section class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                    <div class="flex items-center justify-between">\r
                        <h2 class="font-semibold text-gray-900 dark:text-white">Invoices</h2>\r
                        <button ws-onclick="RefreshClick" class="rounded-xl h-10 px-4 border border-gray-300 text-gray-800 dark:border-white/20 dark:text-white">Refresh</button>\r
                    </div>\r
                    <div class="mt-4 overflow-x-auto">\r
                        <table class="w-full text-sm">\r
                            <thead class="bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300">\r
                                <tr>\r
                                    <th class="px-4 py-3 text-left">Invoice</th>\r
                                    <th class="px-4 py-3 text-left">Date</th>\r
                                    <th class="px-4 py-3 text-left">Amount</th>\r
                                    <th class="px-4 py-3 text-left">Status</th>\r
                                    <th class="px-4 py-3 text-right">Actions</th>\r
                                </tr>\r
                            </thead>\r
                            <tbody ws-hole="InvoiceBody" class="divide-y dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">\r
                                \r
                            </tbody>\r
                        </table>\r
                    </div>\r
                </section>\r
\r
                <section class="rounded-xl border border-red-200 p-5 dark:border-red-900/60">\r
                    <h2 class="font-semibold text-red-700 dark:text-red-400">Danger zone</h2>\r
                    <p class="mt-1 text-sm text-red-600 dark:text-red-300">Unassign removes GitHub access for that seat. You can reassign anytime.</p>\r
                </section>\r
            </div>\r
\r
            <div data-page="billing" ws-attr="BillingPageAttr" class="space-y-6 hidden">\r
                <div class="flex flex-wrap items-center justify-between gap-3">\r
                    <div>\r
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Billing information</h1>\r
                        <p class="text-sm text-gray-600 dark:text-gray-400">Update invoice recipient details, VAT number, and address used for future invoices.</p>\r
                    </div>\r
                    <div class="flex gap-2">\r
                        <button ws-onclick="BillingEditClick" ws-attr="BtnBillingEditAttr" class="rounded-lg h-10 px-4 border border-gray-300 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">Edit</button>\r
                        <button ws-onclick="BillingCancelClick" ws-attr="BtnBillingCancelAttr" class="hidden rounded-lg h-10 px-4 border border-gray-300 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">Cancel</button>\r
                        <button ws-onclick="BillingSaveClick" ws-attr="BtnBillingSaveAttr" class="hidden rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-4 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                            <span class="relative text-sm">Save</span>\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <section class="rounded-xl border border-gray-200 p-5 dark:border-gray-800">\r
                    <div ws-attr="BillingViewAttr" class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">\r
                        <div>\r
                            <div class="text-gray-600 dark:text-gray-400">Company / Full name</div>\r
                            <div ws-hole="BillingNameView" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                        <div>\r
                            <div class="text-gray-600 dark:text-gray-400">VAT / Tax ID</div>\r
                            <div ws-hole="BillingVatinView" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                        <div class="sm:col-span-2">\r
                            <div class="text-gray-600 dark:text-gray-400">Address line 1</div>\r
                            <div ws-hole="BillingLine1View" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                        <div>\r
                            <div class="text-gray-600 dark:text-gray-400">City</div>\r
                            <div ws-hole="BillingCityView" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                        <div>\r
                            <div class="text-gray-600 dark:text-gray-400">Postal code</div>\r
                            <div ws-hole="BillingPostalView" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                        <div>\r
                            <div class="text-gray-600 dark:text-gray-400">Country</div>\r
                            <div ws-hole="BillingCountryView" class="font-medium text-gray-900 dark:text-white">\uFFFD</div>\r
                        </div>\r
                    </div>\r
\r
                    <div ws-attr="BillingEditAttr" class="hidden mt-4">\r
                        <form class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
                            <div>\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Company / Full name</label>\r
                                <input ws-var="BillingNameVar" name="name" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            </div>\r
                            <div>\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">VAT / Tax ID</label>\r
                                <input ws-var="BillingVatinVar" name="vatin" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            </div>\r
                            <div class="sm:col-span-2">\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Address line 1</label>\r
                                <input ws-var="BillingLine1Var" name="line1" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            </div>\r
                            <div>\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">City</label>\r
                                <input ws-var="BillingCityVar" name="city" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            </div>\r
                            <div>\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Postal code</label>\r
                                <input ws-var="BillingPostalVar" name="postal_code" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                            </div>\r
                            <div>\r
                                <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Country</label>\r
                                <div class="relative">\r
                                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" fill="currentColor" class="absolute pointer-events-none inset-y-0 my-auto right-3 size-4 text-gray-500 dark:text-gray-400">\r
                                        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>\r
                                    </svg>\r
                                    <select ws-var="BillingCountryVar" name="country" class="w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
                                        <option value="" disabled="" selected="">Select your country</option>\r
                                        <div ws-replace="CountryOptions"></div>\r
                                    </select>\r
                                </div>\r
                            </div>\r
                        </form>\r
                    </div>\r
                </section>\r
            </div>\r
        </section>\r
    </div>`))}function _m(e){return e?et("managesubscription",C("contentwrapper"),()=>se(`<div>\r
        <div ws-attr="SkeletonAttr">\r
            <div ws-replace="Skeleton"></div>\r
        </div>\r
        <div ws-replace="Content"></div>\r
    </div>`),e):We("managesubscription",C("contentwrapper"),()=>se(`<div>\r
        <div ws-attr="SkeletonAttr">\r
            <div ws-replace="Skeleton"></div>\r
        </div>\r
        <div ws-replace="Content"></div>\r
    </div>`))}function Um(e){return e?et("managesubscription",null,()=>se(`<html lang="en">\r
<head>\r
</head>\r
<body>\r
\r
    \r
\r
    \r
\r
    \r
\r
    \r
\r
    \r
\r
    <div class="mx-auto max-w-6xl px-10 pt-28 pb-20" ws-onafterrender="OnAfterRender">\r
        <div ws-replace="MainContent"></div>\r
    </div>\r
\r
    <div ws-attr="ToastAttr" ws-hole="ToastText" class="fixed bottom-4 right-4 hidden rounded-lg px-4 py-2 text-sm bg-gray-900 text-white shadow-lg" aria-live="polite" role="status">Saved</div>\r
\r
    <div ws-attr="SpinnerAttr" class="hidden fixed inset-0 z-50 bg-white/50 dark:bg-black/40 backdrop-blur-sm">\r
        <div class="absolute inset-0 m-auto h-12 w-12 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 dark:border-gray-700 dark:border-t-white"></div>\r
    </div>\r
</body>\r
</html>`),e):We("managesubscription",null,()=>se(`<html lang="en">\r
<head>\r
</head>\r
<body>\r
\r
    \r
\r
    \r
\r
    \r
\r
    \r
\r
    \r
\r
    <div class="mx-auto max-w-6xl px-10 pt-28 pb-20" ws-onafterrender="OnAfterRender">\r
        <div ws-replace="MainContent"></div>\r
    </div>\r
\r
    <div ws-attr="ToastAttr" ws-hole="ToastText" class="fixed bottom-4 right-4 hidden rounded-lg px-4 py-2 text-sm bg-gray-900 text-white shadow-lg" aria-live="polite" role="status">Saved</div>\r
\r
    <div ws-attr="SpinnerAttr" class="hidden fixed inset-0 z-50 bg-white/50 dark:bg-black/40 backdrop-blur-sm">\r
        <div class="absolute inset-0 m-auto h-12 w-12 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 dark:border-gray-700 dark:border-t-white"></div>\r
    </div>\r
</body>\r
</html>`))}function Pm(e){return e?et("checkout",C("smoothtextloader"),()=>se(`<span class="relative inline-block align-bottom \${WrapperClasses}">\r
            <span ws-attr="SkeletonAttr" class="block w-full h-full transition-opacity duration-500 ease-out">\r
                <span class="block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full"></span>\r
            </span>\r
            <span ws-attr="ContentAttr" class="absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center">\r
                <span ws-replace="Content" class="w-full"></span>\r
            </span>\r
        </span>`),e):We("checkout",C("smoothtextloader"),()=>se(`<span class="relative inline-block align-bottom \${WrapperClasses}">\r
            <span ws-attr="SkeletonAttr" class="block w-full h-full transition-opacity duration-500 ease-out">\r
                <span class="block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full"></span>\r
            </span>\r
            <span ws-attr="ContentAttr" class="absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center">\r
                <span ws-replace="Content" class="w-full"></span>\r
            </span>\r
        </span>`))}function Hm(){return ys||(ys=Hr(void 0,"$",[null,[1,[["$0","Value",pe(),0]]]])())}function zm(e){return e?et("managesubscription",C("githubactive"),()=>se(`<div class="space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">\r
                    <div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub organization</h1></div>\r
                    <button ws-onclick="GoToGitHubOrg" class="rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">\r
                        Go to GitHub organization\r
                    </button>\r
                </div>`),e):We("managesubscription",C("githubactive"),()=>se(`<div class="space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">\r
                    <div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub organization</h1></div>\r
                    <button ws-onclick="GoToGitHubOrg" class="rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">\r
                        Go to GitHub organization\r
                    </button>\r
                </div>`))}function Jm(e){return e?et("managesubscription",C("githubpending"),()=>se(`<div class="space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">\r
                    <div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub organization</h1></div>\r
                    <div class="text-sm">Pending: \${GitHubOrgName}</div>\r
                </div>`),e):We("managesubscription",C("githubpending"),()=>se(`<div class="space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">\r
                    <div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub organization</h1></div>\r
                    <div class="text-sm">Pending: \${GitHubOrgName}</div>\r
                </div>`))}function Om(e){return e?et("managesubscription",C("githubpendinginput"),()=>se(`<div class="space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">\r
                    <div>\r
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub organization</h1>\r
                        <p class="text-sm text-gray-600 dark:text-gray-400">No GitHub support organization is created for you yet. Please choose a name below.</p>\r
                    </div>\r
                    <div>\r
                        <span class="text-sm">IntelliFactory-</span>\r
                        <input ws-var="GitHubOrgName" class="w-64 hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5" placeholder="github-orgname-suffix">\r
                    </div>\r
                    <div>\r
                        <span class="mt-1 text-sm text-red-600 dark:text-red-300 mr-2">You can't change the name after you submit.</span>\r
                        <button ws-onclick="SetGitHubOrgName" class="rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">\r
                            Set GitHub organization name\r
                        </button>\r
                    </div>\r
                </div>`),e):We("managesubscription",C("githubpendinginput"),()=>se(`<div class="space-y-3 dark:divide-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">\r
                    <div>\r
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub organization</h1>\r
                        <p class="text-sm text-gray-600 dark:text-gray-400">No GitHub support organization is created for you yet. Please choose a name below.</p>\r
                    </div>\r
                    <div>\r
                        <span class="text-sm">IntelliFactory-</span>\r
                        <input ws-var="GitHubOrgName" class="w-64 hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5" placeholder="github-orgname-suffix">\r
                    </div>\r
                    <div>\r
                        <span class="mt-1 text-sm text-red-600 dark:text-red-300 mr-2">You can't change the name after you submit.</span>\r
                        <button ws-onclick="SetGitHubOrgName" class="rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">\r
                            Set GitHub organization name\r
                        </button>\r
                    </div>\r
                </div>`))}function jm(){return Ss||(Ss=Hr(void 0,"$",[[0,[["$0","ResultValue",pe(),0]]],[1,[["$0","ErrorValue",pe(),0]]]])())}function Km(){return Qs||(Qs=Hr(void 0,"$",[null,[1,[["$0","Value",nw,0]]]])())}function Ym(){return ms||(ms=d0(void 0,[["planCode",pe(),0],["interval",pe(),0],["seats",pe(),0],["billingData",JA,0]])())}function Wm(){return ws||(ws=Hr(void 0,"$",[[0,[["$0","ResultValue",pe(),0]]],[1,[["$0","ErrorValue",pe(),0]]]])())}function Zm(){return ks||(ks=Qi(void 0,[["subscriptionId",pe(),0],["planName",pe(),0],["currentPeriodEnd",pe(),0],["cancelAtPeriodEnd",pe(),0],["seats",pe(),0],["githubAssignedNames",Ol(OA),0]])())}function Xm(e){return e?et("managesubscription",C("seatgrouprow"),()=>se(`<tr>\r
                                    <td colspan="5" class="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-100">\r
                                        <div class="flex items-center justify-between gap-4">\r
                                            <div class="text-xs sm:text-sm">Expires on <span ws-replace="Expiry"></span></div>\r
                                            <div class="flex items-center gap-2">\r
                                                <span class="text-xs text-gray-600 dark:text-gray-300">Renew automatically</span>\r
                                                <button ws-onclick="ToggleAutoRenew" class="\${ToggleClasses}"><span class="\${DotClasses}"></span></button>\r
                                            </div>\r
                                        </div>\r
                                    </td>\r
                                </tr>`),e):We("managesubscription",C("seatgrouprow"),()=>se(`<tr>\r
                                    <td colspan="5" class="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-100">\r
                                        <div class="flex items-center justify-between gap-4">\r
                                            <div class="text-xs sm:text-sm">Expires on <span ws-replace="Expiry"></span></div>\r
                                            <div class="flex items-center gap-2">\r
                                                <span class="text-xs text-gray-600 dark:text-gray-300">Renew automatically</span>\r
                                                <button ws-onclick="ToggleAutoRenew" class="\${ToggleClasses}"><span class="\${DotClasses}"></span></button>\r
                                            </div>\r
                                        </div>\r
                                    </td>\r
                                </tr>`))}function ew(e){return e?et("managesubscription",C("seatrow"),()=>se(`<tr>\r
                                    <td class="px-4 py-3" ws-hole="SeatLabel"></td>\r
\r
                                    <td class="px-4 py-3">\r
                                        <div ws-replace="UsernameWidget"></div>\r
                                    </td>\r
\r
                                    <td class="px-4 py-3 text-center"><span ws-hole="StatusBadge"></span></td>\r
\r
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-center" ws-hole="Expiry"></td>\r
\r
                                    <td class="px-4 py-3 text-right whitespace-nowrap">\r
                                        <button class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20 mr-2" ws-onclick="AssignSeat" ws-attr="AssignButtonAttr">Assign</button>\r
                                        <button class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20" ws-onclick="UnassignSeat" ws-attr="UnassignButtonAttr">Unassign</button>\r
                                    </td>\r
                                </tr>`),e):We("managesubscription",C("seatrow"),()=>se(`<tr>\r
                                    <td class="px-4 py-3" ws-hole="SeatLabel"></td>\r
\r
                                    <td class="px-4 py-3">\r
                                        <div ws-replace="UsernameWidget"></div>\r
                                    </td>\r
\r
                                    <td class="px-4 py-3 text-center"><span ws-hole="StatusBadge"></span></td>\r
\r
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-center" ws-hole="Expiry"></td>\r
\r
                                    <td class="px-4 py-3 text-right whitespace-nowrap">\r
                                        <button class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20 mr-2" ws-onclick="AssignSeat" ws-attr="AssignButtonAttr">Assign</button>\r
                                        <button class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20" ws-onclick="UnassignSeat" ws-attr="UnassignButtonAttr">Unassign</button>\r
                                    </td>\r
                                </tr>`))}function tw(e){return e?et("managesubscription",C("invoicerow"),()=>se(`<tr>\r
                                    <td class="px-4 py-3">\${InvoiceId}</td>\r
                                    <td class="px-4 py-3">\${Date}</td>\r
                                    <td class="px-4 py-3">\${Amount}</td>\r
                                    <td class="px-4 py-3 capitalize">\${Status}</td>\r
                                    <td class="px-4 py-3 text-right">\r
                                        <a class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20" href="\${Href}" target="_blank" rel="noopener">View</a>\r
                                    </td>\r
                                </tr>`),e):We("managesubscription",C("invoicerow"),()=>se(`<tr>\r
                                    <td class="px-4 py-3">\${InvoiceId}</td>\r
                                    <td class="px-4 py-3">\${Date}</td>\r
                                    <td class="px-4 py-3">\${Amount}</td>\r
                                    <td class="px-4 py-3 capitalize">\${Status}</td>\r
                                    <td class="px-4 py-3 text-right">\r
                                        <a class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20" href="\${Href}" target="_blank" rel="noopener">View</a>\r
                                    </td>\r
                                </tr>`))}function JA(){return bs||(bs=d0(void 0,[["email",pe(),0],["line1",pe(),0],["city",pe(),0],["postalCode",pe(),0],["country",pe(),0],["companyName",pe(),1],["taxId",pe(),1]])())}function qa(){return vs||(vs=Hr(void 0,"$",[[0,[["$0","ResultValue",pe(),0]]],[1,[["$0","ErrorValue",pe(),0]]]])())}function rw(){return Vs||(Vs=Qi(void 0,[["code",pe(),0],["name",pe(),0],["description",pe(),1],["isPerSeat",pe(),0],["maxSeats",pe(),1],["interval",pe(),0],["currency",pe(),0],["unitAmountCents",pe(),0]])())}function nw(){return Es||(Es=Qi(void 0,[["email",pe(),0],["line1",pe(),0],["city",pe(),0],["postalCode",pe(),0],["country",pe(),0],["companyName",pe(),1],["taxId",pe(),1]])())}function OA(){return xs||(xs=Hr(void 0,"$",[null,[1,[["$0","Value",pe(),0]]]])())}function aw(e){return e?et("managesubscription",C("smoothtextloader"),()=>se(`<span class="relative inline-block align-bottom \${WrapperClasses}">\r
        <span ws-attr="SkeletonAttr" class="block w-full h-full transition-opacity duration-500 ease-out">\r
            <span class="block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full"></span>\r
        </span>\r
        <span ws-attr="ContentAttr" class="absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center">\r
            <span ws-replace="Content" class="w-full"></span>\r
        </span>\r
    </span>`),e):We("managesubscription",C("smoothtextloader"),()=>se(`<span class="relative inline-block align-bottom \${WrapperClasses}">\r
        <span ws-attr="SkeletonAttr" class="block w-full h-full transition-opacity duration-500 ease-out">\r
            <span class="block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full"></span>\r
        </span>\r
        <span ws-attr="ContentAttr" class="absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center">\r
            <span ws-replace="Content" class="w-full"></span>\r
        </span>\r
    </span>`))}function ow(){return Bs||(Bs=Hr(void 0,"$",[null,[1,[["$0","Value",iw,0]]]])())}function iw(){return Is||(Is=Qi(void 0,[["name",pe(),1],["status",sw,0]])())}function sw(){return Cs||(Cs=Hr(e=>At(il,e),"$",[null,null])())}function lw(){let e=b1(),t=f1(),r=h1(),n=p1(),a=_.TextView(O1()),o=_.TextView(J1()),s=_.TextView(z1()),d=_.TextView(H1()),c=_.TextView(P1()),u=_.TextView(U1()),p=_.TextView(_1()),g=_.TextView($1()),w=_.TextView(R1()),x=_.TextView(G1()),k=_.TextView(q1()),m=_.TextView(T1()),f=new Ge("New_1"),v=(f.h.push(new Wt("onafterrender","",()=>{kt(S1(),null)})),f),y=(v.h.push(new W("proname",m)),v),h=(y.h.push(new W("freename",k)),y),V=(h.h.push(new W("propriceamount",x)),h),I=(V.h.push(new W("propricelabel",w)),V),B=(I.h.push(new W("freepriceamount",g)),I),Q=(B.h.push(new W("freepricelabel",p)),B),L=(Q.h.push(new W("prototallabel",u)),Q),F=(L.h.push(new W("prototalamount",c)),L),G=(F.h.push(new W("freetotallabel",d)),F),N=(G.h.push(new W("freetotalamount",s)),G),S=(N.h.push(new W("pronote",o)),N),U=(S.h.push(new W("freenote",a)),S),de=(U.h.push(new ie("billmonthattr",n)),U),O=(de.h.push(new ie("billyearattr",r)),de),te=(O.h.push(new ie("procheckoutattr",t)),O),j=(te.h.push(new ie("freecheckoutattr",e)),te),ee=(j.h.push(new Oe("seatcount",li())),j),T=(ee.h.push(fe(ee.k,"onbillmonth",()=>ee.i,H=>{m1(H)})),ee),$=(T.h.push(fe(T.k,"onbillyear",()=>T.i,H=>{w1(H)})),T),re=($.h.push(fe($.k,"onseatminus",()=>$.i,H=>{v1(H)})),$),ue=(re.h.push(fe(re.k,"onseatplus",()=>re.i,H=>{y1(H)})),re),he=(ue.h.push(new Oe("contactsubjectvar",R.Lens(qr(),H=>H.subject,(H,ke)=>tn(ke,H.message,H.email,H.name,H.country)))),ue),ae=(he.h.push(new Oe("contactmessagevar",R.Lens(qr(),H=>H.message,(H,ke)=>tn(H.subject,ke,H.email,H.name,H.country)))),he),xe=(ae.h.push(new Oe("contactemailvar",R.Lens(qr(),H=>H.email,(H,ke)=>tn(H.subject,H.message,ke,H.name,H.country)))),ae),Ie=(xe.h.push(new Oe("contactnamevar",R.Lens(qr(),H=>H.name,(H,ke)=>tn(H.subject,H.message,H.email,ke,H.country)))),xe),Be=(Ie.h.push(new Oe("contactcountryvar",R.Lens(qr(),H=>H.country,(H,ke)=>tn(H.subject,H.message,H.email,H.name,ke)))),Ie),nt=(Be.h.push(new ie("contactsendbuttonattr",u1())),Be),lt=(nt.h.push(new lr("contactsendbuttontext",g1())),nt),$e=(lt.h.push(fe(lt.k,"oncontactsendclick",()=>lt.i,H=>{x1(H)})),lt),dt=Pe($e.k,$e.h,[["seatcount",0,C("1")],["contactsubjectvar",0,C("WebSharper support")],["contactmessagevar",0,null],["contactemailvar",0,null],["contactnamevar",0,null],["contactcountryvar",0,C("United States")]]),ct=new Te(dt[1],Nm(dt[0]));return($e.i=ct,ct).Doc}function dw(){let e=_.TextView(m2()),t=Tr(Kt("w-14 h-6"),"justify-end",e),r=_.TextView(b2()),n=Tr(Kt("w-14 h-6"),"justify-end",r),a=_.TextView(f2()),o=Tr(Kt("w-14 h-6"),"justify-end",a),s=_.TextView(h2()),d=Tr(Kt("w-64 h-4"),"",s),c=_.TextView(p2()),u=Tr(Kt("w-12 h-5"),"",c),p=_.TextView(u2()),g=Tr(Kt("w-24 h-8"),"",p),w=_.TextView(g2()),x=Tr(Kt("w-64 h-6"),"",w),k=_.TextView(Ps().View),m=Tr(D(re=>re.indexOf("Manage")!=-1?"w-40 h-5 !align-middle":"w-12 h-5 !align-middle",Ps().View),"",k),f=o2(),v=_.EmbedView(Ft((re,ue)=>{if(re){let he=new Ge("New_1"),ae=Pe(he.k,he.h,[]),xe=new Te(ae[1],Lm(ae[0]));return(he.i=xe,xe).Doc}else if(ue){let he=_.TextView(gi().View),ae=a2(),xe=n2(),Ie=r2(),Be=t2(),nt=A2(),lt=new Ge("New_1"),$e=(lt.h.push(new Oe("email",cg())),lt),dt=($e.h.push(new Oe("street",dg())),$e),ct=(dt.h.push(new Oe("city",lg())),dt),Lt=(ct.h.push(new Oe("postal",sg())),ct),H=(Lt.h.push(new Oe("country",ig())),Lt),ke=(H.h.push(new W("countryoptions",_.Concat(nt))),H),Tt=(ke.h.push(new Ba("iscompany",$r())),ke),He=(Tt.h.push(new ie("companyblockattr",Be)),Tt),qt=(He.h.push(new Oe("companyname",og())),He),Gt=(qt.h.push(new ie("companynameattr",Ie)),qt),Rt=(Gt.h.push(new Oe("vatin",Sl())),Gt),Ae=(Rt.h.push(new ie("vatinattr",xe)),Rt),ze=(Ae.h.push(new W("formerrordoc",i2())),Ae),_e=(ze.h.push(new ie("continuebuttonattr",ae)),ze),st=(_e.h.push(new W("continuetext",he)),_e),Ee=(st.h.push(fe(st.k,"oncontinueclick",()=>st.i,()=>{s2()})),st),Fe=Pe(Ee.k,Ee.h,[["email",0,null],["street",0,null],["city",0,null],["postal",0,null],["country",0,null],["iscompany",2,null],["companyname",0,null],["vatin",0,null]]),Jt=new Te(Fe[1],qm(Fe[0]));return(Ee.i=Jt,Jt).Doc}else{let he=new Ge("New_1"),ae=(he.h.push(fe(he.k,"ongithublogin",()=>he.i,()=>{yl()})),he),xe=Pe(ae.k,ae.h,[]),Ie=new Te(xe[1],Tm(xe[0]));return(ae.i=Ie,Ie).Doc}},Gn().View,Ca())),y=new Ge("New_1"),h=(y.h.push(new Wt("onafterrender","",()=>{cw()})),y),V=(h.h.push(new ie("backlinkattr",e2())),h),I=(V.h.push(new W("rightsidecontent",v)),V),B=(I.h.push(new ie("seatselectorattr",f)),I),Q=(B.h.push(new Oe("seatstext",Ai())),B),L=(Q.h.push(fe(Q.k,"onseatminus",()=>Q.i,()=>{l2()})),Q),F=(L.h.push(fe(L.k,"onseatplus",()=>L.i,()=>{d2()})),L),G=(F.h.push(new W("backlinklabel",m)),F),N=(G.h.push(new W("planname",x)),G),S=(N.h.push(new W("planprice",g)),N),U=(S.h.push(new W("planinterval",u)),S),de=(U.h.push(new W("pricehint",d)),U),O=(de.h.push(new W("subtotal",o)),de),te=(O.h.push(new W("taxes",n)),O),j=(te.h.push(new W("total",t)),te),ee=Pe(j.k,j.h,[["seatstext",0,C("1")]]),T=new Te(ee[1],Gm(ee[0]));return(j.i=T,T).Doc}function cw(){To(),j1(),K1(),kt(z(()=>(Gn().Set(!0),J(wg([Y1(),W1()]),()=>(Gn().Set(!1),ne())))),null)}function Gn(){return Hg.IsLoading}function Tr(e,t,r){let n=Da([De("opacity-0",Gn().View),De("pointer-events-none",Gn().View),ZA(t)]),a=De("opacity-0",D(k=>!k,Gn().View)),o=D(k=>"transition-all duration-300 ease-in-out "+k,e),s=new Ge("New_1"),d=(s.h.push(new lr("wrapperclasses",o)),s),c=(d.h.push(new ie("skeletonattr",a)),d),u=(c.h.push(new ie("contentattr",be.Concat(n))),c),p=(u.h.push(new W("content",r)),u),g=Pe(p.k,p.h,[]),w=new Te(g[1],Pm(g[0]));return(p.i=w,w).Doc}function Aw(){let e=new URLSearchParams(globalThis.location.search),t=e.get("code");jA().Set(!Ve(t)),Bl().Set(fw(e));let r=e.get("title");Ve(r)||KA().Set(r),YA().Set(bw(e,t))}function gw(){return un.Title}function uw(){return un.Message}function pw(){let e=Bl().Get();jA().Get()?globalThis.location.href=TA(e):globalThis.location.href=e}function hw(){let e=Bl().Get();globalThis.location.href=e}function jA(){return un.isAuthErrorVar}function fw(e){let t=e.get("from"),r=e.get("page"),n=mw();return Ve(t)?Ve(r)?n!=null&&n.$==1?n.$0:"/":r:t}function Bl(){return un.previousVar}function KA(){return un.titleVar}function bw(e,t){let r=e.get("message");return Ve(r)?Ve(t)?"An unexpected error occurred. Please try again.":ww(t):r}function YA(){return un.msgVar}function mw(){try{let e=globalThis.document.referrer;if(Ve(e))return null;{let t=globalThis.location.origin;return Ko(e,t)?C(e.substring(t.length)):null}}catch{return null}}function ww(e){return e=="invalid_state"?"Sign-in failed, please try again.":e=="token"?"GitHub sign-in failed during token exchange. Please try again.":e=="token_missing"?"GitHub sign-in failed (no token).":e=="user"?"GitHub sign-in failed when fetching your user info.":e=="user_parse"?"GitHub sign-in failed (user data issue).":e=="db"?"Sign-in temporarily unavailable. Please try again shortly.":e=="service"?"Sign-in temporarily unavailable (service not configured).":"Unexpected error during sign-in. Please try again."}function vw(){return gr.BillToVat}function yw(){return gr.BillToAddr}function xw(){return gr.BillToName}function kw(){return gr.InvSub}function Vw(){return gr.InvAmount}function Cw(){return gr.InvStatus}function Iw(){return gr.InvDate}function Bw(){return gr.InvId}function Ew(){kt(z(()=>J(Qw(),e=>(Ir().Set(e),ne()))),null)}function Qw(){return z(()=>{let e=Dw();if(e!=null&&e.$==1){let t=e.$0;return J(Wg(),r=>{function n(a){return z(()=>{if(a>=Ce(r))return Z(null);{let o=le(r,a).id;return J(Jl(o),s=>{let d=vi(c=>c.id==t,s);if(d==null)return n(a+1);{let c=d.$0;return Z(C(c.subscription==null?Yg(c.id,c.date,c.amount,c.currency,c.status,C(o),c.billingAddress,c.company):c))}})}})}return n(0)})}else return Z(null)})}function Ir(){return gr.invoiceVar}function Sw(e,t){return String(e/100)+" "+(Ve(t)?"USD":t.toUpperCase())}function Dw(){let e=new URLSearchParams(globalThis.location.search).get("id");return e==null||e==""?null:C(e)}function Fw(){let e=new Ge("New_1"),t=Pe(e.k,e.h,[]),r=new Te(t[1],aA(t[0])),a=(e.i=r,r).Doc,o=_.EmbedView(Ft((Q,L)=>{if(Q){let F=new Ge("New_1"),G=Pe(F.k,F.h,[]),N=new Te(G[1],aA(G[0]));return(F.i=N,N).Doc}else if(L){let F=iv(),G=new Ge("New_1"),N=(G.h.push(fe(G.k,"gosubs",()=>G.i,()=>{Q2()})),G),S=(N.h.push(fe(N.k,"gobilling",()=>N.i,()=>{S2()})),N),U=(S.h.push(new ie("substabattr",E2())),S),de=(U.h.push(new ie("billingtabattr",B2())),U),O=(de.h.push(new W("githuborg",Av())),de),te=(O.h.push(fe(O.k,"opencustomerportal",()=>O.i,()=>{D2()})),O),j=(te.h.push(new ie("subspageattr",I2())),te),ee=(j.h.push(new ie("billingpageattr",C2())),j),T=(ee.h.push(new W("seatsbody",L2())),ee),$=(T.h.push(new W("invoicebody",lv())),T),re=($.h.push(new ie("billingviewattr",ov())),$),ue=(re.h.push(new ie("billingeditattr",av())),re),he=(ue.h.push(new ie("btnbillingeditattr",nv())),ue),ae=(he.h.push(new ie("btnbillingsaveattr",rv())),he),xe=(ae.h.push(new ie("btnbillingcancelattr",tv())),ae),Ie=(xe.h.push(new W("billingnameview",ev())),xe),Be=(Ie.h.push(new W("billingvatinview",X2())),Ie),nt=(Be.h.push(new W("billingline1view",Z2())),Be),lt=(nt.h.push(new W("billingcityview",W2())),nt),$e=(lt.h.push(new W("billingpostalview",Y2())),lt),dt=($e.h.push(new W("billingcountryview",K2())),$e),ct=(dt.h.push(new Oe("billingnamevar",j2())),dt),Lt=(ct.h.push(new Oe("billingvatinvar",O2())),ct),H=(Lt.h.push(new Oe("billingline1var",R.Lens(Ut(),we=>we.address.line1,(we,ft)=>dr(we.company,Gr(ft,we.address.city,we.address.postal_code,we.address.country))))),Lt),ke=(H.h.push(new Oe("billingcityvar",R.Lens(Ut(),we=>we.address.city,(we,ft)=>dr(we.company,Gr(we.address.line1,ft,we.address.postal_code,we.address.country))))),H),Tt=(ke.h.push(new Oe("billingpostalvar",R.Lens(Ut(),we=>we.address.postal_code,(we,ft)=>dr(we.company,Gr(we.address.line1,we.address.city,ft,we.address.country))))),ke),He=(Tt.h.push(new Oe("billingcountryvar",R.Lens(Ut(),we=>we.address.country,(we,ft)=>dr(we.company,Gr(we.address.line1,we.address.city,we.address.postal_code,ft))))),Tt),qt=(He.h.push(new W("countryoptions",_.Concat(F))),He),Gt=(qt.h.push(new ie("addseatsbuttonattr",N2())),qt),Rt=(Gt.h.push(fe(Gt.k,"addseatsclick",()=>Gt.i,()=>{globalThis.location.href="./checkout?plan=pro&interval=year&seats=1"})),Gt),Ae=(Rt.h.push(fe(Rt.k,"refreshclick",()=>Rt.i,()=>{uv()})),Rt),ze=(Ae.h.push(fe(Ae.k,"billingeditclick",()=>Ae.i,()=>{pv()})),Ae),_e=(ze.h.push(fe(ze.k,"billingsaveclick",()=>ze.i,()=>{hv()})),ze),st=(_e.h.push(fe(_e.k,"billingcancelclick",()=>_e.i,()=>{fv()})),_e),Ee=Pe(st.k,st.h,[["billingnamevar",0,null],["billingvatinvar",0,null],["billingline1var",0,null],["billingcityvar",0,null],["billingpostalvar",0,null],["billingcountryvar",0,C("")]]),Fe=new Te(Ee[1],$m(Ee[0]));return(st.i=Fe,Fe).Doc}else{let F=new Ge("New_1"),G=(F.h.push(fe(F.k,"loginclick",()=>F.i,()=>{M2()})),F),N=Pe(G.k,G.h,[]),S=new Te(N[1],Rm(N[0]));return(G.i=S,S).Doc}},Ro().View,Ca())),s=De("hidden",D(Q=>!Q,Ro().View)),d=new Ge("New_1"),c=(d.h.push(new W("skeleton",a)),d),u=(c.h.push(new ie("skeletonattr",s)),c),p=(u.h.push(new W("content",o)),u),g=Pe(p.k,p.h,[]),w=new Te(g[1],_m(g[0])),k=(p.i=w,w).Doc,m=new Ge("New_1"),f=(m.h.push(new Wt("onafterrender","",()=>{Mw()})),m),v=(f.h.push(new W("maincontent",k)),f),y=(v.h.push(new ie("toastattr",V2())),v),h=(y.h.push(new W("toasttext",k2())),y),V=Pe(h.k,h.h,[]),I=new Te(V[1],Um(V[0]));return(h.i=I,I).Doc}function Mw(){bv().then(()=>Nw()).catch(()=>Ro().Set(!1))}function Ro(){return Xg.isLoading}function Nw(){kt(z(()=>Dr(z(()=>J(wg([z(()=>J(Lw(),()=>(Tw(),ne()))),qw(),Gw(),Rw(),$w(),_w()]),()=>Z(null))),()=>{Ro().Set(!1)})),null)}function Lw(){return z(()=>J(Wg(),e=>(Na().Set(e),Fl(),ne())))}function Tw(){let e=Na().Get();if(Ce(e)===0)ln().Set("");else{let t=ln().Get();(bi(t)||!Pn(r=>r.id==t,e))&&ln().Set(le(e,0).id)}}function qw(){return z(()=>bi(ln().Get())?(La().Set([]),Z(null)):(Fl(),ne()))}function Gw(){return z(()=>{let e=ln().Get();return bi(e)?(ti().Set([]),Js([]),ne()):J(Jl(e),t=>(ti().Set(t),Js(t),ne()))})}function Rw(){return z(()=>J(Ix(),e=>(Ci().Set(C(e)),Nl(C(e)),ui(Ii),ne())))}function $w(){return z(()=>J(Bx(),e=>(t0().Set(e),ne())))}function _w(){return z(()=>J(Ex(),e=>(Ws().Set(e),ne())))}function Uw(){return Kn.DetailsDoc}function Pw(){return Kn.DetailsAttr}function Hw(){return Kn.MessageText}function zw(){kt(z(()=>{let e=new URLSearchParams(globalThis.location.search).get("session_id");return e==null||e==""?(Jw("Missing session id."),ne()):($o().Set("Confirming your payment\u2026"),J(Ow(e),t=>{if(t==null)return ne();{let r=t.$0;return _o().Set(C(r)),$o().Set(r.paid?"Your payment has been received.":"Payment recorded; awaiting confirmation."),ne()}}))}),null)}function Jw(e){$o().Set(e),_o().Set(null)}function $o(){return Kn.messageVar}function Ow(e){return z(()=>Ar(z(()=>J(Iv(e),t=>t.$==0?Z(C(t.$0)):Z(null))),()=>Z(null)))}function _o(){return Kn.confirmationVar}function fa(e,t){let r=Ve(t)?"-":t;return _.Element("div",[],[_.TextNode(e+": "),_.Element("b",[],[_.TextNode(r)])])}function jw(e){return tr(e/100)}function Kw(e){let t={},r=Re(e);try{for(;r.MoveNext();){let n=r.Current;t[n[0]]=n[1]}}finally{let n=r;typeof n=="object"&&Nt(n)&&r.Dispose()}return t}function Yw(e){let t=[],r;for(var n in e)t.push(e[n]);return t}var yt=class extends rt{ApplyVarHole(t){console.warn("Not a var hole: ",this.Name)}ForTextView(){return console.warn("Content hole filled with attribute data",this.Name),null}AddAttribute(t,r){console.warn("Var hole filled with non-Var data",this.Name)}get AsChoiceView(){return console.warn("Attribute value hole filled with non-text data",this.Name),Xl("")}},ie=class e extends yt{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}get Value(){return this.fillWith}constructor(t,r){super(),this.name=t,this.fillWith=r}},lr=class e extends yt{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ForTextView(){return C(this.fillWith)}get AsChoiceView(){return fn(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Sr=me(e=>class{static{Sr=e(this)}static AccountHeaderText;static displayNameV;static hasAvatarV;static avatarSrcV;static isLoading;static isAuthedV;static userV;static isOpen;static{this.isOpen=R.Create_1(!1),this.userV=bm(),this.isAuthedV=Ca(),this.isLoading=R.Create_1(!0),this.avatarSrcV=D(r=>r!=null&&r.$==1?Ve(r.$0.avatarUrl)?"":r.$0.avatarUrl:"",eA()),this.hasAvatarV=D(r=>r!="",MA()),this.displayNameV=D(r=>r==null||Ve(r.$0.login)?"Account":r.$0.login,eA()),this.AccountHeaderText=pm()}});function Ww(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]","g"),e=>{let t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}function WA(e){try{return ba(e,"D")}catch{try{return ba(e,"B")}catch{try{return ba(e,"P")}catch{try{return ba(e,"N")}catch{return ba(e,"X")}}}}}function ba(e,t){let r=a=>{for(let o=0,s=35;o<=s;o++)if(o===8||o===13||o===18||o===23)a[o]!=="-"&&$t();else{let d=a[o];"0"<=d&&d<="9"||"a"<=d&&d<="f"||$t()}return a},n=t.toUpperCase();if(n=="N"){let a=ut(e).toLowerCase();a.length!==32&&$t();for(let o=0,s=31;o<=s;o++){let d=a[o];"0"<=d&&d<="9"||"a"<=d&&d<="f"||$t()}return mt(a,0,8)+"-"+mt(a,8,4)+"-"+mt(a,12,4)+"-"+mt(a,16,4)+"-"+a.substring(20)}else if(n=="D"){let a=ut(e).toLowerCase();return a.length!==36&&$t(),r(a)}else if(n=="B"){let a=ut(e).toLowerCase();return(a.length!==38||a[0]!=="{"||a[17]!=="}")&&$t(),r(mt(a,1,36))}else if(n=="P"){let a=ut(e).toLowerCase();return(a.length!==38||a[0]!=="("||a[17]!==")")&&$t(),r(mt(a,1,36))}else if(n=="X"){let a=ut(e).toLowerCase();a.length!==68&&$t();for(let o=0,s=67;o<=s;o++)switch(o){case 26:case 0:a[o]!=="{"&&$t();break;case 62:case 57:case 52:case 47:case 42:case 37:case 32:case 27:case 19:case 12:case 1:a[o]!=="0"&&$t();break;case 63:case 58:case 53:case 48:case 43:case 38:case 33:case 28:case 20:case 13:case 2:a[o]!=="x"&&$t();break;case 61:case 56:case 51:case 46:case 41:case 36:case 31:case 25:case 18:case 11:a[o]!==","&&$t();break;case 67:case 66:a[o]!=="{"&&$t();break;default:let d=a[o];"0"<=d&&d<="9"||"a"<=d&&d<="f"||$t();break}return mt(a,3,8)+"-"+mt(a,14,4)+"-"+mt(a,21,4)+"-"+mt(a,29,2)+mt(a,34,2)+"-"+mt(a,39,2)+mt(a,44,2)+mt(a,49,2)+mt(a,54,2)+mt(a,59,2)+mt(a,64,2)}else return Zw()}function $t(){throw new oi("New_1","Guid should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).")}function Zw(){throw new oi("New_1",'Format String can be only "D", "d", "N", "n", "P", "p", "B", "b", "X" or "x".')}var Uo=class e extends yt{name;key;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.key,this.fillWith)}get Value(){return this.fillWith}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}},Po=class extends rt{};function De(e,t){return Ga(t,r=>n=>n?kg(r,e):Vg(r,e))}function gt(e,t){return Ga(t,r=>n=>r.setAttribute(e,n))}function _n(e,t){return Ga(t,r=>n=>n?r.setAttribute(e,""):r.removeAttribute(e))}function ZA(e){return Xw(e,!0)}function Xw(e,t){return be.A3(r=>{t?kg(r,e):Vg(r,e)})}function XA(e,t){return be.A3(r=>{r.addEventListener(e,n=>t(r)(n),!1)})}function e1(e,t){return Ga(t,r=>n=>{r[e]=n})}function oA(e){return be.A4(e)}function eg(e){return On(p0(),e)}function On(e,t){let r=e(t);return yg(be.A3(r[0]),t1(r[1],r[2]))}function t1(e,t){return Ga(t,e)}function r1(e){return On(h0(),e)}function n1(e){return On(f0(),e)}function a1(e){return On(b0(),e)}function o1(e){return On(m0(),e)}function i1(e){return On(w0(),e)}function D(e,t){return jn(()=>Yn(e,t()))}function Kt(e){let t={s:Pr(e)};return()=>t}function Ft(e,t,r){return jn(()=>fi(e,t(),r()))}function jn(e){let t={c:null,o:e};return()=>{let r=t.c;if(r===null){r=t.o(),t.c=r;let n=r.s;return n!=null&&n.$==0?t.o=null:Bg(r,()=>{t.c=null}),r}else return r}}function ya(e,t,r,n){return jn(()=>ty(e,t(),r(),n()))}function s1(e,t){return l1(D(e,t))}function Rn(e,t){return jn(()=>ly(e(),t()))}function l1(e){return jn(()=>dy(e()))}function Ho(e,t){function r(){cy(t(),e,()=>{Qr().Fork(r)})}Qr().Fork(r)}function d1(e,t,r){let n=[new vt("New_5")];return D(a=>{let o=n[0],s=new vt("New_5"),d=py(c=>{let u,p=e(c);if(o.ContainsKey(p)){let g=o.Item(p);u=(R.Set(g.r,c),g)}else u=A1(g=>t(p,g),c);return s.set_Item(p,u),u.e},Pt(a));return n[0]=s,d},r)}function c1(e){return jn(()=>Ay(Fr(t=>t(),e)))}function A1(e,t){let r=R.Create_1(t),n=r.View;return{e:e(n),r,w:n}}var be=class e{static Concat(t){let r=Ra(t);return $a(hi(),(n,a)=>yg(n,a),r)}static A1(t){return At(e,{$:1,$0:t})}static A2(t,r){return At(e,{$:2,$0:t,$1:r})}static Create(t,r){return e.A3(n=>{n.setAttribute(t,r)})}static A3(t){return At(e,{$:3,$0:t})}static HandlerImpl(t,r){return e.A3(n=>{n.addEventListener(t,a=>r(n)(a),!1)})}static A4(t){return At(e,{$:4,$0:t})}$;$0;$1},Wt=class e extends yt{name;key;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.key,this.fillWith)}get Value(){return this.fillWith}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}};function El(e,t){let r;return t!=null&&t.$==1&&e(t.$0)&&(r=t.$0,!0)?t:null}function C(e){return{$:1,$0:e}}function g1(){return Pl.ContactSendButtonText}function u1(){return Pl.ContactSendButtonAttr}function p1(){let e=D(t=>t.$==1?"false":"true",Bt().View);return be.Concat([gt("data-active",e),gt("aria-pressed",e)])}function h1(){let e=D(t=>t.$==1?"true":"false",Bt().View);return be.Concat([gt("data-active",e),gt("aria-pressed",e)])}function f1(){return gt("href",Ft((e,t)=>"./checkout?plan=pro&interval="+String(di(e))+"&seats="+String(Ur(t)),Bt().View,tg()))}function b1(){return gt("href",D(e=>"./checkout?plan=freelancer&interval="+di(e)+"&seats=1",Bt().View))}function m1(){Bt().Set(Ug)}function w1(){Bt().Set(yi)}function v1(){ci(-1,li())}function y1(){ci(1,li())}function x1(e){e.Event.preventDefault();let t=qr().Get();rg(t)?kt(z(()=>(zo().Set(!0),Dr(z(()=>J(F1(t),r=>r?(alert("Message sent successfully!"),k1(),ne()):(alert("Failed to send message. Please try again later."),ne()))),()=>{zo().Set(!1)}))),null):alert("Please fill in all required fields.")}function k1(){qr().Set(tn("WebSharper support","","","","United States"))}var R=me(e=>class extends rt{static{R=e(this)}static Lens(r,n,a){let o=ox(),s=D(n,r.View);return new class extends Po{constructor(){super()}Get(){return n(r.Get())}Set(d){return r.Update(c=>a(c,d))}SetFinal(d){return this.Set(d)}Update(d){return r.Update(c=>a(c,d(n(c))))}UpdateMaybe(d){return r.UpdateMaybe(c=>{let u=d(n(c));return u==null?null:C(a(c,u.$0))})}get View(){return s}get Id(){return o}}}static Create_1(r){return new Zs(!1,{s:Ei(r,[])},r)}static Set(r,n){r.Set(n)}});function qr(){return ur.ContactFormVar}function li(){return ur.SeatCountText}function Bt(){return ur.intervalVar}function tg(){return ur.SeatCount}function di(e){return e.$==1?"year":"month"}function Ur(e){let n=cn(999,e)===-1?999:e;return cn(1,n)===1?1:n}function ci(e,t){let r=t.Get(),n=r==null?"":ut(r),o=(c=>{let u,p=(u=0,[Ha(c,{get:()=>u,set:g=>{u=g}}),u]);return p[0]?p[1]:1})(n)+e,s=Ur(o),d=String(s);t.Set(d)}function rg(e){return!Ve(e.message)&&!Ve(e.email)&&!Ve(e.name)&&B1(e.email)}function zo(){return ur.IsSendingVar}function V1(){return ur.CanSendView}function Jo(){return ur.fallbackPro}function Us(){return ur.fallbackFreelancer}function ir(){return ur.catalogVar}function iA(e){if(e==null)return null;{let t=String(e);return Ql(t)?C(t):null}}function sA(e,t){let r=El(Ql,t.Name);return r==null?e:r.$0}function Fo(e,t,r){let n=ng(t,r),a=n==null?null:C(n.$0.Amount),o=E1(e,r);return a==null?o:a.$0}function C1(e){return e.$==1?"/ seat / year":"/ seat / month"}function I1(e){return e.$==1?"/ year":"/ month"}function lA(e){return e.$==1?"Total (yearly)":"Total (monthly)"}function dA(e,t){let r=El(Ql,t.Description);return r==null?e:r.$0}function cA(e,t,r){let n=Q1(t,e),a=ng(n,r),o=a==null?n.Month:(a.$0,a),s=o==null?n.Year:(o.$0,o),d=s==null?null:C(s.$0.Currency.toUpperCase());return d==null?"USD":d.$0}function B1(e){if(e==null)return!1;{let t=ut(e);return t.indexOf("@")!=-1&&t.indexOf(".")!=-1}}function Ql(e){return!Ve(e)}function ng(e,t){return t.$==1?e.Year:e.Month}function E1(e,t){return t.$==1?e.Year.$0.Amount:e.Month.$0.Amount}function Q1(e,t){let r=t.toLowerCase();return r=="pro"?e.Pro:r=="freelancer"?e.Freelancer:Jo()}function tn(e,t,r,n,a){return{subject:e,message:t,email:r,name:n,country:a}}function S1(){return z(()=>J(ag(),e=>(e==null||D1(e.$0),ne())))}function ag(){return z(()=>{let e=M1();return e==null?J(N1(),t=>{let r;return t!=null&&t.$==1&&Ce(t.$0)>0&&(r=t.$0,!0)?(L1(r),Z(C(r))):Z(null)}):Z(C(e.$0))})}function D1(e){ir().Set($y((t,r)=>{let n=String(r.code).toLowerCase(),a=String(r.interval).toLowerCase(),o=va(r.unitAmountCents/100,(Ve(r.currency)?"usd":r.currency).toUpperCase()),s=iA(r.name),d=r.description,c=d==null?null:iA(d.$0);return n=="pro"?el(AA(t.Pro,a,o,s,c),t.Freelancer):n=="freelancer"?el(t.Pro,AA(t.Freelancer,a,o,s,c)):t},ir().Get(),e))}function F1(e){return z(()=>{let t=new FormData;return t.append("subject",e.subject),t.append("message",e.message),t.append("email",e.email),t.append("name",e.name),t.append("country",e.country),Ar(z(()=>{let r;return J(Rl(globalThis.fetch("https://api.intellifactory.com/api/contact",(r={},r.method="POST",r.body=t,r))),n=>Z(n.ok))}),()=>Z(!1))})}function M1(){try{let e=globalThis.sessionStorage.getItem("planprices");return e==null||Ve(e)?null:C(JSON.parse(e))}catch{return null}}function N1(){return z(()=>Ar(z(()=>J(Sv(),e=>Z(C(e)))),()=>Z(null)))}function L1(e){try{let t=JSON.stringify(e);globalThis.sessionStorage.setItem("planprices",t)}catch{}}function AA(e,t,r,n,a){let o=xa(n==null?e.Name:C(n.$0),a==null?e.Description:C(a.$0),e.Month,e.Year);return t=="month"?xa(o.Name,o.Description,C(r),o.Year):t=="year"?xa(o.Name,o.Description,o.Month,C(r)):o}function T1(){return zt.ProName}function q1(){return zt.FreeName}function G1(){return zt.ProPriceAmount}function R1(){return zt.ProPriceLabel}function $1(){return zt.FreePriceAmount}function _1(){return zt.FreePriceLabel}function U1(){return zt.ProTotalLabel}function P1(){return zt.ProTotalAmount}function H1(){return zt.FreeTotalLabel}function z1(){return zt.FreeTotalAmount}function J1(){return zt.ProNote}function O1(){return zt.FreeNote}function Ai(){return pt.SeatsTextVar}function Sl(){return pt.VatinVar}function og(){return pt.CompanyNameVar}function $r(){return pt.IsCompanyVar}function ig(){return pt.CountryVar}function sg(){return pt.PostalVar}function lg(){return pt.CityVar}function dg(){return pt.StreetVar}function cg(){return pt.EmailVar}function gi(){return pt.ContinueText}function Ps(){return pt.BackLinkLabel}function To(){Dl().Set(!1),gi().Set("Continue to payment")}function j1(){let e,t,r=globalThis.document.referrer;e="/support#plans",t="Plans",Ve(r)||(fA(r,"/account")?(e="/account",t="My account"):fA(r,"/support")&&(e="/support#plans",t="Plans")),Ag().Set(e),Ps().Set(t)}function K1(){let e=X1(),t=It(),r=It().Get();t.Set(_t(e.plan,e.interval,String(e.seats),r.email,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin))}function Y1(){return z(()=>J(z(()=>Ar(z(()=>vg()),()=>Z(null))),e=>{if(e!=null&&e.$==1){let t=e.$0,r=It(),n=It().Get(),a=t.companyName,o=a==null?"":a.$0,s=t.taxId,d=s==null?"":s.$0,c=_t(n.plan,n.interval,n.seatsText,t.email,t.line1,t.city,t.postalCode,t.country,t.companyName!=null,o,d);return r.Set(c),ne()}else return ne()}))}function W1(){return z(()=>J(ag(),e=>{if(e==null)return ne();{let t=e.$0;return gg().Set(t),ne()}}))}function Dl(){return pt.ContinueDisabled}function Z1(){let e=It().Get(),t=Ur(ug(e.seatsText));return Yx(e.plan.toLowerCase()=="freelancer"?"freelancer":"pro",di(e.interval),e.plan.toLowerCase()=="freelancer"?1:t,i0(ut(e.email),ut(e.street),ut(e.city),ut(e.postal),e.country,e.isCompany?C(ut(e.companyName)):null,e.isCompany?C(ut(e.vatin)):null))}function Hs(){return pt.SelectedPlanVar}function It(){return pt.CheckoutFormVar}function Ag(){return pt.backLinkHref}function X1(){let e,t=new URLSearchParams(globalThis.location.search),r=t.get("plan"),n=r!=null&&r.toLowerCase()=="freelancer"?"freelancer":"pro",a=t.get("interval"),o=a!=null&&a.toLowerCase()=="month"?Ug:yi,s=(e=0,[Ha(t.get("seats"),{get:()=>e,set:c=>{e=c}}),e]),d=s[0]?Ur(s[1]):1;return Ux(n,o,d)}function gg(){return pt.plansVar}function ug(e){let t,r=e==null?"":ut(e);if(r=="")return 1;{let n=(t=0,[Ha(r,{get:()=>t,set:a=>{t=a}}),t]);return n[0]?Ur(n[1]):1}}function Mo(){return pt.SelectedIntervalVar}function e2(){return Pg.BackLinkAttr}function t2(){return De("hidden",D(e=>!e,$r().View))}function r2(){return be.Concat([_n("required",$r().View),_n("disabled",D(e=>!e,$r().View))])}function n2(){return be.Concat([_n("required",$r().View),_n("disabled",D(e=>!e,$r().View))])}function a2(){return be.Concat([_n("disabled",Dl().View)])}function o2(){return gt("class",D(e=>e.toLowerCase()!="freelancer"?"transition-all duration-500 ease-in-out overflow-hidden mt-6 max-h-[300px] opacity-100":"transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0",Hs().View))}function i2(){return Hl.FormErrorDoc}function s2(){let e=c2();if(e==null)zs().Set(null),kt(z(()=>Ar(z(()=>(Dl().Set(!0),gi().Set("Processing\u2026"),J(ix(Z1()),t=>{let r;return t!=null&&t.$==1&&!Ve(t.$0)&&(r=t.$0,!0)?(globalThis.location.href=r,To(),ne()):(To(),ne())}))),()=>(To(),ne()))),null);else{let t=e.$0;zs().Set(C(t))}}function l2(){ci(-1,Ai())}function d2(){ci(1,Ai())}function c2(){let e=cg().Get(),t=dg().Get(),r=lg().Get(),n=sg().Get(),a=$r().Get(),o=og().Get(),s=Sl().Get();return Fn(e)?C("Please enter your email."):Fn(t)?C("Please enter your street address."):Fn(r)?C("Please enter your city."):Fn(n)?C("Please enter your postal code."):a&&Fn(o)?C("Please enter the company name."):a&&Fn(s)?C("Please enter the VAT number."):null}function zs(){return Hl.FormError}function Fn(e){return Ve(e??"")}function A2(){return St.CountryOptionsDoc}function g2(){return St.PlanName}function u2(){return St.PlanPrice}function p2(){return St.PlanInterval}function h2(){return St.PriceHint}function f2(){return St.Subtotal}function b2(){return St.Taxes}function m2(){return St.Total}function ma(){return St.CurrentPlan}function w2(){return St.Seats}function v2(){return St.IsPerSeat}function Ds(){return St.SubtotalRaw}function y2(){return St.VatPercentage}function gA(){return St.TaxesRaw}function x2(){return St.TotalRaw}var W=class e extends yt{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}get Value(){return this.fillWith}constructor(t,r){super(),this.name=t,this.fillWith=r}},un=me(e=>class{static{un=e(this)}static Message;static Title;static isAuthErrorVar;static previousVar;static msgVar;static titleVar;static{this.titleVar=R.Create_1("Something went wrong"),this.msgVar=R.Create_1("An unexpected error occurred. Please try again."),this.previousVar=R.Create_1("/"),this.isAuthErrorVar=R.Create_1(!1),this.Title=KA().View,this.Message=YA().View}}),gr=me(e=>class{static{gr=e(this)}static BillToAddr;static BillToVat;static BillToName;static InvSub;static InvAmount;static InvStatus;static InvDate;static InvId;static invoiceVar;static{this.invoiceVar=R.Create_1(null),this.InvId=_.TextView(D(r=>r==null?"-":r.$0.id,Ir().View)),this.InvDate=_.TextView(D(r=>r==null?"-":r.$0.date,Ir().View)),this.InvStatus=_.TextView(D(r=>r==null?"-":r.$0.status,Ir().View)),this.InvAmount=_.TextView(D(r=>{if(r==null)return"-";{let n=r.$0;return Sw(n.amount,n.currency)}},Ir().View)),this.InvSub=_.TextView(D(r=>{if(r==null)return"-";{let n=El(a=>!Ve(a),r.$0.subscription);return n==null?"-":n.$0}},Ir().View)),this.BillToName=_.TextView(D(r=>{if(r==null)return"-";{let n=r.$0.company;return n!=null&&n.$==1?Ve(n.$0.name)?"-":n.$0.name:"-"}},Ir().View)),this.BillToVat=_.TextView(D(r=>{if(r==null)return"";{let n=r.$0.company;return n!=null&&n.$==1?Ve(n.$0.vatin)?"":"VAT: "+n.$0.vatin:""}},Ir().View)),this.BillToAddr=_.TextView(D(r=>{if(r==null)return"-";{let n=r.$0.billingAddress;if(n==null)return"-";{let a=n.$0;return An(", ",sx(o=>!Ve(o),Da([a.line1,a.postal_code,a.city,a.country])))}}},Ir().View))}});function k2(){return pr.ToastText}function V2(){return pr.ToastAttr}function C2(){return pr.BillingPageAttr}function I2(){return pr.SubsPageAttr}function B2(){return pr.BillingTabAttr}function E2(){return pr.SubsTabAttr}function Q2(){Tn().Set(e0)}function S2(){Tn().Set(Lx)}function D2(){let e=t0().Get();e==null?Er("Customer portal is not available yet."):globalThis.open(e.$0,"_blank")}function Tn(){return pr.ActivePage}function Er(e){let t=Ve(e)?"Saved":e;Oo().Set(C(t)),setTimeout(()=>{Oo().Set(null)},1600)}function Un(e){F2().Set(e)}function Oo(){return pr.ToastMessage}function F2(){return pr.IsLoading}function M2(){yl()}function N2(){return xi.AddSeatsButtonAttr}function L2(){return xi.SeatsBody}function Fl(){kt(Ml(),null)}function T2(e,t,r){let n=R.Create_1(!1),a="relative inline-flex h-5 w-9 items-center rounded-full border text-xs transition-colors ",o="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ",s=_.TextNode(t),d=qo("w-24 h-5",n.View,s),c=new Ge("New_1"),u=(c.h.push(new W("expiry",d)),c),p=(u.h.push(new _r("toggleclasses",r?a+"bg-emerald-500 border-emerald-500":a+"bg-gray-300 border-gray-400 dark:bg-gray-700 dark:border-gray-600")),u),g=(p.h.push(new _r("dotclasses",r?o+"translate-x-4":o+"translate-x-0")),p),w=(g.h.push(fe(g.k,"toggleautorenew",()=>g.i,()=>{R2(e,t,r,n)})),g),x=Pe(w.k,w.h,[]),k=new Te(x[1],Xm(x[0]));return(w.i=k,k).Doc}function q2(e,t){let r=R.Create_1(!1),n=R.Create_1(e.username),a=P2(e,t,r.View),o=U2(e,t,r.View),s=_.TextNode(e.expiry),d=qo("w-24 h-5",r.View,s),c=_2(e.status),u=qo("w-16 h-6",r.View,c),p=_.Input([be.Create("class","w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm"),be.Create("placeholder","github-username"),$2(e,t)],n),g=qo("w-full h-8",r.View,p),w=new Ge("New_1"),x=(w.h.push(new _r("seatlabel","#"+String(e.seatNo))),w),k=(x.h.push(new W("usernamewidget",g)),x),m=(k.h.push(new W("statusbadge",u)),k),f=(m.h.push(new W("expiry",d)),m),v=(f.h.push(new ie("assignbuttonattr",o)),f),y=(v.h.push(new ie("unassignbuttonattr",a)),v),h=(y.h.push(fe(y.k,"assignseat",()=>y.i,()=>{t||H2(e.subscriptionId,e.seatNo,ut(n.Get()).toLowerCase(),r)})),y),V=(h.h.push(fe(h.k,"unassignseat",()=>h.i,()=>{z2(e.subscriptionId,e.seatNo,r)})),h),I=Pe(V.k,V.h,[]),B=new Te(I[1],ew(I[0]));return(V.i=B,B).Doc}function G2(){return xi.seatGroupsDoc}function Ml(){return z(()=>J(Qx(),e=>(La().Set(e),ne())))}function qo(e,t,r){let n=Da([De("opacity-0",t),De("pointer-events-none",t)]),a=Da([De("opacity-0",D(x=>!x,t)),ZA("relative z-10 pointer-events-none")]),o=new Ge("New_1"),s=(o.h.push(new _r("wrapperclasses",e)),o),d=(s.h.push(new ie("skeletonattr",be.Concat(a))),s),c=(d.h.push(new ie("contentattr",be.Concat(n))),d),u=(c.h.push(new W("content",r)),c),p=Pe(u.k,u.h,[]),g=new Te(p[1],aw(p[0]));return(u.i=g,g).Doc}function R2(e,t,r,n){kt(z(()=>(n.Set(!0),Dr(z(()=>{let a=!r;return La().Set(Ht(o=>o.subscriptionId==e&&o.expiry==t?l0(o.seatNo,o.username,o.status,o.expiry,a,o.subscriptionId):o,La().Get())),J(Sx(e,r),o=>(o&&Er("Updated"),ne()))}),()=>{n.Set(!1)}))),null)}function $2(e,t){return t||zn.FromString(e.status).$===0?be.Create("readonly",""):hi()}function _2(e){let t="inline-flex items-center rounded-full border px-2 py-0.5 text-xs ",r=zn.FromString(e);return _.Element("span",[be.Create("class",r.$==1?t+"border-gray-300 text-gray-600 dark:border-white/10 dark:text-gray-300":t+"border-emerald-300 text-emerald-700 dark:border-emerald-700/40 dark:text-emerald-300")],[_.TextNode(r.AsString)])}function U2(e,t,r){return t||zn.FromString(e.status).$===0?be.Create("style","display: none"):De("disabled",r)}function P2(e,t,r){return zn.FromString(e.status).$!==0||t?be.Create("style","display: none"):be.Concat([e1("disabled",r),De("opacity-50 cursor-not-allowed",r)])}function H2(e,t,r,n){Ve(r)||kt(z(()=>(n.Set(!0),Dr(z(()=>J(J2(r),a=>a?J(Dx(e,t,r),o=>o?J(Ml(),()=>(Er("Updated"),ne())):ne()):(Er("GitHub user '"+r+"' not found"),ne()))),()=>{n.Set(!1)}))),null)}function z2(e,t,r){kt(z(()=>(r.Set(!0),Dr(z(()=>J(Fx(e,t),n=>n?J(Ml(),()=>(Er("Updated"),ne())):ne())),()=>{r.Set(!1)}))),null)}function J2(e){return z(()=>J(Rl(globalThis.fetch("https://api.github.com/users/"+e)),t=>Z(t.ok)))}function Ut(){return ht.BillingRecordVar}function O2(){return ht.CompanyVatinVar}function j2(){return ht.CompanyNameVar}function K2(){return ht.BillingCountryView}function Y2(){return ht.BillingPostalView}function W2(){return ht.BillingCityView}function Z2(){return ht.BillingLine1View}function X2(){return ht.BillingVatinView}function ev(){return ht.BillingNameView}function tv(){return ht.BtnBillingCancelAttr}function rv(){return ht.BtnBillingSaveAttr}function nv(){return ht.BtnBillingEditAttr}function av(){return ht.BillingEditAttr}function ov(){return ht.BillingViewAttr}function iv(){return ht.BillingCountryOptions}function Nl(e){let t=e==null?dr(C(rn("","")),Gr("","","","")):e.$0;Ut().Set(t)}function ui(e){Ln().Set(e)}function sv(){return Ut().Get()}function Mn(e){return Ve(e)?"\u2014":e}function uA(){return ht.CountriesList}function Ln(){return ht.BillingModeVar}function Gr(e,t,r,n){return{line1:e,city:t,postal_code:r,country:n}}function dr(e,t){return{company:e,address:t}}function lv(){return ki.InvoicesBody}function Js(e){pg().Set(e)}function pg(){return ki.invoicesModel}function dv(e,t){let r=D(f=>"./invoice?id="+encodeURIComponent(f.id)+"&sub="+encodeURIComponent(ln().Get()),t),n=D(f=>f.status,t),a=D(f=>qx(f.amount,f.currency),t),o=D(f=>f.date,t),s=D(f=>f.id,t),d=new Ge("New_1"),c=(d.h.push(new lr("invoiceid",s)),d),u=(c.h.push(new lr("date",o)),c),p=(u.h.push(new lr("amount",a)),u),g=(p.h.push(new lr("status",n)),p),w=(g.h.push(new lr("href",r)),g),x=Pe(w.k,w.h,[]),k=new Te(x[1],tw(x[0]));return(w.i=k,k).Doc}function cv(){return ki.invoicesDoc}function Av(){return Vi.GitHubBody}function pA(){return Vi.GitHubOrgName}function gv(){return Vi.OrgPrefix}function uv(){kt(z(()=>(Un(!0),Dr(z(()=>{let e=ln().Get();return bi(e)?ne():(Fl(),J(Jl(e),t=>(ti().Set(t),Js(t),Er("Refreshed"),ne())))}),()=>{Un(!1)}))),null)}function pv(){Nl(Ci().Get()),ui(Gx)}function hv(){let e=sv();kt(z(()=>(Un(!0),Dr(z(()=>J(kx(e),t=>(t&&(Ci().Set(C(e)),ui(Ii),Er("Billing saved")),ne()))),()=>{Un(!1)}))),null)}function fv(){Nl(Ci().Get()),ui(Ii)}function bv(){return new Promise(e=>{e(xy(LA()).then(t=>{if(t!=null&&t.$==1){let r=t.$0;return Tx().Set(C(r)),Promise.resolve(r)}else throw new Error("unauthorized")}))})}var Kn=me(e=>class{static{Kn=e(this)}static DetailsDoc;static DetailsAttr;static MessageText;static messageVar;static confirmationVar;static{this.confirmationVar=R.Create_1(null),this.messageVar=R.Create_1("Confirming your payment\u2026"),this.MessageText=_.TextView($o().View),this.DetailsAttr=De("hidden",D(r=>r==null,_o().View)),this.DetailsDoc=_.BindView(r=>{if(r==null)return _.Empty;{let n=r.$0;return _.Concat([fa("Seats",String(n.seats)),fa("Email",n.email),fa("Amount",jw(n.amountTotal,n.currency)),fa("Status",n.status),fa("Subscription",n.subscriptionId)])}},_o().View)}});function z(e){return t=>{try{e()(t)}catch(r){t.k(Bi(r))}}}function J(e,t){return wv(r=>{e(pn(n=>{if(n.$==0){let a=n.$0;Qr().Fork(()=>{try{t(a)(r)}catch(o){r.k(Bi(o))}})}else Qr().Fork(()=>{r.k(n)})},r.ct))})}function Z(e){return t=>{t.k(Xn(e))}}function kt(e,t){let r=Ll()[0],n=t==null?r:t.$0;n.c||e(pn(a=>{a.$==1&&fg(a.$0)},n))}function mv(e){return t=>{let r,n;r=void 0,n=void 0,r=setTimeout(()=>{n.Dispose(),Qr().Fork(()=>{t.k(Xn(null))})},e),n=bg(t.ct,()=>{clearTimeout(r),Qr().Fork(()=>{mg(t)})})}}function ne(){return ea.Zero}function wv(e){return t=>{t.ct.c?mg(t):e(t)}}function hg(e,t){return J(e,()=>t)}function Ar(e,t){return r=>{e(pn(n=>{if(n.$==0)r.k(Xn(n.$0));else if(n.$==1){let a=n.$0;try{t(a)(r)}catch{r.k(n)}}else r.k(n)},r.ct))}}function Ll(){return ea.defCTS}function fg(e){console.log("WebSharper: Uncaught asynchronous exception",e)}function Dr(e,t){return r=>{e(pn(n=>{try{t(),r.k(n)}catch(a){r.k(Bi(a))}},r.ct))}}function bg(e,t){if(e===vv())return{Dispose(){return null}};{let r=e.r.push(t)-1;return{Dispose(){return ka(e.r,r,()=>{})}}}}function mg(e){e.k(r0(new ri("New",e.ct)))}function wg(e){let t=Pt(e);return Ce(t)===0?Z([]):r=>{let n=t.length,a=[n],o=new Array(n);for(let s=0,d=n-1;s<=d;s++)(c=>Qr().Fork(()=>{le(t,c)(pn(u=>{let p,g=a[0];switch(g===0?0:g===1?u.$==0?1:(p=u,3):u.$==0?2:(p=u,3)){case 0:return null;case 1:return ka(o,c,u.$0),a[0]=0,r.k(Xn(o));case 2:ka(o,c,u.$0);{a[0]=g-1;return}break;case 3:return a[0]=0,r.k(p)}},r.ct))}))(s)}}function Qr(){return ea.scheduler}function vv(){return ea.noneCT}function pi(e){return t=>{let r=[!1],n=a=>{r[0]?it("A continuation provided by Async.FromContinuations was invoked multiple times"):(r[0]=!0,Qr().Fork(a))};e(a=>{n(()=>{t.k(Xn(a))})},a=>{n(()=>{t.k(Bi(a))})},a=>{n(()=>{t.k(r0(a))})})}}function yv(e,t,r,n,a){let o=Ll()[0],s=a==null?o:a.$0;s.c||e(pn(d=>{d.$==1?r(d.$0):d.$==2?n(d.$0):t(d.$0)},s))}function xv(e,t){let r=Ll()[0],n=t==null?r:t.$0;Qr().Fork(()=>{n.c||e(pn(a=>{a.$==1&&fg(a.$0)},n))})}function kv(){return ea.GetCT}function Vv(){return new xt().Async("IRemotingContract/Logout",[])}function Cv(){return J(new xt().Async("IRemotingContract/Me",[]),e=>Z(Hm()(e)))}function Iv(e){return J(new xt().Async("IRemotingContract/ConfirmStripeOrder",[e]),t=>Z(jm()(t)))}function vg(){return J(new xt().Async("IRemotingContract/GetBillingData",[]),e=>Z(Km()(e)))}function Bv(e){return J(new xt().Async("IRemotingContract/StripeCheckout",[Ym()(e)]),t=>Z(Wm()(t)))}function Tl(){return J(new xt().Async("IRemotingContract/GetSubscriptions",[]),e=>Z(Ol(Zm)()(e)))}function Ev(){return J(new xt().Async("IRemotingContract/GetInvoices",[]),e=>Z(e))}function Qv(e){return J(new xt().Async("IRemotingContract/SetBillingData",[JA()(e)]),t=>Z(qa()(t)))}function Sv(){return J(new xt().Async("IRemotingContract/GetPlanPrices",[]),e=>Z(Ol(rw)()(e)))}function Dv(e){return J(new xt().Async("IRemotingContract/SetGitHubOrgName",[e]),t=>Z(qa()(t)))}function Fv(){return J(new xt().Async("IRemotingContract/GetCustomerPortalLink",[]),e=>Z(OA()(e)))}function Mv(){return J(new xt().Async("IRemotingContract/GetGitHubOrg",[]),e=>Z(ow()(e)))}function Nv(e){return J(new xt().Async("IRemotingContract/SetCancellationStatus",[e]),t=>Z(qa()(t)))}function Lv(e){return J(new xt().Async("IRemotingContract/AddAssignment",[e]),t=>Z(qa()(t)))}function Tv(e){return J(new xt().Async("IRemotingContract/RevokeAssignment",[e]),t=>Z(qa()(t)))}function Ga(e,t){return be.A1(new Xs(e,t))}function yg(e,t){if(e===null)return t;if(t===null)return e;{let r=be.A2(e,t);return qv(r,Os(e)|Os(t)),r}}function hi(){return Ze.EmptyAttr}function qv(e,t){e.flags=t}function Os(e){return e!==null&&e.hasOwnProperty("flags")?e.flags:0}function ql(e,t){let r=[],n=[];function a(d){for(;;)if(d!==null){if(d!=null&&d.$==1)return r.push(d.$0);if(d!=null&&d.$==2){let c=d.$1,u=d.$0;a(u),d=c}else return d!=null&&d.$==3?d.$0(e):d!=null&&d.$==4?n.push(d.$0):null}else return null}a(t);let o=r.slice(0);return c0(e,Os(t),o,n.length===0?null:C(d=>{wi(c=>{c(d)},n)}))}function js(e){return hy(t=>t.NChanged,Kt(),Rn,e.DynNodes)}function Fs(e){return c0(e,0,[],null)}function Gv(e){return(e.DynFlags&2)===2}function Rv(e){return Gl(e,(t,r)=>t.NGetExitAnim(r))}function $v(e){return(e.DynFlags&1)===1}function _v(e){return Gl(e,(t,r)=>t.NGetEnterAnim(r))}function Uv(e){return(e.DynFlags&4)===4}function Pv(e){return Gl(e,(t,r)=>t.NGetChangeAnim(r))}function Gl(e,t){return Di(Ht(r=>t(r,e.DynElem),e.DynNodes))}function xg(e,t){Qt(r=>{r.NSync(e)},t.DynNodes)}function kg(e,t){let r=Cg(e);r==""?Ks(e,t):Ig(t).test(r)||Ks(e,r+" "+t)}function Vg(e,t){let r=Ig(t),n=Cg(e).replace(r,(a,o,s)=>o==""||s==""?"":" ");Ks(e,n)}function se(e){let t=globalThis.document.createElement("div");if(Hv().test(e)){let s=function(d,c){for(;;){if(c===0)return d;{let u=c;d=d.lastChild,c=u-1}}},r=jv().exec(e),n=ce(r,null)?"":le(r,1).toLowerCase(),a=zv()[n],o=a||Jv();return t.innerHTML=o[1]+e.replace(Ov(),"<$1></$2>")+o[2],(d=>{let c=d;return u=>s(c,u)})(t)(o[0])}else return t.appendChild(globalThis.document.createTextNode(e)),t}function Cg(e){return e instanceof SVGElement?e.getAttribute("class"):e.className}function Ks(e,t){e instanceof SVGElement?e.setAttribute("class",t):e.className=t}function Ig(e){return new RegExp("(\\s+|^)"+e+"(?:\\s+"+e+")*(\\s+|$)","g")}function Hv(){return ta.rhtml}function zv(){return ta.wrapMap}function Jv(){return ta.defaultWrap}function Ov(){return ta.rxhtmlTag}function jv(){return ta.rtagName}function Kv(e,t,r){let n=e.querySelectorAll(t);for(let a=0,o=n.length-1;a<=o;a++)r(n[a])}function hA(e){let t=[];for(let r=0,n=e.childNodes.length-1;r<=n;r++)t.push(e.childNodes[r]);return t}function Yv(e,t){let r=globalThis.document.querySelectorAll(e);for(let n=0,a=r.length-1;n<=a;n++)t(r[n])}function Wv(e,t,r){let n;if(r.parentNode===e){let a=r.nextSibling,o=ce(a,null)?null:a;n=t===o}else n=!1;n||e.insertBefore(r,t)}function Zv(e,t){t.parentNode===e&&e.removeChild(t)}function Yn(e,t){let r=t.s;if(r!=null&&r.$==0)return{s:Pr(e(r.$0))};{let n={s:hn([],[])};return Yt(t,a=>{Eg(n,t,e(a))},n),n}}function fi(e,t,r){let n=t.s,a=r.s;if(n!=null&&n.$==0)return a!=null&&a.$==0?{s:Pr(e(n.$0,a.$0))}:Xv(e,n.$0,r);if(a!=null&&a.$==0)return ey(e,a.$0,t);{let o={s:hn([],[])},s=()=>{let d=o.s;if(!(d!=null&&d.$==0||d!=null&&d.$==2)){let c=on(t),u=on(r);c!=null&&c.$==1&&u!=null&&u.$==1&&(c.$0[1]&&u.$0[1]?Wn(o,e(c.$0[0],u.$0[0])):Zn(o,e(c.$0[0],u.$0[0])))}};return Yt(t,s,o),Yt(r,s,o),o}}function Bg(e,t){let r=e.s;r==null?t():r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,r.$1.push(t)):r.$0}function Yt(e,t,r){let n=e.s;if(n==null)Hn(r);else if(n!=null&&n.$==2){let a=n.$0;jo(n.$1,r),t(a)}else if(n!=null&&n.$==3){let a=n.$1;n.$0.push(t),jo(a,r)}else t(n.$0)}function Eg(e,t,r){let n=t.s;n!=null&&n.$==0?Wn(e,r):Zn(e,r)}function Xv(e,t,r){return Yn(n=>e(t,n),r)}function ey(e,t,r){return Yn(n=>e(n,t),r)}function on(e){let t=e.s;return t!=null&&t.$==0?C([t.$0,!0]):t!=null&&t.$==2?C([t.$0,!1]):null}function Wn(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$0;e.s=Pr(t);for(let a=0,o=Ce(n)-1;a<=o;a++)le(n,a)(t)}}function Zn(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$1,a=r.$0;e.s=Ei(t,n);for(let o=0,s=Ce(a)-1;o<=s;o++)le(a,o)(t)}}function jo(e,t){if(e.push(t),e.length%20===0){let r=e.slice(0);$k(e);for(let n=0,a=Ce(r)-1;n<=a;n++){let o=le(r,n);typeof o=="object"?(s=>{s.s&&e.push(s)})(o):(s=>{e.push(s)})(o)}}}function ty(e,t,r,n){let a=t.s,o=r.s,s=n.s;if(a!=null&&a.$==0)return o!=null&&o.$==0?s!=null&&s.$==0?{s:Pr(e(a.$0,o.$0,s.$0))}:ry(e,a.$0,o.$0,n):s!=null&&s.$==0?ny(e,a.$0,s.$0,r):ay(e,a.$0,r,n);if(o!=null&&o.$==0)return s!=null&&s.$==0?oy(e,o.$0,s.$0,t):iy(e,o.$0,t,n);if(s!=null&&s.$==0)return sy(e,s.$0,t,r);{let d={s:hn([],[])},c=()=>{let u=d.s;if(!(u!=null&&u.$==0||u!=null&&u.$==2)){let p=on(t),g=on(r),w=on(n);p!=null&&p.$==1&&g!=null&&g.$==1&&w!=null&&w.$==1&&(p.$0[1]&&g.$0[1]&&w.$0[1]?Wn(d,e(p.$0[0],g.$0[0],w.$0[0])):Zn(d,e(p.$0[0],g.$0[0],w.$0[0])))}};return Yt(t,c,d),Yt(r,c,d),Yt(n,c,d),d}}function ry(e,t,r,n){return Yn(a=>e(t,r,a),n)}function ny(e,t,r,n){return Yn(a=>e(t,a,r),n)}function ay(e,t,r,n){return fi((a,o)=>e(t,a,o),r,n)}function oy(e,t,r,n){return Yn(a=>e(a,t,r),n)}function iy(e,t,r,n){return fi((a,o)=>e(a,t,o),r,n)}function sy(e,t,r,n){return fi((a,o)=>e(a,o,t),r,n)}function ly(e,t){let r=e.s,n=t.s;if(r!=null&&r.$==0)return n!=null&&n.$==0?{s:Pr(null)}:t;if(n!=null&&n.$==0)return e;{let a={s:hn([],[])},o=()=>{let s=a.s;if(!(s!=null&&s.$==0||s!=null&&s.$==2)){let d=on(e),c=on(t);d!=null&&d.$==1&&c!=null&&c.$==1&&(d.$0[1]&&c.$0[1]?Wn(a,null):Zn(a,null))}};return Yt(e,o,a),Yt(t,o,a),a}}function dy(e){let t={s:hn([],[])};return Yt(e,r=>{let n=r();Yt(n,a=>{let o,s=n.s;if(s!=null&&s.$==0){let d=e.s;o=d!=null&&d.$==0}else o=!1;o?Wn(t,a):Zn(t,a)},t)},t),t}function cy(e,t,r){let n=e.s;if(n==null)r();else if(n!=null&&n.$==2){let a=n.$0;n.$1.push(r),t(a)}else if(n!=null&&n.$==3){let a=n.$1;n.$0.push(t),a.push(r)}else t(n.$0)}function Ay(e){let t=Pt(e);if(t.length==0)return{s:Pr([])};{let r={s:hn([],[])},n=[Ce(t)-1],a=()=>{if(n[0]===0){let o=Ht(s=>{let d=s.s;return d!=null&&d.$==0||d!=null&&d.$==2?d.$0:it("value not found by View.Sequence")},t);Lg(s=>{let d=s.s;return d!=null&&d.$==0},t)?Wn(r,o):Zn(r,o)}else n[0]=n[0]-1};return Qt(o=>{Yt(o,a,r)},t),r}}function gy(e){let t=e.s;if(t==null)return e;if(t!=null&&t.$==2){let r={s:Ei(t.$0,[])};return uy(e,r),r}else if(t!=null&&t.$==3){let r={s:hn([],[])};return Yt(e,n=>{Eg(r,e,n)},r),r}else return e}function uy(e,t){let r=e.s;r==null?Hn(t):r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,jo(r.$1,t)):r.$0}function Ra(e){if(e instanceof Array)return e;if(e instanceof Mt)return Mg(e);if(e===null)return[];{let t=[],r=Re(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&Nt(n)&&r.Dispose()}}}function $a(e,t,r){let n=Ce(r);function a(o){return s=>{let d;switch(s<=0?0:s===1&&o>=0&&o<n?1:(d=s,2)){case 0:return e;case 1:return le(r,o);case 2:let c=s/2>>0;return t(a(o)(c),a(o+c)(s-c))}}}return a(0)(n)}function py(e,t){for(let r=0,n=t.length-1;r<=n;r++)t[r]=e(t[r]);return t}function hy(e,t,r,n){let a=Ce(n);function o(s){return d=>{let c;switch(d<=0?0:d===1&&s>=0&&s<a?1:(c=d,2)){case 0:return t;case 1:return e(le(n,s));case 2:let u=d/2>>0;return r(o(s)(u),o(s+u)(d-u))}}}return o(0)(a)}function fy(e){return{$:4,$0:e}}function by(e){return{$:2,$0:e}}function my(e,t){return{$:0,$0:e,$1:t}}function wy(e){return{$:5,$0:e}}function Qg(e){return{$:6,$0:e}}function vy(e){return{$:1,$0:e}}var vt=class extends rt{equals;hash;count;data;set_Item(t,r){this.set(t,r)}set(t,r){let n=this.hash(t),a=this.data[n];if(a==null)this.count=this.count+1,this.data[n]=new Array({K:t,V:r});else{let o=_l(s=>this.equals.apply(null,[en(s)[0],t]),a);o==null?(this.count=this.count+1,a.push({K:t,V:r})):a[o.$0]={K:t,V:r}}}TryGetValue(t,r){let n=this.data[this.hash(t)];if(n==null)return!1;{let a=Ng(o=>{let s=en(o);return this.equals.apply(null,[s[0],t])?C(s[1]):null},n);return a!=null&&a.$==1&&(r.set(a.$0),!0)}}ContainsKey(t){let r=this.data[this.hash(t)];return r==null?!1:Pn(n=>this.equals.apply(null,[en(n)[0],t]),r)}GetEnumerator(){return o0(Uy(Yw(this.data)))}Item(t){return this.get(t)}get Values(){return new ul(this)}RemoveKey(t){return this.remove(t)}get Keys(){return new pl(this)}get(t){let r=this.data[this.hash(t)];return r==null?$x():zy(n=>{let a=en(n);return this.equals.apply(null,[a[0],t])?C(a[1]):null},r)}DAdd(t,r){this.add(t,r)}Clear(){this.data=[],this.count=0}remove(t){let r=this.hash(t),n=this.data[r];if(n==null)return!1;{let a=_a(o=>!this.equals.apply(null,[en(o)[0],t]),n);return Ce(a)<n.length&&(this.count=this.count-1,this.data[r]=a,!0)}}add(t,r){let n=this.hash(t),a=this.data[n];a==null?(this.count=this.count+1,this.data[n]=new Array({K:t,V:r})):(Pn(o=>this.equals.apply(null,[en(o)[0],t]),a)&&_x(),this.count=this.count+1,a.push({K:t,V:r}))}constructor(t,r,n,a){if(t=="New_5"&&(t="New_6",r=[],n=ce,a=Ia),t=="New_6"){let o=r,s=n,d=a;super(),this.equals=s,this.hash=d,this.count=0,this.data=[];let c=Re(o);try{for(;c.MoveNext();){let u=c.Current;this.set(u.K,u.V)}}finally{let u=c;typeof u=="object"&&Nt(u)&&c.Dispose()}}}},Sg=me(e=>class{static{Sg=e(this)}static prism;static{Promise.resolve().then(()=>ao(jc())),this.prism=QA.default}});function Rl(e){return pi((t,r)=>{e.then(t,n=>r(yy(n)))})}function yy(e){return e instanceof Error?e:new al(e)}function xy(e){return new Promise((t,r)=>{yv(e,t,n=>{r(n)},n=>{r(n)},null)})}function ut(e){return e.replace(new RegExp("^\\s+"),"").replace(new RegExp("\\s+$"),"")}function Ve(e){return e==null||new RegExp("^\\s*$").test(e)}function An(e,t){return Pt(t).join(e)}function bi(e){return e==null||e==""}function fA(e,t){return e.substring(e.length-t.length)==t}function Ko(e,t){return e.substring(0,t.length)==t}function cr(e,t,r){return Vy(e,new RegExp("["+Cy(t.join(""))+"]"),r)}function ky(e,t){return Ty(e,Iy(t))}function Vy(e,t,r){return r===1?_a(n=>n!=="",bA(e,t)):bA(e,t)}function Cy(e){return e.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]","g"),"\\$&")}function Iy(e){return e??""}function bA(e,t){return e.split(t)}function mt(e,t,r){return e.substr(t,r)}var Zt=class e extends rt{equals;hash;data;count;SAdd(t){return this.add(t)}Contains(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrContains(t,r)}add(t){let r=this.hash(t),n=this.data[r];return n==null?(this.data[r]=[t],this.count=this.count+1,!0):this.arrContains(t,n)?!1:(n.push(t),this.count=this.count+1,!0)}arrContains(t,r){let n=!0,a=0,o=r.length;for(;n&&a<o;)this.equals.apply(null,[r[a],t])?n=!1:a=a+1;return!n}GetEnumerator(){return Re(Ls(this.data))}ExceptWith(t){let r=Re(t);try{for(;r.MoveNext();)this.Remove(r.Current)}finally{let n=r;typeof n=="object"&&Nt(n)&&r.Dispose()}}get Count(){return this.count}IntersectWith(t){let r=new e("New_4",t,this.equals,this.hash),n=Ls(this.data);for(let a=0,o=n.length-1;a<=o;a++){let s=n[a];r.Contains(s)||this.Remove(s)}}Remove(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrRemove(t,r)&&(this.count=this.count-1,!0)}CopyTo(t,r){let n=Ls(this.data);for(let a=0,o=n.length-1;a<=o;a++)ka(t,a+r,n[a])}arrRemove(t,r){let n=!0,a=0,o=r.length;for(;n&&a<o;)this.equals.apply(null,[r[a],t])?(r.splice(a,1),n=!1):a=a+1;return!n}constructor(t,r,n,a){t=="New_3"&&(t="New_4",r=[],n=ce,a=Ia);let o;if(t=="New_2"&&(o=r,t="New_4",r=o,n=ce,a=Ia),t=="New_4"){let s=r,d=n,c=a;super(),this.equals=d,this.hash=c,this.data=[],this.count=0;let u=Re(s);try{for(;u.MoveNext();)this.add(u.Current)}finally{let p=u;typeof p=="object"&&Nt(p)&&u.Dispose()}}}};function mi(e,t){return{GetEnumerator:()=>{let r=Re(e),n=[!0];return new rr(r,null,a=>{if(a.s.MoveNext())return a.c=a.s.Current,!0;{let o=a.s;return ce(o,null)||o.Dispose(),a.s=null,n[0]&&(n[0]=!1,a.s=Re(t),a.s.MoveNext()?(a.c=a.s.Current,!0):(a.s.Dispose(),a.s=null,!1))}},a=>{let o=a.s;ce(o,null)||o.Dispose()})}}}function wi(e,t){let r=Re(t);try{for(;r.MoveNext();)e(r.Current)}finally{let n=r;typeof n=="object"&&Nt(n)&&r.Dispose()}}function By(e,t){return gn(()=>{let r=Pt(t);return _y(e,r),r})}function Ey(e,t){return gn(()=>lk(e,Pt(t)))}function Dg(e,t){return Qy(Fr(e,t))}function gn(e){return{GetEnumerator:()=>Re(e())}}function Fr(e,t){return{GetEnumerator:()=>{let r=Re(t);return new rr(null,null,n=>r.MoveNext()&&(n.c=e(r.Current),!0),()=>{r.Dispose()})}}}function Qy(e){return{GetEnumerator:()=>{let t=Re(e);function r(n){for(;;){let a=n.s;if(ce(a,null))if(t.MoveNext())n.s=Re(t.Current),n=n;else return t.Dispose(),!1;else{if(a.MoveNext())return n.c=a.Current,!0;n.Dispose(),n.s=null,n=n}}}return new rr(null,null,r,n=>{let a=n.s;ce(a,null)||a.Dispose();let o=t;ce(o,null)||o.Dispose()})}}}function Sy(e,t){let r=Re(t);try{let n=null;for(;ce(n,null)&&r.MoveNext();)n=e(r.Current);return n}finally{let n=r;typeof n=="object"&&Nt(n)&&r.Dispose()}}function Dy(e,t){return Ny(e,Ly(t))}function Fy(e){let t=Re(e);try{return t.MoveNext()?t.Current:ol()}finally{let r=t;typeof r=="object"&&Nt(r)&&t.Dispose()}}function My(e,t,r){let n=t,a=Re(r);try{for(;a.MoveNext();)n=e(n,a.Current);return n}finally{let o=a;typeof o=="object"&&Nt(o)&&a.Dispose()}}function Ny(e,t){return e<0&&Ak(),{GetEnumerator:()=>{let r=[Re(t)];return new rr(0,null,n=>{if(n.s=n.s+1,n.s>e)return!1;{let a=r[0];return ce(a,null)?ol():a.MoveNext()?(n.c=a.Current,n.s===e&&(a.Dispose(),r[0]=null),!0):(a.Dispose(),r[0]=null,ol())}},()=>{let n=r[0];ce(n,null)||n.Dispose()})}}}function Ly(e){return{GetEnumerator:()=>new rr(0,null,t=>(t.c=e(t.s),t.s=t.s+1,!0),void 0)}}function Fg(e,t){return{GetEnumerator:()=>{let r=Re(t),n=new Zt("New_3");return new rr(null,null,a=>{let o,s;if(r.MoveNext()){for(o=r.Current,s=n.SAdd(e(o));!s&&r.MoveNext();)o=r.Current,s=n.SAdd(e(o));return s&&(a.c=o,!0)}else return!1},()=>{r.Dispose()})}}}function Ty(e,t){return!qy(r=>!e(r),t)}function qy(e,t){let r=Re(t);try{let n=!1;for(;!n&&r.MoveNext();)n=e(r.Current);return n}finally{let n=r;typeof n=="object"&&Nt(n)&&r.Dispose()}}function Gy(e){let t=Re(e);try{t.MoveNext()||Ry();let r=t.Current;for(;t.MoveNext();){let n=t.Current;cn(n,r)===1&&(r=n)}return r}finally{let r=t;typeof r=="object"&&Nt(r)&&t.Dispose()}}function Ry(){return it("The input sequence was empty.")}function $l(e,t){let r=[];for(let n=0,a=t.length-1;n<=a;n++){let o=e(t[n]);o==null||r.push(o.$0)}return r}function vi(e,t){let r=null,n=0;for(;n<t.length&&r==null;)e(t[n])&&(r=C(t[n])),n=n+1;return r}function Mg(e){let t=[],r=e;for(;r.$!=0;)t.push(lx(r)),r=dx(r);return t}function $y(e,t,r){let n=t;for(let a=0,o=r.length-1;a<=o;a++)n=e(n,r[a]);return n}function Ht(e,t){let r=new Array(t.length);for(let n=0,a=t.length-1;n<=a;n++)r[n]=e(t[n]);return r}function Pn(e,t){let r=!1,n=0,a=Ce(t);for(;!r&&n<a;)e(t[n])?r=!0:n=n+1;return r}function _l(e,t){let r=null,n=0;for(;n<t.length&&r==null;)e(t[n])&&(r=C(n)),n=n+1;return r}function Ng(e,t){let r=null,n=0;for(;n<t.length&&r==null;){let a=e(t[n]);a!=null&&a.$==1&&(r=a),n=n+1}return r}function Pt(e){if(e instanceof Array)return e.slice();if(e instanceof Mt)return Mg(e);{let t=[],r=Re(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&Nt(n)&&r.Dispose()}}}function _y(e,t){u0(r=>r[0],dk((r,n)=>[n,[e(n),r]],t).sort((r,n)=>cn(r[1],n[1])))}function Uy(e){return Array.prototype.concat.apply([],Pt(e))}function Py(e,t){let r=_l(e,t);return r==null?it("KeyNotFoundException"):r.$0}function Qt(e,t){for(let r=0,n=t.length-1;r<=n;r++)e(t[r])}function _a(e,t){let r=[];for(let n=0,a=t.length-1;n<=a;n++)e(t[n])&&r.push(t[n]);return r}function Hy(e,t){return Array.prototype.concat.apply([],Ht(e,t))}function Ul(e,t,r){let n=r,a=t.length;for(let o=1,s=a;o<=s;o++)n=e(t[a-o],n);return n}function zy(e,t){let r=Ng(e,t);return r==null?it("KeyNotFoundException"):r.$0}function Jy(e,t){let r=new Array(t.length);for(let n=0,a=t.length-1;n<=a;n++)r[n]=e(n,t[n]);return r}function Oy(e,t){return Pt(Fg(e,t))}function Lg(e,t){let r=!0,n=0,a=Ce(t);for(;r&&n<a;)e(t[n])?n=n+1:r=!1;return r}function jy(e,t){let r=new Array(e);for(let n=0,a=e-1;n<=a;n++)r[n]=t;return r}function Ky(e,t){e<0&&it("Negative size given.");let r=new Array(e);for(let n=0,a=e-1;n<=a;n++)r[n]=t(n);return r}var Et=me(e=>class extends rt{static{Et=e(this)}static init;id;vars;static initialized;static instances;static GetOrAddHoleFor(r,n,a){let o,s=Et.GetHolesFor(r),d=(o=null,[s.TryGetValue(n,{get:()=>o,set:c=>{o=c}}),o]);if(d[0])return d[1];{let c=a();return s.set_Item(n,c),c}}static GetHolesFor(r){let n,a=(n=null,[Et.initialized.TryGetValue(r,{get:()=>n,set:o=>{n=o}}),n]);if(a[0])return a[1];{let o=new vt("New_5");return Et.initialized.set_Item(r,o),o}}static applyVarHole(r,n){n.ApplyVarHole(r)}InitInstance(r){let n=Et.GetHolesFor(r),a=this.vars;for(let s=0,d=a.length-1;s<=d;s++)(()=>{let c,u=le(a,s),p=u[1],g=u[2],w=u[0];if(n.ContainsKey(w))return null;if(p===0){let x=g==null?null:C(g.$0),k=x==null?"":x.$0,m=R.Create_1(k);c=new Oe(w,m)}else if(p===1){let x=g==null?null:C(g.$0),k=x==null?0:x.$0,m=R.Create_1(k);c=new Yo(w,m)}else if(p===2){let x=g==null?null:C(g.$0),k=x==null?!1:x.$0,m=R.Create_1(k);c=new Ba(w,m)}else if(p===3){let x=g==null?null:C(g.$0),k=x==null?-864e13:x.$0,m=R.Create_1(k);c=new Wo(w,m)}else if(p===4){let x=g==null?null:C(g.$0),k=x==null?[]:x.$0,m=R.Create_1(k);c=new Zo(w,m)}else if(p===5){let x=g==null?null:C(g.$0),k=globalThis.document.querySelector("[ws-dom="+w+"]"),m=x==null?k:x.$0,f=C(m),v=R.Create_1(f);c=new Ea(w,v)}else if(p===6){let x=g==null?null:C(g.$0),k=x==null?[]:x.$0,m=R.Create_1(k);c=new Xo(w,m)}else c=it("Invalid value type");return n.set_Item(w,c)})();let o=new Te({$:0,$0:n},_.Empty);return Et.instances.set_Item(r,o),o}$preinit(r){let n=this.InitInstance(r),a=globalThis.document.querySelectorAll("[ws-var^='"+r+"::']");for(let o=0,s=a.length-1;o<=s;o++){let d=a[o],c=d.getAttribute("ws-var"),u=n.Hole(Br(c,C(r.length+2),null)),p=u.WithName(c);Rg().set_Item(p.Name,p),Et.applyVarHole(d,u)}}$init(r){}$postinit(r){Tg([])}static{Et.initialized=new vt("New_5"),Et.instances=new vt("New_5")}}),Oe=class e extends yt{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ApplyVarHole(t){ra(p0(),this.fillWith,t)}ForTextView(){return C(this.fillWith.View)}AddAttribute(t,r){t(r)(eg(this.fillWith))}get AsChoiceView(){return fn(D(String,this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}},Yo=class e extends yt{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ApplyVarHole(t){ra(h0(),this.fillWith,t)}ForTextView(){return C(D(String,this.fillWith.View))}AddAttribute(t,r){t(r)(r1(this.fillWith))}get AsChoiceView(){return fn(D(String,this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}},Ba=class e extends yt{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ApplyVarHole(t){ra(f0(),this.fillWith,t)}ForTextView(){return C(D(String,this.fillWith.View))}AddAttribute(t,r){t(r)(n1(this.fillWith))}get AsChoiceView(){return fn(D(String,this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}},Wo=class e extends yt{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ApplyVarHole(t){ra(b0(),this.fillWith,t)}ForTextView(){return C(D(t=>new Date(t).toLocaleString(),this.fillWith.View))}AddAttribute(t,r){t(r)(a1(this.fillWith))}get AsChoiceView(){return fn(D(t=>new Date(t).toLocaleString(),this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}},Zo=class e extends yt{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ApplyVarHole(t){ra(m0(),this.fillWith,t)}ForTextView(){return C(D(String,this.fillWith.View))}AddAttribute(t,r){t(r)(o1(this.fillWith))}get AsChoiceView(){return fn(D(String,this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}},Ea=class e extends yt{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}get Value(){return this.fillWith}ApplyVarHole(t){}constructor(t,r){super(),this.name=t,this.fillWith=r}},Xo=class e extends yt{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}ApplyVarHole(t){ra(w0(),this.fillWith,t)}ForTextView(){return C(D(t=>An(",",t),this.fillWith.View))}AddAttribute(t,r){t(r)(i1(this.fillWith))}get AsChoiceView(){return fn(D(String,this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}};function et(e,t,r,n){return qg(""),We(e,t,r),Yy(e,t,n)}function We(e,t,r){Ua(e).ContainsKey(t==null?"":t.$0)||sn(e,t,r(),null)}function Tg(e){if(mA()==null){qg(""),sn("",null,globalThis.document.body,null);let t=Gg(globalThis.document.body,e),r=globalThis.document.body;(a=>{_.RunInPlace(!0,r,a)})(t);let n=t;return Wy(C(n)),n}else return mA().$0}function qg(e){Zy()||(Xy(!0),ex(globalThis.document.body,"")),Qa().set_Item(e,Ua(""))}function Yy(e,t,r){let n,a=(n=null,[Ua(e).TryGetValue(t==null?"":t.$0,{get:()=>n,set:o=>{n=o}}),n]);return a[0]?Gg(a[1].cloneNode(!0),r):(console.warn("Local template doesn't exist",t),_.Empty)}function Ua(e){let t,r=(t=null,[Qa().TryGetValue(e,{get:()=>t,set:n=>{t=n}}),t]);if(r[0])return r[1];{let n=new vt("New_5");return Qa().set_Item(e,n),n}}function sn(e,t,r,n){let a=new Zt("New_3");function o(w,x){for(;;)switch(w){case 0:if(x!==null){let h=x.nextSibling;ce(x.nodeType,Node.TEXT_NODE)?rk(x):ce(x.nodeType,Node.ELEMENT_NODE)&&d(x),x=h}else return null;break;case 1:let k=Br(x.nodeName,C(3),null).toLowerCase(),m=k.indexOf("."),f=m===-1?[e,k]:[Br(k,null,C(m-1)),Br(k,C(m+1),null)],v=f[1],y=f[0];if(y!=""&&!Qa().ContainsKey(y))return CA(v);{y==""&&n!=null&&n.$0(v);let h=Qa().Item(y);if(h.ContainsKey(v)){let I=h.Item(v).cloneNode(!0),B=new Zt("New_3"),Q=new vt("New_5"),L=x.attributes;for(let G=0,N=L.length-1;G<=N;G++){let S=L.item(G).name.toLowerCase(),U=L.item(G).nodeValue,de=U==""?S:U.toLowerCase();Q.set_Item(S,de),B.SAdd(S)||console.warn("Hole mapped twice",S)}for(let G=0,N=x.childNodes.length-1;G<=N;G++){let S=x.childNodes[G];ce(S.nodeType,Node.ELEMENT_NODE)&&(B.SAdd(S.nodeName.toLowerCase())||console.warn("Hole filled twice",v))}let F=x.childNodes.length===1&&ce(x.firstChild.nodeType,Node.TEXT_NODE);if(F){let G=nk(I,x.firstChild.textContent,v),N=(U=>de=>U.SAdd(de))(B);(U=>de=>{de!=null&&U(de.$0)})(U=>{N(U)})(G)}if(ak(I,B),!F)for(let G=0,N=x.childNodes.length-1;G<=N;G++){let S=x.childNodes[G];ce(S.nodeType,Node.ELEMENT_NODE)&&(S.hasAttributes()?ok(I,S):s(I,S))}ik(I,Q),IA(I,x.parentNode,x),x.parentNode.removeChild(x);return}else return CA(v)}break}}function s(w,x){let k=x.nodeName.toLowerCase(),m=(v,y)=>{if(k=="title"&&x.hasChildNodes()){let h=se(x.textContent);for(x.removeChild(x.firstChild);h.hasChildNodes();)x.appendChild(h.firstChild)}return d(x),IA(x,v,y)};wt(w,"[ws-attr-holes]",v=>{let y=cr(v.getAttribute("ws-attr-holes"),[" "],1);for(let h=0,V=y.length-1;h<=V;h++){let I=le(y,h),B=new RegExp("\\${"+k+"}","ig"),Q=v.getAttribute(I).replace(B,x.textContent);v.setAttribute(I,Q)}});let f=w.querySelector("[ws-hole="+k+"]");if(ce(f,null)){let v=w.querySelector("[ws-replace="+k+"]");if(ce(v,null)){let y=w.querySelector("slot[name="+k+"]");return w.tagName.toLowerCase()=="template"?(m(y.parentNode,y),void y.parentNode.removeChild(y)):null}else{m(v.parentNode,v),v.parentNode.removeChild(v);return}}else{for(;f.hasChildNodes();)f.removeChild(f.lastChild);return f.removeAttribute("ws-hole"),(v=>{let y=v;return h=>m(y,h)})(f)(null)}}function d(w){w.hasAttribute("ws-preserve")||(Ko(w.nodeName.toLowerCase(),"ws-")?u(w):(A0(w),c(w.firstChild)))}function c(w){return o(0,w)}function u(w){return o(1,w)}function p(w){for(;;){let x=w.querySelector("[ws-template]");if(ce(x,null)){let k=w.querySelector("[ws-children-template]");if(ce(k,null)){let m=w.querySelectorAll("template[id]");for(let v=1,y=m.length-1;v<=y;v++){let h=m[v];a.Contains(h)||(sn(e,C(h.getAttribute("id")),h,null),a.SAdd(h))}let f=w.querySelectorAll("template[name]");for(let v=1,y=f.length-1;v<=y;v++){let h=f[v];a.Contains(h)||(sn(e,C(h.getAttribute("name")),h,null),a.SAdd(h))}return null}else{let m=k.getAttribute("ws-children-template");k.removeAttribute("ws-children-template"),sn(e,C(m),k,null),w=w}}else{let k=x.getAttribute("ws-template");tx(e,C(k),x)(null),w=w}}}let g=(t==null?"":t.$0).toLowerCase();Ua(e).set_Item(g,r),r.hasChildNodes()&&(p(r),c(r.firstChild))}function mA(){return zr.RenderedFullDocTemplate}function Gg(e,t){let r,n=rx(e,mi(t,Rg().Values)),a=n[1],o=n[0],s=o.Els;return!ce(s,null)&&s.length===1&&le(s,0)instanceof Node&&ce(le(s,0).nodeType,Node.ELEMENT_NODE)&&(r=le(s,0),!0)?Ta.TreeNode(o,a):_.Mk(Qg(o),a)}function Wy(e){zr.RenderedFullDocTemplate=e}function Zy(){return zr.LocalTemplatesLoaded}function Xy(e){zr.LocalTemplatesLoaded=e}function ex(e,t){let r=Ua(t),n=new vt("New_5"),a=e.querySelectorAll("[ws-template]");for(let p=0,g=a.length-1;p<=g;p++){let w=a[p],x=w.getAttribute("ws-template").toLowerCase();w.removeAttribute("ws-template"),n.set_Item(x,$g(w))}let o=e.querySelectorAll("[ws-children-template]");for(let p=0,g=o.length-1;p<=g;p++){let w=o[p],x=w.getAttribute("ws-children-template").toLowerCase();w.removeAttribute("ws-children-template"),n.set_Item(x,nx(w))}let s=e.querySelectorAll("template[id]");for(let p=0,g=s.length-1;p<=g;p++){let w=s[p];n.set_Item(w.getAttribute("id").toLowerCase(),wA(w))}let d=e.querySelectorAll("template[name]");for(let p=0,g=d.length-1;p<=g;p++){let w=d[p];n.set_Item(w.getAttribute("name").toLowerCase(),wA(w))}let c=new Zt("New_3");function u(p){if(!r.ContainsKey(p)){let g,w=(g=null,[n.TryGetValue(p,{get:()=>g,set:x=>{g=x}}),g]);w[0]?(c.SAdd(p),n.RemoveKey(p),sn(t,C(p),w[1],C(u))):console.warn(c.Contains(p)?"Encountered loop when instantiating "+p:"Local template does not exist: "+p)}}for(;n.count>0;)u(Fy(n.Keys))}function Qa(){return zr.LoadedTemplates}function wt(e,t,r){Kv(e,t,n=>{n.closest("[ws-preserve]")==null&&r(n)})}function tx(e,t,r){let n=$g(r);return a=>{sn(e,t,n,a)}}function rx(e,t){let r,n=[],a=[],o=[],s=[],d=new vt("New_5"),c=Re(t);try{for(;c.MoveNext();){let h=c.Current;d.set_Item(h.Name,h)}}finally{let h=c;typeof h=="object"&&Nt(h)&&c.Dispose()}let u=hA(e),p=(h,V)=>{let I=ql(h,V);a.push(js(I)),o.push([h,I]);let B=Or(I.OnAfterRender);if(B==null)return null;{let Q=B.$0;s.push(()=>{Q(h)});return}},g=h=>{let V,I=(V=null,[d.TryGetValue(h,{get:()=>V,set:B=>{V=B}}),V]);if(I[0]){let B=I[1];if(B instanceof W)return C(B.Value);if(B instanceof _r)return C(_.TextNode(B.Value));{let Q=B.ForTextView();return Q==null?null:C(_.TextView(Q.$0))}}else return null};wt(e,"[ws-hole]",h=>{let V=h.getAttribute("ws-hole");for(h.removeAttribute("ws-hole");h.hasChildNodes();)h.removeChild(h.lastChild);let I=g(V);if(I!=null&&I.$==1){let B=I.$0;Ys(h,B.docNode),n.push(dn.New(Fs(h),B.docNode,null,h,$n(),null)),a.push(B.updates)}}),wt(e,"[ws-replace]",h=>{let V=g(h.getAttribute("ws-replace"));if(V!=null&&V.$==1){let I=V.$0,B=h.parentNode,Q=globalThis.document.createTextNode("");B.replaceChild(Q,h);let L=vx(Q,I.docNode);u=hA(e);let F=_l(G=>h===G,u);F==null||ka(u,F.$0,I.docNode),n.push(dn.New(Fs(B),I.docNode,C([L,Q]),B,$n(),null)),a.push(I.updates)}});let w=!1;wt(e,"slot",h=>{let V=h.getAttribute("name"),I=V==""||V==null?"default":V.toLowerCase();if(!(w&&I=="default"||!ce(e.parentElement,null))){for(;h.hasChildNodes();)h.removeChild(h.lastChild);I=="default"&&(w=!0);let B=g(I);if(B!=null&&B.$==1){let Q=B.$0;Ys(h,Q.docNode),n.push(dn.New(Fs(h),Q.docNode,null,h,$n(),null)),a.push(Q.updates)}}}),wt(e,"[ws-attr]",h=>{let V,I=h.getAttribute("ws-attr");h.removeAttribute("ws-attr");let B=(V=null,[d.TryGetValue(I,{get:()=>V,set:Q=>{V=Q}}),V]);if(B[0]){let Q=B[1];Q instanceof ie?p(h,Q.Value):console.warn("Attribute hole filled with non-attribute data",I)}}),wt(e,"[ws-on]",h=>{p(h,be.Concat($l(V=>{let I,B=cr(V,[":"],1),Q=(I=null,[d.TryGetValue(le(B,1),{get:()=>I,set:L=>{I=L}}),I]);if(Q[0]){let L=Q[1];return L instanceof Al?C(XA(le(B,0),L.Value)):L instanceof Uo?C(be.HandlerImpl(le(B,0),L.Value)):(console.warn("Event hole on"+le(B,0)+" filled with non-event data",le(B,1)),null)}else return null},cr(h.getAttribute("ws-on"),[" "],1)))),h.removeAttribute("ws-on")}),wt(e,"[ws-onafterrender]",h=>{let V,I=h.getAttribute("ws-onafterrender"),B=(V=null,[d.TryGetValue(I,{get:()=>V,set:Q=>{V=Q}}),V]);if(B[0]){let Q=B[1];Q instanceof gl||Q instanceof Wt?(h.removeAttribute("ws-onafterrender"),p(h,oA(Q.Value))):console.warn("onafterrender hole filled with non-onafterrender data",I)}}),wt(e,"[ws-var]",h=>{let V,I=h.getAttribute("ws-var");h.removeAttribute("ws-var");let B=(V=null,[d.TryGetValue(I,{get:()=>V,set:Q=>{V=Q}}),V]);B[0]&&B[1].AddAttribute(Q=>L=>p(Q,L),h)});let x=()=>{ax("[ws-dom]",h=>{let V,I,B,Q=(V=null,[d.TryGetValue(h.getAttribute("ws-dom").toLowerCase(),{get:()=>V,set:L=>{V=L}}),V]);if(Q[0]){let L=Q[1];if(L instanceof Ea){let F=L.Value;h.removeAttribute("ws-dom"),I=h;let G=new MutationObserver((N,S)=>{Qt(U=>{U.removedNodes.forEach(jd(de=>de[0]===I&&U.addedNodes.length!==1?(F.SetFinal(null),S.disconnect()):null),null)},N)});h.parentElement!==null&&G.observe(h.parentElement,(B={},B.childList=!0,B)),F.Set(C(h)),Ho(N=>{if(N!=null&&N.$==1){let S=N.$0;if(I!==S){let U=[S];I.replaceWith.apply(I,U),I=S}}else I.remove(),G.disconnect()},F.View)}}})};wt(e,"[ws-attr-holes]",h=>{let V=new RegExp(Sa(),"g"),I=cr(h.getAttribute("ws-attr-holes"),[" "],1);h.removeAttribute("ws-attr-holes");for(let B=0,Q=I.length-1;B<=Q;B++)(()=>{let L,F=le(I,B),G=h.getAttribute(F),N=null,S=0,U=[];for(;N=V.exec(G),N!==null;){let te=Br(G,C(S),C(V.lastIndex-le(N,0).length-1));S=V.lastIndex,U.push([te,le(N,1)])}let de=Br(G,C(S),null);V.lastIndex=0;let O=Ul((te,j)=>(ee=>{let T=ee[0],$=ee[1];return re=>{let ue,he=re[0],ae=re[1],xe=(ue=null,[d.TryGetValue($,{get:()=>ue,set:Be=>{ue=Be}}),ue]),Ie=xe[0]?xe[1].AsChoiceView:Xl("");return Ie.$==1?[T,Mt.Cons(he==""?Ie.$0:D(Be=>Be+he,Ie.$0),ae)]:[T+Ie.$0+he,ae]}})(te)(j),U,[de,Mt.Empty]);if(O[1].$==1)if(O[1].$1.$==1)if(O[1].$1.$1.$==1)if(O[1].$1.$1.$1.$==0){let te=O[0];L=gt(F,ya((j,ee,T)=>te+j+ee+T,O[1].$0,O[1].$1.$0,O[1].$1.$1.$0))}else{let te=O[0];L=gt(F,D(j=>te+An("",j),c1(O[1])))}else{let te=O[0];L=gt(F,Ft((j,ee)=>te+j+ee,O[1].$0,O[1].$1.$0))}else if(O[0]=="")L=gt(F,O[1].$0);else{let te=O[0];L=gt(F,D(j=>te+j,O[1].$0))}else L=be.Create(F,O[0]);return p(h,L)})()});let k=u,m=s.length==0?C(()=>{x()}):C(h=>{x(),Qt(V=>{V(h)},s)}),f=!ce(u,null)&&u.length===1&&le(u,0)instanceof Node&&le(u,0)instanceof Element&&(r=le(u,0),!0)?C(r):null,v={Els:k,Dirty:!0,Holes:n,Attrs:o,Render:m?m.$0:void 0,El:f?f.$0:void 0};return[Od(v,["Render","El"]),$a(Kt(),Rn,a)]}function Rg(){return zr.GlobalHoles}function $g(e){e.removeAttribute("ws-template");let t=e.getAttribute("ws-replace");if(t!=null){e.removeAttribute("ws-replace");let n=e.parentNode;if(!ce(n,null)){let a=globalThis.document.createElement(e.tagName);a.setAttribute("ws-replace",t),n.replaceChild(a,e)}}let r=globalThis.document.createElement("div");return r.appendChild(e),r}function nx(e){let t=globalThis.document.createElement("div");for(;e.hasChildNodes();)t.appendChild(e.firstChild);return t}function wA(e){let t=globalThis.document.createElement("div"),r=e.content;for(let n=0,a=r.childNodes.length-1;n<=a;n++)t.appendChild(r.childNodes[n].cloneNode(!0));return t}function Sa(){return zr.TextHoleRE}function ax(e,t){Yv(e,r=>{r.closest("[ws-preserve]")==null&&t(r)})}var Pl=me(e=>class{static{Pl=e(this)}static ContactSendButtonText;static ContactSendButtonAttr;static{this.ContactSendButtonAttr=_n("disabled",Ft((r,n)=>!r||n,V1(),zo().View)),this.ContactSendButtonText=D(r=>r?"Sending...":"Send",zo().View)}});function ox(){return _g(ei()+1),"uid"+String(ei())}function _g(e){jl.counter=e}function ei(){return jl.counter}function $n(){return _g(ei()+1),ei()}var ur=me(e=>class{static{ur=e(this)}static CanSendView;static IsSendingVar;static ContactFormVar;static SeatCount;static SeatCountText;static intervalVar;static catalogVar;static fallbackFreelancer;static fallbackPro;static{this.fallbackPro=xa(C("Professional"),C("Assign GitHub usernames after purchase"),C(va(250,"USD")),C(va(2500,"USD"))),this.fallbackFreelancer=xa(C("Freelancer"),C("Ideal for solo developers"),C(va(30,"USD")),C(va(300,"USD"))),this.catalogVar=R.Create_1(el(Jo(),Us())),this.intervalVar=R.Create_1(yi),this.SeatCountText=R.Create_1("1"),this.SeatCount=D(r=>{let n,a=ut(r??"");if(a=="")return 1;{let o=(n=0,[Ha(a,{get:()=>n,set:s=>{n=s}}),n]);return o[0]?Ur(o[1]):1}},li().View),this.ContactFormVar=R.Create_1(tn("WebSharper support","","","","United States")),this.IsSendingVar=R.Create_1(!1),this.CanSendView=D(rg,qr().View)}}),zt=me(e=>class{static{zt=e(this)}static FreeNote;static ProNote;static FreeTotalAmount;static ProTotalAmount;static FreeTotalLabel;static ProTotalLabel;static FreePriceLabel;static ProPriceLabel;static FreePriceAmount;static ProPriceAmount;static FreeName;static ProName;static{this.ProName=D(r=>sA("Professional",r.Pro),ir().View),this.FreeName=D(r=>sA("Freelancer",r.Freelancer),ir().View),this.ProPriceAmount=Ft((r,n)=>tr(Fo(Jo(),r.Pro,n)),ir().View,Bt().View),this.FreePriceAmount=Ft((r,n)=>tr(Fo(Us(),r.Freelancer,n)),ir().View,Bt().View),this.ProPriceLabel=D(C1,Bt().View),this.FreePriceLabel=D(I1,Bt().View),this.ProTotalLabel=D(lA,Bt().View),this.FreeTotalLabel=D(lA,Bt().View),this.ProTotalAmount=ya((r,n,a)=>{let o=Ur(a);return tr(Fo(Jo(),r.Pro,n)*o)},ir().View,Bt().View,tg()),this.FreeTotalAmount=Ft((r,n)=>tr(Fo(Us(),r.Freelancer,n)),ir().View,Bt().View),this.ProNote=Ft((r,n)=>{let a=cA("pro",r,n);return dA("Assign GitHub usernames after purchase",r.Pro)+". Prices in "+a+"."},ir().View,Bt().View),this.FreeNote=Ft((r,n)=>{let a=cA("freelancer",r,n);return dA("Ideal for solo developers",r.Freelancer)+". Prices in "+a+"."},ir().View,Bt().View)}}),Ug={$:0},yi={$:1},pt=me(e=>class{static{pt=e(this)}static ContinueDisabled;static ContinueText;static VatinVar;static CompanyNameVar;static IsCompanyVar;static CountryVar;static PostalVar;static CityVar;static StreetVar;static EmailVar;static SeatsTextVar;static SelectedIntervalVar;static SelectedPlanVar;static CheckoutFormVar;static plansVar;static BackLinkLabel;static backLinkHref;static MyAccountUrl;static SupportPlansUrl;static{this.SupportPlansUrl="/support#plans",this.MyAccountUrl="/account",this.backLinkHref=R.Create_1("/support#plans"),this.BackLinkLabel=R.Create_1("Plans"),this.plansVar=R.Create_1([]),this.CheckoutFormVar=R.Create_1(_t("pro",yi,"1","","","","","HU",!1,"","")),this.SelectedPlanVar=R.Lens(It(),r=>r.plan,(r,n)=>_t(n,r.interval,r.seatsText,r.email,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.SelectedIntervalVar=R.Lens(It(),r=>r.interval,(r,n)=>_t(r.plan,n,r.seatsText,r.email,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.SeatsTextVar=R.Lens(It(),r=>r.seatsText,(r,n)=>_t(r.plan,r.interval,n,r.email,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.EmailVar=R.Lens(It(),r=>r.email,(r,n)=>_t(r.plan,r.interval,r.seatsText,n,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.StreetVar=R.Lens(It(),r=>r.street,(r,n)=>_t(r.plan,r.interval,r.seatsText,r.email,n,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.CityVar=R.Lens(It(),r=>r.city,(r,n)=>_t(r.plan,r.interval,r.seatsText,r.email,r.street,n,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.PostalVar=R.Lens(It(),r=>r.postal,(r,n)=>_t(r.plan,r.interval,r.seatsText,r.email,r.street,r.city,n,r.country,r.isCompany,r.companyName,r.vatin)),this.CountryVar=R.Lens(It(),r=>r.country,(r,n)=>_t(r.plan,r.interval,r.seatsText,r.email,r.street,r.city,r.postal,n,r.isCompany,r.companyName,r.vatin)),this.IsCompanyVar=R.Lens(It(),r=>r.isCompany,(r,n)=>_t(r.plan,r.interval,r.seatsText,r.email,r.street,r.city,r.postal,r.country,n,r.companyName,r.vatin)),this.CompanyNameVar=R.Lens(It(),r=>r.companyName,(r,n)=>_t(r.plan,r.interval,r.seatsText,r.email,r.street,r.city,r.postal,r.country,r.isCompany,n,r.vatin)),this.VatinVar=R.Lens(It(),r=>r.vatin,(r,n)=>_t(r.plan,r.interval,r.seatsText,r.email,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,n)),this.ContinueText=R.Create_1("Continue to payment"),this.ContinueDisabled=R.Create_1(!1)}}),Pg=me(e=>class{static{Pg=e(this)}static BackLinkAttr;static PaymentSectionAttr;static AuthSectionAttr;static ContinueTextView;static{this.ContinueTextView=gi().View,this.AuthSectionAttr=De("hidden",Ca()),this.PaymentSectionAttr=gt("class",D(r=>r?"":"hidden",Ca())),this.BackLinkAttr=be.Concat([gt("href",Ag().View),XA("click",()=>r=>Ve(globalThis.document.referrer)&&globalThis.history.length>1?(r.preventDefault(),globalThis.history.back()):null)])}}),Pa=me(e=>class{static{Pa=e(this)}static IsFetchingView;static IsAuthedView;static UserView;static isFetchingVar;static userVar;static API;static{this.API="https://api.websharper.io",Px("https://api.websharper.io"),this.userVar=R.Create_1(null),this.isFetchingVar=R.Create_1(!1),this.UserView=qn().View,this.IsAuthedView=D(r=>r!=null,qn().View),this.IsFetchingView=Rs().View}}),Hg=me(e=>class{static{Hg=e(this)}static IsLoading;static{this.IsLoading=R.Create_1(!0)}}),Hl=me(e=>class{static{Hl=e(this)}static FormErrorDoc;static FormError;static{this.FormError=R.Create_1(null),this.FormErrorDoc=_.BindView(r=>{if(r==null)return _.Empty;{let n=r.$0;return _.Element("div",[be.Create("class","mt-2 text-sm text-red-500 dark:text-red-400")],[_.TextNode(n)])}},zs().View)}}),St=me(e=>class{static{St=e(this)}static CountryOptionsDoc;static Total;static TotalRaw;static Taxes;static TaxesRaw;static Subtotal;static SubtotalRaw;static VatPercentage;static PriceHint;static PlanInterval;static PlanPrice;static PlanName;static IsPerSeat;static CurrentPlan;static Seats;static{this.Seats=D(ug,Ai().View),this.CurrentPlan=ya((r,n,a)=>{let o=n.toLowerCase(),s=di(a);return vi(d=>d.code.toLowerCase()==o&&String(d.interval).toLowerCase()==s,r)},gg().View,Hs().View,Mo().View),this.IsPerSeat=D(r=>r==null||r.$0.isPerSeat,ma()),this.PlanName=D(r=>{let n;return r!=null&&r.$==1&&!Ve(r.$0.name)&&(n=r.$0,!0)?n.name:Hs().Get()=="freelancer"?"Freelancer":"WebSharper Professional"},ma()),this.PlanPrice=D(r=>{let n=Mo().Get().$==1?2500:250,a=r==null?null:C(r.$0.unitAmountCents/100),o=a==null?n:a.$0;return tr(o)},ma()),this.PlanInterval=D(r=>r.$==1?"year":"month",Mo().View),this.PriceHint=Ft((r,n)=>{let a,o=r==null?null:C(r.$0.unitAmountCents/100),s=o==null?n.$==1?2500:250:o.$0,d=n.$==1?"year":"month";return r!=null&&r.$==1&&r.$0.isPerSeat&&(a=r.$0,!0)?(c=>u=>p=>c("Price is "+nn(u)+" per seat per "+nn(p)+"."))(c=>c)(tr(s))(d):(c=>u=>p=>c("Price is "+nn(u)+" per "+nn(p)+"."))(c=>c)(tr(s))(d)},ma(),Mo().View),this.VatPercentage=ya(jx,ig().View,$r().View,Sl().View),this.SubtotalRaw=ya((r,n,a)=>{let o=n?Ur(a):1,s=r==null?null:C(r.$0.unitAmountCents),d=s==null?25e4:s.$0;return o*d/100},ma(),v2(),w2()),this.Subtotal=D(tr,Ds()),this.TaxesRaw=Ft((r,n)=>Math.round(r*n/100),Ds(),y2()),this.Taxes=D(tr,gA()),this.TotalRaw=Ft((r,n)=>r+n,Ds(),gA()),this.Total=D(tr,x2()),this.CountryOptionsDoc=zg(r=>_.Element("option",[be.Create("value",r[0])],[_.TextNode(r[1])]),s0())}});function ix(e){return z(()=>Ar(z(()=>J(Bv(e),t=>t.$==1?(tA(t.$0),Z(null)):Z(C(t.$0)))),()=>(tA("Something went wrong. Please contact support or try again later."),Z(null))))}function Da(e){let t=Mt.Empty;for(let r=Ce(e)-1,n=0;r>=n;r--)t=Mt.Cons(le(e,r),t);return t}function sx(e,t){let r,n,a,o;if(t.$==0)return t;for(r=Mt.Empty,n=r,a=t,o=!0;o;){if(e(a.$0)){if(r.$==0)r=At(Mt,{$:1}),n=r;else{let d=At(Mt,{$:1});n=(n.$1=d,d)}let s=a.$0;n.$=1,n.$0=s}a=a.$1,a.$==0&&(o=!1)}return r.$!=0&&(n.$1=Mt.Empty),r}function zg(e,t){let r,n,a;if(t.$==0)return t;{let o=At(Mt,{$:1});for(r=o,n=t,a=!0;a;)if(r.$0=e(n.$0),n=n.$1,n.$==0)a=!1;else{let s=At(Mt,{$:1});r=(r.$1=s,s)}return r.$1=Mt.Empty,o}}function lx(e){return e.$==1?e.$0:Jg()}function dx(e){return e.$==1?e.$1:Jg()}function Jg(){return it("The input list was empty.")}function cx(){return{Text:globalThis.document.createTextNode(""),Dirty:!1,Value:""}}function Ax(e,t){e.Value=t,e.Dirty=!0}function gx(){return{Current:null,Dirty:!1}}function ux(e,t){e.Current=t,e.Dirty=!0}function zl(e,t){Fa(e.parentNode,t,e)}function px(e,t,r){return y0(x0(),fx(e,t,hi(),r))}function vA(e,t,r){return sl()?z(()=>{let n=k0(r),a=wx(t,n),o=mx(t,n);return J(BA(uk(a,bx(t,n))),()=>J(xA(e,t),()=>J(BA(o),()=>(t.PreviousNodes=n,Z(null)))))}):xA(e,t)}function yA(e,t,r){let n=k0(r);Ma(e,t.Top),t.PreviousNodes=n}function hx(e,t){return y0(x0(),Og(e,hi(),t))}function Fa(e,t,r){for(;;){if(t!=null&&t.$==1)return No(e,t.$0.El,r);if(t!=null&&t.$==2){let n=t.$0;n.Dirty=!1,t=n.Current}else{if(t==null)return r;if(t!=null&&t.$==4)return No(e,t.$0.Text,r);if(t!=null&&t.$==5)return No(e,t.$0,r);if(t!=null&&t.$==6)return Ul((n,a)=>(o=>s=>d=>s==null||s.constructor===Object?Fa(o,s,d):No(o,s,d))(e)(n)(a),t.$0.Els,r);{let n=t.$1;t=t.$0,r=Fa(e,n,r)}}}}function fx(e,t,r,n){let a=e.parentNode;zl(t,n);let o=ql(a,r);return dn.New(o,n,C([e,t]),a,$n(),Or(o.OnAfterRender))}function xA(e,t){if(ll()){let r=n=>{requestAnimationFrame(()=>{Ma(e,t.Top),n()})};return pi((n,a,o)=>r.apply(null,[n,a,o]))}else return Ma(e,t.Top),Z(null)}function bx(e,t){return Di(Ht(r=>Rv(r.Attr),Zl(V0(t,Wl(r=>Gv(r.Attr),e.PreviousNodes)))))}function mx(e,t){return Di(Ht(r=>_v(r.Attr),Zl(V0(e.PreviousNodes,Wl(r=>$v(r.Attr),t)))))}function wx(e,t){let r=a=>Uv(a.Attr),n=a=>Wl(r,a);return Di(Ht(a=>Pv(a.Attr),Zl(Fk(n(e.PreviousNodes),n(t)))))}function Ma(e,t){e||yx(t),jg(t.Children),Kg(t)}function Ys(e,t){Fa(e,t,null)}function vx(e,t){let r=e.parentNode,n=globalThis.document.createTextNode("");return r.insertBefore(n,e),zl(e,t),n}function Og(e,t,r){Ys(e,r);let n=ql(e,t);return dn.New(n,r,null,e,$n(),Or(n.OnAfterRender))}function No(e,t,r){return Wv(e,r,t),t}function yx(e){function t(r){function n(a){for(;;)if(a!=null&&a.$==0){let o=a.$1,s=a.$0;if(n(s))return!0;a=o}else if(a!=null&&a.$==2){let o=a.$0;if(o.Dirty)return!0;a=o.Current}else if(a!=null&&a.$==6){let o=a.$0;return o.Dirty||Pn(t,o.Holes)}else return!1}return n(r.Children)}xg(e.El,e.Attr),t(e)&&xx(e)}function jg(e){for(;;){if(e!=null&&e.$==1)return Ma(!1,e.$0);if(e!=null&&e.$==2)e=e.$0.Current;else{if(e==null)return null;if(e!=null&&e.$==5)return null;if(e!=null&&e.$==4){let t=e.$0;return t.Dirty?(t.Text.nodeValue=t.Value,t.Dirty=!1):null}else if(e!=null&&e.$==6){let t=e.$0;return Qt(r=>{Ma(!1,r)},t.Holes),Qt(r=>{xg(r[0],r[1])},t.Attrs),Kg(t)}else{let t=e.$1,r=e.$0;jg(r),e=t}}}}function Kg(e){let t=Or(e.Render);t!=null&&t.$==1&&(t.$0(e.El),Vn(e,"Render",null))}function xx(e){let t=e.El;function r(d,c){for(;;){if(d!=null&&d.$==1)return d.$0.El;if(d!=null&&d.$==2){let u=d.$0;if(u.Dirty)return u.Dirty=!1,Fa(t,u.Current,c);d=u.Current}else{if(d==null)return c;if(d!=null&&d.$==4)return d.$0.Text;if(d!=null&&d.$==5)return d.$0;if(d!=null&&d.$==6){let u=d.$0;return u.Dirty&&(u.Dirty=!1),Ul((p,g)=>p==null||p.constructor===Object?r(p,g):p,u.Els,c)}else{let u=d.$1;d=d.$0,c=r(u,c)}}}}let n=e.El;Yk(d=>{Zv(n,d)},Kk(Wk(e),jk(e.El,Or(e.Delimiters))));let a=e.Children,o=Or(e.Delimiters),s=o!=null&&o.$==1?o.$0[1]:null;r(a,s)}function Yg(e,t,r,n,a,o,s,d){return{id:e,date:t,amount:r,currency:n,status:a,subscription:o,billingAddress:s,company:d}}function rn(e,t){return{name:e,vatin:t}}function Wg(){return z(()=>J(Tl(),e=>Z(Ht(Vx,e))))}function Jl(){return z(()=>J(Ev(),e=>Z(Ht(t=>Yg(t.title,t.date,t.amount,t.currency,t.status,null,null,null),e))))}function kx(e){return z(()=>{let t=e.company,r=t==null?null:C(t.$0.name),n=e.company,a=n==null?null:C(n.$0.vatin),o=i0("",e.address.line1,e.address.city,e.address.postal_code,e.address.country,r,a),s=Qv(o);return J(s,d=>(Cl(d),hg((d.$==0&&Zg(C(e)),ne()),z(()=>Z(d.$==0)))))})}function Vx(e){return Nx(String(e.subscriptionId),(t=>r=>n=>a=>t(nn(r)+" ("+String(n)+" seats) - "+nn(a)))(t=>t)(e.planName)(e.seats)(e.currentPeriodEnd),e.planName,e.seats,e.currentPeriodEnd,e.cancelAtPeriodEnd?"canceling":"active")}function Cx(e){return z(()=>J(Dv(e),t=>(Cl(t),Z(t.$==0))))}function Zg(e){Kl.billingCache=e}function Ix(){return z(()=>kA()==null?J(vg(),e=>{let t,r;if(e!=null&&e.$==1){let n=e.$0,a=n.companyName;if(a==null)t=null;else{let o=a.$0,s=n.taxId,d=s==null?"":s.$0,c=rn(o,d);t=C(c)}r=dr(t,Gr(n.line1,n.city,n.postalCode,n.country))}else r=dr(null,Gr("","","",""));return Zg(C(r)),Z(r)}):Z(kA().$0))}function Bx(){return z(()=>J(Fv(),e=>Z(e)))}function Ex(){return Mv()}function Qx(){return z(()=>J(Tl(),e=>Z(Hy(Mx,e))))}function kA(){return Kl.billingCache}function Sx(e,t){return z(()=>J(Nv(Pk(WA(e),t)),r=>(Cl(r),Z(r.$==0))))}function Dx(e,t,r){return z(()=>Ve(r)?Z(!1):J(Lv(B0(WA(e),r,t)),n=>(Il(n,a=>{Er(a)}),Z(n.$==0))))}function Fx(e,t){return z(()=>J(Tl(),r=>{let n=vi(a=>String(a.subscriptionId)==e,r);if(n!=null&&n.$==1){let a=n.$0,o=t-1;if(o>=0&&o<Ce(a.githubAssignedNames)){let s=le(a.githubAssignedNames,o),d=s==null?"":s.$0,c=B0(a.subscriptionId,d,t),u=Tv(c);return J(u,p=>(Il(p,g=>{Er(g)}),Z(p.$==0)))}else return Z(!1)}else return Z(!1)}))}function Mx(e){return Jy((t,r)=>l0(t+1,r==null?"":r.$0,r!=null?"assigned":"available",e.currentPeriodEnd,!e.cancelAtPeriodEnd,String(e.subscriptionId)),e.githubAssignedNames)}function Nx(e,t,r,n,a,o){return{id:e,label:t,plan:r,totalSeats:n,renewsAt:a,status:o}}var pr=me(e=>class{static{pr=e(this)}static ToastText;static ToastAttr;static BillingTabAttr;static SubsTabAttr;static BillingPageAttr;static SubsPageAttr;static ToastMessage;static IsLoading;static ActivePage;static{this.ActivePage=R.Create_1(e0),this.IsLoading=R.Create_1(!1),this.ToastMessage=R.Create_1(null),this.SubsPageAttr=gt("class",D(s=>s.$===0?"space-y-6":"space-y-6 hidden",Tn().View)),this.BillingPageAttr=gt("class",D(s=>s.$===1?"space-y-6":"space-y-6 hidden",Tn().View));let r=D(s=>s.$===0,Tn().View),n=be.Concat([De("bg-gray-100",r),De("dark:bg-white/5",r)]);this.SubsTabAttr=n;let a=D(s=>s.$===1,Tn().View),o=be.Concat([De("bg-gray-100",a),De("dark:bg-white/5",a)]);this.BillingTabAttr=o,this.ToastAttr=De("hidden",D(s=>s==null,Oo().View)),this.ToastText=_.TextView(D(s=>s!=null&&s.$==1?Ve(s.$0)?"Saved":s.$0:"Saved",Oo().View))}}),Xg=me(e=>class{static{Xg=e(this)}static isLoading;static{this.isLoading=R.Create_1(!0)}}),xi=me(e=>class{static{xi=e(this)}static SeatsBody;static seatGroupsDoc;static AddSeatsButtonAttr;static{this.AddSeatsButtonAttr=gt("style",D(r=>Pn(n=>n.plan.toLowerCase().indexOf("freelancer")!=-1,r)?"display: none":"",Na().View)),this.seatGroupsDoc=_.EmbedView(Ft((r,n)=>_.Concat(Dg(a=>{let o=a[0],s=Pt(a[1]);if(Ce(s)===0)return[];{let d=vi(g=>g.id==o.toLowerCase(),n),c=d==null?!1:d.$0.plan.toLowerCase().indexOf("freelancer")!=-1,u=le(s,0).expiry,p=le(s,0).autoRenew;return gn(()=>mi([T2(o,u,p)],gn(()=>Fr(g=>q2(g,c),s))))}},Ey(a=>a.subscriptionId,By(a=>[a.expiry,a.subscriptionId,a.seatNo],r)))),La().View,Na().View)),this.SeatsBody=G2()}}),ht=me(e=>class{static{ht=e(this)}static BtnBillingCancelAttr;static BtnBillingSaveAttr;static BtnBillingEditAttr;static BillingEditAttr;static BillingViewAttr;static BillingCountryOptions;static BillingCountryView;static CountriesList;static BillingPostalView;static BillingCityView;static BillingLine1View;static BillingVatinView;static BillingNameView;static CompanyVatinVar;static CompanyNameVar;static BillingModeVar;static BillingRecordVar;static{this.BillingRecordVar=R.Create_1(dr(C(rn("","")),Gr("","","",""))),this.BillingModeVar=R.Create_1(Ii),this.CompanyNameVar=R.Lens(Ut(),r=>{let n=r.company;return n==null?"":n.$0.name},(r,n)=>{let a=r.company,o=a==null?rn(n,""):rn(n,a.$0.vatin),s=C(o);return dr(s,r.address)}),this.CompanyVatinVar=R.Lens(Ut(),r=>{let n=r.company;return n==null?"":n.$0.vatin},(r,n)=>{let a=r.company,o=a==null?rn("",n):rn(a.$0.name,n),s=C(o);return dr(s,r.address)}),this.BillingNameView=_.TextView(D(r=>{let n=r.company;return n==null?"\u2014":Mn(n.$0.name)},Ut().View)),this.BillingVatinView=_.TextView(D(r=>{let n=r.company;return n==null?"\u2014":Mn(n.$0.vatin)},Ut().View)),this.BillingLine1View=_.TextView(D(r=>Mn(r.address.line1),Ut().View)),this.BillingCityView=_.TextView(D(r=>Mn(r.address.city),Ut().View)),this.BillingPostalView=_.TextView(D(r=>Mn(r.address.postal_code),Ut().View)),this.CountriesList=s0(),this.BillingCountryView=_.TextView(D(r=>{let n=r.address.country,a=Sy(o=>o[0]==n?C(o[1]):null,uA());return a==null?Mn(n):a.$0},Ut().View)),this.BillingCountryOptions=zg(r=>_.Element("option",[be.Create("value",r[0])],[_.TextNode(r[1])]),uA()),this.BillingViewAttr=De("hidden",D(r=>r.$==1,Ln().View)),this.BillingEditAttr=De("hidden",D(r=>r.$!=1,Ln().View)),this.BtnBillingEditAttr=De("hidden",D(r=>r.$!=0,Ln().View)),this.BtnBillingSaveAttr=De("hidden",D(r=>r.$!=1,Ln().View)),this.BtnBillingCancelAttr=De("hidden",D(r=>r.$!=1,Ln().View))}}),ki=me(e=>class{static{ki=e(this)}static InvoicesBody;static invoicesDoc;static invoicesModel;static{this.invoicesModel=Wx(r=>r.id,ti().Get()),this.invoicesDoc=_.ConvertSeqBy(r=>r.id,r=>n=>dv(r,n),pg().v),this.InvoicesBody=cv()}}),Vi=me(e=>class{static{Vi=e(this)}static GitHubBody;static OrgPrefix;static GitHubOrgName;static{this.GitHubOrgName=R.Create_1(""),this.OrgPrefix="IntelliFactory-",this.GitHubBody=_.EmbedView(Ft((r,n)=>{if(Pn(a=>a.plan.toLowerCase().indexOf("freelancer")!=-1,n))return _.Empty;if(r!=null&&r.$==1){let a=r.$0,o=a.name;if(a.status=="active")if(o!=null&&o.$==1){let s=o.$0,d=new Ge("New_1"),c=(d.h.push(fe(d.k,"gotogithuborg",()=>d.i,()=>{globalThis.open("https://github.com/"+s,"_blank")})),d),u=Pe(c.k,c.h,[]),p=new Te(u[1],zm(u[0]));return(c.i=p,p).Doc}else return _.Empty;else if(o!=null&&o.$==1){let s=o.$0,d=new Ge("New_1"),c=(d.h.push(new _r("githuborgname",s)),d),u=Pe(c.k,c.h,[]),p=new Te(u[1],Jm(u[0]));return(c.i=p,p).Doc}else{let s=new Ge("New_1"),d=(s.h.push(new Oe("githuborgname",pA())),s),c=(d.h.push(fe(d.k,"setgithuborgname",()=>d.i,()=>{kt(z(()=>(Un(!0),Dr(z(()=>{let w=gv()+pA().Get();return J(Cx(w),x=>(x&&Ws().Set(C(Xx(C(w),"pending"))),ne()))}),()=>{Un(!1)}))),null)})),d),u=Pe(c.k,c.h,[["githuborgname",0,null]]),p=new Te(u[1],Om(u[0]));return(c.i=p,p).Doc}}else return _.Empty},Ws().View,Na().View))}}),e0={$:0},Lx={$:1};function t0(){return hr.CustomerPortalLinkVar}function ln(){return hr.CurrentSubIdVar}function ti(){return hr.InvoicesVar}function Ci(){return hr.BillingVar}function Tx(){return hr.UserVar}function Na(){return hr.SubsVar}function La(){return hr.SeatsVar}function Ws(){return hr.GitHubOrgVar}function qx(e,t){let r=e/100,n=t.toLowerCase();return n=="usd"?(a=>o=>a("$"+o.toFixed(2)))(a=>a)(r):n=="eur"?(a=>o=>a("\u20AC"+o.toFixed(2)))(a=>a)(r):n=="gbp"?(a=>o=>a("\xA3"+o.toFixed(2)))(a=>a)(r):(a=>o=>s=>a(o.toFixed(2)+" "+nn(s)))(a=>a)(r)(t)}function Nn(){return hr.StateVar}var Gx={$:1},Ii={$:0};function Ha(e,t){return sk(e,-2147483648,2147483647,t)}var Zs=class extends Po{isConst;current;snap;view;id;get View(){return this.view}Set(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):(Hn(this.snap),this.current=t,this.snap={s:Ei(t,[])})}Get(){return this.current}Update(t){this.Set(t(this.Get()))}UpdateMaybe(t){let r=t(this.Get());r!=null&&r.$==1&&this.Set(r.$0)}SetFinal(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):(Hn(this.snap),this.isConst=!0,this.current=t,this.snap={s:Pr(t)})}constructor(t,r,n){super(),this.isConst=t,this.current=n,this.snap=r,this.view=()=>this.snap,this.id=$n()}};function pn(e,t){return{k:e,ct:t}}function Bi(e){return{$:1,$0:e}}function Xn(e){return{$:0,$0:e}}function r0(e){return{$:2,$0:e}}var xt=class extends rt{AsyncBase(t,r){return z(()=>{let n=Jx(this.Headers),a=zx(r);return J(kv(),o=>J(pi((s,d,c)=>{let u=[!0],p=bg(o,()=>{u[0]&&(u[0]=!1,c(new ri("New",o)))});return Hx().Async(this.EndPoint+"/"+t,n,a,g=>{u[0]&&(u[0]=!1,p.Dispose(),s(g))},g=>{u[0]&&(u[0]=!1,p.Dispose(),d(g))})}),s=>Z(JSON.parse(s))))})}get EndPoint(){return Ox()}get Headers(){return[]}Async(t,r){return this.AsyncBase(t,r)}};function Rx(e,t){return{c:e,r:t}}var Xs=class extends rt{push;value;dirty;updates;get NChanged(){return this.updates}NGetExitAnim(t){return Ns()}NGetEnterAnim(t){return Ns()}NGetChangeAnim(t){return Ns()}NSync(t){this.dirty&&(this.push(t)(this.value),this.dirty=!1)}constructor(t,r){super(),this.push=r,this.value=void 0,this.dirty=!1,this.updates=D(n=>{this.value=n,this.dirty=!0},t)}};function Hn(e){let t,r=e.s;if(!(r==null||(!(r!=null&&r.$==2||r!=null&&r.$==3)||(t=r.$1,!1)))){e.s=null;for(let n=0,a=Ce(t)-1;n<=a;n++){let o=le(t,n);typeof o=="object"?(s=>{Hn(s)})(o):o()}}}var Mt=class e{static Empty=At(e,{$:0});static Cons(t,r){return At(e,{$:1,$0:t,$1:r})}GetEnumerator(){return new rr(this,null,t=>{let r=t.s;if(r.$==0)return!1;{let n=r.$1;return t.c=r.$0,t.s=n,!0}},void 0)}$;$0;$1},ea=me(e=>class{static{ea=e(this)}static GetCT;static Zero;static defCTS;static scheduler;static noneCT;static{this.noneCT=Rx(!1,[]),this.scheduler=new rl,this.defCTS=[new nl],this.Zero=Z(),this.GetCT=r=>{r.k(Xn(r.ct))}}}),dn=class e{Attr;Children;Delimiters;El;ElKey;Render;Equals(t){return this.ElKey===t.ElKey}GetHashCode(){return this.ElKey}static New(t,r,n,a,o,s){let d={Attr:t,Children:r,El:a,ElKey:o},c=(Vn(d,"Delimiters",n),Vn(d,"Render",s),d);return At(e,c)}};function Pr(e){return{$:0,$0:e}}function Ei(e,t){return{$:2,$0:e,$1:t}}function hn(e,t){return{$:3,$0:e,$1:t}}function $x(){throw new hl("New")}function _x(){throw new bl("New_2","An item with the same key has already been added.")}function Re(e){return e instanceof Array?n0(e):ce(typeof e,"string")?a0(e):e.GetEnumerator()}function n0(e){return new rr(0,null,t=>{let r=t.s;return r<Ce(e)&&(t.c=le(e,r),t.s=r+1,!0)},void 0)}function a0(e){return new rr(0,null,t=>{let r=t.s;return r<e.length&&(t.c=e[r],t.s=r+1,!0)},void 0)}function o0(e){return e instanceof Array?n0(e):ce(typeof e,"string")?a0(e):"GetEnumerator0"in e?e.GetEnumerator0():e.GetEnumerator()}var rr=class extends rt{s;c;n;d;e;MoveNext(){let t=this.n(this);return this.e=t?1:2,t}get Current(){return this.e===1?this.c:this.e===0?it("Enumeration has not started. Call MoveNext."):it("Enumeration already finished.")}Dispose(){this.d&&this.d(this)}constructor(t,r,n,a){super(),this.s=t,this.c=r,this.n=n,this.d=a,this.e=0}};function xa(e,t,r,n){return{Name:e,Description:t,Month:r,Year:n}}function el(e,t){return{Pro:e,Freelancer:t}}function va(e,t){return{Amount:e,Currency:t}}function _t(e,t,r,n,a,o,s,d,c,u,p){return{plan:e,interval:t,seatsText:r,email:n,street:a,city:o,postal:s,country:d,isCompany:c,companyName:u,vatin:p}}function Ux(e,t,r){return{plan:e,interval:t,seats:r}}function i0(e,t,r,n,a,o,s){return{email:e,line1:t,city:r,postalCode:n,country:a,companyName:o,taxId:s}}function Px(e){Si.EndPoint=e}function Hx(){return Si.AjaxProvider}function zx(e){return JSON.stringify(e)}function Jx(e){return Kw(Ht(t=>[t[0],t[1]],Oy(t=>t[0],e.concat([["content-type","application/json"]]))))}function Ox(){return Si.EndPoint}function VA(e,t,r,n,a,o,s){let d=new XMLHttpRequest,c=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");d.open("POST",t,e),e==!0&&(d.withCredentials=!0);let u;for(var p in r)d.setRequestHeader(p,r[p]);c&&d.setRequestHeader("x-csrftoken",c);function g(){if(d.status==200)a(d.responseText);else if(s&&d.status==403&&d.responseText=="CSRF")s();else{let w="Response status is not 200: ";o(new Error(w+d.status))}}"onload"in d?d.onload=d.onerror=d.onabort=g:d.onreadystatechange=()=>{d.readyState==4&&g()},d.send(n)}function nn(e){return e??""}function jx(e,t,r){let n=Kx(e),a=!Ve(r),o=Ms().ContainsKey(n);return t?n=="HU"?27:o&&a?0:o&&!a?Ms().Item(n):0:o?Ms().Item(n):0}function Kx(e){return e==null?"":ut(e).toUpperCase()}function Ms(){return v0.euVat}function s0(){return g0.List}function Yx(e,t,r,n){return{planCode:e,interval:t,seats:r,billingData:n}}function l0(e,t,r,n,a,o){return{seatNo:e,username:t,status:r,expiry:n,autoRenew:a,subscriptionId:o}}var tl=class extends rt{key;u0076ar;storage;v;it;Set(t){this.u0076ar.Set(this.storage.SSet(t)),this.ObsoleteAll()}ObsoleteAll(){wi(t=>{Hn(t.V)},this.it),this.it.Clear()}GetEnumerator(){return Re(this.u0076ar.Get())}GetEnumerator0(){return o0(this.u0076ar.Get())}constructor(t,r,n,a){let o,s;if(t=="New"&&(o=r,s=n,t="New_3",r=o,n=R.Create_1(Pt(Fg(o,s.SInit()))),a=s),t=="New_3"){let d=r,c=n,u=a;super(),this.key=d,this.u0076ar=c,this.storage=u,this.v=D(p=>p.slice(),this.u0076ar.View),this.it=new vt("New_5")}}};function Wx(e,t){return Zx(e,gk(Pt(t)))}function Zx(e,t){return new tl("New",e,t)}function Xx(e,t){return{name:e,status:t}}var hr=me(e=>class{static{hr=e(this)}static GitHubOrgVar;static CustomerPortalLinkVar;static BillingVar;static InvoicesVar;static SeatsVar;static CurrentSubIdVar;static SubsVar;static UserVar;static StateVar;static{this.StateVar=R.Create_1(Zr(null,[],"",[],[],null)),this.UserVar=R.Lens(Nn(),r=>r.user,(r,n)=>Zr(n,r.subs,r.currentSubId,r.seats,r.invoices,r.billing)),this.SubsVar=R.Lens(Nn(),r=>r.subs,(r,n)=>Zr(r.user,n,r.currentSubId,r.seats,r.invoices,r.billing)),this.CurrentSubIdVar=R.Lens(Nn(),r=>r.currentSubId,(r,n)=>Zr(r.user,r.subs,n,r.seats,r.invoices,r.billing)),this.SeatsVar=R.Lens(Nn(),r=>r.seats,(r,n)=>Zr(r.user,r.subs,r.currentSubId,n,r.invoices,r.billing)),this.InvoicesVar=R.Lens(Nn(),r=>r.invoices,(r,n)=>Zr(r.user,r.subs,r.currentSubId,r.seats,n,r.billing)),this.BillingVar=R.Lens(Nn(),r=>r.billing,(r,n)=>Zr(r.user,r.subs,r.currentSubId,r.seats,r.invoices,n)),this.CustomerPortalLinkVar=R.Create_1(null),this.GitHubOrgVar=R.Create_1(null)}}),rl=class extends rt{idle;robin;Fork(t){this.robin.push(t),this.idle&&(this.idle=!1,setTimeout(()=>{this.tick()},0))}tick(){let t=Date.now(),r=!0;for(;r;)this.robin.length===0?(this.idle=!0,r=!1):(this.robin.shift()(),Date.now()-t>40&&(setTimeout(()=>{this.tick()},0),r=!1))}constructor(){super(),this.idle=!0,this.robin=[]}},Ze=me(e=>class{static{Ze=e(this)}static FloatApplyChecked;static FloatGetChecked;static FloatSetChecked;static FloatApplyUnchecked;static FloatGetUnchecked;static FloatSetUnchecked;static IntApplyChecked;static IntGetChecked;static IntSetChecked;static IntApplyUnchecked;static IntGetUnchecked;static IntSetUnchecked;static FileApplyUnchecked;static FileGetUnchecked;static FileSetUnchecked;static DateTimeApplyUnchecked;static DateTimeGetUnchecked;static DateTimeSetUnchecked;static StringListApply;static StringListGet;static StringListSet;static StringApply;static StringGet;static StringSet;static BoolCheckedApply;static EmptyAttr;static{this.EmptyAttr=null,this.BoolCheckedApply=y=>[h=>{h.addEventListener("change",()=>y.Get()!=h.checked?y.Set(h.checked):null)},h=>V=>V!=null&&V.$==1?void(h.checked=V.$0):null,D(h=>C(h),y.View)],this.StringSet=y=>h=>{y.value=h},this.StringGet=y=>C(y.value);let r=fk(),n=hk();this.StringApply=y=>Xr(r,n,y),this.StringListSet=y=>h=>{let V=y.options;for(let I=0,B=V.length-1;I<=B;I++)(()=>{let Q=V.item(I);Q.selected=ck(Q.value,h)})()},this.StringListGet=y=>{let h=y.selectedOptions;return C(Pt(gn(()=>Dg(V=>[h.item(V).value],Gs(0,h.length-1)))))};let a=mk(),o=bk();this.StringListApply=y=>Xr(a,o,y),this.DateTimeSetUnchecked=y=>h=>{y.value=new Date(h).toLocaleString()},this.DateTimeGetUnchecked=y=>{let h,V,I=y.value;if(wa(I))return C(-864e13);{h=0;let B=Uk(I);return V=[B!=null&&B.$==1&&(h=B.$0,!0),h],V[0]?C(V[1]):null}};let s=vk(),d=wk();this.DateTimeApplyUnchecked=y=>Xr(s,d,y),this.FileSetUnchecked=()=>()=>null,this.FileGetUnchecked=y=>{let h=y.files;return C(Pt(gn(()=>Fr(V=>h.item(V),Gs(0,h.length-1)))))};let c=kk(),u=xk();this.FileApplyUnchecked=y=>yk(c,u,y),this.IntSetUnchecked=y=>h=>{y.value=String(h)},this.IntGetUnchecked=y=>{let h=y.value;if(wa(h))return C(0);{let V=+h;return V!==V>>0?null:C(V)}};let p=Ck(),g=Vk();this.IntApplyUnchecked=y=>Xr(p,g,y),this.IntSetChecked=y=>h=>{let V=h.Input;return y.value!=V?void(y.value=V):null},this.IntGetChecked=y=>{let h,V,I=y.value;if(wa(I))h=!y.checkValidity||y.checkValidity()?sr.Blank(I):sr.Invalid(I);else{let B=(V=0,[Ha(I,{get:()=>V,set:Q=>{V=Q}}),V]);h=B[0]?sr.Valid(B[1],I):sr.Invalid(I)}return C(h)};let w=Bk(),x=Ik();this.IntApplyChecked=y=>Xr(w,x,y),this.FloatSetUnchecked=y=>h=>{y.value=String(h)},this.FloatGetUnchecked=y=>{let h=y.value;if(wa(h))return C(0);{let V=+h;return isNaN(V)?null:C(V)}};let k=Qk(),m=Ek();this.FloatApplyUnchecked=y=>Xr(k,m,y),this.FloatSetChecked=y=>h=>{let V=h.Input;return y.value!=V?void(y.value=V):null},this.FloatGetChecked=y=>{let h,V=y.value;if(wa(V))h=!y.checkValidity||y.checkValidity()?sr.Blank(V):sr.Invalid(V);else{let I=+V;h=isNaN(I)?sr.Invalid(V):sr.Valid(I,V)}return C(h)};let f=Dk(),v=Sk();this.FloatApplyChecked=y=>Xr(f,v,y)}});function Hr(e,t,r){return()=>n=>{let a;if(typeof n=="object"&&n!=null){let s={};if(typeof t=="string"){let d=n[t];a=Py(c=>!ce(c,null)&&c[0]==d,r)}else{let d=[void 0],c;for(var o in t)if((u=>n.hasOwnProperty(u)&&(d[0]=t[u],!0))(o))break;a=d[0]}return s.$=a,Qt(d=>{let c=d[0],u=d[1],p=d[2],g=d[3];if(c==null){let w=p()(n);u&&delete w[t],s.$0=w;return}else return g===0?void(s[c]=p()(n[u])):g===1?void(s[c]=n.hasOwnProperty(u)?C(p()(n[u])):null):it("Invalid field option kind")},le(r,a)[1]),e===void 0?s:e(s)}else return n}}function pe(){return()=>e=>e}function Ol(e){return ek(e)}function d0(e,t){return()=>r=>{let n={};return Qt(a=>{let o=a[0],s=a[1],d=a[2];if(d===0){n[o]=s()(r[o]);return}else if(d===1){let c=r[o];return c==null?null:void(n[o]=s()(c.$0))}else return d===2?r.hasOwnProperty(o)?void(n[o]=s()(r[o])):null:d===3?r[o]===void 0?void(n[o]=s()(r[o])):null:it("Invalid field option kind")},t),n}}function ek(e){return()=>t=>Ht(e(),t)}function Qi(e,t){return()=>r=>{let n={};return Qt(a=>{let o=a[0],s=a[1],d=a[2];return d===0?r.hasOwnProperty(o)?void(n[o]=s()(r[o])):it("Missing mandatory field: "+o):d===1?void(n[o]=r.hasOwnProperty(o)?C(s()(r[o])):null):d===2?r.hasOwnProperty(o)?void(n[o]=s()(r[o])):null:d===3?r[o]===void 0?void(n[o]=s()(r[o])):null:it("Invalid field option kind")},t),e===void 0?n:e(n)}}var ri=class extends Error{ct;constructor(t,r,n,a){let o;if(t=="New"&&(o=r,t="New_1",r="The operation was canceled.",n=null,a=o),t=="New_1"){let s=r,d=n,c=a;super(s),this.inner=d,this.ct=c}}},nl=class extends rt{init;c;pending;r;constructor(){super(),this.c=!1,this.pending=null,this.r=[],this.init=1}};function c0(e,t,r,n){let a={DynElem:e,DynFlags:t,DynNodes:r};return Vn(a,"OnAfterRender",n),a}function tk(e,t){return{LeftPx:e,WidthPx:t}}var al=class extends Error{reason;constructor(t){super("Promise rejected"),this.reason=t}},ta=me(e=>class{static{ta=e(this)}static defaultWrap;static wrapMap;static rhtml;static rtagName;static rxhtmlTag;static{this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>","gi"),this.rtagName=new RegExp("<([\\w:]+)"),this.rhtml=new RegExp("<|&#?\\w+;");let r=[1,"<table>","</table>"],n=Object.fromEntries([["option",[1,"<select multiple='multiple'>","</select>"]],["legend",[1,"<fieldset>","</fieldset>"]],["area",[1,"<map>","</map>"]],["param",[1,"<object>","</object>"]],["thead",r],["tbody",r],["tfoot",r],["tr",[2,"<table><tbody>","</tbody></table>"]],["col",[2,"<table><colgroup>","</colgoup></table>"]],["td",[3,"<table><tbody><tr>","</tr></tbody></table>"]]]);this.wrapMap=n,this.defaultWrap=[0,"",""]}});function rk(e){let t=null,r=0,n=e.textContent,a=new RegExp(Sa(),"g");for(;t=a.exec(n),t!==null;){e.parentNode.insertBefore(globalThis.document.createTextNode(Br(n,C(r),C(a.lastIndex-le(t,0).length-1))),e),r=a.lastIndex;let o=globalThis.document.createElement("span");o.setAttribute("ws-replace",le(t,1).toLowerCase()),e.parentNode.insertBefore(o,e)}a.lastIndex=0,e.textContent=Br(n,C(r),null)}function CA(e){console.warn("Instantiating non-loaded template",e)}function nk(e,t,r){let n=e.querySelector("[ws-replace]");return ce(n,null)?(console.warn("Filling non-existent text hole",r),null):(n.parentNode.replaceChild(globalThis.document.createTextNode(t),n),C(n.getAttribute("ws-replace")))}function ak(e,t){let r=n=>{wt(e,"["+n+"]",a=>{t.Contains(a.getAttribute(n))||a.removeAttribute(n)})};r("ws-attr"),r("ws-onafterrender"),r("ws-var"),wt(e,"[ws-hole]",n=>{if(!t.Contains(n.getAttribute("ws-hole")))for(n.removeAttribute("ws-hole");n.hasChildNodes();)n.removeChild(n.lastChild)}),wt(e,"[ws-replace]",n=>{t.Contains(n.getAttribute("ws-replace"))||n.parentNode.removeChild(n)}),wt(e,"[ws-on]",n=>{n.setAttribute("ws-on",An(" ",_a(a=>t.Contains(le(cr(a,[":"],1),1)),cr(n.getAttribute("ws-on"),[" "],1))))}),wt(e,"[ws-attr-holes]",n=>{let a=cr(n.getAttribute("ws-attr-holes"),[" "],1);for(let o=0,s=a.length-1;o<=s;o++){let d=le(a,o),c=new RegExp(Sa(),"g"),u=n.getAttribute(d).replace(c,(p,g)=>t.Contains(g)?p:"");n.setAttribute(d,u)}})}function ok(e,t){A0(t);let r=t.nodeName.toLowerCase(),n=e.querySelector("[ws-attr="+r+"]");if(ce(n,null))console.warn("Filling non-existent attr hole",r);else{n.removeAttribute("ws-attr");for(let a=0,o=t.attributes.length-1;a<=o;a++){let s=t.attributes.item(a);s.name=="class"&&n.hasAttribute("class")?n.setAttribute("class",n.getAttribute("class")+" "+s.nodeValue):n.setAttribute(s.name,s.nodeValue)}}}function ik(e,t){let r=n=>{wt(e,"["+n+"]",a=>{let o,s=(o=null,[t.TryGetValue(a.getAttribute(n).toLowerCase(),{get:()=>o,set:d=>{o=d}}),o]);s[0]&&a.setAttribute(n,s[1])})};r("ws-hole"),r("ws-replace"),r("ws-attr"),r("ws-onafterrender"),r("ws-var"),wt(e,"[ws-on]",n=>{n.setAttribute("ws-on",An(" ",Ht(a=>{let o,s=cr(a,[":"],1),d=(o=null,[t.TryGetValue(le(s,1),{get:()=>o,set:c=>{o=c}}),o]);return d[0]?le(s,0)+":"+d[1]:a},cr(n.getAttribute("ws-on"),[" "],1))))}),wt(e,"[ws-attr-holes]",n=>{let a=cr(n.getAttribute("ws-attr-holes"),[" "],1);for(let o=0,s=a.length-1;o<=s;o++)(()=>{let d=le(a,o);return n.setAttribute(d,My((c,u)=>{let p=en(u);return c.replace(new RegExp("\\${"+p[0]+"}","ig"),"${"+p[1]+"}")},n.getAttribute(d),t))})()})}function IA(e,t,r){for(;;)if(e.hasChildNodes())r=t.insertBefore(e.lastChild,r);else return null}function A0(e){let t=e.attributes,r=[],n=[],a=[];for(let s=0,d=t.length-1;s<=d;s++){let c=t.item(s);if(Ko(c.nodeName,"ws-on")&&c.nodeName!="ws-onafterrender"&&c.nodeName!="ws-on")r.push(c.nodeName),n.push(Br(c.nodeName,C(5),null)+":"+c.nodeValue.toLowerCase());else if(!Ko(c.nodeName,"ws-")&&new RegExp(Sa()).test(c.nodeValue)){let u=new RegExp(Sa(),"g"),p=c.nodeValue.replace(u,(g,w)=>"${"+w.toLowerCase()+"}");c.nodeValue=p,a.push(c.nodeName)}}n.length!=0&&e.setAttribute("ws-on",An(" ",n)),a.length!=0&&e.setAttribute("ws-attr-holes",An(" ",a));let o=s=>{let d=e.getAttribute(s);d==null||e.setAttribute(s,d.toLowerCase())};o("ws-hole"),o("ws-replace"),o("ws-attr"),o("ws-onafterrender"),o("ws-var"),Qt(s=>{e.removeAttribute(s)},r)}function Br(e,t,r){if(t==null)if(r!=null&&r.$==1){let n=r.$0;return n<0?"":e.slice(0,n+1)}else return"";else{if(r==null)return e.slice(t.$0);{let n=r.$0,a=t.$0;return n<0?"":e.slice(a,n+1)}}}var jl=me(e=>class{static{jl=e(this)}static counter;static{this.counter=0}});function sk(e,t,r,n){let a=+e,o=a===a-a%1&&a>=t&&a<=r;return o&&n.set(a),o}var Si=me(e=>class{static{Si=e(this)}static AjaxProvider;static EndPoint;static{this.EndPoint=globalThis.location.origin,this.AjaxProvider=new dl}}),g0=me(e=>class{static{g0=e(this)}static List;static{this.List=Da([["AF","Afghanistan"],["AL","Albania"],["DZ","Algeria"],["AD","Andorra"],["AO","Angola"],["AG","Antigua and Barbuda"],["AR","Argentina"],["AM","Armenia"],["AU","Australia"],["AT","Austria"],["AZ","Azerbaijan"],["BS","Bahamas"],["BH","Bahrain"],["BD","Bangladesh"],["BB","Barbados"],["BY","Belarus"],["BE","Belgium"],["BZ","Belize"],["BJ","Benin"],["BT","Bhutan"],["BO","Bolivia"],["BA","Bosnia and Herzegovina"],["BW","Botswana"],["BR","Brazil"],["BN","Brunei"],["BG","Bulgaria"],["BF","Burkina Faso"],["BI","Burundi"],["KH","Cambodia"],["CM","Cameroon"],["CA","Canada"],["CV","Cape Verde"],["CF","Central African Republic"],["TD","Chad"],["CL","Chile"],["CN","China"],["CO","Colombia"],["KM","Comoros"],["CG","Congo"],["CR","Costa Rica"],["HR","Croatia"],["CU","Cuba"],["CY","Cyprus"],["CZ","Czech Republic"],["DK","Denmark"],["DJ","Djibouti"],["DM","Dominica"],["DO","Dominican Republic"],["EC","Ecuador"],["EG","Egypt"],["SV","El Salvador"],["GQ","Equatorial Guinea"],["ER","Eritrea"],["EE","Estonia"],["SZ","Eswatini"],["ET","Ethiopia"],["FJ","Fiji"],["FI","Finland"],["FR","France"],["GA","Gabon"],["GM","Gambia"],["GE","Georgia"],["DE","Germany"],["GH","Ghana"],["GR","Greece"],["GD","Grenada"],["GT","Guatemala"],["GN","Guinea"],["GW","Guinea-Bissau"],["GY","Guyana"],["HT","Haiti"],["HN","Honduras"],["HU","Hungary"],["IS","Iceland"],["IN","India"],["ID","Indonesia"],["IR","Iran"],["IQ","Iraq"],["IE","Ireland"],["IL","Israel"],["IT","Italy"],["JM","Jamaica"],["JP","Japan"],["JO","Jordan"],["KZ","Kazakhstan"],["KE","Kenya"],["KI","Kiribati"],["KW","Kuwait"],["KG","Kyrgyzstan"],["LA","Laos"],["LV","Latvia"],["LB","Lebanon"],["LS","Lesotho"],["LR","Liberia"],["LY","Libya"],["LI","Liechtenstein"],["LT","Lithuania"],["LU","Luxembourg"],["MG","Madagascar"],["MW","Malawi"],["MY","Malaysia"],["MV","Maldives"],["ML","Mali"],["MT","Malta"],["MH","Marshall Islands"],["MR","Mauritania"],["MU","Mauritius"],["MX","Mexico"],["FM","Micronesia"],["MD","Moldova"],["MC","Monaco"],["MN","Mongolia"],["ME","Montenegro"],["MA","Morocco"],["MZ","Mozambique"],["MM","Myanmar"],["NA","Namibia"],["NR","Nauru"],["NP","Nepal"],["NL","Netherlands"],["NZ","New Zealand"],["NI","Nicaragua"],["NE","Niger"],["NG","Nigeria"],["KP","North Korea"],["MK","North Macedonia"],["NO","Norway"],["OM","Oman"],["PK","Pakistan"],["PW","Palau"],["PS","Palestine"],["PA","Panama"],["PG","Papua New Guinea"],["PY","Paraguay"],["PE","Peru"],["PH","Philippines"],["PL","Poland"],["PT","Portugal"],["QA","Qatar"],["RO","Romania"],["RU","Russia"],["RW","Rwanda"],["KN","Saint Kitts and Nevis"],["LC","Saint Lucia"],["VC","Saint Vincent and the Grenadines"],["WS","Samoa"],["SM","San Marino"],["ST","Sao Tome and Principe"],["SA","Saudi Arabia"],["SN","Senegal"],["RS","Serbia"],["SC","Seychelles"],["SL","Sierra Leone"],["SG","Singapore"],["SK","Slovakia"],["SI","Slovenia"],["SB","Solomon Islands"],["SO","Somalia"],["ZA","South Africa"],["KR","South Korea"],["SS","South Sudan"],["ES","Spain"],["LK","Sri Lanka"],["SD","Sudan"],["SR","Suriname"],["SE","Sweden"],["CH","Switzerland"],["SY","Syria"],["TW","Taiwan"],["TJ","Tajikistan"],["TZ","Tanzania"],["TH","Thailand"],["TL","Timor-Leste"],["TG","Togo"],["TO","Tonga"],["TT","Trinidad and Tobago"],["TN","Tunisia"],["TR","Turkey"],["TM","Turkmenistan"],["TV","Tuvalu"],["UG","Uganda"],["UA","Ukraine"],["AE","United Arab Emirates"],["GB","United Kingdom"],["US","United States"],["UY","Uruguay"],["UZ","Uzbekistan"],["VU","Vanuatu"],["VA","Vatican City"],["VE","Venezuela"],["VN","Vietnam"],["YE","Yemen"],["ZM","Zambia"],["ZW","Zimbabwe"]])}});function lk(e,t){let r=new vt("New_5"),n=[];for(let a=0,o=Ce(t)-1;a<=o;a++){let s=t[a],d=e(s);r.ContainsKey(d)?r.Item(d).push(s):(n.push(d),r.DAdd(d,[s]))}return u0(a=>[a,r.Item(a)],n),n}function dk(e,t){for(let r=0,n=t.length-1;r<=n;r++)t[r]=e(r,t[r]);return t}function u0(e,t){for(let r=0,n=t.length-1;r<=n;r++)t[r]=e(t[r])}function ck(e,t){let r=!0,n=0,a=Ce(t);for(;r&&n<a;)ce(t[n],e)?r=!1:n=n+1;return!r}function ol(){return it("The input sequence has an insufficient number of elements.")}function Ak(){return it("The input must be non-negative.")}function gk(e){return new cl(e)}var il=class{toString(){return this=="active"?"active":"pending"}$},_r=class e extends yt{name;fillWith;get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}get Value(){return this.fillWith}get AsChoiceView(){return Xl(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function Zr(e,t,r,n,a,o){return{user:e,subs:t,currentSubId:r,seats:n,invoices:a,billing:o}}var Kl=me(e=>class{static{Kl=e(this)}static billingCache;static{this.billingCache=null}});function sl(){return Mk()}function BA(e){return z(()=>J(pk(()=>{},Nk(e)),()=>(Lk(e),Z(null))))}function uk(e,t){return Yl(Q0(e.$0,t.$0))}function pk(e,t){let r=t.Duration;if(r===0)return ne();{let n=a=>{function o(s){return d=>{let c=d-s;return t.Compute(c),e(),c<=r?void requestAnimationFrame(u=>{o(s)(u)}):a()}}requestAnimationFrame(s=>{o(s)(s)})};return pi((a,o,s)=>n.apply(null,[a,o,s]))}}function Yl(e){return{$:0,$0:e}}function Di(e){return Yl(Hk(Fr(qk,e)))}function Ns(){return Yl(D0())}function ll(){return I0.BatchUpdatesEnabled}function EA(e){let t=[0];function r(){return z(()=>J(e,()=>{let n=t[0];return ce(n,1)?(t[0]=0,ne()):ce(n,2)?(t[0]=1,r()):ne()}))}return()=>{let n=t[0];ce(n,0)?(t[0]=1,xv(r(),null)):ce(n,1)&&(t[0]=2)}}var zr=me(e=>class{static{zr=e(this)}static RenderedFullDocTemplate;static TextHoleRE;static GlobalHoles;static LocalTemplatesLoaded;static LoadedTemplates;static{this.LoadedTemplates=new vt("New_5"),this.LocalTemplatesLoaded=!1,this.GlobalHoles=new vt("New_5"),this.TextHoleRE="\\${([^}]+)}",this.RenderedFullDocTemplate=null}}),Ta=class e extends _{docNode_1;updates_1;elt;rvUpdates;static TreeNode(t,r){let n=ni.Create(r),a=Qg(t),o=Ht(c=>js(c[1]),t.Attrs),s=$a(Kt(),Rn,o),d=Rn(s,n.v);return new e(a,d,le(t.Els,0),n)}static New(t,r,n){let a=Og(t,r,n.docNode),o=ni.Create(n.updates);return new e(vy(a),Rn(js(a.Attr),o.v),t,o)}constructor(t,r,n,a){super(t,r),this.docNode_1=t,this.updates_1=r,this.elt=n,this.rvUpdates=a}};function Xr(e,t,r){let n;return n=null,[a=>{let o=()=>{r.UpdateMaybe(s=>{let d;return n=e(a),n!=null&&n.$==1&&!ce(n.$0,s)&&(d=[n,n.$0],!0)?d[0]:null})};a.addEventListener("change",o),a.addEventListener("input",o),a.addEventListener("keypress",o)},a=>{let o=t(a);return s=>s==null?null:o(s.$0)},D(a=>{let o;return n!=null&&n.$==1&&ce(n.$0,a)&&(o=n.$0,!0)?null:C(a)},r.View)]}function hk(){return Ze.StringSet}function fk(){return Ze.StringGet}function bk(){return Ze.StringListSet}function mk(){return Ze.StringListGet}function wk(){return Ze.DateTimeSetUnchecked}function vk(){return Ze.DateTimeGetUnchecked}function yk(e,t,r){let n;return n=null,[a=>{a.addEventListener("change",()=>{r.UpdateMaybe(o=>{let s;return n=e(a),n!=null&&n.$==1&&n.$0!==o&&(s=[n,n.$0],!0)?s[0]:null})})},a=>{let o=t(a);return s=>s==null?null:o(s.$0)},D(a=>{let o;return n!=null&&n.$==1&&ce(n.$0,a)&&(o=n.$0,!0)?null:C(a)},r.View)]}function xk(){return Ze.FileSetUnchecked}function kk(){return Ze.FileGetUnchecked}function Vk(){return Ze.IntSetUnchecked}function Ck(){return Ze.IntGetUnchecked}function Ik(){return Ze.IntSetChecked}function Bk(){return Ze.IntGetChecked}function Ek(){return Ze.FloatSetUnchecked}function Qk(){return Ze.FloatGetUnchecked}function Sk(){return Ze.FloatSetChecked}function Dk(){return Ze.FloatGetChecked}function p0(){return Ze.StringApply}function h0(){return Ze.FloatApplyUnchecked}function f0(){return Ze.BoolCheckedApply}function b0(){return Ze.DateTimeApplyUnchecked}function m0(){return Ze.FileApplyUnchecked}function w0(){return Ze.StringListApply}function wa(e){return ky(_k,e)}var sr=class e{get Input(){return this.$==1?this.$0:this.$==2?this.$0:this.$1}static Blank(t){return At(e,{$:2,$0:t})}static Invalid(t){return At(e,{$:1,$0:t})}static Valid(t,r){return At(e,{$:0,$0:t,$1:r})}$;$0;$1},dl=class extends rt{Async(t,r,n,a,o){VA(!0,t,r,n,a,o,()=>{VA(!0,t,r,n,a,o,void 0)})}},v0=me(e=>class{static{v0=e(this)}static euVat;static{this.euVat=Zb([["AT",20],["BE",21],["BG",20],["HR",25],["CY",19],["CZ",21],["DK",25],["EE",22],["FI",24],["FR",20],["DE",19],["GR",24],["HU",27],["IE",23],["IT",22],["LV",21],["LT",21],["LU",17],["MT",18],["NL",21],["PL",23],["PT",23],["RO",19],["SK",20],["SI",22],["ES",21],["SE",25]])}}),zn=class e{static FromString(t){return t.toLowerCase()=="assigned"?e.Assigned:e.Unassigned}get AsString(){return this.$==1?"unassigned":"assigned"}static Assigned=At(e,{$:0});static Unassigned=At(e,{$:1});$},cl=class extends rt{init;SSet(t){return Pt(t)}SInit(){return this.init}constructor(t){super(),this.init=t}};function y0(e,t){return{PreviousNodes:e,Top:t}}function x0(){return za(new Zt("New_3"))}function k0(e){let t=[];function r(o,s){for(;;)switch(o){case 0:if(s!=null&&s.$==0){let d=s.$1,c=s.$0;r(0,c),s=d}else if(s!=null&&s.$==1)s=s.$0,o=1;else if(s!=null&&s.$==2)s=s.$0.Current;else if(s!=null&&s.$==6){let d=s.$0.Holes;return(c=>u=>{Qt(c,u)})(a)(d)}else return null;break;case 1:t.push(s),s=s.Children,o=0;break}}function n(o){return r(0,o)}function a(o){return r(1,o)}return n(e),za(new Zt("New_2",t))}function za(e){return{$:0,$0:e}}function Wl(e,t){return za(zk(e,t.$0))}function V0(e,t){return za(Jk(e.$0,t.$0))}function Zl(e){return Jn(e.$0)}function Fk(e,t){return za(Ok(e.$0,t.$0))}function Mk(){return E0.UseAnimations}function Nk(e){return Tk($l(t=>t.$==1?C(t.$0):null,S0(e.$0)))}function Lk(e){Qt(t=>{t.$==0&&t.$0()},S0(e.$0))}function Tk(e){let t=Ra(e),r=Ce(t);if(r===0)return Gk();if(r===1)return le(t,0);{let n=Gy(Fr(o=>o.Duration,t)),a=Ht(o=>Rk(n,o),t);return C0(n,o=>{Qt(s=>{s.Compute(o)},a)})}}function qk(e){return e.$0}function Gk(e){return C0(0,()=>e)}function C0(e,t){return{Compute:t,Duration:e}}function Rk(e,t){let r=t.Compute,n=t.Duration,a=Zk(()=>t.Compute(t.Duration));return{Compute:o=>o>=n?a.f():r(o),Duration:e}}var I0=me(e=>class{static{I0=e(this)}static BatchUpdatesEnabled;static{this.BatchUpdatesEnabled=!0}});function Ls(e){let t=[],r;for(var n in e)t.push.apply(t,e[n]);return t}var Al=class e extends yt{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},gl=class e extends yt{name;fillWith;get Value(){return this.fillWith}get Name(){return this.name}WithName(t){return new e(t,this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}};function Xl(e){return{$:0,$0:e}}function fn(e){return{$:1,$0:e}}var ni=class e{c;s;v;static Create(t){let r;return r=null,r=e.New(t,null,()=>{let n;return n=r.s,n===null&&(n=gy(r.c()),r.s=n,Bg(n,()=>{r.s=null})),n}),r}static New(t,r,n){return At(e,{c:t,s:r,v:n})}},ul=class extends rt{d;GetEnumerator(){return Re(Fr(t=>t.V,this.d))}constructor(t){super(),this.d=t}};function $k(e){e.splice(0,Ce(e))}function _k(e){return e.match(new RegExp("\\s"))!==null}function Uk(e){let t=Date.parse(e);return isNaN(t)?null:C(t)}var pl=class extends rt{d;GetEnumerator(){return Re(Fr(t=>t.K,this.d))}constructor(t){super(),this.d=t}};function Pk(e,t){return{subscriptionId:e,cancelAtPeriodEnd:t}}function B0(e,t,r){return{subscriptionId:e,githubAssignedName:t,position:r}}var E0=me(e=>class{static{E0=e(this)}static UseAnimations;static CubicInOut;static{this.CubicInOut=fl.Custom(r=>{let n=r*r;return 3*n-2*(n*r)}),this.UseAnimations=!0}});function Q0(e,t){return e.$==0?t:t.$==0?e:{$:2,$0:e,$1:t}}function S0(e){let t=[];function r(n){for(;;){if(n.$==1)return t.push(n.$0);if(n.$==2){let a=n.$1,o=n.$0;r(o),n=a}else return n.$==3?Qt(a=>{t.push(a)},n.$0):null}}return r(e),t.slice(0)}function Hk(e){let t=Ra(e);return $a(D0(),Q0,t)}function D0(){return F0.Empty}var hl=class extends Error{constructor(t,r){if(t=="New"&&(t="New_1",r="The given key was not present in the dictionary."),t=="New_1"){let n=r;super(n)}}},fl=class e extends rt{transformTime;static Custom(t){return new e(t)}constructor(t){super(),this.transformTime=t}};function zk(e,t){return new Zt("New_2",_a(e,Jn(t)))}function Jk(e,t){let r=new Zt("New_2",Jn(t));return r.ExceptWith(Jn(e)),r}function Jn(e){let t=jy(e.Count,void 0);return e.CopyTo(t,0),t}function Ok(e,t){let r=new Zt("New_2",Jn(e));return r.IntersectWith(Jn(t)),r}function ra(e,t,r){let n=e(t);n[0](r),Ho(n[1](r),n[2])}var bl=class extends Error{constructor(t,r){if(t=="New_2"){let n=r;super(n)}}};function jk(e,t){let r;if(t!=null&&t.$==1){let n=t.$0[1],a=t.$0[0],o=[];for(r=a.nextSibling;r!==n;)o.push(r),r=r.nextSibling;return ai(o)}else{let n=e.childNodes.length,a=e.childNodes,o=Ky(n,s=>a[s]);return ai(o)}}function Kk(e,t){let r=e.$0;return ai(_a(n=>Lg(a=>n!==a,r),t.$0))}function Yk(e,t){Qt(e,t.$0)}function Wk(e){let t=[];function r(n){for(;;)if(n!=null&&n.$==2)n=n.$0.Current;else{if(n!=null&&n.$==1)return t.push(n.$0.El);if(n==null)return null;if(n!=null&&n.$==5)return t.push(n.$0);if(n!=null&&n.$==4)return t.push(n.$0.Text);if(n!=null&&n.$==6){let a=n.$0.Els;return(o=>s=>{Qt(o,s)})(o=>{o==null||o.constructor===Object?r(o):t.push(o)})(a)}else{let a=n.$1,o=n.$0;r(o),n=a}}}return r(e.Children),ai(Ra(t))}function ai(e){return{$:0,$0:e}}var oi=class extends Error{constructor(t,r){if(t=="New_1"){let n=r;super(n)}}};function Zk(e){return t3(!1,e,Xk)}function Xk(){let e=this.v();return this.c=!0,this.v=e,this.f=e3,e}function e3(){return this.v}var F0=me(e=>class{static{F0=e(this)}static Empty;static{this.Empty={$:0}}});function t3(e,t,r){return{c:e,v:t,f:r}}return rh(r3);})();
/*! Bundled license information:

sweetalert2/dist/sweetalert2.all.js:
  (*!
  * sweetalert2 v11.26.3
  * Released under the MIT License.
  *)

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
