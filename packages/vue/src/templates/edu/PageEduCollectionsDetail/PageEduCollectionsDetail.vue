<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { ImageObject, PageEduResourcesObject } from './../../../interfaces'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockRelatedLinks from '../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import HeroLarge from './../../../components/HeroLarge/HeroLarge.vue'
import NavJumpMenu from './../../../components/NavJumpMenu/NavJumpMenu.vue'
import NavSecondary from './../../../components/NavSecondary/NavSecondary.vue'
import MetaPanel from '../../../components/MetaPanel/MetaPanel.vue'
import ShareButtonsEdu from '../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import { addHeadingAnchorsToRichTextBlock } from './../../../utils/addHeadingAnchorsToRichTextBlock'

interface PageEduCollectionsDetail extends PageEduResourcesObject {
  heroImage: ImageObject
  heroImageCaption: string
  showMetaPanel: boolean
  heroSummary: string
}
interface PageEduCollectionsDetailProps {
  data?: PageEduCollectionsDetail
}

const props = withDefaults(defineProps<PageEduCollectionsDetailProps>(), {
  data: undefined
})

const { data } = reactive(props)

const PageEduCollectionsDetailJumpMenu = ref()

defineExpose({
  PageEduCollectionsDetailJumpMenu
})

const heroInline = computed((): boolean => {
  return data?.heroPosition === 'inline'
})

// adds anchors to headings within RichTextBlock
const filteredBody = computed(() => {
  const blocks = data?.body
  if (blocks) {
    // @ts-expect-error
    const filteredBlocks = []
    blocks.forEach((block) => {
      // @ts-expect-error
      filteredBlocks.push(addHeadingAnchorsToRichTextBlock(block))
    })
    // @ts-expect-error
    return filteredBlocks
  }
  return data?.body
})

const computedClass = computed((): string => {
  if ((heroInline.value || !data?.heroImage) && !data?.breadcrumb) {
    return 'pt-5 lg:pt-12'
  } else if (!heroInline.value || data?.breadcrumb) {
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
      v-if="data.showJumpMenu && !data.breadcrumb"
      ref="PageEduCollectionsDetailJumpMenu"
      :title="data.title"
      :blocks="filteredBody"
      dropdown-text="In this collection"
    />

    <!-- hero large -->
    <HeroLarge
      v-if="!heroInline && data.heroImage"
      :title="data.title"
      :image="data.heroImage"
      :summary="data.heroSummary"
      :custom-pill-type="data.__typename"
      :class="!data.showMetaPanel ? 'mb-10' : ''"
    />

    <!-- secondary nav -->
    <NavSecondary
      v-if="data.breadcrumb"
      class="mb-10"
      :breadcrumb="data.breadcrumb"
      :has-intro="data.heroImage && !heroInline ? true : false"
    />

    <LayoutHelper
      v-if="heroInline || !data.heroImage"
      indent="col-2"
      class="mb-10"
    >
      <DetailHeadline
        :title="data.title"
        label="Collection"
        pill
        pill-color="primary-inverted"
      />

      <ShareButtonsEdu
        class="mt-4"
        :title="data.title"
        :url="data.url"
      />
    </LayoutHelper>

    <MetaPanel
      v-if="data.showMetaPanel"
      theme="primary"
      :class="{ 'mb-10 lg:mb-12': true }"
      :primary-subject="data.primarySubject"
      :additional-subjects="data.additionalSubjects"
      :grade-levels="data.gradeLevels"
      :negative-top="!heroInline && !data.breadcrumb && data.heroImage ? true : false"
      :negative-bottom="heroInline && !data.breadcrumb"
    />

    <!-- TODO: put this in a component (exclude layout though) -->
    <LayoutHelper
      v-if="data.heroImage && heroInline"
      class="mb-10 lg:mb-18"
    >
      <BlockImageStandard
        :data="data.heroImage"
        :display-caption="data.heroImageCaption ? true : false"
        :caption="data.heroImageCaption"
        :constrain="data.heroConstrain"
      />
    </LayoutHelper>

    <LayoutHelper
      v-if="!heroInline && data.heroImage"
      indent="col-2"
      class="mb-6 lg:mb-12"
      :class="{ '-mt-4': data.showMetaPanel }"
    >
      <ShareButtonsEdu
        class="mt-4"
        :title="data.title"
        :url="data.url"
      />
    </LayoutHelper>

    <!-- streamfield blocks -->
    <BlockStreamfield :data="filteredBody" />

    <!-- related links -->
    <LayoutHelper
      v-if="data.relatedLinks && data.relatedLinks.length"
      indent="col-3"
      class="lg:my-18 my-10"
    >
      <BlockRelatedLinks :data="data.relatedLinks[0]" />
    </LayoutHelper>

    <LayoutHelper
      v-if="data.lastPublishedAt"
      indent="col-3"
      class="lg:my-18 my-10"
    >
      <p class="border-t border-gray-light-mid pt-8">
        <strong>Collection Last Updated:</strong>
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
