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
import MetaPanel from '../../../components/MetaPanel/MetaPanel.vue'

interface PageEduCollectionsDetail extends PageEduResourcesObject {
  heroImage: ImageObject
  heroImageCaption: string
  showMetaPanel: boolean
  heroSubtitle: string
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

const computedClass = computed((): string => {
  if (heroInline.value || !data?.heroImage) {
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
    <!-- hero large -->
    <HeroLarge
      v-if="!heroInline && data.heroImage"
      :title="data.title"
      :image="data.heroImage"
      :summary="'Test test test lorem ipsum dolor sit amet yep.'"
      :custom-pill-type="data.__typename"
      :class="!data.showMetaPanel ? 'mb-10 lg:mb-22' : ''"
    />

    <NavJumpMenu
      ref="PageEduCollectionsDetailJumpMenu"
      :title="data.title"
      :blocks="data.body"
      :enabled="data.showJumpMenu"
      dropdown-text="In this collection"
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
    </LayoutHelper>
    <MetaPanel
      v-if="data.showMetaPanel"
      theme="primary"
      :class="{ 'mb-10 lg:mb-14': true }"
      :primary-subject="data.primarySubject"
      :additional-subjects="data.additionalSubjects"
      :grade-levels="data.gradeLevels"
      :negative-top="!heroInline"
      :negative-bottom="heroInline"
    />

    <!-- TODO: put this in a component (exclude layout though) -->
    <LayoutHelper
      v-if="data.heroImage && heroInline"
      class="lg:mb-22 mb-10"
    >
      <BlockImageStandard
        :data="data.heroImage"
        :display-caption="data.heroImageCaption ? true : false"
        :caption="data.heroImageCaption"
        :constrain="data.heroConstrain"
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
