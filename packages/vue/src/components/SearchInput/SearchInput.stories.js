import SearchInput from './SearchInput.vue'

export default {
  title: 'Components/Search/SearchInput',
  component: SearchInput,
  tags: ['forms', 'search'],
  excludeStories: /.*Data$/
}

export const BaseStory = {
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
