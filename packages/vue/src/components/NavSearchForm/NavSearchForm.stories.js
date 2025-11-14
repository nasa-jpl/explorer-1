import NavSearchForm from './NavSearchForm.vue'

export default {
  title: 'Navigation/Elements/NavSearchForm',
  component: NavSearchForm,
  tags: ['forms', 'navigation'],
  excludeStories: /.*Data$/
}

export const BaseStory = {
  args: {
    mobile: false
  }
}
