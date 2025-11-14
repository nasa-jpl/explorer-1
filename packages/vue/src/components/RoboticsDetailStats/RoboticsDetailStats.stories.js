import RoboticsDetailStats from './RoboticsDetailStats.vue'
import RoboticsDetailStatsMini from './RoboticsDetailStatsMini.vue'

export default {
  title: 'Components/WWW/RoboticsDetail/RoboticsDetailStats',
  component: RoboticsDetailStats,
  subcomponents: { RoboticsDetailStatsMini },
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="mt-20"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyRoot'
    }
  },
  excludeStories: /.*Data$/
}

export const RoboticsDetailStatsData = {
  mass: 123,
  height: 0.24,
  speed: 0.5,
  status: 'In Development (since 2011)',
  animalAnalogName: 'Lemur',
  animalAnalogIcon: {
    webp: {
      url: 'https://picsum.photos/320/320'
    },
    src: {
      url: 'https://picsum.photos/320/320'
    }
  },
  robotDestinations: [
    {
      destination: 'Mars'
    },
    {
      destination: 'Moon'
    },
    {
      destination: 'Europa'
    }
  ],
  alternativeStats: [
    {
      metricLabel: 'Legs',
      metricUnit: 'unitless',
      metricValue: '6'
    },
    {
      metricLabel: 'Ability',
      metricUnit: 'unitless',
      metricValue: 'Climbing'
    },
    {
      metricLabel: 'Wingspan',
      metricUnit: 'meters',
      metricValue: '8'
    }
  ]
}

export const BaseStory = {
  args: {
    mass: RoboticsDetailStatsData.mass,
    height: RoboticsDetailStatsData.height,
    speed: RoboticsDetailStatsData.speed,
    status: RoboticsDetailStatsData.status,
    animalAnalogName: RoboticsDetailStatsData.animalAnalogName,
    animalAnalogIcon: RoboticsDetailStatsData.animalAnalogIcon,
    robotDestinations: RoboticsDetailStatsData.robotDestinations,
    alternativeStats: RoboticsDetailStatsData.alternativeStats
  }
}

export const Mini = {
  args: {
    mass: RoboticsDetailStatsData.mass,
    height: RoboticsDetailStatsData.height,
    speed: RoboticsDetailStatsData.speed,
    alternativeStats: RoboticsDetailStatsData.alternativeStats
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { RoboticsDetailStatsMini },
    template: '<RoboticsDetailStatsMini v-bind="args" />'
  })
}
