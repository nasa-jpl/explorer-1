<template>
  <div>
    <BlockLinkCard
      v-if="pageContentType === 'news_news'"
      :url="url"
      :title="title"
      :label="topic"
      :thumbnail-image="image"
      :date="date"
      :heading-level="headingLevel"
      compact
    />

    <BlockLinkTile
      v-else-if="pageContentType === 'missions_mission'"
      :url="url"
      :title="title"
      :thumbnail-image="image"
      :heading-level="headingLevel"
      compact
    />

    <BaseLink
      v-else
      variant="none"
      :to="url"
      class="relative mb-6"
      link-class="group block"
    >
      <div v-if="image" class="w-full">
        <BaseImagePlaceholder aspect-ratio="1:1">
          <BaseImage
            v-if="image.src"
            :src="image.src.url"
            :width="image.src.width"
            :height="image.src.height"
            alt=""
            class="sm:object-cover object-cover"
            loading="lazy"
          />
          <div
            v-if="splitDate"
            class="absolute top-0 left-0 z-10 px-4 py-4 text-center text-white lg:py-6 bg-jpl-red"
          >
            <div class="font-extrabold text-8xl leading-tight tracking-wider">
              {{ splitDate.day }}
            </div>
            <div class="text-subtitle">
              {{ splitDate.monthAndYear }}
            </div>
          </div>
        </BaseImagePlaceholder>
      </div>
      <component
        :is="headingLevel || 'p'"
        class="text-lg leading-normal mt-2 lg:mt-3 font-normal tracking-normal text-gray-dark can-hover:group-hover:text-gray-mid-dark"
      >
        <span>
          {{ title }}
        </span>
      </component>
    </BaseLink>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BlockLinkCard from './../BlockLinkCard/BlockLinkCard.vue'
import BlockLinkTile from './../BlockLinkTile/BlockLinkTile.vue'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'SearchResultGridItem',
  components: {
    BaseLink,
    BaseImage,
    BaseImagePlaceholder,
    BlockLinkCard,
    BlockLinkTile,
  },
  props: {
    url: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    topic: {
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
    title: {
      type: String,
      required: false,
    },
    image: {
      type: Object,
      required: false,
    },
    headingLevel: {
      type: (String as PropType<HeadingLevel>) || null,
      required: false,
    },
    pageContentType: {
      type: String,
      required: false,
    },
  },
  computed: {
    splitDate(): object | null {
      if (this.startDate) {
        return this.mixinFormatSplitEventDates(this.startDate, this.endDate)
      }
      return null
    },
  },
})
</script>
