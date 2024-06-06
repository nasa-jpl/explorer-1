import { mount } from '@vue/test-utils'

import BlockTeaser from './BlockTeaser.vue'
import { Empty } from './BlockTeaser.stories'

describe('BlockTeaser', () => {
  test('renders with partial data', () => {
    mount(BlockTeaser, {
      propsData: { ...Empty.args }
    })
  })
})
