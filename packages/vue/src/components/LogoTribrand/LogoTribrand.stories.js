import LogoColor from '@explorer-1/common/src/images/svg/logo-tribrand-color.svg'
import LogoWhite from '@explorer-1/common/src/images/svg/logo-tribrand-white.svg'
import LogoTribrand from './LogoTribrand.vue'

export default {
  title: 'Foundation/Logos/LogoTribrand',
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
  }
}
const LogoTribrandComponentTemplate = (args) => ({
  props: Object.keys(args),
  components: { LogoTribrand },
  template: `<LogoTribrand :class="size" :invert="invert" />`
})

const LogoTribrandImageTemplate = (args) => ({
  props: Object.keys(args),
  components: {},
  template: `<img :src="src" alt="Logo Image" />`
})

export const Default = LogoTribrandComponentTemplate.bind({})
Default.storyName = 'Logo Inline SVG'
Default.args = { invert: false, size: 'text-base' }
Default.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl']
    }
  },
  invert: {
    control: {
      type: 'boolean'
    }
  }
}
Default.decorators = [
  () => ({
    template: `<div class="inline-block" :class="invert ? 'bg-black ' : 'bg-white '"><story/></div>`,
    props: ['size', 'invert']
  })
]

export const LogoImageColor = LogoTribrandImageTemplate.bind({})
LogoImageColor.args = { src: LogoColor }
LogoImageColor.parameters = {
  docs: {
    description: {
      story: 'Demo of using an `<img />` element to render the .svg file'
    }
  }
}

export const LogoImageWhite = LogoTribrandImageTemplate.bind({})
LogoImageWhite.args = { src: LogoWhite }
LogoImageWhite.parameters = {
  docs: {
    description: {
      story: 'Demo of using an `<img />` element to render the .svg file'
    }
  }
}
LogoImageWhite.decorators = [
  () => ({
    template: `<div class="inline-block bg-black"><story/></div>`
  })
]
