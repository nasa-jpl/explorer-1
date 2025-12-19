<template>
  <div class="BaseRadioGroup">
    <label
      v-if="heading"
      class="font-display text-lg font-bold text-gray-900"
      >{{ heading }}</label
    >
    <p
      v-if="subHeading"
      class="text-body-md pt-4 pb-2 pr-4"
    >
      {{ subHeading }}
    </p>
    <fieldset class="mt-4">
      <legend
        v-if="title"
        class="sr-only"
      >
        {{ title }}
      </legend>
      <div
        v-if="options"
        class="space-y-4 mb-2 pb-5"
      >
        <div
          v-for="option in options"
          :key="option.id"
          class="flex items-center"
        >
          <input
            :id="`${group}_${option.id}`"
            :aria-describedby="option.text ? `${group}_${option.id}_description` : undefined"
            :name="option.name"
            :alt="option.alt"
            :value="option.value"
            type="radio"
            :checked="option.id === preselected"
            class="h-5 w-5"
          />
          <label
            :for="`${group}_${option.id}`"
            class="ml-3 block text-md text-gray-mid-dark"
          >
            <span
              v-if="option.title"
              :class="option.text ? 'font-medium' : ''"
              >{{ option.title }}</span
            >
            <span v-if="option.text"> - </span>
            <span
              v-if="option.text"
              :id="`${group}_${option.id}_description`"
              >{{ option.text }}</span
            >
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts">
/** The BaseRadioGroup component is expected to contain an array of options and a grouping name with the goal of selecting a single option. */

import { defineComponent, type PropType } from 'vue'
import type { FormOption } from '../../interfaces'
export default defineComponent({
  name: 'BaseRadioGroup',
  props: {
    /** iContact group id */
    group: {
      type: String,
      default: null,
      required: false
    },
    /** The value that should be preselected */
    preselected: {
      type: String,
      default: null,
      required: false
    },
    /** Heading */
    heading: {
      type: String,
      default: null,
      required: false
    },
    /** Descriptive text or summary */
    subHeading: {
      type: String,
      default: null,
      required: false
    },
    /** Fieldset title, for screen readers */
    title: {
      type: String,
      default: null,
      required: false
    },
    /** Array of `{FormOption}s` */
    options: {
      type: Array as PropType<FormOption[]>,
      default: null,
      required: false
    }
  }
})
</script>
