import { BaseLinkTemplate } from '../BaseLink/BaseLink'

export const BaseImageCaptionTemplate = ({
  caption,
  credit,
  url,
  linkText,
  computedClass,
}) => {
  return `
  <div class="BaseImageCaption text-body-sm ${
    computedClass ? computedClass : ''
  }">
    <div class="inline mr-2">
      <div class="the-caption-text inline">${caption}</div>
      ${credit ? `<span class="inline"> Credit: ${credit} </span>` : ''}
    </div>
    ${
      url
        ? BaseLinkTemplate({
            link: url,
            text: linkText,
            variant: 'default',
            computedClass: '',
            wrapperClass: 'inline-block',
          })
        : ''
    }
  </div>
  `
}
