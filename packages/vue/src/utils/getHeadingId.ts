import { camelCase } from 'lodash'

export const getHeadingId = (heading: string, blockId?: string) => {
  return 'anchor_' + camelCase(heading) + (blockId ? '_' + camelCase(blockId) : '')
}
