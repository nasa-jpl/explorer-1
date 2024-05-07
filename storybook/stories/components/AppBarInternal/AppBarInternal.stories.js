import { AppBarInternalTemplate } from './AppBarInternal'

export default {
  title: 'Global Layout/Headers/For Internal Sites/Elements/AppBar',
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    themes: {
      clearable: false,
      list: [
        {
          name: 'ThemeLight',
          class: ['ThemeLight', 'sbdocs-preview-full-width'],
          color: '#ffffff',
          default: true,
        },
        {
          name: 'ThemeDark',
          class: ['ThemeDark', 'sbdocs-preview-full-width'],
          color: '#000000',
        },
        {
          name: 'ThemeInternal',
          class: ['ThemeInternal', 'sbdocs-preview-full-width'],
          color: '#53C8ED',
          default: true,
        },
      ],
    },
  },
}

export const AppBarInternalData = {
  orgNumber: '18x',
  siteTitle: 'DesignLab',
  includeSignIn: true,
  signedIn: false,
  userData: {
    firstName: 'First',
    lastName: 'Last',
    photo: 'https://picsum.photos/150/200',
  },
  logInUrl: '#',
  logOutUrl: '#',
}

export const Basic = AppBarInternalTemplate.bind({})
Basic.storyName = 'AppBar'
Basic.args = AppBarInternalData
