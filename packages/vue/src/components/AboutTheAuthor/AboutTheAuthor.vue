<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { AuthorObject } from '../../interfaces'
import BlockText from './../BlockText/BlockText.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'

const props = defineProps({
  /**
   * Array of keyed `{AuthorObject}s`
   */
  authors: {
    type: Array as () => {
      author?: AuthorObject
    }[],
    default: () => []
  }
})
const { authors } = reactive(props)

const headingString = computed(() => {
  let noun = 'Author'
  if (authors?.length > 1) {
    noun = 'Authors'
  }
  return `About the ${noun}`
})
</script>
<template>
  <div class="AboutTheAuthor">
    <h3 class="text-h4 sm:ml-[130px] sm:pl-10 mb-6">
      {{ headingString }}
    </h3>
    <template
      v-for="(author, index) in authors"
      :key="index"
    >
      <div
        v-if="author.author"
        class="sm:flex flex-row"
        :class="{ ' mb-10 sm:mb-12': index + 1 !== authors.length }"
      >
        <div class="sm:mr-10">
          <BaseImagePlaceholder
            aspect-ratio="1:1"
            class="relative mb-6 sm:mb-0 overflow-hidden rounded-full w-[130px]"
            transparent-mode
            no-logo
          >
            <BaseImage
              v-if="author.author.image?.src"
              :src="author.author.image.src.url"
              :width="author.author.image.src.width"
              :height="author.author.image.src.height"
              :alt="author.author.name"
              object-fit-class="cover"
              image-class="can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in transform scale-105"
              loading="lazy"
            />
          </BaseImagePlaceholder>
        </div>
        <div>
          <div class="mb-4">
            <h3
              v-if="author.author.name"
              class="!text-lg mb-1"
            >
              {{ author.author.name }}
            </h3>
            <p
              v-if="author.author.jobTitle || author.author.organization"
              class="font-display text-lg"
            >
              {{
                (author.author.jobTitle ? author.author.jobTitle : '') +
                (author.author.jobTitle && author.author.organization ? ', ' : '')
              }}
              {{ author.author.organization }}
            </p>
          </div>
          <BlockText
            v-if="author.author.biography"
            :text="author.author.biography"
            variant="small"
          />
        </div>
      </div>
    </template>
  </div>
</template>
