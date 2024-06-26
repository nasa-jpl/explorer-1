import { BlockImageGalleryData } from './../BlockImageGallery/BlockImageGallery.stories'
import { BlockQuoteData } from './../BlockQuote/BlockQuote.stories'
import { BlockRelatedLinksData } from './../BlockRelatedLinks/BlockRelatedLinks.stories'
import TopicDetailStreamfield from './TopicDetailStreamfield.vue'

export default {
  title: 'WWW/TopicDetail/TopicDetailStreamfield',
  component: TopicDetailStreamfield,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*(Data)$/
}

export const TopicDetailStreamfieldData = {
  body: [
    {
      blockType: 'HeadingBlock',
      heading: 'Heading Text'
    },
    BlockImageGalleryData.block,
    BlockQuoteData,
    BlockRelatedLinksData.data
  ]
}

export const Default = { args: { data: TopicDetailStreamfieldData.body, topic: 'Topic Name' } }
