import BaseAudio from '@explorer-1/vue/src/components/BaseAudio/BaseAudio.vue'

export default {
  title: 'Components/Base/BaseAudio',
  components: {
    BaseAudio
  },
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

// templates
const BaseAudioTemplate = (args) => ({
  props: Object.keys(args),
  components: { BaseAudio },
  template: `<BaseAudio :file="file" :auto-play="autoPlay" :loop="loop" />`
})

export const Base = BaseAudioTemplate.bind({})
Base.storyName = 'BaseAudio' // single story hoisting
Base.args = { ...BaseAudioData }
