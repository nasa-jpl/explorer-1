import { mount } from '@vue/test-utils'

import BaseUnitToggle from './BaseUnitToggle.vue'

describe('BaseUnitToggle', () => {
  test.each`
    output       | value       | valueSystem   | selectedSystem
    ${'1,000'}   | ${1000}     | ${'imperial'} | ${'imperial'}
    ${'1,000'}   | ${1000}     | ${'metric'}   | ${'metric'}
    ${'1,609'}   | ${1000}     | ${'imperial'} | ${'metric'}
    ${'621'}     | ${1000}     | ${'metric'}   | ${'imperial'}
    ${'1,000.1'} | ${1000.1}   | ${'metric'}   | ${'metric'}
    ${'621.4'}   | ${1000.1}   | ${'metric'}   | ${'imperial'}
    ${'621.44'}  | ${1000.11}  | ${'metric'}   | ${'imperial'}
    ${'621.440'} | ${1000.111} | ${'metric'}   | ${'imperial'}
  `(
    '$value $valueSystem, displays $output $selectedSystem',
    ({ output, value, valueSystem, selectedSystem }) => {
      const wrapper = mount(BaseUnitToggle, {
        propsData: { unitPair: 'MI_KM', value, valueSystem },
      })
      wrapper.setData({ selectedSystem })
      expect(wrapper.vm.formattedValue).toBe(output)
    }
  )
})
