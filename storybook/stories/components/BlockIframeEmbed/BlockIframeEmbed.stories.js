import { BlockIframeEmbedTemplate } from './BlockIframeEmbed'

export default {
  title: 'Components/Blocks/BlockIframeEmbed',
  tags: ['autodocs'],
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
      description:
        'Iframe embed height. Will default to a responsive 16:9 aspect ratio if left blank.',
    },
    caption: {
      type: { name: 'string', required: false },
      description: 'Iframe caption',
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'An iframe embed with an optional caption. View the component to see a demo.',
      },
    },
    html: {
      root: '#storyRoot',
    },
  },
}

const BlockIframeEmbedData = {
  title: 'Perseverance Rover Embed',
  url: 'https://mars.nasa.gov/gltf_embed/25042',
  caption:
    '<p>Click (or touch) and drag to interact with this 3D model of the Mars 2020 Perseverance Rover. Learn more about the mission at <a href="mars.nasa.gov/mars2020/">mars.nasa.gov/mars2020/</a>.</p>',
}

export const Default = BlockIframeEmbedTemplate.bind({})
Default.args = BlockIframeEmbedData
Default.decorators = [
  (Story) => `<div id="storyRoot" class="mx-auto container">${Story()}</div>`,
]

export const CustomHeight = BlockIframeEmbedTemplate.bind({})
CustomHeight.args = { ...BlockIframeEmbedData, height: 400 }
CustomHeight.decorators = [
  (Story) => `<div id="storyRoot" class="mx-auto container">${Story()}</div>`,
]

export const LazyLoad = BlockIframeEmbedTemplate.bind({})
LazyLoad.args = BlockIframeEmbedData
LazyLoad.decorators = [
  (Story) => `
  <div class="max-w-full">
    <div style="height:2500px">
      Scroll down
    </div>
    <div id="storyRoot">
      ${Story()}
    </div>
  </div>
  `,
]
