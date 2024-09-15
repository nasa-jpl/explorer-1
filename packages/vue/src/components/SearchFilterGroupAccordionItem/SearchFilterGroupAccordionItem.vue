<script setup lang="ts">
import { computed, ref } from 'vue'
import { uniqueId } from 'lodash'
import IconPlus from './../Icons/IconPlus.vue'
const ariaExpanded = ref(false)
const isHidden = ref(true)
const itemId = ref(uniqueId())

const panelId = computed(() => {
  return `filterGroup_accordion_panel_${itemId.value}`
})

const headingId = computed(() => {
  return `filterGroup_accordion_heading_${itemId.value}`
})

const handleClick = () => {
  ariaExpanded.value = !ariaExpanded.value
  isHidden.value = !isHidden.value
  if (isHidden.value) {
    emit('filterGroupAccordionItemClosed')
  } else {
    emit('filterGroupAccordionItemOpened')
  }
}

const emit = defineEmits(['filterGroupAccordionItemOpened', 'filterGroupAccordionItemClosed'])
</script>
<template>
  <div
    class="SearchFilterGroupAccordionItem border-t pt-2"
    :class="{
      '-open border-gray-light-mid  -mb-px': !isHidden,
      'border-transparent mb-2': isHidden
    }"
  >
    <div class="SearchFilterGroupAccordionItemHeader flex flex-row w-full content-between">
      <template v-if="$slots.header">
        <slot name="header"></slot>
        <button
          v-bind-once="{ id: headingId, 'aria-controls': panelId }"
          :aria-expanded="ariaExpanded"
          class="SearchFilterGroupAccordionItem-trigger group block w-auto text-body-lg pl-4 pr-1 -my-2"
          @click="handleClick()"
        >
          <span
            class="SearchFilterGroupAccordionItem-icon inline-block text-xs text-action flex-shrink-0 transform transition-transform"
            :class="{ '!rotate-45': !isHidden }"
          >
            <IconPlus />
          </span>
        </button>
      </template>
    </div>
    <div
      v-show="!isHidden"
      class="SearchFilterGroupAccordionItemContent"
    >
      <div
        v-bind-once="{ id: panelId, 'aria-labelledby': headingId }"
        role="region"
        class="SearchFilterGroupAccordionItem-panel border-b border-gray-light-mid"
      >
        <slot name="default" />
      </div>
    </div>
  </div>
</template>
