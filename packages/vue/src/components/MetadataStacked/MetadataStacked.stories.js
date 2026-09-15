import MetadataStacked from './MetadataStacked.vue'
import ExploreJplIconImage from '@explorer-1/common-storybook/src/story-data/images/2026-Explore-JPL-Site-Number-1-Missions-in-Flight.png'

export default {
  title: 'Components/Utilities/MetadataStacked',
  component: MetadataStacked,
  tags: [],
  excludeStories: /.*Data$/
}

// data
export const MetadataStackedData = {
  location: 'Building 179, Highbay 1',
  locationIcon: ExploreJplIconImage,
  wait: '45 minute wait',
  showMyList: true,
  url: '/sites/building-179'
}

export const BaseStory = {
  name: 'MetadataStacked',
  args: MetadataStackedData
}
