import { BaseCarouselCardsTemplate } from '../BaseCarouselCards/BaseCarouselCards.js'

export const ArticleCarouselTemplate = ({ heading, items }) => {
  // set defaults
  if (!heading) heading = ''

  return BaseCarouselCardsTemplate({
    heading: heading,
    variant: '-cards',
    cards: items,
    slideTemplate: 'ArticleCarouselItem',
  })
}
