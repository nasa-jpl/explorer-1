import MetadataEvent from './MetadataEvent.vue'

export default {
  title: 'Components/Utilities/MetadataEvent',
  component: MetadataEvent,
  tags: ['!autodocs'],
  excludeStories: /.*Data$/
}

// data
export const MetadataEventData = {
  event: {
    title: 'Event title',
    location: 'Location',
    startDate: '2021-11-11',
    startDatetime: '2021-11-11T00:00:00-08:00',
    endDate: '2021-11-11',
    ongoing: false,
    isVirtualEvent: false,
    endDatetime: '2021-11-11T23:59:59.999999-08:00',
    locationName: 'Webcast',
    locationLink: 'https://www.nasa.gov',
    customDate: undefined
  },
  compact: false
}

export const BaseStory = {
  name: 'MetadataEvent',
  args: MetadataEventData
}
