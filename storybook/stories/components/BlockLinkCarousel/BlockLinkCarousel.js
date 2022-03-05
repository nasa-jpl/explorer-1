import { MixinCarouselTemplate } from '../MixinCarousel/MixinCarousel.js'

export const BlockLinkCarouselTemplate = ({ heading, items }) => {
  // set defaults
  if (!heading) heading = ''

  return MixinCarouselTemplate({
    heading: heading,
    variant: '-cards',
    cards: items,
    slideTemplate: 'BlockLinkCard',
  })
}
