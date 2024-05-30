import{B as m}from"./BaseLink-DVdOPU1x.js";import{B as g}from"./BaseImagePlaceholder-BjDXo6VY.js";import{a as x}from"./IconDownload-BH8PYKeu.js";const $=({url:r,title:n,headingLevel:t,label:e,secondaryLabel:l,image:a,customClass:s,compact:i})=>{t||(t="p"),s||(s="");let p=g({theme:"dark-theme",noLogo:!0,aspectRatio:i?"aspect-ratio-one-one":"aspect-ratio-eight-seven",src:a.src.url,srcset:a.srcset,alt:"",width:a.src.width,height:a.src.height,imageClass:"w-full h-full",objectFitClass:"object-cover"}),c=x({}),o="";(e||l)&&(o=`
      <p class="text-subtitle divide-white flex divide-x mb-2">
        ${e?`
        <span class="${l?"pr-2":""}">
          ${e}
        </span>`:""}
        ${l?`
        <span class="${e?"pl-2":""}">
          ${l}
        </span>`:""}
        <span class="sr-only">.</span>
      </p>
    `);let d=`
  <div class="relative">
    <div
      class="lg:group-hover:scale-105 min-h-66 transition-all duration-200 ease-in delay-200 scale-100 bg-black"
    >
      ${p}
      <div class="gradient-overlay bg-gradient-to-b from-transparent to-black min-h-1/2 absolute inset-x-0 bottom-0"></div>
      <div class="absolute inset-0 bg-black/15"></div>
    </div>
    <div class="absolute inset-x-0 bottom-0">
      <div
        class="text-contrast px-6 py-4 text-white ${i?"":"xl:px-10 xl:py-6 lg:px-8"}"
      >
        ${o}
        <${t} class="text-xl leading-tight tracking-tight transition-all duration-200 ease-in delay-200 ${i?"font-semibold mb-0 lg:group-hover:mb-1":"font-medium mb-1 lg:group-hover:mb-3 sm:text-6xl md:text-3xl xl:text-6xl"}">
          ${n}
        </${t}>
        <div class="lg:block lg:-ml-3 lg:opacity-0 lg:group-hover:ml-0 lg:group-hover:opacity-100 lg:-mb-3 relative z-20 hidden text-3xl leading-normal transition-all duration-200 ease-in delay-200">
          ${c}
        </div>
      </div>
    </div>
  </div>
  `;return m({link:r,text:d,computedClass:"block",wrapperClass:"group "+s})};export{$ as B};
