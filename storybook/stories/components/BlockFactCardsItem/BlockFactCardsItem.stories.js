import { BlockFactCardsItemTemplate } from './BlockFactCardsItem'

export default {
  title: 'Components/Blocks/BlockFactCards/BlockFactCardsItem',
  argTypes: {
    type: {
      type: { name: 'string', required: true },
      description: 'Label',
    },
    title: {
      type: { name: 'string', required: true },
      description: 'Title',
    },
    text: {
      type: { name: 'string', required: true },
      description: 'Summary/description of the item',
    },
    image: {
      type: { name: 'object', required: false },
      description: 'Image object',
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: '',
      },
    },
  },
}

export const Item = BlockFactCardsItemTemplate.bind({})
Item.storyName = 'BlockFactCardsItem'
Item.args = {
  type: 'Factoid',
  title: 'Nimble Limbs',
  text: 'The robot has four limbs, each with seven degrees of freedom.',
  image: {
    src: {
      url: 'https://picsum.photos/800/400',
      width: 800,
      height: 400,
    },
    srcSet:
      'https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w',
    alt: 'Fourth image',
  },
}
Item.decorators = [
  (Story) => `<div class="relative grid grid-cols-4 gap-4">${Story()}</div>`,
]
Item.parameters = {
  docs: {
    description: {
      component: 'Single item used in `BlockFactCards`',
    },
  },
}
