import BaseTimer from './BaseTimer.vue'

export default {
  title: 'Components/Base/BaseTimer',
  component: BaseTimer
}

export const Default = {
  name: 'Full Date Time',
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: false,
    countdown: false,
    legendClass: 'text-gray-mid-dark'
  }
}
export const DateOnly = {
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['years', 'months', 'days'],
    inline: false,
    countdown: false
  }
}

export const Mixed = {
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['months', 'days', 'hours'],
    inline: false,
    countdown: false
  }
}

export const Countdown = {
  args: {
    targetDateTime: new Date(new Date().getTime() + 999999999).toISOString(),
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: false,
    countdown: true
  }
}

export const CountdownStop = {
  args: {
    targetDateTime: new Date(new Date().getTime() + 1000 * 10).toISOString(),
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: false,
    countdown: true
  }
}

export const AutoUnits = {
  args: {
    targetDateTime: new Date(new Date().getTime() - 999999999).toISOString(),
    selectedUnits: [],
    inline: false,
    countdown: false
  }
}

export const AutoUnitsCountdown = {
  args: {
    targetDateTime: new Date(new Date().getTime() + 1000 * 10).toISOString(),
    selectedUnits: [],
    inline: false,
    countdown: true
  }
}

export const Inline = {
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: true,
    countdown: false
  }
}
