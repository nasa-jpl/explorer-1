import BlockCta from '@explorer-1/vue/src/components/BlockCta/BlockCta.vue'

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

// template
const BlockCtaTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockCta },
  template: `
    <BlockCta :data="data" />
  `
})

export const Default = BlockCtaTemplate.bind({})
Default.args = {
  data: BlockCtaData
}

export const ExternalLink = BlockCtaTemplate.bind({})
ExternalLink.args = {
  data: {
    heading: BlockCtaData.heading,
    text: BlockCtaData.text,
    page: '',
    externalLink: 'http://www.jpl.nasa.gov'
  }
}
