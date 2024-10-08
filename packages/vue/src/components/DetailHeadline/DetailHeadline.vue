<template>
  <div v-if="hasData">
    <div
      v-if="hasEyebrow"
      class="flex flex-wrap items-center mb-3"
    >
      <template v-if="pill && pillLabel">
        <BasePill
          :variant="pillColor"
          size="lg"
          class="mr-3"
          :text="pillLabel"
        />
      </template>
      <template v-else>
        <div
          v-if="topics && topics.length"
          class="inline edu:text-primary"
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
      </template>
      <span
        v-if="hasTag"
        class="sr-only"
        >.</span
      >
      <span
        :class="`${hasTag && !pill ? 'divide-gray-mid-dark border-l ml-3 pl-3 ' : ''} my-4  text-gray-mid-dark uppercase text-sm lg:text-base leading-none`"
      >
        {{ readTime }}
      </span>
    </div>
    <BaseHeading
      level="h1"
      :size="themeStore.theme === 'ThemeEdu' ? 'h1' : 'h2'"
      :itemprop="schema ? 'headline' : undefined"
      >{{ title }}
    </BaseHeading>
    <div
      v-if="hasByline"
      class="lg:text-base text-gray-mid-dark divide-gray-mid-dark px-3 mt-5 -ml-3 text-sm leading-none"
    >
      <span
        v-if="authors?.length"
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
      <meta
        v-if="schema && publicationDate"
        itemprop="datePublished"
        :content="pubDatetime"
      />

      <span v-if="publicationDate && !hideDate">
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
import type { Topic, AuthorObject } from './../../interfaces'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BasePill from '../BasePill/BasePill.vue'

export const pillColorVariants = ['primary', 'secondary', 'action']

export default defineComponent({
  name: 'DetailHeadline',
  components: {
    BaseLink,
    BaseHeading,
    BasePill
  },
  props: {
    title: {
      type: String,
      required: false,
      default: undefined
    },
    author: {
      type: Object as PropType<AuthorObject | { author: AuthorObject }[]>,
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
    readTime: {
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
    pill: {
      type: Boolean,
      default: false
    },
    pillColor: {
      type: String,
      default: 'primary',
      validator: (prop: string): boolean => pillColorVariants.includes(prop)
    },
    schema: {
      type: Boolean,
      default: false
    },
    hideDate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    hasTag(): boolean {
      return this.topics?.length || this.label ? true : false
    },
    hasEyebrow(): boolean {
      return this.hasTag || this.readTime ? true : false
    },
    hasByline(): boolean {
      return this.authors?.length || this.publicationDate ? true : false
    },
    hasData(): boolean {
      return this.title || this.hasEyebrow || this.hasByline ? true : false
    },
    pubDatetime(): string | undefined {
      const currentTime = this.publicationTime || '00:00:00'
      const returnDate = new Date(this.publicationDate + ' ' + currentTime)
      return returnDate.toISOString()
    },
    authors(): AuthorObject[] | undefined {
      let authors: AuthorObject[] | undefined = undefined
      if (this.author && this.author.constructor === Array) {
        authors = []
        this.author.forEach((author: { author: AuthorObject }) => {
          // @ts-expect-error authors array is defined above
          authors.push(author.author)
        })
      } else if (this.author) {
        authors = [this.author] as AuthorObject[]
      }
      return authors
    },
    pillLabel(): string | undefined {
      return this.label ? this.label : this.topics?.length ? this.topics[0].title : undefined
    }
  }
})
</script>
