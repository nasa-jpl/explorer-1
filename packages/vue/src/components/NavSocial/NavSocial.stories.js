import NavSocial from './NavSocial.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavSocial',
  component: NavSocial,
  excludeStories: /.*Data$/
}

export const Social = { args: { dark: false } }

export const SocialDark = {
  args: { dark: true },
  render: (args) => ({
    components: { NavSocial },
    setup() {
      return { args }
    },
    template: `<div class="bg-jpl-blue-darker p-8"><NavSocial v-bind="args" /></div>`
  })
}
