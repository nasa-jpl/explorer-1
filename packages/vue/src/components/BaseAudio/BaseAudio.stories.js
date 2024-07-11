import BaseAudio from './BaseAudio.vue'

export default {
  title: 'Components/Base/BaseAudio',
  component: BaseAudio,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="bg-black p-4 pb-5"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

// shared data
export const BaseAudioData = {
  file: '/audio/file_example_MP3_700KB.mp3',
  autoPlay: false,
  loop: false
}

export const Base = {
  name: 'BaseAudio', // single story hoisting
  args: BaseAudioData
}
