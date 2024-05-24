import{L as f}from"./LogoJPL-CN4_E0dD.js";import{I as d}from"./IconClose-BD6-dXf8.js";import{I as m}from"./IconMenu-DV0OjQIk.js";import{I as i}from"./IconUser-CqYZ7HgZ.js";const b=({orgNumber:s,siteTitle:a,includeMobileMenuToggle:l,includeSignIn:n,signedIn:o,userData:e,logInUrl:t,logOutUrl:r})=>{s||(s=""),a||(a=""),l==null&&(l=!1),n==null&&(n=!1),o==null&&(o=!1),e||(e={}),t||(t="#"),r||(r="#");const p=l?`<button id="NavMobileToggle" class="block lg:hidden focus:outline-none focus:ring-2 p-2" aria-label="Open menu">
      ${m({})}
      ${d({})}
    </button>
    `:"",c=n?o&&e?`
        <a href="${r}" class="flex flex-nowrap items-center focus:outline-none focus:ring-2 mr-2 py-1">
          <span class="hidden lg:block mr-2">
            Sign Out
          </span>
          ${e.photo?`<span class="block shrink-0 w-6 h-6 overflow-hidden rounded-full border-2 border-white bg-white">
              <img class="object-cover w-6 h-6" src="${e.photo}" alt="${e.firstName} ${e.lastName}'s profile photo" />
            </span>`:`
            <span class="block shrink-0">
              ${i({})}
            </span>
            `}

        </a>
      `:`
      <a href="${t}" class="flex flex-nowrap items-center focus:outline-none focus:ring-2 mr-2 py-1">
        <span class="hidden lg:block mr-2">
          Sign In
        </span>
        <span class="block shrink-0">
          ${i({})}
        </span>
      </a>
    `:"";return`
  <div class="AppBarInternal sticky lg:relative top-0 z-30">
    <div class="bg-gradient-to-r from-jpl-red to-jpl-red-darker text-white font-medium relative z-10">
      <div class="flex flex-row px-4 lg:container mx-auto py-2 items-center justify-between">
        <div class="flex flex-row items-center py-px">
          <a href="//js.jpl.nasa.gov" aria-label="JPL Space" class="block mr-10">
            ${f({colorClass:"text-white lg:w-14.5"})}
          </a>
          <a class="hidden lg:flex flex-row items-center text-3xl py-px leading-tighter tracking-wide" href="/" title="${a}">
            <span>
              ${s}
            </span>
            <span class="border-l border-white pl-5 ml-5">
              ${a}
            </span>
          </a>
        </div>
        <div class="flex flex-nowrap -mr-2">
          ${c}
          ${p}
        </div>
      </div>
    </div>
    <div class="lg:hidden block relative z-30 bg-white shadow-lg py-4">
      <a class=" px-4 lg:px-0 lg:container mx-auto flex flex-row items-center leading-tight tracking-wide font-medium text-gray-dark" href="/" title="${a}">
        <span class="text-3xl">
          ${s}
        </span>
        <span class="text-lg border-l-2 border-gray-dark pl-3 ml-3">
          ${a}
        </span>
      </a>
    </div>
  </div>
  `};export{b as A};
