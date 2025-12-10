<script setup lang="ts">
import type { PropType } from 'vue'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import MetadataStacked from '../MetadataStacked/MetadataStacked.vue'

const props = defineProps({
  /**
   * The link for the listing card.
   */
  url: {
    type: String,
    default: undefined
  },
  /**
   * The title text for the listing card. Plain text only.
   */
  title: {
    type: String,
    default: undefined
  },
  /**
   * The text for location metadata. Plain text only.
   */
  location: {
    type: String,
    default: undefined
  },
  /**
   * The text name for the location icon. Defaults to Explorer-1 location icon. Plain text only.
   */
  locationIcon: {
    type: String,
    default: undefined
  },
  /**
   * The text for the wait time metadata. Plain text only.
   */
  wait: {
    type: String,
    default: undefined
  },
  /**
   * The image for the listing card.
   */
  image: {
    type: Object
  },
  /**
   * Controls the visibility of the Bookmark icon and its associated metadata.
   */
  showMyList: {
    type: Boolean,
    default: false
  },
  /**
   * Change the heading level for semantic markup. This does not affect the style of the heading.
   */
  headingLevel: {
    type: (String as PropType<HeadingLevel>) || null,
    required: false,
    default: 'h5'
  }
})
</script>

<template>
  <BaseLink
    variant="none"
    :to="props.url"
    class="SearchResultCard AttractionCard"
    link-class="block"
  >
    <div
      class="border-gray-light-mid lg:pb-10 lg:mb-10 relative grid grid-cols-12 gap-5 pb-6 mb-6 border-b"
    >
      <div class="col-span-9">
        <BaseHeading
          v-if="props.title"
          :level="props.headingLevel"
          size="h5"
          class="mb-5 font-semibold"
          >{{ props.title }}
        </BaseHeading>
        <MetadataStacked
          :location="props.location"
          :wait="props.wait"
          :show-my-list="props.showMyList"
          :location-icon="props.locationIcon"
        />
      </div>
      <div
        v-if="props.image"
        class="SearchResultCard-image col-span-3"
      >
        <BaseImagePlaceholder aspect-ratio="square">
          <BaseImage
            v-if="props.image.src"
            :src="props.image.src.url"
            :width="props.image.src.width"
            :height="props.image.src.height"
            alt=""
            object-fit-class="cover"
            loading="lazy"
          />
        </BaseImagePlaceholder>
      </div>
    </div>
  </BaseLink>
</template>
