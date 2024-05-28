export interface ImageObject {
  src: {
    url: string
    width: number
    height: number
  }
  srcSet?: string
  alt?: string
  original?: string
  caption?: string
  credit?: string
  detailUrl?: string
}
