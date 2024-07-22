import { BlockVideoEmbedData } from './../BlockVideoEmbed/BlockVideoEmbed.stories'
import HomepageEmbedBlock from './HomepageEmbedBlock.vue'

export default {
  title: 'Components/WWW/Homepage/HomepageEmbedBlock',
  component: HomepageEmbedBlock,
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas'
  },
  excludeStories: /.*(Data)$/
}

export const HomepageEmbedBlockData = [
  {
    display: true,
    heading: 'Watch Live',
    ...BlockVideoEmbedData.data
  }
]

// stories
export const BaseStory = {
  name: 'HomepageEmbedBlock',
  args: {
    data: HomepageEmbedBlockData
  }
}
