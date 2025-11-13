import LogoColor from '@explorer-1/common/src/images/svg/logo-tribrand-color.svg'
import LogoWhite from '@explorer-1/common/src/images/svg/logo-tribrand-white.svg'
import LogoTribrand from './LogoTribrand.vue'

export default {
  title: 'Foundations/Logos/LogoTribrand',
  component: LogoTribrand,
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'Combines JPL, NASA and Caltech in a single logo as an SVG. Tailwind text size classes can be used with inlined SVG (first example), but not when loading the svg file via an `<img />` element'
      }
    }
  },
  render: (args) => ({
    components: { LogoTribrand },
    setup() {
      return { args }
    },
    template: `<div :class="args.invert ? 'bg-black ' : 'bg-white '"><LogoTribrand :class="args.size" :invert="args.invert" />`
  })
}

export const BaseStory = {
  name: 'Logo Inline SVG',
  args: { invert: false, size: 'text-base' },
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      description: 'Use TailwindCSS text size classes to control the size of the logo',
      options: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl']
    },
    invert: {
      control: {
        type: 'boolean'
      }
    }
  }
}

export const LogoImageColor = {
  args: { src: LogoColor },
  argTypes: {
    src: {
      control: false
    },
    invert: {
      control: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demo of using an `<img />` element to render the .svg file'
      }
    }
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `<img :src="args.src" alt="Logo as Image" />`
  })
}

export const LogoImageWhite = {
  args: { src: LogoWhite },
  argTypes: {
    src: {
      control: false
    },
    invert: {
      control: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demo of using an `<img />` element to render the .svg file'
      }
    }
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `<div class="bg-black"><img :src="args.src" alt="Logo as Image" /></div>`
  })
}
