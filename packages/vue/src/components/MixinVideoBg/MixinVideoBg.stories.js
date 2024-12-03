import { BaseVideoData } from './../BaseVideo/BaseVideo.stories'
import MixinVideoBg from './MixinVideoBg.vue'

export default {
  title: 'Mixins/MixinVideoBg',
  component: MixinVideoBg,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component: 'This mix-in will always autoplay and loop a video.'
      }
    }
  }
}

export const BaseStory = {
  name: 'MixinVideoBg',
  args: { video: BaseVideoData }
}
