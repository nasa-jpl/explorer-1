<template>
  <BaseLink
    v-if="theData"
    class="TopicDetailMoreItem group can-hover:hover:shadow-lg shadow-jpl transition-all duration-200 ease-in"
    variant="none"
    :link-class="theData.thumbnailImage ? 'block' : 'flex items-center block lg:min-h-100'"
    :to="theData.__typename !== 'ExternalLinkCard' ? theData.url : undefined"
    :href="theData.__typename === 'ExternalLinkCard' ? theData.url : undefined"
    external-target-blank
  >
    <div
      v-if="theData.thumbnailImage"
      class="relative"
    >
      <!-- icon for media -->
      <div
        v-if="theData.__typename === 'VideoDetailPage'"
        class="bg-jpl-red lg:text-2xl absolute bottom-0 left-0 z-10 text-lg text-white"
      >
        <IconPlay />
      </div>
      <!-- image -->
      <BaseImagePlaceholder
        aspect-ratio="3:2"
        dark-mode
      >
        <BaseImage
          v-if="theData.thumbnailImage.src"
          :src="theData.thumbnailImage.src.url"
          :srcset="theData.thumbnailImage.srcSet"
          :width="theData.thumbnailImage.src.width"
          :height="theData.thumbnailImage.src.height"
          alt=""
          object-fit-class="cover"
          loading="lazy"
          image-class="can-hover:group-hover:scale-100 scale-103 transition-all duration-200 ease-in transform"
        />
      </BaseImagePlaceholder>
    </div>
    <div class="text-gray-dark md:px-5 md:py-5 lg:px-10 lg:py-8 w-full px-10 py-8">
      <!-- label area -->
      <div
        v-if="theData.label || theData.date || (theData as EventCardObject).startDate"
        class="flex flex-wrap items-center justify-between mb-5"
      >
        <p class="divide-gray-mid text-subtitle flex divide-x">
          <span
            v-if="theData.label"
            class="pr-2"
            >{{ theData.label }}</span
          >
          <span
            v-if="theData.date || (theData as EventCardObject).startDate"
            class="text-gray-mid-dark"
            :class="{ 'pl-2': theData.label }"
          >
            <template v-if="theData.date">
              {{
                // @ts-ignore
                $filters.displayDate(theData.date)
              }}
            </template>
            <template v-else-if="(theData as EventCardObject).startDate">
              {{ formattedEventDates }}
            </template>
          </span>
          <span class="sr-only">.</span>
        </p>
        <IconExternal
          v-if="theData.__typename === 'ExternalLinkCard'"
          class="text-gray-mid-dark text-lg"
        />
      </div>

      <!-- title -->
      <h3 class="text-h5">{{ theData.title }}</h3>
    </div>
  </BaseLink>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Card, EventCardObject } from '../../interfaces'
import { mixinFormatEventDates } from '../../utils/mixins'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import IconPlay from './../Icons/IconPlay.vue'
import IconExternal from './../Icons/IconExternal.vue'

export default defineComponent({
  name: 'TopicDetailMoreItem',
  components: {
    BaseLink,
    BaseImage,
    BaseImagePlaceholder,
    IconPlay,
    IconExternal
  },
  props: {
    data: {
      type: Object as PropType<Card | EventCardObject>,
      required: false,
      default: undefined
    }
  },
  computed: {
    theData(): Card | undefined {
      if ((this.data as Card)?.page) {
        return (this.data as Card).page
      } else if (this.data) {
        return this.data
      }
      return undefined
    },
    formattedEventDates() {
      if ((this.theData as EventCardObject)?.startDate) {
        return mixinFormatEventDates(
          (this.theData as EventCardObject).startDate,
          (this.theData as EventCardObject).endDate
        )
      }
      return undefined
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/TopicDetailMoreItem';
</style>
