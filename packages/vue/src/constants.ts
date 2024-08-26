import type { DictionaryInterface, PillDictionaryInterface } from './interfaces'

export const eduMetadataDictionary: PillDictionaryInterface = {
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
  EDUEventPage: {
    variant: 'primary',
    icons: 'primary',
    type: 'event'
  }
}

// TODO: finish this
export const searchContentTypeToPageType: DictionaryInterface = {
  news_news: 'News',
  events_eventpage: 'EventPage',
  missions_mission: 'Mission',
  eduevents_edueventpage: 'EDUEventPage',
  eduresources_educollectionsdetailpage: 'EDUCollectionsDetailPage',
  eduresources_eduexplainerarticlepage: 'EDUExplainerArticlePage',
  eduresources_edulessonpage: 'EDULessonPage',
  eduresources_eduteachablemomentpage: 'EDUTeachableMomentPage'
}
