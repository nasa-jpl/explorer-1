import{B as p}from"./BaseImagePlaceholder-BjDXo6VY.js";import{B as d}from"./BaseImageCaption-vks4WUeh.js";import{B as u}from"./BaseButton-CkSNoISR.js";const b=({variant:t,fancyboxGallery:o,image:e,icon:r,label:c})=>{let a="data-fancybox";return o&&(a+=`="${o}"`),(e.credit||e.caption)&&(a+=' data-caption="',e.caption&&(a+=e.caption.replace(/<[^>]*>?/gm,"")),e.caption&&e.credit&&(a+=" "),e.credit&&(a+=`Credit: ${e.credit}`),a+='"'),a+=` data-src="${e.src.url}"`,u({variant:t,icon:r,label:c,fancybox:a,iconOnly:!0})},h=({image:t,fancyboxGallery:o})=>`
  <div class="lg:opacity-0 transition-opacity absolute z-20 top-0 right-0 can-hover:group-hover:opacity-100 focus-within:opacity-100">
    ${b({variant:"primary",fancyboxGallery:o,image:t,icon:"expand",label:"View in lightbox"})}
  </div>
  `,v=({image:t,fancyboxGallery:o,imageClass:e,imageCaptionClass:r,imageCaptionWrapperClass:c,imageFitClass:a})=>{let i=h({image:t,fancyboxGallery:o}),l=p({theme:"dark-theme",src:t.src.url,srcset:t.src.url,alt:t.alt,width:t.src.width,height:t.src.height,wrapperClass:"",aspectRatio:"aspect-ratio-sixteen-nine",objectFitClass:a||"object-contain",imageClass:e}),n="";if(t.caption||t.credit){let s=d({caption:t.caption,credit:t.credit,url:t.url,linkText:t.linkText});n=`<div class="lg:px-0 ${c||"p-4 pb-0"}">${s}</div>`}return`
  <div class="group relative">
    ${i}
    ${l}
  </div>
  ${n}
  ${r=="slide-caption"?'<div class="pt-10 lg:hidden"></div>':""}
  `};export{h as B,v as a};
