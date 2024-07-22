import { HomepageCarouselData } from './../../../components/HomepageCarousel/HomepageCarousel.stories.js'
import {
  BlockLinkCardCarouselData,
  BlockLinkTileCarouselData
} from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { BlockQuoteData } from './../../../components/BlockQuote/BlockQuote.stories'
import { HomepageEmbedBlockData } from './../../../components/HomepageEmbedBlock/HomepageEmbedBlock.stories'
import { HomepageTeaserBlockData } from './../../../components/HomepageTeaserBlock/HomepageTeaserBlock.stories.js'
import { HomepageFeaturedRobotData } from './../../../components/HomepageFeaturedRobot/HomepageFeaturedRobot.stories.js'
import { HomepageMissionsCarouselData } from './../../../components/HomepageMissionsCarousel/HomepageMissionsCarousel.stories.js'
import { HomepageStatsData } from './../../../components/HomepageStats/HomepageStats.stories.js'
import PageHomepage from './PageHomepage.vue'

export default {
  title: 'Templates/WWW/PageHomepage',
  excludeStories: /.*Data$/,
  component: PageHomepage,
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
  }
}

// data
export const PageHomepageData = {
  title: 'Home',
  heroCarousel: HomepageCarouselData,
  carouselSlideSpeed: 10000,
  featuredNewsHeading: 'Related Stories',
  featuredNews: [],
  latestNews: BlockLinkCardCarouselData,
  body: [HomepageTeaserBlockData.data, BlockQuoteData],
  relatedContentHeading: 'Engage with JPL',
  relatedContent: [
    // external link card, no image
    {
      label: 'Explore NASA',
      thumbnailImage: null,
      title: 'NASA website',
      externalLink: 'https://www.nasa.gov'
    },

    // via page chooser
    {
      page: {
        label: 'Mission',
        thumbnailImage: {
          src: {
            url: 'https://picsum.photos/490/430',
            width: 490,
            height: 430
          }
        },
        title: 'GRACE-FO',
        url: '/mission/placeholder'
      }
    },
    ...BlockLinkTileCarouselData
  ],
  featuredRobots: [{ page: HomepageFeaturedRobotData }],
  missionsCarousel: HomepageMissionsCarouselData.data,
  ...HomepageStatsData
}

// stories
export const BaseStory = {
  name: 'PageHomepage',
  args: {
    data: PageHomepageData
  }
}
export const LiveEvent = {
  args: {
    data: {
      ...PageHomepageData,
      statistics: [
        {
          blockType: 'StatisticsMissionBlock',
          heading: 'MISSIONS',
          title: 'Currently active'
        },
        {
          blockType: 'StatisticsGenericBlock',
          date: '2021-02-18T20:55:00+00:00',
          dateDisplay: 'live',
          heading: 'NEXT LANDING',
          title: 'Mars Perseverance'
        }
      ],
      featuredEmbed: HomepageEmbedBlockData
    }
  }
}
