<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { AccordionItemObject } from './../../interfaces.ts'
import { uniqueId } from 'lodash'
import IconClose from './../Icons/IconClose.vue'
import BlockStreamfield from './../BlockStreamfield/BlockStreamfield.vue'

export interface BaseAccordionItemProps {
  headingLevel?: string
  item: AccordionItemObject
}

// define props
const props = withDefaults(defineProps<BaseAccordionItemProps>(), {
  headingLevel: 'h2',
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
  <div class="BaseAccordionItem">
    <div class="BlockAccordionHeader">
      <slot name="header">
        <div
          v-if="headingLevel && item"
          class="border-b border-gray-light-mid"
        >
          <component
            :is="headingLevel"
            class="text-body-lg"
          >
            <button
              :id="headingId"
              :aria-expanded="ariaExpanded"
              class="BlockAccordion-trigger group flex flex-nowrap justify-between items-center w-full p-4 xl:py-6 can-hover:hover:underline focus:outline-none focus:underline"
              :aria-controls="panelId"
              @click="handleClick()"
            >
              <span class="pointer-events-none text-left pr-4">
                {{ item.title }}
              </span>

              <span
                class="BlockAccordion-icon pointer-events-none text-xs text-action flex-shrink-0 transform transition-transform"
                :class="{ 'rotate-45': isHidden }"
              >
                <IconClose />
              </span>
            </button>
          </component>
        </div>
      </slot>
    </div>
    <div
      v-show="!isHidden"
      class="BlockAccordionContent"
    >
      <slot>
        <div
          :id="panelId"
          role="region"
          :aria-labelledby="headingId"
          class="BlockAccordion-panel"
        >
          <div class="px-4 pb-8">
            <BlockStreamfield
              :data="item.body"
              variant="fluid"
            />
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
