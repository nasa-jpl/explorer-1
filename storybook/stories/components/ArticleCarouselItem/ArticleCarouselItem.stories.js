import { ArticleCarouselItemTemplate } from './ArticleCarouselItem.js'

export default {
  title: 'Components/ArticleCarousel/ArticleCarouselItem',
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: '',
      },
    },
    html: {
      root: '#storyDecorator',
    },
  },
}

export const SingleItem = ArticleCarouselItemTemplate.bind({})
SingleItem.args = {
  url: '#',
  title: 'How engineers at NASA-JPL persevered to develop a ventilator',
  label: 'Solar System',
 }
 SingleItem.decorators = [
  (Story) => `<div id="storyDecorator" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3">${Story()}</div>`,
]