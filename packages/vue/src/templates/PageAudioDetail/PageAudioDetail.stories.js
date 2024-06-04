import { BlockRelatedLinksData } from '../BlockRelatedLinks/BlockRelatedLinks.stories'
import { BlockLinkTileCarouselData } from '../BlockLinkCarousel/BlockLinkCarousel.stories'
import PageAudioDetail from './PageAudioDetail.vue'

export default {
  title: 'WWW/Layouts/PageAudioDetail',
  component: PageAudioDetail,
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'canvas'
  }
}

export const PageAudioDetailData = {
  data: {
    contentType: 'audio_detail.AudioDetailPage',
    label: 'Audio',
    publicationDate: '2020-12-09',
    relatedPages: BlockLinkTileCarouselData,
    seoTitle: 'Testing Audio',
    series: null,
    subscribeLinks: [],
    slug: 'testing-audio',
    summary: 'some summary of the audio file',
    thumbnailImage: {
      alt: '',
      id: '341',
      url: 'http://127.0.0.1:9000/media/original_images/imagessg_otherblackhole-16.jpg'
    },
    title: 'Testing Audio',
    topicLabel: 'JPL Life',
    transcript: '<p>Transcript here</p><p></p><p>transcript there</p>',
    uploadedMedia: {
      collection: {
        id: '1',
        name: 'Root',
        path: '0001'
      },
      createdAt: '2020-12-10T07:38:30.951546+00:00',
      duration: '11',
      file: 'http://127.0.0.1:9000/media/media/05_Da_Funk_Call_Out_Research_Hook.mp3',
      fileExtension: 'mp3',
      fileOgg: '',
      id: '1',
      sources:
        "[{'src': 'http://127.0.0.1:9000/media/media/05_Da_Funk_Call_Out_Research_Hook.mp3', 'type': 'audio/mpeg'}]",
      thumbnail: '',
      title: 'audio file',
      type: 'audio'
    },
    relatedLinks: [BlockRelatedLinksData.data]
  }
}

// template
const PageAudioDetailTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageAudioDetail },
  template: `<PageAudioDetail :data="data"/>`
})

// stories
export const AudioDetail = PageAudioDetailTemplate.bind({})
AudioDetail.args = { ...PageAudioDetailData }

export const PodcastEpisode = PageAudioDetailTemplate.bind({})
PodcastEpisode.args = {
  data: {
    ...PageAudioDetailData.data,
    series: {
      title: 'On a mission',
      url: '/podcasts/on-a-mission'
    },
    subscribeLinks: [
      {
        heading: 'Subscribe',
        description:
          'Lorem ipsum dolor sit amet consectatur adipscing. Vivamus vel rhoncus ipsum, at ultrices urna.',
        links: [
          {
            externalLink: 'http://google.com',
            text: 'Google'
          }
        ]
      }
    ]
  }
}
