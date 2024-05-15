import { BlockLinkCarouselTemplate } from './BlockLinkCarousel.js'
export default {
  title: 'Components/Blocks/BlockLinkCarousel',
  argTypes: {
    itemType: {
      type: 'string',
      description: 'Type of item used for each slide',
      control: {
        type: 'select',
        options: ['BlockLinkCard', 'BlockLinkTile'],
      },
      table: {
        defaultValue: { summary: 'BlockLinkCard' },
      },
    },
    items: {
      type: { name: 'Array', required: true },
      description:
        'Array of slide data objects. See `BlockLinkCard` for data structure.',
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      inlineStories: false,
      iframeHeight: 650,
      description: {
        component:
          'A mixed-bleed carousel with more than one slide visible at a time.',
      },
    },
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
        {
          name: 'ThemeInternal',
          class: ['ThemeInternal', 'sbdocs-preview-full-width'],
          color: '#53C8ED',
        },
      ],
    },
  },
  excludeStories: /.*Data$/,
}

const BlockLinkCarouselData = [
  {
    url: '#',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-1',
    label: 'Mars',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/512/288',
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
        url: 'https://picsum.photos/512/288',
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
        url: 'https://picsum.photos/512/288',
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
        url: 'https://picsum.photos/512/288',
        width: 512,
        height: 288,
      },
      alt: 'Alt text',
    },
  },
]

export const Default = BlockLinkCarouselTemplate.bind({})
Default.storyName = 'Carousel'
Default.args = {
  heading: 'Related Pages',
  items: BlockLinkCarouselData,
}

export const TwoSlides = BlockLinkCarouselTemplate.bind({})
TwoSlides.args = {
  heading: 'Related Pages',
  items: BlockLinkCarouselData.slice(0, 2),
}
