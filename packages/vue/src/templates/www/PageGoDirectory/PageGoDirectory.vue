<template>
  <div v-if="data">
    <!-- page headline -->
    <LayoutHelper
      indent="col-2"
      class="lg:mt-12 mt-5 mb-10"
    >
      <DetailHeadline :title="data.title" />
    </LayoutHelper>

    <div
      v-if="data.summary"
      class="lg:BaseGrid lg:mb-18 container mx-auto mb-10"
    >
      <div class="lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4">
        <BlockText :text="data.summary" />
      </div>
    </div>

    <!-- directory listing -->
    <section
      v-if="data.children && data.children.length"
      aria-label="Directory Listing"
      class="lg:my-18 my-10"
    >
      <LayoutHelper indent="col-2">
        <BaseHeading
          level="h2"
          class="lg:mb-8 mb-5"
        >
          Directory Listing
        </BaseHeading>
        <SearchResultCard
          v-for="item of data.children"
          :key="item.id"
          :type="item.label"
          :topic="item.topicLabel"
          :url="item.url"
          :image="item.thumbnailImage"
          :title="item.title"
          :summary="item.summary"
          heading-level="h3"
        />
      </LayoutHelper>
    </section>
  </div>
</template>
<script lang="ts">
/* GoDirectory template. Similar to the Asteroid Watch Index page
 ** TODO: once we have a lot of go sites, we can easily convert this to use the search mixin
 */

import { defineComponent } from 'vue'
import BaseHeading from './../../../components/BaseHeading/BaseHeading.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import SearchResultCard from './../../../components/SearchResultCard/SearchResultCard.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'

export default defineComponent({
  name: 'PageGoDirectory',
  components: {
    BaseHeading,
    LayoutHelper,
    BlockText,
    SearchResultCard,
    DetailHeadline
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  }
})
</script>
