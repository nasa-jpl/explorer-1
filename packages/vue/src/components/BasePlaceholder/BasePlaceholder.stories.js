import BasePlaceholder from './BasePlaceholder.vue'

export default {
  title: 'Components/Base/BasePlaceholder',
  component: BasePlaceholder,
  excludeStories: /.*Data$/,
  tags: ['autodocs', 'listings'],
  parameters: {
    docs: {
      description: {
        component:
          'An animated loading component frequently used as a placeholder for <a href="/story/components-search-searchresultcard--standard-result" target="_blank">SearchResultCard</a>'
      }
    }
  }
}
// templates
const BasePlaceholderTemplate = (args) => ({
  props: Object.keys(args),
  components: { BasePlaceholder },
  template: `<div><BasePlaceholder /></div>`
})

export const BaseStory = BasePlaceholderTemplate.bind({})
BaseStory.storyName = 'BasePlaceholder'
