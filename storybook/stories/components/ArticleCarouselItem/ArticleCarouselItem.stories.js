import { ArticleCarouselItemTemplate } from './ArticleCarouselItem.js'

export default {
  title: 'Components/Blocks/ArticleCarousel/ArticleCarouselItem',
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
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: '',
      },
    },
  },
}

export const SingleItem = ArticleCarouselItemTemplate.bind({})
SingleItem.storyName = 'ArticleCarouselItem'
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
SingleItem.decorators = [
  (Story) =>
    `<div id="storyRoot" class="relative grid grid-cols-2 gap-3">${Story()}</div>`,
]
SingleItem.parameters = {
  docs: {
    description: {
      component: 'Single item used in `ArticleCarousel`',
    },
  },
  html: {
    root: '#storyRoot',
  },
}
