import type { DictionaryInterface, PillDictionaryInterface } from './interfaces'

export const eduMetadataDictionary: PillDictionaryInterface = {
  EDUExplainerArticlePage: {
    label: 'Explainer Article',
    variant: 'secondary',
    type: 'resource'
  },
  EDULessonPage: {
    label: 'Lesson',
    variant: 'primary',
    type: 'resource'
  },
  EDUEventPage: {
    variant: 'primary',
    type: 'event'
  }
}

// TODO: finish this
export const searchContentTypeToPageType: DictionaryInterface = {
  news_news: 'News',
  events_eventpage: 'EventPage',
  missions_mission: 'Mission',
  eduevents_edueventpage: 'EDUEventPage',
  eduresources_eduexplainerarticlepage: 'EDUExplainerArticlePage',
  eduresources_edulessonpage: 'EDULessonPage'
}
