import BaseExploreApp from './BaseExploreApp.vue'

export default {
  title: 'Templates/ExploreJPL/BaseExploreApp',
  component: BaseExploreApp,
  parameters: {
    html: {
      root: '#storyRoot'
    },
    layout: 'fullscreen',
    slots: {
      hero: 'Hero content (above the nav) `<template #hero>`',
      default: 'Body content (below the nav) `<template #default>`'
    }
  },
  excludeStories: /.*(Data)$/
}

// stories
export const BaseStory = {
  name: 'BaseExploreApp'
}
