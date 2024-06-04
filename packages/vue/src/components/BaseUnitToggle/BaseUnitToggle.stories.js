import BaseUnitToggle, { unitPairs } from './BaseUnitToggle.vue'

export default {
  title: 'WWW/Components/Base/BaseUnitToggle',
  component: BaseUnitToggle,
  argTypes: {
    unitPair: {
      control: { type: 'select', options: Object.keys(unitPairs) }
    },
    valueSystem: {
      description: 'The system of measurement that corresponds with the provided `value`',
      control: { type: 'select', options: ['imperial', 'metric'] }
    },
    value: {
      description: 'The initial value to be converted'
    },
    secondValue: {
      description: 'Manually override the converted value'
    }
  }
}

const BaseUnitToggleTemplate = (args) => ({
  props: Object.keys(args),
  components: { BaseUnitToggle },
  template: `
  <BaseUnitToggle
    v-slot="slotProps"
    :unitPair="unitPair"
    :value="value"
    :second-value="secondValue"
    :valueSystem="valueSystem"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>`
})

export const Imperial = BaseUnitToggleTemplate.bind({})
Imperial.args = {
  unitPair: 'MI_KM',
  value: 999999,
  secondValue: null,
  valueSystem: 'imperial'
}

export const Metric = BaseUnitToggleTemplate.bind({})
Metric.args = {
  unitPair: 'MI_KM',
  value: 999999,
  secondValue: null,
  valueSystem: 'metric'
}

export const KeepsPrecision = BaseUnitToggleTemplate.bind({})
KeepsPrecision.args = {
  unitPair: 'MI_KM',
  value: 14.33,
  secondValue: null,
  valueSystem: 'imperial'
}
