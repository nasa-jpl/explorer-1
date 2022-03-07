import { BlockLinkCardTemplate } from './BlockLinkCard.js'

export default {
  title: 'Components/Blocks/BlockLinkCard',
  argTypes: {
    url: {
      type: { name: 'string', required: true },
    },
    objectFitClass: {
      table: { disable: true },
    },
    imageClass: {
      table: { disable: true },
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
}
