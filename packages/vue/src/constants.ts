import type { DictionaryInterface, PillDictionaryInterface } from './interfaces'

export const eduMetadataDictionary: PillDictionaryInterface = {
  EDUExplainerArticlePage: {
    label: 'Explainer Article',
    variant: 'secondary'
  },
  EDUEventPage: {
    variant: 'primary'
  }
}

// TODO: finish this
export const searchContentTypeToPageType: DictionaryInterface = {
  news_news: 'News',
  events_eventpage: 'EventPage',
  missions_mission: 'Mission',
  eduevents_edueventpage: 'EDUEventPage',
  eduresources_eduexplainerarticlepage: 'EDUExplainerArticlePage'
}
