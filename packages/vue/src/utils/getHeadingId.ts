import { camelCase } from 'lodash'

export const getHeadingId = (heading: string, id?: string) => {
  return 'anchor_' + camelCase(heading) + id ? '_' + camelCase(id) : ''
  // return camelCase('anchor_' + heading)
}
