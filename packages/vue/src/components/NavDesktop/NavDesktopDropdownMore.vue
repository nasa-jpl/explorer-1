<template>
  <div
    v-if="data"
    class="NavDesktopDropdownMore bg-dark-blue bg-opacity-98 3xl:px-0 w-full px-4 py-10 text-white"
  >
    <div class="BaseGrid container mx-auto">
      <div class="grid order-1 grid-cols-2 col-span-9 grid-rows-2 gap-10" v-if="linkColumns">
        <!-- link columns -->
        <template v-for="(col, index) in linkColumns">
          <div v-if="index === 0" :key="`rowSpan1${index}`" class="row-span-1">
            <NavLinkList :data="col" auto-col />
          </div>
          <div v-else-if="index === 1" :key="`rowSpan2${index}`" class="row-span-2">
            <NavLinkList :data="col" auto-col />
          </div>
        </template>

        <!-- summary text and social media links -->
        <div class="row-span-1 row-start-2">
          <p
            v-if="data.strapline"
            class="text-medium pr-5 mb-8 text-6xl leading-tight"
          >
            {{ data.strapline }}
          </p>
          <NavSocial dark />
        </div>
      </div>

      <!-- highlights -->
      <div v-if="highlightsColumn" class="order-2 col-span-3 col-start-10">
        <NavHeading :data="highlightsColumn" />
        <div
          v-for="(highlight, index) in highlightsColumn.highlights"
          :key="index"
          :class="{ 'mb-10': index + 1 !== highlightsColumn.highlights.length }"
        >
          <NavHighlight :highlight="highlight.highlight" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import _map from 'lodash/map'
import _without from 'lodash/without'

import NavLinkList from './../NavLinkList/NavLinkList.vue'
import NavSocial from './../NavSocial/NavSocial.vue'
import NavHighlight from './../NavHighlight/NavHighlight.vue'
import NavHeading from './../NavHeading/NavHeading.vue'

export default defineComponent({
  name: 'NavDesktopDropdownMore',
  components: {
    NavLinkList,
    NavSocial,
    NavHighlight,
    NavHeading,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  computed: {
    linkColumns() {
      let columns = undefined
      columns = this.data ? _map(this.data.menuColumns, function (o) {
        if (o.blockType.includes('MenuLinkColumnWithHeader')) return o
      }) : undefined
      columns = _without(columns, undefined) // remove null
      return columns
    },
    highlightsColumn() {
      let columns = undefined
      columns = this.data ? _map(this.data.menuColumns, function (o) {
        if (o.blockType.includes('MenuMoreHighlightsColumn')) return o
      }) : undefined
      columns = _without(columns, undefined) // remove null
      return columns?.length ? columns[0] : undefined
    },
  },
})
</script>
