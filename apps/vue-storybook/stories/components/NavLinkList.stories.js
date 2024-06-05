import NavLinkList from '@explorer-1/vue/src/components/NavLinkList/NavLinkList.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavLinkList',
  component: NavLinkList,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="bg-dark-blue p-8"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

export const MenuLinkColumnWithHeaderData = {
  blockType: 'MenuLinkColumnWithHeader',
  heading: 'The Heading',
  headingPage: {
    url: '/solar-system/'
  },
  links: [
    {
      linkPage: {
        title: 'Missions',
        url: '/missions/aquarius/'
      },
      title: 'Recent Missions',
      path: null
    },
    {
      linkPage: null,
      title: 'External Link Test',
      path: 'https://nasa.gov'
    }
  ]
}
// templates
const NavLinkListTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavLinkList },
  template: `<NavLinkList :data="data" />`
})

export const Default = NavLinkListTemplate.bind({})
Default.storyName = 'NavLinkList'
Default.args = { data: MenuLinkColumnWithHeaderData }
