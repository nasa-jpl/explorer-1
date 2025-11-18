import { HeroLargeData } from './../../../components/HeroLarge/HeroLarge.stories.js'
import { RoboticsDetailStatsData } from './../../../components/RoboticsDetailStats/RoboticsDetailStats.stories.js'
import { BlockCardGridData } from './../../../components/BlockCardGrid/BlockCardGrid.stories.js'
import { BlockLinkTileCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { BlockRelatedLinksData } from './../../../components/BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockStreamfieldTruncatedData } from './../../../components/BlockStreamfield/BlockStreamfield.stories'

import PageRoboticsDetail from './PageRoboticsDetail.vue'

export default {
  title: 'Templates/WWW/PageRoboticsDetail',
  component: PageRoboticsDetail,
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

// stories
export const Template = {
  name: 'PageRoboticsDetail',
  args: {
    data: {
      ...HeroLargeData,
      ...RoboticsDetailStatsData,
      introduction:
        'FreeClimber: LEMUR 3 belongs to a new generation of robots being built at JPL that can crawl, walk and even climb rock walls. This robot was designed to operate in extreme terrains, demonstrating the applicability of its systems for possible missions to Mars, the Moon, and small bodies. It was developed under sponsorship of NASA Science Mission Directorate.',
      ...BlockStreamfieldTruncatedData,
      relatedLinks: [BlockRelatedLinksData.data],
      moreRobots: BlockLinkTileCarouselData,
      facts: BlockCardGridData
    }
  }
}
