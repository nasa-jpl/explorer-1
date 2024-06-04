import { HeroLargeData } from '../HeroLarge/HeroLarge.stories.js'
import { RoboticsDetailStatsData } from '../RoboticsDetailStats/RoboticsDetailStats.stories.js'
import { BlockCardGroupData } from '../BlockCardGroup/BlockCardGroup.stories.js'
import { BlockLinkTileCarouselData } from '../BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { BlockRelatedLinksData } from '../BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockStreamfieldData } from '../BlockStreamfield/BlockStreamfield.stories'

import PageRoboticsDetail from './PageRoboticsDetail.vue'

export default {
  title: 'WWW/Layouts/PageRoboticsDetail',
  component: PageRoboticsDetail,
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
const PageRoboticsDetailTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageRoboticsDetail },
  template: `<PageRoboticsDetail :data="robot"/>`
})

// stories
export const Template = PageRoboticsDetailTemplate.bind({})
Template.storyName = 'PageRoboticsDetail'
Template.args = {
  robot: {
    ...HeroLargeData,
    ...RoboticsDetailStatsData,
    introduction:
      'FreeClimber: LEMUR 3 belongs to a new generation of robots being built at JPL that can crawl, walk and even climb rock walls. This robot was designed to operate in extreme terrains, demonstrating the applicability of its systems for possible missions to Mars, the Moon, and small bodies. It was developed under sponsorship of NASA Science Mission Directorate.',
    ...BlockStreamfieldData,
    relatedLinks: [BlockRelatedLinksData.data],
    moreRobots: BlockLinkTileCarouselData,
    facts: BlockCardGroupData
  }
}
