import DsnWidget from '@explorer-1/vue/src/components/DsnWidget/DsnWidget.vue'

export default {
  title: 'Components/DsnWidget',
  component: DsnWidget,
  excludeStories: /.*Data$/,
  argTypes: {
    status: {
      control: { type: 'text' }
    }
  }
}

export const DsnWidgetData = {
  heading: 'DEEP SPACE NETWORK',
  link: 'https://eyes.nasa.gov/dsn/dsn.html',
  linkTarget: true,
  transmitTitle: 'Currently transmitting',
  transmitStatus: 'receiving',
  spacecraftName: 'Parker Solar Probe',
  location: 'Canberra',
  __typename: 'DeepSpaceNetworkWidget'
}

export const Base = {
  args: {
    data: DsnWidgetData
  }
}
