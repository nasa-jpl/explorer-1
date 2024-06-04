/** @type { import('@storybook/vue3').Preview } */
import type { App } from 'vue'
import useMockComponents from './_mock-components.js'
import { StoryContext } from '@storybook/types'
import { VueRenderer, setup, type Preview } from '@storybook/vue3'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { createPinia } from 'pinia'
import '@explorer-1/common-storybook/src/config/canvas.css'
import '@explorer-1/vue/src/assets/scss/styles.scss'
import { withGlobals, globalTypes } from '@explorer-1/common-storybook/src/config/withGlobals'

const pinia = createPinia()

setup((app: App, context?: StoryContext<VueRenderer>) => {
  app.use(pinia)
  app.component('Swiper', Swiper)
  app.component('SwiperSlide', SwiperSlide)
  useMockComponents(app)
})

const preview: Preview = {
  globalTypes,

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
