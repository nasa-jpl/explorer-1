import { BasePlaceholderTemplate } from './BasePlaceholder'

export default {
  title: 'Components/Base/BasePlaceholder',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'An animated content placeholder, useful when loading content.',
      },
    },
  },
}

export const Default = BasePlaceholderTemplate.bind()
Default.storyName = 'BasePlaceholder'
