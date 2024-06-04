import videoMp4 from '../../.storybook/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4'
import videoWebm from '../../.storybook/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm'
import PageListingIndex from './PageListingIndex.vue'

export default {
  title: 'WWW/Layouts/PageListingIndex',
  components: {
    PageListingIndex
  },
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0 disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    viewMode: 'canvas'
  },
  excludeStories: /.*Data$/
}

// data
export const PageListingIndexData = {
  listingPage: {
    featured: {
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
const PageListingIndexTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageListingIndex },
  template: `<div><PageListingIndex custom-label="Featured" :page-data="listingPage" /><div class="container mx-auto">The rest of the page goes here (searchHelpers mixin)</div></div>`
})

export const Default = PageListingIndexTemplate.bind({})
Default.args = { ...PageListingIndexData }

export const NewsImageHero = PageListingIndexTemplate.bind({})
NewsImageHero.args = {
  listingPage: {
    featured: {
      url: '/news/new-maps-open-roads-to-research/',
      title: 'Creating Robots to go Where Humans Can’t',
      heroBlocks: [
        {
          blockType: 'ImageChooserBlock',
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
      ]
    }
  }
}
export const NewsVideoHero = PageListingIndexTemplate.bind({})
NewsVideoHero.args = {
  listingPage: {
    featured: {
      url: '/news/new-maps-open-roads-to-research/',
      title: 'Creating Robots to go Where Humans Can’t',
      heroBlocks: [
        {
          blockType: 'VideoBlock',
          video: {
            file: videoMp4,
            fileWebm: videoWebm
          }
        }
      ]
    }
  }
}
export const NewsCarouselHero = PageListingIndexTemplate.bind({})
NewsCarouselHero.args = {
  listingPage: {
    featured: {
      url: '/news/new-maps-open-roads-to-research/',
      title: 'Creating Robots to go Where Humans Can’t',
      heroBlocks: [
        {
          blockType: 'CarouselBlock',
          blocks: [
            {
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
            },
            {
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
          ]
        }
      ]
    }
  }
}
