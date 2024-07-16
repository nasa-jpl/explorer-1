import BaseUnitToggle, { unitPairs } from './BaseUnitToggle.vue'

export default {
  title: 'Components/Base/BaseUnitToggle',
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
  components: { BaseUnitToggle },
  setup() {
    return { args }
  },
  template: `
  <BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>`
})

export const Imperial = BaseUnitToggleTemplate.bind({})
Imperial.args = {
  unitPair: 'MI_KM',
  value: 999999,
  secondValue: undefined,
  valueSystem: 'imperial'
}

export const Default = {
  name: 'Metric',
  args: {
    unitPair: 'MI_KM',
    value: 999999,
    secondValue: undefined,
    valueSystem: 'metric'
  },
  render: (args) => ({
    components: { BaseUnitToggle },
    setup() {
      return { args }
    },
    template: `<BaseUnitToggle
        v-slot="slotProps"
        v-bind="args"
      >
        <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
      </BaseUnitToggle>`
  })
}

export const KeepsPrecision = {
  args: {
    unitPair: 'MI_KM',
    value: 14.33,
    secondValue: undefined,
    valueSystem: 'imperial',
    formattedValue: 123
  },
  render: (args) => ({
    components: { BaseUnitToggle },
    setup() {
      return { args }
    },
    template: `<BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>`
  })
}
