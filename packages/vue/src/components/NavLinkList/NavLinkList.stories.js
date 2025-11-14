import NavLinkList from './NavLinkList.vue'

export default {
  title: 'Navigation/Elements/NavLinkList',
  component: NavLinkList,
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="bg-jpl-blue-darker p-8"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyRoot'
    }
  },
  excludeStories: /.*Data$/
}

export const MenuLinkColumnWithHeaderData = {
  blockType: 'MenuLinkColumnWithHeader',
  heading: 'Online Resources',
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

export const BaseStory = {
  args: {
    data: MenuLinkColumnWithHeaderData
  }
}
