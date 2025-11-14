<template>
  <BaseLink
    v-if="theItem"
    variant="none"
    :to="theItem.url ? theItem.url : undefined"
    :href="theItem.externalLink ? theItem.externalLink : undefined"
    class="BlockLinkTile group"
    link-class="block"
    external-target-blank
  >
    <div class="relative">
      <div
        class="lg:group-hover:scale-105 min-h-66 transition-all duration-200 ease-in delay-200 transform scale-100 bg-black"
      >
        <BaseImagePlaceholder
          :aspect-ratio="compact ? '1:1' : '8:7'"
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
            image-class="w-full h-full"
            loading="lazy"
          />
          <div v-else></div>
        </BaseImagePlaceholder>
        <div
          class="gradient-overlay bg-gradient-to-b from-transparent to-black min-h-1/2 absolute inset-x-0 bottom-0"
        ></div>
        <div class="bg-opacity-15 absolute inset-0 bg-black"></div>
      </div>
      <div class="absolute inset-x-0 bottom-0">
        <div
          class="text-contrast px-6 py-4 text-white"
          :class="{ 'xl:px-10 xl:py-6 lg:px-8': !compact }"
        >
          <p
            v-if="theItem.label || (theItem as EventCardObject).startDate"
            class="text-subtitle divide-white flex divide-x mb-2"
          >
            <span
              v-if="theItem.label"
              :class="{ 'pr-2': (theItem as EventCardObject).startDate }"
            >
              {{ theItem.label }}
            </span>
            <span
              v-if="(theItem as EventCardObject).startDate"
              :class="{ 'pl-2': theItem.label }"
            >
              {{ formattedEventDates }}
            </span>
            <span class="sr-only">.</span>
          </p>
          <component
            :is="headingLevel || 'p'"
            class="text-xl leading-tight tracking-tight transition-all duration-200 ease-in delay-200 edu:font-extrabold"
            :class="
              compact
                ? 'font-semibold mb-0 lg:group-hover:mb-1'
                : 'font-medium mb-1 lg:group-hover:mb-3 sm:text-6xl md:text-3xl xl:text-6xl'
            "
          >
            {{ theItem.title }}
          </component>
          <div
            class="lg:block lg:-ml-3 lg:opacity-0 lg:group-hover:ml-0 lg:group-hover:opacity-100 lg:-mb-3 relative z-20 hidden text-3xl leading-normal transition-all duration-200 ease-in delay-200"
          >
            <IconArrow />
          </div>
        </div>
      </div>
    </div>
  </BaseLink>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Card, EventCardObject } from '../../interfaces'
import { defineComponent } from 'vue'
import { mixinFormatEventDates } from './../../utils/mixins'
import IconArrow from './../Icons/IconArrow.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'BlockLinkTile',
  components: {
    IconArrow,
    BaseLink,
    BaseImage,
    BaseImagePlaceholder
  },
  props: {
    /** Card data (can accept page data with key `page`) */
    data: {
      type: Object as PropType<Card | EventCardObject>,
      required: false,
      default: undefined
    },
    /** Overrides `data` */
    url: {
      type: String,
      required: false,
      default: undefined
    },
    /** Overrides `data` */
    externalLink: {
      type: String,
      required: false,
      default: undefined
    },
    /** Overrides `data` */
    thumbnailImage: {
      type: Object,
      required: false,
      default: undefined
    },
    /** Overrides `data` */
    label: {
      type: String,
      required: false,
      default: undefined
    },
    /** Overrides `data` */
    title: {
      type: String,
      required: false,
      default: undefined
    },
    /** Event: overrides `data` */
    startDate: {
      type: String,
      required: false,
      default: undefined
    },
    /** Event: overrides `data` */
    endDate: {
      type: String,
      required: false,
      default: undefined
    },
    /** If compact styling should be used (adjusts text size) */
    compact: {
      type: Boolean,
      default: false
    },
    /** Heading level for semantic markup. This does not affect the style of the heading. No heading element is used if `undefined` */
    headingLevel: {
      type: (String as PropType<HeadingLevel>) || null,
      required: false
    }
  },
  computed: {
    // to allow for various data shapes and sources
    // use-case: the homepage provides this.data.page with non-page siblings
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
        this.startDate ||
        this.endDate
      ) {
        // form a custom object
        return {
          url: this.url,
          externalLink: this.externalLink,
          thumbnailImage: this.thumbnailImage,
          label: this.label,
          title: this.title,
          startDate: this.startDate,
          endDate: this.endDate
        }
      }
      return undefined
    },
    formattedEventDates() {
      return (this.theItem as EventCardObject)?.startDate
        ? mixinFormatEventDates(
            (this.theItem as EventCardObject).startDate,
            (this.theItem as EventCardObject).endDate
          )
        : undefined
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockLinkTile';
</style>
