import BaseUnitToggle, { unitPairs } from './BaseUnitToggle.vue'

export default {
  title: 'Components/Base/BaseUnitToggle',
  component: BaseUnitToggle
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

export const BaseStory = {
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
