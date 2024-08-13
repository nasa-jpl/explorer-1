export interface BreadcrumbPathObject {
  path: string
  title: string
  children: BreadcrumbPathObject[]
}
export interface BasicLinkObject {
  title: string
  path: string
}

export interface BlockData {
  blockType: string
  field?: string
  heading?: string
  level?: string
  items?: any[]
}
export interface ImageSrcObject {
  url: string
  width: number
  height: number
}
export interface ThumbnailObject {
  original: string
  width: number
  height: number
}
export interface ImageObject {
  title?: string
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

export interface ImageBlock extends BlockData, ImageObject {}

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

export interface FormOption {
  id: string
  name: string
  alt: string
  value: string
  text: string
  title: string
}

export interface Card {
  __typename?: string
  type?: string
  url?: string
  externalLink?: string
  page?: Card | EventCardObject | EduResourceCardObject
  title?: string
  date?: string
  label?: string
  thumbnailImage?: Partial<ImageObject>
  summary?: string
}
export interface EventCardObject extends Card {
  startDate?: string
  endDate?: string
  startDatetime?: string
  endDatetime?: string
  startTime?: string
  endTime?: string
  customDate?: string
  eventType?: string
  ongoing?: boolean
  isVirtualEvent?: boolean
  locationName?: string
  location?: string
  locationLink?: string
}

export interface PrimarySubjectObject {
  subject: string
}
export interface GradeLevelsObject {
  gradeLevel: string
}
export interface EduResourceCardObject extends Card {
  primarySubject: PrimarySubjectObject
  gradeLevels: GradeLevelsObject[]
}

export interface LinkObject {
  page: {
    url: string
  } | null
  externalLink: string | null
}

export interface RelatedLinkObject extends LinkObject {
  document: { url: string } | null
  text: string | null
}

export interface PageResponseObject {
  __typename: string
  contentType: string
  breadcrumb?: string
  url?: string
}

export interface PageResponse {
  __typename: string
  page: PageResponseObject
}

export interface HeaderResponse {
  __typename: string
  desktop: any
  mobile: any
}

export interface FooterResponse {
  __typename: string
  footer: any
}

export type Explorer1Theme = 'defaultTheme' | 'ThemeInternal' | 'ThemeEdu'

export interface Attributes {
  [name: string]: string
}

export interface AuthorObject {
  name: string
  organization: string
}

export interface Topic {
  title: string
  url: string
}

export type MetadataType = 'event' | 'resource'

export interface LabelObject {
  label?: string
  variant: string
}
export interface PillDictionaryInterface {
  [EDUExplainerArticlePage: string]: LabelObject
}
export interface DictionaryInterface {
  [key: string]: string
}
