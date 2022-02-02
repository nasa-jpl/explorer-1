import { BlockArticleCarouselTemplate } from './BlockArticleCarousel.js'
export default {
  title: 'Components/Blocks/BlockArticleCarousel',
  argTypes: {
    items: {
      type: { name: 'Array', required: true },
      description:
        'Array of slide data objects. See `BlockArticleCarouselItem` for data structure.',
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: { inlineStories: false, iframeHeight: 650 },
    themes: {
      clearable: false,
      list: [
        {
          name: 'ThemeLight',
          class: ['ThemeLight', 'sbdocs-preview-full-width'],
          color: '#ffffff',
          default: true,
        },
        {
          name: 'ThemeDark',
          class: ['ThemeDark', 'sbdocs-preview-full-width'],
          color: '#000000',
        },
      ],
    },
  },
  excludeStories: /.*Data$/,
}

const BlockArticleCarouselData = [
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

export const Carousel = BlockArticleCarouselTemplate.bind({})
Carousel.args = {
  heading: 'Related Pages',
  items: BlockArticleCarouselData,
}

export const TwoSlides = BlockArticleCarouselTemplate.bind({})
TwoSlides.args = {
  heading: 'Related Pages',
  items: BlockArticleCarouselData.slice(0, 2),
}
