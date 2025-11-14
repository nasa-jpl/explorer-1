import TextArea from './TextArea.vue'

export default {
  title: 'Components/Forms/TextArea',
  component: TextArea,
  tags: ['forms']
}

// stories
export const BaseStory = {
  args: {
    inputName: 'message',
    required: true,
    label: 'Your Message',
    placeholder: 'Enter your message here',
    rows: 10
  }
}

export const HiddenLabel = {
  name: 'Hidden Label',
  args: {
    inputName: 'message',
    label: 'Your Message',
    showLabel: false,
    required: false,
    placeholder: 'Your message here'
  }
}
