<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import {
  ModuleRegistry,
  AllCommunityModule,
  ValidationModule,
  GridApi,
  themeMaterial,
  type GridReadyEvent
} from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import { type ExportPackageRate } from './BlockCsrTable.vue'

ModuleRegistry.registerModules([AllCommunityModule])
ModuleRegistry.registerModules([ValidationModule])

interface CsrTestLimitsTableProps {
  data: ExportPackageRate[]
}

withDefaults(defineProps<CsrTestLimitsTableProps>(), {
  data: undefined
})

const headerClass = [
  'bg-jpl-blue-darker edu:bg-jpl-violet-darker text-subtitle text-white text-xs border-gray-light-mid px-3 border-b text-left'
]
const gridApi = shallowRef<GridApi | undefined>(undefined)
const theme = themeMaterial.withParams({
  accentColor: 'rgb(25 156 227)', // jpl-blue-light
  spacing: 5
})
const colDefs = ref([
  {
    field: 'ExportPackageId',
    headerName: 'ID',
    filter: false,
    flex: 0,
    width: 50
  },
  { field: 'TotalDose' },
  { field: 'DoseRate' },
  { field: 'TotalFluence' },
  {
    field: 'LETthOrEnergy',
    headerName: 'LETth or Energy Range'
  },
  {
    field: 'Fluence',
    headerClass,
    filter: 'agNumberColumnFilter',
    suppressMovable: true
  },
  { field: 'Energy', headerClass, filter: 'agNumberColumnFilter', suppressMovable: true }
])
const defaultcolDef = {
  flex: 1,
  filter: 'agNumberColumnFilter',
  suppressMovable: true,
  headerClass
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
    dom-layout="autoHeight"
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
