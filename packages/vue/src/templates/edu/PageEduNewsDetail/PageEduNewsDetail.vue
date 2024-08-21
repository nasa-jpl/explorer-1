<script setup lang="ts">
import { computed, ref, defineExpose } from 'vue'
import isEmpty from 'lodash/isEmpty.js'
import type { AuthorObject, ImageObject, PageObject } from './../../../interfaces'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import NavJumpMenu from './../../../components/NavJumpMenu/NavJumpMenu.vue'

interface PageEduNewsDetailObject extends PageObject {
  readTime: string
  url: string
  heroImage: ImageObject
  heroImageInline: ImageObject
  heroConstrain: boolean
  heroImageCaption: string
  authors: AuthorObject[]
  showJumpMenu: boolean
}

interface PageEduNewsDetailProps {
  data: PageEduNewsDetailObject
}

// define props
const props = defineProps<PageEduNewsDetailProps>()

const PageEduNewsDetailJumpMenu = ref()

const heroEmpty = computed(() => {
  return isEmpty(props.data?.heroImage)
})

const heroInline = computed(() => {
  if (props.data?.heroPosition === 'inline') {
    return true
  }
  return false
})

const computedClass = computed(() => {
  if (heroInline.value || heroEmpty.value) {
    return 'pt-5 lg:pt-12'
  } else if (!heroInline.value) {
    return '-nav-offset'
  }
  return ''
})

const dateTimeArray = computed(() => {
  return props.data.publicationDate ? props.data.publicationDate.split(' ') : undefined
})

defineExpose({
  PageEduNewsDetailJumpMenu
})
</script>
<template>
  <div
    v-if="data"
    class="ThemeEdu ThemeVariantLight"
    :class="computedClass"
    itemscope
    itemtype="http://schema.org/Article"
  >
    <NavJumpMenu
      ref="PageEduNewsDetailJumpMenu"
      :title="data.title"
      :blocks="data.body"
      :enabled="data.showJumpMenu"
      dropdown-text="In this news article"
    />

    <!-- schema.org -->
    <meta
      v-if="data.thumbnailImage && data.thumbnailImage.original"
      itemprop="image"
      :content="data.thumbnailImage.original"
    />

    <HeroMedia
      v-if="!heroEmpty && !heroInline"
      class="md:mb-12 lg:mb-18 mb-10"
      :image="data.heroImage"
      :display-caption="data.heroImage.displayCaption"
      :caption="data.heroImage.caption"
      :credit="data.heroImage.credit"
      :constrain="data.heroConstrain"
    />

    <!-- news headline -->
    <LayoutHelper
      indent="col-2"
      class="mb-10"
    >
      <DetailHeadline
        :title="data.title"
        :read-time="data.readTime"
        :author="data.authors"
        :publication-date="dateTimeArray?.length ? dateTimeArray[0] : undefined"
        :publication-time="dateTimeArray?.length ? dateTimeArray[1] : undefined"
        :topics="data.getTopicsForDisplay"
        schema
      />
      <ShareButtonsEdu
        v-if="data?.url"
        class="mt-4"
        :url="data.url"
        :title="data.title"
        :image="data.thumbnailImage?.original"
      />
    </LayoutHelper>

    <!-- inline hero content -->
    <LayoutHelper
      v-if="!heroEmpty && heroInline"
      indent="col-2"
      class="lg:mb-22 mt-10 mb-10"
    >
      <BlockImageStandard
        :data="data.heroImageInline"
        :display-caption="data.heroImageInline.displayCaption"
        :caption="data.heroImageInline.caption"
        :constrain="data.heroConstrain"
      />
    </LayoutHelper>

    <!-- summary and topper -->
    <LayoutHelper
      indent="col-3"
      class="lg:mb-8 mb-5"
    >
      <BlockText
        v-if="data.topper && data.topper.length > 2"
        class="lg:mb-8 mb-5"
        :text="data.topper"
      />
      <p
        class="text-body-lg font-semibold"
        itemprop="abstract"
      >
        {{ data.summary }}
      </p>
    </LayoutHelper>
    <!-- streamfield blocks -->
    <BlockStreamfield
      itemprop="articleBody"
      :data="data.body"
    />
    <div class="bg-stars bg-primary-darker">
      <div class="py-10 text-center text-white">
        <strong>Related News goes here</strong>
      </div>
      <!-- extras -->
      <!-- <BlockLinkCarousel
        item-type="cards"
        class="mt-24"
        heading="Explore more"
        :items="data.getRelatedOrLatestNews"
      /> -->
    </div>
  </div>
</template>
