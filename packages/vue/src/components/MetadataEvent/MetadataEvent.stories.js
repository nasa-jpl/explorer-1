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
    startDate: '2024-08-08',
    startDatetime: '2024-08-08T14:00:00-07:00',
    startTime: '15:00:00',
    endDate: '2024-08-08',
    endDatetime: '2024-08-08T22:00:00-07:00',
    endTime: '22:00:00',
    ongoing: false,
    isVirtualEvent: false,
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
