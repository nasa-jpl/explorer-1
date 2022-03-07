import { BlockLinkTileTemplate } from './BlockLinkTile.js'

export default {
  title: 'Components/Blocks/BlockLinkTile',
  argTypes: {
    url: {
      type: { name: 'string', required: true },
    },
  },
  decorators: [
    (Story) =>
      `<div class="container"><div id="storyRoot" class="md:w-1/2">${Story()}</div></div>`,
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
}
