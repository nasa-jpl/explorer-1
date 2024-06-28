/** @type { import('@storybook/vue3').Preview } */
import type { App } from 'vue'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import useMockComponents from './_mock-components.js'
import { StoryContext } from '@storybook/types'
import { VueRenderer, setup, type Preview } from '@storybook/vue3'
import { Swiper, SwiperSlide } from 'swiper/vue'
import vClickOutside from 'click-outside-vue3'
import VueCompareImage from 'vue3-compare-image'
import { createPinia } from 'pinia'
import filters from '@explorer-1/vue'
import '@explorer-1/common-storybook/src/config/canvas.css'
import '@explorer-1/common/src/scss/styles.scss'
import { withGlobals, globalTypes } from './withGlobals'
import customTheme from '@explorer-1/common-storybook/src/config/customTheme'
import '@explorer-1/common-storybook/src/config/canvas.css'
import useThemeStore from '@explorer-1/vue'
type Explorer1Theme = 'defaultTheme' | 'ThemeInternal' | 'ThemeEdu'

const pinia = createPinia()

setup((app: App, context?: StoryContext<VueRenderer>) => {
  app.use(pinia)
  app.use(vClickOutside)
  app.use(VueCompareImage)
  app.component('Swiper', Swiper)
  app.component('SwiperSlide', SwiperSlide)
  app.config.globalProperties.$filters = filters
  useMockComponents(app)
})

// viewports that match our tailwind config
const customViewports = {
  screenSm: {
    name: 'screen-sm',
    styles: {
      width: '640px',
      height: '100%'
    }
  },
  screenMd: {
    name: 'screen-md',
    styles: {
      width: '768px',
      height: '100%'
    }
  },
  screenLg: {
    name: 'screen-lg',
    styles: {
      width: '1024px',
      height: '100%'
    }
  },
  screenXl: {
    name: 'screen-xl',
    styles: {
      width: '1280px',
      height: '100%'
    }
  },
  screen2xl: {
    name: 'screen-2xl',
    styles: {
      width: '1440px',
      height: '100%'
    }
  },
  screen3xl: {
    name: 'screen-3xl',
    styles: {
      width: '1800px',
      height: '100%'
    }
  }
}

const preview: Preview = {
  globalTypes,

  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports
      }
    },
    // options for the html tab add-on
    html: {
      removeEmptyComments: true
    },
    // set the theme for docs (same as UI)
    docs: {
      theme: customTheme
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Introduction',
          'Roadmap',
          'Getting Started',
          ['Developer'],
          'Guides',
          'Foundation',
          [
            'Colors',
            'Typography',
            'Icons',
            'Logos',
            'Themes',
            'Grid and Layout',
            'Responsive Design'
          ],
          'Global Layout',
          [
            'Overview',
            'Headers',
            [
              'Overview',
              'External',
              'For Internal Sites',
              [
                '*',
                'Elements',
                ['Overview', 'AppBar', 'Navigation', 'Panel', 'Highlight', 'Section']
              ]
            ],
            'Footers',
            ['Overview', 'External', 'Internal']
          ],
          'Components',
          [
            'Overview',
            'Base',
            ['Overview'],
            'Blocks',
            ['Overview', 'Heroes', ['Overview', 'Small', 'Medium', 'Large']],
            'Heroes',
            ['*', 'HeroMedia', 'HeroListingIndex'],
            'Forms',
            ['Overview', 'TextInput', 'TextArea'],
            'Search',
            ['Overview'],
            'Mixins',
            ['Overview', 'MixinAnimationCaret', 'MixinVideoBg', 'MixinCarousel'],
            'Utilities',
            ['Overview', '*'],
            'EDU'
          ]
        ]
      }
    }
  },

  decorators: [withGlobals],

  tags: ['autodocs']
}

export default preview
