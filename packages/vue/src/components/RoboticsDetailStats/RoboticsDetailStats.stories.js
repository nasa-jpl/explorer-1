import RoboticsDetailStats from './RoboticsDetailStats.vue'
import RoboticsDetailStatsMini from './RoboticsDetailStatsMini.vue'

export default {
  title: 'WWW/Components/RoboticsDetail/RoboticsDetailStats',
  component: RoboticsDetailStats,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="mt-20"><story/></div>`,
    }),
  ],
  parameters: {
    html: {
      root: '#storyDecorator',
    },
  },
  excludeStories: /.*Data$/,
  argTypes: {
    status: {
      control: { type: 'text' },
    },
  },
}

export const RoboticsDetailStatsData = {
  mass: 123,
  height: 0.24,
  speed: 0.5,
  status: 'In Development (since 2011)',
  animalAnalogName: 'Lemur',
  animalAnalogIcon: {
    webp: {
      url: 'https://images.unsplash.com/photo-1535468899888-92047ec84051?fm=webp&crop=entropy&w=320&h=320&fit=crop',
    },
    src: {
      url: 'https://source.unsplash.com/mm4yj7L6Hk0/320x320',
    },
  },
  robotDestinations: [
    {
      destination: 'Mars',
    },
    {
      destination: 'Moon',
    },
    {
      destination: 'Europa',
    },
  ],
  alternativeStats: [
    {
      metricLabel: 'Legs',
      metricUnit: 'unitless',
      metricValue: '6',
    },
    {
      metricLabel: 'Ability',
      metricUnit: 'unitless',
      metricValue: 'Climbing',
    },
    {
      metricLabel: 'Wingspan',
      metricUnit: 'meters',
      metricValue: '8',
    },
  ],
}

const RoboticsDetailStatsTemplate = (args) => ({
  props: Object.keys(args),
  components: { RoboticsDetailStats },
  template: `<RoboticsDetailStats
    :mass="mass"
    :height="height"
    :speed="speed"
    :status="status"
    :animalAnalogName="animalAnalogName"
    :animalAnalogIcon="animalAnalogIcon"
    :robotDestinations="robotDestinations"
    :alternativeStats="alternativeStats"
  />`,
})

const RoboticsDetailStatsMiniTemplate = (args) => ({
  props: Object.keys(args),
  components: { RoboticsDetailStatsMini },
  template: `<RoboticsDetailStatsMini
    :mass="mass"
    :height="height"
    :speed="speed"
    :alternativeStats="alternativeStats"
  />`,
})

export const Base = RoboticsDetailStatsTemplate.bind({})
Base.args = { ...RoboticsDetailStatsData }

export const Mini = RoboticsDetailStatsMiniTemplate.bind({})
Mini.args = { ...RoboticsDetailStatsData }
