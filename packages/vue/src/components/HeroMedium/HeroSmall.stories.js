import { BaseVideoData } from './../BaseVideo/BaseVideo.stories'
import { HeroMediumData } from './HeroMedium.stories'
import HeroMedium from './HeroMedium.vue'

export default {
  title: 'Components/Heroes/Small',
  component: HeroMedium,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="max-w-screen-3xl mx-auto"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'FullWidthDocs',
          class: 'sbdocs-preview-full-width',
          default: true,
          visible: false
        }
      ]
    },
    docs: {
      description: {
        component:
          '`HeroSmall` is the same component as `HeroMedium, but with `compact` set to `true`.'
      }
    }
  },
  excludeStories: /.*Data$/
}

export const BaseStory = {
  name: 'HeroMedium (compact)',
  args: {
    customTag: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: undefined,
    compact: true
  }
}
export const Video = {
  args: {
    customTag: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: BaseVideoData,
    compact: true
  }
}
