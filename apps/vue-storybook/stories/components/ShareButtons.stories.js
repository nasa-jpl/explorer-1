import ShareButtons from '@explorer-1/vue/src/components/ShareButtons/ShareButtons.vue'

export default {
  title: 'Components/ShareButtons',
  component: ShareButtons,
  excludeStories: /.*Data$/
}

// data
export const BlockShareButtonsData = {
  title: 'Title of the story',
  url: '/news/slug',
  inline: false
}

export const Default = { args: BlockShareButtonsData }
