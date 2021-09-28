import { BlockIframeEmbedTemplate } from './BlockIframeEmbed'

export default {
  title: 'Components/Blocks/BlockIframeEmbed',
  argTypes: {
    title: {
      type: { name: 'string', required: true },
      description: 'Iframe title used for accessibility'
    },
    url: {
      type: { name: 'string', required: false },
      description: 'Link to the embed source',
    },
    height: {
      type: { name: 'integer', required: true },
      description: 'Iframe embed height',
      table: {
        defaultValue: { summary: '400' },
      },
    },
    caption: {
      type: { name: 'string', required: false },
      description: 'Iframe caption', 
    },
    link_text: {
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

export const Default = BlockIframeEmbedTemplate.bind({})
Default.args = {
  title: 'Eyes Perserverance Embed',
  url: 'https://eyes.nasa.gov/apps/orrery/#/sc_perseverance',
  height: 400,
  caption: '<p>With three giant blades stretching out some 66 feet (20 meters) from its cylindrical, six-sided body, the Juno spacecraft is a dynamic engineering marvel, spinning to keep itself stable as it makes oval-shaped orbits around Jupiter. View the full interactive experience at <a href="https://eyes.nasa.gov/apps/orrery/#/home">Eyes on the Solar System</a>.</p>',
  link_text: '',
}
Default.decorators = [
  (Story) => `<div id="storyDecorator" class="mx-auto max-w-screen-md">${Story()}</div>`,
]
Default.parameters = {
  html: {
    root: '#storyDecorator',
  },
}
