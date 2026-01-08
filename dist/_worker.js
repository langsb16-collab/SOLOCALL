var xt=Object.defineProperty;var We=e=>{throw TypeError(e)};var yt=(e,t,a)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var m=(e,t,a)=>yt(e,typeof t!="symbol"?t+"":t,a),Pe=(e,t,a)=>t.has(e)||We("Cannot "+a);var n=(e,t,a)=>(Pe(e,t,"read from private field"),a?a.call(e):t.get(e)),f=(e,t,a)=>t.has(e)?We("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),p=(e,t,a,i)=>(Pe(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),v=(e,t,a)=>(Pe(e,t,"access private method"),a);var De=(e,t,a,i)=>({set _(s){p(e,t,s,a)},get _(){return n(e,t,i)}});var He=(e,t,a)=>(i,s)=>{let o=-1;return r(0);async function r(d){if(d<=o)throw new Error("next() called multiple times");o=d;let c,l=!1,u;if(e[d]?(u=e[d][0][0],i.req.routeIndex=d):u=d===e.length&&s||void 0,u)try{c=await u(i,()=>r(d+1))}catch(h){if(h instanceof Error&&t)i.error=h,c=await t(h,i),l=!0;else throw h}else i.finalized===!1&&a&&(c=await a(i));return c&&(i.finalized===!1||l)&&(i.res=c),i}},wt=Symbol(),qt=async(e,t=Object.create(null))=>{const{all:a=!1,dot:i=!1}=t,o=(e instanceof st?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?At(e,{all:a,dot:i}):{}};async function At(e,t){const a=await e.formData();return a?St(a,t):{}}function St(e,t){const a=Object.create(null);return e.forEach((i,s)=>{t.all||s.endsWith("[]")?Lt(a,s,i):a[s]=i}),t.dot&&Object.entries(a).forEach(([i,s])=>{i.includes(".")&&(Ct(a,i,s),delete a[i])}),a}var Lt=(e,t,a)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(a):e[t]=[e[t],a]:t.endsWith("[]")?e[t]=[a]:e[t]=a},Ct=(e,t,a)=>{let i=e;const s=t.split(".");s.forEach((o,r)=>{r===s.length-1?i[o]=a:((!i[o]||typeof i[o]!="object"||Array.isArray(i[o])||i[o]instanceof File)&&(i[o]=Object.create(null)),i=i[o])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Ot=e=>{const{groups:t,path:a}=It(e),i=Ze(a);return Et(i,t)},It=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(a,i)=>{const s=`@${i}`;return t.push([s,a]),s}),{groups:t,path:e}},Et=(e,t)=>{for(let a=t.length-1;a>=0;a--){const[i]=t[a];for(let s=e.length-1;s>=0;s--)if(e[s].includes(i)){e[s]=e[s].replace(i,t[a][1]);break}}return e},Le={},$t=(e,t)=>{if(e==="*")return"*";const a=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(a){const i=`${e}#${t}`;return Le[i]||(a[2]?Le[i]=t&&t[0]!==":"&&t[0]!=="*"?[i,a[1],new RegExp(`^${a[2]}(?=/${t})`)]:[e,a[1],new RegExp(`^${a[2]}$`)]:Le[i]=[e,a[1],!0]),Le[i]}return null},Fe=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,a=>{try{return t(a)}catch{return a}})}},Rt=e=>Fe(e,decodeURI),et=e=>{const t=e.url,a=t.indexOf("/",t.indexOf(":")+4);let i=a;for(;i<t.length;i++){const s=t.charCodeAt(i);if(s===37){const o=t.indexOf("?",i),r=t.slice(a,o===-1?void 0:o);return Rt(r.includes("%25")?r.replace(/%25/g,"%2525"):r)}else if(s===63)break}return t.slice(a,i)},zt=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ae=(e,t,...a)=>(a.length&&(t=ae(t,...a)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),a=[];let i="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))i+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){a.length===0&&i===""?a.push("/"):a.push(i);const o=s.replace("?","");i+="/"+o,a.push(i)}else i+="/"+s}),a.filter((s,o,r)=>r.indexOf(s)===o)},Ne=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Fe(e,it):e):e,at=(e,t,a)=>{let i;if(!a&&t&&!/[%+]/.test(t)){let r=e.indexOf("?",8);if(r===-1)return;for(e.startsWith(t,r+1)||(r=e.indexOf(`&${t}`,r+1));r!==-1;){const d=e.charCodeAt(r+t.length+1);if(d===61){const c=r+t.length+2,l=e.indexOf("&",c);return Ne(e.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";r=e.indexOf(`&${t}`,r+1)}if(i=/[%+]/.test(e),!i)return}const s={};i??(i=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const r=e.indexOf("&",o+1);let d=e.indexOf("=",o);d>r&&r!==-1&&(d=-1);let c=e.slice(o+1,d===-1?r===-1?void 0:r:d);if(i&&(c=Ne(c)),o=r,c==="")continue;let l;d===-1?l="":(l=e.slice(d+1,r===-1?void 0:r),i&&(l=Ne(l))),a?(s[c]&&Array.isArray(s[c])||(s[c]=[]),s[c].push(l)):s[c]??(s[c]=l)}return t?s[t]:s},Pt=at,Nt=(e,t)=>at(e,t,!0),it=decodeURIComponent,_e=e=>Fe(e,it),oe,O,T,ot,nt,je,H,Ve,st=(Ve=class{constructor(e,t="/",a=[[]]){f(this,T);m(this,"raw");f(this,oe);f(this,O);m(this,"routeIndex",0);m(this,"path");m(this,"bodyCache",{});f(this,H,e=>{const{bodyCache:t,raw:a}=this,i=t[e];if(i)return i;const s=Object.keys(t)[0];return s?t[s].then(o=>(s==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=a[e]()});this.raw=e,this.path=t,p(this,O,a),p(this,oe,{})}param(e){return e?v(this,T,ot).call(this,e):v(this,T,nt).call(this)}query(e){return Pt(this.url,e)}queries(e){return Nt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((a,i)=>{t[i]=a}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await qt(this,e))}json(){return n(this,H).call(this,"text").then(e=>JSON.parse(e))}text(){return n(this,H).call(this,"text")}arrayBuffer(){return n(this,H).call(this,"arrayBuffer")}blob(){return n(this,H).call(this,"blob")}formData(){return n(this,H).call(this,"formData")}addValidatedData(e,t){n(this,oe)[e]=t}valid(e){return n(this,oe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[wt](){return n(this,O)}get matchedRoutes(){return n(this,O)[0].map(([[,e]])=>e)}get routePath(){return n(this,O)[0].map(([[,e]])=>e)[this.routeIndex].path}},oe=new WeakMap,O=new WeakMap,T=new WeakSet,ot=function(e){const t=n(this,O)[0][this.routeIndex][1][e],a=v(this,T,je).call(this,t);return a&&/\%/.test(a)?_e(a):a},nt=function(){const e={},t=Object.keys(n(this,O)[0][this.routeIndex][1]);for(const a of t){const i=v(this,T,je).call(this,n(this,O)[0][this.routeIndex][1][a]);i!==void 0&&(e[a]=/\%/.test(i)?_e(i):i)}return e},je=function(e){return n(this,O)[1]?n(this,O)[1][e]:e},H=new WeakMap,Ve),kt={Stringify:1},rt=async(e,t,a,i,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(s?s[0]+=e:s=[e],Promise.all(o.map(d=>d({phase:t,buffer:s,context:i}))).then(d=>Promise.all(d.filter(Boolean).map(c=>rt(c,t,!1,i,s))).then(()=>s[0]))):Promise.resolve(e)},jt="text/plain; charset=UTF-8",ke=(e,t)=>({"Content-Type":e,...t}),ve,be,N,ne,k,C,xe,re,le,Y,ye,we,_,ie,Ke,Ft=(Ke=class{constructor(e,t){f(this,_);f(this,ve);f(this,be);m(this,"env",{});f(this,N);m(this,"finalized",!1);m(this,"error");f(this,ne);f(this,k);f(this,C);f(this,xe);f(this,re);f(this,le);f(this,Y);f(this,ye);f(this,we);m(this,"render",(...e)=>(n(this,re)??p(this,re,t=>this.html(t)),n(this,re).call(this,...e)));m(this,"setLayout",e=>p(this,xe,e));m(this,"getLayout",()=>n(this,xe));m(this,"setRenderer",e=>{p(this,re,e)});m(this,"header",(e,t,a)=>{this.finalized&&p(this,C,new Response(n(this,C).body,n(this,C)));const i=n(this,C)?n(this,C).headers:n(this,Y)??p(this,Y,new Headers);t===void 0?i.delete(e):a!=null&&a.append?i.append(e,t):i.set(e,t)});m(this,"status",e=>{p(this,ne,e)});m(this,"set",(e,t)=>{n(this,N)??p(this,N,new Map),n(this,N).set(e,t)});m(this,"get",e=>n(this,N)?n(this,N).get(e):void 0);m(this,"newResponse",(...e)=>v(this,_,ie).call(this,...e));m(this,"body",(e,t,a)=>v(this,_,ie).call(this,e,t,a));m(this,"text",(e,t,a)=>!n(this,Y)&&!n(this,ne)&&!t&&!a&&!this.finalized?new Response(e):v(this,_,ie).call(this,e,t,ke(jt,a)));m(this,"json",(e,t,a)=>v(this,_,ie).call(this,JSON.stringify(e),t,ke("application/json",a)));m(this,"html",(e,t,a)=>{const i=s=>v(this,_,ie).call(this,s,t,ke("text/html; charset=UTF-8",a));return typeof e=="object"?rt(e,kt.Stringify,!1,{}).then(i):i(e)});m(this,"redirect",(e,t)=>{const a=String(e);return this.header("Location",/[^\x00-\xFF]/.test(a)?encodeURI(a):a),this.newResponse(null,t??302)});m(this,"notFound",()=>(n(this,le)??p(this,le,()=>new Response),n(this,le).call(this,this)));p(this,ve,e),t&&(p(this,k,t.executionCtx),this.env=t.env,p(this,le,t.notFoundHandler),p(this,we,t.path),p(this,ye,t.matchResult))}get req(){return n(this,be)??p(this,be,new st(n(this,ve),n(this,we),n(this,ye))),n(this,be)}get event(){if(n(this,k)&&"respondWith"in n(this,k))return n(this,k);throw Error("This context has no FetchEvent")}get executionCtx(){if(n(this,k))return n(this,k);throw Error("This context has no ExecutionContext")}get res(){return n(this,C)||p(this,C,new Response(null,{headers:n(this,Y)??p(this,Y,new Headers)}))}set res(e){if(n(this,C)&&e){e=new Response(e.body,e);for(const[t,a]of n(this,C).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const i=n(this,C).headers.getSetCookie();e.headers.delete("set-cookie");for(const s of i)e.headers.append("set-cookie",s)}else e.headers.set(t,a)}p(this,C,e),this.finalized=!0}get var(){return n(this,N)?Object.fromEntries(n(this,N)):{}}},ve=new WeakMap,be=new WeakMap,N=new WeakMap,ne=new WeakMap,k=new WeakMap,C=new WeakMap,xe=new WeakMap,re=new WeakMap,le=new WeakMap,Y=new WeakMap,ye=new WeakMap,we=new WeakMap,_=new WeakSet,ie=function(e,t,a){const i=n(this,C)?new Headers(n(this,C).headers):n(this,Y)??new Headers;if(typeof t=="object"&&"headers"in t){const o=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[r,d]of o)r.toLowerCase()==="set-cookie"?i.append(r,d):i.set(r,d)}if(a)for(const[o,r]of Object.entries(a))if(typeof r=="string")i.set(o,r);else{i.delete(o);for(const d of r)i.append(o,d)}const s=typeof t=="number"?t:(t==null?void 0:t.status)??n(this,ne);return new Response(e,{status:s,headers:i})},Ke),y="ALL",Tt="all",Wt=["get","post","put","delete","options","patch"],lt="Can not add a route since the matcher is already built.",ct=class extends Error{},Dt="__COMPOSED_HANDLER",Ht=e=>e.text("404 Not Found",404),Me=(e,t)=>{if("getResponse"in e){const a=e.getResponse();return t.newResponse(a.body,a)}return console.error(e),t.text("Internal Server Error",500)},I,w,dt,E,V,Ce,Oe,ce,_t=(ce=class{constructor(t={}){f(this,w);m(this,"get");m(this,"post");m(this,"put");m(this,"delete");m(this,"options");m(this,"patch");m(this,"all");m(this,"on");m(this,"use");m(this,"router");m(this,"getPath");m(this,"_basePath","/");f(this,I,"/");m(this,"routes",[]);f(this,E,Ht);m(this,"errorHandler",Me);m(this,"onError",t=>(this.errorHandler=t,this));m(this,"notFound",t=>(p(this,E,t),this));m(this,"fetch",(t,...a)=>v(this,w,Oe).call(this,t,a[1],a[0],t.method));m(this,"request",(t,a,i,s)=>t instanceof Request?this.fetch(a?new Request(t,a):t,i,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ae("/",t)}`,a),i,s)));m(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(v(this,w,Oe).call(this,t.request,t,void 0,t.request.method))})});[...Wt,Tt].forEach(o=>{this[o]=(r,...d)=>(typeof r=="string"?p(this,I,r):v(this,w,V).call(this,o,n(this,I),r),d.forEach(c=>{v(this,w,V).call(this,o,n(this,I),c)}),this)}),this.on=(o,r,...d)=>{for(const c of[r].flat()){p(this,I,c);for(const l of[o].flat())d.map(u=>{v(this,w,V).call(this,l.toUpperCase(),n(this,I),u)})}return this},this.use=(o,...r)=>(typeof o=="string"?p(this,I,o):(p(this,I,"*"),r.unshift(o)),r.forEach(d=>{v(this,w,V).call(this,y,n(this,I),d)}),this);const{strict:i,...s}=t;Object.assign(this,s),this.getPath=i??!0?t.getPath??et:zt}route(t,a){const i=this.basePath(t);return a.routes.map(s=>{var r;let o;a.errorHandler===Me?o=s.handler:(o=async(d,c)=>(await He([],a.errorHandler)(d,()=>s.handler(d,c))).res,o[Dt]=s.handler),v(r=i,w,V).call(r,s.method,s.path,o)}),this}basePath(t){const a=v(this,w,dt).call(this);return a._basePath=ae(this._basePath,t),a}mount(t,a,i){let s,o;i&&(typeof i=="function"?o=i:(o=i.optionHandler,i.replaceRequest===!1?s=c=>c:s=i.replaceRequest));const r=o?c=>{const l=o(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};s||(s=(()=>{const c=ae(this._basePath,t),l=c==="/"?0:c.length;return u=>{const h=new URL(u.url);return h.pathname=h.pathname.slice(l)||"/",new Request(h,u)}})());const d=async(c,l)=>{const u=await a(s(c.req.raw),...r(c));if(u)return u;await l()};return v(this,w,V).call(this,y,ae(t,"*"),d),this}},I=new WeakMap,w=new WeakSet,dt=function(){const t=new ce({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,E,n(this,E)),t.routes=this.routes,t},E=new WeakMap,V=function(t,a,i){t=t.toUpperCase(),a=ae(this._basePath,a);const s={basePath:this._basePath,path:a,method:t,handler:i};this.router.add(t,a,[i,s]),this.routes.push(s)},Ce=function(t,a){if(t instanceof Error)return this.errorHandler(t,a);throw t},Oe=function(t,a,i,s){if(s==="HEAD")return(async()=>new Response(null,await v(this,w,Oe).call(this,t,a,i,"GET")))();const o=this.getPath(t,{env:i}),r=this.router.match(s,o),d=new Ft(t,{path:o,matchResult:r,env:i,executionCtx:a,notFoundHandler:n(this,E)});if(r[0].length===1){let l;try{l=r[0][0][0][0](d,async()=>{d.res=await n(this,E).call(this,d)})}catch(u){return v(this,w,Ce).call(this,u,d)}return l instanceof Promise?l.then(u=>u||(d.finalized?d.res:n(this,E).call(this,d))).catch(u=>v(this,w,Ce).call(this,u,d)):l??n(this,E).call(this,d)}const c=He(r[0],this.errorHandler,n(this,E));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return v(this,w,Ce).call(this,l,d)}})()},ce),ut=[];function Mt(e,t){const a=this.buildAllMatchers(),i=((s,o)=>{const r=a[s]||a[y],d=r[2][o];if(d)return d;const c=o.match(r[0]);if(!c)return[[],ut];const l=c.indexOf("",1);return[r[1][l],c]});return this.match=i,i(e,t)}var Ee="[^/]+",fe=".*",ge="(?:|/.*)",se=Symbol(),Gt=new Set(".\\+*[^]$()");function Bt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===fe||e===ge?1:t===fe||t===ge?-1:e===Ee?1:t===Ee?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var J,Q,$,ee,Ut=(ee=class{constructor(){f(this,J);f(this,Q);f(this,$,Object.create(null))}insert(t,a,i,s,o){if(t.length===0){if(n(this,J)!==void 0)throw se;if(o)return;p(this,J,a);return}const[r,...d]=t,c=r==="*"?d.length===0?["","",fe]:["","",Ee]:r==="/*"?["","",ge]:r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const u=c[1];let h=c[2]||Ee;if(u&&c[2]&&(h===".*"||(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))))throw se;if(l=n(this,$)[h],!l){if(Object.keys(n(this,$)).some(g=>g!==fe&&g!==ge))throw se;if(o)return;l=n(this,$)[h]=new ee,u!==""&&p(l,Q,s.varIndex++)}!o&&u!==""&&i.push([u,n(l,Q)])}else if(l=n(this,$)[r],!l){if(Object.keys(n(this,$)).some(u=>u.length>1&&u!==fe&&u!==ge))throw se;if(o)return;l=n(this,$)[r]=new ee}l.insert(d,a,i,s,o)}buildRegExpStr(){const a=Object.keys(n(this,$)).sort(Bt).map(i=>{const s=n(this,$)[i];return(typeof n(s,Q)=="number"?`(${i})@${n(s,Q)}`:Gt.has(i)?`\\${i}`:i)+s.buildRegExpStr()});return typeof n(this,J)=="number"&&a.unshift(`#${n(this,J)}`),a.length===0?"":a.length===1?a[0]:"(?:"+a.join("|")+")"}},J=new WeakMap,Q=new WeakMap,$=new WeakMap,ee),$e,qe,Ye,Vt=(Ye=class{constructor(){f(this,$e,{varIndex:0});f(this,qe,new Ut)}insert(e,t,a){const i=[],s=[];for(let r=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const l=`@\\${r}`;return s[r]=[l,c],r++,d=!0,l}),!d)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let r=s.length-1;r>=0;r--){const[d]=s[r];for(let c=o.length-1;c>=0;c--)if(o[c].indexOf(d)!==-1){o[c]=o[c].replace(d,s[r][1]);break}}return n(this,qe).insert(o,t,i,n(this,$e),a),i}buildRegExp(){let e=n(this,qe).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const a=[],i=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,o,r)=>o!==void 0?(a[++t]=Number(o),"$()"):(r!==void 0&&(i[Number(r)]=++t),"")),[new RegExp(`^${e}`),a,i]}},$e=new WeakMap,qe=new WeakMap,Ye),Kt=[/^$/,[],Object.create(null)],Ie=Object.create(null);function ht(e){return Ie[e]??(Ie[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,a)=>a?`\\${a}`:"(?:|/.*)")}$`))}function Yt(){Ie=Object.create(null)}function Jt(e){var l;const t=new Vt,a=[];if(e.length===0)return Kt;const i=e.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,h],[g,x])=>u?1:g?-1:h.length-x.length),s=Object.create(null);for(let u=0,h=-1,g=i.length;u<g;u++){const[x,q,R]=i[u];x?s[q]=[R.map(([A])=>[A,Object.create(null)]),ut]:h++;let b;try{b=t.insert(q,h,x)}catch(A){throw A===se?new ct(q):A}x||(a[h]=R.map(([A,W])=>{const Ae=Object.create(null);for(W-=1;W>=0;W--){const[Se,z]=b[W];Ae[Se]=z}return[A,Ae]}))}const[o,r,d]=t.buildRegExp();for(let u=0,h=a.length;u<h;u++)for(let g=0,x=a[u].length;g<x;g++){const q=(l=a[u][g])==null?void 0:l[1];if(!q)continue;const R=Object.keys(q);for(let b=0,A=R.length;b<A;b++)q[R[b]]=d[q[R[b]]]}const c=[];for(const u in r)c[u]=a[r[u]];return[o,c,s]}function te(e,t){if(e){for(const a of Object.keys(e).sort((i,s)=>s.length-i.length))if(ht(a).test(t))return[...e[a]]}}var M,G,Re,pt,Je,Qt=(Je=class{constructor(){f(this,Re);m(this,"name","RegExpRouter");f(this,M);f(this,G);m(this,"match",Mt);p(this,M,{[y]:Object.create(null)}),p(this,G,{[y]:Object.create(null)})}add(e,t,a){var d;const i=n(this,M),s=n(this,G);if(!i||!s)throw new Error(lt);i[e]||[i,s].forEach(c=>{c[e]=Object.create(null),Object.keys(c[y]).forEach(l=>{c[e][l]=[...c[y][l]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ht(t);e===y?Object.keys(i).forEach(l=>{var u;(u=i[l])[t]||(u[t]=te(i[l],t)||te(i[y],t)||[])}):(d=i[e])[t]||(d[t]=te(i[e],t)||te(i[y],t)||[]),Object.keys(i).forEach(l=>{(e===y||e===l)&&Object.keys(i[l]).forEach(u=>{c.test(u)&&i[l][u].push([a,o])})}),Object.keys(s).forEach(l=>{(e===y||e===l)&&Object.keys(s[l]).forEach(u=>c.test(u)&&s[l][u].push([a,o]))});return}const r=tt(t)||[t];for(let c=0,l=r.length;c<l;c++){const u=r[c];Object.keys(s).forEach(h=>{var g;(e===y||e===h)&&((g=s[h])[u]||(g[u]=[...te(i[h],u)||te(i[y],u)||[]]),s[h][u].push([a,o-l+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(n(this,G)).concat(Object.keys(n(this,M))).forEach(t=>{e[t]||(e[t]=v(this,Re,pt).call(this,t))}),p(this,M,p(this,G,void 0)),Yt(),e}},M=new WeakMap,G=new WeakMap,Re=new WeakSet,pt=function(e){const t=[];let a=e===y;return[n(this,M),n(this,G)].forEach(i=>{const s=i[e]?Object.keys(i[e]).map(o=>[o,i[e][o]]):[];s.length!==0?(a||(a=!0),t.push(...s)):e!==y&&t.push(...Object.keys(i[y]).map(o=>[o,i[y][o]]))}),a?Jt(t):null},Je),B,j,Qe,Xt=(Qe=class{constructor(e){m(this,"name","SmartRouter");f(this,B,[]);f(this,j,[]);p(this,B,e.routers)}add(e,t,a){if(!n(this,j))throw new Error(lt);n(this,j).push([e,t,a])}match(e,t){if(!n(this,j))throw new Error("Fatal error");const a=n(this,B),i=n(this,j),s=a.length;let o=0,r;for(;o<s;o++){const d=a[o];try{for(let c=0,l=i.length;c<l;c++)d.add(...i[c]);r=d.match(e,t)}catch(c){if(c instanceof ct)continue;throw c}this.match=d.match.bind(d),p(this,B,[d]),p(this,j,void 0);break}if(o===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,r}get activeRouter(){if(n(this,j)||n(this,B).length!==1)throw new Error("No active router has been determined yet.");return n(this,B)[0]}},B=new WeakMap,j=new WeakMap,Qe),me=Object.create(null),U,L,X,de,S,F,K,ue,Zt=(ue=class{constructor(t,a,i){f(this,F);f(this,U);f(this,L);f(this,X);f(this,de,0);f(this,S,me);if(p(this,L,i||Object.create(null)),p(this,U,[]),t&&a){const s=Object.create(null);s[t]={handler:a,possibleKeys:[],score:0},p(this,U,[s])}p(this,X,[])}insert(t,a,i){p(this,de,++De(this,de)._);let s=this;const o=Ot(a),r=[];for(let d=0,c=o.length;d<c;d++){const l=o[d],u=o[d+1],h=$t(l,u),g=Array.isArray(h)?h[0]:l;if(g in n(s,L)){s=n(s,L)[g],h&&r.push(h[1]);continue}n(s,L)[g]=new ue,h&&(n(s,X).push(h),r.push(h[1])),s=n(s,L)[g]}return n(s,U).push({[t]:{handler:i,possibleKeys:r.filter((d,c,l)=>l.indexOf(d)===c),score:n(this,de)}}),s}search(t,a){var c;const i=[];p(this,S,me);let o=[this];const r=Ze(a),d=[];for(let l=0,u=r.length;l<u;l++){const h=r[l],g=l===u-1,x=[];for(let q=0,R=o.length;q<R;q++){const b=o[q],A=n(b,L)[h];A&&(p(A,S,n(b,S)),g?(n(A,L)["*"]&&i.push(...v(this,F,K).call(this,n(A,L)["*"],t,n(b,S))),i.push(...v(this,F,K).call(this,A,t,n(b,S)))):x.push(A));for(let W=0,Ae=n(b,X).length;W<Ae;W++){const Se=n(b,X)[W],z=n(b,S)===me?{}:{...n(b,S)};if(Se==="*"){const D=n(b,L)["*"];D&&(i.push(...v(this,F,K).call(this,D,t,n(b,S))),p(D,S,z),x.push(D));continue}const[vt,Te,pe]=Se;if(!h&&!(pe instanceof RegExp))continue;const P=n(b,L)[vt],bt=r.slice(l).join("/");if(pe instanceof RegExp){const D=pe.exec(bt);if(D){if(z[Te]=D[0],i.push(...v(this,F,K).call(this,P,t,n(b,S),z)),Object.keys(n(P,L)).length){p(P,S,z);const ze=((c=D[0].match(/\//))==null?void 0:c.length)??0;(d[ze]||(d[ze]=[])).push(P)}continue}}(pe===!0||pe.test(h))&&(z[Te]=h,g?(i.push(...v(this,F,K).call(this,P,t,z,n(b,S))),n(P,L)["*"]&&i.push(...v(this,F,K).call(this,n(P,L)["*"],t,z,n(b,S)))):(p(P,S,z),x.push(P)))}}o=x.concat(d.shift()??[])}return i.length>1&&i.sort((l,u)=>l.score-u.score),[i.map(({handler:l,params:u})=>[l,u])]}},U=new WeakMap,L=new WeakMap,X=new WeakMap,de=new WeakMap,S=new WeakMap,F=new WeakSet,K=function(t,a,i,s){const o=[];for(let r=0,d=n(t,U).length;r<d;r++){const c=n(t,U)[r],l=c[a]||c[y],u={};if(l!==void 0&&(l.params=Object.create(null),o.push(l),i!==me||s&&s!==me))for(let h=0,g=l.possibleKeys.length;h<g;h++){const x=l.possibleKeys[h],q=u[l.score];l.params[x]=s!=null&&s[x]&&!q?s[x]:i[x]??(s==null?void 0:s[x]),u[l.score]=!0}}return o},ue),Z,Xe,ea=(Xe=class{constructor(){m(this,"name","TrieRouter");f(this,Z);p(this,Z,new Zt)}add(e,t,a){const i=tt(t);if(i){for(let s=0,o=i.length;s<o;s++)n(this,Z).insert(e,i[s],a);return}n(this,Z).insert(e,t,a)}match(e,t){return n(this,Z).search(e,t)}},Z=new WeakMap,Xe),mt=class extends _t{constructor(e={}){super(e),this.router=e.router??new Xt({routers:[new Qt,new ea]})}},ta=e=>{const a={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},i=(o=>typeof o=="string"?o==="*"?()=>o:r=>o===r?r:null:typeof o=="function"?o:r=>o.includes(r)?r:null)(a.origin),s=(o=>typeof o=="function"?o:Array.isArray(o)?()=>o:()=>[])(a.allowMethods);return async function(r,d){var u;function c(h,g){r.res.headers.set(h,g)}const l=await i(r.req.header("origin")||"",r);if(l&&c("Access-Control-Allow-Origin",l),a.credentials&&c("Access-Control-Allow-Credentials","true"),(u=a.exposeHeaders)!=null&&u.length&&c("Access-Control-Expose-Headers",a.exposeHeaders.join(",")),r.req.method==="OPTIONS"){a.origin!=="*"&&c("Vary","Origin"),a.maxAge!=null&&c("Access-Control-Max-Age",a.maxAge.toString());const h=await s(r.req.header("origin")||"",r);h.length&&c("Access-Control-Allow-Methods",h.join(","));let g=a.allowHeaders;if(!(g!=null&&g.length)){const x=r.req.header("Access-Control-Request-Headers");x&&(g=x.split(/\s*,\s*/))}return g!=null&&g.length&&(c("Access-Control-Allow-Headers",g.join(",")),r.res.headers.append("Vary","Access-Control-Request-Headers")),r.res.headers.delete("Content-Length"),r.res.headers.delete("Content-Type"),new Response(null,{headers:r.res.headers,status:204,statusText:"No Content"})}await d(),a.origin!=="*"&&r.header("Vary","Origin",{append:!0})}},aa=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Ge=(e,t=sa)=>{const a=/\.([a-zA-Z0-9]+?)$/,i=e.match(a);if(!i)return;let s=t[i[1]];return s&&s.startsWith("text")&&(s+="; charset=utf-8"),s},ia={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},sa=ia,oa=(...e)=>{let t=e.filter(s=>s!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const a=t.split("/"),i=[];for(const s of a)s===".."&&i.length>0&&i.at(-1)!==".."?i.pop():s!=="."&&i.push(s);return i.join("/")||"."},ft={br:".br",zstd:".zst",gzip:".gz"},na=Object.keys(ft),ra="index.html",la=e=>{const t=e.root??"./",a=e.path,i=e.join??oa;return async(s,o)=>{var u,h,g,x;if(s.finalized)return o();let r;if(e.path)r=e.path;else try{if(r=decodeURIComponent(s.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(r))throw new Error}catch{return await((u=e.onNotFound)==null?void 0:u.call(e,s.req.path,s)),o()}let d=i(t,!a&&e.rewriteRequestPath?e.rewriteRequestPath(r):r);e.isDir&&await e.isDir(d)&&(d=i(d,ra));const c=e.getContent;let l=await c(d,s);if(l instanceof Response)return s.newResponse(l.body,l);if(l){const q=e.mimes&&Ge(d,e.mimes)||Ge(d);if(s.header("Content-Type",q||"application/octet-stream"),e.precompressed&&(!q||aa.test(q))){const R=new Set((h=s.req.header("Accept-Encoding"))==null?void 0:h.split(",").map(b=>b.trim()));for(const b of na){if(!R.has(b))continue;const A=await c(d+ft[b],s);if(A){l=A,s.header("Content-Encoding",b),s.header("Vary","Accept-Encoding",{append:!0});break}}}return await((g=e.onFound)==null?void 0:g.call(e,d,s)),s.body(l)}await((x=e.onNotFound)==null?void 0:x.call(e,d,s)),await o()}},ca=async(e,t)=>{let a;t&&t.manifest?typeof t.manifest=="string"?a=JSON.parse(t.manifest):a=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?a=JSON.parse(__STATIC_CONTENT_MANIFEST):a=__STATIC_CONTENT_MANIFEST;let i;t&&t.namespace?i=t.namespace:i=__STATIC_CONTENT;const s=a[e]||e;if(!s)return null;const o=await i.get(s,{type:"stream"});return o||null},da=e=>async function(a,i){return la({...e,getContent:async o=>ca(o,{manifest:e.manifest,namespace:e.namespace?e.namespace:a.env?a.env.__STATIC_CONTENT:void 0})})(a,i)},ua=e=>da(e);const ha="ko",pa="한국어",ma={title:"SOLOCALL - 솔로콜 | AI 음성 생활 지원 플랫폼",description:"혼자 사는 중년과 시니어를 위한 전화 기반 AI 생활 지원 플랫폼. 전화 한 통으로 병원 예약, 행정 절차, 건강 정보를 해결하세요."},fa={home:"홈",about:"서비스 소개",features:"주요 기능",faq:"자주 묻는 질문",contact:"문의하기"},ga={title:"혼자지만 외롭지 않게",subtitle:"전화 한 통으로 일상을 해결하는<br/>AI 생활 파트너",description:"앱 설치 없이 전화만으로 병원 예약, 행정 절차, 건강 정보를<br/>대신 처리해 드리는 음성 우선 플랫폼입니다.",cta:"서비스 시작하기",callNow:"지금 전화하기"},va={title:"SOLOCALL이 제공하는 서비스",subtitle:"전화 한 통으로 모든 것이 해결됩니다",items:[{icon:"fa-phone-volume",title:"병원·관공서 전화 대행",description:"병원 예약, 공공기관 문의를 AI가 대신 처리합니다. 대기 시간 없이 결과만 받으세요."},{icon:"fa-heartbeat",title:"건강 정보 정리",description:"증상을 말씀하시면 정리해 드립니다. 병원 방문 전 필요한 질문도 준비해 드립니다."},{icon:"fa-users",title:"가족 소통 브리지",description:"필요할 때만 가족에게 상태를 전달합니다. 감시가 아닌 안심을 위한 연결입니다."},{icon:"fa-shield-alt",title:"사기 전화 차단",description:"보이스피싱 의심 통화를 실시간으로 감지하고 즉시 경고해 드립니다."},{icon:"fa-clipboard-list",title:"생활 매니저",description:"날씨, 일정, 약 복용 알림 등 일상 생활을 전화로 관리합니다."},{icon:"fa-hand-holding-heart",title:"24시간 안부 체크",description:"정해진 시간에 안부 전화를 드립니다. 천천히 편하게 말씀하세요."}]},ba={title:"이렇게 사용하세요",steps:[{number:"1",title:"전화하기",description:"등록된 번호로 전화를 걸거나 받으세요"},{number:"2",title:"말씀하기",description:"천천히 편하게 필요한 것을 말씀하세요"},{number:"3",title:"해결하기",description:"AI가 대신 처리하고 결과를 알려드립니다"}]},xa={title:"자주 묻는 질문",subtitle:"궁금한 점을 확인하세요",categories:[{name:"서비스 기본 이해",questions:[{q:"이 서비스는 무엇을 도와주나요?",a:"전화 한 통으로 병원, 행정, 건강, 생활 문제를 대신 처리하거나 정리해 드립니다."},{q:"앱을 꼭 설치해야 하나요?",a:"아니요. 전화만 있으면 이용할 수 있습니다."},{q:"어떤 분들을 위한 서비스인가요?",a:"혼자 지내는 중년·시니어 분들을 위한 전화 기반 생활 지원 서비스입니다."},{q:"복잡한 조작이 필요한가요?",a:"아닙니다. 말씀만 하시면 됩니다."},{q:"상담원과 통화하는 건가요?",a:"사람 대신 AI가 전화로 도와드립니다."},{q:"천천히 말해도 되나요?",a:"네. 천천히, 편하게 말씀하셔도 됩니다."},{q:"통화 내용은 기억하나요?",a:"이전 대화를 참고해 더 잘 도와드릴 수 있습니다."}]},{name:"병원·관공서 전화 대행",questions:[{q:"병원 예약을 대신 해주나요?",a:"네. 병원에 직접 전화해 예약이나 문의를 대신 처리합니다."},{q:"구청이나 주민센터도 가능한가요?",a:"가능합니다. 절차·서류·담당 부서까지 확인해 드립니다."},{q:"대기 전화도 대신 받아주나요?",a:"네. 대기·ARS 없이 결과만 알려드립니다."},{q:"결과는 어떻게 알려주나요?",a:"전화로 다시 설명해 드리거나 요약해 드립니다."},{q:"여러 번 수정 요청도 되나요?",a:"네. 다시 확인이 필요하면 재통화합니다."},{q:"어디까지 대신 전화해 주나요?",a:"병원, 공공기관, 생활 서비스 문의까지 가능합니다."},{q:"통화가 잘 안 되면 어떻게 하나요?",a:"다시 시도하거나 다른 방법을 안내해 드립니다."}]},{name:"건강 정보 정리",questions:[{q:"아픈 증상을 말해도 되나요?",a:"네. 내용을 정리해 드립니다."},{q:"병원에 가야 하는지도 알려주나요?",a:"진단은 아니지만, 방문 권장 여부를 안내합니다."},{q:"의사 상담을 대신하나요?",a:"아니요. 의료 행위는 하지 않습니다."},{q:"병원 가기 전 질문도 정리해 주나요?",a:"네. 필요한 질문을 정리해 드립니다."},{q:"불안할 때도 도움을 받을 수 있나요?",a:"네. 상황을 정리하고 안내해 드립니다."},{q:"건강 기록이 남나요?",a:"필요한 범위에서만 기록됩니다."}]},{name:"가족·지인 소통 브리지",questions:[{q:"가족에게 제 상태가 전달되나요?",a:"필요할 때만 간단히 전달됩니다."},{q:"항상 가족에게 알리나요?",a:"아니요. 이상 상황일 때만 공유합니다."},{q:"감시받는 느낌은 없나요?",a:"없습니다. 자율성을 최우선으로 합니다."},{q:"어떤 내용이 전달되나요?",a:"컨디션 요약 등 최소한의 정보만 전달됩니다."},{q:"원하지 않으면 공유를 끌 수 있나요?",a:"네. 언제든 설정할 수 있습니다."}]},{name:"사기·위험 통화 감지",questions:[{q:"보이스피싱도 막아주나요?",a:"네. 의심되는 통화를 실시간으로 감지합니다."},{q:"위험하면 어떻게 알려주나요?",a:"통화 중 바로 음성으로 알려드립니다."},{q:"왜 위험한지 설명해 주나요?",a:"간단하고 명확하게 이유를 안내합니다."},{q:"제가 직접 끊어야 하나요?",a:"네. 끊는 판단은 사용자께 있습니다."},{q:"가족에게도 알려주나요?",a:"필요 시 보호자에게 알릴 수 있습니다."}]},{name:"생활 매니저·기타",questions:[{q:"날씨나 일정도 알려주나요?",a:"네. 전화로 바로 안내합니다."},{q:"약 먹는 시간도 알려주나요?",a:"네. 생활 알림을 도와드립니다."},{q:"급한 상황에는 어떻게 되나요?",a:"즉시 도움 연결을 안내합니다."},{q:"다시 이용하려면 어떻게 하나요?",a:"언제든 다시 전화하시면 됩니다."},{q:"이 서비스의 가장 큰 장점은 뭔가요?",a:"혼자 해결하지 않아도 된다는 점입니다."}]}]},ya={tagline:"혼자지만 외롭지 않게, SOLOCALL과 함께하세요",contact:"문의: support@solocall.com",copyright:"© 2026 SOLOCALL. All rights reserved."},wa={lang:ha,langName:pa,meta:ma,nav:fa,hero:ga,features:va,howItWorks:ba,faq:xa,footer:ya},qa="en",Aa="English",Sa={title:"SOLOCALL | AI Voice-First Life Support Platform",description:"A phone-based AI life support platform for middle-aged and senior singles. Solve hospital appointments, administrative procedures, and health information with just one call."},La={home:"Home",about:"About",features:"Features",faq:"FAQ",contact:"Contact"},Ca={title:"Alone but Not Lonely",subtitle:"Your AI Life Partner<br/>Just One Call Away",description:"A voice-first platform that handles hospital appointments, administrative procedures,<br/>and health information for you—no app installation required.",cta:"Get Started",callNow:"Call Now"},Oa={title:"SOLOCALL Services",subtitle:"Everything solved with just one phone call",items:[{icon:"fa-phone-volume",title:"Hospital & Government Call Service",description:"AI handles hospital appointments and public agency inquiries for you. Get results without waiting."},{icon:"fa-heartbeat",title:"Health Information Organization",description:"Tell us your symptoms and we'll organize them. We prepare questions you need before hospital visits."},{icon:"fa-users",title:"Family Communication Bridge",description:"Share your status with family only when necessary. Connection for peace of mind, not surveillance."},{icon:"fa-shield-alt",title:"Scam Call Protection",description:"Real-time detection of suspicious voice phishing calls with immediate alerts."},{icon:"fa-clipboard-list",title:"Life Manager",description:"Manage daily life by phone: weather, schedule, medication reminders, and more."},{icon:"fa-hand-holding-heart",title:"24/7 Wellness Check",description:"We call at scheduled times to check on you. Speak slowly and comfortably."}]},Ia={title:"How It Works",steps:[{number:"1",title:"Make a Call",description:"Call or receive a call from the registered number"},{number:"2",title:"Just Speak",description:"Tell us what you need, slowly and comfortably"},{number:"3",title:"We Handle It",description:"AI processes it for you and provides results"}]},Ea={title:"Frequently Asked Questions",subtitle:"Find answers to common questions",categories:[{name:"Service Basics",questions:[{q:"What does this service do?",a:"With one phone call, we handle or organize hospital, administrative, health, and daily living issues for you."},{q:"Do I need to install an app?",a:"No. All you need is a phone."},{q:"Who is this service for?",a:"This is a phone-based life support service for middle-aged and senior individuals living alone."},{q:"Is it complicated to use?",a:"Not at all. Just speak what you need."},{q:"Am I talking to a human agent?",a:"An AI assists you by phone instead of a person."},{q:"Can I speak slowly?",a:"Yes. Speak slowly and comfortably."},{q:"Does it remember past conversations?",a:"Yes. We refer to previous conversations to help you better."}]},{name:"Hospital & Government Calls",questions:[{q:"Do you make hospital appointments for me?",a:"Yes. We call hospitals directly to make appointments or inquiries."},{q:"Can you call city hall or community centers?",a:"Yes. We check procedures, documents, and departments."},{q:"Do you wait on hold for me?",a:"Yes. No waiting or ARS—just results."},{q:"How do I get the results?",a:"We call you back with explanations or summaries."},{q:"Can I request multiple follow-ups?",a:"Yes. We'll call again if you need confirmation."},{q:"What types of calls can you make?",a:"Hospitals, public agencies, and general service inquiries."},{q:"What if the call doesn't go through?",a:"We'll try again or guide you to another solution."}]},{name:"Health Information",questions:[{q:"Can I tell you about symptoms?",a:"Yes. We organize the information for you."},{q:"Do you tell me if I should see a doctor?",a:"We don't diagnose, but we provide guidance on whether a visit is recommended."},{q:"Do you replace doctor consultations?",a:"No. We do not perform medical acts."},{q:"Do you prepare questions for doctor visits?",a:"Yes. We organize necessary questions for you."},{q:"Can I get help when anxious?",a:"Yes. We organize the situation and provide guidance."},{q:"Are health records kept?",a:"Only to the extent necessary for service."}]},{name:"Family Communication",questions:[{q:"Is my status shared with family?",a:"Only when necessary, and briefly."},{q:"Is family always notified?",a:"No. Only in unusual situations."},{q:"Will I feel monitored?",a:"No. Autonomy is our top priority."},{q:"What information is shared?",a:"Only minimal information like condition summaries."},{q:"Can I turn off sharing?",a:"Yes. You can adjust settings anytime."}]},{name:"Scam Detection",questions:[{q:"Do you block voice phishing?",a:"Yes. We detect suspicious calls in real-time."},{q:"How do you notify me if it's dangerous?",a:"Immediately by voice during the call."},{q:"Do you explain why it's risky?",a:"Yes. We provide clear and simple reasons."},{q:"Do I have to hang up myself?",a:"Yes. The decision to hang up is yours."},{q:"Is family notified?",a:"If necessary, we can alert guardians."}]},{name:"Life Manager & Others",questions:[{q:"Do you provide weather and schedules?",a:"Yes. Right away by phone."},{q:"Do you remind me to take medication?",a:"Yes. We assist with daily living reminders."},{q:"What happens in urgent situations?",a:"We guide you to immediate help."},{q:"How do I use the service again?",a:"Just call anytime."},{q:"What's the biggest benefit of this service?",a:"You don't have to solve everything alone."}]}]},$a={tagline:"Alone but not lonely, together with SOLOCALL",contact:"Contact: support@solocall.com",copyright:"© 2026 SOLOCALL. All rights reserved."},Ra={lang:qa,langName:Aa,meta:Sa,nav:La,hero:Ca,features:Oa,howItWorks:Ia,faq:Ea,footer:$a},za="ja",Pa="日本語",Na={title:"SOLOCALL - ソロコール | AI音声優先生活支援プラットフォーム",description:"一人暮らしの中高年・シニアのための電話ベースAI生活支援プラットフォーム。電話一本で病院予約、行政手続き、健康情報を解決します。"},ka={home:"ホーム",about:"サービス紹介",features:"主な機能",faq:"よくある質問",contact:"お問い合わせ"},ja={title:"一人でも寂しくない",subtitle:"電話一本で日常を解決する<br/>AI生活パートナー",description:"アプリのインストール不要。電話だけで病院予約、行政手続き、<br/>健康情報を代行する音声優先プラットフォームです。",cta:"サービスを始める",callNow:"今すぐ電話する"},Fa={title:"SOLOCALLのサービス",subtitle:"電話一本ですべて解決",items:[{icon:"fa-phone-volume",title:"病院・官公庁電話代行",description:"病院予約、公共機関への問い合わせをAIが代行します。待ち時間なしで結果だけ受け取れます。"},{icon:"fa-heartbeat",title:"健康情報整理",description:"症状をお話しいただければ整理します。病院訪問前に必要な質問も準備します。"},{icon:"fa-users",title:"家族コミュニケーションブリッジ",description:"必要な時だけ家族に状況を伝えます。監視ではなく安心のための連絡です。"},{icon:"fa-shield-alt",title:"詐欺電話ブロック",description:"振り込め詐欺の疑いがある通話をリアルタイムで検知し、即座に警告します。"},{icon:"fa-clipboard-list",title:"生活マネージャー",description:"天気、スケジュール、薬の服用アラームなど、日常生活を電話で管理します。"},{icon:"fa-hand-holding-heart",title:"24時間安否確認",description:"決められた時間に安否確認の電話をします。ゆっくり楽にお話しください。"}]},Ta={title:"使い方",steps:[{number:"1",title:"電話する",description:"登録番号に電話するか、電話を受けます"},{number:"2",title:"話す",description:"ゆっくり楽に必要なことを話してください"},{number:"3",title:"解決",description:"AIが代行して結果をお知らせします"}]},Wa={title:"よくある質問",subtitle:"疑問点を確認してください",categories:[{name:"サービス基本",questions:[{q:"このサービスは何を手伝ってくれますか？",a:"電話一本で病院、行政、健康、生活問題を代行または整理します。"},{q:"アプリをインストールする必要がありますか？",a:"いいえ。電話さえあれば利用できます。"},{q:"どんな方のためのサービスですか？",a:"一人暮らしの中高年・シニアの方のための電話ベース生活支援サービスです。"},{q:"複雑な操作が必要ですか？",a:"いいえ。話すだけで大丈夫です。"},{q:"オペレーターと通話しますか？",a:"人間の代わりにAIが電話でサポートします。"},{q:"ゆっくり話しても大丈夫ですか？",a:"はい。ゆっくり楽に話していただいて結構です。"},{q:"通話内容を覚えていますか？",a:"過去の会話を参考にしてより良くサポートできます。"}]},{name:"病院・官公庁電話代行",questions:[{q:"病院予約を代行してくれますか？",a:"はい。病院に直接電話して予約や問い合わせを代行します。"},{q:"区役所や市民センターも可能ですか？",a:"可能です。手続き・書類・担当部署まで確認します。"},{q:"待ち電話も代わりに受けてくれますか？",a:"はい。待ち時間やARS なしで結果だけお知らせします。"},{q:"結果はどうやって知らせてくれますか？",a:"電話で再度説明したり、要約してお伝えします。"},{q:"何度も修正依頼できますか？",a:"はい。再確認が必要なら再度通話します。"},{q:"どこまで代わりに電話してくれますか？",a:"病院、公共機関、生活サービスへの問い合わせまで可能です。"},{q:"通話がうまくいかない場合は？",a:"再試行するか、別の方法をご案内します。"}]},{name:"健康情報整理",questions:[{q:"痛い症状を話してもいいですか？",a:"はい。内容を整理します。"},{q:"病院に行くべきか教えてくれますか？",a:"診断ではありませんが、訪問推奨の有無をご案内します。"},{q:"医師の診察の代わりになりますか？",a:"いいえ。医療行為は行いません。"},{q:"病院に行く前の質問も整理してくれますか？",a:"はい。必要な質問を整理します。"},{q:"不安な時も助けてもらえますか？",a:"はい。状況を整理してご案内します。"},{q:"健康記録は残りますか？",a:"必要な範囲でのみ記録されます。"}]},{name:"家族・知人コミュニケーションブリッジ",questions:[{q:"家族に私の状態が伝わりますか？",a:"必要な時だけ簡単に伝えられます。"},{q:"いつも家族に知らせますか？",a:"いいえ。異常な状況の時だけ共有します。"},{q:"監視されている感じはないですか？",a:"ありません。自律性を最優先にします。"},{q:"どんな内容が伝わりますか？",a:"コンディション要約など最小限の情報だけ伝えられます。"},{q:"希望しなければ共有をオフにできますか？",a:"はい。いつでも設定できます。"}]},{name:"詐欺・危険通話検知",questions:[{q:"振り込め詐欺も防いでくれますか？",a:"はい。疑わしい通話をリアルタイムで検知します。"},{q:"危険な場合どう知らせてくれますか？",a:"通話中にすぐ音声で知らせます。"},{q:"なぜ危険か説明してくれますか？",a:"簡単で明確に理由をご案内します。"},{q:"自分で切る必要がありますか？",a:"はい。切る判断はユーザー様にあります。"},{q:"家族にも知らせてくれますか？",a:"必要な場合、保護者に知らせることができます。"}]},{name:"生活マネージャー・その他",questions:[{q:"天気やスケジュールも教えてくれますか？",a:"はい。電話ですぐにご案内します。"},{q:"薬を飲む時間も知らせてくれますか？",a:"はい。生活アラームをサポートします。"},{q:"急な状況の時はどうなりますか？",a:"すぐに助けの連絡をご案内します。"},{q:"再度利用するにはどうすればいいですか？",a:"いつでも再度電話してください。"},{q:"このサービスの最大の利点は何ですか？",a:"一人で解決しなくてもいい点です。"}]}]},Da={tagline:"一人でも寂しくない、SOLOCALLと一緒に",contact:"お問い合わせ: support@solocall.com",copyright:"© 2026 SOLOCALL. All rights reserved."},Ha={lang:za,langName:Pa,meta:Na,nav:ka,hero:ja,features:Fa,howItWorks:Ta,faq:Wa,footer:Da},_a="de",Ma="Deutsch",Ga={title:"SOLOCALL | KI-Sprachbasierte Lebensunterstützungsplattform",description:"Eine telefonbasierte KI-Lebensunterstützungsplattform für alleinstehende Erwachsene und Senioren. Lösen Sie Krankenhaustermine, Verwaltungsverfahren und Gesundheitsinformationen mit nur einem Anruf."},Ba={home:"Startseite",about:"Über uns",features:"Funktionen",faq:"FAQ",contact:"Kontakt"},Ua={title:"Allein, aber nicht einsam",subtitle:"Ihr KI-Lebenspartner<br/>nur einen Anruf entfernt",description:"Eine sprachbasierte Plattform, die Krankenhaustermine,<br/>Verwaltungsverfahren und Gesundheitsinformationen für Sie erledigt—keine App-Installation erforderlich.",cta:"Jetzt beginnen",callNow:"Jetzt anrufen"},Va={title:"SOLOCALL Services",subtitle:"Alles mit nur einem Anruf gelöst",items:[{icon:"fa-phone-volume",title:"Krankenhaus & Behördenanrufservice",description:"KI übernimmt Krankenhaustermine und Behördenanfragen für Sie. Erhalten Sie Ergebnisse ohne Wartezeit."},{icon:"fa-heartbeat",title:"Gesundheitsinformationsorganisation",description:"Teilen Sie uns Ihre Symptome mit und wir organisieren sie. Wir bereiten Fragen vor, die Sie vor Arztbesuchen benötigen."},{icon:"fa-users",title:"Familienkommunikationsbrücke",description:"Teilen Sie Ihren Status mit der Familie nur bei Bedarf. Verbindung für Seelenfrieden, nicht Überwachung."},{icon:"fa-shield-alt",title:"Betrugsanrufschutz",description:"Echtzeiterkennung verdächtiger Phishing-Anrufe mit sofortigen Warnungen."},{icon:"fa-clipboard-list",title:"Lebensmanager",description:"Verwalten Sie das tägliche Leben per Telefon: Wetter, Termine, Medikamentenerinnerungen und mehr."},{icon:"fa-hand-holding-heart",title:"24/7 Wellness-Check",description:"Wir rufen zu geplanten Zeiten an, um nach Ihnen zu sehen. Sprechen Sie langsam und bequem."}]},Ka={title:"So funktioniert es",steps:[{number:"1",title:"Anrufen",description:"Rufen Sie die registrierte Nummer an oder empfangen Sie einen Anruf"},{number:"2",title:"Einfach sprechen",description:"Sagen Sie uns, was Sie brauchen, langsam und bequem"},{number:"3",title:"Wir kümmern uns darum",description:"KI verarbeitet es für Sie und liefert Ergebnisse"}]},Ya={title:"Häufig gestellte Fragen",subtitle:"Finden Sie Antworten auf häufige Fragen",categories:[{name:"Service-Grundlagen",questions:[{q:"Was macht dieser Service?",a:"Mit einem Anruf erledigen oder organisieren wir Krankenhaus-, Verwaltungs-, Gesundheits- und Alltagsprobleme für Sie."},{q:"Muss ich eine App installieren?",a:"Nein. Alles, was Sie brauchen, ist ein Telefon."},{q:"Für wen ist dieser Service?",a:"Dies ist ein telefonbasierter Lebensunterstützungsservice für alleinstehende Erwachsene und Senioren."}]}]},Ja={tagline:"Allein, aber nicht einsam, zusammen mit SOLOCALL",contact:"Kontakt: support@solocall.com",copyright:"© 2026 SOLOCALL. Alle Rechte vorbehalten."},Qa={lang:_a,langName:Ma,meta:Ga,nav:Ba,hero:Ua,features:Va,howItWorks:Ka,faq:Ya,footer:Ja},Xa="zh-CN",Za="简体中文",ei={title:"SOLOCALL - 索罗呼 | AI语音优先生活支持平台",description:"为独居中老年人提供的电话AI生活支持平台。一个电话解决医院预约、行政手续和健康信息问题。"},ti={home:"首页",about:"服务介绍",features:"主要功能",faq:"常见问题",contact:"联系我们"},ai={title:"独处但不孤独",subtitle:"一个电话解决日常生活<br/>AI生活伙伴",description:"无需安装应用。仅通过电话即可代理医院预约、行政手续和<br/>健康信息的语音优先平台。",cta:"开始使用服务",callNow:"立即致电"},ii={title:"SOLOCALL 服务",subtitle:"一个电话解决所有问题",items:[{icon:"fa-phone-volume",title:"医院·政府机构电话代理",description:"AI代为处理医院预约和公共机构咨询。无需等待即可获得结果。"},{icon:"fa-heartbeat",title:"健康信息整理",description:"告诉我们您的症状，我们会为您整理。准备就诊前需要的问题。"},{icon:"fa-users",title:"家庭沟通桥梁",description:"仅在必要时向家人传达状态。是为了安心而非监视的连接。"},{icon:"fa-shield-alt",title:"诈骗电话拦截",description:"实时检测可疑的电信诈骗电话并立即警告。"},{icon:"fa-clipboard-list",title:"生活管家",description:"通过电话管理日常生活：天气、日程、用药提醒等。"},{icon:"fa-hand-holding-heart",title:"24小时安否确认",description:"在指定时间致电确认安否。请慢慢舒适地交谈。"}]},si={title:"使用方法",steps:[{number:"1",title:"打电话",description:"拨打或接听注册号码的电话"},{number:"2",title:"说话",description:"慢慢舒适地告诉我们您需要什么"},{number:"3",title:"解决问题",description:"AI代为处理并告知结果"}]},oi={title:"常见问题",subtitle:"查看常见问题的答案",categories:[{name:"服务基础",questions:[{q:"这个服务做什么？",a:"一个电话即可代为处理或整理医院、行政、健康和生活问题。"},{q:"必须安装应用吗？",a:"不需要。只需要电话。"},{q:"这是为谁提供的服务？",a:"这是为独居中老年人提供的电话生活支持服务。"}]}]},ni={tagline:"独处但不孤独，与SOLOCALL同在",contact:"联系: support@solocall.com",copyright:"© 2026 SOLOCALL. 保留所有权利。"},ri={lang:Xa,langName:Za,meta:ei,nav:ti,hero:ai,features:ii,howItWorks:si,faq:oi,footer:ni},li="es",ci="Español",di={title:"SOLOCALL | Plataforma de Apoyo Vital con IA por Voz",description:"Una plataforma de apoyo vital con IA basada en teléfono para adultos mayores que viven solos. Resuelva citas médicas, procedimientos administrativos e información de salud con solo una llamada."},ui={home:"Inicio",about:"Acerca de",features:"Características",faq:"Preguntas frecuentes",contact:"Contacto"},hi={title:"Solo pero no solitario",subtitle:"Tu compañero de vida con IA<br/>a solo una llamada",description:"Una plataforma de voz que maneja citas médicas, procedimientos administrativos<br/>e información de salud por ti—sin necesidad de instalar aplicaciones.",cta:"Comenzar",callNow:"Llamar ahora"},pi={title:"Servicios de SOLOCALL",subtitle:"Todo resuelto con solo una llamada telefónica",items:[{icon:"fa-phone-volume",title:"Servicio de llamadas hospitalarias y gubernamentales",description:"La IA maneja citas médicas y consultas de agencias públicas por ti. Obtén resultados sin esperar."},{icon:"fa-heartbeat",title:"Organización de información de salud",description:"Cuéntanos tus síntomas y los organizaremos. Preparamos preguntas que necesitas antes de visitas médicas."},{icon:"fa-users",title:"Puente de comunicación familiar",description:"Comparte tu estado con la familia solo cuando sea necesario. Conexión para tranquilidad, no vigilancia."},{icon:"fa-shield-alt",title:"Protección contra llamadas fraudulentas",description:"Detección en tiempo real de llamadas sospechosas de phishing con alertas inmediatas."},{icon:"fa-clipboard-list",title:"Gestor de vida",description:"Gestiona la vida diaria por teléfono: clima, agenda, recordatorios de medicamentos y más."},{icon:"fa-hand-holding-heart",title:"Verificación de bienestar 24/7",description:"Llamamos en horarios programados para verificar tu bienestar. Habla despacio y cómodamente."}]},mi={title:"Cómo funciona",steps:[{number:"1",title:"Hacer una llamada",description:"Llama o recibe una llamada del número registrado"},{number:"2",title:"Solo habla",description:"Dinos lo que necesitas, despacio y cómodamente"},{number:"3",title:"Lo manejamos",description:"La IA lo procesa por ti y proporciona resultados"}]},fi={title:"Preguntas frecuentes",subtitle:"Encuentra respuestas a preguntas comunes",categories:[{name:"Conceptos básicos del servicio",questions:[{q:"¿Qué hace este servicio?",a:"Con una llamada telefónica, manejamos u organizamos problemas de hospital, administrativos, de salud y de vida diaria por ti."},{q:"¿Necesito instalar una aplicación?",a:"No. Todo lo que necesitas es un teléfono."},{q:"¿Para quién es este servicio?",a:"Este es un servicio de apoyo vital basado en teléfono para personas de mediana edad y mayores que viven solas."}]}]},gi={tagline:"Solo pero no solitario, junto con SOLOCALL",contact:"Contacto: support@solocall.com",copyright:"© 2026 SOLOCALL. Todos los derechos reservados."},vi={lang:li,langName:ci,meta:di,nav:ui,hero:hi,features:pi,howItWorks:mi,faq:fi,footer:gi},bi="fr",xi="Français",yi={title:"SOLOCALL | Plateforme de soutien à la vie par IA vocale",description:"Une plateforme de soutien à la vie par IA basée sur le téléphone pour les adultes d'âge moyen et les seniors vivant seuls. Résolvez les rendez-vous médicaux, les procédures administratives et les informations de santé en un seul appel."},wi={home:"Accueil",about:"À propos",features:"Fonctionnalités",faq:"FAQ",contact:"Contact"},qi={title:"Seul mais pas solitaire",subtitle:"Votre partenaire de vie IA<br/>à un seul appel",description:"Une plateforme vocale qui gère les rendez-vous médicaux, les procédures administratives<br/>et les informations de santé pour vous—sans installation d'application requise.",cta:"Commencer",callNow:"Appelez maintenant"},Ai={title:"Services SOLOCALL",subtitle:"Tout résolu avec un seul appel téléphonique",items:[{icon:"fa-phone-volume",title:"Service d'appels hospitaliers et gouvernementaux",description:"L'IA gère les rendez-vous médicaux et les demandes d'agences publiques pour vous. Obtenez des résultats sans attendre."},{icon:"fa-heartbeat",title:"Organisation des informations de santé",description:"Parlez-nous de vos symptômes et nous les organiserons. Nous préparons les questions dont vous avez besoin avant les visites médicales."},{icon:"fa-users",title:"Pont de communication familiale",description:"Partagez votre statut avec la famille uniquement si nécessaire. Connexion pour la tranquillité d'esprit, pas la surveillance."},{icon:"fa-shield-alt",title:"Protection contre les appels frauduleux",description:"Détection en temps réel des appels de phishing suspects avec alertes immédiates."},{icon:"fa-clipboard-list",title:"Gestionnaire de vie",description:"Gérez la vie quotidienne par téléphone : météo, agenda, rappels de médicaments et plus."},{icon:"fa-hand-holding-heart",title:"Vérification du bien-être 24/7",description:"Nous appelons aux heures programmées pour vérifier votre bien-être. Parlez lentement et confortablement."}]},Si={title:"Comment ça marche",steps:[{number:"1",title:"Passer un appel",description:"Appelez ou recevez un appel du numéro enregistré"},{number:"2",title:"Parlez simplement",description:"Dites-nous ce dont vous avez besoin, lentement et confortablement"},{number:"3",title:"Nous nous en occupons",description:"L'IA le traite pour vous et fournit les résultats"}]},Li={title:"Questions fréquemment posées",subtitle:"Trouvez des réponses aux questions courantes",categories:[{name:"Bases du service",questions:[{q:"Que fait ce service ?",a:"Avec un seul appel téléphonique, nous gérons ou organisons les problèmes d'hôpital, administratifs, de santé et de vie quotidienne pour vous."},{q:"Dois-je installer une application ?",a:"Non. Tout ce dont vous avez besoin est un téléphone."},{q:"À qui s'adresse ce service ?",a:"Il s'agit d'un service de soutien à la vie basé sur le téléphone pour les personnes d'âge moyen et les seniors vivant seuls."}]}]},Ci={tagline:"Seul mais pas solitaire, avec SOLOCALL",contact:"Contact : support@solocall.com",copyright:"© 2026 SOLOCALL. Tous droits réservés."},Oi={lang:bi,langName:xi,meta:yi,nav:wi,hero:qi,features:Ai,howItWorks:Si,faq:Li,footer:Ci},Ii="pt",Ei="Português",$i={title:"SOLOCALL | Plataforma de Suporte à Vida por IA de Voz",description:"Uma plataforma de suporte à vida por IA baseada em telefone para adultos de meia-idade e idosos que vivem sozinhos. Resolva consultas médicas, procedimentos administrativos e informações de saúde com apenas uma ligação."},Ri={home:"Início",about:"Sobre",features:"Recursos",faq:"Perguntas frequentes",contact:"Contato"},zi={title:"Sozinho mas não solitário",subtitle:"Seu parceiro de vida com IA<br/>a apenas uma ligação",description:"Uma plataforma de voz que gerencia consultas médicas, procedimentos administrativos<br/>e informações de saúde para você—sem necessidade de instalar aplicativo.",cta:"Começar",callNow:"Ligue agora"},Pi={title:"Serviços SOLOCALL",subtitle:"Tudo resolvido com apenas uma ligação",items:[{icon:"fa-phone-volume",title:"Serviço de ligações hospitalares e governamentais",description:"A IA gerencia consultas médicas e consultas de agências públicas para você. Obtenha resultados sem esperar."},{icon:"fa-heartbeat",title:"Organização de informações de saúde",description:"Conte-nos seus sintomas e nós os organizaremos. Preparamos perguntas que você precisa antes de visitas médicas."},{icon:"fa-users",title:"Ponte de comunicação familiar",description:"Compartilhe seu status com a família apenas quando necessário. Conexão para tranquilidade, não vigilância."},{icon:"fa-shield-alt",title:"Proteção contra chamadas fraudulentas",description:"Detecção em tempo real de chamadas suspeitas de phishing com alertas imediatos."},{icon:"fa-clipboard-list",title:"Gerenciador de vida",description:"Gerencie a vida diária por telefone: clima, agenda, lembretes de medicamentos e mais."},{icon:"fa-hand-holding-heart",title:"Verificação de bem-estar 24/7",description:"Ligamos em horários programados para verificar seu bem-estar. Fale devagar e confortavelmente."}]},Ni={title:"Como funciona",steps:[{number:"1",title:"Fazer uma ligação",description:"Ligue ou receba uma ligação do número registrado"},{number:"2",title:"Apenas fale",description:"Diga-nos o que você precisa, devagar e confortavelmente"},{number:"3",title:"Nós cuidamos",description:"A IA processa para você e fornece resultados"}]},ki={title:"Perguntas frequentes",subtitle:"Encontre respostas para perguntas comuns",categories:[{name:"Conceitos básicos do serviço",questions:[{q:"O que este serviço faz?",a:"Com uma ligação telefônica, gerenciamos ou organizamos problemas de hospital, administrativos, de saúde e de vida diária para você."},{q:"Preciso instalar um aplicativo?",a:"Não. Tudo que você precisa é um telefone."},{q:"Para quem é este serviço?",a:"Este é um serviço de suporte à vida baseado em telefone para pessoas de meia-idade e idosos que vivem sozinhos."}]}]},ji={tagline:"Sozinho mas não solitário, junto com SOLOCALL",contact:"Contato: support@solocall.com",copyright:"© 2026 SOLOCALL. Todos os direitos reservados."},Fi={lang:Ii,langName:Ei,meta:$i,nav:Ri,hero:zi,features:Pi,howItWorks:Ni,faq:ki,footer:ji},Ti="it",Wi="Italiano",Di={title:"SOLOCALL | Piattaforma di supporto alla vita con IA vocale",description:"Una piattaforma di supporto alla vita con IA basata su telefono per adulti di mezza età e anziani che vivono da soli. Risolvi appuntamenti medici, procedure amministrative e informazioni sanitarie con una sola chiamata."},Hi={home:"Home",about:"Chi siamo",features:"Caratteristiche",faq:"Domande frequenti",contact:"Contatti"},_i={title:"Solo ma non solitario",subtitle:"Il tuo partner di vita con IA<br/>a una sola chiamata",description:"Una piattaforma vocale che gestisce appuntamenti medici, procedure amministrative<br/>e informazioni sanitarie per te—nessuna installazione di app richiesta.",cta:"Inizia",callNow:"Chiama ora"},Mi={title:"Servizi SOLOCALL",subtitle:"Tutto risolto con una sola chiamata telefonica",items:[{icon:"fa-phone-volume",title:"Servizio di chiamate ospedaliere e governative",description:"L'IA gestisce appuntamenti medici e richieste di agenzie pubbliche per te. Ottieni risultati senza aspettare."},{icon:"fa-heartbeat",title:"Organizzazione delle informazioni sanitarie",description:"Raccontaci i tuoi sintomi e li organizzeremo. Prepariamo domande di cui hai bisogno prima delle visite mediche."},{icon:"fa-users",title:"Ponte di comunicazione familiare",description:"Condividi il tuo stato con la famiglia solo quando necessario. Connessione per tranquillità, non sorveglianza."},{icon:"fa-shield-alt",title:"Protezione da chiamate fraudolente",description:"Rilevamento in tempo reale di chiamate sospette di phishing con avvisi immediati."},{icon:"fa-clipboard-list",title:"Gestore di vita",description:"Gestisci la vita quotidiana per telefono: meteo, agenda, promemoria di farmaci e altro."},{icon:"fa-hand-holding-heart",title:"Controllo del benessere 24/7",description:"Chiamiamo in orari programmati per controllare il tuo benessere. Parla lentamente e comodamente."}]},Gi={title:"Come funziona",steps:[{number:"1",title:"Fare una chiamata",description:"Chiama o ricevi una chiamata dal numero registrato"},{number:"2",title:"Parla semplicemente",description:"Dicci di cosa hai bisogno, lentamente e comodamente"},{number:"3",title:"Noi ci occupiamo",description:"L'IA lo elabora per te e fornisce i risultati"}]},Bi={title:"Domande frequenti",subtitle:"Trova risposte alle domande comuni",categories:[{name:"Concetti base del servizio",questions:[{q:"Cosa fa questo servizio?",a:"Con una sola chiamata telefonica, gestiamo o organizziamo problemi ospedalieri, amministrativi, sanitari e di vita quotidiana per te."},{q:"Devo installare un'app?",a:"No. Tutto ciò di cui hai bisogno è un telefono."},{q:"Per chi è questo servizio?",a:"Questo è un servizio di supporto alla vita basato su telefono per persone di mezza età e anziani che vivono da soli."}]}]},Ui={tagline:"Solo ma non solitario, insieme a SOLOCALL",contact:"Contatto: support@solocall.com",copyright:"© 2026 SOLOCALL. Tutti i diritti riservati."},Vi={lang:Ti,langName:Wi,meta:Di,nav:Hi,hero:_i,features:Mi,howItWorks:Gi,faq:Bi,footer:Ui},Ki="pt-BR",Yi="Português (Brasil)",Ji={title:"SOLOCALL | Plataforma de Apoio à Vida por IA de Voz",description:"Uma plataforma de apoio à vida por IA baseada em telefone para adultos de meia-idade e idosos que vivem sozinhos. Resolva consultas médicas, procedimentos administrativos e informações de saúde com apenas uma ligação."},Qi={home:"Início",about:"Sobre",features:"Recursos",faq:"Perguntas frequentes",contact:"Contato"},Xi={title:"Sozinho mas não solitário",subtitle:"Seu parceiro de vida com IA<br/>a apenas uma ligação",description:"Uma plataforma de voz que gerencia consultas médicas, procedimentos administrativos<br/>e informações de saúde pra você—sem precisar instalar aplicativo.",cta:"Começar",callNow:"Ligue agora"},Zi={title:"Serviços SOLOCALL",subtitle:"Tudo resolvido com apenas uma ligação",items:[{icon:"fa-phone-volume",title:"Serviço de ligações hospitalares e governamentais",description:"A IA gerencia consultas médicas e consultas de órgãos públicos pra você. Receba resultados sem esperar."},{icon:"fa-heartbeat",title:"Organização de informações de saúde",description:"Conte pra gente seus sintomas e nós organizamos. Preparamos perguntas que você precisa antes de visitas médicas."},{icon:"fa-users",title:"Ponte de comunicação familiar",description:"Compartilhe seu status com a família apenas quando necessário. Conexão pra tranquilidade, não vigilância."},{icon:"fa-shield-alt",title:"Proteção contra chamadas fraudulentas",description:"Detecção em tempo real de chamadas suspeitas de phishing com alertas imediatos."},{icon:"fa-clipboard-list",title:"Gerenciador de vida",description:"Gerencie a vida diária por telefone: clima, agenda, lembretes de remédios e mais."},{icon:"fa-hand-holding-heart",title:"Verificação de bem-estar 24/7",description:"Ligamos em horários programados pra verificar seu bem-estar. Fale devagar e confortavelmente."}]},es={title:"Como funciona",steps:[{number:"1",title:"Fazer uma ligação",description:"Ligue ou receba uma ligação do número cadastrado"},{number:"2",title:"Apenas fale",description:"Diga pra gente o que você precisa, devagar e confortavelmente"},{number:"3",title:"A gente cuida",description:"A IA processa pra você e fornece os resultados"}]},ts={title:"Perguntas frequentes",subtitle:"Encontre respostas para perguntas comuns",categories:[{name:"Conceitos básicos do serviço",questions:[{q:"O que este serviço faz?",a:"Com uma ligação telefônica, gerenciamos ou organizamos problemas de hospital, administrativos, de saúde e do dia a dia pra você."},{q:"Preciso instalar um aplicativo?",a:"Não. Tudo que você precisa é um telefone."},{q:"Pra quem é este serviço?",a:"Este é um serviço de apoio à vida baseado em telefone pra pessoas de meia-idade e idosos que vivem sozinhos."}]}]},as={tagline:"Sozinho mas não solitário, junto com SOLOCALL",contact:"Contato: support@solocall.com",copyright:"© 2026 SOLOCALL. Todos os direitos reservados."},is={lang:Ki,langName:Yi,meta:Ji,nav:Qi,hero:Xi,features:Zi,howItWorks:es,faq:ts,footer:as},ss="en-GB",os="English (UK)",ns={title:"SOLOCALL | AI Voice-First Life Support Platform",description:"A phone-based AI life support platform for middle-aged and senior singles. Solve hospital appointments, administrative procedures, and health information with just one call."},rs={home:"Home",about:"About",features:"Features",faq:"FAQ",contact:"Contact"},ls={title:"Alone but Not Lonely",subtitle:"Your AI Life Partner<br/>Just One Call Away",description:"A voice-first platform that handles hospital appointments, administrative procedures,<br/>and health information for you—no app installation required.",cta:"Get Started",callNow:"Ring Now"},cs={title:"SOLOCALL Services",subtitle:"Everything sorted with just one phone call",items:[{icon:"fa-phone-volume",title:"Hospital & Government Call Service",description:"AI handles hospital appointments and public agency enquiries for you. Get results without waiting."},{icon:"fa-heartbeat",title:"Health Information Organisation",description:"Tell us your symptoms and we'll organise them. We prepare questions you need before hospital visits."},{icon:"fa-users",title:"Family Communication Bridge",description:"Share your status with family only when necessary. Connection for peace of mind, not surveillance."},{icon:"fa-shield-alt",title:"Scam Call Protection",description:"Real-time detection of suspicious voice phishing calls with immediate alerts."},{icon:"fa-clipboard-list",title:"Life Manager",description:"Manage daily life by phone: weather, schedule, medication reminders, and more."},{icon:"fa-hand-holding-heart",title:"24/7 Wellness Check",description:"We ring at scheduled times to check on you. Speak slowly and comfortably."}]},ds={title:"How It Works",steps:[{number:"1",title:"Make a Call",description:"Ring or receive a call from the registered number"},{number:"2",title:"Just Speak",description:"Tell us what you need, slowly and comfortably"},{number:"3",title:"We Handle It",description:"AI processes it for you and provides results"}]},us={title:"Frequently Asked Questions",subtitle:"Find answers to common questions",categories:[{name:"Service Basics",questions:[{q:"What does this service do?",a:"With one phone call, we handle or organise hospital, administrative, health, and daily living issues for you."},{q:"Do I need to install an app?",a:"No. All you need is a telephone."},{q:"Who is this service for?",a:"This is a phone-based life support service for middle-aged and senior individuals living alone."}]}]},hs={tagline:"Alone but not lonely, together with SOLOCALL",contact:"Contact: support@solocall.com",copyright:"© 2026 SOLOCALL. All rights reserved."},ps={lang:ss,langName:os,meta:ns,nav:rs,hero:ls,features:cs,howItWorks:ds,faq:us,footer:hs},Be={ko:wa,en:Ra,ja:Ha,de:Qa,"zh-CN":ri,es:vi,fr:Oi,pt:Fi,it:Vi,"pt-BR":is,"en-GB":ps},ms=[{code:"ko",name:"한국어",flag:"🇰🇷"},{code:"en",name:"English",flag:"🇺🇸"},{code:"en-GB",name:"English (UK)",flag:"🇬🇧"},{code:"ja",name:"日本語",flag:"🇯🇵"},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"zh-CN",name:"简体中文",flag:"🇨🇳"},{code:"es",name:"Español",flag:"🇪🇸"},{code:"fr",name:"Français",flag:"🇫🇷"},{code:"pt",name:"Português",flag:"🇵🇹"},{code:"pt-BR",name:"Português (Brasil)",flag:"🇧🇷"},{code:"it",name:"Italiano",flag:"🇮🇹"}];function fs(e){return Be[e]||Be.en}const he=new mt;he.use("/api/*",ta());he.use("/static/*",ua({root:"./public"}));he.get("/api/locale/:lang",e=>{const t=e.req.param("lang"),a=fs(t);return e.json(a)});he.get("/api/languages",e=>e.json(ms));he.get("/",e=>{const a=(e.req.header("Accept-Language")||"ko").split(",")[0].split("-")[0]||"ko";return e.html(`
    <!DOCTYPE html>
    <html lang="${a}">
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
        <script src="/static/app.js"><\/script>
    </body>
    </html>
  `)});const Ue=new mt,gs=Object.assign({"/src/index.tsx":he});let gt=!1;for(const[,e]of Object.entries(gs))e&&(Ue.all("*",t=>{let a;try{a=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,a)}),Ue.notFound(t=>{let a;try{a=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,a)}),gt=!0);if(!gt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ue as default};
