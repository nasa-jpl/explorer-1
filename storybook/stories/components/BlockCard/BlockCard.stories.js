import { BlockCardTemplate } from './BlockCard'

export default {
  title: 'Components/Blocks/BlockCard',
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
    html: {
      root: '#storyRoot',
    },
  },
}

export const Item = BlockCardTemplate.bind({})
Item.storyName = 'BlockCard'
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
  (Story) =>
    `<div class="container"><div id="storyRoot" class="w-1/2">${Story()}</div>`,
]
Item.parameters = {
  docs: {
    description: {
      component: 'Single item used in `BlockCardGroup`',
    },
  },
}
