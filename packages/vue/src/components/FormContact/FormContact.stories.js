import FormContact from './FormContact.vue'

export default {
  title: 'Components/Forms/FormContact',
  component: FormContact,
  tags: ['forms']
}

// template
const FormContactTemplate = () => ({
  components: { FormContact },
  template: `<FormContact />`
})

// stories
export const BaseStory = FormContactTemplate.bind({})
BaseStory.storyName = 'FormContact'
