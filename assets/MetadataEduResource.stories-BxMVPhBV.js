import{_ as t}from"./MetadataEduResource-DJ4sc2gI.js";import"./iframe-UYtirdi4.js";import"./preload-helper-PPVm8Dsz.js";import"./rangeifyGrades-BsN0W6xn.js";import"./IconEduTechnology-C2M4UM86.js";import"./IconTime-C1dSvWMa.js";const i={title:"Components/Utilities/MetadataEduResource",component:t,tags:["cards"],globals:{theme:"ThemeEdu"},excludeStories:/.*Data$/,parameters:{docs:{description:{component:"A row of metadata icons and text that displays key information about a post. Specifically for use with ThemeEdu"}}}},r={resource:{title:"Event title",primarySubject:{subject:"Engineering"},gradeLevels:[{gradeLevel:"All Ages"}]},compact:!1,variant:"primary"},e={name:"MetadataEduResource",args:{...r}},a={args:{...r,resource:{...r.resource,gradeLevels:[{gradeLevel:"All Ages"},{gradeLevel:"K"},{gradeLevel:"1"},{gradeLevel:"2"},{gradeLevel:"5"},{gradeLevel:"6"},{gradeLevel:"7"},{gradeLevel:"8"}],time:{time:"Under 30 mins"}},variant:"secondary",showTime:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'MetadataEduResource',
  args: {
    ...MetadataEduResourceData
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const u=["MetadataEduResourceData","BaseStory","MultipleGradeLevels"];export{e as BaseStory,r as MetadataEduResourceData,a as MultipleGradeLevels,u as __namedExportsOrder,i as default};
