<script setup lang="ts">
import { reactive, ref, shallowRef, nextTick } from 'vue'
import CellExportPackageRates from './CellExportPackageRates.vue'

import {
  ModuleRegistry,
  AllCommunityModule,
  ValidationModule,
  GridApi,
  type GridReadyEvent
} from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

ModuleRegistry.registerModules([AllCommunityModule])
ModuleRegistry.registerModules([ValidationModule])

interface FeatureCsrTableProps {
  rowData: FeatureCsrTableRow[]
}

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
interface FeatureCsrTableRow {
  id: number
  exportId: number
  testRecordId: number
  attachment: string
  status: number
  genericPartNumber: string
  description: string
  partTechnology: string
  partLDC: string
  manufacturer: string
  type: string
  testSubTypes: string
  actualCompletionDate: string
  exportPackageRates: exportPackageRate[]
}
const props = withDefaults(defineProps<FeatureCsrTableProps>(), {
  rowData: undefined
})
const { rowData } = reactive(props)
const gridApi = shallowRef<GridApi | undefined>(undefined)

const FeatureCsrTableRef = ref()
const filterText = ref()
const exportPackageRatesLeftPosition = ref('0')
const defaultcolDef = {
  flex: 1
}
const colDefs = ref([
  { field: 'genericPartNumber', headerName: 'Part Number', filter: true },
  { field: 'manufacturer', filter: true },
  { field: 'type', headerName: 'Test Type', filter: true },
  { field: 'partTechnology', headerName: 'Part Technology', filter: true },
  {
    // custom cell component
    // https://www.ag-grid.com/vue-data-grid/components/
    field: 'exportPackageRates',
    header: 'Test Limits',
    cellDataType: 'object',
    cellRenderer: CellExportPackageRates,
    cellRendererParams: {
      leftPosition: () => exportPackageRatesLeftPosition.value
    },
    autoHeight: true
  },
  { field: 'attachment', filter: true }
])

const onGridReady = (params: GridReadyEvent) => {
  gridApi.value = params.api
}

const onFilterTextBoxChanged = () => {
  gridApi.value!.setGridOption('quickFilterText', filterText.value)
}

const updatePosition = () => {
  nextTick(() => {
    // update left position of export package rates column (ensures proper button placement)
    exportPackageRatesLeftPosition.value = FeatureCsrTableRef.value.querySelector(
      '[col-id="exportPackageRates"]'
    ).style?.left
  })
}
</script>
<template>
  <div
    v-if="rowData"
    ref="FeatureCsrTableRef"
  >
    <input
      v-model="filterText"
      type="text"
      placeholder="Quick Search"
      @input="onFilterTextBoxChanged()"
    />
    <ag-grid-vue
      class="w-full h-80"
      :row-data="rowData"
      :column-defs="colDefs"
      :default-col-def="defaultcolDef"
      :row-height="50"
      pagination
      @grid-ready="onGridReady"
      @grid-size-changed="updatePosition"
      @column-moved="updatePosition"
      @column-resized="updatePosition"
    >
    </ag-grid-vue>
  </div>
</template>
<style lang="scss">
.ag-body {
  .ag-row {
    // position: relative;
  }
  .ag-cell.ag-cell-not-inline-editing.ag-cell-auto-height[col-id='exportPackageRates'] {
    left: unset !important;
    width: 100% !important;
  }
}
</style>
