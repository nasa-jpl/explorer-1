import{B as h}from"./BaseLink-DVdOPU1x.js";import{B as d}from"./BaseHeading-2dYQ5eTW.js";import{B as m}from"./BaseImagePlaceholder-BjDXo6VY.js";const c=({link:n,featured:u,type:e,topic:s,title:t,summary:r,date:l,image:a})=>h({link:n,linkClass:"block",wrapperClass:"SearchResultCard",text:`
    ${u?`
    <div class="bg-dark-blue xl:grid-cols-9 relative grid grid-cols-5 mb-10 text-white">
      <div class="xl:col-span-7 flex items-center col-span-3 p-10">
        <div class="">
          ${e||s?`
          <div class="text-subtitle mb-3">
            ${e?`<span>${e}<span class="sr-only">.</span></span>`:""}
            ${e&&s?'<span class="mx-1">|</span>':""}
            ${s?`<span>${s}<span class="sr-only">.</span></span>`:""}
          </div>`:""}
          ${t?d({text:t,size:"h5",tag:"h5",headingClass:"mb-4"}):""}
          ${r?`<p class="lg:block text-body-sm hidden mb-3">${r}</p>`:""}
          ${l?`<p>${l}</p>`:""}
        </div>
      </div>
      ${a?`
      <div class="SearchResultCard-image xl:col-span-2 col-span-2">
        <img src="${a.src.url}" width="${a.src.width}" height="${a.src.height}" alt="${a.alt}" class="object-cover w-full h-full" loading="lazy" />
      </div>
    </div>`:""}
    `:`
    <div class="border-gray-light-mid lg:pb-10 lg:mb-10 relative grid grid-cols-9 gap-5 pb-6 mb-6 border-b">
      ${e||s?`
      <div class="lg:hidden col-span-full text-subtitle">
        ${e?`<span>${e}<span class="sr-only">.</span></span>`:""}
        ${e&&s?'<span class="mx-1">|</span>':""}
        ${s?`<span class="text-gray-mid-dark">${s}<span class="sr-only">.</span></span>`:""}
      </div>`:""}
      <div class="sm:col-span-6 md:col-span-6 lg:col-span-7 xl:col-span-7 col-span-6">
        ${e||s?`
        <div class="text-subtitle lg:block hidden mb-3">
          ${e?`<span>${e}<span class="sr-only">.</span></span>`:""}
          ${e&&s?'<span class="mx-1">|</span>':""}
          ${s?`<span class="text-gray-mid-dark">${s}<span class="sr-only">.</span></span>`:""}
        </div>`:""}
        ${t?d({text:t,size:"h5",tag:"h5",headingClass:"mb-3"}):""}
        ${r?`<p class="sm:block text-gray-mid-dark text-body-sm hidden mb-3">${r}<span class="sr-only">.</span></p>`:""}
        ${l?`<p class="text-gray-mid-dark">${l}</p>`:""}
      </div>
      ${a?`
      <div class="SearchResultCard-image xl:pl-14 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2 col-span-3">
        ${m({theme:"dark-theme",src:a.src.url,srcset:a.srcSet,alt:a.alt,width:a.src.width,height:a.src.height,imageWrapperClass:"sm:object-cover object-cover",aspectRatio:"aspect-ratio-one-one",objectFitClass:"object-contain"})}
      </div>`:""}
    </div>
    `}

  `}),b={title:"Components/Search/SearchResultCard",excludeStories:/.*Data$/,argTypes:{link:{type:{name:"string",required:!0},description:"The URL that the card should link to"},type:{type:{name:"string",required:!1},description:"Primary label for the item"},topic:{type:{name:"string",required:!1},description:"Secondary label for the item"},title:{type:{name:"string",required:!0},description:""},summary:{type:{name:"string",required:!1},description:"Summary/description of the item"},date:{type:"string",description:"The date of the item (usually publication date).",control:{type:"date"}},image:{type:{name:"object",required:!1},description:"Image thumbnail. Expand the object to see the full data structure."},featured:{type:"boolean",description:"If the item should be styled as a featured result.",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}}},decorators:[n=>`<div class="relative container mx-auto">${n()}</div>`],parameters:{viewMode:"docs",docs:{description:{component:"Standard search result, with a highlighted occurrence of the query that returned the result. Styles for a featured result are also available."}}}},o={link:"/topics/placeholder-slug-1",type:"News",topic:"Moon",title:"How engineers at NASA-JPL persevered to develop a ventilator",summary:"On April 30, the Food and Drug Administration approved VITAL for a ventilator <mark>Emergency Use Authorization</mark>. Developed in just 37 days by NASA's Jet Propulsion Laboratory in response to the coronavirus pandemic, VITAL (short for Ventilator Intervention Technology Accessible Locally) wouldn't replace current hospital ventilators, which can treat a broader range of medical issues.",date:"May 22, 2018",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},srcSet:"https://picsum.photos/490/490 320w",alt:"Alt text"},featured:!1},i=c.bind({});i.storyName="Standard Result";i.args=o;const p=c.bind({});p.args={...o,featured:!0};const g=["SearchResultCardData","Default","FeaturedResult"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:i,FeaturedResult:p,SearchResultCardData:o,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{y as S};
