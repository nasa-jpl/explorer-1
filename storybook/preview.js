import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import customTheme from './customTheme.js'
import '../dist/css/explorer-1.min.css'
import '../dist/js/explorer-1.min.js'
import './canvas.css'
import { withGlobals } from './withGlobals'

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

const preview = {
  globalTypes: {
    themesConfig: {
      defaultValue: ['ThemeLight', 'ThemeInternal', 'ThemeDark'],
      method: 'css',
    },
    theme: {
      description: 'Global theme for components',
      defaultValue: 'ThemeLight',
      toolbar: {
        title: 'Theme',
        // https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon
        icon: 'eye',
        items: [
          { value: 'ThemeLight', icon: 'circlehollow', title: 'Light' },
          { value: 'ThemeDark', icon: 'circle', title: 'Dark' },
          { value: 'ThemeInternal', icon: 'collapse', title: 'Internal' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withGlobals],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // add custom viewports to the toolbar
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
    // options for the html tab add-on
    html: {
      removeEmptyComments: true,
    },
    // set the theme for docs (same as UI)
    docs: {
      theme: customTheme,
    },
    // sort stories in the sidebar
    options: {
      storySort: {
        method: 'alphabetical',
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
            'Logos',
            'Themes',
            'Grid and Layout',
            'Responsive Design',
          ],
          'Global Layout',
          [
            'Overview',
            'Headers',
            [
              'Overview',
              'External',
              'For Internal Sites',
              [
                '*',
                'Elements',
                [
                  'Overview',
                  'AppBar',
                  'Navigation',
                  'Panel',
                  'Highlight',
                  'Section',
                ],
              ],
            ],
            'Footers',
            ['Overview', 'External', 'Internal'],
          ],
          'Components',
          [
            'Overview',
            'Base',
            ['Overview'],
            'Blocks',
            ['Overview', 'Heroes', ['Overview', 'Small', 'Medium', 'Large']],
            'Forms',
            ['Overview', 'TextInput', 'TextArea'],
            'Search',
            ['Overview'],
            'Mixins',
            [
              'Overview',
              'MixinAnimationCaret',
              'MixinVideoBg',
              'MixinCarousel',
            ],
            'Utilities',
            ['Overview', '*'],
          ],
        ],
      },
    },
    backgrounds: {
      default: 'light',
      grid: {
        disable: true,
      },
    },
  },
}

export default preview
