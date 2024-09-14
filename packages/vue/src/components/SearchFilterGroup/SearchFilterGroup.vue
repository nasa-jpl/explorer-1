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
        <div
          v-if="
            (bucket.key_as_string || bucket.key) &&
            getSubFilters(bucket.key_as_string || bucket.key)
          "
          class="block"
        >
          <!-- sub filters -->
          <template
            v-for="(subFilter, subFilter_index) of getSubFilters(
              bucket.key_as_string || bucket.key
            )"
            :key="subFilter_index"
          >
            <div class="flex pl-4 my-2">
              <input
                :id="generateId(subFilter.key, subFilter.agg)"
                v-model="filterByHandler"
                type="checkbox"
                :value="subFilter.key"
                class="text-primary focus:ring-2 focus:ring-primary flex-shrink-0 w-5 h-5 mt-px mr-1 align-middle border rounded-none"
              />
              <label
                :for="generateId(subFilter.key, subFilter.agg)"
                class="form-check-label pl-2 tracking-normal align-middle"
              >
                {{ subFilter.key }}
                <span
                  v-if="subFilter.doc_count"
                  class="text-gray-mid-dark"
                >
                  ({{ subFilter.doc_count.toLocaleString() }})
                </span>
              </label>
            </div>
          </template>
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

// const getFilterUpdatedKey = (filterUpdatedKey, filterValue) => {
//   let theKey = filterUpdatedKey
//   const subFilterKeys = Object.keys(this.subFilters)
//   subFilterKeys.forEach((key) => {
//     // if the updated filter has sub filters, continue check
//     if (this.subFilters[key]) {
//       // find the subfilter with matching key
//       const match = this.subFilters[key].find((subfilter) => {
//         subfilter.key === filterValue
//       })
//       // get the aggregation key
//       theKey = match.agg
//     }
//   })
//   return theKey
// }

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
        return this.groupTitle && !this.hideFilterGroups.includes(this.groupKey)
      } else {
        return (
          typeof this.groupKey !== 'undefined' &&
          typeof this.buckets !== 'undefined' &&
          this.bucketsLength >= 1 &&
          !this.hideFilterGroups.includes(this.groupKey)
        )
      }
    }
  },
  watch: {
    filterBy: {
      // update URL with filter parameters
      handler(newVal, oldVal) {
        // helper
        const getFilterUpdatedKey = (filterUpdatedKey, filterValue) => {
          // console.log(filterUpdatedKey) // subject
          // console.log(filterValue) // chemistry
          let theKey = filterUpdatedKey
          const subFilterKeys = Object.keys(this.subFilters)
          subFilterKeys.forEach((key) => {
            // if the updated filter has sub filters, continue check
            if (this.subFilters[key]) {
              // console.log(this.subFilters[key])
              // find the subfilter with matching key
              const match = this.subFilters[key].find((subFilter) => {
                console.log('key', subFilter.key)
                console.log('filterValue', filterValue)
                return subFilter.key === filterValue
              })
              console.log(match)
              // get the aggregation key
              if (match) {
                theKey = match.agg // subject_area
              }
            }
          })
          return theKey
        }
        // using lodash to avoid discrepancies between comparing nested objects and arrays
        if (!isEqual(newVal, oldVal)) {
          let query = Object.assign({}, this.$route.query)
          if (newVal.length > 0) {
            const theKey = getFilterUpdatedKey(this.groupKey, newVal.toString())
            console.log(theKey)
            query = {
              ...this.$route.query,
              page: 1,
              [theKey]: newVal.toString()
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
    }
    // getFilterUpdatedKey(filterUpdatedKey, filterValue) {
    //   let theKey = filterUpdatedKey
    //   const subFilterKeys = Object.keys()
    //   subFilterKeys.forEach((key) => {
    //     // if the updated filter has sub filters, continue check
    //     if (this.subFilters[key]) {
    //       // find the subfilter with matching key
    //       const match = this.subFilters[key].find((subfilter) => {
    //         subfilter.key === filterValue
    //       })
    //       // get the aggregation key
    //       theKey = match.agg
    //     }
    //   })
    //   return theKey
    // }
  }
}
</script>
