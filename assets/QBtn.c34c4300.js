import{h as d,c as m,g as W,N as re,i as O,a as ue,d as se,O as H,s as oe,r as N,o as ce,T as de,K as fe,t as w,l as ve,p as me}from"./index.f544e24b.js";import{u as ge,a as be,b as X,c as Y}from"./use-spinner.678a592c.js";import{c as A,h as he,b as L,d as ye}from"./render.599ade54.js";import{u as pe,b as ke}from"./use-router-link.aecb04c7.js";var qe=A({name:"QSpinner",props:{...ge,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=be(e);return()=>d("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[d("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const z="0 0 24 24",Q=e=>e,j=e=>`ionicons ${e}`,G={"mdi-":e=>`mdi ${e}`,"icon-":Q,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":j,"ion-ios":j,"ion-logo":j,"iconfont ":Q,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},J={o_:"-outlined",r_:"-round",s_:"-sharp"},Z={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},xe=new RegExp("^("+Object.keys(G).join("|")+")"),Ee=new RegExp("^("+Object.keys(J).join("|")+")"),F=new RegExp("^("+Object.keys(Z).join("|")+")"),we=/^[Mm]\s?[-+]?\.?\d/,$e=/^img:/,Be=/^svguse:/,_e=/^ion-/,Se=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var D=A({name:"QIcon",props:{...X,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=W(),r=Y(e),o=m(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=m(()=>{let u,l=e.name;if(l==="none"||!l)return{none:!0};if(a.iconMapFn!==null){const c=a.iconMapFn(l);if(c!==void 0)if(c.icon!==void 0){if(l=c.icon,l==="none"||!l)return{none:!0}}else return{cls:c.cls,content:c.content!==void 0?c.content:" "}}if(we.test(l)===!0){const[c,p=z]=l.split("|");return{svg:!0,viewBox:p,nodes:c.split("&&").map(i=>{const[b,g,q]=i.split("@@");return d("path",{style:g,d:b,transform:q})})}}if($e.test(l)===!0)return{img:!0,src:l.substring(4)};if(Be.test(l)===!0){const[c,p=z]=l.split("|");return{svguse:!0,src:c.substring(7),viewBox:p}}let k=" ";const E=l.match(xe);if(E!==null)u=G[E[1]](l);else if(Se.test(l)===!0)u=l;else if(_e.test(l)===!0)u=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${l.substring(3)}`;else if(F.test(l)===!0){u="notranslate material-symbols";const c=l.match(F);c!==null&&(l=l.substring(6),u+=Z[c[1]]),k=l}else{u="notranslate material-icons";const c=l.match(Ee);c!==null&&(l=l.substring(2),u+=J[c[1]]),k=l}return{cls:u,content:k}});return()=>{const u={class:o.value,style:r.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?d(e.tag,u,he(t.default)):f.value.img===!0?d("span",u,L(t.default,[d("img",{src:f.value.src})])):f.value.svg===!0?d("span",u,L(t.default,[d("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?d("span",u,L(t.default,[d("svg",{viewBox:f.value.viewBox},[d("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(u.class+=" "+f.value.cls),d(e.tag,u,L(t.default,[f.value.content])))}}});function Ce(e,t){const a=e.style;for(const r in t)a[r]=t[r]}function Ve(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=re(e);if(t)return t.$el||t}function We(e,t){if(e==null||e.contains(t)===!0)return!0;for(let a=e.nextElementSibling;a!==null;a=a.nextElementSibling)if(a.contains(t))return!0;return!1}function Re(e,t=250){let a=!1,r;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),r=e.apply(this,arguments)),r}}function I(e,t,a,r){a.modifiers.stop===!0&&H(e);const o=a.modifiers.color;let f=a.modifiers.center;f=f===!0||r===!0;const u=document.createElement("span"),l=document.createElement("span"),k=oe(e),{left:E,top:c,width:p,height:i}=t.getBoundingClientRect(),b=Math.sqrt(p*p+i*i),g=b/2,q=`${(p-b)/2}px`,s=f?q:`${k.left-E-g}px`,h=`${(i-b)/2}px`,P=f?h:`${k.top-c-g}px`;l.className="q-ripple__inner",Ce(l,{height:`${b}px`,width:`${b}px`,transform:`translate3d(${s},${P},0) scale3d(.2,.2,1)`,opacity:0}),u.className=`q-ripple${o?" text-"+o:""}`,u.setAttribute("dir","ltr"),u.appendChild(l),t.appendChild(u);const T=()=>{u.remove(),clearTimeout(S)};a.abort.push(T);let S=setTimeout(()=>{l.classList.add("q-ripple__inner--enter"),l.style.transform=`translate3d(${q},${h},0) scale3d(1,1,1)`,l.style.opacity=.2,S=setTimeout(()=>{l.classList.remove("q-ripple__inner--enter"),l.classList.add("q-ripple__inner--leave"),l.style.opacity=0,S=setTimeout(()=>{u.remove(),a.abort.splice(a.abort.indexOf(T),1)},275)},250)},50)}function U(e,{modifiers:t,value:a,arg:r}){const o=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||r,keyCodes:[].concat(o.keyCodes||13)}}var Le=ye({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const r={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(o){r.enabled===!0&&o.qSkipRipple!==!0&&o.type===(r.modifiers.early===!0?"pointerdown":"click")&&I(o,e,r,o.qKeyEvent===!0)},keystart:Re(o=>{r.enabled===!0&&o.qSkipRipple!==!0&&O(o,r.modifiers.keyCodes)===!0&&o.type===`key${r.modifiers.early===!0?"down":"up"}`&&I(o,e,r,!0)},300)};U(r,t),e.__qripple=r,ue(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&U(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),se(t,"main"),delete e._qripple)}});const ee={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Te=Object.keys(ee),Me={align:{type:String,validator:e=>Te.includes(e)}};function Pe(e){return m(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ee[t]}`})}const V={none:0,xs:4,sm:8,md:16,lg:24,xl:32},je={xs:8,sm:10,md:14,lg:20,xl:24},Oe=["button","submit","reset"],Ae=/[^\s]\/[^\s]/,Ke=["flat","outline","push","unelevated"],Ne=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,ze={...X,...pe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Ke.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Me.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Qe(e){const t=Y(e,je),a=Pe(e),{hasRouterLink:r,hasLink:o,linkTag:f,linkAttrs:u,navigateOnClick:l}=ke({fallbackTag:"button"}),k=m(()=>{const s=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},s,{padding:e.padding.split(/\s+/).map(h=>h in V?V[h]+"px":h).join(" "),minWidth:"0",minHeight:"0"}):s}),E=m(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),c=m(()=>e.disable!==!0&&e.loading!==!0),p=m(()=>c.value===!0?e.tabindex||0:-1),i=m(()=>Ne(e,"standard")),b=m(()=>{const s={tabindex:p.value};return o.value===!0?Object.assign(s,u.value):Oe.includes(e.type)===!0&&(s.type=e.type),f.value==="a"?(e.disable===!0?s["aria-disabled"]="true":s.href===void 0&&(s.role="button"),r.value!==!0&&Ae.test(e.type)===!0&&(s.type=e.type)):e.disable===!0&&(s.disabled="",s["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(s,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),s}),g=m(()=>{let s;e.color!==void 0?e.flat===!0||e.outline===!0?s=`text-${e.textColor||e.color}`:s=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(s=`text-${e.textColor}`);const h=e.round===!0?"round":`rectangle${E.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${i.value} q-btn--${h}`+(s!==void 0?" "+s:"")+(c.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),q=m(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:k,innerClasses:q,attributes:b,hasLink:o,linkTag:f,navigateOnClick:l,isActionable:c}}const{passiveCapture:y}=ve;let $=null,B=null,_=null;var He=A({name:"QBtn",props:{...ze,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:r}=W(),{classes:o,style:f,innerClasses:u,attributes:l,hasLink:k,linkTag:E,navigateOnClick:c,isActionable:p}=Qe(e),i=N(null),b=N(null);let g=null,q,s=null;const h=m(()=>e.label!==void 0&&e.label!==null&&e.label!==""),P=m(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:k.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),T=m(()=>({center:e.round})),S=m(()=>{const n=Math.max(0,Math.min(100,e.percentage));return n>0?{transition:"transform 0.6s",transform:`translateX(${n-100}%)`}:{}}),te=m(()=>{if(e.loading===!0)return{onMousedown:R,onTouchstart:R,onClick:R,onKeydown:R,onKeyup:R};if(p.value===!0){const n={onClick:K,onKeydown:ae,onMousedown:le};if(r.$q.platform.has.touch===!0){const v=e.onTouchstart!==void 0?"":"Passive";n[`onTouchstart${v}`]=ie}return n}return{onClick:w}}),ne=m(()=>({ref:i,class:"q-btn q-btn-item non-selectable no-outline "+o.value,style:f.value,...l.value,...te.value}));function K(n){if(i.value!==null){if(n!==void 0){if(n.defaultPrevented===!0)return;const v=document.activeElement;if(e.type==="submit"&&v!==document.body&&i.value.contains(v)===!1&&v.contains(i.value)===!1){i.value.focus();const M=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",M,y),i.value!==null&&i.value.removeEventListener("blur",M,y)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",M,y),i.value.addEventListener("blur",M,y)}}c(n)}}function ae(n){i.value!==null&&(a("keydown",n),O(n,[13,32])===!0&&B!==i.value&&(B!==null&&C(),n.defaultPrevented!==!0&&(i.value.focus(),B=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("keyup",x,!0),i.value.addEventListener("blur",x,y)),w(n)))}function ie(n){i.value!==null&&(a("touchstart",n),n.defaultPrevented!==!0&&($!==i.value&&($!==null&&C(),$=i.value,g=n.target,g.addEventListener("touchcancel",x,y),g.addEventListener("touchend",x,y)),q=!0,s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,q=!1},200)))}function le(n){i.value!==null&&(n.qSkipRipple=q===!0,a("mousedown",n),n.defaultPrevented!==!0&&_!==i.value&&(_!==null&&C(),_=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("mouseup",x,y)))}function x(n){if(i.value!==null&&!(n!==void 0&&n.type==="blur"&&document.activeElement===i.value)){if(n!==void 0&&n.type==="keyup"){if(B===i.value&&O(n,[13,32])===!0){const v=new MouseEvent("click",n);v.qKeyEvent=!0,n.defaultPrevented===!0&&me(v),n.cancelBubble===!0&&H(v),i.value.dispatchEvent(v),w(n),n.qKeyEvent=!0}a("keyup",n)}C()}}function C(n){const v=b.value;n!==!0&&($===i.value||_===i.value)&&v!==null&&v!==document.activeElement&&(v.setAttribute("tabindex",-1),v.focus()),$===i.value&&(g!==null&&(g.removeEventListener("touchcancel",x,y),g.removeEventListener("touchend",x,y)),$=g=null),_===i.value&&(document.removeEventListener("mouseup",x,y),_=null),B===i.value&&(document.removeEventListener("keyup",x,!0),i.value!==null&&i.value.removeEventListener("blur",x,y),B=null),i.value!==null&&i.value.classList.remove("q-btn--active")}function R(n){w(n),n.qSkipRipple=!0}return ce(()=>{C(!0)}),Object.assign(r,{click:K}),()=>{let n=[];e.icon!==void 0&&n.push(d(D,{name:e.icon,left:e.stack!==!0&&h.value===!0,role:"img","aria-hidden":"true"})),h.value===!0&&n.push(d("span",{class:"block"},[e.label])),n=L(t.default,n),e.iconRight!==void 0&&e.round===!1&&n.push(d(D,{name:e.iconRight,right:e.stack!==!0&&h.value===!0,role:"img","aria-hidden":"true"}));const v=[d("span",{class:"q-focus-helper",ref:b})];return e.loading===!0&&e.percentage!==void 0&&v.push(d("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[d("span",{class:"q-btn__progress-indicator fit block",style:S.value})])),v.push(d("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+u.value},n)),e.loading!==null&&v.push(d(de,{name:"q-transition--fade"},()=>e.loading===!0?[d("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[d(qe)])]:null)),fe(d(E.value,ne.value,v),[[Le,P.value,void 0,T.value]])}}});export{qe as Q,Le as R,We as a,He as b,Ce as c,D as d,Ve as g};
