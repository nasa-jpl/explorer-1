import { BaseCarouselCardsTemplate } from '../BaseCarouselCards/BaseCarouselCards.js'

export const BlockArticleCarouselTemplate = ({ heading, items }) => {
  // set defaults
  if (!heading) heading = ''

  return BaseCarouselCardsTemplate({
    heading: heading,
    variant: '-cards',
    cards: items,
    slideTemplate: 'BlockArticleCarouselItem',
  })
}
