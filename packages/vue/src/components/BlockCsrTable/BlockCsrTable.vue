<script setup lang="ts">
import { computed, reactive, ref, shallowRef, onMounted } from 'vue'
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

interface BlockCsrTableProps {
  rowData?: BlockCsrTableRow[]
  apiEndpoint?: string
}

export interface ExportPackageRate {
  Id: number
  ExportPackageId: number
  TotalDose: string
  DoseRate: string
  TotalFluence: string
  LETthOrEnergy: string
  Fluence: string
  Energy: string
}
interface BlockCsrTableRow {
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
const props = withDefaults(defineProps<BlockCsrTableProps>(), {
  rowData: undefined,
  apiEndpoint: undefined
})
const { rowData, apiEndpoint } = reactive(props)
const gridApi = shallowRef<GridApi | undefined>(undefined)

const BlockCsrTableRef = ref()
const fetchedRowData = ref()
const computedRowData = computed(() => {
  return fetchedRowData.value || rowData
})
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
  accentColor: 'rgb(25 156 227)' // jpl-blue-light,
})

const headerClass = [
  'min-w-[6rem] bg-jpl-blue-darker edu:bg-jpl-violet-darker text-subtitle text-white text-sm border-gray-light-mid lg:p-5 p-3 border-b text-left'
]
const defaultcolDef = {
  flex: 1,
  filter: true,
  suppressMovable: true,
  headerClass
}
const colDefs = ref([
  {
    field: 'GenericPartNumber',
    headerName: 'Part Number',
    filterParams: {
      buttons: ['reset', 'apply'],
      closeOnApply: true
    }
  },
  {
    field: 'Manufacturer',
    wrapText: true,
    autoHeight: true,
    filterParams: {
      buttons: ['reset', 'apply'],
      closeOnApply: true
    }
  },
  {
    field: 'Type',
    headerName: 'Test Type',
    wrapText: true,
    autoHeight: true,
    filterParams: {
      buttons: ['reset', 'apply'],
      closeOnApply: true
    }
  },
  {
    field: 'PartTechnology',
    headerName: 'Part Technology',
    filterParams: {
      buttons: ['reset', 'apply'],
      closeOnApply: true
    }
  },
  {
    field: 'Description',
    headerName: 'Description',
    wrapText: true,
    autoHeight: true,
    filterParams: {
      buttons: ['reset', 'apply'],
      closeOnApply: true
    }
  },
  {
    field: 'ExportPackageRates',
    headerName: 'Test Limits',
    cellDataType: 'object',
    filter: false,
    cellRenderer: CsrTestLimits,
    cellRendererParams: {
      openModal: openModal.bind(this)
    }
  },
  {
    field: 'Attachment',
    filter: true,
    filterParams: {
      filterOptions: ['blank', 'notBlank'],
      defaultOption: 'notBlank',
      buttons: ['reset', 'apply'],
      closeOnApply: true
    },
    cellRenderer: CsrAttachment
  }
])

async function getRowData() {
  if (apiEndpoint) {
    try {
      let result = await fetch(apiEndpoint)
      result = await result.json()
      fetchedRowData.value = result
      return result
    } catch (e) {
      console.log(e)
    }
  }
}

onMounted(async () => {
  await getRowData()
})

const onGridReady = (params: GridReadyEvent) => {
  gridApi.value = params.api
}

const onFilterTextBoxChanged = () => {
  gridApi.value!.setGridOption('quickFilterText', filterText.value)
}
</script>
<template>
  <client-only>
    <div
      v-if="computedRowData"
      ref="BlockCsrTableRef"
      class="BlockCsrTable"
    >
      <SearchInput
        v-model="filterText"
        class="mb-3"
        placeholder="Filter parts&hellip;"
        @input="onFilterTextBoxChanged()"
      />
      <ag-grid-vue
        class="w-full"
        :theme="theme"
        :row-data="computedRowData"
        :column-defs="colDefs"
        :default-col-def="defaultcolDef"
        dom-layout="autoHeight"
        pagination
        :pagination-page-size="20"
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
            <p v-if="modalData.Description">
              <strong>Description:</strong> {{ modalData.Description }}
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
  </client-only>
</template>
<style type="scss">
.BlockCsrTable {
  .ag-root-wrapper,
  .ag-cell,
  .ag-theme-params-1 {
    @apply font-primary;
  }
  .ag-cell-wrap-text {
    line-height: 1.25rem;
    padding: 0.75rem 0;
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
