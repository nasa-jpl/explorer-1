import LogoCaltech from './LogoCaltech.vue'

export default {
  title: 'Foundation/Logos/LogoCaltech',
  component: LogoCaltech,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl']
      }
    }
  },
  decorators: [
    () => ({
      template: `<div class="inline-block" :class="'bg-white '"><story/></div>`,
      props: ['size', 'invert']
    })
  ],
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'The Caltech logo as an SVG. Size and color can be specified via tailwind text classes. This will only work with inlined SVG. This will not work when rendering the svg file via an `<img />` element.'
      }
    }
  }
}
const LogoCaltechComponentTemplate = (args) => ({
  props: Object.keys(args),
  components: { LogoCaltech },
  template: `<LogoCaltech :class="size" />`
})

export const Default = LogoCaltechComponentTemplate.bind({})
Default.storyName = 'LogoCaltech' // single story hoisting
Default.args = { size: 'text-base' }
