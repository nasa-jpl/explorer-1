<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

interface StringKeys {
  [key: string]: any
}
interface exportPackageRate extends StringKeys {
  id: number
  exportPackageId: number
  totalDose: string
  doseRate: string
  totalFluence: string
  lethOrEnergy: string
  fluence: string
  energy: string
}

interface CsrTestLimitsProps {
  params: {
    data: {
      exportPackageRates: exportPackageRate[]
    }
    leftPosition: string
  }
}

const props = withDefaults(defineProps<CsrTestLimitsProps>(), {
  params: undefined
})
const { params } = reactive(props)
const fieldTypes = ref([
  { name: 'totalDose', title: 'Total Dose' },
  { name: 'doseRate', title: 'Dose Rate' },
  { name: 'totalFluence', title: 'Total Fluence' },
  { name: 'lethOrEnergy', title: 'Leth or Energy' },
  { name: 'fluence', title: 'Fluence' },
  { name: 'energy', title: 'Energy' }
])
const exportPackage = computed((): exportPackageRate => {
  return params?.data?.exportPackageRates[0]
})
// const parsed = computed(() => {
//   let output = ''
//   const rows = params?.data?.exportPackageRates
//   rows.forEach((row) => {
//     fieldTypes.value.forEach((fieldType) => {
//       console.log(fieldType)
//       const fieldName = fieldType.name
//       // @ts-ignore
//       const value = row[fieldName]
//       if (value) {
//         output += `<strong>${fieldType.title}</strong>: ${value}<br>`
//       }
//     })
//   })
//   return output
// })
</script>
<template>
  <div class="CsrTestLimits flex align-middle content-center h-100">
    <table
      v-if="exportPackage"
      class="align-self-center"
    >
      <tbody>
        <template
          v-for="(field, index) in fieldTypes"
          :key="index"
        >
          <tr v-if="exportPackage[field.name]">
            <td>
              <strong>{{ field.title }}:</strong>
            </td>
            <td>{{ exportPackage[field.name] }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <!-- <span v-html="parsed"></span>
    <table v-if="exportPackage && validData">
      <div
        v-for="(field, index) in validData"
        :key="index"
      >
        <tr>
          <td>
            <strong>{{ field.title }}</strong>
          </td>
        </tr>
      </div>
    </table> -->
  </div>
</template>
<style lang="scss">
.CsrTestLimits {
  td {
    line-height: 1.2rem;
  }
}
</style>
