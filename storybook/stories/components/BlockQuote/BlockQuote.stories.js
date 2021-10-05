import { BlockQuoteTemplate } from './BlockQuote'

export default {
  title: 'Components/Blocks/BlockQuote',
  excludeStories: /.*Data$/,
}

export const BlockQuoteData = {
  quote:
    "“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties”",
  attribution: 'Amy Ross, Spacesuit Designer',
  quoteLink: {
    externalLink: '',
    page: {
      url: '/',
    },
  },
  thumbnail: {
    src: 'https://placekitten.com/80/80',
    alt: 'An image',
  },
}

export const Default = BlockQuoteTemplate.bind({})
Default.args = {
  data: {
    quote: BlockQuoteData.quote,
    attribution: BlockQuoteData.attribution,
  },
}

export const WithImage = BlockQuoteTemplate.bind({})
WithImage.args = {
  data: {
    quote: BlockQuoteData.quote,
    attribution: BlockQuoteData.attribution,
    thumbnail: BlockQuoteData.thumbnail,
  },
}

export const ExternalLinkedAttribution = BlockQuoteTemplate.bind({})
ExternalLinkedAttribution.args = {
  data: {
    quote: BlockQuoteData.quote,
    attribution: BlockQuoteData.attribution,
    quoteLink: {
      externalLink: 'https://www.jpl.nasa.gov',
    },
  },
}

export const ImageWithLocalLinkedAttribution = BlockQuoteTemplate.bind({})
ImageWithLocalLinkedAttribution.args = {
  data: BlockQuoteData,
}

export const NoAttribution = BlockQuoteTemplate.bind({})
NoAttribution.args = {
  data: {
    quote: BlockQuoteData.quote,
  },
}
