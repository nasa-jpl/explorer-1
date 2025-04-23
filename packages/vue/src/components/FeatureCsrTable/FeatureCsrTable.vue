<script setup lang="ts">
import { reactive, ref, shallowRef } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseModalDialog from '../BaseModal/BaseModalDialog.vue'
import CsrAttachment from './CsrAttachment.vue'
import CsrTestLimits from './CsrTestLimits.vue'
import CsrTestLimitsTable from './CsrTestLimitsTable.vue'
import SearchInput from './../SearchInput/SearchInput.vue'

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

const theme = themeMaterial.withParams({
  accentColor: 'rgb(25 156 227)' // jpl-blue-light
})

const defaultcolDef = {
  flex: 1
}
const headerClass = [
  'min-w-[6rem] bg-jpl-blue-darker edu:bg-jpl-violet-darker text-subtitle text-white text-sm border-gray-light-mid lg:p-5 p-3 border-b text-left'
]
const colDefs = ref([
  {
    field: 'GenericPartNumber',
    headerName: 'Part Number',
    filter: true,
    suppressMovable: true,
    headerClass
  },
  { field: 'Manufacturer', filter: true, suppressMovable: true, headerClass },
  { field: 'Type', headerName: 'Test Type', filter: true, suppressMovable: true, headerClass },
  {
    field: 'PartTechnology',
    headerName: 'Part Technology',
    filter: true,
    suppressMovable: true,
    headerClass
  },
  {
    field: 'ExportPackageRates',
    headerName: 'Test Limits',
    cellDataType: 'object',
    cellRenderer: CsrTestLimits,
    cellRendererParams: {
      openModal: openModal.bind(this)
    },
    suppressMovable: true,
    headerClass
  },
  {
    field: 'Attachment',
    filter: true,
    filterParams: {
      filterOptions: ['blank', 'notBlank'],
      defaultOption: 'notBlank'
    },
    suppressMovable: true,
    headerClass,
    cellRenderer: CsrAttachment
  }
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
    class="FeatureCsrTable"
  >
    <SearchInput
      v-model="filterText"
      class="mb-3"
      placeholder="Filter parts&hellip;"
      @input="onFilterTextBoxChanged()"
    />
    <ag-grid-vue
      class="w-full h-[80vh]"
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
      width-class="max-w-5xl"
      @close="closeModal()"
    >
      <div
        v-if="modalData"
        class="mb-8 text-sm"
      >
        <div class="mb-5">
          <p v-if="modalData.GenericPartNumber">
            <strong>Part Number:</strong> {{ modalData.GenericPartNumber }}
          </p>
          <p v-if="modalData.Manufacturer">
            <strong>Manufacturer:</strong> {{ modalData.Manufacturer }}
          </p>
          <p v-if="modalData.Type"><strong>Test Type:</strong> {{ modalData.Type }}</p>
          <p v-if="modalData.PartTechnology">
            <strong>Part Technology:</strong> {{ modalData.PartTechnology }}
          </p>
          <p v-if="modalData.Attachment">
            <strong>Attachment: </strong>
            <BaseLink
              :href="modalData.Attachment"
              class="inline"
              variant="default"
              target="_blank"
              >Download</BaseLink
            >
          </p>
        </div>
        <h2 class="text-lg tracking-tight mb-3">Test Limits</h2>
        <CsrTestLimitsTable :data="modalData.ExportPackageRates" />
      </div>
    </BaseModalDialog>
  </div>
</template>
<style type="scss">
.FeatureCsrTable {
  .ag-root-wrapper,
  .ag-cell,
  .ag-theme-params-1 {
    @apply font-primary;
  }
  .ag-filter-filter {
    .ag-wrapper::before {
      @apply hidden;
    }
    .ag-input-field-input {
      @apply text-xs;
    }
  }
}
</style>
