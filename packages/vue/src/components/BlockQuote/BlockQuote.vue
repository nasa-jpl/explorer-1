<template>
  <div class="BlockQuote md:px-0 px-4 mx-auto text-center">
    <hr
      aria-hidden="true"
      class="lg:mb-6 mb-3"
    />
    <p
      class="quote"
      v-html="data.quote"
    ></p>
    <template v-if="data.attribution">
      <div class="inline-block">
        <div class="flex items-center justify-center">
          <img
            v-if="data.thumbnail && Object.keys(data.thumbnail).length > 0 && data.thumbnail.src"
            loading="lazy"
            class="attribution-image"
            :src="data.thumbnail.src"
            :alt="data.thumbnail.alt"
          />

          <BaseLink
            v-if="data.quoteLink && data.quoteLink.length > 0"
            variant="none"
            class="attribution-text"
            :href="data.quoteLink[0].externalLink ? data.quoteLink[0].externalLink : undefined"
            :to="data.quoteLink[0].page ? data.quoteLink[0].page.url : undefined"
            caret-margin-left="ml-1"
            caret-color="text-emphasis-color"
            caret
            external-target-blank
          >
            {{ data.attribution }}
          </BaseLink>

          <div
            v-else
            class="attribution-text"
          >
            <span>{{ data.attribution }}</span>
          </div>
        </div>
      </div>
    </template>
    <hr
      aria-hidden="true"
      class="lg:mt-6 mt-3"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'

interface BlockQuoteAttributes {
  quote: string
  attribution: string
  quoteLink: {
    externalLink?: string
    page?: {
      url: string
    }
  }[]
  thumbnail: {
    src: string
    alt: string
  }
}

export default defineComponent({
  name: 'BlockQuote',
  components: {
    BaseLink
  },
  props: {
    data: {
      type: Object as PropType<BlockQuoteAttributes>,
      required: true,
      default: () => ({})
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockQuote';
</style>
