import { ArticleCarouselItemTemplate } from './ArticleCarouselItem.js'
import { BaseImageData } from '../BaseImage/BaseImage.stories.js'

export default {
  title: 'Components/ArticleCarousel/ArticleCarouselItem',
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
SingleItem.args = {
  url: '#',
  title: 'How engineers at NASA-JPL persevered to develop a ventilator',
  label: 'Solar System',
  ...BaseImageData,
}
SingleItem.decorators = [
  (Story) =>
    `<div id="storyDecorator" class="relative grid grid-cols-2 gap-3">${Story()}</div>`,
]
SingleItem.parameters = {
  html: {
    root: '#storyDecorator',
  },
}
