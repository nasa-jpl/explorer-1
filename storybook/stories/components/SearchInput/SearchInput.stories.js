import { SearchInputTemplate } from './SearchInput'

export default {
  title: 'Components/Forms/SearchInput',
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
Default.args = {
  placeholder: '',
}
