<template>
  <div>
    <EventCard
      v-if="isEvents"
      :url="url"
      :title="title"
      :summary="summary"
      :image="image"
      :location="location"
      :start-time="startTime"
      :start-date="startDate"
      :end-time="endTime"
      :end-date="endDate"
      :heading-level="headingLevel"
      compact
    />
    <PodcastEpisodeCard
      v-else-if="isPodcastSeason"
      :url="url"
      :summary="summary"
      :image="image"
      :heading-level="headingLevel"
      :media="media"
      :type="type"
      :topic="topic"
      :title="title"
    />
    <BaseLink
      v-else
      variant="none"
      :to="url"
      class="SearchResultCard"
      link-class="block"
    >
      <div
        v-if="!featured"
        class="border-gray-light-mid lg:pb-10 lg:mb-10 relative grid grid-cols-9 gap-5 pb-6 mb-6 border-b"
      >
        <div
          v-if="type || topic"
          class="lg:hidden col-span-full text-subtitle"
        >
          <span v-if="type">
            <span aria-hidden="true">{{ type }}</span>
            <span class="sr-only">Category: {{ type }}.</span>
          </span>
          <span
            v-if="type && topic"
            aria-hidden="true"
            class="mx-1"
            >|</span
          >
          <span
            v-if="topic"
            class="text-gray-mid-dark"
          >
            <span aria-hidden="true">{{ topic }}</span>
            <span class="sr-only">Category: {{ topic }}.</span>
          </span>
        </div>
        <div class="sm:col-span-6 md:col-span-6 lg:col-span-7 xl:col-span-7 col-span-6">
          <div
            v-if="type || topic"
            class="text-subtitle lg:block hidden mb-3"
          >
            <span v-if="type">
              <span aria-hidden="true">{{ type }}</span>
              <span class="sr-only">Category: {{ type }}.</span>
            </span>
            <span
              v-if="type && topic"
              aria-hidden="true"
              class="mx-1"
              >|</span
            >
            <span
              v-if="topic"
              class="text-gray-mid-dark"
            >
              <span aria-hidden="true">{{ topic }}</span>
              <span class="sr-only">Category: {{ topic }}.</span>
            </span>
          </div>

          <BaseHeading
            v-if="title"
            size="h5"
            :level="headingLevel"
            class="mb-3"
            >{{ title }}</BaseHeading
          >
          <p
            v-if="summary"
            class="hidden sm:block text-gray-mid-dark text-body-sm mb-3"
          >
            {{ summary }}
            <span class="sr-only">.</span>
          </p>
          <p
            v-if="date"
            class="text-gray-mid-dark"
          >
            {{ date }}
          </p>
        </div>
        <div
          v-if="image"
          class="SearchResultCard-image xl:pl-14 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2 col-span-3"
        >
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
          </BaseImagePlaceholder>
        </div>
      </div>
      <div
        v-else
        class="bg-jpl-blue-darker edu:bg-stars edu:bg-primary xl:grid-cols-9 relative grid grid-cols-5 mb-10 text-white"
      >
        <div class="xl:col-span-7 flex items-center col-span-3 p-10">
          <div class="">
            <div
              v-if="type || topic"
              class="text-subtitle mb-3"
            >
              <span v-if="type">
                <span aria-hidden="true">{{ type }}</span>
                <span class="sr-only">Category: {{ type }}.</span>
              </span>
              <span
                v-if="type && topic"
                aria-hidden="true"
                class="mx-1"
                >|</span
              >
              <span v-if="topic">
                <span aria-hidden="true">{{ topic }}</span>
                <span class="sr-only">Category: {{ topic }}.</span>
              </span>
            </div>
            <BaseHeading
              v-if="title"
              size="h5"
              :level="headingLevel"
              class="mb-4"
            >
              {{ title }}
            </BaseHeading>
            <p
              v-if="summary"
              class="hidden lg:block text-body-sm mb-3"
            >
              {{ summary }}
            </p>
            <p v-if="date">{{ date }}</p>
          </div>
        </div>
        <div
          v-if="image && image.src"
          class="SearchResultCard-image xl:col-span-2 col-span-2"
        >
          <img
            :src="image.src.url"
            :width="image.src.width"
            :height="image.src.height"
            :alt="image.alt"
            class="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </BaseLink>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import PodcastEpisodeCard from './../PodcastEpisodeCard/PodcastEpisodeCard.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import EventCard from './../EventCard/EventCard.vue'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'SearchResultCard',
  components: {
    BaseLink,
    BaseHeading,
    BaseImage,
    BaseImagePlaceholder,
    EventCard,
    PodcastEpisodeCard
  },
  props: {
    url: {
      type: String,
      required: false,
      default: '#'
    },
    type: {
      type: String,
      required: false
    },
    topic: {
      type: String,
      required: false
    },
    date: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    summary: {
      type: String,
      required: false
    },
    image: {
      type: Object,
      required: false
    },
    featured: {
      type: Boolean,
      required: false,
      default: false
    },
    headingLevel: {
      type: (String as PropType<HeadingLevel>) || null,
      required: false,
      default: 'h5'
    },
    isEvents: {
      type: Boolean,
      required: false
    },
    isPodcastSeason: {
      type: Boolean,
      required: false
    },
    isProfiles: {
      type: Boolean,
      default: false
    },
    media: {
      type: String,
      required: false
    },
    startTime: {
      type: String,
      required: false
    },
    startDate: {
      type: String,
      required: false
    },
    endTime: {
      type: String,
      required: false
    },
    endDate: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: false
    }
  }
})
</script>
