/** @type { import('@storybook/vue3').Preview } */
import type { App } from 'vue'
import useMockComponents from './_mock-components.js'
import { StoryContext } from '@storybook/types'
import { VueRenderer, setup, type Preview } from '@storybook/vue3'
import { Swiper, SwiperSlide } from 'swiper/vue'
import '@explorer-1/common-storybook/src/config/canvas.css'
import '@explorer-1/vue/src/assets/scss/styles.scss'

import { withGlobals } from '@explorer-1/common-storybook/src/config/withGlobals'
setup((app: App, context?: StoryContext<VueRenderer>) => {
  app.component('Swiper', Swiper)
  app.component('SwiperSlide', SwiperSlide)
  useMockComponents(app)
})
const preview: Preview = {
  globalTypes: {
    themesConfig: {
      defaultValue: {
        themes: ['Default', 'EDU', 'Internal'],
        method: 'css'
      }
    },
    variantsConfig: {
      defaultValue: {
        variants: ['ThemeVariantLight', 'ThemeVariantDark'],
        method: 'css'
      }
    },
    theme: {
      description: 'Global Theme',
      defaultValue: 'defaultTheme',
      toolbar: {
        title: 'Theme',
        // https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon
        icon: 'eye',
        items: [
          {
            value: 'defaultTheme',
            icon: 'circlehollow',
            title: 'Default Theme'
          },
          { value: 'ThemeEdu', icon: 'circle', title: 'EDU Theme' },
          { value: 'ThemeInternal', icon: 'collapse', title: 'Internal Theme' }
        ],
        dynamicTitle: true
      }
    },
    variant: {
      description: 'Theme Variant',
      defaultValue: 'ThemeVariantLight',
      toolbar: {
        title: 'Variant',
        // https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon
        icon: 'eye',
        items: [
          {
            value: 'ThemeVariantLight',
            icon: 'circlehollow',
            title: 'Light Variant'
          },
          { value: 'ThemeVariantDark', icon: 'circle', title: 'Dark Variant' }
        ],
        dynamicTitle: true
      }
    }
  },

  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },

  decorators: [withGlobals],

  tags: ['autodocs']
}

export default preview
