import MissionDetailStats, { statuses, clockTypes } from './MissionDetailStats.vue'
import MissionDetailStatsMini from './MissionDetailStatsMini.vue'
import MissionDetailStatsMicro from './MissionDetailStatsMicro.vue'
import { distanceTypes } from './DistanceStats.vue'

export default {
  title: 'Components/WWW/MissionDetail/MissionDetailStats',
  component: MissionDetailStats,
  subcomponents: { MissionDetailStatsMini, MissionDetailStatsMicro },
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
  excludeStories: /.*(Data)$/,
  argTypes: {
    status: {
      control: { type: 'select' },
      options: Object.keys(statuses)
    },
    clockType: {
      control: { type: 'select' },
      options: Object.keys(clockTypes)
    },
    distanceType: {
      control: {
        type: 'select'
      },
      options: Object.keys(distanceTypes).concat([''])
    }
  }
}

export const MissionDetailStatsData = {
  showClock: true,
  showDistance: true,
  clockType: 'countdown',
  startDateTime: '2021-02-18T20:55:00+00:00',
  distanceType: 'earth',
  distanceValue: 4986444,
  distanceApiUrls: '',
  displayDate: 'Oct. 1, 2020',
  missionTypes: [{ missionType: 'Landers/Rovers' }],
  missionTargets: [{ target: 'Mars' }],
  status: 'future'
}

export const BaseStory = {
  name: 'Full',
  args: MissionDetailStatsData,
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { MissionDetailStats },
    template: '<MissionDetailStats v-bind="args" />'
  })
}

export const Mini = {
  args: {
    showClock: MissionDetailStatsData.showClock,
    showDistance: MissionDetailStatsData.showDistance,
    clockType: MissionDetailStatsData.clockType,
    startDateTime: '2021-02-18T20:55:00+00:00',
    distanceType: MissionDetailStatsData.distanceType,
    distanceValue: MissionDetailStatsData.distanceValue
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { MissionDetailStatsMini },
    template: '<MissionDetailStatsMini v-bind="args" />'
  })
}

export const Micro = {
  args: {
    showClock: MissionDetailStatsData.showClock,
    clockType: MissionDetailStatsData.clockType,
    startDateTime: '2021-02-18T20:55:00+00:00'
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { MissionDetailStatsMicro },
    template: '<MissionDetailStatsMicro v-bind="args" />'
  })
}
