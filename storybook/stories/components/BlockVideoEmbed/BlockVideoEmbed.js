import { BaseImageCaptionTemplate } from '../BaseImageCaption/BaseImageCaption'
import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'

export const BlockVideoEmbedTemplate = ({ embed, caption, credit }) => {
  return `
  <div class="BlockVideoEmbed">
    ${BaseImagePlaceholderTemplate({
      aspectRatio: 'aspect-ratio-sixteen-nine',
      theme: 'dark-theme',
      placeholder: embed,
    })}
    ${
      caption || credit
        ? `<div class="lg:px-0 p-4">${BaseImageCaptionTemplate({
            caption,
            credit,
          })}</div>`
        : ''
    }
  </div>
  `
}
