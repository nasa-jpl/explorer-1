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
        <BaseHeading v-if="title" :level="headingLevel" size="h3" class="mb-4"
          >{{ title }}
        </BaseHeading>
        <p
          v-if="summary"
          class="text-gray-dark text-body-sm mb-3 hidden md:block"
        >
          {{ summary }}
        </p>

        <div class="md:mt-10 text-xl md:flex">
          <div class="EventCard__Metadata flex text-theme-red text-body-sm">
            <IconCalendar class="relative mr-3" />
            <span> {{ mixinFormatEventDates(startDate, endDate) }}</span>
          </div>
          <div
            v-show="displayTime"
            class="EventCard__Metadata hidden md:flex text-theme-red text-body-sm"
          >
            <IconTime class="relative mr-3" />
            <span>{{ displayTime }}</span>
          </div>
          <div
            v-if="location"
            class="EventCard__Metadata flex text-theme-red text-body-sm"
          >
            <IconLocation class="relative mr-3" />
            <span>{{ location }}</span>
          </div>
        </div>
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
          <div
            v-if="splitDate"
            class="hidden md:block absolute top-0 left-0 z-10 px-4 py-4 text-center text-white bg-jpl-red"
          >
            <div class="font-extrabold text-6xl leading-tight tracking-wider">
              {{ splitDate.day }}
            </div>
            <div class="text-subtitle">
              {{ splitDate.monthAndYear }}
            </div>
          </div>
        </BaseImagePlaceholder>
      </div>
    </div>
  </BaseLink>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'EventCard',
  components: {
    BaseLink,
    BaseHeading,
    BaseImage,
    BaseImagePlaceholder,
  },
  props: {
    url: {
      type: String,
      required: false,
      default: '#',
    },
    title: {
      type: String,
      required: false,
    },
    summary: {
      type: String,
      required: false,
    },
    startTime: {
      type: String,
      required: false,
    },
    startDate: {
      type: String,
      required: false,
    },
    endTime: {
      type: String,
      required: false,
    },
    endDate: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    image: {
      type: Object,
      required: false,
    },
    headingLevel: {
      type: (String as PropType<HeadingLevel>) || null,
      required: false,
      default: 'h5',
    },
  },
  computed: {
    splitDate(): object | null {
      if (this.startDate) {
        return this.mixinFormatSplitEventDates(this.startDate, this.endDate)
      }
      return null
    },
    displayTime(): string {
      return this.mixinFormatEventTimeInHoursAndMinutes(
        this.startDate,
        this.endDate,
        this.endTime
      )
    },
  },
})
</script>
<style lang="scss">
.EventCard {
  .EventCard__Metadata {
    @apply items-baseline;
    @apply mr-0;
    @apply mb-4;
    @apply md:mb-0;
    @apply md:mr-3;
    @apply lg:mr-6;

    span {
      max-width: 230px;
      min-width: 110px;
      @apply text-gray-dark;
    }

    svg {
      min-width: 1.25rem;
      @apply top-0.5;
    }
  }
}
</style>
