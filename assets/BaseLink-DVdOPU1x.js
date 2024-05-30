import{M as d}from"./MixinAnimationCaret-Btc0cg8a.js";import{I as y,a as x}from"./IconDownload-BH8PYKeu.js";import{I}from"./IconExternal-D74KcMPJ.js";const k=({text:a,variant:l,link:s,icon:e,caret:m,caretInline:u,caretWrapperClass:n,target:f,externalTargetBlank:v,computedClass:r,linkClass:p,wrapperClass:c})=>{e||(e="");let i=a||"Full Image Details",t=l?l.toLowerCase():"";n||(n=""),u&&m?i=d({text:a,customClass:"caret-inline"}):(t==="primary"||m)&&(i=d({text:a,customClass:n}));let o="";f?o=f:s&&v&&(o="_blank");let $="";o==="_blank"&&($="noopener"),t==="primary"||t==="secondary"?r=`${t==="primary"?"-primary":"-secondary"} text-subtitle text-action can-hover:hover:text-action-hover`:t==="default"&&(r="-default underline text-action can-hover:hover:text-action-hover");let h="";c&&(h=` class="${c}"`);const T=e==="document"?y({}):e==="internal"?x({}):e==="external"?I({}):"";return`
    <div${h}>
      <a
        href="${s}"
        target="${o}"
        rel="${$}"
        class="group cursor-pointer${r?` ${r}`:""}${p?` ${p}`:""}"
      >
        <span class="break-words">
          ${i}
        </span>
        ${T}
      </a>
    </div>  
  `};export{k as B};
