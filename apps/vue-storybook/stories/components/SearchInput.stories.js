import SearchInput from '@explorer-1/vue/src/components/SearchInput/SearchInput.vue'

export default {
  title: 'Components/Search/SearchInput',
  components: {
    SearchInput
  },
  excludeStories: /.*Data$/
}

// templates
const SearchInputTemplate = (args) => ({
  props: Object.keys(args),
  components: { SearchInput },
  template: `<SearchInput v-model="searchQuery" :placeholder="placeholder" :auto-focus="autoFocus" :default-colors="defaultColors" />`
})

const SearchInputUnderlinedTemplate = (args) => ({
  props: Object.keys(args),
  components: { SearchInput },
  template: `<SearchInput v-model="searchQuery" :placeholder="placeholder" :auto-focus="autoFocus" :default-colors="defaultColors" :underlined-input="underlinedInput" :underlined-input-value="searchQuery" />`
})

export const Default = SearchInputTemplate.bind({})
Default.args = {
  searchQuery: '',
  placeholder: '',
  autoFocus: false,
  defaultColors: true
}

export const WithProps = SearchInputTemplate.bind({})
WithProps.args = {
  searchQuery: '',
  placeholder: 'Placeholder text',
  autoFocus: true,
  defaultColors: false
}

export const UnderlinedInput = SearchInputUnderlinedTemplate.bind({})
UnderlinedInput.args = {
  searchQuery: '',
  placeholder: 'Placeholder text',
  autoFocus: true,
  defaultColors: false,
  underlinedInput: true
}
