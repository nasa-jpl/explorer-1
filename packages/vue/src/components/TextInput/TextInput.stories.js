import TextInput from './TextInput.vue'

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput
}

// stories
export const BaseStory = {
  args: {
    inputName: 'name',
    type: 'text',
    required: true,
    label: 'Your Name',
    ariaLabel: 'Your Name',
    placeholder: 'Enter your name here',
    autofocus: true
  }
}

export const HiddenLabel = {
  args: {
    inputName: 'name',
    type: 'text',
    required: false,
    placeholder: 'Your name here',
    label: 'Name',
    showLabel: false
  }
}
