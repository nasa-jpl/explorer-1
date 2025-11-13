import { HeroLargeData } from './../../../components/HeroLarge/HeroLarge.stories.js'
import { BlockStreamfieldData } from './../../../components/BlockStreamfield/BlockStreamfield.stories'
import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import PageAsteroidWatchIndex from './PageAsteroidWatchIndex.vue'

export default {
  title: 'Templates/WWW/PageAsteroidWatchIndex',
  component: PageAsteroidWatchIndex,
  tags: ['!autodocs'],
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    layout: 'fullscreen',
    html: {
      root: '#storyRoot'
    }
  },
  excludeStories: /.*(Data)$/
}

export const BaseStory = {
  name: 'PageAsteroidWatchIndex',
  args: {
    data: {
      description:
        'Crawl, walk and even climb rock walls, this robot was designed to operate in extreme terrains.',
      listingPageHeroImage: {
        // beach
        src: {
          url: 'https://picsum.photos/id/973/1800/1200',
          width: 1800,
          height: 1200
        },
        // lake
        srcSet:
          'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
        // jungle
        screenMd: {
          url: 'https://picsum.photos/id/921/800/640'
        },
        // desert
        screenSm: {
          url: 'https://picsum.photos/id/247/640/900'
        },
        alt: 'Robotics detail page hero image'
      },
      title: 'Asteroid Watch',
      body: BlockStreamfieldData.body,
      latestAsteroidNews: BlockLinkCardCarouselData
    }
  }
}
