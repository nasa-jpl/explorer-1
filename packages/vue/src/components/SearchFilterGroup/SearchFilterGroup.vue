<template>
  <div
    v-if="showFilterGroup"
    :id="`filterGroup_${groupKey}`"
    class="border-gray-light-mid col-span-3 pb-4 mb-4 border-b"
  >
    <!-- bucket key param -->
    <legend class="md:mb-3 text-body-md mb-2 font-bold leading-normal tracking-wide">
      {{ groupTitle }}
    </legend>
    <div
      v-if="buckets?.length"
      class="buckets"
    >
      <div
        v-for="(bucket, index) in buckets"
        :key="bucket.key"
        ref="buckets"
        class="form-group form-check"
      >
        <!-- correct for zero based index -->
        <div
          v-if="!truncateFilters || index <= checkbox.checkboxLimit - 1"
          class="flex my-2"
        >
          <input
            :id="
              bucket.key_as_string
                ? generateId(bucket.key_as_string, groupKey)
                : generateId(bucket.key, groupKey)
            "
            v-model="filterByHandler"
            type="checkbox"
            :value="bucket.key_as_string ? bucket.key_as_string : bucket.key"
            class="text-primary focus:ring-2 focus:ring-primary flex-shrink-0 w-5 h-5 mt-px mr-1 align-middle border rounded-none"
          />
          <!-- 'key_as_string' exists for dates to have a human readable version -->
          <label
            :for="
              bucket.key_as_string
                ? generateId(bucket.key_as_string, groupKey)
                : generateId(bucket.key, groupKey)
            "
            class="form-check-label pl-2 tracking-normal align-middle"
          >
            {{ prettyFilterNames(bucket.key_as_string ? bucket.key_as_string : bucket.key) }}
            <span class="text-gray-mid-dark"> ({{ bucket.doc_count.toLocaleString() }}) </span>
          </label>
        </div>

        <!-- dynamic slots for subFilters -->
        <div
          v-if="
            (bucket.key_as_string || bucket.key) &&
            getSubFilters(bucket.key_as_string || bucket.key) &&
            subFilterParentKeys?.length
          "
          class="block"
        >
          <div
            v-if="hasSubFilter(bucket.key_as_string || bucket.key)"
            class="SubFilters pl-5"
          >
            <slot :name="`slot_${getSubFilterParentKey(bucket.key_as_string || bucket.key)}`" />
          </div>
        </div>
      </div>
    </div>
    <div v-else><span class="text-sm text-gray-mid-dark">No matching filters</span></div>
    <!--
      TODO: this logic could probably cleaner. It flows in the opposite way of the loop
      for making checkboxes above.
      only show button if we want to truncate the list and/or we're highter than limit
    -->

    <div v-show="truncateFilters && bucketsLength > checkbox.initialLimit">
      <button
        class="can-hover:hover:underline text-action mt-2"
        :aria-expanded="!checkbox.showMore ? 'true' : 'false'"
        aria-haspopup="true"
        :aria-controls="`filterGroup_${groupKey}`"
        @click="toggleShowMoreFilters()"
      >
        {{ checkbox.showMore == false ? 'Less' : 'More' }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import { PropType } from 'vue'
import isEqual from 'lodash/isEqual.js'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import { lookupContentType } from './../../utils/lookupContentType'
import { SubFiltersObject } from './../../interfaces'

export default {
  name: 'SearchFilterGroup',
  props: {
    filterBy: {
      type: Array,
      default: undefined
    },
    buckets: {
      type: Object,
      default: undefined
    },
    hideFilterGroups: {
      type: Array,
      default: () => []
    },
    groupKey: {
      type: String,
      required: true
    },
    groupTitle: {
      type: String,
      default: ''
    },
    truncateFilters: {
      type: Boolean,
      required: false,
      default: false
    },
    subFilters: {
      type: Object as PropType<SubFiltersObject>,
      default: undefined
    }
  },
  emits: ['update:filterBy'],
  data() {
    return {
      checkbox: {
        checkboxLimit: 4,
        showMore: true,
        initialLimit: 4
      }
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    // to sync both ways parent <--> child
    // ensures accurate filter visual state when using URL query strings
    filterByHandler: {
      get() {
        return this.filterBy
      },
      set(newValue) {
        this.$emit('update:filterBy', newValue)
      }
    },
    bucketsLength() {
      return this.buckets.length
    },
    showFilterGroup() {
      if (this.themeStore.isEdu) {
        return (
          (this.groupTitle || this.buckets?.length) &&
          !this.hideFilterGroups.includes(this.groupKey)
        )
      } else {
        return (
          typeof this.groupKey !== 'undefined' &&
          typeof this.buckets !== 'undefined' &&
          this.bucketsLength >= 1 &&
          !this.hideFilterGroups.includes(this.groupKey)
        )
      }
    },
    subFilterParentKeys() {
      return this.subFilters ? Object.keys(this.subFilters) : undefined
    }
  },
  watch: {
    filterBy: {
      // update URL with filter parameters
      handler(newVal, oldVal) {
        // using lodash to avoid discrepancies between comparing nested objects and arrays
        if (!isEqual(newVal, oldVal)) {
          let query = Object.assign({}, this.$route.query)
          if (newVal.length > 0) {
            query = {
              ...this.$route.query,
              page: 1,
              [this.groupKey]: newVal.toString()
            }
          } else {
            // clear the param from the URL if no value is passed
            delete query[this.groupKey]
          }
          // using $router.push() ensures history is saved with each change to filters
          this.$router.push({ query })
        }
      }
    }
  },

  methods: {
    generateId(value, group) {
      let valueString = String(value)
      valueString = valueString.split(' ').join('')
      return `filter_${group}_${valueString}`
    },
    // used to match sub-filters to their parent
    getSubFilterParentKey(value) {
      let key = value
      if (key) {
        key = key.toLowerCase()
        key = key.replaceAll(' ', '_')
      }
      return key
    },
    hasSubFilter(filterKey) {
      const lookupKey = this.getSubFilterParentKey(filterKey)
      // check if any of the keys are populated in subFilters
      if (this.subFilters && lookupKey && this.subFilters[lookupKey]) {
        return true
      }
      return undefined
    },
    getSubFilters(filterKey) {
      const lookupKey = this.getSubFilterParentKey(filterKey)
      // check if any of the keys are populated in subFilters
      if (this.subFilters && lookupKey && this.subFilters[lookupKey]) {
        return this.subFilters[lookupKey]
      }
      return undefined
    },
    toggleShowMoreFilters() {
      if (this.checkbox.checkboxLimit === this.checkbox.initialLimit) {
        this.checkbox.checkboxLimit = Infinity
        this.checkbox.showMore = false

        this.$nextTick(() => {
          // Focus on first new rendered checkbox in list
          this.$refs.buckets[this.checkbox.initialLimit].getElementsByTagName('input')[0].focus()
        })
      } else {
        this.checkbox.checkboxLimit = this.checkbox.initialLimit
        this.checkbox.showMore = true
      }
    },
    prettyFilterNames(key) {
      let name = lookupContentType(key, 'model', 'label')
      if (this.themeStore.isEdu && name) {
        name = name.replace('EDU ', '')
      }
      return name ? name : key
    },
    getSlotName(key) {
      return `slot_${key}`
    }
  }
}
</script>
