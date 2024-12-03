import { BaseVideoData } from './../BaseVideo/BaseVideo.stories'
import BlockVideo from './BlockVideo.vue'

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
    credit: 'Credit',
    autoplay: false
  }
}

export const BaseStory = {
  name: 'BlockVideo',
  args: { data: BlockVideoData.block }
}
