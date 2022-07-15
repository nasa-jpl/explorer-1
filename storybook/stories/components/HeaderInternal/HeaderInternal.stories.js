import { HeaderInternalTemplate } from './HeaderInternal'

export default {
  title: 'Components/Headers/Internal/Header',
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
  },
}

export const HeaderInternalData = {
  orgNumber: '18x',
  siteTitle: 'DesignLab',
  includeSignIn: false,
}

export const Default = HeaderInternalTemplate.bind({})
Default.args = HeaderInternalData

export const SignIn = HeaderInternalTemplate.bind({})
SignIn.storyName = 'With Sign In'
SignIn.args = {
  ...HeaderInternalData,
  includeSignIn: true,
}
