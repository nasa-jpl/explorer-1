import { BlockLinkTileCarouselData } from './../../components/BlockLinkCarousel/BlockLinkCarousel.stories'
import PageVideoDetail from './PageVideoDetail.vue'

export default {
  title: 'Templates/PageVideoDetail',
  component: PageVideoDetail,
  tags: ['!autodocs'],
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'fullscreen'
  }
}

// stories
export const BaseStory = {
  name: 'PageVideoDetail',
  args: {
    data: {
      block: [],
      body: 'How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.',
      firstPublishedAt: '2001-12-03T08:00:00+00:00',
      id: '6723',
      label: 'Video',
      publicationDate: '2001-12-03',
      seoDescription: null,
      seoTitle: 'Seals, Sea Lions, and Satellites',
      slug: 'seals-sea-lions-and-satellites',
      summary:
        'How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.',
      thumbnailImage: {
        alt: 'Seals, Sea Lions, and Satellites',
        id: '7844',
        original: '/public/images/bg-earth-1440x810.jpg'
      },
      title: 'Seals, Sea Lions, and Satellites',
      topicLabel: 'Earth',
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
        duration: '122',
        file: '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4',
        fileExtension: 'm4v',
        fileWebm: '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm',
        height: null,
        id: '1',
        sources:
          "[{'src': '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4', 'type': 'application/octet-stream'}, {'src': '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm', 'type': 'video/webm'}]",
        title: 'Seals, Sea Lions, and Satellites',
        type: '',
        width: null
      },
      url: '/videos/seals-sea-lions-and-satellites/',
      urlPath: '/home/videos/seals-sea-lions-and-satellites/',
      relatedPages: BlockLinkTileCarouselData
    }
  }
}
