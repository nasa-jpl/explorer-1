import { ArticleCarouselTemplate } from './ArticleCarousel.js'
// import { useEffect, useGlobals } from '@storybook/addons'
// const runScript = require('../../../../src/js/_swiper.js')
// maybe this: https://github.com/storybookjs/storybook/issues/6113
export default {
  title: 'Components/ArticleCarousel',
  decorators: [
    (Story) => `<div id="storyDecorator" class="w-full">${Story()}</div>`,
  ],
  parameters: {
    html: {
      root: '#storyDecorator',
    },
    viewMode: 'canvas',
  },
  excludeStories: /.*Data$/,
}

const ArticleCarouselData = [
  {
    url: '#',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-1',
    label: 'Mars',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/OLlj17tUZnU/512x288',
        width: 512,
        height: 288,
      },
      alt: 'Alt text',
    },
  },
  {
    url: '#',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-2',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/NuE8Nu3otjo/512x288',
        width: 512,
        height: 288,
      },
      alt: 'Alt text',
    },
  },
  {
    url: '#',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-3',
    label: 'Solar System',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/Q1p7bh3SHj8/512x288',
        width: 512,
        height: 288,
      },
      alt: 'Alt text',
    },
  },
  {
    url: '#',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-4',
    label: 'Technology',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/WIlvkeCScuE/512x288',
        width: 512,
        height: 288,
      },
      alt: 'Alt text',
    },
  },
]

export const Carousel = ArticleCarouselTemplate.bind({})
Carousel.args = {
  heading: 'Related Pages',
  items: ArticleCarouselData,
}

export const TwoSlides = ArticleCarouselTemplate.bind({})
TwoSlides.args = {
  heading: 'Related Pages',
  items: ArticleCarouselData.slice(0, 2),
}
