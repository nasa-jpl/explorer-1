<template>
  <div class="HeroLarge max-w-screen-3xl relative mx-auto">
    <div class="absolute inset-0 z-10 bg-black">
      <picture v-if="image && image.src">
        <source
          media="(min-width: 768px)"
          :srcset="image.srcSet"
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
import { defineComponent } from 'vue'
import { mixinTransparentHeader } from './../../utils/mixins'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import BasePill from './../BasePill/BasePill.vue'

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
      type: Object,
      required: false,
      default: undefined
    },
    // If secondary nav is also on this page, will add more space above hero text
    hasOverlay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapStores(useThemeStore)
  },
  mounted() {
    mixinTransparentHeader()
  }
})
</script>
<style lang="scss" scoped>
@import '@explorer-1/common/src/scss/components/HeroLarge';
</style>
