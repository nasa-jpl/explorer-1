import FeatureCsrTable from './FeatureCsrTable.vue'

export default {
  title: 'Components/WWW/FeatureCsrTable',
  component: FeatureCsrTable,
  excludeStories: /.*Data$/
  // argTypes: {
  //   status: {
  //     control: { type: 'text' }
  //   }
  // }
}

export const FeatureCsrTableData = {
  data: [
    {
      id: 1,
      exportId: 1,
      testRecordId: 1,
      attachment: 'https://jpl.nasa.gov/attachment/1',
      status: 0,
      genericPartNumber: 'GPN123',
      description: 'A description for part 1',
      partTechnology: 'BiCMOS',
      partLDC: 'Lot 1',
      manufacturer: 'Texas Instruments',
      type: 'SEE',
      testSubTypes: 'SEEU',
      actualCompletionDate: '2021-10-07T21:01:10Z',
      exportPackageRates: [
        {
          id: 1,
          exportPackageId: 1,
          totalDose: '',
          doseRate: '',
          totalFluence: '',
          lethOrEnergy: '1234',
          fluence: '',
          energy: ''
        }
      ]
    },
    {
      id: 2,
      exportId: 2,
      testRecordId: 2,
      attachment: 'https://jpl.nasa.gov/attachment/2',
      status: 1,
      genericPartNumber: 'GPN345',
      description: 'A description for part 2',
      partTechnology: 'Transistor',
      partLDC: 'Lot 2',
      manufacturer: 'NanoTech',
      type: 'TID',
      testSubTypes: '',
      actualCompletionDate: '2021-10-08T21:01:10Z',
      exportPackageRates: [
        {
          id: 2,
          exportPackageId: 2,
          totalDose: '154',
          doseRate: '789',
          totalFluence: '',
          lethOrEnergy: '',
          fluence: '',
          energy: ''
        }
        // {
        //   id: 3,
        //   exportPackageId: 2,
        //   totalDose: '154',
        //   doseRate: '789',
        //   totalFluence: '',
        //   lethOrEnergy: '',
        //   fluence: '',
        //   energy: ''
        // },
        // {
        //   id: 4,
        //   exportPackageId: 2,
        //   totalDose: '154',
        //   doseRate: '789',
        //   totalFluence: '',
        //   lethOrEnergy: '',
        //   fluence: '',
        //   energy: ''
        // }
      ]
    }
  ]
}

export const BaseStory = {
  args: {
    rowData: FeatureCsrTableData.data
  }
}
