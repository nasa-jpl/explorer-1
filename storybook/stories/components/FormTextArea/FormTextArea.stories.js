import { FormTextAreaTemplate } from './FormTextArea'

export default {
  title: 'Components/Forms/TextArea',
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

export const Default = FormTextAreaTemplate.bind({})
Default.storyName = 'TextArea'
Default.args = {
  label: 'Label',
  placeholder: 'placeholder text...',
  inputName: 'message_input',
  required: false,
}
