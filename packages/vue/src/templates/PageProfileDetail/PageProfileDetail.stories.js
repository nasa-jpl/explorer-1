import { NavSecondaryData } from '../NavSecondary/NavSecondary.stories.js'
import PageProfileDetail from './PageProfileDetail.vue'

export default {
  title: 'WWW/Layouts/PageProfileDetail',
  component: PageProfileDetail,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0 disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    viewMode: 'canvas'
  },
  excludeStories: /.*(Data)$/
}

export const PageProfileDetailData = {
  url: '/people/dariush-divsalar/',
  breadcrumb: NavSecondaryData.breadcrumb,
  displayLabel: 'Communications, Tracking & Radar',
  title: 'Dariush Divsalar',
  jobTitle: 'Electrical engineer',
  email: 'dariush.divsalar@jpl.nasa.gov',
  image: {
    original: 'https://source.unsplash.com/mrTydVjg04o/312x390',
    screenSm: {
      url: 'https://source.unsplash.com/mrTydVjg04o/156x195',
      width: '156'
    },
    screenMd: {
      url: 'https://source.unsplash.com/mrTydVjg04o/232x290',
      width: '232'
    },
    src: {
      url: 'https://source.unsplash.com/mrTydVjg04o/312x390',
      width: '312',
      height: '390'
    }
  },
  biography:
    '<p>Dariush Divsalar received his Ph.D. degree in electrical engineering from the University of California, Los Angeles (UCLA) in 1978.</p>',
  education: '<p>Ph.D. Electrical Engineering, University of California, Los Angeles (UCLA)</p>',
  researchInterests:
    '<p>Involved in research, development, study and analysis of various aspects of coding, modulations, communication theory and applications for Deep Space Communication System Techniques for Future Space Exploration Missions, Satellite Communications.</p>',
  professionalExperience:
    '<p>Over 40 years at JPL, contributed in areas of digital communication systems, wireless communication systems both over AWGN and Fading channels, bandwidth efficient combined coding modulation techniques, digital signal processing, satellite communications, mobile communications.</p>',
  communityService:
    '<p>Contributed to professional Societies such as IEEE. Journal Referee for IEEE societies of Communication and Information Theory. Member of technical committees for of IEEE communication theory and information theory societies conferences. Technical Program Chairman of Communication Theory Mini-Conference Globecom 93. Technical Program Chairman of IEEE Communication Theory workshop, Santa Cruz, April 1995. Organizer and chairman of many IEEE conference sessions in the past ten years.</p>',
  selectedAwards: `
    <ul>
      <li>NASA Exceptional Engineering Achievement Medal in 1996.</li>
      <li>IEEE Alexander Graham Bell Medal in 2014.</li>
      <li>Several IEEE Journal, conference, workshop, best paper awards</li>
    </ul>
  `,
  publications: `
    <p>Total of 21593 citations for all publications. Only journal publications are provided below.</p>
    <ol>
      <li>D. Divsalar and M. K. Simon, "Spectral Characteristics of Convolutionally Coded Digital Signals," IEEE Trans. on Communications, February 1980.</li>
      <li>D. Divsalar and M. K. Simon, "The Power Spectral Density of Digital Modulations Transmitted Over Nonlinear Channels," IEEE Trans. on Communications, Vol. COM-30, January 1982.</li>
    </ol>
  `
}

// template
const PageProfileDetailTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageProfileDetail },
  template: `<PageProfileDetail :data="profile"/>`
})

// stories
export const Template = PageProfileDetailTemplate.bind({})
Template.storyName = 'PageProfileDetail'
Template.args = {
  profile: PageProfileDetailData
}
