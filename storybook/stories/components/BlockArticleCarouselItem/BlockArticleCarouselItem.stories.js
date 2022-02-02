import { BlockArticleCarouselItemTemplate } from './BlockArticleCarouselItem.js'

export default {
  title: 'Components/Blocks/BlockArticleCarousel/BlockArticleCarouselItem',
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
      `<div id="storyRoot" class="relative grid grid-cols-2 gap-3">${Story()}</div>`,
  ],
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'Single item used in `BlockArticleCarousel`',
      },
    },
    html: {
      root: '#storyRoot',
    },
  },
}

export const SingleItem = BlockArticleCarouselItemTemplate.bind({})
SingleItem.storyName = 'BlockArticleCarouselItem'
SingleItem.args = {
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
