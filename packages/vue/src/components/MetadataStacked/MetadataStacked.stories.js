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
  showMyList: true,
  url: '/sites/building-179'
}

export const BaseStory = {
  name: 'MetadataStacked',
  args: MetadataStackedData
}

// Rendered on detail pages (hides "LEARN MORE" link)
export const WithoutLink = {
  name: 'Without Link',
  args: {
    ...MetadataStackedData,
    url: undefined
  }
}
