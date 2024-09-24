<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeStore } from '../../store/theme'
import SearchInput from './../SearchInput/SearchInput.vue'
const router = useRouter()
const themeStore = useThemeStore()

interface NavSearchFormProps {
  mobile?: boolean
}
const props = withDefaults(defineProps<NavSearchFormProps>(), {
  mobile: false
})
const emit = defineEmits(['clearSearch', 'submitForm'])

const searchQuery = ref()

const clearSearch = () => {
  searchQuery.value = undefined
  emit('clearSearch')
}
const submitSearch = () => {
  emit('submitForm')
  router.push({
    path: themeStore.isEdu ? '/edubeta/search/' : '/search',
    query: { query: searchQuery.value }
  })
}
</script>
<template>
  <form
    class="NavSearchForm"
    @submit.prevent="submitSearch()"
  >
    <SearchInput
      v-model="searchQuery"
      placeholder="Search JPL"
      :underlined-input="!props.mobile"
      :underlined-input-value="searchQuery"
      :auto-focus="!props.mobile"
      :inline="!props.mobile"
      :default-colors="props.mobile"
      @esc="clearSearch()"
    />
    <button
      type="submit"
      class="sr-only"
      aria-label="Submit"
    >
      Search
    </button>
  </form>
</template>
<style lang="scss">
.NavSearchForm {
  ::placeholder {
    @apply text-gray-dark;
  }

  .-transparent & {
    ::placeholder {
      @apply text-white;
    }
  }

  .-transparent.-scrolled & {
    ::placeholder {
      @apply text-gray-dark;
    }
  }
  @screen lg {
    // remove the default styling of search field
    input[type='search']::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }

    input[type='search']::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    /* clears the 'X' from Chrome */
    input[type='search']::-webkit-search-decoration,
    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-results-button,
    input[type='search']::-webkit-search-results-decoration {
      display: none;
    }
  }
}
</style>
