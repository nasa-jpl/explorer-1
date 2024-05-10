import { AppBarInternalTemplate } from './AppBarInternal'

export default {
  title: 'Global Layout/Headers/For Internal Sites/Elements/AppBar',
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'Displays JPL branding, the org or name of the site, and optionally a sign in/out widget.'
      }
    }
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

export const Default = AppBarInternalTemplate.bind({})
Default.storyName = 'AppBar'
Default.args = AppBarInternalData
