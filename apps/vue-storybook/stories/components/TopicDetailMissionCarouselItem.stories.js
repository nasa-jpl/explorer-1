// the base component should really be a single vue component with a "type" prop where the user can select between card and list, but this works well enough for a demo atm.

import TopicDetailMissionCarouselItem from '@explorer-1/vue/src/components/TopicDetailMissionCarouselItem/TopicDetailMissionCarouselItem.vue'

export default {
  title: 'WWW/TopicDetail/MissionCarousel/TopicDetailMissionCarouselItem',
  component: TopicDetailMissionCarouselItem,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="relative lg:w-1/3"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

// shared data
export const TopicDetailMissionCarouselItemData = {
  clockType: 'time_in_orbit',
  showClock: true,
  startDateTime: '2018-10-22T19:00:00+00:00',
  status: 'current',
  thumbnailImage: {
    src: {
      url: 'https://source.unsplash.com/Q1p7bh3SHj8/560x620',
      width: 560,
      height: 620
    }
  },
  title: 'Gravity Recovery and Climate Experiment Follow-On',
  url: '/missions/gravity-recovery-and-climate-experiment-follow-on-grace-fo/'
}

// templates
const TopicDetailMissionCarouselItemTemplate = (args) => ({
  props: Object.keys(args),
  components: { TopicDetailMissionCarouselItem },
  template: `<TopicDetailMissionCarouselItem :data="data" />`
})

export const SingleItem = TopicDetailMissionCarouselItemTemplate.bind({})
SingleItem.args = { data: TopicDetailMissionCarouselItemData }
