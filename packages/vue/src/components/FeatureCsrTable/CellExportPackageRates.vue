<script setup lang="ts">
import { computed, reactive, ref, shallowRef } from 'vue'
import {
  ModuleRegistry,
  AllCommunityModule,
  ValidationModule,
  GridApi,
  type GridReadyEvent
} from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import BaseButton from './../BaseButton/BaseButton.vue'

ModuleRegistry.registerModules([AllCommunityModule])
ModuleRegistry.registerModules([ValidationModule])

interface exportPackageRate {
  id: number
  exportPackageId: number
  totalDose: string
  doseRate: string
  totalFluence: string
  lethOrEnergy: string
  fluence: string
  energy: string
}

interface CellExportPackageRatesProps {
  params: {
    data: {
      exportPackageRates: exportPackageRate[]
    }
    leftPosition: string
  }
}

const props = withDefaults(defineProps<CellExportPackageRatesProps>(), {
  params: undefined
})
const { params } = reactive(props)
const gridApi = shallowRef<GridApi | undefined>(undefined)
const show = ref(false)
const toggle = () => {
  show.value = !show.value
}
const colDefs = ref([
  { field: 'totalDose' },
  { field: 'doseRate' },
  { field: 'totalFluence' },
  { field: 'lethOrEnergy' },
  { field: 'fluence' },
  { field: 'energy' }
])
const defaultcolDef = {
  flex: 1
}
const leftPosition = computed(() => {
  // @ts-ignore
  return params.leftPosition()
})
const onGridReady = (gridParams: GridReadyEvent) => {
  gridApi.value = gridParams.api
}
</script>
<template>
  <div class="CellExportPackageRates">
    <div
      class="CellExportPackageRatesButtonWrapper absolute"
      :style="`left: ${leftPosition};`"
    >
      <BaseButton
        class="ml-4"
        variant="secondary"
        compact
        @click="toggle"
        >{{ show ? 'Hide' : 'Show' }} Limits</BaseButton
      >
    </div>
    <div
      v-if="show"
      class="pt-[50px]"
    >
      <ag-grid-vue
        class="w-full h-40"
        :row-data="params.data.exportPackageRates"
        :column-defs="colDefs"
        :default-col-def="defaultcolDef"
        @grid-ready="onGridReady"
      >
      </ag-grid-vue>
    </div>
  </div>
</template>
