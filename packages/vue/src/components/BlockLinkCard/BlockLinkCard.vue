<template>
  <BaseLink
    v-if="theItem"
    variant="none"
    :to="theItem.url ? theItem.url : null"
    :href="theItem.externalLink ? theItem.externalLink : null"
    class="BlockLinkCard group"
    link-class="block pb-5"
    external-target-blank
  >
    <BaseImagePlaceholder
      aspect-ratio="16:9"
      class="bg-gray-dark relative mb-6 overflow-hidden"
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
    </BaseImagePlaceholder>

    <div
      class="transition-translate can-hover:group-hover:delay-200 duration-200 ease-in transform"
      :class="
        compact
          ? 'can-hover:group-hover:-translate-y-2'
          : 'can-hover:group-hover:-translate-y-3'
      "
    >
      <div class="flex flex-wrap">
        <p
          v-if="theItem.label || theItem.startDate"
          class="text-subtitle divide-gray-mid flex divide-x"
          :class="compact ? 'mb-2' : 'mb-4'"
        >
          <span v-if="theItem.label" :class="{ 'pr-2': theItem.startDate }">
            {{ theItem.label }}
          </span>
          <span
            v-if="theItem.startDate"
            :class="{ 'text-gray-mid-dark pl-2': theItem.label }"
          >
            {{ formattedEventDates }}
          </span>
          <span class="sr-only">.</span>
        </p>
      </div>

      <component
        :is="headingLevel || 'p'"
        class="text-gray-dark text-xl font-medium leading-tight tracking-tight"
        :class="{ 'lg:text-3xl': !compact }"
      >
        {{ theItem.title }}
      </component>
      <p v-if="theItem.date" class="text-gray-mid-dark mt-2">
        {{ theItem.date }}
      </p>
    </div>
    <div
      class="can-hover:block text-jpl-red can-hover:-ml-3 can-hover:group-hover:delay-200 can-hover:opacity-0 can-hover:group-hover:ml-0 can-hover:group-hover:opacity-100 hidden -mt-1 text-2xl leading-normal transition-all duration-200 ease-in"
    >
      <IconArrow />
    </div>
  </BaseLink>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { mixinFormatEventDates } from './../../utils/mixins'
import IconArrow from './../Icons/IconArrow.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'BlockLinkCard',
  components: {
    IconArrow,
    BaseLink,
    BaseImage,
    BaseImagePlaceholder,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
    // override props as needed
    // so we can use this component in search results
    url: {
      type: String,
      required: false,
    },
    externalLink: {
      type: String,
      required: false,
    },
    thumbnailImage: {
      type: Object,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    startDate: {
      type: String,
      required: false,
    },
    endDate: {
      type: String,
      required: false,
    },
    // if styling should be compact
    compact: {
      type: Boolean,
      default: false,
    },
    // if a heading should be used and at what level
    headingLevel: {
      type: (String as PropType<HeadingLevel>) || null,
      required: false,
    },
  },
  computed: {
    // to allow for various data shapes and sources
    // use-case: content pages provide this.data.page with non-page siblings (i.e. external link cards)
    // use-case: search and listing pages pass individual props
    theItem(): object | null {
      if (this.data && this.data.page) {
        return this.data.page
      } else if (this.data) {
        return this.data
      } else if (
        this.url ||
        this.externalLink ||
        this.thumbnailImage ||
        this.label ||
        this.title ||
        this.date ||
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
          date: this.date,
          startDate: this.startDate,
          endDate: this.endDate,
        }
      }
      return null
    },
    formattedEventDates() {
      return mixinFormatEventDates(this.theItem.startDate, this.theItem.endDate)
    }
  },
})
</script>
<style lang="scss">
.BlockLinkCard {
  .text-subtitle.divide-x {
    @apply leading-none #{!important};
  }
}
</style>
