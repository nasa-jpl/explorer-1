import{B as c}from"./BaseLink-BM1wc07I.js";import{B as v}from"./BaseImagePlaceholder-BjDXo6VY.js";import{a as g}from"./IconDownload-BH8PYKeu.js";const $=({url:i,title:n,headingLevel:t,label:a,secondaryLabel:l,image:r,customClass:o,compact:e})=>{t||(t="p"),o||(o=""),e==null&&(e=!1);let p=v({theme:"dark-theme",noLogo:!0,aspectRatio:"aspect-ratio-sixteen-nine",wrapperClass:`bg-gray-dark relative mb-6 overflow-hidden ${e?"":"lg:mb-10"}`,src:r.src.url,srcset:r.srcset,alt:r.alt,width:r.src.width,height:r.src.height,imageClass:"can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in scale-105",objectFitClass:"object-cover"}),d=g({}),s="";(a||l)&&(s=`
      <div class="flex flex-wrap">
        <p class="text-subtitle divide-gray-mid flex divide-x ${e?"mb-2":"mb-4"}">
          ${a?`
          <span class="${l?"pr-2":""}">
            ${a}
          </span>`:""}
          ${l?`
          <span class="${a?"text-gray-mid-dark pl-2":""}">
            ${l}
          </span>`:""}
          <span class="sr-only">.</span>
        </p>
      </div>
    `);let h=`
    ${p}
    <div
      class="transition-translate can-hover:group-hover:delay-200 duration-200 ease-in ${e?"can-hover:group-hover:-translate-y-2":"can-hover:group-hover:-translate-y-3"}"
    >
      ${s}
      <${t} class="text-gray-dark text-xl font-medium leading-tight tracking-tight ${e?"text-xl":"lg:text-3xl"}">
        ${n}
      </${t}>
    </div>
    <div
      class="can-hover:block text-jpl-red can-hover:-ml-3 can-hover:group-hover:delay-200 can-hover:opacity-0 can-hover:group-hover:ml-0 can-hover:group-hover:opacity-100 hidden -mt-1 text-2xl leading-normal transition-all duration-200 ease-in"
    >
      ${d}
    </div>
  `;return c({link:i,text:h,computedClass:"block pb-5",wrapperClass:"group "+o})};export{$ as B};
