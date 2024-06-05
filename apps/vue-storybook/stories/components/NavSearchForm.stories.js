import NavSearchForm from '@explorer-1/vue/src/components/NavSearchForm/NavSearchForm.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavSearchForm',
  component: NavSearchForm,
  excludeStories: /.*Data$/
}

// templates
const NavSearchFormTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavSearchForm },
  template: `<NavSearchForm :mobile="mobile" />`
})

export const Form = NavSearchFormTemplate.bind({})
Form.storyName = 'NavSearchForm'
Form.args = {
  mobile: false
}
