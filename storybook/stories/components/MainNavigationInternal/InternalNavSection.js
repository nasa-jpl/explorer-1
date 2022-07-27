import { BaseLinkTemplate } from '../BaseLink/BaseLink'
import { IconExternalTemplate } from '../Icons/IconExternal'

export const InternalNavSectionTemplate = ({
  heading,
  headingLink,
  menuItems,
  isActive,
}) => {
  // set defaults
  if (!heading) heading = ''
  if (!headingLink) headingLink = ''
  if (!menuItems) menuItems = []
  if (isActive === null) isActive = false
  const hasMenuItems = menuItems.length > 0 ? true : false

  const headingTemplate = heading
    ? headingLink
      ? `<a href="${headingLink}" class="inline-block w-full p-2 pl-0 
      ${isActive ? ' active' : ''}
      ${hasMenuItems ? 'text-subtitle' : ''}
        "
>
  <span>
    ${heading}
  </span>
  ${headingLink.startsWith('h') ? `${IconExternalTemplate({})}` : ''}
</a>`
      : `<p class="text-subtitle inline-block w-full p-2 pl-0">${heading}</p>`
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

  return `<div class="sub-menu-item w-full ${
    hasMenuItems ? 'has-children' : ''
  }">
    ${headingTemplate}
    ${menuItemsTemplate}
  </div>
  `
}
