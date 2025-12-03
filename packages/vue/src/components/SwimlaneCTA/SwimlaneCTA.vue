<template>
  <div class="justify-items-center flex w-full relative overflow-hidden">
    <BaseLink
      v-if="targetLink"
      class="w-full"
      variant="none"
      :to="targetLink"
      title="JPL Life"
      aria-label="JPL Life"
      link-class="max-w-screen-3xl block w-full mx-auto"
    >
      <div
        v-bind-once="{ style: 'background-image: url(' + randomizeImage + ');' }"
        role="presentation"
        :class="'SwimlaneCTA lg:block hidden' + computedClass"
        data-chromatic="ignore"
      >
        <div class="absolute inset-0 z-10 bg-black bg-opacity-25"></div>
        <div
          class="lg:pr-12 lg:py-5 lg:flex-row relative z-20 flex flex-col justify-center w-full px-5 py-6 font-primary"
        >
          <div class="lg:flex-row lg:pr-3 lg:pb-0 flex flex-col items-center justify-center pb-2">
            <div class="text-contrast relative z-20 p-2 pl-0">
              <template v-if="darkMode === true">
                <img
                  loading="lazy"
                  class="lg:pr-1 h-8 w-auto"
                  :src="jplLogoSFFF"
                  alt="JPL Logo"
                  width="106"
                  height="32"
                />
              </template>
              <template v-else>
                <img
                  loading="lazy"
                  class="lg:pr-1 h-8 w-auto"
                  :src="jplLogo222"
                  alt="JPL Logo"
                  width="111"
                  height="32"
                />
              </template>
            </div>
            <div class="lg:p-1 text-contrast relative z-20 pt-2 pl-0">
              <p class="text-secondary text-white lg:text-7xl mb-0 text-4xl font-medium">
                is a place for
              </p>
            </div>
          </div>

          <div>
            <div class="text-contrast relative z-20 pt-1 -mt-px">
              <BaseSwimlane
                :words="cloneWords"
                :rows="desktopRows"
                :scale="desktopScale"
                :transition-duration="transitionDuration"
                :transition-delay="transitionDelay"
                class="lg:block hidden"
              ></BaseSwimlane>
            </div>
          </div>
        </div>
      </div>
      <div
        v-bind-once="{ style: 'background-image: url(' + randomizeImageSmall + ');' }"
        role="presentation"
        :class="'SwimlaneCTA lg:hidden block' + computedClass"
      >
        <div
          class="lg:flex-row lg:pr-12 lg:py-5 flex flex-col justify-center w-full px-5 py-6 bg-black bg-opacity-25 font-primary"
        >
          <div class="lg:flex-row lg:pr-3 lg:pb-0 flex flex-col items-center justify-center pb-2">
            <div class="relative z-20 p-2 pl-0">
              <template v-if="darkMode === true">
                <img
                  loading="lazy"
                  class="lg:pr-1 h-8 w-auto"
                  :src="jplLogoFFF"
                  alt="JPL Logo"
                  width="106"
                  height="32"
                />
              </template>
              <template v-else>
                <img
                  loading="lazy"
                  class="lg:pr-1 h-8 w-auto"
                  :src="jplLogo222"
                  alt="JPL Logo"
                  width="111"
                  height="32"
                />
              </template>
            </div>
            <div class="lg:p-1 relative z-20 pt-2 pl-0">
              <p class="text-white text-contrast lg:text-7xl mb-0 text-4xl font-bold font-display">
                is a place for
              </p>
            </div>
          </div>

          <div>
            <div class="text-contrast relative z-20 pt-1">
              <BaseSwimlane
                :words="cloneWords"
                :rows="mobileRows"
                :scale="mobileScale"
                :transition-duration="transitionDuration"
                :transition-delay="transitionDelay"
                class="lg:hidden block"
              ></BaseSwimlane>
            </div>
          </div>
        </div>
      </div>
    </BaseLink>
  </div>
</template>

<script lang="ts">
/** The SwimlaneCTA component combines BaseSwimlane with other elements (JPL logo, links, etc.) to create the component that is used on the WWW homepage. */
import { defineComponent } from 'vue'
import jplLogoSFFF from '@explorer-1/common/src/images/png/brand-jpl-logo-FFFFFF-S-94h28w@2x.png'
import jplLogoFFF from '@explorer-1/common/src/images/png/brand-jpl-logo-FFFFFF-94h28w@2x.png'
import jplLogo222 from '@explorer-1/common/src/images/png/brand-jpl-logo-222222-94h28w@2x.png'

import BaseLink from './../BaseLink/BaseLink.vue'
import BaseSwimlane from './../BaseSwimlane/BaseSwimlane.vue'

export default defineComponent({
  name: 'SwimlaneCTA',
  components: {
    BaseLink,
    BaseSwimlane
  },
  props: {
    backgroundImages: {
      type: Array,
      required: false,
      default: () => [
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Dreamers.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Artists.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Communicators.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Designers.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Disruptors.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Educators.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Innovators.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Inventors.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Makers.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Problem_Solvers.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Robiticists.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Scientists.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Software_Engineers.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Thinkers.jpg',
        '/img/SwimlaneCTA/backgroundImages/JPL_is__Visualizers.jpg'
      ]
    },
    backgroundImagesSmall: {
      type: Array,
      required: false,
      default: () => [
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Dreamers.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Artists.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Communicators.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Designers.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Disruptors.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Educators.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Innovators.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Inventors.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Makers.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Problem_Solvers.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Robiticists.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Scientists.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Software_Engineers.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Thinkers.jpg',
        '/img/SwimlaneCTA/backgroundImagesSmall/JPL_is__Visualizers.jpg'
      ]
    },
    darkMode: {
      type: Boolean,
      required: false,
      default: true
    },
    targetLink: {
      type: String,
      required: false,
      default: '/topics/jpl-life'
    }
  },
  data() {
    return {
      jplLogoFFF: jplLogoFFF,
      jplLogo222: jplLogo222,
      jplLogoSFFF: jplLogoSFFF,
      mobileRows: 2,
      desktopRows: 9,
      mobileScale: 1.9,
      desktopScale: 2.5,
      words: [
        'Dreamers',
        'Artists',
        'Communicators',
        'Designers',
        'Educators',
        'Innovators',
        'Inventors',
        'Makers',
        'Problem Solvers',
        'Roboticists',
        'Scientists',
        'Engineers',
        'Thinkers',
        'Visualizers',
        'Oceanographers',
        'Developers',
        'Astrophysicists',
        'Disruptors',
        'Data Scientists',
        'Storytellers'
      ],
      transitionDuration: 1800,
      transitionDelay: 800
    }
  },
  computed: {
    computedClass(): string {
      let classes = ''
      if (!this.darkMode) {
        classes = classes + ' light-theme'
      } else {
        classes = classes + ' dark-theme'
      }
      return classes
    },
    randomizeImage(): object {
      const backgroundImage = this.backgroundImages[
        Math.floor(Math.random() * this.backgroundImages.length)
      ] as object
      return backgroundImage
    },
    randomizeImageSmall(): object {
      const backgroundImageSmall = this.backgroundImagesSmall[
        Math.floor(Math.random() * this.backgroundImagesSmall.length)
      ] as object
      return backgroundImageSmall
    },
    cloneWords(): string[] {
      const multiWordArray = Array.from({ length: 10 }, () => this.words).flat()
      return multiWordArray
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/SwimlaneCTA';
</style>
