import LogoCaltech from './LogoCaltech.vue'

export default {
  title: 'Foundations/Logos/LogoCaltech',
  component: LogoCaltech,
  argTypes: {
    size: {
      description: 'Use TailwindCSS text size classes to control the size of the logo',
      control: {
        type: 'select'
      },
      options: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl']
    }
  },
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'The Caltech logo as an SVG. Size and color can be specified via tailwind text classes. This will only work with inlined SVG. This will not work when rendering the svg file via an `<img />` element.'
      }
    }
  },
  // render function to apply arbitrary args
  render: (args) => ({
    components: { LogoCaltech },
    setup() {
      return { args }
    },
    template: '<LogoCaltech :class="args.size" />'
  })
}

export const BaseStory = { args: { size: 'text-base' } }
