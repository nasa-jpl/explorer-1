import { BaseLinkTemplate } from '../BaseLink/BaseLink'

export const BlockQuoteTemplate = ({ attribution, thumbnail, quoteLink, quote }) => {
  let attributionTemplate = ''
  if (attribution) {
    thumbnail = thumbnail
      ? `<img loading="lazy" class="attribution-image" src="${thumbnail.src}" alt="${thumbnail.alt}" />`
      : ''

    quoteLink = quoteLink
      ? BaseLinkTemplate({
          text: attribution,
          computedClass: '',
          wrapperClass: 'attribution-text',
          link: quoteLink.externalLink,
          caret: true,
          externalTargetBlank: true
        })
      : `<div class="attribution-text"><span>${attribution}</span></div>`
    attributionTemplate = `
    <div class="inline-block">
      <div class="flex items-center justify-center">
        ${thumbnail}
        ${quoteLink}
      </div>
    </div>
    <hr aria-hidden="true" class="lg:mt-6 mt-3" />
    `
  }

  return `
  <div class="BlockQuote md:px-0 px-4 mx-auto text-center">
    <hr aria-hidden="true" class="lg:mb-6 mb-3" />
    <p class="quote">
      ${quote}
    </p>
    ${attributionTemplate}
  </div>
  `
}
