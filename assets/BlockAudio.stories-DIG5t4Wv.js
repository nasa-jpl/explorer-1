import{B as e}from"./BlockAudio-Dl68KnZH.js";import"./iframe-Bnf9h3W1.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseImagePlaceholder-CPEKL0Fq.js";import"./BaseImage-DqolVunN.js";import"./BaseAudio-T2LESHKa.js";import"./IconPlay-DJ7YilQJ.js";import"./IconVolume-Bbg0w039.js";import"./LayoutHelper-BXg4gDpR.js";const n={title:"Components/Blocks/BlockAudio",component:e,tags:["wagtail-blocks"],excludeStories:/.*Data$/},a={uploadedMedia:{collection:{id:"1",name:"Root",path:"0001"},createdAt:"2020-12-10T07:38:30.951546+00:00",file:"/audio/file_example_MP3_700KB.mp3",fileExtension:"mp3",fileOgg:"",id:"1",sources:"[{'src': '/audio/file_example_MP3_700KB.mp3', 'type': 'audio/mpeg'}]",thumbnail:"",title:"audio file",type:"audio"}},o={name:"BlockAudio",args:{data:a}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'BlockAudio',
  args: {
    data: BlockAudioData
  }
}`,...o.parameters?.docs?.source}}};const u=["BlockAudioData","BaseStory"];export{o as BaseStory,a as BlockAudioData,u as __namedExportsOrder,n as default};
