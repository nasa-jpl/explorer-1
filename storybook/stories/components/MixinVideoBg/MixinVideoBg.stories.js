import { MixinVideoBgTemplate } from './MixinVideoBg'
import videoMp4 from '../../../static/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4'
import videoWebm from '../../../static/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm'

export const MixinVideoBgData = {
  file: videoMp4,
  webm: videoWebm,
  ogg: 'static/media/storybook/static/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.ogv', // no webpack loader for ogg files
}

export default {
  title: 'Components/Mixins/MixinVideoBg',
  excludeStories: /.*Data$/,
  argTypes: {
    file: {
      type: { name: 'string', required: false },
      description: 'source to `mp4` video file',
    },
    webm: {
      type: { name: 'string', required: false },
      description: 'source to `webm` video file',
    },
    ogg: {
      type: { name: 'string', required: false },
      description: 'source to `ogg` video file',
    },
  },
  parameters: {
    docs: { 
      description: {
        component: `This mixin is a simple \`<video>\` component that autoplays a muted video and retains the video's aspect ratio. Often used as a background when positioned \`absolute\` with other content set as an overlay, or used as a way to loop a muted video without video controls.
  See the following stories for implementation examples:

  - [Hero: Medium](?path=/docs/components-blocks-heroes-medium--docs) - with content overlay
  - [Hero: Media Only](?path=/story/components-blocks-heroes-media-only--video) - no content overlay`
      },
    },
  },
}

export const Default = MixinVideoBgTemplate.bind({})
Default.args = MixinVideoBgData
