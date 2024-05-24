import{B as l}from"./BaseImagePlaceholder-BjDXo6VY.js";import{B as d}from"./BaseHeading-2dYQ5eTW.js";const h=({type:s,title:r,text:a,image:e,customClass:t})=>(t||(t=""),`
  <div class="shadow-jpl relative h-full ${t} ${e?"":"flex items-center min-h-32"}">
    ${e?`
    <div class="h-auto">
      ${l({theme:"dark-theme",src:e.src.url,srcset:e.srcSet,alt:e.alt,width:e.src.width,height:e.src.height,aspectRatio:"aspect-ratio-sixteen-nine",objectFitClass:"object-cover"})}
    </div>
    `:""}
    <div class="px-6 py-6">
      <div class="text-jpl-red text-subtitle">${s}</div>
      <hr aria-hidden="true" class="bg-jpl-red text-jpl-red w-8 h-2px border-0 my-2"/>
      ${d({text:r,size:"h5",tag:"h3",headingClass:"mt-4 mb-2"})}
      <p class="text-body-sm">${a}</p>
    </div>
  </div>
  `);export{h as B};
