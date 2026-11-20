import{B as o}from"./BlockCta-DfeVcLRc.js";import"./iframe-CUZq7Oz2.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-CNK7AaU7.js";import"./BaseButton-BoqxScql.js";import"./IconExternal-C6zl5m-g.js";import"./IconDownload-W_SM3P3R.js";const g={title:"Components/Blocks/BlockCta",component:o,tags:["!autodocs","wagtail-blocks"],excludeStories:/.*Data$/},a={blockType:"CTABlock",heading:"Sign up to our newsletter to get the latest JPL News",text:"Sign Up",page:{url:"/placeholder"},externalLink:""},t={args:{data:a}},e={args:{data:{heading:a.heading,text:a.text,page:"",externalLink:"http://www.jpl.nasa.gov"}}},n={args:{data:{heading:a.heading,text:a.text,page:"",externalLink:"",document:{url:"https://www.jpl.nasa.gov/"}}}},m=["BlockCtaData","BaseStory","ExternalLink","Document"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: BlockCtaData
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      heading: BlockCtaData.heading,
      text: BlockCtaData.text,
      page: '',
      externalLink: 'http://www.jpl.nasa.gov'
    }
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      heading: BlockCtaData.heading,
      text: BlockCtaData.text,
      page: '',
      externalLink: '',
      document: {
        url: 'https://www.jpl.nasa.gov/'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};export{t as BaseStory,a as BlockCtaData,n as Document,e as ExternalLink,m as __namedExportsOrder,g as default};
