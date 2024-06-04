import { MenuLinkColumnWithHeaderData } from './NavLinkList.stories'
import NavHeading from '@explorer-1/vue/src/components/NavHeading/NavHeading.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavHeading',
  components: {
    NavHeading
  },
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="p-8 bg-dark-blue"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    viewMode: 'docs'
  },
  excludeStories: /.*Data$/
}

// templates
const NavHeadingTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavHeading },
  template: `<NavHeading :data="data" />`
})

export const Default = NavHeadingTemplate.bind({})
Default.storyName = 'NavHeading'
Default.args = { data: MenuLinkColumnWithHeaderData }
