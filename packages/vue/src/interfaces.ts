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
export interface StreamfieldBlockData extends BlockData {
  blockId?: string
  id?: string
  fullBleed?: boolean
  heading?: string
  galleryTitle?: string
  galleryDescription?: string
  coverImage?: ImageObject
  gallerySlides?: ImageObject[]
  blocks?: object[]
  value?: string
  customLabel?: string
  introduction?: string
  teaserPage?: object | string[]
  image?: ImageObject
  buttonText?: string
  fullWidthImage?: boolean
  video?: any
  embed?: any
  displayCaption?: boolean
  caption?: string
  credit?: string
  imageInline?: ImageObject
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
  _source: string
  id: string | number
  content_type: string
  url: string
  type: string
  topic?: string
  image?: string | any
  date?: string
  startDate?: string
  endDate?: string
  customDate?: string
  startTime?: string
  endTime?: string
  location?: string
  title: string
  summary?: string
  eventType?: string
  ongoing?: boolean
  primarySubject?: string
  gradeLevels?: string
  time?: string
  targetAudience?: string
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
  parent?: {
    title: string
  }
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
  isInPersonEvent?: boolean
  locationName?: string
  location?: string
  locationLink?: string
  targetAudience?: string
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
  time: EduResourcesTime
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
export interface BlockRelatedLinksObject extends BlockData {
  heading: string
  links: RelatedLinkObject[]
}

export interface PageResponse {
  __typename: string
  page: PageObject
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
  [key: string]: string
}

export interface AuthorObject {
  name: string
  organization?: string
  image?: ImageObject
  jobTitle?: string
  biography?: string
}

export interface Topic {
  title: string
  url: string
}

export type MetadataType = 'event' | 'resource'

export interface LabelObject {
  label?: string
  variant: string
  icons?: string
  type?: MetadataType
}
export interface PillDictionaryInterface {
  [EDUExplainerArticlePage: string]: LabelObject
}
export interface DictionaryInterface {
  [key: string]: string
}
export interface AccordionItemObject {
  title?: string
  body?: StreamfieldBlockData[]
}

export type MetaPanelTheme = 'primary' | 'secondary' | 'stars'

export interface PageObject {
  __typename: string
  contentType: string
  lastPublishedAt?: string
  breadcrumb?: string
  slug: string
  url: string
  title: string
  readTime?: string
  getTopicsForDisplay?: Topic[]
  showJumpMenu?: boolean
  label?: string
  summary?: string
  topper?: string
  seoTitle?: string
  searchDescription?: string
  heroPosition?: 'full_bleed' | 'inline'
  heroConstrain?: boolean
  publicationDate?: string
  body?: StreamfieldBlockData[]
  thumbnailImage?: ThumbnailObject
  relatedLinks?: BlockRelatedLinksObject[]
  relatedContentHeading: string
  relatedContent?: any
}

export interface EduResourcesSubject {
  subject: string
}
export interface EduResourcesGradeLevel {
  gradeLevel: string
}

export interface EduResourcesTime {
  time: string
}
export interface EduResourceStandard {
  type: string
  code: string
  domain: {
    domain: string
  }
  definition: string
}

export interface EduResourceStandardItem {
  standard: EduResourceStandard
}

export interface PageEduResourcesObject extends PageObject {
  hero?: StreamfieldBlockData[]
  authors?: { author: AuthorObject }[]
  primarySubject?: EduResourcesSubject
  additionalSubjects?: EduResourcesSubject[]
  gradeLevels?: EduResourcesGradeLevel[]
  time?: EduResourcesTime
  standards: EduResourceStandardItem[]
}
