import { NavInternalHighlightTemplate } from './NavInternalHighlight'

export default {
  title: 'Global Layout/Headers/For Internal Sites/Elements/Highlight',
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'Highlighted content intended for use within [NavInternalPanel](/?path=/docs/global-layout-headers-for-internal-sites-elements-panel--basic) ',
      },
    },
    html: {
      root: '#storyRoot',
    },
  },
  decorators: [
    (Story) => `<div id="storyRoot" class="NavInternal w-96">${Story()}</div>`,
  ],
}

export const NavInternalHighlightData = {
  title: 'A Highlight',
  description: 'Lorem ipsum dolor sit amet consectatur adipscing',
  image: {
    src: 'http://placekitten.com/512/288',
    width: '512',
    height: '288',
    alt: 'Alt text',
  },
  link: '#',
  ariaLabel: 'Go to this Highlight',
}

export const Default = NavInternalHighlightTemplate.bind({})
Default.storyName = 'Highlight'
Default.args = NavInternalHighlightData
