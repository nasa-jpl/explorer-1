import { AppBarInternalTemplate } from './AppBarInternal'
import AppBarInternalStoryMeta from '@explorer-1/common-storybook/src/story-data/AppBarInternal'

export default {
  ...AppBarInternalStoryMeta.meta
}

export const Default = AppBarInternalTemplate.bind({})
Default.storyName = AppBarInternalTemplate.stories.Default.storyName
Default.args = AppBarInternalTemplate.stories.Default.args
