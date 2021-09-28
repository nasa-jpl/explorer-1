import { BaseImageCaptionTemplate } from '../BaseImageCaption/BaseImageCaption'

export const BlockIframeEmbedTemplate = ({ title, url, height, caption }) => {
  if (caption) {
    let baseImageCaption = BaseImageCaptionTemplate({
      caption,
      url,
    })
    caption = `<div class="lg:px-0 p-4 pb-0">${baseImageCaption}</div>`
  }

  height = height ? height : 400

  let template = `
  <iframe
    loading="lazy"
    title="${title}"
    data-src="${url}"
    width="90%"
    height="${height}"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen="allowfullscreen"
    class="BlockIframeEmbed"
    src="${url}"
  ></iframe>
  ${caption}
  `

  return template
}
