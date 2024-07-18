<template>
  <div
    v-if="data"
    class="NavDesktopDropdownContent bg-jpl-blue-darker bg-opacity-98 edu:bg-gradient-to-r edu:bg-transparent edu:from-black/[.98] edu:to-primary/[.98] edu:to-90% 3xl:px-0 px-4 py-10 text-white"
  >
    <div
      v-if="data.menuColumns"
      class="BaseGrid container mx-auto"
    >
      <template v-for="(item, index) in data.menuColumns">
        <!-- featured story -->
        <div
          v-if="item.blockType === 'MenuHighlightColumn'"
          :key="`MenuHighlightColumn${index}`"
          class="order-1 col-span-4 col-start-1"
        >
          <div class="grid grid-cols-4">
            <NavHighlight
              :highlight="item.highlight"
              :custom-label="item.label"
              class="col-span-3"
            />
          </div>
        </div>

        <!-- heading and summary -->
        <div
          v-else-if="item.blockType === 'MenuDescriptionColumn'"
          :key="`MenuDescriptionColumn${index}`"
          class="order-2 col-span-3"
        >
          <p class="text-medium text-6xl">{{ item.title }}</p>
          <p class="text-sm leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </template>

      <!-- container for link cols -->
      <div
        v-if="linkColumns"
        class="grid order-3 grid-cols-4 col-span-4 col-start-9 gap-6"
      >
        <NavLinkList
          v-for="(col, index) in linkColumns"
          :key="index"
          :data="col"
          class="col-span-2"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import _map from 'lodash/map.js'
import _without from 'lodash/without.js'
import NavLinkList from './../NavLinkList/NavLinkList.vue'
import NavHighlight from './../NavHighlight/NavHighlight.vue'

export default defineComponent({
  name: 'NavDesktopDropdownContent',
  components: {
    NavLinkList,
    NavHighlight
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  computed: {
    linkColumns() {
      let columns = undefined
      columns = this.data
        ? _map(this.data.menuColumns, function (o) {
            if (o.blockType.includes('MenuLinkColumnWithHeader')) return o
          })
        : undefined
      columns = _without(columns, undefined) // remove null
      return columns
    }
  }
})
</script>
