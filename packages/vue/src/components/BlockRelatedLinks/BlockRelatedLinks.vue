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
    <div
      v-for="(link, index) in data.links"
      :key="index"
      class="sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3 mb-2"
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
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { BlockData, RelatedLinkObject } from './../../interfaces'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'

import RelatedLink from './../BlockRelatedLinks/RelatedLink.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'

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
    headingSize: {
      type: String,
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
