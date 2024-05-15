import{I as r}from"./IconSearch-B_HupseB.js";const i=({inputId:a,placeholder:t,compact:e})=>{t||(t=""),e==null&&(e=!1);const n=r({});return`<div class="SearchInput group relative flex items-center ${e?"":"border border-gray-mid"}">
    <div class="absolute inset-0 flex items-center">
      <span class="relative z-20 ml-6 text-xl ${e?"text-black":"text-gray-mid"}">
        ${n}
      </span>
    </div>
  
    ${e?`
    <div class="compact ml-14 h-2px absolute inset-x-0 bottom-0 overflow-hidden text-lg text-transparent">
      <span class="border-jpl-red-light absolute z-20 h-0 border-b-2 select-none">
        <!-- TODO: auto-update with input value using javascript -->
      </span>
      <span class="border-black/50 absolute inset-x-0 z-10 h-0 border-b-2 select-none"></span>
    </div>
  `:""}
  
    <input
      ${a?`id="${a}"`:""}
      name="query"
      class="pl-14 border-none relative z-10 w-full pr-5 text-lg text-gray-dark bg-transparent ${e?"focus:outline-none py-1 focus:ring-transparent":"focus:ring-opacity-50 focus:ring-2 py-4"}"
      type="search"
      aria-label="Query"
      placeholder="${t}"
    />
    <input hidden type="submit" value="Search" />
  </div>
  `};export{i as S};
