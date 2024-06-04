import { BaseVideoData } from './BaseVideo.stories'
import MixinVideoBg from '@explorer-1/vue/src/components/MixinVideoBg/MixinVideoBg.vue'

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

export const Base = {
  name: 'MixinVideoBg',
  args: { video: BaseVideoData }
}
