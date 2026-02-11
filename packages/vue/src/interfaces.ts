import { eduMetadataDictionary } from './constants'

export type ContentTypeKey = keyof typeof eduMetadataDictionary

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
  blocks?: StreamfieldBlockData[] | Card[] | ImageObject[] | VideoObject[]
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
  heroSummary?: string
  rowData?: any
  apiEndpoint?: string
  attachmentPrefix?: string
  listingPageHeroImage?: ImageObject
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
  url: string
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
  listingPageHeroImage?: ImageObject
}

export interface VideoObject {
  duration?: string
  file: string
  fileExtension?: string
  fileOgg?: string // no webpack loader for ogg files
  fileWebm?: string
  height?: string | number
  id: string
  sources?: string
  title: string
  type?: string
  width?: string | number
}

export interface ImageBlock extends BlockData, ImageObject {
  fullBleed: boolean
  imageFullBleed: ImageObject
  displayCaption: boolean
  constrain: boolean
}

export interface SearchBucket {
  key: string
  doc_count: number
  label?: string
}

export interface SearchAggregation {
  buckets: SearchBucket[]
  doc_count_error_upper_bound: number
  sum_other_doc_count: number
}

export type SearchAggregations = Record<string, SearchAggregation>

export interface SearchData {
  hits: {
    total: {
      value: number
    }
    hits: ElasticSearchPage[]
  }
  aggregations: SearchAggregations
}

export interface ElasticSearchPage {
  _source: Record<string, any>
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
  startDatetime?: string
  endDatetime?: string
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

export interface InitResponse {
  init: {
    id: string
    __typename: string
  }
  redirect: {
    isPermanent: boolean
    oldPath: string
    newUrl: string
  }
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

export interface EDUSubjectArea {
  id: number
  primarySubject: EduResourcesSubject
  subjectArea: string
}

export interface SubFiltersObject {
  [key: string]: {
    parentBucketKey: string
    aggParentKey: string
    aggMapKey: string
    subFilterKey: string
  }
}

export interface EduSubjectAreasResponse {
  eduSubjectAreas: {
    eduSubjectAreas: EDUSubjectArea[]
  }
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

export interface DictionaryInterface {
  [key: string]: string
}
export interface AccordionItemObject {
  title?: string
  body?: StreamfieldBlockData[]
}

export type MetaPanelTheme = 'primary' | 'secondary' | 'stars'

export type HeadingLevels = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export interface PageObject {
  __typename: ContentTypeKey
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
  topicLabel?: string
  summary?: string
  topper?: string
  seoTitle?: string
  searchDescription?: string
  heroImage?: ImageObject
  heroPosition?: 'full_bleed' | 'inline'
  heroImageInline?: ImageObject
  displayTitleInHero?: boolean
  heroImageCaption?: string
  heroSummary?: string
  heroConstrain?: boolean
  showShareLinks?: boolean
  publicationDate?: string
  body?: StreamfieldBlockData[]
  thumbnailImage?: ThumbnailObject
  relatedLinks?: BlockRelatedLinksObject[]
  relatedContentHeading: string
  relatedContent?: any
  location?: string
  mapIcon?: Record<string, any>
  waitTime?: string
  relatedPagesForMoreSection?: any
  id?: string
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
