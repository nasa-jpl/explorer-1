import SearchPagination from './SearchPagination.vue'

export default {
  title: 'Components/Search/SearchPagination',
  component: SearchPagination,
  excludeStories: /.*Data$/
}

// template
const SearchPaginationTemplate = (args) => ({
  props: Object.keys(args),
  components: { SearchPagination },
  template: `<SearchPagination
  :total-pages="totalPages"
  :current-page="currentPage"
/>`
})

export const TwoPages = SearchPaginationTemplate.bind({})
TwoPages.args = {
  totalPages: 2,
  currentPage: 1
}

export const ThreePages = SearchPaginationTemplate.bind({})
ThreePages.args = {
  totalPages: 3,
  currentPage: 2
}

export const FourPages = SearchPaginationTemplate.bind({})
FourPages.args = {
  totalPages: 4,
  currentPage: 2
}

export const FivePages = SearchPaginationTemplate.bind({})
FivePages.args = {
  totalPages: 5,
  currentPage: 4
}

export const FirstOfMany = SearchPaginationTemplate.bind({})
FirstOfMany.args = {
  totalPages: 10,
  currentPage: 1
}

export const MiddleOfMany = SearchPaginationTemplate.bind({})
MiddleOfMany.args = {
  totalPages: 10,
  currentPage: 5
}

export const LastOfMany = SearchPaginationTemplate.bind({})
LastOfMany.args = {
  totalPages: 10,
  currentPage: 10
}
