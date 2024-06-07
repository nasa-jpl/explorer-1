import { MenuLinkColumnWithHeaderData } from './NavLinkList.stories'
import NavHeading from '@explorer-1/vue/src/components/NavHeading/NavHeading.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavHeading',
  component: NavHeading,
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

export const Default = {
  args: { data: MenuLinkColumnWithHeaderData }
}
