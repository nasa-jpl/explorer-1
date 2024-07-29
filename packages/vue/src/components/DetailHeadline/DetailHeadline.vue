<template>
  <div v-if="title || label || topics || publicationDate || author">
    <div
      v-if="label || (topics && topics.length)"
      class="flex flex-wrap items-start mb-3"
    >
      <div
        v-if="topics && topics.length"
        class="inline"
      >
        <BaseLink
          variant="secondary"
          :to="topics[0].url"
          class="py-3"
          :use-primary-color="themeStore.theme === 'ThemeEdu'"
        >
          <span :itemprop="schema ? 'articleSection' : undefined">
            {{ topics[0].title }}
          </span>
        </BaseLink>
      </div>
      <span
        v-else-if="label"
        class="text-subtitle py-3 edu:text-primary"
      >
        <template v-if="!labelLink">
          {{ label }}
        </template>
        <template v-else>
          <BaseLink
            variant="secondary"
            :to="labelLink"
            class="py-3"
            :use-primary-color="themeStore.theme === 'ThemeEdu'"
          >
            {{ label }}
          </BaseLink>
        </template>
      </span>
      <span class="sr-only">.</span>
    </div>
    <BaseHeading
      level="h1"
      :size="themeStore.theme === 'ThemeEdu' ? 'h1' : 'h2'"
      :itemprop="schema ? 'headline' : undefined"
      >{{ title }}
    </BaseHeading>
    <div
      v-if="author || publicationDate"
      class="lg:text-base text-gray-mid-dark divide-gray-mid-dark px-3 mt-5 -ml-3 text-sm leading-normal"
    >
      <span
        v-if="authors"
        :itemprop="schema ? 'author' : undefined"
        itemscope
        itemtype="https://schema.org/Person"
        class="pr-3 border-r mr-2"
      >
        Written by
        <template
          v-for="(a, index) of authors"
          :key="index"
        >
          <span
            class="inline-block"
            :itemprop="schema ? 'name' : undefined"
            >{{ a.name }}</span
          >
          <template v-if="index !== authors.length - 1"
            ><span class="inline-block pr-1">,</span></template
          >
        </template>
      </span>
      <span
        v-else
        :itemprop="schema ? 'author' : undefined"
        itemscope
        itemtype="https://schema.org/Organization"
        class="hidden"
      >
        <span :itemprop="schema ? 'name' : undefined"> Jet Propulsion Laboratory </span>
        <span :itemprop="schema ? 'url' : undefined"> https://www.jpl.nasa.gov/ </span>
      </span>
      <span v-if="publicationDate">
        <meta
          v-if="schema"
          itemprop="datePublished"
          :content="pubDatetime"
        />
        {{
          // @ts-ignore
          $filters.displayDate(publicationDate)
        }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import type { Topic } from './../../interfaces'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'

interface Author {
  name: string
  organization: string
}
export default defineComponent({
  name: 'DetailHeadline',
  components: {
    BaseLink,
    BaseHeading
  },
  props: {
    title: {
      type: String,
      required: false,
      default: undefined
    },
    author: {
      type: Object as PropType<Author | Author[]>,
      required: false,
      default: undefined
    },
    publicationDate: {
      type: String,
      required: false,
      default: undefined
    },
    publicationTime: {
      type: String,
      required: false,
      default: undefined
    },
    topics: {
      type: Array as PropType<Topic[]>,
      required: false,
      default: undefined
    },
    // if topics array isn't available
    label: {
      type: String,
      required: false,
      default: undefined
    },
    labelLink: {
      type: String,
      required: false,
      default: undefined
    },
    schema: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    pubDatetime(): string | undefined {
      const currentTime = this.publicationTime || '00:00:00'
      const returnDate = new Date(this.publicationDate + ' ' + currentTime)
      return returnDate.toISOString()
    },
    authors(): { name: string; organization: string }[] | undefined {
      let authors: Author[] | undefined = undefined
      if (this.author && this.author.constructor === Array) {
        authors = []
        // @ts-expect-error we know it's an array at this point
        this.author.forEach((author: { author: Author }) => {
          // @ts-expect-error authors array is defined above
          authors.push(author.author)
        })
      } else {
        authors = [this.author] as Author[]
      }
      return authors
    }
  }
})
</script>
