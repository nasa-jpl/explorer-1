<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeStore } from '../../store/theme'
import SearchInput from './../SearchInput/SearchInput.vue'
const router = useRouter()
const themeStore = useThemeStore()

export interface NavSearchFormProps {
  mobile?: boolean
  placeholder?: string
}
const props = withDefaults(defineProps<NavSearchFormProps>(), {
  mobile: false,
  placeholder: 'Search JPL'
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
    path: themeStore.isEdu ? '/edu/search/' : '/search',
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
      :placeholder="placeholder"
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
@import '@explorer-1/common/src/scss/components/NavSearchForm';
</style>
