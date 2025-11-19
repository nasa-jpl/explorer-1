<template>
  <div
    v-if="data"
    class="BlockKeyPoints border-gray-light-mid lg:py-10 py-6 border-t border-b"
  >
    <BlockHeading
      v-if="data.heading"
      class="mb-5"
      :data="{ heading: data.heading }"
    />
    <ul class="print:!list-disc">
      <li
        v-for="(item, index) in data.listItem"
        :key="index"
        class="print:!list-item print:ml-4"
        :class="index + 1 === data.listItem.length ? 'mb-0' : 'mb-4'"
      >
        <BlockText
          :text="item.text"
          variant="medium"
        ></BlockText>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { BlockData } from './../../interfaces.ts'
import BlockHeading from './../BlockHeading/BlockHeading.vue'
import BlockText from './../BlockText/BlockText.vue'

export type BlockKeyPointsData = BlockData & {
  listItem: {
    text: string
  }[]
}

export default defineComponent({
  name: 'BlockKeyPoints',
  components: {
    BlockHeading,
    BlockText
  },
  props: {
    data: {
      type: Object as PropType<BlockKeyPointsData>,
      required: false,
      default: undefined
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockKeyPoints';
</style>
