<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type {
  BlockData,
  ImageObject,
  PageEduResourcesObject,
  StreamfieldBlockData
} from './../../../interfaces'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import BaseLink from './../../../components/BaseLink/BaseLink.vue'
import BaseImagePlaceholder from './../../../components/BaseImagePlaceholder/BaseImagePlaceholder.vue'
import type { BlockHeadingObject } from '../../../components/BlockHeading/BlockHeading.vue'
import BlockImageCarousel from './../../../components/BlockImageCarousel/BlockImageCarousel.vue'
import BlockImageComparison from './../../../components/BlockImageComparison/BlockImageComparison.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BlockVideo from './../../../components/BlockVideo/BlockVideo.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockIframeEmbed from '../../../components/BlockIframeEmbed/BlockIframeEmbed.vue'
import BlockRelatedLinks from '../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import MetaPanel from '../../../components/MetaPanel/MetaPanel.vue'
import NavJumpMenu from './../../../components/NavJumpMenu/NavJumpMenu.vue'
import { HeadingLevel } from '../../../components/BaseHeading/BaseHeading.vue'

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

const heroInline = computed((): boolean => {
  // heroes with interactive elements have special handling
  if (!heroEmpty.value && data?.hero) {
    // excludes VideoBlock as this will autoplay
    if (data?.hero[0].blockType === 'VideoBlock') {
      return false
    } else if (
      data?.hero[0].blockType === 'CarouselBlock' ||
      data?.hero[0].blockType === 'IframeEmbedBlock' ||
      data?.hero[0].blockType === 'VideoEmbedBlock' ||
      data?.hero[0].blockType === 'ImageComparisonBlock'
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
      ref="PageEduTeachableMomentJumpMenu"
      :title="data.title"
      :blocks="data.body"
      :enabled="data.showJumpMenu"
      dropdown-text="In this Teachable Moment"
    />

    <!-- hero media -->
    <HeroMedia
      v-if="
        !heroEmpty &&
        !heroInline &&
        data?.hero?.length &&
        (data.hero[0].blockType === 'HeroImageBlock' || data.hero[0].blockType === 'VideoBlock')
      "
      class="md:mb-12 lg:mb-18 mb-10"
      :image="data.hero[0].image"
      :video="data.hero[0].video"
      :display-caption="data.hero[0].displayCaption"
      :caption="data.hero[0].caption"
      :credit="data.hero[0].credit"
      :constrain="data.heroConstrain"
    />

    <LayoutHelper
      indent="col-2"
      class="mb-10"
    >
      <DetailHeadline
        :title="data.title"
        label="Teachable Moment"
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

    <!-- TODO: put this in a component (exclude layout though) -->
    <LayoutHelper
      v-if="!heroEmpty && heroInline && data.hero?.length"
      class="lg:mb-22 mb-10"
    >
      <BlockImageStandard
        v-if="data.hero[0].blockType === 'HeroImageBlock'"
        :data="data.hero[0].imageInline"
        :display-caption="data.hero[0].displayCaption"
        :caption="data.hero[0].caption"
        :constrain="data.heroConstrain"
      />
      <BlockImageCarousel
        v-else-if="data.hero[0].blockType === 'CarouselBlock'"
        :items="data.hero[0].blocks"
        :block-id="data.hero[0].id"
      />
      <BlockIframeEmbed
        v-else-if="data.hero[0].blockType === 'IframeEmbedBlock'"
        :data="data.hero[0]"
      />
      <BlockVideo
        v-else-if="data.hero[0].blockType === 'VideoBlock'"
        :data="data.hero[0]"
        autoplay
      />
      <BaseImagePlaceholder
        v-else-if="data.hero[0].blockType === 'VideoEmbedBlock'"
        aspect-ratio="16:9"
        dark-mode
      >
        <div v-html="data.hero[0].embed?.embed"></div>
      </BaseImagePlaceholder>
      <BlockImageComparison
        v-else-if="data.hero[0].blockType === 'ImageComparisonBlock'"
        :data="data.hero[0]"
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
    </LayoutHelper>
    <!-- streamfield blocks -->
    <BlockStreamfield
      itemprop="articleBody"
      :data="data.body"
    />

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

    <!-- related content -->
    <BlockLinkCarousel
      v-if="data.relatedContent?.length"
      item-type="cards"
      class="lg:my-24 my-12 print:px-4"
      :heading="data.relatedContentHeading"
      :items="data.relatedContent"
    />
    <!-- related content -->
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
