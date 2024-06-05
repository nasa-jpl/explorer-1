import SkipLink from '@explorer-1/vue/src/components/SkipLink/SkipLink.vue'

export default {
  title: 'WWW/Header & Footer/Elements/SkipLink',
  component: SkipLink,
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
