var wsbundle=(()=>{var pp=Object.create;var Yn=Object.defineProperty;var gp=Object.getOwnPropertyDescriptor;var hp=Object.getOwnPropertyNames;var bp=Object.getPrototypeOf,wp=Object.prototype.hasOwnProperty;var Es=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),fp=(e,t)=>{for(var r in t)Yn(e,r,{get:t[r],enumerable:!0})},Vs=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of hp(t))!wp.call(e,a)&&a!==r&&Yn(e,a,{get:()=>t[a],enumerable:!(n=gp(t,a))||n.enumerable});return e};var Bs=(e,t,r)=>(r=e!=null?pp(bp(e)):{},Vs(t||!e||!e.__esModule?Yn(r,"default",{value:e,enumerable:!0}):r,e)),mp=e=>Vs(Yn({},"__esModule",{value:!0}),e);var Ms=Es((Fx,Jn)=>{var yp=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var z=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,n={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function k(v){return v instanceof s?new s(v.type,k(v.content),v.alias):Array.isArray(v)?v.map(k):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(k){return Object.prototype.toString.call(k).slice(8,-1)},objId:function(k){return k.__id||Object.defineProperty(k,"__id",{value:++r}),k.__id},clone:function k(v,S){S=S||{};var y,b;switch(a.util.type(v)){case"Object":if(b=a.util.objId(v),S[b])return S[b];y={},S[b]=y;for(var C in v)v.hasOwnProperty(C)&&(y[C]=k(v[C],S));return y;case"Array":return b=a.util.objId(v),S[b]?S[b]:(y=[],S[b]=y,v.forEach(function($,_){y[_]=k($,S)}),y);default:return v}},getLanguage:function(k){for(;k;){var v=t.exec(k.className);if(v)return v[1].toLowerCase();k=k.parentElement}return"none"},setLanguage:function(k,v){k.className=k.className.replace(RegExp(t,"gi"),""),k.classList.add("language-"+v)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT"&&1<2)return document.currentScript;try{throw new Error}catch(y){var k=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(y.stack)||[])[1];if(k){var v=document.getElementsByTagName("script");for(var S in v)if(v[S].src==k)return v[S]}return null}},isActive:function(k,v,S){for(var y="no-"+v;k;){var b=k.classList;if(b.contains(v))return!0;if(b.contains(y))return!1;k=k.parentElement}return!!S}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(k,v){var S=a.util.clone(a.languages[k]);for(var y in v)S[y]=v[y];return S},insertBefore:function(k,v,S,y){y=y||a.languages;var b=y[k],C={};for(var $ in b)if(b.hasOwnProperty($)){if($==v)for(var _ in S)S.hasOwnProperty(_)&&(C[_]=S[_]);S.hasOwnProperty($)||(C[$]=b[$])}var E=y[k];return y[k]=C,a.languages.DFS(a.languages,function(L,G){G===E&&L!=k&&(this[L]=C)}),C},DFS:function k(v,S,y,b){b=b||{};var C=a.util.objId;for(var $ in v)if(v.hasOwnProperty($)){S.call(v,$,v[$],y||$);var _=v[$],E=a.util.type(_);E==="Object"&&!b[C(_)]?(b[C(_)]=!0,k(_,S,null,b)):E==="Array"&&!b[C(_)]&&(b[C(_)]=!0,k(_,S,$,b))}}},plugins:{},highlightAll:function(k,v){a.highlightAllUnder(document,k,v)},highlightAllUnder:function(k,v,S){var y={callback:S,container:k,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),a.hooks.run("before-all-elements-highlight",y);for(var b=0,C;C=y.elements[b++];)a.highlightElement(C,v===!0,y.callback)},highlightElement:function(k,v,S){var y=a.util.getLanguage(k),b=a.languages[y];a.util.setLanguage(k,y);var C=k.parentElement;C&&C.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(C,y);var $=k.textContent,_={element:k,language:y,grammar:b,code:$};function E(G){_.highlightedCode=G,a.hooks.run("before-insert",_),_.element.innerHTML=_.highlightedCode,a.hooks.run("after-highlight",_),a.hooks.run("complete",_),S&&S.call(_.element)}if(a.hooks.run("before-sanity-check",_),C=_.element.parentElement,C&&C.nodeName.toLowerCase()==="pre"&&!C.hasAttribute("tabindex")&&C.setAttribute("tabindex","0"),!_.code){a.hooks.run("complete",_),S&&S.call(_.element);return}if(a.hooks.run("before-highlight",_),!_.grammar){E(a.util.encode(_.code));return}if(v&&e.Worker){var L=new Worker(a.filename);L.onmessage=function(G){E(G.data)},L.postMessage(JSON.stringify({language:_.language,code:_.code,immediateClose:!0}))}else E(a.highlight(_.code,_.grammar,_.language))},highlight:function(k,v,S){var y={code:k,grammar:v,language:S};if(a.hooks.run("before-tokenize",y),!y.grammar)throw new Error('The language "'+y.language+'" has no grammar.');return y.tokens=a.tokenize(y.code,y.grammar),a.hooks.run("after-tokenize",y),s.stringify(a.util.encode(y.tokens),y.language)},tokenize:function(k,v){var S=v.rest;if(S){for(var y in S)v[y]=S[y];delete v.rest}var b=new p;return h(b,b.head,k),c(k,b,v,b.head,0),u(b)},hooks:{all:{},add:function(k,v){var S=a.hooks.all;S[k]=S[k]||[],S[k].push(v)},run:function(k,v){var S=a.hooks.all[k];if(!(!S||!S.length))for(var y=0,b;b=S[y++];)b(v)}},Token:s};e.Prism=a;function s(k,v,S,y){this.type=k,this.content=v,this.alias=S,this.length=(y||"").length|0}s.stringify=function k(v,S){if(typeof v=="string")return v;if(Array.isArray(v)){var y="";return v.forEach(function(E){y+=k(E,S)}),y}var b={type:v.type,content:k(v.content,S),tag:"span",classes:["token",v.type],attributes:{},language:S},C=v.alias;C&&(Array.isArray(C)?Array.prototype.push.apply(b.classes,C):b.classes.push(C)),a.hooks.run("wrap",b);var $="";for(var _ in b.attributes)$+=" "+_+'="'+(b.attributes[_]||"").replace(/"/g,"&quot;")+'"';return"<"+b.tag+' class="'+b.classes.join(" ")+'"'+$+">"+b.content+"</"+b.tag+">"};function l(k,v,S,y){k.lastIndex=v;var b=k.exec(S);if(b&&y&&b[1]){var C=b[1].length;b.index+=C,b[0]=b[0].slice(C)}return b}function c(k,v,S,y,b,C){for(var $ in S)if(!(!S.hasOwnProperty($)||!S[$])){var _=S[$];_=Array.isArray(_)?_:[_];for(var E=0;E<_.length;++E){if(C&&C.cause==$+","+E)return;var L=_[E],G=L.inside,K=!!L.lookbehind,q=!!L.greedy,I=L.alias;if(q&&!L.pattern.global){var re=L.pattern.toString().match(/[imsuy]*$/)[0];L.pattern=RegExp(L.pattern.source,re+"g")}for(var fe=L.pattern||L,W=y.next,Q=b;W!==v.tail&&!(C&&Q>=C.reach);Q+=W.value.length,W=W.next){var pe=W.value;if(v.length>k.length)return;if(!(pe instanceof s)){var Ce=1,Z;if(q){if(Z=l(fe,Q,k,K),!Z||Z.index>=k.length)break;var se=Z.index,me=Z.index+Z[0].length,oe=Q;for(oe+=W.value.length;se>=oe;)W=W.next,oe+=W.value.length;if(oe-=W.value.length,Q=oe,W.value instanceof s)continue;for(var ke=W;ke!==v.tail&&(oe<me||typeof ke.value=="string");ke=ke.next)Ce++,oe+=ke.value.length;Ce--,pe=k.slice(Q,oe),Z.index-=Q}else if(Z=l(fe,0,pe,K),!Z)continue;var se=Z.index,Se=Z[0],Ee=pe.slice(0,se),De=pe.slice(se+Se.length),Oe=Q+pe.length;C&&Oe>C.reach&&(C.reach=Oe);var lt=W.prev;Ee&&(lt=h(v,lt,Ee),Q+=Ee.length),w(v,lt,Ce);var Nt=new s($,G?a.tokenize(Se,G):Se,I,Se);if(W=h(v,lt,Nt),De&&h(v,W,De),Ce>1){var Qe={cause:$+","+E,reach:Oe};c(k,v,S,W.prev,Q,Qe),C&&Qe.reach>C.reach&&(C.reach=Qe.reach)}}}}}}function p(){var k={value:null,prev:null,next:null},v={value:null,prev:k,next:null};k.next=v,this.head=k,this.tail=v,this.length=0}function h(k,v,S){var y=v.next,b={value:S,prev:v,next:y};return v.next=b,y.prev=b,k.length++,b}function w(k,v,S){for(var y=v.next,b=0;b<S&&y!==k.tail;b++)y=y.next;v.next=y,y.prev=v,k.length-=b}function u(k){for(var v=[],S=k.head.next;S!==k.tail;)v.push(S.value),S=S.next;return v}if(!e.document)return e.addEventListener&&(a.disableWorkerMessageHandler||e.addEventListener("message",function(k){var v=JSON.parse(k.data),S=v.language,y=v.code,b=v.immediateClose;e.postMessage(a.highlight(y,a.languages[S],S)),b&&e.close()},!1)),a;var x=a.util.currentScript();x&&(a.filename=x.src,x.hasAttribute("data-manual")&&(a.manual=!0));function f(){a.manual||a.highlightAll()}if(!a.manual){var T=document.readyState;T==="loading"||T==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(yp);typeof Jn<"u"&&Jn.exports&&(Jn.exports=z);typeof global<"u"&&(global.Prism=z);z.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};z.languages.markup.tag.inside["attr-value"].inside.entity=z.languages.markup.entity;z.languages.markup.doctype.inside["internal-subset"].inside=z.languages.markup;z.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(z.languages.markup.tag,"addInlined",{value:function(t,r){var n={};n["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:z.languages[r]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+r]={pattern:/[\s\S]+/,inside:z.languages[r]};var s={};s[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:a},z.languages.insertBefore("markup","cdata",s)}});Object.defineProperty(z.languages.markup.tag,"addAttribute",{value:function(e,t){z.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:z.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});z.languages.html=z.languages.markup;z.languages.mathml=z.languages.markup;z.languages.svg=z.languages.markup;z.languages.xml=z.languages.extend("markup",{});z.languages.ssml=z.languages.xml;z.languages.atom=z.languages.xml;z.languages.rss=z.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(z);z.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};z.languages.javascript=z.languages.extend("clike",{"class-name":[z.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});z.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;z.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:z.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:z.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:z.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:z.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:z.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});z.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:z.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});z.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});z.languages.markup&&(z.languages.markup.tag.addInlined("script","javascript"),z.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));z.languages.js=z.languages.javascript;(function(){if(typeof z>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",t=function(x,f){return"\u2716 Error "+x+" while fetching file: "+f},r="\u2716 Error: File does not exist or is empty",n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",s="loading",l="loaded",c="failed",p="pre[data-src]:not(["+a+'="'+l+'"]):not(['+a+'="'+s+'"])';function h(x,f,T){var k=new XMLHttpRequest;k.open("GET",x,!0),k.onreadystatechange=function(){k.readyState==4&&(k.status<400&&k.responseText?f(k.responseText):k.status>=400?T(t(k.status,k.statusText)):T(r))},k.send(null)}function w(x){var f=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x||"");if(f){var T=Number(f[1]),k=f[2],v=f[3];return k?v?[T,Number(v)]:[T,void 0]:[T,T]}}z.hooks.add("before-highlightall",function(x){x.selector+=", "+p}),z.hooks.add("before-sanity-check",function(x){var f=x.element;if(f.matches(p)){x.code="",f.setAttribute(a,s);var T=f.appendChild(document.createElement("CODE"));T.textContent=e;var k=f.getAttribute("data-src"),v=x.language;if(v==="none"){var S=(/\.(\w+)$/.exec(k)||[,"none"])[1];v=n[S]||S}z.util.setLanguage(T,v),z.util.setLanguage(f,v);var y=z.plugins.autoloader;y&&y.loadLanguages(v),h(k,function(b){f.setAttribute(a,l);var C=w(f.getAttribute("data-range"));if(C){var $=b.split(/\r\n?|\n/g),_=C[0],E=C[1]==null?$.length:C[1];_<0&&(_+=$.length),_=Math.max(0,Math.min(_-1,$.length)),E<0&&(E+=$.length),E=Math.max(0,Math.min(E,$.length)),b=$.slice(_,E).join(`
`),f.hasAttribute("data-start")||f.setAttribute("data-start",String(_+1))}T.textContent=b,z.highlightElement(T)},function(b){f.setAttribute(a,c),T.textContent=b})}}),z.plugins.fileHighlight={highlight:function(f){for(var T=(f||document).querySelectorAll(p),k=0,v;v=T[k++];)z.highlightElement(v)}};var u=!1;z.fileHighlight=function(){u||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),u=!0),z.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var zs=Es(($t,to)=>{(function(e,t){typeof $t=="object"&&typeof to<"u"?to.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.Sweetalert2=t())})($t,function(){"use strict";function e(o,i,d){if(typeof o=="function"?o===i:o.has(i))return arguments.length<3?i:d;throw new TypeError("Private element is not present on this object")}function t(o,i){if(i.has(o))throw new TypeError("Cannot initialize the same private elements twice on an object")}function r(o,i){return o.get(e(o,i))}function n(o,i,d){t(o,i),i.set(o,d)}function a(o,i,d){return o.set(e(o,i),d),d}let s=100,l={},c=()=>{l.previousActiveElement instanceof HTMLElement?(l.previousActiveElement.focus(),l.previousActiveElement=null):document.body&&document.body.focus()},p=o=>new Promise(i=>{if(!o)return i();let d=window.scrollX,g=window.scrollY;l.restoreFocusTimeout=setTimeout(()=>{c(),i()},s),window.scrollTo(d,g)}),h="swal2-",u=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"].reduce((o,i)=>(o[i]=h+i,o),{}),f=["success","warning","info","question","error"].reduce((o,i)=>(o[i]=h+i,o),{}),T="SweetAlert2:",k=o=>o.charAt(0).toUpperCase()+o.slice(1),v=o=>{console.warn(`${T} ${typeof o=="object"?o.join(" "):o}`)},S=o=>{console.error(`${T} ${o}`)},y=[],b=o=>{y.includes(o)||(y.push(o),v(o))},C=(o,i=null)=>{b(`"${o}" is deprecated and will be removed in the next major release.${i?` Use "${i}" instead.`:""}`)},$=o=>typeof o=="function"?o():o,_=o=>o&&typeof o.toPromise=="function",E=o=>_(o)?o.toPromise():Promise.resolve(o),L=o=>o&&Promise.resolve(o)===o,G=()=>document.body.querySelector(`.${u.container}`),K=o=>{let i=G();return i?i.querySelector(o):null},q=o=>K(`.${o}`),I=()=>q(u.popup),re=()=>q(u.icon),fe=()=>q(u["icon-content"]),W=()=>q(u.title),Q=()=>q(u["html-container"]),pe=()=>q(u.image),Ce=()=>q(u["progress-steps"]),Z=()=>q(u["validation-message"]),me=()=>K(`.${u.actions} .${u.confirm}`),oe=()=>K(`.${u.actions} .${u.cancel}`),ke=()=>K(`.${u.actions} .${u.deny}`),se=()=>q(u["input-label"]),Se=()=>K(`.${u.loader}`),Ee=()=>q(u.actions),De=()=>q(u.footer),Oe=()=>q(u["timer-progress-bar"]),lt=()=>q(u.close),Nt=`
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
`,Qe=()=>{let o=I();if(!o)return[];let i=o.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),d=Array.from(i).sort((P,ie)=>{let ve=parseInt(P.getAttribute("tabindex")||"0"),Be=parseInt(ie.getAttribute("tabindex")||"0");return ve>Be?1:ve<Be?-1:0}),g=o.querySelectorAll(Nt),A=Array.from(g).filter(P=>P.getAttribute("tabindex")!=="-1");return[...new Set(d.concat(A))].filter(P=>nt(P))},vt=()=>dt(document.body,u.shown)&&!dt(document.body,u["toast-shown"])&&!dt(document.body,u["no-backdrop"]),yt=()=>{let o=I();return o?dt(o,u.toast):!1},Qt=()=>{let o=I();return o?o.hasAttribute("data-loading"):!1},Ge=(o,i)=>{if(o.textContent="",i){let g=new DOMParser().parseFromString(i,"text/html"),A=g.querySelector("head");A&&Array.from(A.childNodes).forEach(ie=>{o.appendChild(ie)});let P=g.querySelector("body");P&&Array.from(P.childNodes).forEach(ie=>{ie instanceof HTMLVideoElement||ie instanceof HTMLAudioElement?o.appendChild(ie.cloneNode(!0)):o.appendChild(ie)})}},dt=(o,i)=>{if(!i)return!1;let d=i.split(/\s+/);for(let g=0;g<d.length;g++)if(!o.classList.contains(d[g]))return!1;return!0},le=(o,i)=>{Array.from(o.classList).forEach(d=>{!Object.values(u).includes(d)&&!Object.values(f).includes(d)&&!Object.values(i.showClass||{}).includes(d)&&o.classList.remove(d)})},$e=(o,i,d)=>{if(le(o,i),!i.customClass)return;let g=i.customClass[d];if(g){if(typeof g!="string"&&!g.forEach){v(`Invalid type of customClass.${d}! Expected string or iterable object, got "${typeof g}"`);return}de(o,g)}},er=(o,i)=>{if(!i)return null;switch(i){case"select":case"textarea":case"file":return o.querySelector(`.${u.popup} > .${u[i]}`);case"checkbox":return o.querySelector(`.${u.popup} > .${u.checkbox} input`);case"radio":return o.querySelector(`.${u.popup} > .${u.radio} input:checked`)||o.querySelector(`.${u.popup} > .${u.radio} input:first-child`);case"range":return o.querySelector(`.${u.popup} > .${u.range} input`);default:return o.querySelector(`.${u.popup} > .${u.input}`)}},on=o=>{if(o.focus(),o.type!=="file"){let i=o.value;o.value="",o.value=i}},sn=(o,i,d)=>{!o||!i||(typeof i=="string"&&(i=i.split(/\s+/).filter(Boolean)),i.forEach(g=>{Array.isArray(o)?o.forEach(A=>{d?A.classList.add(g):A.classList.remove(g)}):d?o.classList.add(g):o.classList.remove(g)}))},de=(o,i)=>{sn(o,i,!0)},et=(o,i)=>{sn(o,i,!1)},xt=(o,i)=>{let d=Array.from(o.children);for(let g=0;g<d.length;g++){let A=d[g];if(A instanceof HTMLElement&&dt(A,i))return A}},ht=(o,i,d)=>{d===`${parseInt(`${d}`)}`&&(d=parseInt(d)),d||parseInt(`${d}`)===0?o.style.setProperty(i,typeof d=="number"?`${d}px`:d):o.style.removeProperty(i)},Ve=(o,i="flex")=>{o&&(o.style.display=i)},ze=o=>{o&&(o.style.display="none")},Cr=(o,i="block")=>{o&&new MutationObserver(()=>{Sr(o,o.innerHTML,i)}).observe(o,{childList:!0,subtree:!0})},ln=(o,i,d,g)=>{let A=o.querySelector(i);A&&A.style.setProperty(d,g)},Sr=(o,i,d="flex")=>{i?Ve(o,d):ze(o)},nt=o=>!!(o&&(o.offsetWidth||o.offsetHeight||o.getClientRects().length)),Gc=()=>!nt(me())&&!nt(ke())&&!nt(oe()),Oa=o=>o.scrollHeight>o.clientHeight,Rc=(o,i)=>{let d=o;for(;d&&d!==i;){if(Oa(d))return!0;d=d.parentElement}return!1},Fi=o=>{let i=window.getComputedStyle(o),d=parseFloat(i.getPropertyValue("animation-duration")||"0"),g=parseFloat(i.getPropertyValue("transition-duration")||"0");return d>0||g>0},Ha=(o,i=!1)=>{let d=Oe();d&&nt(d)&&(i&&(d.style.transition="none",d.style.width="100%"),setTimeout(()=>{d.style.transition=`width ${o/1e3}s linear`,d.style.width="0%"},10))},Oc=()=>{let o=Oe();if(!o)return;let i=parseInt(window.getComputedStyle(o).width);o.style.removeProperty("transition"),o.style.width="100%";let d=parseInt(window.getComputedStyle(o).width),g=i/d*100;o.style.width=`${g}%`},Hc=()=>typeof window>"u"||typeof document>"u",jc=`
 <div aria-labelledby="${u.title}" aria-describedby="${u["html-container"]}" class="${u.popup}" tabindex="-1">
   <button type="button" class="${u.close}"></button>
   <ul class="${u["progress-steps"]}"></ul>
   <div class="${u.icon}"></div>
   <img class="${u.image}" />
   <h2 class="${u.title}" id="${u.title}"></h2>
   <div class="${u["html-container"]}" id="${u["html-container"]}"></div>
   <input class="${u.input}" id="${u.input}" />
   <input type="file" class="${u.file}" />
   <div class="${u.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${u.select}" id="${u.select}"></select>
   <div class="${u.radio}"></div>
   <label class="${u.checkbox}">
     <input type="checkbox" id="${u.checkbox}" />
     <span class="${u.label}"></span>
   </label>
   <textarea class="${u.textarea}" id="${u.textarea}"></textarea>
   <div class="${u["validation-message"]}" id="${u["validation-message"]}"></div>
   <div class="${u.actions}">
     <div class="${u.loader}"></div>
     <button type="button" class="${u.confirm}"></button>
     <button type="button" class="${u.deny}"></button>
     <button type="button" class="${u.cancel}"></button>
   </div>
   <div class="${u.footer}"></div>
   <div class="${u["timer-progress-bar-container"]}">
     <div class="${u["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Wc=()=>{let o=G();return o?(o.remove(),et([document.documentElement,document.body],[u["no-backdrop"],u["toast-shown"],u["has-column"]]),!0):!1},tr=()=>{l.currentInstance.resetValidationMessage()},Uc=()=>{let o=I(),i=xt(o,u.input),d=xt(o,u.file),g=o.querySelector(`.${u.range} input`),A=o.querySelector(`.${u.range} output`),P=xt(o,u.select),ie=o.querySelector(`.${u.checkbox} input`),ve=xt(o,u.textarea);i.oninput=tr,d.onchange=tr,P.onchange=tr,ie.onchange=tr,ve.oninput=tr,g.oninput=()=>{tr(),A.value=g.value},g.onchange=()=>{tr(),A.value=g.value}},qc=o=>typeof o=="string"?document.querySelector(o):o,Kc=o=>{let i=I();i.setAttribute("role",o.toast?"alert":"dialog"),i.setAttribute("aria-live",o.toast?"polite":"assertive"),o.toast||i.setAttribute("aria-modal","true")},Zc=o=>{window.getComputedStyle(o).direction==="rtl"&&de(G(),u.rtl)},Yc=o=>{let i=Wc();if(Hc()){S("SweetAlert2 requires document to initialize");return}let d=document.createElement("div");d.className=u.container,i&&de(d,u["no-transition"]),Ge(d,jc),d.dataset.swal2Theme=o.theme;let g=qc(o.target);g.appendChild(d),o.topLayer&&(d.setAttribute("popover",""),d.showPopover()),Kc(o),Zc(g),Uc()},ja=(o,i)=>{o instanceof HTMLElement?i.appendChild(o):typeof o=="object"?Jc(o,i):o&&Ge(i,o)},Jc=(o,i)=>{o.jquery?Xc(i,o):Ge(i,o.toString())},Xc=(o,i)=>{if(o.textContent="",0 in i)for(let d=0;d in i;d++)o.appendChild(i[d].cloneNode(!0));else o.appendChild(i.cloneNode(!0))},Qc=(o,i)=>{let d=Ee(),g=Se();!d||!g||(!i.showConfirmButton&&!i.showDenyButton&&!i.showCancelButton?ze(d):Ve(d),$e(d,i,"actions"),eu(d,g,i),Ge(g,i.loaderHtml||""),$e(g,i,"loader"))};function eu(o,i,d){let g=me(),A=ke(),P=oe();!g||!A||!P||(Ua(g,"confirm",d),Ua(A,"deny",d),Ua(P,"cancel",d),tu(g,A,P,d),d.reverseButtons&&(d.toast?(o.insertBefore(P,g),o.insertBefore(A,g)):(o.insertBefore(P,i),o.insertBefore(A,i),o.insertBefore(g,i))))}function tu(o,i,d,g){if(!g.buttonsStyling){et([o,i,d],u.styled);return}de([o,i,d],u.styled),g.confirmButtonColor&&o.style.setProperty("--swal2-confirm-button-background-color",g.confirmButtonColor),g.denyButtonColor&&i.style.setProperty("--swal2-deny-button-background-color",g.denyButtonColor),g.cancelButtonColor&&d.style.setProperty("--swal2-cancel-button-background-color",g.cancelButtonColor),Wa(o),Wa(i),Wa(d)}function Wa(o){let i=window.getComputedStyle(o);if(i.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;let d=i.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");o.style.setProperty("--swal2-action-button-focus-box-shadow",i.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${d}`))}function Ua(o,i,d){let g=k(i);Sr(o,d[`show${g}Button`],"inline-block"),Ge(o,d[`${i}ButtonText`]||""),o.setAttribute("aria-label",d[`${i}ButtonAriaLabel`]||""),o.className=u[i],$e(o,d,`${i}Button`)}let ru=(o,i)=>{let d=lt();d&&(Ge(d,i.closeButtonHtml||""),$e(d,i,"closeButton"),Sr(d,i.showCloseButton),d.setAttribute("aria-label",i.closeButtonAriaLabel||""))},nu=(o,i)=>{let d=G();d&&(au(d,i.backdrop),ou(d,i.position),iu(d,i.grow),$e(d,i,"container"))};function au(o,i){typeof i=="string"?o.style.background=i:i||de([document.documentElement,document.body],u["no-backdrop"])}function ou(o,i){i&&(i in u?de(o,u[i]):(v('The "position" parameter is not valid, defaulting to "center"'),de(o,u.center)))}function iu(o,i){i&&de(o,u[`grow-${i}`])}var Ae={innerParams:new WeakMap,domCache:new WeakMap};let su=["input","file","range","select","radio","checkbox","textarea"],lu=(o,i)=>{let d=I();if(!d)return;let g=Ae.innerParams.get(o),A=!g||i.input!==g.input;su.forEach(P=>{let ie=xt(d,u[P]);ie&&(uu(P,i.inputAttributes),ie.className=u[P],A&&ze(ie))}),i.input&&(A&&du(i),pu(i))},du=o=>{if(!o.input)return;if(!Le[o.input]){S(`Unexpected type of input! Expected ${Object.keys(Le).join(" | ")}, got "${o.input}"`);return}let i=Mi(o.input);if(!i)return;let d=Le[o.input](i,o);Ve(i),o.inputAutoFocus&&setTimeout(()=>{on(d)})},cu=o=>{for(let i=0;i<o.attributes.length;i++){let d=o.attributes[i].name;["id","type","value","style"].includes(d)||o.removeAttribute(d)}},uu=(o,i)=>{let d=I();if(!d)return;let g=er(d,o);if(g){cu(g);for(let A in i)g.setAttribute(A,i[A])}},pu=o=>{if(!o.input)return;let i=Mi(o.input);i&&$e(i,o,"input")},qa=(o,i)=>{!o.placeholder&&i.inputPlaceholder&&(o.placeholder=i.inputPlaceholder)},dn=(o,i,d)=>{if(d.inputLabel){let g=document.createElement("label"),A=u["input-label"];g.setAttribute("for",o.id),g.className=A,typeof d.customClass=="object"&&de(g,d.customClass.inputLabel),g.innerText=d.inputLabel,i.insertAdjacentElement("beforebegin",g)}},Mi=o=>{let i=I();if(i)return xt(i,u[o]||u.input)},Gn=(o,i)=>{["string","number"].includes(typeof i)?o.value=`${i}`:L(i)||v(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof i}"`)},Le={};Le.text=Le.email=Le.password=Le.number=Le.tel=Le.url=Le.search=Le.date=Le["datetime-local"]=Le.time=Le.week=Le.month=(o,i)=>(Gn(o,i.inputValue),dn(o,o,i),qa(o,i),o.type=i.input,o),Le.file=(o,i)=>(dn(o,o,i),qa(o,i),o),Le.range=(o,i)=>{let d=o.querySelector("input"),g=o.querySelector("output");return Gn(d,i.inputValue),d.type=i.input,Gn(g,i.inputValue),dn(d,o,i),o},Le.select=(o,i)=>{if(o.textContent="",i.inputPlaceholder){let d=document.createElement("option");Ge(d,i.inputPlaceholder),d.value="",d.disabled=!0,d.selected=!0,o.appendChild(d)}return dn(o,o,i),o},Le.radio=o=>(o.textContent="",o),Le.checkbox=(o,i)=>{let d=er(I(),"checkbox");d.value="1",d.checked=!!i.inputValue;let g=o.querySelector("span");return Ge(g,i.inputPlaceholder||i.inputLabel),d},Le.textarea=(o,i)=>{Gn(o,i.inputValue),qa(o,i),dn(o,o,i);let d=g=>parseInt(window.getComputedStyle(g).marginLeft)+parseInt(window.getComputedStyle(g).marginRight);return setTimeout(()=>{if("MutationObserver"in window){let g=parseInt(window.getComputedStyle(I()).width),A=()=>{if(!document.body.contains(o))return;let P=o.offsetWidth+d(o);P>g?I().style.width=`${P}px`:ht(I(),"width",i.width)};new MutationObserver(A).observe(o,{attributes:!0,attributeFilter:["style"]})}}),o};let gu=(o,i)=>{let d=Q();d&&(Cr(d),$e(d,i,"htmlContainer"),i.html?(ja(i.html,d),Ve(d,"block")):i.text?(d.textContent=i.text,Ve(d,"block")):ze(d),lu(o,i))},hu=(o,i)=>{let d=De();d&&(Cr(d),Sr(d,!!i.footer,"block"),i.footer&&ja(i.footer,d),$e(d,i,"footer"))},bu=(o,i)=>{let d=Ae.innerParams.get(o),g=re();if(!g)return;if(d&&i.icon===d.icon){Gi(g,i),zi(g,i);return}if(!i.icon&&!i.iconHtml){ze(g);return}if(i.icon&&Object.keys(f).indexOf(i.icon)===-1){S(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${i.icon}"`),ze(g);return}Ve(g),Gi(g,i),zi(g,i),de(g,i.showClass&&i.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Di)},zi=(o,i)=>{for(let[d,g]of Object.entries(f))i.icon!==d&&et(o,g);de(o,i.icon&&f[i.icon]),mu(o,i),Di(),$e(o,i,"icon")},Di=()=>{let o=I();if(!o)return;let i=window.getComputedStyle(o).getPropertyValue("background-color"),d=o.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let g=0;g<d.length;g++)d[g].style.backgroundColor=i},wu=o=>`
  ${o.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${o.animation?'<div class="swal2-success-fix"></div>':""}
  ${o.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,fu=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Gi=(o,i)=>{if(!i.icon&&!i.iconHtml)return;let d=o.innerHTML,g="";i.iconHtml?g=Ri(i.iconHtml):i.icon==="success"?(g=wu(i),d=d.replace(/ style=".*?"/g,"")):i.icon==="error"?g=fu:i.icon&&(g=Ri({question:"?",warning:"!",info:"i"}[i.icon])),d.trim()!==g.trim()&&Ge(o,g)},mu=(o,i)=>{if(i.iconColor){o.style.color=i.iconColor,o.style.borderColor=i.iconColor;for(let d of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ln(o,d,"background-color",i.iconColor);ln(o,".swal2-success-ring","border-color",i.iconColor)}},Ri=o=>`<div class="${u["icon-content"]}">${o}</div>`,vu=(o,i)=>{let d=pe();if(d){if(!i.imageUrl){ze(d);return}Ve(d,""),d.setAttribute("src",i.imageUrl),d.setAttribute("alt",i.imageAlt||""),ht(d,"width",i.imageWidth),ht(d,"height",i.imageHeight),d.className=u.image,$e(d,i,"image")}},Ka=!1,Oi=0,Hi=0,ji=0,Wi=0,yu=o=>{o.addEventListener("mousedown",Rn),document.body.addEventListener("mousemove",On),o.addEventListener("mouseup",Hn),o.addEventListener("touchstart",Rn),document.body.addEventListener("touchmove",On),o.addEventListener("touchend",Hn)},xu=o=>{o.removeEventListener("mousedown",Rn),document.body.removeEventListener("mousemove",On),o.removeEventListener("mouseup",Hn),o.removeEventListener("touchstart",Rn),document.body.removeEventListener("touchmove",On),o.removeEventListener("touchend",Hn)},Rn=o=>{let i=I();if(o.target===i||re().contains(o.target)){Ka=!0;let d=Ui(o);Oi=d.clientX,Hi=d.clientY,ji=parseInt(i.style.insetInlineStart)||0,Wi=parseInt(i.style.insetBlockStart)||0,de(i,"swal2-dragging")}},On=o=>{let i=I();if(Ka){let{clientX:d,clientY:g}=Ui(o);i.style.insetInlineStart=`${ji+(d-Oi)}px`,i.style.insetBlockStart=`${Wi+(g-Hi)}px`}},Hn=()=>{let o=I();Ka=!1,et(o,"swal2-dragging")},Ui=o=>{let i=0,d=0;return o.type.startsWith("mouse")?(i=o.clientX,d=o.clientY):o.type.startsWith("touch")&&(i=o.touches[0].clientX,d=o.touches[0].clientY),{clientX:i,clientY:d}},ku=(o,i)=>{let d=G(),g=I();if(!(!d||!g)){if(i.toast){ht(d,"width",i.width),g.style.width="100%";let A=Se();A&&g.insertBefore(A,re())}else ht(g,"width",i.width);ht(g,"padding",i.padding),i.color&&(g.style.color=i.color),i.background&&(g.style.background=i.background),ze(Z()),Cu(g,i),i.draggable&&!i.toast?(de(g,u.draggable),yu(g)):(et(g,u.draggable),xu(g))}},Cu=(o,i)=>{let d=i.showClass||{};o.className=`${u.popup} ${nt(o)?d.popup:""}`,i.toast?(de([document.documentElement,document.body],u["toast-shown"]),de(o,u.toast)):de(o,u.modal),$e(o,i,"popup"),typeof i.customClass=="string"&&de(o,i.customClass),i.icon&&de(o,u[`icon-${i.icon}`])},Su=(o,i)=>{let d=Ce();if(!d)return;let{progressSteps:g,currentProgressStep:A}=i;if(!g||g.length===0||A===void 0){ze(d);return}Ve(d),d.textContent="",A>=g.length&&v("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),g.forEach((P,ie)=>{let ve=Au(P);if(d.appendChild(ve),ie===A&&de(ve,u["active-progress-step"]),ie!==g.length-1){let Be=$u(i);d.appendChild(Be)}})},Au=o=>{let i=document.createElement("li");return de(i,u["progress-step"]),Ge(i,o),i},$u=o=>{let i=document.createElement("li");return de(i,u["progress-step-line"]),o.progressStepsDistance&&ht(i,"width",o.progressStepsDistance),i},_u=(o,i)=>{let d=W();d&&(Cr(d),Sr(d,!!(i.title||i.titleText),"block"),i.title&&ja(i.title,d),i.titleText&&(d.innerText=i.titleText),$e(d,i,"title"))},qi=(o,i)=>{ku(o,i),nu(o,i),Su(o,i),bu(o,i),vu(o,i),_u(o,i),ru(o,i),gu(o,i),Qc(o,i),hu(o,i);let d=I();typeof i.didRender=="function"&&d&&i.didRender(d),l.eventEmitter.emit("didRender",d)},Tu=()=>nt(I()),Ki=()=>{var o;return(o=me())===null||o===void 0?void 0:o.click()},Eu=()=>{var o;return(o=ke())===null||o===void 0?void 0:o.click()},Vu=()=>{var o;return(o=oe())===null||o===void 0?void 0:o.click()},Ar=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Zi=o=>{o.keydownTarget&&o.keydownHandlerAdded&&(o.keydownTarget.removeEventListener("keydown",o.keydownHandler,{capture:o.keydownListenerCapture}),o.keydownHandlerAdded=!1)},Bu=(o,i,d)=>{Zi(o),i.toast||(o.keydownHandler=g=>Pu(i,g,d),o.keydownTarget=i.keydownListenerCapture?window:I(),o.keydownListenerCapture=i.keydownListenerCapture,o.keydownTarget.addEventListener("keydown",o.keydownHandler,{capture:o.keydownListenerCapture}),o.keydownHandlerAdded=!0)},Za=(o,i)=>{var d;let g=Qe();if(g.length){o=o+i,o===-2&&(o=g.length-1),o===g.length?o=0:o===-1&&(o=g.length-1),g[o].focus();return}(d=I())===null||d===void 0||d.focus()},Yi=["ArrowRight","ArrowDown"],Nu=["ArrowLeft","ArrowUp"],Pu=(o,i,d)=>{o&&(i.isComposing||i.keyCode===229||(o.stopKeydownPropagation&&i.stopPropagation(),i.key==="Enter"?Lu(i,o):i.key==="Tab"?Iu(i):[...Yi,...Nu].includes(i.key)?Fu(i.key):i.key==="Escape"&&Mu(i,o,d)))},Lu=(o,i)=>{if(!$(i.allowEnterKey))return;let d=er(I(),i.input);if(o.target&&d&&o.target instanceof HTMLElement&&o.target.outerHTML===d.outerHTML){if(["textarea","file"].includes(i.input))return;Ki(),o.preventDefault()}},Iu=o=>{let i=o.target,d=Qe(),g=-1;for(let A=0;A<d.length;A++)if(i===d[A]){g=A;break}o.shiftKey?Za(g,-1):Za(g,1),o.stopPropagation(),o.preventDefault()},Fu=o=>{let i=Ee(),d=me(),g=ke(),A=oe();if(!i||!d||!g||!A)return;let P=[d,g,A];if(document.activeElement instanceof HTMLElement&&!P.includes(document.activeElement))return;let ie=Yi.includes(o)?"nextElementSibling":"previousElementSibling",ve=document.activeElement;if(ve){for(let Be=0;Be<i.children.length;Be++){if(ve=ve[ie],!ve)return;if(ve instanceof HTMLButtonElement&&nt(ve))break}ve instanceof HTMLButtonElement&&ve.focus()}},Mu=(o,i,d)=>{o.preventDefault(),$(i.allowEscapeKey)&&d(Ar.esc)};var $r={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};let zu=()=>{let o=G();Array.from(document.body.children).forEach(d=>{d.contains(o)||(d.hasAttribute("aria-hidden")&&d.setAttribute("data-previous-aria-hidden",d.getAttribute("aria-hidden")||""),d.setAttribute("aria-hidden","true"))})},Ji=()=>{Array.from(document.body.children).forEach(i=>{i.hasAttribute("data-previous-aria-hidden")?(i.setAttribute("aria-hidden",i.getAttribute("data-previous-aria-hidden")||""),i.removeAttribute("data-previous-aria-hidden")):i.removeAttribute("aria-hidden")})},Xi=typeof window<"u"&&!!window.GestureEvent,Du=()=>{if(Xi&&!dt(document.body,u.iosfix)){let o=document.body.scrollTop;document.body.style.top=`${o*-1}px`,de(document.body,u.iosfix),Gu()}},Gu=()=>{let o=G();if(!o)return;let i;o.ontouchstart=d=>{i=Ru(d)},o.ontouchmove=d=>{i&&(d.preventDefault(),d.stopPropagation())}},Ru=o=>{let i=o.target,d=G(),g=Q();return!d||!g||Ou(o)||Hu(o)?!1:i===d||!Oa(d)&&i instanceof HTMLElement&&!Rc(i,g)&&i.tagName!=="INPUT"&&i.tagName!=="TEXTAREA"&&!(Oa(g)&&g.contains(i))},Ou=o=>o.touches&&o.touches.length&&o.touches[0].touchType==="stylus",Hu=o=>o.touches&&o.touches.length>1,ju=()=>{if(dt(document.body,u.iosfix)){let o=parseInt(document.body.style.top,10);et(document.body,u.iosfix),document.body.style.top="",document.body.scrollTop=o*-1}},Wu=()=>{let o=document.createElement("div");o.className=u["scrollbar-measure"],document.body.appendChild(o);let i=o.getBoundingClientRect().width-o.clientWidth;return document.body.removeChild(o),i},_r=null,Uu=o=>{_r===null&&(document.body.scrollHeight>window.innerHeight||o==="scroll")&&(_r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${_r+Wu()}px`)},qu=()=>{_r!==null&&(document.body.style.paddingRight=`${_r}px`,_r=null)};function Qi(o,i,d,g){yt()?ts(o,g):(p(d).then(()=>ts(o,g)),Zi(l)),Xi?(i.setAttribute("style","display:none !important"),i.removeAttribute("class"),i.innerHTML=""):i.remove(),vt()&&(qu(),ju(),Ji()),Ku()}function Ku(){et([document.documentElement,document.body],[u.shown,u["height-auto"],u["no-backdrop"],u["toast-shown"]])}function Dt(o){o=Yu(o);let i=$r.swalPromiseResolve.get(this),d=Zu(this);this.isAwaitingPromise?o.isDismissed||(cn(this),i(o)):d&&i(o)}let Zu=o=>{let i=I();if(!i)return!1;let d=Ae.innerParams.get(o);if(!d||dt(i,d.hideClass.popup))return!1;et(i,d.showClass.popup),de(i,d.hideClass.popup);let g=G();return et(g,d.showClass.backdrop),de(g,d.hideClass.backdrop),Ju(o,i,d),!0};function es(o){let i=$r.swalPromiseReject.get(this);cn(this),i&&i(o)}let cn=o=>{o.isAwaitingPromise&&(delete o.isAwaitingPromise,Ae.innerParams.get(o)||o._destroy())},Yu=o=>typeof o>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},o),Ju=(o,i,d)=>{var g;let A=G(),P=Fi(i);typeof d.willClose=="function"&&d.willClose(i),(g=l.eventEmitter)===null||g===void 0||g.emit("willClose",i),P?Xu(o,i,A,d.returnFocus,d.didClose):Qi(o,A,d.returnFocus,d.didClose)},Xu=(o,i,d,g,A)=>{l.swalCloseEventFinishedCallback=Qi.bind(null,o,d,g,A);let P=function(ie){if(ie.target===i){var ve;(ve=l.swalCloseEventFinishedCallback)===null||ve===void 0||ve.call(l),delete l.swalCloseEventFinishedCallback,i.removeEventListener("animationend",P),i.removeEventListener("transitionend",P)}};i.addEventListener("animationend",P),i.addEventListener("transitionend",P)},ts=(o,i)=>{setTimeout(()=>{var d;typeof i=="function"&&i.bind(o.params)(),(d=l.eventEmitter)===null||d===void 0||d.emit("didClose"),o._destroy&&o._destroy()})},Tr=o=>{let i=I();if(i||new Zn,i=I(),!i)return;let d=Se();yt()?ze(re()):Qu(i,o),Ve(d),i.setAttribute("data-loading","true"),i.setAttribute("aria-busy","true"),i.focus()},Qu=(o,i)=>{let d=Ee(),g=Se();!d||!g||(!i&&nt(me())&&(i=me()),Ve(d),i&&(ze(i),g.setAttribute("data-button-to-replace",i.className),d.insertBefore(g,i)),de([o,d],u.loading))},e0=(o,i)=>{i.input==="select"||i.input==="radio"?o0(o,i):["text","email","number","tel","textarea"].some(d=>d===i.input)&&(_(i.inputValue)||L(i.inputValue))&&(Tr(me()),i0(o,i))},t0=(o,i)=>{let d=o.getInput();if(!d)return null;switch(i.input){case"checkbox":return r0(d);case"radio":return n0(d);case"file":return a0(d);default:return i.inputAutoTrim?d.value.trim():d.value}},r0=o=>o.checked?1:0,n0=o=>o.checked?o.value:null,a0=o=>o.files&&o.files.length?o.getAttribute("multiple")!==null?o.files:o.files[0]:null,o0=(o,i)=>{let d=I();if(!d)return;let g=A=>{i.input==="select"?s0(d,jn(A),i):i.input==="radio"&&l0(d,jn(A),i)};_(i.inputOptions)||L(i.inputOptions)?(Tr(me()),E(i.inputOptions).then(A=>{o.hideLoading(),g(A)})):typeof i.inputOptions=="object"?g(i.inputOptions):S(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof i.inputOptions}`)},i0=(o,i)=>{let d=o.getInput();d&&(ze(d),E(i.inputValue).then(g=>{d.value=i.input==="number"?`${parseFloat(g)||0}`:`${g}`,Ve(d),d.focus(),o.hideLoading()}).catch(g=>{S(`Error in inputValue promise: ${g}`),d.value="",Ve(d),d.focus(),o.hideLoading()}))};function s0(o,i,d){let g=xt(o,u.select);if(!g)return;let A=(P,ie,ve)=>{let Be=document.createElement("option");Be.value=ve,Ge(Be,ie),Be.selected=rs(ve,d.inputValue),P.appendChild(Be)};i.forEach(P=>{let ie=P[0],ve=P[1];if(Array.isArray(ve)){let Be=document.createElement("optgroup");Be.label=ie,Be.disabled=!1,g.appendChild(Be),ve.forEach(Vr=>A(Be,Vr[1],Vr[0]))}else A(g,ve,ie)}),g.focus()}function l0(o,i,d){let g=xt(o,u.radio);if(!g)return;i.forEach(P=>{let ie=P[0],ve=P[1],Be=document.createElement("input"),Vr=document.createElement("label");Be.type="radio",Be.name=u.radio,Be.value=ie,rs(ie,d.inputValue)&&(Be.checked=!0);let eo=document.createElement("span");Ge(eo,ve),eo.className=u.label,Vr.appendChild(Be),Vr.appendChild(eo),g.appendChild(Vr)});let A=g.querySelectorAll("input");A.length&&A[0].focus()}let jn=o=>{let i=[];return o instanceof Map?o.forEach((d,g)=>{let A=d;typeof A=="object"&&(A=jn(A)),i.push([g,A])}):Object.keys(o).forEach(d=>{let g=o[d];typeof g=="object"&&(g=jn(g)),i.push([d,g])}),i},rs=(o,i)=>!!i&&i.toString()===o.toString(),d0=o=>{let i=Ae.innerParams.get(o);o.disableButtons(),i.input?ns(o,"confirm"):Ja(o,!0)},c0=o=>{let i=Ae.innerParams.get(o);o.disableButtons(),i.returnInputValueOnDeny?ns(o,"deny"):Ya(o,!1)},u0=(o,i)=>{o.disableButtons(),i(Ar.cancel)},ns=(o,i)=>{let d=Ae.innerParams.get(o);if(!d.input){S(`The "input" parameter is needed to be set when using returnInputValueOn${k(i)}`);return}let g=o.getInput(),A=t0(o,d);d.inputValidator?p0(o,A,i):g&&!g.checkValidity()?(o.enableButtons(),o.showValidationMessage(d.validationMessage||g.validationMessage)):i==="deny"?Ya(o,A):Ja(o,A)},p0=(o,i,d)=>{let g=Ae.innerParams.get(o);o.disableInput(),Promise.resolve().then(()=>E(g.inputValidator(i,g.validationMessage))).then(P=>{o.enableButtons(),o.enableInput(),P?o.showValidationMessage(P):d==="deny"?Ya(o,i):Ja(o,i)})},Ya=(o,i)=>{let d=Ae.innerParams.get(o||void 0);d.showLoaderOnDeny&&Tr(ke()),d.preDeny?(o.isAwaitingPromise=!0,Promise.resolve().then(()=>E(d.preDeny(i,d.validationMessage))).then(A=>{A===!1?(o.hideLoading(),cn(o)):o.close({isDenied:!0,value:typeof A>"u"?i:A})}).catch(A=>os(o||void 0,A))):o.close({isDenied:!0,value:i})},as=(o,i)=>{o.close({isConfirmed:!0,value:i})},os=(o,i)=>{o.rejectPromise(i)},Ja=(o,i)=>{let d=Ae.innerParams.get(o||void 0);d.showLoaderOnConfirm&&Tr(),d.preConfirm?(o.resetValidationMessage(),o.isAwaitingPromise=!0,Promise.resolve().then(()=>E(d.preConfirm(i,d.validationMessage))).then(A=>{nt(Z())||A===!1?(o.hideLoading(),cn(o)):as(o,typeof A>"u"?i:A)}).catch(A=>os(o||void 0,A))):as(o,i)};function Wn(){let o=Ae.innerParams.get(this);if(!o)return;let i=Ae.domCache.get(this);ze(i.loader),yt()?o.icon&&Ve(re()):g0(i),et([i.popup,i.actions],u.loading),i.popup.removeAttribute("aria-busy"),i.popup.removeAttribute("data-loading"),i.confirmButton.disabled=!1,i.denyButton.disabled=!1,i.cancelButton.disabled=!1}let g0=o=>{let i=o.popup.getElementsByClassName(o.loader.getAttribute("data-button-to-replace"));i.length?Ve(i[0],"inline-block"):Gc()&&ze(o.actions)};function is(){let o=Ae.innerParams.get(this),i=Ae.domCache.get(this);return i?er(i.popup,o.input):null}function ss(o,i,d){let g=Ae.domCache.get(o);i.forEach(A=>{g[A].disabled=d})}function ls(o,i){let d=I();if(!(!d||!o))if(o.type==="radio"){let g=d.querySelectorAll(`[name="${u.radio}"]`);for(let A=0;A<g.length;A++)g[A].disabled=i}else o.disabled=i}function ds(){ss(this,["confirmButton","denyButton","cancelButton"],!1)}function cs(){ss(this,["confirmButton","denyButton","cancelButton"],!0)}function us(){ls(this.getInput(),!1)}function ps(){ls(this.getInput(),!0)}function gs(o){let i=Ae.domCache.get(this),d=Ae.innerParams.get(this);Ge(i.validationMessage,o),i.validationMessage.className=u["validation-message"],d.customClass&&d.customClass.validationMessage&&de(i.validationMessage,d.customClass.validationMessage),Ve(i.validationMessage);let g=this.getInput();g&&(g.setAttribute("aria-invalid","true"),g.setAttribute("aria-describedby",u["validation-message"]),on(g),de(g,u.inputerror))}function hs(){let o=Ae.domCache.get(this);o.validationMessage&&ze(o.validationMessage);let i=this.getInput();i&&(i.removeAttribute("aria-invalid"),i.removeAttribute("aria-describedby"),et(i,u.inputerror))}let Er={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},h0=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],b0={allowEnterKey:void 0},w0=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],bs=o=>Object.prototype.hasOwnProperty.call(Er,o),ws=o=>h0.indexOf(o)!==-1,fs=o=>b0[o],f0=o=>{bs(o)||v(`Unknown parameter "${o}"`)},m0=o=>{w0.includes(o)&&v(`The parameter "${o}" is incompatible with toasts`)},v0=o=>{let i=fs(o);i&&C(o,i)},ms=o=>{o.backdrop===!1&&o.allowOutsideClick&&v('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),o.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(o.theme)&&v(`Invalid theme "${o.theme}"`);for(let i in o)f0(i),o.toast&&m0(i),v0(i)};function vs(o){let i=G(),d=I(),g=Ae.innerParams.get(this);if(!d||dt(d,g.hideClass.popup)){v("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}let A=y0(o),P=Object.assign({},g,A);ms(P),i.dataset.swal2Theme=P.theme,qi(this,P),Ae.innerParams.set(this,P),Object.defineProperties(this,{params:{value:Object.assign({},this.params,o),writable:!1,enumerable:!0}})}let y0=o=>{let i={};return Object.keys(o).forEach(d=>{ws(d)?i[d]=o[d]:v(`Invalid parameter to update: ${d}`)}),i};function ys(){let o=Ae.domCache.get(this),i=Ae.innerParams.get(this);if(!i){xs(this);return}o.popup&&l.swalCloseEventFinishedCallback&&(l.swalCloseEventFinishedCallback(),delete l.swalCloseEventFinishedCallback),typeof i.didDestroy=="function"&&i.didDestroy(),l.eventEmitter.emit("didDestroy"),x0(this)}let x0=o=>{xs(o),delete o.params,delete l.keydownHandler,delete l.keydownTarget,delete l.currentInstance},xs=o=>{o.isAwaitingPromise?(Xa(Ae,o),o.isAwaitingPromise=!0):(Xa($r,o),Xa(Ae,o),delete o.isAwaitingPromise,delete o.disableButtons,delete o.enableButtons,delete o.getInput,delete o.disableInput,delete o.enableInput,delete o.hideLoading,delete o.disableLoading,delete o.showValidationMessage,delete o.resetValidationMessage,delete o.close,delete o.closePopup,delete o.closeModal,delete o.closeToast,delete o.rejectPromise,delete o.update,delete o._destroy)},Xa=(o,i)=>{for(let d in o)o[d].delete(i)};var k0=Object.freeze({__proto__:null,_destroy:ys,close:Dt,closeModal:Dt,closePopup:Dt,closeToast:Dt,disableButtons:cs,disableInput:ps,disableLoading:Wn,enableButtons:ds,enableInput:us,getInput:is,handleAwaitingPromise:cn,hideLoading:Wn,rejectPromise:es,resetValidationMessage:hs,showValidationMessage:gs,update:vs});let C0=(o,i,d)=>{o.toast?S0(o,i,d):($0(i),_0(i),T0(o,i,d))},S0=(o,i,d)=>{i.popup.onclick=()=>{o&&(A0(o)||o.timer||o.input)||d(Ar.close)}},A0=o=>!!(o.showConfirmButton||o.showDenyButton||o.showCancelButton||o.showCloseButton),Un=!1,$0=o=>{o.popup.onmousedown=()=>{o.container.onmouseup=function(i){o.container.onmouseup=()=>{},i.target===o.container&&(Un=!0)}}},_0=o=>{o.container.onmousedown=i=>{i.target===o.container&&i.preventDefault(),o.popup.onmouseup=function(d){o.popup.onmouseup=()=>{},(d.target===o.popup||d.target instanceof HTMLElement&&o.popup.contains(d.target))&&(Un=!0)}}},T0=(o,i,d)=>{i.container.onclick=g=>{if(Un){Un=!1;return}g.target===i.container&&$(o.allowOutsideClick)&&d(Ar.backdrop)}},E0=o=>typeof o=="object"&&o.jquery,ks=o=>o instanceof Element||E0(o),V0=o=>{let i={};return typeof o[0]=="object"&&!ks(o[0])?Object.assign(i,o[0]):["title","html","icon"].forEach((d,g)=>{let A=o[g];typeof A=="string"||ks(A)?i[d]=A:A!==void 0&&S(`Unexpected type of ${d}! Expected "string" or "Element", got ${typeof A}`)}),i};function B0(...o){return new this(...o)}function N0(o){class i extends this{_main(g,A){return super._main(g,Object.assign({},o,A))}}return i}let P0=()=>l.timeout&&l.timeout.getTimerLeft(),Cs=()=>{if(l.timeout)return Oc(),l.timeout.stop()},Ss=()=>{if(l.timeout){let o=l.timeout.start();return Ha(o),o}},L0=()=>{let o=l.timeout;return o&&(o.running?Cs():Ss())},I0=o=>{if(l.timeout){let i=l.timeout.increase(o);return Ha(i,!0),i}},F0=()=>!!(l.timeout&&l.timeout.isRunning()),As=!1,Qa={};function M0(o="data-swal-template"){Qa[o]=this,As||(document.body.addEventListener("click",z0),As=!0)}let z0=o=>{for(let i=o.target;i&&i!==document;i=i.parentNode)for(let d in Qa){let g=i.getAttribute(d);if(g){Qa[d].fire({template:g});return}}};class D0{constructor(){this.events={}}_getHandlersByEventName(i){return typeof this.events[i]>"u"&&(this.events[i]=[]),this.events[i]}on(i,d){let g=this._getHandlersByEventName(i);g.includes(d)||g.push(d)}once(i,d){let g=(...A)=>{this.removeListener(i,g),d.apply(this,A)};this.on(i,g)}emit(i,...d){this._getHandlersByEventName(i).forEach(g=>{try{g.apply(this,d)}catch(A){console.error(A)}})}removeListener(i,d){let g=this._getHandlersByEventName(i),A=g.indexOf(d);A>-1&&g.splice(A,1)}removeAllListeners(i){this.events[i]!==void 0&&(this.events[i].length=0)}reset(){this.events={}}}l.eventEmitter=new D0;var G0=Object.freeze({__proto__:null,argsToParams:V0,bindClickHandler:M0,clickCancel:Vu,clickConfirm:Ki,clickDeny:Eu,enableLoading:Tr,fire:B0,getActions:Ee,getCancelButton:oe,getCloseButton:lt,getConfirmButton:me,getContainer:G,getDenyButton:ke,getFocusableElements:Qe,getFooter:De,getHtmlContainer:Q,getIcon:re,getIconContent:fe,getImage:pe,getInputLabel:se,getLoader:Se,getPopup:I,getProgressSteps:Ce,getTimerLeft:P0,getTimerProgressBar:Oe,getTitle:W,getValidationMessage:Z,increaseTimer:I0,isDeprecatedParameter:fs,isLoading:Qt,isTimerRunning:F0,isUpdatableParameter:ws,isValidParameter:bs,isVisible:Tu,mixin:N0,off:(o,i)=>{if(!o){l.eventEmitter.reset();return}i?l.eventEmitter.removeListener(o,i):l.eventEmitter.removeAllListeners(o)},on:(o,i)=>{l.eventEmitter.on(o,i)},once:(o,i)=>{l.eventEmitter.once(o,i)},resumeTimer:Ss,showLoading:Tr,stopTimer:Cs,toggleTimer:L0});class R0{constructor(i,d){this.callback=i,this.remaining=d,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(i){let d=this.running;return d&&this.stop(),this.remaining+=i,d&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}let $s=["swal-title","swal-html","swal-footer"],O0=o=>{let i=typeof o.template=="string"?document.querySelector(o.template):o.template;if(!i)return{};let d=i.content;return Y0(d),Object.assign(H0(d),j0(d),W0(d),U0(d),q0(d),K0(d),Z0(d,$s))},H0=o=>{let i={};return Array.from(o.querySelectorAll("swal-param")).forEach(g=>{rr(g,["name","value"]);let A=g.getAttribute("name"),P=g.getAttribute("value");!A||!P||(typeof Er[A]=="boolean"?i[A]=P!=="false":typeof Er[A]=="object"?i[A]=JSON.parse(P):i[A]=P)}),i},j0=o=>{let i={};return Array.from(o.querySelectorAll("swal-function-param")).forEach(g=>{let A=g.getAttribute("name"),P=g.getAttribute("value");!A||!P||(i[A]=new Function(`return ${P}`)())}),i},W0=o=>{let i={};return Array.from(o.querySelectorAll("swal-button")).forEach(g=>{rr(g,["type","color","aria-label"]);let A=g.getAttribute("type");!A||!["confirm","cancel","deny"].includes(A)||(i[`${A}ButtonText`]=g.innerHTML,i[`show${k(A)}Button`]=!0,g.hasAttribute("color")&&(i[`${A}ButtonColor`]=g.getAttribute("color")),g.hasAttribute("aria-label")&&(i[`${A}ButtonAriaLabel`]=g.getAttribute("aria-label")))}),i},U0=o=>{let i={},d=o.querySelector("swal-image");return d&&(rr(d,["src","width","height","alt"]),d.hasAttribute("src")&&(i.imageUrl=d.getAttribute("src")||void 0),d.hasAttribute("width")&&(i.imageWidth=d.getAttribute("width")||void 0),d.hasAttribute("height")&&(i.imageHeight=d.getAttribute("height")||void 0),d.hasAttribute("alt")&&(i.imageAlt=d.getAttribute("alt")||void 0)),i},q0=o=>{let i={},d=o.querySelector("swal-icon");return d&&(rr(d,["type","color"]),d.hasAttribute("type")&&(i.icon=d.getAttribute("type")),d.hasAttribute("color")&&(i.iconColor=d.getAttribute("color")),i.iconHtml=d.innerHTML),i},K0=o=>{let i={},d=o.querySelector("swal-input");d&&(rr(d,["type","label","placeholder","value"]),i.input=d.getAttribute("type")||"text",d.hasAttribute("label")&&(i.inputLabel=d.getAttribute("label")),d.hasAttribute("placeholder")&&(i.inputPlaceholder=d.getAttribute("placeholder")),d.hasAttribute("value")&&(i.inputValue=d.getAttribute("value")));let g=Array.from(o.querySelectorAll("swal-input-option"));return g.length&&(i.inputOptions={},g.forEach(A=>{rr(A,["value"]);let P=A.getAttribute("value");if(!P)return;let ie=A.innerHTML;i.inputOptions[P]=ie})),i},Z0=(o,i)=>{let d={};for(let g in i){let A=i[g],P=o.querySelector(A);P&&(rr(P,[]),d[A.replace(/^swal-/,"")]=P.innerHTML.trim())}return d},Y0=o=>{let i=$s.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(o.children).forEach(d=>{let g=d.tagName.toLowerCase();i.includes(g)||v(`Unrecognized element <${g}>`)})},rr=(o,i)=>{Array.from(o.attributes).forEach(d=>{i.indexOf(d.name)===-1&&v([`Unrecognized attribute "${d.name}" on <${o.tagName.toLowerCase()}>.`,`${i.length?`Allowed attributes are: ${i.join(", ")}`:"To set the value, use HTML within the element."}`])})},_s=10,J0=o=>{let i=G(),d=I();typeof o.willOpen=="function"&&o.willOpen(d),l.eventEmitter.emit("willOpen",d);let A=window.getComputedStyle(document.body).overflowY;ep(i,d,o),setTimeout(()=>{X0(i,d)},_s),vt()&&(Q0(i,o.scrollbarPadding,A),zu()),!yt()&&!l.previousActiveElement&&(l.previousActiveElement=document.activeElement),typeof o.didOpen=="function"&&setTimeout(()=>o.didOpen(d)),l.eventEmitter.emit("didOpen",d)},qn=o=>{let i=I();if(o.target!==i)return;let d=G();i.removeEventListener("animationend",qn),i.removeEventListener("transitionend",qn),d.style.overflowY="auto",et(d,u["no-transition"])},X0=(o,i)=>{Fi(i)?(o.style.overflowY="hidden",i.addEventListener("animationend",qn),i.addEventListener("transitionend",qn)):o.style.overflowY="auto"},Q0=(o,i,d)=>{Du(),i&&d!=="hidden"&&Uu(d),setTimeout(()=>{o.scrollTop=0})},ep=(o,i,d)=>{de(o,d.showClass.backdrop),d.animation?(i.style.setProperty("opacity","0","important"),Ve(i,"grid"),setTimeout(()=>{de(i,d.showClass.popup),i.style.removeProperty("opacity")},_s)):Ve(i,"grid"),de([document.documentElement,document.body],u.shown),d.heightAuto&&d.backdrop&&!d.toast&&de([document.documentElement,document.body],u["height-auto"])};var Ts={email:(o,i)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(o)?Promise.resolve():Promise.resolve(i||"Invalid email address"),url:(o,i)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(o)?Promise.resolve():Promise.resolve(i||"Invalid URL")};function tp(o){o.inputValidator||(o.input==="email"&&(o.inputValidator=Ts.email),o.input==="url"&&(o.inputValidator=Ts.url))}function rp(o){(!o.target||typeof o.target=="string"&&!document.querySelector(o.target)||typeof o.target!="string"&&!o.target.appendChild)&&(v('Target parameter is not valid, defaulting to "body"'),o.target="body")}function np(o){tp(o),o.showLoaderOnConfirm&&!o.preConfirm&&v(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),rp(o),typeof o.title=="string"&&(o.title=o.title.split(`
`).join("<br />")),Yc(o)}let At;var Kn=new WeakMap;class Ie{constructor(...i){if(n(this,Kn,void 0),typeof window>"u")return;At=this;let d=Object.freeze(this.constructor.argsToParams(i));this.params=d,this.isAwaitingPromise=!1,a(Kn,this,this._main(At.params))}_main(i,d={}){if(ms(Object.assign({},d,i)),l.currentInstance){let P=$r.swalPromiseResolve.get(l.currentInstance),{isAwaitingPromise:ie}=l.currentInstance;l.currentInstance._destroy(),ie||P({isDismissed:!0}),vt()&&Ji()}l.currentInstance=At;let g=op(i,d);np(g),Object.freeze(g),l.timeout&&(l.timeout.stop(),delete l.timeout),clearTimeout(l.restoreFocusTimeout);let A=ip(At);return qi(At,g),Ae.innerParams.set(At,g),ap(At,A,g)}then(i){return r(Kn,this).then(i)}finally(i){return r(Kn,this).finally(i)}}let ap=(o,i,d)=>new Promise((g,A)=>{let P=ie=>{o.close({isDismissed:!0,dismiss:ie,isConfirmed:!1,isDenied:!1})};$r.swalPromiseResolve.set(o,g),$r.swalPromiseReject.set(o,A),i.confirmButton.onclick=()=>{d0(o)},i.denyButton.onclick=()=>{c0(o)},i.cancelButton.onclick=()=>{u0(o,P)},i.closeButton.onclick=()=>{P(Ar.close)},C0(d,i,P),Bu(l,d,P),e0(o,d),J0(d),sp(l,d,P),lp(i,d),setTimeout(()=>{i.container.scrollTop=0})}),op=(o,i)=>{let d=O0(o),g=Object.assign({},Er,i,d,o);return g.showClass=Object.assign({},Er.showClass,g.showClass),g.hideClass=Object.assign({},Er.hideClass,g.hideClass),g.animation===!1&&(g.showClass={backdrop:"swal2-noanimation"},g.hideClass={}),g},ip=o=>{let i={popup:I(),container:G(),actions:Ee(),confirmButton:me(),denyButton:ke(),cancelButton:oe(),loader:Se(),closeButton:lt(),validationMessage:Z(),progressSteps:Ce()};return Ae.domCache.set(o,i),i},sp=(o,i,d)=>{let g=Oe();ze(g),i.timer&&(o.timeout=new R0(()=>{d("timer"),delete o.timeout},i.timer),i.timerProgressBar&&(Ve(g),$e(g,i,"timerProgressBar"),setTimeout(()=>{o.timeout&&o.timeout.running&&Ha(i.timer)})))},lp=(o,i)=>{if(!i.toast){if(!$(i.allowEnterKey)){C("allowEnterKey"),up();return}dp(o)||cp(o,i)||Za(-1,1)}},dp=o=>{let i=Array.from(o.popup.querySelectorAll("[autofocus]"));for(let d of i)if(d instanceof HTMLElement&&nt(d))return d.focus(),!0;return!1},cp=(o,i)=>i.focusDeny&&nt(o.denyButton)?(o.denyButton.focus(),!0):i.focusCancel&&nt(o.cancelButton)?(o.cancelButton.focus(),!0):i.focusConfirm&&nt(o.confirmButton)?(o.confirmButton.focus(),!0):!1,up=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Ie.prototype.disableButtons=cs,Ie.prototype.enableButtons=ds,Ie.prototype.getInput=is,Ie.prototype.disableInput=ps,Ie.prototype.enableInput=us,Ie.prototype.hideLoading=Wn,Ie.prototype.disableLoading=Wn,Ie.prototype.showValidationMessage=gs,Ie.prototype.resetValidationMessage=hs,Ie.prototype.close=Dt,Ie.prototype.closePopup=Dt,Ie.prototype.closeModal=Dt,Ie.prototype.closeToast=Dt,Ie.prototype.rejectPromise=es,Ie.prototype.update=vs,Ie.prototype._destroy=ys,Object.assign(Ie,G0),Object.keys(k0).forEach(o=>{Ie[o]=function(...i){return At&&At[o]?At[o](...i):null}}),Ie.DismissReason=Ar,Ie.version="11.26.3";let Zn=Ie;return Zn.default=Zn,Zn});typeof $t<"u"&&$t.Sweetalert2&&($t.swal=$t.sweetAlert=$t.Swal=$t.SweetAlert=$t.Sweetalert2);typeof document<"u"&&function(e,t){var r=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(r),r.styleSheet)r.styleSheet.disabled||(r.styleSheet.cssText=t);else try{r.innerHTML=t}catch{r.innerText=t}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}')});var xx={};fp(xx,{Checkout:()=>Lp,CodeFiles$59$18:()=>Hp,CodeFilesWithPreviewPanel$80$24:()=>jp,CodeFilesWithPreviewPanel$81$18:()=>Wp,Download$196$33:()=>Cp,Error_1:()=>Ip,EventQ2Client:()=>Rp,Examples:()=>Np,ForTeams:()=>Pp,Home$131$31:()=>xp,Home$137$33:()=>kp,HydrateSCGDoc:()=>$p,Invoice:()=>Fp,Layout:()=>Dp,MyAccount:()=>Mp,Ocaml$216$31:()=>Ap,Runtime:()=>Fs,Success:()=>zp,Tab$39$22:()=>Op,VsCode$107$34:()=>Up,Warp$203$31:()=>Sp,_c:()=>Re});function Fe(e,t){return Object.assign(Object.create(e.prototype),t)}var vp=Symbol("force");function ne(e){var t;function r(){return t||(t=e(a=>t=a)),t}return new Proxy(function(){},{get(a,s){return s==vp&&r(),r()[s]},set(a,s,l){return r()[s]=l,!0},construct(a,s,l){return Reflect.construct(r(),s,l)}})}function Ns(e,t){for(var r=0;r<t.length;r++){var n=t[r];e[n]===void 0&&delete e[n]}return e}function nr(e){return e===void 0?null:{$:1,$0:e}}function Br(e,t,r){r?e[t]=r.$0:delete e[t]}function Ps(e){return function(...t){return e(t)}}function Ls(e){return Object.defineProperty(e,"resizable",{enumerable:!1,writable:!1,configurable:!1,value:!0}),e}var Is=globalThis.WebSharperRuntime||{ScriptBasePath:"./",ScriptSkipAssemblyDir:!1};globalThis.WebSharperRuntime=Is;var Fs=Is;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".section-link"),t=document.querySelectorAll(".section"),r={root:null,threshold:1,rootMargin:"0px"};function n(s){s.classList.add("active-link")}let a=new IntersectionObserver(function(s){s.forEach(l=>{l.isIntersecting&&e.forEach(c=>{let p=c.getAttribute("data-step"),h=l.target.getAttribute("id");p===h?n(c):c.classList.remove("active-link")})})},r);t.forEach(s=>{a.observe(s)})});var kl=Bs(Ms());Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.fsharp=Prism.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?/,greedy:!0},"class-name":{pattern:/(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,lookbehind:!0,inside:{operator:/->|\*/,punctuation:/\./}},keyword:/\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|asr|assert|atomic|base|begin|break|checked|class|component|const|constraint|constructor|continue|default|delegate|do|done|downcast|downto|eager|elif|else|end|event|exception|extern|external|false|finally|fixed|for|fun|function|functor|global|if|in|include|inherit|inline|interface|internal|land|lazy|lor|lsl|lsr|lxor|match|member|method|mixin|mod|module|mutable|namespace|new|not|null|object|of|open|or|override|parallel|private|process|protected|public|pure|rec|sealed|select|sig|static|struct|tailcall|then|to|trait|true|try|type|upcast|val|virtual|void|volatile|when|while|with)\b/,number:[/\b0x[\da-fA-F]+(?:LF|lf|un)?\b/,/\b0b[01]+(?:uy|y)?\b/,/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,/\b\d+(?:[IlLsy]|UL|u[lsy]?)?\b/],operator:/([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/});Prism.languages.insertBefore("fsharp","keyword",{preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(^#)\b(?:else|endif|if|light|line|nowarn)\b/,lookbehind:!0,alias:"keyword"}}}});Prism.languages.insertBefore("fsharp","punctuation",{"computation-expression":{pattern:/\b[_a-z]\w*(?=\s*\{)/i,alias:"keyword"}});Prism.languages.insertBefore("fsharp","string",{annotation:{pattern:/\[<.+?>\]/,greedy:!0,inside:{punctuation:/^\[<|>\]$/,"class-name":{pattern:/^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,lookbehind:!0},"annotation-content":{pattern:/[\s\S]+/,inside:Prism.languages.fsharp}}},char:{pattern:/'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,greedy:!0}});Prism.languages.ocaml={comment:{pattern:/\(\*[\s\S]*?\*\)/,greedy:!0},char:{pattern:/'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,greedy:!0},string:[{pattern:/"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,greedy:!0},{pattern:/\{([a-z_]*)\|[\s\S]*?\|\1\}/,greedy:!0}],number:[/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,/\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,/\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],directive:{pattern:/\B#\w+/,alias:"property"},label:{pattern:/\B~\w+/,alias:"property"},"type-variable":{pattern:/\B'\w+/,alias:"function"},variant:{pattern:/`\w+/,alias:"symbol"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,boolean:/\b(?:false|true)\b/,"operator-like-punctuation":{pattern:/\[[<>|]|[>|]\]|\{<|>\}/,alias:"punctuation"},operator:/\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,punctuation:/;;|::|[(){}\[\].,:;#]|\b_\b/};(function(e){function t(Z,me){return Z.replace(/<<(\d+)>>/g,function(oe,ke){return"(?:"+me[+ke]+")"})}function r(Z,me,oe){return RegExp(t(Z,me),oe||"")}function n(Z,me){for(var oe=0;oe<me;oe++)Z=Z.replace(/<<self>>/g,function(){return"(?:"+Z+")"});return Z.replace(/<<self>>/g,"[^\\s\\S]")}var a={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function s(Z){return"\\b(?:"+Z.trim().replace(/ /g,"|")+")\\b"}var l=s(a.typeDeclaration),c=RegExp(s(a.type+" "+a.typeDeclaration+" "+a.contextual+" "+a.other)),p=s(a.typeDeclaration+" "+a.contextual+" "+a.other),h=s(a.type+" "+a.typeDeclaration+" "+a.other),w=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),u=n(/\((?:[^()]|<<self>>)*\)/.source,2),x=/@?\b[A-Za-z_]\w*\b/.source,f=t(/<<0>>(?:\s*<<1>>)?/.source,[x,w]),T=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[p,f]),k=/\[\s*(?:,\s*)*\]/.source,v=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[T,k]),S=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[w,u,k]),y=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[S]),b=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[y,T,k]),C={keyword:c,punctuation:/[<>()?,.:[\]]/},$=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,_=/"(?:\\.|[^\\"\r\n])*"/.source,E=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[E]),lookbehind:!0,greedy:!0},{pattern:r(/(^|[^@$\\])<<0>>/.source,[_]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[T]),lookbehind:!0,inside:C},{pattern:r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[x,b]),lookbehind:!0,inside:C},{pattern:r(/(\busing\s+)<<0>>(?=\s*=)/.source,[x]),lookbehind:!0},{pattern:r(/(\b<<0>>\s+)<<1>>/.source,[l,f]),lookbehind:!0,inside:C},{pattern:r(/(\bcatch\s*\(\s*)<<0>>/.source,[T]),lookbehind:!0,inside:C},{pattern:r(/(\bwhere\s+)<<0>>/.source,[x]),lookbehind:!0},{pattern:r(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[v]),lookbehind:!0,inside:C},{pattern:r(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[b,h,x]),inside:C}],keyword:c,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:r(/([(,]\s*)<<0>>(?=\s*:)/.source,[x]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:r(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[x]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:r(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[u]),lookbehind:!0,alias:"class-name",inside:C},"return-type":{pattern:r(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[b,T]),inside:C,alias:"class-name"},"constructor-invocation":{pattern:r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[b]),lookbehind:!0,inside:C,alias:"class-name"},"generic-method":{pattern:r(/<<0>>\s*<<1>>(?=\s*\()/.source,[x,w]),inside:{function:r(/^<<0>>/.source,[x]),generic:{pattern:RegExp(w),alias:"class-name",inside:C}}},"type-list":{pattern:r(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[l,f,x,b,c.source,u,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:r(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[f,u]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:c,"class-name":{pattern:RegExp(b),greedy:!0,inside:C},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var L=_+"|"+$,G=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[L]),K=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[G]),2),q=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,I=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[T,K]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:r(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[q,I]),lookbehind:!0,greedy:!0,inside:{target:{pattern:r(/^<<0>>(?=\s*:)/.source,[q]),alias:"keyword"},"attribute-arguments":{pattern:r(/\(<<0>>*\)/.source,[K]),inside:e.languages.csharp},"class-name":{pattern:RegExp(T),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var re=/:[^}\r\n]+/.source,fe=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[G]),2),W=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[fe,re]),Q=n(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[L]),2),pe=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[Q,re]);function Ce(Z,me){return{interpolation:{pattern:r(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[Z]),lookbehind:!0,inside:{"format-string":{pattern:r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[me,re]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:r(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[W]),lookbehind:!0,greedy:!0,inside:Ce(W,fe)},{pattern:r(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[pe]),lookbehind:!0,greedy:!0,inside:Ce(pe,Q)}],char:{pattern:RegExp($),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",t=/\n(?!$)/g,r=Prism.plugins.lineNumbers={getLine:function(l,c){if(!(l.tagName!=="PRE"||!l.classList.contains(e))){var p=l.querySelector(".line-numbers-rows");if(p){var h=parseInt(l.getAttribute("data-start"),10)||1,w=h+(p.children.length-1);c<h&&(c=h),c>w&&(c=w);var u=c-h;return p.children[u]}}},resize:function(l){n([l])},assumeViewportIndependence:!0};function n(l){if(l=l.filter(function(p){var h=a(p),w=h["white-space"];return w==="pre-wrap"||w==="pre-line"}),l.length!=0){var c=l.map(function(p){var h=p.querySelector("code"),w=p.querySelector(".line-numbers-rows");if(!(!h||!w)){var u=p.querySelector(".line-numbers-sizer"),x=h.textContent.split(t);u||(u=document.createElement("span"),u.className="line-numbers-sizer",h.appendChild(u)),u.innerHTML="0",u.style.display="block";var f=u.getBoundingClientRect().height;return u.innerHTML="",{element:p,lines:x,lineHeights:[],oneLinerHeight:f,sizer:u}}}).filter(Boolean);c.forEach(function(p){var h=p.sizer,w=p.lines,u=p.lineHeights,x=p.oneLinerHeight;u[w.length-1]=void 0,w.forEach(function(f,T){if(f&&f.length>1){var k=h.appendChild(document.createElement("span"));k.style.display="block",k.textContent=f}else u[T]=x})}),c.forEach(function(p){for(var h=p.sizer,w=p.lineHeights,u=0,x=0;x<w.length;x++)w[x]===void 0&&(w[x]=h.children[u++].getBoundingClientRect().height)}),c.forEach(function(p){var h=p.sizer,w=p.element.querySelector(".line-numbers-rows");h.style.display="none",h.innerHTML="",p.lineHeights.forEach(function(u,x){w.children[x].style.height=u+"px"})})}}function a(l){return l?window.getComputedStyle?getComputedStyle(l):l.currentStyle||null:null}var s=void 0;window.addEventListener("resize",function(){r.assumeViewportIndependence&&s===window.innerWidth||(s=window.innerWidth,n(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(l){if(l.code){var c=l.element,p=c.parentNode;if(!(!p||!/pre/i.test(p.nodeName))&&!c.querySelector(".line-numbers-rows")&&Prism.util.isActive(c,e)){c.classList.remove(e),p.classList.add(e);var h=l.code.match(t),w=h?h.length+1:1,u,x=new Array(w+1).join("<span></span>");u=document.createElement("span"),u.setAttribute("aria-hidden","true"),u.className="line-numbers-rows",u.innerHTML=x,p.hasAttribute("data-start")&&(p.style.counterReset="linenumber "+(parseInt(p.getAttribute("data-start"),10)-1)),l.element.appendChild(u),n([p]),Prism.hooks.run("line-numbers",l)}}}),Prism.hooks.add("line-numbers",function(l){l.plugins=l.plugins||{},l.plugins.lineNumbers=!0})})();document.addEventListener("DOMContentLoaded",()=>{let e=new WeakMap;function t(){document.querySelectorAll('[role="tabpanel"]').forEach(r=>{if(!!r.classList.contains("hidden"))return;let a=r.querySelector("code"),s=r.closest(".flex")?.querySelector(".line-numbers"),l=r;if(a&&s&&l){let c=a.textContent.split(`
`).length,p=parseFloat(getComputedStyle(s).lineHeight),h=l.parentElement,w=h?h.clientHeight:0,u=w>0?w:20*p,x=Math.max(1,Math.round(u/p));l.style.maxHeight=`${u}px`,l.style.overflowY=c>x?"auto":"hidden",s.style.maxHeight=`${u}px`,s.style.overflowY=c>x?"auto":"hidden";let f=()=>{let v=l.scrollTop,S=Math.floor(v/p),y=Math.min(x,c-S),b=Array.from({length:y},(C,$)=>$+1+S).join(`
`);s.textContent=b},T=e.get(l);T&&T.abort();let k=new AbortController;e.set(l,k),f(),l.addEventListener("scroll",f,{signal:k.signal,passive:!0})}})}t(),window.addEventListener("resize",t),document.querySelectorAll('[role="tab"]').forEach(r=>{r.addEventListener("click",()=>{setTimeout(t,10)})})});var ti=Bs(zs());function Ne(e){return"Dispose"in e}function xp(){return()=>{$l(),fr(),Vn()}}function kp(){return e=>{Pl(e)}}function Cp(){return e=>{Pl(e)}}function Sp(){return()=>{fr(),Vn()}}function Ap(){return()=>{fr(),Vn()}}function $p(){let e=_p(),t=he(e.k,e.h,[]),r=new ce(t[1],cg(t[0]));return(e.i=r,r).Doc}function _p(){let e=new ue("New_1"),t=G=>Hl(G,()=>{fr()}),r=N.BindView(G=>t(Tp(G)),or().View),n=un(Js),a=un(Ys),s=un(Zs),l=un(Ks),c=un(_o),p=t(Ds()),h=t(Sl()),w=t(Cl()),u=(e.h.push(new R("warpfile",t(Ds()))),e),x=(u.h.push(new R("endpointfile",w)),u),f=(x.h.push(new R("uifile",h)),x),T=(f.h.push(new R("warpfiletabbed",p)),f),k=(T.h.push(X(T.k,"selectgenendpoint",()=>T.i,()=>{or().Set(_o)})),T),v=(k.h.push(X(k.k,"selectgenui",()=>k.i,()=>{or().Set(Ks)})),k),S=(v.h.push(X(v.k,"selectgenclient",()=>v.i,()=>{or().Set(Zs)})),v),y=(S.h.push(X(S.k,"selectgenshared",()=>S.i,()=>{or().Set(Ys)})),S),b=(y.h.push(X(y.k,"selectgenserver",()=>y.i,()=>{or().Set(Js)})),y),C=(b.h.push(new O("genendpointattr",c)),b),$=(C.h.push(new O("genuiattr",l)),C),_=($.h.push(new O("genclientattr",s)),$),E=(_.h.push(new O("gensharedattr",a)),_),L=(E.h.push(new O("genserverattr",n)),E);return L.h.push(new R("generatedcontent",r)),L}function Ds(){return Zt.warpSrc}function Cl(){return Zt.endPointSrc}function Sl(){return Zt.uiSrc}function or(){return Zt.ActiveGenTab}function un(e){let t=V(r=>H(r,e),or().View);return J.Concat([te("bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white ring-1 ring-black/5",t),te("text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",V(r=>!r,t))])}function Tp(e){return e.$==1?Sl():e.$==2?Ep():e.$==3?Vp():e.$==4?Bp():Cl()}function Ep(){return Zt.clientSrc}function Vp(){return Zt.sharedSrc}function Bp(){return Zt.serverSrc}function Np(){return Jg()}function Pp(){return ah()}function Lp(){return ih()}function Ip(){let e=N.TextView(uh()),t=N.TextView(ch()),r=new ue("New_1"),n=(r.h.push(new It("onafterrender","",()=>{dh()})),r),a=(n.h.push(new R("errortitle",t)),n),s=(a.h.push(new R("errormessage",e)),a),l=(s.h.push(X(s.k,"onretry",()=>s.i,()=>{ph()})),s),c=(l.h.push(X(l.k,"onback",()=>l.i,()=>{gh()})),l),p=he(c.k,c.h,[]),h=new ce(p[1],ug(p[0]));return(c.i=h,h).Doc}function Fp(){let e=new ue("New_1"),t=(e.h.push(new It("onafterrender","",()=>{$h()})),e),r=(t.h.push(new R("invid",Ah())),t),n=(r.h.push(new R("invdate",Sh())),r),a=(n.h.push(new R("invstatus",Ch())),n),s=(a.h.push(new R("invamount",kh())),a),l=(s.h.push(new R("invsub",xh())),s),c=(l.h.push(new R("billtoname",yh())),l),p=(c.h.push(new R("billtoaddr",vh())),c),h=(p.h.push(new R("billtovat",mh())),p),w=he(h.k,h.h,[]),u=new ce(w[1],pg(w[0]));return(h.i=u,u).Doc}function Mp(){return Vh()}function zp(){let e=new ue("New_1"),t=(e.h.push(new It("onafterrender","",()=>{Uh()})),e),r=(t.h.push(new R("messagetext",Wh())),t),n=(r.h.push(new O("detailsattr",jh())),r),a=(n.h.push(new R("detailsdoc",Hh())),n),s=he(a.k,a.h,[]),l=new ce(s[1],gg(s[0]));return(a.i=l,l).Doc}function Dp(){$l();let e=Us(),t=Ws(),r=js(),n=Hs(),a=Us(),s=Ws(),l=js(),c=Hs(),p=ib(),h=ob(),w=Os(),u=Os(),x=ab(),f=nb(),T=new ue("New_1"),k=(T.h.push(X(T.k,"togglemenu",()=>T.i,()=>{Gp()})),T),v=(k.h.push(X(k.k,"toggletheme",()=>k.i,()=>{Kp()})),k),S=(v.h.push(X(v.k,"onkeydown",()=>v.i,se=>{Xh(se)})),v),y=(S.h.push(X(S.k,"onstoppropagation",()=>S.i,se=>{Qh(se)})),S),b=(y.h.push(X(y.k,"closeonbackgroundclick",()=>y.i,se=>{eb(se)})),y),C=(b.h.push(X(b.k,"accountbtnclick",()=>b.i,se=>{tb(se)})),b),$=(C.h.push(X(C.k,"accountbtnkeydown",()=>C.i,()=>{})),C),_=($.h.push(X($.k,"logout",()=>$.i,se=>{rb(se)})),$),E=(_.h.push(new O("dropdownattr",f)),_),L=(E.h.push(new O("accountbtnaria",x)),E),G=(L.h.push(new O("avatarattr",u)),L),K=(G.h.push(new O("avatarattrhamburger",w)),G),q=(K.h.push(new O("iconattr",h)),K),I=(q.h.push(new O("skeletonattr",p)),q),re=(I.h.push(new bt("accountheadertext",Jh())),I),fe=(re.h.push(new O("headerattrd",c)),re),W=(fe.h.push(new O("btnmanageattrd",l)),fe),Q=(W.h.push(new O("btnloginattrd",s)),W),pe=(Q.h.push(new O("btnlogoutattrd",a)),Q),Ce=(pe.h.push(new O("headerattr",n)),pe),Z=(Ce.h.push(new O("btnmanageattr",r)),Ce),me=(Z.h.push(new O("btnloginattr",t)),Z),oe=(me.h.push(new O("btnlogoutattr",e)),me),ke=he(oe.k,oe.h,[]);return oe.i=new ce(ke[1],Vd(ke[0])),sb(),N.Empty}function Gp(){let e=fo("navmenu"),t=fo("openIcon"),r=fo("closeIcon"),n=globalThis.document.body;e.classList.toggle("h-screen"),t.classList.toggle("hidden-open-icon"),r.classList.toggle("visible-close-icon"),n.classList.toggle("overflow-hidden")}var Me=class{Equals(t){return this===t}GetHashCode(){return-1}},Re=ne(e=>class Al extends Me{static{Re=e(this)}static init;id;vars;static initialized;static instances;static Create(r){return new Al("",r)}static GetInstance(r){return Re.instances.Item(r)}static applyVarHole(r,n){n.ApplyVarHole(r)}InitInstance(r){let n=Re.GetHolesFor(r),a=this.vars;for(let l=0,c=a.length-1;l<=c;l++)(()=>{let p,h=U(a,l),w=h[1],u=h[2],x=h[0];if(n.ContainsKey(x))return null;if(w===0){let f=u==null?null:m(u.$0),T=f==null?"":f.$0,k=B.Create_1(T);p=new _e(x,k)}else if(w===1){let f=u==null?null:m(u.$0),T=f==null?0:f.$0,k=B.Create_1(T);p=new pa(x,k)}else if(w===2){let f=u==null?null:m(u.$0),T=f==null?!1:f.$0,k=B.Create_1(T);p=new xn(x,k)}else if(w===3){let f=u==null?null:m(u.$0),T=f==null?-864e13:f.$0,k=B.Create_1(T);p=new ga(x,k)}else if(w===4){let f=u==null?null:m(u.$0),T=f==null?[]:f.$0,k=B.Create_1(T);p=new ha(x,k)}else if(w===5){let f=u==null?null:m(u.$0),T=globalThis.document.querySelector("[ws-dom="+x+"]"),k=f==null?T:f.$0,v=m(k),S=B.Create_1(v);p=new kn(x,S)}else if(w===6){let f=u==null?null:m(u.$0),T=f==null?[]:f.$0,k=B.Create_1(T);p=new ba(x,k)}else p=Pe("Invalid kind for template Var type: "+String(w));return n.set_Item(x,p)})();let s=new ce({$:0,$0:n},N.Empty);return Re.instances.set_Item(r,s),s}static GetOrAddHoleFor(r,n,a){let s,l=Re.GetHolesFor(r),c=(s=null,[l.TryGetValue(n,{get:()=>s,set:p=>{s=p}}),s]);if(c[0])return c[1];{let p=a();return l.set_Item(n,p),p}}static GetHolesFor(r){let n,a=(n=null,[Re.initialized.TryGetValue(r,{get:()=>n,set:s=>{n=s}}),n]);if(a[0])return a[1];{let s=new Ue("New_5");return Re.initialized.set_Item(r,s),s}}$preinit(r){let n=this.InitInstance(r),a=globalThis.document.querySelectorAll("[ws-var^='"+r+"::']");for(let s=0,l=a.length-1;s<=l;s++){let c=a[s],p=c.getAttribute("ws-var"),h=n.Hole(Lt(p,m(r.length+2),null)),w=h.WithName(p);Ed().set_Item(w.Name,w),Re.applyVarHole(c,h)}}$init(r){}$postinit(r){Vd([])}constructor(r,n){super(),this.id=r,this.vars=n}static{Re.initialized=new Ue("New_5"),Re.instances=new Ue("New_5")}});function Rp(e,t,r){return n=>{let a=Re.GetInstance(e);a.SetAnchorRoot(t),r({Vars:a,Anchors:a,Target:t,Event:n})}}function Op(){return e=>{ri(e.Event)}}function Hp(){return()=>{fr(),Vn()}}function jp(){return e=>{ri(e.Event)}}function Wp(){return()=>{fr(),Vn()}}function Up(){return e=>{ri(e.Event)}}function qp(e){let t=new Ue("New_5"),r=ae(e);try{for(;r.MoveNext();){let n=r.Current;t.DAdd(n[0],n[1])}}finally{let n=r;typeof n=="object"&&Ne(n)&&r.Dispose()}return t}function $l(){_l();let e=globalThis.localStorage.getItem("theme");Tl(e=="dark"||e=="light"||e=="system"?e:"dark")}function Kp(){Zp(El()=="dark"?"light":"dark")}function _l(){let e=El(),t=globalThis.document.querySelectorAll(".themed-iframe");for(let r=0,n=ai(t.length)-1;r<=n;r++){let a=t[r],s=a.getAttribute("data-src");if(s!=null){let l=new URL(s,globalThis.location.href);l.searchParams.set("theme",e),a.setAttribute("src",String(l))}}}function Tl(e){let t=Yp(e);Jp(t=="dark"),aa().style["color-scheme"]=t}function Zp(e){Tl(e),globalThis.localStorage.setItem("theme",e),_l()}function El(){return aa().classList.contains("dark")?"dark":"light"}function Yp(e){return e=="system"?Xp()?"dark":"light":e}function Jp(e){e?aa().classList.add("dark"):aa().classList.remove("dark")}function aa(){return globalThis.document.documentElement}function Xp(){return globalThis.matchMedia("(prefers-color-scheme: dark)").matches}function fr(){return kl.default.highlightAll()}function Vn(){let e=globalThis.document.querySelectorAll("[data-name='snippet']");for(let t=0,r=ai(e.length)-1;t<=r;t++)Qp(e[t])}function ri(e){let t=eg(e);t==null||tg(t.$0)}function Qp(e){let t=e.querySelectorAll("[role='tab']");if(t.length>0){let r=t[0];Vl(r);let n=ur(e.querySelector(".tab-indicator"));n==null||Bl(n.$0,r);let a=ur(r.getAttribute("data-target"));a==null||Nl(e,a.$0)}}function eg(e){let t=e.target;if(t instanceof Element){let r=ur(t.closest("[role='tab']"));return r==null?null:m(r.$0)}else return null}function tg(e){let t=ur(e.closest("[data-name='snippet']"));if(t!=null&&t.$==1){let r=t.$0,n=ur(r.querySelector(".tab-indicator"));n==null||Bl(n.$0,e),Vl(e);let a=ur(e.getAttribute("data-target"));a==null||Nl(r,a.$0)}}function Vl(e){let t=ur(e.parentElement);t!=null&&t.$==1&&gi(r=>{r.setAttribute("aria-selected",r.isSameNode(e)?"true":"false")},jl(t.$0,"[role='tab']"))}function ur(e){return e==null?null:m(e)}function Bl(e,t){ng(e,rg(t,t.parentElement))}function Nl(e,t){gi(r=>{r.getAttribute("data-lang")==t?r.classList.remove("hidden"):r.classList.add("hidden")},jl(e,"[role='tabpanel']"))}function rg(e,t){let r,n;return ty((r=e.getBoundingClientRect().left-t.getBoundingClientRect().left,String(r)+"px"),(n=e.getBoundingClientRect().width,String(n)+"px"))}function ng(e,t){e.style.left=t.LeftPx,e.style.width=t.WidthPx}function Pl(e){let t=e.Target;rt(ag(ut(t.closest("div").querySelector(".text-to-copy").textContent),t.querySelector(".copy"),t.querySelector(".success"),t.querySelector(".failed")),null)}function ag(e,t,r,n){return F(()=>Vt(F(()=>M(ci(navigator.clipboard.writeText(e)),()=>(Co(t),So(r),Gs(t,r,1e3),Y()))),()=>(Co(t),So(n),Gs(t,n,1e3),Y())))}function Co(e){e?.classList.add("hidden")}function So(e){e?.classList.remove("hidden")}function Gs(e,t,r){setTimeout(()=>{So(e),Co(t)},r)}var ce=class extends Me{doc;allVars;anchorRoot;get Doc(){return this.doc}SetAnchorRoot(t){this.anchorRoot=t}Hole(t){return this.allVars.Item(t)}constructor(t,r){super(),this.doc=r,this.allVars=t.$==0?t.$0:Pe("Should not happen"),this.anchorRoot=null}};function U(e,t){return Ll(e,t),e[t]}function Ll(e,t){(t<0||t>=e.length)&&Pe("Index was outside the bounds of the array.")}function fn(e,t,r){Ll(e,t),e[t]=r}function ge(e){return e.dims===2?e.length*e.length:e.length}function H(e,t){if(e===t)return!0;{let a=typeof e;if(a=="object"){if(e==null||t===null||t===void 0||!H(typeof t,"object"))return!1;if("Equals"in e)return e.Equals(t);if("Equals"in t)return!1;if(e instanceof Array&&t instanceof Array)return Rs(e,t);if(e instanceof Date&&t instanceof Date)return og(e,t);{let s=e,l=t,c=[!0],p;for(var r in s)if((h=>(c[0]=!s.hasOwnProperty(h)||l.hasOwnProperty(h)&&H(s[h],l[h]),!c[0]))(r))break;if(c[0]){let h;for(var n in l)if((w=>(c[0]=!l.hasOwnProperty(w)||s.hasOwnProperty(w),!c[0]))(n))break}return c[0]}}else return a=="function"&&("$Func"in e?e.$Func===t.$Func&&e.$Target===t.$Target:"$Invokes"in e&&"$Invokes"in t&&Rs(e.$Invokes,t.$Invokes))}}function Rs(e,t){let r,n;if(ge(e)===ge(t)){for(r=!0,n=0;r&&n<ge(e);)H(U(e,n),U(t,n))||(r=!1),n=n+1;return r}else return!1}function og(e,t){return e.getTime()===t.getTime()}function wr(e){let t=typeof e;return t=="function"?0:t=="boolean"?e?1:0:t=="number"?e:t=="string"?ta(e):t=="object"?e==null?0:e instanceof Array?ig(e):sg(e):t=="bigint"?ta(String(e)):t=="symbol"?ta(e.description):0}function ta(e){let t;if(e===null)return 0;t=5381;for(let r=0,n=e.length-1;r<=n;r++)t=ni(t,e[r].charCodeAt());return t}function ig(e){let t=-34948909;for(let r=0,n=ge(e)-1;r<=n;r++)t=ni(t,wr(U(e,r)));return t}function sg(e){if("GetHashCode"in e)return e.GetHashCode();{let r=ni,n=[0],a;for(var t in e)if((s=>(n[0]=r(r(n[0],ta(s)),wr(e[s])),!1))(t))break;return n[0]}}function ft(e,t){if(e===t)return 0;{let a=typeof e;switch(a=="boolean"||a=="number"||a=="bigint"||a=="string"?1:a=="object"?2:a=="function"?3:a=="symbol"?4:0){case 0:return typeof t>"u"?0:-1;case 1:return e<t?-1:1;case 2:if(e===null)return-1;if(t===null)return 1;if("CompareTo"in e)return e.CompareTo(t);if("CompareTo0"in e)return e.CompareTo0(t);if(e instanceof Array&&t instanceof Array)return lg(e,t);if(e instanceof Date&&t instanceof Date)return dg(e,t);{let s=e,l=t,c=[0],p;for(var r in s)if((h=>s.hasOwnProperty(h)?l.hasOwnProperty(h)?(c[0]=ft(s[h],l[h]),c[0]!==0):(c[0]=1,!0):!1)(r))break;if(c[0]===0){let h;for(var n in l)if((w=>l.hasOwnProperty(w)?!s.hasOwnProperty(w)&&(c[0]=-1,!0):!1)(n))break}return c[0]}break;case 3:return Pe("Cannot compare function values.");case 4:return Pe("Cannot compare symbol values.")}}}function ni(e,t){return(e<<5)+e+t}function lg(e,t){let r,n;if(ge(e)<ge(t))return-1;if(ge(e)>ge(t))return 1;for(r=0,n=0;r===0&&n<ge(e);)r=ft(U(e,n),U(t,n)),n=n+1;return r}function dg(e,t){return ft(e.getTime(),t.getTime())}var ro,no,ao,oo,io,so,lo,co,uo,po,go,ho,bo,wo;function cg(e){return e?xe("features",m("scgtemplate"),()=>D(`<div class="border-t border-gray-200 dark:border-gray-800 pt-16">\r
                <div class="mx-auto max-w-2xl lg:text-center mb-12">\r
                    <h2 class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Metaprogramming</h2>\r
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Source Code Generators</p>\r
                    <p class="mt-4 text-gray-600 dark:text-gray-300">\r
                        Write high-level specifications in F# (Warp) and let WebSharper generate the optimized boilerplate for you.\r
                    </p>\r
                </div>\r
\r
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-16">\r
                    <div class="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 h-96 flex flex-col">\r
                        <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">\r
                            <span class="text-xs font-mono text-yellow-400">MyApp.warp</span>\r
                        </div>\r
                        <div class="snippet-code flex-1 overflow-hidden" ws-hole="WarpFile"></div>\r
                    </div>\r
\r
                    <div class="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 h-96 flex flex-col">\r
                        <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">\r
                            <span class="text-xs font-mono text-blue-400">MyApp.warp_EndPoint.fs</span>\r
                        </div>\r
                        <div class="snippet-code flex-1 overflow-hidden" ws-hole="EndPointFile"></div>\r
                    </div>\r
\r
                    <div class="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 h-96 flex flex-col">\r
                        <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">\r
                            <span class="text-xs font-mono text-blue-400">MyApp.warp_UI.fs</span>\r
                        </div>\r
                        <div class="snippet-code flex-1 overflow-hidden" ws-hole="UiFile"></div>\r
                    </div>\r
                </div>\r
\r
                <div class="mx-auto max-w-2xl lg:text-center mb-8">\r
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Interactive Explorer</h3>\r
                </div>\r
\r
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start h-[32rem]">\r
\r
                    <div class="rounded-xl bg-white dark:bg-gray-900 p-1 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 h-full flex flex-col">\r
                        <div class="flex items-center justify-between px-4 h-14 border-b border-gray-100 dark:border-gray-800">\r
                            <span class="text-xs font-mono text-yellow-500 font-semibold">MyApp.warp</span>\r
                        </div>\r
                        <div class="flex-1 overflow-hidden relative">\r
                            <div class="snippet-code h-full w-full" ws-hole="WarpFileTabbed"></div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="lg:col-span-2 rounded-xl bg-white dark:bg-gray-900 p-1 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 h-full flex flex-col">\r
                        <div class="flex items-center gap-4 px-2 h-14 border-b border-gray-100 dark:border-gray-800">\r
                            <div class="flex p-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg w-full overflow-x-auto no-scrollbar">\r
                                <button ws-onclick="SelectGenEndPoint" ws-attr="GenEndPointAttr" class="flex-1 min-w-max rounded-md px-3 py-1.5 text-xs font-medium transition-all">EndPoint.fs</button>\r
                                <button ws-onclick="SelectGenUI" ws-attr="GenUIAttr" class="flex-1 min-w-max rounded-md px-3 py-1.5 text-xs font-medium transition-all">UI.fs</button>\r
                                <button ws-onclick="SelectGenClient" ws-attr="GenClientAttr" class="flex-1 min-w-max rounded-md px-3 py-1.5 text-xs font-medium transition-all">Client.fs</button>\r
                                <button ws-onclick="SelectGenShared" ws-attr="GenSharedAttr" class="flex-1 min-w-max rounded-md px-3 py-1.5 text-xs font-medium transition-all">Shared.fs</button>\r
                                <button ws-onclick="SelectGenServer" ws-attr="GenServerAttr" class="flex-1 min-w-max rounded-md px-3 py-1.5 text-xs font-medium transition-all">Server.fs</button>\r
                            </div>\r
                        </div>\r
                        <div class="flex-1 overflow-hidden relative group">\r
                            <div class="absolute inset-0 snippet-code" ws-hole="GeneratedContent"></div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
            </div>`),e):we("features",m("scgtemplate"),()=>D(`<div class="border-t border-gray-200 dark:border-gray-800 pt-16">\r
                <div class="mx-auto max-w-2xl lg:text-center mb-12">\r
                    <h2 class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Metaprogramming</h2>\r
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Source Code Generators</p>\r
                    <p class="mt-4 text-gray-600 dark:text-gray-300">\r
                        Write high-level specifications in F# (Warp) and let WebSharper generate the optimized boilerplate for you.\r
                    </p>\r
                </div>\r
\r
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-16">\r
                    <div class="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 h-96 flex flex-col">\r
                        <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">\r
                            <span class="text-xs font-mono text-yellow-400">MyApp.warp</span>\r
                        </div>\r
                        <div class="snippet-code flex-1 overflow-hidden" ws-hole="WarpFile"></div>\r
                    </div>\r
\r
                    <div class="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 h-96 flex flex-col">\r
                        <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">\r
                            <span class="text-xs font-mono text-blue-400">MyApp.warp_EndPoint.fs</span>\r
                        </div>\r
                        <div class="snippet-code flex-1 overflow-hidden" ws-hole="EndPointFile"></div>\r
                    </div>\r
\r
                    <div class="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 h-96 flex flex-col">\r
                        <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">\r
                            <span class="text-xs font-mono text-blue-400">MyApp.warp_UI.fs</span>\r
                        </div>\r
                        <div class="snippet-code flex-1 overflow-hidden" ws-hole="UiFile"></div>\r
                    </div>\r
                </div>\r
\r
                <div class="mx-auto max-w-2xl lg:text-center mb-8">\r
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Interactive Explorer</h3>\r
                </div>\r
\r
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start h-[32rem]">\r
\r
                    <div class="rounded-xl bg-white dark:bg-gray-900 p-1 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 h-full flex flex-col">\r
                        <div class="flex items-center justify-between px-4 h-14 border-b border-gray-100 dark:border-gray-800">\r
                            <span class="text-xs font-mono text-yellow-500 font-semibold">MyApp.warp</span>\r
                        </div>\r
                        <div class="flex-1 overflow-hidden relative">\r
                            <div class="snippet-code h-full w-full" ws-hole="WarpFileTabbed"></div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="lg:col-span-2 rounded-xl bg-white dark:bg-gray-900 p-1 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 h-full flex flex-col">\r
                        <div class="flex items-center gap-4 px-2 h-14 border-b border-gray-100 dark:border-gray-800">\r
                            <div class="flex p-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg w-full overflow-x-auto no-scrollbar">\r
                                <button ws-onclick="SelectGenEndPoint" ws-attr="GenEndPointAttr" class="flex-1 min-w-max rounded-md px-3 py-1.5 text-xs font-medium transition-all">EndPoint.fs</button>\r
                                <button ws-onclick="SelectGenUI" ws-attr="GenUIAttr" class="flex-1 min-w-max rounded-md px-3 py-1.5 text-xs font-medium transition-all">UI.fs</button>\r
                                <button ws-onclick="SelectGenClient" ws-attr="GenClientAttr" class="flex-1 min-w-max rounded-md px-3 py-1.5 text-xs font-medium transition-all">Client.fs</button>\r
                                <button ws-onclick="SelectGenShared" ws-attr="GenSharedAttr" class="flex-1 min-w-max rounded-md px-3 py-1.5 text-xs font-medium transition-all">Shared.fs</button>\r
                                <button ws-onclick="SelectGenServer" ws-attr="GenServerAttr" class="flex-1 min-w-max rounded-md px-3 py-1.5 text-xs font-medium transition-all">Server.fs</button>\r
                            </div>\r
                        </div>\r
                        <div class="flex-1 overflow-hidden relative group">\r
                            <div class="absolute inset-0 snippet-code" ws-hole="GeneratedContent"></div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
            </div>`))}function ug(e){return e?xe("error",m("content"),()=>D(`\r
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
    `),e):we("error",m("content"),()=>D(`\r
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
    `))}function pg(e){return e?xe("invoice",m("content"),()=>D(`\r
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
    `),e):we("invoice",m("content"),()=>D(`\r
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
    `))}function gg(e){return e?xe("success",m("content"),()=>D(`\r
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
    `),e):we("success",m("content"),()=>D(`\r
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
    `))}function hg(e){return e?xe("examples",m("content"),()=>D(`\r
        <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-20" ws-onafterrender="Init">\r
\r
            <div class="mx-auto max-w-2xl lg:text-center mb-16">\r
                <h2 class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">WebSharper Capabilities</h2>\r
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Everything you need to build modern apps</p>\r
                <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">\r
                    Explore the power of F# full-stack development.\r
                </p>\r
            </div>\r
\r
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-[260px_1fr] mb-24">\r
                <aside class="h-max">\r
                    <nav aria-label="Features" class="rounded-xl border border-gray-200 p-3 dark:border-gray-800">\r
                        <ul class="space-y-1 text-sm">\r
                            <li>\r
                                <button ws-onclick="SelectCharts" ws-attr="ChartsTabAttr" class="w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-white/5">Charts</button>\r
                            </li>\r
                            <li>\r
                                <button ws-onclick="SelectMaps" ws-attr="MapsTabAttr" class="w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-white/5">Maps</button>\r
                            </li>\r
                            <li>\r
                                <button ws-onclick="SelectForms" ws-attr="FormsTabAttr" class="w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-white/5">Forms</button>\r
                            </li>\r
                            <li>\r
                                <button ws-onclick="SelectSpreadsheet" ws-attr="SpreadsheetTabAttr" class="w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-white/5">Spreadsheet</button>\r
                            </li>\r
                        </ul>\r
                    </nav>\r
                </aside>\r
\r
                <section class="animate-[fadeIn_0.5s_ease-out]">\r
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 h-[42rem]">\r
\r
                        <div class="rounded-xl bg-white dark:bg-gray-900 p-4 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 flex flex-col">\r
                            <div class="flex items-center justify-between h-10 mb-2 border-b border-gray-300 dark:border-gray-700">\r
                                <span class="text-xs font-mono text-gray-400">F# / Source</span>\r
                            </div>\r
                            <div class="snippet-code flex-1" ws-hole="CodeContent"></div>\r
                        </div>\r
\r
                        <div class="h-full rounded-xl bg-white dark:bg-gray-900 p-4 shadow-sm ring-1 ring-gray-200 dark:ring-white/10 overflow-auto flex flex-col relative border border-gray-200 dark:border-transparent">\r
                            <div class="flex items-center justify-between h-10 mb-2 border-b border-gray-100 dark:border-gray-700">\r
                                <span class="text-xs font-mono text-gray-500 dark:text-gray-400">Live Preview</span>\r
                            </div>\r
                            <div class="flex-1" ws-hole="ResultContent"></div>\r
                        </div>\r
\r
                    </div>\r
                </section>\r
            </div>\r
\r
        </div>\r
\r
        <div></div>\r
\r
        <div></div>\r
\r
        <div></div>\r
\r
        <div></div>\r
    `),e):we("examples",m("content"),()=>D(`\r
        <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-20" ws-onafterrender="Init">\r
\r
            <div class="mx-auto max-w-2xl lg:text-center mb-16">\r
                <h2 class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">WebSharper Capabilities</h2>\r
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Everything you need to build modern apps</p>\r
                <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">\r
                    Explore the power of F# full-stack development.\r
                </p>\r
            </div>\r
\r
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-[260px_1fr] mb-24">\r
                <aside class="h-max">\r
                    <nav aria-label="Features" class="rounded-xl border border-gray-200 p-3 dark:border-gray-800">\r
                        <ul class="space-y-1 text-sm">\r
                            <li>\r
                                <button ws-onclick="SelectCharts" ws-attr="ChartsTabAttr" class="w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-white/5">Charts</button>\r
                            </li>\r
                            <li>\r
                                <button ws-onclick="SelectMaps" ws-attr="MapsTabAttr" class="w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-white/5">Maps</button>\r
                            </li>\r
                            <li>\r
                                <button ws-onclick="SelectForms" ws-attr="FormsTabAttr" class="w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-white/5">Forms</button>\r
                            </li>\r
                            <li>\r
                                <button ws-onclick="SelectSpreadsheet" ws-attr="SpreadsheetTabAttr" class="w-full text-left rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-white/5">Spreadsheet</button>\r
                            </li>\r
                        </ul>\r
                    </nav>\r
                </aside>\r
\r
                <section class="animate-[fadeIn_0.5s_ease-out]">\r
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 h-[42rem]">\r
\r
                        <div class="rounded-xl bg-white dark:bg-gray-900 p-4 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 flex flex-col">\r
                            <div class="flex items-center justify-between h-10 mb-2 border-b border-gray-300 dark:border-gray-700">\r
                                <span class="text-xs font-mono text-gray-400">F# / Source</span>\r
                            </div>\r
                            <div class="snippet-code flex-1" ws-hole="CodeContent"></div>\r
                        </div>\r
\r
                        <div class="h-full rounded-xl bg-white dark:bg-gray-900 p-4 shadow-sm ring-1 ring-gray-200 dark:ring-white/10 overflow-auto flex flex-col relative border border-gray-200 dark:border-transparent">\r
                            <div class="flex items-center justify-between h-10 mb-2 border-b border-gray-100 dark:border-gray-700">\r
                                <span class="text-xs font-mono text-gray-500 dark:text-gray-400">Live Preview</span>\r
                            </div>\r
                            <div class="flex-1" ws-hole="ResultContent"></div>\r
                        </div>\r
\r
                    </div>\r
                </section>\r
            </div>\r
\r
        </div>\r
\r
        <div></div>\r
\r
        <div></div>\r
\r
        <div></div>\r
\r
        <div></div>\r
    `))}function bg(e){return e?xe("forteams",m("content"),()=>D(`\r
        <div class="relative isolate overflow-hidden" ws-onafterrender="OnAfterRender">\r
            <!-- Decorative background: aurora orbs + grid -->\r
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">\r
                <div class="absolute -top-48 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-primary/25 blur-3xl dark:bg-brand-primary/10"></div>\r
                <div class="absolute -left-32 top-1/3 h-96 w-96 animate-pulse rounded-full bg-sky-400/25 blur-3xl dark:bg-sky-500/10"></div>\r
                <div class="absolute -right-32 bottom-0 h-96 w-96 animate-pulse rounded-full bg-indigo-400/25 blur-3xl dark:bg-indigo-500/10"></div>\r
                <div class="absolute inset-0 opacity-[0.28] dark:hidden" style="background-image:linear-gradient(to right, rgba(100,116,139,0.35) 1px, transparent 1px),linear-gradient(to bottom, rgba(100,116,139,0.35) 1px, transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse at center, black 25%, transparent 72%);-webkit-mask-image:radial-gradient(ellipse at center, black 25%, transparent 72%)"></div>\r
                <div class="absolute inset-0 hidden opacity-25 dark:block" style="background-image:linear-gradient(to right, rgba(148,163,184,0.4) 1px, transparent 1px),linear-gradient(to bottom, rgba(148,163,184,0.4) 1px, transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse at center, black 25%, transparent 72%);-webkit-mask-image:radial-gradient(ellipse at center, black 25%, transparent 72%)"></div>\r
            </div>\r
\r
            <!-- Hero -->\r
            <section class="relative mx-auto max-w-4xl px-6 pt-32 pb-14 text-center sm:pt-40 lg:px-8">\r
                <span class="inline-flex items-center gap-2 rounded-full border border-brand-primary/40 bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-800 dark:border-brand-primary/25 dark:bg-brand-primary/10 dark:text-gray-200">\r
                    <span class="relative flex size-2">\r
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75"></span>\r
                        <span class="relative inline-flex size-2 rounded-full bg-brand-primary"></span>\r
                    </span>\r
                    For Teams \u2014 coming soon\r
                </span>\r
\r
                <h1 class="mx-auto mt-8 max-w-3xl text-4xl font-bold tracking-tight text-gray-950 sm:text-6xl dark:text-white">\r
                    WebSharper for Teams\r
                </h1>\r
\r
                <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300">\r
                    AI developer tools and governance for your whole team \u2014 with enterprise assurance as a second line of defence. We are putting the finishing touches on this page. Tell us what you need and we will be in touch.\r
                </p>\r
\r
                <div class="mt-10 flex flex-wrap items-center justify-center gap-3">\r
                    <a href="#contact" class="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-950 bg-gray-950 px-6 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 dark:border-gray-800 dark:bg-white dark:text-gray-950">\r
                        Contact us\r
                        <svg class="size-4 transition-transform duration-300 group-hover:translate-y-0.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5m0 0 6 6m-6-6 6-6" transform="rotate(-90 12 12)"></path></svg>\r
                    </a>\r
                    <a href="https://docs.websharper.com/" class="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5">\r
                        Read the docs\r
                    </a>\r
                </div>\r
            </section>\r
\r
            <!-- Graphic: orbit + preview window -->\r
            <section class="relative mx-auto max-w-6xl px-6 pb-24 lg:px-8">\r
                <div class="grid items-center gap-12 lg:grid-cols-2">\r
\r
                    <!-- Orbit illustration -->\r
                    <div class="relative mx-auto aspect-square w-full max-w-md">\r
                        <svg viewbox="0 0 400 400" class="h-full w-full" role="img" aria-label="An orbiting WebSharper logo illustration">\r
                            <defs>\r
                                <lineargradient id="ft-ring" x1="0" y1="0" x2="1" y2="1">\r
                                    <stop offset="0%" stop-color="#36b9ff" stop-opacity="0.85"></stop>\r
                                    <stop offset="100%" stop-color="#6366f1" stop-opacity="0.15"></stop>\r
                                </lineargradient>\r
                            </defs>\r
\r
                            <circle cx="200" cy="200" r="168" fill="none" stroke="url(#ft-ring)" stroke-width="1.5" stroke-dasharray="4 8" class="opacity-70"></circle>\r
                            <circle cx="200" cy="200" r="118" fill="none" stroke="url(#ft-ring)" stroke-width="1.5" stroke-dasharray="4 8" class="opacity-50"></circle>\r
\r
                            <g class="animate-spin [transform-box:fill-box] origin-center [animation-duration:26s]">\r
                                <circle cx="200" cy="32" r="9" class="fill-brand-primary"></circle>\r
                                <circle cx="368" cy="200" r="6" class="fill-sky-400"></circle>\r
                            </g>\r
                            <g class="animate-spin [transform-box:fill-box] origin-center [animation-duration:18s] [animation-direction:reverse]">\r
                                <circle cx="200" cy="82" r="7" class="fill-indigo-400"></circle>\r
                                <circle cx="318" cy="200" r="5" class="fill-brand-primary/70"></circle>\r
                            </g>\r
                        </svg>\r
\r
                        <div class="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-gray-200 bg-white/80 shadow-lg shadow-brand-primary/10 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">\r
                            <img src="./Assets/favicon.png" alt="WebSharper" class="size-12">\r
                        </div>\r
                    </div>\r
\r
                    <!-- Preview window (mock editor) -->\r
                    <div class="relative">\r
                        <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-950/5 dark:border-gray-800 dark:bg-gray-900">\r
                            <div class="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-950/60">\r
                                <span class="h-3 w-3 rounded-full" style="background-color:#ff5f57"></span>\r
                                <span class="h-3 w-3 rounded-full" style="background-color:#febc2e"></span>\r
                                <span class="h-3 w-3 rounded-full" style="background-color:#28c840"></span>\r
                                <span class="ml-3 text-xs font-medium text-gray-500 dark:text-gray-400">team.policy.fs</span>\r
                                <span class="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-200">\r
                                    <span class="size-1.5 animate-pulse rounded-full bg-brand-primary"></span>\r
                                    Reviewing\u2026\r
                                </span>\r
                            </div>\r
                            <div class="space-y-3 p-6">\r
                                <div class="flex items-center gap-2">\r
                                    <span class="h-3 w-3 rounded-full bg-brand-primary/70"></span>\r
                                    <span class="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                    <span class="h-2.5 w-40 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                </div>\r
                                <div class="space-y-2.5 pl-5">\r
                                    <span class="block h-2.5 w-3/4 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                    <span class="block h-2.5 w-1/2 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                    <span class="block h-2.5 w-2/3 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                    <span class="block h-2.5 w-5/12 animate-pulse rounded-full bg-brand-primary/30"></span>\r
                                    <span class="block h-2.5 w-3/5 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                </div>\r
                                <div class="flex items-center gap-2 pt-2">\r
                                    <span class="h-3 w-3 rounded-full bg-emerald-400/80"></span>\r
                                    <span class="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                </div>\r
                                <div class="space-y-2.5 pl-5">\r
                                    <span class="block h-2.5 w-2/3 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                    <span class="block h-2.5 w-4/12 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="absolute -right-3 -top-3 rotate-6 rounded-xl border border-brand-primary/30 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-800 shadow-lg dark:border-brand-primary/25 dark:bg-gray-900 dark:text-gray-100">\r
                            Coming soon\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
\r
        <!-- What For Teams will bring -->\r
        <section class="mx-auto max-w-7xl px-6 pb-24 lg:px-8">\r
            <div class="mx-auto max-w-2xl text-center">\r
                <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">What For Teams will bring</h2>\r
                <p class="mt-3 text-gray-700 dark:text-gray-300">AI developer tooling and governance first, with enterprise assurance as an added layer for teams that need it.</p>\r
            </div>\r
\r
            <div class="mt-12 grid gap-6 md:grid-cols-3">\r
                <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-950/5 transition-transform duration-300 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-950">\r
                    <div class="flex size-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">\r
                        <svg class="size-6" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.091 3.091ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"></path></svg>\r
                    </div>\r
                    <h3 class="mt-4 font-semibold text-gray-900 dark:text-white">AI developer tools</h3>\r
                    <p class="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">AI-assisted generation, review and refactoring that understands your WebSharper codebase and stays on your conventions.</p>\r
                </div>\r
\r
                <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-950/5 transition-transform duration-300 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-950">\r
                    <div class="flex size-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">\r
                        <svg class="size-6" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path></svg>\r
                    </div>\r
                    <h3 class="mt-4 font-semibold text-gray-900 dark:text-white">Governance</h3>\r
                    <p class="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">Policy, review and audit guardrails so AI-assisted changes stay safe, traceable and aligned across every team.</p>\r
                </div>\r
\r
                <div class="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-950/5 transition-transform duration-300 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-950">\r
                    <span class="absolute right-4 top-4 inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-500 dark:border-white/20 dark:text-gray-400">Add-on</span>\r
                    <div class="flex size-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">\r
                        <svg class="size-6" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>\r
                    </div>\r
                    <h3 class="mt-4 font-semibold text-gray-900 dark:text-white">Enterprise assurance</h3>\r
                    <p class="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">A second line of defence for regulated and high-stakes work: oversight, provenance and escalation to the team that builds WebSharper.</p>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <!-- Contact us -->\r
        <section id="contact" class="mx-auto max-w-3xl scroll-mt-24 px-6 pb-28 lg:px-8">\r
            <div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm shadow-gray-950/5 sm:p-10 dark:border-gray-800 dark:bg-gray-950">\r
                <div class="text-center">\r
                    <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">Contact us</h2>\r
                    <p class="mx-auto mt-3 max-w-xl text-gray-700 dark:text-gray-300">Tell us about your team and what you need. We will get back to you.</p>\r
                </div>\r
\r
                <form method="post" class="mt-8 space-y-6">\r
                    <!-- Subject -->\r
                    <div>\r
                        <label for="emailSubject" class="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-200">Subject</label>\r
                        <input type="text" name="email-subject" ws-var="ContactSubjectVar" class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white" value="WebSharper for Teams">\r
                    </div>\r
\r
                    <!-- Message -->\r
                    <div>\r
                        <label for="emailMessage" class="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-200">Message</label>\r
                        <textarea name="email-message" rows="5" ws-var="ContactMessageVar" class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white"></textarea>\r
                    </div>\r
\r
                    <!-- Email, Name, Country -->\r
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">\r
                        <div>\r
                            <label for="emailAddress" class="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-200">Your email address</label>\r
                            <input type="email" name="email-address" ws-var="ContactEmailVar" class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white">\r
                        </div>\r
\r
                        <div>\r
                            <label for="emailName" class="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-200">Your name</label>\r
                            <input type="text" name="name" ws-var="ContactNameVar" class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white">\r
                        </div>\r
\r
                        <div>\r
                            <label for="emailCountry" class="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-200">Your country</label>\r
                            <select name="email-country" ws-var="ContactCountryVar" class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white">\r
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
                        <button ws-attr="ContactSendButtonAttr" type="button" ws-onclick="OnContactSendClick" class="inline-flex h-11 items-center justify-center rounded-xl border border-gray-950 bg-gray-950 px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-white dark:text-gray-950">\r
                            \${ContactSendButtonText}\r
                        </button>\r
                    </div>\r
                </form>\r
            </div>\r
        </section>\r
    `),e):we("forteams",m("content"),()=>D(`\r
        <div class="relative isolate overflow-hidden" ws-onafterrender="OnAfterRender">\r
            <!-- Decorative background: aurora orbs + grid -->\r
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">\r
                <div class="absolute -top-48 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-primary/25 blur-3xl dark:bg-brand-primary/10"></div>\r
                <div class="absolute -left-32 top-1/3 h-96 w-96 animate-pulse rounded-full bg-sky-400/25 blur-3xl dark:bg-sky-500/10"></div>\r
                <div class="absolute -right-32 bottom-0 h-96 w-96 animate-pulse rounded-full bg-indigo-400/25 blur-3xl dark:bg-indigo-500/10"></div>\r
                <div class="absolute inset-0 opacity-[0.28] dark:hidden" style="background-image:linear-gradient(to right, rgba(100,116,139,0.35) 1px, transparent 1px),linear-gradient(to bottom, rgba(100,116,139,0.35) 1px, transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse at center, black 25%, transparent 72%);-webkit-mask-image:radial-gradient(ellipse at center, black 25%, transparent 72%)"></div>\r
                <div class="absolute inset-0 hidden opacity-25 dark:block" style="background-image:linear-gradient(to right, rgba(148,163,184,0.4) 1px, transparent 1px),linear-gradient(to bottom, rgba(148,163,184,0.4) 1px, transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse at center, black 25%, transparent 72%);-webkit-mask-image:radial-gradient(ellipse at center, black 25%, transparent 72%)"></div>\r
            </div>\r
\r
            <!-- Hero -->\r
            <section class="relative mx-auto max-w-4xl px-6 pt-32 pb-14 text-center sm:pt-40 lg:px-8">\r
                <span class="inline-flex items-center gap-2 rounded-full border border-brand-primary/40 bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-800 dark:border-brand-primary/25 dark:bg-brand-primary/10 dark:text-gray-200">\r
                    <span class="relative flex size-2">\r
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75"></span>\r
                        <span class="relative inline-flex size-2 rounded-full bg-brand-primary"></span>\r
                    </span>\r
                    For Teams \u2014 coming soon\r
                </span>\r
\r
                <h1 class="mx-auto mt-8 max-w-3xl text-4xl font-bold tracking-tight text-gray-950 sm:text-6xl dark:text-white">\r
                    WebSharper for Teams\r
                </h1>\r
\r
                <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300">\r
                    AI developer tools and governance for your whole team \u2014 with enterprise assurance as a second line of defence. We are putting the finishing touches on this page. Tell us what you need and we will be in touch.\r
                </p>\r
\r
                <div class="mt-10 flex flex-wrap items-center justify-center gap-3">\r
                    <a href="#contact" class="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-950 bg-gray-950 px-6 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 dark:border-gray-800 dark:bg-white dark:text-gray-950">\r
                        Contact us\r
                        <svg class="size-4 transition-transform duration-300 group-hover:translate-y-0.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5m0 0 6 6m-6-6 6-6" transform="rotate(-90 12 12)"></path></svg>\r
                    </a>\r
                    <a href="https://docs.websharper.com/" class="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5">\r
                        Read the docs\r
                    </a>\r
                </div>\r
            </section>\r
\r
            <!-- Graphic: orbit + preview window -->\r
            <section class="relative mx-auto max-w-6xl px-6 pb-24 lg:px-8">\r
                <div class="grid items-center gap-12 lg:grid-cols-2">\r
\r
                    <!-- Orbit illustration -->\r
                    <div class="relative mx-auto aspect-square w-full max-w-md">\r
                        <svg viewbox="0 0 400 400" class="h-full w-full" role="img" aria-label="An orbiting WebSharper logo illustration">\r
                            <defs>\r
                                <lineargradient id="ft-ring" x1="0" y1="0" x2="1" y2="1">\r
                                    <stop offset="0%" stop-color="#36b9ff" stop-opacity="0.85"></stop>\r
                                    <stop offset="100%" stop-color="#6366f1" stop-opacity="0.15"></stop>\r
                                </lineargradient>\r
                            </defs>\r
\r
                            <circle cx="200" cy="200" r="168" fill="none" stroke="url(#ft-ring)" stroke-width="1.5" stroke-dasharray="4 8" class="opacity-70"></circle>\r
                            <circle cx="200" cy="200" r="118" fill="none" stroke="url(#ft-ring)" stroke-width="1.5" stroke-dasharray="4 8" class="opacity-50"></circle>\r
\r
                            <g class="animate-spin [transform-box:fill-box] origin-center [animation-duration:26s]">\r
                                <circle cx="200" cy="32" r="9" class="fill-brand-primary"></circle>\r
                                <circle cx="368" cy="200" r="6" class="fill-sky-400"></circle>\r
                            </g>\r
                            <g class="animate-spin [transform-box:fill-box] origin-center [animation-duration:18s] [animation-direction:reverse]">\r
                                <circle cx="200" cy="82" r="7" class="fill-indigo-400"></circle>\r
                                <circle cx="318" cy="200" r="5" class="fill-brand-primary/70"></circle>\r
                            </g>\r
                        </svg>\r
\r
                        <div class="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-gray-200 bg-white/80 shadow-lg shadow-brand-primary/10 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">\r
                            <img src="./Assets/favicon.png" alt="WebSharper" class="size-12">\r
                        </div>\r
                    </div>\r
\r
                    <!-- Preview window (mock editor) -->\r
                    <div class="relative">\r
                        <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-950/5 dark:border-gray-800 dark:bg-gray-900">\r
                            <div class="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-950/60">\r
                                <span class="h-3 w-3 rounded-full" style="background-color:#ff5f57"></span>\r
                                <span class="h-3 w-3 rounded-full" style="background-color:#febc2e"></span>\r
                                <span class="h-3 w-3 rounded-full" style="background-color:#28c840"></span>\r
                                <span class="ml-3 text-xs font-medium text-gray-500 dark:text-gray-400">team.policy.fs</span>\r
                                <span class="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-200">\r
                                    <span class="size-1.5 animate-pulse rounded-full bg-brand-primary"></span>\r
                                    Reviewing\u2026\r
                                </span>\r
                            </div>\r
                            <div class="space-y-3 p-6">\r
                                <div class="flex items-center gap-2">\r
                                    <span class="h-3 w-3 rounded-full bg-brand-primary/70"></span>\r
                                    <span class="h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                    <span class="h-2.5 w-40 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                </div>\r
                                <div class="space-y-2.5 pl-5">\r
                                    <span class="block h-2.5 w-3/4 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                    <span class="block h-2.5 w-1/2 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                    <span class="block h-2.5 w-2/3 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                    <span class="block h-2.5 w-5/12 animate-pulse rounded-full bg-brand-primary/30"></span>\r
                                    <span class="block h-2.5 w-3/5 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                </div>\r
                                <div class="flex items-center gap-2 pt-2">\r
                                    <span class="h-3 w-3 rounded-full bg-emerald-400/80"></span>\r
                                    <span class="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                </div>\r
                                <div class="space-y-2.5 pl-5">\r
                                    <span class="block h-2.5 w-2/3 rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                    <span class="block h-2.5 w-4/12 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800"></span>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="absolute -right-3 -top-3 rotate-6 rounded-xl border border-brand-primary/30 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-800 shadow-lg dark:border-brand-primary/25 dark:bg-gray-900 dark:text-gray-100">\r
                            Coming soon\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
\r
        <!-- What For Teams will bring -->\r
        <section class="mx-auto max-w-7xl px-6 pb-24 lg:px-8">\r
            <div class="mx-auto max-w-2xl text-center">\r
                <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">What For Teams will bring</h2>\r
                <p class="mt-3 text-gray-700 dark:text-gray-300">AI developer tooling and governance first, with enterprise assurance as an added layer for teams that need it.</p>\r
            </div>\r
\r
            <div class="mt-12 grid gap-6 md:grid-cols-3">\r
                <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-950/5 transition-transform duration-300 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-950">\r
                    <div class="flex size-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">\r
                        <svg class="size-6" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.091 3.091ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"></path></svg>\r
                    </div>\r
                    <h3 class="mt-4 font-semibold text-gray-900 dark:text-white">AI developer tools</h3>\r
                    <p class="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">AI-assisted generation, review and refactoring that understands your WebSharper codebase and stays on your conventions.</p>\r
                </div>\r
\r
                <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-950/5 transition-transform duration-300 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-950">\r
                    <div class="flex size-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">\r
                        <svg class="size-6" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path></svg>\r
                    </div>\r
                    <h3 class="mt-4 font-semibold text-gray-900 dark:text-white">Governance</h3>\r
                    <p class="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">Policy, review and audit guardrails so AI-assisted changes stay safe, traceable and aligned across every team.</p>\r
                </div>\r
\r
                <div class="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-950/5 transition-transform duration-300 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-950">\r
                    <span class="absolute right-4 top-4 inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-500 dark:border-white/20 dark:text-gray-400">Add-on</span>\r
                    <div class="flex size-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">\r
                        <svg class="size-6" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>\r
                    </div>\r
                    <h3 class="mt-4 font-semibold text-gray-900 dark:text-white">Enterprise assurance</h3>\r
                    <p class="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">A second line of defence for regulated and high-stakes work: oversight, provenance and escalation to the team that builds WebSharper.</p>\r
                </div>\r
            </div>\r
        </section>\r
\r
        <!-- Contact us -->\r
        <section id="contact" class="mx-auto max-w-3xl scroll-mt-24 px-6 pb-28 lg:px-8">\r
            <div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm shadow-gray-950/5 sm:p-10 dark:border-gray-800 dark:bg-gray-950">\r
                <div class="text-center">\r
                    <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">Contact us</h2>\r
                    <p class="mx-auto mt-3 max-w-xl text-gray-700 dark:text-gray-300">Tell us about your team and what you need. We will get back to you.</p>\r
                </div>\r
\r
                <form method="post" class="mt-8 space-y-6">\r
                    <!-- Subject -->\r
                    <div>\r
                        <label for="emailSubject" class="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-200">Subject</label>\r
                        <input type="text" name="email-subject" ws-var="ContactSubjectVar" class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white" value="WebSharper for Teams">\r
                    </div>\r
\r
                    <!-- Message -->\r
                    <div>\r
                        <label for="emailMessage" class="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-200">Message</label>\r
                        <textarea name="email-message" rows="5" ws-var="ContactMessageVar" class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white"></textarea>\r
                    </div>\r
\r
                    <!-- Email, Name, Country -->\r
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">\r
                        <div>\r
                            <label for="emailAddress" class="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-200">Your email address</label>\r
                            <input type="email" name="email-address" ws-var="ContactEmailVar" class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white">\r
                        </div>\r
\r
                        <div>\r
                            <label for="emailName" class="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-200">Your name</label>\r
                            <input type="text" name="name" ws-var="ContactNameVar" class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white">\r
                        </div>\r
\r
                        <div>\r
                            <label for="emailCountry" class="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-200">Your country</label>\r
                            <select name="email-country" ws-var="ContactCountryVar" class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white">\r
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
                        <button ws-attr="ContactSendButtonAttr" type="button" ws-onclick="OnContactSendClick" class="inline-flex h-11 items-center justify-center rounded-xl border border-gray-950 bg-gray-950 px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-white dark:text-gray-950">\r
                            \${ContactSendButtonText}\r
                        </button>\r
                    </div>\r
                </form>\r
            </div>\r
        </section>\r
    `))}function wg(e){return e?xe("checkout",m("rightskeleton"),()=>D(`<div class="mt-12 md:mt-2 transition-opacity duration-500 ease-out">\r
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
        </div>`),e):we("checkout",m("rightskeleton"),()=>D(`<div class="mt-12 md:mt-2 transition-opacity duration-500 ease-out">\r
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
        </div>`))}function fg(e){return e?xe("checkout",m("authform"),()=>D(`<section id="authSection" class="mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]">\r
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
        </section>`),e):we("checkout",m("authform"),()=>D(`<section id="authSection" class="mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]">\r
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
        </section>`))}function mg(e){return e?xe("checkout",m("paymentform"),()=>D(`<form id="paymentSection" action="" class="mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]">\r
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
                    <select name="country" id="country" required="" ws-var="Country" class="cursor-pointer w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
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
            <div class="mt-12 flex gap-4">\r
\r
                <button type="button" ws-onclick="OnCancelClick" class="cursor-pointer w-1/2 rounded-xl h-14 border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">\r
                    Cancel\r
                </button>\r
\r
                <button id="wsContinue" type="button" ws-onclick="OnContinueClick" ws-attr="ContinueButtonAttr" class="cursor-pointer w-1/2 rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                    <span ws-hole="ContinueText" class="relative text-sm">Continue to payment</span>\r
                </button>\r
            </div>\r
        </form>`),e):we("checkout",m("paymentform"),()=>D(`<form id="paymentSection" action="" class="mt-12 md:mt-2 animate-[fadeIn_0.5s_ease-out]">\r
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
                    <select name="country" id="country" required="" ws-var="Country" class="cursor-pointer w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
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
            <div class="mt-12 flex gap-4">\r
\r
                <button type="button" ws-onclick="OnCancelClick" class="cursor-pointer w-1/2 rounded-xl h-14 border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">\r
                    Cancel\r
                </button>\r
\r
                <button id="wsContinue" type="button" ws-onclick="OnContinueClick" ws-attr="ContinueButtonAttr" class="cursor-pointer w-1/2 rounded-xl h-14 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300">\r
                    <span ws-hole="ContinueText" class="relative text-sm">Continue to payment</span>\r
                </button>\r
            </div>\r
        </form>`))}function vg(e){return e?xe("checkout",m("content"),()=>D(`\r
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
    `),e):we("checkout",m("content"),()=>D(`\r
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
    `))}function yg(e){return e?xe("managesubscription",m("contentwrapper"),()=>D(`<div>\r
        <div ws-attr="SkeletonAttr">\r
            <div ws-replace="Skeleton"></div>\r
        </div>\r
        <div ws-replace="Content"></div>\r
    </div>`),e):we("managesubscription",m("contentwrapper"),()=>D(`<div>\r
        <div ws-attr="SkeletonAttr">\r
            <div ws-replace="Skeleton"></div>\r
        </div>\r
        <div ws-replace="Content"></div>\r
    </div>`))}function xg(e){return e?xe("managesubscription",null,()=>D(`<html lang="en">\r
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
</html>`),e):we("managesubscription",null,()=>D(`<html lang="en">\r
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
</html>`))}function Il(e){return e?xe("managesubscription",m("skeleton"),()=>D(`<div class="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] transition-opacity duration-500 ease-out">\r
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
    </div>`),e):we("managesubscription",m("skeleton"),()=>D(`<div class="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] transition-opacity duration-500 ease-out">\r
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
    </div>`))}function kg(e){return e?xe("checkout",m("smoothtextloader"),()=>D(`<span class="relative inline-block align-bottom \${WrapperClasses}">\r
            <span ws-attr="SkeletonAttr" class="block w-full h-full transition-opacity duration-500 ease-out">\r
                <span class="block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full"></span>\r
            </span>\r
            <span ws-attr="ContentAttr" class="absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center">\r
                <span ws-replace="Content" class="w-full"></span>\r
            </span>\r
        </span>`),e):we("checkout",m("smoothtextloader"),()=>D(`<span class="relative inline-block align-bottom \${WrapperClasses}">\r
            <span ws-attr="SkeletonAttr" class="block w-full h-full transition-opacity duration-500 ease-out">\r
                <span class="block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full"></span>\r
            </span>\r
            <span ws-attr="ContentAttr" class="absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center">\r
                <span ws-replace="Content" class="w-full"></span>\r
            </span>\r
        </span>`))}function Cg(e){return e?xe("managesubscription",m("loginprompt"),()=>D(`<div class="rounded-xl border p-6 dark:border-gray-800 dark:text-white text-gray-800 max-w-lg mx-auto mt-12 animate-[fadeIn_0.5s_ease-out]">\r
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
    </div>`),e):we("managesubscription",m("loginprompt"),()=>D(`<div class="rounded-xl border p-6 dark:border-gray-800 dark:text-white text-gray-800 max-w-lg mx-auto mt-12 animate-[fadeIn_0.5s_ease-out]">\r
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
    </div>`))}function Sg(e){return e?xe("managesubscription",m("authenticatedcontent"),()=>D(`<div class="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] animate-[fadeIn_0.5s_ease-out]">\r
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
                <div ws-replace="PastDueWidget"></div>\r
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
                    <button ws-onclick="OpenCustomerPortal" ws-attr="OpenCustomerPortalAttr" class="rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">\r
                        Manage billing in Stripe\r
                    </button>\r
                </div>\r
\r
                <div ws-replace="NoSubsWidget"></div>\r
\r
                <div ws-attr="ActiveSubContentAttr" class="space-y-6">\r
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
                            <h2 class="font-semibold text-gray-900 dark:text-white">Receipts</h2>\r
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
\r
                </div>\r
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
                                    <select ws-var="BillingCountryVar" name="country" class="cursor-pointer w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
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
    </div>`),e):we("managesubscription",m("authenticatedcontent"),()=>D(`<div class="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] animate-[fadeIn_0.5s_ease-out]">\r
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
                <div ws-replace="PastDueWidget"></div>\r
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
                    <button ws-onclick="OpenCustomerPortal" ws-attr="OpenCustomerPortalAttr" class="rounded-lg h-10 border border-gray-300 dark:border-gray-700 px-4 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">\r
                        Manage billing in Stripe\r
                    </button>\r
                </div>\r
\r
                <div ws-replace="NoSubsWidget"></div>\r
\r
                <div ws-attr="ActiveSubContentAttr" class="space-y-6">\r
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
                            <h2 class="font-semibold text-gray-900 dark:text-white">Receipts</h2>\r
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
\r
                </div>\r
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
                                    <select ws-var="BillingCountryVar" name="country" class="cursor-pointer w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-transparent dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-800 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-sm h-10 px-3.5">\r
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
    </div>`))}function Ag(){return bc(void 0,[[null,[[null,["spreadsheet"]]],[]],[null,[[null,["maps"]]],[]],[null,[[null,["charts"]]],[]],[null,[[null,["forms"]]],[]]])}function $g(e){return e?xe("examples",m("mapsexample"),()=>D(`\r
            <iframe src="./snippets/maps/index.html" class="w-full h-full border-0 rounded-xl bg-white dark:bg-gray-800" title="Maps Example">\r
            </iframe>\r
        `),e):we("examples",m("mapsexample"),()=>D(`\r
            <iframe src="./snippets/maps/index.html" class="w-full h-full border-0 rounded-xl bg-white dark:bg-gray-800" title="Maps Example">\r
            </iframe>\r
        `))}function _g(e){return e?xe("examples",m("formsexample"),()=>D(`\r
            <iframe src="./snippets/forms/index.html" class="w-full h-full border-0 rounded-xl bg-white dark:bg-gray-800" title="Forms Example">\r
            </iframe>\r
        `),e):we("examples",m("formsexample"),()=>D(`\r
            <iframe src="./snippets/forms/index.html" class="w-full h-full border-0 rounded-xl bg-white dark:bg-gray-800" title="Forms Example">\r
            </iframe>\r
        `))}function Tg(e){return e?xe("examples",m("spreadsheetexample"),()=>D(`\r
            <iframe src="./snippets/slickgrid/index.html" class="w-full h-full border-0 rounded-xl bg-white dark:bg-gray-800" title="Spreadsheet Example">\r
            </iframe>\r
        `),e):we("examples",m("spreadsheetexample"),()=>D(`\r
            <iframe src="./snippets/slickgrid/index.html" class="w-full h-full border-0 rounded-xl bg-white dark:bg-gray-800" title="Spreadsheet Example">\r
            </iframe>\r
        `))}function Eg(e){return e?xe("examples",m("chartexample"),()=>D(`\r
            <iframe src="./snippets/chart/index.html" class="w-full h-full border-0 rounded-xl bg-white dark:bg-gray-800" title="Charts Example">\r
            </iframe>\r
        `),e):we("examples",m("chartexample"),()=>D(`\r
            <iframe src="./snippets/chart/index.html" class="w-full h-full border-0 rounded-xl bg-white dark:bg-gray-800" title="Charts Example">\r
            </iframe>\r
        `))}function Vg(){return bc(void 0,[[null,[[null,["subscriptions"]]],[]],[null,[[null,["billing"]]],[]]])}function Bg(e){return e?xe("managesubscription",m("pastduealert"),()=>D(`<div class="rounded-xl border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900/50 dark:bg-yellow-900/20 mb-6">\r
        <div class="flex">\r
            <div class="flex-shrink-0">\r
                <svg class="h-5 w-5 text-yellow-400" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>\r
                </svg>\r
            </div>\r
            <div class="ml-3">\r
                <h3 class="text-sm font-medium text-yellow-800 dark:text-yellow-300">Payment Past Due</h3>\r
                <div class="mt-2 text-sm text-yellow-700 dark:text-yellow-400">\r
                    <p>One or more of your subscriptions has a failed payment. Please update your billing information to avoid service interruption. We remove inactive subscriptions after a two-week grace period.</p>\r
                </div>\r
                <div class="mt-4">\r
                    <div class="-mx-2 -my-1.5 flex">\r
                        <button ws-onclick="UpdatePaymentClick" class="rounded-md bg-yellow-50 px-2 py-1.5 text-sm font-medium text-yellow-800 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-300 dark:hover:bg-yellow-900/50">\r
                            Update payment details &rarr;\r
                        </button>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>`),e):we("managesubscription",m("pastduealert"),()=>D(`<div class="rounded-xl border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900/50 dark:bg-yellow-900/20 mb-6">\r
        <div class="flex">\r
            <div class="flex-shrink-0">\r
                <svg class="h-5 w-5 text-yellow-400" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>\r
                </svg>\r
            </div>\r
            <div class="ml-3">\r
                <h3 class="text-sm font-medium text-yellow-800 dark:text-yellow-300">Payment Past Due</h3>\r
                <div class="mt-2 text-sm text-yellow-700 dark:text-yellow-400">\r
                    <p>One or more of your subscriptions has a failed payment. Please update your billing information to avoid service interruption. We remove inactive subscriptions after a two-week grace period.</p>\r
                </div>\r
                <div class="mt-4">\r
                    <div class="-mx-2 -my-1.5 flex">\r
                        <button ws-onclick="UpdatePaymentClick" class="rounded-md bg-yellow-50 px-2 py-1.5 text-sm font-medium text-yellow-800 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-300 dark:hover:bg-yellow-900/50">\r
                            Update payment details &rarr;\r
                        </button>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>`))}function Ng(e){return e?xe("managesubscription",m("nosubscriptionwidget"),()=>D(`<div class="mt-6 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 text-center py-12 w-full animate-[fadeIn_0.5s_ease-out]">\r
        <div class="mb-4 flex justify-center text-gray-300 dark:text-gray-600">\r
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"></path>\r
            </svg>\r
        </div>\r
\r
        <h2 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">You have no active subscriptions</h2>\r
\r
        <p class="mb-8 text-gray-600 dark:text-gray-400 px-10">\r
            Start a subscription to unlock premium features, manage seats, and access your invoices directly from this dashboard.\r
        </p>\r
\r
        <button ws-onclick="OnSubscribeClick" class="mx-auto w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 transition-all">\r
            <span class="relative text-sm font-medium">\r
                View Plans & Subscribe\r
            </span>\r
        </button>\r
    </div>`),e):we("managesubscription",m("nosubscriptionwidget"),()=>D(`<div class="mt-6 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 text-center py-12 w-full animate-[fadeIn_0.5s_ease-out]">\r
        <div class="mb-4 flex justify-center text-gray-300 dark:text-gray-600">\r
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"></path>\r
            </svg>\r
        </div>\r
\r
        <h2 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">You have no active subscriptions</h2>\r
\r
        <p class="mb-8 text-gray-600 dark:text-gray-400 px-10">\r
            Start a subscription to unlock premium features, manage seats, and access your invoices directly from this dashboard.\r
        </p>\r
\r
        <button ws-onclick="OnSubscribeClick" class="mx-auto w-fit rounded-lg h-10 bg-gray-950 dark:bg-white border border-gray-950 dark:border-gray-800 flex justify-center items-center px-6 text-white dark:text-gray-950 relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-gray-500 before:bg-gradient-to-b before:from-gray-700 dark:before:from-gray-200 dark:before:border-gray-950 hover:before:from-gray-950 dark:hover:before:from-gray-300 transition-all">\r
            <span class="relative text-sm font-medium">\r
                View Plans & Subscribe\r
            </span>\r
        </button>\r
    </div>`))}function Pg(){return wo||(wo=Xt(void 0,"$",[[0,[["$0","ResultValue",ee(),0]]],[1,[["$0","ErrorValue",ee(),0]]]])())}function Lg(){return io||(io=Xt(void 0,"$",[null,[1,[["$0","Value",ee(),0]]]])())}function Ig(){return bo||(bo=Xt(void 0,"$",[null,[1,[["$0","Value",Rg,0]]]])())}function Fg(){return no||(no=mc(void 0,[["planCode",ee(),0],["interval",ee(),0],["seats",ee(),0],["billingData",Fl,0]])())}function Mg(){return ao||(ao=Xt(void 0,"$",[[0,[["$0","ResultValue",ee(),0]]],[1,[["$0","ErrorValue",ee(),0]]]])())}function zg(e){return e?xe("managesubscription",m("githubactive"),()=>D(`<div class="space-y-3 rounded-xl p-6 border border-green-200 bg-green-50 dark:border-green-900/30 dark:bg-green-900/10 text-gray-800 dark:text-gray-100 animate-[fadeIn_0.5s_ease-out]">\r
                    <div class="flex justify-between items-start">\r
                        <div>\r
                            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub organization</h1>\r
                            <p class="text-sm text-green-800 dark:text-green-300 mt-1">Your organization is active and linked.</p>\r
                        </div>\r
                        <div class="p-2 bg-green-100 dark:bg-green-900/50 rounded-full text-green-600 dark:text-green-400">\r
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor" class="w-5 h-5">\r
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd"></path>\r
                            </svg>\r
                        </div>\r
                    </div>\r
\r
                    <button ws-onclick="GoToGitHubOrg" class="rounded-lg h-10 border border-green-300 dark:border-green-700 px-4 text-sm font-medium text-green-900 dark:text-green-100 bg-white dark:bg-gray-900 hover:bg-green-50 dark:hover:bg-green-900/30 shadow-sm transition-colors">\r
                        Go to GitHub organization\r
                    </button>\r
                </div>`),e):we("managesubscription",m("githubactive"),()=>D(`<div class="space-y-3 rounded-xl p-6 border border-green-200 bg-green-50 dark:border-green-900/30 dark:bg-green-900/10 text-gray-800 dark:text-gray-100 animate-[fadeIn_0.5s_ease-out]">\r
                    <div class="flex justify-between items-start">\r
                        <div>\r
                            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub organization</h1>\r
                            <p class="text-sm text-green-800 dark:text-green-300 mt-1">Your organization is active and linked.</p>\r
                        </div>\r
                        <div class="p-2 bg-green-100 dark:bg-green-900/50 rounded-full text-green-600 dark:text-green-400">\r
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor" class="w-5 h-5">\r
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd"></path>\r
                            </svg>\r
                        </div>\r
                    </div>\r
\r
                    <button ws-onclick="GoToGitHubOrg" class="rounded-lg h-10 border border-green-300 dark:border-green-700 px-4 text-sm font-medium text-green-900 dark:text-green-100 bg-white dark:bg-gray-900 hover:bg-green-50 dark:hover:bg-green-900/30 shadow-sm transition-colors">\r
                        Go to GitHub organization\r
                    </button>\r
                </div>`))}function Dg(e){return e?xe("managesubscription",m("githubpending"),()=>D(`<div class="space-y-3 rounded-xl p-6 border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50 text-gray-800 dark:text-gray-100 animate-[fadeIn_0.5s_ease-out]">\r
                    <div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub organization</h1></div>\r
                    <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">\r
                        <svg class="animate-spin h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24">\r
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                        </svg>\r
                        Pending creation for: <span class="font-mono font-semibold">\${GitHubOrgName}</span>\r
                    </div>\r
                </div>`),e):we("managesubscription",m("githubpending"),()=>D(`<div class="space-y-3 rounded-xl p-6 border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50 text-gray-800 dark:text-gray-100 animate-[fadeIn_0.5s_ease-out]">\r
                    <div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">GitHub organization</h1></div>\r
                    <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">\r
                        <svg class="animate-spin h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24">\r
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                        </svg>\r
                        Pending creation for: <span class="font-mono font-semibold">\${GitHubOrgName}</span>\r
                    </div>\r
                </div>`))}function Gg(e){return e?xe("managesubscription",m("githubpendinginput"),()=>D(`<div class="space-y-3 rounded-xl p-6 border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20 text-gray-800 dark:text-gray-100 animate-[fadeIn_0.5s_ease-out]">\r
                    <div>\r
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">\r
                            GitHub organization\r
                        </h1>\r
                        <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">No GitHub support organization is created for you yet. Please choose a name below to get started.</p>\r
                    </div>\r
\r
                    <div class="pt-2">\r
                        <div class="flex items-center gap-1">\r
                            <span class="text-sm font-semibold text-gray-600 dark:text-gray-400">IntelliFactory-</span>\r
                            <input ws-var="GitHubOrgName" class="flex-1 w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-white outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-gray-950 dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-700 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white text-sm h-10 px-3.5" placeholder="github-orgname-suffix">\r
                        </div>\r
                    </div>\r
\r
                    <div class="flex flex-wrap items-center justify-between gap-3 pt-2">\r
                        <span class="text-xs text-red-600 dark:text-red-300 font-medium">You can't change the name after you submit.</span>\r
                        <button ws-onclick="SetGitHubOrgName" class="rounded-lg h-10 border border-blue-300 dark:border-blue-700 px-4 text-sm font-medium text-blue-900 dark:text-blue-100 bg-white dark:bg-gray-900 hover:bg-blue-100 dark:hover:bg-blue-900/50 shadow-sm transition-colors">\r
                            Set GitHub organization name\r
                        </button>\r
                    </div>\r
                </div>`),e):we("managesubscription",m("githubpendinginput"),()=>D(`<div class="space-y-3 rounded-xl p-6 border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20 text-gray-800 dark:text-gray-100 animate-[fadeIn_0.5s_ease-out]">\r
                    <div>\r
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">\r
                            GitHub organization\r
                        </h1>\r
                        <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">No GitHub support organization is created for you yet. Please choose a name below to get started.</p>\r
                    </div>\r
\r
                    <div class="pt-2">\r
                        <div class="flex items-center gap-1">\r
                            <span class="text-sm font-semibold text-gray-600 dark:text-gray-400">IntelliFactory-</span>\r
                            <input ws-var="GitHubOrgName" class="flex-1 w-full hover:z-[1] focus:z-[1] relative focus:outline rounded-lg appearance-none transition duration-300 border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-white outline-blue-600 shadow-gray-700/5 border-gray-300 hover:border-gray-400/75 placeholder-gray-400 text-gray-700 dark:bg-gray-950 dark:focus:bg-gray-900/50 dark:outline-blue-500 dark:shadow-gray-950/40 dark:border-gray-700 dark:hover:border-gray-600 dark:placeholder-gray-600 dark:text-white text-sm h-10 px-3.5" placeholder="github-orgname-suffix">\r
                        </div>\r
                    </div>\r
\r
                    <div class="flex flex-wrap items-center justify-between gap-3 pt-2">\r
                        <span class="text-xs text-red-600 dark:text-red-300 font-medium">You can't change the name after you submit.</span>\r
                        <button ws-onclick="SetGitHubOrgName" class="rounded-lg h-10 border border-blue-300 dark:border-blue-700 px-4 text-sm font-medium text-blue-900 dark:text-blue-100 bg-white dark:bg-gray-900 hover:bg-blue-100 dark:hover:bg-blue-900/50 shadow-sm transition-colors">\r
                            Set GitHub organization name\r
                        </button>\r
                    </div>\r
                </div>`))}function Rg(){return ho||(ho=Ga(void 0,[["email",ee(),0],["line1",ee(),0],["city",ee(),0],["postalCode",ee(),0],["country",ee(),0],["companyName",ee(),1],["taxId",ee(),1]])())}function Fl(){return ro||(ro=mc(void 0,[["email",ee(),0],["line1",ee(),0],["city",ee(),0],["postalCode",ee(),0],["country",ee(),0],["companyName",ee(),1],["taxId",ee(),1]])())}function Og(e){return e?xe("managesubscription",m("seatgrouprow"),()=>D(`<tr>\r
                                        <td colspan="5" class="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-100">\r
                                            <div class="flex items-center justify-between gap-4">\r
                                                <div class="flex items-center gap-3">\r
                                                    <div class="text-xs sm:text-sm" ws-hole="ExpiryAndSeatCount"></div>\r
\r
                                                    <div ws-replace="GroupStatusBadge"></div>\r
                                                </div>\r
\r
                                                <div class="flex items-center gap-2" ws-attr="AutoRenewWrapper">\r
                                                    <span class="text-xs text-gray-600 dark:text-gray-300">Renew automatically</span>\r
                                                    <button ws-onclick="ToggleAutoRenew" class="\${ToggleClasses}">\r
                                                        <span class="\${DotClasses}"></span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                        </td>\r
                                    </tr>`),e):we("managesubscription",m("seatgrouprow"),()=>D(`<tr>\r
                                        <td colspan="5" class="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-100">\r
                                            <div class="flex items-center justify-between gap-4">\r
                                                <div class="flex items-center gap-3">\r
                                                    <div class="text-xs sm:text-sm" ws-hole="ExpiryAndSeatCount"></div>\r
\r
                                                    <div ws-replace="GroupStatusBadge"></div>\r
                                                </div>\r
\r
                                                <div class="flex items-center gap-2" ws-attr="AutoRenewWrapper">\r
                                                    <span class="text-xs text-gray-600 dark:text-gray-300">Renew automatically</span>\r
                                                    <button ws-onclick="ToggleAutoRenew" class="\${ToggleClasses}">\r
                                                        <span class="\${DotClasses}"></span>\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                        </td>\r
                                    </tr>`))}function Hg(e){return e?xe("managesubscription",m("seatrow"),()=>D(`<tr>\r
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
                                    </tr>`),e):we("managesubscription",m("seatrow"),()=>D(`<tr>\r
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
                                    </tr>`))}function jg(e){return e?xe("managesubscription",m("invoicerow"),()=>D(`<tr>\r
                                        <td class="px-4 py-3">\${InvoiceId}</td>\r
                                        <td class="px-4 py-3">\${Date}</td>\r
                                        <td class="px-4 py-3">\${Amount}</td>\r
                                        <td class="px-4 py-3 capitalize">\${Status}</td>\r
                                        <td class="px-4 py-3 text-right">\r
                                            <a class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20" href="\${Href}" target="_blank" rel="noopener">View</a>\r
                                        </td>\r
                                    </tr>`),e):we("managesubscription",m("invoicerow"),()=>D(`<tr>\r
                                        <td class="px-4 py-3">\${InvoiceId}</td>\r
                                        <td class="px-4 py-3">\${Date}</td>\r
                                        <td class="px-4 py-3">\${Amount}</td>\r
                                        <td class="px-4 py-3 capitalize">\${Status}</td>\r
                                        <td class="px-4 py-3 text-right">\r
                                            <a class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20" href="\${Href}" target="_blank" rel="noopener">View</a>\r
                                        </td>\r
                                    </tr>`))}function Bn(){return oo||(oo=Xt(void 0,"$",[[0,[["$0","ResultValue",ee(),0]]],[1,[["$0","ErrorValue",ee(),0]]]])())}function Wg(){return co||(co=Ga(void 0,[["code",ee(),0],["name",ee(),0],["description",ee(),1],["isPerSeat",ee(),0],["maxSeats",ee(),1],["interval",ee(),0],["currency",ee(),0],["unitAmountCents",ee(),0]])())}function Ug(){return lo||(lo=Ga(void 0,[["subscriptionId",ee(),0],["status",ee(),0],["planName",ee(),0],["currentPeriodEnd",ee(),0],["cancelAtPeriodEnd",ee(),0],["seats",ee(),0],["githubAssignedNames",Ei(Ml),0]])())}function Ml(){return so||(so=Xt(void 0,"$",[null,[1,[["$0","Value",ee(),0]]]])())}function qg(){return go||(go=Xt(void 0,"$",[null,[1,[["$0","Value",Zg,0]]]])())}function Kg(e){return e?xe("managesubscription",m("smoothtextloader"),()=>D(`<span class="relative inline-block align-bottom \${WrapperClasses}">\r
        <span ws-attr="SkeletonAttr" class="block w-full h-full transition-opacity duration-500 ease-out">\r
            <span class="block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full"></span>\r
        </span>\r
        <span ws-attr="ContentAttr" class="absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center">\r
            <span ws-replace="Content" class="w-full"></span>\r
        </span>\r
    </span>`),e):we("managesubscription",m("smoothtextloader"),()=>D(`<span class="relative inline-block align-bottom \${WrapperClasses}">\r
        <span ws-attr="SkeletonAttr" class="block w-full h-full transition-opacity duration-500 ease-out">\r
            <span class="block animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full"></span>\r
        </span>\r
        <span ws-attr="ContentAttr" class="absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex items-center">\r
            <span ws-replace="Content" class="w-full"></span>\r
        </span>\r
    </span>`))}function Zg(){return po||(po=Ga(void 0,[["name",ee(),1],["status",Yg,0]])())}function Yg(){return uo||(uo=Xt(e=>Fe(qo,e),"$",[null,null])())}function Jg(){let e=new ue("New_1"),t=N.BindView(Qg,ir().View),r=N.BindView(C=>Hl(Xg(C),()=>{fr()}),ir().View),n=Xn(el),a=Xn(To),s=Xn(Qs),l=Xn(Xs),c=(e.h.push(X(e.k,"selectspreadsheet",()=>e.i,()=>{ir().Set(Xs)})),e),p=(c.h.push(X(c.k,"selectmaps",()=>c.i,()=>{ir().Set(Qs)})),c),h=(p.h.push(X(p.k,"selectcharts",()=>p.i,()=>{ir().Set(To)})),p),w=(h.h.push(X(h.k,"selectforms",()=>h.i,()=>{ir().Set(el)})),h),u=(w.h.push(new O("spreadsheettabattr",l)),w),x=(u.h.push(new O("mapstabattr",s)),u),f=(x.h.push(new O("chartstabattr",a)),x),T=(f.h.push(new O("formstabattr",n)),f),k=(T.h.push(new R("codecontent",r)),T),v=(k.h.push(new R("resultcontent",t)),k),S=he(v.k,v.h,[]),y=new ce(S[1],hg(S[0]));return(v.i=y,y).Doc}function ir(){return Ld.ActiveTab}function Xn(e){let t=V(r=>H(r,e),ir().View);return J.Concat([te("bg-gray-200",t),te("dark:bg-white/5",t)])}function Xg(e){return e.$==1?`open WebSharper.UI.Html\r
open WebSharper.Leaflet\r
        \r
let Main () =\r
    let coordinates = div [] [] :?> Elt\r
    div [] [\r
        div [\r
            attr.style "height: 600px;"\r
            on.afterRender (fun div ->\r
                let map = Leaflet.L.Map(el)\r
                map.SetView((47.5000, 19.0500), 14)\r
\r
                map.AddLayer(\r
                    Leaflet.TileLayer(\r
                        Leaflet.TileLayer.OpenStreetMap.UrlTemplate,\r
                        Leaflet.TileLayer.Options(Attribution = Leaflet.TileLayer.OpenStreetMap.Attribution)\r
                    )\r
                ) |> ignore\r
\r
                let m = Leaflet.Marker((47.50712, 19.04567)) \r
                        \r
                m.BindPopup("Hungarian Parliament") |> ignore \r
                map.AddLayer(m) |> ignore\r
\r
                map.On_mousemove(fun map ev ->\r
                    coordinatesText.Value <- "Position: " + ev.Latlng.ToString()\r
                ) |> ignore\r
\r
                map.On_mouseout(fun map ev ->\r
                    coordinatesText.Value <- "Hover over map..."\r
                ) |> ignore\r
            )\r
        ] []\r
        coordinates\r
    ]\r
    |> Doc.RunById "main"\r
`:e.$==2?`open WebSharper.UI.Html\r
open WebSharper.Plotly\r
\r
let RenderChart id =\r
    let barTrace = BarOptions()\r
    barTrace.X <- [| "Q1"; "Q2"; "Q3"; "Q4" |]\r
    barTrace.Y <- [| 45000; 52000; 28000; 64000 |]\r
    barTrace.Name <- "Revenue"\r
    barTrace.Marker <- BarMarker(\r
        Color = "rgba(79, 70, 229, 1)" \r
    )\r
\r
    let layout = Layout()\r
    layout.Title <- LayoutTitle(Text = "Annual Revenue", Font = Font(Size = 24, Family = "Segoe UI, sans-serif"))\r
    layout.Showlegend <- false\r
    layout.Autosize <- true\r
    layout.Margin <- LayoutMargin(L = 50, R = 50, B = 50, T = 80)\r
    layout.Paper_bgcolor <- "rgba(0,0,0,0)" \r
    layout.Plot_bgcolor <- "rgba(0,0,0,0)"\r
    layout.Yaxis <- LayoutYAxis(Gridcolor = "#e2e8f0", Zeroline = false)\r
    layout.Xaxis <- LayoutXAxis(Gridcolor = "rgba(0,0,0,0)")\r
\r
    div [\r
        attr.id id\r
        attr.style "height: 500px; width: 100%;" \r
        on.afterRender (fun _ -> \r
            Plotly.NewPlot(id, [| barTrace :> Trace |], layout) |> ignore\r
        )\r
    ] []\r
`:e.$==3?`let Render id = \r
    let username = Var.Create ""\r
    let password = Var.Create ""\r
\r
    IndexTemplate.LoginForm()\r
        .Username(username)\r
        .Password(password)\r
        .Login(fun e ->\r
            e.Event.PreventDefault()\r
            JS.Alert("Welcome, " + username.Value + "!")                \r
        )\r
        .Doc()\r
        |> Doc.RunById id\r
`:`open WebSharper.SlickGrid\r
\r
let SetupGrid () =\r
    let columns = [|\r
        Column(id = "title", field = "title", Name = "Title", Sortable = true, Width = 100)\r
        Column(id = "percentComplete", field = "percentComplete", Name = "% Complete", Formatter = Formatters.PercentCompleteBar, Width = 120)\r
    |]\r
\r
    let options = GridOption(\r
        EnableCellNavigation = true,\r
        EnableColumnReorder = false,\r
        RowHeight = 35,\r
        ForceFitColumns = true\r
    )\r
\r
    let data = \r
        [| for i in 0 .. 100 do\r
            yield New [\r
                "id" => i\r
                "title" => "Task " + string i\r
                "percentComplete" => Math.Round(Math.Random() * 100.0)\r
            ]\r
        |]\r
\r
    Styles.Grid()\r
    Styles.AlpineTheme()\r
\r
    SlickGrid("#myGrid", data, columns, options)\r
`}function Qg(e){return e.$==1?eh():e.$==3?th():e.$==0?rh():nh()}function eh(){let e=new ue("New_1"),t=he(e.k,e.h,[]),r=new ce(t[1],$g(t[0]));return(e.i=r,r).Doc}function th(){let e=new ue("New_1"),t=he(e.k,e.h,[]),r=new ce(t[1],_g(t[0]));return(e.i=r,r).Doc}function rh(){let e=new ue("New_1"),t=he(e.k,e.h,[]),r=new ce(t[1],Tg(t[0]));return(e.i=r,r).Doc}function nh(){let e=new ue("New_1"),t=he(e.k,e.h,[]),r=new ce(t[1],Eg(t[0]));return(e.i=r,r).Doc}function ah(){let e=new ue("New_1"),t=(e.h.push(new It("onafterrender","",()=>{oh()})),e),r=(t.h.push(new _e("contactsubjectvar",B.Lens(Tt(),f=>f.subject,(f,T)=>Rt(T,f.message,f.email,f.name,f.country)))),t),n=(r.h.push(new _e("contactmessagevar",B.Lens(Tt(),f=>f.message,(f,T)=>Rt(f.subject,T,f.email,f.name,f.country)))),r),a=(n.h.push(new _e("contactemailvar",B.Lens(Tt(),f=>f.email,(f,T)=>Rt(f.subject,f.message,T,f.name,f.country)))),n),s=(a.h.push(new _e("contactnamevar",B.Lens(Tt(),f=>f.name,(f,T)=>Rt(f.subject,f.message,f.email,T,f.country)))),a),l=(s.h.push(new _e("contactcountryvar",B.Lens(Tt(),f=>f.country,(f,T)=>Rt(f.subject,f.message,f.email,f.name,T)))),s),c=(l.h.push(new O("contactsendbuttonattr",ub())),l),p=(c.h.push(new bt("contactsendbuttontext",cb())),c),h=(p.h.push(X(p.k,"oncontactsendclick",()=>p.i,f=>{pb(f)})),p),w=he(h.k,h.h,[["contactsubjectvar",0,m("WebSharper for Teams")],["contactmessagevar",0,null],["contactemailvar",0,null],["contactnamevar",0,null],["contactcountryvar",0,m("United States")]]),u=new ce(w[1],bg(w[0]));return(h.i=u,u).Doc}function oh(){let e=Tt().Get();Tt().Set(Rt("WebSharper for Teams",e.message,e.email,e.name,e.country))}function ih(){let e=N.TextView(Yb()),t=Gt(ct("w-14 h-6"),"justify-end",e),r=N.TextView(Zb()),n=Gt(ct("w-14 h-6"),"justify-end",r),a=N.TextView(Kb()),s=Gt(ct("w-14 h-6"),"justify-end",a),l=N.TextView(qb()),c=Gt(ct("w-64 h-4"),"",l),p=N.TextView(Ub()),h=Gt(ct("w-12 h-5"),"",p),w=N.TextView(Wb()),u=Gt(ct("w-24 h-8"),"",w),x=N.TextView(jb()),f=Gt(ct("w-64 h-6"),"",x),T=N.TextView(Eo().View),k=Gt(V(oe=>oe.toLowerCase().indexOf("account")!=-1?"w-24 h-5 !align-middle":"w-12 h-5 !align-middle",Eo().View),"",T),v=_b(),S=N.EmbedView(Ct((oe,ke)=>{if(oe){let se=new ue("New_1"),Se=he(se.k,se.h,[]),Ee=new ce(Se[1],wg(Se[0]));return(se.i=Ee,Ee).Doc}else if(ke){let se=N.TextView(Aa().View),Se=$b(),Ee=Ab(),De=Sb(),Oe=Cb(),lt=Hb(),Nt=new ue("New_1"),Qe=(Nt.h.push(new _e("email",Ql())),Nt),vt=(Qe.h.push(new _e("street",Xl())),Qe),yt=(vt.h.push(new _e("city",Jl())),vt),Qt=(yt.h.push(new _e("postal",Yl())),yt),Ge=(Qt.h.push(new _e("country",Zl())),Qt),dt=(Ge.h.push(new R("countryoptions",N.Concat(lt))),Ge),le=(dt.h.push(new xn("iscompany",Wt())),dt),$e=(le.h.push(new O("companyblockattr",Oe)),le),er=($e.h.push(new _e("companyname",Kl())),$e),on=(er.h.push(new O("companynameattr",De)),er),sn=(on.h.push(new _e("vatin",li())),on),de=(sn.h.push(new O("vatinattr",Ee)),sn),et=(de.h.push(new R("formerrordoc",Mb())),de),xt=(et.h.push(new O("continuebuttonattr",Se)),et),ht=(xt.h.push(new R("continuetext",se)),xt),Ve=(ht.h.push(X(ht.k,"oncancelclick",()=>ht.i,()=>{zb()})),ht),ze=(Ve.h.push(X(Ve.k,"oncontinueclick",()=>Ve.i,()=>{Db()})),Ve),Cr=he(ze.k,ze.h,[["email",0,null],["street",0,null],["city",0,null],["postal",0,null],["country",0,null],["iscompany",2,null],["companyname",0,null],["vatin",0,null]]),ln=new ce(Cr[1],mg(Cr[0]));return(ze.i=ln,ln).Doc}else{let se=new ue("New_1"),Se=(se.h.push(X(se.k,"ongithublogin",()=>se.i,()=>{nd()})),se),Ee=he(Se.k,Se.h,[]),De=new ce(Ee[1],fg(Ee[0]));return(Se.i=De,De).Doc}},Ir().View,yn())),y=new ue("New_1"),b=(y.h.push(new It("onafterrender","",()=>{sh()})),y),C=(b.h.push(new O("backlinkattr",kb())),b),$=(C.h.push(new R("rightsidecontent",S)),C),_=($.h.push(new O("seatselectorattr",v)),$),E=(_.h.push(new _e("seatstext",Sa())),_),L=(E.h.push(X(E.k,"onseatminus",()=>E.i,()=>{Gb()})),E),G=(L.h.push(X(L.k,"onseatplus",()=>L.i,()=>{Rb()})),L),K=(G.h.push(new R("backlinklabel",k)),G),q=(K.h.push(new R("planname",f)),K),I=(q.h.push(new R("planprice",u)),q),re=(I.h.push(new R("planinterval",h)),I),fe=(re.h.push(new R("pricehint",c)),re),W=(fe.h.push(new R("subtotal",s)),fe),Q=(W.h.push(new R("taxes",n)),W),pe=(Q.h.push(new R("total",t)),Q),Ce=he(pe.k,pe.h,[["seatstext",0,m("1")]]),Z=new ce(Ce[1],vg(Ce[0]));return(pe.i=Z,Z).Doc}function sh(){ra(),wb(),fb(),rt(F(()=>(Ir().Set(!0),M(pi([mb(),vb()]),()=>(Ir().Set(!1),Y())))),null)}function Ir(){return Dd.IsLoading}function Gt(e,t,r){let n=St([te("opacity-0",Ir().View),te("pointer-events-none",Ir().View),ld(t)]),a=te("opacity-0",V(T=>!T,Ir().View)),s=V(T=>"transition-all duration-300 ease-in-out "+T,e),l=new ue("New_1"),c=(l.h.push(new bt("wrapperclasses",s)),l),p=(c.h.push(new O("skeletonattr",a)),c),h=(p.h.push(new O("contentattr",J.Concat(n))),p),w=(h.h.push(new R("content",r)),h),u=he(w.k,w.h,[]),x=new ce(u[1],kg(u[0]));return(w.i=x,x).Doc}function ai(e){let t=lh(e);return t>2147483647?t-4294967296:t}function Pe(e){throw new Error(e)}function lh(e){return(e<0?Math.ceil(e):Math.floor(e))>>>0}function sr(e){return[e.K,e.V]}function Ao(e,t){let r=1+t-e;return r<=0?[]:Lw(r,n=>n+e)}var ue=class extends Me{i;k;h;s;constructor(t){if(t=="New_1"){let r;super(),this.i=null,this.k=(r=tw(),String(r)),this.h=Ls([]),Br(this,"s",null)}}};function X(e,t,r,n){return new ca(t,"",a=>s=>{let l=r();return l.SetAnchorRoot(a),n({Vars:l,Anchors:l,Target:a,Event:s})})}function he(e,t,r){let n=new Ue("New_5"),a=new mt("New_3"),s=ae(t);try{for(;s.MoveNext();){let l=s.Current,c=l.Name;a.SAdd(c),n.set_Item(c,l)}}finally{let l=s;typeof l=="object"&&Ne(l)&&s.Dispose()}return[Pn(t,Ta(l=>{let c=l[0],p=l[1],h=l[2];if(a.Contains(c))return null;{let w=p===0?Re.GetOrAddHoleFor(e,c,()=>{let u=h==null?null:m(h.$0),x=u==null?"":u.$0,f=B.Create_1(x);return new _e(c,f)}):p===1?Re.GetOrAddHoleFor(e,c,()=>{let u=h==null?null:m(h.$0),x=u==null?0:u.$0,f=B.Create_1(x);return new pa(c,f)}):p===2?Re.GetOrAddHoleFor(e,c,()=>{let u=h==null?null:m(h.$0),x=u==null?!1:u.$0,f=B.Create_1(x);return new xn(c,f)}):p===3?Re.GetOrAddHoleFor(e,c,()=>{let u=h==null?null:m(h.$0),x=u==null?-864e13:u.$0,f=B.Create_1(x);return new ga(c,f)}):p===4?Re.GetOrAddHoleFor(e,c,()=>new ha(c,B.Create_1([]))):p===5?Re.GetOrAddHoleFor(e,c,()=>new kn(c,B.Create_1(m(globalThis.document.querySelector("[ws-dom="+c+"]"))))):p===6?Re.GetOrAddHoleFor(e,c,()=>{let u=h==null?null:m(h.$0),x=u==null?[]:u.$0,f=B.Create_1(x);return new ba(c,f)}):Pe("Invalid kind for template Var type: "+String(p));return n.set_Item(c,w),m(w)}},r)),{$:0,$0:n}]}function dh(){let e=new URLSearchParams(globalThis.location.search),t=e.get("code");zl().Set(!be(t)),oi().Set(hh(e));let r=e.get("title");be(r)||Dl().Set(r),Gl().Set(bh(e,t))}function ch(){return mr.Title}function uh(){return mr.Message}function ph(){let e=oi().Get();zl().Get()?globalThis.location.href=ad(e):globalThis.location.href=e}function gh(){let e=oi().Get();globalThis.location.href=e}function zl(){return mr.isAuthErrorVar}function hh(e){let t=e.get("from"),r=e.get("page"),n=wh();return be(t)?be(r)?n!=null&&n.$==1?n.$0:"/":r:t}function oi(){return mr.previousVar}function Dl(){return mr.titleVar}function bh(e,t){let r=e.get("message");return be(r)?be(t)?"An unexpected error occurred. Please try again.":fh(t):r}function Gl(){return mr.msgVar}function wh(){try{let e=globalThis.document.referrer;if(be(e))return null;{let t=globalThis.location.origin;return Rr(e,t)?m(e.substring(t.length)):null}}catch{return null}}function fh(e){return e=="invalid_state"?"Sign-in failed, please try again.":e=="token"?"GitHub sign-in failed during token exchange. Please try again.":e=="token_missing"?"GitHub sign-in failed (no token).":e=="user"?"GitHub sign-in failed when fetching your user info.":e=="user_parse"?"GitHub sign-in failed (user data issue).":e=="db"?"Sign-in temporarily unavailable. Please try again shortly.":e=="service"?"Sign-in temporarily unavailable (service not configured).":"Unexpected error during sign-in. Please try again."}function mh(){return Bt.BillToVat}function vh(){return Bt.BillToAddr}function yh(){return Bt.BillToName}function xh(){return Bt.InvSub}function kh(){return Bt.InvAmount}function Ch(){return Bt.InvStatus}function Sh(){return Bt.InvDate}function Ah(){return Bt.InvId}function $h(){rt(F(()=>M(_h(),e=>(Pt().Set(e),Y()))),null)}function _h(){return F(()=>{let e=Eh();if(e!=null&&e.$==1){let t=e.$0;return M(Yd(),r=>j(bi(n=>n.id==t,r)))}else return j(null)})}function Pt(){return Bt.invoiceVar}function Th(e,t){return String(e/100)+" "+(be(t)?"USD":t.toUpperCase())}function Eh(){let e=new URLSearchParams(globalThis.location.search).get("id");return e==null||e==""?null:m(e)}function Vh(){let e=new ue("New_1"),t=he(e.k,e.h,[]),r=new ce(t[1],Il(t[0])),a=(e.i=r,r).Doc,s=N.EmbedView(Ct(Nh,oa().View,yn())),l=te("hidden",V(E=>!E,oa().View)),c=new ue("New_1"),p=(c.h.push(new R("skeleton",a)),c),h=(p.h.push(new O("skeletonattr",l)),p),w=(h.h.push(new R("content",s)),h),u=he(w.k,w.h,[]),x=new ce(u[1],yg(u[0])),T=(w.i=x,x).Doc,k=new ue("New_1"),v=(k.h.push(new It("onafterrender","",()=>{Bh()})),k),S=(v.h.push(new R("maincontent",T)),v),y=(S.h.push(new O("toastattr",nw())),S),b=(y.h.push(new R("toasttext",rw())),y),C=he(b.k,b.h,[]),$=new ce(C[1],xg(C[0]));return(b.i=$,$).Doc}function Bh(){Sm().then(()=>Ph()).catch(()=>oa().Set(!1))}function oa(){return ec.isLoading}function Nh(e,t){if(e){let r=new ue("New_1"),n=he(r.k,r.h,[]),a=new ce(n[1],Il(n[0]));return(r.i=a,a).Doc}else if(t){let r=te("hidden",V(le=>le.length==0,qt().View)),n=pv(),a=Dh(),s=zh(),l=Mh(),c=Fh(),p=Ih(),h=Lh(),w=new ue("New_1"),u=(w.h.push(X(w.k,"gosubs",()=>w.i,()=>{aw()})),w),x=(u.h.push(X(u.k,"gobilling",()=>u.i,()=>{ow()})),u),f=(x.h.push(new O("substabattr",h)),x),T=(f.h.push(new O("billingtabattr",p)),f),k=(T.h.push(new O("subspageattr",c)),T),v=(k.h.push(new O("billingpageattr",l)),k),S=(v.h.push(new R("pastduewidget",s)),v),y=(S.h.push(new R("nosubswidget",a)),S),b=(y.h.push(new O("opencustomerportalattr",r)),y),C=(b.h.push(new O("activesubcontentattr",r)),b),$=(C.h.push(new R("githuborg",fv())),C),_=($.h.push(X($.k,"opencustomerportal",()=>$.i,()=>{sd()})),$),E=(_.h.push(new R("seatsbody",Gm())),_),L=(E.h.push(new R("invoicebody",hv())),E),G=(L.h.push(new R("countryoptions",N.Concat(n))),L),K=(G.h.push(new O("billingviewattr",uv())),G),q=(K.h.push(new O("billingeditattr",cv())),K),I=(q.h.push(new O("btnbillingeditattr",dv())),q),re=(I.h.push(new O("btnbillingsaveattr",lv())),I),fe=(re.h.push(new O("btnbillingcancelattr",sv())),re),W=(fe.h.push(X(fe.k,"billingeditclick",()=>fe.i,()=>{Am()})),fe),Q=(W.h.push(X(W.k,"billingsaveclick",()=>W.i,()=>{$m()})),W),pe=(Q.h.push(X(Q.k,"billingcancelclick",()=>Q.i,()=>{_m()})),Q),Ce=(pe.h.push(new R("billingnameview",iv())),pe),Z=(Ce.h.push(new R("billingvatinview",ov())),Ce),me=(Z.h.push(new R("billingline1view",av())),Z),oe=(me.h.push(new R("billingcityview",nv())),me),ke=(oe.h.push(new R("billingpostalview",rv())),oe),se=(ke.h.push(new R("billingcountryview",tv())),ke),Se=(se.h.push(new _e("billingnamevar",ev())),se),Ee=(Se.h.push(new _e("billingvatinvar",Qm())),Se),De=(Ee.h.push(new _e("billingline1var",B.Lens(ot(),le=>le.address.line1,(le,$e)=>Et(le.company,Ht($e,le.address.city,le.address.postal_code,le.address.country))))),Ee),Oe=(De.h.push(new _e("billingcityvar",B.Lens(ot(),le=>le.address.city,(le,$e)=>Et(le.company,Ht(le.address.line1,$e,le.address.postal_code,le.address.country))))),De),lt=(Oe.h.push(new _e("billingpostalvar",B.Lens(ot(),le=>le.address.postal_code,(le,$e)=>Et(le.company,Ht(le.address.line1,le.address.city,$e,le.address.country))))),Oe),Nt=(lt.h.push(new _e("billingcountryvar",B.Lens(ot(),le=>le.address.country,(le,$e)=>Et(le.company,Ht(le.address.line1,le.address.city,le.address.postal_code,$e))))),lt),Qe=(Nt.h.push(new O("addseatsbuttonattr",Dm())),Nt),vt=(Qe.h.push(X(Qe.k,"addseatsclick",()=>Qe.i,()=>{globalThis.location.href="./checkout?plan=pro&interval=year&seats=1"})),Qe),yt=(vt.h.push(X(vt.k,"refreshclick",()=>vt.i,()=>{Tm()})),vt),Qt=he(yt.k,yt.h,[["billingnamevar",0,null],["billingvatinvar",0,null],["billingline1var",0,null],["billingcityvar",0,null],["billingpostalvar",0,null],["billingcountryvar",0,m("")]]),Ge=new ce(Qt[1],Sg(Qt[0]));return(yt.i=Ge,Ge).Doc}else{let r=new ue("New_1"),n=(r.h.push(X(r.k,"loginclick",()=>r.i,()=>{Fm()})),r),a=he(n.k,n.h,[]),s=new ce(a[1],Cg(a[0]));return(n.i=s,s).Doc}}function Ph(){rt(F(()=>zt(F(()=>M(pi([nc(),ac(),Gh(),Rh(),Oh()]),()=>j(null))),()=>{oa().Set(!1)})),null)}function Lh(){let e=V(t=>t.$===0,qr().View);return J.Concat([te("bg-gray-100",e),te("dark:bg-white/5",e)])}function Ih(){let e=V(t=>t.$===1,qr().View);return J.Concat([te("bg-gray-100",e),te("dark:bg-white/5",e)])}function Fh(){return te("hidden",V(e=>e.$!==0,qr().View))}function Mh(){return te("hidden",V(e=>e.$!==1,qr().View))}function zh(){return N.BindView(e=>{if(Hr(t=>t.data.status=="past_due",e)){let t=new ue("New_1"),r=(t.h.push(X(t.k,"updatepaymentclick",()=>t.i,()=>{sd()})),t),n=he(r.k,r.h,[]),a=new ce(n[1],Bg(n[0]));return(r.i=a,a).Doc}else return N.Empty},qt().View)}function Dh(){return N.BindView(e=>{if(ge(e)===0){let t=new ue("New_1"),r=(t.h.push(X(t.k,"onsubscribeclick",()=>t.i,()=>{globalThis.location.href="/support#plans"})),t),n=he(r.k,r.h,[]),a=new ce(n[1],Ng(n[0]));return(r.i=a,a).Doc}else return N.Empty},qt().View)}function Gh(){return F(()=>M(fm(),e=>(Na().Set(m(e)),Ai(m(e)),Pa(za),Y())))}function Rh(){return F(()=>M(mm(),e=>(tc().Set(e),Y())))}function Oh(){return F(()=>M(vm(),e=>(Mo().Set(e),Y())))}function Hh(){return Zr.DetailsDoc}function jh(){return Zr.DetailsAttr}function Wh(){return Zr.MessageText}function Uh(){rt(F(()=>{let e=new URLSearchParams(globalThis.location.search).get("session_id");return e==null||e==""?(qh("Missing session id."),Y()):(ia().Set("Confirming your payment\u2026"),M(Kh(e),t=>{if(t==null)return Y();{let r=t.$0;return sa().Set(m(r)),ia().Set(r.paid?"Your payment has been received.":"Payment recorded; awaiting confirmation."),Y()}}))}),null)}function qh(e){ia().Set(e),sa().Set(null)}function ia(){return Zr.messageVar}function Kh(e){return F(()=>Vt(F(()=>M(vv(e),t=>t.$==0?j(m(t.$0)):j(null))),()=>j(null)))}function sa(){return Zr.confirmationVar}function pn(e,t){let r=be(t)?"-":t;return N.Element("div",[],[N.TextNode(e+": "),N.Element("b",[],[N.TextNode(r)])])}function Zh(e){return lr(e/100)}function Yh(e){let t=[],r;for(var n in e)t.push(e[n]);return t}function Jh(){return Mt.AccountHeaderText}function Xh(e){e.Event.key=="Escape"&&jt().Set(!1)}function Qh(e){e.Event.stopPropagation()}function eb(){jt().Get()&&jt().Set(!1)}function tb(){jt().Set(!jt().Get())}function rb(){rt(F(()=>(jt().Set(!1),M(Lb(!0),()=>j(null)))),null)}function nb(){return te("hidden",V(e=>!e,jt().View))}function ab(){return kt("aria-expanded",V(e=>e?"true":"false",jt().View))}function Os(){return J.Concat([kt("src",Rl()),te("hidden",V(e=>!e,Ol())),te("opacity-0",mn().View)])}function ob(){return J.Concat([te("hidden",Ol()),te("opacity-0",mn().View)])}function ib(){return te("opacity-0 hidden",V(e=>!e,mn().View))}function Hs(){return ka(Ca())}function js(){return ka(Ca())}function Ws(){return ka(V(e=>!e,Ca()))}function Us(){return ka(Ca())}function sb(){rt(F(()=>(mn().Set(!0),M(od(),()=>M(yw(500),()=>(mn().Set(!1),Y()))))),null)}function jt(){return Mt.isOpen}function Rl(){return Mt.avatarSrcV}function Ol(){return Mt.hasAvatarV}function mn(){return Mt.isLoading}function ka(e){return J.Concat([te("hidden",V(t=>!t,e)),te("flex",e)])}function Ca(){return Mt.isAuthedV}function qs(){return Mt.userV}function lb(){return Mt.displayNameV}var N=class e extends Me{docNode;updates;static get Empty(){return e.Mk(null,ct())}static TextView(t){let r=Yf();return e.Mk(dm(r),V(n=>{Jf(r,n)},t))}static Mk(t,r){return new e(t,r)}static Concat(t){return zn(e.Empty,e.Append,Mn(t))}static EmbedView(t){let r=Xf();return e.Mk(cm(r),V(()=>{},Tb(n=>(Qf(r,n.docNode),n.updates),t)))}static RunBefore(t,r){let n=globalThis.document.createTextNode("");t.parentNode.insertBefore(n,t),e.RunBetween(n,t,r)}static TextNode(t){return e.Mk(um(globalThis.document.createTextNode(t)),ct())}static BindView(t,r){return e.EmbedView(V(t,r))}static Append(t,r){return e.Mk(pm(t.docNode,r.docNode),Fr(t.updates,r.updates))}static RunInPlace(t,r,n){let a=em(r,n.docNode);vn(jo()||Wo()?vl(ll(t,a,n.docNode)):()=>{dl(t,a,n.docNode)},n.updates)}static RunBetween(t,r,n){ki(r,n.docNode);let a=tm(t,r,n.docNode);vn(jo()||Wo()?vl(ll(!1,a,n.docNode)):()=>{dl(!1,a,n.docNode)},n.updates)}static Element(t,r,n){let a=J.Concat(r),s=e.Concat(n);return Tn.New(globalThis.document.createElement(t),a,s)}static ConvertBy(t,r,n){return e.Flatten(Bb(t,r,n))}static Input(t,r){return e.InputInternal("input",()=>Pn(t,[cd(r)]))}static ConvertSeqBy(t,r,n){let a=r,s=Nb(t,(l,c)=>a(l)(c),n);return e.Flatten(s)}static Flatten(t){return e.EmbedView(V(r=>e.Concat(r),t))}static InputInternal(t,r){let n=globalThis.document.createElement(t);return Tn.New(n,J.Concat(r(n)),e.Empty)}ReplaceInDom(t){let r=globalThis.document.createTextNode("");t.parentNode.replaceChild(r,t),e.RunBefore(r,this)}constructor(t,r){super(),this.docNode=t,this.updates=r}};function db(e){let t={},r=ae(e);try{for(;r.MoveNext();){let n=r.Current;t[n[0]]=n[1]}}finally{let n=r;typeof n=="object"&&Ne(n)&&r.Dispose()}return t}function Hl(e,t){return N.Element("pre",[J.Create("class","line-numbers language-fsharp w-full rounded-xl !overflow-auto custom-scrollbar max-h-[38rem] text-xs m-0 !bg-transparent")],[N.Element("code",[J.Create("class","language-fsharp pt-[1px]"),J.A4(t)],[N.TextNode(e)])])}function fo(e){return globalThis.document.getElementById(e)}function jl(e,t){let r=e.querySelectorAll(t);return Or(()=>it(n=>r[n],Ao(0,ai(r.length)-1)))}function lr(e){return"\u20AC"+String(e)}function $o(e){let t=Wl("Error!",e,"error");ti.default.fire(t)}function Wl(e,t,r){let n;return n={},n.title=e,n.text=t,n.icon=r,n.showCloseButton=!0,n.buttonsStyling=!1,n.customClass={popup:"rounded-xl shadow-2xl",title:"text-gray-900 dark:text-white",htmlContainer:"text-gray-600 dark:text-gray-400",confirmButton:"inline-flex items-center justify-center rounded-lg h-10 px-6 min-w-[6rem] text-sm font-semibold text-white dark:text-gray-950 bg-gray-950 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2transition-colors shadow-sm ml-2",cancelButton:"inline-flex items-center justify-center rounded-lg h-10 px-4 min-w-[5rem] text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 focus:outline-none transition-colors shadow-sm",icon:"scale-75"},n}function ii(e){si(e,t=>{let r=Wl("Error!",t,"error");ti.default.fire(r)})}function si(e,t){e.$==1&&t(e.$0)}var la=class extends Me{},_o={$:0},Ks={$:1},Zs={$:2},Ys={$:3},Js={$:4};function m(e){return{$:1,$0:e}}var Xs={$:0},Qs={$:1},To={$:2},el={$:3};function cb(){return yi.ContactSendButtonText}function ub(){return yi.ContactSendButtonAttr}function pb(e){e.Event.preventDefault();let t=Tt().Get();Ul(t)?rt(F(()=>(da().Set(!0),zt(F(()=>M($f(t),r=>r?(alert("Message sent successfully!"),gb(),Y()):(alert("Failed to send message. Please try again later."),Y()))),()=>{da().Set(!1)}))),null):alert("Please fill in all required fields.")}function gb(){Tt().Set(Rt("WebSharper support","","","","United States"))}var qe=class extends Me{ApplyVarHole(t){console.warn("Not a var hole: ",this.Name)}ForTextView(){return console.warn("Content hole filled with attribute data",this.Name),null}AddAttribute(t,r){console.warn("Var hole filled with non-Var data",this.Name)}get AsChoiceView(){return console.warn("Attribute value hole filled with non-text data",this.Name),Ni("")}},B=ne(e=>class extends Me{static{B=e(this)}static Lens(r,n,a){let s=Af(),l=V(n,r.View);return new class extends la{constructor(){super()}Get(){return n(r.Get())}Set(c){return r.Update(p=>a(p,c))}SetFinal(c){return this.Set(c)}Update(c){return r.Update(p=>a(p,c(n(p))))}UpdateMaybe(c){return r.UpdateMaybe(p=>{let h=c(n(p));return h==null?null:m(a(p,h.$0))})}get View(){return l}get Id(){return s}}}static Create_1(r){return new zo(!1,{s:La(r,[])},r)}static Set(r,n){r.Set(n)}});function Tt(){return Ea.ContactFormVar}function Ul(e){return!be(e.message)&&!be(e.email)&&!be(e.name)&&bb(e.email)}function da(){return Ea.IsSendingVar}function hb(){return Ea.CanSendView}function bb(e){if(e==null)return!1;{let t=ut(e);return t.indexOf("@")!=-1&&t.indexOf(".")!=-1}}function ql(e){return e.$==1?"year":"month"}function Nn(e){let n=ft(999,e)===-1?999:e;return ft(1,n)===1?1:n}function Rt(e,t,r,n,a){return{subject:e,message:t,email:r,name:n,country:a}}function Sa(){return He.SeatsTextVar}function li(){return He.VatinVar}function Kl(){return He.CompanyNameVar}function Wt(){return He.IsCompanyVar}function Zl(){return He.CountryVar}function Yl(){return He.PostalVar}function Jl(){return He.CityVar}function Xl(){return He.StreetVar}function Ql(){return He.EmailVar}function Aa(){return He.ContinueText}function Eo(){return He.BackLinkLabel}function ra(){di().Set(!1),Aa().Set("Continue to payment")}function wb(){let e,t,r=globalThis.document.referrer;e="/support#plans",t="Plans",be(r)||(nl(r,"/account")?(e="/account",t="My account"):nl(r,"/support")&&(e="/support#plans",t="Plans")),ed().Set(e),Eo().Set(t)}function fb(){let e=xb(),t=Je(),r=Je().Get();t.Set(at(e.plan,e.interval,String(e.seats),r.email,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin))}function mb(){return F(()=>M(F(()=>Vt(F(()=>oc()),()=>j(null))),e=>{if(e!=null&&e.$==1){let t=e.$0,r=Je(),n=Je().Get(),a=t.companyName,s=a==null?"":a.$0,l=t.taxId,c=l==null?"":l.$0,p=at(n.plan,n.interval,n.seatsText,t.email,t.line1,t.city,t.postalCode,t.country,t.companyName!=null,s,c);return r.Set(p),Y()}else return Y()}))}function vb(){return F(()=>M(Tf(),e=>{if(e==null)return Y();{let t=e.$0;return td().Set(t),Y()}}))}function di(){return He.ContinueDisabled}function yb(){let e=Je().Get(),t=Nn(rd(e.seatsText));return Jv(e.plan.toLowerCase()=="freelancer"?"freelancer":"pro",ql(e.interval),e.plan.toLowerCase()=="freelancer"?1:t,cc(ut(e.email),ut(e.street),ut(e.city),ut(e.postal),e.country,e.isCompany?m(ut(e.companyName)):null,e.isCompany?m(ut(e.vatin)):null))}function Vo(){return He.SelectedPlanVar}function Je(){return He.CheckoutFormVar}function ed(){return He.backLinkHref}function xb(){let e,t=new URLSearchParams(globalThis.location.search),r=t.get("plan"),n=r!=null&&r.toLowerCase()=="freelancer"?"freelancer":"pro",a=t.get("interval"),s=a!=null&&a.toLowerCase()=="month"?Ov:$i,l=(e=0,[$a(t.get("seats"),{get:()=>e,set:p=>{e=p}}),e]),c=l[0]?Nn(l[1]):1;return Hv(n,s,c)}function td(){return He.plansVar}function rd(e){let t,r=e==null?"":ut(e);if(r=="")return 1;{let n=(t=0,[$a(r,{get:()=>t,set:a=>{t=a}}),t]);return n[0]?Nn(n[1]):1}}function Qn(){return He.SelectedIntervalVar}function kb(){return Fd.BackLinkAttr}function Cb(){return te("hidden",V(e=>!e,Wt().View))}function Sb(){return J.Concat([Gr("required",Wt().View),Gr("disabled",V(e=>!e,Wt().View))])}function Ab(){return J.Concat([Gr("required",Wt().View),Gr("disabled",V(e=>!e,Wt().View))])}function $b(){return J.Concat([Gr("disabled",di().View)])}function _b(){return kt("class",V(e=>e.toLowerCase()!="freelancer"?"transition-all duration-500 ease-in-out overflow-hidden mt-6 max-h-[300px] opacity-100":"transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0",Vo().View))}function Ct(e,t,r){return Ur(()=>Va(e,t(),r()))}function V(e,t){return Ur(()=>Yr(e,t()))}function ct(e){let t={s:Yt(e)};return()=>t}function Ur(e){let t={c:null,o:e};return()=>{let r=t.c;if(r===null){r=t.o(),t.c=r;let n=r.s;return n!=null&&n.$==0?t.o=null:Md(r,()=>{t.c=null}),r}else return r}}function na(e,t,r,n){return Ur(()=>Lf(e,t(),r(),n()))}function Tb(e,t){return Eb(V(e,t))}function Fr(e,t){return Ur(()=>If(e(),t()))}function Eb(e){return Ur(()=>Of(e()))}function vn(e,t){function r(){Hf(t(),e,()=>{Ft().Fork(r)})}Ft().Fork(r)}function Vb(e){return Ur(()=>jf(it(t=>t(),e)))}function Bb(e,t,r){let n=[new Ue("New_5")];return V(a=>{let s=n[0],l=new Ue("New_5"),c=ic(p=>{let h=e(p),w=s.ContainsKey(h)?s.Item(h):t(p);return l.set_Item(h,w),w},Ke(a));return n[0]=l,c},r)}function Nb(e,t,r){let n=[new Ue("New_5")];return V(a=>{let s=n[0],l=new Ue("New_5"),c=ic(p=>{let h,w=e(p);if(s.ContainsKey(w)){let u=s.Item(w);h=(B.Set(u.r,p),u)}else h=Pb(u=>t(w,u),p);return l.set_Item(w,h),h.e},Ke(a));return n[0]=l,c},r)}function Pb(e,t){let r=B.Create_1(t),n=r.View;return{e:e(n),r,w:n}}function yn(){return Fn.IsAuthedView}function nd(){globalThis.location.href=Ib()}function ad(e){return"https://api.websharper.com/auth/github/start?returnUrl="+encodeURIComponent(e)}function Lb(e){return F(()=>pd(Vt(F(()=>M(yv(),()=>j(null))),t=>(console.error("AuthClient.Logout RPC failed",t),Y())),F(()=>(Mr().Set(null),e?Vt(F(()=>(globalThis.location.reload(),Y())),()=>Y()):Y()))))}function od(){return F(()=>{let e=Mr().Get();return e!=null&&e.$==1?j(m(e.$0)):(Bo().Set(!0),zt(F(()=>Vt(F(()=>M(xv(),t=>(Mr().Set(t),j(t)))),t=>(console.error("AuthClient.FetchMe RPC failed",t),Mr().Set(null),j(null)))),()=>{Bo().Set(!1)}))})}function Ib(){return ad(globalThis.location.pathname+globalThis.location.search)}function Fb(){return Fn.UserView}function Mr(){return Fn.userVar}function Bo(){return Fn.isFetchingVar}function Mb(){return xi.FormErrorDoc}function zb(){let e=globalThis.document.referrer,t=globalThis.location.hostname;!be(e)&&e.indexOf(t)!=-1?globalThis.history.back():globalThis.location.href="/support"}function Db(){let e=Ob();if(e==null)No().Set(null),rt(F(()=>Vt(F(()=>(di().Set(!0),Aa().Set("Processing\u2026"),M(qf(yb()),t=>{let r;return t!=null&&t.$==1&&!be(t.$0)&&(r=t.$0,!0)?(globalThis.location.href=r,ra(),Y()):(ra(),Y())}))),()=>(ra(),Y()))),null);else{let t=e.$0;No().Set(m(t))}}function Gb(){id(-1,Sa())}function Rb(){id(1,Sa())}function Ob(){let e=Ql().Get(),t=Xl().Get(),r=Jl().Get(),n=Yl().Get(),a=Wt().Get(),s=Kl().Get(),l=li().Get();return Nr(e)?m("Please enter your email."):Nr(t)?m("Please enter your street address."):Nr(r)?m("Please enter your city."):Nr(n)?m("Please enter your postal code."):a&&Nr(s)?m("Please enter the company name."):a&&Nr(l)?m("Please enter the VAT number."):null}function No(){return xi.FormError}function id(e,t){let r=t.Get(),n=r==null?"":ut(r),s=(p=>{let h,w=(h=0,[$a(p,{get:()=>h,set:u=>{h=u}}),h]);return w[0]?w[1]:1})(n)+e,l=Nn(s),c=String(l);t.Set(c)}function Nr(e){return be(e??"")}function Hb(){return Xe.CountryOptionsDoc}function jb(){return Xe.PlanName}function Wb(){return Xe.PlanPrice}function Ub(){return Xe.PlanInterval}function qb(){return Xe.PriceHint}function Kb(){return Xe.Subtotal}function Zb(){return Xe.Taxes}function Yb(){return Xe.Total}function gn(){return Xe.CurrentPlan}function Jb(){return Xe.Seats}function Xb(){return Xe.IsPerSeat}function mo(){return Xe.SubtotalRaw}function Qb(){return Xe.VatPercentage}function tl(){return Xe.TaxesRaw}function ew(){return Xe.TotalRaw}var R=class e extends qe{name;fillWith;WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}get Value(){return this.fillWith}constructor(t,r){super(),this.name=t,this.fillWith=r}},It=class e extends qe{name;key;fillWith;WithName(t){return new e(t,this.key,this.fillWith)}get Name(){return this.name}get Value(){return this.fillWith}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}};function tw(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]","g"),e=>{let t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}var mr=ne(e=>class{static{mr=e(this)}static Message;static Title;static isAuthErrorVar;static previousVar;static msgVar;static titleVar;static{this.titleVar=B.Create_1("Something went wrong"),this.msgVar=B.Create_1("An unexpected error occurred. Please try again."),this.previousVar=B.Create_1("/"),this.isAuthErrorVar=B.Create_1(!1),this.Title=Dl().View,this.Message=Gl().View}}),ca=class e extends qe{name;key;fillWith;WithName(t){return new e(t,this.key,this.fillWith)}get Name(){return this.name}get Value(){return this.fillWith}constructor(t,r,n){super(),this.name=t,this.key=r,this.fillWith=n}},Bt=ne(e=>class{static{Bt=e(this)}static BillToAddr;static BillToVat;static BillToName;static InvSub;static InvAmount;static InvStatus;static InvDate;static InvId;static invoiceVar;static{this.invoiceVar=B.Create_1(null),this.InvId=N.TextView(V(r=>r==null?"-":r.$0.id,Pt().View)),this.InvDate=N.TextView(V(r=>r==null?"-":r.$0.date,Pt().View)),this.InvStatus=N.TextView(V(r=>r==null?"-":r.$0.status,Pt().View)),this.InvAmount=N.TextView(V(r=>{if(r==null)return"-";{let n=r.$0;return Th(n.amount,n.currency)}},Pt().View)),this.InvSub=N.TextView(V(r=>{if(r==null)return"-";{let n=ww(a=>!be(a),r.$0.subscription);return n==null?"-":n.$0}},Pt().View)),this.BillToName=N.TextView(V(r=>{if(r==null)return"-";{let n=r.$0.company;return n!=null&&n.$==1?be(n.$0.name)?"-":n.$0.name:"-"}},Pt().View)),this.BillToVat=N.TextView(V(r=>{if(r==null)return"";{let n=r.$0.company;return n!=null&&n.$==1?be(n.$0.vatin)?"":"VAT: "+n.$0.vatin:""}},Pt().View)),this.BillToAddr=N.TextView(V(r=>{if(r==null)return"-";{let n=r.$0.billingAddress;if(n==null)return"-";{let a=n.$0;return Ut(", ",Kf(s=>!be(s),St([a.line1,a.postal_code,a.city,a.country])))}}},Pt().View))}});function rw(){return Qr.ToastText}function nw(){return Qr.ToastAttr}function aw(){qr().Set(gc)}function ow(){qr().Set(Xv)}function sd(){let e=tc().Get();e==null?Kt("Customer portal is not available yet."):globalThis.open(e.$0,"_blank")}function ua(){return Qr.ToastMessage}function qr(){return Qr.ActivePage}function Kt(e){let t=be(e)?"Saved":e;ua().Set(m(t)),setTimeout(()=>{ua().Set(null)},1600)}function Dr(e){iw().Set(e)}function iw(){return Qr.IsLoading}function te(e,t){return en(t,r=>n=>n?Ad(r,e):$d(r,e))}function kt(e,t){return en(t,r=>n=>r.setAttribute(e,n))}function Gr(e,t){return en(t,r=>n=>n?r.setAttribute(e,""):r.removeAttribute(e))}function ld(e){return sw(e,!0)}function sw(e,t){return J.A3(r=>{t?Ad(r,e):$d(r,e)})}function dd(e,t){return J.A3(r=>{r.addEventListener(e,n=>t(r)(n),!1)})}function rl(e){return J.A4(e)}function lw(e,t,r){return en(Ct((n,a)=>[n,a],t,r),n=>a=>a[0]?n.setAttribute(e,a[1]):n.removeAttribute(e))}function dw(e,t){return en(t,r=>n=>{r[e]=n})}function cd(e){return Kr(yc(),e)}function cw(e){return Kr(xc(),e)}function uw(e){return Kr(kc(),e)}function pw(e){return Kr(Cc(),e)}function gw(e){return Kr(Sc(),e)}function hw(e){return Kr(Ac(),e)}function Kr(e,t){let r=e(t);return Xd(J.A3(r[0]),bw(r[1],r[2]))}function bw(e,t){return en(t,e)}var Zr=ne(e=>class{static{Zr=e(this)}static DetailsDoc;static DetailsAttr;static MessageText;static messageVar;static confirmationVar;static{this.confirmationVar=B.Create_1(null),this.messageVar=B.Create_1("Confirming your payment\u2026"),this.MessageText=N.TextView(ia().View),this.DetailsAttr=te("hidden",V(r=>r==null,sa().View)),this.DetailsDoc=N.BindView(r=>{if(r==null)return N.Empty;{let n=r.$0;return N.Concat([pn("Seats",String(n.seats)),pn("Email",n.email),pn("Amount",Zh(n.amountTotal,n.currency)),pn("Status",n.status),pn("Subscription",n.subscriptionId)])}},sa().View)}}),O=class e extends qe{name;fillWith;WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}get Value(){return this.fillWith}constructor(t,r){super(),this.name=t,this.fillWith=r}};function $a(e,t){return py(e,-2147483648,2147483647,t)}var Ue=class extends Me{equals;hash;count;data;Item(t){return this.get(t)}set_Item(t,r){this.set(t,r)}get(t){let r=this.data[this.hash(t)];return r==null?Pv():Qw(n=>{let a=sr(n);return this.equals.apply(null,[a[0],t])?m(a[1]):null},r)}ContainsKey(t){let r=this.data[this.hash(t)];return r==null?!1:Hr(n=>this.equals.apply(null,[sr(n)[0],t]),r)}set(t,r){let n=this.hash(t),a=this.data[n];if(a==null)this.count=this.count+1,this.data[n]=new Array({K:t,V:r});else{let s=fi(l=>this.equals.apply(null,[sr(l)[0],t]),a);s==null?(this.count=this.count+1,a.push({K:t,V:r})):a[s.$0]={K:t,V:r}}}TryGetValue(t,r){let n=this.data[this.hash(t)];if(n==null)return!1;{let a=vd(s=>{let l=sr(s);return this.equals.apply(null,[l[0],t])?m(l[1]):null},n);return a!=null&&a.$==1&&(r.set(a.$0),!0)}}GetEnumerator(){return Mv(tf(Yh(this.data)))}get Values(){return new Yo(this)}RemoveKey(t){return this.remove(t)}get Keys(){return new Xo(this)}remove(t){let r=this.hash(t),n=this.data[r];if(n==null)return!1;{let a=Ln(s=>!this.equals.apply(null,[sr(s)[0],t]),n);return ge(a)<n.length&&(this.count=this.count-1,this.data[r]=a,!0)}}DAdd(t,r){this.add(t,r)}add(t,r){let n=this.hash(t),a=this.data[n];a==null?(this.count=this.count+1,this.data[n]=new Array({K:t,V:r})):(Hr(s=>this.equals.apply(null,[sr(s)[0],t]),a)&&Lv(),this.count=this.count+1,a.push({K:t,V:r}))}constructor(t,r,n,a){if(t=="New_5"&&(t="New_6",r=[],n=H,a=wr),t=="New_6"){let s=r,l=n,c=a;super(),this.equals=l,this.hash=c,this.count=0,this.data=[];let p=ae(s);try{for(;p.MoveNext();){let h=p.Current;this.set(h.K,h.V)}}finally{let h=p;typeof h=="object"&&Ne(h)&&p.Dispose()}}}};function ww(e,t){let r;return t!=null&&t.$==1&&e(t.$0)&&(r=t.$0,!0)?t:null}function fw(e){return e==null?null:m(e)}var bt=class e extends qe{name;fillWith;WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}ForTextView(){return m(this.fillWith)}get AsChoiceView(){return kr(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Mt=ne(e=>class{static{Mt=e(this)}static AccountHeaderText;static displayNameV;static hasAvatarV;static avatarSrcV;static isLoading;static isAuthedV;static userV;static isOpen;static{this.isOpen=B.Create_1(!1),this.userV=Fb(),this.isAuthedV=yn(),this.isLoading=B.Create_1(!0),this.avatarSrcV=V(r=>r!=null&&r.$==1?be(r.$0.avatarUrl)?"":r.$0.avatarUrl:"",qs()),this.hasAvatarV=V(r=>r!="",Rl()),this.displayNameV=V(r=>r==null||be(r.$0.login)?"Account":r.$0.login,qs()),this.AccountHeaderText=lb()}}),J=class e{static Concat(t){let r=Mn(t);return zn(Ba(),(n,a)=>Xd(n,a),r)}static Create(t,r){return e.A3(n=>{n.setAttribute(t,r)})}static A1(t){return Fe(e,{$:1,$0:t})}static A4(t){return Fe(e,{$:4,$0:t})}static A2(t,r){return Fe(e,{$:2,$0:t,$1:r})}static A3(t){return Fe(e,{$:3,$0:t})}static HandlerImpl(t,r){return e.A3(n=>{n.addEventListener(t,a=>r(n)(a),!1)})}$;$0;$1};function Lt(e,t,r){if(t==null)if(r!=null&&r.$==1){let n=r.$0;return n<0?"":e.slice(0,n+1)}else return"";else{if(r==null)return e.slice(t.$0);{let n=r.$0,a=t.$0;return n<0?"":e.slice(a,n+1)}}}function ci(e){return _a((t,r)=>{e.then(t,n=>r(mw(n)))})}function mw(e){return e instanceof Error?e:new Go(e)}function vw(e){return new Promise((t,r)=>{Cw(e,t,n=>{r(n)},n=>{r(n)},null)})}function rt(e,t){let r=ui()[0],n=t==null?r:t.$0;n.c||e(vr(a=>{a.$==1&&ud(a.$0)},n))}function F(e){return t=>{try{e()(t)}catch(r){t.k(Ia(r))}}}function M(e,t){return xw(r=>{e(vr(n=>{if(n.$==0){let a=n.$0;Ft().Fork(()=>{try{t(a)(r)}catch(s){r.k(Ia(s))}})}else Ft().Fork(()=>{r.k(n)})},r.ct))})}function Y(){return rn.Zero}function j(e){return t=>{t.k(tn(e))}}function yw(e){return t=>{let r,n;r=void 0,n=void 0,r=setTimeout(()=>{n.Dispose(),Ft().Fork(()=>{t.k(tn(null))})},e),n=gd(t.ct,()=>{clearTimeout(r),Ft().Fork(()=>{hd(t)})})}}function Vt(e,t){return r=>{e(vr(n=>{if(n.$==0)r.k(tn(n.$0));else if(n.$==1){let a=n.$0;try{t(a)(r)}catch{r.k(n)}}else r.k(n)},r.ct))}}function ui(){return rn.defCTS}function ud(e){console.log("WebSharper: Uncaught asynchronous exception",e)}function zt(e,t){return r=>{e(vr(n=>{try{t(),r.k(n)}catch(a){r.k(Ia(a))}},r.ct))}}function pi(e){let t=Ke(e);return ge(t)===0?j([]):r=>{let n=t.length,a=[n],s=new Array(n);for(let l=0,c=n-1;l<=c;l++)(p=>Ft().Fork(()=>{U(t,p)(vr(h=>{let w,u=a[0];switch(u===0?0:u===1?h.$==0?1:(w=h,3):h.$==0?2:(w=h,3)){case 0:return null;case 1:return fn(s,p,h.$0),a[0]=0,r.k(tn(s));case 2:fn(s,p,h.$0);{a[0]=u-1;return}break;case 3:return a[0]=0,r.k(w)}},r.ct))}))(l)}}function xw(e){return t=>{t.ct.c?hd(t):e(t)}}function pd(e,t){return M(e,()=>t)}function gd(e,t){if(e===kw())return{Dispose(){return null}};{let r=e.r.push(t)-1;return{Dispose(){return fn(e.r,r,()=>{})}}}}function hd(e){e.k(pc(new ma("New",e.ct)))}function _a(e){return t=>{let r=[!1],n=a=>{r[0]?Pe("A continuation provided by Async.FromContinuations was invoked multiple times"):(r[0]=!0,Ft().Fork(a))};e(a=>{n(()=>{t.k(tn(a))})},a=>{n(()=>{t.k(Ia(a))})},a=>{n(()=>{t.k(pc(a))})})}}function Ft(){return rn.scheduler}function kw(){return rn.noneCT}function Cw(e,t,r,n,a){let s=ui()[0],l=a==null?s:a.$0;l.c||e(vr(c=>{c.$==1?r(c.$0):c.$==2?n(c.$0):t(c.$0)},l))}function Sw(e,t){let r=ui()[0],n=t==null?r:t.$0;Ft().Fork(()=>{n.c||e(vr(a=>{a.$==1&&ud(a.$0)},n))})}function Aw(){return rn.GetCT}function ut(e){return e.replace(new RegExp("^\\s+"),"").replace(new RegExp("\\s+$"),"")}function be(e){return e==null||new RegExp("^\\s*$").test(e)}function Ut(e,t){return Ke(t).join(e)}function nl(e,t){return e.substring(e.length-t.length)==t}function Rr(e,t){return e.substring(0,t.length)==t}function pt(e,t,r){return $w(e,new RegExp("["+_w(t.join(""))+"]"),r)}function $w(e,t,r){return r===1?Ln(n=>n!=="",al(e,t)):al(e,t)}function _w(e){return e.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]","g"),"\\$&")}function Tw(e,t){return Hw(e,Vw(t))}function al(e,t){return e.split(t)}function bd(e,t,r){return e.substr(t,r)}function Ew(e,t,r){function n(a){let s=a.indexOf(t);if(s!==-1){let l=Bw(a,t,r),c=s+r.length;return bd(l,0,s+r.length)+n(l.substring(c))}else return a}return n(e)}function Vw(e){return e??""}function Bw(e,t,r){return e.replace(t,r)}function Nw(e){return e==null||e==""}function Pw(e,t){return t.join(e)}var Zt=ne(e=>class{static{Zt=e(this)}static serverSrc;static sharedSrc;static clientSrc;static uiSrc;static endPointSrc;static warpSrc;static ActiveGenTab;static{this.ActiveGenTab=B.Create_1(_o),this.warpSrc=`template Main "index.html"\r
\r
endpoint Home "/" return Main\r
`,this.endPointSrc=`namespace MyApplication\r
\r
open WebSharper.Sitelets\r
\r
type EndPoint =\r
    | [<EndPoint "/">] Home\r
`,this.uiSrc=`namespace MyApplication\r
\r
open WebSharper.UI.Templating\r
\r
[<JavaScript>]\r
module UI =\r
    type MyTemplate = Template<"index.html">\r
    let Main = MyTemplate().Doc()\r
`,this.clientSrc=`module Client =\r
    let Start() = Console.Log("App Started")\r
`,this.sharedSrc="type SharedData = { ID: int; Name: string }",this.serverSrc=`module Server =\r
    let DoWork() = async { return 42 }\r
`}}),mt=class e extends Me{equals;hash;data;count;SAdd(t){return this.add(t)}Contains(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrContains(t,r)}add(t){let r=this.hash(t),n=this.data[r];return n==null?(this.data[r]=[t],this.count=this.count+1,!0):this.arrContains(t,n)?!1:(n.push(t),this.count=this.count+1,!0)}arrContains(t,r){let n=!0,a=0,s=r.length;for(;n&&a<s;)this.equals.apply(null,[r[a],t])?n=!1:a=a+1;return!n}GetEnumerator(){return ae(ko(this.data))}ExceptWith(t){let r=ae(t);try{for(;r.MoveNext();)this.Remove(r.Current)}finally{let n=r;typeof n=="object"&&Ne(n)&&r.Dispose()}}get Count(){return this.count}IntersectWith(t){let r=new e("New_4",t,this.equals,this.hash),n=ko(this.data);for(let a=0,s=n.length-1;a<=s;a++){let l=n[a];r.Contains(l)||this.Remove(l)}}Remove(t){let r=this.data[this.hash(t)];return r==null?!1:this.arrRemove(t,r)&&(this.count=this.count-1,!0)}CopyTo(t,r){let n=ko(this.data);for(let a=0,s=n.length-1;a<=s;a++)fn(t,a+r,n[a])}arrRemove(t,r){let n=!0,a=0,s=r.length;for(;n&&a<s;)this.equals.apply(null,[r[a],t])?(r.splice(a,1),n=!1):a=a+1;return!n}constructor(t,r,n,a){t=="New_3"&&(t="New_4",r=[],n=H,a=wr);let s;if(t=="New_2"&&(s=r,t="New_4",r=s,n=H,a=wr),t=="New_4"){let l=r,c=n,p=a;super(),this.equals=c,this.hash=p,this.data=[],this.count=0;let h=ae(l);try{for(;h.MoveNext();)this.add(h.Current)}finally{let w=h;typeof w=="object"&&Ne(w)&&h.Dispose()}}}};function Pn(e,t){return{GetEnumerator:()=>{let r=ae(e),n=[!0];return new gt(r,null,a=>{if(a.s.MoveNext())return a.c=a.s.Current,!0;{let s=a.s;return H(s,null)||s.Dispose(),a.s=null,n[0]&&(n[0]=!1,a.s=ae(t),a.s.MoveNext()?(a.c=a.s.Current,!0):(a.s.Dispose(),a.s=null,!1))}},a=>{let s=a.s;H(s,null)||s.Dispose()})}}}function gi(e,t){let r=ae(t);try{for(;r.MoveNext();)e(r.Current)}finally{let n=r;typeof n=="object"&&Ne(n)&&r.Dispose()}}function Or(e){return{GetEnumerator:()=>ae(e())}}function it(e,t){return{GetEnumerator:()=>{let r=ae(t);return new gt(null,null,n=>r.MoveNext()&&(n.c=e(r.Current),!0),()=>{r.Dispose()})}}}function Lw(e,t){return Dw(e,md(t))}function Iw(e){let t=ae(e);try{return t.MoveNext()?t.Current:Jo()}finally{let r=t;typeof r=="object"&&Ne(r)&&t.Dispose()}}function wd(e,t,r){let n=t,a=ae(r);try{for(;a.MoveNext();)n=e(n,a.Current);return n}finally{let s=a;typeof s=="object"&&Ne(s)&&a.Dispose()}}function Fw(e,t){let r=0,n=ae(t);try{for(;n.MoveNext();)e(r,n.Current),r=r+1}finally{let a=n;typeof a=="object"&&Ne(a)&&n.Dispose()}}function bn(e,t){return Gw(it(e,t))}function Mw(e){return Rw((t,r)=>[t,r],e)}function zw(e,t){let r=ae(t);try{let n=!0,a=0;for(;n&&r.MoveNext();)e(r.Current)?n=!1:a=a+1;return n?null:m(a)}finally{let n=r;typeof n=="object"&&Ne(n)&&r.Dispose()}}function fd(e,t){let r=ae(t);try{let n=null;for(;H(n,null)&&r.MoveNext();)n=e(r.Current);return n}finally{let n=r;typeof n=="object"&&Ne(n)&&r.Dispose()}}function Dw(e,t){return e<0&&Wy(),{GetEnumerator:()=>{let r=[ae(t)];return new gt(0,null,n=>{if(n.s=n.s+1,n.s>e)return!1;{let a=r[0];return H(a,null)?Jo():a.MoveNext()?(n.c=a.Current,n.s===e&&(a.Dispose(),r[0]=null),!0):(a.Dispose(),r[0]=null,Jo())}},()=>{let n=r[0];H(n,null)||n.Dispose()})}}}function md(e){return{GetEnumerator:()=>new gt(0,null,t=>(t.c=e(t.s),t.s=t.s+1,!0),void 0)}}function Gw(e){return{GetEnumerator:()=>{let t=ae(e);function r(n){for(;;){let a=n.s;if(H(a,null))if(t.MoveNext())n.s=ae(t.Current),n=n;else return t.Dispose(),!1;else{if(a.MoveNext())return n.c=a.Current,!0;n.Dispose(),n.s=null,n=n}}}return new gt(null,null,r,n=>{let a=n.s;H(a,null)||a.Dispose();let s=t;H(s,null)||s.Dispose()})}}}function Rw(e,t){return Ow(e,md(r=>r),t)}function Ow(e,t,r){return{GetEnumerator:()=>{let n=ae(t),a=ae(r);return new gt(null,null,s=>n.MoveNext()&&a.MoveNext()&&(s.c=e(n.Current,a.Current),!0),()=>{n.Dispose(),a.Dispose()})}}}function Hw(e,t){return!Uw(r=>!e(r),t)}function jw(e,t,r){return!Kw((n,a)=>!e(n,a),t,r)}function Ww(e,t,r){let n=ae(t);try{let a=ae(r);try{let s=0,l=!0;for(;l&&s===0;)n.MoveNext()?s=a.MoveNext()?e(n.Current,a.Current):1:a.MoveNext()?s=-1:l=!1;return s}finally{let s=a;typeof s=="object"&&Ne(s)&&a.Dispose()}}finally{let a=n;typeof a=="object"&&Ne(a)&&n.Dispose()}}function Uw(e,t){let r=ae(t);try{let n=!1;for(;!n&&r.MoveNext();)n=e(r.Current);return n}finally{let n=r;typeof n=="object"&&Ne(n)&&r.Dispose()}}function qw(e){let t=ae(e);try{t.MoveNext()||Yw();let r=t.Current;for(;t.MoveNext();){let n=t.Current;ft(n,r)===1&&(r=n)}return r}finally{let r=t;typeof r=="object"&&Ne(r)&&t.Dispose()}}function hi(e,t){return{GetEnumerator:()=>{let r=ae(t),n=new mt("New_3");return new gt(null,null,a=>{let s,l;if(r.MoveNext()){for(s=r.Current,l=n.SAdd(e(s));!l&&r.MoveNext();)s=r.Current,l=n.SAdd(e(s));return l&&(a.c=s,!0)}else return!1},()=>{r.Dispose()})}}}function Kw(e,t,r){let n=ae(t);try{let a=ae(r);try{let s=!1;for(;!s&&n.MoveNext()&&a.MoveNext();)s=e(n.Current,a.Current);return s}finally{let s=a;typeof s=="object"&&Ne(s)&&a.Dispose()}}finally{let a=n;typeof a=="object"&&Ne(a)&&n.Dispose()}}function Zw(e){return Or(()=>Ke(e).slice().reverse())}function Yw(){return Pe("The input sequence was empty.")}function Jw(e){return hi(t=>t,e)}function Xw(e,t){return{GetEnumerator:()=>new gt(t,null,r=>{let n=e(r.s);if(n==null)return!1;{let a=n.$0[0],s=n.$0[1];return r.c=a,r.s=s,!0}},void 0)}}function Ta(e,t){let r=[];for(let n=0,a=t.length-1;n<=a;n++){let s=e(t[n]);s==null||r.push(s.$0)}return r}function bi(e,t){let r=null,n=0;for(;n<t.length&&r==null;)e(t[n])&&(r=m(t[n])),n=n+1;return r}function st(e,t){let r=new Array(t.length);for(let n=0,a=t.length-1;n<=a;n++)r[n]=e(t[n]);return r}function Hr(e,t){let r=!1,n=0,a=ge(t);for(;!r&&n<a;)e(t[n])?r=!0:n=n+1;return r}function Qw(e,t){let r=vd(e,t);return r==null?Pe("KeyNotFoundException"):r.$0}function wi(e){let t=[],r=e;for(;r.$!=0;)t.push(Od(r)),r=Hd(r);return t}function fi(e,t){let r=null,n=0;for(;n<t.length&&r==null;)e(t[n])&&(r=m(n)),n=n+1;return r}function vd(e,t){let r=null,n=0;for(;n<t.length&&r==null;){let a=e(t[n]);a!=null&&a.$==1&&(r=a),n=n+1}return r}function Ke(e){if(e instanceof Array)return e.slice();if(e instanceof ye)return wi(e);{let t=[],r=ae(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&Ne(n)&&r.Dispose()}}}function ef(e,t,r){Cd(t,r);for(let n=0,a=t.length-1;n<=a;n++)e(t[n],r[n])}function yd(e,t){let r=new Array(t.length);for(let n=0,a=t.length-1;n<=a;n++)r[n]=e(n,t[n]);return r}function xd(e,t){return st(r=>r[0],yd((r,n)=>[n,[e(n),r]],t).sort((r,n)=>ft(r[1],n[1])))}function tf(e){return Array.prototype.concat.apply([],Ke(e))}function Ln(e,t){let r=[];for(let n=0,a=t.length-1;n<=a;n++)e(t[n])&&r.push(t[n]);return r}function Ze(e,t){for(let r=0,n=t.length-1;r<=n;r++)e(t[r])}function rf(e,t,r){Cd(t,r);let n=new Array(r.length);for(let a=0,s=r.length-1;a<=s;a++)n[a]=e(t[a],r[a]);return n}function mi(e,t){let r=!0,n=0,a=ge(t);for(;r&&n<a;)e(t[n])?n=n+1:r=!1;return r}function kd(e,t){e<0&&Pe("Negative size given.");let r=new Array(e);for(let n=0,a=e-1;n<=a;n++)r[n]=t(n);return r}function Cd(e,t){e.length!==t.length&&Pe("The arrays have different lengths.")}function nf(e,t){let r=fi(e,t);return r==null?Pe("KeyNotFoundException"):r.$0}function vi(e,t,r){let n=r,a=t.length;for(let s=1,l=a;s<=l;s++)n=e(t[a-s],n);return n}function af(e,t){return Ke(hi(e,t))}function of(e,t){let r=new Array(e);for(let n=0,a=e-1;n<=a;n++)r[n]=t;return r}function Sd(e){qy(t=>t[0],Uy((t,r)=>[r,t],e).sort(ft))}var _e=class e extends qe{name;fillWith;WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}ApplyVarHole(t){an(yc(),this.fillWith,t)}ForTextView(){return m(this.fillWith.View)}AddAttribute(t,r){t(r)(cd(this.fillWith))}get AsChoiceView(){return kr(V(String,this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}},pa=class e extends qe{name;fillWith;WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}ApplyVarHole(t){an(xc(),this.fillWith,t)}ForTextView(){return m(V(String,this.fillWith.View))}AddAttribute(t,r){t(r)(cw(this.fillWith))}get AsChoiceView(){return kr(V(String,this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}},xn=class e extends qe{name;fillWith;WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}ApplyVarHole(t){an(kc(),this.fillWith,t)}ForTextView(){return m(V(String,this.fillWith.View))}AddAttribute(t,r){t(r)(uw(this.fillWith))}get AsChoiceView(){return kr(V(String,this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}},ga=class e extends qe{name;fillWith;WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}ApplyVarHole(t){an(Cc(),this.fillWith,t)}ForTextView(){return m(V(t=>new Date(t).toLocaleString(),this.fillWith.View))}AddAttribute(t,r){t(r)(pw(this.fillWith))}get AsChoiceView(){return kr(V(t=>new Date(t).toLocaleString(),this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}},ha=class e extends qe{name;fillWith;WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}ApplyVarHole(t){an(Sc(),this.fillWith,t)}ForTextView(){return m(V(String,this.fillWith.View))}AddAttribute(t,r){t(r)(gw(this.fillWith))}get AsChoiceView(){return kr(V(String,this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}},kn=class e extends qe{name;fillWith;WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}ApplyVarHole(t){}get Value(){return this.fillWith}constructor(t,r){super(),this.name=t,this.fillWith=r}},ba=class e extends qe{name;fillWith;WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}ApplyVarHole(t){an(Ac(),this.fillWith,t)}ForTextView(){return m(V(t=>Ut(",",t),this.fillWith.View))}AddAttribute(t,r){t(r)(hw(this.fillWith))}get AsChoiceView(){return kr(V(String,this.fillWith.View))}constructor(t,r){super(),this.name=t,this.fillWith=r}};function D(e){let t=globalThis.document.createElement("div");if(sf().test(e)){let l=function(c,p){for(;;){if(p===0)return c;{let h=p;c=c.lastChild,p=h-1}}},r=uf().exec(e),n=H(r,null)?"":U(r,1).toLowerCase(),a=lf()[n],s=a||df();return t.innerHTML=s[1]+e.replace(cf(),"<$1></$2>")+s[2],(c=>{let p=c;return h=>l(p,h)})(t)(s[0])}else return t.appendChild(globalThis.document.createTextNode(e)),t}function Ad(e,t){let r=_d(e);r==""?Po(e,t):Td(t).test(r)||Po(e,r+" "+t)}function $d(e,t){let r=Td(t),n=_d(e).replace(r,(a,s,l)=>s==""||l==""?"":" ");Po(e,n)}function sf(){return nn.rhtml}function lf(){return nn.wrapMap}function df(){return nn.defaultWrap}function cf(){return nn.rxhtmlTag}function uf(){return nn.rtagName}function _d(e){return e instanceof SVGElement?e.getAttribute("class"):e.className}function Po(e,t){e instanceof SVGElement?e.setAttribute("class",t):e.className=t}function Td(e){return new RegExp("(\\s+|^)"+e+"(?:\\s+"+e+")*(\\s+|$)","g")}function pf(e,t,r){let n=e.querySelectorAll(t);for(let a=0,s=n.length-1;a<=s;a++)r(n[a])}function ol(e){let t=[];for(let r=0,n=e.childNodes.length-1;r<=n;r++)t.push(e.childNodes[r]);return t}function gf(e,t){let r=globalThis.document.querySelectorAll(e);for(let n=0,a=r.length-1;n<=a;n++)t(r[n])}function hf(e,t,r){let n;if(r.parentNode===e){let a=r.nextSibling,s=H(a,null)?null:a;n=t===s}else n=!1;n||e.insertBefore(r,t)}function bf(e,t){t.parentNode===e&&e.removeChild(t)}function xe(e,t,r,n){return Bd(""),we(e,t,r),wf(e,t,n)}function we(e,t,r){In(e).ContainsKey(t==null?"":t.$0)||pr(e,t,r(),null)}function Ed(){return Jt.GlobalHoles}function Vd(e){if(il()==null){Bd(""),pr("",null,globalThis.document.body,null);let t=Nd(globalThis.document.body,e),r=globalThis.document.body;(a=>{N.RunInPlace(!0,r,a)})(t);let n=t;return ff(m(n)),n}else return il().$0}function Bd(e){mf()||(vf(!0),yf(globalThis.document.body,"")),Cn().set_Item(e,In(""))}function wf(e,t,r){let n,a=(n=null,[In(e).TryGetValue(t==null?"":t.$0,{get:()=>n,set:s=>{n=s}}),n]);return a[0]?Nd(a[1].cloneNode(!0),r):(console.warn("Local template doesn't exist",t),N.Empty)}function In(e){let t,r=(t=null,[Cn().TryGetValue(e,{get:()=>t,set:n=>{t=n}}),t]);if(r[0])return r[1];{let n=new Ue("New_5");return Cn().set_Item(e,n),n}}function pr(e,t,r,n){let a=new mt("New_3");function s(x,f){for(;;)switch(x){case 0:if(f!==null){let b=f.nextSibling;H(f.nodeType,Node.TEXT_NODE)?ry(f):H(f.nodeType,Node.ELEMENT_NODE)&&c(f),f=b}else return null;break;case 1:let T=Lt(f.nodeName,m(3),null).toLowerCase(),k=T.indexOf("."),v=k===-1?[e,T]:[Lt(T,null,m(k-1)),Lt(T,m(k+1),null)],S=v[1],y=v[0];if(y!=""&&!Cn().ContainsKey(y))return wl(S);{y==""&&n!=null&&n.$0(S);let b=Cn().Item(y);if(b.ContainsKey(S)){let $=b.Item(S).cloneNode(!0),_=new mt("New_3"),E=new Ue("New_5"),L=f.attributes;for(let K=0,q=L.length-1;K<=q;K++){let I=L.item(K).name.toLowerCase(),re=L.item(K).nodeValue,fe=re==""?I:re.toLowerCase();E.set_Item(I,fe),_.SAdd(I)||console.warn("Hole mapped twice",I)}for(let K=0,q=f.childNodes.length-1;K<=q;K++){let I=f.childNodes[K];H(I.nodeType,Node.ELEMENT_NODE)&&(_.SAdd(I.nodeName.toLowerCase())||console.warn("Hole filled twice",S))}let G=f.childNodes.length===1&&H(f.firstChild.nodeType,Node.TEXT_NODE);if(G){let K=ny($,f.firstChild.textContent,S),q=(re=>fe=>re.SAdd(fe))(_);(re=>fe=>{fe!=null&&re(fe.$0)})(re=>{q(re)})(K)}if(ay($,_),!G)for(let K=0,q=f.childNodes.length-1;K<=q;K++){let I=f.childNodes[K];H(I.nodeType,Node.ELEMENT_NODE)&&(I.hasAttributes()?oy($,I):l($,I))}iy($,E),fl($,f.parentNode,f),f.parentNode.removeChild(f);return}else return wl(S)}break}}function l(x,f){let T=f.nodeName.toLowerCase(),k=(S,y)=>{if(T=="title"&&f.hasChildNodes()){let b=D(f.textContent);for(f.removeChild(f.firstChild);b.hasChildNodes();)f.appendChild(b.firstChild)}return c(f),fl(f,S,y)};We(x,"[ws-attr-holes]",S=>{let y=pt(S.getAttribute("ws-attr-holes"),[" "],1);for(let b=0,C=y.length-1;b<=C;b++){let $=U(y,b),_=new RegExp("\\${"+T+"}","ig"),E=S.getAttribute($).replace(_,f.textContent);S.setAttribute($,E)}});let v=x.querySelector("[ws-hole="+T+"]");if(H(v,null)){let S=x.querySelector("[ws-replace="+T+"]");if(H(S,null)){let y=x.querySelector("slot[name="+T+"]");return x.tagName.toLowerCase()=="template"?(k(y.parentNode,y),void y.parentNode.removeChild(y)):null}else{k(S.parentNode,S),S.parentNode.removeChild(S);return}}else{for(;v.hasChildNodes();)v.removeChild(v.lastChild);return v.removeAttribute("ws-hole"),(S=>{let y=S;return b=>k(y,b)})(v)(null)}}function c(x){x.hasAttribute("ws-preserve")||(Rr(x.nodeName.toLowerCase(),"ws-")?h(x):(hc(x),p(x.firstChild)))}function p(x){return s(0,x)}function h(x){return s(1,x)}function w(x){for(;;){let f=x.querySelector("[ws-template]");if(H(f,null)){let T=x.querySelector("[ws-children-template]");if(H(T,null)){let k=x.querySelectorAll("template[id]");for(let S=1,y=k.length-1;S<=y;S++){let b=k[S];a.Contains(b)||(pr(e,m(b.getAttribute("id")),b,null),a.SAdd(b))}let v=x.querySelectorAll("template[name]");for(let S=1,y=v.length-1;S<=y;S++){let b=v[S];a.Contains(b)||(pr(e,m(b.getAttribute("name")),b,null),a.SAdd(b))}return null}else{let k=T.getAttribute("ws-children-template");T.removeAttribute("ws-children-template"),pr(e,m(k),T,null),x=x}}else{let T=f.getAttribute("ws-template");xf(e,m(T),f)(null),x=x}}}let u=(t==null?"":t.$0).toLowerCase();In(e).set_Item(u,r),r.hasChildNodes()&&(w(r),p(r.firstChild))}function il(){return Jt.RenderedFullDocTemplate}function Nd(e,t){let r,n=kf(e,Pn(t,Ed().Values)),a=n[1],s=n[0],l=s.Els;return!H(l,null)&&l.length===1&&U(l,0)instanceof Node&&H(U(l,0).nodeType,Node.ELEMENT_NODE)&&(r=U(l,0),!0)?Tn.TreeNode(s,a):N.Mk(Zd(s),a)}function ff(e){Jt.RenderedFullDocTemplate=e}function mf(){return Jt.LocalTemplatesLoaded}function vf(e){Jt.LocalTemplatesLoaded=e}function yf(e,t){let r=In(t),n=new Ue("New_5"),a=e.querySelectorAll("[ws-template]");for(let w=0,u=a.length-1;w<=u;w++){let x=a[w],f=x.getAttribute("ws-template").toLowerCase();x.removeAttribute("ws-template"),n.set_Item(f,Pd(x))}let s=e.querySelectorAll("[ws-children-template]");for(let w=0,u=s.length-1;w<=u;w++){let x=s[w],f=x.getAttribute("ws-children-template").toLowerCase();x.removeAttribute("ws-children-template"),n.set_Item(f,Cf(x))}let l=e.querySelectorAll("template[id]");for(let w=0,u=l.length-1;w<=u;w++){let x=l[w];n.set_Item(x.getAttribute("id").toLowerCase(),sl(x))}let c=e.querySelectorAll("template[name]");for(let w=0,u=c.length-1;w<=u;w++){let x=c[w];n.set_Item(x.getAttribute("name").toLowerCase(),sl(x))}let p=new mt("New_3");function h(w){if(!r.ContainsKey(w)){let u,x=(u=null,[n.TryGetValue(w,{get:()=>u,set:f=>{u=f}}),u]);x[0]?(p.SAdd(w),n.RemoveKey(w),pr(t,m(w),x[1],m(h))):console.warn(p.Contains(w)?"Encountered loop when instantiating "+w:"Local template does not exist: "+w)}}for(;n.count>0;)h(Iw(n.Keys))}function Cn(){return Jt.LoadedTemplates}function We(e,t,r){pf(e,t,n=>{n.closest("[ws-preserve]")==null&&r(n)})}function xf(e,t,r){let n=Pd(r);return a=>{pr(e,t,n,a)}}function kf(e,t){let r,n=[],a=[],s=[],l=[],c=new Ue("New_5"),p=ae(t);try{for(;p.MoveNext();){let b=p.Current;c.set_Item(b.Name,b)}}finally{let b=p;typeof b=="object"&&Ne(b)&&p.Dispose()}let h=ol(e),w=(b,C)=>{let $=Ci(b,C);a.push(Fo($)),s.push([b,$]);let _=nr($.OnAfterRender);if(_==null)return null;{let E=_.$0;l.push(()=>{E(b)});return}},u=b=>{let C,$=(C=null,[c.TryGetValue(b,{get:()=>C,set:_=>{C=_}}),C]);if($[0]){let _=$[1];if(_ instanceof R)return m(_.Value);if(_ instanceof jr)return m(N.TextNode(_.Value));{let E=_.ForTextView();return E==null?null:m(N.TextView(E.$0))}}else return null};We(e,"[ws-hole]",b=>{let C=b.getAttribute("ws-hole");for(b.removeAttribute("ws-hole");b.hasChildNodes();)b.removeChild(b.lastChild);let $=u(C);if($!=null&&$.$==1){let _=$.$0;Lo(b,_.docNode),n.push(hr.New(vo(b),_.docNode,null,b,zr(),null)),a.push(_.updates)}}),We(e,"[ws-replace]",b=>{let C=u(b.getAttribute("ws-replace"));if(C!=null&&C.$==1){let $=C.$0,_=b.parentNode,E=globalThis.document.createTextNode("");_.replaceChild(E,b);let L=rm(E,$.docNode);h=ol(e);let G=fi(K=>b===K,h);G==null||fn(h,G.$0,$.docNode),n.push(hr.New(vo(_),$.docNode,m([L,E]),_,zr(),null)),a.push($.updates)}});let x=!1;We(e,"slot",b=>{let C=b.getAttribute("name"),$=C==""||C==null?"default":C.toLowerCase();if(!(x&&$=="default"||!H(e.parentElement,null))){for(;b.hasChildNodes();)b.removeChild(b.lastChild);$=="default"&&(x=!0);let _=u($);if(_!=null&&_.$==1){let E=_.$0;Lo(b,E.docNode),n.push(hr.New(vo(b),E.docNode,null,b,zr(),null)),a.push(E.updates)}}}),We(e,"[ws-attr]",b=>{let C,$=b.getAttribute("ws-attr");b.removeAttribute("ws-attr");let _=(C=null,[c.TryGetValue($,{get:()=>C,set:E=>{C=E}}),C]);if(_[0]){let E=_[1];E instanceof O?w(b,E.Value):console.warn("Attribute hole filled with non-attribute data",$)}}),We(e,"[ws-on]",b=>{w(b,J.Concat(Ta(C=>{let $,_=pt(C,[":"],1),E=($=null,[c.TryGetValue(U(_,1),{get:()=>$,set:L=>{$=L}}),$]);if(E[0]){let L=E[1];return L instanceof Ko?m(dd(U(_,0),L.Value)):L instanceof ca?m(J.HandlerImpl(U(_,0),L.Value)):(console.warn("Event hole on"+U(_,0)+" filled with non-event data",U(_,1)),null)}else return null},pt(b.getAttribute("ws-on"),[" "],1)))),b.removeAttribute("ws-on")}),We(e,"[ws-onafterrender]",b=>{let C,$=b.getAttribute("ws-onafterrender"),_=(C=null,[c.TryGetValue($,{get:()=>C,set:E=>{C=E}}),C]);if(_[0]){let E=_[1];E instanceof Zo||E instanceof It?(b.removeAttribute("ws-onafterrender"),w(b,rl(E.Value))):console.warn("onafterrender hole filled with non-onafterrender data",$)}}),We(e,"[ws-var]",b=>{let C,$=b.getAttribute("ws-var");b.removeAttribute("ws-var");let _=(C=null,[c.TryGetValue($,{get:()=>C,set:E=>{C=E}}),C]);_[0]&&_[1].AddAttribute(E=>L=>w(E,L),b)});let f=()=>{Sf("[ws-dom]",b=>{let C,$,_,E=(C=null,[c.TryGetValue(b.getAttribute("ws-dom").toLowerCase(),{get:()=>C,set:L=>{C=L}}),C]);if(E[0]){let L=E[1];if(L instanceof kn){let G=L.Value;b.removeAttribute("ws-dom"),$=b;let K=new MutationObserver((q,I)=>{Ze(re=>{re.removedNodes.forEach(Ps(fe=>fe[0]===$&&re.addedNodes.length!==1?(G.SetFinal(null),I.disconnect()):null),null)},q)});b.parentElement!==null&&K.observe(b.parentElement,(_={},_.childList=!0,_)),G.Set(m(b)),vn(q=>{if(q!=null&&q.$==1){let I=q.$0;if($!==I){let re=[I];$.replaceWith.apply($,re),$=I}}else $.remove(),K.disconnect()},G.View)}}})};We(e,"[ws-attr-holes]",b=>{let C=new RegExp(Sn(),"g"),$=pt(b.getAttribute("ws-attr-holes"),[" "],1);b.removeAttribute("ws-attr-holes");for(let _=0,E=$.length-1;_<=E;_++)(()=>{let L,G=U($,_),K=b.getAttribute(G),q=null,I=0,re=[];for(;q=C.exec(K),q!==null;){let Q=Lt(K,m(I),m(C.lastIndex-U(q,0).length-1));I=C.lastIndex,re.push([Q,U(q,1)])}let fe=Lt(K,m(I),null);C.lastIndex=0;let W=vi((Q,pe)=>(Ce=>{let Z=Ce[0],me=Ce[1];return oe=>{let ke,se=oe[0],Se=oe[1],Ee=(ke=null,[c.TryGetValue(me,{get:()=>ke,set:Oe=>{ke=Oe}}),ke]),De=Ee[0]?Ee[1].AsChoiceView:Ni("");return De.$==1?[Z,ye.Cons(se==""?De.$0:V(Oe=>Oe+se,De.$0),Se)]:[Z+De.$0+se,Se]}})(Q)(pe),re,[fe,ye.Empty]);if(W[1].$==1)if(W[1].$1.$==1)if(W[1].$1.$1.$==1)if(W[1].$1.$1.$1.$==0){let Q=W[0];L=kt(G,na((pe,Ce,Z)=>Q+pe+Ce+Z,W[1].$0,W[1].$1.$0,W[1].$1.$1.$0))}else{let Q=W[0];L=kt(G,V(pe=>Q+Ut("",pe),Vb(W[1])))}else{let Q=W[0];L=kt(G,Ct((pe,Ce)=>Q+pe+Ce,W[1].$0,W[1].$1.$0))}else if(W[0]=="")L=kt(G,W[1].$0);else{let Q=W[0];L=kt(G,V(pe=>Q+pe,W[1].$0))}else L=J.Create(G,W[0]);return w(b,L)})()});let T=h,k=l.length==0?m(()=>{f()}):m(b=>{f(),Ze(C=>{C(b)},l)}),v=!H(h,null)&&h.length===1&&U(h,0)instanceof Node&&U(h,0)instanceof Element&&(r=U(h,0),!0)?m(r):null,S={Els:T,Dirty:!0,Holes:n,Attrs:s,Render:k?k.$0:void 0,El:v?v.$0:void 0};return[Ns(S,["Render","El"]),zn(ct(),Fr,a)]}function Pd(e){e.removeAttribute("ws-template");let t=e.getAttribute("ws-replace");if(t!=null){e.removeAttribute("ws-replace");let n=e.parentNode;if(!H(n,null)){let a=globalThis.document.createElement(e.tagName);a.setAttribute("ws-replace",t),n.replaceChild(a,e)}}let r=globalThis.document.createElement("div");return r.appendChild(e),r}function Cf(e){let t=globalThis.document.createElement("div");for(;e.hasChildNodes();)t.appendChild(e.firstChild);return t}function sl(e){let t=globalThis.document.createElement("div"),r=e.content;for(let n=0,a=r.childNodes.length-1;n<=a;n++)t.appendChild(r.childNodes[n].cloneNode(!0));return t}function Sn(){return Jt.TextHoleRE}function Sf(e,t){gf(e,r=>{r.closest("[ws-preserve]")==null&&t(r)})}var Ld=ne(e=>class{static{Ld=e(this)}static ActiveTab;static{this.ActiveTab=(globalThis.document.location.hash==""&&(globalThis.document.location.hash="/charts"),dc(To,Ag()))}}),yi=ne(e=>class{static{yi=e(this)}static ContactSendButtonText;static ContactSendButtonAttr;static{this.ContactSendButtonAttr=Gr("disabled",Ct((r,n)=>!r||n,hb(),da().View)),this.ContactSendButtonText=V(r=>r?"Sending...":"Send",da().View)}});function Af(){return Id(wa()+1),"uid"+String(wa())}function Id(e){Ti.counter=e}function wa(){return Ti.counter}function zr(){return Id(wa()+1),wa()}var Ea=ne(e=>class{static{Ea=e(this)}static CanSendView;static IsSendingVar;static ContactFormVar;static intervalVar;static catalogVar;static IsLoadingVar;static{this.IsLoadingVar=B.Create_1(!0),this.catalogVar=B.Create_1(Rv(ye.Empty)),this.intervalVar=B.Create_1($i),this.ContactFormVar=B.Create_1(Rt("WebSharper support","","","","United States")),this.IsSendingVar=B.Create_1(!1),this.CanSendView=V(Ul,Tt().View)}});function $f(e){return F(()=>{let t=new FormData;return t.append("subject",e.subject),t.append("message",e.message),t.append("email",e.email),t.append("name",e.name),t.append("country",e.country),Vt(F(()=>{let r;return M(ci(globalThis.fetch(_f(),(r={},r.method="POST",r.body=t,r))),n=>j(n.ok))}),()=>j(!1))})}function _f(){return wc.ContactEndpoint}function Tf(){return F(()=>{let e=Ef();return e==null?M(Vf(),t=>{let r;return t!=null&&t.$==1&&ge(t.$0)>0&&(r=t.$0,!0)?(Bf(r),j(m(r))):j(null)}):j(m(e.$0))})}function Ef(){try{let e=globalThis.sessionStorage.getItem("planprices");return e==null||be(e)?null:m(JSON.parse(e))}catch{return null}}function Vf(){return F(()=>Vt(F(()=>M(Av(),e=>j(m(e)))),()=>j(null)))}function Bf(e){try{let t=JSON.stringify(e);globalThis.sessionStorage.setItem("planprices",t)}catch{}}var He=ne(e=>class{static{He=e(this)}static ContinueDisabled;static ContinueText;static VatinVar;static CompanyNameVar;static IsCompanyVar;static CountryVar;static PostalVar;static CityVar;static StreetVar;static EmailVar;static SeatsTextVar;static SelectedIntervalVar;static SelectedPlanVar;static CheckoutFormVar;static plansVar;static BackLinkLabel;static backLinkHref;static MyAccountUrl;static{this.MyAccountUrl="/account",this.backLinkHref=B.Create_1("/support#plans"),this.BackLinkLabel=B.Create_1("Plans"),this.plansVar=B.Create_1([]),this.CheckoutFormVar=B.Create_1(at("pro",$i,"1","","","","","HU",!1,"","")),this.SelectedPlanVar=B.Lens(Je(),r=>r.plan,(r,n)=>at(n,r.interval,r.seatsText,r.email,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.SelectedIntervalVar=B.Lens(Je(),r=>r.interval,(r,n)=>at(r.plan,n,r.seatsText,r.email,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.SeatsTextVar=B.Lens(Je(),r=>r.seatsText,(r,n)=>at(r.plan,r.interval,n,r.email,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.EmailVar=B.Lens(Je(),r=>r.email,(r,n)=>at(r.plan,r.interval,r.seatsText,n,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.StreetVar=B.Lens(Je(),r=>r.street,(r,n)=>at(r.plan,r.interval,r.seatsText,r.email,n,r.city,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.CityVar=B.Lens(Je(),r=>r.city,(r,n)=>at(r.plan,r.interval,r.seatsText,r.email,r.street,n,r.postal,r.country,r.isCompany,r.companyName,r.vatin)),this.PostalVar=B.Lens(Je(),r=>r.postal,(r,n)=>at(r.plan,r.interval,r.seatsText,r.email,r.street,r.city,n,r.country,r.isCompany,r.companyName,r.vatin)),this.CountryVar=B.Lens(Je(),r=>r.country,(r,n)=>at(r.plan,r.interval,r.seatsText,r.email,r.street,r.city,r.postal,n,r.isCompany,r.companyName,r.vatin)),this.IsCompanyVar=B.Lens(Je(),r=>r.isCompany,(r,n)=>at(r.plan,r.interval,r.seatsText,r.email,r.street,r.city,r.postal,r.country,n,r.companyName,r.vatin)),this.CompanyNameVar=B.Lens(Je(),r=>r.companyName,(r,n)=>at(r.plan,r.interval,r.seatsText,r.email,r.street,r.city,r.postal,r.country,r.isCompany,n,r.vatin)),this.VatinVar=B.Lens(Je(),r=>r.vatin,(r,n)=>at(r.plan,r.interval,r.seatsText,r.email,r.street,r.city,r.postal,r.country,r.isCompany,r.companyName,n)),this.ContinueText=B.Create_1("Continue to payment"),this.ContinueDisabled=B.Create_1(!1)}}),Fd=ne(e=>class{static{Fd=e(this)}static BackLinkAttr;static PaymentSectionAttr;static AuthSectionAttr;static ContinueTextView;static{this.ContinueTextView=Aa().View,this.AuthSectionAttr=te("hidden",yn()),this.PaymentSectionAttr=kt("class",V(r=>r?"":"hidden",yn())),this.BackLinkAttr=J.Concat([kt("href",ed().View),dd("click",()=>r=>be(globalThis.document.referrer)&&globalThis.history.length>1?(r.preventDefault(),globalThis.history.back()):null)])}});function Va(e,t,r){let n=t.s,a=r.s;if(n!=null&&n.$==0)return a!=null&&a.$==0?{s:Yt(e(n.$0,a.$0))}:Nf(e,n.$0,r);if(a!=null&&a.$==0)return Pf(e,a.$0,t);{let s={s:yr([],[])},l=()=>{let c=s.s;if(!(c!=null&&c.$==0||c!=null&&c.$==2)){let p=gr(t),h=gr(r);p!=null&&p.$==1&&h!=null&&h.$==1&&(p.$0[1]&&h.$0[1]?Jr(s,e(p.$0[0],h.$0[0])):Xr(s,e(p.$0[0],h.$0[0])))}};return wt(t,l,s),wt(r,l,s),s}}function Yr(e,t){let r=t.s;if(r!=null&&r.$==0)return{s:Yt(e(r.$0))};{let n={s:yr([],[])};return wt(t,a=>{zd(n,t,e(a))},n),n}}function Md(e,t){let r=e.s;r==null?t():r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,r.$1.push(t)):r.$0}function Nf(e,t,r){return Yr(n=>e(t,n),r)}function Pf(e,t,r){return Yr(n=>e(n,t),r)}function gr(e){let t=e.s;return t!=null&&t.$==0?m([t.$0,!0]):t!=null&&t.$==2?m([t.$0,!1]):null}function Jr(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$0;e.s=Yt(t);for(let a=0,s=ge(n)-1;a<=s;a++)U(n,a)(t)}}function Xr(e,t){let r=e.s;if(r!=null&&r.$==3){let n=r.$1,a=r.$0;e.s=La(t,n);for(let s=0,l=ge(a)-1;s<=l;s++)U(a,s)(t)}}function wt(e,t,r){let n=e.s;if(n==null)_n(r);else if(n!=null&&n.$==2){let a=n.$0;fa(n.$1,r),t(a)}else if(n!=null&&n.$==3){let a=n.$1;n.$0.push(t),fa(a,r)}else t(n.$0)}function zd(e,t,r){let n=t.s;n!=null&&n.$==0?Jr(e,r):Xr(e,r)}function fa(e,t){if(e.push(t),e.length%20===0){let r=e.slice(0);Yy(e);for(let n=0,a=ge(r)-1;n<=a;n++){let s=U(r,n);typeof s=="object"?(l=>{l.s&&e.push(l)})(s):(l=>{e.push(l)})(s)}}}function Lf(e,t,r,n){let a=t.s,s=r.s,l=n.s;if(a!=null&&a.$==0)return s!=null&&s.$==0?l!=null&&l.$==0?{s:Yt(e(a.$0,s.$0,l.$0))}:Ff(e,a.$0,s.$0,n):l!=null&&l.$==0?Mf(e,a.$0,l.$0,r):zf(e,a.$0,r,n);if(s!=null&&s.$==0)return l!=null&&l.$==0?Df(e,s.$0,l.$0,t):Gf(e,s.$0,t,n);if(l!=null&&l.$==0)return Rf(e,l.$0,t,r);{let c={s:yr([],[])},p=()=>{let h=c.s;if(!(h!=null&&h.$==0||h!=null&&h.$==2)){let w=gr(t),u=gr(r),x=gr(n);w!=null&&w.$==1&&u!=null&&u.$==1&&x!=null&&x.$==1&&(w.$0[1]&&u.$0[1]&&x.$0[1]?Jr(c,e(w.$0[0],u.$0[0],x.$0[0])):Xr(c,e(w.$0[0],u.$0[0],x.$0[0])))}};return wt(t,p,c),wt(r,p,c),wt(n,p,c),c}}function If(e,t){let r=e.s,n=t.s;if(r!=null&&r.$==0)return n!=null&&n.$==0?{s:Yt(null)}:t;if(n!=null&&n.$==0)return e;{let a={s:yr([],[])},s=()=>{let l=a.s;if(!(l!=null&&l.$==0||l!=null&&l.$==2)){let c=gr(e),p=gr(t);c!=null&&c.$==1&&p!=null&&p.$==1&&(c.$0[1]&&p.$0[1]?Jr(a,null):Xr(a,null))}};return wt(e,s,a),wt(t,s,a),a}}function Ff(e,t,r,n){return Yr(a=>e(t,r,a),n)}function Mf(e,t,r,n){return Yr(a=>e(t,a,r),n)}function zf(e,t,r,n){return Va((a,s)=>e(t,a,s),r,n)}function Df(e,t,r,n){return Yr(a=>e(a,t,r),n)}function Gf(e,t,r,n){return Va((a,s)=>e(a,t,s),r,n)}function Rf(e,t,r,n){return Va((a,s)=>e(a,s,t),r,n)}function Of(e){let t={s:yr([],[])};return wt(e,r=>{let n=r();wt(n,a=>{let s,l=n.s;if(l!=null&&l.$==0){let c=e.s;s=c!=null&&c.$==0}else s=!1;s?Jr(t,a):Xr(t,a)},t)},t),t}function Hf(e,t,r){let n=e.s;if(n==null)r();else if(n!=null&&n.$==2){let a=n.$0;n.$1.push(r),t(a)}else if(n!=null&&n.$==3){let a=n.$1;n.$0.push(t),a.push(r)}else t(n.$0)}function jf(e){let t=Ke(e);if(t.length==0)return{s:Yt([])};{let r={s:yr([],[])},n=[ge(t)-1],a=()=>{if(n[0]===0){let s=st(l=>{let c=l.s;return c!=null&&c.$==0||c!=null&&c.$==2?c.$0:Pe("value not found by View.Sequence")},t);mi(l=>{let c=l.s;return c!=null&&c.$==0},t)?Jr(r,s):Xr(r,s)}else n[0]=n[0]-1};return Ze(s=>{wt(s,a,r)},t),r}}function Wf(e){let t=e.s;if(t==null)return e;if(t!=null&&t.$==2){let r={s:La(t.$0,[])};return Uf(e,r),r}else if(t!=null&&t.$==3){let r={s:yr([],[])};return wt(e,n=>{zd(r,e,n)},r),r}else return e}function Uf(e,t){let r=e.s;r==null?_n(t):r!=null&&r.$==2||r!=null&&r.$==3?(r.$0,fa(r.$1,t)):r.$0}var Fn=ne(e=>class{static{Fn=e(this)}static IsFetchingView;static IsAuthedView;static UserView;static isFetchingVar;static userVar;static API;static{this.API="https://api.websharper.com",jv("https://api.websharper.com"),this.userVar=B.Create_1(null),this.isFetchingVar=B.Create_1(!1),this.UserView=Mr().View,this.IsAuthedView=V(r=>r!=null,Mr().View),this.IsFetchingView=Bo().View}}),Dd=ne(e=>class{static{Dd=e(this)}static IsLoading;static{this.IsLoading=B.Create_1(!0)}}),xi=ne(e=>class{static{xi=e(this)}static FormErrorDoc;static FormError;static{this.FormError=B.Create_1(null),this.FormErrorDoc=N.BindView(r=>{if(r==null)return N.Empty;{let n=r.$0;return N.Element("div",[J.Create("class","mt-2 text-sm text-red-500 dark:text-red-400")],[N.TextNode(n)])}},No().View)}}),Xe=ne(e=>class{static{Xe=e(this)}static CountryOptionsDoc;static Total;static TotalRaw;static Taxes;static TaxesRaw;static Subtotal;static SubtotalRaw;static VatPercentage;static PriceHint;static PlanInterval;static PlanPrice;static PlanName;static IsPerSeat;static CurrentPlan;static Seats;static{this.Seats=V(rd,Sa().View),this.CurrentPlan=na((r,n,a)=>{let s=n.toLowerCase(),l=ql(a);return bi(c=>c.code.toLowerCase()==s&&String(c.interval).toLowerCase()==l,r)},td().View,Vo().View,Qn().View),this.IsPerSeat=V(r=>r==null||r.$0.isPerSeat,gn()),this.PlanName=V(r=>{let n;return r!=null&&r.$==1&&!be(r.$0.name)&&(n=r.$0,!0)?n.name:Vo().Get()=="freelancer"?"Freelancer":"WebSharper Professional"},gn()),this.PlanPrice=V(r=>{let n=Qn().Get().$==1?2500:250,a=r==null?null:m(r.$0.unitAmountCents/100),s=a==null?n:a.$0;return lr(s)},gn()),this.PlanInterval=V(r=>r.$==1?"year":"month",Qn().View),this.PriceHint=Ct((r,n)=>{let a,s=r==null?null:m(r.$0.unitAmountCents/100),l=s==null?n.$==1?2500:250:s.$0,c=n.$==1?"year":"month";return r!=null&&r.$==1&&r.$0.isPerSeat&&(a=r.$0,!0)?(p=>h=>w=>p("Price is "+cr(h)+" per seat per "+cr(w)+"."))(p=>p)(lr(l))(c):(p=>h=>w=>p("Price is "+cr(h)+" per "+cr(w)+"."))(p=>p)(lr(l))(c)},gn(),Qn().View),this.VatPercentage=na(Zv,Zl().View,Wt().View,li().View),this.SubtotalRaw=na((r,n,a)=>{let s=n?Nn(a):1,l=r==null?null:m(r.$0.unitAmountCents),c=l==null?25e4:l.$0;return s*c/100},gn(),Xb(),Jb()),this.Subtotal=V(lr,mo()),this.TaxesRaw=Ct((r,n)=>Math.round(r*n/100),mo(),Qb()),this.Taxes=V(lr,tl()),this.TotalRaw=Ct((r,n)=>r+n,mo(),tl()),this.Total=V(lr,ew()),this.CountryOptionsDoc=Gd(r=>N.Element("option",[J.Create("value",r[0])],[N.TextNode(r[1])]),uc())}});function qf(e){return F(()=>Vt(F(()=>M(kv(e),t=>t.$==1?($o(t.$0),j(null)):j(m(t.$0)))),()=>($o("Something went wrong. Please contact support or try again later."),j(null))))}function St(e){let t=ye.Empty;for(let r=ge(e)-1,n=0;r>=n;r--)t=ye.Cons(U(e,r),t);return t}function Kf(e,t){let r,n,a,s;if(t.$==0)return t;for(r=ye.Empty,n=r,a=t,s=!0;s;){if(e(a.$0)){if(r.$==0)r=Fe(ye,{$:1}),n=r;else{let c=Fe(ye,{$:1});n=(n.$1=c,c)}let l=a.$0;n.$=1,n.$0=l}a=a.$1,a.$==0&&(s=!1)}return r.$!=0&&(n.$1=ye.Empty),r}function Gd(e,t){let r,n,a;if(t.$==0)return t;{let s=Fe(ye,{$:1});for(r=s,n=t,a=!0;a;)if(r.$0=e(n.$0),n=n.$1,n.$==0)a=!1;else{let l=Fe(ye,{$:1});r=(r.$1=l,l)}return r.$1=ye.Empty,s}}function Zf(e){let t=ye.Empty,r=e;for(;r.$==1;)t=ye.Cons(r.$0,t),r=r.$1;return t}function Rd(e){if(e instanceof ye)return e;if(e instanceof Array)return St(e);{let t=ae(e);try{let r,n=t.MoveNext();if(n){let a=Fe(ye,{$:1});for(r=a;n;)if(r.$0=t.Current,t.MoveNext()){let s=Fe(ye,{$:1});r=(r.$1=s,s)}else n=!1;return r.$1=ye.Empty,a}else return ye.Empty}finally{let r=t;typeof r=="object"&&Ne(r)&&t.Dispose()}}}function Od(e){return e.$==1?e.$0:jd()}function Hd(e){return e.$==1?e.$1:jd()}function jd(){return Pe("The input list was empty.")}function Wd(e,t){let r=t;for(;r.$==1;)e(Od(r)),r=Hd(r)}function Yf(){return{Text:globalThis.document.createTextNode(""),Dirty:!1,Value:""}}function Jf(e,t){e.Value=t,e.Dirty=!0}function Xf(){return{Current:null,Dirty:!1}}function Qf(e,t){e.Current=t,e.Dirty=!0}function em(e,t){return Tc(Ec(),Ud(e,Ba(),t))}function ll(e,t,r){return jo()?F(()=>{let n=Vc(r),a=om(t,n),s=am(t,n);return M(ml(wy(a,nm(t,n))),()=>M(cl(e,t),()=>M(ml(s),()=>(t.PreviousNodes=n,j(null)))))}):cl(e,t)}function dl(e,t,r){let n=Vc(r);An(e,t.Top),t.PreviousNodes=n}function ki(e,t){$n(e.parentNode,t,e)}function tm(e,t,r){return Tc(Ec(),im(e,t,Ba(),r))}function Lo(e,t){$n(e,t,null)}function rm(e,t){let r=e.parentNode,n=globalThis.document.createTextNode("");return r.insertBefore(n,e),ki(e,t),n}function Ud(e,t,r){Lo(e,r);let n=Ci(e,t);return hr.New(n,r,null,e,zr(),nr(n.OnAfterRender))}function cl(e,t){if(Wo()){let r=n=>{requestAnimationFrame(()=>{An(e,t.Top),n()})};return _a((n,a,s)=>r.apply(null,[n,a,s]))}else return An(e,t.Top),j(null)}function nm(e,t){return Ra(st(r=>Bm(r.Attr),Li(Bc(t,Pi(r=>Vm(r.Attr),e.PreviousNodes)))))}function am(e,t){return Ra(st(r=>Pm(r.Attr),Li(Bc(e.PreviousNodes,Pi(r=>Nm(r.Attr),t)))))}function om(e,t){let r=a=>Lm(a.Attr),n=a=>Pi(r,a);return Ra(st(a=>Im(a.Attr),Li(Fy(n(e.PreviousNodes),n(t)))))}function An(e,t){e||sm(t),qd(t.Children),Kd(t)}function $n(e,t,r){for(;;){if(t!=null&&t.$==1)return ea(e,t.$0.El,r);if(t!=null&&t.$==2){let n=t.$0;n.Dirty=!1,t=n.Current}else{if(t==null)return r;if(t!=null&&t.$==4)return ea(e,t.$0.Text,r);if(t!=null&&t.$==5)return ea(e,t.$0,r);if(t!=null&&t.$==6)return vi((n,a)=>(s=>l=>c=>l==null||l.constructor===Object?$n(s,l,c):ea(s,l,c))(e)(n)(a),t.$0.Els,r);{let n=t.$1;t=t.$0,r=$n(e,n,r)}}}}function im(e,t,r,n){let a=e.parentNode;ki(t,n);let s=Ci(a,r);return hr.New(s,n,m([e,t]),a,zr(),nr(s.OnAfterRender))}function sm(e){function t(r){function n(a){for(;;)if(a!=null&&a.$==0){let s=a.$1,l=a.$0;if(n(l))return!0;a=s}else if(a!=null&&a.$==2){let s=a.$0;if(s.Dirty)return!0;a=s.Current}else if(a!=null&&a.$==6){let s=a.$0;return s.Dirty||Hr(t,s.Holes)}else return!1}return n(r.Children)}Qd(e.El,e.Attr),t(e)&&lm(e)}function qd(e){for(;;){if(e!=null&&e.$==1)return An(!1,e.$0);if(e!=null&&e.$==2)e=e.$0.Current;else{if(e==null)return null;if(e!=null&&e.$==5)return null;if(e!=null&&e.$==4){let t=e.$0;return t.Dirty?(t.Text.nodeValue=t.Value,t.Dirty=!1):null}else if(e!=null&&e.$==6){let t=e.$0;return Ze(r=>{An(!1,r)},t.Holes),Ze(r=>{Qd(r[0],r[1])},t.Attrs),Kd(t)}else{let t=e.$1,r=e.$0;qd(r),e=t}}}}function Kd(e){let t=nr(e.Render);t!=null&&t.$==1&&(t.$0(e.El),Br(e,"Render",null))}function ea(e,t,r){return hf(e,r,t),t}function lm(e){let t=e.El;function r(c,p){for(;;){if(c!=null&&c.$==1)return c.$0.El;if(c!=null&&c.$==2){let h=c.$0;if(h.Dirty)return h.Dirty=!1,$n(t,h.Current,p);c=h.Current}else{if(c==null)return p;if(c!=null&&c.$==4)return c.$0.Text;if(c!=null&&c.$==5)return c.$0;if(c!=null&&c.$==6){let h=c.$0;return h.Dirty&&(h.Dirty=!1),vi((w,u)=>w==null||w.constructor===Object?r(w,u):w,h.Els,p)}else{let h=c.$1;c=c.$0,p=r(h,p)}}}}let n=e.El;ux(c=>{bf(n,c)},cx(px(e),dx(e.El,nr(e.Delimiters))));let a=e.Children,s=nr(e.Delimiters),l=s!=null&&s.$==1?s.$0[1]:null;r(a,l)}function dm(e){return{$:4,$0:e}}function cm(e){return{$:2,$0:e}}function um(e){return{$:5,$0:e}}function pm(e,t){return{$:0,$0:e,$1:t}}function Zd(e){return{$:6,$0:e}}function gm(e){return{$:1,$0:e}}function hm(e,t,r,n,a,s,l,c){return{id:e,date:t,amount:r,currency:n,status:a,subscription:s,billingAddress:l,company:c}}function dr(e,t){return{name:e,vatin:t}}function Ht(e,t,r,n){return{line1:e,city:t,postal_code:r,country:n}}function Yd(){return F(()=>M(Cv(),e=>j(st(t=>hm(t.title,t.date,t.amount,t.currency,t.status,null,null,null),e))))}function bm(e){return F(()=>{let t=e.company,r=t==null?null:m(t.$0.name),n=e.company,a=n==null?null:m(n.$0.vatin),s=cc("",e.address.line1,e.address.city,e.address.postal_code,e.address.country,r,a),l=Sv(s);return M(l,c=>(ii(c),pd((c.$==0&&Jd(m(e)),Y()),F(()=>j(c.$==0)))))})}function wm(){return $v()}function fm(){return F(()=>ul()==null?M(oc(),e=>{let t,r;if(e!=null&&e.$==1){let n=e.$0,a=n.companyName;if(a==null)t=null;else{let s=a.$0,l=n.taxId,c=l==null?"":l.$0,p=dr(s,c);t=m(p)}r=Et(t,Ht(n.line1,n.city,n.postalCode,n.country))}else r=Et(null,Ht("","","",""));return Jd(m(r)),j(r)}):j(ul().$0))}function mm(){return F(()=>M(_v(),e=>j(e)))}function vm(){return Tv()}function ym(e){return F(()=>M(Ev(e),t=>(ii(t),j(t.$==0))))}function Jd(e){Bi.billingCache=e}function ul(){return Bi.billingCache}function xm(e,t){return F(()=>M(Vv(tx(e,t)),r=>(ii(r),j(r.$==0))))}function km(e,t,r){return F(()=>be(r)?j(!1):M(Bv(zc(e,r,t)),n=>(si(n,a=>{Kt(a)}),j(n.$==0))))}function Cm(e,t,r){return F(()=>M(Nv(zc(e,r,t)),n=>(si(n,a=>{Kt(a)}),j(n.$==0))))}var Qr=ne(e=>class{static{Qr=e(this)}static ToastText;static ToastAttr;static ToastMessage;static IsLoading;static ActivePage;static{this.ActivePage=(globalThis.document.location.hash==""&&(globalThis.document.location.hash="/subscriptions"),dc(gc,Vg())),this.IsLoading=B.Create_1(!1),this.ToastMessage=B.Create_1(null),this.ToastAttr=te("hidden",V(r=>r==null,ua().View)),this.ToastText=N.TextView(V(r=>r!=null&&r.$==1?be(r.$0)?"Saved":r.$0:"Saved",ua().View))}});function Sm(){return new Promise(e=>{e(vw(od()).then(t=>{if(t!=null&&t.$==1){let r=t.$0;return Mm().Set(m(r)),Promise.resolve(r)}else throw new Error("unauthorized")}))})}function Am(){Ai(Na().Get()),Pa(ey)}function $m(){let e=gv();rt(F(()=>(Dr(!0),zt(F(()=>M(bm(e),t=>(t&&(Na().Set(m(e)),Pa(za),Kt("Billing saved")),Y()))),()=>{Dr(!1)}))),null)}function _m(){Ai(Na().Get()),Pa(za)}function Tm(){rt(F(()=>(Dr(!0),zt(F(()=>M(pi([nc(),ac()]),()=>(Kt("Refreshed"),Y()))),()=>{Dr(!1)}))),null)}function en(e,t){return J.A1(new Do(e,t))}function Xd(e,t){if(e===null)return t;if(t===null)return e;{let r=J.A2(e,t);return Em(r,Io(e)|Io(t)),r}}function Ba(){return Te.EmptyAttr}function Em(e,t){e.flags=t}function Io(e){return e!==null&&e.hasOwnProperty("flags")?e.flags:0}function Ci(e,t){let r=[],n=[];function a(c){for(;;)if(c!==null){if(c!=null&&c.$==1)return r.push(c.$0);if(c!=null&&c.$==2){let p=c.$1,h=c.$0;a(h),c=p}else return c!=null&&c.$==3?c.$0(e):c!=null&&c.$==4?n.push(c.$0):null}else return null}a(t);let s=r.slice(0);return vc(e,Io(t),s,n.length===0?null:m(c=>{gi(p=>{p(c)},n)}))}function Fo(e){return Iv(t=>t.NChanged,ct(),Fr,e.DynNodes)}function vo(e){return vc(e,0,[],null)}function Vm(e){return(e.DynFlags&2)===2}function Bm(e){return Si(e,(t,r)=>t.NGetExitAnim(r))}function Nm(e){return(e.DynFlags&1)===1}function Pm(e){return Si(e,(t,r)=>t.NGetEnterAnim(r))}function Lm(e){return(e.DynFlags&4)===4}function Im(e){return Si(e,(t,r)=>t.NGetChangeAnim(r))}function Si(e,t){return Ra(st(r=>t(r,e.DynElem),e.DynNodes))}function Qd(e,t){Ze(r=>{r.NSync(e)},t.DynNodes)}var ec=ne(e=>class{static{ec=e(this)}static isLoading;static{this.isLoading=B.Create_1(!0)}});function Fm(){nd()}function qt(){return xr.SubsVar}function Mm(){return xr.UserVar}function tc(){return xr.CustomerPortalLinkVar}function Na(){return xr.BillingVar}function rc(){return xr.InvoicesVar}function Mo(){return xr.GitHubOrgVar}function zm(e,t){let r=e/100,n=t.toLowerCase();return n=="usd"?(a=>s=>a("$"+s.toFixed(2)))(a=>a)(r):n=="eur"?(a=>s=>a("\u20AC"+s.toFixed(2)))(a=>a)(r):n=="gbp"?(a=>s=>a("\xA3"+s.toFixed(2)))(a=>a)(r):(a=>s=>l=>a(s.toFixed(2)+" "+cr(l)))(a=>a)(r)(t)}function Dm(){return Fa.AddSeatsButtonAttr}function Gm(){return Fa.SeatsBody}function nc(){return F(()=>M(wm(),e=>(qt().Set(st(t=>{let r,n=bi(a=>a.data.subscriptionId==t.subscriptionId,qt().Get());return n!=null&&n.$==1&&ge(t.githubAssignedNames)===ge(n.$0.seats)&&(r=n.$0,!0)?bl(t,r.autoRenew,r.isProcessing,(ef((a,s)=>(s.username.Set(a==null?"":a.$0),s.isAssigned.Set(a!=null)),t.githubAssignedNames,r.seats),r.seats)):bl(t,B.Create_1(!t.cancelAtPeriodEnd),B.Create_1(!1),yd((a,s)=>gy(a+1,B.Create_1(s==null?"":s.$0),B.Create_1(s!=null),B.Create_1(!1)),t.githubAssignedNames))},xd(t=>{let r=t.status;return[r=="canceled"||r=="unpaid"?1:0,t.currentPeriodEnd]},e))),Y())))}function Rm(e){let t=e.data,r="relative inline-flex h-5 w-9 items-center rounded-full border text-xs transition-colors ",n="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ",a=t.status=="canceled"||t.status=="unpaid",s=V(E=>a?"Expired":E?"Renews":"Expires",e.autoRenew.View),l=a?J.Create("class","hidden"):Ba(),c=Ct((E,L)=>E?r+"bg-gray-200 border-gray-200 dark:bg-gray-700 dark:border-gray-700 animate-pulse pointer-events-none cursor-wait":L?r+"bg-emerald-500 border-emerald-500":r+"bg-gray-300 border-gray-400 dark:bg-gray-700 dark:border-gray-600",e.isProcessing.View,e.autoRenew.View),p=Ct((E,L)=>E?n+"translate-x-0 opacity-50":L?n+"translate-x-4":n+"translate-x-0",e.isProcessing.View,e.autoRenew.View),h=jm(t.status),w=wn("w-20 h-5",e.isProcessing.View,h),u=N.TextView(V(E=>String(E)+" on "+String(t.currentPeriodEnd)+" ("+String(t.seats)+" seats)",s)),x=wn("w-58 h-5",e.isProcessing.View,u),f=new ue("New_1"),T=(f.h.push(new R("expiryandseatcount",x)),f),k=(T.h.push(new R("groupstatusbadge",w)),T),v=(k.h.push(new O("autorenewwrapper",l)),k),S=(v.h.push(new bt("toggleclasses",c)),v),y=(S.h.push(new bt("dotclasses",p)),S),b=(y.h.push(X(y.k,"toggleautorenew",()=>y.i,()=>{a||Wm(e)})),y),C=he(b.k,b.h,[]),$=new ce(C[1],Og(C[0]));return(b.i=$,$).Doc}function Om(e,t,r){let n=e.isProcessing.View,a=Zm(e,r,n),s=Km(e,r,n),l=wn("w-24 h-5",n,N.TextNode(t.currentPeriodEnd)),c=wn("w-16 h-6",n,N.BindView(qm,e.isAssigned.View)),p=wn("w-full h-8",n,N.Input([J.Create("class","w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm"),J.Create("placeholder","github-username"),Um(e,r)],e.username)),h=new ue("New_1"),w=(h.h.push(new jr("seatlabel","#"+String(e.seatNo))),h),u=(w.h.push(new R("usernamewidget",p)),w),x=(u.h.push(new R("statusbadge",c)),u),f=(x.h.push(new R("expiry",l)),x),T=(f.h.push(new O("assignbuttonattr",s)),f),k=(T.h.push(new O("unassignbuttonattr",a)),T),v=(k.h.push(X(k.k,"assignseat",()=>k.i,()=>{Ym(t.subscriptionId,e,ut(e.username.Get()))})),k),S=(v.h.push(X(v.k,"unassignseat",()=>v.i,()=>{r||Jm(t.subscriptionId,e,ut(e.username.Get()))})),v),y=he(S.k,S.h,[]),b=new ce(y[1],Hg(y[0]));return(S.i=b,b).Doc}function Hm(){return Fa.seatGroupsDoc}function wn(e,t,r){let n=St([te("opacity-0",t),te("pointer-events-none",t)]),a=St([te("opacity-0",V(f=>!f,t)),ld("relative z-10 pointer-events-none")]),s=new ue("New_1"),l=(s.h.push(new jr("wrapperclasses",e)),s),c=(l.h.push(new O("skeletonattr",J.Concat(a))),l),p=(c.h.push(new O("contentattr",J.Concat(n))),c),h=(p.h.push(new R("content",r)),p),w=he(h.k,h.h,[]),u=new ce(w[1],Kg(w[0]));return(h.i=u,u).Doc}function jm(e){let t=e.toLowerCase();return N.Element("span",[J.Create("class","px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border "+(t=="active"?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-900/50":t=="past_due"||t=="unpaid"?"bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900/50":t=="canceled"?"bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700":"bg-blue-50 text-blue-600 border-blue-100"))],[N.TextNode(Ew(e,"_"," "))])}function Wm(e){rt(F(()=>(e.isProcessing.Set(!0),zt(F(()=>{let t=e.autoRenew.Get();return M(xm(e.data.subscriptionId,t),r=>(r&&(e.autoRenew.Set(!t),Kt("Updated")),Y()))}),()=>{e.isProcessing.Set(!1)}))),null)}function Um(e,t){return t?J.Create("readonly",""):lw("readonly",e.isAssigned.View,ct(""))}function qm(e){return N.Element("span",[J.Create("class",e?"inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-emerald-300 text-emerald-700 dark:border-emerald-700/40 dark:text-emerald-300":"inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-gray-300 text-gray-600 dark:border-white/10 dark:text-gray-300")],[N.TextNode(e?"assigned":"unassigned")])}function Km(e,t,r){return t?J.Create("style","display: none"):J.Concat([te("hidden",e.isAssigned.View),te("disabled",r)])}function Zm(e,t,r){return t?J.Create("style","display: none"):J.Concat([te("hidden",V(n=>!n,e.isAssigned.View)),dw("disabled",r),te("opacity-50 cursor-not-allowed",r)])}function Ym(e,t,r){be(r)||rt(F(()=>(t.isProcessing.Set(!0),zt(F(()=>M(Xm(r),n=>n?M(km(e,t.seatNo,r),a=>(a&&(t.isAssigned.Set(!0),Kt("Updated")),Y())):($o("GitHub user '"+r+"' not found"),Y()))),()=>{t.isProcessing.Set(!1)}))),null)}function Jm(e,t,r){rt(F(()=>(t.isProcessing.Set(!0),zt(F(()=>M(Cm(e,t.seatNo,r),n=>(n&&(t.username.Set(""),t.isAssigned.Set(!1),Kt("Updated")),Y()))),()=>{t.isProcessing.Set(!1)}))),null)}function Xm(e){return F(()=>M(ci(globalThis.fetch("https://api.github.com/users/"+e)),t=>j(t.ok)))}function ot(){return je.BillingRecordVar}function Qm(){return je.CompanyVatinVar}function ev(){return je.CompanyNameVar}function tv(){return je.BillingCountryView}function rv(){return je.BillingPostalView}function nv(){return je.BillingCityView}function av(){return je.BillingLine1View}function ov(){return je.BillingVatinView}function iv(){return je.BillingNameView}function sv(){return je.BtnBillingCancelAttr}function lv(){return je.BtnBillingSaveAttr}function dv(){return je.BtnBillingEditAttr}function cv(){return je.BillingEditAttr}function uv(){return je.BillingViewAttr}function pv(){return je.BillingCountryOptions}function Ai(e){let t=e==null?Et(m(dr("","")),Ht("","","","")):e.$0;ot().Set(t)}function Pa(e){Lr().Set(e)}function gv(){return ot().Get()}function Pr(e){return be(e)?"\u2014":e}function pl(){return je.CountriesList}function Lr(){return je.BillingModeVar}function Et(e,t){return{company:e,address:t}}function hv(){return _i.InvoicesBody}function ac(){return F(()=>M(Yd(),e=>(rc().Set(xd(t=>t.date,e)),Y())))}function bv(e,t){let r=V(v=>"./invoice?id="+encodeURIComponent(v.id),t),n=V(v=>v.status,t),a=V(v=>zm(v.amount,v.currency),t),s=V(v=>v.date,t),l=V(v=>v.id,t),c=new ue("New_1"),p=(c.h.push(new bt("invoiceid",l)),c),h=(p.h.push(new bt("date",s)),p),w=(h.h.push(new bt("amount",a)),h),u=(w.h.push(new bt("status",n)),w),x=(u.h.push(new bt("href",r)),u),f=he(x.k,x.h,[]),T=new ce(f[1],jg(f[0]));return(x.i=T,T).Doc}function wv(){return _i.invoicesDoc}function fv(){return Ma.GitHubBody}function gl(){return Ma.GitHubOrgName}function mv(){return Ma.OrgPrefix}function vv(e){return M(new Ye().Async("IRemotingContract/ConfirmStripeOrder",[e]),t=>j(Pg()(t)))}function yv(){return new Ye().Async("IRemotingContract/Logout",[])}function xv(){return M(new Ye().Async("IRemotingContract/Me",[]),e=>j(Lg()(e)))}function oc(){return M(new Ye().Async("IRemotingContract/GetBillingData",[]),e=>j(Ig()(e)))}function kv(e){return M(new Ye().Async("IRemotingContract/StripeCheckout",[Fg()(e)]),t=>j(Mg()(t)))}function Cv(){return M(new Ye().Async("IRemotingContract/GetInvoices",[]),e=>j(e))}function Sv(e){return M(new Ye().Async("IRemotingContract/SetBillingData",[Fl()(e)]),t=>j(Bn()(t)))}function Av(){return M(new Ye().Async("IRemotingContract/GetPlanPrices",[]),e=>j(Ei(Wg)()(e)))}function $v(){return M(new Ye().Async("IRemotingContract/GetSubscriptions",[]),e=>j(Ei(Ug)()(e)))}function _v(){return M(new Ye().Async("IRemotingContract/GetCustomerPortalLink",[]),e=>j(Ml()(e)))}function Tv(){return M(new Ye().Async("IRemotingContract/GetGitHubOrg",[]),e=>j(qg()(e)))}function Ev(e){return M(new Ye().Async("IRemotingContract/SetGitHubOrgName",[e]),t=>j(Bn()(t)))}function Vv(e){return M(new Ye().Async("IRemotingContract/SetCancellationStatus",[e]),t=>j(Bn()(t)))}function Bv(e){return M(new Ye().Async("IRemotingContract/AddAssignment",[e]),t=>j(Bn()(t)))}function Nv(e){return M(new Ye().Async("IRemotingContract/RevokeAssignment",[e]),t=>j(Bn()(t)))}function Pv(){throw new Ho("New")}function Lv(){throw new ei("New_2","An item with the same key has already been added.")}function Mn(e){if(e instanceof Array)return e;if(e instanceof ye)return wi(e);if(e===null)return[];{let t=[],r=ae(e);try{for(;r.MoveNext();)t.push(r.Current);return t}finally{let n=r;typeof n=="object"&&Ne(n)&&r.Dispose()}}}function zn(e,t,r){let n=ge(r);function a(s){return l=>{let c;switch(l<=0?0:l===1&&s>=0&&s<n?1:(c=l,2)){case 0:return e;case 1:return U(r,s);case 2:let p=l/2>>0;return t(a(s)(p),a(s+p)(l-p))}}}return a(0)(n)}function Iv(e,t,r,n){let a=ge(n);function s(l){return c=>{let p;switch(c<=0?0:c===1&&l>=0&&l<a?1:(p=c,2)){case 0:return t;case 1:return e(U(n,l));case 2:let h=c/2>>0;return r(s(l)(h),s(l+h)(c-h))}}}return s(0)(a)}function ic(e,t){for(let r=0,n=t.length-1;r<=n;r++)t[r]=e(t[r]);return t}function Fv(e,t){return{c:e,r:t}}function vr(e,t){return{k:e,ct:t}}function ae(e){return e instanceof Array?sc(e):H(typeof e,"string")?lc(e):e.GetEnumerator()}function sc(e){return new gt(0,null,t=>{let r=t.s;return r<ge(e)&&(t.c=U(e,r),t.s=r+1,!0)},void 0)}function lc(e){return new gt(0,null,t=>{let r=t.s;return r<e.length&&(t.c=e[r],t.s=r+1,!0)},void 0)}function Mv(e){return e instanceof Array?sc(e):H(typeof e,"string")?lc(e):"GetEnumerator0"in e?e.GetEnumerator0():e.GetEnumerator()}var gt=class extends Me{s;c;n;d;e;MoveNext(){let t=this.n(this);return this.e=t?1:2,t}get Current(){return this.e===1?this.c:this.e===0?Pe("Enumeration has not started. Call MoveNext."):Pe("Enumeration already finished.")}Dispose(){this.d&&this.d(this)}constructor(t,r,n,a){super(),this.s=t,this.c=r,this.n=n,this.d=a,this.e=0}},zo=class extends la{isConst;current;snap;view;id;get View(){return this.view}Set(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):(_n(this.snap),this.current=t,this.snap={s:La(t,[])})}Get(){return this.current}Update(t){this.Set(t(this.Get()))}UpdateMaybe(t){let r=t(this.Get());r!=null&&r.$==1&&this.Set(r.$0)}SetFinal(t){this.isConst?(r=>r("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))(r=>{console.log(r)}):(_n(this.snap),this.isConst=!0,this.current=t,this.snap={s:Yt(t)})}constructor(t,r,n){super(),this.isConst=t,this.current=n,this.snap=r,this.view=()=>this.snap,this.id=zr()}};function dc(e,t){let r=B.Create_1(void 0);return zv(r,e,t),r}function zv(e,t,r){let n=l=>ly(r,br.FromHash(l,m(!0))),a=()=>Dv(n,t),s=l=>{H(e.Get(),l)||e.Set(l)};s(a()),globalThis.addEventListener("popstate",()=>s(a()),!1),globalThis.addEventListener("hashchange",()=>s(a()),!1),globalThis.document.body.addEventListener("click",l=>{let c,p=Gv(l.target);if(p==null)c=null;else{let h=p.$0;c=Rr(h,"#")?n(h):null}return c==null?null:(s(c.$0),l.preventDefault())},!1),vn(l=>{if(!H(l,a())){let c=dy(r,l);globalThis.history.pushState(null,null,c)}},e.View)}function Dv(e,t){let r=globalThis.location.hash,n=e(r);return n==null?((a=>s=>a("Failed to parse route: "+cr(s)))(a=>{console.log(a)})(r),t):n.$0}function Gv(e){for(;;){if(e.tagName=="A")return fw(e.getAttribute("href"));if(e===globalThis.document.body)return null;e=e.parentNode}}function Rv(e){return{Plans:e}}var $i={$:1},Ov={$:0},ye=class e{static Empty=Fe(e,{$:0});static Cons(t,r){return Fe(e,{$:1,$0:t,$1:r})}GetEnumerator(){return new gt(this,null,t=>{let r=t.s;if(r.$==0)return!1;{let n=r.$1;return t.c=r.$0,t.s=n,!0}},void 0)}$;$0;$1};function at(e,t,r,n,a,s,l,c,p,h,w){return{plan:e,interval:t,seatsText:r,email:n,street:a,city:s,postal:l,country:c,isCompany:p,companyName:h,vatin:w}}function Hv(e,t,r){return{plan:e,interval:t,seats:r}}function cc(e,t,r,n,a,s,l){return{email:e,line1:t,city:r,postalCode:n,country:a,companyName:s,taxId:l}}function _n(e){let t,r=e.s;if(!(r==null||(!(r!=null&&r.$==2||r!=null&&r.$==3)||(t=r.$1,!1)))){e.s=null;for(let n=0,a=ge(t)-1;n<=a;n++){let s=U(t,n);typeof s=="object"?(l=>{_n(l)})(s):s()}}}function jv(e){Da.EndPoint=e}function Wv(){return Da.AjaxProvider}function Uv(e){return JSON.stringify(e)}function qv(e){return db(st(t=>[t[0],t[1]],af(t=>t[0],e.concat([["content-type","application/json"]]))))}function Kv(){return Da.EndPoint}function hl(e,t,r,n,a,s,l){let c=new XMLHttpRequest,p=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");c.open("POST",t,e),e==!0&&(c.withCredentials=!0);let h;for(var w in r)c.setRequestHeader(w,r[w]);p&&c.setRequestHeader("x-csrftoken",p);function u(){if(c.status==200)a(c.responseText);else if(l&&c.status==403&&c.responseText=="CSRF")l();else{let x="Response status is not 200: ";s(new Error(x+c.status))}}"onload"in c?c.onload=c.onerror=c.onabort=u:c.onreadystatechange=()=>{c.readyState==4&&u()},c.send(n)}function cr(e){return e??""}function Zv(e,t,r){let n=Yv(e),a=!be(r),s=yo().ContainsKey(n);return t?n=="HU"?27:s&&a?0:s&&!a?yo().Item(n):0:s?yo().Item(n):0}function Yv(e){return e==null?"":ut(e).toUpperCase()}function yo(){return _c.euVat}function uc(){return fc.List}function Jv(e,t,r,n){return{planCode:e,interval:t,seats:r,billingData:n}}function Yt(e){return{$:0,$0:e}}function La(e,t){return{$:2,$0:e,$1:t}}function yr(e,t){return{$:3,$0:e,$1:t}}function Ia(e){return{$:1,$0:e}}function tn(e){return{$:0,$0:e}}function pc(e){return{$:2,$0:e}}var rn=ne(e=>class{static{rn=e(this)}static GetCT;static Zero;static defCTS;static scheduler;static noneCT;static{this.noneCT=Fv(!1,[]),this.scheduler=new Ro,this.defCTS=[new Oo],this.Zero=j(),this.GetCT=r=>{r.k(tn(r.ct))}}}),gc={$:0},Xv={$:1},Do=class extends Me{push;value;dirty;updates;get NChanged(){return this.updates}NGetExitAnim(t){return xo()}NGetEnterAnim(t){return xo()}NGetChangeAnim(t){return xo()}NSync(t){this.dirty&&(this.push(t)(this.value),this.dirty=!1)}constructor(t,r){super(),this.push=r,this.value=void 0,this.dirty=!1,this.updates=V(n=>{this.value=n,this.dirty=!0},t)}},xr=ne(e=>class{static{xr=e(this)}static GitHubOrgVar;static CustomerPortalLinkVar;static BillingVar;static InvoicesVar;static SubsVar;static UserVar;static{this.UserVar=B.Create_1(null),this.SubsVar=B.Create_1([]),this.InvoicesVar=B.Create_1([]),this.BillingVar=B.Create_1(null),this.CustomerPortalLinkVar=B.Create_1(null),this.GitHubOrgVar=B.Create_1(null)}}),Fa=ne(e=>class{static{Fa=e(this)}static SeatsBody;static seatGroupsDoc;static AddSeatsButtonAttr;static{this.AddSeatsButtonAttr=kt("style",V(r=>Hr(n=>n.data.planName.toLowerCase().indexOf("freelancer")!=-1,r)?"display: none":"",qt().View)),this.seatGroupsDoc=N.ConvertBy(r=>{let n=r.data;return Qv(n.subscriptionId,n.status,n.planName,n.currentPeriodEnd,!1,n.seats,[])},r=>{let n=r.data,a=n.planName.toLowerCase().indexOf("freelancer")!=-1,s=n.status=="canceled"||n.status=="unpaid";return N.Concat(Rd(Or(()=>Pn([Rm(r)],Or(()=>s?[]:[N.Concat(st(l=>Om(l,n,a),r.seats))])))))},qt().View),this.SeatsBody=Hm()}}),je=ne(e=>class{static{je=e(this)}static BtnBillingCancelAttr;static BtnBillingSaveAttr;static BtnBillingEditAttr;static BillingEditAttr;static BillingViewAttr;static BillingCountryOptions;static BillingCountryView;static CountriesList;static BillingPostalView;static BillingCityView;static BillingLine1View;static BillingVatinView;static BillingNameView;static CompanyVatinVar;static CompanyNameVar;static BillingModeVar;static BillingRecordVar;static{this.BillingRecordVar=B.Create_1(Et(m(dr("","")),Ht("","","",""))),this.BillingModeVar=B.Create_1(za),this.CompanyNameVar=B.Lens(ot(),r=>{let n=r.company;return n==null?"":n.$0.name},(r,n)=>{let a=r.company,s=a==null?dr(n,""):dr(n,a.$0.vatin),l=m(s);return Et(l,r.address)}),this.CompanyVatinVar=B.Lens(ot(),r=>{let n=r.company;return n==null?"":n.$0.vatin},(r,n)=>{let a=r.company,s=a==null?dr("",n):dr(a.$0.name,n),l=m(s);return Et(l,r.address)}),this.BillingNameView=N.TextView(V(r=>{let n=r.company;return n==null?"\u2014":Pr(n.$0.name)},ot().View)),this.BillingVatinView=N.TextView(V(r=>{let n=r.company;return n==null?"\u2014":Pr(n.$0.vatin)},ot().View)),this.BillingLine1View=N.TextView(V(r=>Pr(r.address.line1),ot().View)),this.BillingCityView=N.TextView(V(r=>Pr(r.address.city),ot().View)),this.BillingPostalView=N.TextView(V(r=>Pr(r.address.postal_code),ot().View)),this.CountriesList=uc(),this.BillingCountryView=N.TextView(V(r=>{let n=r.address.country,a=fd(s=>s[0]==n?m(s[1]):null,pl());return a==null?Pr(n):a.$0},ot().View)),this.BillingCountryOptions=Gd(r=>N.Element("option",[J.Create("value",r[0])],[N.TextNode(r[1])]),pl()),this.BillingViewAttr=te("hidden",V(r=>r.$==1,Lr().View)),this.BillingEditAttr=te("hidden",V(r=>r.$!=1,Lr().View)),this.BtnBillingEditAttr=te("hidden",V(r=>r.$!=0,Lr().View)),this.BtnBillingSaveAttr=te("hidden",V(r=>r.$!=1,Lr().View)),this.BtnBillingCancelAttr=te("hidden",V(r=>r.$!=1,Lr().View))}}),_i=ne(e=>class{static{_i=e(this)}static InvoicesBody;static invoicesDoc;static{this.invoicesDoc=N.ConvertSeqBy(r=>r.id,r=>n=>bv(r,n),rc().View),this.InvoicesBody=wv()}}),Ma=ne(e=>class{static{Ma=e(this)}static GitHubBody;static OrgPrefix;static GitHubOrgName;static{this.GitHubOrgName=B.Create_1(""),this.OrgPrefix="IntelliFactory-",this.GitHubBody=N.EmbedView(Ct((r,n)=>{if(Hr(a=>a.data.planName.toLowerCase().indexOf("freelancer")!=-1,n))return N.Empty;if(r!=null&&r.$==1){let a=r.$0,s=a.name;if(a.status=="active")if(s!=null&&s.$==1){let l=s.$0,c=new ue("New_1"),p=(c.h.push(X(c.k,"gotogithuborg",()=>c.i,()=>{globalThis.open("https://github.com/"+l,"_blank")})),c),h=he(p.k,p.h,[]),w=new ce(h[1],zg(h[0]));return(p.i=w,w).Doc}else return N.Empty;else if(s!=null&&s.$==1){let l=s.$0,c=new ue("New_1"),p=(c.h.push(new jr("githuborgname",l)),c),h=he(p.k,p.h,[]),w=new ce(h[1],Dg(h[0]));return(p.i=w,w).Doc}else{let l=new ue("New_1"),c=(l.h.push(new _e("githuborgname",gl())),l),p=(c.h.push(X(c.k,"setgithuborgname",()=>c.i,()=>{rt(F(()=>(Dr(!0),zt(F(()=>{let x=mv()+gl().Get();return M(ym(x),f=>(f&&Mo().Set(m(hy(m(x),"pending"))),Y()))}),()=>{Dr(!1)}))),null)})),c),h=he(p.k,p.h,[["githuborgname",0,null]]),w=new ce(h[1],Gg(h[0]));return(p.i=w,w).Doc}}else return N.Empty},Mo().View,qt().View))}});function Qv(e,t,r,n,a,s,l){return{subscriptionId:e,status:t,planName:r,currentPeriodEnd:n,cancelAtPeriodEnd:a,seats:s,githubAssignedNames:l}}function bl(e,t,r,n){return{data:e,autoRenew:t,isProcessing:r,seats:n}}var ey={$:1},za={$:0},Ye=class extends Me{AsyncBase(t,r){return F(()=>{let n=qv(this.Headers),a=Uv(r);return M(Aw(),s=>M(_a((l,c,p)=>{let h=[!0],w=gd(s,()=>{h[0]&&(h[0]=!1,p(new ma("New",s)))});return Wv().Async(this.EndPoint+"/"+t,n,a,u=>{h[0]&&(h[0]=!1,w.Dispose(),l(u))},u=>{h[0]&&(h[0]=!1,w.Dispose(),c(u))})}),l=>j(JSON.parse(l))))})}get EndPoint(){return Kv()}get Headers(){return[]}Async(t,r){return this.AsyncBase(t,r)}},hr=class e{Attr;Children;Delimiters;El;ElKey;Render;Equals(t){return this.ElKey===t.ElKey}GetHashCode(){return this.ElKey}static New(t,r,n,a,s,l){let c={Attr:t,Children:r,El:a,ElKey:s},p=(Br(c,"Delimiters",n),Br(c,"Render",l),c);return Fe(e,p)}},Jt=ne(e=>class{static{Jt=e(this)}static RenderedFullDocTemplate;static TextHoleRE;static GlobalHoles;static LocalTemplatesLoaded;static LoadedTemplates;static{this.LoadedTemplates=new Ue("New_5"),this.LocalTemplatesLoaded=!1,this.GlobalHoles=new Ue("New_5"),this.TextHoleRE="\\${([^}]+)}",this.RenderedFullDocTemplate=null}});function ty(e,t){return{LeftPx:e,WidthPx:t}}var Go=class extends Error{reason;constructor(t){super("Promise rejected"),this.reason=t}},nn=ne(e=>class{static{nn=e(this)}static defaultWrap;static wrapMap;static rhtml;static rtagName;static rxhtmlTag;static{this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>","gi"),this.rtagName=new RegExp("<([\\w:]+)"),this.rhtml=new RegExp("<|&#?\\w+;");let r=[1,"<table>","</table>"],n=Object.fromEntries([["option",[1,"<select multiple='multiple'>","</select>"]],["legend",[1,"<fieldset>","</fieldset>"]],["area",[1,"<map>","</map>"]],["param",[1,"<object>","</object>"]],["thead",r],["tbody",r],["tfoot",r],["tr",[2,"<table><tbody>","</tbody></table>"]],["col",[2,"<table><colgroup>","</colgoup></table>"]],["td",[3,"<table><tbody><tr>","</tr></tbody></table>"]]]);this.wrapMap=n,this.defaultWrap=[0,"",""]}});function ry(e){let t=null,r=0,n=e.textContent,a=new RegExp(Sn(),"g");for(;t=a.exec(n),t!==null;){e.parentNode.insertBefore(globalThis.document.createTextNode(Lt(n,m(r),m(a.lastIndex-U(t,0).length-1))),e),r=a.lastIndex;let s=globalThis.document.createElement("span");s.setAttribute("ws-replace",U(t,1).toLowerCase()),e.parentNode.insertBefore(s,e)}a.lastIndex=0,e.textContent=Lt(n,m(r),null)}function wl(e){console.warn("Instantiating non-loaded template",e)}function ny(e,t,r){let n=e.querySelector("[ws-replace]");return H(n,null)?(console.warn("Filling non-existent text hole",r),null):(n.parentNode.replaceChild(globalThis.document.createTextNode(t),n),m(n.getAttribute("ws-replace")))}function ay(e,t){let r=n=>{We(e,"["+n+"]",a=>{t.Contains(a.getAttribute(n))||a.removeAttribute(n)})};r("ws-attr"),r("ws-onafterrender"),r("ws-var"),We(e,"[ws-hole]",n=>{if(!t.Contains(n.getAttribute("ws-hole")))for(n.removeAttribute("ws-hole");n.hasChildNodes();)n.removeChild(n.lastChild)}),We(e,"[ws-replace]",n=>{t.Contains(n.getAttribute("ws-replace"))||n.parentNode.removeChild(n)}),We(e,"[ws-on]",n=>{n.setAttribute("ws-on",Ut(" ",Ln(a=>t.Contains(U(pt(a,[":"],1),1)),pt(n.getAttribute("ws-on"),[" "],1))))}),We(e,"[ws-attr-holes]",n=>{let a=pt(n.getAttribute("ws-attr-holes"),[" "],1);for(let s=0,l=a.length-1;s<=l;s++){let c=U(a,s),p=new RegExp(Sn(),"g"),h=n.getAttribute(c).replace(p,(w,u)=>t.Contains(u)?w:"");n.setAttribute(c,h)}})}function oy(e,t){hc(t);let r=t.nodeName.toLowerCase(),n=e.querySelector("[ws-attr="+r+"]");if(H(n,null))console.warn("Filling non-existent attr hole",r);else{n.removeAttribute("ws-attr");for(let a=0,s=t.attributes.length-1;a<=s;a++){let l=t.attributes.item(a);l.name=="class"&&n.hasAttribute("class")?n.setAttribute("class",n.getAttribute("class")+" "+l.nodeValue):n.setAttribute(l.name,l.nodeValue)}}}function iy(e,t){let r=n=>{We(e,"["+n+"]",a=>{let s,l=(s=null,[t.TryGetValue(a.getAttribute(n).toLowerCase(),{get:()=>s,set:c=>{s=c}}),s]);l[0]&&a.setAttribute(n,l[1])})};r("ws-hole"),r("ws-replace"),r("ws-attr"),r("ws-onafterrender"),r("ws-var"),We(e,"[ws-on]",n=>{n.setAttribute("ws-on",Ut(" ",st(a=>{let s,l=pt(a,[":"],1),c=(s=null,[t.TryGetValue(U(l,1),{get:()=>s,set:p=>{s=p}}),s]);return c[0]?U(l,0)+":"+c[1]:a},pt(n.getAttribute("ws-on"),[" "],1))))}),We(e,"[ws-attr-holes]",n=>{let a=pt(n.getAttribute("ws-attr-holes"),[" "],1);for(let s=0,l=a.length-1;s<=l;s++)(()=>{let c=U(a,s);return n.setAttribute(c,wd((p,h)=>{let w=sr(h);return p.replace(new RegExp("\\${"+w[0]+"}","ig"),"${"+w[1]+"}")},n.getAttribute(c),t))})()})}function fl(e,t,r){for(;;)if(e.hasChildNodes())r=t.insertBefore(e.lastChild,r);else return null}function hc(e){let t=e.attributes,r=[],n=[],a=[];for(let l=0,c=t.length-1;l<=c;l++){let p=t.item(l);if(Rr(p.nodeName,"ws-on")&&p.nodeName!="ws-onafterrender"&&p.nodeName!="ws-on")r.push(p.nodeName),n.push(Lt(p.nodeName,m(5),null)+":"+p.nodeValue.toLowerCase());else if(!Rr(p.nodeName,"ws-")&&new RegExp(Sn()).test(p.nodeValue)){let h=new RegExp(Sn(),"g"),w=p.nodeValue.replace(h,(u,x)=>"${"+x.toLowerCase()+"}");p.nodeValue=w,a.push(p.nodeName)}}n.length!=0&&e.setAttribute("ws-on",Ut(" ",n)),a.length!=0&&e.setAttribute("ws-attr-holes",Ut(" ",a));let s=l=>{let c=e.getAttribute(l);c==null||e.setAttribute(l,c.toLowerCase())};s("ws-hole"),s("ws-replace"),s("ws-attr"),s("ws-onafterrender"),s("ws-var"),Ze(l=>{e.removeAttribute(l)},r)}function bc(e,t){let r=(a,s)=>{let l=e==null?{}:new e,c=U(t,a),p=c[0];return p!=null&&p.$==1?c[0].$0:(l.$=a,Fw((h,w)=>{l["$"+String(h)]=w},s),l)},n=Ke(bn(a=>{let s=a[0],l=a[1],c=l[2];return it(p=>[s,p[0],p[1],c],l[1])},Mw(t)));return Iy(a=>bn(s=>{let l=s[0];if(sy(s[1],a.Method)){let c=$c(St(s[2]),a.Segments);if(c==null)return[];{let p=c.$0,h=St(s[3]);if(h.$==0)return[[br.New(p,a.QueryArgs,a.FormData,a.Method,a.Body),r(l,[])]];{let w=function(u){return x=>f=>{if(u.$==1){let T=u.$1;return bn(k=>w(T)(k[0])(ye.Cons(k[1],f)),u.$0.Parse(x))}else return[[x,r(l,wi(Zf(f)))]]}};return w(h)(br.New(p,a.QueryArgs,a.FormData,a.Method,a.Body))(ye.Empty)}}}else return[]},n),a=>{let s=zw(u=>{let x=u[0];return x!=null&&x.$==1&&H(a,x.$0)},t),l=s!=null&&s.$==1?s.$0:a.$,c=U(t,l),p=c[2],h=U(c[1],0),w=[br.Segment(St(h[1]),h[0])];if(p.length==0)return m(w);{let u=rf((x,f)=>f.Write(x),kd(ge(U(t,l)[2]),x=>a["$"+String(x)]),p);return mi(x=>x!=null,u)?m(Pn(w,bn(x=>x.$0,u))):null}})}function sy(e,t){return t!=null&&t.$==1?e!=null&&e.$==1?H(t.$0,e.$0):!0:!(e!=null&&e.$==1)}function ly(e,t){return fd(r=>r[0].Segments.$==0?m(r[1]):null,e.Parse(t))}function dy(e,t){return"#"+cy(e,t)}function cy(e,t){let r=uy(e,t);return r==null?"":r.$0.ToLink()}function uy(e,t){let r=e.Write(t);return r==null?null:m(br.Combine(r.$0))}var br=class e{Segments;QueryArgs;FormData;Method;Body;static FromHash(t,r){let n=t.indexOf("#");if(n===-1)return e.Empty;{let a=t.substring(n+1);return r!=null&&r.$0?a==""||a=="/"?e.Empty:Rr(a,"/")?e.FromUrl(a.substring(1),m(!0)):e.Segment_2(a):e.FromUrl(t.substring(n),m(!1))}}static Segment(t,r){let n=e.Empty;return e.New(t,n.QueryArgs,n.FormData,r,n.Body)}static get Empty(){return e.New(ye.Empty,new Ot("New",[]),new Ot("New",[]),null,m(null))}static FromUrl(t,r){let n=t.indexOf("?"),a=n===-1?[t,new Ot("New",[])]:[bd(t,0,n),e.ParseQuery(t.substring(n+1))],s=r!=null&&r.$0?0:1,l=e.Empty;return e.New(St(pt(a[0],["/"],s)),a[1],l.FormData,l.Method,l.Body)}static Segment_2(t){let r=e.Empty;return e.New(St([t]),r.QueryArgs,r.FormData,r.Method,r.Body)}static ParseQuery(t){return Ky(Ke(Ta(r=>{let n=pt(r,["="],0);return!H(n,null)&&n.length===2?m([U(n,0),U(n,1)]):((a=>s=>a("wrong format for query argument: "+cr(s)))(a=>{console.log(a)})(r),null)},pt(t,["&"],0))))}ToLink(){return ix(this.Segments,this.QueryArgs)}static Combine(t){let r,n,a,s,l=Ke(t),c=ge(l);if(c===0)return e.Empty;if(c===1)return U(l,0);{r=null,n=null;let p=[];return a=new Ot("New",[]),s=new Ot("New",[]),Ze(h=>{let w=h.Method;w!=null&&w.$==1&&(r=w);let u=h.Body;u==null||(n=u),a=yl((x,f,T)=>T.Add_1(x,f),a,h.QueryArgs),s=yl((x,f,T)=>T.Add_1(x,f),s,h.FormData),Wd(x=>{p.push(x)},h.Segments)},l),e.New(Rd(p),a,s,r,n)}}static New(t,r,n,a,s){return Fe(e,{Segments:t,QueryArgs:r,FormData:n,Method:a,Body:s})}},Ti=ne(e=>class{static{Ti=e(this)}static counter;static{this.counter=0}}),wc=ne(e=>class{static{wc=e(this)}static ContactEndpoint;static CacheKey;static{this.CacheKey="planprices",this.ContactEndpoint="https://api.websharper.com/api/contact"}}),Da=ne(e=>class{static{Da=e(this)}static AjaxProvider;static EndPoint;static{this.EndPoint=globalThis.location.origin,this.AjaxProvider=new Uo}}),fc=ne(e=>class{static{fc=e(this)}static List;static{this.List=St([["AF","Afghanistan"],["AL","Albania"],["DZ","Algeria"],["AD","Andorra"],["AO","Angola"],["AG","Antigua and Barbuda"],["AR","Argentina"],["AM","Armenia"],["AU","Australia"],["AT","Austria"],["AZ","Azerbaijan"],["BS","Bahamas"],["BH","Bahrain"],["BD","Bangladesh"],["BB","Barbados"],["BY","Belarus"],["BE","Belgium"],["BZ","Belize"],["BJ","Benin"],["BT","Bhutan"],["BO","Bolivia"],["BA","Bosnia and Herzegovina"],["BW","Botswana"],["BR","Brazil"],["BN","Brunei"],["BG","Bulgaria"],["BF","Burkina Faso"],["BI","Burundi"],["KH","Cambodia"],["CM","Cameroon"],["CA","Canada"],["CV","Cape Verde"],["CF","Central African Republic"],["TD","Chad"],["CL","Chile"],["CN","China"],["CO","Colombia"],["KM","Comoros"],["CG","Congo"],["CR","Costa Rica"],["HR","Croatia"],["CU","Cuba"],["CY","Cyprus"],["CZ","Czech Republic"],["DK","Denmark"],["DJ","Djibouti"],["DM","Dominica"],["DO","Dominican Republic"],["EC","Ecuador"],["EG","Egypt"],["SV","El Salvador"],["GQ","Equatorial Guinea"],["ER","Eritrea"],["EE","Estonia"],["SZ","Eswatini"],["ET","Ethiopia"],["FJ","Fiji"],["FI","Finland"],["FR","France"],["GA","Gabon"],["GM","Gambia"],["GE","Georgia"],["DE","Germany"],["GH","Ghana"],["GR","Greece"],["GD","Grenada"],["GT","Guatemala"],["GN","Guinea"],["GW","Guinea-Bissau"],["GY","Guyana"],["HT","Haiti"],["HN","Honduras"],["HU","Hungary"],["IS","Iceland"],["IN","India"],["ID","Indonesia"],["IR","Iran"],["IQ","Iraq"],["IE","Ireland"],["IL","Israel"],["IT","Italy"],["JM","Jamaica"],["JP","Japan"],["JO","Jordan"],["KZ","Kazakhstan"],["KE","Kenya"],["KI","Kiribati"],["KW","Kuwait"],["KG","Kyrgyzstan"],["LA","Laos"],["LV","Latvia"],["LB","Lebanon"],["LS","Lesotho"],["LR","Liberia"],["LY","Libya"],["LI","Liechtenstein"],["LT","Lithuania"],["LU","Luxembourg"],["MG","Madagascar"],["MW","Malawi"],["MY","Malaysia"],["MV","Maldives"],["ML","Mali"],["MT","Malta"],["MH","Marshall Islands"],["MR","Mauritania"],["MU","Mauritius"],["MX","Mexico"],["FM","Micronesia"],["MD","Moldova"],["MC","Monaco"],["MN","Mongolia"],["ME","Montenegro"],["MA","Morocco"],["MZ","Mozambique"],["MM","Myanmar"],["NA","Namibia"],["NR","Nauru"],["NP","Nepal"],["NL","Netherlands"],["NZ","New Zealand"],["NI","Nicaragua"],["NE","Niger"],["NG","Nigeria"],["KP","North Korea"],["MK","North Macedonia"],["NO","Norway"],["OM","Oman"],["PK","Pakistan"],["PW","Palau"],["PS","Palestine"],["PA","Panama"],["PG","Papua New Guinea"],["PY","Paraguay"],["PE","Peru"],["PH","Philippines"],["PL","Poland"],["PT","Portugal"],["QA","Qatar"],["RO","Romania"],["RU","Russia"],["RW","Rwanda"],["KN","Saint Kitts and Nevis"],["LC","Saint Lucia"],["VC","Saint Vincent and the Grenadines"],["WS","Samoa"],["SM","San Marino"],["ST","Sao Tome and Principe"],["SA","Saudi Arabia"],["SN","Senegal"],["RS","Serbia"],["SC","Seychelles"],["SL","Sierra Leone"],["SG","Singapore"],["SK","Slovakia"],["SI","Slovenia"],["SB","Solomon Islands"],["SO","Somalia"],["ZA","South Africa"],["KR","South Korea"],["SS","South Sudan"],["ES","Spain"],["LK","Sri Lanka"],["SD","Sudan"],["SR","Suriname"],["SE","Sweden"],["CH","Switzerland"],["SY","Syria"],["TW","Taiwan"],["TJ","Tajikistan"],["TZ","Tanzania"],["TH","Thailand"],["TL","Timor-Leste"],["TG","Togo"],["TO","Tonga"],["TT","Trinidad and Tobago"],["TN","Tunisia"],["TR","Turkey"],["TM","Turkmenistan"],["TV","Tuvalu"],["UG","Uganda"],["UA","Ukraine"],["AE","United Arab Emirates"],["GB","United Kingdom"],["US","United States"],["UY","Uruguay"],["UZ","Uzbekistan"],["VU","Vanuatu"],["VA","Vatican City"],["VE","Venezuela"],["VN","Vietnam"],["YE","Yemen"],["ZM","Zambia"],["ZW","Zimbabwe"]])}});function py(e,t,r,n){let a=+e,s=a===a-a%1&&a>=t&&a<=r;return s&&n.set(a),s}var Ro=class extends Me{idle;robin;Fork(t){this.robin.push(t),this.idle&&(this.idle=!1,setTimeout(()=>{this.tick()},0))}tick(){let t=Date.now(),r=!0;for(;r;)this.robin.length===0?(this.idle=!0,r=!1):(this.robin.shift()(),Date.now()-t>40&&(setTimeout(()=>{this.tick()},0),r=!1))}constructor(){super(),this.idle=!0,this.robin=[]}},Oo=class extends Me{init;c;pending;r;constructor(){super(),this.c=!1,this.pending=null,this.r=[],this.init=1}};function gy(e,t,r,n){return{seatNo:e,username:t,isAssigned:r,isProcessing:n}}function hy(e,t){return{name:e,status:t}}function Xt(e,t,r){return()=>n=>{let a;if(typeof n=="object"&&n!=null){let l={};if(typeof t=="string"){let c=n[t];a=nf(p=>!H(p,null)&&p[0]==c,r)}else{let c=[void 0],p;for(var s in t)if((h=>n.hasOwnProperty(h)&&(c[0]=t[h],!0))(s))break;a=c[0]}return l.$=a,Ze(c=>{let p=c[0],h=c[1],w=c[2],u=c[3];if(p==null){let x=w()(n);h&&delete x[t],l.$0=x;return}else return u===0?void(l[p]=w()(n[h])):u===1?void(l[p]=n.hasOwnProperty(h)?m(w()(n[h])):null):Pe("Invalid field option kind")},U(r,a)[1]),e===void 0?l:e(l)}else return n}}function ee(){return()=>e=>e}function mc(e,t){return()=>r=>{let n={};return Ze(a=>{let s=a[0],l=a[1],c=a[2];if(c===0){n[s]=l()(r[s]);return}else if(c===1){let p=r[s];return p==null?null:void(n[s]=l()(p.$0))}else return c===2?r.hasOwnProperty(s)?void(n[s]=l()(r[s])):null:c===3?r[s]===void 0?void(n[s]=l()(r[s])):null:Pe("Invalid field option kind")},t),n}}function Ga(e,t){return()=>r=>{let n={};return Ze(a=>{let s=a[0],l=a[1],c=a[2];return c===0?r.hasOwnProperty(s)?void(n[s]=l()(r[s])):Pe("Missing mandatory field: "+s):c===1?void(n[s]=r.hasOwnProperty(s)?m(l()(r[s])):null):c===2?r.hasOwnProperty(s)?void(n[s]=l()(r[s])):null:c===3?r[s]===void 0?void(n[s]=l()(r[s])):null:Pe("Invalid field option kind")},t),e===void 0?n:e(n)}}function Ei(e){return by(e)}function by(e){return()=>t=>st(e(),t)}var Ho=class extends Error{constructor(t,r){if(t=="New"&&(t="New_1",r="The given key was not present in the dictionary."),t=="New_1"){let n=r;super(n)}}},Te=ne(e=>class{static{Te=e(this)}static FloatApplyChecked;static FloatGetChecked;static FloatSetChecked;static FloatApplyUnchecked;static FloatGetUnchecked;static FloatSetUnchecked;static IntApplyChecked;static IntGetChecked;static IntSetChecked;static IntApplyUnchecked;static IntGetUnchecked;static IntSetUnchecked;static FileApplyUnchecked;static FileGetUnchecked;static FileSetUnchecked;static DateTimeApplyUnchecked;static DateTimeGetUnchecked;static DateTimeSetUnchecked;static StringListApply;static StringListGet;static StringListSet;static StringApply;static StringGet;static StringSet;static BoolCheckedApply;static EmptyAttr;static{this.EmptyAttr=null,this.BoolCheckedApply=y=>[b=>{b.addEventListener("change",()=>y.Get()!=b.checked?y.Set(b.checked):null)},b=>C=>C!=null&&C.$==1?void(b.checked=C.$0):null,V(b=>m(b),y.View)],this.StringSet=y=>b=>{y.value=b},this.StringGet=y=>m(y.value);let r=vy(),n=my();this.StringApply=y=>ar(r,n,y),this.StringListSet=y=>b=>{let C=y.options;for(let $=0,_=C.length-1;$<=_;$++)(()=>{let E=C.item($);E.selected=jy(E.value,b)})()},this.StringListGet=y=>{let b=y.selectedOptions;return m(Ke(Or(()=>bn(C=>[b.item(C).value],Ao(0,b.length-1)))))};let a=xy(),s=yy();this.StringListApply=y=>ar(a,s,y),this.DateTimeSetUnchecked=y=>b=>{y.value=new Date(b).toLocaleString()},this.DateTimeGetUnchecked=y=>{let b,C,$=y.value;if(hn($))return m(-864e13);{b=0;let _=Xy($);return C=[_!=null&&_.$==1&&(b=_.$0,!0),b],C[0]?m(C[1]):null}};let l=Cy(),c=ky();this.DateTimeApplyUnchecked=y=>ar(l,c,y),this.FileSetUnchecked=()=>()=>null,this.FileGetUnchecked=y=>{let b=y.files;return m(Ke(Or(()=>it(C=>b.item(C),Ao(0,b.length-1)))))};let p=$y(),h=Ay();this.FileApplyUnchecked=y=>Sy(p,h,y),this.IntSetUnchecked=y=>b=>{y.value=String(b)},this.IntGetUnchecked=y=>{let b=y.value;if(hn(b))return m(0);{let C=+b;return C!==C>>0?null:m(C)}};let w=Ty(),u=_y();this.IntApplyUnchecked=y=>ar(w,u,y),this.IntSetChecked=y=>b=>{let C=b.Input;return y.value!=C?void(y.value=C):null},this.IntGetChecked=y=>{let b,C,$=y.value;if(hn($))b=!y.checkValidity||y.checkValidity()?_t.Blank($):_t.Invalid($);else{let _=(C=0,[$a($,{get:()=>C,set:E=>{C=E}}),C]);b=_[0]?_t.Valid(_[1],$):_t.Invalid($)}return m(b)};let x=Vy(),f=Ey();this.IntApplyChecked=y=>ar(x,f,y),this.FloatSetUnchecked=y=>b=>{y.value=String(b)},this.FloatGetUnchecked=y=>{let b=y.value;if(hn(b))return m(0);{let C=+b;return isNaN(C)?null:m(C)}};let T=Ny(),k=By();this.FloatApplyUnchecked=y=>ar(T,k,y),this.FloatSetChecked=y=>b=>{let C=b.Input;return y.value!=C?void(y.value=C):null},this.FloatGetChecked=y=>{let b,C=y.value;if(hn(C))b=!y.checkValidity||y.checkValidity()?_t.Blank(C):_t.Invalid(C);else{let $=+C;b=isNaN($)?_t.Invalid(C):_t.Valid($,C)}return m(b)};let v=Ly(),S=Py();this.FloatApplyChecked=y=>ar(v,S,y)}}),ma=class extends Error{ct;constructor(t,r,n,a){let s;if(t=="New"&&(s=r,t="New_1",r="The operation was canceled.",n=null,a=s),t=="New_1"){let l=r,c=n,p=a;super(l),this.inner=c,this.ct=p}}};function vc(e,t,r,n){let a={DynElem:e,DynFlags:t,DynNodes:r};return Br(a,"OnAfterRender",n),a}var Tn=class e extends N{docNode_1;updates_1;elt;rvUpdates;static TreeNode(t,r){let n=va.Create(r),a=Zd(t),s=st(p=>Fo(p[1]),t.Attrs),l=zn(ct(),Fr,s),c=Fr(l,n.v);return new e(a,c,U(t.Els,0),n)}static New(t,r,n){let a=Ud(t,r,n.docNode),s=va.Create(n.updates);return new e(gm(a),Fr(Fo(a.Attr),s.v),t,s)}constructor(t,r,n,a){super(t,r),this.docNode_1=t,this.updates_1=r,this.elt=n,this.rvUpdates=a}};function jo(){return My()}function ml(e){return F(()=>M(fy(()=>{},zy(e)),()=>(Dy(e),j(null))))}function wy(e,t){return Vi(Ic(e.$0,t.$0))}function fy(e,t){let r=t.Duration;if(r===0)return Y();{let n=a=>{function s(l){return c=>{let p=c-l;return t.Compute(p),e(),p<=r?void requestAnimationFrame(h=>{s(l)(h)}):a()}}requestAnimationFrame(l=>{s(l)(l)})};return _a((a,s,l)=>n.apply(null,[a,s,l]))}}function Vi(e){return{$:0,$0:e}}function Ra(e){return Vi(Qy(it(Ry,e)))}function xo(){return Vi(Mc())}function Wo(){return Pc.BatchUpdatesEnabled}function vl(e){let t=[0];function r(){return F(()=>M(e,()=>{let n=t[0];return H(n,1)?(t[0]=0,Y()):H(n,2)?(t[0]=1,r()):Y()}))}return()=>{let n=t[0];H(n,0)?(t[0]=1,Sw(r(),null)):H(n,1)&&(t[0]=2)}}function an(e,t,r){let n=e(t);n[0](r),vn(n[1](r),n[2])}function yc(){return Te.StringApply}function xc(){return Te.FloatApplyUnchecked}function kc(){return Te.BoolCheckedApply}function Cc(){return Te.DateTimeApplyUnchecked}function Sc(){return Te.FileApplyUnchecked}function Ac(){return Te.StringListApply}function ar(e,t,r){let n;return n=null,[a=>{let s=()=>{r.UpdateMaybe(l=>{let c;return n=e(a),n!=null&&n.$==1&&!H(n.$0,l)&&(c=[n,n.$0],!0)?c[0]:null})};a.addEventListener("change",s),a.addEventListener("input",s),a.addEventListener("keypress",s)},a=>{let s=t(a);return l=>l==null?null:s(l.$0)},V(a=>{let s;return n!=null&&n.$==1&&H(n.$0,a)&&(s=n.$0,!0)?null:m(a)},r.View)]}function my(){return Te.StringSet}function vy(){return Te.StringGet}function yy(){return Te.StringListSet}function xy(){return Te.StringListGet}function ky(){return Te.DateTimeSetUnchecked}function Cy(){return Te.DateTimeGetUnchecked}function Sy(e,t,r){let n;return n=null,[a=>{a.addEventListener("change",()=>{r.UpdateMaybe(s=>{let l;return n=e(a),n!=null&&n.$==1&&n.$0!==s&&(l=[n,n.$0],!0)?l[0]:null})})},a=>{let s=t(a);return l=>l==null?null:s(l.$0)},V(a=>{let s;return n!=null&&n.$==1&&H(n.$0,a)&&(s=n.$0,!0)?null:m(a)},r.View)]}function Ay(){return Te.FileSetUnchecked}function $y(){return Te.FileGetUnchecked}function _y(){return Te.IntSetUnchecked}function Ty(){return Te.IntGetUnchecked}function Ey(){return Te.IntSetChecked}function Vy(){return Te.IntGetChecked}function By(){return Te.FloatSetUnchecked}function Ny(){return Te.FloatGetUnchecked}function Py(){return Te.FloatSetChecked}function Ly(){return Te.FloatGetChecked}function Iy(e,t){return{Parse:e,Write:t}}function $c(e,t){let r;switch(e.$==1?t.$==1?(e.$1,t.$1,H(e.$0,t.$0)?(r=[t.$0,t.$1,e.$0,e.$1],1):2):2:0){case 0:return m(t);case 1:return $c(r[3],r[1]);case 2:return null}}var Uo=class extends Me{Async(t,r,n,a,s){hl(!0,t,r,n,a,s,()=>{hl(!0,t,r,n,a,s,void 0)})}},_c=ne(e=>class{static{_c=e(this)}static euVat;static{this.euVat=qp([["AT",20],["BE",21],["BG",20],["HR",25],["CY",19],["CZ",21],["DK",25],["EE",22],["FI",24],["FR",20],["DE",19],["GR",24],["HU",27],["IE",23],["IT",22],["LV",21],["LT",21],["LU",17],["MT",18],["NL",21],["PL",23],["PT",23],["RO",19],["SK",20],["SI",22],["ES",21],["SE",25]])}}),qo=class{toString(){return this=="active"?"active":"pending"}$},jr=class e extends qe{name;fillWith;get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}get AsChoiceView(){return Ni(this.fillWith)}constructor(t,r){super(),this.name=t,this.fillWith=r}},Bi=ne(e=>class{static{Bi=e(this)}static billingCache;static{this.billingCache=null}});function hn(e){return Tw(Jy,e)}var _t=class e{get Input(){return this.$==1?this.$0:this.$==2?this.$0:this.$1}static Blank(t){return Fe(e,{$:2,$0:t})}static Invalid(t){return Fe(e,{$:1,$0:t})}static Valid(t,r){return Fe(e,{$:0,$0:t,$1:r})}$;$0;$1},Ko=class e extends qe{name;fillWith;get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}constructor(t,r){super(),this.name=t,this.fillWith=r}},Zo=class e extends qe{name;fillWith;get Value(){return this.fillWith}WithName(t){return new e(t,this.fillWith)}get Name(){return this.name}constructor(t,r){super(),this.name=t,this.fillWith=r}};function Ni(e){return{$:0,$0:e}}function kr(e){return{$:1,$0:e}}var va=class e{c;s;v;static Create(t){let r;return r=null,r=e.New(t,null,()=>{let n;return n=r.s,n===null&&(n=Wf(r.c()),r.s=n,Md(n,()=>{r.s=null})),n}),r}static New(t,r,n){return Fe(e,{c:t,s:r,v:n})}},Yo=class extends Me{d;GetEnumerator(){return ae(it(t=>t.V,this.d))}constructor(t){super(),this.d=t}};function Tc(e,t){return{PreviousNodes:e,Top:t}}function Ec(){return Dn(new mt("New_3"))}function Vc(e){let t=[];function r(s,l){for(;;)switch(s){case 0:if(l!=null&&l.$==0){let c=l.$1,p=l.$0;r(0,p),l=c}else if(l!=null&&l.$==1)l=l.$0,s=1;else if(l!=null&&l.$==2)l=l.$0.Current;else if(l!=null&&l.$==6){let c=l.$0.Holes;return(p=>h=>{Ze(p,h)})(a)(c)}else return null;break;case 1:t.push(l),l=l.Children,s=0;break}}function n(s){return r(0,s)}function a(s){return r(1,s)}return n(e),Dn(new mt("New_2",t))}function Dn(e){return{$:0,$0:e}}function Pi(e,t){return Dn(rx(e,t.$0))}function Bc(e,t){return Dn(nx(e.$0,t.$0))}function Li(e){return Wr(e.$0)}function Fy(e,t){return Dn(ax(e.$0,t.$0))}function My(){return Lc.UseAnimations}function zy(e){return Gy(Ta(t=>t.$==1?m(t.$0):null,Fc(e.$0)))}function Dy(e){Ze(t=>{t.$==0&&t.$0()},Fc(e.$0))}function Gy(e){let t=Mn(e),r=ge(t);if(r===0)return Oy();if(r===1)return U(t,0);{let n=qw(it(s=>s.Duration,t)),a=st(s=>Hy(n,s),t);return Nc(n,s=>{Ze(l=>{l.Compute(s)},a)})}}function Ry(e){return e.$0}function Oy(e){return Nc(0,()=>e)}function Nc(e,t){return{Compute:t,Duration:e}}function Hy(e,t){let r=t.Compute,n=t.Duration,a=fx(()=>t.Compute(t.Duration));return{Compute:s=>s>=n?a.f():r(s),Duration:e}}var Pc=ne(e=>class{static{Pc=e(this)}static BatchUpdatesEnabled;static{this.BatchUpdatesEnabled=!0}});function ko(e){let t=[],r;for(var n in e)t.push.apply(t,e[n]);return t}function Jo(){return Pe("The input sequence has an insufficient number of elements.")}function jy(e,t){let r=!0,n=0,a=ge(t);for(;r&&n<a;)H(t[n],e)?r=!1:n=n+1;return!r}function Wy(){return Pe("The input must be non-negative.")}function Uy(e,t){for(let r=0,n=t.length-1;r<=n;r++)t[r]=e(r,t[r]);return t}function qy(e,t){for(let r=0,n=t.length-1;r<=n;r++)t[r]=e(t[r])}var Xo=class extends Me{d;GetEnumerator(){return ae(it(t=>t.K,this.d))}constructor(t){super(),this.d=t}},Ot=class e extends Me{tree;Equals(t){return this.Count===t.Count&&jw(H,this,t)}GetHashCode(){return wr(Ke(this))}GetEnumerator(){return ae(it(t=>({K:t.Key,V:t.Value}),Ii(!1,this.tree)))}get Count(){let t=this.tree;return t==null?0:t.Count}Add_1(t,r){return new e("New_1",hx(En.New(t,r),this.tree))}get IsEmpty(){return this.tree==null}get Tree(){return this.tree}CompareTo0(t){return Ww((r,n)=>ft(r,n),this,t)}constructor(t,r){let n;if(t=="New"&&(n=r,t="New_1",r=ox(n)),t=="New_1"){let a=r;super(),this.tree=a}}};function Ky(e){return new Ot("New_1",gx(it(t=>En.New(t[0],t[1]),e)))}function yl(e,t,r){return wd((n,a)=>e(a.Key,a.Value,n),r,Ii(!0,t.Tree))}function Zy(e){return it(t=>[t.Key,t.Value],Ii(!1,e.Tree))}function Yy(e){e.splice(0,ge(e))}function Jy(e){return e.match(new RegExp("\\s"))!==null}function Xy(e){let t=Date.parse(e);return isNaN(t)?null:m(t)}var Lc=ne(e=>class{static{Lc=e(this)}static UseAnimations;static CubicInOut;static{this.CubicInOut=Qo.Custom(r=>{let n=r*r;return 3*n-2*(n*r)}),this.UseAnimations=!0}});function Ic(e,t){return e.$==0?t:t.$==0?e:{$:2,$0:e,$1:t}}function Fc(e){let t=[];function r(n){for(;;){if(n.$==1)return t.push(n.$0);if(n.$==2){let a=n.$1,s=n.$0;r(s),n=a}else return n.$==3?Ze(a=>{t.push(a)},n.$0):null}}return r(e),t.slice(0)}function Qy(e){let t=Mn(e);return zn(Mc(),Ic,t)}function Mc(){return Dc.Empty}function ex(e,t,r,n,a){return{Node:e,Left:t,Right:r,Height:n,Count:a}}var En=class e{Key;Value;Equals(t){return H(this.Key,t.Key)}GetHashCode(){return wr(this.Key)}CompareTo0(t){return ft(this.Key,t.Key)}static New(t,r){return Fe(e,{Key:t,Value:r})}};function tx(e,t){return{subscriptionId:e,cancelAtPeriodEnd:t}}function zc(e,t,r){return{subscriptionId:e,githubAssignedName:t,position:r}}var Qo=class e extends Me{transformTime;static Custom(t){return new e(t)}constructor(t){super(),this.transformTime=t}};function rx(e,t){return new mt("New_2",Ln(e,Wr(t)))}function nx(e,t){let r=new mt("New_2",Wr(t));return r.ExceptWith(Wr(e)),r}function Wr(e){let t=of(e.Count,void 0);return e.CopyTo(t,0),t}function ax(e,t){let r=new mt("New_2",Wr(e));return r.IntersectWith(Wr(t)),r}function ox(e){let t=Ke(it(r=>En.New(r[0],r[1]),hi(r=>r[0],Zw(e))));return Sd(t),xa(t,0,t.length-1)}function ix(e,t){let r=t.IsEmpty?"":"?"+lx(t);return"/"+sx(e)+r}function sx(e){let t,r=[];return t=!0,Wd(n=>{Nw(n)||(t?t=!1:r.push("/"),r.push(n))},e),Pw("",Ke(r))}function lx(e){return Ut("&",it(t=>t[0]+"="+t[1],Zy(e)))}function dx(e,t){let r;if(t!=null&&t.$==1){let n=t.$0[1],a=t.$0[0],s=[];for(r=a.nextSibling;r!==n;)s.push(r),r=r.nextSibling;return ya(s)}else{let n=e.childNodes.length,a=e.childNodes,s=kd(n,l=>a[l]);return ya(s)}}function cx(e,t){let r=e.$0;return ya(Ln(n=>mi(a=>n!==a,r),t.$0))}function ux(e,t){Ze(e,t.$0)}function px(e){let t=[];function r(n){for(;;)if(n!=null&&n.$==2)n=n.$0.Current;else{if(n!=null&&n.$==1)return t.push(n.$0.El);if(n==null)return null;if(n!=null&&n.$==5)return t.push(n.$0);if(n!=null&&n.$==4)return t.push(n.$0.Text);if(n!=null&&n.$==6){let a=n.$0.Els;return(s=>l=>{Ze(s,l)})(s=>{s==null||s.constructor===Object?r(s):t.push(s)})(a)}else{let a=n.$1,s=n.$0;r(s),n=a}}}return r(e.Children),ya(Mn(t))}function ya(e){return{$:0,$0:e}}function gx(e){let t=Ke(Jw(e));return Sd(t),xa(t,0,t.length-1)}function Ii(e,t){function r(n,a){let s;for(;;){if(n==null)return a.$==1?m([a.$0[0],[a.$0[1],a.$1]]):null;e?(s=n,n=s.Right,a=ye.Cons([s.Node,s.Left],a)):(s=n,n=s.Left,a=ye.Cons([s.Node,s.Right],a))}}return Xw(n=>r(n[0],n[1]),[t,ye.Empty])}function xa(e,t,r){if(r-t+1<=0)return null;{let n=(t+r)/2>>0;return tt(U(e,n),xa(e,t,n-1),xa(e,n+1,r))}}function tt(e,t,r){let n=t==null?0:t.Height,a=r==null?0:r.Height,l=1+(ft(n,a)===1?n:a);return ex(e,t,r,l,1+(t==null?0:t.Count)+(r==null?0:r.Count))}function hx(e,t){return bx((r,n)=>n,e,t)}function bx(e,t,r){let n=wx(t,r),a=n[0];return a==null?xl(n[1],tt(t,null,null)):xl(n[1],tt(e(a.Node,t),a.Left,a.Right))}function wx(e,t){let r=[],n=t,a=!0;for(;a;)if(n==null)a=!1;else{let s=ft(e,n.Node);s===0?a=!1:s===1?(r.unshift([!0,n.Node,n.Left]),n=n.Right):(r.unshift([!1,n.Node,n.Right]),n=n.Left)}return[n,r]}function xl(e,t){let r=a=>a==null?0:a.Height,n=t;for(let a=0,s=ge(e)-1;a<=s;a++){let l=U(e,a);if(l[0]){let c=l[1],p=l[2];if(r(n)>r(p)+1)if(r(n.Left)===r(n.Right)+1){let h=n.Left;n=tt(h.Node,tt(c,p,h.Left),tt(n.Node,h.Right,n.Right))}else n=tt(n.Node,tt(c,p,n.Left),n.Right);else n=tt(c,p,n)}else{let c=l[1],p=l[2];if(r(n)>r(p)+1)if(r(n.Right)===r(n.Left)+1){let h=n.Right;n=tt(h.Node,tt(n.Node,n.Left,h.Left),tt(c,h.Right,p))}else n=tt(n.Node,n.Left,tt(c,n.Right,p));else n=tt(c,n,p)}}return n}function fx(e){return yx(!1,e,mx)}function mx(){let e=this.v();return this.c=!0,this.v=e,this.f=vx,e}function vx(){return this.v}var Dc=ne(e=>class{static{Dc=e(this)}static Empty;static{this.Empty={$:0}}});function yx(e,t,r){return{c:e,v:t,f:r}}var ei=class extends Error{constructor(t,r){if(t=="New_2"){let n=r;super(n)}}};return mp(xx);})();
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)

sweetalert2/dist/sweetalert2.all.js:
  (*!
  * sweetalert2 v11.26.3
  * Released under the MIT License.
  *)
*/
