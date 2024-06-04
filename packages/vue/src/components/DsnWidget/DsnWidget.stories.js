import DsnWidget from './DsnWidget.vue'

export default {
  title: 'WWW/Components/DsnWidget',
  component: DsnWidget,
  excludeStories: /.*Data$/,
  argTypes: {
    status: {
      control: { type: 'text' },
    },
  },
}

export const DsnWidgetData = {
  dsnWidget: {
    heading: 'DEEP SPACE NETWORK',
    link: 'https://eyes.nasa.gov/dsn/dsn.html',
    linkTarget: true,
    location: 'Goldstone',
    spacecraftName: 'MMS 1',
    transmitStatus: 'both',
    transmitTitle: 'Currently transmitting',
  },
}

const DsnWidgetTemplate = (args) => ({
  props: Object.keys(args),
  components: { DsnWidget },
  template: `<DsnWidget
    :static-data="dsnWidget"
  />`,
})

export const Base = DsnWidgetTemplate.bind({})
Base.args = { ...DsnWidgetData }
