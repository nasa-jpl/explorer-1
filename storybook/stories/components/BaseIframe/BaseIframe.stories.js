import { BaseIframeTemplate } from './BaseIframe'

export default {
  title: 'Components/Base/BaseIframe',
  argTypes: {
    title: {
      type: { name: 'string', required: true },
      description: 'Iframe title used for accessibility',
    },
    url: {
      type: { name: 'string', required: true },
      description: 'Link to the embed source',
    },
    height: {
      type: { name: 'integer', required: false },
      description: 'Iframe embed height',
    },
  },
  decorators: [
    (Story) => `<div id="storyRoot" class="mx-auto container">${Story()}</div>`,
  ],
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'Basic iframe markup. For responsive sizing, use `BlockIframeEmbed`.',
      },
    },
    html: {
      root: '#storyRoot',
    },
  },
}

const BaseIframeData = {
  title: 'Perseverance Rover Embed',
  url: 'https://mars.nasa.gov/gltf_embed/25042',
  height: 400,
}

export const Default = BaseIframeTemplate.bind({})
Default.storyName = 'BaseIframe'
Default.args = BaseIframeData
