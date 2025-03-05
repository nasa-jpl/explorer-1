<script lang="ts" setup>
import { onMounted } from 'vue'
import type { FormOption } from '../../interfaces'

interface BaseRadioGroupProps {
  group?: string
  preselected?: string
  heading?: string
  subHeading?: string
  title?: string
  options: FormOption[]
}
const props = withDefaults(defineProps<BaseRadioGroupProps>(), {
  group: undefined,
  preselected: '',
  heading: undefined,
  subHeading: undefined,
  title: undefined,
  options: undefined
})

const emit = defineEmits(['input'])
const model = defineModel({ type: String })
onMounted(() => {
  model.value = props.preselected
})
</script>

<template>
  <div class="BaseRadioGroup">
    <label
      v-if="props.heading"
      class="text-lg font-semibold text-gray-900"
      >{{ props.heading }}</label
    >
    <p
      v-if="props.subHeading"
      class="text-lg pt-4 pb-2 pr-4"
    >
      {{ props.subHeading }}
    </p>
    <fieldset class="mt-4">
      <legend
        v-if="props.title"
        class="sr-only"
      >
        {{ props.title }}
      </legend>
      <div
        v-if="options"
        class="space-y-4 mb-2 pb-5"
      >
        <div
          v-for="option in props.options"
          :key="option.id"
          class="flex items-center"
        >
          <input
            :id="`${group}_${option.id}`"
            v-model.lazy="model"
            :aria-describedby="option.text ? `${group}_${option.id}_description` : undefined"
            :name="option.name"
            :alt="option.alt"
            :value="option.value"
            type="radio"
            :checked="option.id === props.preselected"
            class="h-5 w-5"
            @input="emit('input', $event.target)"
          />
          <label
            :for="`${props.group}_${option.id}`"
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
              :id="`${props.group}_${option.id}_description`"
              class="font-light"
              >{{ option.text }}</span
            >
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>
