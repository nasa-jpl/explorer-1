<template>
  <div>
    <label
      class="sr-only"
      :for="generateId()"
      >{{ title }}</label
    >
    <select
      :id="generateId()"
      v-model="selectValueHandler"
      class="border-0 text-theme-red can-hover:hover:text-theme-red-hover font-secondary font-semibold tracking-wider uppercase align-middle"
    >
      <option
        disabled
        value=""
      >
        {{ title }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
export default {
  name: 'SearchSelectMenu',
  props: {
    selectValue: String,
    title: {
      type: String,
      required: false
    },
    groupKey: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  emits: ['update:selectValue'],
  computed: {
    // to sync both ways parent <--> child
    // ensures accurate filter visual state when using URL query strings
    selectValueHandler: {
      get() {
        return this.selectValue
      },
      set(newValue) {
        this.$emit('update:selectValue', newValue)
      }
    }
  },
  watch: {
    selectValue: {
      // update URL with filter parameters
      handler(e) {
        let query = Object.assign({}, this.$route.query)
        if (e.length > 0) {
          query = {
            ...this.$route.query,
            [this.groupKey]: e.toString()
          }
        } else {
          // clear the param from the URL if no value is passed
          delete query[this.groupKey]
        }
        // ensures history is saved with each change to filters
        this.$router.push({ query })
      }
    }
  },
  methods: {
    generateId() {
      return `select_${this.groupKey}`
    }
  }
}
</script>
