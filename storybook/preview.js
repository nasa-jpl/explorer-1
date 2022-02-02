import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import customTheme from './customTheme.js'
import '../dist/css/explorer-1.min.css'
import '../dist/js/explorer-1.min.js'
import './canvas.css'

// viewports that match our tailwind config
const customViewports = {
  screenSm: {
    name: 'screen-sm',
    styles: {
      width: '640px',
      height: '100%',
    },
  },
  screenMd: {
    name: 'screen-md',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  screenLg: {
    name: 'screen-lg',
    styles: {
      width: '1024px',
      height: '100%',
    },
  },
  screenXl: {
    name: 'screen-xl',
    styles: {
      width: '1280px',
      height: '100%',
    },
  },
  screen2xl: {
    name: 'screen-2xl',
    styles: {
      width: '1440px',
      height: '100%',
    },
  },
  screen3xl: {
    name: 'screen-3xl',
    styles: {
      width: '1800px',
      height: '100%',
    },
  },
}

export const parameters = {
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },

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
        'Roadmap',
        'Getting Started',
        ['Developer'],
        'Guides',
        'Foundation',
        [
          'Colors',
          'Typography',
          'Icons',
          'Themes',
          'Grid and Layout',
          'Responsive Design',
        ],
        'Components',
        [
          'Overview',
          'Base',
          ['Overview'],
          'Blocks',
          ['Overview', 'Heroes', ['Overview']],
          'Forms',
          ['Overview', 'TextInput', 'TextArea'],
          'Search',
          ['Overview'],
        ],
      ],
    },
  },
}
