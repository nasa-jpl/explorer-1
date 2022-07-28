import { NavInternalHighlightTemplate } from './NavInternalHighlight'

export default {
  title: 'Global Layout/Headers/For Internal Sites/Elements/Highlight',
  excludeStories: /.*Data$/,
  // argTypes: {
  //   menuItems: {
  //     type: { name: 'array', required: false },
  //     description: 'Complex object of menu items',
  //   },
  // },
  parameters: {
    viewMode: 'docs',

    html: {
      root: '#storyRoot',
    },
  },
  decorators: [
    (Story) =>
      `<div id="storyRoot" class="NavInternal w-96">
        <!-- Start Component -->
          ${Story()}<!-- End Component -->
      </div>`,
  ],
}

export const NavInternalHighlightData = {
  title: 'This Highlight',
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
