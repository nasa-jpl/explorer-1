import { LogoJPLTemplate } from '../LogoJPL/LogoJPL'
import { IconCloseTemplate } from '../Icons/IconClose'
import { IconMenuTemplate } from '../Icons/IconMenu'
import { IconUserTemplate } from '../Icons/IconUser'

export const AppBarInternalTemplate = ({
  orgNumber,
  siteTitle,
  includeMobileMenuToggle,
  includeSignIn,
  signedIn,
  userData,
  logInUrl,
  logOutUrl,
}) => {
  // prop defaults
  if (!orgNumber) orgNumber = ''
  if (!siteTitle) siteTitle = ''
  if (includeMobileMenuToggle == undefined) includeMobileMenuToggle = false
  if (includeSignIn == undefined) includeSignIn = false
  if (signedIn == undefined) signedIn = false
  if (!userData) userData = {}
  if (!logInUrl) logInUrl = '#'
  if (!logOutUrl) logOutUrl = '#'

  const mobileMenuToggleTemplate = includeMobileMenuToggle
    ? `<button id="NavMobileToggle" class="block lg:hidden focus:outline-none focus:ring-2 p-2" aria-label="Open menu">
      ${IconMenuTemplate({})}
      ${IconCloseTemplate({})}
    </button>
    `
    : ``

  const signInTemplate = includeSignIn
    ? signedIn && userData
      ? `
        <a href="${logOutUrl}" class="flex flex-nowrap items-center focus:outline-none focus:ring-2 mr-2 py-1">
          <span class="hidden lg:block mr-2">
            Sign Out
          </span>
          ${
            userData.photo
              ? `<span class="block flex-shrink-0 w-6 h-6 overflow-hidden rounded-full border-2 border-white bg-white">
              <img class="object-cover w-6 h-6" src="${userData.photo}" alt="${userData.firstName} ${userData.lastName}'s profile photo" />
            </span>`
              : `
            <span class="block flex-shrink-0">
              ${IconUserTemplate({})}
            </span>
            `
          }

        </a>
      `
      : `
      <a href="${logInUrl}" class="flex flex-nowrap items-center focus:outline-none focus:ring-2 mr-2 py-1">
        <span class="hidden lg:block mr-2">
          Sign In
        </span>
        <span class="block flex-shrink-0">
          ${IconUserTemplate({})}
        </span>
      </a>
    `
    : ``

  return `
  <div class="AppBarInternal sticky lg:relative top-0 z-30">
    <div class="bg-gradient-to-r from-jpl-red to-jpl-red-darker text-white font-medium relative z-10">
      <div class="flex flex-row px-4 lg:container mx-auto py-2 items-center justify-between">
        <div class="flex flex-row items-center py-px">
          <a href="//js.jpl.nasa.gov" aria-label="JPL Space" class="block lg:text-sm mr-10">
            ${LogoJPLTemplate({ colorClass: 'text-white lg:w-14.5' })}
          </a>
          <a class="hidden lg:flex flex-row items-center text-3xl py-px leading-tighter tracking-wide" href="/" title="${siteTitle}">
            <span>
              ${orgNumber}
            </span>
            <span class="border-l border-white pl-5 ml-5">
              ${siteTitle}
            </span>
          </a>
        </div>
        <div class="flex flex-nowrap -mr-2">
          ${signInTemplate}
          ${mobileMenuToggleTemplate}
        </div>
      </div>
    </div>
    <div class="lg:hidden block relative z-30 bg-white shadow-lg py-4">
      <a class=" px-4 lg:px-0 lg:container mx-auto flex flex-row items-center leading-tight tracking-wide font-medium text-gray-dark" href="/" title="${siteTitle}">
        <span class="text-3xl">
          ${orgNumber}
        </span>
        <span class="text-lg border-l-2 border-gray-dark pl-3 ml-3">
          ${siteTitle}
        </span>
      </a>
    </div>
  </div>
  `
}
