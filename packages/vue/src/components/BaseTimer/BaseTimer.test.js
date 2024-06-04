import { mount } from '@vue/test-utils'

import BaseTimer from './BaseTimer.vue'

describe('BaseTimer', () => {
  test('does not display its values server-side', () => {
    const wrapper = mount(BaseTimer, {
      propsData: {
        targetDateTime: '2011-11-26 15:02:21+01:00',
        selectedUnits: ['years', 'months', 'days'],
      },
    })
    expect(wrapper.text().replace(/\s+/g, ' ')).toBe(
      'Loading… Yrs : Mos : Days'
    )
  })
})
