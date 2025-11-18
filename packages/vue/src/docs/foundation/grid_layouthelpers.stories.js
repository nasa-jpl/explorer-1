import LayoutHelper, { indents } from './../../components/LayoutHelper/LayoutHelper.vue'

// TODO: DOCS: update this to match the full grid/layout documentation

export default {
  title: 'Foundations/Grid and Layout/Column Layout Helpers',
  component: LayoutHelper,
  tags: ['!autodocs'],
  argTypes: {
    indent: {
      control: { type: 'select' },
      options: Object.keys(indents)
    }
  },
  parameters: {
    html: {
      root: '#storyRoot'
    }
  },
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="container mx-auto border border-black"><story/></div>`
    })
  ]
}

const LayoutHelperTemplate = (args) => ({
  components: { LayoutHelper },
  setup() {
    return { args }
  },
  template: `<LayoutHelper v-bind="args"><div class="w-full text-white bg-black py-10 px-2">Indent starts at <code>{{args}}</code></div></LayoutHelper>`
})

export const BaseWidth = LayoutHelperTemplate.bind({})
BaseWidth.args = {
  indent: 'col-1'
}

export const ColTwoStart = LayoutHelperTemplate.bind({})
ColTwoStart.args = {
  indent: 'col-2'
}

export const ColThreeStart = LayoutHelperTemplate.bind({})
ColThreeStart.args = {
  indent: 'col-3'
}

export const ColFourStart = LayoutHelperTemplate.bind({})
ColFourStart.args = {
  indent: 'col-4'
}
