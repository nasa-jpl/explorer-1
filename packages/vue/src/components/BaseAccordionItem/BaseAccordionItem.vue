<script setup lang="ts">
/**
 * Component that includes an accessible clickable header that will expand a panel below it
 */

import { computed, reactive, ref } from 'vue'
import type { AccordionItemObject, HeadingLevels } from './../../interfaces.ts'
import { uniqueId } from 'lodash'
import IconPlus from './../Icons/IconPlus.vue'
import IconMinus from './../Icons/IconMinus.vue'

const props = defineProps({
  /**
   * Semantic heading level
   */
  headingLevel: {
    type: String as () => HeadingLevels,
    default: 'h2'
  },
  /**
   * Data object that includes all content that should be rendered in the accordion item
   */
  item: {
    type: Object as () => AccordionItemObject,
    default: () => ({
      title: undefined,
      body: undefined
    })
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

const emit = defineEmits([
  /**
   * Fires when an item is opened
   */
  'accordionItemOpened',
  /**
   * Fires when an item is closed
   */
  'accordionItemClosed'
])

const handleClick = () => {
  ariaExpanded.value = !ariaExpanded.value
  isHidden.value = !isHidden.value
  if (isHidden.value) {
    emit('accordionItemClosed')
  } else {
    emit('accordionItemOpened')
  }
}

defineSlots<{
  /**
   * The entire clickable area of the item, including `heading`.
   * Override with `<template #header>` and requires reconstructing `handleClick()` behavior.
   */
  header(): void
  /**
   * The heading text within the item header. Override with `<template #heading>`
   */
  heading(): void
  /**
   * The entire contents of expanded item, including `panelContents`.
   * Override with `<template #default>` and requires reconstructing `aria-labelledby` attributes.
   */
  default(): void // Use 'void' as the return type
  /**
   * Contents of expanded accordion item. There is no default template.
   * Override with `<template #panelContents>`
   */
  panelContents(): void
}>()
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
