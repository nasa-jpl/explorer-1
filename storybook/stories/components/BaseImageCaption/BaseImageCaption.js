import { BaseLinkTemplate } from '../BaseLink/BaseLink'

export const BaseImageCaptionTemplate = ({
  caption,
  credit,
  url,
  link_text,
}) => {
  if (credit) {
    credit = `<span class="inline"> Credit: ${credit} </span>`
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
      ${credit}
    </div>
    ${baseLink}
  </div>
  `

  return template
}
