import{B as h}from"./BaseImage-VZnI4aAI.js";const g=({theme:i,noLogo:e,aspectRatio:a,wrapperClass:l,placeholder:t,src:r,srcset:s,alt:c,width:f,height:m,imageWrapperClass:v,objectFitClass:d,imageClass:$})=>{i||(i="light-theme"),a||(a="aspect-ratio-none"),d||(d="object-contain"),e?e="no-logo":e="";let n="";l&&(n=` class="${l}"`);const B=r||s?h({src:r,srcset:s,alt:c,width:f,height:m,imageClass:$||"",wrapperClass:v||"",objectFitClass:d}):t?`<div>${t}</div>`:"<div></div>";return`<div${n}>
  <div class="BaseImagePlaceholder ${i} ${a} ${e}">
    ${B}
  </div>
</div>`};export{g as B};
