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
    <div class="overflow-x-auto scrolling-touch max-w-screen-3xl mx-auto">
      <table
        class="min-w-full border-gray-light-mid w-full border-t border-b border-collapse table-auto"
      >
        <thead v-if="table.tableContent.tableHead?.length">
          <tr>
            <th
              v-for="(headCell, headIndex) in table.tableContent.tableHead[0]"
              :key="headIndex"
              scope="col"
              class="min-w-72 sm:min-w-80 bg-jpl-blue-darker text-subtitle text-white border-gray-light-mid lg:p-5 p-3 border-b"
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
              class="min-w-72 sm:min-w-80 bg-white text-gray-dark border-gray-light-mid"
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
      <template v-if="table.tableCaption">
        <caption class="block text-left px-0 text-gray-mid-dark text-body-sm mt-4">
          {{
            table.tableCaption
          }}
        </caption>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockRichTable';
</style>
