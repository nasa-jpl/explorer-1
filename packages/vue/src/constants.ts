import type { PillDictionaryInterface } from './interfaces'

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

interface contentTypeObject {
  model: string
  label: string
}

export const contentTypes: contentTypeObject[] = [
  {
    model: 'news.News',
    label: 'News & Features'
  },
  {
    model: 'home.HomePage',
    label: 'Homepage'
  },
  {
    model: 'missions.Mission',
    label: 'Missions'
  },
  {
    model: 'events.EventPage',
    label: 'Events'
  },
  {
    model: 'image_detail.ImageDetailPage',
    label: 'Images'
  },
  {
    model: 'audio_detail.AudioIndexPage',
    label: 'Audio Index'
  },
  {
    model: 'audio_detail.AudioDetailPage',
    label: 'Audio'
  },
  {
    model: 'infographics.InfographicsDetailPage',
    label: 'Infographics'
  },
  {
    model: 'image_detail.CuratedGalleryPage',
    label: 'Curated Gallery'
  },
  {
    model: 'topics.TopicPage',
    label: 'Topics'
  },
  {
    model: 'asteroid_watch.AsteroidWatchIndexPage',
    label: 'Asteroid Watch Index'
  },
  {
    model: 'asteroid_watch.AsteroidWatchContentPage',
    label: 'Asteroid Watch'
  },
  {
    model: 'missions.MissionsIndexPage',
    label: 'Missions Index'
  },
  {
    model: 'information_pages.ContentPage',
    label: 'Information pages'
  },
  {
    model: 'robotics.RobotPage',
    label: 'Robots'
  },
  {
    model: 'video_detail.VideoDetailPage',
    label: 'Video'
  },
  {
    model: 'podcasts.PodcastPage',
    label: 'Podcasts'
  },
  {
    model: 'go_pages.GoHomePage',
    label: 'Go Sites'
  },
  {
    model: 'press_kits.PressKitHomePage',
    label: 'Press Kits'
  },
  {
    model: 'profiles.ProfilePage',
    label: 'People'
  },
  // EDU content types
  {
    model: 'edu_home.EDUHomePage',
    label: 'Education Homepage'
  },
  {
    model: 'edu_information_pages.EDUContentPage',
    label: 'EDU Information Pages'
  },
  {
    model: 'edu_news.EDUNewsIndexPage',
    label: 'EDU News Index'
  },
  {
    model: 'edu_events.EDUEventsIndexPage',
    label: 'EDU Events Index'
  },
  {
    model: 'edu_events.EDUEventPage',
    label: 'EDU Events'
  },
  {
    model: 'edu_news.EDUNewsPage',
    label: 'EDU News'
  },
  {
    model: 'edu_resources.EDUExplainerArticlePage',
    label: 'EDU Explainer Articles'
  },
  {
    model: 'edu_resources.EDUResourceLibraryIndexPage',
    label: 'EDU Resource Library Index'
  },
  {
    model: 'edu_resources.EDULessonPage',
    label: 'EDU Lesson Plans'
  },
  {
    model: 'edu_resources.EDUStudentProjectPage',
    label: 'EDU Student Projects'
  },
  {
    model: 'edu_resources.EDUTeachableMomentPage',
    label: 'EDU Teachable Moments'
  },
  {
    model: 'edu_resources.EDUCollectionsDetailPage',
    label: 'EDU Collections'
  },
  {
    model: 'edu_resources.EDUGalleryDetailPage',
    label: 'EDU Galleries'
  },
  {
    model: 'edu_resources.EDUImageDetailPage',
    label: 'EDU Images'
  },
  {
    model: 'edu_resources.EDUInfographicDetailPage',
    label: 'EDU Infographics'
  },
  {
    model: 'edu_resources.EDUDocumentDetailPage',
    label: 'EDU Documents'
  },
  {
    model: 'edu_resources.EDUVideoDetailPage',
    label: 'EDU Videos'
  }
]

interface contentAliasObject extends contentTypeObject {
  interface?: string
  eskey?: string
}
const getContentAliases = (): contentAliasObject[] => {
  const getInterface = (contentType: contentTypeObject) => {
    const model = contentType.model
    return model ? model.split('.').pop() : undefined
  }
  const getEskey = (contentType: contentTypeObject) => {
    const model = contentType.model
    return model ? model.toLowerCase().replace('.', '_') : undefined
  }

  let entries: contentAliasObject[] = []

  contentTypes.forEach((contentType) => {
    const entry: contentAliasObject = {
      ...contentType,
      interface: getInterface(contentType),
      eskey: getEskey(contentType)
    }
    entries.push(entry)
  })
  return entries
}

export const contentAliases = getContentAliases()
