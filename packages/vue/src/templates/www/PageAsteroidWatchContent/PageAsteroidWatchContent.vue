<script setup lang="ts">
import { reactive } from 'vue'
import NavSecondary from './../../../components/NavSecondary/NavSecondary.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import ShareButtons from './../../../components/ShareButtons/ShareButtons.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'

interface PageAsteroidWatchContentProps {
  data: any
}
const props = withDefaults(defineProps<PageAsteroidWatchContentProps>(), {
  data: undefined
})

const { data } = reactive(props)
</script>
<template>
  <div
    v-if="data"
    class="ThemeVariantLight"
    :class="{ '-nav-offset': data.heroImage }"
  >
    <HeroMedia
      v-if="data.heroImage"
      class="md:mb-0 mb-10"
      :image="data.heroImage"
      :caption="data.heroImageCaption"
      :display-caption="!data.heroImageCaption ? false : true"
    />

    <!-- secondary nav -->
    <NavSecondary
      :breadcrumb="data.breadcrumb"
      :has-intro="data.heroImage ? true : false"
    />

    <!-- page headline -->
    <LayoutHelper
      indent="col-2"
      class="md:my-12 lg:my-18 my-10"
    >
      <DetailHeadline
        :title="data.title"
        :label="data.displayLabel"
      />
    </LayoutHelper>

    <template v-if="data.slug === 'next-five-approaches'">
      <FetchAsteroidWatchWidget class="lg:mb-18 mb-10" />
    </template>

    <!-- share buttons -->
    <LayoutHelper
      indent="col-2"
      class="lg:mb-0 relative mb-8"
    >
      <ShareButtons
        :title="data.title"
        :url="data.url"
      />
    </LayoutHelper>

    <!-- Body Streamfield -->
    <BlockStreamfield :data="data.body" />
  </div>
</template>
