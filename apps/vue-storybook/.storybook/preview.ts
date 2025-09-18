/** @type { import('@storybook/vue3-vite').Preview } */
import { MINIMAL_VIEWPORTS } from 'storybook/viewport'
import useMockComponents from './_mock-components.js'
import { setup, type Preview } from '@storybook/vue3-vite'
import { createRouter, createWebHashHistory, type RouterOptions } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import vClickOutside from 'click-outside-vue3'
import VueCompareImage from 'vue3-compare-image'
import { BindOncePlugin } from 'vue-bind-once'
import { createPinia } from 'pinia'
import filters from '@explorer-1/vue/src/utils/filters'
import '@explorer-1/common/src/scss/styles-with-fonts.scss'
import { withGlobals, globalTypes } from './withGlobals'
import customTheme from '@explorer-1/common-storybook/src/config/customTheme'
import '@explorer-1/common-storybook/src/config/canvas.css'
import VueObserveVisibility from 'vue3-observe-visibility'

const pinia = createPinia()
const router = createRouter({
  routes: [],
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  }
} as RouterOptions)
setup((app, _context) => {
  app.use(pinia)
  app.use(router)
  app.use(vClickOutside)
  app.use(VueCompareImage)
  app.use(BindOncePlugin)
  app.use(VueObserveVisibility)
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
    a11y: {
      context: 'body',
      config: {
        rules: [
          // ignore rules that fail tests but are not actually violations
          // see: https://github.com/ag-grid/ag-grid/issues/6218
          {
            id: 'aria-required-children',
            selector: '*:not(.ag-root)'
          },
          {
            id: 'region',
            enabled: false
          },
          {
            id: 'scrollable-region-focusable',
            enabled: false
          }
        ]
      }
    },
    // set the theme for docs (same as UI)
    docs: {
      theme: customTheme
    },
    chromatic: {
      ignoreSelectors: ['.richtext-image img', '.BlockVideoEmbed iframe']
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
          [
            'WWW',
            'EDU',
            [
              'PageContent',
              'PageEduNewsDetail',
              'PageEduEventDetail',
              'PageEduCollectionsDetail',
              'PageEduExplainerArticle',
              'PageEduLesson',
              'PageEduStudentProject',
              'PageEduTeachableMoment',
              'PageEduMultimediaDetail',
              '*'
            ],
            'PageContent'
          ]
        ]
      }
    }
  },

  decorators: [withGlobals],

  tags: ['autodocs']
}

export default preview
