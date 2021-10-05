import { BaseLinkTemplate } from '../BaseLink/BaseLink'

export const BaseImageCaptionTemplate = ({
  caption,
  credit,
  url,
  linkText,
  computedClass,
}) => {
  credit = credit ? `<span class="inline"> Credit: ${credit} </span>` : ''
  linkText = linkText ? linkText : ''

  let baseLink = BaseLinkTemplate({
    link: url,
    text: linkText,
    variant: 'default',
    computedClass: '',
    wrapperClass: 'inline-block',
  })

  let template = `
  <div class="BaseImageCaption text-body-sm ${computedClass}">
    <div class="inline mr-2">
      <div class="the-caption-text inline">${caption}</div>
      ${credit}
    </div>
    ${baseLink}
  </div>
  `

  return template
}
