import { BaseVideoData } from './BaseVideo.stories'
import BlockVideo from '@explorer-1/vue/src/components/BlockVideo/BlockVideo.vue'

export default {
  title: 'Components/Blocks/BlockVideo',
  component: BlockVideo,
  excludeStories: /.*Data$/
}

// shared data
export const BlockVideoData = {
  block: {
    blockType: 'VideoBlock',
    video: BaseVideoData,
    caption: 'Lorem ipsum dolor sit amet consectatur',
    credit: 'Credit'
  }
}

export const Default = {
  name: 'BlockVideo',
  args: { data: BlockVideoData.block }
}
