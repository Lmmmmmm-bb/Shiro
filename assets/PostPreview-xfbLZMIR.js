import{R as u,j as e,r as d}from"./index-cEKDbFY5.js";import{T as F,a as k,b as H,c as W,n as v,B as D,L as V}from"./Markdown-i7_InwlX.js";import{r as L,R as S,M as q,a as p,N as O,u as h,q as U,b as X,d as Z,A as K,P as Q,X as G,g as J}from"./utils-W8kcJrlX.js";import{L as P,M as Y}from"./StyledButton-r7dAWKhX.js";import{R as ee,F as te}from"./FloatPopover-ALqOuvRZ.js";import{b as _,R as se}from"./LinkCard-TCq-D24B.js";import{c as R,a as y}from"./helper-DD-oFgKI.js";import{a as re,b as $,d as b}from"./owner-gm5QI4D_.js";import{M as ne,W as ae}from"./Gallery-5aRGdtIn.js";import{a as I,u as le}from"./store-1e50S-Vs.js";import{A as C}from"./index-JLkEnOrT.js";import{m as E}from"./motion-minimal-Tee1cah2.js";import{P as ie}from"./PinIconToggle-LBSQMkYQ.js";import"./env-y9k74Ds6.js";import"./spring-rk-u5Py4.js";import"./visual-element-LqzFRUWX.js";import"./RichLink-uJhn8fRd.js";import"./Divider-z7wY2tlp.js";import"./Collapse-pgP8T04w.js";import"./customParseFormat-9BO8iqn_.js";import"./index-OVDJ2T7o.js";import"./use-is-client-D9Z_mMYu.js";var oe=typeof window>"u",g=oe?u.useEffect:u.useLayoutEffect,ce=0,w=()=>++ce,N=!1;function ue(){let[r,t]=u.useState(N?w:void 0);return g(()=>{r===void 0&&t(w()),N=!0},[]),r===void 0?r:`rwb-${r.toString(32)}`}function de(){return u.useMemo(()=>"useId"in u?u.useId:ue,[])()}var j="__wrap_b",f="__wrap_n",M="__wrap_o",T=(r,t,s)=>{s=s||document.querySelector(`[data-br="${r}"]`);let n=s.parentElement,l=x=>s.style.maxWidth=x+"px";s.style.maxWidth="";let a=n.clientWidth,i=n.clientHeight,c=a/2-.25,o=a+.5,m;if(a){for(l(c),c=Math.max(s.scrollWidth,c);c+1<o;)m=Math.round((c+o)/2),l(m),n.clientHeight===i?o=m:c=m;l(o*t+a*(1-t))}s.__wrap_o||typeof ResizeObserver<"u"&&(s.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0,+s.dataset.brr,s)})).observe(n)},me=T.toString(),xe='(self.CSS&&CSS.supports("text-wrap","balance")?1:2)',fe=(r,t,s="")=>(s&&(s=`self.${f}!=1&&${s}`),u.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:(r?"":`self.${f}=self.${f}||${xe};self.${j}=${me};`)+s},nonce:t})),he=u.createContext({preferNative:!0,hasProvider:!1}),A=({ratio:r=1,preferNative:t,nonce:s,children:n,...l})=>{let a=de(),i=u.useRef(),c=u.useContext(he),o=t??c.preferNative,m=l.as||"span";return g(()=>{o&&self[f]===1||i.current&&(self[j]=T)(0,r,i.current)},[n,o,r]),g(()=>{if(!(o&&self[f]===1))return()=>{if(!i.current)return;let x=i.current[M];x&&(x.disconnect(),delete i.current[M])}},[o]),u.createElement(u.Fragment,null,u.createElement(m,{...l,"data-br":a,"data-brr":r,ref:i,style:{display:"inline-block",verticalAlign:"top",textDecoration:"inherit",textWrap:o?"balance":"initial"},suppressHydrationWarning:!0},n),fe(c.hasProvider,s,`self.${j}("${a}",${r})`))},pe=A;function ge(r){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",...r,children:e.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 15h4V9h-4v6Zm0 2v3a1 1 0 0 1-2 0v-3H5a1 1 0 0 1 0-2h3V9H5a1 1 0 1 1 0-2h3V4a1 1 0 1 1 2 0v3h4V4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-4Z"})})}function je(){return e.jsx("i",{className:"icon-[mingcute--thumb-up-line]"})}const ye=()=>e.jsx("svg",{version:"1.1",x:"0px",y:"0px",width:"59.227px",height:"59.227px",viewBox:"0 0 59.227 59.227",className:"fill-current",children:e.jsx("g",{children:e.jsx("g",{children:e.jsx("path",{d:`M51.586,10.029c-0.333-0.475-0.897-0.689-1.449-0.607c-0.021-0.005-0.042-0.014-0.063-0.017L27.469,6.087
			c-0.247-0.037-0.499-0.01-0.734,0.076L8.63,12.799c-0.008,0.003-0.015,0.008-0.023,0.011c-0.019,0.008-0.037,0.02-0.057,0.027
			c-0.099,0.044-0.191,0.096-0.276,0.157c-0.026,0.019-0.051,0.038-0.077,0.059c-0.093,0.076-0.178,0.159-0.249,0.254
			c-0.004,0.006-0.01,0.009-0.014,0.015L0.289,23.78c-0.293,0.401-0.369,0.923-0.202,1.391c0.167,0.469,0.556,0.823,1.038,0.947
			l6.634,1.713v16.401c0,0.659,0.431,1.242,1.062,1.435l24.29,7.422c0.008,0.004,0.017,0.001,0.025,0.005
			c0.13,0.036,0.266,0.059,0.402,0.06c0.003,0,0.007,0.002,0.011,0.002l0,0h0.001c0.143,0,0.283-0.026,0.423-0.067
			c0.044-0.014,0.085-0.033,0.13-0.052c0.059-0.022,0.117-0.038,0.175-0.068l17.43-9.673c0.477-0.265,0.772-0.767,0.772-1.312
			V25.586l5.896-2.83c0.397-0.19,0.69-0.547,0.802-0.973c0.111-0.427,0.03-0.88-0.223-1.241L51.586,10.029z M27.41,9.111
			l17.644,2.59L33.35,17.143l-18.534-3.415L27.41,9.111z M9.801,15.854l21.237,3.914l-6.242,9.364l-20.78-5.365L9.801,15.854z
			 M10.759,43.122V28.605l14.318,3.697c0.125,0.031,0.25,0.048,0.375,0.048c0.493,0,0.965-0.244,1.248-0.668l5.349-8.023v25.968
			L10.759,43.122z M49.479,41.1l-14.431,8.007V25.414l2.635,5.599c0.171,0.361,0.479,0.641,0.854,0.773
			c0.163,0.06,0.333,0.087,0.502,0.087c0.223,0,0.444-0.05,0.649-0.146l9.789-4.698L49.479,41.1L49.479,41.1z M39.755,28.368
			l-4.207-8.938L49.85,12.78l5.634,8.037L39.755,28.368z`})})})}),z=d.forwardRef,ve=I(null),be=z((r,t)=>{const{children:s,show:n=!0,...l}=r,{className:a,...i}=l;return e.jsx(C,{mode:"wait",children:n&&e.jsx(E.button,{ref:t,"aria-label":"Floating action button",initial:{opacity:.3,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:.3,scale:.8},className:R("mt-2 flex items-center justify-center","h-12 w-12 text-lg md:h-10 md:w-10 md:text-base","border border-accent outline-accent hover:opacity-100 focus:opacity-100 focus:outline-none","rounded-xl border border-zinc-400/20 shadow-lg backdrop-blur-lg dark:border-zinc-500/30 dark:bg-zinc-800/80 dark:text-zinc-200","bg-slate-50/80 shadow-lg dark:bg-neutral-900/80","transition-all duration-500 ease-in-out",a),...i,children:s})})});z((r,t)=>{const{onClick:s,children:n}=r,l=d.useId(),a=le(ve),i=re();return r.onlyShowInMobile&&!i||!a?null:e.jsx(ee,{to:a,children:e.jsx(be,{ref:t,id:l,onClick:s,children:n})})});const we=({children:r,className:t})=>e.jsx("ul",{className:y("shiro-timeline",t),children:r});d.memo(function(t){const{count:s,name:n}=t;return e.jsx(F,{count:s,text:n,onClick:t.onClick,passProps:t})});const Ne=r=>{const{name:t}=r,{data:s,isLoading:n}=k({queryKey:[t,"tag"],queryFn:async({queryKey:a})=>{const[i]=a;return(await $.category.getTagByName(i)).data},staleTime:1e3*60*60*24}),{dismissAll:l}=_();return n?e.jsx("div",{className:"h-30 loading-dots flex w-full center"}):s?e.jsx(we,{children:s.map(a=>e.jsx("li",{className:"flex items-center justify-between","data-id":a.id,children:e.jsxs("span",{className:"flex min-w-0 flex-shrink items-center",children:[e.jsx("span",{className:"mr-2 inline-block w-12 tabular-nums",children:Intl.DateTimeFormat("en-us",{month:"2-digit",day:"2-digit"}).format(new Date(a.created))}),e.jsx(P,{onClick:()=>{l()},prefetch:!1,href:L(S.Post,{category:a.category.slug,slug:a.slug}),className:"min-w-0 truncate leading-6",children:e.jsx("span",{className:"min-w-0 truncate",children:a.title})})]})},a.id))}):e.jsx(ye,{})},B=({className:r,meta:t})=>{var l,a,i,c;const{present:s}=_(),n=H();return e.jsxs("div",{className:R("flex min-w-0 flex-shrink flex-grow flex-wrap gap-2 text-sm",r),children:[e.jsxs("div",{className:"flex min-w-0 items-center space-x-1",children:[!!t.created&&e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx("span",{children:e.jsx(p,{date:t.created})})]}),!!t.modified&&e.jsxs(te,{wrapperClassName:"text-xs",as:"span",type:"tooltip",TriggerComponent:()=>"(已编辑)",children:["编辑于 ",e.jsx(p,{date:t.modified})]})]}),!!t.category&&e.jsxs("div",{className:"flex min-w-0 items-center space-x-1",children:[e.jsx(ge,{className:"translate-y-[0.5px]"}),e.jsxs("span",{className:"min-w-0 truncate",children:[e.jsx(Y,{onClick:()=>!!t.category&&n.push(L(S.Category,{slug:t.category.slug})),className:"shiro-link--underline font-normal",children:e.jsx("span",{children:(l=t.category)==null?void 0:l.name})}),(a=t.tags)!=null&&a.length?e.jsxs(e.Fragment,{children:[" ","/"," ",t.tags.map((o,m)=>{const x=m===t.tags.length-1;return e.jsxs(d.Fragment,{children:[e.jsx("button",{className:"shiro-link--underline",onClick:()=>s({content:()=>e.jsx(Ne,{name:o}),title:`Tag: ${o}`}),children:o},o),!x&&e.jsx("span",{children:", "})]},o)})]}):""]})]}),!!((i=t.count)!=null&&i.read)&&e.jsxs("div",{className:"flex min-w-0 items-center space-x-1",children:[e.jsx("i",{className:"icon-[mingcute--eye-2-line]"}),e.jsx("span",{className:"min-w-0 truncate",children:t.count.read})]}),!!((c=t.count)!=null&&c.like)&&e.jsxs("div",{className:"flex min-w-0 items-center space-x-1",children:[e.jsx(je,{}),e.jsx("span",{className:"min-w-0 truncate",children:e.jsx(O,{children:t.count.like})})]})]})},Me=()=>{const r=h(t=>t==null?void 0:t.text);return r?e.jsx(W,{allowsScript:!0,value:r,className:"min-w-0 overflow-hidden"}):null},ke=r=>{const t=h(s=>(s==null?void 0:s.images)||v);return e.jsx(ne,{images:t||v,children:r.children})},Le=({className:r})=>{const t=h(s=>{if(s)return{created:s.created,category:s.category,tags:s.tags,count:s.count,modified:s.modified}});return t?e.jsx(B,{meta:t,className:r}):null},Se=({pin:r,id:t})=>{const[s,n]=d.useState(r);return e.jsx(ie,{onPinChange:async l=>{await $.post.proxy(t).patch({data:{pin:l}}),n(l)},pin:s})},Pe=()=>{const[r,t]=d.useState(!1),s=d.useRef(null);return d.useEffect(()=>{const n=s.current;if(!n)return;const l=n.parentElement;if(l)return l.onfocus=()=>{t(!0)},l.onblur=()=>{t(!1)},()=>{l.onfocus=null,l.onblur=null}},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:s,className:"absolute inset-0 z-10",onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)}}),e.jsx(C,{children:r&&e.jsx(E.div,{layout:!0,initial:{opacity:.2,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},layoutId:"post-item-hover-overlay",className:y("absolute z-[-1] rounded-xl","bg-slate-300/50 dark:bg-neutral-800","bottom-[1rem] left-[-1rem] right-[-1.5rem] top-[1rem]")})})]})};d.memo(function({data:t}){var i,c;const s=t.text.length>300?`${se(t.text.slice(0,300))}...`:t.text,n=((i=t.images)==null?void 0:i.length)>0&&t.images[0].src,a=`/posts/${(c=t.category)==null?void 0:c.slug}/${t.slug}`;return e.jsxs(P,{href:a,className:"relative flex flex-col py-8 focus-visible:!shadow-none",children:[e.jsx(Pe,{}),e.jsxs("h2",{className:"relative break-words text-2xl font-medium",children:[e.jsx(A,{children:t.title}),e.jsx(Se,{pin:!!t.pin,id:t.id})]}),e.jsxs("main",{className:"relative mt-8 space-y-2",children:[!!t.summary&&e.jsxs("p",{className:"break-all leading-relaxed text-gray-900 dark:text-slate-50",children:["摘要： ",t.summary]}),e.jsxs("div",{className:"relative overflow-hidden text-justify",children:[n&&e.jsx("div",{className:y("float-right mb-2 ml-3 h-[5.5rem] w-[5.5rem] overflow-hidden rounded-md","bg-cover bg-center bg-no-repeat"),style:{backgroundImage:`url(${n})`}}),e.jsx("p",{className:"break-all leading-loose text-gray-800/90 dark:text-gray-200/90",children:s})]})]}),e.jsxs("div",{className:"post-meta-bar mt-2 flex select-none flex-wrap items-center justify-end gap-4 text-base-content/60",children:[e.jsx(B,{meta:t}),e.jsxs("span",{className:"flex flex-shrink-0 select-none items-center space-x-1 text-right text-accent hover:text-accent [&>svg]:hover:ml-2",children:[e.jsx("span",{children:"阅读全文"}),e.jsx("i",{className:"icon-[mingcute--arrow-right-line] text-lg transition-[margin]"})]})]})]})});const _e=()=>{const r=h(t=>t==null?void 0:t.modified);return r&&b().diff(b(r),"day")>60?e.jsx(D,{type:"warning",className:"my-10",children:e.jsxs("span",{className:"leading-[1.8]",children:["这篇文章上次修改于 ",e.jsx(p,{date:r}),"，可能部分内容已经不适用，如有疑问可询问作者。"]})}):null},Je=r=>{const{category:t,slug:s}=r,{data:n,isLoading:l}=k({...U.post.bySlug(t,s)});d.useEffect(()=>{const i=history.state,c=window.location.href,o=new URL(c);o.pathname=`/posts/${t}/${s}`;const m=o.href;return history.replaceState(null,"",m),()=>{history.replaceState(i,"",c)}},[t,s]);const a=d.useMemo(()=>I(null),[]);return l?e.jsx(V,{className:"w-full",useDefaultLoadingText:!0}):n?e.jsxs(X,{overrideAtom:a,children:[e.jsx(Z,{data:n}),!!n.id&&e.jsx(K,{id:n.id,type:"post"}),e.jsx(Q,{children:e.jsxs("article",{className:"prose relative w-full min-w-0",children:[e.jsxs("header",{className:"mb-8",children:[e.jsx("h1",{className:"text-center",children:e.jsx(pe,{children:n.title})}),e.jsx(Le,{className:"mb-8 justify-center"}),e.jsx(G,{cid:J(n)}),e.jsx(_e,{})]}),e.jsx(ae,{children:e.jsx(ke,{children:e.jsx(Me,{})})})]})})]}):null};export{Je as PostPreview};
