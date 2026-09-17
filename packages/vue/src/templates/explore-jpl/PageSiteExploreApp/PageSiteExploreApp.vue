<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import type { PageObject, ImageObject } from '../../../interfaces'
import { useThemeStore } from '../../../store/theme'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import BlockImageFullBleed from './../../../components/BlockImage/BlockImageFullBleed.vue'
import ShareButtons from './../../../components/ShareButtons/ShareButtons.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BaseExploreApp from './../../explore-jpl/BaseExploreApp/BaseExploreApp.vue'
import BaseButton from '../../../components/BaseButton/BaseButton.vue'
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
        <!-- page title area -->
        <LayoutHelper indent="col-2">
          <DetailHeadline
            :title="data.title"
            :label="data.themeTypeLabel"
            class="my-5 lg:mt-10"
          />
          <MetadataStacked
            :location="data.location"
            :location-icon="data?.mapIcon?.url"
            :wait="data?.waitTimeLabel"
          />
        </LayoutHelper>

        <!-- inline hero image -->
        <LayoutHelper
          v-if="data.thumbnailImage?.src"
          indent="col-2"
          class="mt-10 mb-22 hidden lg:block"
        >
          <BlockImageStandard :data="data.thumbnailImage as ImageObject" />
        </LayoutHelper>

        <BlockImageFullBleed
          v-if="data.thumbnailImage?.src"
          :data="data.thumbnailImage as ImageObject"
          class="lg:hidden mt-10 mb-10"
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
          v-if="data?.relatedPagesForMoreSection"
          item-type="cards"
          class="lg:my-24 my-12"
          heading="More Like This"
          :items="data.relatedPagesForMoreSection"
        />
      </template>
    </BaseExploreApp>
  </div>
</template>
