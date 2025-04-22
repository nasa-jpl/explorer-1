<script setup lang="ts">
import { reactive, ref, shallowRef } from 'vue'
import {
  ModuleRegistry,
  AllCommunityModule,
  ValidationModule,
  GridApi,
  type GridReadyEvent
} from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import { type ExportPackageRate } from './FeatureCsrTable.vue'

ModuleRegistry.registerModules([AllCommunityModule])
ModuleRegistry.registerModules([ValidationModule])

interface CsrTestLimitsTableProps {
  data: ExportPackageRate[]
}

const props = withDefaults(defineProps<CsrTestLimitsTableProps>(), {
  data: undefined
})
const { data } = reactive(props)
const gridApi = shallowRef<GridApi | undefined>(undefined)

const colDefs = ref([
  { field: 'TotalDose' },
  { field: 'DoseRate' },
  { field: 'TotalFluence' },
  { field: 'LethOrEnergy' },
  { field: 'Fluence' },
  { field: 'Energy' }
])
const defaultcolDef = {
  flex: 1
}
const onGridReady = (gridParams: GridReadyEvent) => {
  gridApi.value = gridParams.api
}
</script>
<template>
  <ag-grid-vue
    class="w-full h-40"
    :row-data="data"
    :column-defs="colDefs"
    :default-col-def="defaultcolDef"
    @grid-ready="onGridReady"
  >
  </ag-grid-vue>
</template>
