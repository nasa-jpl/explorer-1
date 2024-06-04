<template>
  <div class="BaseCheckboxGroup">
    <label v-if="heading" class="text-lg font-semibold text-gray-900">{{
      heading
    }}</label>
    <p v-if="subHeading" class="text-lg pt-4 pb-2 pr-4">
      {{ subHeading }}
    </p>
    <fieldset class="mt-4">
      <legend v-if="title" class="sr-only">{{ title }}</legend>
      <div v-if="options" class="space-y-4 mb-2 pb-5">
        <div
          v-for="option in options"
          :key="option.id"
          class="relative flex items-start"
        >
          <div class="flex items-center h-5">
            <input
              :id="`${group}_${option.id}`"
              :aria-describedby="
                option.text ? `${group}_${option.id}_description` : null
              "
              :name="option.name"
              :alt="option.alt"
              :value="option.value"
              type="checkbox"
              class="h-5 w-5 mt-0.5"
            />
          </div>
          <div class="mb-1">
            <label
              :for="`${group}_${option.id}`"
              class="ml-3 block text-md text-gray-700"
            >
              <span v-if="option.title" class="font-semibold">{{
                option.title
              }}</span>
              <span v-if="option.text"> - </span>
              <span
                v-if="option.text"
                :id="`${group}_${option.id}_description`"
                class="font-light"
                >{{ option.text }}</span
              >
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseCheckboxGroup',
  props: {
    group: {
      type: String,
      default: null,
      required: false,
    },
    heading: {
      type: String,
      default: null,
      required: false,
    },
    subHeading: {
      type: String,
      default: null,
      required: false,
    },
    title: {
      type: String,
      default: null,
      required: false,
    },
    options: {
      type: Array,
      default: null,
      required: false,
    },
  },
})
</script>
