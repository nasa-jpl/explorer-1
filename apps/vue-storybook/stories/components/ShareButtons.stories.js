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

// template
const ShareButtonsTemplate = (args) => ({
  props: Object.keys(args),
  components: { ShareButtons },
  template: `
    <ShareButtons :title="title" :url="url" :inline="inline" />
  `
})

export const Default = ShareButtonsTemplate.bind({})
Default.args = {
  ...BlockShareButtonsData
}
