<script setup lang="ts">
import { reactive, ref, shallowRef } from 'vue'
import {
  ModuleRegistry,
  AllCommunityModule,
  ValidationModule,
  GridApi,
  themeMaterial,
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
const headerClass = [
  'bg-jpl-blue-darker edu:bg-jpl-violet-darker text-subtitle text-white text-xs border-gray-light-mid lg:p-5 p-3 border-b text-left'
]
const gridApi = shallowRef<GridApi | undefined>(undefined)
const theme = themeMaterial.withParams({
  accentColor: 'rgb(25 156 227)' // jpl-blue-light
})
const colDefs = ref([
  { field: 'ExportPackageId', headerClass, headerName: 'Test ID', suppressMovable: true },
  { field: 'TotalDose', headerClass, filter: 'agNumberColumnFilter', suppressMovable: true },
  { field: 'DoseRate', headerClass, filter: 'agNumberColumnFilter', suppressMovable: true },
  { field: 'TotalFluence', headerClass, filter: 'agNumberColumnFilter', suppressMovable: true },
  { field: 'LethOrEnergy', headerClass, filter: 'agNumberColumnFilter', suppressMovable: true },
  { field: 'Fluence', headerClass, filter: 'agNumberColumnFilter', suppressMovable: true },
  { field: 'Energy', headerClass, filter: 'agNumberColumnFilter', suppressMovable: true }
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
    class="w-full h-40 CsrTestLimitsTable"
    :theme="theme"
    :row-data="data"
    :column-defs="colDefs"
    :default-col-def="defaultcolDef"
    @grid-ready="onGridReady"
  >
  </ag-grid-vue>
</template>
<style lang="scss">
.CsrTestLimitsTable {
  .ag-root-wrapper {
    @apply overflow-visible;
  }
}
</style>
