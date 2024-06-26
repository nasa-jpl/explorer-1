import BlockCard from './BlockCard.vue'

export default {
  title: 'Components/Blocks/BlockCard',
  component: BlockCard,
  excludeStories: /.*Data$/
}

export const BlockCardData = {
  type: 'Factoid',
  title: 'Nimble Limbs',
  text: 'The robot has four limbs, each with seven degrees of freedom.',
  image: {
    alt: 'Fourth image',
    src: {
      height: 400,
      url: 'https://picsum.photos/800/400',
      width: 800
    },
    srcSet: 'https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w'
  }
}

export const Item = { name: 'BlockCard', args: BlockCardData }
