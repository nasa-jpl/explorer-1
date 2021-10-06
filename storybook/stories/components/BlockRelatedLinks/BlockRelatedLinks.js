import { BaseHeadingTemplate } from '../BaseHeading/BaseHeading'
import { RelatedLinkTemplate } from './RelatedLink'

export const BlockRelatedLinksTemplate = ({ heading, links }) => {
  let relatedLinks = ''
  if (links.length > 0) {
    for (const [index, value] of links.entries()) {
      relatedLinks += `<div class="sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3 mb-2">${RelatedLinkTemplate(
        { variant: value.variant, link: value.link, text: value.text }
      )}</div>`
    }
  } else {
    relatedLinks = ``
  }

  return `
  <div>
    ${BaseHeadingTemplate({
      text: heading,
      size: 'h5',
      tag: 'h2',
      headingClass: 'md:mb-8 mb-5',
    })}
    ${relatedLinks}
  </div>
  `
}
