import MissionDetailAbout from './MissionDetailAbout.vue'

export default {
  title: 'WWW/MissionDetail/MissionDetailAbout',
  component: MissionDetailAbout,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*(Data)$/
}

export const MissionDetailAboutData = {
  descriptionHeading: 'About the Mission',
  description: `<p>The Juno spacecraft, which successfully entered the orbit of Jupiter on July 4, 2016, will for the first time peer below the dense cover of clouds to answer questions about the gas giant and the origins of our solar system.</p><p>Juno's primary goal is to reveal the story of Jupiter's formation and evolution. Using long-proven technologies on a spinning spacecraft placed in an elliptical polar orbit, Juno will observe Jupiter's gravity and magnetic fields, atmospheric dynamics and composition, and evolution.</p><ul><li>Lorem ipsum dolor sit amet consectatur adipscing</li><li>Lorem ipsum dolor sit amet consectatur adipscing</li><li>Lorem ipsum dolor sit amet consectatur adipscing</li></ul><p>Lorem ipsum dolor sit amet paragraph text</p><ol><li>Lorem ipsum dolor sit amet consectatur adipscing</li><li>Lorem ipsum dolor sit amet consectatur adipscing</li><li>Lorem ipsum dolor sit amet consectatur adipscing</li><li>Lorem ipsum dolor sit amet consectatur adipscing</li></ol>`,
  instruments: [
    {
      id: '144',
      instrument: 'Gravity Science'
    },
    {
      id: '145',
      instrument: 'Magnetometer (MAG)'
    },
    {
      id: '146',
      instrument: 'Microwave Radiometer (MWR)'
    },
    {
      id: '147',
      instrument: 'Jupiter Energetic Particle Detector Instrument (JEDI)'
    },
    {
      id: '148',
      instrument: 'Jovian Auroral Distributions Experiment (JADE)'
    },
    {
      id: '149',
      instrument: 'Waves'
    },
    {
      id: '150',
      instrument: 'Ultraviolet Imaging Spectrograph (UVS)'
    },
    {
      id: '151',
      instrument: 'Jovian Infrared Auroral Mapper (JIRAM)'
    },
    {
      id: '152',
      instrument: 'JunoCam'
    }
  ]
}

// stories
export const Default = { args: MissionDetailAboutData }

export const NoInstruments = {
  args: {
    ...MissionDetailAboutData,
    instruments: []
  }
}
