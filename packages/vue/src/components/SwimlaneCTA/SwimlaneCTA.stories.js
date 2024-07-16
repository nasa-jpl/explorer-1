import SwimlaneCTA from './SwimlaneCTA.vue'

export default {
  title: 'Components/SwimlaneCTA',
  component: SwimlaneCTA,
  parameters: {
    docs: {
      description: {
        component: `The SwimlaneCTA component combines BaseSwimlane with other elements (JPL logo, links, etc.) to create the component that is used on the WWW homepage.`
      }
    }
  }
}

// stories
export const Default = {
  args: {
    darkMode: true,
    targetLink: 'https://jpl.nasa.gov/about',
    backgroundImages: [
      'https://picsum.photos/1380/540?random=1',
      'https://picsum.photos/1380/540?random=2',
      'https://picsum.photos/1380/540?random=3',
      'https://picsum.photos/1380/540?random=4',
      'https://picsum.photos/1380/540?random=5'
    ],
    backgroundImagesSmall: [
      'https://picsum.photos/1380/540?random=1',
      'https://picsum.photos/1380/540?random=2',
      'https://picsum.photos/1380/540?random=3',
      'https://picsum.photos/1380/540?random=4',
      'https://picsum.photos/1380/540?random=5'
    ],
    words: [
      'Artists',
      'Communicators',
      'Designers',
      'Disruptors',
      'Dreamers',
      'Developers',
      'Educators',
      'Engineers',
      'Innovators',
      'Inventors',
      'Makers',
      'Problem Solvers',
      'Roboticists',
      'Scientists',
      'Software Engineers',
      'Thinkers',
      'Visualizers'
    ],
    rows: 9,
    transitionDuration: 1800,
    transitionDelay: 800
  }
}
