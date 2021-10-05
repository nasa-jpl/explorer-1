import { BaseLinkTemplate } from '../BaseLink/BaseLink'

export const BlockQuoteTemplate = ({ data }) => {
  let attributionTemplate = ''
  if (data.attribution) {
    let thumbnail = data.thumbnail
      ? `<img loading="lazy" class="attribution-image" src="${data.thumbnail.src}" alt="${data.thumbnail.alt}" />`
      : ''
    let quoteLink = data.quoteLink
      ? BaseLinkTemplate({
          text: data.attribution,
          computedClass: '',
          wrapperClass: 'attribution-text',
          link: data.quoteLink.externalLink,
          caret: true,
          externalTargetBlank: true,
        })
      : `<div class="attribution-text"><span>${data.attribution}</span></div>`
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
      ${data.quote}
    </p>
    ${attributionTemplate}
  </div>
  `
}
