import BaseAudio from './BaseAudio.vue'

export default {
  title: 'Components/Base/BaseAudio',
  component: BaseAudio,
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="bg-black p-4 pb-5"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyRoot'
    }
  },
  excludeStories: /.*Data$/
}

const BaseAudioData = {
  file: '/audio/file_example_MP3_700KB.mp3',
  autoPlay: false
}

export const BaseStory = {
  name: 'BaseAudio', // single story hoisting
  args: BaseAudioData
}
