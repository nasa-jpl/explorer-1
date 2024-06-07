<template>
  <div
    v-if="item"
    class="HomepageCarouselItem relative flex items-center overflow-hidden"
  >
    <div class="absolute inset-0 z-10 overflow-hidden bg-black">
      <!-- video always overrides the image -->
      <video
        v-if="item.video && item.video.file"
        loop
        muted
        playsinline
        preload="none"
        class="left-1/2 top-1/2 absolute z-10 object-cover w-auto h-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
      >
        <source
          v-if="item.video.fileWebm"
          :src="item.video.fileWebm"
          type="video/webm"
        />
        <source
          :src="item.video.file"
          type="video/mp4"
        />
        <source
          v-if="item.video.fileOgg"
          :src="item.video.fileOgg"
          type="video/ogg"
        />
      </video>
      <!-- change to v-if if image should load as fallback until video loads -->
      <picture v-else-if="item.image && item.image.src">
        <source
          media="(min-width: 768px)"
          :srcset="item.image.srcSet"
        />
        <source
          media="(min-width: 420px)"
          :srcset="item.image.screenMd?.url"
        />
        <source :srcset="item.image.screenSm?.url" />
        <img
          class="md:object-right object-cover object-bottom w-full h-full"
          :src="item.image.src.url"
          :width="item.image.src.width"
          :height="item.image.src.height"
          alt=""
          loading="lazy"
        />
      </picture>
    </div>
    <div class="lg:flex lg:items-center lg:relative lg:h-full absolute bottom-0 z-20 w-full">
      <div
        class="bg-gradient-to-b lg:bg-gradient-to-l from-transparent lg:from-transparent xl:from-transparent-w25 to-black lg:to-transparent-black-75 absolute inset-0"
      ></div>
      <div
        class="lg:px-10 2xl:px-0 lg:pb-10 lg:pt-0 text-contrast container relative px-4 pt-40 pb-24 mx-auto text-white"
      >
        <div class="lg:w-3/4 xl:w-1/2 block">
          <p
            v-if="item.heading"
            class="font-primary text-jpl-red-light lg:text-3xl lg:mb-0 mb-2 text-xl font-semibold tracking-normal uppercase"
          >
            {{ item.heading }}
            <span class="sr-only">.</span>
          </p>
          <component
            :is="item.externalLink || (item.page && item.page.url) ? 'BaseLink' : 'div'"
            variant="none"
            link-class="block"
            :href="item.externalLink ? item.externalLink : null"
            :to="item.page && item.page.url && !item.externalLink ? item.page.url : null"
            external-target-blank
          >
            <p
              v-if="item.slideTitle"
              class="lg:text-9xl leading-tighter text-5xl font-extrabold tracking-tighter"
            >
              <span class="mr-2">{{ item.slideTitle }}</span>
              <span
                v-if="item.externalLink || (item.page && item.page.url)"
                class="text-jpl-red-light lg:hidden can-hover:group-hover:ml-2 ml-0 text-4xl transition-all duration-200 ease-in"
              >
                <IconArrow class="inline" />
              </span>
            </p>
            <div
              v-if="item.externalLink || (item.page && item.page.url)"
              class="can-hover:group-hover:ml-5 text-jpl-red-light text-7xl lg:block hidden ml-0 transition-all duration-200 ease-in"
            >
              <IconArrow />
            </div>
          </component>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ImageObject } from '../../interfaces'
import BaseLink from './../BaseLink/BaseLink.vue'
import IconArrow from './../Icons/IconArrow.vue'

export interface Slide {
  slideTitle: string
  externalLink?: string
  page?: {
    url: string
  }
  heading: string
  video: {
    file: string
    fileOgg: string
    fileWebm: string
  }
  image: Partial<ImageObject>
}

export default defineComponent({
  name: 'HomepageCarouselItem',
  components: {
    BaseLink,
    IconArrow
  },
  props: {
    item: {
      type: Object as PropType<Slide>,
      required: false
    }
  }
})
</script>
<style lang="scss">
.HomepageCarouselItem,
.HomepageCarouselItem.swiper-slide {
  // somewhat arbitrary heights
  // portrait on small screens
  //height: 500px;
  min-height: 500px;
  // landscape on larger screens
  @screen lg {
    height: 800px;
    min-height: 800px;
  }
}

.HomepageCarouselItem {
  img {
    @apply transition-transform duration-1000 ease-out transform scale-100;
  }

  .IconArrow {
    @apply -ml-5 transition-all duration-500 ease-in opacity-0;
  }

  &.swiper-slide-active {
    img {
      @apply scale-105;
    }

    .IconArrow {
      @apply ml-0 opacity-100;
    }
  }
}
</style>
