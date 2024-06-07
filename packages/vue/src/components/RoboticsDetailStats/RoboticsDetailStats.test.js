import { mount } from '@vue/test-utils'

import RoboticsDetailStats from './RoboticsDetailStats.vue'

describe('RoboticsDetailStats', () => {
  test('does not display anything without content', () => {
    const wrapper = mount(RoboticsDetailStats, {
      propsData: {
        mass: null,
        height: null,
        speed: null,
        status: '',
        animalAnalogName: '',
        animalAnalogIcon: null,
        robotDestinations: [],
        alternativeStats: []
      }
    })
    expect(wrapper.find('*').exists()).toBe(false)
  })
})
