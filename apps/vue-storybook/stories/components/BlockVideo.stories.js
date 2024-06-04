import { BaseVideoData } from './BaseVideo.stories'
import BlockVideo from '@explorer-1/vue/src/components/BlockVideo/BlockVideo.vue'

export default {
  title: 'Components/Blocks/BlockVideo',
  components: {
    BlockVideo
  },
  excludeStories: /.*Data$/
}

// shared data
export const BlockVideoData = {
  block: {
    blockType: 'VideoBlock',
    video: BaseVideoData.data,
    caption: 'Lorem ipsum dolor sit amet consectatur',
    credit: 'Credit'
  }
}

// templates
const BlockVideoTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockVideo },
  template: `<BlockVideo :data="block" />`
})

export const Default = BlockVideoTemplate.bind({})
Default.storyName = 'BlockVideo'
Default.args = { ...BlockVideoData }
