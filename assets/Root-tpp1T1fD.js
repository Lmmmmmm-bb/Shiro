var Be=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var O=(e,t,n)=>(Be(e,t,"read from private field"),n?n.call(e):t.get(e)),he=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},pe=(e,t,n,s)=>(Be(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n);var be=(e,t,n)=>(Be(e,t,"access private method"),n);import{r as c,c as Rt,R as E,j as a,_ as gn}from"./index-cEKDbFY5.js";import{s as Pt}from"./index-L39uUvmE.js";import{S as bn,s as Cn,o as jt,p as vn,r as Mt,u as ve,b as we,t as He,v as yn,a as En,w as wn}from"./owner-gm5QI4D_.js";import{u as Dt,a as Rn,b as jn,c as Fe,d as Sn,e as it,f as _n,g as Nn,h as kn,i as Ft,M as Tn,j as Ve,k as On,l as In,m as An,s as ct,n as J,o as Je,E as Ln,p as Pn}from"./Comments-ORH3QYY3.js";import{j as Me,k as Mn,I as Dn,f as lt,l as Fn}from"./utils-W8kcJrlX.js";import{a as Q,c as ee}from"./helper-DD-oFgKI.js";import{m as Vn,i as zn,a as Ze,I as Vt}from"./Gallery-5aRGdtIn.js";import{i as zt,j as Wn,k as $n,d as Un,l as Bn}from"./Markdown-i7_InwlX.js";import{u as ut,j as B,a as Wt,s as Hn,e as qn}from"./store-1e50S-Vs.js";import{A as Kn}from"./index-JLkEnOrT.js";import{m as De}from"./motion-minimal-Tee1cah2.js";import{F as $t}from"./FloatPopover-ALqOuvRZ.js";import{e as St,f as Gn,g as Yn,_ as Qn,p as Xn,b as Jn}from"./LinkCard-TCq-D24B.js";import{i as Zn}from"./index-OVDJ2T7o.js";import{M as Ut,S as _t}from"./StyledButton-r7dAWKhX.js";var de,oe,q,ae,Ce,Le,Ne,et,Lt,es=(Lt=class extends bn{constructor(t,n){super();he(this,Ce);he(this,Ne);he(this,de,void 0);he(this,oe,void 0);he(this,q,void 0);he(this,ae,void 0);pe(this,oe,void 0),pe(this,de,t),this.setOptions(n),this.bindMethods(),be(this,Ce,Le).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var s;const n=this.options;this.options=O(this,de).defaultMutationOptions(t),Cn(n,this.options)||O(this,de).getMutationCache().notify({type:"observerOptionsUpdated",mutation:O(this,q),observer:this}),(s=O(this,q))==null||s.setOptions(this.options),n!=null&&n.mutationKey&&this.options.mutationKey&&jt(n.mutationKey)!==jt(this.options.mutationKey)&&this.reset()}onUnsubscribe(){var t;this.hasListeners()||(t=O(this,q))==null||t.removeObserver(this)}onMutationUpdate(t){be(this,Ce,Le).call(this),be(this,Ne,et).call(this,t)}getCurrentResult(){return O(this,oe)}reset(){var t;(t=O(this,q))==null||t.removeObserver(this),pe(this,q,void 0),be(this,Ce,Le).call(this),be(this,Ne,et).call(this)}mutate(t,n){var s;return pe(this,ae,n),(s=O(this,q))==null||s.removeObserver(this),pe(this,q,O(this,de).getMutationCache().build(O(this,de),this.options)),O(this,q).addObserver(this),O(this,q).execute(t)}},de=new WeakMap,oe=new WeakMap,q=new WeakMap,ae=new WeakMap,Ce=new WeakSet,Le=function(){var n;const t=((n=O(this,q))==null?void 0:n.state)??vn();pe(this,oe,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},Ne=new WeakSet,et=function(t){Mt.batch(()=>{var n,s,r,o,i,f,u,v;if(O(this,ae)&&this.hasListeners()){const p=O(this,oe).variables,x=O(this,oe).context;(t==null?void 0:t.type)==="success"?((s=(n=O(this,ae)).onSuccess)==null||s.call(n,t.data,p,x),(o=(r=O(this,ae)).onSettled)==null||o.call(r,t.data,null,p,x)):(t==null?void 0:t.type)==="error"&&((f=(i=O(this,ae)).onError)==null||f.call(i,t.error,p,x),(v=(u=O(this,ae)).onSettled)==null||v.call(u,void 0,t.error,p,x))}this.listeners.forEach(p=>{p(O(this,oe))})})},Lt);function ts(e,t){const n=zt(t),[s]=c.useState(()=>new es(n,e));c.useEffect(()=>{s.setOptions(e)},[s,e]);const r=c.useSyncExternalStore(c.useCallback(i=>s.subscribe(Mt.batchCalls(i)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),o=c.useCallback((i,f)=>{s.mutate(i,f).catch(ns)},[s]);if(r.error&&Wn(s.options.throwOnError,[r.error]))throw r.error;return{...r,mutate:o,mutateAsync:r.mutate}}function ns(){}typeof window<"u"&&!window.global&&(window.global=typeof Rt>"u"?window:Rt);var Bt=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,rs=Object.getOwnPropertyNames,os=Object.prototype.hasOwnProperty,as=(e,t)=>{for(var n in t)Bt(e,n,{get:t[n],enumerable:!0})},Nt=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of rs(t))!os.call(e,r)&&r!==n&&Bt(e,r,{get:()=>t[r],enumerable:!(s=ss(t,r))||s.enumerable});return e},is=(e,t,n)=>(Nt(e,t,"default"),n&&Nt(n,t,"default")),cs=()=>{try{return!1}catch{}return!1},ls=()=>{try{return!0}catch{}return!1},kt=new Set,us=(e,t,n)=>{const s=cs()||ls(),r=n??e;kt.has(r)||s||(kt.add(r),console.warn(`Clerk - DEPRECATION WARNING: "${e}" is deprecated and will be removed in the next major release.
${t}`))},ds={Expired:"expired",Failed:"failed"};new Proxy(ds,{get(e,t,n){return us("MagicLinkErrorCode","Use `EmailLinkErrorCode` instead."),Reflect.get(e,t,n)}});const fs="Clerk: You must wrap your application in a <ClerkProvider> component.",ms=e=>`Clerk: You've passed multiple children components to <${e}/>. You can only pass a single child component or text.`,hs=e=>t=>{try{return E.Children.only(e)}catch{throw new Error(ms(t))}},ps=(e,t)=>(e||(e=t),typeof e=="string"&&(e=E.createElement("button",null,e)),e),xs=e=>(...t)=>{if(e&&typeof e=="function")return e(...t)},fe=()=>{},H=fe(),Pe=Object,b=e=>e===H,Y=e=>typeof e=="function",ie=(e,t)=>({...e,...t}),gs=e=>Y(e.then),Ie=new WeakMap;let bs=0;const Se=e=>{const t=typeof e,n=e&&e.constructor,s=n==Date;let r,o;if(Pe(e)===e&&!s&&n!=RegExp){if(r=Ie.get(e),r)return r;if(r=++bs+"~",Ie.set(e,r),n==Array){for(r="@",o=0;o<e.length;o++)r+=Se(e[o])+",";Ie.set(e,r)}if(n==Pe){r="#";const i=Pe.keys(e).sort();for(;!b(o=i.pop());)b(e[o])||(r+=o+":"+Se(e[o])+",");Ie.set(e,r)}}else r=s?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return r},Z=new WeakMap,qe={},Ae={},dt="undefined",ze=typeof window!=dt,tt=typeof document!=dt,Cs=()=>ze&&typeof window.requestAnimationFrame!=dt,ue=(e,t)=>{const n=Z.get(e);return[()=>!b(t)&&e.get(t)||qe,s=>{if(!b(t)){const r=e.get(t);t in Ae||(Ae[t]=r),n[5](t,ie(r,s),r||qe)}},n[6],()=>!b(t)&&t in Ae?Ae[t]:!b(t)&&e.get(t)||qe]};let nt=!0;const vs=()=>nt,[st,rt]=ze&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[fe,fe],ys=()=>{const e=tt&&document.visibilityState;return b(e)||e!=="hidden"},Es=e=>(tt&&document.addEventListener("visibilitychange",e),st("focus",e),()=>{tt&&document.removeEventListener("visibilitychange",e),rt("focus",e)}),ws=e=>{const t=()=>{nt=!0,e()},n=()=>{nt=!1};return st("online",t),st("offline",n),()=>{rt("online",t),rt("offline",n)}},Rs={isOnline:vs,isVisible:ys},js={initFocus:Es,initReconnect:ws},Tt=!E.useId,_e=!ze||"Deno"in window,Ss=e=>Cs()?window.requestAnimationFrame(e):setTimeout(e,1),je=_e?c.useEffect:c.useLayoutEffect,Ke=typeof navigator<"u"&&navigator.connection,Ot=!_e&&Ke&&(["slow-2g","2g"].includes(Ke.effectiveType)||Ke.saveData),me=e=>{if(Y(e))try{e=e()}catch{e=""}const t=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?Se(e):"",[e,t]};let _s=0;const ot=()=>++_s,Ht=0,qt=1,Kt=2,Ns=3;var Re={__proto__:null,ERROR_REVALIDATE_EVENT:Ns,FOCUS_EVENT:Ht,MUTATE_EVENT:Kt,RECONNECT_EVENT:qt};async function Gt(...e){const[t,n,s,r]=e,o=ie({populateCache:!0,throwOnError:!0},typeof r=="boolean"?{revalidate:r}:r||{});let i=o.populateCache;const f=o.rollbackOnError;let u=o.optimisticData;const v=o.revalidate!==!1,p=y=>typeof f=="function"?f(y):f!==!1,x=o.throwOnError;if(Y(n)){const y=n,g=[],w=t.keys();for(const I of w)!/^\$(inf|sub)\$/.test(I)&&y(t.get(I)._k)&&g.push(I);return Promise.all(g.map(l))}return l(n);async function l(y){const[g]=me(y);if(!g)return;const[w,I]=ue(t,g),[d,W,k,N]=Z.get(t),L=d[g],D=()=>v&&(delete k[g],delete N[g],L&&L[0])?L[0](Kt).then(()=>w().data):w().data;if(e.length<3)return D();let m=s,h;const j=ot();W[g]=[j,0];const C=!b(u),T=w(),M=T.data,P=T._c,R=b(P)?M:P;if(C&&(u=Y(u)?u(R,M):u,I({data:u,_c:R})),Y(m))try{m=m(R)}catch($){h=$}if(m&&gs(m))if(m=await m.catch($=>{h=$}),j!==W[g][0]){if(h)throw h;return m}else h&&C&&p(h)&&(i=!0,m=R,I({data:m,_c:H}));i&&(h||(Y(i)&&(m=i(m,R)),I({data:m,error:H,_c:H}))),W[g][1]=ot();const F=await D();if(I({_c:H}),h){if(x)throw h;return}return i?F:m}}const It=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},Yt=(e,t)=>{if(!Z.has(e)){const n=ie(js,t),s={},r=Gt.bind(H,e);let o=fe;const i={},f=(p,x)=>{const l=i[p]||[];return i[p]=l,l.push(x),()=>l.splice(l.indexOf(x),1)},u=(p,x,l)=>{e.set(p,x);const y=i[p];if(y)for(const g of y)g(x,l)},v=()=>{if(!Z.has(e)&&(Z.set(e,[s,{},{},{},r,u,f]),!_e)){const p=n.initFocus(setTimeout.bind(H,It.bind(H,s,Ht))),x=n.initReconnect(setTimeout.bind(H,It.bind(H,s,qt)));o=()=>{p&&p(),x&&x(),Z.delete(e)}}};return v(),[e,r,v,o]}return[e,Z.get(e)[4]]},ks=(e,t,n,s,r)=>{const o=n.errorRetryCount,i=r.retryCount,f=~~((Math.random()+.5)*(1<<(i<8?i:8)))*n.errorRetryInterval;!b(o)&&i>o||setTimeout(s,f,r)},Ts=(e,t)=>Se(e)==Se(t),[We,Qt]=Yt(new Map),Xt=ie({onLoadingSlow:fe,onSuccess:fe,onError:fe,onErrorRetry:ks,onDiscarded:fe,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Ot?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Ot?5e3:3e3,compare:Ts,isPaused:()=>!1,cache:We,mutate:Qt,fallback:{}},Rs),Jt=(e,t)=>{const n=ie(e,t);if(t){const{use:s,fallback:r}=e,{use:o,fallback:i}=t;s&&o&&(n.use=s.concat(o)),r&&i&&(n.fallback=ie(r,i))}return n},at=c.createContext({}),Os=e=>{const{value:t}=e,n=c.useContext(at),s=Y(t),r=c.useMemo(()=>s?t(n):t,[s,n,t]),o=c.useMemo(()=>s?r:Jt(n,r),[s,n,r]),i=r&&r.provider,f=c.useRef(H);i&&!f.current&&(f.current=Yt(i(o.cache||We),r));const u=f.current;return u&&(o.cache=u[0],o.mutate=u[1]),je(()=>{if(u)return u[2]&&u[2](),u[3]},[]),c.createElement(at.Provider,ie(e,{value:o}))},Zt=ze&&window.__SWR_DEVTOOLS_USE__,Is=Zt?window.__SWR_DEVTOOLS_USE__:[],As=()=>{Zt&&(window.__SWR_DEVTOOLS_REACT__=E)},en=e=>Y(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}],tn=()=>ie(Xt,c.useContext(at)),Ls=(e,t)=>{const[n,s]=me(e),[,,,r]=Z.get(We);if(r[n])return r[n];const o=t(s);return r[n]=o,o},Ps=e=>(t,n,s)=>e(t,n&&((...o)=>{const[i]=me(t),[,,,f]=Z.get(We),u=f[i];return b(u)?n(...o):(delete f[i],u)}),s),Ms=Is.concat(Ps),Ds=e=>function(...n){const s=tn(),[r,o,i]=en(n),f=Jt(s,i);let u=e;const{use:v}=f,p=(v||[]).concat(Ms);for(let x=p.length;x--;)u=p[x](u);return u(r,o||f.fetcher||null,f)},Fs=(e,t,n)=>{const s=t[e]||(t[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r>=0&&(s[r]=s[s.length-1],s.pop())}},Vs=(e,t)=>(...n)=>{const[s,r,o]=en(n),i=(o.use||[]).concat(t);return e(s,r,{...o,use:i})};As();const zs=e=>me(e)[0],At=E.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)}),Ge={dedupe:!0},Ws=(e,t,n)=>{const{cache:s,compare:r,suspense:o,fallbackData:i,revalidateOnMount:f,revalidateIfStale:u,refreshInterval:v,refreshWhenHidden:p,refreshWhenOffline:x,keepPreviousData:l}=n,[y,g,w,I]=Z.get(s),[d,W]=me(e),k=c.useRef(!1),N=c.useRef(!1),L=c.useRef(d),D=c.useRef(t),m=c.useRef(n),h=()=>m.current,j=()=>h().isVisible()&&h().isOnline(),[C,T,M,P]=ue(s,d),R=c.useRef({}).current,F=b(i)?n.fallback[d]:i,$=(S,_)=>{for(const z in R){const A=z;if(A==="data"){if(!r(S[A],_[A])&&(!b(S[A])||!r(Oe,_[A])))return!1}else if(_[A]!==S[A])return!1}return!0},K=c.useMemo(()=>{const S=!d||!t?!1:b(f)?h().isPaused()||o?!1:b(u)?!0:u:f,_=U=>{const se=ie(U);return delete se._k,S?{isValidating:!0,isLoading:!0,...se}:se},z=C(),A=P(),X=_(z),ge=z===A?X:_(A);let V=X;return[()=>{const U=_(C());return $(U,V)?(V.data=U.data,V.isLoading=U.isLoading,V.isValidating=U.isValidating,V.error=U.error,V):(V=U,U)},()=>ge]},[s,d]),ce=Pt.useSyncExternalStore(c.useCallback(S=>M(d,(_,z)=>{$(z,_)||S()}),[s,d]),K[0],K[1]),ke=!k.current,te=y[d]&&y[d].length>0,le=ce.data,ne=b(le)?F:le,Te=ce.error,gt=c.useRef(ne),Oe=l?b(le)?gt.current:le:ne,bt=te&&!b(Te)?!1:ke&&!b(f)?f:h().isPaused()?!1:o?b(ne)?!1:u:b(ne)||u,Ct=!!(d&&t&&ke&&bt),hn=b(ce.isValidating)?Ct:ce.isValidating,pn=b(ce.isLoading)?Ct:ce.isLoading,Ee=c.useCallback(async S=>{const _=D.current;if(!d||!_||N.current||h().isPaused())return!1;let z,A,X=!0;const ge=S||{},V=!w[d]||!ge.dedupe,U=()=>Tt?!N.current&&d===L.current&&k.current:d===L.current,se={isValidating:!1,isLoading:!1},yt=()=>{T(se)},Et=()=>{const G=w[d];G&&G[1]===A&&delete w[d]},wt={isValidating:!0};b(C().data)&&(wt.isLoading=!0);try{if(V&&(T(wt),n.loadingTimeout&&b(C().data)&&setTimeout(()=>{X&&U()&&h().onLoadingSlow(d,n)},n.loadingTimeout),w[d]=[_(W),ot()]),[z,A]=w[d],z=await z,V&&setTimeout(Et,n.dedupingInterval),!w[d]||w[d][1]!==A)return V&&U()&&h().onDiscarded(d),!1;se.error=H;const G=g[d];if(!b(G)&&(A<=G[0]||A<=G[1]||G[1]===0))return yt(),V&&U()&&h().onDiscarded(d),!1;const re=C().data;se.data=r(re,z)?re:z,V&&U()&&h().onSuccess(z,d,n)}catch(G){Et();const re=h(),{shouldRetryOnError:$e}=re;re.isPaused()||(se.error=G,V&&U()&&(re.onError(G,d,re),($e===!0||Y($e)&&$e(G))&&j()&&re.onErrorRetry(G,d,re,xn=>{const Ue=y[d];Ue&&Ue[0]&&Ue[0](Re.ERROR_REVALIDATE_EVENT,xn)},{retryCount:(ge.retryCount||0)+1,dedupe:!0})))}return X=!1,yt(),!0},[d,s]),vt=c.useCallback((...S)=>Gt(s,L.current,...S),[]);if(je(()=>{D.current=t,m.current=n,b(le)||(gt.current=le)}),je(()=>{if(!d)return;const S=Ee.bind(H,Ge);let _=0;const A=Fs(d,y,(X,ge={})=>{if(X==Re.FOCUS_EVENT){const V=Date.now();h().revalidateOnFocus&&V>_&&j()&&(_=V+h().focusThrottleInterval,S())}else if(X==Re.RECONNECT_EVENT)h().revalidateOnReconnect&&j()&&S();else{if(X==Re.MUTATE_EVENT)return Ee();if(X==Re.ERROR_REVALIDATE_EVENT)return Ee(ge)}});return N.current=!1,L.current=d,k.current=!0,T({_k:W}),bt&&(b(ne)||_e?S():Ss(S)),()=>{N.current=!0,A()}},[d]),je(()=>{let S;function _(){const A=Y(v)?v(C().data):v;A&&S!==-1&&(S=setTimeout(z,A))}function z(){!C().error&&(p||h().isVisible())&&(x||h().isOnline())?Ee(Ge).then(_):_()}return _(),()=>{S&&(clearTimeout(S),S=-1)}},[v,p,x,d]),c.useDebugValue(Oe),o&&b(ne)&&d){if(!Tt&&_e)throw new Error("Fallback data is required when using suspense in SSR.");D.current=t,m.current=n,N.current=!1;const S=I[d];if(!b(S)){const _=vt(S);At(_)}if(b(Te)){const _=Ee(Ge);b(Oe)||(_.status="fulfilled",_.value=!0),At(_)}else throw Te}return{mutate:vt,get data(){return R.data=!0,Oe},get error(){return R.error=!0,Te},get isValidating(){return R.isValidating=!0,hn},get isLoading(){return R.isLoading=!0,pn}}},nn=Pe.defineProperty(Os,"defaultValue",{value:Xt}),ft=Ds(Ws),$s=Object.freeze(Object.defineProperty({__proto__:null,SWRConfig:nn,default:ft,mutate:Qt,preload:Ls,unstable_serialize:zs,useSWRConfig:tn},Symbol.toStringTag,{value:"Module"})),Us="$inf$",Bs=e=>me(e?e(0,null):null)[0],Ye=Promise.resolve(),Hs=e=>(t,n,s)=>{const r=c.useRef(!1),{cache:o,initialSize:i=1,revalidateAll:f=!1,persistSize:u=!1,revalidateFirstPage:v=!0,revalidateOnMount:p=!1,parallel:x=!1}=s;let l;try{l=Bs(t),l&&(l=Us+l)}catch{}const[y,g,w]=ue(o,l),I=c.useCallback(()=>b(y()._l)?i:y()._l,[o,l,i]);Pt.useSyncExternalStore(c.useCallback(m=>l?w(l,()=>{m()}):()=>{},[o,l]),I,I);const d=c.useCallback(()=>{const m=y()._l;return b(m)?i:m},[l,i]),W=c.useRef(d());je(()=>{if(!r.current){r.current=!0;return}l&&g({_l:u?W.current:d()})},[l,o]);const k=p&&!r.current,N=e(l,async m=>{const h=y()._i,j=[],C=d(),[T]=ue(o,m),M=T().data,P=[];let R=null;for(let F=0;F<C;++F){const[$,K]=me(t(F,x?null:R));if(!$)break;const[ce,ke]=ue(o,$);let te=ce().data;const le=f||h||b(te)||v&&!F&&!b(M)||k||M&&!b(M[F])&&!s.compare(M[F],te);if(n&&le){const ne=async()=>{te=await n(K),ke({data:te,_k:K}),j[F]=te};x?P.push(ne):await ne()}else j[F]=te;x||(R=te)}return x&&await Promise.all(P.map(F=>F())),g({_i:H}),j},s),L=c.useCallback(function(m,h){const j=typeof h=="boolean"?{revalidate:h}:h||{},C=j.revalidate!==!1;return l?(C&&(b(m)?g({_i:!0}):g({_i:!1})),arguments.length?N.mutate(m,{...j,revalidate:C}):N.mutate()):Ye},[l,o]),D=c.useCallback(m=>{if(!l)return Ye;const[,h]=ue(o,l);let j;if(Y(m)?j=m(d()):typeof m=="number"&&(j=m),typeof j!="number")return Ye;h({_l:j}),W.current=j;const C=[],[T]=ue(o,l);let M=null;for(let P=0;P<j;++P){const[R]=me(t(P,M)),[F]=ue(o,R),$=R?F().data:H;if(b($))return L(T().data);C.push($),M=$}return L(C)},[l,o,L,d]);return{size:d(),setSize:D,mutate:L,get data(){return N.data},get error(){return N.error},get isValidating(){return N.isValidating},get isLoading(){return N.isLoading}}},qs=Vs(ft,Hs);function Ks(e,t){if(!e)throw typeof t=="string"?new Error(t):new Error(`${t.displayName} not found`)}var ye=(e,t)=>{const{assertCtxFn:n=Ks}=t||{},s=E.createContext(void 0);return s.displayName=e,[s,()=>{const i=E.useContext(s);return n(i,`${e} not found`),i.value},()=>{const i=E.useContext(s);return i?i.value:{}}]},sn={};as(sn,{SWRConfig:()=>nn,useSWR:()=>ft,useSWRInfinite:()=>qs});is(sn,$s);var[Gs,Ys]=ye("ClerkInstanceContext"),[Xr,Qs]=ye("UserContext");ye("ClientContext");ye("SessionContext");ye("OrganizationContext");typeof window<"u"?E.useLayoutEffect:E.useEffect;const[Jr,Xs]=[Gs,Ys];function Js(e){if(!e)throw new Error(fs)}const Zs=Object.freeze({noGuarantees:Object.freeze({guaranteedLoaded:!1}),guaranteedLoaded:Object.freeze({guaranteedLoaded:!0})}),mt=E.createContext(void 0);mt.displayName="StructureContext";const er=()=>{const e=E.useContext(mt);return Js(e),e},tr=({children:e})=>er().guaranteedLoaded?E.createElement(E.Fragment,null,e):E.createElement(mt.Provider,{value:Zs.guaranteedLoaded},e),xe=(e,t)=>{t=t||e.displayName||e.name||"Component",e.displayName=t;const n=s=>{const r=Xs();return r.loaded?E.createElement(tr,null,E.createElement(e,{...s,clerk:r})):null};return n.displayName=`withClerk(${t})`,n},[Zr,rn]=ye("AuthContext");function on(){const e=Qs();return e===void 0?{isLoaded:!1,isSignedIn:void 0,user:void 0}:e===null?{isLoaded:!0,isSignedIn:!1,user:null}:{isLoaded:!0,isSignedIn:!0,user:e}}const nr=({children:e})=>{const{userId:t}=rn();return t?E.createElement(E.Fragment,null,e):null},sr=({children:e})=>{const{userId:t}=rn();return t===null?E.createElement(E.Fragment,null,e):null};xe(({clerk:e,...t})=>{const{client:n,session:s}=e,{__unstable__environment:r}=e,o=n.activeSessions&&n.activeSessions.length>0;return E.useEffect(()=>{if(s===null&&o&&r){const{afterSignOutOneUrl:i}=r.displayConfig;e.navigate(i)}else e.redirectToSignIn(t)},[]),null},"RedirectToSignIn");xe(({clerk:e,...t})=>(E.useEffect(()=>{e.redirectToSignUp(t)},[]),null),"RedirectToSignUp");xe(({clerk:e})=>(E.useEffect(()=>{e.redirectToUserProfile()},[]),null),"RedirectToUserProfile");xe(({clerk:e})=>(E.useEffect(()=>{e.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");xe(({clerk:e})=>(E.useEffect(()=>{e.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");xe(({clerk:e,...t})=>(E.useEffect(()=>{e.handleRedirectCallback(t)},[]),null),"AuthenticateWithRedirectCallback");const rr=xe(({clerk:e,children:t,...n})=>{const{afterSignInUrl:s,afterSignUpUrl:r,redirectUrl:o,mode:i,...f}=n;t=ps(t,"Sign in");const u=hs(t)("SignInButton"),v=()=>{const l={afterSignInUrl:s,afterSignUpUrl:r,redirectUrl:o};return i==="modal"?e.openSignIn(l):e.redirectToSignIn(l)},x={...f,onClick:async l=>(await xs(u.props.onClick)(l),v())};return E.cloneElement(u,x)},"SignInButton"),or=nr,ar=sr;function ir({className:e}){return a.jsx("i",{className:Q("icon-[mingcute--send-plane-line]",e)})}const cr=()=>{const e=kn(),t=Ft();return a.jsxs("span",{className:Q("font-mono text-[10px]",e?"text-red-500":"text-zinc-500"),children:[t.length,"/",Tn]})},lr=()=>{const e=ve(),t=it(),n=ut(Fe().isWhisper),s=Ve();return e||t?null:a.jsxs("label",{className:"label mx-2 flex items-center",children:[a.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:n,type:"checkbox",onChange:r=>{const o=r.target.checked;s("isWhisper",o)}}),a.jsx("span",{className:"label-text text-sm",children:"悄悄话"})]})},ur=()=>{const e=ve(),t=ut(Fe().syncToRecently),n=Ve(),s=it();return!e||s?null:a.jsxs("label",{className:"label mx-2 flex items-center",children:[a.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:t,type:"checkbox",onChange:r=>{const o=r.target.checked;n("syncToRecently",o)}}),a.jsx("span",{className:"label-text text-sm",children:"同步到碎碎念"})]})},ht=({className:e})=>{const t=Dt();return a.jsxs("footer",{className:ee("mt-3 flex h-5 w-full min-w-0 items-center justify-between",e),children:[a.jsxs("span",{className:Q("flex-1 select-none text-[10px] text-zinc-500 transition-opacity"),children:[a.jsxs("span",{className:"hidden md:inline",children:["支持 ",a.jsx("b",{children:"Markdown"})," 与"," ",a.jsx($n,{href:"https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",children:"GFM"})]}),a.jsx(Rn,{})]}),a.jsx(Kn,{children:t&&a.jsxs(De.aside,{initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:8},className:"flex select-none items-center gap-2.5",children:[a.jsx(cr,{}),a.jsx(lr,{}),a.jsx(ur,{}),a.jsx(dr,{})]},"send-button-wrapper")})]})},dr=()=>{const e=jn(),{text:t,author:n,mail:s,url:r,source:o,avatar:i,isWhisper:f,syncToRecently:u}=Fe(),{afterSubmit:v}=Sn(),p=ve(),x=zt(),l=it(),y=_n(),g=Nn(),w=k=>(g==null||g(k),k),{mutate:I,isPending:d}=ts({mutationFn:async k=>{const N=B.get(t),L=B.get(n),D=B.get(s),m=B.get(i),h=B.get(o),j=B.get(r),C={text:N,author:L,mail:D,avatar:m,source:h,url:j};if(p&&delete C.avatar,Object.keys(C).forEach(P=>{C[P]===""&&delete C[P]}),l)return p?we.comment.proxy.master.reply(k).post({data:{text:N,source:h}}).then(w):we.comment.reply(k,C).then(w);const T=B.get(f),M=B.get(u);return p?we.comment.proxy.master.comment(k).post({data:{text:N,source:h}}).then(async P=>(M&&we.recently.proxy.post({data:{content:N,ref:k}}).then(()=>{He.success("已同步到碎碎念")}),P)).then(w):(C.isWhispers=T,we.comment.comment(k,C).then(w))},mutationKey:[e,"comment"],onError(k){He.error(yn(k))},onSuccess(k){v==null||v();const N=p?"发表成功啦~":l?"感谢你的回复！":"感谢你的评论！",L=On(y);He.success(N),B.set(t,""),x.setQueryData(L,D=>D&&(l?Me(D,m=>{const h=(C,T,M)=>{if(C.id===T)return C.children||(C.children=[]),C.children.push({...M,new:!0}),!0;if(C.children){for(const P of C.children)if(h(P,T,M))return!0;return!1}},j={...k,new:!0};for(const C of m.pages)for(const T of C.data)if(h(T,e,j))break}):Me(D,m=>{m.pages[0].data.unshift({...k,new:!0})})))}}),W=()=>{I(e)};return a.jsxs(De.button,{className:"flex appearance-none items-center space-x-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",disabled:d,onClick:W,children:[a.jsx(ir,{className:"h-5 w-5 text-zinc-800 dark:text-zinc-200"}),a.jsx(De.span,{className:"text-sm",layout:"size",children:d?"送信...":"送信"})]})},fr=()=>{const e="bg-gray-200/50 dark:bg-zinc-800/50";return a.jsxs("div",{className:"flex animate-pulse gap-4",children:[a.jsx("div",{className:Q("h-12 w-12 self-end overflow-hidden rounded-full",e)}),a.jsx("div",{className:Q("h-[150px] w-full rounded-lg",e)})]})},an=c.forwardRef((e,t)=>{const{className:n,children:s,...r}=e,o=St(0),i=St(0),f=c.useCallback(({clientX:x,clientY:l,currentTarget:y})=>{const g=y.getBoundingClientRect();o.set(x-g.left),i.set(l-g.top)},[o,i]),u=Gn`radial-gradient(320px circle at ${o}px ${i}px, var(--spotlight-color) 0%, transparent 85%)`,v=En(),p=Mn(e);return a.jsxs("div",{className:"group relative h-full overflow-hidden [--spotlight-color:oklch(var(--a)_/_0.12)]",onMouseMove:f,children:[!v&&a.jsx(De.div,{className:"pointer-events-none absolute bottom-[-150px] left-0 right-0 top-0 z-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",style:{background:u},"aria-hidden":"true"}),a.jsx("textarea",{ref:t,className:ee("h-full w-full resize-none bg-transparent","overflow-auto px-3 py-4","text-neutral-900/80 dark:text-slate-100/80",n),...r,...p}),s]})});an.displayName="TextArea";const mr=c.forwardRef((e,t)=>c.createElement(Yn.label,Qn({},e,{ref:t,onMouseDown:n=>{var s;(s=e.onMouseDown)===null||s===void 0||s.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault()}}))),cn=mr,hr=c.createContext({}),pr=()=>c.useContext(hr),pt=c.forwardRef(({className:e,...t},n)=>{const s=pr();return a.jsx(cn,{ref:n,className:ee("text-foreground-600 text-[1em] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e,s.className),...t})});pt.displayName=cn.displayName;const xr=({errorMessage:e,id:t})=>a.jsx("div",{className:"mt-2",children:a.jsx(pt,{className:"text-xs font-medium text-error",htmlFor:t,children:e})}),gr=c.createContext({}),br=()=>c.useContext(gr),Cr=E.forwardRef((e,t)=>{const{className:n,type:s,label:r,isLoading:o,errorMessage:i,isInvalid:f,endContent:u,labelPlacement:v,inputClassName:p,bindValue:x,...l}=e,y=c.useId(),g=br(),{value:w,onChange:I,onBlur:d,onFocus:W,labelClassName:k,...N}=l,[L,D]=E.useState(!1),m=E.useCallback(()=>{D(!0)},[]),h=E.useCallback(()=>{D(!1)},[]),[j,C]=E.useState(l.value);c.useEffect(()=>{C(l.value)},[l.value]);const[T,M]=E.useState(!1),P=Vn({},g,e),{labelPlacement:R="top"}=P,F=ee(g.inputClassName,e.labelClassName),$=ee(g.inputClassName,e.inputClassName);return a.jsxs("div",{className:"flex w-full flex-col",children:[a.jsxs("div",{className:ee({"flex flex-col":R==="top","flex flex-grow flex-row items-center":R==="left"},"peer relative",n),children:[r&&a.jsx(pt,{className:Q({"mr-4":R==="left","mb-2 flex":R==="top"},R==="inside"&&{"absolute left-3 top-2 z-[1] select-none duration-200":!0,"text-primary":L,"bottom-2 top-2 flex items-center text-lg":!w&&!L},F),htmlFor:y,children:r}),a.jsxs("div",{className:"relative flex-grow",children:[a.jsx("input",{id:y,value:zn(x)?j:x,onChange:K=>{C(K.target.value),I==null||I(K)},onBlur:K=>{h(),d==null||d(K)},onFocus:K=>{m(),W==null||W(K)},type:s==="password"&&!T?"password":"text",className:ee("flex h-10 w-full rounded-md border px-3 py-2 text-sm","focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50","border-zinc-200 bg-white placeholder:text-slate-500 focus-visible:border-primary dark:border-neutral-800 dark:bg-zinc-900",R==="inside"&&"h-auto pb-2 pt-8",s==="password"&&["pr-6",!T&&"font-mono"],o&&"pr-6",f&&"!border-red-400 !bg-red-600/50",$),ref:t,...N}),s==="password"&&!o&&a.jsx(Ut,{className:Qe({placement:R}),onClick:()=>{M(!T)},children:a.jsx("i",{className:Q("text-lg text-gray-500",T?"icon-[mingcute--eye-line]":"icon-[mingcute--eye-close-line]")})}),!o&&u&&a.jsx("div",{className:Qe({placement:R}),children:u}),o&&a.jsx("div",{className:Qe({placement:R}),children:a.jsx("i",{className:"loading loading-spinner h-5 w-5 text-primary/80"})})]})]}),f&&i&&a.jsx(xr,{id:y,errorMessage:i})]})}),Qe=Zn({base:"absolute right-2",variants:{placement:{inside:"bottom-2",left:"bottom-0 top-0 flex items-center",top:"bottom-0 top-0 flex items-center"}}});Cr.displayName="Input";const vr=Un(()=>gn(()=>import("./EmojiPicker-TM3V0Axe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]),import.meta.url).then(e=>e.EmojiPicker)),xt=()=>{const e=Ze(()=>In()),t=Ve(),n=Ft(),s=c.useRef(null),r=c.useCallback(o=>{if(!s.current)return;const i=s.current,f=i.selectionStart,u=i.selectionEnd;i.value=`${i.value.substring(0,f)} ${o} ${i.value.substring(u,i.value.length)}`,t("text",i.value),requestAnimationFrame(()=>{const v=f+o.length+2;i.selectionStart=v,i.selectionEnd=v,i.focus()})},[]);return c.useEffect(()=>{const o=s.current;o&&n!==o.value&&(o.value=n)},[n]),c.useLayoutEffect(()=>{const o=s.current;o&&(o.selectionStart=o.selectionEnd=o.value.length,o.focus())},[]),a.jsx(an,{ref:s,defaultValue:n,onChange:o=>t("text",o.target.value),placeholder:e,children:a.jsx(An,{children:a.jsx($t,{trigger:"click",TriggerComponent:yr,headless:!0,children:a.jsx(vr,{onEmojiSelect:r})})})})},yr=()=>a.jsxs("button",{className:"ml-0 inline-flex h-5 w-5 translate-y-1 text-base center md:ml-4",onClick:Xn,children:[a.jsx("i",{className:"icon-[mingcute--emoji-2-line]"}),a.jsx("span",{className:"sr-only",children:"表情"})]}),Er=()=>{const{user:e}=on(),t=Ve(),n=e?e.fullName||e.lastName||e.firstName||"Anonymous":"";return c.useEffect(()=>{var r,o;if(!e)return;t("author",n),t("avatar",e.imageUrl),t("mail",((r=e.primaryEmailAddress)==null?void 0:r.emailAddress)||"");const s=(o=e.primaryEmailAddress)==null?void 0:o.verification.strategy;s&&t("source",s)},[n,t,e]),e?a.jsxs("div",{className:"flex space-x-4",children:[a.jsx("div",{className:Q("mb-2 flex-shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:a.jsx(Vt,{className:"rounded-full object-cover",src:e.imageUrl,alt:`${n}'s avatar`,width:48,height:48})}),a.jsx("div",{className:"relative h-[150px] w-full rounded-lg bg-gray-200/50 pb-5 dark:bg-zinc-800/50",children:a.jsx(xt,{})}),a.jsx(ht,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]}):a.jsx(fr,{})};Wt({});const ln=c.createContext(null),un=c.createContext(null),dn=()=>c.useContext(ln),wr=()=>c.useContext(un),Rr=e=>{const{showErrorMessage:t=!0,...n}=e,s=Ze(()=>Wt({}));return a.jsx(ln.Provider,{value:Ze(()=>({showErrorMessage:t,fields:s,getField:r=>B.get(s)[r],addField:(r,o)=>{B.set(s,i=>({...i,[r]:o}))},removeField:r=>{B.set(s,o=>{const i={...o};return delete i[r],i})}})),children:a.jsx(un.Provider,{value:c.useMemo(()=>({showErrorMessage:t}),[t]),children:a.jsx(jr,{...n})})})},jr=e=>{const{onSubmit:t,...n}=e,s=dn().fields,r=c.useCallback(async o=>{o.preventDefault();const i=B.get(s);for await(const[f,u]of Object.entries(i)){const v=u.$ref;if(!v)continue;const p=v.value,x=u.rules;for(let l=0;l<x.length;l++){const y=x[l];try{if(!await y.validator(p)){console.error(`Form validation failed, at field \`${f}\`, got value \`${p}\``),v.focus(),y.message&&B.set(s,w=>Me(w,I=>{I[f].rules[l].status="error"}));return}}catch(g){console.error("validate function throw error",g);return}}}t==null||t(o)},[t]);return a.jsx("form",{onSubmit:r,...n,children:e.children})},fn=c.memo(({className:e,rules:t,onKeyDown:n,...s})=>{const r=dn();if(!r)throw new Error("FormInput must be used inside <FormContext />");const{showErrorMessage:o}=wr(),{addField:i,removeField:f,fields:u}=r,v=c.useRef(null),p=ut(Hn(u,c.useCallback(l=>{var y,g;if(s.name)return(g=(y=l[s.name])==null?void 0:y.rules.find(w=>w.status==="error"))==null?void 0:g.message},[s.name])));c.useEffect(()=>{const l=s.name;if(t&&l)return i(l,{rules:t,$ref:v.current}),()=>{f(l)}},[s.name,t]);const x=c.useCallback(l=>{n&&n(l),B.set(u,y=>Me(y,g=>{s.name&&g[s.name].rules.forEach(w=>{w.status==="error"&&(w.status="success")})}))},[u,n,s.name]);return a.jsxs(a.Fragment,{children:[a.jsx(Dn,{ref:v,className:ee(!!p&&"ring-2 ring-red-400 dark:ring-orange-700","w-full",e),type:"text",onKeyDown:x,...s}),o&&a.jsx(lt,{duration:.2,children:a.jsx("p",{className:"text-left text-sm text-red-400 dark:text-orange-700",children:p})})]})});fn.displayName="FormInput";const Sr=()=>ve()?a.jsx(kr,{}):a.jsx(Nr,{}),mn="relative h-[150px] w-full rounded-lg bg-gray-200/50 pb-5 dark:bg-zinc-800/50",_r={author:"昵称",mail:"邮箱",url:"网址"},Xe=e=>{const{fieldKey:t,required:n}=e,[s,r]=qn(Fe()[t]);return a.jsx(fn,{type:"text",value:s,onChange:o=>r(o.target.value),required:n,placeholder:_r[t]+(n?" *":""),className:"border-0 bg-gray-200/50 dark:bg-zinc-800/50"})},Nr=()=>a.jsxs(Rr,{className:"flex flex-col space-y-4 px-2 pt-2",showErrorMessage:!1,children:[a.jsxs("div",{className:"flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0",children:[a.jsx(Xe,{fieldKey:"author",required:!0}),a.jsx(Xe,{fieldKey:"mail",required:!0}),a.jsx(Xe,{fieldKey:"url"})]}),a.jsx("div",{className:ee(mn,"pb-8"),children:a.jsx(xt,{})}),a.jsx(ht,{className:"absolute bottom-4 left-0 right-4 mb-2 ml-4 w-auto px-4"})]}),kr=()=>{const e=wn(t=>t.user);return a.jsxs("div",{className:"flex space-x-4",children:[a.jsx("div",{className:Q("mb-2 flex-shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:a.jsx(Vt,{className:"rounded-full object-cover",src:e.avatar,alt:`${e.name||e.username}'s avatar`,width:48,height:48})}),a.jsx("div",{className:mn,children:a.jsx(xt,{})}),a.jsx(ht,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]})};function Tr(e){return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:a.jsx("path",{d:"M11 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H15M16.8744 13C16.2164 13.4935 15.6221 14.066 15.1049 14.7043C15.035 14.7906 15 14.8953 15 15M16.8744 17C16.2164 16.5065 15.6221 15.934 15.1049 15.2957C15.035 15.2094 15 15.1047 15 15M15 15H21M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function Or(){const e=Bn(),{dismissAll:t}=Jn();return a.jsxs("div",{className:"flex h-[150px] w-full space-x-4 rounded-lg bg-gray-100/80 center dark:bg-zinc-900/80",children:[a.jsx(_t,{variant:"secondary",type:"button",onClick:()=>{ct(J.legacy)},children:"免登录评论"}),a.jsx(rr,{mode:"modal",redirectUrl:Fn(e).href,children:a.jsxs(_t,{onClick:()=>{t()},variant:"primary",type:"button",children:[a.jsx(Tr,{className:"mr-1 h-5 w-5"}),"登录后才可以留言噢"]})})]})}const Ir=()=>{const e=Je(),t=`转换到${e===J.legacy?"新":"旧"}版评论`,n=Dt(),s=!!on(),r=c.useRef(function(){const f=Je();return a.jsxs(a.Fragment,{children:[a.jsx("i",{className:Q(f===J.legacy?"icon-[mingcute--user-4-line]":"icon-[material-symbols--dynamic-form-outline]")}),a.jsx("span",{className:"sr-only",children:t})]})}).current;return ve()?null:a.jsx(Ut,{className:Q("absolute left-0 top-0 z-10 rounded-full text-sm","h-6 w-6 border border-slate-200 dark:border-neutral-800","bg-slate-100 dark:bg-neutral-900","flex cursor-pointer text-base-100/50 center","text-base-content/50","opacity-0 transition-opacity duration-200 group-[:hover]:opacity-100",e===J.legacy&&"bottom-0 top-auto",n||s&&e===J["with-auth"]&&"invisible opacity-0"),onClick:()=>{ct(e===J.legacy?J["with-auth"]:J.legacy)},children:a.jsx($t,{TriggerComponent:r,children:t})})},eo=e=>{const{refId:t,className:n,afterSubmit:s,initialValue:r}=e,o=Je(),i=ve();return c.useEffect(()=>{i&&ct(J.legacy)},[i]),a.jsx(Ln,{children:a.jsx(Pn,{refId:t,afterSubmit:s,initialValue:r,children:a.jsxs("div",{className:ee("group relative w-full min-w-0",n),"data-hide-print":!0,children:[a.jsx(Ir,{}),a.jsx("div",{className:"relative w-full",children:o===J.legacy?a.jsx(Ar,{}):a.jsx(Lr,{})})]})})})},Ar=()=>a.jsx(lt,{children:a.jsx(Sr,{})}),Lr=()=>a.jsxs(lt,{children:[a.jsx(ar,{children:a.jsx(Or,{})}),a.jsx(or,{children:a.jsx(Er,{})})]});export{eo as C};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./EmojiPicker-TM3V0Axe.js","./index-cEKDbFY5.js","./index-2VqBoVOK.css","./Markdown-i7_InwlX.js","./helper-DD-oFgKI.js","./FloatPopover-ALqOuvRZ.js","./spring-rk-u5Py4.js","./use-is-client-D9Z_mMYu.js","./env-y9k74Ds6.js","./index-JLkEnOrT.js","./motion-minimal-Tee1cah2.js","./visual-element-LqzFRUWX.js","./Gallery-5aRGdtIn.js","./Divider-z7wY2tlp.js","./store-1e50S-Vs.js","./index-OVDJ2T7o.js","./Gallery-cCMf-PmV.css","./LinkCard-TCq-D24B.js","./StyledButton-r7dAWKhX.js","./owner-gm5QI4D_.js","./LinkCard-P0Jx4JBj.css","./RichLink-uJhn8fRd.js","./Collapse-pgP8T04w.js","./Markdown-nCH90t0a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
