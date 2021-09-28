import { BaseImageCaptionTemplate } from './BaseImageCaption'

export default {
  title: 'Components/Base/BaseImageCaption',
  argTypes: {
    caption: {
      type: { name: 'string', required: true },
    },
    credit: {
      type: { name: 'string', required: false },
      description: 'Optional credit information',
    },
    url: {
      type: { name: 'string', required: false },
      description: 'Link to a page with more information/details.',
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: '',
      },
    },
  },
}

export const Default = BaseImageCaptionTemplate.bind({})
Default.args = {
  caption:
    '<p>Aliquam finibus accumsan dapibus. In <a href="#">sagittis et sapien</a> nec vehicula. Suspendisse euismod consequat risus, vel dignissim elit scelerisque sed. Nullam elit ipsum, suscipit ut quam et, molestie aliquam leo.</p>',
  credit: 'NASA/JPL',
  url: '#',
  link_text: 'Full Image Details',
}
