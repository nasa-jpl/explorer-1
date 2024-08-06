/** @type { import('@storybook/vue3').Preview } */
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import useMockComponents from './_mock-components.js'
import { setup, type Preview } from '@storybook/vue3'
import { Swiper, SwiperSlide } from 'swiper/vue'
import vClickOutside from 'click-outside-vue3'
import VueCompareImage from 'vue3-compare-image'
import { createPinia } from 'pinia'
import filters from '@explorer-1/vue/src/utils/filters'
import '@explorer-1/common/src/scss/styles-with-fonts.scss'
import { withGlobals, globalTypes } from './withGlobals'
import customTheme from '@explorer-1/common-storybook/src/config/customTheme'
import '@explorer-1/common-storybook/src/config/canvas.css'

const pinia = createPinia()

setup((app, _context) => {
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
          'Foundations',
          [
            'Colors',
            'Typography',
            'Icons',
            'Logos',
            'Themes',
            'Grid and Layout',
            ['Docs'],
            'Responsive Design'
          ],
          'Navigation',
          [
            'Overview',
            'Headers',
            ['Overview', 'WWW'],
            'Footers',
            ['Overview', 'WWW'],
            'Secondary Navigation',
            'Jump Menu'
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
            'Cards',
            ['Overview', 'BlockLinkCard', 'BlockLinkTile', 'BlockCircleImageCard'],
            'Blocks',
            ['BlockStreamfield'],
            'Heroes',
            ['Overview', 'Small', 'Medium', 'Large', 'Media Only', 'HeroListingIndex'],
            'Forms',
            ['Overview', 'TextInput', 'TextArea'],
            'Search',
            ['Overview'],
            'Mixins',
            ['Overview', 'MixinAnimationCaret', 'MixinVideoBg', 'MixinCarousel'],
            'Utilities',
            ['Overview', '*'],
            'WWW'
          ],
          'Mixins',
          ['Overview'],
          'Templates',
          ['WWW', 'EDU', 'PageContent']
        ]
      }
    }
  },

  decorators: [withGlobals],

  tags: ['autodocs']
}

export default preview
