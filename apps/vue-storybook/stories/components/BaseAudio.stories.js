import BaseAudio from '@explorer-1/vue/src/components/BaseAudio/BaseAudio.vue'

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
  file: 'http://127.0.0.1:9000/media/media/05_Da_Funk_Call_Out_Research_Hook.mp3',
  autoPlay: false,
  loop: false
}

export const Base = {
  name: 'BaseAudio', // single story hoisting
  args: BaseAudioData
}
