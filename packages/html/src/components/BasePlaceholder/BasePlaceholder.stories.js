import { BasePlaceholderTemplate } from './BasePlaceholder'

export default {
  title: 'Components/Base/BasePlaceholder',
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'An animated content placeholder, useful when loading content.'
      }
    }
  }
}

export const BaseStory = BasePlaceholderTemplate.bind()
BaseStory.storyName = 'BasePlaceholder'
