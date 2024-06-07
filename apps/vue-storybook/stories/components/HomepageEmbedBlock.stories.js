import { BlockVideoEmbedData } from './BlockVideoEmbed.stories'
import HomepageEmbedBlock from '@explorer-1/vue/src/components/HomepageEmbedBlock/HomepageEmbedBlock.vue'

export default {
  title: 'WWW/Homepage/HomepageEmbedBlock',
  component: HomepageEmbedBlock,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
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
export const Default = {
  name: 'HomepageEmbedBlock',
  args: {
    data: HomepageEmbedBlockData
  }
}
