import{_ as l}from"./MetadataEduResource-BsKfeRoh.js";import"./iframe-G_CakBWE.js";import"./preload-helper-D6kgxu3v.js";import"./rangeifyGrades-CP9hdYcA.js";import"./IconProfile-IRX8YLGf.js";import"./IconTime-a2dzJKny.js";const L={title:"Components/Utilities/MetadataEduResource",component:l,tags:["cards"],globals:{theme:"ThemeEdu"},excludeStories:/.*Data$/,parameters:{docs:{description:{component:"A row of metadata icons and text that displays key information about a post. Specifically for use with ThemeEdu"}}}},r={resource:{title:"Event title",primarySubject:{subject:"Engineering"},gradeLevels:[{gradeLevel:"All Ages"}]},compact:!1,variant:"primary"},e={name:"MetadataEduResource",args:{...r}},a={args:{...r,resource:{...r.resource,gradeLevels:[{gradeLevel:"All Ages"},{gradeLevel:"K"},{gradeLevel:"1"},{gradeLevel:"2"},{gradeLevel:"5"},{gradeLevel:"6"},{gradeLevel:"7"},{gradeLevel:"8"}],time:{time:"Under 30 mins"}},variant:"secondary",showTime:!0}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'MetadataEduResource',
  args: {
    ...MetadataEduResourceData
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var o,d,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...MetadataEduResourceData,
    resource: {
      ...MetadataEduResourceData.resource,
      gradeLevels: [{
        gradeLevel: 'All Ages'
      }, {
        gradeLevel: 'K'
      }, {
        gradeLevel: '1'
      }, {
        gradeLevel: '2'
      }, {
        gradeLevel: '5'
      }, {
        gradeLevel: '6'
      }, {
        gradeLevel: '7'
      }, {
        gradeLevel: '8'
      }],
      time: {
        time: 'Under 30 mins'
      }
    },
    variant: 'secondary',
    showTime: true
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const E=["MetadataEduResourceData","BaseStory","MultipleGradeLevels"];export{e as BaseStory,r as MetadataEduResourceData,a as MultipleGradeLevels,E as __namedExportsOrder,L as default};
