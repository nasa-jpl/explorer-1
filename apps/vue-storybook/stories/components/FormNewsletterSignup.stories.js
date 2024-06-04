import FormNewsletterSignup from '@explorer-1/vue/src/components/FormNewsletterSignup/FormNewsletterSignup.vue'

export default {
  title: 'WWW/Components/FormNewsletterSignup',
  component: FormNewsletterSignup
}

// template
const FormNewsletterSignupTemplate = () => ({
  components: { FormNewsletterSignup },
  template: `<FormNewsletterSignup />`
})

// stories
export const NewsletterSignup = FormNewsletterSignupTemplate.bind({})
NewsletterSignup.storyName = 'FormNewsletterSignup'
