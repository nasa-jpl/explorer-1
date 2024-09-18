// import and assign mock components
import { action } from '@storybook/addon-actions'
import DsnWidget from '@explorer-1/vue/src/components/DsnWidget/DsnWidget.vue'
import AsteroidWatchWidget from '@explorer-1/vue/src/components/AsteroidWatchWidget/AsteroidWatchWidget.vue'

export default (app) => {
  // nuxt-link mock component
  app.component('NuxtLink', {
    props: ['to', 'href', 'class'],
    methods: {
      log() {
        if (this.to) {
          action('router link')(this.to)
        }
        if (this.href) {
          action('href link')(this.href)
        }
      }
    },
    template:
      '<a href="#" @click.prevent="log()" :class="this.class" v-bind="$attrs"><slot></slot></a>'
  })

  // Nuxt ClientOnly
  app.component('ClientOnly', {
    template: '<slot></slot>'
  })

  // use static dsn widget instead of fetch
  app.component('FetchDsnWidget', DsnWidget)

  // use static asteroid watch widget instead of fetch
  app.component('FetchAsteroidWatchWidget', AsteroidWatchWidget)
}
