import BlockIframeEmbed from './BlockIframeEmbed.vue'

export default {
  title: 'Components/Blocks/BlockIframeEmbed',
  component: BlockIframeEmbed,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="mx-auto max-w-screen-md"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

export const BlockIframeEmbedData = {
  blockType: 'IframeEmbedBlock',
  title: 'Eyes Perserverance Embed',
  caption: `
    <p>With three giant blades stretching out some 66 feet (20 meters) from its cylindrical, six-sided body, the Juno spacecraft is a dynamic engineering marvel, spinning to keep itself stable as it makes oval-shaped orbits around Jupiter. View the full interactive experience at <a href="https://eyes.nasa.gov/apps/orrery/#/home">Eyes on the Solar System</a>.</p>
  `,
  url: `https://eyes.nasa.gov/apps/orrery/#/sc_perseverance`
}

// template
const BlockIframeEmbedTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockIframeEmbed },
  template: `<BlockIframeEmbed :data="data"/>`
})
const BlockIframeEmbedLazyLoadTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockIframeEmbed },
  template: `<div style="padding-top:3000px"><BlockIframeEmbed :data="data"/></div>`
})

export const Default = BlockIframeEmbedTemplate.bind({})
Default.args = {
  data: BlockIframeEmbedData
}
export const LazyLoad = BlockIframeEmbedLazyLoadTemplate.bind({})
LazyLoad.args = {
  data: BlockIframeEmbedData
}
