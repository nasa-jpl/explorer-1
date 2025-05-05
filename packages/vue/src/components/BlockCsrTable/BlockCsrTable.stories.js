import BlockCsrTable from './BlockCsrTable.vue'

export default {
  title: 'Components/FeatureFlags/BlockCsrTable',
  component: BlockCsrTable,
  excludeStories: /.*Data$/
}

export const BlockCsrTableData = [
  {
    Id: 1,
    TestRecordId: 2765,
    Attachment: 'attachment_filename.pdf',
    Status: 1,
    GenericPartNumber: 'OP467',
    Description: 'QUAD OP AMP Linear Device',
    PartTechnology: 'Bipolar',
    PartLDC: '2416B',
    Manufacturer: 'Analog Devices (Precision Monolithics, Inc.)',
    Type: 'Single Event Effects',
    TestSubTypes: 'Single Event Dielectric Rupture (SEDR)',
    ActualCompletionDate: '2025-03-15',
    ExportPackageRates: [
      {
        Id: 1,
        ExportPackageId: 1,
        TotalDose: '200',
        DoseRate: null,
        TotalFluence: null,
        LETthOrEnergy: null,
        Rates: null,
        Fluence: null,
        Energy: null,
        TestSubType: null
      }
    ]
  },
  {
    Id: 2,
    TestRecordId: 2,
    Attachment: 'https://jpl.nasa.gov/attachment/1',
    Status: 0,
    GenericPartNumber: 'GPN123',
    Description: 'A description for part 1',
    PartTechnology: 'BiCMOS',
    PartLDC: 'Lot 1',
    Manufacturer: 'Texas Instruments',
    Type: 'Single Event Effects',
    TestSubTypes: 'SEEU',
    ActualCompletionDate: '2021-10-07T21:01:10Z',
    ExportPackageRates: [
      {
        Id: 1,
        ExportPackageId: 1,
        TotalDose: null,
        DoseRate: null,
        TotalFluence: null,
        LETthOrEnergy: '1234',
        Fluence: null,
        Energy: null
      }
    ]
  },
  {
    Id: 3,
    TestRecordId: 3,
    Attachment: 'https://jpl.nasa.gov/attachment/2',
    Status: 1,
    GenericPartNumber: 'GPN345',
    Description: 'A description for part 2',
    PartTechnology: 'Transistor',
    PartLDC: 'Lot 2',
    Manufacturer: 'NanoTech',
    Type: 'TID',
    TestSubTypes: '',
    ActualCompletionDate: '2021-10-08T21:01:10Z',
    ExportPackageRates: [
      {
        Id: 2,
        ExportPackageId: 2,
        TotalDose: '154',
        DoseRate: '789',
        TotalFluence: null,
        LETthOrEnergy: null,
        Fluence: null,
        Energy: null
      }
    ]
  },
  {
    Id: 4,
    TestRecordId: 4,
    Attachment: 'https://jpl.nasa.gov/attachment/2',
    Status: 1,
    GenericPartNumber: 'TEST',
    Description: 'A description for part. Lorem ipsum dolor sit amet consectatur.',
    PartTechnology: 'Transistor',
    PartLDC: 'Lot 2',
    Manufacturer: 'Test',
    Type: 'TID',
    TestSubTypes: '',
    ActualCompletionDate: '2021-10-08T21:01:10Z',
    ExportPackageRates: [
      {
        Id: 2,
        ExportPackageId: 2,
        TotalDose: '154',
        DoseRate: '789',
        TotalFluence: null,
        LETthOrEnergy: null,
        Fluence: null,
        Energy: null
      }
    ]
  },
  {
    Id: 4,
    TestRecordId: 4,
    Attachment: 'https://jpl.nasa.gov/attachment/2',
    Status: 1,
    GenericPartNumber: 'TEST',
    Description: 'A description for part 2',
    PartTechnology: 'Transistor',
    PartLDC: 'Lot 2',
    Manufacturer: 'Test',
    Type: 'TID',
    TestSubTypes: '',
    ActualCompletionDate: '2021-10-08T21:01:10Z',
    ExportPackageRates: [
      {
        Id: 2,
        ExportPackageId: 2,
        TotalDose: '154',
        DoseRate: '789',
        TotalFluence: null,
        LETthOrEnergy: null,
        Fluence: null,
        Energy: null
      }
    ]
  },
  {
    Id: 4,
    TestRecordId: 4,
    Attachment: 'https://jpl.nasa.gov/attachment/2',
    Status: 1,
    GenericPartNumber: 'TEST',
    Description: 'A description for part 2',
    PartTechnology: 'Transistor',
    PartLDC: 'Lot 2',
    Manufacturer: 'Test',
    Type: 'TID',
    TestSubTypes: '',
    ActualCompletionDate: '2021-10-08T21:01:10Z',
    ExportPackageRates: [
      {
        Id: 2,
        ExportPackageId: 2,
        TotalDose: '154',
        DoseRate: '789',
        TotalFluence: null,
        LETthOrEnergy: null,
        Fluence: null,
        Energy: null
      }
    ]
  },
  {
    Id: 4,
    TestRecordId: 4,
    Attachment: 'https://jpl.nasa.gov/attachment/2',
    Status: 1,
    GenericPartNumber: 'TEST',
    Description: 'A description for part 2',
    PartTechnology: 'Transistor',
    PartLDC: 'Lot 2',
    Manufacturer: 'Test',
    Type: 'TID',
    TestSubTypes: '',
    ActualCompletionDate: '2021-10-08T21:01:10Z',
    ExportPackageRates: [
      {
        Id: 2,
        ExportPackageId: 2,
        TotalDose: '154',
        DoseRate: '789',
        TotalFluence: null,
        LETthOrEnergy: null,
        Fluence: null,
        Energy: null
      }
    ]
  }
]

export const BaseStory = {
  args: {
    rowData: BlockCsrTableData,
    apiEndpoint: "https://7aysi4dg5l.execute-api.us-gov-west-1.amazonaws.com/dev/records"
  }
}
