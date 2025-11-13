import BlockVideoEmbed from './BlockVideoEmbed.vue'

export default {
  title: 'Components/Blocks/BlockVideoEmbed',
  component: BlockVideoEmbed,
  tags: ['wagtail-blocks'],
  excludeStories: /.*Data$/
}

// shared data
export const BlockVideoEmbedData = {
  data: {
    blockType: 'VideoEmbedBlock',
    embed: {
      embed: `<iframe title="Meet NASA's Diana Trujillo" width="480" height="270" src="https://www.youtube.com/embed/vUuUyYqI83Q?feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    caption: `<p>Get to know some of the diverse team of engineers and scientists working on NASA's next Mars rover, Perseverance.</p>`,
    credit: 'ISRO/NASA/JPL-Caltech/Brown University/USGS'
  }
}

export const BaseStory = { name: 'BlockVideoEmbed', args: { data: BlockVideoEmbedData.data } }
