import{D as i}from"./DetailHeadline-BHzl2xv5.js";import"./iframe-DiXF1Tot.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-DFw2Y0AK.js";import"./BaseLink-fSLe-o-L.js";import"./MixinAnimationCaret-B_-a_yNq.js";import"./IconCaret-URSj5Sf0.js";import"./BaseHeading-6sUGOnyy.js";import"./BasePill-CYamqPdu.js";import"./constants-KGHeBXa6.js";const D={title:"Components/Utilities/DetailHeadline",component:i,excludeStories:/.*Data$/},o={title:"NASA's Ingenuity Mars Helicopter Recharges Its Batteries in Flight",publicationDate:"2020-08-13",readTime:"3 min read",author:{name:"Jane Platt",organization:"JPL"},topics:[{title:"Mars",url:"/topics/mars"},{title:"Rover",url:"/topics/rover"}]},t={args:o},e={args:{...o,author:[{author:{name:"Author Name",organization:"Organization"}},{author:{name:"Another Author",organization:"Organization"}}]}},r={args:{title:"NASA's Ingenuity Mars Helicopter Recharges Its Batteries in Flight",publicationDate:"2020-08-13",topics:[{title:"Mars",url:"/topics/mars"},{title:"Rover",url:"/topics/rover"}]}},a={args:{...o,pill:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: DetailHeadlineData
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...DetailHeadlineData,
    author: [{
      author: {
        name: 'Author Name',
        organization: 'Organization'
      }
    }, {
      author: {
        name: 'Another Author',
        organization: 'Organization'
      }
    }]
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "NASA's Ingenuity Mars Helicopter Recharges Its Batteries in Flight",
    publicationDate: '2020-08-13',
    topics: [{
      title: 'Mars',
      url: '/topics/mars'
    }, {
      title: 'Rover',
      url: '/topics/rover'
    }]
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...DetailHeadlineData,
    pill: true
  }
}`,...a.parameters?.docs?.source}}};const A=["DetailHeadlineData","BaseStory","MultipleAuthors","NoAuthor","Pill"];export{t as BaseStory,o as DetailHeadlineData,e as MultipleAuthors,r as NoAuthor,a as Pill,A as __namedExportsOrder,D as default};
