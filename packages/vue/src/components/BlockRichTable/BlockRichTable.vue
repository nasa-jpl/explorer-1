<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { BlockData, ImageBlock, StreamfieldBlockData } from './../../interfaces.ts'
import BlockImageStandard from './../BlockImage/BlockImageStandard.vue'
import BlockText from './../BlockText/BlockText.vue'

type HeadCell = {
  text?: string
}
type RichTableObject = BlockData & {
  tableCaption?: string
  tableContent?: {
    tableHead?: HeadCell[]
    tableBody?: BlockData[][]
  }
}

export default defineComponent({
  name: 'BlockRichTable',
  components: {
    BlockImageStandard,
    BlockText
  },
  props: {
    table: {
      type: Object as PropType<RichTableObject>,
      required: true
    }
  }
})
</script>

<template>
  <div
    v-if="table"
    class="BlockRichTable BlockText -small text-body-sm"
  >
    <div class="overflow-x-auto scrolling-touch max-w-screen-3xl mx-auto !mb-0">
      <table
        v-if="table.tableContent"
        class="min-w-full border-gray-light-mid w-full border-t border-b border-collapse table-auto m-0 p-0"
      >
        <caption
          v-if="table.tableCaption"
          class="sr-only"
        >
          {{
            table.tableCaption
          }}
        </caption>
        <thead v-if="table.tableContent.tableHead?.length">
          <tr>
            <th
              v-for="(headCell, headIndex) in table.tableContent.tableHead[0]"
              :key="headIndex"
              scope="col"
              class="min-w-[6rem] bg-jpl-blue-darker edu:bg-jpl-violet-darker font-display text-white border-gray-light-mid lg:p-5 p-3 border-b text-left"
            >
              <template v-if="headCell">
                {{ (headCell as HeadCell).text }}
              </template>
            </th>
          </tr>
        </thead>
        <tbody v-if="table.tableContent.tableBody?.length">
          <tr
            v-for="(row, rowIndex) in table.tableContent.tableBody"
            :key="rowIndex"
          >
            <td
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              class="min-w-[6rem] bg-white text-gray-dark border-gray-light-mid lg:p-5 p-3 align-top"
            >
              <template v-if="cell.blockType === 'CharBlock'">
                <p class="">
                  {{ (cell as StreamfieldBlockData).value }}
                </p>
              </template>
              <template v-else-if="cell.blockType === 'RichTextBlock'">
                <BlockText
                  variant="small"
                  :text="(cell as StreamfieldBlockData).value"
                />
              </template>
              <template v-else-if="cell.blockType === 'ImageBlock'">
                <BlockImageStandard
                  class=""
                  :data="(cell as ImageBlock).image"
                  :display-caption="(cell as ImageBlock).displayCaption"
                  :caption="(cell as ImageBlock).caption"
                  :constrain="(cell as ImageBlock).constrain"
                />
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template v-if="table.tableCaption">
      <div
        class="max-w-screen-3xl mx-auto block text-left px-0 text-gray-mid-dark font-secondary text-sm mt-4"
        aria-hidden
      >
        {{ table.tableCaption }}
      </div>
    </template>
  </div>
</template>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockRichTable';
</style>
