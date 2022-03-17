import { BlockLinkCardTemplate } from './BlockLinkCard.js'

export default {
  title: 'Components/Blocks/BlockLinkCard',
  argTypes: {
    url: {
      type: { name: 'string', required: true },
    },
    title: {
      type: { name: 'string', required: false },
    },
    headingLevel: {
      type: { name: 'string', required: false },
      description:
        'Change the heading level for semantic markup. This does not affect the style of the heading. Leave blank to use `<p>`.',
      control: {
        type: 'select',
        options: [null, 'h2', 'h3', 'h4', 'h5'],
      },
    },
    label: {
      type: { name: 'string', required: false },
    },
    secondaryLabel: {
      type: { name: 'string', required: false },
    },
    compact: {
      type: { name: 'boolean', required: false },
      description: 'Use styling for condensed layouts.',
      table: {
        defaultValue: { summary: false },
      },
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
          'Features a an image followed by text, with a hover effect. Recommended for use with longer text. `BlockLinkCard` is an item type available for use in `BlockLinkCarousel`.',
      },
    },
    html: {
      root: '#storyRoot',
    },
  },
}

export const Card = BlockLinkCardTemplate.bind({})
Card.storyName = 'BlockLinkCard'
Card.args = {
  url: '#',
  title: 'How engineers at NASA-JPL persevered to develop a ventilator',
  label: 'Solar System',
  secondaryLabel: 'Earth',
  image: {
    alt: 'Alt text for image',
    src: {
      url: 'https://picsum.photos/800/400',
      width: 800,
      height: 400,
    },
    srcSet:
      'https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w',
  },
  compact: false,
}
