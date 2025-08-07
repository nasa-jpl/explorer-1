<template>
  <div
    v-if="totalPages > 0"
    class="SearchPagination flex items-center justify-center"
  >
    <BaseButton
      aria-label="Previous"
      rel="prev"
      :disabled="currentPage === 1"
      @click="previousPage()"
    >
      <template #icon> <IconPrev /> </template
    ></BaseButton>

    <div class="sm:hidden px-4 pt-1">Page {{ currentPage }} of {{ totalPages }}</div>
    <div class="sm:flex items-center justify-center hidden px-5 pt-1">
      <div
        v-for="(pageNumber, index) in generatePageList"
        :key="index"
      >
        <button
          v-if="pageNumber !== ellipsis"
          class="group min-w-12 can-hover:hover:font-medium block py-3 text-lg leading-normal text-center"
          :class="{ '-current': pageNumber === currentPage }"
          @click="toPage(pageNumber)"
        >
          <span
            class="inline-block px-1 pb-1"
            :class="{
              'can-hover:group-hover:border-b-2 can-hover:group-hover:border-primary':
                pageNumber !== ellipsis
            }"
          >
            {{ pageNumber }}
          </span>
        </button>
        <span
          v-else
          class="min-w-12 block py-3 text-lg leading-normal text-center cursor-default"
        >
          <span class="inline-block px-1 pb-1">
            {{ pageNumber }}
          </span>
        </span>
      </div>
    </div>

    <BaseButton
      :disabled="currentPage === totalPages"
      rel="next"
      aria-label="Next"
      @click="nextPage()"
    >
      <template #icon> <IconNext /> </template
    ></BaseButton>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import BaseButton from './../BaseButton/BaseButton.vue'
import IconPrev from './../Icons/IconPrev.vue'
import IconNext from './../Icons/IconNext.vue'

export default {
  name: 'SearchPagination',
  components: {
    BaseButton,
    IconPrev,
    IconNext
  },
  props: {
    totalPages: Number,
    currentPage: Number
  },
  data() {
    return {
      ellipsis: '…'
    }
  },
  computed: {
    generatePageList() {
      const maxLeft = 4
      const maxRight = this.totalPages - maxLeft + 1
      if (this.totalPages > 4) {
        // we're at the begining
        if (this.currentPage <= maxLeft) {
          return [...this.generatePageRange(1, maxLeft), this.ellipsis, this.totalPages]
        }
        // we're at the begining but past the threshold to truncate
        else if (this.currentPage === maxLeft) {
          const end = this.currentPage + maxLeft - 1
          return [...this.generatePageRange(1, end), this.ellipsis, this.totalPages]
        }
        // we're in the 'middle' of the number range
        else if (this.currentPage > maxLeft && this.currentPage < maxRight) {
          const start = this.currentPage - 1
          const end = this.currentPage + 1
          return [
            1,
            this.ellipsis,
            ...this.generatePageRange(start, end),
            this.ellipsis,
            this.totalPages
          ]
        }
        // we're at the end
        else if (this.currentPage >= maxRight) {
          const start = this.currentPage - 2
          return [1, this.ellipsis, ...this.generatePageRange(start, this.totalPages)]
        }
        // a fallback (this would generate a list of all pages)
        else {
          return [...this.generatePageRange(1, this.totalPages)]
        }
      } else {
        // should be hitting this intentionally if < 4 total pages
        return [...this.generatePageRange(1, this.totalPages)]
      }
    }
  },
  watch: {
    currentPage: {
      handler() {
        const query = {
          ...this.$route.query,
          page: this.currentPage
        }
        // ensures history is saved with each change to filters
        this.$router.push({ query })
      }
    }
  },
  methods: {
    toPage(newPageNumber) {
      this.$emit('update:currentPage', newPageNumber)
    },
    nextPage() {
      const newPageNumber = this.currentPage + 1
      this.$emit('update:currentPage', newPageNumber)
    },
    previousPage() {
      const newPageNumber = this.currentPage - 1
      this.$emit('update:currentPage', newPageNumber)
    },
    generatePageRange(from, to) {
      // utility that generates an array of numbers
      const pageRange = []

      from = from > 0 ? from : 1

      // TODO: replace with lodash once that is merged
      // _.range([(start = from)], to)

      for (let i = from; i <= to; i++) {
        pageRange.push(i)
      }

      return pageRange
    }
  }
}
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/SearchPagination';
</style>
