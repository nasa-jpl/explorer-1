import NavJumpMenu from './NavJumpMenu.vue'

export default {
  title: 'Navigation/Jump Menu',
  component: NavJumpMenu,
  tags: ['!autodocs'],
  excludeStories: /.*Data$/
}

const JumpLinksData = [
  {
    title: 'Heading title',
    path: '#heading_title'
  },
  {
    title: 'Heading title',
    path: '#heading_title'
  },
  {
    title: 'Heading title',
    path: '#heading_title'
  },
  {
    title: 'Heading title',
    path: '#heading_title'
  },
  {
    title: 'Heading title',
    path: '#heading_title'
  }
]
export const BaseStory = {
  name: 'Jump Menu',
  args: {
    title: {
      title: 'Page Title',
      path: '#'
    },
    jumpLinks: JumpLinksData,
    invert: true
  }
}

export const Light = {
  args: {
    title: {
      title: 'Page Title',
      path: '#'
    },
    jumpLinks: JumpLinksData,
    invert: false
  }
}
