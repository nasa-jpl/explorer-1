<script setup lang="ts">
import { computed, defineProps, reactive } from 'vue'
import { useRoute } from 'vue-router'
import type { PageObject } from '../../../interfaces'
import { useThemeStore } from '../../../store/theme'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import ShareButtons from './../../../components/ShareButtons/ShareButtons.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BaseExploreApp from './../../explore-jpl/BaseExploreApp/BaseExploreApp.vue'
import BaseButton from '../../../components/BaseButton/BaseButton.vue'
import BaseLink from '../../../components/BaseLink/BaseLink.vue'
import MetadataStacked from '../../../components/MetadataStacked/MetadataStacked.vue'
import IconMap from '../../../components/Icons/IconMap.vue'

const themeStore = useThemeStore()
const route = useRoute()

const props = defineProps({
  data: {
    type: Object as () => PageObject,
    default: undefined
  }
})
const { data } = reactive(props)

// Convert thumbnailImage data for BlockImageStandard compatibility
const detailImage = computed(() => {
  return {
    src: {
      url: data?.thumbnailImage?.url!,
      width: data?.thumbnailImage?.width!,
      height: data?.thumbnailImage?.height!
    },
    srcCropped: {
      url: data?.thumbnailImage?.url!,
      width: data?.thumbnailImage?.width!,
      height: data?.thumbnailImage?.height!
    }
  }
})

// Convert relatedPagesForMoreSection data for BlockLinkCarousel compatibility
const relatedContent = computed(() => {
  const pages: Record<string, any>[] = []
  data?.relatedPagesForMoreSection.forEach((page: Record<string, any>) => {
    const card = {
      url: page.url,
      title: page.title,
      thumbnailImage: {
        src: {
          url: page.thumbnailImage.url,
          widht: page.thumbnailImage.width,
          height: page.thumbnailImage.height
        }
      }
    }
    pages.push(card)
  })
  return pages
})

// Handle navigating back to Sites page
const previousPath = computed(() => {
  try {
    const path = route.path

    // Split URL segments and remove last item
    const segements = path.split('/').filter(Boolean)
    segements.pop()

    // Return Sites path
    return '/' + segements.join('/')
  } catch (e) {
    return '/'
  }
})

// Handle opening map to focus on respective site
const mapPath = computed(() => {
  try {
    const path = route.path

    // Split URL segments and remove last 2 items
    const segements = path.split('/').filter(Boolean)
    segements.pop()
    segements.pop()

    // Return map path and id query parameter
    return '/' + segements.join('/') + '/map/?id=' + data?.id
  } catch (e) {
    return ''
  }
})
</script>
<template>
  <div
    v-if="data"
    class="ThemeVariantLight"
  >
    <BaseExploreApp :nav-data="data.breadcrumb">
      <template #default>
        <!-- back nav -->
        <LayoutHelper
          indent="col-2"
          class="mb-5"
        >
          <BaseLink
            class="BackToSitesBtn"
            variant="primary"
            :caret-left="true"
            caret-margin-right="mr-1"
            :to="previousPath"
            >Back to Sites</BaseLink
          >
        </LayoutHelper>

        <!-- page title area -->
        <LayoutHelper indent="col-2">
          <DetailHeadline
            :title="data.title"
            class="mb-5"
          />
          <MetadataStacked
            :location="data.location"
            :location-icon="data?.mapIcon?.url"
            :wait="data?.waitTimeLabel"
          />
        </LayoutHelper>

        <!-- inline image (full bleed) -->
        <BlockImageStandard
          class="mb-22 mt-10"
          :data="detailImage"
          :full-bleed="true"
        />

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

        <!-- See on Map Button -->
        <LayoutHelper
          indent="col-3"
          class="lg:mb-24 mb-12"
        >
          <BaseButton :to="mapPath">
            <template #iconLeft>
              <IconMap class="mr-2 text-2xl" />
            </template>
            <template #default>See on Map</template>
          </BaseButton>
        </LayoutHelper>

        <!-- related content -->
        <BlockLinkCarousel
          v-if="relatedContent"
          item-type="cards"
          class="lg:my-24 my-12"
          heading="More Like This"
          :items="relatedContent"
        />
      </template>
    </BaseExploreApp>
  </div>
</template>
<style lang="scss" scoped>
.BackToSitesBtn {
  margin-left: -10px;
}
</style>
