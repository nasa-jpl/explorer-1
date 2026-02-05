import MetadataStacked from './MetadataStacked.vue'

export default {
  title: 'Components/Utilities/MetadataStacked',
  component: MetadataStacked,
  tags: [],
  excludeStories: /.*Data$/
}

// data
export const MetadataStackedData = {
  location: 'Building 179, Highbay 1',
  locationIcon: '',
  wait: '45 minute wait',
  showMyList: true
}

export const BaseStory = {
  name: 'MetadataStacked',
  args: MetadataStackedData
}
