<template>
  <BaseLink
    v-if="theItem"
    variant="none"
    :to="theItem.url ? theItem.url : undefined"
    :href="theItem.externalLink ? theItem.externalLink : undefined"
    class="BlockLinkCard group"
    :link-class="`block ${compact ? 'pb-3' : 'pb-5'}`"
    external-target-blank
  >
    <BaseImagePlaceholder
      aspect-ratio="16:9"
      class="bg-gray-dark relative mb-6 edu:lg:mb-8 overflow-hidden"
      :class="{ 'lg:mb-10': !compact }"
      dark-mode
      no-logo
    >
      <BaseImage
        v-if="theItem.thumbnailImage && theItem.thumbnailImage.src"
        :src="theItem.thumbnailImage.src.url"
        :width="theItem.thumbnailImage.src.width"
        :height="theItem.thumbnailImage.src.height"
        alt=""
        object-fit-class="cover"
        image-class="can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in transform scale-105"
        loading="lazy"
      />
      <div v-else></div>
      <CalendarChip
        v-if="
          themeStore.isEdu &&
          ((theItem as EventCardObject).startDate || (theItem as EventCardObject).ongoing)
        "
        :start-date="(theItem as EventCardObject).startDate"
        :end-date="(theItem as EventCardObject).endDate"
        :ongoing="(theItem as EventCardObject).ongoing"
      />
    </BaseImagePlaceholder>

    <div
      class="BlockLinkCard__CardContent transition-translate can-hover:group-hover:delay-200 duration-200 ease-in transform"
      :class="
        compact
          ? 'can-hover:group-hover:-translate-y-2'
          : 'can-hover:group-hover:-translate-y-3 edu:can-hover:group-hover:-translate-y-2'
      "
    >
      <template
        v-if="
          themeStore.isEdu && ((theItem as EventCardObject).eventType || data?.page?.__typename)
        "
      >
        <BasePill
          class="mb-2"
          size="sm"
          :content-type="data?.page?.__typename"
          >{{ (theItem as EventCardObject).eventType }}</BasePill
        >
      </template>
      <template v-else>
        <div class="flex flex-wrap">
          <p
            v-if="theItem.label || ((theItem as EventCardObject).startDate && !themeStore.isEdu)"
            class="text-subtitle divide-gray-mid flex divide-x"
            :class="compact ? 'mb-2' : 'mb-4'"
          >
            <span
              v-if="theItem.label"
              class="edu:text-primary ThemeVariantLight"
              :class="{ 'pr-2': (theItem as EventCardObject).startDate && !themeStore.isEdu }"
            >
              {{ theItem.label }}
            </span>
            <span
              v-if="(theItem as EventCardObject).startDate && !themeStore.isEdu"
              :class="{ 'text-gray-mid-dark pl-2': theItem.label }"
            >
              {{ formattedEventDates }}
            </span>
            <span class="sr-only">.</span>
          </p>
        </div>
      </template>

      <component
        :is="headingLevel || 'p'"
        class="text-gray-dark text-xl font-medium leading-tight tracking-tight edu:font-extrabold"
        :class="{ 'lg:text-3xl': !compact }"
      >
        {{ theItem.title }}
      </component>
      <p
        v-if="theItem.date"
        class="text-gray-mid-dark mt-2"
      >
        {{ theItem.date }}
      </p>
      <template v-if="themeStore.isEdu">
        <EventMetadata
          class="mt-2"
          :event="theItem"
          compact
        />
      </template>
    </div>
    <div
      class="BlockLinkCard__CardArrow ThemeVariantLight can-hover:block text-primary can-hover:-ml-3 can-hover:group-hover:delay-200 can-hover:opacity-0 can-hover:group-hover:ml-0 can-hover:group-hover:opacity-100 hidden -mt-1 text-2xl leading-normal transition-all duration-200 ease-in"
    >
      <IconArrow />
    </div>
  </BaseLink>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Card, EventCardObject } from '../../interfaces'
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import { mixinFormatEventDates } from './../../utils/mixins'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'
import IconArrow from './../Icons/IconArrow.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BasePill from './../BasePill/BasePill.vue'
import CalendarChip from './../CalendarChip/CalendarChip.vue'
import EventMetadata from './../EventMetadata/EventMetadata.vue'

export default defineComponent({
  name: 'BlockLinkCard',
  components: {
    IconArrow,
    BaseLink,
    BaseImage,
    BaseImagePlaceholder,
    BasePill,
    CalendarChip,
    EventMetadata
  },
  props: {
    data: {
      type: Object as PropType<Card>,
      required: false,
      default: undefined
    },
    // override props as needed
    // so we can use this component in search results
    url: {
      type: String,
      required: false,
      default: undefined
    },
    externalLink: {
      type: String,
      required: false,
      default: undefined
    },
    thumbnailImage: {
      type: Object,
      required: false,
      default: undefined
    },
    label: {
      type: String,
      required: false,
      default: undefined
    },
    title: {
      type: String,
      required: false,
      default: undefined
    },
    date: {
      type: String,
      required: false,
      default: undefined
    },
    eventType: {
      type: String,
      default: undefined
    },
    startDate: {
      type: String,
      required: false,
      default: undefined
    },
    endDate: {
      type: String,
      required: false,
      default: undefined
    },
    ongoing: {
      type: Boolean,
      default: false
    },
    startDatetime: {
      type: String,
      default: undefined
    },
    endDatetime: {
      type: String,
      default: undefined
    },
    location: {
      type: String,
      default: undefined
    },

    // if styling should be compact
    compact: {
      type: Boolean,
      default: false
    },
    // if a heading should be used and at what level
    headingLevel: {
      type: (String as PropType<HeadingLevel>) || null,
      required: false,
      default: undefined
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    // to allow for various data shapes and sources
    // use-case: content pages provide this.data.page with non-page siblings (i.e. external link cards)
    // use-case: search and listing pages pass individual props
    theItem(): Card | EventCardObject | undefined {
      if ((this.data as Card)?.page) {
        return (this.data as Card).page
      } else if (this.data) {
        return this.data
      } else if (
        this.url ||
        this.externalLink ||
        this.thumbnailImage ||
        this.label ||
        this.title ||
        this.date ||
        this.eventType ||
        this.startDate ||
        this.endDate ||
        this.startDatetime ||
        this.endDatetime ||
        this.ongoing ||
        this.location
      ) {
        // form a custom object
        return {
          url: this.url,
          externalLink: this.externalLink,
          thumbnailImage: this.thumbnailImage,
          label: this.label,
          title: this.title,
          date: this.date,
          startDate: this.startDate,
          endDate: this.endDate,
          eventType: this.eventType,
          startDatetime: this.startDatetime,
          endDatetime: this.endDatetime,
          ongoing: this.ongoing,
          locationName: this.location
        }
      }
      return undefined
    },
    formattedEventDates() {
      return (this.theItem as EventCardObject)?.startDate
        ? mixinFormatEventDates(
            // @ts-expect-error startDate is not undefined in this instance
            (this.theItem as EventCardObject).startDate,
            (this.theItem as EventCardObject).endDate
          )
        : undefined
    }
  }
})
</script>
<style lang="scss">
.BlockLinkCard {
  .text-subtitle.divide-x {
    @apply leading-none #{!important};
  }
  .ThemeVariantDark & {
    @apply bg-white;
    .BlockLinkCard__CardContent,
    .BlockLinkCard__CardArrow {
      @apply px-6;
      @apply print:px-0;
    }
    .BaseImagePlaceholder {
      @apply bg-gray-mid-dark;
    }
  }
}
</style>
