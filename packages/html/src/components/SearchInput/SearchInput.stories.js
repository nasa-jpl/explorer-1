import { SearchInputTemplate } from './SearchInput'

export default {
  title: 'Components/Search/SearchInput',
  argTypes: {
    placeholder: {
      type: { name: 'string', required: false },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'Includes a stylized search icon and a darker border than standard form inputs.',
      },
    },
  },
}

export const Default = SearchInputTemplate.bind({})
Default.storyName = 'SearchInput'
Default.args = {
  placeholder: 'Search this site&hellip;',
}

export const Compact = SearchInputTemplate.bind({})
Compact.args = {
  compact: true,
  placeholder: 'Search this site&hellip;',
}
