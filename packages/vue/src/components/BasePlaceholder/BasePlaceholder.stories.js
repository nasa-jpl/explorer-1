import BasePlaceholder from './BasePlaceholder.vue'

export default {
  title: 'Components/Base/BasePlaceholder',
  component: BasePlaceholder,
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: `An animated loading component frequently used as a placeholder for <a href="/story/components-search-searchresultcard--standard-result" target="_blank">SearchResultCard</a>`
      }
    }
  }
}

// shared data
const BasePlaceholderData = {}

// templates
const BasePlaceholderTemplate = (args) => ({
  props: Object.keys(args),
  components: { BasePlaceholder },
  template: `<div><BasePlaceholder /></div>`
})

export const Default = BasePlaceholderTemplate.bind({})
Default.storyName = 'BasePlaceholder' // single story hoisting
Default.args = { ...BasePlaceholderData }
