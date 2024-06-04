import LogoColor from '../../assets/images/svg/logo-tribrand-color.svg'
import NavLogoLinks from '@explorer-1/vue/src/components/NavLogoLinks/NavLogoLinks.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavLogoLinks',
  components: {
    NavLogoLinks
  },
  excludeStories: /.*Data$/
}

// templates
const NavLogoLinksTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavLogoLinks },
  template: `<div class="flex"><NavLogoLinks><img :src="src" alt="Logo Image" /></NavLogoLinks></div>`
})

export const Base = NavLogoLinksTemplate.bind({})
Base.storyName = 'NavLogoLinks'
Base.args = { src: LogoColor }
