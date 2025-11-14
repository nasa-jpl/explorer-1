import NavSocial from './NavSocial.vue'

export default {
  title: 'Navigation/Elements/NavSocial',
  component: NavSocial,
  tags: ['navigation'],
  excludeStories: /.*Data$/
}

export const BaseStory = { args: { dark: false } }

export const Dark = {
  args: { dark: true },
  render: (args) => ({
    components: { NavSocial },
    setup() {
      return { args }
    },
    template: `<div class="bg-jpl-blue-darker p-8"><NavSocial v-bind="args" /></div>`
  })
}
