/* -- getSrcSet --
  Use this when you are querying custom cropped renditions
  from Wagtail and want to use the image's srcset attribute.

  The only requirement is that the image query must include
  custom rendition queries that start with the string `screen`
  and query for both the `url` and `width`

  Example Query:
    image {
      screenXs: rendition(fill: "320x180-c10") {
        url
        width
      }
      screenMd: rendition(fill: "768x432-c10") {
        url
        width
      }
      screenXl: rendition(fill: "1280x640-c10") {
        url
        width
      }
    }
*/
import { ImageObject } from '../interfaces'

export const getSrcSet = (srcSetObject: ImageObject): string => {
  let srcSet = ''
  const valid = Object.keys(srcSetObject).some(function (key) {
    if (key.startsWith('screen')) {
      return true
    }
    return false
  })
  if (valid) {
    const srcSetArray: string[] = []
    for (const [key, value] of Object.entries(srcSetObject)) {
      if (key.startsWith('screen')) {
        if (value.url && value.width) {
          srcSetArray.push(`${value.url} ${value.width}w`)
        }
      }
    }
    srcSet = srcSetArray.join(', ')
  }
  return srcSet
}
