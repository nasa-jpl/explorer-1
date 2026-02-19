import{N as s}from"./NewsDetailMediaContact-Cbj1n8l5.js";import"./iframe-Cbo-gMoN.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/WWW/NewsDetail/NewsDetailMediaContact",component:s,tags:["listings"]},a=[{contact:{name:"Test Person",address:"Jet Propulsion Laboratory, Pasadena, Calif.",email:"test.person@jpl.nasa.gov",phone:"818-354-1234"}}],e={args:{contacts:a,releaseNumber:"2020-140"}},n={args:{contacts:[...a,{contact:{name:"Person A / Person B",address:"",email:"person_a@jpl.nasa.gov / person_b@jpl.nasa.gov",phone:""}},{contact:{name:"Person A and Person B",address:"",email:"person_a@jpl.nasa.gov, person_b@jpl.nasa.gov",phone:""}},{contact:{name:"Other Person",address:"",email:"other.person@jpl.nasa.gov",phone:""}},{contact:{name:"",address:"",email:"",phone:"818-354-5678"}}],releaseNumber:"2020-140"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    contacts,
    releaseNumber: '2020-140'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    contacts: [...contacts, {
      contact: {
        name: 'Person A / Person B',
        address: '',
        email: 'person_a@jpl.nasa.gov / person_b@jpl.nasa.gov',
        phone: ''
      }
    }, {
      contact: {
        name: 'Person A and Person B',
        address: '',
        email: 'person_a@jpl.nasa.gov, person_b@jpl.nasa.gov',
        phone: ''
      }
    }, {
      contact: {
        name: 'Other Person',
        address: '',
        email: 'other.person@jpl.nasa.gov',
        phone: ''
      }
    }, {
      contact: {
        name: '',
        address: '',
        email: '',
        phone: '818-354-5678'
      }
    }],
    releaseNumber: '2020-140'
  }
}`,...n.parameters?.docs?.source}}};const p=["BaseStory","Multiple"];export{e as BaseStory,n as Multiple,p as __namedExportsOrder,c as default};
