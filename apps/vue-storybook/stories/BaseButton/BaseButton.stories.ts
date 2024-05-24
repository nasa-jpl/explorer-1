import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton, { variants } from '@explorer-1/vue/src/components/BaseButton/BaseButton.vue'

type Story = StoryObj<typeof BaseButton>

const meta: Meta<typeof BaseButton> = {
  title: 'Components/Base/BaseButton',
  component: BaseButton,
  excludeStories: /.*(Data)$/,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Simple button with several style variations.'
      }
    }
  },
  argTypes: {
    ariaLabel: {
      type: 'string',
      description:
        "ARIA label. Recommended if your button label isn't descriptive, or if it only contains an icon."
    },
    variant: {
      type: 'string',
      description: 'Button variant type',
      control: {
        type: 'select',
        options: Object.keys(variants)
      },
      table: {
        defaultValue: { summary: 'default' }
      }
    }
  }
}

export default meta

export const BaseButtonData = {
  label: 'Explore',
  ariaLabel: 'Explore',
  compact: false,
  disabled: false,
  to: '/'
}

const Template = (args: Story) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: '<BaseButton v-bind="args">Link Slot</BaseButton>'
})

export const PrimaryButton: Story = Template.bind({})
PrimaryButton.args = {
  ...BaseButtonData,
  variant: 'primary'
}
export const SecondaryButton: Story = Template.bind({})
SecondaryButton.args = {
  ...BaseButtonData,
  variant: 'secondary'
}
export const DarkButton: Story = Template.bind({})
DarkButton.args = {
  ...BaseButtonData,
  variant: 'dark'
}
