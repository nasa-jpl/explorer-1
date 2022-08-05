import { BaseLinkTemplate } from '../BaseLink/BaseLink'
import { IconExternalTemplate } from '../Icons/IconExternal'

export const NavInternalSectionTemplate = ({
  title,
  url,
  menuItems,
  isActive,
}) => {
  // set defaults
  if (!title) title = ''
  if (!url) url = ''
  if (!menuItems) menuItems = []
  if (isActive == undefined) isActive = false

  // derive other constants
  const hasMenuItems = menuItems.length > 0 ? true : false

  const headingTemplate = title
    ? url
      ? `<a href="${url}" class="inline-block w-full p-2 pl-0 ${
          isActive ? ' active' : ''
        } ${hasMenuItems ? 'text-subtitle' : ''}">
  <span>
    ${title}
  </span>
  ${url.startsWith('h') ? `${IconExternalTemplate({})}` : ''}
</a>`
      : `<p class="text-subtitle inline-block w-full p-2 pl-0">${title}</p>`
    : ''

  let menuItemsTemplate = ''
  if (hasMenuItems) {
    menuItemsTemplate = '<ul class="group-menu">'
    for (const [index, item] of menuItems.entries()) {
      menuItemsTemplate += `<li>${BaseLinkTemplate({
        variant: 'none',
        linkClass: `inline-block w-full p-2 pl-0 ${
          item.isActive ? 'active' : ''
        }`,
        text: item.title,
        link: item.url,
        icon: item.url.startsWith('h') ? 'external' : '',
      })}</li>`
    }
    menuItemsTemplate += `</ul>`
  }

  return `<div class="NavInternalSection w-full ${
    hasMenuItems ? 'has-children' : ''
  }">
    ${headingTemplate}
    ${menuItemsTemplate}
  </div>
  `
}
