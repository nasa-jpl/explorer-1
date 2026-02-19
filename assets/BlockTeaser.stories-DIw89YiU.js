import{B as o}from"./BlockTeaser-9r3QTHkT.js";import"./iframe-Cbo-gMoN.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseButton-CFcHEwKv.js";import"./BaseImage-C-jvPTC0.js";const p={title:"Components/Blocks/BlockTeaser",component:o,tags:["wagtail-blocks"],excludeStories:/.*Data$/},a={heading:"Perseverance",introduction:"The mission marks humanity’s first step in returning samples from another planet.",buttonText:"Read more",image:{full:{url:"https://picsum.photos/1096/400",width:1096,height:400},half:{url:"https://picsum.photos/540/400",width:548,height:400}},fullWidthImage:!1,teaserPage:[{blockType:"CharBlock"},{blockType:"TextBlock"},{blockType:"CharBlock"},{blockType:"ImageChooserBlock"},{blockType:"BooleanBlock"},{blockType:"PageChooserBlock",page:{label:"Asteroid Watch Overview",title:"Asteroid Watch",url:"/asteroid-watch/"}}]},e={args:{...a}},r={args:{...a,fullWidth:!0}},s={args:{teaserPage:{pageType:"Mission",title:"Perseverance",url:"/missions/perseverance/"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...BlockTeaserData
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...BlockTeaserData,
    fullWidth: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    teaserPage: {
      pageType: 'Mission',
      title: 'Perseverance',
      url: '/missions/perseverance/'
    }
  }
}`,...s.parameters?.docs?.source}}};const m=["BlockTeaserData","BaseStory","FullWidth","Empty"];export{e as BaseStory,a as BlockTeaserData,s as Empty,r as FullWidth,m as __namedExportsOrder,p as default};
