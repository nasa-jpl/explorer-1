<template>
  <div
    class="shadow-jpl relative h-full bg-white"
    :class="{ 'flex items-center min-h-32': !image }"
  >
    <div
      v-if="image"
      class="h-auto"
    >
      <BaseImagePlaceholder
        aspect-ratio="16:9"
        dark-mode
      >
        <BaseImage
          v-if="image.src"
          :src="image.src.url"
          :srcset="theSrcSet"
          :alt="image.alt"
          :width="image.src.width"
          :height="image.src.height"
          object-fit-class="cover"
          image-class="can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in transform scale-105"
          loading="lazy"
        />
      </BaseImagePlaceholder>
    </div>
    <div class="px-6 py-6 ThemeVariantLight">
      <template v-if="label">
        <div class="text-primary text-subtitle internal:text-black">
          {{ label }}
        </div>
        <hr
          aria-hidden="true"
          class="bg-primary text-primary w-8 h-2px border-0 my-2"
        />
      </template>
      <BaseHeading
        size="h5"
        level="h3"
        class="mt-4 mb-2"
      >
        {{ title }}
      </BaseHeading>
      <p class="text-body-sm">{{ description }}</p>
      <div
        v-if="link"
        class="ThemeVariantLight w-full mt-1 can-hover:block text-action can-hover:-ml-3 can-hover:group-hover:delay-200 can-hover:opacity-0 can-hover:group-hover:ml-0 can-hover:group-hover:opacity-100 hidden text-2xl leading-normal transition-all duration-200 ease-in"
      >
        <IconArrow />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mixinGetSrcSet } from './../../utils/mixins'
import type { LinkObject } from './../../interfaces'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import IconArrow from './../Icons/IconArrow.vue'

export default defineComponent({
  name: 'BlockCardGridItemElement',
  components: {
    BaseImagePlaceholder,
    BaseImage,
    BaseHeading,
    IconArrow
  },
  props: {
    label: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      required: false,
      default: undefined
    },
    description: {
      type: String,
      default: undefined
    },
    image: {
      type: Object,
      default: undefined
    },
    link: {
      type: Object as PropType<LinkObject>,
      default: undefined
    }
  },
  computed: {
    theSrcSet() {
      return this.image
        ? mixinGetSrcSet(this.image)
          ? mixinGetSrcSet(this.image)
          : this.image.srcSet
        : undefined
    }
  }
})
</script>
