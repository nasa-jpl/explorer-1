import TopicDetailMissionSpotlight from '@explorer-1/vue/src/components/TopicDetailMissionSpotlight/TopicDetailMissionSpotlight.vue'
export default {
  title: 'WWW/TopicDetail/TopicDetailMissionSpotlight',
  component: TopicDetailMissionSpotlight,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0"><story/></div>`
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

export const TopicDetailMissionSpotlightData = {
  url: '/missions/slug',
  title: 'GRACE-FO',
  summary: "The GRACE missions measure variations in gravity over Earth's surface. ",
  heroImage: {
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
    alt: 'Topic detail mission spotlight'
  },
  showClock: true,
  showDistance: true,
  clockType: 'time_in_orbit',
  startDateTime: '2020-10-14 10:04:21+01:00',
  distanceType: 'earth',
  distanceValue: 4986444,
  distanceApiUrls: ''
}

// template
const TopicDetailMissionSpotlightTemplate = (args) => ({
  props: Object.keys(args),
  components: { TopicDetailMissionSpotlight },
  template: `<TopicDetailMissionSpotlight :data="mission" />`
})

// stories
export const MissionSpotlight = TopicDetailMissionSpotlightTemplate.bind({})
MissionSpotlight.args = {
  mission: TopicDetailMissionSpotlightData
}

export const NoClock = TopicDetailMissionSpotlightTemplate.bind({})
NoClock.args = {
  mission: {
    ...TopicDetailMissionSpotlightData,
    showClock: false
  }
}

export const NoDistance = TopicDetailMissionSpotlightTemplate.bind({})
NoDistance.args = {
  mission: {
    ...TopicDetailMissionSpotlightData,
    showDistance: false
  }
}

export const NoStats = TopicDetailMissionSpotlightTemplate.bind({})
NoStats.args = {
  mission: {
    ...TopicDetailMissionSpotlightData,
    showClock: false,
    showDistance: false
  }
}
