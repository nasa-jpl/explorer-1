import { BlockLinkTileTemplate } from './BlockLinkTile.js'

export default {
  title: 'Components/Blocks/BlockLinkTile',
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
      description:
        'Use styling for condensed layouts. Also sets the tile dimensions to be a true 1:1 ratio.',
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
          'Features an image with a text overlay, with a hover effect. Recommended for use with shorter text. `BlockLinkTile` is an item type option available in `BlockLinkCarousel`.',
      },
    },
    html: {
      root: '#storyRoot',
    },
  },
}

export const Card = BlockLinkTileTemplate.bind({})
Card.storyName = 'BlockLinkTile'
Card.args = {
  url: '#',
  title: 'How engineers at NASA-JPL persevered to develop a ventilator',
  label: 'Solar System',
  secondaryLabel: 'Earth',
  image: {
    alt: 'Alt text for image',
    src: {
      url: 'https://picsum.photos/490/430',
      width: 490,
      height: 430,
    },
    srcSet:
      'https://picsum.photos/490/430 320w, https://picsum.photos/490/430 1024w',
  },
  compact: false,
}
