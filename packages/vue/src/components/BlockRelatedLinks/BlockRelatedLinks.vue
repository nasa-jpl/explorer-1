<template>
  <div v-if="hasContent">
    <BaseHeading
      v-if="data.heading"
      level="h2"
      v-bind="$attrs"
      class="md:mb-8 mb-5"
    >
      {{ data.heading }}
    </BaseHeading>
    <ul class="sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3 print:list-disc print:ml-4">
      <li
        v-for="(link, index) in data.links"
        :key="index"
        class="mb-2"
      >
        <template v-if="link.externalLink">
          <RelatedLink
            variant="external"
            :href="link.externalLink"
          >
            {{ link.text }}
          </RelatedLink>
        </template>
        <template v-else-if="link.document">
          <RelatedLink
            variant="document"
            :href="link.document.url"
          >
            {{ link.text }}
          </RelatedLink>
        </template>
        <template v-else-if="link.page">
          <RelatedLink
            variant="page"
            :to="link.page.url"
          >
            {{ link.text }}
          </RelatedLink>
        </template>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
/** A list of links formatted with background colors and icons indicating the type of link. */

import { defineComponent, type PropType } from 'vue'
import type { BlockData, RelatedLinkObject } from './../../interfaces'
import RelatedLink from './../BlockRelatedLinks/RelatedLink.vue'
import BaseHeading, { type HeadingLevel } from './../BaseHeading/BaseHeading.vue'

export interface BlockRelatedLinksObject extends BlockData {
  heading: string
  links: RelatedLinkObject[]
}

export default defineComponent({
  name: 'BlockRelatedLinks',
  components: {
    RelatedLink,
    BaseHeading
  },
  props: {
    data: {
      type: Object as PropType<BlockRelatedLinksObject>,
      required: true,
      default: () => ({})
    },
    /** Semantic heading level. Does not affect appearance. */
    headingSize: {
      type: String as PropType<HeadingLevel>,
      required: false,
      default: undefined
    }
  },
  computed: {
    hasContent() {
      if (this.data?.links?.length) {
        return true
      }
      return false
    }
  }
})
</script>
