<template>
  <div v-if="title || label || topics || publicationDate || author">
    <div
      v-if="label || (topics && topics.length)"
      class="flex flex-wrap items-start mb-3"
    >
      <div v-if="topics && topics.length" class="inline">
        <BaseLink variant="secondary" :to="topics[0].url" class="py-3">
          <span :itemprop="schema ? 'articleSection' : undefined">
            {{ topics[0].title }}
          </span>
        </BaseLink>
      </div>
      <span v-else-if="label" class="text-subtitle py-3">
        <template v-if="!labelLink">
          {{ label }}
        </template>
        <template v-else>
          <BaseLink variant="secondary" :to="labelLink" class="py-3">
            {{ label }}
          </BaseLink>
        </template>
      </span>
      <span class="sr-only">.</span>
    </div>
    <BaseHeading level="h1" :itemprop="schema ? 'headline' : undefined"
      >{{ title }}
    </BaseHeading>
    <div
      v-if="author || publicationDate"
      class="lg:text-base text-gray-mid-dark divide-gray-mid-dark px-3 mt-5 -ml-3 text-sm leading-normal"
    >
      <span
        v-if="author"
        :itemprop="schema ? 'author' : undefined"
        itemscope
        itemtype="https://schema.org/Person"
        class="pr-3 border-r mr-2"
      >
        Written by
        <span :itemprop="schema ? 'name' : undefined">{{ author.name }}</span>
      </span>
      <span
        v-else
        :itemprop="schema ? 'author' : undefined"
        itemscope
        itemtype="https://schema.org/Organization"
        class="hidden"
      >
        <span :itemprop="schema ? 'name' : undefined">
          Jet Propulsion Laboratory
        </span>
        <span :itemprop="schema ? 'url' : undefined">
          https://www.jpl.nasa.gov/
        </span>
      </span>
      <span v-if="publicationDate">
        <meta v-if="schema" itemprop="datePublished" :content="pubDatetime" />
        {{ $filters.displayDate(publicationDate) }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'

interface Topic {
  title: string
  url: string
}

export default defineComponent({
  name: 'DetailHeadline',
  components: {
    BaseLink,
    BaseHeading,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    author: {
      type: Object,
      required: false,
    },
    publicationDate: {
      type: String,
      required: false,
    },
    publicationTime: {
      type: String,
      required: false,
    },
    topics: {
      type: (Array as PropType<Topic[]>),
      required: false,
    },
    // if topics array isn't available
    label: {
      type: String,
      required: false,
    },
    labelLink: {
      type: String,
      required: false,
    },
    schema: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    pubDatetime(): string | undefined {
      const currentTime = this.publicationTime || '00:00:00'
      const returnDate = new Date(this.publicationDate + ' ' + currentTime)
      return returnDate.toISOString()
    },
  },
})
</script>
