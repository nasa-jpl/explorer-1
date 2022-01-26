import { BaseImageCaptionTemplate } from './BaseImageCaption'

export default {
  title: 'Components/Base/BaseImageCaption',
  excludeStories: /.*Data$/,
  argTypes: {
    caption: {
      type: { name: 'string', required: true },
      description: 'Accepts rich text and plain text.',
    },
    credit: {
      type: { name: 'string', required: false },
      description:
        'Optional credit information. Limited rich text accepted (text styles and links only, no line or paragraph breaks).',
    },
    url: {
      type: { name: 'string', required: false },
      description: 'Link to a page with more information/details.',
    },
    linkText: {
      type: { name: 'string', required: false },
      description: 'Link text.',
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

export const BaseImageCaptionData = {
  caption:
    '<p>Aliquam finibus accumsan dapibus. In <a href="#">sagittis et sapien</a> nec vehicula. Suspendisse euismod consequat risus, vel dignissim elit scelerisque sed. Nullam elit ipsum, suscipit ut quam et, molestie aliquam leo.</p>',
  credit: 'NASA/JPL',
  url: '#',
  linkText: 'Full Image Details',
}

export const Default = BaseImageCaptionTemplate.bind({})
Default.storyName = 'BaseImageCaption'
Default.args = BaseImageCaptionData
