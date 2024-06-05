import SearchInput from '@explorer-1/vue/src/components/SearchInput/SearchInput.vue'

export default {
  title: 'Components/Search/SearchInput',
  component: SearchInput,
  excludeStories: /.*Data$/
}

export const Default = {
  args: {
    searchQuery: '',
    placeholder: '',
    autoFocus: false,
    defaultColors: true
  }
}

export const WithProps = {
  args: {
    searchQuery: '',
    placeholder: 'Placeholder text',
    autoFocus: true,
    defaultColors: false
  }
}

export const UnderlinedInput = {
  args: {
    searchQuery: '',
    placeholder: 'Placeholder text',
    autoFocus: true,
    defaultColors: false,
    underlinedInput: true
  }
}
