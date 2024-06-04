import SearchSelectMenu from './SearchSelectMenu.vue'

export default {
  title: 'Components/Search/SearchSelectMenu',
  component: SearchSelectMenu
}

// template
const SearchSelectMenuTemplate = (args) => ({
  props: Object.keys(args),
  components: { SearchSelectMenu },
  template: `<SearchSelectMenu
    :title="title"
    :options="options"
    :group-key="groupKey"
    :select-value="selectValue"
/>`
})

export const SortBy = SearchSelectMenuTemplate.bind({})
SortBy.args = {
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
