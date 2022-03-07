import { MixinCarouselTemplate } from '../MixinCarousel/MixinCarousel.js'
import { BlockLinkCardTemplate } from '../BlockLinkCard/BlockLinkCard.js'
import { BlockLinkTileTemplate } from '../BlockLinkTile/BlockLinkTile.js'

export const BlockLinkCarouselTemplate = ({ heading, items, itemType }) => {
  // set defaults
  if (!heading) heading = ''
  if (!itemType) itemType = 'BlockLinkCard'

  let variant = ''
  if (itemType === 'BlockLinkTile') {
    variant = '-tiles'
  } else if (itemType === 'BlockLinkCard') {
    variant = '-cards'
  }

  let renderedSlides = ''
  if (items.length > 0) {
    for (const [index, value] of items.entries()) {
      if (itemType === 'BlockLinkCard') {
        renderedSlides += `${BlockLinkCardTemplate({
          url: value.url,
          title: value.title,
          label: value.label,
          image: value.thumbnailImage,
          customClass: 'swiper-slide',
        })}`
      } else if (itemType === 'BlockLinkTile') {
        renderedSlides += `${BlockLinkTileTemplate({
          url: value.url,
          title: value.title,
          label: value.label,
          image: value.thumbnailImage,
          customClass: 'swiper-slide',
        })}`
      }
    }
  }

  return MixinCarouselTemplate({
    heading: heading,
    variant: variant,
    slot: renderedSlides,
  })
}
