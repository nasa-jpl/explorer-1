(function(h,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("@fancyapps/ui")):typeof define=="function"&&define.amd?define(["exports","vue","@fancyapps/ui"],t):(h=typeof globalThis<"u"?globalThis:h||self,t(h.Explorer1Vue={},h.Vue,h.ui))})(this,function(h,t,me){"use strict";var ue=!1;function M(e,o,n){return Array.isArray(e)?(e.length=Math.max(e.length,o),e.splice(o,1,n),n):(e[o]=n,n)}function F(e,o){if(Array.isArray(e)){e.splice(o,1);return}delete e[o]}/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let V;const q=e=>V=e,ge=process.env.NODE_ENV!=="production"?Symbol("pinia"):Symbol();function E(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var I;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(I||(I={}));const j=typeof window<"u",v=(process.env.NODE_ENV!=="production"||!1)&&process.env.NODE_ENV!=="test"&&j;function U(e,o){for(const n in o){const a=o[n];if(!(n in e))continue;const i=e[n];E(i)&&E(a)&&!t.isRef(a)&&!t.isReactive(a)?e[n]=U(i,a):e[n]=a}return e}const W=()=>{};function G(e,o,n,a=W){e.push(o);const i=()=>{const c=e.indexOf(o);c>-1&&(e.splice(c,1),a())};return!n&&t.getCurrentScope()&&t.onScopeDispose(i),i}function S(e,...o){e.slice().forEach(n=>{n(...o)})}const ye=e=>e();function P(e,o){e instanceof Map&&o instanceof Map&&o.forEach((n,a)=>e.set(a,n)),e instanceof Set&&o instanceof Set&&o.forEach(e.add,e);for(const n in o){if(!o.hasOwnProperty(n))continue;const a=o[n],i=e[n];E(i)&&E(a)&&e.hasOwnProperty(n)&&!t.isRef(a)&&!t.isReactive(a)?e[n]=P(i,a):e[n]=a}return e}const be=process.env.NODE_ENV!=="production"?Symbol("pinia:skipHydration"):Symbol();function Ce(e){return!E(e)||!e.hasOwnProperty(be)}const{assign:k}=Object;function X(e){return!!(t.isRef(e)&&e.effect)}function Y(e,o,n,a){const{state:i,actions:c,getters:d}=o,p=n.state.value[e];let u;function g(){!p&&(process.env.NODE_ENV==="production"||!a)&&(n.state.value[e]=i?i():{});const $=process.env.NODE_ENV!=="production"&&a?t.toRefs(t.ref(i?i():{}).value):t.toRefs(n.state.value[e]);return k($,c,Object.keys(d||{}).reduce((y,b)=>(process.env.NODE_ENV!=="production"&&b in $&&console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${b}" in store "${e}".`),y[b]=t.markRaw(t.computed(()=>{q(n);const w=n._s.get(e);return d[b].call(w,w)})),y),{}))}return u=x(e,g,o,n,a,!0),u}function x(e,o,n={},a,i,c){let d;const p=k({actions:{}},n);if(process.env.NODE_ENV!=="production"&&!a._e.active)throw new Error("Pinia destroyed");const u={deep:!0};process.env.NODE_ENV!=="production"&&!ue&&(u.onTrigger=r=>{g?w=r:g==!1&&!l._hotUpdating&&(Array.isArray(w)?w.push(r):console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."))});let g,$,y=[],b=[],w;const N=a.state.value[e];!c&&!N&&(process.env.NODE_ENV==="production"||!i)&&(a.state.value[e]={});const A=t.ref({});let de;function pe(r){let s;g=$=!1,process.env.NODE_ENV!=="production"&&(w=[]),typeof r=="function"?(r(a.state.value[e]),s={type:I.patchFunction,storeId:e,events:w}):(P(a.state.value[e],r),s={type:I.patchObject,payload:r,storeId:e,events:w});const f=de=Symbol();t.nextTick().then(()=>{de===f&&(g=!0)}),$=!0,S(y,s,a.state.value[e])}const Rt=c?function(){const{state:s}=n,f=s?s():{};this.$patch(C=>{k(C,f)})}:process.env.NODE_ENV!=="production"?()=>{throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`)}:W;function Tt(){d.stop(),y=[],b=[],a._s.delete(e)}function he(r,s){return function(){q(a);const f=Array.from(arguments),C=[],O=[];function Ht(B){C.push(B)}function At(B){O.push(B)}S(b,{args:f,name:r,store:l,after:Ht,onError:At});let L;try{L=s.apply(this&&this.$id===e?this:l,f)}catch(B){throw S(O,B),B}return L instanceof Promise?L.then(B=>(S(C,B),B)).catch(B=>(S(O,B),Promise.reject(B))):(S(C,L),L)}}const z=t.markRaw({actions:{},getters:{},state:[],hotState:A}),fe={_p:a,$id:e,$onAction:G.bind(null,b),$patch:pe,$reset:Rt,$subscribe(r,s={}){const f=G(y,r,s.detached,()=>C()),C=d.run(()=>t.watch(()=>a.state.value[e],O=>{(s.flush==="sync"?$:g)&&r({storeId:e,type:I.direct,events:w},O)},k({},u,s)));return f},$dispose:Tt},l=t.reactive(process.env.NODE_ENV!=="production"||v?k({_hmrPayload:z,_customProperties:t.markRaw(new Set)},fe):fe);a._s.set(e,l);const _=(a._a&&a._a.runWithContext||ye)(()=>a._e.run(()=>(d=t.effectScope()).run(o)));for(const r in _){const s=_[r];if(t.isRef(s)&&!X(s)||t.isReactive(s))process.env.NODE_ENV!=="production"&&i?M(A.value,r,t.toRef(_,r)):c||(N&&Ce(s)&&(t.isRef(s)?s.value=N[r]:P(s,N[r])),a.state.value[e][r]=s),process.env.NODE_ENV!=="production"&&z.state.push(r);else if(typeof s=="function"){const f=process.env.NODE_ENV!=="production"&&i?s:he(r,s);_[r]=f,process.env.NODE_ENV!=="production"&&(z.actions[r]=s),p.actions[r]=s}else process.env.NODE_ENV!=="production"&&X(s)&&(z.getters[r]=c?n.getters[r]:s,j&&(_._getters||(_._getters=t.markRaw([]))).push(r))}if(k(l,_),k(t.toRaw(l),_),Object.defineProperty(l,"$state",{get:()=>process.env.NODE_ENV!=="production"&&i?A.value:a.state.value[e],set:r=>{if(process.env.NODE_ENV!=="production"&&i)throw new Error("cannot set hotState");pe(s=>{k(s,r)})}}),process.env.NODE_ENV!=="production"&&(l._hotUpdate=t.markRaw(r=>{l._hotUpdating=!0,r._hmrPayload.state.forEach(s=>{if(s in l.$state){const f=r.$state[s],C=l.$state[s];typeof f=="object"&&E(f)&&E(C)?U(f,C):r.$state[s]=C}M(l,s,t.toRef(r.$state,s))}),Object.keys(l.$state).forEach(s=>{s in r.$state||F(l,s)}),g=!1,$=!1,a.state.value[e]=t.toRef(r._hmrPayload,"hotState"),$=!0,t.nextTick().then(()=>{g=!0});for(const s in r._hmrPayload.actions){const f=r[s];M(l,s,he(s,f))}for(const s in r._hmrPayload.getters){const f=r._hmrPayload.getters[s],C=c?t.computed(()=>(q(a),f.call(l,l))):f;M(l,s,C)}Object.keys(l._hmrPayload.getters).forEach(s=>{s in r._hmrPayload.getters||F(l,s)}),Object.keys(l._hmrPayload.actions).forEach(s=>{s in r._hmrPayload.actions||F(l,s)}),l._hmrPayload=r._hmrPayload,l._getters=r._getters,l._hotUpdating=!1})),v){const r={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach(s=>{Object.defineProperty(l,s,k({value:l[s]},r))})}return a._p.forEach(r=>{if(v){const s=d.run(()=>r({store:l,app:a._a,pinia:a,options:p}));Object.keys(s||{}).forEach(f=>l._customProperties.add(f)),k(l,s)}else k(l,d.run(()=>r({store:l,app:a._a,pinia:a,options:p})))}),process.env.NODE_ENV!=="production"&&l.$state&&typeof l.$state=="object"&&typeof l.$state.constructor=="function"&&!l.$state.constructor.toString().includes("[native code]")&&console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${l.$id}".`),N&&c&&n.hydrate&&n.hydrate(l.$state,N),g=!0,$=!0,l}function ke(e,o,n){let a,i;const c=typeof o=="function";a=e,i=c?n:o;function d(p,u){const g=t.hasInjectionContext();if(p=(process.env.NODE_ENV==="test"&&V&&V._testing?null:p)||(g?t.inject(ge,null):null),p&&q(p),process.env.NODE_ENV!=="production"&&!V)throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);p=V,p._s.has(a)||(c?x(a,o,i,p):Y(a,i,p),process.env.NODE_ENV!=="production"&&(d._pinia=p));const $=p._s.get(a);if(process.env.NODE_ENV!=="production"&&u){const y="__hot:"+a,b=c?x(y,o,i,p,!0):Y(y,k({},i),p,!0);u._hotUpdate(b),delete p.state.value[y],p._s.delete(y)}if(process.env.NODE_ENV!=="production"&&j){const y=t.getCurrentInstance();if(y&&y.proxy&&!u){const b=y.proxy,w="_pStores"in b?b._pStores:b._pStores={};w[a]=$}}return $}return d.$id=a,d}const $e=ke("header",{state:()=>({headerTransparent:!1,highlightPrimary:!0,globalChildren:null,secondaryNav:null}),actions:{makeTransparent(e){this.headerTransparent=e},highlightPrimary(e){this.highlightPrimary=e},updateGlobalChildren(e){this.globalChildren=e},updateSecondary(e){this.secondaryNav=e}}}),we=()=>{const e=$e();e&&e.makeTransparent(!0)},Z=e=>{let o="";if(Object.keys(e).some(function(a){return!!a.startsWith("screen")})){const a=[];for(const[i,c]of Object.entries(e))i.startsWith("screen")&&typeof c=="object"&&c.url&&c.width&&a.push(`${c.url} ${c.width}w`);o=a.join(", ")}return o},J={primary:"-primary",secondary:"-secondary",dark:"-dark",social:"-social"},Be=t.defineComponent({name:"BaseButton",props:{variant:{type:String,required:!1,default:"primary",validator:e=>Object.keys(J).includes(e)},compact:{type:Boolean,default:!1,required:!1},blockClasses:{type:String,required:!1,default:"inline-block"},disabled:{type:Boolean,default:!1,required:!1},ariaLabel:{type:String,default:"",required:!1},to:{type:[String,Object],required:!1,default:null},href:{type:String,required:!1,default:null}},emits:["click"],computed:{tag(){return this.disabled?"button":this.to?"nuxt-link":this.href?"a":"button"},theHref(){return this.tag==="nuxt-link"?this.to:this.tag==="a"?this.href:!1},variantClass(){let e=J[this.variant];return!this.$slots.default&&this.$slots.icon?e=e+" -icon-only":this.compact&&(e=e+" -compact"),this.blockClasses&&(e=e+" "+this.blockClasses),e}}}),m=(e,o)=>{const n=e.__vccOpts||e;for(const[a,i]of o)n[a]=i;return n},_e={class:"label block"};function Ee(e,o,n,a,i,c){return t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.tag),{class:t.normalizeClass(["BaseButton text-contrast-none",e.variantClass]),"aria-label":e.ariaLabel,disabled:e.disabled,href:e.theHref,to:e.to?e.to:!1,onClick:o[0]||(o[0]=d=>e.$emit("click"))},{default:t.withCtx(()=>[t.createElementVNode("span",_e,[t.renderSlot(e.$slots,"default"),t.renderSlot(e.$slots,"icon")])]),_:3},8,["class","aria-label","disabled","href","to"])}const Q=m(Be,[["render",Ee]]),K={none:"object-none",contain:"object-contain",cover:"object-cover",fill:"object-fill",scaleDown:"object-scale-down"},Se=t.defineComponent({name:"BaseImage",props:{imageClass:{type:String,required:!1},objectFitClass:{type:String,required:!1,default:"contain",validator:e=>Object.keys(K).includes(e)},src:{type:String,required:!0},srcset:{type:String,required:!1,default:""},alt:{type:String},width:{type:[Number,String]},height:{type:[Number,String]},loading:{type:String,required:!1,default:"lazy"}},data(){return{lazyNative:!0}},computed:{computedClass(){let e="";return this.imageClass&&(e=e+" "+this.imageClass),this.objectFitClass&&(e=e+" "+K[this.objectFitClass]),this.lazyNative||(e=e+" lazyload"),e}},mounted(){this.featureDetectImageLazyLoad()},methods:{featureDetectImageLazyLoad(){if("loading"in HTMLImageElement.prototype){const e=this.$refs.BaseImage?this.$refs.BaseImage:null;this.lazyNative=!0,e&&e.dataset.src&&(e.src=e.dataset.src),e&&e.dataset.srcset&&(e.srcset=e.dataset.srcset)}else this.lazyNative=!1},imageFailed(){console.log("Image failed to load.")}}}),Ne=["data-src","data-srcset","alt","width","height","loading"];function Ve(e,o,n,a,i,c){return t.openBlock(),t.createElementBlock("div",null,[e.src?(t.openBlock(),t.createElementBlock("img",{key:0,ref:"BaseImage",class:t.normalizeClass(["BaseImage",e.computedClass]),"data-src":e.src,"data-srcset":e.srcset,alt:e.alt,width:e.width,height:e.height,loading:e.loading,onError:o[0]||(o[0]=(...d)=>e.imageFailed&&e.imageFailed(...d))},null,42,Ne)):t.createCommentVNode("",!0)])}const R=m(Se,[["render",Ve]]),Ie=t.defineComponent({name:"IconCaret"}),De={class:"IconCaret",width:"8",height:"14",viewBox:"0 0 8 14",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},Oe=[t.createElementVNode("path",{d:"M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z",fill:"currentColor"},null,-1)];function Le(e,o,n,a,i,c){return t.openBlock(),t.createElementBlock("svg",De,Oe)}const ee=m(Ie,[["render",Le]]),Me=t.defineComponent({name:"MixinAnimationCaret",components:{IconCaret:ee},props:{passedWrapperClass:{type:String||null,required:!1,default:""},arrowClass:{type:String,required:!1,default:""},color:{type:String,required:!1,default:"text-theme-red"},marginLeft:{type:String,default:"ml-1",required:!1},inline:{type:Boolean,default:!1,required:!1}},computed:{computedClass(){let e="";return this.passedWrapperClass&&(e=e+" "+this.passedWrapperClass),this.inline&&(e=e+" caret-inline"),e}}}),qe={class:"arrow"},ze={class:"arrow-fixed"};function Fe(e,o,n,a,i,c){const d=t.resolveComponent("IconCaret");return t.openBlock(),t.createElementBlock("span",{class:t.normalizeClass(["MixinAnimationCaret",e.computedClass])},[t.createElementVNode("span",null,[t.renderSlot(e.$slots,"default")]),t.createElementVNode("span",{class:t.normalizeClass(["arrow-wrapper",[e.arrowClass,e.color,e.marginLeft]]),"aria-hidden":"true"},[t.createElementVNode("span",qe,[t.createVNode(d)]),t.createElementVNode("span",ze,[t.createVNode(d)])],2)],2)}const te=m(Me,[["render",Fe]]),ae={primary:"text-subtitle text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",secondary:"text-subtitle text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",default:"-default underline text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",none:""},je=t.defineComponent({name:"BaseLink",components:{MixinAnimationCaret:te},props:{variant:{type:String,required:!1,default:"default",validator:e=>Object.keys(ae).includes(e)},to:{type:[String,Object],default:void 0},exact:{type:Boolean,default:!1},href:{type:String,default:void 0},title:{type:String,default:void 0},ariaLabel:{type:String,default:""},linkClass:{type:String,default:""},target:{type:String,required:!1,default:void 0},externalTargetBlank:{type:Boolean,required:!1,default:!1},caret:{type:Boolean,required:!1,default:!1},caretWrapperClass:{type:String,default:""},caretClass:{type:String,default:""},caretInline:{type:Boolean,required:!1,default:!1},caretColor:{type:String,required:!1,default:""},caretMarginLeft:{type:String,required:!1,default:""}},emits:["linkClicked","specificLinkClicked"],computed:{computedClass(){let e=ae[this.variant];return(this.to||this.href)&&(e=e+" cursor-pointer"),this.linkClass&&(e=e+" "+this.linkClass),e},theTarget(){if(this.target)return this.target;if(this.href&&this.externalTargetBlank)return"_blank"},theRel(){if(this.theTarget==="_blank")return"noopener"}},methods:{clickEvent(){var e;(e=this.$root)==null||e.$emit("linkClicked"),this.$emit("specificLinkClicked")}}}),ve=["href","target","rel","aria-label","title"];function Pe(e,o,n,a,i,c){const d=t.resolveComponent("MixinAnimationCaret"),p=t.resolveComponent("nuxt-link");return t.openBlock(),t.createElementBlock("div",null,[e.to?(t.openBlock(),t.createBlock(p,{key:0,class:t.normalizeClass(["group",e.computedClass]),to:e.to,target:e.theTarget,rel:e.theRel,"aria-label":e.ariaLabel,title:e.title,exact:e.exact,onClick:o[0]||(o[0]=u=>e.clickEvent())},{default:t.withCtx(()=>[e.caretInline&&e.caret?(t.openBlock(),t.createBlock(d,{key:0,inline:"",class:t.normalizeClass(e.caretWrapperClass),"arrow-class":e.caretClass,color:e.caretColor,"margin-left":e.caretMarginLeft},{default:t.withCtx(()=>[t.renderSlot(e.$slots,"default")]),_:3},8,["class","arrow-class","color","margin-left"])):e.variant==="primary"||e.caret?(t.openBlock(),t.createBlock(d,{key:1,class:t.normalizeClass(e.caretWrapperClass),"arrow-class":e.caretClass,color:e.caretColor,"margin-left":e.caretMarginLeft},{default:t.withCtx(()=>[t.renderSlot(e.$slots,"default")]),_:3},8,["class","arrow-class","color","margin-left"])):t.renderSlot(e.$slots,"default",{key:2})]),_:3},8,["class","to","target","rel","aria-label","title","exact"])):e.href?(t.openBlock(),t.createElementBlock("a",{key:1,href:e.href,class:t.normalizeClass(["group",e.computedClass]),target:e.theTarget,rel:e.theRel,"aria-label":e.ariaLabel,title:e.title,onClick:o[1]||(o[1]=u=>e.clickEvent())},[e.caretInline&&e.caret?(t.openBlock(),t.createBlock(d,{key:0,inline:"",class:t.normalizeClass(e.caretWrapperClass),"arrow-class":e.caretClass,color:e.caretColor,"margin-left":e.caretMarginLeft},{default:t.withCtx(()=>[t.renderSlot(e.$slots,"default")]),_:3},8,["class","arrow-class","color","margin-left"])):e.variant==="primary"||e.caret?(t.openBlock(),t.createBlock(d,{key:1,class:t.normalizeClass(e.caretWrapperClass),"arrow-class":e.caretClass,color:e.caretColor,"margin-left":e.caretMarginLeft},{default:t.withCtx(()=>[t.renderSlot(e.$slots,"default")]),_:3},8,["class","arrow-class","color","margin-left"])):t.renderSlot(e.$slots,"default",{key:2})],10,ve)):t.createCommentVNode("",!0)])}const oe=m(je,[["render",Pe]]),D={pageXOffset:0,pageYOffset:0,element(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement},activate(e){D.pageXOffset=window.pageXOffset,D.pageYOffset=window.pageYOffset,e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},deactivate(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},xe=t.defineComponent({name:"IconExpand"}),Re={class:"IconExpand",width:"60",height:"60",viewBox:"0 0 60 60",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},Te=[t.createElementVNode("path",{d:"M48 37v11H37v-2h9v-9h2zm-34 0v9h9v2H12V37h2zm9-25v2h-9v9h-2V12h11zm25 0v11h-2v-9h-9v-2h11z",fill:"currentColor","fill-rule":"evenodd"},null,-1)];function He(e,o,n,a,i,c){return t.openBlock(),t.createElementBlock("svg",Re,Te)}const Ae=m(xe,[["render",He]]),Ue=t.defineComponent({name:"MixinFancyboxOpenButton",components:{IconExpand:Ae}}),We={ref:"FancyboxOpenButton",class:"MixinFancyboxOpenButton",role:"presentation"},Ge={class:"BaseButton -primary -icon-only pointer-events-none"},Xe={class:"icon"};function Ye(e,o,n,a,i,c){const d=t.resolveComponent("IconExpand");return t.openBlock(),t.createElementBlock("div",We,[t.createElementVNode("div",Ge,[t.createElementVNode("span",Xe,[t.createVNode(d)])])],512)}const Ze=m(Ue,[["render",Ye]]),T={normal:"fancybox-theme-normal ThemeLight",light:"fancybox-theme-light ThemeLight",dark:"fancybox-theme-dark ThemeDark"},Je=t.defineComponent({name:"MixinFancybox",components:{MixinFancyboxOpenButton:Ze},filters:{truncate(e){return e&&e.length>280&&(e=e.substring(0,277)+"..."),e}},props:{infinite:{type:Boolean,required:!1,default:!0},showThumbnails:{type:Boolean,required:!1,default:!1},animated:{type:Boolean,required:!1,default:!1},galleryName:{type:String,required:!1,default:null},src:{type:String,required:!1},srcSet:{type:String,required:!1},sizes:{type:String,required:!1},downloadSrc:{type:String,required:!1},caption:{type:String,required:!1},credit:{type:String,required:!1},title:{type:String,required:!1},detailUrl:{type:String,required:!1},width:{type:String,required:!1},height:{type:String,required:!1},theme:{type:String,required:!1,default:"dark",validator:e=>Object.keys(T).includes(e)}},computed:{computedClass(){return T[this.theme]},computedCaption(){let e=this.caption&&this.caption.length?this.$options.filters.truncate(this.caption,180):"";return this.credit&&(e=`${e} Credit: ${this.credit}`),e}},mounted(){return me.Fancybox.bind("[data-fancybox]",{infinite:this.infinite,mainClass:this.computedClass?this.computedClass:T.dark,showClass:"fancybox-fadeIn",hideClass:"fancybox-fadeOut",autoFocus:!0,maxScale:6,slideshow:{delay:1e4},animated:this.animated,Image:{zoom:this.animated},Thumbs:{autoStart:this.showThumbnails},Toolbar:{items:{counter:{type:"div",class:"fancybox__counter",html:'<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',tabindex:-1,position:"left"},prev:{type:"button",class:"fancybox__button--prev",label:"PREV",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 4l-8 8 8 8"/></svg>',click(e){e.preventDefault(),this.fancybox.prev()}},next:{type:"button",class:"fancybox__button--next",label:"NEXT",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M8 4l8 8-8 8"/></svg>',click(e){e.preventDefault(),this.fancybox.next()}},fullscreen:{type:"button",class:"fancybox__button--fullscreen",label:"TOGGLE_FULLSCREEN",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g><g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g></svg>',click(e){e.preventDefault(),D.element()?D.deactivate():D.activate(this.fancybox.$container)}},slideshow:{type:"button",class:"fancybox__button--slideshow",label:"TOGGLE_SLIDESHOW",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g><g><path d="M7 4v15M17 4v15"/></g></svg>',click(e){e.preventDefault(),this.Slideshow.toggle()}},zoom:{type:"button",class:"fancybox__button--zoom",label:"TOGGLE_ZOOM",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',click(e){e.preventDefault();const o=this.fancybox.getSlide().Panzoom;o&&o.toggleZoom()}},download:{type:"link",label:"DOWNLOAD",class:"fancybox__button--download",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',click(e){e.stopPropagation()}},thumbs:{type:"button",label:"TOGGLE_THUMBS",class:"fancybox__button--thumbs",html:'<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 576 512" width="24" height="21" stroke-width="3px"><path stroke-width="3px" fill="white" d="M512 0C547.3 0 576 28.65 576 64V288C576 323.3 547.3 352 512 352H64C28.65 352 0 323.3 0 288V64C0 28.65 28.65 0 64 0H512zM512 64H64V288H512V64zM0 448C0 430.3 14.33 416 32 416H64C81.67 416 96 430.3 96 448V480C96 497.7 81.67 512 64 512H32C14.33 512 0 497.7 0 480V448zM224 416C241.7 416 256 430.3 256 448V480C256 497.7 241.7 512 224 512H192C174.3 512 160 497.7 160 480V448C160 430.3 174.3 416 192 416H224zM320 448C320 430.3 334.3 416 352 416H384C401.7 416 416 430.3 416 448V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V448zM544 416C561.7 416 576 430.3 576 448V480C576 497.7 561.7 512 544 512H512C494.3 512 480 497.7 480 480V448C480 430.3 494.3 416 512 416H544z"/></svg>',click(e){e.stopPropagation();const o=this.fancybox.plugins.Thumbs;o&&o.toggle()}},close:{type:"button",label:"CLOSE",class:"fancybox__button--close",html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"></path></svg>',tabindex:1,click(e){e.stopPropagation(),e.preventDefault(),this.fancybox.close()}}},display:[{id:"counter",position:"left"},"zoom","slideshow","fullscreen","thumbs","captions","close"]},caption(e,o,n){let a=n.caption;return n.type==="image"&&(a=`<div class="mx-auto container">
              ${n.title?`<h6 class="font-semibold text-4xl mb-1">${n.title}</h6>`:""}
              ${a.length?`<div class="caption inline sm:flex text-body-md pb-2 mr-2 sm:mr-0"><div class="inline">${a}</div></div>`:""}
              ${n.url?`<a href="${n.url}" class="inline-block text-body-md whitespace-nowrap relative text-theme-red can-hover:hover:text-theme-red-hover cursor-pointer focus:outline-none" title="Full Image Details">Full Image Details</a>`:""}
            </div>`),a}})},methods:{clickHandler(){this.$emit("click")}}}),Qe=["href","data-fancybox","data-src","data-width","data-height","data-srcset","data-sizes","data-theme","data-caption","data-title","data-animated","data-download-src","data-url","data-max-width"];function Ke(e,o,n,a,i,c){const d=t.resolveComponent("MixinFancyboxOpenButton");return t.openBlock(),t.createElementBlock("a",{class:"MixinFancybox group cursor-pointer block","aria-label":"Open in Lightbox",href:e.src,"data-fancybox":e.galleryName||"","data-src":e.src,"data-width":e.src?e.src.width:null,"data-height":e.src?e.src.height:null,"data-srcset":e.srcSet,"data-sizes":e.sizes,"data-theme":e.computedClass,"data-caption":e.computedCaption,"data-title":e.title,"data-animated":e.animated,"data-download-src":e.downloadSrc,"data-url":e.detailUrl,"data-max-width":e.src?e.src.width:null,onClick:o[0]||(o[0]=p=>e.$emit("click"))},[t.createVNode(d),t.renderSlot(e.$slots,"default")],8,Qe)}const H=m(Je,[["render",Ke]]),ne={none:"aspect-ratio-none",portrait:"aspect-ratio-four-five",square:"aspect-ratio-square","1:1":"aspect-ratio-one-one","2:1":"aspect-ratio-two-one","2:3":"aspect-ratio-two-three","3:2":"aspect-ratio-three-two","4:3":"aspect-ratio-four-three","4:5":"aspect-ratio-four-five","7:8":"aspect-ratio-seven-eight","8:7":"aspect-ratio-eight-seven","9:16":"aspect-ratio-nine-sixteen","12:9":"aspect-ratio-twelve-nine","16:7":"aspect-ratio-sixteen-seven","16:9":"aspect-ratio-sixteen-nine","21:9":"aspect-ratio-twentyone-nine"},et=t.defineComponent({name:"BaseImagePlaceholder",props:{darkMode:{type:Boolean,required:!1,default:!0},transparentMode:{type:Boolean,required:!1,default:!1},noLogo:{type:Boolean,default:!1},aspectRatio:{type:String,default:"none",validator:e=>Object.keys(ne).includes(e)},responsiveAspectRatio:{type:String,required:!1}},computed:{computedClass(){let e="";return this.aspectRatio&&(e=e+ne[this.aspectRatio]),this.responsiveAspectRatio&&(e=`${e} ${this.responsiveAspectRatio}`),this.transparentMode?e=e+" transparent-theme":this.darkMode?e=e+" dark-theme":e=e+" light-theme",this.noLogo&&(e=e+" no-logo"),e}}});function tt(e,o,n,a,i,c){return t.openBlock(),t.createElementBlock("div",null,[t.createElementVNode("div",{class:t.normalizeClass("BaseImagePlaceholder "+e.computedClass)},[t.renderSlot(e.$slots,"default",{},void 0,!0),t.renderSlot(e.$slots,"lightbox",{},void 0,!0)],2)])}const se=m(et,[["render",tt],["__scopeId","data-v-29efd36e"]]),at=t.defineComponent({name:"BaseImageCaption",components:{BaseLink:oe},props:{data:{type:Object,required:!0,default:void 0}}}),ot={key:0,class:"BaseImageCaption text-body-sm"},nt={class:"inline mr-2"},st=["innerHTML"],rt={key:0,class:"inline"};function it(e,o,n,a,i,c){const d=t.resolveComponent("BaseLink");return e.data?(t.openBlock(),t.createElementBlock("div",ot,[t.createElementVNode("div",nt,[t.createElementVNode("div",{class:"the-caption-text inline",innerHTML:e.data.caption},null,8,st),e.data.credit?(t.openBlock(),t.createElementBlock("span",rt," Credit: "+t.toDisplayString(e.data.credit),1)):t.createCommentVNode("",!0)]),e.data.detailUrl?(t.openBlock(),t.createBlock(d,{key:0,class:"inline-block",variant:"default",to:e.data.detailUrl},{default:t.withCtx(()=>[t.createTextVNode(" Full Image Details ")]),_:1},8,["to"])):t.createCommentVNode("",!0)])):t.createCommentVNode("",!0)}const re=m(at,[["render",it]]),lt=t.defineComponent({name:"BlockImageStandard",components:{MixinFancybox:H,BaseImage:R,BaseImagePlaceholder:se,BaseImageCaption:re},props:{data:{type:Object,required:!1},displayCaption:{type:Boolean,default:!0},caption:{type:String,required:!1},constrain:{type:Boolean,default:!0}},computed:{theCaption(){if(this.caption&&this.caption.length>2&&this.displayCaption)return this.caption;if(this.displayCaption&&this.data&&this.data.caption&&this.data.caption.length>2)return this.data.caption},theData(){if(this.data)return{...this.data,caption:this.theCaption}},hasCaptionArea(){return!!(this.data&&(this.theCaption||this.data.credit||this.data.detailUrl))}}}),ct={key:0},dt={key:1,class:"lg:px-0 p-4 pb-0"};function pt(e,o,n,a,i,c){const d=t.resolveComponent("BaseImage"),p=t.resolveComponent("BaseImagePlaceholder"),u=t.resolveComponent("MixinFancybox"),g=t.resolveComponent("BaseImageCaption");return e.theData?(t.openBlock(),t.createElementBlock("div",ct,[e.theData.src?(t.openBlock(),t.createBlock(u,{key:0,src:e.theData.original,caption:e.theData.caption,credit:e.theData.credit,"detail-url":e.theData.detailUrl},{default:t.withCtx(()=>[t.createVNode(p,{"aspect-ratio":e.constrain?"16:9":"none","dark-mode":""},{default:t.withCtx(()=>[e.theData.src?(t.openBlock(),t.createBlock(d,{key:0,src:e.theData.src.url,srcset:e.theData.srcSet,width:e.theData.src.width,height:e.theData.src.height,alt:e.theData.alt,"image-class":e.constrain?void 0:"w-full h-auto","object-fit-class":e.constrain?"contain":void 0,loading:"lazy"},null,8,["src","srcset","width","height","alt","image-class","object-fit-class"])):t.createCommentVNode("",!0)]),_:1},8,["aspect-ratio"])]),_:1},8,["src","caption","credit","detail-url"])):t.createCommentVNode("",!0),e.theData&&e.hasCaptionArea?(t.openBlock(),t.createElementBlock("div",dt,[t.createVNode(g,{data:e.theData},null,8,["data"])])):t.createCommentVNode("",!0)])):t.createCommentVNode("",!0)}const ie=m(lt,[["render",pt]]),ht=t.defineComponent({name:"BlockImageFullBleed",components:{MixinFancybox:H,BaseImage:R,BaseImagePlaceholder:se,BaseImageCaption:re},props:{data:{type:Object,required:!1},displayCaption:{type:Boolean,default:!0},caption:{type:String,required:!1},constrain:{type:Boolean,default:!0}},data(){return{openTab:1}},computed:{theCaption(){if(this.caption&&this.caption.length>2&&this.displayCaption)return this.caption;if(this.displayCaption&&this.data&&this.data.caption&&this.data.caption.length>2)return this.data.caption},theSrcSet(){return this.theData?Z(this.theData):void 0},theData(){if(this.data)return{...this.data,caption:this.theCaption}},hasCaptionArea(){return!!(this.data&&(this.theCaption||this.data.credit||this.data.detailUrl))}}}),ft={key:0},mt={class:"bg-gray-light"},ut={class:"max-w-screen-3xl mx-auto"},gt={key:0,class:"max-w-screen-3xl p-4 pb-0 mx-auto"};function yt(e,o,n,a,i,c){const d=t.resolveComponent("BaseImage"),p=t.resolveComponent("BaseImagePlaceholder"),u=t.resolveComponent("MixinFancybox"),g=t.resolveComponent("BaseImageCaption");return e.theData?(t.openBlock(),t.createElementBlock("div",ft,[t.createElementVNode("div",mt,[t.createElementVNode("div",ut,[e.theData.src?(t.openBlock(),t.createBlock(u,{key:0,src:e.theData.original,caption:e.theData.caption,credit:e.theData.credit,"detail-url":e.theData.detailUrl},{default:t.withCtx(()=>[t.createVNode(p,{"aspect-ratio":e.constrain?"16:9":"none","responsive-aspect-ratio":e.constrain?"lg:aspect-ratio-two-one":"","dark-mode":""},{default:t.withCtx(()=>[e.theData.src&&e.theData.srcCropped?(t.openBlock(),t.createBlock(d,{key:0,src:e.constrain?e.theData.srcCropped.url:e.theData.src.url,srcset:e.theData.srcSet&&!e.constrain?e.theData.srcSet:e.theSrcSet,width:e.constrain?e.theData.srcCropped.width:e.theData.src.width,height:e.constrain?e.theData.srcCropped.height:e.theData.src.height,alt:e.theData.alt,"image-class":e.constrain?void 0:"w-full h-auto","object-fit-class":e.constrain?"cover":void 0,loading:"lazy"},null,8,["src","srcset","width","height","alt","image-class","object-fit-class"])):t.createCommentVNode("",!0)]),_:1},8,["aspect-ratio","responsive-aspect-ratio"])]),_:1},8,["src","caption","credit","detail-url"])):t.createCommentVNode("",!0)])]),e.data&&e.hasCaptionArea?(t.openBlock(),t.createElementBlock("div",gt,[t.createVNode(g,{data:e.theData},null,8,["data"])])):t.createCommentVNode("",!0)])):t.createCommentVNode("",!0)}const le=m(ht,[["render",yt]]),ce={"col-1":"lg:col-start-1 lg:col-end-13","col-2":"lg:col-start-2 lg:col-end-12","col-3":"lg:col-start-3 lg:col-end-11","col-4":"md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10"},bt=t.defineComponent({name:"LayoutHelper",props:{indent:{type:String,required:!1,default:"col-1",validator:e=>Object.keys(ce).includes(e)}},computed:{theWidth(){return ce[this.indent]}}}),Ct={class:"LayoutHelper BaseGrid container mx-auto"};function kt(e,o,n,a,i,c){return t.openBlock(),t.createElementBlock("div",Ct,[t.createElementVNode("div",{class:t.normalizeClass(e.theWidth+" col-start-1 col-end-13 lg:px-0 px-4 relative")},[t.renderSlot(e.$slots,"default")],2)])}const $t=m(bt,[["render",kt]]),wt=t.defineComponent({name:"BlockImage",components:{BlockImageStandard:ie,BlockImageFullBleed:le,LayoutHelper:$t},props:{data:{type:Object,required:!1},fullBleed:{type:Boolean,required:!1,default:!1}}}),Bt={key:0};function _t(e,o,n,a,i,c){const d=t.resolveComponent("BlockImageFullBleed"),p=t.resolveComponent("BlockImageStandard"),u=t.resolveComponent("LayoutHelper");return e.data?(t.openBlock(),t.createElementBlock("div",Bt,[e.fullBleed&&e.data.imageFullBleed?(t.openBlock(),t.createBlock(d,{key:0,data:e.data.imageFullBleed,"display-caption":e.data.displayCaption,caption:e.data.caption,constrain:e.data.constrain},null,8,["data","display-caption","caption","constrain"])):(t.openBlock(),t.createBlock(u,{key:1,indent:"col-2"},{default:t.withCtx(()=>[t.createVNode(p,{data:e.data.image,"display-caption":e.data.displayCaption,caption:e.data.caption,constrain:e.data.constrain},null,8,["data","display-caption","caption","constrain"])]),_:1}))])):t.createCommentVNode("",!0)}const Et=m(wt,[["render",_t]]),St=t.defineComponent({name:"IconArrows"}),Nt={class:"IconArrows",width:"32",height:"12",viewBox:"0 0 32 12",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},Vt=[t.createStaticVNode('<g fill="currentColor" fill-rule="evenodd"><path d="M4 11.657l-.707-.707L8.243 6l-4.95-4.95L4 .343 9.657 6 4 11.657z" transform="translate(2)"></path><path d="M10 11.657l-.707-.707L14.243 6l-4.95-4.95L10 .343 15.657 6 10 11.657z" transform="translate(2)"></path><path d="M16 11.657l-.707-.707L20.243 6l-4.95-4.95L16 .343 21.657 6 16 11.657z" transform="translate(2)"></path><path d="M22 11.657l-.707-.707L26.243 6l-4.95-4.95L22 .343 27.657 6 22 11.657z" transform="translate(2)"></path></g>',1)];function It(e,o,n,a,i,c){return t.openBlock(),t.createElementBlock("svg",Nt,Vt)}const Dt=m(St,[["render",It]]),Ot=t.defineComponent({name:"IconLocation"}),Lt={class:"IconLocation",width:"16",height:"22",viewBox:"0 0 16 22",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},Mt=[t.createElementVNode("g",{transform:"translate(-4 -1)",stroke:"currentColor","stroke-width":"2",fill:"none"},[t.createElementVNode("path",{d:"M12 2c1.933 0 3.683.784 4.95 2.05A6.978 6.978 0 0119 9c0 2.681-2.41 6.81-7 12.43C7.41 15.81 5 11.68 5 9c0-1.933.784-3.683 2.05-4.95A6.978 6.978 0 0112 2z"}),t.createElementVNode("circle",{cx:"12",cy:"9",r:"3"})],-1)];function qt(e,o,n,a,i,c){return t.openBlock(),t.createElementBlock("svg",Lt,Mt)}const zt=m(Ot,[["render",qt]]),Ft=t.defineComponent({name:"IconArrows"}),jt={class:"IconUser",width:"21",height:"21",viewBox:"0 0 21 21",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},vt=[t.createElementVNode("path",{d:"M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0zm5.42 17.867c-1.525 1.143-3.43 1.778-5.42 1.778-2.032 0-3.938-.635-5.42-1.778v-.593a2.701 2.701 0 0 1 2.71-2.71c.466 0 1.143.509 2.71.509 1.524 0 2.202-.508 2.71-.508a2.729 2.729 0 0 1 2.71 2.71v.592zm1.27-1.143c-.297-1.99-1.948-3.514-3.98-3.514-.89 0-1.313.508-2.71.508-1.44 0-1.863-.508-2.71-.508-2.074 0-3.725 1.524-4.022 3.514-1.524-1.651-2.413-3.81-2.413-6.224A9.134 9.134 0 0 1 10.5 1.355c5.038 0 9.145 4.107 9.145 9.145 0 2.413-.931 4.573-2.456 6.224zM10.5 4.742a3.731 3.731 0 0 0-3.726 3.726 3.704 3.704 0 0 0 3.726 3.726 3.731 3.731 0 0 0 3.726-3.726c0-2.033-1.694-3.726-3.726-3.726zm0 6.097a2.367 2.367 0 0 1-2.371-2.371c0-1.27 1.059-2.371 2.371-2.371 1.27 0 2.371 1.1 2.371 2.37 0 1.313-1.1 2.372-2.371 2.372z",fill:"currentColor"},null,-1)];function Pt(e,o,n,a,i,c){return t.openBlock(),t.createElementBlock("svg",jt,vt)}const xt=m(Ft,[["render",Pt]]);h.BaseButton=Q,h.BaseHeading=Q,h.BaseImage=R,h.BaseLink=oe,h.BlockImage=Et,h.BlockImageFullBleed=le,h.BlockImageStandard=ie,h.IconArrows=Dt,h.IconCaret=ee,h.IconLocation=zt,h.IconUser=xt,h.MixinAnimationCaret=te,h.MixinFancybox=H,h.mixinGetSrcSet=Z,h.mixinTransparentHeader=we,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
