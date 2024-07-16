import LogoColor from '@explorer-1/common/src/images/svg/logo-tribrand-color.svg'
import NavLogoLinks from './NavLogoLinks.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavLogoLinks',
  component: NavLogoLinks,
  excludeStories: /.*Data$/
}

// TODO: VUE3 -- fix logo image in story
export const BaseStory = {
  args: {
    src: LogoColor
  },
  render: (args) => ({
    components: { NavLogoLinks },
    setup() {
      return { args }
    },
    template: `<div class="flex"><NavLogoLinks><img :src="src" alt="Logo Image" /></NavLogoLinks></div>`
  })
}
