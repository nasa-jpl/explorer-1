import HomepageStats from './HomepageStats.vue'

export default {
  title: 'Components/WWW/Homepage/HomepageStats',
  component: HomepageStats,
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'canvas'
  }
}

export const HomepageStatsData = {
  asteroidWatchWidget: {
    asteroidApproach: {
      date: '2020-12-21',
      distanceKilometers: 4150000,
      distanceMiles: 2580000,
      externalLink: 'https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2017%20XQ60;orb=1'
    },
    heading: 'ASTEROID WATCH',
    title: 'Next close approach'
  },
  dsnWidget: {
    heading: 'DEEP SPACE NETWORK',
    location: 'Goldstone',
    spacecraftName: 'MMS 1',
    transmitStatus: 'both',
    transmitTitle: 'Currently transmitting'
  },
  statistics: [
    {
      blockType: 'StatisticsMissionBlock',
      heading: 'MISSIONS',
      title: 'Currently active'
    },
    {
      blockType: 'StatisticsGenericBlock',
      date: '2021-02-03T12:55:00-08:00',
      dateDisplay: 'countdown',
      heading: 'NEXT LANDING',
      title: 'Custom title'
    }
  ],
  statisticsMissionCount: 43,
  featuredEmbed: []
}

const HomepageStatsTemplate = (args) => ({
  props: Object.keys(args),
  components: { HomepageStats },
  template: `<HomepageStats
    :statistics="statistics"
    :mission-count="statisticsMissionCount"
    :dsn="dsnWidget"
    :asteroid-watch="asteroidWatchWidget"
    :featured-embed="featuredEmbed"
  />`
})

export const BaseStory = HomepageStatsTemplate.bind({})
BaseStory.args = HomepageStatsData

export const StaticDate = HomepageStatsTemplate.bind({})
StaticDate.args = {
  ...HomepageStatsData,
  statistics: [
    {
      blockType: 'StatisticsMissionBlock',
      heading: 'MISSIONS',
      title: 'Currently active'
    },
    {
      blockType: 'StatisticsGenericBlock',
      date: '2021-02-18T12:55:00-08:00',
      dateDisplay: 'static',
      heading: 'NEXT LANDING',
      title: 'Mars Perseverance'
    }
  ]
}

export const TimeElapsed = HomepageStatsTemplate.bind({})
TimeElapsed.args = {
  ...HomepageStatsData,
  statistics: [
    {
      blockType: 'StatisticsMissionBlock',
      heading: 'MISSIONS',
      title: 'Currently active'
    },
    {
      blockType: 'StatisticsGenericBlock',
      date: '2021-02-18T12:55:00-08:00',
      dateDisplay: 'time_elapsed',
      heading: 'TIME ON MARS',
      title: 'Mars Perseverance'
    }
  ]
}

export const WatchLive = HomepageStatsTemplate.bind({})
WatchLive.args = {
  ...HomepageStatsData,
  statistics: [
    {
      blockType: 'StatisticsMissionBlock',
      heading: 'MISSIONS',
      title: 'Currently active'
    },
    {
      blockType: 'StatisticsGenericBlock',
      date: '2021-02-18T12:55:00-08:00',
      dateDisplay: 'live',
      heading: 'NEXT LANDING',
      title: 'Mars Perseverance'
    }
  ],
  featuredEmbed: [
    {
      heading: 'Watch Live',
      display: true
    }
  ]
}

export const WatchLiveNoVideo = HomepageStatsTemplate.bind({})
WatchLiveNoVideo.args = {
  ...HomepageStatsData,
  statistics: [
    {
      blockType: 'StatisticsMissionBlock',
      heading: 'MISSIONS',
      title: 'Currently active'
    },
    {
      blockType: 'StatisticsGenericBlock',
      date: '2021-02-18T12:55:00-08:00',
      dateDisplay: 'live',
      heading: 'NEXT LANDING',
      title: 'Mars Perseverance'
    }
  ]
}

export const NoDsn = HomepageStatsTemplate.bind({})
NoDsn.args = {
  ...HomepageStatsData,
  dsnWidget: {
    heading: 'DEEP SPACE NETWORK',
    location: '',
    spacecraftName: null,
    transmitStatus: '',
    transmitTitle: ''
  }
}
