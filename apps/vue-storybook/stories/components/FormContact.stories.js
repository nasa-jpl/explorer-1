import FormContact from '@explorer-1/vue/src/components/FormContact/FormContact.vue'

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
export const Contact = FormContactTemplate.bind({})
Contact.storyName = 'FormContact'
