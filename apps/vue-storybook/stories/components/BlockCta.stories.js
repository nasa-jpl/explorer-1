import BlockCta from './BlockCta.vue'

export default {
  title: 'Components/Blocks/BlockCta',
  component: BlockCta,
  excludeStories: /.*Data$/
}

// data
export const BlockCtaData = {
  blockType: 'CTABlock',
  heading: 'Sign up to our newsletter to get the latest JPL News',
  text: 'Sign Up',
  page: {
    url: '/placeholder'
  },
  externalLink: ''
}

export const Default = {
  args: {
    data: BlockCtaData
  }
}

export const ExternalLink = {
  args: {
    data: {
      heading: BlockCtaData.heading,
      text: BlockCtaData.text,
      page: '',
      externalLink: 'http://www.jpl.nasa.gov'
    }
  }
}
