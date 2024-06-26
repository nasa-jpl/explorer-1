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
    template: `<div class="p-8" class="bg-dark-blue"><NavSocial v-bind="args" /></div>`
  })
}
