<script setup lang="ts">
import { ref } from 'vue'
import {
  ModuleRegistry,
  AllCommunityModule,
  ValidationModule,
  themeMaterial
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
  'bg-jpl-blue-darker edu:bg-jpl-violet-darker font-secondary text-white text-sm border-gray-light-mid px-3 border-b text-left'
]
const CsrTestLimitsTableRef = ref()
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
  { field: 'TotalDose',
    wrapText: true,
    autoHeight: true, },
  { field: 'DoseRate',
    wrapText: true,
    autoHeight: true, },
  { field: 'TotalFluence',
    wrapText: true,
    autoHeight: true, },
  {
    field: 'LETthOrEnergy',
    wrapText: true,
    autoHeight: true,
    headerName: 'LETth or Energy Range'
  },
  {
    field: 'Fluence',
    wrapText: true,
    autoHeight: true,
  },
  { field: 'Energy',
    wrapText: true,
    autoHeight: true, }
])
const defaultcolDef = {
  flex: 1,
  filter: true,
  suppressMovable: true,
  headerClass,
  filterParams: {
    buttons: ['reset', 'apply'],
    closeOnApply: true
  }
}
</script>
<template>
  <ag-grid-vue
    ref="CsrTestLimitsTableRef"
    class="w-full CsrTestLimitsTable"
    :theme="theme"
    :row-data="data"
    :column-defs="colDefs"
    dom-layout="autoHeight"
    :default-col-def="defaultcolDef"
  >
  </ag-grid-vue>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/CsrTestLimitsTable';
</style>
