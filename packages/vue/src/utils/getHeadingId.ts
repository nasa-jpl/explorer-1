import { camelCase } from 'lodash'
import { type HeadingLevel } from '../components/BaseHeading/BaseHeading.vue'
export const getHeadingId = (heading: HeadingLevel, blockId?: string) => {
  return 'anchor_' + camelCase(heading) + (blockId ? '_' + camelCase(blockId) : '')
}
