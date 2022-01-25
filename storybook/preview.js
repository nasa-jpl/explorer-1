import customTheme from './customTheme.js'
import '../dist/css/explorer-1.min.css'
import '../dist/js/explorer-1.min.js'
import './canvas.css'

export const parameters = {
  // themes are used to switch the wrapper between ThemeLight and ThemeDark
  themes: {
    clearable: false,
    list: [
      {
        name: 'ThemeLight',
        class: 'ThemeLight',
        color: '#ffffff',
        default: true,
      },
      {
        name: 'ThemeDark',
        class: 'ThemeDark',
        color: '#000000',
      },
    ],
  },

  // options for the html tab add-on
  html: {
    removeEmptyComments: true,
  },

  // set docs as the default viewMode. This can be overridden at the component level
  viewMode: 'docs',

  // set the theme for docs (same as UI)
  docs: {
    theme: customTheme,
  },

  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    // show full documentation for each property
    // see: https://storybook.js.org/docs/react/essentials/controls#show-full-documentation-for-each-property
    expanded: true,
  },

  options: {
    storySort: {
      order: [
        'Introduction',
        'Getting Started',
        ['Developer'],
        'Brand Identity',
        [
          'Colors',
          'Typography',
          'Logos',
          ['LogoTribrand'],
          'Icons',
          'Themes',
          'Responsive Design',
          'Grid and Layout',
        ],
        'Components',
        [
          'Overview',
          'Base',
          ['Overview'],
          'Blocks',
          ['Overview'],
          'Forms',
          ['Overview', 'TextInput', 'TextArea'],
          'Search',
          ['Overview'],
        ],
        'Layouts',
      ],
    },
  },
}
