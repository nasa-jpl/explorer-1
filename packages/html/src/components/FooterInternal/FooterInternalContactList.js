import { BaseLinkTemplate } from '../BaseLink/BaseLink'

export const FooterInternalContactListTemplate = ({ title, items }) => {
  // prop defaults
  if (!title) title = ''
  if (!items) items = []

  let itemsTemplate = ''
  if (items.length > 0) {
    itemsTemplate = '<ul class="flex flex-wrap">'
    for (const [index, item] of items.entries()) {
      itemsTemplate += `<li class="flex flex-nowrap mr-2">${BaseLinkTemplate({
        variant: 'none',
        linkClass: 'text-jpl-teal-light can-hover:hover:text-jpl-teal',
        text: item.name,
        link: `mailto:${item.email}`
      })}
      ${index + 1 === items.length ? '' : ','}
      </li>`
    }
    itemsTemplate += `</ul>`
  }

  return `
<div class="mb-2 flex flex-wrap text-body-sm">
  <strong class="mr-2">${title}:</strong>
  ${itemsTemplate}
</div>
  `
}
