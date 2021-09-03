import customTheme from './customTheme.js'
import '../dist/css/explorer-1.min.css'
import '../dist/css/font-face.css'
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

  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}