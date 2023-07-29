import { BlockCircleImageCardTemplate } from './BlockCircleImageCard'

export default {
  title: 'Components/Blocks/BlockCircleImageCard',
  argTypes: {
    type: {
      type: { name: 'string', required: false },
      description: 'Determines position of the image',
      control: {
        type: 'select',
        options: ['imageOnLeft', 'imageOnRight'],
      },
      table: {
        defaultValue: { summary: 'imageOnLeft' },
      },
    },
    title: {
      type: { name: 'string', required: true },
      description: 'Heading',
    },
    label: {
      type: { name: 'string', required: true },
      description: 'Subtitle',
    },
    secondaryLabel: {
      type: { name: 'string', required: false },
      description: 'Secondary subtitle',
    },
    image: {
      type: { name: 'object', required: true },
      description: 'Image object',
    },
  },
  decorators: [
    (Story) =>
      `<div id="storyRoot" class="max-w-xl mx-auto container">${Story()}</div>`,
  ],
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'Features an image in a circle, no hover effects.',
      },
    },
    html: {
      root: '#storyRoot',
    },
  },
}

export const Card = BlockCircleImageCardTemplate.bind({})
Card.storyName = 'BlockCircleImageCard'
Card.args = {
  type: 'imageOnRight',
  title: 'First Flight of Technology for Returning Warheads from Space',
  label: 'September 20, 1956',
  secondaryLabel: 'Re-entry test vehicle program',
  image: {
    src: {
      url: 'https://picsum.photos/122/122',
      width: 122,
      height: 122,
    },
    srcSet:
      'https://picsum.photos/90/90 320w, https://picsum.photos/122/122 1024w',
    alt: 'Alt text for image',
  },
}
