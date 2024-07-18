import LogoColor from '@explorer-1/common/src/images/svg/logo-tribrand-color.svg'
import NavLogoLinks from './NavLogoLinks.vue'

export default {
  title: 'Navigation/Elements/NavLogoLinks',
  component: NavLogoLinks,
  excludeStories: /.*Data$/
}

// TODO: VUE3 -- fix logo image in story
export const BaseStory = {
  render: (args) => ({
    components: { NavLogoLinks },
    setup() {
      return { args }
    },
    template: `<div class="flex"><NavLogoLinks><img src="/images/svg/logo-tribrand-color.svg" alt="Logo Image" /></NavLogoLinks></div>`
  })
}
