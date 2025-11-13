<template>
  <div class="HeroLarge max-w-screen-3xl relative mx-auto">
    <div class="absolute inset-0 z-10 bg-black">
      <picture v-if="image && image.src">
        <source
          media="(min-width: 768px)"
          :srcset="theSrcSet"
        />
        <source
          media="(min-width: 420px)"
          :srcset="image.screenMd.url"
        />
        <source :srcset="image.screenSm.url" />
        <img
          class="md:object-right object-cover object-bottom w-full h-full"
          :src="image.src.url"
          :width="image.src.width"
          :height="image.src.height"
          :alt="image.alt"
          data-chromatic="ignore"
        />
      </picture>
    </div>
    <div class="content-wrapper lg:flex lg:items-center relative z-20 w-full h-full">
      <div
        class="bg-gradient-to-t lg:bg-gradient-to-l from-transparent-w25 lg:from-transparent-w50 to-transparent-black-50 lg:to-transparent-black-50 absolute inset-0"
      ></div>
      <div class="text-contrast relative w-full text-white">
        <div class="lg:py-0 pb-80 container pt-8 mx-auto">
          <div
            class="lg:px-10 2xl:px-0 lg:pt-6 lg:pb-18 px-4"
            :class="{ 'pt-10': hasOverlay }"
          >
            <div
              v-if="customPill || customPillType || label"
              class="lg:mb-6 mb-4"
            >
              <BasePill
                v-if="customPill || customPillType"
                variant="primary"
                size="lg"
                class="mr-3"
                :content-type="customPillType"
                :text="customPill"
              />
              <div
                v-else-if="label"
                class="font-secondary text-base font-semibold tracking-wider no-underline uppercase"
              >
                {{ label }}
                <span class="sr-only">.</span>
              </div>
            </div>
            <h1
              v-if="title"
              class="lg:w-3/4 xl:w-3/5 xl:text-10xl lg:text-9xl md:text-8xl text-7xl lg:tracking-tightest lg:leading-tighter mb-5 font-bold leading-tight"
              :class="{ uppercase: !themeStore.isEdu }"
            >
              {{ title }}
            </h1>
            <p
              v-if="summary"
              class="lg:w-1/2 2xl:w-2/5 xl:text-6xl lg:text-4xl md:text-2xl lg:leading-tight text-lg font-medium"
            >
              {{ summary }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { mixinTransparentHeader, mixinGetSrcSet } from './../../utils/mixins'
import type { ImageObject } from './../../interfaces.ts'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import { eduMetadataDictionary } from './../../constants'
import BasePill from './../BasePill/BasePill.vue'
type ContentTypeKey = keyof typeof eduMetadataDictionary

export default defineComponent({
  name: 'HeroLarge',
  components: {
    BasePill
  },
  props: {
    label: {
      type: String,
      required: false,
      default: undefined
    },
    /** Text for pill (overrides label) */
    customPill: {
      type: String,
      required: false,
      default: undefined
    },
    /** Maps to EDU resource types. Label is replaced with a color-themed "pill." Must use with `.ThemeEdu` */
    customPillType: {
      type: String as PropType<ContentTypeKey>,
      required: false,
      default: undefined
    },
    title: {
      type: String,
      required: false,
      default: undefined
    },
    summary: {
      type: String,
      required: false,
      default: undefined
    },
    image: {
      type: Object as PropType<ImageObject>,
      required: false,
      default: undefined
    },
    /** If secondary nav is also on this page, more space will be added above the hero text */
    hasOverlay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    theSrcSet() {
      return this.image
        ? mixinGetSrcSet(this.image)
          ? mixinGetSrcSet(this.image)
          : this.image.srcSet
        : undefined
    }
  },
  mounted() {
    mixinTransparentHeader()
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/HeroLarge';
</style>
