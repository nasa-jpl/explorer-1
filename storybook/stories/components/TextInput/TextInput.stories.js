import { TextInputTemplate } from './TextInput'

export default {
  title: 'Components/Forms/TextInput',
  argTypes: {
    placeholder: {
      type: { name: 'string', required: false },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: '',
      },
    },
  },
}

export const Default = TextInputTemplate.bind({})
Default.args = {
  placeholder: '',
}
