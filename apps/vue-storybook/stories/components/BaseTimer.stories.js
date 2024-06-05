import BaseTimer from '@explorer-1/vue/src/components/BaseTimer/BaseTimer.vue'

export default {
  title: 'Components/Base/BaseTimer',
  component: BaseTimer
}

const BaseTimerTemplate = (args) => ({
  props: Object.keys(args),
  components: { BaseTimer },
  template: `<BaseTimer
    :targetDateTime="targetDateTime"
    :selectedUnits="selectedUnits"
    :inline="inline"
    legendClass="text-gray-mid-dark"
    :countdown="countdown"
  />`
})

export const FullDateTime = BaseTimerTemplate.bind({})
FullDateTime.args = {
  targetDateTime: '2011-11-26 15:02:21+01:00',
  selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
  inline: false,
  countdown: false
}

export const DateOnly = BaseTimerTemplate.bind({})
DateOnly.args = {
  targetDateTime: '2011-11-26 15:02:21+01:00',
  selectedUnits: ['years', 'months', 'days'],
  inline: false,
  countdown: false
}

export const Mixed = BaseTimerTemplate.bind({})
Mixed.args = {
  targetDateTime: '2011-11-26 15:02:21+01:00',
  selectedUnits: ['months', 'days', 'hours'],
  inline: false,
  countdown: false
}

export const Countdown = BaseTimerTemplate.bind({})
Countdown.args = {
  targetDateTime: new Date(new Date().getTime() + 999999999).toISOString(),
  selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
  inline: false,
  countdown: true
}

export const CountdownStop = BaseTimerTemplate.bind({})
CountdownStop.args = {
  targetDateTime: new Date(new Date().getTime() + 1000 * 10).toISOString(),
  selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
  inline: false,
  countdown: true
}

export const AutoUnits = BaseTimerTemplate.bind({})
AutoUnits.args = {
  targetDateTime: new Date(new Date().getTime() - 999999999).toISOString(),
  selectedUnits: [],
  inline: false,
  countdown: false
}

export const AutoUnitsCountdown = BaseTimerTemplate.bind({})
AutoUnitsCountdown.args = {
  targetDateTime: new Date(new Date().getTime() + 1000 * 10).toISOString(),
  selectedUnits: [],
  inline: false,
  countdown: true
}

export const Inline = BaseTimerTemplate.bind({})
Inline.args = {
  targetDateTime: '2011-11-26 15:02:21+01:00',
  selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
  inline: true,
  countdown: false
}
