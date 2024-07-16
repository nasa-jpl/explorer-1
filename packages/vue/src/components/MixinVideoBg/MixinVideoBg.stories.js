import { BaseVideoData } from './../BaseVideo/BaseVideo.stories'
import MixinVideoBg from './MixinVideoBg.vue'

export default {
  title: 'Mixins/MixinVideoBg',
  component: MixinVideoBg,
  excludeStories: /.*Data$/
}

export const Default = {
  name: 'MixinVideoBg',
  args: { video: BaseVideoData }
}
