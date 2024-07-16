import BaseImageCaption from './BaseImageCaption.vue'
export default {
  title: 'Components/Base/BaseImageCaption',
  component: BaseImageCaption,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component: 'Caption text used with both images and videos.'
      }
    }
  }
}

// data
export const BaseImageCaptionData = {
  caption:
    '<p>Aliquam finibus accumsan dapibus. In <a href="#">sagittis et sapien</a> nec vehicula. Suspendisse euismod consequat risus, vel dignissim elit scelerisque sed. Nullam elit ipsum, suscipit ut quam et, molestie aliquam leo.</p>',
  credit: 'NASA/JPL',
  detailUrl: '/image-detail/slug/'
}

export const BaseStory = {
  args: {
    data: BaseImageCaptionData
  }
}
