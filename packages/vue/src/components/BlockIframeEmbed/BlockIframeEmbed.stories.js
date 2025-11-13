import BlockIframeEmbed from './BlockIframeEmbed.vue'

export default {
  title: 'Components/Blocks/BlockIframeEmbed',
  component: BlockIframeEmbed,
  tags: ['wagtail-blocks'],
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="mx-auto max-w-screen-md"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyRoot'
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

export const BaseStory = {
  args: {
    data: BlockIframeEmbedData
  }
}
export const LazyLoad = {
  args: {
    data: BlockIframeEmbedData
  },
  decorators: () => ({
    template: `<div style="padding-top:3000px"><story/></div>`
  })
}
