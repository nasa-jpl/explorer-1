import { TopicDetailMissionSpotlightData } from '../TopicDetailMissionSpotlight/TopicDetailMissionSpotlight.stories'
import { TopicDetailMissionCarouselData } from '../TopicDetailMissionCarousel/TopicDetailMissionCarousel.stories'
import { TopicDetailMoreData } from '../TopicDetailMore/TopicDetailMore.stories'
import { TopicDetailStreamfieldData } from '../TopicDetailStreamfield/TopicDetailStreamfield.stories'
import { BlockLinkTileCarouselData } from '../BlockLinkCarousel/BlockLinkCarousel.stories.js'

import PageTopicDetail from './PageTopicDetail.vue'

export default {
  title: 'WWW/Layouts/PageTopicDetail',
  component: PageTopicDetail,
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

// data
export const TopicDetailData = {
  slug: 'mars',
  title: 'Mars',
  displayTitle: 'At Work On Mars',
  parentDisplayTitle: 'Solar System Exploration at JPL',
  strapline:
    'Robotic orbiters, landers and mobile laboratories explore Mars and communicate with Earth via the Deep Space Network.',
  heroImage: {
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
        url: 'https://source.unsplash.com/pZ-XFIrJMtE/1096x400',
        width: 1096,
        height: 400
      },
      half: {
        url: 'https://source.unsplash.com/pZ-XFIrJMtE/540x400',
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

// template
const PageTopicDetailTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageTopicDetail },
  template: `<PageTopicDetail :data="topic"/>`
})

// stories
export const Template = PageTopicDetailTemplate.bind({})
Template.storyName = 'PageTopicDetail'
Template.args = {
  topic: TopicDetailData
}
