import { BaseVideoData } from './../BaseVideo/BaseVideo.stories'
import HomepageCarouselItem from './HomepageCarouselItem.vue'

export default {
  title: 'WWW/Homepage/HomepageCarousel/HomepageCarouselItem',
  component: HomepageCarouselItem,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="max-w-screen-3xl mx-auto"><story/></div>`
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
export const HomepageCarouselItemData = {
  item: {
    heading: 'DARE MIGHTY THINGS',
    page: {
      url: '/news/new-maps-open-roads-to-research/'
    },
    externalLink: 'https://mars.nasa.gov',
    slideTitle: 'Creating Robots to go Where Humans Can’t',
    video: BaseVideoData,
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

export const BaseStory = {
  name: 'Single Item',
  args: {
    item: {
      ...HomepageCarouselItemData.item,
      video: null
    }
  }
}

export const WithVideo = {
  args: HomepageCarouselItemData
}
