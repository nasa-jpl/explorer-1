import MissionDetailStats, { statuses, clockTypes } from './MissionDetailStats.vue'
import MissionDetailStatsMini from './MissionDetailStatsMini.vue'
import MissionDetailStatsMicro from './MissionDetailStatsMicro.vue'
import { distanceTypes } from './DistanceStats.vue'

export default {
  title: 'WWW/Components/MissionDetail/MissionDetailStats',
  component: MissionDetailStats,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="mt-20"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*(Data)$/,
  argTypes: {
    status: {
      control: { type: 'select', options: Object.keys(statuses) }
    },
    clockType: {
      control: { type: 'select', options: Object.keys(clockTypes) }
    },
    distanceType: {
      control: {
        type: 'select',
        options: Object.keys(distanceTypes).concat([''])
      }
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

const MissionDetailStatsTemplate = (args) => ({
  props: Object.keys(args),
  components: { MissionDetailStats },
  template: `<MissionDetailStats
    :showClock="showClock"
    :showDistance="showDistance"
    :clockType="clockType"
    :startDateTime="startDateTime"
    :distanceType="distanceType"
    :distanceValue="distanceValue"
    :displayDate="displayDate"
    :missionTypes="missionTypes"
    :missionTargets="missionTargets"
    :status="status"
  />`
})

const MissionDetailStatsMiniTemplate = (args) => ({
  props: Object.keys(args),
  components: { MissionDetailStatsMini },
  template: `<MissionDetailStatsMini
    :showClock="showClock"
    :showDistance="showDistance"
    :clockType="clockType"
    :startDateTime="startDateTime"
    :distanceType="distanceType"
    :distanceValue="distanceValue"
  />`
})

const MissionDetailStatsMicroTemplate = (args) => ({
  props: Object.keys(args),
  components: { MissionDetailStatsMicro },
  template: `<MissionDetailStatsMicro
    :showClock="showClock"
    :clockType="clockType"
    :startDateTime="startDateTime"
  />`
})

export const Full = MissionDetailStatsTemplate.bind({})
Full.args = { ...MissionDetailStatsData }

export const Mini = MissionDetailStatsMiniTemplate.bind({})
Mini.args = {
  ...MissionDetailStatsData,
  startDateTime: '2021-02-18T20:55:00+00:00'
}
export const Micro = MissionDetailStatsMicroTemplate.bind({})
Micro.args = {
  ...MissionDetailStatsData,
  startDateTime: '2021-02-18T20:55:00+00:00'
}
