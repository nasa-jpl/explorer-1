import { BaseIframeTemplate } from '../BaseIframe/BaseIframe'
import { BaseImageCaptionTemplate } from '../BaseImageCaption/BaseImageCaption'
import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'

export const BlockIframeEmbedTemplate = ({ title, url, height, caption }) => {
  if (caption) {
    let baseImageCaption = BaseImageCaptionTemplate({
      caption,
      url,
    })
    caption = `<div class="lg:px-0 p-4 pb-0">${baseImageCaption}</div>`
  }

  const baseIframe = BaseIframeTemplate({
    title,
    url,
    height,
  })

  const iframeMarkup = height
    ? baseIframe
    : // default to 16:9 responsive if no height is provided
      BaseImagePlaceholderTemplate({
        aspectRatio: 'aspect-ratio-sixteen-nine',
        theme: 'dark-theme',
        placeholder: baseIframe,
      })

  const template = `
  ${iframeMarkup}
  ${caption}
  `

  return template
}
