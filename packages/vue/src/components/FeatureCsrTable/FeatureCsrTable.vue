<script setup lang="ts">
import { reactive, ref, shallowRef, nextTick } from 'vue'
import BaseModalDialog from '../BaseModal/BaseModalDialog.vue'
import CsrTestLimits from './CsrTestLimits.vue'
import CsrTestLimitsTable from './CsrTestLimitsTable.vue'

import {
  ModuleRegistry,
  AllCommunityModule,
  ValidationModule,
  GridApi,
  themeMaterial,
  type GridReadyEvent
} from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

ModuleRegistry.registerModules([AllCommunityModule])
ModuleRegistry.registerModules([ValidationModule])

interface FeatureCsrTableProps {
  rowData: FeatureCsrTableRow[]
}

export interface ExportPackageRate {
  Id: number
  ExportPackageId: number
  TotalDose: string
  DoseRate: string
  TotalFluence: string
  LethOrEnergy: string
  Fluence: string
  Energy: string
}
interface FeatureCsrTableRow {
  Id: number
  TestRecordId: number
  Attachment: string
  Status: number
  GenericPartNumber: string
  Description: string
  PartTechnology: string
  PartLDC: string
  Manufacturer: string
  Type: string
  TestSubTypes: string
  ActualCompletionDate: string
  ExportPackageRates: ExportPackageRate[]
}
const props = withDefaults(defineProps<FeatureCsrTableProps>(), {
  rowData: undefined
})
const { rowData } = reactive(props)
const gridApi = shallowRef<GridApi | undefined>(undefined)

const FeatureCsrTableRef = ref()
const filterText = ref()
const showModal = ref(false)
const modalData = ref()
const closeModal = () => {
  showModal.value = false
  modalData.value = undefined
}
const openModal = (data: any) => {
  modalData.value = data
  showModal.value = true
}

const theme = themeMaterial
const defaultcolDef = {
  flex: 1
}
const colDefs = ref([
  { field: 'GenericPartNumber', headerName: 'Part Number', filter: true },
  { field: 'Manufacturer', filter: true },
  { field: 'Type', headerName: 'Test Type', filter: true },
  { field: 'PartTechnology', headerName: 'Part Technology', filter: true },
  {
    field: 'ExportPackageRates',
    headerName: 'Test Limits',
    cellDataType: 'object',
    cellRenderer: CsrTestLimits,
    cellRendererParams: {
      openModal: openModal.bind(this)
    },
    autoHeight: true
  },
  { field: 'Attachment', filter: true }
])

const onGridReady = (params: GridReadyEvent) => {
  gridApi.value = params.api
}

const onFilterTextBoxChanged = () => {
  gridApi.value!.setGridOption('quickFilterText', filterText.value)
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
      class="w-full h-[80vh] BlockText -small text-body-sm"
      :theme="theme"
      :row-data="rowData"
      :column-defs="colDefs"
      :default-col-def="defaultcolDef"
      :row-height="50"
      pagination
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
    <BaseModalDialog
      v-show="showModal"
      bg-close
      @close="closeModal()"
    >
      <template #modalHeader> Test Limits </template>
      <div class="mb-8">
        <CsrTestLimitsTable
          v-if="modalData"
          :data="modalData"
        />
      </div>
    </BaseModalDialog>
  </div>
</template>
