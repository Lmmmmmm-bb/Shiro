import{r as l}from"./index-cEKDbFY5.js";const X=l.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),T=l.createContext({}),Y=l.createContext(null),Z=typeof document<"u",lt=Z?l.useLayoutEffect:l.useEffect,N=l.createContext({strict:!1}),U=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),ft="framerAppearId",dt="data-"+U(ft);function mt(t,e,n,r){const{visualElement:s}=l.useContext(T),a=l.useContext(N),c=l.useContext(Y),u=l.useContext(X).reducedMotion,g=l.useRef();r=r||a.renderer,!g.current&&r&&(g.current=r(t,{visualState:e,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=g.current;l.useInsertionEffect(()=>{d&&d.update(n,c)});const m=l.useRef(!!(n[dt]&&!window.HandoffComplete));return lt(()=>{d&&(d.render(),m.current&&d.animationState&&d.animationState.animateChanges())}),l.useEffect(()=>{d&&(d.updateFeatures(),!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(m.current=!1,window.HandoffComplete=!0))}),d}function gt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function ht(t,e,n){return l.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):gt(n)&&(n.current=r))},[e])}function E(t){return typeof t=="string"||Array.isArray(t)}function K(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const yt=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],pt=["initial",...yt];function k(t){return K(t.animate)||pt.some(e=>E(t[e]))}function wt(t){return!!(k(t)||t.variants)}function xt(t,e){if(k(t)){const{initial:n,animate:r}=t;return{initial:n===!1||E(n)?n:void 0,animate:E(r)?r:void 0}}return t.inherit!==!1?e:{}}function Ct(t){const{initial:e,animate:n}=xt(t,l.useContext(T));return l.useMemo(()=>({initial:e,animate:n}),[H(e),H(n)])}function H(t){return Array.isArray(t)?t.join(" "):t}const D={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},L={};for(const t in D)L[t]={isEnabled:e=>D[t].some(n=>!!e[n])};function bt(t){for(const e in t)L[e]={...L[e],...t[e]}}const St=l.createContext({}),vt=l.createContext({}),Vt=Symbol.for("motionComponentSymbol");function Pt({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:s}){t&&bt(t);function a(u,g){let d;const m={...l.useContext(X),...u,layoutId:Tt(u)},{isStatic:o}=m,f=Ct(u),h=r(u,o);if(!o&&Z){f.visualElement=mt(s,h,m,e);const y=l.useContext(vt),p=l.useContext(N).strict;f.visualElement&&(d=f.visualElement.loadFeatures(m,p,t,y))}return l.createElement(T.Provider,{value:f},d&&f.visualElement?l.createElement(d,{visualElement:f.visualElement,...m}):null,n(s,u,ht(h,f.visualElement,g),h,o,f.visualElement))}const c=l.forwardRef(a);return c[Vt]=s,c}function Tt({layoutId:t}){const e=l.useContext(St).id;return e&&t!==void 0?e+"-"+t:t}function Mt(t){function e(r,s={}){return Pt(t(r,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const At=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _(t){return typeof t!="string"||t.includes("-")?!1:!!(At.indexOf(t)>-1||/[A-Z]/.test(t))}const q={};function ge(t){Object.assign(q,t)}const M=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Q=new Set(M);function J(t,{layout:e,layoutId:n}){return Q.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!q[t]||t==="opacity")}const x=t=>!!(t&&t.getVelocity),Rt={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Et=M.length;function Lt(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,s){let a="";for(let c=0;c<Et;c++){const u=M[c];if(t[u]!==void 0){const g=Rt[u]||u;a+=`${g}(${t[u]}) `}}return e&&!t.z&&(a+="translateZ(0)"),a=a.trim(),s?a=s(t,r?"":a):n&&r&&(a="none"),a}const tt=t=>e=>typeof e=="string"&&e.startsWith(t),kt=tt("--"),he=tt("var(--"),ye=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Ot=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ft=(t,e,n)=>Math.min(Math.max(n,t),e),O={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},A={...O,transform:t=>Ft(0,1,t)},v={...O,default:1},pe=t=>Math.round(t*1e5)/1e5,we=/(-)?([\d]*\.?[\d])+/g,xe=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Ce=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Wt(t){return typeof t=="string"}const S=t=>({test:e=>Wt(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),w=S("deg"),R=S("%"),i=S("px"),be=S("vh"),Se=S("vw"),$={...R,parse:t=>R.parse(t)/100,transform:t=>R.transform(t*100)},I={...O,transform:Math.round},Bt={borderWidth:i,borderTopWidth:i,borderRightWidth:i,borderBottomWidth:i,borderLeftWidth:i,borderRadius:i,radius:i,borderTopLeftRadius:i,borderTopRightRadius:i,borderBottomRightRadius:i,borderBottomLeftRadius:i,width:i,maxWidth:i,height:i,maxHeight:i,size:i,top:i,right:i,bottom:i,left:i,padding:i,paddingTop:i,paddingRight:i,paddingBottom:i,paddingLeft:i,margin:i,marginTop:i,marginRight:i,marginBottom:i,marginLeft:i,rotate:w,rotateX:w,rotateY:w,rotateZ:w,scale:v,scaleX:v,scaleY:v,scaleZ:v,skew:w,skewX:w,skewY:w,distance:i,translateX:i,translateY:i,translateZ:i,x:i,y:i,z:i,perspective:i,transformPerspective:i,opacity:A,originX:$,originY:$,originZ:i,zIndex:I,fillOpacity:A,strokeOpacity:A,numOctaves:I};function et(t,e,n,r){const{style:s,vars:a,transform:c,transformOrigin:u}=t;let g=!1,d=!1,m=!0;for(const o in e){const f=e[o];if(kt(o)){a[o]=f;continue}const h=Bt[o],y=Ot(f,h);if(Q.has(o)){if(g=!0,c[o]=y,!m)continue;f!==(h.default||0)&&(m=!1)}else o.startsWith("origin")?(d=!0,u[o]=y):s[o]=y}if(e.transform||(g||r?s.transform=Lt(t.transform,n,m,r):s.transform&&(s.transform="none")),d){const{originX:o="50%",originY:f="50%",originZ:h=0}=u;s.transformOrigin=`${o} ${f} ${h}`}}const F=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function nt(t,e,n){for(const r in e)!x(e[r])&&!J(r,n)&&(t[r]=e[r])}function Ht({transformTemplate:t},e,n){return l.useMemo(()=>{const r=F();return et(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function Dt(t,e,n){const r=t.style||{},s={};return nt(s,r,t),Object.assign(s,Ht(t,e,n)),t.transformValues?t.transformValues(s):s}function $t(t,e,n){const r={},s=Dt(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=s,r}const It=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function P(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||It.has(t)}let st=t=>!P(t);function jt(t){t&&(st=e=>e.startsWith("on")?!P(e):t(e))}try{jt(require("@emotion/is-prop-valid").default)}catch{}function zt(t,e,n){const r={};for(const s in t)s==="values"&&typeof t.values=="object"||(st(s)||n===!0&&P(s)||!e&&!P(s)||t.draggable&&s.startsWith("onDrag"))&&(r[s]=t[s]);return r}function j(t,e,n){return typeof t=="string"?t:i.transform(e+n*t)}function Gt(t,e,n){const r=j(e,t.x,t.width),s=j(n,t.y,t.height);return`${r} ${s}`}const Xt={offset:"stroke-dashoffset",array:"stroke-dasharray"},Yt={offset:"strokeDashoffset",array:"strokeDasharray"};function Zt(t,e,n=1,r=0,s=!0){t.pathLength=1;const a=s?Xt:Yt;t[a.offset]=i.transform(-r);const c=i.transform(e),u=i.transform(n);t[a.array]=`${c} ${u}`}function rt(t,{attrX:e,attrY:n,attrScale:r,originX:s,originY:a,pathLength:c,pathSpacing:u=1,pathOffset:g=0,...d},m,o,f){if(et(t,d,m,f),o){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:y,dimensions:p}=t;h.transform&&(p&&(y.transform=h.transform),delete h.transform),p&&(s!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=Gt(p,s!==void 0?s:.5,a!==void 0?a:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),c!==void 0&&Zt(h,c,u,g,!1)}const at=()=>({...F(),attrs:{}}),ot=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Nt(t,e,n,r){const s=l.useMemo(()=>{const a=at();return rt(a,e,{enableHardwareAcceleration:!1},ot(r),t.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(t.style){const a={};nt(a,t.style,t),s.style={...a,...s.style}}return s}function Ut(t=!1){return(n,r,s,{latestValues:a},c)=>{const g=(_(n)?Nt:$t)(r,a,c,n),m={...zt(r,typeof n=="string",t),...g,ref:s},{children:o}=r,f=l.useMemo(()=>x(o)?o.get():o,[o]);return l.createElement(n,{...m,children:f})}}function Kt(t,{style:e,vars:n},r,s){Object.assign(t.style,e,s&&s.getProjectionStyles(r));for(const a in n)t.style.setProperty(a,n[a])}const _t=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function qt(t,e,n,r){Kt(t,e,void 0,r);for(const s in e.attrs)t.setAttribute(_t.has(s)?s:U(s),e.attrs[s])}function it(t,e){const{style:n}=t,r={};for(const s in n)(x(n[s])||e.style&&x(e.style[s])||J(s,t))&&(r[s]=n[s]);return r}function Qt(t,e){const n=it(t,e);for(const r in t)if(x(t[r])||x(e[r])){const s=M.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=t[r]}return n}function Jt(t,e,n,r={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),e}function te(t){const e=l.useRef(null);return e.current===null&&(e.current=t()),e.current}const ee=t=>Array.isArray(t),ne=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),ve=t=>ee(t)?t[t.length-1]||0:t;function se(t){const e=x(t)?t.get():t;return ne(e)?e.toValue():e}function re({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,s,a){const c={latestValues:ae(r,s,a,t),renderState:e()};return n&&(c.mount=u=>n(r,u,c)),c}const ct=t=>(e,n)=>{const r=l.useContext(T),s=l.useContext(Y),a=()=>re(t,e,r,s);return n?a():te(a)};function ae(t,e,n,r){const s={},a=r(t,{});for(const f in a)s[f]=se(a[f]);let{initial:c,animate:u}=t;const g=k(t),d=wt(t);e&&d&&!g&&t.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let m=n?n.initial===!1:!1;m=m||c===!1;const o=m?u:c;return o&&typeof o!="boolean"&&!K(o)&&(Array.isArray(o)?o:[o]).forEach(h=>{const y=Jt(t,h);if(!y)return;const{transitionEnd:p,transition:W,...B}=y;for(const b in B){let C=B[b];if(Array.isArray(C)){const ut=m?C.length-1:0;C=C[ut]}C!==null&&(s[b]=C)}for(const b in p)s[b]=p[b]}),s}const oe=t=>t;class z{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function ie(t){let e=new z,n=new z,r=0,s=!1,a=!1;const c=new WeakSet,u={schedule:(g,d=!1,m=!1)=>{const o=m&&s,f=o?e:n;return d&&c.add(g),f.add(g)&&o&&s&&(r=e.order.length),g},cancel:g=>{n.remove(g),c.delete(g)},process:g=>{if(s){a=!0;return}if(s=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let d=0;d<r;d++){const m=e.order[d];m(g),c.has(m)&&(u.schedule(m),t())}s=!1,a&&(a=!1,u.process(g))}};return u}const V=["prepare","read","update","preRender","render","postRender"],ce=40;function ue(t,e){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},a=V.reduce((o,f)=>(o[f]=ie(()=>n=!0),o),{}),c=o=>a[o].process(s),u=()=>{const o=performance.now();n=!1,s.delta=r?1e3/60:Math.max(Math.min(o-s.timestamp,ce),1),s.timestamp=o,s.isProcessing=!0,V.forEach(c),s.isProcessing=!1,n&&e&&(r=!1,t(u))},g=()=>{n=!0,r=!0,s.isProcessing||t(u)};return{schedule:V.reduce((o,f)=>{const h=a[f];return o[f]=(y,p=!1,W=!1)=>(n||g(),h.schedule(y,p,W)),o},{}),cancel:o=>V.forEach(f=>a[f].cancel(o)),state:s,steps:a}}const{schedule:G,cancel:Ve,state:Pe,steps:Te}=ue(typeof requestAnimationFrame<"u"?requestAnimationFrame:oe,!0),le={useVisualState:ct({scrapeMotionValuesFromProps:Qt,createRenderState:at,onMount:(t,e,{renderState:n,latestValues:r})=>{G.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),G.render(()=>{rt(n,r,{enableHardwareAcceleration:!1},ot(e.tagName),t.transformTemplate),qt(e,n)})}})},fe={useVisualState:ct({scrapeMotionValuesFromProps:it,createRenderState:F})};function de(t,{forwardMotionProps:e=!1},n,r){return{..._(t)?le:fe,preloadedFeatures:n,useRender:Ut(e),createVisualElement:r,Component:t}}const Me=Mt(de);export{Qt as $,dt as A,K as B,ee as C,yt as D,E,gt as F,ge as G,Te as H,se as I,q as J,he as K,St as L,X as M,M as N,Z as O,Y as P,k as Q,wt as R,vt as S,L as T,pt as U,kt as V,et as W,it as X,Kt as Y,_t as Z,U as _,te as a,rt as a0,qt as a1,ot as a2,_ as a3,bt as a4,N as a5,Wt as b,Ve as c,we as d,pe as e,G as f,A as g,O as h,x as i,Ft as j,xe as k,ye as l,Me as m,oe as n,Pe as o,R as p,Bt as q,Jt as r,Ce as s,Q as t,lt as u,i as v,w,Se as x,be as y,ve as z};
