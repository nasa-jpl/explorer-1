/** @type { import('@storybook/vue3').Preview } */
import type { App } from 'vue'
import useMockComponents from './_mock-components.js'
import { StoryContext } from '@storybook/types'
import { VueRenderer, setup, type Preview } from '@storybook/vue3'
import { Swiper, SwiperSlide } from 'swiper/vue'
import './../node_modules/@explorer-1/vue/src/assets/scss/styles.scss'

setup((app: App, context?: StoryContext<VueRenderer>) => {
  app.component('Swiper', Swiper)
  app.component('SwiperSlide', SwiperSlide)
  useMockComponents(app)
})
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },

  tags: ['autodocs']
}

export default preview
