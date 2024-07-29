import { BlockLinkTileCarouselData } from './../../components/BlockLinkCarousel/BlockLinkCarousel.stories'
import { BlockStreamfieldTruncatedData } from './../../components/BlockStreamfield/BlockStreamfield.stories'
import PageImageDetail from './PageImageDetail.vue'

export default {
  title: 'Templates/PageImageDetail',
  component: PageImageDetail,
  excludeStories: /.*Data$/,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

// data
export const ImageDetailPageData = {
  data: {
    body: [
      {
        blockType: 'RichTextBlock',
        value:
          '<p><a href="https://photojournal.jpl.nasa.gov/archive/PIA23356.mov" target="new"><b>Click here for animation</b></a></p><p>This time series shows carbon monoxide associated with fires from the Amazon region in Brazil from Aug. 8-22, 2019. The images show carbon monoxide at an hPA — a common unit of measurement for atmospheric pressure — of 500, or approximately 18,000 feet (5,500 meters) altitude, made with data collected from the Atmospheric Infrared Sounder (AIRS) on NASA\'s Aqua satellite. Each "day" in the series is made by averaging three day\'s-worth of measurements, a technique used to eliminate data gaps.</p><p>As the series progresses, the carbon monoxide plume blooms in the northwest Amazon region then drifts south and east in a more concentrated plume toward Sao Paulo. Green indicates concentrations of carbon monoxide at approximately 100 parts per billion by volume (ppbv), yellow at approximately 120 ppbv, and dark red at approximately 160 ppbv. It must be noted that local values can be significantly higher.</p><p>Carbon monoxide is a pollutant that can be transported large distances and persist in the atmosphere for about one month. It plays a role in both air pollution and climate change.</p><p>AIRS, in conjunction with the Advanced Microwave Sounding Unit (AMSU), senses emitted infrared and microwave radiation from Earth to provide a three-dimensional look at Earth\'s weather and climate. Working in tandem, the two instruments make simultaneous observations all the way down to Earth\'s surface. With more than 2,000 channels sensing different regions of the atmosphere, the system creates a global, three-dimensional map of atmospheric temperature and humidity, cloud amounts and heights, greenhouse gas concentrations and many other atmospheric phenomena.</p><p>The AIRS and AMSU instruments are managed by NASA\'s Jet Propulsion Laboratory in Pasadena, California, under contract to NASA. JPL is a division of the Caltech.</p><p>More information about AIRS can be found at <a href="https://airs.jpl.nasa.gov" target="new">https://airs.jpl.nasa.gov</a>.</p>\n'
      },
      ...BlockStreamfieldTruncatedData.body
    ],
    contentType: 'image_detail.ImageDetailPage',
    contextImage: {
      original: 'https://picsum.photos/1920/1080',
      src: {
        height: '1400',
        url: 'https://picsum.photos/1400/787',
        width: '787'
      },
      srcSet:
        'https://picsum.photos/1400/787 320w, https://picsum.photos/1400/787 1024w,  https://picsum.photos/1920/1080 1400w',
      alt: 'Context image'
    },
    downloadUrl: 'https://photojournal.jpl.nasa.gov/tiff/PIA23356.tif',
    image: {
      alt: 'This time series shows carbon monoxide associated with fires from the Amazon region in Brazil from Aug. 8-22, 2019.',
      credit: 'NASA/JPL',
      original: 'https://picsum.photos/1920/1080',
      src: {
        url: 'https://picsum.photos/1400/787',
        width: '1400',
        height: '787'
      },
      srcSet:
        'https://picsum.photos/1400/787 320w, https://picsum.photos/1400/787 1024w,  https://picsum.photos/1920/1080 1400w',
      caption:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
      detailUrl: ''
    },
    instruments: [
      {
        id: '522',
        instrument: 'Atmospheric Infrared Sounder (AIRS)'
      }
    ],
    keepExploringInstrument: BlockLinkTileCarouselData,
    keepExploringMission: [
      BlockLinkTileCarouselData[0],
      BlockLinkTileCarouselData[1],
      BlockLinkTileCarouselData[2]
    ],
    keepExploringTarget: BlockLinkTileCarouselData,
    label: 'Image',
    piaNumber: 'PIA23356',
    publicationDate: '2019-08-23',
    relatedMission: [
      {
        blockType: 'MissionLinkBlock',
        externalLink: null,
        page: {
          url: '/missions/aquarius'
        },
        text: 'Aquarius'
      }
    ],
    relatedTopics: BlockLinkTileCarouselData,
    seoTitle: "NASA's AIRS Maps Carbon Monoxide from Brazil Fires",
    slug: 'nasas-airs-maps-carbon-monoxide-from-brazil-fires',
    spacecraft: [
      {
        id: '619',
        spacecraft: 'Aqua'
      }
    ],
    targets: [
      {
        id: '536',
        target: 'Earth'
      }
    ],
    title: "NASA's AIRS Maps Carbon Monoxide from Brazil Fires",
    topicLabel: 'Earth'
  }
}
// stories
export const BaseStory = { name: 'ImageDetail', args: { ...ImageDetailPageData } }

// stories
export const NoTabbedCarousels = {
  args: {
    data: {
      ...ImageDetailPageData.data,
      keepExploringMission: null,
      keepExploringInstrument: [],
      keepExploringTarget: null,
      relatedMission: [
        {
          blockType: 'MissionLinkBlock',
          externalLink: 'https://nasa.gov',
          page: null,
          text: 'External Mission Link for Testing'
        }
      ]
    }
  }
}
