<script setup lang="ts">
import { computed, reactive } from 'vue'
import {
  PageEduResourcesObject,
  BreadcrumbPathObject,
  StreamfieldBlockData
} from '../../../interfaces'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BaseHeading from './../../../components/BaseHeading/BaseHeading.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import BlockVideo from './../../../components/BlockVideo/BlockVideo.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import BlockImageComparison from './../../../components/BlockImageComparison/BlockImageComparison.vue'
import BlockVideoEmbed from './../../../components/BlockVideoEmbed/BlockVideoEmbed.vue'
import BlockRelatedLinks from './../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import NavJumpMenu from './../../../components/NavJumpMenu/NavJumpMenu.vue'
import AboutTheAuthor from './../../../components/AboutTheAuthor/AboutTheAuthor.vue'
import { getHeadingId } from '../../../utils/getHeadingId'
interface PageEduGalleryObject extends PageEduResourcesObject {
  overviewString?: string
  galleryItems?: {
    blockId: string
    heading?: string
    description?: string
    externalLink?: string
    media: StreamfieldBlockData[]
  }[]
}

interface PageEduGalleryDetailProps {
  data: PageEduGalleryObject
}

// define props
const props = withDefaults(defineProps<PageEduGalleryDetailProps>(), {
  data: undefined
})

const headingIdGetter = (id: string) => {
  return getHeadingId('galleryItem', id)
}

const jumpMenuHeadings = computed((): BreadcrumbPathObject[] => {
  const items = data.galleryItems
  const itemHeadings: BreadcrumbPathObject[] = []
  if (items) {
    items.forEach((item) => {
      if (item.heading) {
        itemHeadings.push({
          title: item.heading,
          path: '#' + headingIdGetter(item.blockId)
        } as BreadcrumbPathObject)
      }
    })
  }
  return itemHeadings
})

const galleryItems = computed(() => {
  const items = data.galleryItems
  if (items) {
    items.forEach((item) => {
      if (item.externalLink) {
        // something ?
      }
    })
  }
  return items
})
const { data } = reactive(props)
</script>
<template>
  <div
    v-if="data"
    class="PageEduGalleryDetail ThemeVariantLight pt-5 lg:pt-12"
    itemscope
    itemtype="http://schema.org/MediaGallery"
  >
    <!-- Detail Headline -->
    <LayoutHelper
      indent="col-2"
      class="mb-5 lg:mb-10"
    >
      <DetailHeadline
        :title="data.title"
        label="Slideshow"
        :publication-date="data.publicationDate"
        schema
        pill
        hide-date
      />
      <ShareButtonsEdu
        v-if="data?.url"
        class="mt-4"
        :url="data.url"
        :title="data.title"
        :image="data.thumbnailImage?.original"
      />
      <BlockText
        v-if="data.overviewString"
        :text="data.overviewString"
        class="lg:mt-8 mt-5"
      />
    </LayoutHelper>

    <NavJumpMenu
      v-if="data.showJumpMenu && jumpMenuHeadings?.length"
      :title="data.title"
      :jump-links="jumpMenuHeadings"
    />

    <div
      v-for="(item, index) in data.galleryItems"
      :id="headingIdGetter(item.blockId)"
      :key="index"
      class="PageEduGalleryDetailItem"
    >
      <div
        v-if="item.media?.length"
        class="PageEduGalleryDetailItem__media mb-5 lg:mb-12"
      >
        <template
          v-for="(block, media_index) in item.media"
          :key="media_index"
        >
          <template v-if="block.blockType === 'ImageBlock'">
            <LayoutHelper
              v-if="block.image"
              indent="col-2"
            >
              <BlockImageStandard
                :data="block.image"
                :caption="block.caption"
                :display-caption="block.displayCaption"
                :custom-detail-url="item.externalLink"
              />
            </LayoutHelper>
          </template>
          <template v-else-if="block.blockType === 'ImageComparisonBlock'">
            <LayoutHelper indent="col-2">
              <BlockImageComparison
                :data="block"
                :custom-detail-url="item.externalLink"
              />
            </LayoutHelper>
          </template>
          <template v-else-if="block.blockType === 'VideoBlock'">
            <LayoutHelper indent="col-2">
              <BlockVideo
                :data="block"
                :custom-detail-url="item.externalLink"
              />
            </LayoutHelper>
          </template>
          <template v-else-if="block.blockType === 'VideoEmbedBlock'">
            <LayoutHelper indent="col-2">
              <BlockVideoEmbed
                :data="block"
                :custom-detail-url="item.externalLink"
              />
            </LayoutHelper>
          </template>
        </template>
      </div>
      <LayoutHelper
        v-if="item.heading || item.description"
        indent="col-3"
      >
        <BaseHeading
          v-if="item.heading"
          level="h2"
          class="mb-3 lg:mb-5"
          >{{ item.heading }}</BaseHeading
        >
        <BlockText
          v-if="item.description"
          :text="item.description"
        />
      </LayoutHelper>
      <LayoutHelper
        v-if="index + 1 !== data.galleryItems?.length"
        indent="col-2"
        class="pt-10 lg:pt-18 mb-10 lg:mb-18"
      >
        <hr class="border-t-0 border-b border-gray-light-mid" />
      </LayoutHelper>
    </div>

    <div
      v-if="data.body?.length"
      class="my-10 lg:my-18"
    >
      <BlockStreamfield
        v-if="data.body?.length"
        :data="data.body"
      />
    </div>

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
      :heading="data.relatedContentHeading || 'Related Galleries & Images'"
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
        <strong class="capitalize">Gallery Last Updated:</strong>
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
.PageEduGalleryDetail {
  .bg-stars .MixinCarousel__Heading {
    @apply text-white;
  }
  .MixinFancybox + .p-4 {
    @apply px-0;
  }
  .PageEduGalleryDetailItem {
    &:target {
      @apply scroll-mt-14;
      @screen lg {
        @apply scroll-mt-[8rem];
      }
    }
  }
}
</style>
