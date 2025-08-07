<template>
  <div class="PodcastEpisodeCard">
    <div class="w-full h-auto">
      <div
        class="border-gray-light-mid lg:pb-10 lg:mb-10 relative grid grid-cols-9 pb-6 mb-6 border-b"
      >
        <div
          v-if="showInlinePlayer"
          class="col-span-full animate-fadeIn transition-all"
        >
          <div
            v-if="type || topic"
            class="text-subtitle lg:block hidden mb-3"
          >
            <span v-if="type">
              {{ type }}
              <span class="sr-only">.</span>
            </span>
            <span
              v-if="type && topic"
              class="mx-1"
              >|</span
            >
            <span
              v-if="topic"
              class="text-gray-mid-dark"
            >
              {{ topic }}
              <span class="sr-only">.</span>
            </span>
          </div>
          <BaseHeading
            v-if="title"
            size="h5"
            :level="headingLevel"
            class="mb-3"
          >
            <BaseLink
              variant="none"
              :to="url"
            >
              {{ title }}</BaseLink
            >
          </BaseHeading>
        </div>
        <div
          v-if="showInlinePlayer"
          class="col-span-full flex flex-row animate-fadeIn transition-all bg-gray-dark"
        >
          <div class="PodcastEpisodeCard-thumbnail w-1/6 lg:w-25 min-h-full relative inline-block">
            <BaseImagePlaceholder
              class="h-full"
              aspect-ratio="1:1"
            >
              <BaseImage
                v-if="image?.src"
                :src="image.src.url"
                :width="image.src.width"
                :height="image.src.height"
                alt=""
                object-fit-class="cover"
                loading="lazy"
              />
            </BaseImagePlaceholder>
          </div>
          <div
            v-if="showInlinePlayer"
            class="w-full pt-3 lg:pt-3.5 px-3.5 flex flex-col justify-center"
          >
            <div class="w-full">
              <BaseAudio
                :file="media"
                auto-play
              />
            </div>
          </div>
        </div>
        <BaseLink
          v-if="showInlinePlayer"
          variant="none"
          :to="url"
          class="col-span-12 animate-fadeIn transition-all"
          link-class="block"
        >
          <p
            v-if="summary"
            class="hidden sm:block text-gray-mid-dark text-body-sm my-3"
          >
            {{ summary }}
            <span class="sr-only">.</span>
          </p>
        </BaseLink>
        <BaseLink
          v-if="!showInlinePlayer"
          variant="none"
          :to="url"
          class="PodcastEpisodeCard sm:col-span-6 md:col-span-6 lg:col-span-7 xl:col-span-7 col-span-6"
          link-class="block"
        >
          <div
            v-if="type || topic"
            class="text-subtitle lg:block hidden mb-3"
          >
            <span v-if="type">
              {{ type }}
              <span class="sr-only">.</span>
            </span>
            <span
              v-if="type && topic"
              class="mx-1"
              >|</span
            >
            <span
              v-if="topic"
              class="text-gray-mid-dark"
            >
              {{ topic }}
              <span class="sr-only">.</span>
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
        </BaseLink>
        <button
          v-if="image && !showInlinePlayer"
          class="PodcastEpisodeCard-image xl:pl-14 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2 col-span-3 z-20 ml-3"
          aria-label="Play episode"
          @click="inlinePlayerToggle()"
        >
          <div class="relative h-full w-full group">
            <div
              class="text-white absolute text-8xl animate-fadeIn transition-opacity z-20 inset-0 flex justify-center items-center drop-shadow-lg opacity-90 group-hover:opacity-100 duration-1000"
            >
              <IconPlay />
            </div>
            <BaseImagePlaceholder
              class="bg-opacity-0"
              aspect-ratio="1:1"
              no-logo
            >
              <BaseImage
                v-if="image?.src"
                :src="image.src.url"
                :width="image.src.width"
                :height="image.src.height"
                alt=""
                class="sm:object-cover object-cover"
                image-class="group-hover:opacity-75 opacity-100 duration-500"
                loading="lazy"
              />
            </BaseImagePlaceholder>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseAudio from './../BaseAudio/BaseAudio.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import IconPlay from './../Icons/IconPlay.vue'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'PodcastEpisodeCard',
  components: {
    BaseLink,
    BaseHeading,
    BaseImage,
    BaseImagePlaceholder,
    BaseAudio,
    IconPlay
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
    title: {
      type: String,
      required: false
    },
    summary: {
      type: String,
      required: false
    },
    media: {
      type: String,
      required: false
    },
    image: {
      type: Object,
      required: false
    },
    headingLevel: {
      type: (String as PropType<HeadingLevel>) || null,
      required: false,
      default: 'h5'
    }
  },
  data() {
    return {
      showInlinePlayer: false
    }
  },
  methods: {
    inlinePlayerToggle(): boolean {
      this.showInlinePlayer = !this.showInlinePlayer
      return this.showInlinePlayer
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/PodcastEpisodeCard';
</style>
