import { AppBarInternalTemplate } from '../AppBarInternal/AppBarInternal'
import { NavInternalTemplate } from '../NavInternal/NavInternal'

export const HeaderInternalTemplate = ({
  orgNumber,
  siteTitle,
  includeSignIn,
  includeSearch,
  menuItems,
}) => {
  // prop defaults
  if (!orgNumber) orgNumber = ''
  if (!siteTitle) siteTitle = ''
  if (includeSignIn == undefined) includeSignIn = false
  if (includeSearch == undefined) includeSearch = false
  if (!menuItems) menuItems = []

  const AppBar = AppBarInternalTemplate({
    orgNumber: orgNumber,
    siteTitle: siteTitle,
    includeMobileMenuToggle: menuItems.length > 0 ? true : false,
    includeSignIn: includeSignIn,
  })

  return `
  <header id="HeaderInternal" class="sticky top-0 z-30">
    ${AppBar}
    ${
      menuItems.length > 0
        ? `<div id="NavInternalContainer" class="bg-white lg:block hidden">
    ${NavInternalTemplate({
      includeSearch: includeSearch,
      menuItems: menuItems,
    })}
    <div id="NavBgOverlay" class="fixed z-0 inset-0 hidden lg:block opacity-80 bg-black invisible-overlay"></div>
    <div class="bg-white fixed inset-0 lg:hidden z-0"></div>`
        : ''
    }
  </div>
  </header>
  `
}
