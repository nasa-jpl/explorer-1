import { AppBarInternalTemplate } from '../AppBarInternal/AppBarInternal'
import { MainNavigationInternalTemplate } from '../MainNavigationInternal/MainNavigationInternal'

export const HeaderInternalTemplate = ({
  orgNumber,
  siteTitle,
  includeSignIn,
}) => {
  // prop defaults
  if (!orgNumber) orgNumber = ''
  if (!siteTitle) siteTitle = ''
  if (includeSignIn === null) includeSignIn = false

  const AppBar = AppBarInternalTemplate({
    orgNumber: orgNumber,
    siteTitle: siteTitle,
    includeMobileMenuToggle: true,
    includeSignIn: includeSignIn,
  })

  return `
  <div class="z-60 fixed top-3 right-20 text-center">
    <button id="SkipLink" class="focus:not-sr-only sr-only text-white bg-jpl-sky-blue-dark font-bold text-subtitle">
      Skip to main content
    </button>
  </div>
  <header id="GlobalHeader" class="sticky top-0 z-30">
    ${AppBar}
    <div id="MainNavigationContainer" class="bg-white lg:block hidden">
    ${MainNavigationInternalTemplate({})}
    <div id="NavBgOverlay" class="fixed z-0 inset-0 hidden lg:block opacity-80 bg-black invisible-overlay"></div>
    <div class="bg-white fixed inset-0 lg:hidden z-0"></div>
  </div>
  </header>
  `
}
