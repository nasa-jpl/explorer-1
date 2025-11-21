<script setup lang="ts">
/** Explore JPL App's equivalent to PageContent */
import { computed, defineProps, reactive } from 'vue'
import type { PageObject } from '../../../interfaces'
import { useThemeStore } from '../../../store/theme'
import HeroLarge from './../../../components/HeroLarge/HeroLarge.vue'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import ShareButtons from './../../../components/ShareButtons/ShareButtons.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockRelatedLinks from './../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import PageContentExploreApp from './../../explore-jpl/BaseExploreApp/BaseExploreApp.vue'

const themeStore = useThemeStore()

const props = defineProps({
  pageData: {
    type: Object as () => PageObject,
    default: undefined
  }
})
const { pageData } = reactive(props)

/** If the hero image is inline (treated as a regular block) */
const heroInline = computed(() => {
  if (pageData?.heroPosition === 'inline') {
    return true
  }
  return false
})
/** If the page title should overlay the hero image (does not apply to inline heroes) */
const heroTitle = computed(() => {
  return pageData?.heroImage && !heroInline.value && pageData?.displayTitleInHero
})
</script>
<template>
  <div
    v-if="pageData"
    class="ThemeVariantLight"
    :class="{ '-nav-offset': !heroInline && pageData.heroImage }"
  >
    <PageContentExploreApp
      :has-intro="pageData.heroImage && !heroInline"
      :nav-data="pageData.breadcrumb"
    >
      <template #hero>
        <!-- hero image -->
        <HeroLarge
          v-if="heroTitle"
          :title="pageData.title"
          :image="pageData.heroImage"
          :summary="pageData.heroSummary"
        />
        <HeroMedia
          v-else-if="!heroTitle && pageData.heroImage && !heroInline"
          class="md:mb-0 mb-10"
          :image="pageData.heroImage"
          :caption="pageData.heroImageCaption"
          :display-caption="!pageData.heroImageCaption ? false : true"
          :constrain="pageData.heroConstrain"
        />
      </template>

      <template #default>
        <!-- page title area -->
        <LayoutHelper indent="col-2">
          <DetailHeadline
            v-if="!heroTitle"
            :title="pageData.title"
          />
        </LayoutHelper>

        <!-- inline hero -->
        <LayoutHelper
          v-if="pageData.heroImageInline && heroInline"
          indent="col-2"
          class="mb-22 mt-10"
        >
          <BlockImageStandard
            :data="pageData.heroImageInline"
            :caption="pageData.heroImageCaption"
            :display-caption="!pageData.heroImageCaption ? false : true"
            :constrain="pageData.heroConstrain"
          />
        </LayoutHelper>

        <!-- share buttons -->
        <LayoutHelper
          v-if="themeStore.theme !== 'ThemeEdu'"
          indent="col-2"
          class="lg:mb-0 relative mb-8"
        >
          <ShareButtons
            v-if="pageData.showShareLinks && pageData.title && pageData.url && !themeStore.isEdu"
            :title="pageData.title"
            :url="pageData.url"
          />
        </LayoutHelper>

        <!-- Body Streamfield -->
        <BlockStreamfield :data="pageData.body" />

        <!-- related links -->
        <LayoutHelper
          v-if="pageData.relatedLinks && pageData.relatedLinks.length"
          indent="col-3"
          class="lg:my-18 my-10"
        >
          <BlockRelatedLinks :data="pageData.relatedLinks[0]" />
        </LayoutHelper>

        <!-- related content -->
        <BlockLinkCarousel
          item-type="cards"
          class="lg:my-24 my-12"
          :heading="pageData.relatedContentHeading"
          :items="pageData.relatedContent"
        />
      </template>
    </PageContentExploreApp>
  </div>
</template>
