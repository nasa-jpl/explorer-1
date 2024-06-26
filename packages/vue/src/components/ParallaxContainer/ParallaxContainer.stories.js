import ParallaxElement from './../ParallaxElement/ParallaxElement.vue'
import ParallaxContainer from './ParallaxContainer.vue'

export default {
  title: 'Components/ParallaxContainer',
  component: ParallaxContainer,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" style="height:3000px"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    docs: {
      description: {
        component:
          'Use `ParallaxContainer` with a nested `ParallaxElement` to create a parallax scrolling effect.'
      }
    }
  },
  excludeStories: /.*(Data)$/
}

const ParallaxContainerTemplate = (args) => ({
  props: Object.keys(args),
  components: { ParallaxContainer, ParallaxElement },
  template: `<ParallaxContainer :invert="invert" :overflow="overflow">
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
    <ParallaxElement class="bg-gray-light border-black border py-56 px-24 w-1/2 mx-auto">
      <div class="text-h3">Parallax Content</div><p><code>ParallaxElement</code></p>
    </ParallaxElement>
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
    <ParallaxElement class="bg-gray-light border-black border py-24 px-24 w-1/4 ml-auto">
      <div class="text-h5">Parallax Content</div><p><code>ParallaxElement</code></p>
    </ParallaxElement>
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
  </ParallaxContainer>`
})

export const Default = ParallaxContainerTemplate.bind({})
Default.storyName = 'ParallaxContainer'
Default.args = {
  invert: true,
  overflow: true
}
