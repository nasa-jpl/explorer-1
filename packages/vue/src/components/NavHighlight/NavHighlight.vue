<template>
  <div v-if="highlight">
    <BaseLink
      variant="none"
      external-target-blank
      link-class="block"
      :to="highlight.url"
    >
      <div v-if="highlight.thumbnailImage" class="mb-4">
        <BaseImagePlaceholder aspect-ratio="16:9" dark-mode no-logo>
          <BaseImage
            v-if="highlight.thumbnailImage.src"
            :src="highlight.thumbnailImage.src.url"
            :width="highlight.thumbnailImage.src.width"
            :height="highlight.thumbnailImage.src.height"
            alt=""
            object-fit-class="cover"
            image-class="can-hover:group-hover:scale-100 transition duration-300 ease-in-out transform scale-105"
            loading="lazy"
          />
        </BaseImagePlaceholder>
      </div>

      <p v-if="customLabel || highlight.label" class="text-subtitle-sm mb-2">
        {{ customLabel || highlight.label }}
      </p>
      <span class="sr-only">.</span>
      <p v-if="highlight.title">{{ highlight.title }}</p>
    </BaseLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'

export default defineComponent({
  name: 'NavHighlight',
  components: {
    BaseLink,
    BaseImage,
    BaseImagePlaceholder,
  },
  props: {
    highlight: {
      type: Object,
      required: false,
    },
    customLabel: {
      type: String,
      required: false,
    },
  },
})
</script>
