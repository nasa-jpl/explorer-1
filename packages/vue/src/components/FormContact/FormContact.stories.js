import FormContact from './FormContact.vue'

export default {
  title: 'Components/FormContact',
  component: FormContact
}

// template
const FormContactTemplate = () => ({
  components: { FormContact },
  template: `<FormContact />`
})

// stories
export const BaseStory = FormContactTemplate.bind({})
BaseStory.storyName = 'FormContact'
