<script setup lang="ts">
/** Explore JPL App's equivalent to PageContent */
import { computed, reactive } from 'vue'
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
import BaseExploreApp from './../../explore-jpl/BaseExploreApp/BaseExploreApp.vue'

const themeStore = useThemeStore()

const props = defineProps({
  data: {
    type: Object as () => PageObject,
    default: undefined
  }
})
const { data } = reactive(props)

/** If the hero image is inline (treated as a regular block) */
const heroInline = computed(() => {
  if (data?.heroPosition === 'inline') {
    return true
  }
  return false
})
/** If the page title should overlay the hero image (does not apply to inline heroes) */
const heroTitle = computed(() => {
  return data?.heroImage && !heroInline.value && data?.displayTitleInHero
})
</script>
<template>
  <div
    v-if="data"
    class="ThemeVariantLight"
    :class="{ '-nav-offset': !heroInline && data.heroImage }"
  >
    <BaseExploreApp
      :has-intro="data.heroImage && !heroInline"
      :nav-data="data.breadcrumb"
    >
      <template #hero>
        <!-- hero image -->
        <HeroLarge
          v-if="heroTitle"
          :title="data.title"
          :image="data.heroImage"
          :summary="data.heroSummary"
        />
        <HeroMedia
          v-else-if="!heroTitle && data.heroImage && !heroInline"
          class="md:mb-0 mb-10"
          :image="data.heroImage"
          :caption="data.heroImageCaption"
          :display-caption="!data.heroImageCaption ? false : true"
          :constrain="data.heroConstrain"
        />
      </template>

      <template #default>
        <!-- page title area -->
        <LayoutHelper
          indent="col-2"
          class="my-5 lg:mt-10 lg:mb-10"
        >
          <DetailHeadline
            v-if="!heroTitle"
            :title="data.title"
          />
        </LayoutHelper>

        <!-- inline hero -->
        <LayoutHelper
          v-if="data.heroImageInline && heroInline"
          indent="col-2"
          class="mb-22 mt-10"
        >
          <BlockImageStandard
            :data="data.heroImageInline"
            :caption="data.heroImageCaption"
            :display-caption="!data.heroImageCaption ? false : true"
            :constrain="data.heroConstrain"
          />
        </LayoutHelper>

        <!-- share buttons -->
        <LayoutHelper
          v-if="themeStore.theme !== 'ThemeEdu'"
          indent="col-2"
          class="lg:mb-0 relative mb-8"
        >
          <ShareButtons
            v-if="data.showShareLinks && data.title && data.url && !themeStore.isEdu"
            :title="data.title"
            :url="data.url"
          />
        </LayoutHelper>

        <!-- Body Streamfield -->
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
          item-type="cards"
          class="lg:my-24 my-12"
          :heading="data.relatedContentHeading"
          :items="data.relatedContent"
        />
      </template>
    </BaseExploreApp>
  </div>
</template>
