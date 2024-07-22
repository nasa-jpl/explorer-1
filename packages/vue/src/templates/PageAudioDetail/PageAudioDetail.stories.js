import { BlockRelatedLinksData } from './../../components/BlockRelatedLinks/BlockRelatedLinks.stories'
import { BlockLinkTileCarouselData } from './../../components/BlockLinkCarousel/BlockLinkCarousel.stories'
import PageAudioDetail from './PageAudioDetail.vue'

export default {
  title: 'Templates/PageAudioDetail',
  component: PageAudioDetail,
  tags: ['!autodocs'],
  excludeStories: /.*Data$/
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
      url: '/public/images/bg-earth-1440x810.jpg'
    },
    title: 'Testing Audio',
    topicLabel: 'JPL Life',
    transcript: `<p>Preparing to Land Perseverance</p>
    <p>The following tests, conducted from 2017-2020, helped prepare NASA's Perseverance rover for its landing on Mars.</p>
    <p>[music]</p>
    <p>Centrifuge Spin Test</p>
    <p>Santa Clarita, CA June 2019</p>
    <p>[music]</p>
    <p>Parachute Firing Test</p>
    <p>Moses Lake, WA May 2019</p>
    <p>[music]</p>
    <p>[mortar firing]</p>
    <p>[mortar firing]</p>
    <p>[clapping]</p>
    <p>Parachute Wind Tunnel Test</p>
    <p>NASA's Ames Research Center </p>
    <p>Moffett Field, CA June 2017</p>
    <p>[music]</p>
    <p>[mortar firing]</p>
    <p>[wind]</p>
    <p>[clapping]</p>
    <p>Lander Vision System Test</p>
    <p>For Avoiding Landing Hazards</p>
    <p>Death Valley, CA May 2019</p>
    <p>[helicopter taking off]</p>
    <p>[music]</p>
    <p>Rover Wheel Drop Test</p>
    <p>NASA's Jet Propulsion Laboratory</p>
    <p>Southern CA August 2019</p>
    <p>[wheel dropping]</p>
    <p>[hitting rock]</p>`,
    uploadedMedia: {
      collection: {
        id: '1',
        name: 'Root',
        path: '0001'
      },
      createdAt: '2020-12-10T07:38:30.951546+00:00',
      duration: '11',
      file: '/audio/file_example_MP3_700KB.mp3',
      fileExtension: 'mp3',
      fileOgg: '',
      id: '1',
      sources: "[{'src': '/audio/file_example_MP3_700KB.mp3', 'type': 'audio/mpeg'}]",
      thumbnail: '',
      title: 'audio file',
      type: 'audio'
    },
    relatedLinks: [BlockRelatedLinksData.data]
  }
}

// stories
export const AudioDetail = { args: { ...PageAudioDetailData } }

export const PodcastEpisode = {
  args: {
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
}
