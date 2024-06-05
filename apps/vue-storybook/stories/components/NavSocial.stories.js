import NavSocial from '@explorer-1/vue/src/components/NavSocial/NavSocial.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavSocial',
  component: NavSocial,
  excludeStories: /.*Data$/
}

// templates
const NavSocialTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavSocial },
  template: `<div class="p-8" :class="{'bg-dark-blue' : dark}"><NavSocial :dark="dark" /></div>`
})

export const Social = NavSocialTemplate.bind({})
Social.args = { dark: false }

export const SocialDark = NavSocialTemplate.bind({})
SocialDark.args = { dark: true }
