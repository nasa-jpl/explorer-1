import { LogoJPLTemplate } from './LogoJPL'

export default {
  title: 'Foundation/Logos/LogoJPL',
  argTypes: {
    customClass: {
      type: 'string',
      description: 'Use Tailwind CSS utility classes if needed.',
      control: { type: 'text' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
}

export const Default = LogoJPLTemplate.bind({})
Default.storyName = 'LogoJPL'
Default.args = { customClass: '' }
