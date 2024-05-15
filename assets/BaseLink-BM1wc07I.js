import{M as d}from"./MixinAnimationCaret-BbklVmGz.js";import{I as y,a as x}from"./IconDownload-BH8PYKeu.js";import{I}from"./IconExternal-D74KcMPJ.js";const k=({text:t,variant:i,link:m,icon:e,caret:s,caretInline:u,caretWrapperClass:l,target:f,externalTargetBlank:v,computedClass:o,linkClass:p,wrapperClass:h})=>{e||(e="");let n=t||"Full Image Details",r=i?i.toLowerCase():"";l||(l=""),u&&s?n=d({text:t,customClass:"caret-inline"}):(r==="primary"||s)&&(n=d({text:t,customClass:l}));let a="";f?a=f:m&&v&&(a="_blank");let c="";a==="_blank"&&(c="noopener"),r==="primary"||r==="secondary"?o=`${r==="primary"?"-primary":"-secondary"} text-subtitle text-theme-color can-hover:hover:text-theme-color-hover`:r==="default"&&(o="-default underline text-theme-color can-hover:hover:text-theme-color-hover");let $="";h&&($=` class="${h}"`);const T=e==="document"?y({}):e==="internal"?x({}):e==="external"?I({}):"";return`
    <div${$}>
      <a
        href="${m}"
        target="${a}"
        rel="${c}"
        class="group cursor-pointer${o?` ${o}`:""}${p?` ${p}`:""}"
      >
        <span class="break-words">
          ${n}
        </span>
        ${T}
      </a>
    </div>  
  `};export{k as B};
