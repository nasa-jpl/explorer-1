<script setup lang="ts">
import { reactive } from 'vue'
import { type ExportPackageRate } from './BlockCsrTable.vue'

interface CsrDetailsProps {
  params: {
    data: {
      ExportPackageRates: ExportPackageRate[]
    }
  }
}

const props = withDefaults(defineProps<CsrDetailsProps>(), {
  params: undefined
})
const { params } = reactive(props)

const openModal = () => {
  // @ts-ignore
  params.openModal(params.data)
}
</script>
<template>
  <div class="CsrDetails">
    <p
      class="text-action hover:text-action-hover hover:cursor-pointer underline"
      @click="openModal()"
    >
      <span class="hidden lg:inline">View Details</span>
      <span class="inline lg:hidden">View</span>
    </p>
  </div>
</template>
