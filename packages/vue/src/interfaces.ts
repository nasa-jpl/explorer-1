export interface BreadcrumbPathObject {
  path: string
  title: string
  children: any[]
}

export interface ImageSrcObject {
  url: string
  width: number
  height: number
}
export interface ImageObject {
  src: ImageSrcObject
  srcCropped: ImageSrcObject
  screenXs?: Partial<ImageSrcObject>
  screenSm?: Partial<ImageSrcObject>
  screenMd?: Partial<ImageSrcObject>
  screenLg?: Partial<ImageSrcObject>
  screenXL?: Partial<ImageSrcObject>
  screenThreexl?: Partial<ImageSrcObject>
  srcSet?: string
  alt?: string
  original?: string
  caption?: string
  credit?: string
  detailUrl?: string
  cover?: string
  image?: ImageObject
  displayCaption?: boolean
}

export interface ElasticSearchPage {
  id: string | number
  content_type: string
  url: string
  type: string
  topic: string
  image: string | any
  date: string
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  location: string
  title: string
  summary: string
}
