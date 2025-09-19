<template>
  <section
    aria-label="Feature"
    class="ThemeVariantDark relative flex items-center overflow-hidden"
    :class="compact ? 'HeroSmall' : 'HeroMedium'"
  >
    <div class="absolute inset-0 z-10 overflow-hidden bg-black">
      <!-- video always overrides the image -->
      <MixinVideoBg
        v-if="theVideo"
        :video="theVideo"
      />
      <!-- change to v-if if image should load as fallback until video loads -->
      <picture v-else-if="theImage && theImage.src">
        <source
          media="(min-width: 768px)"
          :srcset="theImage.srcSet"
        />
        <source
          media="(min-width: 420px)"
          :srcset="theImage.screenMd?.url"
        />
        <source :srcset="theImage.screenSm?.url" />
        <img
          class="object-cover w-full h-full"
          :src="theImage.src.url"
          :width="theImage.src.width"
          :height="theImage.src.height"
          alt=""
          data-chromatic="ignore"
        />
      </picture>
    </div>
    <div
      class="lg:flex lg:items-end lg:relative lg:h-full z-20 w-full"
      :class="{
        'absolute  bottom-0': !compact
      }"
    >
      <div
        class="bg-gradient-to-b lg:bg-gradient-to-bl from-transparent lg:from-transparent-w50 to-black lg:to-transparent-black-75 absolute inset-0"
      ></div>
      <div
        v-if="feature"
        class="px-4 lg:px-10 2xl:px-0 lg:pb-0 lg:py-0 text-contrast container relative mx-auto text-white"
        :class="{
          'pt-40 pb-2 mb-10': !compact,
          'my-6 lg:mt-0 lg:mb-10': compact
        }"
      >
        <BaseLink
          variant="none"
          :to="feature.url"
          class="lg:w-1/2 xl:w-5/12 block"
        >
          <div
            v-if="customPill || customPillType || customLabel || feature.label"
            class="flex items-center lg:mb-3 mb-2"
          >
            <BasePill
              v-if="customPill || customPillType"
              variant="primary"
              size="sm"
              class="mr-3"
              :content-type="customPillType"
              :text="customPill"
            />
            <p
              v-if="customLabel || feature.label"
              class="text-subtitle"
            >
              {{ customLabel || feature.label }}
              <span class="sr-only">.</span>
            </p>
          </div>
          <p class="text-h3 font-semibold mb-0">
            <span class="mr-2">{{ feature.title }}</span>
            <span
              class="text-action-light lg:hidden can-hover:group-hover:ml-2 ml-0 text-4xl transition-all duration-200 ease-in"
            >
              <IconArrow class="inline" />
            </span>
          </p>
        </BaseLink>
        <BaseLink
          :to="feature.url"
          class="lg:block hidden"
          link-class="inline-block"
          caret-wrapper-class="py-3"
          variant="primary"
        >
          {{ cta }}
        </BaseLink>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
// HeroMedium
// A hero image with article link overlay
// For use when the hero includes a featured content item with link
// note: This component is very similar to a HomepageCarousel slide
import { defineComponent } from 'vue'
import { mixinTransparentHeader } from '../../utils/mixins'
import type { ImageObject } from '../../interfaces'
import IconArrow from './../Icons/IconArrow.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BasePill from './../BasePill/BasePill.vue'
import MixinVideoBg from './../MixinVideoBg/MixinVideoBg.vue'

export default defineComponent({
  name: 'HeroMedium',
  components: {
    IconArrow,
    BaseLink,
    MixinVideoBg,
    BasePill
  },
  props: {
    feature: {
      type: Object,
      required: false,
      default: undefined
    },
    customPill: {
      type: String,
      required: false,
      default: undefined
    },
    customPillType: {
      type: String,
      required: false,
      default: undefined
    },
    customLabel: {
      type: String,
      required: false,
      default: undefined
    },
    cta: {
      type: String,
      default: 'View'
    },
    compact: {
      type: Boolean,
      required: false,
      default: false
    },
    // to override media
    // use-case: news detail pages use this b/c their feature hero is structured differently
    customVideo: {
      type: Object,
      required: false,
      default: undefined
    },
    customImage: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  computed: {
    theVideo(): object | null {
      if (this.customVideo) {
        return this.customVideo
      } else if (this.feature?.video?.file) {
        return this.feature.video
      }
      return null
    },
    theImage(): Partial<ImageObject> | null {
      if (this.customImage) {
        return this.customImage
      } else if (this.feature?.image?.src) {
        return this.feature.image
      }
      return null
    }
  },
  watch: {
    // watch queries to reset the header in case user navigation only changes params
    '$route.query': {
      handler() {
        mixinTransparentHeader()
      }
    }
  },
  mounted() {
    mixinTransparentHeader()
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/HeroSmall';
@import '@explorer-1/common/src/scss/components/HeroMedium';
</style>
