<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { PageEduResourcesObject } from './../../../interfaces'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import HeroLarge from './../../../components/HeroLarge/HeroLarge.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockRelatedLinks from '../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import NavJumpMenu from './../../../components/NavJumpMenu/NavJumpMenu.vue'
import HeroInlineMedia from './../../../components/HeroInlineMedia/HeroInlineMedia.vue'
import AboutTheAuthor from './../../../components/AboutTheAuthor/AboutTheAuthor.vue'

interface PageEduTeachableMomentProps {
  data?: PageEduResourcesObject
}

const props = withDefaults(defineProps<PageEduTeachableMomentProps>(), {
  data: undefined
})

const { data } = reactive(props)

const PageEduTeachableMomentJumpMenu = ref()

defineExpose({
  PageEduTeachableMomentJumpMenu
})

const heroEmpty = computed((): boolean => {
  return data?.hero?.length === 0
})

const theHero = computed(() => {
  if (data?.hero?.length) {
    return data.hero[0]
  }
  return undefined
})

const heroTitle = computed((): boolean => {
  if (theHero.value) {
    // excludes VideoBlock as this will autoplay
    if (theHero.value.blockType === 'HeroTitleBlock') {
      return true
    }
  }
  return false
})

const heroInline = computed((): boolean => {
  // heroes with interactive elements have special handling
  if (theHero.value && !heroTitle.value) {
    // excludes VideoBlock as this will autoplay
    if (theHero.value.blockType === 'VideoBlock') {
      return false
    } else if (
      data?.heroPosition === 'inline' ||
      theHero.value.blockType === 'CarouselBlock' ||
      theHero.value.blockType === 'IframeEmbedBlock' ||
      theHero.value.blockType === 'VideoEmbedBlock' ||
      theHero.value.blockType === 'ImageComparisonBlock'
    ) {
      return true
    }
  }
  return false
})

const computedClass = computed((): string => {
  if (heroInline.value || heroEmpty.value) {
    return 'pt-5 lg:pt-12'
  } else if (!heroInline.value) {
    return '-nav-offset'
  }
  return ''
})
</script>
<template>
  <div
    v-if="data"
    class="ThemeEdu ThemeVariantLight"
    :class="computedClass"
  >
    <NavJumpMenu
      v-if="data.showJumpMenu"
      ref="PageEduTeachableMomentJumpMenu"
      :title="data.title"
      :blocks="data.body"
      dropdown-text="In this Teachable Moment"
    />
    <!-- hero title -->
    <HeroLarge
      v-if="heroTitle && theHero"
      :title="data.title"
      :image="theHero.image"
      :summary="theHero.heroSummary"
      :custom-pill-type="data.__typename"
    />
    <!-- hero media -->
    <HeroMedia
      v-if="
        !heroEmpty &&
        !heroTitle &&
        !heroInline &&
        theHero &&
        (theHero.blockType === 'HeroImageBlock' || theHero.blockType === 'VideoBlock')
      "
      class="md:mb-12 lg:mb-18 mb-10"
      :image="theHero.image"
      :video="theHero.video"
      :display-caption="theHero.displayCaption"
      :caption="theHero.caption"
      :credit="theHero.credit"
      :constrain="data.heroConstrain"
    />

    <LayoutHelper
      indent="col-2"
      class="mb-10"
    >
      <DetailHeadline
        v-if="!heroTitle"
        :title="data.title"
        :read-time="data.readTime"
        label="Teachable Moment"
        pill
      />
      <ShareButtonsEdu
        v-if="data?.url"
        :class="heroTitle ? 'mt-10' : 'mt-4'"
        :url="data.url"
        :title="data.title"
        :image="data.thumbnailImage?.original"
      />
    </LayoutHelper>

    <LayoutHelper
      v-if="!heroEmpty && heroInline && data.hero?.length"
      class="lg:mb-22 mb-10"
    >
      <HeroInlineMedia
        :hero-blocks="data.hero"
        :constrain="data.heroConstrain"
      />
    </LayoutHelper>

    <!-- summary and topper -->
    <LayoutHelper
      v-if="data.topper && data.topper.length > 2"
      indent="col-3"
      class="lg:mb-8 mb-5"
    >
      <BlockText
        class="lg:mb-8 mb-5"
        :text="data.topper"
      />
    </LayoutHelper>

    <!-- streamfield blocks -->
    <BlockStreamfield :data="data.body" />

    <!-- related links -->
    <LayoutHelper
      v-if="data.relatedLinks && data.relatedLinks.length"
      indent="col-3"
      class="lg:my-18 my-10"
    >
      <BlockRelatedLinks :data="data.relatedLinks[0]" />
    </LayoutHelper>

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
        <strong>Teachable Moment Last Updated:</strong>
        {{
          // @ts-ignore
          $filters.displayDate(data.lastPublishedAt)
        }}
      </p>
    </LayoutHelper>
    <!-- explore more -->
    <div
      v-if="data.relatedContent?.length"
      class="bg-stars bg-primary-darker pt-14 pb-20 ThemeVariantDark text-white"
    >
      <BlockLinkCarousel
        item-type="cards"
        heading="Explore more"
        :items="data.relatedContent"
      />
    </div>
  </div>
</template>
