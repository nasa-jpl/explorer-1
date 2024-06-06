<template>
  <div class="BaseRadioGroup">
    <label
      v-if="heading"
      class="text-lg font-semibold text-gray-900"
      >{{ heading }}</label
    >
    <p
      v-if="subHeading"
      class="text-lg pt-4 pb-2 pr-4"
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
            class="ml-3 block text-md text-gray-700"
          >
            <span
              v-if="option.title"
              class="font-semibold"
              >{{ option.title }}</span
            >
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
    </fieldset>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { FormOption } from '../../interfaces'
export default defineComponent({
  name: 'BaseRadioGroup',
  props: {
    group: {
      type: String,
      default: null,
      required: false
    },
    preselected: {
      type: String,
      default: null,
      required: false
    },
    heading: {
      type: String,
      default: null,
      required: false
    },
    subHeading: {
      type: String,
      default: null,
      required: false
    },
    title: {
      type: String,
      default: null,
      required: false
    },
    options: {
      type: Array as PropType<FormOption[]>,
      default: null,
      required: false
    }
  }
})
</script>
