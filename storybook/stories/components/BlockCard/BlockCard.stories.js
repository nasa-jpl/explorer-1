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
  decorators: [
    (Story) => `<div id="storyRoot" class="max-w-xl">${Story()}</div>`,
  ],
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'Features a drop shadow and a stylized red label, no hover effects. Card used in `BlockCardGroup`.',
      },
    },
    html: {
      root: '#storyRoot',
    },
  },
}

export const Card = BlockCardTemplate.bind({})
Card.storyName = 'BlockCard'
Card.args = {
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
