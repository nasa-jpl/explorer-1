import { mount } from '@vue/test-utils'

import MissionDetailStats from './MissionDetailStats.vue'

describe('MissionDetailStats', () => {
  test('renders with partial data', () => {
    mount(MissionDetailStats, {
      propsData: {
        showClock: false,
        showDistance: false,
        clockType: 'countdown',
        startDateTime: null,
        distanceType: '',
        distanceValue: null,
        distanceApiUrls: '',
        displayDate: null,
        missionTypes: [],
        missionTargets: [],
        status: 'draft',
      },
    })
  })
})
