import SearchSelectMenu from '@explorer-1/vue/src/components/SearchSelectMenu/SearchSelectMenu.vue'

export default {
  title: 'Components/Search/SearchSelectMenu',
  component: SearchSelectMenu
}

export const SortBy = {
  args: {
    title: 'Sort by',
    options: [
      { text: 'Relevance', value: 'score' },
      {
        text: 'Latest',
        value: 'latestDate'
      },
      {
        text: 'Oldest',
        value: 'oldestDate'
      }
    ],
    groupKey: 'sortBy',
    selectValue: ''
  }
}
