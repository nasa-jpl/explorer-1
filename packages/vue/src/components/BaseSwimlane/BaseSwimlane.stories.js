import BaseSwimlane from './BaseSwimlane.vue'

export default {
  title: 'Components/Base/BaseSwimlane',
  component: BaseSwimlane,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component: `The BaseSwimlane component is expected to contain an array of words to create a 'swimlane' effect as the text swims through.`
      }
    }
  }
}

export const BaseSwimlaneData = {
  words: [
    'Artists',
    'Communicators',
    'Designers',
    'Disruptors',
    'Dreamers',
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
  scale: 2,
  transition: 'ease-out',
  transitionDuration: 1800,
  transitionDelay: 800
}

// stories
export const Base = {
  args: BaseSwimlaneData
}
