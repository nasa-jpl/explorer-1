import { TopicDetailMissionSpotlightData } from './../../../components/TopicDetailMissionSpotlight/TopicDetailMissionSpotlight.stories'
import { TopicDetailMissionCarouselData } from './../../../components/TopicDetailMissionCarousel/TopicDetailMissionCarousel.stories'
import { TopicDetailMoreData } from './../../../components/TopicDetailMore/TopicDetailMore.stories'
import { TopicDetailStreamfieldData } from './../../../components/TopicDetailStreamfield/TopicDetailStreamfield.stories'
import { BlockLinkTileCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'

import PageTopicDetail from './PageTopicDetail.vue'

export default {
  title: 'Templates/WWW/PageTopicDetail',
  component: PageTopicDetail,
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

// data
export const TopicDetailData = {
  slug: 'mars',
  title: 'Mars',
  displayTitle: 'At Work On Mars',
  parentDisplayTitle: 'Solar System Exploration at JPL',
  strapline:
    'Robotic orbiters, landers and mobile laboratories explore Mars and communicate with Earth via the Deep Space Network.',
  listingPageHeroImage: {
    src: {
      url: 'https://picsum.photos/1800/1200',
      width: 1800,
      height: 1200
    },
    srcSet:
      'https://picsum.photos/768/548 768w, https://picsum.photos/1024/684 1024w, https://picsum.photos/1440/770 1440w,  https://picsum.photos/1800/963 1800w',
    screenMd: {
      url: 'https://picsum.photos/800/640'
    },
    screenSm: {
      url: 'https://picsum.photos/640/900'
    },
    alt: 'Topic detail hero image'
  },
  descriptionHeading: 'About Mars',
  description:
    '<p>The Gravity Recovery and Climate Experiment Follow-on (GRACE-FO) mission is a partnership between NASA and the German Research Centre for Geosciences (GFZ). GRACE-FO is a successor to the original GRACE mission, which began orbiting Earth on March 17, 2002.</p>',
  featuredMissions: TopicDetailMissionCarouselData,
  relatedMissionsLinkUrl: 'http://localhost:3000/missions?mission_target=Mars',
  relatedMissionsLinkText: 'All Mars missions',
  leadNewsItem: {
    thumbnailImage: {
      full: {
        url: 'https://picsum.photos/1096/400',
        width: 1096,
        height: 400
      },
      half: {
        url: 'https://picsum.photos/548/400',
        width: 548,
        height: 400
      }
    },
    title: 'Color Picture from Spirit is Most Detailed View of Mars Ever Seen',
    url: '/news/from-russia-with-grace/'
  },
  ...TopicDetailStreamfieldData,
  missionHighlight: TopicDetailMissionSpotlightData,
  ...TopicDetailMoreData,
  moreAboutTopicShowMoreLink: true,
  relatedTopicsHeading: 'Topic Exploration',
  relatedTopics: BlockLinkTileCarouselData
}

// stories
export const BaseStory = {
  name: 'PageTopicDetail',
  args: {
    data: TopicDetailData
  }
}
