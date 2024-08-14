import BlockLinkCarousel, { itemTypes } from './BlockLinkCarousel.vue'

export default {
  title: 'Components/Blocks/BlockLinkCarousel',
  component: BlockLinkCarousel,
  argTypes: {
    itemType: {
      type: 'string',
      description: 'Type of item used for each slide',
      control: {
        type: 'select'
      },
      options: Object.keys(itemTypes),
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
        url: 'https://picsum.photos/512/288',
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
        url: 'https://picsum.photos/512/288',
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
        url: 'https://picsum.photos/512/288',
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
        url: 'https://picsum.photos/512/288',
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
        url: 'https://picsum.photos/490/430',
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
        url: 'https://picsum.photos/490/430',
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
        url: 'https://picsum.photos/490/430',
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
        url: 'https://picsum.photos/490/430',
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
        url: 'https://picsum.photos/512/288',
        width: '512'
      }
    },
    title: 'Past event',
    url: '/events/becoming-a-nasa-engineer',
    startDatetime: '2019-11-11T00:00:00-08:00',
    ongoing: false,
    isVirtualEvent: false,
    endDatetime: null,
    eventType: 'Internship',
    locationName: 'Webcast',
    locationLink: 'https://www.nasa.gov',
    customDate: undefined
  },
  {
    endDate: '2021-12-1',
    startDate: '2021-11-27',
    thumbnailImage: {
      src: {
        height: '288',
        url: 'https://picsum.photos/512/288',
        width: '512'
      }
    },
    title: 'Future event',
    eventType: 'Workshop',
    url: '/events/becoming-a-nasa-engineer',
    startDatetime: '2021-11-11T00:00:00-08:00',
    ongoing: false,
    isVirtualEvent: false,
    endDatetime: '2021-12-01T23:59:59.999999-08:00',
    locationName: 'Webcast',
    locationLink: 'https://www.nasa.gov',
    customDate: undefined
  },
  {
    endDate: '2021-12-1',
    startDate: '2021-11-27',
    thumbnailImage: {
      src: {
        height: '288',
        url: 'https://picsum.photos/512/288',
        width: '512'
      }
    },
    title: 'Custom event',
    eventType: 'Workshop',
    url: '/events/becoming-a-nasa-engineer',
    startDatetime: '2021-11-11T00:00:00-08:00',
    customDate: 'Custom date goes here',
    ongoing: false,
    isVirtualEvent: false,
    endDatetime: '2021-12-01T23:59:59.999999-08:00',
    locationName: 'Webcast',
    locationLink: 'https://www.nasa.gov'
  },
  {
    endDate: '2021-12-1',
    startDate: '2021-11-27',
    thumbnailImage: {
      src: {
        height: '288',
        url: 'https://picsum.photos/512/288',
        width: '512'
      }
    },
    title: 'Ongoing event',
    url: '/events/becoming-a-nasa-engineer',
    startDatetime: '2021-11-11T00:00:00-08:00',
    customDate: 'Custom date goes here',
    ongoing: true,
    isVirtualEvent: false,
    endDatetime: '2021-12-01T23:59:59.999999-08:00',
    locationName: 'Webcast',
    locationLink: 'https://www.nasa.gov'
  }
]

const BlockLinkCarouselMultipleTemplate = (args) => ({
  components: { BlockLinkCarousel },
  setup() {
    return { args }
  },
  template: `<div><BlockLinkCarousel class="mb-20" v-bind="args[0]" /><BlockLinkCarousel v-bind="args[1]" /></div>`
})

// stories
export const BaseStory = {
  name: 'Card Carousel',
  args: {
    itemType: 'cards',
    heading: 'Related Pages',
    items: BlockLinkCardCarouselData
  }
}

export const TileCarousel = {
  args: {
    itemType: 'tiles',
    heading: 'Explore More',
    items: BlockLinkCardCarouselData
  }
}

export const MoreEventsCarousel = {
  args: {
    itemType: 'cards',
    heading: 'More Events',
    items: EventsBlockLinkCarouselData
  }
}

export const TwoItems = {
  args: {
    itemType: 'cards',
    heading: 'Related Pages',
    items: BlockLinkCardCarouselData.slice(0, 2)
  }
}

export const MultipleCarousels = BlockLinkCarouselMultipleTemplate.bind({})
MultipleCarousels.args = [
  {
    itemType: 'cards',
    heading: 'Related Pages',
    otherHeading: 'Explore More',
    items: BlockLinkCardCarouselData
  },
  {
    itemType: 'cards',
    heading: 'More Related Pages',
    otherHeading: 'Explore Even More',
    items: BlockLinkCardCarouselData
  }
]
