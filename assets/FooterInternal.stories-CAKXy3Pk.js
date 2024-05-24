import{B as n}from"./BaseLink-BM1wc07I.js";import{B as s}from"./BaseButton-CkSNoISR.js";const o=({title:t,items:e})=>{t||(t=""),e||(e=[]);let l="";if(e.length>0){l='<ul class="flex flex-wrap">';for(const[a,r]of e.entries())l+=`<li class="flex flex-nowrap mr-2">${n({variant:"none",linkClass:"text-jpl-sky-blue can-hover:hover:text-jpl-sky-blue-dark",text:r.name,link:`mailto:${r.email}`})}
      ${a+1===e.length?"":","}
      </li>`;l+="</ul>"}return`
<div class="mb-2 flex flex-wrap text-body-sm">
  <strong class="mr-2">${t}:</strong>
  ${l}
</div>
  `},d=({siteEditors:t,siteManagers:e,dateUpdated:l,version:a})=>(t||(t=[]),e||(e=[]),l||(l=""),a||(a=""),`
<footer class="FooterInternal bg-gray-dark text-white">
  <div class="lg:BaseGrid container mx-auto pt-10">
    <div class="indent-col-base indent-col-2">
      ${t.length>0?o({title:"Site Editors",items:t}):""}
      
      ${e.length>0?o({title:"Site Managers",items:e}):""}

      ${l?`<div class="text-body-sm mb-2">
        <b>Page Last Updated:</b>
        ${l}
      </div>`:""}
  
      ${a?`<div class="mb-2">
        <b>Site Version:</b>
        ${a}
      </div>`:""}
      <p class="my-8 text-body-xs xl:w-1/2">JPL is a federally funded research and development center staffed and managed for NASA by Caltech.</p>
      <div class="more-sites mb-4">
        <h2 class="text-subtitle mb-4">More Sites</h2>
        <ul class="inline-block lg:flex lg:flex-wrap">
          <li class="mb-2 lg:mb-8 lg:mr-8">
            ${s({variant:"dark",label:"JPL",link:"https://www.jpl.nasa.gov/",icon:"external",cssClass:"hidden lg:inline-block",target:"_blank"})}
            ${n({variant:"none",text:"JPL",link:"https://www.jpl.nasa.gov/",icon:"external",linkClass:"flex flex-nowrap items-baseline lg:hidden text-jpl-sky-blue can-hover:hover:text-jpl-sky-blue-dark",target:"_blank"})}
          </li>
          <li class="mb-2 lg:mb-8 lg:mr-8">
            ${s({variant:"dark",label:"JPL Space",link:"https://js.jpl.nasa.gov/",icon:"external",cssClass:"hidden lg:inline-block",target:"_blank"})}
            ${n({variant:"none",text:"JPL Space",link:"https://js.jpl.nasa.gov/",icon:"external",linkClass:"flex flex-nowrap items-center lg:hidden text-jpl-sky-blue can-hover:hover:text-jpl-sky-blue-dark",target:"_blank"})}
          </li>
          <li class="mb-2 lg:mb-8 lg:mr-8">
            ${s({variant:"dark",label:"Caltech",link:"https://www.caltech.edu/",icon:"external",cssClass:"hidden lg:inline-block",target:"_blank"})}
            ${n({variant:"none",text:"Caltech",link:"https://www.caltech.edu/",icon:"external",linkClass:"flex flex-nowrap items-center lg:hidden text-jpl-sky-blue can-hover:hover:text-jpl-sky-blue-dark",target:"_blank"})}
          </li>
          <li class="mb-2 lg:mb-8 lg:mr-8">
            ${s({variant:"dark",label:"NASA",link:"https://www.nasa.gov/",icon:"external",cssClass:"hidden lg:inline-block",target:"_blank"})}
            ${n({variant:"none",text:"NASA",link:"https://www.nasa.gov/",icon:"external",linkClass:"flex flex-nowrap items-center lg:hidden text-jpl-sky-blue can-hover:hover:text-jpl-sky-blue-dark",target:"_blank"})}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="bg-white/10">
    <div class="lg:BaseGrid container mx-auto py-4">
      <div class="indent-col-base indent-col-2 text-body-xs">
        Information in this system is sensitive and must be handled in accordance with all applicable rules. See
        <div class="inline-block mr-1">
          ${n({variant:"none",text:"Marking & Handling",link:"https://mh.jpl.nasa.gov",icon:"external",wrapperClass:"inline",linkClass:"flex flex-nowrap items-center text-jpl-sky-blue can-hover:hover:text-jpl-sky-blue-dark",target:"_blank"})}
        </div>
        for more information.
      </div>
    </div> 
  </div>
</footer>
  `),c=[{name:"Lorem Ipsum",email:"#"},{name:"Dolor Sit-Amet",email:"#"}],m={title:"Global Layout/Footers/For Internal Sites",argTypes:{siteEditors:{type:{name:"array",required:!1},description:"Array of site editors. Object should include a `name` and `email`."},siteManagers:{type:{name:"array",required:!1},description:"Array of site editors. Object should include a `name` and `email`."}},parameters:{docs:{description:{component:"Simple footer with preset links."}}}},i=d.bind({});i.storyName="For Internal Sites";i.args={siteEditors:c,siteManagers:c,dateUpdated:"July 28, 2022",version:"1.0"};const b=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:b,default:m},Symbol.toStringTag,{value:"Module"}));export{k as F};
