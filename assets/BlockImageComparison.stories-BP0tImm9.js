import{B as t}from"./BlockImageComparison-DW70nH7r.js";import"./iframe-C9omJrl1.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseImageCaption-hfehSMtE.js";import"./BaseLink-CjvD3--a.js";import"./theme-D13Fc2Zm.js";import"./MixinAnimationCaret-C73p62OV.js";import"./IconCaret-Dhkl0KT0.js";const l={title:"Components/Blocks/BlockImageComparison",component:t,tags:["wagtail-blocks"],decorators:[()=>({template:'<div id="storyRoot" class="container mx-auto"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},a={blockType:"ImageComparisonBlock",beforeImage:{src:{url:"https://picsum.photos/800/450?image=1"},srcCropped:{url:"https://picsum.photos/1320/1320?image=1"}},afterImage:{src:{url:"https://picsum.photos/800/450?image=4"},srcCropped:{url:"https://picsum.photos/1320/1320?image=4"}},caption:"<p>Catnip test subjects from the JPL Mars Cultivation Lab</p>"},o={name:"BlockImageComparison",args:{data:a,customDetailUrl:"https://www.google.com"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'BlockImageComparison',
  args: {
    data: BlockImageComparisonData,
    customDetailUrl: 'https://www.google.com'
  }
}`,...o.parameters?.docs?.source}}};const g=["BlockImageComparisonData","BaseStory"];export{o as BaseStory,a as BlockImageComparisonData,g as __namedExportsOrder,l as default};
