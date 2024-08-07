import { camelCase } from 'lodash'

export const getHeadingId = (heading: string, index?: number) => {
  return camelCase(heading + (index ? index : ''))
}
