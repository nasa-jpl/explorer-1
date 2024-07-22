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
      template: `<div id="storyDecorator" class="disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    layout: 'fullscreen',
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*(Data)$/
}

export const BaseStory = {
  name: 'PageAsteroidWatchIndex',
  args: {
    data: {
      ...HeroLargeData,
      title: 'Asteroid Watch',
      body: BlockStreamfieldData.body,
      latestAsteroidNews: BlockLinkCardCarouselData
    }
  }
}
