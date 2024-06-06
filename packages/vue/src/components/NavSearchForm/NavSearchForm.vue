<template>
  <form
    class="NavSearchForm"
    @submit.prevent="submitSearch()"
  >
    <SearchInput
      v-model="searchQuery"
      placeholder="Search JPL"
      :underlined-input="!mobile"
      :underlined-input-value="searchQuery"
      :auto-focus="!mobile"
      :inline="!mobile"
      :default-colors="mobile"
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
<script lang="ts">
import { defineComponent } from 'vue'
import SearchInput from './../SearchInput/SearchInput.vue'

export default defineComponent({
  name: 'NavSearchForm',
  components: {
    SearchInput
  },
  props: {
    mobile: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchQuery: undefined
    }
  },
  methods: {
    clearSearch() {
      this.searchQuery = undefined
      this.$emit('clearSearch')
    },
    submitSearch() {
      this.$emit('submitForm')
      if (this.$router) {
        this.$router.push({
          name: 'search',
          query: { query: this.searchQuery }
        })
      }
    }
  }
})
</script>
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
