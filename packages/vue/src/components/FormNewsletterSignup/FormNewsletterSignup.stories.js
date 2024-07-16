import FormNewsletterSignup from './FormNewsletterSignup.vue'

export default {
  title: 'Components/Forms/FormNewsletterSignup',
  component: FormNewsletterSignup
}

// template
const FormNewsletterSignupTemplate = () => ({
  components: { FormNewsletterSignup },
  template: `<FormNewsletterSignup />`
})

// stories
export const BaseStory = FormNewsletterSignupTemplate.bind({})
BaseStory.storyName = 'FormNewsletterSignup'
