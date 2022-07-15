import { AppBarInternalTemplate } from './AppBarInternal'

export default {
  title: 'Components/Headers/Internal/AppBar',
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
  },
}

export const AppBarInternalData = {
  orgNumber: '18x',
  siteTitle: 'DesignLab',
  includeSignIn: false,
  signedIn: false,
  userData: {
    firstName: 'First',
    lastName: 'Last',
    photo: 'https://placekitten.com/150/200',
  },
  logInUrl: '#',
  logOutUrl: '#',
}

export const Default = AppBarInternalTemplate.bind({})
Default.args = AppBarInternalData

export const SignIn = AppBarInternalTemplate.bind({})
SignIn.storyName = 'With Sign In'
SignIn.args = {
  ...AppBarInternalData,
  includeSignIn: true,
}
