<script setup lang="ts">
import { computed, reactive } from 'vue'
import { PageEduResourcesObject, ImageObject } from '../../../interfaces'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BaseHeading from './../../../components/BaseHeading/BaseHeading.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import BlockVideo from './../../../components/BlockVideo/BlockVideo.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import BlockVideoEmbed from './../../../components/BlockVideoEmbed/BlockVideoEmbed.vue'
import BaseButton from './../../../components/BaseButton/BaseButton.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BaseImagePlaceholder from './../../../components/BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from './../../../components/BaseImage/BaseImage.vue'
import BlockRelatedLinks from './../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import MixinFancybox from './../../../components/MixinFancybox/MixinFancybox.vue'
import AboutTheAuthor from './../../../components/AboutTheAuthor/AboutTheAuthor.vue'

interface PageEduMultimediaObject extends PageEduResourcesObject {
  heroImage?: ImageObject
  imageAsHero?: ImageObject
  heroImageCaption?: string
  video?: any
  document?: {
    url: string
  }
  galleryItems?: {
    heading?: string
    description?: string
    media: any[]
  }[]
  credit?: string
  transcript?: string
}

interface PageEduMultimediaDetailProps {
  data: PageEduMultimediaObject
}

// define props
const props = withDefaults(defineProps<PageEduMultimediaDetailProps>(), {
  data: undefined
})

const typeMapping: {
  [key: string]: {
    type: string
    label: string
    schema: string
    relatedContentHeading: string
  }
} = {
  EDUImageDetailPage: {
    type: 'image',
    label: 'image',
    schema: 'http://schema.org/ImageObject',
    relatedContentHeading: 'Related Images & Galleries'
  },
  EDUInfographicDetailPage: {
    type: 'image',
    label: 'infographic',
    schema: 'http://schema.org/ImageObject',
    relatedContentHeading: 'Related Images & Galleries'
  },
  EDUVideoDetailPage: {
    type: 'video',
    label: 'video',
    schema: 'http://schema.org/VideoObject',
    relatedContentHeading: 'Related Videos'
  },
  EDUGalleryDetailPage: {
    type: 'gallery',
    label: 'gallery',
    schema: 'http://schema.org/ImageGallery',
    relatedContentHeading: ''
  },
  EDUDocumentDetailPage: {
    type: 'document',
    label: 'document',
    schema: 'http://schema.org/DigitalDocument',
    relatedContentHeading: 'Related Documents'
  }
}
const mediaType = computed(() => {
  const type = data.__typename
  if (type) {
    return typeMapping[type]?.type
  }
  return undefined
})

const mediaLabel = computed(() => {
  const type = data.__typename
  if (type) {
    return typeMapping[type]?.label
  }
  return undefined
})

const schemaType = computed(() => {
  const type = data.__typename
  if (type) {
    return typeMapping[type]?.schema
  }
  return undefined
})

const heroImage = computed(() => {
  switch (mediaType.value) {
    case 'image':
      return data.imageAsHero
    case 'document':
      return data.heroImage
    default:
      return undefined
  }
})

const videoBlock = computed(() => {
  if (mediaType.value === 'video' && data.video?.length) {
    return data.video[0]
  }
  return undefined
})

const downloadUrl = computed(() => {
  switch (mediaType.value) {
    case 'image':
      return heroImage.value?.original
    case 'video':
      return videoBlock.value?.video?.file
    case 'document':
      return data.document?.url
    default:
      return undefined
  }
})

const creditText = computed(() => {
  switch (mediaType.value) {
    case 'image':
      return heroImage.value?.credit
    case 'video':
      return videoBlock.value?.credit
    case 'document':
      return data.credit
    default:
      return undefined
  }
})

const relatedContentHeading = computed(() => {
  const type = data.__typename
  let text = data.relatedContentHeading
  if (type && !text) {
    text = typeMapping[type]?.relatedContentHeading
  }
  return text
})

const { data } = reactive(props)
</script>
<template>
  <div
    v-if="data && mediaType"
    class="PageEduMultimediaDetail ThemeVariantLight pt-5 lg:pt-12"
    itemscope
    :itemtype="schemaType"
  >
    <!-- Detail Headline -->
    <LayoutHelper
      indent="col-2"
      class="mb-10"
    >
      <DetailHeadline
        :title="data.title"
        :label="mediaLabel"
        :publication-date="data.publicationDate"
        schema
        pill
      />
      <ShareButtonsEdu
        v-if="data?.url"
        class="mt-4"
        :url="data.url"
        :title="data.title"
        :image="data.thumbnailImage?.original"
      />
    </LayoutHelper>

    <!-- Media-specific content -->
    <template v-if="mediaType === 'image'">
      <!-- schema.org -->
      <meta
        v-if="heroImage?.original"
        itemprop="contentUrl"
        :content="heroImage.original"
      />
      <meta
        v-if="heroImage?.src"
        itemprop="thumbnailUrl"
        :content="heroImage.src?.url"
      />
      <meta
        v-if="heroImage?.credit"
        itemprop="creditText"
        :content="heroImage.credit"
      />

      <div class="max-w-screen-3xl lg:mb-24 mx-auto mt-10 mb-8">
        <MixinFancybox
          v-if="heroImage"
          :src="heroImage.original || heroImage.src?.url"
          :caption="data.heroImageCaption"
          :credit="heroImage.credit"
          :detail-url="heroImage.detailUrl"
        >
          <BaseImagePlaceholder
            class="relative bg-black border border-black"
            aspect-ratio="21:9"
          >
            <BaseImage
              v-if="heroImage.src"
              :src="heroImage.src.url"
              :srcset="heroImage.srcSet"
              :alt="heroImage.alt"
              :width="heroImage.src.width"
              :height="heroImage.src.height"
              object-fit-class="scaleDown"
              loading="eager"
            />
          </BaseImagePlaceholder>
        </MixinFancybox>
      </div>
    </template>
    <template v-else-if="mediaType === 'video' && data.video?.length">
      <meta
        v-if="videoBlock.video?.file"
        itemprop="contentUrl"
        :content="videoBlock.video.file"
      />
      <meta
        v-if="videoBlock.video?.duration"
        itemprop="duration"
        :content="videoBlock.video.duration"
      />
      <meta
        v-if="data.thumbnailImage && data.thumbnailImage.original"
        itemprop="thumbnailUrl"
        :content="data.thumbnailImage.original"
      />
      <meta
        v-if="videoBlock.caption"
        itemprop="description"
        :content="videoBlock.caption"
      />
      <meta
        v-if="videoBlock.credit"
        itemprop="creditText"
        :content="videoBlock.credit"
      />
      <template v-if="videoBlock.blockType === 'VideoBlock' && videoBlock.video">
        <div class="max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8">
          <BlockVideo
            :data="videoBlock"
            schema
          />
        </div>
      </template>
      <template v-else-if="videoBlock.blockType === 'VideoEmbedBlock'">
        <div
          v-if="videoBlock.embed"
          class="max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8"
        >
          <BlockVideoEmbed :data="videoBlock" />
        </div>
      </template>
    </template>
    <template v-if="mediaType === 'document'">
      <!-- schema.org -->
      <meta
        v-if="data.document?.url"
        itemprop="contentUrl"
        :content="data.document.url"
      />
      <meta
        v-if="data.thumbnailImage?.original"
        itemprop="thumbnailUrl"
        :content="data.thumbnailImage.original"
      />
      <meta
        v-if="data?.credit"
        itemprop="creditText"
        :content="data.credit"
      />

      <div class="max-w-screen-3xl lg:mb-24 mx-auto mt-10 mb-8">
        <LayoutHelper
          v-if="heroImage"
          indent="col-2"
          class="lg:mb-22 mt-10 mb-10"
        >
          <BlockImageStandard
            :data="heroImage"
            :caption="data.heroImageCaption"
          />
        </LayoutHelper>
      </div>
    </template>

    <LayoutHelper indent="col-2">
      <div class="lg:grid grid-cols-12">
        <div
          v-if="data.body?.length || data.transcript"
          class="col-span-8"
        >
          <BlockStreamfield
            v-if="data.body?.length"
            variant="fluid"
            :data="data.body"
          />
          <hr
            v-if="data.body?.length && data.transcript"
            class="border-gray-light-mid lg:mb-8 mb-5"
          />
          <div
            v-if="data.transcript"
            class="lg:mb-22 mb-10"
          >
            <BaseHeading
              level="h2"
              class="mb-5"
              >Transcript</BaseHeading
            >
            <BlockText
              :text="data.transcript"
              variant="medium"
              class="audio-transcript"
              itemprop="transcript"
            />
          </div>
        </div>
        <aside class="col-start-10 col-end-13">
          <div class="lg:pt-0 pt-8 mb-12">
            <div
              v-if="downloadUrl"
              class="lg:w-auto w-full"
            >
              <BaseButton
                :href="downloadUrl"
                class="w-full mb-5"
                variant="primary"
                compact
              >
                Download {{ mediaLabel }}
              </BaseButton>
            </div>
          </div>

          <div
            v-if="creditText"
            class="lg:mb-16 mb-8"
          >
            <span class="font-secondary w-full text-base tracking-wider uppercase"> Credit </span>
            <BlockText :text="creditText" />
          </div>
        </aside>
      </div>
    </LayoutHelper>

    <!-- UNIVERSAL -->
    <!-- related links -->
    <LayoutHelper
      v-if="data.relatedLinks && data.relatedLinks.length"
      indent="col-2"
      class="lg:mb-18 mb-10"
    >
      <BlockRelatedLinks :data="data.relatedLinks[0]" />
    </LayoutHelper>

    <!-- related content -->
    <BlockLinkCarousel
      item-type="cards"
      class="lg:my-24 my-12 print:px-4"
      :heading="relatedContentHeading"
      :items="data.relatedContent"
    />

    <LayoutHelper
      v-if="data.authors?.length"
      indent="col-3"
    >
      <AboutTheAuthor :authors="data.authors" />
    </LayoutHelper>

    <LayoutHelper
      v-if="data.lastPublishedAt"
      indent="col-3"
      class="lg:my-18 my-10"
    >
      <p class="border-t border-gray-light-mid pt-8">
        <strong class="capitalize">{{ mediaLabel }} Last Updated:</strong>
        {{
          // @ts-ignore
          $filters.displayDate(data.lastPublishedAt)
        }}
      </p>
    </LayoutHelper>
    <!-- Explore More -->
    <!-- <div
      v-if="data.relatedContent?.length"
      class="bg-stars bg-[#15003B] lg:py-24 lg:mt-24 py-12 mt-12 print:px-4"
    >
      <BlockLinkCarousel
        class="ThemeVariantDark"
        item-type="cards"
        heading="Explore More"
        :items="data.relatedContent"
      />
    </div> -->
  </div>
</template>
<style lang="scss">
.PageEduMultimediaDetail {
  .bg-stars .MixinCarousel__Heading {
    @apply text-white;
  }
  .BlockVideo,
  .BlockVideoEmbed {
    .BaseImageCaption {
      @apply px-4 sm:px-5;
      @screen 3xl {
        @apply px-0;
      }
    }
  }
}
</style>
