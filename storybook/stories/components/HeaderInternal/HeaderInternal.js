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
        ? `
    ${NavInternalTemplate({
      includeSearch: includeSearch,
      menuItems: menuItems,
    })}`
        : ''
    }
  </header>
  `
}
