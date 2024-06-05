import BaseVideo from '@explorer-1/vue/src/components/BaseVideo/BaseVideo.vue'
import videoMp4 from '@explorer-1/common-storybook/src/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4'
import videoWebm from '@explorer-1/common-storybook/src/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm'

export default {
  title: 'Components/Base/BaseVideo',
  component: BaseVideo,
  excludeStories: /.*Data$/
}

// shared data
export const BaseVideoData = {
  duration: '8',
  file: videoMp4,
  fileExtension: 'mp4',
  fileOgg: 'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.ogv', // no webpack loader for ogg files
  fileWebm: videoWebm,
  height: null,
  id: '1',
  sources:
    "[{'src': 'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4', 'type': 'video/mp4', 'size': 2014406}, {'src': 'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.ogv', 'type': 'video/ogg', 'size': 2625393}, {'src': 'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm', 'type': 'video/webm', 'size': 1706500}]",
  title: 'Seals, Sea Lions, and Satellites',
  type: '',
  width: null
}

export const Base = {
  args: {
    data: BaseVideoData
  }
}
