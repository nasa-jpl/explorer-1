import NavJumpMenu from './NavJumpMenu.vue'

export default {
  title: 'Navigation/Jump Menu',
  component: NavJumpMenu,
  tags: ['navigation'],
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
    title: 'Page Title',
    jumpLinks: JumpLinksData,
    invert: true
  }
}

export const ExtraLong = {
  args: {
    title: 'Page Title',
    jumpLinks: [
      ...JumpLinksData,
      ...JumpLinksData,
      ...JumpLinksData,
      ...JumpLinksData,
      ...JumpLinksData,
      ...JumpLinksData,
      ...JumpLinksData,
      ...JumpLinksData
    ],
    invert: true
  }
}

export const Light = {
  args: {
    title: 'Page Title',
    jumpLinks: JumpLinksData,
    invert: false
  }
}
