<template>
  <BaseLink
    variant="none"
    :to="url"
    class="SearchResultCard EventCard"
    link-class="block"
  >
    <div
      class="border-gray-light-mid lg:pb-10 lg:mb-10 relative grid grid-cols-9 gap-7 pb-6 mb-6 border-b"
    >
      <div class="col-span-6 md:order-last">
        <BaseHeading
          v-if="title"
          :level="headingLevel"
          size="h3"
          class="mb-4"
          >{{ title }}
        </BaseHeading>
        <p
          v-if="summary"
          class="text-gray-dark text-body-sm mb-3 hidden md:block"
        >
          {{ summary }}
        </p>
        <MetadataEvent
          class="mt-6 lg:mt-8 block lg:flex"
          :event="{
            startTime,
            endTime,
            startDate,
            endDate,
            location
          }"
          compact
          allow-break
        />
      </div>
      <div
        v-if="image"
        class="SearchResultCard-image col-span-3 md:order-first"
      >
        <BaseImagePlaceholder
          aspect-ratio="square"
          responsive-aspect-ratio="md:aspect-ratio-four-three"
        >
          <BaseImage
            v-if="image.src"
            :src="image.src.url"
            :width="image.src.width"
            :height="image.src.height"
            alt=""
            object-fit-class="cover"
            loading="lazy"
          />
          <CalendarChip
            :start-date="startDate"
            :end-date="endDate"
            :ongoing="ongoing"
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
import CalendarChip from './../CalendarChip/CalendarChip.vue'
import MetadataEvent from './../../components/MetadataEvent/MetadataEvent.vue'

import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'EventCard',
  components: {
    BaseLink,
    BaseHeading,
    BaseImage,
    BaseImagePlaceholder,
    CalendarChip,
    MetadataEvent
  },
  props: {
    url: {
      type: String,
      required: false,
      default: '#'
    },
    title: {
      type: String,
      required: false
    },
    summary: {
      type: String,
      required: false
    },
    startTime: {
      type: String,
      required: false
    },
    startDate: {
      type: String,
      required: false
    },
    ongoing: {
      type: Boolean,
      default: false
    },
    endTime: {
      type: String,
      required: false
    },
    endDate: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: false
    },
    image: {
      type: Object,
      required: false
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
