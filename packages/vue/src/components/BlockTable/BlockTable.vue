<template>
  <div
    v-if="data"
    class="BlockTable"
  >
    <div class="overflow-x-auto scrolling-touch">
      <table class="border-gray-light-mid w-full border-t border-b border-collapse table-auto">
        <tr
          v-for="(row, index_row) in table.rows"
          :key="index_row"
        >
          <td
            v-for="(col, index_col) in row.cols"
            :key="index_col"
            :class="
              row.header ? 'bg-dark-blue text-subtitle text-white' : 'bg-white text-gray-dark'
            "
            class="border-gray-light-mid lg:p-5 p-3 border-b"
          >
            {{ col }}
          </td>
        </tr>
      </table>
    </div>
    <div class="text-gray-mid-dark text-body-sm mt-4">{{ table.caption }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlockTable',
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  computed: {
    table() {
      let str = this.data.table
      str = str.replace(/'/g, '"')
      str = str.replace(/None,/g, '"",')
      str = str.replace(/, None/g, ',""')
      str = str.replace(/: False/g, ': false')
      str = str.replace(/: True/g, ': true')
      const dict = JSON.parse(str)
      const table = {
        rows: [],
        caption: dict.table_caption
      }
      for (let i = 0; i < dict.data.length; i++) {
        const row = {
          cols: dict.data[i],
          header: i === 0 && dict.first_row_is_table_header
        }
        table.rows.push(row)
      }
      return table
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/typography';
// required for @apply text-subtitle in _BlockTable.scss
@import '@explorer-1/common/src/scss/components/BlockText';
// required for @extend .BlockText in _BlockTable.scss
@import '@explorer-1/common/src/scss/components/BlockTable';
</style>
