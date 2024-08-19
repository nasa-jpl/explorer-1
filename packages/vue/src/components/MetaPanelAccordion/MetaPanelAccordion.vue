<script setup lang="ts">
import { reactive } from 'vue'
import type { AccordionItemObject, EduResourceStandardItem } from './../../interfaces'
import BaseAccordionItem from './../BaseAccordionItem/BaseAccordionItem.vue'

interface MetaPanelAccordionProps {
  standards?: EduResourceStandardItem[]
}
const props = withDefaults(defineProps<MetaPanelAccordionProps>(), {
  standards: undefined
})
const { standards } = reactive(props)
</script>

<template>
  <div class="MetaPanelAccordion">
    <BaseAccordionItem
      v-for="(item, index) in standards"
      :key="index"
      heading-level="h3"
      class="mb-2 bg-white"
      :item="item.standard as AccordionItemObject"
    >
      <template #heading>
        <div class="w-full text-left pr-5">
          <div class="text-sm tracking-normal text-action mb-0 can-hover:group-hover:underline">
            {{ item.standard.domain?.domain }}
          </div>
          <div class="text-sm text-gray-mid-dark font-normal tracking-normal">
            {{ item.standard.code }}
          </div>
        </div>
      </template>
      <template #panelContents>
        <div class="pl-3 pb-3 pr-8 text-sm text-gray-dark">
          <p>{{ item.standard.definition }}</p>
        </div>
      </template>
    </BaseAccordionItem>
  </div>
</template>
<style lang="scss">
.MetaPanelAccordion {
  .BaseAccordionItem {
    .BaseAccordionHeader {
      @apply bg-white;
      > div {
        @apply border-none;
      }
      button.BaseAccordion-trigger {
        @apply py-2 px-3;
        @apply can-hover:hover:no-underline;
      }
    }
    &.-open {
      .BaseAccordionHeader {
        button.BaseAccordion-trigger {
          @apply pb-0;
        }
      }
    }
  }
}
</style>
