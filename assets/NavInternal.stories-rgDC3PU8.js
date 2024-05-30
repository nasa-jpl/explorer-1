import{S as i}from"./SearchInput-ZLYMymV6.js";import{I as r}from"./IconClose-BD6-dXf8.js";import{I as d}from"./IconDropdown-Bsl9sJbQ.js";import{I as c}from"./IconExternal-D74KcMPJ.js";import{I as p}from"./IconSearch-B_HupseB.js";import{d as v,e as h,f as u,g,h as m,i as f}from"./NavInternalPanel.stories-DZKx_I6l.js";const b=({includeSearch:a,menuItems:t})=>{a==null&&(a=!1),t||(t=[]);let n="";if(t.length>0)for(const[w,e]of t.entries()){const o=!!(e.menuItems&&e.menuItems.length>0||e.highlights&&e.highlights.length>0);n+=`<li class="${e.isActive?"active":""}">
        ${o?`
            <button class="toggle-NavInternalPanel flex flex-nowrap items-center w-full lg:w-auto"
              id="ddtoggle_${e.id}" 
              aria-haspopup="true" 
              aria-expanded="false"
              >
              <span class="pointer-events-none" data-text="${e.title}">
                ${e.title}
              </span>
              ${d({})}
            </button>

            <div class="panel-wrapper lg:absolute inset-0 spacer z-0 invisible">
              <!-- Insert NavInternalPanel here -->${v({id:e.id,title:e.title,url:e.url,isActive:e.isActive,repeatInPanel:e.repeatInPanel,repeatedTitle:e.repeatedTitle,highlights:e.highlights,menuItems:e.menuItems,allowSectionBreaks:e.allowSectionBreaks,allowSectionColumns:e.allowSectionColumns})}<!-- End NavInternalPanel -->
            </div>
          `:`
          <a href="${e.url}" class="block"${e.url.startsWith("h")?' target="_blank" rel="noopener"':""}>
            <span class="inline-block" data-text="${e.title}">
              ${e.title}
            </span>
            ${e.url.startsWith("h")?` <span class="text-xs ml-1">
                ${c({})}
              </span>`:""}
          </a>
        `}
      </li>
      `}return`
  <div id="NavInternalContainer" class="bg-white lg:block hidden">
    <nav class="NavInternal" aria-label="Main">
    ${a?`<div class="flex lg:hidden">
      <form id="NavMobileSearchForm" action="#" method="get" class="pt-6 pb-4 px-4 w-full">
        ${i({inputId:"NavMobileSearchInput",compact:!1})}
      </form>
    </div>`:""}
    <div class="w-full relative lg:shadow-lg z-20 bg-white">
      <div class="lg:container mx-auto lg:flex justify-between">
        <ul class="top-level lg:flex flex-nowrap lg:overflow-x-auto ${a?"":"pt-6 lg:pt-0"}">
          ${n}
        </ul>
        ${a?`<div class="hidden lg:block border-t-3 border-transparent relative z-10">
          <button id="NavSearchOpen" aria-label="Open search" class="flex flex-nowrap items-center py-6 px-1 border-b-3 can-hover:hover:text-gray-mid-dark focus:border-gray-dark/20 focus:outline-none border-transparent">
            <span class="font-medium leading-tight pr-2">
              Search
            </span>
            ${p({})}
          </button>
        </div>`:""}
      </div>
      ${a?`<div id="NavSearchContainer" class="hidden absolute inset-0 bg-white z-10">
        <div class="BaseGrid container mx-auto h-full">
          <div class="indent-col-base indent-col-2 px-4">
            <div class="flex flex-row items-center h-full pb-2">
              <form id="NavDesktopSearchForm" action="#" method="get" class="flex-grow">
                ${i({inputId:"NavSearchInput",compact:!0,placeholder:"Search this site&hellip;"})}
              </form>
              <button id="NavSearchClose" aria-label="Close search" class="flex flex-nowrap shrink-0 items-center p-2 text-black text-xs focus:outline-none focus:ring-2">
                ${r({})}
              </button>
            </div>
          </div>
        </div>
      </div>`:""}
    </div>
  </nav>
  <div id="NavBgOverlay" class="fixed z-0 inset-0 hidden lg:block opacity-80 bg-black invisible-overlay"></div>
  <div class="bg-white fixed inset-0 lg:hidden z-0"></div>
  `},x={title:"Global Layout/Headers/For Internal Sites/Elements/Navigation",excludeStories:/.*Data$/,parameters:{viewMode:"docs",layout:"fullscreen",docs:{description:{component:"Navigation with mega-menu dropdowns. Note: mobile view will only work when used with the [Internal Header](https://nasa-jpl.github.io/explorer-1/?path=/docs/global-layout-headers-for-internal-sites--docs)."}},html:{root:"#storyRoot"}},decorators:[a=>`<div id="storyRoot">${a()}</div>`]},s={includeSearch:!0,menuItems:[{id:1,title:"Home",url:"#"},{id:2,isActive:!0,...h},{id:3,...u},{id:4,...g},{id:5,...m},{id:6,...f},{id:7,title:"External",url:"https://www.jpl.nasa.gov/"}]},l=b.bind({});l.storyName="Navigation";l.args=s;const I=["NavInternalData","Default"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:l,NavInternalData:s,__namedExportsOrder:I,default:x},Symbol.toStringTag,{value:"Module"}));export{P as N,b as a,s as b};
