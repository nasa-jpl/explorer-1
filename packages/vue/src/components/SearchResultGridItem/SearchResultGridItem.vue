<template>
  <div>
    <BlockLinkCard
      v-if="themeStore.isEdu"
      :data="{
        page: {
          __typename: typename,
          url,
          type,
          label: topic,
          date,
          title,
          thumbnailImage: image,
          startTime,
          startDate,
          endTime,
          endDate,
          customDate,
          location,
          eventType,
          ongoing,
          primarySubject,
          gradeLevels,
          time,
          targetAudience
        }
      }"
      :heading-level="headingLevel"
      size="sm"
      show-calendar-chip
      use-featured-styles
    />
    <BlockLinkCard
      v-else-if="typename === 'News'"
      :data="{
        page: {
          __typename: typename,
          url,
          title,
          label: topic,
          thumbnailImage: image,
          date
        }
      }"
      :heading-level="headingLevel"
      size="sm"
    />

    <BlockLinkTile
      v-else-if="typename === 'Mission'"
      :url="url"
      :title="title"
      :thumbnail-image="image"
      :heading-level="headingLevel"
      compact
    />

    <BaseLink
      v-else
      variant="none"
      :to="url"
      class="relative mb-6"
      link-class="group block"
    >
      <div
        v-if="image"
        class="w-full"
      >
        <BaseImagePlaceholder aspect-ratio="1:1">
          <BaseImage
            v-if="image.src"
            :src="image.src.url"
            :width="image.src.width"
            :height="image.src.height"
            alt=""
            class="sm:object-cover object-cover"
            loading="lazy"
          />
          <CalendarChip
            :start-date="startDate"
            :end-date="endDate"
            :ongoing="ongoing"
          />
        </BaseImagePlaceholder>
      </div>
      <component
        :is="headingLevel || 'p'"
        class="text-lg leading-normal mt-2 lg:mt-3 font-normal tracking-normal text-gray-dark can-hover:group-hover:text-gray-mid-dark"
      >
        <span>
          {{ title }}
        </span>
      </component>
    </BaseLink>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import type { PrimarySubjectObject, GradeLevelsObject, EduResourcesTime } from './../../interfaces'
import { useThemeStore } from '../../store/theme'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BlockLinkCard from './../BlockLinkCard/BlockLinkCard.vue'
import BlockLinkTile from './../BlockLinkTile/BlockLinkTile.vue'
import CalendarChip from './../CalendarChip/CalendarChip.vue'
import { lookupContentType } from '../../utils/lookupContentType'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'SearchResultGridItem',
  components: {
    BaseLink,
    BaseImage,
    BaseImagePlaceholder,
    BlockLinkCard,
    BlockLinkTile,
    CalendarChip
  },
  props: {
    url: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    eventType: {
      type: String,
      required: false
    },
    topic: {
      type: String,
      required: false
    },
    date: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    image: {
      type: Object,
      required: false
    },
    startDate: {
      type: String,
      required: false
    },
    endDate: {
      type: String,
      required: false
    },
    customDate: {
      type: String,
      required: false,
      default: undefined
    },
    startTime: {
      type: String,
      required: false,
      default: undefined
    },
    endTime: {
      type: String,
      required: false,
      default: undefined
    },
    ongoing: {
      type: Boolean,
      default: false
    },
    targetAudience: {
      type: String,
      default: undefined
    },
    location: {
      type: String,
      default: undefined
    },
    headingLevel: {
      type: (String as PropType<HeadingLevel>) || null,
      required: false
    },
    pageContentType: {
      type: String,
      required: false
    },
    primarySubject: {
      type: Object as PropType<PrimarySubjectObject>,
      default: undefined
    },
    gradeLevels: {
      type: Array as PropType<GradeLevelsObject[]>,
      default: undefined
    },
    time: {
      type: Object as PropType<EduResourcesTime>,
      default: undefined
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    typename() {
      return this.pageContentType
        ? lookupContentType(this.pageContentType, 'eskey', 'interface')
        : undefined
    }
  }
})
</script>
