import { BaseVideoBgTemplate } from './BaseVideoBg'
import videoMp4 from '../../../static/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4'
import videoWebm from '../../../static/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm'

export default {
  title: 'Components/Base/BaseVideoBg',
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
}

export const BaseVideoBgData = {
  file: videoMp4,
  webm: videoWebm,
  ogg: '/static/media/storybook/static/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.ogv', // no webpack loader for ogg files
}

export const Base = BaseVideoBgTemplate.bind({})
Base.storyName = 'BaseVideoBg'
Base.args = BaseVideoBgData
