import PodcastSeriesCarousel from './PodcastSeriesCarousel.vue'

export default {
  title: 'WWW/PodcastDetail/PodcastSeriesCarousel',
  component: PodcastSeriesCarousel,
  parameters: {
    docs: {
      description: {
        component:
          'A tabbed carousel of podcast seasons based on series. If a season `id` is provided, the carousel will default to showing that season. If the user is currently on an episode page within the displayed season, that episode will be the active slide in the carousel.'
      }
    }
  },
  excludeStories: /.*Data$/
}

export const PodcastSeriesCarouselData = {
  parent: {
    id: '302'
  },
  series: {
    id: '300',
    url: '/podcasts/on-a-mission',

    seasons: [
      {
        id: '301',
        url: '/podcasts/on-a-mission/season-1',
        title: 'Season 1: The InSight Mission to Mars',
        seasonNumber: 1,
        episodes: [
          {
            url: '/podcasts/on-a-mission/season-1/episode-1',
            title: 'Season 1, Episode 1: Lorem ipsum dolor',
            publicationDate: '2021-10-01',
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
            title: 'Season 1, Episode 2: Lorem ipsum dolor',
            publicationDate: '2021-10-02',
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
            title: 'Season 1, Episode 3: Lorem ipsum dolor',
            publicationDate: '2021-10-03',
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
            title: 'Season 1, Episode 4: Lorem ipsum dolor',
            publicationDate: '2021-10-04',
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
            title: 'Season 1, Episode 5: Lorem ipsum dolor',
            publicationDate: '2021-10-05',
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
            title: 'Season 1, Episode 6: Lorem ipsum dolor',
            publicationDate: '2021-10-06',
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
            title: 'Season 1, Episode 7: Lorem ipsum dolor',
            publicationDate: '2021-10-07',
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
      },
      {
        id: '302',
        url: '/podcasts/on-a-mission/season-2',
        title: 'Season 2: Asteroids!',
        seasonNumber: 2,
        episodes: [
          {
            url: '/podcasts/on-a-mission/season-2/episode-1',
            title: 'Season 2, Episode 1: Sit amet consectatur',
            publicationDate: '2021-11-01',
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
            url: '/podcasts/on-a-mission/season-2/episode-2',
            title: 'Season 2, Episode 2: Sit amet consectatur',
            publicationDate: '2021-11-02',
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
            url: '/podcasts/on-a-mission/season-2/episode-3',
            title: 'Season 2, Episode 3: Sit amet consectatur',
            publicationDate: '2021-11-03',
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
            url: '/podcasts/on-a-mission/season-2/episode-4',
            title: 'Season 2, Episode 4: Sit amet consectatur',
            publicationDate: '2021-11-04',
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
            url: '/podcasts/on-a-mission/season-2/episode-5',
            title: 'Season 2, Episode 5: Sit amet consectatur',
            publicationDate: '2021-11-05',
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
            url: '/podcasts/on-a-mission/season-2/episode-6',
            title: 'Season 2, Episode 6: Sit amet consectatur',
            publicationDate: '2021-11-06',
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
            url: '/podcasts/on-a-mission/season-2/episode-7',
            title: 'Season 2, Episode 7: Sit amet consectatur',
            publicationDate: '2021-11-07',
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
    ]
  }
}

export const BaseStory = {
  args: {
    series: PodcastSeriesCarouselData.series,
    initialSeasonId: PodcastSeriesCarouselData.parent?.id
      ? PodcastSeriesCarouselData.parent.id
      : null
  }
}
