<script lang="ts">
// @ts-nocheck
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'BlockRichTable',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // Parse the table data from the JSON string
    const parsedData = computed(() => {
      try {
        return JSON.parse(props.data.table)
      } catch (error) {
        console.error('Error parsing table data:', error)
        return null
      }
    })

    // Extract the relevant table block
    const table = computed(() => {
      if (!parsedData.value || !parsedData.value.data.page.body) {
        return null
      }

      return parsedData.value.data.page.body.find((block) => block.blockType === 'RichTableBlock')
    })

    return {
      table
    }
  }
})
</script>

<template>
  <div
    v-if="table"
    class="BlockRichTable"
  >
    <div class="overflow-x-auto scrolling-touch">
      <table class="border-gray-light-mid w-full border-t border-b border-collapse table-auto">
        <caption class="text-center font-bold my-4">
          {{
            table.tableCaption
          }}
        </caption>
        <thead>
          <tr>
            <th
              v-for="(headCell, headIndex) in table.tableContent.tableHead[0]"
              :key="headIndex"
              class="bg-jpl-blue-darker text-subtitle text-white border-gray-light-mid lg:p-5 p-3 border-b"
            >
              {{ headCell.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, rowIndex) in table.tableContent.tableBody"
            :key="rowIndex"
          >
            <td
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              class="bg-white text-gray-dark border-gray-light-mid lg:p-5 p-3 border-b"
            >
              <!-- Render content based on the block type -->
              <template v-if="cell.blockType === 'CharBlock'">
                {{ cell.value }}
              </template>
              <template v-else-if="cell.blockType === 'RichTextBlock'">
                <div v-html="cell.value"></div>
              </template>
              <template v-else-if="cell.blockType === 'ImageBlock'">
                <figure>
                  <img
                    :src="cell.image.url"
                    :alt="cell.image.caption"
                    class="w-full h-auto"
                  />
                  <figcaption class="text-xs text-center mt-2">{{ cell.image.caption }}</figcaption>
                </figure>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockRichTable';
</style>
