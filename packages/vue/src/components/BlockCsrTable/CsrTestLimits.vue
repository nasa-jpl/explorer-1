<script setup lang="ts">
import { reactive } from 'vue'
import { type ExportPackageRate } from './BlockCsrTable.vue'

interface CsrTestLimitsProps {
  params: {
    data: {
      ExportPackageRates: ExportPackageRate[]
    }
  }
}

const props = withDefaults(defineProps<CsrTestLimitsProps>(), {
  params: undefined
})
const { params } = reactive(props)

const openModal = () => {
  // @ts-ignore
  params.openModal(params.data)
}
</script>
<template>
  <div class="CsrTestLimits">
    <p
      v-if="params.data.ExportPackageRates?.length"
      class="text-action hover:text-action-hover hover:cursor-pointer underline"
      @click="openModal()"
    >
      <span class="hidden lg:inline">View Test Limits</span>
      <span class="inline lg:hidden">View</span>
    </p>
  </div>
</template>
