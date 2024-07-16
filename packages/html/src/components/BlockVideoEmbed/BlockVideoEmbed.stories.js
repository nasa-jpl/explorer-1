import { BlockVideoEmbedTemplate } from './BlockVideoEmbed'

export default {
  title: 'Components/Blocks/BlockVideoEmbed',
  argTypes: {
    embed: {
      type: 'string',
      description: 'Video embed `<iframe>` code'
    },
    caption: {
      type: 'string',
      description: 'Video caption'
    },
    credit: {
      type: 'string',
      description: 'Video credit'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A video embed with placeholder, plus an optional caption.'
      }
    }
  }
}

export const BaseStory = BlockVideoEmbedTemplate.bind({})
BaseStory.storyName = 'BlockVideoEmbed'
BaseStory.args = {
  embed: `<iframe title="Meet NASA's Diana Trujillo" width="480" height="270" src="https://www.youtube.com/embed/vUuUyYqI83Q?feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  caption: `<p>Get to know some of the diverse team of engineers and scientists working on NASA's next Mars rover, Perseverance.</p>`,
  credit: 'ISRO/NASA/JPL-Caltech/Brown University/USGS'
}
