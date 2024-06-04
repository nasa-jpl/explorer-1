<template>
  <component
    :is="tag"
    class="BlockCircleImageCard bg-white shadow-jpl h-full flex-grow"
    :class="{ imageOnRight: imageOnRight }"
    @click="$emit('click')"
  >
    <BaseImagePlaceholder v-if="image" transparent-mode>
      <!-- It’s important the image has no alt text so we can invert the card’s visual order without it changing the reading order. -->
      <BaseImage
        v-if="image.src"
        :src="image.src.url"
        :srcset="mixinGetSrcSet(image) ? mixinGetSrcSet(image) : image.srcSet"
        alt=""
        :width="image.src.width"
        :height="image.src.height"
        image-class="rounded-full border-4 border-white"
        object-fit-class="cover"
        loading="lazy"
      />
    </BaseImagePlaceholder>
    <div class="p-8 flex-grow">
      <div class="flex">
        <div class="text-gray-dark text-subtitle mb-3">
          {{ label }}
        </div>
        <span class="ml-auto">
          <slot name="icon"></slot>
        </span>
      </div>
      <div class="text-gray-mid-dark text-subtitle">
        {{ secondaryLabel }}
      </div>
      <BaseHeading size="h5" level="h3" class="mt-3">
        {{ title }}
      </BaseHeading>
    </div>
  </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'BlockCircleImageCard',
  components: {
    BaseImagePlaceholder,
    BaseImage,
    BaseHeading,
  },
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
    title: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    secondaryLabel: {
      type: String,
      required: false,
    },
    image: {
      type: Object,
      required: false,
    },
    imageOnRight: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockCircleImageCard';

@media (forced-colors: active) {
  .BlockCircleImageCard {
    border: 1px solid;
  }
}

.BlockCircleImageCard {
  @apply md:z-40;
}

.BlockCircleImageCard .IconExternal {
  @apply w-6 h-6 text-gray-mid-dark;
}

.BlockCircleImageCard .IconPlay {
  @apply w-7 h-7 bg-jpl-red text-white;
}
</style>
