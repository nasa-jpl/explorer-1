import SkipLink from './SkipLink.vue'

export default {
  title: 'WWW/Header & Footer/Elements/SkipLink',
  components: {
    SkipLink
  },
  excludeStories: /.*Data$/
}

// templates
const SkipLinkTemplate = (args) => ({
  props: Object.keys(args),
  components: { SkipLink },
  template: `<SkipLink />`
})

export const Default = SkipLinkTemplate.bind({})
Default.storyName = 'SkipLink'
