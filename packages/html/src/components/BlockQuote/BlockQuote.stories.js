import { BlockQuoteTemplate } from './BlockQuote'

export default {
  title: 'Components/Blocks/BlockQuote',
  excludeStories: /.*Data$/,
  argTypes: {
    quote: {
      type: { name: 'string', required: false },
      description: ''
    },
    attribution: {
      type: { name: 'string', required: false },
      description: ''
    }
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'A big, fancy pull quote, with optional attribution and link. Can also be used for non-quotation callouts.'
      }
    }
  }
}

export const BlockQuoteData = {
  quote:
    "“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties.”",
  attribution: 'Amy Ross, Spacesuit Designer',
  quoteLink: {
    externalLink: '',
    page: {
      url: '/'
    }
  },
  thumbnail: {
    src: 'https://picsum.photos/80/80',
    alt: 'An image'
  }
}

export const Default = BlockQuoteTemplate.bind({})
Default.args = {
  quote: BlockQuoteData.quote,
  attribution: BlockQuoteData.attribution
}

export const WithImage = BlockQuoteTemplate.bind({})
WithImage.args = {
  quote: BlockQuoteData.quote,
  attribution: BlockQuoteData.attribution,
  thumbnail: BlockQuoteData.thumbnail
}

export const ExternalLinkedAttribution = BlockQuoteTemplate.bind({})
ExternalLinkedAttribution.args = {
  quote: BlockQuoteData.quote,
  attribution: BlockQuoteData.attribution,
  quoteLink: {
    externalLink: 'https://www.jpl.nasa.gov'
  }
}

export const ImageWithLocalLinkedAttribution = BlockQuoteTemplate.bind({})
ImageWithLocalLinkedAttribution.args = BlockQuoteData

export const NoAttribution = BlockQuoteTemplate.bind({})
NoAttribution.args = {
  quote: BlockQuoteData.quote
}
