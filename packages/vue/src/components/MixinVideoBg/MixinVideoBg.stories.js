import { BaseVideoData } from './../BaseVideo/BaseVideo.stories'
import MixinVideoBg from './MixinVideoBg.vue'

export default {
  title: 'Mixins/MixinVideoBg',
  component: MixinVideoBg,
  excludeStories: /.*Data$/,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  }
}

export const Default = {
  name: 'MixinVideoBg',
  args: { video: BaseVideoData }
}
