import { HeroLargeData } from '../HeroLarge/HeroLarge.stories.js'
import { BlockStreamfieldData } from '../BlockStreamfield/BlockStreamfield.stories'
import { BlockLinkCardCarouselData } from '../BlockLinkCarousel/BlockLinkCarousel.stories.js'
import PageAsteroidWatchIndex from './PageAsteroidWatchIndex.vue'

export default {
  title: 'WWW/Layouts/PageAsteroidWatchIndex',
  component: PageAsteroidWatchIndex,
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
  excludeStories: /.*(Data)$/
}

// template
const PageAsteroidWatchIndexTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageAsteroidWatchIndex },
  template: `<PageAsteroidWatchIndex :data="data"/>`
})

// stories
export const Template = PageAsteroidWatchIndexTemplate.bind({})
Template.storyName = 'PageAsteroidWatchIndex'
Template.args = {
  data: {
    ...HeroLargeData,
    title: 'Asteroid Watch',
    body: BlockStreamfieldData.body,
    latestAsteroidNews: BlockLinkCardCarouselData
  }
}
