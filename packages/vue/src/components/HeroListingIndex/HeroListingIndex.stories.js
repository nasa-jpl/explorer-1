import HeroListingIndex from './HeroListingIndex.vue'

export default {
  title: 'Components/Heroes/For Listing Pages',
  component: HeroListingIndex,
  parameters: {
    viewMode: 'canvas'
  },
  excludeStories: /.*Data$/
}

// data
export const HeroListingIndexData = {
  listingPage: {
    featured: {
      __typename: 'EDUExplainerArticlePage',
      topicLabel: 'Mars',
      url: '/news/new-maps-open-roads-to-research/',
      title: 'Creating Robots to go Where Humans Can’t',
      image: {
        src: {
          url: 'https://picsum.photos/id/973/1800/1200',
          width: 1800,
          height: 1200
        },
        srcSet:
          'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
        screenMd: {
          url: 'https://picsum.photos/id/921/800/640'
        },
        screenSm: {
          url: 'https://picsum.photos/id/247/640/900'
        }
      }
    }
  }
}

// templates

export const BaseStory = {
  name: 'HeroListingIndex',
  args: {
    customLabel: 'Featured',
    pageData: HeroListingIndexData.listingPage
  }
}

export const NewsImageHero = {
  args: {
    customLabel: 'Featured',
    pageData: {
      featured: {
        topicLabel: 'Mars',
        url: '/news/new-maps-open-roads-to-research/',
        title: 'Creating Robots to go Where Humans Can’t',
        heroBlocks: [
          {
            blockType: 'ImageChooserBlock',
            listingPageHeroImage: {
              src: {
                url: 'https://picsum.photos/id/973/1800/1200',
                width: 1800,
                height: 1200
              },
              srcSet:
                'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
              screenMd: {
                url: 'https://picsum.photos/id/921/800/640'
              },
              screenSm: {
                url: 'https://picsum.photos/id/247/640/900'
              }
            }
          }
        ]
      }
    }
  }
}

export const NewsVideoHero = {
  args: {
    customLabel: 'Featured',
    pageData: {
      featured: {
        topicLabel: 'Mars',
        url: '/news/new-maps-open-roads-to-research/',
        title: 'Creating Robots to go Where Humans Can’t',
        heroBlocks: [
          {
            blockType: 'VideoBlock',
            video: {
              file: '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4',
              fileWebm: '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm'
            }
          }
        ]
      }
    }
  }
}

export const NewsCarouselHero = {
  args: {
    customLabel: 'Featured',
    pageData: {
      featured: {
        topicLabel: 'Mars',
        url: '/news/new-maps-open-roads-to-research/',
        title: 'Creating Robots to go Where Humans Can’t',
        heroBlocks: [
          {
            blockType: 'CarouselBlock',
            blocks: [
              {
                listingPageHeroImage: {
                  src: {
                    url: 'https://picsum.photos/id/973/1800/1200',
                    width: 1800,
                    height: 1200
                  },
                  srcSet:
                    'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
                  screenMd: {
                    url: 'https://picsum.photos/id/921/800/640'
                  },
                  screenSm: {
                    url: 'https://picsum.photos/id/247/640/900'
                  }
                }
              },
              {
                listingPageHeroImage: {
                  src: {
                    url: 'https://picsum.photos/id/973/1800/1200',
                    width: 1800,
                    height: 1200
                  },
                  srcSet:
                    'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
                  screenMd: {
                    url: 'https://picsum.photos/id/921/800/640'
                  },
                  screenSm: {
                    url: 'https://picsum.photos/id/247/640/900'
                  }
                }
              }
            ]
          }
        ]
      }
    }
  }
}
