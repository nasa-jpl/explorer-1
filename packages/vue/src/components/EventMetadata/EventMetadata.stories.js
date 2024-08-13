import EventMetadata from './EventMetadata.vue'

export default {
  title: 'Components/Utilities/EventMetadata',
  component: EventMetadata,
  tags: ['!autodocs'],
  excludeStories: /.*Data$/
}

// data
export const EventMetadataData = {
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
}

export const BaseStory = { name: 'EventMetadata', args: { event: EventMetadataData } }
