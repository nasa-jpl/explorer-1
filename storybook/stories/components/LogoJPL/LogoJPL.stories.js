import { LogoJPLTemplate } from './LogoJPL'

export default {
  title: 'Foundation/Logos/LogoJPL',
  argTypes: {
    customClass: {
      type: 'string',
      description: 'Use Tailwind CSS classes to adjust color and size.',
      control: { type: 'text' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
}

export const Standard = LogoJPLTemplate.bind({})
Standard.storyName = 'LogoJPL'
Standard.args = { customClass: 'text-6xl text-jpl-red' }
