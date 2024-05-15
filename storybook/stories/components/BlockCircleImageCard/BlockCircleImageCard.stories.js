import { BlockCircleImageCardTemplate } from './BlockCircleImageCard'

export default {
  title: 'Components/Blocks/BlockCircleImageCard',
  argTypes: {
    imageOnRight: {
      type: { name: 'boolean', required: false },
      description: 'Determines position of the image',
      table: {
        defaultValue: { summary: 'false' },
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
        component:
          'Features a circular image alongside text, with a drop shadow and no hover effects. The image can be positioned on the left or the right.',
      },
    },
    html: {
      root: '#storyRoot',
    },
  },
}

export const Default = BlockCircleImageCardTemplate.bind({})
Default.storyName = 'BlockCircleImageCard'
Default.args = {
  imageOnRight: false,
  title: 'First Flight of Technology for Returning Warheads from Space',
  label: 'September 20, 1956',
  secondaryLabel: 'Re-entry test vehicle program',
  image: {
    src: {
      url: 'https://picsum.photos/130/130',
      width: 130,
      height: 130,
    },
    srcSet:
      'https://picsum.photos/90/90 320w, https://picsum.photos/130/130 1024w',
    alt: 'Alt text for image',
  },
}
