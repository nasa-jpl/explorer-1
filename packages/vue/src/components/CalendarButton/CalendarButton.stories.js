import CalendarButton from './CalendarButton.vue'

export default {
  title: 'Components/Utilities/CalendarButton',
  component: CalendarButton,
  excludeStories: /.*Data$/
}

// data
export const CalendarButtonData = {
  title: 'Event title',
  location: 'Location',
  isAllDay: false,
  startDatetime: '2021-11-11T00:00:00-08:00',
  endDatetime: '2021-11-11T23:59:59.999999-08:00'
}

export const BaseStory = { name: 'CalendarButton', args: CalendarButtonData }
