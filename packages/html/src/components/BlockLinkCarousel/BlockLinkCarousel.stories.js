import { BlockLinkCarouselTemplate } from './BlockLinkCarousel.js'
export default {
  title: 'Components/Blocks/BlockLinkCarousel',
  argTypes: {
    itemType: {
      type: 'string',
      description: 'Type of item used for each slide',
      control: {
        type: 'select',
        options: ['BlockLinkCard', 'BlockLinkTile']
      },
      table: {
        defaultValue: { summary: 'BlockLinkCard' }
      }
    },
    items: {
      type: { name: 'Array', required: true },
      description: 'Array of slide data objects. See `BlockLinkCard` for data structure.'
    }
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      inlineStories: false,
      iframeHeight: 650,
      description: {
        component: 'A mixed-bleed carousel with more than one slide visible at a time.'
      }
    }
  },
  excludeStories: /.*Data$/
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
        height: 288
      },
      alt: 'Alt text'
    }
  },
  {
    url: '#',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-2',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/512/288',
        width: 512,
        height: 288
      },
      alt: 'Alt text'
    }
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
        height: 288
      },
      alt: 'Alt text'
    }
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
        height: 288
      },
      alt: 'Alt text'
    }
  }
]

export const BaseStory = BlockLinkCarouselTemplate.bind({})
BaseStory.storyName = 'Carousel'
BaseStory.args = {
  heading: 'Related Pages',
  items: BlockLinkCarouselData
}

export const TwoSlides = BlockLinkCarouselTemplate.bind({})
TwoSlides.args = {
  heading: 'Related Pages',
  items: BlockLinkCarouselData.slice(0, 2)
}
