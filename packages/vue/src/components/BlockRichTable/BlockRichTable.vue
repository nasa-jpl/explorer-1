<script lang="ts">
import { defineComponent } from 'vue'
import BlockImageStandard from './../BlockImage/BlockImageStandard.vue'
import BlockText from './../BlockText/BlockText.vue'

export default defineComponent({
  name: 'BlockRichTable',
  components: {
    BlockImageStandard,
    BlockText
  },
  props: {
    table: {
      type: Object,
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
              class="min-w-[6rem] bg-jpl-blue-darker edu:bg-jpl-violet-darker text-subtitle text-white border-gray-light-mid lg:p-5 p-3 border-b text-left"
            >
              {{ headCell.text }}
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
                  {{ cell.value }}
                </p>
              </template>
              <template v-else-if="cell.blockType === 'RichTextBlock'">
                <BlockText
                  variant="small"
                  :text="cell.value"
                />
              </template>
              <template v-else-if="cell.blockType === 'ImageBlock'">
                <BlockImageStandard
                  class=""
                  :data="cell.image"
                  :display-caption="cell.displayCaption"
                  :caption="cell.caption"
                  :constrain="cell.constrain"
                />
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template v-if="table.tableCaption">
      <div
        class="max-w-screen-3xl mx-auto block text-left px-0 text-gray-mid-dark text-body-sm mt-4"
        aria-hidden
      >
        {{ table.tableCaption }}
      </div>
    </template>
  </div>
</template>

<style lang="scss">
// @import '@explorer-1/common/src/scss/components/BlockRichTable';
.BlockRichTable {
  .BlockImageStandard,
  .BlockText {
    @apply min-w-[12rem] lg:min-w-[15rem];
    .caption-area {
      @apply pt-2;
    }
  }
}
</style>
