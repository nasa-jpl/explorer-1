<template>
  <div v-if="item">
    <p
      v-if="item.date"
      class="font-secondary text-jpl-red-light mb-4 font-semibold uppercase"
    >
      {{
        // @ts-ignore
        $filters.displayDate(item.date)
      }}
    </p>
    <p
      v-if="item.dateFreeform"
      class="font-secondary text-jpl-red-light mb-4 font-semibold uppercase"
    >
      {{ item.dateFreeform }}
    </p>
    <BaseHeading
      v-if="theHeading"
      level="h3"
      size="h6"
      class="mb-6"
    >
      {{ theHeading }}
    </BaseHeading>
    <div
      v-if="theSummary || item.highlightLink"
      class="text-body-normal xl:pr-4"
    >
      <span v-if="theSummary">{{ theSummary }}</span>
      <span
        v-if="item.highlightLink"
        class="inline-block"
      >
        <BaseLink
          variant="default"
          external-target-blank
          class="slide-link inline-block font-medium"
          :aria-label="theAriaLabel"
          :href="item.highlightLink.externalLink ? item.highlightLink.externalLink : undefined"
          :to="item.highlightLink.page ? item.highlightLink.page.url : undefined"
        >
          <span class="flex items-center">
            <span
              class="ml-1"
              :class="{ 'mr-1': item.highlightLink.externalLink }"
              >Learn more</span
            >
            <IconExternal v-if="item.highlightLink.externalLink" />
          </span>
        </BaseLink>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import IconExternal from './../Icons/IconExternal.vue'

export interface Slide {
  date: string
  heading: string
  dateFreeform: string
  highlightLink: {
    externalLink?: string
    page: {
      title: string
      url: string
      summary: string
    }
  }
  summary: string
}

export default defineComponent({
  name: 'MissionDetailHighlightsCarouselItem',
  components: {
    BaseHeading,
    BaseLink,
    IconExternal
  },
  props: {
    item: {
      type: Object as PropType<Slide>,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    theHeading(): string | boolean {
      const o = this.item
      return o.heading ?? o.highlightLink?.page?.title ?? false
    },
    theSummary(): string | boolean {
      const o = this.item
      if (o.summary) {
        return o.summary
      } else if (o.highlightLink && o.highlightLink.page && o.highlightLink.page.summary) {
        return o.highlightLink.page.summary
      }
      return false
    },
    theAriaLabel(): string {
      if (this.theHeading) {
        return 'Learn more about ' + this.theHeading
      }
      return 'Learn more'
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/MissionDetailHighlightsCarouselItem';
</style>
