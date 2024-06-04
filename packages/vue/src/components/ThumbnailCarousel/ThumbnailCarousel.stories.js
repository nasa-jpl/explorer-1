import ThumbnailCarousel from './ThumbnailCarousel.vue'

export default {
  title: 'WWW/Components/ThumbnailCarousel',
  components: {
    ThumbnailCarousel
  },
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
          url: 'https://source.unsplash.com/Oze6U2m1oYU/430x430',
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
          url: 'https://source.unsplash.com/Oze6U2m1oYU/430x430',
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
          url: 'https://source.unsplash.com/Oze6U2m1oYU/430x430',
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
          url: 'https://source.unsplash.com/Oze6U2m1oYU/430x430',
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
          url: 'https://source.unsplash.com/Oze6U2m1oYU/430x430',
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
          url: 'https://source.unsplash.com/Oze6U2m1oYU/430x430',
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
          url: 'https://source.unsplash.com/Oze6U2m1oYU/430x430',
          width: 430,
          height: 430
        },
        alt: 'Alt text'
      }
    }
  ]
}

// templates
const ThumbnailCarouselTemplate = (args) => ({
  props: Object.keys(args),
  components: { ThumbnailCarousel },
  template: `<ThumbnailCarousel :slides="slides" />`
})

export const Default = ThumbnailCarouselTemplate.bind({})
Default.args = ThumbnailCarouselData
