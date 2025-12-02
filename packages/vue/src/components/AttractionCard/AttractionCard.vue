<template>
  <BaseLink
    variant="none"
    :to="url"
    class="SearchResultCard AttractionCard"
    link-class="block"
  >
    <div
      class="border-gray-light-mid lg:pb-10 lg:mb-10 relative grid grid-cols-12 gap-5 pb-6 mb-6 border-b"
    >
      <div class="col-span-9">
        <BaseHeading
          v-if="title"
          :level="headingLevel"
          size="h5"
          class="mb-5 font-semibold"
          >{{ title }}
        </BaseHeading>
        <MetadataStacked
          :location="location"
          :wait="wait"
          :show-my-list="showMyList"
          :location-icon="locationIcon"
        />
      </div>
      <div
        v-if="image"
        class="SearchResultCard-image col-span-3"
      >
        <BaseImagePlaceholder aspect-ratio="square">
          <BaseImage
            v-if="image.src"
            :src="image.src.url"
            :width="image.src.width"
            :height="image.src.height"
            alt=""
            object-fit-class="cover"
            loading="lazy"
          />
        </BaseImagePlaceholder>
      </div>
    </div>
  </BaseLink>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import MetadataStacked from '../MetadataStacked/MetadataStacked.vue'

import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'EventCard',
  components: {
    BaseLink,
    BaseHeading,
    BaseImage,
    BaseImagePlaceholder,
    MetadataStacked
  },
  props: {
    url: {
      type: String,
      required: false,
      default: '#'
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    location: {
      type: String,
      required: false,
      default: ''
    },
    wait: {
      type: String,
      required: false,
      default: ''
    },
    image: {
      type: Object,
      required: false
    },
    showMyList: {
      type: Boolean,
      required: false
    },
    locationIcon: {
      type: String,
      required: false,
      default: ''
    },
    headingLevel: {
      type: (String as PropType<HeadingLevel>) || null,
      required: false,
      default: 'h5'
    }
  },
  computed: {
    ...mapStores(useThemeStore)
  }
})
</script>
