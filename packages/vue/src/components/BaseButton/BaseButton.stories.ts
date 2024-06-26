import BaseButton, { variants } from './BaseButton.vue'

// TODO: add the rest of the button stories (icons, disabled, etc.)
export default {
  title: 'Components/Base/BaseButton',
  component: BaseButton,
  excludeStories: /.*(Data)$/,
  tags: ['autodocs'],
  parameters: {
    slots: {
      default: 'Default slot content'
    },
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
        type: 'select'
      },
      options: Object.keys(variants),
      table: {
        defaultValue: { summary: 'default' }
      }
    }
  }
}

export const BaseButtonData = {
  label: 'Explore',
  ariaLabel: 'Explore',
  compact: false,
  disabled: false,
  to: '/',
  default: 'Button'
}

export const PrimaryButton = {
  args: {
    ...BaseButtonData,
    variant: 'primary'
  }
}
export const SecondaryButton = {
  args: {
    ...BaseButtonData,
    variant: 'secondary'
  }
}
export const DarkButton = {
  args: {
    ...BaseButtonData,
    variant: 'dark'
  }
}
