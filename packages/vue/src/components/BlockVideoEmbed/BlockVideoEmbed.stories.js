import BlockVideoEmbed from './BlockVideoEmbed.vue'

export default {
  title: 'Components/Blocks/BlockVideoEmbed',
  components: {
    BlockVideoEmbed
  },
  excludeStories: /.*Data$/
}

// shared data
export const BlockVideoEmbedData = {
  data: {
    embed: {
      embed: `<iframe title="Meet NASA's Diana Trujillo" width="480" height="270" src="https://www.youtube.com/embed/vUuUyYqI83Q?feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    caption: `<p>Get to know some of the diverse team of engineers and scientists working on NASA's next Mars rover, Perseverance.</p>`,
    credit: 'ISRO/NASA/JPL-Caltech/Brown University/USGS'
  }
}

// templates
const BlockVideoEmbedTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockVideoEmbed },
  template: `<BlockVideoEmbed :data="data" />`
})

export const Default = BlockVideoEmbedTemplate.bind({})
Default.storyName = 'BlockVideoEmbed'
Default.args = { ...BlockVideoEmbedData }
