import ThumbnailCarousel from './ThumbnailCarousel.vue'

export default {
  title: 'Components/ThumbnailCarousel',
  component: ThumbnailCarousel,
  parameters: {
    docs: {
      description: {
        component:
          'Ideal for use in a tabbed carousel. See `PodcastSeriesCarousel` and `PageImageDetail` for usage examples. Styled with three cards and a basic card style with a square image.'
      }
    }
  },
  excludeStories: /.*Data$/
}

export const ThumbnailCarouselData = {
  slides: [
    {
      url: '/podcasts/on-a-mission/season-1/episode-1',
      title: 'Episode 1',
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/430/430',
          width: 430,
          height: 430
        },
        alt: 'Alt text'
      }
    },
    {
      url: '/podcasts/on-a-mission/season-1/episode-2',
      title: 'Episode 2',
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/430/430',
          width: 430,
          height: 430
        },
        alt: 'Alt text'
      }
    },
    {
      url: '/podcasts/on-a-mission/season-1/episode-3',
      title: 'Episode 3',
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/430/430',
          width: 430,
          height: 430
        },
        alt: 'Alt text'
      }
    },
    {
      url: '/podcasts/on-a-mission/season-1/episode-4',
      title: 'Episode 4',
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/430/430',
          width: 430,
          height: 430
        },
        alt: 'Alt text'
      }
    },
    {
      url: '/podcasts/on-a-mission/season-1/episode-5',
      title: 'Episode 5',
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/430/430',
          width: 430,
          height: 430
        },
        alt: 'Alt text'
      }
    },
    {
      url: '/podcasts/on-a-mission/season-1/episode-6',
      title: 'Episode 6',
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/430/430',
          width: 430,
          height: 430
        },
        alt: 'Alt text'
      }
    },
    {
      url: '/podcasts/on-a-mission/season-1/episode-7',
      title: 'Episode 7',
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/430/430',
          width: 430,
          height: 430
        },
        alt: 'Alt text'
      }
    }
  ]
}

export const Default = { args: ThumbnailCarouselData }
