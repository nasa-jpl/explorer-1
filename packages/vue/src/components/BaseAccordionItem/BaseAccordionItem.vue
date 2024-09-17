<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { AccordionItemObject } from './../../interfaces.ts'
import { uniqueId } from 'lodash'
import IconPlus from './../Icons/IconPlus.vue'
import IconMinus from './../Icons/IconMinus.vue'

export interface BaseAccordionItemProps {
  headingLevel?: string
  item: AccordionItemObject
  backgroundClass?: string
}

// define props
const props = withDefaults(defineProps<BaseAccordionItemProps>(), {
  headingLevel: 'h2',
  backgroundClass: undefined,
  item(): AccordionItemObject {
    return {
      title: undefined,
      body: undefined
    }
  }
})

const { headingLevel, item } = reactive(props)

const ariaExpanded = ref(false)
const isHidden = ref(true)
const itemId = ref(uniqueId())

const panelId = computed(() => {
  return `block_accordion_panel_${itemId.value}`
})

const headingId = computed(() => {
  return `block_accordion_heading_${itemId.value}`
})

const handleClick = () => {
  ariaExpanded.value = !ariaExpanded.value
  isHidden.value = !isHidden.value
  if (isHidden.value) {
    emit('accordionItemClosed')
  } else {
    emit('accordionItemOpened')
  }
}

const emit = defineEmits(['accordionItemOpened', 'accordionItemClosed'])
</script>
<template>
  <div
    class="BaseAccordionItem"
    :class="{ '-open': !isHidden }"
  >
    <div class="BaseAccordionHeader">
      <slot name="header">
        <div
          v-if="headingLevel && item"
          :class="{ 'border-b border-gray-light-mid': isHidden }"
        >
          <component
            :is="headingLevel"
            class="!font-normal !tracking-normal"
          >
            <button
              v-bind-once="{ id: headingId, 'aria-controls': panelId }"
              :aria-expanded="ariaExpanded"
              class="BaseAccordion-trigger group flex flex-nowrap justify-between items-center w-full can-hover:hover:underline text-body-lg"
              @click="handleClick()"
            >
              <slot name="heading">
                <div class="pointer-events-none text-left p-4 xl:py-6">
                  {{ item.title }}
                </div>
              </slot>
              <span
                class="BaseAccordion-icon pointer-events-none text-xs text-action flex-shrink-0 transform transition-transform"
              >
                <IconPlus v-if="isHidden" />
                <IconMinus v-else />
              </span>
            </button>
          </component>
        </div>
      </slot>
    </div>
    <div
      v-show="!isHidden"
      class="BaseAccordionContent"
    >
      <slot>
        <div
          v-bind-once="{ id: panelId, 'aria-labelledby': headingId }"
          role="region"
          class="BaseAccordion-panel border-b border-gray-light-mid"
        >
          <slot name="panelContents">
            <pre>{{ item.body }}</pre>
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>
