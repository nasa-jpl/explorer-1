import type { DictionaryInterface, PillDictionaryInterface } from './interfaces'

export const eduMetadataDictionary: PillDictionaryInterface = {
  EDUEventPage: {
    label: 'Event',
    variant: 'primary',
    icons: 'primary',
    type: 'event'
  },
  EDUCollectionsDetailPage: {
    label: 'Collection',
    variant: 'primary-inverted',
    icons: 'primary',
    type: 'resource'
  },
  EDUExplainerArticlePage: {
    label: 'Explainer Article',
    variant: 'secondary',
    icons: 'secondary',
    type: 'resource'
  },
  EDULessonPage: {
    label: 'Lesson',
    variant: 'primary',
    icons: 'primary',
    type: 'resource'
  },
  EDUTeachableMomentPage: {
    label: 'Teachable Moment',
    variant: 'primary',
    icons: 'primary',
    type: 'resource'
  },
  EDUStudentProjectPage: {
    label: 'Student Project',
    variant: 'secondary',
    icons: 'secondary',
    type: 'resource'
  },
  EDUImageDetailPage: {
    label: 'Image',
    variant: 'primary',
    icons: 'primary',
    type: 'resource'
  },
  EDUInfographicDetailPage: {
    label: 'Infographic',
    variant: 'primary',
    icons: 'primary',
    type: 'resource'
  },
  EDUDocumentDetailPage: {
    label: 'Document',
    variant: 'primary',
    icons: 'primary',
    type: 'resource'
  },
  EDUVideoDetailPage: {
    label: 'Video',
    variant: 'primary',
    icons: 'primary',
    type: 'resource'
  },
  EDUGalleryDetailPage: {
    label: 'Gallery',
    variant: 'secondary',
    icons: 'secondary',
    type: 'resource'
  }
}

// TODO: finish this
export const searchContentTypeToPageType: DictionaryInterface = {
  news_news: 'News',
  events_eventpage: 'EventPage',
  missions_mission: 'Mission',
  edu_events_edueventpage: 'EDUEventPage',
  edu_resources_educollectionsdetailpage: 'EDUCollectionsDetailPage',
  edu_resources_eduexplainerarticlepage: 'EDUExplainerArticlePage',
  edu_resources_edulessonpage: 'EDULessonPage',
  edu_resources_eduteachablemomentpage: 'EDUTeachableMomentPage'
}
