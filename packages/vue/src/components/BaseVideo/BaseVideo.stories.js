import BaseVideo from './BaseVideo.vue'

export default {
  title: 'Components/Base/BaseVideo',
  component: BaseVideo,
  excludeStories: /.*Data$/
}

// shared data
export const BaseVideoData = {
  duration: '8',
  file: '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4',
  fileExtension: 'mp4',
  fileOgg: 'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.ogv', // no webpack loader for ogg files
  fileWebm: '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm',
  height: null,
  id: '1',
  sources:
    "[{'src': 'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4', 'type': 'video/mp4', 'size': 2014406}, {'src': 'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.ogv', 'type': 'video/ogg', 'size': 2625393}, {'src': 'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm', 'type': 'video/webm', 'size': 1706500}]",
  title: 'Seals, Sea Lions, and Satellites',
  type: '',
  width: null
}

export const BaseStory = {
  args: {
    data: BaseVideoData
  }
}
