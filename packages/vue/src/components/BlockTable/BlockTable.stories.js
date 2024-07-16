import BlockTable from './BlockTable.vue'

export default {
  title: 'Components/Blocks/BlockTable',
  component: BlockTable,
  excludeStories: /.*Data$/
}

export const BlockTableData = {
  blockType: 'TableBlock',
  table:
    "{'data': [['Header 1', 'Header 2', 'Header 3'], ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'], [None, None, None]], 'cell': [], 'first_row_is_table_header': True, 'first_col_is_header': False, 'table_caption': 'Third row intentionally blank to test parsing.'}"
}

export const BaseStory = {
  name: 'BlockTable',
  args: {
    data: BlockTableData
  }
}
