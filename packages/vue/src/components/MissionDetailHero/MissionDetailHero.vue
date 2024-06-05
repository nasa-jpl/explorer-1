<template>
  <div
    class="MissionDetailHero max-w-screen-3xl relative mx-auto transition-opacity duration-500"
    :class="heroTheme"
  >
    <div
      class="absolute inset-0 z-10 overflow-hidden"
      :class="{ 'bg-black': hasBackground }"
    >
      <div
        class="background duration-3500 w-full h-full transition-all ease-out transform"
        :class="backgroundTransition"
      >
        <img
          v-if="hasBackground && theBackground && theBackground.src"
          ref="backgroundImage"
          class="max-w-none object-cover w-full h-full"
          :src="theBackground.src.url"
          :srcset="theBackground.srcSet"
          :width="theBackground.src.width"
          :height="theBackground.src.height"
          :alt="hasForeground ? '' : theBackground.alt"
        />
      </div>
    </div>
    <component
      :is="hasForeground ? 'ParallaxContainer' : 'div'"
      invert
      overflow
      class="content-wrapper lg:pb-0 relative z-20 flex items-center w-full h-full pb-12"
      :class="overlayClasses"
    >
      <div class="relative z-30 w-full h-full">
        <div
          class="content lg:mb-0 lg:py-48 lg:flex lg:items-center duration-2000 relative z-30 w-full h-full transition-all ease-out delay-200"
        >
          <div
            class="lg:py-0 lg:BaseGrid sm:pt-24 container h-full py-10 mx-auto"
          >
            <div
              class="content-body lg:px-10 3xl:px-0 col-start-1 col-end-7 px-4"
              :class="{ 'text-contrast': hasBackground }"
            >
              <p
                v-if="subtitle"
                class="text-body-sm mb-3 font-normal tracking-normal"
              >
                {{ subtitle }}
              </p>
              <h1 class="text-h1-alt break-normal">
                {{ title }}
              </h1>

              <p
                class="xl:text-2xl lg:text-md xl:pr-26 xl:leading-normal text-xl leading-relaxed"
              >
                {{ summary }}
              </p>
              <BaseButton
                v-if="missionWebsiteUrl"
                :href="missionWebsiteUrl"
                target="_blank"
                class="mt-8"
                variant="secondary"
                compact
              >
                Visit Mission Website
                <template #icon>
                  <IconExternal class="ml-2 text-base" />
                </template>
              </BaseButton>
            </div>
          </div>
        </div>
        <ParallaxElement
          v-if="hasForeground && instrumentImage && Object.keys(instrumentImage).length"
          class="foreground lg:absolute lg:mt-0 lg:pb-0 lg:inset-0 lg:flex lg:items-center 3xl:mr-16 z-20 w-full h-full pb-10 mt-24 ml-auto mr-10 overflow-visible"
          :factor="0.4"
        >
          <picture class="block w-full h-full">
            <source :srcset="instrumentImage.webp.url" type="image/webp" />
            <img
              v-if="instrumentImage.src"
              ref="foregroundImage"
              :class="`lg:absolute lg:right-1/2 lg:translate-x-1/2 lg:top-1/2 lg:-mr-8 lg:mt-0 transform transition-all delay-500 duration-2000 ease-out mx-auto -mt-10 ${foregroundTransition}`"
              :src="instrumentImage.src.url"
              :srcset="instrumentImage.srcSet"
              :width="instrumentImage.src.width"
              :height="instrumentImage.src.height"
              :alt="instrumentImage.alt"
            />
          </picture>
        </ParallaxElement>
      </div>
    </component>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ImageObject } from '../../interfaces'
import { mixinTransparentHeader } from '../../utils/mixins'
import ParallaxContainer from './../ParallaxContainer/ParallaxContainer.vue'
import ParallaxElement from './../ParallaxElement/ParallaxElement.vue'
import BaseButton from './../BaseButton/BaseButton.vue'
import IconExternal from './../Icons/IconExternal.vue'

export default defineComponent({
  name: 'MissionDetailHero',
  components: {
    ParallaxContainer,
    ParallaxElement,
    BaseButton,
    IconExternal,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    subtitle: {
      type: String,
      required: false,
    },
    summary: {
      type: String,
      required: true,
      default: '',
    },
    missionWebsiteUrl: {
      type: String,
      required: false,
    },
    instrumentImage: {
      type: Object,
      required: false,
    },
    instrumentBackground: {
      type: Object,
      required: false,
    },
    heroFallback: {
      type: Object as PropType<Partial<ImageObject>>,
      required: false,
    },
    // if both instrumentBackground and instrumentImage are provided, templateStyle will have no effect and will default to 'dark'
    templateStyle: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  computed: {
    // checking for combinations of image uploads as are required and some aren't
    hasBackground(): boolean {
      if (this.instrumentBackground) {
        return true
      } else if (this.heroFallback && !this.instrumentImage) {
        return true
      }
      // false when an instrumentImage is supplied but no instrumentBackground
      return false
    },
    hasForeground(): boolean {
      if (this.instrumentImage) {
        return true
      }
      return false
    },
    // if an instrument background was supplied, use it. otherwise use the hero image (required) as a fallback
    theBackground(): Partial<ImageObject> | undefined {
      if (this.instrumentBackground) {
        return this.instrumentBackground.image
      }
      return this.heroFallback
    },
    heroTheme(): string {
      let classes = ''
      if (this.hasBackground || this.templateStyle === 'dark') {
        classes = 'ThemeVariantDark bg-black'
      } else {
        classes = 'ThemeVariantLight'
      }
      return classes
    },
    backgroundTransition(): string {
      let classes = ''
      if (this.isLoaded) {
        classes = 'scale-100 opacity-1'
      } else {
        classes = 'scale-125 opacity-0'
      }
      return classes
    },
    foregroundTransition(): string {
      let classes = ''
      if (this.isLoaded) {
        classes = 'opacity-1 translate-y-0 lg:-translate-y-1/2'
      } else {
        classes = 'opacity-0 translate-y-12 lg:-translate-y-3/7'
      }
      return classes
    },
    overlayClasses(): string {
      if (this.hasForeground && this.hasBackground) {
        return 'bg-gradient-to-bl from-transparent lg:to-transparent-black-90 to-black'
      } else if (this.hasBackground) {
        return 'bg-gradient-to-l from-transparent-w25 to-transparent-black-90'
      }
      return ''
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.hasBackground || this.templateStyle === 'dark') {
        mixinTransparentHeader()
      }
      // TODO: separate listener between background and foreground
      let img = this.$refs.foregroundImage as HTMLImageElement
      if (this.hasBackground) {
        img = this.$refs.backgroundImage as HTMLImageElement
      }
      if (!img) {
        return
      }
      if (img.complete) {
        this.isLoaded = true
      } else {
        const onLoad = () => {
          this.isLoaded = true
          img.removeEventListener('load', onLoad)
        }
        img.addEventListener('load', onLoad, false)
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.MissionDetailHero {
  .content-wrapper {
    @screen lg {
      min-height: 80vh;
    }
  }

  .content {
    // fallback text color
    @apply text-black;
  }

  .foreground {
    @screen lg {
      width: 55%;
    }

    img {
      max-height: 300px;
      @apply w-auto;
      @screen lg {
        max-height: 550px;
      }
    }
  }

  &.ThemeVariantLight {
    .content {
      @apply text-black;
    }
  }

  &.ThemeVariantDark {
    .background {
      &::before {
        content: '';
        @apply absolute inset-x-0 bottom-0 min-h-1/2 z-20 bg-gradient-to-b from-transparent to-black;
      }
    }

    .content {
      @apply text-white;
    }
  }
}
</style>
