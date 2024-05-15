import{I as f}from"./IconClose-BD6-dXf8.js";import{I as d}from"./IconMenu-DV0OjQIk.js";import{I as i}from"./IconUser-CqYZ7HgZ.js";const h=({colorClass:e})=>(e||(e="text-jpl-red"),`
    <svg
      class="LogoJPL ${e}"
      width="74"
      height="22"
      viewBox="0 0 74 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14.598 0v14.804a1.36 1.36 0 0 1-1.336 1.336H2.982L0 21.897h16.757c2.673 0 5.037-2.775 5.037-5.346V0h-7.196zM70.317 16.14H60.14a1.36 1.36 0 0 1-1.337-1.336V0h-7.196v16.551c0 2.57 2.365 5.346 5.038 5.346h16.757l-3.085-5.757zM49.037 3.495C47.907 1.336 45.542 0 43.075 0H23.747v22h7.197V5.757h9.663c1.337 0 2.468 1.13 2.468 2.467 0 1.337-1.131 2.468-2.468 2.468h-9.663l2.981 5.757h9.047c2.467 0 4.729-1.337 5.962-3.496.412-.72.72-1.439.925-2.261.206-.823.309-1.645.309-2.468 0-.822-.103-1.645-.309-2.467-.102-.822-.41-1.542-.822-2.262z" fill="currentColor"/>
    </svg>
  `),w=({orgNumber:e,siteTitle:l,includeMobileMenuToggle:s,includeSignIn:n,signedIn:t,userData:a,logInUrl:o,logOutUrl:r})=>{e||(e=""),l||(l=""),s==null&&(s=!1),n==null&&(n=!1),t==null&&(t=!1),a||(a={}),o||(o="#"),r||(r="#");const p=s?`<button id="NavMobileToggle" class="block lg:hidden focus:outline-none focus:ring-2 p-2" aria-label="Open menu">
      ${d({})}
      ${f({})}
    </button>
    `:"",c=n?t&&a?`
        <a href="${r}" class="flex flex-nowrap items-center focus:outline-none focus:ring-2 mr-2 py-1">
          <span class="hidden lg:block mr-2">
            Sign Out
          </span>
          ${a.photo?`<span class="block shrink-0 w-6 h-6 overflow-hidden rounded-full border-2 border-white bg-white">
              <img class="object-cover w-6 h-6" src="${a.photo}" alt="${a.firstName} ${a.lastName}'s profile photo" />
            </span>`:`
            <span class="block shrink-0">
              ${i({})}
            </span>
            `}

        </a>
      `:`
      <a href="${o}" class="flex flex-nowrap items-center focus:outline-none focus:ring-2 mr-2 py-1">
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
            ${h({colorClass:"text-white lg:w-14.5"})}
          </a>
          <a class="hidden lg:flex flex-row items-center text-3xl py-px leading-tighter tracking-wide" href="/" title="${l}">
            <span>
              ${e}
            </span>
            <span class="border-l border-white pl-5 ml-5">
              ${l}
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
      <a class=" px-4 lg:px-0 lg:container mx-auto flex flex-row items-center leading-tight tracking-wide font-medium text-gray-dark" href="/" title="${l}">
        <span class="text-3xl">
          ${e}
        </span>
        <span class="text-lg border-l-2 border-gray-dark pl-3 ml-3">
          ${l}
        </span>
      </a>
    </div>
  </div>
  `};export{w as A};
