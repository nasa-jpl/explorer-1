<template>
  <div
    v-if="data"
    class="PageVideoDetail ThemeVariantLight"
    itemscope
    itemtype="http://schema.org/VideoObject"
  >
    <!-- schema.org -->
    <meta
      v-if="data.uploadedMedia && data.uploadedMedia.file"
      itemprop="contentUrl"
      :content="data.uploadedMedia.file"
    />
    <meta
      v-if="data.uploadedMedia && data.uploadedMedia.duration"
      itemprop="duration"
      :content="data.uploadedMedia.duration"
    />
    <meta
      v-if="data.thumbnailImage && data.thumbnailImage.original"
      itemprop="thumbnailUrl"
      :content="data.thumbnailImage.original"
    />
    <meta
      v-if="data.summary || data.body"
      itemprop="description"
      :content="data.summary || data.body"
    />
    <div class="lg:container 3xl:px-0 lg:mt-12 px-5 mx-auto mt-5">
      <DetailHeadline
        v-if="data.title"
        :title="data.title"
        :publication-date="data.publicationDate"
        :label="data.topicLabel"
        schema
      />
    </div>
    <div
      v-if="data.block.length"
      class="max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8"
    >
      <div v-for="(block, index) in data.block" :key="index">
        <BlockVideoEmbed :data="block" />
      </div>
    </div>
    <div
      v-else-if="data.uploadedMedia"
      class="max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8"
    >
      <BaseVideo :data="data.uploadedMedia" schema />
    </div>
    <LayoutHelper indent="col-2">
      <div class="lg:grid grid-cols-10">
        <div v-if="data.body" class="col-span-7">
          <BlockText :text="data.body" />
          <hr class="border-gray-light-mid lg:my-8 my-5" />
          <div v-if="data.transcript" class="col-span-7 my-5">
            <BaseHeading level="h2" class="mb-5">Transcript</BaseHeading>
            <BlockText
              :text="data.transcript"
              variant="medium"
              class="video-transcript"
              itemprop="transcript"
            />
          </div>
        </div>

        <aside class="video-aside col-start-9 col-end-11">
          <div class="lg:pt-0 lg:mb-12 pt-8">
            <div class="lg:w-auto w-full">
              <BaseButton
                v-if="data.uploadedMedia && data.uploadedMedia.file"
                :href="data.uploadedMedia.file"
                class="w-full mb-5"
                variant="primary"
                compact
                >Download
                {{ data.uploadedMedia.fileExtension || 'Video' }}</BaseButton
              >
            </div>
          </div>
        </aside>
      </div>
    </LayoutHelper>
    <div
      v-if="data.relatedPages && data.relatedPages.length"
      class="bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"
    >
      <BlockLinkCarousel
        item-type="tiles"
        heading="Related Pages"
        :items="data.relatedPages"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHelper from '@/components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from '@/components/DetailHeadline/DetailHeadline.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BlockText from '@/components/BlockText/BlockText.vue'
import BaseVideo from '@/components/BaseVideo/BaseVideo.vue'
import BlockVideoEmbed from '@/components/BlockVideoEmbed/BlockVideoEmbed.vue'
import BlockLinkCarousel from '@/components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BaseHeading from '@/components/BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'PageVideoDetail',
  components: {
    LayoutHelper,
    DetailHeadline,
    BlockText,
    BaseButton,
    BaseVideo,
    BlockVideoEmbed,
    BlockLinkCarousel,
    BaseHeading,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      openTab: 1,
    }
  },
})
</script>

<style lang="scss">
.PageVideoDetail {
  .BaseImagePlaceholder {
    @apply select-none;

    min-height: 400px;
  }

  .video-aside {
    .BaseButton {
      max-width: 200px;
    }

    .BlockText {
      @apply text-lg;
    }
  }

  .video-transcript {
    p {
      @apply mb-4;
    }
  }
}
</style>
