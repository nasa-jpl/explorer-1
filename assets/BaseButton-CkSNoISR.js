import{I,a as T,b,c as k,d as x,e as B,f as S}from"./IconExpand-udGnqQBS.js";import{I as w,a as g}from"./IconPrev-yIQlxMWd.js";import{I as E}from"./IconExternal-D74KcMPJ.js";import{I as h}from"./IconDropdown-Bsl9sJbQ.js";const N=({label:a,ariaLabel:t,variant:o,link:f,caret:d,compact:$,disabled:u,icon:s,iconBefore:p,iconOnly:c,cssClass:r,fancybox:n,target:m})=>{p==null&&(p=!1),c==null&&(c=!1),n=n||"";let e="",l="";s=="next"?e=w({}):s=="prev"?e=g({}):s=="expand"?e=I({}):s=="facebook"?e=T({}):s=="twitter"?e=b({}):s=="instagram"?e=k({}):s=="youtube"?e=x({}):s=="reddit"?e=B({}):s=="external"?e=E({}):s=="dropdown"?e=h({}):d&&(e=S({})),o=="primary"?l="-primary":o=="secondary"?l="-secondary":o=="dark"?l="-dark":o=="social"&&(l="-social"),$&&(l+=" -compact"),r&&(l+=" "+r),c&&(l+=" -icon-only",t?t=t:t=a,a="");const i=p?`${e}<span class="label-text">${a}</span>`:`<span class="label-text">${a}</span>${e}`;return u?`
      <button 
        disabled="disabled"
        class="BaseButton text-contrast-none inline-block ${l}" ${t?`aria-label="${t}"`:""}
      >
        <span class="label block">
          ${i}
        </span>
      </button>
    `:f?`
      <a 
        href="${f}" 
        class="BaseButton text-contrast-none inline-block ${l}" ${m?`
        target="${m}"`:""} ${t?`
        aria-label="${t}"`:""}
      >
        <span class="label block">
          ${i}
        </span>
      </a>
    `:`
      <button 
        class="BaseButton text-contrast-none inline-block ${l}" ${t?`
        aria-label="${t}"`:""} ${n}
      >
        <span class="label block">
          ${i}
        </span>
      </button>
    `};export{N as B};
