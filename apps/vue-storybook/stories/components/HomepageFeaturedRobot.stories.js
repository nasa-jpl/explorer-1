import HomepageFeaturedRobot from '@explorer-1/vue/src/components/HomepageFeaturedRobot/HomepageFeaturedRobot.vue'
export default {
  title: 'WWW/Components/Homepage/HomepageFeaturedRobot',
  component: HomepageFeaturedRobot,
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'canvas'
  }
}

export const HomepageFeaturedRobotData = {
  featuredRobot: {
    url: '/robotics-at-jpl/placeholder',
    parent: {
      url: '/robotics-at-jpl'
    },
    title: 'Freeclimber: LEMUR 3',
    nickname: 'LEMUR 3',
    homePageBlurb:
      'Custom crawl, walk and even climb rock walls, this robot was designed to operate in extreme terrains.',
    description:
      'Crawl, walk and even climb rock walls, this robot was designed to operate in extreme terrains. ',
    heroImage: {
      // beach
      src: {
        url: 'https://picsum.photos/id/973/800/640',
        width: 800,
        height: 800
      },
      // jungle
      screenMd: {
        url: 'https://picsum.photos/id/921/640/512'
      },
      // desert
      screenSm: {
        url: 'https://picsum.photos/id/247/320/256'
      }
    },
    homePageImage: {
      // beach
      src: {
        url: 'https://picsum.photos/id/973/800/640',
        width: 800,
        height: 640
      },
      // lake
      srcSet: 'https://picsum.photos/id/865/320/256 320w, https://picsum.photos/id/865/640/512 640w'
    },
    mass: 123, // grams
    height: 0.24, // meters
    speed: 0.5, // m/s
    alternativeStats: [
      {
        metricLabel: 'Legs',
        metricUnit: 'unitless',
        metricValue: '6'
      },
      {
        metricLabel: 'Wingspan',
        metricUnit: 'meters',
        metricValue: '8'
      }
    ]
  }
}

// template
const HomepageFeaturedRobotTemplate = (args) => ({
  props: Object.keys(args),
  components: { HomepageFeaturedRobot },
  template: `<HomepageFeaturedRobot :data="featuredRobot" />`
})

// stories
export const FeaturedRobot = HomepageFeaturedRobotTemplate.bind({})
FeaturedRobot.args = {
  ...HomepageFeaturedRobotData
}

export const NoCustomContent = HomepageFeaturedRobotTemplate.bind({})
NoCustomContent.args = {
  featuredRobot: {
    ...HomepageFeaturedRobotData.featuredRobot,
    nickname: '',
    homePageBlurb: '',
    homePageImage: null
  }
}

export const NoStats = HomepageFeaturedRobotTemplate.bind({})
NoStats.args = {
  featuredRobot: {
    ...HomepageFeaturedRobotData.featuredRobot,
    mass: null,
    height: null,
    speed: null,
    alternativeStats: []
  }
}
