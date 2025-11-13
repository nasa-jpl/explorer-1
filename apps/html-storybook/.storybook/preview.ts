import { MINIMAL_VIEWPORTS } from 'storybook/viewport'
import customTheme from '@explorer-1/common-storybook/src/config/customTheme'
import '@explorer-1/html/src/assets/scss/styles.scss'
import './../public/dist/css/font-face.css'
import '@explorer-1/html/src/main.js'
import '@explorer-1/common-storybook/src/config/canvas.css'
import { withGlobals } from './withGlobals'
import beautify from 'js-beautify'
import { beautifyHtmlOptions } from '@explorer-1/common-storybook/src/plugins/beautifyHtmlOptions.js'

// viewports that match our tailwind config
const customViewports = {
  screenSm: {
    name: 'screen-sm',
    styles: {
      width: '640px',
      height: '100%'
    }
  },
  screenMd: {
    name: 'screen-md',
    styles: {
      width: '768px',
      height: '100%'
    }
  },
  screenLg: {
    name: 'screen-lg',
    styles: {
      width: '1024px',
      height: '100%'
    }
  },
  screenXl: {
    name: 'screen-xl',
    styles: {
      width: '1280px',
      height: '100%'
    }
  },
  screen2xl: {
    name: 'screen-2xl',
    styles: {
      width: '1440px',
      height: '100%'
    }
  },
  screen3xl: {
    name: 'screen-3xl',
    styles: {
      width: '1800px',
      height: '100%'
    }
  }
}

const preview = {
  globalTypes: {
    themesConfig: {
      defaultValue: {
        themes: ['Default', 'EDU', 'Internal'],
        method: 'css'
      }
    },
    variantsConfig: {
      defaultValue: {
        variants: ['ThemeVariantLight', 'ThemeVariantDark', 'ThemeVariantGray'],
        method: 'css'
      }
    },
    theme: {
      description: 'Global Theme',
      defaultValue: 'ThemeDefault',
      toolbar: {
        title: 'Theme',
        // https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon
        icon: 'eye',
        items: [
          {
            value: 'ThemeDefault',
            icon: 'home',
            title: 'Default Theme'
          },
          { value: 'ThemeEdu', icon: 'globe', title: 'EDU Theme' },
          { value: 'ThemeInternal', icon: 'key', title: 'Internal Theme' }
        ],
        dynamicTitle: true
      }
    },
    variant: {
      description: 'Theme Variant',
      defaultValue: 'ThemeVariantLight',
      toolbar: {
        title: 'Variant',
        // https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon
        icon: 'eye',
        items: [
          {
            value: 'ThemeVariantLight',
            icon: 'circlehollow',
            title: 'Light Variant'
          },
          { value: 'ThemeVariantDark', icon: 'circle', title: 'Dark Variant' },
          { value: 'ThemeVariantGray', icon: 'contrast', title: 'Gray Variant' }
        ],
        dynamicTitle: true
      }
    }
  },

  decorators: [withGlobals],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    // add custom viewports to the toolbar
    viewport: {
      options: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports
      }
    },
    // options for the html tab add-on
    html: {
      removeComments: true,
      removeEmptyComments: true,
      highlighter: {
        // showLineNumbers: true // default: false
        wrapLines: false // default: true
      },
      transform: (code: any) => {
        // Remove attributes `data-chromatic` and `ng-reflect`:
        code = code.replace(/(?:data-chromatic|ng-reflect).*?="[\S\s]*?"/g, '')
        // @ts-ignore
        code = beautify.html(code, beautifyHtmlOptions)
        return code
      }
    },
    // set the theme for docs (same as UI)
    docs: {
      theme: customTheme
    },
    // sort stories in the sidebar
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Internal Header', 'Internal Footer']
      }
    },
    backgrounds: {
      grid: {
        disable: true
      }
    }
  },

  tags: ['autodocs'],

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  }
}

export default preview
