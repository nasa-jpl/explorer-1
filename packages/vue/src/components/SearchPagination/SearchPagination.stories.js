import SearchPagination from './SearchPagination.vue'

export default {
  title: 'Components/Search/SearchPagination',
  component: SearchPagination,
  tags: ['search'],
  excludeStories: /.*Data$/
}

export const BaseStory = {
  name: 'Two Pages',
  args: {
    totalPages: 2,
    currentPage: 1
  }
}
export const ThreePages = {
  args: {
    totalPages: 3,
    currentPage: 2
  }
}

export const FourPages = {
  args: {
    totalPages: 4,
    currentPage: 2
  }
}

export const FivePages = {
  args: {
    totalPages: 5,
    currentPage: 4
  }
}

export const FirstOfMany = {
  args: {
    totalPages: 10,
    currentPage: 1
  }
}

export const MiddleOfMany = {
  args: {
    totalPages: 10,
    currentPage: 5
  }
}

export const LastOfMany = {
  args: {
    totalPages: 10,
    currentPage: 10
  }
}
