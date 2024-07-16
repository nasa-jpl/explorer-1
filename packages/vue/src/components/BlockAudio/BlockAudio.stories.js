import BlockAudio from './BlockAudio.vue'

export default {
  title: 'Components/Blocks/BlockAudio',
  component: BlockAudio,
  excludeStories: /.*Data$/
}

// shared data
export const BlockAudioData = {
  uploadedMedia: {
    collection: {
      id: '1',
      name: 'Root',
      path: '0001'
    },
    createdAt: '2020-12-10T07:38:30.951546+00:00',
    file: 'http://127.0.0.1:9000/media/media/05_Da_Funk_Call_Out_Research_Hook.mp3',
    fileExtension: 'mp3',
    fileOgg: '',
    id: '1',
    sources:
      "[{'src': 'http://127.0.0.1:9000/media/media/05_Da_Funk_Call_Out_Research_Hook.mp3', 'type': 'audio/mpeg'}]",
    thumbnail: '',
    title: 'audio file',
    type: 'audio'
  }
}
export const BaseStory = { name: 'BlockAudio', args: { data: BlockAudioData } }
