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

const BlockLinkCarouselData = [
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
      src_webp:
        'https://images.unsplash.com/photo-1447433865958-f402f562b843?fit=crop&crop=entropy&cs=tinysrgb&w=512&h=288&q=80&fm=webp',
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
      src_webp:
        'https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?fit=crop&crop=entropy&cs=tinysrgb&w=512&h=288&q=80&fm=webp',
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
      src_webp:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&crop=entropy&cs=tinysrgb&w=512&h=288&q=80&fm=webp',
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
      src_webp:
        'https://images.unsplash.com/photo-1597322054151-cdb3e1236362?fit=crop&crop=entropy&cs=tinysrgb&w=512&h=288&q=80&fm=webp',
      alt: 'Alt text',
    },
  },
]

export const Carousel = BlockLinkCarouselTemplate.bind({})
Carousel.args = {
  heading: 'Related Pages',
  items: BlockLinkCarouselData,
}

export const TwoSlides = BlockLinkCarouselTemplate.bind({})
TwoSlides.args = {
  heading: 'Related Pages',
  items: BlockLinkCarouselData.slice(0, 2),
}
