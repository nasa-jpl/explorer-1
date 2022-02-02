import { FormTextInputTemplate } from './FormTextInput'

export default {
  title: 'Components/Forms/TextInput',
  argTypes: {
    label: {
      type: { name: 'string', required: false },
      description: 'A label for the field. Leave blank to remove.',
    },
    inputName: {
      type: { name: 'string', required: false },
      description:
        'Machine-readable name for the form field. Should be unique to other fields in the form.',
    },
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

export const Default = FormTextInputTemplate.bind({})
Default.storyName = 'TextInput'
Default.args = {
  label: 'Label',
  placeholder: 'placeholder text',
  inputName: 'text_input',
  required: false,
}
