var qa=Object.defineProperty;var Ve=e=>{throw TypeError(e)};var ya=(e,a,t)=>a in e?qa(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var h=(e,a,t)=>ya(e,typeof a!="symbol"?a+"":a,t),Pe=(e,a,t)=>a.has(e)||Ve("Cannot "+t);var n=(e,a,t)=>(Pe(e,a,"read from private field"),t?t.call(e):a.get(e)),f=(e,a,t)=>a.has(e)?Ve("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,t),p=(e,a,t,s)=>(Pe(e,a,"write to private field"),s?s.call(e,t):a.set(e,t),t),v=(e,a,t)=>(Pe(e,a,"access private method"),t);var Te=(e,a,t,s)=>({set _(o){p(e,a,o,t)},get _(){return n(e,a,s)}});var De=(e,a,t)=>(s,o)=>{let i=-1;return r(0);async function r(d){if(d<=i)throw new Error("next() called multiple times");i=d;let c,l=!1,u;if(e[d]?(u=e[d][0][0],s.req.routeIndex=d):u=d===e.length&&o||void 0,u)try{c=await u(s,()=>r(d+1))}catch(m){if(m instanceof Error&&a)s.error=m,c=await a(m,s),l=!0;else throw m}else s.finalized===!1&&t&&(c=await t(s));return c&&(s.finalized===!1||l)&&(s.res=c),s}},xa=Symbol(),wa=async(e,a=Object.create(null))=>{const{all:t=!1,dot:s=!1}=a,i=(e instanceof oa?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Sa(e,{all:t,dot:s}):{}};async function Sa(e,a){const t=await e.formData();return t?Aa(t,a):{}}function Aa(e,a){const t=Object.create(null);return e.forEach((s,o)=>{a.all||o.endsWith("[]")?Ca(t,o,s):t[o]=s}),a.dot&&Object.entries(t).forEach(([s,o])=>{s.includes(".")&&(Oa(t,s,o),delete t[s])}),t}var Ca=(e,a,t)=>{e[a]!==void 0?Array.isArray(e[a])?e[a].push(t):e[a]=[e[a],t]:a.endsWith("[]")?e[a]=[t]:e[a]=t},Oa=(e,a,t)=>{let s=e;const o=a.split(".");o.forEach((i,r)=>{r===o.length-1?s[i]=t:((!s[i]||typeof s[i]!="object"||Array.isArray(s[i])||s[i]instanceof File)&&(s[i]=Object.create(null)),s=s[i])})},Ze=e=>{const a=e.split("/");return a[0]===""&&a.shift(),a},La=e=>{const{groups:a,path:t}=Ia(e),s=Ze(t);return za(s,a)},Ia=e=>{const a=[];return e=e.replace(/\{[^}]+\}/g,(t,s)=>{const o=`@${s}`;return a.push([o,t]),o}),{groups:a,path:e}},za=(e,a)=>{for(let t=a.length-1;t>=0;t--){const[s]=a[t];for(let o=e.length-1;o>=0;o--)if(e[o].includes(s)){e[o]=e[o].replace(s,a[t][1]);break}}return e},Ce={},ka=(e,a)=>{if(e==="*")return"*";const t=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(t){const s=`${e}#${a}`;return Ce[s]||(t[2]?Ce[s]=a&&a[0]!==":"&&a[0]!=="*"?[s,t[1],new RegExp(`^${t[2]}(?=/${a})`)]:[e,t[1],new RegExp(`^${t[2]}$`)]:Ce[s]=[e,t[1],!0]),Ce[s]}return null},$e=(e,a)=>{try{return a(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,t=>{try{return a(t)}catch{return t}})}},Ea=e=>$e(e,decodeURI),ea=e=>{const a=e.url,t=a.indexOf("/",a.indexOf(":")+4);let s=t;for(;s<a.length;s++){const o=a.charCodeAt(s);if(o===37){const i=a.indexOf("?",s),r=a.slice(t,i===-1?void 0:i);return Ea(r.includes("%25")?r.replace(/%25/g,"%2525"):r)}else if(o===63)break}return a.slice(t,s)},Fa=e=>{const a=ea(e);return a.length>1&&a.at(-1)==="/"?a.slice(0,-1):a},te=(e,a,...t)=>(t.length&&(a=te(a,...t)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${a==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(a==null?void 0:a[0])==="/"?a.slice(1):a}`}`),aa=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const a=e.split("/"),t=[];let s="";return a.forEach(o=>{if(o!==""&&!/\:/.test(o))s+="/"+o;else if(/\:/.test(o))if(/\?/.test(o)){t.length===0&&s===""?t.push("/"):t.push(s);const i=o.replace("?","");s+="/"+i,t.push(s)}else s+="/"+o}),t.filter((o,i,r)=>r.indexOf(o)===i)},Ne=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?$e(e,sa):e):e,ta=(e,a,t)=>{let s;if(!t&&a&&!/[%+]/.test(a)){let r=e.indexOf("?",8);if(r===-1)return;for(e.startsWith(a,r+1)||(r=e.indexOf(`&${a}`,r+1));r!==-1;){const d=e.charCodeAt(r+a.length+1);if(d===61){const c=r+a.length+2,l=e.indexOf("&",c);return Ne(e.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";r=e.indexOf(`&${a}`,r+1)}if(s=/[%+]/.test(e),!s)return}const o={};s??(s=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const r=e.indexOf("&",i+1);let d=e.indexOf("=",i);d>r&&r!==-1&&(d=-1);let c=e.slice(i+1,d===-1?r===-1?void 0:r:d);if(s&&(c=Ne(c)),i=r,c==="")continue;let l;d===-1?l="":(l=e.slice(d+1,r===-1?void 0:r),s&&(l=Ne(l))),t?(o[c]&&Array.isArray(o[c])||(o[c]=[]),o[c].push(l)):o[c]??(o[c]=l)}return a?o[a]:o},Pa=ta,Na=(e,a)=>ta(e,a,!0),sa=decodeURIComponent,He=e=>$e(e,sa),ie,L,W,ia,na,je,D,Ke,oa=(Ke=class{constructor(e,a="/",t=[[]]){f(this,W);h(this,"raw");f(this,ie);f(this,L);h(this,"routeIndex",0);h(this,"path");h(this,"bodyCache",{});f(this,D,e=>{const{bodyCache:a,raw:t}=this,s=a[e];if(s)return s;const o=Object.keys(a)[0];return o?a[o].then(i=>(o==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):a[e]=t[e]()});this.raw=e,this.path=a,p(this,L,t),p(this,ie,{})}param(e){return e?v(this,W,ia).call(this,e):v(this,W,na).call(this)}query(e){return Pa(this.url,e)}queries(e){return Na(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const a={};return this.raw.headers.forEach((t,s)=>{a[s]=t}),a}async parseBody(e){var a;return(a=this.bodyCache).parsedBody??(a.parsedBody=await wa(this,e))}json(){return n(this,D).call(this,"text").then(e=>JSON.parse(e))}text(){return n(this,D).call(this,"text")}arrayBuffer(){return n(this,D).call(this,"arrayBuffer")}blob(){return n(this,D).call(this,"blob")}formData(){return n(this,D).call(this,"formData")}addValidatedData(e,a){n(this,ie)[e]=a}valid(e){return n(this,ie)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[xa](){return n(this,L)}get matchedRoutes(){return n(this,L)[0].map(([[,e]])=>e)}get routePath(){return n(this,L)[0].map(([[,e]])=>e)[this.routeIndex].path}},ie=new WeakMap,L=new WeakMap,W=new WeakSet,ia=function(e){const a=n(this,L)[0][this.routeIndex][1][e],t=v(this,W,je).call(this,a);return t&&/\%/.test(t)?He(t):t},na=function(){const e={},a=Object.keys(n(this,L)[0][this.routeIndex][1]);for(const t of a){const s=v(this,W,je).call(this,n(this,L)[0][this.routeIndex][1][t]);s!==void 0&&(e[t]=/\%/.test(s)?He(s):s)}return e},je=function(e){return n(this,L)[1]?n(this,L)[1][e]:e},D=new WeakMap,Ke),Ra={Stringify:1},ra=async(e,a,t,s,o)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(o?o[0]+=e:o=[e],Promise.all(i.map(d=>d({phase:a,buffer:o,context:s}))).then(d=>Promise.all(d.filter(Boolean).map(c=>ra(c,a,!1,s,o))).then(()=>o[0]))):Promise.resolve(e)},ja="text/plain; charset=UTF-8",Re=(e,a)=>({"Content-Type":e,...a}),ve,be,N,ne,R,O,qe,re,le,U,ye,xe,H,se,Ge,$a=(Ge=class{constructor(e,a){f(this,H);f(this,ve);f(this,be);h(this,"env",{});f(this,N);h(this,"finalized",!1);h(this,"error");f(this,ne);f(this,R);f(this,O);f(this,qe);f(this,re);f(this,le);f(this,U);f(this,ye);f(this,xe);h(this,"render",(...e)=>(n(this,re)??p(this,re,a=>this.html(a)),n(this,re).call(this,...e)));h(this,"setLayout",e=>p(this,qe,e));h(this,"getLayout",()=>n(this,qe));h(this,"setRenderer",e=>{p(this,re,e)});h(this,"header",(e,a,t)=>{this.finalized&&p(this,O,new Response(n(this,O).body,n(this,O)));const s=n(this,O)?n(this,O).headers:n(this,U)??p(this,U,new Headers);a===void 0?s.delete(e):t!=null&&t.append?s.append(e,a):s.set(e,a)});h(this,"status",e=>{p(this,ne,e)});h(this,"set",(e,a)=>{n(this,N)??p(this,N,new Map),n(this,N).set(e,a)});h(this,"get",e=>n(this,N)?n(this,N).get(e):void 0);h(this,"newResponse",(...e)=>v(this,H,se).call(this,...e));h(this,"body",(e,a,t)=>v(this,H,se).call(this,e,a,t));h(this,"text",(e,a,t)=>!n(this,U)&&!n(this,ne)&&!a&&!t&&!this.finalized?new Response(e):v(this,H,se).call(this,e,a,Re(ja,t)));h(this,"json",(e,a,t)=>v(this,H,se).call(this,JSON.stringify(e),a,Re("application/json",t)));h(this,"html",(e,a,t)=>{const s=o=>v(this,H,se).call(this,o,a,Re("text/html; charset=UTF-8",t));return typeof e=="object"?ra(e,Ra.Stringify,!1,{}).then(s):s(e)});h(this,"redirect",(e,a)=>{const t=String(e);return this.header("Location",/[^\x00-\xFF]/.test(t)?encodeURI(t):t),this.newResponse(null,a??302)});h(this,"notFound",()=>(n(this,le)??p(this,le,()=>new Response),n(this,le).call(this,this)));p(this,ve,e),a&&(p(this,R,a.executionCtx),this.env=a.env,p(this,le,a.notFoundHandler),p(this,xe,a.path),p(this,ye,a.matchResult))}get req(){return n(this,be)??p(this,be,new oa(n(this,ve),n(this,xe),n(this,ye))),n(this,be)}get event(){if(n(this,R)&&"respondWith"in n(this,R))return n(this,R);throw Error("This context has no FetchEvent")}get executionCtx(){if(n(this,R))return n(this,R);throw Error("This context has no ExecutionContext")}get res(){return n(this,O)||p(this,O,new Response(null,{headers:n(this,U)??p(this,U,new Headers)}))}set res(e){if(n(this,O)&&e){e=new Response(e.body,e);for(const[a,t]of n(this,O).headers.entries())if(a!=="content-type")if(a==="set-cookie"){const s=n(this,O).headers.getSetCookie();e.headers.delete("set-cookie");for(const o of s)e.headers.append("set-cookie",o)}else e.headers.set(a,t)}p(this,O,e),this.finalized=!0}get var(){return n(this,N)?Object.fromEntries(n(this,N)):{}}},ve=new WeakMap,be=new WeakMap,N=new WeakMap,ne=new WeakMap,R=new WeakMap,O=new WeakMap,qe=new WeakMap,re=new WeakMap,le=new WeakMap,U=new WeakMap,ye=new WeakMap,xe=new WeakMap,H=new WeakSet,se=function(e,a,t){const s=n(this,O)?new Headers(n(this,O).headers):n(this,U)??new Headers;if(typeof a=="object"&&"headers"in a){const i=a.headers instanceof Headers?a.headers:new Headers(a.headers);for(const[r,d]of i)r.toLowerCase()==="set-cookie"?s.append(r,d):s.set(r,d)}if(t)for(const[i,r]of Object.entries(t))if(typeof r=="string")s.set(i,r);else{s.delete(i);for(const d of r)s.append(i,d)}const o=typeof a=="number"?a:(a==null?void 0:a.status)??n(this,ne);return new Response(e,{status:o,headers:s})},Ge),y="ALL",Wa="all",Va=["get","post","put","delete","options","patch"],la="Can not add a route since the matcher is already built.",ca=class extends Error{},Ta="__COMPOSED_HANDLER",Da=e=>e.text("404 Not Found",404),_e=(e,a)=>{if("getResponse"in e){const t=e.getResponse();return a.newResponse(t.body,t)}return console.error(e),a.text("Internal Server Error",500)},I,x,da,z,K,Oe,Le,ce,Ha=(ce=class{constructor(a={}){f(this,x);h(this,"get");h(this,"post");h(this,"put");h(this,"delete");h(this,"options");h(this,"patch");h(this,"all");h(this,"on");h(this,"use");h(this,"router");h(this,"getPath");h(this,"_basePath","/");f(this,I,"/");h(this,"routes",[]);f(this,z,Da);h(this,"errorHandler",_e);h(this,"onError",a=>(this.errorHandler=a,this));h(this,"notFound",a=>(p(this,z,a),this));h(this,"fetch",(a,...t)=>v(this,x,Le).call(this,a,t[1],t[0],a.method));h(this,"request",(a,t,s,o)=>a instanceof Request?this.fetch(t?new Request(a,t):a,s,o):(a=a.toString(),this.fetch(new Request(/^https?:\/\//.test(a)?a:`http://localhost${te("/",a)}`,t),s,o)));h(this,"fire",()=>{addEventListener("fetch",a=>{a.respondWith(v(this,x,Le).call(this,a.request,a,void 0,a.request.method))})});[...Va,Wa].forEach(i=>{this[i]=(r,...d)=>(typeof r=="string"?p(this,I,r):v(this,x,K).call(this,i,n(this,I),r),d.forEach(c=>{v(this,x,K).call(this,i,n(this,I),c)}),this)}),this.on=(i,r,...d)=>{for(const c of[r].flat()){p(this,I,c);for(const l of[i].flat())d.map(u=>{v(this,x,K).call(this,l.toUpperCase(),n(this,I),u)})}return this},this.use=(i,...r)=>(typeof i=="string"?p(this,I,i):(p(this,I,"*"),r.unshift(i)),r.forEach(d=>{v(this,x,K).call(this,y,n(this,I),d)}),this);const{strict:s,...o}=a;Object.assign(this,o),this.getPath=s??!0?a.getPath??ea:Fa}route(a,t){const s=this.basePath(a);return t.routes.map(o=>{var r;let i;t.errorHandler===_e?i=o.handler:(i=async(d,c)=>(await De([],t.errorHandler)(d,()=>o.handler(d,c))).res,i[Ta]=o.handler),v(r=s,x,K).call(r,o.method,o.path,i)}),this}basePath(a){const t=v(this,x,da).call(this);return t._basePath=te(this._basePath,a),t}mount(a,t,s){let o,i;s&&(typeof s=="function"?i=s:(i=s.optionHandler,s.replaceRequest===!1?o=c=>c:o=s.replaceRequest));const r=i?c=>{const l=i(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};o||(o=(()=>{const c=te(this._basePath,a),l=c==="/"?0:c.length;return u=>{const m=new URL(u.url);return m.pathname=m.pathname.slice(l)||"/",new Request(m,u)}})());const d=async(c,l)=>{const u=await t(o(c.req.raw),...r(c));if(u)return u;await l()};return v(this,x,K).call(this,y,te(a,"*"),d),this}},I=new WeakMap,x=new WeakSet,da=function(){const a=new ce({router:this.router,getPath:this.getPath});return a.errorHandler=this.errorHandler,p(a,z,n(this,z)),a.routes=this.routes,a},z=new WeakMap,K=function(a,t,s){a=a.toUpperCase(),t=te(this._basePath,t);const o={basePath:this._basePath,path:t,method:a,handler:s};this.router.add(a,t,[s,o]),this.routes.push(o)},Oe=function(a,t){if(a instanceof Error)return this.errorHandler(a,t);throw a},Le=function(a,t,s,o){if(o==="HEAD")return(async()=>new Response(null,await v(this,x,Le).call(this,a,t,s,"GET")))();const i=this.getPath(a,{env:s}),r=this.router.match(o,i),d=new $a(a,{path:i,matchResult:r,env:s,executionCtx:t,notFoundHandler:n(this,z)});if(r[0].length===1){let l;try{l=r[0][0][0][0](d,async()=>{d.res=await n(this,z).call(this,d)})}catch(u){return v(this,x,Oe).call(this,u,d)}return l instanceof Promise?l.then(u=>u||(d.finalized?d.res:n(this,z).call(this,d))).catch(u=>v(this,x,Oe).call(this,u,d)):l??n(this,z).call(this,d)}const c=De(r[0],this.errorHandler,n(this,z));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return v(this,x,Oe).call(this,l,d)}})()},ce),ua=[];function _a(e,a){const t=this.buildAllMatchers(),s=((o,i)=>{const r=t[o]||t[y],d=r[2][i];if(d)return d;const c=i.match(r[0]);if(!c)return[[],ua];const l=c.indexOf("",1);return[r[1][l],c]});return this.match=s,s(e,a)}var ze="[^/]+",fe=".*",ge="(?:|/.*)",oe=Symbol(),Ma=new Set(".\\+*[^]$()");function Ba(e,a){return e.length===1?a.length===1?e<a?-1:1:-1:a.length===1||e===fe||e===ge?1:a===fe||a===ge?-1:e===ze?1:a===ze?-1:e.length===a.length?e<a?-1:1:a.length-e.length}var Q,J,k,ee,Ya=(ee=class{constructor(){f(this,Q);f(this,J);f(this,k,Object.create(null))}insert(a,t,s,o,i){if(a.length===0){if(n(this,Q)!==void 0)throw oe;if(i)return;p(this,Q,t);return}const[r,...d]=a,c=r==="*"?d.length===0?["","",fe]:["","",ze]:r==="/*"?["","",ge]:r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const u=c[1];let m=c[2]||ze;if(u&&c[2]&&(m===".*"||(m=m.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(m))))throw oe;if(l=n(this,k)[m],!l){if(Object.keys(n(this,k)).some(g=>g!==fe&&g!==ge))throw oe;if(i)return;l=n(this,k)[m]=new ee,u!==""&&p(l,J,o.varIndex++)}!i&&u!==""&&s.push([u,n(l,J)])}else if(l=n(this,k)[r],!l){if(Object.keys(n(this,k)).some(u=>u.length>1&&u!==fe&&u!==ge))throw oe;if(i)return;l=n(this,k)[r]=new ee}l.insert(d,t,s,o,i)}buildRegExpStr(){const t=Object.keys(n(this,k)).sort(Ba).map(s=>{const o=n(this,k)[s];return(typeof n(o,J)=="number"?`(${s})@${n(o,J)}`:Ma.has(s)?`\\${s}`:s)+o.buildRegExpStr()});return typeof n(this,Q)=="number"&&t.unshift(`#${n(this,Q)}`),t.length===0?"":t.length===1?t[0]:"(?:"+t.join("|")+")"}},Q=new WeakMap,J=new WeakMap,k=new WeakMap,ee),ke,we,Ue,Ka=(Ue=class{constructor(){f(this,ke,{varIndex:0});f(this,we,new Ya)}insert(e,a,t){const s=[],o=[];for(let r=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const l=`@\\${r}`;return o[r]=[l,c],r++,d=!0,l}),!d)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let r=o.length-1;r>=0;r--){const[d]=o[r];for(let c=i.length-1;c>=0;c--)if(i[c].indexOf(d)!==-1){i[c]=i[c].replace(d,o[r][1]);break}}return n(this,we).insert(i,a,s,n(this,ke),t),s}buildRegExp(){let e=n(this,we).buildRegExpStr();if(e==="")return[/^$/,[],[]];let a=0;const t=[],s=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(o,i,r)=>i!==void 0?(t[++a]=Number(i),"$()"):(r!==void 0&&(s[Number(r)]=++a),"")),[new RegExp(`^${e}`),t,s]}},ke=new WeakMap,we=new WeakMap,Ue),Ga=[/^$/,[],Object.create(null)],Ie=Object.create(null);function ma(e){return Ie[e]??(Ie[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(a,t)=>t?`\\${t}`:"(?:|/.*)")}$`))}function Ua(){Ie=Object.create(null)}function Qa(e){var l;const a=new Ka,t=[];if(e.length===0)return Ga;const s=e.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,m],[g,q])=>u?1:g?-1:m.length-q.length),o=Object.create(null);for(let u=0,m=-1,g=s.length;u<g;u++){const[q,w,E]=s[u];q?o[w]=[E.map(([S])=>[S,Object.create(null)]),ua]:m++;let b;try{b=a.insert(w,m,q)}catch(S){throw S===oe?new ca(w):S}q||(t[m]=E.map(([S,V])=>{const Se=Object.create(null);for(V-=1;V>=0;V--){const[Ae,F]=b[V];Se[Ae]=F}return[S,Se]}))}const[i,r,d]=a.buildRegExp();for(let u=0,m=t.length;u<m;u++)for(let g=0,q=t[u].length;g<q;g++){const w=(l=t[u][g])==null?void 0:l[1];if(!w)continue;const E=Object.keys(w);for(let b=0,S=E.length;b<S;b++)w[E[b]]=d[w[E[b]]]}const c=[];for(const u in r)c[u]=t[r[u]];return[i,c,o]}function ae(e,a){if(e){for(const t of Object.keys(e).sort((s,o)=>o.length-s.length))if(ma(t).test(a))return[...e[t]]}}var _,M,Ee,pa,Qe,Ja=(Qe=class{constructor(){f(this,Ee);h(this,"name","RegExpRouter");f(this,_);f(this,M);h(this,"match",_a);p(this,_,{[y]:Object.create(null)}),p(this,M,{[y]:Object.create(null)})}add(e,a,t){var d;const s=n(this,_),o=n(this,M);if(!s||!o)throw new Error(la);s[e]||[s,o].forEach(c=>{c[e]=Object.create(null),Object.keys(c[y]).forEach(l=>{c[e][l]=[...c[y][l]]})}),a==="/*"&&(a="*");const i=(a.match(/\/:/g)||[]).length;if(/\*$/.test(a)){const c=ma(a);e===y?Object.keys(s).forEach(l=>{var u;(u=s[l])[a]||(u[a]=ae(s[l],a)||ae(s[y],a)||[])}):(d=s[e])[a]||(d[a]=ae(s[e],a)||ae(s[y],a)||[]),Object.keys(s).forEach(l=>{(e===y||e===l)&&Object.keys(s[l]).forEach(u=>{c.test(u)&&s[l][u].push([t,i])})}),Object.keys(o).forEach(l=>{(e===y||e===l)&&Object.keys(o[l]).forEach(u=>c.test(u)&&o[l][u].push([t,i]))});return}const r=aa(a)||[a];for(let c=0,l=r.length;c<l;c++){const u=r[c];Object.keys(o).forEach(m=>{var g;(e===y||e===m)&&((g=o[m])[u]||(g[u]=[...ae(s[m],u)||ae(s[y],u)||[]]),o[m][u].push([t,i-l+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(n(this,M)).concat(Object.keys(n(this,_))).forEach(a=>{e[a]||(e[a]=v(this,Ee,pa).call(this,a))}),p(this,_,p(this,M,void 0)),Ua(),e}},_=new WeakMap,M=new WeakMap,Ee=new WeakSet,pa=function(e){const a=[];let t=e===y;return[n(this,_),n(this,M)].forEach(s=>{const o=s[e]?Object.keys(s[e]).map(i=>[i,s[e][i]]):[];o.length!==0?(t||(t=!0),a.push(...o)):e!==y&&a.push(...Object.keys(s[y]).map(i=>[i,s[y][i]]))}),t?Qa(a):null},Qe),B,j,Je,Xa=(Je=class{constructor(e){h(this,"name","SmartRouter");f(this,B,[]);f(this,j,[]);p(this,B,e.routers)}add(e,a,t){if(!n(this,j))throw new Error(la);n(this,j).push([e,a,t])}match(e,a){if(!n(this,j))throw new Error("Fatal error");const t=n(this,B),s=n(this,j),o=t.length;let i=0,r;for(;i<o;i++){const d=t[i];try{for(let c=0,l=s.length;c<l;c++)d.add(...s[c]);r=d.match(e,a)}catch(c){if(c instanceof ca)continue;throw c}this.match=d.match.bind(d),p(this,B,[d]),p(this,j,void 0);break}if(i===o)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,r}get activeRouter(){if(n(this,j)||n(this,B).length!==1)throw new Error("No active router has been determined yet.");return n(this,B)[0]}},B=new WeakMap,j=new WeakMap,Je),he=Object.create(null),Y,C,X,de,A,$,G,ue,Za=(ue=class{constructor(a,t,s){f(this,$);f(this,Y);f(this,C);f(this,X);f(this,de,0);f(this,A,he);if(p(this,C,s||Object.create(null)),p(this,Y,[]),a&&t){const o=Object.create(null);o[a]={handler:t,possibleKeys:[],score:0},p(this,Y,[o])}p(this,X,[])}insert(a,t,s){p(this,de,++Te(this,de)._);let o=this;const i=La(t),r=[];for(let d=0,c=i.length;d<c;d++){const l=i[d],u=i[d+1],m=ka(l,u),g=Array.isArray(m)?m[0]:l;if(g in n(o,C)){o=n(o,C)[g],m&&r.push(m[1]);continue}n(o,C)[g]=new ue,m&&(n(o,X).push(m),r.push(m[1])),o=n(o,C)[g]}return n(o,Y).push({[a]:{handler:s,possibleKeys:r.filter((d,c,l)=>l.indexOf(d)===c),score:n(this,de)}}),o}search(a,t){var c;const s=[];p(this,A,he);let i=[this];const r=Ze(t),d=[];for(let l=0,u=r.length;l<u;l++){const m=r[l],g=l===u-1,q=[];for(let w=0,E=i.length;w<E;w++){const b=i[w],S=n(b,C)[m];S&&(p(S,A,n(b,A)),g?(n(S,C)["*"]&&s.push(...v(this,$,G).call(this,n(S,C)["*"],a,n(b,A))),s.push(...v(this,$,G).call(this,S,a,n(b,A)))):q.push(S));for(let V=0,Se=n(b,X).length;V<Se;V++){const Ae=n(b,X)[V],F=n(b,A)===he?{}:{...n(b,A)};if(Ae==="*"){const T=n(b,C)["*"];T&&(s.push(...v(this,$,G).call(this,T,a,n(b,A))),p(T,A,F),q.push(T));continue}const[va,We,pe]=Ae;if(!m&&!(pe instanceof RegExp))continue;const P=n(b,C)[va],ba=r.slice(l).join("/");if(pe instanceof RegExp){const T=pe.exec(ba);if(T){if(F[We]=T[0],s.push(...v(this,$,G).call(this,P,a,n(b,A),F)),Object.keys(n(P,C)).length){p(P,A,F);const Fe=((c=T[0].match(/\//))==null?void 0:c.length)??0;(d[Fe]||(d[Fe]=[])).push(P)}continue}}(pe===!0||pe.test(m))&&(F[We]=m,g?(s.push(...v(this,$,G).call(this,P,a,F,n(b,A))),n(P,C)["*"]&&s.push(...v(this,$,G).call(this,n(P,C)["*"],a,F,n(b,A)))):(p(P,A,F),q.push(P)))}}i=q.concat(d.shift()??[])}return s.length>1&&s.sort((l,u)=>l.score-u.score),[s.map(({handler:l,params:u})=>[l,u])]}},Y=new WeakMap,C=new WeakMap,X=new WeakMap,de=new WeakMap,A=new WeakMap,$=new WeakSet,G=function(a,t,s,o){const i=[];for(let r=0,d=n(a,Y).length;r<d;r++){const c=n(a,Y)[r],l=c[t]||c[y],u={};if(l!==void 0&&(l.params=Object.create(null),i.push(l),s!==he||o&&o!==he))for(let m=0,g=l.possibleKeys.length;m<g;m++){const q=l.possibleKeys[m],w=u[l.score];l.params[q]=o!=null&&o[q]&&!w?o[q]:s[q]??(o==null?void 0:o[q]),u[l.score]=!0}}return i},ue),Z,Xe,et=(Xe=class{constructor(){h(this,"name","TrieRouter");f(this,Z);p(this,Z,new Za)}add(e,a,t){const s=aa(a);if(s){for(let o=0,i=s.length;o<i;o++)n(this,Z).insert(e,s[o],t);return}n(this,Z).insert(e,a,t)}match(e,a){return n(this,Z).search(e,a)}},Z=new WeakMap,Xe),ha=class extends Ha{constructor(e={}){super(e),this.router=e.router??new Xa({routers:[new Ja,new et]})}},at=e=>{const t={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},s=(i=>typeof i=="string"?i==="*"?()=>i:r=>i===r?r:null:typeof i=="function"?i:r=>i.includes(r)?r:null)(t.origin),o=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(t.allowMethods);return async function(r,d){var u;function c(m,g){r.res.headers.set(m,g)}const l=await s(r.req.header("origin")||"",r);if(l&&c("Access-Control-Allow-Origin",l),t.credentials&&c("Access-Control-Allow-Credentials","true"),(u=t.exposeHeaders)!=null&&u.length&&c("Access-Control-Expose-Headers",t.exposeHeaders.join(",")),r.req.method==="OPTIONS"){t.origin!=="*"&&c("Vary","Origin"),t.maxAge!=null&&c("Access-Control-Max-Age",t.maxAge.toString());const m=await o(r.req.header("origin")||"",r);m.length&&c("Access-Control-Allow-Methods",m.join(","));let g=t.allowHeaders;if(!(g!=null&&g.length)){const q=r.req.header("Access-Control-Request-Headers");q&&(g=q.split(/\s*,\s*/))}return g!=null&&g.length&&(c("Access-Control-Allow-Headers",g.join(",")),r.res.headers.append("Vary","Access-Control-Request-Headers")),r.res.headers.delete("Content-Length"),r.res.headers.delete("Content-Type"),new Response(null,{headers:r.res.headers,status:204,statusText:"No Content"})}await d(),t.origin!=="*"&&r.header("Vary","Origin",{append:!0})}},tt=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Me=(e,a=ot)=>{const t=/\.([a-zA-Z0-9]+?)$/,s=e.match(t);if(!s)return;let o=a[s[1]];return o&&o.startsWith("text")&&(o+="; charset=utf-8"),o},st={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},ot=st,it=(...e)=>{let a=e.filter(o=>o!=="").join("/");a=a.replace(new RegExp("(?<=\\/)\\/+","g"),"");const t=a.split("/"),s=[];for(const o of t)o===".."&&s.length>0&&s.at(-1)!==".."?s.pop():o!=="."&&s.push(o);return s.join("/")||"."},fa={br:".br",zstd:".zst",gzip:".gz"},nt=Object.keys(fa),rt="index.html",lt=e=>{const a=e.root??"./",t=e.path,s=e.join??it;return async(o,i)=>{var u,m,g,q;if(o.finalized)return i();let r;if(e.path)r=e.path;else try{if(r=decodeURIComponent(o.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(r))throw new Error}catch{return await((u=e.onNotFound)==null?void 0:u.call(e,o.req.path,o)),i()}let d=s(a,!t&&e.rewriteRequestPath?e.rewriteRequestPath(r):r);e.isDir&&await e.isDir(d)&&(d=s(d,rt));const c=e.getContent;let l=await c(d,o);if(l instanceof Response)return o.newResponse(l.body,l);if(l){const w=e.mimes&&Me(d,e.mimes)||Me(d);if(o.header("Content-Type",w||"application/octet-stream"),e.precompressed&&(!w||tt.test(w))){const E=new Set((m=o.req.header("Accept-Encoding"))==null?void 0:m.split(",").map(b=>b.trim()));for(const b of nt){if(!E.has(b))continue;const S=await c(d+fa[b],o);if(S){l=S,o.header("Content-Encoding",b),o.header("Vary","Accept-Encoding",{append:!0});break}}}return await((g=e.onFound)==null?void 0:g.call(e,d,o)),o.body(l)}await((q=e.onNotFound)==null?void 0:q.call(e,d,o)),await i()}},ct=async(e,a)=>{let t;a&&a.manifest?typeof a.manifest=="string"?t=JSON.parse(a.manifest):t=a.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?t=JSON.parse(__STATIC_CONTENT_MANIFEST):t=__STATIC_CONTENT_MANIFEST;let s;a&&a.namespace?s=a.namespace:s=__STATIC_CONTENT;const o=t[e]||e;if(!o)return null;const i=await s.get(o,{type:"stream"});return i||null},dt=e=>async function(t,s){return lt({...e,getContent:async i=>ct(i,{manifest:e.manifest,namespace:e.namespace?e.namespace:t.env?t.env.__STATIC_CONTENT:void 0})})(t,s)},ut=e=>dt(e);const mt="ko",pt="한국어",ht={title:"SOLOCALL - 솔로콜 | AI 음성 생활 지원 플랫폼",description:"혼자 사는 중년과 시니어를 위한 전화 기반 AI 생활 지원 플랫폼. 전화 한 통으로 병원 예약, 행정 절차, 건강 정보를 해결하세요."},ft={home:"홈",about:"서비스 소개",features:"주요 기능",faq:"자주 묻는 질문",contact:"문의하기"},gt={title:"혼자지만 외롭지 않게",subtitle:"전화 한 통으로 일상을 해결하는<br/>AI 생활 파트너",description:"앱 설치 없이 전화만으로 병원 예약, 행정 절차, 건강 정보를<br/>대신 처리해 드리는 음성 우선 플랫폼입니다.",cta:"서비스 시작하기",callNow:"지금 전화하기"},vt={title:"SOLOCALL이 제공하는 서비스",subtitle:"전화 한 통으로 모든 것이 해결됩니다",items:[{icon:"fa-phone-volume",title:"병원·관공서 전화 대행",description:"병원 예약, 공공기관 문의를 AI가 대신 처리합니다. 대기 시간 없이 결과만 받으세요."},{icon:"fa-heartbeat",title:"건강 정보 정리",description:"증상을 말씀하시면 정리해 드립니다. 병원 방문 전 필요한 질문도 준비해 드립니다."},{icon:"fa-users",title:"가족 소통 브리지",description:"필요할 때만 가족에게 상태를 전달합니다. 감시가 아닌 안심을 위한 연결입니다."},{icon:"fa-shield-alt",title:"사기 전화 차단",description:"보이스피싱 의심 통화를 실시간으로 감지하고 즉시 경고해 드립니다."},{icon:"fa-clipboard-list",title:"생활 매니저",description:"날씨, 일정, 약 복용 알림 등 일상 생활을 전화로 관리합니다."},{icon:"fa-hand-holding-heart",title:"24시간 안부 체크",description:"정해진 시간에 안부 전화를 드립니다. 천천히 편하게 말씀하세요."}]},bt={title:"이렇게 사용하세요",steps:[{number:"1",title:"전화하기",description:"등록된 번호로 전화를 걸거나 받으세요"},{number:"2",title:"말씀하기",description:"천천히 편하게 필요한 것을 말씀하세요"},{number:"3",title:"해결하기",description:"AI가 대신 처리하고 결과를 알려드립니다"}]},qt={title:"자주 묻는 질문",subtitle:"궁금한 점을 확인하세요",categories:[{name:"서비스 기본 이해",questions:[{q:"이 서비스는 무엇을 도와주나요?",a:"전화 한 통으로 병원, 행정, 건강, 생활 문제를 대신 처리하거나 정리해 드립니다."},{q:"앱을 꼭 설치해야 하나요?",a:"아니요. 전화만 있으면 이용할 수 있습니다."},{q:"어떤 분들을 위한 서비스인가요?",a:"혼자 지내는 중년·시니어 분들을 위한 전화 기반 생활 지원 서비스입니다."},{q:"복잡한 조작이 필요한가요?",a:"아닙니다. 말씀만 하시면 됩니다."},{q:"상담원과 통화하는 건가요?",a:"사람 대신 AI가 전화로 도와드립니다."},{q:"천천히 말해도 되나요?",a:"네. 천천히, 편하게 말씀하셔도 됩니다."},{q:"통화 내용은 기억하나요?",a:"이전 대화를 참고해 더 잘 도와드릴 수 있습니다."}]},{name:"병원·관공서 전화 대행",questions:[{q:"병원 예약을 대신 해주나요?",a:"네. 병원에 직접 전화해 예약이나 문의를 대신 처리합니다."},{q:"구청이나 주민센터도 가능한가요?",a:"가능합니다. 절차·서류·담당 부서까지 확인해 드립니다."},{q:"대기 전화도 대신 받아주나요?",a:"네. 대기·ARS 없이 결과만 알려드립니다."},{q:"결과는 어떻게 알려주나요?",a:"전화로 다시 설명해 드리거나 요약해 드립니다."},{q:"여러 번 수정 요청도 되나요?",a:"네. 다시 확인이 필요하면 재통화합니다."},{q:"어디까지 대신 전화해 주나요?",a:"병원, 공공기관, 생활 서비스 문의까지 가능합니다."},{q:"통화가 잘 안 되면 어떻게 하나요?",a:"다시 시도하거나 다른 방법을 안내해 드립니다."}]},{name:"건강 정보 정리",questions:[{q:"아픈 증상을 말해도 되나요?",a:"네. 내용을 정리해 드립니다."},{q:"병원에 가야 하는지도 알려주나요?",a:"진단은 아니지만, 방문 권장 여부를 안내합니다."},{q:"의사 상담을 대신하나요?",a:"아니요. 의료 행위는 하지 않습니다."},{q:"병원 가기 전 질문도 정리해 주나요?",a:"네. 필요한 질문을 정리해 드립니다."},{q:"불안할 때도 도움을 받을 수 있나요?",a:"네. 상황을 정리하고 안내해 드립니다."},{q:"건강 기록이 남나요?",a:"필요한 범위에서만 기록됩니다."}]},{name:"가족·지인 소통 브리지",questions:[{q:"가족에게 제 상태가 전달되나요?",a:"필요할 때만 간단히 전달됩니다."},{q:"항상 가족에게 알리나요?",a:"아니요. 이상 상황일 때만 공유합니다."},{q:"감시받는 느낌은 없나요?",a:"없습니다. 자율성을 최우선으로 합니다."},{q:"어떤 내용이 전달되나요?",a:"컨디션 요약 등 최소한의 정보만 전달됩니다."},{q:"원하지 않으면 공유를 끌 수 있나요?",a:"네. 언제든 설정할 수 있습니다."}]},{name:"사기·위험 통화 감지",questions:[{q:"보이스피싱도 막아주나요?",a:"네. 의심되는 통화를 실시간으로 감지합니다."},{q:"위험하면 어떻게 알려주나요?",a:"통화 중 바로 음성으로 알려드립니다."},{q:"왜 위험한지 설명해 주나요?",a:"간단하고 명확하게 이유를 안내합니다."},{q:"제가 직접 끊어야 하나요?",a:"네. 끊는 판단은 사용자께 있습니다."},{q:"가족에게도 알려주나요?",a:"필요 시 보호자에게 알릴 수 있습니다."}]},{name:"생활 매니저·기타",questions:[{q:"날씨나 일정도 알려주나요?",a:"네. 전화로 바로 안내합니다."},{q:"약 먹는 시간도 알려주나요?",a:"네. 생활 알림을 도와드립니다."},{q:"급한 상황에는 어떻게 되나요?",a:"즉시 도움 연결을 안내합니다."},{q:"다시 이용하려면 어떻게 하나요?",a:"언제든 다시 전화하시면 됩니다."},{q:"이 서비스의 가장 큰 장점은 뭔가요?",a:"혼자 해결하지 않아도 된다는 점입니다."}]}]},yt={tagline:"혼자지만 외롭지 않게, SOLOCALL과 함께하세요",contact:"문의: support@solocall.com",copyright:"© 2026 SOLOCALL. All rights reserved."},xt={lang:mt,langName:pt,meta:ht,nav:ft,hero:gt,features:vt,howItWorks:bt,faq:qt,footer:yt},wt="en",St="English",At={title:"SOLOCALL | AI Voice-First Life Support Platform",description:"Phone-based AI life support platform for middle-aged and senior individuals living alone. Solve hospital appointments, administrative procedures, and health information with just one call."},Ct={home:"Home",about:"About",features:"Features",faq:"FAQ",contact:"Contact"},Ot={title:"Alone, but Not Lonely",subtitle:"Your AI Life Partner<br/>Solving Daily Challenges with One Call",description:"A voice-first platform that handles hospital appointments, administrative procedures,<br/>and health information via phone - no app installation required.",cta:"Get Started",callNow:"Call Now"},Lt={title:"SOLOCALL Services",subtitle:"Everything solved with one phone call",items:[{icon:"fa-phone-volume",title:"Hospital & Public Office Proxy",description:"AI handles hospital appointments and public office inquiries for you. Get results without waiting."},{icon:"fa-heartbeat",title:"Health Information Summary",description:"Tell us your symptoms and we'll organize them. We'll also prepare questions for your hospital visit."},{icon:"fa-users",title:"Family Communication Bridge",description:"Share your status with family only when necessary. Connection for peace of mind, not surveillance."},{icon:"fa-shield-alt",title:"Scam Call Detection",description:"Real-time detection of suspected voice phishing calls with immediate alerts."},{icon:"fa-clipboard-list",title:"Life Manager",description:"Manage daily life via phone: weather, schedules, medication reminders, and more."},{icon:"fa-hand-holding-heart",title:"24/7 Welfare Check",description:"Scheduled check-in calls. Speak slowly and comfortably at your own pace."}]},It={title:"How to Use",steps:[{number:"1",title:"Call",description:"Call or receive a call from the registered number"},{number:"2",title:"Speak",description:"Tell us what you need, slowly and comfortably"},{number:"3",title:"Solved",description:"AI handles it and provides you with the results"}]},zt={title:"Frequently Asked Questions",subtitle:"Find answers to your questions",categories:[{name:"Basic Service Understanding",questions:[{q:"What does this service help with?",a:"With one phone call, we handle or organize hospital, administrative, health, and daily life issues for you."},{q:"Do I need to install an app?",a:"No. You only need a phone to use the service."},{q:"Who is this service for?",a:"This is a phone-based life support service for middle-aged and senior individuals living alone."},{q:"Do I need complicated operations?",a:"No. You just need to speak."},{q:"Am I speaking with a human agent?",a:"Instead of a person, AI helps you over the phone."},{q:"Can I speak slowly?",a:"Yes. You can speak slowly and comfortably."},{q:"Does it remember previous conversations?",a:"Yes. It references previous conversations to help you better."}]},{name:"Hospital & Public Office Proxy",questions:[{q:"Can you make hospital appointments for me?",a:"Yes. We call the hospital directly to handle appointments and inquiries."},{q:"Can you handle district offices or community centers?",a:"Yes. We check procedures, documents, and relevant departments for you."},{q:"Can you wait on hold for me?",a:"Yes. We handle waiting and IVR systems - you just get the results."},{q:"How are results delivered?",a:"We call you back to explain or summarize the results."},{q:"Can I request multiple revisions?",a:"Yes. If you need to reconfirm, we'll call again."},{q:"What types of calls can you make for me?",a:"Hospitals, public institutions, and daily service inquiries."},{q:"What if the call doesn't go through?",a:"We'll try again or provide alternative solutions."}]},{name:"Health Information Summary (Non-medical)",questions:[{q:"Can I describe my symptoms?",a:"Yes. We'll organize the information for you."},{q:"Will you tell me if I should go to the hospital?",a:"It's not a diagnosis, but we can advise whether a visit is recommended."},{q:"Do you replace doctor consultations?",a:"No. We do not perform medical acts."},{q:"Can you help prepare questions before my hospital visit?",a:"Yes. We'll organize necessary questions for you."},{q:"Can I get help when I'm anxious?",a:"Yes. We'll organize the situation and provide guidance."},{q:"Are health records kept?",a:"Only to the extent necessary."}]},{name:"Family Communication Bridge",questions:[{q:"Will my status be shared with family?",a:"Only briefly and only when necessary."},{q:"Is my family always notified?",a:"No. Only in unusual situations."},{q:"Will I feel surveilled?",a:"No. We prioritize your autonomy."},{q:"What information is shared?",a:"Only minimal information such as condition summaries."},{q:"Can I turn off sharing if I don't want it?",a:"Yes. You can adjust settings anytime."}]},{name:"Scam & Risk Call Detection",questions:[{q:"Can you block voice phishing?",a:"Yes. We detect suspicious calls in real-time."},{q:"How are risks communicated?",a:"You'll receive an immediate voice alert during the call."},{q:"Will you explain why it's risky?",a:"Yes. We provide clear and simple explanations."},{q:"Do I have to hang up myself?",a:"Yes. The decision to hang up is yours."},{q:"Will my family be notified?",a:"If necessary, we can notify your guardian."}]},{name:"Life Manager & Others",questions:[{q:"Can you provide weather or schedule information?",a:"Yes. We provide immediate guidance via phone."},{q:"Can you remind me to take medication?",a:"Yes. We help with daily life reminders."},{q:"What happens in urgent situations?",a:"We immediately connect you to help."},{q:"How do I use the service again?",a:"Just call anytime."},{q:"What's the biggest advantage of this service?",a:"You don't have to solve problems alone."}]}]},kt={tagline:"Alone, but not lonely - with SOLOCALL",contact:"Contact: support@solocall.com",copyright:"© 2026 SOLOCALL. All rights reserved."},Et={lang:wt,langName:St,meta:At,nav:Ct,hero:Ot,features:Lt,howItWorks:It,faq:zt,footer:kt},Ft="ja",Pt="日本語",Nt={title:"SOLOCALL - ソロコール | AI音声優先生活支援プラットフォーム",description:"一人暮らしの中高年・シニアのための電話ベースAI生活支援プラットフォーム。電話一本で病院予約、行政手続き、健康情報を解決。"},Rt={home:"ホーム",about:"サービス紹介",features:"主な機能",faq:"よくある質問",contact:"お問い合わせ"},jt={title:"一人でも寂しくない",subtitle:"電話一本で日常を解決する<br/>AI生活パートナー",description:"アプリ不要で電話だけで病院予約、行政手続き、健康情報を<br/>代わりに処理する音声優先プラットフォームです。",cta:"サービスを始める",callNow:"今すぐ電話"},$t={title:"SOLOCALLが提供するサービス",subtitle:"電話一本ですべてが解決",items:[{icon:"fa-phone-volume",title:"病院・官公庁電話代行",description:"病院予約、公共機関へのお問い合わせをAIが代わりに処理。待ち時間なく結果だけ受け取れます。"},{icon:"fa-heartbeat",title:"健康情報整理",description:"症状をお話しいただければ整理します。病院訪問前に必要な質問も準備します。"},{icon:"fa-users",title:"家族コミュニケーションブリッジ",description:"必要な時だけご家族に状態をお伝えします。監視ではなく安心のための連絡です。"},{icon:"fa-shield-alt",title:"詐欺電話ブロック",description:"ボイスフィッシング疑いの通話をリアルタイムで検知し、即座に警告します。"},{icon:"fa-clipboard-list",title:"生活マネージャー",description:"天気、スケジュール、服薬リマインダーなど日常生活を電話で管理。"},{icon:"fa-hand-holding-heart",title:"24時間安否確認",description:"決まった時間に安否確認のお電話をします。ゆっくり楽にお話しください。"}]},Wt={title:"ご利用方法",steps:[{number:"1",title:"電話する",description:"登録番号に電話をかけるか受け取る"},{number:"2",title:"話す",description:"ゆっくり楽に必要なことをお話しください"},{number:"3",title:"解決",description:"AIが代わりに処理し結果をお知らせ"}]},Vt={title:"よくある質問",subtitle:"疑問点を確認してください",categories:[{name:"サービス基本理解",questions:[{q:"このサービスは何を助けてくれますか？",a:"電話一本で病院、行政、健康、生活の問題を代わりに処理または整理します。"},{q:"アプリは必ずインストールする必要がありますか？",a:"いいえ。電話さえあれば利用できます。"},{q:"どんな方のためのサービスですか？",a:"一人暮らしの中高年・シニアの方のための電話ベース生活支援サービスです。"},{q:"複雑な操作が必要ですか？",a:"いいえ。話すだけで大丈夫です。"},{q:"オペレーターと通話するのですか？",a:"人の代わりにAIが電話でお手伝いします。"},{q:"ゆっくり話しても大丈夫ですか？",a:"はい。ゆっくり、楽にお話しください。"},{q:"通話内容は覚えていますか？",a:"以前の会話を参考により良いサポートができます。"}]},{name:"病院・官公庁電話代行",questions:[{q:"病院予約を代わりにしてくれますか？",a:"はい。病院に直接電話して予約やお問い合わせを代わりに処理します。"},{q:"区役所や住民センターも可能ですか？",a:"可能です。手続き、書類、担当部署まで確認します。"},{q:"待ち電話も代わりに受けてくれますか？",a:"はい。待機・IVRなしで結果だけお知らせします。"},{q:"結果はどのように知らせてくれますか？",a:"電話で再度説明するか要約してお知らせします。"},{q:"何度も修正依頼できますか？",a:"はい。再確認が必要なら再度お電話します。"},{q:"どこまで代わりに電話してくれますか？",a:"病院、公共機関、生活サービスのお問い合わせまで可能です。"},{q:"通話がうまくいかない場合はどうしますか？",a:"再度試すか別の方法をご案内します。"}]},{name:"健康情報整理（非医療）",questions:[{q:"痛い症状を話してもいいですか？",a:"はい。内容を整理します。"},{q:"病院に行くべきか教えてくれますか？",a:"診断ではありませんが、訪問推奨かどうかをご案内します。"},{q:"医師の相談を代わりにしますか？",a:"いいえ。医療行為は行いません。"},{q:"病院に行く前の質問も整理してくれますか？",a:"はい。必要な質問を整理します。"},{q:"不安な時も助けてもらえますか？",a:"はい。状況を整理してご案内します。"},{q:"健康記録は残りますか？",a:"必要な範囲でのみ記録されます。"}]},{name:"家族・知人コミュニケーションブリッジ",questions:[{q:"家族に私の状態が伝わりますか？",a:"必要な時だけ簡単に伝わります。"},{q:"いつも家族に知らせますか？",a:"いいえ。異常な状況の時だけ共有します。"},{q:"監視されている感じはありませんか？",a:"ありません。自律性を最優先にします。"},{q:"どんな内容が伝わりますか？",a:"状態要約など最小限の情報だけ伝わります。"},{q:"望まない場合は共有をオフにできますか？",a:"はい。いつでも設定できます。"}]},{name:"詐欺・危険通話検知",questions:[{q:"ボイスフィッシングも防いでくれますか？",a:"はい。疑わしい通話をリアルタイムで検知します。"},{q:"危険な場合はどう知らせてくれますか？",a:"通話中にすぐ音声でお知らせします。"},{q:"なぜ危険か説明してくれますか？",a:"簡単で明確に理由をご案内します。"},{q:"私が直接切らなければなりませんか？",a:"はい。切る判断はユーザー様にあります。"},{q:"家族にも知らせてくれますか？",a:"必要時、保護者にお知らせできます。"}]},{name:"生活マネージャー・その他",questions:[{q:"天気やスケジュールも教えてくれますか？",a:"はい。電話ですぐにご案内します。"},{q:"薬を飲む時間も教えてくれますか？",a:"はい。生活リマインダーをお手伝いします。"},{q:"緊急の状況はどうなりますか？",a:"すぐに助けの接続をご案内します。"},{q:"再度利用するにはどうすればいいですか？",a:"いつでも再度お電話ください。"},{q:"このサービスの最大の利点は何ですか？",a:"一人で解決しなくてもいい点です。"}]}]},Tt={tagline:"一人でも寂しくない、SOLOCALLと一緒に",contact:"お問い合わせ: support@solocall.com",copyright:"© 2026 SOLOCALL. All rights reserved."},Dt={lang:Ft,langName:Pt,meta:Nt,nav:Rt,hero:jt,features:$t,howItWorks:Wt,faq:Vt,footer:Tt},Ht="de",_t="Deutsch",Mt={title:"SOLOCALL | KI-basierte Sprachunterstützungsplattform",description:"Telefonbasierte KI-Lebensunterstützungsplattform für alleinstehende Personen mittleren Alters und Senioren. Lösen Sie Krankenhausterm​ine, Verwaltungsverfahren und Gesundheitsinformationen mit nur einem Anruf."},Bt={home:"Startseite",about:"Über uns",features:"Funktionen",faq:"FAQ",contact:"Kontakt"},Yt={title:"Allein, aber nicht einsam",subtitle:"Ihr KI-Lebenspartner<br/>Alltag lösen mit einem Anruf",description:"Eine sprachgestützte Plattform, die Krankenhausterm​ine, Verwaltungsverfahren<br/>und Gesundheitsinformationen per Telefon verwaltet - keine App-Installation erforderlich.",cta:"Jetzt starten",callNow:"Jetzt anrufen"},Kt={title:"SOLOCALL-Dienste",subtitle:"Alles mit einem Anruf gelöst",items:[{icon:"fa-phone-volume",title:"Krankenhaus- & Behördenvertretung",description:"KI übernimmt Krankenhaustermine und Behördenanfragen. Erhalten Sie Ergebnisse ohne Wartezeit."},{icon:"fa-heartbeat",title:"Gesundheitsinformationszusammenfassung",description:"Erzählen Sie uns Ihre Symptome und wir organisieren sie. Wir bereiten auch Fragen für Ihren Arztbesuch vor."},{icon:"fa-users",title:"Familienkommunikationsbrücke",description:"Teilen Sie Ihren Status nur bei Bedarf mit der Familie. Verbindung für Sicherheit, nicht Überwachung."},{icon:"fa-shield-alt",title:"Betrugserkennung",description:"Echtzeiterkennung verdächtiger Phishing-Anrufe mit sofortiger Warnung."},{icon:"fa-clipboard-list",title:"Lebensmanager",description:"Verwalten Sie den Alltag per Telefon: Wetter, Termine, Medikamentenerinnerungen und mehr."},{icon:"fa-hand-holding-heart",title:"24/7-Wohlfahrtskontrolle",description:"Geplante Check-in-Anrufe. Sprechen Sie langsam und bequem in Ihrem eigenen Tempo."}]},Gt={title:"So funktioniert es",steps:[{number:"1",title:"Anrufen",description:"Rufen Sie die registrierte Nummer an oder nehmen Sie einen Anruf entgegen"},{number:"2",title:"Sprechen",description:"Sagen Sie uns, was Sie brauchen, langsam und bequem"},{number:"3",title:"Gelöst",description:"KI kümmert sich darum und liefert Ihnen die Ergebnisse"}]},Ut={title:"Häufig gestellte Fragen",subtitle:"Finden Sie Antworten auf Ihre Fragen",categories:[{name:"Grundlegendes Serviceverständnis",questions:[{q:"Wobei hilft dieser Service?",a:"Mit einem Anruf bearbeiten oder organisieren wir Krankenhaus-, Verwaltungs-, Gesundheits- und Alltagsprobleme für Sie."},{q:"Muss ich eine App installieren?",a:"Nein. Sie benötigen nur ein Telefon, um den Service zu nutzen."},{q:"Für wen ist dieser Service?",a:"Dies ist ein telefonbasierter Lebensunterstützungsdienst für alleinstehende Personen mittleren Alters und Senioren."},{q:"Sind komplizierte Operationen erforderlich?",a:"Nein. Sie müssen nur sprechen."},{q:"Spreche ich mit einem menschlichen Agenten?",a:"Anstelle einer Person hilft Ihnen KI über das Telefon."},{q:"Kann ich langsam sprechen?",a:"Ja. Sie können langsam und bequem sprechen."},{q:"Erinnert es sich an frühere Gespräche?",a:"Ja. Es bezieht sich auf frühere Gespräche, um Ihnen besser zu helfen."}]},{name:"Krankenhaus- & Behördenvertretung",questions:[{q:"Können Sie Krankenhaustermine für mich vereinbaren?",a:"Ja. Wir rufen das Krankenhaus direkt an, um Termine und Anfragen zu bearbeiten."},{q:"Können Sie mit Bezirksämtern oder Gemeindezentren umgehen?",a:"Ja. Wir überprüfen Verfahren, Dokumente und zuständige Abteilungen für Sie."},{q:"Können Sie für mich in der Warteschleife warten?",a:"Ja. Wir kümmern uns um Warte- und IVR-Systeme - Sie erhalten nur die Ergebnisse."},{q:"Wie werden Ergebnisse geliefert?",a:"Wir rufen Sie zurück, um die Ergebnisse zu erklären oder zusammenzufassen."},{q:"Kann ich mehrere Überarbeitungen anfordern?",a:"Ja. Wenn Sie eine Neubestätigung benötigen, rufen wir erneut an."},{q:"Welche Arten von Anrufen können Sie für mich tätigen?",a:"Krankenhäuser, öffentliche Einrichtungen und Alltagsdienstanfragen."},{q:"Was ist, wenn der Anruf nicht durchkommt?",a:"Wir versuchen es erneut oder bieten alternative Lösungen an."}]},{name:"Gesundheitsinformationszusammenfassung (nicht-medizinisch)",questions:[{q:"Kann ich meine Symptome beschreiben?",a:"Ja. Wir organisieren die Informationen für Sie."},{q:"Sagen Sie mir, ob ich ins Krankenhaus gehen sollte?",a:"Es ist keine Diagnose, aber wir können beraten, ob ein Besuch empfohlen wird."},{q:"Ersetzen Sie Arztkonsultationen?",a:"Nein. Wir führen keine medizinischen Handlungen durch."},{q:"Können Sie mir helfen, Fragen vor meinem Krankenhausbesuch vorzubereiten?",a:"Ja. Wir organisieren notwendige Fragen für Sie."},{q:"Kann ich Hilfe bekommen, wenn ich ängstlich bin?",a:"Ja. Wir organisieren die Situation und geben Anleitung."},{q:"Werden Gesundheitsakten aufbewahrt?",a:"Nur im notwendigen Umfang."}]},{name:"Familienkommunikationsbrücke",questions:[{q:"Wird mein Status mit der Familie geteilt?",a:"Nur kurz und nur bei Bedarf."},{q:"Wird meine Familie immer benachrichtigt?",a:"Nein. Nur in ungewöhnlichen Situationen."},{q:"Werde ich mich überwacht fühlen?",a:"Nein. Wir priorisieren Ihre Autonomie."},{q:"Welche Informationen werden geteilt?",a:"Nur minimale Informationen wie Zustandszusammenfassungen."},{q:"Kann ich die Freigabe deaktivieren, wenn ich es nicht möchte?",a:"Ja. Sie können die Einstellungen jederzeit anpassen."}]},{name:"Betrugs- & Risikoerkennung",questions:[{q:"Können Sie Voice-Phishing blockieren?",a:"Ja. Wir erkennen verdächtige Anrufe in Echtzeit."},{q:"Wie werden Risiken kommuniziert?",a:"Sie erhalten während des Anrufs sofort eine Sprachwarnung."},{q:"Erklären Sie, warum es riskant ist?",a:"Ja. Wir geben klare und einfache Erklärungen."},{q:"Muss ich selbst auflegen?",a:"Ja. Die Entscheidung zum Auflegen liegt bei Ihnen."},{q:"Wird meine Familie benachrichtigt?",a:"Bei Bedarf können wir Ihren Vormund benachrichtigen."}]},{name:"Lebensmanager & Sonstiges",questions:[{q:"Können Sie Wetter- oder Terminninformationen bereitstellen?",a:"Ja. Wir geben sofortige Anleitung per Telefon."},{q:"Können Sie mich daran erinnern, Medikamente einzunehmen?",a:"Ja. Wir helfen bei alltäglichen Erinnerungen."},{q:"Was passiert in dringenden Situationen?",a:"Wir verbinden Sie sofort mit Hilfe."},{q:"Wie nutze ich den Service erneut?",a:"Rufen Sie einfach jederzeit an."},{q:"Was ist der größte Vorteil dieses Services?",a:"Sie müssen Probleme nicht alleine lösen."}]}]},Qt={tagline:"Allein, aber nicht einsam - mit SOLOCALL",contact:"Kontakt: support@solocall.com",copyright:"© 2026 SOLOCALL. Alle Rechte vorbehalten."},Jt={lang:Ht,langName:_t,meta:Mt,nav:Bt,hero:Yt,features:Kt,howItWorks:Gt,faq:Ut,footer:Qt},Xt="zh-CN",Zt="简体中文",es={title:"SOLOCALL | AI语音优先生活支持平台",description:"针对独居中老年人的电话AI生活支持平台。一通电话解决医院预约、行政手续、健康信息。"},as={home:"首页",about:"关于",features:"功能",faq:"常见问题",contact:"联系我们"},ts={title:"独居但不孤单",subtitle:"一通电话解决日常<br/>AI生活伴侣",description:"无需安装应用，仅通过电话即可处理医院预约、行政手续、健康信息<br/>的语音优先平台。",cta:"开始使用",callNow:"立即致电"},ss={title:"SOLOCALL提供的服务",subtitle:"一通电话解决一切",items:[{icon:"fa-phone-volume",title:"医院·政府机构电话代理",description:"AI代您处理医院预约和政府机构咨询。无需等待即可获得结果。"},{icon:"fa-heartbeat",title:"健康信息整理",description:"告诉我们您的症状，我们将为您整理。还会为您的医院就诊准备问题。"},{icon:"fa-users",title:"家庭沟通桥梁",description:"仅在必要时与家人分享您的状态。为了安心而非监视的连接。"},{icon:"fa-shield-alt",title:"诈骗电话检测",description:"实时检测可疑语音钓鱼电话并立即警告。"},{icon:"fa-clipboard-list",title:"生活管家",description:"通过电话管理日常生活：天气、日程、用药提醒等。"},{icon:"fa-hand-holding-heart",title:"24小时安全检查",description:"定时安全检查电话。按您自己的节奏慢慢舒适地说话。"}]},os={title:"使用方法",steps:[{number:"1",title:"拨打电话",description:"拨打或接听注册号码的电话"},{number:"2",title:"说话",description:"慢慢舒适地告诉我们您需要什么"},{number:"3",title:"解决",description:"AI处理并为您提供结果"}]},is={title:"常见问题",subtitle:"找到您问题的答案",categories:[{name:"基本服务理解",questions:[{q:"此服务帮助什么？",a:"一通电话，我们为您处理或整理医院、行政、健康和日常生活问题。"},{q:"需要安装应用吗？",a:"不需要。您只需要一部电话即可使用该服务。"},{q:"此服务适合谁？",a:"这是针对独居中老年人的电话生活支持服务。"},{q:"需要复杂操作吗？",a:"不需要。您只需要说话。"},{q:"我是在和人工客服通话吗？",a:"AI将通过电话帮助您，而不是人。"},{q:"我可以慢慢说吗？",a:"可以。您可以慢慢舒适地说话。"},{q:"它会记住之前的对话吗？",a:"是的。它会参考之前的对话以更好地帮助您。"}]},{name:"医院·政府机构电话代理",questions:[{q:"可以为我预约医院吗？",a:"可以。我们直接致电医院处理预约和咨询。"},{q:"可以处理区政府办公室或社区中心吗？",a:"可以。我们为您检查程序、文件和相关部门。"},{q:"可以为我等待通话吗？",a:"可以。我们处理等待和IVR系统 - 您只需获得结果。"},{q:"如何提供结果？",a:"我们会回电向您解释或总结结果。"},{q:"我可以请求多次修改吗？",a:"可以。如果您需要重新确认，我们会再次致电。"},{q:"您可以为我拨打哪些类型的电话？",a:"医院、公共机构和日常服务咨询。"},{q:"如果电话打不通怎么办？",a:"我们会再次尝试或提供替代解决方案。"}]},{name:"健康信息整理（非医疗）",questions:[{q:"我可以描述我的症状吗？",a:"可以。我们会为您整理信息。"},{q:"您会告诉我是否应该去医院吗？",a:"这不是诊断，但我们可以建议是否建议就诊。"},{q:"您替代医生咨询吗？",a:"不。我们不进行医疗行为。"},{q:"您能帮我准备就医前的问题吗？",a:"可以。我们会为您整理必要的问题。"},{q:"当我焦虑时可以获得帮助吗？",a:"可以。我们会整理情况并提供指导。"},{q:"会保留健康记录吗？",a:"仅在必要范围内。"}]},{name:"家庭沟通桥梁",questions:[{q:"我的状态会与家人分享吗？",a:"仅在必要时简短分享。"},{q:"总是通知我的家人吗？",a:"不。仅在异常情况下。"},{q:"我会感到被监视吗？",a:"不会。我们优先考虑您的自主权。"},{q:"分享哪些信息？",a:"仅最少信息，如状态摘要。"},{q:"如果我不想要，可以关闭分享吗？",a:"可以。您可以随时调整设置。"}]},{name:"诈骗与风险电话检测",questions:[{q:"可以阻止语音钓鱼吗？",a:"可以。我们实时检测可疑电话。"},{q:"如何传达风险？",a:"您将在通话期间立即收到语音警报。"},{q:"您会解释为什么有风险吗？",a:"是的。我们提供清晰简单的解释。"},{q:"我必须自己挂断吗？",a:"是的。挂断的决定在您。"},{q:"会通知我的家人吗？",a:"如有必要，我们可以通知您的监护人。"}]},{name:"生活管家及其他",questions:[{q:"可以提供天气或日程信息吗？",a:"可以。我们通过电话立即提供指导。"},{q:"可以提醒我吃药吗？",a:"可以。我们帮助日常生活提醒。"},{q:"紧急情况下会发生什么？",a:"我们立即为您连接帮助。"},{q:"如何再次使用该服务？",a:"随时致电即可。"},{q:"此服务的最大优势是什么？",a:"您不必独自解决问题。"}]}]},ns={tagline:"独居但不孤单 - 与SOLOCALL同行",contact:"联系方式：support@solocall.com",copyright:"© 2026 SOLOCALL. 保留所有权利。"},rs={lang:Xt,langName:Zt,meta:es,nav:as,hero:ts,features:ss,howItWorks:os,faq:is,footer:ns},ls="es",cs="Español",ds={title:"SOLOCALL | Plataforma de Soporte de Vida con IA basada en Voz",description:"Plataforma de soporte de vida con IA basada en teléfono para personas de mediana edad y mayores que viven solas. Resuelve citas médicas, procedimientos administrativos e información de salud con una sola llamada."},us={home:"Inicio",about:"Acerca de",features:"Características",faq:"Preguntas frecuentes",contact:"Contacto"},ms={title:"Solo pero no solitario",subtitle:"Tu compañero de vida con IA<br/>Resolviendo desafíos diarios con una llamada",description:"Una plataforma basada en voz que gestiona citas médicas, procedimientos administrativos<br/>e información de salud por teléfono - sin necesidad de instalar aplicaciones.",cta:"Comenzar",callNow:"Llamar ahora"},ps={title:"Servicios SOLOCALL",subtitle:"Todo resuelto con una llamada telefónica",items:[{icon:"fa-phone-volume",title:"Representación en Hospital y Oficinas Públicas",description:"La IA maneja citas médicas y consultas a oficinas públicas por ti. Obtén resultados sin esperar."},{icon:"fa-heartbeat",title:"Resumen de Información de Salud",description:"Cuéntanos tus síntomas y los organizaremos. También prepararemos preguntas para tu visita al hospital."},{icon:"fa-users",title:"Puente de Comunicación Familiar",description:"Comparte tu estado con la familia solo cuando sea necesario. Conexión para tranquilidad, no vigilancia."},{icon:"fa-shield-alt",title:"Detección de Llamadas Fraudulentas",description:"Detección en tiempo real de llamadas sospechosas de phishing con alertas inmediatas."},{icon:"fa-clipboard-list",title:"Gerente de Vida",description:"Gestiona la vida diaria por teléfono: clima, horarios, recordatorios de medicamentos y más."},{icon:"fa-hand-holding-heart",title:"Chequeo de Bienestar 24/7",description:"Llamadas de verificación programadas. Habla despacio y cómodamente a tu propio ritmo."}]},hs={title:"Cómo usar",steps:[{number:"1",title:"Llamar",description:"Llama o recibe una llamada desde el número registrado"},{number:"2",title:"Hablar",description:"Dinos lo que necesitas, despacio y cómodamente"},{number:"3",title:"Resuelto",description:"La IA lo maneja y te proporciona los resultados"}]},fs={title:"Preguntas frecuentes",subtitle:"Encuentra respuestas a tus preguntas",categories:[{name:"Comprensión básica del servicio",questions:[{q:"¿En qué ayuda este servicio?",a:"Con una llamada, manejamos u organizamos problemas hospitalarios, administrativos, de salud y de la vida diaria para ti."},{q:"¿Necesito instalar una aplicación?",a:"No. Solo necesitas un teléfono para usar el servicio."},{q:"¿Para quién es este servicio?",a:"Este es un servicio de soporte de vida basado en teléfono para personas de mediana edad y mayores que viven solas."},{q:"¿Se requieren operaciones complicadas?",a:"No. Solo necesitas hablar."},{q:"¿Estoy hablando con un agente humano?",a:"En lugar de una persona, la IA te ayuda por teléfono."},{q:"¿Puedo hablar despacio?",a:"Sí. Puedes hablar despacio y cómodamente."},{q:"¿Recuerda conversaciones anteriores?",a:"Sí. Hace referencia a conversaciones anteriores para ayudarte mejor."}]},{name:"Representación en Hospital y Oficinas Públicas",questions:[{q:"¿Pueden hacer citas médicas por mí?",a:"Sí. Llamamos directamente al hospital para manejar citas y consultas."},{q:"¿Pueden manejar oficinas de distrito o centros comunitarios?",a:"Sí. Verificamos procedimientos, documentos y departamentos relevantes para ti."},{q:"¿Pueden esperar en espera por mí?",a:"Sí. Manejamos sistemas de espera e IVR - tú solo obtienes los resultados."},{q:"¿Cómo se entregan los resultados?",a:"Te llamamos de vuelta para explicar o resumir los resultados."},{q:"¿Puedo solicitar múltiples revisiones?",a:"Sí. Si necesitas reconfirmar, llamaremos de nuevo."},{q:"¿Qué tipos de llamadas pueden hacer por mí?",a:"Hospitales, instituciones públicas y consultas de servicios diarios."},{q:"¿Qué pasa si la llamada no se conecta?",a:"Lo intentaremos de nuevo o proporcionaremos soluciones alternativas."}]},{name:"Resumen de Información de Salud (no médico)",questions:[{q:"¿Puedo describir mis síntomas?",a:"Sí. Organizaremos la información para ti."},{q:"¿Me dirán si debo ir al hospital?",a:"No es un diagnóstico, pero podemos aconsejar si se recomienda una visita."},{q:"¿Reemplazan las consultas médicas?",a:"No. No realizamos actos médicos."},{q:"¿Pueden ayudarme a preparar preguntas antes de mi visita al hospital?",a:"Sí. Organizaremos las preguntas necesarias para ti."},{q:"¿Puedo obtener ayuda cuando estoy ansioso?",a:"Sí. Organizaremos la situación y proporcionaremos orientación."},{q:"¿Se guardan registros de salud?",a:"Solo en la medida necesaria."}]},{name:"Puente de Comunicación Familiar",questions:[{q:"¿Se compartirá mi estado con la familia?",a:"Solo brevemente y solo cuando sea necesario."},{q:"¿Siempre se notifica a mi familia?",a:"No. Solo en situaciones inusuales."},{q:"¿Me sentiré vigilado?",a:"No. Priorizamos tu autonomía."},{q:"¿Qué información se comparte?",a:"Solo información mínima como resúmenes de condición."},{q:"¿Puedo desactivar el compartir si no lo quiero?",a:"Sí. Puedes ajustar la configuración en cualquier momento."}]},{name:"Detección de Llamadas Fraudulentas y de Riesgo",questions:[{q:"¿Pueden bloquear el phishing de voz?",a:"Sí. Detectamos llamadas sospechosas en tiempo real."},{q:"¿Cómo se comunican los riesgos?",a:"Recibirás una alerta de voz inmediata durante la llamada."},{q:"¿Explicarán por qué es riesgoso?",a:"Sí. Proporcionamos explicaciones claras y simples."},{q:"¿Tengo que colgar yo mismo?",a:"Sí. La decisión de colgar es tuya."},{q:"¿Se notificará a mi familia?",a:"Si es necesario, podemos notificar a tu tutor."}]},{name:"Gerente de Vida y Otros",questions:[{q:"¿Pueden proporcionar información meteorológica o de horarios?",a:"Sí. Proporcionamos orientación inmediata por teléfono."},{q:"¿Pueden recordarme tomar medicamentos?",a:"Sí. Ayudamos con recordatorios de la vida diaria."},{q:"¿Qué sucede en situaciones urgentes?",a:"Te conectamos inmediatamente con ayuda."},{q:"¿Cómo uso el servicio nuevamente?",a:"Simplemente llama en cualquier momento."},{q:"¿Cuál es la mayor ventaja de este servicio?",a:"No tienes que resolver problemas solo."}]}]},gs={tagline:"Solo pero no solitario - con SOLOCALL",contact:"Contacto: support@solocall.com",copyright:"© 2026 SOLOCALL. Todos los derechos reservados."},vs={lang:ls,langName:cs,meta:ds,nav:us,hero:ms,features:ps,howItWorks:hs,faq:fs,footer:gs},bs="fr",qs="Français",ys={title:"SOLOCALL | Plateforme de soutien à la vie basée sur la voix IA",description:"Plateforme de soutien à la vie basée sur téléphone avec IA pour les personnes d'âge moyen et les seniors vivant seuls. Résolvez les rendez-vous médicaux, les procédures administratives et les informations de santé en un seul appel."},xs={home:"Accueil",about:"À propos",features:"Fonctionnalités",faq:"FAQ",contact:"Contact"},ws={title:"Seul mais pas seul",subtitle:"Votre partenaire de vie IA<br/>Résoudre les défis quotidiens avec un appel",description:"Une plateforme basée sur la voix qui gère les rendez-vous médicaux, les procédures administratives<br/>et les informations de santé par téléphone - aucune installation d'application requise.",cta:"Commencer",callNow:"Appelez maintenant"},Ss={title:"Services SOLOCALL",subtitle:"Tout résolu avec un appel téléphonique",items:[{icon:"fa-phone-volume",title:"Représentation à l'hôpital et aux bureaux publics",description:"L'IA gère les rendez-vous médicaux et les demandes aux bureaux publics pour vous. Obtenez des résultats sans attendre."},{icon:"fa-heartbeat",title:"Résumé des informations de santé",description:"Dites-nous vos symptômes et nous les organiserons. Nous préparerons également des questions pour votre visite à l'hôpital."},{icon:"fa-users",title:"Pont de communication familiale",description:"Partagez votre état avec la famille uniquement lorsque nécessaire. Connexion pour la tranquillité d'esprit, pas la surveillance."},{icon:"fa-shield-alt",title:"Détection d'appels frauduleux",description:"Détection en temps réel des appels suspects de phishing avec alertes immédiates."},{icon:"fa-clipboard-list",title:"Gestionnaire de vie",description:"Gérez la vie quotidienne par téléphone : météo, horaires, rappels de médicaments et plus."},{icon:"fa-hand-holding-heart",title:"Vérification du bien-être 24/7",description:"Appels de vérification programmés. Parlez lentement et confortablement à votre propre rythme."}]},As={title:"Comment utiliser",steps:[{number:"1",title:"Appeler",description:"Appelez ou recevez un appel du numéro enregistré"},{number:"2",title:"Parler",description:"Dites-nous ce dont vous avez besoin, lentement et confortablement"},{number:"3",title:"Résolu",description:"L'IA s'en occupe et vous fournit les résultats"}]},Cs={title:"Questions fréquemment posées",subtitle:"Trouvez des réponses à vos questions",categories:[{name:"Compréhension de base du service",questions:[{q:"En quoi ce service aide-t-il?",a:"Avec un appel, nous gérons ou organisons les problèmes d'hôpital, administratifs, de santé et de la vie quotidienne pour vous."},{q:"Dois-je installer une application?",a:"Non. Vous n'avez besoin que d'un téléphone pour utiliser le service."},{q:"Pour qui est ce service?",a:"Il s'agit d'un service de soutien à la vie basé sur téléphone pour les personnes d'âge moyen et les seniors vivant seuls."},{q:"Des opérations compliquées sont-elles requises?",a:"Non. Vous n'avez qu'à parler."},{q:"Est-ce que je parle avec un agent humain?",a:"Au lieu d'une personne, l'IA vous aide par téléphone."},{q:"Puis-je parler lentement?",a:"Oui. Vous pouvez parler lentement et confortablement."},{q:"Se souvient-il des conversations précédentes?",a:"Oui. Il fait référence aux conversations précédentes pour mieux vous aider."}]},{name:"Représentation à l'hôpital et aux bureaux publics",questions:[{q:"Pouvez-vous prendre des rendez-vous médicaux pour moi?",a:"Oui. Nous appelons directement l'hôpital pour gérer les rendez-vous et les demandes."},{q:"Pouvez-vous gérer les bureaux de district ou les centres communautaires?",a:"Oui. Nous vérifions les procédures, les documents et les départements pertinents pour vous."},{q:"Pouvez-vous attendre en attente pour moi?",a:"Oui. Nous gérons les systèmes d'attente et IVR - vous obtenez juste les résultats."},{q:"Comment les résultats sont-ils livrés?",a:"Nous vous rappelons pour expliquer ou résumer les résultats."},{q:"Puis-je demander plusieurs révisions?",a:"Oui. Si vous devez reconfirmer, nous rappellerons."},{q:"Quels types d'appels pouvez-vous passer pour moi?",a:"Hôpitaux, institutions publiques et demandes de services quotidiens."},{q:"Que se passe-t-il si l'appel ne passe pas?",a:"Nous réessaierons ou fournirons des solutions alternatives."}]},{name:"Résumé des informations de santé (non médical)",questions:[{q:"Puis-je décrire mes symptômes?",a:"Oui. Nous organiserons les informations pour vous."},{q:"Me direz-vous si je dois aller à l'hôpital?",a:"Ce n'est pas un diagnostic, mais nous pouvons conseiller si une visite est recommandée."},{q:"Remplacez-vous les consultations médicales?",a:"Non. Nous n'effectuons pas d'actes médicaux."},{q:"Pouvez-vous m'aider à préparer des questions avant ma visite à l'hôpital?",a:"Oui. Nous organiserons les questions nécessaires pour vous."},{q:"Puis-je obtenir de l'aide quand je suis anxieux?",a:"Oui. Nous organiserons la situation et fournirons des conseils."},{q:"Les dossiers de santé sont-ils conservés?",a:"Uniquement dans la mesure nécessaire."}]},{name:"Pont de communication familiale",questions:[{q:"Mon état sera-t-il partagé avec la famille?",a:"Uniquement brièvement et uniquement lorsque nécessaire."},{q:"Ma famille est-elle toujours notifiée?",a:"Non. Uniquement dans des situations inhabituelles."},{q:"Me sentirai-je surveillé?",a:"Non. Nous priorisons votre autonomie."},{q:"Quelles informations sont partagées?",a:"Uniquement des informations minimales comme des résumés de condition."},{q:"Puis-je désactiver le partage si je ne le veux pas?",a:"Oui. Vous pouvez ajuster les paramètres à tout moment."}]},{name:"Détection d'appels frauduleux et de risque",questions:[{q:"Pouvez-vous bloquer le phishing vocal?",a:"Oui. Nous détectons les appels suspects en temps réel."},{q:"Comment les risques sont-ils communiqués?",a:"Vous recevrez une alerte vocale immédiate pendant l'appel."},{q:"Expliquerez-vous pourquoi c'est risqué?",a:"Oui. Nous fournissons des explications claires et simples."},{q:"Dois-je raccrocher moi-même?",a:"Oui. La décision de raccrocher est à vous."},{q:"Ma famille sera-t-elle notifiée?",a:"Si nécessaire, nous pouvons notifier votre tuteur."}]},{name:"Gestionnaire de vie et autres",questions:[{q:"Pouvez-vous fournir des informations météorologiques ou d'horaires?",a:"Oui. Nous fournissons des conseils immédiats par téléphone."},{q:"Pouvez-vous me rappeler de prendre des médicaments?",a:"Oui. Nous aidons avec les rappels de la vie quotidienne."},{q:"Que se passe-t-il dans des situations urgentes?",a:"Nous vous connectons immédiatement à l'aide."},{q:"Comment utiliser à nouveau le service?",a:"Appelez simplement à tout moment."},{q:"Quel est le plus grand avantage de ce service?",a:"Vous n'avez pas à résoudre les problèmes seul."}]}]},Os={tagline:"Seul mais pas seul - avec SOLOCALL",contact:"Contact: support@solocall.com",copyright:"© 2026 SOLOCALL. Tous droits réservés."},Ls={lang:bs,langName:qs,meta:ys,nav:xs,hero:ws,features:Ss,howItWorks:As,faq:Cs,footer:Os},Is="pt",zs="Português",ks={title:"SOLOCALL | Plataforma de Suporte de Vida com IA baseada em Voz",description:"Plataforma de suporte de vida com IA baseada em telefone para pessoas de meia-idade e idosos que vivem sozinhos. Resolva consultas médicas, procedimentos administrativos e informações de saúde com uma única chamada."},Es={home:"Início",about:"Sobre",features:"Recursos",faq:"FAQ",contact:"Contato"},Fs={title:"Sozinho, mas não solitário",subtitle:"Seu parceiro de vida com IA<br/>Resolvendo desafios diários com uma chamada",description:"Uma plataforma baseada em voz que gerencia consultas médicas, procedimentos administrativos<br/>e informações de saúde por telefone - sem necessidade de instalação de aplicativo.",cta:"Começar",callNow:"Ligar agora"},Ps={title:"Serviços SOLOCALL",subtitle:"Tudo resolvido com uma chamada telefônica",items:[{icon:"fa-phone-volume",title:"Representação em Hospital e Escritórios Públicos",description:"A IA cuida de consultas médicas e consultas a escritórios públicos para você. Obtenha resultados sem esperar."},{icon:"fa-heartbeat",title:"Resumo de Informações de Saúde",description:"Conte-nos seus sintomas e vamos organizá-los. Também prepararemos perguntas para sua visita ao hospital."},{icon:"fa-users",title:"Ponte de Comunicação Familiar",description:"Compartilhe seu status com a família apenas quando necessário. Conexão para tranquilidade, não vigilância."},{icon:"fa-shield-alt",title:"Detecção de Chamadas Fraudulentas",description:"Detecção em tempo real de chamadas suspeitas de phishing com alertas imediatos."},{icon:"fa-clipboard-list",title:"Gerente de Vida",description:"Gerencie a vida diária por telefone: clima, agendas, lembretes de medicamentos e mais."},{icon:"fa-hand-holding-heart",title:"Verificação de Bem-Estar 24/7",description:"Chamadas de verificação programadas. Fale devagar e confortavelmente no seu próprio ritmo."}]},Ns={title:"Como usar",steps:[{number:"1",title:"Ligar",description:"Ligue ou receba uma chamada do número registrado"},{number:"2",title:"Falar",description:"Diga-nos o que você precisa, devagar e confortavelmente"},{number:"3",title:"Resolvido",description:"A IA cuida e fornece os resultados"}]},Rs={title:"Perguntas frequentes",subtitle:"Encontre respostas para suas perguntas",categories:[{name:"Compreensão básica do serviço",questions:[{q:"O que este serviço ajuda?",a:"Com uma chamada, cuidamos ou organizamos problemas hospitalares, administrativos, de saúde e da vida diária para você."},{q:"Preciso instalar um aplicativo?",a:"Não. Você só precisa de um telefone para usar o serviço."},{q:"Para quem é este serviço?",a:"Este é um serviço de suporte de vida baseado em telefone para pessoas de meia-idade e idosos que vivem sozinhos."},{q:"Operações complicadas são necessárias?",a:"Não. Você só precisa falar."},{q:"Estou falando com um agente humano?",a:"Em vez de uma pessoa, a IA ajuda você por telefone."},{q:"Posso falar devagar?",a:"Sim. Você pode falar devagar e confortavelmente."},{q:"Ele lembra de conversas anteriores?",a:"Sim. Ele faz referência a conversas anteriores para ajudá-lo melhor."}]},{name:"Representação em Hospital e Escritórios Públicos",questions:[{q:"Vocês podem marcar consultas médicas para mim?",a:"Sim. Ligamos diretamente para o hospital para cuidar de consultas e solicitações."},{q:"Vocês podem lidar com escritórios distritais ou centros comunitários?",a:"Sim. Verificamos procedimentos, documentos e departamentos relevantes para você."},{q:"Vocês podem esperar em espera por mim?",a:"Sim. Lidamos com sistemas de espera e IVR - você apenas recebe os resultados."},{q:"Como os resultados são entregues?",a:"Ligamos de volta para explicar ou resumir os resultados."},{q:"Posso solicitar várias revisões?",a:"Sim. Se você precisar reconfirmar, ligaremos novamente."},{q:"Que tipos de chamadas vocês podem fazer por mim?",a:"Hospitais, instituições públicas e solicitações de serviços diários."},{q:"E se a chamada não se conectar?",a:"Tentaremos novamente ou forneceremos soluções alternativas."}]},{name:"Resumo de Informações de Saúde (não médico)",questions:[{q:"Posso descrever meus sintomas?",a:"Sim. Organizaremos as informações para você."},{q:"Vocês me dirão se eu devo ir ao hospital?",a:"Não é um diagnóstico, mas podemos aconselhar se uma visita é recomendada."},{q:"Vocês substituem consultas médicas?",a:"Não. Não realizamos atos médicos."},{q:"Vocês podem me ajudar a preparar perguntas antes da minha visita ao hospital?",a:"Sim. Organizaremos perguntas necessárias para você."},{q:"Posso obter ajuda quando estou ansioso?",a:"Sim. Organizaremos a situação e forneceremos orientação."},{q:"Registros de saúde são mantidos?",a:"Apenas na extensão necessária."}]},{name:"Ponte de Comunicação Familiar",questions:[{q:"Meu status será compartilhado com a família?",a:"Apenas brevemente e apenas quando necessário."},{q:"Minha família é sempre notificada?",a:"Não. Apenas em situações incomuns."},{q:"Vou me sentir vigiado?",a:"Não. Priorizamos sua autonomia."},{q:"Quais informações são compartilhadas?",a:"Apenas informações mínimas como resumos de condição."},{q:"Posso desativar o compartilhamento se não quiser?",a:"Sim. Você pode ajustar as configurações a qualquer momento."}]},{name:"Detecção de Chamadas Fraudulentas e de Risco",questions:[{q:"Vocês podem bloquear phishing de voz?",a:"Sim. Detectamos chamadas suspeitas em tempo real."},{q:"Como os riscos são comunicados?",a:"Você receberá um alerta de voz imediato durante a chamada."},{q:"Vocês explicarão por que é arriscado?",a:"Sim. Fornecemos explicações claras e simples."},{q:"Tenho que desligar eu mesmo?",a:"Sim. A decisão de desligar é sua."},{q:"Minha família será notificada?",a:"Se necessário, podemos notificar seu responsável."}]},{name:"Gerente de Vida e Outros",questions:[{q:"Vocês podem fornecer informações meteorológicas ou de agendas?",a:"Sim. Fornecemos orientação imediata por telefone."},{q:"Vocês podem me lembrar de tomar medicamentos?",a:"Sim. Ajudamos com lembretes da vida diária."},{q:"O que acontece em situações urgentes?",a:"Conectamos você imediatamente à ajuda."},{q:"Como usar o serviço novamente?",a:"Apenas ligue a qualquer momento."},{q:"Qual é a maior vantagem deste serviço?",a:"Você não precisa resolver problemas sozinho."}]}]},js={tagline:"Sozinho, mas não solitário - com SOLOCALL",contact:"Contato: support@solocall.com",copyright:"© 2026 SOLOCALL. Todos os direitos reservados."},$s={lang:Is,langName:zs,meta:ks,nav:Es,hero:Fs,features:Ps,howItWorks:Ns,faq:Rs,footer:js},Ws="pt",Vs="Português",Ts={title:"SOLOCALL | Plataforma de Suporte de Vida com IA baseada em Voz",description:"Plataforma de suporte de vida com IA baseada em telefone para pessoas de meia-idade e idosos que vivem sozinhos. Resolva consultas médicas, procedimentos administrativos e informações de saúde com uma única chamada."},Ds={home:"Início",about:"Sobre",features:"Recursos",faq:"FAQ",contact:"Contato"},Hs={title:"Sozinho, mas não solitário",subtitle:"Seu parceiro de vida com IA<br/>Resolvendo desafios diários com uma chamada",description:"Uma plataforma baseada em voz que gerencia consultas médicas, procedimentos administrativos<br/>e informações de saúde por telefone - sem necessidade de instalação de aplicativo.",cta:"Começar",callNow:"Ligar agora"},_s={title:"Serviços SOLOCALL",subtitle:"Tudo resolvido com uma chamada telefônica",items:[{icon:"fa-phone-volume",title:"Representação em Hospital e Escritórios Públicos",description:"A IA cuida de consultas médicas e consultas a escritórios públicos para você. Obtenha resultados sem esperar."},{icon:"fa-heartbeat",title:"Resumo de Informações de Saúde",description:"Conte-nos seus sintomas e vamos organizá-los. Também prepararemos perguntas para sua visita ao hospital."},{icon:"fa-users",title:"Ponte de Comunicação Familiar",description:"Compartilhe seu status com a família apenas quando necessário. Conexão para tranquilidade, não vigilância."},{icon:"fa-shield-alt",title:"Detecção de Chamadas Fraudulentas",description:"Detecção em tempo real de chamadas suspeitas de phishing com alertas imediatos."},{icon:"fa-clipboard-list",title:"Gerente de Vida",description:"Gerencie a vida diária por telefone: clima, agendas, lembretes de medicamentos e mais."},{icon:"fa-hand-holding-heart",title:"Verificação de Bem-Estar 24/7",description:"Chamadas de verificação programadas. Fale devagar e confortavelmente no seu próprio ritmo."}]},Ms={title:"Como usar",steps:[{number:"1",title:"Ligar",description:"Ligue ou receba uma chamada do número registrado"},{number:"2",title:"Falar",description:"Diga-nos o que você precisa, devagar e confortavelmente"},{number:"3",title:"Resolvido",description:"A IA cuida e fornece os resultados"}]},Bs={title:"Perguntas frequentes",subtitle:"Encontre respostas para suas perguntas",categories:[{name:"Compreensão básica do serviço",questions:[{q:"O que este serviço ajuda?",a:"Com uma chamada, cuidamos ou organizamos problemas hospitalares, administrativos, de saúde e da vida diária para você."},{q:"Preciso instalar um aplicativo?",a:"Não. Você só precisa de um telefone para usar o serviço."},{q:"Para quem é este serviço?",a:"Este é um serviço de suporte de vida baseado em telefone para pessoas de meia-idade e idosos que vivem sozinhos."},{q:"Operações complicadas são necessárias?",a:"Não. Você só precisa falar."},{q:"Estou falando com um agente humano?",a:"Em vez de uma pessoa, a IA ajuda você por telefone."},{q:"Posso falar devagar?",a:"Sim. Você pode falar devagar e confortavelmente."},{q:"Ele lembra de conversas anteriores?",a:"Sim. Ele faz referência a conversas anteriores para ajudá-lo melhor."}]},{name:"Representação em Hospital e Escritórios Públicos",questions:[{q:"Vocês podem marcar consultas médicas para mim?",a:"Sim. Ligamos diretamente para o hospital para cuidar de consultas e solicitações."},{q:"Vocês podem lidar com escritórios distritais ou centros comunitários?",a:"Sim. Verificamos procedimentos, documentos e departamentos relevantes para você."},{q:"Vocês podem esperar em espera por mim?",a:"Sim. Lidamos com sistemas de espera e IVR - você apenas recebe os resultados."},{q:"Como os resultados são entregues?",a:"Ligamos de volta para explicar ou resumir os resultados."},{q:"Posso solicitar várias revisões?",a:"Sim. Se você precisar reconfirmar, ligaremos novamente."},{q:"Que tipos de chamadas vocês podem fazer por mim?",a:"Hospitais, instituições públicas e solicitações de serviços diários."},{q:"E se a chamada não se conectar?",a:"Tentaremos novamente ou forneceremos soluções alternativas."}]},{name:"Resumo de Informações de Saúde (não médico)",questions:[{q:"Posso descrever meus sintomas?",a:"Sim. Organizaremos as informações para você."},{q:"Vocês me dirão se eu devo ir ao hospital?",a:"Não é um diagnóstico, mas podemos aconselhar se uma visita é recomendada."},{q:"Vocês substituem consultas médicas?",a:"Não. Não realizamos atos médicos."},{q:"Vocês podem me ajudar a preparar perguntas antes da minha visita ao hospital?",a:"Sim. Organizaremos perguntas necessárias para você."},{q:"Posso obter ajuda quando estou ansioso?",a:"Sim. Organizaremos a situação e forneceremos orientação."},{q:"Registros de saúde são mantidos?",a:"Apenas na extensão necessária."}]},{name:"Ponte de Comunicação Familiar",questions:[{q:"Meu status será compartilhado com a família?",a:"Apenas brevemente e apenas quando necessário."},{q:"Minha família é sempre notificada?",a:"Não. Apenas em situações incomuns."},{q:"Vou me sentir vigiado?",a:"Não. Priorizamos sua autonomia."},{q:"Quais informações são compartilhadas?",a:"Apenas informações mínimas como resumos de condição."},{q:"Posso desativar o compartilhamento se não quiser?",a:"Sim. Você pode ajustar as configurações a qualquer momento."}]},{name:"Detecção de Chamadas Fraudulentas e de Risco",questions:[{q:"Vocês podem bloquear phishing de voz?",a:"Sim. Detectamos chamadas suspeitas em tempo real."},{q:"Como os riscos são comunicados?",a:"Você receberá um alerta de voz imediato durante a chamada."},{q:"Vocês explicarão por que é arriscado?",a:"Sim. Fornecemos explicações claras e simples."},{q:"Tenho que desligar eu mesmo?",a:"Sim. A decisão de desligar é sua."},{q:"Minha família será notificada?",a:"Se necessário, podemos notificar seu responsável."}]},{name:"Gerente de Vida e Outros",questions:[{q:"Vocês podem fornecer informações meteorológicas ou de agendas?",a:"Sim. Fornecemos orientação imediata por telefone."},{q:"Vocês podem me lembrar de tomar medicamentos?",a:"Sim. Ajudamos com lembretes da vida diária."},{q:"O que acontece em situações urgentes?",a:"Conectamos você imediatamente à ajuda."},{q:"Como usar o serviço novamente?",a:"Apenas ligue a qualquer momento."},{q:"Qual é a maior vantagem deste serviço?",a:"Você não precisa resolver problemas sozinho."}]}]},Ys={tagline:"Sozinho, mas não solitário - com SOLOCALL",contact:"Contato: support@solocall.com",copyright:"© 2026 SOLOCALL. Todos os direitos reservados."},Ks={lang:Ws,langName:Vs,meta:Ts,nav:Ds,hero:Hs,features:_s,howItWorks:Ms,faq:Bs,footer:Ys},Gs="pt",Us="Português",Qs={title:"SOLOCALL | Plataforma de Suporte de Vida com IA baseada em Voz",description:"Plataforma de suporte de vida com IA baseada em telefone para pessoas de meia-idade e idosos que vivem sozinhos. Resolva consultas médicas, procedimentos administrativos e informações de saúde com uma única chamada."},Js={home:"Início",about:"Sobre",features:"Recursos",faq:"FAQ",contact:"Contato"},Xs={title:"Sozinho, mas não solitário",subtitle:"Seu parceiro de vida com IA<br/>Resolvendo desafios diários com uma chamada",description:"Uma plataforma baseada em voz que gerencia consultas médicas, procedimentos administrativos<br/>e informações de saúde por telefone - sem necessidade de instalação de aplicativo.",cta:"Começar",callNow:"Ligar agora"},Zs={title:"Serviços SOLOCALL",subtitle:"Tudo resolvido com uma chamada telefônica",items:[{icon:"fa-phone-volume",title:"Representação em Hospital e Escritórios Públicos",description:"A IA cuida de consultas médicas e consultas a escritórios públicos para você. Obtenha resultados sem esperar."},{icon:"fa-heartbeat",title:"Resumo de Informações de Saúde",description:"Conte-nos seus sintomas e vamos organizá-los. Também prepararemos perguntas para sua visita ao hospital."},{icon:"fa-users",title:"Ponte de Comunicação Familiar",description:"Compartilhe seu status com a família apenas quando necessário. Conexão para tranquilidade, não vigilância."},{icon:"fa-shield-alt",title:"Detecção de Chamadas Fraudulentas",description:"Detecção em tempo real de chamadas suspeitas de phishing com alertas imediatos."},{icon:"fa-clipboard-list",title:"Gerente de Vida",description:"Gerencie a vida diária por telefone: clima, agendas, lembretes de medicamentos e mais."},{icon:"fa-hand-holding-heart",title:"Verificação de Bem-Estar 24/7",description:"Chamadas de verificação programadas. Fale devagar e confortavelmente no seu próprio ritmo."}]},eo={title:"Como usar",steps:[{number:"1",title:"Ligar",description:"Ligue ou receba uma chamada do número registrado"},{number:"2",title:"Falar",description:"Diga-nos o que você precisa, devagar e confortavelmente"},{number:"3",title:"Resolvido",description:"A IA cuida e fornece os resultados"}]},ao={title:"Perguntas frequentes",subtitle:"Encontre respostas para suas perguntas",categories:[{name:"Compreensão básica do serviço",questions:[{q:"O que este serviço ajuda?",a:"Com uma chamada, cuidamos ou organizamos problemas hospitalares, administrativos, de saúde e da vida diária para você."},{q:"Preciso instalar um aplicativo?",a:"Não. Você só precisa de um telefone para usar o serviço."},{q:"Para quem é este serviço?",a:"Este é um serviço de suporte de vida baseado em telefone para pessoas de meia-idade e idosos que vivem sozinhos."},{q:"Operações complicadas são necessárias?",a:"Não. Você só precisa falar."},{q:"Estou falando com um agente humano?",a:"Em vez de uma pessoa, a IA ajuda você por telefone."},{q:"Posso falar devagar?",a:"Sim. Você pode falar devagar e confortavelmente."},{q:"Ele lembra de conversas anteriores?",a:"Sim. Ele faz referência a conversas anteriores para ajudá-lo melhor."}]},{name:"Representação em Hospital e Escritórios Públicos",questions:[{q:"Vocês podem marcar consultas médicas para mim?",a:"Sim. Ligamos diretamente para o hospital para cuidar de consultas e solicitações."},{q:"Vocês podem lidar com escritórios distritais ou centros comunitários?",a:"Sim. Verificamos procedimentos, documentos e departamentos relevantes para você."},{q:"Vocês podem esperar em espera por mim?",a:"Sim. Lidamos com sistemas de espera e IVR - você apenas recebe os resultados."},{q:"Como os resultados são entregues?",a:"Ligamos de volta para explicar ou resumir os resultados."},{q:"Posso solicitar várias revisões?",a:"Sim. Se você precisar reconfirmar, ligaremos novamente."},{q:"Que tipos de chamadas vocês podem fazer por mim?",a:"Hospitais, instituições públicas e solicitações de serviços diários."},{q:"E se a chamada não se conectar?",a:"Tentaremos novamente ou forneceremos soluções alternativas."}]},{name:"Resumo de Informações de Saúde (não médico)",questions:[{q:"Posso descrever meus sintomas?",a:"Sim. Organizaremos as informações para você."},{q:"Vocês me dirão se eu devo ir ao hospital?",a:"Não é um diagnóstico, mas podemos aconselhar se uma visita é recomendada."},{q:"Vocês substituem consultas médicas?",a:"Não. Não realizamos atos médicos."},{q:"Vocês podem me ajudar a preparar perguntas antes da minha visita ao hospital?",a:"Sim. Organizaremos perguntas necessárias para você."},{q:"Posso obter ajuda quando estou ansioso?",a:"Sim. Organizaremos a situação e forneceremos orientação."},{q:"Registros de saúde são mantidos?",a:"Apenas na extensão necessária."}]},{name:"Ponte de Comunicação Familiar",questions:[{q:"Meu status será compartilhado com a família?",a:"Apenas brevemente e apenas quando necessário."},{q:"Minha família é sempre notificada?",a:"Não. Apenas em situações incomuns."},{q:"Vou me sentir vigiado?",a:"Não. Priorizamos sua autonomia."},{q:"Quais informações são compartilhadas?",a:"Apenas informações mínimas como resumos de condição."},{q:"Posso desativar o compartilhamento se não quiser?",a:"Sim. Você pode ajustar as configurações a qualquer momento."}]},{name:"Detecção de Chamadas Fraudulentas e de Risco",questions:[{q:"Vocês podem bloquear phishing de voz?",a:"Sim. Detectamos chamadas suspeitas em tempo real."},{q:"Como os riscos são comunicados?",a:"Você receberá um alerta de voz imediato durante a chamada."},{q:"Vocês explicarão por que é arriscado?",a:"Sim. Fornecemos explicações claras e simples."},{q:"Tenho que desligar eu mesmo?",a:"Sim. A decisão de desligar é sua."},{q:"Minha família será notificada?",a:"Se necessário, podemos notificar seu responsável."}]},{name:"Gerente de Vida e Outros",questions:[{q:"Vocês podem fornecer informações meteorológicas ou de agendas?",a:"Sim. Fornecemos orientação imediata por telefone."},{q:"Vocês podem me lembrar de tomar medicamentos?",a:"Sim. Ajudamos com lembretes da vida diária."},{q:"O que acontece em situações urgentes?",a:"Conectamos você imediatamente à ajuda."},{q:"Como usar o serviço novamente?",a:"Apenas ligue a qualquer momento."},{q:"Qual é a maior vantagem deste serviço?",a:"Você não precisa resolver problemas sozinho."}]}]},to={tagline:"Sozinho, mas não solitário - com SOLOCALL",contact:"Contato: support@solocall.com",copyright:"© 2026 SOLOCALL. Todos os direitos reservados."},so={lang:Gs,langName:Us,meta:Qs,nav:Js,hero:Xs,features:Zs,howItWorks:eo,faq:ao,footer:to},oo="en",io="English",no={title:"SOLOCALL | AI Voice-First Life Support Platform",description:"Phone-based AI life support platform for middle-aged and senior individuals living alone. Solve hospital appointments, administrative procedures, and health information with just one call."},ro={home:"Home",about:"About",features:"Features",faq:"FAQ",contact:"Contact"},lo={title:"Alone, but Not Lonely",subtitle:"Your AI Life Partner<br/>Solving Daily Challenges with One Call",description:"A voice-first platform that handles hospital appointments, administrative procedures,<br/>and health information via phone - no app installation required.",cta:"Get Started",callNow:"Call Now"},co={title:"SOLOCALL Services",subtitle:"Everything solved with one phone call",items:[{icon:"fa-phone-volume",title:"Hospital & Public Office Proxy",description:"AI handles hospital appointments and public office inquiries for you. Get results without waiting."},{icon:"fa-heartbeat",title:"Health Information Summary",description:"Tell us your symptoms and we'll organize them. We'll also prepare questions for your hospital visit."},{icon:"fa-users",title:"Family Communication Bridge",description:"Share your status with family only when necessary. Connection for peace of mind, not surveillance."},{icon:"fa-shield-alt",title:"Scam Call Detection",description:"Real-time detection of suspected voice phishing calls with immediate alerts."},{icon:"fa-clipboard-list",title:"Life Manager",description:"Manage daily life via phone: weather, schedules, medication reminders, and more."},{icon:"fa-hand-holding-heart",title:"24/7 Welfare Check",description:"Scheduled check-in calls. Speak slowly and comfortably at your own pace."}]},uo={title:"How to Use",steps:[{number:"1",title:"Call",description:"Call or receive a call from the registered number"},{number:"2",title:"Speak",description:"Tell us what you need, slowly and comfortably"},{number:"3",title:"Solved",description:"AI handles it and provides you with the results"}]},mo={title:"Frequently Asked Questions",subtitle:"Find answers to your questions",categories:[{name:"Basic Service Understanding",questions:[{q:"What does this service help with?",a:"With one phone call, we handle or organize hospital, administrative, health, and daily life issues for you."},{q:"Do I need to install an app?",a:"No. You only need a phone to use the service."},{q:"Who is this service for?",a:"This is a phone-based life support service for middle-aged and senior individuals living alone."},{q:"Do I need complicated operations?",a:"No. You just need to speak."},{q:"Am I speaking with a human agent?",a:"Instead of a person, AI helps you over the phone."},{q:"Can I speak slowly?",a:"Yes. You can speak slowly and comfortably."},{q:"Does it remember previous conversations?",a:"Yes. It references previous conversations to help you better."}]},{name:"Hospital & Public Office Proxy",questions:[{q:"Can you make hospital appointments for me?",a:"Yes. We call the hospital directly to handle appointments and inquiries."},{q:"Can you handle district offices or community centers?",a:"Yes. We check procedures, documents, and relevant departments for you."},{q:"Can you wait on hold for me?",a:"Yes. We handle waiting and IVR systems - you just get the results."},{q:"How are results delivered?",a:"We call you back to explain or summarize the results."},{q:"Can I request multiple revisions?",a:"Yes. If you need to reconfirm, we'll call again."},{q:"What types of calls can you make for me?",a:"Hospitals, public institutions, and daily service inquiries."},{q:"What if the call doesn't go through?",a:"We'll try again or provide alternative solutions."}]},{name:"Health Information Summary (Non-medical)",questions:[{q:"Can I describe my symptoms?",a:"Yes. We'll organize the information for you."},{q:"Will you tell me if I should go to the hospital?",a:"It's not a diagnosis, but we can advise whether a visit is recommended."},{q:"Do you replace doctor consultations?",a:"No. We do not perform medical acts."},{q:"Can you help prepare questions before my hospital visit?",a:"Yes. We'll organize necessary questions for you."},{q:"Can I get help when I'm anxious?",a:"Yes. We'll organize the situation and provide guidance."},{q:"Are health records kept?",a:"Only to the extent necessary."}]},{name:"Family Communication Bridge",questions:[{q:"Will my status be shared with family?",a:"Only briefly and only when necessary."},{q:"Is my family always notified?",a:"No. Only in unusual situations."},{q:"Will I feel surveilled?",a:"No. We prioritize your autonomy."},{q:"What information is shared?",a:"Only minimal information such as condition summaries."},{q:"Can I turn off sharing if I don't want it?",a:"Yes. You can adjust settings anytime."}]},{name:"Scam & Risk Call Detection",questions:[{q:"Can you block voice phishing?",a:"Yes. We detect suspicious calls in real-time."},{q:"How are risks communicated?",a:"You'll receive an immediate voice alert during the call."},{q:"Will you explain why it's risky?",a:"Yes. We provide clear and simple explanations."},{q:"Do I have to hang up myself?",a:"Yes. The decision to hang up is yours."},{q:"Will my family be notified?",a:"If necessary, we can notify your guardian."}]},{name:"Life Manager & Others",questions:[{q:"Can you provide weather or schedule information?",a:"Yes. We provide immediate guidance via phone."},{q:"Can you remind me to take medication?",a:"Yes. We help with daily life reminders."},{q:"What happens in urgent situations?",a:"We immediately connect you to help."},{q:"How do I use the service again?",a:"Just call anytime."},{q:"What's the biggest advantage of this service?",a:"You don't have to solve problems alone."}]}]},po={tagline:"Alone, but not lonely - with SOLOCALL",contact:"Contact: support@solocall.com",copyright:"© 2026 SOLOCALL. All rights reserved."},ho={lang:oo,langName:io,meta:no,nav:ro,hero:lo,features:co,howItWorks:uo,faq:mo,footer:po},Be={ko:xt,en:Et,ja:Dt,de:Jt,"zh-CN":rs,es:vs,fr:Ls,pt:$s,it:Ks,"pt-BR":so,"en-GB":ho},fo=[{code:"ko",name:"한국어",flag:"🇰🇷"},{code:"en",name:"English",flag:"🇺🇸"},{code:"en-GB",name:"English (UK)",flag:"🇬🇧"},{code:"ja",name:"日本語",flag:"🇯🇵"},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"zh-CN",name:"简体中文",flag:"🇨🇳"},{code:"es",name:"Español",flag:"🇪🇸"},{code:"fr",name:"Français",flag:"🇫🇷"},{code:"pt",name:"Português",flag:"🇵🇹"},{code:"pt-BR",name:"Português (Brasil)",flag:"🇧🇷"},{code:"it",name:"Italiano",flag:"🇮🇹"}];function go(e){return Be[e]||Be.en}const me=new ha;me.use("/api/*",at());me.use("/static/*",ut({root:"./public"}));me.get("/api/locale/:lang",e=>{const a=e.req.param("lang"),t=go(a);return e.json(t)});me.get("/api/languages",e=>e.json(fo));me.get("/",e=>{const t=(e.req.header("Accept-Language")||"ko").split(",")[0].split("-")[0]||"ko";return e.html(`
    <!DOCTYPE html>
    <html lang="${t}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="SOLOCALL - AI Voice-First Life Support Platform">
        <title>SOLOCALL - 솔로콜</title>
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
        
        <!-- Icons -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- TailwindCSS -->
        <script src="https://cdn.tailwindcss.com"><\/script>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  'brand-navy': '#2F3A4A',
                  'brand-gray': '#8B9098',
                  'brand-white': '#F4F6F8',
                  'brand-sage': '#6F8F7E'
                },
                fontFamily: {
                  'sans': ['Noto Sans KR', 'Inter', 'sans-serif'],
                  'inter': ['Inter', 'sans-serif']
                }
              }
            }
          }
        <\/script>
        
        <!-- Custom CSS -->
        <style>
          body {
            font-family: 'Noto Sans KR', 'Inter', sans-serif;
            background-color: #F4F6F8;
            color: #2F3A4A;
          }
          
          .hero-gradient {
            background: linear-gradient(135deg, #2F3A4A 0%, #1F3C5A 100%);
          }
          
          .feature-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(47, 58, 74, 0.15);
          }
          
          .smooth-scroll {
            scroll-behavior: smooth;
          }
          
          .fade-in {
            animation: fadeIn 0.6s ease-in;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .lang-selector {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          
          .lang-selector.open {
            max-height: 400px;
          }
          
          .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          
          .faq-answer.open {
            max-height: 500px;
          }
          
          /* 모바일에서 features-title 30% 축소 */
          @media (max-width: 768px) {
            #features-title {
              font-size: 1.4rem !important;
              line-height: 1.2;
            }
            
            /* 모바일에서 곤색 헤더(Hero) 여백 축소 */
            #home {
              padding-top: 5rem !important;
              padding-bottom: 3rem !important;
            }
            
            /* 모바일에서 섹션 여백 축소 */
            #features, #how-it-works, #faq {
              padding-top: 2.5rem !important;
              padding-bottom: 2.5rem !important;
            }
            
            /* 모바일에서 제목 하단 여백 축소 */
            #home .max-w-6xl {
              margin-bottom: 0 !important;
            }
            
            #hero-title {
              margin-bottom: 1rem !important;
            }
            
            #hero-subtitle {
              margin-bottom: 0.75rem !important;
            }
            
            #hero-description {
              margin-bottom: 1.5rem !important;
            }
          }
          
          /* 챗봇 버튼 스타일 */
          #chatbot-button {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #6F8F7E 0%, #5a7366 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-center;
            box-shadow: 0 4px 12px rgba(111, 143, 126, 0.4);
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
          }
          
          #chatbot-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 16px rgba(111, 143, 126, 0.6);
          }
          
          #chatbot-button i {
            color: white;
            font-size: 24px;
          }
          
          /* 챗봇 모달 */
          #chatbot-modal {
            display: none;
            position: fixed;
            bottom: 100px;
            right: 24px;
            width: 90%;
            max-width: 400px;
            max-height: 600px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(47, 58, 74, 0.2);
            z-index: 999;
            overflow: hidden;
          }
          
          #chatbot-modal.active {
            display: flex;
            flex-direction: column;
            animation: slideUp 0.3s ease;
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          #chatbot-header {
            background: linear-gradient(135deg, #2F3A4A 0%, #1F3C5A 100%);
            color: white;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          #chatbot-content {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
          }
          
          .faq-item-chatbot {
            background: #F4F6F8;
            padding: 12px;
            margin-bottom: 8px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .faq-item-chatbot:hover {
            background: #e8eaed;
          }
          
          .faq-item-chatbot-question {
            font-weight: 500;
            color: #2F3A4A;
            margin-bottom: 8px;
          }
          
          .faq-item-chatbot-answer {
            font-size: 0.9rem;
            color: #8B9098;
            display: none;
          }
          
          .faq-item-chatbot.active .faq-item-chatbot-answer {
            display: block;
          }
          
          #chatbot-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            padding: 12px;
            border-top: 1px solid #e5e7eb;
          }
          
          .page-btn {
            padding: 6px 12px;
            background: #F4F6F8;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .page-btn:hover {
            background: #e8eaed;
          }
          
          .page-btn.active {
            background: #6F8F7E;
            color: white;
          }
          
          .page-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        </style>
    </head>
    <body class="smooth-scroll">
        <!-- Navigation -->
        <nav class="bg-white shadow-md fixed w-full top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <i class="fas fa-phone-volume text-brand-navy text-2xl mr-2"></i>
                        <span class="text-2xl font-bold text-brand-navy">SOLOCALL</span>
                    </div>
                    
                    <div class="hidden md:flex space-x-8">
                        <a href="#home" class="nav-link text-brand-navy hover:text-brand-sage transition">홈</a>
                        <a href="#features" class="nav-link text-brand-navy hover:text-brand-sage transition">서비스</a>
                        <a href="#how-it-works" class="nav-link text-brand-navy hover:text-brand-sage transition">사용방법</a>
                        <a href="#faq" class="nav-link text-brand-navy hover:text-brand-sage transition">FAQ</a>
                    </div>
                    
                    <div class="relative">
                        <button id="lang-toggle" class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-brand-white hover:bg-gray-200 transition">
                            <span id="current-lang-flag">🇰🇷</span>
                            <span id="current-lang-name" class="font-medium">한국어</span>
                            <i class="fas fa-chevron-down text-sm"></i>
                        </button>
                        <div id="lang-dropdown" class="lang-selector absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl">
                            <div id="lang-list" class="py-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="hero-gradient text-white pt-32 pb-20 px-4">
            <div class="max-w-6xl mx-auto text-center fade-in">
                <h1 id="hero-title" class="text-4xl md:text-6xl font-bold mb-6">
                    혼자지만 외롭지 않게
                </h1>
                <p id="hero-subtitle" class="text-xl md:text-2xl mb-4 text-gray-200">
                    전화 한 통으로 일상을 해결하는<br/>AI 생활 파트너
                </p>
                <p id="hero-description" class="text-base md:text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
                    앱 설치 없이 전화만으로 병원 예약, 행정 절차, 건강 정보를<br/>대신 처리해 드리는 음성 우선 플랫폼입니다.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <button id="cta-button" class="bg-white text-brand-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                        서비스 시작하기
                    </button>
                    <button id="call-button" class="bg-brand-sage text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition shadow-lg">
                        <i class="fas fa-phone mr-2"></i>지금 전화하기
                    </button>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-20 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 id="features-title" class="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                        SOLOCALL이 제공하는 서비스
                    </h2>
                    <p id="features-subtitle" class="text-lg text-brand-gray">
                        전화 한 통으로 모든 것이 해결됩니다
                    </p>
                </div>
                
                <div id="features-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Features will be populated by JavaScript -->
                </div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section id="how-it-works" class="py-20 px-4 bg-white">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <h2 id="how-it-works-title" class="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                        이렇게 사용하세요
                    </h2>
                </div>
                
                <div id="steps-container" class="flex flex-col md:flex-row justify-between items-center gap-8">
                    <!-- Steps will be populated by JavaScript -->
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section id="faq" class="py-20 px-4">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-16">
                    <h2 id="faq-title" class="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                        자주 묻는 질문
                    </h2>
                    <p id="faq-subtitle" class="text-lg text-brand-gray">
                        궁금한 점을 확인하세요
                    </p>
                </div>
                
                <div id="faq-container" class="space-y-6">
                    <!-- FAQ categories will be populated by JavaScript -->
                </div>
            </div>
        </section>

        <!-- Chatbot Button -->
        <div id="chatbot-button" title="FAQ 챗봇">
            <i class="fas fa-comments"></i>
        </div>

        <!-- Chatbot Modal -->
        <div id="chatbot-modal">
            <div id="chatbot-header">
                <div>
                    <h3 class="font-bold text-lg">FAQ 챗봇</h3>
                    <p class="text-sm opacity-80">자주 묻는 질문</p>
                </div>
                <button id="chatbot-close" class="text-white hover:text-gray-300 transition">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <div id="chatbot-content">
                <!-- FAQ items will be populated by JavaScript -->
            </div>
            <div id="chatbot-pagination">
                <button id="prev-page" class="page-btn">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <span id="page-info" class="text-sm text-brand-gray">1 / 4</span>
                <button id="next-page" class="page-btn">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>

        <!-- 서비스 시작하기 모달 -->
        <div id="onboarding-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9999; overflow-y:auto;">
            <div style="max-width:600px; margin:50px auto; background:white; border-radius:16px; padding:32px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                    <h2 style="font-size:24px; font-weight:bold; color:#2F3A4A;">서비스 시작하기</h2>
                    <button onclick="document.getElementById('onboarding-modal').style.display='none'" style="font-size:24px; color:#8B9098; border:none; background:none; cursor:pointer;">&times;</button>
                </div>
                
                <p style="color:#8B9098; margin-bottom:24px; font-size:14px;">필요한 정보만 먼저 알려주세요. 이 정보는 위급하거나 도움이 필요할 때만 사용됩니다.</p>
                
                <form id="onboarding-form" style="display:flex; flex-direction:column; gap:20px;">
                    <!-- Step 1: 기본 정보 -->
                    <div style="padding:20px; background:#F4F6F8; border-radius:8px;">
                        <h3 style="font-weight:600; margin-bottom:16px; color:#2F3A4A;">1. 기본 정보</h3>
                        <div style="display:grid; gap:12px;">
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">나이대</label>
                                <select name="age" required style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                                    <option value="">선택하세요</option>
                                    <option value="40대">40대</option>
                                    <option value="50대">50대</option>
                                    <option value="60대 이상">60대 이상</option>
                                </select>
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">성별</label>
                                <select name="gender" required style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                                    <option value="">선택하세요</option>
                                    <option value="남">남</option>
                                    <option value="여">여</option>
                                    <option value="선택 안 함">선택 안 함</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Step 2: 거주 지역 -->
                    <div style="padding:20px; background:#F4F6F8; border-radius:8px;">
                        <h3 style="font-weight:600; margin-bottom:16px; color:#2F3A4A;">2. 거주 지역</h3>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">시/도</label>
                                <input type="text" name="city" required placeholder="예: 서울" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">구/군</label>
                                <input type="text" name="district" required placeholder="예: 강남구" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                            </div>
                        </div>
                    </div>
                    
                    <!-- Step 3: 건강 관련 -->
                    <div style="padding:20px; background:#F4F6F8; border-radius:8px;">
                        <h3 style="font-weight:600; margin-bottom:16px; color:#2F3A4A;">3. 건강 관련 (선택)</h3>
                        <div style="display:grid; gap:12px;">
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">기저질환</label>
                                <div style="display:grid; gap:8px;">
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="없음"> 없음</label>
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="고혈압"> 고혈압</label>
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="당뇨"> 당뇨</label>
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="심장"> 심장</label>
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="호흡기"> 호흡기</label>
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="기타"> 기타</label>
                                </div>
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">복용 약</label>
                                <input type="text" name="medication" placeholder="예: 혈압약, 당뇨약" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                            </div>
                        </div>
                    </div>
                    
                    <!-- Step 4: 긴급 연락 -->
                    <div style="padding:20px; background:#F4F6F8; border-radius:8px;">
                        <h3 style="font-weight:600; margin-bottom:16px; color:#2F3A4A;">4. 긴급 연락 설정</h3>
                        <div style="display:grid; gap:12px;">
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">가족/자녀 이름</label>
                                <input type="text" name="contact_name" placeholder="예: 김철수" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">전화번호</label>
                                <input type="tel" name="contact_phone" placeholder="예: 010-1234-5678" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                            </div>
                            <label style="display:flex; align-items:center; gap:8px; font-size:14px;">
                                <input type="checkbox" name="alert_consent">
                                위험 상황 시 자동 알림 동의
                            </label>
                        </div>
                    </div>
                    
                    <button type="submit" style="width:100%; padding:16px; background:#6F8F7E; color:white; border:none; border-radius:8px; font-size:16px; font-weight:600; cursor:pointer;">
                        정보 저장하고 시작하기
                    </button>
                </form>
            </div>
        </div>

        <!-- 지금 전화하기 모달 -->
        <div id="call-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9999;">
            <div style="max-width:500px; margin:100px auto; background:white; border-radius:16px; padding:32px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                    <h2 style="font-size:24px; font-weight:bold; color:#2F3A4A;">지금 전화하기</h2>
                    <button onclick="document.getElementById('call-modal').style.display='none'" style="font-size:24px; color:#8B9098; border:none; background:none; cursor:pointer;">&times;</button>
                </div>
                
                <p style="color:#8B9098; margin-bottom:24px; font-size:14px;">지금 도움이 필요하신가요?</p>
                
                <div style="display:grid; gap:12px;">
                    <button onclick="alert('가족에게 연결 중입니다...')" style="width:100%; padding:20px; background:#F4F6F8; border:1px solid #ddd; border-radius:8px; text-align:left; cursor:pointer; transition:all 0.2s;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <i class="fas fa-user-friends" style="font-size:24px; color:#6F8F7E;"></i>
                            <div>
                                <div style="font-weight:600; color:#2F3A4A; margin-bottom:4px;">1️⃣ 가족에게 전화</div>
                                <div style="font-size:12px; color:#8B9098;">사전 등록된 번호로 즉시 연결</div>
                            </div>
                        </div>
                    </button>
                    
                    <button onclick="alert('가까운 병원을 찾고 있습니다...')" style="width:100%; padding:20px; background:#F4F6F8; border:1px solid #ddd; border-radius:8px; text-align:left; cursor:pointer; transition:all 0.2s;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <i class="fas fa-hospital" style="font-size:24px; color:#6F8F7E;"></i>
                            <div>
                                <div style="font-weight:600; color:#2F3A4A; margin-bottom:4px;">2️⃣ 가까운 병원 찾기</div>
                                <div style="font-size:12px; color:#8B9098;">현재 지역 기준 자동 검색 후 연결</div>
                            </div>
                        </div>
                    </button>
                    
                    <button onclick="if(confirm('119에 연결하시겠습니까?')) alert('119 연결 중...')" style="width:100%; padding:20px; background:#FF6B6B; border:1px solid #FF6B6B; border-radius:8px; text-align:left; cursor:pointer; transition:all 0.2s; color:white;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <i class="fas fa-ambulance" style="font-size:24px;"></i>
                            <div>
                                <div style="font-weight:600; margin-bottom:4px;">3️⃣ 119 응급 신고</div>
                                <div style="font-size:12px; opacity:0.9;">위급 상황 시 즉시 연결</div>
                            </div>
                        </div>
                    </button>
                    
                    <button onclick="alert('AI 상담 연결 중입니다...')" style="width:100%; padding:20px; background:#F4F6F8; border:1px solid #ddd; border-radius:8px; text-align:left; cursor:pointer; transition:all 0.2s;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <i class="fas fa-robot" style="font-size:24px; color:#6F8F7E;"></i>
                            <div>
                                <div style="font-weight:600; color:#2F3A4A; margin-bottom:4px;">4️⃣ AI에게 상담</div>
                                <div style="font-size:12px; color:#8B9098;">지금 상황을 말씀해 주세요</div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-brand-navy text-white py-12 px-4">
            <div class="max-w-7xl mx-auto text-center">
                <div class="mb-6">
                    <i class="fas fa-phone-volume text-4xl mb-4"></i>
                    <h3 class="text-2xl font-bold mb-2">SOLOCALL</h3>
                    <p id="footer-tagline" class="text-gray-300 mb-4">
                        혼자지만 외롭지 않게, SOLOCALL과 함께하세요
                    </p>
                </div>
                <div class="border-t border-gray-600 pt-6">
                    <p id="footer-contact" class="text-gray-400 mb-2">
                        문의: support@solocall.com
                    </p>
                    <p id="footer-copyright" class="text-gray-500 text-sm">
                        © 2026 SOLOCALL. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

        <!-- JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
          // 서비스 시작하기 버튼
          document.getElementById('cta-button').addEventListener('click', function() {
            document.getElementById('onboarding-modal').style.display = 'block';
          });
          
          // 지금 전화하기 버튼
          document.getElementById('call-button').addEventListener('click', function() {
            document.getElementById('call-modal').style.display = 'block';
          });
          
          // 온보딩 폼 제출
          document.getElementById('onboarding-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = {
              age: formData.get('age'),
              gender: formData.get('gender'),
              city: formData.get('city'),
              district: formData.get('district'),
              conditions: formData.getAll('condition'),
              medication: formData.get('medication'),
              contact_name: formData.get('contact_name'),
              contact_phone: formData.get('contact_phone'),
              alert_consent: formData.get('alert_consent') ? 'ON' : 'OFF'
            };
            
            // localStorage에 저장
            localStorage.setItem('solocall_user_info', JSON.stringify(data));
            
            // 모달 닫기
            document.getElementById('onboarding-modal').style.display = 'none';
            
            // 성공 메시지
            alert('정보가 저장되었습니다! 이제 SOLOCALL 서비스를 이용하실 수 있습니다.');
          });
          
          // 모달 외부 클릭 시 닫기
          window.addEventListener('click', function(e) {
            if (e.target.id === 'onboarding-modal') {
              document.getElementById('onboarding-modal').style.display = 'none';
            }
            if (e.target.id === 'call-modal') {
              document.getElementById('call-modal').style.display = 'none';
            }
          });
        <\/script>
        <script src="/static/app.js"><\/script>
    </body>
    </html>
  `)});const Ye=new ha,vo=Object.assign({"/src/index.tsx":me});let ga=!1;for(const[,e]of Object.entries(vo))e&&(Ye.all("*",a=>{let t;try{t=a.executionCtx}catch{}return e.fetch(a.req.raw,a.env,t)}),Ye.notFound(a=>{let t;try{t=a.executionCtx}catch{}return e.fetch(a.req.raw,a.env,t)}),ga=!0);if(!ga)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ye as default};
