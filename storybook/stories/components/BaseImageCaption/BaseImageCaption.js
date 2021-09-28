import { BaseLinkTemplate } from '../BaseLink/BaseLink'

export const BaseImageCaptionTemplate = ({ caption, credit, url, link_text }) => {
  let imageCredit = ''
  if (credit) {
    imageCredit = `<span class="inline"> Credit: ${credit} </span>`
  }

  let baseLink = BaseLinkTemplate({
    link: url,
    text: link_text, 
    variant: 'default',
    computedClass: '',
    wrapperClass: 'inline-block',
  })

  let template = `
  <div class="BaseImageCaption text-body-sm">
    <div class="inline mr-2">
      <div class="the-caption-text inline">${caption}</div>
      ${imageCredit}
    </div>
    ${baseLink}
  </div>
  `

  return template
}