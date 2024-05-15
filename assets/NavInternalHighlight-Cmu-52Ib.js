import{B as o}from"./BaseImagePlaceholder-KhPDDuZV.js";const h=({title:l,description:t,image:e,link:r,ariaLabel:a})=>(l||(l=""),t||(t=""),e||(e={}),r||(r=""),a||(a=""),`<div class="NavInternalHighlight mb-6 lg:mb-0 lg:w-5/6">
    ${l?`<p class="font-normal text-2xl lg:text-xl xl:text-2xl mb-4">
        ${l}
      </p>`:""}
    ${t?`<p class="text-sm leading-relaxed ${e?"mb-4 lg:mb-6":""}">
        ${t}
      </p>`:""}
    ${e&&e.src&&r?`
        <a
            class="block group cursor-hover text-jpl-sky-blue-dark can-hover:hover:jpl-sky-blue font-medium lg:font-normal"
            href="${r}"
            ${a?`aria-label="${a}"`:""}
          >
        `:""}
    ${e&&e.src?`${o({wrapperClass:"hidden lg:block bg-gray-dark relative overflow-hidden",theme:"dark-theme",aspectRatio:"aspect-ratio-sixteen-nine",noLogo:!0,objectFitClass:"object-cover",imageClass:"can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in scale-105",src:e.src,width:e.width,height:e.height,alt:e.alt})}
          ${r?`<span class="block lg:hidden">
                    ${l}
                </span>
              </a>`:""}`:""}
  </div>
  `);export{h as N};
