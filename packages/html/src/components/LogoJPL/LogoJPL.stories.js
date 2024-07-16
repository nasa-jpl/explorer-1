import { LogoJPLTemplate } from './LogoJPL'

const Stories = {
  title: 'Foundation/Logos/LogoJPL',
  tags: ['!autodocs'],
  excludeStories: /.*Data$/,
  argTypes: {
    colorClass: {
      type: 'string',
      description: 'Only a few color options are allowed.',
      control: {
        type: 'select',
        options: ['text-jpl-red', 'text-black', 'text-white']
      },
      table: {
        defaultValue: { summary: 'text-jpl-red' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `The JPL Logo has strict color usage restrictions and should only be used on internal sites, namely in the [AppBar](?path=/docs/global-layout-headers-for-internal-sites-elements-overview--docs).`
      }
    }
  }
}

export const BaseStory = LogoJPLTemplate.bind({})
BaseStory.storyName = 'Standard'
BaseStory.args = { colorClass: 'text-jpl-red' }

export const Black = LogoJPLTemplate.bind({})
Black.args = { colorClass: 'text-black' }

export const White = LogoJPLTemplate.bind({})
White.args = { colorClass: 'text-white' }
White.decorators = [(Story) => `<div class="p-5 bg-black">${Story()}</div>`]

export default Stories
