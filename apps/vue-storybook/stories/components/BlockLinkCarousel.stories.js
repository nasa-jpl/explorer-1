import BlockLinkCarousel, {
  itemTypes
} from '@explorer-1/vue/src/components/BlockLinkCarousel/BlockLinkCarousel.vue'

export default {
  title: 'Components/Blocks/BlockLinkCarousel',
  component: BlockLinkCarousel,
  argTypes: {
    itemType: {
      type: 'string',
      description: 'Type of item used for each slide',
      control: {
        type: 'select',
        options: Object.keys(itemTypes)
      },
      table: {
        defaultValue: { summary: 'cards' }
      }
    }
  },
  excludeStories: /.*Data$/
}

export const BlockLinkCardCarouselData = [
  {
    url: '/news/placeholder-slug-1',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-1',
    label: 'Mars',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/OLlj17tUZnU/512x288',
        width: 512,
        height: 288
      },
      alt: 'Alt text'
    }
  },
  {
    url: '/news/placeholder-slug-2',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-2',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/NuE8Nu3otjo/512x288',
        width: 512,
        height: 288
      },
      alt: 'Alt text'
    }
  },
  {
    url: '/news/placeholder-slug-3',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-3',
    label: 'Solar System',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/Q1p7bh3SHj8/512x288',
        width: 512,
        height: 288
      },
      alt: 'Alt text'
    }
  },
  {
    url: '/news/placeholder-slug-4',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-4',
    label: 'Technology',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/WIlvkeCScuE/512x288',
        width: 512,
        height: 288
      },
      alt: 'Alt text'
    }
  }
]

export const BlockLinkTileCarouselData = [
  {
    url: '/topics/placeholder-slug-1',
    title: 'Perseverance',
    label: 'Mars',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/WIlvkeCScuE/490x430',
        width: 490,
        height: 430
      },
      alt: 'Alt text'
    }
  },
  {
    url: '/topics/placeholder-slug-2',
    title: 'OCO-2',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/yZygONrUBe8/490x430',
        width: 490,
        height: 430
      },
      alt: 'Alt text'
    }
  },
  {
    url: '/topics/placeholder-slug-3',
    title: 'Mars 2020',
    label: 'Solar System',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/EOQFwqmzfeY/490x430',
        width: 490,
        height: 430
      },
      alt: 'Alt text'
    }
  },
  {
    url: '/topics/placeholder-slug-4',
    title: 'Lorem ipsum dolor sit amet',
    label: 'Mars',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/t7EL2iG3jMc/490x430',
        width: 490,
        height: 430
      },
      alt: 'Alt text'
    }
  }
]

export const EventsBlockLinkCarouselData = [
  {
    endDate: null,
    startDate: '2019-11-11',
    thumbnailImage: {
      src: {
        height: '288',
        url: 'https://source.unsplash.com/OLlj17tUZnU/512x288',
        width: '512'
      }
    },
    title: 'Past event',
    url: '/events/becoming-a-nasa-engineer'
  },
  {
    endDate: null,
    startDate: '2021-11-27',
    thumbnailImage: {
      src: {
        height: '288',
        url: 'https://source.unsplash.com/OLlj17tUZnU/512x288',
        width: '512'
      }
    },
    title: 'Future event',
    url: '/events/becoming-a-nasa-engineer'
  }
]

// template
const BlockLinkCarouselTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockLinkCarousel },
  template: `<BlockLinkCarousel :itemType="itemType" :heading="heading" :items="items"/>`
})

const BlockLinkCarouselMultipleTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockLinkCarousel },
  template: `<div><BlockLinkCarousel class="mb-20" :itemType="itemType" :heading="heading" :items="items"/><BlockLinkCarousel item-type="cards" :heading="otherHeading" :items="items"/></div>`
})

// stories
export const CardCarousel = BlockLinkCarouselTemplate.bind({})
CardCarousel.args = {
  itemType: 'cards',
  heading: 'Related Pages',
  items: BlockLinkCardCarouselData
}

export const TileCarousel = BlockLinkCarouselTemplate.bind({})
TileCarousel.args = {
  itemType: 'tiles',
  heading: 'Explore more',
  items: BlockLinkTileCarouselData
}

export const MoreEventsCarousel = BlockLinkCarouselTemplate.bind({})
MoreEventsCarousel.args = {
  itemType: 'cards',
  heading: 'More Events',
  items: EventsBlockLinkCarouselData
}

export const TwoItems = BlockLinkCarouselTemplate.bind({})
TwoItems.args = {
  itemType: 'cards',
  heading: 'Related Pages',
  items: BlockLinkCardCarouselData.slice(0, 2)
}

export const MultipleCarousels = BlockLinkCarouselMultipleTemplate.bind({})
MultipleCarousels.args = {
  itemType: 'cards',
  heading: 'Related Pages',
  otherHeading: 'Explore More',
  items: BlockLinkCardCarouselData
}
